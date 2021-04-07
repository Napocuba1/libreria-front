import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  libros: any[];
  cat:string;
  
  constructor(private book: BooksService,
              private ActivatedRoute: ActivatedRoute,
              private router: Router) {
    
    
  
  }
  ngOnInit(): void {
    
    this.ActivatedRoute.params.subscribe(params=>{
      this.cat = params.category;
      console.log(params);
      
    });


    this.book.getBooksByCat(this.book.getToken(), this.cat).subscribe((data: any) => {
    this.libros = data;
       }, (error: any) => {
    console.error('error1', error);
    

  });
  }
  producto(name:string){
    this.router.navigate(['product/', name]);

  }


}
