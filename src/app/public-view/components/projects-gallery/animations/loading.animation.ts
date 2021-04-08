import {animate, state, style, transition, trigger} from '@angular/animations';

export const loadingAnimation = [trigger('spinner', [
  state('true', style({
    opacity: '1',
    display: 'block'
  })),
  state('false', style({
    opacity: '0',
    display: 'none'
  })),
  transition('true => false', animate(400)),
]),
  trigger('gallery', [
    state('false', style({
      opacity: '1',
    })),
    state('true', style({
      opacity: '0',
    })),
    transition('true => false', animate('0.4s 0.4s')),
  ]),
]
