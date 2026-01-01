import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const navigationLinks = [
    { title: "SERVICES", id: "services" },
    { title: "SUCCESS STORIES", id: "success-stories" },
    { title: "ABOUT US", id: "about-us" },
  ];

  const socialLinks = [
    { title: "EMAIL", href: "https://example.com" },
    { title: "TWITTER", href: "https://example.com" },
    { title: "LINKEDIN", href: "https://example.com" },
    { title: "INSTAGRAM", href: "https://example.com" },
  ];

  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer
      id="contact"
      className="website-footer w-full bg-[#0B0C10] text-white overflow-hidden relative"
    >
      {/* Background Pattern - "Contact us" repeated */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="text-[80px] md:text-[120px] font-bold whitespace-nowrap">
          {Array(20).fill("Contact us ").join("")}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 md:px-[5%] lg:px-[8%] py-16 md:py-24">
        {/* Left Side: Title and Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold bani-heading mb-6 text-[#3388FF] leading-tight">
            Contact us
          </h2>
          <p className="text-[#393D46] text-[22px] md:text-[26px] bani-title">
            Let's make something amazing
            <br className="hidden md:block" /> together. Start by{" "}
            <span className="text-white">Saying hi</span>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`w-full h-[56px] px-5 rounded-full bg-[#1A1C24] border ${
                  errors.name ? "border-red-500" : "border-transparent"
                } text-white placeholder-gray-500 focus:outline-none focus:border-[#3388FF] transition-colors`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="How can we reach you?"
                className={`w-full h-[56px] px-5 rounded-full bg-[#1A1C24] border ${
                  errors.email ? "border-red-500" : "border-transparent"
                } text-white placeholder-gray-500 focus:outline-none focus:border-[#3388FF] transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Want to tell us what you're building? (optional)"
                rows="5"
                className="w-full px-5 py-4 rounded-[24px] bg-[#1A1C24] border border-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#3388FF] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[56px] rounded-full bg-[#3388FF] hover:bg-[#2978EE] text-white font-medium text-[16px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Navigation and Social Links */}
      <div className="relative z-10 border-t border-white/10 px-5 md:px-[5%] lg:px-[8%] py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-[12px] tracking-wider justify-center md:justify-start">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-[#BEC3D0] hover:text-[#3388FF] transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex flex-wrap gap-6 text-[12px] tracking-wider justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#F3F4F6] hover:text-[#3388FF] transition-colors"
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © All rights reserved. 2026, Comptware Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
