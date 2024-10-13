var song=document.getElementById("song");
var plz=document.getElementById("play");
var progress=document.getElementById("progress");

function plapaus(){
if(plz.classList.contains("fa-pause")){
song.pause();
plz.classList.remove("fa-pause");
plz.classList.add("fa-play");


}
else{
    song.play();
   
plz.classList.remove("fa-play");
plz.classList.add("fa-pause");
}
}

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
    console.log(progress.value)
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
   
}

progress.onchange=function(){

    song.play();
    song.currentTime=progress.value;
    plz.classList.remove("fa-play");
plz.classList.add("fa-pause");
}