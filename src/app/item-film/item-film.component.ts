import { Component, Input } from '@angular/core';
import { Film } from '../model/film';
import { RouterModule } from '@angular/router';
import { CollecteService } from '../services/collecte.service';
import { DescriptionComponent } from "../description/description.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-item-film',
    standalone: true,
    templateUrl: './item-film.component.html',
    styleUrl: './item-film.component.css',
    imports: [RouterModule, DescriptionComponent,CommonModule]
})
export class ItemFilmComponent {
 @Input() film!:Film;
 constructor(private data: CollecteService) {}
 getUrl(api: any) {
  return this.data.getimagefromapi(api);
}

}
