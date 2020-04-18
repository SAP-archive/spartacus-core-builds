export declare const enum Priority {
    FALLBACK = -50,
    LOW = -10,
    NORMAL = 0,
    HIGH = 10
}
/**
 * Base interface for implementing handlers in a consistent way
 */
export interface Handler {
    /**
     * Returns true if handler can be used to handle specified condition
     */
    hasMatch?(...params: any[]): boolean;
    /**
     * Returns priority or score for specified handler.
     *
     * If multiple handlers can be used to handle specified condition, the one
     * with highest priority or score wins.
     */
    getPriority?(...params: any[]): Priority | number;
}
/**
 * Helper logic to resolve best matching handler
 *
 * Finding best match is a two step process:
 * 1. Find all matching handlers
 *    - all handlers for which hasMatch(...matchParams) will return true
 *    - all handlers without hasMatch method (implicit always match)
 * 2. Find the handler with highest priority
 *    - handler with highest getPriority(...priorityParams) will win
 *    - handler without getPriority method is treated as Priotity.NORMAL or 0
 *    - handlers with the same priority are sorted by order of providers, the handler that was provided later wins
 *
 * @param handlers - array or handler-like instancese
 * @param matchParams - array of parameters passed for hasMatch calls
 * @param priorityParams - array of parameters passed for getPriority calls
 */
export declare function resolveHandler<T extends Handler>(handlers: T[], matchParams?: any[], priorityParams?: any[]): T | undefined;
