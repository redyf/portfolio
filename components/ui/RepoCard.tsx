import Link from "next/link";
import React from "react";

interface RepoCardProps {
  url: string;
  name: string;
  description: string;
  stars: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  url,
  name,
  description,
  stars,
}) => {
  return (
    <div className="bg-black shadow-md rounded-lg p-4 mb-4">
      <Link href={url} className="text-blue-500 hover:underline">
        <h2 className="text-lg font-semibold text-white">{name}</h2>
      </Link>
      <p className="text-gray-400">{description}</p>
      <p className="text-yellow-500">⭐ {stars}</p>
    </div>
  );
};

export default RepoCard;
