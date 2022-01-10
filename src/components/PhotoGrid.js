export const PhotoGrid = (pictures) => {
  if (pictures.pictures === null) {
    return <></>;
  }
  const imagesToRender = pictures.pictures;
  console.log(imagesToRender)
  return (
    <div className="row">
      {Object.entries(imagesToRender).map(([key, image]) => {
        return (
          <div>
            <img key={key} src={image.url} alt={image.author}></img>
          </div>
        )
      })}
    </div>
  )
}