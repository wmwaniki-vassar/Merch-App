//handle handcrafts

const ws = ss.getSheetByName("Items");

function getHandcrafts() {

    //EXAMPLE: Get the data range based on our selected columns range.
    let dataRange = ws.getRange(1, 1, lastRow, ws.getLastColumn());
    let handcraftsArray = dataRange.getValues();

    let headers = handcraftsArray.shift();

    let handcraftsJSON;

    handcraftsJSON = handcraftsArray.map(r => {

        let obj = {};

        r.forEach((cellVal, i) => {
            obj[headers[i]] = cellVal;
        })
        images = getImages();
        for (let i = 0; i < images.length; i++) {
            if (images[i].slf.toUpperCase() === obj.slf) {
                obj.imageId = images[i].id;
            }
        }

        return obj;

    });
    return handcraftsJSON;
}


function getHandcraftBySlf(slf) {
    const custIds = ws.getRange(2, 1, lastRow - 1, 1).getValues().map(r => r[0].toString().toLowerCase());
    const posIndex = custIds.indexOf(slf.toString().toLowerCase());
    const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
    const columnHeaders = ws.getRange(1, 1, 1, ws.getLastColumn()).getValues()[0];
    const values = ws.getRange(rowNumber, 1, 1, ws.getLastColumn()).getValues()[0];
    let handcraft = {};

    values.forEach((cellVal, i) => {
        handcraft[columnHeaders[i]] = cellVal;
    });
    images = getImages();
    for (let i = 0; i < images.length; i++) {
        if (images[i].slf.toUpperCase() === handcraft.slf) {
            handcraft.imageId = images[i].id;
        }
    }
    return handcraft;
}


function editHandcraftBySlf(slf, editedHandcraft) {
    const custIds = ws.getRange(2, 1, lastRow - 1, 1).getValues().map(r => r[0].toString().toLowerCase());
    const posIndex = custIds.indexOf(slf.toString().toLowerCase());
    const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
    ws.getRange(rowNumber, 2, 1, 9).setValues([[
        editedHandcraft.name,
        editedHandcraft.creole,
        editedHandcraft.material,
        editedHandcraft.description,
        editedHandcraft.tags,
        editedHandcraft.company,
        editedHandcraft.style,
        editedHandcraft.notes,
        editedHandcraft.retail
    ]]);
    return true;
}

function addNewHandcraft(newhandcraft){
   ws.getRange(lastRow+1, 2, 1, 9).setValues([[
    newhandcraft.name,
    newhandcraft.creole,
    newhandcraft.material,
    newhandcraft.description,
    newhandcraft.tags,
    newhandcraft.company,
    newhandcraft.style,
    newhandcraft.notes,
    newhandcraft.retail
]]);
return true;
}

function test() {
    addNewHandcraft({
       name: "Test",
       creole: "Gebriel",
       material: "Molla",
       description: "Belaineh",
       tags: "Ababa",
       company: "G",
       style: "Ethiopia",
       notes: "Testing",
       retail: "$0.99"
    });
}







































// handle tasks

function getTasks() {
    const ws = ss.getSheetByName(tasksSheet);
    const data = ws.getRange("A1").getDataRegion().getValues();
    const tasksHeaders = data.shift();

    const tasksJSON = data.map(r => {
        let obj = {};
        tasksHeaders.forEach((h, i) => {
            obj[h] = r[i];
        });

        return obj;
    })
    return tasksJSON;
};

function postTasks(passedJSON) {
    const requiredColumns = ["task", "due"]; //must be included in post request

    let jsonResponse;

    const ws = ss.getSheetByName(tasksSheet);

    const tasksHeaders = ws.getRange(1, 1, 1, ws.getLastColumn()).getValues()[0];
    const tasksHeadersOriginalOrder = tasksHeaders.slice();
    console.log(tasksHeadersOriginalOrder);
    // remove id columns header
    tasksHeaders.shift();
    tasksHeaders.sort();
    console.log(tasksHeaders);


    const headersPassed = Object.keys(passedJSON).sort();

    if (!checkPropertiesPassed_(tasksHeaders, headersPassed, requiredColumns)) {
        jsonResponse = { status: 500, message: "Invalid arguments passed" };
        return sendJSON_(jsonResponse);
    }

    const dataArray = tasksHeadersOriginalOrder.map(h => passedJSON[h]);

    const aoaIds = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();
    const newIdNumber = getMaxFromArrayOfArray_(aoaIds) + 1;
    dataArray.unshift(newIdNumber);

    ws.appendRow(dataArray);

    passedJSON.id = newIdNumber
    return passedJSON;
}

