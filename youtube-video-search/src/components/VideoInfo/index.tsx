import React from 'react';
// Styles
import { Wrapper, Content, Text } from './VideoInfo.styles';
// Types
import { Video } from '../../API';

type Props = {
  video: Video;
};

const VideoInfo: React.FC<Props> = ({ video }) => {
  const formatDigits = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <Wrapper backdrop={video.snippet.thumbnails.high.url}>
      <Content>
        <Text>
          <h1>{video.snippet.title}</h1>
          {video.snippet.description ? (
            <>
              <h3>Description</h3>
              <p>{video.snippet.description}</p>
            </>
          ) : null}

          <div className="sub-info">
            <div>
              <h3>VIEWS</h3>
              <div className="views">{formatDigits(video.statistics.viewCount)}</div>
            </div>
            <div className="likes">
              <h3>LIKES</h3>
              <div>{formatDigits(video.statistics.likeCount)}</div>
            </div>
            <div className="channel">
              <h3>CHANNEL</h3>
              <p>{video.snippet.channelTitle}</p>
            </div>
            <div className="published-at">
              <h3>PUBLISHED AT</h3>
              <p>{new Date(video.snippet.publishedAt).toLocaleString()}</p>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default VideoInfo;
