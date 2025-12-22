"use client";

import * as React from "react";
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
} from "@tabler/icons-react";
import {
  ColumnDef,
  type CellContext,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const relationItemSchema = z.object({ id: z.number(), name: z.string() });

// DB-standardized (snake_case) document shape based on `backend/prisma/schema.prisma` model `documents`.
export const documentSchema = z.object({
  id: z.number(),
  user_id: z.number().optional().nullable(),
  title: z.string(),
  numeric_score: z.union([z.number(), z.string()]).optional().nullable(),
  grade_band: z.string().optional().nullable(),
  instructor_name: z.string().optional().nullable(),
  document_type: z.string().optional().nullable(),
  access_type: z.string().optional().nullable(),
  price: z.union([z.number(), z.string()]).optional().nullable(),
  suitable_school: z.string().optional().nullable(),
  short_description: z.string().optional().nullable(),
  resource_type: z.string(),
  resource_url: z.string(),
  embed_allowed: z.boolean().optional().nullable(),
  mime_type: z.string().optional().nullable(),
  storage_provider: z.string().optional().nullable(),
  file_size: z.number().optional().nullable(),
  created_at: z.union([z.string(), z.date()]).optional().nullable(),
  updated_at: z.union([z.string(), z.date()]).optional().nullable(),
  document_fields: z.array(relationItemSchema).optional().nullable(),
  document_subjects: z.array(relationItemSchema).optional().nullable(),
});

// Backwards-compatible shape (camelCase) used by current backend mapping in `backend/src/documents/documents.service.ts`.
const documentApiSchema = z.object({
  id: z.number(),
  title: z.string(),
  shortDescription: z.string().optional().nullable(),
  gradeBand: z.string().optional().nullable(),
  numericScore: z.union([z.number(), z.string()]).optional().nullable(),
  resourceType: z.string(),
  resourceUrl: z.string(),
  mimeType: z.string().optional().nullable(),
  createdAt: z.union([z.string(), z.date()]).optional().nullable(),
  updatedAt: z.union([z.string(), z.date()]).optional().nullable(),
  fields: z.array(relationItemSchema).optional().nullable(),
  subjects: z.array(relationItemSchema).optional().nullable(),
  accessType: z.string().optional().nullable(),
  price: z.union([z.number(), z.string()]).optional().nullable(),
});

type DocumentDbRow = z.infer<typeof documentSchema>;
type DocumentApiRow = z.infer<typeof documentApiSchema>;
type DocumentRowInput = DocumentDbRow | DocumentApiRow;

function normalizeDocumentRow(row: unknown): DocumentDbRow | null {
  const dbParsed = documentSchema.safeParse(row);
  if (dbParsed.success) return dbParsed.data;

  const apiParsed = documentApiSchema.safeParse(row);
  if (!apiParsed.success) return null;

  const item = apiParsed.data;
  return {
    id: item.id,
    user_id: null,
    title: item.title,
    numeric_score: item.numericScore ?? null,
    grade_band: item.gradeBand ?? null,
    instructor_name: null,
    document_type: null,
    access_type: item.accessType ?? null,
    price: item.price ?? null,
    suitable_school: null,
    short_description: item.shortDescription ?? null,
    resource_type: item.resourceType,
    resource_url: item.resourceUrl,
    embed_allowed: null,
    mime_type: item.mimeType ?? null,
    storage_provider: null,
    file_size: null,
    created_at: item.createdAt ?? null,
    updated_at: item.updatedAt ?? null,
    document_fields: item.fields ?? null,
    document_subjects: item.subjects ?? null,
  };
}

const parseNumber = (value?: number | string | null) => {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const normalized = value.trim();
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

const safeText = (value?: string | null) => value?.trim() || "-";

const formatRelations = (value?: { name: string }[] | null) =>
  value && value.length ? value.map((item) => item.name).join(", ") : "-";

const formatDate = (value?: string | Date | null) => {
  if (!value) return "-";
  const parsed = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsed.getTime()))
    return typeof value === "string" ? value : "-";
  return parsed.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatScore = (value?: number | string | null) => {
  if (value === null || value === undefined) return "-";
  const parsed = parseNumber(value);
  if (parsed === null) return String(value);
  return parsed.toFixed(2);
};

const formatCurrency = (value?: number | string | null) => {
  if (value === null || value === undefined) return "-";
  const parsed = parseNumber(value);
  if (parsed === null) return String(value);
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(parsed);
};

const formatAccess = (
  accessType?: string | null,
  price?: number | string | null
) => {
  const normalized = (accessType || "").trim().toLowerCase();
  const isFree = normalized === "free";
  const badgeLabel = accessType?.trim() || "KhA'ng rAæ";
  const priceLabel = isFree
    ? "Mi ¯.n phA-"
    : price === null || price === undefined
    ? "KhA'ng rAæ"
    : formatCurrency(price);
  return { isFree, badgeLabel, priceLabel };
};

const DEFAULT_HIDDEN_COLUMNS: VisibilityState = {
  id: false,
  user_id: false,
  short_description: false,
  instructor_name: false,
  price: false,
  resource_url: false,
  document_type: false,
  embed_allowed: false,
  mime_type: false,
  storage_provider: false,
  file_size: false,
  created_at: false,
  updated_at: false,
};

export function DataTable({
  data: initialData,
  savedData: initialSavedData,
  hideLink = false,
}: {
  data: DocumentRowInput[];
  savedData?: DocumentRowInput[];
  hideLink?: boolean;
}) {
  const myDocs = React.useMemo(() => {
    return (initialData ?? [])
      .map((row) => normalizeDocumentRow(row))
      .filter((row): row is DocumentDbRow => row !== null);
  }, [initialData]);

  const savedDocs = React.useMemo(() => {
    return (initialSavedData ?? [])
      .map((row) => normalizeDocumentRow(row))
      .filter((row): row is DocumentDbRow => row !== null);
  }, [initialSavedData]);

  const [view, setView] = React.useState<"my-docs" | "saved-docs">("my-docs");
  const data = React.useMemo(
    () => (view === "my-docs" ? myDocs : savedDocs),
    [myDocs, savedDocs, view]
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(DEFAULT_HIDDEN_COLUMNS);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  React.useEffect(() => {
    setRowSelection({});
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [view]);

  const columns = React.useMemo<ColumnDef<DocumentDbRow>[]>(() => {
    // Sắp xếp theo mức độ quan trọng từ trái sang phải.
    const dbKeys: Array<keyof DocumentDbRow> = [
      "title",
      "access_type",
      "price",
      "resource_type",
      "resource_url",
      "numeric_score",
      "grade_band",
      "document_fields",
      "document_subjects",
      "suitable_school",
      "document_type",
      "instructor_name",
      "user_id",
      "id",
      "mime_type",
      "storage_provider",
      "file_size",
      "embed_allowed",
      "created_at",
      "updated_at",
      "short_description",
    ];

    const renderDbCell = (key: keyof DocumentDbRow, row: DocumentDbRow) => {
      switch (key) {
        case "title":
          return <TableCellViewer item={row} hideLink={hideLink} />;
        case "id":
        case "user_id":
        case "file_size":
          return (
            <span className="font-mono text-xs text-muted-foreground">
              {row[key] ?? "-"}
            </span>
          );
        case "numeric_score":
          return (
            <Badge variant="secondary" className="w-fit">
              {formatScore(row.numeric_score)}
            </Badge>
          );
        case "resource_type":
          return (
            <Badge variant="outline" className="text-muted-foreground px-1.5">
              {safeText(row.resource_type)}
            </Badge>
          );
        case "resource_url": {
          const url = row.resource_url;
          if (!url) return <span className="text-muted-foreground">-</span>;
          if (hideLink) {
            return (
              <span className="text-muted-foreground font-mono text-xs truncate max-w-[360px] block">
                {url}
              </span>
            );
          }
          return (
            <a
              href={url}
              className="text-primary inline-flex items-center gap-1 font-mono text-xs underline decoration-dotted decoration-primary/60 max-w-[360px] truncate"
              target="_blank"
              rel="noreferrer"
              aria-label={`Open resource for ${row.title}`}
            >
              <IconLink className="size-4 shrink-0" />
              <span className="truncate">{url}</span>
            </a>
          );
        }
        case "access_type": {
          const access = formatAccess(row.access_type, row.price);
          return (
            <Badge
              variant="outline"
              className={`px-2 ${
                access.isFree
                  ? "bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] border-[color:var(--secondary)]"
                  : "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] border-[color:var(--primary)]"
              }`}
            >
              {access.badgeLabel}
            </Badge>
          );
        }
        case "price":
          return (
            <span className="text-muted-foreground">
              {formatCurrency(row.price)}
            </span>
          );
        case "created_at":
        case "updated_at":
          return (
            <span className="text-muted-foreground">
              {formatDate(row[key])}
            </span>
          );
        case "embed_allowed":
          return (
            <span className="text-muted-foreground">
              {row.embed_allowed === null || row.embed_allowed === undefined
                ? "-"
                : row.embed_allowed
                ? "true"
                : "false"}
            </span>
          );
        case "document_fields":
        case "document_subjects":
          return (
            <span className="text-muted-foreground">
              {formatRelations(row[key] || undefined)}
            </span>
          );
        case "short_description":
          return (
            <span className="text-muted-foreground line-clamp-2 max-w-[360px]">
              {safeText(row.short_description)}
            </span>
          );
        default:
          return (
            <span className="text-muted-foreground">
              {safeText(row[key] as any)}
            </span>
          );
      }
    };

    const baseColumns: ColumnDef<DocumentDbRow>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <div className="flex items-center justify-center">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
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
      ...dbKeys.map(
        (key): ColumnDef<DocumentDbRow> => ({
          accessorKey: key as string,
          header: key as string,
          cell: (ctx: CellContext<DocumentDbRow, unknown>) =>
            renderDbCell(key, ctx.row.original),
          enableHiding: key !== "id" && key !== "title",
        })
      ),
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
    ];

    return baseColumns;
  }, [hideLink]);

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
  });

  const emptyText =
    view === "my-docs"
      ? "Ch’øa cA3 tAÿi li ¯Øu."
      : "Ch’øa cA3 tAÿi li ¯Øu Ž`Aœ l’øu.";

  const TablePanel = ({ className }: { className?: string }) => (
    <div className={className}>
      <div className="overflow-auto rounded-lg border bg-transparent">
        <Table className="bg-[var(--card)] text-[var(--foreground)]">
          <TableHeader className="sticky top-0 z-10 bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] shadow-[inset_0_-1px_0_var(--border)]">
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
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-[var(--card)] **:data-[slot=table-cell]:first:w-8">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="bg-transparent hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--hover-foreground)] data-[state=selected]:bg-[var(--muted)]/40 border-[var(--border)]"
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
              <TableRow className="bg-[var(--card)]">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {emptyText}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between px-4">
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
                table.setPageSize(Number(value));
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
            {Math.max(table.getPageCount(), 1)}
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
              onClick={() =>
                table.setPageIndex(Math.max(table.getPageCount() - 1, 0))
              }
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <IconChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Tabs
      value={view}
      onValueChange={(next) => setView(next as "my-docs" | "saved-docs")}
      className="w-full flex-col justify-start gap-4"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <Select
          value={view}
          onValueChange={(next) => setView(next as typeof view)}
        >
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
                  );
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
        <TablePanel />
      </TabsContent>
      <TabsContent
        value="saved-docs"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <TablePanel />
      </TabsContent>
    </Tabs>
  );
}

function TableCellViewer({
  item,
  hideLink,
}: {
  item: DocumentDbRow;
  hideLink: boolean;
}) {
  const isMobile = useIsMobile();
  const updatedLabel = formatDate(item.updated_at || item.created_at);

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-foreground w-fit px-0 text-left">
          {item.title}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:w-[95vw] data-[vaul-drawer-direction=right]:sm:max-w-4xl data-[vaul-drawer-direction=right]:lg:max-w-5xl">
        <DrawerHeader className="gap-1">
          <DrawerTitle>{item.title}</DrawerTitle>
          <DrawerDescription className="line-clamp-3">
            {safeText(item.short_description)}
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 overflow-y-auto px-4 pb-4 text-sm max-h-[75vh]">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2 rounded-lg border p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Identity
              </p>
              <DetailRow label="id" value={item.id} mono />
              <DetailRow label="user_id" value={item.user_id} mono />
              <DetailRow label="grade_band" value={safeText(item.grade_band)} />
              <DetailRow
                label="suitable_school"
                value={safeText(item.suitable_school)}
              />
              <DetailRow
                label="instructor_name"
                value={safeText(item.instructor_name)}
              />
              <DetailRow
                label="document_type"
                value={safeText(item.document_type)}
              />
            </div>

            <div className="space-y-2 rounded-lg border p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Access & pricing
              </p>
              {(() => {
                const access = formatAccess(item.access_type, item.price);
                return (
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">
                      access_type
                    </Label>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`px-2 ${
                          access.isFree
                            ? "bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] border-[color:var(--secondary)]"
                            : "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] border-[color:var(--primary)]"
                        }`}
                      >
                        {access.badgeLabel}
                      </Badge>
                      <span className="text-[color:var(--muted-foreground)] text-sm">
                        {access.priceLabel}
                      </span>
                    </div>
                  </div>
                );
              })()}
              <DetailRow label="price" value={formatCurrency(item.price)} />
              <DetailRow
                label="resource_type"
                value={safeText(item.resource_type)}
              />
              <DetailRow
                label="resource_url"
                value={
                  hideLink ? (
                    <span className="font-mono text-xs text-muted-foreground break-all">
                      {item.resource_url}
                    </span>
                  ) : (
                    <a
                      href={item.resource_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary inline-flex items-center gap-1 underline decoration-dotted decoration-primary/60"
                    >
                      <IconLink className="size-4" />
                      <span className="truncate">{item.resource_url}</span>
                    </a>
                  )
                }
              />
            </div>

            <div className="space-y-2 rounded-lg border p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                File & metadata
              </p>
              <DetailRow label="mime_type" value={safeText(item.mime_type)} />
              <DetailRow
                label="storage_provider"
                value={safeText(item.storage_provider)}
              />
              <DetailRow label="file_size" value={item.file_size ?? "-"} mono />
              <DetailRow
                label="embed_allowed"
                value={
                  item.embed_allowed === null ||
                  item.embed_allowed === undefined
                    ? "-"
                    : item.embed_allowed
                    ? "true"
                    : "false"
                }
              />
              <DetailRow
                label="created_at"
                value={formatDate(item.created_at)}
              />
              <DetailRow label="updated_at" value={updatedLabel} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 rounded-lg border p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Relations
              </p>
              <DetailRow
                label="document_fields"
                value={formatRelations(item.document_fields || undefined)}
              />
              <DetailRow
                label="document_subjects"
                value={formatRelations(item.document_subjects || undefined)}
              />
            </div>
            <div className="space-y-2 rounded-lg border p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Scores
              </p>
              <DetailRow
                label="numeric_score"
                value={formatScore(item.numeric_score)}
              />
            </div>
          </div>

          <div className="space-y-2 rounded-lg border p-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Description
            </p>
            <div className="text-muted-foreground">
              {safeText(item.short_description)}
            </div>
          </div>
        </div>
        <DrawerFooter className="gap-2">
          <Button asChild disabled={hideLink}>
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
  );
}

function DetailRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div
        className={
          mono ? "font-mono text-xs text-foreground" : "text-foreground"
        }
      >
        {value ?? "-"}
      </div>
    </div>
  );
}
