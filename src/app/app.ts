import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Porta } from './laboratorio/porta/porta'; // componente de estudo (laboratório)

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Porta], // componentes que o template deste componente pode usar
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
