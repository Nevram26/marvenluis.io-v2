import { mountKit } from "./lib/kit";
import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Nav from "./components/Nav";
import Closing from "./components/Closing";
import Home from "./pages/Home";
import "./styles/page.css";

// Route changes: jump to the hash target if there is one, otherwise start at the top.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <section className="pb-20 pt-32">
      <div className="wrap">
        <h1 className="text-3xl font-medium tracking-tight">Page not found</h1>
        <p className="mt-4">
          <Link to="/" className="link link-row">
            Go to the home page
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    mountKit().catch(console.error);
  }, []);
  return (
    <>
      <ScrollManager />
      <Nav />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/esca" element={<Navigate to="/#work" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      <Closing />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
