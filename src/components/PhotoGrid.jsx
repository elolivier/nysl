function PhotoGrid(pictures) {
  if (pictures.pictures === null) {
    return <div />;
  }
  const imagesToRender = pictures.pictures;
  return (
    <div className="row">
      {Object.entries(imagesToRender).map(([key, image]) => (
        <div>
          <img key={key} src={image.url} alt={image.author} />
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
