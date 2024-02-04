import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface userInterface {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private static isAuthentificate: boolean;
  private static username: string;

  private url: string = 'http://localhost:8080';

  constructor(private router: Router, private http: HttpClient) {
    AuthentificationService.isAuthentificate = false;
    AuthentificationService.username = '';
  }

  login(username: string, password: string): boolean {
    // alert("login")
    let user: userInterface = {
      username: username,
      password: password,
    };
    this.http
      .post(this.url+'/register/login',user)
      .subscribe((response: any) => {
        if (response && response.success) {
         
          AuthentificationService.isAuthentificate = true;
          AuthentificationService.username = user.username;
          this.router.navigate(['/membre/home']);
        } else {
          this.logout();
        }
      });
    return this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    return AuthentificationService.isAuthentificate;
  }

  signup(username: string, password: string): void {
    let user1 = { username, password };
    
    let signupUrl = this.url + '/register';
    this.router.navigate(['/auth/login']).then((r) => true);
    this.http.post(signupUrl, user1).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  logout() {
    AuthentificationService.isAuthentificate = false;
    AuthentificationService.username = '';
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

  public static getUser(): string {
    return AuthentificationService.username;
  }

  
 
    // private static instance: AuthenticationService;
    // private static router: Router;
    // private static http: HttpClient;
  
 
    // public static getInstance(router: Router, http: HttpClient): AuthenticationService {
    //   if (!AuthenticationService.instance) {
    //     AuthenticationService.instance = new AuthenticationService(router, http);
    //   }
    //   return AuthenticationService.instance;
    // }
  
    // authenticate(credentials: Credentials): void {
    //   AuthenticationService.http.post('http://localhost:4201/register/login', credentials)
    //     .subscribe((response: any) => {
    //       if (response && response.success) {
    //         localStorage.setItem('Auth', 'true')
    //         localStorage.setItem('username', credentials.username)
    //         AuthenticationService.router.navigate(['/']);
    //       } else {
    //         this.logout()
    //       }
    //     });
    // }
  
    // logout() {
    //   localStorage.setItem('Auth', 'false')
    //   localStorage.setItem('username', '')
    // }
  
    // logIn(username: string, password: string): boolean {
    //   const cre : Credentials = {
    //     username: username,
    //     password: password
    //   }
    //   this.authenticate(cre);
    //   return AuthenticationService.isAuthenticated();
    // }
  
    // signUp(username: string, password: string) {
  
    //   const credentials = { username, password };
    //   const signUpUrl = 'http://localhost:4201/register';
    //   AuthenticationService.router.navigate(['/auth/authL']).then(r => true);
    //   return AuthenticationService.http.post(signUpUrl, credentials).subscribe(
    //     (response) => {
    //       console.log('Response:', response);
  
    //     },
    //     (error) => {
    //       console.error('Error:', error);
    //     }
    //   );
    // }
  
  //   public static canActivate():
  //     | Observable<boolean | UrlTree>
  //     | Promise<boolean | UrlTree>
  //     | boolean
  //     | UrlTree {
  //     if (!this.isAuthenticated()) {
  //       this.router.navigate(['/auth/authL']);
  //       return false;
  //     }
  //     return true;
  //   }
  
  //   public static isAuthenticated(): boolean {
  //     if (typeof localStorage !== 'undefined' && localStorage !== null) {
  //       return localStorage.getItem('Auth') === 'true';
  //     }
  //     return false;
  //   }
  
  //   public static getUser(): string {
  //     if (typeof localStorage !== 'undefined' && localStorage !== null) {
  //       const storedUsername = localStorage.getItem('username');
  //       return storedUsername ? String(storedUsername) : '';
  //     } else {
  //       // Handle the case when localStorage is not available
  //       return ''; // or any default value
  //     }
  //   }
  // }
}
