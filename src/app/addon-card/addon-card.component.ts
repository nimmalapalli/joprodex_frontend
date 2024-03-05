import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addon-card',
  templateUrl: './addon-card.component.html',
  styleUrls: ['./addon-card.component.css']
})
export class AddonCardComponent {
    @Input() addon: any; // Define the addon object input property
}
