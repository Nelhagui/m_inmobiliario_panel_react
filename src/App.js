import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";
import { Nav } from "./components/nav/Nav";
import { Home } from "./views/home/Home";
import { Posts } from "./views/posts/Posts";
import { Categories } from "./views/categories/Categories";

function App() {
    return (
        <Router>
            <>
                <Nav/>
                <div className="containerBoby">
                    <SideBarMenu/>
                    <div className="dynamicContent">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/entradas" exact component={Posts}/>
                            <Route path="/categorias" exact component={Categories}/>
                        </Switch>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default App;
