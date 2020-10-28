/**
 * Supported OAuth flows.
 */
export var OAuthFlow;
(function (OAuthFlow) {
    /**
     * Flow when username and password is passed to the application and then the application through API fetches tokens from OAuth server.
     */
    OAuthFlow[OAuthFlow["ResourceOwnerPasswordFlow"] = 0] = "ResourceOwnerPasswordFlow";
    /**
     * Flow with redirect to OAuth server where user inputs credentials and the are redirected back with token.
     */
    OAuthFlow[OAuthFlow["ImplicitFlow"] = 1] = "ImplicitFlow";
    /**
     * Similar to Implicit flow, but user is redirected with code that need to later exchange through API for a token.
     */
    OAuthFlow[OAuthFlow["AuthorizationCode"] = 2] = "AuthorizationCode";
})(OAuthFlow || (OAuthFlow = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgtZmxvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL21vZGVscy9vYXV0aC1mbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNuQjs7T0FFRztJQUNILG1GQUF5QixDQUFBO0lBQ3pCOztPQUVHO0lBQ0gseURBQVksQ0FBQTtJQUNaOztPQUVHO0lBQ0gsbUVBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQWJXLFNBQVMsS0FBVCxTQUFTLFFBYXBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdXBwb3J0ZWQgT0F1dGggZmxvd3MuXG4gKi9cbmV4cG9ydCBlbnVtIE9BdXRoRmxvdyB7XG4gIC8qKlxuICAgKiBGbG93IHdoZW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGlzIHBhc3NlZCB0byB0aGUgYXBwbGljYXRpb24gYW5kIHRoZW4gdGhlIGFwcGxpY2F0aW9uIHRocm91Z2ggQVBJIGZldGNoZXMgdG9rZW5zIGZyb20gT0F1dGggc2VydmVyLlxuICAgKi9cbiAgUmVzb3VyY2VPd25lclBhc3N3b3JkRmxvdyxcbiAgLyoqXG4gICAqIEZsb3cgd2l0aCByZWRpcmVjdCB0byBPQXV0aCBzZXJ2ZXIgd2hlcmUgdXNlciBpbnB1dHMgY3JlZGVudGlhbHMgYW5kIHRoZSBhcmUgcmVkaXJlY3RlZCBiYWNrIHdpdGggdG9rZW4uXG4gICAqL1xuICBJbXBsaWNpdEZsb3csXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIEltcGxpY2l0IGZsb3csIGJ1dCB1c2VyIGlzIHJlZGlyZWN0ZWQgd2l0aCBjb2RlIHRoYXQgbmVlZCB0byBsYXRlciBleGNoYW5nZSB0aHJvdWdoIEFQSSBmb3IgYSB0b2tlbi5cbiAgICovXG4gIEF1dGhvcml6YXRpb25Db2RlLFxufVxuIl19