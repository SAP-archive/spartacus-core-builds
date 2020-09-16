export const defaultOccStoreFinderConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2Mtc3RvcmUtZmluZGVyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvZGVmYXVsdC1vY2Mtc3RvcmUtZmluZGVyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBYztJQUNwRCxPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUU7WUFDSCxTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLCtCQUErQjtnQkFDdEMsTUFBTSxFQUNKLDZRQUE2UTtnQkFDL1EsWUFBWSxFQUFFLHFCQUFxQjthQUNwQztTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1N0b3JlRmluZGVyQ29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICBzdG9yZTogJ3N0b3Jlcy8ke3N0b3JlSWR9P2ZpZWxkcz1GVUxMJyxcbiAgICAgICAgc3RvcmVzOlxuICAgICAgICAgICdzdG9yZXM/ZmllbGRzPXN0b3JlcyhuYW1lLGRpc3BsYXlOYW1lLGZvcm1hdHRlZERpc3RhbmNlLG9wZW5pbmdIb3Vycyh3ZWVrRGF5T3BlbmluZ0xpc3QoRlVMTCksc3BlY2lhbERheU9wZW5pbmdMaXN0KEZVTEwpKSxnZW9Qb2ludChsYXRpdHVkZSxsb25naXR1ZGUpLGFkZHJlc3MobGluZTEsbGluZTIsdG93bixyZWdpb24oRlVMTCkscG9zdGFsQ29kZSxwaG9uZSxjb3VudHJ5LGVtYWlsKSwgZmVhdHVyZXMpLHBhZ2luYXRpb24oREVGQVVMVCksc29ydHMoREVGQVVMVCknLFxuICAgICAgICBzdG9yZXNjb3VudHM6ICdzdG9yZXMvc3RvcmVzY291bnRzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=