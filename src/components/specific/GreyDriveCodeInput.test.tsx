import { MaskText } from "./GreyDriveCodeInput";

describe('GreyDriveCodeInput', () => {
    it('should write only half the string', () => {
        var text = "asadq";
        expect(MaskText(text)).toEqual("ASAD - Q");
    }),
    it('should write the whole string', () => {
        var text = "asadqasdasd";
        expect(MaskText(text)).toEqual("ASAD - QASD - ASD");
    }),
    it('should remove non alphaNum chars', () => {
        var text = "asadq _ - 324-";
        expect(MaskText(text)).toEqual("ASAD - Q324");
    }),
    it('should not be longer than 12 Chars ', () => {
        var text = "asad - qsdfa - asdfafw";
        expect(MaskText(text)).toEqual("ASAD - QSDF - AASD");
    }),
    it('should let you delete', () => {
        var text = "asad - qsdfa - asdfafw";
        expect(MaskText(text)).toEqual("ASAD - QSDF - AASD");
    })
});