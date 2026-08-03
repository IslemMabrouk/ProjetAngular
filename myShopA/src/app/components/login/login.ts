import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
private formBuilder = inject(FormBuilder);
private router = inject(Router);
private userService = inject(UserService);

loginForm!:FormGroup;
errorMsg:string='';

ngOnInit(){
this.loginForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  pwd : ['', Validators.required]
})
}

login(){
  let formvalue = this.loginForm.value;
  this.userService.login(formvalue).subscribe({
    next: (res: any) => {
      console.log(res);
      if (res.length > 0) {
        localStorage.setItem("connectedUser", JSON.stringify(res[0]))
        this.errorMsg = '';
        this.router.navigate(['']);
      } else {
        this.errorMsg = 'Email ou Mot de pase incorrect';
      }
    }
  })

  //Utilisation du localstorage
  // const users = JSON.parse(localStorage.getItem('users') || '[]');

  // let user = users.find((u:any) =>
  //   u.email ===formvalue.email &&
  //   u.pwd === formvalue.pwd
  // );

  // if (user) {
  //   localStorage.setItem('connectedUser', JSON.stringify(user));
  //   this.errorMsg = '';
  //   this.router.navigate(['']);
  // }else{
  //   this.errorMsg = 'Email ou Mot de pase incorrect';
  // }

}
}
