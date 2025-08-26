import { TestBed } from "@angular/core/testing";
import { SettingService } from "./settings.service";

describe('SettingService', () => {
    let service: SettingService;
  
    beforeEach(() => {
      service = TestBed.inject(SettingService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
})