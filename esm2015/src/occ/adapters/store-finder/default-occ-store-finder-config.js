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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2Mtc3RvcmUtZmluZGVyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc3RvcmUtZmluZGVyL2RlZmF1bHQtb2NjLXN0b3JlLWZpbmRlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQWM7SUFDcEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLE1BQU0sRUFDSiw2UUFBNlE7Z0JBQy9RLFlBQVksRUFBRSxxQkFBcUI7YUFDcEM7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NTdG9yZUZpbmRlckNvbmZpZzogT2NjQ29uZmlnID0ge1xuICBiYWNrZW5kOiB7XG4gICAgb2NjOiB7XG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgc3RvcmU6ICdzdG9yZXMvJHtzdG9yZUlkfT9maWVsZHM9RlVMTCcsXG4gICAgICAgIHN0b3JlczpcbiAgICAgICAgICAnc3RvcmVzP2ZpZWxkcz1zdG9yZXMobmFtZSxkaXNwbGF5TmFtZSxmb3JtYXR0ZWREaXN0YW5jZSxvcGVuaW5nSG91cnMod2Vla0RheU9wZW5pbmdMaXN0KEZVTEwpLHNwZWNpYWxEYXlPcGVuaW5nTGlzdChGVUxMKSksZ2VvUG9pbnQobGF0aXR1ZGUsbG9uZ2l0dWRlKSxhZGRyZXNzKGxpbmUxLGxpbmUyLHRvd24scmVnaW9uKEZVTEwpLHBvc3RhbENvZGUscGhvbmUsY291bnRyeSxlbWFpbCksIGZlYXR1cmVzKSxwYWdpbmF0aW9uKERFRkFVTFQpLHNvcnRzKERFRkFVTFQpJyxcbiAgICAgICAgc3RvcmVzY291bnRzOiAnc3RvcmVzL3N0b3Jlc2NvdW50cycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19