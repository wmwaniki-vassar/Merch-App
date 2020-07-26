// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"d6sW":[function(require,module,exports) {
//load data when page loads
document.addEventListener('DOMContentLoaded', setDataForSearch); //Search Functionality

document.getElementById("searchInput").addEventListener("input", search);
var collapsibleList = $('#items-collapsible')[0];
var cardsList = $('#items-cards')[0];

function addItemsToSearch(data) {
  data.forEach(function (handcraft) {
    var template = $('#collapsible-template')[0].content.cloneNode("true");
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
    var imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
    template.querySelector("#item-image").src = imageSource;
    template.querySelector(".edit-button").dataset.slf = handcraft.slf;
    template.querySelector(".recieve-button").dataset.slf = handcraft.slf;
    template.querySelector(".sale-button").dataset.slf = handcraft.slf;
    template.querySelector(".inventoryCheck-button").dataset.slf = handcraft.slf;
    collapsibleList.appendChild(template);
  });
  data.forEach(function (handcraft) {
    var template = $('#cards-template')[0].content.cloneNode("true");
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
    var imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
    template.querySelector("#item-image").src = imageSource;
    template.querySelector(".edit-button").dataset.slf = handcraft.slf;
    template.querySelector(".recieve-button").dataset.slf = handcraft.slf;
    template.querySelector(".sale-button").dataset.slf = handcraft.slf;
    template.querySelector(".inventoryCheck-button").dataset.slf = handcraft.slf;
    cardsList.appendChild(template);
  });
}

var data;

function setDataForSearch() {
  google.script.run.withSuccessHandler(function (dataReturned) {
    data = dataReturned.slice();
    console.log(data);
  }).getHandcrafts();
}

function search() {
  var searchInput = document.getElementById("searchInput").value.toString().toLowerCase().trim();
  var searchWords = searchInput.split(/\s+/); // let  = ;

  var resultsArray = data.filter(function (r) {
    return searchWords.every(function (word) {
      var searchProperties = [r.slf, r.name, r.tags, r.description];
      return searchProperties.some(function (property) {
        return property.toString().toLowerCase().indexOf(word) !== -1;
      });
    });
  });
  collapsibleList.textContent = "";
  cardsList.textContent = "";
  addItemsToSearch(resultsArray);
} //Edit functionality


document.getElementById("searchTab").addEventListener("click", clickEventHandler);
var instance = M.Tabs.getInstance("#tabs");

function clickEventHandler(e) {
  if (e.target.matches(".edit-button")) {
    document.getElementById("edit-slf").value = e.target.dataset.slf;
    $("#editTab").removeClass("disabled");
    instance.select('hidden-tab');
  }
}
},{}]},{},["d6sW"], null)