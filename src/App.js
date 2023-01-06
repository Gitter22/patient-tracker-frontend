import './App.css';
import 'antd/dist/reset.css';
import AppLayout from './layouts'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import AuthGuard from './features/auth/AuthGuard';
import Welcome from './features/static/Welcome';
import Patients from './features/patients'
import Payments from './features/payments'
import Inquiries from './features/inquiries'
import Calender from './features/calender';
import Diets from './features/diets';
import Exercises from './features/exercises';
import TreatmentPlans from './features/treatment-plans';
function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthGuard><AppLayout /></AuthGuard>}>
          <Route index element={<Welcome />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/diets' element={<Diets />} />
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/treatment-plans' element={<TreatmentPlans />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/inquiries' element={<Inquiries />} />

        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
