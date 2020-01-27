import React from 'react';
import './form-input.styles.scss';


const FormInput = (props) => (
    <div className='group'>
        {props.label ? ( <label className={`${props.value.length ?'shrink':''} form-input-label`}> {props.label}</label>) : null}
        <input className='form-input' onChange={props.handleChange} {...props} />
    </div>
)

export default FormInput; 