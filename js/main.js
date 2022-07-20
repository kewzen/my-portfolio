function home(){

}

function github(){
    window.location.href = 'https://github.com/kewzen';
}

function youtube()
{
    window.location.href = "https://www.youtube.com/channel/UC5lkokEYX0nwvODFERDsE8w"
}


function discord(){
    alert("xkewzen.#3102")
}




    var btn = document.getElementById("mode")
var theme = document.getElementById("theme")
function them() {


 if (theme.getAttribute("href") == "css/lightmain.css"){
    theme.href = "css/darkmain.css"
 }
 
 else{
    theme.href = "css/lightmain.css"
 }
 var ictheme = document.getElementById("sun")
 if (ictheme.getAttribute("src") == "images/moon.png"){
     ictheme.src = "images/Sun.png"
 }
 else {
     ictheme.src = "images/moon.png"
 }

}

function devlog(){
    window.open("devlog.html")

}

function home(){
    window.open("main.html")
}

function link(){
    window.open("links.html")
}

function works(){
    window.open("works.html")
}


function menu(){
    var burg = document.getElementById("menu-icon")
    if(burg.getAttribute("src") == "images/burger.png")
    {
        burg.src = "images/cross.png"
    }
    else{
        burg.src = "images/burger.png"
    }
    
        var v1 = document.getElementById("menu-burger")
        
        if (v1.style.display == "block"){
            v1.style.display = "none"
            
        }
   
        else
        {
            
            v1.style.display = "block"
           
        }
    }
