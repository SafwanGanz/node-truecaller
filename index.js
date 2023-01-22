const { searchNumber } = require('truecallerjs');
module.exports = {
  lookup: function lookup(number) {
var searchData = {
    number: number,
    countryCode: "IN",
    installationId: "a1i0N--dBbtOJVI-xzDnrgBQss_LZ-hhHLUVKDQIGdUv67EmgHq24xutl6ew11HU",
    output: "JSON"
}

var sn = await searchNumber(searchData);

return sn
}
}
