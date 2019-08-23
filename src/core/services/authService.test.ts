import { AuthService } from "./authService";
import { User } from "../entities";

export async function signInAsTestUser(): Promise<User> {
    var auth = new AuthService();
    return auth.signInWithCredential("jest@test.com", "jesttest");
}

describe('AuthService', () => {
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService().checkToken("OR9BCD66BED5");
        return expect(res.success).toBeTruthy();
    }),
    it('should work', async () => {
        expect.assertions(1);
        var res = await new AuthService()
        .checkToken("OR9B-CD66-BED5");
        return expect(res.success).toBeTruthy();
    }),
    it('should be able to login', async done => {
        expect.assertions(1);
        var res = await signInAsTestUser();
        expect(res.name).toBe("####TESTNAME####");
        done();
    })
});