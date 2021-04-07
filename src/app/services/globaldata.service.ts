import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { guser } from '../models/g-user';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  carrito: Cart[];
  logus: guser;
  total: number;
  logged: boolean;

  constructor() {
    this.carrito = [];
    this.total = 0;
    this.logged = false;
   }
  cambiarTotal(num: number){
    this.total = this.total + num;
  }


}
