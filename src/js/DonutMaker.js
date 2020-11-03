class DonutMaker {

    constructor(){
        this.clickCount = 0;
        this.autoClickCount = 0; 
    }

    recordClick() {
        this.clickCount++;
    }

    purchaseAutoClick() {
       this.autoClickCount++;
    }

    increaseCostOfAutoClicker() {
        
    }
}