import React from "react";
import { maslogo } from "../../assets/images";
import { APP_ROUTES } from "../../utilities/constants";
import { AppLayoutHeader } from "../index";
import { NavLink } from "react-router-dom";

const AppLayout: React.FC<{
  children: React.ReactNode;
  componentTitle: string;
}> = (props) => {
  return (
    <React.Fragment>
      <div className={"layout-row authorizedContainer"}>
        <aside className={`layout-row sideNavigation `}>
          <aside className="navBar">
            <aside className={"layout-row"}>
              {/* <div className={`menuBox ${navClass}`}>
                <a className="menuIcon" onClick={() => toggleSideNav()}>
                  <span></span>
                </a>
              </div> */}
              <div className="contentGroup ">
                <img className="logo" src={maslogo} alt="MASlogo" />
              </div>
            </aside>

            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.REQUEST_CREATION}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Request Creation</span>
                </div>
              </NavLink>
            </aside>

            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.GU_MANAGE_TEMPLATES}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Manage Templates</span>
                </div>
              </NavLink>
            </aside>

            {/* LINE MANAGER */}
            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.LM_DASHBOARD}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Dashboard</span>
                </div>
              </NavLink>
            </aside>

           {/* TRANSPORT COMPANY */}
            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.TRANSPORT_COMPANY}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Transport company</span>
                </div>
              </NavLink>
            </aside>


            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.LM_REQUEST_APPROVAL}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Request Approval</span>
                </div>
              </NavLink>
            </aside>

            {/* TRANSPORT MANAGER */}
            <aside className={"links"}>
              <NavLink
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "layout-row is-active" : "layout-row"
                }
                to={APP_ROUTES.TM_DASHBOARD}
              >
                <div className={`navBarContent navLink layout-row`}>
                  <span>Dashboard</span>
                </div>
              </NavLink>
            </aside>

            <aside className={'links'}>
              <NavLink
                 style={{ textDecoration: 'none' }}
                 className={({ isActive }) => (isActive ? 'layout-row is-active' : 'layout-row')}
                 to={APP_ROUTES.TM_VEHICLE_MANAGEMENT}
               >
                 <div
                   className={`navBarContent navLink layout-row`}
                 >
                   <span>TM Vehicle Alocation</span>
                 </div>
               </NavLink>
           </aside>

           <aside className={'links'}>
            <NavLink
               style={{ textDecoration: 'none' }}
               className={({ isActive }) => (isActive ? 'layout-row is-active' : 'layout-row')}
               to={APP_ROUTES.TM_DRIVER_MANAGEMENT}
             >
               <div
                 className={`navBarContent navLink layout-row`}
               >
                 <span>TM Driver Alocation</span>
               </div>
             </NavLink>
         </aside>

         <aside className={'links'}>
          <NavLink
             style={{ textDecoration: 'none' }}
             className={({ isActive }) => (isActive ? 'layout-row is-active' : 'layout-row')}
             to={APP_ROUTES.MY_PROFILE}
           >
             <div
               className={`navBarContent navLink layout-row`}
             >
               <span>User Profile</span>
             </div>
           </NavLink>
       </aside>
           
          </aside>
        </aside>
        <aside className={"content"}>
          <aside className="content2">
            <AppLayoutHeader />
          </aside>
          <aside className={"content3"}>{props.children}</aside>
        </aside>
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
