import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found");

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-8xl font-bold text-primary-200">404</span>
      <h1 className="mt-4 font-serif text-3xl font-bold text-primary-900">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-primary-700/70">
        The page you are looking for might have been moved, renamed, or does not
        exist.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-primary-900 transition-all duration-300 hover:bg-accent-600 hover:text-white"
        >
          <Home className="h-4 w-4" />
          Go Home
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-lg border border-primary-200 px-6 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </div>
    </main>
  );
}
