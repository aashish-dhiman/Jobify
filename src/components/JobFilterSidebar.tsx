import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities } from "@/lib/cities-list";

interface Props {}

async function filterJobs(formData: FormData) {
  "use server";

  return;
}

const JobFilterSidebar = (props: Props) => {
  return (
    <aside className="sticky top-24 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="query">Search</Label>
            <Input
              name="query"
              id="query"
              placeholder="Job title, Company, etc."
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Select>
              <SelectTrigger id="location" className="">
                <SelectValue placeholder="All location" />
              </SelectTrigger>
              <SelectContent className="top-2">
                <SelectItem value="All location">All location</SelectItem>
                {cities?.map((city, i) => {
                  return (
                    <SelectItem
                      key={i}
                      value={`${city.name}, ${city.state}, ${city.country}`}
                    >
                      {`${city.name}, ${city.state}, ${city.country}`}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default JobFilterSidebar;
