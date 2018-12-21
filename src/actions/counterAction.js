import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './actionTypes'

//action creater 
export const increment_counter = () => dispatch => {
    dispatch( {type : INCREMENT_COUNTER, payload : null});
}; 

export const decrement_counter = () => dispatch => {
    dispatch( {type : DECREMENT_COUNTER, payload : null});
}; 