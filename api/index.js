//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const allCountries = Country.findAll();
    if(!allCountries.length){
      //https://restcountries.com/v3/all
    const apiCountriesResponse = await axios.get('https://apimocha.com/pi-countries/countries');
    var apiCountries = apiCountriesResponse.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flag,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : 'Not found',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        activities: []
    }
    })
        await Country.bulkCreate(apiCountries);
        console.log('creado')
  }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
