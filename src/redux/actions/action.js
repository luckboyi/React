export const INCREMENT ='counter/INCREMENT'
export const DECREMENT= 'counter/DECREMENT'
export const RESET = 'counter/RESET'
export function increment(params) {
  return {type :INCREMENT}
}
export function decrement(){
  return {type:DECREMENT}
}
export function reset(params) {
  return {type:RESET}
}