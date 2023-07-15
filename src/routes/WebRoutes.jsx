import { Route, Routes } from 'react-router-dom';
import AccordionPractice from '../pages/AccordionPractice';
import EatAndSplit from '../pages/EatAndSplit/EatAndSplit';
import GEOLocation from '../pages/GEOLocation';

const WebRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path={'/'} element={<AccordionPractice />} />
            <Route exact path={'/eat-n-split'} element={<EatAndSplit />} />
            <Route exact path={'/geo-location'} element={<GEOLocation />} />
        </Routes>
    </>
  )
}

export default WebRoutes