const navigation = document.querySelector(".navbar");
const navText = document.querySelector("nav-item");

window.onscroll = function() {scrollFunction()};

const scrollFuction = () => {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navigation.style.right = "5%";
    navigation.style.padding = "20px 45px";
    navText.style.fontSize="0.7em";
  } else {
    navigation.style.right = "30%";
    navigation.style.padding = "40px 90px";
    navText.style.fontSize = "1.5em";
  }
};



