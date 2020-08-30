import { allBusinessNames, nyBusinessNames, getNewYorkCust } from './components/helpers/custArraysMethodsFunctions.js'
import { businesses } from './components/helpers/data/custData.js'


const init = () => {
    allBusinessNames(businesses);
    nyBusinessNames(getNewYorkCust);
}

init();