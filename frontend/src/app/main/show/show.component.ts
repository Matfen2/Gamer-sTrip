import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  games = [
    {
      id: 1,
      pict: '/assets/pict/Dishonored2Jaquette.png',
      logo: '/assets/pict/Dishonored2Logo.png',
      categoryOne: 'FPS',
      categoryTwo: 'INFILTRATION',
      categoryThree: 'IMMERSIVE SIM',
      synopsis:
        "Choisirez-vous d'incarner l'Impératrice Emily Kaldwin ou le Protecteur royal, Corvo Attano ? Allez-vous progresser dans le jeu sans être vu ou mettre à profit son système de combat dévastateur ? L'histoire évolue avec vos choix et vous mènera d'intrigue en intrigue au fil de missions soignées.",
      demo: 'https://www.youtube.com/watch?v=IcfkMO5Fw3w&t=2s',
      buy: 'https://www.dlcompare.fr/jeux/100000207/acheter-dishonored-2',
    },
    {
      id: 2,
      pict: '/assets/pict/falloutNewVegasJaquette.jpg',
      logo: '/assets/pict/falloutNewVegasLogo.png',
      categoryOne: 'FPS',
      categoryTwo: 'BAC A SABLE',
      categoryThree: 'ACTION/RPG',
      synopsis:
        'Du désert de Mojave au strip de Vegas, en passant par le barrage Hoover Dam, vous allez rencontrer un bon nombre de personnages attachants et colorés. Faites les bonnes alliances et choisissez votre camps pour devenir le maître de Vegas.',
      demo: 'https://www.youtube.com/watch?v=IcfkMO5Fw3w&t=2s',
      buy: 'https://www.dlcompare.fr/jeux/100000207/acheter-dishonored-2',
    },
    {
      id: 3,
      pict: '/assets/pict/Dishonored2Jaquette.png',
      logo: '/assets/pict/Dishonored2Logo.png',
      categoryOne: 'FPS',
      categoryTwo: 'INFILTRATION',
      categoryThree: 'IMMERSIVE SIM',
      synopsis:
        "Choisirez-vous d'incarner l'Impératrice Emily Kaldwin ou le Protecteur royal, Corvo Attano ? Allez-vous progresser dans le jeu sans être vu ou mettre à profit son système de combat dévastateur ? L'histoire évolue avec vos choix et vous mènera d'intrigue en intrigue au fil de missions soignées.",
      demo: 'https://www.youtube.com/watch?v=IcfkMO5Fw3w&t=2s',
      buy: 'https://www.dlcompare.fr/jeux/100000207/acheter-dishonored-2',
    },
    {
      id: 4,
      pict: '/assets/pict/Dishonored2Jaquette.png',
      logo: '/assets/pict/Dishonored2Logo.png',
      categoryOne: 'FPS',
      categoryTwo: 'INFILTRATION',
      categoryThree: 'IMMERSIVE SIM',
      synopsis:
        "Choisirez-vous d'incarner l'Impératrice Emily Kaldwin ou le Protecteur royal, Corvo Attano ? Allez-vous progresser dans le jeu sans être vu ou mettre à profit son système de combat dévastateur ? L'histoire évolue avec vos choix et vous mènera d'intrigue en intrigue au fil de missions soignées.",
      demo: 'https://www.youtube.com/watch?v=IcfkMO5Fw3w&t=2s',
      buy: 'https://www.dlcompare.fr/jeux/100000207/acheter-dishonored-2',
    },
  ];

  results: any[] = [];
  title: string = '';

  searchGame = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  showGame() {
    this.title = this.searchGame.value.title as string;
    this.authService.getGamesByTitle(this.title).subscribe((res) => {
      this.results = res.data;
    });
  }

  ngOnInit(): void {}
}
