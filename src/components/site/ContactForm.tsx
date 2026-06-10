import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  topic: z.string().min(1, "Pick a topic"),
  message: z.string().trim().min(10, "Tell us a little more (10+ chars)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrs: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!fieldErrs[key]) fieldErrs[key] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`[${result.data.topic}] ${result.data.name}`);
    const body = encodeURIComponent(
      `From: ${result.data.name} <${result.data.email}>\nCompany: ${result.data.company || "—"}\n\n${result.data.message}`,
    );
    window.location.href = `mailto:hello@eddysailab.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(245,240,224,0.06)",
    border: "1px solid rgba(245,240,224,0.18)",
    color: "#f5f0e0",
  };
  const labelClass = "text-xs uppercase tracking-[0.14em] font-medium opacity-80";
  const fieldClass =
    "w-full mt-2 px-4 py-3 rounded-md text-sm outline-none transition-colors placeholder:opacity-40 focus:border-[var(--lime-glow)]";

  return (
    <section
      id="contact"
      className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10 pb-24"
    >
      <div
        className="rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-16 py-14 sm:py-20"
        style={{ backgroundColor: "var(--dark-green, #0f2e1f)", color: "#f5f0e0" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left intro */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: "rgba(245,240,224,0.08)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--lime-glow)" }}
              />
              <span className="tag-label">Contact</span>
            </div>
            <h2 className="section-title">
              Let&apos;s map your
              <br />
              next AI move.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-80">
              Tell us a little about your business and where you&apos;d like AI to make a
              difference. We&apos;ll reply within one business day.
            </p>
            <div className="mt-10 space-y-4 text-sm opacity-90">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope w-5" style={{ color: "var(--lime-glow)" }} />
                <a href="mailto:hello@eddysailab.com" className="hover:underline">
                  hello@eddysailab.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot w-5" style={{ color: "var(--lime-glow)" }} />
                <span>Nairobi, Kenya — working globally</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ backgroundColor: "rgba(245,240,224,0.06)" }}
            >
              <div
                className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--lime-glow)" }}
              >
                <i className="fa-solid fa-check text-lg" style={{ color: "#0a0a0a" }} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thanks — message ready.</h3>
              <p className="opacity-80 text-sm max-w-sm mx-auto">
                Your email client should have opened with the details. If not, write us at{" "}
                <a className="underline" href="mailto:hello@eddysailab.com">
                  hello@eddysailab.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label htmlFor="cf-name" className={labelClass}>Name</label>
                <input
                  id="cf-name"
                  type="text"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className={fieldClass}
                  style={inputStyle}
                  maxLength={100}
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-email" className={labelClass}>Work email</label>
                <input
                  id="cf-email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  className={fieldClass}
                  style={inputStyle}
                  maxLength={255}
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-company" className={labelClass}>Company</label>
                <input
                  id="cf-company"
                  type="text"
                  value={values.company}
                  onChange={update("company")}
                  placeholder="Optional"
                  className={fieldClass}
                  style={inputStyle}
                  maxLength={120}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cf-topic" className={labelClass}>I&apos;m interested in</label>
                <select
                  id="cf-topic"
                  value={values.topic}
                  onChange={update("topic")}
                  className={fieldClass}
                  style={inputStyle}
                >
                  <option value="" disabled>Choose one</option>
                  <option value="Advisory">Strategy advisory</option>
                  <option value="Training">Team training</option>
                  <option value="Systems">Workflow systems</option>
                  <option value="Speaking">Speaking / workshop</option>
                  <option value="Other">Something else</option>
                </select>
                {errors.topic && <p className="mt-1 text-xs text-red-300">{errors.topic}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className={labelClass}>What are you trying to solve?</label>
                <textarea
                  id="cf-message"
                  value={values.message}
                  onChange={update("message")}
                  placeholder="A few sentences on the problem, the team, and the timeline."
                  rows={5}
                  className={fieldClass}
                  style={inputStyle}
                  maxLength={1000}
                />
                {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <p className="text-xs opacity-60 max-w-sm">
                  By submitting, you agree to receive a one-time reply from Eddy&apos;s AI Lab. No lists, no spam.
                </p>
                <button
                  type="submit"
                  className="btn-primary rounded-full px-7 py-4 inline-flex items-center gap-3 text-base shrink-0"
                >
                  Send message
                  <i
                    className="fa-solid fa-arrow-right text-sm"
                    style={{ color: "var(--lime-glow)" }}
                  />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
