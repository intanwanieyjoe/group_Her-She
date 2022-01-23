var mouseOver = document.getElementById("product-mouseover");
var openMouse = document.getElementById("open-mouseover");
var onDiv = true;

mouseOver.addEventListener("mouseover", openNav);
openMouse.addEventListener("mouseover", function () {
  openMouse.style.display = "block";
  openMouse.style.position = "absolute";
  openMouse.style.marginLeft = "25%";
  openMouse.style.marginRight = "25%";
});

openMouse.addEventListener("mouseout", function () {
  onDiv = false;
  if (!onDiv) {
    openMouse.style.display = "none";
  }
});

function openNav() {
  openMouse.style.display = "block";
  openMouse.style.position = "absolute";
  openMouse.style.marginLeft = "25%";
  openMouse.style.marginRight = "25%";
}
