"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export default function YouTubeVideo({
  videoId,
  title,
  thumbnail,
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900"
      aria-label={`Lire la vidéo: ${title}`}
    >
      <Image
        src={thumbnail || defaultThumbnail}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-xl group-hover:scale-110 transition-transform">
          <PlayIcon className="w-10 h-10 text-white ml-1" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium text-lg">{title}</p>
      </div>
    </button>
  );
}
