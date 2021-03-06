var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', (done) => {
    it('should set state to started and countdown', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        }, 1001)

        setTimeout(() => {
          expect(countdown.state.count).toNotBe(-1);
          done();
        }, 10001)
    })
  });

}); // end main describe
