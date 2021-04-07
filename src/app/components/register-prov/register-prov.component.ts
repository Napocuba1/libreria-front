import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register-prov',
  templateUrl: './register-prov.component.html',
  styleUrls: ['./register-prov.component.css']
})
export class RegisterProvComponent implements OnInit {

  constructor(private book: BooksService,
              private router: Router) { }

  ngOnInit(): void {

  }
  saveProv(name: string, zone: string, street: string, email: string, phone: string, phone2: string){
    this.book.postNewProvider(name , zone , street , email , phone , phone2 ).subscribe((data: any) => {
      this.router.navigate(['mainmenu']);
    });
  }

}
