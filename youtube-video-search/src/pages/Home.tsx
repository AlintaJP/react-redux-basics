import React from 'react';
// Components
import HeroImage from '../components/HeroImage/index';
import Grid from '../components/Grid/index';
import Thumb from '../components/Thumb/index';
import Spinner from '../components/Spinner/index';
import SearchBar from '../components/SearchBar/index';
import Button from '../components/Button/index';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// Image
import NoImage from '../images/no-image.jpg';

function Home() {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchTerm && state.items[0] ? (
        <HeroImage
          image={state.items[0].snippet.thumbnails.high.url}
          channel={state.items[0].snippet.channelTitle}
          title={state.items[0].snippet.title}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Videos'}>
        {state.items.map((video) => (
          <Thumb
            key={video.id.videoId ? video.id.videoId : video.id}
            clickable
            image={video.snippet.thumbnails.high ? video.snippet.thumbnails.high.url : NoImage}
            videoId={video.id.videoId ? video.id.videoId : video.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && <Button text="Load More" callback={() => setIsLoadingMore(true)} />}
    </>
  );
}

export default Home;
