import { useState } from "react";

export default function TravellerForm({ index, data, updateTraveller }) {
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 3) return "Name must be at least 3 characters";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets allowed";
    return "";
  };

  const validatePhone = (value) => {
    if (!value) return "Contact number is required";
    if (!/^\d{10}$/.test(value)) return "Enter a valid 10-digit number";
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const error = validateName(value);
    setErrors((prev) => ({ ...prev, name: error }));
    updateTraveller(index, "name", value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const error = validatePhone(value);
    setErrors((prev) => ({ ...prev, phone: error }));
    updateTraveller(index, "phone", value);
  };

  const handleThumbprint = () => {
    if (!errors.name && !errors.phone && data.name && data.phone) {
      updateTraveller(index, "thumb", true);
    }
  };

  return (
    <div className="card">
      <h3>Traveller {index + 1}</h3>

      {/* Name */}
      <input
        placeholder="Full Name"
        value={data.name}
        onChange={handleNameChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* Phone */}
      <input
        placeholder="Contact Number"
        type="text"
        maxLength="10"
        value={data.phone}
        onChange={handlePhoneChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      {/* Thumbprint */}
      <button
        className={data.thumb ? "thumb success" : "thumb"}
        disabled={!!errors.name || !!errors.phone || !data.name || !data.phone}
        onClick={handleThumbprint}
      >
        {data.thumb ? "Thumbprint Captured" : "Capture Thumbprint"}
      </button>
    </div>
  );
}
