import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ClubsService } from '../../clubs.service';

@Component({
  selector: 'app-club',
  imports: [AsyncPipe, NgIf, RouterOutlet, RouterLink ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss'
})
export class ClubComponent {
  private readonly route = inject(ActivatedRoute);
  club$!: Observable<{ id: number; name: string; books: { id: number; title: string; author: string; year: number; }[] }>;

  constructor(private clubService: ClubsService){
  }

  ngOnInit() {
    this.club$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.clubService.getClubById(Number(params.get('clubId'))).pipe(
          map(club => club ?? { id: 0, name: '', books: [] })
        );
      })
    );
  }
}
