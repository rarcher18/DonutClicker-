class DonutMaker {

    constructor(){
        this.donutCount = 0;
        this.autoClickCount = 0; 
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
        // this.donutValue = 1;
        // this.autoClickValue = 1;
    }

    recordClick() {
       this.donutCount += Math.pow(1.2, this.donutMultiplierCount)
        // this.donutCount += this.donutValue;
    }
        
    purchaseAutoClick() {
        //check if you can afford auto clicker
        if(this.donutCount>= this.autoClickerCost){
           
            this.autoClickCount++;
           
            this.autoClickSubtraction();
            
            this.increaseCostOfAutoClicker();
        }
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

    // autoClick^^^^^^^ // End of Iteration 1^^^^^
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

    // increaseDonutValueByDonutMultiplier(){
    //      this.donutValue = Math.pow(1.2, this.donutMultiplierCount)
    // }

    // increaseAutoClickValue(){
    //     this.autoClickValue = this.donutValue
    // }
}



// ^^^^^^^^^^^^End of Iteration 2 ^^^^^^^^^^^^^//
//---------------------------------------------//