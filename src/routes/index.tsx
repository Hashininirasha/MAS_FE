import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../utilities/constants";
import { LmDashboard, Login, RequestCreation } from "../pages";
import ManageTemplates from "../pages/Manage Templates/ManageTemplates";
import AddNewRequest from "../components/RequestCreation/AddNewRequest/AddNewRequest";
import { TransportCompany } from "../redux/reducers/transportcompany.reducer";
import { TransportCompanyInsertGrid } from "../components/TransportCompanyManagement/TransportCompanyInsertGrid";
import VehicleRequest from '../pages/TMVehicle/VehicleRequest'
import DriverRequest from '../pages/TMDriver/DriverRequest'
import UserProfile from '../pages/UserProfile/UserProfile'



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.ROOT} element={<Login />}></Route>
       
  
       
        <Route
          path={APP_ROUTES.REQUEST_CREATION}
          element={<RequestCreation />}
        ></Route>

        <Route
          path={APP_ROUTES.ADD_REQUEST_CREATION}
          element={<AddNewRequest />}
        ></Route>

        <Route path={APP_ROUTES.LM_DASHBOARD} element={<LmDashboard />}></Route>

        <Route
          path={APP_ROUTES.GU_MANAGE_TEMPLATES}
          element={<ManageTemplates />}
        ></Route>
        
        <Route
          path={APP_ROUTES.TRANSPORT_COMPANY}
          element={<TransportCompanyInsertGrid/>}
        >
        </Route>

        <Route
          path={APP_ROUTES.TM_VEHICLE_MANAGEMENT}
          element={<VehicleRequest/>}
        >
        </Route>

        <Route
          path={APP_ROUTES.TM_DRIVER_MANAGEMENT}
          element={<DriverRequest/>}
        >
        </Route>


        <Route
          path={APP_ROUTES.MY_PROFILE}
          element={<UserProfile/>}
        >
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
