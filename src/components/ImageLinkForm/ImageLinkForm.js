import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'Magic FaceFinder will detect faces in your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='form pattern2 center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-purple pointer' onClick={onButtonSubmit}>Detect </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;