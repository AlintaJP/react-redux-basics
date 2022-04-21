import React from 'react';
// Styles
import { Wrapper, Content, Text } from './VideoInfo.styles';
// Types
import Video from '../../models/videoModel';

type Props = {
  video: Video;
};

const VideoInfo: React.FC<Props> = ({ video }) => {
  const formatDigits = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <Wrapper backdrop={video.imageUrl}>
      <Content>
        <Text>
          <h2>{video.title}</h2>
          <h3>Description</h3>
          <p>{video.description}</p>
          <dl className="sub-info">
            <div className="views">
              <dt>VIEWS</dt>
              <dd>{formatDigits(video.viewCount)}</dd>
            </div>
            <div className="likes">
              <dt>LIKES</dt>
              <dd>{formatDigits(video.likeCount)}</dd>
            </div>
            <div className="channel">
              <dt>CHANNEL</dt>
              <dd>{video.channelTitle}</dd>
            </div>
            <div className="published-at">
              <dt>PUBLISHED AT</dt>
              <dd>{new Date(video.publishedAt).toLocaleString()}</dd>
            </div>
          </dl>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default VideoInfo;
