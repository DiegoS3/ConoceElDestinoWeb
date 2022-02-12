import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
    RouterModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    SidebarModule,
    TableModule,
    ButtonModule,
    OverlayPanelModule,
    TooltipModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
    ChartModule,
    SelectButtonModule
  ],
  providers: [DatePipe],
})
export class SharedModule {}
