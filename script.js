function initProyects(proyects, container) {
    for (let i = 0; i < proyects.length; i++) {
        let a = document.createElement("a");
        a.setAttribute("class", "proyect");
        if(proyects[i].gif){
            a.classList.add("has-gif");
            a.setAttribute('data-gif', proyects[i].gif);
            a.setAttribute('data-img', proyects[i].img);
        }
        a.setAttribute("href", proyects[i].href);
        a.setAttribute("target", "_blank");
        container.appendChild(a);
        let divImg = document.createElement("div");
        divImg.setAttribute("class", "proyect__container__img");
        a.appendChild(divImg);
        let img = document.createElement("img");
        img.setAttribute("src", proyects[i].img);
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

let works = [
    {
        img: "rojatv.jpg",
        title: "RojaTV",
        href: "http://rojatv.online",
        tecs: ["HTML", "CSS", "JS", "PHP"],
    },
    {
        img: "facebook-video.jpg",
        title: "Facebook Video Downloader",
        href: "http://player.rapidplayer.xyz/",
        tecs: ["Next"],
    },
    {
        img: "topauriculares.JPG",
        title: "Los mejores auriculares inalámbricos",
        href: "https://www.topauricularesinalambricos.com/",
        tecs: ["HTML", "CSS", "JS"],
    },
    {
        img: "mi-cuenta-online.JPG",
        title: "Mi cuenta online",
        href: "https://www.micuentaonline.com/",
        tecs: ["HTML", "CSS", "JS", "PHP"],
    },
];
let personal = [
    {
        img: "wikipedia-viewer.png",
        gif: "wikipedia-viewer.gif",
        title: "Wikipedia Viewer",
        href: "https://codepen.io/gtaypeg/full/ZEbpQvj",
        tecs: ["HTML", "CSS", "JS"],
    },
    {
        img: "local-weather.png",
        gif: "local-weather.gif",
        title: "Local Weather",
        href: "https://codepen.io/gtaypeg/full/QWjErYx",
        tecs: ["HTML", "CSS", "JS"],
    },
    {
        img: "image-search.jpg",
        title: "Image Search",
        href: "https://gtaypegimagesearchabstractionlayeg.glitch.me/",
        tecs: ["HTML", "CSS", "JS", "Node"],
    },
    {
        img: "javascript-calculator.png",
        gif: "javascript-calculator.gif",
        title: "Javascript Calculator",
        href: "https://codepen.io/gtaypeg/full/vYEVdVo",
        tecs: ["React"],
    },
    {
        img: "tic-tac-toe.png",
        gif: "tic-tac-toe.gif",
        title: "Tic tac toe",
        href: "https://codepen.io/gtaypeg/full/mdeMGXB",
        tecs: ["React"],
    },
    {
        img: "simon-game.png",
        gif: "simon-game.gif",
        title: "Simon Game",
        href: "https://codepen.io/gtaypeg/full/vYNRqLm",
        tecs: ["React"],
    },
    {
        img: "game-of-life.png",
        gif: "game-of-life.gif",
        title: "Game of Life",
        href: "https://codepen.io/gtaypeg/full/gOaNBwy",
        tecs: ["React"],
    },
    {
        img: "quotes.png",
        gif: "quotes.gif",
        title: "Random Quotes",
        href: "https://codepen.io/gtaypeg/full/povVOVW",
        tecs: ["React"],
    },
];
initProyects(works, document.querySelector("#trabajos .container__proyect"));
initProyects(personal, document.querySelector("#personal .container__proyect"));

let gifElems = document.querySelectorAll('.has-gif');
for (let i = 0; i < gifElems.length; i++) {
    gifElems[i].addEventListener('mouseenter', function(e){
        e.target.getElementsByTagName('img')[0].src = e.target.getAttribute('data-gif')
    })
    gifElems[i].addEventListener('mouseleave', function(e){
        e.target.getElementsByTagName('img')[0].src = e.target.getAttribute('data-img')
    })
}
