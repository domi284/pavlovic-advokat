export type Area =
  | "dopravne-nehody"
  | "obchodne-pravo"
  | "obcianske-pravo"
  | "rodinne-pravo"
  | "spravne-pravo"
  | "dusevne-vlastnictvo"
  | "patentove-pravo"
  | "kyberneticke-pravo"
  | "trestne-pravo"
  | "ine";

export type Inquiry = {
  name: string;
  phone: string;
  email?: string;
  area?: Area;
  message?: string;
  consent: true;
};

/**
 * Odoslanie dopytu. Zatiaľ iba simulácia (1,2 s).
 * Neskôr sem doplniť volanie API (napr. Route Handler alebo e-mailová služba);
 * pri chybe stačí vyhodiť výnimku a formulár zobrazí chybovú hlášku.
 */
export async function submitInquiry(data: Inquiry): Promise<void> {
  void data;
  await new Promise((resolve) => setTimeout(resolve, 1200));
}
