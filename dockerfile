# Pull bun image from Docker Hub
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app/next-app

# Copy package.json and bun.lockb to the container
COPY package.json ./
COPY bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the app source code to the container
COPY . .

# Disable Next.js telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED 1

# For deploying the build version, uncomment the following lines
RUN bun next build
CMD bun next start

# Exposing port 3000 for the Next.js app
EXPOSE 3000

# For starting Next.js in development, use the following line
# CMD bun run dev

# Create a non-root user and switch to it
RUN useradd -m appuser
RUN chown -R appuser:appuser /app
USER appuser
