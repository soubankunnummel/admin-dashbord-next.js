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
import { Check, MoreHorizontal, X } from "lucide-react";
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
    sold: 2,
    bought: 1,
    blocked: false,
    rating: 3,
    Action: true,
    date_time: "July 3, 2023 12:29 pm",
  },
  {
    name: "Talah Cotton",
    sold: 2,
    bought: 1,
    blocked: true,
    rating: 5,
    Action: null,
    date_time: "July 3, 2023 12:29 pm",
  },
];

export type Payment = {
  name: string;
  sold: number;
  bought: number;
  blocked: boolean;
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
    header: "User Deal",
    cell: ({ row }) => {
      const { sold, bought } = row.original;
      return (
        <div className="text-base ">
          <p className=" text-[#FF0838]"> {sold} Sold </p>
          <p className=" text-[#0FD43E] ">{bought} Bought </p>
        </div>
      );
    },
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
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="text-[#199FB1] text-xl" size={30} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="py-3 px-2  bg-[#D9D9D9]  "
          >
            <DropdownMenuItem className="bg-[#199FB1] py-3 text-white rounded-xl  ">
              View in Detaile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#FF0838] mt-1 py-3 hover:!bg-[#FF0838] rounded-xl hover:!text-white ">
              Send Notification
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function UserManagementTable({ isSearch = true, isTitle = false }) {
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
    const [user, date_time, Action] = searchInput.split(" ");
    table.getColumn("user")?.setFilterValue(user || "");
    table.getColumn("date_time")?.setFilterValue(date_time || "");
    table.getColumn("Action")?.setFilterValue(Action || "");
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      {isTitle && <h1> User Management </h1>}
      <div className="flex items-center  justify-end py-4">
        {isSearch && (
          <div className="flex w-full items-center justify-end gap-10">
            <div className="relative md:max-w-[463px] w-full lg:block hidden ">
              <Input
                placeholder="Search user by their name"
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
        )}
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
