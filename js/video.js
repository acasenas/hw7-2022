let video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false; 
	video.loop = false;


});
// Plays the Video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

//Pauses the Video 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Play Video");
	video.pause();
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Play Video");
	video.playbackRate = 0.9 * (video.playbackRate);
	console.log(video.playbackRate)
});
//Speed UP 
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Play Video");
	video.playbackRate = (video.playbackRate) / 0.9;
	console.log(video.playbackRate)
});
//skip
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Play Video");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime == video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});
//mute/unmute 
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if(document.querySelector("#mute").textContent == 'Mute'){
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute'
	}
	else{
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute'
	}
});
//Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log(document.querySelector("#slider").value);
	document.querySelector("#volume").textContent = document.querySelector("#slider").value;
	video.volume = (document.querySelector("#slider").value) / 100;
});
//Old Schoool 
document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Old School');
	video.classList.add('oldSchool');
});
//
document.querySelector("#orig").addEventListener("click", function() {
	console.log('Original');
	video.classList.remove('oldSchool');
});