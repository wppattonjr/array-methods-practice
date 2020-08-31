import { businesses } from './data/custData.js'

const allBusinessNames = (data) => {
    $('#allBusinessNames').html('');
    data.forEach(custData => {
        $('#allBusinessNames').append(
            `<h2>${custData.companyName}</h2>
             <section>
                ${custData.addressFullStreet}
            </section>
                <section>
                    ${custData.addressCity},
                    ${custData.addressStateCode}
                    ${custData.addressZipCode}
                    <hr/>
                </section>`
                
        )
    })
    
};

const getNewYorkCust = businesses.filter((custData) => {
    return custData.addressStateCode === 'NY'
});

const getManufCust = businesses.filter((custData) => {
    return custData.companyIndustry === 'Manufacturing'
});

let purchaseAgents = businesses.map((agent) => {
    return {purchasingAgent: agent.purchasingAgent, companyName: agent.companyName, phoneWork: agent.phoneWork}
    
});

console.log(purchaseAgents)

const nyBusinessNames = (data) => {
    $('nyBusinessNames').html('');
    data.forEach(custData => {
        $('#nyBusinessNames').append(
            `<h2>${custData.companyName}</h2>
             <section>
                ${custData.addressFullStreet}
            </section>
                <section>
                    ${custData.addressCity},
                    ${custData.addressStateCode}
                    ${custData.addressZipCode}
                    <hr/>
                </section>`
                
        )
    })
    
};

const manufacturingBusinessNames = (data) => {
    $('#manufBusinessNames').html('');
    data.forEach(custData => {
        $('#manufBusinessNames').append(
            `<h2>${custData.companyName}</h2>
             <section>
                ${custData.addressFullStreet}
            </section>
                <section>
                    ${custData.addressCity},
                    ${custData.addressStateCode}
                    ${custData.addressZipCode}
                    <hr/>
                </section>`
        )
    })
            
};

const agentArray = (array) => {
    $('#purchasingAgents').html('');
    array.forEach(agent => {
        $('#purchasingAgents').append(
            `<h4>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h4>
            <section>
                <h5>${agent.companyName}</h5>
            </section>
            <section>
            ${agent.phoneWork}
            <hr/>
            </section>`
        )
    })
            
};



export { allBusinessNames, nyBusinessNames, manufacturingBusinessNames, agentArray, getNewYorkCust, getManufCust, purchaseAgents }
