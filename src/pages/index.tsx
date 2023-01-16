import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getPictures } from '../api/unsplash/pictures';
import { ImagesGallery } from '../components/imagesGallery';

export function Home() {
  const {
    data: pictures,
    hasMore,
    ref,
    error,
  } = useInfiniteScroll({
    limit: 6,
    queryFunction: getPictures,
  });

  return (
    <div>
      {error && <div>{error}</div>}
      <ImagesGallery list={pictures} ref={ref} hasMore={hasMore} />
    </div>
  );
}
