import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-initform',
  templateUrl: './initform.component.html',
  styleUrls: ['./initform.component.css']
})
export class InitformComponent  {
  client = new Client();
  alert:boolean;

  constructor(private book: BooksService,
              private router: Router) {
    this.alert = false;
  }
  register2(username:string, email:string, password:string, password2: string, phone:string){
    console.log(username);
    
    // tslint:disable-next-line: triple-equals
    if (password != password2) {
      this.alert= true;
    }
    else{
      this.client.username= username;
      this.client.email= email;
      this.client.password= password;
      this.client.phoneNumber= phone;

      this.book.postRegister(this.client).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['../registry', data.user]);
      })
    }
  }

 
}
