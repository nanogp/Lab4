import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  ngOnInit() /* corre cuando esta cargada la pagina */ {
    this.title = "El Tourrr de Heroes";
  }
}
