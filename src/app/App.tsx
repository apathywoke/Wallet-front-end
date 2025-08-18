import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { LogIn } from '@/pages/auth/logIn'

const App = () => {
  return (
    <div className="content">
      <LogIn></LogIn>
    </div>
  );
};

export default App;
