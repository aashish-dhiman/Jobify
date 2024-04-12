import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobList from "@/components/JobList";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
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
      <section className="flex flex-col md:flex-row gap-4">
        <JobFilterSidebar />
        <div className="space-y-2 grow">
          {jobs?.map((job) => <JobList job={job} key={job.id} />)}
        </div>
      </section>
    </main>
  );
}
