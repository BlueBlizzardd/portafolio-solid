export let pageNames = ["cafe", "cloth", "game", "mac", "ow", "pets", "salon", "pronto"] as const;
export type Pages = typeof pageNames[number];
export interface PageContent { page: string, image: string };
export type PageContents = Map<Pages, PageContent>;