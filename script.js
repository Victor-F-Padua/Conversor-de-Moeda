const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".select-value")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-money").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")



    const dolarToday = 5.29
    const euroToday = 6.26
    const libraToday = 7.2
    const bitCoinToday = 470000.00

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(inputCurrencyValue / bitCoinToday)
    }








    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".image-currency")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assents/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "./assents/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImage.src = "./assents/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assents/bitcoin.png"
    }



    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
