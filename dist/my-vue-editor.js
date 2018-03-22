(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("myVueEditor", [], factory);
	else if(typeof exports === 'object')
		exports["myVueEditor"] = factory();
	else
		root["myVueEditor"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdatemyVueEditor"];
/******/ 	window["webpackHotUpdatemyVueEditor"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "006b0f6be62251a46f9a"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(12)(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _insertImage = __webpack_require__(46);

var _insertImage2 = _interopRequireDefault(_insertImage);

var _fontSize = __webpack_require__(47);

var _fontSize2 = _interopRequireDefault(_fontSize);

var _paste = __webpack_require__(48);

var _paste2 = _interopRequireDefault(_paste);

var _enter = __webpack_require__(49);

var _enter2 = _interopRequireDefault(_enter);

var _underline = __webpack_require__(50);

var _underline2 = _interopRequireDefault(_underline);

var _strikeThrough = __webpack_require__(51);

var _strikeThrough2 = _interopRequireDefault(_strikeThrough);

var _italic = __webpack_require__(52);

var _italic2 = _interopRequireDefault(_italic);

var _bold = __webpack_require__(53);

var _bold2 = _interopRequireDefault(_bold);

var _quote = __webpack_require__(54);

var _quote2 = _interopRequireDefault(_quote);

var _todo = __webpack_require__(55);

var _todo2 = _interopRequireDefault(_todo);

var _keydown = __webpack_require__(56);

var _keydown2 = _interopRequireDefault(_keydown);

var _delete = __webpack_require__(57);

var _delete2 = _interopRequireDefault(_delete);

var _justifyRight = __webpack_require__(58);

var _justifyRight2 = _interopRequireDefault(_justifyRight);

var _justifyLeft = __webpack_require__(59);

var _justifyLeft2 = _interopRequireDefault(_justifyLeft);

var _justifyCenter = __webpack_require__(60);

var _justifyCenter2 = _interopRequireDefault(_justifyCenter);

var _util = __webpack_require__(6);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commands = {
  /*
   * add a style attribute in range(have bug)
   * @param {obj} arg include
   *      key: style name
   *      value: style value
   **/
  addStyle: function addStyle(rh, arg) {
    function doAdd(node) {
      Object.keys(arg).forEach(function (styleName) {
        node.style[styleName] = arg[styleName];
      });
    }

    if (!(0, _util.isObj)(arg)) return;
    var textNodes = rh.getAllTextNodesInRange();
    if (!textNodes.length) {
      if (rh.range.collapsed) {
        var node = rh.range.commonAncestorContainer;
        if (node.nodeType === Node.ELEMENT_NODE) {
          doAdd(node);
          return;
        }
      }
    }
    if (rh.range.collapsed && textNodes.length === 1) {
      var _node = textNodes[0].parentNode;
      if (_node) {
        if (_node === rh.editZone()) {
          var newRow = rh.newRow({ tag: 'p' });
          newRow.innerText = textNodes[0].nodeValue;
          _node.replaceChild(newRow, textNodes[0]);
          doAdd(newRow);
          return;
        }
        doAdd(_node);
        return;
      }
    }
    if (textNodes.length === 1 && textNodes[0] === rh.range.startContainer && textNodes[0] === rh.range.endContainer) {
      var textNode = textNodes[0];
      if (rh.range.startOffset === 0 && rh.range.endOffset === textNode.textContent.length) {
        if (textNode.parentNode.childNodes.length === 1 && rh.isInlineElement(textNode.parentNode)) {
          doAdd(textNode.parentNode);
          return;
        }
        var _span = document.createElement('span');
        doAdd(_span);
        textNode.parentNode.insertBefore(_span, textNode);
        _span.appendChild(textNode);
        return;
      }
      var span = document.createElement('span');
      span.innerText = textNode.textContent.substring(rh.range.startOffset, rh.range.endOffset);
      doAdd(span);
      var frontPart = document.createTextNode(textNode.textContent.substring(0, rh.range.startOffset));
      textNode.parentNode.insertBefore(frontPart, textNode);
      textNode.parentNode.insertBefore(span, textNode);
      textNode.textContent = textNode.textContent.substring(rh.range.endOffset);
      rh.range.setStart(span, 0);
      rh.range.setEnd(span, 1);
      return;
    }

    textNodes.forEach(function (textNode) {
      if (textNode === rh.range.startContainer) {
        if (rh.range.startOffset === 0) {
          if (textNode.parentNode.childNodes.length === 1 && rh.isInlineElement(textNode.parentNode)) {
            doAdd(textNode.parentNode);
          } else {
            var _span3 = document.createElement('span');
            doAdd(_span3);
            textNode.parentNode.insertBefore(_span3, textNode);
            _span3.appendChild(textNode);
          }
          return;
        }
        var _span2 = document.createElement('span');
        textNode.textContent = textNode.textContent.substring(0, rh.range.startOffset);
        doAdd(_span2);
        textNode.parentNode.insertBefore(_span2, textNode);
        rh.range.setStart(textNode, 0);
        return;
      }
      if (textNode === rh.range.endContainer) {
        if (rh.range.endOffset === textNode.textContent.length) {
          if (textNode.parentNode.childNodes.length === 1 && rh.isInlineElement(textNode.parentNode)) {
            doAdd(textNode.parentNode);
          } else {
            var _span5 = document.createElement('span');
            doAdd(_span5);
            textNode.parentNode.insertBefore(_span5, textNode);
            _span5.appendChild(textNode);
          }
          return;
        }
        var _span4 = document.createElement('span');
        textNode.textContent = textNode.textContent.substring(rh.range.endOffset);
        doAdd(_span4);
        textNode.parentNode.insertBefore(_span4, textNode);
        _span4.appendChild(textNode);
        rh.range.setStart(textNode, textNode.textContent.length);
        return;
      }
      if (textNode.parentNode.childNodes.length === 1 && rh.isInlineElement(textNode.parentNode)) {
        doAdd(textNode.parentNode);
        return;
      }

      var span = document.createElement('span');
      doAdd(span);
      textNode.parentNode.insertBefore(span, textNode);
      span.appendChild(textNode);
    });
    return;
  },
  'formatBlock': function formatBlock(rh, arg) {
    if (document.execCommand('formatBlock', false, arg)) {
      return;
    }
    // hack
    var element = document.createElement(arg);
    rh.range.surroundContents(element);
    return;
  },
  'lineHeight': function lineHeight(rh, arg) {
    var textNodes = rh.getAllTextNodesInRange();
    textNodes.forEach(function (textNode) {
      var parentBlock = rh.getParentBlockNode(textNode);
      if (parentBlock) {
        parentBlock.style.lineHeight = arg;
      }
    });
    return;
  },
  'insertHTML': function insertHTML(rh, arg) {
    if (document.execCommand('insertHTML', false, arg)) {
      return;
    }
    commands['forceInsertHTML'](rh, arg);
  },

  /*
   * insertHTML would insert DOM as row's child
   * forceInsertHTML would insert DOM as anchorNode of range 
   **/
  'forceInsertHTML': function forceInsertHTML(rh, arg) {
    var v = rh.newRow();
    var s = rh.getSelection();
    v.innerHTML = arg;
    if (v.hasChildNodes()) {
      for (var i = 0; i < v.childNodes.length; i++) {
        var curNode = v.childNodes[i];
        rh.range.deleteContents();
        rh.range.insertNode(curNode);
        s.collapse(curNode, 1);
      }
    }
    return;
  },
  'indent': function indent(rh, arg) {
    var nodeList = [];
    if (rh.range.collapsed) {
      weighting(rh.range.commonAncestorContainer);
    } else {
      var texts = rh.getAllTextNodesInRange();
      texts.forEach(function (text) {
        weighting(text);
      });
    }

    nodeList.forEach(function (node) {
      // cancel todo indent
      if (node.getAttribute('data-editor-todo')) {
        return;
      }
      doIndent(node.nodeName, node);
    });

    function weighting(text) {
      var node = rh.findSpecialAncestor(text, 'li') || rh.findSpecialAncestor(text, _constantConfig2.default.ROW_TAG);
      if (node && !nodeList.includes(node)) {
        nodeList.push(node);
      }
    }

    function doIndent(type, node) {
      switch (type) {
        case 'LI':
          var curLevel = rh.howManyNestAncestorSameTag(node, 'UL') || rh.howManyNestAncestorSameTag(node, 'OL');
          if (curLevel >= _constantConfig2.default.MAX_INDENT_LEVEL) break;
          document.execCommand('indent', false, arg);
          break;
        case _constantConfig2.default.ROW_TAG_UPPERCASE:
          var curPercent = node.style[_constantConfig2.default.INDENT_STYLE_NAME] || '0';
          curPercent = Number(curPercent.replace('%', ''));
          node.style[_constantConfig2.default.INDENT_STYLE_NAME] = '';
          node.style[_constantConfig2.default.OUTDENT_STYLE_NAME] = '';
          if (curPercent / _constantConfig2.default.INDENT_WIDTH_PERCENT >= _constantConfig2.default.MAX_INDENT_LEVEL) {
            node.style[_constantConfig2.default.INDENT_STYLE_NAME] = curPercent + '%';
            return;
          }
          node.style[_constantConfig2.default.INDENT_STYLE_NAME] = curPercent + _constantConfig2.default.INDENT_WIDTH_PERCENT + '%';
      }
    }
  },
  'outdent': function outdent(rh, arg) {
    var nodeList = [];
    if (rh.range.collapsed) {
      weighting(rh.range.commonAncestorContainer);
    } else {
      var texts = rh.getAllTextNodesInRange();
      texts.forEach(function (text) {
        weighting(text);
      });
    }

    var outdentResult = void 0;
    nodeList.forEach(function (node) {
      outdentResult = doOutdent(node.nodeName, node);
    });
    return outdentResult;

    function weighting(text) {
      var node = rh.findSpecialAncestor(text, 'li') || rh.findSpecialAncestor(text, _constantConfig2.default.ROW_TAG);
      if (node && !nodeList.includes(node)) {
        nodeList.push(node);
      }
    }

    function doOutdent(type, node) {
      switch (type) {
        case 'LI':
          document.execCommand('outdent', false, arg);
          break;
        case _constantConfig2.default.ROW_TAG_UPPERCASE:
          var curPercent = node.style[_constantConfig2.default.INDENT_STYLE_NAME] || '0';
          curPercent = Number(curPercent.replace('%', ''));
          if (curPercent === 0) return 'NO_NEED_OUTDENT';
          node.style[_constantConfig2.default.INDENT_STYLE_NAME] = '';
          node.style[_constantConfig2.default.OUTDENT_STYLE_NAME] = '';
          var targetIndent = curPercent - _constantConfig2.default.INDENT_WIDTH_PERCENT;
          if (targetIndent < 0) {
            node.style[_constantConfig2.default.INDENT_STYLE_NAME] = '';
          } else {
            node.style[_constantConfig2.default.INDENT_STYLE_NAME] = targetIndent + '%';
          }
      }
    }
  },
  'insertUnorderedList': function insertUnorderedList(rh, arg) {
    // do not insert ul into a row
    document.execCommand('insertUnorderedList', false, null);
    var startNode = rh.getSelection().anchorNode;
    var row = rh.getRow(startNode);
    var s = rh.getSelection();

    // startNode is edit zone
    if (!row) return;

    row = rh.createWrapperForInline(row, _constantConfig2.default.ROW_TAG);

    if (row) {
      // let ul be a row
      var maybeIsUl = row.firstElementChild;
      if (maybeIsUl && maybeIsUl.nodeName === 'UL' && row.nodeName !== 'UL') {
        row.parentNode.replaceChild(maybeIsUl, row);
        row = maybeIsUl;
      }

      // remove br
      if (row.nextSibling && row.nextSibling.nodeName === 'BR') {
        row.nextSibling.parentNode.removeChild(row.nextSibling);
      }

      // special treatment for ul>li, to let module inspect run
      // if ul and ol is bind into a module's tab, this should be change
      if (s.isCollapsed && !rh.editor.modulesMap['ul'].moduleInspectResult) {
        commands['insertHTML'](rh, '&#8203;');
      }
      return;
    } else {
      var _startNode = rh.getSelection().anchorNode;
      if (_startNode === rh.editZone()) {
        row = rh.newRow({ br: true });
        commands['insertHTML'](rh, row.outerHTML);
      }
    }
  },
  'insertOrderedList': function insertOrderedList(rh, arg) {
    // do not insert ul into a row
    document.execCommand('insertOrderedList', false, null);
    var s = rh.getSelection();
    var startNode = rh.getSelection().anchorNode;
    var row = rh.getRow(startNode);

    // startNode is edit zone
    if (!row) return;

    row = rh.createWrapperForInline(row, _constantConfig2.default.ROW_TAG);

    if (row) {
      // let ul be a row
      var maybeIsUl = row.firstElementChild;
      if (maybeIsUl && maybeIsUl.nodeName === 'OL' && row.nodeName !== 'OL') {
        row.parentNode.replaceChild(maybeIsUl, row);
        row = maybeIsUl;
      }

      // remove br
      if (row.nextSibling && row.nextSibling.nodeName === 'BR') {
        row.nextSibling.parentNode.removeChild(row.nextSibling);
      }

      // special treatment for ul>li, to let module inspect run
      // if ul and ol is bind into a module's tab, this should be change
      if (s.isCollapsed && !rh.editor.modulesMap['ol'].moduleInspectResult) {
        commands['insertHTML'](rh, '&#8203;');
      }
      return;
    } else {
      var _startNode2 = rh.getSelection().anchorNode;
      if (_startNode2 === rh.editZone()) {
        row = rh.newRow({ br: true });
        commands['insertHTML'](rh, row.outerHTML);
      }
    }
  }
};
commands.insertImage = _insertImage2.default;
commands.fontSize = _fontSize2.default;
commands.delete = _delete2.default;
commands.paste = _paste2.default;
commands.enter = _enter2.default;
commands.keydown = _keydown2.default;
commands.underline = _underline2.default;
commands.strikeThrough = _strikeThrough2.default;
commands.bold = _bold2.default;
commands.italic = _italic2.default;
commands.justifyLeft = _justifyLeft2.default;
commands.justifyCenter = _justifyCenter2.default;
commands.justifyRight = _justifyRight2.default;
Object.assign(commands, _quote2.default, _todo2.default);

exports.default = commands;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  MAX_INDENT_LEVEL: 10,
  INDENT_WIDTH_PERCENT: 8,
  INDENT_STYLE_NAME: 'marginLeft',
  OUTDENT_STYLE_NAME: 'marginRight',
  ROW_TAG: 'p',
  ROW_TAG_UPPERCASE: 'P'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".font-tab {\n  position: relative;\n  font-size: 10px;\n  height: 18px;\n  line-height: 18px;\n  width: 52px;\n  text-align: center;\n  padding: 4px 4px 4px 6px;\n  text-align: left;\n}\n.font-tab:hover {\n  background: #fff;\n  padding: 3px 3px 3px 5px;\n  border: 1px #bcbcbc solid;\n}\n.font-tab.forbidden {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n.font-tab .icon {\n  float: right;\n  padding: 3px;\n}\n.font-tab .dropdown {\n  z-index: 1;\n  position: absolute;\n  background: #fff;\n  left: -1px;\n  top: 25px;\n  border: 1px #bcbcbc solid;\n  border-top: none;\n  overflow: hidden;\n}\n.font-tab .dropdown li {\n  box-sizing: border-box;\n  padding-left: 4px;\n  font-size: 12px;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n}\n.font-tab .dropdown li:hover {\n  background: #f0f0f0;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".fore-color-tab {\n  position: relative;\n  font-size: 10px;\n  height: 18px;\n  line-height: 18px;\n  width: 14px;\n  text-align: center;\n  padding: 4px 4px 4px 6px;\n  text-align: left;\n}\n.fore-color-tab:hover {\n  background: #fff;\n  padding: 3px 3px 3px 5px;\n  border: 1px #bcbcbc solid;\n}\n.fore-color-tab.forbidden {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n.fore-color-tab .icon {\n  position: relative;\n  top: -3px;\n}\n.fore-color-tab .choosed {\n  position: relative;\n  left: -0.6px;\n  bottom: 3px;\n  width: 12px;\n  height: 4px;\n}\n.fore-color-tab .dropdown {\n  padding: 5px;\n  width: 180px;\n  z-index: 1;\n  position: absolute;\n  background: #fff;\n  left: -1px;\n  top: 25px;\n  border: 1px #bcbcbc solid;\n  overflow: hidden;\n}\n.fore-color-tab .dropdown li {\n  margin: 2px;\n  float: left;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * shadow clone
 * @param source    source object
 * @param ext       extended object
 */
var mixin = exports.mixin = function mixin() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object.keys(ext).forEach(function (k) {
        // for data function
        if (k === 'data') {
            var dataSrc = source[k];
            var dataDesc = ext[k];
            if (typeof dataDesc === 'function') {
                if (typeof dataSrc !== 'function') {
                    source[k] = dataDesc;
                } else {
                    source[k] = function () {
                        return mixin(dataSrc(), dataDesc());
                    };
                }
            }
        } else {
            source[k] = ext[k];
        }
    });
    return source;
};

var isObj = exports.isObj = function isObj(data) {
    return Object.prototype.toString.call(data).slice(-7, -1) === 'Object';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\nbody {\n  line-height: 1;\n}\n:focus {\n  outline: 1;\n}\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\nnav ul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\na {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\ndel {\n  text-decoration: line-through;\n}\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\n.my-vue-editor {\n  display: block;\n  border: 1px solid #d1d1d1;\n  padding: 0;\n}\n.my-vue-editor img {\n  max-width: 98%;\n}\n.my-vue-editor .toolbar {\n  height: auto;\n  border-bottom: 1px solid #d1d1d1;\n  background: #f8f8f8;\n  padding: 6px 8px;\n  white-space: normal;\n}\n.my-vue-editor .toolbar .tabs:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.my-vue-editor .toolbar .tabs .tab {\n  margin: 0 2px;\n  float: left;\n}\n.my-vue-editor .toolbar .tabs .tab .icon {\n  vertical-align: sub;\n}\n.my-vue-editor .toolbar .tabs .btn {\n  display: inline-block;\n  list-style: none;\n  height: 18px;\n  line-height: 18px;\n  padding: 4px 6px;\n  border: 0;\n  position: relative;\n  font: normal normal normal 12px Arial, Helvetica, Tahoma, Verdana, Sans-Serif;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.my-vue-editor .toolbar .tabs .btn:hover {\n  padding: 3px 5px;\n  background: #f0f0f0;\n  border: 1px #bcbcbc solid;\n}\n.my-vue-editor .toolbar .tabs .btn.highLight {\n  padding: 3px 5px;\n  background: #e5e5e5;\n  border: 1px #bcbcbc solid;\n}\n.my-vue-editor .toolbar .tabs .btn.forbidden {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n.my-vue-editor .content {\n  box-sizing: border-box;\n  width: 100%;\n  clear: both;\n  outline: none;\n  padding: 20px;\n  font-size: 16px;\n  line-height: 24px;\n  word-wrap: break-word;\n}\n.my-vue-editor .content blockquote {\n  min-width: 38px;\n}\n.my-vue-editor .content [data-editor-quote] {\n  margin: 14px 0 14px 35px;\n}\n.my-vue-editor .content [data-editor-quote] div:first-child {\n  margin-top: -21px;\n}\n.my-vue-editor .content [data-editor-quote] div {\n  margin-left: 2px;\n  outline: none;\n  color: #737373;\n  font-size: 14px;\n}\n.my-vue-editor .content [data-editor-quote]::before {\n  position: relative;\n  top: 2px;\n  left: 0;\n  margin: 0px 4px 0 -24px;\n  color: #b7b7b7;\n  font-size: 20px;\n  content: \"\\F10E\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  transform: rotateY(180deg);\n}\n.my-vue-editor .content ul ul {\n  margin-left: 10%;\n}\n.my-vue-editor .content li {\n  margin-left: 5.5%;\n}\n.my-vue-editor .content [data-editor-todo] {\n  display: inline-block;\n  width: 90%;\n}\n.my-vue-editor .content [data-editor-todo] label {\n  cursor: pointer;\n  position: relative;\n  top: 3.5px;\n  left: 2.5px;\n  font-size: 16px;\n  color: #cdc9c5;\n}\n.my-vue-editor .content [data-editor-todo] input[type=text] {\n  border: none;\n  outline: none;\n  width: 90%;\n  font-size: 14px;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(6),n(7),e.exports=n(8)},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(a,this),r(s,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void f(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function a(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(a,this),r(s,this))}this._state=!0,this._value=e,u.call(this)}catch(n){s.call(this,n)}}function s(e){this._state=!1,this._value=e,u.call(this)}function u(){for(var e=0,t=this._deferreds.length;t>e;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}var f="function"==typeof t&&t||function(e){setTimeout(e,1)},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){o.call(n,new c(e,t,r,i))})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._setImmediateFn=function(e){f=e},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t}var o=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,u={},c=0;t.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=c++,r=arguments.length<2?!1:s.call(arguments,1);return u[n]=!0,o(function(){u[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){c=!1,a.length?u=a.concat(u):l=-1,u.length&&r()}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;)a&&a[l].run();l=-1,t=u.length}a=null,c=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function o(){}var a,s=e.exports={},u=[],c=!1,l=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new i(e,t)),1!==u.length||c||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t){function n(){var e=~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome");return e&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}var r=function(){try{return new Blob,!0}catch(e){return!1}}()?window.Blob:function(e,t){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return e.forEach(function(e){n.append(e)}),n.getBlob(t?t.type:void 0)},i=function(){function e(){var e=this,n=[],i=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),o=XMLHttpRequest.prototype.send;this.getParts=function(){return n.toString()},this.append=function(e,t,r){n.push("--"+i+'\r\nContent-Disposition: form-data; name="'+e+'"'),t instanceof Blob?(n.push('; filename="'+(r||"blob")+'"\r\nContent-Type: '+t.type+"\r\n\r\n"),n.push(t)):n.push("\r\n\r\n"+t),n.push("\r\n")},t++,XMLHttpRequest.prototype.send=function(a){var s,u,c=this;a===e?(n.push("--"+i+"--\r\n"),u=new r(n),s=new FileReader,s.onload=function(){o.call(c,s.result)},s.onerror=function(e){throw e},s.readAsArrayBuffer(u),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),t--,0==t&&(XMLHttpRequest.prototype.send=o)):o.call(this,a)}}var t=0;return e.prototype=Object.create(FormData.prototype),e}();e.exports={Blob:r,FormData:n()?i:FormData}},function(e,t,n){var r,i;(function(){function n(e){return!!e.exifdata}function o(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;r>a;a++)o[a]=n.charCodeAt(a);return i}function a(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function s(e,t){function n(n){var r=u(n),i=c(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=o(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},a(e.src,function(e){i.readAsArrayBuffer(e)})}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?n(s.response):t(new Error("Could not load image")),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){p&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function u(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;i>r;){if(255!=t.getUint8(r))return p&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),p&&console.log(n),225==n)return p&&console.log("Found 0xFFE1 marker"),g(t,r+4,t.getUint16(r+2)-2);r+=2+t.getUint16(r+2)}}function c(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>n;){if(i(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var a=n+8+o,s=t.getUint16(n+6+o);return l(e,a,s)}n++}}function l(e,t,n){for(var r,i,o,a,s,u=new DataView(e),c={},l=t;t+n>l;)28===u.getUint8(l)&&2===u.getUint8(l+1)&&(a=u.getUint8(l+2),a in S&&(o=u.getInt16(l+3),s=o+5,i=S[a],r=h(u,l+5,o),c.hasOwnProperty(i)?c[i]instanceof Array?c[i].push(r):c[i]=[c[i],r]:c[i]=r)),l++;return c}function f(e,t,n,r,i){var o,a,s,u=e.getUint16(n,!i),c={};for(s=0;u>s;s++)o=n+12*s+2,a=r[e.getUint16(o,!i)],!a&&p&&console.log("Unknown tag: "+e.getUint16(o,!i)),c[a]=d(e,o,t,n,i);return c}function d(e,t,n,r,i){var o,a,s,u,c,l,f=e.getUint16(t+2,!i),d=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(f){case 1:case 7:if(1==d)return e.getUint8(t+8,!i);for(o=d>4?g:t+8,a=[],u=0;d>u;u++)a[u]=e.getUint8(o+u);return a;case 2:return o=d>4?g:t+8,h(e,o,d-1);case 3:if(1==d)return e.getUint16(t+8,!i);for(o=d>2?g:t+8,a=[],u=0;d>u;u++)a[u]=e.getUint16(o+2*u,!i);return a;case 4:if(1==d)return e.getUint32(t+8,!i);for(a=[],u=0;d>u;u++)a[u]=e.getUint32(g+4*u,!i);return a;case 5:if(1==d)return c=e.getUint32(g,!i),l=e.getUint32(g+4,!i),s=new Number(c/l),s.numerator=c,s.denominator=l,s;for(a=[],u=0;d>u;u++)c=e.getUint32(g+8*u,!i),l=e.getUint32(g+4+8*u,!i),a[u]=new Number(c/l),a[u].numerator=c,a[u].denominator=l;return a;case 9:if(1==d)return e.getInt32(t+8,!i);for(a=[],u=0;d>u;u++)a[u]=e.getInt32(g+4*u,!i);return a;case 10:if(1==d)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(a=[],u=0;d>u;u++)a[u]=e.getInt32(g+8*u,!i)/e.getInt32(g+4+8*u,!i);return a}}function h(e,t,n){var r,i="";for(r=t;t+n>r;r++)i+=String.fromCharCode(e.getUint8(r));return i}function g(e,t){if("Exif"!=h(e,t,4))return p&&console.log("Not valid EXIF data! "+h(e,t,4)),!1;var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return p&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return p&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var u=e.getUint32(s+4,!n);if(8>u)return p&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if(r=f(e,s,s+u,v,n),r.ExifIFDPointer){o=f(e,s,s+r.ExifIFDPointer,w,n);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=b[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=b.Components[o[i][0]]+b.Components[o[i][1]]+b.Components[o[i][2]]+b.Components[o[i][3]]}r[i]=o[i]}}if(r.GPSInfoIFDPointer){a=f(e,s,s+r.GPSInfoIFDPointer,y,n);for(i in a){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3]}r[i]=a[i]}}return r}var p=!1,m=function(e){return e instanceof m?e:this instanceof m?void(this.EXIFwrapped=e):new m(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=m),t.EXIF=m;var w=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},S={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(e,t){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(n(e)?t&&t.call(e):s(e,t),!0)},m.getTag=function(e,t){return n(e)?e.exifdata[t]:void 0},m.getAllTags=function(e){if(!n(e))return{};var t,r=e.exifdata,i={};for(t in r)r.hasOwnProperty(t)&&(i[t]=r[t]);return i},m.pretty=function(e){if(!n(e))return"";var t,r=e.exifdata,i="";for(t in r)r.hasOwnProperty(t)&&(i+="object"==typeof r[t]?r[t]instanceof Number?t+" : "+r[t]+" ["+r[t].numerator+"/"+r[t].denominator+"]\r\n":t+" : ["+r[t].length+" values]\r\n":t+" : "+r[t]+"\r\n");return i},m.readFromBinaryFile=function(e){return u(e)},r=[],i=function(){return m}.apply(t,r),!(void 0!==i&&(e.exports=i))}).call(this)},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return!1}function o(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var o=i.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}var l=u/n;return 0===l?1:l}function a(e,t,n){var r=document.createElement("canvas");return s(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function s(e,t,r,i){var a=e.naturalWidth,s=e.naturalHeight,c=r.width,l=r.height,f=t.getContext("2d");f.save(),u(t,f,c,l,r.orientation);var d=n(e);d&&(a/=2,s/=2);var h=1024,g=document.createElement("canvas");g.width=g.height=h;for(var p=g.getContext("2d"),m=i?o(e,a,s):1,w=Math.ceil(h*c/a),v=Math.ceil(h*l/s/m),y=0,b=0;s>y;){for(var S=0,I=0;a>S;)p.clearRect(0,0,h,h),p.drawImage(e,-S,-y),f.drawImage(g,0,0,h,h,I,b,w,v),S+=h,I+=w;y+=h,b+=v}f.restore(),g=p=null}function u(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-n,0)}}function c(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n)throw Error("No createObjectURL function found to create blob url");t.src=n.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}c.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n)})}t=t||{};var i=this.srcImage,o=i.src,u=o.length,c=i.naturalWidth,l=i.naturalHeight,f=t.width,d=t.height,h=t.maxWidth,g=t.maxHeight,p=this.blob&&"image/jpeg"===this.blob.type||0===o.indexOf("data:image/jpeg")||o.indexOf(".jpg")===u-4||o.indexOf(".jpeg")===u-5;f&&!d?d=l*f/c<<0:d&&!f?f=c*d/l<<0:(f=c,d=l),h&&f>h&&(f=h,d=l*f/c<<0),g&&d>g&&(d=g,f=c*d/l<<0);var m={width:f,height:d};for(var w in t)m[w]=t[w];var v=e.tagName.toLowerCase();"img"===v?e.src=a(this.srcImage,m,p):"canvas"===v&&s(this.srcImage,e,m,p),"function"==typeof this.onrender&&this.onrender(e),n&&n()},r=[],i=function(){return c}.apply(t,r),!(void 0!==i&&(e.exports=i))}()},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=F((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),D[N[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var a=F((i[o]*e+50)/100);1>a?a=1:a>255&&(a=255),x[N[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],u=0,c=0;8>c;c++)for(var l=0;8>l;l++)U[u]=1/(D[N[u]]*s[c]*s[l]*8),C[u]=1/(x[N[u]]*s[c]*s[l]*8),u++}function n(e,t){for(var n=0,r=0,i=new Array,o=1;16>=o;o++){for(var a=1;a<=e[o];a++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=o,r++,n++;n*=2}return i}function r(){y=n(W,H),b=n(V,X),S=n(z,q),I=n(Q,Y)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)A[32767+r]=n,T[32767+r]=[],T[32767+r][1]=n,T[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)A[32767+i]=n,T[32767+i]=[],T[32767+i][1]=n,T[32767+i][0]=t-1+i;e<<=1,t<<=1}}function o(){for(var e=0;256>e;e++)k[e]=19595*e,k[e+256>>0]=38470*e,k[e+512>>0]=7471*e+32768,k[e+768>>0]=-11059*e,k[e+1024>>0]=-21709*e,k[e+1280>>0]=32768*e+8421375,k[e+1536>>0]=-27439*e,k[e+1792>>0]=-5329*e}function a(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(G|=1<<O),n--,O--,0>O&&(255==G?(s(255),s(0)):s(G),O=7,G=0)}function s(e){M.push(j[e])}function u(e){s(e>>8&255),s(255&e)}function c(e,t){var n,r,i,o,a,s,u,c,l,f=0;const d=8,h=64;for(l=0;d>l;++l){n=e[f],r=e[f+1],i=e[f+2],o=e[f+3],a=e[f+4],s=e[f+5],u=e[f+6],c=e[f+7];var g=n+c,p=n-c,m=r+u,w=r-u,v=i+s,y=i-s,b=o+a,S=o-a,I=g+b,P=g-b,F=m+v,D=m-v;e[f]=I+F,e[f+4]=I-F;var x=.707106781*(D+P);e[f+2]=P+x,e[f+6]=P-x,I=S+y,F=y+w,D=w+p;var U=.382683433*(I-D),C=.5411961*I+U,T=1.306562965*D+U,A=.707106781*F,R=p+A,M=p-A;e[f+5]=M+C,e[f+3]=M-C,e[f+1]=R+T,e[f+7]=R-T,f+=8}for(f=0,l=0;d>l;++l){n=e[f],r=e[f+8],i=e[f+16],o=e[f+24],a=e[f+32],s=e[f+40],u=e[f+48],c=e[f+56];var G=n+c,O=n-c,_=r+u,B=r-u,E=i+s,j=i-s,k=o+a,N=o-a,W=G+k,H=G-k,z=_+E,q=_-E;e[f]=W+z,e[f+32]=W-z;var V=.707106781*(q+H);e[f+16]=H+V,e[f+48]=H-V,W=N+j,z=j+B,q=B+O;var X=.382683433*(W-q),Q=.5411961*W+X,Y=1.306562965*q+X,K=.707106781*z,J=O+K,Z=O-K;e[f+40]=Z+Q,e[f+24]=Z-Q,e[f+8]=J+Y,e[f+56]=J-Y,f++}var $;for(l=0;h>l;++l)$=e[l]*t[l],L[l]=$>0?$+.5|0:$-.5|0;return L}function l(){u(65504),u(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),u(1),u(1),s(0),s(0)}function f(e,t){u(65472),u(17),s(8),u(t),u(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function d(){u(65499),u(132),s(0);for(var e=0;64>e;e++)s(D[e]);s(1);for(var t=0;64>t;t++)s(x[t])}function h(){u(65476),u(418),s(0);for(var e=0;16>e;e++)s(W[e+1]);for(var t=0;11>=t;t++)s(H[t]);s(16);for(var n=0;16>n;n++)s(z[n+1]);for(var r=0;161>=r;r++)s(q[r]);s(1);for(var i=0;16>i;i++)s(V[i+1]);for(var o=0;11>=o;o++)s(X[o]);s(17);for(var a=0;16>a;a++)s(Q[a+1]);for(var c=0;161>=c;c++)s(Y[c])}function g(){u(65498),u(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function p(e,t,n,r,i){var o,s=i[0],u=i[240];const l=16,f=63,d=64;for(var h=c(e,t),g=0;d>g;++g)R[N[g]]=h[g];var p=R[0]-n;n=R[0],0==p?a(r[0]):(o=32767+p,a(r[A[o]]),a(T[o]));for(var m=63;m>0&&0==R[m];m--);if(0==m)return a(s),n;for(var w,v=1;m>=v;){for(var y=v;0==R[v]&&m>=v;++v);var b=v-y;if(b>=l){w=b>>4;for(var S=1;w>=S;++S)a(u);b=15&b}o=32767+R[v],a(i[(b<<4)+A[o]]),a(T[o]),v++}return m!=f&&a(s),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++)j[t]=e(t)}function w(e){if(0>=e&&(e=1),e>100&&(e=100),P!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),P=e}}function v(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),o(),w(e);(new Date).getTime()-t}var y,b,S,I,P,F=(Math.round,Math.floor),D=new Array(64),x=new Array(64),U=new Array(64),C=new Array(64),T=new Array(65535),A=new Array(65535),L=new Array(64),R=new Array(64),M=[],G=0,O=7,_=new Array(64),B=new Array(64),E=new Array(64),j=new Array(256),k=new Array(2048),N=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],q=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],V=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&w(t),M=new Array,G=0,O=7,u(65496),l(),d(),f(e.width,e.height),h(),g();var i=0,o=0,s=0;G=0,O=7,this.encode.displayName="_encode_";for(var c,m,v,P,F,D,x,T,A,L=e.data,R=e.width,j=e.height,N=4*R,W=0;j>W;){for(c=0;N>c;){for(F=N*W+c,D=F,x=-1,T=0,A=0;64>A;A++)T=A>>3,x=4*(7&A),D=F+T*N+x,W+T>=j&&(D-=N*(W+1+T-j)),c+x>=N&&(D-=c+x-N+4),m=L[D++],v=L[D++],P=L[D++],_[A]=(k[m]+k[v+256>>0]+k[P+512>>0]>>16)-128,B[A]=(k[m+768>>0]+k[v+1024>>0]+k[P+1280>>0]>>16)-128,E[A]=(k[m+1280>>0]+k[v+1536>>0]+k[P+1792>>0]>>16)-128;i=p(_,U,i,y,S),o=p(B,C,o,b,I),s=p(E,C,s,b,I),c+=32}W+=8}if(O>=0){var H=[];H[1]=O+1,H[0]=(1<<O+1)-1,a(H)}if(u(65497),n){for(var z=M.length,q=new Uint8Array(z),V=0;z>V;V++)q[V]=M[V].charCodeAt();M=[];(new Date).getTime()-r;return q}var X="data:image/jpeg;base64,"+btoa(M.join(""));M=[];(new Date).getTime()-r;return X},v()}e.exports=n},function(e,t,n){function r(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");t=t||{},n.defaults={width:null,height:null,fieldName:"file",quality:.7},n.file=e;for(var r in t)t.hasOwnProperty(r)&&(n.defaults[r]=t[r]);return this.init()}function i(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return-1!==t.src.indexOf(e)})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}function o(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new s.Blob([r.buffer],{type:n})}n.p=i("lrz")+"/",window.URL=window.URL||window.webkitURL;var a=n(1),s=n(4),u=n(5),c=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return{oldIOS:t?+t.pop()<8:!1,oldAndroid:n?+n.pop().substr(0,3)<4.5:!1,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n="string"==typeof t,r=/^data:/.test(t),i=new Image,u=document.createElement("canvas"),c=n?t:URL.createObjectURL(t);if(e.img=i,e.blob=c,e.canvas=u,n?e.fileName=r?"base64.jpg":t.split("/").pop():e.fileName=t.name,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new a(function(n,a){i.onerror=function(){var e=new Error("加载图片文件失败");throw a(e),e},i.onload=function(){e._getBase64().then(function(e){if(e.length<10){var t=new Error("生成base64失败");throw a(t),t}return e}).then(function(r){var i=null;"object"==typeof e.file&&r.length>e.file.size?(i=new FormData,t=e.file):(i=new s.FormData,t=o(r)),i.append(e.defaults.fieldName,t,e.fileName.replace(/\..+/g,".jpg")),n({formData:i,fileLen:+t.size,base64:r,base64Len:r.length,origin:e.file,file:t});for(var a in e)e.hasOwnProperty(a)&&(e[a]=null);URL.revokeObjectURL(e.blob)})},!r&&(i.crossOrigin="*"),i.src=c})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.file,r=e.canvas;return new a(function(i){try{u.getData("object"==typeof n?n:t,function(){e.orientation=u.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height),c.oldIOS?e._createBase64ForOldIOS().then(i):e._createBase64().then(i)})}catch(o){throw new Error(o)}})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.defaults,o=e.orientation;return new a(function(e){!function(){var a=[n(6)];(function(n){var a=new n(t);"5678".indexOf(o)>-1?a.render(r,{width:r.height,height:r.width,orientation:o}):a.render(r,{width:r.width,height:r.height,orientation:o}),e(r.toDataURL("image/jpeg",i.quality))}).apply(null,a)}()})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,o=e.ctx,s=e.defaults,u=e.orientation;switch(u){case 3:o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(r,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;default:o.drawImage(r,0,0,t.width,t.height)}return new a(function(e){c.oldAndroid||c.mQQBrowser||!navigator.userAgent?!function(){var t=[n(7)];(function(t){var n=new t,r=o.getImageData(0,0,i.width,i.height);e(n.encode(r,100*s.quality))}).apply(null,t)}():e(i.toDataURL("image/jpeg",s.quality))})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,o=e.orientation,a={width:t.width,height:t.height};if("5678".indexOf(o)>-1&&(a.width=t.height,a.height=t.width),a.width<r||a.height<i)return a;var s=a.width/a.height;for(r&&i?s>=r/i?a.width>r&&(a.width=r,a.height=Math.ceil(r/s)):a.height>i&&(a.height=i,a.width=Math.ceil(i*s)):r?r<a.width&&(a.width=r,a.height=Math.ceil(r/s)):i&&i<a.height&&(a.width=Math.ceil(i*s),a.height=i);a.width>=3264||a.height>=2448;)a.width*=.8,a.height*=.8;return a},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.9.40",
e.exports=window.lrz}])});
//# sourceMappingURL=lrz.all.bundle.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(45);

var _instance2 = _interopRequireDefault(_instance);

var _handleMethods = __webpack_require__(61);

var _handleMethods2 = _interopRequireDefault(_handleMethods);

var _assistMethods = __webpack_require__(10);

var _assistMethods2 = _interopRequireDefault(_assistMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_instance2.default.prototype, _handleMethods2.default, _assistMethods2.default);
exports.default = _instance2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {
  /*
   * func create a new row element
   * @param {obj} data
   *          tag {str}
   *          contenteditable {boolean} default: true
   *          id {boolean} whether need a id default: false
   *          br {boolean} whether need a br element after current row element default: false
   * @return  {node}
   **/
  newRow: function newRow() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var row = document.createElement(data.tag || _constantConfig2.default.ROW_TAG);
    if (data.id) {
      row.dataset.editorRow = methods.createRandomId('row');
    }
    if (data.br) {
      var br = document.createElement('br');
      row.appendChild(br);
    }
    row.setAttribute('contenteditable', data.contenteditable !== false);
    return row;
  },

  // get selection
  getSelection: function getSelection() {
    return window.getSelection ? window.getSelection() : document.getSelection();
  },

  /*
   * func insert a element after target element
   * @param newElement {node}
   * @param targetElement {node}
   **/
  insertAfter: function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  },

  /*
   * func create a random id
   * @param preffix {str} id's preffix
   * @return id
   **/
  createRandomId: function createRandomId(preffix) {
    return (preffix || 'id') + '-' + (Math.random() * 1000 + new Date().getTime());
  },

  /*
   * return edit zone element
   **/
  editZone: function editZone() {
    if (methods.editZone_cache) {
      return methods.editZone_cache;
    }
    methods.editZone_cache = document.querySelector('[data-editor="content"]');
    return methods.editZone_cache;
  },

  /*
   * set range at target node
   **/
  setRangeAt: function setRangeAt(node, checkAll) {
    var range = document.createRange();
    if (checkAll) {
      range.setStart(node, 0);
      var end = node.childNodes.length ? node.childNodes.length : node.length ? node.length : 0;
      range.setEnd(node, end);
    } else {
      range.setStart(node, 0);
      range.setEnd(node, 0);
    }
    var selection = methods.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  },
  getRange: function getRange() {
    var s = methods.getSelection();
    if (s.rangeCount) {
      return s.getRangeAt(0);
    }
    return;
  }
};

exports.default = methods;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(6);

var _rangeHandler = __webpack_require__(9);

var _rangeHandler2 = _interopRequireDefault(_rangeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Inspect and highlight module
 **/
var Inspector = function () {
  function Inspector(moduleName) {
    _classCallCheck(this, Inspector);

    this.moduleName = moduleName;
  }

  _createClass(Inspector, [{
    key: 'add',
    value: function add(type, param) {
      var moduleName = this.moduleName;
      if (typeof moduleName !== 'string') {
        throw new Error('moduleName must be string');
      }
      switch (type) {
        case 'tag':
          if (typeof param !== 'string') {
            throw new Error('inspector for tag can only receive a string param which stand for tag name');
          }
          Inspector.tagMap[param.toUpperCase()] = moduleName;
          break;
        case 'style':
          if (!(0, _util.isObj)(param)) {
            throw new Error('inspector for style can only receive a object param');
          }
          Inspector.styles[moduleName] = param;
          break;
        case 'attribute':
          if (!(0, _util.isObj)(param)) {
            throw new Error('inspector for attribute can only receive a object param');
          }
          Inspector.attributes[moduleName] = param;
          break;
        default:
          throw new Error('unknown inspector type');
      }
      return this;
    }
  }, {
    key: 'inspect_tag',
    value: function inspect_tag(node) {
      var result = [];
      while (node && node !== _rangeHandler2.default.prototype.editZone()) {
        var inspectResult = Inspector.tagMap[node.nodeName];
        if (inspectResult && !result.includes(inspectResult)) {
          result.push(inspectResult);
        }
        node = node.parentNode;
      }
      return result;
    }
  }, {
    key: 'inspect_style',
    value: function inspect_style(node) {
      var result = [];
      while (node && node !== _rangeHandler2.default.prototype.editZone()) {
        if (!node.style) break;
        Object.keys(Inspector.styles).forEach(function (moduleName) {
          var moduleStyle = Inspector.styles[moduleName];
          Object.keys(moduleStyle).forEach(function (item) {
            var curValue = moduleStyle[item];
            if (typeof curValue === 'string' && node.style[item] === curValue) {
              if (!result.includes(moduleName)) {
                result.push(moduleName);
                Inspector.activeItems[moduleName] = curValue;
              }
            }
            if (Array.isArray(curValue)) {
              curValue.forEach(function (val) {
                if (node.style[item] === val) {
                  if (!result.includes(moduleName)) {
                    result.push(moduleName);
                    Inspector.activeItems[moduleName] = val;
                  }
                }
              });
            }
          });
        });
        node = node.parentNode;
      }
      return result;
    }
  }, {
    key: 'inspect_attribute',
    value: function inspect_attribute(node) {
      var result = [];
      while (node && node !== _rangeHandler2.default.prototype.editZone()) {
        if (!node.getAttribute) break;
        Object.keys(Inspector.attributes).forEach(function (moduleName) {
          var moduleAttr = Inspector.attributes[moduleName];
          Object.keys(moduleAttr).forEach(function (item) {
            var value = moduleAttr[item];
            var nodeVal = node.getAttribute(item);
            if (Array.isArray(value)) {
              value.forEach(function (val) {
                if (nodeVal === val) {
                  if (!result.includes(moduleName)) {
                    result.push(moduleName);
                    Inspector.activeItems[moduleName] = val;
                  }
                }
              });
            }
            if (typeof value === 'string' && nodeVal === value || nodeVal !== null) {
              if (!result.includes(moduleName)) {
                result.push(moduleName);
                Inspector.activeItems[moduleName] = value;
              }
            }
          });
        });
        node = node.parentNode;
      }
      return result;
    }
  }]);

  return Inspector;
}();

Inspector.tagMap = {};
Inspector.styles = {};
Inspector.attributes = {};
Inspector.activeItems = {};

Inspector.run = function (type, nodeList) {
  var fn = Inspector.prototype['inspect_' + type];
  var result = [];
  if (typeof fn === 'function' && Array.isArray(nodeList)) {
    nodeList.forEach(function (node) {
      result.push(fn(node));
    });
  }
  return result;
};

Inspector.removeDuplate = function (list) {
  // merge same module inspect result
  var sameStyleMap = {};
  list.forEach(function (m) {
    if (typeof m === 'string') {
      sameStyleMap[m] = sameStyleMap[m] ? sameStyleMap[m] + 1 : 1;
    }
    if (Array.isArray(m)) {
      m = Array.from(new Set(m));
      m.forEach(function (am) {
        sameStyleMap[am] = sameStyleMap[am] ? sameStyleMap[am] + 1 : 1;
      });
    }
  });
  var mergedStyle = [];
  Object.keys(sameStyleMap).forEach(function (m) {
    if (sameStyleMap[m] === list.length) {
      mergedStyle.push(m);
    }
  });
  return mergedStyle;
};

exports.default = Inspector;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polyfillIe = __webpack_require__(13);

var _polyfillIe2 = _interopRequireDefault(_polyfillIe);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _shortcut = __webpack_require__(43);

var _shortcut2 = _interopRequireDefault(_shortcut);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

var _editor = __webpack_require__(44);

var _editor2 = _interopRequireDefault(_editor);

var _commands = __webpack_require__(0);

var _commands2 = _interopRequireDefault(_commands);

var _loadModuleInspectExcludeRules = __webpack_require__(65);

var _loadModuleInspectExcludeRules2 = _interopRequireDefault(_loadModuleInspectExcludeRules);

var _moduleInspect = __webpack_require__(11);

var _moduleInspect2 = _interopRequireDefault(_moduleInspect);

var _zhCn = __webpack_require__(66);

var _zhCn2 = _interopRequireDefault(_zhCn);

var _enUs = __webpack_require__(67);

var _enUs2 = _interopRequireDefault(_enUs);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(0, _polyfillIe2.default)();

var Editor = function () {
  function Editor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Editor);

    var modules = [].concat(_toConsumableArray(_index2.default));
    var reservedNames = {};
    modules.forEach(function (m) {
      if (m.name) {
        reservedNames[m.name] = true;
      }
    });
    var components = {};
    var modulesMap = {};

    // extended modules
    if (Array.isArray(options.extendModules)) {
      options.extendModules.forEach(function (module) {
        if (module.name && !reservedNames[module.name]) {
          modules.push(module);
        } else {
          throw new Error('extended module must have a name and should not be the same as buildIn module');
        }
      });
    }

    // modules in use
    if (Array.isArray(options.modules)) {
      var m = [];
      options.modules.forEach(function (name) {
        if (typeof name !== 'string') {
          throw new Error('modules\'s item must be string');
        }
        modules.forEach(function (module) {
          if (module.name === name) {
            m.push(module);
          }
        });
      });
      modules = m;
    }

    modules.forEach(function (module) {
      // config
      var curConfig = options[module.name];
      var moduleConfig = module;
      if ((0, _util.isObj)(curConfig) && (0, _util.isObj)(moduleConfig)) {
        Object.assign(moduleConfig, curConfig);
      }

      module.moduleInspectResult = null;
      module.forbidden = null;
      if (typeof module.inspect === 'function') {
        var inspector = new _moduleInspect2.default(module.name);
        module.inspect(inspector.add.bind(inspector));
      } else {
        module.type = 'fn';
      }
      module.exclude = (0, _loadModuleInspectExcludeRules2.default)(module, modules);

      if (module.tab) {
        module.tab.module = module;

        // add activeItem prop
        module.tab.props = module.tab.props ? Object.assign(module.tab.props, { activeItem: [String, Boolean], forbidden: Boolean }) : { activeItem: [String, Boolean], forbidden: Boolean };
        module.tabName = 'tab-' + module.name;
        components[module.tabName] = module.tab;
      }
      if (options.icons && options.icons[module.name]) {
        module.icon = options.icons[module.name];
      }
      module.hasTab = !!module.tab;

      // prevent vue sync
      delete module.tab;

      modulesMap[module.name] = module;
    });

    // i18n
    var i18n = { 'zh-cn': _zhCn2.default, 'en-us': _enUs2.default };
    var customI18n = options.i18n || {};
    Object.keys(customI18n).forEach(function (key) {
      i18n[key] = i18n[key] ? Object.assign(i18n[key], customI18n[key]) : customI18n[key];
    });
    var language = options.language || 'en-us';
    var locale = i18n[language];

    // shortcut
    options.shortcut = Object.assign(_shortcut2.default, options.shortcut || {});
    var shortcut = {};
    Object.keys(options.shortcut).forEach(function (key) {
      var item = options.shortcut[key];
      var keyCode = item.keyCode;
      shortcut[keyCode] = shortcut[keyCode] || [];
      shortcut[keyCode].push(item);
      item.name = key;
    });

    // merge commands
    if ((0, _util.isObj)(options.commands)) {
      Object.assign(_commands2.default, options.commands);
    }

    // spellcheck
    var spellcheck = options.spellcheck || false;

    var compo = (0, _util.mixin)(_editor2.default, {
      data: function data() {
        return { modules: modules, locale: locale, shortcut: shortcut, modulesMap: modulesMap, spellcheck: spellcheck, constantConfig: _constantConfig2.default };
      },

      components: components
    });
    Object.assign(this, compo);
  }

  /**
   * global install
   * @param Vue
   * @param options
   */


  _createClass(Editor, null, [{
    key: 'install',
    value: function install(Vue) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      Vue.component(options.name || 'my-vue-editor', new Editor(options));
    }
  }]);

  return Editor;
}();

exports.default = Editor;

// to change Babel6 export's result

module.exports = Editor;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function value(searchElement, fromIndex) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If len is 0, return false.
                if (len === 0) {
                    return false;
                }

                // 4. Let n be ? ToInteger(fromIndex).
                //    (If fromIndex is undefined, this step produces the value 0.)
                var n = fromIndex | 0;

                // 5. If n ≥ 0, then
                //  a. Let k be n.
                // 6. Else n < 0,
                //  a. Let k be len + n.
                //  b. If k < 0, let k be 0.
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                // 7. Repeat, while k < len
                while (k < len) {
                    // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                    // b. If SameValueZero(searchElement, elementK) is true, return true.
                    // c. Increase k by 1.
                    // NOTE: === provides the correct "SameValueZero" comparison needed here.
                    if (o[k] === searchElement) {
                        return true;
                    }
                    k++;
                }

                // 8. Return false
                return false;
            }
        });
    }
    // text.contains()
    if (!Text.prototype.contains) {
        Text.prototype.contains = function contains(node) {
            return this === node;
        };
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(18);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(24);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(25);

var _index8 = _interopRequireDefault(_index7);

var _bold = __webpack_require__(28);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(29);

var _italic2 = _interopRequireDefault(_italic);

var _underline = __webpack_require__(30);

var _underline2 = _interopRequireDefault(_underline);

var _todo = __webpack_require__(31);

var _todo2 = _interopRequireDefault(_todo);

var _quote = __webpack_require__(32);

var _quote2 = _interopRequireDefault(_quote);

var _indent = __webpack_require__(33);

var _indent2 = _interopRequireDefault(_indent);

var _outdent = __webpack_require__(34);

var _outdent2 = _interopRequireDefault(_outdent);

var _ul = __webpack_require__(35);

var _ul2 = _interopRequireDefault(_ul);

var _ol = __webpack_require__(36);

var _ol2 = _interopRequireDefault(_ol);

var _linethrough = __webpack_require__(37);

var _linethrough2 = _interopRequireDefault(_linethrough);

var _icourtTodo = __webpack_require__(38);

var _icourtTodo2 = _interopRequireDefault(_icourtTodo);

var _foreColor = __webpack_require__(39);

var _foreColor2 = _interopRequireDefault(_foreColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * build-in moduls
 */
exports.default = [_index4.default, _index2.default, _index8.default, _index6.default, _bold2.default, _italic2.default, _underline2.default, _todo2.default, _quote2.default, _indent2.default, _outdent2.default, _ul2.default, _ol2.default, _linethrough2.default, _icourtTodo2.default, _foreColor2.default];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(16);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'align',
  icon: 'iui-icon iui-icon-align',
  tab: _tab2.default,
  inspect: function inspect(add) {
    add('style', {
      'textAlign': ['center', 'right']
    });
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(17);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _tab2.default,
  watch: {
    activeItem: function activeItem(n) {
      n = n || 'left';
      var map = {
        'left': 2,
        'center': 0,
        'right': 1
      };
      var index = map[n];
      var options = Object.keys(this.alignMap);
      var key = options[index];
      this.choosed = {
        icon: 'align-' + n,
        index: index,
        key: key,
        type: this.alignMap[key]
      };
    }
  },
  data: function data() {
    return {
      alignMap: {
        '居中': 'justifyCenter',
        '居右': 'justifyRight',
        '居左': 'justifyLeft'
      },
      choosed: {}
    };
  },

  methods: {
    setAlign: function setAlign(index) {
      var options = Object.keys(this.alignMap);
      var key = options[index];
      this.$parent.execCommand(this.alignMap[key]);
      this.$parent.saveCurrentRange();
      this.$parent.moduleInspect();
    },
    changeAlign: function changeAlign() {
      if (this.forbidden) return;
      var pre_index = !isNaN(this.choosed.index) ? this.choosed.index : -1;
      var len = Object.keys(this.alignMap).length;
      var target_index = void 0;
      if (pre_index + 1 === len) {
        target_index = 0;
      } else {
        target_index = ++pre_index;
      }
      this.setAlign(target_index);
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li class='btn' @click=\"changeAlign()\" :title=\"'对齐方式:' + (choosed.key || '居左')\">\n  <span style=\"vertical-align: sub\" class=\"fa\" :class=\"'fa-' + (choosed.icon || 'align-left')\"></span>\n</li>\n");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(19);

var _tab2 = _interopRequireDefault(_tab);

var _config = __webpack_require__(23);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'font',
  tab: _tab2.default,
  config: _config2.default,
  inspect: function inspect(add) {
    add('style', {
      fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
    });
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(20);

var _tab2 = _interopRequireDefault(_tab);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _tab2.default,
  watch: {
    activeItem: function activeItem(n) {
      var val = this.fontAttrMap[n];
      if (val) {
        this.choosed = val;
      } else {
        this.choosed = this.fontAttrMap[this.fontAttrMap['default']];
      }
    }
  },
  data: function data() {
    return {
      fontAttrMap: {},
      curModule: null,
      choosed: {},
      showList: false
    };
  },

  methods: {
    showListFn: function showListFn() {
      if (this.$refs.tab.classList.contains('forbidden')) return;
      this.showList = true;
    },
    changeAttr: function changeAttr(val) {
      this.choosed = val;
      // this.$parent.execCommand('lineHeight', val.lineHeight)
      this.$parent.execCommand('fontSize', val.fontSize);
      this.showList = false;
    },
    setFontName: function setFontName(name) {
      this.$parent.execCommand('fontName', name);
    },
    setHeading: function setHeading(heading) {
      this.$parent.execCommand('formatBlock', heading);
    }
  },
  mounted: function mounted() {
    this.curModule = this.$parent.modulesMap['font'];
    this.fontAttrMap = this.curModule.config;
    this.choosed = this.fontAttrMap[this.fontAttrMap['default']];
  }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li ref=\"tab\" class=\"font-tab tab-with-dropdown\" @mouseenter=\"showListFn\" @mouseleave=\"showList = false\">\n    {{choosed.name}}\n    <i class=\"icon fa fa-caret-down\"></i>\n    <ul class=\"dropdown\" v-if=\"showList\">\n        <li v-if=\"val.name\" v-for=\"(val, key) in fontAttrMap\" @click=\"changeAttr(val)\">{{ val.name }}</li>\n    </ul>\n</li>\n");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(2, function() {
			var newContent = __webpack_require__(2);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // through font tag
  'xx-large': {
    fontSize: 6,
    name: '标题'
  },
  'x-large': {
    fontSize: 5,
    name: '副标题'
  },
  'large': {
    fontSize: 4,
    name: '小标题'
  },
  'medium': {
    fontSize: 3,
    name: '正文'
  },
  default: 'medium'
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * toggle full screen mode
 * Created by peak on 16/8/18.
 */
exports.default = {
    name: 'full-screen',
    icon: 'fa fa-arrows-alt',
    i18n: 'full screen',
    handler: function handler(rh) {
        rh.editor.toggleFullScreen();
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(26);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'image',
  i18n: 'image',
  canUploadSameImage: true,
  imgOccupyNewRow: false,
  maxSize: 5120 * 1024,
  compress: {
    // max width
    width: 1600,
    // max height
    height: 1600,
    // cpmpress quality 0 - 1
    quality: 0.8
  },
  tab: _tab2.default,
  inspect: function inspect(add) {
    add('tag', 'img');
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lrz = __webpack_require__(8);

var _lrz2 = _interopRequireDefault(_lrz);

var _tab = __webpack_require__(27);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _tab2.default,
  data: function data() {
    return {
      name: 'tab-image',
      curModule: null
    };
  },

  methods: {
    pick: function pick() {
      if (this.forbidden) return;
      this.$refs.file.click();
    },
    process: function process(e) {
      var file = this.$refs.file.files[0];
      this.$parent.execCommand('insertImage', file);
      if (this.curModule.canUploadSameImage) {
        e.target.value = '';
      }
    }
  },
  mounted: function mounted() {
    this.curModule = this.$parent.modulesMap['image'];
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li ref=\"item\" class=\"btn\">\n  <input type=\"file\" ref=\"file\" style=\"display: none;\" @change=\"process\" accept=\"image/*\">\n  <span style=\"vertical-align: sub\" class=\"fa fa-picture-o\" @click=\"pick\"></span>\n</li>\n\n\n\n");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'bold',
  icon: 'fa fa-bold',
  handler: function handler(rh) {
    rh.editor.execCommand('bold');
  },
  inspect: function inspect(add) {
    add('tag', 'STRONG').add('tag', 'B').add('style', { 'font-weight': 'bold' });
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'italic',
  icon: 'fa fa-italic',
  handler: function handler(rh) {
    rh.editor.execCommand('italic');
  },
  inspect: function inspect(add) {
    add('tag', 'I').add('style', { 'fontStyle': 'italic' });
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'underline',
  icon: 'fa fa-underline',
  handler: function handler(rh) {
    rh.editor.execCommand('underline');
  },
  inspect: function inspect(add) {
    add('tag', 'U').add('style', { 'text-decoration-line': 'underline' });
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'todo',
  icon: 'fa fa-check-square',
  exclude: 'ALL_BUT_MYSELF',
  mounted: function mounted(editor) {
    editor.execCommand('initTodo');
  },
  handler: function handler(rh) {
    rh.editor.execCommand('todo', {
      insertAfter: rh.range.commonAncestorContainer,
      placeholder: '待办事项'
    });
  },
  inspect: function inspect(add) {
    add('attribute', {
      'data-editor-todo': ''
    });
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'quote',
  icon: 'fa fa-quote-right',
  show: true,
  mounted: function mounted(editor) {
    editor.execCommand('initQuote');
  },

  handler: function handler(rh, module) {
    var isInQuote = rh.editor.activeModules.includes(module.name);
    rh.editor.execCommand('quote', isInQuote);
  },
  inspect: function inspect(add) {
    add('attribute', {
      'data-editor-quote': ''
    });
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'indent',
  icon: 'fa fa-indent',
  type: 'fn',
  handler: function handler(rh) {
    rh.editor.execCommand('indent');
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'indent',
  icon: 'fa fa-outdent',
  type: 'fn',
  handler: function handler(rh) {
    rh.editor.execCommand('outdent');
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'ul',
  icon: 'fa fa-list-ul',
  handler: function handler(rh) {
    rh.editor.execCommand('insertUnorderedList');
  },
  inspect: function inspect(add) {
    add('tag', 'UL');
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'ol',
  icon: 'fa fa-list-ol',
  handler: function handler(rh) {
    rh.editor.execCommand('insertOrderedList');
  },
  inspect: function inspect(add) {
    add('tag', 'OL');
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'linethrough',
  icon: 'fa fa-strikethrough',
  handler: function handler(rh) {
    rh.editor.execCommand('strikeThrough');
  },
  inspect: function inspect(add) {
    add('tag', 'STRIKE').add('style', { 'text-decoration-line': 'line-through' });
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'itodo',
  icon: 'iui-icon iui-icon-checked-line',
  exclude: 'ALL_BUT_MYSELF',
  mounted: function mounted(editor) {
    editor.execCommand('initiTodo');
  },
  handler: function handler(rh) {
    rh.editor.execCommand('itodo', {
      insertAfter: rh.range.commonAncestorContainer,
      placeholder: '待办事项'
    });
  },
  inspect: function inspect(add) {
    add('attribute', {
      'data-editor-todo': ''
    });
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(40);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foreColorConfig = {
  name: 'foreColor',
  // color bust be lowercase
  colors: ['#000000', '#000033', '#000066', '#000099', '#003300', '#003333', '#003366', '#003399', '#006600', '#006633', '#009900', '#330000', '#330033', '#330066', '#333300', '#333366', '#660000', '#660033', '#663300', '#666600', '#666633', '#666666', '#666699', '#990000', '#990033', '#9900cc', '#996600', '#ffcc00', '#ffcccc', '#ffcc99', '#ffff00', '#fa8919', '#ed6c00', '#ccffff', '#ccff99', '#ffffff'],
  default: '#000000',
  tab: _tab2.default,
  inspect: function inspect(add) {
    add('attribute', {
      color: foreColorConfig.colors
    });
  }
};

exports.default = foreColorConfig;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(41);

var _tab2 = _interopRequireDefault(_tab);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _tab2.default,
  watch: {
    activeItem: function activeItem(n) {
      n = n || this.curModule.default;
      this.choosed = n;
    }
  },
  data: function data() {
    return {
      colors: [],
      curModule: null,
      choosed: {},
      showList: false
    };
  },

  methods: {
    showListFn: function showListFn() {
      if (this.$refs.tab.classList.contains('forbidden')) return;
      this.showList = true;
    },
    changeColor: function changeColor(color) {
      this.choosed = color;
      this.$parent.execCommand('foreColor', color);
      this.showList = false;
    }
  },
  mounted: function mounted() {
    this.curModule = this.$parent.modulesMap['foreColor'];
    this.colors = this.curModule.colors;
    this.choosed = this.curModule.default;
  }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li ref=\"tab\" class=\"fore-color-tab tab-with-dropdown\" @mouseenter=\"showListFn\" @mouseleave=\"showList = false\">\n    <i class=\"icon fa fa-font\"></i>\n    <div class=\"choosed\" :style=\"{'background': choosed}\"></div>\n    <ul class=\"dropdown\" v-if=\"showList\">\n        <li v-for=\"color in colors\" :style=\"{'background': color}\" @click=\"changeColor(color)\"></li>\n    </ul>\n</li>\n");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(5, function() {
			var newContent = __webpack_require__(5);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  outdent: {
    keyCode: 9,
    shiftKey: true,
    handler: function handler(editor, e) {
      e.preventDefault();
      editor.execCommand('outdent');
    }
  },
  indent: {
    keyCode: 9,
    handler: function handler(editor, e) {
      e.preventDefault();
      editor.execCommand('indent');
    }
  },
  delete: {
    keyCode: 8,
    handler: function handler(editor, e) {
      editor.execCommand('delete', e, true);
    }
  },
  enter: {
    keyCode: 13,
    handler: function handler(editor, e) {
      editor.execCommand('enter', e, true);
    }
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rangeHandler = __webpack_require__(9);

var _rangeHandler2 = _interopRequireDefault(_rangeHandler);

__webpack_require__(62);

var _editor = __webpack_require__(63);

var _editor2 = _interopRequireDefault(_editor);

var _dragPic = __webpack_require__(64);

var _dragPic2 = _interopRequireDefault(_dragPic);

var _moduleInspect = __webpack_require__(11);

var _moduleInspect2 = _interopRequireDefault(_moduleInspect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _editor2.default,
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    },
    height: {
      type: Number,
      default: 300,
      validator: function validator(val) {
        return val >= 100;
      }
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    autoHeight: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    dragPic: _dragPic2.default
  },
  data: function data() {
    return {
      modules: {},
      activeModules: [],
      allActiveModules: [],
      fullScreen: false
    };
  },

  watch: {
    content: function content(val) {
      var content = this.$refs.content.innerHTML;
      if (val !== content) {
        this.$refs.content.innerHTML = val;
      }
    },
    fullScreen: function fullScreen(val) {
      var component = this;
      if (val) {
        component.parentEl = component.$el.parentNode;
        component.nextEl = component.$el.nextSibling;
        document.body.appendChild(component.$el);
        return;
      }
      if (component.nextEl) {
        component.parentEl.insertBefore(component.$el, component.nextEl);
        return;
      }
      component.parentEl.appendChild(component.$el);
    }
  },
  computed: {
    contentStyle: function contentStyle() {
      var style = {};
      if (this.fullScreen) {
        style.height = window.innerHeight - this.$refs.toolbar.clientHeight - 1 + 'px';
        return style;
      }
      if (!this.autoHeight) {
        style.height = this.height + 'px';
        return style;
      }
      style['min-height'] = this.height + 'px';
      return style;
    }
  },
  methods: {
    getCurActiveModuleItem: function getCurActiveModuleItem() {
      return _moduleInspect2.default.activeItems;
    },
    clearActiveModuleItem: function clearActiveModuleItem() {
      _moduleInspect2.default.activeItems = {};
    },
    handleDragPic: function handleDragPic(file) {
      if (this.modulesMap['image'] && this.modulesMap['image'].drag !== false || !this.modulesMap['image']) {
        this.saveCurrentRange();
        this.execCommand('insertImage', file);
      }
    },
    toggleFullScreen: function toggleFullScreen() {
      this.fullScreen = !this.fullScreen;
    },
    enableFullScreen: function enableFullScreen() {
      this.fullScreen = true;
    },
    exitFullScreen: function exitFullScreen() {
      this.fullScreen = false;
    },
    focus: function focus() {
      this.$refs.content.focus();
    },
    blur: function blur() {
      this.$refs.content.blur();
    },
    execCommand: function execCommand(command, arg, execOnly) {
      if (!execOnly) {
        this.restoreSelection();
      }
      if (this.range) {
        new _rangeHandler2.default(this.range, this).execCommand(command, arg);
      }
      this.$emit('change', this.$refs.content.innerHTML);
    },
    saveCurrentRange: function saveCurrentRange() {
      var selection = window.getSelection ? window.getSelection() : document.getSelection();
      var content = this.$refs.content;
      if (!selection.rangeCount || !content) {
        return;
      }
      for (var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(0);
        var start = range.startContainer;
        var end = range.endContainer;
        // for IE11 : node.contains(textNode) always return false
        start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start;
        end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end;
        if (content.contains(start) && content.contains(end)) {
          this.range = range;
          break;
        }
      }
    },
    restoreSelection: function restoreSelection() {
      var selection = window.getSelection ? window.getSelection() : document.getSelection();
      selection.removeAllRanges();
      if (this.range) {
        selection.addRange(this.range);
      } else {
        var content = this.$refs.content;
        var row = _rangeHandler2.default.prototype.newRow({ br: true });
        var range = document.createRange();
        content.appendChild(row);
        range.setStart(row, 0);
        range.setEnd(row, 0);
        selection.addRange(range);
        this.range = range;
      }
    },
    activeModule: function activeModule(module) {
      var _this = this;

      if (module.forbidden) return;
      if (typeof module.handler === 'function') {
        module.handler(new _rangeHandler2.default(this.range, this), module);
        this.$nextTick(function () {
          _this.saveCurrentRange();
          _this.moduleInspect();
        });
        return;
      }
    },
    moduleInspect: function moduleInspect() {
      var _this2 = this;

      if (this.range) {
        this.clearActiveModuleItem();
        this.activeModules = [];
        this.allActiveModules = [];
        var rh = new _rangeHandler2.default(this.range, this);
        var texts = rh.getAllTextNodesInRange();
        if (texts.length === 0 && this.range.collapsed) {
          texts.push(this.range.commonAncestorContainer);
        }
        // texts duplicate removal
        var textAftetDR = [];
        texts.forEach(function (text) {
          if (text.nodeType === Node.TEXT_NODE && text.parentNode !== rh.editZone()) {
            text = text.parentNode;
          }
          if (!textAftetDR.includes(text)) {
            textAftetDR.push(text);
          }
        });

        var tagResult = _moduleInspect2.default.run('tag', textAftetDR);
        var tagResultRD = _moduleInspect2.default.removeDuplate(tagResult);

        var styleResult = _moduleInspect2.default.run('style', textAftetDR);
        var styleResultRD = _moduleInspect2.default.removeDuplate(styleResult);

        var attributeResult = _moduleInspect2.default.run('attribute', textAftetDR);
        var attributeResultRD = _moduleInspect2.default.removeDuplate(attributeResult);

        this.allActiveModules = tagResult.concat(styleResult, attributeResult);
        this.activeModules = Array.from(new Set(tagResultRD.concat(styleResultRD, attributeResultRD)));

        // reset
        this.modules.forEach(function (module) {
          module.forbidden = false;
          module.moduleInspectResult = false;
        });

        // handle forbidden logic
        if (this.allActiveModules.length) {
          var excludeList = [];
          this.allActiveModules.forEach(function (m) {
            if (Array.isArray(m)) {
              m.forEach(function (moduleName) {
                var curModule = _this2.modulesMap[moduleName];
                excludeList = excludeList.concat(curModule.exclude);
              });
            }
          });
          excludeList = Array.from(new Set(excludeList));
          excludeList.forEach(function (exc) {
            var excModule = _this2.modulesMap[exc];
            if (excModule && excModule.type !== 'fn') {
              excModule.forbidden = true;
            }
          });
        }

        // handle highlight logic
        if (this.activeModules.length) {
          this.modules.forEach(function (module) {
            module.moduleInspectResult = false;
            var moduleName = module.name;
            if (_this2.activeModules.includes(moduleName)) {
              module.moduleInspectResult = true;
              var curModuleActiveItem = _this2.getCurActiveModuleItem()[moduleName];
              if (typeof curModuleActiveItem === 'string') {
                module.moduleInspectResult = curModuleActiveItem || 'ALL';
              }
            }
          });
        }
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.modules.forEach(function (module) {
      if (typeof module.init === 'function') {
        module.init(_this3);
      }
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    var content = this.$refs.content;
    var toolbar = this.$refs.toolbar;
    content.innerHTML = this.content;
    // add eventListener at document to handle selection
    document.addEventListener('mouseup', function (e) {
      _this4.saveCurrentRange();
      _this4.moduleInspect();
    }, false);
    // toolbar.addEventListener('mousedown', this.saveCurrentRange, false)
    content.addEventListener('keyup', function (e) {
      _this4.$emit('change', content.innerHTML);
      _this4.saveCurrentRange();
      _this4.moduleInspect();
    }, false);
    content.addEventListener('mouseout', function (e) {
      _this4.saveCurrentRange();
    }, false);
    content.addEventListener('paste', function (e) {
      _this4.execCommand('paste', e, true);
      var common = _this4.range.commonAncestorContainer;
      if (common) {
        if (common.nodeType === Node.TEXT_NODE) {
          common = common.parentNode;
        }
        if (common.scrollIntoView) {
          common.scrollIntoView(false);
        }
      }
    });
    this.touchHandler = function (e) {
      if (content.contains(e.target)) {
        _this4.saveCurrentRange();
        _this4.moduleInspect();
      }
    };
    window.addEventListener('touchend', this.touchHandler, false);

    // before exec command
    // let text be a row
    _rangeHandler2.default.prototype.before(function (command, rh, arg) {
      var node = rh.range.commonAncestorContainer;
      // handle editor with no content
      if (rh.isEmptyNode(node) && node === rh.editZone()) {
        var firstChild = node.firstElementChild;
        if (firstChild && firstChild.nodeName === 'BR') {
          node.removeChild(firstChild);
        }
        var newRow = rh.newRow({ br: true });
        node.appendChild(newRow);
        rh.getSelection().collapse(newRow, 1);
        return;
      }
      var texts = rh.getAllTextNodesInRange();
      texts.forEach(function (text) {
        if (!rh.isEmptyNode(text)) {
          rh.textToRow(text);
        }
      });
      if (texts.length) {
        rh.editor.saveCurrentRange();
      }
    });

    // handle shortcut
    content.addEventListener('keydown', function (e) {
      _this4.execCommand('keydown', e, true);
      var item = _this4.shortcut[e.keyCode];
      if (item && item.length) {
        item.forEach(function (s) {
          if (e.keyCode === s.keyCode && e.altKey === !!s.altKey && e.ctrlKey === !!s.ctrlKey && e.metaKey === !!s.metaKey && e.shiftKey === !!s.shiftKey) {
            if (typeof s.handler === 'function') {
              _this4.saveCurrentRange();
              s.handler(_this4, e);
            }
          }
        });
      }
    }, false);

    this.$nextTick(function () {
      _this4.modules.forEach(function (module) {
        if (typeof module.mounted === 'function') {
          module.mounted(_this4);
        }
      });
    });
  },
  updated: function updated() {
    var _this5 = this;

    this.modules.forEach(function (module) {
      if (typeof module.updated === 'function') {
        module.updated(_this5);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this6 = this;

    window.removeEventListener('touchend', this.touchHandler);
    this.modules.forEach(function (module) {
      if (typeof module.destroyed === 'function') {
        module.destroyed(_this6);
      }
    });
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commands = __webpack_require__(0);

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// for IE 11
if (!Text.prototype.contains) {
  Text.prototype.contains = function contains(otherNode) {
    return this === otherNode;
  };
}

var RangeHandler = function () {
  /**
   * build range handler
   * @param {Range} range
   * @param {editor} current editor
   */
  function RangeHandler(range, editor) {
    _classCallCheck(this, RangeHandler);

    if (!range || !(range instanceof Range)) {
      throw new TypeError('cant\'t resolve range');
    }
    this.range = range;
    this.editor = editor;
  }

  /**
   * execute edit command
   * @param {String} command
   * @param arg
   */


  _createClass(RangeHandler, [{
    key: 'execCommand',
    value: function execCommand(command, arg) {
      var _this = this;

      RangeHandler.beforeList.forEach(function (fn) {
        fn.call(_this, command, _this, arg);
      });
      var existCommand = _commands2.default[command];
      var customCommand = this.editor.commands ? this.editor.commands[command] : null;
      if (existCommand) {
        existCommand(this, arg);
      } else if (customCommand) {
        customCommand(this, arg);
      } else {
        document.execCommand(command, false, arg);
      }
      RangeHandler.afterList.forEach(function (fn) {
        fn.call(_this, command, _this, arg);
      });
    }

    /*
     * run fn before exec command  
     **/

  }, {
    key: 'before',
    value: function before(fn) {
      if (typeof fn === 'function') {
        RangeHandler.beforeList.push(fn);
      }
    }
  }, {
    key: 'clearBeforeList',
    value: function clearBeforeList() {
      RangeHandler.beforeList = [];
    }

    /*
     * run fn after exec command  
     **/

  }, {
    key: 'after',
    value: function after(fn) {
      if (typeof fn === 'function') {
        RangeHandler.afterList.push(fn);
      }
    }
  }, {
    key: 'clearAfterList',
    value: function clearAfterList() {
      RangeHandler.afterList = [];
    }
  }]);

  return RangeHandler;
}();

exports.default = RangeHandler;


RangeHandler.beforeList = [];
RangeHandler.afterList = [];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lrz = __webpack_require__(8);

var _lrz2 = _interopRequireDefault(_lrz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insertImage = function insertImage(rh, arg) {
  // forbidden logic
  var forbidden = false;
  var actives = rh.editor.activeModules;
  actives.forEach(function (name) {
    var module = rh.editor.modulesMap[name];
    if (module && module.exclude && module.exclude.includes('image')) {
      forbidden = true;
    }
  });
  if (forbidden) return;

  var returnData = {
    origin: arg
  };
  var editor = rh.editor;
  var config = editor.modulesMap['image'];
  if (!config) {
    throw new Error('image config load fail');
  }
  if (arg instanceof File) {
    handleFile(arg);
  }
  if (typeof arg === 'string') {
    document.execCommand('insertImage', false, arg);
  }

  function handleFile(file) {
    if (config.compress) {
      config.compress.fieldName = config.fieldName || 'image';
      (0, _lrz2.default)(file, config.compress).then(function (rst) {
        if (rst.file.size > config.maxSize) {
          Object.assign(returnData, {
            status: 'exceed size limit, after compress',
            statusCode: 3
          }, rst);
          editor.$emit('imageUpload', returnData);
        } else {
          Object.assign(returnData, rst);
          var imgId = rh.createRandomId('img');
          insertBase64(returnData.base64, imgId);
        }
      }).catch(function (err) {
        Object.assign(returnData, {
          status: err,
          statusCode: 2
        });
        editor.$emit('imageUpload', returnData);
      });
    } else {
      if (file.size > config.maxSize) {
        editor.$emit('imageUpload', Object.assign(returnData, {
          status: 'exceed size limit, without compress',
          statusCode: 3
        }));
      } else {
        var formData = new FormData();
        formData.append(config.fieldName, file, file.name);
        returnData.formData = formData;
        var reader = new FileReader();
        reader.onload = function (e) {
          var imgId = rh.createRandomId('img');
          insertBase64(e.target.result, imgId);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  function insertBase64(base64, id) {
    var dom = '<img src="' + base64 + '" data-editor-img="' + id + '">';
    if (config.imgOccupyNewRow) {
      var node = rh.range.commonAncestorContainer;
      var curRow = rh.forceGetRow(node);
      if (curRow) {
        var sibling = curRow.nextElementSibling;
        var newRow = rh.newRow({ contenteditable: false });
        newRow.innerHTML = dom;
        rh.insertAfter(newRow, curRow);
        if (!sibling) {
          sibling = rh.newRow({ br: true });
          rh.insertAfter(sibling, newRow);
        }
        try {
          rh.getSelection().collapse(sibling, 1);
        } catch (e) {
          rh.getSelection().collapse(sibling, 0);
        }
      }
    } else {
      editor.execCommand('insertHTML', dom, true);
    }
    editor.saveCurrentRange();
    editor.$emit('imageUpload', Object.assign(returnData, {
      status: 'everything fine',
      statusCode: 2,
      base64: base64,
      replaceSrcAfterUploadFinish: replaceImg(id),
      deleteImgWhenUploadFail: deleteImg(id)
    }));
  }

  // replace image's base64 src to url after upload finish
  function replaceImg(id) {
    return function (src) {
      var target = document.querySelector('img[data-editor-img=\'' + id + '\']');
      if (target) {
        target.setAttribute('src', src);
        target.removeAttribute('data-editor-img');
        editor.$emit('change', editor.$refs.content.innerHTML);
      }
    };
  }

  // delete image after upload fail
  function deleteImg(id) {
    return function () {
      var target = document.querySelector('img[data-editor-img=\'' + id + '\']');
      if (target) {
        target.parentNode.removeChild(target);
        editor.$emit('change', editor.$refs.content.innerHTML);
      }
    };
  }
};

exports.default = insertImage;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  if (rh.range.collapsed) {
    var s = rh.getSelection();
    var node = s.baseNode;
    var row = rh.getRow(node);
    if (row) {
      // delete current span element to keep line-height run correct
      if (rh.isEmptyNode(node) && node.parentNode.nodeName === 'SPAN') {
        document.execCommand('delete', false);
      }
      _index2.default.insertHTML(rh, '&#8203;');
      var range = document.createRange();
      range.setStart(s.focusNode, s.anchorOffset - 1);
      range.setEnd(s.focusNode, s.focusOffset);
      s.removeAllRanges();
      s.addRange(range);
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('fontSize', false, arg);
      s.collapse(s.focusNode, 1);
      return;
    }
  } else {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, arg);
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, e) {
  e.preventDefault();
  var text = null;

  if (window.clipboardData && clipboardData.setData) {
    // IE
    text = window.clipboardData.getData('text');
  } else {
    text = (e.originalEvent || e).clipboardData.getData('text/plain');
  }
  if (document.body.createTextRange) {
    if (document.selection) {
      textRange = document.selection.createRange();
    } else if (window.getSelection) {
      sel = window.getSelection();
      var range = sel.getRangeAt(0);

      // 创建临时元素，使得TextRange可以移动到正确的位置
      var tempEl = document.createElement("span");
      tempEl.innerHTML = "&#FEFF;";
      range.deleteContents();
      range.insertNode(tempEl);
      textRange = document.body.createTextRange();
      textRange.moveToElementText(tempEl);
      tempEl.parentNode.removeChild(tempEl);
    }
    textRange.text = text;
    textRange.collapse(false);
    textRange.select();
  } else {
    // Chrome之类浏览器
    document.execCommand("insertText", false, text);
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, e) {
  var node = rh.range.commonAncestorContainer;
  if (rh.range.collapsed) {

    // rewrite li enter logic
    if (rh.findSpecialAncestor(node, 'li') && rh.isEmptyNode(node)) {
      e.preventDefault();
      var ulOrOl = rh.findSpecialAncestor(node, 'ul') || rh.findSpecialAncestor(node, 'ol');
      if (ulOrOl.nodeName === 'UL') {
        _index2.default['insertUnorderedList'](rh, e);
      }
      if (ulOrOl.nodeName === 'OL') {
        _index2.default['insertOrderedList'](rh, e);
      }
    }
  }
  afterEnter(rh, e);
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function afterEnter(rh, e) {
  setTimeout(function () {
    var node = rh.getSelection().baseNode;
    var row = rh.getRow(node);
    // clear new row's indent
    if (row) {
      row.style.marginLeft = '';
      row.style.marginRight = '';
    }
  });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var s = rh.getSelection();
  if (!s.isCollapsed) {
    document.execCommand('styleWithCSS', false, false);
    document.execCommand('underline', false, arg);
    return;
  } else {
    var node = s.focusNode;
    var row = rh.getRow(node);
    var nodeCtn = node.innerText || node.nodeValue;

    // the outermost underline tag
    var underline = rh.findSpecialAncestor(node, 'u', false, row) || rh.findSpecialAncestorByStyle(node, {
      'textDecorationLine': 'underline'
    }, false, row);
    var existStyle = rh.findExistTagTillBorder(node, ['STRIKE', 'I', 'B', 'STRONG'], row);
    var fontSize = rh.findSpecialAncestorStyle(node, 'fontSize', true, row);
    if (!underline) {
      existStyle.push('U');
    }
    if (existStyle.length) {
      var newDOM = rh.createNestDOMThroughList(existStyle);
      var v = rh.newRow();
      if (fontSize) {
        var span = document.createElement('span');
        span.style.fontSize = fontSize;
        v.appendChild(span);
        span.appendChild(newDOM.dom);
      } else {
        v.appendChild(newDOM.dom);
      }
      _index2.default.insertHTML(rh, v.innerHTML);
      var deepestNode = document.getElementById(newDOM.deepestId);
      s.collapse(deepestNode, 1);
      deepestNode.removeAttribute('id');
    } else {
      var newText = document.createElement('span');
      newText.style.fontSize = fontSize;
      newText.innerHTML = '&#8203;';
      rh.insertAfter(newText, underline);
      s.collapse(newText, 1);
    }
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var s = rh.getSelection();
  if (!s.isCollapsed) {
    document.execCommand('styleWithCSS', false, false);
    document.execCommand('strikeThrough', false, arg);
    return;
  } else {
    var node = s.focusNode;
    var row = rh.getRow(node);
    var nodeCtn = node.innerText || node.nodeValue;

    // the outermost strikeThrough tag
    var strikeThrough = rh.findSpecialAncestor(node, 'STRIKE', false, row) || rh.findSpecialAncestorByStyle(node, {
      'textDecorationLine': 'line-through'
    }, false, row);
    var existStyle = rh.findExistTagTillBorder(node, ['U', 'I', 'B', 'STRONG'], row);
    var fontSize = rh.findSpecialAncestorStyle(node, 'fontSize', true, row);
    if (!strikeThrough) {
      existStyle.push('STRIKE');
    }
    if (existStyle.length) {
      var newDOM = rh.createNestDOMThroughList(existStyle);
      var v = rh.newRow();
      if (fontSize) {
        var span = document.createElement('span');
        span.style.fontSize = fontSize;
        v.appendChild(span);
        span.appendChild(newDOM.dom);
      } else {
        v.appendChild(newDOM.dom);
      }
      _index2.default.insertHTML(rh, v.innerHTML);
      var deepestNode = document.getElementById(newDOM.deepestId);
      s.collapse(deepestNode, 1);
      deepestNode.removeAttribute('id');
    } else {
      var newText = document.createElement('span');
      newText.style.fontSize = fontSize;
      newText.innerHTML = '&#8203;';
      rh.insertAfter(newText, strikeThrough);
      s.collapse(newText, 1);
    }
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var s = rh.getSelection();
  if (!s.isCollapsed) {
    document.execCommand('styleWithCSS', false, false);
    document.execCommand('italic', false, arg);
    return;
  } else {
    var node = s.focusNode;
    var row = rh.getRow(node);

    // the outermost italic tag
    var italic = rh.findSpecialAncestor(node, 'i', false, row) || rh.findSpecialAncestorByStyle(node, {
      'fontStyle': 'italic'
    }, false, row);
    var existStyle = rh.findExistTagTillBorder(node, ['STRIKE', 'U', 'B', 'STRONG'], row);
    var fontSize = rh.findSpecialAncestorStyle(node, 'fontSize', true, row);
    // is in a italic
    if (!italic) {
      existStyle.push('I');
    }
    if (existStyle.length) {
      var newDOM = rh.createNestDOMThroughList(existStyle);
      var v = rh.newRow();
      if (fontSize) {
        var span = document.createElement('span');
        span.style.fontSize = fontSize;
        v.appendChild(span);
        span.appendChild(newDOM.dom);
      } else {
        v.appendChild(newDOM.dom);
      }
      _index2.default.insertHTML(rh, v.innerHTML);
      var deepestNode = document.getElementById(newDOM.deepestId);
      s.collapse(deepestNode, 1);
      deepestNode.removeAttribute('id');
    } else {
      var newText = document.createElement('span');
      newText.style.fontSize = fontSize;
      newText.innerHTML = '&#8203;';
      rh.insertAfter(newText, italic);
      s.collapse(newText, 1);
    }
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var s = rh.getSelection();
  if (!s.isCollapsed) {
    document.execCommand('styleWithCSS', false, false);
    document.execCommand('bold', false, arg);
    return;
  } else {
    var node = s.focusNode;
    var row = rh.getRow(node);

    // the outermost bold tag
    var bold = rh.findSpecialAncestor(node, 'strong') || rh.findSpecialAncestor(node, 'b') || rh.findSpecialAncestorByStyle(node, {
      'fontWeight': 'bold'
    });
    var existStyle = rh.findExistTagTillBorder(node, ['STRIKE', 'I', 'U'], row);
    var fontSize = rh.findSpecialAncestorStyle(node, 'fontSize', true, row);
    if (!bold) {
      existStyle.push('B');
    }
    if (existStyle.length) {
      var newDOM = rh.createNestDOMThroughList(existStyle);
      var v = rh.newRow();
      if (fontSize) {
        var span = document.createElement('span');
        span.style.fontSize = fontSize;
        v.appendChild(span);
        span.appendChild(newDOM.dom);
      } else {
        v.appendChild(newDOM.dom);
      }
      _index2.default.insertHTML(rh, v.innerHTML);
      var deepestNode = document.getElementById(newDOM.deepestId);
      s.collapse(deepestNode, 1);
      deepestNode.removeAttribute('id');
    } else {
      var newText = document.createElement('span');
      newText.style.fontSize = fontSize;
      newText.innerHTML = '&#8203;';
      rh.insertAfter(newText, bold);
      s.collapse(newText, 1);
    }
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var q = {
  // only set contenteditable:false in parent node can child node trigger keydown listener
  'quote': function quote(rh, isInQuote) {
    var node = rh.range.commonAncestorContainer;
    if (isInQuote) {
      node = node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
      var _quote = rh.findSpecialAncestor(node, '[data-editor-quote]');
      if (_quote) {
        var _texts = rh.getDescendantTextNodes(_quote);
        var _quoteRows = [];
        var rows = Array.from(_quote.querySelector('[data-editor-quote-block').children);
        _texts.forEach(function (text) {
          // find row in current quote row
          // let row = rh.findSpecialAncestor(text, constant.ROW_TAG, false, quote)
          var row = void 0;
          rows.forEach(function (curRow) {
            if (curRow.contains(text)) {
              row = curRow;
            }
          });
          if (!_quoteRows.includes(row)) {
            _quoteRows.push(row);
          }
        });
        _quoteRows.forEach(function (qr, index) {
          if (index === 0) {
            _quote.parentNode.replaceChild(qr, _quote);
          } else {
            rh.insertAfter(qr, _quoteRows[index - 1]);
          }
        });
        var s = rh.getSelection();
        if (_quoteRows.length) {
          var range = document.createRange();
          range.setStart(_quoteRows[0], 0);
          range.setEnd(_quoteRows[_quoteRows.length - 1], 1);
          s.removeAllRanges();
          s.addRange(range);
        } else {
          // it's a empty quote
          var newRow = rh.newRow({ br: true });
          _quote.parentNode.replaceChild(newRow, _quote);
          s.collapse(newRow, 1);
        }
      }
      return;
    }
    var texts = rh.getAllTextNodesInRange();
    var curRow = rh.getRow(node);

    // is at a empty row without row element, then create a row
    // or texts has no common parent row
    if (!curRow && !texts.length) {
      var v = rh.newRow();
      var _newRow = rh.newRow({ br: true });
      v.appendChild(_newRow);
      _index2.default.insertHTML(rh, _newRow.outerHTML);
      var _s = rh.getSelection();
      texts.push(_s.focusNode);
    }
    if (!texts.length) {
      texts.push(curRow);
    }

    var container = rh.newRow();
    var quote = document.createElement('section');
    var quoteBlock = rh.newRow({ tag: 'div' });
    quoteBlock.setAttribute('data-editor-quote-block', rh.createRandomId('quoteblock'));
    quote.appendChild(quoteBlock);
    var id = rh.createRandomId('quote');
    quote.setAttribute('data-editor-quote', id);
    quote.setAttribute('contenteditable', 'false');
    var quoteRows = [];
    texts.forEach(function (text, index) {
      var curRow = rh.getRow(text);

      // create a row for text without row
      if (!curRow && text.nodeValue) {
        curRow = rh.newRow();
        curRow.appendChild(text);
      }
      if (curRow && !quoteRows.includes(curRow)) {
        quoteRows.push(curRow);
      }
    });
    var anchorRow = void 0;
    quoteRows.forEach(function (qr, index) {
      if (index !== quoteRows.length - 1) {
        quoteBlock.appendChild(qr);
        return;
      }
      quoteBlock.appendChild(qr.cloneNode(true));
      anchorRow = qr;
    });

    if (anchorRow.parentNode) {
      anchorRow.parentNode.replaceChild(quote, anchorRow);
    } else {
      // current row is created and has no parent
      var _v = rh.newRow();
      _v.appendChild(quote);
      rh.range.deleteContents();
      _index2.default['insertHTML'](rh, _v.innerHTML);
    }
    var curQuote = document.querySelector('[data-editor-quote=\'' + id + '\']');
    if (!curQuote.lastElementChild) return;
    rh.getSelection().collapse(curQuote.lastElementChild, curQuote.lastElementChild.innerText ? 1 : 0);
  },
  'initQuote': function initQuote(rh, arg) {
    document.addEventListener('keydown', function (e) {
      var quote = rh.findSpecialAncestor(e.target, '[data-editor-quote]');
      if (quote) {
        var s = rh.getSelection();
        var node = s.anchorNode;
        var ctn = node.innerText || node.nodeValue;
        if (e.keyCode === 13) {
          if (ctn.replace('\n', '') === '') {
            e.preventDefault();
            var newRow = rh.newRow({ br: true });
            rh.insertAfter(newRow, quote);
            if (node.parentNode.children.length > 1) {
              node.parentNode.removeChild(node);
            }
            rh.getSelection().collapse(newRow, 0);
            return;
          }
        }
        if (e.keyCode === 8) {

          // cursor may at row or at quote block , so there are two judgement conditions
          if (s.isCollapsed && (s.focusOffset === 0 || node.contains(s.baseNode) && rh.isEmptyNode(s.baseNode) && s.focusOffset === 1)) {
            var rows = Array.from(quote.querySelector('[data-editor-quote-block]').children);

            // empty quote
            if (!rows.length) {
              e.preventDefault();
              var _newRow2 = rh.newRow({ br: true });
              quote.parentNode.replaceChild(_newRow2, quote);
              rh.getSelection().collapse(_newRow2, 1);
              return;
            }

            rows.forEach(function (row, index) {

              // row and node has father-child relationship
              if ((row === node || row.contains(node) || node.contains(row)) && index === 0) {

                // only have one empty row in quote,then delete the quote
                if (rows.length === 1 && rh.isEmptyNode(row)) {
                  e.preventDefault();
                  var _newRow3 = rh.newRow({ br: true });
                  quote.parentNode.replaceChild(_newRow3, quote);
                  rh.getSelection().collapse(_newRow3, 1);
                  return;
                } else {

                  // first row have content and previous element exist, then move cursor to previous element
                  var preRow = rh.getPreviousRow(quote);
                  if (preRow) {
                    e.preventDefault();

                    // previous row is a quote
                    if (preRow.getAttribute('data-editor-quote')) {
                      var lastEle = Array.from(preRow.querySelector('[data-editor-quote-block]').children).pop();
                      try {
                        rh.getSelection().collapse(lastEle, 1);
                      } catch (e) {
                        rh.getSelection().collapse(lastEle, 0);
                      }
                      return;
                    }

                    // previous row is a todo
                    if (preRow.getAttribute('data-editor-todo')) {
                      var input = preRow.querySelector('[type="text"]');
                      if (input) {
                        e.preventDefault();
                        input.focus();
                      }
                      return;
                    }

                    // previous row is a row
                    try {
                      rh.getSelection().collapse(preRow, 1);
                    } catch (e) {
                      rh.getSelection().collapse(preRow, 0);
                    }
                    return;
                  }
                }
              }
            });
          }
        }
      }
    });
  }
};

exports.default = q;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var t = {
  'todo': function todo(rh, data) {
    var row = rh.newRow({
      br: true
    });
    var curRow = rh.getRow(rh.range.commonAncestorContainer);

    // a empty row without row element, create a row element
    if (!curRow) {
      var v = rh.newRow();
      var newRow = rh.newRow({ br: true });
      v.appendChild(newRow);
      _index2.default.insertHTML(rh, newRow.outerHTML);
      var s = rh.getSelection();
      curRow = s.focusNode;
    }

    // insert todo after this row
    var afterWhich = rh.getRow(data.insertAfter);

    // is afterWhich is a empty row, just insert todo at current row
    if (afterWhich && rh.isEmptyRow(afterWhich)) {
      afterWhich = null;
    }
    if (afterWhich) {
      var targetIndex = void 0;
      var startIndex = void 0;
      var list = afterWhich.parentNode.childNodes;
      list.forEach(function (child, index) {
        if (child === afterWhich) {
          startIndex = index;
          if (startIndex === list.length - 1) {
            targetIndex = list.length;
          }
          return;
        }
        if (startIndex !== undefined && targetIndex === undefined) {
          if (child && child.getAttribute('data-editor-todo')) {
            targetIndex = index;
          }
        }
      });
      targetIndex = targetIndex === undefined ? startIndex + 1 : targetIndex;
      afterWhich.parentNode.insertBefore(row, list[targetIndex]);
      rh.getSelection().collapse(row, 0);
    } else {

      // insert todo at current row if it is empty
      if (rh.isEmptyRow(curRow)) {
        rh.collapseAtRow(curRow);
        row = curRow;
      } else {
        rh.range.commonAncestorContainer.appendChild(row, 0);
        rh.getSelection().collapse(row, 0);
      }
    }
    var todoId = rh.createRandomId('todo');
    _index2.default['insertHTML'](rh, '<' + _constantConfig2.default.ROW_TAG + ' data-editor-todo=' + todoId + ' contenteditable="false"><input type="checkbox"/><input type="text" placeholder="' + data.placeholder + '"></' + _constantConfig2.default.ROW_TAG + '><br>');
    document.querySelector('[data-editor-todo=\'' + todoId + '\'] input[type=text]').focus();
    row.parentNode.removeChild(row);
    t['initTodo'](rh, data);
  },

  // init todo logic
  'initTodo': function initTodo(rh, data) {
    var checkboxs = document.querySelectorAll('[data-editor-todo]');
    checkboxs.forEach(function (c, index) {
      var btn = c.querySelector('[type=checkbox]');
      var ctn = c.querySelector('[type=text]');
      if (c.init) return;
      ctnCheckedLogic();

      function ctnCheckedLogic() {
        ctn.value = ctn.value || ctn.getAttribute('data-editor-value');
        ctn.setAttribute('data-editor-value', ctn.value);
        if (btn.checked) {
          ctn.style.textDecoration = 'line-through';
          btn.setAttribute('checked', '');
        } else {
          ctn.style.textDecoration = 'none';
          btn.removeAttribute('checked');
        }
      }

      btn.onchange = function (e) {
        ctnCheckedLogic();
        if (rh.editor && rh.editor.$refs && rh.editor.$refs.content) {
          rh.editor.$emit('change', rh.editor.$refs.content.innerHTML);
        }
      };
      ctn.oninput = function (e) {
        ctn.setAttribute('data-editor-value', e.target.value);
      };
      ctn.onkeydown = ctn.onkeydown || function (e) {
        if (![13, 8].includes(e.keyCode)) return;
        var row = c.nextSibling;
        if (e.keyCode === 13) {
          if (ctn.value === '') {
            e.preventDefault();
            return deleteTodo();
          }
          t['todo'](rh, {
            insertAfter: c,
            placeholder: data.placeholder
          });
        } else if (e.keyCode === 8) {
          if (ctn.value === '') {
            e.preventDefault();
            e.stopPropagation();
            deleteTodo();
          }
        }

        function deleteTodo() {
          var newRow = rh.newRow({ br: true });
          c.parentNode.replaceChild(newRow, c);
          rh.getSelection().collapse(newRow, 1);
        }
      };
      c.init = true;
    });
  }
};

exports.default = t;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, e) {
  var node = rh.range.commonAncestorContainer;
  if (node.nodeType === Node.TEXT_NODE) {

    // to keep text wrap by a row
    if (node.parentNode === rh.editZone()) {
      _index2.default.formatBlock(rh, _constantConfig2.default.ROW_TAG);
      return;
    }
  }
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, e) {
  // restore first row
  var s = rh.getSelection();
  var node = s.baseNode;
  var value = node.nodeValue || node.innerText;
  // console.log('delete', node, e)
  var curRange = rh.getRange() || rh.range;

  // cancel list when li is empty
  if (rh.findSpecialAncestor(node, 'li') && rh.range.startOffset === 0) {
    e.preventDefault();
    var ulOrOl = rh.findSpecialAncestor(node, 'ul') || rh.findSpecialAncestor(node, 'ol');
    if (ulOrOl.nodeName === 'UL') {
      _index2.default['insertUnorderedList'](rh, e);
    }
    if (ulOrOl.nodeName === 'OL') {
      _index2.default['insertOrderedList'](rh, e);
    }
    return;
  }
  var row = rh.getRow(node);

  // node is edit zone
  if (!row) {
    e.preventDefault();
    return afterDelete(rh);
  }

  // empty row
  if (rh.range.collapsed && (node === row && rh.range.startOffset === 0 || row.innerHTML.replace(/<br>/g, '') === '' && rh.range.startOffset === 1)) {
    var firstRow = rh.editZone().firstElementChild;

    // first row cancel outdent
    if (firstRow === row) {
      _index2.default.outdent(rh, null);
      e.preventDefault();
      return;
    }
  }

  // row has content, cursor is at at start of the node, do outdent
  if (rh.range.collapsed && value && rh.range.startOffset === 0 && (node === row.fistElementChild || node === row.firstChild)) {
    var outdentResult = _index2.default.outdent(rh, null);
    if (outdentResult === 'NO_NEED_OUTDENT') {
      return;
    }
    e.preventDefault();
    return;
  }

  // empty row
  if (row.innerHTML.replace(/<br>/g, '') === '') {
    // get previous row with content
    var preRow = rh.getPreviousRow(row);

    // cursor focus on previous row's input if previous row is todo
    if (preRow && preRow.dataset && preRow.dataset.editorTodo) {
      row.parentNode.removeChild(row);
      var input = preRow.querySelector('input[type="text"]');
      if (input) {
        e.preventDefault();
        input.focus();
      }
      e.preventDefault();
      return;
    }
  }
  e.preventDefault();
  return afterDelete(rh);
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// handle &#8203; after delete
function afterDelete(rh) {
  var deleteInterval = window.setInterval(function () {
    var s = rh.getSelection();
    var focusNode = s.focusNode;
    var ctn = typeof focusNode.innerText === 'string' ? focusNode.innerText : focusNode.nodeValue;
    if (typeof ctn === 'string' && /\u200B/.test(ctn) && ctn.replace(/\u200B/g, '') === '') {
      document.execCommand('delete', false);
    } else {
      document.execCommand('delete', false);
      window.clearInterval(deleteInterval);
    }
  });

  // if edit zone is empty, create a row
  if (rh.isEmptyNode(rh.editZone()) && !rh.getRows().length) {
    var row = rh.newRow({ br: true });
    rh.editZone().appendChild(row);
    rh.getSelection().collapse(row, 1);
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var texts = rh.getAllTextNodesInRange();
  if (!texts.length) {
    var s = rh.getSelection();
    if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
      texts.push(s.baseNode);
    } else {
      document.execCommand('insertHTML', false, '&#8203;');
      if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
        texts.push(s.baseNode);
      }
    }
  }
  texts.forEach(function (text) {
    var curRow = rh.getRow(text);
    if (!curRow) {
      var newRow = rh.newRow();
      newRow.innerText = text.nodeValue;
      var nextSibling = text.nextSibling;
      text.parentNode.replaceChild(newRow, text);
      if (nextSibling && nextSibling.nodeName === 'BR') {
        nextSibling.parentNode.removeChild(nextSibling);
      }
    }
    document.execCommand('justifyRight', false);
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var texts = rh.getAllTextNodesInRange();
  if (!texts.length) {
    var s = rh.getSelection();
    if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
      texts.push(s.baseNode);
    } else {
      document.execCommand('insertHTML', false, '&#8203;');
      if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
        texts.push(s.baseNode);
      }
    }
  }
  texts.forEach(function (text) {
    var curRow = rh.getRow(text);
    if (!curRow) {
      var newRow = rh.newRow();
      newRow.innerText = text.nodeValue;
      var nextSibling = text.nextSibling;
      text.parentNode.replaceChild(newRow, text);
      if (nextSibling && nextSibling.nodeName === 'BR') {
        nextSibling.parentNode.removeChild(nextSibling);
      }
    }
    document.execCommand('justifyLeft', false);
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, arg) {
  var texts = rh.getAllTextNodesInRange();
  if (!texts.length) {
    var s = rh.getSelection();
    if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
      texts.push(s.baseNode);
    } else {
      document.execCommand('insertHTML', false, '&#8203;');
      if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
        texts.push(s.baseNode);
      }
    }
  }
  texts.forEach(function (text) {
    var curRow = rh.getRow(text);
    if (!curRow) {
      var newRow = rh.newRow();
      newRow.innerText = text.nodeValue;
      var nextSibling = text.nextSibling;
      text.parentNode.replaceChild(newRow, text);
      if (nextSibling && nextSibling.nodeName === 'BR') {
        nextSibling.parentNode.removeChild(nextSibling);
      }
    }
    document.execCommand('justifyCenter', false);
  });
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _assistMethods = __webpack_require__(10);

var _assistMethods2 = _interopRequireDefault(_assistMethods);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = {
  /**
   * func add every elements of extArr to sourceArr.
   * @param sourceArr
   * @param extArr
   */
  mergeArray: function mergeArray(sourceArr, extArr) {
    // note: Array.prototype.push.apply(arr1,arr2) is unreliable
    extArr.forEach(function (el) {
      sourceArr.push(el);
    });
  },

  /**
   * find all the descendant text nodes of a element
   * @param ancestor
   */
  getDescendantTextNodes: function getDescendantTextNodes(ancestor) {
    if (ancestor.nodeType === Node.TEXT_NODE) {
      return [ancestor];
    }
    var textNodes = [];
    if (!ancestor.hasChildNodes()) {
      return textNodes;
    }
    var childNodes = ancestor.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      var node = childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(node));
      }
    }
    return textNodes;
  },

  /**
   * func find all the descendant text nodes of an ancestor element that before the specify end element,
   * the ancestor element must contains the end element.
   * @param ancestor
   * @param endEl
   */
  getBeforeEndDescendantTextNodes: function getBeforeEndDescendantTextNodes(ancestor, endEl) {
    var textNodes = [];
    var endIndex = 0;
    for (var i = 0; i < ancestor.childNodes.length; i++) {
      if (ancestor.childNodes[i].contains(endEl)) {
        endIndex = i;
        break;
      }
    }

    for (var _i = 0; _i <= endIndex; _i++) {
      var node = ancestor.childNodes[_i];
      if (node === endEl) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(node));
      } else if (_i === endIndex) {
        if (node.nodeType === Node.TEXT_NODE) {
          textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          m.mergeArray(textNodes, m.getBeforeEndDescendantTextNodes(node, endEl));
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(node));
      }
    }
    return textNodes;
  },

  /**
   * func find all the descendant text nodes of an ancestor element that after the specify start element,
   * the ancestor element must contains the start element.
   * @param ancestor
   * @param startEl
   */
  getAfterStartDescendantTextNodes: function getAfterStartDescendantTextNodes(ancestor, startEl) {
    var textNodes = [];
    var startIndex = 0;
    for (var i = 0; i < ancestor.childNodes.length; i++) {
      if (ancestor.childNodes[i].contains(startEl)) {
        startIndex = i;
        break;
      }
    }

    for (var _i2 = startIndex; _i2 < ancestor.childNodes.length; _i2++) {
      var node = ancestor.childNodes[_i2];
      if (node === startEl) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(node));
      } else if (_i2 === startIndex) {
        if (node.nodeType === Node.TEXT_NODE) {
          textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          m.mergeArray(textNodes, m.getAfterStartDescendantTextNodes(node, startEl));
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(node));
      }
    }
    return textNodes;
  },

  /**
   * func get the closest parent block node of a text node.
   * @param node
   * @return {Node}
   */
  getParentBlockNode: function getParentBlockNode(node) {
    var blockNodeNames = ['DIV', 'P', 'SECTION', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'OL', 'UL', 'LI', 'TR', 'TD', 'TH', 'TBODY', 'THEAD', 'TABLE', 'ARTICLE', 'HEADER', 'FOOTER', 'BLOCKQUOTE'];
    var container = node;
    while (container) {
      if (blockNodeNames.includes(container.nodeName)) {
        break;
      }
      container = container.parentNode;
    }
    return container;
  },
  isInlineElement: function isInlineElement(node) {
    var inlineNodeNames = ['A', 'ABBR', 'ACRONYM', 'B', 'CITE', 'CODE', 'EM', 'I', 'FONT', 'IMG', 'S', 'SMALL', 'SPAN', 'STRIKE', 'STRONG', 'U', 'SUB', 'SUP'];
    return inlineNodeNames.includes(node.nodeName);
  },
  isInlineOrText: function isInlineOrText(node) {
    var isInline = m.isInlineElement(node);
    var isText = node.nodeType === Node.TEXT_NODE;
    return isInline || isText;
  },

  /*
   * find all specify nodes in an ancestor through search opinions(unique attributes)
   * @param node
   * @param {obj}
   *     must have key 'tagName'
   * @return {arr}
   **/
  getAllSpecifyNode: function getAllSpecifyNode(ancestor, searchOpinion) {
    var targetTagName = searchOpinion.tagName;
    delete searchOpinion.tagName;
    var tags = ancestor.querySelectorAll(targetTagName);
    var result = [];
    tags.forEach(function (tag) {
      var opinionKeys = Object.keys(searchOpinion);
      var pass = true;
      opinionKeys.forEach(function (opinion) {
        var a = tag.getAttribute(opinion);
        if (tag.getAttribute(opinion) !== searchOpinion[opinion]) {
          pass = false;
        }
      });
      if (pass) {
        result.push(tag);
      }
    });
    return result;
  },

  /*
   * func find the number of nesting ancestor which has same node name
   * @param {node} current node
   * @param {str} ancestor's tag name
   * @return {num} number
   **/
  howManyNestAncestorSameTag: function howManyNestAncestorSameTag(node, ancestorNodeName) {
    var num = 0;
    ancestorNodeName = ancestorNodeName.toUpperCase();
    while (node && node !== _assistMethods2.default.editZone()) {
      if (node.nodeName === ancestorNodeName) {
        num++;
      }
      node = node.parentNode;
    }
    return num;
  },


  /*
   * find an ancestor element through selector
   * @param {node} start at node
   * @param {str} ancestor element's selector
   * @param {boolean} either return first eligible element or last eligible element
   *  default: true
   * @param {node} searching stop at the border element
   *  default: editor's content zone
   * @return target ancestor element
   **/
  findSpecialAncestor: function findSpecialAncestor(node, selector) {
    var firstOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var border = arguments[3];

    var result = void 0;
    var contentZone = _assistMethods2.default.editZone();
    border = border || contentZone;
    while (node && (firstOne ? !result : true) && node !== border) {
      if (!border || !border.contains(node)) return;
      var ancestors = Array.from(node.parentNode.querySelectorAll(selector));
      if (ancestors.length) {
        if (ancestors.includes(node)) {
          result = node;
        }
        node = node.parentNode;
      } else {
        node = node.parentNode;
      }
    }
    return result;
  },

  /*
   * find target style
   **/
  findSpecialAncestorStyle: function findSpecialAncestorStyle(node, styleName) {
    var firstOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var border = arguments[3];

    var result = void 0;
    var contentZone = _assistMethods2.default.editZone();
    border = border || contentZone;
    while (node && (firstOne ? !result : true) && node !== border) {
      if (!border || !border.contains(node)) return;
      if (node.style && node.style[styleName]) {
        result = node.style[styleName];
      }
      node = node.parentNode;
    }
    return result;
  },

  /*
   * find an ancestor element through style name and style value
   * @param style {obj} styleName: styleValue
   * @return
   **/
  findSpecialAncestorByStyle: function findSpecialAncestorByStyle(node, style) {
    var firstOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var border = arguments[3];

    var result = void 0;
    var contentZone = _assistMethods2.default.editZone();
    border = border || contentZone;

    var _loop = function _loop() {
      if (!border || !border.contains(node)) return {
          v: void 0
        };
      var parent = node.parentNode;
      var isTarget = true;
      Object.keys(style).forEach(function (styleName) {
        if (style[styleName] !== parent.style[styleName]) {
          isTarget = false;
        }
      });
      if (isTarget) {
        result = parent;
        node = parent;
      } else {
        node = parent;
      }
    };

    while (node && (firstOne ? !result : true) && node !== border) {
      var _ret = _loop();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    return result;
  },
  getNodeNum: function getNodeNum(ancestor, nodeName) {
    return ancestor.querySelectorAll(nodeName).length;
  },

  /**
   * find all the text nodes in range
   */
  getAllTextNodesInRange: function getAllTextNodesInRange() {
    var startContainer = this.range.startContainer;
    var endContainer = this.range.endContainer;
    var rootEl = this.range.commonAncestorContainer;
    var textNodes = [];

    if (startContainer === endContainer) {
      if (startContainer.nodeType === Node.TEXT_NODE) {
        return [startContainer];
      }
      var childNodes = startContainer.childNodes;
      for (var i = this.range.startOffset; i < this.range.endOffset; i++) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(childNodes[i]));
      }
      return textNodes;
    }

    var startIndex = 0;
    var endIndex = 0;
    for (var _i3 = 0; _i3 < rootEl.childNodes.length; _i3++) {
      var node = rootEl.childNodes[_i3];
      if (node.contains(startContainer)) {
        startIndex = _i3;
      }
      if (node.contains(endContainer)) {
        endIndex = _i3;
      }
    }

    for (var _i4 = startIndex; _i4 <= endIndex; _i4++) {
      var _node = rootEl.childNodes[_i4];
      if (_i4 === startIndex) {
        if (_node.nodeType === Node.TEXT_NODE) {
          textNodes.push(_node);
        } else if (_node.nodeType === Node.ELEMENT_NODE) {
          m.mergeArray(textNodes, m.getAfterStartDescendantTextNodes(_node, startContainer));
        }
      } else if (_i4 === endIndex) {
        if (_node.nodeType === Node.TEXT_NODE) {
          textNodes.push(_node);
        } else if (_node.nodeType === Node.ELEMENT_NODE) {
          m.mergeArray(textNodes, m.getBeforeEndDescendantTextNodes(_node, endContainer));
        }
      } else if (_node.nodeType === Node.TEXT_NODE) {
        textNodes.push(_node);
      } else if (_node.nodeType === Node.ELEMENT_NODE) {
        m.mergeArray(textNodes, m.getDescendantTextNodes(_node));
      }
    }
    return textNodes;
  },

  /*
   * get the row which contains target element
   * @param {node} target element
   * @return {node} row
   **/
  getRow: function getRow(node) {
    var rows = Array.from(_assistMethods2.default.editZone().children);
    var result = void 0;
    rows.forEach(function (row) {
      if (row.contains(node) || row === node) {
        result = row;
      }
    });
    return result;
  },
  textToRow: function textToRow(node) {
    if (node.parentNode === _assistMethods2.default.editZone() && node.nodeType === Node.TEXT_NODE) {
      document.execCommand('formatBlock', false, _constantConfig2.default.ROW_TAG_UPPERCASE);
    }
    return node;
  },

  /*
   * get row, if there's not, create one
   **/
  forceGetRow: function forceGetRow(node) {
    node = m.textToRow(node);
    return m.getRow(node);
  },

  /*
   * return all rows
   **/
  getRows: function getRows() {
    return Array.from(_assistMethods2.default.editZone().children);
  },

  /*
   * whether current node is a row
   **/
  isRow: function isRow(node) {
    var rows = Array.from(_assistMethods2.default.editZone().children);
    return rows.includes(node);
  },

  /*
   * create a wrapper for inline element in same row
   **/
  createWrapperForInline: function createWrapperForInline(node, wrapperNodeName) {
    var seperateByBr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!m.isInlineOrText(node)) return node;
    var elements = [node];
    searchLeft();
    searchRight();
    var newRow = document.createElement(wrapperNodeName);
    elements.forEach(function (ele, index) {
      if (index !== elements.length - 1) {
        newRow.appendChild(ele);
        return;
      }
      var lastOne = ele.cloneNode(true);
      newRow.appendChild(lastOne);
      ele.parentNode.replaceChild(newRow, ele);
    });

    if (seperateByBr) {
      handlerBr(newRow.previousSibling, true);
      handlerBr(newRow.nextSibling, false);
    }
    return newRow;

    function handlerBr(node, direction) {
      if (node && node.nodeName === 'BR') {
        var nextDir = direction ? 'previousSibling' : 'nextSibling';
        var targetNode = node[nextDir];
        if (!targetNode) return;
        if (targetNode.nodeName === 'BR') {
          return handlerBr(targetNode, direction);
        }
        m.createWrapperForInline(targetNode, wrapperNodeName, seperateByBr);
      }
    }
    function searchLeft() {
      while (elements[0].previousSibling && m.isInlineOrText(elements[0].previousSibling)) {
        elements.unshift(elements[0].previousSibling);
      }
    }
    function searchRight() {
      while (elements[elements.length - 1].nextSibling && m.isInlineOrText(elements[elements.length - 1].nextSibling)) {
        elements.push(elements[elements.length - 1].nextSibling);
      }
    }
  },

  /*
   * get node's previous row which has content
   **/
  getPreviousRow: function getPreviousRow(node) {
    var row = m.getRow(node);
    var preRow = void 0;
    var rows = m.getRows();
    var rowIndex = null;
    rows.forEach(function (curRow, index) {
      if (curRow === row) {
        rowIndex = index;
      }
      if (rowIndex === null) {
        if (curRow.innerHTML !== '') {
          preRow = curRow;
        }
      }
    });
    return preRow;
  },

  /*
   * whether target row is empty
   **/
  isEmptyRow: function isEmptyRow(node) {
    var row = m.isRow(node) ? node : m.getRow(node);
    if (row.getAttribute) {
      if (typeof row.getAttribute('data-editor-todo') === 'string' || typeof row.getAttribute('data-editor-quote') === 'string') {
        return false;
      }
    }
    return row.innerText.replace('\n', '').replace(/\u200B/g, '') === '';
  },

  /*
   * whether target node is empty
   **/
  isEmptyNode: function isEmptyNode(node) {
    var ctn = typeof node.innerText === 'string' ? node.innerText : node.nodeValue;
    if (typeof ctn !== 'string') return;
    return ctn.replace('\n', '').replace(/\u200B/g, '') === '';
  },

  /*
   * try to collapse at target row
   **/
  collapseAtRow: function collapseAtRow(node) {
    var row = m.isRow(node) ? node : m.getRow(node);
    var s = _assistMethods2.default.getSelection();
    try {
      s.collapse(row, 1);
    } catch (e) {
      s.collapse(row, 0);
    }
  },

  /*
   * searching nested ancestors till border to find the specified tagName
   * @param {node} from which node
   * @param {arr} includes tag names of target tag
   * @param {node} search border
   * @return {arr}
   **/
  findExistTagTillBorder: function findExistTagTillBorder(node, tagNamelist, border) {
    var result = [];
    var contentZone = _assistMethods2.default.editZone();
    border = border || contentZone;
    while (node && node !== border) {
      if (!border || !border.contains(node)) return;
      var nodeName = node.nodeName;
      if (nodeName && tagNamelist.includes(nodeName)) {
        if (!result.includes(nodeName)) {
          result.push(nodeName);
        }
      }
      node = node.parentNode;
    }
    return result;
  },

  /*
   * return a nested DOM data through a tag name list
   **/
  createNestDOMThroughList: function createNestDOMThroughList(list) {
    var result = {
      dom: null,
      deepestId: null,
      deepest: null
    };
    list.forEach(function (tag, index) {
      var ele = document.createElement(tag);
      result[index] = ele;
      var parent = result[index - 1];
      if (parent) {
        parent.appendChild(ele);
      }
      if (index === list.length - 1) {
        result.deepest = ele;
        result.deepestId = _assistMethods2.default.createRandomId('deepest');
        result.dom = result['0'];
        ele.id = result.deepestId;
        ele.innerHTML = '&#8203;';
      }
    });
    return result;
  }
};

exports.default = m;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(7, function() {
			var newContent = __webpack_require__(7);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-vue-editor\" :class=\"{'full-screen':fullScreen}\" :style=\"{'z-index':zIndex}\">\n    <nav class=\"toolbar\" :style=\"{'z-index':zIndex+1}\" ref=\"toolbar\" data-editor=\"toolbar\">\n        <ul class=\"tabs\">\n            <template v-for=\"module in modules\">\n              <template v-if=\"!module.hasTab\">\n                <li :title=\"locale[module.i18n]\" class=\"tab btn\" :class=\"{highLight: module.moduleInspectResult, forbidden: module.forbidden}\" @click=\"activeModule(module)\">\n                  <span class=\"icon\" :class=\"module.icon\"></span>\n                </li>\n              </template>\n              <template v-else>\n                <keep-alive>\n                  <li class=\"tab\" :is=\"module.tabName\" :activeItem=\"module.moduleInspectResult\" :forbidden=\"module.forbidden\" :class=\"{highLight: module.moduleInspectResult, forbidden: module.forbidden}\" @click=\"activeModule(module)\"></li>\n                </keep-alive>\n              </template>\n            </template>\n        </ul>\n    </nav>\n\n    <p class='content' :is=\"constantConfig.ROW_TAG\" :spellcheck=\"spellcheck\" ref=\"content\" id=\"editor-content\" :style=\"contentStyle\" data-editor=\"content\"\n         contenteditable=\"plaintext-only\" v-drag-pic=\"handleDragPic\">\n    </p>\n</div>\n");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * directive drag and drop pic
 **/

exports.default = {
  bind: function bind(el, binding, vnode) {
    var editor = vnode.context;
    var onDragOver = function onDragOver(e) {
      e.preventDefault();
      var selection = window.getSelection ? window.getSelection() : document.getSelection();
      try {
        selection.collapse(e.target, 1);
      } catch (e) {
        selection.collapse(e.target, 0);
      }
      editor.saveCurrentRange();
      editor.moduleInspect();
    };
    var onDragLeave = function onDragLeave(e) {
      e.preventDefault();
    };

    var onDrop = function onDrop(e) {
      var selection = window.getSelection ? window.getSelection() : document.getSelection();
      if (e.dataTransfer && e.dataTransfer.files) {
        e.preventDefault();
        console.log(e.target);
        var files = e.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
          var curFile = files[i];
          if (curFile.size && curFile.type.includes('image')) {
            binding.value(curFile);
          }
        }
      }
    };

    // el.addEventListener('dragenter', onDragEnter, false)
    el.addEventListener('dragover', onDragOver, false);
    el.addEventListener('dragleave', onDragLeave, false);
    el.addEventListener('drop', onDrop, false);

    el.__dragOverHandler = onDragOver;
    el.__dragLeaveHandler = onDragLeave;
    el.__dropHandler = onDrop;
  },
  unbind: function unbind(el, binding) {
    el.removeEventListener('dragover', el.__dragOverHandler);
    el.removeEventListener('dragleave', el.__dragLeaveHandler);
    el.removeEventListener('drop', el.__dropHandler);
    delete el.__dragOverHandler;
    delete el.__dragLeaveHandler;
    delete el.__dropHandler;
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (curModule, modules) {
  var result = [];
  var curExclude = curModule.exclude;
  if (Array.isArray(curExclude)) return curExclude;
  if (typeof curExclude === 'string') {
    var moduleNameList = [];
    modules.forEach(function (m) {
      if (m.name) {
        moduleNameList.push(m.name);
      }
    });
    moduleNameList = Array.from(new Set(moduleNameList));
    switch (curExclude) {
      // exclude all modules
      case 'ALL':
        result = moduleNameList;
        break;
      // exclude all modules but current module
      case 'ALL_BUT_MYSELF':
        result = moduleNameList;
        result.splice(result.indexOf(curModule.name), 1);
        break;
    }
  }
  return result;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    align: '对齐方式',
    image: '图片',
    list: '列表',
    link: '链接',
    unlink: '去除链接',
    table: '表格',
    font: '文字',
    'full screen': '全屏',
    text: '排版',
    eraser: '格式清除',
    info: '关于',
    color: '颜色',
    'please enter a url': '请输入地址',
    'create link': '创建链接',
    bold: '加粗',
    italic: '倾斜',
    underline: '下划线',
    'strike through': '删除线',
    subscript: '上标',
    superscript: '下标',
    heading: '标题',
    'font name': '字体',
    'font size': '文字大小',
    'left justify': '左对齐',
    'center justify': '居中',
    'right justify': '右对齐',
    'ordered list': '有序列表',
    'unordered list': '无序列表',
    'fore color': '前景色',
    'background color': '背景色',
    'row count': '行数',
    'column count': '列数',
    save: '确定',
    upload: '上传',
    progress: '进度',
    unknown: '未知',
    'please wait': '请稍等',
    error: '错误',
    abort: '中断',
    reset: '重置',
    hr: '分隔线',
    undo: '撤消',
    'line height': '行高',
    'exceed size limit': '超出大小限制'
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    align: 'align',
    image: 'image',
    list: 'list',
    link: 'link',
    unlink: 'unlink',
    table: 'table',
    font: 'font',
    'full screen': 'full screen',
    text: 'text',
    eraser: 'remove format',
    info: 'info',
    color: 'color',
    'please enter a url': 'please enter a url',
    'create link': 'create link',
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    'strike through': 'strike through',
    subscript: 'subscript',
    superscript: 'superscript',
    heading: 'heading',
    'font name': 'font name',
    'font size': 'font size',
    'left justify': 'left justify',
    'center justify': 'center justify',
    'right justify': 'right justify',
    'ordered list': 'ordered list',
    'unordered list': 'unordered list',
    'fore color': 'fore color',
    'background color': 'background color',
    'row count': 'row count',
    'column count': 'column count',
    save: 'save',
    upload: 'upload',
    progress: 'progress',
    unknown: 'unknown',
    'please wait': 'please wait',
    error: 'error',
    abort: 'abort',
    reset: 'reset',
    hr: 'horizontal rule',
    undo: 'undo',
    'line height': 'line height',
    'exceed size limit': 'exceed size limit'
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDZiMGY2YmU2MjI1MWE0NmY5YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9zdHlsZS5zdHlsIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9scnovZGlzdC9scnouYWxsLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9hc3Npc3QtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BvbHlmaWxsLWllLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsPzQ0M2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mdWxsLXNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9sZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pdGFsaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdW5kZXJsaW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3RvZG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcXVvdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL291dGRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluZXRocm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaWNvdXJ0LXRvZG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3Ivc3R5bGUuc3R5bD9kZDZiIiwid2VicGFjazovLy8uL3NyYy9zaG9ydGN1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5zZXJ0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2ZvbnRTaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9wYXN0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3VuZGVybGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvc3RyaWtlVGhyb3VnaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaXRhbGljLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9ib2xkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMva2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5UmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2p1c3RpZnlMZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5Q2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2hhbmRsZS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsPzViYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2RyYWctcGljLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vemgtY24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vZW4tdXMuanMiXSwibmFtZXMiOlsiY29tbWFuZHMiLCJhZGRTdHlsZSIsInJoIiwiYXJnIiwiZG9BZGQiLCJub2RlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInN0eWxlTmFtZSIsInRleHROb2RlcyIsImdldEFsbFRleHROb2Rlc0luUmFuZ2UiLCJsZW5ndGgiLCJyYW5nZSIsImNvbGxhcHNlZCIsImNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwicGFyZW50Tm9kZSIsImVkaXRab25lIiwibmV3Um93IiwidGFnIiwiaW5uZXJUZXh0Iiwibm9kZVZhbHVlIiwicmVwbGFjZUNoaWxkIiwic3RhcnRDb250YWluZXIiLCJlbmRDb250YWluZXIiLCJ0ZXh0Tm9kZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwidGV4dENvbnRlbnQiLCJjaGlsZE5vZGVzIiwiaXNJbmxpbmVFbGVtZW50Iiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3Vic3RyaW5nIiwiZnJvbnRQYXJ0IiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsImV4ZWNDb21tYW5kIiwiZWxlbWVudCIsInN1cnJvdW5kQ29udGVudHMiLCJwYXJlbnRCbG9jayIsImdldFBhcmVudEJsb2NrTm9kZSIsImxpbmVIZWlnaHQiLCJ2IiwicyIsImdldFNlbGVjdGlvbiIsImlubmVySFRNTCIsImhhc0NoaWxkTm9kZXMiLCJpIiwiY3VyTm9kZSIsImRlbGV0ZUNvbnRlbnRzIiwiaW5zZXJ0Tm9kZSIsImNvbGxhcHNlIiwibm9kZUxpc3QiLCJ3ZWlnaHRpbmciLCJ0ZXh0cyIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJkb0luZGVudCIsIm5vZGVOYW1lIiwiZmluZFNwZWNpYWxBbmNlc3RvciIsIlJPV19UQUciLCJpbmNsdWRlcyIsInB1c2giLCJ0eXBlIiwiY3VyTGV2ZWwiLCJob3dNYW55TmVzdEFuY2VzdG9yU2FtZVRhZyIsIk1BWF9JTkRFTlRfTEVWRUwiLCJST1dfVEFHX1VQUEVSQ0FTRSIsImN1clBlcmNlbnQiLCJJTkRFTlRfU1RZTEVfTkFNRSIsIk51bWJlciIsInJlcGxhY2UiLCJPVVRERU5UX1NUWUxFX05BTUUiLCJJTkRFTlRfV0lEVEhfUEVSQ0VOVCIsIm91dGRlbnRSZXN1bHQiLCJkb091dGRlbnQiLCJ0YXJnZXRJbmRlbnQiLCJzdGFydE5vZGUiLCJhbmNob3JOb2RlIiwicm93IiwiZ2V0Um93IiwiY3JlYXRlV3JhcHBlckZvcklubGluZSIsIm1heWJlSXNVbCIsImZpcnN0RWxlbWVudENoaWxkIiwibmV4dFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsImlzQ29sbGFwc2VkIiwiZWRpdG9yIiwibW9kdWxlc01hcCIsIm1vZHVsZUluc3BlY3RSZXN1bHQiLCJiciIsIm91dGVySFRNTCIsImluc2VydEltYWdlIiwiZm9udFNpemUiLCJkZWxldGUiLCJwYXN0ZSIsImVudGVyIiwia2V5ZG93biIsInVuZGVybGluZSIsInN0cmlrZVRocm91Z2giLCJib2xkIiwiaXRhbGljIiwianVzdGlmeUxlZnQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeVJpZ2h0IiwiYXNzaWduIiwibWl4aW4iLCJzb3VyY2UiLCJleHQiLCJrIiwiZGF0YVNyYyIsImRhdGFEZXNjIiwiaXNPYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRhIiwic2xpY2UiLCJtZXRob2RzIiwiaWQiLCJkYXRhc2V0IiwiZWRpdG9yUm93IiwiY3JlYXRlUmFuZG9tSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb250ZW50ZWRpdGFibGUiLCJ3aW5kb3ciLCJpbnNlcnRBZnRlciIsIm5ld0VsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50IiwibGFzdENoaWxkIiwicHJlZmZpeCIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsImVkaXRab25lX2NhY2hlIiwicXVlcnlTZWxlY3RvciIsInNldFJhbmdlQXQiLCJjaGVja0FsbCIsImNyZWF0ZVJhbmdlIiwiZW5kIiwic2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJnZXRSYW5nZSIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwiSW5zcGVjdG9yIiwibW9kdWxlTmFtZSIsInBhcmFtIiwiRXJyb3IiLCJ0YWdNYXAiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlcyIsImF0dHJpYnV0ZXMiLCJyZXN1bHQiLCJpbnNwZWN0UmVzdWx0IiwibW9kdWxlU3R5bGUiLCJjdXJWYWx1ZSIsIml0ZW0iLCJhY3RpdmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsIm1vZHVsZUF0dHIiLCJ2YWx1ZSIsIm5vZGVWYWwiLCJydW4iLCJmbiIsInJlbW92ZUR1cGxhdGUiLCJsaXN0Iiwic2FtZVN0eWxlTWFwIiwibSIsImZyb20iLCJTZXQiLCJhbSIsIm1lcmdlZFN0eWxlIiwiRWRpdG9yIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJyZXNlcnZlZE5hbWVzIiwibmFtZSIsImNvbXBvbmVudHMiLCJleHRlbmRNb2R1bGVzIiwibW9kdWxlIiwiY3VyQ29uZmlnIiwibW9kdWxlQ29uZmlnIiwiZm9yYmlkZGVuIiwiaW5zcGVjdCIsImluc3BlY3RvciIsImFkZCIsImJpbmQiLCJleGNsdWRlIiwidGFiIiwicHJvcHMiLCJhY3RpdmVJdGVtIiwiU3RyaW5nIiwiQm9vbGVhbiIsInRhYk5hbWUiLCJpY29ucyIsImljb24iLCJoYXNUYWIiLCJpMThuIiwiY3VzdG9tSTE4biIsImtleSIsImxhbmd1YWdlIiwibG9jYWxlIiwic2hvcnRjdXQiLCJrZXlDb2RlIiwic3BlbGxjaGVjayIsImNvbXBvIiwiY29uc3RhbnRDb25maWciLCJWdWUiLCJjb21wb25lbnQiLCJleHBvcnRzIiwiZGVmaW5lUHJvcGVydHkiLCJzZWFyY2hFbGVtZW50IiwiZnJvbUluZGV4IiwiVHlwZUVycm9yIiwibyIsImxlbiIsIm4iLCJtYXgiLCJhYnMiLCJUZXh0IiwiY29udGFpbnMiLCJ0ZW1wbGF0ZSIsIndhdGNoIiwibWFwIiwiaW5kZXgiLCJhbGlnbk1hcCIsImNob29zZWQiLCJzZXRBbGlnbiIsIiRwYXJlbnQiLCJzYXZlQ3VycmVudFJhbmdlIiwibW9kdWxlSW5zcGVjdCIsImNoYW5nZUFsaWduIiwicHJlX2luZGV4IiwiaXNOYU4iLCJ0YXJnZXRfaW5kZXgiLCJjb25maWciLCJmb250QXR0ck1hcCIsImN1ck1vZHVsZSIsInNob3dMaXN0Iiwic2hvd0xpc3RGbiIsIiRyZWZzIiwiY2xhc3NMaXN0IiwiY2hhbmdlQXR0ciIsInNldEZvbnROYW1lIiwic2V0SGVhZGluZyIsImhlYWRpbmciLCJtb3VudGVkIiwiZGVmYXVsdCIsImhhbmRsZXIiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiY2FuVXBsb2FkU2FtZUltYWdlIiwiaW1nT2NjdXB5TmV3Um93IiwibWF4U2l6ZSIsImNvbXByZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwicGljayIsImZpbGUiLCJjbGljayIsInByb2Nlc3MiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNob3ciLCJpc0luUXVvdGUiLCJhY3RpdmVNb2R1bGVzIiwiZm9yZUNvbG9yQ29uZmlnIiwiY29sb3JzIiwiY29sb3IiLCJjaGFuZ2VDb2xvciIsIm91dGRlbnQiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiaW5kZW50IiwiY29udGVudCIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiekluZGV4IiwiYXV0b0hlaWdodCIsImRpcmVjdGl2ZXMiLCJkcmFnUGljIiwiYWxsQWN0aXZlTW9kdWxlcyIsImZ1bGxTY3JlZW4iLCJwYXJlbnRFbCIsIiRlbCIsIm5leHRFbCIsImJvZHkiLCJjb21wdXRlZCIsImNvbnRlbnRTdHlsZSIsImlubmVySGVpZ2h0IiwidG9vbGJhciIsImNsaWVudEhlaWdodCIsImdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0iLCJjbGVhckFjdGl2ZU1vZHVsZUl0ZW0iLCJoYW5kbGVEcmFnUGljIiwiZHJhZyIsImVuYWJsZUZ1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImZvY3VzIiwiYmx1ciIsImNvbW1hbmQiLCJleGVjT25seSIsInJlc3RvcmVTZWxlY3Rpb24iLCIkZW1pdCIsInN0YXJ0IiwiVEVYVF9OT0RFIiwiYWN0aXZlTW9kdWxlIiwiJG5leHRUaWNrIiwidGV4dEFmdGV0RFIiLCJ0YWdSZXN1bHQiLCJ0YWdSZXN1bHRSRCIsInN0eWxlUmVzdWx0Iiwic3R5bGVSZXN1bHRSRCIsImF0dHJpYnV0ZVJlc3VsdCIsImF0dHJpYnV0ZVJlc3VsdFJEIiwiY29uY2F0IiwiZXhjbHVkZUxpc3QiLCJleGNNb2R1bGUiLCJleGMiLCJjdXJNb2R1bGVBY3RpdmVJdGVtIiwiY3JlYXRlZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbW9uIiwic2Nyb2xsSW50b1ZpZXciLCJ0b3VjaEhhbmRsZXIiLCJiZWZvcmUiLCJpc0VtcHR5Tm9kZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0VG9Sb3ciLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInVwZGF0ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3llZCIsIm90aGVyTm9kZSIsIlJhbmdlSGFuZGxlciIsIlJhbmdlIiwiYmVmb3JlTGlzdCIsImV4aXN0Q29tbWFuZCIsImN1c3RvbUNvbW1hbmQiLCJhZnRlckxpc3QiLCJhY3RpdmVzIiwicmV0dXJuRGF0YSIsIm9yaWdpbiIsIkZpbGUiLCJoYW5kbGVGaWxlIiwiZmllbGROYW1lIiwidGhlbiIsInJzdCIsInNpemUiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwiaW1nSWQiLCJpbnNlcnRCYXNlNjQiLCJiYXNlNjQiLCJjYXRjaCIsImVyciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVhZEFzRGF0YVVSTCIsImRvbSIsImN1clJvdyIsImZvcmNlR2V0Um93Iiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlcGxhY2VTcmNBZnRlclVwbG9hZEZpbmlzaCIsInJlcGxhY2VJbWciLCJkZWxldGVJbWdXaGVuVXBsb2FkRmFpbCIsImRlbGV0ZUltZyIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImJhc2VOb2RlIiwiaW5zZXJ0SFRNTCIsImZvY3VzTm9kZSIsImFuY2hvck9mZnNldCIsImZvY3VzT2Zmc2V0IiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJnZXREYXRhIiwib3JpZ2luYWxFdmVudCIsImNyZWF0ZVRleHRSYW5nZSIsInRleHRSYW5nZSIsInNlbCIsInRlbXBFbCIsIm1vdmVUb0VsZW1lbnRUZXh0Iiwic2VsZWN0IiwidWxPck9sIiwiYWZ0ZXJFbnRlciIsInNldFRpbWVvdXQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJub2RlQ3RuIiwiZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUiLCJleGlzdFN0eWxlIiwiZmluZEV4aXN0VGFnVGlsbEJvcmRlciIsImZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZSIsIm5ld0RPTSIsImNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdCIsImRlZXBlc3ROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWVwZXN0SWQiLCJuZXdUZXh0IiwicSIsInF1b3RlIiwiZ2V0RGVzY2VuZGFudFRleHROb2RlcyIsInF1b3RlUm93cyIsInJvd3MiLCJjaGlsZHJlbiIsInFyIiwiY29udGFpbmVyIiwicXVvdGVCbG9jayIsImFuY2hvclJvdyIsImNsb25lTm9kZSIsImN1clF1b3RlIiwibGFzdEVsZW1lbnRDaGlsZCIsImN0biIsInByZVJvdyIsImdldFByZXZpb3VzUm93IiwibGFzdEVsZSIsInBvcCIsImlucHV0IiwidCIsImFmdGVyV2hpY2giLCJpc0VtcHR5Um93IiwidGFyZ2V0SW5kZXgiLCJzdGFydEluZGV4IiwiY2hpbGQiLCJ1bmRlZmluZWQiLCJjb2xsYXBzZUF0Um93IiwidG9kb0lkIiwiY2hlY2tib3hzIiwicXVlcnlTZWxlY3RvckFsbCIsImMiLCJidG4iLCJjdG5DaGVja2VkTG9naWMiLCJjaGVja2VkIiwidGV4dERlY29yYXRpb24iLCJvbmNoYW5nZSIsIm9uaW5wdXQiLCJvbmtleWRvd24iLCJkZWxldGVUb2RvIiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0QmxvY2siLCJjdXJSYW5nZSIsImFmdGVyRGVsZXRlIiwiZmlyc3RSb3ciLCJmaXN0RWxlbWVudENoaWxkIiwiZWRpdG9yVG9kbyIsImRlbGV0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwiY2xlYXJJbnRlcnZhbCIsImdldFJvd3MiLCJtZXJnZUFycmF5Iiwic291cmNlQXJyIiwiZXh0QXJyIiwiZWwiLCJhbmNlc3RvciIsImdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJlbmRFbCIsImVuZEluZGV4IiwiZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJzdGFydEVsIiwiYmxvY2tOb2RlTmFtZXMiLCJpbmxpbmVOb2RlTmFtZXMiLCJpc0lubGluZU9yVGV4dCIsImlzSW5saW5lIiwiaXNUZXh0IiwiZ2V0QWxsU3BlY2lmeU5vZGUiLCJzZWFyY2hPcGluaW9uIiwidGFyZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJ0YWdzIiwib3BpbmlvbktleXMiLCJwYXNzIiwiYSIsIm9waW5pb24iLCJhbmNlc3Rvck5vZGVOYW1lIiwibnVtIiwic2VsZWN0b3IiLCJmaXJzdE9uZSIsImJvcmRlciIsImNvbnRlbnRab25lIiwiYW5jZXN0b3JzIiwiaXNUYXJnZXQiLCJnZXROb2RlTnVtIiwicm9vdEVsIiwiaXNSb3ciLCJ3cmFwcGVyTm9kZU5hbWUiLCJzZXBlcmF0ZUJ5QnIiLCJlbGVtZW50cyIsInNlYXJjaExlZnQiLCJzZWFyY2hSaWdodCIsImVsZSIsImxhc3RPbmUiLCJoYW5kbGVyQnIiLCJwcmV2aW91c1NpYmxpbmciLCJkaXJlY3Rpb24iLCJuZXh0RGlyIiwidGFyZ2V0Tm9kZSIsInVuc2hpZnQiLCJyb3dJbmRleCIsInRhZ05hbWVsaXN0IiwiZGVlcGVzdCIsImJpbmRpbmciLCJ2bm9kZSIsImNvbnRleHQiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJkYXRhVHJhbnNmZXIiLCJjb25zb2xlIiwibG9nIiwiY3VyRmlsZSIsIl9fZHJhZ092ZXJIYW5kbGVyIiwiX19kcmFnTGVhdmVIYW5kbGVyIiwiX19kcm9wSGFuZGxlciIsInVuYmluZCIsImN1ckV4Y2x1ZGUiLCJtb2R1bGVOYW1lTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJhbGlnbiIsImltYWdlIiwibGluayIsInVubGluayIsInRhYmxlIiwiZm9udCIsImVyYXNlciIsImluZm8iLCJzdWJzY3JpcHQiLCJzdXBlcnNjcmlwdCIsInNhdmUiLCJ1cGxvYWQiLCJwcm9ncmVzcyIsInVua25vd24iLCJlcnJvciIsImFib3J0IiwicmVzZXQiLCJociIsInVuZG8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUEyRDtBQUMzRDtBQUNBO0FBQ0EsV0FBRzs7QUFFSCxvREFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7Ozs7QUFJQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFDQUE2QjtBQUM3Qix5Q0FBaUM7O0FBRWpDLCtDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBc0M7QUFDdEM7QUFDQTtBQUNBLHFDQUE2QjtBQUM3QixxQ0FBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUEsNERBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtB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O0FBcUJYdlMsYUFBUyxTQXJCRTtBQXNCWCxpQkFBYSxXQXRCRjtBQXVCWCxpQkFBYSxXQXZCRjtBQXdCWCxvQkFBZ0IsY0F4Qkw7QUF5Qlgsc0JBQWtCLGdCQXpCUDtBQTBCWCxxQkFBaUIsZUExQk47QUEyQlgsb0JBQWdCLGNBM0JMO0FBNEJYLHNCQUFrQixnQkE1QlA7QUE2Qlgsa0JBQWMsWUE3Qkg7QUE4Qlgsd0JBQW9CLGtCQTlCVDtBQStCWCxpQkFBYSxXQS9CRjtBQWdDWCxvQkFBZ0IsY0FoQ0w7QUFpQ1h3UyxVQUFNLE1BakNLO0FBa0NYQyxZQUFRLFFBbENHO0FBbUNYQyxjQUFVLFVBbkNDO0FBb0NYQyxhQUFTLFNBcENFO0FBcUNYLG1CQUFlLGFBckNKO0FBc0NYQyxXQUFPLE9BdENJO0FBdUNYQyxXQUFPLE9BdkNJO0FBd0NYQyxXQUFPLE9BeENJO0FBeUNYQyxRQUFJLGlCQXpDTztBQTBDWEMsVUFBTSxNQTFDSztBQTJDWCxtQkFBZSxhQTNDSjtBQTRDWCx5QkFBcUI7QUE1Q1YsQyIsImZpbGUiOiJteS12dWUtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJteVZ1ZUVkaXRvclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJteVZ1ZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJteVZ1ZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVteVZ1ZUVkaXRvclwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVteVZ1ZUVkaXRvclwiXSA9IFxyXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0XHRpZihwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHR9IDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiBcdFx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xyXG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XHJcbiBcdFx0O1xyXG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRpZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xyXG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcclxuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcclxuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcclxuIFx0XHRcdFx0XHRcdHJldHVybjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0XHJcbiBcdFxyXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XHJcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMDA2YjBmNmJlNjIyNTFhNDZmOWFcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcclxuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XHJcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRpZighbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xyXG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcclxuIFx0XHRcdGlmKG1lLmhvdC5hY3RpdmUpIHtcclxuIFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xyXG4gXHRcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA8IDApXHJcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA8IDApXHJcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcclxuIFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcclxuIFx0XHR9O1xyXG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fTtcclxuIFx0XHRmb3IodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XHJcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicmVhZHlcIilcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcclxuIFx0XHRcdFx0dGhyb3cgZXJyO1xyXG4gXHRcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xyXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XHJcbiBcdFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcclxuIFx0XHRcdFx0XHRpZighaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9O1xyXG4gXHRcdHJldHVybiBmbjtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaG90ID0ge1xyXG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxyXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcclxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXHJcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcclxuIFx0XHJcbiBcdFx0XHQvLyBNb2R1bGUgQVBJXHJcbiBcdFx0XHRhY3RpdmU6IHRydWUsXHJcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxyXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxyXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxyXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGlmKCFsKSByZXR1cm4gaG90U3RhdHVzO1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxyXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXHJcbiBcdFx0fTtcclxuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XHJcbiBcdFx0cmV0dXJuIGhvdDtcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XHJcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcclxuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdERlZmVycmVkO1xyXG4gXHRcclxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXHJcbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XHJcbiBcdFx0dmFyIGlzTnVtYmVyID0gKCtpZCkgKyBcIlwiID09PSBpZDtcclxuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcclxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XHJcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XHJcbiBcdFx0XHRpZighdXBkYXRlKSB7XHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0XHRcdHJldHVybiBudWxsO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcclxuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcclxuIFx0XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcclxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcclxuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcclxuIFx0XHRcdHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xyXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xyXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxyXG4gXHRcdFx0cmV0dXJuO1xyXG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XHJcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0aWYoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xyXG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XHJcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcclxuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcclxuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XHJcbiBcdFx0aWYoIWRlZmVycmVkKSByZXR1cm47XHJcbiBcdFx0aWYoaG90QXBwbHlPblVwZGF0ZSkge1xyXG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cclxuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxyXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxyXG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xyXG4gXHRcdFx0fSkudGhlbihcclxuIFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpIHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcclxuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIGNiO1xyXG4gXHRcdHZhciBpO1xyXG4gXHRcdHZhciBqO1xyXG4gXHRcdHZhciBtb2R1bGU7XHJcbiBcdFx0dmFyIG1vZHVsZUlkO1xyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcclxuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xyXG4gXHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxyXG4gXHRcdFx0XHRcdGlkOiBpZFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZighbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9tYWluKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0aWYoIXBhcmVudCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcclxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXHJcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcclxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcclxuIFx0XHRcdFx0aWYoYS5pbmRleE9mKGl0ZW0pIDwgMClcclxuIFx0XHRcdFx0XHRhLnB1c2goaXRlbSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxyXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcclxuIFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIik7XHJcbiBcdFx0fTtcclxuIFx0XHJcbiBcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xyXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xyXG4gXHRcdFx0XHRpZihob3RVcGRhdGVbaWRdKSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xyXG4gXHRcdFx0XHRpZihyZXN1bHQuY2hhaW4pIHtcclxuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0c3dpdGNoKHJlc3VsdC50eXBlKSB7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIgaW4gXCIgKyByZXN1bHQucGFyZW50SWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25VbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EaXNwb3NlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcclxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoYWJvcnRFcnJvcikge1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0FwcGx5KSB7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0XHRcdFx0Zm9yKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSwgcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvRGlzcG9zZSkge1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXHJcbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xyXG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxyXG4gXHRcdFx0XHR9KTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XHJcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XHJcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0dmFyIGlkeDtcclxuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcclxuIFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRpZighbW9kdWxlKSBjb250aW51ZTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xyXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcclxuIFx0XHRcdFx0Y2IoZGF0YSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xyXG4gXHRcclxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXHJcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxyXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XHJcbiBcdFx0XHRcdGlmKCFjaGlsZCkgY29udGludWU7XHJcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XHJcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcclxuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcclxuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xyXG4gXHRcdFx0XHRcdFx0aWYoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcclxuIFx0XHJcbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcclxuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcclxuIFx0XHRcdFx0XHRcdGlmKGNiKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKGNhbGxiYWNrcy5pbmRleE9mKGNiKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gXHRcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xyXG4gXHRcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcclxuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGVycjIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmdpbmFsRXJyb3I6IGVyciwgLy8gVE9ETyByZW1vdmUgaW4gd2VicGFjayA0XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnIyO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxyXG4gXHRcdGlmKGVycm9yKSB7XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xyXG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgxMikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwNmIwZjZiZTYyMjUxYTQ2ZjlhIiwiaW1wb3J0IGluc2VydEltYWdlIGZyb20gJy4vaW5zZXJ0SW1hZ2UnXG5pbXBvcnQgZm9udFNpemUgZnJvbSAnLi9mb250U2l6ZSdcbmltcG9ydCBwYXN0ZSBmcm9tICcuL3Bhc3RlJ1xuaW1wb3J0IGVudGVyIGZyb20gJy4vZW50ZXInXG5pbXBvcnQgdW5kZXJsaW5lIGZyb20gJy4vdW5kZXJsaW5lJ1xuaW1wb3J0IHN0cmlrZVRocm91Z2ggZnJvbSAnLi9zdHJpa2VUaHJvdWdoJ1xuaW1wb3J0IGl0YWxpYyBmcm9tICcuL2l0YWxpYydcbmltcG9ydCBib2xkIGZyb20gJy4vYm9sZCdcbmltcG9ydCBxdW90ZSBmcm9tICcuL3F1b3RlJ1xuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IGtleWRvd24gZnJvbSAnLi9rZXlkb3duJ1xuaW1wb3J0IGRlbGV0ZU1vZHVsZSBmcm9tICcuL2RlbGV0ZSdcbmltcG9ydCBqdXN0aWZ5UmlnaHQgZnJvbSAnLi9qdXN0aWZ5UmlnaHQnXG5pbXBvcnQganVzdGlmeUxlZnQgZnJvbSAnLi9qdXN0aWZ5TGVmdCdcbmltcG9ydCBqdXN0aWZ5Q2VudGVyIGZyb20gJy4vanVzdGlmeUNlbnRlcidcbmltcG9ydCB7aXNPYmp9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCBjb21tYW5kcyA9IHtcbiAgLypcbiAgICogYWRkIGEgc3R5bGUgYXR0cmlidXRlIGluIHJhbmdlKGhhdmUgYnVnKVxuICAgKiBAcGFyYW0ge29ian0gYXJnIGluY2x1ZGVcbiAgICogICAgICBrZXk6IHN0eWxlIG5hbWVcbiAgICogICAgICB2YWx1ZTogc3R5bGUgdmFsdWVcbiAgICoqL1xuICBhZGRTdHlsZSAocmgsIGFyZykge1xuICAgIGZ1bmN0aW9uIGRvQWRkKG5vZGUpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xuICAgICAgICBub2RlLnN0eWxlW3N0eWxlTmFtZV0gPSBhcmdbc3R5bGVOYW1lXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqKGFyZykpIHJldHVyblxuICAgIGNvbnN0IHRleHROb2RlcyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIGlmICghdGV4dE5vZGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIGRvQWRkKG5vZGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiB0ZXh0Tm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgbm9kZSA9IHRleHROb2Rlc1swXS5wYXJlbnROb2RlXG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe3RhZzogJ3AnfSlcbiAgICAgICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dE5vZGVzWzBdLm5vZGVWYWx1ZVxuICAgICAgICAgIG5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dE5vZGVzWzBdKVxuICAgICAgICAgIGRvQWRkKG5ld1JvdylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkb0FkZChub2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRleHROb2Rlcy5sZW5ndGggPT09IDEgJiYgdGV4dE5vZGVzWzBdID09PSByaC5yYW5nZS5zdGFydENvbnRhaW5lclxuICAgICAgJiYgdGV4dE5vZGVzWzBdID09PSByaC5yYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHRleHROb2RlID0gdGV4dE5vZGVzWzBdXG4gICAgICBpZiAocmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgcmgucmFuZ2UuZW5kT2Zmc2V0ID09PSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoXG4gICAgICAgIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0LCByaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICBkb0FkZChzcGFuKVxuICAgICAgY29uc3QgZnJvbnRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZygwLCByaC5yYW5nZS5zdGFydE9mZnNldCkpXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcm9udFBhcnQsIHRleHROb2RlKVxuICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhyaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICByaC5yYW5nZS5zZXRTdGFydChzcGFuLCAwKVxuICAgICAgcmgucmFuZ2Uuc2V0RW5kKHNwYW4sIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaCgodGV4dE5vZGUpID0+IHtcbiAgICAgIGlmICh0ZXh0Tm9kZSA9PT0gcmgucmFuZ2Uuc3RhcnRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhcbiAgICAgICAgICAwLCByaC5yYW5nZS5zdGFydE9mZnNldClcbiAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Tm9kZSA9PT0gcmgucmFuZ2UuZW5kQ29udGFpbmVyKSB7XG4gICAgICAgIGlmIChyaC5yYW5nZS5lbmRPZmZzZXQgPT09IHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcocmgucmFuZ2UuZW5kT2Zmc2V0KVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGRvQWRkKHNwYW4pXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfSxcbiAgJ2Zvcm1hdEJsb2NrJyAocmgsIGFyZykge1xuICAgIGlmIChkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBmYWxzZSwgYXJnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIGhhY2tcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcpXG4gICAgcmgucmFuZ2Uuc3Vycm91bmRDb250ZW50cyhlbGVtZW50KVxuICAgIHJldHVyblxuICB9LFxuICAnbGluZUhlaWdodCcgKHJoLCBhcmcpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaCgodGV4dE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gcmguZ2V0UGFyZW50QmxvY2tOb2RlKHRleHROb2RlKVxuICAgICAgaWYgKHBhcmVudEJsb2NrKSB7XG4gICAgICAgIHBhcmVudEJsb2NrLnN0eWxlLmxpbmVIZWlnaHQgPSBhcmdcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9LFxuICAnaW5zZXJ0SFRNTCcgKHJoLCBhcmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgYXJnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbW1hbmRzWydmb3JjZUluc2VydEhUTUwnXShyaCwgYXJnKVxuICB9LFxuICAvKlxuICAgKiBpbnNlcnRIVE1MIHdvdWxkIGluc2VydCBET00gYXMgcm93J3MgY2hpbGRcbiAgICogZm9yY2VJbnNlcnRIVE1MIHdvdWxkIGluc2VydCBET00gYXMgYW5jaG9yTm9kZSBvZiByYW5nZSBcbiAgICoqL1xuICAnZm9yY2VJbnNlcnRIVE1MJyAocmgsIGFyZykge1xuICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgdi5pbm5lckhUTUwgPSBhcmdcbiAgICBpZiAodi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJOb2RlID0gdi5jaGlsZE5vZGVzW2ldXG4gICAgICAgIHJoLnJhbmdlLmRlbGV0ZUNvbnRlbnRzKClcbiAgICAgICAgcmgucmFuZ2UuaW5zZXJ0Tm9kZShjdXJOb2RlKVxuICAgICAgICBzLmNvbGxhcHNlKGN1ck5vZGUsIDEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICAnaW5kZW50JyAocmgsIGFyZykge1xuICAgIGxldCBub2RlTGlzdCA9IFtdXG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgd2VpZ2h0aW5nKHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIHdlaWdodGluZyh0ZXh0KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgLy8gY2FuY2VsIHRvZG8gaW5kZW50XG4gICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRvSW5kZW50KG5vZGUubm9kZU5hbWUsIG5vZGUpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHdlaWdodGluZyh0ZXh0KSB7XG4gICAgICBsZXQgbm9kZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgJ2xpJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgaWYgKG5vZGUgJiYgIW5vZGVMaXN0LmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0luZGVudCh0eXBlLCBub2RlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnTEknOlxuICAgICAgICAgIGxldCBjdXJMZXZlbCA9IHJoLmhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnKG5vZGUsICdVTCcpIHx8IHJoLmhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnKG5vZGUsICdPTCcpXG4gICAgICAgICAgaWYgKGN1ckxldmVsID49IGNvbnN0YW50Lk1BWF9JTkRFTlRfTEVWRUwpIGJyZWFrXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luZGVudCcsIGZhbHNlLCBhcmcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBjb25zdGFudC5ST1dfVEFHX1VQUEVSQ0FTRTpcbiAgICAgICAgICBsZXQgY3VyUGVyY2VudCA9IG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdIHx8ICcwJ1xuICAgICAgICAgIGN1clBlcmNlbnQgPSBOdW1iZXIoY3VyUGVyY2VudC5yZXBsYWNlKCclJywgJycpKVxuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50Lk9VVERFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIGlmIChjdXJQZXJjZW50IC8gY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlQgPj0gY29uc3RhbnQuTUFYX0lOREVOVF9MRVZFTCkge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSBjdXJQZXJjZW50ICsgJyUnXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSBjdXJQZXJjZW50ICsgY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlQgKyAnJSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdvdXRkZW50JyAocmgsIGFyZykge1xuICAgIGxldCBub2RlTGlzdCA9IFtdXG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgd2VpZ2h0aW5nKHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIHdlaWdodGluZyh0ZXh0KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgb3V0ZGVudFJlc3VsdFxuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBvdXRkZW50UmVzdWx0ID0gZG9PdXRkZW50KG5vZGUubm9kZU5hbWUsIG5vZGUpXG4gICAgfSlcbiAgICByZXR1cm4gb3V0ZGVudFJlc3VsdFxuXG4gICAgZnVuY3Rpb24gd2VpZ2h0aW5nKHRleHQpIHtcbiAgICAgIGxldCBub2RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCAnbGknKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICBpZiAobm9kZSAmJiAhbm9kZUxpc3QuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvT3V0ZGVudCh0eXBlLCBub2RlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnTEknOlxuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdvdXRkZW50JywgZmFsc2UsIGFyZylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFOlxuICAgICAgICAgIGxldCBjdXJQZXJjZW50ID0gbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gfHwgJzAnXG4gICAgICAgICAgY3VyUGVyY2VudCA9IE51bWJlcihjdXJQZXJjZW50LnJlcGxhY2UoJyUnLCAnJykpXG4gICAgICAgICAgaWYgKGN1clBlcmNlbnQgPT09IDApIHJldHVybiAnTk9fTkVFRF9PVVRERU5UJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50Lk9VVERFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIGxldCB0YXJnZXRJbmRlbnQgPSBjdXJQZXJjZW50IC0gY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlRcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZW50IDwgMCkge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IHRhcmdldEluZGVudCArICclJ1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdpbnNlcnRVbm9yZGVyZWRMaXN0JyAocmgsIGFyZykge1xuICAgIC8vIGRvIG5vdCBpbnNlcnQgdWwgaW50byBhIHJvd1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KHN0YXJ0Tm9kZSlcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG5cbiAgICAvLyBzdGFydE5vZGUgaXMgZWRpdCB6b25lXG4gICAgaWYgKCFyb3cpIHJldHVyblxuXG4gICAgcm93ID0gcmguY3JlYXRlV3JhcHBlckZvcklubGluZShyb3csIGNvbnN0YW50LlJPV19UQUcpXG5cbiAgICBpZiAocm93KSB7XG4gICAgICAvLyBsZXQgdWwgYmUgYSByb3dcbiAgICAgIGxldCBtYXliZUlzVWwgPSByb3cuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGlmIChtYXliZUlzVWwgJiYgbWF5YmVJc1VsLm5vZGVOYW1lID09PSAnVUwnICYmIHJvdy5ub2RlTmFtZSAhPT0gJ1VMJykge1xuICAgICAgICByb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWF5YmVJc1VsLCByb3cpXG4gICAgICAgIHJvdyA9IG1heWJlSXNVbFxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgYnJcbiAgICAgIGlmIChyb3cubmV4dFNpYmxpbmcgJiYgcm93Lm5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIHJvdy5uZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdy5uZXh0U2libGluZylcbiAgICAgIH1cblxuICAgICAgLy8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yIHVsPmxpLCB0byBsZXQgbW9kdWxlIGluc3BlY3QgcnVuXG4gICAgICAvLyBpZiB1bCBhbmQgb2wgaXMgYmluZCBpbnRvIGEgbW9kdWxlJ3MgdGFiLCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VcbiAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmICFyaC5lZGl0b3IubW9kdWxlc01hcFsndWwnXS5tb2R1bGVJbnNwZWN0UmVzdWx0KSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsICcmIzgyMDM7JylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgICAgaWYgKHN0YXJ0Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgcm93Lm91dGVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdpbnNlcnRPcmRlcmVkTGlzdCcgKHJoLCBhcmcpIHtcbiAgICAvLyBkbyBub3QgaW5zZXJ0IHVsIGludG8gYSByb3dcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbClcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KHN0YXJ0Tm9kZSlcblxuICAgIC8vIHN0YXJ0Tm9kZSBpcyBlZGl0IHpvbmVcbiAgICBpZiAoIXJvdykgcmV0dXJuXG5cbiAgICByb3cgPSByaC5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHJvdywgY29uc3RhbnQuUk9XX1RBRylcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGxldCB1bCBiZSBhIHJvd1xuICAgICAgbGV0IG1heWJlSXNVbCA9IHJvdy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgaWYgKG1heWJlSXNVbCAmJiBtYXliZUlzVWwubm9kZU5hbWUgPT09ICdPTCcgJiYgcm93Lm5vZGVOYW1lICE9PSAnT0wnKSB7XG4gICAgICAgIHJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtYXliZUlzVWwsIHJvdylcbiAgICAgICAgcm93ID0gbWF5YmVJc1VsXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBiclxuICAgICAgaWYgKHJvdy5uZXh0U2libGluZyAmJiByb3cubmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgcm93Lm5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93Lm5leHRTaWJsaW5nKVxuICAgICAgfVxuXG4gICAgICAvLyBzcGVjaWFsIHRyZWF0bWVudCBmb3IgdWw+bGksIHRvIGxldCBtb2R1bGUgaW5zcGVjdCBydW5cbiAgICAgIC8vIGlmIHVsIGFuZCBvbCBpcyBiaW5kIGludG8gYSBtb2R1bGUncyB0YWIsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZVxuICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgIXJoLmVkaXRvci5tb2R1bGVzTWFwWydvbCddLm1vZHVsZUluc3BlY3RSZXN1bHQpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgJyYjODIwMzsnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgICBpZiAoc3RhcnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgIHJvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCByb3cub3V0ZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuY29tbWFuZHMuaW5zZXJ0SW1hZ2UgPSBpbnNlcnRJbWFnZVxuY29tbWFuZHMuZm9udFNpemUgPSBmb250U2l6ZVxuY29tbWFuZHMuZGVsZXRlID0gZGVsZXRlTW9kdWxlXG5jb21tYW5kcy5wYXN0ZSA9IHBhc3RlXG5jb21tYW5kcy5lbnRlciA9IGVudGVyXG5jb21tYW5kcy5rZXlkb3duID0ga2V5ZG93blxuY29tbWFuZHMudW5kZXJsaW5lID0gdW5kZXJsaW5lXG5jb21tYW5kcy5zdHJpa2VUaHJvdWdoID0gc3RyaWtlVGhyb3VnaFxuY29tbWFuZHMuYm9sZCA9IGJvbGRcbmNvbW1hbmRzLml0YWxpYyA9IGl0YWxpY1xuY29tbWFuZHMuanVzdGlmeUxlZnQgPSBqdXN0aWZ5TGVmdFxuY29tbWFuZHMuanVzdGlmeUNlbnRlciA9IGp1c3RpZnlDZW50ZXJcbmNvbW1hbmRzLmp1c3RpZnlSaWdodCA9IGp1c3RpZnlSaWdodFxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywgcXVvdGUsIHRvZG8pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWF9JTkRFTlRfTEVWRUw6IDEwLFxuICBJTkRFTlRfV0lEVEhfUEVSQ0VOVDogOCxcbiAgSU5ERU5UX1NUWUxFX05BTUU6ICdtYXJnaW5MZWZ0JyxcbiAgT1VUREVOVF9TVFlMRV9OQU1FOiAnbWFyZ2luUmlnaHQnLFxuICBST1dfVEFHOiAncCcsXG4gIFJPV19UQUdfVVBQRVJDQVNFOiAnUCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudC1jb25maWcuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvbnQtdGFiIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDUycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggNHB4IDRweCA2cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZm9udC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDNweCAzcHggM3B4IDVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5mb250LXRhYi5mb3JiaWRkZW4ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmZvbnQtdGFiIC5pY29uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IC0xcHg7XFxuICB0b3A6IDI1cHg7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24gbGkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIhLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcmUtY29sb3ItdGFiIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggNHB4IDRweCA2cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZm9yZS1jb2xvci10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDNweCAzcHggM3B4IDVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5mb3JlLWNvbG9yLXRhYi5mb3JiaWRkZW4ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmZvcmUtY29sb3ItdGFiIC5pY29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTNweDtcXG59XFxuLmZvcmUtY29sb3ItdGFiIC5jaG9vc2VkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0wLjZweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDRweDtcXG59XFxuLmZvcmUtY29sb3ItdGFiIC5kcm9wZG93biB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTgwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IC0xcHg7XFxuICB0b3A6IDI1cHg7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZvcmUtY29sb3ItdGFiIC5kcm9wZG93biBsaSB7XFxuICBtYXJnaW46IDJweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIhLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3N0eWxlLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBzaGFkb3cgY2xvbmVcbiAqIEBwYXJhbSBzb3VyY2UgICAgc291cmNlIG9iamVjdFxuICogQHBhcmFtIGV4dCAgICAgICBleHRlbmRlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG1peGluID0gKHNvdXJjZSA9IHt9LCBleHQgPSB7fSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKGV4dCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAvLyBmb3IgZGF0YSBmdW5jdGlvblxuICAgICAgICBpZiAoayA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhU3JjID0gc291cmNlW2tdXG4gICAgICAgICAgICBjb25zdCBkYXRhRGVzYyA9IGV4dFtrXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhRGVzYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVNyYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2Vba10gPSBkYXRhRGVzY1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtrXSA9ICgpID0+IG1peGluKGRhdGFTcmMoKSwgZGF0YURlc2MoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3VyY2Vba10gPSBleHRba11cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNvdXJjZVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmogPSBkYXRhID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKS5zbGljZSgtNywgLTEpID09PSAnT2JqZWN0J1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5kZXguanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hYmJyLFxcbmFkZHJlc3MsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnZhcixcXG5iLFxcbmksXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDE7XFxufVxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuYSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmlucyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuYWJiclt0aXRsZV0sXFxuZGZuW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDA7XFxuICBjdXJzb3I6IGhlbHA7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubXktdnVlLWVkaXRvciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubXktdnVlLWVkaXRvciBpbWcge1xcbiAgbWF4LXdpZHRoOiA5OCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFiczphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC50YWIge1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAudGFiIC5pY29uIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcGFkZGluZzogNHB4IDZweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHggQXJpYWwsIEhlbHZldGljYSwgVGFob21hLCBWZXJkYW5hLCBTYW5zLVNlcmlmO1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bi5oaWdoTGlnaHQge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuLmZvcmJpZGRlbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjbGVhcjogYm90aDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IGJsb2NrcXVvdGUge1xcbiAgbWluLXdpZHRoOiAzOHB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIHtcXG4gIG1hcmdpbjogMTRweCAwIDE0cHggMzVweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogLTIxcHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV06OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDBweCA0cHggMCAtMjRweDtcXG4gIGNvbG9yOiAjYjdiN2I3O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgdWwgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDUuNSU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzLjVweDtcXG4gIGxlZnQ6IDIuNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNjZGM5YzU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyIS4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBuPXQoKTtmb3IodmFyIHIgaW4gbikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1uW3JdfX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgaT1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7big2KSxuKDcpLGUuZXhwb3J0cz1uKDgpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT1udWxsLHRoaXMuX3ZhbHVlPW51bGwsdGhpcy5fZGVmZXJyZWRzPVtdLGwoZSxyKGEsdGhpcykscihzLHRoaXMpKX1mdW5jdGlvbiBvKGUpe3ZhciB0PXRoaXM7cmV0dXJuIG51bGw9PT10aGlzLl9zdGF0ZT92b2lkIHRoaXMuX2RlZmVycmVkcy5wdXNoKGUpOnZvaWQgZihmdW5jdGlvbigpe3ZhciBuPXQuX3N0YXRlP2Uub25GdWxmaWxsZWQ6ZS5vblJlamVjdGVkO2lmKG51bGw9PT1uKXJldHVybiB2b2lkKHQuX3N0YXRlP2UucmVzb2x2ZTplLnJlamVjdCkodC5fdmFsdWUpO3ZhciByO3RyeXtyPW4odC5fdmFsdWUpfWNhdGNoKGkpe3JldHVybiB2b2lkIGUucmVqZWN0KGkpfWUucmVzb2x2ZShyKX0pfWZ1bmN0aW9uIGEoZSl7dHJ5e2lmKGU9PT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgdD1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gdm9pZCBsKHIodCxlKSxyKGEsdGhpcykscihzLHRoaXMpKX10aGlzLl9zdGF0ZT0hMCx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1jYXRjaChuKXtzLmNhbGwodGhpcyxuKX19ZnVuY3Rpb24gcyhlKXt0aGlzLl9zdGF0ZT0hMSx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1mdW5jdGlvbiB1KCl7Zm9yKHZhciBlPTAsdD10aGlzLl9kZWZlcnJlZHMubGVuZ3RoO3Q+ZTtlKyspby5jYWxsKHRoaXMsdGhpcy5fZGVmZXJyZWRzW2VdKTt0aGlzLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBjKGUsdCxuLHIpe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMucmVzb2x2ZT1uLHRoaXMucmVqZWN0PXJ9ZnVuY3Rpb24gbChlLHQsbil7dmFyIHI9ITE7dHJ5e2UoZnVuY3Rpb24oZSl7cnx8KHI9ITAsdChlKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLG4oZSkpfSl9Y2F0Y2goaSl7aWYocilyZXR1cm47cj0hMCxuKGkpfX12YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0fHxmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGUsMSl9LGQ9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfTtpLnByb3RvdHlwZVtcImNhdGNoXCJdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHIsaSl7by5jYWxsKG4sbmV3IGMoZSx0LHIsaSkpfSl9LGkuYWxsPWZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoMT09PWFyZ3VtZW50cy5sZW5ndGgmJmQoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzKTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiByKG8sYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKGUpe3IobyxlKX0sbil9ZVtvXT1hLDA9PT0tLWkmJnQoZSl9Y2F0Y2godSl7bih1KX19aWYoMD09PWUubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIGk9ZS5sZW5ndGgsbz0wO288ZS5sZW5ndGg7bysrKXIobyxlW29dKX0pfSxpLnJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmNvbnN0cnVjdG9yPT09aT9lOm5ldyBpKGZ1bmN0aW9uKHQpe3QoZSl9KX0saS5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7bihlKX0pfSxpLnJhY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTAsaT1lLmxlbmd0aDtpPnI7cisrKWVbcl0udGhlbih0LG4pfSl9LGkuX3NldEltbWVkaWF0ZUZuPWZ1bmN0aW9uKGUpe2Y9ZX0saS5wcm90b3R5cGUuYWx3YXlzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBufSl9LGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbn0pfSl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwodCxuKDIpLnNldEltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiBpKGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dmFyIG89bigzKS5uZXh0VGljayxhPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSxzPUFycmF5LnByb3RvdHlwZS5zbGljZSx1PXt9LGM9MDt0LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkoYS5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShhLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlLmNsb3NlKCl9LGkucHJvdG90eXBlLnVucmVmPWkucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30saS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0sdCkpfSx0LnNldEltbWVkaWF0ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24oZSl7dmFyIG49YysrLHI9YXJndW1lbnRzLmxlbmd0aDwyPyExOnMuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHVbbl09ITAsbyhmdW5jdGlvbigpe3Vbbl0mJihyP2UuYXBwbHkobnVsbCxyKTplLmNhbGwobnVsbCksdC5jbGVhckltbWVkaWF0ZShuKSl9KSxufSx0LmNsZWFySW1tZWRpYXRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cjpmdW5jdGlvbihlKXtkZWxldGUgdVtlXX19KS5jYWxsKHQsbigyKS5zZXRJbW1lZGlhdGUsbigyKS5jbGVhckltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe2M9ITEsYS5sZW5ndGg/dT1hLmNvbmNhdCh1KTpsPS0xLHUubGVuZ3RoJiZyKCl9ZnVuY3Rpb24gcigpe2lmKCFjKXt2YXIgZT1zZXRUaW1lb3V0KG4pO2M9ITA7Zm9yKHZhciB0PXUubGVuZ3RoO3Q7KXtmb3IoYT11LHU9W107KytsPHQ7KWEmJmFbbF0ucnVuKCk7bD0tMSx0PXUubGVuZ3RofWE9bnVsbCxjPSExLGNsZWFyVGltZW91dChlKX19ZnVuY3Rpb24gaShlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIG8oKXt9dmFyIGEscz1lLmV4cG9ydHM9e30sdT1bXSxjPSExLGw9LTE7cy5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO3UucHVzaChuZXcgaShlLHQpKSwxIT09dS5sZW5ndGh8fGN8fHNldFRpbWVvdXQociwwKX0saS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scy50aXRsZT1cImJyb3dzZXJcIixzLmJyb3dzZXI9ITAscy5lbnY9e30scy5hcmd2PVtdLHMudmVyc2lvbj1cIlwiLHMudmVyc2lvbnM9e30scy5vbj1vLHMuYWRkTGlzdGVuZXI9byxzLm9uY2U9byxzLm9mZj1vLHMucmVtb3ZlTGlzdGVuZXI9byxzLnJlbW92ZUFsbExpc3RlbmVycz1vLHMuZW1pdD1vLHMuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scy5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scy5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHMudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3ZhciBlPX5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpJiZ+bmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKFwiR29vZ2xlXCIpJiYhfm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKTtyZXR1cm4gZSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKykvKS5wb3AoKTw9NTM0fHwvTVFRQnJvd3Nlci9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9dmFyIHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBCbG9iLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKT93aW5kb3cuQmxvYjpmdW5jdGlvbihlLHQpe3ZhciBuPW5ldyh3aW5kb3cuQmxvYkJ1aWxkZXJ8fHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlcnx8d2luZG93Lk1TQmxvYkJ1aWxkZXJ8fHdpbmRvdy5Nb3pCbG9iQnVpbGRlcik7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtuLmFwcGVuZChlKX0pLG4uZ2V0QmxvYih0P3QudHlwZTp2b2lkIDApfSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBlPXRoaXMsbj1bXSxpPUFycmF5KDIxKS5qb2luKFwiLVwiKSsoK25ldyBEYXRlKigxZTE2Kk1hdGgucmFuZG9tKCkpKS50b1N0cmluZygzNiksbz1YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDt0aGlzLmdldFBhcnRzPWZ1bmN0aW9uKCl7cmV0dXJuIG4udG9TdHJpbmcoKX0sdGhpcy5hcHBlbmQ9ZnVuY3Rpb24oZSx0LHIpe24ucHVzaChcIi0tXCIraSsnXFxyXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytlKydcIicpLHQgaW5zdGFuY2VvZiBCbG9iPyhuLnB1c2goJzsgZmlsZW5hbWU9XCInKyhyfHxcImJsb2JcIikrJ1wiXFxyXFxuQ29udGVudC1UeXBlOiAnK3QudHlwZStcIlxcclxcblxcclxcblwiKSxuLnB1c2godCkpOm4ucHVzaChcIlxcclxcblxcclxcblwiK3QpLG4ucHVzaChcIlxcclxcblwiKX0sdCsrLFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGEpe3ZhciBzLHUsYz10aGlzO2E9PT1lPyhuLnB1c2goXCItLVwiK2krXCItLVxcclxcblwiKSx1PW5ldyByKG4pLHM9bmV3IEZpbGVSZWFkZXIscy5vbmxvYWQ9ZnVuY3Rpb24oKXtvLmNhbGwoYyxzLnJlc3VsdCl9LHMub25lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBlfSxzLnJlYWRBc0FycmF5QnVmZmVyKHUpLHRoaXMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIraSksdC0tLDA9PXQmJihYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1vKSk6by5jYWxsKHRoaXMsYSl9fXZhciB0PTA7cmV0dXJuIGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRm9ybURhdGEucHJvdG90eXBlKSxlfSgpO2UuZXhwb3J0cz17QmxvYjpyLEZvcm1EYXRhOm4oKT9pOkZvcm1EYXRhfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4hIWUuZXhpZmRhdGF9ZnVuY3Rpb24gbyhlLHQpe3Q9dHx8ZS5tYXRjaCgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2ltKVsxXXx8XCJcIixlPWUucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dpbSxcIlwiKTtmb3IodmFyIG49YXRvYihlKSxyPW4ubGVuZ3RoLGk9bmV3IEFycmF5QnVmZmVyKHIpLG89bmV3IFVpbnQ4QXJyYXkoaSksYT0wO3I+YTthKyspb1thXT1uLmNoYXJDb2RlQXQoYSk7cmV0dXJuIGl9ZnVuY3Rpb24gYShlLHQpe3ZhciBuPW5ldyBYTUxIdHRwUmVxdWVzdDtuLm9wZW4oXCJHRVRcIixlLCEwKSxuLnJlc3BvbnNlVHlwZT1cImJsb2JcIixuLm9ubG9hZD1mdW5jdGlvbihlKXsoMjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzKSYmdCh0aGlzLnJlc3BvbnNlKX0sbi5zZW5kKCl9ZnVuY3Rpb24gcyhlLHQpe2Z1bmN0aW9uIG4obil7dmFyIHI9dShuKSxpPWMobik7ZS5leGlmZGF0YT1yfHx7fSxlLmlwdGNkYXRhPWl8fHt9LHQmJnQuY2FsbChlKX1pZihlLnNyYylpZigvXmRhdGFcXDovaS50ZXN0KGUuc3JjKSl7dmFyIHI9byhlLnNyYyk7bihyKX1lbHNlIGlmKC9eYmxvYlxcOi9pLnRlc3QoZS5zcmMpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtuKGUudGFyZ2V0LnJlc3VsdCl9LGEoZS5zcmMsZnVuY3Rpb24oZSl7aS5yZWFkQXNBcnJheUJ1ZmZlcihlKX0pfWVsc2V7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0O3Mub25sb2FkPWZ1bmN0aW9uKCl7MjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzP24ocy5yZXNwb25zZSk6dChuZXcgRXJyb3IoXCJDb3VsZCBub3QgbG9hZCBpbWFnZVwiKSkscz1udWxsfSxzLm9wZW4oXCJHRVRcIixlLnNyYywhMCkscy5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiLHMuc2VuZChudWxsKX1lbHNlIGlmKHdpbmRvdy5GaWxlUmVhZGVyJiYoZSBpbnN0YW5jZW9mIHdpbmRvdy5CbG9ifHxlIGluc3RhbmNlb2Ygd2luZG93LkZpbGUpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLnRhcmdldC5yZXN1bHQuYnl0ZUxlbmd0aCksbihlLnRhcmdldC5yZXN1bHQpfSxpLnJlYWRBc0FycmF5QnVmZmVyKGUpfX1mdW5jdGlvbiB1KGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKTtpZihwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLmJ5dGVMZW5ndGgpLDI1NSE9dC5nZXRVaW50OCgwKXx8MjE2IT10LmdldFVpbnQ4KDEpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIiksITE7Zm9yKHZhciBuLHI9MixpPWUuYnl0ZUxlbmd0aDtpPnI7KXtpZigyNTUhPXQuZ2V0VWludDgocikpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgbWFya2VyIGF0IG9mZnNldCBcIityK1wiLCBmb3VuZDogXCIrdC5nZXRVaW50OChyKSksITE7aWYobj10LmdldFVpbnQ4KHIrMSkscCYmY29uc29sZS5sb2cobiksMjI1PT1uKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIkZvdW5kIDB4RkZFMSBtYXJrZXJcIiksZyh0LHIrNCx0LmdldFVpbnQxNihyKzIpLTIpO3IrPTIrdC5nZXRVaW50MTYocisyKX19ZnVuY3Rpb24gYyhlKXt2YXIgdD1uZXcgRGF0YVZpZXcoZSk7aWYocCYmY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIrZS5ieXRlTGVuZ3RoKSwyNTUhPXQuZ2V0VWludDgoMCl8fDIxNiE9dC5nZXRVaW50OCgxKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpLCExO2Zvcih2YXIgbj0yLHI9ZS5ieXRlTGVuZ3RoLGk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gNTY9PT1lLmdldFVpbnQ4KHQpJiY2Nj09PWUuZ2V0VWludDgodCsxKSYmNzM9PT1lLmdldFVpbnQ4KHQrMikmJjc3PT09ZS5nZXRVaW50OCh0KzMpJiY0PT09ZS5nZXRVaW50OCh0KzQpJiY0PT09ZS5nZXRVaW50OCh0KzUpfTtyPm47KXtpZihpKHQsbikpe3ZhciBvPXQuZ2V0VWludDgobis3KTtvJTIhPT0wJiYobys9MSksMD09PW8mJihvPTQpO3ZhciBhPW4rOCtvLHM9dC5nZXRVaW50MTYobis2K28pO3JldHVybiBsKGUsYSxzKX1uKyt9fWZ1bmN0aW9uIGwoZSx0LG4pe2Zvcih2YXIgcixpLG8sYSxzLHU9bmV3IERhdGFWaWV3KGUpLGM9e30sbD10O3Qrbj5sOykyOD09PXUuZ2V0VWludDgobCkmJjI9PT11LmdldFVpbnQ4KGwrMSkmJihhPXUuZ2V0VWludDgobCsyKSxhIGluIFMmJihvPXUuZ2V0SW50MTYobCszKSxzPW8rNSxpPVNbYV0scj1oKHUsbCs1LG8pLGMuaGFzT3duUHJvcGVydHkoaSk/Y1tpXWluc3RhbmNlb2YgQXJyYXk/Y1tpXS5wdXNoKHIpOmNbaV09W2NbaV0scl06Y1tpXT1yKSksbCsrO3JldHVybiBjfWZ1bmN0aW9uIGYoZSx0LG4scixpKXt2YXIgbyxhLHMsdT1lLmdldFVpbnQxNihuLCFpKSxjPXt9O2ZvcihzPTA7dT5zO3MrKylvPW4rMTIqcysyLGE9cltlLmdldFVpbnQxNihvLCFpKV0sIWEmJnAmJmNvbnNvbGUubG9nKFwiVW5rbm93biB0YWc6IFwiK2UuZ2V0VWludDE2KG8sIWkpKSxjW2FdPWQoZSxvLHQsbixpKTtyZXR1cm4gY31mdW5jdGlvbiBkKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsYyxsLGY9ZS5nZXRVaW50MTYodCsyLCFpKSxkPWUuZ2V0VWludDMyKHQrNCwhaSksZz1lLmdldFVpbnQzMih0KzgsIWkpK247c3dpdGNoKGYpe2Nhc2UgMTpjYXNlIDc6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50OCh0KzgsIWkpO2ZvcihvPWQ+ND9nOnQrOCxhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50OChvK3UpO3JldHVybiBhO2Nhc2UgMjpyZXR1cm4gbz1kPjQ/Zzp0KzgsaChlLG8sZC0xKTtjYXNlIDM6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MTYodCs4LCFpKTtmb3Iobz1kPjI/Zzp0KzgsYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDE2KG8rMip1LCFpKTtyZXR1cm4gYTtjYXNlIDQ6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MzIodCs4LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDU6aWYoMT09ZClyZXR1cm4gYz1lLmdldFVpbnQzMihnLCFpKSxsPWUuZ2V0VWludDMyKGcrNCwhaSkscz1uZXcgTnVtYmVyKGMvbCkscy5udW1lcmF0b3I9YyxzLmRlbm9taW5hdG9yPWwscztmb3IoYT1bXSx1PTA7ZD51O3UrKyljPWUuZ2V0VWludDMyKGcrOCp1LCFpKSxsPWUuZ2V0VWludDMyKGcrNCs4KnUsIWkpLGFbdV09bmV3IE51bWJlcihjL2wpLGFbdV0ubnVtZXJhdG9yPWMsYVt1XS5kZW5vbWluYXRvcj1sO3JldHVybiBhO2Nhc2UgOTppZigxPT1kKXJldHVybiBlLmdldEludDMyKHQrOCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldEludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDEwOmlmKDE9PWQpcmV0dXJuIGUuZ2V0SW50MzIoZywhaSkvZS5nZXRJbnQzMihnKzQsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRJbnQzMihnKzgqdSwhaSkvZS5nZXRJbnQzMihnKzQrOCp1LCFpKTtyZXR1cm4gYX19ZnVuY3Rpb24gaChlLHQsbil7dmFyIHIsaT1cIlwiO2ZvcihyPXQ7dCtuPnI7cisrKWkrPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5nZXRVaW50OChyKSk7cmV0dXJuIGl9ZnVuY3Rpb24gZyhlLHQpe2lmKFwiRXhpZlwiIT1oKGUsdCw0KSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgRVhJRiBkYXRhISBcIitoKGUsdCw0KSksITE7dmFyIG4scixpLG8sYSxzPXQrNjtpZigxODc2MT09ZS5nZXRVaW50MTYocykpbj0hMTtlbHNle2lmKDE5Nzg5IT1lLmdldFVpbnQxNihzKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHg0OTQ5IG9yIDB4NEQ0RClcIiksITE7bj0hMH1pZig0MiE9ZS5nZXRVaW50MTYocysyLCFuKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHgwMDJBKVwiKSwhMTt2YXIgdT1lLmdldFVpbnQzMihzKzQsIW4pO2lmKDg+dSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAoRmlyc3Qgb2Zmc2V0IGxlc3MgdGhhbiA4KVwiLGUuZ2V0VWludDMyKHMrNCwhbikpLCExO2lmKHI9ZihlLHMscyt1LHYsbiksci5FeGlmSUZEUG9pbnRlcil7bz1mKGUscyxzK3IuRXhpZklGRFBvaW50ZXIsdyxuKTtmb3IoaSBpbiBvKXtzd2l0Y2goaSl7Y2FzZVwiTGlnaHRTb3VyY2VcIjpjYXNlXCJGbGFzaFwiOmNhc2VcIk1ldGVyaW5nTW9kZVwiOmNhc2VcIkV4cG9zdXJlUHJvZ3JhbVwiOmNhc2VcIlNlbnNpbmdNZXRob2RcIjpjYXNlXCJTY2VuZUNhcHR1cmVUeXBlXCI6Y2FzZVwiU2NlbmVUeXBlXCI6Y2FzZVwiQ3VzdG9tUmVuZGVyZWRcIjpjYXNlXCJXaGl0ZUJhbGFuY2VcIjpjYXNlXCJHYWluQ29udHJvbFwiOmNhc2VcIkNvbnRyYXN0XCI6Y2FzZVwiU2F0dXJhdGlvblwiOmNhc2VcIlNoYXJwbmVzc1wiOmNhc2VcIlN1YmplY3REaXN0YW5jZVJhbmdlXCI6Y2FzZVwiRmlsZVNvdXJjZVwiOm9baV09YltpXVtvW2ldXTticmVhaztjYXNlXCJFeGlmVmVyc2lvblwiOmNhc2VcIkZsYXNocGl4VmVyc2lvblwiOm9baV09U3RyaW5nLmZyb21DaGFyQ29kZShvW2ldWzBdLG9baV1bMV0sb1tpXVsyXSxvW2ldWzNdKTticmVhaztjYXNlXCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiOm9baV09Yi5Db21wb25lbnRzW29baV1bMF1dK2IuQ29tcG9uZW50c1tvW2ldWzFdXStiLkNvbXBvbmVudHNbb1tpXVsyXV0rYi5Db21wb25lbnRzW29baV1bM11dfXJbaV09b1tpXX19aWYoci5HUFNJbmZvSUZEUG9pbnRlcil7YT1mKGUscyxzK3IuR1BTSW5mb0lGRFBvaW50ZXIseSxuKTtmb3IoaSBpbiBhKXtzd2l0Y2goaSl7Y2FzZVwiR1BTVmVyc2lvbklEXCI6YVtpXT1hW2ldWzBdK1wiLlwiK2FbaV1bMV0rXCIuXCIrYVtpXVsyXStcIi5cIithW2ldWzNdfXJbaV09YVtpXX19cmV0dXJuIHJ9dmFyIHA9ITEsbT1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG0/ZTp0aGlzIGluc3RhbmNlb2YgbT92b2lkKHRoaXMuRVhJRndyYXBwZWQ9ZSk6bmV3IG0oZSl9O1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHMmJih0PWUuZXhwb3J0cz1tKSx0LkVYSUY9bTt2YXIgdz1tLlRhZ3M9ezM2ODY0OlwiRXhpZlZlcnNpb25cIiw0MDk2MDpcIkZsYXNocGl4VmVyc2lvblwiLDQwOTYxOlwiQ29sb3JTcGFjZVwiLDQwOTYyOlwiUGl4ZWxYRGltZW5zaW9uXCIsNDA5NjM6XCJQaXhlbFlEaW1lbnNpb25cIiwzNzEyMTpcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCIsMzcxMjI6XCJDb21wcmVzc2VkQml0c1BlclBpeGVsXCIsMzc1MDA6XCJNYWtlck5vdGVcIiwzNzUxMDpcIlVzZXJDb21tZW50XCIsNDA5NjQ6XCJSZWxhdGVkU291bmRGaWxlXCIsMzY4Njc6XCJEYXRlVGltZU9yaWdpbmFsXCIsMzY4Njg6XCJEYXRlVGltZURpZ2l0aXplZFwiLDM3NTIwOlwiU3Vic2VjVGltZVwiLDM3NTIxOlwiU3Vic2VjVGltZU9yaWdpbmFsXCIsMzc1MjI6XCJTdWJzZWNUaW1lRGlnaXRpemVkXCIsMzM0MzQ6XCJFeHBvc3VyZVRpbWVcIiwzMzQzNzpcIkZOdW1iZXJcIiwzNDg1MDpcIkV4cG9zdXJlUHJvZ3JhbVwiLDM0ODUyOlwiU3BlY3RyYWxTZW5zaXRpdml0eVwiLDM0ODU1OlwiSVNPU3BlZWRSYXRpbmdzXCIsMzQ4NTY6XCJPRUNGXCIsMzczNzc6XCJTaHV0dGVyU3BlZWRWYWx1ZVwiLDM3Mzc4OlwiQXBlcnR1cmVWYWx1ZVwiLDM3Mzc5OlwiQnJpZ2h0bmVzc1ZhbHVlXCIsMzczODA6XCJFeHBvc3VyZUJpYXNcIiwzNzM4MTpcIk1heEFwZXJ0dXJlVmFsdWVcIiwzNzM4MjpcIlN1YmplY3REaXN0YW5jZVwiLDM3MzgzOlwiTWV0ZXJpbmdNb2RlXCIsMzczODQ6XCJMaWdodFNvdXJjZVwiLDM3Mzg1OlwiRmxhc2hcIiwzNzM5NjpcIlN1YmplY3RBcmVhXCIsMzczODY6XCJGb2NhbExlbmd0aFwiLDQxNDgzOlwiRmxhc2hFbmVyZ3lcIiw0MTQ4NDpcIlNwYXRpYWxGcmVxdWVuY3lSZXNwb25zZVwiLDQxNDg2OlwiRm9jYWxQbGFuZVhSZXNvbHV0aW9uXCIsNDE0ODc6XCJGb2NhbFBsYW5lWVJlc29sdXRpb25cIiw0MTQ4ODpcIkZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFwiLDQxNDkyOlwiU3ViamVjdExvY2F0aW9uXCIsNDE0OTM6XCJFeHBvc3VyZUluZGV4XCIsNDE0OTU6XCJTZW5zaW5nTWV0aG9kXCIsNDE3Mjg6XCJGaWxlU291cmNlXCIsNDE3Mjk6XCJTY2VuZVR5cGVcIiw0MTczMDpcIkNGQVBhdHRlcm5cIiw0MTk4NTpcIkN1c3RvbVJlbmRlcmVkXCIsNDE5ODY6XCJFeHBvc3VyZU1vZGVcIiw0MTk4NzpcIldoaXRlQmFsYW5jZVwiLDQxOTg4OlwiRGlnaXRhbFpvb21SYXRpb25cIiw0MTk4OTpcIkZvY2FsTGVuZ3RoSW4zNW1tRmlsbVwiLDQxOTkwOlwiU2NlbmVDYXB0dXJlVHlwZVwiLDQxOTkxOlwiR2FpbkNvbnRyb2xcIiw0MTk5MjpcIkNvbnRyYXN0XCIsNDE5OTM6XCJTYXR1cmF0aW9uXCIsNDE5OTQ6XCJTaGFycG5lc3NcIiw0MTk5NTpcIkRldmljZVNldHRpbmdEZXNjcmlwdGlvblwiLDQxOTk2OlwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsNDIwMTY6XCJJbWFnZVVuaXF1ZUlEXCJ9LHY9bS5UaWZmVGFncz17MjU2OlwiSW1hZ2VXaWR0aFwiLDI1NzpcIkltYWdlSGVpZ2h0XCIsMzQ2NjU6XCJFeGlmSUZEUG9pbnRlclwiLDM0ODUzOlwiR1BTSW5mb0lGRFBvaW50ZXJcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsMjU4OlwiQml0c1BlclNhbXBsZVwiLDI1OTpcIkNvbXByZXNzaW9uXCIsMjYyOlwiUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvblwiLDI3NDpcIk9yaWVudGF0aW9uXCIsMjc3OlwiU2FtcGxlc1BlclBpeGVsXCIsMjg0OlwiUGxhbmFyQ29uZmlndXJhdGlvblwiLDUzMDpcIllDYkNyU3ViU2FtcGxpbmdcIiw1MzE6XCJZQ2JDclBvc2l0aW9uaW5nXCIsMjgyOlwiWFJlc29sdXRpb25cIiwyODM6XCJZUmVzb2x1dGlvblwiLDI5NjpcIlJlc29sdXRpb25Vbml0XCIsMjczOlwiU3RyaXBPZmZzZXRzXCIsMjc4OlwiUm93c1BlclN0cmlwXCIsMjc5OlwiU3RyaXBCeXRlQ291bnRzXCIsNTEzOlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0XCIsNTE0OlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0TGVuZ3RoXCIsMzAxOlwiVHJhbnNmZXJGdW5jdGlvblwiLDMxODpcIldoaXRlUG9pbnRcIiwzMTk6XCJQcmltYXJ5Q2hyb21hdGljaXRpZXNcIiw1Mjk6XCJZQ2JDckNvZWZmaWNpZW50c1wiLDUzMjpcIlJlZmVyZW5jZUJsYWNrV2hpdGVcIiwzMDY6XCJEYXRlVGltZVwiLDI3MDpcIkltYWdlRGVzY3JpcHRpb25cIiwyNzE6XCJNYWtlXCIsMjcyOlwiTW9kZWxcIiwzMDU6XCJTb2Z0d2FyZVwiLDMxNTpcIkFydGlzdFwiLDMzNDMyOlwiQ29weXJpZ2h0XCJ9LHk9bS5HUFNUYWdzPXswOlwiR1BTVmVyc2lvbklEXCIsMTpcIkdQU0xhdGl0dWRlUmVmXCIsMjpcIkdQU0xhdGl0dWRlXCIsMzpcIkdQU0xvbmdpdHVkZVJlZlwiLDQ6XCJHUFNMb25naXR1ZGVcIiw1OlwiR1BTQWx0aXR1ZGVSZWZcIiw2OlwiR1BTQWx0aXR1ZGVcIiw3OlwiR1BTVGltZVN0YW1wXCIsODpcIkdQU1NhdGVsbGl0ZXNcIiw5OlwiR1BTU3RhdHVzXCIsMTA6XCJHUFNNZWFzdXJlTW9kZVwiLDExOlwiR1BTRE9QXCIsMTI6XCJHUFNTcGVlZFJlZlwiLDEzOlwiR1BTU3BlZWRcIiwxNDpcIkdQU1RyYWNrUmVmXCIsMTU6XCJHUFNUcmFja1wiLDE2OlwiR1BTSW1nRGlyZWN0aW9uUmVmXCIsMTc6XCJHUFNJbWdEaXJlY3Rpb25cIiwxODpcIkdQU01hcERhdHVtXCIsMTk6XCJHUFNEZXN0TGF0aXR1ZGVSZWZcIiwyMDpcIkdQU0Rlc3RMYXRpdHVkZVwiLDIxOlwiR1BTRGVzdExvbmdpdHVkZVJlZlwiLDIyOlwiR1BTRGVzdExvbmdpdHVkZVwiLDIzOlwiR1BTRGVzdEJlYXJpbmdSZWZcIiwyNDpcIkdQU0Rlc3RCZWFyaW5nXCIsMjU6XCJHUFNEZXN0RGlzdGFuY2VSZWZcIiwyNjpcIkdQU0Rlc3REaXN0YW5jZVwiLDI3OlwiR1BTUHJvY2Vzc2luZ01ldGhvZFwiLDI4OlwiR1BTQXJlYUluZm9ybWF0aW9uXCIsMjk6XCJHUFNEYXRlU3RhbXBcIiwzMDpcIkdQU0RpZmZlcmVudGlhbFwifSxiPW0uU3RyaW5nVmFsdWVzPXtFeHBvc3VyZVByb2dyYW06ezA6XCJOb3QgZGVmaW5lZFwiLDE6XCJNYW51YWxcIiwyOlwiTm9ybWFsIHByb2dyYW1cIiwzOlwiQXBlcnR1cmUgcHJpb3JpdHlcIiw0OlwiU2h1dHRlciBwcmlvcml0eVwiLDU6XCJDcmVhdGl2ZSBwcm9ncmFtXCIsNjpcIkFjdGlvbiBwcm9ncmFtXCIsNzpcIlBvcnRyYWl0IG1vZGVcIiw4OlwiTGFuZHNjYXBlIG1vZGVcIn0sTWV0ZXJpbmdNb2RlOnswOlwiVW5rbm93blwiLDE6XCJBdmVyYWdlXCIsMjpcIkNlbnRlcldlaWdodGVkQXZlcmFnZVwiLDM6XCJTcG90XCIsNDpcIk11bHRpU3BvdFwiLDU6XCJQYXR0ZXJuXCIsNjpcIlBhcnRpYWxcIiwyNTU6XCJPdGhlclwifSxMaWdodFNvdXJjZTp7MDpcIlVua25vd25cIiwxOlwiRGF5bGlnaHRcIiwyOlwiRmx1b3Jlc2NlbnRcIiwzOlwiVHVuZ3N0ZW4gKGluY2FuZGVzY2VudCBsaWdodClcIiw0OlwiRmxhc2hcIiw5OlwiRmluZSB3ZWF0aGVyXCIsMTA6XCJDbG91ZHkgd2VhdGhlclwiLDExOlwiU2hhZGVcIiwxMjpcIkRheWxpZ2h0IGZsdW9yZXNjZW50IChEIDU3MDAgLSA3MTAwSylcIiwxMzpcIkRheSB3aGl0ZSBmbHVvcmVzY2VudCAoTiA0NjAwIC0gNTQwMEspXCIsMTQ6XCJDb29sIHdoaXRlIGZsdW9yZXNjZW50IChXIDM5MDAgLSA0NTAwSylcIiwxNTpcIldoaXRlIGZsdW9yZXNjZW50IChXVyAzMjAwIC0gMzcwMEspXCIsMTc6XCJTdGFuZGFyZCBsaWdodCBBXCIsMTg6XCJTdGFuZGFyZCBsaWdodCBCXCIsMTk6XCJTdGFuZGFyZCBsaWdodCBDXCIsMjA6XCJENTVcIiwyMTpcIkQ2NVwiLDIyOlwiRDc1XCIsMjM6XCJENTBcIiwyNDpcIklTTyBzdHVkaW8gdHVuZ3N0ZW5cIiwyNTU6XCJPdGhlclwifSxGbGFzaDp7MDpcIkZsYXNoIGRpZCBub3QgZmlyZVwiLDE6XCJGbGFzaCBmaXJlZFwiLDU6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDc6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsOTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwxMzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiwxNTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDE2OlwiRmxhc2ggZGlkIG5vdCBmaXJlLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwyNDpcIkZsYXNoIGRpZCBub3QgZmlyZSwgYXV0byBtb2RlXCIsMjU6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlXCIsMjk6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsMzE6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiwzMjpcIk5vIGZsYXNoIGZ1bmN0aW9uXCIsNjU6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDY5OlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3MTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw3MzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw3NzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3OTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDg5OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDkzOlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDk1OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCJ9LFNlbnNpbmdNZXRob2Q6ezE6XCJOb3QgZGVmaW5lZFwiLDI6XCJPbmUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDM6XCJUd28tY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDQ6XCJUaHJlZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsNTpcIkNvbG9yIHNlcXVlbnRpYWwgYXJlYSBzZW5zb3JcIiw3OlwiVHJpbGluZWFyIHNlbnNvclwiLDg6XCJDb2xvciBzZXF1ZW50aWFsIGxpbmVhciBzZW5zb3JcIn0sU2NlbmVDYXB0dXJlVHlwZTp7MDpcIlN0YW5kYXJkXCIsMTpcIkxhbmRzY2FwZVwiLDI6XCJQb3J0cmFpdFwiLDM6XCJOaWdodCBzY2VuZVwifSxTY2VuZVR5cGU6ezE6XCJEaXJlY3RseSBwaG90b2dyYXBoZWRcIn0sQ3VzdG9tUmVuZGVyZWQ6ezA6XCJOb3JtYWwgcHJvY2Vzc1wiLDE6XCJDdXN0b20gcHJvY2Vzc1wifSxXaGl0ZUJhbGFuY2U6ezA6XCJBdXRvIHdoaXRlIGJhbGFuY2VcIiwxOlwiTWFudWFsIHdoaXRlIGJhbGFuY2VcIn0sR2FpbkNvbnRyb2w6ezA6XCJOb25lXCIsMTpcIkxvdyBnYWluIHVwXCIsMjpcIkhpZ2ggZ2FpbiB1cFwiLDM6XCJMb3cgZ2FpbiBkb3duXCIsNDpcIkhpZ2ggZ2FpbiBkb3duXCJ9LENvbnRyYXN0OnswOlwiTm9ybWFsXCIsMTpcIlNvZnRcIiwyOlwiSGFyZFwifSxTYXR1cmF0aW9uOnswOlwiTm9ybWFsXCIsMTpcIkxvdyBzYXR1cmF0aW9uXCIsMjpcIkhpZ2ggc2F0dXJhdGlvblwifSxTaGFycG5lc3M6ezA6XCJOb3JtYWxcIiwxOlwiU29mdFwiLDI6XCJIYXJkXCJ9LFN1YmplY3REaXN0YW5jZVJhbmdlOnswOlwiVW5rbm93blwiLDE6XCJNYWNyb1wiLDI6XCJDbG9zZSB2aWV3XCIsMzpcIkRpc3RhbnQgdmlld1wifSxGaWxlU291cmNlOnszOlwiRFNDXCJ9LENvbXBvbmVudHM6ezA6XCJcIiwxOlwiWVwiLDI6XCJDYlwiLDM6XCJDclwiLDQ6XCJSXCIsNTpcIkdcIiw2OlwiQlwifX0sUz17MTIwOlwiY2FwdGlvblwiLDExMDpcImNyZWRpdFwiLDI1Olwia2V5d29yZHNcIiw1NTpcImRhdGVDcmVhdGVkXCIsODA6XCJieWxpbmVcIiw4NTpcImJ5bGluZVRpdGxlXCIsMTIyOlwiY2FwdGlvbldyaXRlclwiLDEwNTpcImhlYWRsaW5lXCIsMTE2OlwiY29weXJpZ2h0XCIsMTU6XCJjYXRlZ29yeVwifTttLmdldERhdGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZSBpbnN0YW5jZW9mIEltYWdlfHxlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkmJiFlLmNvbXBsZXRlPyExOihuKGUpP3QmJnQuY2FsbChlKTpzKGUsdCksITApfSxtLmdldFRhZz1mdW5jdGlvbihlLHQpe3JldHVybiBuKGUpP2UuZXhpZmRhdGFbdF06dm9pZCAwfSxtLmdldEFsbFRhZ3M9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJue307dmFyIHQscj1lLmV4aWZkYXRhLGk9e307Zm9yKHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoaVt0XT1yW3RdKTtyZXR1cm4gaX0sbS5wcmV0dHk9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJuXCJcIjt2YXIgdCxyPWUuZXhpZmRhdGEsaT1cIlwiO2Zvcih0IGluIHIpci5oYXNPd25Qcm9wZXJ0eSh0KSYmKGkrPVwib2JqZWN0XCI9PXR5cGVvZiByW3RdP3JbdF1pbnN0YW5jZW9mIE51bWJlcj90K1wiIDogXCIrclt0XStcIiBbXCIrclt0XS5udW1lcmF0b3IrXCIvXCIrclt0XS5kZW5vbWluYXRvcitcIl1cXHJcXG5cIjp0K1wiIDogW1wiK3JbdF0ubGVuZ3RoK1wiIHZhbHVlc11cXHJcXG5cIjp0K1wiIDogXCIrclt0XStcIlxcclxcblwiKTtyZXR1cm4gaX0sbS5yZWFkRnJvbUJpbmFyeUZpbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZSl9LHI9W10saT1mdW5jdGlvbigpe3JldHVybiBtfS5hcHBseSh0LHIpLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KS5jYWxsKHRoaXMpfSxmdW5jdGlvbihlLHQsbil7dmFyIHIsaTshZnVuY3Rpb24oKXtmdW5jdGlvbiBuKGUpe3ZhciB0PWUubmF0dXJhbFdpZHRoLG49ZS5uYXR1cmFsSGVpZ2h0O2lmKHQqbj4xMDQ4NTc2KXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Iud2lkdGg9ci5oZWlnaHQ9MTt2YXIgaT1yLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gaS5kcmF3SW1hZ2UoZSwtdCsxLDApLDA9PT1pLmdldEltYWdlRGF0YSgwLDAsMSwxKS5kYXRhWzNdfXJldHVybiExfWZ1bmN0aW9uIG8oZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD0xLHIuaGVpZ2h0PW47dmFyIGk9ci5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UoZSwwLDApO2Zvcih2YXIgbz1pLmdldEltYWdlRGF0YSgwLDAsMSxuKS5kYXRhLGE9MCxzPW4sdT1uO3U+YTspe3ZhciBjPW9bNCoodS0xKSszXTswPT09Yz9zPXU6YT11LHU9cythPj4xfXZhciBsPXUvbjtyZXR1cm4gMD09PWw/MTpsfWZ1bmN0aW9uIGEoZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuIHMoZSxyLHQsbiksci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsdC5xdWFsaXR5fHwuOCl9ZnVuY3Rpb24gcyhlLHQscixpKXt2YXIgYT1lLm5hdHVyYWxXaWR0aCxzPWUubmF0dXJhbEhlaWdodCxjPXIud2lkdGgsbD1yLmhlaWdodCxmPXQuZ2V0Q29udGV4dChcIjJkXCIpO2Yuc2F2ZSgpLHUodCxmLGMsbCxyLm9yaWVudGF0aW9uKTt2YXIgZD1uKGUpO2QmJihhLz0yLHMvPTIpO3ZhciBoPTEwMjQsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2cud2lkdGg9Zy5oZWlnaHQ9aDtmb3IodmFyIHA9Zy5nZXRDb250ZXh0KFwiMmRcIiksbT1pP28oZSxhLHMpOjEsdz1NYXRoLmNlaWwoaCpjL2EpLHY9TWF0aC5jZWlsKGgqbC9zL20pLHk9MCxiPTA7cz55Oyl7Zm9yKHZhciBTPTAsST0wO2E+UzspcC5jbGVhclJlY3QoMCwwLGgsaCkscC5kcmF3SW1hZ2UoZSwtUywteSksZi5kcmF3SW1hZ2UoZywwLDAsaCxoLEksYix3LHYpLFMrPWgsSSs9dzt5Kz1oLGIrPXZ9Zi5yZXN0b3JlKCksZz1wPW51bGx9ZnVuY3Rpb24gdShlLHQsbixyLGkpe3N3aXRjaChpKXtjYXNlIDU6Y2FzZSA2OmNhc2UgNzpjYXNlIDg6ZS53aWR0aD1yLGUuaGVpZ2h0PW47YnJlYWs7ZGVmYXVsdDplLndpZHRoPW4sZS5oZWlnaHQ9cn1zd2l0Y2goaSl7Y2FzZSAyOnQudHJhbnNsYXRlKG4sMCksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDM6dC50cmFuc2xhdGUobixyKSx0LnJvdGF0ZShNYXRoLlBJKTticmVhaztjYXNlIDQ6dC50cmFuc2xhdGUoMCxyKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNTp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNjp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZSgwLC1yKTticmVhaztjYXNlIDc6dC5yb3RhdGUoLjUqTWF0aC5QSSksdC50cmFuc2xhdGUobiwtciksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDg6dC5yb3RhdGUoLS41Kk1hdGguUEkpLHQudHJhbnNsYXRlKC1uLDApfX1mdW5jdGlvbiBjKGUpe2lmKHdpbmRvdy5CbG9iJiZlIGluc3RhbmNlb2YgQmxvYil7dmFyIHQ9bmV3IEltYWdlLG49d2luZG93LlVSTCYmd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkw/d2luZG93LlVSTDp3aW5kb3cud2Via2l0VVJMJiZ3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cud2Via2l0VVJMOm51bGw7aWYoIW4pdGhyb3cgRXJyb3IoXCJObyBjcmVhdGVPYmplY3RVUkwgZnVuY3Rpb24gZm91bmQgdG8gY3JlYXRlIGJsb2IgdXJsXCIpO3Quc3JjPW4uY3JlYXRlT2JqZWN0VVJMKGUpLHRoaXMuYmxvYj1lLGU9dH1pZighZS5uYXR1cmFsV2lkdGgmJiFlLm5hdHVyYWxIZWlnaHQpe3ZhciByPXRoaXM7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT1yLmltYWdlTG9hZExpc3RlbmVycztpZihlKXtyLmltYWdlTG9hZExpc3RlbmVycz1udWxsO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7bj50O3QrKyllW3RdKCl9fSx0aGlzLmltYWdlTG9hZExpc3RlbmVycz1bXX10aGlzLnNyY0ltYWdlPWV9Yy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGUsdCxuKXtpZih0aGlzLmltYWdlTG9hZExpc3RlbmVycyl7dmFyIHI9dGhpcztyZXR1cm4gdm9pZCB0aGlzLmltYWdlTG9hZExpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7ci5yZW5kZXIoZSx0LG4pfSl9dD10fHx7fTt2YXIgaT10aGlzLnNyY0ltYWdlLG89aS5zcmMsdT1vLmxlbmd0aCxjPWkubmF0dXJhbFdpZHRoLGw9aS5uYXR1cmFsSGVpZ2h0LGY9dC53aWR0aCxkPXQuaGVpZ2h0LGg9dC5tYXhXaWR0aCxnPXQubWF4SGVpZ2h0LHA9dGhpcy5ibG9iJiZcImltYWdlL2pwZWdcIj09PXRoaXMuYmxvYi50eXBlfHwwPT09by5pbmRleE9mKFwiZGF0YTppbWFnZS9qcGVnXCIpfHxvLmluZGV4T2YoXCIuanBnXCIpPT09dS00fHxvLmluZGV4T2YoXCIuanBlZ1wiKT09PXUtNTtmJiYhZD9kPWwqZi9jPDwwOmQmJiFmP2Y9YypkL2w8PDA6KGY9YyxkPWwpLGgmJmY+aCYmKGY9aCxkPWwqZi9jPDwwKSxnJiZkPmcmJihkPWcsZj1jKmQvbDw8MCk7dmFyIG09e3dpZHRoOmYsaGVpZ2h0OmR9O2Zvcih2YXIgdyBpbiB0KW1bd109dFt3XTt2YXIgdj1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcImltZ1wiPT09dj9lLnNyYz1hKHRoaXMuc3JjSW1hZ2UsbSxwKTpcImNhbnZhc1wiPT09diYmcyh0aGlzLnNyY0ltYWdlLGUsbSxwKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9ucmVuZGVyJiZ0aGlzLm9ucmVuZGVyKGUpLG4mJm4oKX0scj1bXSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGN9LmFwcGx5KHQsciksISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0oKX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe2Z1bmN0aW9uIHQoZSl7Zm9yKHZhciB0PVsxNiwxMSwxMCwxNiwyNCw0MCw1MSw2MSwxMiwxMiwxNCwxOSwyNiw1OCw2MCw1NSwxNCwxMywxNiwyNCw0MCw1Nyw2OSw1NiwxNCwxNywyMiwyOSw1MSw4Nyw4MCw2MiwxOCwyMiwzNyw1Niw2OCwxMDksMTAzLDc3LDI0LDM1LDU1LDY0LDgxLDEwNCwxMTMsOTIsNDksNjQsNzgsODcsMTAzLDEyMSwxMjAsMTAxLDcyLDkyLDk1LDk4LDExMiwxMDAsMTAzLDk5XSxuPTA7NjQ+bjtuKyspe3ZhciByPUYoKHRbbl0qZSs1MCkvMTAwKTsxPnI/cj0xOnI+MjU1JiYocj0yNTUpLERbTltuXV09cn1mb3IodmFyIGk9WzE3LDE4LDI0LDQ3LDk5LDk5LDk5LDk5LDE4LDIxLDI2LDY2LDk5LDk5LDk5LDk5LDI0LDI2LDU2LDk5LDk5LDk5LDk5LDk5LDQ3LDY2LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5XSxvPTA7NjQ+bztvKyspe3ZhciBhPUYoKGlbb10qZSs1MCkvMTAwKTsxPmE/YT0xOmE+MjU1JiYoYT0yNTUpLHhbTltvXV09YX1mb3IodmFyIHM9WzEsMS4zODcwMzk4NDUsMS4zMDY1NjI5NjUsMS4xNzU4NzU2MDIsMSwuNzg1Njk0OTU4LC41NDExOTYxLC4yNzU4OTkzNzldLHU9MCxjPTA7OD5jO2MrKylmb3IodmFyIGw9MDs4Pmw7bCsrKVVbdV09MS8oRFtOW3VdXSpzW2NdKnNbbF0qOCksQ1t1XT0xLyh4W05bdV1dKnNbY10qc1tsXSo4KSx1Kyt9ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj0wLHI9MCxpPW5ldyBBcnJheSxvPTE7MTY+PW87bysrKXtmb3IodmFyIGE9MTthPD1lW29dO2ErKylpW3Rbcl1dPVtdLGlbdFtyXV1bMF09bixpW3Rbcl1dWzFdPW8scisrLG4rKztuKj0yfXJldHVybiBpfWZ1bmN0aW9uIHIoKXt5PW4oVyxIKSxiPW4oVixYKSxTPW4oeixxKSxJPW4oUSxZKX1mdW5jdGlvbiBpKCl7Zm9yKHZhciBlPTEsdD0yLG49MTsxNT49bjtuKyspe2Zvcih2YXIgcj1lO3Q+cjtyKyspQVszMjc2NytyXT1uLFRbMzI3Njcrcl09W10sVFszMjc2NytyXVsxXT1uLFRbMzI3Njcrcl1bMF09cjtmb3IodmFyIGk9LSh0LTEpOy1lPj1pO2krKylBWzMyNzY3K2ldPW4sVFszMjc2NytpXT1bXSxUWzMyNzY3K2ldWzFdPW4sVFszMjc2NytpXVswXT10LTEraTtlPDw9MSx0PDw9MX19ZnVuY3Rpb24gbygpe2Zvcih2YXIgZT0wOzI1Nj5lO2UrKylrW2VdPTE5NTk1KmUsa1tlKzI1Nj4+MF09Mzg0NzAqZSxrW2UrNTEyPj4wXT03NDcxKmUrMzI3Njgsa1tlKzc2OD4+MF09LTExMDU5KmUsa1tlKzEwMjQ+PjBdPS0yMTcwOSplLGtbZSsxMjgwPj4wXT0zMjc2OCplKzg0MjEzNzUsa1tlKzE1MzY+PjBdPS0yNzQzOSplLGtbZSsxNzkyPj4wXT0tNTMyOSplfWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PWVbMF0sbj1lWzFdLTE7bj49MDspdCYxPDxuJiYoR3w9MTw8Tyksbi0tLE8tLSwwPk8mJigyNTU9PUc/KHMoMjU1KSxzKDApKTpzKEcpLE89NyxHPTApfWZ1bmN0aW9uIHMoZSl7TS5wdXNoKGpbZV0pfWZ1bmN0aW9uIHUoZSl7cyhlPj44JjI1NSkscygyNTUmZSl9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGMsbCxmPTA7Y29uc3QgZD04LGg9NjQ7Zm9yKGw9MDtkPmw7KytsKXtuPWVbZl0scj1lW2YrMV0saT1lW2YrMl0sbz1lW2YrM10sYT1lW2YrNF0scz1lW2YrNV0sdT1lW2YrNl0sYz1lW2YrN107dmFyIGc9bitjLHA9bi1jLG09cit1LHc9ci11LHY9aStzLHk9aS1zLGI9bythLFM9by1hLEk9ZytiLFA9Zy1iLEY9bSt2LEQ9bS12O2VbZl09SStGLGVbZis0XT1JLUY7dmFyIHg9LjcwNzEwNjc4MSooRCtQKTtlW2YrMl09UCt4LGVbZis2XT1QLXgsST1TK3ksRj15K3csRD13K3A7dmFyIFU9LjM4MjY4MzQzMyooSS1EKSxDPS41NDExOTYxKkkrVSxUPTEuMzA2NTYyOTY1KkQrVSxBPS43MDcxMDY3ODEqRixSPXArQSxNPXAtQTtlW2YrNV09TStDLGVbZiszXT1NLUMsZVtmKzFdPVIrVCxlW2YrN109Ui1ULGYrPTh9Zm9yKGY9MCxsPTA7ZD5sOysrbCl7bj1lW2ZdLHI9ZVtmKzhdLGk9ZVtmKzE2XSxvPWVbZisyNF0sYT1lW2YrMzJdLHM9ZVtmKzQwXSx1PWVbZis0OF0sYz1lW2YrNTZdO3ZhciBHPW4rYyxPPW4tYyxfPXIrdSxCPXItdSxFPWkrcyxqPWktcyxrPW8rYSxOPW8tYSxXPUcrayxIPUctayx6PV8rRSxxPV8tRTtlW2ZdPVcreixlW2YrMzJdPVctejt2YXIgVj0uNzA3MTA2NzgxKihxK0gpO2VbZisxNl09SCtWLGVbZis0OF09SC1WLFc9TitqLHo9aitCLHE9QitPO3ZhciBYPS4zODI2ODM0MzMqKFctcSksUT0uNTQxMTk2MSpXK1gsWT0xLjMwNjU2Mjk2NSpxK1gsSz0uNzA3MTA2NzgxKnosSj1PK0ssWj1PLUs7ZVtmKzQwXT1aK1EsZVtmKzI0XT1aLVEsZVtmKzhdPUorWSxlW2YrNTZdPUotWSxmKyt9dmFyICQ7Zm9yKGw9MDtoPmw7KytsKSQ9ZVtsXSp0W2xdLExbbF09JD4wPyQrLjV8MDokLS41fDA7cmV0dXJuIEx9ZnVuY3Rpb24gbCgpe3UoNjU1MDQpLHUoMTYpLHMoNzQpLHMoNzApLHMoNzMpLHMoNzApLHMoMCkscygxKSxzKDEpLHMoMCksdSgxKSx1KDEpLHMoMCkscygwKX1mdW5jdGlvbiBmKGUsdCl7dSg2NTQ3MiksdSgxNykscyg4KSx1KHQpLHUoZSkscygzKSxzKDEpLHMoMTcpLHMoMCkscygyKSxzKDE3KSxzKDEpLHMoMykscygxNykscygxKX1mdW5jdGlvbiBkKCl7dSg2NTQ5OSksdSgxMzIpLHMoMCk7Zm9yKHZhciBlPTA7NjQ+ZTtlKyspcyhEW2VdKTtzKDEpO2Zvcih2YXIgdD0wOzY0PnQ7dCsrKXMoeFt0XSl9ZnVuY3Rpb24gaCgpe3UoNjU0NzYpLHUoNDE4KSxzKDApO2Zvcih2YXIgZT0wOzE2PmU7ZSsrKXMoV1tlKzFdKTtmb3IodmFyIHQ9MDsxMT49dDt0KyspcyhIW3RdKTtzKDE2KTtmb3IodmFyIG49MDsxNj5uO24rKylzKHpbbisxXSk7Zm9yKHZhciByPTA7MTYxPj1yO3IrKylzKHFbcl0pO3MoMSk7Zm9yKHZhciBpPTA7MTY+aTtpKyspcyhWW2krMV0pO2Zvcih2YXIgbz0wOzExPj1vO28rKylzKFhbb10pO3MoMTcpO2Zvcih2YXIgYT0wOzE2PmE7YSsrKXMoUVthKzFdKTtmb3IodmFyIGM9MDsxNjE+PWM7YysrKXMoWVtjXSl9ZnVuY3Rpb24gZygpe3UoNjU0OTgpLHUoMTIpLHMoMykscygxKSxzKDApLHMoMikscygxNykscygzKSxzKDE3KSxzKDApLHMoNjMpLHMoMCl9ZnVuY3Rpb24gcChlLHQsbixyLGkpe3ZhciBvLHM9aVswXSx1PWlbMjQwXTtjb25zdCBsPTE2LGY9NjMsZD02NDtmb3IodmFyIGg9YyhlLHQpLGc9MDtkPmc7KytnKVJbTltnXV09aFtnXTt2YXIgcD1SWzBdLW47bj1SWzBdLDA9PXA/YShyWzBdKToobz0zMjc2NytwLGEocltBW29dXSksYShUW29dKSk7Zm9yKHZhciBtPTYzO20+MCYmMD09UlttXTttLS0pO2lmKDA9PW0pcmV0dXJuIGEocyksbjtmb3IodmFyIHcsdj0xO20+PXY7KXtmb3IodmFyIHk9djswPT1SW3ZdJiZtPj12Oysrdik7dmFyIGI9di15O2lmKGI+PWwpe3c9Yj4+NDtmb3IodmFyIFM9MTt3Pj1TOysrUylhKHUpO2I9MTUmYn1vPTMyNzY3K1Jbdl0sYShpWyhiPDw0KStBW29dXSksYShUW29dKSx2Kyt9cmV0dXJuIG0hPWYmJmEocyksbn1mdW5jdGlvbiBtKCl7Zm9yKHZhciBlPVN0cmluZy5mcm9tQ2hhckNvZGUsdD0wOzI1Nj50O3QrKylqW3RdPWUodCl9ZnVuY3Rpb24gdyhlKXtpZigwPj1lJiYoZT0xKSxlPjEwMCYmKGU9MTAwKSxQIT1lKXt2YXIgbj0wO249NTA+ZT9NYXRoLmZsb29yKDVlMy9lKTpNYXRoLmZsb29yKDIwMC0yKmUpLHQobiksUD1lfX1mdW5jdGlvbiB2KCl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7ZXx8KGU9NTApLG0oKSxyKCksaSgpLG8oKSx3KGUpOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXR9dmFyIHksYixTLEksUCxGPShNYXRoLnJvdW5kLE1hdGguZmxvb3IpLEQ9bmV3IEFycmF5KDY0KSx4PW5ldyBBcnJheSg2NCksVT1uZXcgQXJyYXkoNjQpLEM9bmV3IEFycmF5KDY0KSxUPW5ldyBBcnJheSg2NTUzNSksQT1uZXcgQXJyYXkoNjU1MzUpLEw9bmV3IEFycmF5KDY0KSxSPW5ldyBBcnJheSg2NCksTT1bXSxHPTAsTz03LF89bmV3IEFycmF5KDY0KSxCPW5ldyBBcnJheSg2NCksRT1uZXcgQXJyYXkoNjQpLGo9bmV3IEFycmF5KDI1Niksaz1uZXcgQXJyYXkoMjA0OCksTj1bMCwxLDUsNiwxNCwxNSwyNywyOCwyLDQsNywxMywxNiwyNiwyOSw0MiwzLDgsMTIsMTcsMjUsMzAsNDEsNDMsOSwxMSwxOCwyNCwzMSw0MCw0NCw1MywxMCwxOSwyMywzMiwzOSw0NSw1Miw1NCwyMCwyMiwzMywzOCw0Niw1MSw1NSw2MCwyMSwzNCwzNyw0Nyw1MCw1Niw1OSw2MSwzNSwzNiw0OCw0OSw1Nyw1OCw2Miw2M10sVz1bMCwwLDEsNSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwXSxIPVswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXSx6PVswLDAsMiwxLDMsMywyLDQsMyw1LDUsNCw0LDAsMCwxLDEyNV0scT1bMSwyLDMsMCw0LDE3LDUsMTgsMzMsNDksNjUsNiwxOSw4MSw5Nyw3LDM0LDExMywyMCw1MCwxMjksMTQ1LDE2MSw4LDM1LDY2LDE3NywxOTMsMjEsODIsMjA5LDI0MCwzNiw1MSw5OCwxMTQsMTMwLDksMTAsMjIsMjMsMjQsMjUsMjYsMzcsMzgsMzksNDAsNDEsNDIsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTY5LDE3MCwxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMTAsMjExLDIxMiwyMTMsMjE0LDIxNSwyMTYsMjE3LDIxOCwyMjUsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQxLDI0MiwyNDMsMjQ0LDI0NSwyNDYsMjQ3LDI0OCwyNDksMjUwXSxWPVswLDAsMywxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFg9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLFE9WzAsMCwyLDEsMiw0LDQsMyw0LDcsNSw0LDQsMCwxLDIsMTE5XSxZPVswLDEsMiwzLDE3LDQsNSwzMyw0OSw2LDE4LDY1LDgxLDcsOTcsMTEzLDE5LDM0LDUwLDEyOSw4LDIwLDY2LDE0NSwxNjEsMTc3LDE5Myw5LDM1LDUxLDgyLDI0MCwyMSw5OCwxMTQsMjA5LDEwLDIyLDM2LDUyLDIyNSwzNywyNDEsMjMsMjQsMjUsMjYsMzgsMzksNDAsNDEsNDIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTYyLDE2MywxNjQsMTY1LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTc4LDE3OSwxODAsMTgxLDE4MiwxODMsMTg0LDE4NSwxODYsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjEwLDIxMSwyMTIsMjEzLDIxNCwyMTUsMjE2LDIxNywyMTgsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTBdO3RoaXMuZW5jb2RlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0obmV3IERhdGUpLmdldFRpbWUoKTt0JiZ3KHQpLE09bmV3IEFycmF5LEc9MCxPPTcsdSg2NTQ5NiksbCgpLGQoKSxmKGUud2lkdGgsZS5oZWlnaHQpLGgoKSxnKCk7dmFyIGk9MCxvPTAscz0wO0c9MCxPPTcsdGhpcy5lbmNvZGUuZGlzcGxheU5hbWU9XCJfZW5jb2RlX1wiO2Zvcih2YXIgYyxtLHYsUCxGLEQseCxULEEsTD1lLmRhdGEsUj1lLndpZHRoLGo9ZS5oZWlnaHQsTj00KlIsVz0wO2o+Vzspe2ZvcihjPTA7Tj5jOyl7Zm9yKEY9TipXK2MsRD1GLHg9LTEsVD0wLEE9MDs2ND5BO0ErKylUPUE+PjMseD00Kig3JkEpLEQ9RitUKk4reCxXK1Q+PWomJihELT1OKihXKzErVC1qKSksYyt4Pj1OJiYoRC09Yyt4LU4rNCksbT1MW0QrK10sdj1MW0QrK10sUD1MW0QrK10sX1tBXT0oa1ttXStrW3YrMjU2Pj4wXStrW1ArNTEyPj4wXT4+MTYpLTEyOCxCW0FdPShrW20rNzY4Pj4wXStrW3YrMTAyND4+MF0ra1tQKzEyODA+PjBdPj4xNiktMTI4LEVbQV09KGtbbSsxMjgwPj4wXStrW3YrMTUzNj4+MF0ra1tQKzE3OTI+PjBdPj4xNiktMTI4O2k9cChfLFUsaSx5LFMpLG89cChCLEMsbyxiLEkpLHM9cChFLEMscyxiLEkpLGMrPTMyfVcrPTh9aWYoTz49MCl7dmFyIEg9W107SFsxXT1PKzEsSFswXT0oMTw8TysxKS0xLGEoSCl9aWYodSg2NTQ5Nyksbil7Zm9yKHZhciB6PU0ubGVuZ3RoLHE9bmV3IFVpbnQ4QXJyYXkoeiksVj0wO3o+VjtWKyspcVtWXT1NW1ZdLmNoYXJDb2RlQXQoKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIHF9dmFyIFg9XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiK2J0b2EoTS5qb2luKFwiXCIpKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIFh9LHYoKX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXt2YXIgbj10aGlzO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIuayoeacieaUtuWIsOWbvueJh++8jOWPr+iDveeahOino+WGs+aWueahiO+8mmh0dHBzOi8vZ2l0aHViLmNvbS90aGluazIwMTEvbG9jYWxSZXNpemVJTUcvaXNzdWVzLzdcIik7dD10fHx7fSxuLmRlZmF1bHRzPXt3aWR0aDpudWxsLGhlaWdodDpudWxsLGZpZWxkTmFtZTpcImZpbGVcIixxdWFsaXR5Oi43fSxuLmZpbGU9ZTtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobi5kZWZhdWx0c1tyXT10W3JdKTtyZXR1cm4gdGhpcy5pbml0KCl9ZnVuY3Rpb24gaShlKXt2YXIgdD1udWxsO3JldHVybiB0PWU/W10uZmlsdGVyLmNhbGwoZG9jdW1lbnQuc2NyaXB0cyxmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXQuc3JjLmluZGV4T2YoZSl9KVswXTpkb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdLHQ/dC5zcmMuc3Vic3RyKDAsdC5zcmMubGFzdEluZGV4T2YoXCIvXCIpKTpudWxsfWZ1bmN0aW9uIG8oZSl7dmFyIHQ7dD1lLnNwbGl0KFwiLFwiKVswXS5pbmRleE9mKFwiYmFzZTY0XCIpPj0wP2F0b2IoZS5zcGxpdChcIixcIilbMV0pOnVuZXNjYXBlKGUuc3BsaXQoXCIsXCIpWzFdKTtmb3IodmFyIG49ZS5zcGxpdChcIixcIilbMF0uc3BsaXQoXCI6XCIpWzFdLnNwbGl0KFwiO1wiKVswXSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspcltpXT10LmNoYXJDb2RlQXQoaSk7cmV0dXJuIG5ldyBzLkJsb2IoW3IuYnVmZmVyXSx7dHlwZTpufSl9bi5wPWkoXCJscnpcIikrXCIvXCIsd2luZG93LlVSTD13aW5kb3cuVVJMfHx3aW5kb3cud2Via2l0VVJMO3ZhciBhPW4oMSkscz1uKDQpLHU9big1KSxjPWZ1bmN0aW9uKGUpe3ZhciB0PS9PUyAoXFxkKV8uKiBsaWtlIE1hYyBPUyBYL2cuZXhlYyhlKSxuPS9BbmRyb2lkIChcXGQuKj8pOy9nLmV4ZWMoZSl8fC9BbmRyb2lkXFwvKFxcZC4qPykgL2cuZXhlYyhlKTtyZXR1cm57b2xkSU9TOnQ/K3QucG9wKCk8ODohMSxvbGRBbmRyb2lkOm4/K24ucG9wKCkuc3Vic3RyKDAsMyk8NC41OiExLGlPUzovXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLy50ZXN0KGUpLGFuZHJvaWQ6L0FuZHJvaWQvZy50ZXN0KGUpLG1RUUJyb3dzZXI6L01RUUJyb3dzZXIvZy50ZXN0KGUpfX0obmF2aWdhdG9yLnVzZXJBZ2VudCk7ci5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmZpbGUsbj1cInN0cmluZ1wiPT10eXBlb2YgdCxyPS9eZGF0YTovLnRlc3QodCksaT1uZXcgSW1hZ2UsdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGM9bj90OlVSTC5jcmVhdGVPYmplY3RVUkwodCk7aWYoZS5pbWc9aSxlLmJsb2I9YyxlLmNhbnZhcz11LG4/ZS5maWxlTmFtZT1yP1wiYmFzZTY0LmpwZ1wiOnQuc3BsaXQoXCIvXCIpLnBvcCgpOmUuZmlsZU5hbWU9dC5uYW1lLCFkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQpdGhyb3cgbmV3IEVycm9yKFwi5rWP6KeI5Zmo5LiN5pSv5oyBY2FudmFzXCIpO3JldHVybiBuZXcgYShmdW5jdGlvbihuLGEpe2kub25lcnJvcj1mdW5jdGlvbigpe3ZhciBlPW5ldyBFcnJvcihcIuWKoOi9veWbvueJh+aWh+S7tuWksei0pVwiKTt0aHJvdyBhKGUpLGV9LGkub25sb2FkPWZ1bmN0aW9uKCl7ZS5fZ2V0QmFzZTY0KCkudGhlbihmdW5jdGlvbihlKXtpZihlLmxlbmd0aDwxMCl7dmFyIHQ9bmV3IEVycm9yKFwi55Sf5oiQYmFzZTY05aSx6LSlXCIpO3Rocm93IGEodCksdH1yZXR1cm4gZX0pLnRoZW4oZnVuY3Rpb24ocil7dmFyIGk9bnVsbDtcIm9iamVjdFwiPT10eXBlb2YgZS5maWxlJiZyLmxlbmd0aD5lLmZpbGUuc2l6ZT8oaT1uZXcgRm9ybURhdGEsdD1lLmZpbGUpOihpPW5ldyBzLkZvcm1EYXRhLHQ9byhyKSksaS5hcHBlbmQoZS5kZWZhdWx0cy5maWVsZE5hbWUsdCxlLmZpbGVOYW1lLnJlcGxhY2UoL1xcLi4rL2csXCIuanBnXCIpKSxuKHtmb3JtRGF0YTppLGZpbGVMZW46K3Quc2l6ZSxiYXNlNjQ6cixiYXNlNjRMZW46ci5sZW5ndGgsb3JpZ2luOmUuZmlsZSxmaWxlOnR9KTtmb3IodmFyIGEgaW4gZSllLmhhc093blByb3BlcnR5KGEpJiYoZVthXT1udWxsKTtVUkwucmV2b2tlT2JqZWN0VVJMKGUuYmxvYil9KX0sIXImJihpLmNyb3NzT3JpZ2luPVwiKlwiKSxpLnNyYz1jfSl9LHIucHJvdG90eXBlLl9nZXRCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcsbj1lLmZpbGUscj1lLmNhbnZhcztyZXR1cm4gbmV3IGEoZnVuY3Rpb24oaSl7dHJ5e3UuZ2V0RGF0YShcIm9iamVjdFwiPT10eXBlb2Ygbj9uOnQsZnVuY3Rpb24oKXtlLm9yaWVudGF0aW9uPXUuZ2V0VGFnKHRoaXMsXCJPcmllbnRhdGlvblwiKSxlLnJlc2l6ZT1lLl9nZXRSZXNpemUoKSxlLmN0eD1yLmdldENvbnRleHQoXCIyZFwiKSxyLndpZHRoPWUucmVzaXplLndpZHRoLHIuaGVpZ2h0PWUucmVzaXplLmhlaWdodCxlLmN0eC5maWxsU3R5bGU9XCIjZmZmXCIsZS5jdHguZmlsbFJlY3QoMCwwLHIud2lkdGgsci5oZWlnaHQpLGMub2xkSU9TP2UuX2NyZWF0ZUJhc2U2NEZvck9sZElPUygpLnRoZW4oaSk6ZS5fY3JlYXRlQmFzZTY0KCkudGhlbihpKX0pfWNhdGNoKG8pe3Rocm93IG5ldyBFcnJvcihvKX19KX0sci5wcm90b3R5cGUuX2NyZWF0ZUJhc2U2NEZvck9sZElPUz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxyPWUuY2FudmFzLGk9ZS5kZWZhdWx0cyxvPWUub3JpZW50YXRpb247cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKGUpeyFmdW5jdGlvbigpe3ZhciBhPVtuKDYpXTsoZnVuY3Rpb24obil7dmFyIGE9bmV3IG4odCk7XCI1Njc4XCIuaW5kZXhPZihvKT4tMT9hLnJlbmRlcihyLHt3aWR0aDpyLmhlaWdodCxoZWlnaHQ6ci53aWR0aCxvcmllbnRhdGlvbjpvfSk6YS5yZW5kZXIocix7d2lkdGg6ci53aWR0aCxoZWlnaHQ6ci5oZWlnaHQsb3JpZW50YXRpb246b30pLGUoci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsaS5xdWFsaXR5KSl9KS5hcHBseShudWxsLGEpfSgpfSl9LHIucHJvdG90eXBlLl9jcmVhdGVCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5yZXNpemUscj1lLmltZyxpPWUuY2FudmFzLG89ZS5jdHgscz1lLmRlZmF1bHRzLHU9ZS5vcmllbnRhdGlvbjtzd2l0Y2godSl7Y2FzZSAzOm8ucm90YXRlKDE4MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC53aWR0aCwtdC5oZWlnaHQsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA2Om8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA4Om8ucm90YXRlKDI3MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC5oZWlnaHQsMCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDI6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8uZHJhd0ltYWdlKHIsMCwwLHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNDpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoMTgwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LndpZHRoLC10LmhlaWdodCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDU6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA3Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSgyNzAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQuaGVpZ2h0LDAsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7ZGVmYXVsdDpvLmRyYXdJbWFnZShyLDAsMCx0LndpZHRoLHQuaGVpZ2h0KX1yZXR1cm4gbmV3IGEoZnVuY3Rpb24oZSl7Yy5vbGRBbmRyb2lkfHxjLm1RUUJyb3dzZXJ8fCFuYXZpZ2F0b3IudXNlckFnZW50PyFmdW5jdGlvbigpe3ZhciB0PVtuKDcpXTsoZnVuY3Rpb24odCl7dmFyIG49bmV3IHQscj1vLmdldEltYWdlRGF0YSgwLDAsaS53aWR0aCxpLmhlaWdodCk7ZShuLmVuY29kZShyLDEwMCpzLnF1YWxpdHkpKX0pLmFwcGx5KG51bGwsdCl9KCk6ZShpLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixzLnF1YWxpdHkpKX0pfSxyLnByb3RvdHlwZS5fZ2V0UmVzaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLG49ZS5kZWZhdWx0cyxyPW4ud2lkdGgsaT1uLmhlaWdodCxvPWUub3JpZW50YXRpb24sYT17d2lkdGg6dC53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9O2lmKFwiNTY3OFwiLmluZGV4T2Yobyk+LTEmJihhLndpZHRoPXQuaGVpZ2h0LGEuaGVpZ2h0PXQud2lkdGgpLGEud2lkdGg8cnx8YS5oZWlnaHQ8aSlyZXR1cm4gYTt2YXIgcz1hLndpZHRoL2EuaGVpZ2h0O2ZvcihyJiZpP3M+PXIvaT9hLndpZHRoPnImJihhLndpZHRoPXIsYS5oZWlnaHQ9TWF0aC5jZWlsKHIvcykpOmEuaGVpZ2h0PmkmJihhLmhlaWdodD1pLGEud2lkdGg9TWF0aC5jZWlsKGkqcykpOnI/cjxhLndpZHRoJiYoYS53aWR0aD1yLGEuaGVpZ2h0PU1hdGguY2VpbChyL3MpKTppJiZpPGEuaGVpZ2h0JiYoYS53aWR0aD1NYXRoLmNlaWwoaSpzKSxhLmhlaWdodD1pKTthLndpZHRoPj0zMjY0fHxhLmhlaWdodD49MjQ0ODspYS53aWR0aCo9LjgsYS5oZWlnaHQqPS44O3JldHVybiBhfSx3aW5kb3cubHJ6PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyByKGUsdCl9LHdpbmRvdy5scnoudmVyc2lvbj1cIjQuOS40MFwiLFxuZS5leHBvcnRzPXdpbmRvdy5scnp9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxyei5hbGwuYnVuZGxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IGhNZXRob2RzIGZyb20gJy4vaGFuZGxlLW1ldGhvZHMnXG5pbXBvcnQgYU1ldGhvZHMgZnJvbSAnLi9hc3Npc3QtbWV0aG9kcydcbk9iamVjdC5hc3NpZ24oSW5zdGFuY2UucHJvdG90eXBlLCBoTWV0aG9kcywgYU1ldGhvZHMpXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaW5kZXguanMiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuY29uc3QgbWV0aG9kcyA9IHtcbiAgLypcbiAgICogZnVuYyBjcmVhdGUgYSBuZXcgcm93IGVsZW1lbnRcbiAgICogQHBhcmFtIHtvYmp9IGRhdGFcbiAgICogICAgICAgICAgdGFnIHtzdHJ9XG4gICAqICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZSB7Ym9vbGVhbn0gZGVmYXVsdDogdHJ1ZVxuICAgKiAgICAgICAgICBpZCB7Ym9vbGVhbn0gd2hldGhlciBuZWVkIGEgaWQgZGVmYXVsdDogZmFsc2VcbiAgICogICAgICAgICAgYnIge2Jvb2xlYW59IHdoZXRoZXIgbmVlZCBhIGJyIGVsZW1lbnQgYWZ0ZXIgY3VycmVudCByb3cgZWxlbWVudCBkZWZhdWx0OiBmYWxzZVxuICAgKiBAcmV0dXJuICB7bm9kZX1cbiAgICoqL1xuICBuZXdSb3cgKGRhdGEgPSB7fSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcgfHwgY29uc3RhbnQuUk9XX1RBRylcbiAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgcm93LmRhdGFzZXQuZWRpdG9yUm93ID0gbWV0aG9kcy5jcmVhdGVSYW5kb21JZCgncm93JylcbiAgICB9XG4gICAgaWYgKGRhdGEuYnIpIHtcbiAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGJyKVxuICAgIH1cbiAgICByb3cuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBkYXRhLmNvbnRlbnRlZGl0YWJsZSAhPT0gZmFsc2UpXG4gICAgcmV0dXJuIHJvd1xuICB9LFxuICAvLyBnZXQgc2VsZWN0aW9uXG4gIGdldFNlbGVjdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICB9LFxuICAvKlxuICAgKiBmdW5jIGluc2VydCBhIGVsZW1lbnQgYWZ0ZXIgdGFyZ2V0IGVsZW1lbnRcbiAgICogQHBhcmFtIG5ld0VsZW1lbnQge25vZGV9XG4gICAqIEBwYXJhbSB0YXJnZXRFbGVtZW50IHtub2RlfVxuICAgKiovXG4gIGluc2VydEFmdGVyIChuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudCA9IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQubGFzdENoaWxkID09PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50Lm5leHRTaWJsaW5nKVxuICAgIH1cbiAgfSxcbiAgLypcbiAgICogZnVuYyBjcmVhdGUgYSByYW5kb20gaWRcbiAgICogQHBhcmFtIHByZWZmaXgge3N0cn0gaWQncyBwcmVmZml4XG4gICAqIEByZXR1cm4gaWRcbiAgICoqL1xuICBjcmVhdGVSYW5kb21JZCAocHJlZmZpeCkge1xuICAgIHJldHVybiBgJHtwcmVmZml4IHx8ICdpZCd9LSR7TWF0aC5yYW5kb20oKSAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKX1gXG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBlZGl0IHpvbmUgZWxlbWVudFxuICAgKiovXG4gIGVkaXRab25lICgpIHtcbiAgICBpZiAobWV0aG9kcy5lZGl0Wm9uZV9jYWNoZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGVcbiAgICB9XG4gICAgbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvcj1cImNvbnRlbnRcIl0nKVxuICAgIHJldHVybiBtZXRob2RzLmVkaXRab25lX2NhY2hlXG4gIH0sXG4gIC8qXG4gICAqIHNldCByYW5nZSBhdCB0YXJnZXQgbm9kZVxuICAgKiovXG4gIHNldFJhbmdlQXQgKG5vZGUsIGNoZWNrQWxsKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgaWYgKGNoZWNrQWxsKSB7XG4gICAgICByYW5nZS5zZXRTdGFydChub2RlLCAwKVxuICAgICAgbGV0IGVuZCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPyBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIDogKG5vZGUubGVuZ3RoID8gbm9kZS5sZW5ndGggOiAwKVxuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgMClcbiAgICAgIHJhbmdlLnNldEVuZChub2RlLCAwKVxuICAgIH1cbiAgICBsZXQgc2VsZWN0aW9uID0gbWV0aG9kcy5nZXRTZWxlY3Rpb24oKVxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgfSxcbiAgZ2V0UmFuZ2UgKCkge1xuICAgIGxldCBzID0gbWV0aG9kcy5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLnJhbmdlQ291bnQpIHtcbiAgICAgIHJldHVybiBzLmdldFJhbmdlQXQoMClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvYXNzaXN0LW1ldGhvZHMuanMiLCJpbXBvcnQgeyBpc09iaiB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgUkggZnJvbSAnLi4vcmFuZ2UtaGFuZGxlcidcbi8qXG4gKiBJbnNwZWN0IGFuZCBoaWdobGlnaHQgbW9kdWxlXG4gKiovXG5jbGFzcyBJbnNwZWN0b3Ige1xuICBjb25zdHJ1Y3RvciAobW9kdWxlTmFtZSkge1xuICAgIHRoaXMubW9kdWxlTmFtZSA9IG1vZHVsZU5hbWVcbiAgfVxuXG4gIGFkZCAodHlwZSwgcGFyYW0pIHtcbiAgICBsZXQgbW9kdWxlTmFtZSA9IHRoaXMubW9kdWxlTmFtZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbW9kdWxlTmFtZSBtdXN0IGJlIHN0cmluZycpXG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3IgdGFnIGNhbiBvbmx5IHJlY2VpdmUgYSBzdHJpbmcgcGFyYW0gd2hpY2ggc3RhbmQgZm9yIHRhZyBuYW1lJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3IudGFnTWFwW3BhcmFtLnRvVXBwZXJDYXNlKCldID0gbW9kdWxlTmFtZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBpZiAoIWlzT2JqKHBhcmFtKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciBzdHlsZSBjYW4gb25seSByZWNlaXZlIGEgb2JqZWN0IHBhcmFtJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3Iuc3R5bGVzW21vZHVsZU5hbWVdID0gcGFyYW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XG4gICAgICAgIGlmICghaXNPYmoocGFyYW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIGF0dHJpYnV0ZSBjYW4gb25seSByZWNlaXZlIGEgb2JqZWN0IHBhcmFtJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3IuYXR0cmlidXRlc1ttb2R1bGVOYW1lXSA9IHBhcmFtXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaW5zcGVjdG9yIHR5cGUnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaW5zcGVjdF90YWcgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgbGV0IGluc3BlY3RSZXN1bHQgPSBJbnNwZWN0b3IudGFnTWFwW25vZGUubm9kZU5hbWVdXG4gICAgICBpZiAoaW5zcGVjdFJlc3VsdCAmJiAhcmVzdWx0LmluY2x1ZGVzKGluc3BlY3RSZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGluc3BlY3RSZXN1bHQpXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGluc3BlY3Rfc3R5bGUgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgaWYgKCFub2RlLnN0eWxlKSBicmVha1xuICAgICAgT2JqZWN0LmtleXMoSW5zcGVjdG9yLnN0eWxlcykuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgbGV0IG1vZHVsZVN0eWxlID0gSW5zcGVjdG9yLnN0eWxlc1ttb2R1bGVOYW1lXVxuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVTdHlsZSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgY3VyVmFsdWUgPSBtb2R1bGVTdHlsZVtpdGVtXVxuICAgICAgICAgIGlmICh0eXBlb2YgY3VyVmFsdWUgPT09ICdzdHJpbmcnICYmIG5vZGUuc3R5bGVbaXRlbV0gPT09IGN1clZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSBjdXJWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJWYWx1ZSkpIHtcbiAgICAgICAgICAgIGN1clZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGVbaXRlbV0gPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGluc3BlY3RfYXR0cmlidXRlIChub2RlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gUkgucHJvdG90eXBlLmVkaXRab25lKCkpIHtcbiAgICAgIGlmICghbm9kZS5nZXRBdHRyaWJ1dGUpIGJyZWFrXG4gICAgICBPYmplY3Qua2V5cyhJbnNwZWN0b3IuYXR0cmlidXRlcykuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgbGV0IG1vZHVsZUF0dHIgPSBJbnNwZWN0b3IuYXR0cmlidXRlc1ttb2R1bGVOYW1lXVxuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVBdHRyKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCB2YWx1ZSA9IG1vZHVsZUF0dHJbaXRlbV1cbiAgICAgICAgICBsZXQgbm9kZVZhbCA9IG5vZGUuZ2V0QXR0cmlidXRlKGl0ZW0pXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICAgIGlmIChub2RlVmFsID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IHZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgbm9kZVZhbCA9PT0gdmFsdWUgfHwgbm9kZVZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuSW5zcGVjdG9yLnRhZ01hcCA9IHt9XG5JbnNwZWN0b3Iuc3R5bGVzID0ge31cbkluc3BlY3Rvci5hdHRyaWJ1dGVzID0ge31cbkluc3BlY3Rvci5hY3RpdmVJdGVtcyA9IHt9XG5cbkluc3BlY3Rvci5ydW4gPSAodHlwZSwgbm9kZUxpc3QpID0+IHtcbiAgbGV0IGZuID0gSW5zcGVjdG9yLnByb3RvdHlwZVsnaW5zcGVjdF8nICsgdHlwZV1cbiAgbGV0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgQXJyYXkuaXNBcnJheShub2RlTGlzdCkpIHtcbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goZm4obm9kZSkpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkluc3BlY3Rvci5yZW1vdmVEdXBsYXRlID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgLy8gbWVyZ2Ugc2FtZSBtb2R1bGUgaW5zcGVjdCByZXN1bHRcbiAgbGV0IHNhbWVTdHlsZU1hcCA9IHt9XG4gIGxpc3QuZm9yRWFjaChtID0+IHtcbiAgICBpZiAodHlwZW9mIG0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBzYW1lU3R5bGVNYXBbbV0gPSBzYW1lU3R5bGVNYXBbbV0gPyBzYW1lU3R5bGVNYXBbbV0gKyAxIDogMVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtKSkge1xuICAgICAgbSA9IEFycmF5LmZyb20obmV3IFNldChtKSlcbiAgICAgIG0uZm9yRWFjaChhbSA9PiB7XG4gICAgICAgIHNhbWVTdHlsZU1hcFthbV0gPSBzYW1lU3R5bGVNYXBbYW1dID8gc2FtZVN0eWxlTWFwW2FtXSArIDEgOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbiAgbGV0IG1lcmdlZFN0eWxlID0gW11cbiAgT2JqZWN0LmtleXMoc2FtZVN0eWxlTWFwKS5mb3JFYWNoKG0gPT4ge1xuICAgIGlmIChzYW1lU3R5bGVNYXBbbV0gPT09IGxpc3QubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTdHlsZS5wdXNoKG0pXG4gICAgfVxuICB9KVxuICByZXR1cm4gbWVyZ2VkU3R5bGVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3JcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsImltcG9ydCBwb2x5ZmlsbCBmcm9tICcuL3V0aWwvcG9seWZpbGwtaWUnXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzL2luZGV4J1xuaW1wb3J0IGJ1aWxkSW5TaG9ydGN1dCBmcm9tICcuL3Nob3J0Y3V0J1xuaW1wb3J0IGNvbnN0YW50Q29uZmlnIGZyb20gJy4vY29uc3RhbnQtY29uZmlnJ1xuaW1wb3J0IGVkaXRvciBmcm9tICcuL2VkaXRvci9lZGl0b3InXG5pbXBvcnQgYnVpbGRJbkNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5pbXBvcnQgaW5pdEV4Y2x1ZGVSdWxlIGZyb20gJy4vbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzJ1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL21vZHVsZS1pbnNwZWN0J1xuaW1wb3J0IGkxOG5aaENuIGZyb20gJy4vaTE4bi96aC1jbidcbmltcG9ydCBpMThuRW5VcyBmcm9tICcuL2kxOG4vZW4tdXMnXG5pbXBvcnQge1xuICBtaXhpbixcbiAgaXNPYmpcbn0gZnJvbSAnLi91dGlsJ1xuXG5wb2x5ZmlsbCgpXG5cbmNsYXNzIEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IG1vZHVsZXMgPSBbLi4uYnVpbGRJbk1vZHVsZXNdXG4gICAgbGV0IHJlc2VydmVkTmFtZXMgPSB7fVxuICAgIG1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgIGlmIChtLm5hbWUpIHtcbiAgICAgICAgcmVzZXJ2ZWROYW1lc1ttLm5hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgY29tcG9uZW50cyA9IHt9XG4gICAgY29uc3QgbW9kdWxlc01hcCA9IHt9XG5cbiAgICAvLyBleHRlbmRlZCBtb2R1bGVzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5leHRlbmRNb2R1bGVzKSkge1xuICAgICAgb3B0aW9ucy5leHRlbmRNb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZS5uYW1lICYmICFyZXNlcnZlZE5hbWVzW21vZHVsZS5uYW1lXSkge1xuICAgICAgICAgIG1vZHVsZXMucHVzaChtb2R1bGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHRlbmRlZCBtb2R1bGUgbXVzdCBoYXZlIGEgbmFtZSBhbmQgc2hvdWxkIG5vdCBiZSB0aGUgc2FtZSBhcyBidWlsZEluIG1vZHVsZScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbW9kdWxlcyBpbiB1c2VcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLm1vZHVsZXMpKSB7XG4gICAgICBsZXQgbSA9IFtdXG4gICAgICBvcHRpb25zLm1vZHVsZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kdWxlc1xcJ3MgaXRlbSBtdXN0IGJlIHN0cmluZycpXG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgaWYgKG1vZHVsZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBtLnB1c2gobW9kdWxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBtb2R1bGVzID0gbVxuICAgIH1cblxuICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgLy8gY29uZmlnXG4gICAgICBsZXQgY3VyQ29uZmlnID0gb3B0aW9uc1ttb2R1bGUubmFtZV1cbiAgICAgIGxldCBtb2R1bGVDb25maWcgPSBtb2R1bGVcbiAgICAgIGlmIChpc09iaihjdXJDb25maWcpICYmIGlzT2JqKG1vZHVsZUNvbmZpZykpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtb2R1bGVDb25maWcsIGN1ckNvbmZpZylcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBudWxsXG4gICAgICBtb2R1bGUuZm9yYmlkZGVuID0gbnVsbFxuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsZXQgaW5zcGVjdG9yID0gbmV3IEluc3BlY3Rvcihtb2R1bGUubmFtZSlcbiAgICAgICAgbW9kdWxlLmluc3BlY3QoaW5zcGVjdG9yLmFkZC5iaW5kKGluc3BlY3RvcikpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUudHlwZSA9ICdmbidcbiAgICAgIH1cbiAgICAgIG1vZHVsZS5leGNsdWRlID0gaW5pdEV4Y2x1ZGVSdWxlKG1vZHVsZSwgbW9kdWxlcylcblxuICAgICAgaWYgKG1vZHVsZS50YWIpIHtcbiAgICAgICAgbW9kdWxlLnRhYi5tb2R1bGUgPSBtb2R1bGVcblxuICAgICAgICAvLyBhZGQgYWN0aXZlSXRlbSBwcm9wXG4gICAgICAgIG1vZHVsZS50YWIucHJvcHMgPSBtb2R1bGUudGFiLnByb3BzID8gT2JqZWN0LmFzc2lnbihtb2R1bGUudGFiLnByb3BzLCB7YWN0aXZlSXRlbTogW1N0cmluZywgQm9vbGVhbl0sIGZvcmJpZGRlbjogQm9vbGVhbn0pIDoge2FjdGl2ZUl0ZW06IFtTdHJpbmcsIEJvb2xlYW5dLCBmb3JiaWRkZW46IEJvb2xlYW59XG4gICAgICAgIG1vZHVsZS50YWJOYW1lID0gYHRhYi0ke21vZHVsZS5uYW1lfWBcbiAgICAgICAgY29tcG9uZW50c1ttb2R1bGUudGFiTmFtZV0gPSBtb2R1bGUudGFiXG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pY29ucyAmJiBvcHRpb25zLmljb25zW21vZHVsZS5uYW1lXSkge1xuICAgICAgICBtb2R1bGUuaWNvbiA9IG9wdGlvbnMuaWNvbnNbbW9kdWxlLm5hbWVdXG4gICAgICB9XG4gICAgICBtb2R1bGUuaGFzVGFiID0gISFtb2R1bGUudGFiXG5cbiAgICAgIC8vIHByZXZlbnQgdnVlIHN5bmNcbiAgICAgIGRlbGV0ZSBtb2R1bGUudGFiXG5cbiAgICAgIG1vZHVsZXNNYXBbbW9kdWxlLm5hbWVdID0gbW9kdWxlXG4gICAgfSlcblxuICAgIC8vIGkxOG5cbiAgICBjb25zdCBpMThuID0geyd6aC1jbic6IGkxOG5aaENuLCAnZW4tdXMnOiBpMThuRW5Vc31cbiAgICBjb25zdCBjdXN0b21JMThuID0gb3B0aW9ucy5pMThuIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoY3VzdG9tSTE4bikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpMThuW2tleV0gPSBpMThuW2tleV0gPyBPYmplY3QuYXNzaWduKGkxOG5ba2V5XSwgY3VzdG9tSTE4bltrZXldKSA6IGN1c3RvbUkxOG5ba2V5XVxuICAgIH0pXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlIHx8ICdlbi11cydcbiAgICBjb25zdCBsb2NhbGUgPSBpMThuW2xhbmd1YWdlXVxuXG4gICAgLy8gc2hvcnRjdXRcbiAgICBvcHRpb25zLnNob3J0Y3V0ID0gT2JqZWN0LmFzc2lnbihidWlsZEluU2hvcnRjdXQsIG9wdGlvbnMuc2hvcnRjdXQgfHwge30pXG4gICAgY29uc3Qgc2hvcnRjdXQgPSB7fVxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuc2hvcnRjdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBpdGVtID0gb3B0aW9ucy5zaG9ydGN1dFtrZXldXG4gICAgICBsZXQga2V5Q29kZSA9IGl0ZW0ua2V5Q29kZVxuICAgICAgc2hvcnRjdXRba2V5Q29kZV0gPSBzaG9ydGN1dFtrZXlDb2RlXSB8fCBbXVxuICAgICAgc2hvcnRjdXRba2V5Q29kZV0ucHVzaChpdGVtKVxuICAgICAgaXRlbS5uYW1lID0ga2V5XG4gICAgfSlcblxuICAgIC8vIG1lcmdlIGNvbW1hbmRzXG4gICAgaWYgKGlzT2JqKG9wdGlvbnMuY29tbWFuZHMpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGJ1aWxkSW5Db21tYW5kcywgb3B0aW9ucy5jb21tYW5kcylcbiAgICB9XG5cbiAgICAvLyBzcGVsbGNoZWNrXG4gICAgY29uc3Qgc3BlbGxjaGVjayA9IG9wdGlvbnMuc3BlbGxjaGVjayB8fCBmYWxzZVxuXG4gICAgY29uc3QgY29tcG8gPSBtaXhpbihlZGl0b3IsIHtcbiAgICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge21vZHVsZXMsIGxvY2FsZSwgc2hvcnRjdXQsIG1vZHVsZXNNYXAsIHNwZWxsY2hlY2ssIGNvbnN0YW50Q29uZmlnfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHNcbiAgICB9KVxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29tcG8pXG4gIH1cblxuICAvKipcbiAgICogZ2xvYmFsIGluc3RhbGxcbiAgICogQHBhcmFtIFZ1ZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGluc3RhbGwoVnVlLCBvcHRpb25zID0ge30pIHtcbiAgICBWdWUuY29tcG9uZW50KG9wdGlvbnMubmFtZSB8fCAnbXktdnVlLWVkaXRvcicsIG5ldyBFZGl0b3Iob3B0aW9ucykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cbi8vIHRvIGNoYW5nZSBCYWJlbDYgZXhwb3J0J3MgcmVzdWx0XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRvclxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gICAgaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJ2luY2x1ZGVzJywge1xuICAgICAgICAgICAgdmFsdWUoc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gTGV0IE8gYmUgPyBUb09iamVjdCh0aGlzIHZhbHVlKS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBPYmplY3QodGhpcylcblxuICAgICAgICAgICAgICAgIC8vIDIuIExldCBsZW4gYmUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gby5sZW5ndGggPj4+IDBcblxuICAgICAgICAgICAgICAgIC8vIDMuIElmIGxlbiBpcyAwLCByZXR1cm4gZmFsc2UuXG4gICAgICAgICAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyA0LiBMZXQgbiBiZSA/IFRvSW50ZWdlcihmcm9tSW5kZXgpLlxuICAgICAgICAgICAgICAgIC8vICAgIChJZiBmcm9tSW5kZXggaXMgdW5kZWZpbmVkLCB0aGlzIHN0ZXAgcHJvZHVjZXMgdGhlIHZhbHVlIDAuKVxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBmcm9tSW5kZXggfCAwXG5cbiAgICAgICAgICAgICAgICAvLyA1LiBJZiBuIOKJpSAwLCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gIGEuIExldCBrIGJlIG4uXG4gICAgICAgICAgICAgICAgLy8gNi4gRWxzZSBuIDwgMCxcbiAgICAgICAgICAgICAgICAvLyAgYS4gTGV0IGsgYmUgbGVuICsgbi5cbiAgICAgICAgICAgICAgICAvLyAgYi4gSWYgayA8IDAsIGxldCBrIGJlIDAuXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBNYXRoLm1heChuID49IDAgPyBuIDogbGVuIC0gTWF0aC5hYnMobiksIDApXG5cbiAgICAgICAgICAgICAgICAvLyA3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cbiAgICAgICAgICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZWxlbWVudEsgYmUgdGhlIHJlc3VsdCBvZiA/IEdldChPLCAhIFRvU3RyaW5nKGspKS5cbiAgICAgICAgICAgICAgICAgICAgLy8gYi4gSWYgU2FtZVZhbHVlWmVybyhzZWFyY2hFbGVtZW50LCBlbGVtZW50SykgaXMgdHJ1ZSwgcmV0dXJuIHRydWUuXG4gICAgICAgICAgICAgICAgICAgIC8vIGMuIEluY3JlYXNlIGsgYnkgMS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogPT09IHByb3ZpZGVzIHRoZSBjb3JyZWN0IFwiU2FtZVZhbHVlWmVyb1wiIGNvbXBhcmlzb24gbmVlZGVkIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvW2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDguIFJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyB0ZXh0LmNvbnRhaW5zKClcbiAgICBpZiAoIVRleHQucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgICAgIFRleHQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMgPT09IG5vZGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJpbXBvcnQgYWxpZ24gZnJvbSAnLi9hbGlnbi9pbmRleCdcbmltcG9ydCBmb250IGZyb20gJy4vZm9udC9pbmRleCdcbmltcG9ydCBmdWxsU2NyZWVuIGZyb20gJy4vZnVsbC1zY3JlZW4vaW5kZXgnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZS9pbmRleCdcbmltcG9ydCBib2xkIGZyb20gJy4vYm9sZCdcbmltcG9ydCBpdGFsaWMgZnJvbSAnLi9pdGFsaWMnXG5pbXBvcnQgdW5kZXJsaW5lIGZyb20gJy4vdW5kZXJsaW5lJ1xuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IHF1b3RlIGZyb20gJy4vcXVvdGUnXG5pbXBvcnQgaW5kZW50IGZyb20gJy4vaW5kZW50J1xuaW1wb3J0IG91dGRlbnQgZnJvbSAnLi9vdXRkZW50J1xuaW1wb3J0IHVsIGZyb20gJy4vdWwnXG5pbXBvcnQgb2wgZnJvbSAnLi9vbCdcbmltcG9ydCBsaW5ldGhyb3VnaCBmcm9tICcuL2xpbmV0aHJvdWdoJ1xuaW1wb3J0IGl0b2RvIGZyb20gJy4vaWNvdXJ0LXRvZG8nXG5pbXBvcnQgZm9yZUNvbG9yIGZyb20gJy4vZm9yZS1jb2xvcidcblxuXG4vKipcbiAqIGJ1aWxkLWluIG1vZHVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIGZvbnQsXG4gIGFsaWduLFxuICBpbWFnZSxcbiAgZnVsbFNjcmVlbixcbiAgYm9sZCxcbiAgaXRhbGljLFxuICB1bmRlcmxpbmUsXG4gIHRvZG8sXG4gIHF1b3RlLFxuICBpbmRlbnQsXG4gIG91dGRlbnQsXG4gIHVsLFxuICBvbCxcbiAgbGluZXRocm91Z2gsXG4gIGl0b2RvLFxuICBmb3JlQ29sb3Jcbl1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYWxpZ24nLFxuICBpY29uOiAnaXVpLWljb24gaXVpLWljb24tYWxpZ24nLFxuICB0YWIsXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnc3R5bGUnLCB7XG4gICAgICAndGV4dEFsaWduJzogWydjZW50ZXInLCAncmlnaHQnXVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2FsaWduL2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIG4gPSBuIHx8ICdsZWZ0J1xuICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgJ2xlZnQnOiAyLFxuICAgICAgICAnY2VudGVyJzogMCxcbiAgICAgICAgJ3JpZ2h0JzogMVxuICAgICAgfVxuICAgICAgbGV0IGluZGV4ID0gbWFwW25dXG4gICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApXG4gICAgICBsZXQga2V5ID0gb3B0aW9uc1tpbmRleF1cbiAgICAgIHRoaXMuY2hvb3NlZCA9IHtcbiAgICAgICAgaWNvbjogJ2FsaWduLScgKyBuLFxuICAgICAgICBpbmRleCxcbiAgICAgICAga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmFsaWduTWFwW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlnbk1hcDoge1xuICAgICAgICAn5bGF5LitJzogJ2p1c3RpZnlDZW50ZXInLFxuICAgICAgICAn5bGF5Y+zJzogJ2p1c3RpZnlSaWdodCcsXG4gICAgICAgICflsYXlt6YnOiAnanVzdGlmeUxlZnQnXG4gICAgICB9LFxuICAgICAgY2hvb3NlZDoge31cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRBbGlnbiAoaW5kZXgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKHRoaXMuYWxpZ25NYXBba2V5XSlcbiAgICAgIHRoaXMuJHBhcmVudC5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMuJHBhcmVudC5tb2R1bGVJbnNwZWN0KClcbiAgICB9LFxuICAgIGNoYW5nZUFsaWduICgpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICBsZXQgcHJlX2luZGV4ID0gIWlzTmFOKHRoaXMuY2hvb3NlZC5pbmRleCkgPyB0aGlzLmNob29zZWQuaW5kZXggOiAtMVxuICAgICAgbGV0IGxlbiA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApLmxlbmd0aFxuICAgICAgbGV0IHRhcmdldF9pbmRleFxuICAgICAgaWYgKHByZV9pbmRleCArIDEgPT09IGxlbikge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSArK3ByZV9pbmRleFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGlnbih0YXJnZXRfaW5kZXgpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgY2xhc3M9J2J0bicgQGNsaWNrPVxcXCJjaGFuZ2VBbGlnbigpXFxcIiA6dGl0bGU9XFxcIiflr7npvZDmlrnlvI86JyArIChjaG9vc2VkLmtleSB8fCAn5bGF5bemJylcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYVxcXCIgOmNsYXNzPVxcXCInZmEtJyArIChjaG9vc2VkLmljb24gfHwgJ2FsaWduLWxlZnQnKVxcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZvbnQnLFxuICB0YWIsXG4gIGNvbmZpZyxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdzdHlsZScsIHtcbiAgICAgIGZvbnRTaXplOiBbJ3h4LWxhcmdlJywgJ3gtbGFyZ2UnLCAnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJ11cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5pbXBvcnQgJy4vc3R5bGUuc3R5bCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZSxcbiAgd2F0Y2g6IHtcbiAgICBhY3RpdmVJdGVtIChuKSB7XG4gICAgICBsZXQgdmFsID0gdGhpcy5mb250QXR0ck1hcFtuXVxuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLmNob29zZWQgPSB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hvb3NlZCA9IHRoaXMuZm9udEF0dHJNYXBbdGhpcy5mb250QXR0ck1hcFsnZGVmYXVsdCddXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnRBdHRyTWFwOiB7fSxcbiAgICAgIGN1ck1vZHVsZTogbnVsbCxcbiAgICAgIGNob29zZWQ6IHt9LFxuICAgICAgc2hvd0xpc3Q6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd0xpc3RGbiAoKSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy50YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JiaWRkZW4nKSkgcmV0dXJuXG4gICAgICB0aGlzLnNob3dMaXN0ID0gdHJ1ZVxuICAgIH0sXG4gICAgY2hhbmdlQXR0ciAodmFsKSB7XG4gICAgICB0aGlzLmNob29zZWQgPSB2YWxcbiAgICAgIC8vIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnbGluZUhlaWdodCcsIHZhbC5saW5lSGVpZ2h0KVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIHZhbC5mb250U2l6ZSlcbiAgICAgIHRoaXMuc2hvd0xpc3QgPSBmYWxzZVxuICAgIH0sXG4gICAgc2V0Rm9udE5hbWUgKG5hbWUpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBuYW1lKVxuICAgIH0sXG4gICAgc2V0SGVhZGluZyAoaGVhZGluZykge1xuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGhlYWRpbmcpXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmN1ck1vZHVsZSA9IHRoaXMuJHBhcmVudC5tb2R1bGVzTWFwWydmb250J11cbiAgICB0aGlzLmZvbnRBdHRyTWFwID0gdGhpcy5jdXJNb2R1bGUuY29uZmlnXG4gICAgdGhpcy5jaG9vc2VkID0gdGhpcy5mb250QXR0ck1hcFt0aGlzLmZvbnRBdHRyTWFwWydkZWZhdWx0J11dXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgcmVmPVxcXCJ0YWJcXFwiIGNsYXNzPVxcXCJmb250LXRhYiB0YWItd2l0aC1kcm9wZG93blxcXCIgQG1vdXNlZW50ZXI9XFxcInNob3dMaXN0Rm5cXFwiIEBtb3VzZWxlYXZlPVxcXCJzaG93TGlzdCA9IGZhbHNlXFxcIj5cXG4gICAge3tjaG9vc2VkLm5hbWV9fVxcbiAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1jYXJldC1kb3duXFxcIj48L2k+XFxuICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIHYtaWY9XFxcInNob3dMaXN0XFxcIj5cXG4gICAgICAgIDxsaSB2LWlmPVxcXCJ2YWwubmFtZVxcXCIgdi1mb3I9XFxcIih2YWwsIGtleSkgaW4gZm9udEF0dHJNYXBcXFwiIEBjbGljaz1cXFwiY2hhbmdlQXR0cih2YWwpXFxcIj57eyB2YWwubmFtZSB9fTwvbGk+XFxuICAgIDwvdWw+XFxuPC9saT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gdGhyb3VnaCBmb250IHRhZ1xuICAneHgtbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDYsXG4gICAgbmFtZTogJ+agh+mimCdcbiAgfSxcbiAgJ3gtbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDUsXG4gICAgbmFtZTogJ+WJr+agh+mimCdcbiAgfSxcbiAgJ2xhcmdlJzoge1xuICAgIGZvbnRTaXplOiA0LFxuICAgIG5hbWU6ICflsI/moIfpopgnXG4gIH0sXG4gICdtZWRpdW0nOiB7XG4gICAgZm9udFNpemU6IDMsXG4gICAgbmFtZTogJ+ato+aWhydcbiAgfSxcbiAgZGVmYXVsdDogJ21lZGl1bSdcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC9jb25maWcuanMiLCIvKipcbiAqIHRvZ2dsZSBmdWxsIHNjcmVlbiBtb2RlXG4gKiBDcmVhdGVkIGJ5IHBlYWsgb24gMTYvOC8xOC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdmdWxsLXNjcmVlbicsXG4gICAgaWNvbjogJ2ZhIGZhLWFycm93cy1hbHQnLFxuICAgIGkxOG46ICdmdWxsIHNjcmVlbicsXG4gICAgaGFuZGxlcihyaCkge1xuICAgICAgICByaC5lZGl0b3IudG9nZ2xlRnVsbFNjcmVlbigpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZnVsbC1zY3JlZW4vaW5kZXguanMiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbWFnZScsXG4gIGkxOG46ICdpbWFnZScsXG4gIGNhblVwbG9hZFNhbWVJbWFnZTogdHJ1ZSxcbiAgaW1nT2NjdXB5TmV3Um93OiBmYWxzZSxcbiAgbWF4U2l6ZTogNTEyMCAqIDEwMjQsXG4gIGNvbXByZXNzOiB7XG4gICAgLy8gbWF4IHdpZHRoXG4gICAgd2lkdGg6IDE2MDAsXG4gICAgLy8gbWF4IGhlaWdodFxuICAgIGhlaWdodDogMTYwMCxcbiAgICAvLyBjcG1wcmVzcyBxdWFsaXR5IDAgLSAxXG4gICAgcXVhbGl0eTogMC44XG4gIH0sXG4gIHRhYixcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnaW1nJylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvaW5kZXguanMiLCJpbXBvcnQgbHJ6IGZyb20gJ2xyeidcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi5odG1sJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAndGFiLWltYWdlJyxcbiAgICAgIGN1ck1vZHVsZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHBpY2soKSB7XG4gICAgICBpZiAodGhpcy5mb3JiaWRkZW4pIHJldHVyblxuICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKClcbiAgICB9LFxuICAgIHByb2Nlc3MoZSkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuJHJlZnMuZmlsZS5maWxlc1swXVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZpbGUpXG4gICAgICBpZiAodGhpcy5jdXJNb2R1bGUuY2FuVXBsb2FkU2FtZUltYWdlKSB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ltYWdlJ11cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgcmVmPVxcXCJpdGVtXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj5cXG4gIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiByZWY9XFxcImZpbGVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCIgQGNoYW5nZT1cXFwicHJvY2Vzc1xcXCIgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIj5cXG4gIDxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogc3ViXFxcIiBjbGFzcz1cXFwiZmEgZmEtcGljdHVyZS1vXFxcIiBAY2xpY2s9XFxcInBpY2tcXFwiPjwvc3Bhbj5cXG48L2xpPlxcblxcblxcblxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2JvbGQnLFxuICBpY29uOiAnZmEgZmEtYm9sZCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnYm9sZCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1NUUk9ORycpLmFkZCgndGFnJywgJ0InKS5hZGQoJ3N0eWxlJyx7J2ZvbnQtd2VpZ2h0JzogJ2JvbGQnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYm9sZC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2l0YWxpYycsXG4gIGljb246ICdmYSBmYS1pdGFsaWMnLFxuICBoYW5kbGVyIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaXRhbGljJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnSScpLmFkZCgnc3R5bGUnLCB7J2ZvbnRTdHlsZSc6ICdpdGFsaWMnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaXRhbGljL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndW5kZXJsaW5lJyxcbiAgaWNvbjogJ2ZhIGZhLXVuZGVybGluZScsXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCd1bmRlcmxpbmUnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdVJykuYWRkKCdzdHlsZScsIHsndGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAndW5kZXJsaW5lJ30pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3VuZGVybGluZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3RvZG8nLFxuICBpY29uOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgZXhjbHVkZTogJ0FMTF9CVVRfTVlTRUxGJyxcbiAgbW91bnRlZCAoZWRpdG9yKSB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbml0VG9kbycpXG4gIH0sXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCd0b2RvJywge1xuICAgICAgaW5zZXJ0QWZ0ZXI6IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXI6ICflvoXlip7kuovpobknXG4gICAgfSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItdG9kbyc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3F1b3RlJyxcbiAgaWNvbjogJ2ZhIGZhLXF1b3RlLXJpZ2h0JyxcbiAgc2hvdzogdHJ1ZSxcbiAgbW91bnRlZCAoZWRpdG9yKSB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbml0UXVvdGUnKVxuICB9LFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgsIG1vZHVsZSkge1xuICAgIGxldCBpc0luUXVvdGUgPSByaC5lZGl0b3IuYWN0aXZlTW9kdWxlcy5pbmNsdWRlcyhtb2R1bGUubmFtZSlcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3F1b3RlJywgaXNJblF1b3RlKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci1xdW90ZSc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvcXVvdGUvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbmRlbnQnLFxuICBpY29uOiAnZmEgZmEtaW5kZW50JyxcbiAgdHlwZTogJ2ZuJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpbmRlbnQnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbmRlbnQnLFxuICBpY29uOiAnZmEgZmEtb3V0ZGVudCcsXG4gIHR5cGU6ICdmbicsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnb3V0ZGVudCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL291dGRlbnQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd1bCcsXG4gIGljb246ICdmYSBmYS1saXN0LXVsJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnVUwnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29sJyxcbiAgaWNvbjogJ2ZhIGZhLWxpc3Qtb2wnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnT0wnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2xpbmV0aHJvdWdoJyxcbiAgaWNvbjogJ2ZhIGZhLXN0cmlrZXRocm91Z2gnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3N0cmlrZVRocm91Z2gnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdTVFJJS0UnKS5hZGQoJ3N0eWxlJywgeyd0ZXh0LWRlY29yYXRpb24tbGluZSc6ICdsaW5lLXRocm91Z2gnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvbGluZXRocm91Z2gvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpdG9kbycsXG4gIGljb246ICdpdWktaWNvbiBpdWktaWNvbi1jaGVja2VkLWxpbmUnLFxuICBleGNsdWRlOiAnQUxMX0JVVF9NWVNFTEYnLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRpVG9kbycpXG4gIH0sXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpdG9kbycsIHtcbiAgICAgIGluc2VydEFmdGVyOiByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICAgIHBsYWNlaG9sZGVyOiAn5b6F5Yqe5LqL6aG5J1xuICAgIH0pXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXRvZG8nOiAnJ1xuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ljb3VydC10b2RvL2luZGV4LmpzIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcblxuY29uc3QgZm9yZUNvbG9yQ29uZmlnID0ge1xuICBuYW1lOiAnZm9yZUNvbG9yJyxcbiAgLy8gY29sb3IgYnVzdCBiZSBsb3dlcmNhc2VcbiAgY29sb3JzOiBbJyMwMDAwMDAnLCAnIzAwMDAzMycsICcjMDAwMDY2JywgJyMwMDAwOTknLCAnIzAwMzMwMCcsICcjMDAzMzMzJywgJyMwMDMzNjYnLFxuICAgICcjMDAzMzk5JywgJyMwMDY2MDAnLCAnIzAwNjYzMycsICcjMDA5OTAwJywgJyMzMzAwMDAnLCAnIzMzMDAzMycsICcjMzMwMDY2JyxcbiAgICAnIzMzMzMwMCcsICcjMzMzMzY2JywgJyM2NjAwMDAnLCAnIzY2MDAzMycsICcjNjYzMzAwJywgJyM2NjY2MDAnLCAnIzY2NjYzMycsXG4gICAgJyM2NjY2NjYnLCAnIzY2NjY5OScsICcjOTkwMDAwJywgJyM5OTAwMzMnLCAnIzk5MDBjYycsICcjOTk2NjAwJywgJyNmZmNjMDAnLFxuICAgICcjZmZjY2NjJywgJyNmZmNjOTknLCAnI2ZmZmYwMCcsICcjZmE4OTE5JywgJyNlZDZjMDAnLCAnI2NjZmZmZicsICcjY2NmZjk5JywgJyNmZmZmZmYnXSxcbiAgZGVmYXVsdDogJyMwMDAwMDAnLFxuICB0YWIsXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgY29sb3I6IGZvcmVDb2xvckNvbmZpZy5jb2xvcnNcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmVDb2xvckNvbmZpZ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3IvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmltcG9ydCAnLi9zdHlsZS5zdHlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIG4gPSBuIHx8IHRoaXMuY3VyTW9kdWxlLmRlZmF1bHRcbiAgICAgIHRoaXMuY2hvb3NlZCA9IG5cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcnM6IFtdLFxuICAgICAgY3VyTW9kdWxlOiBudWxsLFxuICAgICAgY2hvb3NlZDoge30sXG4gICAgICBzaG93TGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93TGlzdEZuICgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLnRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvcmJpZGRlbicpKSByZXR1cm5cbiAgICAgIHRoaXMuc2hvd0xpc3QgPSB0cnVlXG4gICAgfSxcbiAgICBjaGFuZ2VDb2xvciAoY29sb3IpIHtcbiAgICAgIHRoaXMuY2hvb3NlZCA9IGNvbG9yXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGNvbG9yKVxuICAgICAgdGhpcy5zaG93TGlzdCA9IGZhbHNlXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmN1ck1vZHVsZSA9IHRoaXMuJHBhcmVudC5tb2R1bGVzTWFwWydmb3JlQ29sb3InXVxuICAgIHRoaXMuY29sb3JzID0gdGhpcy5jdXJNb2R1bGUuY29sb3JzXG4gICAgdGhpcy5jaG9vc2VkID0gdGhpcy5jdXJNb2R1bGUuZGVmYXVsdFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3RhYi5qcyIsImV4cG9ydCBkZWZhdWx0IFwiPGxpIHJlZj1cXFwidGFiXFxcIiBjbGFzcz1cXFwiZm9yZS1jb2xvci10YWIgdGFiLXdpdGgtZHJvcGRvd25cXFwiIEBtb3VzZWVudGVyPVxcXCJzaG93TGlzdEZuXFxcIiBAbW91c2VsZWF2ZT1cXFwic2hvd0xpc3QgPSBmYWxzZVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWZvbnRcXFwiPjwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2hvb3NlZFxcXCIgOnN0eWxlPVxcXCJ7J2JhY2tncm91bmQnOiBjaG9vc2VkfVxcXCI+PC9kaXY+XFxuICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIHYtaWY9XFxcInNob3dMaXN0XFxcIj5cXG4gICAgICAgIDxsaSB2LWZvcj1cXFwiY29sb3IgaW4gY29sb3JzXFxcIiA6c3R5bGU9XFxcInsnYmFja2dyb3VuZCc6IGNvbG9yfVxcXCIgQGNsaWNrPVxcXCJjaGFuZ2VDb2xvcihjb2xvcilcXFwiPjwvbGk+XFxuICAgIDwvdWw+XFxuPC9saT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3IvdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3Ivc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvdXRkZW50OiB7XG4gICAga2V5Q29kZTogOSxcbiAgICBzaGlmdEtleTogdHJ1ZSxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdvdXRkZW50JylcbiAgICB9XG4gIH0sXG4gIGluZGVudDoge1xuICAgIGtleUNvZGU6IDksXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5kZW50JylcbiAgICB9XG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGtleUNvZGU6IDgsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGUsIHRydWUpXG4gICAgfVxuICB9LFxuICBlbnRlcjoge1xuICAgIGtleUNvZGU6IDEzLFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdlbnRlcicsIGUsIHRydWUpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJpbXBvcnQgUkggZnJvbSAnLi4vcmFuZ2UtaGFuZGxlcidcbmltcG9ydCAnLi9zdHlsZS9tYWluLnN0eWwnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9lZGl0b3IuaHRtbCdcbmltcG9ydCBkcmFnUGljIGZyb20gJy4vZHJhZy1waWMnXG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4uL21vZHVsZS1pbnNwZWN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICBwcm9wczoge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwLFxuICAgICAgdmFsaWRhdG9yKHZhbCl7XG4gICAgICAgIHJldHVybiB2YWwgPj0gMTAwXG4gICAgICB9XG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwMDBcbiAgICB9LFxuICAgIGF1dG9IZWlnaHQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZHJhZ1BpY1xuICB9LFxuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZXM6IHt9LFxuICAgICAgYWN0aXZlTW9kdWxlczogW10sXG4gICAgICBhbGxBY3RpdmVNb2R1bGVzOiBbXSxcbiAgICAgIGZ1bGxTY3JlZW46IGZhbHNlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbnRlbnQodmFsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50LmlubmVySFRNTFxuICAgICAgaWYgKHZhbCAhPT0gY29udGVudCkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MID0gdmFsXG4gICAgICB9XG4gICAgfSxcbiAgICBmdWxsU2NyZWVuKHZhbCl7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbXBvbmVudC5wYXJlbnRFbCA9IGNvbXBvbmVudC4kZWwucGFyZW50Tm9kZVxuICAgICAgICBjb21wb25lbnQubmV4dEVsID0gY29tcG9uZW50LiRlbC5uZXh0U2libGluZ1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudC4kZWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGNvbXBvbmVudC5uZXh0RWwpIHtcbiAgICAgICAgY29tcG9uZW50LnBhcmVudEVsLmluc2VydEJlZm9yZShjb21wb25lbnQuJGVsLCBjb21wb25lbnQubmV4dEVsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5wYXJlbnRFbC5hcHBlbmRDaGlsZChjb21wb25lbnQuJGVsKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb250ZW50U3R5bGUoKXtcbiAgICAgIGNvbnN0IHN0eWxlID0ge31cbiAgICAgIGlmICh0aGlzLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy4kcmVmcy50b29sYmFyLmNsaWVudEhlaWdodCAtIDF9cHhgXG4gICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHR9cHhgXG4gICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgfVxuICAgICAgc3R5bGVbJ21pbi1oZWlnaHQnXSA9IGAke3RoaXMuaGVpZ2h0fXB4YFxuICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSAoKSB7XG4gICAgICByZXR1cm4gSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zXG4gICAgfSxcbiAgICBjbGVhckFjdGl2ZU1vZHVsZUl0ZW0gKCkge1xuICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zID0ge31cbiAgICB9LFxuICAgIGhhbmRsZURyYWdQaWMgKGZpbGUpIHtcbiAgICAgIGlmICgodGhpcy5tb2R1bGVzTWFwWydpbWFnZSddICYmIHRoaXMubW9kdWxlc01hcFsnaW1hZ2UnXS5kcmFnICE9PSBmYWxzZSkgfHwgIXRoaXMubW9kdWxlc01hcFsnaW1hZ2UnXSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZpbGUpXG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSAhdGhpcy5mdWxsU2NyZWVuXG4gICAgfSxcbiAgICBlbmFibGVGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSB0cnVlXG4gICAgfSxcbiAgICBleGl0RnVsbFNjcmVlbigpe1xuICAgICAgdGhpcy5mdWxsU2NyZWVuID0gZmFsc2VcbiAgICB9LFxuICAgIGZvY3VzKCl7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuZm9jdXMoKVxuICAgIH0sXG4gICAgYmx1cigpe1xuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmJsdXIoKVxuICAgIH0sXG4gICAgZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnLCBleGVjT25seSl7XG4gICAgICBpZiAoIWV4ZWNPbmx5KSB7XG4gICAgICAgIHRoaXMucmVzdG9yZVNlbGVjdGlvbigpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBuZXcgUkgodGhpcy5yYW5nZSwgdGhpcykuZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnKVxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICB9LFxuICAgIHNhdmVDdXJyZW50UmFuZ2UoKXtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCB8fCAhY29udGVudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uLnJhbmdlQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXG4gICAgICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgICAgIGxldCBlbmQgPSByYW5nZS5lbmRDb250YWluZXJcbiAgICAgICAgLy8gZm9yIElFMTEgOiBub2RlLmNvbnRhaW5zKHRleHROb2RlKSBhbHdheXMgcmV0dXJuIGZhbHNlXG4gICAgICAgIHN0YXJ0ID0gc3RhcnQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gc3RhcnQucGFyZW50Tm9kZSA6IHN0YXJ0XG4gICAgICAgIGVuZCA9IGVuZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBlbmQucGFyZW50Tm9kZSA6IGVuZFxuICAgICAgICBpZiAoY29udGVudC5jb250YWlucyhzdGFydCkgJiYgY29udGVudC5jb250YWlucyhlbmQpKSB7XG4gICAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzdG9yZVNlbGVjdGlvbigpe1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZSh0aGlzLnJhbmdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgICBjb25zdCByb3cgPSBSSC5wcm90b3R5cGUubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocm93LCAwKVxuICAgICAgICByYW5nZS5zZXRFbmQocm93LCAwKVxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlTW9kdWxlKG1vZHVsZSl7XG4gICAgICBpZiAobW9kdWxlLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5oYW5kbGVyKG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKSwgbW9kdWxlKVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZHVsZUluc3BlY3QgKCkge1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZU1vZHVsZUl0ZW0oKVxuICAgICAgICB0aGlzLmFjdGl2ZU1vZHVsZXMgPSBbXVxuICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMgPSBbXVxuICAgICAgICBsZXQgcmggPSBuZXcgUkgodGhpcy5yYW5nZSwgdGhpcylcbiAgICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDAgJiYgdGhpcy5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICB0ZXh0cy5wdXNoKHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV4dHMgZHVwbGljYXRlIHJlbW92YWxcbiAgICAgICAgbGV0IHRleHRBZnRldERSID0gW11cbiAgICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgICBpZiAodGV4dC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgdGV4dC5wYXJlbnROb2RlICE9PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5wYXJlbnROb2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGV4dEFmdGV0RFIuaW5jbHVkZXModGV4dCkpIHtcbiAgICAgICAgICAgIHRleHRBZnRldERSLnB1c2godGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHRhZ1Jlc3VsdCA9IEluc3BlY3Rvci5ydW4oJ3RhZycsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgdGFnUmVzdWx0UkQgPSBJbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZSh0YWdSZXN1bHQpXG5cbiAgICAgICAgbGV0IHN0eWxlUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bignc3R5bGUnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IHN0eWxlUmVzdWx0UkQgPSBJbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZShzdHlsZVJlc3VsdClcblxuICAgICAgICBsZXQgYXR0cmlidXRlUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bignYXR0cmlidXRlJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCBhdHRyaWJ1dGVSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKGF0dHJpYnV0ZVJlc3VsdClcblxuICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMgPSB0YWdSZXN1bHQuY29uY2F0KHN0eWxlUmVzdWx0LCBhdHRyaWJ1dGVSZXN1bHQpXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kdWxlcyA9IEFycmF5LmZyb20obmV3IFNldCh0YWdSZXN1bHRSRC5jb25jYXQoc3R5bGVSZXN1bHRSRCwgYXR0cmlidXRlUmVzdWx0UkQpKSlcblxuICAgICAgICAvLyByZXNldFxuICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgIG1vZHVsZS5mb3JiaWRkZW4gPSBmYWxzZVxuICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBoYW5kbGUgZm9yYmlkZGVuIGxvZ2ljXG4gICAgICAgIGlmICh0aGlzLmFsbEFjdGl2ZU1vZHVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IGV4Y2x1ZGVMaXN0ID0gW11cbiAgICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG0pKSB7XG4gICAgICAgICAgICAgIG0uZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyTW9kdWxlID0gdGhpcy5tb2R1bGVzTWFwW21vZHVsZU5hbWVdXG4gICAgICAgICAgICAgICAgZXhjbHVkZUxpc3QgPSBleGNsdWRlTGlzdC5jb25jYXQoY3VyTW9kdWxlLmV4Y2x1ZGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBleGNsdWRlTGlzdCA9IEFycmF5LmZyb20obmV3IFNldChleGNsdWRlTGlzdCkpXG4gICAgICAgICAgZXhjbHVkZUxpc3QuZm9yRWFjaChleGMgPT4ge1xuICAgICAgICAgICAgbGV0IGV4Y01vZHVsZSA9IHRoaXMubW9kdWxlc01hcFtleGNdXG4gICAgICAgICAgICBpZiAoZXhjTW9kdWxlICYmIGV4Y01vZHVsZS50eXBlICE9PSAnZm4nKSB7XG4gICAgICAgICAgICAgIGV4Y01vZHVsZS5mb3JiaWRkZW4gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBoaWdobGlnaHQgbG9naWNcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSBtb2R1bGUubmFtZVxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kdWxlcy5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IHRydWVcbiAgICAgICAgICAgICAgbGV0IGN1ck1vZHVsZUFjdGl2ZUl0ZW0gPSB0aGlzLmdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0oKVttb2R1bGVOYW1lXVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1ck1vZHVsZUFjdGl2ZUl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBjdXJNb2R1bGVBY3RpdmVJdGVtIHx8ICdBTEwnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCl7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUuaW5pdCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgY29uc3QgdG9vbGJhciA9IHRoaXMuJHJlZnMudG9vbGJhclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50XG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXIgYXQgZG9jdW1lbnQgdG8gaGFuZGxlIHNlbGVjdGlvblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIC8vIHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zYXZlQ3VycmVudFJhbmdlLCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjb250ZW50LmlubmVySFRNTClcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGUgPT4ge1xuICAgICAgdGhpcy5leGVjQ29tbWFuZCgncGFzdGUnLCBlLCB0cnVlKVxuICAgICAgbGV0IGNvbW1vbiA9IHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGlmIChjb21tb24pIHtcbiAgICAgICAgaWYgKGNvbW1vbi5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb21tb24gPSBjb21tb24ucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICAgICAgICBjb21tb24uc2Nyb2xsSW50b1ZpZXcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudG91Y2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlciwgZmFsc2UpXG5cbiAgICAvLyBiZWZvcmUgZXhlYyBjb21tYW5kXG4gICAgLy8gbGV0IHRleHQgYmUgYSByb3dcbiAgICBSSC5wcm90b3R5cGUuYmVmb3JlKChjb21tYW5kLCAgcmgsIGFyZykgPT4ge1xuICAgICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgLy8gaGFuZGxlIGVkaXRvciB3aXRoIG5vIGNvbnRlbnRcbiAgICAgIGlmIChyaC5pc0VtcHR5Tm9kZShub2RlKSAmJiBub2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgIGxldCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICBpZiAoZmlyc3RDaGlsZCAmJiBmaXJzdENoaWxkLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChmaXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIGlmICghcmguaXNFbXB0eU5vZGUodGV4dCkpIHtcbiAgICAgICAgICByaC50ZXh0VG9Sb3codGV4dClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmICh0ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgcmguZWRpdG9yLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBoYW5kbGUgc2hvcnRjdXRcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMuZXhlY0NvbW1hbmQoJ2tleWRvd24nLCBlLCB0cnVlKVxuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNob3J0Y3V0W2Uua2V5Q29kZV1cbiAgICAgIGlmIChpdGVtICYmIGl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW0uZm9yRWFjaChzID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBzLmtleUNvZGUgJiYgZS5hbHRLZXkgPT09ICEhcy5hbHRLZXkgJiYgZS5jdHJsS2V5ID09PSAhIXMuY3RybEtleSAmJiBlLm1ldGFLZXkgPT09ICEhcy5tZXRhS2V5ICYmIGUuc2hpZnRLZXkgPT09ICEhcy5zaGlmdEtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgICAgICAgICAgcy5oYW5kbGVyKHRoaXMsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIGZhbHNlKVxuXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZS5tb3VudGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbW9kdWxlLm1vdW50ZWQodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkKCl7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUudXBkYXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUudXBkYXRlZCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlcilcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5kZXN0cm95ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmRlc3Ryb3llZCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IvZWRpdG9yLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4uL2NvbW1hbmRzJ1xuXG4vLyBmb3IgSUUgMTFcbmlmICghVGV4dC5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgVGV4dC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXJOb2RlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VIYW5kbGVyIHtcbiAgLyoqXG4gICAqIGJ1aWxkIHJhbmdlIGhhbmRsZXJcbiAgICogQHBhcmFtIHtSYW5nZX0gcmFuZ2VcbiAgICogQHBhcmFtIHtlZGl0b3J9IGN1cnJlbnQgZWRpdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyYW5nZSwgZWRpdG9yKSB7XG4gICAgaWYgKCFyYW5nZSB8fCAhKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW50XFwndCByZXNvbHZlIHJhbmdlJylcbiAgICB9XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgdGhpcy5lZGl0b3IgPSBlZGl0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBleGVjdXRlIGVkaXQgY29tbWFuZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWFuZFxuICAgKiBAcGFyYW0gYXJnXG4gICAqL1xuICBleGVjQ29tbWFuZChjb21tYW5kLCBhcmcpIHtcbiAgICBSYW5nZUhhbmRsZXIuYmVmb3JlTGlzdC5mb3JFYWNoKGZuID0+IHtcbiAgICAgIGZuLmNhbGwodGhpcywgY29tbWFuZCwgdGhpcywgYXJnKVxuICAgIH0pXG4gICAgY29uc3QgZXhpc3RDb21tYW5kID0gY29tbWFuZHNbY29tbWFuZF1cbiAgICBjb25zdCBjdXN0b21Db21tYW5kID0gdGhpcy5lZGl0b3IuY29tbWFuZHMgPyB0aGlzLmVkaXRvci5jb21tYW5kc1tjb21tYW5kXSA6IG51bGxcbiAgICBpZiAoZXhpc3RDb21tYW5kKSB7XG4gICAgICBleGlzdENvbW1hbmQodGhpcywgYXJnKVxuICAgIH1cbiAgICBlbHNlIGlmIChjdXN0b21Db21tYW5kKSB7XG4gICAgICAgY3VzdG9tQ29tbWFuZCh0aGlzLCBhcmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCBhcmcpXG4gICAgfVxuICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbi5jYWxsKHRoaXMsIGNvbW1hbmQsIHRoaXMsIGFyZylcbiAgICB9KVxuICB9XG5cbiAgLypcbiAgICogcnVuIGZuIGJlZm9yZSBleGVjIGNvbW1hbmQgIFxuICAgKiovXG4gIGJlZm9yZSAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSYW5nZUhhbmRsZXIuYmVmb3JlTGlzdC5wdXNoKGZuKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQmVmb3JlTGlzdCAoKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QgPSBbXVxuICB9XG5cbiAgLypcbiAgICogcnVuIGZuIGFmdGVyIGV4ZWMgY29tbWFuZCAgXG4gICAqKi9cbiAgYWZ0ZXIgKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdC5wdXNoKGZuKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQWZ0ZXJMaXN0ICgpIHtcbiAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0ID0gW11cbiAgfVxufVxuXG5SYW5nZUhhbmRsZXIuYmVmb3JlTGlzdCA9IFtdXG5SYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0ID0gW11cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2luc3RhbmNlLmpzIiwiaW1wb3J0IGxyeiBmcm9tICdscnonXG5cbmNvbnN0IGluc2VydEltYWdlID0gZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgLy8gZm9yYmlkZGVuIGxvZ2ljXG4gIGxldCBmb3JiaWRkZW4gPSBmYWxzZVxuICBsZXQgYWN0aXZlcyA9IHJoLmVkaXRvci5hY3RpdmVNb2R1bGVzXG4gIGFjdGl2ZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICBsZXQgbW9kdWxlID0gcmguZWRpdG9yLm1vZHVsZXNNYXBbbmFtZV1cbiAgICBpZiAobW9kdWxlICYmIG1vZHVsZS5leGNsdWRlICYmIG1vZHVsZS5leGNsdWRlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICBmb3JiaWRkZW4gPSB0cnVlXG4gICAgfVxuICB9KVxuICBpZiAoZm9yYmlkZGVuKSByZXR1cm5cblxuICBsZXQgcmV0dXJuRGF0YSA9IHtcbiAgICBvcmlnaW46IGFyZ1xuICB9XG4gIGxldCBlZGl0b3IgPSByaC5lZGl0b3JcbiAgbGV0IGNvbmZpZyA9IGVkaXRvci5tb2R1bGVzTWFwWydpbWFnZSddXG4gIGlmICghY29uZmlnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbWFnZSBjb25maWcgbG9hZCBmYWlsJylcbiAgfVxuICBpZiAoYXJnIGluc3RhbmNlb2YgRmlsZSkge1xuICAgIGhhbmRsZUZpbGUoYXJnKVxuICB9XG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZhbHNlLCBhcmcpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGaWxlKGZpbGUpIHtcbiAgICBpZiAoY29uZmlnLmNvbXByZXNzKSB7XG4gICAgICBjb25maWcuY29tcHJlc3MuZmllbGROYW1lID0gY29uZmlnLmZpZWxkTmFtZSB8fCAnaW1hZ2UnXG4gICAgICBscnooZmlsZSwgY29uZmlnLmNvbXByZXNzKS50aGVuKHJzdCA9PiB7XG4gICAgICAgIGlmIChyc3QuZmlsZS5zaXplID4gY29uZmlnLm1heFNpemUpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2V4Y2VlZCBzaXplIGxpbWl0LCBhZnRlciBjb21wcmVzcycsXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAzXG4gICAgICAgICAgfSwgcnN0KVxuICAgICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCByZXR1cm5EYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwgcnN0KVxuICAgICAgICAgIGxldCBpbWdJZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdpbWcnKVxuICAgICAgICAgIGluc2VydEJhc2U2NChyZXR1cm5EYXRhLmJhc2U2NCwgaW1nSWQpXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgIHN0YXR1czogZXJyLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDJcbiAgICAgICAgfSlcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIHJldHVybkRhdGEpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsZS5zaXplID4gY29uZmlnLm1heFNpemUpIHtcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgIHN0YXR1czogJ2V4Y2VlZCBzaXplIGxpbWl0LCB3aXRob3V0IGNvbXByZXNzJyxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAzXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGNvbmZpZy5maWVsZE5hbWUsIGZpbGUsIGZpbGUubmFtZSlcbiAgICAgICAgcmV0dXJuRGF0YS5mb3JtRGF0YSA9IGZvcm1EYXRhXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgbGV0IGltZ0lkID0gcmguY3JlYXRlUmFuZG9tSWQoJ2ltZycpXG4gICAgICAgICAgaW5zZXJ0QmFzZTY0KGUudGFyZ2V0LnJlc3VsdCwgaW1nSWQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRCYXNlNjQgKGJhc2U2NCwgaWQpIHtcbiAgICBsZXQgZG9tID0gYDxpbWcgc3JjPVwiJHtiYXNlNjR9XCIgZGF0YS1lZGl0b3ItaW1nPVwiJHtpZH1cIj5gXG4gICAgaWYgKGNvbmZpZy5pbWdPY2N1cHlOZXdSb3cpIHtcbiAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGxldCBjdXJSb3cgPSByaC5mb3JjZUdldFJvdyhub2RlKVxuICAgICAgaWYgKGN1clJvdykge1xuICAgICAgICBsZXQgc2libGluZyA9IGN1clJvdy5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7Y29udGVudGVkaXRhYmxlOiBmYWxzZX0pXG4gICAgICAgIG5ld1Jvdy5pbm5lckhUTUwgPSBkb21cbiAgICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3Um93LCBjdXJSb3cpXG4gICAgICAgIGlmICghc2libGluZykge1xuICAgICAgICAgIHNpYmxpbmcgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICByaC5pbnNlcnRBZnRlcihzaWJsaW5nLCBuZXdSb3cpXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShzaWJsaW5nLCAxKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uoc2libGluZywgMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBkb20sIHRydWUpXG4gICAgfVxuICAgIGVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICBzdGF0dXM6ICdldmVyeXRoaW5nIGZpbmUnLFxuICAgICAgc3RhdHVzQ29kZTogMixcbiAgICAgIGJhc2U2NCxcbiAgICAgIHJlcGxhY2VTcmNBZnRlclVwbG9hZEZpbmlzaDogcmVwbGFjZUltZyhpZCksXG4gICAgICBkZWxldGVJbWdXaGVuVXBsb2FkRmFpbDogZGVsZXRlSW1nKGlkKVxuICAgIH0pKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBpbWFnZSdzIGJhc2U2NCBzcmMgdG8gdXJsIGFmdGVyIHVwbG9hZCBmaW5pc2hcbiAgZnVuY3Rpb24gcmVwbGFjZUltZyAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNyYykge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWVkaXRvci1pbWc9JyR7aWR9J11gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpXG4gICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLWltZycpXG4gICAgICAgIGVkaXRvci4kZW1pdCgnY2hhbmdlJywgZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGV0ZSBpbWFnZSBhZnRlciB1cGxvYWQgZmFpbFxuICBmdW5jdGlvbiBkZWxldGVJbWcgKGlkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1lZGl0b3ItaW1nPScke2lkfSddYClcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICAgICAgICBlZGl0b3IuJGVtaXQoJ2NoYW5nZScsIGVkaXRvci4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0SW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pbnNlcnRJbWFnZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgbGV0IHMgPXJoLmdldFNlbGVjdGlvbigpXG4gICAgbGV0IG5vZGUgPSBzLmJhc2VOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IHNwYW4gZWxlbWVudCB0byBrZWVwIGxpbmUtaGVpZ2h0IHJ1biBjb3JyZWN0XG4gICAgICBpZiAocmguaXNFbXB0eU5vZGUobm9kZSkgJiYgbm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09PSAnU1BBTicpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGZhbHNlKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgJyYjODIwMzsnKVxuICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICByYW5nZS5zZXRTdGFydChzLmZvY3VzTm9kZSwgcy5hbmNob3JPZmZzZXQgLSAxKVxuICAgICAgcmFuZ2Uuc2V0RW5kKHMuZm9jdXNOb2RlLCBzLmZvY3VzT2Zmc2V0KVxuICAgICAgcy5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgcy5hZGRSYW5nZShyYW5nZSlcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBhcmcpXG4gICAgICBzLmNvbGxhcHNlKHMuZm9jdXNOb2RlLCAxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgYXJnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZm9udFNpemUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCB0ZXh0ID0gbnVsbFxuXG4gIGlmKHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuc2V0RGF0YSkge1xuICAgIC8vIElFXG4gICAgdGV4dCA9IHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQnKVxuICB9IGVsc2Uge1xuICAgIHRleHQgPSAoZS5vcmlnaW5hbEV2ZW50IHx8IGUpLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpIFxuICB9XG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xuICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgIHRleHRSYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgICAgIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApXG5cbiAgICAgIC8vIOWIm+W7uuS4tOaXtuWFg+e0oO+8jOS9v+W+l1RleHRSYW5nZeWPr+S7peenu+WKqOWIsOato+ehrueahOS9jee9rlxuICAgICAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICB0ZW1wRWwuaW5uZXJIVE1MID0gXCImI0ZFRkY7XCJcbiAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKClcbiAgICAgIHJhbmdlLmluc2VydE5vZGUodGVtcEVsKVxuICAgICAgdGV4dFJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKVxuICAgICAgdGV4dFJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRlbXBFbClcbiAgICAgIHRlbXBFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBFbClcbiAgICB9XG4gICAgdGV4dFJhbmdlLnRleHQgPSB0ZXh0XG4gICAgdGV4dFJhbmdlLmNvbGxhcHNlKGZhbHNlKVxuICAgIHRleHRSYW5nZS5zZWxlY3QoKVxuICB9IGVsc2Uge1xuICAgIC8vIENocm9tZeS5i+exu+a1j+iniOWZqFxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0VGV4dFwiLCBmYWxzZSwgdGV4dClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3Bhc3RlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcblxuICAgIC8vIHJld3JpdGUgbGkgZW50ZXIgbG9naWNcbiAgICBpZiAocmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnbGknKSAmJiByaC5pc0VtcHR5Tm9kZShub2RlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgdWxPck9sID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndWwnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdvbCcpXG4gICAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnVUwnKSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRVbm9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgICB9XG4gICAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnT0wnKSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRPcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZnRlckVudGVyKHJoLCBlKVxufVxuXG5mdW5jdGlvbiBhZnRlckVudGVyKHJoLCBlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBub2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYmFzZU5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgLy8gY2xlYXIgbmV3IHJvdydzIGluZGVudFxuICAgIGlmIChyb3cpIHtcbiAgICAgIHJvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gJydcbiAgICAgIHJvdy5zdHlsZS5tYXJnaW5SaWdodCA9ICcnXG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXJsaW5lJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuICAgIGxldCBub2RlQ3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgdW5kZXJsaW5lIHRhZ1xuICAgIGxldCB1bmRlcmxpbmUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1JywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAndGV4dERlY29yYXRpb25MaW5lJzogJ3VuZGVybGluZSdcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ0knLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCF1bmRlcmxpbmUpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnVScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIHVuZGVybGluZSlcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2VUaHJvdWdoJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuICAgIGxldCBub2RlQ3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcblxuICAgIC8vIHRoZSBvdXRlcm1vc3Qgc3RyaWtlVGhyb3VnaCB0YWdcbiAgICBsZXQgc3RyaWtlVGhyb3VnaCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ1NUUklLRScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uTGluZSc6ICdsaW5lLXRocm91Z2gnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1UnLCAnSScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIXN0cmlrZVRocm91Z2gpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnU1RSSUtFJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgc3RyaWtlVGhyb3VnaClcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9zdHJpa2VUaHJvdWdoLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBpdGFsaWMgdGFnXG4gICAgbGV0IGl0YWxpYyA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2knLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICdmb250U3R5bGUnOiAnaXRhbGljJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnVScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICAvLyBpcyBpbiBhIGl0YWxpY1xuICAgIGlmICghaXRhbGljKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ0knKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBpdGFsaWMpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pdGFsaWMuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBib2xkIHRhZ1xuICAgIGxldCBib2xkID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnc3Ryb25nJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnYicpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ2ZvbnRXZWlnaHQnOiAnYm9sZCdcbiAgICAgIH0pXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ0knLCAnVSddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIWJvbGQpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnQicpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIGJvbGQpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBxID0ge1xuICAvLyBvbmx5IHNldCBjb250ZW50ZWRpdGFibGU6ZmFsc2UgaW4gcGFyZW50IG5vZGUgY2FuIGNoaWxkIG5vZGUgdHJpZ2dlciBrZXlkb3duIGxpc3RlbmVyXG4gICdxdW90ZScgKHJoLCBpc0luUXVvdGUpIHtcbiAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgaWYgKGlzSW5RdW90ZSkge1xuICAgICAgbm9kZSA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gbm9kZS5wYXJlbnROb2RlIDogbm9kZVxuICAgICAgbGV0IHF1b3RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnW2RhdGEtZWRpdG9yLXF1b3RlXScpXG4gICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgbGV0IHRleHRzID0gcmguZ2V0RGVzY2VuZGFudFRleHROb2RlcyhxdW90ZSlcbiAgICAgICAgbGV0IHF1b3RlUm93cyA9IFtdXG4gICAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShxdW90ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2snKS5jaGlsZHJlbilcbiAgICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgICAvLyBmaW5kIHJvdyBpbiBjdXJyZW50IHF1b3RlIHJvd1xuICAgICAgICAgIC8vIGxldCByb3cgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcsIGZhbHNlLCBxdW90ZSlcbiAgICAgICAgICBsZXQgcm93XG4gICAgICAgICAgcm93cy5mb3JFYWNoKGN1clJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoY3VyUm93LmNvbnRhaW5zKHRleHQpKSB7XG4gICAgICAgICAgICAgIHJvdyA9IGN1clJvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFxdW90ZVJvd3MuaW5jbHVkZXMocm93KSkge1xuICAgICAgICAgICAgcXVvdGVSb3dzLnB1c2gocm93KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcXVvdGVSb3dzLmZvckVhY2goKHFyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocXIsIHF1b3RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByaC5pbnNlcnRBZnRlcihxciwgcXVvdGVSb3dzW2luZGV4IC0gMV0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICAgIGlmIChxdW90ZVJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocXVvdGVSb3dzWzBdLCAwKVxuICAgICAgICAgIHJhbmdlLnNldEVuZChxdW90ZVJvd3NbcXVvdGVSb3dzLmxlbmd0aCAtIDFdLCAxKVxuICAgICAgICAgIHMucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0J3MgYSBlbXB0eSBxdW90ZVxuICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgIHMuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyBpcyBhdCBhIGVtcHR5IHJvdyB3aXRob3V0IHJvdyBlbGVtZW50LCB0aGVuIGNyZWF0ZSBhIHJvd1xuICAgIC8vIG9yIHRleHRzIGhhcyBubyBjb21tb24gcGFyZW50IHJvd1xuICAgIGlmICghY3VyUm93ICYmICF0ZXh0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgIHYuYXBwZW5kQ2hpbGQobmV3Um93KVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgbmV3Um93Lm91dGVySFRNTClcbiAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgIHRleHRzLnB1c2gocy5mb2N1c05vZGUpXG4gICAgfVxuICAgIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgICB0ZXh0cy5wdXNoKGN1clJvdylcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gcmgubmV3Um93KClcbiAgICBsZXQgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBsZXQgcXVvdGVCbG9jayA9IHJoLm5ld1Jvdyh7dGFnOiAnZGl2J30pXG4gICAgcXVvdGVCbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrJywgcmguY3JlYXRlUmFuZG9tSWQoJ3F1b3RlYmxvY2snKSlcbiAgICBxdW90ZS5hcHBlbmRDaGlsZChxdW90ZUJsb2NrKVxuICAgIGxldCBpZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdxdW90ZScpXG4gICAgcXVvdGUuc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZScsIGlkKVxuICAgIHF1b3RlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcbiAgICBsZXQgcXVvdGVSb3dzID0gW11cbiAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuXG4gICAgICAvLyBjcmVhdGUgYSByb3cgZm9yIHRleHQgd2l0aG91dCByb3dcbiAgICAgIGlmICghY3VyUm93ICYmIHRleHQubm9kZVZhbHVlKSB7XG4gICAgICAgIGN1clJvdyA9IHJoLm5ld1JvdygpXG4gICAgICAgIGN1clJvdy5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgfVxuICAgICAgaWYgKGN1clJvdyAmJiAhcXVvdGVSb3dzLmluY2x1ZGVzKGN1clJvdykpIHtcbiAgICAgICAgcXVvdGVSb3dzLnB1c2goY3VyUm93KVxuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IGFuY2hvclJvd1xuICAgIHF1b3RlUm93cy5mb3JFYWNoKChxciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gcXVvdGVSb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcXVvdGVCbG9jay5hcHBlbmRDaGlsZChxcilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBxdW90ZUJsb2NrLmFwcGVuZENoaWxkKHFyLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgIGFuY2hvclJvdyA9IHFyXG4gICAgfSlcblxuICAgIGlmIChhbmNob3JSb3cucGFyZW50Tm9kZSkge1xuICAgICAgYW5jaG9yUm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHF1b3RlLCBhbmNob3JSb3cpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGN1cnJlbnQgcm93IGlzIGNyZWF0ZWQgYW5kIGhhcyBubyBwYXJlbnRcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIHYuYXBwZW5kQ2hpbGQocXVvdGUpXG4gICAgICByaC5yYW5nZS5kZWxldGVDb250ZW50cygpXG4gICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCB2LmlubmVySFRNTClcbiAgICB9XG4gICAgY29uc3QgY3VyUXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lZGl0b3ItcXVvdGU9JyR7aWR9J11gKVxuICAgIGlmICghY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZCkgcmV0dXJuXG4gICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UoY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZCwgY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQgPyAxIDogMClcbiAgfSxcbiAgJ2luaXRRdW90ZScgKHJoLCBhcmcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBsZXQgcXVvdGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKGUudGFyZ2V0LCAnW2RhdGEtZWRpdG9yLXF1b3RlXScpXG4gICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgICBsZXQgbm9kZSA9IHMuYW5jaG9yTm9kZVxuICAgICAgICBsZXQgY3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBpZiAoY3RuLnJlcGxhY2UoJ1xcbicsICcnKSA9PT0gJycpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG5cbiAgICAgICAgICAvLyBjdXJzb3IgbWF5IGF0IHJvdyBvciBhdCBxdW90ZSBibG9jayAsIHNvIHRoZXJlIGFyZSB0d28ganVkZ2VtZW50IGNvbmRpdGlvbnNcbiAgICAgICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAocy5mb2N1c09mZnNldCA9PT0gMCB8fCAobm9kZS5jb250YWlucyhzLmJhc2VOb2RlKSAmJiAocmguaXNFbXB0eU5vZGUocy5iYXNlTm9kZSkpICYmIHMuZm9jdXNPZmZzZXQgPT09IDEpKSkge1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKHF1b3RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9ja10nKS5jaGlsZHJlbilcblxuICAgICAgICAgICAgLy8gZW1wdHkgcXVvdGVcbiAgICAgICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgLy8gcm93IGFuZCBub2RlIGhhcyBmYXRoZXItY2hpbGQgcmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgIGlmICgocm93ID09PSBub2RlIHx8IHJvdy5jb250YWlucyhub2RlKSB8fCBub2RlLmNvbnRhaW5zKHJvdykpICYmIGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBvbmx5IGhhdmUgb25lIGVtcHR5IHJvdyBpbiBxdW90ZSx0aGVuIGRlbGV0ZSB0aGUgcXVvdGVcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDEgJiYgcmguaXNFbXB0eU5vZGUocm93KSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgLy8gZmlyc3Qgcm93IGhhdmUgY29udGVudCBhbmQgcHJldmlvdXMgZWxlbWVudCBleGlzdCwgdGhlbiBtb3ZlIGN1cnNvciB0byBwcmV2aW91cyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICBsZXQgcHJlUm93ID0gcmguZ2V0UHJldmlvdXNSb3cocXVvdGUpXG4gICAgICAgICAgICAgICAgICBpZiAocHJlUm93KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHF1b3RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFbGUgPSBBcnJheS5mcm9tKHByZVJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2tdJykuY2hpbGRyZW4pLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGxhc3RFbGUsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobGFzdEVsZSwgMClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSB0b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBwcmVSb3cucXVlcnlTZWxlY3RvcignW3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHJvd1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHByZVJvdywgMSlcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHByZVJvdywgMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IHQgPSB7XG4gICd0b2RvJyAocmgsIGRhdGEpIHtcbiAgICBsZXQgcm93ID0gcmgubmV3Um93KHtcbiAgICAgIGJyOiB0cnVlXG4gICAgfSlcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIFxuICAgIC8vIGEgZW1wdHkgcm93IHdpdGhvdXQgcm93IGVsZW1lbnQsIGNyZWF0ZSBhIHJvdyBlbGVtZW50XG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgIHYuYXBwZW5kQ2hpbGQobmV3Um93KVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgbmV3Um93Lm91dGVySFRNTClcbiAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgIGN1clJvdyA9IHMuZm9jdXNOb2RlXG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0IHRvZG8gYWZ0ZXIgdGhpcyByb3dcbiAgICBsZXQgYWZ0ZXJXaGljaCA9IHJoLmdldFJvdyhkYXRhLmluc2VydEFmdGVyKVxuXG4gICAgLy8gaXMgYWZ0ZXJXaGljaCBpcyBhIGVtcHR5IHJvdywganVzdCBpbnNlcnQgdG9kbyBhdCBjdXJyZW50IHJvd1xuICAgIGlmIChhZnRlcldoaWNoICYmIHJoLmlzRW1wdHlSb3coYWZ0ZXJXaGljaCkpIHtcbiAgICAgIGFmdGVyV2hpY2ggPSBudWxsXG4gICAgfVxuICAgIGlmIChhZnRlcldoaWNoKSB7XG4gICAgICBsZXQgdGFyZ2V0SW5kZXhcbiAgICAgIGxldCBzdGFydEluZGV4XG4gICAgICBsZXQgbGlzdCA9IGFmdGVyV2hpY2gucGFyZW50Tm9kZS5jaGlsZE5vZGVzXG4gICAgICBsaXN0LmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgPT09IGFmdGVyV2hpY2gpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gbGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA9IGxpc3QubGVuZ3RoXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydEluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGFyZ2V0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRhcmdldEluZGV4ID0gdGFyZ2V0SW5kZXggPT09IHVuZGVmaW5lZCA/IHN0YXJ0SW5kZXggKyAxIDogdGFyZ2V0SW5kZXhcbiAgICAgIGFmdGVyV2hpY2gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocm93LCBsaXN0W3RhcmdldEluZGV4XSlcbiAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHJvdywgMClcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBpbnNlcnQgdG9kbyBhdCBjdXJyZW50IHJvdyBpZiBpdCBpcyBlbXB0eVxuICAgICAgaWYgKHJoLmlzRW1wdHlSb3coY3VyUm93KSkge1xuICAgICAgICByaC5jb2xsYXBzZUF0Um93KGN1clJvdylcbiAgICAgICAgcm93ID0gY3VyUm93XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3csIDApXG4gICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHJvdywgMClcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRvZG9JZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCd0b2RvJylcbiAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCBgPCR7Y29uc3RhbnQuUk9XX1RBR30gZGF0YS1lZGl0b3ItdG9kbz0ke3RvZG9JZH0gY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtkYXRhLnBsYWNlaG9sZGVyfVwiPjwvJHtjb25zdGFudC5ST1dfVEFHfT48YnI+YClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lZGl0b3ItdG9kbz0nJHt0b2RvSWR9J10gaW5wdXRbdHlwZT10ZXh0XWApLmZvY3VzKClcbiAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpXG4gICAgdFsnaW5pdFRvZG8nXShyaCwgZGF0YSlcbiAgfSxcbiAgLy8gaW5pdCB0b2RvIGxvZ2ljXG4gICdpbml0VG9kbycgKHJoLCBkYXRhKSB7XG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWRpdG9yLXRvZG9dJylcbiAgICBjaGVja2JveHMuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGMucXVlcnlTZWxlY3RvcignW3R5cGU9Y2hlY2tib3hdJylcbiAgICAgIGNvbnN0IGN0biA9IGMucXVlcnlTZWxlY3RvcignW3R5cGU9dGV4dF0nKVxuICAgICAgaWYgKGMuaW5pdCkgcmV0dXJuXG4gICAgICBjdG5DaGVja2VkTG9naWMoKVxuXG4gICAgICBmdW5jdGlvbiBjdG5DaGVja2VkTG9naWMoKSB7XG4gICAgICAgIGN0bi52YWx1ZSA9IGN0bi52YWx1ZSB8fCBjdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci12YWx1ZScpXG4gICAgICAgIGN0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJywgY3RuLnZhbHVlKVxuICAgICAgICBpZiAoYnRuLmNoZWNrZWQpIHtcbiAgICAgICAgICBjdG4uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdG4uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbiAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGJ0bi5vbmNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjdG5DaGVja2VkTG9naWMoKVxuICAgICAgICBpZiAocmguZWRpdG9yICYmIHJoLmVkaXRvci4kcmVmcyAmJiByaC5lZGl0b3IuJHJlZnMuY29udGVudCkge1xuICAgICAgICAgIHJoLmVkaXRvci4kZW1pdCgnY2hhbmdlJywgcmguZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdG4ub25pbnB1dCA9IGUgPT4ge1xuICAgICAgICBjdG4uc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci12YWx1ZScsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgfVxuICAgICAgY3RuLm9ua2V5ZG93biA9IGN0bi5vbmtleWRvd24gfHwgKGUgPT4ge1xuICAgICAgICAgIGlmICghWzEzLCA4XS5pbmNsdWRlcyhlLmtleUNvZGUpKSByZXR1cm5cbiAgICAgICAgICBsZXQgcm93ID0gYy5uZXh0U2libGluZ1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBpZiAoY3RuLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVRvZG8oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdFsndG9kbyddKHJoLCB7XG4gICAgICAgICAgICAgIGluc2VydEFmdGVyOiBjLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZGF0YS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKGN0bi52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgZGVsZXRlVG9kbygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgIGMucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBjKVxuICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIGMuaW5pdCA9IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy90b2RvLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcblxuICAgIC8vIHRvIGtlZXAgdGV4dCB3cmFwIGJ5IGEgcm93XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgY29tbWFuZHMuZm9ybWF0QmxvY2socmgsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9rZXlkb3duLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgLy8gcmVzdG9yZSBmaXJzdCByb3dcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgbGV0IHZhbHVlID0gbm9kZS5ub2RlVmFsdWUgfHwgbm9kZS5pbm5lclRleHRcbiAgLy8gY29uc29sZS5sb2coJ2RlbGV0ZScsIG5vZGUsIGUpXG4gIGxldCBjdXJSYW5nZSA9IHJoLmdldFJhbmdlKCkgfHwgcmgucmFuZ2VcblxuICAvLyBjYW5jZWwgbGlzdCB3aGVuIGxpIGlzIGVtcHR5XG4gIGlmICgocmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnbGknKSkgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdWxPck9sID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndWwnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdvbCcpXG4gICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgY29tbWFuZHNbJ2luc2VydFVub3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICB9XG4gICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ09MJykge1xuICAgICAgY29tbWFuZHNbJ2luc2VydE9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAvLyBub2RlIGlzIGVkaXQgem9uZVxuICBpZiAoIXJvdykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBhZnRlckRlbGV0ZShyaClcbiAgfVxuICBcbiAgLy8gZW1wdHkgcm93XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQgJiYgKChub2RlID09PSByb3cgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHx8IChyb3cuaW5uZXJIVE1MLnJlcGxhY2UoLzxicj4vZywgJycpID09PSAnJyAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMSkpKSB7XG4gICAgbGV0IGZpcnN0Um93ID0gcmguZWRpdFpvbmUoKS5maXJzdEVsZW1lbnRDaGlsZFxuXG4gICAgLy8gZmlyc3Qgcm93IGNhbmNlbCBvdXRkZW50XG4gICAgaWYgKGZpcnN0Um93ID09PSByb3cpIHtcbiAgICAgIGNvbW1hbmRzLm91dGRlbnQocmgsIG51bGwpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIC8vIHJvdyBoYXMgY29udGVudCwgY3Vyc29yIGlzIGF0IGF0IHN0YXJ0IG9mIHRoZSBub2RlLCBkbyBvdXRkZW50XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQgJiYgdmFsdWUgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDAgJiYgKG5vZGUgPT09IHJvdy5maXN0RWxlbWVudENoaWxkIHx8IG5vZGUgPT09IHJvdy5maXJzdENoaWxkKSkge1xuICAgIGxldCBvdXRkZW50UmVzdWx0ID0gY29tbWFuZHMub3V0ZGVudChyaCwgbnVsbClcbiAgICBpZiAob3V0ZGVudFJlc3VsdCA9PT0gJ05PX05FRURfT1VUREVOVCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGVtcHR5IHJvd1xuICBpZiAocm93LmlubmVySFRNTC5yZXBsYWNlKC88YnI+L2csICcnKSA9PT0gJycpIHtcbiAgICAvLyBnZXQgcHJldmlvdXMgcm93IHdpdGggY29udGVudFxuICAgIGxldCBwcmVSb3cgPSByaC5nZXRQcmV2aW91c1Jvdyhyb3cpXG5cbiAgICAvLyBjdXJzb3IgZm9jdXMgb24gcHJldmlvdXMgcm93J3MgaW5wdXQgaWYgcHJldmlvdXMgcm93IGlzIHRvZG9cbiAgICBpZiAocHJlUm93ICYmIHByZVJvdy5kYXRhc2V0ICYmIHByZVJvdy5kYXRhc2V0LmVkaXRvclRvZG8pIHtcbiAgICAgIHJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdylcbiAgICAgIGxldCBpbnB1dCA9IHByZVJvdy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGUucHJldmVudERlZmF1bHQoKVxuICByZXR1cm4gYWZ0ZXJEZWxldGUocmgpXG59XG5cbi8vIGhhbmRsZSAmIzgyMDM7IGFmdGVyIGRlbGV0ZVxuZnVuY3Rpb24gYWZ0ZXJEZWxldGUocmgpIHtcbiAgbGV0IGRlbGV0ZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgbGV0IGZvY3VzTm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IGN0biA9IHR5cGVvZiBmb2N1c05vZGUuaW5uZXJUZXh0ID09PSAnc3RyaW5nJyA/IGZvY3VzTm9kZS5pbm5lclRleHQgOiBmb2N1c05vZGUubm9kZVZhbHVlXG4gICAgaWYgKHR5cGVvZiBjdG4gPT09ICdzdHJpbmcnICYmIC9cXHUyMDBCLy50ZXN0KGN0bikgJiYgY3RuLnJlcGxhY2UoL1xcdTIwMEIvZywgJycpID09PSAnJykge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChkZWxldGVJbnRlcnZhbClcbiAgICB9XG4gIH0pXG5cbiAgLy8gaWYgZWRpdCB6b25lIGlzIGVtcHR5LCBjcmVhdGUgYSByb3dcbiAgaWYgKHJoLmlzRW1wdHlOb2RlKHJoLmVkaXRab25lKCkpICYmICFyaC5nZXRSb3dzKCkubGVuZ3RoKSB7XG4gICAgbGV0IHJvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgIHJoLmVkaXRab25lKCkuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHJvdywgMSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2RlbGV0ZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJyYjODIwMzsnKVxuICAgICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1JvdygpXG4gICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dC5ub2RlVmFsdWVcbiAgICAgIGxldCBuZXh0U2libGluZyA9IHRleHQubmV4dFNpYmxpbmdcbiAgICAgIHRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0KVxuICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5UmlnaHQnLCBmYWxzZSlcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9qdXN0aWZ5UmlnaHQuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICcmIzgyMDM7JylcbiAgICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coKVxuICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHQubm9kZVZhbHVlXG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0ZXh0Lm5leHRTaWJsaW5nXG4gICAgICB0ZXh0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dClcbiAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnLCBmYWxzZSlcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9qdXN0aWZ5TGVmdC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJyYjODIwMzsnKVxuICAgICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1JvdygpXG4gICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dC5ub2RlVmFsdWVcbiAgICAgIGxldCBuZXh0U2libGluZyA9IHRleHQubmV4dFNpYmxpbmdcbiAgICAgIHRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0KVxuICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJywgZmFsc2UpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvanVzdGlmeUNlbnRlci5qcyIsImltcG9ydCBhbSBmcm9tICcuL2Fzc2lzdC1tZXRob2RzJ1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuY29uc3QgbSA9IHtcbiAgLyoqXG4gICAqIGZ1bmMgYWRkIGV2ZXJ5IGVsZW1lbnRzIG9mIGV4dEFyciB0byBzb3VyY2VBcnIuXG4gICAqIEBwYXJhbSBzb3VyY2VBcnJcbiAgICogQHBhcmFtIGV4dEFyclxuICAgKi9cbiAgbWVyZ2VBcnJheSAoc291cmNlQXJyLCBleHRBcnIpIHtcbiAgICAvLyBub3RlOiBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnIxLGFycjIpIGlzIHVucmVsaWFibGVcbiAgICBleHRBcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHNvdXJjZUFyci5wdXNoKGVsKVxuICAgIH0pXG4gIH0sXG4gIC8qKlxuICAgKiBmaW5kIGFsbCB0aGUgZGVzY2VuZGFudCB0ZXh0IG5vZGVzIG9mIGEgZWxlbWVudFxuICAgKiBAcGFyYW0gYW5jZXN0b3JcbiAgICovXG4gIGdldERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yKSB7XG4gICAgaWYgKGFuY2VzdG9yLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgcmV0dXJuIFthbmNlc3Rvcl1cbiAgICB9XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cbiAgICBpZiAoIWFuY2VzdG9yLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgcmV0dXJuIHRleHROb2Rlc1xuICAgIH1cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYW5jZXN0b3IuY2hpbGROb2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZXNbaV1cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLyoqXG4gICAqIGZ1bmMgZmluZCBhbGwgdGhlIGRlc2NlbmRhbnQgdGV4dCBub2RlcyBvZiBhbiBhbmNlc3RvciBlbGVtZW50IHRoYXQgYmVmb3JlIHRoZSBzcGVjaWZ5IGVuZCBlbGVtZW50LFxuICAgKiB0aGUgYW5jZXN0b3IgZWxlbWVudCBtdXN0IGNvbnRhaW5zIHRoZSBlbmQgZWxlbWVudC5cbiAgICogQHBhcmFtIGFuY2VzdG9yXG4gICAqIEBwYXJhbSBlbmRFbFxuICAgKi9cbiAgZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IsIGVuZEVsKSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cbiAgICBsZXQgZW5kSW5kZXggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmNlc3Rvci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYW5jZXN0b3IuY2hpbGROb2Rlc1tpXS5jb250YWlucyhlbmRFbCkpIHtcbiAgICAgICAgZW5kSW5kZXggPSBpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGFuY2VzdG9yLmNoaWxkTm9kZXNbaV1cbiAgICAgIGlmIChub2RlID09PSBlbmRFbCkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGVuZEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgZW5kRWwpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBmaW5kIGFsbCB0aGUgZGVzY2VuZGFudCB0ZXh0IG5vZGVzIG9mIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBhZnRlciB0aGUgc3BlY2lmeSBzdGFydCBlbGVtZW50LFxuICAgKiB0aGUgYW5jZXN0b3IgZWxlbWVudCBtdXN0IGNvbnRhaW5zIHRoZSBzdGFydCBlbGVtZW50LlxuICAgKiBAcGFyYW0gYW5jZXN0b3JcbiAgICogQHBhcmFtIHN0YXJ0RWxcbiAgICovXG4gIGdldEFmdGVyU3RhcnREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3Rvciwgc3RhcnRFbCkge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmNlc3Rvci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYW5jZXN0b3IuY2hpbGROb2Rlc1tpXS5jb250YWlucyhzdGFydEVsKSkge1xuICAgICAgICBzdGFydEluZGV4ID0gaVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgYW5jZXN0b3IuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGFuY2VzdG9yLmNoaWxkTm9kZXNbaV1cbiAgICAgIGlmIChub2RlID09PSBzdGFydEVsKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc3RhcnRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcyxcbiAgICAgICAgICAgIG0uZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgc3RhcnRFbCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcyxcbiAgICAgICAgICBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLyoqXG4gICAqIGZ1bmMgZ2V0IHRoZSBjbG9zZXN0IHBhcmVudCBibG9jayBub2RlIG9mIGEgdGV4dCBub2RlLlxuICAgKiBAcGFyYW0gbm9kZVxuICAgKiBAcmV0dXJuIHtOb2RlfVxuICAgKi9cbiAgZ2V0UGFyZW50QmxvY2tOb2RlIChub2RlKSB7XG4gICAgY29uc3QgYmxvY2tOb2RlTmFtZXMgPSBbJ0RJVicsICdQJywgJ1NFQ1RJT04nLCAnSDEnLCAnSDInLCAnSDMnLCAnSDQnLCAnSDUnLCAnSDYnLFxuICAgICAgJ09MJywgJ1VMJywgJ0xJJywgJ1RSJywgJ1REJywgJ1RIJywgJ1RCT0RZJywgJ1RIRUFEJywgJ1RBQkxFJywgJ0FSVElDTEUnLCAnSEVBREVSJywgJ0ZPT1RFUicsICdCTE9DS1FVT1RFJ11cbiAgICBsZXQgY29udGFpbmVyID0gbm9kZVxuICAgIHdoaWxlIChjb250YWluZXIpIHtcbiAgICAgIGlmIChibG9ja05vZGVOYW1lcy5pbmNsdWRlcyhjb250YWluZXIubm9kZU5hbWUpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH0sXG4gIGlzSW5saW5lRWxlbWVudCAobm9kZSkge1xuICAgIGNvbnN0IGlubGluZU5vZGVOYW1lcyA9IFsnQScsICdBQkJSJywgJ0FDUk9OWU0nLCAnQicsICdDSVRFJywgJ0NPREUnLCAnRU0nLCAnSScsXG4gICAgICAnRk9OVCcsICdJTUcnLCAnUycsICdTTUFMTCcsICdTUEFOJywgJ1NUUklLRScsICdTVFJPTkcnLCAnVScsICdTVUInLCAnU1VQJ11cbiAgICByZXR1cm4gaW5saW5lTm9kZU5hbWVzLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpXG4gIH0sXG4gIGlzSW5saW5lT3JUZXh0IChub2RlKSB7XG4gICAgbGV0IGlzSW5saW5lID0gbS5pc0lubGluZUVsZW1lbnQobm9kZSlcbiAgICBsZXQgaXNUZXh0ID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREVcbiAgICByZXR1cm4gaXNJbmxpbmUgfHwgaXNUZXh0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgYWxsIHNwZWNpZnkgbm9kZXMgaW4gYW4gYW5jZXN0b3IgdGhyb3VnaCBzZWFyY2ggb3BpbmlvbnModW5pcXVlIGF0dHJpYnV0ZXMpXG4gICAqIEBwYXJhbSBub2RlXG4gICAqIEBwYXJhbSB7b2JqfVxuICAgKiAgICAgbXVzdCBoYXZlIGtleSAndGFnTmFtZSdcbiAgICogQHJldHVybiB7YXJyfVxuICAgKiovXG4gIGdldEFsbFNwZWNpZnlOb2RlIChhbmNlc3Rvciwgc2VhcmNoT3Bpbmlvbikge1xuICAgIGNvbnN0IHRhcmdldFRhZ05hbWUgPSBzZWFyY2hPcGluaW9uLnRhZ05hbWVcbiAgICBkZWxldGUgc2VhcmNoT3Bpbmlvbi50YWdOYW1lXG4gICAgY29uc3QgdGFncyA9IGFuY2VzdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0VGFnTmFtZSlcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgY29uc3Qgb3BpbmlvbktleXMgPSBPYmplY3Qua2V5cyhzZWFyY2hPcGluaW9uKVxuICAgICAgbGV0IHBhc3MgPSB0cnVlXG4gICAgICBvcGluaW9uS2V5cy5mb3JFYWNoKG9waW5pb24gPT4ge1xuICAgICAgICB2YXIgYSA9IHRhZy5nZXRBdHRyaWJ1dGUob3BpbmlvbilcbiAgICAgICAgaWYgKHRhZy5nZXRBdHRyaWJ1dGUob3BpbmlvbikgIT09IHNlYXJjaE9waW5pb25bb3Bpbmlvbl0pIHtcbiAgICAgICAgICBwYXNzID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChwYXNzKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRhZylcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogZnVuYyBmaW5kIHRoZSBudW1iZXIgb2YgbmVzdGluZyBhbmNlc3RvciB3aGljaCBoYXMgc2FtZSBub2RlIG5hbWVcbiAgICogQHBhcmFtIHtub2RlfSBjdXJyZW50IG5vZGVcbiAgICogQHBhcmFtIHtzdHJ9IGFuY2VzdG9yJ3MgdGFnIG5hbWVcbiAgICogQHJldHVybiB7bnVtfSBudW1iZXJcbiAgICoqL1xuICBob3dNYW55TmVzdEFuY2VzdG9yU2FtZVRhZyAobm9kZSwgYW5jZXN0b3JOb2RlTmFtZSkge1xuICAgIGxldCBudW0gPSAwXG4gICAgYW5jZXN0b3JOb2RlTmFtZSA9IGFuY2VzdG9yTm9kZU5hbWUudG9VcHBlckNhc2UoKVxuICAgIHdoaWxlIChub2RlICYmIChub2RlICE9PSBhbS5lZGl0Wm9uZSgpKSkge1xuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IGFuY2VzdG9yTm9kZU5hbWUpIHtcbiAgICAgICAgbnVtKytcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIG51bVxuICB9LFxuXG4gIC8qXG4gICAqIGZpbmQgYW4gYW5jZXN0b3IgZWxlbWVudCB0aHJvdWdoIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7bm9kZX0gc3RhcnQgYXQgbm9kZVxuICAgKiBAcGFyYW0ge3N0cn0gYW5jZXN0b3IgZWxlbWVudCdzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZWl0aGVyIHJldHVybiBmaXJzdCBlbGlnaWJsZSBlbGVtZW50IG9yIGxhc3QgZWxpZ2libGUgZWxlbWVudFxuICAgKiAgZGVmYXVsdDogdHJ1ZVxuICAgKiBAcGFyYW0ge25vZGV9IHNlYXJjaGluZyBzdG9wIGF0IHRoZSBib3JkZXIgZWxlbWVudFxuICAgKiAgZGVmYXVsdDogZWRpdG9yJ3MgY29udGVudCB6b25lXG4gICAqIEByZXR1cm4gdGFyZ2V0IGFuY2VzdG9yIGVsZW1lbnRcbiAgICoqL1xuICBmaW5kU3BlY2lhbEFuY2VzdG9yIChub2RlLCBzZWxlY3RvciwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBsZXQgYW5jZXN0b3JzID0gQXJyYXkuZnJvbShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgICBpZiAoYW5jZXN0b3JzLmxlbmd0aCkge1xuICAgICAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbm9kZVxuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiBmaW5kIHRhcmdldCBzdHlsZVxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZSAobm9kZSwgc3R5bGVOYW1lLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGlmIChub2RlLnN0eWxlICYmIG5vZGUuc3R5bGVbc3R5bGVOYW1lXSkge1xuICAgICAgICByZXN1bHQgPSBub2RlLnN0eWxlW3N0eWxlTmFtZV1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiBmaW5kIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhyb3VnaCBzdHlsZSBuYW1lIGFuZCBzdHlsZSB2YWx1ZVxuICAgKiBAcGFyYW0gc3R5bGUge29ian0gc3R5bGVOYW1lOiBzdHlsZVZhbHVlXG4gICAqIEByZXR1cm5cbiAgICoqL1xuICBmaW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZSAobm9kZSwgc3R5bGUsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgbGV0IGlzVGFyZ2V0ID0gdHJ1ZVxuICAgICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goc3R5bGVOYW1lID0+IHtcbiAgICAgICAgaWYgKHN0eWxlW3N0eWxlTmFtZV0gIT09IHBhcmVudC5zdHlsZVtzdHlsZU5hbWVdKSB7XG4gICAgICAgICAgaXNUYXJnZXQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGlzVGFyZ2V0KSB7XG4gICAgICAgIHJlc3VsdCA9IHBhcmVudFxuICAgICAgICBub2RlID0gcGFyZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gcGFyZW50XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcblxuICBnZXROb2RlTnVtIChhbmNlc3Rvciwgbm9kZU5hbWUpIHtcbiAgICByZXR1cm4gYW5jZXN0b3IucXVlcnlTZWxlY3RvckFsbChub2RlTmFtZSkubGVuZ3RoXG4gIH0sXG4gIC8qKlxuICAgKiBmaW5kIGFsbCB0aGUgdGV4dCBub2RlcyBpbiByYW5nZVxuICAgKi9cbiAgZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpIHtcbiAgICBjb25zdCBzdGFydENvbnRhaW5lciA9IHRoaXMucmFuZ2Uuc3RhcnRDb250YWluZXJcbiAgICBjb25zdCBlbmRDb250YWluZXIgPSB0aGlzLnJhbmdlLmVuZENvbnRhaW5lclxuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuXG4gICAgaWYgKHN0YXJ0Q29udGFpbmVyID09PSBlbmRDb250YWluZXIpIHtcbiAgICAgIGlmIChzdGFydENvbnRhaW5lci5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgcmV0dXJuIFtzdGFydENvbnRhaW5lcl1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdGFydENvbnRhaW5lci5jaGlsZE5vZGVzXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5yYW5nZS5zdGFydE9mZnNldDsgaSA8IHRoaXMucmFuZ2UuZW5kT2Zmc2V0OyBpKyspIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKGNoaWxkTm9kZXNbaV0pKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHROb2Rlc1xuICAgIH1cblxuICAgIGxldCBzdGFydEluZGV4ID0gMFxuICAgIGxldCBlbmRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gcm9vdEVsLmNoaWxkTm9kZXNbaV1cbiAgICAgIGlmIChub2RlLmNvbnRhaW5zKHN0YXJ0Q29udGFpbmVyKSkge1xuICAgICAgICBzdGFydEluZGV4ID0gaVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUuY29udGFpbnMoZW5kQ29udGFpbmVyKSkge1xuICAgICAgICBlbmRJbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gcm9vdEVsLmNoaWxkTm9kZXNbaV1cbiAgICAgIGlmIChpID09PSBzdGFydEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldEFmdGVyU3RhcnREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIHN0YXJ0Q29udGFpbmVyKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpID09PSBlbmRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIGVuZENvbnRhaW5lcikpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qXG4gICAqIGdldCB0aGUgcm93IHdoaWNoIGNvbnRhaW5zIHRhcmdldCBlbGVtZW50XG4gICAqIEBwYXJhbSB7bm9kZX0gdGFyZ2V0IGVsZW1lbnRcbiAgICogQHJldHVybiB7bm9kZX0gcm93XG4gICAqKi9cbiAgZ2V0Um93IChub2RlKSB7XG4gICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKGFtLmVkaXRab25lKCkuY2hpbGRyZW4pXG4gICAgbGV0IHJlc3VsdFxuICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgaWYgKHJvdy5jb250YWlucyhub2RlKSB8fCByb3cgPT09IG5vZGUpIHtcbiAgICAgICAgcmVzdWx0ID0gcm93XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIHRleHRUb1JvdyAobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IGFtLmVkaXRab25lKCkgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGZhbHNlLCBjb25zdGFudC5ST1dfVEFHX1VQUEVSQ0FTRSlcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfSxcbiAgLypcbiAgICogZ2V0IHJvdywgaWYgdGhlcmUncyBub3QsIGNyZWF0ZSBvbmVcbiAgICoqL1xuICBmb3JjZUdldFJvdyAobm9kZSkge1xuICAgIG5vZGUgPSBtLnRleHRUb1Jvdyhub2RlKVxuICAgIHJldHVybiBtLmdldFJvdyhub2RlKVxuICB9LFxuICAvKlxuICAgKiByZXR1cm4gYWxsIHJvd3NcbiAgICoqL1xuICBnZXRSb3dzICgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhbS5lZGl0Wm9uZSgpLmNoaWxkcmVuKVxuICB9LFxuICAvKlxuICAgKiB3aGV0aGVyIGN1cnJlbnQgbm9kZSBpcyBhIHJvd1xuICAgKiovXG4gIGlzUm93IChub2RlKSB7XG4gICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKGFtLmVkaXRab25lKCkuY2hpbGRyZW4pXG4gICAgcmV0dXJuIHJvd3MuaW5jbHVkZXMobm9kZSlcbiAgfSxcbiAgLypcbiAgICogY3JlYXRlIGEgd3JhcHBlciBmb3IgaW5saW5lIGVsZW1lbnQgaW4gc2FtZSByb3dcbiAgICoqL1xuICBjcmVhdGVXcmFwcGVyRm9ySW5saW5lIChub2RlLCB3cmFwcGVyTm9kZU5hbWUsIHNlcGVyYXRlQnlCciA9IHRydWUpIHtcbiAgICBpZiAoIW0uaXNJbmxpbmVPclRleHQobm9kZSkpIHJldHVybiBub2RlXG4gICAgbGV0IGVsZW1lbnRzID0gW25vZGVdXG4gICAgc2VhcmNoTGVmdCgpXG4gICAgc2VhcmNoUmlnaHQoKVxuICAgIGxldCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdyYXBwZXJOb2RlTmFtZSlcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IGVsZW1lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGVsZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgbGFzdE9uZSA9IGVsZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChsYXN0T25lKVxuICAgICAgZWxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgZWxlKVxuICAgIH0pXG5cbiAgICBpZiAoc2VwZXJhdGVCeUJyKSB7XG4gICAgICBoYW5kbGVyQnIobmV3Um93LnByZXZpb3VzU2libGluZywgdHJ1ZSlcbiAgICAgIGhhbmRsZXJCcihuZXdSb3cubmV4dFNpYmxpbmcsIGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Um93XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyQnIobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIGxldCBuZXh0RGlyID0gZGlyZWN0aW9uID8gJ3ByZXZpb3VzU2libGluZycgOiAnbmV4dFNpYmxpbmcnXG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gbm9kZVtuZXh0RGlyXVxuICAgICAgICBpZiAoIXRhcmdldE5vZGUpIHJldHVyblxuICAgICAgICBpZiAodGFyZ2V0Tm9kZS5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVyQnIodGFyZ2V0Tm9kZSwgZGlyZWN0aW9uKVxuICAgICAgICB9XG4gICAgICAgIG0uY3JlYXRlV3JhcHBlckZvcklubGluZSh0YXJnZXROb2RlLCB3cmFwcGVyTm9kZU5hbWUsIHNlcGVyYXRlQnlCcilcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2VhcmNoTGVmdCgpIHtcbiAgICAgIHdoaWxlIChlbGVtZW50c1swXS5wcmV2aW91c1NpYmxpbmcgJiYgbS5pc0lubGluZU9yVGV4dChlbGVtZW50c1swXS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAgIGVsZW1lbnRzLnVuc2hpZnQoZWxlbWVudHNbMF0ucHJldmlvdXNTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZWFyY2hSaWdodCgpIHtcbiAgICAgIHdoaWxlIChlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5uZXh0U2libGluZyAmJiBtLmlzSW5saW5lT3JUZXh0KGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nKSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLypcbiAgICogZ2V0IG5vZGUncyBwcmV2aW91cyByb3cgd2hpY2ggaGFzIGNvbnRlbnRcbiAgICoqL1xuICBnZXRQcmV2aW91c1JvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmdldFJvdyhub2RlKVxuICAgIGxldCBwcmVSb3dcbiAgICBsZXQgcm93cyA9IG0uZ2V0Um93cygpXG4gICAgbGV0IHJvd0luZGV4ID0gbnVsbFxuICAgIHJvd3MuZm9yRWFjaCgoY3VyUm93LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1clJvdyA9PT0gcm93KSB7XG4gICAgICAgIHJvd0luZGV4ID0gaW5kZXhcbiAgICAgIH1cbiAgICAgIGlmIChyb3dJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoY3VyUm93LmlubmVySFRNTCAhPT0gJycpIHtcbiAgICAgICAgICBwcmVSb3cgPSBjdXJSb3dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHByZVJvd1xuICB9LFxuICAvKlxuICAgKiB3aGV0aGVyIHRhcmdldCByb3cgaXMgZW1wdHlcbiAgICoqL1xuICBpc0VtcHR5Um93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uaXNSb3cobm9kZSkgPyBub2RlIDogbS5nZXRSb3cobm9kZSlcbiAgICBpZiAocm93LmdldEF0dHJpYnV0ZSkge1xuICAgICAgaWYgKHR5cGVvZiByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZScpID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdy5pbm5lclRleHQucmVwbGFjZSgnXFxuJywgJycpLnJlcGxhY2UoL1xcdTIwMEIvZywgJycpID09PSAnJ1xuICB9LFxuICAvKlxuICAgKiB3aGV0aGVyIHRhcmdldCBub2RlIGlzIGVtcHR5XG4gICAqKi9cbiAgaXNFbXB0eU5vZGUgKG5vZGUpIHtcbiAgICBsZXQgY3RuID0gdHlwZW9mIG5vZGUuaW5uZXJUZXh0ID09PSAnc3RyaW5nJyA/IG5vZGUuaW5uZXJUZXh0IDogbm9kZS5ub2RlVmFsdWVcbiAgICBpZiAodHlwZW9mIGN0biAhPT0gJ3N0cmluZycpIHJldHVyblxuICAgIHJldHVybiBjdG4ucmVwbGFjZSgnXFxuJywgJycpLnJlcGxhY2UoL1xcdTIwMEIvZywgJycpID09PSAnJ1xuICB9LFxuICAvKlxuICAgKiB0cnkgdG8gY29sbGFwc2UgYXQgdGFyZ2V0IHJvd1xuICAgKiovXG4gIGNvbGxhcHNlQXRSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5pc1Jvdyhub2RlKSA/IG5vZGUgOiBtLmdldFJvdyhub2RlKVxuICAgIGxldCBzID0gYW0uZ2V0U2VsZWN0aW9uKClcbiAgICB0cnkge1xuICAgICAgcy5jb2xsYXBzZShyb3csIDEpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcy5jb2xsYXBzZShyb3csIDApXG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBzZWFyY2hpbmcgbmVzdGVkIGFuY2VzdG9ycyB0aWxsIGJvcmRlciB0byBmaW5kIHRoZSBzcGVjaWZpZWQgdGFnTmFtZVxuICAgKiBAcGFyYW0ge25vZGV9IGZyb20gd2hpY2ggbm9kZVxuICAgKiBAcGFyYW0ge2Fycn0gaW5jbHVkZXMgdGFnIG5hbWVzIG9mIHRhcmdldCB0YWdcbiAgICogQHBhcmFtIHtub2RlfSBzZWFyY2ggYm9yZGVyXG4gICAqIEByZXR1cm4ge2Fycn1cbiAgICoqL1xuICBmaW5kRXhpc3RUYWdUaWxsQm9yZGVyIChub2RlLCB0YWdOYW1lbGlzdCwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IGJvcmRlcikge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBsZXQgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lXG4gICAgICBpZiAobm9kZU5hbWUgJiYgdGFnTmFtZWxpc3QuaW5jbHVkZXMobm9kZU5hbWUpKSB7XG4gICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG5vZGVOYW1lKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGVOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGEgbmVzdGVkIERPTSBkYXRhIHRocm91Z2ggYSB0YWcgbmFtZSBsaXN0XG4gICAqKi9cbiAgY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0IChsaXN0KSB7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGRvbTogbnVsbCxcbiAgICAgIGRlZXBlc3RJZDogbnVsbCxcbiAgICAgIGRlZXBlc3Q6IG51bGxcbiAgICB9XG4gICAgbGlzdC5mb3JFYWNoKCh0YWcsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgICByZXN1bHRbaW5kZXhdID0gZWxlXG4gICAgICBsZXQgcGFyZW50ID0gcmVzdWx0W2luZGV4IC0gMV1cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZSlcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gbGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJlc3VsdC5kZWVwZXN0ID0gZWxlXG4gICAgICAgIHJlc3VsdC5kZWVwZXN0SWQgPSBhbS5jcmVhdGVSYW5kb21JZCgnZGVlcGVzdCcpXG4gICAgICAgIHJlc3VsdC5kb20gPSByZXN1bHRbJzAnXVxuICAgICAgICBlbGUuaWQgPSByZXN1bHQuZGVlcGVzdElkXG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9oYW5kbGUtbWV0aG9kcy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm15LXZ1ZS1lZGl0b3JcXFwiIDpjbGFzcz1cXFwieydmdWxsLXNjcmVlbic6ZnVsbFNjcmVlbn1cXFwiIDpzdHlsZT1cXFwieyd6LWluZGV4Jzp6SW5kZXh9XFxcIj5cXG4gICAgPG5hdiBjbGFzcz1cXFwidG9vbGJhclxcXCIgOnN0eWxlPVxcXCJ7J3otaW5kZXgnOnpJbmRleCsxfVxcXCIgcmVmPVxcXCJ0b29sYmFyXFxcIiBkYXRhLWVkaXRvcj1cXFwidG9vbGJhclxcXCI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInRhYnNcXFwiPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwibW9kdWxlIGluIG1vZHVsZXNcXFwiPlxcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIiFtb2R1bGUuaGFzVGFiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpIDp0aXRsZT1cXFwibG9jYWxlW21vZHVsZS5pMThuXVxcXCIgY2xhc3M9XFxcInRhYiBidG5cXFwiIDpjbGFzcz1cXFwie2hpZ2hMaWdodDogbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQsIGZvcmJpZGRlbjogbW9kdWxlLmZvcmJpZGRlbn1cXFwiIEBjbGljaz1cXFwiYWN0aXZlTW9kdWxlKG1vZHVsZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIiA6Y2xhc3M9XFxcIm1vZHVsZS5pY29uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgPGtlZXAtYWxpdmU+XFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0YWJcXFwiIDppcz1cXFwibW9kdWxlLnRhYk5hbWVcXFwiIDphY3RpdmVJdGVtPVxcXCJtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdFxcXCIgOmZvcmJpZGRlbj1cXFwibW9kdWxlLmZvcmJpZGRlblxcXCIgOmNsYXNzPVxcXCJ7aGlnaExpZ2h0OiBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCwgZm9yYmlkZGVuOiBtb2R1bGUuZm9yYmlkZGVufVxcXCIgQGNsaWNrPVxcXCJhY3RpdmVNb2R1bGUobW9kdWxlKVxcXCI+PC9saT5cXG4gICAgICAgICAgICAgICAgPC9rZWVwLWFsaXZlPlxcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9uYXY+XFxuXFxuICAgIDxwIGNsYXNzPSdjb250ZW50JyA6aXM9XFxcImNvbnN0YW50Q29uZmlnLlJPV19UQUdcXFwiIDpzcGVsbGNoZWNrPVxcXCJzcGVsbGNoZWNrXFxcIiByZWY9XFxcImNvbnRlbnRcXFwiIGlkPVxcXCJlZGl0b3ItY29udGVudFxcXCIgOnN0eWxlPVxcXCJjb250ZW50U3R5bGVcXFwiIGRhdGEtZWRpdG9yPVxcXCJjb250ZW50XFxcIlxcbiAgICAgICAgIGNvbnRlbnRlZGl0YWJsZT1cXFwicGxhaW50ZXh0LW9ubHlcXFwiIHYtZHJhZy1waWM9XFxcImhhbmRsZURyYWdQaWNcXFwiPlxcbiAgICA8L3A+XFxuPC9kaXY+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWRpdG9yL2VkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogZGlyZWN0aXZlIGRyYWcgYW5kIGRyb3AgcGljXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmluZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgbGV0IGVkaXRvciA9IHZub2RlLmNvbnRleHRcbiAgICBsZXQgb25EcmFnT3ZlciA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGVjdGlvbi5jb2xsYXBzZShlLnRhcmdldCwgMSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlKGUudGFyZ2V0LCAwKVxuICAgICAgfVxuICAgICAgZWRpdG9yLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgZWRpdG9yLm1vZHVsZUluc3BlY3QoKVxuICAgIH1cbiAgICBsZXQgb25EcmFnTGVhdmUgPSBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGxldCBvbkRyb3AgPSBlID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyICYmIGUuZGF0YVRyYW5zZmVyLmZpbGVzKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgbGV0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGZpbGVzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgIGxldCBjdXJGaWxlID0gZmlsZXNbaV1cbiAgICAgICAgICBpZiAoY3VyRmlsZS5zaXplICYmIGN1ckZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgICAgICAgICAgYmluZGluZy52YWx1ZShjdXJGaWxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIG9uRHJhZ0VudGVyLCBmYWxzZSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIG9uRHJhZ0xlYXZlLCBmYWxzZSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcblxuICAgIGVsLl9fZHJhZ092ZXJIYW5kbGVyID0gb25EcmFnT3ZlclxuICAgIGVsLl9fZHJhZ0xlYXZlSGFuZGxlciA9IG9uRHJhZ0xlYXZlXG4gICAgZWwuX19kcm9wSGFuZGxlciA9IG9uRHJvcFxuICB9LFxuICB1bmJpbmQgKGVsLCBiaW5kaW5nKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBlbC5fX2RyYWdPdmVySGFuZGxlcilcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBlbC5fX2RyYWdMZWF2ZUhhbmRsZXIpXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGVsLl9fZHJvcEhhbmRsZXIpXG4gICAgZGVsZXRlIGVsLl9fZHJhZ092ZXJIYW5kbGVyXG4gICAgZGVsZXRlIGVsLl9fZHJhZ0xlYXZlSGFuZGxlclxuICAgIGRlbGV0ZSBlbC5fX2Ryb3BIYW5kbGVyXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IvZHJhZy1waWMuanMiLCIvKlxuICogbG9hZCBydWxlIGtleXdvcmRzIG9mIHN0eWxlIGluc3BlY3RcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGN1ck1vZHVsZSwgbW9kdWxlcykge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgbGV0IGN1ckV4Y2x1ZGUgPSBjdXJNb2R1bGUuZXhjbHVkZVxuICBpZiAoQXJyYXkuaXNBcnJheShjdXJFeGNsdWRlKSkgcmV0dXJuIGN1ckV4Y2x1ZGVcbiAgaWYgKHR5cGVvZiBjdXJFeGNsdWRlID09PSAnc3RyaW5nJykge1xuICAgIGxldCBtb2R1bGVOYW1lTGlzdCA9IFtdXG4gICAgbW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgaWYgKG0ubmFtZSkge1xuICAgICAgICBtb2R1bGVOYW1lTGlzdC5wdXNoKG0ubmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIG1vZHVsZU5hbWVMaXN0ID0gQXJyYXkuZnJvbShuZXcgU2V0KG1vZHVsZU5hbWVMaXN0KSlcbiAgICBzd2l0Y2ggKGN1ckV4Y2x1ZGUpIHtcbiAgICAgIC8vIGV4Y2x1ZGUgYWxsIG1vZHVsZXNcbiAgICAgIGNhc2UgJ0FMTCc6XG4gICAgICAgIHJlc3VsdCA9IG1vZHVsZU5hbWVMaXN0XG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBleGNsdWRlIGFsbCBtb2R1bGVzIGJ1dCBjdXJyZW50IG1vZHVsZVxuICAgICAgY2FzZSAnQUxMX0JVVF9NWVNFTEYnOlxuICAgICAgICByZXN1bHQgPSBtb2R1bGVOYW1lTGlzdFxuICAgICAgICByZXN1bHQuc3BsaWNlKHJlc3VsdC5pbmRleE9mKGN1ck1vZHVsZS5uYW1lKSwgMSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS1pbnNwZWN0L2xvYWQtbW9kdWxlLWluc3BlY3QtZXhjbHVkZS1ydWxlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGlnbjogJ+Wvuem9kOaWueW8jycsXG4gICAgaW1hZ2U6ICflm77niYcnLFxuICAgIGxpc3Q6ICfliJfooagnLFxuICAgIGxpbms6ICfpk77mjqUnLFxuICAgIHVubGluazogJ+WOu+mZpOmTvuaOpScsXG4gICAgdGFibGU6ICfooajmoLwnLFxuICAgIGZvbnQ6ICfmloflrZcnLFxuICAgICdmdWxsIHNjcmVlbic6ICflhajlsY8nLFxuICAgIHRleHQ6ICfmjpLniYgnLFxuICAgIGVyYXNlcjogJ+agvOW8j+a4hemZpCcsXG4gICAgaW5mbzogJ+WFs+S6jicsXG4gICAgY29sb3I6ICfpopzoibInLFxuICAgICdwbGVhc2UgZW50ZXIgYSB1cmwnOiAn6K+36L6T5YWl5Zyw5Z2AJyxcbiAgICAnY3JlYXRlIGxpbmsnOiAn5Yib5bu66ZO+5o6lJyxcbiAgICBib2xkOiAn5Yqg57KXJyxcbiAgICBpdGFsaWM6ICflgL7mlpwnLFxuICAgIHVuZGVybGluZTogJ+S4i+WIkue6vycsXG4gICAgJ3N0cmlrZSB0aHJvdWdoJzogJ+WIoOmZpOe6vycsXG4gICAgc3Vic2NyaXB0OiAn5LiK5qCHJyxcbiAgICBzdXBlcnNjcmlwdDogJ+S4i+aghycsXG4gICAgaGVhZGluZzogJ+agh+mimCcsXG4gICAgJ2ZvbnQgbmFtZSc6ICflrZfkvZMnLFxuICAgICdmb250IHNpemUnOiAn5paH5a2X5aSn5bCPJyxcbiAgICAnbGVmdCBqdXN0aWZ5JzogJ+W3puWvuem9kCcsXG4gICAgJ2NlbnRlciBqdXN0aWZ5JzogJ+WxheS4rScsXG4gICAgJ3JpZ2h0IGp1c3RpZnknOiAn5Y+z5a+56b2QJyxcbiAgICAnb3JkZXJlZCBsaXN0JzogJ+acieW6j+WIl+ihqCcsXG4gICAgJ3Vub3JkZXJlZCBsaXN0JzogJ+aXoOW6j+WIl+ihqCcsXG4gICAgJ2ZvcmUgY29sb3InOiAn5YmN5pmv6ImyJyxcbiAgICAnYmFja2dyb3VuZCBjb2xvcic6ICfog4zmma/oibInLFxuICAgICdyb3cgY291bnQnOiAn6KGM5pWwJyxcbiAgICAnY29sdW1uIGNvdW50JzogJ+WIl+aVsCcsXG4gICAgc2F2ZTogJ+ehruWumicsXG4gICAgdXBsb2FkOiAn5LiK5LygJyxcbiAgICBwcm9ncmVzczogJ+i/m+W6picsXG4gICAgdW5rbm93bjogJ+acquefpScsXG4gICAgJ3BsZWFzZSB3YWl0JzogJ+ivt+eojeetiScsXG4gICAgZXJyb3I6ICfplJnor68nLFxuICAgIGFib3J0OiAn5Lit5patJyxcbiAgICByZXNldDogJ+mHjee9ricsXG4gICAgaHI6ICfliIbpmpTnur8nLFxuICAgIHVuZG86ICfmkqTmtognLFxuICAgICdsaW5lIGhlaWdodCc6ICfooYzpq5gnLFxuICAgICdleGNlZWQgc2l6ZSBsaW1pdCc6ICfotoXlh7rlpKflsI/pmZDliLYnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2kxOG4vemgtY24uanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYWxpZ246ICdhbGlnbicsXG4gICAgaW1hZ2U6ICdpbWFnZScsXG4gICAgbGlzdDogJ2xpc3QnLFxuICAgIGxpbms6ICdsaW5rJyxcbiAgICB1bmxpbms6ICd1bmxpbmsnLFxuICAgIHRhYmxlOiAndGFibGUnLFxuICAgIGZvbnQ6ICdmb250JyxcbiAgICAnZnVsbCBzY3JlZW4nOiAnZnVsbCBzY3JlZW4nLFxuICAgIHRleHQ6ICd0ZXh0JyxcbiAgICBlcmFzZXI6ICdyZW1vdmUgZm9ybWF0JyxcbiAgICBpbmZvOiAnaW5mbycsXG4gICAgY29sb3I6ICdjb2xvcicsXG4gICAgJ3BsZWFzZSBlbnRlciBhIHVybCc6ICdwbGVhc2UgZW50ZXIgYSB1cmwnLFxuICAgICdjcmVhdGUgbGluayc6ICdjcmVhdGUgbGluaycsXG4gICAgYm9sZDogJ2JvbGQnLFxuICAgIGl0YWxpYzogJ2l0YWxpYycsXG4gICAgdW5kZXJsaW5lOiAndW5kZXJsaW5lJyxcbiAgICAnc3RyaWtlIHRocm91Z2gnOiAnc3RyaWtlIHRocm91Z2gnLFxuICAgIHN1YnNjcmlwdDogJ3N1YnNjcmlwdCcsXG4gICAgc3VwZXJzY3JpcHQ6ICdzdXBlcnNjcmlwdCcsXG4gICAgaGVhZGluZzogJ2hlYWRpbmcnLFxuICAgICdmb250IG5hbWUnOiAnZm9udCBuYW1lJyxcbiAgICAnZm9udCBzaXplJzogJ2ZvbnQgc2l6ZScsXG4gICAgJ2xlZnQganVzdGlmeSc6ICdsZWZ0IGp1c3RpZnknLFxuICAgICdjZW50ZXIganVzdGlmeSc6ICdjZW50ZXIganVzdGlmeScsXG4gICAgJ3JpZ2h0IGp1c3RpZnknOiAncmlnaHQganVzdGlmeScsXG4gICAgJ29yZGVyZWQgbGlzdCc6ICdvcmRlcmVkIGxpc3QnLFxuICAgICd1bm9yZGVyZWQgbGlzdCc6ICd1bm9yZGVyZWQgbGlzdCcsXG4gICAgJ2ZvcmUgY29sb3InOiAnZm9yZSBjb2xvcicsXG4gICAgJ2JhY2tncm91bmQgY29sb3InOiAnYmFja2dyb3VuZCBjb2xvcicsXG4gICAgJ3JvdyBjb3VudCc6ICdyb3cgY291bnQnLFxuICAgICdjb2x1bW4gY291bnQnOiAnY29sdW1uIGNvdW50JyxcbiAgICBzYXZlOiAnc2F2ZScsXG4gICAgdXBsb2FkOiAndXBsb2FkJyxcbiAgICBwcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgICB1bmtub3duOiAndW5rbm93bicsXG4gICAgJ3BsZWFzZSB3YWl0JzogJ3BsZWFzZSB3YWl0JyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICBhYm9ydDogJ2Fib3J0JyxcbiAgICByZXNldDogJ3Jlc2V0JyxcbiAgICBocjogJ2hvcml6b250YWwgcnVsZScsXG4gICAgdW5kbzogJ3VuZG8nLFxuICAgICdsaW5lIGhlaWdodCc6ICdsaW5lIGhlaWdodCcsXG4gICAgJ2V4Y2VlZCBzaXplIGxpbWl0JzogJ2V4Y2VlZCBzaXplIGxpbWl0J1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pMThuL2VuLXVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==