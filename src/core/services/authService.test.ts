import { AuthService } from "./authService";

describe('AuthService', () => {
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService()
        .checkToken("OR8DC8CF88DC");
        return expect(res.success).toBeTruthy();
    }),
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService()
        .checkToken("OR8D-C8CF-88DC");
        return expect(res.success).toBeTruthy();
    }),
    it('should be able to login', async () => {
        expect.assertions(1);
        var res = await new AuthService().signInWithCredential("fmoretti981@gmail.com", "12345678");
        return expect(res).toBeTruthy();
    })
});