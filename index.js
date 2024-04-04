const axios = require('axios')
var parseString = require('xml2js').parseString;
var fs = require('fs');

async function getAllCurrency() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.tcmb.gov.tr/kurlar/today.xml',
    };

    try {
        const response = await axios.request(config);
        const allCurrency = [];
        parseString(response.data, function (err, result) {
            if (err) {
                console.error(err);
                return; // Handle parsing error
            }

            for (let i = 0; i < result.Tarih_Date.Currency.length; i++) {
                allCurrency.push({
                    tarih: result.Tarih_Date.$.Tarih,
                    currencyCode: result.Tarih_Date.Currency[i].$.CurrencyCode,
                    currencyName: result.Tarih_Date.Currency[i].CurrencyName[0],
                    buying: Number(result.Tarih_Date.Currency[i].ForexBuying),
                    selling: Number(result.Tarih_Date.Currency[i].ForexSelling),
                });
            }
        });
        return allCurrency; // Return the populated array after processing
    } catch (error) {
        console.error(error);
    }
}


async function getCurrency(tcmbCurrencyCode) {
    const allCurrency = await getAllCurrency()
    const result = allCurrency.find(({ currencyCode }) => currencyCode === tcmbCurrencyCode);
    return result
}


async function getOldDateAllCurrency(year, month, day) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.tcmb.gov.tr/kurlar/${year + month}/${day + month + year}.xml`,
    };

    try {
        const response = await axios.request(config);
        const allCurrency = [];
        parseString(response.data, function (err, result) {
            if (err) {
                console.error(err);
                return; // Handle parsing error
            }

            for (let i = 0; i < result.Tarih_Date.Currency.length; i++) {
                allCurrency.push({
                    tarih: result.Tarih_Date.$.Tarih,
                    currencyCode: result.Tarih_Date.Currency[i].$.CurrencyCode,
                    currencyName: result.Tarih_Date.Currency[i].CurrencyName[0],
                    buying: Number(result.Tarih_Date.Currency[i].ForexBuying),
                    selling: Number(result.Tarih_Date.Currency[i].ForexSelling),
                });
            }
        });
        return allCurrency;
    } catch (error) {
        console.error(error);
    }
}


async function getOldDateCurrency(year, month, day, tcmbCurrencyCode) {
    const allCurrency = await getOldDateAllCurrency(year, month, day)
    const result = allCurrency.find(({ currencyCode }) => currencyCode === tcmbCurrencyCode);
    console.log(result);
    return result
}

module.exports = { getAllCurrency, getCurrency, getOldDateAllCurrency, getOldDateCurrency }
