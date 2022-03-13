import React, { useState, useEffect } from 'react';

const InputBlock = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  const handleInputChange = (value) => {
    if (!isNaN(value) || value === '-') {
      if (parseInt(value) > 1000) {
        alert('Cannot be greater than 1000');
      } else {
        setValue(value);
      }
    }
  }

  return (
    <div className='input-container'>
        <input 
          className='custom-input'
          value={value}
          onChange={(event) => handleInputChange(event.target.value)}
          onBlur={() => props.handleInputBlur(props.type, value)}
        />
    </div>
  );
}

export default InputBlock;
