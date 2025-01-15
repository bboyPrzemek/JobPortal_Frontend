import { Component } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {

  username = '';
  password = ''

  constructor(private loginService : LoginService){}

  onSubmit(){
    let params = new URLSearchParams();
    params.set('username', this.username);
    params.set('password', this.password);
  
    this.loginService.login(params.toString()).subscribe(response=>{
      console.log(response);
    });
  }
}
