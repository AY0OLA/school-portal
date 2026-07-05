"use client";

import { useState } from "react";
import { toast } from "sonner";

const classes = [
  "Creche",
  "Nursery 1",
  "Nursery 2",
  "Basic 1",
  "Basic 2",
  "Basic 3",
  "Basic 4",
  "Basic 5",
  "Basic 6",
  "JSS 1",
  "JSS 2",
  "JSS 3",
  "SSS 1",
  "SSS 2",
  "SSS 3",
];

const purposes = [
  "Admission Enquiry",
  "School Fees",
  "Portal Support",
  "General Enquiry",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    childName: "",
    classInterested: "",
    purpose: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendWhatsapp(e: React.FormEvent) {
    e.preventDefault();

    if (!form.fullName || !form.phone || !form.message) {
      toast.error("Please complete all required fields.");
      return;
    }

    const message = `
Hello Greenfield Academy,

*Full Name*
${form.fullName}

*WhatsApp Number*
${form.phone}

*Email*
${form.email || "N/A"}

*Child's Name*
${form.childName || "N/A"}

*Class Interested*
${form.classInterested || "N/A"}

*Purpose*
${form.purpose || "N/A"}

*Message*
${form.message}
`;

    const phoneNumber = "2348012345678"; // CHANGE THIS

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    toast.success(
      "Thank you! Our admissions team will reach out to you on WhatsApp shortly.",
    );

    setForm({
      fullName: "",
      phone: "",
      email: "",
      childName: "",
      classInterested: "",
      purpose: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={sendWhatsapp}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-lg"
    >
      <input
        name="fullName"
        placeholder="Full Name *"
        value={form.fullName}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      />

      <input
        name="phone"
        placeholder="WhatsApp Number *"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      />

      <input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      />

      <input
        name="childName"
        placeholder="Child's Name"
        value={form.childName}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      />

      <select
        name="classInterested"
        value={form.classInterested}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      >
        <option value="">Select Class</option>

        {classes.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <select
        name="purpose"
        value={form.purpose}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      >
        <option value="">Purpose of Enquiry</option>

        {purposes.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <textarea
        rows={5}
        name="message"
        placeholder="Type your message..."
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-lg border p-4"
      />

      <button className="w-full rounded-lg bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700">
        Send via WhatsApp
      </button>
    </form>
  );
}
