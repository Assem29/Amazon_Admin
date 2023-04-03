// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>('http://localhost:3000/api/v1/users');
//   }

//   getUser(userId: string): Observable<User> {
//     return this.http.get<User>(`${'http://localhost:3000/api/v1/users'}/${userId}`);
//   }

//   createUser(user: User): Observable<User> {
//     return this.http.post<User>('http://localhost:3000/api/v1/users', user);
//   }

//   updateUser(user: User): Observable<User> {
//     return this.http.put<User>(`${'http://localhost:3000/api/v1/users'}/${user.id}`, user);
//   }

//   deleteUser(userId: string): Observable<any> {
//     return this.http.delete<any>(`${'http://localhost:3000/api/v1/users'}/${userId}`);
//   }
//   getCountries(): { id: string; name: string }[] {
//     return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
//       return {
//         id: entry[0],
//         name: entry[1]
//       };
//     });
//   }

//   getCountry(countryKey: string): string {
//     return countriesLib.getName(countryKey, 'en');
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import * as countriesLib from 'i18n-iso-countries';
declare const require:any

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/v1/users');
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${'http://localhost:3000/api/v1/users'}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/v1/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${'http://localhost:3000/api/v1/users'}/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${'http://localhost:3000/api/v1/users'}/${userId}`);
  }

  getCountries(): { id: string; name: string }[] {
    return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
      return {
        id: entry[0],
        name: entry[1]
      };
    });
  }

  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en');
  }
}
