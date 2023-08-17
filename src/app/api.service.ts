import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor (private htpp:HttpClient){}

getUsers(){
  return this.htpp.get('https://jsonplaceholder.typicode.com/users')
}

getUserDetails(userId:number){
  return this.htpp.get('https://jsonplaceholder.typicode.com/users/{id}')
}
getUsersPost(userId:number){
  return this.htpp.get('https://jsonplaceholder.typicode.com/posts')
}
getPostComments(userId:number){
  return this.htpp.get('https://jsonplaceholder.typicode.com/posts/2/comments')
}
getAlbum(){
  return this.htpp.get('https://jsonplaceholder.typicode.com/photos/{idalbum}')
}

}
