import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../models/dto/login.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Importamos el DTO necesario para hacer el login
  LoginDto = new LoginDto();

  /*
    Creamos un formGroup que estará compuesto por:
    + email: El cual validaremos que es un email real
    + password: que pediremos que sea de entre 4 y 12 caracteres
  */ 
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email] ),
    pass : new FormControl('',  [Validators.required, Validators.minLength(4), Validators.maxLength(12)] )

  }) 

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Creamos una función para saber si el input del usuario contiene errores y ha comenzado a escribir (dirty)
  checkControl(controlName:string){
    return this.loginForm.controls[controlName].errors && this.loginForm.controls[controlName].dirty
  }

  login(){
    let email = this.loginForm.controls['email'].value;
    let pass = this.loginForm.controls['pass'].value;

    this.LoginDto.email = email;
    this.LoginDto.password = pass;

    if (this.loginForm.valid){
      console.log('Válido');
      this.service.doLogin(this.LoginDto).subscribe(
        data => {
          console.log(data);
          
          // Guardamos el token en una variable del localStorage
          localStorage.setItem('token', data.token);

          // Si está todo OK, redireccionamos a tweet-list
          this.router.navigate(['tweet-list']);

        },
        error => { // En caso de error entraría aquí
          if (error.status == 400){
            alert('Datos Login Incorrectos');
          }
          else{
            alert('Error en el Servidor')
          }
          console.log(error);
        }
      );
    }
    else{
      alert('Datos Login Incorrectos');
      console.log('No Válido, falta algún campo en el formulario');
    }
  }

}
