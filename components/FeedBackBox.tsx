import React, { useState } from 'react';
import { shakeInputs } from './Paragraph';

const FeedBackBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Validates the form fields and sets errors state accordingly.
  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handles submission of the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      });
      alert('Message Has been Sent!');
      console.log('Form Data Cleared!');
    } else {
      shakeInputs();
    }
  };

  // Handles change in input fields and updates the form data state.
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  // Input class to reduce redundancy.
  const inputClass =
    'w-96 p-2 m-2 rounded-lg cursor-pointer bg-slate-100 hover:bg-white';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2 className="pb-2 uppercase w-max">Your Feedback</h2>
      {/* Name input field */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputClass}`}
        />
      </div>

      {/* Email input field */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputClass}`}
        />
      </div>

      {/* Number input field */}
      <div>
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          maxLength={10}
          size={10}
          value={formData.number}
          onChange={handleChange}
          className={`${inputClass} `}
        />
      </div>

      {/* Message input field */}
      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          cols="50"
          className={`resize-none  ${inputClass}`}
        ></textarea>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="m-2 p-2 uppercase rounded-md bg-slate-400 text-white w-48"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedBackBox;
