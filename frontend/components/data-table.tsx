
"use client"

import * as React from "react"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDotsVertical,
  IconLayoutColumns,
  IconLink,
  IconPlus,
  IconLockOpen,
} from "@tabler/icons-react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { z } from "zod"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const documentSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  title: z.string(),
  numeric_score: z.number().optional().nullable(),
  grade_band: z.string().optional().nullable(),
  instructor_name: z.string().optional().nullable(),
  document_type: z.string().optional().nullable(),
  access_type: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  suitable_school: z.string().optional().nullable(),
  short_description: z.string().optional().nullable(),
  resource_type: z.string(),
  resource_url: z.string(),
  embed_allowed: z.boolean().optional().nullable(),
  mime_type: z.string().optional().nullable(),
  storage_provider: z.string().optional().nullable(),
  file_size: z.number().optional().nullable(),
  created_at: z.string().optional().nullable(),
  updated_at: z.string().optional().nullable(),
  document_subjects: z.array(z.string()).optional().nullable(),
  document_fields: z.array(z.string()).optional().nullable(),
})

type DocumentRow = z.infer<typeof documentSchema>

const formatCurrency = (value?: number | null) => {
  if (value === null || value === undefined) return "-"
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(value))
}

const formatFileSize = (value?: number | null) => {
  if (value === null || value === undefined) return "-"
  if (value === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB"]
  const idx = Math.min(
    Math.floor(Math.log(value) / Math.log(1024)),
    units.length - 1
  )
  const size = value / Math.pow(1024, idx)
  return `${size.toFixed(size >= 10 ? 0 : 1)} ${units[idx]}`
}

const formatDate = (value?: string | null) => {
  if (!value) return "-"
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

const formatScore = (value?: number | null) => {
  if (value === null || value === undefined) return "-"
  return value.toFixed(2)
}

const safeText = (value?: string | null) => value?.trim() || "-"

const formatList = (value?: string[] | null) =>
  value && value.length ? value.join(", ") : "-"

export function DataTable({
  data: initialData,
}: {
  data: DocumentRow[]
}) {
  const data = React.useMemo(() => initialData, [initialData])
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = React.useMemo<ColumnDef<DocumentRow>[]>(() => {
    return [
      {
        id: "select",
        header: ({ table }) => (
          <div className="flex items-center justify-center">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
              aria-label="Select all"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          </div>
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => <TableCellViewer item={row.original} />,
        enableHiding: false,
      },
      {
        accessorKey: "document_type",
        header: "Document Type",
        cell: ({ row }) => (
          <Badge variant="outline" className="text-muted-foreground px-1.5">
            {safeText(row.original.document_type)}
          </Badge>
        ),
      },
      {
        accessorKey: "document_subjects",
        header: "Subject",
        cell: ({ row }) => (
          <span className="text-muted-foreground">
            {formatList(row.original.document_subjects || undefined)}
          </span>
        ),
      },
      {
        accessorKey: "document_fields",
        header: "Fields",
        cell: ({ row }) => (
          <span className="text-muted-foreground">
            {formatList(row.original.document_fields || undefined)}
          </span>
        ),
      },
      {
        accessorKey: "grade_band",
        header: "Grade Band",
        cell: ({ row }) => (
          <span className="text-muted-foreground">{safeText(row.original.grade_band)}</span>
        ),
      },
      {
        accessorKey: "instructor_name",
        header: "Instructor",
        cell: ({ row }) => (
          <span className="text-muted-foreground">
            {safeText(row.original.instructor_name)}
          </span>
        ),
      },
      {
        accessorKey: "numeric_score",
        header: "Score",
        cell: ({ row }) => (
          <Badge variant="secondary" className="w-fit">
            {formatScore(row.original.numeric_score)}
          </Badge>
        ),
      },
      {
        accessorKey: "access_type",
        header: "Access",
        cell: ({ row }) => {
          const isFree = (row.original.access_type || "").toLowerCase() === "free"
          if (!isFree) {
            return (
              <span className="text-foreground font-medium">
                {formatCurrency(row.original.price)}
              </span>
            )
          }
          return (
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="px-2 bg-primary/10 text-primary border-primary/30"
              >
                <IconLockOpen className="size-4" />
                {row.original.access_type || "Free"}
              </Badge>
            </div>
          )
        },
      },
      {
        accessorKey: "suitable_school",
        header: "Suitable School",
        cell: ({ row }) => (
          <span className="text-muted-foreground">{safeText(row.original.suitable_school)}</span>
        ),
      },
      {
        accessorKey: "resource_url",
        header: () => <div className="w-12 text-center">Link</div>,
        cell: ({ row }) => (
          <a
            href={row.original.resource_url}
            className="text-primary inline-flex items-center justify-center w-10"
            target="_blank"
            rel="noreferrer"
            aria-label={`Open resource for ${row.original.title}`}
          >
            <IconLink className="size-4" />
          </a>
        ),
      },
      {
        id: "actions",
        cell: () => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                size="icon"
              >
                <IconDotsVertical />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Make a copy</DropdownMenuItem>
              <DropdownMenuItem>Favorite</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ]
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Tabs
      defaultValue="my-docs"
      className="w-full flex-col justify-start gap-6"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <Select defaultValue="my-docs">
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-docs">Tai lieu cua toi</SelectItem>
            <SelectItem value="saved-docs">Tai lieu da luu</SelectItem>
          </SelectContent>
        </Select>
        <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="my-docs">Tai lieu cua toi</TabsTrigger>
          <TabsTrigger value="saved-docs">Tai lieu da luu</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <IconLayoutColumns />
                <span className="hidden lg:inline">Chinh sua bang</span>
                <span className="lg:hidden">Cot</span>
                <IconChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">Them tai lieu</span>
          </Button>
        </div>
      </div>
      <TabsContent
        value="my-docs"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="**:data-[slot=table-cell]:first:w-8">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
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
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
            {table.getSelectedRowModel().rows.length} of{" "}
            {table.getRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <IconChevronsLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <IconChevronLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <IconChevronRight />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <IconChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="saved-docs" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed" />
      </TabsContent>
    </Tabs>
  )
}

function TableCellViewer({ item }: { item: DocumentRow }) {
  const isMobile = useIsMobile()

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-foreground w-fit px-0 text-left">
          {item.title}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>{item.title}</DrawerTitle>
          <DrawerDescription className="line-clamp-3">
            {safeText(item.short_description)}
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 overflow-y-auto px-4 pb-4 text-sm md:grid-cols-2">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Document type</Label>
              <div className="font-medium">{safeText(item.document_type)}</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Grade band</Label>
              <div>{safeText(item.grade_band)}</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Instructor</Label>
              <div>{safeText(item.instructor_name)}</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">User ID</Label>
              <div>{item.user_id}</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Suitable school</Label>
              <div>{safeText(item.suitable_school)}</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Score</Label>
              <div>{formatScore(item.numeric_score)}</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Access / Price</Label>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="px-2">
                  {safeText(item.access_type)}
                </Badge>
                <span className="text-muted-foreground">{formatCurrency(item.price)}</span>
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Embed allowed</Label>
              <div className="flex items-center gap-2">
                {item.embed_allowed ? (
                  <Badge variant="secondary">Yes</Badge>
                ) : (
                  <Badge variant="outline">No</Badge>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Created / Updated</Label>
              <div className="text-muted-foreground">
                {formatDate(item.created_at)} - {formatDate(item.updated_at)}
              </div>
            </div>
          </div>
          <div className="space-y-3 md:col-span-2">
            <div className="grid gap-3 rounded-md border p-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Resource type</Label>
                <div>{safeText(item.resource_type)}</div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">MIME type</Label>
                <div>{safeText(item.mime_type)}</div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Storage provider</Label>
                <div>{safeText(item.storage_provider)}</div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">File size</Label>
                <div>{formatFileSize(item.file_size)}</div>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <Label className="text-xs text-muted-foreground">Resource URL</Label>
                <a
                  href={item.resource_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary inline-flex items-center gap-1 underline decoration-dotted decoration-primary/60"
                >
                  <IconLink className="size-4" />
                  <span className="truncate">{item.resource_url}</span>
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Short description</Label>
              <div className="text-muted-foreground">
                {safeText(item.short_description)}
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="gap-2">
          <Button asChild>
            <a href={item.resource_url} target="_blank" rel="noreferrer">
              Open resource
            </a>
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Done</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
