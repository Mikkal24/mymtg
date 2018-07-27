import { MTGModule } from './mtg.module';

describe('MTGModule', () => {
  let mTGModule: MTGModule;

  beforeEach(() => {
    mTGModule = new MTGModule();
  });

  it('should create an instance', () => {
    expect(mTGModule).toBeTruthy();
  });
});
