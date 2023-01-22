const {searchNumber} = require('truecallerjs');
async function search (number, id) {
var searchData = {
    number: number,
    countryCode: id,
    installationId: "a1i0N--dBbtOJVI-xzDnrgBQss_LZ-hhHLUVKDQIGdUv67EmgHq24xutl6ew11HU",
    output: "JSON"
}

var sn = await searchNumber(searchData);

return sn

}
module.exports = search
