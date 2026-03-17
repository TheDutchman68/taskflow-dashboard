import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
  }


}
