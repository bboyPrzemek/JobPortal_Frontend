import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  displayName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private registrationService : RegistrationService){}


  onSubmit(form : NgForm){
    this.registrationService.register(form.value).subscribe((response) => {
      if (response == "Created"){
          alert("created");
      }
    },(error)=> {
      alert(error.error);
});
  }
}

