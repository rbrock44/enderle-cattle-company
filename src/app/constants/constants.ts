import { Pages } from "../objects/page";

export const PAGE_MAP: Record<number, string> = Object.fromEntries(
    Object.entries(Pages)
        .filter(([key, value]) => typeof value === 'number')
        .map(([key, value]) => [value, key])
);

export const HOME: string = 'Home';