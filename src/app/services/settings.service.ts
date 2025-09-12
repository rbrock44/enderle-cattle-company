import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as XLSX from 'xlsx';
import { AWARD_FILE_URL, HOME, PAGE_MAP, PAGE_PARAM, UPCOMING_FILE_URL } from "../constants/constants";
import { Award } from "../objects/award";
import { Pages } from "../objects/page";
import { UpcomingEvent } from "../objects/upcoming-event";

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
    private show = [true, false, false, false];

    private showPageSubject = new BehaviorSubject<boolean[]>(this.show);
    showPage$ = this.showPageSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadAwards();
        // this.loadUpcomingEvents();

        // interval(15 * 60 * 1000).subscribe(() => {
        //     this.loadAwards();
        //     this.loadUpcomingEvents();
        // });
    }

    setShow(index: number): void {
        const newShow = [false, false, false, false];
        newShow[index] = true;
        this.show = newShow;

        this.showPageSubject.next(newShow);

        // console.log('SHOW: ', this.show)
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
        return this.http.post('/api/contact', body);
    }

    startSubscriptions(): void {
        this.loadAwards();
        // this.loadUpcomingEvents();
    }

    private loadAwards(): void {
        this.http.get(AWARD_FILE_URL, { responseType: 'arraybuffer' }).subscribe({
            next: (data) => {
                const awards: Award[] = this.parseExcelIntoAwards(data);
                this.awardsSubject.next(awards);
                console.log('AWARDS EMITTED IN SERVICE: ', awards, data)
            },
            error: (err) => {
                console.error('Failed to fetch awards file', err);
            },
        });
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
            startDate: row['startDate'] ?? '',
            endDate: row['endDate'] ?? '',
            name: row['name'] ?? '',
            location: row['location'] ?? '',
            description: row['description'] ?? '',
        }));
    }

    private loadUpcomingEvents(): void {
        this.http.get(UPCOMING_FILE_URL, { responseType: 'arraybuffer' }).subscribe({
            next: (data) => {
                const events: UpcomingEvent[] = this.parseExcelIntoUpcomingEvents(data);
                this.upcomingEventsSubject.next(events);
            },
            error: (err) => {
                console.error('Failed to fetch awards file', err);
            },
        });
    }
}