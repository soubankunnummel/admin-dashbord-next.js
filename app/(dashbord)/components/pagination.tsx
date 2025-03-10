import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

 

export default function Paginations({ table }:any) {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;

  return (
    <Pagination className="mt-5 justify-center md:justify-end relative">
      <p className="absolute left-0 pt-1   lg:block hidden">Delete</p>

      <PaginationContent className="gap-x-3">
        <p className="text-[#7F7F7F] lg:block hidden ">
          Displaying page {currentPage + 1} of {pageCount}
        </p>
        <PaginationItem>
          <PaginationPrevious
            className="border bg-white"
            href="#"
            onClick={() => table.previousPage()}
          />
        </PaginationItem>
        <PaginationItem className=" ">
            <PaginationLink
              className="border rounded-r text-[#FFCC40] rotate-90 "
              onClick={() => table.previousPage()}
            >
              {" "}
              ▼
            </PaginationLink>
          </PaginationItem>

        <div className="border rounded-xl flex">
          {Array.from({ length: pageCount }, (_, index) => (
            <PaginationItem key={index} className=" ">
              <PaginationLink
                className={`border rounded-sm ${
                  currentPage === index ? "bg-gray-200" : ""
                }`}
                href="#"
                onClick={() => table.setPageIndex(index)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>
        <PaginationItem className=" ">
            <PaginationLink
              className="border rounded-l rotate-90 text-sm text-[#FFCC40] "
              onClick={() => table.nextPage()}
            >
              {" "}
              ▲
            </PaginationLink>
          </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className="border bg-white"
            href="#"
            onClick={() => table.nextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
