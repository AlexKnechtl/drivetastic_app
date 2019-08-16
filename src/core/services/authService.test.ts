import { AuthService } from "./authService";

describe('AuthService', () => {
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService()
        .checkToken("OR9BCD66BED5");
        return expect(res.success).toBeTruthy();
    }),
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService()
        .checkToken("OR9B-CD66-BED5");
        return expect(res.success).toBeTruthy();
    }),
    it('should be able to login', async () => {
        expect.assertions(1);
        var res = await new AuthService().signInWithCredential("test@test.com", "password");
        return expect(res).toBeTruthy();
    })
});