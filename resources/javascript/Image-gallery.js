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
    })

    gallery.appendChild(image);
});
