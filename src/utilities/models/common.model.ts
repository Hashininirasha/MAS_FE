export interface StateObjectDto<T> {
    data: T,
    isLoading: boolean,
    error: null,
    status: 'initial' | 'loading' | 'success' | 'error' | null
}

export interface  HeaderCellProps {
  id: string;
  children: React.ReactNode;
  sortable?: boolean;
  filtered?: boolean;
  onSort?: (id: string) => void;
  getFilterList?: (col: string) => string[];
  onFilter?: (field: string, value: string) => void;
  width?: string | number;
  stickyLast?: boolean;
  sortMeta?: SortMetaDto;
};

export interface SortMetaDto {
  field: string;
  asc: boolean;
}