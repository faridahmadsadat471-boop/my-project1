function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>

      <form className="mt-8 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
