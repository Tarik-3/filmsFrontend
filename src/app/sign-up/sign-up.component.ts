import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  formSign!: FormGroup;
  constructor(private fb: FormBuilder,private auth: AuthentificationService){}
  
  ngOnInit(): void {
      this.formSign=this.fb.group({
        username : this.fb.control(""),
        password : this.fb.control("")
      })

  }
  handleSign(usermane: string, password: string){
    this.auth.signup(usermane,password);

  }

  }

// }
