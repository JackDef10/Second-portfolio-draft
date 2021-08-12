const gallery = document.getElementById("gallery");
const popUp = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1,2,3,4,5];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement("img");
    const imageContainer = document.createElement("div")
    image.src = `./resources/images/preview/projects-${i}.jpg`;
    image.alt = `This is my project number ${i}`;
    image.classList.add("gallery-img");
    imageContainer.classList.add("gallery-img-container");

    image.addEventListener("click", () =>{
        //pop function
        selectedImage.src = `./resources/images/preview/projects-${i}.jpg`
        popUp.style.transform = `translateY(0)`
        selectedImage.alt = `This is my project number ${i}`;
    })

    gallery.appendChild(imageContainer);
    imageContainer.appendChild(image);
});

popUp.addEventListener("click", ()=>{
    popUp.style.transform = "translateY(-100%)"
    popUp.src = "";
    popUp.alt = "";
})

