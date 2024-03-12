"use client";
import React, { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import { phone } from 'phone';
import 'intl-tel-input/build/css/intlTelInput.css'; // Import the CSS

function PhoneInput({ prefill, geoLocation, customPlaceHolder, onPhoneChange }) {
  const inputRef = useRef(null);
  let intlInput;
    const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [countryCode, setCountryCode] = useState('');
  useEffect(() => {

    if (inputRef.current) {
      intlInput = intlTelInput(inputRef.current, {
        // @ts-ignore
        // intl-tel-input options
        // Show or hide the dial code in the input
        showSelectedDialCode: true,
        // Use the provided placeholder text
        customPlaceholder: customPlaceHolder,
        // Show flags next to country names
        showFlags: true,
        // Don't format the number until the form is submitted
        formatOnDisplay: false,
        // Don't use full screen for country selection
        useFullscreenPopup: false,
        // Set the initial country based on prefill or geolocation
        initialCountry: (prefill && prefill.country) || geoLocation?.country_code?.toLowerCase() || 'in',
        // URL to the utils.js script
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js'
      });
      // Handle country change event
      inputRef.current.addEventListener('countrychange', () => {
        const value = intlInput?.getNumber();
        // Handle country change event
        // You can validate the phone number here or dispatch an action to update state
      });

      // Validator for phone input changes
      const handleChange = (event) => {
        const value = intlInput?.getNumber();
        setPhoneNumber(event.target.value);
        const selectedCountryData = intlInput?.getSelectedCountryData();
        
        // Extract the country code
        const countryCode = selectedCountryData.dialCode;
        const countryName = selectedCountryData.iso2;
        console.log("country name..");
        console.log(selectedCountryData);
        setCountryCode(countryCode);
        // Validate the phone number here or dispatch an action to update state 
        const isValid = validatePhoneNumber(value, intlInput.selectedCountryData.iso2.toUpperCase());
        if (!isValid) {
          // Set error state or show error message
          // For example, you can display an error message below the input
          inputRef.current.setCustomValidity('Please enter a valid phone number');
        } else {
          // Clear error state
          inputRef.current.setCustomValidity('');
        }
        onPhoneChange(event.target.value, countryCode, countryName);
      };

      const validatePhoneNumber = (phoneNumber, country) => {
        // Parse and validate the phone number
        const answer = phone(phoneNumber, { country, strictDetection: true, validateMobilePrefix: true });
        if (!(/^[0-9]+$/.test(phoneNumber.replace("+", "")))) {
            answer.isValid = false;
        }
        setIsValid(answer.isValid);
        return answer.isValid;
        
      }

      // Listen to input changes
      inputRef.current.addEventListener('input', handleChange);

      // Cleanup event listeners on component unmount
      return () => {
        
      };
    }
  }, []);

  const handlePhoneChange = () => {
    //do nothing
  }

  return <div>
    <input type='hidden' value={countryCode} name='country_code' />
    <input ref={inputRef} value={phoneNumber} className='form-control shadow' name="phone" onChange={handlePhoneChange} />{!isValid && <span style={{ color: 'red' }}>Please enter a valid phone number</span>}</div>;
}

export default PhoneInput;
