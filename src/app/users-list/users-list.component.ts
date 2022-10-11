import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
public UsersList:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUserList()
  }

public getUserList(){
this.http.get(`${environment.API}/getUsers`).subscribe((result:any)=>{
  console.log(result);
  this.UsersList=result
})
}

public deleteUser(id:any){
  this.http.post(`${environment.API}/delete`,{id:id}).subscribe((res:any)=>{
    this.getUserList()
  })
}

}
