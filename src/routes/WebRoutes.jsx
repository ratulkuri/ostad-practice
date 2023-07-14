import { Route, Routes } from 'react-router-dom';
import AccordionPractice from '../pages/AccordionPractice';

const WebRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path={'/'} element={<AccordionPractice />} />
        </Routes>
    </>
  )
}

export default WebRoutes