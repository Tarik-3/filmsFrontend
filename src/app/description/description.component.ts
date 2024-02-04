import { Component, Input, OnInit } from '@angular/core';
import { CollecteService } from '../services/collecte.service';
import { Film } from '../model/film';

import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { Editor, NgxEditorModule } from 'ngx-editor';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit{
//  @Input() 
comments!: any[];
// editor!: Editor;
newComment: string = '';
film!: Film;

// filmId!: number;


ngOnInit(): void {
  this.getPopularMoviesById();
  
}

constructor(
  private filmservice: CollecteService,
  private activatedRoute: ActivatedRoute,
  private authentification: AuthentificationService
) {
  this.username = "abd";
}

username: string ='';
isLiked = false;

  toggleLike(): void {
    this.filmservice.favorites = this.filmservice.favorites || [];
    this.isLiked = !this.isLiked;
    if(this.isLiked === true){
      console.log(this.film)
      this.filmservice.favorites.push(this.film);
    }else this.filmservice.favorites = this.filmservice.favorites.filter(objet => objet.id !== this.film.id);
}


getPopularMoviesById() {
    this.filmservice
    .getMoviesById(this.activatedRoute.snapshot.params['id'])
    .subscribe((resultat) => {
      this.film = resultat;
          });
}

// Commentaire

addComment(): void {
  // if (this.newComment.trim() !== '') {
  //   this.comments.push(this.newComment);
  // }
  console.log(this.username, "user");
  console.log(AuthentificationService.getUser(), "user");
  this.filmservice.EngerestrerCommentaire(this.username,this.film.id+"",this.newComment).subscribe(
    (res) => {
      console.log('Commentaire enregistré avec succès:', res);
      // Ajoutez ici la logique supplémentaire si nécessaire
    },
    (err) => {
      console.error('Erreur lors de l\'enregistrement du commentaire:', err);
      // Ajoutez ici la logique de gestion des erreurs si nécessaire
    });
  this.newComment = '';
}

allCommentaire() {
  this.filmservice.getCommentaires(this.film.id+"").subscribe(data=>{
    console.log(data,"data");
    this.comments= data;
    console.log(this.comments,"data");
  })

}




}
