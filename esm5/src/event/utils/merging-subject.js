import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
// PRIVATE API
/**
 * Allows for dynamic adding and removing source observables
 * and exposes them as one merged observable at a property `output$`.
 *
 * Thanks to the `share()` operator used inside, it subscribes to source observables
 * only when someone subscribes to it. And it unsubscribes from source observables
 * when the counter of consumers drops to 0.
 *
 * **To avoid memory leaks**, all manually added sources should be manually removed
 * when not plan to emit values anymore. In particular closed event sources won't be
 * automatically removed.
 */
var MergingSubject = /** @class */ (function () {
    function MergingSubject() {
        var _this = this;
        /**
         * List of already added sources (but not removed yet)
         */
        this.sources = [];
        /**
         * For each source: it stores a subscription responsible for
         * passing all values from source to the consumer
         */
        this.subscriptionsToSources = new Map();
        /**
         * Observable with all sources merged.
         *
         * Only after subscribing to it, under the hood it subscribes to the source observables.
         * When the number of subscribers drops to 0, it unsubscribes from all source observables.
         * But if later on something subscribes to it again, it subscribes to the source observables again.
         *
         * It multicasts the emissions for each subscriber.
         */
        this.output$ = new Observable(function (consumer) {
            // There can be only 0 or 1 consumer of this observable coming from the `share()` operator
            // that is piped right after this observable.
            // `share()` not only multicasts the results but also  When all end-subscribers unsubscribe from `share()` operator, it will unsubscribe
            // from this observable (by the nature `refCount`-nature of the `share()` operator).
            _this.consumer = consumer;
            _this.bindAllSourcesToConsumer(consumer);
            return function () {
                _this.consumer = null;
                _this.unbindAllSourcesFromConsumer();
            };
        }).pipe(share());
        /**
         * Reference to the subscriber coming from the `share()` operator piped to the `output$` observable.
         * For more, see docs of the `output$` observable;
         */
        this.consumer = null;
    }
    /**
     * Registers the given source to pass its values to the `output$` observable.
     *
     * It does nothing, when the source has been already added (but not removed yet).
     */
    MergingSubject.prototype.add = function (source) {
        if (this.has(source)) {
            return;
        }
        if (this.consumer) {
            this.bindSourceToConsumer(source, this.consumer);
        }
        this.sources.push(source);
    };
    /**
     * Starts passing all values from already added sources to consumer
     */
    MergingSubject.prototype.bindAllSourcesToConsumer = function (consumer) {
        var _this = this;
        this.sources.forEach(function (source) {
            return _this.bindSourceToConsumer(source, consumer);
        });
    };
    /**
     * Stops passing all values from already added sources to consumer
     * (if any consumer is active at the moment)
     */
    MergingSubject.prototype.unbindAllSourcesFromConsumer = function () {
        var _this = this;
        this.sources.forEach(function (source) { return _this.unbindSourceFromConsumer(source); });
    };
    /**
     * Starts passing all values from a single source to consumer
     */
    MergingSubject.prototype.bindSourceToConsumer = function (source, consumer) {
        var subscriptionToSource = source.subscribe(function (val) { return consumer.next(val); }); // passes all emissions from source to consumer
        this.subscriptionsToSources.set(source, subscriptionToSource);
    };
    /**
     * Stops passing all values from a single source to consumer
     * (if any consumer is active at the moment)
     */
    MergingSubject.prototype.unbindSourceFromConsumer = function (source) {
        var subscriptionToSource = this.subscriptionsToSources.get(source);
        if (subscriptionToSource !== undefined) {
            subscriptionToSource.unsubscribe();
            this.subscriptionsToSources.delete(source);
        }
    };
    /**
     * Unregisters the given source so it stops passing its values to `output$` observable.
     *
     * Should be used when a source is no longer maintained **to avoid memory leaks**.
     */
    MergingSubject.prototype.remove = function (source) {
        // clear binding from source to consumer (if any consumer exists at the moment)
        this.unbindSourceFromConsumer(source);
        // remove source from array
        var i;
        if ((i = this.sources.findIndex(function (s) { return s === source; })) !== -1) {
            this.sources.splice(i, 1);
        }
    };
    /**
     * Returns whether the given source has been already addded
     */
    MergingSubject.prototype.has = function (source) {
        return this.sources.includes(source);
    };
    return MergingSubject;
}());
export { MergingSubject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2luZy1zdWJqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2V2ZW50L3V0aWxzL21lcmdpbmctc3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsY0FBYztBQUVkOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7SUFBQTtRQUFBLGlCQXFIQztRQXBIQzs7V0FFRztRQUNLLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBRXRDOzs7V0FHRztRQUNLLDJCQUFzQixHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBRXhFOzs7Ozs7OztXQVFHO1FBQ00sWUFBTyxHQUFrQixJQUFJLFVBQVUsQ0FBSSxVQUFDLFFBQVE7WUFDM0QsMEZBQTBGO1lBQzFGLDZDQUE2QztZQUM3Qyx3SUFBd0k7WUFDeEksb0ZBQW9GO1lBRXBGLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4QyxPQUFPO2dCQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVqQjs7O1dBR0c7UUFDSyxhQUFRLEdBQW9CLElBQUksQ0FBQztJQTZFM0MsQ0FBQztJQTNFQzs7OztPQUlHO0lBQ0gsNEJBQUcsR0FBSCxVQUFJLE1BQXFCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxpREFBd0IsR0FBaEMsVUFBaUMsUUFBdUI7UUFBeEQsaUJBSUM7UUFIQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDMUIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztRQUEzQyxDQUEyQyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNLLHFEQUE0QixHQUFwQztRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7SUFDSyw2Q0FBb0IsR0FBNUIsVUFBNkIsTUFBcUIsRUFBRSxRQUF1QjtRQUN6RSxJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQywrQ0FBK0M7UUFDM0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaURBQXdCLEdBQWhDLFVBQWlDLE1BQXFCO1FBQ3BELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtZQUN0QyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBTSxHQUFOLFVBQU8sTUFBcUI7UUFDMUIsK0VBQStFO1FBQy9FLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QywyQkFBMkI7UUFDM0IsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLE1BQU0sRUFBWixDQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILDRCQUFHLEdBQUgsVUFBSSxNQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFySEQsSUFxSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBQUklWQVRFIEFQSVxuXG4vKipcbiAqIEFsbG93cyBmb3IgZHluYW1pYyBhZGRpbmcgYW5kIHJlbW92aW5nIHNvdXJjZSBvYnNlcnZhYmxlc1xuICogYW5kIGV4cG9zZXMgdGhlbSBhcyBvbmUgbWVyZ2VkIG9ic2VydmFibGUgYXQgYSBwcm9wZXJ0eSBgb3V0cHV0JGAuXG4gKlxuICogVGhhbmtzIHRvIHRoZSBgc2hhcmUoKWAgb3BlcmF0b3IgdXNlZCBpbnNpZGUsIGl0IHN1YnNjcmliZXMgdG8gc291cmNlIG9ic2VydmFibGVzXG4gKiBvbmx5IHdoZW4gc29tZW9uZSBzdWJzY3JpYmVzIHRvIGl0LiBBbmQgaXQgdW5zdWJzY3JpYmVzIGZyb20gc291cmNlIG9ic2VydmFibGVzXG4gKiB3aGVuIHRoZSBjb3VudGVyIG9mIGNvbnN1bWVycyBkcm9wcyB0byAwLlxuICpcbiAqICoqVG8gYXZvaWQgbWVtb3J5IGxlYWtzKiosIGFsbCBtYW51YWxseSBhZGRlZCBzb3VyY2VzIHNob3VsZCBiZSBtYW51YWxseSByZW1vdmVkXG4gKiB3aGVuIG5vdCBwbGFuIHRvIGVtaXQgdmFsdWVzIGFueW1vcmUuIEluIHBhcnRpY3VsYXIgY2xvc2VkIGV2ZW50IHNvdXJjZXMgd29uJ3QgYmVcbiAqIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lcmdpbmdTdWJqZWN0PFQ+IHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxyZWFkeSBhZGRlZCBzb3VyY2VzIChidXQgbm90IHJlbW92ZWQgeWV0KVxuICAgKi9cbiAgcHJpdmF0ZSBzb3VyY2VzOiBPYnNlcnZhYmxlPFQ+W10gPSBbXTtcblxuICAvKipcbiAgICogRm9yIGVhY2ggc291cmNlOiBpdCBzdG9yZXMgYSBzdWJzY3JpcHRpb24gcmVzcG9uc2libGUgZm9yXG4gICAqIHBhc3NpbmcgYWxsIHZhbHVlcyBmcm9tIHNvdXJjZSB0byB0aGUgY29uc3VtZXJcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uc1RvU291cmNlcyA9IG5ldyBNYXA8T2JzZXJ2YWJsZTxUPiwgU3Vic2NyaXB0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHdpdGggYWxsIHNvdXJjZXMgbWVyZ2VkLlxuICAgKlxuICAgKiBPbmx5IGFmdGVyIHN1YnNjcmliaW5nIHRvIGl0LCB1bmRlciB0aGUgaG9vZCBpdCBzdWJzY3JpYmVzIHRvIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZXMuXG4gICAqIFdoZW4gdGhlIG51bWJlciBvZiBzdWJzY3JpYmVycyBkcm9wcyB0byAwLCBpdCB1bnN1YnNjcmliZXMgZnJvbSBhbGwgc291cmNlIG9ic2VydmFibGVzLlxuICAgKiBCdXQgaWYgbGF0ZXIgb24gc29tZXRoaW5nIHN1YnNjcmliZXMgdG8gaXQgYWdhaW4sIGl0IHN1YnNjcmliZXMgdG8gdGhlIHNvdXJjZSBvYnNlcnZhYmxlcyBhZ2Fpbi5cbiAgICpcbiAgICogSXQgbXVsdGljYXN0cyB0aGUgZW1pc3Npb25zIGZvciBlYWNoIHN1YnNjcmliZXIuXG4gICAqL1xuICByZWFkb25seSBvdXRwdXQkOiBPYnNlcnZhYmxlPFQ+ID0gbmV3IE9ic2VydmFibGU8VD4oKGNvbnN1bWVyKSA9PiB7XG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgMCBvciAxIGNvbnN1bWVyIG9mIHRoaXMgb2JzZXJ2YWJsZSBjb21pbmcgZnJvbSB0aGUgYHNoYXJlKClgIG9wZXJhdG9yXG4gICAgLy8gdGhhdCBpcyBwaXBlZCByaWdodCBhZnRlciB0aGlzIG9ic2VydmFibGUuXG4gICAgLy8gYHNoYXJlKClgIG5vdCBvbmx5IG11bHRpY2FzdHMgdGhlIHJlc3VsdHMgYnV0IGFsc28gIFdoZW4gYWxsIGVuZC1zdWJzY3JpYmVycyB1bnN1YnNjcmliZSBmcm9tIGBzaGFyZSgpYCBvcGVyYXRvciwgaXQgd2lsbCB1bnN1YnNjcmliZVxuICAgIC8vIGZyb20gdGhpcyBvYnNlcnZhYmxlIChieSB0aGUgbmF0dXJlIGByZWZDb3VudGAtbmF0dXJlIG9mIHRoZSBgc2hhcmUoKWAgb3BlcmF0b3IpLlxuXG4gICAgdGhpcy5jb25zdW1lciA9IGNvbnN1bWVyO1xuICAgIHRoaXMuYmluZEFsbFNvdXJjZXNUb0NvbnN1bWVyKGNvbnN1bWVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLmNvbnN1bWVyID0gbnVsbDtcbiAgICAgIHRoaXMudW5iaW5kQWxsU291cmNlc0Zyb21Db25zdW1lcigpO1xuICAgIH07XG4gIH0pLnBpcGUoc2hhcmUoKSk7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgc3Vic2NyaWJlciBjb21pbmcgZnJvbSB0aGUgYHNoYXJlKClgIG9wZXJhdG9yIHBpcGVkIHRvIHRoZSBgb3V0cHV0JGAgb2JzZXJ2YWJsZS5cbiAgICogRm9yIG1vcmUsIHNlZSBkb2NzIG9mIHRoZSBgb3V0cHV0JGAgb2JzZXJ2YWJsZTtcbiAgICovXG4gIHByaXZhdGUgY29uc3VtZXI6IFN1YnNjcmliZXI8YW55PiA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc291cmNlIHRvIHBhc3MgaXRzIHZhbHVlcyB0byB0aGUgYG91dHB1dCRgIG9ic2VydmFibGUuXG4gICAqXG4gICAqIEl0IGRvZXMgbm90aGluZywgd2hlbiB0aGUgc291cmNlIGhhcyBiZWVuIGFscmVhZHkgYWRkZWQgKGJ1dCBub3QgcmVtb3ZlZCB5ZXQpLlxuICAgKi9cbiAgYWRkKHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhcyhzb3VyY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3VtZXIpIHtcbiAgICAgIHRoaXMuYmluZFNvdXJjZVRvQ29uc3VtZXIoc291cmNlLCB0aGlzLmNvbnN1bWVyKTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2VzLnB1c2goc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcGFzc2luZyBhbGwgdmFsdWVzIGZyb20gYWxyZWFkeSBhZGRlZCBzb3VyY2VzIHRvIGNvbnN1bWVyXG4gICAqL1xuICBwcml2YXRlIGJpbmRBbGxTb3VyY2VzVG9Db25zdW1lcihjb25zdW1lcjogU3Vic2NyaWJlcjxUPikge1xuICAgIHRoaXMuc291cmNlcy5mb3JFYWNoKChzb3VyY2UpID0+XG4gICAgICB0aGlzLmJpbmRTb3VyY2VUb0NvbnN1bWVyKHNvdXJjZSwgY29uc3VtZXIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwYXNzaW5nIGFsbCB2YWx1ZXMgZnJvbSBhbHJlYWR5IGFkZGVkIHNvdXJjZXMgdG8gY29uc3VtZXJcbiAgICogKGlmIGFueSBjb25zdW1lciBpcyBhY3RpdmUgYXQgdGhlIG1vbWVudClcbiAgICovXG4gIHByaXZhdGUgdW5iaW5kQWxsU291cmNlc0Zyb21Db25zdW1lcigpIHtcbiAgICB0aGlzLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PiB0aGlzLnVuYmluZFNvdXJjZUZyb21Db25zdW1lcihzb3VyY2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcGFzc2luZyBhbGwgdmFsdWVzIGZyb20gYSBzaW5nbGUgc291cmNlIHRvIGNvbnN1bWVyXG4gICAqL1xuICBwcml2YXRlIGJpbmRTb3VyY2VUb0NvbnN1bWVyKHNvdXJjZTogT2JzZXJ2YWJsZTxUPiwgY29uc3VtZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb25Ub1NvdXJjZSA9IHNvdXJjZS5zdWJzY3JpYmUoKHZhbCkgPT4gY29uc3VtZXIubmV4dCh2YWwpKTsgLy8gcGFzc2VzIGFsbCBlbWlzc2lvbnMgZnJvbSBzb3VyY2UgdG8gY29uc3VtZXJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNUb1NvdXJjZXMuc2V0KHNvdXJjZSwgc3Vic2NyaXB0aW9uVG9Tb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBhc3NpbmcgYWxsIHZhbHVlcyBmcm9tIGEgc2luZ2xlIHNvdXJjZSB0byBjb25zdW1lclxuICAgKiAoaWYgYW55IGNvbnN1bWVyIGlzIGFjdGl2ZSBhdCB0aGUgbW9tZW50KVxuICAgKi9cbiAgcHJpdmF0ZSB1bmJpbmRTb3VyY2VGcm9tQ29uc3VtZXIoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uVG9Tb3VyY2UgPSB0aGlzLnN1YnNjcmlwdGlvbnNUb1NvdXJjZXMuZ2V0KHNvdXJjZSk7XG4gICAgaWYgKHN1YnNjcmlwdGlvblRvU291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN1YnNjcmlwdGlvblRvU291cmNlLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNUb1NvdXJjZXMuZGVsZXRlKHNvdXJjZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBnaXZlbiBzb3VyY2Ugc28gaXQgc3RvcHMgcGFzc2luZyBpdHMgdmFsdWVzIHRvIGBvdXRwdXQkYCBvYnNlcnZhYmxlLlxuICAgKlxuICAgKiBTaG91bGQgYmUgdXNlZCB3aGVuIGEgc291cmNlIGlzIG5vIGxvbmdlciBtYWludGFpbmVkICoqdG8gYXZvaWQgbWVtb3J5IGxlYWtzKiouXG4gICAqL1xuICByZW1vdmUoc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogdm9pZCB7XG4gICAgLy8gY2xlYXIgYmluZGluZyBmcm9tIHNvdXJjZSB0byBjb25zdW1lciAoaWYgYW55IGNvbnN1bWVyIGV4aXN0cyBhdCB0aGUgbW9tZW50KVxuICAgIHRoaXMudW5iaW5kU291cmNlRnJvbUNvbnN1bWVyKHNvdXJjZSk7XG5cbiAgICAvLyByZW1vdmUgc291cmNlIGZyb20gYXJyYXlcbiAgICBsZXQgaTogbnVtYmVyO1xuICAgIGlmICgoaSA9IHRoaXMuc291cmNlcy5maW5kSW5kZXgoKHMpID0+IHMgPT09IHNvdXJjZSkpICE9PSAtMSkge1xuICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBzb3VyY2UgaGFzIGJlZW4gYWxyZWFkeSBhZGRkZWRcbiAgICovXG4gIGhhcyhzb3VyY2U6IE9ic2VydmFibGU8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzLmluY2x1ZGVzKHNvdXJjZSk7XG4gIH1cbn1cbiJdfQ==