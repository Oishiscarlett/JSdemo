const cardEl = document.getElementsByClassName("card-container")[0];
const cardNumEl = document.getElementById("card-count");
const addNewCardBtn = document.getElementById("add-new");
const containerEl = document.getElementsByClassName("container")[0];
const addBtn = document.getElementById("add-btn");
const queEl = document.getElementById("que");
const ansEl = document.getElementById('ans');
const contentEl = document.getElementById('content');


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
    }
});

function showCard() {
    cardSum++;
    cardIndex = 1;
    setCardNum();

    contentEl.innerHTML = QAs[cardIndex - 1].que;

}

setCardNum();