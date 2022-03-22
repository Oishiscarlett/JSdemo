const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const inputEl = document.getElementsByTagName("input")[0];
const wordEl = document.getElementById("words");

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


// 设置计时器
var timeInterval = setInterval(setTimer, 1000);

// 根据计时器显示时间
function setTimer() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
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

// 监听输入事件
inputEl.addEventListener('input', e => {
    const inputText = e.target.value;

    if (inputText === word) {
        randomWord();
        e.target.value = '';
        setScore();
        time+=5;
        setTimer();
    }

});

randomWord();