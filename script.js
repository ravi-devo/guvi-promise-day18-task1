const f1Data = document.querySelector('.f1-formula-data');

//Anonumous function that will automatically called
(async function () {
    try {
        const response = await fetch("https://ergast.com/api/f1/drivers.json?");
        const jsonData = await response.json();
        f1FormulaRacing(jsonData);
        console.log(jsonData);
    } catch (error) {
        console.log("Error: ", error);
    }
})();

function f1FormulaRacing(jsonData) {
    const f1Drivers = jsonData.MRData.DriverTable.Drivers;
    let counter = 1;
    for (const {
        "url": biographyURL,
        "givenName": name,
        "familyName": lastName,
        "dateOfBirth": dOB,
        "nationality": nationality
    }
        of f1Drivers) {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${counter}</td>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${dOB}</td>
            <td>${nationality}</td>
            <td><a href="${biographyURL}" target="_blank">${name}'s biography</a></td>
            `;
        f1Data.appendChild(tableRow);
        counter++;
    }
}