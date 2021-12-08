//camara
let start_camara = document.getElementById("snap");
let video = document.getElementById("video");
let tomar_foto = document.getElementById("take-photo");
let foto = document.getElementById("foto");
/*let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");*/

/*if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
        video.srcObject = stream;
        video.play();
    });
}*/
start_camara.addEventListener('click', async function(){
    let stream = await navigator.mediaDevices.getUserMedia({video:true})
    video.srcObject = stream;
    //video.play();
});

tomar_foto.addEventListener('click', function(){
    foto.getContext("2d").drawImage(video, 0,0, foto.width, foto.height)
    let imagen_base_64 = foto.toDataURL('image/jpg');
    console.log(imagen_base_64)
})