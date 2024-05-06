import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OrderAdminComponent } from './order/order.admin.component'; // Import OrderAdminComponent here
import { DetailOrderAdminComponent } from './detail-order/detail.order.admin.component';
import { ProductAdminComponent } from './product/product.admin.component';
import { CategoryAdminComponent } from './category/category.admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrderAdminComponent, // Include OrderAdminComponent here
    DetailOrderAdminComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
