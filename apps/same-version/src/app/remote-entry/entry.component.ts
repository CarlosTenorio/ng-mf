import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-same-version-entry',
  template: `<h1>REMOTE SAME VERSION</h1>`,
})
export class RemoteEntryComponent {
  constructor() {
    console.log('RemoteEntryComponent created');
  }
}
