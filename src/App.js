import React, { useState } from "react";

const FormThreeSteps = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    receiveInfo: false,
    username: "",
    password: "",
    repeatPassword: "",
    accountType: "personal",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleReceiveInfo = () => {
    setFormData({ ...formData, receiveInfo: !formData.receiveInfo });
  };

  switch (step) {
    case 1:
      return (
        <div>
          <h3>Step 1: Personal Information</h3>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
          <br />
          <input
            type="date"
            placeholder="Birthdate"
            value={formData.birthdate}
            onChange={handleChange("birthdate")}
          />
          <br />
          <div>
            <p>Gender:</p>
            <button
              onClick={() => setFormData({ ...formData, gender: "Male" })}
            >
              Male
            </button>
            <button
              onClick={() => setFormData({ ...formData, gender: "Female" })}
            >
              Female
            </button>
            <button
              onClick={() => setFormData({ ...formData, gender: "Other" })}
            >
              Other
            </button>
          </div>
          <br />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          <br />
          <p>Receive information?</p>
          <button onClick={handleReceiveInfo}>
            {formData.receiveInfo ? "Yes" : "No"}
          </button>
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>Step 2: Account Information</h3>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange("username")}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange("password")}
          />
          <br />
          <input
            type="password"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange("repeatPassword")}
          />
          <br />
          <p>Account Type:</p>
          <select
            value={formData.accountType}
            onChange={handleChange("accountType")}
          >
            <option value="personal">Personal</option>
            <option value="pro">Pro</option>
            <option value="business">Business</option>
          </select>
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 3:
      return (
        <div>
          <h3>Step 3: Confirm Information</h3>
          <p>Username: {formData.username}</p>
          <p>Password: *******</p>
          <p>Repeat Password: *******</p>
          <p>Account Type: {formData.accountType}</p>
          <br />
          <p>Is this information correct?</p>
          <button onClick={() => console.log("Submitting...")}>Yes</button>
          <button onClick={prevStep}>No</button>
        </div>
      );
    default:
      return <h3>Error</h3>;
  }
};

export default FormThreeSteps;
