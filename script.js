let image = document.getElementById("image");

fetch("https://meme-api.com/gimme/ProgrammerHumor", {
  method: "GET",
})
  .then((data) => data.json())
  .then((result) => {
    image.src = result.url;
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
