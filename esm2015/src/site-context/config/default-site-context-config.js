/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../providers/context-service-map';
import { ContextPersistence } from './site-context-config';
/**
 * @return {?}
 */
export function defaultSiteContextConfigFactory() {
    return {
        context: {
            parameters: {
                [LANGUAGE_CONTEXT_ID]: {
                    persistence: ContextPersistence.ROUTE,
                    default: 'en',
                    values: [
                        'en',
                        'de',
                        'ja',
                        'zh',
                        'ru',
                        'fr',
                        'tr',
                        'it',
                        'es',
                        'uk',
                        'pl',
                        'nl',
                        'hi',
                        'ar',
                        'pt',
                        'bn',
                        'pa',
                    ],
                },
                [CURRENCY_CONTEXT_ID]: {
                    persistence: ContextPersistence.ROUTE,
                    default: 'USD',
                    values: [
                        'USD',
                        'EUR',
                        'JPY',
                        'GBP',
                        'AUD',
                        'CAD',
                        'CHF',
                        'CNY',
                        'SEK',
                        'NZD',
                        'MXN',
                        'SGD',
                        'HKD',
                        'NOK',
                        'KRW',
                        'TRY',
                        'RUB',
                        'INR',
                        'BRL',
                        'ZAR',
                    ],
                },
            },
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RSxNQUFNLFVBQVUsK0JBQStCO0lBQzdDLE9BQU87UUFDTCxPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUU7Z0JBQ1YsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO29CQUNyQixXQUFXLEVBQUUsa0JBQWtCLENBQUMsS0FBSztvQkFDckMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDTDtpQkFDRjtnQkFDRCxDQUFDLG1CQUFtQixDQUFDLEVBQUU7b0JBQ3JCLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLO29CQUNyQyxPQUFPLEVBQUUsS0FBSztvQkFDZCxNQUFNLEVBQUU7d0JBQ04sS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNOO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbn0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgQ29udGV4dFBlcnNpc3RlbmNlLCBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KCk6IFNpdGVDb250ZXh0Q29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiB7XG4gICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgIFtMQU5HVUFHRV9DT05URVhUX0lEXToge1xuICAgICAgICAgIHBlcnNpc3RlbmNlOiBDb250ZXh0UGVyc2lzdGVuY2UuUk9VVEUsXG4gICAgICAgICAgZGVmYXVsdDogJ2VuJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICdlbicsXG4gICAgICAgICAgICAnZGUnLFxuICAgICAgICAgICAgJ2phJyxcbiAgICAgICAgICAgICd6aCcsXG4gICAgICAgICAgICAncnUnLFxuICAgICAgICAgICAgJ2ZyJyxcbiAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAnaXQnLFxuICAgICAgICAgICAgJ2VzJyxcbiAgICAgICAgICAgICd1aycsXG4gICAgICAgICAgICAncGwnLFxuICAgICAgICAgICAgJ25sJyxcbiAgICAgICAgICAgICdoaScsXG4gICAgICAgICAgICAnYXInLFxuICAgICAgICAgICAgJ3B0JyxcbiAgICAgICAgICAgICdibicsXG4gICAgICAgICAgICAncGEnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFtDVVJSRU5DWV9DT05URVhUX0lEXToge1xuICAgICAgICAgIHBlcnNpc3RlbmNlOiBDb250ZXh0UGVyc2lzdGVuY2UuUk9VVEUsXG4gICAgICAgICAgZGVmYXVsdDogJ1VTRCcsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAnVVNEJyxcbiAgICAgICAgICAgICdFVVInLFxuICAgICAgICAgICAgJ0pQWScsXG4gICAgICAgICAgICAnR0JQJyxcbiAgICAgICAgICAgICdBVUQnLFxuICAgICAgICAgICAgJ0NBRCcsXG4gICAgICAgICAgICAnQ0hGJyxcbiAgICAgICAgICAgICdDTlknLFxuICAgICAgICAgICAgJ1NFSycsXG4gICAgICAgICAgICAnTlpEJyxcbiAgICAgICAgICAgICdNWE4nLFxuICAgICAgICAgICAgJ1NHRCcsXG4gICAgICAgICAgICAnSEtEJyxcbiAgICAgICAgICAgICdOT0snLFxuICAgICAgICAgICAgJ0tSVycsXG4gICAgICAgICAgICAnVFJZJyxcbiAgICAgICAgICAgICdSVUInLFxuICAgICAgICAgICAgJ0lOUicsXG4gICAgICAgICAgICAnQlJMJyxcbiAgICAgICAgICAgICdaQVInLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXX0=