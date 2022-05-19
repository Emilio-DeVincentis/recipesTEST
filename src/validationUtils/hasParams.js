function hasParams(json, toHaveParams) {
   return toHaveParams.map( param => json.hasOwnProperty(param)).every((x) => x)? json : false
}

module.exports = hasParams