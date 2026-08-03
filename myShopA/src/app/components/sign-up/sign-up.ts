import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signupForm!:FormGroup;
  users:any[]=[];

  // constructor(private formBuildr:FormBuilder){}
private formBuilder = inject(FormBuilder);
private userService = inject(UserService);
private router = inject(Router);

ngOnInit():void{
this.signupForm = this.formBuilder.group({
  userName :['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  pwd:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
  confirmPwd:['', Validators.required],
  gender:['', Validators.required],
  country:['', Validators.required],
  clothes:[false],
  accessories:[false]
},
{
  validators : this.passwordMatchValidator
});
}

passwordMatchValidator(control:AbstractControl){

  // récupérer le mdp/confimPwd
  const pwd = control.get('pwd')?.value;
  const confirmPwd = control.get('confirmPwd')?.value;

  //Vériier s'ils sont identique
  if(pwd !== confirmPwd){ return {passwordMismatch:true}};

  //les 2 mdps sont identiques
  return null;
}

signup(){
  // if (this.signupForm.invalid) {
  //   return;
  // }
const formValue=this.signupForm.value;
//Transforme/ Ajouter les checkbox
let interests = [];
if(formValue.clothes) interests.push('clothes');
if(formValue.accessories) interests.push('accessories');
  
//Créer l'obj final
const userFinal = {
  userName : formValue.userName,
  email : formValue.email,
  pwd : formValue.pwd,
  gender : formValue.gender,
  country : formValue.country,
  interests,
  role:"client"
}

this.userService.addUser(userFinal).subscribe({
  next: (res:any) => {
    alert("Inscription Réussie!");
    this.router.navigate(["/login"])
  },
  error : (err) => {
    console.log(err);
    alert("Erreur Inscription");
  }
})
// this.users = JSON.parse(localStorage.getItem('users') || '[]');
// this.users.push(userFinal);
// localStorage.setItem("users", JSON.stringify(this.users));

}




}
