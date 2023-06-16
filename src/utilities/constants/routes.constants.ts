export enum APP_ROUTES {
    ROOT = '/',
    REQUEST_CREATION = '/request-creation',
    NEW_REQUEST_CREATION = '/request-creation/new-request',

    ADD_REQUEST_CREATION = '/request-creation/add-request-creation',
    // GENERAL USER
    GU_MANAGE_TEMPLATES = '/manage-templates',

    // LINE MANAGER
    // TODO: should be change this dashboard route once finish login part
    LM_DASHBOARD = '/lm-dashboard',
    LM_REQUEST_APPROVAL = '/request-approval',

    // TRANSPORT MANAGER
    // TODO: should be change this dashboard route once finish login part
    TM_DASHBOARD = '/tm-dashboard',
    TM_VEHICLE_MANAGEMENT = '/vehicle-management',
    TM_DRIVER_MANAGEMENT = '/driver-management',
    TM_REQUEST_APPROVAL = '/request-approval',
    TM_VEHICLE_ALLOCATION = '/vehicle-allocation',

    TRANSPORT_COMPANY = '/transport-company',


    // SBU
    SBU_COMPANY_ADD = '/new-company',
    
      //Profile
      MY_PROFILE = '/user-profile',
    
}