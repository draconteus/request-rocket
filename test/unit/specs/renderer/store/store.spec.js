import createStore from '../../../../../src/renderer/store';
import Auth from '../../../../../src/common/auth-types';
import HttpMethod from '../../../../../src/common/method-types';
import ContentType from '../../../../../src/common/content-types';

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('state', () => {
    describe('errors', () => {
      it('should have empty array as initial value', () => {
        expect(store.state.errors).to.eql([]);
      });
    });
    describe('validator errors', () => {
      it('should be empty by default', () => {
        expect(store.state.validatorErrors).to.eql([]);
      });
    });
    describe('selected auth type', () => {
      it('should have none auth type as initial value', () => {
        expect(store.state.auth.selected).to.eql(Auth.NONE);
      });
    });
    describe('auth params', () => {
      it('should have empty object as initial value', () => {
        expect(store.state.auth.params).to.eql({});
      });
    });
    describe('request', () => {
      it('should have GET http method as initial value', () => {
        expect(store.state.request.method).to.eql(HttpMethod.GET);
      });
      it('should have url property as string value', () => {
        expect(store.state.request.url).to.eql('');
      });
      it('should include no headers', () => {
        expect(store.state.request.headers).to.eql([]);
      });
      it('should have an empty request body by default', () => {
        expect(store.state.request.body).to.eql('');
      });
      it('should have a custom content type by default', () => {
        expect(store.state.request.contentType).to.eql(ContentType.custom);
      });
    });
    describe('response', () => {
      it('should have empty object as initial value', () => {
        expect(store.state.response).to.eql({});
      });
    });
  });
});
