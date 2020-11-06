import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plugin2Component } from './plugin2.component';
import { SharedModule } from 'shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Plugin2Component
      }
    ])
  ],
  declarations: [Plugin2Component]
})
export class Plugin2Module {}
