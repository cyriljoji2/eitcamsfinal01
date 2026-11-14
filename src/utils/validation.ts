export const SAFE_DOCUMENT_ID_REGEX = /^[a-zA-Z0-9_-]{1,128}$/;

export function isValidDocumentId(value: string): boolean {
  return SAFE_DOCUMENT_ID_REGEX.test(value);
}

export function sanitizeTextInput(value: string, maxLength = 500): string {
  return value.trim().slice(0, maxLength);
}

export function isNonEmptyEmail(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length > 3 && trimmed.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}
