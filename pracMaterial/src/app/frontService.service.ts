import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";
@Injectable({
  providedIn: 'root'
})
export class FrontService{
  //   private mod1url: string = 'assets/module1.json';
  //   private mod2url: string = 'assets/module2.json';
  //   constructor(private http: HttpClient) {}

  //    getDataFromModule1() : Observable<any>{
  //   return this.http.get(this.mod1url);
  // }
  // getDataFromModule2():Observable<any>{
  //   return this.http.get(this.mod2url);
  // }
  private mod1url: string = 'assets/module1.json';
  // private mod2url: string = 'assets/module2.json';
  // data1:UserData={};
  // data1: { [key: string]: any[] } = {};//{ [key: string]: any[] } is used to define an object with dynamic keys (i.e., keys that are not known ahead of time), where the keys are of type string and the values are arrays of any type.
  // data2: { [key: string]: any[] } = {};
// creation of an object that can hold multiple arrays of different types of data, accessible via their respective keys
// constructor(private myService:Front){}
constructor(private http: HttpClient) {}

  

  getDataFromModule1() : Observable<User>{
    return this.http.get<User>(this.mod1url);
  }
  // getDataFromModule1():Observable<any>{
  //   return this.http.get(this.mod2url);
  // }
}