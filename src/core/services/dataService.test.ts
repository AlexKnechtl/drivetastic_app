import { DataService } from "./dataService";
import { AuthService } from "./authService";
import { signInAsTestUser } from "./authService.test";

describe('DataService', () => {
  it('should not work', async () => {
    expect.assertions(1);
    try {
      new AuthService().signOut();
      var res = await new DataService().setLanguage("OR082AF5EAC7");
      expect(res.message).toBeTruthy();
    } catch (error) {
      expect(true).toBeTruthy();
    }
  }),
    it('should work', async () => {
      expect.assertions(1);
      await signInAsTestUser();
      await new DataService().setLanguage("###LANGUAGE###");
      return expect(true).toBeTruthy();
    }),
    it('should get Userserdata', async () => {
      expect.assertions(2);
      await signInAsTestUser();
      var userData = await new DataService().getUserData();
      expect(userData.language).toBe("###LANGUAGE###");
      expect(userData.secondLanguage).toBeFalsy();
    }),
    it('should be able to set multilanguage', async () => {
      expect.assertions(1);
      await signInAsTestUser();
      await new DataService().setMultiLanguage("###MULTI_LANGUAGE###", "###LANGUAGE###");
      expect(true).toBeTruthy();
    }),
    it('should get Userserdata with valid multi language', async (done) => {
      expect.assertions(2);
      await signInAsTestUser();
      var userData = await new DataService().getUserData();
      expect(userData.secondLanguage).toBe("###LANGUAGE###");
      expect(userData.language).toBe("###MULTI_LANGUAGE###");
      done();
    })
});