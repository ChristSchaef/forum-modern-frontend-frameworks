import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Settings } from '../../types';
import { NgFor } from '@angular/common';
import { SettingsPersistenceService } from '../settings-persistence.service';

@Component({
  selector: 'app-settings',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsPersistenceService
  ) {
    this.settingsForm = this.fb.group({
      mainClub: ['', Validators.required],
      preferredGenres: this.fb.array([], Validators.required),
      notifications: this.fb.group({
        email: [false],
        push: [false],
        newsletter: [false],
      }),
    });
  }

  async ngOnInit() {
    const settings = await this.settingsService.getSettings();
    if (settings) {
      this.settingsForm.setValue({
        mainClub: settings.mainClub,
        preferredGenres: [], // Leeres Array, da wir die Genres später hinzufügen
        notifications: settings.notifications,
      });
      settings.preferredGenres.forEach((genre) => {
        this.addGenre(genre);
      });
    }
  }

  // Getter für das preferredGenres FormArray
  get preferredGenres() {
    return this.settingsForm.get('preferredGenres') as FormArray;
  }

  // Methode um ein Genre hinzuzufügen
  addGenre(genreName = '') {
    this.preferredGenres.push(this.fb.control(genreName));
  }

  // Methode um ein Genre zu entfernen
  removeGenre(index: number) {
    this.preferredGenres.removeAt(index);
  }

  // Formular absenden
  async onSubmit() {
    if (this.settingsForm.valid) {
      const settings: Settings = this.settingsForm.value;
      console.log('Formular abgesendet:', settings);
      await this.settingsService.putSettings(settings);
    }
  }
}
