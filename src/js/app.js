let donutMaker = new DonutMaker();

const resetGame = function(){
    donutMaker = new DonutMaker();
}

const updatePage = function () {
    document.querySelector('.donut-count').innerText = `We have this many donuts: ${donutMaker.donutCount}`;
    document.querySelector('.donut-multiplier-info').innerText = `We own ${donutMaker.donutMultiplierCount} Donut Multiplers. You can buy another AutoClciker for ${donutMaker.donutMultiplerCost} donuts`

    if(!donutMaker.notEnoughDonutCountsForADonutMultiplier()){
        document.querySelector(".donut-multiplier-button").disabled = true;
    }else{
        document.querySelector(".donut-multiplier-button").disabled = false;
    }
    document.querySelector(".auto-clicker-info").innerText = `We own ${donutMaker.autoClickerCount} Auto Clickers. You can buy another AutoClicker for ${donutMaker.autoClickerCost} donuts`

    if(!donutMaker.purchaseAutoClick()){
        document.querySelector(".donut-multiplier-button").disabled = true;
    }else{
        document.querySelector(".purchase-auto-clicker").disabled = false;
    }
}
updatePage();
document.querySelector(".reset-button").addEventListener('click' , ()=>{
    resetGame();
    updatePage();
});

const makeDonut = function(){
    donutMaker.recordClick;
}

document.querySelector('.click-button').addEventListener('click' , () => {
    makeDonut();
    updatePage();
})

const purchaseDonutMultiplier = function(){
    donutMaker.addingDonutMultiplier();
}


document.querySelector(".donut-multiplier-button").addEventListener('click', () => {
    addingDonutMultiplier();
    updatePage();
});

// setInterval(() => {
//     donutMaker.recordAutoClick();
//     updatePage();
// }, 1000);