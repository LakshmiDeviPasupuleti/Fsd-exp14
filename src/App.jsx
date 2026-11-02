
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = { name, email, phone, course };

    setStudents([...students, student]);

    alert("Student Registered Successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setCourse("");
  };

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <br /><br />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
        </select>

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <h2>Registered Students</h2>

      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
