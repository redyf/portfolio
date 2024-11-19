"use client";
import Link from "next/link";
import React from "react";
import { Code2 } from "lucide-react";

export type Language = {
  name: string;
  percentage: number;
};

type RepoCardProps = {
  url: string;
  name: string;
  description: string;
  stars: number;
  languages: Language[];
};

const LanguageColorMap: { [key: string]: string } = {
  Nix: "bg-violet-400",
  Rust: "bg-orange-300",
  Lua: "bg-blue-900",
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-300",
  Python: "bg-blue-400 opacity-50",
  Elixir: "bg-purple-500 opacity-50",
  Go: "bg-blue-400",
  Shell: "bg-green-400 opacity-95",
  CSS: "bg-purple-500 opacity-50",
  Dart: "bg-teal-400",
  Clojure: "bg-red-400",
  C: "bg-gray-500",
  "C++": "bg-purple-500",
  Java: "bg-red-500",
  Ruby: "bg-red-600",
  SCSS: "bg-purple-500 opacity-50",
  Html: "bg-orange-600",
};

const RepoCard: React.FC<RepoCardProps> = ({
  url,
  name,
  description,
  stars,
  languages,
}) => {
  return (
    <div className="bg-black shadow-lg rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-colors duration-300">
      <div className="h-2 w-full flex">
        {languages.map((lang, index) => (
          <div
            key={index}
            className={`h-full ${LanguageColorMap[lang.name] || "bg-gray-500"}`}
            style={{ width: `${lang.percentage}%` }}
            title={`${lang.name}: ${lang.percentage}%`}
          />
        ))}
      </div>

      <div className="p-6">
        <div className="flex justify-center mb-4">
          <Code2 size={40} className="text-red-500" />
        </div>

        <Link href={url} className="block text-center mb-3">
          <h2 className="text-xl font-bold text-white hover:text-red-500 transition-colors duration-300">
            {name}
          </h2>
        </Link>

        <p className="text-gray-400 text-center mb-4 text-sm">{description}</p>

        <div className="space-y-3">
          <div className="flex items-center justify-center text-yellow-500">
            <span className="mr-1">⭐</span>
            <span>{stars}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-sm text-gray-400"
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    LanguageColorMap[lang.name] || "bg-gray-500"
                  }`}
                />
                <span>{lang.name}</span>
                <span className="text-gray-600">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
