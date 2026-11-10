export const EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = { once: true, amount: 0.2 } as const;

/**
 * Pre dlhé zoznamy (Stagger): spustí sa, keď horný okraj zoznamu vojde do obrazovky.
 * `amount: 0.2` by pri zozname vyššom ako 5 obrazoviek (10 kariet na mobile) nikdy nenastal.
 */
export const LIST_VIEWPORT = { once: true, amount: 0, margin: "0px 0px -15% 0px" } as const;
