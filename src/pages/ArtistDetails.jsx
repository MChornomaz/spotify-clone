import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { id: artistId } = useParams();

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId });

  if (isFetchingArtistDetails) return <Loader title="Searching artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData.data[0]} />

      {/* <RelatedSongs
        data={}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      /> */}
    </div>
  );
};

export default ArtistDetails;
