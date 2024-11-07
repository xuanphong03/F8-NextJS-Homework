import Link from "next/link";
import queryString from "query-string";
import { RiSearchLine } from "react-icons/ri";

export default function SuggestKeywordList({ suggestList }) {
  return (
    <ul className="bg-white py-2 text-black flex flex-col gap-1 text-sm">
      {suggestList?.map((suggest) => (
        <li key={suggest.id}>
          <Link
            href={`/search-movie?${queryString.stringify({
              page: 1,
              query: suggest.name,
            })}`}
            className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 px-4 py-2"
          >
            <RiSearchLine /> <span>{suggest.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
