import { TestBed, inject } from '@angular/core/testing';
import { SpecialSuperHeroService } from './special-super-hero.service';

describe('SpecialSuperHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialSuperHeroService]
    });
  });

  it('should ...', inject([SpecialSuperHeroService], (service: SpecialSuperHeroService) => {
    expect(service).toBeTruthy();
  }));
});
