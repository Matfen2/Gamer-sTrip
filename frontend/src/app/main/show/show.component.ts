import { Component, OnInit } from '@angular/core';

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
      gameplay: 'https://www.youtube.com/watch?v=IcfkMO5Fw3w',
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
      gameplay: 'https://www.youtube.com/watch?v=lsV2WTa8RpE',
      buy: 'https://www.dlcompare.fr/jeux/121/telecharger-cd-key-fallout-new-vegas',
    },
    {
      id: 3,
      pict: '/assets/pict/firewatchJaquette.jpg',
      logo: '/assets/pict/firewatchLogo.png',
      categoryOne: 'FPS',
      categoryTwo: 'DETENTE',
      categoryThree: 'RICHE EN RECITS',
      synopsis:
        'Nous sommes en 1989. Vous êtes Henry, un homme qui a tourné le dos à une vie dissolue pour aller travailler comme garde forestier dans l’État reculé du Wyoming. Perché au sommet de votre montagne, vous devez surveiller les départs de feu et protéger la nature. L’été est particulièrement chaud et tout le monde est sur les dents. Votre chef, une femme du nom de Delilah, est toujours prête à vous aider via un petit poste radio portable - c’est votre unique contact avec le monde extérieur que vous avez laissé derrière vous. Mais alors qu’un événement étrange vous contraint à quitter votre tourelle de surveillance, vous commencez à explorer un environnement sauvage et inconnu, à vous poser des questions et à devoir faire des choix qui vont décider du sort de la seule relation qui compte à vos yeux : celle que vous entretenez avec Delilah.',
      gameplay: 'https://www.youtube.com/watch?v=HdUYYnfRdl8',
      buy: 'https://www.dlcompare.fr/jeux/1313/acheter-firewatch',
    },
    {
      id: 4,
      pict: '/assets/pict/shadowOfDoubtJaquette.jpg',
      logo: '/assets/pict/shadowOfDoubtLogo.png',
      categoryOne: 'BAC A SABLE',
      categoryTwo: 'ENQUETE',
      categoryThree: 'IMMERSIVE SIM',
      synopsis:
        "Shadows of Doubt se déroule dans une réalité alternative du monde hyperindustrialisé des années 1980. Devenez détective et utilisez une série de gadgets pour récolter des preuves et gagner votre pain en résolvant des affaires, ainsi qu'en trouvant et en vendant des informations entre autres activités.",
      gameplay: 'https://www.youtube.com/watch?v=WeB4veq5IRI',
      buy: 'https://www.dlcompare.fr/jeux/100014538/acheter-shadows-of-doubt-steam-key',
    },
  ];

  ngOnInit(): void {}
}
