describe('FEATURE 1: Have a way to count donuts.', () => {
    describe('Can add to donut count:', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a click count of 0.', () => {
            expect(underTest.donutCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            expect(underTest.donutCount).toBe(1);
        });
    });
});

describe('FEATURE 2: Be able to purchase the first Auto Clicker with 100 donuts from your click count.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('Can retrieve an autoClicker count.', () => {
        it('Should start with a click count of 0', () => {
            expect(underTest.autoClickCount).toBe(0);
        });
        it('Should be able to add to the auto click count', () => {
            underTest.purchaseAutoClick();
            expect(underTest.autoClickCount).toBe(1);
        });
    });
    describe('Subtract the auto clicker cost from your donut count.', () => {
        it('should subtract 100 from the donut count as well as add one to the auto click count', () => {
            underTest.donutCount = 100;
            underTest.purchaseAutoClick();
            underTest.autoClickSubtraction();
            expect(underTest.donutCount).toBe(0)
        });

    });
});

describe('FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        it('increase the cost from 100 to 110 when autoClicker count is 2', () => {
            underTest.autoClickCount = 2
            underTest.increaseCostOfAutoClicker();
            expect(underTest.autoClickerCost).toBe(110);
        });
        it('Increase the cost of every additional Auto Clicker by an additional ten percent for every additional autoClicker.', () => {
            underTest.autoClickCount = 3
            underTest.autoClickerCost = 110;
            underTest.increaseCostOfAutoClicker();
            expect(underTest.autoClickerCost).toBe(121);
        });
        it('Increase the cost of every additional Auto Clicker by an additional ten percent for every additional autoClicker.', () => {
            underTest.autoClickCount = 4
            underTest.autoClickerCost = 121;
            underTest.increaseCostOfAutoClicker();
            expect(underTest.autoClickerCost).toBe(133);
        });
    });
});
describe('FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.', () => {
        it('should have donutCount lower than cost and do not add to donut Click count', () => {
            underTest.donutCount = 90;                  //arrangement
            underTest.ensureThatDonutCountIsLowerThanCost() //action
            expect(underTest.autoClickCount).toBe(0);       //assertion
        });
    });
});
describe('FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an "Activate Auto Clickers" event is called.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('When the "activate Auto Clickers" event is executed, increase the donut total by the amount of Auto Clickers owned.', () => {
        it('should add one to donut count when there is one Auto Click', () => {
            underTest.donutCount = 1;                                //arrangements
            underTest.autoClickCount = 1;
            underTest.increaseDonutCountByTheAmountOfTheAutoClick() //action
            expect(underTest.donutCount).toBe(2);                   //assertion
        });
        it('should add two to donut count when there is two Auto Click', () => {
            underTest.donutCount = 2;                         //arrangements
            underTest.autoClickCount = 2;
            underTest.increaseDonutCountByTheAmountOfTheAutoClick() //action
            expect(underTest.donutCount).toBe(4);                // assertion
        });
    })
});


// separating iteration 1 from iteration 2 //
//----------------------------------------------//

describe('FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('Can retrieve a Donut Multiplier count.', () => {
        it('should start with a donut multipler of zero', () => {
            expect(underTest.donutMultiplierCount).toBe(0);

        });
    });
    describe('Can add to the Donut Multiplier count.', () => {
        it('should add one to donut multiplier count ', () => {
            underTest.addingtoDonutMultipler();
            expect(underTest.donutMultiplierCount).toBe(1);

        });
    });
    describe('Subtract the amount of the Donut Multiplier cost from the donut count.', () => {
        it('should subtract 10 from donut count and add one to donut multiplier ', () => {
            underTest.donutCount = 20; //arrangement
            underTest.donutMultiplierSubtraction(); //action
            expect(underTest.donutCount).toBe(10); //assertion
        });
    });
});

describe('FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.', () => {
    let underTest;

    beforeEach(() => {
        underTest = new DonutMaker;
    });
    describe('Increase the cost of the second Donut Multiplier by an additional ten percent.', () => {
        it('should make the cost of each additional donutMultiplierCost go up by %10  ', () => {
            underTest.donutMultiplierCount = 2 //arrangement
            underTest.addingTenPercentToTheDonutMuliplier()  //action
            expect(underTest.donutMultiplierCost).toBe(11);  //assertion
        });
        describe('Increase the cost of every additional Donut Multiplier by an additional ten percent.', () => {
            it('should make the cost of each additional donutMultiplierCost go up by %10', () => {
                underTest.donutMultiplierCount = 3 //arrangements
                underTest.donutMultiplierCost = 11 
                underTest.addingTenPercentToTheDonutMuliplier()  //action
                expect(underTest.donutMultiplierCost).toBe(12.1);  //assertion
            });
        });
    });
});
