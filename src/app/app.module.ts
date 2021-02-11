import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatdesignModule } from './matdesign/matdesign.module';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from './form/form.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    FormComponent,
    ExpansionPanelComponent,
    SideBarComponent,
    TableComponent,
    TabsComponent,
    HeaderBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
