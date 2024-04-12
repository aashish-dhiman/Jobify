import { JobFilterType } from "@/lib/validation";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterType;
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  filterValues: { query, type, location, remote },
}: Props) => {
  const generatePageLink = (page: number) => {
    const searchParams = new URLSearchParams({
      ...(query && { query }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  };
  return (
    totalPages > 1 && (
      <Pagination className="pt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={generatePageLink(currentPage - 1)}
              isActive
              className={`${currentPage === 1 ? "pointer-events-none" : ""}`}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={generatePageLink(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            },
          )}
          <PaginationItem>
            <PaginationNext
              href={generatePageLink(currentPage + 1)}
              className={`${
                currentPage === totalPages ? "pointer-events-none" : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
};

export default PaginationComponent;
