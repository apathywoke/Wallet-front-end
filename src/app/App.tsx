// styles
import './App.css';
//fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// dependencies
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { routes } from '@/app/providers/store/routes.tsx';
import { PrivateRoute } from '@/app/providers/store';

export const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, element, private: isPrivate}) => (
        <Route key={path} path={path} element={
          isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}/>
      ))}
    </Routes>
  </BrowserRouter>
);


export default App;
