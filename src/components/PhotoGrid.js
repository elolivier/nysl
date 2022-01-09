export const PhotoGrid = (pictures) => {
  const imagesToRender = pictures.pictures;
  console.log(pictures)
  return (
    <>
      <div>
        {imagesToRender['picture-1'].author}
      </div>
    </>
  )
}