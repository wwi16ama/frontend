import { PlaneListModule } from './plane-list.module';

describe('PlaneListModule', () => {
  let planeListModule: PlaneListModule;

  beforeEach(() => {
    planeListModule = new PlaneListModule();
  });

  it('should create an instance', () => {
    expect(planeListModule).toBeTruthy();
  });
});
