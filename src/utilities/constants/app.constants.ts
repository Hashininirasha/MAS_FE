export const ALERT_CONFIGS = {

  TIMEOUT: 4000,

  AUTO_CLEAR: true

}

export const APP_TABLE_CONFIGS = {

  DEFAULT_ROWS_PER_PAGE_OPTIONS: [5,10,15,25],

  DEFAULT_ROWS_PER_PAGE: 5,

  DATE_FORMAT: 'YYYY-MM-DD HH:mm',

  DATE_TIME_FILTERATION_KEYS: ["Last 30 minute", "Last hour", "Last 6 hours", "Last 12 hours", "Last 24 hours", "Last week"]

}




export const PAGINATIONS_LIMIT = {

  DEFAULT_PAGINATION_LIMIT: 50

}




export const REQUEST_TYPES = [

  {

    id: 1,

    name: "AdHoc"

  },

  {

    id: 2,

    name: "Recurrent"

  }

]




export const APPROVER_DEPARTMENT = [

  {

    value: "same department",

    label: "same department"

  },

  {

    value: "all department",

    label: "all department"

  }

]




export const ORGANIZATION_UNIT_TYPES ={

  SBU: 2,

  PLANT: 3,

  DEPARTMENT: 4

}




export const REQUEST_SCREEN_MODES = {

  CREATE: "CREATE",

  EDIT: "EDIT",

  VIEW: "VIEW",

  USE_TEMPLATE: "USE_TEMPLATE"

}




export const VEHICLE_SCREEN_MODES = {

  CREATE: "CREATE",

  EDIT: "EDIT",

  VIEW: "VIEW"

}




export const USER_ROLES = {

  REGULAR_USER: 1,

  LINE_MANAGER: 2,

  DIVISION_USER: 3,

  TRANSPORT_MANAGER: 4,

  SBU_MANAGER: 5,

  SUPER_ADMIN: 6,

}