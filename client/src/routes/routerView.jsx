import { Routes, Route, Outlet } from "react-router-dom";
import {
  LandingPage,
  RegisterOptions,
  RegisterPage,
  LoginPage,
  DashboardLayout,
  AvailablePlans,
} from "../pages";
import { FinancingBuyerComponent } from "../components";

export function RouterViews() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register-options" element={<RegisterOptions />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route
        exact
        path="/user/buyer"
        element={
          <DashboardLayout userType="buyer">
            <Outlet />
          </DashboardLayout>
        }
      >
        {/* Subruta predeterminada */}
        <Route index element={<AvailablePlans />} />
      </Route>
    </Routes>
  );
}
