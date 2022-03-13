import axios from './axiosConfig';

export const getAllRandomNumbers = (offSet = null, type = null) => {
    return new Promise((resolve) => {
        let totalSum = 1000;
        let numbersRequired = 3;
        const values = {
            topBlockValue: 0,
            leftBlockValue: 0,
            rightBlockValue: 0
        };
        if (offSet && type) {
            totalSum = totalSum - parseInt(offSet);
            numbersRequired = numbersRequired - 1;
            values[`${type}BlockValue`] = offSet;
        }
        axios.get(`/generate/all-random-numbers?totalSum=${totalSum}&numbersRequired=${numbersRequired}`)
        .then((res) => {
            const { result } = res.data;
            if (offSet && type) {
                switch (type) {
                    case 'top':
                        values.leftBlockValue = result[0];
                        values.rightBlockValue = result[1];
                        break;
                    case 'left':
                        values.topBlockValue = result[0];
                        values.rightBlockValue = result[1];
                        break;
                    case 'right':
                        values.topBlockValue = result[0];
                        values.leftBlockValue = result[1];
                        break;
                }
            } else {
                values.topBlockValue = result[0];
                values.leftBlockValue = result[1];
                values.rightBlockValue = result[2];
            }
            resolve(values);
        }).catch(err => {
            console.log(err);
            resolve(values);
        })
    })
}