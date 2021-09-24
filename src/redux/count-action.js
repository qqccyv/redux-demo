import { INCREMENT, DECREMENT } from './constant.js'
import store from './store.js'

export const createIncrementAction = (data) => {
  return { type: INCREMENT, data: data }
}
export const createDecrementAction = (data) => {
  return { type: DECREMENT, data: data }
}
export const createincrementedcountAsync = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(data))
    }, time)
  }
}