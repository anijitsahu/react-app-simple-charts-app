import React from 'react';


const ChangeViewerCount = (props) => {

	let { name, viewers, id, handleChange } = props
	return (
		<div className="change-count basic-padding">
			<label>{name}</label>
			<input type="range"
					min="0"
					max="100"
					defaultValue={viewers}
					onChange={handleChange}
					step="1"
					id={id}
				/>
		</div>
	);
}


export default ChangeViewerCount;