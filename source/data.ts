import { FeatureAttitude, InfectionRange, License } from './type';

export const licenses: License[] = [
    {
        key: 'AGPL-3.0',
        name: 'Affero GNU Public License 3.0',
        link: 'https://www.gnu.org/licenses/agpl-3.0.en.html',
        feature: {
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
        }
    }
];
