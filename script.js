

function erase(){
  document.getElementById('eraser-initial').remove();
}

function fire(){
    

    let fight2= document.getElementById('burn-video');
    fight2.style.display
    if (fight2.style.display === "none") {
        fight2.style.display = "block";
    } else {
        fight2.style.display = "block";
    }
    document.getElementById("paper").style.display="none";
    

    var vid = document.getElementById("video");
    vid.play();

   


    setTimeout(() => {window.location.href = window.location.pathname;}, 2000);

    

    
    
}

