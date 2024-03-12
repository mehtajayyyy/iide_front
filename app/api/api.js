export const checkSignUp = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/check-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting form data:', error);
      throw error;
    }
  };

export const checkSignIn = async (phoneData) => {
  try {
    const response = await fetch('http://localhost:3001/api/check-signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(phoneData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
}

export const submitPartialEntry = async (formData) => {
  try {
    const response = await fetch('http://localhost:3001/api/submit-partial-entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
}

export const verifyOTP = async (otpData) => {
  try {
    const response = await fetch('http://localhost:3001/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(otpData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
}