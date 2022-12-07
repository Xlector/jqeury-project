// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jquery = require("jquery");
var _tomSelect = require("tom-select");
var _tomSelectDefault = parcelHelpers.interopDefault(_tomSelect);
var _sweetalert = require("sweetalert");
var _sweetalertDefault = parcelHelpers.interopDefault(_sweetalert);
// document.cookie = "AC-C=ac-c;expires=Fri, " + Date() + ";path=/;SameSite=Lax";
// $(document).ready(function () {
// reset();
// });
let obj = {
    "Programmation Web": 2,
    "Programmation mobile": 3,
    "Services Web": 2,
    "Interface Homme Machine": 2,
    "M\xe9thodes Agiles": 3
};
const cne_regex = new RegExp("^\\w\\d{9}$");
const nom_regex = new RegExp("^(\\w+\\s\\w+)(\\s\\w+){0,2}\\w$");
let current_index = NaN;
const eventHandler = function() {
    return function() {
        _jquery("#Coefficient").val(obj[this.getValue()]);
    };
};
let tom_select = new (0, _tomSelectDefault.default)("#Matiere", {
    create: false,
    sortField: {
        field: "text"
    },
    onChange: eventHandler()
});
_jquery(".input-form").each(function(index) {
    index = ++index;
    _jquery(this).on("blur keyup", function() {
        if (_jquery(this).val().length === 0) {
            _jquery(this).removeClass("border-gray-300");
            _jquery("#warn-req-" + index).removeClass("hidden");
            _jquery("#warn-req-" + index).addClass("block");
            _jquery(this).addClass("border-red-600");
        } else {
            _jquery(this).addClass("border-gray-300");
            _jquery("#warn-req-" + index).addClass("hidden");
            _jquery("#warn-req-" + index).removeClass("block");
            _jquery(this).removeClass("border-red-600");
        }
    });
});
const reset = ()=>{
    _jquery("#CNE").val("");
    _jquery("#Nom_prenom").val("");
    tom_select.clear(true);
    _jquery("#Coefficient").val("");
    _jquery("#Note").val("");
};
const calculer_moyenne = ()=>{
    if (_jquery(`.notes`)) _jquery("#moyenne").html(Math.round(_jquery(".notes").toArray().reduce((acc, element)=>acc += parseInt(element.innerHTML), 0) / _jquery(".notes").length * 100) / 100);
};
_jquery("#Ajouter").on("click", ()=>{
    let tests = {
        CNE: cne_regex.test(_jquery("#CNE").val().trim()),
        "Nom & prenom": nom_regex.test(_jquery("#Nom_prenom").val().trim()),
        Coefficient: obj[_jquery(".item").text().trim()] == _jquery("#Coefficient").val(),
        Note: parseInt(_jquery("#Note").val()) <= 20 && parseInt(_jquery("#Note").val()) >= 0
    };
    if (Object.values(tests).reduce((a, b)=>a + b) == 4) {
        let tr = `<tr class="cursor-pointer hover:bg-slate-300 border-b-2 py-4 px-6 border-b-gray-300">
    <td class="py-4 px-6 CNES">${_jquery("#CNE").val().trim()}</td>
    <td class="py-4 px-6">${_jquery("#Nom_prenom").val().trim()}</td>
    <td class="py-4 px-6 Matieres">${_jquery(".item").text().trim()}</td>
    <td class="py-4 px-6 text-center">${_jquery("#Coefficient").val()}</td>
    <td class="py-4 px-6 text-center">${_jquery("#Note").val().trim()}</td>
    <td class="py-4 px-6 notes text-center">${_jquery("#Note").val().trim()}</td>
  </tr>`;
        const CNES = _jquery(".CNES").toArray();
        const MATIERES = _jquery(".Matieres").toArray();
        const object = CNES.reduce((accumulator, element, index)=>{
            return {
                ...accumulator,
                [element.innerHTML]: MATIERES[index].innerHTML
            };
        }, {});
        if (object[_jquery("#CNE").val().trim()] != _jquery(".item").text().trim()) {
            _jquery("#tbody").append(_jquery(tr).on("click", function() {
                temp = _jquery(this).text().trim().split("\n");
                current_index = _jquery(this).index();
                console.error(current_index);
                _jquery("#CNE").val(temp[0]);
                _jquery("#Nom_prenom").val(temp[1].trim());
                // $(".item").remove();
                tom_select.setValue(temp[2].trim(), true);
                console.log(temp[2].trim());
                _jquery("#Coefficient").val(temp[3].trim());
                _jquery("#Note").val(temp[4].trim());
            }));
            reset();
            calculer_moyenne();
        } else (0, _sweetalertDefault.default)({
            title: "Attention!",
            text: "vous ne pouvez pas affecter la m\xeame mati\xe8re a ce \xe9tudiant",
            icon: "error",
            dangerMode: true
        });
    } else {
        let problems = Object.keys(tests).filter((e)=>{
            if (tests[e] == false) return e;
        });
        (0, _sweetalertDefault.default)({
            title: "Attention!",
            text: "les Champs suivant ne r\xe9pond pas aux exigences: \n le champ: " + problems.join(" \nle champ: "),
            icon: "error",
            dangerMode: true
        });
    }
});
_jquery("#Modifier").on("click", ()=>{
    if (isNaN(current_index)) (0, _sweetalertDefault.default)({
        title: "Attention!",
        text: "Cliquer sur une tuple",
        icon: "info"
    });
    else {
        let tests = {
            CNE: cne_regex.test(_jquery("#CNE").val().trim()),
            "Nom & prenom": nom_regex.test(_jquery("#Nom_prenom").val().trim()),
            Coefficient: obj[_jquery(".item").text().trim()] == _jquery("#Coefficient").val(),
            Note: parseInt(_jquery("#Note").val()) <= 20 && parseInt(_jquery("#Note").val()) >= 0
        };
        if (Object.values(tests).reduce((a, b)=>a + b) == 4) {
            let temp_tr = _jquery(`<tr class="cursor-pointer hover:bg-slate-300 border-b-2 py-4 px-6 border-b-gray-300">
    <td class="py-4 px-6 CNES">${_jquery("#CNE").val().trim()}</td>
    <td class="py-4 px-6">${_jquery("#Nom_prenom").val().trim()}</td>
    <td class="py-4 px-6 Matieres">${_jquery(".item").text().trim()}</td>
    <td class="py-4 px-6 text-center">${_jquery("#Coefficient").val()}</td>
    <td class="py-4 px-6 text-center">${_jquery("#Note").val().trim()}</td>
    <td class="py-4 px-6 notes text-center">${_jquery("#Note").val().trim()}</td>
  </tr>`).on("click", function() {
                temp = _jquery(this).text().trim().split("\n");
                current_index = _jquery(this).index();
                console.error(current_index);
                _jquery("#CNE").val(temp[0]);
                _jquery("#Nom_prenom").val(temp[1].trim());
                tom_select.setValue(temp[2].trim(), true);
                _jquery("#Coefficient").val(temp[3].trim());
                _jquery("#Note").val(temp[4].trim());
            });
            // temp_tr.
            if (current_index == 0) {
                _jquery("#tbody > tr").eq(current_index).remove();
                _jquery("#tbody").prepend(temp_tr).index = 0;
                reset();
            } else {
                _jquery("#tbody > tr").eq(current_index).remove();
                _jquery("#tbody > tr").eq(current_index - 1).after(temp_tr);
                reset();
            }
            current_index = NaN;
            calculer_moyenne();
        }
    }
});
_jquery("#Retirer").on("click", ()=>{
    if (isNaN(current_index)) (0, _sweetalertDefault.default)({
        title: "Attention!",
        text: "Cliquer sur une tuple",
        icon: "info"
    });
    else _jquery("#tbody > tr").eq(current_index).remove();
});

},{"jquery":"hgMhh","tom-select":"kDd6B","sweetalert":"38a65","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgMhh":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */ (function(global, factory) {
    "use strict";
    if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.6.1", // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */ function(window1) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
        setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
        expando = "sizzle" + 1 * new Date(), preferredDoc = window1.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, // Instance methods
        hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for(; i < len; i++){
                if (list[i] === elem) return i;
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]", // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
            nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") return "�";
                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        }, // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? // Leverage slice if possible
                function(target, els) {
                    pushNative.apply(target, slice.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                    var j = target.length, i = 0;
                    // Can't trust NodeList.length
                    while(target[j++] = els[i++]);
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                    // Exclude object elements
                    (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            if (newContext !== context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */ function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = arr.length;
            while(i--)Expr.attrHandle[arr[i]] = handler;
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */ function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            // Use IE sourceIndex if available on both nodes
            if (diff) return diff;
            // Check if b follows a
            if (cur) while(cur = cur.nextSibling){
                if (cur === b) return -1;
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        /* jshint -W018 */ elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        // Expose support vars for convenience
        support = Sizzle.support = {};
        /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */ isXML = Sizzle.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Support: IE <=8
            // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
            // https://bugs.jquery.com/ticket/4833
            return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                // Support: IE 11, Edge
                if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false);
                else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
            }
            // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
            // Safari 4 - 5 only, Opera <=11.6 - 12.x only
            // IE/Edge & older browsers don't support the :scope pseudo-class.
            // Support: Safari 6.0 only
            // Safari 6.0 supports :scope but it's an alias of :root there.
            support.scope = assert(function(el) {
                docElem.appendChild(el).appendChild(document.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function(el) {
                el.appendChild(document.createComment(""));
                return !el.getElementsByTagName("*").length;
            });
            // Support: IE<9
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                docElem.appendChild(el).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length;
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else if (support.qsa) return context.querySelectorAll(tag);
            } : function(tag, context) {
                var elem, tmp = [], i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                results = context.getElementsByTagName(tag);
                // Filter out possible comments
                if (tag === "*") {
                    while(elem = results[i++])if (elem.nodeType === 1) tmp.push(elem);
                    return tmp;
                }
                return results;
            };
            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See https://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(el) {
                    var input;
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // https://bugs.jquery.com/ticket/12359
                    docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                    // Support: IE 11+, Edge 15 - 18+
                    // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                    // Adding a temporary attribute to the document before the selection works
                    // around the issue.
                    // Interestingly, IE 10 & older don't seem to have the issue.
                    input = document.createElement("input");
                    input.setAttribute("name", "");
                    el.appendChild(input);
                    if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibling-combinator selector` fails
                    if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                    // Support: Firefox <=3.6 - 5 only
                    // Old Firefox doesn't throw on a badly-escaped identifier.
                    el.querySelectorAll("\\\f");
                    rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                    el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    el.appendChild(input).setAttribute("name", "D");
                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: IE9-11+
                    // IE's :disabled selector does not pick up the children of disabled fieldsets
                    docElem.appendChild(el).disabled = true;
                    if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: Opera 10 - 11 only
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    el.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert(function(el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call(el, "*");
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
            });
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */ hasCompare = rnative.test(docElem.compareDocumentPosition);
            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) while(b = b.parentNode){
                    if (b === a) return true;
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = hasCompare ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [
                    a
                ], bp = [
                    b
                ];
                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ return a == document ? -1 : b == document ? 1 : /* eslint-enable eqeqeq */ aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                else if (aup === bup) return siblingCheck(a, b);
                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while(cur = cur.parentNode)ap.unshift(cur);
                cur = b;
                while(cur = cur.parentNode)bp.unshift(cur);
                // Walk down the tree looking for a discrepancy
                while(ap[i] === bp[i])i++;
                return i ? // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : /* eslint-enable eqeqeq */ 0;
            };
            return document;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return Sizzle(expr, document, null, [
                elem
            ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)results.splice(duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */ getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += getText(node);
            else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof elem.textContent === "string") return elem.textContent;
                else // Traverse its children
                for(elem = elem.firstChild; elem; elem = elem.nextSibling)ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        };
        Expr = Sizzle.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                "ATTR": function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                "CHILD": function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) Sizzle.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) Sizzle.error(match[0]);
                    return match;
                },
                "PSEUDO": function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                "TAG": function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                "CLASS": function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                "ATTR": function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        /* eslint-disable max-len */ return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    /* eslint-enable max-len */ };
                },
                "CHILD": function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {});
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    uniqueCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {});
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            uniqueCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                "PSEUDO": function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                "has": markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                "contains": markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                "target": function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                    return elem === docElem;
                },
                "focus": function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                "parent": function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                    return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (// Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument > length ? length : argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                        if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                        else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            uniqueCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)Sizzle(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                results : matcherIn;
                // Find primary matches
                if (matcher) matcher(matcherIn, matcherOut, context, xml);
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element (issue #299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        };
        /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        // One-time assignments
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        support.detectDuplicates = !!hasDuplicate;
        // Initialize against the default document
        setDocument();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
        })) addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        });
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!support.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
        })) addHandle("value", function(elem, _name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
        });
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
        })) addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        });
        return Sizzle;
    }(window1);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value1) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value1
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the stack, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
    }
    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", returnTrue);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, expectSync) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var notAsync, result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if (!saved.length) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) dataPriv.set(this, type, false);
                        else result = {};
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            // Support: Chrome 86+
                            // In Chrome, if an element having a focusout handler is blurred by
                            // clicking outside of it, it invokes the handler synchronously. If
                            // that handler calls `.remove()` on the element, the data is cleared,
                            // leaving `result` undefined. We need to guard against this.
                            return result && result.value;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved.length) {
                    // ...and capture the result
                    dataPriv.set(this, type, {
                        value: jQuery.event.trigger(// Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                    });
                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync);
                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            // trim whitespace for custom property (issue gh-4926)
            if (isCustomProp) // rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1");
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    support.focusin = "onfocusin" in window1;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) doc.addEventListener(orig, handler, true);
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);
                } else dataPriv.access(doc, fix, attaches);
            }
        };
    });
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e1) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e1;
                    // Propagate others as results
                    done(-1, e1);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"kDd6B":[function(require,module,exports) {
/**
* Tom Select v2.2.2
* Licensed under the Apache License, Version 2.0 (the "License");
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /**
	 * MicroEvent - to make any js object an event emitter
	 *
	 * - pure javascript - server compatible, browser compatible
	 * - dont rely on the browser doms
	 * - super simple - you get it immediatly, no mistery, no magic involved
	 *
	 * @author Jerome Etienne (https://github.com/jeromeetienne)
	 */ /**
	 * Execute callback for each event in space separated list of event names
	 *
	 */ function forEvents(events, callback) {
        events.split(/\s+/).forEach((event)=>{
            callback(event);
        });
    }
    class MicroEvent {
        constructor(){
            this._events = void 0;
            this._events = {};
        }
        on(events, fct) {
            forEvents(events, (event)=>{
                const event_array = this._events[event] || [];
                event_array.push(fct);
                this._events[event] = event_array;
            });
        }
        off(events, fct) {
            var n = arguments.length;
            if (n === 0) {
                this._events = {};
                return;
            }
            forEvents(events, (event)=>{
                if (n === 1) {
                    delete this._events[event];
                    return;
                }
                const event_array = this._events[event];
                if (event_array === undefined) return;
                event_array.splice(event_array.indexOf(fct), 1);
                this._events[event] = event_array;
            });
        }
        trigger(events, ...args) {
            var self = this;
            forEvents(events, (event)=>{
                const event_array = self._events[event];
                if (event_array === undefined) return;
                event_array.forEach((fct)=>{
                    fct.apply(self, args);
                });
            });
        }
    }
    /**
	 * microplugin.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */ function MicroPlugin(Interface) {
        Interface.plugins = {};
        return class extends Interface {
            constructor(...args){
                super(...args);
                this.plugins = {
                    names: [],
                    settings: {},
                    requested: {},
                    loaded: {}
                };
            }
            /**
	     * Registers a plugin.
	     *
	     * @param {function} fn
	     */ static define(name, fn) {
                Interface.plugins[name] = {
                    "name": name,
                    "fn": fn
                };
            }
            /**
	     * Initializes the listed plugins (with options).
	     * Acceptable formats:
	     *
	     * List (without options):
	     *   ['a', 'b', 'c']
	     *
	     * List (with options):
	     *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
	     *
	     * Hash (with options):
	     *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
	     *
	     * @param {array|object} plugins
	     */ initializePlugins(plugins) {
                var key, name;
                const self = this;
                const queue = [];
                if (Array.isArray(plugins)) plugins.forEach((plugin)=>{
                    if (typeof plugin === "string") queue.push(plugin);
                    else {
                        self.plugins.settings[plugin.name] = plugin.options;
                        queue.push(plugin.name);
                    }
                });
                else if (plugins) {
                    for(key in plugins)if (plugins.hasOwnProperty(key)) {
                        self.plugins.settings[key] = plugins[key];
                        queue.push(key);
                    }
                }
                while(name = queue.shift())self.require(name);
            }
            loadPlugin(name) {
                var self = this;
                var plugins = self.plugins;
                var plugin = Interface.plugins[name];
                if (!Interface.plugins.hasOwnProperty(name)) throw new Error('Unable to find "' + name + '" plugin');
                plugins.requested[name] = true;
                plugins.loaded[name] = plugin.fn.apply(self, [
                    self.plugins.settings[name] || {}
                ]);
                plugins.names.push(name);
            }
            /**
	     * Initializes a plugin.
	     *
	     */ require(name) {
                var self = this;
                var plugins = self.plugins;
                if (!self.plugins.loaded.hasOwnProperty(name)) {
                    if (plugins.requested[name]) throw new Error('Plugin has circular dependency ("' + name + '")');
                    self.loadPlugin(name);
                }
                return plugins.loaded[name];
            }
        };
    }
    /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */ /**
	 * Convert array of strings to a regular expression
	 *	ex ['ab','a'] => (?:ab|a)
	 * 	ex ['a','b'] => [ab]
	 * @param {string[]} chars
	 * @return {string}
	 */ const arrayToPattern = (chars)=>{
        chars = chars.filter(Boolean);
        if (chars.length < 2) return chars[0] || "";
        return maxValueLength(chars) == 1 ? "[" + chars.join("") + "]" : "(?:" + chars.join("|") + ")";
    };
    /**
	 * @param {string[]} array
	 * @return {string}
	 */ const sequencePattern = (array)=>{
        if (!hasDuplicates(array)) return array.join("");
        let pattern = "";
        let prev_char_count = 0;
        const prev_pattern = ()=>{
            if (prev_char_count > 1) pattern += "{" + prev_char_count + "}";
        };
        array.forEach((char, i)=>{
            if (char === array[i - 1]) {
                prev_char_count++;
                return;
            }
            prev_pattern();
            pattern += char;
            prev_char_count = 1;
        });
        prev_pattern();
        return pattern;
    };
    /**
	 * Convert array of strings to a regular expression
	 *	ex ['ab','a'] => (?:ab|a)
	 * 	ex ['a','b'] => [ab]
	 * @param {Set<string>} chars
	 * @return {string}
	 */ const setToPattern = (chars)=>{
        let array = toArray(chars);
        return arrayToPattern(array);
    };
    /**
	 *
	 * https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
	 * @param {any[]} array
	 */ const hasDuplicates = (array)=>{
        return new Set(array).size !== array.length;
    };
    /**
	 * https://stackoverflow.com/questions/63006601/why-does-u-throw-an-invalid-escape-error
	 * @param {string} str
	 * @return {string}
	 */ const escape_regex = (str)=>{
        return (str + "").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu, "\\$1");
    };
    /**
	 * Return the max length of array values
	 * @param {string[]} array
	 *
	 */ const maxValueLength = (array)=>{
        return array.reduce((longest, value)=>Math.max(longest, unicodeLength(value)), 0);
    };
    /**
	 * @param {string} str
	 */ const unicodeLength = (str)=>{
        return toArray(str).length;
    };
    /**
	 * @param {any} p
	 * @return {any[]}
	 */ const toArray = (p)=>Array.from(p);
    /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */ /**
	 * Get all possible combinations of substrings that add up to the given string
	 * https://stackoverflow.com/questions/30169587/find-all-the-combination-of-substrings-that-add-up-to-the-given-string
	 * @param {string} input
	 * @return {string[][]}
	 */ const allSubstrings = (input)=>{
        if (input.length === 1) return [
            [
                input
            ]
        ];
        /** @type {string[][]} */ let result = [];
        const start = input.substring(1);
        const suba = allSubstrings(start);
        suba.forEach(function(subresult) {
            let tmp = subresult.slice(0);
            tmp[0] = input.charAt(0) + tmp[0];
            result.push(tmp);
            tmp = subresult.slice(0);
            tmp.unshift(input.charAt(0));
            result.push(tmp);
        });
        return result;
    };
    /*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */ /**
	 * @typedef {{[key:string]:string}} TUnicodeMap
	 * @typedef {{[key:string]:Set<string>}} TUnicodeSets
	 * @typedef {[[number,number]]} TCodePoints
	 * @typedef {{folded:string,composed:string,code_point:number}} TCodePointObj
	 * @typedef {{start:number,end:number,length:number,substr:string}} TSequencePart
	 */ /** @type {TCodePoints} */ const code_points = [
        [
            0,
            65535
        ]
    ];
    const accent_pat = "[̀-ͯ\xb7ʾʼ]";
    /** @type {TUnicodeMap} */ let unicode_map;
    /** @type {RegExp} */ let multi_char_reg;
    const max_char_length = 3;
    /** @type {TUnicodeMap} */ const latin_convert = {};
    /** @type {TUnicodeMap} */ const latin_condensed = {
        "/": "⁄∕",
        "0": "߀",
        "a": "ⱥɐɑ",
        "aa": "ꜳ",
        "ae": "\xe6ǽǣ",
        "ao": "ꜵ",
        "au": "ꜷ",
        "av": "ꜹꜻ",
        "ay": "ꜽ",
        "b": "ƀɓƃ",
        "c": "ꜿƈȼↄ",
        "d": "đɗɖᴅƌꮷԁɦ",
        "e": "ɛǝᴇɇ",
        "f": "ꝼƒ",
        "g": "ǥɠꞡᵹꝿɢ",
        "h": "ħⱨⱶɥ",
        "i": "ɨı",
        "j": "ɉȷ",
        "k": "ƙⱪꝁꝃꝅꞣ",
        "l": "łƚɫⱡꝉꝇꞁɭ",
        "m": "ɱɯϻ",
        "n": "ꞥƞɲꞑᴎлԉ",
        "o": "\xf8ǿɔɵꝋꝍᴑ",
        "oe": "œ",
        "oi": "ƣ",
        "oo": "ꝏ",
        "ou": "ȣ",
        "p": "ƥᵽꝑꝓꝕρ",
        "q": "ꝗꝙɋ",
        "r": "ɍɽꝛꞧꞃ",
        "s": "\xdfȿꞩꞅʂ",
        "t": "ŧƭʈⱦꞇ",
        "th": "\xfe",
        "tz": "ꜩ",
        "u": "ʉ",
        "v": "ʋꝟʌ",
        "vy": "ꝡ",
        "w": "ⱳ",
        "y": "ƴɏỿ",
        "z": "ƶȥɀⱬꝣ",
        "hv": "ƕ"
    };
    for(let latin in latin_condensed){
        let unicode = latin_condensed[latin] || "";
        for(let i = 0; i < unicode.length; i++){
            let char = unicode.substring(i, i + 1);
            latin_convert[char] = latin;
        }
    }
    const convert_pat = new RegExp(Object.keys(latin_convert).join("|") + "|" + accent_pat, "gu");
    /**
	 * Initialize the unicode_map from the give code point ranges
	 *
	 * @param {TCodePoints=} _code_points
	 */ const initialize = (_code_points)=>{
        if (unicode_map !== undefined) return;
        unicode_map = generateMap(_code_points || code_points);
    };
    /**
	 * Helper method for normalize a string
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
	 * @param {string} str
	 * @param {string} form
	 */ const normalize = (str, form = "NFKD")=>str.normalize(form);
    /**
	 * Remove accents without reordering string
	 * calling str.normalize('NFKD') on \u{594}\u{595}\u{596} becomes \u{596}\u{594}\u{595}
	 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
	 * @param {string} str
	 * @return {string}
	 */ const asciifold = (str)=>{
        return toArray(str).reduce(/**
	   * @param {string} result
	   * @param {string} char
	   */ (result, char)=>{
            return result + _asciifold(char);
        }, "");
    };
    /**
	 * @param {string} str
	 * @return {string}
	 */ const _asciifold = (str)=>{
        str = normalize(str).toLowerCase().replace(convert_pat, (/** @type {string} */ char)=>{
            return latin_convert[char] || "";
        }); //return str;
        return normalize(str, "NFC");
    };
    /**
	 * Generate a list of unicode variants from the list of code points
	 * @param {TCodePoints} code_points
	 * @yield {TCodePointObj}
	 */ function* generator(code_points) {
        for (const [code_point_min, code_point_max] of code_points)for(let i = code_point_min; i <= code_point_max; i++){
            let composed = String.fromCharCode(i);
            let folded = asciifold(composed);
            if (folded == composed.toLowerCase()) continue;
             // skip when folded is a string longer than 3 characters long
            // bc the resulting regex patterns will be long
            // eg:
            // folded صلى الله عليه وسلم length 18 code point 65018
            // folded جل جلاله length 8 code point 65019
            if (folded.length > max_char_length) continue;
            if (folded.length == 0) continue;
            yield {
                folded: folded,
                composed: composed,
                code_point: i
            };
        }
    }
    /**
	 * Generate a unicode map from the list of code points
	 * @param {TCodePoints} code_points
	 * @return {TUnicodeSets}
	 */ const generateSets = (code_points)=>{
        /** @type {{[key:string]:Set<string>}} */ const unicode_sets = {};
        /**
	   * @param {string} folded
	   * @param {string} to_add
	   */ const addMatching = (folded, to_add)=>{
            /** @type {Set<string>} */ const folded_set = unicode_sets[folded] || new Set();
            const patt = new RegExp("^" + setToPattern(folded_set) + "$", "iu");
            if (to_add.match(patt)) return;
            folded_set.add(escape_regex(to_add));
            unicode_sets[folded] = folded_set;
        };
        for (let value of generator(code_points)){
            addMatching(value.folded, value.folded);
            addMatching(value.folded, value.composed);
        }
        return unicode_sets;
    };
    /**
	 * Generate a unicode map from the list of code points
	 * ae => (?:(?:ae|Æ|Ǽ|Ǣ)|(?:A|Ⓐ|Ａ...)(?:E|ɛ|Ⓔ...))
	 *
	 * @param {TCodePoints} code_points
	 * @return {TUnicodeMap}
	 */ const generateMap = (code_points)=>{
        /** @type {TUnicodeSets} */ const unicode_sets = generateSets(code_points);
        /** @type {TUnicodeMap} */ const unicode_map = {};
        /** @type {string[]} */ let multi_char = [];
        for(let folded in unicode_sets){
            let set = unicode_sets[folded];
            if (set) unicode_map[folded] = setToPattern(set);
            if (folded.length > 1) multi_char.push(escape_regex(folded));
        }
        multi_char.sort((a, b)=>b.length - a.length);
        const multi_char_patt = arrayToPattern(multi_char);
        multi_char_reg = new RegExp("^" + multi_char_patt, "u");
        return unicode_map;
    };
    /**
	 * Map each element of an array from it's folded value to all possible unicode matches
	 * @param {string[]} strings
	 * @param {number} min_replacement
	 * @return {string}
	 */ const mapSequence = (strings, min_replacement = 1)=>{
        let chars_replaced = 0;
        strings = strings.map((str)=>{
            if (unicode_map[str]) chars_replaced += str.length;
            return unicode_map[str] || str;
        });
        if (chars_replaced >= min_replacement) return sequencePattern(strings);
        return "";
    };
    /**
	 * Convert a short string and split it into all possible patterns
	 * Keep a pattern only if min_replacement is met
	 *
	 * 'abc'
	 * 		=> [['abc'],['ab','c'],['a','bc'],['a','b','c']]
	 *		=> ['abc-pattern','ab-c-pattern'...]
	 *
	 *
	 * @param {string} str
	 * @param {number} min_replacement
	 * @return {string}
	 */ const substringsToPattern = (str, min_replacement = 1)=>{
        min_replacement = Math.max(min_replacement, str.length - 1);
        return arrayToPattern(allSubstrings(str).map((sub_pat)=>{
            return mapSequence(sub_pat, min_replacement);
        }));
    };
    /**
	 * Convert an array of sequences into a pattern
	 * [{start:0,end:3,length:3,substr:'iii'}...] => (?:iii...)
	 *
	 * @param {Sequence[]} sequences
	 * @param {boolean} all
	 */ const sequencesToPattern = (sequences, all = true)=>{
        let min_replacement = sequences.length > 1 ? 1 : 0;
        return arrayToPattern(sequences.map((sequence)=>{
            let seq = [];
            const len = all ? sequence.length() : sequence.length() - 1;
            for(let j = 0; j < len; j++)seq.push(substringsToPattern(sequence.substrs[j] || "", min_replacement));
            return sequencePattern(seq);
        }));
    };
    /**
	 * Return true if the sequence is already in the sequences
	 * @param {Sequence} needle_seq
	 * @param {Sequence[]} sequences
	 */ const inSequences = (needle_seq, sequences)=>{
        for (const seq of sequences){
            if (seq.start != needle_seq.start || seq.end != needle_seq.end) continue;
            if (seq.substrs.join("") !== needle_seq.substrs.join("")) continue;
            let needle_parts = needle_seq.parts;
            /**
	     * @param {TSequencePart} part
	     */ const filter = (part)=>{
                for (const needle_part of needle_parts){
                    if (needle_part.start === part.start && needle_part.substr === part.substr) return false;
                    if (part.length == 1 || needle_part.length == 1) continue;
                     // check for overlapping parts
                    // a = ['::=','==']
                    // b = ['::','===']
                    // a = ['r','sm']
                    // b = ['rs','m']
                    if (part.start < needle_part.start && part.end > needle_part.start) return true;
                    if (needle_part.start < part.start && needle_part.end > part.start) return true;
                }
                return false;
            };
            let filtered = seq.parts.filter(filter);
            if (filtered.length > 0) continue;
            return true;
        }
        return false;
    };
    class Sequence {
        constructor(){
            /** @type {TSequencePart[]} */ this.parts = [];
            /** @type {string[]} */ this.substrs = [];
            this.start = 0;
            this.end = 0;
        }
        /**
	   * @param {TSequencePart|undefined} part
	   */ add(part) {
            if (part) {
                this.parts.push(part);
                this.substrs.push(part.substr);
                this.start = Math.min(part.start, this.start);
                this.end = Math.max(part.end, this.end);
            }
        }
        last() {
            return this.parts[this.parts.length - 1];
        }
        length() {
            return this.parts.length;
        }
        /**
	   * @param {number} position
	   * @param {TSequencePart} last_piece
	   */ clone(position, last_piece) {
            let clone = new Sequence();
            let parts = JSON.parse(JSON.stringify(this.parts));
            let last_part = parts.pop();
            for (const part of parts)clone.add(part);
            let last_substr = last_piece.substr.substring(0, position - last_part.start);
            let clone_last_len = last_substr.length;
            clone.add({
                start: last_part.start,
                end: last_part.start + clone_last_len,
                length: clone_last_len,
                substr: last_substr
            });
            return clone;
        }
    }
    /**
	 * Expand a regular expression pattern to include unicode variants
	 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
	 *
	 * Issue:
	 *  ﺊﺋ [ 'ﺊ = \\u{fe8a}', 'ﺋ = \\u{fe8b}' ]
	 *	becomes:	ئئ [ 'ي = \\u{64a}', 'ٔ = \\u{654}', 'ي = \\u{64a}', 'ٔ = \\u{654}' ]
	 *
	 *	İĲ = IIJ = ⅡJ
	 *
	 * 	1/2/4
	 *
	 * @param {string} str
	 * @return {string|undefined}
	 */ const getPattern = (str)=>{
        initialize();
        str = asciifold(str);
        let pattern = "";
        let sequences = [
            new Sequence()
        ];
        for(let i = 0; i < str.length; i++){
            let substr = str.substring(i);
            let match = substr.match(multi_char_reg);
            const char = str.substring(i, i + 1);
            const match_str = match ? match[0] : null; // loop through sequences
            // add either the char or multi_match
            let overlapping = [];
            let added_types = new Set();
            for (const sequence of sequences){
                const last_piece = sequence.last();
                if (!last_piece || last_piece.length == 1 || last_piece.end <= i) {
                    // if we have a multi match
                    if (match_str) {
                        const len = match_str.length;
                        sequence.add({
                            start: i,
                            end: i + len,
                            length: len,
                            substr: match_str
                        });
                        added_types.add("1");
                    } else {
                        sequence.add({
                            start: i,
                            end: i + 1,
                            length: 1,
                            substr: char
                        });
                        added_types.add("2");
                    }
                } else if (match_str) {
                    let clone = sequence.clone(i, last_piece);
                    const len1 = match_str.length;
                    clone.add({
                        start: i,
                        end: i + len1,
                        length: len1,
                        substr: match_str
                    });
                    overlapping.push(clone);
                } else // don't add char
                // adding would create invalid patterns: 234 => [2,34,4]
                added_types.add("3");
            } // if we have overlapping
            if (overlapping.length > 0) {
                // ['ii','iii'] before ['i','i','iii']
                overlapping = overlapping.sort((a, b)=>{
                    return a.length() - b.length();
                });
                for (let clone1 of overlapping){
                    // don't add if we already have an equivalent sequence
                    if (inSequences(clone1, sequences)) continue;
                    sequences.push(clone1);
                }
                continue;
            } // if we haven't done anything unique
            // clean up the patterns
            // helps keep patterns smaller
            // if str = 'r₨㎧aarss', pattern will be 446 instead of 655
            if (i > 0 && added_types.size == 1 && !added_types.has("3")) {
                pattern += sequencesToPattern(sequences, false);
                let new_seq = new Sequence();
                const old_seq = sequences[0];
                if (old_seq) new_seq.add(old_seq.last());
                sequences = [
                    new_seq
                ];
            }
        }
        pattern += sequencesToPattern(sequences, true);
        return pattern;
    };
    /*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */ /**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @return {Object}          The resolved property value
	 */ const getAttr = (obj, name)=>{
        if (!obj) return;
        return obj[name];
    };
    /**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @return {Object}          The resolved property value
	 */ const getAttrNesting = (obj, name)=>{
        if (!obj) return;
        var part, names = name.split(".");
        while((part = names.shift()) && (obj = obj[part]));
        return obj;
    };
    /**
	 * Calculates how close of a match the
	 * given value is against a search token.
	 *
	 */ const scoreValue = (value, token, weight)=>{
        var score, pos;
        if (!value) return 0;
        value = value + "";
        if (token.regex == null) return 0;
        pos = value.search(token.regex);
        if (pos === -1) return 0;
        score = token.string.length / value.length;
        if (pos === 0) score += 0.5;
        return score * weight;
    };
    /**
	 * Cast object property to an array if it exists and has a value
	 *
	 */ const propToArray = (obj, key)=>{
        var value = obj[key];
        if (typeof value == "function") return value;
        if (value && !Array.isArray(value)) obj[key] = [
            value
        ];
    };
    /**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * iterate(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 */ const iterate$1 = (object, callback)=>{
        if (Array.isArray(object)) object.forEach(callback);
        else {
            for(var key in object)if (object.hasOwnProperty(key)) callback(object[key], key);
        }
    };
    const cmp = (a, b)=>{
        if (typeof a === "number" && typeof b === "number") return a > b ? 1 : a < b ? -1 : 0;
        a = asciifold(a + "").toLowerCase();
        b = asciifold(b + "").toLowerCase();
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
    };
    /*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */ /**
	 * sifter.js
	 * Copyright (c) 2013–2020 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */ class Sifter {
        // []|{};
        /**
	   * Textually searches arrays and hashes of objects
	   * by property (or multiple properties). Designed
	   * specifically for autocomplete.
	   *
	   */ constructor(items, settings){
            this.items = void 0;
            this.settings = void 0;
            this.items = items;
            this.settings = settings || {
                diacritics: true
            };
        }
        /**
	   * Splits a search string into an array of individual
	   * regexps to be used to match results.
	   *
	   */ tokenize(query, respect_word_boundaries, weights) {
            if (!query || !query.length) return [];
            const tokens = [];
            const words = query.split(/\s+/);
            var field_regex;
            if (weights) field_regex = new RegExp("^(" + Object.keys(weights).map(escape_regex).join("|") + "):(.*)$");
            words.forEach((word)=>{
                let field_match;
                let field = null;
                let regex = null; // look for "field:query" tokens
                if (field_regex && (field_match = word.match(field_regex))) {
                    field = field_match[1];
                    word = field_match[2];
                }
                if (word.length > 0) {
                    if (this.settings.diacritics) regex = getPattern(word) || null;
                    else regex = escape_regex(word);
                    if (regex && respect_word_boundaries) regex = "\\b" + regex;
                }
                tokens.push({
                    string: word,
                    regex: regex ? new RegExp(regex, "iu") : null,
                    field: field
                });
            });
            return tokens;
        }
        /**
	   * Returns a function to be used to score individual results.
	   *
	   * Good matches will have a higher score than poor matches.
	   * If an item is not a match, 0 will be returned by the function.
	   *
	   * @returns {T.ScoreFn}
	   */ getScoreFunction(query, options) {
            var search = this.prepareSearch(query, options);
            return this._getScoreFunction(search);
        }
        /**
	   * @returns {T.ScoreFn}
	   *
	   */ _getScoreFunction(search) {
            const tokens = search.tokens, token_count = tokens.length;
            if (!token_count) return function() {
                return 0;
            };
            const fields = search.options.fields, weights = search.weights, field_count = fields.length, getAttrFn = search.getAttrFn;
            if (!field_count) return function() {
                return 1;
            };
            /**
	     * Calculates the score of an object
	     * against the search query.
	     *
	     */ const scoreObject = function() {
                if (field_count === 1) return function(token, data) {
                    const field = fields[0].field;
                    return scoreValue(getAttrFn(data, field), token, weights[field] || 1);
                };
                return function(token, data) {
                    var sum = 0; // is the token specific to a field?
                    if (token.field) {
                        const value = getAttrFn(data, token.field);
                        if (!token.regex && value) sum += 1 / field_count;
                        else sum += scoreValue(value, token, 1);
                    } else iterate$1(weights, (weight, field)=>{
                        sum += scoreValue(getAttrFn(data, field), token, weight);
                    });
                    return sum / field_count;
                };
            }();
            if (token_count === 1) return function(data) {
                return scoreObject(tokens[0], data);
            };
            if (search.options.conjunction === "and") return function(data) {
                var score, sum = 0;
                for (let token of tokens){
                    score = scoreObject(token, data);
                    if (score <= 0) return 0;
                    sum += score;
                }
                return sum / token_count;
            };
            else return function(data) {
                var sum = 0;
                iterate$1(tokens, (token)=>{
                    sum += scoreObject(token, data);
                });
                return sum / token_count;
            };
        }
        /**
	   * Returns a function that can be used to compare two
	   * results, for sorting purposes. If no sorting should
	   * be performed, `null` will be returned.
	   *
	   * @return function(a,b)
	   */ getSortFunction(query, options) {
            var search = this.prepareSearch(query, options);
            return this._getSortFunction(search);
        }
        _getSortFunction(search) {
            var implicit_score, sort_flds = [];
            const self = this, options = search.options, sort = !search.query && options.sort_empty ? options.sort_empty : options.sort;
            if (typeof sort == "function") return sort.bind(this);
            /**
	     * Fetches the specified sort field value
	     * from a search result item.
	     *
	     */ const get_field = function get_field(name, result) {
                if (name === "$score") return result.score;
                return search.getAttrFn(self.items[result.id], name);
            }; // parse options
            if (sort) {
                for (let s of sort)if (search.query || s.field !== "$score") sort_flds.push(s);
            } // the "$score" field is implied to be the primary
            // sort field, unless it's manually specified
            if (search.query) {
                implicit_score = true;
                for (let fld of sort_flds)if (fld.field === "$score") {
                    implicit_score = false;
                    break;
                }
                if (implicit_score) sort_flds.unshift({
                    field: "$score",
                    direction: "desc"
                });
                 // without a search.query, all items will have the same score
            } else sort_flds = sort_flds.filter((fld)=>fld.field !== "$score");
             // build function
            const sort_flds_count = sort_flds.length;
            if (!sort_flds_count) return null;
            return function(a, b) {
                var result, field;
                for (let sort_fld of sort_flds){
                    field = sort_fld.field;
                    let multiplier = sort_fld.direction === "desc" ? -1 : 1;
                    result = multiplier * cmp(get_field(field, a), get_field(field, b));
                    if (result) return result;
                }
                return 0;
            };
        }
        /**
	   * Parses a search query and returns an object
	   * with tokens and fields ready to be populated
	   * with results.
	   *
	   */ prepareSearch(query, optsUser) {
            const weights = {};
            var options = Object.assign({}, optsUser);
            propToArray(options, "sort");
            propToArray(options, "sort_empty"); // convert fields to new format
            if (options.fields) {
                propToArray(options, "fields");
                const fields = [];
                options.fields.forEach((field)=>{
                    if (typeof field == "string") field = {
                        field: field,
                        weight: 1
                    };
                    fields.push(field);
                    weights[field.field] = "weight" in field ? field.weight : 1;
                });
                options.fields = fields;
            }
            return {
                options: options,
                query: query.toLowerCase().trim(),
                tokens: this.tokenize(query, options.respect_word_boundaries, weights),
                total: 0,
                items: [],
                weights: weights,
                getAttrFn: options.nesting ? getAttrNesting : getAttr
            };
        }
        /**
	   * Searches through all items and returns a sorted array of matches.
	   *
	   */ search(query, options) {
            var self = this, score, search;
            search = this.prepareSearch(query, options);
            options = search.options;
            query = search.query; // generate result scoring function
            const fn_score = options.score || self._getScoreFunction(search); // perform search and sort
            if (query.length) iterate$1(self.items, (item, id)=>{
                score = fn_score(item);
                if (options.filter === false || score > 0) search.items.push({
                    "score": score,
                    "id": id
                });
            });
            else iterate$1(self.items, (_, id)=>{
                search.items.push({
                    "score": 1,
                    "id": id
                });
            });
            const fn_sort = self._getSortFunction(search);
            if (fn_sort) search.items.sort(fn_sort); // apply limits
            search.total = search.items.length;
            if (typeof options.limit === "number") search.items = search.items.slice(0, options.limit);
            return search;
        }
    }
    /**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * iterate(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 */ const iterate = (object, callback)=>{
        if (Array.isArray(object)) object.forEach(callback);
        else {
            for(var key in object)if (object.hasOwnProperty(key)) callback(object[key], key);
        }
    };
    /**
	 * Return a dom element from either a dom query string, jQuery object, a dom element or html string
	 * https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
	 *
	 * param query should be {}
	 */ const getDom = (query)=>{
        if (query.jquery) return query[0];
        if (query instanceof HTMLElement) return query;
        if (isHtmlString(query)) {
            var tpl = document.createElement("template");
            tpl.innerHTML = query.trim(); // Never return a text node of whitespace as the result
            return tpl.content.firstChild;
        }
        return document.querySelector(query);
    };
    const isHtmlString = (arg)=>{
        if (typeof arg === "string" && arg.indexOf("<") > -1) return true;
        return false;
    };
    const escapeQuery = (query)=>{
        return query.replace(/['"\\]/g, "\\$&");
    };
    /**
	 * Dispatch an event
	 *
	 */ const triggerEvent = (dom_el, event_name)=>{
        var event = document.createEvent("HTMLEvents");
        event.initEvent(event_name, true, false);
        dom_el.dispatchEvent(event);
    };
    /**
	 * Apply CSS rules to a dom element
	 *
	 */ const applyCSS = (dom_el, css)=>{
        Object.assign(dom_el.style, css);
    };
    /**
	 * Add css classes
	 *
	 */ const addClasses = (elmts, ...classes)=>{
        var norm_classes = classesArray(classes);
        elmts = castAsArray(elmts);
        elmts.map((el)=>{
            norm_classes.map((cls)=>{
                el.classList.add(cls);
            });
        });
    };
    /**
	 * Remove css classes
	 *
	 */ const removeClasses = (elmts, ...classes)=>{
        var norm_classes = classesArray(classes);
        elmts = castAsArray(elmts);
        elmts.map((el)=>{
            norm_classes.map((cls)=>{
                el.classList.remove(cls);
            });
        });
    };
    /**
	 * Return arguments
	 *
	 */ const classesArray = (args)=>{
        var classes = [];
        iterate(args, (_classes)=>{
            if (typeof _classes === "string") _classes = _classes.trim().split(/[\11\12\14\15\40]/);
            if (Array.isArray(_classes)) classes = classes.concat(_classes);
        });
        return classes.filter(Boolean);
    };
    /**
	 * Create an array from arg if it's not already an array
	 *
	 */ const castAsArray = (arg)=>{
        if (!Array.isArray(arg)) arg = [
            arg
        ];
        return arg;
    };
    /**
	 * Get the closest node to the evt.target matching the selector
	 * Stops at wrapper
	 *
	 */ const parentMatch = (target, selector, wrapper)=>{
        if (wrapper && !wrapper.contains(target)) return;
        while(target && target.matches){
            if (target.matches(selector)) return target;
            target = target.parentNode;
        }
    };
    /**
	 * Get the first or last item from an array
	 *
	 * > 0 - right (last)
	 * <= 0 - left (first)
	 *
	 */ const getTail = (list, direction = 0)=>{
        if (direction > 0) return list[list.length - 1];
        return list[0];
    };
    /**
	 * Return true if an object is empty
	 *
	 */ const isEmptyObject = (obj)=>{
        return Object.keys(obj).length === 0;
    };
    /**
	 * Get the index of an element amongst sibling nodes of the same type
	 *
	 */ const nodeIndex = (el, amongst)=>{
        if (!el) return -1;
        amongst = amongst || el.nodeName;
        var i = 0;
        while(el = el.previousElementSibling)if (el.matches(amongst)) i++;
        return i;
    };
    /**
	 * Set attributes of an element
	 *
	 */ const setAttr = (el, attrs)=>{
        iterate(attrs, (val, attr)=>{
            if (val == null) el.removeAttribute(attr);
            else el.setAttribute(attr, "" + val);
        });
    };
    /**
	 * Replace a node
	 */ const replaceNode = (existing, replacement)=>{
        if (existing.parentNode) existing.parentNode.replaceChild(replacement, existing);
    };
    /**
	 * highlight v3 | MIT license | Johann Burkard <jb@eaio.com>
	 * Highlights arbitrary terms in a node.
	 *
	 * - Modified by Marshal <beatgates@gmail.com> 2011-6-24 (added regex)
	 * - Modified by Brian Reavis <brian@thirdroute.com> 2012-8-27 (cleanup)
	 */ const highlight = (element, regex)=>{
        if (regex === null) return; // convet string to regex
        if (typeof regex === "string") {
            if (!regex.length) return;
            regex = new RegExp(regex, "i");
        } // Wrap matching part of text node with highlighting <span>, e.g.
        // Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
        const highlightText = (node)=>{
            var match = node.data.match(regex);
            if (match && node.data.length > 0) {
                var spannode = document.createElement("span");
                spannode.className = "highlight";
                var middlebit = node.splitText(match.index);
                middlebit.splitText(match[0].length);
                var middleclone = middlebit.cloneNode(true);
                spannode.appendChild(middleclone);
                replaceNode(middlebit, spannode);
                return 1;
            }
            return 0;
        }; // Recurse element node, looking for child text nodes to highlight, unless element
        // is childless, <script>, <style>, or already highlighted: <span class="hightlight">
        const highlightChildren = (node)=>{
            if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== "highlight" || node.tagName !== "SPAN")) Array.from(node.childNodes).forEach((element)=>{
                highlightRecursive(element);
            });
        };
        const highlightRecursive = (node)=>{
            if (node.nodeType === 3) return highlightText(node);
            highlightChildren(node);
            return 0;
        };
        highlightRecursive(element);
    };
    /**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with(), pass js strict mode, and use without jquery
	 */ const removeHighlight = (el)=>{
        var elements = el.querySelectorAll("span.highlight");
        Array.prototype.forEach.call(elements, function(el) {
            var parent = el.parentNode;
            parent.replaceChild(el.firstChild, el);
            parent.normalize();
        });
    };
    const KEY_A = 65;
    const KEY_RETURN = 13;
    const KEY_ESC = 27;
    const KEY_LEFT = 37;
    const KEY_UP = 38;
    const KEY_RIGHT = 39;
    const KEY_DOWN = 40;
    const KEY_BACKSPACE = 8;
    const KEY_DELETE = 46;
    const KEY_TAB = 9;
    const IS_MAC = typeof navigator === "undefined" ? false : /Mac/.test(navigator.userAgent);
    const KEY_SHORTCUT = IS_MAC ? "metaKey" : "ctrlKey"; // ctrl key or apple key for ma
    var defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        // regexp or string for splitting up values from a paste command
        persist: true,
        diacritics: true,
        create: null,
        createOnBlur: false,
        createFilter: null,
        highlight: true,
        openOnFocus: true,
        shouldOpen: null,
        maxOptions: 50,
        maxItems: null,
        hideSelected: null,
        duplicates: false,
        addPrecedence: false,
        selectOnTab: false,
        preload: null,
        allowEmptyOption: false,
        //closeAfterSelect: false,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: null,
        //'data-data',
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        disabledField: "disabled",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: false,
        sortField: "$order",
        searchField: [
            "text"
        ],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "ts-wrapper",
        controlClass: "ts-control",
        dropdownClass: "ts-dropdown",
        dropdownContentClass: "ts-dropdown-content",
        itemClass: "item",
        optionClass: "option",
        dropdownParent: null,
        controlInput: '<input type="text" autocomplete="off" size="1" />',
        copyClassesToDropdown: false,
        placeholder: null,
        hidePlaceholder: null,
        shouldLoad: function(query) {
            return query.length > 0;
        },
        /*
	  load                 : null, // function(query, callback) { ... }
	  score                : null, // function(search) { ... }
	  onInitialize         : null, // function() { ... }
	  onChange             : null, // function(value) { ... }
	  onItemAdd            : null, // function(value, $item) { ... }
	  onItemRemove         : null, // function(value) { ... }
	  onClear              : null, // function() { ... }
	  onOptionAdd          : null, // function(value, data) { ... }
	  onOptionRemove       : null, // function(value) { ... }
	  onOptionClear        : null, // function() { ... }
	  onOptionGroupAdd     : null, // function(id, data) { ... }
	  onOptionGroupRemove  : null, // function(id) { ... }
	  onOptionGroupClear   : null, // function() { ... }
	  onDropdownOpen       : null, // function(dropdown) { ... }
	  onDropdownClose      : null, // function(dropdown) { ... }
	  onType               : null, // function(str) { ... }
	  onDelete             : null, // function(values) { ... }
	  */ render: {
        }
    };
    /**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 */ const hash_key = (value)=>{
        if (typeof value === "undefined" || value === null) return null;
        return get_hash(value);
    };
    const get_hash = (value)=>{
        if (typeof value === "boolean") return value ? "1" : "0";
        return value + "";
    };
    /**
	 * Escapes a string for use within HTML.
	 *
	 */ const escape_html = (str)=>{
        return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    /**
	 * Debounce the user provided load function
	 *
	 */ const loadDebounce = (fn, delay)=>{
        var timeout;
        return function(value, callback) {
            var self = this;
            if (timeout) {
                self.loading = Math.max(self.loading - 1, 0);
                clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
                timeout = null;
                self.loadedSearches[value] = true;
                fn.call(self, value, callback);
            }, delay);
        };
    };
    /**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 */ const debounce_events = (self, types, fn)=>{
        var type;
        var trigger = self.trigger;
        var event_args = {}; // override trigger method
        self.trigger = function() {
            var type = arguments[0];
            if (types.indexOf(type) !== -1) event_args[type] = arguments;
            else return trigger.apply(self, arguments);
        }; // invoke provided function
        fn.apply(self, []);
        self.trigger = trigger; // trigger queued events
        for (type of types)if (type in event_args) trigger.apply(self, event_args[type]);
    };
    /**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 */ const getSelection = (input)=>{
        return {
            start: input.selectionStart || 0,
            length: (input.selectionEnd || 0) - (input.selectionStart || 0)
        };
    };
    /**
	 * Prevent default
	 *
	 */ const preventDefault = (evt, stop = false)=>{
        if (evt) {
            evt.preventDefault();
            if (stop) evt.stopPropagation();
        }
    };
    /**
	 * Add event helper
	 *
	 */ const addEvent = (target, type, callback, options)=>{
        target.addEventListener(type, callback, options);
    };
    /**
	 * Return true if the requested key is down
	 * Will return false if more than one control character is pressed ( when [ctrl+shift+a] != [ctrl+a] )
	 * The current evt may not always set ( eg calling advanceSelection() )
	 *
	 */ const isKeyDown = (key_name, evt)=>{
        if (!evt) return false;
        if (!evt[key_name]) return false;
        var count = (evt.altKey ? 1 : 0) + (evt.ctrlKey ? 1 : 0) + (evt.shiftKey ? 1 : 0) + (evt.metaKey ? 1 : 0);
        if (count === 1) return true;
        return false;
    };
    /**
	 * Get the id of an element
	 * If the id attribute is not set, set the attribute with the given id
	 *
	 */ const getId = (el, id)=>{
        const existing_id = el.getAttribute("id");
        if (existing_id) return existing_id;
        el.setAttribute("id", id);
        return id;
    };
    /**
	 * Returns a string with backslashes added before characters that need to be escaped.
	 */ const addSlashes = (str)=>{
        return str.replace(/[\\"']/g, "\\$&");
    };
    /**
	 *
	 */ const append = (parent, node)=>{
        if (node) parent.append(node);
    };
    function getSettings(input, settings_user) {
        var settings = Object.assign({}, defaults, settings_user);
        var attr_data = settings.dataAttr;
        var field_label = settings.labelField;
        var field_value = settings.valueField;
        var field_disabled = settings.disabledField;
        var field_optgroup = settings.optgroupField;
        var field_optgroup_label = settings.optgroupLabelField;
        var field_optgroup_value = settings.optgroupValueField;
        var tag_name = input.tagName.toLowerCase();
        var placeholder = input.getAttribute("placeholder") || input.getAttribute("data-placeholder");
        if (!placeholder && !settings.allowEmptyOption) {
            let option = input.querySelector('option[value=""]');
            if (option) placeholder = option.textContent;
        }
        var settings_element = {
            placeholder: placeholder,
            options: [],
            optgroups: [],
            items: [],
            maxItems: null
        };
        /**
	   * Initialize from a <select> element.
	   *
	   */ var init_select = ()=>{
            var tagName;
            var options = settings_element.options;
            var optionsMap = {};
            var group_count = 1;
            var readData = (el)=>{
                var data = Object.assign({}, el.dataset); // get plain object from DOMStringMap
                var json = attr_data && data[attr_data];
                if (typeof json === "string" && json.length) data = Object.assign(data, JSON.parse(json));
                return data;
            };
            var addOption = (option, group)=>{
                var value = hash_key(option.value);
                if (value == null) return;
                if (!value && !settings.allowEmptyOption) return; // if the option already exists, it's probably been
                // duplicated in another optgroup. in this case, push
                // the current group to the "optgroup" property on the
                // existing option so that it's rendered in both places.
                if (optionsMap.hasOwnProperty(value)) {
                    if (group) {
                        var arr = optionsMap[value][field_optgroup];
                        if (!arr) optionsMap[value][field_optgroup] = group;
                        else if (!Array.isArray(arr)) optionsMap[value][field_optgroup] = [
                            arr,
                            group
                        ];
                        else arr.push(group);
                    }
                } else {
                    var option_data = readData(option);
                    option_data[field_label] = option_data[field_label] || option.textContent;
                    option_data[field_value] = option_data[field_value] || value;
                    option_data[field_disabled] = option_data[field_disabled] || option.disabled;
                    option_data[field_optgroup] = option_data[field_optgroup] || group;
                    option_data.$option = option;
                    optionsMap[value] = option_data;
                    options.push(option_data);
                }
                if (option.selected) settings_element.items.push(value);
            };
            var addGroup = (optgroup)=>{
                var id, optgroup_data;
                optgroup_data = readData(optgroup);
                optgroup_data[field_optgroup_label] = optgroup_data[field_optgroup_label] || optgroup.getAttribute("label") || "";
                optgroup_data[field_optgroup_value] = optgroup_data[field_optgroup_value] || group_count++;
                optgroup_data[field_disabled] = optgroup_data[field_disabled] || optgroup.disabled;
                settings_element.optgroups.push(optgroup_data);
                id = optgroup_data[field_optgroup_value];
                iterate(optgroup.children, (option)=>{
                    addOption(option, id);
                });
            };
            settings_element.maxItems = input.hasAttribute("multiple") ? null : 1;
            iterate(input.children, (child)=>{
                tagName = child.tagName.toLowerCase();
                if (tagName === "optgroup") addGroup(child);
                else if (tagName === "option") addOption(child);
            });
        };
        /**
	   * Initialize from a <input type="text"> element.
	   *
	   */ var init_textbox = ()=>{
            const data_raw = input.getAttribute(attr_data);
            if (!data_raw) {
                var value = input.value.trim() || "";
                if (!settings.allowEmptyOption && !value.length) return;
                const values = value.split(settings.delimiter);
                iterate(values, (value)=>{
                    const option = {};
                    option[field_label] = value;
                    option[field_value] = value;
                    settings_element.options.push(option);
                });
                settings_element.items = values;
            } else {
                settings_element.options = JSON.parse(data_raw);
                iterate(settings_element.options, (opt)=>{
                    settings_element.items.push(opt[field_value]);
                });
            }
        };
        if (tag_name === "select") init_select();
        else init_textbox();
        return Object.assign({}, defaults, settings_element, settings_user);
    }
    var instance_i = 0;
    class TomSelect1 extends MicroPlugin(MicroEvent) {
        // @deprecated 1.8
        constructor(input_arg, user_settings){
            super();
            this.control_input = void 0;
            this.wrapper = void 0;
            this.dropdown = void 0;
            this.control = void 0;
            this.dropdown_content = void 0;
            this.focus_node = void 0;
            this.order = 0;
            this.settings = void 0;
            this.input = void 0;
            this.tabIndex = void 0;
            this.is_select_tag = void 0;
            this.rtl = void 0;
            this.inputId = void 0;
            this._destroy = void 0;
            this.sifter = void 0;
            this.isOpen = false;
            this.isDisabled = false;
            this.isRequired = void 0;
            this.isInvalid = false;
            this.isValid = true;
            this.isLocked = false;
            this.isFocused = false;
            this.isInputHidden = false;
            this.isSetup = false;
            this.ignoreFocus = false;
            this.ignoreHover = false;
            this.hasOptions = false;
            this.currentResults = void 0;
            this.lastValue = "";
            this.caretPos = 0;
            this.loading = 0;
            this.loadedSearches = {};
            this.activeOption = null;
            this.activeItems = [];
            this.optgroups = {};
            this.options = {};
            this.userOptions = {};
            this.items = [];
            instance_i++;
            var dir;
            var input = getDom(input_arg);
            if (input.tomselect) throw new Error("Tom Select already initialized on this element");
            input.tomselect = this; // detect rtl environment
            var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
            dir = computedStyle.getPropertyValue("direction"); // setup default state
            const settings = getSettings(input, user_settings);
            this.settings = settings;
            this.input = input;
            this.tabIndex = input.tabIndex || 0;
            this.is_select_tag = input.tagName.toLowerCase() === "select";
            this.rtl = /rtl/i.test(dir);
            this.inputId = getId(input, "tomselect-" + instance_i);
            this.isRequired = input.required; // search system
            this.sifter = new Sifter(this.options, {
                diacritics: settings.diacritics
            }); // option-dependent defaults
            settings.mode = settings.mode || (settings.maxItems === 1 ? "single" : "multi");
            if (typeof settings.hideSelected !== "boolean") settings.hideSelected = settings.mode === "multi";
            if (typeof settings.hidePlaceholder !== "boolean") settings.hidePlaceholder = settings.mode !== "multi";
             // set up createFilter callback
            var filter = settings.createFilter;
            if (typeof filter !== "function") {
                if (typeof filter === "string") filter = new RegExp(filter);
                if (filter instanceof RegExp) settings.createFilter = (input)=>filter.test(input);
                else settings.createFilter = (value)=>{
                    return this.settings.duplicates || !this.options[value];
                };
            }
            this.initializePlugins(settings.plugins);
            this.setupCallbacks();
            this.setupTemplates(); // Create all elements
            const wrapper = getDom("<div>");
            const control = getDom("<div>");
            const dropdown = this._render("dropdown");
            const dropdown_content = getDom(`<div role="listbox" tabindex="-1">`);
            const classes = this.input.getAttribute("class") || "";
            const inputMode = settings.mode;
            var control_input;
            addClasses(wrapper, settings.wrapperClass, classes, inputMode);
            addClasses(control, settings.controlClass);
            append(wrapper, control);
            addClasses(dropdown, settings.dropdownClass, inputMode);
            if (settings.copyClassesToDropdown) addClasses(dropdown, classes);
            addClasses(dropdown_content, settings.dropdownContentClass);
            append(dropdown, dropdown_content);
            getDom(settings.dropdownParent || wrapper).appendChild(dropdown); // default controlInput
            if (isHtmlString(settings.controlInput)) {
                control_input = getDom(settings.controlInput); // set attributes
                var attrs = [
                    "autocorrect",
                    "autocapitalize",
                    "autocomplete"
                ];
                iterate$1(attrs, (attr)=>{
                    if (input.getAttribute(attr)) setAttr(control_input, {
                        [attr]: input.getAttribute(attr)
                    });
                });
                control_input.tabIndex = -1;
                control.appendChild(control_input);
                this.focus_node = control_input; // dom element
            } else if (settings.controlInput) {
                control_input = getDom(settings.controlInput);
                this.focus_node = control_input;
            } else {
                control_input = getDom("<input/>");
                this.focus_node = control;
            }
            this.wrapper = wrapper;
            this.dropdown = dropdown;
            this.dropdown_content = dropdown_content;
            this.control = control;
            this.control_input = control_input;
            this.setup();
        }
        /**
	   * set up event bindings.
	   *
	   */ setup() {
            const self = this;
            const settings = self.settings;
            const control_input = self.control_input;
            const dropdown = self.dropdown;
            const dropdown_content = self.dropdown_content;
            const wrapper = self.wrapper;
            const control = self.control;
            const input = self.input;
            const focus_node = self.focus_node;
            const passive_event = {
                passive: true
            };
            const listboxId = self.inputId + "-ts-dropdown";
            setAttr(dropdown_content, {
                id: listboxId
            });
            setAttr(focus_node, {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-expanded": "false",
                "aria-controls": listboxId
            });
            const control_id = getId(focus_node, self.inputId + "-ts-control");
            const query = "label[for='" + escapeQuery(self.inputId) + "']";
            const label = document.querySelector(query);
            const label_click = self.focus.bind(self);
            if (label) {
                addEvent(label, "click", label_click);
                setAttr(label, {
                    for: control_id
                });
                const label_id = getId(label, self.inputId + "-ts-label");
                setAttr(focus_node, {
                    "aria-labelledby": label_id
                });
                setAttr(dropdown_content, {
                    "aria-labelledby": label_id
                });
            }
            wrapper.style.width = input.style.width;
            if (self.plugins.names.length) {
                const classes_plugins = "plugin-" + self.plugins.names.join(" plugin-");
                addClasses([
                    wrapper,
                    dropdown
                ], classes_plugins);
            }
            if ((settings.maxItems === null || settings.maxItems > 1) && self.is_select_tag) setAttr(input, {
                multiple: "multiple"
            });
            if (settings.placeholder) setAttr(control_input, {
                placeholder: settings.placeholder
            });
             // if splitOn was not passed in, construct it from the delimiter to allow pasting universally
            if (!settings.splitOn && settings.delimiter) settings.splitOn = new RegExp("\\s*" + escape_regex(settings.delimiter) + "+\\s*");
             // debounce user defined load() if loadThrottle > 0
            // after initializePlugins() so plugins can create/modify user defined loaders
            if (settings.load && settings.loadThrottle) settings.load = loadDebounce(settings.load, settings.loadThrottle);
            self.control_input.type = input.type;
            addEvent(dropdown, "mousemove", ()=>{
                self.ignoreHover = false;
            });
            addEvent(dropdown, "mouseenter", (e)=>{
                var target_match = parentMatch(e.target, "[data-selectable]", dropdown);
                if (target_match) self.onOptionHover(e, target_match);
            }, {
                capture: true
            }); // clicking on an option should select it
            addEvent(dropdown, "click", (evt)=>{
                const option = parentMatch(evt.target, "[data-selectable]");
                if (option) {
                    self.onOptionSelect(evt, option);
                    preventDefault(evt, true);
                }
            });
            addEvent(control, "click", (evt)=>{
                var target_match = parentMatch(evt.target, "[data-ts-item]", control);
                if (target_match && self.onItemSelect(evt, target_match)) {
                    preventDefault(evt, true);
                    return;
                } // retain focus (see control_input mousedown)
                if (control_input.value != "") return;
                self.onClick();
                preventDefault(evt, true);
            }); // keydown on focus_node for arrow_down/arrow_up
            addEvent(focus_node, "keydown", (e)=>self.onKeyDown(e)); // keypress and input/keyup
            addEvent(control_input, "keypress", (e)=>self.onKeyPress(e));
            addEvent(control_input, "input", (e)=>self.onInput(e));
            addEvent(focus_node, "blur", (e)=>self.onBlur(e));
            addEvent(focus_node, "focus", (e)=>self.onFocus(e));
            addEvent(control_input, "paste", (e)=>self.onPaste(e));
            const doc_mousedown = (evt)=>{
                // blur if target is outside of this instance
                // dropdown is not always inside wrapper
                const target = evt.composedPath()[0];
                if (!wrapper.contains(target) && !dropdown.contains(target)) {
                    if (self.isFocused) self.blur();
                    self.inputState();
                    return;
                } // retain focus by preventing native handling. if the
                // event target is the input it should not be modified.
                // otherwise, text selection within the input won't work.
                // Fixes bug #212 which is no covered by tests
                if (target == control_input && self.isOpen) evt.stopPropagation(); // clicking anywhere in the control should not blur the control_input (which would close the dropdown)
                else preventDefault(evt, true);
            };
            const win_scroll = ()=>{
                if (self.isOpen) self.positionDropdown();
            };
            addEvent(document, "mousedown", doc_mousedown);
            addEvent(window, "scroll", win_scroll, passive_event);
            addEvent(window, "resize", win_scroll, passive_event);
            this._destroy = ()=>{
                document.removeEventListener("mousedown", doc_mousedown);
                window.removeEventListener("scroll", win_scroll);
                window.removeEventListener("resize", win_scroll);
                if (label) label.removeEventListener("click", label_click);
            }; // store original html and tab index so that they can be
            // restored when the destroy() method is called.
            this.revertSettings = {
                innerHTML: input.innerHTML,
                tabIndex: input.tabIndex
            };
            input.tabIndex = -1;
            input.insertAdjacentElement("afterend", self.wrapper);
            self.sync(false);
            settings.items = [];
            delete settings.optgroups;
            delete settings.options;
            addEvent(input, "invalid", ()=>{
                if (self.isValid) {
                    self.isValid = false;
                    self.isInvalid = true;
                    self.refreshState();
                }
            });
            self.updateOriginalInput();
            self.refreshItems();
            self.close(false);
            self.inputState();
            self.isSetup = true;
            if (input.disabled) self.disable();
            else self.enable(); //sets tabIndex
            self.on("change", this.onChange);
            addClasses(input, "tomselected", "ts-hidden-accessible");
            self.trigger("initialize"); // preload options
            if (settings.preload === true) self.preload();
        }
        /**
	   * Register options and optgroups
	   *
	   */ setupOptions(options = [], optgroups = []) {
            // build options table
            this.addOptions(options); // build optgroup table
            iterate$1(optgroups, (optgroup)=>{
                this.registerOptionGroup(optgroup);
            });
        }
        /**
	   * Sets up default rendering functions.
	   */ setupTemplates() {
            var self = this;
            var field_label = self.settings.labelField;
            var field_optgroup = self.settings.optgroupLabelField;
            var templates = {
                "optgroup": (data)=>{
                    let optgroup = document.createElement("div");
                    optgroup.className = "optgroup";
                    optgroup.appendChild(data.options);
                    return optgroup;
                },
                "optgroup_header": (data, escape)=>{
                    return '<div class="optgroup-header">' + escape(data[field_optgroup]) + "</div>";
                },
                "option": (data, escape)=>{
                    return "<div>" + escape(data[field_label]) + "</div>";
                },
                "item": (data, escape)=>{
                    return "<div>" + escape(data[field_label]) + "</div>";
                },
                "option_create": (data, escape)=>{
                    return '<div class="create">Add <strong>' + escape(data.input) + "</strong>&hellip;</div>";
                },
                "no_results": ()=>{
                    return '<div class="no-results">No results found</div>';
                },
                "loading": ()=>{
                    return '<div class="spinner"></div>';
                },
                "not_loading": ()=>{},
                "dropdown": ()=>{
                    return "<div></div>";
                }
            };
            self.settings.render = Object.assign({}, templates, self.settings.render);
        }
        /**
	   * Maps fired events to callbacks provided
	   * in the settings used when creating the control.
	   */ setupCallbacks() {
            var key, fn;
            var callbacks = {
                "initialize": "onInitialize",
                "change": "onChange",
                "item_add": "onItemAdd",
                "item_remove": "onItemRemove",
                "item_select": "onItemSelect",
                "clear": "onClear",
                "option_add": "onOptionAdd",
                "option_remove": "onOptionRemove",
                "option_clear": "onOptionClear",
                "optgroup_add": "onOptionGroupAdd",
                "optgroup_remove": "onOptionGroupRemove",
                "optgroup_clear": "onOptionGroupClear",
                "dropdown_open": "onDropdownOpen",
                "dropdown_close": "onDropdownClose",
                "type": "onType",
                "load": "onLoad",
                "focus": "onFocus",
                "blur": "onBlur"
            };
            for(key in callbacks){
                fn = this.settings[callbacks[key]];
                if (fn) this.on(key, fn);
            }
        }
        /**
	   * Sync the Tom Select instance with the original input or select
	   *
	   */ sync(get_settings = true) {
            const self = this;
            const settings = get_settings ? getSettings(self.input, {
                delimiter: self.settings.delimiter
            }) : self.settings;
            self.setupOptions(settings.options, settings.optgroups);
            self.setValue(settings.items || [], true); // silent prevents recursion
            self.lastQuery = null; // so updated options will be displayed in dropdown
        }
        /**
	   * Triggered when the main control element
	   * has a click event.
	   *
	   */ onClick() {
            var self = this;
            if (self.activeItems.length > 0) {
                self.clearActiveItems();
                self.focus();
                return;
            }
            if (self.isFocused && self.isOpen) self.blur();
            else self.focus();
        }
        /**
	   * @deprecated v1.7
	   *
	   */ onMouseDown() {}
        /**
	   * Triggered when the value of the control has been changed.
	   * This should propagate the event to the original DOM
	   * input / select element.
	   */ onChange() {
            triggerEvent(this.input, "input");
            triggerEvent(this.input, "change");
        }
        /**
	   * Triggered on <input> paste.
	   *
	   */ onPaste(e) {
            var self = this;
            if (self.isInputHidden || self.isLocked) {
                preventDefault(e);
                return;
            } // If a regex or string is included, this will split the pasted
            // input and create Items for each separate value
            if (!self.settings.splitOn) return;
             // Wait for pasted text to be recognized in value
            setTimeout(()=>{
                var pastedText = self.inputValue();
                if (!pastedText.match(self.settings.splitOn)) return;
                var splitInput = pastedText.trim().split(self.settings.splitOn);
                iterate$1(splitInput, (piece)=>{
                    const hash = hash_key(piece);
                    if (hash) {
                        if (this.options[piece]) self.addItem(piece);
                        else self.createItem(piece);
                    }
                });
            }, 0);
        }
        /**
	   * Triggered on <input> keypress.
	   *
	   */ onKeyPress(e) {
            var self = this;
            if (self.isLocked) {
                preventDefault(e);
                return;
            }
            var character = String.fromCharCode(e.keyCode || e.which);
            if (self.settings.create && self.settings.mode === "multi" && character === self.settings.delimiter) {
                self.createItem();
                preventDefault(e);
                return;
            }
        }
        /**
	   * Triggered on <input> keydown.
	   *
	   */ onKeyDown(e) {
            var self = this;
            self.ignoreHover = true;
            if (self.isLocked) {
                if (e.keyCode !== KEY_TAB) preventDefault(e);
                return;
            }
            switch(e.keyCode){
                // ctrl+A: select all
                case KEY_A:
                    if (isKeyDown(KEY_SHORTCUT, e)) {
                        if (self.control_input.value == "") {
                            preventDefault(e);
                            self.selectAll();
                            return;
                        }
                    }
                    break;
                // esc: close dropdown
                case KEY_ESC:
                    if (self.isOpen) {
                        preventDefault(e, true);
                        self.close();
                    }
                    self.clearActiveItems();
                    return;
                // down: open dropdown or move selection down
                case KEY_DOWN:
                    if (!self.isOpen && self.hasOptions) self.open();
                    else if (self.activeOption) {
                        let next = self.getAdjacent(self.activeOption, 1);
                        if (next) self.setActiveOption(next);
                    }
                    preventDefault(e);
                    return;
                // up: move selection up
                case KEY_UP:
                    if (self.activeOption) {
                        let prev = self.getAdjacent(self.activeOption, -1);
                        if (prev) self.setActiveOption(prev);
                    }
                    preventDefault(e);
                    return;
                // return: select active option
                case KEY_RETURN:
                    if (self.canSelect(self.activeOption)) {
                        self.onOptionSelect(e, self.activeOption);
                        preventDefault(e); // if the option_create=null, the dropdown might be closed
                    } else if (self.settings.create && self.createItem()) preventDefault(e); // don't submit form when searching for a value
                    else if (document.activeElement == self.control_input && self.isOpen) preventDefault(e);
                    return;
                // left: modifiy item selection to the left
                case KEY_LEFT:
                    self.advanceSelection(-1, e);
                    return;
                // right: modifiy item selection to the right
                case KEY_RIGHT:
                    self.advanceSelection(1, e);
                    return;
                // tab: select active option and/or create item
                case KEY_TAB:
                    if (self.settings.selectOnTab) {
                        if (self.canSelect(self.activeOption)) {
                            self.onOptionSelect(e, self.activeOption); // prevent default [tab] behaviour of jump to the next field
                            // if select isFull, then the dropdown won't be open and [tab] will work normally
                            preventDefault(e);
                        }
                        if (self.settings.create && self.createItem()) preventDefault(e);
                    }
                    return;
                // delete|backspace: delete items
                case KEY_BACKSPACE:
                case KEY_DELETE:
                    self.deleteSelection(e);
                    return;
            } // don't enter text in the control_input when active items are selected
            if (self.isInputHidden && !isKeyDown(KEY_SHORTCUT, e)) preventDefault(e);
        }
        /**
	   * Triggered on <input> keyup.
	   *
	   */ onInput(e) {
            var self = this;
            if (self.isLocked) return;
            var value = self.inputValue();
            if (self.lastValue !== value) {
                self.lastValue = value;
                if (self.settings.shouldLoad.call(self, value)) self.load(value);
                self.refreshOptions();
                self.trigger("type", value);
            }
        }
        /**
	   * Triggered when the user rolls over
	   * an option in the autocomplete dropdown menu.
	   *
	   */ onOptionHover(evt, option) {
            if (this.ignoreHover) return;
            this.setActiveOption(option, false);
        }
        /**
	   * Triggered on <input> focus.
	   *
	   */ onFocus(e) {
            var self = this;
            var wasFocused = self.isFocused;
            if (self.isDisabled) {
                self.blur();
                preventDefault(e);
                return;
            }
            if (self.ignoreFocus) return;
            self.isFocused = true;
            if (self.settings.preload === "focus") self.preload();
            if (!wasFocused) self.trigger("focus");
            if (!self.activeItems.length) {
                self.showInput();
                self.refreshOptions(!!self.settings.openOnFocus);
            }
            self.refreshState();
        }
        /**
	   * Triggered on <input> blur.
	   *
	   */ onBlur(e) {
            if (document.hasFocus() === false) return;
            var self = this;
            if (!self.isFocused) return;
            self.isFocused = false;
            self.ignoreFocus = false;
            var deactivate = ()=>{
                self.close();
                self.setActiveItem();
                self.setCaret(self.items.length);
                self.trigger("blur");
            };
            if (self.settings.create && self.settings.createOnBlur) self.createItem(null, deactivate);
            else deactivate();
        }
        /**
	   * Triggered when the user clicks on an option
	   * in the autocomplete dropdown menu.
	   *
	   */ onOptionSelect(evt, option) {
            var value, self = this; // should not be possible to trigger a option under a disabled optgroup
            if (option.parentElement && option.parentElement.matches("[data-disabled]")) return;
            if (option.classList.contains("create")) self.createItem(null, ()=>{
                if (self.settings.closeAfterSelect) self.close();
            });
            else {
                value = option.dataset.value;
                if (typeof value !== "undefined") {
                    self.lastQuery = null;
                    self.addItem(value);
                    if (self.settings.closeAfterSelect) self.close();
                    if (!self.settings.hideSelected && evt.type && /click/.test(evt.type)) self.setActiveOption(option);
                }
            }
        }
        /**
	   * Return true if the given option can be selected
	   *
	   */ canSelect(option) {
            if (this.isOpen && option && this.dropdown_content.contains(option)) return true;
            return false;
        }
        /**
	   * Triggered when the user clicks on an item
	   * that has been selected.
	   *
	   */ onItemSelect(evt, item) {
            var self = this;
            if (!self.isLocked && self.settings.mode === "multi") {
                preventDefault(evt);
                self.setActiveItem(item, evt);
                return true;
            }
            return false;
        }
        /**
	   * Determines whether or not to invoke
	   * the user-provided option provider / loader
	   *
	   * Note, there is a subtle difference between
	   * this.canLoad() and this.settings.shouldLoad();
	   *
	   *	- settings.shouldLoad() is a user-input validator.
	   *	When false is returned, the not_loading template
	   *	will be added to the dropdown
	   *
	   *	- canLoad() is lower level validator that checks
	   * 	the Tom Select instance. There is no inherent user
	   *	feedback when canLoad returns false
	   *
	   */ canLoad(value) {
            if (!this.settings.load) return false;
            if (this.loadedSearches.hasOwnProperty(value)) return false;
            return true;
        }
        /**
	   * Invokes the user-provided option provider / loader.
	   *
	   */ load(value) {
            const self = this;
            if (!self.canLoad(value)) return;
            addClasses(self.wrapper, self.settings.loadingClass);
            self.loading++;
            const callback = self.loadCallback.bind(self);
            self.settings.load.call(self, value, callback);
        }
        /**
	   * Invoked by the user-provided option provider
	   *
	   */ loadCallback(options, optgroups) {
            const self = this;
            self.loading = Math.max(self.loading - 1, 0);
            self.lastQuery = null;
            self.clearActiveOption(); // when new results load, focus should be on first option
            self.setupOptions(options, optgroups);
            self.refreshOptions(self.isFocused && !self.isInputHidden);
            if (!self.loading) removeClasses(self.wrapper, self.settings.loadingClass);
            self.trigger("load", options, optgroups);
        }
        preload() {
            var classList = this.wrapper.classList;
            if (classList.contains("preloaded")) return;
            classList.add("preloaded");
            this.load("");
        }
        /**
	   * Sets the input field of the control to the specified value.
	   *
	   */ setTextboxValue(value = "") {
            var input = this.control_input;
            var changed = input.value !== value;
            if (changed) {
                input.value = value;
                triggerEvent(input, "update");
                this.lastValue = value;
            }
        }
        /**
	   * Returns the value of the control. If multiple items
	   * can be selected (e.g. <select multiple>), this returns
	   * an array. If only one item can be selected, this
	   * returns a string.
	   *
	   */ getValue() {
            if (this.is_select_tag && this.input.hasAttribute("multiple")) return this.items;
            return this.items.join(this.settings.delimiter);
        }
        /**
	   * Resets the selected items to the given value.
	   *
	   */ setValue(value, silent) {
            var events = silent ? [] : [
                "change"
            ];
            debounce_events(this, events, ()=>{
                this.clear(silent);
                this.addItems(value, silent);
            });
        }
        /**
	   * Resets the number of max items to the given value
	   *
	   */ setMaxItems(value) {
            if (value === 0) value = null; //reset to unlimited items.
            this.settings.maxItems = value;
            this.refreshState();
        }
        /**
	   * Sets the selected item.
	   *
	   */ setActiveItem(item, e) {
            var self = this;
            var eventName;
            var i, begin, end, swap;
            var last;
            if (self.settings.mode === "single") return; // clear the active selection
            if (!item) {
                self.clearActiveItems();
                if (self.isFocused) self.showInput();
                return;
            } // modify selection
            eventName = e && e.type.toLowerCase();
            if (eventName === "click" && isKeyDown("shiftKey", e) && self.activeItems.length) {
                last = self.getLastActive();
                begin = Array.prototype.indexOf.call(self.control.children, last);
                end = Array.prototype.indexOf.call(self.control.children, item);
                if (begin > end) {
                    swap = begin;
                    begin = end;
                    end = swap;
                }
                for(i = begin; i <= end; i++){
                    item = self.control.children[i];
                    if (self.activeItems.indexOf(item) === -1) self.setActiveItemClass(item);
                }
                preventDefault(e);
            } else if (eventName === "click" && isKeyDown(KEY_SHORTCUT, e) || eventName === "keydown" && isKeyDown("shiftKey", e)) {
                if (item.classList.contains("active")) self.removeActiveItem(item);
                else self.setActiveItemClass(item);
            } else {
                self.clearActiveItems();
                self.setActiveItemClass(item);
            } // ensure control has focus
            self.hideInput();
            if (!self.isFocused) self.focus();
        }
        /**
	   * Set the active and last-active classes
	   *
	   */ setActiveItemClass(item) {
            const self = this;
            const last_active = self.control.querySelector(".last-active");
            if (last_active) removeClasses(last_active, "last-active");
            addClasses(item, "active last-active");
            self.trigger("item_select", item);
            if (self.activeItems.indexOf(item) == -1) self.activeItems.push(item);
        }
        /**
	   * Remove active item
	   *
	   */ removeActiveItem(item) {
            var idx = this.activeItems.indexOf(item);
            this.activeItems.splice(idx, 1);
            removeClasses(item, "active");
        }
        /**
	   * Clears all the active items
	   *
	   */ clearActiveItems() {
            removeClasses(this.activeItems, "active");
            this.activeItems = [];
        }
        /**
	   * Sets the selected item in the dropdown menu
	   * of available options.
	   *
	   */ setActiveOption(option, scroll = true) {
            if (option === this.activeOption) return;
            this.clearActiveOption();
            if (!option) return;
            this.activeOption = option;
            setAttr(this.focus_node, {
                "aria-activedescendant": option.getAttribute("id")
            });
            setAttr(option, {
                "aria-selected": "true"
            });
            addClasses(option, "active");
            if (scroll) this.scrollToOption(option);
        }
        /**
	   * Sets the dropdown_content scrollTop to display the option
	   *
	   */ scrollToOption(option, behavior) {
            if (!option) return;
            const content = this.dropdown_content;
            const height_menu = content.clientHeight;
            const scrollTop = content.scrollTop || 0;
            const height_item = option.offsetHeight;
            const y = option.getBoundingClientRect().top - content.getBoundingClientRect().top + scrollTop;
            if (y + height_item > height_menu + scrollTop) this.scroll(y - height_menu + height_item, behavior);
            else if (y < scrollTop) this.scroll(y, behavior);
        }
        /**
	   * Scroll the dropdown to the given position
	   *
	   */ scroll(scrollTop, behavior) {
            const content = this.dropdown_content;
            if (behavior) content.style.scrollBehavior = behavior;
            content.scrollTop = scrollTop;
            content.style.scrollBehavior = "";
        }
        /**
	   * Clears the active option
	   *
	   */ clearActiveOption() {
            if (this.activeOption) {
                removeClasses(this.activeOption, "active");
                setAttr(this.activeOption, {
                    "aria-selected": null
                });
            }
            this.activeOption = null;
            setAttr(this.focus_node, {
                "aria-activedescendant": null
            });
        }
        /**
	   * Selects all items (CTRL + A).
	   */ selectAll() {
            const self = this;
            if (self.settings.mode === "single") return;
            const activeItems = self.controlChildren();
            if (!activeItems.length) return;
            self.hideInput();
            self.close();
            self.activeItems = activeItems;
            iterate$1(activeItems, (item)=>{
                self.setActiveItemClass(item);
            });
        }
        /**
	   * Determines if the control_input should be in a hidden or visible state
	   *
	   */ inputState() {
            var self = this;
            if (!self.control.contains(self.control_input)) return;
            setAttr(self.control_input, {
                placeholder: self.settings.placeholder
            });
            if (self.activeItems.length > 0 || !self.isFocused && self.settings.hidePlaceholder && self.items.length > 0) {
                self.setTextboxValue();
                self.isInputHidden = true;
            } else {
                if (self.settings.hidePlaceholder && self.items.length > 0) setAttr(self.control_input, {
                    placeholder: ""
                });
                self.isInputHidden = false;
            }
            self.wrapper.classList.toggle("input-hidden", self.isInputHidden);
        }
        /**
	   * Hides the input element out of view, while
	   * retaining its focus.
	   * @deprecated 1.3
	   */ hideInput() {
            this.inputState();
        }
        /**
	   * Restores input visibility.
	   * @deprecated 1.3
	   */ showInput() {
            this.inputState();
        }
        /**
	   * Get the input value
	   */ inputValue() {
            return this.control_input.value.trim();
        }
        /**
	   * Gives the control focus.
	   */ focus() {
            var self = this;
            if (self.isDisabled) return;
            self.ignoreFocus = true;
            if (self.control_input.offsetWidth) self.control_input.focus();
            else self.focus_node.focus();
            setTimeout(()=>{
                self.ignoreFocus = false;
                self.onFocus();
            }, 0);
        }
        /**
	   * Forces the control out of focus.
	   *
	   */ blur() {
            this.focus_node.blur();
            this.onBlur();
        }
        /**
	   * Returns a function that scores an object
	   * to show how good of a match it is to the
	   * provided query.
	   *
	   * @return {function}
	   */ getScoreFunction(query) {
            return this.sifter.getScoreFunction(query, this.getSearchOptions());
        }
        /**
	   * Returns search options for sifter (the system
	   * for scoring and sorting results).
	   *
	   * @see https://github.com/orchidjs/sifter.js
	   * @return {object}
	   */ getSearchOptions() {
            var settings = this.settings;
            var sort = settings.sortField;
            if (typeof settings.sortField === "string") sort = [
                {
                    field: settings.sortField
                }
            ];
            return {
                fields: settings.searchField,
                conjunction: settings.searchConjunction,
                sort: sort,
                nesting: settings.nesting
            };
        }
        /**
	   * Searches through available options and returns
	   * a sorted array of matches.
	   *
	   */ search(query) {
            var result, calculateScore;
            var self = this;
            var options = this.getSearchOptions(); // validate user-provided result scoring function
            if (self.settings.score) {
                calculateScore = self.settings.score.call(self, query);
                if (typeof calculateScore !== "function") throw new Error('Tom Select "score" setting must be a function that returns a function');
            } // perform search
            if (query !== self.lastQuery) {
                self.lastQuery = query;
                result = self.sifter.search(query, Object.assign(options, {
                    score: calculateScore
                }));
                self.currentResults = result;
            } else result = Object.assign({}, self.currentResults);
             // filter out selected items
            if (self.settings.hideSelected) result.items = result.items.filter((item)=>{
                let hashed = hash_key(item.id);
                return !(hashed && self.items.indexOf(hashed) !== -1);
            });
            return result;
        }
        /**
	   * Refreshes the list of available options shown
	   * in the autocomplete dropdown menu.
	   *
	   */ refreshOptions(triggerDropdown = true) {
            var i, j, k, n, optgroup, optgroups, html, has_create_option, active_group;
            var create;
            const groups = {};
            const groups_order = [];
            var self = this;
            var query = self.inputValue();
            const same_query = query === self.lastQuery || query == "" && self.lastQuery == null;
            var results = self.search(query);
            var active_option = null;
            var show_dropdown = self.settings.shouldOpen || false;
            var dropdown_content = self.dropdown_content;
            if (same_query) {
                active_option = self.activeOption;
                if (active_option) active_group = active_option.closest("[data-group]");
            } // build markup
            n = results.items.length;
            if (typeof self.settings.maxOptions === "number") n = Math.min(n, self.settings.maxOptions);
            if (n > 0) show_dropdown = true;
             // render and group available options individually
            for(i = 0; i < n; i++){
                // get option dom element
                let item = results.items[i];
                if (!item) continue;
                let opt_value = item.id;
                let option = self.options[opt_value];
                if (option === undefined) continue;
                let opt_hash = get_hash(opt_value);
                let option_el = self.getOption(opt_hash, true); // toggle 'selected' class
                if (!self.settings.hideSelected) option_el.classList.toggle("selected", self.items.includes(opt_hash));
                optgroup = option[self.settings.optgroupField] || "";
                optgroups = Array.isArray(optgroup) ? optgroup : [
                    optgroup
                ];
                for(j = 0, k = optgroups && optgroups.length; j < k; j++){
                    optgroup = optgroups[j];
                    if (!self.optgroups.hasOwnProperty(optgroup)) optgroup = "";
                    let group_fragment = groups[optgroup];
                    if (group_fragment === undefined) {
                        group_fragment = document.createDocumentFragment();
                        groups_order.push(optgroup);
                    } // nodes can only have one parent, so if the option is in mutple groups, we need a clone
                    if (j > 0) {
                        option_el = option_el.cloneNode(true);
                        setAttr(option_el, {
                            id: option.$id + "-clone-" + j,
                            "aria-selected": null
                        });
                        option_el.classList.add("ts-cloned");
                        removeClasses(option_el, "active"); // make sure we keep the activeOption in the same group
                        if (self.activeOption && self.activeOption.dataset.value == opt_value) {
                            if (active_group && active_group.dataset.group === optgroup.toString()) active_option = option_el;
                        }
                    }
                    group_fragment.appendChild(option_el);
                    groups[optgroup] = group_fragment;
                }
            } // sort optgroups
            if (self.settings.lockOptgroupOrder) groups_order.sort((a, b)=>{
                const grp_a = self.optgroups[a];
                const grp_b = self.optgroups[b];
                const a_order = grp_a && grp_a.$order || 0;
                const b_order = grp_b && grp_b.$order || 0;
                return a_order - b_order;
            });
             // render optgroup headers & join groups
            html = document.createDocumentFragment();
            iterate$1(groups_order, (optgroup)=>{
                let group_fragment = groups[optgroup];
                if (!group_fragment || !group_fragment.children.length) return;
                let group_heading = self.optgroups[optgroup];
                if (group_heading !== undefined) {
                    let group_options = document.createDocumentFragment();
                    let header = self.render("optgroup_header", group_heading);
                    append(group_options, header);
                    append(group_options, group_fragment);
                    let group_html = self.render("optgroup", {
                        group: group_heading,
                        options: group_options
                    });
                    append(html, group_html);
                } else append(html, group_fragment);
            });
            dropdown_content.innerHTML = "";
            append(dropdown_content, html); // highlight matching terms inline
            if (self.settings.highlight) {
                removeHighlight(dropdown_content);
                if (results.query.length && results.tokens.length) iterate$1(results.tokens, (tok)=>{
                    highlight(dropdown_content, tok.regex);
                });
            } // helper method for adding templates to dropdown
            var add_template = (template)=>{
                let content = self.render(template, {
                    input: query
                });
                if (content) {
                    show_dropdown = true;
                    dropdown_content.insertBefore(content, dropdown_content.firstChild);
                }
                return content;
            }; // add loading message
            if (self.loading) add_template("loading"); // invalid query
            else if (!self.settings.shouldLoad.call(self, query)) add_template("not_loading"); // add no_results message
            else if (results.items.length === 0) add_template("no_results");
             // add create option
            has_create_option = self.canCreate(query);
            if (has_create_option) create = add_template("option_create");
             // activate
            self.hasOptions = results.items.length > 0 || has_create_option;
            if (show_dropdown) {
                if (results.items.length > 0) {
                    if (!active_option && self.settings.mode === "single" && self.items[0] != undefined) active_option = self.getOption(self.items[0]);
                    if (!dropdown_content.contains(active_option)) {
                        let active_index = 0;
                        if (create && !self.settings.addPrecedence) active_index = 1;
                        active_option = self.selectable()[active_index];
                    }
                } else if (create) active_option = create;
                if (triggerDropdown && !self.isOpen) {
                    self.open();
                    self.scrollToOption(active_option, "auto");
                }
                self.setActiveOption(active_option);
            } else {
                self.clearActiveOption();
                if (triggerDropdown && self.isOpen) self.close(false); // if create_option=null, we want the dropdown to close but not reset the textbox value
            }
        }
        /**
	   * Return list of selectable options
	   *
	   */ selectable() {
            return this.dropdown_content.querySelectorAll("[data-selectable]");
        }
        /**
	   * Adds an available option. If it already exists,
	   * nothing will happen. Note: this does not refresh
	   * the options list dropdown (use `refreshOptions`
	   * for that).
	   *
	   * Usage:
	   *
	   *   this.addOption(data)
	   *
	   */ addOption(data, user_created = false) {
            const self = this; // @deprecated 1.7.7
            // use addOptions( array, user_created ) for adding multiple options
            if (Array.isArray(data)) {
                self.addOptions(data, user_created);
                return false;
            }
            const key = hash_key(data[self.settings.valueField]);
            if (key === null || self.options.hasOwnProperty(key)) return false;
            data.$order = data.$order || ++self.order;
            data.$id = self.inputId + "-opt-" + data.$order;
            self.options[key] = data;
            self.lastQuery = null;
            if (user_created) {
                self.userOptions[key] = user_created;
                self.trigger("option_add", key, data);
            }
            return key;
        }
        /**
	   * Add multiple options
	   *
	   */ addOptions(data, user_created = false) {
            iterate$1(data, (dat)=>{
                this.addOption(dat, user_created);
            });
        }
        /**
	   * @deprecated 1.7.7
	   */ registerOption(data) {
            return this.addOption(data);
        }
        /**
	   * Registers an option group to the pool of option groups.
	   *
	   * @return {boolean|string}
	   */ registerOptionGroup(data) {
            var key = hash_key(data[this.settings.optgroupValueField]);
            if (key === null) return false;
            data.$order = data.$order || ++this.order;
            this.optgroups[key] = data;
            return key;
        }
        /**
	   * Registers a new optgroup for options
	   * to be bucketed into.
	   *
	   */ addOptionGroup(id, data) {
            var hashed_id;
            data[this.settings.optgroupValueField] = id;
            if (hashed_id = this.registerOptionGroup(data)) this.trigger("optgroup_add", hashed_id, data);
        }
        /**
	   * Removes an existing option group.
	   *
	   */ removeOptionGroup(id) {
            if (this.optgroups.hasOwnProperty(id)) {
                delete this.optgroups[id];
                this.clearCache();
                this.trigger("optgroup_remove", id);
            }
        }
        /**
	   * Clears all existing option groups.
	   */ clearOptionGroups() {
            this.optgroups = {};
            this.clearCache();
            this.trigger("optgroup_clear");
        }
        /**
	   * Updates an option available for selection. If
	   * it is visible in the selected items or options
	   * dropdown, it will be re-rendered automatically.
	   *
	   */ updateOption(value, data) {
            const self = this;
            var item_new;
            var index_item;
            const value_old = hash_key(value);
            const value_new = hash_key(data[self.settings.valueField]); // sanity checks
            if (value_old === null) return;
            const data_old = self.options[value_old];
            if (data_old == undefined) return;
            if (typeof value_new !== "string") throw new Error("Value must be set in option data");
            const option = self.getOption(value_old);
            const item = self.getItem(value_old);
            data.$order = data.$order || data_old.$order;
            delete self.options[value_old]; // invalidate render cache
            // don't remove existing node yet, we'll remove it after replacing it
            self.uncacheValue(value_new);
            self.options[value_new] = data; // update the option if it's in the dropdown
            if (option) {
                if (self.dropdown_content.contains(option)) {
                    const option_new = self._render("option", data);
                    replaceNode(option, option_new);
                    if (self.activeOption === option) self.setActiveOption(option_new);
                }
                option.remove();
            } // update the item if we have one
            if (item) {
                index_item = self.items.indexOf(value_old);
                if (index_item !== -1) self.items.splice(index_item, 1, value_new);
                item_new = self._render("item", data);
                if (item.classList.contains("active")) addClasses(item_new, "active");
                replaceNode(item, item_new);
            } // invalidate last query because we might have updated the sortField
            self.lastQuery = null;
        }
        /**
	   * Removes a single option.
	   *
	   */ removeOption(value, silent) {
            const self = this;
            value = get_hash(value);
            self.uncacheValue(value);
            delete self.userOptions[value];
            delete self.options[value];
            self.lastQuery = null;
            self.trigger("option_remove", value);
            self.removeItem(value, silent);
        }
        /**
	   * Clears all options.
	   */ clearOptions(filter) {
            const boundFilter = (filter || this.clearFilter).bind(this);
            this.loadedSearches = {};
            this.userOptions = {};
            this.clearCache();
            const selected = {};
            iterate$1(this.options, (option, key)=>{
                if (boundFilter(option, key)) selected[key] = option;
            });
            this.options = this.sifter.items = selected;
            this.lastQuery = null;
            this.trigger("option_clear");
        }
        /**
	   * Used by clearOptions() to decide whether or not an option should be removed
	   * Return true to keep an option, false to remove
	   *
	   */ clearFilter(option, value) {
            if (this.items.indexOf(value) >= 0) return true;
            return false;
        }
        /**
	   * Returns the dom element of the option
	   * matching the given value.
	   *
	   */ getOption(value, create = false) {
            const hashed = hash_key(value);
            if (hashed === null) return null;
            const option = this.options[hashed];
            if (option != undefined) {
                if (option.$div) return option.$div;
                if (create) return this._render("option", option);
            }
            return null;
        }
        /**
	   * Returns the dom element of the next or previous dom element of the same type
	   * Note: adjacent options may not be adjacent DOM elements (optgroups)
	   *
	   */ getAdjacent(option, direction, type = "option") {
            var self = this, all;
            if (!option) return null;
            if (type == "item") all = self.controlChildren();
            else all = self.dropdown_content.querySelectorAll("[data-selectable]");
            for(let i = 0; i < all.length; i++){
                if (all[i] != option) continue;
                if (direction > 0) return all[i + 1];
                return all[i - 1];
            }
            return null;
        }
        /**
	   * Returns the dom element of the item
	   * matching the given value.
	   *
	   */ getItem(item) {
            if (typeof item == "object") return item;
            var value = hash_key(item);
            return value !== null ? this.control.querySelector(`[data-value="${addSlashes(value)}"]`) : null;
        }
        /**
	   * "Selects" multiple items at once. Adds them to the list
	   * at the current caret position.
	   *
	   */ addItems(values, silent) {
            var self = this;
            var items = Array.isArray(values) ? values : [
                values
            ];
            items = items.filter((x)=>self.items.indexOf(x) === -1);
            const last_item = items[items.length - 1];
            items.forEach((item)=>{
                self.isPending = item !== last_item;
                self.addItem(item, silent);
            });
        }
        /**
	   * "Selects" an item. Adds it to the list
	   * at the current caret position.
	   *
	   */ addItem(value, silent) {
            var events = silent ? [] : [
                "change",
                "dropdown_close"
            ];
            debounce_events(this, events, ()=>{
                var item, wasFull;
                const self = this;
                const inputMode = self.settings.mode;
                const hashed = hash_key(value);
                if (hashed && self.items.indexOf(hashed) !== -1) {
                    if (inputMode === "single") self.close();
                    if (inputMode === "single" || !self.settings.duplicates) return;
                }
                if (hashed === null || !self.options.hasOwnProperty(hashed)) return;
                if (inputMode === "single") self.clear(silent);
                if (inputMode === "multi" && self.isFull()) return;
                item = self._render("item", self.options[hashed]);
                if (self.control.contains(item)) // duplicates
                item = item.cloneNode(true);
                wasFull = self.isFull();
                self.items.splice(self.caretPos, 0, hashed);
                self.insertAtCaret(item);
                if (self.isSetup) {
                    // update menu / remove the option (if this is not one item being added as part of series)
                    if (!self.isPending && self.settings.hideSelected) {
                        let option = self.getOption(hashed);
                        let next = self.getAdjacent(option, 1);
                        if (next) self.setActiveOption(next);
                    } // refreshOptions after setActiveOption(),
                    // otherwise setActiveOption() will be called by refreshOptions() with the wrong value
                    if (!self.isPending && !self.settings.closeAfterSelect) self.refreshOptions(self.isFocused && inputMode !== "single");
                     // hide the menu if the maximum number of items have been selected or no options are left
                    if (self.settings.closeAfterSelect != false && self.isFull()) self.close();
                    else if (!self.isPending) self.positionDropdown();
                    self.trigger("item_add", hashed, item);
                    if (!self.isPending) self.updateOriginalInput({
                        silent: silent
                    });
                }
                if (!self.isPending || !wasFull && self.isFull()) {
                    self.inputState();
                    self.refreshState();
                }
            });
        }
        /**
	   * Removes the selected item matching
	   * the provided value.
	   *
	   */ removeItem(item = null, silent) {
            const self = this;
            item = self.getItem(item);
            if (!item) return;
            var i, idx;
            const value = item.dataset.value;
            i = nodeIndex(item);
            item.remove();
            if (item.classList.contains("active")) {
                idx = self.activeItems.indexOf(item);
                self.activeItems.splice(idx, 1);
                removeClasses(item, "active");
            }
            self.items.splice(i, 1);
            self.lastQuery = null;
            if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) self.removeOption(value, silent);
            if (i < self.caretPos) self.setCaret(self.caretPos - 1);
            self.updateOriginalInput({
                silent: silent
            });
            self.refreshState();
            self.positionDropdown();
            self.trigger("item_remove", value, item);
        }
        /**
	   * Invokes the `create` method provided in the
	   * TomSelect options that should provide the data
	   * for the new item, given the user input.
	   *
	   * Once this completes, it will be added
	   * to the item list.
	   *
	   */ createItem(input = null, callback = ()=>{}) {
            // triggerDropdown parameter @deprecated 2.1.1
            if (arguments.length === 3) callback = arguments[2];
            if (typeof callback != "function") callback = ()=>{};
            var self = this;
            var caret = self.caretPos;
            var output;
            input = input || self.inputValue();
            if (!self.canCreate(input)) {
                callback();
                return false;
            }
            self.lock();
            var created = false;
            var create = (data)=>{
                self.unlock();
                if (!data || typeof data !== "object") return callback();
                var value = hash_key(data[self.settings.valueField]);
                if (typeof value !== "string") return callback();
                self.setTextboxValue();
                self.addOption(data, true);
                self.setCaret(caret);
                self.addItem(value);
                callback(data);
                created = true;
            };
            if (typeof self.settings.create === "function") output = self.settings.create.call(this, input, create);
            else output = {
                [self.settings.labelField]: input,
                [self.settings.valueField]: input
            };
            if (!created) create(output);
            return true;
        }
        /**
	   * Re-renders the selected item lists.
	   */ refreshItems() {
            var self = this;
            self.lastQuery = null;
            if (self.isSetup) self.addItems(self.items);
            self.updateOriginalInput();
            self.refreshState();
        }
        /**
	   * Updates all state-dependent attributes
	   * and CSS classes.
	   */ refreshState() {
            const self = this;
            self.refreshValidityState();
            const isFull = self.isFull();
            const isLocked = self.isLocked;
            self.wrapper.classList.toggle("rtl", self.rtl);
            const wrap_classList = self.wrapper.classList;
            wrap_classList.toggle("focus", self.isFocused);
            wrap_classList.toggle("disabled", self.isDisabled);
            wrap_classList.toggle("required", self.isRequired);
            wrap_classList.toggle("invalid", !self.isValid);
            wrap_classList.toggle("locked", isLocked);
            wrap_classList.toggle("full", isFull);
            wrap_classList.toggle("input-active", self.isFocused && !self.isInputHidden);
            wrap_classList.toggle("dropdown-active", self.isOpen);
            wrap_classList.toggle("has-options", isEmptyObject(self.options));
            wrap_classList.toggle("has-items", self.items.length > 0);
        }
        /**
	   * Update the `required` attribute of both input and control input.
	   *
	   * The `required` property needs to be activated on the control input
	   * for the error to be displayed at the right place. `required` also
	   * needs to be temporarily deactivated on the input since the input is
	   * hidden and can't show errors.
	   */ refreshValidityState() {
            var self = this;
            if (!self.input.validity) return;
            self.isValid = self.input.validity.valid;
            self.isInvalid = !self.isValid;
        }
        /**
	   * Determines whether or not more items can be added
	   * to the control without exceeding the user-defined maximum.
	   *
	   * @returns {boolean}
	   */ isFull() {
            return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
        }
        /**
	   * Refreshes the original <select> or <input>
	   * element to reflect the current state.
	   *
	   */ updateOriginalInput(opts = {}) {
            const self = this;
            var option, label;
            const empty_option = self.input.querySelector('option[value=""]');
            if (self.is_select_tag) {
                const selected = [];
                const has_selected = self.input.querySelectorAll("option:checked").length;
                function AddSelected(option_el, value, label) {
                    if (!option_el) option_el = getDom('<option value="' + escape_html(value) + '">' + escape_html(label) + "</option>");
                     // don't move empty option from top of list
                    // fixes bug in firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1725293
                    if (option_el != empty_option) self.input.append(option_el);
                    selected.push(option_el); // marking empty option as selected can break validation
                    // fixes https://github.com/orchidjs/tom-select/issues/303
                    if (option_el != empty_option || has_selected > 0) option_el.selected = true;
                    return option_el;
                } // unselect all selected options
                self.input.querySelectorAll("option:checked").forEach((option_el)=>{
                    option_el.selected = false;
                }); // nothing selected?
                if (self.items.length == 0 && self.settings.mode == "single") AddSelected(empty_option, "", ""); // order selected <option> tags for values in self.items
                else self.items.forEach((value)=>{
                    option = self.options[value];
                    label = option[self.settings.labelField] || "";
                    if (selected.includes(option.$option)) {
                        const reuse_opt = self.input.querySelector(`option[value="${addSlashes(value)}"]:not(:checked)`);
                        AddSelected(reuse_opt, value, label);
                    } else option.$option = AddSelected(option.$option, value, label);
                });
            } else self.input.value = self.getValue();
            if (self.isSetup) {
                if (!opts.silent) self.trigger("change", self.getValue());
            }
        }
        /**
	   * Shows the autocomplete dropdown containing
	   * the available options.
	   */ open() {
            var self = this;
            if (self.isLocked || self.isOpen || self.settings.mode === "multi" && self.isFull()) return;
            self.isOpen = true;
            setAttr(self.focus_node, {
                "aria-expanded": "true"
            });
            self.refreshState();
            applyCSS(self.dropdown, {
                visibility: "hidden",
                display: "block"
            });
            self.positionDropdown();
            applyCSS(self.dropdown, {
                visibility: "visible",
                display: "block"
            });
            self.focus();
            self.trigger("dropdown_open", self.dropdown);
        }
        /**
	   * Closes the autocomplete dropdown menu.
	   */ close(setTextboxValue = true) {
            var self = this;
            var trigger = self.isOpen;
            if (setTextboxValue) {
                // before blur() to prevent form onchange event
                self.setTextboxValue();
                if (self.settings.mode === "single" && self.items.length) self.hideInput();
            }
            self.isOpen = false;
            setAttr(self.focus_node, {
                "aria-expanded": "false"
            });
            applyCSS(self.dropdown, {
                display: "none"
            });
            if (self.settings.hideSelected) self.clearActiveOption();
            self.refreshState();
            if (trigger) self.trigger("dropdown_close", self.dropdown);
        }
        /**
	   * Calculates and applies the appropriate
	   * position of the dropdown if dropdownParent = 'body'.
	   * Otherwise, position is determined by css
	   */ positionDropdown() {
            if (this.settings.dropdownParent !== "body") return;
            var context = this.control;
            var rect = context.getBoundingClientRect();
            var top = context.offsetHeight + rect.top + window.scrollY;
            var left = rect.left + window.scrollX;
            applyCSS(this.dropdown, {
                width: rect.width + "px",
                top: top + "px",
                left: left + "px"
            });
        }
        /**
	   * Resets / clears all selected items
	   * from the control.
	   *
	   */ clear(silent) {
            var self = this;
            if (!self.items.length) return;
            var items = self.controlChildren();
            iterate$1(items, (item)=>{
                self.removeItem(item, true);
            });
            self.showInput();
            if (!silent) self.updateOriginalInput();
            self.trigger("clear");
        }
        /**
	   * A helper method for inserting an element
	   * at the current caret position.
	   *
	   */ insertAtCaret(el) {
            const self = this;
            const caret = self.caretPos;
            const target = self.control;
            target.insertBefore(el, target.children[caret] || null);
            self.setCaret(caret + 1);
        }
        /**
	   * Removes the current selected item(s).
	   *
	   */ deleteSelection(e) {
            var direction, selection, caret, tail;
            var self = this;
            direction = e && e.keyCode === KEY_BACKSPACE ? -1 : 1;
            selection = getSelection(self.control_input); // determine items that will be removed
            const rm_items = [];
            if (self.activeItems.length) {
                tail = getTail(self.activeItems, direction);
                caret = nodeIndex(tail);
                if (direction > 0) caret++;
                iterate$1(self.activeItems, (item)=>rm_items.push(item));
            } else if ((self.isFocused || self.settings.mode === "single") && self.items.length) {
                const items = self.controlChildren();
                let rm_item;
                if (direction < 0 && selection.start === 0 && selection.length === 0) rm_item = items[self.caretPos - 1];
                else if (direction > 0 && selection.start === self.inputValue().length) rm_item = items[self.caretPos];
                if (rm_item !== undefined) rm_items.push(rm_item);
            }
            if (!self.shouldDelete(rm_items, e)) return false;
            preventDefault(e, true); // perform removal
            if (typeof caret !== "undefined") self.setCaret(caret);
            while(rm_items.length)self.removeItem(rm_items.pop());
            self.showInput();
            self.positionDropdown();
            self.refreshOptions(false);
            return true;
        }
        /**
	   * Return true if the items should be deleted
	   */ shouldDelete(items, evt) {
            const values = items.map((item)=>item.dataset.value); // allow the callback to abort
            if (!values.length || typeof this.settings.onDelete === "function" && this.settings.onDelete(values, evt) === false) return false;
            return true;
        }
        /**
	   * Selects the previous / next item (depending on the `direction` argument).
	   *
	   * > 0 - right
	   * < 0 - left
	   *
	   */ advanceSelection(direction, e) {
            var last_active, adjacent, self = this;
            if (self.rtl) direction *= -1;
            if (self.inputValue().length) return; // add or remove to active items
            if (isKeyDown(KEY_SHORTCUT, e) || isKeyDown("shiftKey", e)) {
                last_active = self.getLastActive(direction);
                if (last_active) {
                    if (!last_active.classList.contains("active")) adjacent = last_active;
                    else adjacent = self.getAdjacent(last_active, direction, "item");
                     // if no active item, get items adjacent to the control input
                } else if (direction > 0) adjacent = self.control_input.nextElementSibling;
                else adjacent = self.control_input.previousElementSibling;
                if (adjacent) {
                    if (adjacent.classList.contains("active")) self.removeActiveItem(last_active);
                    self.setActiveItemClass(adjacent); // mark as last_active !! after removeActiveItem() on last_active
                } // move caret to the left or right
            } else self.moveCaret(direction);
        }
        moveCaret(direction) {}
        /**
	   * Get the last active item
	   *
	   */ getLastActive(direction) {
            let last_active = this.control.querySelector(".last-active");
            if (last_active) return last_active;
            var result = this.control.querySelectorAll(".active");
            if (result) return getTail(result, direction);
        }
        /**
	   * Moves the caret to the specified index.
	   *
	   * The input must be moved by leaving it in place and moving the
	   * siblings, due to the fact that focus cannot be restored once lost
	   * on mobile webkit devices
	   *
	   */ setCaret(new_pos) {
            this.caretPos = this.items.length;
        }
        /**
	   * Return list of item dom elements
	   *
	   */ controlChildren() {
            return Array.from(this.control.querySelectorAll("[data-ts-item]"));
        }
        /**
	   * Disables user input on the control. Used while
	   * items are being asynchronously created.
	   */ lock() {
            this.isLocked = true;
            this.refreshState();
        }
        /**
	   * Re-enables user input on the control.
	   */ unlock() {
            this.isLocked = false;
            this.refreshState();
        }
        /**
	   * Disables user input on the control completely.
	   * While disabled, it cannot receive focus.
	   */ disable() {
            var self = this;
            self.input.disabled = true;
            self.control_input.disabled = true;
            self.focus_node.tabIndex = -1;
            self.isDisabled = true;
            this.close();
            self.lock();
        }
        /**
	   * Enables the control so that it can respond
	   * to focus and user input.
	   */ enable() {
            var self = this;
            self.input.disabled = false;
            self.control_input.disabled = false;
            self.focus_node.tabIndex = self.tabIndex;
            self.isDisabled = false;
            self.unlock();
        }
        /**
	   * Completely destroys the control and
	   * unbinds all event listeners so that it can
	   * be garbage collected.
	   */ destroy() {
            var self = this;
            var revertSettings = self.revertSettings;
            self.trigger("destroy");
            self.off();
            self.wrapper.remove();
            self.dropdown.remove();
            self.input.innerHTML = revertSettings.innerHTML;
            self.input.tabIndex = revertSettings.tabIndex;
            removeClasses(self.input, "tomselected", "ts-hidden-accessible");
            self._destroy();
            delete self.input.tomselect;
        }
        /**
	   * A helper method for rendering "item" and
	   * "option" templates, given the data.
	   *
	   */ render(templateName, data) {
            var id, html;
            const self = this;
            if (typeof this.settings.render[templateName] !== "function") return null;
             // render markup
            html = self.settings.render[templateName].call(this, data, escape_html);
            if (!html) return null;
            html = getDom(html); // add mandatory attributes
            if (templateName === "option" || templateName === "option_create") {
                if (data[self.settings.disabledField]) setAttr(html, {
                    "aria-disabled": "true"
                });
                else setAttr(html, {
                    "data-selectable": ""
                });
            } else if (templateName === "optgroup") {
                id = data.group[self.settings.optgroupValueField];
                setAttr(html, {
                    "data-group": id
                });
                if (data.group[self.settings.disabledField]) setAttr(html, {
                    "data-disabled": ""
                });
            }
            if (templateName === "option" || templateName === "item") {
                const value = get_hash(data[self.settings.valueField]);
                setAttr(html, {
                    "data-value": value
                }); // make sure we have some classes if a template is overwritten
                if (templateName === "item") {
                    addClasses(html, self.settings.itemClass);
                    setAttr(html, {
                        "data-ts-item": ""
                    });
                } else {
                    addClasses(html, self.settings.optionClass);
                    setAttr(html, {
                        role: "option",
                        id: data.$id
                    }); // update cache
                    data.$div = html;
                    self.options[value] = data;
                }
            }
            return html;
        }
        /**
	   * Type guarded rendering
	   *
	   */ _render(templateName, data) {
            const html = this.render(templateName, data);
            if (html == null) throw "HTMLElement expected";
            return html;
        }
        /**
	   * Clears the render cache for a template. If
	   * no template is given, clears all render
	   * caches.
	   *
	   */ clearCache() {
            iterate$1(this.options, (option)=>{
                if (option.$div) {
                    option.$div.remove();
                    delete option.$div;
                }
            });
        }
        /**
	   * Removes a value from item and option caches
	   *
	   */ uncacheValue(value) {
            const option_el = this.getOption(value);
            if (option_el) option_el.remove();
        }
        /**
	   * Determines whether or not to display the
	   * create item prompt, given a user input.
	   *
	   */ canCreate(input) {
            return this.settings.create && input.length > 0 && this.settings.createFilter.call(this, input);
        }
        /**
	   * Wraps this.`method` so that `new_fn` can be invoked 'before', 'after', or 'instead' of the original method
	   *
	   * this.hook('instead','onKeyDown',function( arg1, arg2 ...){
	   *
	   * });
	   */ hook(when, method, new_fn) {
            var self = this;
            var orig_method = self[method];
            self[method] = function() {
                var result, result_new;
                if (when === "after") result = orig_method.apply(self, arguments);
                result_new = new_fn.apply(self, arguments);
                if (when === "instead") return result_new;
                if (when === "before") result = orig_method.apply(self, arguments);
                return result;
            };
        }
    }
    /**
	 * Plugin: "change_listener" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function change_listener() {
        addEvent(this.input, "change", ()=>{
            this.sync();
        });
    }
    /**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function checkbox_options() {
        var self = this;
        var orig_onOptionSelect = self.onOptionSelect;
        self.settings.hideSelected = false; // update the checkbox for an option
        var UpdateCheckbox = function UpdateCheckbox(option) {
            setTimeout(()=>{
                var checkbox = option.querySelector("input");
                if (checkbox instanceof HTMLInputElement) {
                    if (option.classList.contains("selected")) checkbox.checked = true;
                    else checkbox.checked = false;
                }
            }, 1);
        }; // add checkbox to option template
        self.hook("after", "setupTemplates", ()=>{
            var orig_render_option = self.settings.render.option;
            self.settings.render.option = (data, escape_html)=>{
                var rendered = getDom(orig_render_option.call(self, data, escape_html));
                var checkbox = document.createElement("input");
                checkbox.addEventListener("click", function(evt) {
                    preventDefault(evt);
                });
                checkbox.type = "checkbox";
                const hashed = hash_key(data[self.settings.valueField]);
                if (hashed && self.items.indexOf(hashed) > -1) checkbox.checked = true;
                rendered.prepend(checkbox);
                return rendered;
            };
        }); // uncheck when item removed
        self.on("item_remove", (value)=>{
            var option = self.getOption(value);
            if (option) {
                // if dropdown hasn't been opened yet, the option won't exist
                option.classList.remove("selected"); // selected class won't be removed yet
                UpdateCheckbox(option);
            }
        }); // check when item added
        self.on("item_add", (value)=>{
            var option = self.getOption(value);
            if (option) // if dropdown hasn't been opened yet, the option won't exist
            UpdateCheckbox(option);
        }); // remove items when selected option is clicked
        self.hook("instead", "onOptionSelect", (evt, option)=>{
            if (option.classList.contains("selected")) {
                option.classList.remove("selected");
                self.removeItem(option.dataset.value);
                self.refreshOptions();
                preventDefault(evt, true);
                return;
            }
            orig_onOptionSelect.call(self, evt, option);
            UpdateCheckbox(option);
        });
    }
    /**
	 * Plugin: "dropdown_header" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function clear_button(userOptions) {
        const self = this;
        const options = Object.assign({
            className: "clear-button",
            title: "Clear All",
            html: (data)=>{
                return `<div class="${data.className}" title="${data.title}">&#10799;</div>`;
            }
        }, userOptions);
        self.on("initialize", ()=>{
            var button = getDom(options.html(options));
            button.addEventListener("click", (evt)=>{
                if (self.isDisabled) return;
                self.clear();
                if (self.settings.mode === "single" && self.settings.allowEmptyOption) self.addItem("");
                evt.preventDefault();
                evt.stopPropagation();
            });
            self.control.appendChild(button);
        });
    }
    /**
	 * Plugin: "drag_drop" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function drag_drop() {
        var self = this;
        if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if (self.settings.mode !== "multi") return;
        var orig_lock = self.lock;
        var orig_unlock = self.unlock;
        self.hook("instead", "lock", ()=>{
            var sortable = $(self.control).data("sortable");
            if (sortable) sortable.disable();
            return orig_lock.call(self);
        });
        self.hook("instead", "unlock", ()=>{
            var sortable = $(self.control).data("sortable");
            if (sortable) sortable.enable();
            return orig_unlock.call(self);
        });
        self.on("initialize", ()=>{
            var $control = $(self.control).sortable({
                items: "[data-value]",
                forcePlaceholderSize: true,
                disabled: self.isLocked,
                start: (e, ui)=>{
                    ui.placeholder.css("width", ui.helper.css("width"));
                    $control.css({
                        overflow: "visible"
                    });
                },
                stop: ()=>{
                    $control.css({
                        overflow: "hidden"
                    });
                    var values = [];
                    $control.children("[data-value]").each(function() {
                        if (this.dataset.value) values.push(this.dataset.value);
                    });
                    self.setValue(values);
                }
            });
        });
    }
    /**
	 * Plugin: "dropdown_header" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function dropdown_header(userOptions) {
        const self = this;
        const options = Object.assign({
            title: "Untitled",
            headerClass: "dropdown-header",
            titleRowClass: "dropdown-header-title",
            labelClass: "dropdown-header-label",
            closeClass: "dropdown-header-close",
            html: (data)=>{
                return '<div class="' + data.headerClass + '">' + '<div class="' + data.titleRowClass + '">' + '<span class="' + data.labelClass + '">' + data.title + "</span>" + '<a class="' + data.closeClass + '">&times;</a>' + "</div>" + "</div>";
            }
        }, userOptions);
        self.on("initialize", ()=>{
            var header = getDom(options.html(options));
            var close_link = header.querySelector("." + options.closeClass);
            if (close_link) close_link.addEventListener("click", (evt)=>{
                preventDefault(evt, true);
                self.close();
            });
            self.dropdown.insertBefore(header, self.dropdown.firstChild);
        });
    }
    /**
	 * Plugin: "dropdown_input" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function caret_position() {
        var self = this;
        /**
	   * Moves the caret to the specified index.
	   *
	   * The input must be moved by leaving it in place and moving the
	   * siblings, due to the fact that focus cannot be restored once lost
	   * on mobile webkit devices
	   *
	   */ self.hook("instead", "setCaret", (new_pos)=>{
            if (self.settings.mode === "single" || !self.control.contains(self.control_input)) new_pos = self.items.length;
            else {
                new_pos = Math.max(0, Math.min(self.items.length, new_pos));
                if (new_pos != self.caretPos && !self.isPending) self.controlChildren().forEach((child, j)=>{
                    if (j < new_pos) self.control_input.insertAdjacentElement("beforebegin", child);
                    else self.control.appendChild(child);
                });
            }
            self.caretPos = new_pos;
        });
        self.hook("instead", "moveCaret", (direction)=>{
            if (!self.isFocused) return; // move caret before or after selected items
            const last_active = self.getLastActive(direction);
            if (last_active) {
                const idx = nodeIndex(last_active);
                self.setCaret(direction > 0 ? idx + 1 : idx);
                self.setActiveItem();
                removeClasses(last_active, "last-active"); // move caret left or right of current position
            } else self.setCaret(self.caretPos + direction);
        });
    }
    /**
	 * Plugin: "dropdown_input" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function dropdown_input() {
        const self = this;
        self.settings.shouldOpen = true; // make sure the input is shown even if there are no options to display in the dropdown
        self.hook("before", "setup", ()=>{
            self.focus_node = self.control;
            addClasses(self.control_input, "dropdown-input");
            const div = getDom('<div class="dropdown-input-wrap">');
            div.append(self.control_input);
            self.dropdown.insertBefore(div, self.dropdown.firstChild); // set a placeholder in the select control
            const placeholder = getDom('<input class="items-placeholder" tabindex="-1" />');
            placeholder.placeholder = self.settings.placeholder || "";
            self.control.append(placeholder);
        });
        self.on("initialize", ()=>{
            // set tabIndex on control to -1, otherwise [shift+tab] will put focus right back on control_input
            self.control_input.addEventListener("keydown", (evt)=>{
                //addEvent(self.control_input,'keydown' as const,(evt:KeyboardEvent) =>{
                switch(evt.keyCode){
                    case KEY_ESC:
                        if (self.isOpen) {
                            preventDefault(evt, true);
                            self.close();
                        }
                        self.clearActiveItems();
                        return;
                    case KEY_TAB:
                        self.focus_node.tabIndex = -1;
                        break;
                }
                return self.onKeyDown.call(self, evt);
            });
            self.on("blur", ()=>{
                self.focus_node.tabIndex = self.isDisabled ? -1 : self.tabIndex;
            }); // give the control_input focus when the dropdown is open
            self.on("dropdown_open", ()=>{
                self.control_input.focus();
            }); // prevent onBlur from closing when focus is on the control_input
            const orig_onBlur = self.onBlur;
            self.hook("instead", "onBlur", (evt)=>{
                if (evt && evt.relatedTarget == self.control_input) return;
                return orig_onBlur.call(self);
            });
            addEvent(self.control_input, "blur", ()=>self.onBlur()); // return focus to control to allow further keyboard input
            self.hook("before", "close", ()=>{
                if (!self.isOpen) return;
                self.focus_node.focus({
                    preventScroll: true
                });
            });
        });
    }
    /**
	 * Plugin: "input_autogrow" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function input_autogrow() {
        var self = this;
        self.on("initialize", ()=>{
            var test_input = document.createElement("span");
            var control = self.control_input;
            test_input.style.cssText = "position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ";
            self.wrapper.appendChild(test_input);
            var transfer_styles = [
                "letterSpacing",
                "fontSize",
                "fontFamily",
                "fontWeight",
                "textTransform"
            ];
            for (const style_name of transfer_styles)// @ts-ignore TS7015 https://stackoverflow.com/a/50506154/697576
            test_input.style[style_name] = control.style[style_name];
            /**
	     * Set the control width
	     *
	     */ var resize = ()=>{
                test_input.textContent = control.value;
                control.style.width = test_input.clientWidth + "px";
            };
            resize();
            self.on("update item_add item_remove", resize);
            addEvent(control, "input", resize);
            addEvent(control, "keyup", resize);
            addEvent(control, "blur", resize);
            addEvent(control, "update", resize);
        });
    }
    /**
	 * Plugin: "input_autogrow" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function no_backspace_delete() {
        var self = this;
        var orig_deleteSelection = self.deleteSelection;
        this.hook("instead", "deleteSelection", (evt)=>{
            if (self.activeItems.length) return orig_deleteSelection.call(self, evt);
            return false;
        });
    }
    /**
	 * Plugin: "no_active_items" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function no_active_items() {
        this.hook("instead", "setActiveItem", ()=>{});
        this.hook("instead", "selectAll", ()=>{});
    }
    /**
	 * Plugin: "optgroup_columns" (Tom Select.js)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function optgroup_columns() {
        var self = this;
        var orig_keydown = self.onKeyDown;
        self.hook("instead", "onKeyDown", (evt)=>{
            var index, option, options, optgroup;
            if (!self.isOpen || !(evt.keyCode === KEY_LEFT || evt.keyCode === KEY_RIGHT)) return orig_keydown.call(self, evt);
            self.ignoreHover = true;
            optgroup = parentMatch(self.activeOption, "[data-group]");
            index = nodeIndex(self.activeOption, "[data-selectable]");
            if (!optgroup) return;
            if (evt.keyCode === KEY_LEFT) optgroup = optgroup.previousSibling;
            else optgroup = optgroup.nextSibling;
            if (!optgroup) return;
            options = optgroup.querySelectorAll("[data-selectable]");
            option = options[Math.min(options.length - 1, index)];
            if (option) self.setActiveOption(option);
        });
    }
    /**
	 * Plugin: "remove_button" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function remove_button(userOptions) {
        const options = Object.assign({
            label: "&times;",
            title: "Remove",
            className: "remove",
            append: true
        }, userOptions); //options.className = 'remove-single';
        var self = this; // override the render method to add remove button to each item
        if (!options.append) return;
        var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + "</a>";
        self.hook("after", "setupTemplates", ()=>{
            var orig_render_item = self.settings.render.item;
            self.settings.render.item = (data, escape)=>{
                var item = getDom(orig_render_item.call(self, data, escape));
                var close_button = getDom(html);
                item.appendChild(close_button);
                addEvent(close_button, "mousedown", (evt)=>{
                    preventDefault(evt, true);
                });
                addEvent(close_button, "click", (evt)=>{
                    // propagating will trigger the dropdown to show for single mode
                    preventDefault(evt, true);
                    if (self.isLocked) return;
                    if (!self.shouldDelete([
                        item
                    ], evt)) return;
                    self.removeItem(item);
                    self.refreshOptions(false);
                    self.inputState();
                });
                return item;
            };
        });
    }
    /**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function restore_on_backspace(userOptions) {
        const self = this;
        const options = Object.assign({
            text: (option)=>{
                return option[self.settings.labelField];
            }
        }, userOptions);
        self.on("item_remove", function(value) {
            if (!self.isFocused) return;
            if (self.control_input.value.trim() === "") {
                var option = self.options[value];
                if (option) self.setTextboxValue(options.text.call(self, option));
            }
        });
    }
    /**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */ function virtual_scroll() {
        const self = this;
        const orig_canLoad = self.canLoad;
        const orig_clearActiveOption = self.clearActiveOption;
        const orig_loadCallback = self.loadCallback;
        var pagination = {};
        var dropdown_content;
        var loading_more = false;
        var load_more_opt;
        var default_values = [];
        if (!self.settings.shouldLoadMore) // return true if additional results should be loaded
        self.settings.shouldLoadMore = ()=>{
            const scroll_percent = dropdown_content.clientHeight / (dropdown_content.scrollHeight - dropdown_content.scrollTop);
            if (scroll_percent > 0.9) return true;
            if (self.activeOption) {
                var selectable = self.selectable();
                var index = Array.from(selectable).indexOf(self.activeOption);
                if (index >= selectable.length - 2) return true;
            }
            return false;
        };
        if (!self.settings.firstUrl) throw "virtual_scroll plugin requires a firstUrl() method";
         // in order for virtual scrolling to work,
        // options need to be ordered the same way they're returned from the remote data source
        self.settings.sortField = [
            {
                field: "$order"
            },
            {
                field: "$score"
            }
        ]; // can we load more results for given query?
        const canLoadMore = (query)=>{
            if (typeof self.settings.maxOptions === "number" && dropdown_content.children.length >= self.settings.maxOptions) return false;
            if (query in pagination && pagination[query]) return true;
            return false;
        };
        const clearFilter = (option, value)=>{
            if (self.items.indexOf(value) >= 0 || default_values.indexOf(value) >= 0) return true;
            return false;
        }; // set the next url that will be
        self.setNextUrl = (value, next_url)=>{
            pagination[value] = next_url;
        }; // getUrl() to be used in settings.load()
        self.getUrl = (query)=>{
            if (query in pagination) {
                const next_url = pagination[query];
                pagination[query] = false;
                return next_url;
            } // if the user goes back to a previous query
            // we need to load the first page again
            pagination = {};
            return self.settings.firstUrl.call(self, query);
        }; // don't clear the active option (and cause unwanted dropdown scroll)
        // while loading more results
        self.hook("instead", "clearActiveOption", ()=>{
            if (loading_more) return;
            return orig_clearActiveOption.call(self);
        }); // override the canLoad method
        self.hook("instead", "canLoad", (query)=>{
            // first time the query has been seen
            if (!(query in pagination)) return orig_canLoad.call(self, query);
            return canLoadMore(query);
        }); // wrap the load
        self.hook("instead", "loadCallback", (options, optgroups)=>{
            if (!loading_more) self.clearOptions(clearFilter);
            else if (load_more_opt) {
                const first_option = options[0];
                if (first_option !== undefined) load_more_opt.dataset.value = first_option[self.settings.valueField];
            }
            orig_loadCallback.call(self, options, optgroups);
            loading_more = false;
        }); // add templates to dropdown
        //	loading_more if we have another url in the queue
        //	no_more_results if we don't have another url in the queue
        self.hook("after", "refreshOptions", ()=>{
            const query = self.lastValue;
            var option;
            if (canLoadMore(query)) {
                option = self.render("loading_more", {
                    query: query
                });
                if (option) {
                    option.setAttribute("data-selectable", ""); // so that navigating dropdown with [down] keypresses can navigate to this node
                    load_more_opt = option;
                }
            } else if (query in pagination && !dropdown_content.querySelector(".no-results")) option = self.render("no_more_results", {
                query: query
            });
            if (option) {
                addClasses(option, self.settings.optionClass);
                dropdown_content.append(option);
            }
        }); // add scroll listener and default templates
        self.on("initialize", ()=>{
            default_values = Object.keys(self.options);
            dropdown_content = self.dropdown_content; // default templates
            self.settings.render = Object.assign({}, {
                loading_more: ()=>{
                    return `<div class="loading-more-results">Loading more results ... </div>`;
                },
                no_more_results: ()=>{
                    return `<div class="no-more-results">No more results</div>`;
                }
            }, self.settings.render); // watch dropdown content scroll position
            dropdown_content.addEventListener("scroll", ()=>{
                if (!self.settings.shouldLoadMore.call(self)) return;
                 // !important: this will get checked again in load() but we still need to check here otherwise loading_more will be set to true
                if (!canLoadMore(self.lastValue)) return;
                 // don't call load() too much
                if (loading_more) return;
                loading_more = true;
                self.load.call(self, self.lastValue);
            });
        });
    }
    TomSelect1.define("change_listener", change_listener);
    TomSelect1.define("checkbox_options", checkbox_options);
    TomSelect1.define("clear_button", clear_button);
    TomSelect1.define("drag_drop", drag_drop);
    TomSelect1.define("dropdown_header", dropdown_header);
    TomSelect1.define("caret_position", caret_position);
    TomSelect1.define("dropdown_input", dropdown_input);
    TomSelect1.define("input_autogrow", input_autogrow);
    TomSelect1.define("no_backspace_delete", no_backspace_delete);
    TomSelect1.define("no_active_items", no_active_items);
    TomSelect1.define("optgroup_columns", optgroup_columns);
    TomSelect1.define("remove_button", remove_button);
    TomSelect1.define("restore_on_backspace", restore_on_backspace);
    TomSelect1.define("virtual_scroll", virtual_scroll);
    return TomSelect1;
});
var tomSelect = function(el, opts) {
    return new TomSelect(el, opts);
};

},{}],"38a65":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            });
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 8);
    }([
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = "swal-button";
            e.CLASS_NAMES = {
                MODAL: "swal-modal",
                OVERLAY: "swal-overlay",
                SHOW_MODAL: "swal-overlay--show-modal",
                MODAL_TITLE: "swal-title",
                MODAL_TEXT: "swal-text",
                ICON: "swal-icon",
                ICON_CUSTOM: "swal-icon--custom",
                CONTENT: "swal-content",
                FOOTER: "swal-footer",
                BUTTON_CONTAINER: "swal-button-container",
                BUTTON: o,
                CONFIRM_BUTTON: o + "--confirm",
                CANCEL_BUTTON: o + "--cancel",
                DANGER_BUTTON: o + "--danger",
                BUTTON_LOADING: o + "--loading",
                BUTTON_LOADER: o + "__loader"
            }, e.default = e.CLASS_NAMES;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getNode = function(t) {
                var e = "." + t;
                return document.querySelector(e);
            }, e.stringToNode = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t.trim(), e.firstChild;
            }, e.insertAfter = function(t, e) {
                var n = e.nextSibling;
                e.parentNode.insertBefore(t, n);
            }, e.removeNode = function(t) {
                t.parentElement.removeChild(t);
            }, e.throwErr = function(t) {
                throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
            }, e.isPlainObject = function(t) {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype;
            }, e.ordinalSuffixOf = function(t) {
                var e = t % 10, n = t % 100;
                return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
            };
        },
        function(t, e, n) {
            "use strict";
            function o(t) {
                for(var n in t)e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), o(n(25));
            var r = n(26);
            e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));
            var i = n(0), a = i.default.MODAL_TITLE, s = i.default.MODAL_TEXT, c = i.default.ICON, l = i.default.FOOTER;
            e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1);
            e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
            var r = {
                visible: !0,
                text: null,
                value: null,
                className: "",
                closeModal: !0
            }, i = Object.assign({}, r, {
                visible: !1,
                text: "Cancel",
                value: null
            }), a = Object.assign({}, r, {
                text: "OK",
                value: !0
            });
            e.defaultButtonList = {
                cancel: i,
                confirm: a
            };
            var s = function(t) {
                switch(t){
                    case e.CONFIRM_KEY:
                        return a;
                    case e.CANCEL_KEY:
                        return i;
                    default:
                        var n = t.charAt(0).toUpperCase() + t.slice(1);
                        return Object.assign({}, r, {
                            text: n,
                            value: t
                        });
                }
            }, c = function(t, e) {
                var n = s(t);
                return !0 === e ? Object.assign({}, n, {
                    visible: !0
                }) : "string" == typeof e ? Object.assign({}, n, {
                    visible: !0,
                    text: e
                }) : o.isPlainObject(e) ? Object.assign({
                    visible: !0
                }, n, e) : Object.assign({}, n, {
                    visible: !1
                });
            }, l = function(t) {
                for(var e = {}, n = 0, o = Object.keys(t); n < o.length; n++){
                    var r = o[n], a = t[r], s = c(r, a);
                    e[r] = s;
                }
                return e.cancel || (e.cancel = i), e;
            }, u = function(t) {
                var n = {};
                switch(t.length){
                    case 1:
                        n[e.CANCEL_KEY] = Object.assign({}, i, {
                            visible: !1
                        });
                        break;
                    case 2:
                        n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
                        break;
                    default:
                        o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");
                }
                return n;
            };
            e.getButtonListOpts = function(t) {
                var n = e.defaultButtonList;
                return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([
                    !0,
                    !0
                ]) : !1 === t ? n = u([
                    !1,
                    !1
                ]) : void 0 === t && (n = e.defaultButtonList), n;
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(2), i = n(0), a = i.default.MODAL, s = i.default.OVERLAY, c = n(30), l = n(31), u = n(32), f = n(33);
            e.injectElIntoModal = function(t) {
                var e = o.getNode(a), n = o.stringToNode(t);
                return e.appendChild(n), n;
            };
            var d = function(t) {
                t.className = a, t.textContent = "";
            }, p = function(t, e) {
                d(t);
                var n = e.className;
                n && t.classList.add(n);
            };
            e.initModalContent = function(t) {
                var e = o.getNode(a);
                p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode);
            };
            var m = function() {
                var t = o.getNode(s), e = o.stringToNode(r.modalMarkup);
                t.appendChild(e);
            };
            e.default = m;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(3), r = {
                isOpen: !1,
                promise: null,
                actions: {},
                timer: null
            }, i = Object.assign({}, r);
            e.resetState = function() {
                i = Object.assign({}, r);
            }, e.setActionValue = function(t) {
                if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
                for(var e in t)a(e, t[e]);
            };
            var a = function(t, e) {
                i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
                    value: e
                });
            };
            e.setActionOptionsFor = function(t, e) {
                var n = (void 0 === e ? {} : e).closeModal, o = void 0 === n || n;
                Object.assign(i.actions[t], {
                    closeModal: o
                });
            }, e.default = i;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(3), i = n(0), a = i.default.OVERLAY, s = i.default.SHOW_MODAL, c = i.default.BUTTON, l = i.default.BUTTON_LOADING, u = n(5);
            e.openModal = function() {
                o.getNode(a).classList.add(s), u.default.isOpen = !0;
            };
            var f = function() {
                o.getNode(a).classList.remove(s), u.default.isOpen = !1;
            };
            e.onAction = function(t) {
                void 0 === t && (t = r.CANCEL_KEY);
                var e = u.default.actions[t], n = e.value;
                if (!1 === e.closeModal) {
                    var i = c + "--" + t;
                    o.getNode(i).classList.add(l);
                } else f();
                u.default.promise.resolve(n);
            }, e.getState = function() {
                var t = Object.assign({}, u.default);
                return delete t.promise, delete t.timer, t;
            }, e.stopLoading = function() {
                for(var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++)t[e].classList.remove(l);
            };
        },
        function(t, e) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function(t, e, n) {
            (function(e) {
                t.exports = e.sweetAlert = n(9);
            }).call(e, n(7));
        },
        function(t, e, n) {
            (function(e) {
                t.exports = e.swal = n(10);
            }).call(e, n(7));
        },
        function(t, e, n) {
            "undefined" != typeof window && n(11), n(16);
            var o = n(23).default;
            t.exports = o;
        },
        function(t, e, n) {
            var o = n(12);
            "string" == typeof o && (o = [
                [
                    t.i,
                    o,
                    ""
                ]
            ]);
            var r = {
                insertAt: "top"
            };
            r.transform = void 0;
            n(14)(o, r);
            o.locals && (t.exports = o.locals);
        },
        function(t, e, n) {
            e = t.exports = n(13)(void 0), e.push([
                t.i,
                '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',
                ""
            ]);
        },
        function(t, e) {
            function n(t, e) {
                var n = t[1] || "", r = t[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                    var i = o(r);
                    return [
                        n
                    ].concat(r.sources.map(function(t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */";
                    })).concat([
                        i
                    ]).join("\n");
                }
                return [
                    n
                ].join("\n");
            }
            function o(t) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
            }
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(e) {
                        var o = n(e, t);
                        return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
                    }).join("");
                }, e.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [
                            null,
                            t,
                            ""
                        ]
                    ]);
                    for(var o = {}, r = 0; r < this.length; r++){
                        var i = this[r][0];
                        "number" == typeof i && (o[i] = !0);
                    }
                    for(r = 0; r < t.length; r++){
                        var a = t[r];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
                    }
                }, e;
            };
        },
        function(t, e, n) {
            function o(t, e) {
                for(var n = 0; n < t.length; n++){
                    var o = t[n], r = m[o.id];
                    if (r) {
                        r.refs++;
                        for(var i = 0; i < r.parts.length; i++)r.parts[i](o.parts[i]);
                        for(; i < o.parts.length; i++)r.parts.push(u(o.parts[i], e));
                    } else {
                        for(var a = [], i = 0; i < o.parts.length; i++)a.push(u(o.parts[i], e));
                        m[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: a
                        };
                    }
                }
            }
            function r(t, e) {
                for(var n = [], o = {}, r = 0; r < t.length; r++){
                    var i = t[r], a = e.base ? i[0] + e.base : i[0], s = i[1], c = i[2], l = i[3], u = {
                        css: s,
                        media: c,
                        sourceMap: l
                    };
                    o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                        id: a,
                        parts: [
                            u
                        ]
                    });
                }
                return n;
            }
            function i(t, e) {
                var n = v(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = w[w.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);
                else {
                    if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e);
                }
            }
            function a(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = w.indexOf(t);
                e >= 0 && w.splice(e, 1);
            }
            function s(t) {
                var e = document.createElement("style");
                return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e;
            }
            function c(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e;
            }
            function l(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function u(t, e) {
                var n, o, r, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (e.singleton) {
                    var l = h++;
                    n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function() {
                    a(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = s(e), o = d.bind(null, n), r = function() {
                    a(n);
                });
                return o(t), function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        o(t = e);
                    } else r();
                };
            }
            function f(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, r);
                else {
                    var i = document.createTextNode(r), a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
            function d(t, e) {
                var n = e.css, o = e.media;
                if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for(; t.firstChild;)t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            }
            function p(t, e, n) {
                var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
                (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([
                    o
                ], {
                    type: "text/css"
                }), s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
            }
            var m = {}, b = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = t.apply(this, arguments)), e;
                };
            }(function() {
                return window && document && document.all && !window.atob;
            }), v = function(t) {
                var e = {};
                return function(n) {
                    return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
                };
            }(function(t) {
                return document.querySelector(t);
            }), g = null, h = 0, w = [], y = n(15);
            t.exports = function(t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = r(t, e);
                return o(n, e), function(t) {
                    for(var i = [], a = 0; a < n.length; a++){
                        var s = n[a], c = m[s.id];
                        c.refs--, i.push(c);
                    }
                    if (t) o(r(t, e), e);
                    for(var a = 0; a < i.length; a++){
                        var c = i[a];
                        if (0 === c.refs) {
                            for(var l = 0; l < c.parts.length; l++)c.parts[l]();
                            delete m[c.id];
                        }
                    }
                };
            };
            var x = function() {
                var t = [];
                return function(e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n");
                };
            }();
        },
        function(t, e) {
            t.exports = function(t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host, o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                    var r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e;
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e;
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
                    var i;
                    return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
                });
            };
        },
        function(t, e, n) {
            var o = n(17);
            "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function(t, e) {
                "use strict";
                return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
            }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(t, e) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this), o = n.length >>> 0;
                    if (0 === o) return !1;
                    for(var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;){
                        if (function(t, e) {
                            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
                        }(n[i], t)) return !0;
                        i++;
                    }
                    return !1;
                }
            }), "undefined" != typeof window && function(t) {
                t.forEach(function(t) {
                    t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function() {
                            this.parentNode.removeChild(this);
                        }
                    });
                });
            }([
                Element.prototype,
                CharacterData.prototype,
                DocumentType.prototype
            ]);
        },
        function(t, e, n) {
            (function(e) {
                !function(n) {
                    function o() {}
                    function r(t, e) {
                        return function() {
                            t.apply(e, arguments);
                        };
                    }
                    function i(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
                    }
                    function a(t, e) {
                        for(; 3 === t._state;)t = t._value;
                        if (0 === t._state) return void t._deferreds.push(e);
                        t._handled = !0, i._immediateFn(function() {
                            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                            if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);
                            var o;
                            try {
                                o = n(t._value);
                            } catch (t1) {
                                return void c(e.promise, t1);
                            }
                            s(e.promise, o);
                        });
                    }
                    function s(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if (e instanceof i) return t._state = 3, t._value = e, void l(t);
                                if ("function" == typeof n) return void f(r(n, e), t);
                            }
                            t._state = 1, t._value = e, l(t);
                        } catch (e1) {
                            c(t, e1);
                        }
                    }
                    function c(t, e) {
                        t._state = 2, t._value = e, l(t);
                    }
                    function l(t) {
                        2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
                            t._handled || i._unhandledRejectionFn(t._value);
                        });
                        for(var e = 0, n = t._deferreds.length; e < n; e++)a(t, t._deferreds[e]);
                        t._deferreds = null;
                    }
                    function u(t, e, n) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
                    }
                    function f(t, e) {
                        var n = !1;
                        try {
                            t(function(t) {
                                n || (n = !0, s(e, t));
                            }, function(t) {
                                n || (n = !0, c(e, t));
                            });
                        } catch (t1) {
                            if (n) return;
                            n = !0, c(e, t1);
                        }
                    }
                    var d = setTimeout;
                    i.prototype.catch = function(t) {
                        return this.then(null, t);
                    }, i.prototype.then = function(t, e) {
                        var n = new this.constructor(o);
                        return a(this, new u(t, e, n)), n;
                    }, i.all = function(t) {
                        var e = Array.prototype.slice.call(t);
                        return new i(function(t, n) {
                            function o(i, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var s = a.then;
                                        if ("function" == typeof s) return void s.call(a, function(t) {
                                            o(i, t);
                                        }, n);
                                    }
                                    e[i] = a, 0 == --r && t(e);
                                } catch (t1) {
                                    n(t1);
                                }
                            }
                            if (0 === e.length) return t([]);
                            for(var r = e.length, i = 0; i < e.length; i++)o(i, e[i]);
                        });
                    }, i.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                            e(t);
                        });
                    }, i.reject = function(t) {
                        return new i(function(e, n) {
                            n(t);
                        });
                    }, i.race = function(t) {
                        return new i(function(e, n) {
                            for(var o = 0, r = t.length; o < r; o++)t[o].then(e, n);
                        });
                    }, i._immediateFn = "function" == typeof e && function(t) {
                        e(t);
                    } || function(t) {
                        d(t, 0);
                    }, i._unhandledRejectionFn = function(t) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                    }, i._setImmediateFn = function(t) {
                        i._immediateFn = t;
                    }, i._setUnhandledRejectionFn = function(t) {
                        i._unhandledRejectionFn = t;
                    }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
                }(this);
            }).call(e, n(18).setImmediate);
        },
        function(t, e, n) {
            function o(t, e) {
                this._id = t, this._clearFn = e;
            }
            var r = Function.prototype.apply;
            e.setTimeout = function() {
                return new o(r.call(setTimeout, window, arguments), clearTimeout);
            }, e.setInterval = function() {
                return new o(r.call(setInterval, window, arguments), clearInterval);
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close();
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(window, this._id);
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout();
                }, e));
            }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
        },
        function(t, e, n) {
            (function(t, e) {
                !function(t, n) {
                    "use strict";
                    function o(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for(var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)e[n] = arguments[n + 1];
                        var o = {
                            callback: t,
                            args: e
                        };
                        return l[c] = o, s(c), c++;
                    }
                    function r(t) {
                        delete l[t];
                    }
                    function i(t) {
                        var e = t.callback, o = t.args;
                        switch(o.length){
                            case 0:
                                e();
                                break;
                            case 1:
                                e(o[0]);
                                break;
                            case 2:
                                e(o[0], o[1]);
                                break;
                            case 3:
                                e(o[0], o[1], o[2]);
                                break;
                            default:
                                e.apply(n, o);
                        }
                    }
                    function a(t) {
                        if (u) setTimeout(a, 0, t);
                        else {
                            var e = l[t];
                            if (e) {
                                u = !0;
                                try {
                                    i(e);
                                } finally{
                                    r(t), u = !1;
                                }
                            }
                        }
                    }
                    if (!t.setImmediate) {
                        var s, c = 1, l = {}, u = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                        d = d && d.setTimeout ? d : t, "[object process]" === ({}).toString.call(t.process) ? function() {
                            s = function(t) {
                                e.nextTick(function() {
                                    a(t);
                                });
                            };
                        }() : function() {
                            if (t.postMessage && !t.importScripts) {
                                var e = !0, n = t.onmessage;
                                return t.onmessage = function() {
                                    e = !1;
                                }, t.postMessage("", "*"), t.onmessage = n, e;
                            }
                        }() ? function() {
                            var e = "setImmediate$" + Math.random() + "$", n = function(n) {
                                n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length));
                            };
                            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function(n) {
                                t.postMessage(e + n, "*");
                            };
                        }() : t.MessageChannel ? function() {
                            var t = new MessageChannel;
                            t.port1.onmessage = function(t) {
                                a(t.data);
                            }, s = function(e) {
                                t.port2.postMessage(e);
                            };
                        }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                            var t = f.documentElement;
                            s = function(e) {
                                var n = f.createElement("script");
                                n.onreadystatechange = function() {
                                    a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                                }, t.appendChild(n);
                            };
                        }() : function() {
                            s = function(t) {
                                setTimeout(a, 0, t);
                            };
                        }(), d.setImmediate = o, d.clearImmediate = r;
                    }
                }("undefined" == typeof self ? void 0 === t ? this : t : self);
            }).call(e, n(7), n(20));
        },
        function(t, e) {
            function n() {
                throw new Error("setTimeout has not been defined");
            }
            function o() {
                throw new Error("clearTimeout has not been defined");
            }
            function r(t) {
                if (u === setTimeout) return setTimeout(t, 0);
                if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                try {
                    return u(t, 0);
                } catch (e1) {
                    try {
                        return u.call(null, t, 0);
                    } catch (e) {
                        return u.call(this, t, 0);
                    }
                }
            }
            function i(t) {
                if (f === clearTimeout) return clearTimeout(t);
                if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
                try {
                    return f(t);
                } catch (e1) {
                    try {
                        return f.call(null, t);
                    } catch (e) {
                        return f.call(this, t);
                    }
                }
            }
            function a() {
                b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
            }
            function s() {
                if (!b) {
                    var t = r(a);
                    b = !0;
                    for(var e = m.length; e;){
                        for(p = m, m = []; ++v < e;)p && p[v].run();
                        v = -1, e = m.length;
                    }
                    p = null, b = !1, i(t);
                }
            }
            function c(t, e) {
                this.fun = t, this.array = e;
            }
            function l() {}
            var u, f, d = t.exports = {};
            !function() {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : n;
                } catch (t) {
                    u = n;
                }
                try {
                    f = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (t1) {
                    f = o;
                }
            }();
            var p, m = [], b = !1, v = -1;
            d.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
                m.push(new c(t, e)), 1 !== m.length || b || r(s);
            }, c.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) {
                return [];
            }, d.binding = function(t) {
                throw new Error("process.binding is not supported");
            }, d.cwd = function() {
                return "/";
            }, d.chdir = function(t) {
                throw new Error("process.chdir is not supported");
            }, d.umask = function() {
                return 0;
            };
        },
        function(t, e, n) {
            "use strict";
            n(22).polyfill();
        },
        function(t, e, n) {
            "use strict";
            function o(t, e) {
                if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                for(var n = Object(t), o = 1; o < arguments.length; o++){
                    var r = arguments[o];
                    if (void 0 !== r && null !== r) for(var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++){
                        var c = i[a], l = Object.getOwnPropertyDescriptor(r, c);
                        void 0 !== l && l.enumerable && (n[c] = r[c]);
                    }
                }
                return n;
            }
            function r() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: o
                });
            }
            t.exports = {
                assign: o,
                polyfill: r
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(24), r = n(6), i = n(5), a = n(36), s = function() {
                for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
                if ("undefined" != typeof window) {
                    var n = a.getOpts.apply(void 0, t);
                    return new Promise(function(t, e) {
                        i.default.promise = {
                            resolve: t,
                            reject: e
                        }, o.default(n), setTimeout(function() {
                            r.openModal();
                        });
                    });
                }
            };
            s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(0), i = r.default.MODAL, a = n(4), s = n(34), c = n(35), l = n(1);
            e.init = function(t) {
                o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t);
            }, e.default = e.init;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.MODAL;
            e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.OVERLAY, i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
            e.default = i;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.ICON;
            e.errorIconMarkup = function() {
                var t = r + "--error", e = t + "__line";
                return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
            }, e.warningIconMarkup = function() {
                var t = r + "--warning";
                return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
            }, e.successIconMarkup = function() {
                var t = r + "--success";
                return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.CONTENT;
            e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.BUTTON_CONTAINER, i = o.default.BUTTON, a = o.default.BUTTON_LOADER;
            e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(4), r = n(2), i = n(0), a = i.default.ICON, s = i.default.ICON_CUSTOM, c = [
                "error",
                "warning",
                "success",
                "info"
            ], l = {
                error: r.errorIconMarkup(),
                warning: r.warningIconMarkup(),
                success: r.successIconMarkup()
            }, u = function(t, e) {
                var n = a + "--" + t;
                e.classList.add(n);
                var o = l[t];
                o && (e.innerHTML = o);
            }, f = function(t, e) {
                e.classList.add(s);
                var n = document.createElement("img");
                n.src = t, e.appendChild(n);
            }, d = function(t) {
                if (t) {
                    var e = o.injectElIntoModal(r.iconMarkup);
                    c.includes(t) ? u(t, e) : f(t, e);
                }
            };
            e.default = d;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(2), r = n(4), i = function(t) {
                navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
            };
            e.initTitle = function(t) {
                if (t) {
                    var e = r.injectElIntoModal(o.titleMarkup);
                    e.textContent = t, i(e);
                }
            }, e.initText = function(t) {
                if (t) {
                    var e = document.createDocumentFragment();
                    t.split("\n").forEach(function(t, n, o) {
                        e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"));
                    });
                    var n = r.injectElIntoModal(o.textMarkup);
                    n.appendChild(e), i(n);
                }
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(4), i = n(0), a = i.default.BUTTON, s = i.default.DANGER_BUTTON, c = n(3), l = n(2), u = n(6), f = n(5), d = function(t, e, n) {
                var r = e.text, i = e.value, d = e.className, p = e.closeModal, m = o.stringToNode(l.buttonMarkup), b = m.querySelector("." + a), v = a + "--" + t;
                if (b.classList.add(v), d) (Array.isArray(d) ? d : d.split(" ")).filter(function(t) {
                    return t.length > 0;
                }).forEach(function(t) {
                    b.classList.add(t);
                });
                n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
                var g = {};
                return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
                    closeModal: p
                }), b.addEventListener("click", function() {
                    return u.onAction(t);
                }), m;
            }, p = function(t, e) {
                var n = r.injectElIntoModal(l.footerMarkup);
                for(var o in t){
                    var i = t[o], a = d(o, i, e);
                    i.visible && n.appendChild(a);
                }
                0 === n.children.length && n.remove();
            };
            e.default = p;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(3), r = n(4), i = n(2), a = n(5), s = n(6), c = n(0), l = c.default.CONTENT, u = function(t) {
                t.addEventListener("input", function(t) {
                    var e = t.target, n = e.value;
                    a.setActionValue(n);
                }), t.addEventListener("keyup", function(t) {
                    if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
                }), setTimeout(function() {
                    t.focus(), a.setActionValue("");
                }, 0);
            }, f = function(t, e, n) {
                var o = document.createElement(e), r = l + "__" + e;
                o.classList.add(r);
                for(var i in n){
                    var a = n[i];
                    o[i] = a;
                }
                "input" === e && u(o), t.appendChild(o);
            }, d = function(t) {
                if (t) {
                    var e = r.injectElIntoModal(i.contentMarkup), n = t.element, o = t.attributes;
                    "string" == typeof n ? f(e, n, o) : e.appendChild(n);
                }
            };
            e.default = d;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(2), i = function() {
                var t = o.stringToNode(r.overlayMarkup);
                document.body.appendChild(t);
            };
            e.default = i;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(5), r = n(6), i = n(1), a = n(3), s = n(0), c = s.default.MODAL, l = s.default.BUTTON, u = s.default.OVERLAY, f = function(t) {
                t.preventDefault(), v();
            }, d = function(t) {
                t.preventDefault(), g();
            }, p = function(t) {
                if (o.default.isOpen) switch(t.key){
                    case "Escape":
                        return r.onAction(a.CANCEL_KEY);
                }
            }, m = function(t) {
                if (o.default.isOpen) switch(t.key){
                    case "Tab":
                        return f(t);
                }
            }, b = function(t) {
                if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
            }, v = function() {
                var t = i.getNode(l);
                t && (t.tabIndex = 0, t.focus());
            }, g = function() {
                var t = i.getNode(c), e = t.querySelectorAll("." + l), n = e.length - 1, o = e[n];
                o && o.focus();
            }, h = function(t) {
                t[t.length - 1].addEventListener("keydown", m);
            }, w = function(t) {
                t[0].addEventListener("keydown", b);
            }, y = function() {
                var t = i.getNode(c), e = t.querySelectorAll("." + l);
                e.length && (h(e), w(e));
            }, x = function(t) {
                if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
            }, _ = function(t) {
                var e = i.getNode(u);
                e.removeEventListener("click", x), t && e.addEventListener("click", x);
            }, k = function(t) {
                o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function() {
                    return r.onAction(a.CANCEL_KEY);
                }, t));
            }, O = function(t) {
                t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
            };
            e.default = O;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(3), i = n(37), a = n(38), s = {
                title: null,
                text: null,
                icon: null,
                buttons: r.defaultButtonList,
                content: null,
                className: null,
                closeOnClickOutside: !0,
                closeOnEsc: !0,
                dangerMode: !1,
                timer: null
            }, c = Object.assign({}, s);
            e.setDefaults = function(t) {
                c = Object.assign({}, s, t);
            };
            var l = function(t) {
                var e = t && t.button, n = t && t.buttons;
                return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
                    confirm: e
                } : n;
            }, u = function(t) {
                return o.ordinalSuffixOf(t + 1);
            }, f = function(t, e) {
                o.throwErr(u(e) + " argument ('" + t + "') is invalid");
            }, d = function(t, e) {
                var n = t + 1, r = e[n];
                o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object");
            }, p = function(t, e) {
                var n = t + 1, r = e[n];
                void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
            }, m = function(t, e, n, r) {
                var i = typeof e, a = "string" === i, s = e instanceof Element;
                if (a) {
                    if (0 === n) return {
                        text: e
                    };
                    if (1 === n) return {
                        text: e,
                        title: r[0]
                    };
                    if (2 === n) return d(n, r), {
                        icon: e
                    };
                    f(e, n);
                } else {
                    if (s && 0 === n) return d(n, r), {
                        content: e
                    };
                    if (o.isPlainObject(e)) return p(n, r), e;
                    f(e, n);
                }
            };
            e.getOpts = function() {
                for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
                var n = {};
                t.forEach(function(e, o) {
                    var r = m(0, e, o, t);
                    Object.assign(n, r);
                });
                var o = l(n);
                n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
                var u = Object.assign({}, s, c, n);
                return Object.keys(u).forEach(function(t) {
                    a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
                }), u;
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = {
                element: "input",
                attributes: {
                    placeholder: ""
                }
            };
            e.getContentOpts = function(t) {
                var e = {};
                return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
                    element: t
                } : "input" === t ? r : null;
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logDeprecation = function(t) {
                var n = e.DEPRECATED_OPTS[t], o = n.onlyRename, r = n.replacement, i = n.subOption, a = n.link, s = o ? "renamed" : "deprecated", c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
                if (r) c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
                var l = "https://sweetalert.js.org";
                c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
            }, e.DEPRECATED_OPTS = {
                type: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                imageUrl: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                customClass: {
                    replacement: "className",
                    onlyRename: !0,
                    link: "/docs/#classname"
                },
                imageSize: {},
                showCancelButton: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                showConfirmButton: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonText: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonColor: {},
                cancelButtonText: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                closeOnConfirm: {
                    replacement: "button",
                    subOption: "closeModal",
                    link: "/docs/#button"
                },
                closeOnCancel: {
                    replacement: "buttons",
                    subOption: "closeModal",
                    link: "/docs/#buttons"
                },
                showLoaderOnConfirm: {
                    replacement: "buttons"
                },
                animation: {},
                inputType: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputValue: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputPlaceholder: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                html: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                allowEscapeKey: {
                    replacement: "closeOnEsc",
                    onlyRename: !0,
                    link: "/docs/#closeonesc"
                },
                allowClickOutside: {
                    replacement: "closeOnClickOutside",
                    onlyRename: !0,
                    link: "/docs/#closeonclickoutside"
                }
            };
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7Aums","bNKaB"], "bNKaB", "parcelRequiref92c")

//# sourceMappingURL=index.0641b553.js.map
