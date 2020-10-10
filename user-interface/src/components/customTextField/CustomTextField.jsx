import React from 'react';
import TextField from '@material-ui/core/TextField';

import './CustomTextField.css';

const CustomTextField = ({ 
    id,
    input: {
        name, value, onChange, onBlur, onDragStart, onDrop, onFocus
    },
    label,
    meta: { touched, error },
}) => {
    return (
        <TextField
            id={id}
            label={label}
            error={!!(touched && error)}
            helperText={touched && error}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onFocus={onFocus}
            classes={{
                root: 'custom-text-field'
            }}
        />
    )
};

export default CustomTextField;