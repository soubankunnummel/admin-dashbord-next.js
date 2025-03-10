"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Check, X } from "lucide-react";
import { VscSettings } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Paginations from "../pagination";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RatingStars } from "../rating-stars";

const data: Payment[] = [
  {
    name: "Yeray Rosalos",
    comment: "Very good work",
    rating: 3,
    Action: true,
    date_time: "July 3, 2023 12:29 pm",
  },
  {
    name: "Talah Cotton",
    comment: "Very good work",
    rating: 5,
    Action: null,
    date_time: "July 3, 2023 12:29 pm",
  },
];

export type Payment = {
  name: string;
  comment: string;
  rating: number;
  Action: boolean | null;
  date_time: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "Name",

    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="lowercase text-base font-semibold">
          {row.getValue("name")}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("comment")}</div>
    ),
  },

  {
    accessorKey: "rating",
    header: "Ratings",
    cell: ({ row }) => <RatingStars rating={row.getValue("rating")} />,
  },
  {
    accessorKey: "date_time",
    header: "Date & Time",
    cell: ({ row }) => {
      return <p>{row.getValue("date_time")}</p>;
    },
  },

  {
    accessorKey: "Action",
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const actionDone = row.getValue("action_done") as boolean;
      const actions = row.getValue("Action") as boolean;
      console.log("action", !actions);
      console.log("actionDone", actionDone);

      return (
        <div className="flex gap-3">
          {actions === null ? (
            <>
              <button className="bg-[#FFCC40] text-white p-1 rounded-xl">
                <Check />
              </button>
              <button className="p-1 text-white bg-[#FF0838] rounded-xl">
                <X />
              </button>
            </>
          ) : actions ? (
            <button className="bg-[#0FD43E] p-2 rounded-xl text-white text-lg">
              Approved
            </button>
          ) : (
            <button className="bg-[#FF0838] p-2 px-3 rounded-xl text-white text-lg">
              Declined
            </button>
          )}
        </div>
      );
    },
  },
];

export function RatingAndReviewTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [searchInput, setSearchInput] = React.useState("");
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const handleSearch = () => {
    const [date_time] = searchInput.split(" ");
    table.getColumn("date_time")?.setFilterValue(date_time || "");
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <div className="flex items-center  justify-between py-4">
        <div className=" w-full flex items-center">
          {/* <h1 className="text-xl  font-semibold ">Activity History</h1> */}
          <p className="text-[#7F7F7F] text-base  "> All ( 877 )</p>
          <p className="text-[#199FB1] text-base mx-2 ">
            {" "}
            Approved ( 500 )
          </p>{" "}
          <span className="text-[#7F7F7F] "> |</span>{" "}
          <p className="text-[#199FB1] text-base mx-2 "> Pending ( 377 )</p>
        </div>
        <div className="flex w-full items-center justify-end gap-10">
          <div className="relative md:max-w-[463px] w-full lg:block hidden ">
            <Input
              placeholder="Search Review by Date"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              className="max-w-sm   bg-[#E3E3E3] "
            />
            <div
              className="bg-[#199FB1]  text-white px-8 cursor-pointer font-semibold p-[4px] text-lg rounded-xl absolute right-0 top-0  "
              onClick={handleSearch}
            >
              {" "}
              Search
            </div>{" "}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-10 w-10 p-0">
                <span className="sr-only">Open menu</span>
                {/* <MoreHorizontal /> */}
                <VscSettings className="text-[#199FB1] text-xl  " size={30} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="py-5 px-2 text-center  bg-[#D9D9D9]  "
            >
              <DropdownMenuItem className="bg-[#FFCC40] py-3   text-black rounded-xl  ">
                Failed
              </DropdownMenuItem>
              <DropdownMenuItem className="text-black bg-[#0FD43E] mt-1 py-3   rounded-xl   ">
                Log in
              </DropdownMenuItem>
              <DropdownMenuItem className=" bg-[#FF0838] mt-1 py-3     rounded-xl   ">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md  ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  className={cn(
                    "hover border-b  ",
                    index % 2 == 0 ? "bg-[#F8F8F8] " : "bg-white"
                  )}
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Paginations table={table} />
    </div>
  );
}
