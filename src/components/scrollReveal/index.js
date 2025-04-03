"use client";

import { useEffect } from "react";

export default function ScrollRevealSetup() {
  useEffect(() => {
    import("scrollreveal").then((module) => {
      const ScrollReveal = module.default;
      const sr = ScrollReveal({ reset: false });
      sr.reveal("#about", { duration: 3600 });
      sr.reveal("#tech", { duration: 2000 });
      sr.reveal("#projects", { duration: 3200 });
    });
  }, []);

  return null;
}
