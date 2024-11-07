"use client";
import YouTube from "react-youtube";

export default function TrailerMovie({ movie }) {
  return <YouTube videoId={movie?.videos?.results[0]?.key} />;
}
