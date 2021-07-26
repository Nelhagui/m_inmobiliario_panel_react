import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBarMenu } from "./components/sidebarMenu/SideBarMenu";
import { Nav } from "./components/nav/Nav";
import { Home } from "./views/home/Home";
import { Posts } from "./views/posts/Posts";
import { Categories } from "./views/categories/Categories";
import { PaginatorProvider } from "./components/contexts/PaginatorContext";
import { EditPost } from "./views/editPost/EditPost";

function App() {
    return (
        <PaginatorProvider>
            <Router>
                <>
                    <Nav />
                    <div className="containerBoby">
                        <SideBarMenu />
                        <div className="dynamicContent">
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route
                                    path="/entradas"
                                    exact
                                    component={Posts}
                                />
                                <Route
                                    path="/entrada/editar/:id"
                                    exact
                                    component={EditPost}
                                />
                                <Route
                                    path="/categorias"
                                    exact
                                    component={Categories}
                                />
                            </Switch>
                        </div>
                    </div>
                </>
            </Router>
        </PaginatorProvider>
    );
}

export default App;
