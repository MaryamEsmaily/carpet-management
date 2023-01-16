import { Route, Routes } from "react-router-dom";
import appRoutes from "router/routes/app.routes";
//
function App() {
  return (
    <div className="App">
      <Routes>
        {appRoutes.map((propsRoute) => {
          const Component = propsRoute.component;
          return (
            <Route
              key={propsRoute.path}
              path={propsRoute.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
