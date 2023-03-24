import datepicker from 'js-datepicker'
const datepicker = require('js-datepicker');

let options = {
    onSelect: instance => {
        // Show which date was selected.
        console.log(instance.dateSelected)
    },
    formatter: (input, date, instance) => {
        // const value = date.toLocaleDateString();
        const day = date.getMonth() + 1;
        input.value = day // => '1/1/2099'
    }
};
const picker = datepicker(document.querySelector('#datepicker'), options);


