import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CollecteService {

  private commentaires: any[] = [];


  favorites!:Film[];
  searching='';
  searchingFilms!:Film[];
  
  constructor(private http:HttpClient) { }
  
  API_KEY = "ca75721a3d26947c1374b39f2646a2f1";
  BESE_URL = "https://api.themoviedb.org/3";
  // popular = "tv/popular?language=en-US&page="
  details = "https://api.themoviedb.org/3/account/"
  getMovies(): Observable<any> {
    return this.http.get<any>(this.BESE_URL+`/discover/tv?api_key=${this.API_KEY}`);
  }
  getMoviesTrende(): Observable<any> {
    return this.http.get<any>(this.BESE_URL+`/trending/movie/day?api_key=${this.API_KEY}`);
  }
  getMoviesPopulaire(): Observable<any> {
    return this.http.get<any>(this.BESE_URL+`/popular/tv?api_key=${this.API_KEY}`);
  }

  getMoviesById(id: number): Observable<any> {
    return this.http.get<any>(this.BESE_URL+`/movie/${id}?api_key=${this.API_KEY}`);
  }

  getimagefromapi(poster_path: string) {
    if(poster_path === null){
    return 'https://www.dynamique-mag.com/wp-content/uploads/d850fd64b290435db2831b600323f9a9.jpg'
     }  
    else return 'https://image.tmdb.org/t/p/w300'+poster_path;
  }

  searchMovies(data:string): Observable<any> {
    console.log(data,"serverFilm")

     return this.http.get<any>(this.BESE_URL+`/search/movie?api_key=${this.API_KEY}&language=fr&query=${data}`);
    //  const url = this.BESE_URL+`/search/movie?api_key=${this.API_KEY}}&language=en-US&query=${data.searchFilm}%20&page=1&include_adult=true`
    //  return this.http.get<any>(url).pipe(map((res: any) => res.results))
  }

  getDetailFilm(id:number) {
    return this.http.get(this.BESE_URL+`/movie/${id}?api_key=${this.API_KEY}&language=fr`)
  }

//Commentaire

getCommentaires(filmId: string): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/commentaire/${filmId}`).pipe(
    map(data => {
      this.commentaires = data;
      return this.commentaires;
    })
    );
  }

  EngerestrerCommentaire(username: string, idFilm: string, commentaire: string): Observable<any> {
    console.log(username +" "+ idFilm +" " + commentaire + "hhhhhhhh")
    return this.http.post<any>('http://localhost:8080/commentaire/addCommentaire',
        {
          username,
          idFilm,
          commentaire
          }
        )
    }

  
}
