const gallery = document.getElementById("gallery");
const popUp = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1,2,3,4,5];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement("img");
    image.src = `./resources/images/preview/projects-${i}.jpg`;
    image.alt = `This is my project number ${i}`;
    image.classList.add("galleryImg");

    image.addEventListener("click", () =>{
        //pop function
        selectedImage.src = `./resources/images/preview/projects-${i}.jpg`
        popUp.style.transform = `translateY(0)`
        selectedImage.alt = `This is my project number ${i}`;
    })

    gallery.appendChild(image);
});

popUp.addEventListener("click", ()=>{
    popUp.style.transform = "translateY(-100%)"
    popUp.src = "";
    popUp.alt = "";
})

