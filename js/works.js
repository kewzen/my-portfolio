



    var btn = document.getElementById("mode")
var theme = document.getElementById("theme")
function them() {


 if (theme.getAttribute("href") == "css/lightwork.css"){
    theme.href = "css/darkwork.css"
 }
 
 else{
    theme.href = "css/lightwork.css"
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
