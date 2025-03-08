import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Paginations() {
  return (
    <Pagination className=" mt-5  justify-end relative">
              <p className="absolute left-0 pt-1"> Delete</p>
        
      <PaginationContent className="gap-x-3">
        <p> Displaying page</p>
        <PaginationItem>
          <PaginationPrevious className="border bg-white" href="#" />
        </PaginationItem>

        <div className="border rounded-xl flex">
          <PaginationItem className=" ">
            <PaginationLink
              className="border rounded-r text-[#FFCC40] rotate-90 "
              href="#"
            >
              {" "}
              ▼
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className=" ">
            <PaginationLink className="border rounded-none" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className=" ">
            <PaginationLink className="border rounded-none" href="#">
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className=" ">
            <PaginationLink className="border rounded-none" href="#">
              3
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className=" ">
            <PaginationLink
              className="border rounded-l rotate-90 text-sm text-[#FFCC40] "
              href="#"
            >
              {" "}
              ▲
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext className="border bg-white" href="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
