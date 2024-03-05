import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.css']
})
export class SettingsCardComponent {
  @Input() settingCard: any;
}
