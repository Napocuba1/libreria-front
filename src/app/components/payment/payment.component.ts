import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { PaymentIntent } from '../../models/payment-intent';
import { BooksService } from '../../services/books.service';
import { GlobaldataService } from '../../services/globaldata.service';
import { Router } from '@angular/router';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total: number;
  pagodata:any;
  message: string;
  btn: boolean;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;
 
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;
 
  constructor(
    private router: Router,
    private fb: FormBuilder,
     private stripeService: StripeService,
     private books:BooksService,
    private globaldataService:GlobaldataService) {
      this.message = "";
      this.btn= false;
      this.total=this.globaldataService.total;
    }
 
  ngOnInit(): void {
   this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
 
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          const pago:PaymentIntent = {
            token: result.token.id,
            amount: this.total*100,
            currency: 'USD',
            description: 'orden de compra n'
          };
          this.books.pagar(pago).subscribe((data:any)=>{
            console.log(data);
            this.pagodata=data;
          })

          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  confirm(){
    
    this.books.confirmar(this.pagodata.id).subscribe();
    this.message = "Pago Realizado con éxito!";
    this.btn = true;
    this.globaldataService.carrito=[];
    console.log(this.globaldataService.carrito);
    


  }
  cancel(){
    this.books.cancelar(this.pagodata.id).subscribe();
    this.message = "El pago se ha cancelado, será redirigido a la página principal";
    this.btn = true;
    this.globaldataService.carrito=[];
    
    
  }
  redirect(){
    this.router.navigate(['home']);
  }

}
