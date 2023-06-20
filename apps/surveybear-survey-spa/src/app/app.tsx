
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';
import StartPage from './pages/StartPage';
import ThankPage from './pages/ThankPage';


import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        <Route
          path="/"
          element={<StartPage/>} />
        <Route
          path="/thanks"
          element={<ThankPage/>} />
      </Routes>
   </StyledApp>
  );

}


export default App;
