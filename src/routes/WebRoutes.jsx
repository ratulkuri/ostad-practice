import { Route, Routes } from 'react-router-dom';
import AccordionPractice from '../pages/AccordionPractice';
import EatAndSplit from '../pages/EatAndSplit/EatAndSplit';

const WebRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path={'/'} element={<AccordionPractice />} />
            <Route exact path={'/eat-n-split'} element={<EatAndSplit />} />
        </Routes>
    </>
  )
}

export default WebRoutes