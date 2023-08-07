import React from 'react';

const InputElement = () => {
	return (
		<input onChange={(e) => console.log(e)} placeholder='Enter some text' />
	);
};

export default InputElement;
