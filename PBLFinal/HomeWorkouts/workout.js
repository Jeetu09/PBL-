alert("working");
var array = document.querySelectorAll(".image");
for (var i = 0; i < array.length; i++) {

    array[i].style.float="left";
    array[i].querySelector(".heading").style.textAlign="left"
    // array[i].querySelector(".heading")
}

var i=0;

function mouseover(x) {
  console.log(x);
  x.querySelector(".heading").classList.remove("outHeading");
  // x.querySelector(".image").setAttribute("margin-left","50px");
  // x.querySelector(".heading").style.textAlign="right";
  x.classList.add("mouse_overSkill");
  x.querySelector(".description").classList.remove("outDescription");

  // console.log(this.querySelector(".heading").classList.remove("outHeading"));
  // this.classList.remove("outHeading");
}

function mouseout(x) {
  x.querySelector(".heading").classList.add("outHeading");
  x.classList.remove("mouse_overSkill");
  x.querySelector(".description").classList.add("outDescription");
  // x.querySelector(".heading").classList.add("outHeading")
}

// for (var i = 0; i < array.length; i++) {
//   console.log(i);
//   console.log(document.querySelectorAll(".image")[i]);
//   document.querySelectorAll(".image")[i].addEventListner("onmouseover",handleClick);
// }


// document.querySelectorAll(".heading")[2].setAttribute("class","heading in");
function hvr(n) {
  document.querySelectorAll(".heading")[n].classList.remove("outHeading");
  document.querySelectorAll(".description")[n].classList.remove("outDescription");
}
