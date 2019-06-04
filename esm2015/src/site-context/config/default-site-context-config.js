/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../providers/context-service-map';
/**
 * @return {?}
 */
export function defaultSiteContextConfigFactory() {
    return {
        siteContext: {
            parameters: {
                [LANGUAGE_CONTEXT_ID]: {
                    persistence: 'route',
                    defaultValue: 'en',
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
                    persistence: 'route',
                    defaultValue: 'USD',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRzFDLE1BQU0sVUFBVSwrQkFBK0I7SUFDN0MsT0FBTztRQUNMLFdBQVcsRUFBRTtZQUNYLFVBQVUsRUFBRTtnQkFDVixDQUFDLG1CQUFtQixDQUFDLEVBQUU7b0JBQ3JCLFdBQVcsRUFBRSxPQUFPO29CQUNwQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDTDtpQkFDRjtnQkFDRCxDQUFDLG1CQUFtQixDQUFDLEVBQUU7b0JBQ3JCLFdBQVcsRUFBRSxPQUFPO29CQUNwQixZQUFZLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxFQUFFO3dCQUNOLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG59IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkoKTogU2l0ZUNvbnRleHRDb25maWcge1xuICByZXR1cm4ge1xuICAgIHNpdGVDb250ZXh0OiB7XG4gICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgIFtMQU5HVUFHRV9DT05URVhUX0lEXToge1xuICAgICAgICAgIHBlcnNpc3RlbmNlOiAncm91dGUnLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ2VuJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICdlbicsXG4gICAgICAgICAgICAnZGUnLFxuICAgICAgICAgICAgJ2phJyxcbiAgICAgICAgICAgICd6aCcsXG4gICAgICAgICAgICAncnUnLFxuICAgICAgICAgICAgJ2ZyJyxcbiAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAnaXQnLFxuICAgICAgICAgICAgJ2VzJyxcbiAgICAgICAgICAgICd1aycsXG4gICAgICAgICAgICAncGwnLFxuICAgICAgICAgICAgJ25sJyxcbiAgICAgICAgICAgICdoaScsXG4gICAgICAgICAgICAnYXInLFxuICAgICAgICAgICAgJ3B0JyxcbiAgICAgICAgICAgICdibicsXG4gICAgICAgICAgICAncGEnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFtDVVJSRU5DWV9DT05URVhUX0lEXToge1xuICAgICAgICAgIHBlcnNpc3RlbmNlOiAncm91dGUnLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ1VTRCcsXG4gICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAnVVNEJyxcbiAgICAgICAgICAgICdFVVInLFxuICAgICAgICAgICAgJ0pQWScsXG4gICAgICAgICAgICAnR0JQJyxcbiAgICAgICAgICAgICdBVUQnLFxuICAgICAgICAgICAgJ0NBRCcsXG4gICAgICAgICAgICAnQ0hGJyxcbiAgICAgICAgICAgICdDTlknLFxuICAgICAgICAgICAgJ1NFSycsXG4gICAgICAgICAgICAnTlpEJyxcbiAgICAgICAgICAgICdNWE4nLFxuICAgICAgICAgICAgJ1NHRCcsXG4gICAgICAgICAgICAnSEtEJyxcbiAgICAgICAgICAgICdOT0snLFxuICAgICAgICAgICAgJ0tSVycsXG4gICAgICAgICAgICAnVFJZJyxcbiAgICAgICAgICAgICdSVUInLFxuICAgICAgICAgICAgJ0lOUicsXG4gICAgICAgICAgICAnQlJMJyxcbiAgICAgICAgICAgICdaQVInLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXX0=