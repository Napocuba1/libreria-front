import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css']
})
export class FindAccountComponent implements OnInit {
  emailok: boolean;
  emailnok: boolean;

  constructor(private book: BooksService,
              private router: Router) {
      this.emailok = false;
      this.emailnok = false;

}

  ngOnInit(): void {
  }
  sendEmail(email: string){
    this.book.requestReset(email).subscribe((data: any) => {
      this.emailok = true;
      this.emailnok = false;
    },(error: any) => {
      this.emailnok = true;
      this.emailok = false;
    });
  }

}

