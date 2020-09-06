import React from 'react'

const Modal = ({ selectedImage, setSelectedImage }) => {
	const removeModalHandler = (ev) => {
		if (ev.target.classList.contains('backdrop')) setSelectedImage(null)
	}
	return (
		<div className="backdrop" onClick={removeModalHandler}>
			<img src={selectedImage} alt="" />
		</div>
	)
}

export default Modal
