console.log('Welcome to spotfy');

let index=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressBar');
let display=document.getElementById('display');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let masterSongName=document.getElementById('masterSongName');


let songs =[
   {songName : "Let me love you",filePath : "song/1.mp3", coverPath : "covers/1.jpg" },
   {songName : "Kahani suno",filePath : "song/2.mp3", coverPath : "covers/2.jpg" },
   {songName : "Humma Humma",filePath : "song/3.mp3", coverPath : "covers/3.jpg" },
   {songName : "Made you look",filePath : "song/4.mp3", coverPath : "covers/4.jpg" },
   {songName : "Snow man",filePath : "song/5.mp3", coverPath : "covers/5.jpg" }

]


songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

// audioElement.play();

masterPlay.addEventListener('click',()=>{
      if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
      }
      else{
        makeAllPlay();
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
      }


})

audioElement.addEventListener('timeupdate',()=>{
        console.log('timeupdate');  
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressbar.value=progress;

})

myProgressbar.addEventListener('change', ()=>{
       
    audioElement.currentTime  =  myProgressbar.value * audioElement.duration/100;

})


const makeAllPlay=()=>{
  
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{

   element.addEventListener('click',(e)=>{
              makeAllPlay();
              index = parseInt(e.target.id);
              e.target.classList.remove('fa-circle-play');
              e.target.classList.add('fa-circle-pause');
              audioElement.src = 'songs/'+(index+1)+'.mp3';
              audioElement.currentTime=0;
              masterSongName.innerText=songs[index].songName;
              display.src=songs[index].coverPath;
              audioElement.play();
              masterPlay.classList.remove("fa-circle-play");
              masterPlay.classList.add("fa-circle-pause");

   })

})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=4){
        index=0;
    }      
    else{
        index+=1;
    }
    audioElement.src = 'songs/'+(index+1)+'.mp3';
    masterSongName.innerText=songs[index].songName;
    display.src=songs[index].coverPath;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");



})

document.getElementById('pre').addEventListener('click',()=>{
    if(index<=0){
        index=4;
    }      
    else{
        index-=1;
    }
    audioElement.src = 'songs/'+(index+1)+'.mp3';
    audioElement.currentTime=0;
    masterSongName.innerText=songs[index].songName;
    display.src=songs[index].coverPath;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");



})