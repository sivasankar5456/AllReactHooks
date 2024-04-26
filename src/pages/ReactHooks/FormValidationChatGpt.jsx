import React, { useState } from 'react';

function FormValidationChatGpt() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Validate each field on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        // Simple validation for first name and last name (non-empty)
        errorMessage = value.trim() ? '' : 'This field is required';
        break;
      case 'email':
        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errorMessage = emailRegex.test(value) ? '' : 'Invalid email address';
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    validateAllFields();
    // Proceed with form submission if there are no errors
    if (isFormValid()) {
      console.log('Form submitted with data:', formData);
      // Further processing...
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  const validateAllFields = () => {
    // Validate all fields
    for (const [name, value] of Object.entries(formData)) {
      validateField(name, value);
    }
  };

  const isFormValid = () => {
    // Check if there are any errors
    return Object.values(errors).every((error) => error === '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidationChatGpt;
