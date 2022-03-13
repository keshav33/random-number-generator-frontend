import * as types from './actionType';

const initialState = {
    topBlockValue: '',
    leftBlockValue: '',
    rightBlockValue: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ALL_BLOCKS_VALUE:
            const {topBlockValue, leftBlockValue, rightBlockValue} = action.values;
            return {
                ...state,
                topBlockValue,
                leftBlockValue,
                rightBlockValue
            }
        default:
            return state;
    }
}