import { TelephoneCustomPipe } from './telephone-custom.pipe';

describe('TelephoneCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new TelephoneCustomPipe();
    expect(pipe).toBeTruthy();
  });
  it('transform number with dots', () => {
    const pipe = new TelephoneCustomPipe();
    const transformedValue = pipe.transform('333-333-333', '+31', true);
    expect(transformedValue).toEqual('(+31) 333.333.333');
  });
  it('transform number without dots', () => {
    const pipe = new TelephoneCustomPipe();
    const transformedValue = pipe.transform('333-333-333', '+31', false);
    expect(transformedValue).toEqual('+31 333-333-333');
  });
});
