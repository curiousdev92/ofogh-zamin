"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { Button, Input, Label, Textarea } from "@/components/ui";
import type { ContactMessages } from "@/lib/i18n/messages";

type Fields = { name: string; email: string; company: string; message: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success";

// Pragmatic email shape check — good enough for a contact form; real validation
// happens server-side once delivery is wired.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY: Fields = { name: "", email: "", company: "", message: "" };

type ContactFormProps = {
  labels: ContactMessages["form"];
  errors: ContactMessages["validation"];
  success: ContactMessages["success"];
};

/** A labelled field wrapper: label (with required/optional marker) + control + inline error. */
function Field({
  id,
  label,
  required,
  optionalLabel,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" *"}
          </span>
        ) : optionalLabel ? (
          <span className="ms-1 font-normal text-muted-foreground">({optionalLabel})</span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Contact enquiry form. Client-side validation + a success state only —
 * delivery is intentionally NOT wired ("UI now, wire delivery later"). When a
 * provider is chosen, POST the payload from handleSubmit (see the TODO there).
 */
export function ContactForm({ labels, errors, success }: ContactFormProps) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the user starts correcting it.
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function validate(v: Fields): FieldErrors {
    const e: FieldErrors = {};
    if (!v.name.trim()) e.name = errors.nameRequired;
    if (!v.email.trim()) e.email = errors.emailRequired;
    else if (!EMAIL_RE.test(v.email.trim())) e.email = errors.emailInvalid;
    if (!v.message.trim()) e.message = errors.messageRequired;
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setFieldErrors(found);
      // Move focus to the first invalid field for keyboard/AT users.
      const firstInvalid = (["name", "email", "message"] as const).find((f) => found[f]);
      if (firstInvalid) document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    // TODO(delivery): no backend yet — per the "UI now, wire delivery later"
    // decision. When a provider is chosen (Resend / Formspree / an API route),
    // POST `values` here and surface network errors. Logged so the payload
    // isn't a black hole during development.
    console.info("[contact] enquiry (delivery not wired yet):", values);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  function reset() {
    setValues(EMPTY);
    setFieldErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-surface-muted p-8" role="status" aria-live="polite">
        <div className="mb-4 flex h-10 w-10 items-center justify-center border border-border-strong bg-navy-900 text-xl text-gold-400">
          ✓
        </div>
        <h3 className="text-xl font-bold uppercase tracking-tight">{success.title}</h3>
        <p className="mt-3 leading-relaxed text-steel-600">{success.body}</p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          {success.again}
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <Field id="contact-name" label={labels.name} required error={fieldErrors.name}>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder={labels.namePlaceholder}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          className={fieldErrors.name ? "border-danger focus-visible:border-danger" : undefined}
        />
      </Field>

      <Field id="contact-email" label={labels.email} required error={fieldErrors.email}>
        <Input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={labels.emailPlaceholder}
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
          className={fieldErrors.email ? "border-danger focus-visible:border-danger" : undefined}
        />
      </Field>

      <Field id="contact-company" label={labels.company} optionalLabel={labels.optional}>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          placeholder={labels.companyPlaceholder}
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </Field>

      <Field id="contact-message" label={labels.message} required error={fieldErrors.message}>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={labels.messagePlaceholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          className={fieldErrors.message ? "border-danger focus-visible:border-danger" : undefined}
        />
      </Field>

      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? labels.submitting : labels.submit}
      </Button>
    </form>
  );
}
