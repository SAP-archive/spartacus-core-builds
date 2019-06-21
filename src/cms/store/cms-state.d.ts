import { EntityState } from '../../state';
import { NodeItem } from '../model/node-item.model';
import { Page } from '../model/page.model';
import { EntityLoaderState } from '../../state/utils/entity-loader/entity-loader-state';
export declare const CMS_FEATURE = "cms";
export declare const NAVIGATION_DETAIL_ENTITY = "[Cms] Navigation Entity";
export declare const COMPONENT_ENTITY = "[Cms[ Component Entity";
export interface StateWithCms {
    [CMS_FEATURE]: CmsState;
}
export declare type ComponentState = EntityLoaderState<any>;
export declare type IndexType = {
    content: EntityLoaderState<string>;
    product: EntityLoaderState<string>;
    category: EntityLoaderState<string>;
    catalog: EntityLoaderState<string>;
};
export interface NavigationNodes {
    [nodeId: string]: NodeItem;
}
export interface PageState {
    pageData: EntityState<Page>;
    index: IndexType;
}
export interface CmsState {
    page: PageState;
    component: ComponentState;
    navigation: EntityLoaderState<NodeItem>;
}
