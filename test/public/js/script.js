var sceneWidth = window.innerWidth,
    sceneHeight = window.innerHeight,
    canvasWidth = document.body.offsetWidth,
    canvasHeight = window.innerHeight;

function ran(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(sceneWidth, sceneHeight);

document.getElementById("canvas_container").appendChild(renderer.domElement);

scene.background = new THREE.Color(0x191919);

camera.position.z = 1000;

var clouds = [];
var pine_arr = [];

// var pineSizes = [
//     [351.06, 273.47],
//     [295.59, 251.25],
//     [254.97, 210.66],
//     [214.31, 184.72],
//     [173.69, 155.22]
// ];

// var pineDistances = [0, 96, 192, 270, 340];

// let cacheResultY = {
//     "2-2": 0.03,
//     "1-1": 0.015,
//     "3-3": 0.045,
//     "-2-2": 0.01,
//     "-1-1": 0.01,
//     "-3-3": 0.01,
//     "0.8-0.8": 0.01,
//     "-1-0.8": 0.01,
//     "1.6-1.6": 0.01,
//     "0.64-0.64": 0.01,
//     "2.4-2.4": 0.01,
//     "-1-0.64": 0.01,
//     "-2-1.6": 0.01,
//     "0.512-0.512": 0.01,
//     "-1-0.512": 0.01,
//     "1.28-1.28": 0.01,
//     "-3-2.4": 0.01,
//     "0.41-0.41": 0.01,
//     "-1-0.41": 0.01,
//     "-2-1.28": 0.01,
//     "0.328-0.328": 0.01,
//     "-1-0.328": 0.01,
//     "1.92-1.92": 0.01,
//     "0.262-0.262": 0.01,
//     "1.024-1.024": 0.01,
//     "-1-0.262": 0.01,
//     "0.21-0.21": 0.01,
//     "-2-1.024": 0.01,
//     "-1-0.21": 0.01,
//     "-3-1.92": 0.01,
//     "0.168-0.168": 0.01,
//     "5-5": 0.075,
//     "-1-0.168": 0.01,
//     "0.819-0.819": 0.01,
//     "-5-5": 0.01,
//     "0.134-0.134": 0.01,
//     "-1-0.134": 0.01,
//     "4-4": 0.01,
//     "-4-4": 0.01,
//     "3.2-3.2": 0.01
// };

let cacheResultY = {
    "2-2": 0.03,
    "1-1": 0.015,
    "3-3": 0.045,
    "-2-2": 0.01,
    "-1-1": 0.01,
    "-3-3": 0.01,
    "0.8-0.8": 0.01,
    "-1-0.8": 0.01,
    "1.6-1.6": 0.01,
    "0.64-0.64": 0.01,
    "2.4-2.4": 0.01,
    "-1-0.64": 0.01,
    "-2-1.6": 0.01,
    "0.512-0.512": 0.01,
    "-1-0.512": 0.01,
    "1.28-1.28": 0.01,
    "-3-2.4": 0.01,
    "0.41-0.41": 0.01,
    "-1-0.41": 0.01,
    "-2-1.28": 0.01,
    "0.328-0.328": 0.01,
    "-1-0.328": 0.01,
    "1.92-1.92": 0.01,
    "0.262-0.262": 0.01,
    "1.024-1.024": 0.01,
    "-1-0.262": 0.01,
    "0.21-0.21": 0.01,
    "-2-1.024": 0.01,
    "-1-0.21": 0.01,
    "-3-1.92": 0.01,
    "0.168-0.168": 0.01,
    "5-5": 0.075,
    "-1-0.168": 0.01,
    "0.819-0.819": 0.01,
    "-5-5": 0.01,
    "0.134-0.134": 0.01,
    "-1-0.134": 0.01,
    "4-4": 0.01,
    "-4-4": 0.01,
    "3.2-3.2": 0.01,
    "1.536-1.536": 0.01,
    "-2-0.819": 0.01,
    "0.107-0.107": 0.01,
    "-1-0.107": 0.01,
    "0.655-0.655": 0.01,
    "-3-1.536": 0.01,
    "-2-0.655": 0.01,
    "0.524-0.524": 0.01,
    "1.229-1.229": 0.01,
    "-2-0.524": 0.01,
    "0.419-0.419": 0.01,
    "-3-1.229": 0.01,
    "-2-0.419": 0.01,
    "0.983-0.983": 0.01,
    "0.335-0.335": 0.01,
    "-2-0.335": 0.01,
    "-3-0.983": 0.01,
    "0.268-0.268": 0.01,
    "-2-0.268": 0.01,
    "0.786-0.786": 0.01,
    "0.214-0.214": 0.01,
    "-3-0.786": 0.01,
    "-2-0.214": 0.01,
    "0.171-0.171": 0.01,
    "0.629-0.629": 0.01,
    "-2-0.171": 0.01,
    "0.137-0.137": 0.01,
    "-3-0.629": 0.01,
    "-2-0.137": 0.01,
    "0.503-0.503": 0.01,
    "0.11-0.11": 0.01,
    "-2-0.11": 0.01,
    "-3-0.503": 0.01,
    "0.402-0.402": 0.01,
    "-3-0.402": 0.01,
    "0.322-0.322": 0.01,
    "-3-0.322": 0.01,
    "0.258-0.258": 0.01,
    "-3-0.258": 0.01,
    "0.206-0.206": 0.01,
    "-3-0.206": 0.01,
    "0.165-0.165": 0.01,
    "-3-0.165": 0.01,
    "0.132-0.132": 0.01,
    "-3-0.132": 0.01,
    "0.106-0.106": 0.01,
    "-3-0.106": 0.01
};

class Pine {
    constructor(mesh, x, y) {
        this.mesh = mesh;
        this.x = x;
        this.y = y;
        this.resistence = 0.9;
        this.sumRadInclination = 0;
        this.radInclination = 0;
        this.currentForce = 0;
        this.maxSpeed = 5;

        this.minInclination = 0;
        this.maxInclination = 0;

        this.lasMinInclination = 0;
        this.lasMaxInclination = 0;

        this.forceId = 0;
    }

    setForce(force) {
        this.currentForce = force;

        if (this.currentForce < 0) {
            this.minInclination = this.currentForce;
            this.maxInclination = this.currentForce * -1;
        }

        if (this.currentForce > 0) {
            this.minInclination = this.currentForce * -1;
            this.maxInclination = this.currentForce;
        }
    }

    render() {
        this.handleWindResistance();

        if (this.radInclination !== 0) {
            rotateAboutPoint(this.mesh, new THREE.Vector3(this.x, this.y, 0), new THREE.Vector3(0, 0, 1), this.radInclination);
        }
    }

    handleWindResistance() {
        if (this.currentForce === 0) {
            this.radInclination = 0;
            return;
        }

        let percent = 0;
        let sumRadInclination = this.sumRadInclination;
        let currentForce = this.currentForce;
        let minInclination = this.minInclination;
        let maxInclination = this.maxInclination;

        percent = ((sumRadInclination - minInclination) / (maxInclination - minInclination)) * 100;

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        if (isNaN(percent)) {
            console.log(percent);
            return;
        }

        if ((percent >= 100 && this.currentForce > 0) || (percent <= 0 && this.currentForce < 0)) {
            if (percent >= 100 && this.currentForce > 0 && this.minInclination != 0) {
                let nextMinInclination = parseFloat((this.minInclination * 0.8).toFixed(3));

                if (nextMinInclination === parseFloat((this.maxInclination * 0.8).toFixed(3))) {
                    this.minInclination = nextMinInclination;
                    if (this.minInclination >= -0.1) this.minInclination = 0;
                }

                this.currentForce = this.minInclination;
            }

            if (percent <= 0 && this.currentForce < 0 && this.maxInclination != 0) {
                this.maxInclination = parseFloat((this.maxInclination * 0.8).toFixed(3));

                if (this.maxInclination <= 0.1) this.maxInclination = 0;

                this.currentForce = this.maxInclination;
            }
        }

        let y = 0;

        if (cacheResultY[`${currentForce}-${maxInclination}`]) {
            y = cacheResultY[`${currentForce}-${maxInclination}`];
        } else {
            console.log("Haciendo nuevo cálculo");

            let pointY = (currentForce < 0 ? currentForce * -1 : currentForce) / 5;

            var p0 = { x: 0, y: 0 },
                p1 = { x: parseFloat((maxInclination * 0.1).toFixed(3)), y: pointY },
                p2 = { x: parseFloat((maxInclination * 0.9).toFixed(3)), y: pointY },
                p3 = { x: maxInclination, y: 0 };

            ({ y } = bezier(percent / 100, [p0, p1, p2, p3]));

            y = parseFloat((y / 10).toFixed(3));

            if (y === 0) y = 0.01;

            cacheResultY[`${currentForce}-${maxInclination}`] = y;
        }

        if (currentForce > 0) {
            this.addRad(y);
        } else if (currentForce < 0) {
            this.subRad(y);
        }
    }

    addRad(deg) {
        if (this.sumRadInclination + deg > this.maxInclination) {
            deg = this.maxInclination - this.sumRadInclination;
        }

        this.radInclination = THREE.Math.degToRad(-deg);
        this.sumRadInclination = parseFloat((this.sumRadInclination + deg).toFixed(3));
    }

    subRad(deg) {
        this.radInclination = THREE.Math.degToRad(deg);
        this.sumRadInclination = parseFloat((this.sumRadInclination - deg).toFixed(3));
    }
}

// function createPines() {
//     var pine_texture = new THREE.TextureLoader().load("./public/img/threejs/pine/7.png");
//     var pine_material = new THREE.MeshLambertMaterial({ map: pine_texture, transparent: true });

//     for (let ii = 0; ii < 19; ii++) {
//         const group = new THREE.Group();

//         for (let i = 0; i < 5; i++) {
//             var Cloud_bg_geometry = new THREE.PlaneGeometry(pineSizes[i][0] * 0.8, pineSizes[i][1] * 0.8);
//             var pine = new THREE.Mesh(Cloud_bg_geometry, pine_material);
//             pine.position.set(0, pineDistances[i] * 0.8);

//             group.add(pine);
//         }

//         group.position.x = ii * 100 - 900;
//         group.position.y = -ran(400, 500);
//         group.position.z = ran(500, 600);

//         let p = new Pine(group, group.position.x, group.position.y);

//         p.setForce(ran(1, 3));

//         pine_arr.push(p);

//         scene.add(group);
//     }

//     for (let ii = 0; ii < 55; ii++) {
//         const group = new THREE.Group();

//         for (let i = 0; i < 5; i++) {
//             var Cloud_bg_geometry = new THREE.PlaneGeometry(pineSizes[i][0] / 3, pineSizes[i][1] / 3);
//             var pine = new THREE.Mesh(Cloud_bg_geometry, pine_material);
//             pine.position.set(0, pineDistances[i] / 3);

//             group.add(pine);
//         }

//         group.position.x = ii * 45 - 1200;
//         group.position.y = ran(-400, -350);
//         group.position.z = ran(300, 400);

//         let p = new Pine(group, group.position.x, group.position.y);

//         p.setForce(ran(1, 3));

//         pine_arr.push(p);

//         scene.add(group);
//     }

//     var pine_bg_texture = new THREE.TextureLoader().load("./public/img/threejs/pines_bg.png");
//     var pine_bg_material = new THREE.MeshLambertMaterial({ map: pine_bg_texture, transparent: true });
//     var Cloud_bg_geometry = new THREE.PlaneGeometry(3000 * 0.8, 396 * 0.8);
//     var pine_bg = new THREE.Mesh(Cloud_bg_geometry, pine_bg_material);

//     pine_bg.position.set(0, -400, 350);

//     scene.add(pine_bg);
// }

function createPines() {
    var pine_texture = new THREE.TextureLoader().load("./public/img/threejs/pine.png");
    var pine_material = new THREE.MeshLambertMaterial({ map: pine_texture, transparent: true });
    var Cloud_bg_geometry = new THREE.PlaneGeometry(351 * 0.8, 495 * 0.8);

    for (let ii = 0; ii < 14; ii++) {
        var pine = new THREE.Mesh(Cloud_bg_geometry, pine_material);

        pine.position.x = ii * 140 - 900;
        pine.position.y = -ran(250, 400);
        pine.position.z = ran(500, 600);

        let p = new Pine(pine, pine.position.x, pine.position.y);

        p.setForce(ran(3, 5));

        pine_arr.push(p);

        scene.add(pine);
    }

    var smallPineGeometry = new THREE.PlaneGeometry(351 / 3, 495 / 3);

    for (let ii = 0; ii < 55; ii++) {
        var pine = new THREE.Mesh(smallPineGeometry, pine_material);

        pine.position.x = ii * 45 - 1200;
        pine.position.y = ran(-400, -350);
        pine.position.z = ran(300, 400);

        let p = new Pine(pine, pine.position.x, pine.position.y);

        p.setForce(ran(3, 5));

        pine_arr.push(p);

        scene.add(pine);
    }

    pine_arr = pine_arr.sort((a, b) => a.x - b.x);

    var pine_bg_texture = new THREE.TextureLoader().load("./public/img/threejs/pines_bg.png");
    var pine_bg_material = new THREE.MeshLambertMaterial({ map: pine_bg_texture, transparent: true });
    var Cloud_bg_geometry = new THREE.PlaneGeometry(3000 * 0.8, 396 * 0.8);
    var pine_bg = new THREE.Mesh(Cloud_bg_geometry, pine_bg_material);

    pine_bg.position.set(0, -450, 400);

    scene.add(pine_bg);
}

function createFOG(z) {
    var texture = new THREE.TextureLoader().load("./public/img/threejs/fog.png");
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true });
    var geometry = new THREE.PlaneGeometry(6080, 500);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, -400, z);

    scene.add(mesh);
}

var mountainMesh;

function createMountain() {
    var texture = new THREE.TextureLoader().load("./public/img/threejs/mountain.png");
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true });
    var geometry = new THREE.PlaneGeometry(3000, 707);
    mountainMesh = new THREE.Mesh(geometry, material);

    mountainMesh.position.set(0, -340, 12);
    scene.add(mountainMesh);
}

function createCloud(second) {
    var texture = new THREE.TextureLoader().load("./public/img/threejs/cloud.png");
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true });
    var geometry = new THREE.PlaneGeometry(291, 37);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = ran(150, 300);
    mesh.position.x = second === 1 ? ran(-500, 0) : -1100;
    mesh.position.y = ran(-100, 400);

    scene.add(mesh);

    clouds.push({ id: second, mesh });
}

let moonMesh;
let moonlightMesh;

function createMoon() {
    var texture = new THREE.TextureLoader().load("./public/img/threejs/moon.png");
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true });
    var geometry = new THREE.PlaneGeometry(150, 150);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = 10;
    mesh.position.x = 0;
    mesh.position.y = 100;

    moonMesh = mesh;

    scene.add(moonMesh);
}

function createMoonlight() {
    var texture = new THREE.TextureLoader().load("./public/img/threejs/moonlight.png");
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true });
    var geometry = new THREE.PlaneGeometry(760, 760);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = 11;
    mesh.position.x = 0;
    mesh.position.y = 100;

    moonlightMesh = mesh;

    scene.add(moonlightMesh);
}

var boundRectsMesh = [];

function createRects() {
    const geometry = new THREE.BoxGeometry(3000, 3000, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var mesh1 = new THREE.Mesh(geometry, material);
    var mesh2 = new THREE.Mesh(geometry, material);

    mesh1.position.set(-2030, 0, 650);
    mesh2.position.set(2030, 0, 650);

    scene.add(mesh1);
    scene.add(mesh2);

    boundRectsMesh.push(mesh1);
    boundRectsMesh.push(mesh2);
}

let stars = [];

function createStar() {
    let texture = new THREE.TextureLoader().load("./public/img/threejs/star.png");

    for (let i = 0; i < 100; i++) {
        let size = ran(1, 4);

        let geometry = new THREE.PlaneGeometry(size, size);
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, transparent: true, opacity: parseFloat(Math.random().toFixed(1)) });
        let mesh = new THREE.Mesh(geometry, material);

        let x = ran(-2000, 2000);
        let y = ran(-200, 800);

        mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = 1;

        scene.add(mesh);

        stars.push({ mesh, x, y, opacityTarget: ran(0, 1) });
    }
}

createFOG(425);
createFOG(280);
createPines();
createMountain();
createCloud(1);
createMoon();
createMoonlight();
createRects();
createStar();

// var clock = new THREE.Clock();

function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
    pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld;

    if (pointIsWorld) {
        obj.parent.localToWorld(obj.position); // compensate for world coordinate
    }

    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset

    if (pointIsWorld) {
        obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta); // rotate the mesh
}

// var add = 1;
// var deg = 0;

// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();

// function onPointerMove(event) {
//     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
// }

let wind = { x1: -1200, x2: -1000, id: 1, force: ran(2, 4) };

let winds = [wind];

// let timeout = 100;
let second = 0;

var cameraPos = {
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0
};

setInterval(() => {
    if (ran(0, 2) === 0) createCloud(second);

    winds.push({ ...wind, id: second, force: ran(3, 5) });
}, 10000);

// setInterval(() => {
// }, 10000);

function animate(time) {
    requestAnimationFrame(animate);

    second = parseInt(time / 1000);

    var pinesLength = pine_arr.length;

    while (pinesLength--) {
        let pine = pine_arr[pinesLength];

        for (let i = 0; i < winds.length; i++) {
            const wind = winds[i];

            if (wind.x1 <= pine.x && pine.x <= wind.x2 && wind.id !== pine.forceId) {
                pine.setForce(wind.force);
                pine.forceId = wind.id;
            }
        }

        pine.render();
    }

    winds = winds.filter((wind) => {
        wind.x1 += 10;
        wind.x2 += 10;

        return wind.x1 < sceneWidth;
    });

    clouds = clouds.filter((cloud) => {
        const { mesh: cloudMesh } = cloud;

        cloudMesh.position.x += 0.5;

        if (cloudMesh.position.x > sceneWidth) {
            scene.remove(cloudMesh);

            return false;
        }

        return true;
    });

    cameraPos.currentX = camera.position.x;

    if (cameraPos.currentX !== cameraPos.targetX || cameraPos.currentY !== cameraPos.targetY) {
        if (cameraPos.currentX < cameraPos.targetX) {
            camera.position.x += 1;
        } else if (cameraPos.currentX > cameraPos.targetX) {
            camera.position.x -= 1;
        }

        cameraPos.currentY = camera.position.y;

        if (cameraPos.currentY < cameraPos.targetY) {
            camera.position.y += 0.5;
        } else if (cameraPos.currentY > cameraPos.targetY) {
            camera.position.y -= 0.5;
        }

        moonMesh.position.x = camera.position.x / 1.1;
        moonMesh.position.y = camera.position.y / 1.1 + 100;

        moonlightMesh.position.x = camera.position.x / 1.1;
        moonlightMesh.position.y = camera.position.y / 1.1 + 100;

        mountainMesh.position.x = camera.position.x / 1.3;
        mountainMesh.position.y = camera.position.y / 1.3 - 340;

        boundRectsMesh[0].position.set(camera.position.x - 2010, camera.position.y);
        boundRectsMesh[1].position.set(camera.position.x + 2010, camera.position.y);

        stars.forEach((star) => {
            star.mesh.position.x = camera.position.x / 1.1 + star.x;
            star.mesh.position.y = camera.position.y / 1.1 + star.y;
        });
    }

    stars.forEach((star) => {
        let currentOpacity = star.mesh.material.opacity;

        if (currentOpacity < star.opacityTarget) {
            star.mesh.material.opacity += 0.01;
        } else if (currentOpacity > star.opacityTarget) {
            star.mesh.material.opacity -= 0.01;
        }

        if (currentOpacity <= 0) star.opacityTarget = 1;
        else if (currentOpacity >= 1) star.opacityTarget = 0;
    });

    renderer.render(scene, camera);
}
animate();

// window.addEventListener("pointermove", onPointerMove);

document.querySelector("canvas").addEventListener("mousemove", function (e) {
    let eX = e.x < 9000 ? e.x : 9000;
    let eY = e.y;

    if (sceneWidth > 2000) {
        eX = eX > 1300 ? eX : 1300;
    }

    let x = (eX - document.body.offsetWidth / 2) * 0.07;
    let y = (eY - window.innerHeight / 2) * -0.05;

    // moonMesh.position.x = x / 1.1;
    // moonMesh.position.y = y / 1.1 + 100;

    // moonlightMesh.position.x = x / 1.1;
    // moonlightMesh.position.y = y / 1.1 + 100;

    // mountainMesh.position.x = x / 1.3;
    // mountainMesh.position.y = y / 1.3 - 340;

    // boundRectsMesh[0].position.set(x - 2010, y);
    // boundRectsMesh[1].position.set(x + 2010, y);

    // stars.forEach((star) => {
    //     star.mesh.position.x = x / 1.1 + star.x;
    //     star.mesh.position.y = y / 1.1 + star.y;
    // });

    // camera.position.set(x, y);

    cameraPos = {
        targetX: Math.floor(x / 2) * 2,
        targetY: Math.floor(y / 2) * 2
    };
});

function fact(num) {
    return num > 1 ? num * fact(num - 1) : 1;
}
function nci(n, i) {
    return fact(n) / (fact(i) * fact(n - i));
}

function bezier(t, points) {
    let sum = 0;
    let n = points.length - 1;

    let point = {
        x: 0,
        y: 0
    };

    for (let i = 0; i <= n; i++) {
        let B = nci(n, i) * Math.pow(1 - t, n - i) * Math.pow(t, i);
        let px = points[i].x * B;
        let py = points[i].y * B;

        point.x += px;
        point.y += py;
    }

    return point;
}

function factorial(n) {
    if (n < 0) return -1; /*Wrong value*/
    if (n == 0) return 1 /*Terminating condition*/;
    else {
        return n * factorial(n - 1);
    }
}

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function BezierCurve(u, points) {
    let n = points.length;

    let p = { x: 0, y: 0 };

    for (let i = 0; i < n; i++) {
        let B = nCr(n - 1, i) * Math.pow(1 - u, n - 1 - i) * Math.pow(u, i);
        let px = points[i].x * B;
        let py = points[i].y * B;

        p.x += px;
        p.y += py;
    }

    return p;
}

// var accuracy = 0.1, //this'll give the bezier 100 segments
//     p0 = { x: 0, y: 0 }, //use whatever points you want obviously
//     p1 = { x: 25, y: 30 },
//     p2 = { x: 75, y: 30 },
//     p3 = { x: 100, y: 0 },
//     ctx = document.createElement("canvas").getContext("2d");

// ctx.width = 500;
// ctx.height = 500;
// document.body.appendChild(ctx.canvas);

// ctx.moveTo(p0.x, p0.y);
// for (var i = 0; i <= 1; i += accuracy) {
//     var p = bezier(i, [p0, p1, p2, p3]);
//     p = {
//         x: parseFloat(p.x.toFixed(3)),
//         y: parseFloat(p.y.toFixed(3))
//     };

//     console.log(p);
//     ctx.lineTo(p.x, p.y);
// }

// ctx.stroke();

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    (sceneWidth = window.innerWidth), (sceneHeight = window.innerHeight), (camera.aspect = sceneWidth / sceneHeight);

    camera.updateProjectionMatrix();

    renderer.setSize(sceneWidth, sceneHeight);
}

// 500 = -910
// 600 = -790
