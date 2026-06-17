const side = document.getElementById("side");

function openSide() {
    side.style.right = "0";
    console.log(side.style.right);
}

function closeSide() {
     side.style.right = "100vw";
        console.log("closing")
}