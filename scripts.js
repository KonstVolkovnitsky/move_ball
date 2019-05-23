'use strict';

const field = document.querySelector('#field');
const ball = document.querySelector('#ball');


  field.addEventListener('click', function(event) {
    const fieldCoords = this.getBoundingClientRect();
    let innerFieldCoords = {
      top: fieldCoords.top + field.clientTop,
      left: fieldCoords.left + field.clientLeft
    };
    let ballCoords = {
       top: event.clientY - innerFieldCoords.top - ball.clientHeight / 2,
        left: event.clientX - innerFieldCoords.left - ball.clientWidth / 2
      };
      if (ballCoords.top < 0) {
        ballCoords.top = 0;
      }

      if (ballCoords.left < 0) {
        ballCoords.left = 0;
      }

      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }