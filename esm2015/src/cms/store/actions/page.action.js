import { StateUtils } from '../../../state/utils/index';
export const LOAD_CMS_PAGE_DATA = '[Cms] Load Page Data';
export const LOAD_CMS_PAGE_DATA_FAIL = '[Cms] Load Page Data Fail';
export const LOAD_CMS_PAGE_DATA_SUCCESS = '[Cms] Load Page Data Success';
export const CMS_SET_PAGE_SUCCESS_INDEX = '[Cms] Set Page Success Index';
export const CMS_SET_PAGE_FAIL_INDEX = '[Cms] Set Page Fail Index';
export class LoadCmsPageData extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(payload.type, payload.id);
        this.payload = payload;
        this.type = LOAD_CMS_PAGE_DATA;
    }
}
export class LoadCmsPageDataFail extends StateUtils.EntityFailAction {
    constructor(pageContext, error) {
        super(pageContext.type, pageContext.id, error);
        this.type = LOAD_CMS_PAGE_DATA_FAIL;
    }
}
export class LoadCmsPageDataSuccess extends StateUtils.EntitySuccessAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = LOAD_CMS_PAGE_DATA_SUCCESS;
    }
}
export class CmsSetPageSuccessIndex extends StateUtils.EntitySuccessAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id, payload);
        this.type = CMS_SET_PAGE_SUCCESS_INDEX;
    }
}
export class CmsSetPageFailIndex extends StateUtils.EntityFailAction {
    constructor(pageContext, payload) {
        super(pageContext.type, pageContext.id);
        this.payload = payload;
        this.type = CMS_SET_PAGE_FAIL_INDEX;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3hELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDO0FBQ3pELE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLDJCQUEyQixDQUFDO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLDhCQUE4QixDQUFDO0FBQ3pFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLDhCQUE4QixDQUFDO0FBQ3pFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLDJCQUEyQixDQUFDO0FBRW5FLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFOUQsWUFBbUIsT0FBb0I7UUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRGYsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFHbkMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFbEUsWUFBWSxXQUF3QixFQUFFLEtBQVU7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFeEUsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFeEUsWUFBWSxXQUF3QixFQUFFLE9BQWE7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUYxQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFbEUsWUFBWSxXQUF3QixFQUFTLE9BQWU7UUFDMUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBREcsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURuRCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NNU19QQUdFX0RBVEEgPSAnW0Ntc10gTG9hZCBQYWdlIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ01TX1BBR0VfREFUQV9TVUNDRVNTID0gJ1tDbXNdIExvYWQgUGFnZSBEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENNU19TRVRfUEFHRV9TVUNDRVNTX0lOREVYID0gJ1tDbXNdIFNldCBQYWdlIFN1Y2Nlc3MgSW5kZXgnO1xuZXhwb3J0IGNvbnN0IENNU19TRVRfUEFHRV9GQUlMX0lOREVYID0gJ1tDbXNdIFNldCBQYWdlIEZhaWwgSW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX1BBR0VfREFUQTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VDb250ZXh0KSB7XG4gICAgc3VwZXIocGF5bG9hZC50eXBlLCBwYXlsb2FkLmlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfRkFJTDtcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBlcnJvcjogYW55KSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc1BhZ2VEYXRhU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYXlsb2FkOiBQYWdlKSB7XG4gICAgc3VwZXIocGFnZUNvbnRleHQudHlwZSwgcGFnZUNvbnRleHQuaWQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNTZXRQYWdlU3VjY2Vzc0luZGV4IGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENNU19TRVRfUEFHRV9TVUNDRVNTX0lOREVYO1xuICBjb25zdHJ1Y3RvcihwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHBheWxvYWQ6IFBhZ2UpIHtcbiAgICBzdXBlcihwYWdlQ29udGV4dC50eXBlLCBwYWdlQ29udGV4dC5pZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENtc1NldFBhZ2VGYWlsSW5kZXggZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVg7XG4gIGNvbnN0cnVjdG9yKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHBhZ2VDb250ZXh0LnR5cGUsIHBhZ2VDb250ZXh0LmlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENtc1BhZ2VBY3Rpb24gPVxuICB8IExvYWRDbXNQYWdlRGF0YVxuICB8IExvYWRDbXNQYWdlRGF0YUZhaWxcbiAgfCBMb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gIHwgQ21zU2V0UGFnZUZhaWxJbmRleDtcbiJdfQ==