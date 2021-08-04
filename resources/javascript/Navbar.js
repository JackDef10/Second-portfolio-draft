const navigation = document.querySelector(".navbar");
const navText = document.getElementById("nav-text");

window.onscroll = function() {scrollFunction()};

const scrollFuction = () => {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navigation.style.right = "30%";
  } else {
    navigation.style.right = "10%";
  }
}



