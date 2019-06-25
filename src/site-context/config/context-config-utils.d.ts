import { ContextParameter, SiteContextConfig } from './site-context-config';
/**
 * Helper function for safely getting context parameter config
 *
 * @param config
 * @param parameter
 */
export declare function getContextParameter(config: SiteContextConfig, parameter: string): ContextParameter;
/**
 * Helper function for calculating default value for context parameter from config
 *
 * @param config
 * @param parameter
 */
export declare function getContextParameterDefault(config: SiteContextConfig, parameter: string): string;
