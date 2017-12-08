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
/******/ 	var hotCurrentHash = "cd7b400bf269585d6368"; // eslint-disable-line no-unused-vars
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
/******/ 	return hotCreateRequire(11)(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _insertImage = __webpack_require__(41);

var _insertImage2 = _interopRequireDefault(_insertImage);

var _fontSize = __webpack_require__(42);

var _fontSize2 = _interopRequireDefault(_fontSize);

var _paste = __webpack_require__(43);

var _paste2 = _interopRequireDefault(_paste);

var _enter = __webpack_require__(44);

var _enter2 = _interopRequireDefault(_enter);

var _underline = __webpack_require__(45);

var _underline2 = _interopRequireDefault(_underline);

var _strikeThrough = __webpack_require__(46);

var _strikeThrough2 = _interopRequireDefault(_strikeThrough);

var _italic = __webpack_require__(47);

var _italic2 = _interopRequireDefault(_italic);

var _bold = __webpack_require__(48);

var _bold2 = _interopRequireDefault(_bold);

var _quote = __webpack_require__(49);

var _quote2 = _interopRequireDefault(_quote);

var _todo = __webpack_require__(50);

var _todo2 = _interopRequireDefault(_todo);

var _keydown = __webpack_require__(51);

var _keydown2 = _interopRequireDefault(_keydown);

var _delete = __webpack_require__(52);

var _delete2 = _interopRequireDefault(_delete);

var _justifyRight = __webpack_require__(53);

var _justifyRight2 = _interopRequireDefault(_justifyRight);

var _justifyLeft = __webpack_require__(54);

var _justifyLeft2 = _interopRequireDefault(_justifyLeft);

var _justifyCenter = __webpack_require__(55);

var _justifyCenter2 = _interopRequireDefault(_justifyCenter);

var _util = __webpack_require__(3);

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

    nodeList.forEach(function (node) {
      doOutdent(node.nodeName, node);
    });

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
          if (curPercent === 0) return;
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

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".font-tab {\n  position: relative;\n  font-size: 10px;\n  height: 18px;\n  line-height: 18px;\n  width: 54px;\n  text-align: center;\n  padding: 4px 4px 4px 6px;\n  text-align: left;\n}\n.font-tab:hover {\n  background: #fff;\n  padding: 3px 3px 3px 5px;\n  border: 1px #bcbcbc solid;\n}\n.font-tab.forbidden {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n.font-tab .icon {\n  float: right;\n  padding: 3px;\n}\n.font-tab .dropdown {\n  z-index: 1;\n  position: absolute;\n  background: #fff;\n  left: -1px;\n  top: 25px;\n  border: 1px #bcbcbc solid;\n  border-top: none;\n  overflow: hidden;\n}\n.font-tab .dropdown li {\n  box-sizing: border-box;\n  padding-left: 4px;\n  font-size: 12px;\n  width: 62px;\n  height: 30px;\n  line-height: 30px;\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n}\n.font-tab .dropdown li:hover {\n  background: #f0f0f0;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\nbody {\n  line-height: 1;\n}\n:focus {\n  outline: 1;\n}\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\nnav ul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\na {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\ndel {\n  text-decoration: line-through;\n}\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\n.my-vue-editor {\n  display: block;\n  border: 1px solid #d1d1d1;\n  padding: 0;\n}\n.my-vue-editor img {\n  max-width: 98%;\n}\n.my-vue-editor .toolbar {\n  height: auto;\n  border-bottom: 1px solid #d1d1d1;\n  background: #f8f8f8;\n  padding: 6px 8px;\n  white-space: normal;\n}\n.my-vue-editor .toolbar .tabs:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.my-vue-editor .toolbar .tabs .tab {\n  margin: 0 2px;\n  float: left;\n}\n.my-vue-editor .toolbar .tabs .tab .icon {\n  vertical-align: sub;\n}\n.my-vue-editor .toolbar .tabs .btn {\n  display: inline-block;\n  list-style: none;\n  height: 18px;\n  line-height: 18px;\n  padding: 4px 6px;\n  border: 0;\n  position: relative;\n  font: normal normal normal 12px Arial, Helvetica, Tahoma, Verdana, Sans-Serif;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.my-vue-editor .toolbar .tabs .btn:hover {\n  padding: 3px 5px;\n  background: #f0f0f0;\n  border: 1px #bcbcbc solid;\n}\n.my-vue-editor .toolbar .tabs .btn.highLight {\n  padding: 3px 5px;\n  background: #e5e5e5;\n  border: 1px #bcbcbc solid;\n}\n.my-vue-editor .toolbar .tabs .btn.forbidden {\n  cursor: not-allowed;\n  opacity: 0.3;\n}\n.my-vue-editor .content {\n  box-sizing: border-box;\n  width: 100%;\n  clear: both;\n  outline: none;\n  padding: 20px;\n  font-size: 16px;\n  line-height: 24px;\n  word-wrap: break-word;\n}\n.my-vue-editor .content font {\n  color: #000;\n}\n.my-vue-editor .content blockquote {\n  min-width: 38px;\n}\n.my-vue-editor .content [data-editor-quote] {\n  margin: 14px 0 14px 35px;\n}\n.my-vue-editor .content [data-editor-quote] div:first-child {\n  margin-top: -21px;\n}\n.my-vue-editor .content [data-editor-quote] div {\n  margin-left: 2px;\n  outline: none;\n  color: #737373;\n  font-size: 14px;\n}\n.my-vue-editor .content [data-editor-quote]::before {\n  position: relative;\n  top: 2px;\n  left: 0;\n  margin: 0px 4px 0 -24px;\n  color: #b7b7b7;\n  font-size: 20px;\n  content: \"\\F10E\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  transform: rotateY(180deg);\n}\n.my-vue-editor .content ul ul {\n  margin-left: 10%;\n}\n.my-vue-editor .content li {\n  margin-left: 5.5%;\n}\n.my-vue-editor .content [data-editor-todo] {\n  display: inline-block;\n  width: 90%;\n}\n.my-vue-editor .content [data-editor-todo] label {\n  cursor: pointer;\n  position: relative;\n  top: 3.5px;\n  left: 2.5px;\n  font-size: 16px;\n  color: #cdc9c5;\n}\n.my-vue-editor .content [data-editor-todo] input[type=text] {\n  border: none;\n  outline: none;\n  width: 90%;\n  font-size: 14px;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
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
/* 6 */
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

var	fixUrls = __webpack_require__(21);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(6),n(7),e.exports=n(8)},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(a,this),r(s,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void f(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function a(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(a,this),r(s,this))}this._state=!0,this._value=e,u.call(this)}catch(n){s.call(this,n)}}function s(e){this._state=!1,this._value=e,u.call(this)}function u(){for(var e=0,t=this._deferreds.length;t>e;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}var f="function"==typeof t&&t||function(e){setTimeout(e,1)},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){o.call(n,new c(e,t,r,i))})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._setImmediateFn=function(e){f=e},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t}var o=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,u={},c=0;t.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=c++,r=arguments.length<2?!1:s.call(arguments,1);return u[n]=!0,o(function(){u[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){c=!1,a.length?u=a.concat(u):l=-1,u.length&&r()}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;)a&&a[l].run();l=-1,t=u.length}a=null,c=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function o(){}var a,s=e.exports={},u=[],c=!1,l=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new i(e,t)),1!==u.length||c||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t){function n(){var e=~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome");return e&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}var r=function(){try{return new Blob,!0}catch(e){return!1}}()?window.Blob:function(e,t){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return e.forEach(function(e){n.append(e)}),n.getBlob(t?t.type:void 0)},i=function(){function e(){var e=this,n=[],i=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),o=XMLHttpRequest.prototype.send;this.getParts=function(){return n.toString()},this.append=function(e,t,r){n.push("--"+i+'\r\nContent-Disposition: form-data; name="'+e+'"'),t instanceof Blob?(n.push('; filename="'+(r||"blob")+'"\r\nContent-Type: '+t.type+"\r\n\r\n"),n.push(t)):n.push("\r\n\r\n"+t),n.push("\r\n")},t++,XMLHttpRequest.prototype.send=function(a){var s,u,c=this;a===e?(n.push("--"+i+"--\r\n"),u=new r(n),s=new FileReader,s.onload=function(){o.call(c,s.result)},s.onerror=function(e){throw e},s.readAsArrayBuffer(u),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),t--,0==t&&(XMLHttpRequest.prototype.send=o)):o.call(this,a)}}var t=0;return e.prototype=Object.create(FormData.prototype),e}();e.exports={Blob:r,FormData:n()?i:FormData}},function(e,t,n){var r,i;(function(){function n(e){return!!e.exifdata}function o(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;r>a;a++)o[a]=n.charCodeAt(a);return i}function a(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function s(e,t){function n(n){var r=u(n),i=c(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=o(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},a(e.src,function(e){i.readAsArrayBuffer(e)})}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?n(s.response):t(new Error("Could not load image")),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){p&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function u(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;i>r;){if(255!=t.getUint8(r))return p&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),p&&console.log(n),225==n)return p&&console.log("Found 0xFFE1 marker"),g(t,r+4,t.getUint16(r+2)-2);r+=2+t.getUint16(r+2)}}function c(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>n;){if(i(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var a=n+8+o,s=t.getUint16(n+6+o);return l(e,a,s)}n++}}function l(e,t,n){for(var r,i,o,a,s,u=new DataView(e),c={},l=t;t+n>l;)28===u.getUint8(l)&&2===u.getUint8(l+1)&&(a=u.getUint8(l+2),a in S&&(o=u.getInt16(l+3),s=o+5,i=S[a],r=h(u,l+5,o),c.hasOwnProperty(i)?c[i]instanceof Array?c[i].push(r):c[i]=[c[i],r]:c[i]=r)),l++;return c}function f(e,t,n,r,i){var o,a,s,u=e.getUint16(n,!i),c={};for(s=0;u>s;s++)o=n+12*s+2,a=r[e.getUint16(o,!i)],!a&&p&&console.log("Unknown tag: "+e.getUint16(o,!i)),c[a]=d(e,o,t,n,i);return c}function d(e,t,n,r,i){var o,a,s,u,c,l,f=e.getUint16(t+2,!i),d=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(f){case 1:case 7:if(1==d)return e.getUint8(t+8,!i);for(o=d>4?g:t+8,a=[],u=0;d>u;u++)a[u]=e.getUint8(o+u);return a;case 2:return o=d>4?g:t+8,h(e,o,d-1);case 3:if(1==d)return e.getUint16(t+8,!i);for(o=d>2?g:t+8,a=[],u=0;d>u;u++)a[u]=e.getUint16(o+2*u,!i);return a;case 4:if(1==d)return e.getUint32(t+8,!i);for(a=[],u=0;d>u;u++)a[u]=e.getUint32(g+4*u,!i);return a;case 5:if(1==d)return c=e.getUint32(g,!i),l=e.getUint32(g+4,!i),s=new Number(c/l),s.numerator=c,s.denominator=l,s;for(a=[],u=0;d>u;u++)c=e.getUint32(g+8*u,!i),l=e.getUint32(g+4+8*u,!i),a[u]=new Number(c/l),a[u].numerator=c,a[u].denominator=l;return a;case 9:if(1==d)return e.getInt32(t+8,!i);for(a=[],u=0;d>u;u++)a[u]=e.getInt32(g+4*u,!i);return a;case 10:if(1==d)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(a=[],u=0;d>u;u++)a[u]=e.getInt32(g+8*u,!i)/e.getInt32(g+4+8*u,!i);return a}}function h(e,t,n){var r,i="";for(r=t;t+n>r;r++)i+=String.fromCharCode(e.getUint8(r));return i}function g(e,t){if("Exif"!=h(e,t,4))return p&&console.log("Not valid EXIF data! "+h(e,t,4)),!1;var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return p&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return p&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var u=e.getUint32(s+4,!n);if(8>u)return p&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if(r=f(e,s,s+u,v,n),r.ExifIFDPointer){o=f(e,s,s+r.ExifIFDPointer,w,n);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=b[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=b.Components[o[i][0]]+b.Components[o[i][1]]+b.Components[o[i][2]]+b.Components[o[i][3]]}r[i]=o[i]}}if(r.GPSInfoIFDPointer){a=f(e,s,s+r.GPSInfoIFDPointer,y,n);for(i in a){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3]}r[i]=a[i]}}return r}var p=!1,m=function(e){return e instanceof m?e:this instanceof m?void(this.EXIFwrapped=e):new m(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=m),t.EXIF=m;var w=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},S={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(e,t){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(n(e)?t&&t.call(e):s(e,t),!0)},m.getTag=function(e,t){return n(e)?e.exifdata[t]:void 0},m.getAllTags=function(e){if(!n(e))return{};var t,r=e.exifdata,i={};for(t in r)r.hasOwnProperty(t)&&(i[t]=r[t]);return i},m.pretty=function(e){if(!n(e))return"";var t,r=e.exifdata,i="";for(t in r)r.hasOwnProperty(t)&&(i+="object"==typeof r[t]?r[t]instanceof Number?t+" : "+r[t]+" ["+r[t].numerator+"/"+r[t].denominator+"]\r\n":t+" : ["+r[t].length+" values]\r\n":t+" : "+r[t]+"\r\n");return i},m.readFromBinaryFile=function(e){return u(e)},r=[],i=function(){return m}.apply(t,r),!(void 0!==i&&(e.exports=i))}).call(this)},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return!1}function o(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var o=i.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}var l=u/n;return 0===l?1:l}function a(e,t,n){var r=document.createElement("canvas");return s(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function s(e,t,r,i){var a=e.naturalWidth,s=e.naturalHeight,c=r.width,l=r.height,f=t.getContext("2d");f.save(),u(t,f,c,l,r.orientation);var d=n(e);d&&(a/=2,s/=2);var h=1024,g=document.createElement("canvas");g.width=g.height=h;for(var p=g.getContext("2d"),m=i?o(e,a,s):1,w=Math.ceil(h*c/a),v=Math.ceil(h*l/s/m),y=0,b=0;s>y;){for(var S=0,I=0;a>S;)p.clearRect(0,0,h,h),p.drawImage(e,-S,-y),f.drawImage(g,0,0,h,h,I,b,w,v),S+=h,I+=w;y+=h,b+=v}f.restore(),g=p=null}function u(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-n,0)}}function c(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n)throw Error("No createObjectURL function found to create blob url");t.src=n.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}c.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n)})}t=t||{};var i=this.srcImage,o=i.src,u=o.length,c=i.naturalWidth,l=i.naturalHeight,f=t.width,d=t.height,h=t.maxWidth,g=t.maxHeight,p=this.blob&&"image/jpeg"===this.blob.type||0===o.indexOf("data:image/jpeg")||o.indexOf(".jpg")===u-4||o.indexOf(".jpeg")===u-5;f&&!d?d=l*f/c<<0:d&&!f?f=c*d/l<<0:(f=c,d=l),h&&f>h&&(f=h,d=l*f/c<<0),g&&d>g&&(d=g,f=c*d/l<<0);var m={width:f,height:d};for(var w in t)m[w]=t[w];var v=e.tagName.toLowerCase();"img"===v?e.src=a(this.srcImage,m,p):"canvas"===v&&s(this.srcImage,e,m,p),"function"==typeof this.onrender&&this.onrender(e),n&&n()},r=[],i=function(){return c}.apply(t,r),!(void 0!==i&&(e.exports=i))}()},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=F((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),D[N[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var a=F((i[o]*e+50)/100);1>a?a=1:a>255&&(a=255),x[N[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],u=0,c=0;8>c;c++)for(var l=0;8>l;l++)U[u]=1/(D[N[u]]*s[c]*s[l]*8),C[u]=1/(x[N[u]]*s[c]*s[l]*8),u++}function n(e,t){for(var n=0,r=0,i=new Array,o=1;16>=o;o++){for(var a=1;a<=e[o];a++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=o,r++,n++;n*=2}return i}function r(){y=n(W,H),b=n(V,X),S=n(z,q),I=n(Q,Y)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)A[32767+r]=n,T[32767+r]=[],T[32767+r][1]=n,T[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)A[32767+i]=n,T[32767+i]=[],T[32767+i][1]=n,T[32767+i][0]=t-1+i;e<<=1,t<<=1}}function o(){for(var e=0;256>e;e++)k[e]=19595*e,k[e+256>>0]=38470*e,k[e+512>>0]=7471*e+32768,k[e+768>>0]=-11059*e,k[e+1024>>0]=-21709*e,k[e+1280>>0]=32768*e+8421375,k[e+1536>>0]=-27439*e,k[e+1792>>0]=-5329*e}function a(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(G|=1<<O),n--,O--,0>O&&(255==G?(s(255),s(0)):s(G),O=7,G=0)}function s(e){M.push(j[e])}function u(e){s(e>>8&255),s(255&e)}function c(e,t){var n,r,i,o,a,s,u,c,l,f=0;const d=8,h=64;for(l=0;d>l;++l){n=e[f],r=e[f+1],i=e[f+2],o=e[f+3],a=e[f+4],s=e[f+5],u=e[f+6],c=e[f+7];var g=n+c,p=n-c,m=r+u,w=r-u,v=i+s,y=i-s,b=o+a,S=o-a,I=g+b,P=g-b,F=m+v,D=m-v;e[f]=I+F,e[f+4]=I-F;var x=.707106781*(D+P);e[f+2]=P+x,e[f+6]=P-x,I=S+y,F=y+w,D=w+p;var U=.382683433*(I-D),C=.5411961*I+U,T=1.306562965*D+U,A=.707106781*F,R=p+A,M=p-A;e[f+5]=M+C,e[f+3]=M-C,e[f+1]=R+T,e[f+7]=R-T,f+=8}for(f=0,l=0;d>l;++l){n=e[f],r=e[f+8],i=e[f+16],o=e[f+24],a=e[f+32],s=e[f+40],u=e[f+48],c=e[f+56];var G=n+c,O=n-c,_=r+u,B=r-u,E=i+s,j=i-s,k=o+a,N=o-a,W=G+k,H=G-k,z=_+E,q=_-E;e[f]=W+z,e[f+32]=W-z;var V=.707106781*(q+H);e[f+16]=H+V,e[f+48]=H-V,W=N+j,z=j+B,q=B+O;var X=.382683433*(W-q),Q=.5411961*W+X,Y=1.306562965*q+X,K=.707106781*z,J=O+K,Z=O-K;e[f+40]=Z+Q,e[f+24]=Z-Q,e[f+8]=J+Y,e[f+56]=J-Y,f++}var $;for(l=0;h>l;++l)$=e[l]*t[l],L[l]=$>0?$+.5|0:$-.5|0;return L}function l(){u(65504),u(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),u(1),u(1),s(0),s(0)}function f(e,t){u(65472),u(17),s(8),u(t),u(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function d(){u(65499),u(132),s(0);for(var e=0;64>e;e++)s(D[e]);s(1);for(var t=0;64>t;t++)s(x[t])}function h(){u(65476),u(418),s(0);for(var e=0;16>e;e++)s(W[e+1]);for(var t=0;11>=t;t++)s(H[t]);s(16);for(var n=0;16>n;n++)s(z[n+1]);for(var r=0;161>=r;r++)s(q[r]);s(1);for(var i=0;16>i;i++)s(V[i+1]);for(var o=0;11>=o;o++)s(X[o]);s(17);for(var a=0;16>a;a++)s(Q[a+1]);for(var c=0;161>=c;c++)s(Y[c])}function g(){u(65498),u(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function p(e,t,n,r,i){var o,s=i[0],u=i[240];const l=16,f=63,d=64;for(var h=c(e,t),g=0;d>g;++g)R[N[g]]=h[g];var p=R[0]-n;n=R[0],0==p?a(r[0]):(o=32767+p,a(r[A[o]]),a(T[o]));for(var m=63;m>0&&0==R[m];m--);if(0==m)return a(s),n;for(var w,v=1;m>=v;){for(var y=v;0==R[v]&&m>=v;++v);var b=v-y;if(b>=l){w=b>>4;for(var S=1;w>=S;++S)a(u);b=15&b}o=32767+R[v],a(i[(b<<4)+A[o]]),a(T[o]),v++}return m!=f&&a(s),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++)j[t]=e(t)}function w(e){if(0>=e&&(e=1),e>100&&(e=100),P!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),P=e}}function v(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),o(),w(e);(new Date).getTime()-t}var y,b,S,I,P,F=(Math.round,Math.floor),D=new Array(64),x=new Array(64),U=new Array(64),C=new Array(64),T=new Array(65535),A=new Array(65535),L=new Array(64),R=new Array(64),M=[],G=0,O=7,_=new Array(64),B=new Array(64),E=new Array(64),j=new Array(256),k=new Array(2048),N=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],q=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],V=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&w(t),M=new Array,G=0,O=7,u(65496),l(),d(),f(e.width,e.height),h(),g();var i=0,o=0,s=0;G=0,O=7,this.encode.displayName="_encode_";for(var c,m,v,P,F,D,x,T,A,L=e.data,R=e.width,j=e.height,N=4*R,W=0;j>W;){for(c=0;N>c;){for(F=N*W+c,D=F,x=-1,T=0,A=0;64>A;A++)T=A>>3,x=4*(7&A),D=F+T*N+x,W+T>=j&&(D-=N*(W+1+T-j)),c+x>=N&&(D-=c+x-N+4),m=L[D++],v=L[D++],P=L[D++],_[A]=(k[m]+k[v+256>>0]+k[P+512>>0]>>16)-128,B[A]=(k[m+768>>0]+k[v+1024>>0]+k[P+1280>>0]>>16)-128,E[A]=(k[m+1280>>0]+k[v+1536>>0]+k[P+1792>>0]>>16)-128;i=p(_,U,i,y,S),o=p(B,C,o,b,I),s=p(E,C,s,b,I),c+=32}W+=8}if(O>=0){var H=[];H[1]=O+1,H[0]=(1<<O+1)-1,a(H)}if(u(65497),n){for(var z=M.length,q=new Uint8Array(z),V=0;z>V;V++)q[V]=M[V].charCodeAt();M=[];(new Date).getTime()-r;return q}var X="data:image/jpeg;base64,"+btoa(M.join(""));M=[];(new Date).getTime()-r;return X},v()}e.exports=n},function(e,t,n){function r(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");t=t||{},n.defaults={width:null,height:null,fieldName:"file",quality:.7},n.file=e;for(var r in t)t.hasOwnProperty(r)&&(n.defaults[r]=t[r]);return this.init()}function i(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return-1!==t.src.indexOf(e)})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}function o(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new s.Blob([r.buffer],{type:n})}n.p=i("lrz")+"/",window.URL=window.URL||window.webkitURL;var a=n(1),s=n(4),u=n(5),c=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return{oldIOS:t?+t.pop()<8:!1,oldAndroid:n?+n.pop().substr(0,3)<4.5:!1,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n="string"==typeof t,r=/^data:/.test(t),i=new Image,u=document.createElement("canvas"),c=n?t:URL.createObjectURL(t);if(e.img=i,e.blob=c,e.canvas=u,n?e.fileName=r?"base64.jpg":t.split("/").pop():e.fileName=t.name,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new a(function(n,a){i.onerror=function(){var e=new Error("加载图片文件失败");throw a(e),e},i.onload=function(){e._getBase64().then(function(e){if(e.length<10){var t=new Error("生成base64失败");throw a(t),t}return e}).then(function(r){var i=null;"object"==typeof e.file&&r.length>e.file.size?(i=new FormData,t=e.file):(i=new s.FormData,t=o(r)),i.append(e.defaults.fieldName,t,e.fileName.replace(/\..+/g,".jpg")),n({formData:i,fileLen:+t.size,base64:r,base64Len:r.length,origin:e.file,file:t});for(var a in e)e.hasOwnProperty(a)&&(e[a]=null);URL.revokeObjectURL(e.blob)})},!r&&(i.crossOrigin="*"),i.src=c})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.file,r=e.canvas;return new a(function(i){try{u.getData("object"==typeof n?n:t,function(){e.orientation=u.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height),c.oldIOS?e._createBase64ForOldIOS().then(i):e._createBase64().then(i)})}catch(o){throw new Error(o)}})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.defaults,o=e.orientation;return new a(function(e){!function(){var a=[n(6)];(function(n){var a=new n(t);"5678".indexOf(o)>-1?a.render(r,{width:r.height,height:r.width,orientation:o}):a.render(r,{width:r.width,height:r.height,orientation:o}),e(r.toDataURL("image/jpeg",i.quality))}).apply(null,a)}()})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,o=e.ctx,s=e.defaults,u=e.orientation;switch(u){case 3:o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(r,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;default:o.drawImage(r,0,0,t.width,t.height)}return new a(function(e){c.oldAndroid||c.mQQBrowser||!navigator.userAgent?!function(){var t=[n(7)];(function(t){var n=new t,r=o.getImageData(0,0,i.width,i.height);e(n.encode(r,100*s.quality))}).apply(null,t)}():e(i.toDataURL("image/jpeg",s.quality))})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,o=e.orientation,a={width:t.width,height:t.height};if("5678".indexOf(o)>-1&&(a.width=t.height,a.height=t.width),a.width<r||a.height<i)return a;var s=a.width/a.height;for(r&&i?s>=r/i?a.width>r&&(a.width=r,a.height=Math.ceil(r/s)):a.height>i&&(a.height=i,a.width=Math.ceil(i*s)):r?r<a.width&&(a.width=r,a.height=Math.ceil(r/s)):i&&i<a.height&&(a.width=Math.ceil(i*s),a.height=i);a.width>=3264||a.height>=2448;)a.width*=.8,a.height*=.8;return a},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.9.40",
e.exports=window.lrz}])});
//# sourceMappingURL=lrz.all.bundle.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(40);

var _instance2 = _interopRequireDefault(_instance);

var _handleMethods = __webpack_require__(56);

var _handleMethods2 = _interopRequireDefault(_handleMethods);

var _assistMethods = __webpack_require__(9);

var _assistMethods2 = _interopRequireDefault(_assistMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.assign(_instance2.default.prototype, _handleMethods2.default, _assistMethods2.default);
exports.default = _instance2.default;

/***/ }),
/* 9 */
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
    if (data.contenteditable !== false) {
      row.setAttribute('contenteditable', true);
    }
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(3);

var _rangeHandler = __webpack_require__(8);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polyfillIe = __webpack_require__(12);

var _polyfillIe2 = _interopRequireDefault(_polyfillIe);

var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

var _shortcut = __webpack_require__(38);

var _shortcut2 = _interopRequireDefault(_shortcut);

var _constantConfig = __webpack_require__(1);

var _constantConfig2 = _interopRequireDefault(_constantConfig);

var _editor = __webpack_require__(39);

var _editor2 = _interopRequireDefault(_editor);

var _commands = __webpack_require__(0);

var _commands2 = _interopRequireDefault(_commands);

var _loadModuleInspectExcludeRules = __webpack_require__(60);

var _loadModuleInspectExcludeRules2 = _interopRequireDefault(_loadModuleInspectExcludeRules);

var _moduleInspect = __webpack_require__(10);

var _moduleInspect2 = _interopRequireDefault(_moduleInspect);

var _zhCn = __webpack_require__(61);

var _zhCn2 = _interopRequireDefault(_zhCn);

var _enUs = __webpack_require__(62);

var _enUs2 = _interopRequireDefault(_enUs);

var _util = __webpack_require__(3);

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(17);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(24);

var _index8 = _interopRequireDefault(_index7);

var _bold = __webpack_require__(27);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(28);

var _italic2 = _interopRequireDefault(_italic);

var _underline = __webpack_require__(29);

var _underline2 = _interopRequireDefault(_underline);

var _todo = __webpack_require__(30);

var _todo2 = _interopRequireDefault(_todo);

var _quote = __webpack_require__(31);

var _quote2 = _interopRequireDefault(_quote);

var _indent = __webpack_require__(32);

var _indent2 = _interopRequireDefault(_indent);

var _outdent = __webpack_require__(33);

var _outdent2 = _interopRequireDefault(_outdent);

var _ul = __webpack_require__(34);

var _ul2 = _interopRequireDefault(_ul);

var _ol = __webpack_require__(35);

var _ol2 = _interopRequireDefault(_ol);

var _linethrough = __webpack_require__(36);

var _linethrough2 = _interopRequireDefault(_linethrough);

var _icourtTodo = __webpack_require__(37);

var _icourtTodo2 = _interopRequireDefault(_icourtTodo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * build-in moduls
 */
exports.default = [_index4.default, _index2.default, _index8.default, _index6.default, _bold2.default, _italic2.default, _underline2.default, _todo2.default, _quote2.default, _indent2.default, _outdent2.default, _ul2.default, _ol2.default, _linethrough2.default, _icourtTodo2.default];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(15);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'align',
  icon: 'iui-icon iui-icon-align',
  tab: _tab2.default,
  inspect: function inspect(add) {
    add('style', {
      'textAlign': ['left', 'center', 'right', 'justify']
    });
  }
};

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
      this.setAlign(index);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li class='btn' @click=\"changeAlign()\" :title=\"'对齐方式:' + (choosed.key || '居左')\">\n  <span style=\"vertical-align: sub\" class=\"fa\" :class=\"'fa-' + (choosed.icon || 'align-left')\"></span>\n</li>\n");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(18);

var _tab2 = _interopRequireDefault(_tab);

var _config = __webpack_require__(22);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'font',
  icon: 'iui-icon iui-icon-spanner',
  tab: _tab2.default,
  config: _config2.default,
  inspect: function inspect(add) {
    add('style', {
      fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
    });
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(19);

var _tab2 = _interopRequireDefault(_tab);

__webpack_require__(20);

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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li ref=\"tab\" class=\"font-tab tab-with-dropdown\" @mouseenter=\"showListFn\" @mouseleave=\"showList = false\">\n    {{choosed.name}}\n    <i class=\"icon fa fa-caret-down\"></i>\n    <ul class=\"dropdown\" v-if=\"showList\">\n        <li v-if=\"val.name\" v-for=\"(val, key) in fontAttrMap\" @click=\"changeAttr(val)\">{{ val.name }}</li>\n    </ul>\n</li>\n");

/***/ }),
/* 20 */
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
var update = __webpack_require__(6)(content, options);
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lrz = __webpack_require__(7);

var _lrz2 = _interopRequireDefault(_lrz);

var _tab = __webpack_require__(26);

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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<li ref=\"item\" class=\"btn\">\n  <input type=\"file\" ref=\"file\" style=\"display: none;\" @change=\"process\" accept=\"image/*\">\n  <span style=\"vertical-align: sub\" class=\"fa fa-picture-o\" @click=\"pick\"></span>\n</li>\n\n\n\n");

/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rangeHandler = __webpack_require__(8);

var _rangeHandler2 = _interopRequireDefault(_rangeHandler);

__webpack_require__(57);

var _editor = __webpack_require__(58);

var _editor2 = _interopRequireDefault(_editor);

var _dragPic = __webpack_require__(59);

var _dragPic2 = _interopRequireDefault(_dragPic);

var _moduleInspect = __webpack_require__(10);

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
      if (!selection.rangeCount) {
        return;
      }
      var content = this.$refs.content;
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
    content.addEventListener('mouseup', function (e) {
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lrz = __webpack_require__(7);

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
    if (config.imgOccupyNewRow) {
      var node = rh.range.commonAncestorContainer;
      var curRow = rh.forceGetRow(node);
      if (curRow) {
        var newRow = rh.newRow({ br: true });
        rh.insertAfter(newRow, curRow);
        rh.getSelection().collapse(newRow, 1);
      }
    }
    editor.execCommand('insertHTML', '<img src="' + base64 + '" data-editor-img="' + id + '">', true);
    editor.saveCurrentRange();
    editor.execCommand('insertHTML', '&#8203;', true);
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (rh, e) {
  if (rh.range.collapsed) {
    var node = rh.range.commonAncestorContainer;

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
};

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
    _index2.default.outdent(rh, null);
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _assistMethods = __webpack_require__(9);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(4, function() {
			var newContent = __webpack_require__(4);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-vue-editor\" :class=\"{'full-screen':fullScreen}\" :style=\"{'z-index':zIndex}\">\n    <nav class=\"toolbar\" :style=\"{'z-index':zIndex+1}\" ref=\"toolbar\" data-editor=\"toolbar\">\n        <ul class=\"tabs\">\n            <template v-for=\"module in modules\">\n              <template v-if=\"!module.hasTab\">\n                <li :title=\"locale[module.i18n]\" class=\"tab btn\" :class=\"{highLight: module.moduleInspectResult, forbidden: module.forbidden}\" @click=\"activeModule(module)\">\n                  <span class=\"icon\" :class=\"module.icon\"></span>\n                </li>\n              </template>\n              <template v-else>\n                <keep-alive>\n                  <li class=\"tab\" :is=\"module.tabName\" :activeItem=\"module.moduleInspectResult\" :forbidden=\"module.forbidden\" :class=\"{highLight: module.moduleInspectResult, forbidden: module.forbidden}\" @click=\"activeModule(module)\"></li>\n                </keep-alive>\n              </template>\n            </template>\n        </ul>\n    </nav>\n\n    <p class='content' :is=\"constantConfig.ROW_TAG\" :spellcheck=\"spellcheck\" ref=\"content\" id=\"editor-content\" :style=\"contentStyle\" data-editor=\"content\"\n         contenteditable=\"plaintext-only\" v-drag-pic=\"handleDragPic\">\n    </p>\n</div>\n");

/***/ }),
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZDdiNDAwYmYyNjk1ODVkNjM2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2Fzc2lzdC1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWw/NDQzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2l0YWxpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bmRlcmxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pY291cnQtdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlLWhhbmRsZXIvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5TGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeUNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9oYW5kbGUtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bD81YmM2Iiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL3poLWNuLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2VuLXVzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRzIiwiYWRkU3R5bGUiLCJyaCIsImFyZyIsImRvQWRkIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGUiLCJzdHlsZU5hbWUiLCJ0ZXh0Tm9kZXMiLCJnZXRBbGxUZXh0Tm9kZXNJblJhbmdlIiwibGVuZ3RoIiwicmFuZ2UiLCJjb2xsYXBzZWQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInBhcmVudE5vZGUiLCJlZGl0Wm9uZSIsIm5ld1JvdyIsInRhZyIsImlubmVyVGV4dCIsIm5vZGVWYWx1ZSIsInJlcGxhY2VDaGlsZCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kQ29udGFpbmVyIiwidGV4dE5vZGUiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsImlzSW5saW5lRWxlbWVudCIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN1YnN0cmluZyIsImZyb250UGFydCIsImNyZWF0ZVRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJleGVjQ29tbWFuZCIsImVsZW1lbnQiLCJzdXJyb3VuZENvbnRlbnRzIiwicGFyZW50QmxvY2siLCJnZXRQYXJlbnRCbG9ja05vZGUiLCJsaW5lSGVpZ2h0IiwidiIsInMiLCJnZXRTZWxlY3Rpb24iLCJpbm5lckhUTUwiLCJoYXNDaGlsZE5vZGVzIiwiaSIsImN1ck5vZGUiLCJkZWxldGVDb250ZW50cyIsImluc2VydE5vZGUiLCJjb2xsYXBzZSIsIm5vZGVMaXN0Iiwid2VpZ2h0aW5nIiwidGV4dHMiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwiZG9JbmRlbnQiLCJub2RlTmFtZSIsImZpbmRTcGVjaWFsQW5jZXN0b3IiLCJST1dfVEFHIiwiaW5jbHVkZXMiLCJwdXNoIiwidHlwZSIsImN1ckxldmVsIiwiaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWciLCJNQVhfSU5ERU5UX0xFVkVMIiwiUk9XX1RBR19VUFBFUkNBU0UiLCJjdXJQZXJjZW50IiwiSU5ERU5UX1NUWUxFX05BTUUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiT1VUREVOVF9TVFlMRV9OQU1FIiwiSU5ERU5UX1dJRFRIX1BFUkNFTlQiLCJkb091dGRlbnQiLCJ0YXJnZXRJbmRlbnQiLCJzdGFydE5vZGUiLCJhbmNob3JOb2RlIiwicm93IiwiZ2V0Um93IiwiY3JlYXRlV3JhcHBlckZvcklubGluZSIsIm1heWJlSXNVbCIsImZpcnN0RWxlbWVudENoaWxkIiwibmV4dFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsImlzQ29sbGFwc2VkIiwiZWRpdG9yIiwibW9kdWxlc01hcCIsIm1vZHVsZUluc3BlY3RSZXN1bHQiLCJiciIsIm91dGVySFRNTCIsImluc2VydEltYWdlIiwiZm9udFNpemUiLCJkZWxldGUiLCJwYXN0ZSIsImVudGVyIiwia2V5ZG93biIsInVuZGVybGluZSIsInN0cmlrZVRocm91Z2giLCJib2xkIiwiaXRhbGljIiwianVzdGlmeUxlZnQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeVJpZ2h0IiwiYXNzaWduIiwibWl4aW4iLCJzb3VyY2UiLCJleHQiLCJrIiwiZGF0YVNyYyIsImRhdGFEZXNjIiwiaXNPYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRhIiwic2xpY2UiLCJtZXRob2RzIiwiaWQiLCJkYXRhc2V0IiwiZWRpdG9yUm93IiwiY3JlYXRlUmFuZG9tSWQiLCJjb250ZW50ZWRpdGFibGUiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJpbnNlcnRBZnRlciIsIm5ld0VsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50IiwibGFzdENoaWxkIiwicHJlZmZpeCIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsImVkaXRab25lX2NhY2hlIiwicXVlcnlTZWxlY3RvciIsInNldFJhbmdlQXQiLCJjaGVja0FsbCIsImNyZWF0ZVJhbmdlIiwiZW5kIiwic2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJnZXRSYW5nZSIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwiSW5zcGVjdG9yIiwibW9kdWxlTmFtZSIsInBhcmFtIiwiRXJyb3IiLCJ0YWdNYXAiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlcyIsImF0dHJpYnV0ZXMiLCJyZXN1bHQiLCJpbnNwZWN0UmVzdWx0IiwibW9kdWxlU3R5bGUiLCJjdXJWYWx1ZSIsIml0ZW0iLCJhY3RpdmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsIm1vZHVsZUF0dHIiLCJ2YWx1ZSIsIm5vZGVWYWwiLCJydW4iLCJmbiIsInJlbW92ZUR1cGxhdGUiLCJsaXN0Iiwic2FtZVN0eWxlTWFwIiwibSIsImZyb20iLCJTZXQiLCJhbSIsIm1lcmdlZFN0eWxlIiwiRWRpdG9yIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJyZXNlcnZlZE5hbWVzIiwibmFtZSIsImNvbXBvbmVudHMiLCJleHRlbmRNb2R1bGVzIiwibW9kdWxlIiwiY3VyQ29uZmlnIiwibW9kdWxlQ29uZmlnIiwiZm9yYmlkZGVuIiwiaW5zcGVjdCIsImluc3BlY3RvciIsImFkZCIsImJpbmQiLCJleGNsdWRlIiwidGFiIiwicHJvcHMiLCJhY3RpdmVJdGVtIiwiU3RyaW5nIiwiQm9vbGVhbiIsInRhYk5hbWUiLCJpY29ucyIsImljb24iLCJoYXNUYWIiLCJpMThuIiwiY3VzdG9tSTE4biIsImtleSIsImxhbmd1YWdlIiwibG9jYWxlIiwic2hvcnRjdXQiLCJrZXlDb2RlIiwic3BlbGxjaGVjayIsImNvbXBvIiwiY29uc3RhbnRDb25maWciLCJWdWUiLCJjb21wb25lbnQiLCJleHBvcnRzIiwiZGVmaW5lUHJvcGVydHkiLCJzZWFyY2hFbGVtZW50IiwiZnJvbUluZGV4IiwiVHlwZUVycm9yIiwibyIsImxlbiIsIm4iLCJtYXgiLCJhYnMiLCJUZXh0IiwiY29udGFpbnMiLCJ0ZW1wbGF0ZSIsIndhdGNoIiwibWFwIiwiaW5kZXgiLCJhbGlnbk1hcCIsImNob29zZWQiLCJzZXRBbGlnbiIsIiRwYXJlbnQiLCJzYXZlQ3VycmVudFJhbmdlIiwibW9kdWxlSW5zcGVjdCIsImNoYW5nZUFsaWduIiwicHJlX2luZGV4IiwiaXNOYU4iLCJ0YXJnZXRfaW5kZXgiLCJjb25maWciLCJmb250QXR0ck1hcCIsImN1ck1vZHVsZSIsInNob3dMaXN0Iiwic2hvd0xpc3RGbiIsIiRyZWZzIiwiY2xhc3NMaXN0IiwiY2hhbmdlQXR0ciIsInNldEZvbnROYW1lIiwic2V0SGVhZGluZyIsImhlYWRpbmciLCJtb3VudGVkIiwiZGVmYXVsdCIsImhhbmRsZXIiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiY2FuVXBsb2FkU2FtZUltYWdlIiwiaW1nT2NjdXB5TmV3Um93IiwibWF4U2l6ZSIsImNvbXByZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwicGljayIsImZpbGUiLCJjbGljayIsInByb2Nlc3MiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNob3ciLCJpc0luUXVvdGUiLCJhY3RpdmVNb2R1bGVzIiwib3V0ZGVudCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJpbmRlbnQiLCJjb250ZW50IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJ6SW5kZXgiLCJhdXRvSGVpZ2h0IiwiZGlyZWN0aXZlcyIsImRyYWdQaWMiLCJhbGxBY3RpdmVNb2R1bGVzIiwiZnVsbFNjcmVlbiIsInBhcmVudEVsIiwiJGVsIiwibmV4dEVsIiwiYm9keSIsImNvbXB1dGVkIiwiY29udGVudFN0eWxlIiwiaW5uZXJIZWlnaHQiLCJ0b29sYmFyIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSIsImNsZWFyQWN0aXZlTW9kdWxlSXRlbSIsImhhbmRsZURyYWdQaWMiLCJkcmFnIiwiZW5hYmxlRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwiZm9jdXMiLCJibHVyIiwiY29tbWFuZCIsImV4ZWNPbmx5IiwicmVzdG9yZVNlbGVjdGlvbiIsIiRlbWl0Iiwic3RhcnQiLCJURVhUX05PREUiLCJhY3RpdmVNb2R1bGUiLCIkbmV4dFRpY2siLCJ0ZXh0QWZ0ZXREUiIsInRhZ1Jlc3VsdCIsInRhZ1Jlc3VsdFJEIiwic3R5bGVSZXN1bHQiLCJzdHlsZVJlc3VsdFJEIiwiYXR0cmlidXRlUmVzdWx0IiwiYXR0cmlidXRlUmVzdWx0UkQiLCJjb25jYXQiLCJleGNsdWRlTGlzdCIsImV4Y01vZHVsZSIsImV4YyIsImN1ck1vZHVsZUFjdGl2ZUl0ZW0iLCJjcmVhdGVkIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21tb24iLCJzY3JvbGxJbnRvVmlldyIsInRvdWNoSGFuZGxlciIsImJlZm9yZSIsImlzRW1wdHlOb2RlIiwidGV4dFRvUm93IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJ1cGRhdGVkIiwiYmVmb3JlRGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXN0cm95ZWQiLCJvdGhlck5vZGUiLCJSYW5nZUhhbmRsZXIiLCJSYW5nZSIsImJlZm9yZUxpc3QiLCJleGlzdENvbW1hbmQiLCJjdXN0b21Db21tYW5kIiwiYWZ0ZXJMaXN0IiwiYWN0aXZlcyIsInJldHVybkRhdGEiLCJvcmlnaW4iLCJGaWxlIiwiaGFuZGxlRmlsZSIsImZpZWxkTmFtZSIsInRoZW4iLCJyc3QiLCJzaXplIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImltZ0lkIiwiaW5zZXJ0QmFzZTY0IiwiYmFzZTY0IiwiY2F0Y2giLCJlcnIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlYWRBc0RhdGFVUkwiLCJjdXJSb3ciLCJmb3JjZUdldFJvdyIsInJlcGxhY2VTcmNBZnRlclVwbG9hZEZpbmlzaCIsInJlcGxhY2VJbWciLCJkZWxldGVJbWdXaGVuVXBsb2FkRmFpbCIsImRlbGV0ZUltZyIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImJhc2VOb2RlIiwiaW5zZXJ0SFRNTCIsImZvY3VzTm9kZSIsImFuY2hvck9mZnNldCIsImZvY3VzT2Zmc2V0IiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJnZXREYXRhIiwib3JpZ2luYWxFdmVudCIsImNyZWF0ZVRleHRSYW5nZSIsInRleHRSYW5nZSIsInNlbCIsInRlbXBFbCIsIm1vdmVUb0VsZW1lbnRUZXh0Iiwic2VsZWN0IiwidWxPck9sIiwibm9kZUN0biIsImZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIiwiZXhpc3RTdHlsZSIsImZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIiLCJmaW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUiLCJuZXdET00iLCJjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QiLCJkb20iLCJkZWVwZXN0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiZGVlcGVzdElkIiwibmV3VGV4dCIsInEiLCJxdW90ZSIsImdldERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJxdW90ZVJvd3MiLCJyb3dzIiwiY2hpbGRyZW4iLCJxciIsImNvbnRhaW5lciIsInF1b3RlQmxvY2siLCJhbmNob3JSb3ciLCJjbG9uZU5vZGUiLCJjdXJRdW90ZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJjdG4iLCJwcmVSb3ciLCJnZXRQcmV2aW91c1JvdyIsImxhc3RFbGUiLCJwb3AiLCJpbnB1dCIsInQiLCJhZnRlcldoaWNoIiwiaXNFbXB0eVJvdyIsInRhcmdldEluZGV4Iiwic3RhcnRJbmRleCIsImNoaWxkIiwidW5kZWZpbmVkIiwiY29sbGFwc2VBdFJvdyIsInRvZG9JZCIsImNoZWNrYm94cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjIiwiYnRuIiwiY3RuQ2hlY2tlZExvZ2ljIiwiY2hlY2tlZCIsInRleHREZWNvcmF0aW9uIiwib25jaGFuZ2UiLCJvbmlucHV0Iiwib25rZXlkb3duIiwiZGVsZXRlVG9kbyIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdEJsb2NrIiwiY3VyUmFuZ2UiLCJhZnRlckRlbGV0ZSIsImZpcnN0Um93IiwiZmlzdEVsZW1lbnRDaGlsZCIsImZpcnN0Q2hpbGQiLCJlZGl0b3JUb2RvIiwiZGVsZXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRlc3QiLCJjbGVhckludGVydmFsIiwiZ2V0Um93cyIsIm1lcmdlQXJyYXkiLCJzb3VyY2VBcnIiLCJleHRBcnIiLCJlbCIsImFuY2VzdG9yIiwiZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2RlcyIsImVuZEVsIiwiZW5kSW5kZXgiLCJnZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2RlcyIsInN0YXJ0RWwiLCJibG9ja05vZGVOYW1lcyIsImlubGluZU5vZGVOYW1lcyIsImlzSW5saW5lT3JUZXh0IiwiaXNJbmxpbmUiLCJpc1RleHQiLCJnZXRBbGxTcGVjaWZ5Tm9kZSIsInNlYXJjaE9waW5pb24iLCJ0YXJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInRhZ3MiLCJvcGluaW9uS2V5cyIsInBhc3MiLCJhIiwib3BpbmlvbiIsImFuY2VzdG9yTm9kZU5hbWUiLCJudW0iLCJzZWxlY3RvciIsImZpcnN0T25lIiwiYm9yZGVyIiwiY29udGVudFpvbmUiLCJhbmNlc3RvcnMiLCJpc1RhcmdldCIsImdldE5vZGVOdW0iLCJyb290RWwiLCJpc1JvdyIsIndyYXBwZXJOb2RlTmFtZSIsInNlcGVyYXRlQnlCciIsImVsZW1lbnRzIiwic2VhcmNoTGVmdCIsInNlYXJjaFJpZ2h0IiwiZWxlIiwibGFzdE9uZSIsImhhbmRsZXJCciIsInByZXZpb3VzU2libGluZyIsImRpcmVjdGlvbiIsIm5leHREaXIiLCJ0YXJnZXROb2RlIiwidW5zaGlmdCIsInJvd0luZGV4IiwidGFnTmFtZWxpc3QiLCJkZWVwZXN0IiwiYmluZGluZyIsInZub2RlIiwiY29udGV4dCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsImRhdGFUcmFuc2ZlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJGaWxlIiwiX19kcmFnT3ZlckhhbmRsZXIiLCJfX2RyYWdMZWF2ZUhhbmRsZXIiLCJfX2Ryb3BIYW5kbGVyIiwidW5iaW5kIiwiY3VyRXhjbHVkZSIsIm1vZHVsZU5hbWVMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsImFsaWduIiwiaW1hZ2UiLCJsaW5rIiwidW5saW5rIiwidGFibGUiLCJmb250IiwiZXJhc2VyIiwiaW5mbyIsImNvbG9yIiwic3Vic2NyaXB0Iiwic3VwZXJzY3JpcHQiLCJzYXZlIiwidXBsb2FkIiwicHJvZ3Jlc3MiLCJ1bmtub3duIiwiZXJyb3IiLCJhYm9ydCIsInJlc2V0IiwiaHIiLCJ1bmRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBLFdBQUc7O0FBRUgsb0RBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOzs7O0FBSUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQTtBQUNBLG9DQUE0QjtBQUM1QixxQ0FBNkI7QUFDN0IseUNBQWlDOztBQUVqQywrQ0FBdUM7QUFDdkM7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QWhCRztBQWlCWEgsZUFBVyxXQWpCQTtBQWtCWCxzQkFBa0IsZ0JBbEJQO0FBbUJYc2IsZUFBVyxXQW5CQTtBQW9CWEMsaUJBQWEsYUFwQkY7QUFxQlg5UixhQUFTLFNBckJFO0FBc0JYLGlCQUFhLFdBdEJGO0FBdUJYLGlCQUFhLFdBdkJGO0FBd0JYLG9CQUFnQixjQXhCTDtBQXlCWCxzQkFBa0IsZ0JBekJQO0FBMEJYLHFCQUFpQixlQTFCTjtBQTJCWCxvQkFBZ0IsY0EzQkw7QUE0Qlgsc0JBQWtCLGdCQTVCUDtBQTZCWCxrQkFBYyxZQTdCSDtBQThCWCx3QkFBb0Isa0JBOUJUO0FBK0JYLGlCQUFhLFdBL0JGO0FBZ0NYLG9CQUFnQixjQWhDTDtBQWlDWCtSLFVBQU0sTUFqQ0s7QUFrQ1hDLFlBQVEsUUFsQ0c7QUFtQ1hDLGNBQVUsVUFuQ0M7QUFvQ1hDLGFBQVMsU0FwQ0U7QUFxQ1gsbUJBQWUsYUFyQ0o7QUFzQ1hDLFdBQU8sT0F0Q0k7QUF1Q1hDLFdBQU8sT0F2Q0k7QUF3Q1hDLFdBQU8sT0F4Q0k7QUF5Q1hDLFFBQUksaUJBekNPO0FBMENYQyxVQUFNLE1BMUNLO0FBMkNYLG1CQUFlLGFBM0NKO0FBNENYLHlCQUFxQjtBQTVDVixDIiwiZmlsZSI6Im15LXZ1ZS1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm15VnVlRWRpdG9yXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdID0gXHJcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHRcdGlmKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdH0gO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHQ7XHJcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XHJcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcclxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcclxuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZSkge1xyXG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHRcclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJjZDdiNDAwYmYyNjk1ODVkNjM2OFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xyXG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcclxuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdGlmKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XHJcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xyXG4gXHRcdFx0aWYobWUuaG90LmFjdGl2ZSkge1xyXG4gXHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XHJcbiBcdFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpIDwgMClcclxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpIDwgMClcclxuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVxdWVzdCArIFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArIG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xyXG4gXHRcdH07XHJcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcclxuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKVxyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xyXG4gXHRcdFx0XHR0aHJvdyBlcnI7XHJcbiBcdFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XHJcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xyXG4gXHRcdFx0XHRcdGlmKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGZuO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBob3QgPSB7XHJcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXHJcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXHJcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcclxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXHJcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXHJcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXHJcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aWYoIWwpIHJldHVybiBob3RTdGF0dXM7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXHJcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cclxuIFx0XHR9O1xyXG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcclxuIFx0XHRyZXR1cm4gaG90O1xyXG4gXHR9XHJcbiBcdFxyXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcclxuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xyXG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90RGVmZXJyZWQ7XHJcbiBcdFxyXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cclxuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcclxuIFx0XHR2YXIgaXNOdW1iZXIgPSAoK2lkKSArIFwiXCIgPT09IGlkO1xyXG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xyXG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcclxuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcclxuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxyXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xyXG4gXHRcdFx0dmFyIGNodW5rSWQgPSAwO1xyXG4gXHRcdFx0eyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXHJcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXHJcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xyXG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcclxuIFx0XHRpZighZGVmZXJyZWQpIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xyXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXHJcbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XHJcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XHJcbiBcdFx0XHR9KS50aGVuKFxyXG4gXHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwicmVhZHlcIikgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xyXG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgY2I7XHJcbiBcdFx0dmFyIGk7XHJcbiBcdFx0dmFyIGo7XHJcbiBcdFx0dmFyIG1vZHVsZTtcclxuIFx0XHR2YXIgbW9kdWxlSWQ7XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFxyXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XHJcbiBcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXHJcbiBcdFx0XHRcdFx0aWQ6IGlkXHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XHJcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX21haW4pIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZighcGFyZW50KSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxyXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcclxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xyXG4gXHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiKTtcclxuIFx0XHR9O1xyXG4gXHRcclxuIFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQ7XHJcbiBcdFx0XHRcdGlmKGhvdFVwZGF0ZVtpZF0pIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XHJcbiBcdFx0XHRcdGlmKHJlc3VsdC5jaGFpbikge1xyXG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRzd2l0Y2gocmVzdWx0LnR5cGUpIHtcclxuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIiBpbiBcIiArIHJlc3VsdC5wYXJlbnRJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vblVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25BY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRpc3Bvc2VkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRkZWZhdWx0OlxyXG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihhYm9ydEVycm9yKSB7XHJcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvQXBwbHkpIHtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHRcdFx0XHRmb3IobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcclxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9EaXNwb3NlKSB7XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XHJcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXHJcbiBcdFx0XHRcdH0pO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcclxuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcclxuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH0pO1xyXG4gXHRcclxuIFx0XHR2YXIgaWR4O1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdGlmKCFtb2R1bGUpIGNvbnRpbnVlO1xyXG4gXHRcclxuIFx0XHRcdHZhciBkYXRhID0ge307XHJcbiBcdFxyXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXHJcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xyXG4gXHRcdFx0XHRjYihkYXRhKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcclxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXHJcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIHtcclxuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxyXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xyXG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xyXG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0XHRpZihpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xyXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xyXG4gXHRcdFx0XHRcdFx0aWYoY2IpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XHJcbiBcdFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xyXG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZXJyMikge1xyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yZ2luYWxFcnJvcjogZXJyLCAvLyBUT0RPIHJlbW92ZSBpbiB3ZWJwYWNrIDRcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjI7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXHJcbiBcdFx0aWYoZXJyb3IpIHtcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XHJcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDExKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2Q3YjQwMGJmMjY5NTg1ZDYzNjgiLCJpbXBvcnQgaW5zZXJ0SW1hZ2UgZnJvbSAnLi9pbnNlcnRJbWFnZSdcbmltcG9ydCBmb250U2l6ZSBmcm9tICcuL2ZvbnRTaXplJ1xuaW1wb3J0IHBhc3RlIGZyb20gJy4vcGFzdGUnXG5pbXBvcnQgZW50ZXIgZnJvbSAnLi9lbnRlcidcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgc3RyaWtlVGhyb3VnaCBmcm9tICcuL3N0cmlrZVRocm91Z2gnXG5pbXBvcnQgaXRhbGljIGZyb20gJy4vaXRhbGljJ1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IHF1b3RlIGZyb20gJy4vcXVvdGUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQga2V5ZG93biBmcm9tICcuL2tleWRvd24nXG5pbXBvcnQgZGVsZXRlTW9kdWxlIGZyb20gJy4vZGVsZXRlJ1xuaW1wb3J0IGp1c3RpZnlSaWdodCBmcm9tICcuL2p1c3RpZnlSaWdodCdcbmltcG9ydCBqdXN0aWZ5TGVmdCBmcm9tICcuL2p1c3RpZnlMZWZ0J1xuaW1wb3J0IGp1c3RpZnlDZW50ZXIgZnJvbSAnLi9qdXN0aWZ5Q2VudGVyJ1xuaW1wb3J0IHtpc09ian0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IGNvbW1hbmRzID0ge1xuICAvKlxuICAgKiBhZGQgYSBzdHlsZSBhdHRyaWJ1dGUgaW4gcmFuZ2UoaGF2ZSBidWcpXG4gICAqIEBwYXJhbSB7b2JqfSBhcmcgaW5jbHVkZVxuICAgKiAgICAgIGtleTogc3R5bGUgbmFtZVxuICAgKiAgICAgIHZhbHVlOiBzdHlsZSB2YWx1ZVxuICAgKiovXG4gIGFkZFN0eWxlIChyaCwgYXJnKSB7XG4gICAgZnVuY3Rpb24gZG9BZGQobm9kZSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKHN0eWxlTmFtZSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGVbc3R5bGVOYW1lXSA9IGFyZ1tzdHlsZU5hbWVdXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghaXNPYmooYXJnKSkgcmV0dXJuXG4gICAgY29uc3QgdGV4dE5vZGVzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgaWYgKCF0ZXh0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgZG9BZGQobm9kZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmIHRleHROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBub2RlID0gdGV4dE5vZGVzWzBdLnBhcmVudE5vZGVcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7dGFnOiAncCd9KVxuICAgICAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Tm9kZXNbMF0ubm9kZVZhbHVlXG4gICAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0Tm9kZXNbMF0pXG4gICAgICAgICAgZG9BZGQobmV3Um93KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRvQWRkKG5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMSAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgICAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLmVuZENvbnRhaW5lcikge1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSB0ZXh0Tm9kZXNbMF1cbiAgICAgIGlmIChyaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMFxuICAgICAgICAmJiByaC5yYW5nZS5lbmRPZmZzZXQgPT09IHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhcbiAgICAgICAgcmgucmFuZ2Uuc3RhcnRPZmZzZXQsIHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIGRvQWRkKHNwYW4pXG4gICAgICBjb25zdCBmcm9udFBhcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KSlcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyb250UGFydCwgdGV4dE5vZGUpXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHNwYW4sIDApXG4gICAgICByaC5yYW5nZS5zZXRFbmQoc3BhbiwgMSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgICBpZiAocmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKFxuICAgICAgICAgIDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKHJoLnJhbmdlLmVuZE9mZnNldCA9PT0gdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhyaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICByaC5yYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgZG9BZGQoc3BhbilcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICB9KVxuICAgIHJldHVyblxuICB9LFxuICAnZm9ybWF0QmxvY2snIChyaCwgYXJnKSB7XG4gICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gaGFja1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZylcbiAgICByaC5yYW5nZS5zdXJyb3VuZENvbnRlbnRzKGVsZW1lbnQpXG4gICAgcmV0dXJuXG4gIH0sXG4gICdsaW5lSGVpZ2h0JyAocmgsIGFyZykge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50QmxvY2sgPSByaC5nZXRQYXJlbnRCbG9ja05vZGUodGV4dE5vZGUpXG4gICAgICBpZiAocGFyZW50QmxvY2spIHtcbiAgICAgICAgcGFyZW50QmxvY2suc3R5bGUubGluZUhlaWdodCA9IGFyZ1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbnNlcnRIVE1MJyAocmgsIGFyZykge1xuICAgIGlmIChkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29tbWFuZHNbJ2ZvcmNlSW5zZXJ0SFRNTCddKHJoLCBhcmcpXG4gIH0sXG4gIC8qXG4gICAqIGluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyByb3cncyBjaGlsZFxuICAgKiBmb3JjZUluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyBhbmNob3JOb2RlIG9mIHJhbmdlIFxuICAgKiovXG4gICdmb3JjZUluc2VydEhUTUwnIChyaCwgYXJnKSB7XG4gICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICB2LmlubmVySFRNTCA9IGFyZ1xuICAgIGlmICh2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB2LmNoaWxkTm9kZXNbaV1cbiAgICAgICAgcmgucmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgICByaC5yYW5nZS5pbnNlcnROb2RlKGN1ck5vZGUpXG4gICAgICAgIHMuY29sbGFwc2UoY3VyTm9kZSwgMSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbmRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAvLyBjYW5jZWwgdG9kbyBpbmRlbnRcbiAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZG9JbmRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gd2VpZ2h0aW5nKHRleHQpIHtcbiAgICAgIGxldCBub2RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCAnbGknKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICBpZiAobm9kZSAmJiAhbm9kZUxpc3QuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvSW5kZW50KHR5cGUsIG5vZGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMSSc6XG4gICAgICAgICAgbGV0IGN1ckxldmVsID0gcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ1VMJykgfHwgcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ09MJylcbiAgICAgICAgICBpZiAoY3VyTGV2ZWwgPj0gY29uc3RhbnQuTUFYX0lOREVOVF9MRVZFTCkgYnJlYWtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5kZW50JywgZmFsc2UsIGFyZylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFOlxuICAgICAgICAgIGxldCBjdXJQZXJjZW50ID0gbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gfHwgJzAnXG4gICAgICAgICAgY3VyUGVyY2VudCA9IE51bWJlcihjdXJQZXJjZW50LnJlcGxhY2UoJyUnLCAnJykpXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuT1VUREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgaWYgKGN1clBlcmNlbnQgLyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCA+PSBjb25zdGFudC5NQVhfSU5ERU5UX0xFVkVMKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCArICclJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ291dGRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBkb091dGRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gd2VpZ2h0aW5nKHRleHQpIHtcbiAgICAgIGxldCBub2RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCAnbGknKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICBpZiAobm9kZSAmJiAhbm9kZUxpc3QuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvT3V0ZGVudCh0eXBlLCBub2RlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnTEknOlxuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdvdXRkZW50JywgZmFsc2UsIGFyZylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFOlxuICAgICAgICAgIGxldCBjdXJQZXJjZW50ID0gbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gfHwgJzAnXG4gICAgICAgICAgY3VyUGVyY2VudCA9IE51bWJlcihjdXJQZXJjZW50LnJlcGxhY2UoJyUnLCAnJykpXG4gICAgICAgICAgaWYgKGN1clBlcmNlbnQgPT09IDApIHJldHVyblxuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50Lk9VVERFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIGxldCB0YXJnZXRJbmRlbnQgPSBjdXJQZXJjZW50IC0gY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlRcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZW50IDwgMCkge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IHRhcmdldEluZGVudCArICclJ1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdpbnNlcnRVbm9yZGVyZWRMaXN0JyAocmgsIGFyZykge1xuICAgIC8vIGRvIG5vdCBpbnNlcnQgdWwgaW50byBhIHJvd1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KHN0YXJ0Tm9kZSlcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG5cbiAgICAvLyBzdGFydE5vZGUgaXMgZWRpdCB6b25lXG4gICAgaWYgKCFyb3cpIHJldHVyblxuXG4gICAgcm93ID0gcmguY3JlYXRlV3JhcHBlckZvcklubGluZShyb3csIGNvbnN0YW50LlJPV19UQUcpXG5cbiAgICBpZiAocm93KSB7XG4gICAgICAvLyBsZXQgdWwgYmUgYSByb3dcbiAgICAgIGxldCBtYXliZUlzVWwgPSByb3cuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGlmIChtYXliZUlzVWwgJiYgbWF5YmVJc1VsLm5vZGVOYW1lID09PSAnVUwnICYmIHJvdy5ub2RlTmFtZSAhPT0gJ1VMJykge1xuICAgICAgICByb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWF5YmVJc1VsLCByb3cpXG4gICAgICAgIHJvdyA9IG1heWJlSXNVbFxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgYnJcbiAgICAgIGlmIChyb3cubmV4dFNpYmxpbmcgJiYgcm93Lm5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIHJvdy5uZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdy5uZXh0U2libGluZylcbiAgICAgIH1cblxuICAgICAgLy8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yIHVsPmxpLCB0byBsZXQgbW9kdWxlIGluc3BlY3QgcnVuXG4gICAgICAvLyBpZiB1bCBhbmQgb2wgaXMgYmluZCBpbnRvIGEgbW9kdWxlJ3MgdGFiLCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VcbiAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmICFyaC5lZGl0b3IubW9kdWxlc01hcFsndWwnXS5tb2R1bGVJbnNwZWN0UmVzdWx0KSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsICcmIzgyMDM7JylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgICAgaWYgKHN0YXJ0Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgcm93Lm91dGVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdpbnNlcnRPcmRlcmVkTGlzdCcgKHJoLCBhcmcpIHtcbiAgICAvLyBkbyBub3QgaW5zZXJ0IHVsIGludG8gYSByb3dcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbClcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KHN0YXJ0Tm9kZSlcblxuICAgIC8vIHN0YXJ0Tm9kZSBpcyBlZGl0IHpvbmVcbiAgICBpZiAoIXJvdykgcmV0dXJuXG5cbiAgICByb3cgPSByaC5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHJvdywgY29uc3RhbnQuUk9XX1RBRylcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGxldCB1bCBiZSBhIHJvd1xuICAgICAgbGV0IG1heWJlSXNVbCA9IHJvdy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgaWYgKG1heWJlSXNVbCAmJiBtYXliZUlzVWwubm9kZU5hbWUgPT09ICdPTCcgJiYgcm93Lm5vZGVOYW1lICE9PSAnT0wnKSB7XG4gICAgICAgIHJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtYXliZUlzVWwsIHJvdylcbiAgICAgICAgcm93ID0gbWF5YmVJc1VsXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBiclxuICAgICAgaWYgKHJvdy5uZXh0U2libGluZyAmJiByb3cubmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgcm93Lm5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93Lm5leHRTaWJsaW5nKVxuICAgICAgfVxuXG4gICAgICAvLyBzcGVjaWFsIHRyZWF0bWVudCBmb3IgdWw+bGksIHRvIGxldCBtb2R1bGUgaW5zcGVjdCBydW5cbiAgICAgIC8vIGlmIHVsIGFuZCBvbCBpcyBiaW5kIGludG8gYSBtb2R1bGUncyB0YWIsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZVxuICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgIXJoLmVkaXRvci5tb2R1bGVzTWFwWydvbCddLm1vZHVsZUluc3BlY3RSZXN1bHQpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgJyYjODIwMzsnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgICBpZiAoc3RhcnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgIHJvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCByb3cub3V0ZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuY29tbWFuZHMuaW5zZXJ0SW1hZ2UgPSBpbnNlcnRJbWFnZVxuY29tbWFuZHMuZm9udFNpemUgPSBmb250U2l6ZVxuY29tbWFuZHMuZGVsZXRlID0gZGVsZXRlTW9kdWxlXG5jb21tYW5kcy5wYXN0ZSA9IHBhc3RlXG5jb21tYW5kcy5lbnRlciA9IGVudGVyXG5jb21tYW5kcy5rZXlkb3duID0ga2V5ZG93blxuY29tbWFuZHMudW5kZXJsaW5lID0gdW5kZXJsaW5lXG5jb21tYW5kcy5zdHJpa2VUaHJvdWdoID0gc3RyaWtlVGhyb3VnaFxuY29tbWFuZHMuYm9sZCA9IGJvbGRcbmNvbW1hbmRzLml0YWxpYyA9IGl0YWxpY1xuY29tbWFuZHMuanVzdGlmeUxlZnQgPSBqdXN0aWZ5TGVmdFxuY29tbWFuZHMuanVzdGlmeUNlbnRlciA9IGp1c3RpZnlDZW50ZXJcbmNvbW1hbmRzLmp1c3RpZnlSaWdodCA9IGp1c3RpZnlSaWdodFxuT2JqZWN0LmFzc2lnbihjb21tYW5kcywgcXVvdGUsIHRvZG8pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWF9JTkRFTlRfTEVWRUw6IDEwLFxuICBJTkRFTlRfV0lEVEhfUEVSQ0VOVDogOCxcbiAgSU5ERU5UX1NUWUxFX05BTUU6ICdtYXJnaW5MZWZ0JyxcbiAgT1VUREVOVF9TVFlMRV9OQU1FOiAnbWFyZ2luUmlnaHQnLFxuICBST1dfVEFHOiAncCcsXG4gIFJPV19UQUdfVVBQRVJDQVNFOiAnUCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudC1jb25maWcuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvbnQtdGFiIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDU0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggNHB4IDRweCA2cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZm9udC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDNweCAzcHggM3B4IDVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5mb250LXRhYi5mb3JiaWRkZW4ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmZvbnQtdGFiIC5pY29uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IC0xcHg7XFxuICB0b3A6IDI1cHg7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24gbGkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDYycHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIhLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBzaGFkb3cgY2xvbmVcbiAqIEBwYXJhbSBzb3VyY2UgICAgc291cmNlIG9iamVjdFxuICogQHBhcmFtIGV4dCAgICAgICBleHRlbmRlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG1peGluID0gKHNvdXJjZSA9IHt9LCBleHQgPSB7fSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKGV4dCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAvLyBmb3IgZGF0YSBmdW5jdGlvblxuICAgICAgICBpZiAoayA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhU3JjID0gc291cmNlW2tdXG4gICAgICAgICAgICBjb25zdCBkYXRhRGVzYyA9IGV4dFtrXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhRGVzYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVNyYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2Vba10gPSBkYXRhRGVzY1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtrXSA9ICgpID0+IG1peGluKGRhdGFTcmMoKSwgZGF0YURlc2MoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3VyY2Vba10gPSBleHRba11cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNvdXJjZVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmogPSBkYXRhID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKS5zbGljZSgtNywgLTEpID09PSAnT2JqZWN0J1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5kZXguanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hYmJyLFxcbmFkZHJlc3MsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnZhcixcXG5iLFxcbmksXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDE7XFxufVxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuYSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmlucyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuYWJiclt0aXRsZV0sXFxuZGZuW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDA7XFxuICBjdXJzb3I6IGhlbHA7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubXktdnVlLWVkaXRvciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubXktdnVlLWVkaXRvciBpbWcge1xcbiAgbWF4LXdpZHRoOiA5OCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFiczphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC50YWIge1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAudGFiIC5pY29uIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcGFkZGluZzogNHB4IDZweDtcXG4gIGJvcmRlcjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHggQXJpYWwsIEhlbHZldGljYSwgVGFob21hLCBWZXJkYW5hLCBTYW5zLVNlcmlmO1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bi5oaWdoTGlnaHQge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuLmZvcmJpZGRlbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjbGVhcjogYm90aDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IGZvbnQge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IGJsb2NrcXVvdGUge1xcbiAgbWluLXdpZHRoOiAzOHB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIHtcXG4gIG1hcmdpbjogMTRweCAwIDE0cHggMzVweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogLTIxcHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0gZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV06OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDBweCA0cHggMCAtMjRweDtcXG4gIGNvbG9yOiAjYjdiN2I3O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgdWwgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDUuNSU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzLjVweDtcXG4gIGxlZnQ6IDIuNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNjZGM5YzU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyIS4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgciBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW5bcl19fSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBpPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtuKDYpLG4oNyksZS5leHBvcnRzPW4oOCl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24odCl7IWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIHIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gaShlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPW51bGwsdGhpcy5fdmFsdWU9bnVsbCx0aGlzLl9kZWZlcnJlZHM9W10sbChlLHIoYSx0aGlzKSxyKHMsdGhpcykpfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9dGhpcztyZXR1cm4gbnVsbD09PXRoaXMuX3N0YXRlP3ZvaWQgdGhpcy5fZGVmZXJyZWRzLnB1c2goZSk6dm9pZCBmKGZ1bmN0aW9uKCl7dmFyIG49dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbD09PW4pcmV0dXJuIHZvaWQodC5fc3RhdGU/ZS5yZXNvbHZlOmUucmVqZWN0KSh0Ll92YWx1ZSk7dmFyIHI7dHJ5e3I9bih0Ll92YWx1ZSl9Y2F0Y2goaSl7cmV0dXJuIHZvaWQgZS5yZWplY3QoaSl9ZS5yZXNvbHZlKHIpfSl9ZnVuY3Rpb24gYShlKXt0cnl7aWYoZT09PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciB0PWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB2b2lkIGwocih0LGUpLHIoYSx0aGlzKSxyKHMsdGhpcykpfXRoaXMuX3N0YXRlPSEwLHRoaXMuX3ZhbHVlPWUsdS5jYWxsKHRoaXMpfWNhdGNoKG4pe3MuY2FsbCh0aGlzLG4pfX1mdW5jdGlvbiBzKGUpe3RoaXMuX3N0YXRlPSExLHRoaXMuX3ZhbHVlPWUsdS5jYWxsKHRoaXMpfWZ1bmN0aW9uIHUoKXtmb3IodmFyIGU9MCx0PXRoaXMuX2RlZmVycmVkcy5sZW5ndGg7dD5lO2UrKylvLmNhbGwodGhpcyx0aGlzLl9kZWZlcnJlZHNbZV0pO3RoaXMuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGMoZSx0LG4scil7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5yZXNvbHZlPW4sdGhpcy5yZWplY3Q9cn1mdW5jdGlvbiBsKGUsdCxuKXt2YXIgcj0hMTt0cnl7ZShmdW5jdGlvbihlKXtyfHwocj0hMCx0KGUpKX0sZnVuY3Rpb24oZSl7cnx8KHI9ITAsbihlKSl9KX1jYXRjaChpKXtpZihyKXJldHVybjtyPSEwLG4oaSl9fXZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnR8fGZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZSwxKX0sZD1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9O2kucHJvdG90eXBlW1wiY2F0Y2hcIl09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxpLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IGkoZnVuY3Rpb24ocixpKXtvLmNhbGwobixuZXcgYyhlLHQscixpKSl9KX0saS5hbGw9ZnVuY3Rpb24oKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgxPT09YXJndW1lbnRzLmxlbmd0aCYmZChhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHMpO3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIHIobyxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIHM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpcmV0dXJuIHZvaWQgcy5jYWxsKGEsZnVuY3Rpb24oZSl7cihvLGUpfSxuKX1lW29dPWEsMD09PS0taSYmdChlKX1jYXRjaCh1KXtuKHUpfX1pZigwPT09ZS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgaT1lLmxlbmd0aCxvPTA7bzxlLmxlbmd0aDtvKyspcihvLGVbb10pfSl9LGkucmVzb2x2ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3I9PT1pP2U6bmV3IGkoZnVuY3Rpb24odCl7dChlKX0pfSxpLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtuKGUpfSl9LGkucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxpPWUubGVuZ3RoO2k+cjtyKyspZVtyXS50aGVuKHQsbil9KX0saS5fc2V0SW1tZWRpYXRlRm49ZnVuY3Rpb24oZSl7Zj1lfSxpLnByb3RvdHlwZS5hbHdheXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG59KX0sZnVuY3Rpb24obil7cmV0dXJuIHQucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBufSl9KX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9aTpuLlByb21pc2V8fChuLlByb21pc2U9aSl9KHRoaXMpfSkuY2FsbCh0LG4oMikuc2V0SW1tZWRpYXRlKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIGkoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH12YXIgbz1uKDMpLm5leHRUaWNrLGE9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LHM9QXJyYXkucHJvdG90eXBlLnNsaWNlLHU9e30sYz0wO3Quc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShhLmNhbGwoc2V0VGltZW91dCx3aW5kb3csYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKGEuY2FsbChzZXRJbnRlcnZhbCx3aW5kb3csYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sdC5jbGVhclRpbWVvdXQ9dC5jbGVhckludGVydmFsPWZ1bmN0aW9uKGUpe2UuY2xvc2UoKX0saS5wcm90b3R5cGUudW5yZWY9aS5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSxpLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csdGhpcy5faWQpfSx0LmVucm9sbD1mdW5jdGlvbihlLHQpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD10fSx0LnVuZW5yb2xsPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD0tMX0sdC5fdW5yZWZBY3RpdmU9dC5hY3RpdmU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpO3ZhciB0PWUuX2lkbGVUaW1lb3V0O3Q+PTAmJihlLl9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLl9vblRpbWVvdXQmJmUuX29uVGltZW91dCgpfSx0KSl9LHQuc2V0SW1tZWRpYXRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpmdW5jdGlvbihlKXt2YXIgbj1jKysscj1hcmd1bWVudHMubGVuZ3RoPDI/ITE6cy5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdVtuXT0hMCxvKGZ1bmN0aW9uKCl7dVtuXSYmKHI/ZS5hcHBseShudWxsLHIpOmUuY2FsbChudWxsKSx0LmNsZWFySW1tZWRpYXRlKG4pKX0pLG59LHQuY2xlYXJJbW1lZGlhdGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yOmZ1bmN0aW9uKGUpe2RlbGV0ZSB1W2VdfX0pLmNhbGwodCxuKDIpLnNldEltbWVkaWF0ZSxuKDIpLmNsZWFySW1tZWRpYXRlKX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7Yz0hMSxhLmxlbmd0aD91PWEuY29uY2F0KHUpOmw9LTEsdS5sZW5ndGgmJnIoKX1mdW5jdGlvbiByKCl7aWYoIWMpe3ZhciBlPXNldFRpbWVvdXQobik7Yz0hMDtmb3IodmFyIHQ9dS5sZW5ndGg7dDspe2ZvcihhPXUsdT1bXTsrK2w8dDspYSYmYVtsXS5ydW4oKTtsPS0xLHQ9dS5sZW5ndGh9YT1udWxsLGM9ITEsY2xlYXJUaW1lb3V0KGUpfX1mdW5jdGlvbiBpKGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gbygpe312YXIgYSxzPWUuZXhwb3J0cz17fSx1PVtdLGM9ITEsbD0tMTtzLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07dS5wdXNoKG5ldyBpKGUsdCkpLDEhPT11Lmxlbmd0aHx8Y3x8c2V0VGltZW91dChyLDApfSxpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxzLnRpdGxlPVwiYnJvd3NlclwiLHMuYnJvd3Nlcj0hMCxzLmVudj17fSxzLmFyZ3Y9W10scy52ZXJzaW9uPVwiXCIscy52ZXJzaW9ucz17fSxzLm9uPW8scy5hZGRMaXN0ZW5lcj1vLHMub25jZT1vLHMub2ZmPW8scy5yZW1vdmVMaXN0ZW5lcj1vLHMucmVtb3ZlQWxsTGlzdGVuZXJzPW8scy5lbWl0PW8scy5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxzLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxzLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scy51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7dmFyIGU9fm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikmJn5uYXZpZ2F0b3IudmVuZG9yLmluZGV4T2YoXCJHb29nbGVcIikmJiF+bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO3JldHVybiBlJiZuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKS8pLnBvcCgpPD01MzR8fC9NUVFCcm93c2VyL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KX12YXIgcj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEJsb2IsITB9Y2F0Y2goZSl7cmV0dXJuITF9fSgpP3dpbmRvdy5CbG9iOmZ1bmN0aW9uKGUsdCl7dmFyIG49bmV3KHdpbmRvdy5CbG9iQnVpbGRlcnx8d2luZG93LldlYktpdEJsb2JCdWlsZGVyfHx3aW5kb3cuTVNCbG9iQnVpbGRlcnx8d2luZG93Lk1vekJsb2JCdWlsZGVyKTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uYXBwZW5kKGUpfSksbi5nZXRCbG9iKHQ/dC50eXBlOnZvaWQgMCl9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpcyxuPVtdLGk9QXJyYXkoMjEpLmpvaW4oXCItXCIpKygrbmV3IERhdGUqKDFlMTYqTWF0aC5yYW5kb20oKSkpLnRvU3RyaW5nKDM2KSxvPVhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO3RoaXMuZ2V0UGFydHM9ZnVuY3Rpb24oKXtyZXR1cm4gbi50b1N0cmluZygpfSx0aGlzLmFwcGVuZD1mdW5jdGlvbihlLHQscil7bi5wdXNoKFwiLS1cIitpKydcXHJcXG5Db250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2UrJ1wiJyksdCBpbnN0YW5jZW9mIEJsb2I/KG4ucHVzaCgnOyBmaWxlbmFtZT1cIicrKHJ8fFwiYmxvYlwiKSsnXCJcXHJcXG5Db250ZW50LVR5cGU6ICcrdC50eXBlK1wiXFxyXFxuXFxyXFxuXCIpLG4ucHVzaCh0KSk6bi5wdXNoKFwiXFxyXFxuXFxyXFxuXCIrdCksbi5wdXNoKFwiXFxyXFxuXCIpfSx0KyssWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oYSl7dmFyIHMsdSxjPXRoaXM7YT09PWU/KG4ucHVzaChcIi0tXCIraStcIi0tXFxyXFxuXCIpLHU9bmV3IHIobikscz1uZXcgRmlsZVJlYWRlcixzLm9ubG9hZD1mdW5jdGlvbigpe28uY2FsbChjLHMucmVzdWx0KX0scy5vbmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IGV9LHMucmVhZEFzQXJyYXlCdWZmZXIodSksdGhpcy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT1cIitpKSx0LS0sMD09dCYmKFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPW8pKTpvLmNhbGwodGhpcyxhKX19dmFyIHQ9MDtyZXR1cm4gZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShGb3JtRGF0YS5wcm90b3R5cGUpLGV9KCk7ZS5leHBvcnRzPXtCbG9iOnIsRm9ybURhdGE6bigpP2k6Rm9ybURhdGF9fSxmdW5jdGlvbihlLHQsbil7dmFyIHIsaTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKGUpe3JldHVybiEhZS5leGlmZGF0YX1mdW5jdGlvbiBvKGUsdCl7dD10fHxlLm1hdGNoKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvaW0pWzFdfHxcIlwiLGU9ZS5yZXBsYWNlKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvZ2ltLFwiXCIpO2Zvcih2YXIgbj1hdG9iKGUpLHI9bi5sZW5ndGgsaT1uZXcgQXJyYXlCdWZmZXIociksbz1uZXcgVWludDhBcnJheShpKSxhPTA7cj5hO2ErKylvW2FdPW4uY2hhckNvZGVBdChhKTtyZXR1cm4gaX1mdW5jdGlvbiBhKGUsdCl7dmFyIG49bmV3IFhNTEh0dHBSZXF1ZXN0O24ub3BlbihcIkdFVFwiLGUsITApLG4ucmVzcG9uc2VUeXBlPVwiYmxvYlwiLG4ub25sb2FkPWZ1bmN0aW9uKGUpeygyMDA9PXRoaXMuc3RhdHVzfHwwPT09dGhpcy5zdGF0dXMpJiZ0KHRoaXMucmVzcG9uc2UpfSxuLnNlbmQoKX1mdW5jdGlvbiBzKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj11KG4pLGk9YyhuKTtlLmV4aWZkYXRhPXJ8fHt9LGUuaXB0Y2RhdGE9aXx8e30sdCYmdC5jYWxsKGUpfWlmKGUuc3JjKWlmKC9eZGF0YVxcOi9pLnRlc3QoZS5zcmMpKXt2YXIgcj1vKGUuc3JjKTtuKHIpfWVsc2UgaWYoL15ibG9iXFw6L2kudGVzdChlLnNyYykpe3ZhciBpPW5ldyBGaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKGUpe24oZS50YXJnZXQucmVzdWx0KX0sYShlLnNyYyxmdW5jdGlvbihlKXtpLnJlYWRBc0FycmF5QnVmZmVyKGUpfSl9ZWxzZXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Q7cy5vbmxvYWQ9ZnVuY3Rpb24oKXsyMDA9PXRoaXMuc3RhdHVzfHwwPT09dGhpcy5zdGF0dXM/bihzLnJlc3BvbnNlKTp0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBsb2FkIGltYWdlXCIpKSxzPW51bGx9LHMub3BlbihcIkdFVFwiLGUuc3JjLCEwKSxzLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCIscy5zZW5kKG51bGwpfWVsc2UgaWYod2luZG93LkZpbGVSZWFkZXImJihlIGluc3RhbmNlb2Ygd2luZG93LkJsb2J8fGUgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkpe3ZhciBpPW5ldyBGaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKGUpe3AmJmNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiK2UudGFyZ2V0LnJlc3VsdC5ieXRlTGVuZ3RoKSxuKGUudGFyZ2V0LnJlc3VsdCl9LGkucmVhZEFzQXJyYXlCdWZmZXIoZSl9fWZ1bmN0aW9uIHUoZSl7dmFyIHQ9bmV3IERhdGFWaWV3KGUpO2lmKHAmJmNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiK2UuYnl0ZUxlbmd0aCksMjU1IT10LmdldFVpbnQ4KDApfHwyMTYhPXQuZ2V0VWludDgoMSkpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKSwhMTtmb3IodmFyIG4scj0yLGk9ZS5ieXRlTGVuZ3RoO2k+cjspe2lmKDI1NSE9dC5nZXRVaW50OChyKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBtYXJrZXIgYXQgb2Zmc2V0IFwiK3IrXCIsIGZvdW5kOiBcIit0LmdldFVpbnQ4KHIpKSwhMTtpZihuPXQuZ2V0VWludDgocisxKSxwJiZjb25zb2xlLmxvZyhuKSwyMjU9PW4pcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiRm91bmQgMHhGRkUxIG1hcmtlclwiKSxnKHQscis0LHQuZ2V0VWludDE2KHIrMiktMik7cis9Mit0LmdldFVpbnQxNihyKzIpfX1mdW5jdGlvbiBjKGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKTtpZihwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLmJ5dGVMZW5ndGgpLDI1NSE9dC5nZXRVaW50OCgwKXx8MjE2IT10LmdldFVpbnQ4KDEpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIiksITE7Zm9yKHZhciBuPTIscj1lLmJ5dGVMZW5ndGgsaT1mdW5jdGlvbihlLHQpe3JldHVybiA1Nj09PWUuZ2V0VWludDgodCkmJjY2PT09ZS5nZXRVaW50OCh0KzEpJiY3Mz09PWUuZ2V0VWludDgodCsyKSYmNzc9PT1lLmdldFVpbnQ4KHQrMykmJjQ9PT1lLmdldFVpbnQ4KHQrNCkmJjQ9PT1lLmdldFVpbnQ4KHQrNSl9O3I+bjspe2lmKGkodCxuKSl7dmFyIG89dC5nZXRVaW50OChuKzcpO28lMiE9PTAmJihvKz0xKSwwPT09byYmKG89NCk7dmFyIGE9bis4K28scz10LmdldFVpbnQxNihuKzYrbyk7cmV0dXJuIGwoZSxhLHMpfW4rK319ZnVuY3Rpb24gbChlLHQsbil7Zm9yKHZhciByLGksbyxhLHMsdT1uZXcgRGF0YVZpZXcoZSksYz17fSxsPXQ7dCtuPmw7KTI4PT09dS5nZXRVaW50OChsKSYmMj09PXUuZ2V0VWludDgobCsxKSYmKGE9dS5nZXRVaW50OChsKzIpLGEgaW4gUyYmKG89dS5nZXRJbnQxNihsKzMpLHM9bys1LGk9U1thXSxyPWgodSxsKzUsbyksYy5oYXNPd25Qcm9wZXJ0eShpKT9jW2ldaW5zdGFuY2VvZiBBcnJheT9jW2ldLnB1c2gocik6Y1tpXT1bY1tpXSxyXTpjW2ldPXIpKSxsKys7cmV0dXJuIGN9ZnVuY3Rpb24gZihlLHQsbixyLGkpe3ZhciBvLGEscyx1PWUuZ2V0VWludDE2KG4sIWkpLGM9e307Zm9yKHM9MDt1PnM7cysrKW89bisxMipzKzIsYT1yW2UuZ2V0VWludDE2KG8sIWkpXSwhYSYmcCYmY29uc29sZS5sb2coXCJVbmtub3duIHRhZzogXCIrZS5nZXRVaW50MTYobywhaSkpLGNbYV09ZChlLG8sdCxuLGkpO3JldHVybiBjfWZ1bmN0aW9uIGQoZSx0LG4scixpKXt2YXIgbyxhLHMsdSxjLGwsZj1lLmdldFVpbnQxNih0KzIsIWkpLGQ9ZS5nZXRVaW50MzIodCs0LCFpKSxnPWUuZ2V0VWludDMyKHQrOCwhaSkrbjtzd2l0Y2goZil7Y2FzZSAxOmNhc2UgNzppZigxPT1kKXJldHVybiBlLmdldFVpbnQ4KHQrOCwhaSk7Zm9yKG89ZD40P2c6dCs4LGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldFVpbnQ4KG8rdSk7cmV0dXJuIGE7Y2FzZSAyOnJldHVybiBvPWQ+ND9nOnQrOCxoKGUsbyxkLTEpO2Nhc2UgMzppZigxPT1kKXJldHVybiBlLmdldFVpbnQxNih0KzgsIWkpO2ZvcihvPWQ+Mj9nOnQrOCxhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50MTYobysyKnUsIWkpO3JldHVybiBhO2Nhc2UgNDppZigxPT1kKXJldHVybiBlLmdldFVpbnQzMih0KzgsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50MzIoZys0KnUsIWkpO3JldHVybiBhO2Nhc2UgNTppZigxPT1kKXJldHVybiBjPWUuZ2V0VWludDMyKGcsIWkpLGw9ZS5nZXRVaW50MzIoZys0LCFpKSxzPW5ldyBOdW1iZXIoYy9sKSxzLm51bWVyYXRvcj1jLHMuZGVub21pbmF0b3I9bCxzO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWM9ZS5nZXRVaW50MzIoZys4KnUsIWkpLGw9ZS5nZXRVaW50MzIoZys0KzgqdSwhaSksYVt1XT1uZXcgTnVtYmVyKGMvbCksYVt1XS5udW1lcmF0b3I9YyxhW3VdLmRlbm9taW5hdG9yPWw7cmV0dXJuIGE7Y2FzZSA5OmlmKDE9PWQpcmV0dXJuIGUuZ2V0SW50MzIodCs4LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0SW50MzIoZys0KnUsIWkpO3JldHVybiBhO2Nhc2UgMTA6aWYoMT09ZClyZXR1cm4gZS5nZXRJbnQzMihnLCFpKS9lLmdldEludDMyKGcrNCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldEludDMyKGcrOCp1LCFpKS9lLmdldEludDMyKGcrNCs4KnUsIWkpO3JldHVybiBhfX1mdW5jdGlvbiBoKGUsdCxuKXt2YXIgcixpPVwiXCI7Zm9yKHI9dDt0K24+cjtyKyspaSs9U3RyaW5nLmZyb21DaGFyQ29kZShlLmdldFVpbnQ4KHIpKTtyZXR1cm4gaX1mdW5jdGlvbiBnKGUsdCl7aWYoXCJFeGlmXCIhPWgoZSx0LDQpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBFWElGIGRhdGEhIFwiK2goZSx0LDQpKSwhMTt2YXIgbixyLGksbyxhLHM9dCs2O2lmKDE4NzYxPT1lLmdldFVpbnQxNihzKSluPSExO2Vsc2V7aWYoMTk3ODkhPWUuZ2V0VWludDE2KHMpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDQ5NDkgb3IgMHg0RDREKVwiKSwhMTtuPSEwfWlmKDQyIT1lLmdldFVpbnQxNihzKzIsIW4pKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDAwMkEpXCIpLCExO3ZhciB1PWUuZ2V0VWludDMyKHMrNCwhbik7aWYoOD51KXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChGaXJzdCBvZmZzZXQgbGVzcyB0aGFuIDgpXCIsZS5nZXRVaW50MzIocys0LCFuKSksITE7aWYocj1mKGUscyxzK3UsdixuKSxyLkV4aWZJRkRQb2ludGVyKXtvPWYoZSxzLHMrci5FeGlmSUZEUG9pbnRlcix3LG4pO2ZvcihpIGluIG8pe3N3aXRjaChpKXtjYXNlXCJMaWdodFNvdXJjZVwiOmNhc2VcIkZsYXNoXCI6Y2FzZVwiTWV0ZXJpbmdNb2RlXCI6Y2FzZVwiRXhwb3N1cmVQcm9ncmFtXCI6Y2FzZVwiU2Vuc2luZ01ldGhvZFwiOmNhc2VcIlNjZW5lQ2FwdHVyZVR5cGVcIjpjYXNlXCJTY2VuZVR5cGVcIjpjYXNlXCJDdXN0b21SZW5kZXJlZFwiOmNhc2VcIldoaXRlQmFsYW5jZVwiOmNhc2VcIkdhaW5Db250cm9sXCI6Y2FzZVwiQ29udHJhc3RcIjpjYXNlXCJTYXR1cmF0aW9uXCI6Y2FzZVwiU2hhcnBuZXNzXCI6Y2FzZVwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIjpjYXNlXCJGaWxlU291cmNlXCI6b1tpXT1iW2ldW29baV1dO2JyZWFrO2Nhc2VcIkV4aWZWZXJzaW9uXCI6Y2FzZVwiRmxhc2hwaXhWZXJzaW9uXCI6b1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKG9baV1bMF0sb1tpXVsxXSxvW2ldWzJdLG9baV1bM10pO2JyZWFrO2Nhc2VcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCI6b1tpXT1iLkNvbXBvbmVudHNbb1tpXVswXV0rYi5Db21wb25lbnRzW29baV1bMV1dK2IuQ29tcG9uZW50c1tvW2ldWzJdXStiLkNvbXBvbmVudHNbb1tpXVszXV19cltpXT1vW2ldfX1pZihyLkdQU0luZm9JRkRQb2ludGVyKXthPWYoZSxzLHMrci5HUFNJbmZvSUZEUG9pbnRlcix5LG4pO2ZvcihpIGluIGEpe3N3aXRjaChpKXtjYXNlXCJHUFNWZXJzaW9uSURcIjphW2ldPWFbaV1bMF0rXCIuXCIrYVtpXVsxXStcIi5cIithW2ldWzJdK1wiLlwiK2FbaV1bM119cltpXT1hW2ldfX1yZXR1cm4gcn12YXIgcD0hMSxtPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgbT9lOnRoaXMgaW5zdGFuY2VvZiBtP3ZvaWQodGhpcy5FWElGd3JhcHBlZD1lKTpuZXcgbShlKX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cyYmKHQ9ZS5leHBvcnRzPW0pLHQuRVhJRj1tO3ZhciB3PW0uVGFncz17MzY4NjQ6XCJFeGlmVmVyc2lvblwiLDQwOTYwOlwiRmxhc2hwaXhWZXJzaW9uXCIsNDA5NjE6XCJDb2xvclNwYWNlXCIsNDA5NjI6XCJQaXhlbFhEaW1lbnNpb25cIiw0MDk2MzpcIlBpeGVsWURpbWVuc2lvblwiLDM3MTIxOlwiQ29tcG9uZW50c0NvbmZpZ3VyYXRpb25cIiwzNzEyMjpcIkNvbXByZXNzZWRCaXRzUGVyUGl4ZWxcIiwzNzUwMDpcIk1ha2VyTm90ZVwiLDM3NTEwOlwiVXNlckNvbW1lbnRcIiw0MDk2NDpcIlJlbGF0ZWRTb3VuZEZpbGVcIiwzNjg2NzpcIkRhdGVUaW1lT3JpZ2luYWxcIiwzNjg2ODpcIkRhdGVUaW1lRGlnaXRpemVkXCIsMzc1MjA6XCJTdWJzZWNUaW1lXCIsMzc1MjE6XCJTdWJzZWNUaW1lT3JpZ2luYWxcIiwzNzUyMjpcIlN1YnNlY1RpbWVEaWdpdGl6ZWRcIiwzMzQzNDpcIkV4cG9zdXJlVGltZVwiLDMzNDM3OlwiRk51bWJlclwiLDM0ODUwOlwiRXhwb3N1cmVQcm9ncmFtXCIsMzQ4NTI6XCJTcGVjdHJhbFNlbnNpdGl2aXR5XCIsMzQ4NTU6XCJJU09TcGVlZFJhdGluZ3NcIiwzNDg1NjpcIk9FQ0ZcIiwzNzM3NzpcIlNodXR0ZXJTcGVlZFZhbHVlXCIsMzczNzg6XCJBcGVydHVyZVZhbHVlXCIsMzczNzk6XCJCcmlnaHRuZXNzVmFsdWVcIiwzNzM4MDpcIkV4cG9zdXJlQmlhc1wiLDM3MzgxOlwiTWF4QXBlcnR1cmVWYWx1ZVwiLDM3MzgyOlwiU3ViamVjdERpc3RhbmNlXCIsMzczODM6XCJNZXRlcmluZ01vZGVcIiwzNzM4NDpcIkxpZ2h0U291cmNlXCIsMzczODU6XCJGbGFzaFwiLDM3Mzk2OlwiU3ViamVjdEFyZWFcIiwzNzM4NjpcIkZvY2FsTGVuZ3RoXCIsNDE0ODM6XCJGbGFzaEVuZXJneVwiLDQxNDg0OlwiU3BhdGlhbEZyZXF1ZW5jeVJlc3BvbnNlXCIsNDE0ODY6XCJGb2NhbFBsYW5lWFJlc29sdXRpb25cIiw0MTQ4NzpcIkZvY2FsUGxhbmVZUmVzb2x1dGlvblwiLDQxNDg4OlwiRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0XCIsNDE0OTI6XCJTdWJqZWN0TG9jYXRpb25cIiw0MTQ5MzpcIkV4cG9zdXJlSW5kZXhcIiw0MTQ5NTpcIlNlbnNpbmdNZXRob2RcIiw0MTcyODpcIkZpbGVTb3VyY2VcIiw0MTcyOTpcIlNjZW5lVHlwZVwiLDQxNzMwOlwiQ0ZBUGF0dGVyblwiLDQxOTg1OlwiQ3VzdG9tUmVuZGVyZWRcIiw0MTk4NjpcIkV4cG9zdXJlTW9kZVwiLDQxOTg3OlwiV2hpdGVCYWxhbmNlXCIsNDE5ODg6XCJEaWdpdGFsWm9vbVJhdGlvblwiLDQxOTg5OlwiRm9jYWxMZW5ndGhJbjM1bW1GaWxtXCIsNDE5OTA6XCJTY2VuZUNhcHR1cmVUeXBlXCIsNDE5OTE6XCJHYWluQ29udHJvbFwiLDQxOTkyOlwiQ29udHJhc3RcIiw0MTk5MzpcIlNhdHVyYXRpb25cIiw0MTk5NDpcIlNoYXJwbmVzc1wiLDQxOTk1OlwiRGV2aWNlU2V0dGluZ0Rlc2NyaXB0aW9uXCIsNDE5OTY6XCJTdWJqZWN0RGlzdGFuY2VSYW5nZVwiLDQwOTY1OlwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIiw0MjAxNjpcIkltYWdlVW5pcXVlSURcIn0sdj1tLlRpZmZUYWdzPXsyNTY6XCJJbWFnZVdpZHRoXCIsMjU3OlwiSW1hZ2VIZWlnaHRcIiwzNDY2NTpcIkV4aWZJRkRQb2ludGVyXCIsMzQ4NTM6XCJHUFNJbmZvSUZEUG9pbnRlclwiLDQwOTY1OlwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIiwyNTg6XCJCaXRzUGVyU2FtcGxlXCIsMjU5OlwiQ29tcHJlc3Npb25cIiwyNjI6XCJQaG90b21ldHJpY0ludGVycHJldGF0aW9uXCIsMjc0OlwiT3JpZW50YXRpb25cIiwyNzc6XCJTYW1wbGVzUGVyUGl4ZWxcIiwyODQ6XCJQbGFuYXJDb25maWd1cmF0aW9uXCIsNTMwOlwiWUNiQ3JTdWJTYW1wbGluZ1wiLDUzMTpcIllDYkNyUG9zaXRpb25pbmdcIiwyODI6XCJYUmVzb2x1dGlvblwiLDI4MzpcIllSZXNvbHV0aW9uXCIsMjk2OlwiUmVzb2x1dGlvblVuaXRcIiwyNzM6XCJTdHJpcE9mZnNldHNcIiwyNzg6XCJSb3dzUGVyU3RyaXBcIiwyNzk6XCJTdHJpcEJ5dGVDb3VudHNcIiw1MTM6XCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRcIiw1MTQ6XCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGhcIiwzMDE6XCJUcmFuc2ZlckZ1bmN0aW9uXCIsMzE4OlwiV2hpdGVQb2ludFwiLDMxOTpcIlByaW1hcnlDaHJvbWF0aWNpdGllc1wiLDUyOTpcIllDYkNyQ29lZmZpY2llbnRzXCIsNTMyOlwiUmVmZXJlbmNlQmxhY2tXaGl0ZVwiLDMwNjpcIkRhdGVUaW1lXCIsMjcwOlwiSW1hZ2VEZXNjcmlwdGlvblwiLDI3MTpcIk1ha2VcIiwyNzI6XCJNb2RlbFwiLDMwNTpcIlNvZnR3YXJlXCIsMzE1OlwiQXJ0aXN0XCIsMzM0MzI6XCJDb3B5cmlnaHRcIn0seT1tLkdQU1RhZ3M9ezA6XCJHUFNWZXJzaW9uSURcIiwxOlwiR1BTTGF0aXR1ZGVSZWZcIiwyOlwiR1BTTGF0aXR1ZGVcIiwzOlwiR1BTTG9uZ2l0dWRlUmVmXCIsNDpcIkdQU0xvbmdpdHVkZVwiLDU6XCJHUFNBbHRpdHVkZVJlZlwiLDY6XCJHUFNBbHRpdHVkZVwiLDc6XCJHUFNUaW1lU3RhbXBcIiw4OlwiR1BTU2F0ZWxsaXRlc1wiLDk6XCJHUFNTdGF0dXNcIiwxMDpcIkdQU01lYXN1cmVNb2RlXCIsMTE6XCJHUFNET1BcIiwxMjpcIkdQU1NwZWVkUmVmXCIsMTM6XCJHUFNTcGVlZFwiLDE0OlwiR1BTVHJhY2tSZWZcIiwxNTpcIkdQU1RyYWNrXCIsMTY6XCJHUFNJbWdEaXJlY3Rpb25SZWZcIiwxNzpcIkdQU0ltZ0RpcmVjdGlvblwiLDE4OlwiR1BTTWFwRGF0dW1cIiwxOTpcIkdQU0Rlc3RMYXRpdHVkZVJlZlwiLDIwOlwiR1BTRGVzdExhdGl0dWRlXCIsMjE6XCJHUFNEZXN0TG9uZ2l0dWRlUmVmXCIsMjI6XCJHUFNEZXN0TG9uZ2l0dWRlXCIsMjM6XCJHUFNEZXN0QmVhcmluZ1JlZlwiLDI0OlwiR1BTRGVzdEJlYXJpbmdcIiwyNTpcIkdQU0Rlc3REaXN0YW5jZVJlZlwiLDI2OlwiR1BTRGVzdERpc3RhbmNlXCIsMjc6XCJHUFNQcm9jZXNzaW5nTWV0aG9kXCIsMjg6XCJHUFNBcmVhSW5mb3JtYXRpb25cIiwyOTpcIkdQU0RhdGVTdGFtcFwiLDMwOlwiR1BTRGlmZmVyZW50aWFsXCJ9LGI9bS5TdHJpbmdWYWx1ZXM9e0V4cG9zdXJlUHJvZ3JhbTp7MDpcIk5vdCBkZWZpbmVkXCIsMTpcIk1hbnVhbFwiLDI6XCJOb3JtYWwgcHJvZ3JhbVwiLDM6XCJBcGVydHVyZSBwcmlvcml0eVwiLDQ6XCJTaHV0dGVyIHByaW9yaXR5XCIsNTpcIkNyZWF0aXZlIHByb2dyYW1cIiw2OlwiQWN0aW9uIHByb2dyYW1cIiw3OlwiUG9ydHJhaXQgbW9kZVwiLDg6XCJMYW5kc2NhcGUgbW9kZVwifSxNZXRlcmluZ01vZGU6ezA6XCJVbmtub3duXCIsMTpcIkF2ZXJhZ2VcIiwyOlwiQ2VudGVyV2VpZ2h0ZWRBdmVyYWdlXCIsMzpcIlNwb3RcIiw0OlwiTXVsdGlTcG90XCIsNTpcIlBhdHRlcm5cIiw2OlwiUGFydGlhbFwiLDI1NTpcIk90aGVyXCJ9LExpZ2h0U291cmNlOnswOlwiVW5rbm93blwiLDE6XCJEYXlsaWdodFwiLDI6XCJGbHVvcmVzY2VudFwiLDM6XCJUdW5nc3RlbiAoaW5jYW5kZXNjZW50IGxpZ2h0KVwiLDQ6XCJGbGFzaFwiLDk6XCJGaW5lIHdlYXRoZXJcIiwxMDpcIkNsb3VkeSB3ZWF0aGVyXCIsMTE6XCJTaGFkZVwiLDEyOlwiRGF5bGlnaHQgZmx1b3Jlc2NlbnQgKEQgNTcwMCAtIDcxMDBLKVwiLDEzOlwiRGF5IHdoaXRlIGZsdW9yZXNjZW50IChOIDQ2MDAgLSA1NDAwSylcIiwxNDpcIkNvb2wgd2hpdGUgZmx1b3Jlc2NlbnQgKFcgMzkwMCAtIDQ1MDBLKVwiLDE1OlwiV2hpdGUgZmx1b3Jlc2NlbnQgKFdXIDMyMDAgLSAzNzAwSylcIiwxNzpcIlN0YW5kYXJkIGxpZ2h0IEFcIiwxODpcIlN0YW5kYXJkIGxpZ2h0IEJcIiwxOTpcIlN0YW5kYXJkIGxpZ2h0IENcIiwyMDpcIkQ1NVwiLDIxOlwiRDY1XCIsMjI6XCJENzVcIiwyMzpcIkQ1MFwiLDI0OlwiSVNPIHN0dWRpbyB0dW5nc3RlblwiLDI1NTpcIk90aGVyXCJ9LEZsYXNoOnswOlwiRmxhc2ggZGlkIG5vdCBmaXJlXCIsMTpcIkZsYXNoIGZpcmVkXCIsNTpcIlN0cm9iZSByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsNzpcIlN0cm9iZSByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw5OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLDEzOlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDE1OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsMTY6XCJGbGFzaCBkaWQgbm90IGZpcmUsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLDI0OlwiRmxhc2ggZGlkIG5vdCBmaXJlLCBhdXRvIG1vZGVcIiwyNTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGVcIiwyOTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiwzMTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDMyOlwiTm8gZmxhc2ggZnVuY3Rpb25cIiw2NTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsNjk6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDcxOlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDczOlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDc3OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDc5OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsODk6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsOTM6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsOTU6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIn0sU2Vuc2luZ01ldGhvZDp7MTpcIk5vdCBkZWZpbmVkXCIsMjpcIk9uZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsMzpcIlR3by1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsNDpcIlRocmVlLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIiw1OlwiQ29sb3Igc2VxdWVudGlhbCBhcmVhIHNlbnNvclwiLDc6XCJUcmlsaW5lYXIgc2Vuc29yXCIsODpcIkNvbG9yIHNlcXVlbnRpYWwgbGluZWFyIHNlbnNvclwifSxTY2VuZUNhcHR1cmVUeXBlOnswOlwiU3RhbmRhcmRcIiwxOlwiTGFuZHNjYXBlXCIsMjpcIlBvcnRyYWl0XCIsMzpcIk5pZ2h0IHNjZW5lXCJ9LFNjZW5lVHlwZTp7MTpcIkRpcmVjdGx5IHBob3RvZ3JhcGhlZFwifSxDdXN0b21SZW5kZXJlZDp7MDpcIk5vcm1hbCBwcm9jZXNzXCIsMTpcIkN1c3RvbSBwcm9jZXNzXCJ9LFdoaXRlQmFsYW5jZTp7MDpcIkF1dG8gd2hpdGUgYmFsYW5jZVwiLDE6XCJNYW51YWwgd2hpdGUgYmFsYW5jZVwifSxHYWluQ29udHJvbDp7MDpcIk5vbmVcIiwxOlwiTG93IGdhaW4gdXBcIiwyOlwiSGlnaCBnYWluIHVwXCIsMzpcIkxvdyBnYWluIGRvd25cIiw0OlwiSGlnaCBnYWluIGRvd25cIn0sQ29udHJhc3Q6ezA6XCJOb3JtYWxcIiwxOlwiU29mdFwiLDI6XCJIYXJkXCJ9LFNhdHVyYXRpb246ezA6XCJOb3JtYWxcIiwxOlwiTG93IHNhdHVyYXRpb25cIiwyOlwiSGlnaCBzYXR1cmF0aW9uXCJ9LFNoYXJwbmVzczp7MDpcIk5vcm1hbFwiLDE6XCJTb2Z0XCIsMjpcIkhhcmRcIn0sU3ViamVjdERpc3RhbmNlUmFuZ2U6ezA6XCJVbmtub3duXCIsMTpcIk1hY3JvXCIsMjpcIkNsb3NlIHZpZXdcIiwzOlwiRGlzdGFudCB2aWV3XCJ9LEZpbGVTb3VyY2U6ezM6XCJEU0NcIn0sQ29tcG9uZW50czp7MDpcIlwiLDE6XCJZXCIsMjpcIkNiXCIsMzpcIkNyXCIsNDpcIlJcIiw1OlwiR1wiLDY6XCJCXCJ9fSxTPXsxMjA6XCJjYXB0aW9uXCIsMTEwOlwiY3JlZGl0XCIsMjU6XCJrZXl3b3Jkc1wiLDU1OlwiZGF0ZUNyZWF0ZWRcIiw4MDpcImJ5bGluZVwiLDg1OlwiYnlsaW5lVGl0bGVcIiwxMjI6XCJjYXB0aW9uV3JpdGVyXCIsMTA1OlwiaGVhZGxpbmVcIiwxMTY6XCJjb3B5cmlnaHRcIiwxNTpcImNhdGVnb3J5XCJ9O20uZ2V0RGF0YT1mdW5jdGlvbihlLHQpe3JldHVybihlIGluc3RhbmNlb2YgSW1hZ2V8fGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSYmIWUuY29tcGxldGU/ITE6KG4oZSk/dCYmdC5jYWxsKGUpOnMoZSx0KSwhMCl9LG0uZ2V0VGFnPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4oZSk/ZS5leGlmZGF0YVt0XTp2b2lkIDB9LG0uZ2V0QWxsVGFncz1mdW5jdGlvbihlKXtpZighbihlKSlyZXR1cm57fTt2YXIgdCxyPWUuZXhpZmRhdGEsaT17fTtmb3IodCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihpW3RdPXJbdF0pO3JldHVybiBpfSxtLnByZXR0eT1mdW5jdGlvbihlKXtpZighbihlKSlyZXR1cm5cIlwiO3ZhciB0LHI9ZS5leGlmZGF0YSxpPVwiXCI7Zm9yKHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoaSs9XCJvYmplY3RcIj09dHlwZW9mIHJbdF0/clt0XWluc3RhbmNlb2YgTnVtYmVyP3QrXCIgOiBcIityW3RdK1wiIFtcIityW3RdLm51bWVyYXRvcitcIi9cIityW3RdLmRlbm9taW5hdG9yK1wiXVxcclxcblwiOnQrXCIgOiBbXCIrclt0XS5sZW5ndGgrXCIgdmFsdWVzXVxcclxcblwiOnQrXCIgOiBcIityW3RdK1wiXFxyXFxuXCIpO3JldHVybiBpfSxtLnJlYWRGcm9tQmluYXJ5RmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gdShlKX0scj1bXSxpPWZ1bmN0aW9uKCl7cmV0dXJuIG19LmFwcGx5KHQsciksISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0pLmNhbGwodGhpcyl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIG4oZSl7dmFyIHQ9ZS5uYXR1cmFsV2lkdGgsbj1lLm5hdHVyYWxIZWlnaHQ7aWYodCpuPjEwNDg1NzYpe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD1yLmhlaWdodD0xO3ZhciBpPXIuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBpLmRyYXdJbWFnZShlLC10KzEsMCksMD09PWkuZ2V0SW1hZ2VEYXRhKDAsMCwxLDEpLmRhdGFbM119cmV0dXJuITF9ZnVuY3Rpb24gbyhlLHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyLndpZHRoPTEsci5oZWlnaHQ9bjt2YXIgaT1yLmdldENvbnRleHQoXCIyZFwiKTtpLmRyYXdJbWFnZShlLDAsMCk7Zm9yKHZhciBvPWkuZ2V0SW1hZ2VEYXRhKDAsMCwxLG4pLmRhdGEsYT0wLHM9bix1PW47dT5hOyl7dmFyIGM9b1s0Kih1LTEpKzNdOzA9PT1jP3M9dTphPXUsdT1zK2E+PjF9dmFyIGw9dS9uO3JldHVybiAwPT09bD8xOmx9ZnVuY3Rpb24gYShlLHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4gcyhlLHIsdCxuKSxyLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIix0LnF1YWxpdHl8fC44KX1mdW5jdGlvbiBzKGUsdCxyLGkpe3ZhciBhPWUubmF0dXJhbFdpZHRoLHM9ZS5uYXR1cmFsSGVpZ2h0LGM9ci53aWR0aCxsPXIuaGVpZ2h0LGY9dC5nZXRDb250ZXh0KFwiMmRcIik7Zi5zYXZlKCksdSh0LGYsYyxsLHIub3JpZW50YXRpb24pO3ZhciBkPW4oZSk7ZCYmKGEvPTIscy89Mik7dmFyIGg9MTAyNCxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7Zy53aWR0aD1nLmhlaWdodD1oO2Zvcih2YXIgcD1nLmdldENvbnRleHQoXCIyZFwiKSxtPWk/byhlLGEscyk6MSx3PU1hdGguY2VpbChoKmMvYSksdj1NYXRoLmNlaWwoaCpsL3MvbSkseT0wLGI9MDtzPnk7KXtmb3IodmFyIFM9MCxJPTA7YT5TOylwLmNsZWFyUmVjdCgwLDAsaCxoKSxwLmRyYXdJbWFnZShlLC1TLC15KSxmLmRyYXdJbWFnZShnLDAsMCxoLGgsSSxiLHcsdiksUys9aCxJKz13O3krPWgsYis9dn1mLnJlc3RvcmUoKSxnPXA9bnVsbH1mdW5jdGlvbiB1KGUsdCxuLHIsaSl7c3dpdGNoKGkpe2Nhc2UgNTpjYXNlIDY6Y2FzZSA3OmNhc2UgODplLndpZHRoPXIsZS5oZWlnaHQ9bjticmVhaztkZWZhdWx0OmUud2lkdGg9bixlLmhlaWdodD1yfXN3aXRjaChpKXtjYXNlIDI6dC50cmFuc2xhdGUobiwwKSx0LnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgMzp0LnRyYW5zbGF0ZShuLHIpLHQucm90YXRlKE1hdGguUEkpO2JyZWFrO2Nhc2UgNDp0LnRyYW5zbGF0ZSgwLHIpLHQuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA1OnQucm90YXRlKC41Kk1hdGguUEkpLHQuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA2OnQucm90YXRlKC41Kk1hdGguUEkpLHQudHJhbnNsYXRlKDAsLXIpO2JyZWFrO2Nhc2UgNzp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZShuLC1yKSx0LnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgODp0LnJvdGF0ZSgtLjUqTWF0aC5QSSksdC50cmFuc2xhdGUoLW4sMCl9fWZ1bmN0aW9uIGMoZSl7aWYod2luZG93LkJsb2ImJmUgaW5zdGFuY2VvZiBCbG9iKXt2YXIgdD1uZXcgSW1hZ2Usbj13aW5kb3cuVVJMJiZ3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cuVVJMOndpbmRvdy53ZWJraXRVUkwmJndpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMP3dpbmRvdy53ZWJraXRVUkw6bnVsbDtpZighbil0aHJvdyBFcnJvcihcIk5vIGNyZWF0ZU9iamVjdFVSTCBmdW5jdGlvbiBmb3VuZCB0byBjcmVhdGUgYmxvYiB1cmxcIik7dC5zcmM9bi5jcmVhdGVPYmplY3RVUkwoZSksdGhpcy5ibG9iPWUsZT10fWlmKCFlLm5hdHVyYWxXaWR0aCYmIWUubmF0dXJhbEhlaWdodCl7dmFyIHI9dGhpcztlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPXIuaW1hZ2VMb2FkTGlzdGVuZXJzO2lmKGUpe3IuaW1hZ2VMb2FkTGlzdGVuZXJzPW51bGw7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDtuPnQ7dCsrKWVbdF0oKX19LHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzPVtdfXRoaXMuc3JjSW1hZ2U9ZX1jLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oZSx0LG4pe2lmKHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzKXt2YXIgcj10aGlzO3JldHVybiB2b2lkIHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24oKXtyLnJlbmRlcihlLHQsbil9KX10PXR8fHt9O3ZhciBpPXRoaXMuc3JjSW1hZ2Usbz1pLnNyYyx1PW8ubGVuZ3RoLGM9aS5uYXR1cmFsV2lkdGgsbD1pLm5hdHVyYWxIZWlnaHQsZj10LndpZHRoLGQ9dC5oZWlnaHQsaD10Lm1heFdpZHRoLGc9dC5tYXhIZWlnaHQscD10aGlzLmJsb2ImJlwiaW1hZ2UvanBlZ1wiPT09dGhpcy5ibG9iLnR5cGV8fDA9PT1vLmluZGV4T2YoXCJkYXRhOmltYWdlL2pwZWdcIil8fG8uaW5kZXhPZihcIi5qcGdcIik9PT11LTR8fG8uaW5kZXhPZihcIi5qcGVnXCIpPT09dS01O2YmJiFkP2Q9bCpmL2M8PDA6ZCYmIWY/Zj1jKmQvbDw8MDooZj1jLGQ9bCksaCYmZj5oJiYoZj1oLGQ9bCpmL2M8PDApLGcmJmQ+ZyYmKGQ9ZyxmPWMqZC9sPDwwKTt2YXIgbT17d2lkdGg6ZixoZWlnaHQ6ZH07Zm9yKHZhciB3IGluIHQpbVt3XT10W3ddO3ZhciB2PWUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW1nXCI9PT12P2Uuc3JjPWEodGhpcy5zcmNJbWFnZSxtLHApOlwiY2FudmFzXCI9PT12JiZzKHRoaXMuc3JjSW1hZ2UsZSxtLHApLFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub25yZW5kZXImJnRoaXMub25yZW5kZXIoZSksbiYmbigpfSxyPVtdLGk9ZnVuY3Rpb24oKXtyZXR1cm4gY30uYXBwbHkodCxyKSwhKHZvaWQgMCE9PWkmJihlLmV4cG9ydHM9aSkpfSgpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7ZnVuY3Rpb24gdChlKXtmb3IodmFyIHQ9WzE2LDExLDEwLDE2LDI0LDQwLDUxLDYxLDEyLDEyLDE0LDE5LDI2LDU4LDYwLDU1LDE0LDEzLDE2LDI0LDQwLDU3LDY5LDU2LDE0LDE3LDIyLDI5LDUxLDg3LDgwLDYyLDE4LDIyLDM3LDU2LDY4LDEwOSwxMDMsNzcsMjQsMzUsNTUsNjQsODEsMTA0LDExMyw5Miw0OSw2NCw3OCw4NywxMDMsMTIxLDEyMCwxMDEsNzIsOTIsOTUsOTgsMTEyLDEwMCwxMDMsOTldLG49MDs2ND5uO24rKyl7dmFyIHI9RigodFtuXSplKzUwKS8xMDApOzE+cj9yPTE6cj4yNTUmJihyPTI1NSksRFtOW25dXT1yfWZvcih2YXIgaT1bMTcsMTgsMjQsNDcsOTksOTksOTksOTksMTgsMjEsMjYsNjYsOTksOTksOTksOTksMjQsMjYsNTYsOTksOTksOTksOTksOTksNDcsNjYsOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTldLG89MDs2ND5vO28rKyl7dmFyIGE9RigoaVtvXSplKzUwKS8xMDApOzE+YT9hPTE6YT4yNTUmJihhPTI1NSkseFtOW29dXT1hfWZvcih2YXIgcz1bMSwxLjM4NzAzOTg0NSwxLjMwNjU2Mjk2NSwxLjE3NTg3NTYwMiwxLC43ODU2OTQ5NTgsLjU0MTE5NjEsLjI3NTg5OTM3OV0sdT0wLGM9MDs4PmM7YysrKWZvcih2YXIgbD0wOzg+bDtsKyspVVt1XT0xLyhEW05bdV1dKnNbY10qc1tsXSo4KSxDW3VdPTEvKHhbTlt1XV0qc1tjXSpzW2xdKjgpLHUrK31mdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBuPTAscj0wLGk9bmV3IEFycmF5LG89MTsxNj49bztvKyspe2Zvcih2YXIgYT0xO2E8PWVbb107YSsrKWlbdFtyXV09W10saVt0W3JdXVswXT1uLGlbdFtyXV1bMV09byxyKyssbisrO24qPTJ9cmV0dXJuIGl9ZnVuY3Rpb24gcigpe3k9bihXLEgpLGI9bihWLFgpLFM9bih6LHEpLEk9bihRLFkpfWZ1bmN0aW9uIGkoKXtmb3IodmFyIGU9MSx0PTIsbj0xOzE1Pj1uO24rKyl7Zm9yKHZhciByPWU7dD5yO3IrKylBWzMyNzY3K3JdPW4sVFszMjc2NytyXT1bXSxUWzMyNzY3K3JdWzFdPW4sVFszMjc2NytyXVswXT1yO2Zvcih2YXIgaT0tKHQtMSk7LWU+PWk7aSsrKUFbMzI3NjcraV09bixUWzMyNzY3K2ldPVtdLFRbMzI3NjcraV1bMV09bixUWzMyNzY3K2ldWzBdPXQtMStpO2U8PD0xLHQ8PD0xfX1mdW5jdGlvbiBvKCl7Zm9yKHZhciBlPTA7MjU2PmU7ZSsrKWtbZV09MTk1OTUqZSxrW2UrMjU2Pj4wXT0zODQ3MCplLGtbZSs1MTI+PjBdPTc0NzEqZSszMjc2OCxrW2UrNzY4Pj4wXT0tMTEwNTkqZSxrW2UrMTAyND4+MF09LTIxNzA5KmUsa1tlKzEyODA+PjBdPTMyNzY4KmUrODQyMTM3NSxrW2UrMTUzNj4+MF09LTI3NDM5KmUsa1tlKzE3OTI+PjBdPS01MzI5KmV9ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9ZVswXSxuPWVbMV0tMTtuPj0wOyl0JjE8PG4mJihHfD0xPDxPKSxuLS0sTy0tLDA+TyYmKDI1NT09Rz8ocygyNTUpLHMoMCkpOnMoRyksTz03LEc9MCl9ZnVuY3Rpb24gcyhlKXtNLnB1c2goaltlXSl9ZnVuY3Rpb24gdShlKXtzKGU+PjgmMjU1KSxzKDI1NSZlKX1mdW5jdGlvbiBjKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsYyxsLGY9MDtjb25zdCBkPTgsaD02NDtmb3IobD0wO2Q+bDsrK2wpe249ZVtmXSxyPWVbZisxXSxpPWVbZisyXSxvPWVbZiszXSxhPWVbZis0XSxzPWVbZis1XSx1PWVbZis2XSxjPWVbZis3XTt2YXIgZz1uK2MscD1uLWMsbT1yK3Usdz1yLXUsdj1pK3MseT1pLXMsYj1vK2EsUz1vLWEsST1nK2IsUD1nLWIsRj1tK3YsRD1tLXY7ZVtmXT1JK0YsZVtmKzRdPUktRjt2YXIgeD0uNzA3MTA2NzgxKihEK1ApO2VbZisyXT1QK3gsZVtmKzZdPVAteCxJPVMreSxGPXkrdyxEPXcrcDt2YXIgVT0uMzgyNjgzNDMzKihJLUQpLEM9LjU0MTE5NjEqSStVLFQ9MS4zMDY1NjI5NjUqRCtVLEE9LjcwNzEwNjc4MSpGLFI9cCtBLE09cC1BO2VbZis1XT1NK0MsZVtmKzNdPU0tQyxlW2YrMV09UitULGVbZis3XT1SLVQsZis9OH1mb3IoZj0wLGw9MDtkPmw7KytsKXtuPWVbZl0scj1lW2YrOF0saT1lW2YrMTZdLG89ZVtmKzI0XSxhPWVbZiszMl0scz1lW2YrNDBdLHU9ZVtmKzQ4XSxjPWVbZis1Nl07dmFyIEc9bitjLE89bi1jLF89cit1LEI9ci11LEU9aStzLGo9aS1zLGs9bythLE49by1hLFc9RytrLEg9Ry1rLHo9XytFLHE9Xy1FO2VbZl09Vyt6LGVbZiszMl09Vy16O3ZhciBWPS43MDcxMDY3ODEqKHErSCk7ZVtmKzE2XT1IK1YsZVtmKzQ4XT1ILVYsVz1OK2osej1qK0IscT1CK087dmFyIFg9LjM4MjY4MzQzMyooVy1xKSxRPS41NDExOTYxKlcrWCxZPTEuMzA2NTYyOTY1KnErWCxLPS43MDcxMDY3ODEqeixKPU8rSyxaPU8tSztlW2YrNDBdPVorUSxlW2YrMjRdPVotUSxlW2YrOF09SitZLGVbZis1Nl09Si1ZLGYrK312YXIgJDtmb3IobD0wO2g+bDsrK2wpJD1lW2xdKnRbbF0sTFtsXT0kPjA/JCsuNXwwOiQtLjV8MDtyZXR1cm4gTH1mdW5jdGlvbiBsKCl7dSg2NTUwNCksdSgxNikscyg3NCkscyg3MCkscyg3Mykscyg3MCkscygwKSxzKDEpLHMoMSkscygwKSx1KDEpLHUoMSkscygwKSxzKDApfWZ1bmN0aW9uIGYoZSx0KXt1KDY1NDcyKSx1KDE3KSxzKDgpLHUodCksdShlKSxzKDMpLHMoMSkscygxNykscygwKSxzKDIpLHMoMTcpLHMoMSkscygzKSxzKDE3KSxzKDEpfWZ1bmN0aW9uIGQoKXt1KDY1NDk5KSx1KDEzMikscygwKTtmb3IodmFyIGU9MDs2ND5lO2UrKylzKERbZV0pO3MoMSk7Zm9yKHZhciB0PTA7NjQ+dDt0Kyspcyh4W3RdKX1mdW5jdGlvbiBoKCl7dSg2NTQ3NiksdSg0MTgpLHMoMCk7Zm9yKHZhciBlPTA7MTY+ZTtlKyspcyhXW2UrMV0pO2Zvcih2YXIgdD0wOzExPj10O3QrKylzKEhbdF0pO3MoMTYpO2Zvcih2YXIgbj0wOzE2Pm47bisrKXMoeltuKzFdKTtmb3IodmFyIHI9MDsxNjE+PXI7cisrKXMocVtyXSk7cygxKTtmb3IodmFyIGk9MDsxNj5pO2krKylzKFZbaSsxXSk7Zm9yKHZhciBvPTA7MTE+PW87bysrKXMoWFtvXSk7cygxNyk7Zm9yKHZhciBhPTA7MTY+YTthKyspcyhRW2ErMV0pO2Zvcih2YXIgYz0wOzE2MT49YztjKyspcyhZW2NdKX1mdW5jdGlvbiBnKCl7dSg2NTQ5OCksdSgxMikscygzKSxzKDEpLHMoMCkscygyKSxzKDE3KSxzKDMpLHMoMTcpLHMoMCkscyg2MykscygwKX1mdW5jdGlvbiBwKGUsdCxuLHIsaSl7dmFyIG8scz1pWzBdLHU9aVsyNDBdO2NvbnN0IGw9MTYsZj02MyxkPTY0O2Zvcih2YXIgaD1jKGUsdCksZz0wO2Q+ZzsrK2cpUltOW2ddXT1oW2ddO3ZhciBwPVJbMF0tbjtuPVJbMF0sMD09cD9hKHJbMF0pOihvPTMyNzY3K3AsYShyW0Fbb11dKSxhKFRbb10pKTtmb3IodmFyIG09NjM7bT4wJiYwPT1SW21dO20tLSk7aWYoMD09bSlyZXR1cm4gYShzKSxuO2Zvcih2YXIgdyx2PTE7bT49djspe2Zvcih2YXIgeT12OzA9PVJbdl0mJm0+PXY7Kyt2KTt2YXIgYj12LXk7aWYoYj49bCl7dz1iPj40O2Zvcih2YXIgUz0xO3c+PVM7KytTKWEodSk7Yj0xNSZifW89MzI3NjcrUlt2XSxhKGlbKGI8PDQpK0Fbb11dKSxhKFRbb10pLHYrK31yZXR1cm4gbSE9ZiYmYShzKSxufWZ1bmN0aW9uIG0oKXtmb3IodmFyIGU9U3RyaW5nLmZyb21DaGFyQ29kZSx0PTA7MjU2PnQ7dCsrKWpbdF09ZSh0KX1mdW5jdGlvbiB3KGUpe2lmKDA+PWUmJihlPTEpLGU+MTAwJiYoZT0xMDApLFAhPWUpe3ZhciBuPTA7bj01MD5lP01hdGguZmxvb3IoNWUzL2UpOk1hdGguZmxvb3IoMjAwLTIqZSksdChuKSxQPWV9fWZ1bmN0aW9uIHYoKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKTtlfHwoZT01MCksbSgpLHIoKSxpKCksbygpLHcoZSk7KG5ldyBEYXRlKS5nZXRUaW1lKCktdH12YXIgeSxiLFMsSSxQLEY9KE1hdGgucm91bmQsTWF0aC5mbG9vciksRD1uZXcgQXJyYXkoNjQpLHg9bmV3IEFycmF5KDY0KSxVPW5ldyBBcnJheSg2NCksQz1uZXcgQXJyYXkoNjQpLFQ9bmV3IEFycmF5KDY1NTM1KSxBPW5ldyBBcnJheSg2NTUzNSksTD1uZXcgQXJyYXkoNjQpLFI9bmV3IEFycmF5KDY0KSxNPVtdLEc9MCxPPTcsXz1uZXcgQXJyYXkoNjQpLEI9bmV3IEFycmF5KDY0KSxFPW5ldyBBcnJheSg2NCksaj1uZXcgQXJyYXkoMjU2KSxrPW5ldyBBcnJheSgyMDQ4KSxOPVswLDEsNSw2LDE0LDE1LDI3LDI4LDIsNCw3LDEzLDE2LDI2LDI5LDQyLDMsOCwxMiwxNywyNSwzMCw0MSw0Myw5LDExLDE4LDI0LDMxLDQwLDQ0LDUzLDEwLDE5LDIzLDMyLDM5LDQ1LDUyLDU0LDIwLDIyLDMzLDM4LDQ2LDUxLDU1LDYwLDIxLDM0LDM3LDQ3LDUwLDU2LDU5LDYxLDM1LDM2LDQ4LDQ5LDU3LDU4LDYyLDYzXSxXPVswLDAsMSw1LDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDBdLEg9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLHo9WzAsMCwyLDEsMywzLDIsNCwzLDUsNSw0LDQsMCwwLDEsMTI1XSxxPVsxLDIsMywwLDQsMTcsNSwxOCwzMyw0OSw2NSw2LDE5LDgxLDk3LDcsMzQsMTEzLDIwLDUwLDEyOSwxNDUsMTYxLDgsMzUsNjYsMTc3LDE5MywyMSw4MiwyMDksMjQwLDM2LDUxLDk4LDExNCwxMzAsOSwxMCwyMiwyMywyNCwyNSwyNiwzNywzOCwzOSw0MCw0MSw0Miw1Miw1Myw1NCw1NSw1Niw1Nyw1OCw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxLDE1MiwxNTMsMTU0LDE2MiwxNjMsMTY0LDE2NSwxNjYsMTY3LDE2OCwxNjksMTcwLDE3OCwxNzksMTgwLDE4MSwxODIsMTgzLDE4NCwxODUsMTg2LDE5NCwxOTUsMTk2LDE5NywxOTgsMTk5LDIwMCwyMDEsMjAyLDIxMCwyMTEsMjEyLDIxMywyMTQsMjE1LDIxNiwyMTcsMjE4LDIyNSwyMjYsMjI3LDIyOCwyMjksMjMwLDIzMSwyMzIsMjMzLDIzNCwyNDEsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTBdLFY9WzAsMCwzLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sWD1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sUT1bMCwwLDIsMSwyLDQsNCwzLDQsNyw1LDQsNCwwLDEsMiwxMTldLFk9WzAsMSwyLDMsMTcsNCw1LDMzLDQ5LDYsMTgsNjUsODEsNyw5NywxMTMsMTksMzQsNTAsMTI5LDgsMjAsNjYsMTQ1LDE2MSwxNzcsMTkzLDksMzUsNTEsODIsMjQwLDIxLDk4LDExNCwyMDksMTAsMjIsMzYsNTIsMjI1LDM3LDI0MSwyMywyNCwyNSwyNiwzOCwzOSw0MCw0MSw0Miw1Myw1NCw1NSw1Niw1Nyw1OCw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMzAsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTY5LDE3MCwxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMTAsMjExLDIxMiwyMTMsMjE0LDIxNSwyMTYsMjE3LDIxOCwyMjYsMjI3LDIyOCwyMjksMjMwLDIzMSwyMzIsMjMzLDIzNCwyNDIsMjQzLDI0NCwyNDUsMjQ2LDI0NywyNDgsMjQ5LDI1MF07dGhpcy5lbmNvZGU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3QmJncodCksTT1uZXcgQXJyYXksRz0wLE89Nyx1KDY1NDk2KSxsKCksZCgpLGYoZS53aWR0aCxlLmhlaWdodCksaCgpLGcoKTt2YXIgaT0wLG89MCxzPTA7Rz0wLE89Nyx0aGlzLmVuY29kZS5kaXNwbGF5TmFtZT1cIl9lbmNvZGVfXCI7Zm9yKHZhciBjLG0sdixQLEYsRCx4LFQsQSxMPWUuZGF0YSxSPWUud2lkdGgsaj1lLmhlaWdodCxOPTQqUixXPTA7aj5XOyl7Zm9yKGM9MDtOPmM7KXtmb3IoRj1OKlcrYyxEPUYseD0tMSxUPTAsQT0wOzY0PkE7QSsrKVQ9QT4+Myx4PTQqKDcmQSksRD1GK1QqTit4LFcrVD49aiYmKEQtPU4qKFcrMStULWopKSxjK3g+PU4mJihELT1jK3gtTis0KSxtPUxbRCsrXSx2PUxbRCsrXSxQPUxbRCsrXSxfW0FdPShrW21dK2tbdisyNTY+PjBdK2tbUCs1MTI+PjBdPj4xNiktMTI4LEJbQV09KGtbbSs3Njg+PjBdK2tbdisxMDI0Pj4wXStrW1ArMTI4MD4+MF0+PjE2KS0xMjgsRVtBXT0oa1ttKzEyODA+PjBdK2tbdisxNTM2Pj4wXStrW1ArMTc5Mj4+MF0+PjE2KS0xMjg7aT1wKF8sVSxpLHksUyksbz1wKEIsQyxvLGIsSSkscz1wKEUsQyxzLGIsSSksYys9MzJ9Vys9OH1pZihPPj0wKXt2YXIgSD1bXTtIWzFdPU8rMSxIWzBdPSgxPDxPKzEpLTEsYShIKX1pZih1KDY1NDk3KSxuKXtmb3IodmFyIHo9TS5sZW5ndGgscT1uZXcgVWludDhBcnJheSh6KSxWPTA7ej5WO1YrKylxW1ZdPU1bVl0uY2hhckNvZGVBdCgpO009W107KG5ldyBEYXRlKS5nZXRUaW1lKCktcjtyZXR1cm4gcX12YXIgWD1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIrYnRvYShNLmpvaW4oXCJcIikpO009W107KG5ldyBEYXRlKS5nZXRUaW1lKCktcjtyZXR1cm4gWH0sdigpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXRoaXM7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwi5rKh5pyJ5pS25Yiw5Zu+54mH77yM5Y+v6IO955qE6Kej5Yaz5pa55qGI77yaaHR0cHM6Ly9naXRodWIuY29tL3RoaW5rMjAxMS9sb2NhbFJlc2l6ZUlNRy9pc3N1ZXMvN1wiKTt0PXR8fHt9LG4uZGVmYXVsdHM9e3dpZHRoOm51bGwsaGVpZ2h0Om51bGwsZmllbGROYW1lOlwiZmlsZVwiLHF1YWxpdHk6Ljd9LG4uZmlsZT1lO2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuLmRlZmF1bHRzW3JdPXRbcl0pO3JldHVybiB0aGlzLmluaXQoKX1mdW5jdGlvbiBpKGUpe3ZhciB0PW51bGw7cmV0dXJuIHQ9ZT9bXS5maWx0ZXIuY2FsbChkb2N1bWVudC5zY3JpcHRzLGZ1bmN0aW9uKHQpe3JldHVybi0xIT09dC5zcmMuaW5kZXhPZihlKX0pWzBdOmRvY3VtZW50LnNjcmlwdHNbZG9jdW1lbnQuc2NyaXB0cy5sZW5ndGgtMV0sdD90LnNyYy5zdWJzdHIoMCx0LnNyYy5sYXN0SW5kZXhPZihcIi9cIikpOm51bGx9ZnVuY3Rpb24gbyhlKXt2YXIgdDt0PWUuc3BsaXQoXCIsXCIpWzBdLmluZGV4T2YoXCJiYXNlNjRcIik+PTA/YXRvYihlLnNwbGl0KFwiLFwiKVsxXSk6dW5lc2NhcGUoZS5zcGxpdChcIixcIilbMV0pO2Zvcih2YXIgbj1lLnNwbGl0KFwiLFwiKVswXS5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCI7XCIpWzBdLHI9bmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylyW2ldPXQuY2hhckNvZGVBdChpKTtyZXR1cm4gbmV3IHMuQmxvYihbci5idWZmZXJdLHt0eXBlOm59KX1uLnA9aShcImxyelwiKStcIi9cIix3aW5kb3cuVVJMPXdpbmRvdy5VUkx8fHdpbmRvdy53ZWJraXRVUkw7dmFyIGE9bigxKSxzPW4oNCksdT1uKDUpLGM9ZnVuY3Rpb24oZSl7dmFyIHQ9L09TIChcXGQpXy4qIGxpa2UgTWFjIE9TIFgvZy5leGVjKGUpLG49L0FuZHJvaWQgKFxcZC4qPyk7L2cuZXhlYyhlKXx8L0FuZHJvaWRcXC8oXFxkLio/KSAvZy5leGVjKGUpO3JldHVybntvbGRJT1M6dD8rdC5wb3AoKTw4OiExLG9sZEFuZHJvaWQ6bj8rbi5wb3AoKS5zdWJzdHIoMCwzKTw0LjU6ITEsaU9TOi9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvLnRlc3QoZSksYW5kcm9pZDovQW5kcm9pZC9nLnRlc3QoZSksbVFRQnJvd3NlcjovTVFRQnJvd3Nlci9nLnRlc3QoZSl9fShuYXZpZ2F0b3IudXNlckFnZW50KTtyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZmlsZSxuPVwic3RyaW5nXCI9PXR5cGVvZiB0LHI9L15kYXRhOi8udGVzdCh0KSxpPW5ldyBJbWFnZSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksYz1uP3Q6VVJMLmNyZWF0ZU9iamVjdFVSTCh0KTtpZihlLmltZz1pLGUuYmxvYj1jLGUuY2FudmFzPXUsbj9lLmZpbGVOYW1lPXI/XCJiYXNlNjQuanBnXCI6dC5zcGxpdChcIi9cIikucG9wKCk6ZS5maWxlTmFtZT10Lm5hbWUsIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dCl0aHJvdyBuZXcgRXJyb3IoXCLmtY/op4jlmajkuI3mlK/mjIFjYW52YXNcIik7cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKG4sYSl7aS5vbmVycm9yPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IEVycm9yKFwi5Yqg6L295Zu+54mH5paH5Lu25aSx6LSlXCIpO3Rocm93IGEoZSksZX0saS5vbmxvYWQ9ZnVuY3Rpb24oKXtlLl9nZXRCYXNlNjQoKS50aGVuKGZ1bmN0aW9uKGUpe2lmKGUubGVuZ3RoPDEwKXt2YXIgdD1uZXcgRXJyb3IoXCLnlJ/miJBiYXNlNjTlpLHotKVcIik7dGhyb3cgYSh0KSx0fXJldHVybiBlfSkudGhlbihmdW5jdGlvbihyKXt2YXIgaT1udWxsO1wib2JqZWN0XCI9PXR5cGVvZiBlLmZpbGUmJnIubGVuZ3RoPmUuZmlsZS5zaXplPyhpPW5ldyBGb3JtRGF0YSx0PWUuZmlsZSk6KGk9bmV3IHMuRm9ybURhdGEsdD1vKHIpKSxpLmFwcGVuZChlLmRlZmF1bHRzLmZpZWxkTmFtZSx0LGUuZmlsZU5hbWUucmVwbGFjZSgvXFwuLisvZyxcIi5qcGdcIikpLG4oe2Zvcm1EYXRhOmksZmlsZUxlbjordC5zaXplLGJhc2U2NDpyLGJhc2U2NExlbjpyLmxlbmd0aCxvcmlnaW46ZS5maWxlLGZpbGU6dH0pO2Zvcih2YXIgYSBpbiBlKWUuaGFzT3duUHJvcGVydHkoYSkmJihlW2FdPW51bGwpO1VSTC5yZXZva2VPYmplY3RVUkwoZS5ibG9iKX0pfSwhciYmKGkuY3Jvc3NPcmlnaW49XCIqXCIpLGkuc3JjPWN9KX0sci5wcm90b3R5cGUuX2dldEJhc2U2ND1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxuPWUuZmlsZSxyPWUuY2FudmFzO3JldHVybiBuZXcgYShmdW5jdGlvbihpKXt0cnl7dS5nZXREYXRhKFwib2JqZWN0XCI9PXR5cGVvZiBuP246dCxmdW5jdGlvbigpe2Uub3JpZW50YXRpb249dS5nZXRUYWcodGhpcyxcIk9yaWVudGF0aW9uXCIpLGUucmVzaXplPWUuX2dldFJlc2l6ZSgpLGUuY3R4PXIuZ2V0Q29udGV4dChcIjJkXCIpLHIud2lkdGg9ZS5yZXNpemUud2lkdGgsci5oZWlnaHQ9ZS5yZXNpemUuaGVpZ2h0LGUuY3R4LmZpbGxTdHlsZT1cIiNmZmZcIixlLmN0eC5maWxsUmVjdCgwLDAsci53aWR0aCxyLmhlaWdodCksYy5vbGRJT1M/ZS5fY3JlYXRlQmFzZTY0Rm9yT2xkSU9TKCkudGhlbihpKTplLl9jcmVhdGVCYXNlNjQoKS50aGVuKGkpfSl9Y2F0Y2gobyl7dGhyb3cgbmV3IEVycm9yKG8pfX0pfSxyLnByb3RvdHlwZS5fY3JlYXRlQmFzZTY0Rm9yT2xkSU9TPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLHI9ZS5jYW52YXMsaT1lLmRlZmF1bHRzLG89ZS5vcmllbnRhdGlvbjtyZXR1cm4gbmV3IGEoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKCl7dmFyIGE9W24oNildOyhmdW5jdGlvbihuKXt2YXIgYT1uZXcgbih0KTtcIjU2NzhcIi5pbmRleE9mKG8pPi0xP2EucmVuZGVyKHIse3dpZHRoOnIuaGVpZ2h0LGhlaWdodDpyLndpZHRoLG9yaWVudGF0aW9uOm99KTphLnJlbmRlcihyLHt3aWR0aDpyLndpZHRoLGhlaWdodDpyLmhlaWdodCxvcmllbnRhdGlvbjpvfSksZShyLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixpLnF1YWxpdHkpKX0pLmFwcGx5KG51bGwsYSl9KCl9KX0sci5wcm90b3R5cGUuX2NyZWF0ZUJhc2U2ND1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnJlc2l6ZSxyPWUuaW1nLGk9ZS5jYW52YXMsbz1lLmN0eCxzPWUuZGVmYXVsdHMsdT1lLm9yaWVudGF0aW9uO3N3aXRjaCh1KXtjYXNlIDM6by5yb3RhdGUoMTgwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LndpZHRoLC10LmhlaWdodCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDY6by5yb3RhdGUoOTAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsMCwtdC53aWR0aCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDg6by5yb3RhdGUoMjcwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LmhlaWdodCwwLHQuaGVpZ2h0LHQud2lkdGgpO2JyZWFrO2Nhc2UgMjpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5kcmF3SW1hZ2UociwwLDAsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA0Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSgxODAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQud2lkdGgsLXQuaGVpZ2h0LHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNTpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoOTAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsMCwtdC53aWR0aCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDc6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDI3MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC5oZWlnaHQsMCx0LmhlaWdodCx0LndpZHRoKTticmVhaztkZWZhdWx0Om8uZHJhd0ltYWdlKHIsMCwwLHQud2lkdGgsdC5oZWlnaHQpfXJldHVybiBuZXcgYShmdW5jdGlvbihlKXtjLm9sZEFuZHJvaWR8fGMubVFRQnJvd3Nlcnx8IW5hdmlnYXRvci51c2VyQWdlbnQ/IWZ1bmN0aW9uKCl7dmFyIHQ9W24oNyldOyhmdW5jdGlvbih0KXt2YXIgbj1uZXcgdCxyPW8uZ2V0SW1hZ2VEYXRhKDAsMCxpLndpZHRoLGkuaGVpZ2h0KTtlKG4uZW5jb2RlKHIsMTAwKnMucXVhbGl0eSkpfSkuYXBwbHkobnVsbCx0KX0oKTplKGkudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLHMucXVhbGl0eSkpfSl9LHIucHJvdG90eXBlLl9nZXRSZXNpemU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcsbj1lLmRlZmF1bHRzLHI9bi53aWR0aCxpPW4uaGVpZ2h0LG89ZS5vcmllbnRhdGlvbixhPXt3aWR0aDp0LndpZHRoLGhlaWdodDp0LmhlaWdodH07aWYoXCI1Njc4XCIuaW5kZXhPZihvKT4tMSYmKGEud2lkdGg9dC5oZWlnaHQsYS5oZWlnaHQ9dC53aWR0aCksYS53aWR0aDxyfHxhLmhlaWdodDxpKXJldHVybiBhO3ZhciBzPWEud2lkdGgvYS5oZWlnaHQ7Zm9yKHImJmk/cz49ci9pP2Eud2lkdGg+ciYmKGEud2lkdGg9cixhLmhlaWdodD1NYXRoLmNlaWwoci9zKSk6YS5oZWlnaHQ+aSYmKGEuaGVpZ2h0PWksYS53aWR0aD1NYXRoLmNlaWwoaSpzKSk6cj9yPGEud2lkdGgmJihhLndpZHRoPXIsYS5oZWlnaHQ9TWF0aC5jZWlsKHIvcykpOmkmJmk8YS5oZWlnaHQmJihhLndpZHRoPU1hdGguY2VpbChpKnMpLGEuaGVpZ2h0PWkpO2Eud2lkdGg+PTMyNjR8fGEuaGVpZ2h0Pj0yNDQ4OylhLndpZHRoKj0uOCxhLmhlaWdodCo9Ljg7cmV0dXJuIGF9LHdpbmRvdy5scno9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHIoZSx0KX0sd2luZG93Lmxyei52ZXJzaW9uPVwiNC45LjQwXCIsXG5lLmV4cG9ydHM9d2luZG93Lmxyen1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHJ6LmFsbC5idW5kbGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbHJ6L2Rpc3QvbHJ6LmFsbC5idW5kbGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgaE1ldGhvZHMgZnJvbSAnLi9oYW5kbGUtbWV0aG9kcydcbmltcG9ydCBhTWV0aG9kcyBmcm9tICcuL2Fzc2lzdC1tZXRob2RzJ1xuT2JqZWN0LmFzc2lnbihJbnN0YW5jZS5wcm90b3R5cGUsIGhNZXRob2RzLCBhTWV0aG9kcylcbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9pbmRleC5qcyIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5jb25zdCBtZXRob2RzID0ge1xuICAvKlxuICAgKiBmdW5jIGNyZWF0ZSBhIG5ldyByb3cgZWxlbWVudFxuICAgKiBAcGFyYW0ge29ian0gZGF0YVxuICAgKiAgICAgICAgICB0YWcge3N0cn1cbiAgICogICAgICAgICAgY29udGVudGVkaXRhYmxlIHtib29sZWFufSBkZWZhdWx0OiB0cnVlXG4gICAqICAgICAgICAgIGlkIHtib29sZWFufSB3aGV0aGVyIG5lZWQgYSBpZCBkZWZhdWx0OiBmYWxzZVxuICAgKiAgICAgICAgICBiciB7Ym9vbGVhbn0gd2hldGhlciBuZWVkIGEgYnIgZWxlbWVudCBhZnRlciBjdXJyZW50IHJvdyBlbGVtZW50IGRlZmF1bHQ6IGZhbHNlXG4gICAqIEByZXR1cm4gIHtub2RlfVxuICAgKiovXG4gIG5ld1JvdyAoZGF0YSA9IHt9KSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZyB8fCBjb25zdGFudC5ST1dfVEFHKVxuICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICByb3cuZGF0YXNldC5lZGl0b3JSb3cgPSBtZXRob2RzLmNyZWF0ZVJhbmRvbUlkKCdyb3cnKVxuICAgIH1cbiAgICBpZiAoZGF0YS5icikge1xuICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoYnIpXG4gICAgfVxuICAgIGlmIChkYXRhLmNvbnRlbnRlZGl0YWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpXG4gICAgfVxuICAgIHJldHVybiByb3dcbiAgfSxcbiAgLy8gZ2V0IHNlbGVjdGlvblxuICBnZXRTZWxlY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgfSxcbiAgLypcbiAgICogZnVuYyBpbnNlcnQgYSBlbGVtZW50IGFmdGVyIHRhcmdldCBlbGVtZW50XG4gICAqIEBwYXJhbSBuZXdFbGVtZW50IHtub2RlfVxuICAgKiBAcGFyYW0gdGFyZ2V0RWxlbWVudCB7bm9kZX1cbiAgICoqL1xuICBpbnNlcnRBZnRlciAobmV3RWxlbWVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50Lmxhc3RDaGlsZCA9PT0gdGFyZ2V0RWxlbWVudCkge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgdGFyZ2V0RWxlbWVudC5uZXh0U2libGluZylcbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgY3JlYXRlIGEgcmFuZG9tIGlkXG4gICAqIEBwYXJhbSBwcmVmZml4IHtzdHJ9IGlkJ3MgcHJlZmZpeFxuICAgKiBAcmV0dXJuIGlkXG4gICAqKi9cbiAgY3JlYXRlUmFuZG9tSWQgKHByZWZmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZmZpeCB8fCAnaWQnfS0ke01hdGgucmFuZG9tKCkgKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKCl9YFxuICB9LFxuICAvKlxuICAgKiByZXR1cm4gZWRpdCB6b25lIGVsZW1lbnRcbiAgICoqL1xuICBlZGl0Wm9uZSAoKSB7XG4gICAgaWYgKG1ldGhvZHMuZWRpdFpvbmVfY2FjaGUpIHtcbiAgICAgIHJldHVybiBtZXRob2RzLmVkaXRab25lX2NhY2hlXG4gICAgfVxuICAgIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3I9XCJjb250ZW50XCJdJylcbiAgICByZXR1cm4gbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZVxuICB9LFxuICAvKlxuICAgKiBzZXQgcmFuZ2UgYXQgdGFyZ2V0IG5vZGVcbiAgICoqL1xuICBzZXRSYW5nZUF0IChub2RlLCBjaGVja0FsbCkge1xuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgIGlmIChjaGVja0FsbCkge1xuICAgICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgMClcbiAgICAgIGxldCBlbmQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoID8gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA6IChub2RlLmxlbmd0aCA/IG5vZGUubGVuZ3RoIDogMClcbiAgICAgIHJhbmdlLnNldEVuZChub2RlLCBlbmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIDApXG4gICAgICByYW5nZS5zZXRFbmQobm9kZSwgMClcbiAgICB9XG4gICAgbGV0IHNlbGVjdGlvbiA9IG1ldGhvZHMuZ2V0U2VsZWN0aW9uKClcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG4gIH0sXG4gIGdldFJhbmdlICgpIHtcbiAgICBsZXQgcyA9IG1ldGhvZHMuZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5yYW5nZUNvdW50KSB7XG4gICAgICByZXR1cm4gcy5nZXRSYW5nZUF0KDApXG4gICAgfVxuICAgIHJldHVyblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2Fzc2lzdC1tZXRob2RzLmpzIiwiaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IFJIIGZyb20gJy4uL3JhbmdlLWhhbmRsZXInXG4vKlxuICogSW5zcGVjdCBhbmQgaGlnaGxpZ2h0IG1vZHVsZVxuICoqL1xuY2xhc3MgSW5zcGVjdG9yIHtcbiAgY29uc3RydWN0b3IgKG1vZHVsZU5hbWUpIHtcbiAgICB0aGlzLm1vZHVsZU5hbWUgPSBtb2R1bGVOYW1lXG4gIH1cblxuICBhZGQgKHR5cGUsIHBhcmFtKSB7XG4gICAgbGV0IG1vZHVsZU5hbWUgPSB0aGlzLm1vZHVsZU5hbWVcbiAgICBpZiAodHlwZW9mIG1vZHVsZU5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21vZHVsZU5hbWUgbXVzdCBiZSBzdHJpbmcnKVxuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIHRhZyBjYW4gb25seSByZWNlaXZlIGEgc3RyaW5nIHBhcmFtIHdoaWNoIHN0YW5kIGZvciB0YWcgbmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgSW5zcGVjdG9yLnRhZ01hcFtwYXJhbS50b1VwcGVyQ2FzZSgpXSA9IG1vZHVsZU5hbWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgaWYgKCFpc09iaihwYXJhbSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3Igc3R5bGUgY2FuIG9ubHkgcmVjZWl2ZSBhIG9iamVjdCBwYXJhbScpXG4gICAgICAgIH1cbiAgICAgICAgSW5zcGVjdG9yLnN0eWxlc1ttb2R1bGVOYW1lXSA9IHBhcmFtXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRyaWJ1dGUnOlxuICAgICAgICBpZiAoIWlzT2JqKHBhcmFtKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciBhdHRyaWJ1dGUgY2FuIG9ubHkgcmVjZWl2ZSBhIG9iamVjdCBwYXJhbScpXG4gICAgICAgIH1cbiAgICAgICAgSW5zcGVjdG9yLmF0dHJpYnV0ZXNbbW9kdWxlTmFtZV0gPSBwYXJhbVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGluc3BlY3RvciB0eXBlJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGluc3BlY3RfdGFnIChub2RlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gUkgucHJvdG90eXBlLmVkaXRab25lKCkpIHtcbiAgICAgIGxldCBpbnNwZWN0UmVzdWx0ID0gSW5zcGVjdG9yLnRhZ01hcFtub2RlLm5vZGVOYW1lXVxuICAgICAgaWYgKGluc3BlY3RSZXN1bHQgJiYgIXJlc3VsdC5pbmNsdWRlcyhpbnNwZWN0UmVzdWx0KSkge1xuICAgICAgICByZXN1bHQucHVzaChpbnNwZWN0UmVzdWx0KVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpbnNwZWN0X3N0eWxlIChub2RlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gUkgucHJvdG90eXBlLmVkaXRab25lKCkpIHtcbiAgICAgIGlmICghbm9kZS5zdHlsZSkgYnJlYWtcbiAgICAgIE9iamVjdC5rZXlzKEluc3BlY3Rvci5zdHlsZXMpLmZvckVhY2gobW9kdWxlTmFtZSA9PiB7XG4gICAgICAgIGxldCBtb2R1bGVTdHlsZSA9IEluc3BlY3Rvci5zdHlsZXNbbW9kdWxlTmFtZV1cbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlU3R5bGUpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgbGV0IGN1clZhbHVlID0gbW9kdWxlU3R5bGVbaXRlbV1cbiAgICAgICAgICBpZiAodHlwZW9mIGN1clZhbHVlID09PSAnc3RyaW5nJyAmJiBub2RlLnN0eWxlW2l0ZW1dID09PSBjdXJWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gY3VyVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyVmFsdWUpKSB7XG4gICAgICAgICAgICBjdXJWYWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICAgIGlmIChub2RlLnN0eWxlW2l0ZW1dID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IHZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpbnNwZWN0X2F0dHJpYnV0ZSAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBpZiAoIW5vZGUuZ2V0QXR0cmlidXRlKSBicmVha1xuICAgICAgT2JqZWN0LmtleXMoSW5zcGVjdG9yLmF0dHJpYnV0ZXMpLmZvckVhY2gobW9kdWxlTmFtZSA9PiB7XG4gICAgICAgIGxldCBtb2R1bGVBdHRyID0gSW5zcGVjdG9yLmF0dHJpYnV0ZXNbbW9kdWxlTmFtZV1cbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlQXR0cikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBtb2R1bGVBdHRyW2l0ZW1dXG4gICAgICAgICAgbGV0IG5vZGVWYWwgPSBub2RlLmdldEF0dHJpYnV0ZShpdGVtKVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZVZhbCA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIG5vZGVWYWwgPT09IHZhbHVlIHx8IG5vZGVWYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbkluc3BlY3Rvci50YWdNYXAgPSB7fVxuSW5zcGVjdG9yLnN0eWxlcyA9IHt9XG5JbnNwZWN0b3IuYXR0cmlidXRlcyA9IHt9XG5JbnNwZWN0b3IuYWN0aXZlSXRlbXMgPSB7fVxuXG5JbnNwZWN0b3IucnVuID0gKHR5cGUsIG5vZGVMaXN0KSA9PiB7XG4gIGxldCBmbiA9IEluc3BlY3Rvci5wcm90b3R5cGVbJ2luc3BlY3RfJyArIHR5cGVdXG4gIGxldCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIEFycmF5LmlzQXJyYXkobm9kZUxpc3QpKSB7XG4gICAgbm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKGZuKG5vZGUpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5JbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZSA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIC8vIG1lcmdlIHNhbWUgbW9kdWxlIGluc3BlY3QgcmVzdWx0XG4gIGxldCBzYW1lU3R5bGVNYXAgPSB7fVxuICBsaXN0LmZvckVhY2gobSA9PiB7XG4gICAgaWYgKHR5cGVvZiBtID09PSAnc3RyaW5nJykge1xuICAgICAgc2FtZVN0eWxlTWFwW21dID0gc2FtZVN0eWxlTWFwW21dID8gc2FtZVN0eWxlTWFwW21dICsgMSA6IDFcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobSkpIHtcbiAgICAgIG0gPSBBcnJheS5mcm9tKG5ldyBTZXQobSkpXG4gICAgICBtLmZvckVhY2goYW0gPT4ge1xuICAgICAgICBzYW1lU3R5bGVNYXBbYW1dID0gc2FtZVN0eWxlTWFwW2FtXSA/IHNhbWVTdHlsZU1hcFthbV0gKyAxIDogMVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4gIGxldCBtZXJnZWRTdHlsZSA9IFtdXG4gIE9iamVjdC5rZXlzKHNhbWVTdHlsZU1hcCkuZm9yRWFjaChtID0+IHtcbiAgICBpZiAoc2FtZVN0eWxlTWFwW21dID09PSBsaXN0Lmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU3R5bGUucHVzaChtKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1lcmdlZFN0eWxlXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5zcGVjdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlLWluc3BlY3QvaW5kZXguanMiLCJpbXBvcnQgcG9seWZpbGwgZnJvbSAnLi91dGlsL3BvbHlmaWxsLWllJ1xuaW1wb3J0IGJ1aWxkSW5Nb2R1bGVzIGZyb20gJy4vbW9kdWxlcy9pbmRleCdcbmltcG9ydCBidWlsZEluU2hvcnRjdXQgZnJvbSAnLi9zaG9ydGN1dCdcbmltcG9ydCBjb25zdGFudENvbmZpZyBmcm9tICcuL2NvbnN0YW50LWNvbmZpZydcbmltcG9ydCBlZGl0b3IgZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuaW1wb3J0IGJ1aWxkSW5Db21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJ1xuaW1wb3J0IGluaXRFeGNsdWRlUnVsZSBmcm9tICcuL21vZHVsZS1pbnNwZWN0L2xvYWQtbW9kdWxlLWluc3BlY3QtZXhjbHVkZS1ydWxlcydcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9tb2R1bGUtaW5zcGVjdCdcbmltcG9ydCBpMThuWmhDbiBmcm9tICcuL2kxOG4vemgtY24nXG5pbXBvcnQgaTE4bkVuVXMgZnJvbSAnLi9pMThuL2VuLXVzJ1xuaW1wb3J0IHtcbiAgbWl4aW4sXG4gIGlzT2JqXG59IGZyb20gJy4vdXRpbCdcblxucG9seWZpbGwoKVxuXG5jbGFzcyBFZGl0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBtb2R1bGVzID0gWy4uLmJ1aWxkSW5Nb2R1bGVzXVxuICAgIGxldCByZXNlcnZlZE5hbWVzID0ge31cbiAgICBtb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICBpZiAobS5uYW1lKSB7XG4gICAgICAgIHJlc2VydmVkTmFtZXNbbS5uYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7fVxuICAgIGNvbnN0IG1vZHVsZXNNYXAgPSB7fVxuXG4gICAgLy8gZXh0ZW5kZWQgbW9kdWxlc1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuZXh0ZW5kTW9kdWxlcykpIHtcbiAgICAgIG9wdGlvbnMuZXh0ZW5kTW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgIGlmIChtb2R1bGUubmFtZSAmJiAhcmVzZXJ2ZWROYW1lc1ttb2R1bGUubmFtZV0pIHtcbiAgICAgICAgICBtb2R1bGVzLnB1c2gobW9kdWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXh0ZW5kZWQgbW9kdWxlIG11c3QgaGF2ZSBhIG5hbWUgYW5kIHNob3VsZCBub3QgYmUgdGhlIHNhbWUgYXMgYnVpbGRJbiBtb2R1bGUnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1vZHVsZXMgaW4gdXNlXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5tb2R1bGVzKSkge1xuICAgICAgbGV0IG0gPSBbXVxuICAgICAgb3B0aW9ucy5tb2R1bGVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21vZHVsZXNcXCdzIGl0ZW0gbXVzdCBiZSBzdHJpbmcnKVxuICAgICAgICB9XG4gICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgIGlmIChtb2R1bGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgbS5wdXNoKG1vZHVsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgbW9kdWxlcyA9IG1cbiAgICB9XG5cbiAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgIC8vIGNvbmZpZ1xuICAgICAgbGV0IGN1ckNvbmZpZyA9IG9wdGlvbnNbbW9kdWxlLm5hbWVdXG4gICAgICBsZXQgbW9kdWxlQ29uZmlnID0gbW9kdWxlXG4gICAgICBpZiAoaXNPYmooY3VyQ29uZmlnKSAmJiBpc09iaihtb2R1bGVDb25maWcpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obW9kdWxlQ29uZmlnLCBjdXJDb25maWcpXG4gICAgICB9XG5cbiAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gbnVsbFxuICAgICAgbW9kdWxlLmZvcmJpZGRlbiA9IG51bGxcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGV0IGluc3BlY3RvciA9IG5ldyBJbnNwZWN0b3IobW9kdWxlLm5hbWUpXG4gICAgICAgIG1vZHVsZS5pbnNwZWN0KGluc3BlY3Rvci5hZGQuYmluZChpbnNwZWN0b3IpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLnR5cGUgPSAnZm4nXG4gICAgICB9XG4gICAgICBtb2R1bGUuZXhjbHVkZSA9IGluaXRFeGNsdWRlUnVsZShtb2R1bGUsIG1vZHVsZXMpXG5cbiAgICAgIGlmIChtb2R1bGUudGFiKSB7XG4gICAgICAgIG1vZHVsZS50YWIubW9kdWxlID0gbW9kdWxlXG5cbiAgICAgICAgLy8gYWRkIGFjdGl2ZUl0ZW0gcHJvcFxuICAgICAgICBtb2R1bGUudGFiLnByb3BzID0gbW9kdWxlLnRhYi5wcm9wcyA/IE9iamVjdC5hc3NpZ24obW9kdWxlLnRhYi5wcm9wcywge2FjdGl2ZUl0ZW06IFtTdHJpbmcsIEJvb2xlYW5dLCBmb3JiaWRkZW46IEJvb2xlYW59KSA6IHthY3RpdmVJdGVtOiBbU3RyaW5nLCBCb29sZWFuXSwgZm9yYmlkZGVuOiBCb29sZWFufVxuICAgICAgICBtb2R1bGUudGFiTmFtZSA9IGB0YWItJHttb2R1bGUubmFtZX1gXG4gICAgICAgIGNvbXBvbmVudHNbbW9kdWxlLnRhYk5hbWVdID0gbW9kdWxlLnRhYlxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaWNvbnMgJiYgb3B0aW9ucy5pY29uc1ttb2R1bGUubmFtZV0pIHtcbiAgICAgICAgbW9kdWxlLmljb24gPSBvcHRpb25zLmljb25zW21vZHVsZS5uYW1lXVxuICAgICAgfVxuICAgICAgbW9kdWxlLmhhc1RhYiA9ICEhbW9kdWxlLnRhYlxuXG4gICAgICAvLyBwcmV2ZW50IHZ1ZSBzeW5jXG4gICAgICBkZWxldGUgbW9kdWxlLnRhYlxuXG4gICAgICBtb2R1bGVzTWFwW21vZHVsZS5uYW1lXSA9IG1vZHVsZVxuICAgIH0pXG5cbiAgICAvLyBpMThuXG4gICAgY29uc3QgaTE4biA9IHsnemgtY24nOiBpMThuWmhDbiwgJ2VuLXVzJzogaTE4bkVuVXN9XG4gICAgY29uc3QgY3VzdG9tSTE4biA9IG9wdGlvbnMuaTE4biB8fCB7fVxuICAgIE9iamVjdC5rZXlzKGN1c3RvbUkxOG4pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaTE4bltrZXldID0gaTE4bltrZXldID8gT2JqZWN0LmFzc2lnbihpMThuW2tleV0sIGN1c3RvbUkxOG5ba2V5XSkgOiBjdXN0b21JMThuW2tleV1cbiAgICB9KVxuICAgIGNvbnN0IGxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZSB8fCAnZW4tdXMnXG4gICAgY29uc3QgbG9jYWxlID0gaTE4bltsYW5ndWFnZV1cblxuICAgIC8vIHNob3J0Y3V0XG4gICAgb3B0aW9ucy5zaG9ydGN1dCA9IE9iamVjdC5hc3NpZ24oYnVpbGRJblNob3J0Y3V0LCBvcHRpb25zLnNob3J0Y3V0IHx8IHt9KVxuICAgIGNvbnN0IHNob3J0Y3V0ID0ge31cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLnNob3J0Y3V0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgaXRlbSA9IG9wdGlvbnMuc2hvcnRjdXRba2V5XVxuICAgICAgbGV0IGtleUNvZGUgPSBpdGVtLmtleUNvZGVcbiAgICAgIHNob3J0Y3V0W2tleUNvZGVdID0gc2hvcnRjdXRba2V5Q29kZV0gfHwgW11cbiAgICAgIHNob3J0Y3V0W2tleUNvZGVdLnB1c2goaXRlbSlcbiAgICAgIGl0ZW0ubmFtZSA9IGtleVxuICAgIH0pXG5cbiAgICAvLyBtZXJnZSBjb21tYW5kc1xuICAgIGlmIChpc09iaihvcHRpb25zLmNvbW1hbmRzKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihidWlsZEluQ29tbWFuZHMsIG9wdGlvbnMuY29tbWFuZHMpXG4gICAgfVxuXG4gICAgLy8gc3BlbGxjaGVja1xuICAgIGNvbnN0IHNwZWxsY2hlY2sgPSBvcHRpb25zLnNwZWxsY2hlY2sgfHwgZmFsc2VcblxuICAgIGNvbnN0IGNvbXBvID0gbWl4aW4oZWRpdG9yLCB7XG4gICAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHttb2R1bGVzLCBsb2NhbGUsIHNob3J0Y3V0LCBtb2R1bGVzTWFwLCBzcGVsbGNoZWNrLCBjb25zdGFudENvbmZpZ31cbiAgICAgIH0sXG4gICAgICBjb21wb25lbnRzXG4gICAgfSlcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbXBvKVxuICB9XG5cbiAgLyoqXG4gICAqIGdsb2JhbCBpbnN0YWxsXG4gICAqIEBwYXJhbSBWdWVcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHN0YXRpYyBpbnN0YWxsKFZ1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgVnVlLmNvbXBvbmVudChvcHRpb25zLm5hbWUgfHwgJ215LXZ1ZS1lZGl0b3InLCBuZXcgRWRpdG9yKG9wdGlvbnMpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuXG4vLyB0byBjaGFuZ2UgQmFiZWw2IGV4cG9ydCdzIHJlc3VsdFxubW9kdWxlLmV4cG9ydHMgPSBFZGl0b3JcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICAgIGlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdpbmNsdWRlcycsIHtcbiAgICAgICAgICAgIHZhbHVlKHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIDEuIExldCBPIGJlID8gVG9PYmplY3QodGhpcyB2YWx1ZSkuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvID0gT2JqZWN0KHRoaXMpXG5cbiAgICAgICAgICAgICAgICAvLyAyLiBMZXQgbGVuIGJlID8gVG9MZW5ndGgoPyBHZXQoTywgXCJsZW5ndGhcIikpLlxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IG8ubGVuZ3RoID4+PiAwXG5cbiAgICAgICAgICAgICAgICAvLyAzLiBJZiBsZW4gaXMgMCwgcmV0dXJuIGZhbHNlLlxuICAgICAgICAgICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gNC4gTGV0IG4gYmUgPyBUb0ludGVnZXIoZnJvbUluZGV4KS5cbiAgICAgICAgICAgICAgICAvLyAgICAoSWYgZnJvbUluZGV4IGlzIHVuZGVmaW5lZCwgdGhpcyBzdGVwIHByb2R1Y2VzIHRoZSB2YWx1ZSAwLilcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gZnJvbUluZGV4IHwgMFxuXG4gICAgICAgICAgICAgICAgLy8gNS4gSWYgbiDiiaUgMCwgdGhlblxuICAgICAgICAgICAgICAgIC8vICBhLiBMZXQgayBiZSBuLlxuICAgICAgICAgICAgICAgIC8vIDYuIEVsc2UgbiA8IDAsXG4gICAgICAgICAgICAgICAgLy8gIGEuIExldCBrIGJlIGxlbiArIG4uXG4gICAgICAgICAgICAgICAgLy8gIGIuIElmIGsgPCAwLCBsZXQgayBiZSAwLlxuICAgICAgICAgICAgICAgIGxldCBrID0gTWF0aC5tYXgobiA+PSAwID8gbiA6IGxlbiAtIE1hdGguYWJzKG4pLCAwKVxuXG4gICAgICAgICAgICAgICAgLy8gNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IGVsZW1lbnRLIGJlIHRoZSByZXN1bHQgb2YgPyBHZXQoTywgISBUb1N0cmluZyhrKSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIGIuIElmIFNhbWVWYWx1ZVplcm8oc2VhcmNoRWxlbWVudCwgZWxlbWVudEspIGlzIHRydWUsIHJldHVybiB0cnVlLlxuICAgICAgICAgICAgICAgICAgICAvLyBjLiBJbmNyZWFzZSBrIGJ5IDEuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6ID09PSBwcm92aWRlcyB0aGUgY29ycmVjdCBcIlNhbWVWYWx1ZVplcm9cIiBjb21wYXJpc29uIG5lZWRlZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICBpZiAob1trXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBrKytcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyA4LiBSZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gdGV4dC5jb250YWlucygpXG4gICAgaWYgKCFUZXh0LnByb3RvdHlwZS5jb250YWlucykge1xuICAgICAgICBUZXh0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzID09PSBub2RlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BvbHlmaWxsLWllLmpzIiwiaW1wb3J0IGFsaWduIGZyb20gJy4vYWxpZ24vaW5kZXgnXG5pbXBvcnQgZm9udCBmcm9tICcuL2ZvbnQvaW5kZXgnXG5pbXBvcnQgZnVsbFNjcmVlbiBmcm9tICcuL2Z1bGwtc2NyZWVuL2luZGV4J1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UvaW5kZXgnXG5pbXBvcnQgYm9sZCBmcm9tICcuL2JvbGQnXG5pbXBvcnQgaXRhbGljIGZyb20gJy4vaXRhbGljJ1xuaW1wb3J0IHVuZGVybGluZSBmcm9tICcuL3VuZGVybGluZSdcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcbmltcG9ydCBxdW90ZSBmcm9tICcuL3F1b3RlJ1xuaW1wb3J0IGluZGVudCBmcm9tICcuL2luZGVudCdcbmltcG9ydCBvdXRkZW50IGZyb20gJy4vb3V0ZGVudCdcbmltcG9ydCB1bCBmcm9tICcuL3VsJ1xuaW1wb3J0IG9sIGZyb20gJy4vb2wnXG5pbXBvcnQgbGluZXRocm91Z2ggZnJvbSAnLi9saW5ldGhyb3VnaCdcbmltcG9ydCBpdG9kbyBmcm9tICcuL2ljb3VydC10b2RvJ1xuXG5cbi8qKlxuICogYnVpbGQtaW4gbW9kdWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZm9udCxcbiAgYWxpZ24sXG4gIGltYWdlLFxuICBmdWxsU2NyZWVuLFxuICBib2xkLFxuICBpdGFsaWMsXG4gIHVuZGVybGluZSxcbiAgdG9kbyxcbiAgcXVvdGUsXG4gIGluZGVudCxcbiAgb3V0ZGVudCxcbiAgdWwsXG4gIG9sLFxuICBsaW5ldGhyb3VnaCxcbiAgaXRvZG9cbl1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYWxpZ24nLFxuICBpY29uOiAnaXVpLWljb24gaXVpLWljb24tYWxpZ24nLFxuICB0YWIsXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnc3R5bGUnLCB7XG4gICAgICAndGV4dEFsaWduJzogWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J11cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi9pbmRleC5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi5odG1sJ1xuZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZSxcbiAgd2F0Y2g6IHtcbiAgICBhY3RpdmVJdGVtIChuKSB7XG4gICAgICBuID0gbiB8fCAnbGVmdCdcbiAgICAgIGxldCBtYXAgPSB7XG4gICAgICAgICdsZWZ0JzogMixcbiAgICAgICAgJ2NlbnRlcic6IDAsXG4gICAgICAgICdyaWdodCc6IDFcbiAgICAgIH1cbiAgICAgIGxldCBpbmRleCA9IG1hcFtuXVxuICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLmFsaWduTWFwKVxuICAgICAgbGV0IGtleSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICB0aGlzLmNob29zZWQgPSB7XG4gICAgICAgIGljb246ICdhbGlnbi0nICsgbixcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5hbGlnbk1hcFtrZXldXG4gICAgICB9XG4gICAgICB0aGlzLnNldEFsaWduKGluZGV4KVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsaWduTWFwOiB7XG4gICAgICAgICflsYXkuK0nOiAnanVzdGlmeUNlbnRlcicsXG4gICAgICAgICflsYXlj7MnOiAnanVzdGlmeVJpZ2h0JyxcbiAgICAgICAgJ+WxheW3pic6ICdqdXN0aWZ5TGVmdCdcbiAgICAgIH0sXG4gICAgICBjaG9vc2VkOiB7fVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldEFsaWduIChpbmRleCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLmFsaWduTWFwKVxuICAgICAgbGV0IGtleSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQodGhpcy5hbGlnbk1hcFtrZXldKVxuICAgICAgdGhpcy4kcGFyZW50LnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgdGhpcy4kcGFyZW50Lm1vZHVsZUluc3BlY3QoKVxuICAgIH0sXG4gICAgY2hhbmdlQWxpZ24gKCkge1xuICAgICAgaWYgKHRoaXMuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIGxldCBwcmVfaW5kZXggPSAhaXNOYU4odGhpcy5jaG9vc2VkLmluZGV4KSA/IHRoaXMuY2hvb3NlZC5pbmRleCA6IC0xXG4gICAgICBsZXQgbGVuID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcCkubGVuZ3RoXG4gICAgICBsZXQgdGFyZ2V0X2luZGV4XG4gICAgICBpZiAocHJlX2luZGV4ICsgMSA9PT0gbGVuKSB7XG4gICAgICAgIHRhcmdldF9pbmRleCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldF9pbmRleCA9ICsrcHJlX2luZGV4XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFsaWduKHRhcmdldF9pbmRleClcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSBjbGFzcz0nYnRuJyBAY2xpY2s9XFxcImNoYW5nZUFsaWduKClcXFwiIDp0aXRsZT1cXFwiJ+Wvuem9kOaWueW8jzonICsgKGNob29zZWQua2V5IHx8ICflsYXlt6YnKVxcXCI+XFxuICA8c3BhbiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IHN1YlxcXCIgY2xhc3M9XFxcImZhXFxcIiA6Y2xhc3M9XFxcIidmYS0nICsgKGNob29zZWQuaWNvbiB8fCAnYWxpZ24tbGVmdCcpXFxcIj48L3NwYW4+XFxuPC9saT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZm9udCcsXG4gIGljb246ICdpdWktaWNvbiBpdWktaWNvbi1zcGFubmVyJyxcbiAgdGFiLFxuICBjb25maWcsXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnc3R5bGUnLCB7XG4gICAgICBmb250U2l6ZTogWyd4eC1sYXJnZScsICd4LWxhcmdlJywgJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCddXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC9pbmRleC5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi5odG1sJ1xuaW1wb3J0ICcuL3N0eWxlLnN0eWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlSXRlbSAobikge1xuICAgICAgbGV0IHZhbCA9IHRoaXMuZm9udEF0dHJNYXBbbl1cbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VkID0gdmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNob29zZWQgPSB0aGlzLmZvbnRBdHRyTWFwW3RoaXMuZm9udEF0dHJNYXBbJ2RlZmF1bHQnXV1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb250QXR0ck1hcDoge30sXG4gICAgICBjdXJNb2R1bGU6IG51bGwsXG4gICAgICBjaG9vc2VkOiB7fSxcbiAgICAgIHNob3dMaXN0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dMaXN0Rm4gKCkge1xuICAgICAgaWYgKHRoaXMuJHJlZnMudGFiLmNsYXNzTGlzdC5jb250YWlucygnZm9yYmlkZGVuJykpIHJldHVyblxuICAgICAgdGhpcy5zaG93TGlzdCA9IHRydWVcbiAgICB9LFxuICAgIGNoYW5nZUF0dHIgKHZhbCkge1xuICAgICAgdGhpcy5jaG9vc2VkID0gdmFsXG4gICAgICAvLyB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2xpbmVIZWlnaHQnLCB2YWwubGluZUhlaWdodClcbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCB2YWwuZm9udFNpemUpXG4gICAgICB0aGlzLnNob3dMaXN0ID0gZmFsc2VcbiAgICB9LFxuICAgIHNldEZvbnROYW1lIChuYW1lKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgbmFtZSlcbiAgICB9LFxuICAgIHNldEhlYWRpbmcgKGhlYWRpbmcpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBoZWFkaW5nKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5jdXJNb2R1bGUgPSB0aGlzLiRwYXJlbnQubW9kdWxlc01hcFsnZm9udCddXG4gICAgdGhpcy5mb250QXR0ck1hcCA9IHRoaXMuY3VyTW9kdWxlLmNvbmZpZ1xuICAgIHRoaXMuY2hvb3NlZCA9IHRoaXMuZm9udEF0dHJNYXBbdGhpcy5mb250QXR0ck1hcFsnZGVmYXVsdCddXVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L3RhYi5qcyIsImV4cG9ydCBkZWZhdWx0IFwiPGxpIHJlZj1cXFwidGFiXFxcIiBjbGFzcz1cXFwiZm9udC10YWIgdGFiLXdpdGgtZHJvcGRvd25cXFwiIEBtb3VzZWVudGVyPVxcXCJzaG93TGlzdEZuXFxcIiBAbW91c2VsZWF2ZT1cXFwic2hvd0xpc3QgPSBmYWxzZVxcXCI+XFxuICAgIHt7Y2hvb3NlZC5uYW1lfX1cXG4gICAgPGkgY2xhc3M9XFxcImljb24gZmEgZmEtY2FyZXQtZG93blxcXCI+PC9pPlxcbiAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiB2LWlmPVxcXCJzaG93TGlzdFxcXCI+XFxuICAgICAgICA8bGkgdi1pZj1cXFwidmFsLm5hbWVcXFwiIHYtZm9yPVxcXCIodmFsLCBrZXkpIGluIGZvbnRBdHRyTWFwXFxcIiBAY2xpY2s9XFxcImNoYW5nZUF0dHIodmFsKVxcXCI+e3sgdmFsLm5hbWUgfX08L2xpPlxcbiAgICA8L3VsPlxcbjwvbGk+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9mb250L3RhYi5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIHRocm91Z2ggZm9udCB0YWdcbiAgJ3h4LWxhcmdlJzoge1xuICAgIGZvbnRTaXplOiA2LFxuICAgIG5hbWU6ICfmoIfpopgnXG4gIH0sXG4gICd4LWxhcmdlJzoge1xuICAgIGZvbnRTaXplOiA1LFxuICAgIG5hbWU6ICflia/moIfpopgnXG4gIH0sXG4gICdsYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNCxcbiAgICBuYW1lOiAn5bCP5qCH6aKYJ1xuICB9LFxuICAnbWVkaXVtJzoge1xuICAgIGZvbnRTaXplOiAzLFxuICAgIG5hbWU6ICfmraPmlocnXG4gIH0sXG4gIGRlZmF1bHQ6ICdtZWRpdW0nXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvY29uZmlnLmpzIiwiLyoqXG4gKiB0b2dnbGUgZnVsbCBzY3JlZW4gbW9kZVxuICogQ3JlYXRlZCBieSBwZWFrIG9uIDE2LzgvMTguXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZnVsbC1zY3JlZW4nLFxuICAgIGljb246ICdmYSBmYS1hcnJvd3MtYWx0JyxcbiAgICBpMThuOiAnZnVsbCBzY3JlZW4nLFxuICAgIGhhbmRsZXIocmgpIHtcbiAgICAgICAgcmguZWRpdG9yLnRvZ2dsZUZ1bGxTY3JlZW4oKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW1hZ2UnLFxuICBpMThuOiAnaW1hZ2UnLFxuICBjYW5VcGxvYWRTYW1lSW1hZ2U6IHRydWUsXG4gIGltZ09jY3VweU5ld1JvdzogZmFsc2UsXG4gIG1heFNpemU6IDUxMjAgKiAxMDI0LFxuICBjb21wcmVzczoge1xuICAgIC8vIG1heCB3aWR0aFxuICAgIHdpZHRoOiAxNjAwLFxuICAgIC8vIG1heCBoZWlnaHRcbiAgICBoZWlnaHQ6IDE2MDAsXG4gICAgLy8gY3BtcHJlc3MgcXVhbGl0eSAwIC0gMVxuICAgIHF1YWxpdHk6IDAuOFxuICB9LFxuICB0YWIsXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ2ltZycpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ltYWdlL2luZGV4LmpzIiwiaW1wb3J0IGxyeiBmcm9tICdscnonXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3RhYi1pbWFnZScsXG4gICAgICBjdXJNb2R1bGU6IG51bGxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBwaWNrKCkge1xuICAgICAgaWYgKHRoaXMuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIHRoaXMuJHJlZnMuZmlsZS5jbGljaygpXG4gICAgfSxcbiAgICBwcm9jZXNzKGUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLiRyZWZzLmZpbGUuZmlsZXNbMF1cbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCBmaWxlKVxuICAgICAgaWYgKHRoaXMuY3VyTW9kdWxlLmNhblVwbG9hZFNhbWVJbWFnZSkge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmN1ck1vZHVsZSA9IHRoaXMuJHBhcmVudC5tb2R1bGVzTWFwWydpbWFnZSddXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5qcyIsImV4cG9ydCBkZWZhdWx0IFwiPGxpIHJlZj1cXFwiaXRlbVxcXCIgY2xhc3M9XFxcImJ0blxcXCI+XFxuICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgcmVmPVxcXCJmaWxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTtcXFwiIEBjaGFuZ2U9XFxcInByb2Nlc3NcXFwiIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCI+XFxuICA8c3BhbiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IHN1YlxcXCIgY2xhc3M9XFxcImZhIGZhLXBpY3R1cmUtb1xcXCIgQGNsaWNrPVxcXCJwaWNrXFxcIj48L3NwYW4+XFxuPC9saT5cXG5cXG5cXG5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdib2xkJyxcbiAgaWNvbjogJ2ZhIGZhLWJvbGQnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2JvbGQnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdTVFJPTkcnKS5hZGQoJ3RhZycsICdCJykuYWRkKCdzdHlsZScseydmb250LXdlaWdodCc6ICdib2xkJ30pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2JvbGQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpdGFsaWMnLFxuICBpY29uOiAnZmEgZmEtaXRhbGljJyxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2l0YWxpYycpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ0knKS5hZGQoJ3N0eWxlJywgeydmb250U3R5bGUnOiAnaXRhbGljJ30pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2l0YWxpYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3VuZGVybGluZScsXG4gIGljb246ICdmYSBmYS11bmRlcmxpbmUnLFxuICBoYW5kbGVyIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgndW5kZXJsaW5lJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnVScpLmFkZCgnc3R5bGUnLCB7J3RleHQtZGVjb3JhdGlvbi1saW5lJzogJ3VuZGVybGluZSd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy91bmRlcmxpbmUvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd0b2RvJyxcbiAgaWNvbjogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gIGV4Y2x1ZGU6ICdBTExfQlVUX01ZU0VMRicsXG4gIG1vdW50ZWQgKGVkaXRvcikge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5pdFRvZG8nKVxuICB9LFxuICBoYW5kbGVyIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgndG9kbycsIHtcbiAgICAgIGluc2VydEFmdGVyOiByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICAgIHBsYWNlaG9sZGVyOiAn5b6F5Yqe5LqL6aG5J1xuICAgIH0pXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXRvZG8nOiAnJ1xuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3RvZG8vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdxdW90ZScsXG4gIGljb246ICdmYSBmYS1xdW90ZS1yaWdodCcsXG4gIHNob3c6IHRydWUsXG4gIG1vdW50ZWQgKGVkaXRvcikge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5pdFF1b3RlJylcbiAgfSxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoLCBtb2R1bGUpIHtcbiAgICBsZXQgaXNJblF1b3RlID0gcmguZWRpdG9yLmFjdGl2ZU1vZHVsZXMuaW5jbHVkZXMobW9kdWxlLm5hbWUpXG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdxdW90ZScsIGlzSW5RdW90ZSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItcXVvdGUnOiAnJ1xuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3F1b3RlL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kZW50JyxcbiAgaWNvbjogJ2ZhIGZhLWluZGVudCcsXG4gIHR5cGU6ICdmbicsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaW5kZW50JylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW5kZW50L2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kZW50JyxcbiAgaWNvbjogJ2ZhIGZhLW91dGRlbnQnLFxuICB0eXBlOiAnZm4nLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ291dGRlbnQnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9vdXRkZW50L2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndWwnLFxuICBpY29uOiAnZmEgZmEtbGlzdC11bCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1VMJylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdWwvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvbCcsXG4gIGljb246ICdmYSBmYS1saXN0LW9sJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ09MJylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvb2wvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsaW5ldGhyb3VnaCcsXG4gIGljb246ICdmYSBmYS1zdHJpa2V0aHJvdWdoJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdzdHJpa2VUaHJvdWdoJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnU1RSSUtFJykuYWRkKCdzdHlsZScsIHsndGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbGluZS10aHJvdWdoJ30pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2xpbmV0aHJvdWdoL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaXRvZG8nLFxuICBpY29uOiAnaXVpLWljb24gaXVpLWljb24tY2hlY2tlZC1saW5lJyxcbiAgZXhjbHVkZTogJ0FMTF9CVVRfTVlTRUxGJyxcbiAgbW91bnRlZCAoZWRpdG9yKSB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbml0aVRvZG8nKVxuICB9LFxuICBoYW5kbGVyIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaXRvZG8nLCB7XG4gICAgICBpbnNlcnRBZnRlcjogcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXG4gICAgICBwbGFjZWhvbGRlcjogJ+W+heWKnuS6i+mhuSdcbiAgICB9KVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci10b2RvJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pY291cnQtdG9kby9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgb3V0ZGVudDoge1xuICAgIGtleUNvZGU6IDksXG4gICAgc2hpZnRLZXk6IHRydWUsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnb3V0ZGVudCcpXG4gICAgfVxuICB9LFxuICBpbmRlbnQ6IHtcbiAgICBrZXlDb2RlOiA5LFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luZGVudCcpXG4gICAgfVxuICB9LFxuICBkZWxldGU6IHtcbiAgICBrZXlDb2RlOiA4LFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdkZWxldGUnLCBlLCB0cnVlKVxuICAgIH1cbiAgfSxcbiAgZW50ZXI6IHtcbiAgICBrZXlDb2RlOiAxMyxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnZW50ZXInLCBlLCB0cnVlKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Nob3J0Y3V0L2luZGV4LmpzIiwiaW1wb3J0IFJIIGZyb20gJy4uL3JhbmdlLWhhbmRsZXInXG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zdHlsJ1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZWRpdG9yLmh0bWwnXG5pbXBvcnQgZHJhZ1BpYyBmcm9tICcuL2RyYWctcGljJ1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICcuLi9tb2R1bGUtaW5zcGVjdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZSxcbiAgcHJvcHM6IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMCxcbiAgICAgIHZhbGlkYXRvcih2YWwpe1xuICAgICAgICByZXR1cm4gdmFsID49IDEwMFxuICAgICAgfVxuICAgIH0sXG4gICAgekluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDAwXG4gICAgfSxcbiAgICBhdXRvSGVpZ2h0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIGRyYWdQaWNcbiAgfSxcbiAgZGF0YSgpe1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGVzOiB7fSxcbiAgICAgIGFjdGl2ZU1vZHVsZXM6IFtdLFxuICAgICAgYWxsQWN0aXZlTW9kdWxlczogW10sXG4gICAgICBmdWxsU2NyZWVuOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb250ZW50KHZhbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudC5pbm5lckhUTUxcbiAgICAgIGlmICh2YWwgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmlubmVySFRNTCA9IHZhbFxuICAgICAgfVxuICAgIH0sXG4gICAgZnVsbFNjcmVlbih2YWwpe1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpc1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb21wb25lbnQucGFyZW50RWwgPSBjb21wb25lbnQuJGVsLnBhcmVudE5vZGVcbiAgICAgICAgY29tcG9uZW50Lm5leHRFbCA9IGNvbXBvbmVudC4kZWwubmV4dFNpYmxpbmdcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQuJGVsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChjb21wb25lbnQubmV4dEVsKSB7XG4gICAgICAgIGNvbXBvbmVudC5wYXJlbnRFbC5pbnNlcnRCZWZvcmUoY29tcG9uZW50LiRlbCwgY29tcG9uZW50Lm5leHRFbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb21wb25lbnQucGFyZW50RWwuYXBwZW5kQ2hpbGQoY29tcG9uZW50LiRlbClcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29udGVudFN0eWxlKCl7XG4gICAgICBjb25zdCBzdHlsZSA9IHt9XG4gICAgICBpZiAodGhpcy5mdWxsU2NyZWVuKSB7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuJHJlZnMudG9vbGJhci5jbGllbnRIZWlnaHQgLSAxfXB4YFxuICAgICAgICByZXR1cm4gc3R5bGVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3RoaXMuaGVpZ2h0fXB4YFxuICAgICAgICByZXR1cm4gc3R5bGVcbiAgICAgIH1cbiAgICAgIHN0eWxlWydtaW4taGVpZ2h0J10gPSBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0gKCkge1xuICAgICAgcmV0dXJuIEluc3BlY3Rvci5hY3RpdmVJdGVtc1xuICAgIH0sXG4gICAgY2xlYXJBY3RpdmVNb2R1bGVJdGVtICgpIHtcbiAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtcyA9IHt9XG4gICAgfSxcbiAgICBoYW5kbGVEcmFnUGljIChmaWxlKSB7XG4gICAgICBpZiAoKHRoaXMubW9kdWxlc01hcFsnaW1hZ2UnXSAmJiB0aGlzLm1vZHVsZXNNYXBbJ2ltYWdlJ10uZHJhZyAhPT0gZmFsc2UpIHx8ICF0aGlzLm1vZHVsZXNNYXBbJ2ltYWdlJ10pIHtcbiAgICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgICAgdGhpcy5leGVjQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCBmaWxlKVxuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRnVsbFNjcmVlbigpe1xuICAgICAgdGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlblxuICAgIH0sXG4gICAgZW5hYmxlRnVsbFNjcmVlbigpe1xuICAgICAgdGhpcy5mdWxsU2NyZWVuID0gdHJ1ZVxuICAgIH0sXG4gICAgZXhpdEZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IGZhbHNlXG4gICAgfSxcbiAgICBmb2N1cygpe1xuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmZvY3VzKClcbiAgICB9LFxuICAgIGJsdXIoKXtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5ibHVyKClcbiAgICB9LFxuICAgIGV4ZWNDb21tYW5kKGNvbW1hbmQsIGFyZywgZXhlY09ubHkpe1xuICAgICAgaWYgKCFleGVjT25seSkge1xuICAgICAgICB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgbmV3IFJIKHRoaXMucmFuZ2UsIHRoaXMpLmV4ZWNDb21tYW5kKGNvbW1hbmQsIGFyZylcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgfSxcbiAgICBzYXZlQ3VycmVudFJhbmdlKCl7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxuICAgICAgICBsZXQgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lclxuICAgICAgICBsZXQgZW5kID0gcmFuZ2UuZW5kQ29udGFpbmVyXG4gICAgICAgIC8vIGZvciBJRTExIDogbm9kZS5jb250YWlucyh0ZXh0Tm9kZSkgYWx3YXlzIHJldHVybiBmYWxzZVxuICAgICAgICBzdGFydCA9IHN0YXJ0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IHN0YXJ0LnBhcmVudE5vZGUgOiBzdGFydFxuICAgICAgICBlbmQgPSBlbmQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gZW5kLnBhcmVudE5vZGUgOiBlbmRcbiAgICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoc3RhcnQpICYmIGNvbnRlbnQuY29udGFpbnMoZW5kKSkge1xuICAgICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc3RvcmVTZWxlY3Rpb24oKXtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UodGhpcy5yYW5nZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgICAgY29uc3Qgcm93ID0gUkgucHJvdG90eXBlLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KHJvdywgMClcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKHJvdywgMClcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2ZU1vZHVsZShtb2R1bGUpe1xuICAgICAgaWYgKG1vZHVsZS5mb3JiaWRkZW4pIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUuaGFuZGxlcihuZXcgUkgodGhpcy5yYW5nZSwgdGhpcyksIG1vZHVsZSlcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgICAgdGhpcy5tb2R1bGVJbnNwZWN0KClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2R1bGVJbnNwZWN0ICgpIHtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmVNb2R1bGVJdGVtKClcbiAgICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzID0gW11cbiAgICAgICAgdGhpcy5hbGxBY3RpdmVNb2R1bGVzID0gW11cbiAgICAgICAgbGV0IHJoID0gbmV3IFJIKHRoaXMucmFuZ2UsIHRoaXMpXG4gICAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgICBpZiAodGV4dHMubGVuZ3RoID09PSAwICYmIHRoaXMucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICAgICAgdGV4dHMucHVzaCh0aGlzLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRleHRzIGR1cGxpY2F0ZSByZW1vdmFsXG4gICAgICAgIGxldCB0ZXh0QWZ0ZXREUiA9IFtdXG4gICAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgICAgaWYgKHRleHQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmIHRleHQucGFyZW50Tm9kZSAhPT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQucGFyZW50Tm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRleHRBZnRldERSLmluY2x1ZGVzKHRleHQpKSB7XG4gICAgICAgICAgICB0ZXh0QWZ0ZXREUi5wdXNoKHRleHQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB0YWdSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCd0YWcnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IHRhZ1Jlc3VsdFJEID0gSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUodGFnUmVzdWx0KVxuXG4gICAgICAgIGxldCBzdHlsZVJlc3VsdCA9IEluc3BlY3Rvci5ydW4oJ3N0eWxlJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCBzdHlsZVJlc3VsdFJEID0gSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUoc3R5bGVSZXN1bHQpXG5cbiAgICAgICAgbGV0IGF0dHJpYnV0ZVJlc3VsdCA9IEluc3BlY3Rvci5ydW4oJ2F0dHJpYnV0ZScsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgYXR0cmlidXRlUmVzdWx0UkQgPSBJbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZShhdHRyaWJ1dGVSZXN1bHQpXG5cbiAgICAgICAgdGhpcy5hbGxBY3RpdmVNb2R1bGVzID0gdGFnUmVzdWx0LmNvbmNhdChzdHlsZVJlc3VsdCwgYXR0cmlidXRlUmVzdWx0KVxuICAgICAgICB0aGlzLmFjdGl2ZU1vZHVsZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGFnUmVzdWx0UkQuY29uY2F0KHN0eWxlUmVzdWx0UkQsIGF0dHJpYnV0ZVJlc3VsdFJEKSkpXG5cbiAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICBtb2R1bGUuZm9yYmlkZGVuID0gZmFsc2VcbiAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gaGFuZGxlIGZvcmJpZGRlbiBsb2dpY1xuICAgICAgICBpZiAodGhpcy5hbGxBY3RpdmVNb2R1bGVzLmxlbmd0aCkge1xuICAgICAgICAgIGxldCBleGNsdWRlTGlzdCA9IFtdXG4gICAgICAgICAgdGhpcy5hbGxBY3RpdmVNb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtKSkge1xuICAgICAgICAgICAgICBtLmZvckVhY2gobW9kdWxlTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1ck1vZHVsZSA9IHRoaXMubW9kdWxlc01hcFttb2R1bGVOYW1lXVxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVMaXN0ID0gZXhjbHVkZUxpc3QuY29uY2F0KGN1ck1vZHVsZS5leGNsdWRlKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgZXhjbHVkZUxpc3QgPSBBcnJheS5mcm9tKG5ldyBTZXQoZXhjbHVkZUxpc3QpKVxuICAgICAgICAgIGV4Y2x1ZGVMaXN0LmZvckVhY2goZXhjID0+IHtcbiAgICAgICAgICAgIGxldCBleGNNb2R1bGUgPSB0aGlzLm1vZHVsZXNNYXBbZXhjXVxuICAgICAgICAgICAgaWYgKGV4Y01vZHVsZSAmJiBleGNNb2R1bGUudHlwZSAhPT0gJ2ZuJykge1xuICAgICAgICAgICAgICBleGNNb2R1bGUuZm9yYmlkZGVuID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgaGlnaGxpZ2h0IGxvZ2ljXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU1vZHVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gbW9kdWxlLm5hbWVcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZU1vZHVsZXMuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSB0cnVlXG4gICAgICAgICAgICAgIGxldCBjdXJNb2R1bGVBY3RpdmVJdGVtID0gdGhpcy5nZXRDdXJBY3RpdmVNb2R1bGVJdGVtKClbbW9kdWxlTmFtZV1cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJNb2R1bGVBY3RpdmVJdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gY3VyTW9kdWxlQWN0aXZlSXRlbSB8fCAnQUxMJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpe1xuICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmluaXQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgIGNvbnN0IHRvb2xiYXIgPSB0aGlzLiRyZWZzLnRvb2xiYXJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IHRoaXMuY29udGVudFxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4ge1xuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgfSwgZmFsc2UpXG4gICAgLy8gdG9vbGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNhdmVDdXJyZW50UmFuZ2UsIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGUgPT4ge1xuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICB9LCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZSA9PiB7XG4gICAgICB0aGlzLmV4ZWNDb21tYW5kKCdwYXN0ZScsIGUsIHRydWUpXG4gICAgICBsZXQgY29tbW9uID0gdGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgaWYgKGNvbW1vbikge1xuICAgICAgICBpZiAoY29tbW9uLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGNvbW1vbiA9IGNvbW1vbi5wYXJlbnROb2RlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1vbi5zY3JvbGxJbnRvVmlldykge1xuICAgICAgICAgIGNvbW1vbi5zY3JvbGxJbnRvVmlldyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy50b3VjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hIYW5kbGVyLCBmYWxzZSlcblxuICAgIC8vIGJlZm9yZSBleGVjIGNvbW1hbmRcbiAgICAvLyBsZXQgdGV4dCBiZSBhIHJvd1xuICAgIFJILnByb3RvdHlwZS5iZWZvcmUoKGNvbW1hbmQsICByaCwgYXJnKSA9PiB7XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIGlmICghcmguaXNFbXB0eU5vZGUodGV4dCkpIHtcbiAgICAgICAgICByaC50ZXh0VG9Sb3codGV4dClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmICh0ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgcmguZWRpdG9yLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBoYW5kbGUgc2hvcnRjdXRcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMuZXhlY0NvbW1hbmQoJ2tleWRvd24nLCBlLCB0cnVlKVxuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNob3J0Y3V0W2Uua2V5Q29kZV1cbiAgICAgIGlmIChpdGVtICYmIGl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW0uZm9yRWFjaChzID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBzLmtleUNvZGUgJiYgZS5hbHRLZXkgPT09ICEhcy5hbHRLZXkgJiYgZS5jdHJsS2V5ID09PSAhIXMuY3RybEtleSAmJiBlLm1ldGFLZXkgPT09ICEhcy5tZXRhS2V5ICYmIGUuc2hpZnRLZXkgPT09ICEhcy5zaGlmdEtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgICAgICAgICAgcy5oYW5kbGVyKHRoaXMsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIGZhbHNlKVxuXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZS5tb3VudGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbW9kdWxlLm1vdW50ZWQodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICB1cGRhdGVkKCl7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUudXBkYXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUudXBkYXRlZCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlcilcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5kZXN0cm95ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmRlc3Ryb3llZCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0b3IvZWRpdG9yLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4uL2NvbW1hbmRzJ1xuXG4vLyBmb3IgSUUgMTFcbmlmICghVGV4dC5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgVGV4dC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXJOb2RlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VIYW5kbGVyIHtcbiAgLyoqXG4gICAqIGJ1aWxkIHJhbmdlIGhhbmRsZXJcbiAgICogQHBhcmFtIHtSYW5nZX0gcmFuZ2VcbiAgICogQHBhcmFtIHtlZGl0b3J9IGN1cnJlbnQgZWRpdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyYW5nZSwgZWRpdG9yKSB7XG4gICAgaWYgKCFyYW5nZSB8fCAhKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW50XFwndCByZXNvbHZlIHJhbmdlJylcbiAgICB9XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgdGhpcy5lZGl0b3IgPSBlZGl0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBleGVjdXRlIGVkaXQgY29tbWFuZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWFuZFxuICAgKiBAcGFyYW0gYXJnXG4gICAqL1xuICBleGVjQ29tbWFuZChjb21tYW5kLCBhcmcpIHtcbiAgICBSYW5nZUhhbmRsZXIuYmVmb3JlTGlzdC5mb3JFYWNoKGZuID0+IHtcbiAgICAgIGZuLmNhbGwodGhpcywgY29tbWFuZCwgdGhpcywgYXJnKVxuICAgIH0pXG4gICAgY29uc3QgZXhpc3RDb21tYW5kID0gY29tbWFuZHNbY29tbWFuZF1cbiAgICBjb25zdCBjdXN0b21Db21tYW5kID0gdGhpcy5lZGl0b3IuY29tbWFuZHMgPyB0aGlzLmVkaXRvci5jb21tYW5kc1tjb21tYW5kXSA6IG51bGxcbiAgICBpZiAoZXhpc3RDb21tYW5kKSB7XG4gICAgICBleGlzdENvbW1hbmQodGhpcywgYXJnKVxuICAgIH1cbiAgICBlbHNlIGlmIChjdXN0b21Db21tYW5kKSB7XG4gICAgICAgY3VzdG9tQ29tbWFuZCh0aGlzLCBhcmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCBhcmcpXG4gICAgfVxuICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbi5jYWxsKHRoaXMsIGNvbW1hbmQsIHRoaXMsIGFyZylcbiAgICB9KVxuICB9XG5cbiAgLypcbiAgICogcnVuIGZuIGJlZm9yZSBleGVjIGNvbW1hbmQgIFxuICAgKiovXG4gIGJlZm9yZSAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSYW5nZUhhbmRsZXIuYmVmb3JlTGlzdC5wdXNoKGZuKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQmVmb3JlTGlzdCAoKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QgPSBbXVxuICB9XG5cbiAgLypcbiAgICogcnVuIGZuIGFmdGVyIGV4ZWMgY29tbWFuZCAgXG4gICAqKi9cbiAgYWZ0ZXIgKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdC5wdXNoKGZuKVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQWZ0ZXJMaXN0ICgpIHtcbiAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0ID0gW11cbiAgfVxufVxuXG5SYW5nZUhhbmRsZXIuYmVmb3JlTGlzdCA9IFtdXG5SYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0ID0gW11cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2luc3RhbmNlLmpzIiwiaW1wb3J0IGxyeiBmcm9tICdscnonXG5cbmNvbnN0IGluc2VydEltYWdlID0gZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgLy8gZm9yYmlkZGVuIGxvZ2ljXG4gIGxldCBmb3JiaWRkZW4gPSBmYWxzZVxuICBsZXQgYWN0aXZlcyA9IHJoLmVkaXRvci5hY3RpdmVNb2R1bGVzXG4gIGFjdGl2ZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICBsZXQgbW9kdWxlID0gcmguZWRpdG9yLm1vZHVsZXNNYXBbbmFtZV1cbiAgICBpZiAobW9kdWxlICYmIG1vZHVsZS5leGNsdWRlICYmIG1vZHVsZS5leGNsdWRlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICBmb3JiaWRkZW4gPSB0cnVlXG4gICAgfVxuICB9KVxuICBpZiAoZm9yYmlkZGVuKSByZXR1cm5cblxuICBsZXQgcmV0dXJuRGF0YSA9IHtcbiAgICBvcmlnaW46IGFyZ1xuICB9XG4gIGxldCBlZGl0b3IgPSByaC5lZGl0b3JcbiAgbGV0IGNvbmZpZyA9IGVkaXRvci5tb2R1bGVzTWFwWydpbWFnZSddXG4gIGlmICghY29uZmlnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbWFnZSBjb25maWcgbG9hZCBmYWlsJylcbiAgfVxuICBpZiAoYXJnIGluc3RhbmNlb2YgRmlsZSkge1xuICAgIGhhbmRsZUZpbGUoYXJnKVxuICB9XG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZhbHNlLCBhcmcpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGaWxlKGZpbGUpIHtcbiAgICBpZiAoY29uZmlnLmNvbXByZXNzKSB7XG4gICAgICBjb25maWcuY29tcHJlc3MuZmllbGROYW1lID0gY29uZmlnLmZpZWxkTmFtZSB8fCAnaW1hZ2UnXG4gICAgICBscnooZmlsZSwgY29uZmlnLmNvbXByZXNzKS50aGVuKHJzdCA9PiB7XG4gICAgICAgIGlmIChyc3QuZmlsZS5zaXplID4gY29uZmlnLm1heFNpemUpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2V4Y2VlZCBzaXplIGxpbWl0LCBhZnRlciBjb21wcmVzcycsXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAzXG4gICAgICAgICAgfSwgcnN0KVxuICAgICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCByZXR1cm5EYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwgcnN0KVxuICAgICAgICAgIGxldCBpbWdJZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdpbWcnKVxuICAgICAgICAgIGluc2VydEJhc2U2NChyZXR1cm5EYXRhLmJhc2U2NCwgaW1nSWQpXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgIHN0YXR1czogZXJyLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDJcbiAgICAgICAgfSlcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIHJldHVybkRhdGEpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsZS5zaXplID4gY29uZmlnLm1heFNpemUpIHtcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgIHN0YXR1czogJ2V4Y2VlZCBzaXplIGxpbWl0LCB3aXRob3V0IGNvbXByZXNzJyxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAzXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGNvbmZpZy5maWVsZE5hbWUsIGZpbGUsIGZpbGUubmFtZSlcbiAgICAgICAgcmV0dXJuRGF0YS5mb3JtRGF0YSA9IGZvcm1EYXRhXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgbGV0IGltZ0lkID0gcmguY3JlYXRlUmFuZG9tSWQoJ2ltZycpXG4gICAgICAgICAgaW5zZXJ0QmFzZTY0KGUudGFyZ2V0LnJlc3VsdCwgaW1nSWQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRCYXNlNjQgKGJhc2U2NCwgaWQpIHtcbiAgICBpZiAoY29uZmlnLmltZ09jY3VweU5ld1Jvdykge1xuICAgICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgbGV0IGN1clJvdyA9IHJoLmZvcmNlR2V0Um93KG5vZGUpXG4gICAgICBpZiAoY3VyUm93KSB7XG4gICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3Um93LCBjdXJSb3cpXG4gICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgYDxpbWcgc3JjPVwiJHtiYXNlNjR9XCIgZGF0YS1lZGl0b3ItaW1nPVwiJHtpZH1cIj5gLCB0cnVlKVxuICAgIGVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCAnJiM4MjAzOycsIHRydWUpXG4gICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgc3RhdHVzOiAnZXZlcnl0aGluZyBmaW5lJyxcbiAgICAgIHN0YXR1c0NvZGU6IDIsXG4gICAgICBiYXNlNjQsXG4gICAgICByZXBsYWNlU3JjQWZ0ZXJVcGxvYWRGaW5pc2g6IHJlcGxhY2VJbWcoaWQpLFxuICAgICAgZGVsZXRlSW1nV2hlblVwbG9hZEZhaWw6IGRlbGV0ZUltZyhpZClcbiAgICB9KSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgaW1hZ2UncyBiYXNlNjQgc3JjIHRvIHVybCBhZnRlciB1cGxvYWQgZmluaXNoXG4gIGZ1bmN0aW9uIHJlcGxhY2VJbWcgKGlkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbWdbZGF0YS1lZGl0b3ItaW1nPScke2lkfSddYClcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKVxuICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVkaXRvci1pbWcnKVxuICAgICAgICBlZGl0b3IuJGVtaXQoJ2NoYW5nZScsIGVkaXRvci4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGUgaW1hZ2UgYWZ0ZXIgdXBsb2FkIGZhaWxcbiAgZnVuY3Rpb24gZGVsZXRlSW1nIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtZWRpdG9yLWltZz0nJHtpZH0nXWApXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldClcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCBlZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydEltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvaW5zZXJ0SW1hZ2UuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgIGxldCBzID1yaC5nZXRTZWxlY3Rpb24oKVxuICAgIGxldCBub2RlID0gcy5iYXNlTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICBpZiAocm93KSB7XG4gICAgICAvLyBkZWxldGUgY3VycmVudCBzcGFuIGVsZW1lbnQgdG8ga2VlcCBsaW5lLWhlaWdodCBydW4gY29ycmVjdFxuICAgICAgaWYgKHJoLmlzRW1wdHlOb2RlKG5vZGUpICYmIG5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ1NQQU4nKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsICcmIzgyMDM7JylcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgICAgcmFuZ2Uuc2V0U3RhcnQocy5mb2N1c05vZGUsIHMuYW5jaG9yT2Zmc2V0IC0gMSlcbiAgICAgIHJhbmdlLnNldEVuZChzLmZvY3VzTm9kZSwgcy5mb2N1c09mZnNldClcbiAgICAgIHMucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIHMuYWRkUmFuZ2UocmFuZ2UpXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgYXJnKVxuICAgICAgcy5jb2xsYXBzZShzLmZvY3VzTm9kZSwgMSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIGFyZylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2ZvbnRTaXplLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgdGV4dCA9IG51bGxcblxuICBpZih3aW5kb3cuY2xpcGJvYXJkRGF0YSAmJiBjbGlwYm9hcmREYXRhLnNldERhdGEpIHtcbiAgICAvLyBJRVxuICAgIHRleHQgPSB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0JylcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gKGUub3JpZ2luYWxFdmVudCB8fCBlKS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKSBcbiAgfVxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgICB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKVxuICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKVxuXG4gICAgICAvLyDliJvlu7rkuLTml7blhYPntKDvvIzkvb/lvpdUZXh0UmFuZ2Xlj6/ku6Xnp7vliqjliLDmraPnoa7nmoTkvY3nva5cbiAgICAgIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgdGVtcEVsLmlubmVySFRNTCA9IFwiJiNGRUZGO1wiXG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpXG4gICAgICByYW5nZS5pbnNlcnROb2RlKHRlbXBFbClcbiAgICAgIHRleHRSYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKClcbiAgICAgIHRleHRSYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0ZW1wRWwpXG4gICAgICB0ZW1wRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wRWwpXG4gICAgfVxuICAgIHRleHRSYW5nZS50ZXh0ID0gdGV4dFxuICAgIHRleHRSYW5nZS5jb2xsYXBzZShmYWxzZSlcbiAgICB0ZXh0UmFuZ2Uuc2VsZWN0KClcbiAgfSBlbHNlIHtcbiAgICAvLyBDaHJvbWXkuYvnsbvmtY/op4jlmahcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydFRleHRcIiwgZmFsc2UsIHRleHQpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9wYXN0ZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcblxuICAgIC8vIHJld3JpdGUgbGkgZW50ZXIgbG9naWNcbiAgICBpZiAocmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnbGknKSAmJiByaC5pc0VtcHR5Tm9kZShub2RlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgdWxPck9sID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndWwnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdvbCcpXG4gICAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnVUwnKSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRVbm9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgICB9XG4gICAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnT0wnKSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRPcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXJsaW5lJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuICAgIGxldCBub2RlQ3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgdW5kZXJsaW5lIHRhZ1xuICAgIGxldCB1bmRlcmxpbmUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1JywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAndGV4dERlY29yYXRpb25MaW5lJzogJ3VuZGVybGluZSdcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ0knLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCF1bmRlcmxpbmUpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnVScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIHVuZGVybGluZSlcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2VUaHJvdWdoJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuICAgIGxldCBub2RlQ3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcblxuICAgIC8vIHRoZSBvdXRlcm1vc3Qgc3RyaWtlVGhyb3VnaCB0YWdcbiAgICBsZXQgc3RyaWtlVGhyb3VnaCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ1NUUklLRScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uTGluZSc6ICdsaW5lLXRocm91Z2gnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1UnLCAnSScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIXN0cmlrZVRocm91Z2gpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnU1RSSUtFJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgc3RyaWtlVGhyb3VnaClcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9zdHJpa2VUaHJvdWdoLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBpdGFsaWMgdGFnXG4gICAgbGV0IGl0YWxpYyA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2knLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICdmb250U3R5bGUnOiAnaXRhbGljJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnVScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICAvLyBpcyBpbiBhIGl0YWxpY1xuICAgIGlmICghaXRhbGljKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ0knKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBpdGFsaWMpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pdGFsaWMuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIGFyZylcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZSA9IHMuZm9jdXNOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBib2xkIHRhZ1xuICAgIGxldCBib2xkID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnc3Ryb25nJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnYicpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ2ZvbnRXZWlnaHQnOiAnYm9sZCdcbiAgICAgIH0pXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ0knLCAnVSddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIWJvbGQpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnQicpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIGJvbGQpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBxID0ge1xuICAvLyBvbmx5IHNldCBjb250ZW50ZWRpdGFibGU6ZmFsc2UgaW4gcGFyZW50IG5vZGUgY2FuIGNoaWxkIG5vZGUgdHJpZ2dlciBrZXlkb3duIGxpc3RlbmVyXG4gICdxdW90ZScgKHJoLCBpc0luUXVvdGUpIHtcbiAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgaWYgKGlzSW5RdW90ZSkge1xuICAgICAgbm9kZSA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gbm9kZS5wYXJlbnROb2RlIDogbm9kZVxuICAgICAgbGV0IHF1b3RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnW2RhdGEtZWRpdG9yLXF1b3RlXScpXG4gICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgbGV0IHRleHRzID0gcmguZ2V0RGVzY2VuZGFudFRleHROb2RlcyhxdW90ZSlcbiAgICAgICAgbGV0IHF1b3RlUm93cyA9IFtdXG4gICAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShxdW90ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2snKS5jaGlsZHJlbilcbiAgICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgICAvLyBmaW5kIHJvdyBpbiBjdXJyZW50IHF1b3RlIHJvd1xuICAgICAgICAgIC8vIGxldCByb3cgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcsIGZhbHNlLCBxdW90ZSlcbiAgICAgICAgICBsZXQgcm93XG4gICAgICAgICAgcm93cy5mb3JFYWNoKGN1clJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoY3VyUm93LmNvbnRhaW5zKHRleHQpKSB7XG4gICAgICAgICAgICAgIHJvdyA9IGN1clJvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFxdW90ZVJvd3MuaW5jbHVkZXMocm93KSkge1xuICAgICAgICAgICAgcXVvdGVSb3dzLnB1c2gocm93KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcXVvdGVSb3dzLmZvckVhY2goKHFyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocXIsIHF1b3RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByaC5pbnNlcnRBZnRlcihxciwgcXVvdGVSb3dzW2luZGV4IC0gMV0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICAgIGlmIChxdW90ZVJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocXVvdGVSb3dzWzBdLCAwKVxuICAgICAgICAgIHJhbmdlLnNldEVuZChxdW90ZVJvd3NbcXVvdGVSb3dzLmxlbmd0aCAtIDFdLCAxKVxuICAgICAgICAgIHMucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0J3MgYSBlbXB0eSBxdW90ZVxuICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgIHMuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyBpcyBhdCBhIGVtcHR5IHJvdyB3aXRob3V0IHJvdyBlbGVtZW50LCB0aGVuIGNyZWF0ZSBhIHJvd1xuICAgIC8vIG9yIHRleHRzIGhhcyBubyBjb21tb24gcGFyZW50IHJvd1xuICAgIGlmICghY3VyUm93ICYmICF0ZXh0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgIHYuYXBwZW5kQ2hpbGQobmV3Um93KVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgbmV3Um93Lm91dGVySFRNTClcbiAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgIHRleHRzLnB1c2gocy5mb2N1c05vZGUpXG4gICAgfVxuICAgIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgICB0ZXh0cy5wdXNoKGN1clJvdylcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gcmgubmV3Um93KClcbiAgICBsZXQgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBsZXQgcXVvdGVCbG9jayA9IHJoLm5ld1Jvdyh7dGFnOiAnZGl2J30pXG4gICAgcXVvdGVCbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrJywgcmguY3JlYXRlUmFuZG9tSWQoJ3F1b3RlYmxvY2snKSlcbiAgICBxdW90ZS5hcHBlbmRDaGlsZChxdW90ZUJsb2NrKVxuICAgIGxldCBpZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdxdW90ZScpXG4gICAgcXVvdGUuc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZScsIGlkKVxuICAgIHF1b3RlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcbiAgICBsZXQgcXVvdGVSb3dzID0gW11cbiAgICB0ZXh0cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuXG4gICAgICAvLyBjcmVhdGUgYSByb3cgZm9yIHRleHQgd2l0aG91dCByb3dcbiAgICAgIGlmICghY3VyUm93ICYmIHRleHQubm9kZVZhbHVlKSB7XG4gICAgICAgIGN1clJvdyA9IHJoLm5ld1JvdygpXG4gICAgICAgIGN1clJvdy5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgfVxuICAgICAgaWYgKGN1clJvdyAmJiAhcXVvdGVSb3dzLmluY2x1ZGVzKGN1clJvdykpIHtcbiAgICAgICAgcXVvdGVSb3dzLnB1c2goY3VyUm93KVxuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IGFuY2hvclJvd1xuICAgIHF1b3RlUm93cy5mb3JFYWNoKChxciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gcXVvdGVSb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcXVvdGVCbG9jay5hcHBlbmRDaGlsZChxcilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBxdW90ZUJsb2NrLmFwcGVuZENoaWxkKHFyLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgIGFuY2hvclJvdyA9IHFyXG4gICAgfSlcblxuICAgIGlmIChhbmNob3JSb3cucGFyZW50Tm9kZSkge1xuICAgICAgYW5jaG9yUm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHF1b3RlLCBhbmNob3JSb3cpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGN1cnJlbnQgcm93IGlzIGNyZWF0ZWQgYW5kIGhhcyBubyBwYXJlbnRcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIHYuYXBwZW5kQ2hpbGQocXVvdGUpXG4gICAgICByaC5yYW5nZS5kZWxldGVDb250ZW50cygpXG4gICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCB2LmlubmVySFRNTClcbiAgICB9XG4gICAgY29uc3QgY3VyUXVvdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lZGl0b3ItcXVvdGU9JyR7aWR9J11gKVxuICAgIGlmICghY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZCkgcmV0dXJuXG4gICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UoY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZCwgY3VyUXVvdGUubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQgPyAxIDogMClcbiAgfSxcbiAgJ2luaXRRdW90ZScgKHJoLCBhcmcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBsZXQgcXVvdGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKGUudGFyZ2V0LCAnW2RhdGEtZWRpdG9yLXF1b3RlXScpXG4gICAgICBpZiAocXVvdGUpIHtcbiAgICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgICBsZXQgbm9kZSA9IHMuYW5jaG9yTm9kZVxuICAgICAgICBsZXQgY3RuID0gbm9kZS5pbm5lclRleHQgfHwgbm9kZS5ub2RlVmFsdWVcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBpZiAoY3RuLnJlcGxhY2UoJ1xcbicsICcnKSA9PT0gJycpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG5cbiAgICAgICAgICAvLyBjdXJzb3IgbWF5IGF0IHJvdyBvciBhdCBxdW90ZSBibG9jayAsIHNvIHRoZXJlIGFyZSB0d28ganVkZ2VtZW50IGNvbmRpdGlvbnNcbiAgICAgICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAocy5mb2N1c09mZnNldCA9PT0gMCB8fCAobm9kZS5jb250YWlucyhzLmJhc2VOb2RlKSAmJiAocmguaXNFbXB0eU5vZGUocy5iYXNlTm9kZSkpICYmIHMuZm9jdXNPZmZzZXQgPT09IDEpKSkge1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKHF1b3RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9ja10nKS5jaGlsZHJlbilcblxuICAgICAgICAgICAgLy8gZW1wdHkgcXVvdGVcbiAgICAgICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgLy8gcm93IGFuZCBub2RlIGhhcyBmYXRoZXItY2hpbGQgcmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgIGlmICgocm93ID09PSBub2RlIHx8IHJvdy5jb250YWlucyhub2RlKSB8fCBub2RlLmNvbnRhaW5zKHJvdykpICYmIGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBvbmx5IGhhdmUgb25lIGVtcHR5IHJvdyBpbiBxdW90ZSx0aGVuIGRlbGV0ZSB0aGUgcXVvdGVcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDEgJiYgcmguaXNFbXB0eU5vZGUocm93KSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgLy8gZmlyc3Qgcm93IGhhdmUgY29udGVudCBhbmQgcHJldmlvdXMgZWxlbWVudCBleGlzdCwgdGhlbiBtb3ZlIGN1cnNvciB0byBwcmV2aW91cyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICBsZXQgcHJlUm93ID0gcmguZ2V0UHJldmlvdXNSb3cocXVvdGUpXG4gICAgICAgICAgICAgICAgICBpZiAocHJlUm93KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHF1b3RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RFbGUgPSBBcnJheS5mcm9tKHByZVJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2tdJykuY2hpbGRyZW4pLnBvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGxhc3RFbGUsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobGFzdEVsZSwgMClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSB0b2RvXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBwcmVSb3cucXVlcnlTZWxlY3RvcignW3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHJvd1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHByZVJvdywgMSlcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHByZVJvdywgMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IHQgPSB7XG4gICd0b2RvJyAocmgsIGRhdGEpIHtcbiAgICBsZXQgcm93ID0gcmgubmV3Um93KHtcbiAgICAgIGJyOiB0cnVlXG4gICAgfSlcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIFxuICAgIC8vIGEgZW1wdHkgcm93IHdpdGhvdXQgcm93IGVsZW1lbnQsIGNyZWF0ZSBhIHJvdyBlbGVtZW50XG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgIHYuYXBwZW5kQ2hpbGQobmV3Um93KVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgbmV3Um93Lm91dGVySFRNTClcbiAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgIGN1clJvdyA9IHMuZm9jdXNOb2RlXG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0IHRvZG8gYWZ0ZXIgdGhpcyByb3dcbiAgICBsZXQgYWZ0ZXJXaGljaCA9IHJoLmdldFJvdyhkYXRhLmluc2VydEFmdGVyKVxuXG4gICAgLy8gaXMgYWZ0ZXJXaGljaCBpcyBhIGVtcHR5IHJvdywganVzdCBpbnNlcnQgdG9kbyBhdCBjdXJyZW50IHJvd1xuICAgIGlmIChhZnRlcldoaWNoICYmIHJoLmlzRW1wdHlSb3coYWZ0ZXJXaGljaCkpIHtcbiAgICAgIGFmdGVyV2hpY2ggPSBudWxsXG4gICAgfVxuICAgIGlmIChhZnRlcldoaWNoKSB7XG4gICAgICBsZXQgdGFyZ2V0SW5kZXhcbiAgICAgIGxldCBzdGFydEluZGV4XG4gICAgICBsZXQgbGlzdCA9IGFmdGVyV2hpY2gucGFyZW50Tm9kZS5jaGlsZE5vZGVzXG4gICAgICBsaXN0LmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgPT09IGFmdGVyV2hpY2gpIHtcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gbGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA9IGxpc3QubGVuZ3RoXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydEluZGV4ICE9PSB1bmRlZmluZWQgJiYgdGFyZ2V0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRhcmdldEluZGV4ID0gdGFyZ2V0SW5kZXggPT09IHVuZGVmaW5lZCA/IHN0YXJ0SW5kZXggKyAxIDogdGFyZ2V0SW5kZXhcbiAgICAgIGFmdGVyV2hpY2gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocm93LCBsaXN0W3RhcmdldEluZGV4XSlcbiAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHJvdywgMClcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBpbnNlcnQgdG9kbyBhdCBjdXJyZW50IHJvdyBpZiBpdCBpcyBlbXB0eVxuICAgICAgaWYgKHJoLmlzRW1wdHlSb3coY3VyUm93KSkge1xuICAgICAgICByaC5jb2xsYXBzZUF0Um93KGN1clJvdylcbiAgICAgICAgcm93ID0gY3VyUm93XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3csIDApXG4gICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHJvdywgMClcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRvZG9JZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCd0b2RvJylcbiAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCBgPCR7Y29uc3RhbnQuUk9XX1RBR30gZGF0YS1lZGl0b3ItdG9kbz0ke3RvZG9JZH0gY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtkYXRhLnBsYWNlaG9sZGVyfVwiPjwvJHtjb25zdGFudC5ST1dfVEFHfT48YnI+YClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lZGl0b3ItdG9kbz0nJHt0b2RvSWR9J10gaW5wdXRbdHlwZT10ZXh0XWApLmZvY3VzKClcbiAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpXG4gICAgdFsnaW5pdFRvZG8nXShyaCwgZGF0YSlcbiAgfSxcbiAgLy8gaW5pdCB0b2RvIGxvZ2ljXG4gICdpbml0VG9kbycgKHJoLCBkYXRhKSB7XG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWRpdG9yLXRvZG9dJylcbiAgICBjaGVja2JveHMuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGMucXVlcnlTZWxlY3RvcignW3R5cGU9Y2hlY2tib3hdJylcbiAgICAgIGNvbnN0IGN0biA9IGMucXVlcnlTZWxlY3RvcignW3R5cGU9dGV4dF0nKVxuICAgICAgaWYgKGMuaW5pdCkgcmV0dXJuXG4gICAgICBjdG5DaGVja2VkTG9naWMoKVxuXG4gICAgICBmdW5jdGlvbiBjdG5DaGVja2VkTG9naWMoKSB7XG4gICAgICAgIGN0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJywgY3RuLnZhbHVlKVxuICAgICAgICBpZiAoYnRuLmNoZWNrZWQpIHtcbiAgICAgICAgICBjdG4uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdG4uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbiAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGJ0bi5vbmNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjdG5DaGVja2VkTG9naWMoKVxuICAgICAgICBpZiAocmguZWRpdG9yICYmIHJoLmVkaXRvci4kcmVmcyAmJiByaC5lZGl0b3IuJHJlZnMuY29udGVudCkge1xuICAgICAgICAgIHJoLmVkaXRvci4kZW1pdCgnY2hhbmdlJywgcmguZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdG4ub25pbnB1dCA9IGUgPT4ge1xuICAgICAgICBjdG4uc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci12YWx1ZScsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgfVxuICAgICAgY3RuLm9ua2V5ZG93biA9IGN0bi5vbmtleWRvd24gfHwgKGUgPT4ge1xuICAgICAgICAgIGlmICghWzEzLCA4XS5pbmNsdWRlcyhlLmtleUNvZGUpKSByZXR1cm5cbiAgICAgICAgICBsZXQgcm93ID0gYy5uZXh0U2libGluZ1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBpZiAoY3RuLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVRvZG8oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdFsndG9kbyddKHJoLCB7XG4gICAgICAgICAgICAgIGluc2VydEFmdGVyOiBjLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZGF0YS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKGN0bi52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgZGVsZXRlVG9kbygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgIGMucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBjKVxuICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIGMuaW5pdCA9IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy90b2RvLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcblxuICAgIC8vIHRvIGtlZXAgdGV4dCB3cmFwIGJ5IGEgcm93XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgY29tbWFuZHMuZm9ybWF0QmxvY2socmgsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9rZXlkb3duLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGUpIHtcbiAgLy8gcmVzdG9yZSBmaXJzdCByb3dcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgbGV0IHZhbHVlID0gbm9kZS5ub2RlVmFsdWUgfHwgbm9kZS5pbm5lclRleHRcbiAgLy8gY29uc29sZS5sb2coJ2RlbGV0ZScsIG5vZGUsIGUpXG4gIGxldCBjdXJSYW5nZSA9IHJoLmdldFJhbmdlKCkgfHwgcmgucmFuZ2VcblxuICAvLyBjYW5jZWwgbGlzdCB3aGVuIGxpIGlzIGVtcHR5XG4gIGlmICgocmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnbGknKSkgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdWxPck9sID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndWwnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdvbCcpXG4gICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgY29tbWFuZHNbJ2luc2VydFVub3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICB9XG4gICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ09MJykge1xuICAgICAgY29tbWFuZHNbJ2luc2VydE9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAvLyBub2RlIGlzIGVkaXQgem9uZVxuICBpZiAoIXJvdykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBhZnRlckRlbGV0ZShyaClcbiAgfVxuICBcbiAgLy8gZW1wdHkgcm93XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQgJiYgKChub2RlID09PSByb3cgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHx8IChyb3cuaW5uZXJIVE1MLnJlcGxhY2UoLzxicj4vZywgJycpID09PSAnJyAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMSkpKSB7XG4gICAgbGV0IGZpcnN0Um93ID0gcmguZWRpdFpvbmUoKS5maXJzdEVsZW1lbnRDaGlsZFxuXG4gICAgLy8gZmlyc3Qgcm93IGNhbmNlbCBvdXRkZW50XG4gICAgaWYgKGZpcnN0Um93ID09PSByb3cpIHtcbiAgICAgIGNvbW1hbmRzLm91dGRlbnQocmgsIG51bGwpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIC8vIHJvdyBoYXMgY29udGVudCwgY3Vyc29yIGlzIGF0IGF0IHN0YXJ0IG9mIHRoZSBub2RlLCBkbyBvdXRkZW50XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQgJiYgdmFsdWUgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDAgJiYgKG5vZGUgPT09IHJvdy5maXN0RWxlbWVudENoaWxkIHx8IG5vZGUgPT09IHJvdy5maXJzdENoaWxkKSkge1xuICAgIGNvbW1hbmRzLm91dGRlbnQocmgsIG51bGwpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBlbXB0eSByb3dcbiAgaWYgKHJvdy5pbm5lckhUTUwucmVwbGFjZSgvPGJyPi9nLCAnJykgPT09ICcnKSB7XG4gICAgLy8gZ2V0IHByZXZpb3VzIHJvdyB3aXRoIGNvbnRlbnRcbiAgICBsZXQgcHJlUm93ID0gcmguZ2V0UHJldmlvdXNSb3cocm93KVxuXG4gICAgLy8gY3Vyc29yIGZvY3VzIG9uIHByZXZpb3VzIHJvdydzIGlucHV0IGlmIHByZXZpb3VzIHJvdyBpcyB0b2RvXG4gICAgaWYgKHByZVJvdyAmJiBwcmVSb3cuZGF0YXNldCAmJiBwcmVSb3cuZGF0YXNldC5lZGl0b3JUb2RvKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpXG4gICAgICBsZXQgaW5wdXQgPSBwcmVSb3cucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgcmV0dXJuIGFmdGVyRGVsZXRlKHJoKVxufVxuXG4vLyBoYW5kbGUgJiM4MjAzOyBhZnRlciBkZWxldGVcbmZ1bmN0aW9uIGFmdGVyRGVsZXRlKHJoKSB7XG4gIGxldCBkZWxldGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGxldCBmb2N1c05vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCBjdG4gPSB0eXBlb2YgZm9jdXNOb2RlLmlubmVyVGV4dCA9PT0gJ3N0cmluZycgPyBmb2N1c05vZGUuaW5uZXJUZXh0IDogZm9jdXNOb2RlLm5vZGVWYWx1ZVxuICAgIGlmICh0eXBlb2YgY3RuID09PSAnc3RyaW5nJyAmJiAvXFx1MjAwQi8udGVzdChjdG4pICYmIGN0bi5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJycpIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGZhbHNlKVxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoZGVsZXRlSW50ZXJ2YWwpXG4gICAgfVxuICB9KVxuXG4gIC8vIGlmIGVkaXQgem9uZSBpcyBlbXB0eSwgY3JlYXRlIGEgcm93XG4gIGlmIChyaC5pc0VtcHR5Tm9kZShyaC5lZGl0Wm9uZSgpKSAmJiAhcmguZ2V0Um93cygpLmxlbmd0aCkge1xuICAgIGxldCByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICByaC5lZGl0Wm9uZSgpLmFwcGVuZENoaWxkKHJvdylcbiAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDEpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9kZWxldGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICcmIzgyMDM7JylcbiAgICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coKVxuICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHQubm9kZVZhbHVlXG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0ZXh0Lm5leHRTaWJsaW5nXG4gICAgICB0ZXh0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dClcbiAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeVJpZ2h0JywgZmFsc2UpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlMZWZ0JywgZmFsc2UpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvanVzdGlmeUxlZnQuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICcmIzgyMDM7JylcbiAgICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coKVxuICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHQubm9kZVZhbHVlXG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0ZXh0Lm5leHRTaWJsaW5nXG4gICAgICB0ZXh0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dClcbiAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUNlbnRlcicsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlDZW50ZXIuanMiLCJpbXBvcnQgYW0gZnJvbSAnLi9hc3Npc3QtbWV0aG9kcydcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IG0gPSB7XG4gIC8qKlxuICAgKiBmdW5jIGFkZCBldmVyeSBlbGVtZW50cyBvZiBleHRBcnIgdG8gc291cmNlQXJyLlxuICAgKiBAcGFyYW0gc291cmNlQXJyXG4gICAqIEBwYXJhbSBleHRBcnJcbiAgICovXG4gIG1lcmdlQXJyYXkgKHNvdXJjZUFyciwgZXh0QXJyKSB7XG4gICAgLy8gbm90ZTogQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyMSxhcnIyKSBpcyB1bnJlbGlhYmxlXG4gICAgZXh0QXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBzb3VyY2VBcnIucHVzaChlbClcbiAgICB9KVxuICB9LFxuICAvKipcbiAgICogZmluZCBhbGwgdGhlIGRlc2NlbmRhbnQgdGV4dCBub2RlcyBvZiBhIGVsZW1lbnRcbiAgICogQHBhcmFtIGFuY2VzdG9yXG4gICAqL1xuICBnZXREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3Rvcikge1xuICAgIGlmIChhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHJldHVybiBbYW5jZXN0b3JdXG4gICAgfVxuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG4gICAgaWYgKCFhbmNlc3Rvci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICB9XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFuY2VzdG9yLmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYW4gYW5jZXN0b3IgZWxlbWVudCB0aGF0IGJlZm9yZSB0aGUgc3BlY2lmeSBlbmQgZWxlbWVudCxcbiAgICogdGhlIGFuY2VzdG9yIGVsZW1lbnQgbXVzdCBjb250YWlucyB0aGUgZW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKiBAcGFyYW0gZW5kRWxcbiAgICovXG4gIGdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yLCBlbmRFbCkge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG4gICAgbGV0IGVuZEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5jZXN0b3IuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFuY2VzdG9yLmNoaWxkTm9kZXNbaV0uY29udGFpbnMoZW5kRWwpKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBhbmNlc3Rvci5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZSA9PT0gZW5kRWwpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfSBlbHNlIGlmIChpID09PSBlbmRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIGVuZEVsKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLyoqXG4gICAqIGZ1bmMgZmluZCBhbGwgdGhlIGRlc2NlbmRhbnQgdGV4dCBub2RlcyBvZiBhbiBhbmNlc3RvciBlbGVtZW50IHRoYXQgYWZ0ZXIgdGhlIHNwZWNpZnkgc3RhcnQgZWxlbWVudCxcbiAgICogdGhlIGFuY2VzdG9yIGVsZW1lbnQgbXVzdCBjb250YWlucyB0aGUgc3RhcnQgZWxlbWVudC5cbiAgICogQHBhcmFtIGFuY2VzdG9yXG4gICAqIEBwYXJhbSBzdGFydEVsXG4gICAqL1xuICBnZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IsIHN0YXJ0RWwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGxldCBzdGFydEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5jZXN0b3IuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFuY2VzdG9yLmNoaWxkTm9kZXNbaV0uY29udGFpbnMoc3RhcnRFbCkpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBhbmNlc3Rvci5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZSA9PT0gc3RhcnRFbCkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsXG4gICAgICAgICAgICBtLmdldEFmdGVyU3RhcnREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIHN0YXJ0RWwpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsXG4gICAgICAgICAgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGdldCB0aGUgY2xvc2VzdCBwYXJlbnQgYmxvY2sgbm9kZSBvZiBhIHRleHQgbm9kZS5cbiAgICogQHBhcmFtIG5vZGVcbiAgICogQHJldHVybiB7Tm9kZX1cbiAgICovXG4gIGdldFBhcmVudEJsb2NrTm9kZSAobm9kZSkge1xuICAgIGNvbnN0IGJsb2NrTm9kZU5hbWVzID0gWydESVYnLCAnUCcsICdTRUNUSU9OJywgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JyxcbiAgICAgICdPTCcsICdVTCcsICdMSScsICdUUicsICdURCcsICdUSCcsICdUQk9EWScsICdUSEVBRCcsICdUQUJMRScsICdBUlRJQ0xFJywgJ0hFQURFUicsICdGT09URVInLCAnQkxPQ0tRVU9URSddXG4gICAgbGV0IGNvbnRhaW5lciA9IG5vZGVcbiAgICB3aGlsZSAoY29udGFpbmVyKSB7XG4gICAgICBpZiAoYmxvY2tOb2RlTmFtZXMuaW5jbHVkZXMoY29udGFpbmVyLm5vZGVOYW1lKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9LFxuICBpc0lubGluZUVsZW1lbnQgKG5vZGUpIHtcbiAgICBjb25zdCBpbmxpbmVOb2RlTmFtZXMgPSBbJ0EnLCAnQUJCUicsICdBQ1JPTllNJywgJ0InLCAnQ0lURScsICdDT0RFJywgJ0VNJywgJ0knLFxuICAgICAgJ0ZPTlQnLCAnSU1HJywgJ1MnLCAnU01BTEwnLCAnU1BBTicsICdTVFJJS0UnLCAnU1RST05HJywgJ1UnLCAnU1VCJywgJ1NVUCddXG4gICAgcmV0dXJuIGlubGluZU5vZGVOYW1lcy5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKVxuICB9LFxuICBpc0lubGluZU9yVGV4dCAobm9kZSkge1xuICAgIGxldCBpc0lubGluZSA9IG0uaXNJbmxpbmVFbGVtZW50KG5vZGUpXG4gICAgbGV0IGlzVGV4dCA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFXG4gICAgcmV0dXJuIGlzSW5saW5lIHx8IGlzVGV4dFxuICB9LFxuICAvKlxuICAgKiBmaW5kIGFsbCBzcGVjaWZ5IG5vZGVzIGluIGFuIGFuY2VzdG9yIHRocm91Z2ggc2VhcmNoIG9waW5pb25zKHVuaXF1ZSBhdHRyaWJ1dGVzKVxuICAgKiBAcGFyYW0gbm9kZVxuICAgKiBAcGFyYW0ge29ian1cbiAgICogICAgIG11c3QgaGF2ZSBrZXkgJ3RhZ05hbWUnXG4gICAqIEByZXR1cm4ge2Fycn1cbiAgICoqL1xuICBnZXRBbGxTcGVjaWZ5Tm9kZSAoYW5jZXN0b3IsIHNlYXJjaE9waW5pb24pIHtcbiAgICBjb25zdCB0YXJnZXRUYWdOYW1lID0gc2VhcmNoT3Bpbmlvbi50YWdOYW1lXG4gICAgZGVsZXRlIHNlYXJjaE9waW5pb24udGFnTmFtZVxuICAgIGNvbnN0IHRhZ3MgPSBhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldFRhZ05hbWUpXG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGNvbnN0IG9waW5pb25LZXlzID0gT2JqZWN0LmtleXMoc2VhcmNoT3BpbmlvbilcbiAgICAgIGxldCBwYXNzID0gdHJ1ZVxuICAgICAgb3BpbmlvbktleXMuZm9yRWFjaChvcGluaW9uID0+IHtcbiAgICAgICAgdmFyIGEgPSB0YWcuZ2V0QXR0cmlidXRlKG9waW5pb24pXG4gICAgICAgIGlmICh0YWcuZ2V0QXR0cmlidXRlKG9waW5pb24pICE9PSBzZWFyY2hPcGluaW9uW29waW5pb25dKSB7XG4gICAgICAgICAgcGFzcyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAocGFzcykge1xuICAgICAgICByZXN1bHQucHVzaCh0YWcpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgZmluZCB0aGUgbnVtYmVyIG9mIG5lc3RpbmcgYW5jZXN0b3Igd2hpY2ggaGFzIHNhbWUgbm9kZSBuYW1lXG4gICAqIEBwYXJhbSB7bm9kZX0gY3VycmVudCBub2RlXG4gICAqIEBwYXJhbSB7c3RyfSBhbmNlc3RvcidzIHRhZyBuYW1lXG4gICAqIEByZXR1cm4ge251bX0gbnVtYmVyXG4gICAqKi9cbiAgaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcgKG5vZGUsIGFuY2VzdG9yTm9kZU5hbWUpIHtcbiAgICBsZXQgbnVtID0gMFxuICAgIGFuY2VzdG9yTm9kZU5hbWUgPSBhbmNlc3Rvck5vZGVOYW1lLnRvVXBwZXJDYXNlKClcbiAgICB3aGlsZSAobm9kZSAmJiAobm9kZSAhPT0gYW0uZWRpdFpvbmUoKSkpIHtcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBhbmNlc3Rvck5vZGVOYW1lKSB7XG4gICAgICAgIG51bSsrXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBudW1cbiAgfSxcblxuICAvKlxuICAgKiBmaW5kIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhyb3VnaCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge25vZGV9IHN0YXJ0IGF0IG5vZGVcbiAgICogQHBhcmFtIHtzdHJ9IGFuY2VzdG9yIGVsZW1lbnQncyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVpdGhlciByZXR1cm4gZmlyc3QgZWxpZ2libGUgZWxlbWVudCBvciBsYXN0IGVsaWdpYmxlIGVsZW1lbnRcbiAgICogIGRlZmF1bHQ6IHRydWVcbiAgICogQHBhcmFtIHtub2RlfSBzZWFyY2hpbmcgc3RvcCBhdCB0aGUgYm9yZGVyIGVsZW1lbnRcbiAgICogIGRlZmF1bHQ6IGVkaXRvcidzIGNvbnRlbnQgem9uZVxuICAgKiBAcmV0dXJuIHRhcmdldCBhbmNlc3RvciBlbGVtZW50XG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvciAobm9kZSwgc2VsZWN0b3IsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgbGV0IGFuY2VzdG9ycyA9IEFycmF5LmZyb20obm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IG5vZGVcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogZmluZCB0YXJnZXQgc3R5bGVcbiAgICoqL1xuICBmaW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUgKG5vZGUsIHN0eWxlTmFtZSwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBpZiAobm9kZS5zdHlsZSAmJiBub2RlLnN0eWxlW3N0eWxlTmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gbm9kZS5zdHlsZVtzdHlsZU5hbWVdXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogZmluZCBhbiBhbmNlc3RvciBlbGVtZW50IHRocm91Z2ggc3R5bGUgbmFtZSBhbmQgc3R5bGUgdmFsdWVcbiAgICogQHBhcmFtIHN0eWxlIHtvYmp9IHN0eWxlTmFtZTogc3R5bGVWYWx1ZVxuICAgKiBAcmV0dXJuXG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUgKG5vZGUsIHN0eWxlLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcbiAgICAgIGxldCBpc1RhcmdldCA9IHRydWVcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKHN0eWxlTmFtZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZVtzdHlsZU5hbWVdICE9PSBwYXJlbnQuc3R5bGVbc3R5bGVOYW1lXSkge1xuICAgICAgICAgIGlzVGFyZ2V0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChpc1RhcmdldCkge1xuICAgICAgICByZXN1bHQgPSBwYXJlbnRcbiAgICAgICAgbm9kZSA9IHBhcmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHBhcmVudFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgZ2V0Tm9kZU51bSAoYW5jZXN0b3IsIG5vZGVOYW1lKSB7XG4gICAgcmV0dXJuIGFuY2VzdG9yLnF1ZXJ5U2VsZWN0b3JBbGwobm9kZU5hbWUpLmxlbmd0aFxuICB9LFxuICAvKipcbiAgICogZmluZCBhbGwgdGhlIHRleHQgbm9kZXMgaW4gcmFuZ2VcbiAgICovXG4gIGdldEFsbFRleHROb2Rlc0luUmFuZ2UoKSB7XG4gICAgY29uc3Qgc3RhcnRDb250YWluZXIgPSB0aGlzLnJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgY29uc3QgZW5kQ29udGFpbmVyID0gdGhpcy5yYW5nZS5lbmRDb250YWluZXJcbiAgICBjb25zdCByb290RWwgPSB0aGlzLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cblxuICAgIGlmIChzdGFydENvbnRhaW5lciA9PT0gZW5kQ29udGFpbmVyKSB7XG4gICAgICBpZiAoc3RhcnRDb250YWluZXIubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRDb250YWluZXJdXG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3RhcnRDb250YWluZXIuY2hpbGROb2Rlc1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMucmFuZ2Uuc3RhcnRPZmZzZXQ7IGkgPCB0aGlzLnJhbmdlLmVuZE9mZnNldDsgaSsrKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2RlcyhjaGlsZE5vZGVzW2ldKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICB9XG5cbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBsZXQgZW5kSW5kZXggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290RWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvb3RFbC5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZS5jb250YWlucyhzdGFydENvbnRhaW5lcikpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGlcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmNvbnRhaW5zKGVuZENvbnRhaW5lcikpIHtcbiAgICAgICAgZW5kSW5kZXggPSBpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvb3RFbC5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAoaSA9PT0gc3RhcnRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBzdGFydENvbnRhaW5lcikpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBlbmRDb250YWluZXIpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKlxuICAgKiBnZXQgdGhlIHJvdyB3aGljaCBjb250YWlucyB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0ge25vZGV9IHRhcmdldCBlbGVtZW50XG4gICAqIEByZXR1cm4ge25vZGV9IHJvd1xuICAgKiovXG4gIGdldFJvdyAobm9kZSkge1xuICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShhbS5lZGl0Wm9uZSgpLmNoaWxkcmVuKVxuICAgIGxldCByZXN1bHRcbiAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGlmIChyb3cuY29udGFpbnMobm9kZSkgfHwgcm93ID09PSBub2RlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJvd1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICB0ZXh0VG9Sb3cgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSBhbS5lZGl0Wm9uZSgpICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBmYWxzZSwgY29uc3RhbnQuUk9XX1RBR19VUFBFUkNBU0UpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH0sXG4gIC8qXG4gICAqIGdldCByb3csIGlmIHRoZXJlJ3Mgbm90LCBjcmVhdGUgb25lXG4gICAqKi9cbiAgZm9yY2VHZXRSb3cgKG5vZGUpIHtcbiAgICBub2RlID0gbS50ZXh0VG9Sb3cobm9kZSlcbiAgICByZXR1cm4gbS5nZXRSb3cobm9kZSlcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGFsbCByb3dzXG4gICAqKi9cbiAgZ2V0Um93cyAoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciBjdXJyZW50IG5vZGUgaXMgYSByb3dcbiAgICoqL1xuICBpc1JvdyAobm9kZSkge1xuICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShhbS5lZGl0Wm9uZSgpLmNoaWxkcmVuKVxuICAgIHJldHVybiByb3dzLmluY2x1ZGVzKG5vZGUpXG4gIH0sXG4gIC8qXG4gICAqIGNyZWF0ZSBhIHdyYXBwZXIgZm9yIGlubGluZSBlbGVtZW50IGluIHNhbWUgcm93XG4gICAqKi9cbiAgY3JlYXRlV3JhcHBlckZvcklubGluZSAobm9kZSwgd3JhcHBlck5vZGVOYW1lLCBzZXBlcmF0ZUJ5QnIgPSB0cnVlKSB7XG4gICAgaWYgKCFtLmlzSW5saW5lT3JUZXh0KG5vZGUpKSByZXR1cm4gbm9kZVxuICAgIGxldCBlbGVtZW50cyA9IFtub2RlXVxuICAgIHNlYXJjaExlZnQoKVxuICAgIHNlYXJjaFJpZ2h0KClcbiAgICBsZXQgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyTm9kZU5hbWUpXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBlbGVtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChlbGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGxhc3RPbmUgPSBlbGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQobGFzdE9uZSlcbiAgICAgIGVsZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIGVsZSlcbiAgICB9KVxuXG4gICAgaWYgKHNlcGVyYXRlQnlCcikge1xuICAgICAgaGFuZGxlckJyKG5ld1Jvdy5wcmV2aW91c1NpYmxpbmcsIHRydWUpXG4gICAgICBoYW5kbGVyQnIobmV3Um93Lm5leHRTaWJsaW5nLCBmYWxzZSlcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Jvd1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlckJyKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBsZXQgbmV4dERpciA9IGRpcmVjdGlvbiA/ICdwcmV2aW91c1NpYmxpbmcnIDogJ25leHRTaWJsaW5nJ1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IG5vZGVbbmV4dERpcl1cbiAgICAgICAgaWYgKCF0YXJnZXROb2RlKSByZXR1cm5cbiAgICAgICAgaWYgKHRhcmdldE5vZGUubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlckJyKHRhcmdldE5vZGUsIGRpcmVjdGlvbilcbiAgICAgICAgfVxuICAgICAgICBtLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUodGFyZ2V0Tm9kZSwgd3JhcHBlck5vZGVOYW1lLCBzZXBlcmF0ZUJ5QnIpXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaExlZnQoKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudHNbMF0ucHJldmlvdXNTaWJsaW5nICYmIG0uaXNJbmxpbmVPclRleHQoZWxlbWVudHNbMF0ucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICBlbGVtZW50cy51bnNoaWZ0KGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2VhcmNoUmlnaHQoKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgJiYgbS5pc0lubGluZU9yVGV4dChlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5uZXh0U2libGluZykpIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5uZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIGdldCBub2RlJ3MgcHJldmlvdXMgcm93IHdoaWNoIGhhcyBjb250ZW50XG4gICAqKi9cbiAgZ2V0UHJldmlvdXNSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5nZXRSb3cobm9kZSlcbiAgICBsZXQgcHJlUm93XG4gICAgbGV0IHJvd3MgPSBtLmdldFJvd3MoKVxuICAgIGxldCByb3dJbmRleCA9IG51bGxcbiAgICByb3dzLmZvckVhY2goKGN1clJvdywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJSb3cgPT09IHJvdykge1xuICAgICAgICByb3dJbmRleCA9IGluZGV4XG4gICAgICB9XG4gICAgICBpZiAocm93SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGN1clJvdy5pbm5lckhUTUwgIT09ICcnKSB7XG4gICAgICAgICAgcHJlUm93ID0gY3VyUm93XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwcmVSb3dcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciB0YXJnZXQgcm93IGlzIGVtcHR5XG4gICAqKi9cbiAgaXNFbXB0eVJvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmlzUm93KG5vZGUpID8gbm9kZSA6IG0uZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdy5nZXRBdHRyaWJ1dGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3cuaW5uZXJUZXh0LnJlcGxhY2UoJ1xcbicsICcnKS5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJydcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciB0YXJnZXQgbm9kZSBpcyBlbXB0eVxuICAgKiovXG4gIGlzRW1wdHlOb2RlIChub2RlKSB7XG4gICAgbGV0IGN0biA9IHR5cGVvZiBub2RlLmlubmVyVGV4dCA9PT0gJ3N0cmluZycgPyBub2RlLmlubmVyVGV4dCA6IG5vZGUubm9kZVZhbHVlXG4gICAgaWYgKHR5cGVvZiBjdG4gIT09ICdzdHJpbmcnKSByZXR1cm5cbiAgICByZXR1cm4gY3RuLnJlcGxhY2UoJ1xcbicsICcnKS5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJydcbiAgfSxcbiAgLypcbiAgICogdHJ5IHRvIGNvbGxhcHNlIGF0IHRhcmdldCByb3dcbiAgICoqL1xuICBjb2xsYXBzZUF0Um93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uaXNSb3cobm9kZSkgPyBub2RlIDogbS5nZXRSb3cobm9kZSlcbiAgICBsZXQgcyA9IGFtLmdldFNlbGVjdGlvbigpXG4gICAgdHJ5IHtcbiAgICAgIHMuY29sbGFwc2Uocm93LCAxKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMuY29sbGFwc2Uocm93LCAwKVxuICAgIH1cbiAgfSxcbiAgLypcbiAgICogc2VhcmNoaW5nIG5lc3RlZCBhbmNlc3RvcnMgdGlsbCBib3JkZXIgdG8gZmluZCB0aGUgc3BlY2lmaWVkIHRhZ05hbWVcbiAgICogQHBhcmFtIHtub2RlfSBmcm9tIHdoaWNoIG5vZGVcbiAgICogQHBhcmFtIHthcnJ9IGluY2x1ZGVzIHRhZyBuYW1lcyBvZiB0YXJnZXQgdGFnXG4gICAqIEBwYXJhbSB7bm9kZX0gc2VhcmNoIGJvcmRlclxuICAgKiBAcmV0dXJuIHthcnJ9XG4gICAqKi9cbiAgZmluZEV4aXN0VGFnVGlsbEJvcmRlciAobm9kZSwgdGFnTmFtZWxpc3QsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBib3JkZXIpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgbGV0IG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZVxuICAgICAgaWYgKG5vZGVOYW1lICYmIHRhZ05hbWVsaXN0LmluY2x1ZGVzKG5vZGVOYW1lKSkge1xuICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhub2RlTmFtZSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChub2RlTmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBhIG5lc3RlZCBET00gZGF0YSB0aHJvdWdoIGEgdGFnIG5hbWUgbGlzdFxuICAgKiovXG4gIGNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdCAobGlzdCkge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBkb206IG51bGwsXG4gICAgICBkZWVwZXN0SWQ6IG51bGwsXG4gICAgICBkZWVwZXN0OiBudWxsXG4gICAgfVxuICAgIGxpc3QuZm9yRWFjaCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgICAgcmVzdWx0W2luZGV4XSA9IGVsZVxuICAgICAgbGV0IHBhcmVudCA9IHJlc3VsdFtpbmRleCAtIDFdXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHQuZGVlcGVzdCA9IGVsZVxuICAgICAgICByZXN1bHQuZGVlcGVzdElkID0gYW0uY3JlYXRlUmFuZG9tSWQoJ2RlZXBlc3QnKVxuICAgICAgICByZXN1bHQuZG9tID0gcmVzdWx0WycwJ11cbiAgICAgICAgZWxlLmlkID0gcmVzdWx0LmRlZXBlc3RJZFxuICAgICAgICBlbGUuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaGFuZGxlLW1ldGhvZHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJteS12dWUtZWRpdG9yXFxcIiA6Y2xhc3M9XFxcInsnZnVsbC1zY3JlZW4nOmZ1bGxTY3JlZW59XFxcIiA6c3R5bGU9XFxcInsnei1pbmRleCc6ekluZGV4fVxcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcInRvb2xiYXJcXFwiIDpzdHlsZT1cXFwieyd6LWluZGV4Jzp6SW5kZXgrMX1cXFwiIHJlZj1cXFwidG9vbGJhclxcXCIgZGF0YS1lZGl0b3I9XFxcInRvb2xiYXJcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJ0YWJzXFxcIj5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIm1vZHVsZSBpbiBtb2R1bGVzXFxcIj5cXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCIhbW9kdWxlLmhhc1RhYlxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSA6dGl0bGU9XFxcImxvY2FsZVttb2R1bGUuaTE4bl1cXFwiIGNsYXNzPVxcXCJ0YWIgYnRuXFxcIiA6Y2xhc3M9XFxcIntoaWdoTGlnaHQ6IG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0LCBmb3JiaWRkZW46IG1vZHVsZS5mb3JiaWRkZW59XFxcIiBAY2xpY2s9XFxcImFjdGl2ZU1vZHVsZShtb2R1bGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCIgOmNsYXNzPVxcXCJtb2R1bGUuaWNvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICAgICAgICAgIDxrZWVwLWFsaXZlPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGFiXFxcIiA6aXM9XFxcIm1vZHVsZS50YWJOYW1lXFxcIiA6YWN0aXZlSXRlbT1cXFwibW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHRcXFwiIDpmb3JiaWRkZW49XFxcIm1vZHVsZS5mb3JiaWRkZW5cXFwiIDpjbGFzcz1cXFwie2hpZ2hMaWdodDogbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQsIGZvcmJpZGRlbjogbW9kdWxlLmZvcmJpZGRlbn1cXFwiIEBjbGljaz1cXFwiYWN0aXZlTW9kdWxlKG1vZHVsZSlcXFwiPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwva2VlcC1hbGl2ZT5cXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvbmF2PlxcblxcbiAgICA8cCBjbGFzcz0nY29udGVudCcgOmlzPVxcXCJjb25zdGFudENvbmZpZy5ST1dfVEFHXFxcIiA6c3BlbGxjaGVjaz1cXFwic3BlbGxjaGVja1xcXCIgcmVmPVxcXCJjb250ZW50XFxcIiBpZD1cXFwiZWRpdG9yLWNvbnRlbnRcXFwiIDpzdHlsZT1cXFwiY29udGVudFN0eWxlXFxcIiBkYXRhLWVkaXRvcj1cXFwiY29udGVudFxcXCJcXG4gICAgICAgICBjb250ZW50ZWRpdGFibGU9XFxcInBsYWludGV4dC1vbmx5XFxcIiB2LWRyYWctcGljPVxcXCJoYW5kbGVEcmFnUGljXFxcIj5cXG4gICAgPC9wPlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VkaXRvci9lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIGRpcmVjdGl2ZSBkcmFnIGFuZCBkcm9wIHBpY1xuICoqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGxldCBlZGl0b3IgPSB2bm9kZS5jb250ZXh0XG4gICAgbGV0IG9uRHJhZ092ZXIgPSBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICB0cnkge1xuICAgICAgICBzZWxlY3Rpb24uY29sbGFwc2UoZS50YXJnZXQsIDEpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5jb2xsYXBzZShlLnRhcmdldCwgMClcbiAgICAgIH1cbiAgICAgIGVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIGVkaXRvci5tb2R1bGVJbnNwZWN0KClcbiAgICB9XG4gICAgbGV0IG9uRHJhZ0xlYXZlID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBsZXQgb25Ecm9wID0gZSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIGlmIChlLmRhdGFUcmFuc2ZlciAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIGxldCBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBmaWxlcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICBsZXQgY3VyRmlsZSA9IGZpbGVzW2ldXG4gICAgICAgICAgaWYgKGN1ckZpbGUuc2l6ZSAmJiBjdXJGaWxlLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICAgICAgICAgIGJpbmRpbmcudmFsdWUoY3VyRmlsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBvbkRyYWdFbnRlciwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyLCBmYWxzZSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBvbkRyYWdMZWF2ZSwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG5cbiAgICBlbC5fX2RyYWdPdmVySGFuZGxlciA9IG9uRHJhZ092ZXJcbiAgICBlbC5fX2RyYWdMZWF2ZUhhbmRsZXIgPSBvbkRyYWdMZWF2ZVxuICAgIGVsLl9fZHJvcEhhbmRsZXIgPSBvbkRyb3BcbiAgfSxcbiAgdW5iaW5kIChlbCwgYmluZGluZykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZWwuX19kcmFnT3ZlckhhbmRsZXIpXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZWwuX19kcmFnTGVhdmVIYW5kbGVyKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlbC5fX2Ryb3BIYW5kbGVyKVxuICAgIGRlbGV0ZSBlbC5fX2RyYWdPdmVySGFuZGxlclxuICAgIGRlbGV0ZSBlbC5fX2RyYWdMZWF2ZUhhbmRsZXJcbiAgICBkZWxldGUgZWwuX19kcm9wSGFuZGxlclxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yL2RyYWctcGljLmpzIiwiLypcbiAqIGxvYWQgcnVsZSBrZXl3b3JkcyBvZiBzdHlsZSBpbnNwZWN0XG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJNb2R1bGUsIG1vZHVsZXMpIHtcbiAgbGV0IHJlc3VsdCA9IFtdXG4gIGxldCBjdXJFeGNsdWRlID0gY3VyTW9kdWxlLmV4Y2x1ZGVcbiAgaWYgKEFycmF5LmlzQXJyYXkoY3VyRXhjbHVkZSkpIHJldHVybiBjdXJFeGNsdWRlXG4gIGlmICh0eXBlb2YgY3VyRXhjbHVkZSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgbW9kdWxlTmFtZUxpc3QgPSBbXVxuICAgIG1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgIGlmIChtLm5hbWUpIHtcbiAgICAgICAgbW9kdWxlTmFtZUxpc3QucHVzaChtLm5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICBtb2R1bGVOYW1lTGlzdCA9IEFycmF5LmZyb20obmV3IFNldChtb2R1bGVOYW1lTGlzdCkpXG4gICAgc3dpdGNoIChjdXJFeGNsdWRlKSB7XG4gICAgICAvLyBleGNsdWRlIGFsbCBtb2R1bGVzXG4gICAgICBjYXNlICdBTEwnOlxuICAgICAgICByZXN1bHQgPSBtb2R1bGVOYW1lTGlzdFxuICAgICAgICBicmVha1xuICAgICAgLy8gZXhjbHVkZSBhbGwgbW9kdWxlcyBidXQgY3VycmVudCBtb2R1bGVcbiAgICAgIGNhc2UgJ0FMTF9CVVRfTVlTRUxGJzpcbiAgICAgICAgcmVzdWx0ID0gbW9kdWxlTmFtZUxpc3RcbiAgICAgICAgcmVzdWx0LnNwbGljZShyZXN1bHQuaW5kZXhPZihjdXJNb2R1bGUubmFtZSksIDEpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYWxpZ246ICflr7npvZDmlrnlvI8nLFxuICAgIGltYWdlOiAn5Zu+54mHJyxcbiAgICBsaXN0OiAn5YiX6KGoJyxcbiAgICBsaW5rOiAn6ZO+5o6lJyxcbiAgICB1bmxpbms6ICfljrvpmaTpk77mjqUnLFxuICAgIHRhYmxlOiAn6KGo5qC8JyxcbiAgICBmb250OiAn5paH5a2XJyxcbiAgICAnZnVsbCBzY3JlZW4nOiAn5YWo5bGPJyxcbiAgICB0ZXh0OiAn5o6S54mIJyxcbiAgICBlcmFzZXI6ICfmoLzlvI/muIXpmaQnLFxuICAgIGluZm86ICflhbPkuo4nLFxuICAgIGNvbG9yOiAn6aKc6ImyJyxcbiAgICAncGxlYXNlIGVudGVyIGEgdXJsJzogJ+ivt+i+k+WFpeWcsOWdgCcsXG4gICAgJ2NyZWF0ZSBsaW5rJzogJ+WIm+W7uumTvuaOpScsXG4gICAgYm9sZDogJ+WKoOeylycsXG4gICAgaXRhbGljOiAn5YC+5pacJyxcbiAgICB1bmRlcmxpbmU6ICfkuIvliJLnur8nLFxuICAgICdzdHJpa2UgdGhyb3VnaCc6ICfliKDpmaTnur8nLFxuICAgIHN1YnNjcmlwdDogJ+S4iuaghycsXG4gICAgc3VwZXJzY3JpcHQ6ICfkuIvmoIcnLFxuICAgIGhlYWRpbmc6ICfmoIfpopgnLFxuICAgICdmb250IG5hbWUnOiAn5a2X5L2TJyxcbiAgICAnZm9udCBzaXplJzogJ+aWh+Wtl+Wkp+WwjycsXG4gICAgJ2xlZnQganVzdGlmeSc6ICflt6blr7npvZAnLFxuICAgICdjZW50ZXIganVzdGlmeSc6ICflsYXkuK0nLFxuICAgICdyaWdodCBqdXN0aWZ5JzogJ+WPs+Wvuem9kCcsXG4gICAgJ29yZGVyZWQgbGlzdCc6ICfmnInluo/liJfooagnLFxuICAgICd1bm9yZGVyZWQgbGlzdCc6ICfml6Dluo/liJfooagnLFxuICAgICdmb3JlIGNvbG9yJzogJ+WJjeaZr+iJsicsXG4gICAgJ2JhY2tncm91bmQgY29sb3InOiAn6IOM5pmv6ImyJyxcbiAgICAncm93IGNvdW50JzogJ+ihjOaVsCcsXG4gICAgJ2NvbHVtbiBjb3VudCc6ICfliJfmlbAnLFxuICAgIHNhdmU6ICfnoa7lrponLFxuICAgIHVwbG9hZDogJ+S4iuS8oCcsXG4gICAgcHJvZ3Jlc3M6ICfov5vluqYnLFxuICAgIHVua25vd246ICfmnKrnn6UnLFxuICAgICdwbGVhc2Ugd2FpdCc6ICfor7fnqI3nrYknLFxuICAgIGVycm9yOiAn6ZSZ6K+vJyxcbiAgICBhYm9ydDogJ+S4reaWrScsXG4gICAgcmVzZXQ6ICfph43nva4nLFxuICAgIGhyOiAn5YiG6ZqU57q/JyxcbiAgICB1bmRvOiAn5pKk5raIJyxcbiAgICAnbGluZSBoZWlnaHQnOiAn6KGM6auYJyxcbiAgICAnZXhjZWVkIHNpemUgbGltaXQnOiAn6LaF5Ye65aSn5bCP6ZmQ5Yi2J1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pMThuL3poLWNuLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsaWduOiAnYWxpZ24nLFxuICAgIGltYWdlOiAnaW1hZ2UnLFxuICAgIGxpc3Q6ICdsaXN0JyxcbiAgICBsaW5rOiAnbGluaycsXG4gICAgdW5saW5rOiAndW5saW5rJyxcbiAgICB0YWJsZTogJ3RhYmxlJyxcbiAgICBmb250OiAnZm9udCcsXG4gICAgJ2Z1bGwgc2NyZWVuJzogJ2Z1bGwgc2NyZWVuJyxcbiAgICB0ZXh0OiAndGV4dCcsXG4gICAgZXJhc2VyOiAncmVtb3ZlIGZvcm1hdCcsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgICdwbGVhc2UgZW50ZXIgYSB1cmwnOiAncGxlYXNlIGVudGVyIGEgdXJsJyxcbiAgICAnY3JlYXRlIGxpbmsnOiAnY3JlYXRlIGxpbmsnLFxuICAgIGJvbGQ6ICdib2xkJyxcbiAgICBpdGFsaWM6ICdpdGFsaWMnLFxuICAgIHVuZGVybGluZTogJ3VuZGVybGluZScsXG4gICAgJ3N0cmlrZSB0aHJvdWdoJzogJ3N0cmlrZSB0aHJvdWdoJyxcbiAgICBzdWJzY3JpcHQ6ICdzdWJzY3JpcHQnLFxuICAgIHN1cGVyc2NyaXB0OiAnc3VwZXJzY3JpcHQnLFxuICAgIGhlYWRpbmc6ICdoZWFkaW5nJyxcbiAgICAnZm9udCBuYW1lJzogJ2ZvbnQgbmFtZScsXG4gICAgJ2ZvbnQgc2l6ZSc6ICdmb250IHNpemUnLFxuICAgICdsZWZ0IGp1c3RpZnknOiAnbGVmdCBqdXN0aWZ5JyxcbiAgICAnY2VudGVyIGp1c3RpZnknOiAnY2VudGVyIGp1c3RpZnknLFxuICAgICdyaWdodCBqdXN0aWZ5JzogJ3JpZ2h0IGp1c3RpZnknLFxuICAgICdvcmRlcmVkIGxpc3QnOiAnb3JkZXJlZCBsaXN0JyxcbiAgICAndW5vcmRlcmVkIGxpc3QnOiAndW5vcmRlcmVkIGxpc3QnLFxuICAgICdmb3JlIGNvbG9yJzogJ2ZvcmUgY29sb3InLFxuICAgICdiYWNrZ3JvdW5kIGNvbG9yJzogJ2JhY2tncm91bmQgY29sb3InLFxuICAgICdyb3cgY291bnQnOiAncm93IGNvdW50JyxcbiAgICAnY29sdW1uIGNvdW50JzogJ2NvbHVtbiBjb3VudCcsXG4gICAgc2F2ZTogJ3NhdmUnLFxuICAgIHVwbG9hZDogJ3VwbG9hZCcsXG4gICAgcHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxuICAgICdwbGVhc2Ugd2FpdCc6ICdwbGVhc2Ugd2FpdCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gICAgYWJvcnQ6ICdhYm9ydCcsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgaHI6ICdob3Jpem9udGFsIHJ1bGUnLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICAnbGluZSBoZWlnaHQnOiAnbGluZSBoZWlnaHQnLFxuICAgICdleGNlZWQgc2l6ZSBsaW1pdCc6ICdleGNlZWQgc2l6ZSBsaW1pdCdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaTE4bi9lbi11cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=