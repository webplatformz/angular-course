import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigResolverService } from './config-resolver.service';

describe('ConfigResolverService', () => {
  let service: ConfigResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ConfigResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
