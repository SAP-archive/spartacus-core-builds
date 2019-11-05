import { OccConfig } from '../../occ/config/occ-config';
export declare abstract class AsmConfig extends OccConfig {
    asm?: {
        agentSessionTimer?: {
            startingDelayInSeconds?: number;
        };
        customeSearch?: {
            maxResults?: number;
        };
    };
}
