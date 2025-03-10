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
import {  MoreHorizontal } from "lucide-react";
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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    user: "Yeray Rosalos",
    status: "success",
    Action: "Log in",
    date_time: "July 3, 2023 12:29 pm",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    user: "Yeray Rosalos",
    status: "success",
    Action: "Log in",
    date_time: "July 3, 2023 12:29 pm",
  },
   
];

export type Payment = {
  id: string;
  amount: number;
  user: string;
  status: "pending" | "processing" | "success" | "failed";
  Action: string;
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
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="lowercase text-base font-semibold">
          {row.getValue("user")}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("Action")}</div>
    ),
  },
  {
    accessorKey: "date_time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date & Time
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
     

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
            className="py-5 px-2  bg-[#D9D9D9]  "
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

export function HistoryTable() {
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
      <div className="flex items-center  justify-between py-4">
        <div className=" w-full  md:block hidden ">
          <h1 className="text-xl  font-semibold ">Activity History</h1>
          <p className="text-[#7F7F7F] text-lg  ">
            {" "}
            View historical data of actions taken within the app.
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-10">
          <div className="relative md:max-w-[463px] w-full lg:block hidden ">
            <Input
              placeholder="Search by user, date, or activity type"
              //   value={
              //     (table.getColumn("user")?.getFilterValue() as string) ?? ""
              //   }
              value={searchInput}
              //   onChange={(event) =>
              //     table.getColumn("user")?.setFilterValue(event.target.value)
              //   }
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
                    "hover border-b   bg-red-70s0 ",
                    index % 2 == -0 ? "bg-[#F8F8F8] " : "bg-white"
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
