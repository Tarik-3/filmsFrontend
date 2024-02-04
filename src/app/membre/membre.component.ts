import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-membre',
    standalone: true,
    templateUrl: './membre.component.html',
    styleUrl: './membre.component.css',
    imports: [HeaderComponent,RouterOutlet]
})
export class MembreComponent {

}
