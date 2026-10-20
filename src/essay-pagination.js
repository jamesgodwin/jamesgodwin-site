export const ESSAYS_PER_PAGE = 12;
export const essayArchivePath = page => page === 1 ? '/essays' : `/essays/page/${page}`;
export function essayArchivePages(essays) {
 const totalPages = Math.max(1, Math.ceil(essays.length / ESSAYS_PER_PAGE));
 return Array.from({length:totalPages}, (_, index) => ({
  number:index + 1,
  totalPages,
  totalEssays:essays.length,
  start:essays.length ? index * ESSAYS_PER_PAGE + 1 : 0,
  end:Math.min((index + 1) * ESSAYS_PER_PAGE, essays.length),
  path:essayArchivePath(index + 1),
  previous:index > 0 ? essayArchivePath(index) : undefined,
  next:index + 1 < totalPages ? essayArchivePath(index + 2) : undefined,
  essays:essays.slice(index * ESSAYS_PER_PAGE, (index + 1) * ESSAYS_PER_PAGE)
 }));
}
