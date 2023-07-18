import { Route, Routes } from 'react-router-dom';
import AccordionPractice from '../pages/AccordionPractice';
import Bank from '../pages/Bank/Bank';
import CurrencyConverter from '../pages/CurrencyConverter/CurrencyConverter';
import EatAndSplit from '../pages/EatAndSplit/EatAndSplit';
import GEOLocation from '../pages/GEOLocation';
import TextExpander from '../pages/TextExpander/TextExpander';
import TipCalculator from '../pages/TipCalculator/TipCalculator';
import TravelList from '../pages/TravelList/TravelList';

const WebRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path={'/'} element={<AccordionPractice />} />
            <Route exact path={'/eat-n-split'} element={<EatAndSplit />} />
            <Route exact path={'/geo-location'} element={<GEOLocation />} />
            <Route exact path={'/travel-list'} element={<TravelList />} />
            <Route exact path={'/tip-calculator'} element={<TipCalculator />} />
            <Route exact path={'/text-expander'} element={<TextExpander />} />
            <Route exact path={'/currency-converter'} element={<CurrencyConverter />} />
            <Route exact path={'/bank'} element={<Bank />} />
        </Routes>
    </>
  )
}

export default WebRoutes