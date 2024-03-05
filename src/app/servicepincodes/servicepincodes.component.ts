
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
@Component({
  selector: 'app-servicepincodes',
  templateUrl: './servicepincodes.component.html',
  styleUrls: ['./servicepincodes.component.scss']
})
export class ServicepincodesComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
}
