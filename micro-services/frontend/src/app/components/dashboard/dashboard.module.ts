import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routes';
import { PaymentFormComponent } from '../payment-form/payment-form.component'; 
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component'; 
import { TransactionDetailsComponent } from '../transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PaymentFormComponent, 
    TransactionHistoryComponent, 
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }