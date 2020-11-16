import { Address } from './address.model';
import { User } from './misc.model';
export interface CostCenter {
    active?: boolean;
    code?: string;
    name?: string;
    unit?: B2BUnit;
}
export declare enum B2BUserRole {
    ADMIN = "b2badmingroup",
    CUSTOMER = "b2bcustomergroup",
    MANAGER = "b2bmanagergroup",
    APPROVER = "b2bapprovergroup"
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
