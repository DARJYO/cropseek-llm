"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) ||
    function (receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function"
            ? receiver !== state || !f
            : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m"
            ? f
            : kind === "a"
                ? f.call(receiver)
                : f
                    ? f.value
                    : state.get(receiver);
    };
var _Scene_instances, _Scene_setKeyframes;
const keyframes = [
    // -----------------------------
    // 3
    [
        {},
        { tx: -1 },
        { tx: -1, tz: -1 },
        { tx: -1, tz: -1, ry: -90 },
        { tz: -1, ry: -90 }
    ],
    // -----------------------------
    // 2
    [
        {},
        { ty: -1 },
        { ty: -1, tz: -1 },
        { tz: -1, ty: -1, rz: -90 },
        { tz: -1, ty: 0, rz: -90 }
    ],
    // -----------------------------
    // 1
    [
        {},
        { ty: -1 },
        { ty: -1, rx: -90 },
        { ty: -1, ry: 90, rx: -90 },
        { ry: 90, rx: -90 }
    ],
    // -----------------------------
    // 0
    [
        {},
        { tx: -1 },
        { tx: -1, tz: -1 },
        { tx: -1, tz: -1, ry: -90 },
        { tz: -1, ry: -90 }
    ],
    // -----------------------------
    // 4
    [{}, {}, {}, { tx: -1 }, { tx: -1 }],
    // -----------------------------
    // 5
    [{}, {}, { tz: 1 }, { ty: 1, tz: 1 }, { ty: 1, tz: 0 }],
    // -----------------------------
    // 6
    [{}, { ty: 1 }, { tx: 1, ty: 1 }, { tx: 1, ty: 1 }, { tx: 1, ty: 0 }],
    // -----------------------------
    // 7
    [{}, {}, { tx: -1 }, { tx: -1 }, { tx: -1 }],
    // -----------------------------
    // 8
    [{}, {}, {}, { ty: -1 }, { ty: -1 }],
    // -----------------------------
    // 9
    [{}, {}, { tz: -1 }, { tz: 0 }, { tz: 0 }],
    // -----------------------------
    // 10
    [
        { tz: -1 },
        { ty: -1, tz: -1 },
        { ty: -1, tz: -2 },
        { ty: -1, tz: -2, rx: -90 },
        { ty: 0, tz: -2, rx: -90 }
    ],
    // -----------------------------
    // 11
    [
        { tz: -1 },
        { tz: -1 },
        { tx: 1, tz: -1 },
        { tx: 1, tz: 0 },
        { tx: 0, tz: 0 }
    ],
    // -----------------------------
    // 12
    [
        { tz: -1 },
        { tx: -1, tz: -1 },
        { tx: -1, ty: 1, tz: -1, rz: 90 },
        { tx: 1, ty: 1, tz: -1, rz: 90 },
        { tx: 1, ty: 1, tz: -1, rz: 90 }
    ],
    // -----------------------------
    // 13
    [
        { tz: -1 },
        { ty: 1, tz: -1 },
        { tx: 1, ty: 1, tz: -1 },
        { tx: 1, ty: 1, tz: -1 },
        { tx: 1, ty: 1, tz: -1 }
    ],
    // -----------------------------
    // 14
    [{ tz: -1 }, { tz: -1 }, { tz: -1 }, { tz: -1, tx: -1 }, { tz: -1, tx: -1 }],
    // -----------------------------
    // 15
    [
        { tz: -1 },
        { tz: -1 },
        { ty: -1, tz: -1 },
        { ty: -1, tz: -1 },
        { ty: -1, tz: -1 }
    ],
    // -----------------------------
    // 16
    [
        { tz: -1 },
        { ty: -1, tz: -1 },
        { tx: -1, ty: 1, tz: -1 },
        { tx: -1, ty: 1, tz: -1, ry: 90 },
        { tx: -1, ty: 0, tz: -1, ry: 90 }
    ],
    // -----------------------------
    // 17
    [
        { tz: -1 },
        { tx: 1, tz: -1 },
        { tx: 1, tz: -1, ry: 90 },
        { tx: 1, ty: -1, tz: -1, ry: 90 },
        { tx: 0, ty: -1, tz: -1, ry: 90 }
    ],
    // -----------------------------
    // 18
    [
        { tz: -2 },
        { tz: -3 },
        { ty: 1, tz: -3 },
        { ty: 1, tz: -3, ry: -90 },
        { ty: 1, tz: -2, ry: -90 }
    ],
    // -----------------------------
    // 19
    [{ tz: -2 }, { tz: -3 }, { tz: -1 }, { tz: -1 }, { tz: -1 }],
    // -----------------------------
    // 20
    [
        { tz: -2 },
        { tz: -3 },
        { ty: 1, tz: -3 },
        { ty: 1, tz: -3, rx: 90 },
        { ty: 1, tz: -2, rx: 90 }
    ],
    // -----------------------------
    // 21
    [
        { tz: -2 },
        { tx: -1, tz: -2 },
        { tx: -1, ty: 1, tz: -2, rz: -90 },
        { tx: 0, ty: 1, tz: -2, rz: -90 },
        { tx: 0, ty: 1, tz: -2, rz: -90 }
    ],
    // -----------------------------
    // 22
    [
        { tz: -2 },
        { tz: -3 },
        { tz: -3, rx: -90 },
        { tz: -2, rx: -90 },
        { tz: -2, rx: -90 }
    ],
    // -----------------------------
    // 23
    [
        { tz: -2 },
        { tx: 1, tz: -2 },
        { tx: 1, ty: -1, tz: -2 },
        { tx: 1, ty: -1, tz: -2 },
        { tx: 0, ty: -1, tz: -2 }
    ],
    // -----------------------------
    // 24
    [
        { tz: -2 },
        { tz: -2 },
        { ty: -2, tz: -2 },
        { ty: -2, tz: -2 },
        { ty: -2, tz: -2 }
    ],
    // -----------------------------
    // 25
    [
        { tz: -2 },
        { ty: 1, tz: -2 },
        { tx: 1, ty: 1, tz: -2, ry: 90 },
        { tx: 1, ty: 0, tz: -2, ry: 90 },
        { tx: 1, ty: 0, tz: -2, ry: 90 }
    ],
    // -----------------------------
    // 26
    [
        { tz: -2 },
        { tz: -3 },
        { tx: -1, tz: -3 },
        { tx: -1, tz: -2, rx: 90 },
        { tx: -1, tz: -2, rx: 90 }
    ]
];
class Cube {
    constructor(scene, keyframes) {
        this.scene = scene;
        this.keyframes = keyframes;
        this.faces = ["front", "back", "right", "left", "top", "bottom"];
        this.order = [
            9,
            1,
            11,
            4,
            3,
            8,
            7,
            6,
            5,
            0,
            19,
            2,
            15,
            14,
            17,
            16,
            12,
            13,
            24,
            10,
            23,
            18,
            22,
            20,
            21,
            26,
            25
        ];
        this.frameIndex = 0;
        this.playing = false;
        this.el = this.create();
    }
    get duration() {
        const dur = parseFloat(getComputedStyle(this.el).getPropertyValue("--duration")) *
            1000 || 0;
        return this.isLastFrame ? dur + 250 : dur;
    }
    get stagger() {
        return this.cubeIndex * 0.01;
    }
    get cubeIndex() {
        const index = Number(this.el.dataset.index || 0);
        return this.isLastFrame ? this.order[index] : index;
    }
    get totalFrames() {
        return this.keyframes.length - 1;
    }
    get initialPosition() {
        const index = Number(this.el.dataset.index);
        return this.scene.initialPosition[index];
    }
    get currentFrame() {
        const { keyframes } = this;
        const frame = keyframes && keyframes[this.frameIndex];
        return !frame ? this.scene.getInitialPosition(0) : frame;
    }
    get isLastFrame() {
        return this.frameIndex === this.totalFrames - 1;
    }
    setDelay() {
        const delay = this.isLastFrame ? this.stagger : 0;
        this.el.style.setProperty("--delay", `${delay}`);
    }
    create() {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        this.faces
            .map((f) => {
                const face = document.createElement("div");
                face.classList.add(f);
                face.classList.add("cube-face");
                face.innerHTML = f;
                return face;
            })
            .forEach((f) => cube.appendChild(f));
        return cube;
    }
    setPosition(position) {
        Object.entries(position).forEach(([prop, value]) => {
            this.el.style.setProperty(`--${prop}`, value);
        });
    }
    async play() {
        this.playing = true;
        await this.autoMove();
    }
    pause() {
        this.playing = false;
    }
    reset() {
        this.setFrameIndex(0);
    }
    setFrameIndex(index) {
        this.frameIndex = index;
        this.update();
    }
    update() {
        this.setPosition(this.currentFrame);
        this.setDelay();
    }
    setNextIndex() {
        const i = this.frameIndex;
        this.frameIndex = i < this.totalFrames ? i + 1 : 0;
        this.update();
    }
    async autoMove() {
        if (!this.playing)
            return Promise.resolve({ done: true });
        this.update();
        return new Promise((resolve) => {
            setTimeout(async () => {
                this.setNextIndex();
                await this.autoMove();
                return resolve({ done: true });
            }, this.duration);
        });
    }
}
class Scene {
    constructor(el) {
        this.el = el;
        _Scene_instances.add(this);
        this.rows = 3;
        this.cols = 3;
        this.initialPosition = Array.from({ length: this.total }, (_, i) => this.getInitialPosition(i));
        this.keyframes = __classPrivateFieldGet(this, _Scene_instances, "m", _Scene_setKeyframes).call(this, keyframes.slice(0, this.total));
        this.cubes = Array.from({ length: this.total }, this.createCube.bind(this));
    }
    get total() {
        return Math.pow(this.rows, this.cols);
    }
    play() {
        this.cubes.forEach((cube) => cube.play());
    }
    pause() {
        this.cubes.forEach((cube) => cube.pause());
    }
    setFrame(index) {
        this.cubes.forEach((cube) => cube.setFrameIndex(index));
    }
    getInitialPosition(index) {
        const t = Math.floor(index / this.rows) % this.rows;
        const l = index % this.cols;
        const tz = Math.floor(index / (this.cols * this.rows)) * -1;
        return {
            t,
            l,
            tx: 0,
            ty: 0,
            tz,
            rx: 0,
            ry: 0,
            rz: 0,
            s: 1
        };
    }
    createCube(_, index) {
        const cube = new Cube(this, this.keyframes[index]);
        const children = Array.from(cube.el.children);
        const eachFace = (index, el) => (el.dataset.index = String(index));
        children.forEach(eachFace.bind(this, index));
        cube.el.setAttribute("data-index", String(index));
        cube.setPosition(this.getInitialPosition(index));
        this.el.insertAdjacentElement("beforeend", cube.el);
        return cube;
    }
}
(_Scene_instances = new WeakSet()),
    (_Scene_setKeyframes = function _Scene_setKeyframes(keyframes) {
        const { initialPosition } = this;
        const fill = (f, i) => Object.assign({}, initialPosition[i], f);
        return keyframes.map((cubeFrames, cubeIndex) => {
            const scene = cubeFrames.map((f) => fill(f, cubeIndex));
            const [first] = scene;
            const last = scene[cubeFrames.length - 1];
            const scaled = fill(Object.assign(Object.assign({}, last), { s: 0 }), cubeIndex);
            return scene
                .concat(scaled)
                .concat(fill(Object.assign(Object.assign({}, first), { s: 0 }), cubeIndex));
        });
    });
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function createRoot(attributes, target = document.body) {
    const root = document.createElement("div");
    const setAttr = ([k, v]) => root.setAttribute(k, v);
    Object.entries(attributes).forEach(setAttr);
    target.insertAdjacentElement("afterbegin", root);
    return root;
}
const target = document.querySelector("[data-cube]");
const app = createRoot({ id: "scene" }, target);
const scene = new Scene(app);
scene.el.classList.add("spin");
scene.play();