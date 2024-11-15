export let pageNames = ["cafe", "cloth", "game", "mac", "ow", "pets", "salon", "pronto"] as const;
export type Pages = typeof pageNames[number];
export type PageURLs = Record<Pages, string>