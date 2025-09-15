import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";
import * as XLSX from 'xlsx';
import { AWARD_FILE_URL, DEBUG, GET_IN_TOUCH_API_URL, HOME, PAGE_MAP, PAGE_PARAM, REFRESH_RATE_IN_MIN, UPCOMING_FILE_URL } from "../constants/constants";
import { Award } from "../objects/award";
import { Pages } from "../objects/page";
import { UpcomingEvent } from "../objects/upcoming-event";
import { isPlatformServer } from "@angular/common";

const AWARDS_KEY = makeStateKey<Award[]>('awards');
const UPCOMING_EVENTS_KEY = makeStateKey<UpcomingEvent[]>('upcoming_events');

@Injectable({
    providedIn: 'root',
})
export class SettingService {
    private awardsSubject = new BehaviorSubject<Award[]>([]);
    awards$ = this.awardsSubject.asObservable();

    private upcomingEventsSubject = new BehaviorSubject<UpcomingEvent[]>([]);
    upcomingEvents$ = this.upcomingEventsSubject.asObservable();

    // this show array controls which page is showed at a time
    // 1st: Home
    // 2nd: Our Story
    // 3rd: Awards and Rcognitions
    // 4th: Contact Us
    private show: boolean[] = [true, false, false, false];

    private showPageSubject = new BehaviorSubject<boolean[]>(this.show);
    showPage$ = this.showPageSubject.asObservable();

    constructor(
        private http: HttpClient,
        private transferState: TransferState,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.startSubscriptions();

        interval(REFRESH_RATE_IN_MIN * 60 * 1000).subscribe(() => {
            this.startSubscriptions();
        });
    }

    setShow(index: number): void {
        const newShow = [false, false, false, false];
        newShow[index] = true;
        this.show = newShow;

        this.showPageSubject.next(newShow);

        if (DEBUG)
            console.log('SHOW: ', this.show)
    }

    setShowWithUrlParam(param: string): void {
        type PageKey = keyof typeof Pages;
        const index = Pages[param as PageKey];
        this.setShow(index);
    }

    getUrlWithPageParam(pageNumber: number): string {
        let rtnString = `${location.pathname}`;
        const pageName = PAGE_MAP[pageNumber];
        if (pageName !== HOME) {
            const queryParams = new URLSearchParams()
            queryParams.set(PAGE_PARAM, pageName);
            rtnString = `${location.pathname}?${queryParams.toString()}`;
        }

        return rtnString;
    }

    getInTouch(body: any) {
        // TODO: replace url and handle better
        return this.http.post(GET_IN_TOUCH_API_URL, body);
    }

    startSubscriptions(): void {
        this.loadAwards();
        this.loadUpcomingEvents();
    }

    private loadAwards(): void {
        const cachedAwards = this.transferState.get(AWARDS_KEY, null);

        if (cachedAwards && !isPlatformServer(this.platformId)) {
            this.awardsSubject.next(cachedAwards);
            return;
        }

        if (isPlatformServer(this.platformId)) {
            this.http.get(AWARD_FILE_URL, { responseType: 'arraybuffer' }).subscribe({
                next: (data) => {
                    const awards: Award[] = this.parseExcelIntoAwards(data);

                    this.transferState.set(AWARDS_KEY, awards);
                    this.awardsSubject.next(awards);
                    if (DEBUG)
                        console.log('AWARDS FETCHED ON SERVER: ', awards);
                },
                error: (err) => console.error('Failed to fetch awards file on server', err),
            });
        }
    }

    private parseExcelIntoAwards(fileContent: ArrayBuffer): Award[] {
        const workbook = XLSX.read(fileContent, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

        return rows.map((row, idx) => ({
            year: Number(row['year'] ?? 0),
            name: row['name'] ?? '',
            eventName: row['eventName'] ?? '',
            animalName: row['animalName'] ?? '',
            category: row['category'] ?? '',
            shower: row['shower'] ?? '',
            location: row['location'] ?? '',
            pictures: row['pictures']
                ? (row['pictures'] as string).split(';;').map((s) => s.trim())
                : [],
        }));
    }

    private parseExcelIntoUpcomingEvents(fileContent: ArrayBuffer): UpcomingEvent[] {
        const workbook = XLSX.read(fileContent, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

        return rows.map((row, idx) => ({
            year: Number(row['year'] ?? 0),
            startDate: row['startDate'] ? this.excelSerialToMDYY(row['startDate']) : '',
            endDate: row['endDate'] ? this.excelSerialToMDYY(row['endDate']) : '',
            name: row['name'] ?? '',
            location: row['location'] ?? '',
            description: row['description'] ?? '',
        }));
    }

    private loadUpcomingEvents(): void {
        const cachedEvents = this.transferState.get(UPCOMING_EVENTS_KEY, null);

        if (cachedEvents && !isPlatformServer(this.platformId)) {
            this.upcomingEventsSubject.next(cachedEvents);
            return;
        }

        if (isPlatformServer(this.platformId)) {
            this.http.get(UPCOMING_FILE_URL, { responseType: 'arraybuffer' }).subscribe({
                next: (data) => {
                    const events: UpcomingEvent[] = this.parseExcelIntoUpcomingEvents(data);

                    this.transferState.set(UPCOMING_EVENTS_KEY, events);
                    this.upcomingEventsSubject.next(events);
                },
                error: (err) => {
                    console.error('Failed to fetch awards file', err);
                },
            });
        }
    }

    private excelSerialToMDYY(serial: number): string {
        const excelEpoch = new Date(1899, 11, 30); 
        const date = new Date(excelEpoch.getTime() + serial * 86400000);

        const month = date.getMonth() + 1; 
        const day = date.getDate();
        const year = date.getFullYear() % 100;

        return `${month}/${day}/${year}`;
    }
}