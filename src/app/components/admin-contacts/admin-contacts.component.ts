import { Component, OnInit } from '@angular/core';
import { BooksService, Contact } from '../../services/books.service';
import { Router } from '@angular/router';
import { Provider } from '../../models/provider';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent  {
  providers: Contact[];
  providersAux: Contact[];
  providersArr: Contact[] = [];
  clickedprov:Provider;



  constructor(private books: BooksService,
              private router: Router) {
                this.clickedprov ={
                  id: 0,
                  name: "",
                  zone: "",
                  street: "",
                  email: "",
                  phone: "",
                  phone2: ""
                }
      this.books.getProviders(this.books.getToken()).subscribe((data: any) => {
        this.providers = data;
        console.log(this.providers.length);
        this.providersAux = data;


      });
  }
  buscarProveedores(termino: string){
    this.providers = this.providersAux;
    console.log(this.providersArr);

    termino = termino.toLowerCase();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < this.providers.length; i++  ) {
      const provider = this.providers[i];


      const nombre = provider.provider_name.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {

        this.providersArr.push(provider);
        console.log(this.providersArr);
      }

    }


    this.providers = this.providersArr;
    this.providersArr = [];
  }
  deleteprov(provider_id:string){
    this.books.DeleteProvider(provider_id).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['mainmenu']);
        
    })

  }
  editprov(id:number, name: string, zone: string, street: string, email: string, phone: string, phone2: string){
    
    console.log(this.clickedprov);
    
    this.books.editProvider(this.clickedprov.id, name , zone , street , email ,  phone , phone2 ).subscribe((data:any)=>{
      console.log(data);
      
      this.router.navigate(['mainmenu']);
    });
  }
  loadModal(id:number, name: string, zone: string, street: string, email: string, phone: string, phone2: string){
    this.clickedprov ={
      id,
      name,
      zone,
      street,
      email,
      phone,
      phone2
    }
    
    
  }




}
