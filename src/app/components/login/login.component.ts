import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { GlobaldataService } from '../../services/globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isLogin: boolean;
  alert: boolean;
  user = new User();
  token: string;
  constructor(private book: BooksService,
              private router: Router,
              public globaldata: GlobaldataService) {
    this.isLogin = true;
    this.alert = false;
    this.globaldata.logged=false;
   }
   login(username: string, password: string){
     this.user.username = username;
     this.user.password = password;
     this.book.postLogin(this.user).subscribe((respuesta: any) => {


      if (respuesta.message === 'Authentication OK') {
       this.book.setauth(respuesta.authentication);
       this.book.setref(respuesta.refresh);
       this.globaldata.logged=true;
       


       this.router.navigate(['/home']);
      }


     },
     (error: any) => {
       console.error(error);
       this.alert = true;

     });

   }
   register(){
    this.router.navigate(['../registry']);
  }

}
