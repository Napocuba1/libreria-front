import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../models/cart';
import { GlobaldataService } from '../../services/globaldata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  nombre: string;
  libro: any;
  add:boolean;


  constructor(private book: BooksService,
              private ActivatedRoute: ActivatedRoute,
              private router: Router,
              private globaldataService: GlobaldataService 
              ) {
                this.add=false;
}
    ngOnInit(): void {

        this.ActivatedRoute.params.subscribe(params => {
        this.nombre = params.name;


});


        this.book.getOneBook(this.book.getToken(), this.nombre).subscribe((data: any) => {
          console.log(data[0]);


          this.libro = data[0];
      }, (error: any) => {
        console.error('error1', error);


});
}
addCart(libro: any, qtty: number){
let nuevo: Cart;
var total = qtty * libro.unit_price;
nuevo = {
    product: libro.product_name,
    unit_price: libro.unit_price,
    quantity: qtty,
    total: total
    
};

console.log(nuevo);
this.globaldataService.carrito.push(nuevo);
this.globaldataService.total = this.globaldataService.total+total;
console.log(this.globaldataService.total);
this.add = true;


}


}
