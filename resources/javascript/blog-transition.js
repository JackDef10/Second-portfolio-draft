window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3570 || document.documentElement.scrollTop > 3570) {
    document.querySelector(".blog-title").style.marginLeft = "0px";
    document.querySelector(".blog-title").style.opacity = "100%";
  }
}