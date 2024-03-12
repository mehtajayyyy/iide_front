"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import PhoneInput from './phone_input';
import { checkSignUp, checkSignIn, submitPartialEntry, verifyOTP } from '../api/api';
import { City, findCity } from 'country-state-city';
import moment from 'moment-timezone';
import OtpInput from 'react-otp-input';

const BrochureForm = ({data}) => {
    const searchParams = useSearchParams();
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_term = searchParams.get('utm_term');
    const utm_team = searchParams.get('utm_team');
    const utm_content = searchParams.get('utm_content');
    const gclid = searchParams.get('gclid');
    const utm_cname = searchParams.get('utm_cname');
    const utm_adset = searchParams.get('utm_adset');
    const utm_adname = searchParams.get('utm_adname');
    const utm_adid = searchParams.get('utm_adid');
    const utm_cid = searchParams.get('utm_cid');
    const utm_asid = searchParams.get('utm_asid');
    const fbclid = searchParams.get('fclid');
    const [validFirstName, setValidFirstName] = useState(true);      
    const [validLastName, setValidLastName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [phone, setPhone] = useState('');
    const [country_code, setCountryCode] = useState('');
    const [currentForm, setCurrentForm] = useState('phone');
    const [cities, setCities] = useState([]);
    const [otpMessage, setOtpMessage] = useState('');
    const [user_id, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [otp, setOtp] = useState('');
    const [sign_in_method, setSignInMethod] = useState('phone');
    const handleUserDataSubmit = async (event) => {
        event.preventDefault();
        // Submit the form data, including the phone number and country code
        const finalFormData = getUserFormData();
        if(userFormData.state) {
            finalFormData.entryData['state'] = userFormData.state;
            
        }
        if(userFormData.country) {
            finalFormData.entryData['country'] = userFormData.country;
            
        }
        finalFormData.entryData['sign_up_method'] = 'phone';
        finalFormData.entryData['timezone'] = moment.tz.guess();
        try {
            // Call the submitFormData function with the form data
            const response = await checkSignUp(finalFormData);
            if(response.data) {
                if(response.data.exists) {
                    setUserId(response.data.user_id);
                    if(response.data.sent == 'phone') {
                        setOtpMessage('OTP message sent on ' + phone.replace(" ", ""));
                    }
                    else {
                        setOtpMessage('OTP message sent on ' + userFormData.email);
                    }
                    
                    setCurrentForm('otp');
                }
                else {
                    setOtpMessage('Email / Phone already exists');
                }
            }
            else {
                setErrorMessage(response.message);
            }
            // Reset form after successful submission
            
          } catch (error) {
            console.error('Failed to submit form data:', error);
          }
    };

    const handlePhoneSubmit = async (event) => {
        event.preventDefault();
        const phoneData = {
            sign_in_method: sign_in_method,
            value: phone.replace(" ", ""),
            browser_id: null,
            session_id: null
        }
        if(sign_in_method == 'phone') {
            phoneData['country_code'] = country_code;
            phoneData['value'] = phone.replace(" ", "");
        }
        else {
            phoneData['value'] = userFormData.email;
        }
        try {
            // Call the submitFormData function with the form data
            const response = await checkSignIn(phoneData);
            if(response.data) {
                if(response.data.exists) {
                    setCurrentForm('otp');
                }
                else {
                    setCurrentForm('user_data');
                    setUserId(response.data.data['user_id']);
                    userFormData.first_name = response.data.data['first_name'];
                    userFormData.last_name = response.data.data['last_name'];
                    userFormData.email = response.data.data['email'];
                    userFormData.city = response.data.data['city'];
                    userFormData.profession = response.data.data['profession'];
                    setPhone(response.data.data['phone']);
                }
                localStorage.setItem("browser_id", response.data.browser_id);
                sessionStorage.setItem("session_id", response.data.session_id);
            }
            else {
                setErrorMessage(response.message);
            }
            // Reset form after successful submission
            
        } catch (error) {
            console.error('Failed to submit form data:', error);
        }
    }

    const handleOtpSubmit = async (event) => {
        event.preventDefault();
        const otpData = {
            'user_id': user_id,
            'sign_in_method': sign_in_method,
            'otp': otp
        }
        try {
            // Call the submitFormData function with the form data
            const response = await verifyOTP(otpData);
            if(response.headers.authorization) {
                console.log(response.headers.authorization);
                localStorage.setItem("token", response.headers.authorization);
                sessionStorage.removeItem("session_id");
            }
            else {
                setErrorMessage(response.message);
            }
            // Reset form after successful submission
            
        } catch (error) {
            console.error('Failed to submit form data:', error);
        }
    }

    const handlePhoneChange = (phoneNumber, countryCode, countryName) => {
        setPhone(phoneNumber);
        setCountryCode(countryCode);
        setCities(City.getCitiesOfCountry(countryName.toUpperCase()));
    };

    const isValidName = (name) => {
        // Validate that the First or Last Name contains only alphabetical characters
        const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/m;
        return nameRegex.test(name);
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const [userFormData, setUserFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        profession: '',
        dob: '',
        city: '',
        state: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(e.target.name == 'first_name') {
            setValidFirstName(isValidName(e.target.value))
        }
        if(e.target.name == 'last_name') {
            setValidLastName(isValidName(e.target.value))
        }
        if(e.target.name == 'email') {
            setValidEmail(isValidEmail(e.target.value))
        }
        if(e.target.name == 'city') {
            getStateCountryData(e.target.value);
        }
        setUserFormData({ ...userFormData, [name]: value });
    };

    const getStateCountryData = (cityName) => {
        const cityData = cities.find(city => city.name === cityName);
        console.log("city data here");
        console.log(cityData);
        // Check if city is found
        if (cityData) {
            // Get state from city
            userFormData['state'] = cityData.stateCode;
            userFormData['country'] = cityData.countryCode;
        }
    }

    useEffect(() => {
        if(userFormData.first_name || userFormData.last_name){
            makeApiRequest(userFormData);
        }
    }, [userFormData]);

    const getUserFormData = () => {
        const partialEntryData = {};
        if(phone) {
            partialEntryData['phone'] = phone.replace(" ", "");
        }
        if(country_code) {
            partialEntryData['country_code'] = country_code;
        }
        if(userFormData.city) {
            partialEntryData['city'] = userFormData.city;
        }
        if(userFormData.first_name) {
            partialEntryData['first_name'] = userFormData.first_name;
        }
        if(userFormData.last_name) {
            partialEntryData['last_name'] = userFormData.last_name;
        }
        if(userFormData.email) {
            partialEntryData['email'] = userFormData.email;
        }
        if(userFormData.profession) {
            partialEntryData['profession'] = userFormData.profession;
        }
        if(userFormData.dob) {
            partialEntryData['dob'] = userFormData.dob;
        }
        if(userFormData.city) {
            partialEntryData['city'] = userFormData.city;
            getStateCountryData(userFormData.city);
        }

        const utmParams = {
            'page_id': 'odmc_landing_page',
            'utm_campaign': utm_campaign,
            'utm_source': utm_source,
            'utm_medium': utm_medium,
            'utm_term': utm_term,
            'utm_team': utm_team,
            'utm_content': utm_content,
            'gclid': gclid,
            'ad_campaign_name': utm_cname,
            'adset_name': utm_adset,
            'ad_name': utm_adname,
            'ad_id': utm_adid,
            'ad_campaign_id': utm_cid,
            'adset_id': utm_asid,
            'fbclid': fbclid,
        }
        return {
            'entryData' : partialEntryData,
            'utmParams': utmParams
        }
    }

    const makeApiRequest = async () => {
        const finalFormData = getUserFormData();
        finalFormData.entryData['browser_id'] = localStorage.getItem('browser_id');
        finalFormData.entryData['session_id'] = sessionStorage.getItem('session_id');
        try {
            // Call the submitFormData function with the form data
            const response = await submitPartialEntry(finalFormData);
            if(response.data) {
                console.log("response data: " + response.data);
            }
            // Reset form after successful submission
            
        } catch (error) {
            console.error('Failed to submit form data:', error);
        }
    };

    const goToPhoneForm = () => {
        setCurrentForm('phone');
    }
    
    const switchSignInMethodEmail = () => {
        setSignInMethod('email');
        setCurrentForm('email');
    }
    const switchSignInMethodPhone = () => {
        setSignInMethod('phone');
        setCurrentForm('phone');
    }

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    }

    return (
        <div className="px-2 flex flex-col items-center justify-center w-full h-full">
            <div className='flex flex-row flex-wrap w-full h-full'>
                <div className='w-1/2 flex items-center bg-slate-200 h-full'>
                    <img src='https://beta.iide.co/assets/icons/login-ui-img.svg'></img>
                </div>
                <div className='w-1/2 flex flex-col items-center h-full'>
                    {currentForm == 'phone' &&
                    <div className='h-full'>
                        <h3 className='text-3xl font-semibold text-black text-center h-full'>Login or Register</h3> 
                        <form className='w-full flex pb-4 flex-col items-center justify-between h-full' onSubmit={handlePhoneSubmit}>
                            <div className='flex flex-col items-center justify-start mt-8 h-96'>
                                <div className="mb-4 w-full lg:w-96 md:w-96 mr-4 border rounded-md border-black">
                                    <PhoneInput prefill={{ country: 'in' }} customPlaceHolder="Enter phone number" onPhoneChange={handlePhoneChange} />
                                </div>
                                <p className='my-2 text-normal text-black text-center'>You'll receive updates on WhatsApp</p>
                                <p className='my-2 text-normal text-black text-center'>or</p>
                                <button type='button' className='border-b-2 mb-0 pb -0 border-black' onClick={switchSignInMethodEmail}>Continue with Email</button>
                            </div>
                            <div className='flex flex-col items-center justify-end h-1/6 w-full'>
                                {errorMessage && 
                                <p className='mb-0 text-red text-lg'>{errorMessage}</p>
                                }
                                <button type='submit' className='bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-2 rounded my-4 text-lg w-2/3 m-auto'>Proceed</button>
                                <p className='mb-2 text-normal text-gray-400 text-center'>By clicking proceed, I accept the T&C and Privacy Policy</p>
                            </div>
                        </form>
                    </div>
                    }
                    {currentForm == 'email' &&
                    <div className='h-full'>
                        <h3 className='text-3xl font-semibold text-black text-center h-full'>Login or Register</h3> 
                        <form className='w-full flex pb-4 flex-col items-center justify-between h-full' onSubmit={handlePhoneSubmit}>
                            <div className='flex flex-col items-center justify-start mt-8 h-96 w-full'>
                                <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full flex-wrap items-center justify-center'>
                                    <div className="mb-4 w-full">
                                        <input
                                                className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="Email*"
                                                name='email'
                                                value={userFormData.email}
                                                onChange={handleEmailChange}
                                                
                                            />
                                        {!validEmail && <span style={{ color: 'red' }}>Please enter a valid email</span>}
                                    </div>
                                </div>
                                <p className='my-2 text-normal text-black text-center'>or</p>
                                <button type='button' className='border-b-2 mb-0 pb-0 mt-4 border-black' onClick={switchSignInMethodPhone}>Continue with Phone</button>
                            </div>
                            <div className='flex flex-col items-center justify-end h-1/6 w-full'>
                                {errorMessage && 
                                <p className='mb-0 text-red text-lg'>{errorMessage}</p>
                                }
                                <button type='submit' className='bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-2 rounded my-4 text-lg w-2/3 m-auto'>Proceed</button>
                                <p className='mb-2 text-normal text-gray-400 text-center'>By clicking proceed, I accept the T&C and Privacy Policy</p>
                            </div>
                        </form>
                    </div>
                    }
                    {currentForm == 'user_data' &&
                    <div className='h-full'>
                        <h3 className='text-xl font-semibold text-black text-center'>Please Enter Your Details to proceed</h3> 
                        <form onSubmit={handleUserDataSubmit} className='w-full flex flex-col justify-between h-full items-center'>
                            <div className='flex flex-col items-center justify-start h-96 mt-4'>
                                <div className='flex flex-col lg:flex-row md:flex-row w-full flex-wrap items-center justify-start'>
                                    <div className="mb-4 w-full lg:w-48 md:w-48 mr-4">
                                        <input
                                            className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="first_name"
                                            type="text"
                                            placeholder="First Name*"
                                            name='first_name'
                                            value={userFormData.first_name}
                                            onChange={handleInputChange}
                                        />
                                        {!validFirstName && <span style={{ color: 'red' }}>Please enter a valid first name</span>}
                                    </div>
                                    <div className="mb-4 w-full lg:w-48 md:w-48">
                                        <input
                                            className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="last_name"
                                            type="text"
                                            placeholder="Last Name*"
                                            name='last_name'
                                            value={userFormData.last_name}
                                            onChange={handleInputChange}
                                        />
                                        {!validLastName && <span style={{ color: 'red' }}>Please enter a valid last name</span>}
                                    </div>
                                </div>
                                {sign_in_method == 'phone' &&
                                <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full flex-wrap items-center justify-center'>
                                    <div className="mb-4 w-full">
                                        <input
                                                className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="Email*"
                                                name='email'
                                                value={userFormData.email}
                                                onChange={handleInputChange}
                                            />
                                        {!validEmail && <span style={{ color: 'red' }}>Please enter a valid email</span>}
                                    </div>
                                </div>
                                }
                                {sign_in_method == 'email' &&
                                <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full flex-wrap items-center justify-center'>
                                    <div className="mb-4 w-full">
                                        <PhoneInput prefill={{ country: 'in' }} customPlaceHolder="Enter phone number" onPhoneChange={handlePhoneChange} />
                                    </div>
                                </div>
                                }
                                <div className='w-full'>
                                    <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full'>
                                        <div className="mb-4 w-full">
                                            <select
                                                className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="profession"
                                                placeholder=""
                                                name='profession'
                                                onChange={handleInputChange}
                                                value={userFormData.profession}
                                                required
                                            >   
                                                <option value="">Who are you?*</option>
                                                <option value={"Pursuing Graduation"}>Undergrad Student</option>
                                                <option value={"Final Year"}>Final Year Student</option>
                                                <option value={"Graduate"}>Graduate</option>
                                                <option value={"Working Professional"}>Working Professional</option>
                                                <option value={"Business Owner"}>Business Owner</option>
                                                <option value={"Other"}>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full'>
                                        <div className="mb-4 w-full">
                                            <input
                                                className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="dob"
                                                type="date"
                                                placeholder="Date of Birth"
                                                name='dob'
                                                value={userFormData.dob}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row md:flex-row mt-2 w-full'>
                                        <div className="mb-4 w-full">
                                            <select
                                                className="shadow appearance-none border rounded w-full py-3 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="city"
                                                placeholder="City*"
                                                name='city'
                                                value={userFormData.city}
                                                onChange={handleInputChange}
                                            >   
                                                <option value="">City?*</option>
                                                {cities.map((item, index) => (
                                                <option value={item.name}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col mt-2 mx-2 h-1/6 justify-end w-80'>
                                {errorMessage && 
                                <p className='mb-0 text-red text-lg'>{errorMessage}</p>
                                }
                                <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded w-full download-brochure text-lg" type='submit'>Next</button>
                            </div>
                        </form>
                    </div>
                    }
                    {currentForm == 'otp' &&
                    <div className='h-full w-full'>
                        <h3 className='text-3xl font-semibold text-black text-center h-full'>Enter OTP!</h3> 
                        {otpMessage && <div className='flex flex-row items-center mx-auto justify-center'><p className='px-2 text-black text-lg text-center'>{otpMessage}</p>
                        <button type="button" onClick={goToPhoneForm}>Edit</button></div>}
                        <form className='w-full flex pb-4 flex-col items-center justify-between h-full' onSubmit={handleOtpSubmit}>
                            <div className='flex flex-col items-center justify-start mt-8 h-96'>
                                <div className="otp-container mt-4">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        shouldAutoFocus={true}
                                        placeholder='0000'
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                        />
                                </div>
                                
                            </div>
                            <div className='flex flex-col items-center justify-center h-1/6 w-full'>
                                {errorMessage && 
                                <p className='mb-0 text-red text-lg'>{errorMessage}</p>
                                }
                                <button type='submit' className='bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-2 rounded mt-4 text-lg w-2/3 m-auto'>Start Learning</button>
                            </div>
                        </form>
                    </div>
                    }
                </div>
            </div>
        </div>
            
    );
}

export default BrochureForm;