import { Box, Spinner } from "@chakra-ui/react";
import AppLayout from "layout/AppLayout";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "router/ProtectedRoute";
import appRoutes from "router/routes/app.routes";

const App = () => {
  //
  const { i18n } = useTranslation();
  var lang = i18n.language;
  useEffect(() => {
    if (lang !== "fa") {
      document.getElementsByTagName("body")[0].style.fontFamily = "Dejavu Sans";
    } else {
      document.getElementsByTagName("body")[0].style.fontFamily = "IRANSansX";
    }
  }, [lang]);
  //
  return (
    <Routes>
      {/* for index route. usually is landing page or login */}
      <Route index element={<div>ورود</div>} />
      {/* for protected routes */}
      <Route
        element={
          <ProtectedRoute isAllowed={true}>
            <AppLayout>
              <Outlet />
            </AppLayout>
          </ProtectedRoute>
        }
      >
        {/* map over all protected routes */}
        {appRoutes.map((route) => {
          const Component = route.element;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense
                  fallback={
                    <Box textAlign="center">
                      <Spinner />
                    </Box>
                  }
                >
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
      {/* error pages: 401,404,403,500 */}
      <Route path="/401" element={<div>401</div>} />
    </Routes>
  );
};

export default App;
