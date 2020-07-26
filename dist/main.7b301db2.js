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
// sample data
var sampleData = [{
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: '45',
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: '45',
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: 45,
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: 45,
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: 45,
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: 45,
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}, {
  slf: 'PM-1',
  name: 'Ant',
  creole: 'Petit Cocinelle',
  material: 'Paper Mache',
  description: 'Small paper Mache ant',
  tags: 'small ant red insect',
  company: 'C.',
  style: 45,
  notes: 'Received by Jerina',
  stock: '55',
  price: '$35',
  image: ''
}]; //load data when page loads

document.addEventListener('DOMContentLoaded', addItemsToSearch);

function addItemsToSearch(data) {
  var collapsibleList = $('#all-items')[0];
  var searchInput = $('#searchInput')[0].value.toString().toLowerCase().trim();
  var searchInputWords = searchInput.split(/\s+/);
  var resultsArray = searchInput === "" ? sampleData : data.filter(function (handcrafts) {
    return searchInputWords.every(word);
  });
  sampleData.forEach(function (item) {
    var template = $('#collapsible-template')[0].content.cloneNode("true"); // template.querySelector('.collapsible-header')
    //     .textContent = item.SLF + item.Name +
    //     item.Material;

    collapsibleList.appendChild(template);
  });
} // function search(source, field) {
//     let results;
//     field = field.toLowerCase();
//     results = $.map(source, function (entry) {
//         var match = entry.field.toLowerCase().indexOf(name) !== -1;
//         return match ? entry : null;
//     });
//     return results;
// }


$('#searchInput').keyup(function () {
  var searchInputWords = $(this).val().toString().toLowerCase().trim().split(/\s+/);
  var resultsArr = [];
  searchInputWords.every(function (word) {
    searchKeys.some(sampleData, function (key, val) {
      $.each(sampleData, function () {
        if (val.key.search(word) != -1 || val.Name.search(word) != -1) {
          return val;
        }

        resultsArr.push(val);
      });
    });
    console.log(resultsArr);
  });
}); // Search functionality

var data;

function setDataForSearch() {
  google.script.run.withSuccessHandler(function (dataReturned) {
    data = dataReturned.slice();
  }).getHandcrafts();
}

function searchy() {
  var searchInput = $('#searchInput')[0].value.toString().toLowerCase().trim();
  var searchInputWords = searchInput.split(/\s+/);
  var searchColumns = [1, 2, 3, 4, 5];
  var resultsArray = searchInput === "" ? [] : data.filter(function (r) {
    return searchInputWords.every(function (word) {
      return searchColumns.some(function (colIndex) {
        return r[colIndex].toString().toLowerCase().indexOf(word) !== -1;
      });
    });
  });
  var searchResultsList = $('#searchResults')[0];
  var template = $('#templateRow')[0].content;
  searchResultsList.innerHTML = "";
  resultsArray.forEach(function (r) {
    var tr = template.cloneNode("true");
    var slfColumn = tr.querySelector(".slf");
    var nameColumn = tr.querySelector(".name");
    var materialColumn = tr.querySelector(".material");
    var tagsColumn = tr.querySelector(".tags");
    var priceColumn = tr.querySelector(".itemPrice");
    var row = tr.querySelector(".modal-trigger");
    row.dataset.slf = r[0];
    slfColumn.textContent = r[0];
    nameColumn.textContent = r[1];
    materialColumn.textContent = r[3];
    tagsColumn.textContent = r[5];
    priceColumn.textContent = r[10];
    searchResultsList.appendChild(tr);
  });
} // document.getElementById("searchInput").addEventListener("input", search);
//  Listen and handle events
// $("#searchInput").on("input", search);
// $('#searchResults').on('click', clickEventHandler);


function generateCollapsible(arrayOfHandcraftObjects) {
  var collapsible = document.querySelector(".collapsible");
  arrayOfHandcraftObjects.forEach(function (handcraft) {
    var li = document.createElement("li"); // collapsibleHeader

    var collapsibleHeader = document.createElement("div");
    collapsibleHeader.className = "collapsible-header";
    var row = document.createElement("tr");
    var slfCol = document.createElement("td").textContent = handcraft.SLF;
    var materialCol = document.createElement("td").textContent = handcraft.Material;
    var nameCol = document.createElement("td").textContent = handcraft.Name;
    row.appendChild(slfCol);
    row.appendChild(materialCol);
    row.appendChild(nameCol);
    collapsibleHeader.appendChild(row); // collapsibleBody

    var collapsibleBody = document.createElement("div");
    collapsibleBody.className = "collapsible-body";
    collapsibleBody.className = "row";
    descriptionCol.textContent = r.DESCRIPTION;
    var img = document.createElement("img");
    img.className = 'materialboxed';
    img.width = "250";
    img.src = r.IMAGE;
    collapsibleBody.textContent = r.TAG;
    collapsibleBody.appendChild(img);
    li.appendChild(collapsibleHeader);
    li.appendChild(collapsibleBody);
    collapsible.appendChild(li);
  });
} // Initializations
},{}]},{},["d6sW"], null)