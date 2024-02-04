import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent implements OnInit {
  formSign!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthentificationService){}
  
  ngOnInit(): void {
      this.formSign=this.fb.group({
        username : this.fb.control(""),
        password : this.fb.control("")
      })

  }
  handleSign(usermane: string, password: string){
    this.auth.login(usermane,password);
  }
  

}
