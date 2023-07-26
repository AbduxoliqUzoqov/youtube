const formBar = document.querySelector(".sr");
const ulVideo = document.querySelector(".videos");



const getHtml = (data) => {
  console.log(data)
  ulVideo.innerHTML = ""
  ulVideo.innerHTML += data.map(res =>
    `<li class="card">
        <iframe class="img" src="https://www.youtube.com/embed/${res.id.videoId}" frameborder="0" allowfullscreen></iframe>
        <div class="post">
          <div class="title">
            ${res.snippet.title}
          </div>
          <div class="chn"><span>${res.snippet.channelTitle}</span></div>
        </div>
      </li>`
  )
}


const getVideos = (query) => {
  const urlApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&key=AIzaSyCIFJP2eL5OpN-orV4LdGzczHg7PzoDV78&q=${query}`;
  fetch(urlApi).then(res => res.json()).then(data => {
    //console.log(data);
    getHtml(data.items)
  });
}




formBar.addEventListener("submit", (e) => {
    e.preventDefault();
    const txquery = formBar.word.value;
    getVideos(txquery);
    formBar.word.value = ""
})