import isEmpty from 'lodash/isEmpty';


const today = new Date().toISOString().split('T')[0];
const pastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [pastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
    const array: string[] = [];
    for (let index = 1; index <= numberOfDays; index++) {
        let d = Date.now();
        if (index > 8) {
            // set dates on the next month
            const newMonth = new Date(d).getMonth() + 1;
            d = new Date(d).setMonth(newMonth);
        }
        const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
        const dateString = date.toISOString().split('T')[0];
        array.push(dateString);
    }
    return array;
}
function getPastDate(numberOfDays: number) {
    return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

export const agendaItems = [
    {
        title: dates[0],
        data: [
            { hour: '12am', duration: '4h', title: 'Limpieza de aciculas', details:{id:1,bonsai:'Junipero 1', especie :'Conifera'} }, 
            { hour: '3pm', duration: '4h', title: 'Alambrado', itemCustomHeightType: 'LongEvent', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' }}
        ]
    },
    {
        title: dates[1],
        data: [
            { hour: '4pm', duration: '1h', title: 'Limpieza de sustrato', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' }},
            { hour: '5pm', duration: '1h', title: 'Alamabrado',details:{id:1,bonsai:'Junipero 1', especie :'Conifera'}  }
        ]
    },
    {
        title: dates[2],
        data: [
            { hour: '1pm', duration: '1h', title: 'Transplante', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } }
        ]
    },
    {
        title: dates[3],
        data: [{ hour: '12am', duration: '1h', title: 'Cambio de posicion al exterior para mejorar', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } }]
    },
    {
        title: dates[8],
        data: [
            { hour: '9pm', duration: '1h', title: 'Retiro de alambre', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } }
        ]
    },
    {
        title: dates[9],
        data: [
            { hour: '1pm', duration: '1h', title: 'Retiro de restos de abono', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } },
            { hour: '2pm', duration: '1h', title: 'Eliminación de hierbas', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } }
        ]
    },
    {
        title: dates[13],
        data: [
            { hour: '12am', duration: '5h', title: 'Poda invernal', details:{id:1,bonsai:'Junipero 1', especie :'Conifera' } }
        ]
    }
];

export function getMarkedDates() {
    const marked: any = {};

    agendaItems.forEach(item => {
        // NOTE: only mark dates with data
        if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
            marked[item.title] = { marked: true };
        } else {
            marked[item.title] = { disabled: true };
        }
    });
    return marked;
}