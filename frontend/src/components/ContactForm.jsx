import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      alert(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }
};


  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Contact Me</h2>

      {success && (
        <p className={styles.success}>Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>

      <div className={styles.info}>
        <p>You can also reach me at:</p>

        <ul className={styles.links}>
          <li>
            Email:{" "}
            <a href="mailto:bharathkumarampolu@gmail.com">
              bharathkumarampolu@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bharath-kumar-ampolu"
              target="_blank"
              rel="noreferrer"
            >
              bharath-kumar-ampolu
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/BharathAmpo"
              target="_blank"
              rel="noreferrer"
            >
              BharathAmpo
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}

export default ContactForm;
