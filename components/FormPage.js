import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import validateForm from "../validation/validateForm";

function FormPage() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "+91",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: ""
  };

  const { values, errors, handleChange } = useForm(initialValues, validateForm);

  const formatAadhaar = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      navigate("/result", { state: values });
    }
  };

  const isValid = Object.keys(errors).length === 0;

  return (

    <div className="container">

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className={errors.firstName ? "error-border" : ""}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className={errors.lastName ? "error-border" : ""}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className={errors.username ? "error-border" : ""}
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className={errors.email ? "error-border" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <div className="passwordBox">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className={errors.password ? "error-border" : ""}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        {errors.password && <span className="error">{errors.password}</span>}

        <div className="phoneBox">

          <input
            name="countryCode"
            value={values.countryCode}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className={errors.phone ? "error-border" : ""}
          />

        </div>

        {errors.phone && <span className="error">{errors.phone}</span>}

        <select
          name="country"
          onChange={handleChange}
          className={errors.country ? "error-border" : ""}
        >
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        {errors.country && <span className="error">{errors.country}</span>}

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          className={errors.city ? "error-border" : ""}
        />

        {errors.city && <span className="error">{errors.city}</span>}

        <input
          name="pan"
          placeholder="PAN Number"
          onChange={handleChange}
          className={errors.pan ? "error-border" : ""}
        />

        {errors.pan && <span className="error">{errors.pan}</span>}

        <input
          name="aadhaar"
          placeholder="Aadhaar Number"
          value={values.aadhaar}
          onChange={(e) =>
            handleChange({
              target: {
                name: "aadhaar",
                value: formatAadhaar(e.target.value)
              }
            })
          }
          className={errors.aadhaar ? "error-border" : ""}
        />

        {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}

        <button disabled={!isValid}>
          Submit
        </button>

      </form>

    </div>
  );
}

export default FormPage;