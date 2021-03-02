import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SideNav from '../components/SideNav';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import MyExperiencePage from '../components/MyExperiencePage';
import JobPageRiverIsland from "../components/JobPageRiverIsland";
import JobPageStellaDot from "../components/JobPageStellaDot";
import JobPageNetAPorter from "../components/JobPageNetAPorter";
import JobPageJet2 from "../components/JobPageJet2";
import MySkillsPage from "../components/MySkillsPage";
import MyProjectsPage from "../components/MyProjects";
import ContactMePage from "../components/ContactMe";
import NotFoundPage from "../components/NotFoundPage";

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      <SideNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about-me" component={AboutPage} />
        <Route path="/my-experience" exact component={MyExperiencePage} />
        <Route path="/my-experience/river-island" component={JobPageRiverIsland} />
        <Route path="/my-experience/stella-and-dot" component={JobPageStellaDot} />
        <Route path="/my-experience/net-a-porter" component={JobPageNetAPorter} />
        <Route path="/my-experience/jet2" component={JobPageJet2} />
        <Route path="/my-skills" component={MySkillsPage} />
        <Route path="/my-projects" component={MyProjectsPage} />
        <Route path="/contact-me" component={ContactMePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </BrowserRouter>
);

export default AppRouter;
