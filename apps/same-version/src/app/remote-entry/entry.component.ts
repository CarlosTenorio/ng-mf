import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ng-mf-same-version-entry',
  template: `<h1>REMOTE SAME VERSION</h1>`,
})
export class RemoteEntryComponent {}
