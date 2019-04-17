/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../providers/context-service-map';
/**
 * @return {?}
 */
export function defaultSiteContextConfigFactory() {
    var _a;
    return {
        siteContext: {
            parameters: (_a = {},
                _a[LANGUAGE_CONTEXT_ID] = {
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
                _a[CURRENCY_CONTEXT_ID] = {
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
                _a),
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRTFDLE1BQU0sVUFBVSwrQkFBK0I7O0lBQzdDLE9BQU87UUFDTCxXQUFXLEVBQUU7WUFDWCxVQUFVO2dCQUNSLEdBQUMsbUJBQW1CLElBQUc7b0JBQ3JCLFdBQVcsRUFBRSxPQUFPO29CQUNwQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDTDtpQkFDRjtnQkFDRCxHQUFDLG1CQUFtQixJQUFHO29CQUNyQixXQUFXLEVBQUUsT0FBTztvQkFDcEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLE1BQU0sRUFBRTt3QkFDTixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ047aUJBQ0Y7bUJBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbn0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSgpOiBTaXRlQ29udGV4dENvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgc2l0ZUNvbnRleHQ6IHtcbiAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiB7XG4gICAgICAgICAgcGVyc2lzdGVuY2U6ICdyb3V0ZScsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiAnZW4nLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgJ2VuJyxcbiAgICAgICAgICAgICdkZScsXG4gICAgICAgICAgICAnamEnLFxuICAgICAgICAgICAgJ3poJyxcbiAgICAgICAgICAgICdydScsXG4gICAgICAgICAgICAnZnInLFxuICAgICAgICAgICAgJ3RyJyxcbiAgICAgICAgICAgICdpdCcsXG4gICAgICAgICAgICAnZXMnLFxuICAgICAgICAgICAgJ3VrJyxcbiAgICAgICAgICAgICdwbCcsXG4gICAgICAgICAgICAnbmwnLFxuICAgICAgICAgICAgJ2hpJyxcbiAgICAgICAgICAgICdhcicsXG4gICAgICAgICAgICAncHQnLFxuICAgICAgICAgICAgJ2JuJyxcbiAgICAgICAgICAgICdwYScsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiB7XG4gICAgICAgICAgcGVyc2lzdGVuY2U6ICdyb3V0ZScsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiAnVVNEJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICdVU0QnLFxuICAgICAgICAgICAgJ0VVUicsXG4gICAgICAgICAgICAnSlBZJyxcbiAgICAgICAgICAgICdHQlAnLFxuICAgICAgICAgICAgJ0FVRCcsXG4gICAgICAgICAgICAnQ0FEJyxcbiAgICAgICAgICAgICdDSEYnLFxuICAgICAgICAgICAgJ0NOWScsXG4gICAgICAgICAgICAnU0VLJyxcbiAgICAgICAgICAgICdOWkQnLFxuICAgICAgICAgICAgJ01YTicsXG4gICAgICAgICAgICAnU0dEJyxcbiAgICAgICAgICAgICdIS0QnLFxuICAgICAgICAgICAgJ05PSycsXG4gICAgICAgICAgICAnS1JXJyxcbiAgICAgICAgICAgICdUUlknLFxuICAgICAgICAgICAgJ1JVQicsXG4gICAgICAgICAgICAnSU5SJyxcbiAgICAgICAgICAgICdCUkwnLFxuICAgICAgICAgICAgJ1pBUicsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==