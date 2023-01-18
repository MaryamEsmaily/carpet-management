import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "router/ProtectedRoute";
import appRoutes from "router/routes/app.routes";
import ProductsPage from "views/app/ProductsPage";

const App = () => {
  return (
    <Routes>
      {/* for index route. usually is landing page or login */}
      <Route index element={<div>ورود</div>} />
      {/* for protected routes */}
      <Route element={<ProtectedRoute isAllowed={true} />}>
        {/* map over all protected routes */}
        {appRoutes.map((route) => {
          const Component = route.element;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
      </Route>
      {/* error pages: 401,404,403,500 */}
      <Route path="/401" element={<div>401</div>} />
    </Routes>
  );
};

export default App;
