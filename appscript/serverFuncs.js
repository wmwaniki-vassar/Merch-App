//helper functions

function getLastRowSpecial(range) {
    let rowNum = 0;
    let blank = false;
    for (let row = 0; row < range.length; row++) {

        if (range[row][0] === "" && !blank) {
            rowNum = row;
            blank = true;

        } else if (range[row][0] !== "") {
            blank = false;
        };
    };
    return rowNum;
};

 //Select the column we will check for the first blank cell
    let columnToCheck = ss.getRange("A:B").getValues();

    // Get the last row based on the data range of a single column.
    let lastRow = getLastRowSpecial(columnToCheck);

function checkPropertiesPassed_(arrAllCols, arrPassedCols, arrRequiredCols) {

    if (!arrRequiredCols.every(item => arrPassedCols.includes(item))) return false;
    if (!arrPassedCols.every(item => arrAllCols.includes(item))) return false;
    return true;

}

function getMaxFromArrayOfArray_(aoa) {
    let maxID = 0;
    aoa.forEach(r => {
        if (r[0] > maxID) maxID = r[0];
    });
    return maxID;
}

