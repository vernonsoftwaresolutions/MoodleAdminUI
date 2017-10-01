import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [PostsService]
    });
  });

  it('should be created', inject([PostsService, HttpModule], (http: HttpModule,service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
