export function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems: T[] = [];

  for (let i = startIndex; i < endIndex && i < items.length; i++) {
    paginatedItems.push(items[i]);
  }

  return paginatedItems;
}
