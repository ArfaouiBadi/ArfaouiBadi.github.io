import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import {
  contactChannels,
  contactIntro,
  emailjs as emailjsConfig,
} from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const scheduleReset = () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 6000);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { name, email, message },
        { publicKey: emailjsConfig.publicKey }
      )
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        scheduleReset();
      })
      .catch((error: unknown) => {
        console.error("EmailJS send failed:", error);
        setStatus("error");
        scheduleReset();
      });
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        subtitle={contactIntro}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul>
            {contactChannels.map((channel) => (
              <li key={channel.kind}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                >
                  <span className="label">{channel.label}</span>
                  <span className="flex items-center gap-1.5 text-sm text-zinc-200 transition-colors group-hover:text-gold-300">
                    {channel.value}
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-gold-300" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="card p-6 md:p-7" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="field-input"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="field-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="field-input"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="field-label">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me about your project, role or idea…"
                className="field-input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-5 w-full"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Message sent — thank you. I'll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
