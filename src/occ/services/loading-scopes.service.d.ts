import { OccConfig } from '../config/occ-config';
export declare class LoadingScopesService {
    protected config: OccConfig;
    constructor(config: OccConfig);
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param model
     * @param scopes
     */
    expand(model: string, scopes: string[]): string[];
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param model
     * @param scope
     */
    getMaxAge(model: string, scope: string): number;
}
