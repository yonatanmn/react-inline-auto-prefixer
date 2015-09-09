import autoprefixer from '../../src/react-inline-auto-prefixer';

describe('autoprefixer', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(autoprefixer, 'greet');
      autoprefixer.greet();
    });

    it('should have been run once', () => {
      expect(autoprefixer.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(autoprefixer.greet).to.have.always.returned('hello');
    });
  });
});
