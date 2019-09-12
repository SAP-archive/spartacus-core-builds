/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultOccStoreFinderConfig = {
    backend: {
        occ: {
            endpoints: {
                store: 'stores/${storeId}?fields=FULL',
                stores: 'stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)',
                storescounts: 'stores/storescounts',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2Mtc3RvcmUtZmluZGVyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc3RvcmUtZmluZGVyL2RlZmF1bHQtb2NjLXN0b3JlLWZpbmRlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sMkJBQTJCLEdBQWM7SUFDcEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLE1BQU0sRUFDSiw2UUFBNlE7Z0JBQy9RLFlBQVksRUFBRSxxQkFBcUI7YUFDcEM7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T2NjU3RvcmVGaW5kZXJDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHN0b3JlOiAnc3RvcmVzLyR7c3RvcmVJZH0/ZmllbGRzPUZVTEwnLFxuICAgICAgICBzdG9yZXM6XG4gICAgICAgICAgJ3N0b3Jlcz9maWVsZHM9c3RvcmVzKG5hbWUsZGlzcGxheU5hbWUsZm9ybWF0dGVkRGlzdGFuY2Usb3BlbmluZ0hvdXJzKHdlZWtEYXlPcGVuaW5nTGlzdChGVUxMKSxzcGVjaWFsRGF5T3BlbmluZ0xpc3QoRlVMTCkpLGdlb1BvaW50KGxhdGl0dWRlLGxvbmdpdHVkZSksYWRkcmVzcyhsaW5lMSxsaW5lMix0b3duLHJlZ2lvbihGVUxMKSxwb3N0YWxDb2RlLHBob25lLGNvdW50cnksZW1haWwpLCBmZWF0dXJlcykscGFnaW5hdGlvbihERUZBVUxUKSxzb3J0cyhERUZBVUxUKScsXG4gICAgICAgIHN0b3Jlc2NvdW50czogJ3N0b3Jlcy9zdG9yZXNjb3VudHMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==