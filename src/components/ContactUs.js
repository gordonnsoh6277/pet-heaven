import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () =>
{
  //used to redirect user to a different page
  let navigate = useNavigate ();
  const redirectToHome = () => {navigate('/');};

  //useState to manage form data and errors
  const [formData, setFormData] = useState (
  {
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    address: '',
    unitNumber: '',
    enquiryType: '',
    message: '',
  });

  const [formError, setFormError] = useState (
  {
    firstName: '',
    lastName: '',
    contactNumber:'',
    email: '',
    address: '',
    unitNumber: '',
    enquiryType: '',
    message: '',
  });

  //useState to manage visibility of adoption details section
  const [showAdoptionDetails, setShowAdoptionDetails] = useState (false); 

  //handler for input changes
  const handleChange = (e) =>
  {
    const { name, value } = e.target;
  
    //show/hide adoption details field based on the selected radio button
    if (name === 'enquiryType' && value === 'adoption')
    {
      setShowAdoptionDetails (true);
    }
    else if (value === 'services' || value === 'feedback' || value === 'release')
    {
      setShowAdoptionDetails (false);
      // reset the selectedPet validation error when not in adoption mode
      setFormError ((prevErrors) => ({ ...prevErrors, selectedPet: '' }));
    }
    //update form data
    setFormData ({ ...formData, [name]: value });
  };  

  //function to allow only alphabets and spaces
  const onlyAlphas = (e) =>
  {
    const { name, value } = e.target;
    const sanitizedValue = value.replace (/[^a-zA-Z\s]/g, '');
    setFormData ((prevFormData) => ({ ...prevFormData, [name]: sanitizedValue }));
  };

  //function to allow only numbers
  const onlyNumbers = (e) =>
  {
    const { name, value } = e.target;
    const sanitizedValue = value.replace (/[^0-9]/g, '');
    //insert a space after every 4 digits
    const formattedValue = sanitizedValue.replace (/(\d{4})(?=\d)/g, '$1 ');
    setFormData ((prevFormData) => ({ ...prevFormData, [name]: formattedValue }));
  };

  //function to validate a unit number
  const formatUnitNumber = (e) =>
  {
    const { name, value } = e.target;
    //remove non-numeric characters
    const sanitizedValue = value.replace (/\D/g, '');
    //check if the first character is '0'
    if (sanitizedValue.charAt (0) ===  '0')
    {
      //update state with the sanitized value (preserving leading zero)
      setFormData ((prevFormData) => ({ ...prevFormData, [name]: sanitizedValue }));
    }
    else
    {
      //add a slash after the second character
      if (sanitizedValue.length > 2)
      {
        const formattedValue = sanitizedValue.slice (0, 2) + '-' + sanitizedValue.slice (2);
        //limit to 6 characters (XX-XXX)
        const finalValue = formattedValue.slice (0, 6);
        //update state with the formatted value
        setFormData ((prevFormData) => ({ ...prevFormData, [name]: finalValue }));
      }
      else
      {
        //if <= 2 characters, update state with the sanitized value
        setFormData ((prevFormData) => ({ ...prevFormData, [name]: sanitizedValue }));
      }
    }
  };

  //validates form entries
  const validateForm = () =>
  {
    //helper function to validate field and update form error state
    const validateField = (field, errorMessage) =>
    {
      //trimmed value of field and if field is empty
      const value = formData[field].trim ();
      const isValid = value !== '';
      
      //update form error state based on validation result
      setFormError ((prevErrors) => ({ ...prevErrors, [field]: isValid ? '' : errorMessage }));
  
      return isValid;
    };

    //objects containing the validation errors for each field
    const validations =
    {
      firstName: 'Please enter your First Name.',
      lastName: 'Please enter your Last Name.',
      contactNumber: 'Please enter your contact number.',
      address: 'Please enter your mailing address.',
      message: 'Message too short, please try to elaborate more.',
      email: 'Please enter a valid email address.',
      unitNumber: 'Unit number must be 0 or XX-XXX.',
      enquiryType: 'Please select an enquiry type.',
    };
  
    //flag to track validity
    let validForm = true;
    
    //loops through each field and perform validations for each loop
    for (const field in validations)
    {
      validForm = validateField (field, validations [field]) && validForm;
    }

    //checks if enquiry type is selected.
    if (formData.enquiryType !== 'services' && formData.enquiryType !== 'feedback'
          && formData.enquiryType !== 'adoption' && formData.enquiryType !== 'release')
    {
      setFormError ((prevErrors) => ({ ...prevErrors, enquiryType: 'Please select an enquiry type.' }));
      validForm = false;
    }
    
    //regEX pattern to valiate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test (formData.email))
    {
      //sets form validity to false if email is invalid
      setFormError ((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address.' }));
      validForm = false;
    }

    //split message into words and filter empty strings
    const words = formData.message.split(/\s+/).filter((word) => word !== '');
    if (words.length < 10)
    {
      //sets form to invalid if message has less than 10 words
      setFormError ((prevErrors) => ({ ...prevErrors, message: 'Message too short, please try to elaborate more.' }));
      validForm = false;
    }
  
    if (formData.unitNumber !== '0' && formData.unitNumber.length < 6)
    {
      //sets form to invalid if unit number is something that is NOT 0 or follows proper format
      setFormError ((prevErrors) => ({ ...prevErrors, unitNumber: 'Unit number must be 0 or XX-XXX.' }));
      validForm = false;
    }
  
    return validForm;
  };
  
  //handler for form submission
  const handleSubmit = (e) =>
  {
    e.preventDefault ();

    if (!validateForm ())
    {
      alert ("The form cannot be submitted, please check to see if all fields are correctly filled up!");
      return;
    }

    else
    {
      console.log (formData);

      //clears form fields after submission
      setFormData ({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        address: '',
        enquiryType: '',
        message: '',
        selectedPet: '',
      });

      //displays a success message
      alert ('Form submitted successfully!\nWe will look into your request and get back to you within 3 working days.');
      redirectToHome ();
    }
  };

  return (
    <div className = "contact-us-container">

      <div className="contact-details-container">
        <section className = "contact-details" style = {{ backgroundImage: 'url("img/background1.jpg")' }}>
          <h3>We'd love to have a chat.</h3>
          <p>Visit us at <strong><u>311 Jurong West Street 77</u></strong>.</p>
          <p>Ring us at <strong><u><a href = "tel: +6561921189">+65 6192 1189</a></u></strong> before the animals rest for the day (0900 - 1800).</p>
          <p>If you prefer typing, type away to <strong><u><a href = "mailto: hello@petheaven.com">hello@petheaven.com</a></u></strong>.</p>
        </section>
      </div>
      
      <h2>Get in Touch</h2>
      <p>Not sure where to start? No problem! Fill up this form and we will get back to you in 3-5 business days!</p>
      <form onSubmit = {handleSubmit}>
        <label>
          First Name:
          <input type = "text" name = "firstName" value = {formData.firstName} onInput = {onlyAlphas}/>
          <div className = "error-message">{formError.firstName}</div>
        </label>

        <label>
          Last Name:
          <input type = "text" name = "lastName" value = {formData.lastName} onInput = {onlyAlphas}/>
          <div className = "error-message">{formError.lastName}</div>
        </label>

        <label>
          Contact Number:
          <input type = "text" name = "contactNumber" value = {formData.contactNumber} onInput = {onlyNumbers} maxLength = "9"/>
          <div className = "error-message">{formError.contactNumber}</div>
        </label>
       
        <label>
          Email:
          <input type = "text" name = "email" value = {formData.email} onChange = {handleChange}/>
          <div className = "error-message">{formError.email}</div>
        </label>

        <label>
          Address:
          <input type = "text" name = "address" value = {formData.address} onChange = {handleChange}/>
          <div className = "error-message">{formError.address}</div>
        </label>

        <label>
          Unit Number:
          <input type = "text" name = "unitNumber" value = {formData.unitNumber} onChange = {formatUnitNumber} maxLength = "6"/>
          <div className = "error-message">{formError.unitNumber}</div>
        </label>

        <label>
          Enquiry Type
          <div className = "error-message">{formError.enquiryType}</div>
        </label>
        <br/>
        <div className = "radio-options">
        
          <div className = "radio-option">
            <input
              type = "radio"
              id = "services"
              name = "enquiryType"
              value = "services"
              onChange = {handleChange}
            />
            <label htmlFor = "services">Our Services</label>
          </div>

          <div className = "radio-option">
            <input
              type = "radio"
              id = "feedback"
              name = "enquiryType"
              value = "feedback"
              onChange = {handleChange}
            />
            <label htmlFor = "feedback">Feedback</label>
          </div>

          <div className = "radio-option">
            <input
              type = "radio"
              id = "adoption"
              name = "enquiryType"
              value = "adoption"
              onChange = {handleChange}
            />
            <label htmlFor = "adoption">Adoption</label>
          </div>

          <div className = "radio-option">
            <input
              type = "radio"
              id = "release"
              name = "enquiryType"
              value = "release"
              onChange = {handleChange}
            />
            <label htmlFor = "adoption">Release Pet</label>
          </div>
        </div>

        <br/>
        
        {/* Textarea for additional information or message with dynamic label*/}
        <label className = 'message-label'>
          {formData.enquiryType ===  'release' ? 'Why do you wish to release your pet?' : 'Message'}
          <textarea name = "message" value = {formData.message} onChange = {handleChange}/>
          <div className = "error-message">{formError.message}</div>
        </label>

        <br/>

        <button type = "submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;