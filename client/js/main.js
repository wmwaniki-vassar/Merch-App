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

function clickEventHandler(e) {
    if (e.target.matches(".edit-button")) {
        let slf = e.target.dataset.slf;
        document.getElementById("edit-slf").value = slf;
        google.script.run.withSuccessHandler( editHandcraft => {
            $("#edit-material")[0].value = editHandcraft.material;
            $("#edit-company")[0].value = editHandcraft.company;
            $("#edit-style")[0].value = editHandcraft.style;
            $("#edit-name")[0].value = editHandcraft.name;
            $("#edit-creole")[0].value = editHandcraft.creole;
            $("#edit-description")[0].value = editHandcraft.description;
            $("#edit-tags")[0].value = editHandcraft.tags;
            $("#edit-notes")[0].value = editHandcraft.notes;
            M.updateTextFields();
        }).getHandcraftBySlf(slf);
    }
}