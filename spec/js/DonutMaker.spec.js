describe('FEATURE 1: Have a way to count donuts.', () => {
    describe('Can add to donut count:', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a click count of 0.', () => {
            expect(underTest.clickCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
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
        it('should subtract 100 from the donut count as well as add one to the auto clock count', () => {
            underTest.donutCount = 100;
            underTest.purchaseAutoClick();
            underTest.increaseCostOfAutoClicker();
            expect(underTest.donutCount).toBe(100)
        });

    });
});
