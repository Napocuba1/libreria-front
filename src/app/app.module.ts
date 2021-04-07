import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductComponent } from './components/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { FindAccountComponent } from './components/find-account/find-account.component';
import { NgxStripeModule } from 'ngx-stripe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { InitformComponent } from './components/initform/initform.component';
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { RegisterProvComponent } from './components/register-prov/register-prov.component';
import { CategoryComponent } from './components/category/category.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductComponent,
    SidebarComponent,
    LoginComponent,
    RegistryComponent,
    NewPasswordComponent,
    FindAccountComponent,
    DomseguroPipe,
    InitformComponent,
    AdminContactsComponent,
    ContactCardComponent,
    RegisterProvComponent,
    CategoryComponent,
    PedidosComponent,
    MenuAdminComponent,
    PaymentComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51HjuyILFhqp9lDfLFMHIeUJMfUJIpBEfNLuwCXdBXyJFk2LefZL8ZCL7ruojN3UNF19wnVdrIjAHVHMDZ2EajE2100aP7FxArg'),
    RouterModule.forRoot(ROUTES, {useHash: true, onSameUrlNavigation: 'reload', })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
