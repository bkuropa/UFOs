//import data from data.js
const tableData = data;

//Refernce the HTTTML table tatg using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear past data
    tbody.html("");

    //loop through each object & append a row and cells for each value in rows
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Loop through each object & append row + cells for each value
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // Get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Was the date entered?  Filter on date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Remake table with filtered data
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);