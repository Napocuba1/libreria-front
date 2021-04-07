import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { User } from '../models/user';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { tokenName } from '@angular/compiler';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../models/client';
import { Person } from '../models/person';
import { PaymentIntent } from '../models/payment-intent';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
    console.log('Google Books Service working!');

  }
  private key = 'AIzaSyDWZjhVRbOql-qtNOnKXuS-_2VWtz87mEU';
  private localurl = 'http://localhost:8008/api/v1/';


  getQuery(query: string, params: HttpParams){
    const url = `https://www.googleapis.com/books/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQDKp7phNMvs49SKL4MaEXD1Qd8YaKWeB1RUPet2Rayc614wUJFEKL3hukqDfbpwRD87BkbMgxuYDGQnalM'
    });
    params = new HttpParams().set('key', this.key).set('printType', 'books');
    return this.http.get(url, {params});
  }
  postLogin(user: User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(user);
    return this.http.post(this.localurl + 'security/login', body, {headers}).pipe(map((data: any) => {
      return data;
    }));

  }
  getBooks(token): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);


    return this.http.post('http://localhost:8008/api/v1/inicio', {}, {  headers });
  }
  getBooksByCat(token, cat: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);


    return this.http.post('http://localhost:8008/api/v1/products', {orderName: cat}, {  headers });
  }

  getOneBook(token, name: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);


    return this.http.post('http://localhost:8008/api/v1/book', {orderName: name}, {  headers });
  }

  getToken(){
      return localStorage.getItem('token');
    }
  getRefresh(){
      return localStorage.getItem('refresh');
    }
  setauth(token) {

        localStorage.setItem('token', 'bearer ' + token);
    }
  setref(refresh) {

      localStorage.setItem('refresh', refresh);
  }
  postRegister(client: Client){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(client);
    return this.http.post(this.localurl + 'register', body, {headers}).pipe(map((data: any) => {
      return data;
    }));
  }
  postFinalRegister(person: Person){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(person);
    return this.http.post(this.localurl + 'registerperson', body, {headers}).pipe(map((data: any) => {
      return data;
    }));
  }
  getCategory(token: string){
    const headers = new HttpHeaders();
    return this.http.get(this.localurl + 'category', {headers}).pipe(map((data: any) => {
      return data;
    }));
  }
  getProviders(token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('Authorization', token);
    return this.http.get(this.localurl + 'provider', {headers}).pipe(map((data: any) => {
      return data;
    }));
  }
  getOrders(token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('Authorization', token);
    return this.http.get(this.localurl + 'order', {headers}).pipe(map((data: any) => {
      return data;
    }));
  }
  getDetailedOrder(token, id: number): Observable<any> {
    const idx = id.toString();
    console.log(idx);
 
    const headers = new HttpHeaders().set('Authorization', token);
 
 
    return this.http.post('http://localhost:8008/api/v1/order/carrito', {order: idx}, {  headers });
   }
  getOneProvider(token, id: number): Observable<any> {
   const idx = id.toString;
   console.log(idx);

   const headers = new HttpHeaders().set('Authorization', token);


   return this.http.post('http://localhost:8008/api/v1/provedor', {orderName: idx}, {  headers });
  }
  getOneOrder(token, id: string): Observable<any> {

     const headers = new HttpHeaders().set('Authorization', token);


     return this.http.post('http://localhost:8008/api/v1/order/id', {orderName: id}, {  headers });
   }
   requestReset(email: string): Observable<any> {

    const headers = new HttpHeaders();

    return this.http.post('http://localhost:8008/api/v1/resetpasswordrequest', {email: email}, {  headers });
  }
  changePassword(email: string, password: string): Observable<any> {


     const headers = new HttpHeaders();


     return this.http.post('http://localhost:8008/api/v1/resetpassword', {email: email, password: password}, {  headers });
   }
   postNewProvider(name: string, zone: string, street: string, email: string, phone: string, phone2: string): Observable<any> {


    const headers = new HttpHeaders();
    const body = {
        'provider_name' : name,
        'provider_zone' : zone,
        'provider_street' : street,
        'email' : email,
        'phone' : phone,
        'phone2' : phone2,
    };


    return this.http.post('http://localhost:8008/api/v1/registerprovider', body, {  headers });
  }
  DeleteProvider(id:string): Observable<any> {


    const headers = new HttpHeaders();
    return this.http.post('http://localhost:8008/api/v1/deleteprovider', {orderName: id}, {  headers });
  }
  editProvider(id:number, name: string, zone: string, street: string, email: string, phone: string, phone2: string): Observable<any> {
    
    const body = {
      "provider_id": id,
      'provider_name' : name,
      'provider_zone' : zone,
      'provider_street' : street,
      'email' : email,
      'phone' : phone,
      'phone2' : phone2,
  };

    const headers = new HttpHeaders();
    return this.http.post('http://localhost:8008/api/v1/provedor/edit', body, {  headers });
  }
  

  //pagos

  pagar(payment:PaymentIntent):Observable<String>{
    const headers = new HttpHeaders();
    return this.http.post<string>(this.localurl+'payment/paymentIntent', payment, {headers});
  }
  confirmar(id:string):Observable<String>{
    const headers = new HttpHeaders();
    return this.http.post<string>(this.localurl+'payment/confirm/'+id, {headers});
  }
  cancelar(id:string):Observable<String>{
    const headers = new HttpHeaders();
    return this.http.post<string>(this.localurl+'payment/cancel/'+id, {headers});
  }

  }



export interface Contact{
        'provider_id': number;
        'provider_name': string;
        'provider_zone': string;
        'provider_street': string;
        'email': string;
        'phone': string;
        'phone2': string;
}


