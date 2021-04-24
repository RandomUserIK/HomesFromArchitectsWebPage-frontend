import {InjectionToken} from '@angular/core';

export const RECAPTCHA_KEY_INJECTABLE = new InjectionToken<string>(
  'Recaptcha key',
  {
    factory: () => {
      return "6LeeO6QaAAAAAHcFrYzi2c-sxZjUYWifhdpKpFiR";
    }
  }
);
