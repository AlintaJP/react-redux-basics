import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';
// Types
type Props = {
  image: string;
  videoId?: string;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({ image, videoId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${videoId}`}>
          <Image src={image} alt="video-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="video-thumb" />
      )}
    </div>
  );
};

export default Thumb;
