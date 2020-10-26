function initProyects(proyects, container, type) {
    for (let i = 0; i < proyects.length; i++) {
        let containerProyect = document.createElement("figure");
        containerProyect.setAttribute("class", "proyect col-12 col-sm-6 col-lg-4 p-0 m-0");
        container.appendChild(containerProyect);
        // let divImg = document.createElement("div");
        // divImg.setAttribute("class", "proyect_container_img");
        // containerProyect.appendChild(divImg);
        let img = document.createElement("img");
        img.setAttribute("src", "/public/img/" + (type) + '/' + proyects[i].img);
        img.setAttribute("alt", "Proyecto");
        img.setAttribute("class", "proyect_img img-fluid");
        containerProyect.appendChild(img);
        let proyect_info = document.createElement("figcaption");
        proyect_info.setAttribute("class", "proyect_info");
        containerProyect.appendChild(proyect_info);
        let divTitle = document.createElement("a");
        divTitle.setAttribute("class", "proyect_title");
        divTitle.setAttribute('href', proyects[i].href);
        divTitle.setAttribute('target', '_blank');
        divTitle.textContent = proyects[i].title;
        proyect_info.appendChild(divTitle);
        let divLine = document.createElement("div");
        divLine.setAttribute("class", "line");
        proyect_info.appendChild(divLine);
        let divTec = document.createElement("div");
        let em = document.createElement("em");
        divTec.appendChild(em);
        divTec.setAttribute("class", "proyect_tec");
        em.textContent = proyects[i].tecs
        proyect_info.appendChild(divTec);
    }
}

initProyects(works, document.querySelector("#trabajos .container_proyect"), 'trabajos');
initProyects(personal, document.querySelector("#personal .container_proyect"), 'personal');

var brand = document.querySelector(".navbar-brand");
var navbar = document.querySelector("nav");
var about = document.querySelector("#acerca");
var navUl = document.querySelector(".navbar-nav");
var links = document.querySelectorAll(".nav-item");
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function (e) {
    if (window.scrollY + 50 > about.offsetTop) {
        brand.classList.add("show");
        navUl.classList.add("ml-auto-gt");
        navUl.classList.remove("mx-auto-gt");
        navbar.classList.add("bg-gt");
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        links.forEach((link) => link.classList.remove("active"));
        links[index].classList.add("active");
    } else {
        links.forEach((link) => link.classList.remove("active"));
        brand.classList.remove("show");
        navUl.classList.remove("ml-auto-gt");
        navUl.classList.add("mx-auto-gt");
        navbar.classList.remove("bg-gt");
    }
});