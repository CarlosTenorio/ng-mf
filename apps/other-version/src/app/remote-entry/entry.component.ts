import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ng-mf-other-version-entry',
  template: `<h1>OTHER VERSION</h1>`,
})
export class RemoteEntryComponent {}
