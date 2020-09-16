import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../providers/context-ids';
export function defaultSiteContextConfigFactory() {
    return {
        context: {
            [LANGUAGE_CONTEXT_ID]: [
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
            [CURRENCY_CONTEXT_ID]: [
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc2l0ZS1jb250ZXh0L2NvbmZpZy9kZWZhdWx0LXNpdGUtY29udGV4dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxNQUFNLFVBQVUsK0JBQStCO0lBQzdDLE9BQU87UUFDTCxPQUFPLEVBQUU7WUFDUCxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ3JCLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTtnQkFDSixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osSUFBSTthQUNMO1lBQ0QsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2dCQUNyQixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7YUFDTjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxufSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFNpdGVDb250ZXh0Q29uZmlnRmFjdG9yeSgpOiBTaXRlQ29udGV4dENvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgY29udGV4dDoge1xuICAgICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiBbXG4gICAgICAgICdlbicsXG4gICAgICAgICdkZScsXG4gICAgICAgICdqYScsXG4gICAgICAgICd6aCcsXG4gICAgICAgICdydScsXG4gICAgICAgICdmcicsXG4gICAgICAgICd0cicsXG4gICAgICAgICdpdCcsXG4gICAgICAgICdlcycsXG4gICAgICAgICd1aycsXG4gICAgICAgICdwbCcsXG4gICAgICAgICdubCcsXG4gICAgICAgICdoaScsXG4gICAgICAgICdhcicsXG4gICAgICAgICdwdCcsXG4gICAgICAgICdibicsXG4gICAgICAgICdwYScsXG4gICAgICBdLFxuICAgICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBbXG4gICAgICAgICdVU0QnLFxuICAgICAgICAnRVVSJyxcbiAgICAgICAgJ0pQWScsXG4gICAgICAgICdHQlAnLFxuICAgICAgICAnQVVEJyxcbiAgICAgICAgJ0NBRCcsXG4gICAgICAgICdDSEYnLFxuICAgICAgICAnQ05ZJyxcbiAgICAgICAgJ1NFSycsXG4gICAgICAgICdOWkQnLFxuICAgICAgICAnTVhOJyxcbiAgICAgICAgJ1NHRCcsXG4gICAgICAgICdIS0QnLFxuICAgICAgICAnTk9LJyxcbiAgICAgICAgJ0tSVycsXG4gICAgICAgICdUUlknLFxuICAgICAgICAnUlVCJyxcbiAgICAgICAgJ0lOUicsXG4gICAgICAgICdCUkwnLFxuICAgICAgICAnWkFSJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==