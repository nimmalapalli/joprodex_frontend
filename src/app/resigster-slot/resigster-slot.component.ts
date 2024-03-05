import { Component } from '@angular/core';

@Component({
  selector: 'app-resigster-slot',
  templateUrl: './resigster-slot.component.html',
  styleUrls: ['./resigster-slot.component.css']
})
export class ResigsterSlotComponent {
  timezones: { value: string, label: string }[] = [
    {value:'india',label:' india Standard Time (1:00 pm)'},
    { value: 'Pacific/Midway', label: '(GMT-11:00) Pacific/Midway' },
    { value: 'Pacific/Honolulu', label: '(GMT-10:00) Pacific/Honolulu' },
    { value: 'America/Los_Angeles', label: '(GMT-08:00) America/Los_Angeles' },
    { value: 'America/New_York', label: '(GMT-05:00) America/New_York' },
    { value: 'America/Chicago', label: '(GMT-06:00) America/Chicago' },
    { value: 'America/Phoenix', label: '(GMT-07:00) America/Phoenix' },
    { value: 'America/Denver', label: '(GMT-07:00) America/Denver' },
  ];
}

