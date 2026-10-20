export const NOTES_PER_PAGE = 12;
export const noteArchivePath = page => page === 1 ? '/notes' : `/notes/page/${page}`;
export function noteArchivePages(notes) {
 const totalPages = Math.max(1, Math.ceil(notes.length / NOTES_PER_PAGE));
 return Array.from({length:totalPages}, (_, index) => ({
  number:index + 1,
  totalPages,
  totalNotes:notes.length,
  start:notes.length ? index * NOTES_PER_PAGE + 1 : 0,
  end:Math.min((index + 1) * NOTES_PER_PAGE, notes.length),
  path:noteArchivePath(index + 1),
  previous:index > 0 ? noteArchivePath(index) : undefined,
  next:index + 1 < totalPages ? noteArchivePath(index + 2) : undefined,
  notes:notes.slice(index * NOTES_PER_PAGE, (index + 1) * NOTES_PER_PAGE)
 }));
}
