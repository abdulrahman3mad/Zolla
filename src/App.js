import Home from "./pages/Home"
import SignUp from "./pages/auth/signUp/SignUp"
import LogIn from "./pages/auth/logIn/LogIn"
import Loading from "./pages/loading/Loading"
import Course from "./pages/course/Course"
import Courses from "./pages/courses/Courses"
import Profile from "./pages/profile/Profile"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import theme from "./utilities/materialThemeSetting"
import "./app.scss"


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
        <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
              <Route path="/profile">
              <Profile />
            </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App;
