import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistryComponent } from './components/registry/registry.component';
import { InitformComponent } from './components/initform/initform.component';
import { FindAccountComponent } from './components/find-account/find-account.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { CategoryComponent } from './components/category/category.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { RegisterProvComponent } from './components/register-prov/register-prov.component';
import { PaymentComponent } from './components/payment/payment.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'cat/:category', component: CategoryComponent },
    { path: 'product/:name', component: ProductComponent },
    { path: 'registry', component: InitformComponent },
    { path: 'resetpassword/:email', component: NewPasswordComponent},
    { path: 'registry/:username', component: RegistryComponent },
    { path: 'addprov', component: RegisterProvComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contacts', component: AdminContactsComponent },
    { path: 'orders', component: PedidosComponent },
    { path: 'mainmenu', component: MenuAdminComponent },
    { path: 'payment', component: PaymentComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
    //{ path: 'oldPath', redirectTo: '' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
