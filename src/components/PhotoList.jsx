import { useParams } from 'react-router';
import { saveImage, useData, useUserState } from '../utilities/firebase';
import PhotoGrid from './PhotoGrid';

let pictureNumber = 1;

function PhotoList() {
  const params = useParams();
  const { gameId } = params;
  const [data, loading, error] = useData(`/pictures/${gameId}`);
  const user = useUserState()[0];

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading pictures...</h1>;

  const handleFile = async (evt) => {
    const file = evt.target.files[0];
    await saveImage(file, user, gameId, pictureNumber);
    pictureNumber += Object.keys(data).length;
  };

  return (
    <div className="container d-flex flex-column">
      <label htmlFor="picture">
        Select a Picture:
        {' '}
        <input
          id="picture"
          type="file"
          className="m-2"
          accept="image/*"
          onChange={handleFile}
        />
      </label>
      <PhotoGrid pictures={data} />
    </div>
  );
}

export default PhotoList;
