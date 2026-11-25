"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Rich } from "@/components/ui/Rich";
import { Turnstile, type TurnstileHandle } from "@/components/ui/Turnstile";
import { kontakt } from "@/content/kontakt";
import { cn } from "@/lib/cn";
import {
  AREAS,
  HONEYPOT_FIELD,
  inquirySchema,
  type Area,
  type InquiryRequest,
  type InquiryResponse,
  type InquiryValues,
} from "@/lib/inquiry-schema";
import { EASE } from "@/lib/motion";
import { typo } from "@/lib/typo";

const f = kontakt.form;
const m = f.messages;

type Values = InquiryValues;

const inputClass =
  "block w-full rounded-xs border border-line bg-chalk px-4 text-[16px] text-ink transition-[border-color,box-shadow] duration-300 outline-none placeholder:text-stone/60 focus:border-bordeaux focus:ring-4 focus:ring-bordeaux/10 aria-[invalid=true]:border-bordeaux";

export function ContactForm() {
  const params = useSearchParams();
  const reduced = useReducedMotion();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  /** text chybovej hlášky nad tlačidlom (Rich: telefón a e-mail ako odkazy) */
  const [formError, setFormError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  /** čas načítania formulára (performance.now nezávisí od hodín zariadenia) */
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = performance.now();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  // predvýber oblasti, ak používateľ prišiel z podstránky (?oblast=…)
  useEffect(() => {
    const oblast = params.get("oblast");
    if (oblast && (AREAS as readonly string[]).includes(oblast)) setValue("area", oblast as Area);
  }, [params, setValue]);

  const onSubmit = async (values: Values) => {
    setStatus("idle");
    setFormError(null);
    if (!token) {
      setStatus("error");
      setFormError(m.turnstilePending);
      return;
    }

    const body: InquiryRequest = {
      ...values,
      [HONEYPOT_FIELD]: honeypotRef.current?.value ?? "",
      elapsedMs: Math.round(performance.now() - startedAt.current),
      turnstileToken: token,
      page: `${window.location.pathname}${window.location.search}`,
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => null)) as InquiryResponse | null;
      if (res.ok && data?.ok) {
        setStatus("success");
        return;
      }
      // token je jednorazový: po každom neúspešnom pokuse treba nové overenie
      turnstileRef.current?.reset();
      setStatus("error");
      if (data && !data.ok) {
        if (data.fieldErrors) {
          for (const [field, message] of Object.entries(data.fieldErrors)) {
            if (message) setError(field as keyof Values, { message });
          }
        }
        setFormError(data.code === "validation" && data.fieldErrors ? null : data.message);
      } else {
        setFormError(m.error);
      }
    } catch {
      turnstileRef.current?.reset();
      setStatus("error");
      setFormError(m.error);
    }
  };

  const selectedArea = watch("area");
  const id = (name: string) => `${uid}-${name}`;
  const errorText = (name: keyof Values) =>
    errors[name]?.message ? (
      <p id={id(`${name}-error`)} role="alert" className="mt-2 text-[14px] text-bordeaux">
        {errors[name]?.message}
      </p>
    ) : null;
  const describedBy = (name: keyof Values, extra?: string) =>
    [errors[name] ? id(`${name}-error`) : null, extra].filter(Boolean).join(" ") || undefined;

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            role="status"
            className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.span
              className="flex size-20 items-center justify-center rounded-full border border-bordeaux text-bordeaux"
              initial={{ scale: reduced ? 1 : 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              {/* ikona „Check“ (rovnaký tvar ako lucide), ktorá sa vykreslí ťahom */}
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth={1.25}>
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: reduced ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
                />
              </svg>
            </motion.span>
            <p className="mt-8 max-w-[34ch] font-serif text-[24px] leading-snug font-medium text-ink">
              <Rich text={m.success} />
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div>
              <label htmlFor={id("name")} className="mb-2 block text-[14px] font-semibold text-ink">
                {f.fields.name} <span className="text-bordeaux">*</span>
              </label>
              <input
                id={id("name")}
                type="text"
                autoComplete="name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={describedBy("name")}
                className={cn(inputClass, "h-[52px]")}
                {...register("name")}
              />
              {errorText("name")}
            </div>

            <div>
              <label htmlFor={id("phone")} className="mb-2 block text-[14px] font-semibold text-ink">
                {f.fields.phone} <span className="text-bordeaux">*</span>
              </label>
              <input
                id={id("phone")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={describedBy("phone")}
                className={cn(inputClass, "h-[52px]")}
                {...register("phone")}
              />
              {errorText("phone")}
            </div>

            <div>
              <label htmlFor={id("email")} className="mb-2 block text-[14px] font-semibold text-ink">
                {f.fields.email}
              </label>
              <input
                id={id("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={describedBy("email")}
                className={cn(inputClass, "h-[52px]")}
                {...register("email")}
              />
              {errorText("email")}
            </div>

            <fieldset>
              <legend className="mb-3 block text-[14px] font-semibold text-ink">{f.fields.area}</legend>
              <div className="flex flex-wrap gap-2">
                {f.areas.map((area) => {
                  const checked = selectedArea === area.value;
                  return (
                    <label key={area.value} className="relative cursor-pointer">
                      <input type="radio" value={area.value} className="peer sr-only" {...register("area")} />
                      <span
                        className={cn(
                          "inline-flex min-h-[44px] items-center rounded-full border px-5 text-[14px] font-medium transition-colors duration-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-bordeaux",
                          checked
                            ? "border-bordeaux bg-bordeaux text-chalk"
                            : "border-line bg-chalk text-ink hover:border-ink",
                        )}
                      >
                        {area.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor={id("message")} className="mb-2 block text-[14px] font-semibold text-ink">
                {f.fields.message}
              </label>
              <textarea
                id={id("message")}
                rows={4}
                aria-describedby={id("message-help")}
                className={cn(inputClass, "min-h-[128px] resize-y py-3.5 leading-relaxed")}
                {...register("message")}
              />
              <p id={id("message-help")} className="mt-2 text-[13.5px] text-stone">
                {typo(f.fields.messageHelp)}
              </p>
            </div>

            {/* honeypot: pre ľudí neviditeľné pole, roboty ho vyplnia */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={id(HONEYPOT_FIELD)}>Webová stránka firmy</label>
              <input
                ref={honeypotRef}
                id={id(HONEYPOT_FIELD)}
                name={HONEYPOT_FIELD}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            {/* Cloudflare Turnstile: skript sa načíta, až keď je formulár blízko obrazovky */}
            <Turnstile ref={turnstileRef} onToken={setToken} className="min-h-[65px] w-full max-w-full overflow-hidden" />

            {status === "error" && formError && (
              <p role="alert" className="rounded-xs border border-bordeaux/30 bg-bordeaux-soft px-4 py-3 text-[14px] leading-relaxed text-bordeaux">
                <Rich text={formError} />
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="group/btn relative isolate inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xs bg-bordeaux px-7 text-[15px] font-semibold tracking-[0.01em] text-chalk disabled:cursor-wait sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-bordeaux-deep transition-transform duration-[450ms] ease-premium group-hover/btn:scale-x-100"
                />
                {isSubmitting && <Loader2 aria-hidden="true" strokeWidth={1.5} className="size-[18px] animate-spin" />}
                <span>{isSubmitting ? f.submitting : f.submit}</span>
              </button>
              <p className="mt-4 text-[13px] leading-relaxed text-stone">
                <Rich text={f.privacyNote} />
              </p>
              <p className="mt-3 text-[14px] text-stone">
                <Rich text={f.below} />
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
