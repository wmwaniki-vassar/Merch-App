const ss = SpreadsheetApp.getActiveSpreadsheet();
const itemsSheet = "Items";
const tasksSheet = "Tasks";

//Loading views
function loadMainForm() {
  const htmlServ = HtmlService.createTemplateFromFile("index");
  const html = htmlServ.evaluate();
  html.setWidth(1400).setHeight(1000);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Handcrafts");

}

function createMenu_() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("❤ Merch");
  menu.addItem("Items", "loadMainForm");
  menu.addToUi();
}

function onOpen() {

  createMenu_();
}

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}