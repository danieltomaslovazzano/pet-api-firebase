
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Column<T> {
  key: keyof T | string;
  header: string;
  cell?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchField?: keyof T;
  onRowClick?: (item: T) => void;
  rowClassName?: (item: T) => string;
}

function DataTable<T extends { id: string | number }>({
  data,
  columns,
  searchField,
  onRowClick,
  rowClassName,
}: DataTableProps<T>) {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on search query
  const filteredData = searchField && searchQuery
    ? data.filter(item => {
        const fieldValue = item[searchField];
        return fieldValue && 
          String(fieldValue).toLowerCase().includes(searchQuery.toLowerCase());
      })
    : data;

  // Sort data if sortBy is set
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortBy) return 0;
    
    const valueA = a[sortBy as keyof T];
    const valueB = b[sortBy as keyof T];
    
    if (valueA === valueB) return 0;
    
    let result = 0;
    
    if (valueA === null || valueA === undefined) result = -1;
    else if (valueB === null || valueB === undefined) result = 1;
    else if (typeof valueA === 'string' && typeof valueB === 'string') {
      result = valueA.localeCompare(valueB);
    } else {
      result = valueA < valueB ? -1 : 1;
    }
    
    return sortOrder === 'asc' ? result : -result;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: string) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Search */}
      {searchField && (
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 bg-background/50 border-border"
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table-clean">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "bg-muted/30 font-medium text-muted-foreground",
                      column.sortable && "cursor-pointer hover:bg-muted/50"
                    )}
                    onClick={() => column.sortable && handleSort(String(column.key))}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column.header}</span>
                      {column.sortable && sortBy === column.key && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <tr
                    key={String(item.id)}
                    onClick={() => onRowClick && onRowClick(item)}
                    className={cn(
                      onRowClick && "cursor-pointer",
                      rowClassName && rowClassName(item)
                    )}
                  >
                    {columns.map((column) => (
                      <td key={`${item.id}-${String(column.key)}`}>
                        {column.cell
                          ? column.cell(item)
                          : String(item[column.key as keyof T] || '')}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, sortedData.length)} of{' '}
            {sortedData.length} results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Logic to show pages around current page
              let pageToShow;
              if (totalPages <= 5) {
                pageToShow = i + 1;
              } else if (currentPage <= 3) {
                pageToShow = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageToShow = totalPages - 4 + i;
              } else {
                pageToShow = currentPage - 2 + i;
              }
              
              return (
                <Button
                  key={pageToShow}
                  variant={currentPage === pageToShow ? 'default' : 'outline'}
                  onClick={() => goToPage(pageToShow)}
                  className="h-8 w-8"
                >
                  {pageToShow}
                </Button>
              );
            })}
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { DataTable };
