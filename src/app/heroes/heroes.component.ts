import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../special-super-hero.service';

@Component({
  providers: [HeroService],
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(
      (heroes) => {
        this.heroes = heroes;
      }
    )
  }
}


