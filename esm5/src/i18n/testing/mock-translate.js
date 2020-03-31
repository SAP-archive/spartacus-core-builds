export function mockTranslate(key, options) {
    if (options === void 0) { options = {}; }
    var optionsString = Object.keys(options)
        .sort()
        .map(function (optionName) { return optionName + ":" + options[optionName]; })
        .join(' ');
    return optionsString ? key + " " + optionsString : key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90ZXN0aW5nL21vY2stdHJhbnNsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBVyxFQUFFLE9BQWlCO0lBQWpCLHdCQUFBLEVBQUEsWUFBaUI7SUFDMUQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkMsSUFBSSxFQUFFO1NBQ04sR0FBRyxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUcsVUFBVSxTQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUcsRUFBdEMsQ0FBc0MsQ0FBQztTQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLGFBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbW9ja1RyYW5zbGF0ZShrZXk6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pIHtcbiAgY29uc3Qgb3B0aW9uc1N0cmluZyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgLnNvcnQoKVxuICAgIC5tYXAoKG9wdGlvbk5hbWUpID0+IGAke29wdGlvbk5hbWV9OiR7b3B0aW9uc1tvcHRpb25OYW1lXX1gKVxuICAgIC5qb2luKCcgJyk7XG4gIHJldHVybiBvcHRpb25zU3RyaW5nID8gYCR7a2V5fSAke29wdGlvbnNTdHJpbmd9YCA6IGtleTtcbn1cbiJdfQ==