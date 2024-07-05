import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { 
  }
  Getdetails(){
    this.hc.get('http://localhost:3000/tickets')
  }
  PostDetails(data:any){
    this.hc.post('http://localhost:3000/tickets',data)
  }
}
