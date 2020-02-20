export function mockTranslate(key, options) {
    if (options === void 0) { options = {}; }
    var optionsString = Object.keys(options)
        .sort()
        .map(function (optionName) { return optionName + ":" + options[optionName]; })
        .join(' ');
    return optionsString ? key + " " + optionsString : key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90ZXN0aW5nL21vY2stdHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBVyxFQUFFLE9BQWlCO0lBQWpCLHdCQUFBLEVBQUEsWUFBaUI7SUFDMUQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkMsSUFBSSxFQUFFO1NBQ04sR0FBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUcsVUFBVSxTQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUcsRUFBdEMsQ0FBc0MsQ0FBQztTQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLGFBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbW9ja1RyYW5zbGF0ZShrZXk6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pIHtcbiAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgLnNvcnQoKVxuICAgIC5tYXAob3B0aW9uTmFtZSA9PiBgJHtvcHRpb25OYW1lfToke29wdGlvbnNbb3B0aW9uTmFtZV19YClcbiAgICAuam9pbignICcpO1xuICByZXR1cm4gb3B0aW9uc1N0cmluZyA/IGAke2tleX0gJHtvcHRpb25zU3RyaW5nfWAgOiBrZXk7XG59XG4iXX0=