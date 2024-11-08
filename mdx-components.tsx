"use client";
import React from "react";
import Image from "next/image";

// Interface definitions
interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

interface ButtonProps extends CommonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface LinkProps extends CommonProps {
  href: string;
  target?: string;
}

interface CodeBlockProps extends CommonProps {
  language?: string;
}

// Custom Button Component
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "font-semibold py-2 px-4 rounded transition duration-200";
  const variantStyles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Heading Components
const H1: React.FC<CommonProps> = ({ children, className = "" }) => (
  <h1 className={`text-4xl font-bold mt-8 mb-4 text-gray-900 ${className}`}>
    {children}
  </h1>
);

const H2: React.FC<CommonProps> = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-bold mt-6 mb-3 text-gray-800 ${className}`}>
    {children}
  </h2>
);

const H3: React.FC<CommonProps> = ({ children, className = "" }) => (
  <h3 className={`text-2xl font-semibold mt-4 mb-2 text-gray-800 ${className}`}>
    {children}
  </h3>
);

// Paragraph Component
const P: React.FC<CommonProps> = ({ children, className = "" }) => (
  <p className={`text-gray-700 leading-relaxed mb-4 ${className}`}>
    {children}
  </p>
);

// Image Component
const Img: React.FC<ImageProps> = ({
  src,
  alt,
  width = 800,
  height = 400,
  className = "",
}) => (
  <div className={`my-6 ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg shadow-md"
    />
  </div>
);

// Blockquote Component
const Blockquote: React.FC<CommonProps> = ({ children, className = "" }) => (
  <blockquote
    className={`border-l-4 border-indigo-500 pl-4 py-2 my-4 italic text-gray-700 ${className}`}
  >
    {children}
  </blockquote>
);

// Code Block Component
const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = "javascript",
  className = "",
}) => (
  <pre
    className={`bg-gray-900 text-white p-4 rounded-lg my-4 overflow-x-auto ${className}`}
  >
    <code className={`language-${language}`}>{children}</code>
  </pre>
);

// Horizontal Rule Component
const Hr: React.FC<{ className?: string }> = ({ className = "" }) => (
  <hr className={`my-8 border-t border-gray-300 ${className}`} />
);

// List Components
const Ul: React.FC<CommonProps> = ({ children, className = "" }) => (
  <ul className={`list-disc list-inside mb-4 text-gray-700 ${className}`}>
    {children}
  </ul>
);

const Ol: React.FC<CommonProps> = ({ children, className = "" }) => (
  <ol className={`list-decimal list-inside mb-4 text-gray-700 ${className}`}>
    {children}
  </ol>
);

const Li: React.FC<CommonProps> = ({ children, className = "" }) => (
  <li className={`mb-2 ${className}`}>{children}</li>
);

// Table Components
const Table: React.FC<CommonProps> = ({ children, className = "" }) => (
  <div className="overflow-x-auto my-6">
    <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
      {children}
    </table>
  </div>
);

const Th: React.FC<CommonProps> = ({ children, className = "" }) => (
  <th
    className={`px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);

const Td: React.FC<CommonProps> = ({ children, className = "" }) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${className}`}
  >
    {children}
  </td>
);

// Export all components
export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  img: Img,
  blockquote: Blockquote,
  code: CodeBlock,
  hr: Hr,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  th: Th,
  td: Td,
  Button,
};
