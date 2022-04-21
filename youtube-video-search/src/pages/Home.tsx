import React from 'react';
// Components
import HeroImage from '../components/HeroImage/index';
import Grid from '../components/Grid/index';
import Spinner from '../components/Spinner/index';
import SearchBar from '../components/SearchBar/index';
import Button from '../components/Button/index';
import ErrorMessage from '../components/ErrorMessage/index';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
import Thumb from '../components/Thumb';
// Image
import NoImage from '../images/no-image.jpg';
// Constants

function Home() {
  const { videos, isLoading, isError, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (isError) return <ErrorMessage />;

  const title = searchTerm ? 'Search Result' : 'Popular Videos';

  const onClickHanlder = () => {
    setIsLoadingMore(true);
  };

  const items = videos.items.map((video) => (
    <Thumb
      clickable
      image={video.imageUrl ? video.imageUrl : NoImage}
      videoId={video.id}
      key={video.id}
    />
  ));

  return (
    <main>
      {!searchTerm && videos.items[0] ? (
        <HeroImage
          image={videos.items[0].imageUrl}
          channel={videos.items[0].channelTitle}
          title={videos.items[0].title}
        />
      ) : null}
      <SearchBar onChange={setSearchTerm} />
      <Grid title={title} items={items} />
      {isLoading && <Spinner />}
      {!isLoading && <Button text="Load More" onClick={onClickHanlder} />}
    </main>
  );
}

export default Home;
