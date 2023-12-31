import React from "react";
import { GENRELISTS } from "../Datas";
import MovieList from "./MovieList";

export default function GenreMovieList() {
  return (
    <section>
      {GENRELISTS.map(
        (genre, index) =>
          index <= 4 && (
            <div key={genre.id} className="pt-5">
              <h1 className="text-gray-100 font-semibold text-xl md:text-2xl px-5 md:px-[4.40rem]">
                {genre.name}
              </h1>
              <MovieList genreId={genre.id} index_={index} />
            </div>
          )
      )}
    </section>
  );
}
