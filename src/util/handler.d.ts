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
