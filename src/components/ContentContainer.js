import React, { useEffect } from 'react';
import InputBlock from './InputBlock';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRandomNumbers } from '../api/generatorApi';
import { updateAllBlocksValue } from '../redux/actions';

const ContentContainer = () => {
    const dispatch = useDispatch();
    const topBlockValue = useSelector(state => state.topBlockValue);
    const leftBlockValue = useSelector(state => state.leftBlockValue);
    const rightBlockValue = useSelector(state => state.rightBlockValue);

    const handleAllRandomNumbers = (offSet = null, type = null) => {
        getAllRandomNumbers(offSet, type)
            .then(result => {
                dispatch(updateAllBlocksValue(result));
            })
    }

    useEffect(() => {
        handleAllRandomNumbers();
        const randomNumberInterval = setInterval(() => {
            handleAllRandomNumbers();
        }, 30000)
        return (() => {
            clearInterval(randomNumberInterval);
        })
    }, [])

    const handleInputBlur = (type, value) => {
        if (!isNaN(value)) {
            handleAllRandomNumbers(value, type);
        } else {
            alert('Invalid value');
        }
    }

    return (
        <div className='main-container'>
            <div className='top-component-container'>
                <InputBlock
                    value={topBlockValue}
                    type='top'
                    handleInputBlur={handleInputBlur}
                />
            </div>
            <div className='bottom-container'>
                <div className='left-component-container'>
                    <InputBlock
                        value={leftBlockValue}
                        type='left'
                        handleInputBlur={handleInputBlur}
                    />
                </div>
                <div className='right-component-container'>
                    <InputBlock
                        value={rightBlockValue}
                        type='right'
                        handleInputBlur={handleInputBlur}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentContainer;