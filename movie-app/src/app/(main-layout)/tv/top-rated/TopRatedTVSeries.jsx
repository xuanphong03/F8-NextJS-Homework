"use client";

import CardMovie from "@/app/_components/Card/CardMovie";
import CardMovieSkeleton from "@/app/_components/Skeleton/CardMovieSkeleton";
import tvSeriesApi from "@/app/service/tvSeriesApi";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";

export default function TopRatedTVSeries() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tvList, setTvList] = useState([]);
  const [pagination, setPagination] = useState({
    page: parseInt(search.get("page")) || 1,
    total: 10,
  });

  const queryParams = useMemo(() => {
    const page = search.get("page") || 1;
    return {
      language: "en-US",
      page: parseInt(page),
    };
  }, [search]);

  const getTVSeries = async () => {
    try {
      setIsLoading(true);
      const response = await tvSeriesApi.getTopRated(queryParams);
      const { results, page, total_pages } = response;
      const max_pages = total_pages < 10 ? total_pages : 10;
      setTvList(results);
      setPagination({ page, total: max_pages });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = (page) => {
    setPagination({ ...pagination, page });
    router.push(`${pathname}?${queryString.stringify({ page })}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    getTVSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  return (
    <>
      <div className="grid grid-cols-12 lg:grid-cols-10 gap-5">
        {isLoading &&
          [...Array(20)].map((_, index) => (
            <article
              key={index}
              className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 cursor-pointer overflow-hidden"
            >
              <CardMovieSkeleton />
            </article>
          ))}
        {!isLoading &&
          tvList.map((tv) => (
            <Link
              href={`/tv/${tv.id}`}
              key={tv.id}
              className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
            >
              <CardMovie
                title={tv.name}
                original_title={tv.original_name}
                poster_path={tv.poster_path}
                release_date={tv.release_date}
              />
            </Link>
          ))}
      </div>
      <Pagination
        total={pagination.total}
        initialPage={pagination.page}
        onChange={handleChangePage}
        className="my-5 flex justify-center"
      />
    </>
  );
}
