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

```
