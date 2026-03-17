import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  private auth = inject(Auth);
  loginForm = inject(FormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      signInWithEmailAndPassword(this.auth, email!, password!)
        .then(userCredential => {
          console.log('Login success!', userCredential.user);
        })
        .catch(error => {
          console.error('Login failed', error.message);
        });
    }
  }
  get f() {
    return this.loginForm.controls;
  }

}