import autoprefixer from '../../src/react-inline-auto-prefixer';
var s;
describe('autoprefixer', () => {
  describe('Gate function', () => {
    beforeEach(() => {
      s = spy(autoprefixer);
      //autoprefixer();
      //s();
    });

    it('should have been run once', () => {
      s();
      expect(s).to.have.been.calledOnce;
    });

    it('should return empty object when called with no arguments', () => {
      s();
      expect(s).to.have.always.returned({});
    });

    it('should return empty object when called with undefined', () => {
      s(undefined, true);
      expect(s).to.have.always.returned({});
    });

    it('should return a function when called with boolean', () => {
      var func = s(true);
      expect(func).to.be.a('function');
      func = s(false);
      expect(func).to.be.a('function');
      func = s(false,{});
      expect(func).to.be.a('function');
    });


    it('should return an object when called with an object', () => {
      var func = s({});
      expect(func).to.be.an('object');
      func = s({a:1});
      expect(func).to.be.an('object');
      func = s({},false);
      expect(func).to.be.an('object');
      func = s({},true);
      expect(func).to.be.an('object');
    });

  });
  describe('autoPrefixer function', ()=>{
    beforeEach(() => {
      s = spy(autoprefixer);
      //autoprefixer();
      //s();
    });
    it('should have been run once', () => {
      //let clientPrefix =['Webkit'];
      if(!navigator){var navigator = {};}
      navigator.userAgent = 'Firefox';
      console.log(navigator);
      let prefStyle = s( {alignItems:'row'});
      expect(prefStyle.mozAlignItems).to.equal('');
      //expect(clientPrefix).to.equal(['Webkit']);
      //stub(createObjectOfValuesWithPrefixes)
    });
  })
});
