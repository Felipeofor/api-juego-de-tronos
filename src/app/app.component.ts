import { Component } from '@angular/core';
import { PublicService } from 'src/public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumiendodeapi';

  characters: any[] = [];

  constructor(private publicService: PublicService){}

  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
    this.publicService.getCharacters().subscribe(
      response => {
        this.characters = response;
        console.log(this.characters);
      },
      error => {
        console.log(error);
      }
    )
  }

}
