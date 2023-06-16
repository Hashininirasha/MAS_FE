import {ENV_VARIABLES} from "./index";

export let ENV_PROD: ENV_VARIABLES = {
    APP_ENV: "prod",
    API_BASE: "https://azureapi.masholdings.com/noyonportalprd",
    AUTHORITY: "https://login.microsoftonline.com/852c5799-8134-4f15-9d38-eba4296cc76f",
    CLIENT_ID: "91d507cb-8684-424c-a7f7-0b08ddb507a1",
    REDIRECT_URL: "https://noyoninsportal.masholdings.com",
    POST_REDIRECT_URL: "https://noyoninsportal.masholdings.com",
    APP_SCOPES: ["openid"],
    APIM_SUBSCRIPTION_KEY: "03b86f4d375b408f90675c8d8201c16e"
}
