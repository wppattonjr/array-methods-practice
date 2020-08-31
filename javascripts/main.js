import { allBusinessNames, nyBusinessNames, getNewYorkCust, manufacturingBusinessNames, getManufCust, agentArray, purchaseAgents } from './components/helpers/custArraysMethodsFunctions.js'
import { businesses } from './components/helpers/data/custData.js'


const init = () => {
    allBusinessNames(businesses);
    nyBusinessNames(getNewYorkCust);
    manufacturingBusinessNames(getManufCust);
    agentArray(purchaseAgents);
}

init();