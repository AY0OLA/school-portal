export default function ContactForm() {
  return (
    <form className="space-y-5 rounded-3xl bg-white p-8 shadow-lg">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-lg border p-4 outline-none focus:border-primary"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-lg border p-4 outline-none focus:border-primary"
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-lg border p-4 outline-none focus:border-primary"
      />

      <textarea
        rows={6}
        placeholder="Your Message"
        className="w-full rounded-lg border p-4 outline-none focus:border-primary"
      />

      <button className="w-full rounded-lg bg-primary py-4 font-semibold text-white transition hover:opacity-90">
        Send Message
      </button>
    </form>
  );
}
