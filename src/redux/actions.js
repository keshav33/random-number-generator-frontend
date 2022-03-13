import * as types from './actionType';

export const updateAllBlocksValue = (values) => {
    return {
        type: types.UPDATE_ALL_BLOCKS_VALUE,
        values
    }
}