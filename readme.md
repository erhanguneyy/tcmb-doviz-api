## Installation
```bash
# installation via npm
npm install tcmb-doviz-api
```

## Examples
```js

const tcmbCurrency = require('tcmb-doviz-api')

//Tüm döviz kurlarını getirir
const result = await tcmbCurrency.getAllCurrency()
console.log(result);

//Sadece USD'nin bilgilerini getirir
const result = await tcmbCurrency.getCurrency('USD')
console.log(result);

//05.01.2024 Tarihinde yayınlanmış kur bilgilerini getirir.
const result = await tcmbCurrency.getOldDateAllCurrency('2024','01','05')
console.log(result);

//05.01.2024 Tarihinde yayınlanmış USD kur bilgilerini getirir.
const result = await tcmbCurrency.getOldDateCurrency('2024','01','05','USD')
console.log(result);

// USD cinsinden 100TL tutarının güncel alış ve satış değerlerini hesaplar
const result = await convertCurrency('USD', 100);
console.log(result);

// 05.01.2024 tarihinde yayınlanmış USD kuru üzerinden 100TK tutarının alış ve satış değerlerini hesaplar
const result = await convertOldDateCurrency('2024', '01', '05', 'USD', 100);
console.log(result);

```
