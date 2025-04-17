import { Component } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clubs',
  imports: [AsyncPipe, NgIf, RouterLink, NgFor],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.scss'
})
export class ClubsComponent {
  readonly clubs$;

  constructor(private clubService: ClubsService){
    this.clubs$ = this.clubService.getAllClubs();
  }
}
