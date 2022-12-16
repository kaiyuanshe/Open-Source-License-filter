import {
    FeatureAttitude,
    InfectionRange,
    licenses,
    filterLicenses
} from '../source';

describe('Algorithm', () => {
    it('should return a Filtered Array with License & Score', () => {
        const attitude = {
            popularity: FeatureAttitude.Negative,
            reuseCondition: FeatureAttitude.Positive,
            infectionIntensity: FeatureAttitude.Positive,
            infectionRange: InfectionRange.Module,
            jurisdiction: FeatureAttitude.Undefined,
            patentStatement: FeatureAttitude.Positive,
            patentRetaliation: FeatureAttitude.Positive,
            enhancedAttribution: FeatureAttitude.Positive,
            privacyLoophole: FeatureAttitude.Negative,
            marketingEndorsement: FeatureAttitude.Negative
        };
        const list = filterLicenses(attitude, licenses),
            featureKeys = Object.keys(licenses[0].feature);

        for (const { license, score } of list) {
            expect(Object.keys(license.feature)).toEqual(featureKeys);

            expect(typeof score === 'number').toBeTruthy();
        }
    });
});
