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
  style: 45,
  notes: 'Received by Jerina',
  imageId: '1phjvZLB_Kqtvl_Oxek4V7P8cqSvvQX-M'
}, {
  slf: 'PM-2',
  name: 'Owl Family',
  creole: '',
  material: 'Paper Mache',
  description: 'Set of paper mache owls',
  tags: 'bird owl black white',
  company: 'D.',
  style: 'P2317',
  notes: '',
  imageId: '1sNOzfgnYHJDQ5005e5dnHf3_qawerKM5'
}, {
  slf: 'PM-3',
  name: 'Ant, Small',
  creole: 'papye mache ant',
  material: 'Paper Mache',
  description: 'Ant, Small, colors, material,shape',
  tags: 'Ant, Small, colors, material,shape',
  company: 'C',
  style: '074-005',
  notes: 'love it!',
  imageId: '1PvGyVESmSvI2pRMf0Eym3r5l01EEoyJP'
}, {
  slf: 'PM-4',
  name: 'Bird, Standing Chick 5"',
  creole: '',
  material: 'Paper Mache',
  description: 'Bird, \'Dots\'',
  tags: 'Bird, \'Dots\'',
  company: 'C',
  style: '016-003',
  notes: '',
  imageId: '1zdon69sc5biQZM6l2uJUVfrKd9WOMYqr'
}, {
  slf: 'PM-5',
  name: 'Bird, with Feather Tail/Big Eye',
  creole: '',
  material: 'Paper Mache',
  description: 'Bird, with Feather Tail',
  tags: 'Bird, with Feather Tail',
  company: 'C',
  style: '016-004',
  notes: '',
  imageId: '1sPEZc2lYX4s4jSuQO76fh3L3rZnXBn97'
}, {
  slf: 'PM-6',
  name: 'Bowl',
  creole: '',
  material: 'Paper Mache',
  description: 'Bowls, ptd, PM',
  tags: 'Bowls, ptd, PM',
  company: 'C',
  style: '130-009',
  notes: '',
  imageId: '19jQ4DtVn4cqjP_4ODPp5WKCi9gLAQzNW'
}, {
  slf: 'PM-7',
  name: 'Bull (Cow)',
  creole: 'Grande Crabe',
  material: 'Paper Mache',
  description: 'Bull (Cow), ptd, PM',
  tags: 'Bull (Cow), ptd, PM',
  company: 'C',
  style: '016-008',
  notes: '',
  imageId: '1YUCO55TGzYGLYmaBPxOEjs0zwxGKrjg5'
}, {
  slf: 'PM-8',
  name: 'Crab, Large 12"',
  creole: 'Med. Crabe en papier mache',
  material: 'Paper Mache',
  description: 'Crab, Large',
  tags: 'Crab, Large',
  company: 'C',
  style: '074-007',
  notes: '',
  imageId: '1KYBS76ascpDS9_8xSCLlces47ZSRLNJG'
}]; //load data when page loads

document.addEventListener('DOMContentLoaded', setDataForSearch); // makes sure the whole site is loaded

$(window).load(function () {
  // will first fade out the loading animation
  $("#status").fadeOut(); // will fade out the whole DIV that covers the website.

  $("#preloader").delay(1000).fadeOut("slow");
});

function addItemsToSearch(data) {
  var collapsibleList = $('#items-collapsible')[0];
  data.forEach(function (handcraft) {
    var template = $('#collapsible-template')[0].content.cloneNode("true");
    template.querySelector("#item-slf").textContent = handcraft.slf;
    template.querySelector("#item-name").textContent = handcraft.name;
    template.querySelector("#item-creole").textContent = handcraft.creole;
    template.querySelector("#item-material").textContent = handcraft.material;
    template.querySelector("#item-description").textContent = handcraft.description;
    template.querySelector("#item-tags").textContent = handcraft.tags;
    template.querySelector("#item-company").textContent = handcraft.company;
    template.querySelector("#item-style").textContent = handcraft.style;
    template.querySelector("#item-notes").textContent = handcraft.notes;
    var imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
    template.querySelector("#item-image").src = imageSource;
    collapsibleList.appendChild(template);
  });
  var cardsList = $('#items-cards')[0];
  data.forEach(function (handcraft) {
    var template = $('#cards-template')[0].content.cloneNode("true");
    template.querySelector("#item-slf").textContent = handcraft.slf;
    template.querySelector("#item-price").textContent = "$30";
    template.querySelector("#item-name").textContent = handcraft.name;
    template.querySelector("#item-name2").innerHTML = handcraft.name + '<i class="material-icons right">close</i>';
    template.querySelector("#item-creole").textContent = "(" + handcraft.creole + ")";
    template.querySelector("#item-material").textContent = handcraft.material;
    template.querySelector("#item-description").textContent = handcraft.description;
    template.querySelector("#item-tags").textContent = handcraft.tags;
    template.querySelector("#item-company").textContent = handcraft.company;
    template.querySelector("#item-style").textContent = handcraft.style;
    template.querySelector("#item-notes").textContent = handcraft.notes;
    var imageSource = "https://drive.google.com/uc?export=view&id=" + handcraft.imageId;
    template.querySelector("#item-image").src = imageSource;
    cardsList.appendChild(template);
  });
}

function setDataForSearch() {
  google.script.run.withSuccessHandler(function (dataReturned) {
    addItemsToSearch(dataReturned);
  }).getHandcrafts();
}
},{}]},{},["d6sW"], null)