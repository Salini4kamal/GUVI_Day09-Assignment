var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function() {
    var data = JSON.parse(request.response);
    console.log(data);
    //Get all the countries with a population of
    //less than 2 lakhs using Filter function
    var popu = data.filter((ele) => ele.population < 200000)
    console.log(popu)
    for (var i = 0; i < popu.length; i++) {
        console.log(`country:${popu[i].name} population:${popu[i].population}`);
    }
    //Print the following details name, capital, flag using forEach function
    var details = data.forEach(ele =>
            console.log(`Name:${ele.name} Capital:${ele.capital} flag:${ele.flag}`))
        //Print the total population of countries using reduce function
    var totPopulation = data.reduce((total, ele) => total + ele.population, 0)
    console.log(`TotalPopulation:${totPopulation}`);

    //Print the country which uses US Dollars as currency.



    for (let i = 0; i < data.length; i++) {
        let isCurrency = data[i].currencies !== undefined;
        if (isCurrency) {
            let currencyArr = data[i].currencies;

            for (let i = 0; i < currencyArr.length; i++) {
                if (currencyArr[i].code == "USD") {


                    console.log("Currency USD Country: ", data[i].name);
                }
            }

        }
    }

};