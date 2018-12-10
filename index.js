// Code your solution in this file!
const logDriverNames = function(drivers){
    return drivers.forEach(function(driver){
        console.log(driver.name)
    })
}

const logDriversByHometown = function(drivers, town) {
    return drivers.forEach(function (driver){
        if (driver.hometown === town) {
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers){
    return drivers.slice().sort (function (a,b){
        return a.revenue - b.revenue
    })
}

const driversByName = function(drivers){
    return drivers.slice().sort(function (a,b){
        return (a.name).localeCompare(b.name)
    })
}


const totalRevenue = function(drivers){
    return drivers.reduce(function(agg, el){
        return agg + el.revenue
    },0)
}

const averageRevenue = function(drivers){
    return drivers.reduce(function(agg, el){
        return agg + el.revenue
    },0)/drivers.length
}
