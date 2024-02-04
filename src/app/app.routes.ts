import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { DescriptionComponent } from './description/description.component';
import { SignComponent } from './sign/sign.component';
import { MembreComponent } from './membre/membre.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: "", component: MembreComponent, children:[
        {path:"detail/:id", component: DescriptionComponent },

        {path:"home", component: ListFilmComponent },
        {path: "favoris", component: FavoriteComponent, children:[ {path:"detail/:id", component: DescriptionComponent },]}
    ]
},
    {path: "login", component: SignComponent},
    {path: "sign-up", component: SignUpComponent},
{path:"membre", redirectTo: "login", pathMatch: "full" },
{path:"**", redirectTo: "login", pathMatch: "full" },
];
//
