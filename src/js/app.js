let donutMaker = new DonutMaker();

const resetGame = function () {
    donutMaker = new DonutMaker();
}

const updatePage = function () {
    document.querySelector('.donut-count').innerText = `You have ${donutMaker.donutCount} donuts`;
    document.querySelector('.donut-multiplier-info').innerText = `You have ${donutMaker.donutMultiplierCount} Donut Multipliers. You can buy another Donut Multiplier for ${donutMaker.donutMultiplierCost} donuts`
    checkMultiplierButton();
    checkAutoClickButton();

    document.querySelector(".auto-clicker-info").innerText = `You have ${donutMaker.autoClickCount} Auto Clickers. You can buy another AutoClicker for ${donutMaker.autoClickerCost} donuts`


}

const purchaseAutoClick = function () {
    donutMaker.autoClickCount++;                //lines 11-22 might not be necessary *shrug//
    donutMaker.autoClickSubtraction();
    donutMaker.increaseCostOfAutoClicker();
}

function checkAutoClickButton() {
    if (this.donutCount >= this.autoClickerCost) {
        document.querySelector(".purchase-auto-clicker").disabled = true;
    } else {
        document.querySelector(".purchase-auto-clicker").disabled = false;
    }
}
 

document.querySelector(".purchase-auto-clicker").addEventListener('click', () => {
    donutMaker.purchaseAutoClick();
    updatePage();
})

updatePage();
document.querySelector(".reset-button").addEventListener('click', () => {
    resetGame();
    updatePage();
});

const makeDonut = function () {
    donutMaker.recordClick();
}


document.querySelector('.click-button').addEventListener('click', () => {
    makeDonut();
    updatePage();
})

const purchaseDonutMultiplier = function () {
    donutMaker.addingToDonutMultiplier();
    donutMaker.donutMultiplierSubtraction();
    donutMaker.increaseCostOfDonutMultiplier();
}

function checkMultiplierButton() {
    if (donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
        document.querySelector(".donut-multiplier-button").disabled = false;
    } else {
        document.querySelector(".donut-multiplier-button").disabled = true;
    }
}

document.querySelector(".donut-multiplier-button").addEventListener('click', () => {
    purchaseDonutMultiplier();
    updatePage();
});

setInterval(() => {
    donutMaker.recordAutoClick();
    updatePage();
}, 1000);