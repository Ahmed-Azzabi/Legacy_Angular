import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl = 'http://localhost:9000/user';
  constructor(private httpClient:HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{message:string,users:any}>(`${this.userUrl}/api/myusers`);
  }
  // signup
  signup(user:any,image:File){
    let formData=new FormData();
    formData.append('firstName',user.firstName);
    formData.append('lastName',user.lastName);
    formData.append('email',user.email);
    formData.append('pwd',user.pwd);
    formData.append('tel',user.tel);
    formData.append('avatar',image);
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, formData);
  }
  // login
  login(user:any){  
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/login`, user);
  }

  getUserById(id:number){
    // api/users/5
    return this.httpClient.get<{user:any}>(`${this.userUrl}/${id}`);  }

  deleteUser(id:number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`); }

  editUser(user:any){
    return this.httpClient.patch<{message:string}>(`${this.userUrl}/${user._id}`, user);
  }

}
