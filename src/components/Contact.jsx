import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const emailAddress = "marvenjoffreluis@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const openEmailDraft = (event) => {
    event.preventDefault();
    const subject = form.subject.trim() || `Portfolio inquiry from ${form.name.trim()}`;
    const body = [`Hi Marven,`, "", form.message.trim(), "", `From: ${form.name.trim()}`, `Reply to: ${form.email.trim()}`].join("\n");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section border-t border-border bg-surface">
      <div className="container-max section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let&apos;s start with a conversation.</h2>
            <p className="mt-5 max-w-lg leading-7 text-muted">Hiring for a software role, exploring a collaboration, or simply want to connect? Share a few details and I&apos;ll get back to you as soon as I can.</p>

            <div className="mt-8 flex flex-col gap-4">
              <a href={`mailto:${emailAddress}`} className="card group flex items-center gap-4 p-4">
                <span className="icon-tile"><EnvelopeIcon className="size-5" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Email directly</span>
                  <span className="mt-1 block truncate font-medium text-foreground">{emailAddress}</span>
                </span>
                <ArrowTopRightOnSquareIcon className="size-5 text-muted transition-colors group-hover:text-primary" />
              </a>
              <p className="text-sm leading-6 text-muted">No account or sign-in needed. The form opens a prepared draft in your email app, so you stay in control before sending.</p>
            </div>
          </div>

          <form onSubmit={openEmailDraft} className="card p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Name
                <input className="contact-input" name="name" value={form.name} onChange={updateField} autoComplete="name" required placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Email
                <input className="contact-input" type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" required placeholder="you@company.com" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground sm:col-span-2">
                Subject
                <input className="contact-input" name="subject" value={form.subject} onChange={updateField} placeholder="Role, project, or opportunity" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground sm:col-span-2">
                Message
                <textarea className="contact-input min-h-36 resize-y" name="message" value={form.message} onChange={updateField} required placeholder="Tell me a little about what you have in mind..." />
              </label>
            </div>
            <button type="submit" className="button button-primary mt-6 w-full sm:w-auto">
              <PaperAirplaneIcon className="size-4" />
              Continue to email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
