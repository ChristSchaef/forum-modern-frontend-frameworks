import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of, tap, map } from 'rxjs';
import { ClubsService } from '../../../clubs.service';

@Component({
  selector: 'app-club-book',
  imports: [NgIf, AsyncPipe],
  templateUrl: './club-book.component.html',
  styleUrl: './club-book.component.scss'
})
export class ClubBookComponent {
  private readonly route = inject(ActivatedRoute);
  book$!: Observable<{ id: number; title: string; author: string; year: number; description?: string; }>;

  constructor(private clubsService: ClubsService) {
  }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap(params => {
        const bookId = Number(params.get('bookId'));
        let clubId = 0;

        if(this.route.parent) {
          this.route.parent.paramMap.pipe(
            tap(params => {
              clubId = Number(params.get('clubId'));
            })).subscribe();
        }
        return this.clubsService.getClubBookById(clubId, bookId).pipe(
          map(book => book ?? { id: 0, title: '', author: '', year: 0 }));
      })
    );
  }

}
