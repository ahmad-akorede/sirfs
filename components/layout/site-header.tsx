"use client";

import { Link } from "@/components/ui/link";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { isNavActive, mainNav, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { IconClose, IconMenu } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closingPanel = useRef(false);
  const menuReason = useRef<"dismiss" | "navigate" | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setPanel(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!menuOpen || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const onClose = () => {
      setMenuOpen(false);
      if (menuReason.current === "navigate") document.getElementById("content")?.focus();
      menuReason.current = null;
    };
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      if (dialog.open) dialog.close();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!panel) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const current = panel;
      closingPanel.current = true;
      setPanel(null);
      document.getElementById(`nav-trigger-${current.toLowerCase()}`)?.focus();
      queueMicrotask(() => {
        closingPanel.current = false;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  function closeMenu(reason: "dismiss" | "navigate") {
    menuReason.current = reason;
    dialogRef.current?.close();
  }

  function trapMenuTab(event: ReactKeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const items = [...dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <Container width="wide" className="flex h-[4.5rem] items-center justify-between gap-8">
        <Link
          href="/"
          className="flex h-11 items-center font-serif text-[1.7rem] leading-none font-medium tracking-[-0.03em] text-ink"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isNavActive(pathname, item);
            const open = panel === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setPanel(item.children ? item.label : null)}
                onMouseLeave={() => setPanel(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setPanel(null);
                  }
                }}
              >
                <Link
                  id={`nav-trigger-${item.label.toLowerCase()}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={item.children ? open : undefined}
                  aria-controls={item.children ? `nav-${item.label.toLowerCase()}` : undefined}
                  className={cn(
                    "nav-mark inline-flex h-11 items-center font-sans text-small",
                    active ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                  onFocus={() => {
                    if (closingPanel.current) return;
                    setPanel(item.children ? item.label : null);
                  }}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div
                    id={`nav-${item.label.toLowerCase()}`}
                    hidden={open ? undefined : true}
                    className="panel-in absolute top-full left-0 z-50 w-80 pt-3"
                  >
                    <ul className="border border-line bg-paper px-5">
                      {item.children.map((child) => (
                        <li key={child.href} className="border-t border-line first:border-t-0">
                          <Link href={child.href} className="block py-4" onClick={() => setPanel(null)}>
                            <span className="block font-serif text-subhead font-medium text-ink">
                              {child.label}
                            </span>
                            <span className="mt-1 block font-sans text-small text-ink-soft">{child.note}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {site.phoneDisplay && site.phoneHref ? (
            <a
              href={site.phoneHref}
              className="font-sans text-small text-ink-soft transition-colors hover:text-ink"
            >
              {site.phoneDisplay}
            </a>
          ) : null}
          <Button href={site.applyHref} size="md">
            {site.applyLabel}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? "site-menu" : undefined}
          onClick={() => setMenuOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <IconMenu />
        </button>
      </Container>

      {menuOpen ? (
        <dialog
          ref={dialogRef}
          id="site-menu"
          aria-label="Menu"
          data-tone="ink"
          className="site-menu menu-in flex flex-col"
          onKeyDown={trapMenuTab}
        >
          <Container width="wide" className="flex h-[4.5rem] items-center justify-between">
            <Link
              href="/"
              onClick={() => closeMenu("navigate")}
              className="font-serif text-[1.7rem] leading-none font-medium tracking-[-0.03em]"
            >
              {site.name}
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              onClick={() => closeMenu("dismiss")}
            >
              <span className="sr-only">Close menu</span>
              <IconClose />
            </button>
          </Container>
          <nav className="flex-1 overflow-y-auto px-5 pt-6 sm:px-6" aria-label="Mobile">
            {mainNav.map((item, index) => (
              <div key={item.label} className="border-t border-[var(--rule)] py-5">
                <div className="flex items-baseline justify-between gap-6">
                  <Link
                    href={item.href}
                    aria-current={isNavActive(pathname, item) ? "page" : undefined}
                    onClick={() => closeMenu("navigate")}
                    className="block min-h-12 font-serif text-headline font-medium"
                  >
                    {item.label}
                  </Link>
                  <span className="font-sans text-small text-[var(--muted)] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {item.children ? (
                  <ul className="mt-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isNavActive(pathname, child) ? "page" : undefined}
                          onClick={() => closeMenu("navigate")}
                          className="flex min-h-11 items-center font-sans text-body text-[var(--muted)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="border-t border-[var(--rule)] px-5 py-4 sm:px-6">
            <Button href={site.applyHref} size="lg" onClick={() => closeMenu("navigate")}>
              {site.applyLabel}
            </Button>
          </div>
        </dialog>
      ) : null}
    </header>
  );
}
