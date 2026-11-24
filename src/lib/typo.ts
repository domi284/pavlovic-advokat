/**
 * Slovenská typografia: nedeliteľná medzera po jednopísmenových predložkách
 * a spojkách (v, k, s, z, o, a, i, u), aby nezostávali na konci riadku.
 */
const SINGLE_LETTER = /(?<=^|[\s („–—])([vkszoaiu])\s+/giu;

/** Nedeliteľná medzera medzi číslom a nasledujúcim slovom (napr. „25 minút“, „4 vlastné“, „10 oblastí“). */
const NUMBER_WORD = /(\d)\s+(?=\p{L})/gu;

/** Pomlčka „–“ nesmie začínať riadok: medzera pred ňou je nedeliteľná. */
const DASH = / (?=[–—] )/g;

export function typo(text: string): string {
  return text.replace(SINGLE_LETTER, "$1 ").replace(NUMBER_WORD, "$1 ").replace(DASH, " ");
}
