var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Countdown comp should exist', () => {
    expect(Countdown).toExist();
  });


  describe('handleSetCountdown', () => {
     it('should set state to started and countdown', () => {
     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
     countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout()
    });
  });
});
