"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { contactPage, contactSubmitEmail } from "@/lib/content";
import type { FormField } from "@/types/site";

const SUBJECT = "RightSense Diagnostic Request";

function FieldInput({ field }: { field: FormField }) {
  const baseClass =
    "w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  if (field.type === "select") {
    return (
      <select
        name={field.name}
        required={field.required}
        defaultValue=""
        className={baseClass}
      >
        <option value="" disabled>
          Select an option
        </option>
        {field.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        required={field.required}
        placeholder={field.placeholder}
        rows={4}
        className={baseClass}
      />
    );
  }

  return (
    <input
      type={field.type}
      name={field.name}
      required={field.required}
      placeholder={field.placeholder}
      className={baseClass}
    />
  );
}

export function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "opening" | "error"
  >("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((value, key) => {
      if (typeof value === "string" && value.trim().length > 0) {
        lines.push(`${key}: ${value}`);
      }
    });
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(SUBJECT);
    const href = `mailto:${contactSubmitEmail}?subject=${subject}&body=${body}`;

    const opened = window.open(href, "_self");
    if (!opened) {
      window.location.href = href;
    }
    setStatus("opening");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {contactPage.formFields.map((field) => (
        <div key={field.name} className="space-y-1.5">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-ink-800"
          >
            {field.label}
            {field.required ? (
              <span className="ml-0.5 text-danger-600">*</span>
            ) : null}
          </label>
          <FieldInput field={field} />
        </div>
      ))}

      <Button type="submit" size="lg" className="w-full">
        Request Diagnostic Call
      </Button>

      {status === "opening" ? (
        <p
          role="status"
          className="rounded-md border border-success-100 bg-success-50 px-3 py-2 text-sm text-success-700"
        >
          Your email client should now be opening with the form details
          pre-filled. If it did not open, please email{" "}
          <a
            href={`mailto:${contactSubmitEmail}`}
            className="font-semibold underline"
          >
            {contactSubmitEmail}
          </a>{" "}
          directly.
        </p>
      ) : null}

      <p className="text-xs text-ink-500 leading-relaxed">
        Submitting this form opens your email client with the details
        pre-filled. We respond to every request within one business day.
      </p>
    </form>
  );
}
