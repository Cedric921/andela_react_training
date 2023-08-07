import React from 'react';

const InputElement = () => {
	const [inputText, setInputText] = React.useState('');
	const [historyList, setHistoryList] = React.useState([]);
	return (
		<div>
			<input
				onChange={(e) => {
					setInputText(e.target.value);
					setHistoryList((p) => [...p, e.target.value]);
				}}
				placeholder='Enter some text'
			/>
			<br />
			{inputText}
			<hr />
			<br />
			<ul>
				{historyList.map((letter) => {
					return <li>{letter}</li>;
				})}
			</ul>
		</div>
	);
};

export default InputElement;
