import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public firstName: any;
  public lastName: any;
  public profile: any;

  public button: any = 'save';
public id:any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((x: any) => {
      console.log(x['id']);
      if (x['id']) {
        this.button = 'update';
        this.http.
        post(`${environment.API}/getUser`,{id:x["id"]})
        .subscribe((result: any) => {
          console.log(result);
          this.firstName=result.first_name
          this.lastName=result.last_name
          this.profile=result.profile
          this.id=x["id"]
          
        });
      }
    });
  }

  onSelectFile(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.profile = reader.result;
      console.log(reader.result);
    };
  }

  public submit() {

    if(!this.firstName || !this.lastName || !this.profile){
      alert("Please fill all the fields")
    }
    else{
      let payload:any = {
        first_name: this.firstName,
        last_name: this.lastName,
        profile: this.profile,
      };
  
      this.button=='update'? payload.id=this.id:false
  
      this.http
        .post(`${environment.API}/${this.button=='update'?'update':'insert'}`, payload)
        .subscribe((result: any) => {
          this.router.navigateByUrl('users-list');
        });
    }

   
  }
}
