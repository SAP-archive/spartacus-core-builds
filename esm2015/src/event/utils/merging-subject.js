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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2luZy1zdWJqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2V2ZW50L3V0aWxzL21lcmdpbmctc3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsY0FBYztBQUVkOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFDRTs7V0FFRztRQUNLLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBRXRDOzs7V0FHRztRQUNLLDJCQUFzQixHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBRXhFOzs7Ozs7OztXQVFHO1FBQ00sWUFBTyxHQUFrQixJQUFJLFVBQVUsQ0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQy9ELDBGQUEwRjtZQUMxRiw2Q0FBNkM7WUFDN0Msd0lBQXdJO1lBQ3hJLG9GQUFvRjtZQUVwRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFeEMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWpCOzs7V0FHRztRQUNLLGFBQVEsR0FBb0IsSUFBSSxDQUFDO0lBNkUzQyxDQUFDO0lBM0VDOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsTUFBcUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNLLHdCQUF3QixDQUFDLFFBQXVCO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSyw0QkFBNEI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNLLG9CQUFvQixDQUFDLE1BQXFCLEVBQUUsUUFBdUI7UUFDekUsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQywrQ0FBK0M7UUFDM0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssd0JBQXdCLENBQUMsTUFBcUI7UUFDcEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFO1lBQ3RDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxNQUFxQjtRQUMxQiwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLDJCQUEyQjtRQUMzQixJQUFJLENBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxNQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmliZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8vIFBSSVZBVEUgQVBJXG5cbi8qKlxuICogQWxsb3dzIGZvciBkeW5hbWljIGFkZGluZyBhbmQgcmVtb3Zpbmcgc291cmNlIG9ic2VydmFibGVzXG4gKiBhbmQgZXhwb3NlcyB0aGVtIGFzIG9uZSBtZXJnZWQgb2JzZXJ2YWJsZSBhdCBhIHByb3BlcnR5IGBvdXRwdXQkYC5cbiAqXG4gKiBUaGFua3MgdG8gdGhlIGBzaGFyZSgpYCBvcGVyYXRvciB1c2VkIGluc2lkZSwgaXQgc3Vic2NyaWJlcyB0byBzb3VyY2Ugb2JzZXJ2YWJsZXNcbiAqIG9ubHkgd2hlbiBzb21lb25lIHN1YnNjcmliZXMgdG8gaXQuIEFuZCBpdCB1bnN1YnNjcmliZXMgZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZXNcbiAqIHdoZW4gdGhlIGNvdW50ZXIgb2YgY29uc3VtZXJzIGRyb3BzIHRvIDAuXG4gKlxuICogKipUbyBhdm9pZCBtZW1vcnkgbGVha3MqKiwgYWxsIG1hbnVhbGx5IGFkZGVkIHNvdXJjZXMgc2hvdWxkIGJlIG1hbnVhbGx5IHJlbW92ZWRcbiAqIHdoZW4gbm90IHBsYW4gdG8gZW1pdCB2YWx1ZXMgYW55bW9yZS4gSW4gcGFydGljdWxhciBjbG9zZWQgZXZlbnQgc291cmNlcyB3b24ndCBiZVxuICogYXV0b21hdGljYWxseSByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgTWVyZ2luZ1N1YmplY3Q8VD4ge1xuICAvKipcbiAgICogTGlzdCBvZiBhbHJlYWR5IGFkZGVkIHNvdXJjZXMgKGJ1dCBub3QgcmVtb3ZlZCB5ZXQpXG4gICAqL1xuICBwcml2YXRlIHNvdXJjZXM6IE9ic2VydmFibGU8VD5bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBGb3IgZWFjaCBzb3VyY2U6IGl0IHN0b3JlcyBhIHN1YnNjcmlwdGlvbiByZXNwb25zaWJsZSBmb3JcbiAgICogcGFzc2luZyBhbGwgdmFsdWVzIGZyb20gc291cmNlIHRvIHRoZSBjb25zdW1lclxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zVG9Tb3VyY2VzID0gbmV3IE1hcDxPYnNlcnZhYmxlPFQ+LCBTdWJzY3JpcHRpb24+KCk7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgd2l0aCBhbGwgc291cmNlcyBtZXJnZWQuXG4gICAqXG4gICAqIE9ubHkgYWZ0ZXIgc3Vic2NyaWJpbmcgdG8gaXQsIHVuZGVyIHRoZSBob29kIGl0IHN1YnNjcmliZXMgdG8gdGhlIHNvdXJjZSBvYnNlcnZhYmxlcy5cbiAgICogV2hlbiB0aGUgbnVtYmVyIG9mIHN1YnNjcmliZXJzIGRyb3BzIHRvIDAsIGl0IHVuc3Vic2NyaWJlcyBmcm9tIGFsbCBzb3VyY2Ugb2JzZXJ2YWJsZXMuXG4gICAqIEJ1dCBpZiBsYXRlciBvbiBzb21ldGhpbmcgc3Vic2NyaWJlcyB0byBpdCBhZ2FpbiwgaXQgc3Vic2NyaWJlcyB0byB0aGUgc291cmNlIG9ic2VydmFibGVzIGFnYWluLlxuICAgKlxuICAgKiBJdCBtdWx0aWNhc3RzIHRoZSBlbWlzc2lvbnMgZm9yIGVhY2ggc3Vic2NyaWJlci5cbiAgICovXG4gIHJlYWRvbmx5IG91dHB1dCQ6IE9ic2VydmFibGU8VD4gPSBuZXcgT2JzZXJ2YWJsZTxUPigoY29uc3VtZXIpID0+IHtcbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSAwIG9yIDEgY29uc3VtZXIgb2YgdGhpcyBvYnNlcnZhYmxlIGNvbWluZyBmcm9tIHRoZSBgc2hhcmUoKWAgb3BlcmF0b3JcbiAgICAvLyB0aGF0IGlzIHBpcGVkIHJpZ2h0IGFmdGVyIHRoaXMgb2JzZXJ2YWJsZS5cbiAgICAvLyBgc2hhcmUoKWAgbm90IG9ubHkgbXVsdGljYXN0cyB0aGUgcmVzdWx0cyBidXQgYWxzbyAgV2hlbiBhbGwgZW5kLXN1YnNjcmliZXJzIHVuc3Vic2NyaWJlIGZyb20gYHNoYXJlKClgIG9wZXJhdG9yLCBpdCB3aWxsIHVuc3Vic2NyaWJlXG4gICAgLy8gZnJvbSB0aGlzIG9ic2VydmFibGUgKGJ5IHRoZSBuYXR1cmUgYHJlZkNvdW50YC1uYXR1cmUgb2YgdGhlIGBzaGFyZSgpYCBvcGVyYXRvcikuXG5cbiAgICB0aGlzLmNvbnN1bWVyID0gY29uc3VtZXI7XG4gICAgdGhpcy5iaW5kQWxsU291cmNlc1RvQ29uc3VtZXIoY29uc3VtZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuY29uc3VtZXIgPSBudWxsO1xuICAgICAgdGhpcy51bmJpbmRBbGxTb3VyY2VzRnJvbUNvbnN1bWVyKCk7XG4gICAgfTtcbiAgfSkucGlwZShzaGFyZSgpKTtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBzdWJzY3JpYmVyIGNvbWluZyBmcm9tIHRoZSBgc2hhcmUoKWAgb3BlcmF0b3IgcGlwZWQgdG8gdGhlIGBvdXRwdXQkYCBvYnNlcnZhYmxlLlxuICAgKiBGb3IgbW9yZSwgc2VlIGRvY3Mgb2YgdGhlIGBvdXRwdXQkYCBvYnNlcnZhYmxlO1xuICAgKi9cbiAgcHJpdmF0ZSBjb25zdW1lcjogU3Vic2NyaWJlcjxhbnk+ID0gbnVsbDtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzb3VyY2UgdG8gcGFzcyBpdHMgdmFsdWVzIHRvIHRoZSBgb3V0cHV0JGAgb2JzZXJ2YWJsZS5cbiAgICpcbiAgICogSXQgZG9lcyBub3RoaW5nLCB3aGVuIHRoZSBzb3VyY2UgaGFzIGJlZW4gYWxyZWFkeSBhZGRlZCAoYnV0IG5vdCByZW1vdmVkIHlldCkuXG4gICAqL1xuICBhZGQoc291cmNlOiBPYnNlcnZhYmxlPFQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzKHNvdXJjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdW1lcikge1xuICAgICAgdGhpcy5iaW5kU291cmNlVG9Db25zdW1lcihzb3VyY2UsIHRoaXMuY29uc3VtZXIpO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwYXNzaW5nIGFsbCB2YWx1ZXMgZnJvbSBhbHJlYWR5IGFkZGVkIHNvdXJjZXMgdG8gY29uc3VtZXJcbiAgICovXG4gIHByaXZhdGUgYmluZEFsbFNvdXJjZXNUb0NvbnN1bWVyKGNvbnN1bWVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgdGhpcy5zb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT5cbiAgICAgIHRoaXMuYmluZFNvdXJjZVRvQ29uc3VtZXIoc291cmNlLCBjb25zdW1lcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBhc3NpbmcgYWxsIHZhbHVlcyBmcm9tIGFscmVhZHkgYWRkZWQgc291cmNlcyB0byBjb25zdW1lclxuICAgKiAoaWYgYW55IGNvbnN1bWVyIGlzIGFjdGl2ZSBhdCB0aGUgbW9tZW50KVxuICAgKi9cbiAgcHJpdmF0ZSB1bmJpbmRBbGxTb3VyY2VzRnJvbUNvbnN1bWVyKCkge1xuICAgIHRoaXMuc291cmNlcy5mb3JFYWNoKChzb3VyY2UpID0+IHRoaXMudW5iaW5kU291cmNlRnJvbUNvbnN1bWVyKHNvdXJjZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBwYXNzaW5nIGFsbCB2YWx1ZXMgZnJvbSBhIHNpbmdsZSBzb3VyY2UgdG8gY29uc3VtZXJcbiAgICovXG4gIHByaXZhdGUgYmluZFNvdXJjZVRvQ29uc3VtZXIoc291cmNlOiBPYnNlcnZhYmxlPFQ+LCBjb25zdW1lcjogU3Vic2NyaWJlcjxUPikge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvblRvU291cmNlID0gc291cmNlLnN1YnNjcmliZSgodmFsKSA9PiBjb25zdW1lci5uZXh0KHZhbCkpOyAvLyBwYXNzZXMgYWxsIGVtaXNzaW9ucyBmcm9tIHNvdXJjZSB0byBjb25zdW1lclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1RvU291cmNlcy5zZXQoc291cmNlLCBzdWJzY3JpcHRpb25Ub1NvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGFzc2luZyBhbGwgdmFsdWVzIGZyb20gYSBzaW5nbGUgc291cmNlIHRvIGNvbnN1bWVyXG4gICAqIChpZiBhbnkgY29uc3VtZXIgaXMgYWN0aXZlIGF0IHRoZSBtb21lbnQpXG4gICAqL1xuICBwcml2YXRlIHVuYmluZFNvdXJjZUZyb21Db25zdW1lcihzb3VyY2U6IE9ic2VydmFibGU8VD4pIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb25Ub1NvdXJjZSA9IHRoaXMuc3Vic2NyaXB0aW9uc1RvU291cmNlcy5nZXQoc291cmNlKTtcbiAgICBpZiAoc3Vic2NyaXB0aW9uVG9Tb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3Vic2NyaXB0aW9uVG9Tb3VyY2UudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1RvU291cmNlcy5kZWxldGUoc291cmNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgdGhlIGdpdmVuIHNvdXJjZSBzbyBpdCBzdG9wcyBwYXNzaW5nIGl0cyB2YWx1ZXMgdG8gYG91dHB1dCRgIG9ic2VydmFibGUuXG4gICAqXG4gICAqIFNob3VsZCBiZSB1c2VkIHdoZW4gYSBzb3VyY2UgaXMgbm8gbG9uZ2VyIG1haW50YWluZWQgKip0byBhdm9pZCBtZW1vcnkgbGVha3MqKi5cbiAgICovXG4gIHJlbW92ZShzb3VyY2U6IE9ic2VydmFibGU8VD4pOiB2b2lkIHtcbiAgICAvLyBjbGVhciBiaW5kaW5nIGZyb20gc291cmNlIHRvIGNvbnN1bWVyIChpZiBhbnkgY29uc3VtZXIgZXhpc3RzIGF0IHRoZSBtb21lbnQpXG4gICAgdGhpcy51bmJpbmRTb3VyY2VGcm9tQ29uc3VtZXIoc291cmNlKTtcblxuICAgIC8vIHJlbW92ZSBzb3VyY2UgZnJvbSBhcnJheVxuICAgIGxldCBpOiBudW1iZXI7XG4gICAgaWYgKChpID0gdGhpcy5zb3VyY2VzLmZpbmRJbmRleCgocykgPT4gcyA9PT0gc291cmNlKSkgIT09IC0xKSB7XG4gICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIHNvdXJjZSBoYXMgYmVlbiBhbHJlYWR5IGFkZGRlZFxuICAgKi9cbiAgaGFzKHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZXMuaW5jbHVkZXMoc291cmNlKTtcbiAgfVxufVxuIl19