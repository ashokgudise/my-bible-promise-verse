import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private url = "http://localhost:3000";

    constructor(private http: HttpClient){ }

      data =
       {id: 0,
       name: {},
       age: 0,
       surname: '',
       email: ''}
    ;

    getUsers(){
        let getUrl = `${this.url}/users/`;
        return this.http.get(getUrl);
    }

    createUser(user: User){
        let saveUrl =  `${this.url}/users/`;
        return this.http.post(saveUrl, user);
    }

    updateUser(id: number, user: User) {
       return this.http.post(`${this.url}/users/`, user);
    }

    deleteUser(id: number){
        return this.http.delete(`${this.url}/users/${id}`);
    }
}
