import moment from "moment-with-locales-es6";

// moment().format('MMMM Do YYYY, h:mm:ss a'); // September 8th 2023, 7:51:57 pm
// moment().format('dddd');                    // Friday
// moment().format("MMM Do YY");               // Sep 8th 23
// moment().format('YYYY [escaped] YYYY');     // 2023 escaped 2023
// moment().format();                         

export let formatDate = {
    getFormatDateComplete: (date) => {
        return moment(date).format('D MMMM  YYYY, h:mm a');
    },
    getFormatDateday: (date) => {
        return moment(date).format('dddd');
    },
    getFormatDateMonth: (date) => {
        return moment(date).format("MMM  YY");
    },
    getFormatDateYear: (date) => {
        return moment(date).format('YYYY [escaped] YYYY');
    },
}
// moment("20111031", "YYYYMMDD").fromNow(); // 12 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 11 years ago
// moment().startOf('day').fromNow();        // 20 hours ago
// moment().endOf('day').fromNow();          // in 4 hours
// moment().startOf('hour').fromNow();      

export const getFormatTimeComplete = {
    getFormatTimeRelativeTime: (date) => {
        return moment(date,).fromNow("YYYYMMDD");
    },
    getFormatTimeStartDay: (date) => {
        return moment(date).startOf('day').fromNow();
    },
    getFormatTimeEndDay: (date) => {
        return moment(date).endOf('day').fromNow();
    },
    getFormatTimeStartHour: (date) => {
        return moment(date).startOf('hour').fromNow();
    },

}

// moment().subtract(10, 'days').calendar(); // 08/29/2023
// moment().subtract(6, 'days').calendar();  // Last Saturday at 7:52 PM
// moment().subtract(3, 'days').calendar();  // Last Tuesday at 7:52 PM
// moment().subtract(1, 'days').calendar();  // Yesterday at 7:52 PM
// moment().calendar();                      // Today at 7:52 PM
// moment().add(1, 'days').calendar();       // Tomorrow at 7:52 PM
// moment().add(3, 'days').calendar();       // Monday at 7:52 PM
// moment().add(10, 'days').calendar();     

export const getFormatTimeCalendar = {
    getFormatTimeSubtractDays: (date) => {
        return moment(date).subtract(10, 'days').calendar();
    },
    getFormatTimeSubtractDaysTwo: (date) => {
        return moment(date).subtract(6, 'days').calendar();
    },
    getFormatTimeSubtractDaysThree: (date) => {
        return moment(date).subtract(3, 'days').calendar();
    },
    getFormatTimeSubtractDaysFour: (date) => {
        return moment(date).subtract(1, 'days').calendar();
    },
    getFormatTimeCalendar: (date) => {
        return moment(date).calendar();
    },
    getFormatTimeAddDays: (date) => {
        return moment(date).add(1, 'days').calendar();
    },
    getFormatTimeAddDaysTwo: (date) => {
        return moment(date).add(3, 'days').calendar();
    }
}


// moment.locale();         // en
// moment().format('LT');   // 7:54 PM
// moment().format('LTS');  // 7:54:53 PM
// moment().format('L');    // 09/08/2023
// moment().format('l');    // 9/8/2023
// moment().format('LL');   // September 8, 2023
// moment().format('ll');   // Sep 8, 2023
// moment().format('LLL');  // September 8, 2023 7:54 PM
// moment().format('lll');  // Sep 8, 2023 7:54 PM
// moment().format('LLLL'); // Friday, September 8, 2023 7:54 PM
// moment().format('llll'); // Fri, Sep 8, 2023 7:54 PM

export const getFormatTimeLocale = {
    getFormatTimeLocale: (date) => {
        return moment(date).locale();
    },
    getFormatTimeLT: (date) => {
        return moment(date).format('LT');
    },
    getFormatTimeLTS: (date) => {
        return moment(date).format('LTS');
    },
    getFormatTimeL: (date) => {
        return moment(date).format('L');
    }
    ,
    getFormatTimel: (date) => {
        return moment(date).format('l');
    }
    ,
    getFormatTimeLL: (date) => {
        return moment(date).format('LL');
    },
    getFormatTimell: (date) => {
        return moment(date).format('ll');
    }
    ,
    getFormatTimeLLL: (date) => {
        return moment(date).format('LLL');
    }
    ,
    getFormatTimelll: (date) => {
        return moment(date).format('lll');
    }
    ,
    getFormatTimeLLLL: (date) => {
        return moment(date).format('LLLL');
    }
    ,
    getFormatTimellll: (date) => {
        return moment(date).format('llll');
    }
}
    