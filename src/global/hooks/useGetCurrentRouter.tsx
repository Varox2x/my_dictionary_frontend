import { matchPath, } from 'react-router-dom';
import routerList from '../../routerList';



const useGetCurrentRouter = (): { url: string | null } => {

    const getCurrentRouterUrl = (): string | null => {
        const currentPath = window.location.pathname;

        for (const key in routerList) {
            const match = matchPath(
                { path: routerList[key].url },
                currentPath,
            );

            if (match) {
                return routerList[key].url;
            }
        }

        return null;
    };



    return { url: getCurrentRouterUrl() }
}

export default useGetCurrentRouter