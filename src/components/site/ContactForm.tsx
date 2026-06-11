import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more (10+ chars)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
    const subject = encodeURIComponent(`New enquiry — ${result.data.name}`);
    const body = encodeURIComponent(
      `From: ${result.data.name} <${result.data.email}>\n\n${result.data.message}`,
    );
    window.location.href = `mailto:edwin@eddysailab.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputBase =
    "w-full mt-2 px-4 py-3 rounded-xl text-sm outline-none transition-colors bg-white placeholder:opacity-50";
  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--green-tea)",
    color: "var(--emerald-pine)",
  };
  const labelClass =
    "text-xs uppercase tracking-[0.14em] font-medium";

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
        {/* Left: contact card */}
        <aside
          className="rounded-2xl p-7 h-fit"
          style={{ backgroundColor: "var(--green-tea)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-10"
            style={{ backgroundColor: "var(--emerald-pine)" }}
          >
            <i
              className="fa-solid fa-seedling text-lg"
              style={{ color: "var(--lime-glow)" }}
            />
          </div>
          <div className="space-y-5">
            <a
              href="mailto:hello@eddysailab.com"
              className="block text-lg font-medium hover:underline underline-offset-4"
              style={{ color: "var(--emerald-pine)" }}
            >
              hello@eddysailab.com
            </a>
            <p
              className="text-base leading-relaxed opacity-80"
              style={{ color: "var(--emerald-pine)" }}
            >
              Nairobi, Kenya
              <br />
              Working with teams globally
            </p>
            <p
              className="text-sm opacity-70 pt-2"
              style={{ color: "var(--emerald-pine)" }}
            >
              We reply within one business day.
            </p>
          </div>
        </aside>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div
              className="rounded-2xl p-12 text-center border"
              style={{ borderColor: "var(--green-tea)" }}
            >
              <div
                className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--lime-glow)" }}
              >
                <i className="fa-solid fa-check text-lg" style={{ color: "var(--emerald-pine)" }} />
              </div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: "var(--emerald-pine)" }}
              >
                Thanks — message ready.
              </h3>
              <p className="opacity-70 text-sm max-w-sm mx-auto" style={{ color: "var(--emerald-pine)" }}>
                Your email client should have opened with the details. If not, write us at{" "}
                <a className="underline" href="mailto:hello@eddysailab.com">
                  hello@eddysailab.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: "var(--emerald-pine)" }}
              >
                Send us a message
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cf-name" className={labelClass} style={{ color: "var(--emerald-pine)" }}>
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={inputBase}
                    style={inputStyle}
                    maxLength={100}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass} style={{ color: "var(--emerald-pine)" }}>
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    className={inputBase}
                    style={inputStyle}
                    maxLength={255}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className={labelClass} style={{ color: "var(--emerald-pine)" }}>
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Tell us about your new idea"
                    rows={8}
                    className={inputBase}
                    style={inputStyle}
                    maxLength={1000}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="rounded-full px-8 py-4 inline-flex items-center gap-3 text-base font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--emerald-pine)", color: "var(--background)" }}
                >
                  Submit
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
