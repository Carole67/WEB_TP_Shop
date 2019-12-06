import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthentificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9-_]+$')
      ])],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  setToken(token) {
    localStorage.setItem('token', token);
    console.log(token);
  }

  onSubmit() {
    // submit = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        response => this.setToken(response)
      ); 

  }
}
