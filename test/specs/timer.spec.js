const Timer = require('../../src/pomodoro/timer');

describe('Timer', () => {
    let $item = null;
    let timer = null;


    beforeEach(() => {
        $item = document.createElement('ciasteczko');
        timer = new Timer();
        
    })


    describe('minusFunc', () => {
        it('should reduce value', () => {

            // Arrange
            $item.textContent = '76';
            //const _oldSetItem = localStorage.setItem;
            // Act
            Timer.minusFunc($item);
            // Assert
            expect($item.textContent).toEqual('75');
            // Teardown
            //localStorage = _oldSetItem;

        });
        it('should reduce MINIMUM_CLOCK_VALUE when pass 0', () => {

            $item.textContent = '0';
            Timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });
        it('should reduce MINIMUM_CLOCK_VALUE when pass -1', () => {

            $item.textContent = '-1';
            Timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });
        it('should throw exception when HTMLElement does not have number as a value ', () => {
            $item.textContent = '99';
            Timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('60');
        });
    });
    it('should increase value', () => {
        $item.textContent = '14';
        Timer.increaseElementNumber($item);
        expect($item.textContent).toEqual('15');
    });
    it('should returns MAXIMUM_CLOCK_VALUE when pass number out of range', () => {
        $item.textContent = '99';
        Timer.increaseElementNumber($item);
        expect($item.textContent).toEqual('60');
    });

    describe('startTimer', () => {
        it('should call "timeCounter"', () => {
            // Arrange
            const $break = document.createElement('break');
            $break.textContent = '1';
            const $session = document.createElement('session');
            $session.textContent = '1';

            timer.timeCounter = jest.fn();
            // jest.spyOn(timer, 'timerCounter');
            // Act
            timer.startTimer($break, $session);

            // Assert
            expect(timer.timeCounter).toHaveBeenCalled();
            expect(timer.timeCounter).toHaveBeenCalledTimes(1);
            // expect(timer.timeCounter).toHaveBeenCalledWith(
            //     Timer.ONE_MINUTE_IN_MILLISECONDS,
            //     Timer.ONE_MINUTE_IN_MILLISECONDS
            // )

        })
    })

});