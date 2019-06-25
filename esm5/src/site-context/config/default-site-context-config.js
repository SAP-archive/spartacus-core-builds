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
    var _a;
    return {
        context: {
            parameters: (_a = {},
                _a[LANGUAGE_CONTEXT_ID] = {
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
                _a[CURRENCY_CONTEXT_ID] = {
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
                _a),
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUU5RSxNQUFNLFVBQVUsK0JBQStCOztJQUM3QyxPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AsVUFBVTtnQkFDUixHQUFDLG1CQUFtQixJQUFHO29CQUNyQixXQUFXLEVBQUUsa0JBQWtCLENBQUMsS0FBSztvQkFDckMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTt3QkFDSixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDTDtpQkFDRjtnQkFDRCxHQUFDLG1CQUFtQixJQUFHO29CQUNyQixXQUFXLEVBQUUsa0JBQWtCLENBQUMsS0FBSztvQkFDckMsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTjtpQkFDRjttQkFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxufSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5pbXBvcnQgeyBDb250ZXh0UGVyc2lzdGVuY2UsIFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkoKTogU2l0ZUNvbnRleHRDb25maWcge1xuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IHtcbiAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiB7XG4gICAgICAgICAgcGVyc2lzdGVuY2U6IENvbnRleHRQZXJzaXN0ZW5jZS5ST1VURSxcbiAgICAgICAgICBkZWZhdWx0OiAnZW4nLFxuICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgJ2VuJyxcbiAgICAgICAgICAgICdkZScsXG4gICAgICAgICAgICAnamEnLFxuICAgICAgICAgICAgJ3poJyxcbiAgICAgICAgICAgICdydScsXG4gICAgICAgICAgICAnZnInLFxuICAgICAgICAgICAgJ3RyJyxcbiAgICAgICAgICAgICdpdCcsXG4gICAgICAgICAgICAnZXMnLFxuICAgICAgICAgICAgJ3VrJyxcbiAgICAgICAgICAgICdwbCcsXG4gICAgICAgICAgICAnbmwnLFxuICAgICAgICAgICAgJ2hpJyxcbiAgICAgICAgICAgICdhcicsXG4gICAgICAgICAgICAncHQnLFxuICAgICAgICAgICAgJ2JuJyxcbiAgICAgICAgICAgICdwYScsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiB7XG4gICAgICAgICAgcGVyc2lzdGVuY2U6IENvbnRleHRQZXJzaXN0ZW5jZS5ST1VURSxcbiAgICAgICAgICBkZWZhdWx0OiAnVVNEJyxcbiAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICdVU0QnLFxuICAgICAgICAgICAgJ0VVUicsXG4gICAgICAgICAgICAnSlBZJyxcbiAgICAgICAgICAgICdHQlAnLFxuICAgICAgICAgICAgJ0FVRCcsXG4gICAgICAgICAgICAnQ0FEJyxcbiAgICAgICAgICAgICdDSEYnLFxuICAgICAgICAgICAgJ0NOWScsXG4gICAgICAgICAgICAnU0VLJyxcbiAgICAgICAgICAgICdOWkQnLFxuICAgICAgICAgICAgJ01YTicsXG4gICAgICAgICAgICAnU0dEJyxcbiAgICAgICAgICAgICdIS0QnLFxuICAgICAgICAgICAgJ05PSycsXG4gICAgICAgICAgICAnS1JXJyxcbiAgICAgICAgICAgICdUUlknLFxuICAgICAgICAgICAgJ1JVQicsXG4gICAgICAgICAgICAnSU5SJyxcbiAgICAgICAgICAgICdCUkwnLFxuICAgICAgICAgICAgJ1pBUicsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==