import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {ProtectedIn} from "./ProtectedRoutes/ProtectedIn";
import { routesList } from "../utilities/config";
import { ProtectedOut } from "./ProtectedRoutes/ProtectedOut";

const RoutesComp = () => {
    return (
        <Router>
            <Routes>
                {routesList.map(((item, key) => {
                    if (!item.access) {
                        return (
                            <Route key={`route-key-${key}`} element={<ProtectedIn/>}>
                                <Route path={item.path} element={item.component}/>
                            </Route>
                        )
                    } else {
                        return (
                            <Route key={`route-key-${key}`} element={<ProtectedOut/>}>
                                <Route path={item.path} element={item.component}/>
                            </Route>
                        )
                    }
                }))}
            </Routes>
        </Router>
    )
}

export default RoutesComp;