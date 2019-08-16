import { DataService } from "./dataService";
import { AuthService } from "./authService";

describe('DataService', () => {
  it('should not work', async () => {
    expect.assertions(1);
    try {
      await new DataService().setLanguage("OR082AF5EAC7");
    } catch (error) {
      expect(true).toBeTruthy();
    }
  }),
    it('should work', async () => {
      expect.assertions(1);
      await new AuthService().signInWithCredential("test@test.com", "password");
      await new DataService().setLanguage("###LANGUAGE###");
      return expect(true).toBeTruthy();
    }),
    it('should get Userserdata', async () => {
      expect.assertions(2);
      await new AuthService().signInWithCredential("test@test.com", "password");
      var userData = await new DataService().getUserData();
      expect(userData.language).toBe("###LANGUAGE###");
      expect(userData.secondLanguage).toBeFalsy();
    }),
    it('should be able to set multilanguage', async () => {
      expect.assertions(1);
      await new AuthService().signInWithCredential("test@test.com", "password");
      await new DataService().setMultiLanguage("###MULTI_LANGUAGE###", "###LANGUAGE###");
      expect(true).toBeTruthy();
    }),
    it('should get Userserdata with valid multi language', async () => {
      expect.assertions(3);
      await new AuthService().signInWithCredential("test@test.com", "password");
      var userData = await new DataService().getUserData();
      expect(userData.secondLanguage).toBe("###LANGUAGE###");
      expect(userData.name).toBe("Test Name");
      expect(userData.language).toBe("###MULTI_LANGUAGE###");
    })
});