"use client";
import { useEffect } from "react";

export default function ClientHydrationFix() {
  useEffect(() => {
    // Remueve el atributo conflictivo si existe.
    document.documentElement.removeAttribute("data-lt-installed");
  }, []);
  return null;
}