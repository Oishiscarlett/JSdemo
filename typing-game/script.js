const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const inputEl = document.getElementsByTagName("input")[0];
const wordEl = document.getElementById("words");
const endgameEl = document.getElementById("end-game-zone");
const selectEl = document.getElementById("diff-select");
const btnEl = document.getElementById("btn-setting");
const navEl = document.getElementById("nav");

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

let time = 10;
let score = 0;
let word;
let diff = 5;


// 设置计时器
var timeInterval = setInterval(setTimer, 1000);

// 根据计时器显示时间
function setTimer() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
        endGame();
    }
}

// 随机选取词语
function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    wordEl.innerHTML = word;
}

// 更新分数
function setScore() {
    score++;
    scoreEl.innerHTML = score;
}

// 游戏结束切换页面
function endGame() {
    let h1 = document.createElement('h1');
    let p = document.createElement("p");
    let button = document.createElement("button");
    h1.innerHTML = "Time ran out";
    p.innerHTML = `Your final score is ${score}`;
    button.innerHTML = "Reload";
    button.addEventListener('click', () => {
        location.reload();
        endgameEl.removeChild(h1);
        endgameEl.removeChild(p);
        endgameEl.removeChild(button);
    });

    endgameEl.appendChild(h1);
    endgameEl.appendChild(p);
    endgameEl.appendChild(button);

    endgameEl.style.display = 'flex';
}

// 监听选择器，切换游戏难度
selectEl.addEventListener('input', e => {
    const level = e.target.value;

    if (level === 'easy') {
        diff = 5;
    } else if (level === 'medium') {
        diff = 3;
    } else {
        diff = 1;
    }
});

// 监听按钮点击事件
btnEl.addEventListener('click', e => {
    navEl.classList.toggle('hide');
});

// 监听输入事件
inputEl.addEventListener('input', e => {
    const inputText = e.target.value;

    if (inputText === word) {
        randomWord();
        e.target.value = '';
        setScore();
        time+=diff;
        setTimer();
    }

});

randomWord();