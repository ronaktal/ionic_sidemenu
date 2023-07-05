import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);


  constructor(
    private router: ActivatedRoute,public auth: Auth) {

    }

  ngOnInit() {
    console.log(this.auth);
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  
  
  }

  async register(email:string,password:string){
    console.log(this.auth);

    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }
}
