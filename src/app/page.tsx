import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import { JobFilterType } from "@/lib/validation";
import React from "react";

interface Props {
  searchParams: {
    query?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { query, type, location, remote },
}: Props) {
  const filterValues: JobFilterType = {
    query,
    type,
    location,
    remote: remote === "true" ? true : false,
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-2 md:px-0">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Discover Your Next Career Move
        </h1>
        <p className="text-muted-foreground">
          Explore a world of opportunities. <br /> Find the perfect fit for your
          skills and aspirations with our curated selection of job listings.
        </p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
