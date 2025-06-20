import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_db8ozjk",
        "template_v3tddma",
        templateParams,
        "YUoSQ0XFHglsNCzcV"
      )
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setStatus("idle"), 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">
          Get in Touch
        </h1>
        <p
          className="text-zinc-400 text-lg max-w-3xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Have a project in mind or just want to say hello? I'd love to hear
          from you. Send me a message, and let's make something great together.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-zinc-200 mb-3">
              Let's Chat!
            </h2>
            <p className="text-zinc-400 mb-6">
              Fill out the form, or if you prefer, send me an email directly.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:ArfaouiBadi19@gmail.com")
              }
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              ArfaouiBadi19@gmail.com
            </Button>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <Button
              type="submit"
              disabled={status === "sending"}
              size="lg"
              className="w-full"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent!"
                : status === "error"
                ? "Try Again"
                : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
