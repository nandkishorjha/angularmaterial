import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';





const matcomponent= [MatButtonModule, MatSidenavModule, MatCardModule, MatToolbarModule, MatListModule, MatGridListModule]

@NgModule({
  imports: [matcomponent],
  exports: [matcomponent]
})
export class MatdesignModule { }
