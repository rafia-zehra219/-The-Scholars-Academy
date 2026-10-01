import { useState } from "react";
import "./Admission.css";

function Admission() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    dob: "",
    previousSchool: "",
    classApplying: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("🎉 Admission application submitted successfully!");

    setFormData({
      studentName: "",
      parentName: "",
      dob: "",
      previousSchool: "",
      classApplying: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <section className="admission-section" id="admission">
      <div className="admission-heading">
        <p className="admission-small-title">JOIN OUR SCHOOL</p>

        <h2>
          🎓 Admission <span>Form</span>
        </h2>

        <p>
          Start your child's educational journey with The Scholars Academy.
          Please fill out the form below.
        </p>
      </div>

      <div className="admission-container">
        <form className="admission-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label>Student Name *</label>
              <input
                type="text"
                name="studentName"
                placeholder="Enter student's full name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Parent / Guardian Name *</label>
              <input
                type="text"
                name="parentName"
                placeholder="Enter parent/guardian name"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Class Applying For *</label>
              <select
                name="classApplying"
                value={formData.classApplying}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                <option value="Playgroup">Playgroup</option>
                <option value="Nursery">Nursery</option>
                <option value="KG">KG</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Previous School</label>
              <input
                type="text"
                name="previousSchool"
                placeholder="Enter previous school name"
                value={formData.previousSchool}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Parent Contact Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="03XX-XXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Home Address *</label>
            <textarea
              name="address"
              placeholder="Enter complete home address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Additional Information</label>
            <textarea
              name="message"
              placeholder="Any additional information..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="admission-btn">
            Submit Application →
          </button>

        </form>
      </div>
    </section>
  );
}

export default Admission;