// @flow

export const KEYS = {
  ENTER: 13,
  SPACE: 32,
};

type callback = KeyboardEvent => void;

export default (callback: callback) => (event: KeyboardEvent) => (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.SPACE) && callback(event);
