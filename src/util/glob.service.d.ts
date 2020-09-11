export declare class GlobService {
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     */
    getValidator(patterns: string[]): (url: string) => boolean;
}
