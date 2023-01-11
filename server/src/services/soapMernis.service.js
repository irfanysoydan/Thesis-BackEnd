var express = require("express");
var soap = require("soap");
var app = express();
module.exports = {
  mernisCheck: async (tc, ad, soyad, dogumyili) => {
    var url = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL";
    var args = {
      TCKimlikNo: tc,
      Ad: ad,
      Soyad: soyad,
      DogumYili: dogumyili,
    };

    return new Promise((resolve, reject) => {
      soap.createClient(url, function (err, client) {
        if (err) reject(err);
        client.TCKimlikNoDogrula(args, function (err, result) {
          if (err) reject(err);
          console.log(result.TCKimlikNoDogrulaResult);
          resolve(result.TCKimlikNoDogrulaResult);
        });
      });
    });
  },
};
