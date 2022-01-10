import { saveImage, useData, useUserState } from "../utilities/firebase";
import { useParams } from "react-router";
import { PhotoGrid } from "./PhotoGrid";

let pictureNumber = 1;

export const PhotoList = () => {
  const params = useParams();
  const gameId = params.gameId;
  const [data, loading, error] = useData("/pictures/"+gameId);
  console.log(data)
  const user = useUserState()[0];

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading pictures...</h1>;

  const handleFile = async (evt) => {
    const file = evt.target.files[0];
    await saveImage(file, user, gameId, pictureNumber);
    pictureNumber += Object.keys(data).length;
  };

  return (
    <>
      <div className="container d-flex flex-column">
        <label>
          Select a Picture:{" "}
          <input
            id="picture"
            type="file"
            className="m-2"
            accept="image/*"
            onChange={handleFile}
          ></input>
        </label>
        <PhotoGrid pictures={data}/>
      </div>
    </>
  );
}