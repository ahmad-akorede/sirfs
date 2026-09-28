"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Checkbox, Field, SelectField, TextArea } from "@/components/ui/field";
import { Text } from "@/components/ui/type";

type Intent = "apply" | "contact";

export function EnquiryForm({
  intent,
  products = [],
  defaultProduct = "",
}: {
  intent: Intent;
  products?: Array<{ label: string; value: string }>;
  defaultProduct?: string;
}) {
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});
  const [focusId, setFocusId] = useState<string | null>(null);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (!focusId) return;
    document.getElementById(focusId)?.focus();
    setFocusId(null);
  }, [focusId]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const next: { name?: string; phone?: string; consent?: string } = {};
    if (!name) next.name = "Add your name.";
    if (phone.length < 7) next.phone = "Add a telephone number we can call.";
    if (!data.get("consent")) next.consent = "Confirm that we may contact you.";
    setErrors(next);
    const first = (["name", "phone", "consent"] as const).find((key) => next[key]);
    if (first) {
      setHeld(false);
      setFocusId(first);
      return;
    }
    setHeld(true);
  }

  if (held) {
    return (
      <div className="max-w-[46ch] border-t border-[var(--rule)] pt-8">
        <p className="font-serif text-title font-medium">Nothing was sent.</p>
        <Text className="mt-4">
          This form is not connected yet, so the enquiry stayed in the browser.
        </Text>
      </div>
    );
  }

  return (
    <form className="grid max-w-3xl gap-8" onSubmit={onSubmit} noValidate>
      <p className="font-sans text-small text-[var(--muted)]">
        Name, telephone, and permission to contact you are required.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          autoComplete="name"
          required
          error={errors.name}
          onChange={() => setErrors((current) => ({ ...current, name: undefined }))}
        />
        <Field
          label="Telephone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone}
          onChange={() => setErrors((current) => ({ ...current, phone: undefined }))}
        />
      </div>
      {intent === "apply" ? (
        <>
          <SelectField
            label="Which loan"
            name="product"
            defaultValue={defaultProduct || products[0]?.value}
            options={products}
          />
          <Field label="Amount" name="amount" inputMode="decimal" hint="A figure is enough. Terms are confirmed after the file." />
          <TextArea label="What the money is for" name="purpose" rows={4} />
        </>
      ) : (
        <>
          <Field label="Email" name="email" type="email" autoComplete="email" />
          <TextArea label="Message" name="message" rows={5} />
        </>
      )}
      <Checkbox
        label="I agree to be contacted about this enquiry."
        name="consent"
        required
        error={errors.consent}
        onChange={() => setErrors((current) => ({ ...current, consent: undefined }))}
      />
      <div className="flex flex-col items-start gap-4">
        <Button type="submit">{intent === "apply" ? "Submit application" : "Send message"}</Button>
        <Text size="small">
          Submitting does not send this. The answers stay in this browser until you leave the page.
          The{" "}
          <Link href="/privacy" className="underline decoration-current/30 underline-offset-[0.3em]">
            privacy notice
          </Link>{" "}
          lists what is asked for, and what is still unpublished.
        </Text>
      </div>
    </form>
  );
}

export function ApplyEnquiry({
  products,
}: {
  products: Array<{ label: string; value: string }>;
}) {
  const params = useSearchParams();
  const requested = params.get("product") ?? "";
  const known = products.some((product) => product.value === requested);
  return (
    <EnquiryForm
      intent="apply"
      products={products}
      defaultProduct={known ? requested : products[0]?.value}
    />
  );
}
