export const typeCurrency = {
    currencyCOP:"COP",
    currencyEUR:"EUR",
    currencyUSD:"USD",
    CurrencyMXN:"MXN",
}
 
export const moneyExp = {
    numberFormat: (number) => ("$ " + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"), 
    numberMoney: (numberMoney,typeMonetFormat,currency) => new Intl.NumberFormat(typeMonetFormat, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
      }).format(numberMoney),
}