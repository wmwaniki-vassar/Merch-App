//load data when page loads
document.addEventListener('DOMContentLoaded', setDataForSearch);

//Search Functionality
document.getElementById("searchInput").addEventListener("input", search);

const collapsibleList = $('#items-collapsible')[0];
const cardsList = $('#items-cards')[0];

function addItemsToSearch(data) {

    data.forEach(handcraft => {
        let template = $('#collapsible-template')[0].content.cloneNode("true");
        template.querySelector("#item-slf").textContent = handcraft.slf;
        template.querySelector("#item-name").textContent = handcraft.name;
        template.querySelector("#item-stock").textContent = handcraft.stock;
        template.querySelector("#item-creole").textContent = handcraft.creole;
        template.querySelector("#item-material").textContent = handcraft.material;
        template.querySelector("#item-description").textContent = handcraft.description;
        template.querySelector("#item-tags").textContent = handcraft.tags;
        template.querySelector("#item-company").textContent = handcraft.company;
        template.querySelector("#item-style").textContent = handcraft.style;
        template.querySelector("#item-notes").textContent = handcraft.notes;
        template.querySelector("#item-retail").textContent = "$" + handcraft.retail;
        let imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
        template.querySelector("#item-image").src = imageSource;

        template.querySelector(".edit-button").dataset.slf = handcraft.slf;
        template.querySelector(".recieve-button").dataset.slf = handcraft.slf;
        template.querySelector(".sale-button").dataset.slf = handcraft.slf;
        template.querySelector(".inventoryCheck-button").dataset.slf = handcraft.slf;

        collapsibleList.appendChild(template);
    });

    data.forEach(handcraft => {
        let template = $('#cards-template')[0].content.cloneNode("true");
        template.querySelector("#item-slf").textContent = handcraft.slf;
        template.querySelector("#item-retail").textContent = "$" + handcraft.retail;
        template.querySelector("#item-name").textContent = handcraft.name;
        template.querySelector("#item-name2").innerHTML = handcraft.name + '<i class="material-icons right">close</i>';
        template.querySelector("#item-stock").textContent = handcraft.stock;
        template.querySelector("#item-creole").textContent = "(" + handcraft.creole + ")";
        template.querySelector("#item-material").textContent = handcraft.material;
        template.querySelector("#item-description").textContent = handcraft.description;
        template.querySelector("#item-tags").textContent = handcraft.tags;
        template.querySelector("#item-company").textContent = handcraft.company;
        template.querySelector("#item-style").textContent = handcraft.style;
        template.querySelector("#item-notes").textContent = handcraft.notes;

        let imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
        template.querySelector("#item-image").src = imageSource;

        template.querySelector(".edit-button").dataset.slf = handcraft.slf;
        template.querySelector(".recieve-button").dataset.slf = handcraft.slf;
        template.querySelector(".sale-button").dataset.slf = handcraft.slf;
        template.querySelector(".inventoryCheck-button").dataset.slf = handcraft.slf;

        cardsList.appendChild(template);
    });
}

let data;
function setDataForSearch() {
    google.script.run.withSuccessHandler((dataReturned) => {
        data = dataReturned.slice();
        addItemsToSearch(data);
    }).getHandcrafts();
};

function search() {
    var searchInput = document.getElementById("searchInput").value.toString().toLowerCase().trim();
    var searchWords = searchInput.split(/\s+/);
    // let  = ;
    var resultsArray = data.filter(function (r) {

        return searchWords.every(word => {
            let searchProperties = [r.slf, r.name, r.tags, r.description];
            return searchProperties.some(property => {
                return property.toString().toLowerCase().indexOf(word) !== -1;
            });
        });
    })
    collapsibleList.textContent = "";
    cardsList.textContent = "";
    addItemsToSearch(resultsArray);
}

//Edit functionality
document.getElementById("searchTab").addEventListener("click", clickEventHandler);

let editChip;

function editHandcraft() {

    let slf = $("#edit-slf")[0].value;

    let editedHandcraft = {};
    editedHandcraft.name = $("#edit-name")[0].value;
    editedHandcraft.creole = $("#edit-creole")[0].value;
    editedHandcraft.material = $("#edit-material")[0].value;
    editedHandcraft.description = $("#edit-description")[0].value;
    editedHandcraft.company = $("#edit-company")[0].value;
    editedHandcraft.style = $("#edit-style")[0].value;
    editedHandcraft.notes = $("#edit-notes")[0].value;
    editedHandcraft.retail = $("#edit-retail")[0].value;

    //handle tags
    let chipsData = editChip.chipsData.map(c => { return c.tag });
    editedHandcraft.tags = chipsData.join(",");

    google.script.run.withSuccessHandler(res => {

    }).editHandcraftBySlf(slf, editedHandcraft);
}

function clickEventHandler(e) {
    if (e.target.matches(".edit-button")) {
        let slf = e.target.dataset.slf;
        document.getElementById("edit-slf").value = slf;
        google.script.run.withSuccessHandler(editHandcraft => {
            $("#edit-material")[0].value = editHandcraft.material;
            $("#edit-company")[0].value = editHandcraft.company;
            $("#edit-style")[0].value = editHandcraft.style;
            $("#edit-name")[0].value = editHandcraft.name;
            $("#edit-creole")[0].value = editHandcraft.creole;
            $("#edit-retail")[0].value = "$" + editHandcraft.retail;
            $("#edit-description")[0].value = editHandcraft.description;
            $("#edit-notes")[0].value = editHandcraft.notes;

            //handle tags 
            if (editHandcraft.tags == "") {
                tagsArray = ["tags"];
            } else {
                tagsArray = editHandcraft.tags.split(',');
            }

            let tagData = [];
            tagsArray.forEach(tag => {
                let tagObj = {
                    tag: tag
                }
                tagData.push(tagObj);
            });

            var chipEl = document.getElementById('edit-tags');
            editChip = M.Chips.init(chipEl, {
                data: tagData
            });


            M.updateTextFields();

            //handle image
            if (document.documentElement.clientWidth < 500) {
                document.getElementById("edit-image").classList.add("responsive-img");
            }
            let imageSource = "https://drive.google.com/uc?export=view&id=" + editHandcraft.imageId;
            $("#edit-image").attr("src", imageSource);

        }).getHandcraftBySlf(slf);
    }

    if (e.target.matches("#save-changes")) {
        editHandcraft();
    }
}

//add new handcraft

document.getElementById("add-new").addEventListener("click", addNew);

function addNew() {
    let newHandcraft = {};
    newHandcraft.name = $("#new-name")[0].value;
    newHandcraft.creole = $("#new-creole")[0].value;
    // newHandcraft.material = $("#new-material")[0].value;
    newHandcraft.description = $("#new-description")[0].value;
    newHandcraft.company = $("#new-company")[0].value;
    newHandcraft.style = $("#new-style")[0].value;
    newHandcraft.notes = $("#new-notes")[0].value;
    newHandcraft.retail = $("#new-retail")[0].value;

    //handle select
    var selectEl = document.getElementById('new-material');
    let material = M.FormSelect.init(selectEl);

    newHandcraft.material = material.getSelectedValues();

    //handle tags
    var chipElement = document.getElementById('new-tags');
    let newChip = M.Chips.init(chipElement);
    let chipsData = newChip.chipsData.map(c => { return c.tag });
    newHandcraft.tags = chipsData.join(",");
    google.script.run.withSuccessHandler(res => {

    }).addNewHandcraft(newHandcraft);

}

//File Upload
function saveEditFile(e) {

}