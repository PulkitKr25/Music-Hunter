console.log("Get ready to hunt");

let songIndex = 0;
let audioElement = new Audio('songs/1.m4a');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Leader: Warrior", filePath: "songs/1.m4a" , coverPath: "covers/1.jpg"},
    {songName: "Marcus and Martinus: Make you Believe", filePath: "songs/2.m4a" , coverPath: "covers/2.jpg"},
    {songName: "Stria : Rise from the Ashes", filePath: "songs/3.m4a" , coverPath: "covers/3.jpg"},
    {songName: "KLOUD : Satisfied", filePath: "songs/4.m4a" , coverPath: "covers/4.jpg"},
    {songName: "KLOUD : Dark Down Below", filePath: "songs/5.m4a" , coverPath: "covers/4.jpg"},
    {songName: "Krewella : Alibi", filePath: "songs/6.m4a" , coverPath: "covers/6.jpg"},
    {songName: "Landsowne : Conquer Them All", filePath: "songs/7.m4a" , coverPath: "covers/7.jpg"}
]

songItems.forEach((element, i)=>{

    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         
         
      }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
        
    }
        

})

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
       

})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.m4a`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{

    if(songIndex>=6)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1 ;
    }
    audioElement.src = `songs/${songIndex+1}.m4a`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}
)
document.getElementById('previous').addEventListener('click' , ()=>{

    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1 ;
    }
    audioElement.src = `songs/${songIndex+1}.m4a`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}
)
