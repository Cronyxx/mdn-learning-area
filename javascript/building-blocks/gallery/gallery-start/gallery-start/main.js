const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (const img of imgs) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => displayedImage.src = newImage.src)
}

/* Wiring up the Darken/Lighten button */
btn.onclick = e => {
    btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.setAttribute("backgroundColor", "rgba(0, 0, 0, 0.5")
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.setAttribute("backgroundColor", "rgba(0, 0, 0, 0.0")
    }
}