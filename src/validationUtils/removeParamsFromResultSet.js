function removeParamsFromResultSet(resultset, paramName){
    return resultset.map(obj => {
        delete obj[paramName];        
        return  obj
    })
    
}
module.exports = removeParamsFromResultSet;