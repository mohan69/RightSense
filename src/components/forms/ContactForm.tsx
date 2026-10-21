"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { contactPage, contactSubmitEmail } from "@/lib/content";
import type { FormField } from "@/types/site";

const DEFAULT_SUBJECT = "RightSense — Business Outcome Conversation";

const sourceLabels: Record<string, string> = {
  "48-hour-diagnostic": "48-Hour Outcome Diagnostic",
  "pulseiq-founding-cohort": "PulseIQ Founding Cohort",
  "founder-conversation": "Founder Conversation",
  "winsproposal-rfq-proof": "WinsProposal RFQ Proof",
};

function FieldInput({ field }: { field: FormField }) {
  const baseClass =
    "w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  if (field.type === "select") {
    return (
      <select
        id={field.name}
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
        id={field.name}
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
      id={field.name}
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
    const source = new URLSearchParams(window.location.search).get("source");
    const lines: string[] = [];
    if (source) {
      lines.push(`Interest: ${sourceLabels[source] ?? source}`);
    }
    data.forEach((value, key) => {
      if (typeof value === "string" && value.trim().length > 0) {
        lines.push(`${key}: ${value}`);
      }
    });
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent(
      source ? `RightSense — ${sourceLabels[source] ?? source}` : DEFAULT_SUBJECT
    );
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
        Prepare Email to a Co-Founder
      </Button>

      {status === "opening" ? (
        <p
          role="status"
          className="rounded-md border border-success-100 bg-success-50 px-3 py-2 text-sm text-success-700"
        >
          Your email client should now be opening with the details pre-filled.
          Review the message before sending. If it did not open, email{" "}
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
        This form does not send data to a website database. It opens your email
        client with the details pre-filled so you stay in control of what is sent.
      </p>
    </form>
  );
}
