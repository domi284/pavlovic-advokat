/**
 * Slovenská typografia: nedeliteľná medzera po jednopísmenových predložkách
 * a spojkách (v, k, s, z, o, a, i, u), aby nezostávali na konci riadku.
 */
const SINGLE_LETTER = /(?<=^|[\s („–—])([vkszoaiu])\s+/giu;

export function typo(text: string): string {
  return text.replace(SINGLE_LETTER, "$1 ");
}
