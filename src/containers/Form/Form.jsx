import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ subTitle, title, fields, submitButtonText, onSubmit }) => {
  return (
    <form className="formContainer" onSubmit={onSubmit}>
      {subTitle && <p className="formSubtitle">{subTitle}</p>}
      {title && <h2 className="formTitle">{title}</h2>}
      {fields.map((field) => (
        <div className="inputContainer" key={field.name}>
          {field.type === 'textarea' ? (
            <textarea className='formTextArea'
              id={field.name}
              name={field.name}
              rows="4"
              placeholder={field.label}
            />
          ) : (
            <input className='formInput'
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.label}
            />
          )}
        </div>
      ))}
      <button type="submit" className="formSubmitButton">
        {submitButtonText}
      </button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'tel', 'email', 'textarea']).isRequired,
    })
  ).isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  title: '',
};

export default Form;
