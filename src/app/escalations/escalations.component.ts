import { Component } from '@angular/core';

@Component({
  selector: 'app-escalations',
  templateUrl: './escalations.component.html',
  styleUrls: ['./escalations.component.css']
})
export class EscalationsComponent {
  dataSource = [
    { position: 1, type: 'Type 1', AWB: 'AWB-123', Status: 'closed', date: '2023-12-23', action: 'View Escalation' },
    { position: 2, type: 'Type 2', AWB: 'AWB-456', Status: 'closed', date: '2023-12-24', action: 'View Escalation' },
    // Add more data as needed
  ];
}
