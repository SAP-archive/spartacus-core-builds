import { AnonymousConsent, ConsentTemplate } from '../../model/consent.model';
import { LoaderState } from '../../state';
export declare const ANONYMOUS_CONSENTS_STORE_FEATURE = "anonymous-consents";
export declare const ANONYMOUS_CONSENTS = "[Anonymous Consents] Anonymous Consents";
export interface StateWithAnonymousConsents {
    [ANONYMOUS_CONSENTS_STORE_FEATURE]: AnonymousConsentsState;
}
export interface AnonymousConsentsState {
    templates: LoaderState<ConsentTemplate[]>;
    consents: AnonymousConsent[];
    ui: {
        bannerVisible: boolean;
        updated: boolean;
    };
}
