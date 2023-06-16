import React from 'react'
// import { useMsal, useIsAuthenticated } from '@azure/msal-react'
// import { loginRequest } from '../../core'
import styles from './Login.module.scss'
import { maslogo } from '../../assets/images'
// import { alertActions, authActions } from '../../redux/actions'
// import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress'
import {  APP_ROUTES } from '../../utilities/constants'
// import { IPublicClientApplication } from '@azure/msal-browser'
import { useNavigate } from 'react-router-dom'
// import { AlertDto, ApplicationStateDto } from '../../utilities/models'
const Login = () => {
//   const { instance, accounts } = useMsal()
//   const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const userAuthorizing = useSelector((state: ApplicationStateDto) => state.authUser.userAuthorizing)
//   const authorizedUser = useSelector((state: ApplicationStateDto) => state.authUser.authorizedUser)

//   React.useEffect(() => {
//     if (isAuthenticated) {
//       if (accounts[0]) {
//         dispatch(authActions.authorizeUser(accounts[0].username))
//         instance.setActiveAccount(accounts[0])
//       }
//     }
//   }, [isAuthenticated])

//   React.useEffect(() => {
//     if (!userAuthorizing.isLoading && userAuthorizing.isAuthorized) {
//       authorizedUser.data.applicationId === APPLICATION_ID.GIS ? navigate(APP_ROUTES.USER_MANAGEMENT) : navigate(APP_ROUTES.DASHBOARD)
//     } else {
//       if (!userAuthorizing.isLoading && !!userAuthorizing.error) {
//         const alert: AlertDto = {
//           message: userAuthorizing.error,
//           type: ALERT_ACTION_TYPES.TRIGGER_ALERT,
//           options: {
//             key: new Date().getTime() + Math.random(),
//             persist: true,
//             varient: 'error',
//             anchorOrigin: {
//               horizontal: 'center'
//             }
//           }
//         }
//         dispatch(alertActions.triggerAlert(alert))
//       }
//     }
//   }, [userAuthorizing])

  const handleLogin = () => {
    // console.log('instance', instance)
    // console.log('loginRequest', loginRequest)
    // instance.loginRedirect(loginRequest)
    //   .catch((error: string) => {
    //     const alert: AlertDto = {
    //       message: error,
    //       type: ALERT_ACTION_TYPES.TRIGGER_ALERT,
    //       options: {
    //         key: new Date().getTime() + Math.random(),
    //         persist: true,
    //         varient: 'error',
    //         anchorOrigin: {
    //           horizontal: 'center'
    //         }
    //       }
    //     }
    //     dispatch(alertActions.triggerAlert(alert))
    //   })
    navigate(APP_ROUTES.REQUEST_CREATION)
  }

  return (
    <section
      className={`${styles.container} content-padding container layout-row layout-wrap layout-align-center center`}
    >
      <section className={`${styles.login} layout-row`}>
        <aside className={styles.logincard}>
          <aside className={styles.loginActions}>
            <aside>
              <img className={styles.logo} src={maslogo} alt='MASlogo' />
              <h1>Welcome to MAS - Transport System</h1>
            </aside>
            <Button
              className={`${styles.primaryBtn} `}
            //   startIcon={userAuthorizing.isLoading && <CircularProgress size={18} />}
              variant="contained"
            //   disabled={userAuthorizing.isLoading}
              onClick={() => handleLogin()}
            >
               Login with masholdings.com
            </Button>
            <div className={styles.loginFooter}>
              <p>
                Our comprehensive transport system is designed to
                facilitate your transportation needs, ensuring your safety
                and comfort while also minimizing environmental impact.
              </p>
            </div>
          </aside>
        </aside>
      </section>
    </section>
  )
}

export default Login
