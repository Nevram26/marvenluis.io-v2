import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container-wide section-space min-h-[60vh]"
    >
      <p className="eyebrow">404 / Page not found</p>
      <h1 className="section-title mt-5">This page isn&apos;t here.</h1>
      <p className="body-copy mt-4">
        The link may have changed. You can find my selected work on the
        homepage.
      </p>
      <Button asChild className="mt-7">
        <Link href="/">Back to the portfolio</Link>
      </Button>
    </main>
  );
}
