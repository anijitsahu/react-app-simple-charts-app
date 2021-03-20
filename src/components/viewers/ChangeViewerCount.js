// ChangeViewerCount component
export default (props) => {

	let { name, viewers, id, handleChange } = props
	return (
		<div className="change-count basic-padding">
			<label>{name}</label>
			<input type="range"
				min="0"
				max="24"
				defaultValue={viewers}
				onChange={handleChange}
				step="1"
				title={viewers}
				id={id}
			/>
		</div>
	);
}
