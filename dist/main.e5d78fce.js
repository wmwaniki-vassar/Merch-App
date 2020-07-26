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
  SLF: 'PM-1',
  Name: 'Ant',
  Creole: 'Petit Cocinelle',
  Material: 'Paper Mache',
  Description: 'Small paper Mache ant',
  Tags: 'small ant red insect',
  Company: 'C.',
  'Co. Style no.': 45,
  Notes: 'Received by Jerina',
  Image: ''
}, {
  SLF: 'PM-2',
  Name: 'Owl Family',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Set of paper mache owls',
  Tags: 'bird owl black white',
  Company: 'D.',
  'Co. Style no.': 'P2317',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-3',
  Name: 'Ant, Small',
  Creole: 'papye mache ant',
  Material: 'Paper Mache',
  Description: 'Ant, Small, colors, material,shape',
  Tags: 'Ant, Small, colors, material,shape',
  Company: 'C',
  'Co. Style no.': '074-005',
  Notes: 'love it!',
  Image: ''
}, {
  SLF: 'PM-4',
  Name: 'Bird, Standing Chick 5"',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Bird, \'Dots\'',
  Tags: 'Bird, \'Dots\'',
  Company: 'C',
  'Co. Style no.': '016-003',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-5',
  Name: 'Bird, with Feather Tail/Big Eye',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Bird, with Feather Tail',
  Tags: 'Bird, with Feather Tail',
  Company: 'C',
  'Co. Style no.': '016-004',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-6',
  Name: 'Bowl',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Bowls, ptd, PM',
  Tags: 'Bowls, ptd, PM',
  Company: 'C',
  'Co. Style no.': '130-009',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-7',
  Name: 'Bull (Cow)',
  Creole: 'Grande Crabe',
  Material: 'Paper Mache',
  Description: 'Bull (Cow), ptd, PM',
  Tags: 'Bull (Cow), ptd, PM',
  Company: 'C',
  'Co. Style no.': '016-008',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-8',
  Name: 'Crab, Large 12"',
  Creole: 'Med. Crabe en papier mache',
  Material: 'Paper Mache',
  Description: 'Crab, Large',
  Tags: 'Crab, Large',
  Company: 'C',
  'Co. Style no.': '074-007',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-9',
  Name: 'Crab, Small , 5"',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Crab, Small , 5" (body)',
  Tags: 'Crab, Small , 5" (body)',
  Company: 'C',
  'Co. Style no.': '074-018',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-10',
  Name: '',
  Creole: '',
  Material: 'Paper Mache',
  Description: 'Elephant, Patterned/Dots',
  Tags: 'Elephant, Patterned/Dots',
  Company: 'C',
  'Co. Style no.': '016-003',
  Notes: '',
  Image: ''
}, {
  SLF: 'PM-11',
  Name: 'Elephant ',
  Creole: 'created',
  Material: 'Paper Mache',
  Description: 'Elephant ',
  Tags: 'Elephant ',
  Company: 'C',
  'Co. Style no.': 'Frantz Janvier/016-003',
  Notes: '',
  Image: ''
}]; //load data when page loads

document.addEventListener('DOMContentLoaded', addItemsToSearch);

function addItemsToSearch(data) {
  var collapsibleList = $('#all-items')[0];
  var template = $('#collapsible-template')[0].content.cloneNode("true");
  var searchInput = $('#searchInput')[0].value.toString().toLowerCase().trim();
  var searchInputWords = searchInput.split(/\s+/);
  var resultsArray = searchInput === "" ? sampleData : data.filter(function (handcrafts) {
    return searchInputWords.every(word);
  });
  template.querySelector('#item-slf').textContent = sampleData[3].SLF;
  template.querySelector('#item-name').textContent = sampleData[3].Name;
  template.querySelector('#item-material').textContent = sampleData[3].Material;
  template.querySelector('#item-stock').textContent = sampleData[3].Stock;
  template.querySelector('#item-price').textContent = sampleData[3].Price;
  collapsibleList.appendChild(template);
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
  }).getDataForSearch();
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
},{}]},{},["d6sW"], null)