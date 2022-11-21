//import { Frame, Page } from '@playwright/test';

export function getByTestId(testIds: string[]): string {
  return `[test-id=${testIds.join("-")}]`;
}
