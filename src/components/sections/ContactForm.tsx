"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Rich } from "@/components/ui/Rich";
import { kontakt } from "@/content/kontakt";
import { cn } from "@/lib/cn";
import { submitInquiry, type Area } from "@/lib/inquiry";
import { EASE } from "@/lib/motion";
import { typo } from "@/lib/typo";

const f = kontakt.form;
const m = f.messages;
const AREAS = ["nehody", "trestne", "obchodne", "ine"] as const;

const schema = z.object({
  name: z.string().trim().min(1, m.required),
  phone: z
    .string()
    .trim()
    .min(1, m.required)
    .refine((v) => /^\+?[\d\s/().-]+$/.test(v) && v.replace(/\D/g, "").length >= 9, m.phone),
  email: z
    .string()
    .trim()
    .refine((v) => v === "" || z.string().email().safeParse(v).success, m.email),
  area: z.enum(AREAS).optional(),
  message: z.string().trim(),
  consent: z.boolean().refine((v) => v, m.consent),
});

type Values = z.infer<typeof schema>;

const inputClass =
  "block w-full rounded-xs border border-line bg-chalk px-4 text-[16px] text-ink transition-[border-color,box-shadow] duration-300 outline-none placeholder:text-stone/60 focus:border-bordeaux focus:ring-4 focus:ring-bordeaux/10 aria-[invalid=true]:border-bordeaux";

export function ContactForm() {
  const params = useSearchParams();
  const reduced = useReducedMotion();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", message: "", consent: false },
  });

  // predvýber oblasti, ak používateľ prišiel z podstránky (?oblast=…)
  useEffect(() => {
    const oblast = params.get("oblast");
    if (oblast && (AREAS as readonly string[]).includes(oblast)) setValue("area", oblast as Area);
  }, [params, setValue]);

  const onSubmit = async (values: Values) => {
    setStatus("idle");
    try {
      await submitInquiry({
        name: values.name,
        phone: values.phone,
        email: values.email || undefined,
        area: values.area,
        message: values.message || undefined,
        consent: true,
      });
      setStatus("success");
    } catch {
      setStatus("error");
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
              {typo(m.success)}
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

            <div>
              <label htmlFor={id("consent")} className="flex cursor-pointer items-start gap-3.5">
                <input
                  id={id("consent")}
                  type="checkbox"
                  aria-required="true"
                  aria-invalid={!!errors.consent}
                  aria-describedby={describedBy("consent")}
                  className="mt-1 size-5 shrink-0 cursor-pointer appearance-none rounded-xs border border-stone/60 bg-chalk bg-center bg-no-repeat transition-colors checked:border-bordeaux checked:bg-bordeaux checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23F6F3EE%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22M5%2012.5l4.5%204.5L19%207.5%22/%3E%3C/svg%3E')] aria-[invalid=true]:border-bordeaux"
                  {...register("consent")}
                />
                <span className="text-[14px] leading-relaxed text-ink/85">
                  <Rich text={f.fields.consent} />
                </span>
              </label>
              {errorText("consent")}
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-xs border border-bordeaux/30 bg-bordeaux-soft px-4 py-3 text-[14px] text-bordeaux">
                <Rich text={m.error} />
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
                <span>{f.submit}</span>
              </button>
              <p className="mt-5 text-[14px] text-stone">
                <Rich text={f.below} />
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
