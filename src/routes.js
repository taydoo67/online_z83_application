import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Page1A from './components/Page1A'
import Page1B from './components/Page1B'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page4b from './components/Page4b'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/page1a' component={Page1A} />
                <Route exact path='/page1b' component={Page1B} />
                <Route exact path='/page2' component={Page2} />
                <Route exact path='/page3' component={Page3} />
                <Route exact path='/page4' component={Page4} />
                <Route exact path='/page4b' component={Page4b} />
                <Route exact path='/page5' component={Page5} />
                <Route exact path='/page6' component={Page6} />
                <Route exact path='/page7' component={Page7} />
            </Switch>
        </Router>
    )
}

export default Routes