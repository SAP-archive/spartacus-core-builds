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
export class MergingSubject {
    constructor() {
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
        this.output$ = new Observable((consumer) => {
            // There can be only 0 or 1 consumer of this observable coming from the `share()` operator
            // that is piped right after this observable.
            // `share()` not only multicasts the results but also  When all end-subscribers unsubscribe from `share()` operator, it will unsubscribe
            // from this observable (by the nature `refCount`-nature of the `share()` operator).
            this.consumer = consumer;
            this.bindAllSourcesToConsumer(consumer);
            return () => {
                this.consumer = null;
                this.unbindAllSourcesFromConsumer();
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
    add(source) {
        if (this.has(source)) {
            return;
        }
        if (this.consumer) {
            this.bindSourceToConsumer(source, this.consumer);
        }
        this.sources.push(source);
    }
    /**
     * Starts passing all values from already added sources to consumer
     */
    bindAllSourcesToConsumer(consumer) {
        this.sources.forEach((source) => this.bindSourceToConsumer(source, consumer));
    }
    /**
     * Stops passing all values from already added sources to consumer
     * (if any consumer is active at the moment)
     */
    unbindAllSourcesFromConsumer() {
        this.sources.forEach((source) => this.unbindSourceFromConsumer(source));
    }
    /**
     * Starts passing all values from a single source to consumer
     */
    bindSourceToConsumer(source, consumer) {
        const subscriptionToSource = source.subscribe((val) => consumer.next(val)); // passes all emissions from source to consumer
        this.subscriptionsToSources.set(source, subscriptionToSource);
    }
    /**
     * Stops passing all values from a single source to consumer
     * (if any consumer is active at the moment)
     */
    unbindSourceFromConsumer(source) {
        const subscriptionToSource = this.subscriptionsToSources.get(source);
        if (subscriptionToSource !== undefined) {
            subscriptionToSource.unsubscribe();
            this.subscriptionsToSources.delete(source);
        }
    }
    /**
     * Unregisters the given source so it stops passing its values to `output$` observable.
     *
     * Should be used when a source is no longer maintained **to avoid memory leaks**.
     */
    remove(source) {
        // clear binding from source to consumer (if any consumer exists at the moment)
        this.unbindSourceFromConsumer(source);
        // remove source from array
        let i;
        if ((i = this.sources.findIndex((s) => s === source)) !== -1) {
            this.sources.splice(i, 1);
        }
    }
    /**
     * Returns whether the given source has been already addded
     */
    has(source) {
        return this.sources.includes(source);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2luZy1zdWJqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvZXZlbnQvdXRpbHMvbWVyZ2luZy1zdWJqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxjQUFjO0FBRWQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNFOztXQUVHO1FBQ0ssWUFBTyxHQUFvQixFQUFFLENBQUM7UUFFdEM7OztXQUdHO1FBQ0ssMkJBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUM7UUFFeEU7Ozs7Ozs7O1dBUUc7UUFDTSxZQUFPLEdBQWtCLElBQUksVUFBVSxDQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDL0QsMEZBQTBGO1lBQzFGLDZDQUE2QztZQUM3Qyx3SUFBd0k7WUFDeEksb0ZBQW9GO1lBRXBGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4QyxPQUFPLEdBQUcsRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFakI7OztXQUdHO1FBQ0ssYUFBUSxHQUFvQixJQUFJLENBQUM7SUE2RTNDLENBQUM7SUEzRUM7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxNQUFxQjtRQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0JBQXdCLENBQUMsUUFBdUI7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNLLDRCQUE0QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0JBQW9CLENBQUMsTUFBcUIsRUFBRSxRQUF1QjtRQUN6RSxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLCtDQUErQztRQUMzSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSyx3QkFBd0IsQ0FBQyxNQUFxQjtRQUNwRCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7WUFDdEMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE1BQXFCO1FBQzFCLCtFQUErRTtRQUMvRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLE1BQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gUFJJVkFURSBBUElcblxuLyoqXG4gKiBBbGxvd3MgZm9yIGR5bmFtaWMgYWRkaW5nIGFuZCByZW1vdmluZyBzb3VyY2Ugb2JzZXJ2YWJsZXNcbiAqIGFuZCBleHBvc2VzIHRoZW0gYXMgb25lIG1lcmdlZCBvYnNlcnZhYmxlIGF0IGEgcHJvcGVydHkgYG91dHB1dCRgLlxuICpcbiAqIFRoYW5rcyB0byB0aGUgYHNoYXJlKClgIG9wZXJhdG9yIHVzZWQgaW5zaWRlLCBpdCBzdWJzY3JpYmVzIHRvIHNvdXJjZSBvYnNlcnZhYmxlc1xuICogb25seSB3aGVuIHNvbWVvbmUgc3Vic2NyaWJlcyB0byBpdC4gQW5kIGl0IHVuc3Vic2NyaWJlcyBmcm9tIHNvdXJjZSBvYnNlcnZhYmxlc1xuICogd2hlbiB0aGUgY291bnRlciBvZiBjb25zdW1lcnMgZHJvcHMgdG8gMC5cbiAqXG4gKiAqKlRvIGF2b2lkIG1lbW9yeSBsZWFrcyoqLCBhbGwgbWFudWFsbHkgYWRkZWQgc291cmNlcyBzaG91bGQgYmUgbWFudWFsbHkgcmVtb3ZlZFxuICogd2hlbiBub3QgcGxhbiB0byBlbWl0IHZhbHVlcyBhbnltb3JlLiBJbiBwYXJ0aWN1bGFyIGNsb3NlZCBldmVudCBzb3VyY2VzIHdvbid0IGJlXG4gKiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXJnaW5nU3ViamVjdDxUPiB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGFscmVhZHkgYWRkZWQgc291cmNlcyAoYnV0IG5vdCByZW1vdmVkIHlldClcbiAgICovXG4gIHByaXZhdGUgc291cmNlczogT2JzZXJ2YWJsZTxUPltdID0gW107XG5cbiAgLyoqXG4gICAqIEZvciBlYWNoIHNvdXJjZTogaXQgc3RvcmVzIGEgc3Vic2NyaXB0aW9uIHJlc3BvbnNpYmxlIGZvclxuICAgKiBwYXNzaW5nIGFsbCB2YWx1ZXMgZnJvbSBzb3VyY2UgdG8gdGhlIGNvbnN1bWVyXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnNUb1NvdXJjZXMgPSBuZXcgTWFwPE9ic2VydmFibGU8VD4sIFN1YnNjcmlwdGlvbj4oKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSB3aXRoIGFsbCBzb3VyY2VzIG1lcmdlZC5cbiAgICpcbiAgICogT25seSBhZnRlciBzdWJzY3JpYmluZyB0byBpdCwgdW5kZXIgdGhlIGhvb2QgaXQgc3Vic2NyaWJlcyB0byB0aGUgc291cmNlIG9ic2VydmFibGVzLlxuICAgKiBXaGVuIHRoZSBudW1iZXIgb2Ygc3Vic2NyaWJlcnMgZHJvcHMgdG8gMCwgaXQgdW5zdWJzY3JpYmVzIGZyb20gYWxsIHNvdXJjZSBvYnNlcnZhYmxlcy5cbiAgICogQnV0IGlmIGxhdGVyIG9uIHNvbWV0aGluZyBzdWJzY3JpYmVzIHRvIGl0IGFnYWluLCBpdCBzdWJzY3JpYmVzIHRvIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZXMgYWdhaW4uXG4gICAqXG4gICAqIEl0IG11bHRpY2FzdHMgdGhlIGVtaXNzaW9ucyBmb3IgZWFjaCBzdWJzY3JpYmVyLlxuICAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0JDogT2JzZXJ2YWJsZTxUPiA9IG5ldyBPYnNlcnZhYmxlPFQ+KChjb25zdW1lcikgPT4ge1xuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IDAgb3IgMSBjb25zdW1lciBvZiB0aGlzIG9ic2VydmFibGUgY29taW5nIGZyb20gdGhlIGBzaGFyZSgpYCBvcGVyYXRvclxuICAgIC8vIHRoYXQgaXMgcGlwZWQgcmlnaHQgYWZ0ZXIgdGhpcyBvYnNlcnZhYmxlLlxuICAgIC8vIGBzaGFyZSgpYCBub3Qgb25seSBtdWx0aWNhc3RzIHRoZSByZXN1bHRzIGJ1dCBhbHNvICBXaGVuIGFsbCBlbmQtc3Vic2NyaWJlcnMgdW5zdWJzY3JpYmUgZnJvbSBgc2hhcmUoKWAgb3BlcmF0b3IsIGl0IHdpbGwgdW5zdWJzY3JpYmVcbiAgICAvLyBmcm9tIHRoaXMgb2JzZXJ2YWJsZSAoYnkgdGhlIG5hdHVyZSBgcmVmQ291bnRgLW5hdHVyZSBvZiB0aGUgYHNoYXJlKClgIG9wZXJhdG9yKS5cblxuICAgIHRoaXMuY29uc3VtZXIgPSBjb25zdW1lcjtcbiAgICB0aGlzLmJpbmRBbGxTb3VyY2VzVG9Db25zdW1lcihjb25zdW1lcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5jb25zdW1lciA9IG51bGw7XG4gICAgICB0aGlzLnVuYmluZEFsbFNvdXJjZXNGcm9tQ29uc3VtZXIoKTtcbiAgICB9O1xuICB9KS5waXBlKHNoYXJlKCkpO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN1YnNjcmliZXIgY29taW5nIGZyb20gdGhlIGBzaGFyZSgpYCBvcGVyYXRvciBwaXBlZCB0byB0aGUgYG91dHB1dCRgIG9ic2VydmFibGUuXG4gICAqIEZvciBtb3JlLCBzZWUgZG9jcyBvZiB0aGUgYG91dHB1dCRgIG9ic2VydmFibGU7XG4gICAqL1xuICBwcml2YXRlIGNvbnN1bWVyOiBTdWJzY3JpYmVyPGFueT4gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGdpdmVuIHNvdXJjZSB0byBwYXNzIGl0cyB2YWx1ZXMgdG8gdGhlIGBvdXRwdXQkYCBvYnNlcnZhYmxlLlxuICAgKlxuICAgKiBJdCBkb2VzIG5vdGhpbmcsIHdoZW4gdGhlIHNvdXJjZSBoYXMgYmVlbiBhbHJlYWR5IGFkZGVkIChidXQgbm90IHJlbW92ZWQgeWV0KS5cbiAgICovXG4gIGFkZChzb3VyY2U6IE9ic2VydmFibGU8VD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXMoc291cmNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN1bWVyKSB7XG4gICAgICB0aGlzLmJpbmRTb3VyY2VUb0NvbnN1bWVyKHNvdXJjZSwgdGhpcy5jb25zdW1lcik7XG4gICAgfVxuICAgIHRoaXMuc291cmNlcy5wdXNoKHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBhc3NpbmcgYWxsIHZhbHVlcyBmcm9tIGFscmVhZHkgYWRkZWQgc291cmNlcyB0byBjb25zdW1lclxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kQWxsU291cmNlc1RvQ29uc3VtZXIoY29uc3VtZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgICB0aGlzLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PlxuICAgICAgdGhpcy5iaW5kU291cmNlVG9Db25zdW1lcihzb3VyY2UsIGNvbnN1bWVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGFzc2luZyBhbGwgdmFsdWVzIGZyb20gYWxyZWFkeSBhZGRlZCBzb3VyY2VzIHRvIGNvbnN1bWVyXG4gICAqIChpZiBhbnkgY29uc3VtZXIgaXMgYWN0aXZlIGF0IHRoZSBtb21lbnQpXG4gICAqL1xuICBwcml2YXRlIHVuYmluZEFsbFNvdXJjZXNGcm9tQ29uc3VtZXIoKSB7XG4gICAgdGhpcy5zb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4gdGhpcy51bmJpbmRTb3VyY2VGcm9tQ29uc3VtZXIoc291cmNlKSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHBhc3NpbmcgYWxsIHZhbHVlcyBmcm9tIGEgc2luZ2xlIHNvdXJjZSB0byBjb25zdW1lclxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kU291cmNlVG9Db25zdW1lcihzb3VyY2U6IE9ic2VydmFibGU8VD4sIGNvbnN1bWVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uVG9Tb3VyY2UgPSBzb3VyY2Uuc3Vic2NyaWJlKCh2YWwpID0+IGNvbnN1bWVyLm5leHQodmFsKSk7IC8vIHBhc3NlcyBhbGwgZW1pc3Npb25zIGZyb20gc291cmNlIHRvIGNvbnN1bWVyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zVG9Tb3VyY2VzLnNldChzb3VyY2UsIHN1YnNjcmlwdGlvblRvU291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwYXNzaW5nIGFsbCB2YWx1ZXMgZnJvbSBhIHNpbmdsZSBzb3VyY2UgdG8gY29uc3VtZXJcbiAgICogKGlmIGFueSBjb25zdW1lciBpcyBhY3RpdmUgYXQgdGhlIG1vbWVudClcbiAgICovXG4gIHByaXZhdGUgdW5iaW5kU291cmNlRnJvbUNvbnN1bWVyKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvblRvU291cmNlID0gdGhpcy5zdWJzY3JpcHRpb25zVG9Tb3VyY2VzLmdldChzb3VyY2UpO1xuICAgIGlmIChzdWJzY3JpcHRpb25Ub1NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdWJzY3JpcHRpb25Ub1NvdXJjZS51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zVG9Tb3VyY2VzLmRlbGV0ZShzb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyB0aGUgZ2l2ZW4gc291cmNlIHNvIGl0IHN0b3BzIHBhc3NpbmcgaXRzIHZhbHVlcyB0byBgb3V0cHV0JGAgb2JzZXJ2YWJsZS5cbiAgICpcbiAgICogU2hvdWxkIGJlIHVzZWQgd2hlbiBhIHNvdXJjZSBpcyBubyBsb25nZXIgbWFpbnRhaW5lZCAqKnRvIGF2b2lkIG1lbW9yeSBsZWFrcyoqLlxuICAgKi9cbiAgcmVtb3ZlKHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IHZvaWQge1xuICAgIC8vIGNsZWFyIGJpbmRpbmcgZnJvbSBzb3VyY2UgdG8gY29uc3VtZXIgKGlmIGFueSBjb25zdW1lciBleGlzdHMgYXQgdGhlIG1vbWVudClcbiAgICB0aGlzLnVuYmluZFNvdXJjZUZyb21Db25zdW1lcihzb3VyY2UpO1xuXG4gICAgLy8gcmVtb3ZlIHNvdXJjZSBmcm9tIGFycmF5XG4gICAgbGV0IGk6IG51bWJlcjtcbiAgICBpZiAoKGkgPSB0aGlzLnNvdXJjZXMuZmluZEluZGV4KChzKSA9PiBzID09PSBzb3VyY2UpKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc291cmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gc291cmNlIGhhcyBiZWVuIGFscmVhZHkgYWRkZGVkXG4gICAqL1xuICBoYXMoc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlcy5pbmNsdWRlcyhzb3VyY2UpO1xuICB9XG59XG4iXX0=