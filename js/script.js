const body=document.querySelector("body"),
nav = document.querySelector("nav");
modeToggle = document.querySelector(".dark-light"),
sidebarClose = document.querySelector(".sidebarClose"),
sidebarOpen = document.querySelector(".sidebarOpen");

modeToggle.addEventListener("click" , () =>{
	modeToggle.classList.toggle("active")
	body.classList.toggle("dark")		
})
sidebarOpen.addEventListener("click", () =>{
	nav.classList.add("active");
})
body.addEventListener("click", e =>{
	let clickedElm=e.target;
	if(!clickedElm.classList.contains("sidebarOpen") && (!clickedElm.classList.contains("menu"))){
		nav.classList.remove("active");
	}
})
$(".qrepp").click(function(){
	var audio=new Audio('audio/qrep.mp3');
	audio.play();
})
$(".usaa").click(function(){
	var audio=new Audio('audio/usa.mp3');
	audio.play();
})
$(".koreaa").click(function(){
	var audio=new Audio('audio/korean.mp3');
	audio.play();
})
$(".moon").click(function(){
	var audio=new Audio('audio/dark.mp3');
	audio.play();
})
$(".sun").click(function(){
	var audio=new Audio('audio/light.mp3');
	audio.play();
})
i=0;
$(document).ready(function(){
$("input").keypress(function(){
		$("span").text(i += 1);
	})
})
$(".btn-light").mouseover(function(){
	$(".btn-light").animate({
		height:'+=5px',
		width:'+=10px'
	});
	});
$(".btn-light").mouseout(function(){
	$(".btn-light").animate({
		height:'-=5px',
		width:'-=10px'
	})
});

// Get the elements with class="column"
