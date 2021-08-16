import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from '../models/dto/register.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterDto = new RegisterDto();

  code = "UDEMYANDROID";

  registerForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email, Validators.required] ),
    pass : new FormControl('',  [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.required] )
  }) 

  constructor(private service: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  checkControl(controlName:string){
    return this.registerForm.controls[controlName].errors && this.registerForm.controls[controlName].dirty
  }

  register(){
    this.RegisterDto.username = this.registerForm.controls['username'].value;
    this.RegisterDto.email = this.registerForm.controls['email'].value;
    this.RegisterDto.password = this.registerForm.controls['pass'].value;
    this.RegisterDto.code = this.code;

    if (this.registerForm.valid){
      this.service.doRegister(this.RegisterDto).subscribe(
        data => {
          // Si está todo OK, redireccionamos a login, 
          // como se hace en la gran mayoría de webs a la hora de registrar nuevos usuarios
          this.router.navigate(['login']);
          console.log(data);
        },
        error => { // En caso de error entraría aquí
          
          if (error.error == 'API_AUTH_SIGNUP_EMAIL_EXIST'){
            alert('El email ya existe');
          }
          else if (error.error == 'API_AUTH_SIGNUP_USERNAME_EXIST'){
            alert('El usuario ya existe');
          }
          else{
            if (error.status == 400){
              alert('Datos Registro Incorrectos');
            }
            else{
              alert('Error en el Servidor')
            }
            console.log(error);
          }
        }
      );
    }
    else{
      console.log('No Válido, falta algún campo en el formulario');
    }
  }

}
