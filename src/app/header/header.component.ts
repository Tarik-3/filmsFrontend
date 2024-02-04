import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Film } from '../model/film';
import { CollecteService } from '../services/collecte.service';
import { CommonModule } from '@angular/common';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private fb: FormBuilder, public serve: CollecteService,private auth: AuthentificationService){
    this.username= AuthentificationService.getUser()
  }
  searching='';
  username: string ='';
  

  getListFilm(){
    this.serve.searchMovies(this.searching).subscribe((data) =>{
      this.serve.searchingFilms = data.results;
      console.log(this.searching , 'searchName');
      console.log(this.serve.searchingFilms);
    })
  }



  // searchForm = this.fb.nonNullable.group({
  //   searchFilm: '',
  // })
  // // searchForm = new FormGroup({
  // //   'searchFilm': new FormControl(null)
  // // })

  // getResultatsFilm(): void{
  //   this.serve.searchMovies(this.searchForm.value).subscribe((data) =>{
  //     this.resultsFilm = data;
  //     console.log(data);
  //   })
  // }
  // submit(){
  //   // this.searchFilm = this.searchForm.value.searchFilm ?? '';
  //   this.getResultatsFilm();
  //   console.log(this.searchForm.value,'testing searching' )
  // }
}
