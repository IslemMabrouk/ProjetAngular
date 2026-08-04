import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-table',
  imports: [FormsModule],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {
private userService = inject(UserService);

editId : number | null = null;

users:any[]=[];

ngOnInit(){
 this.loadUsers();
}

loadUsers(){
 this.userService.getAllUsers().subscribe({
    next : (res:any) => {
      this.users =res;
    },
    error : (err) => {
      console.log(err);
      alert("Erreur Afichage liste utilisateurs")
    }
  })
}

deleteUser(id:any){
  this.userService.deleteUserById(id).subscribe({
    next : (res:any) => {
      this.loadUsers();
      alert("Utilisateur supprimé!");
    },
    error : (err) => {
      console.log(err);
      
    }
  })
}

save(userObj:any){
  this.userService.updateUser(userObj).subscribe({
    next : (res:any) => {
      alert("Utilisateur Modifié!");
      this.editId = null;
    },
    error : (err) => {
      console.log(err);
      
    }
  })
}

}
