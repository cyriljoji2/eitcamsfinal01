export interface FirestoreDocumentMeta {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdByUid?: string;
  updatedByUid?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  hasMore: boolean;
  nextCursor?: string | null;
}

export interface ValidationIssue {
  field: string;
  message: string;
}
