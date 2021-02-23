const video = document.getElementById("video");

function startVideo(){
    navigator.getUserMedia(
        {
            video:{}
        },
        Stream => video.srcObject = Stream,
        err => console.error(err)
    )
}

startVideo();