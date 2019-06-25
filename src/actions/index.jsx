
// Actions (types)
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCount = () => {
    return {
        type: DECREMENT
    }
}