import {StorageFactory} from './StorageFactory'
import {ITokenProvider} from '../providers';

import { signInAsTestUser} from '../services/authService.test'

class MockTokenProvider implements ITokenProvider{
    getToken(): string {
        return "TOKEN01";
    }

}

describe('Storage Factory Test', () => {
    it('should be able to init', async () => {
        expect.assertions(2);
        await signInAsTestUser();
        var sf = new StorageFactory();
        await sf.init(new MockTokenProvider());
        expect(sf.StatisticsProvider.ModuleStatistics).toBeTruthy();
        expect(sf.StatisticsProvider.ModuleStatistics["B"]).toBeTruthy();
    })
    
})
