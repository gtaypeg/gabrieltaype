function initProyects(proyects, container, type) {
    for (let i = 0; i < proyects.length; i++) {
        let containerProyect = document.createElement("figure");
        containerProyect.setAttribute("class", "proyect col-12 col-sm-6 col-lg-4 p-0 m-0");
        container.appendChild(containerProyect);
        let img = document.createElement("img");
        img.setAttribute("src", "/public/img/" + type + "/" + proyects[i].img);
        img.setAttribute("alt", "Proyecto");
        img.setAttribute("class", "proyect_img img-fluid");
        containerProyect.appendChild(img);
        let proyect_info = document.createElement("figcaption");
        proyect_info.setAttribute("class", "proyect_info");
        containerProyect.appendChild(proyect_info);
        let divTitle = document.createElement("a");
        divTitle.setAttribute("class", "proyect_title");
        divTitle.setAttribute("href", proyects[i].href);
        divTitle.setAttribute("target", "_blank");
        divTitle.setAttribute("rel", "noopener");
        divTitle.textContent = proyects[i].title;
        proyect_info.appendChild(divTitle);
        let divLine = document.createElement("div");
        divLine.setAttribute("class", "line");
        proyect_info.appendChild(divLine);
        let divTec = document.createElement("div");
        let em = document.createElement("em");
        divTec.appendChild(em);
        divTec.setAttribute("class", "proyect_tec");
        em.textContent = proyects[i].tecs;
        proyect_info.appendChild(divTec);
    }
}

initProyects(works, document.querySelector("#trabajos .container_proyect"), "trabajos");
initProyects(personal, document.querySelector("#personal .container_proyect"), "personal");

var brand = document.querySelector(".navbar-brand");
var navbar = document.querySelector("nav");
var about = document.querySelector("#acerca");
var navUl = document.querySelector(".navbar-nav");
var links = document.querySelectorAll(".nav-item");
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    if (window.scrollY + 50 > about.offsetTop) {
        brand.classList.add("show");
        navUl.classList.add("ml-auto-gt");
        navUl.classList.remove("mx-auto-gt");
        navbar.classList.add("bg-gt");
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        links.forEach((link) => link.classList.remove("active"));
        links[index - 1].classList.add("active");
    } else {
        links.forEach((link) => link.classList.remove("active"));
        brand.classList.remove("show");
        navUl.classList.remove("ml-auto-gt");
        navUl.classList.add("mx-auto-gt");
        navbar.classList.remove("bg-gt");
    }
});

// let cont = document.querySelector('');

// for(let i = 0; i < 100; i++){
//     var p = document.createElement('div');
//     p.classList.add('poligon')
//     cont.appendChild(p)
// }

// var canvas = document.getElementById('load-canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.arc(150, 150, 100, 0, Math.PI*2, true);
// // ctx.translate(100,100);
// // ctx.rotate(0);
// // ctx.translate(-100,-100);

// // than scale
// var fraction = 1/2;
// ctx.translate(300 * (1 - fraction) / 2, 0);
// ctx.scale(fraction, 1);

// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150, 150, 95, 0, Math.PI*2, true);
// ctx.fill();

// document.querySelector('.first-circle .c').addEventListener('animationend', function(e){
// 	document.querySelector('.first-circle .cuadrado-negro').style.display = 'none';
// })

function ran(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var camera, scene, renderer, geometry, material, mesh;

var cloud_1_arr = [],
    cloud_2_arr = [],
    cloud_3_arr = [],
    cloud_4_arr = [];

init();
animate();

function init() {
    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);


    textGeo = new THREE.PlaneGeometry(526, 108);
    // THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture("/public/img/title.png");
    textMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        opacity: 1,
        map: textTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });
    text = new THREE.Mesh(textGeo, textMaterial);
    text.position.z = 250;
    scene.add(text);

    light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 0, 1);
    scene.add(light);

    var cloud_1_texture = THREE.ImageUtils.loadTexture("/public/img/Smoke-Element.png");
    var cloud_1_material = new THREE.MeshLambertMaterial({ color: 0xbbbbbb, map: cloud_1_texture, transparent: true });
    var Cloud_1_geometry = new THREE.PlaneGeometry(1500, 1500);
    var cloud_1_num = 10;

    for (var i = 0; i < cloud_1_num; i++) {
        var cloud_1 = new THREE.Mesh(Cloud_1_geometry, cloud_1_material);
        // cloud_1.position.set(ran(window.innerWidth, -window.innerWidth), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 100);
        cloud_1.position.set(ran(1500, -1500), ran(800, -800), 100);
        cloud_1_arr.push(cloud_1);
        scene.add(cloud_1);
    }

    var cloud_2_texture = THREE.ImageUtils.loadTexture("/public/img/Smoke-Element.png");
    var cloud_2_material = new THREE.MeshLambertMaterial({ color: 0xdddddd, map: cloud_2_texture, transparent: true });
    var Cloud_2_geometry = new THREE.PlaneGeometry(1000, 1000);
    var cloud_2_num = 10;

    for (var i = 0; i < cloud_2_num; i++) {
        var cloud_2 = new THREE.Mesh(Cloud_2_geometry, cloud_2_material);
        // cloud_2.position.set(ran(window.innerWidth, -window.innerWidth), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 100);
        cloud_2.position.set(ran(1500, -1500), ran(800, -800), 150);
        cloud_2_arr.push(cloud_2);
        scene.add(cloud_2);
    }

    var cloud_3_texture = THREE.ImageUtils.loadTexture("/public/img/Smoke-Element.png");
    var cloud_3_material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: cloud_3_texture, transparent: true });
    var Cloud_3_geometry = new THREE.PlaneGeometry(800, 800);
    var cloud_3_num = 10;

    for (var i = 0; i < cloud_3_num; i++) {
        var cloud_3 = new THREE.Mesh(Cloud_3_geometry, cloud_3_material);
        // cloud_3.position.set(ran(window.innerWidth, -window.innerWidth), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 100);
        cloud_3.position.set(ran(1500, -1500), ran(800, -800), 200);
        cloud_3_arr.push(cloud_3);
        scene.add(cloud_3);
    }

    var cloud_4_texture = THREE.ImageUtils.loadTexture("/public/img/Smoke-Element.png");
    var cloud_4_material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: cloud_4_texture, transparent: true });
    var Cloud_4_geometry = new THREE.PlaneGeometry(1200, 1200);
    var cloud_4_num = 3;

    for (var i = 0; i < cloud_4_num; i++) {
        var cloud_4 = new THREE.Mesh(Cloud_4_geometry, cloud_4_material);
        // cloud_4.position.set(ran(window.innerWidth, -window.innerWidth), ran(window.innerHeight/4.5, -window.innerHeight/4.5), 100);
        cloud_4.position.set(ran(1500, -1500), ran(800, -800), ran(251, 249));
        cloud_4_arr.push(cloud_4);
        scene.add(cloud_4);
    }

    // var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
    // for (p = 0; p < 30; p++) {
    // 	var particle = new THREE.Mesh(Cloud_1_geo,cloud_1_material);
    // 	if(p < 5){
    // 		particle.position.set(ran(window.innerWidth/3.5, -window.innerWidth/3.5), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 900);
    // 		// particle.rotation.z = Math.random() * 360;
    // 		// scene.add(particle);
    // 	}else if (p < 20){
    // 		particle.position.set(ran(window.innerWidth/3.5, -window.innerWidth/3.5), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 800);
    // 	}	else{
    // 		particle.position.set(ran(window.innerWidth/3.5, -window.innerWidth/3.5), ran(window.innerHeight/3.5, -window.innerHeight/3.5), 750);
    // 	}
    // 	cloud_1_arr.push(particle);
    // 	scene.add(particle);

    // }

    partileTexture = THREE.ImageUtils.loadTexture("/public/img/particle-1.png");
    particleMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, map: partileTexture, transparent: true });
    particleGeo = new THREE.PlaneGeometry(5, 5);
    particleArr = [];

    for (p = 0; p < 100; p++) {
        var gota = new THREE.Mesh(particleGeo, particleMaterial);
        gota.position.set(ran(1500, -1500), ran(800, -800), 200);
        particleArr.push(gota);
        scene.add(gota);
    }
    // var big_clouds_pos = [(window.innerHeight * 0.1), (window.innerHeight * 0.5)]

    // for (p = 0; p < 15; p++) {
    // 	var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
    // 	particle.position.set(0, -window.innerHeight / 3.5, 800);
    // }
    // scene.add(particle);

    document.getElementById("load-screen").appendChild(renderer.domElement);
}

function animate() {
    // note: three.js includes requestAnimationFrame shim
    // stats.begin();
    delta = clock.getDelta();

    render();
    evolveSmoke();
    requestAnimationFrame(animate);
    // stats.end();
}
function evolveSmoke() {
    var c1 = cloud_1_arr.length;
    while (c1--) {
        // cloud_1_arr[c1].rotation.z += (delta * 0.5);
        if (cloud_1_arr[c1].position.x >= 1900) {
            cloud_1_arr[c1].position.x += -3400;
            cloud_1_arr[c1].position.y = ran(800, -800);
        } else {
            cloud_1_arr[c1].position.x += 0.025;
        }
    }

    var c2 = cloud_2_arr.length;
    while (c2--) {
        if (cloud_2_arr[c2].position.x >= 1500) {
            cloud_2_arr[c2].position.x += -3000;
            cloud_2_arr[c2].position.y = ran(800, -800);
        } else {
            cloud_2_arr[c2].rotation.z += -0.0002;
            cloud_2_arr[c2].position.x += 0.15;
        }
    }

    var c3 = cloud_3_arr.length;
    while (c3--) {
        if (cloud_3_arr[c3].position.x >= 1500) {
            cloud_3_arr[c3].position.x += -3000;
            cloud_3_arr[c3].position.y = ran(800, -800);
        } else {
            cloud_3_arr[c3].rotation.z += -0.0003;
            cloud_3_arr[c3].position.x += 0.5;
        }
    }

    var c4 = cloud_4_arr.length;
    while (c4--) {
        if (cloud_4_arr[c4].position.x >= 1500) {
            cloud_4_arr[c4].position.x += -3000;
            cloud_4_arr[c4].position.z = ran(260, 240);
            cloud_4_arr[c4].position.y = ran(800, -800);
        } else {
            cloud_4_arr[c4].rotation.z += -0.0015;
            cloud_4_arr[c4].position.x += 5;
        }
    }

    var i = particleArr.length;
    while (i--) {
        if (particleArr[i].position.x >= 1500) {
            particleArr[i].position.x = ran(1500, -1500);
            particleArr[i].position.y = ran(800, -800);
            // cloud_1_arr[i].position.x = 00;
        } else {
            particleArr[i].position.x += 15;
            particleArr[i].position.y += -10;
        }
    }
}
setInterval(function () {
    createLigthing();
}, 3000);
function createLigthing() {
    // light = new THREE.DirectionalLight(0xffffff,0.2);
    // light.position.set(0,0,1);
    // scene.add(light);
    light = new THREE.PointLight(0xffffff, 1, 750);
    light.position.set(ran(1500, -1500), ran(800, -800), ran(200, 500));
    scene.add(light);
    // setTimeout(function(){
    // 	scene.add(light)
    // },1000)
    setTimeout(function () {
        scene.remove(light);
    }, 250);
    setTimeout(function () {
        scene.add(light);
    }, 350);
    setTimeout(function () {
        scene.remove(light);
    }, 450);
}
// setInterval(function(){

// }, 1000)

function render() {
    // mesh.rotation.x += 0.005;
    // mesh.rotation.y += 0.01;
    // cubeSineDriver += .01;
    // mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render(scene, camera);
}

window.onresize = function (e) {
    var canvas = document.querySelector("#load-screen canvas");
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};
document.querySelector('#load-screen canvas').addEventListener('mousemove', function(e){
	camera.position.set( (e.x - window.innerWidth / 2)*0.1, (e.y - window.innerHeight / 2)*-0.025, 1000 );
})