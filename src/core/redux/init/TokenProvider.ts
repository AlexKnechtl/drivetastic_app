import { ITokenProvider } from "core/providers";
import DeviceInfo from "react-native-device-info"


export class TokenProvider implements ITokenProvider {
    getToken(): string {
        return DeviceInfo.getUniqueID();
    }
}
