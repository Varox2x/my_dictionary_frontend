import './settings/css/reset.css'
import './settings/css/hamburgerMenuLogo.css'
import './settings/css/loadingSpinner.css'
import './settings/css/fonts.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import routerList from './routerList';
import PrivateWrapper from './components/wrappers/PrivateWrapper';
import LoadingPage from './components/pages/LoadingPage';
import { Suspense } from 'react';

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
                element={<Suspense fallback={<LoadingPage />}>
                  {routerList[key].component}
                </Suspense>
                }
              />
            );
          }
        })}
        <Route element={<Suspense fallback={<LoadingPage />}>
          <PrivateWrapper />
        </Suspense>}>
          {Object.keys(routerList).map((key, index) => {
            if (!routerList[key].isPublic) {
              return (
                <Route
                  key={index}
                  path={routerList[key].url}
                  element={<Suspense fallback={<LoadingPage />}>
                    {routerList[key].component}
                  </Suspense>
                  }
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
