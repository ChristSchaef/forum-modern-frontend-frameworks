import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap, of, map } from 'rxjs';
import { ClubsService } from '../../../clubs.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-club-books',
  imports: [AsyncPipe, NgIf, RouterLink, NgFor],
  templateUrl: './club-books.component.html',
  styleUrl: './club-books.component.scss'
})
export class ClubBooksComponent {
  private readonly route = inject(ActivatedRoute);
    club$!: Observable<{ id: number; name: string; books: { id: number; title: string; author: string; year: number; }[] }>;

    constructor(private clubService: ClubsService){
    }

    ngOnInit() {
      if(!this.route.parent) return;
      this.club$ = this.route.parent.paramMap.pipe(
        switchMap(params => {
          return this.clubService.getClubById(Number(params.get('clubId'))).pipe(
            map(club => club ?? { id: 0, name: '', books: [] })
          );
        })
      );
    }

}
