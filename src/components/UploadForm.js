import React, { useState } from 'react'

const UploadForm = () => {
	const [file, setFile] = useState(null)
	const changeHandler = (ev) => {
		let selected = ev.target.files[0]
		if (selected) setFile(selected)
		else setFile(null)
	}
	return (
		<form>
			<label>
				<input type="file" accept="image/*" onChange={changeHandler} />
				<span>+</span>
			</label>
			<div className="output">{file && <div>{file.name}</div>}</div>
		</form>
	)
}

export default UploadForm
