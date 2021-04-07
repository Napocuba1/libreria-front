import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Person } from '../../models/person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent  {
  person = new Person();
  constructor(private book: BooksService,
              private router: ActivatedRoute,
              private router1: Router) {
                this.router.params.subscribe((data:any)=>{
                  console.log(data);
                  
                  this.person.username = data.username;
                });
    }

  register(name: string, surname: string, document: string, birth: string, zone: string, street: string){
    this.person.first_name = name;
    this.person.first_surname = surname;
    this.person.document_id = document;
    this.person.birthdate = birth;
    this.person.zone_direction = zone;
    this.person.street_direction = street;
    this.book.postFinalRegister(this.person).subscribe((data:any)=>{
      console.log(data);
      this.router1.navigate(['/login']);

      
    });


  }

}
