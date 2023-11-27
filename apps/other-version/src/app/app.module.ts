import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';
import { createCustomElement } from '@angular/elements';

const routes: Routes = [
  {
    path: '',
    component: RemoteEntryComponent,
  },
];
@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
  bootstrap: [], // No bootstrap components!
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(RemoteEntryComponent, {
      injector: this.injector,
    });
    customElements.define('other-version-element', customElement);
  }
}
