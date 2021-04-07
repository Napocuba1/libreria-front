import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../services/globaldata.service';
import { Cart } from '../../models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carrito: Cart[];
  vacio = true;
  total: number;

  constructor(globaldata: GlobaldataService,
              private router: Router) {
    this.carrito = globaldata.carrito;
    this.total = globaldata.total;
    if (this.carrito.length > 0) {
      this.vacio = false;
    }

   }

  ngOnInit(): void {

  }
  

}
