const buttonShowAside = document.getElementById("aside-toggler")
const growcastEpsContainer = document.getElementById("growcast-eps-container")
const flutterEpsContainer = document.getElementById("flutter-eps-container")
const uxUiEpsContainer = document.getElementById("ux/ui-eps-container")
const diverseEpsContainer = document.getElementById("diverse-eps-container")
const videoContainer = document.getElementById("video-container")


function toggleAside() {
    buttonShowAside.classList.toggle("open")
}

buttonShowAside.addEventListener("click", toggleAside)

function showModal(buttonEl) {
    videoContainer.innerHTML = `
        <iframe class="w-100 h-100" src="${buttonEl.id}" title="Youtube-video-player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
}

function createVideoCard(episode, container) {
    container.innerHTML += `
        <div class="video-cards">
            <div class="container-fluid py-4 h-100">
                <div class="row justify-content-center align-items-end h-50">
                    <button id="${episode.link}" onclick="showModal(this)" data-bs-toggle="modal" data-bs-target="#video-modal">
                        <img class="img-fluid" src="./assets/play-button.png" alt="Play icon.">s
                    </button>
                </div>
                <div class="row align-items-center h-50">
                    <h3>${episode.title}</h3>
                </div>     
            </div>
                                
            <img src="${episode.image}" alt="Imagem em miniatura do video ${episode.title}.">
        <div>
    `
}

episodes.forEach(episode => {
    switch (episode.category) {
        case "Growcast [Episódios]":
            createVideoCard(episode, growcastEpsContainer)
            break;
        case "Webinar em Flutter":
            createVideoCard(episode, flutterEpsContainer)
            break;
        case "Jornada UX/UI":
            createVideoCard(episode, uxUiEpsContainer)
            break;
        default:
            createVideoCard(episode, diverseEpsContainer)
            break;
        }
})