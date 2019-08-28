import {DeviceTokenService} from "./deviceTokenService"

import { signInAsTestUser } from "./authService.test";

describe('DeviceTokenServiceTest', () => {
    it('should set the devicetoken', async () => {
        expect.assertions(1);
        await signInAsTestUser();
        var dts = new DeviceTokenService(true);
        expect(await dts.setDeviceToken("DEVICETOKEN01")).toEqual(true);
    });
    it('should set another devicetoken and should be notified that the devicetoken has changed', async () => {
        expect.assertions(4);
        await signInAsTestUser();
        var dts = new DeviceTokenService(true);
        dts.onTokenChange.on(e=> expect(e.currentToken).toBe("DEVICETOKEN02"));
        expect(await dts.setDeviceToken("DEVICETOKEN01")).toEqual(true);
        var dts2 = new DeviceTokenService(true);
        expect(await dts2.setDeviceToken("DEVICETOKEN02")).toEqual(true);
        expect(await dts.setDeviceToken("DEVICETOKEN01")).toEqual(true);
    });
    it('should return "token not changed"', async () => {
        expect.assertions(3);
        await signInAsTestUser();
        var dts = new DeviceTokenService(true);
        expect(await dts.setDeviceToken("DEVICETOKEN01")).toEqual(true);
        expect(await dts.hasTokenChanged("DEVICETOKEN01")).toBe(false);
        expect(await dts.hasTokenChanged("DEVICETOKEN02")).toBe(true);
    });
})
