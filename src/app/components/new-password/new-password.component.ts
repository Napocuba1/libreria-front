import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent  {
  alerta: boolean;
  email:string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private books: BooksService
              ) {
    this.alerta = false;
    this.activatedRoute.params.subscribe(params => {
      this.email = params.email;
   
      
      

});

   }
  cont(password1: string , password2: string){
    if (password1 != password2) {
      this.alerta = true;
      console.log(this.alerta);
      
    }
    else{
      this.alerta = false;
      this.books.changePassword(this.email,password2).subscribe((data:any)=>{
          console.log(data);
          
      });
      
      
      
    }
  }



}
