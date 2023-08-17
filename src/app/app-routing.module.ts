import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
{path:'', redirectTo:'./user',pathMatch: 'full'},
{path: 'users' , component:UserDetailsComponent},
{path: 'users/id' , component:UserListComponent}       
//{path: 'album' ,component:AlbumComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
