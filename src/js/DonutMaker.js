class DonutMaker {

    constructor(){
        this.donutCount = 0;
        this.autoClickCount = 0; 
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
        this.donutValue = 1;
    }

    recordClick() {
        this.donutCount++;
    }

    purchaseAutoClick() {
       //increasing the autoClickCount
        this.autoClickCount++;
       //subtract donut cost
       this.autoClickSubtraction();
       //increase the cost of the auto clicker
       this.increaseCostOfAutoClicker();
    }
    autoClickSubtraction(){
        this.donutCount -= this.autoClickerCost
    }
    increaseCostOfAutoClicker() {
        this.autoClickerCost += Math.round(this.autoClickerCost * .10)

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

    notEnoughDonutCountsForADonutMultiplier(){
        if(this.donutCount >= this.donutMultiplierCost){
            this.increaseCostOfDonutMultiplier();
            this.addingtoDonutMultipler();
        }
    }
    increaseDonutValueByDonutMultiplier(){
         this.donutValue = Math.pow(1.2, this.donutMultiplierCount)
    }
}
