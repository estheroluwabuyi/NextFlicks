import { movies, Movie } from "@/app/data/movies";
import Image from "next/image";
import Link from "next/link";

export default function MoviePage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {movies.map((movie: Movie) => (
      <Link href={`/movies/${movie.id}`} key={movie.id}
              className="text-blue-400 hover:text-blue-600"
            >
          <li  className="bg-gray-800 p-4 rounded-lg">
            <Image
              width={200}
              height={200}
              className="w-full h-[300px] lg:h-[250px] rounded-[10px] mb-3"
              src={movie.poster}
              alt={movie.title}
            />
            <div
              className="text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </div>
          </li>
            </Link>
        ))}
      </ul>
        
    </div>
  );
}
