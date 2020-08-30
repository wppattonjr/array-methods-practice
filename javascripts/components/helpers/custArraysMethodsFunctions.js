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


export { allBusinessNames, nyBusinessNames, getNewYorkCust }
