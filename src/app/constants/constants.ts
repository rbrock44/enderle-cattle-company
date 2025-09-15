import { Pages } from "../objects/page";

export const PAGE_MAP: Record<number, string> = Object.fromEntries(
    Object.entries(Pages)
        .filter(([key, value]) => typeof value === 'number')
        .map(([key, value]) => [value, key])
);

export const HOME: string = 'Home';
export const PAGE_PARAM: string = 'page';

// this will emit console logs to help debug
export const DEBUG: boolean = false;

export const ADDRESS_1: string = '5267 Co Rd 532';
export const ADDRESS_2: string = 'Jackson, MO 63755';
export const PHONE_NUMBER: string = '(573) 318-4551';
export const EMAIL: string = 'someone@example.com';
export const MAIL_TO: string = `mailto:${EMAIL}`

export const AWARD_FILE_URL: string = 'https://docs.google.com/spreadsheets/d/1f8BRDGGY_xoVLeA1vXQFTkfhgdvcI6vM0JTQqk0njqM/export?format=xlsx';
export const UPCOMING_FILE_URL: string = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID/export?format=xlsx';
