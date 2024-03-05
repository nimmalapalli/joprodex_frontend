
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  
  showDropdown: boolean = false;
  toggleCreateOrder(): void {
    this.showDropdown = !this.showDropdown;
  }
  selectedButtonText: string = 'Custom Reports'; // Property to hold the clicked button text

  // Method to update selectedButtonText on button click
  updateSelectedText(text: string) {
    this.selectedButtonText = text;
  }
}
