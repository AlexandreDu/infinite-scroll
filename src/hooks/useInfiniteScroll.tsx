import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export type queryFunction<T> = (
  page: number,
  limit: number,
  controller: AbortController
) => Promise<{ data: T[]; error: null | string }>;

export function useInfiniteScroll<T>({
  queryFunction,
  limit,
}: {
  queryFunction: queryFunction<T>;
  limit: number;
}) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);

  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ref } = useInView({
    onChange: (isInView) => {
      if (isInView) {
        setPage((prevPage) => prevPage + 1);
      }
    },
  });

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      const { data: fetchedData, error } = await queryFunction(
        page,
        limit,
        controller
      );
      if (error !== null && error !== 'canceled') setError(error);
      if (fetchedData.length > 0) {
        setData((prevData) => {
          return [...prevData, ...fetchedData];
        });
      }

      if (error !== 'canceled' && error === null && fetchedData.length === 0) {
        setHasMore(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [page, limit, hasMore, queryFunction]);

  return { data, error, hasMore, ref };
}
