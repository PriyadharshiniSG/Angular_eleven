const cloudant = require('@cloudant/cloudant');
var url =
  'https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/';
var username = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
var password = 'bd763fb0b51e2d8e968a8154ae9b7869';
var cloudant = Cloudant({ url: url, username: username, password: password });
insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use('cargo-database')
    .insert(paramsvalue)
    .then((data) => {
      console.log('Data Inserted' + data);
    })
    .catch((err) => {
      console.log(err);
    });
};
