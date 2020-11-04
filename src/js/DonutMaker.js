class DonutMaker {

    constructor(){
        this.donutCount = 0;
        this.autoClickCount = 0; 
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
    }

    recordClick() {
        this.donutCount++;
    }

    purchaseAutoClick() {
       this.autoClickCount++;

    }
    autoClickSubtraction(){
        this.donutCount -= this.autoClickerCost
    }
    increaseCostOfAutoClicker() {
        if(this.autoClickCount >= 2){
            this.autoClickerCost = Math.round((this.autoClickerCost * .10) + this.autoClickerCost);
        }
    }
    ensureThatDonutCountIsLowerThanCost(){
        if (this.donutCount >= this.autoClickerCost) {
            this.increaseCostOfAutoClicker()
            this.recordAutoClick()
        }
    }
    increaseDonutCountByTheAmountOfTheAutoClick(){
        this.donutCount += this.autoClickCount;
    }
    // autoClick^^^^^^^ // iteration 1^^^^^
    //----------------------------------------------//
    

    addingtoDonutMultipler() {
       this.donutMultiplierCount++;
    }
    
    donutMultiplierSubtraction(){
        this.donutCount -= this.donutMultiplierCost
    }

    addingTenPercentToTheDonutMuliplier() {
        if(this.donutMultiplierCount >= 2){
            this.donutMultiplierCost += (this.donutMultiplierCost * .10);
        }
    }
}
