import './App.css';
import 'antd/dist/reset.css';
import AppLayout from './layouts'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import AuthGuard from './features/auth/AuthGuard';
import Welcome from './features/static/Welcome';
import PatientList from './features/patients/PatientList'
import PatientView from './features/patients/PatientView';
import Payments from './features/payments'
import InquiryList from './features/inquiries/InquiryList';
import InquiryView from './features/inquiries/InquiryView';
import Calender from './features/calender';
import Diets from './features/diets';
import Exercises from './features/exercises';
import Plans from './features/plans';
function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthGuard><AppLayout /></AuthGuard>}>
          <Route index element={<Welcome />} />
          <Route path='/calender' element={<Calender />} />

          <Route path='/patients' element={<PatientList />} />
          <Route path='/patients/:id' element={<PatientView />} />

          <Route path='/diets' element={<Diets />} />

          <Route path='/exercises' element={<Exercises />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/payments' element={<Payments />} />

          <Route path='/inquiries' element={<InquiryList />} />
          <Route path='/inquiries/:id' element={<InquiryView />} />

        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
