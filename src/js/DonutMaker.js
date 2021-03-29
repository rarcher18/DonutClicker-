class DonutMaker {

    constructor(){
        this.donutCount = 0;
        this.autoClickCount = 0; 
        this.autoClickerCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
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
           
        }
    }

    increaseDonutCountByTheAmountOfTheAutoClick(){
        this.donutCount += this.autoClickCount;
    }

    // autoClick^^^^^^^ // End of Iteration 1^^^^^
    //----------------------------------------------//
       

    addingToDonutMultiplier() {
       this.donutMultiplierCount++;
    }
    
    donutMultiplierSubtraction(){
        this.donutCount -= this.donutMultiplierCost
    }

    increaseCostOfDonutMultiplier() {
        if(this.donutMultiplierCount >= 2){
            this.donutMultiplierCost += (this.donutMultiplierCost * .10);
        }
    }

    EnoughDonutCountsForADonutMultiplier(){
        this.donutCount >= this.donutMultiplierCost
    }
}



// ^^^^^^^^^^^^End of Iteration 2 ^^^^^^^^^^^^^//
//---------------------------------------------//