import './settings/css/reset.css'
import './settings/css/hamburgerMenuLogo.css'
import './settings/css/loadingSpinner.css'
import './settings/css/fonts.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import routerList from './routerList';
import PrivateWrapper from './components/wrappers/PrivateWrapper';

function App() {
  return (
    <Routes>
      <Route path="/">
        {Object.keys(routerList).map((key, index) => {
          if (routerList[key].isPublic) {
            return (
              <Route
                key={index}
                path={routerList[key].url}
                Component={routerList[key].component}
              />
            );
          }
        })}
        <Route element={<PrivateWrapper />}>
          {Object.keys(routerList).map((key, index) => {
            if (!routerList[key].isPublic) {
              return (
                <Route
                  key={index}
                  path={routerList[key].url}
                  Component={routerList[key].component}
                />
              );
            }
          })}
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
}

export default App;
