const cardEl = document.getElementsByClassName("card-container")[0];
const cardNumEl = document.getElementById("card-count");
const addNewCardBtn = document.getElementById("add-new");
const containerEl = document.getElementsByClassName("container")[0];
const queEl = document.getElementById("que");
const ansEl = document.getElementById('ans');
const contentEl = document.getElementById('content');
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("delete-btn");
const filpBtn = document.getElementById("filp-btn");
const lBtn = document.getElementById("left-btn");
const rBtn = document.getElementById("right-btn");
const clearBtn = document.getElementById("clear-btn");


let cardIndex = 1;
let cardSum = 0;
let QAs = [];


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
    setCardNum();

    contentEl.innerHTML = QAs[cardIndex - 1].que;
}


/**
 * 添加监听
 * 
 */

// 首页--添加新卡片按钮
addNewCardBtn.addEventListener('click', e => {
    // 隐藏当前页面
    containerEl.style.display = 'none';
});

// 添加页--添加卡片按钮
addBtn.addEventListener('click', e => {
    const queText = queEl.value;
    const ansText = ansEl.value;

    if (queText && ansText) {
        let obj = {
            que: queText,
            ans: ansText
        };
        QAs.push(obj);
        containerEl.style.display = 'block';
        showCard();
        queEl.value = null;
        ansEl.value = null;
    }
});

// 返回上一页
delBtn.addEventListener('click', e => {
    containerEl.style.display = 'block';
});

// 点击反转卡片
filpBtn.addEventListener('click', e => {
    if (contentEl.innerHTML === QAs[cardIndex - 1].que) {
        contentEl.innerHTML = QAs[cardIndex - 1].ans;
    } else {
        contentEl.innerHTML = QAs[cardIndex - 1].que;
    }
});

// 上一张卡片
lBtn.addEventListener('click', e => {
    if (cardIndex - 1 > 0) {
        cardEl.className = 'card-container left-active';
        cardIndex--;
        contentEl.innerHTML = QAs[cardIndex - 1].que;
        cardNumEl.innerHTML = cardIndex + '/' + cardSum;
        cardEl.className = 'card-container';
    } 
});

// 下一张卡片
rBtn.addEventListener('click', e => {
    if (cardIndex + 1 <= cardSum) {
        cardIndex++;
        contentEl.innerHTML = QAs[cardIndex - 1].que;
        cardNumEl.innerHTML = cardIndex + '/' + cardSum;
    }
});

// 清空卡片
clearBtn.addEventListener('click', e => {
    QAs = [];
    cardIndex = 1;
    cardSum = 0;
    setCardNum();
});

setCardNum();