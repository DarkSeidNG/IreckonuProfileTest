import { CustomPipe } from './custom.pipe';

describe('CustomPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms custom value correctly', () => {
    const pipe = new CustomPipe();
    const transformedValue = pipe.transform('Mr', ',');
    expect(transformedValue).toEqual('Mr,');
  });
});
