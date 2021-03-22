// Code your solution here

function findMatching(driverArray, name) {
    let match = driverArray.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase()
    })

    return match
}

function fuzzyMatch(driverArray, firstLetters) {
    let iniMatch = driverArray.filter(function(driver){
        if (driver.substring(0,2) === firstLetters) {
            return driver
        }
    
    })

    return iniMatch
}

function matchName (driverArray, name) {
    return driverArray.filter(function(driver) {
        if (driver.name === name) {
        return driver}
        }
    )}