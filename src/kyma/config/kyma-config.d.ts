import { OccConfig } from '../../occ/config/occ-config';
export declare abstract class KymaConfig extends OccConfig {
    authentication?: {
        kyma_client_id?: string;
        kyma_client_secret?: string;
    };
}
