import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared';
import { AppComponent } from './app.component';
import { Plugin1Component } from './plugin1/plugin1.component';

@NgModule({
  declarations: [AppComponent, Plugin1Component],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        component: Plugin1Component
      },
      {
        path: 'plugin2',
        loadChildren: () =>
          import('./plugin2/plugin2.module').then((m) => m.Plugin2Module)
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
