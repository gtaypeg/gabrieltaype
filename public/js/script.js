function initProyects(proyects, container) {
    for (let i = 0; i < proyects.length; i++) {
        let a = document.createElement("a");
        a.setAttribute("class", "proyect");
        if (proyects[i].gif) {
            a.classList.add("has-gif");
            a.setAttribute("data-gif", "/public/img/" + proyects[i].gif);
            a.setAttribute("data-img", "/public/img/" + proyects[i].img);
        }
        a.setAttribute("href", proyects[i].href);
        a.setAttribute("target", "_blank");
        container.appendChild(a);
        let divImg = document.createElement("div");
        divImg.setAttribute("class", "proyect__container__img");
        a.appendChild(divImg);
        let img = document.createElement("img");
        img.setAttribute("src", "/public/img/" + proyects[i].img);
        img.setAttribute("alt", "Proyecto");
        img.setAttribute("class", "proyect__img");
        divImg.appendChild(img);
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "proyect__info");
        a.appendChild(divInfo);
        let divTitle = document.createElement("div");
        divTitle.setAttribute("class", "proyect_title");
        divTitle.textContent = proyects[i].title;
        divInfo.appendChild(divTitle);
        let divTec = document.createElement("div");
        divTec.setAttribute("class", "proyect_tec");
        for (let j = 0; j < proyects[i]["tecs"].length; j++) {
            let icon = document.createElement("i");
            icon.setAttribute("class", "icon");
            icon.setAttribute("title", proyects[i]["tecs"][j]);
            icon.classList.add(proyects[i]["tecs"][j].toLowerCase());
            divTec.appendChild(icon);
        }
        divInfo.appendChild(divTec);
    }
}

initProyects(works, document.querySelector("#trabajos .container__proyect"));
initProyects(personal, document.querySelector("#personal .container__proyect"));

let gifElems = document.querySelectorAll(".has-gif");
for (let i = 0; i < gifElems.length; i++) {
    gifElems[i].addEventListener("mouseenter", function (e) {
        e.target.getElementsByTagName("img")[0].src = e.target.getAttribute("data-gif");
    });
    gifElems[i].addEventListener("mouseleave", function (e) {
        e.target.getElementsByTagName("img")[0].src = e.target.getAttribute("data-img");
    });
}
