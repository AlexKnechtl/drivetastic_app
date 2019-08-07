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
        expect(MaskText(text)).toEqual("ASAD - Q324 - ");
    }),
    it('should be not too long ', () => {
        var text = "asad - qsdfa - asdfafw";
        expect(MaskText(text)).toEqual("ASAD - QSDF - AASD");
    })
});