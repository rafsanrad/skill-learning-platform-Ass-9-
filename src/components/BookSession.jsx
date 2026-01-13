import { useState } from "react";
import { toast } from "react-toastify";


const BookSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Session booked successfully!");

    // Clear form
    setName("");
    setEmail("");
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-xl mb-15">
      <h2 className="text-2xl font-bold text-center mb-6">
        Book Session
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button className="btn bg-amber-500 text-white w-full">
          Book Session
        </button>
      </form>
    </section>
  );
};

export default BookSession;
