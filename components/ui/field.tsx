import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { IconChevronDown } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

type ChromeProps = {
  label: string;
  name: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

function Chrome({ label, name, hint, error, className, children }: ChromeProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)} data-error={error ? "true" : undefined}>
      <label htmlFor={name} className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="font-sans text-small text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="font-sans text-small text-[var(--muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const controlClass =
  "min-h-12 w-full border-0 border-b border-control-line bg-transparent py-3 font-sans text-body text-inherit outline-none transition-colors placeholder:text-ink-faint focus:border-copper aria-[invalid=true]:border-danger";

function describedBy(name: string, hint?: string, error?: string) {
  if (error) return `${name}-error`;
  if (hint) return `${name}-hint`;
  return undefined;
}

type FieldProps = {
  label: string;
  name: string;
  hint?: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

export function Field({ label, name, hint, error, className, ...props }: FieldProps) {
  return (
    <Chrome label={label} name={name} hint={hint} error={error} className={className}>
      <input
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, hint, error)}
        className={controlClass}
        {...props}
      />
    </Chrome>
  );
}

type TextAreaProps = {
  label: string;
  name: string;
  hint?: string;
  error?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

export function TextArea({ label, name, hint, error, className, ...props }: TextAreaProps) {
  return (
    <Chrome label={label} name={name} hint={hint} error={error} className={className}>
      <textarea
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, hint, error)}
        className={cn(controlClass, "min-h-28 resize-y")}
        {...props}
      />
    </Chrome>
  );
}

type SelectProps = {
  label: string;
  name: string;
  hint?: string;
  error?: string;
  options: Array<{ label: string; value: string }>;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "id">;

export function SelectField({
  label,
  name,
  hint,
  error,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <Chrome label={label} name={name} hint={hint} error={error} className={className}>
      <div className="relative">
        <select
          id={name}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(name, hint, error)}
          className={cn(controlClass, "appearance-none pr-8")}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <IconChevronDown className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2" />
      </div>
    </Chrome>
  );
}

type CheckProps = {
  label: string;
  name: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id" | "type">;

export function Checkbox({ label, name, error, className, ...props }: CheckProps) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <label className={cn("flex min-h-11 items-center gap-3 py-1 font-sans text-small", className)}>
        <input
          id={name}
          name={name}
          type="checkbox"
          className="field-check"
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...props}
        />
        <span>{label}</span>
      </label>
      {error ? (
        <p id={errorId} className="mt-2 font-sans text-small text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
