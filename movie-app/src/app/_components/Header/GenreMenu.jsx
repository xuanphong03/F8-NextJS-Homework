import { FaCaretRight } from "react-icons/fa";

export default function GenreMenu({ genreList }) {
  return (
    <ul className="flex flex-wrap w-[500px] bg-slate-700 px-4 py-2 rounded">
      {genreList?.map((genre) => (
        <li
          key={genre.id}
          className="flex items-center gap-1 hover:cursor-pointer basis-1/2 max-w-[50%] p-1 text-sm hover:text-gray-400 transition-colors"
        >
          <FaCaretRight />
          {genre.name}
        </li>
      ))}
    </ul>
  );
}
