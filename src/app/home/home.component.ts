import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Cards=[
    {img:'https://imgs.search.brave.com/xar8GADNuUGGRdtTOAhtUwVitfoMYvuOCiCpnMhJoLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzkxODU3/MjgvNjE2ODUvaS80/NTAvZGVwb3NpdHBo/b3Rvc182MTY4NTI5/ODAtc3RvY2stcGhv/dG8tYmxhY2stZ3Jh/eS13aGl0ZS1hYnN0/cmFjdC1kaXZpZGVk/LmpwZw',content:'mywork'},
    {img:'https://imgs.search.brave.com/xar8GADNuUGGRdtTOAhtUwVitfoMYvuOCiCpnMhJoLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzkxODU3/MjgvNjE2ODUvaS80/NTAvZGVwb3NpdHBo/b3Rvc182MTY4NTI5/ODAtc3RvY2stcGhv/dG8tYmxhY2stZ3Jh/eS13aGl0ZS1hYnN0/cmFjdC1kaXZpZGVk/LmpwZw',content:'mywork'},
    {img:'https://imgs.search.brave.com/xar8GADNuUGGRdtTOAhtUwVitfoMYvuOCiCpnMhJoLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzkxODU3/MjgvNjE2ODUvaS80/NTAvZGVwb3NpdHBo/b3Rvc182MTY4NTI5/ODAtc3RvY2stcGhv/dG8tYmxhY2stZ3Jh/eS13aGl0ZS1hYnN0/cmFjdC1kaXZpZGVk/LmpwZw',content:'mywork'}
  ]
  ngOnInit() {
     this.nav.show()

  
  }
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 2, rows: 1,chart:'columnchart_values'},
          { title: 'Card 2', cols: 2, rows: 1 ,table:'table_div'},
          { title: 'Card 3', cols: 2, rows: 1 ,tree:'wordtree_basic'},
          { title: 'Card 4', cols: 2, rows: 1, line:'chart_div'}
        ];
      }

      return [
        { title: '', cols: 2, rows: 1 ,chart:'columnchart_values'},
        { title: 'Card 2', cols: 1, rows: 1 ,table:'table_div'},
        { title: 'Card 3', cols: 1, rows: 2,tree:'wordtree_basic' },
        { title: 'Card 4', cols: 1, rows: 1 ,line:'chart_div'}
      ];
    })
  );


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public nav: NavbarService,public nav1: Navbar2Service) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
