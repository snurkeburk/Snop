
function load(){
    let svenska = document.getElementById("svenska-show");
    let engelska = document.getElementById("engelska-show");
    let matte = document.getElementById("matte-show");

    svenska.style.display = "none";
    engelska.style.display = "none";
    matte.style.display = "none";

}


function showSve() {
    let showTools = document.getElementById("svenska-show");
    console.log("reads");
    if (showTools.style.display === "none") {
        showTools.style.display = "block";
    } else {
        showTools.style.display = "none";
    }
  }
  function showEng() {
    let showTools = document.getElementById("engelska-show");
    console.log("reads");
    if (showTools.style.display === "none") {
        showTools.style.display = "block";
    } else {
        showTools.style.display = "none";
    }
  }function showMat() {
    let showTools = document.getElementById("matte-show");
    console.log("reads");
    if (showTools.style.display === "none") {
        showTools.style.display = "block";
    } else {
        showTools.style.display = "none";
    }
  }

