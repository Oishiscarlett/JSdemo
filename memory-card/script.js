const cardEl = document.getElementsByClassName("card-container")[0];
const cardNumEl = document.getElementById("card-count");
const containerEl = document.getElementsByClassName("container")[0];
const newContainerEl = document.getElementsByClassName("new-container")[0];
const queEl = document.getElementById("que");
const ansEl = document.getElementById('ans');

const addNewCardBtn = document.getElementById("add-new");
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("delete-btn");
const lBtn = document.getElementById("left-btn");
const rBtn = document.getElementById("right-btn");
const clearBtn = document.getElementById("clear-btn");


let cardIndex = 1;
let cardSum = 0;
let cards = [];


// 更新下标
function setCardNum() {
    if (cardSum === 0) {
        cardNumEl.style.display = 'none';
        cardEl.style.visibility = 'hidden';
    } else {
        cardNumEl.style.display = 'block';
        cardEl.style.visibility = 'visible';
        cardNumEl.innerHTML = cardIndex + '/' + cardSum;
    }
}

function showCard() {
    cardSum++;
    cardIndex = 1;
    cards[cardIndex - 1].className = "card show-card";
    setCardNum();
}

// 创建一个新的卡片
function createCard(que,ans) {
    let cardDiv = document.createElement("div");
    cardDiv.className = 'card';
    let cardQuestion = document.createElement('p');
    cardQuestion.id = "question";
    cardQuestion.classList.add("show-front");
    let cardAnswer = document.createElement('p');
    cardAnswer.id = "answer";
    cardAnswer.classList.add("show-back");
    cardQuestion.textContent = que;
    cardAnswer.textContent = ans;
    let iconFront = document.createElement("i"); 
    iconFront.className = "iconfont icon-sync-alt";
    iconFront.textContent = "Flip";

    let iconBack = document.createElement("i");
    iconBack.className = "iconfont icon-sync-alt";
    iconBack.textContent = "Flip";

    cardQuestion.appendChild(iconFront);
    cardAnswer.appendChild(iconBack);
    
    cardDiv.appendChild(cardQuestion);
    cardDiv.appendChild(cardAnswer);

    cards.push(cardDiv);

    cardEl.appendChild(cardDiv);
}


/**
 * 添加监听
 * 
 */

// 首页--添加新卡片按钮
addNewCardBtn.addEventListener('click', e => {
    // 隐藏当前页面
    containerEl.style.display = 'none';
    newContainerEl.style.display = 'block';
});

// 添加页--添加卡片按钮
addBtn.addEventListener('click', e => {
    const queText = queEl.value;
    const ansText = ansEl.value;

    if (queText && ansText) {
        containerEl.style.display = 'block';
        newContainerEl.style.display = 'none';
        createCard(queText, ansText);
        showCard();
        queEl.value = null;
        ansEl.value = null;
    }
});

// 返回上一页
delBtn.addEventListener('click', e => {
    containerEl.style.display = 'block';
    newContainerEl.style.display = 'none';
});

// 点击反转卡片
cardEl.addEventListener('click', e => {
    // 事件委托
    // closet 选最近的div，可以解决点击flip按钮无效的情况
    let target = e.target.closest('div');
    target.classList.toggle('rotate-text');
});

// 上一张卡片
lBtn.addEventListener('click', e => {
    if (cardIndex - 1 > 0) {
        cards[cardIndex - 1].className = "card ";
        cardIndex--;
        cards[cardIndex - 1].className = "card show-card";
        cardNumEl.innerHTML = cardIndex + '/' + cardSum;
    } 
});

// 下一张卡片
rBtn.addEventListener('click', e => {
    if (cardIndex + 1 <= cardSum) {
        cards[cardIndex - 1].className = "card show-left";
        cardIndex++;
        cards[cardIndex - 1].className = "card show-card";
        cardNumEl.innerHTML = cardIndex + '/' + cardSum;
    }
});

// 清空卡片
clearBtn.addEventListener('click', e => {
    cards = [];
    cardIndex = 1;
    cardSum = 0;
    setCardNum();
});

setCardNum();

// TODO: 优化：将卡片内容存在本地