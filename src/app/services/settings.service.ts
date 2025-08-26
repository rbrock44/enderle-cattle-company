import { Injectable } from "@angular/core";
import { Pages } from "../objects/page";
import { PAGE_MAP } from "../constants/constants";

@Injectable({
    providedIn: 'root'
})
export class SettingService {
    // this show array controls which page is showed at a time
    // 1st: Home
    // 2nd: Our Story
    // 3rd: Awards and Rcognitions
    // 4th: Contact Us
    show = [true, false, false, false];

    setShow(index: number): void {
        this.show = [false, false, false, false];
        this.show[index] = true;
    }

    setShowWithUrlParam(param: string): void {
        type PageKey = keyof typeof Pages;
        const index = Pages[param as PageKey];
        this.setShow(index);
    }

    getUrlWithPageParam(pageNumber: number): string {
        let rtnString = `${location.pathname}`;
        const pageName = PAGE_MAP[pageNumber];
        if (pageName !== 'Home') {
          const queryParams = new URLSearchParams()
          queryParams.set('page', pageName);
          rtnString = `${location.pathname}?${queryParams.toString()}`;
        } 

        return rtnString;
    }
}