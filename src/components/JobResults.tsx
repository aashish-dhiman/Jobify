import React from "react";
import JobList from "./JobList";
import prisma from "@/lib/prisma";
import { JobFilterType } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import JobNotFound from "./JobNotFound";

interface Props {
  filterValues: JobFilterType;
}

const JobResults = async ({
  filterValues: { query, type, location, remote },
}: Props) => {
  const searchString = query
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };
  const jobs = await prisma.job.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
  
  return (
    <div className="grow space-y-2">
      {jobs?.map((job) => <JobList job={job} key={job.id} />)}
      {jobs.length === 0 && <JobNotFound />}
    </div>
  );
};

export default JobResults;
