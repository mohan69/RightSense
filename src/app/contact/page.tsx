import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { contactPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: contactPage.hero.title,
  description: contactPage.hero.subtitle,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-line bg-canvas p-7 sm:p-8">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-line bg-canvas p-7">
                <h3 className="text-base font-semibold text-ink-900">
                  Direct contact
                </h3>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href={`mailto:${contactPage.details.email}`}
                        className="text-brand-700 hover:text-brand-800 font-medium"
                      >
                        {contactPage.details.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm text-ink-700">
                      <a
                        href={`tel:${contactPage.details.phone.replace(/[^+\d]/g, "")}`}
                        className="hover:text-ink-900"
                      >
                        {contactPage.details.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Company
                    </dt>
                    <dd className="mt-1 text-sm text-ink-700">
                      {contactPage.details.company}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-ink-700">
                      {contactPage.details.location}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
