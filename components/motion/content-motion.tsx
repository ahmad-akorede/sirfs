"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "h1,h2,h3,p,li,figure,blockquote,form,address,dt,dd,details,.motion-control";

function collect(root: ParentNode) {
  return [...root.querySelectorAll<HTMLElement>(SELECTOR)].filter((el) => {
    if (el.closest(".sr-only")) return false;
    if (el.closest("details") && el.tagName !== "DETAILS") return false;
    if (el.parentElement?.closest(SELECTOR)) return false;
    return true;
  });
}

function reveal(el: HTMLElement, observer?: IntersectionObserver) {
  el.classList.remove("rise-pending");
  el.classList.add("rise");
  el.dataset.risen = "1";
  observer?.unobserve(el);
}

export function ContentMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const roots = [document.getElementById("content"), document.querySelector("footer")].filter(
      (node): node is HTMLElement => node instanceof HTMLElement,
    );
    const pending: HTMLElement[] = [];
    let seen = 0;
    const view = window.innerHeight * 0.92;

    for (const root of roots) {
      for (const el of collect(root)) {
        if (el.dataset.risen === "1") continue;
        if (el.classList.contains("rise-pending")) {
          pending.push(el);
          continue;
        }
        if (el.getBoundingClientRect().top < view) {
          el.style.animationDelay = `${Math.min(seen, 12) * 50}ms`;
          reveal(el);
          seen += 1;
        } else {
          const siblings = el.parentElement
            ? [...el.parentElement.children].filter((child) => child instanceof HTMLElement && child.matches(SELECTOR))
            : [];
          const index = Math.max(0, siblings.indexOf(el));
          el.style.animationDelay = `${Math.min(index, 8) * 55}ms`;
          el.classList.add("rise-pending");
          pending.push(el);
        }
      }
    }

    if (pending.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      for (const el of pending) reveal(el);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement, observer);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    for (const el of pending) {
      observer.observe(el);
      el.addEventListener("focusin", () => reveal(el, observer), { once: true });
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
