export const INCREMENT = "Counter/INCREMENT";
export const DECREMENT = "Counter/DECREMENT";
export const RESET = "Counter/RESET";

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function reset() {
  return { type: RESET }
}