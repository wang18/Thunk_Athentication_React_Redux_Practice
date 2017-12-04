import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({field, value, label, type, onChange, checkUserExists}) => {
    return (
        <div className="form-group">
            <label className="control-label">
                {label}
            </label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={field}
                className="form-control"
                onBlur={checkUserExists}
            />
    </div>);
}
TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func.isRequired
}

export default TextFieldGroup;
