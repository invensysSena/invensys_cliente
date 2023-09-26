export const typeCurrency = {
    currencyCOP:"COP",
    currencyEUR:"EUR",
    currencyUSD:"USD",
    CurrencyMXN:"MXN",
}

export const typeMonetFormat = {
    formatCOP:"es-CO",
    formatEUR:"es-ES",
    formatUSD:"en-US",
    formatMXN:"es-MX",
}
 
export const moneyExp = {
    numberFormat: (number) => ("$ " + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"), 
    numberFormatTwho: (number)=>(" " + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1."),
    numberMoney: (numberMoney) => new Intl.NumberFormat(typeMonetFormat.formatUSD, {
        style: "currency",
        currency: typeCurrency.currencyUSD,
        minimumFractionDigits: 2,
      }).format(numberMoney),
}

