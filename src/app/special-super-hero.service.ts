import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
	getHeroes(): Hero[] {
		return HEROES;
	}


}
