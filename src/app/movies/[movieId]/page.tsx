"use client";

import BackButton from "@/app/_components/BackBtn";
import { movies } from "@/app/data/movies";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaBackward, FaStar } from "react-icons/fa";

interface MovieParams {
  params: Promise<{
    movieId: string;
  }>;
}

export default function MovieDetails({ params }: MovieParams) {
  const unwrappedParams = React.use(params);

  const movie = movies.find((m) => m.id === unwrappedParams.movieId);

  useEffect(() => {
    if (movie) {
      document.title = `NextFlicks | ${movie.title}`;
    } else {
      document.title = "NextFlicks | Movie Not Found";
    }

    // Clean up by resetting the title when component unmounts
    return () => {
      document.title = "NextFlicks 🎬";
    };
  }, [movie]);

  if (!movie) return <p className="text-white p-8">Movie not found</p>;

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen ">
      <BackButton />

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg mb-6 flex flex-col-reverse justify-between items-center lg:justify-center gap-10 text-center">
        <div className=" md:max-w-xl">
          <h2 className="text-4xl font-semibold text-white mb-4">
            {movie?.title}
          </h2>
          <p className="text-lg text-gray-300">{movie?.description}</p>
        </div>

        <Image
          width={200}
          height={200}
          className="w-auto sm:w-[300px] h-auto rounded-[10px] mb-3 "
          src={movie?.poster}
          alt={movie?.title}
        />
      </div>

      <div className="bg-gray-800 p-6 mb-3 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl to-gray-300 ">Rating:</p>
            <div className="flex items-center text-yellow-400 text-center">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold ">{movie?.rating}</span> / 10
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white text-center">
              {movie?.comments}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentsList?.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300 ">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
