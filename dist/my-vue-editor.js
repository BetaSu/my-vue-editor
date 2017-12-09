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
/******/ 	var hotCurrentHash = "7e46f5dcbdd9185b9b7e"; // eslint-disable-line no-unused-vars
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZTQ2ZjVkY2JkZDkxODViOWI3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2Fzc2lzdC1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWw/NDQzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2l0YWxpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bmRlcmxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pY291cnQtdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlLWhhbmRsZXIvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5TGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeUNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9oYW5kbGUtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bD81YmM2Iiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL3poLWNuLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2VuLXVzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRzIiwiYWRkU3R5bGUiLCJyaCIsImFyZyIsImRvQWRkIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGUiLCJzdHlsZU5hbWUiLCJ0ZXh0Tm9kZXMiLCJnZXRBbGxUZXh0Tm9kZXNJblJhbmdlIiwibGVuZ3RoIiwicmFuZ2UiLCJjb2xsYXBzZWQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInBhcmVudE5vZGUiLCJlZGl0Wm9uZSIsIm5ld1JvdyIsInRhZyIsImlubmVyVGV4dCIsIm5vZGVWYWx1ZSIsInJlcGxhY2VDaGlsZCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kQ29udGFpbmVyIiwidGV4dE5vZGUiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsImlzSW5saW5lRWxlbWVudCIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN1YnN0cmluZyIsImZyb250UGFydCIsImNyZWF0ZVRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJleGVjQ29tbWFuZCIsImVsZW1lbnQiLCJzdXJyb3VuZENvbnRlbnRzIiwicGFyZW50QmxvY2siLCJnZXRQYXJlbnRCbG9ja05vZGUiLCJsaW5lSGVpZ2h0IiwidiIsInMiLCJnZXRTZWxlY3Rpb24iLCJpbm5lckhUTUwiLCJoYXNDaGlsZE5vZGVzIiwiaSIsImN1ck5vZGUiLCJkZWxldGVDb250ZW50cyIsImluc2VydE5vZGUiLCJjb2xsYXBzZSIsIm5vZGVMaXN0Iiwid2VpZ2h0aW5nIiwidGV4dHMiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwiZG9JbmRlbnQiLCJub2RlTmFtZSIsImZpbmRTcGVjaWFsQW5jZXN0b3IiLCJST1dfVEFHIiwiaW5jbHVkZXMiLCJwdXNoIiwidHlwZSIsImN1ckxldmVsIiwiaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWciLCJNQVhfSU5ERU5UX0xFVkVMIiwiUk9XX1RBR19VUFBFUkNBU0UiLCJjdXJQZXJjZW50IiwiSU5ERU5UX1NUWUxFX05BTUUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiT1VUREVOVF9TVFlMRV9OQU1FIiwiSU5ERU5UX1dJRFRIX1BFUkNFTlQiLCJvdXRkZW50UmVzdWx0IiwiZG9PdXRkZW50IiwidGFyZ2V0SW5kZW50Iiwic3RhcnROb2RlIiwiYW5jaG9yTm9kZSIsInJvdyIsImdldFJvdyIsImNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUiLCJtYXliZUlzVWwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCJpc0NvbGxhcHNlZCIsImVkaXRvciIsIm1vZHVsZXNNYXAiLCJtb2R1bGVJbnNwZWN0UmVzdWx0IiwiYnIiLCJvdXRlckhUTUwiLCJpbnNlcnRJbWFnZSIsImZvbnRTaXplIiwiZGVsZXRlIiwicGFzdGUiLCJlbnRlciIsImtleWRvd24iLCJ1bmRlcmxpbmUiLCJzdHJpa2VUaHJvdWdoIiwiYm9sZCIsIml0YWxpYyIsImp1c3RpZnlMZWZ0IiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlSaWdodCIsImFzc2lnbiIsIm1peGluIiwic291cmNlIiwiZXh0IiwiayIsImRhdGFTcmMiLCJkYXRhRGVzYyIsImlzT2JqIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZGF0YSIsInNsaWNlIiwibWV0aG9kcyIsImlkIiwiZGF0YXNldCIsImVkaXRvclJvdyIsImNyZWF0ZVJhbmRvbUlkIiwiY29udGVudGVkaXRhYmxlIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiaW5zZXJ0QWZ0ZXIiLCJuZXdFbGVtZW50IiwidGFyZ2V0RWxlbWVudCIsInBhcmVudCIsImxhc3RDaGlsZCIsInByZWZmaXgiLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJlZGl0Wm9uZV9jYWNoZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRSYW5nZUF0IiwiY2hlY2tBbGwiLCJjcmVhdGVSYW5nZSIsImVuZCIsInNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZ2V0UmFuZ2UiLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsIkluc3BlY3RvciIsIm1vZHVsZU5hbWUiLCJwYXJhbSIsIkVycm9yIiwidGFnTWFwIiwidG9VcHBlckNhc2UiLCJzdHlsZXMiLCJhdHRyaWJ1dGVzIiwicmVzdWx0IiwiaW5zcGVjdFJlc3VsdCIsIm1vZHVsZVN0eWxlIiwiY3VyVmFsdWUiLCJpdGVtIiwiYWN0aXZlSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWwiLCJtb2R1bGVBdHRyIiwidmFsdWUiLCJub2RlVmFsIiwicnVuIiwiZm4iLCJyZW1vdmVEdXBsYXRlIiwibGlzdCIsInNhbWVTdHlsZU1hcCIsIm0iLCJmcm9tIiwiU2V0IiwiYW0iLCJtZXJnZWRTdHlsZSIsIkVkaXRvciIsIm9wdGlvbnMiLCJtb2R1bGVzIiwicmVzZXJ2ZWROYW1lcyIsIm5hbWUiLCJjb21wb25lbnRzIiwiZXh0ZW5kTW9kdWxlcyIsIm1vZHVsZSIsImN1ckNvbmZpZyIsIm1vZHVsZUNvbmZpZyIsImZvcmJpZGRlbiIsImluc3BlY3QiLCJpbnNwZWN0b3IiLCJhZGQiLCJiaW5kIiwiZXhjbHVkZSIsInRhYiIsInByb3BzIiwiYWN0aXZlSXRlbSIsIlN0cmluZyIsIkJvb2xlYW4iLCJ0YWJOYW1lIiwiaWNvbnMiLCJpY29uIiwiaGFzVGFiIiwiaTE4biIsImN1c3RvbUkxOG4iLCJrZXkiLCJsYW5ndWFnZSIsImxvY2FsZSIsInNob3J0Y3V0Iiwia2V5Q29kZSIsInNwZWxsY2hlY2siLCJjb21wbyIsImNvbnN0YW50Q29uZmlnIiwiVnVlIiwiY29tcG9uZW50IiwiZXhwb3J0cyIsImRlZmluZVByb3BlcnR5Iiwic2VhcmNoRWxlbWVudCIsImZyb21JbmRleCIsIlR5cGVFcnJvciIsIm8iLCJsZW4iLCJuIiwibWF4IiwiYWJzIiwiVGV4dCIsImNvbnRhaW5zIiwidGVtcGxhdGUiLCJ3YXRjaCIsIm1hcCIsImluZGV4IiwiYWxpZ25NYXAiLCJjaG9vc2VkIiwic2V0QWxpZ24iLCIkcGFyZW50Iiwic2F2ZUN1cnJlbnRSYW5nZSIsIm1vZHVsZUluc3BlY3QiLCJjaGFuZ2VBbGlnbiIsInByZV9pbmRleCIsImlzTmFOIiwidGFyZ2V0X2luZGV4IiwiY29uZmlnIiwiZm9udEF0dHJNYXAiLCJjdXJNb2R1bGUiLCJzaG93TGlzdCIsInNob3dMaXN0Rm4iLCIkcmVmcyIsImNsYXNzTGlzdCIsImNoYW5nZUF0dHIiLCJzZXRGb250TmFtZSIsInNldEhlYWRpbmciLCJoZWFkaW5nIiwibW91bnRlZCIsImRlZmF1bHQiLCJoYW5kbGVyIiwidG9nZ2xlRnVsbFNjcmVlbiIsImNhblVwbG9hZFNhbWVJbWFnZSIsImltZ09jY3VweU5ld1JvdyIsIm1heFNpemUiLCJjb21wcmVzcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsInBpY2siLCJmaWxlIiwiY2xpY2siLCJwcm9jZXNzIiwiZSIsImZpbGVzIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzaG93IiwiaXNJblF1b3RlIiwiYWN0aXZlTW9kdWxlcyIsIm91dGRlbnQiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiaW5kZW50IiwiY29udGVudCIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiekluZGV4IiwiYXV0b0hlaWdodCIsImRpcmVjdGl2ZXMiLCJkcmFnUGljIiwiYWxsQWN0aXZlTW9kdWxlcyIsImZ1bGxTY3JlZW4iLCJwYXJlbnRFbCIsIiRlbCIsIm5leHRFbCIsImJvZHkiLCJjb21wdXRlZCIsImNvbnRlbnRTdHlsZSIsImlubmVySGVpZ2h0IiwidG9vbGJhciIsImNsaWVudEhlaWdodCIsImdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0iLCJjbGVhckFjdGl2ZU1vZHVsZUl0ZW0iLCJoYW5kbGVEcmFnUGljIiwiZHJhZyIsImVuYWJsZUZ1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImZvY3VzIiwiYmx1ciIsImNvbW1hbmQiLCJleGVjT25seSIsInJlc3RvcmVTZWxlY3Rpb24iLCIkZW1pdCIsInN0YXJ0IiwiVEVYVF9OT0RFIiwiYWN0aXZlTW9kdWxlIiwiJG5leHRUaWNrIiwidGV4dEFmdGV0RFIiLCJ0YWdSZXN1bHQiLCJ0YWdSZXN1bHRSRCIsInN0eWxlUmVzdWx0Iiwic3R5bGVSZXN1bHRSRCIsImF0dHJpYnV0ZVJlc3VsdCIsImF0dHJpYnV0ZVJlc3VsdFJEIiwiY29uY2F0IiwiZXhjbHVkZUxpc3QiLCJleGNNb2R1bGUiLCJleGMiLCJjdXJNb2R1bGVBY3RpdmVJdGVtIiwiY3JlYXRlZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbW9uIiwic2Nyb2xsSW50b1ZpZXciLCJ0b3VjaEhhbmRsZXIiLCJiZWZvcmUiLCJpc0VtcHR5Tm9kZSIsInRleHRUb1JvdyIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwidXBkYXRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveWVkIiwib3RoZXJOb2RlIiwiUmFuZ2VIYW5kbGVyIiwiUmFuZ2UiLCJiZWZvcmVMaXN0IiwiZXhpc3RDb21tYW5kIiwiY3VzdG9tQ29tbWFuZCIsImFmdGVyTGlzdCIsImFjdGl2ZXMiLCJyZXR1cm5EYXRhIiwib3JpZ2luIiwiRmlsZSIsImhhbmRsZUZpbGUiLCJmaWVsZE5hbWUiLCJ0aGVuIiwicnN0Iiwic2l6ZSIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJpbWdJZCIsImluc2VydEJhc2U2NCIsImJhc2U2NCIsImNhdGNoIiwiZXJyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZWFkQXNEYXRhVVJMIiwiY3VyUm93IiwiZm9yY2VHZXRSb3ciLCJyZXBsYWNlU3JjQWZ0ZXJVcGxvYWRGaW5pc2giLCJyZXBsYWNlSW1nIiwiZGVsZXRlSW1nV2hlblVwbG9hZEZhaWwiLCJkZWxldGVJbWciLCJzcmMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJiYXNlTm9kZSIsImluc2VydEhUTUwiLCJmb2N1c05vZGUiLCJhbmNob3JPZmZzZXQiLCJmb2N1c09mZnNldCIsImNsaXBib2FyZERhdGEiLCJzZXREYXRhIiwiZ2V0RGF0YSIsIm9yaWdpbmFsRXZlbnQiLCJjcmVhdGVUZXh0UmFuZ2UiLCJ0ZXh0UmFuZ2UiLCJzZWwiLCJ0ZW1wRWwiLCJtb3ZlVG9FbGVtZW50VGV4dCIsInNlbGVjdCIsInVsT3JPbCIsIm5vZGVDdG4iLCJmaW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZSIsImV4aXN0U3R5bGUiLCJmaW5kRXhpc3RUYWdUaWxsQm9yZGVyIiwiZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlIiwibmV3RE9NIiwiY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0IiwiZG9tIiwiZGVlcGVzdE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsImRlZXBlc3RJZCIsIm5ld1RleHQiLCJxIiwicXVvdGUiLCJnZXREZXNjZW5kYW50VGV4dE5vZGVzIiwicXVvdGVSb3dzIiwicm93cyIsImNoaWxkcmVuIiwicXIiLCJjb250YWluZXIiLCJxdW90ZUJsb2NrIiwiYW5jaG9yUm93IiwiY2xvbmVOb2RlIiwiY3VyUXVvdGUiLCJsYXN0RWxlbWVudENoaWxkIiwiY3RuIiwicHJlUm93IiwiZ2V0UHJldmlvdXNSb3ciLCJsYXN0RWxlIiwicG9wIiwiaW5wdXQiLCJ0IiwiYWZ0ZXJXaGljaCIsImlzRW1wdHlSb3ciLCJ0YXJnZXRJbmRleCIsInN0YXJ0SW5kZXgiLCJjaGlsZCIsInVuZGVmaW5lZCIsImNvbGxhcHNlQXRSb3ciLCJ0b2RvSWQiLCJjaGVja2JveHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYyIsImJ0biIsImN0bkNoZWNrZWRMb2dpYyIsImNoZWNrZWQiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uY2hhbmdlIiwib25pbnB1dCIsIm9ua2V5ZG93biIsImRlbGV0ZVRvZG8iLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRCbG9jayIsImN1clJhbmdlIiwiYWZ0ZXJEZWxldGUiLCJmaXJzdFJvdyIsImZpc3RFbGVtZW50Q2hpbGQiLCJmaXJzdENoaWxkIiwiZWRpdG9yVG9kbyIsImRlbGV0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwiY2xlYXJJbnRlcnZhbCIsImdldFJvd3MiLCJtZXJnZUFycmF5Iiwic291cmNlQXJyIiwiZXh0QXJyIiwiZWwiLCJhbmNlc3RvciIsImdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJlbmRFbCIsImVuZEluZGV4IiwiZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJzdGFydEVsIiwiYmxvY2tOb2RlTmFtZXMiLCJpbmxpbmVOb2RlTmFtZXMiLCJpc0lubGluZU9yVGV4dCIsImlzSW5saW5lIiwiaXNUZXh0IiwiZ2V0QWxsU3BlY2lmeU5vZGUiLCJzZWFyY2hPcGluaW9uIiwidGFyZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJ0YWdzIiwib3BpbmlvbktleXMiLCJwYXNzIiwiYSIsIm9waW5pb24iLCJhbmNlc3Rvck5vZGVOYW1lIiwibnVtIiwic2VsZWN0b3IiLCJmaXJzdE9uZSIsImJvcmRlciIsImNvbnRlbnRab25lIiwiYW5jZXN0b3JzIiwiaXNUYXJnZXQiLCJnZXROb2RlTnVtIiwicm9vdEVsIiwiaXNSb3ciLCJ3cmFwcGVyTm9kZU5hbWUiLCJzZXBlcmF0ZUJ5QnIiLCJlbGVtZW50cyIsInNlYXJjaExlZnQiLCJzZWFyY2hSaWdodCIsImVsZSIsImxhc3RPbmUiLCJoYW5kbGVyQnIiLCJwcmV2aW91c1NpYmxpbmciLCJkaXJlY3Rpb24iLCJuZXh0RGlyIiwidGFyZ2V0Tm9kZSIsInVuc2hpZnQiLCJyb3dJbmRleCIsInRhZ05hbWVsaXN0IiwiZGVlcGVzdCIsImJpbmRpbmciLCJ2bm9kZSIsImNvbnRleHQiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJkYXRhVHJhbnNmZXIiLCJjb25zb2xlIiwibG9nIiwiY3VyRmlsZSIsIl9fZHJhZ092ZXJIYW5kbGVyIiwiX19kcmFnTGVhdmVIYW5kbGVyIiwiX19kcm9wSGFuZGxlciIsInVuYmluZCIsImN1ckV4Y2x1ZGUiLCJtb2R1bGVOYW1lTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJhbGlnbiIsImltYWdlIiwibGluayIsInVubGluayIsInRhYmxlIiwiZm9udCIsImVyYXNlciIsImluZm8iLCJjb2xvciIsInN1YnNjcmlwdCIsInN1cGVyc2NyaXB0Iiwic2F2ZSIsInVwbG9hZCIsInByb2dyZXNzIiwidW5rbm93biIsImVycm9yIiwiYWJvcnQiLCJyZXNldCIsImhyIiwidW5kbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQTJEO0FBQzNEO0FBQ0E7QUFDQSxXQUFHOztBQUVILG9EQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7OztBQUlBO0FBQ0Esc0RBQThDO0FBQzlDO0FBQ0E7QUFDQSxvQ0FBNEI7QUFDNUIscUNBQTZCO0FBQzdCLHlDQUFpQzs7QUFFakMsK0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUFzQztBQUN0QztBQUNBO0FBQ0EscUNBQTZCO0FBQzdCLHFDQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQSw0REFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1Q0FBdUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1Q0FBdUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFB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QUhLO0FBSVhzVyxVQUFNLE1BSks7QUFLWEMsWUFBUSxRQUxHO0FBTVhDLFdBQU8sT0FOSTtBQU9YQyxVQUFNLE1BUEs7QUFRWCxtQkFBZSxhQVJKO0FBU1g3ZCxVQUFNLE1BVEs7QUFVWDhkLFlBQVEsZUFWRztBQVdYQyxVQUFNLE1BWEs7QUFZWEMsV0FBTyxPQVpJO0FBYVgsMEJBQXNCLG9CQWJYO0FBY1gsbUJBQWUsYUFkSjtBQWVYbmIsVUFBTSxNQWZLO0FBZ0JYQyxZQUFRLFFBaEJHO0FBaUJYSCxlQUFXLFdBakJBO0FBa0JYLHNCQUFrQixnQkFsQlA7QUFtQlhzYixlQUFXLFdBbkJBO0FBb0JYQyxpQkFBYSxhQXBCRjtBQXFCWDlSLGFBQVMsU0FyQkU7QUFzQlgsaUJBQWEsV0F0QkY7QUF1QlgsaUJBQWEsV0F2QkY7QUF3Qlgsb0JBQWdCLGNBeEJMO0FBeUJYLHNCQUFrQixnQkF6QlA7QUEwQlgscUJBQWlCLGVBMUJOO0FBMkJYLG9CQUFnQixjQTNCTDtBQTRCWCxzQkFBa0IsZ0JBNUJQO0FBNkJYLGtCQUFjLFlBN0JIO0FBOEJYLHdCQUFvQixrQkE5QlQ7QUErQlgsaUJBQWEsV0EvQkY7QUFnQ1gsb0JBQWdCLGNBaENMO0FBaUNYK1IsVUFBTSxNQWpDSztBQWtDWEMsWUFBUSxRQWxDRztBQW1DWEMsY0FBVSxVQW5DQztBQW9DWEMsYUFBUyxTQXBDRTtBQXFDWCxtQkFBZSxhQXJDSjtBQXNDWEMsV0FBTyxPQXRDSTtBQXVDWEMsV0FBTyxPQXZDSTtBQXdDWEMsV0FBTyxPQXhDSTtBQXlDWEMsUUFBSSxpQkF6Q087QUEwQ1hDLFVBQU0sTUExQ0s7QUEyQ1gsbUJBQWUsYUEzQ0o7QUE0Q1gseUJBQXFCO0FBNUNWLEMiLCJmaWxlIjoibXktdnVlLWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibXlWdWVFZGl0b3JcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibXlWdWVFZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibXlWdWVFZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlbXlWdWVFZGl0b3JcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlbXlWdWVFZGl0b3JcIl0gPSBcclxuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdFx0aWYocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0fSA7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gXHRcdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcclxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xyXG4gXHRcdDtcclxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0aWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcclxuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcclxuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XHJcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxyXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcclxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm47XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdFxyXG4gXHRcclxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xyXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjdlNDZmNWRjYmRkOTE4NWI5YjdlXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XHJcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xyXG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0aWYoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcclxuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XHJcbiBcdFx0XHRpZihtZS5ob3QuYWN0aXZlKSB7XHJcbiBcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcclxuIFx0XHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPCAwKVxyXG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XHJcbiBcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXF1ZXN0ICsgXCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICsgbW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XHJcbiBcdFx0fTtcclxuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH07XHJcbiBcdFx0Zm9yKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xyXG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInJlYWR5XCIpXHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XHJcbiBcdFx0XHRcdHRocm93IGVycjtcclxuIFx0XHRcdH0pO1xyXG4gXHRcclxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcclxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xyXG4gXHRcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XHJcbiBcdFx0XHRcdFx0aWYoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fTtcclxuIFx0XHRyZXR1cm4gZm47XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhvdCA9IHtcclxuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcclxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXHJcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxyXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcclxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcclxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcclxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRpZighbCkgcmV0dXJuIGhvdFN0YXR1cztcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcclxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxyXG4gXHRcdH07XHJcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xyXG4gXHRcdHJldHVybiBob3Q7XHJcbiBcdH1cclxuIFx0XHJcbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xyXG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XHJcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcclxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcclxuIFx0fVxyXG4gXHRcclxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XHJcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcclxuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3REZWZlcnJlZDtcclxuIFx0XHJcbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xyXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xyXG4gXHRcdHZhciBpc051bWJlciA9ICgraWQpICsgXCJcIiA9PT0gaWQ7XHJcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcImlkbGVcIikgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XHJcbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xyXG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoIXVwZGF0ZSkge1xyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XHJcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XHJcbiBcdFxyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xyXG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXHJcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0aG90VXBkYXRlID0ge307XHJcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDA7XHJcbiBcdFx0XHR7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcclxuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cclxuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcclxuIFx0XHRcdHJldHVybjtcclxuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGlmKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcclxuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xyXG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XHJcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XHJcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xyXG4gXHRcdGlmKCFkZWZlcnJlZCkgcmV0dXJuO1xyXG4gXHRcdGlmKGhvdEFwcGx5T25VcGRhdGUpIHtcclxuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXHJcbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cclxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcclxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcclxuIFx0XHRcdH0pLnRoZW4oXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdCk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XHJcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiBcdFxyXG4gXHRcdHZhciBjYjtcclxuIFx0XHR2YXIgaTtcclxuIFx0XHR2YXIgajtcclxuIFx0XHR2YXIgbW9kdWxlO1xyXG4gXHRcdHZhciBtb2R1bGVJZDtcclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcclxuIFx0XHRcdFx0XHRpZDogaWRcclxuIFx0XHRcdFx0fTtcclxuIFx0XHRcdH0pO1xyXG4gXHRcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcclxuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fbWFpbikge1xyXG4gXHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdGlmKCFwYXJlbnQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcclxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xyXG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxyXG4gXHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFxyXG4gXHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXHJcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxyXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcclxuIFx0XHRcdH07XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XHJcbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XHJcbiBcdFx0XHRcdGlmKGEuaW5kZXhPZihpdGVtKSA8IDApXHJcbiBcdFx0XHRcdFx0YS5wdXNoKGl0ZW0pO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcclxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XHJcbiBcdFxyXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XHJcbiBcdFx0XHRjb25zb2xlLndhcm4oXCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCIpO1xyXG4gXHRcdH07XHJcbiBcdFxyXG4gXHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcclxuIFx0XHRcdFx0dmFyIHJlc3VsdDtcclxuIFx0XHRcdFx0aWYoaG90VXBkYXRlW2lkXSkge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcclxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxyXG4gXHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcclxuIFx0XHRcdFx0aWYocmVzdWx0LmNoYWluKSB7XHJcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHN3aXRjaChyZXN1bHQudHlwZSkge1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiIGluIFwiICsgcmVzdWx0LnBhcmVudElkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGlzcG9zZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGRlZmF1bHQ6XHJcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGFib3J0RXJyb3IpIHtcclxuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcclxuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9BcHBseSkge1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdFx0XHRcdGZvcihtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0Rpc3Bvc2UpIHtcclxuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxyXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiYgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcclxuIFx0XHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xyXG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xyXG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdHZhciBpZHg7XHJcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XHJcbiBcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0aWYoIW1vZHVsZSkgY29udGludWU7XHJcbiBcdFxyXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcclxuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XHJcbiBcdFx0XHRcdGNiKGRhdGEpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcclxuIFx0XHJcbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxyXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcclxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXHJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXHJcbiBcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xyXG4gXHRcdFx0XHRpZighY2hpbGQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkge1xyXG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIGRlcGVuZGVuY3k7XHJcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XHJcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcclxuIFx0XHRcdFx0XHRcdGlmKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XHJcbiBcdFxyXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXHJcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcclxuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XHJcbiBcdFx0XHRcdFx0XHRpZihjYikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihjYWxsYmFja3MuaW5kZXhPZihjYikgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcclxuIFx0XHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcclxuIFx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XHJcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIyKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JnaW5hbEVycm9yOiBlcnIsIC8vIFRPRE8gcmVtb3ZlIGluIHdlYnBhY2sgNFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyMjtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcclxuIFx0XHRpZihlcnJvcikge1xyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcclxuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoMTEpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZTQ2ZjVkY2JkZDkxODViOWI3ZSIsImltcG9ydCBpbnNlcnRJbWFnZSBmcm9tICcuL2luc2VydEltYWdlJ1xuaW1wb3J0IGZvbnRTaXplIGZyb20gJy4vZm9udFNpemUnXG5pbXBvcnQgcGFzdGUgZnJvbSAnLi9wYXN0ZSdcbmltcG9ydCBlbnRlciBmcm9tICcuL2VudGVyJ1xuaW1wb3J0IHVuZGVybGluZSBmcm9tICcuL3VuZGVybGluZSdcbmltcG9ydCBzdHJpa2VUaHJvdWdoIGZyb20gJy4vc3RyaWtlVGhyb3VnaCdcbmltcG9ydCBpdGFsaWMgZnJvbSAnLi9pdGFsaWMnXG5pbXBvcnQgYm9sZCBmcm9tICcuL2JvbGQnXG5pbXBvcnQgcXVvdGUgZnJvbSAnLi9xdW90ZSdcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcbmltcG9ydCBrZXlkb3duIGZyb20gJy4va2V5ZG93bidcbmltcG9ydCBkZWxldGVNb2R1bGUgZnJvbSAnLi9kZWxldGUnXG5pbXBvcnQganVzdGlmeVJpZ2h0IGZyb20gJy4vanVzdGlmeVJpZ2h0J1xuaW1wb3J0IGp1c3RpZnlMZWZ0IGZyb20gJy4vanVzdGlmeUxlZnQnXG5pbXBvcnQganVzdGlmeUNlbnRlciBmcm9tICcuL2p1c3RpZnlDZW50ZXInXG5pbXBvcnQge2lzT2JqfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuY29uc3QgY29tbWFuZHMgPSB7XG4gIC8qXG4gICAqIGFkZCBhIHN0eWxlIGF0dHJpYnV0ZSBpbiByYW5nZShoYXZlIGJ1ZylcbiAgICogQHBhcmFtIHtvYmp9IGFyZyBpbmNsdWRlXG4gICAqICAgICAga2V5OiBzdHlsZSBuYW1lXG4gICAqICAgICAgdmFsdWU6IHN0eWxlIHZhbHVlXG4gICAqKi9cbiAgYWRkU3R5bGUgKHJoLCBhcmcpIHtcbiAgICBmdW5jdGlvbiBkb0FkZChub2RlKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmcpLmZvckVhY2goc3R5bGVOYW1lID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZVtzdHlsZU5hbWVdID0gYXJnW3N0eWxlTmFtZV1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFpc09iaihhcmcpKSByZXR1cm5cbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICBpZiAoIXRleHROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBkb0FkZChub2RlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQgJiYgdGV4dE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGV0IG5vZGUgPSB0ZXh0Tm9kZXNbMF0ucGFyZW50Tm9kZVxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHt0YWc6ICdwJ30pXG4gICAgICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHROb2Rlc1swXS5ub2RlVmFsdWVcbiAgICAgICAgICBub2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHROb2Rlc1swXSlcbiAgICAgICAgICBkb0FkZChuZXdSb3cpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZG9BZGQobm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXh0Tm9kZXMubGVuZ3RoID09PSAxICYmIHRleHROb2Rlc1swXSA9PT0gcmgucmFuZ2Uuc3RhcnRDb250YWluZXJcbiAgICAgICYmIHRleHROb2Rlc1swXSA9PT0gcmgucmFuZ2UuZW5kQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IHRleHROb2Rlc1swXVxuICAgICAgaWYgKHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwXG4gICAgICAgICYmIHJoLnJhbmdlLmVuZE9mZnNldCA9PT0gdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKFxuICAgICAgICByaC5yYW5nZS5zdGFydE9mZnNldCwgcmgucmFuZ2UuZW5kT2Zmc2V0KVxuICAgICAgZG9BZGQoc3BhbilcbiAgICAgIGNvbnN0IGZyb250UGFydCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgcmgucmFuZ2Uuc3RhcnRPZmZzZXQpKVxuICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJvbnRQYXJ0LCB0ZXh0Tm9kZSlcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcocmgucmFuZ2UuZW5kT2Zmc2V0KVxuICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQoc3BhbiwgMClcbiAgICAgIHJoLnJhbmdlLnNldEVuZChzcGFuLCAxKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGV4dE5vZGVzLmZvckVhY2goKHRleHROb2RlKSA9PiB7XG4gICAgICBpZiAodGV4dE5vZGUgPT09IHJoLnJhbmdlLnN0YXJ0Q29udGFpbmVyKSB7XG4gICAgICAgIGlmIChyaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoXG4gICAgICAgICAgMCwgcmgucmFuZ2Uuc3RhcnRPZmZzZXQpXG4gICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICByaC5yYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgMClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGV4dE5vZGUgPT09IHJoLnJhbmdlLmVuZENvbnRhaW5lcikge1xuICAgICAgICBpZiAocmgucmFuZ2UuZW5kT2Zmc2V0ID09PSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCB0ZXh0Tm9kZS50ZXh0Q29udGVudC5sZW5ndGgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBkb0FkZChzcGFuKVxuICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH0sXG4gICdmb3JtYXRCbG9jaycgKHJoLCBhcmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsIGFyZykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBoYWNrXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKVxuICAgIHJoLnJhbmdlLnN1cnJvdW5kQ29udGVudHMoZWxlbWVudClcbiAgICByZXR1cm5cbiAgfSxcbiAgJ2xpbmVIZWlnaHQnIChyaCwgYXJnKSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgdGV4dE5vZGVzLmZvckVhY2goKHRleHROb2RlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRCbG9jayA9IHJoLmdldFBhcmVudEJsb2NrTm9kZSh0ZXh0Tm9kZSlcbiAgICAgIGlmIChwYXJlbnRCbG9jaykge1xuICAgICAgICBwYXJlbnRCbG9jay5zdHlsZS5saW5lSGVpZ2h0ID0gYXJnXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm5cbiAgfSxcbiAgJ2luc2VydEhUTUwnIChyaCwgYXJnKSB7XG4gICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIGFyZykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb21tYW5kc1snZm9yY2VJbnNlcnRIVE1MJ10ocmgsIGFyZylcbiAgfSxcbiAgLypcbiAgICogaW5zZXJ0SFRNTCB3b3VsZCBpbnNlcnQgRE9NIGFzIHJvdydzIGNoaWxkXG4gICAqIGZvcmNlSW5zZXJ0SFRNTCB3b3VsZCBpbnNlcnQgRE9NIGFzIGFuY2hvck5vZGUgb2YgcmFuZ2UgXG4gICAqKi9cbiAgJ2ZvcmNlSW5zZXJ0SFRNTCcgKHJoLCBhcmcpIHtcbiAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIHYuaW5uZXJIVE1MID0gYXJnXG4gICAgaWYgKHYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VyTm9kZSA9IHYuY2hpbGROb2Rlc1tpXVxuICAgICAgICByaC5yYW5nZS5kZWxldGVDb250ZW50cygpXG4gICAgICAgIHJoLnJhbmdlLmluc2VydE5vZGUoY3VyTm9kZSlcbiAgICAgICAgcy5jb2xsYXBzZShjdXJOb2RlLCAxKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcbiAgJ2luZGVudCcgKHJoLCBhcmcpIHtcbiAgICBsZXQgbm9kZUxpc3QgPSBbXVxuICAgIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgIHdlaWdodGluZyhyaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICB3ZWlnaHRpbmcodGV4dClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIC8vIGNhbmNlbCB0b2RvIGluZGVudFxuICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkb0luZGVudChub2RlLm5vZGVOYW1lLCBub2RlKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB3ZWlnaHRpbmcodGV4dCkge1xuICAgICAgbGV0IG5vZGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsICdsaScpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgY29uc3RhbnQuUk9XX1RBRylcbiAgICAgIGlmIChub2RlICYmICFub2RlTGlzdC5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9JbmRlbnQodHlwZSwgbm9kZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0xJJzpcbiAgICAgICAgICBsZXQgY3VyTGV2ZWwgPSByaC5ob3dNYW55TmVzdEFuY2VzdG9yU2FtZVRhZyhub2RlLCAnVUwnKSB8fCByaC5ob3dNYW55TmVzdEFuY2VzdG9yU2FtZVRhZyhub2RlLCAnT0wnKVxuICAgICAgICAgIGlmIChjdXJMZXZlbCA+PSBjb25zdGFudC5NQVhfSU5ERU5UX0xFVkVMKSBicmVha1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbmRlbnQnLCBmYWxzZSwgYXJnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgY29uc3RhbnQuUk9XX1RBR19VUFBFUkNBU0U6XG4gICAgICAgICAgbGV0IGN1clBlcmNlbnQgPSBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSB8fCAnMCdcbiAgICAgICAgICBjdXJQZXJjZW50ID0gTnVtYmVyKGN1clBlcmNlbnQucmVwbGFjZSgnJScsICcnKSlcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5PVVRERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBpZiAoY3VyUGVyY2VudCAvIGNvbnN0YW50LklOREVOVF9XSURUSF9QRVJDRU5UID49IGNvbnN0YW50Lk1BWF9JTkRFTlRfTEVWRUwpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gY3VyUGVyY2VudCArICclJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gY3VyUGVyY2VudCArIGNvbnN0YW50LklOREVOVF9XSURUSF9QRVJDRU5UICsgJyUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnb3V0ZGVudCcgKHJoLCBhcmcpIHtcbiAgICBsZXQgbm9kZUxpc3QgPSBbXVxuICAgIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgIHdlaWdodGluZyhyaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICB3ZWlnaHRpbmcodGV4dClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IG91dGRlbnRSZXN1bHRcbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgb3V0ZGVudFJlc3VsdCA9IGRvT3V0ZGVudChub2RlLm5vZGVOYW1lLCBub2RlKVxuICAgIH0pXG4gICAgcmV0dXJuIG91dGRlbnRSZXN1bHRcblxuICAgIGZ1bmN0aW9uIHdlaWdodGluZyh0ZXh0KSB7XG4gICAgICBsZXQgbm9kZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgJ2xpJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgaWYgKG5vZGUgJiYgIW5vZGVMaXN0LmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb091dGRlbnQodHlwZSwgbm9kZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0xJJzpcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnb3V0ZGVudCcsIGZhbHNlLCBhcmcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBjb25zdGFudC5ST1dfVEFHX1VQUEVSQ0FTRTpcbiAgICAgICAgICBsZXQgY3VyUGVyY2VudCA9IG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdIHx8ICcwJ1xuICAgICAgICAgIGN1clBlcmNlbnQgPSBOdW1iZXIoY3VyUGVyY2VudC5yZXBsYWNlKCclJywgJycpKVxuICAgICAgICAgIGlmIChjdXJQZXJjZW50ID09PSAwKSByZXR1cm4gJ05PX05FRURfT1VUREVOVCdcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5PVVRERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBsZXQgdGFyZ2V0SW5kZW50ID0gY3VyUGVyY2VudCAtIGNvbnN0YW50LklOREVOVF9XSURUSF9QRVJDRU5UXG4gICAgICAgICAgaWYgKHRhcmdldEluZGVudCA8IDApIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSB0YXJnZXRJbmRlbnQgKyAnJSdcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnaW5zZXJ0VW5vcmRlcmVkTGlzdCcgKHJoLCBhcmcpIHtcbiAgICAvLyBkbyBub3QgaW5zZXJ0IHVsIGludG8gYSByb3dcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKVxuICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhzdGFydE5vZGUpXG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuXG4gICAgLy8gc3RhcnROb2RlIGlzIGVkaXQgem9uZVxuICAgIGlmICghcm93KSByZXR1cm5cblxuICAgIHJvdyA9IHJoLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUocm93LCBjb25zdGFudC5ST1dfVEFHKVxuXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gbGV0IHVsIGJlIGEgcm93XG4gICAgICBsZXQgbWF5YmVJc1VsID0gcm93LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBpZiAobWF5YmVJc1VsICYmIG1heWJlSXNVbC5ub2RlTmFtZSA9PT0gJ1VMJyAmJiByb3cubm9kZU5hbWUgIT09ICdVTCcpIHtcbiAgICAgICAgcm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1heWJlSXNVbCwgcm93KVxuICAgICAgICByb3cgPSBtYXliZUlzVWxcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIGJyXG4gICAgICBpZiAocm93Lm5leHRTaWJsaW5nICYmIHJvdy5uZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICByb3cubmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cubmV4dFNpYmxpbmcpXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgdHJlYXRtZW50IGZvciB1bD5saSwgdG8gbGV0IG1vZHVsZSBpbnNwZWN0IHJ1blxuICAgICAgLy8gaWYgdWwgYW5kIG9sIGlzIGJpbmQgaW50byBhIG1vZHVsZSdzIHRhYiwgdGhpcyBzaG91bGQgYmUgY2hhbmdlXG4gICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAhcmguZWRpdG9yLm1vZHVsZXNNYXBbJ3VsJ10ubW9kdWxlSW5zcGVjdFJlc3VsdCkge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCAnJiM4MjAzOycpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICAgIGlmIChzdGFydE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHJvdy5vdXRlckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnaW5zZXJ0T3JkZXJlZExpc3QnIChyaCwgYXJnKSB7XG4gICAgLy8gZG8gbm90IGluc2VydCB1bCBpbnRvIGEgcm93XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpXG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhzdGFydE5vZGUpXG5cbiAgICAvLyBzdGFydE5vZGUgaXMgZWRpdCB6b25lXG4gICAgaWYgKCFyb3cpIHJldHVyblxuXG4gICAgcm93ID0gcmguY3JlYXRlV3JhcHBlckZvcklubGluZShyb3csIGNvbnN0YW50LlJPV19UQUcpXG5cbiAgICBpZiAocm93KSB7XG4gICAgICAvLyBsZXQgdWwgYmUgYSByb3dcbiAgICAgIGxldCBtYXliZUlzVWwgPSByb3cuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGlmIChtYXliZUlzVWwgJiYgbWF5YmVJc1VsLm5vZGVOYW1lID09PSAnT0wnICYmIHJvdy5ub2RlTmFtZSAhPT0gJ09MJykge1xuICAgICAgICByb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWF5YmVJc1VsLCByb3cpXG4gICAgICAgIHJvdyA9IG1heWJlSXNVbFxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgYnJcbiAgICAgIGlmIChyb3cubmV4dFNpYmxpbmcgJiYgcm93Lm5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIHJvdy5uZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdy5uZXh0U2libGluZylcbiAgICAgIH1cblxuICAgICAgLy8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yIHVsPmxpLCB0byBsZXQgbW9kdWxlIGluc3BlY3QgcnVuXG4gICAgICAvLyBpZiB1bCBhbmQgb2wgaXMgYmluZCBpbnRvIGEgbW9kdWxlJ3MgdGFiLCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VcbiAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmICFyaC5lZGl0b3IubW9kdWxlc01hcFsnb2wnXS5tb2R1bGVJbnNwZWN0UmVzdWx0KSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsICcmIzgyMDM7JylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgICAgaWYgKHN0YXJ0Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgcm93Lm91dGVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmNvbW1hbmRzLmluc2VydEltYWdlID0gaW5zZXJ0SW1hZ2VcbmNvbW1hbmRzLmZvbnRTaXplID0gZm9udFNpemVcbmNvbW1hbmRzLmRlbGV0ZSA9IGRlbGV0ZU1vZHVsZVxuY29tbWFuZHMucGFzdGUgPSBwYXN0ZVxuY29tbWFuZHMuZW50ZXIgPSBlbnRlclxuY29tbWFuZHMua2V5ZG93biA9IGtleWRvd25cbmNvbW1hbmRzLnVuZGVybGluZSA9IHVuZGVybGluZVxuY29tbWFuZHMuc3RyaWtlVGhyb3VnaCA9IHN0cmlrZVRocm91Z2hcbmNvbW1hbmRzLmJvbGQgPSBib2xkXG5jb21tYW5kcy5pdGFsaWMgPSBpdGFsaWNcbmNvbW1hbmRzLmp1c3RpZnlMZWZ0ID0ganVzdGlmeUxlZnRcbmNvbW1hbmRzLmp1c3RpZnlDZW50ZXIgPSBqdXN0aWZ5Q2VudGVyXG5jb21tYW5kcy5qdXN0aWZ5UmlnaHQgPSBqdXN0aWZ5UmlnaHRcbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHF1b3RlLCB0b2RvKVxuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVhfSU5ERU5UX0xFVkVMOiAxMCxcbiAgSU5ERU5UX1dJRFRIX1BFUkNFTlQ6IDgsXG4gIElOREVOVF9TVFlMRV9OQU1FOiAnbWFyZ2luTGVmdCcsXG4gIE9VVERFTlRfU1RZTEVfTkFNRTogJ21hcmdpblJpZ2h0JyxcbiAgUk9XX1RBRzogJ3AnLFxuICBST1dfVEFHX1VQUEVSQ0FTRTogJ1AnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnQtY29uZmlnLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb250LXRhYiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDRweCA0cHggNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmZvbnQtdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4uZm9udC10YWIuZm9yYmlkZGVuIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5mb250LXRhYiAuaWNvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24ge1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsZWZ0OiAtMXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIGxpIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA2MnB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyIS4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogc2hhZG93IGNsb25lXG4gKiBAcGFyYW0gc291cmNlICAgIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSBleHQgICAgICAgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBtaXhpbiA9IChzb3VyY2UgPSB7fSwgZXh0ID0ge30pID0+IHtcbiAgICBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgLy8gZm9yIGRhdGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKGsgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgY29uc3QgZGF0YVNyYyA9IHNvdXJjZVtrXVxuICAgICAgICAgICAgY29uc3QgZGF0YURlc2MgPSBleHRba11cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YURlc2MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFTcmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW2tdID0gZGF0YURlc2NcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2Vba10gPSAoKSA9PiBtaXhpbihkYXRhU3JjKCksIGRhdGFEZXNjKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291cmNlW2tdID0gZXh0W2tdXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzb3VyY2Vcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqID0gZGF0YSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkuc2xpY2UoLTcsIC0xKSA9PT0gJ09iamVjdCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYWJicixcXG5hZGRyZXNzLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG52YXIsXFxuYixcXG5pLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxO1xcbn1cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbmEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5pbnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5kZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbmFiYnJbdGl0bGVdLFxcbmRmblt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDAwO1xcbiAgY3Vyc29yOiBoZWxwO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm15LXZ1ZS1lZGl0b3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgaW1nIHtcXG4gIG1heC13aWR0aDogOTglO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnM6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAudGFiIHtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLnRhYiAuaWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDRweCA2cHg7XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxMnB4IEFyaWFsLCBIZWx2ZXRpY2EsIFRhaG9tYSwgVmVyZGFuYSwgU2Fucy1TZXJpZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bjpob3ZlciB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4uaGlnaExpZ2h0IHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bi5mb3JiaWRkZW4ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBmb250IHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBibG9ja3F1b3RlIHtcXG4gIG1pbi13aWR0aDogMzhweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSB7XFxuICBtYXJnaW46IDE0cHggMCAxNHB4IDM1cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IC0yMXB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiAwcHggNHB4IDAgLTI0cHg7XFxuICBjb2xvcjogI2I3YjdiNztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IHVsIHVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiA1LjUlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMy41cHg7XFxuICBsZWZ0OiAyLjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjY2RjOWM1O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlciEuL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBuPXQoKTtmb3IodmFyIHIgaW4gbikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1uW3JdfX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgaT1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7big2KSxuKDcpLGUuZXhwb3J0cz1uKDgpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT1udWxsLHRoaXMuX3ZhbHVlPW51bGwsdGhpcy5fZGVmZXJyZWRzPVtdLGwoZSxyKGEsdGhpcykscihzLHRoaXMpKX1mdW5jdGlvbiBvKGUpe3ZhciB0PXRoaXM7cmV0dXJuIG51bGw9PT10aGlzLl9zdGF0ZT92b2lkIHRoaXMuX2RlZmVycmVkcy5wdXNoKGUpOnZvaWQgZihmdW5jdGlvbigpe3ZhciBuPXQuX3N0YXRlP2Uub25GdWxmaWxsZWQ6ZS5vblJlamVjdGVkO2lmKG51bGw9PT1uKXJldHVybiB2b2lkKHQuX3N0YXRlP2UucmVzb2x2ZTplLnJlamVjdCkodC5fdmFsdWUpO3ZhciByO3RyeXtyPW4odC5fdmFsdWUpfWNhdGNoKGkpe3JldHVybiB2b2lkIGUucmVqZWN0KGkpfWUucmVzb2x2ZShyKX0pfWZ1bmN0aW9uIGEoZSl7dHJ5e2lmKGU9PT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgdD1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gdm9pZCBsKHIodCxlKSxyKGEsdGhpcykscihzLHRoaXMpKX10aGlzLl9zdGF0ZT0hMCx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1jYXRjaChuKXtzLmNhbGwodGhpcyxuKX19ZnVuY3Rpb24gcyhlKXt0aGlzLl9zdGF0ZT0hMSx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1mdW5jdGlvbiB1KCl7Zm9yKHZhciBlPTAsdD10aGlzLl9kZWZlcnJlZHMubGVuZ3RoO3Q+ZTtlKyspby5jYWxsKHRoaXMsdGhpcy5fZGVmZXJyZWRzW2VdKTt0aGlzLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBjKGUsdCxuLHIpe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMucmVzb2x2ZT1uLHRoaXMucmVqZWN0PXJ9ZnVuY3Rpb24gbChlLHQsbil7dmFyIHI9ITE7dHJ5e2UoZnVuY3Rpb24oZSl7cnx8KHI9ITAsdChlKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLG4oZSkpfSl9Y2F0Y2goaSl7aWYocilyZXR1cm47cj0hMCxuKGkpfX12YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0fHxmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGUsMSl9LGQ9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfTtpLnByb3RvdHlwZVtcImNhdGNoXCJdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHIsaSl7by5jYWxsKG4sbmV3IGMoZSx0LHIsaSkpfSl9LGkuYWxsPWZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoMT09PWFyZ3VtZW50cy5sZW5ndGgmJmQoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzKTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiByKG8sYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKGUpe3IobyxlKX0sbil9ZVtvXT1hLDA9PT0tLWkmJnQoZSl9Y2F0Y2godSl7bih1KX19aWYoMD09PWUubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIGk9ZS5sZW5ndGgsbz0wO288ZS5sZW5ndGg7bysrKXIobyxlW29dKX0pfSxpLnJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmNvbnN0cnVjdG9yPT09aT9lOm5ldyBpKGZ1bmN0aW9uKHQpe3QoZSl9KX0saS5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7bihlKX0pfSxpLnJhY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTAsaT1lLmxlbmd0aDtpPnI7cisrKWVbcl0udGhlbih0LG4pfSl9LGkuX3NldEltbWVkaWF0ZUZuPWZ1bmN0aW9uKGUpe2Y9ZX0saS5wcm90b3R5cGUuYWx3YXlzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBufSl9LGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbn0pfSl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwodCxuKDIpLnNldEltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiBpKGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dmFyIG89bigzKS5uZXh0VGljayxhPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSxzPUFycmF5LnByb3RvdHlwZS5zbGljZSx1PXt9LGM9MDt0LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkoYS5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShhLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlLmNsb3NlKCl9LGkucHJvdG90eXBlLnVucmVmPWkucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30saS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0sdCkpfSx0LnNldEltbWVkaWF0ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24oZSl7dmFyIG49YysrLHI9YXJndW1lbnRzLmxlbmd0aDwyPyExOnMuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHVbbl09ITAsbyhmdW5jdGlvbigpe3Vbbl0mJihyP2UuYXBwbHkobnVsbCxyKTplLmNhbGwobnVsbCksdC5jbGVhckltbWVkaWF0ZShuKSl9KSxufSx0LmNsZWFySW1tZWRpYXRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cjpmdW5jdGlvbihlKXtkZWxldGUgdVtlXX19KS5jYWxsKHQsbigyKS5zZXRJbW1lZGlhdGUsbigyKS5jbGVhckltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe2M9ITEsYS5sZW5ndGg/dT1hLmNvbmNhdCh1KTpsPS0xLHUubGVuZ3RoJiZyKCl9ZnVuY3Rpb24gcigpe2lmKCFjKXt2YXIgZT1zZXRUaW1lb3V0KG4pO2M9ITA7Zm9yKHZhciB0PXUubGVuZ3RoO3Q7KXtmb3IoYT11LHU9W107KytsPHQ7KWEmJmFbbF0ucnVuKCk7bD0tMSx0PXUubGVuZ3RofWE9bnVsbCxjPSExLGNsZWFyVGltZW91dChlKX19ZnVuY3Rpb24gaShlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIG8oKXt9dmFyIGEscz1lLmV4cG9ydHM9e30sdT1bXSxjPSExLGw9LTE7cy5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO3UucHVzaChuZXcgaShlLHQpKSwxIT09dS5sZW5ndGh8fGN8fHNldFRpbWVvdXQociwwKX0saS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scy50aXRsZT1cImJyb3dzZXJcIixzLmJyb3dzZXI9ITAscy5lbnY9e30scy5hcmd2PVtdLHMudmVyc2lvbj1cIlwiLHMudmVyc2lvbnM9e30scy5vbj1vLHMuYWRkTGlzdGVuZXI9byxzLm9uY2U9byxzLm9mZj1vLHMucmVtb3ZlTGlzdGVuZXI9byxzLnJlbW92ZUFsbExpc3RlbmVycz1vLHMuZW1pdD1vLHMuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scy5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scy5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHMudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3ZhciBlPX5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpJiZ+bmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKFwiR29vZ2xlXCIpJiYhfm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKTtyZXR1cm4gZSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKykvKS5wb3AoKTw9NTM0fHwvTVFRQnJvd3Nlci9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9dmFyIHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBCbG9iLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKT93aW5kb3cuQmxvYjpmdW5jdGlvbihlLHQpe3ZhciBuPW5ldyh3aW5kb3cuQmxvYkJ1aWxkZXJ8fHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlcnx8d2luZG93Lk1TQmxvYkJ1aWxkZXJ8fHdpbmRvdy5Nb3pCbG9iQnVpbGRlcik7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtuLmFwcGVuZChlKX0pLG4uZ2V0QmxvYih0P3QudHlwZTp2b2lkIDApfSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBlPXRoaXMsbj1bXSxpPUFycmF5KDIxKS5qb2luKFwiLVwiKSsoK25ldyBEYXRlKigxZTE2Kk1hdGgucmFuZG9tKCkpKS50b1N0cmluZygzNiksbz1YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDt0aGlzLmdldFBhcnRzPWZ1bmN0aW9uKCl7cmV0dXJuIG4udG9TdHJpbmcoKX0sdGhpcy5hcHBlbmQ9ZnVuY3Rpb24oZSx0LHIpe24ucHVzaChcIi0tXCIraSsnXFxyXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytlKydcIicpLHQgaW5zdGFuY2VvZiBCbG9iPyhuLnB1c2goJzsgZmlsZW5hbWU9XCInKyhyfHxcImJsb2JcIikrJ1wiXFxyXFxuQ29udGVudC1UeXBlOiAnK3QudHlwZStcIlxcclxcblxcclxcblwiKSxuLnB1c2godCkpOm4ucHVzaChcIlxcclxcblxcclxcblwiK3QpLG4ucHVzaChcIlxcclxcblwiKX0sdCsrLFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGEpe3ZhciBzLHUsYz10aGlzO2E9PT1lPyhuLnB1c2goXCItLVwiK2krXCItLVxcclxcblwiKSx1PW5ldyByKG4pLHM9bmV3IEZpbGVSZWFkZXIscy5vbmxvYWQ9ZnVuY3Rpb24oKXtvLmNhbGwoYyxzLnJlc3VsdCl9LHMub25lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBlfSxzLnJlYWRBc0FycmF5QnVmZmVyKHUpLHRoaXMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIraSksdC0tLDA9PXQmJihYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1vKSk6by5jYWxsKHRoaXMsYSl9fXZhciB0PTA7cmV0dXJuIGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRm9ybURhdGEucHJvdG90eXBlKSxlfSgpO2UuZXhwb3J0cz17QmxvYjpyLEZvcm1EYXRhOm4oKT9pOkZvcm1EYXRhfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4hIWUuZXhpZmRhdGF9ZnVuY3Rpb24gbyhlLHQpe3Q9dHx8ZS5tYXRjaCgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2ltKVsxXXx8XCJcIixlPWUucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dpbSxcIlwiKTtmb3IodmFyIG49YXRvYihlKSxyPW4ubGVuZ3RoLGk9bmV3IEFycmF5QnVmZmVyKHIpLG89bmV3IFVpbnQ4QXJyYXkoaSksYT0wO3I+YTthKyspb1thXT1uLmNoYXJDb2RlQXQoYSk7cmV0dXJuIGl9ZnVuY3Rpb24gYShlLHQpe3ZhciBuPW5ldyBYTUxIdHRwUmVxdWVzdDtuLm9wZW4oXCJHRVRcIixlLCEwKSxuLnJlc3BvbnNlVHlwZT1cImJsb2JcIixuLm9ubG9hZD1mdW5jdGlvbihlKXsoMjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzKSYmdCh0aGlzLnJlc3BvbnNlKX0sbi5zZW5kKCl9ZnVuY3Rpb24gcyhlLHQpe2Z1bmN0aW9uIG4obil7dmFyIHI9dShuKSxpPWMobik7ZS5leGlmZGF0YT1yfHx7fSxlLmlwdGNkYXRhPWl8fHt9LHQmJnQuY2FsbChlKX1pZihlLnNyYylpZigvXmRhdGFcXDovaS50ZXN0KGUuc3JjKSl7dmFyIHI9byhlLnNyYyk7bihyKX1lbHNlIGlmKC9eYmxvYlxcOi9pLnRlc3QoZS5zcmMpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtuKGUudGFyZ2V0LnJlc3VsdCl9LGEoZS5zcmMsZnVuY3Rpb24oZSl7aS5yZWFkQXNBcnJheUJ1ZmZlcihlKX0pfWVsc2V7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0O3Mub25sb2FkPWZ1bmN0aW9uKCl7MjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzP24ocy5yZXNwb25zZSk6dChuZXcgRXJyb3IoXCJDb3VsZCBub3QgbG9hZCBpbWFnZVwiKSkscz1udWxsfSxzLm9wZW4oXCJHRVRcIixlLnNyYywhMCkscy5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiLHMuc2VuZChudWxsKX1lbHNlIGlmKHdpbmRvdy5GaWxlUmVhZGVyJiYoZSBpbnN0YW5jZW9mIHdpbmRvdy5CbG9ifHxlIGluc3RhbmNlb2Ygd2luZG93LkZpbGUpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLnRhcmdldC5yZXN1bHQuYnl0ZUxlbmd0aCksbihlLnRhcmdldC5yZXN1bHQpfSxpLnJlYWRBc0FycmF5QnVmZmVyKGUpfX1mdW5jdGlvbiB1KGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKTtpZihwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLmJ5dGVMZW5ndGgpLDI1NSE9dC5nZXRVaW50OCgwKXx8MjE2IT10LmdldFVpbnQ4KDEpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIiksITE7Zm9yKHZhciBuLHI9MixpPWUuYnl0ZUxlbmd0aDtpPnI7KXtpZigyNTUhPXQuZ2V0VWludDgocikpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgbWFya2VyIGF0IG9mZnNldCBcIityK1wiLCBmb3VuZDogXCIrdC5nZXRVaW50OChyKSksITE7aWYobj10LmdldFVpbnQ4KHIrMSkscCYmY29uc29sZS5sb2cobiksMjI1PT1uKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIkZvdW5kIDB4RkZFMSBtYXJrZXJcIiksZyh0LHIrNCx0LmdldFVpbnQxNihyKzIpLTIpO3IrPTIrdC5nZXRVaW50MTYocisyKX19ZnVuY3Rpb24gYyhlKXt2YXIgdD1uZXcgRGF0YVZpZXcoZSk7aWYocCYmY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIrZS5ieXRlTGVuZ3RoKSwyNTUhPXQuZ2V0VWludDgoMCl8fDIxNiE9dC5nZXRVaW50OCgxKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpLCExO2Zvcih2YXIgbj0yLHI9ZS5ieXRlTGVuZ3RoLGk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gNTY9PT1lLmdldFVpbnQ4KHQpJiY2Nj09PWUuZ2V0VWludDgodCsxKSYmNzM9PT1lLmdldFVpbnQ4KHQrMikmJjc3PT09ZS5nZXRVaW50OCh0KzMpJiY0PT09ZS5nZXRVaW50OCh0KzQpJiY0PT09ZS5nZXRVaW50OCh0KzUpfTtyPm47KXtpZihpKHQsbikpe3ZhciBvPXQuZ2V0VWludDgobis3KTtvJTIhPT0wJiYobys9MSksMD09PW8mJihvPTQpO3ZhciBhPW4rOCtvLHM9dC5nZXRVaW50MTYobis2K28pO3JldHVybiBsKGUsYSxzKX1uKyt9fWZ1bmN0aW9uIGwoZSx0LG4pe2Zvcih2YXIgcixpLG8sYSxzLHU9bmV3IERhdGFWaWV3KGUpLGM9e30sbD10O3Qrbj5sOykyOD09PXUuZ2V0VWludDgobCkmJjI9PT11LmdldFVpbnQ4KGwrMSkmJihhPXUuZ2V0VWludDgobCsyKSxhIGluIFMmJihvPXUuZ2V0SW50MTYobCszKSxzPW8rNSxpPVNbYV0scj1oKHUsbCs1LG8pLGMuaGFzT3duUHJvcGVydHkoaSk/Y1tpXWluc3RhbmNlb2YgQXJyYXk/Y1tpXS5wdXNoKHIpOmNbaV09W2NbaV0scl06Y1tpXT1yKSksbCsrO3JldHVybiBjfWZ1bmN0aW9uIGYoZSx0LG4scixpKXt2YXIgbyxhLHMsdT1lLmdldFVpbnQxNihuLCFpKSxjPXt9O2ZvcihzPTA7dT5zO3MrKylvPW4rMTIqcysyLGE9cltlLmdldFVpbnQxNihvLCFpKV0sIWEmJnAmJmNvbnNvbGUubG9nKFwiVW5rbm93biB0YWc6IFwiK2UuZ2V0VWludDE2KG8sIWkpKSxjW2FdPWQoZSxvLHQsbixpKTtyZXR1cm4gY31mdW5jdGlvbiBkKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsYyxsLGY9ZS5nZXRVaW50MTYodCsyLCFpKSxkPWUuZ2V0VWludDMyKHQrNCwhaSksZz1lLmdldFVpbnQzMih0KzgsIWkpK247c3dpdGNoKGYpe2Nhc2UgMTpjYXNlIDc6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50OCh0KzgsIWkpO2ZvcihvPWQ+ND9nOnQrOCxhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50OChvK3UpO3JldHVybiBhO2Nhc2UgMjpyZXR1cm4gbz1kPjQ/Zzp0KzgsaChlLG8sZC0xKTtjYXNlIDM6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MTYodCs4LCFpKTtmb3Iobz1kPjI/Zzp0KzgsYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDE2KG8rMip1LCFpKTtyZXR1cm4gYTtjYXNlIDQ6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MzIodCs4LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDU6aWYoMT09ZClyZXR1cm4gYz1lLmdldFVpbnQzMihnLCFpKSxsPWUuZ2V0VWludDMyKGcrNCwhaSkscz1uZXcgTnVtYmVyKGMvbCkscy5udW1lcmF0b3I9YyxzLmRlbm9taW5hdG9yPWwscztmb3IoYT1bXSx1PTA7ZD51O3UrKyljPWUuZ2V0VWludDMyKGcrOCp1LCFpKSxsPWUuZ2V0VWludDMyKGcrNCs4KnUsIWkpLGFbdV09bmV3IE51bWJlcihjL2wpLGFbdV0ubnVtZXJhdG9yPWMsYVt1XS5kZW5vbWluYXRvcj1sO3JldHVybiBhO2Nhc2UgOTppZigxPT1kKXJldHVybiBlLmdldEludDMyKHQrOCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldEludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDEwOmlmKDE9PWQpcmV0dXJuIGUuZ2V0SW50MzIoZywhaSkvZS5nZXRJbnQzMihnKzQsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRJbnQzMihnKzgqdSwhaSkvZS5nZXRJbnQzMihnKzQrOCp1LCFpKTtyZXR1cm4gYX19ZnVuY3Rpb24gaChlLHQsbil7dmFyIHIsaT1cIlwiO2ZvcihyPXQ7dCtuPnI7cisrKWkrPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5nZXRVaW50OChyKSk7cmV0dXJuIGl9ZnVuY3Rpb24gZyhlLHQpe2lmKFwiRXhpZlwiIT1oKGUsdCw0KSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgRVhJRiBkYXRhISBcIitoKGUsdCw0KSksITE7dmFyIG4scixpLG8sYSxzPXQrNjtpZigxODc2MT09ZS5nZXRVaW50MTYocykpbj0hMTtlbHNle2lmKDE5Nzg5IT1lLmdldFVpbnQxNihzKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHg0OTQ5IG9yIDB4NEQ0RClcIiksITE7bj0hMH1pZig0MiE9ZS5nZXRVaW50MTYocysyLCFuKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHgwMDJBKVwiKSwhMTt2YXIgdT1lLmdldFVpbnQzMihzKzQsIW4pO2lmKDg+dSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAoRmlyc3Qgb2Zmc2V0IGxlc3MgdGhhbiA4KVwiLGUuZ2V0VWludDMyKHMrNCwhbikpLCExO2lmKHI9ZihlLHMscyt1LHYsbiksci5FeGlmSUZEUG9pbnRlcil7bz1mKGUscyxzK3IuRXhpZklGRFBvaW50ZXIsdyxuKTtmb3IoaSBpbiBvKXtzd2l0Y2goaSl7Y2FzZVwiTGlnaHRTb3VyY2VcIjpjYXNlXCJGbGFzaFwiOmNhc2VcIk1ldGVyaW5nTW9kZVwiOmNhc2VcIkV4cG9zdXJlUHJvZ3JhbVwiOmNhc2VcIlNlbnNpbmdNZXRob2RcIjpjYXNlXCJTY2VuZUNhcHR1cmVUeXBlXCI6Y2FzZVwiU2NlbmVUeXBlXCI6Y2FzZVwiQ3VzdG9tUmVuZGVyZWRcIjpjYXNlXCJXaGl0ZUJhbGFuY2VcIjpjYXNlXCJHYWluQ29udHJvbFwiOmNhc2VcIkNvbnRyYXN0XCI6Y2FzZVwiU2F0dXJhdGlvblwiOmNhc2VcIlNoYXJwbmVzc1wiOmNhc2VcIlN1YmplY3REaXN0YW5jZVJhbmdlXCI6Y2FzZVwiRmlsZVNvdXJjZVwiOm9baV09YltpXVtvW2ldXTticmVhaztjYXNlXCJFeGlmVmVyc2lvblwiOmNhc2VcIkZsYXNocGl4VmVyc2lvblwiOm9baV09U3RyaW5nLmZyb21DaGFyQ29kZShvW2ldWzBdLG9baV1bMV0sb1tpXVsyXSxvW2ldWzNdKTticmVhaztjYXNlXCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiOm9baV09Yi5Db21wb25lbnRzW29baV1bMF1dK2IuQ29tcG9uZW50c1tvW2ldWzFdXStiLkNvbXBvbmVudHNbb1tpXVsyXV0rYi5Db21wb25lbnRzW29baV1bM11dfXJbaV09b1tpXX19aWYoci5HUFNJbmZvSUZEUG9pbnRlcil7YT1mKGUscyxzK3IuR1BTSW5mb0lGRFBvaW50ZXIseSxuKTtmb3IoaSBpbiBhKXtzd2l0Y2goaSl7Y2FzZVwiR1BTVmVyc2lvbklEXCI6YVtpXT1hW2ldWzBdK1wiLlwiK2FbaV1bMV0rXCIuXCIrYVtpXVsyXStcIi5cIithW2ldWzNdfXJbaV09YVtpXX19cmV0dXJuIHJ9dmFyIHA9ITEsbT1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG0/ZTp0aGlzIGluc3RhbmNlb2YgbT92b2lkKHRoaXMuRVhJRndyYXBwZWQ9ZSk6bmV3IG0oZSl9O1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHMmJih0PWUuZXhwb3J0cz1tKSx0LkVYSUY9bTt2YXIgdz1tLlRhZ3M9ezM2ODY0OlwiRXhpZlZlcnNpb25cIiw0MDk2MDpcIkZsYXNocGl4VmVyc2lvblwiLDQwOTYxOlwiQ29sb3JTcGFjZVwiLDQwOTYyOlwiUGl4ZWxYRGltZW5zaW9uXCIsNDA5NjM6XCJQaXhlbFlEaW1lbnNpb25cIiwzNzEyMTpcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCIsMzcxMjI6XCJDb21wcmVzc2VkQml0c1BlclBpeGVsXCIsMzc1MDA6XCJNYWtlck5vdGVcIiwzNzUxMDpcIlVzZXJDb21tZW50XCIsNDA5NjQ6XCJSZWxhdGVkU291bmRGaWxlXCIsMzY4Njc6XCJEYXRlVGltZU9yaWdpbmFsXCIsMzY4Njg6XCJEYXRlVGltZURpZ2l0aXplZFwiLDM3NTIwOlwiU3Vic2VjVGltZVwiLDM3NTIxOlwiU3Vic2VjVGltZU9yaWdpbmFsXCIsMzc1MjI6XCJTdWJzZWNUaW1lRGlnaXRpemVkXCIsMzM0MzQ6XCJFeHBvc3VyZVRpbWVcIiwzMzQzNzpcIkZOdW1iZXJcIiwzNDg1MDpcIkV4cG9zdXJlUHJvZ3JhbVwiLDM0ODUyOlwiU3BlY3RyYWxTZW5zaXRpdml0eVwiLDM0ODU1OlwiSVNPU3BlZWRSYXRpbmdzXCIsMzQ4NTY6XCJPRUNGXCIsMzczNzc6XCJTaHV0dGVyU3BlZWRWYWx1ZVwiLDM3Mzc4OlwiQXBlcnR1cmVWYWx1ZVwiLDM3Mzc5OlwiQnJpZ2h0bmVzc1ZhbHVlXCIsMzczODA6XCJFeHBvc3VyZUJpYXNcIiwzNzM4MTpcIk1heEFwZXJ0dXJlVmFsdWVcIiwzNzM4MjpcIlN1YmplY3REaXN0YW5jZVwiLDM3MzgzOlwiTWV0ZXJpbmdNb2RlXCIsMzczODQ6XCJMaWdodFNvdXJjZVwiLDM3Mzg1OlwiRmxhc2hcIiwzNzM5NjpcIlN1YmplY3RBcmVhXCIsMzczODY6XCJGb2NhbExlbmd0aFwiLDQxNDgzOlwiRmxhc2hFbmVyZ3lcIiw0MTQ4NDpcIlNwYXRpYWxGcmVxdWVuY3lSZXNwb25zZVwiLDQxNDg2OlwiRm9jYWxQbGFuZVhSZXNvbHV0aW9uXCIsNDE0ODc6XCJGb2NhbFBsYW5lWVJlc29sdXRpb25cIiw0MTQ4ODpcIkZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFwiLDQxNDkyOlwiU3ViamVjdExvY2F0aW9uXCIsNDE0OTM6XCJFeHBvc3VyZUluZGV4XCIsNDE0OTU6XCJTZW5zaW5nTWV0aG9kXCIsNDE3Mjg6XCJGaWxlU291cmNlXCIsNDE3Mjk6XCJTY2VuZVR5cGVcIiw0MTczMDpcIkNGQVBhdHRlcm5cIiw0MTk4NTpcIkN1c3RvbVJlbmRlcmVkXCIsNDE5ODY6XCJFeHBvc3VyZU1vZGVcIiw0MTk4NzpcIldoaXRlQmFsYW5jZVwiLDQxOTg4OlwiRGlnaXRhbFpvb21SYXRpb25cIiw0MTk4OTpcIkZvY2FsTGVuZ3RoSW4zNW1tRmlsbVwiLDQxOTkwOlwiU2NlbmVDYXB0dXJlVHlwZVwiLDQxOTkxOlwiR2FpbkNvbnRyb2xcIiw0MTk5MjpcIkNvbnRyYXN0XCIsNDE5OTM6XCJTYXR1cmF0aW9uXCIsNDE5OTQ6XCJTaGFycG5lc3NcIiw0MTk5NTpcIkRldmljZVNldHRpbmdEZXNjcmlwdGlvblwiLDQxOTk2OlwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsNDIwMTY6XCJJbWFnZVVuaXF1ZUlEXCJ9LHY9bS5UaWZmVGFncz17MjU2OlwiSW1hZ2VXaWR0aFwiLDI1NzpcIkltYWdlSGVpZ2h0XCIsMzQ2NjU6XCJFeGlmSUZEUG9pbnRlclwiLDM0ODUzOlwiR1BTSW5mb0lGRFBvaW50ZXJcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsMjU4OlwiQml0c1BlclNhbXBsZVwiLDI1OTpcIkNvbXByZXNzaW9uXCIsMjYyOlwiUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvblwiLDI3NDpcIk9yaWVudGF0aW9uXCIsMjc3OlwiU2FtcGxlc1BlclBpeGVsXCIsMjg0OlwiUGxhbmFyQ29uZmlndXJhdGlvblwiLDUzMDpcIllDYkNyU3ViU2FtcGxpbmdcIiw1MzE6XCJZQ2JDclBvc2l0aW9uaW5nXCIsMjgyOlwiWFJlc29sdXRpb25cIiwyODM6XCJZUmVzb2x1dGlvblwiLDI5NjpcIlJlc29sdXRpb25Vbml0XCIsMjczOlwiU3RyaXBPZmZzZXRzXCIsMjc4OlwiUm93c1BlclN0cmlwXCIsMjc5OlwiU3RyaXBCeXRlQ291bnRzXCIsNTEzOlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0XCIsNTE0OlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0TGVuZ3RoXCIsMzAxOlwiVHJhbnNmZXJGdW5jdGlvblwiLDMxODpcIldoaXRlUG9pbnRcIiwzMTk6XCJQcmltYXJ5Q2hyb21hdGljaXRpZXNcIiw1Mjk6XCJZQ2JDckNvZWZmaWNpZW50c1wiLDUzMjpcIlJlZmVyZW5jZUJsYWNrV2hpdGVcIiwzMDY6XCJEYXRlVGltZVwiLDI3MDpcIkltYWdlRGVzY3JpcHRpb25cIiwyNzE6XCJNYWtlXCIsMjcyOlwiTW9kZWxcIiwzMDU6XCJTb2Z0d2FyZVwiLDMxNTpcIkFydGlzdFwiLDMzNDMyOlwiQ29weXJpZ2h0XCJ9LHk9bS5HUFNUYWdzPXswOlwiR1BTVmVyc2lvbklEXCIsMTpcIkdQU0xhdGl0dWRlUmVmXCIsMjpcIkdQU0xhdGl0dWRlXCIsMzpcIkdQU0xvbmdpdHVkZVJlZlwiLDQ6XCJHUFNMb25naXR1ZGVcIiw1OlwiR1BTQWx0aXR1ZGVSZWZcIiw2OlwiR1BTQWx0aXR1ZGVcIiw3OlwiR1BTVGltZVN0YW1wXCIsODpcIkdQU1NhdGVsbGl0ZXNcIiw5OlwiR1BTU3RhdHVzXCIsMTA6XCJHUFNNZWFzdXJlTW9kZVwiLDExOlwiR1BTRE9QXCIsMTI6XCJHUFNTcGVlZFJlZlwiLDEzOlwiR1BTU3BlZWRcIiwxNDpcIkdQU1RyYWNrUmVmXCIsMTU6XCJHUFNUcmFja1wiLDE2OlwiR1BTSW1nRGlyZWN0aW9uUmVmXCIsMTc6XCJHUFNJbWdEaXJlY3Rpb25cIiwxODpcIkdQU01hcERhdHVtXCIsMTk6XCJHUFNEZXN0TGF0aXR1ZGVSZWZcIiwyMDpcIkdQU0Rlc3RMYXRpdHVkZVwiLDIxOlwiR1BTRGVzdExvbmdpdHVkZVJlZlwiLDIyOlwiR1BTRGVzdExvbmdpdHVkZVwiLDIzOlwiR1BTRGVzdEJlYXJpbmdSZWZcIiwyNDpcIkdQU0Rlc3RCZWFyaW5nXCIsMjU6XCJHUFNEZXN0RGlzdGFuY2VSZWZcIiwyNjpcIkdQU0Rlc3REaXN0YW5jZVwiLDI3OlwiR1BTUHJvY2Vzc2luZ01ldGhvZFwiLDI4OlwiR1BTQXJlYUluZm9ybWF0aW9uXCIsMjk6XCJHUFNEYXRlU3RhbXBcIiwzMDpcIkdQU0RpZmZlcmVudGlhbFwifSxiPW0uU3RyaW5nVmFsdWVzPXtFeHBvc3VyZVByb2dyYW06ezA6XCJOb3QgZGVmaW5lZFwiLDE6XCJNYW51YWxcIiwyOlwiTm9ybWFsIHByb2dyYW1cIiwzOlwiQXBlcnR1cmUgcHJpb3JpdHlcIiw0OlwiU2h1dHRlciBwcmlvcml0eVwiLDU6XCJDcmVhdGl2ZSBwcm9ncmFtXCIsNjpcIkFjdGlvbiBwcm9ncmFtXCIsNzpcIlBvcnRyYWl0IG1vZGVcIiw4OlwiTGFuZHNjYXBlIG1vZGVcIn0sTWV0ZXJpbmdNb2RlOnswOlwiVW5rbm93blwiLDE6XCJBdmVyYWdlXCIsMjpcIkNlbnRlcldlaWdodGVkQXZlcmFnZVwiLDM6XCJTcG90XCIsNDpcIk11bHRpU3BvdFwiLDU6XCJQYXR0ZXJuXCIsNjpcIlBhcnRpYWxcIiwyNTU6XCJPdGhlclwifSxMaWdodFNvdXJjZTp7MDpcIlVua25vd25cIiwxOlwiRGF5bGlnaHRcIiwyOlwiRmx1b3Jlc2NlbnRcIiwzOlwiVHVuZ3N0ZW4gKGluY2FuZGVzY2VudCBsaWdodClcIiw0OlwiRmxhc2hcIiw5OlwiRmluZSB3ZWF0aGVyXCIsMTA6XCJDbG91ZHkgd2VhdGhlclwiLDExOlwiU2hhZGVcIiwxMjpcIkRheWxpZ2h0IGZsdW9yZXNjZW50IChEIDU3MDAgLSA3MTAwSylcIiwxMzpcIkRheSB3aGl0ZSBmbHVvcmVzY2VudCAoTiA0NjAwIC0gNTQwMEspXCIsMTQ6XCJDb29sIHdoaXRlIGZsdW9yZXNjZW50IChXIDM5MDAgLSA0NTAwSylcIiwxNTpcIldoaXRlIGZsdW9yZXNjZW50IChXVyAzMjAwIC0gMzcwMEspXCIsMTc6XCJTdGFuZGFyZCBsaWdodCBBXCIsMTg6XCJTdGFuZGFyZCBsaWdodCBCXCIsMTk6XCJTdGFuZGFyZCBsaWdodCBDXCIsMjA6XCJENTVcIiwyMTpcIkQ2NVwiLDIyOlwiRDc1XCIsMjM6XCJENTBcIiwyNDpcIklTTyBzdHVkaW8gdHVuZ3N0ZW5cIiwyNTU6XCJPdGhlclwifSxGbGFzaDp7MDpcIkZsYXNoIGRpZCBub3QgZmlyZVwiLDE6XCJGbGFzaCBmaXJlZFwiLDU6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDc6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsOTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwxMzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiwxNTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDE2OlwiRmxhc2ggZGlkIG5vdCBmaXJlLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwyNDpcIkZsYXNoIGRpZCBub3QgZmlyZSwgYXV0byBtb2RlXCIsMjU6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlXCIsMjk6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsMzE6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiwzMjpcIk5vIGZsYXNoIGZ1bmN0aW9uXCIsNjU6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDY5OlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3MTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw3MzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw3NzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3OTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDg5OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDkzOlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDk1OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCJ9LFNlbnNpbmdNZXRob2Q6ezE6XCJOb3QgZGVmaW5lZFwiLDI6XCJPbmUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDM6XCJUd28tY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDQ6XCJUaHJlZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsNTpcIkNvbG9yIHNlcXVlbnRpYWwgYXJlYSBzZW5zb3JcIiw3OlwiVHJpbGluZWFyIHNlbnNvclwiLDg6XCJDb2xvciBzZXF1ZW50aWFsIGxpbmVhciBzZW5zb3JcIn0sU2NlbmVDYXB0dXJlVHlwZTp7MDpcIlN0YW5kYXJkXCIsMTpcIkxhbmRzY2FwZVwiLDI6XCJQb3J0cmFpdFwiLDM6XCJOaWdodCBzY2VuZVwifSxTY2VuZVR5cGU6ezE6XCJEaXJlY3RseSBwaG90b2dyYXBoZWRcIn0sQ3VzdG9tUmVuZGVyZWQ6ezA6XCJOb3JtYWwgcHJvY2Vzc1wiLDE6XCJDdXN0b20gcHJvY2Vzc1wifSxXaGl0ZUJhbGFuY2U6ezA6XCJBdXRvIHdoaXRlIGJhbGFuY2VcIiwxOlwiTWFudWFsIHdoaXRlIGJhbGFuY2VcIn0sR2FpbkNvbnRyb2w6ezA6XCJOb25lXCIsMTpcIkxvdyBnYWluIHVwXCIsMjpcIkhpZ2ggZ2FpbiB1cFwiLDM6XCJMb3cgZ2FpbiBkb3duXCIsNDpcIkhpZ2ggZ2FpbiBkb3duXCJ9LENvbnRyYXN0OnswOlwiTm9ybWFsXCIsMTpcIlNvZnRcIiwyOlwiSGFyZFwifSxTYXR1cmF0aW9uOnswOlwiTm9ybWFsXCIsMTpcIkxvdyBzYXR1cmF0aW9uXCIsMjpcIkhpZ2ggc2F0dXJhdGlvblwifSxTaGFycG5lc3M6ezA6XCJOb3JtYWxcIiwxOlwiU29mdFwiLDI6XCJIYXJkXCJ9LFN1YmplY3REaXN0YW5jZVJhbmdlOnswOlwiVW5rbm93blwiLDE6XCJNYWNyb1wiLDI6XCJDbG9zZSB2aWV3XCIsMzpcIkRpc3RhbnQgdmlld1wifSxGaWxlU291cmNlOnszOlwiRFNDXCJ9LENvbXBvbmVudHM6ezA6XCJcIiwxOlwiWVwiLDI6XCJDYlwiLDM6XCJDclwiLDQ6XCJSXCIsNTpcIkdcIiw2OlwiQlwifX0sUz17MTIwOlwiY2FwdGlvblwiLDExMDpcImNyZWRpdFwiLDI1Olwia2V5d29yZHNcIiw1NTpcImRhdGVDcmVhdGVkXCIsODA6XCJieWxpbmVcIiw4NTpcImJ5bGluZVRpdGxlXCIsMTIyOlwiY2FwdGlvbldyaXRlclwiLDEwNTpcImhlYWRsaW5lXCIsMTE2OlwiY29weXJpZ2h0XCIsMTU6XCJjYXRlZ29yeVwifTttLmdldERhdGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZSBpbnN0YW5jZW9mIEltYWdlfHxlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkmJiFlLmNvbXBsZXRlPyExOihuKGUpP3QmJnQuY2FsbChlKTpzKGUsdCksITApfSxtLmdldFRhZz1mdW5jdGlvbihlLHQpe3JldHVybiBuKGUpP2UuZXhpZmRhdGFbdF06dm9pZCAwfSxtLmdldEFsbFRhZ3M9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJue307dmFyIHQscj1lLmV4aWZkYXRhLGk9e307Zm9yKHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoaVt0XT1yW3RdKTtyZXR1cm4gaX0sbS5wcmV0dHk9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJuXCJcIjt2YXIgdCxyPWUuZXhpZmRhdGEsaT1cIlwiO2Zvcih0IGluIHIpci5oYXNPd25Qcm9wZXJ0eSh0KSYmKGkrPVwib2JqZWN0XCI9PXR5cGVvZiByW3RdP3JbdF1pbnN0YW5jZW9mIE51bWJlcj90K1wiIDogXCIrclt0XStcIiBbXCIrclt0XS5udW1lcmF0b3IrXCIvXCIrclt0XS5kZW5vbWluYXRvcitcIl1cXHJcXG5cIjp0K1wiIDogW1wiK3JbdF0ubGVuZ3RoK1wiIHZhbHVlc11cXHJcXG5cIjp0K1wiIDogXCIrclt0XStcIlxcclxcblwiKTtyZXR1cm4gaX0sbS5yZWFkRnJvbUJpbmFyeUZpbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZSl9LHI9W10saT1mdW5jdGlvbigpe3JldHVybiBtfS5hcHBseSh0LHIpLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KS5jYWxsKHRoaXMpfSxmdW5jdGlvbihlLHQsbil7dmFyIHIsaTshZnVuY3Rpb24oKXtmdW5jdGlvbiBuKGUpe3ZhciB0PWUubmF0dXJhbFdpZHRoLG49ZS5uYXR1cmFsSGVpZ2h0O2lmKHQqbj4xMDQ4NTc2KXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Iud2lkdGg9ci5oZWlnaHQ9MTt2YXIgaT1yLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gaS5kcmF3SW1hZ2UoZSwtdCsxLDApLDA9PT1pLmdldEltYWdlRGF0YSgwLDAsMSwxKS5kYXRhWzNdfXJldHVybiExfWZ1bmN0aW9uIG8oZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD0xLHIuaGVpZ2h0PW47dmFyIGk9ci5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UoZSwwLDApO2Zvcih2YXIgbz1pLmdldEltYWdlRGF0YSgwLDAsMSxuKS5kYXRhLGE9MCxzPW4sdT1uO3U+YTspe3ZhciBjPW9bNCoodS0xKSszXTswPT09Yz9zPXU6YT11LHU9cythPj4xfXZhciBsPXUvbjtyZXR1cm4gMD09PWw/MTpsfWZ1bmN0aW9uIGEoZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuIHMoZSxyLHQsbiksci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsdC5xdWFsaXR5fHwuOCl9ZnVuY3Rpb24gcyhlLHQscixpKXt2YXIgYT1lLm5hdHVyYWxXaWR0aCxzPWUubmF0dXJhbEhlaWdodCxjPXIud2lkdGgsbD1yLmhlaWdodCxmPXQuZ2V0Q29udGV4dChcIjJkXCIpO2Yuc2F2ZSgpLHUodCxmLGMsbCxyLm9yaWVudGF0aW9uKTt2YXIgZD1uKGUpO2QmJihhLz0yLHMvPTIpO3ZhciBoPTEwMjQsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2cud2lkdGg9Zy5oZWlnaHQ9aDtmb3IodmFyIHA9Zy5nZXRDb250ZXh0KFwiMmRcIiksbT1pP28oZSxhLHMpOjEsdz1NYXRoLmNlaWwoaCpjL2EpLHY9TWF0aC5jZWlsKGgqbC9zL20pLHk9MCxiPTA7cz55Oyl7Zm9yKHZhciBTPTAsST0wO2E+UzspcC5jbGVhclJlY3QoMCwwLGgsaCkscC5kcmF3SW1hZ2UoZSwtUywteSksZi5kcmF3SW1hZ2UoZywwLDAsaCxoLEksYix3LHYpLFMrPWgsSSs9dzt5Kz1oLGIrPXZ9Zi5yZXN0b3JlKCksZz1wPW51bGx9ZnVuY3Rpb24gdShlLHQsbixyLGkpe3N3aXRjaChpKXtjYXNlIDU6Y2FzZSA2OmNhc2UgNzpjYXNlIDg6ZS53aWR0aD1yLGUuaGVpZ2h0PW47YnJlYWs7ZGVmYXVsdDplLndpZHRoPW4sZS5oZWlnaHQ9cn1zd2l0Y2goaSl7Y2FzZSAyOnQudHJhbnNsYXRlKG4sMCksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDM6dC50cmFuc2xhdGUobixyKSx0LnJvdGF0ZShNYXRoLlBJKTticmVhaztjYXNlIDQ6dC50cmFuc2xhdGUoMCxyKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNTp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNjp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZSgwLC1yKTticmVhaztjYXNlIDc6dC5yb3RhdGUoLjUqTWF0aC5QSSksdC50cmFuc2xhdGUobiwtciksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDg6dC5yb3RhdGUoLS41Kk1hdGguUEkpLHQudHJhbnNsYXRlKC1uLDApfX1mdW5jdGlvbiBjKGUpe2lmKHdpbmRvdy5CbG9iJiZlIGluc3RhbmNlb2YgQmxvYil7dmFyIHQ9bmV3IEltYWdlLG49d2luZG93LlVSTCYmd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkw/d2luZG93LlVSTDp3aW5kb3cud2Via2l0VVJMJiZ3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cud2Via2l0VVJMOm51bGw7aWYoIW4pdGhyb3cgRXJyb3IoXCJObyBjcmVhdGVPYmplY3RVUkwgZnVuY3Rpb24gZm91bmQgdG8gY3JlYXRlIGJsb2IgdXJsXCIpO3Quc3JjPW4uY3JlYXRlT2JqZWN0VVJMKGUpLHRoaXMuYmxvYj1lLGU9dH1pZighZS5uYXR1cmFsV2lkdGgmJiFlLm5hdHVyYWxIZWlnaHQpe3ZhciByPXRoaXM7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT1yLmltYWdlTG9hZExpc3RlbmVycztpZihlKXtyLmltYWdlTG9hZExpc3RlbmVycz1udWxsO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7bj50O3QrKyllW3RdKCl9fSx0aGlzLmltYWdlTG9hZExpc3RlbmVycz1bXX10aGlzLnNyY0ltYWdlPWV9Yy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGUsdCxuKXtpZih0aGlzLmltYWdlTG9hZExpc3RlbmVycyl7dmFyIHI9dGhpcztyZXR1cm4gdm9pZCB0aGlzLmltYWdlTG9hZExpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7ci5yZW5kZXIoZSx0LG4pfSl9dD10fHx7fTt2YXIgaT10aGlzLnNyY0ltYWdlLG89aS5zcmMsdT1vLmxlbmd0aCxjPWkubmF0dXJhbFdpZHRoLGw9aS5uYXR1cmFsSGVpZ2h0LGY9dC53aWR0aCxkPXQuaGVpZ2h0LGg9dC5tYXhXaWR0aCxnPXQubWF4SGVpZ2h0LHA9dGhpcy5ibG9iJiZcImltYWdlL2pwZWdcIj09PXRoaXMuYmxvYi50eXBlfHwwPT09by5pbmRleE9mKFwiZGF0YTppbWFnZS9qcGVnXCIpfHxvLmluZGV4T2YoXCIuanBnXCIpPT09dS00fHxvLmluZGV4T2YoXCIuanBlZ1wiKT09PXUtNTtmJiYhZD9kPWwqZi9jPDwwOmQmJiFmP2Y9YypkL2w8PDA6KGY9YyxkPWwpLGgmJmY+aCYmKGY9aCxkPWwqZi9jPDwwKSxnJiZkPmcmJihkPWcsZj1jKmQvbDw8MCk7dmFyIG09e3dpZHRoOmYsaGVpZ2h0OmR9O2Zvcih2YXIgdyBpbiB0KW1bd109dFt3XTt2YXIgdj1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcImltZ1wiPT09dj9lLnNyYz1hKHRoaXMuc3JjSW1hZ2UsbSxwKTpcImNhbnZhc1wiPT09diYmcyh0aGlzLnNyY0ltYWdlLGUsbSxwKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9ucmVuZGVyJiZ0aGlzLm9ucmVuZGVyKGUpLG4mJm4oKX0scj1bXSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGN9LmFwcGx5KHQsciksISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0oKX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe2Z1bmN0aW9uIHQoZSl7Zm9yKHZhciB0PVsxNiwxMSwxMCwxNiwyNCw0MCw1MSw2MSwxMiwxMiwxNCwxOSwyNiw1OCw2MCw1NSwxNCwxMywxNiwyNCw0MCw1Nyw2OSw1NiwxNCwxNywyMiwyOSw1MSw4Nyw4MCw2MiwxOCwyMiwzNyw1Niw2OCwxMDksMTAzLDc3LDI0LDM1LDU1LDY0LDgxLDEwNCwxMTMsOTIsNDksNjQsNzgsODcsMTAzLDEyMSwxMjAsMTAxLDcyLDkyLDk1LDk4LDExMiwxMDAsMTAzLDk5XSxuPTA7NjQ+bjtuKyspe3ZhciByPUYoKHRbbl0qZSs1MCkvMTAwKTsxPnI/cj0xOnI+MjU1JiYocj0yNTUpLERbTltuXV09cn1mb3IodmFyIGk9WzE3LDE4LDI0LDQ3LDk5LDk5LDk5LDk5LDE4LDIxLDI2LDY2LDk5LDk5LDk5LDk5LDI0LDI2LDU2LDk5LDk5LDk5LDk5LDk5LDQ3LDY2LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5XSxvPTA7NjQ+bztvKyspe3ZhciBhPUYoKGlbb10qZSs1MCkvMTAwKTsxPmE/YT0xOmE+MjU1JiYoYT0yNTUpLHhbTltvXV09YX1mb3IodmFyIHM9WzEsMS4zODcwMzk4NDUsMS4zMDY1NjI5NjUsMS4xNzU4NzU2MDIsMSwuNzg1Njk0OTU4LC41NDExOTYxLC4yNzU4OTkzNzldLHU9MCxjPTA7OD5jO2MrKylmb3IodmFyIGw9MDs4Pmw7bCsrKVVbdV09MS8oRFtOW3VdXSpzW2NdKnNbbF0qOCksQ1t1XT0xLyh4W05bdV1dKnNbY10qc1tsXSo4KSx1Kyt9ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj0wLHI9MCxpPW5ldyBBcnJheSxvPTE7MTY+PW87bysrKXtmb3IodmFyIGE9MTthPD1lW29dO2ErKylpW3Rbcl1dPVtdLGlbdFtyXV1bMF09bixpW3Rbcl1dWzFdPW8scisrLG4rKztuKj0yfXJldHVybiBpfWZ1bmN0aW9uIHIoKXt5PW4oVyxIKSxiPW4oVixYKSxTPW4oeixxKSxJPW4oUSxZKX1mdW5jdGlvbiBpKCl7Zm9yKHZhciBlPTEsdD0yLG49MTsxNT49bjtuKyspe2Zvcih2YXIgcj1lO3Q+cjtyKyspQVszMjc2NytyXT1uLFRbMzI3Njcrcl09W10sVFszMjc2NytyXVsxXT1uLFRbMzI3Njcrcl1bMF09cjtmb3IodmFyIGk9LSh0LTEpOy1lPj1pO2krKylBWzMyNzY3K2ldPW4sVFszMjc2NytpXT1bXSxUWzMyNzY3K2ldWzFdPW4sVFszMjc2NytpXVswXT10LTEraTtlPDw9MSx0PDw9MX19ZnVuY3Rpb24gbygpe2Zvcih2YXIgZT0wOzI1Nj5lO2UrKylrW2VdPTE5NTk1KmUsa1tlKzI1Nj4+MF09Mzg0NzAqZSxrW2UrNTEyPj4wXT03NDcxKmUrMzI3Njgsa1tlKzc2OD4+MF09LTExMDU5KmUsa1tlKzEwMjQ+PjBdPS0yMTcwOSplLGtbZSsxMjgwPj4wXT0zMjc2OCplKzg0MjEzNzUsa1tlKzE1MzY+PjBdPS0yNzQzOSplLGtbZSsxNzkyPj4wXT0tNTMyOSplfWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PWVbMF0sbj1lWzFdLTE7bj49MDspdCYxPDxuJiYoR3w9MTw8Tyksbi0tLE8tLSwwPk8mJigyNTU9PUc/KHMoMjU1KSxzKDApKTpzKEcpLE89NyxHPTApfWZ1bmN0aW9uIHMoZSl7TS5wdXNoKGpbZV0pfWZ1bmN0aW9uIHUoZSl7cyhlPj44JjI1NSkscygyNTUmZSl9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGMsbCxmPTA7Y29uc3QgZD04LGg9NjQ7Zm9yKGw9MDtkPmw7KytsKXtuPWVbZl0scj1lW2YrMV0saT1lW2YrMl0sbz1lW2YrM10sYT1lW2YrNF0scz1lW2YrNV0sdT1lW2YrNl0sYz1lW2YrN107dmFyIGc9bitjLHA9bi1jLG09cit1LHc9ci11LHY9aStzLHk9aS1zLGI9bythLFM9by1hLEk9ZytiLFA9Zy1iLEY9bSt2LEQ9bS12O2VbZl09SStGLGVbZis0XT1JLUY7dmFyIHg9LjcwNzEwNjc4MSooRCtQKTtlW2YrMl09UCt4LGVbZis2XT1QLXgsST1TK3ksRj15K3csRD13K3A7dmFyIFU9LjM4MjY4MzQzMyooSS1EKSxDPS41NDExOTYxKkkrVSxUPTEuMzA2NTYyOTY1KkQrVSxBPS43MDcxMDY3ODEqRixSPXArQSxNPXAtQTtlW2YrNV09TStDLGVbZiszXT1NLUMsZVtmKzFdPVIrVCxlW2YrN109Ui1ULGYrPTh9Zm9yKGY9MCxsPTA7ZD5sOysrbCl7bj1lW2ZdLHI9ZVtmKzhdLGk9ZVtmKzE2XSxvPWVbZisyNF0sYT1lW2YrMzJdLHM9ZVtmKzQwXSx1PWVbZis0OF0sYz1lW2YrNTZdO3ZhciBHPW4rYyxPPW4tYyxfPXIrdSxCPXItdSxFPWkrcyxqPWktcyxrPW8rYSxOPW8tYSxXPUcrayxIPUctayx6PV8rRSxxPV8tRTtlW2ZdPVcreixlW2YrMzJdPVctejt2YXIgVj0uNzA3MTA2NzgxKihxK0gpO2VbZisxNl09SCtWLGVbZis0OF09SC1WLFc9TitqLHo9aitCLHE9QitPO3ZhciBYPS4zODI2ODM0MzMqKFctcSksUT0uNTQxMTk2MSpXK1gsWT0xLjMwNjU2Mjk2NSpxK1gsSz0uNzA3MTA2NzgxKnosSj1PK0ssWj1PLUs7ZVtmKzQwXT1aK1EsZVtmKzI0XT1aLVEsZVtmKzhdPUorWSxlW2YrNTZdPUotWSxmKyt9dmFyICQ7Zm9yKGw9MDtoPmw7KytsKSQ9ZVtsXSp0W2xdLExbbF09JD4wPyQrLjV8MDokLS41fDA7cmV0dXJuIEx9ZnVuY3Rpb24gbCgpe3UoNjU1MDQpLHUoMTYpLHMoNzQpLHMoNzApLHMoNzMpLHMoNzApLHMoMCkscygxKSxzKDEpLHMoMCksdSgxKSx1KDEpLHMoMCkscygwKX1mdW5jdGlvbiBmKGUsdCl7dSg2NTQ3MiksdSgxNykscyg4KSx1KHQpLHUoZSkscygzKSxzKDEpLHMoMTcpLHMoMCkscygyKSxzKDE3KSxzKDEpLHMoMykscygxNykscygxKX1mdW5jdGlvbiBkKCl7dSg2NTQ5OSksdSgxMzIpLHMoMCk7Zm9yKHZhciBlPTA7NjQ+ZTtlKyspcyhEW2VdKTtzKDEpO2Zvcih2YXIgdD0wOzY0PnQ7dCsrKXMoeFt0XSl9ZnVuY3Rpb24gaCgpe3UoNjU0NzYpLHUoNDE4KSxzKDApO2Zvcih2YXIgZT0wOzE2PmU7ZSsrKXMoV1tlKzFdKTtmb3IodmFyIHQ9MDsxMT49dDt0KyspcyhIW3RdKTtzKDE2KTtmb3IodmFyIG49MDsxNj5uO24rKylzKHpbbisxXSk7Zm9yKHZhciByPTA7MTYxPj1yO3IrKylzKHFbcl0pO3MoMSk7Zm9yKHZhciBpPTA7MTY+aTtpKyspcyhWW2krMV0pO2Zvcih2YXIgbz0wOzExPj1vO28rKylzKFhbb10pO3MoMTcpO2Zvcih2YXIgYT0wOzE2PmE7YSsrKXMoUVthKzFdKTtmb3IodmFyIGM9MDsxNjE+PWM7YysrKXMoWVtjXSl9ZnVuY3Rpb24gZygpe3UoNjU0OTgpLHUoMTIpLHMoMykscygxKSxzKDApLHMoMikscygxNykscygzKSxzKDE3KSxzKDApLHMoNjMpLHMoMCl9ZnVuY3Rpb24gcChlLHQsbixyLGkpe3ZhciBvLHM9aVswXSx1PWlbMjQwXTtjb25zdCBsPTE2LGY9NjMsZD02NDtmb3IodmFyIGg9YyhlLHQpLGc9MDtkPmc7KytnKVJbTltnXV09aFtnXTt2YXIgcD1SWzBdLW47bj1SWzBdLDA9PXA/YShyWzBdKToobz0zMjc2NytwLGEocltBW29dXSksYShUW29dKSk7Zm9yKHZhciBtPTYzO20+MCYmMD09UlttXTttLS0pO2lmKDA9PW0pcmV0dXJuIGEocyksbjtmb3IodmFyIHcsdj0xO20+PXY7KXtmb3IodmFyIHk9djswPT1SW3ZdJiZtPj12Oysrdik7dmFyIGI9di15O2lmKGI+PWwpe3c9Yj4+NDtmb3IodmFyIFM9MTt3Pj1TOysrUylhKHUpO2I9MTUmYn1vPTMyNzY3K1Jbdl0sYShpWyhiPDw0KStBW29dXSksYShUW29dKSx2Kyt9cmV0dXJuIG0hPWYmJmEocyksbn1mdW5jdGlvbiBtKCl7Zm9yKHZhciBlPVN0cmluZy5mcm9tQ2hhckNvZGUsdD0wOzI1Nj50O3QrKylqW3RdPWUodCl9ZnVuY3Rpb24gdyhlKXtpZigwPj1lJiYoZT0xKSxlPjEwMCYmKGU9MTAwKSxQIT1lKXt2YXIgbj0wO249NTA+ZT9NYXRoLmZsb29yKDVlMy9lKTpNYXRoLmZsb29yKDIwMC0yKmUpLHQobiksUD1lfX1mdW5jdGlvbiB2KCl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7ZXx8KGU9NTApLG0oKSxyKCksaSgpLG8oKSx3KGUpOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXR9dmFyIHksYixTLEksUCxGPShNYXRoLnJvdW5kLE1hdGguZmxvb3IpLEQ9bmV3IEFycmF5KDY0KSx4PW5ldyBBcnJheSg2NCksVT1uZXcgQXJyYXkoNjQpLEM9bmV3IEFycmF5KDY0KSxUPW5ldyBBcnJheSg2NTUzNSksQT1uZXcgQXJyYXkoNjU1MzUpLEw9bmV3IEFycmF5KDY0KSxSPW5ldyBBcnJheSg2NCksTT1bXSxHPTAsTz03LF89bmV3IEFycmF5KDY0KSxCPW5ldyBBcnJheSg2NCksRT1uZXcgQXJyYXkoNjQpLGo9bmV3IEFycmF5KDI1Niksaz1uZXcgQXJyYXkoMjA0OCksTj1bMCwxLDUsNiwxNCwxNSwyNywyOCwyLDQsNywxMywxNiwyNiwyOSw0MiwzLDgsMTIsMTcsMjUsMzAsNDEsNDMsOSwxMSwxOCwyNCwzMSw0MCw0NCw1MywxMCwxOSwyMywzMiwzOSw0NSw1Miw1NCwyMCwyMiwzMywzOCw0Niw1MSw1NSw2MCwyMSwzNCwzNyw0Nyw1MCw1Niw1OSw2MSwzNSwzNiw0OCw0OSw1Nyw1OCw2Miw2M10sVz1bMCwwLDEsNSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwXSxIPVswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXSx6PVswLDAsMiwxLDMsMywyLDQsMyw1LDUsNCw0LDAsMCwxLDEyNV0scT1bMSwyLDMsMCw0LDE3LDUsMTgsMzMsNDksNjUsNiwxOSw4MSw5Nyw3LDM0LDExMywyMCw1MCwxMjksMTQ1LDE2MSw4LDM1LDY2LDE3NywxOTMsMjEsODIsMjA5LDI0MCwzNiw1MSw5OCwxMTQsMTMwLDksMTAsMjIsMjMsMjQsMjUsMjYsMzcsMzgsMzksNDAsNDEsNDIsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTY5LDE3MCwxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMTAsMjExLDIxMiwyMTMsMjE0LDIxNSwyMTYsMjE3LDIxOCwyMjUsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQxLDI0MiwyNDMsMjQ0LDI0NSwyNDYsMjQ3LDI0OCwyNDksMjUwXSxWPVswLDAsMywxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFg9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLFE9WzAsMCwyLDEsMiw0LDQsMyw0LDcsNSw0LDQsMCwxLDIsMTE5XSxZPVswLDEsMiwzLDE3LDQsNSwzMyw0OSw2LDE4LDY1LDgxLDcsOTcsMTEzLDE5LDM0LDUwLDEyOSw4LDIwLDY2LDE0NSwxNjEsMTc3LDE5Myw5LDM1LDUxLDgyLDI0MCwyMSw5OCwxMTQsMjA5LDEwLDIyLDM2LDUyLDIyNSwzNywyNDEsMjMsMjQsMjUsMjYsMzgsMzksNDAsNDEsNDIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTYyLDE2MywxNjQsMTY1LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTc4LDE3OSwxODAsMTgxLDE4MiwxODMsMTg0LDE4NSwxODYsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjEwLDIxMSwyMTIsMjEzLDIxNCwyMTUsMjE2LDIxNywyMTgsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTBdO3RoaXMuZW5jb2RlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0obmV3IERhdGUpLmdldFRpbWUoKTt0JiZ3KHQpLE09bmV3IEFycmF5LEc9MCxPPTcsdSg2NTQ5NiksbCgpLGQoKSxmKGUud2lkdGgsZS5oZWlnaHQpLGgoKSxnKCk7dmFyIGk9MCxvPTAscz0wO0c9MCxPPTcsdGhpcy5lbmNvZGUuZGlzcGxheU5hbWU9XCJfZW5jb2RlX1wiO2Zvcih2YXIgYyxtLHYsUCxGLEQseCxULEEsTD1lLmRhdGEsUj1lLndpZHRoLGo9ZS5oZWlnaHQsTj00KlIsVz0wO2o+Vzspe2ZvcihjPTA7Tj5jOyl7Zm9yKEY9TipXK2MsRD1GLHg9LTEsVD0wLEE9MDs2ND5BO0ErKylUPUE+PjMseD00Kig3JkEpLEQ9RitUKk4reCxXK1Q+PWomJihELT1OKihXKzErVC1qKSksYyt4Pj1OJiYoRC09Yyt4LU4rNCksbT1MW0QrK10sdj1MW0QrK10sUD1MW0QrK10sX1tBXT0oa1ttXStrW3YrMjU2Pj4wXStrW1ArNTEyPj4wXT4+MTYpLTEyOCxCW0FdPShrW20rNzY4Pj4wXStrW3YrMTAyND4+MF0ra1tQKzEyODA+PjBdPj4xNiktMTI4LEVbQV09KGtbbSsxMjgwPj4wXStrW3YrMTUzNj4+MF0ra1tQKzE3OTI+PjBdPj4xNiktMTI4O2k9cChfLFUsaSx5LFMpLG89cChCLEMsbyxiLEkpLHM9cChFLEMscyxiLEkpLGMrPTMyfVcrPTh9aWYoTz49MCl7dmFyIEg9W107SFsxXT1PKzEsSFswXT0oMTw8TysxKS0xLGEoSCl9aWYodSg2NTQ5Nyksbil7Zm9yKHZhciB6PU0ubGVuZ3RoLHE9bmV3IFVpbnQ4QXJyYXkoeiksVj0wO3o+VjtWKyspcVtWXT1NW1ZdLmNoYXJDb2RlQXQoKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIHF9dmFyIFg9XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiK2J0b2EoTS5qb2luKFwiXCIpKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIFh9LHYoKX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXt2YXIgbj10aGlzO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIuayoeacieaUtuWIsOWbvueJh++8jOWPr+iDveeahOino+WGs+aWueahiO+8mmh0dHBzOi8vZ2l0aHViLmNvbS90aGluazIwMTEvbG9jYWxSZXNpemVJTUcvaXNzdWVzLzdcIik7dD10fHx7fSxuLmRlZmF1bHRzPXt3aWR0aDpudWxsLGhlaWdodDpudWxsLGZpZWxkTmFtZTpcImZpbGVcIixxdWFsaXR5Oi43fSxuLmZpbGU9ZTtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobi5kZWZhdWx0c1tyXT10W3JdKTtyZXR1cm4gdGhpcy5pbml0KCl9ZnVuY3Rpb24gaShlKXt2YXIgdD1udWxsO3JldHVybiB0PWU/W10uZmlsdGVyLmNhbGwoZG9jdW1lbnQuc2NyaXB0cyxmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXQuc3JjLmluZGV4T2YoZSl9KVswXTpkb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdLHQ/dC5zcmMuc3Vic3RyKDAsdC5zcmMubGFzdEluZGV4T2YoXCIvXCIpKTpudWxsfWZ1bmN0aW9uIG8oZSl7dmFyIHQ7dD1lLnNwbGl0KFwiLFwiKVswXS5pbmRleE9mKFwiYmFzZTY0XCIpPj0wP2F0b2IoZS5zcGxpdChcIixcIilbMV0pOnVuZXNjYXBlKGUuc3BsaXQoXCIsXCIpWzFdKTtmb3IodmFyIG49ZS5zcGxpdChcIixcIilbMF0uc3BsaXQoXCI6XCIpWzFdLnNwbGl0KFwiO1wiKVswXSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspcltpXT10LmNoYXJDb2RlQXQoaSk7cmV0dXJuIG5ldyBzLkJsb2IoW3IuYnVmZmVyXSx7dHlwZTpufSl9bi5wPWkoXCJscnpcIikrXCIvXCIsd2luZG93LlVSTD13aW5kb3cuVVJMfHx3aW5kb3cud2Via2l0VVJMO3ZhciBhPW4oMSkscz1uKDQpLHU9big1KSxjPWZ1bmN0aW9uKGUpe3ZhciB0PS9PUyAoXFxkKV8uKiBsaWtlIE1hYyBPUyBYL2cuZXhlYyhlKSxuPS9BbmRyb2lkIChcXGQuKj8pOy9nLmV4ZWMoZSl8fC9BbmRyb2lkXFwvKFxcZC4qPykgL2cuZXhlYyhlKTtyZXR1cm57b2xkSU9TOnQ/K3QucG9wKCk8ODohMSxvbGRBbmRyb2lkOm4/K24ucG9wKCkuc3Vic3RyKDAsMyk8NC41OiExLGlPUzovXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLy50ZXN0KGUpLGFuZHJvaWQ6L0FuZHJvaWQvZy50ZXN0KGUpLG1RUUJyb3dzZXI6L01RUUJyb3dzZXIvZy50ZXN0KGUpfX0obmF2aWdhdG9yLnVzZXJBZ2VudCk7ci5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmZpbGUsbj1cInN0cmluZ1wiPT10eXBlb2YgdCxyPS9eZGF0YTovLnRlc3QodCksaT1uZXcgSW1hZ2UsdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGM9bj90OlVSTC5jcmVhdGVPYmplY3RVUkwodCk7aWYoZS5pbWc9aSxlLmJsb2I9YyxlLmNhbnZhcz11LG4/ZS5maWxlTmFtZT1yP1wiYmFzZTY0LmpwZ1wiOnQuc3BsaXQoXCIvXCIpLnBvcCgpOmUuZmlsZU5hbWU9dC5uYW1lLCFkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQpdGhyb3cgbmV3IEVycm9yKFwi5rWP6KeI5Zmo5LiN5pSv5oyBY2FudmFzXCIpO3JldHVybiBuZXcgYShmdW5jdGlvbihuLGEpe2kub25lcnJvcj1mdW5jdGlvbigpe3ZhciBlPW5ldyBFcnJvcihcIuWKoOi9veWbvueJh+aWh+S7tuWksei0pVwiKTt0aHJvdyBhKGUpLGV9LGkub25sb2FkPWZ1bmN0aW9uKCl7ZS5fZ2V0QmFzZTY0KCkudGhlbihmdW5jdGlvbihlKXtpZihlLmxlbmd0aDwxMCl7dmFyIHQ9bmV3IEVycm9yKFwi55Sf5oiQYmFzZTY05aSx6LSlXCIpO3Rocm93IGEodCksdH1yZXR1cm4gZX0pLnRoZW4oZnVuY3Rpb24ocil7dmFyIGk9bnVsbDtcIm9iamVjdFwiPT10eXBlb2YgZS5maWxlJiZyLmxlbmd0aD5lLmZpbGUuc2l6ZT8oaT1uZXcgRm9ybURhdGEsdD1lLmZpbGUpOihpPW5ldyBzLkZvcm1EYXRhLHQ9byhyKSksaS5hcHBlbmQoZS5kZWZhdWx0cy5maWVsZE5hbWUsdCxlLmZpbGVOYW1lLnJlcGxhY2UoL1xcLi4rL2csXCIuanBnXCIpKSxuKHtmb3JtRGF0YTppLGZpbGVMZW46K3Quc2l6ZSxiYXNlNjQ6cixiYXNlNjRMZW46ci5sZW5ndGgsb3JpZ2luOmUuZmlsZSxmaWxlOnR9KTtmb3IodmFyIGEgaW4gZSllLmhhc093blByb3BlcnR5KGEpJiYoZVthXT1udWxsKTtVUkwucmV2b2tlT2JqZWN0VVJMKGUuYmxvYil9KX0sIXImJihpLmNyb3NzT3JpZ2luPVwiKlwiKSxpLnNyYz1jfSl9LHIucHJvdG90eXBlLl9nZXRCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcsbj1lLmZpbGUscj1lLmNhbnZhcztyZXR1cm4gbmV3IGEoZnVuY3Rpb24oaSl7dHJ5e3UuZ2V0RGF0YShcIm9iamVjdFwiPT10eXBlb2Ygbj9uOnQsZnVuY3Rpb24oKXtlLm9yaWVudGF0aW9uPXUuZ2V0VGFnKHRoaXMsXCJPcmllbnRhdGlvblwiKSxlLnJlc2l6ZT1lLl9nZXRSZXNpemUoKSxlLmN0eD1yLmdldENvbnRleHQoXCIyZFwiKSxyLndpZHRoPWUucmVzaXplLndpZHRoLHIuaGVpZ2h0PWUucmVzaXplLmhlaWdodCxlLmN0eC5maWxsU3R5bGU9XCIjZmZmXCIsZS5jdHguZmlsbFJlY3QoMCwwLHIud2lkdGgsci5oZWlnaHQpLGMub2xkSU9TP2UuX2NyZWF0ZUJhc2U2NEZvck9sZElPUygpLnRoZW4oaSk6ZS5fY3JlYXRlQmFzZTY0KCkudGhlbihpKX0pfWNhdGNoKG8pe3Rocm93IG5ldyBFcnJvcihvKX19KX0sci5wcm90b3R5cGUuX2NyZWF0ZUJhc2U2NEZvck9sZElPUz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxyPWUuY2FudmFzLGk9ZS5kZWZhdWx0cyxvPWUub3JpZW50YXRpb247cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKGUpeyFmdW5jdGlvbigpe3ZhciBhPVtuKDYpXTsoZnVuY3Rpb24obil7dmFyIGE9bmV3IG4odCk7XCI1Njc4XCIuaW5kZXhPZihvKT4tMT9hLnJlbmRlcihyLHt3aWR0aDpyLmhlaWdodCxoZWlnaHQ6ci53aWR0aCxvcmllbnRhdGlvbjpvfSk6YS5yZW5kZXIocix7d2lkdGg6ci53aWR0aCxoZWlnaHQ6ci5oZWlnaHQsb3JpZW50YXRpb246b30pLGUoci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsaS5xdWFsaXR5KSl9KS5hcHBseShudWxsLGEpfSgpfSl9LHIucHJvdG90eXBlLl9jcmVhdGVCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5yZXNpemUscj1lLmltZyxpPWUuY2FudmFzLG89ZS5jdHgscz1lLmRlZmF1bHRzLHU9ZS5vcmllbnRhdGlvbjtzd2l0Y2godSl7Y2FzZSAzOm8ucm90YXRlKDE4MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC53aWR0aCwtdC5oZWlnaHQsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA2Om8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA4Om8ucm90YXRlKDI3MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC5oZWlnaHQsMCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDI6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8uZHJhd0ltYWdlKHIsMCwwLHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNDpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoMTgwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LndpZHRoLC10LmhlaWdodCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDU6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA3Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSgyNzAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQuaGVpZ2h0LDAsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7ZGVmYXVsdDpvLmRyYXdJbWFnZShyLDAsMCx0LndpZHRoLHQuaGVpZ2h0KX1yZXR1cm4gbmV3IGEoZnVuY3Rpb24oZSl7Yy5vbGRBbmRyb2lkfHxjLm1RUUJyb3dzZXJ8fCFuYXZpZ2F0b3IudXNlckFnZW50PyFmdW5jdGlvbigpe3ZhciB0PVtuKDcpXTsoZnVuY3Rpb24odCl7dmFyIG49bmV3IHQscj1vLmdldEltYWdlRGF0YSgwLDAsaS53aWR0aCxpLmhlaWdodCk7ZShuLmVuY29kZShyLDEwMCpzLnF1YWxpdHkpKX0pLmFwcGx5KG51bGwsdCl9KCk6ZShpLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixzLnF1YWxpdHkpKX0pfSxyLnByb3RvdHlwZS5fZ2V0UmVzaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLG49ZS5kZWZhdWx0cyxyPW4ud2lkdGgsaT1uLmhlaWdodCxvPWUub3JpZW50YXRpb24sYT17d2lkdGg6dC53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9O2lmKFwiNTY3OFwiLmluZGV4T2Yobyk+LTEmJihhLndpZHRoPXQuaGVpZ2h0LGEuaGVpZ2h0PXQud2lkdGgpLGEud2lkdGg8cnx8YS5oZWlnaHQ8aSlyZXR1cm4gYTt2YXIgcz1hLndpZHRoL2EuaGVpZ2h0O2ZvcihyJiZpP3M+PXIvaT9hLndpZHRoPnImJihhLndpZHRoPXIsYS5oZWlnaHQ9TWF0aC5jZWlsKHIvcykpOmEuaGVpZ2h0PmkmJihhLmhlaWdodD1pLGEud2lkdGg9TWF0aC5jZWlsKGkqcykpOnI/cjxhLndpZHRoJiYoYS53aWR0aD1yLGEuaGVpZ2h0PU1hdGguY2VpbChyL3MpKTppJiZpPGEuaGVpZ2h0JiYoYS53aWR0aD1NYXRoLmNlaWwoaSpzKSxhLmhlaWdodD1pKTthLndpZHRoPj0zMjY0fHxhLmhlaWdodD49MjQ0ODspYS53aWR0aCo9LjgsYS5oZWlnaHQqPS44O3JldHVybiBhfSx3aW5kb3cubHJ6PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyByKGUsdCl9LHdpbmRvdy5scnoudmVyc2lvbj1cIjQuOS40MFwiLFxuZS5leHBvcnRzPXdpbmRvdy5scnp9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxyei5hbGwuYnVuZGxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IGhNZXRob2RzIGZyb20gJy4vaGFuZGxlLW1ldGhvZHMnXG5pbXBvcnQgYU1ldGhvZHMgZnJvbSAnLi9hc3Npc3QtbWV0aG9kcydcbk9iamVjdC5hc3NpZ24oSW5zdGFuY2UucHJvdG90eXBlLCBoTWV0aG9kcywgYU1ldGhvZHMpXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaW5kZXguanMiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuY29uc3QgbWV0aG9kcyA9IHtcbiAgLypcbiAgICogZnVuYyBjcmVhdGUgYSBuZXcgcm93IGVsZW1lbnRcbiAgICogQHBhcmFtIHtvYmp9IGRhdGFcbiAgICogICAgICAgICAgdGFnIHtzdHJ9XG4gICAqICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZSB7Ym9vbGVhbn0gZGVmYXVsdDogdHJ1ZVxuICAgKiAgICAgICAgICBpZCB7Ym9vbGVhbn0gd2hldGhlciBuZWVkIGEgaWQgZGVmYXVsdDogZmFsc2VcbiAgICogICAgICAgICAgYnIge2Jvb2xlYW59IHdoZXRoZXIgbmVlZCBhIGJyIGVsZW1lbnQgYWZ0ZXIgY3VycmVudCByb3cgZWxlbWVudCBkZWZhdWx0OiBmYWxzZVxuICAgKiBAcmV0dXJuICB7bm9kZX1cbiAgICoqL1xuICBuZXdSb3cgKGRhdGEgPSB7fSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcgfHwgY29uc3RhbnQuUk9XX1RBRylcbiAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgcm93LmRhdGFzZXQuZWRpdG9yUm93ID0gbWV0aG9kcy5jcmVhdGVSYW5kb21JZCgncm93JylcbiAgICB9XG4gICAgaWYgKGRhdGEuYnIpIHtcbiAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGJyKVxuICAgIH1cbiAgICBpZiAoZGF0YS5jb250ZW50ZWRpdGFibGUgIT09IGZhbHNlKSB7XG4gICAgICByb3cuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIH1cbiAgICByZXR1cm4gcm93XG4gIH0sXG4gIC8vIGdldCBzZWxlY3Rpb25cbiAgZ2V0U2VsZWN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgaW5zZXJ0IGEgZWxlbWVudCBhZnRlciB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0gbmV3RWxlbWVudCB7bm9kZX1cbiAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQge25vZGV9XG4gICAqKi9cbiAgaW5zZXJ0QWZ0ZXIgKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudC5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBmdW5jIGNyZWF0ZSBhIHJhbmRvbSBpZFxuICAgKiBAcGFyYW0gcHJlZmZpeCB7c3RyfSBpZCdzIHByZWZmaXhcbiAgICogQHJldHVybiBpZFxuICAgKiovXG4gIGNyZWF0ZVJhbmRvbUlkIChwcmVmZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZmaXggfHwgJ2lkJ30tJHtNYXRoLnJhbmRvbSgpICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpfWBcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGVkaXQgem9uZSBlbGVtZW50XG4gICAqKi9cbiAgZWRpdFpvbmUgKCkge1xuICAgIGlmIChtZXRob2RzLmVkaXRab25lX2NhY2hlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZVxuICAgIH1cbiAgICBtZXRob2RzLmVkaXRab25lX2NhY2hlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yPVwiY29udGVudFwiXScpXG4gICAgcmV0dXJuIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGVcbiAgfSxcbiAgLypcbiAgICogc2V0IHJhbmdlIGF0IHRhcmdldCBub2RlXG4gICAqKi9cbiAgc2V0UmFuZ2VBdCAobm9kZSwgY2hlY2tBbGwpIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICBpZiAoY2hlY2tBbGwpIHtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIDApXG4gICAgICBsZXQgZW5kID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA/IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggOiAobm9kZS5sZW5ndGggPyBub2RlLmxlbmd0aCA6IDApXG4gICAgICByYW5nZS5zZXRFbmQobm9kZSwgZW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZS5zZXRTdGFydChub2RlLCAwKVxuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIDApXG4gICAgfVxuICAgIGxldCBzZWxlY3Rpb24gPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuICB9LFxuICBnZXRSYW5nZSAoKSB7XG4gICAgbGV0IHMgPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMucmFuZ2VDb3VudCkge1xuICAgICAgcmV0dXJuIHMuZ2V0UmFuZ2VBdCgwKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9hc3Npc3QtbWV0aG9kcy5qcyIsImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuLypcbiAqIEluc3BlY3QgYW5kIGhpZ2hsaWdodCBtb2R1bGVcbiAqKi9cbmNsYXNzIEluc3BlY3RvciB7XG4gIGNvbnN0cnVjdG9yIChtb2R1bGVOYW1lKSB7XG4gICAgdGhpcy5tb2R1bGVOYW1lID0gbW9kdWxlTmFtZVxuICB9XG5cbiAgYWRkICh0eXBlLCBwYXJhbSkge1xuICAgIGxldCBtb2R1bGVOYW1lID0gdGhpcy5tb2R1bGVOYW1lXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVOYW1lIG11c3QgYmUgc3RyaW5nJylcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciB0YWcgY2FuIG9ubHkgcmVjZWl2ZSBhIHN0cmluZyBwYXJhbSB3aGljaCBzdGFuZCBmb3IgdGFnIG5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci50YWdNYXBbcGFyYW0udG9VcHBlckNhc2UoKV0gPSBtb2R1bGVOYW1lXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGlmICghaXNPYmoocGFyYW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIHN0eWxlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5zdHlsZXNbbW9kdWxlTmFtZV0gPSBwYXJhbVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0cmlidXRlJzpcbiAgICAgICAgaWYgKCFpc09iaihwYXJhbSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3IgYXR0cmlidXRlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdID0gcGFyYW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBpbnNwZWN0b3IgdHlwZScpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpbnNwZWN0X3RhZyAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBsZXQgaW5zcGVjdFJlc3VsdCA9IEluc3BlY3Rvci50YWdNYXBbbm9kZS5ub2RlTmFtZV1cbiAgICAgIGlmIChpbnNwZWN0UmVzdWx0ICYmICFyZXN1bHQuaW5jbHVkZXMoaW5zcGVjdFJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5zcGVjdFJlc3VsdClcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9zdHlsZSAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBpZiAoIW5vZGUuc3R5bGUpIGJyZWFrXG4gICAgICBPYmplY3Qua2V5cyhJbnNwZWN0b3Iuc3R5bGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlU3R5bGUgPSBJbnNwZWN0b3Iuc3R5bGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZVN0eWxlKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCBjdXJWYWx1ZSA9IG1vZHVsZVN0eWxlW2l0ZW1dXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJWYWx1ZSA9PT0gJ3N0cmluZycgJiYgbm9kZS5zdHlsZVtpdGVtXSA9PT0gY3VyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IGN1clZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbHVlKSkge1xuICAgICAgICAgICAgY3VyVmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZS5zdHlsZVtpdGVtXSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9hdHRyaWJ1dGUgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgaWYgKCFub2RlLmdldEF0dHJpYnV0ZSkgYnJlYWtcbiAgICAgIE9iamVjdC5rZXlzKEluc3BlY3Rvci5hdHRyaWJ1dGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlQXR0ciA9IEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZUF0dHIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gbW9kdWxlQXR0cltpdGVtXVxuICAgICAgICAgIGxldCBub2RlVmFsID0gbm9kZS5nZXRBdHRyaWJ1dGUoaXRlbSlcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGVWYWwgPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBub2RlVmFsID09PSB2YWx1ZSB8fCBub2RlVmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5JbnNwZWN0b3IudGFnTWFwID0ge31cbkluc3BlY3Rvci5zdHlsZXMgPSB7fVxuSW5zcGVjdG9yLmF0dHJpYnV0ZXMgPSB7fVxuSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zID0ge31cblxuSW5zcGVjdG9yLnJ1biA9ICh0eXBlLCBub2RlTGlzdCkgPT4ge1xuICBsZXQgZm4gPSBJbnNwZWN0b3IucHJvdG90eXBlWydpbnNwZWN0XycgKyB0eXBlXVxuICBsZXQgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBBcnJheS5pc0FycmF5KG5vZGVMaXN0KSkge1xuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICByZXN1bHQucHVzaChmbihub2RlKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUgPSBmdW5jdGlvbiAobGlzdCkge1xuICAvLyBtZXJnZSBzYW1lIG1vZHVsZSBpbnNwZWN0IHJlc3VsdFxuICBsZXQgc2FtZVN0eWxlTWFwID0ge31cbiAgbGlzdC5mb3JFYWNoKG0gPT4ge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhbWVTdHlsZU1hcFttXSA9IHNhbWVTdHlsZU1hcFttXSA/IHNhbWVTdHlsZU1hcFttXSArIDEgOiAxXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG0pKSB7XG4gICAgICBtID0gQXJyYXkuZnJvbShuZXcgU2V0KG0pKVxuICAgICAgbS5mb3JFYWNoKGFtID0+IHtcbiAgICAgICAgc2FtZVN0eWxlTWFwW2FtXSA9IHNhbWVTdHlsZU1hcFthbV0gPyBzYW1lU3R5bGVNYXBbYW1dICsgMSA6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICBsZXQgbWVyZ2VkU3R5bGUgPSBbXVxuICBPYmplY3Qua2V5cyhzYW1lU3R5bGVNYXApLmZvckVhY2gobSA9PiB7XG4gICAgaWYgKHNhbWVTdHlsZU1hcFttXSA9PT0gbGlzdC5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFN0eWxlLnB1c2gobSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtZXJnZWRTdHlsZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS1pbnNwZWN0L2luZGV4LmpzIiwiaW1wb3J0IHBvbHlmaWxsIGZyb20gJy4vdXRpbC9wb2x5ZmlsbC1pZSdcbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgYnVpbGRJblNob3J0Y3V0IGZyb20gJy4vc2hvcnRjdXQnXG5pbXBvcnQgY29uc3RhbnRDb25maWcgZnJvbSAnLi9jb25zdGFudC1jb25maWcnXG5pbXBvcnQgZWRpdG9yIGZyb20gJy4vZWRpdG9yL2VkaXRvcidcbmltcG9ydCBidWlsZEluQ29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcbmltcG9ydCBpbml0RXhjbHVkZVJ1bGUgZnJvbSAnLi9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMnXG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vbW9kdWxlLWluc3BlY3QnXG5pbXBvcnQgaTE4blpoQ24gZnJvbSAnLi9pMThuL3poLWNuJ1xuaW1wb3J0IGkxOG5FblVzIGZyb20gJy4vaTE4bi9lbi11cydcbmltcG9ydCB7XG4gIG1peGluLFxuICBpc09ialxufSBmcm9tICcuL3V0aWwnXG5cbnBvbHlmaWxsKClcblxuY2xhc3MgRWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbW9kdWxlcyA9IFsuLi5idWlsZEluTW9kdWxlc11cbiAgICBsZXQgcmVzZXJ2ZWROYW1lcyA9IHt9XG4gICAgbW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgaWYgKG0ubmFtZSkge1xuICAgICAgICByZXNlcnZlZE5hbWVzW20ubmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBjb21wb25lbnRzID0ge31cbiAgICBjb25zdCBtb2R1bGVzTWFwID0ge31cblxuICAgIC8vIGV4dGVuZGVkIG1vZHVsZXNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmV4dGVuZE1vZHVsZXMpKSB7XG4gICAgICBvcHRpb25zLmV4dGVuZE1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICBpZiAobW9kdWxlLm5hbWUgJiYgIXJlc2VydmVkTmFtZXNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgICAgbW9kdWxlcy5wdXNoKG1vZHVsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4dGVuZGVkIG1vZHVsZSBtdXN0IGhhdmUgYSBuYW1lIGFuZCBzaG91bGQgbm90IGJlIHRoZSBzYW1lIGFzIGJ1aWxkSW4gbW9kdWxlJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtb2R1bGVzIGluIHVzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMubW9kdWxlcykpIHtcbiAgICAgIGxldCBtID0gW11cbiAgICAgIG9wdGlvbnMubW9kdWxlcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVzXFwncyBpdGVtIG11c3QgYmUgc3RyaW5nJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICBpZiAobW9kdWxlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIG0ucHVzaChtb2R1bGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG1vZHVsZXMgPSBtXG4gICAgfVxuXG4gICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAvLyBjb25maWdcbiAgICAgIGxldCBjdXJDb25maWcgPSBvcHRpb25zW21vZHVsZS5uYW1lXVxuICAgICAgbGV0IG1vZHVsZUNvbmZpZyA9IG1vZHVsZVxuICAgICAgaWYgKGlzT2JqKGN1ckNvbmZpZykgJiYgaXNPYmoobW9kdWxlQ29uZmlnKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKG1vZHVsZUNvbmZpZywgY3VyQ29uZmlnKVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IG51bGxcbiAgICAgIG1vZHVsZS5mb3JiaWRkZW4gPSBudWxsXG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxldCBpbnNwZWN0b3IgPSBuZXcgSW5zcGVjdG9yKG1vZHVsZS5uYW1lKVxuICAgICAgICBtb2R1bGUuaW5zcGVjdChpbnNwZWN0b3IuYWRkLmJpbmQoaW5zcGVjdG9yKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS50eXBlID0gJ2ZuJ1xuICAgICAgfVxuICAgICAgbW9kdWxlLmV4Y2x1ZGUgPSBpbml0RXhjbHVkZVJ1bGUobW9kdWxlLCBtb2R1bGVzKVxuXG4gICAgICBpZiAobW9kdWxlLnRhYikge1xuICAgICAgICBtb2R1bGUudGFiLm1vZHVsZSA9IG1vZHVsZVxuXG4gICAgICAgIC8vIGFkZCBhY3RpdmVJdGVtIHByb3BcbiAgICAgICAgbW9kdWxlLnRhYi5wcm9wcyA9IG1vZHVsZS50YWIucHJvcHMgPyBPYmplY3QuYXNzaWduKG1vZHVsZS50YWIucHJvcHMsIHthY3RpdmVJdGVtOiBbU3RyaW5nLCBCb29sZWFuXSwgZm9yYmlkZGVuOiBCb29sZWFufSkgOiB7YWN0aXZlSXRlbTogW1N0cmluZywgQm9vbGVhbl0sIGZvcmJpZGRlbjogQm9vbGVhbn1cbiAgICAgICAgbW9kdWxlLnRhYk5hbWUgPSBgdGFiLSR7bW9kdWxlLm5hbWV9YFxuICAgICAgICBjb21wb25lbnRzW21vZHVsZS50YWJOYW1lXSA9IG1vZHVsZS50YWJcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmljb25zICYmIG9wdGlvbnMuaWNvbnNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgIG1vZHVsZS5pY29uID0gb3B0aW9ucy5pY29uc1ttb2R1bGUubmFtZV1cbiAgICAgIH1cbiAgICAgIG1vZHVsZS5oYXNUYWIgPSAhIW1vZHVsZS50YWJcblxuICAgICAgLy8gcHJldmVudCB2dWUgc3luY1xuICAgICAgZGVsZXRlIG1vZHVsZS50YWJcblxuICAgICAgbW9kdWxlc01hcFttb2R1bGUubmFtZV0gPSBtb2R1bGVcbiAgICB9KVxuXG4gICAgLy8gaTE4blxuICAgIGNvbnN0IGkxOG4gPSB7J3poLWNuJzogaTE4blpoQ24sICdlbi11cyc6IGkxOG5FblVzfVxuICAgIGNvbnN0IGN1c3RvbUkxOG4gPSBvcHRpb25zLmkxOG4gfHwge31cbiAgICBPYmplY3Qua2V5cyhjdXN0b21JMThuKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGkxOG5ba2V5XSA9IGkxOG5ba2V5XSA/IE9iamVjdC5hc3NpZ24oaTE4bltrZXldLCBjdXN0b21JMThuW2tleV0pIDogY3VzdG9tSTE4bltrZXldXG4gICAgfSlcbiAgICBjb25zdCBsYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgfHwgJ2VuLXVzJ1xuICAgIGNvbnN0IGxvY2FsZSA9IGkxOG5bbGFuZ3VhZ2VdXG5cbiAgICAvLyBzaG9ydGN1dFxuICAgIG9wdGlvbnMuc2hvcnRjdXQgPSBPYmplY3QuYXNzaWduKGJ1aWxkSW5TaG9ydGN1dCwgb3B0aW9ucy5zaG9ydGN1dCB8fCB7fSlcbiAgICBjb25zdCBzaG9ydGN1dCA9IHt9XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5zaG9ydGN1dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSBvcHRpb25zLnNob3J0Y3V0W2tleV1cbiAgICAgIGxldCBrZXlDb2RlID0gaXRlbS5rZXlDb2RlXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXSA9IHNob3J0Y3V0W2tleUNvZGVdIHx8IFtdXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXS5wdXNoKGl0ZW0pXG4gICAgICBpdGVtLm5hbWUgPSBrZXlcbiAgICB9KVxuXG4gICAgLy8gbWVyZ2UgY29tbWFuZHNcbiAgICBpZiAoaXNPYmoob3B0aW9ucy5jb21tYW5kcykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYnVpbGRJbkNvbW1hbmRzLCBvcHRpb25zLmNvbW1hbmRzKVxuICAgIH1cblxuICAgIC8vIHNwZWxsY2hlY2tcbiAgICBjb25zdCBzcGVsbGNoZWNrID0gb3B0aW9ucy5zcGVsbGNoZWNrIHx8IGZhbHNlXG5cbiAgICBjb25zdCBjb21wbyA9IG1peGluKGVkaXRvciwge1xuICAgICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7bW9kdWxlcywgbG9jYWxlLCBzaG9ydGN1dCwgbW9kdWxlc01hcCwgc3BlbGxjaGVjaywgY29uc3RhbnRDb25maWd9XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50c1xuICAgIH0pXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb21wbylcbiAgfVxuXG4gIC8qKlxuICAgKiBnbG9iYWwgaW5zdGFsbFxuICAgKiBAcGFyYW0gVnVlXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgaW5zdGFsbChWdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIFZ1ZS5jb21wb25lbnQob3B0aW9ucy5uYW1lIHx8ICdteS12dWUtZWRpdG9yJywgbmV3IEVkaXRvcihvcHRpb25zKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcblxuLy8gdG8gY2hhbmdlIEJhYmVsNiBleHBvcnQncyByZXN1bHRcbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgICAgICAgICB2YWx1ZShzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IE9iamVjdCh0aGlzKVxuXG4gICAgICAgICAgICAgICAgLy8gMi4gTGV0IGxlbiBiZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvLmxlbmd0aCA+Pj4gMFxuXG4gICAgICAgICAgICAgICAgLy8gMy4gSWYgbGVuIGlzIDAsIHJldHVybiBmYWxzZS5cbiAgICAgICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXG4gICAgICAgICAgICAgICAgLy8gICAgKElmIGZyb21JbmRleCBpcyB1bmRlZmluZWQsIHRoaXMgc3RlcCBwcm9kdWNlcyB0aGUgdmFsdWUgMC4pXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IGZyb21JbmRleCB8IDBcblxuICAgICAgICAgICAgICAgIC8vIDUuIElmIG4g4omlIDAsIHRoZW5cbiAgICAgICAgICAgICAgICAvLyAgYS4gTGV0IGsgYmUgbi5cbiAgICAgICAgICAgICAgICAvLyA2LiBFbHNlIG4gPCAwLFxuICAgICAgICAgICAgICAgIC8vICBhLiBMZXQgayBiZSBsZW4gKyBuLlxuICAgICAgICAgICAgICAgIC8vICBiLiBJZiBrIDwgMCwgbGV0IGsgYmUgMC5cbiAgICAgICAgICAgICAgICBsZXQgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMClcblxuICAgICAgICAgICAgICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBlbGVtZW50SyBiZSB0aGUgcmVzdWx0IG9mID8gR2V0KE8sICEgVG9TdHJpbmcoaykpLlxuICAgICAgICAgICAgICAgICAgICAvLyBiLiBJZiBTYW1lVmFsdWVaZXJvKHNlYXJjaEVsZW1lbnQsIGVsZW1lbnRLKSBpcyB0cnVlLCByZXR1cm4gdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gYy4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiA9PT0gcHJvdmlkZXMgdGhlIGNvcnJlY3QgXCJTYW1lVmFsdWVaZXJvXCIgY29tcGFyaXNvbiBuZWVkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaysrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gOC4gUmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIHRleHQuY29udGFpbnMoKVxuICAgIGlmICghVGV4dC5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAgICAgVGV4dC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcyA9PT0gbm9kZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wb2x5ZmlsbC1pZS5qcyIsImltcG9ydCBhbGlnbiBmcm9tICcuL2FsaWduL2luZGV4J1xuaW1wb3J0IGZvbnQgZnJvbSAnLi9mb250L2luZGV4J1xuaW1wb3J0IGZ1bGxTY3JlZW4gZnJvbSAnLi9mdWxsLXNjcmVlbi9pbmRleCdcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlL2luZGV4J1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IGl0YWxpYyBmcm9tICcuL2l0YWxpYydcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQgcXVvdGUgZnJvbSAnLi9xdW90ZSdcbmltcG9ydCBpbmRlbnQgZnJvbSAnLi9pbmRlbnQnXG5pbXBvcnQgb3V0ZGVudCBmcm9tICcuL291dGRlbnQnXG5pbXBvcnQgdWwgZnJvbSAnLi91bCdcbmltcG9ydCBvbCBmcm9tICcuL29sJ1xuaW1wb3J0IGxpbmV0aHJvdWdoIGZyb20gJy4vbGluZXRocm91Z2gnXG5pbXBvcnQgaXRvZG8gZnJvbSAnLi9pY291cnQtdG9kbydcblxuXG4vKipcbiAqIGJ1aWxkLWluIG1vZHVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIGZvbnQsXG4gIGFsaWduLFxuICBpbWFnZSxcbiAgZnVsbFNjcmVlbixcbiAgYm9sZCxcbiAgaXRhbGljLFxuICB1bmRlcmxpbmUsXG4gIHRvZG8sXG4gIHF1b3RlLFxuICBpbmRlbnQsXG4gIG91dGRlbnQsXG4gIHVsLFxuICBvbCxcbiAgbGluZXRocm91Z2gsXG4gIGl0b2RvXG5dXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FsaWduJyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLWFsaWduJyxcbiAgdGFiLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3N0eWxlJywge1xuICAgICAgJ3RleHRBbGlnbic6IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeSddXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlSXRlbSAobikge1xuICAgICAgbiA9IG4gfHwgJ2xlZnQnXG4gICAgICBsZXQgbWFwID0ge1xuICAgICAgICAnbGVmdCc6IDIsXG4gICAgICAgICdjZW50ZXInOiAwLFxuICAgICAgICAncmlnaHQnOiAxXG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBtYXBbbl1cbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy5jaG9vc2VkID0ge1xuICAgICAgICBpY29uOiAnYWxpZ24tJyArIG4sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuYWxpZ25NYXBba2V5XVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGlnbihpbmRleClcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlnbk1hcDoge1xuICAgICAgICAn5bGF5LitJzogJ2p1c3RpZnlDZW50ZXInLFxuICAgICAgICAn5bGF5Y+zJzogJ2p1c3RpZnlSaWdodCcsXG4gICAgICAgICflsYXlt6YnOiAnanVzdGlmeUxlZnQnXG4gICAgICB9LFxuICAgICAgY2hvb3NlZDoge31cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRBbGlnbiAoaW5kZXgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKHRoaXMuYWxpZ25NYXBba2V5XSlcbiAgICAgIHRoaXMuJHBhcmVudC5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMuJHBhcmVudC5tb2R1bGVJbnNwZWN0KClcbiAgICB9LFxuICAgIGNoYW5nZUFsaWduICgpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICBsZXQgcHJlX2luZGV4ID0gIWlzTmFOKHRoaXMuY2hvb3NlZC5pbmRleCkgPyB0aGlzLmNob29zZWQuaW5kZXggOiAtMVxuICAgICAgbGV0IGxlbiA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApLmxlbmd0aFxuICAgICAgbGV0IHRhcmdldF9pbmRleFxuICAgICAgaWYgKHByZV9pbmRleCArIDEgPT09IGxlbikge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSArK3ByZV9pbmRleFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGlnbih0YXJnZXRfaW5kZXgpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgY2xhc3M9J2J0bicgQGNsaWNrPVxcXCJjaGFuZ2VBbGlnbigpXFxcIiA6dGl0bGU9XFxcIiflr7npvZDmlrnlvI86JyArIChjaG9vc2VkLmtleSB8fCAn5bGF5bemJylcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYVxcXCIgOmNsYXNzPVxcXCInZmEtJyArIChjaG9vc2VkLmljb24gfHwgJ2FsaWduLWxlZnQnKVxcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZvbnQnLFxuICBpY29uOiAnaXVpLWljb24gaXVpLWljb24tc3Bhbm5lcicsXG4gIHRhYixcbiAgY29uZmlnLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3N0eWxlJywge1xuICAgICAgZm9udFNpemU6IFsneHgtbGFyZ2UnLCAneC1sYXJnZScsICdsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnXVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmltcG9ydCAnLi9zdHlsZS5zdHlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLmZvbnRBdHRyTWFwW25dXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaG9vc2VkID0gdGhpcy5mb250QXR0ck1hcFt0aGlzLmZvbnRBdHRyTWFwWydkZWZhdWx0J11dXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEF0dHJNYXA6IHt9LFxuICAgICAgY3VyTW9kdWxlOiBudWxsLFxuICAgICAgY2hvb3NlZDoge30sXG4gICAgICBzaG93TGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93TGlzdEZuICgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLnRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvcmJpZGRlbicpKSByZXR1cm5cbiAgICAgIHRoaXMuc2hvd0xpc3QgPSB0cnVlXG4gICAgfSxcbiAgICBjaGFuZ2VBdHRyICh2YWwpIHtcbiAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgLy8gdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdsaW5lSGVpZ2h0JywgdmFsLmxpbmVIZWlnaHQpXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgdmFsLmZvbnRTaXplKVxuICAgICAgdGhpcy5zaG93TGlzdCA9IGZhbHNlXG4gICAgfSxcbiAgICBzZXRGb250TmFtZSAobmFtZSkge1xuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb250TmFtZScsIG5hbWUpXG4gICAgfSxcbiAgICBzZXRIZWFkaW5nIChoZWFkaW5nKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgaGVhZGluZylcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ZvbnQnXVxuICAgIHRoaXMuZm9udEF0dHJNYXAgPSB0aGlzLmN1ck1vZHVsZS5jb25maWdcbiAgICB0aGlzLmNob29zZWQgPSB0aGlzLmZvbnRBdHRyTWFwW3RoaXMuZm9udEF0dHJNYXBbJ2RlZmF1bHQnXV1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcInRhYlxcXCIgY2xhc3M9XFxcImZvbnQtdGFiIHRhYi13aXRoLWRyb3Bkb3duXFxcIiBAbW91c2VlbnRlcj1cXFwic2hvd0xpc3RGblxcXCIgQG1vdXNlbGVhdmU9XFxcInNob3dMaXN0ID0gZmFsc2VcXFwiPlxcbiAgICB7e2Nob29zZWQubmFtZX19XFxuICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWNhcmV0LWRvd25cXFwiPjwvaT5cXG4gICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgdi1pZj1cXFwic2hvd0xpc3RcXFwiPlxcbiAgICAgICAgPGxpIHYtaWY9XFxcInZhbC5uYW1lXFxcIiB2LWZvcj1cXFwiKHZhbCwga2V5KSBpbiBmb250QXR0ck1hcFxcXCIgQGNsaWNrPVxcXCJjaGFuZ2VBdHRyKHZhbClcXFwiPnt7IHZhbC5uYW1lIH19PC9saT5cXG4gICAgPC91bD5cXG48L2xpPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAvLyB0aHJvdWdoIGZvbnQgdGFnXG4gICd4eC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNixcbiAgICBuYW1lOiAn5qCH6aKYJ1xuICB9LFxuICAneC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNSxcbiAgICBuYW1lOiAn5Ymv5qCH6aKYJ1xuICB9LFxuICAnbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDQsXG4gICAgbmFtZTogJ+Wwj+agh+mimCdcbiAgfSxcbiAgJ21lZGl1bSc6IHtcbiAgICBmb250U2l6ZTogMyxcbiAgICBuYW1lOiAn5q2j5paHJ1xuICB9LFxuICBkZWZhdWx0OiAnbWVkaXVtJ1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L2NvbmZpZy5qcyIsIi8qKlxuICogdG9nZ2xlIGZ1bGwgc2NyZWVuIG1vZGVcbiAqIENyZWF0ZWQgYnkgcGVhayBvbiAxNi84LzE4LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2Z1bGwtc2NyZWVuJyxcbiAgICBpY29uOiAnZmEgZmEtYXJyb3dzLWFsdCcsXG4gICAgaTE4bjogJ2Z1bGwgc2NyZWVuJyxcbiAgICBoYW5kbGVyKHJoKSB7XG4gICAgICAgIHJoLmVkaXRvci50b2dnbGVGdWxsU2NyZWVuKClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mdWxsLXNjcmVlbi9pbmRleC5qcyIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ltYWdlJyxcbiAgaTE4bjogJ2ltYWdlJyxcbiAgY2FuVXBsb2FkU2FtZUltYWdlOiB0cnVlLFxuICBpbWdPY2N1cHlOZXdSb3c6IGZhbHNlLFxuICBtYXhTaXplOiA1MTIwICogMTAyNCxcbiAgY29tcHJlc3M6IHtcbiAgICAvLyBtYXggd2lkdGhcbiAgICB3aWR0aDogMTYwMCxcbiAgICAvLyBtYXggaGVpZ2h0XG4gICAgaGVpZ2h0OiAxNjAwLFxuICAgIC8vIGNwbXByZXNzIHF1YWxpdHkgMCAtIDFcbiAgICBxdWFsaXR5OiAwLjhcbiAgfSxcbiAgdGFiLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdpbWcnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS9pbmRleC5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd0YWItaW1hZ2UnLFxuICAgICAgY3VyTW9kdWxlOiBudWxsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGljaygpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgIH0sXG4gICAgcHJvY2VzcyhlKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy4kcmVmcy5maWxlLmZpbGVzWzBdXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIGlmICh0aGlzLmN1ck1vZHVsZS5jYW5VcGxvYWRTYW1lSW1hZ2UpIHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5jdXJNb2R1bGUgPSB0aGlzLiRwYXJlbnQubW9kdWxlc01hcFsnaW1hZ2UnXVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcIml0ZW1cXFwiIGNsYXNzPVxcXCJidG5cXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIHJlZj1cXFwiZmlsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIiBAY2hhbmdlPVxcXCJwcm9jZXNzXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYSBmYS1waWN0dXJlLW9cXFwiIEBjbGljaz1cXFwicGlja1xcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXFxuXFxuXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYm9sZCcsXG4gIGljb246ICdmYSBmYS1ib2xkJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdib2xkJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnU1RST05HJykuYWRkKCd0YWcnLCAnQicpLmFkZCgnc3R5bGUnLHsnZm9udC13ZWlnaHQnOiAnYm9sZCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaXRhbGljJyxcbiAgaWNvbjogJ2ZhIGZhLWl0YWxpYycsXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpdGFsaWMnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdJJykuYWRkKCdzdHlsZScsIHsnZm9udFN0eWxlJzogJ2l0YWxpYyd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pdGFsaWMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd1bmRlcmxpbmUnLFxuICBpY29uOiAnZmEgZmEtdW5kZXJsaW5lJyxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1UnKS5hZGQoJ3N0eWxlJywgeyd0ZXh0LWRlY29yYXRpb24tbGluZSc6ICd1bmRlcmxpbmUnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdW5kZXJsaW5lL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndG9kbycsXG4gIGljb246ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICBleGNsdWRlOiAnQUxMX0JVVF9NWVNFTEYnLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3RvZG8nLCB7XG4gICAgICBpbnNlcnRBZnRlcjogcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXG4gICAgICBwbGFjZWhvbGRlcjogJ+W+heWKnuS6i+mhuSdcbiAgICB9KVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci10b2RvJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy90b2RvL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncXVvdGUnLFxuICBpY29uOiAnZmEgZmEtcXVvdGUtcmlnaHQnLFxuICBzaG93OiB0cnVlLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRRdW90ZScpXG4gIH0sXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCwgbW9kdWxlKSB7XG4gICAgbGV0IGlzSW5RdW90ZSA9IHJoLmVkaXRvci5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZS5uYW1lKVxuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgncXVvdGUnLCBpc0luUXVvdGUpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXF1b3RlJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1pbmRlbnQnLFxuICB0eXBlOiAnZm4nLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luZGVudCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1vdXRkZW50JyxcbiAgdHlwZTogJ2ZuJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdvdXRkZW50JylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3VsJyxcbiAgaWNvbjogJ2ZhIGZhLWxpc3QtdWwnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdVTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3VsL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2wnLFxuICBpY29uOiAnZmEgZmEtbGlzdC1vbCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdPTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL29sL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbGluZXRocm91Z2gnLFxuICBpY29uOiAnZmEgZmEtc3RyaWtldGhyb3VnaCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1NUUklLRScpLmFkZCgnc3R5bGUnLCB7J3RleHQtZGVjb3JhdGlvbi1saW5lJzogJ2xpbmUtdGhyb3VnaCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2l0b2RvJyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLWNoZWNrZWQtbGluZScsXG4gIGV4Y2x1ZGU6ICdBTExfQlVUX01ZU0VMRicsXG4gIG1vdW50ZWQgKGVkaXRvcikge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5pdGlUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2l0b2RvJywge1xuICAgICAgaW5zZXJ0QWZ0ZXI6IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXI6ICflvoXlip7kuovpobknXG4gICAgfSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItdG9kbyc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaWNvdXJ0LXRvZG8vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG91dGRlbnQ6IHtcbiAgICBrZXlDb2RlOiA5LFxuICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ291dGRlbnQnKVxuICAgIH1cbiAgfSxcbiAgaW5kZW50OiB7XG4gICAga2V5Q29kZTogOSxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbmRlbnQnKVxuICAgIH1cbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAga2V5Q29kZTogOCxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnZGVsZXRlJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH0sXG4gIGVudGVyOiB7XG4gICAga2V5Q29kZTogMTMsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2VudGVyJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaG9ydGN1dC9pbmRleC5qcyIsImltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuaW1wb3J0ICcuL3N0eWxlL21haW4uc3R5bCdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2VkaXRvci5odG1sJ1xuaW1wb3J0IGRyYWdQaWMgZnJvbSAnLi9kcmFnLXBpYydcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi4vbW9kdWxlLWluc3BlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHByb3BzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDAsXG4gICAgICB2YWxpZGF0b3IodmFsKXtcbiAgICAgICAgcmV0dXJuIHZhbCA+PSAxMDBcbiAgICAgIH1cbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG4gICAgYXV0b0hlaWdodDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBkcmFnUGljXG4gIH0sXG4gIGRhdGEoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlczoge30sXG4gICAgICBhY3RpdmVNb2R1bGVzOiBbXSxcbiAgICAgIGFsbEFjdGl2ZU1vZHVsZXM6IFtdLFxuICAgICAgZnVsbFNjcmVlbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29udGVudCh2YWwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MXG4gICAgICBpZiAodmFsICE9PSBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5pbm5lckhUTUwgPSB2YWxcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bGxTY3JlZW4odmFsKXtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXNcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29tcG9uZW50LnBhcmVudEVsID0gY29tcG9uZW50LiRlbC5wYXJlbnROb2RlXG4gICAgICAgIGNvbXBvbmVudC5uZXh0RWwgPSBjb21wb25lbnQuJGVsLm5leHRTaWJsaW5nXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LiRlbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoY29tcG9uZW50Lm5leHRFbCkge1xuICAgICAgICBjb21wb25lbnQucGFyZW50RWwuaW5zZXJ0QmVmb3JlKGNvbXBvbmVudC4kZWwsIGNvbXBvbmVudC5uZXh0RWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29tcG9uZW50LnBhcmVudEVsLmFwcGVuZENoaWxkKGNvbXBvbmVudC4kZWwpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbnRlbnRTdHlsZSgpe1xuICAgICAgY29uc3Qgc3R5bGUgPSB7fVxuICAgICAgaWYgKHRoaXMuZnVsbFNjcmVlbikge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLiRyZWZzLnRvb2xiYXIuY2xpZW50SGVpZ2h0IC0gMX1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBzdHlsZVsnbWluLWhlaWdodCddID0gYCR7dGhpcy5oZWlnaHR9cHhgXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRDdXJBY3RpdmVNb2R1bGVJdGVtICgpIHtcbiAgICAgIHJldHVybiBJbnNwZWN0b3IuYWN0aXZlSXRlbXNcbiAgICB9LFxuICAgIGNsZWFyQWN0aXZlTW9kdWxlSXRlbSAoKSB7XG4gICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXMgPSB7fVxuICAgIH0sXG4gICAgaGFuZGxlRHJhZ1BpYyAoZmlsZSkge1xuICAgICAgaWYgKCh0aGlzLm1vZHVsZXNNYXBbJ2ltYWdlJ10gJiYgdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddLmRyYWcgIT09IGZhbHNlKSB8fCAhdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddKSB7XG4gICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgIHRoaXMuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9ICF0aGlzLmZ1bGxTY3JlZW5cbiAgICB9LFxuICAgIGVuYWJsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IHRydWVcbiAgICB9LFxuICAgIGV4aXRGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBmYWxzZVxuICAgIH0sXG4gICAgZm9jdXMoKXtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyKCl7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuYmx1cigpXG4gICAgfSxcbiAgICBleGVjQ29tbWFuZChjb21tYW5kLCBhcmcsIGV4ZWNPbmx5KXtcbiAgICAgIGlmICghZXhlY09ubHkpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlU2VsZWN0aW9uKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKS5leGVjQ29tbWFuZChjb21tYW5kLCBhcmcpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgIH0sXG4gICAgc2F2ZUN1cnJlbnRSYW5nZSgpe1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcbiAgICAgICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXJcbiAgICAgICAgbGV0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lclxuICAgICAgICAvLyBmb3IgSUUxMSA6IG5vZGUuY29udGFpbnModGV4dE5vZGUpIGFsd2F5cyByZXR1cm4gZmFsc2VcbiAgICAgICAgc3RhcnQgPSBzdGFydC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBzdGFydC5wYXJlbnROb2RlIDogc3RhcnRcbiAgICAgICAgZW5kID0gZW5kLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IGVuZC5wYXJlbnROb2RlIDogZW5kXG4gICAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKHN0YXJ0KSAmJiBjb250ZW50LmNvbnRhaW5zKGVuZCkpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZXN0b3JlU2VsZWN0aW9uKCl7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHRoaXMucmFuZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICAgIGNvbnN0IHJvdyA9IFJILnByb3RvdHlwZS5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICByYW5nZS5zZXRTdGFydChyb3csIDApXG4gICAgICAgIHJhbmdlLnNldEVuZChyb3csIDApXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmVNb2R1bGUobW9kdWxlKXtcbiAgICAgIGlmIChtb2R1bGUuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmhhbmRsZXIobmV3IFJIKHRoaXMucmFuZ2UsIHRoaXMpLCBtb2R1bGUpXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kdWxlSW5zcGVjdCAoKSB7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlTW9kdWxlSXRlbSgpXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIGxldCByaCA9IG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKVxuICAgICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICAgIHRleHRzLnB1c2godGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0cyBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICBsZXQgdGV4dEFmdGV0RFIgPSBbXVxuICAgICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiB0ZXh0LnBhcmVudE5vZGUgIT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnBhcmVudE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0ZXh0QWZ0ZXREUi5pbmNsdWRlcyh0ZXh0KSkge1xuICAgICAgICAgICAgdGV4dEFmdGV0RFIucHVzaCh0ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdGFnUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bigndGFnJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCB0YWdSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHRhZ1Jlc3VsdClcblxuICAgICAgICBsZXQgc3R5bGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdzdHlsZScsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgc3R5bGVSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHN0eWxlUmVzdWx0KVxuXG4gICAgICAgIGxldCBhdHRyaWJ1dGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdhdHRyaWJ1dGUnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVJlc3VsdFJEID0gSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUoYXR0cmlidXRlUmVzdWx0KVxuXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IHRhZ1Jlc3VsdC5jb25jYXQoc3R5bGVSZXN1bHQsIGF0dHJpYnV0ZVJlc3VsdClcbiAgICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRhZ1Jlc3VsdFJELmNvbmNhdChzdHlsZVJlc3VsdFJELCBhdHRyaWJ1dGVSZXN1bHRSRCkpKVxuXG4gICAgICAgIC8vIHJlc2V0XG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgbW9kdWxlLmZvcmJpZGRlbiA9IGZhbHNlXG4gICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGhhbmRsZSBmb3JiaWRkZW4gbG9naWNcbiAgICAgICAgaWYgKHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgZXhjbHVkZUxpc3QgPSBbXVxuICAgICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobSkpIHtcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXJNb2R1bGUgPSB0aGlzLm1vZHVsZXNNYXBbbW9kdWxlTmFtZV1cbiAgICAgICAgICAgICAgICBleGNsdWRlTGlzdCA9IGV4Y2x1ZGVMaXN0LmNvbmNhdChjdXJNb2R1bGUuZXhjbHVkZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGV4Y2x1ZGVMaXN0ID0gQXJyYXkuZnJvbShuZXcgU2V0KGV4Y2x1ZGVMaXN0KSlcbiAgICAgICAgICBleGNsdWRlTGlzdC5mb3JFYWNoKGV4YyA9PiB7XG4gICAgICAgICAgICBsZXQgZXhjTW9kdWxlID0gdGhpcy5tb2R1bGVzTWFwW2V4Y11cbiAgICAgICAgICAgIGlmIChleGNNb2R1bGUgJiYgZXhjTW9kdWxlLnR5cGUgIT09ICdmbicpIHtcbiAgICAgICAgICAgICAgZXhjTW9kdWxlLmZvcmJpZGRlbiA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGhpZ2hsaWdodCBsb2dpY1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9IG1vZHVsZS5uYW1lXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gdHJ1ZVxuICAgICAgICAgICAgICBsZXQgY3VyTW9kdWxlQWN0aXZlSXRlbSA9IHRoaXMuZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSgpW21vZHVsZU5hbWVdXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyTW9kdWxlQWN0aXZlSXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGN1ck1vZHVsZUFjdGl2ZUl0ZW0gfHwgJ0FMTCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKXtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICBjb25zdCB0b29sYmFyID0gdGhpcy4kcmVmcy50b29sYmFyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnRcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIC8vIHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zYXZlQ3VycmVudFJhbmdlLCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjb250ZW50LmlubmVySFRNTClcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGUgPT4ge1xuICAgICAgdGhpcy5leGVjQ29tbWFuZCgncGFzdGUnLCBlLCB0cnVlKVxuICAgICAgbGV0IGNvbW1vbiA9IHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGlmIChjb21tb24pIHtcbiAgICAgICAgaWYgKGNvbW1vbi5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb21tb24gPSBjb21tb24ucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICAgICAgICBjb21tb24uc2Nyb2xsSW50b1ZpZXcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudG91Y2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlciwgZmFsc2UpXG5cbiAgICAvLyBiZWZvcmUgZXhlYyBjb21tYW5kXG4gICAgLy8gbGV0IHRleHQgYmUgYSByb3dcbiAgICBSSC5wcm90b3R5cGUuYmVmb3JlKChjb21tYW5kLCAgcmgsIGFyZykgPT4ge1xuICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBpZiAoIXJoLmlzRW1wdHlOb2RlKHRleHQpKSB7XG4gICAgICAgICAgcmgudGV4dFRvUm93KHRleHQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAodGV4dHMubGVuZ3RoKSB7XG4gICAgICAgIHJoLmVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaGFuZGxlIHNob3J0Y3V0XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICB0aGlzLmV4ZWNDb21tYW5kKCdrZXlkb3duJywgZSwgdHJ1ZSlcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zaG9ydGN1dFtlLmtleUNvZGVdXG4gICAgICBpZiAoaXRlbSAmJiBpdGVtLmxlbmd0aCkge1xuICAgICAgICBpdGVtLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gcy5rZXlDb2RlICYmIGUuYWx0S2V5ID09PSAhIXMuYWx0S2V5ICYmIGUuY3RybEtleSA9PT0gISFzLmN0cmxLZXkgJiYgZS5tZXRhS2V5ID09PSAhIXMubWV0YUtleSAmJiBlLnNoaWZ0S2V5ID09PSAhIXMuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgICAgICAgIHMuaGFuZGxlcih0aGlzLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCBmYWxzZSlcblxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUubW91bnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1vZHVsZS5tb3VudGVkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZCgpe1xuICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLnVwZGF0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLnVwZGF0ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaEhhbmRsZXIpXG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuZGVzdHJveWVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5kZXN0cm95ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yL2VkaXRvci5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuLi9jb21tYW5kcydcblxuLy8gZm9yIElFIDExXG5pZiAoIVRleHQucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gIFRleHQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMob3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IG90aGVyTm9kZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSGFuZGxlciB7XG4gIC8qKlxuICAgKiBidWlsZCByYW5nZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7UmFuZ2V9IHJhbmdlXG4gICAqIEBwYXJhbSB7ZWRpdG9yfSBjdXJyZW50IGVkaXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IocmFuZ2UsIGVkaXRvcikge1xuICAgIGlmICghcmFuZ2UgfHwgIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FudFxcJ3QgcmVzb2x2ZSByYW5nZScpXG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogZXhlY3V0ZSBlZGl0IGNvbW1hbmRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAgICogQHBhcmFtIGFyZ1xuICAgKi9cbiAgZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbi5jYWxsKHRoaXMsIGNvbW1hbmQsIHRoaXMsIGFyZylcbiAgICB9KVxuICAgIGNvbnN0IGV4aXN0Q29tbWFuZCA9IGNvbW1hbmRzW2NvbW1hbmRdXG4gICAgY29uc3QgY3VzdG9tQ29tbWFuZCA9IHRoaXMuZWRpdG9yLmNvbW1hbmRzID8gdGhpcy5lZGl0b3IuY29tbWFuZHNbY29tbWFuZF0gOiBudWxsXG4gICAgaWYgKGV4aXN0Q29tbWFuZCkge1xuICAgICAgZXhpc3RDb21tYW5kKHRoaXMsIGFyZylcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VzdG9tQ29tbWFuZCkge1xuICAgICAgIGN1c3RvbUNvbW1hbmQodGhpcywgYXJnKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLCBmYWxzZSwgYXJnKVxuICAgIH1cbiAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4uY2FsbCh0aGlzLCBjb21tYW5kLCB0aGlzLCBhcmcpXG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBiZWZvcmUgZXhlYyBjb21tYW5kICBcbiAgICoqL1xuICBiZWZvcmUgKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckJlZm9yZUxpc3QgKCkge1xuICAgIFJhbmdlSGFuZGxlci5iZWZvcmVMaXN0ID0gW11cbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBhZnRlciBleGVjIGNvbW1hbmQgIFxuICAgKiovXG4gIGFmdGVyIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckFmdGVyTGlzdCAoKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG4gIH1cbn1cblxuUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QgPSBbXVxuUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9pbnN0YW5jZS5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuXG5jb25zdCBpbnNlcnRJbWFnZSA9IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIC8vIGZvcmJpZGRlbiBsb2dpY1xuICBsZXQgZm9yYmlkZGVuID0gZmFsc2VcbiAgbGV0IGFjdGl2ZXMgPSByaC5lZGl0b3IuYWN0aXZlTW9kdWxlc1xuICBhY3RpdmVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgbGV0IG1vZHVsZSA9IHJoLmVkaXRvci5tb2R1bGVzTWFwW25hbWVdXG4gICAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhjbHVkZSAmJiBtb2R1bGUuZXhjbHVkZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgICAgZm9yYmlkZGVuID0gdHJ1ZVxuICAgIH1cbiAgfSlcbiAgaWYgKGZvcmJpZGRlbikgcmV0dXJuXG5cbiAgbGV0IHJldHVybkRhdGEgPSB7XG4gICAgb3JpZ2luOiBhcmdcbiAgfVxuICBsZXQgZWRpdG9yID0gcmguZWRpdG9yXG4gIGxldCBjb25maWcgPSBlZGl0b3IubW9kdWxlc01hcFsnaW1hZ2UnXVxuICBpZiAoIWNvbmZpZykge1xuICAgIHRocm93IG5ldyBFcnJvcignaW1hZ2UgY29uZmlnIGxvYWQgZmFpbCcpXG4gIH1cbiAgaWYgKGFyZyBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICBoYW5kbGVGaWxlKGFyZylcbiAgfVxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCBmYWxzZSwgYXJnKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShmaWxlKSB7XG4gICAgaWYgKGNvbmZpZy5jb21wcmVzcykge1xuICAgICAgY29uZmlnLmNvbXByZXNzLmZpZWxkTmFtZSA9IGNvbmZpZy5maWVsZE5hbWUgfHwgJ2ltYWdlJ1xuICAgICAgbHJ6KGZpbGUsIGNvbmZpZy5jb21wcmVzcykudGhlbihyc3QgPT4ge1xuICAgICAgICBpZiAocnN0LmZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgYWZ0ZXIgY29tcHJlc3MnLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICAgIH0sIHJzdClcbiAgICAgICAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgcmV0dXJuRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHJzdClcbiAgICAgICAgICBsZXQgaW1nSWQgPSByaC5jcmVhdGVSYW5kb21JZCgnaW1nJylcbiAgICAgICAgICBpbnNlcnRCYXNlNjQocmV0dXJuRGF0YS5iYXNlNjQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6IGVycixcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyXG4gICAgICAgIH0pXG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCByZXR1cm5EYXRhKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgd2l0aG91dCBjb21wcmVzcycsXG4gICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChjb25maWcuZmllbGROYW1lLCBmaWxlLCBmaWxlLm5hbWUpXG4gICAgICAgIHJldHVybkRhdGEuZm9ybURhdGEgPSBmb3JtRGF0YVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgIGxldCBpbWdJZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdpbWcnKVxuICAgICAgICAgIGluc2VydEJhc2U2NChlLnRhcmdldC5yZXN1bHQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0QmFzZTY0IChiYXNlNjQsIGlkKSB7XG4gICAgaWYgKGNvbmZpZy5pbWdPY2N1cHlOZXdSb3cpIHtcbiAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGxldCBjdXJSb3cgPSByaC5mb3JjZUdldFJvdyhub2RlKVxuICAgICAgaWYgKGN1clJvdykge1xuICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIHJoLmluc2VydEFmdGVyKG5ld1JvdywgY3VyUm93KVxuICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICB9XG4gICAgfVxuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGA8aW1nIHNyYz1cIiR7YmFzZTY0fVwiIGRhdGEtZWRpdG9yLWltZz1cIiR7aWR9XCI+YCwgdHJ1ZSlcbiAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgJyYjODIwMzsnLCB0cnVlKVxuICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgIHN0YXR1czogJ2V2ZXJ5dGhpbmcgZmluZScsXG4gICAgICBzdGF0dXNDb2RlOiAyLFxuICAgICAgYmFzZTY0LFxuICAgICAgcmVwbGFjZVNyY0FmdGVyVXBsb2FkRmluaXNoOiByZXBsYWNlSW1nKGlkKSxcbiAgICAgIGRlbGV0ZUltZ1doZW5VcGxvYWRGYWlsOiBkZWxldGVJbWcoaWQpXG4gICAgfSkpXG4gIH1cblxuICAvLyByZXBsYWNlIGltYWdlJ3MgYmFzZTY0IHNyYyB0byB1cmwgYWZ0ZXIgdXBsb2FkIGZpbmlzaFxuICBmdW5jdGlvbiByZXBsYWNlSW1nIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtZWRpdG9yLWltZz0nJHtpZH0nXWApXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItaW1nJylcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCBlZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlIGltYWdlIGFmdGVyIHVwbG9hZCBmYWlsXG4gIGZ1bmN0aW9uIGRlbGV0ZUltZyAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWVkaXRvci1pbWc9JyR7aWR9J11gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gICAgICAgIGVkaXRvci4kZW1pdCgnY2hhbmdlJywgZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgcyA9cmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgc3BhbiBlbGVtZW50IHRvIGtlZXAgbGluZS1oZWlnaHQgcnVuIGNvcnJlY3RcbiAgICAgIGlmIChyaC5pc0VtcHR5Tm9kZShub2RlKSAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTUEFOJykge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCAnJiM4MjAzOycpXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHMuZm9jdXNOb2RlLCBzLmFuY2hvck9mZnNldCAtIDEpXG4gICAgICByYW5nZS5zZXRFbmQocy5mb2N1c05vZGUsIHMuZm9jdXNPZmZzZXQpXG4gICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIGFyZylcbiAgICAgIHMuY29sbGFwc2Uocy5mb2N1c05vZGUsIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBhcmcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRleHQgPSBudWxsXG5cbiAgaWYod2luZG93LmNsaXBib2FyZERhdGEgJiYgY2xpcGJvYXJkRGF0YS5zZXREYXRhKSB7XG4gICAgLy8gSUVcbiAgICB0ZXh0ID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpXG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykgXG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgdGV4dFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMClcblxuICAgICAgLy8g5Yib5bu65Li05pe25YWD57Sg77yM5L2/5b6XVGV4dFJhbmdl5Y+v5Lul56e75Yqo5Yiw5q2j56Gu55qE5L2N572uXG4gICAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIHRlbXBFbC5pbm5lckhUTUwgPSBcIiYjRkVGRjtcIlxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZSh0ZW1wRWwpXG4gICAgICB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpXG4gICAgICB0ZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGVtcEVsKVxuICAgICAgdGVtcEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcEVsKVxuICAgIH1cbiAgICB0ZXh0UmFuZ2UudGV4dCA9IHRleHRcbiAgICB0ZXh0UmFuZ2UuY29sbGFwc2UoZmFsc2UpXG4gICAgdGV4dFJhbmdlLnNlbGVjdCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQ2hyb21l5LmL57G75rWP6KeI5ZmoXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG5cbiAgICAvLyByZXdyaXRlIGxpIGVudGVyIGxvZ2ljXG4gICAgaWYgKHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2xpJykgJiYgcmguaXNFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IHVsT3JPbCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3VsJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnb2wnKVxuICAgICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0VW5vcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgICAgfVxuICAgICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ09MJykge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0T3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9lbnRlci5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICBsZXQgbm9kZUN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IHVuZGVybGluZSB0YWdcbiAgICBsZXQgdW5kZXJsaW5lID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uTGluZSc6ICd1bmRlcmxpbmUnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdJJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghdW5kZXJsaW5lKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ1UnKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCB1bmRlcmxpbmUpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvdW5kZXJsaW5lLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICBsZXQgbm9kZUN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IHN0cmlrZVRocm91Z2ggdGFnXG4gICAgbGV0IHN0cmlrZVRocm91Z2ggPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdTVFJJS0UnLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbkxpbmUnOiAnbGluZS10aHJvdWdoJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydVJywgJ0knLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCFzdHJpa2VUaHJvdWdoKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ1NUUklLRScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIHN0cmlrZVRocm91Z2gpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvc3RyaWtlVGhyb3VnaC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgaXRhbGljIHRhZ1xuICAgIGxldCBpdGFsaWMgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdpJywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAnZm9udFN0eWxlJzogJ2l0YWxpYydcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ1UnLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgLy8gaXMgaW4gYSBpdGFsaWNcbiAgICBpZiAoIWl0YWxpYykge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdJJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgaXRhbGljKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvaXRhbGljLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnYm9sZCcsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgYm9sZCB0YWdcbiAgICBsZXQgYm9sZCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3N0cm9uZycpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2InKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICdmb250V2VpZ2h0JzogJ2JvbGQnXG4gICAgICB9KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdJJywgJ1UnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCFib2xkKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ0InKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBib2xkKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2JvbGQuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuY29uc3QgcSA9IHtcbiAgLy8gb25seSBzZXQgY29udGVudGVkaXRhYmxlOmZhbHNlIGluIHBhcmVudCBub2RlIGNhbiBjaGlsZCBub2RlIHRyaWdnZXIga2V5ZG93biBsaXN0ZW5lclxuICAncXVvdGUnIChyaCwgaXNJblF1b3RlKSB7XG4gICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgIGlmIChpc0luUXVvdGUpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IG5vZGUucGFyZW50Tm9kZSA6IG5vZGVcbiAgICAgIGxldCBxdW90ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ1tkYXRhLWVkaXRvci1xdW90ZV0nKVxuICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgIGxldCB0ZXh0cyA9IHJoLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMocXVvdGUpXG4gICAgICAgIGxldCBxdW90ZVJvd3MgPSBbXVxuICAgICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20ocXVvdGUucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrJykuY2hpbGRyZW4pXG4gICAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgICAgLy8gZmluZCByb3cgaW4gY3VycmVudCBxdW90ZSByb3dcbiAgICAgICAgICAvLyBsZXQgcm93ID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHLCBmYWxzZSwgcXVvdGUpXG4gICAgICAgICAgbGV0IHJvd1xuICAgICAgICAgIHJvd3MuZm9yRWFjaChjdXJSb3cgPT4ge1xuICAgICAgICAgICAgaWYgKGN1clJvdy5jb250YWlucyh0ZXh0KSkge1xuICAgICAgICAgICAgICByb3cgPSBjdXJSb3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghcXVvdGVSb3dzLmluY2x1ZGVzKHJvdykpIHtcbiAgICAgICAgICAgIHF1b3RlUm93cy5wdXNoKHJvdylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHF1b3RlUm93cy5mb3JFYWNoKChxciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHFyLCBxdW90ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmguaW5zZXJ0QWZ0ZXIocXIsIHF1b3RlUm93c1tpbmRleCAtIDFdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgICBpZiAocXVvdGVSb3dzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHF1b3RlUm93c1swXSwgMClcbiAgICAgICAgICByYW5nZS5zZXRFbmQocXVvdGVSb3dzW3F1b3RlUm93cy5sZW5ndGggLSAxXSwgMSlcbiAgICAgICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgcy5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdCdzIGEgZW1wdHkgcXVvdGVcbiAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICBzLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gaXMgYXQgYSBlbXB0eSByb3cgd2l0aG91dCByb3cgZWxlbWVudCwgdGhlbiBjcmVhdGUgYSByb3dcbiAgICAvLyBvciB0ZXh0cyBoYXMgbm8gY29tbW9uIHBhcmVudCByb3dcbiAgICBpZiAoIWN1clJvdyAmJiAhdGV4dHMubGVuZ3RoKSB7XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICB2LmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIG5ld1Jvdy5vdXRlckhUTUwpXG4gICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICB0ZXh0cy5wdXNoKHMuZm9jdXNOb2RlKVxuICAgIH1cbiAgICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgICAgdGV4dHMucHVzaChjdXJSb3cpXG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IHJoLm5ld1JvdygpXG4gICAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgbGV0IHF1b3RlQmxvY2sgPSByaC5uZXdSb3coe3RhZzogJ2Rpdid9KVxuICAgIHF1b3RlQmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZS1ibG9jaycsIHJoLmNyZWF0ZVJhbmRvbUlkKCdxdW90ZWJsb2NrJykpXG4gICAgcXVvdGUuYXBwZW5kQ2hpbGQocXVvdGVCbG9jaylcbiAgICBsZXQgaWQgPSByaC5jcmVhdGVSYW5kb21JZCgncXVvdGUnKVxuICAgIHF1b3RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnLCBpZClcbiAgICBxdW90ZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgbGV0IHF1b3RlUm93cyA9IFtdXG4gICAgdGV4dHMuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcblxuICAgICAgLy8gY3JlYXRlIGEgcm93IGZvciB0ZXh0IHdpdGhvdXQgcm93XG4gICAgICBpZiAoIWN1clJvdyAmJiB0ZXh0Lm5vZGVWYWx1ZSkge1xuICAgICAgICBjdXJSb3cgPSByaC5uZXdSb3coKVxuICAgICAgICBjdXJSb3cuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJSb3cgJiYgIXF1b3RlUm93cy5pbmNsdWRlcyhjdXJSb3cpKSB7XG4gICAgICAgIHF1b3RlUm93cy5wdXNoKGN1clJvdylcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBhbmNob3JSb3dcbiAgICBxdW90ZVJvd3MuZm9yRWFjaCgocXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IHF1b3RlUm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHF1b3RlQmxvY2suYXBwZW5kQ2hpbGQocXIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcXVvdGVCbG9jay5hcHBlbmRDaGlsZChxci5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICBhbmNob3JSb3cgPSBxclxuICAgIH0pXG5cbiAgICBpZiAoYW5jaG9yUm93LnBhcmVudE5vZGUpIHtcbiAgICAgIGFuY2hvclJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChxdW90ZSwgYW5jaG9yUm93KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjdXJyZW50IHJvdyBpcyBjcmVhdGVkIGFuZCBoYXMgbm8gcGFyZW50XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICB2LmFwcGVuZENoaWxkKHF1b3RlKVxuICAgICAgcmgucmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgdi5pbm5lckhUTUwpXG4gICAgfVxuICAgIGNvbnN0IGN1clF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZWRpdG9yLXF1b3RlPScke2lkfSddYClcbiAgICBpZiAoIWN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQpIHJldHVyblxuICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQsIGN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID8gMSA6IDApXG4gIH0sXG4gICdpbml0UXVvdGUnIChyaCwgYXJnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgbGV0IHF1b3RlID0gcmguZmluZFNwZWNpYWxBbmNlc3RvcihlLnRhcmdldCwgJ1tkYXRhLWVkaXRvci1xdW90ZV0nKVxuICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgbGV0IG5vZGUgPSBzLmFuY2hvck5vZGVcbiAgICAgICAgbGV0IGN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgaWYgKGN0bi5yZXBsYWNlKCdcXG4nLCAnJykgPT09ICcnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgIHJoLmluc2VydEFmdGVyKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuXG4gICAgICAgICAgLy8gY3Vyc29yIG1heSBhdCByb3cgb3IgYXQgcXVvdGUgYmxvY2sgLCBzbyB0aGVyZSBhcmUgdHdvIGp1ZGdlbWVudCBjb25kaXRpb25zXG4gICAgICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgKHMuZm9jdXNPZmZzZXQgPT09IDAgfHwgKG5vZGUuY29udGFpbnMocy5iYXNlTm9kZSkgJiYgKHJoLmlzRW1wdHlOb2RlKHMuYmFzZU5vZGUpKSAmJiBzLmZvY3VzT2Zmc2V0ID09PSAxKSkpIHtcbiAgICAgICAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShxdW90ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2tdJykuY2hpbGRyZW4pXG5cbiAgICAgICAgICAgIC8vIGVtcHR5IHF1b3RlXG4gICAgICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgIC8vIHJvdyBhbmQgbm9kZSBoYXMgZmF0aGVyLWNoaWxkIHJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICBpZiAoKHJvdyA9PT0gbm9kZSB8fCByb3cuY29udGFpbnMobm9kZSkgfHwgbm9kZS5jb250YWlucyhyb3cpKSAmJiBpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgLy8gb25seSBoYXZlIG9uZSBlbXB0eSByb3cgaW4gcXVvdGUsdGhlbiBkZWxldGUgdGhlIHF1b3RlXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAxICYmIHJoLmlzRW1wdHlOb2RlKHJvdykpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHJvdyBoYXZlIGNvbnRlbnQgYW5kIHByZXZpb3VzIGVsZW1lbnQgZXhpc3QsIHRoZW4gbW92ZSBjdXJzb3IgdG8gcHJldmlvdXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgbGV0IHByZVJvdyA9IHJoLmdldFByZXZpb3VzUm93KHF1b3RlKVxuICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSBxdW90ZVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlUm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RWxlID0gQXJyYXkuZnJvbShwcmVSb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrXScpLmNoaWxkcmVuKS5wb3AoKVxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShsYXN0RWxlLCAxKVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGxhc3RFbGUsIDApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlUm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gcHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwidGV4dFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSByb3dcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShwcmVSb3csIDEpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShwcmVSb3csIDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3F1b3RlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCB0ID0ge1xuICAndG9kbycgKHJoLCBkYXRhKSB7XG4gICAgbGV0IHJvdyA9IHJoLm5ld1Jvdyh7XG4gICAgICBicjogdHJ1ZVxuICAgIH0pXG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyhyaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICBcbiAgICAvLyBhIGVtcHR5IHJvdyB3aXRob3V0IHJvdyBlbGVtZW50LCBjcmVhdGUgYSByb3cgZWxlbWVudFxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICB2LmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIG5ld1Jvdy5vdXRlckhUTUwpXG4gICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICBjdXJSb3cgPSBzLmZvY3VzTm9kZVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0b2RvIGFmdGVyIHRoaXMgcm93XG4gICAgbGV0IGFmdGVyV2hpY2ggPSByaC5nZXRSb3coZGF0YS5pbnNlcnRBZnRlcilcblxuICAgIC8vIGlzIGFmdGVyV2hpY2ggaXMgYSBlbXB0eSByb3csIGp1c3QgaW5zZXJ0IHRvZG8gYXQgY3VycmVudCByb3dcbiAgICBpZiAoYWZ0ZXJXaGljaCAmJiByaC5pc0VtcHR5Um93KGFmdGVyV2hpY2gpKSB7XG4gICAgICBhZnRlcldoaWNoID0gbnVsbFxuICAgIH1cbiAgICBpZiAoYWZ0ZXJXaGljaCkge1xuICAgICAgbGV0IHRhcmdldEluZGV4XG4gICAgICBsZXQgc3RhcnRJbmRleFxuICAgICAgbGV0IGxpc3QgPSBhZnRlcldoaWNoLnBhcmVudE5vZGUuY2hpbGROb2Rlc1xuICAgICAgbGlzdC5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkID09PSBhZnRlcldoaWNoKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBsaXN0Lmxlbmd0aFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRhcmdldEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykpIHtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0YXJnZXRJbmRleCA9IHRhcmdldEluZGV4ID09PSB1bmRlZmluZWQgPyBzdGFydEluZGV4ICsgMSA6IHRhcmdldEluZGV4XG4gICAgICBhZnRlcldoaWNoLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJvdywgbGlzdFt0YXJnZXRJbmRleF0pXG4gICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDApXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gaW5zZXJ0IHRvZG8gYXQgY3VycmVudCByb3cgaWYgaXQgaXMgZW1wdHlcbiAgICAgIGlmIChyaC5pc0VtcHR5Um93KGN1clJvdykpIHtcbiAgICAgICAgcmguY29sbGFwc2VBdFJvdyhjdXJSb3cpXG4gICAgICAgIHJvdyA9IGN1clJvd1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQocm93LCAwKVxuICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDApXG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0b2RvSWQgPSByaC5jcmVhdGVSYW5kb21JZCgndG9kbycpXG4gICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgYDwke2NvbnN0YW50LlJPV19UQUd9IGRhdGEtZWRpdG9yLXRvZG89JHt0b2RvSWR9IGNvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiR7ZGF0YS5wbGFjZWhvbGRlcn1cIj48LyR7Y29uc3RhbnQuUk9XX1RBR30+PGJyPmApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZWRpdG9yLXRvZG89JyR7dG9kb0lkfSddIGlucHV0W3R5cGU9dGV4dF1gKS5mb2N1cygpXG4gICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KVxuICAgIHRbJ2luaXRUb2RvJ10ocmgsIGRhdGEpXG4gIH0sXG4gIC8vIGluaXQgdG9kbyBsb2dpY1xuICAnaW5pdFRvZG8nIChyaCwgZGF0YSkge1xuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVkaXRvci10b2RvXScpXG4gICAgY2hlY2tib3hzLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBjLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPWNoZWNrYm94XScpXG4gICAgICBjb25zdCBjdG4gPSBjLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPXRleHRdJylcbiAgICAgIGlmIChjLmluaXQpIHJldHVyblxuICAgICAgY3RuQ2hlY2tlZExvZ2ljKClcblxuICAgICAgZnVuY3Rpb24gY3RuQ2hlY2tlZExvZ2ljKCkge1xuICAgICAgICBjdG4udmFsdWUgPSBjdG4udmFsdWUgfHwgY3RuLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnKVxuICAgICAgICBjdG4uc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci12YWx1ZScsIGN0bi52YWx1ZSlcbiAgICAgICAgaWYgKGJ0bi5jaGVja2VkKSB7XG4gICAgICAgICAgY3RuLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3RuLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG4gICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBidG4ub25jaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY3RuQ2hlY2tlZExvZ2ljKClcbiAgICAgICAgaWYgKHJoLmVkaXRvciAmJiByaC5lZGl0b3IuJHJlZnMgJiYgcmguZWRpdG9yLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICByaC5lZGl0b3IuJGVtaXQoJ2NoYW5nZScsIHJoLmVkaXRvci4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3RuLm9uaW5wdXQgPSBlID0+IHtcbiAgICAgICAgY3RuLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGN0bi5vbmtleWRvd24gPSBjdG4ub25rZXlkb3duIHx8IChlID0+IHtcbiAgICAgICAgICBpZiAoIVsxMywgOF0uaW5jbHVkZXMoZS5rZXlDb2RlKSkgcmV0dXJuXG4gICAgICAgICAgbGV0IHJvdyA9IGMubmV4dFNpYmxpbmdcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaWYgKGN0bi52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGVUb2RvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRbJ3RvZG8nXShyaCwge1xuICAgICAgICAgICAgICBpbnNlcnRBZnRlcjogYyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGRhdGEucGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChjdG4udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIGRlbGV0ZVRvZG8oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICBjLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgYylcbiAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBjLmluaXQgPSB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvdG9kby5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cbiAgICAvLyB0byBrZWVwIHRleHQgd3JhcCBieSBhIHJvd1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgIGNvbW1hbmRzLmZvcm1hdEJsb2NrKHJoLCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMva2V5ZG93bi5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIC8vIHJlc3RvcmUgZmlyc3Qgcm93XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgbGV0IG5vZGUgPSBzLmJhc2VOb2RlXG4gIGxldCB2YWx1ZSA9IG5vZGUubm9kZVZhbHVlIHx8IG5vZGUuaW5uZXJUZXh0XG4gIC8vIGNvbnNvbGUubG9nKCdkZWxldGUnLCBub2RlLCBlKVxuICBsZXQgY3VyUmFuZ2UgPSByaC5nZXRSYW5nZSgpIHx8IHJoLnJhbmdlXG5cbiAgLy8gY2FuY2VsIGxpc3Qgd2hlbiBsaSBpcyBlbXB0eVxuICBpZiAoKHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2xpJykpICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHVsT3JPbCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3VsJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnb2wnKVxuICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRVbm9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgfVxuICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdPTCcpIHtcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRPcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgLy8gbm9kZSBpcyBlZGl0IHpvbmVcbiAgaWYgKCFyb3cpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gYWZ0ZXJEZWxldGUocmgpXG4gIH1cbiAgXG4gIC8vIGVtcHR5IHJvd1xuICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmICgobm9kZSA9PT0gcm93ICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB8fCAocm93LmlubmVySFRNTC5yZXBsYWNlKC88YnI+L2csICcnKSA9PT0gJycgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDEpKSkge1xuICAgIGxldCBmaXJzdFJvdyA9IHJoLmVkaXRab25lKCkuZmlyc3RFbGVtZW50Q2hpbGRcblxuICAgIC8vIGZpcnN0IHJvdyBjYW5jZWwgb3V0ZGVudFxuICAgIGlmIChmaXJzdFJvdyA9PT0gcm93KSB7XG4gICAgICBjb21tYW5kcy5vdXRkZW50KHJoLCBudWxsKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICAvLyByb3cgaGFzIGNvbnRlbnQsIGN1cnNvciBpcyBhdCBhdCBzdGFydCBvZiB0aGUgbm9kZSwgZG8gb3V0ZGVudFxuICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmIHZhbHVlICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwICYmIChub2RlID09PSByb3cuZmlzdEVsZW1lbnRDaGlsZCB8fCBub2RlID09PSByb3cuZmlyc3RDaGlsZCkpIHtcbiAgICBsZXQgb3V0ZGVudFJlc3VsdCA9IGNvbW1hbmRzLm91dGRlbnQocmgsIG51bGwpXG4gICAgaWYgKG91dGRlbnRSZXN1bHQgPT09ICdOT19ORUVEX09VVERFTlQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBlbXB0eSByb3dcbiAgaWYgKHJvdy5pbm5lckhUTUwucmVwbGFjZSgvPGJyPi9nLCAnJykgPT09ICcnKSB7XG4gICAgLy8gZ2V0IHByZXZpb3VzIHJvdyB3aXRoIGNvbnRlbnRcbiAgICBsZXQgcHJlUm93ID0gcmguZ2V0UHJldmlvdXNSb3cocm93KVxuXG4gICAgLy8gY3Vyc29yIGZvY3VzIG9uIHByZXZpb3VzIHJvdydzIGlucHV0IGlmIHByZXZpb3VzIHJvdyBpcyB0b2RvXG4gICAgaWYgKHByZVJvdyAmJiBwcmVSb3cuZGF0YXNldCAmJiBwcmVSb3cuZGF0YXNldC5lZGl0b3JUb2RvKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpXG4gICAgICBsZXQgaW5wdXQgPSBwcmVSb3cucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgcmV0dXJuIGFmdGVyRGVsZXRlKHJoKVxufVxuXG4vLyBoYW5kbGUgJiM4MjAzOyBhZnRlciBkZWxldGVcbmZ1bmN0aW9uIGFmdGVyRGVsZXRlKHJoKSB7XG4gIGxldCBkZWxldGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGxldCBmb2N1c05vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCBjdG4gPSB0eXBlb2YgZm9jdXNOb2RlLmlubmVyVGV4dCA9PT0gJ3N0cmluZycgPyBmb2N1c05vZGUuaW5uZXJUZXh0IDogZm9jdXNOb2RlLm5vZGVWYWx1ZVxuICAgIGlmICh0eXBlb2YgY3RuID09PSAnc3RyaW5nJyAmJiAvXFx1MjAwQi8udGVzdChjdG4pICYmIGN0bi5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJycpIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGZhbHNlKVxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoZGVsZXRlSW50ZXJ2YWwpXG4gICAgfVxuICB9KVxuXG4gIC8vIGlmIGVkaXQgem9uZSBpcyBlbXB0eSwgY3JlYXRlIGEgcm93XG4gIGlmIChyaC5pc0VtcHR5Tm9kZShyaC5lZGl0Wm9uZSgpKSAmJiAhcmguZ2V0Um93cygpLmxlbmd0aCkge1xuICAgIGxldCByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICByaC5lZGl0Wm9uZSgpLmFwcGVuZENoaWxkKHJvdylcbiAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDEpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9kZWxldGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICcmIzgyMDM7JylcbiAgICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coKVxuICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHQubm9kZVZhbHVlXG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0ZXh0Lm5leHRTaWJsaW5nXG4gICAgICB0ZXh0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dClcbiAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeVJpZ2h0JywgZmFsc2UpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlMZWZ0JywgZmFsc2UpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvanVzdGlmeUxlZnQuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsICcmIzgyMDM7JylcbiAgICAgIGlmIChzLmJhc2VOb2RlICYmIHMuYmFzZU5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG4gICAgaWYgKCFjdXJSb3cpIHtcbiAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coKVxuICAgICAgbmV3Um93LmlubmVyVGV4dCA9IHRleHQubm9kZVZhbHVlXG4gICAgICBsZXQgbmV4dFNpYmxpbmcgPSB0ZXh0Lm5leHRTaWJsaW5nXG4gICAgICB0ZXh0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dClcbiAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUNlbnRlcicsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlDZW50ZXIuanMiLCJpbXBvcnQgYW0gZnJvbSAnLi9hc3Npc3QtbWV0aG9kcydcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IG0gPSB7XG4gIC8qKlxuICAgKiBmdW5jIGFkZCBldmVyeSBlbGVtZW50cyBvZiBleHRBcnIgdG8gc291cmNlQXJyLlxuICAgKiBAcGFyYW0gc291cmNlQXJyXG4gICAqIEBwYXJhbSBleHRBcnJcbiAgICovXG4gIG1lcmdlQXJyYXkgKHNvdXJjZUFyciwgZXh0QXJyKSB7XG4gICAgLy8gbm90ZTogQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyMSxhcnIyKSBpcyB1bnJlbGlhYmxlXG4gICAgZXh0QXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBzb3VyY2VBcnIucHVzaChlbClcbiAgICB9KVxuICB9LFxuICAvKipcbiAgICogZmluZCBhbGwgdGhlIGRlc2NlbmRhbnQgdGV4dCBub2RlcyBvZiBhIGVsZW1lbnRcbiAgICogQHBhcmFtIGFuY2VzdG9yXG4gICAqL1xuICBnZXREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3Rvcikge1xuICAgIGlmIChhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHJldHVybiBbYW5jZXN0b3JdXG4gICAgfVxuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG4gICAgaWYgKCFhbmNlc3Rvci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICB9XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFuY2VzdG9yLmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYW4gYW5jZXN0b3IgZWxlbWVudCB0aGF0IGJlZm9yZSB0aGUgc3BlY2lmeSBlbmQgZWxlbWVudCxcbiAgICogdGhlIGFuY2VzdG9yIGVsZW1lbnQgbXVzdCBjb250YWlucyB0aGUgZW5kIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKiBAcGFyYW0gZW5kRWxcbiAgICovXG4gIGdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yLCBlbmRFbCkge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG4gICAgbGV0IGVuZEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5jZXN0b3IuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFuY2VzdG9yLmNoaWxkTm9kZXNbaV0uY29udGFpbnMoZW5kRWwpKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBhbmNlc3Rvci5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZSA9PT0gZW5kRWwpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfSBlbHNlIGlmIChpID09PSBlbmRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIGVuZEVsKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLyoqXG4gICAqIGZ1bmMgZmluZCBhbGwgdGhlIGRlc2NlbmRhbnQgdGV4dCBub2RlcyBvZiBhbiBhbmNlc3RvciBlbGVtZW50IHRoYXQgYWZ0ZXIgdGhlIHNwZWNpZnkgc3RhcnQgZWxlbWVudCxcbiAgICogdGhlIGFuY2VzdG9yIGVsZW1lbnQgbXVzdCBjb250YWlucyB0aGUgc3RhcnQgZWxlbWVudC5cbiAgICogQHBhcmFtIGFuY2VzdG9yXG4gICAqIEBwYXJhbSBzdGFydEVsXG4gICAqL1xuICBnZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IsIHN0YXJ0RWwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGxldCBzdGFydEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5jZXN0b3IuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFuY2VzdG9yLmNoaWxkTm9kZXNbaV0uY29udGFpbnMoc3RhcnRFbCkpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBhbmNlc3Rvci5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZSA9PT0gc3RhcnRFbCkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsXG4gICAgICAgICAgICBtLmdldEFmdGVyU3RhcnREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUsIHN0YXJ0RWwpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsXG4gICAgICAgICAgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGdldCB0aGUgY2xvc2VzdCBwYXJlbnQgYmxvY2sgbm9kZSBvZiBhIHRleHQgbm9kZS5cbiAgICogQHBhcmFtIG5vZGVcbiAgICogQHJldHVybiB7Tm9kZX1cbiAgICovXG4gIGdldFBhcmVudEJsb2NrTm9kZSAobm9kZSkge1xuICAgIGNvbnN0IGJsb2NrTm9kZU5hbWVzID0gWydESVYnLCAnUCcsICdTRUNUSU9OJywgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JyxcbiAgICAgICdPTCcsICdVTCcsICdMSScsICdUUicsICdURCcsICdUSCcsICdUQk9EWScsICdUSEVBRCcsICdUQUJMRScsICdBUlRJQ0xFJywgJ0hFQURFUicsICdGT09URVInLCAnQkxPQ0tRVU9URSddXG4gICAgbGV0IGNvbnRhaW5lciA9IG5vZGVcbiAgICB3aGlsZSAoY29udGFpbmVyKSB7XG4gICAgICBpZiAoYmxvY2tOb2RlTmFtZXMuaW5jbHVkZXMoY29udGFpbmVyLm5vZGVOYW1lKSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9LFxuICBpc0lubGluZUVsZW1lbnQgKG5vZGUpIHtcbiAgICBjb25zdCBpbmxpbmVOb2RlTmFtZXMgPSBbJ0EnLCAnQUJCUicsICdBQ1JPTllNJywgJ0InLCAnQ0lURScsICdDT0RFJywgJ0VNJywgJ0knLFxuICAgICAgJ0ZPTlQnLCAnSU1HJywgJ1MnLCAnU01BTEwnLCAnU1BBTicsICdTVFJJS0UnLCAnU1RST05HJywgJ1UnLCAnU1VCJywgJ1NVUCddXG4gICAgcmV0dXJuIGlubGluZU5vZGVOYW1lcy5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKVxuICB9LFxuICBpc0lubGluZU9yVGV4dCAobm9kZSkge1xuICAgIGxldCBpc0lubGluZSA9IG0uaXNJbmxpbmVFbGVtZW50KG5vZGUpXG4gICAgbGV0IGlzVGV4dCA9IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFXG4gICAgcmV0dXJuIGlzSW5saW5lIHx8IGlzVGV4dFxuICB9LFxuICAvKlxuICAgKiBmaW5kIGFsbCBzcGVjaWZ5IG5vZGVzIGluIGFuIGFuY2VzdG9yIHRocm91Z2ggc2VhcmNoIG9waW5pb25zKHVuaXF1ZSBhdHRyaWJ1dGVzKVxuICAgKiBAcGFyYW0gbm9kZVxuICAgKiBAcGFyYW0ge29ian1cbiAgICogICAgIG11c3QgaGF2ZSBrZXkgJ3RhZ05hbWUnXG4gICAqIEByZXR1cm4ge2Fycn1cbiAgICoqL1xuICBnZXRBbGxTcGVjaWZ5Tm9kZSAoYW5jZXN0b3IsIHNlYXJjaE9waW5pb24pIHtcbiAgICBjb25zdCB0YXJnZXRUYWdOYW1lID0gc2VhcmNoT3Bpbmlvbi50YWdOYW1lXG4gICAgZGVsZXRlIHNlYXJjaE9waW5pb24udGFnTmFtZVxuICAgIGNvbnN0IHRhZ3MgPSBhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldFRhZ05hbWUpXG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICB0YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGNvbnN0IG9waW5pb25LZXlzID0gT2JqZWN0LmtleXMoc2VhcmNoT3BpbmlvbilcbiAgICAgIGxldCBwYXNzID0gdHJ1ZVxuICAgICAgb3BpbmlvbktleXMuZm9yRWFjaChvcGluaW9uID0+IHtcbiAgICAgICAgdmFyIGEgPSB0YWcuZ2V0QXR0cmlidXRlKG9waW5pb24pXG4gICAgICAgIGlmICh0YWcuZ2V0QXR0cmlidXRlKG9waW5pb24pICE9PSBzZWFyY2hPcGluaW9uW29waW5pb25dKSB7XG4gICAgICAgICAgcGFzcyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAocGFzcykge1xuICAgICAgICByZXN1bHQucHVzaCh0YWcpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgZmluZCB0aGUgbnVtYmVyIG9mIG5lc3RpbmcgYW5jZXN0b3Igd2hpY2ggaGFzIHNhbWUgbm9kZSBuYW1lXG4gICAqIEBwYXJhbSB7bm9kZX0gY3VycmVudCBub2RlXG4gICAqIEBwYXJhbSB7c3RyfSBhbmNlc3RvcidzIHRhZyBuYW1lXG4gICAqIEByZXR1cm4ge251bX0gbnVtYmVyXG4gICAqKi9cbiAgaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcgKG5vZGUsIGFuY2VzdG9yTm9kZU5hbWUpIHtcbiAgICBsZXQgbnVtID0gMFxuICAgIGFuY2VzdG9yTm9kZU5hbWUgPSBhbmNlc3Rvck5vZGVOYW1lLnRvVXBwZXJDYXNlKClcbiAgICB3aGlsZSAobm9kZSAmJiAobm9kZSAhPT0gYW0uZWRpdFpvbmUoKSkpIHtcbiAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBhbmNlc3Rvck5vZGVOYW1lKSB7XG4gICAgICAgIG51bSsrXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBudW1cbiAgfSxcblxuICAvKlxuICAgKiBmaW5kIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhyb3VnaCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge25vZGV9IHN0YXJ0IGF0IG5vZGVcbiAgICogQHBhcmFtIHtzdHJ9IGFuY2VzdG9yIGVsZW1lbnQncyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVpdGhlciByZXR1cm4gZmlyc3QgZWxpZ2libGUgZWxlbWVudCBvciBsYXN0IGVsaWdpYmxlIGVsZW1lbnRcbiAgICogIGRlZmF1bHQ6IHRydWVcbiAgICogQHBhcmFtIHtub2RlfSBzZWFyY2hpbmcgc3RvcCBhdCB0aGUgYm9yZGVyIGVsZW1lbnRcbiAgICogIGRlZmF1bHQ6IGVkaXRvcidzIGNvbnRlbnQgem9uZVxuICAgKiBAcmV0dXJuIHRhcmdldCBhbmNlc3RvciBlbGVtZW50XG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvciAobm9kZSwgc2VsZWN0b3IsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgbGV0IGFuY2VzdG9ycyA9IEFycmF5LmZyb20obm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgIHJlc3VsdCA9IG5vZGVcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogZmluZCB0YXJnZXQgc3R5bGVcbiAgICoqL1xuICBmaW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUgKG5vZGUsIHN0eWxlTmFtZSwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBpZiAobm9kZS5zdHlsZSAmJiBub2RlLnN0eWxlW3N0eWxlTmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gbm9kZS5zdHlsZVtzdHlsZU5hbWVdXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgLypcbiAgICogZmluZCBhbiBhbmNlc3RvciBlbGVtZW50IHRocm91Z2ggc3R5bGUgbmFtZSBhbmQgc3R5bGUgdmFsdWVcbiAgICogQHBhcmFtIHN0eWxlIHtvYmp9IHN0eWxlTmFtZTogc3R5bGVWYWx1ZVxuICAgKiBAcmV0dXJuXG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUgKG5vZGUsIHN0eWxlLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcbiAgICAgIGxldCBpc1RhcmdldCA9IHRydWVcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKHN0eWxlTmFtZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZVtzdHlsZU5hbWVdICE9PSBwYXJlbnQuc3R5bGVbc3R5bGVOYW1lXSkge1xuICAgICAgICAgIGlzVGFyZ2V0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChpc1RhcmdldCkge1xuICAgICAgICByZXN1bHQgPSBwYXJlbnRcbiAgICAgICAgbm9kZSA9IHBhcmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHBhcmVudFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgZ2V0Tm9kZU51bSAoYW5jZXN0b3IsIG5vZGVOYW1lKSB7XG4gICAgcmV0dXJuIGFuY2VzdG9yLnF1ZXJ5U2VsZWN0b3JBbGwobm9kZU5hbWUpLmxlbmd0aFxuICB9LFxuICAvKipcbiAgICogZmluZCBhbGwgdGhlIHRleHQgbm9kZXMgaW4gcmFuZ2VcbiAgICovXG4gIGdldEFsbFRleHROb2Rlc0luUmFuZ2UoKSB7XG4gICAgY29uc3Qgc3RhcnRDb250YWluZXIgPSB0aGlzLnJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgY29uc3QgZW5kQ29udGFpbmVyID0gdGhpcy5yYW5nZS5lbmRDb250YWluZXJcbiAgICBjb25zdCByb290RWwgPSB0aGlzLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cblxuICAgIGlmIChzdGFydENvbnRhaW5lciA9PT0gZW5kQ29udGFpbmVyKSB7XG4gICAgICBpZiAoc3RhcnRDb250YWluZXIubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBbc3RhcnRDb250YWluZXJdXG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3RhcnRDb250YWluZXIuY2hpbGROb2Rlc1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMucmFuZ2Uuc3RhcnRPZmZzZXQ7IGkgPCB0aGlzLnJhbmdlLmVuZE9mZnNldDsgaSsrKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2RlcyhjaGlsZE5vZGVzW2ldKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICB9XG5cbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBsZXQgZW5kSW5kZXggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290RWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvb3RFbC5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAobm9kZS5jb250YWlucyhzdGFydENvbnRhaW5lcikpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGlcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmNvbnRhaW5zKGVuZENvbnRhaW5lcikpIHtcbiAgICAgICAgZW5kSW5kZXggPSBpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IHJvb3RFbC5jaGlsZE5vZGVzW2ldXG4gICAgICBpZiAoaSA9PT0gc3RhcnRJbmRleCkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBzdGFydENvbnRhaW5lcikpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBlbmRDb250YWluZXIpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKlxuICAgKiBnZXQgdGhlIHJvdyB3aGljaCBjb250YWlucyB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0ge25vZGV9IHRhcmdldCBlbGVtZW50XG4gICAqIEByZXR1cm4ge25vZGV9IHJvd1xuICAgKiovXG4gIGdldFJvdyAobm9kZSkge1xuICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShhbS5lZGl0Wm9uZSgpLmNoaWxkcmVuKVxuICAgIGxldCByZXN1bHRcbiAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIGlmIChyb3cuY29udGFpbnMobm9kZSkgfHwgcm93ID09PSBub2RlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJvd1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICB0ZXh0VG9Sb3cgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSBhbS5lZGl0Wm9uZSgpICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBmYWxzZSwgY29uc3RhbnQuUk9XX1RBR19VUFBFUkNBU0UpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH0sXG4gIC8qXG4gICAqIGdldCByb3csIGlmIHRoZXJlJ3Mgbm90LCBjcmVhdGUgb25lXG4gICAqKi9cbiAgZm9yY2VHZXRSb3cgKG5vZGUpIHtcbiAgICBub2RlID0gbS50ZXh0VG9Sb3cobm9kZSlcbiAgICByZXR1cm4gbS5nZXRSb3cobm9kZSlcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGFsbCByb3dzXG4gICAqKi9cbiAgZ2V0Um93cyAoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciBjdXJyZW50IG5vZGUgaXMgYSByb3dcbiAgICoqL1xuICBpc1JvdyAobm9kZSkge1xuICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShhbS5lZGl0Wm9uZSgpLmNoaWxkcmVuKVxuICAgIHJldHVybiByb3dzLmluY2x1ZGVzKG5vZGUpXG4gIH0sXG4gIC8qXG4gICAqIGNyZWF0ZSBhIHdyYXBwZXIgZm9yIGlubGluZSBlbGVtZW50IGluIHNhbWUgcm93XG4gICAqKi9cbiAgY3JlYXRlV3JhcHBlckZvcklubGluZSAobm9kZSwgd3JhcHBlck5vZGVOYW1lLCBzZXBlcmF0ZUJ5QnIgPSB0cnVlKSB7XG4gICAgaWYgKCFtLmlzSW5saW5lT3JUZXh0KG5vZGUpKSByZXR1cm4gbm9kZVxuICAgIGxldCBlbGVtZW50cyA9IFtub2RlXVxuICAgIHNlYXJjaExlZnQoKVxuICAgIHNlYXJjaFJpZ2h0KClcbiAgICBsZXQgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyTm9kZU5hbWUpXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBlbGVtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChlbGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbGV0IGxhc3RPbmUgPSBlbGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQobGFzdE9uZSlcbiAgICAgIGVsZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIGVsZSlcbiAgICB9KVxuXG4gICAgaWYgKHNlcGVyYXRlQnlCcikge1xuICAgICAgaGFuZGxlckJyKG5ld1Jvdy5wcmV2aW91c1NpYmxpbmcsIHRydWUpXG4gICAgICBoYW5kbGVyQnIobmV3Um93Lm5leHRTaWJsaW5nLCBmYWxzZSlcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Jvd1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlckJyKG5vZGUsIGRpcmVjdGlvbikge1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICBsZXQgbmV4dERpciA9IGRpcmVjdGlvbiA/ICdwcmV2aW91c1NpYmxpbmcnIDogJ25leHRTaWJsaW5nJ1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IG5vZGVbbmV4dERpcl1cbiAgICAgICAgaWYgKCF0YXJnZXROb2RlKSByZXR1cm5cbiAgICAgICAgaWYgKHRhcmdldE5vZGUubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlckJyKHRhcmdldE5vZGUsIGRpcmVjdGlvbilcbiAgICAgICAgfVxuICAgICAgICBtLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUodGFyZ2V0Tm9kZSwgd3JhcHBlck5vZGVOYW1lLCBzZXBlcmF0ZUJ5QnIpXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaExlZnQoKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudHNbMF0ucHJldmlvdXNTaWJsaW5nICYmIG0uaXNJbmxpbmVPclRleHQoZWxlbWVudHNbMF0ucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICBlbGVtZW50cy51bnNoaWZ0KGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2VhcmNoUmlnaHQoKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgJiYgbS5pc0lubGluZU9yVGV4dChlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5uZXh0U2libGluZykpIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5uZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIGdldCBub2RlJ3MgcHJldmlvdXMgcm93IHdoaWNoIGhhcyBjb250ZW50XG4gICAqKi9cbiAgZ2V0UHJldmlvdXNSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5nZXRSb3cobm9kZSlcbiAgICBsZXQgcHJlUm93XG4gICAgbGV0IHJvd3MgPSBtLmdldFJvd3MoKVxuICAgIGxldCByb3dJbmRleCA9IG51bGxcbiAgICByb3dzLmZvckVhY2goKGN1clJvdywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJSb3cgPT09IHJvdykge1xuICAgICAgICByb3dJbmRleCA9IGluZGV4XG4gICAgICB9XG4gICAgICBpZiAocm93SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGN1clJvdy5pbm5lckhUTUwgIT09ICcnKSB7XG4gICAgICAgICAgcHJlUm93ID0gY3VyUm93XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwcmVSb3dcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciB0YXJnZXQgcm93IGlzIGVtcHR5XG4gICAqKi9cbiAgaXNFbXB0eVJvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmlzUm93KG5vZGUpID8gbm9kZSA6IG0uZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdy5nZXRBdHRyaWJ1dGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3cuaW5uZXJUZXh0LnJlcGxhY2UoJ1xcbicsICcnKS5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJydcbiAgfSxcbiAgLypcbiAgICogd2hldGhlciB0YXJnZXQgbm9kZSBpcyBlbXB0eVxuICAgKiovXG4gIGlzRW1wdHlOb2RlIChub2RlKSB7XG4gICAgbGV0IGN0biA9IHR5cGVvZiBub2RlLmlubmVyVGV4dCA9PT0gJ3N0cmluZycgPyBub2RlLmlubmVyVGV4dCA6IG5vZGUubm9kZVZhbHVlXG4gICAgaWYgKHR5cGVvZiBjdG4gIT09ICdzdHJpbmcnKSByZXR1cm5cbiAgICByZXR1cm4gY3RuLnJlcGxhY2UoJ1xcbicsICcnKS5yZXBsYWNlKC9cXHUyMDBCL2csICcnKSA9PT0gJydcbiAgfSxcbiAgLypcbiAgICogdHJ5IHRvIGNvbGxhcHNlIGF0IHRhcmdldCByb3dcbiAgICoqL1xuICBjb2xsYXBzZUF0Um93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uaXNSb3cobm9kZSkgPyBub2RlIDogbS5nZXRSb3cobm9kZSlcbiAgICBsZXQgcyA9IGFtLmdldFNlbGVjdGlvbigpXG4gICAgdHJ5IHtcbiAgICAgIHMuY29sbGFwc2Uocm93LCAxKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMuY29sbGFwc2Uocm93LCAwKVxuICAgIH1cbiAgfSxcbiAgLypcbiAgICogc2VhcmNoaW5nIG5lc3RlZCBhbmNlc3RvcnMgdGlsbCBib3JkZXIgdG8gZmluZCB0aGUgc3BlY2lmaWVkIHRhZ05hbWVcbiAgICogQHBhcmFtIHtub2RlfSBmcm9tIHdoaWNoIG5vZGVcbiAgICogQHBhcmFtIHthcnJ9IGluY2x1ZGVzIHRhZyBuYW1lcyBvZiB0YXJnZXQgdGFnXG4gICAqIEBwYXJhbSB7bm9kZX0gc2VhcmNoIGJvcmRlclxuICAgKiBAcmV0dXJuIHthcnJ9XG4gICAqKi9cbiAgZmluZEV4aXN0VGFnVGlsbEJvcmRlciAobm9kZSwgdGFnTmFtZWxpc3QsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBib3JkZXIpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgbGV0IG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZVxuICAgICAgaWYgKG5vZGVOYW1lICYmIHRhZ05hbWVsaXN0LmluY2x1ZGVzKG5vZGVOYW1lKSkge1xuICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhub2RlTmFtZSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChub2RlTmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBhIG5lc3RlZCBET00gZGF0YSB0aHJvdWdoIGEgdGFnIG5hbWUgbGlzdFxuICAgKiovXG4gIGNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdCAobGlzdCkge1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBkb206IG51bGwsXG4gICAgICBkZWVwZXN0SWQ6IG51bGwsXG4gICAgICBkZWVwZXN0OiBudWxsXG4gICAgfVxuICAgIGxpc3QuZm9yRWFjaCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgICAgcmVzdWx0W2luZGV4XSA9IGVsZVxuICAgICAgbGV0IHBhcmVudCA9IHJlc3VsdFtpbmRleCAtIDFdXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGUpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXN1bHQuZGVlcGVzdCA9IGVsZVxuICAgICAgICByZXN1bHQuZGVlcGVzdElkID0gYW0uY3JlYXRlUmFuZG9tSWQoJ2RlZXBlc3QnKVxuICAgICAgICByZXN1bHQuZG9tID0gcmVzdWx0WycwJ11cbiAgICAgICAgZWxlLmlkID0gcmVzdWx0LmRlZXBlc3RJZFxuICAgICAgICBlbGUuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaGFuZGxlLW1ldGhvZHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJteS12dWUtZWRpdG9yXFxcIiA6Y2xhc3M9XFxcInsnZnVsbC1zY3JlZW4nOmZ1bGxTY3JlZW59XFxcIiA6c3R5bGU9XFxcInsnei1pbmRleCc6ekluZGV4fVxcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcInRvb2xiYXJcXFwiIDpzdHlsZT1cXFwieyd6LWluZGV4Jzp6SW5kZXgrMX1cXFwiIHJlZj1cXFwidG9vbGJhclxcXCIgZGF0YS1lZGl0b3I9XFxcInRvb2xiYXJcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJ0YWJzXFxcIj5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIm1vZHVsZSBpbiBtb2R1bGVzXFxcIj5cXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCIhbW9kdWxlLmhhc1RhYlxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSA6dGl0bGU9XFxcImxvY2FsZVttb2R1bGUuaTE4bl1cXFwiIGNsYXNzPVxcXCJ0YWIgYnRuXFxcIiA6Y2xhc3M9XFxcIntoaWdoTGlnaHQ6IG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0LCBmb3JiaWRkZW46IG1vZHVsZS5mb3JiaWRkZW59XFxcIiBAY2xpY2s9XFxcImFjdGl2ZU1vZHVsZShtb2R1bGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCIgOmNsYXNzPVxcXCJtb2R1bGUuaWNvblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgICAgICAgICAgIDxrZWVwLWFsaXZlPlxcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGFiXFxcIiA6aXM9XFxcIm1vZHVsZS50YWJOYW1lXFxcIiA6YWN0aXZlSXRlbT1cXFwibW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHRcXFwiIDpmb3JiaWRkZW49XFxcIm1vZHVsZS5mb3JiaWRkZW5cXFwiIDpjbGFzcz1cXFwie2hpZ2hMaWdodDogbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQsIGZvcmJpZGRlbjogbW9kdWxlLmZvcmJpZGRlbn1cXFwiIEBjbGljaz1cXFwiYWN0aXZlTW9kdWxlKG1vZHVsZSlcXFwiPjwvbGk+XFxuICAgICAgICAgICAgICAgIDwva2VlcC1hbGl2ZT5cXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvbmF2PlxcblxcbiAgICA8cCBjbGFzcz0nY29udGVudCcgOmlzPVxcXCJjb25zdGFudENvbmZpZy5ST1dfVEFHXFxcIiA6c3BlbGxjaGVjaz1cXFwic3BlbGxjaGVja1xcXCIgcmVmPVxcXCJjb250ZW50XFxcIiBpZD1cXFwiZWRpdG9yLWNvbnRlbnRcXFwiIDpzdHlsZT1cXFwiY29udGVudFN0eWxlXFxcIiBkYXRhLWVkaXRvcj1cXFwiY29udGVudFxcXCJcXG4gICAgICAgICBjb250ZW50ZWRpdGFibGU9XFxcInBsYWludGV4dC1vbmx5XFxcIiB2LWRyYWctcGljPVxcXCJoYW5kbGVEcmFnUGljXFxcIj5cXG4gICAgPC9wPlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VkaXRvci9lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIGRpcmVjdGl2ZSBkcmFnIGFuZCBkcm9wIHBpY1xuICoqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGxldCBlZGl0b3IgPSB2bm9kZS5jb250ZXh0XG4gICAgbGV0IG9uRHJhZ092ZXIgPSBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICB0cnkge1xuICAgICAgICBzZWxlY3Rpb24uY29sbGFwc2UoZS50YXJnZXQsIDEpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5jb2xsYXBzZShlLnRhcmdldCwgMClcbiAgICAgIH1cbiAgICAgIGVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIGVkaXRvci5tb2R1bGVJbnNwZWN0KClcbiAgICB9XG4gICAgbGV0IG9uRHJhZ0xlYXZlID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBsZXQgb25Ecm9wID0gZSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIGlmIChlLmRhdGFUcmFuc2ZlciAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIGxldCBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBmaWxlcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICBsZXQgY3VyRmlsZSA9IGZpbGVzW2ldXG4gICAgICAgICAgaWYgKGN1ckZpbGUuc2l6ZSAmJiBjdXJGaWxlLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICAgICAgICAgIGJpbmRpbmcudmFsdWUoY3VyRmlsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBvbkRyYWdFbnRlciwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyLCBmYWxzZSlcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBvbkRyYWdMZWF2ZSwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG5cbiAgICBlbC5fX2RyYWdPdmVySGFuZGxlciA9IG9uRHJhZ092ZXJcbiAgICBlbC5fX2RyYWdMZWF2ZUhhbmRsZXIgPSBvbkRyYWdMZWF2ZVxuICAgIGVsLl9fZHJvcEhhbmRsZXIgPSBvbkRyb3BcbiAgfSxcbiAgdW5iaW5kIChlbCwgYmluZGluZykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZWwuX19kcmFnT3ZlckhhbmRsZXIpXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZWwuX19kcmFnTGVhdmVIYW5kbGVyKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlbC5fX2Ryb3BIYW5kbGVyKVxuICAgIGRlbGV0ZSBlbC5fX2RyYWdPdmVySGFuZGxlclxuICAgIGRlbGV0ZSBlbC5fX2RyYWdMZWF2ZUhhbmRsZXJcbiAgICBkZWxldGUgZWwuX19kcm9wSGFuZGxlclxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yL2RyYWctcGljLmpzIiwiLypcbiAqIGxvYWQgcnVsZSBrZXl3b3JkcyBvZiBzdHlsZSBpbnNwZWN0XG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJNb2R1bGUsIG1vZHVsZXMpIHtcbiAgbGV0IHJlc3VsdCA9IFtdXG4gIGxldCBjdXJFeGNsdWRlID0gY3VyTW9kdWxlLmV4Y2x1ZGVcbiAgaWYgKEFycmF5LmlzQXJyYXkoY3VyRXhjbHVkZSkpIHJldHVybiBjdXJFeGNsdWRlXG4gIGlmICh0eXBlb2YgY3VyRXhjbHVkZSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgbW9kdWxlTmFtZUxpc3QgPSBbXVxuICAgIG1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgIGlmIChtLm5hbWUpIHtcbiAgICAgICAgbW9kdWxlTmFtZUxpc3QucHVzaChtLm5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICBtb2R1bGVOYW1lTGlzdCA9IEFycmF5LmZyb20obmV3IFNldChtb2R1bGVOYW1lTGlzdCkpXG4gICAgc3dpdGNoIChjdXJFeGNsdWRlKSB7XG4gICAgICAvLyBleGNsdWRlIGFsbCBtb2R1bGVzXG4gICAgICBjYXNlICdBTEwnOlxuICAgICAgICByZXN1bHQgPSBtb2R1bGVOYW1lTGlzdFxuICAgICAgICBicmVha1xuICAgICAgLy8gZXhjbHVkZSBhbGwgbW9kdWxlcyBidXQgY3VycmVudCBtb2R1bGVcbiAgICAgIGNhc2UgJ0FMTF9CVVRfTVlTRUxGJzpcbiAgICAgICAgcmVzdWx0ID0gbW9kdWxlTmFtZUxpc3RcbiAgICAgICAgcmVzdWx0LnNwbGljZShyZXN1bHQuaW5kZXhPZihjdXJNb2R1bGUubmFtZSksIDEpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYWxpZ246ICflr7npvZDmlrnlvI8nLFxuICAgIGltYWdlOiAn5Zu+54mHJyxcbiAgICBsaXN0OiAn5YiX6KGoJyxcbiAgICBsaW5rOiAn6ZO+5o6lJyxcbiAgICB1bmxpbms6ICfljrvpmaTpk77mjqUnLFxuICAgIHRhYmxlOiAn6KGo5qC8JyxcbiAgICBmb250OiAn5paH5a2XJyxcbiAgICAnZnVsbCBzY3JlZW4nOiAn5YWo5bGPJyxcbiAgICB0ZXh0OiAn5o6S54mIJyxcbiAgICBlcmFzZXI6ICfmoLzlvI/muIXpmaQnLFxuICAgIGluZm86ICflhbPkuo4nLFxuICAgIGNvbG9yOiAn6aKc6ImyJyxcbiAgICAncGxlYXNlIGVudGVyIGEgdXJsJzogJ+ivt+i+k+WFpeWcsOWdgCcsXG4gICAgJ2NyZWF0ZSBsaW5rJzogJ+WIm+W7uumTvuaOpScsXG4gICAgYm9sZDogJ+WKoOeylycsXG4gICAgaXRhbGljOiAn5YC+5pacJyxcbiAgICB1bmRlcmxpbmU6ICfkuIvliJLnur8nLFxuICAgICdzdHJpa2UgdGhyb3VnaCc6ICfliKDpmaTnur8nLFxuICAgIHN1YnNjcmlwdDogJ+S4iuaghycsXG4gICAgc3VwZXJzY3JpcHQ6ICfkuIvmoIcnLFxuICAgIGhlYWRpbmc6ICfmoIfpopgnLFxuICAgICdmb250IG5hbWUnOiAn5a2X5L2TJyxcbiAgICAnZm9udCBzaXplJzogJ+aWh+Wtl+Wkp+WwjycsXG4gICAgJ2xlZnQganVzdGlmeSc6ICflt6blr7npvZAnLFxuICAgICdjZW50ZXIganVzdGlmeSc6ICflsYXkuK0nLFxuICAgICdyaWdodCBqdXN0aWZ5JzogJ+WPs+Wvuem9kCcsXG4gICAgJ29yZGVyZWQgbGlzdCc6ICfmnInluo/liJfooagnLFxuICAgICd1bm9yZGVyZWQgbGlzdCc6ICfml6Dluo/liJfooagnLFxuICAgICdmb3JlIGNvbG9yJzogJ+WJjeaZr+iJsicsXG4gICAgJ2JhY2tncm91bmQgY29sb3InOiAn6IOM5pmv6ImyJyxcbiAgICAncm93IGNvdW50JzogJ+ihjOaVsCcsXG4gICAgJ2NvbHVtbiBjb3VudCc6ICfliJfmlbAnLFxuICAgIHNhdmU6ICfnoa7lrponLFxuICAgIHVwbG9hZDogJ+S4iuS8oCcsXG4gICAgcHJvZ3Jlc3M6ICfov5vluqYnLFxuICAgIHVua25vd246ICfmnKrnn6UnLFxuICAgICdwbGVhc2Ugd2FpdCc6ICfor7fnqI3nrYknLFxuICAgIGVycm9yOiAn6ZSZ6K+vJyxcbiAgICBhYm9ydDogJ+S4reaWrScsXG4gICAgcmVzZXQ6ICfph43nva4nLFxuICAgIGhyOiAn5YiG6ZqU57q/JyxcbiAgICB1bmRvOiAn5pKk5raIJyxcbiAgICAnbGluZSBoZWlnaHQnOiAn6KGM6auYJyxcbiAgICAnZXhjZWVkIHNpemUgbGltaXQnOiAn6LaF5Ye65aSn5bCP6ZmQ5Yi2J1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pMThuL3poLWNuLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsaWduOiAnYWxpZ24nLFxuICAgIGltYWdlOiAnaW1hZ2UnLFxuICAgIGxpc3Q6ICdsaXN0JyxcbiAgICBsaW5rOiAnbGluaycsXG4gICAgdW5saW5rOiAndW5saW5rJyxcbiAgICB0YWJsZTogJ3RhYmxlJyxcbiAgICBmb250OiAnZm9udCcsXG4gICAgJ2Z1bGwgc2NyZWVuJzogJ2Z1bGwgc2NyZWVuJyxcbiAgICB0ZXh0OiAndGV4dCcsXG4gICAgZXJhc2VyOiAncmVtb3ZlIGZvcm1hdCcsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgICdwbGVhc2UgZW50ZXIgYSB1cmwnOiAncGxlYXNlIGVudGVyIGEgdXJsJyxcbiAgICAnY3JlYXRlIGxpbmsnOiAnY3JlYXRlIGxpbmsnLFxuICAgIGJvbGQ6ICdib2xkJyxcbiAgICBpdGFsaWM6ICdpdGFsaWMnLFxuICAgIHVuZGVybGluZTogJ3VuZGVybGluZScsXG4gICAgJ3N0cmlrZSB0aHJvdWdoJzogJ3N0cmlrZSB0aHJvdWdoJyxcbiAgICBzdWJzY3JpcHQ6ICdzdWJzY3JpcHQnLFxuICAgIHN1cGVyc2NyaXB0OiAnc3VwZXJzY3JpcHQnLFxuICAgIGhlYWRpbmc6ICdoZWFkaW5nJyxcbiAgICAnZm9udCBuYW1lJzogJ2ZvbnQgbmFtZScsXG4gICAgJ2ZvbnQgc2l6ZSc6ICdmb250IHNpemUnLFxuICAgICdsZWZ0IGp1c3RpZnknOiAnbGVmdCBqdXN0aWZ5JyxcbiAgICAnY2VudGVyIGp1c3RpZnknOiAnY2VudGVyIGp1c3RpZnknLFxuICAgICdyaWdodCBqdXN0aWZ5JzogJ3JpZ2h0IGp1c3RpZnknLFxuICAgICdvcmRlcmVkIGxpc3QnOiAnb3JkZXJlZCBsaXN0JyxcbiAgICAndW5vcmRlcmVkIGxpc3QnOiAndW5vcmRlcmVkIGxpc3QnLFxuICAgICdmb3JlIGNvbG9yJzogJ2ZvcmUgY29sb3InLFxuICAgICdiYWNrZ3JvdW5kIGNvbG9yJzogJ2JhY2tncm91bmQgY29sb3InLFxuICAgICdyb3cgY291bnQnOiAncm93IGNvdW50JyxcbiAgICAnY29sdW1uIGNvdW50JzogJ2NvbHVtbiBjb3VudCcsXG4gICAgc2F2ZTogJ3NhdmUnLFxuICAgIHVwbG9hZDogJ3VwbG9hZCcsXG4gICAgcHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxuICAgICdwbGVhc2Ugd2FpdCc6ICdwbGVhc2Ugd2FpdCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gICAgYWJvcnQ6ICdhYm9ydCcsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgaHI6ICdob3Jpem9udGFsIHJ1bGUnLFxuICAgIHVuZG86ICd1bmRvJyxcbiAgICAnbGluZSBoZWlnaHQnOiAnbGluZSBoZWlnaHQnLFxuICAgICdleGNlZWQgc2l6ZSBsaW1pdCc6ICdleGNlZWQgc2l6ZSBsaW1pdCdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaTE4bi9lbi11cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=