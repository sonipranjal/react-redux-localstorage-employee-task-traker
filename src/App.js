import { Switch, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';

import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-new-employee" component={EmployeeForm} />
        <Route path="/employee/:slug" component={EmployeeDetails} />
      </Switch>
    </>
  );
};

export default App;
