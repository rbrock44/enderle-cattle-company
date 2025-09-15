import { Highlight } from "../objects/highlight";
import { Pages } from "../objects/page";
import { UpcomingEvent } from "../objects/upcoming-event";

export const PAGE_MAP: Record<number, string> = Object.fromEntries(
    Object.entries(Pages)
        .filter(([key, value]) => typeof value === 'number')
        .map(([key, value]) => [value, key])
);

export function onlyUpcomingEvents(events: UpcomingEvent[]): UpcomingEvent[] {
    const now = new Date();

    return events.filter(event => {
        const end = new Date(event.endDate);
        return end >= now;
    });
}

function createHighlight(name: string, description: string): Highlight {
    return {
        name,
        image: 'highlight/' + name.toLowerCase() + ".png",
        description
    }
}

export const OUR_STORY_HIGHLIGHTS: Highlight[] = [
    createHighlight('Company', 'This is a company overview'),
    createHighlight('Kenzie', 'This is a Kenzie overview'),
    createHighlight('Cody', ''),
    createHighlight('Maebry', ''),
    createHighlight('McCaffrey', ''),
    createHighlight('Colter', ''),
]

export const HOME: string = 'Home';
export const PAGE_PARAM: string = 'page';
export const GET_IN_TOUCH_PARAM: string = 'getInTouch';
export const GET_IN_TOUCH_URL: string = `&${GET_IN_TOUCH_PARAM}=true`;

export const PAGE_NAMES: string[] = ['Home', 'Our Story', 'Awards', 'Contact Us']

// this will emit console logs to help debug
export const DEBUG: boolean = false;

export const ADDRESS_1: string = '5267 Co Rd 532';
export const ADDRESS_2: string = 'Jackson, MO 63755';
export const PHONE_NUMBER: string = '(573) 318-4551';
export const EMAIL: string = 'someone@example.com';
export const MAIL_TO: string = `mailto:${EMAIL}`

export const AWARD_FILE_URL: string = 'https://docs.google.com/spreadsheets/d/1f8BRDGGY_xoVLeA1vXQFTkfhgdvcI6vM0JTQqk0njqM/export?format=xlsx';
export const UPCOMING_FILE_URL: string = 'https://docs.google.com/spreadsheets/d/1mLF0DeiDj52b4lEtZBydNJ0-qa8_y6MzgqEPMxuzBYM/export?format=xlsx';

export const GET_IN_TOUCH_API_URL: string = '/api/contact';

export const URL_TWITTER: string = 'https://twitter.com/enderle-cattle-co';
export const URL_FACEOOK: string = 'https://facebook.com/enderle-cattle-co';
export const URL_LINKED_IN: string = 'https://linkedin.com/company/enderle-cattle-co';