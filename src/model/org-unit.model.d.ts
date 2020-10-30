import { Address } from './address.model';
import { User } from './misc.model';
export interface CostCenter {
    active?: boolean;
    code?: string;
    name?: string;
    unit?: B2BUnit;
}
export declare enum B2BUserGroup {
    B2B_ADMIN_GROUP = "b2badmingroup",
    B2B_CUSTOMER_GROUP = "b2bcustomergroup",
    B2B_MANAGER_GROUP = "b2bmanagergroup",
    B2B_APPROVER_GROUP = "b2bapprovergroup"
}
export interface B2BUnit {
    active?: boolean;
    addresses?: Address[];
    uid?: string;
    name?: string;
}
export interface B2BUser extends User {
    active?: boolean;
}
export interface B2BApprovalProcess {
    code?: string;
    name?: string;
}
export interface OrderApprovalPermissionType {
    code?: string;
    name?: string;
}
