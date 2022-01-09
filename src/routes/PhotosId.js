import { saveImage } from "../utilities/firebase";

function Photos() {
  const handleFile = async (evt) => {
    const file = evt.target.files[0];
    const url = await saveImage(file);
    ShowPicture(url);
  };
  const ShowPicture = (url) => (
    <img alt="selected" id="preview" className="w-80" src={url}></img>
  );

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
        <ShowPicture />
      </div>
    </>
  );
}

export default Photos;
