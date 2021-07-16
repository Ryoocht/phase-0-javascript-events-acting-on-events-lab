// Your code here

const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}
// game container 400px - dodger width 30px = 360px
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});