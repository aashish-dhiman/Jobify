import Link from "next/link";
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Jobify</h3>
            <p className="text-sm text-muted-foreground">
              Empowering individuals with career opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline hover:text-primary">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/aashish-dhiman/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-200 ease-in-out hover:text-primary"
          >
            Aashish Dhiman
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
