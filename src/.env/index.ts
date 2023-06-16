import { ENV_QA } from './environment.qa';
import { ENV_DEV } from './environment.dev';
import {ENV_LOCAL} from "./environment.local"
import {ENV_PROD} from "./environment.prod";


export interface ENV_VARIABLES {
    APP_ENV: string,
    API_BASE: string,
    AUTHORITY: string,
    CLIENT_ID: string,
    REDIRECT_URL: string,
    POST_REDIRECT_URL: string,
    APP_SCOPES: string[],
    APIM_SUBSCRIPTION_KEY: string
}

// DEFAULT PROD ENV VARIABLES
let ENV = ENV_PROD

// LOCAL ENV VARIABLES
if(process.env.REACT_APP_ENV === 'local') {
    ENV = ENV_LOCAL
}

// DEV ENV VARIABLES
if(process.env.REACT_APP_ENV === 'dev') {
    ENV = ENV_DEV
}

// QA ENV VARIABLES
if(process.env.REACT_APP_ENV === 'qa') {
    ENV = ENV_QA
}


export default ENV
