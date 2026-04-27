import { useEffect } from "react";

const BASE = "SGNG & Associates (I) | Best Chartered Accountant Delhi | CPA India | Trusted CA";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} – ${BASE}` : BASE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = BASE;
    };
  }, [title, description]);
}
