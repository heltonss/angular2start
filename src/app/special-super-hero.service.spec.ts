import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './special-super-hero.service';

describe('SpecialSuperHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
