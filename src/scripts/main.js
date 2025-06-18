'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const isInsideWall =
    e.clientX >= wallRect.left &&
    e.clientX <= wallRect.right &&
    e.clientY >= wallRect.top &&
    e.clientY <= wallRect.bottom;

  if (!isInsideWall) {
    return;
  }

  let newLeft = e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;
  let newTop = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
