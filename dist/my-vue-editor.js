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
/******/ 	var hotCurrentHash = "8ccff160a33fc51f9143"; // eslint-disable-line no-unused-vars
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4Y2NmZjE2MGEzM2ZjNTFmOTE0MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9zdHlsZS5zdHlsIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9scnovZGlzdC9scnouYWxsLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9hc3Npc3QtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BvbHlmaWxsLWllLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsPzQ0M2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mdWxsLXNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9sZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pdGFsaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdW5kZXJsaW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3RvZG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcXVvdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL291dGRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluZXRocm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaWNvdXJ0LXRvZG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb3JlLWNvbG9yL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3Ivc3R5bGUuc3R5bD9kZDZiIiwid2VicGFjazovLy8uL3NyYy9zaG9ydGN1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5zZXJ0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2ZvbnRTaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9wYXN0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3VuZGVybGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvc3RyaWtlVGhyb3VnaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaXRhbGljLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9ib2xkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9xdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMva2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5UmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2p1c3RpZnlMZWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5Q2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2hhbmRsZS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsPzViYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2RyYWctcGljLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vemgtY24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vZW4tdXMuanMiXSwibmFtZXMiOlsiY29tbWFuZHMiLCJhZGRTdHlsZSIsInJoIiwiYXJnIiwiZG9BZGQiLCJub2RlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInN0eWxlTmFtZSIsInRleHROb2RlcyIsImdldEFsbFRleHROb2Rlc0luUmFuZ2UiLCJsZW5ndGgiLCJyYW5nZSIsImNvbGxhcHNlZCIsImNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwicGFyZW50Tm9kZSIsImVkaXRab25lIiwibmV3Um93IiwidGFnIiwiaW5uZXJUZXh0Iiwibm9kZVZhbHVlIiwicmVwbGFjZUNoaWxkIiwic3RhcnRDb250YWluZXIiLCJlbmRDb250YWluZXIiLCJ0ZXh0Tm9kZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwidGV4dENvbnRlbnQiLCJjaGlsZE5vZGVzIiwiaXNJbmxpbmVFbGVtZW50Iiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3Vic3RyaW5nIiwiZnJvbnRQYXJ0IiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsImV4ZWNDb21tYW5kIiwiZWxlbWVudCIsInN1cnJvdW5kQ29udGVudHMiLCJwYXJlbnRCbG9jayIsImdldFBhcmVudEJsb2NrTm9kZSIsImxpbmVIZWlnaHQiLCJ2IiwicyIsImdldFNlbGVjdGlvbiIsImlubmVySFRNTCIsImhhc0NoaWxkTm9kZXMiLCJpIiwiY3VyTm9kZSIsImRlbGV0ZUNvbnRlbnRzIiwiaW5zZXJ0Tm9kZSIsImNvbGxhcHNlIiwibm9kZUxpc3QiLCJ3ZWlnaHRpbmciLCJ0ZXh0cyIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJkb0luZGVudCIsIm5vZGVOYW1lIiwiZmluZFNwZWNpYWxBbmNlc3RvciIsIlJPV19UQUciLCJpbmNsdWRlcyIsInB1c2giLCJ0eXBlIiwiY3VyTGV2ZWwiLCJob3dNYW55TmVzdEFuY2VzdG9yU2FtZVRhZyIsIk1BWF9JTkRFTlRfTEVWRUwiLCJST1dfVEFHX1VQUEVSQ0FTRSIsImN1clBlcmNlbnQiLCJJTkRFTlRfU1RZTEVfTkFNRSIsIk51bWJlciIsInJlcGxhY2UiLCJPVVRERU5UX1NUWUxFX05BTUUiLCJJTkRFTlRfV0lEVEhfUEVSQ0VOVCIsIm91dGRlbnRSZXN1bHQiLCJkb091dGRlbnQiLCJ0YXJnZXRJbmRlbnQiLCJzdGFydE5vZGUiLCJhbmNob3JOb2RlIiwicm93IiwiZ2V0Um93IiwiY3JlYXRlV3JhcHBlckZvcklubGluZSIsIm1heWJlSXNVbCIsImZpcnN0RWxlbWVudENoaWxkIiwibmV4dFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsImlzQ29sbGFwc2VkIiwiZWRpdG9yIiwibW9kdWxlc01hcCIsIm1vZHVsZUluc3BlY3RSZXN1bHQiLCJiciIsIm91dGVySFRNTCIsImluc2VydEltYWdlIiwiZm9udFNpemUiLCJkZWxldGUiLCJwYXN0ZSIsImVudGVyIiwia2V5ZG93biIsInVuZGVybGluZSIsInN0cmlrZVRocm91Z2giLCJib2xkIiwiaXRhbGljIiwianVzdGlmeUxlZnQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeVJpZ2h0IiwiYXNzaWduIiwibWl4aW4iLCJzb3VyY2UiLCJleHQiLCJrIiwiZGF0YVNyYyIsImRhdGFEZXNjIiwiaXNPYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRhIiwic2xpY2UiLCJtZXRob2RzIiwiaWQiLCJkYXRhc2V0IiwiZWRpdG9yUm93IiwiY3JlYXRlUmFuZG9tSWQiLCJzZXRBdHRyaWJ1dGUiLCJjb250ZW50ZWRpdGFibGUiLCJ3aW5kb3ciLCJpbnNlcnRBZnRlciIsIm5ld0VsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50IiwibGFzdENoaWxkIiwicHJlZmZpeCIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsImVkaXRab25lX2NhY2hlIiwicXVlcnlTZWxlY3RvciIsInNldFJhbmdlQXQiLCJjaGVja0FsbCIsImNyZWF0ZVJhbmdlIiwiZW5kIiwic2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJnZXRSYW5nZSIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwiSW5zcGVjdG9yIiwibW9kdWxlTmFtZSIsInBhcmFtIiwiRXJyb3IiLCJ0YWdNYXAiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlcyIsImF0dHJpYnV0ZXMiLCJyZXN1bHQiLCJpbnNwZWN0UmVzdWx0IiwibW9kdWxlU3R5bGUiLCJjdXJWYWx1ZSIsIml0ZW0iLCJhY3RpdmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsIm1vZHVsZUF0dHIiLCJ2YWx1ZSIsIm5vZGVWYWwiLCJydW4iLCJmbiIsInJlbW92ZUR1cGxhdGUiLCJsaXN0Iiwic2FtZVN0eWxlTWFwIiwibSIsImZyb20iLCJTZXQiLCJhbSIsIm1lcmdlZFN0eWxlIiwiRWRpdG9yIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJyZXNlcnZlZE5hbWVzIiwibmFtZSIsImNvbXBvbmVudHMiLCJleHRlbmRNb2R1bGVzIiwibW9kdWxlIiwiY3VyQ29uZmlnIiwibW9kdWxlQ29uZmlnIiwiZm9yYmlkZGVuIiwiaW5zcGVjdCIsImluc3BlY3RvciIsImFkZCIsImJpbmQiLCJleGNsdWRlIiwidGFiIiwicHJvcHMiLCJhY3RpdmVJdGVtIiwiU3RyaW5nIiwiQm9vbGVhbiIsInRhYk5hbWUiLCJpY29ucyIsImljb24iLCJoYXNUYWIiLCJpMThuIiwiY3VzdG9tSTE4biIsImtleSIsImxhbmd1YWdlIiwibG9jYWxlIiwic2hvcnRjdXQiLCJrZXlDb2RlIiwic3BlbGxjaGVjayIsImNvbXBvIiwiY29uc3RhbnRDb25maWciLCJWdWUiLCJjb21wb25lbnQiLCJleHBvcnRzIiwiZGVmaW5lUHJvcGVydHkiLCJzZWFyY2hFbGVtZW50IiwiZnJvbUluZGV4IiwiVHlwZUVycm9yIiwibyIsImxlbiIsIm4iLCJtYXgiLCJhYnMiLCJUZXh0IiwiY29udGFpbnMiLCJ0ZW1wbGF0ZSIsIndhdGNoIiwibWFwIiwiaW5kZXgiLCJhbGlnbk1hcCIsImNob29zZWQiLCJzZXRBbGlnbiIsIiRwYXJlbnQiLCJzYXZlQ3VycmVudFJhbmdlIiwibW9kdWxlSW5zcGVjdCIsImNoYW5nZUFsaWduIiwicHJlX2luZGV4IiwiaXNOYU4iLCJ0YXJnZXRfaW5kZXgiLCJjb25maWciLCJmb250QXR0ck1hcCIsImN1ck1vZHVsZSIsInNob3dMaXN0Iiwic2hvd0xpc3RGbiIsIiRyZWZzIiwiY2xhc3NMaXN0IiwiY2hhbmdlQXR0ciIsInNldEZvbnROYW1lIiwic2V0SGVhZGluZyIsImhlYWRpbmciLCJtb3VudGVkIiwiZGVmYXVsdCIsImhhbmRsZXIiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiY2FuVXBsb2FkU2FtZUltYWdlIiwiaW1nT2NjdXB5TmV3Um93IiwibWF4U2l6ZSIsImNvbXByZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwicGljayIsImZpbGUiLCJjbGljayIsInByb2Nlc3MiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNob3ciLCJpc0luUXVvdGUiLCJhY3RpdmVNb2R1bGVzIiwiZm9yZUNvbG9yQ29uZmlnIiwiY29sb3JzIiwiY29sb3IiLCJjaGFuZ2VDb2xvciIsIm91dGRlbnQiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiaW5kZW50IiwiY29udGVudCIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiekluZGV4IiwiYXV0b0hlaWdodCIsImRpcmVjdGl2ZXMiLCJkcmFnUGljIiwiYWxsQWN0aXZlTW9kdWxlcyIsImZ1bGxTY3JlZW4iLCJwYXJlbnRFbCIsIiRlbCIsIm5leHRFbCIsImJvZHkiLCJjb21wdXRlZCIsImNvbnRlbnRTdHlsZSIsImlubmVySGVpZ2h0IiwidG9vbGJhciIsImNsaWVudEhlaWdodCIsImdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0iLCJjbGVhckFjdGl2ZU1vZHVsZUl0ZW0iLCJoYW5kbGVEcmFnUGljIiwiZHJhZyIsImVuYWJsZUZ1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImZvY3VzIiwiYmx1ciIsImNvbW1hbmQiLCJleGVjT25seSIsInJlc3RvcmVTZWxlY3Rpb24iLCIkZW1pdCIsInN0YXJ0IiwiVEVYVF9OT0RFIiwiYWN0aXZlTW9kdWxlIiwiJG5leHRUaWNrIiwidGV4dEFmdGV0RFIiLCJ0YWdSZXN1bHQiLCJ0YWdSZXN1bHRSRCIsInN0eWxlUmVzdWx0Iiwic3R5bGVSZXN1bHRSRCIsImF0dHJpYnV0ZVJlc3VsdCIsImF0dHJpYnV0ZVJlc3VsdFJEIiwiY29uY2F0IiwiZXhjbHVkZUxpc3QiLCJleGNNb2R1bGUiLCJleGMiLCJjdXJNb2R1bGVBY3RpdmVJdGVtIiwiY3JlYXRlZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbW9uIiwic2Nyb2xsSW50b1ZpZXciLCJ0b3VjaEhhbmRsZXIiLCJiZWZvcmUiLCJpc0VtcHR5Tm9kZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0VG9Sb3ciLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInVwZGF0ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3llZCIsIm90aGVyTm9kZSIsIlJhbmdlSGFuZGxlciIsIlJhbmdlIiwiYmVmb3JlTGlzdCIsImV4aXN0Q29tbWFuZCIsImN1c3RvbUNvbW1hbmQiLCJhZnRlckxpc3QiLCJhY3RpdmVzIiwicmV0dXJuRGF0YSIsIm9yaWdpbiIsIkZpbGUiLCJoYW5kbGVGaWxlIiwiZmllbGROYW1lIiwidGhlbiIsInJzdCIsInNpemUiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwiaW1nSWQiLCJpbnNlcnRCYXNlNjQiLCJiYXNlNjQiLCJjYXRjaCIsImVyciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVhZEFzRGF0YVVSTCIsImRvbSIsImN1clJvdyIsImZvcmNlR2V0Um93Iiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlcGxhY2VTcmNBZnRlclVwbG9hZEZpbmlzaCIsInJlcGxhY2VJbWciLCJkZWxldGVJbWdXaGVuVXBsb2FkRmFpbCIsImRlbGV0ZUltZyIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImJhc2VOb2RlIiwiaW5zZXJ0SFRNTCIsImZvY3VzTm9kZSIsImFuY2hvck9mZnNldCIsImZvY3VzT2Zmc2V0IiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJnZXREYXRhIiwib3JpZ2luYWxFdmVudCIsImNyZWF0ZVRleHRSYW5nZSIsInRleHRSYW5nZSIsInNlbCIsInRlbXBFbCIsIm1vdmVUb0VsZW1lbnRUZXh0Iiwic2VsZWN0IiwidWxPck9sIiwiYWZ0ZXJFbnRlciIsInNldFRpbWVvdXQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJub2RlQ3RuIiwiZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUiLCJleGlzdFN0eWxlIiwiZmluZEV4aXN0VGFnVGlsbEJvcmRlciIsImZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZSIsIm5ld0RPTSIsImNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdCIsImRlZXBlc3ROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWVwZXN0SWQiLCJuZXdUZXh0IiwicSIsInF1b3RlIiwiZ2V0RGVzY2VuZGFudFRleHROb2RlcyIsInF1b3RlUm93cyIsInJvd3MiLCJjaGlsZHJlbiIsInFyIiwiY29udGFpbmVyIiwicXVvdGVCbG9jayIsImFuY2hvclJvdyIsImNsb25lTm9kZSIsImN1clF1b3RlIiwibGFzdEVsZW1lbnRDaGlsZCIsImN0biIsInByZVJvdyIsImdldFByZXZpb3VzUm93IiwibGFzdEVsZSIsInBvcCIsImlucHV0IiwidCIsImFmdGVyV2hpY2giLCJpc0VtcHR5Um93IiwidGFyZ2V0SW5kZXgiLCJzdGFydEluZGV4IiwiY2hpbGQiLCJ1bmRlZmluZWQiLCJjb2xsYXBzZUF0Um93IiwidG9kb0lkIiwiY2hlY2tib3hzIiwicXVlcnlTZWxlY3RvckFsbCIsImMiLCJidG4iLCJjdG5DaGVja2VkTG9naWMiLCJjaGVja2VkIiwidGV4dERlY29yYXRpb24iLCJvbmNoYW5nZSIsIm9uaW5wdXQiLCJvbmtleWRvd24iLCJkZWxldGVUb2RvIiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0QmxvY2siLCJjdXJSYW5nZSIsImFmdGVyRGVsZXRlIiwiZmlyc3RSb3ciLCJmaXN0RWxlbWVudENoaWxkIiwiZWRpdG9yVG9kbyIsImRlbGV0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwiY2xlYXJJbnRlcnZhbCIsImdldFJvd3MiLCJtZXJnZUFycmF5Iiwic291cmNlQXJyIiwiZXh0QXJyIiwiZWwiLCJhbmNlc3RvciIsImdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJlbmRFbCIsImVuZEluZGV4IiwiZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJzdGFydEVsIiwiYmxvY2tOb2RlTmFtZXMiLCJpbmxpbmVOb2RlTmFtZXMiLCJpc0lubGluZU9yVGV4dCIsImlzSW5saW5lIiwiaXNUZXh0IiwiZ2V0QWxsU3BlY2lmeU5vZGUiLCJzZWFyY2hPcGluaW9uIiwidGFyZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJ0YWdzIiwib3BpbmlvbktleXMiLCJwYXNzIiwiYSIsIm9waW5pb24iLCJhbmNlc3Rvck5vZGVOYW1lIiwibnVtIiwic2VsZWN0b3IiLCJmaXJzdE9uZSIsImJvcmRlciIsImNvbnRlbnRab25lIiwiYW5jZXN0b3JzIiwiaXNUYXJnZXQiLCJnZXROb2RlTnVtIiwicm9vdEVsIiwiaXNSb3ciLCJ3cmFwcGVyTm9kZU5hbWUiLCJzZXBlcmF0ZUJ5QnIiLCJlbGVtZW50cyIsInNlYXJjaExlZnQiLCJzZWFyY2hSaWdodCIsImVsZSIsImxhc3RPbmUiLCJoYW5kbGVyQnIiLCJwcmV2aW91c1NpYmxpbmciLCJkaXJlY3Rpb24iLCJuZXh0RGlyIiwidGFyZ2V0Tm9kZSIsInVuc2hpZnQiLCJyb3dJbmRleCIsInRhZ05hbWVsaXN0IiwiZGVlcGVzdCIsImJpbmRpbmciLCJ2bm9kZSIsImNvbnRleHQiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJkYXRhVHJhbnNmZXIiLCJjb25zb2xlIiwibG9nIiwiY3VyRmlsZSIsIl9fZHJhZ092ZXJIYW5kbGVyIiwiX19kcmFnTGVhdmVIYW5kbGVyIiwiX19kcm9wSGFuZGxlciIsInVuYmluZCIsImN1ckV4Y2x1ZGUiLCJtb2R1bGVOYW1lTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJhbGlnbiIsImltYWdlIiwibGluayIsInVubGluayIsInRhYmxlIiwiZm9udCIsImVyYXNlciIsImluZm8iLCJzdWJzY3JpcHQiLCJzdXBlcnNjcmlwdCIsInNhdmUiLCJ1cGxvYWQiLCJwcm9ncmVzcyIsInVua25vd24iLCJlcnJvciIsImFib3J0IiwicmVzZXQiLCJociIsInVuZG8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUEyRDtBQUMzRDtBQUNBO0FBQ0EsV0FBRzs7QUFFSCxvREFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7Ozs7QUFJQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFDQUE2QjtBQUM3Qix5Q0FBaUM7O0FBRWpDLCtDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBc0M7QUFDdEM7QUFDQTtBQUNBLHFDQUE2QjtBQUM3QixxQ0FBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUEsNERBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtB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O0FBc0JYLGlCQUFhLFdBdEJGO0FBdUJYLGlCQUFhLFdBdkJGO0FBd0JYLG9CQUFnQixjQXhCTDtBQXlCWCxzQkFBa0IsZ0JBekJQO0FBMEJYLHFCQUFpQixlQTFCTjtBQTJCWCxvQkFBZ0IsY0EzQkw7QUE0Qlgsc0JBQWtCLGdCQTVCUDtBQTZCWCxrQkFBYyxZQTdCSDtBQThCWCx3QkFBb0Isa0JBOUJUO0FBK0JYLGlCQUFhLFdBL0JGO0FBZ0NYLG9CQUFnQixjQWhDTDtBQWlDWHdTLFVBQU0sTUFqQ0s7QUFrQ1hDLFlBQVEsUUFsQ0c7QUFtQ1hDLGNBQVUsVUFuQ0M7QUFvQ1hDLGFBQVMsU0FwQ0U7QUFxQ1gsbUJBQWUsYUFyQ0o7QUFzQ1hDLFdBQU8sT0F0Q0k7QUF1Q1hDLFdBQU8sT0F2Q0k7QUF3Q1hDLFdBQU8sT0F4Q0k7QUF5Q1hDLFFBQUksaUJBekNPO0FBMENYQyxVQUFNLE1BMUNLO0FBMkNYLG1CQUFlLGFBM0NKO0FBNENYLHlCQUFxQjtBQTVDVixDIiwiZmlsZSI6Im15LXZ1ZS1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm15VnVlRWRpdG9yXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdID0gXHJcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHRcdGlmKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdH0gO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHQ7XHJcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XHJcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcclxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcclxuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZSkge1xyXG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHRcclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI4Y2NmZjE2MGEzM2ZjNTFmOTE0M1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xyXG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcclxuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdGlmKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XHJcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xyXG4gXHRcdFx0aWYobWUuaG90LmFjdGl2ZSkge1xyXG4gXHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XHJcbiBcdFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpIDwgMClcclxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpIDwgMClcclxuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVxdWVzdCArIFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArIG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xyXG4gXHRcdH07XHJcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcclxuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKVxyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xyXG4gXHRcdFx0XHR0aHJvdyBlcnI7XHJcbiBcdFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XHJcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xyXG4gXHRcdFx0XHRcdGlmKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGZuO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBob3QgPSB7XHJcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXHJcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXHJcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcclxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXHJcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXHJcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXHJcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aWYoIWwpIHJldHVybiBob3RTdGF0dXM7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXHJcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cclxuIFx0XHR9O1xyXG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcclxuIFx0XHRyZXR1cm4gaG90O1xyXG4gXHR9XHJcbiBcdFxyXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcclxuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xyXG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90RGVmZXJyZWQ7XHJcbiBcdFxyXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cclxuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcclxuIFx0XHR2YXIgaXNOdW1iZXIgPSAoK2lkKSArIFwiXCIgPT09IGlkO1xyXG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xyXG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcclxuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcclxuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxyXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xyXG4gXHRcdFx0dmFyIGNodW5rSWQgPSAwO1xyXG4gXHRcdFx0eyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXHJcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXHJcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xyXG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcclxuIFx0XHRpZighZGVmZXJyZWQpIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xyXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXHJcbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XHJcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XHJcbiBcdFx0XHR9KS50aGVuKFxyXG4gXHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwicmVhZHlcIikgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xyXG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgY2I7XHJcbiBcdFx0dmFyIGk7XHJcbiBcdFx0dmFyIGo7XHJcbiBcdFx0dmFyIG1vZHVsZTtcclxuIFx0XHR2YXIgbW9kdWxlSWQ7XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFxyXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XHJcbiBcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXHJcbiBcdFx0XHRcdFx0aWQ6IGlkXHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XHJcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX21haW4pIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZighcGFyZW50KSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxyXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcclxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xyXG4gXHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiKTtcclxuIFx0XHR9O1xyXG4gXHRcclxuIFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQ7XHJcbiBcdFx0XHRcdGlmKGhvdFVwZGF0ZVtpZF0pIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XHJcbiBcdFx0XHRcdGlmKHJlc3VsdC5jaGFpbikge1xyXG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRzd2l0Y2gocmVzdWx0LnR5cGUpIHtcclxuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIiBpbiBcIiArIHJlc3VsdC5wYXJlbnRJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vblVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25BY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRpc3Bvc2VkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRkZWZhdWx0OlxyXG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihhYm9ydEVycm9yKSB7XHJcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvQXBwbHkpIHtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHRcdFx0XHRmb3IobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcclxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9EaXNwb3NlKSB7XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XHJcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXHJcbiBcdFx0XHRcdH0pO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcclxuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcclxuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH0pO1xyXG4gXHRcclxuIFx0XHR2YXIgaWR4O1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdGlmKCFtb2R1bGUpIGNvbnRpbnVlO1xyXG4gXHRcclxuIFx0XHRcdHZhciBkYXRhID0ge307XHJcbiBcdFxyXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXHJcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xyXG4gXHRcdFx0XHRjYihkYXRhKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcclxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXHJcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIHtcclxuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxyXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xyXG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xyXG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0XHRpZihpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xyXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xyXG4gXHRcdFx0XHRcdFx0aWYoY2IpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XHJcbiBcdFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xyXG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZXJyMikge1xyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yZ2luYWxFcnJvcjogZXJyLCAvLyBUT0RPIHJlbW92ZSBpbiB3ZWJwYWNrIDRcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjI7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXHJcbiBcdFx0aWYoZXJyb3IpIHtcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XHJcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDEyKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGNjZmYxNjBhMzNmYzUxZjkxNDMiLCJpbXBvcnQgaW5zZXJ0SW1hZ2UgZnJvbSAnLi9pbnNlcnRJbWFnZSdcbmltcG9ydCBmb250U2l6ZSBmcm9tICcuL2ZvbnRTaXplJ1xuaW1wb3J0IHBhc3RlIGZyb20gJy4vcGFzdGUnXG5pbXBvcnQgZW50ZXIgZnJvbSAnLi9lbnRlcidcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgc3RyaWtlVGhyb3VnaCBmcm9tICcuL3N0cmlrZVRocm91Z2gnXG5pbXBvcnQgaXRhbGljIGZyb20gJy4vaXRhbGljJ1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IHF1b3RlIGZyb20gJy4vcXVvdGUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQga2V5ZG93biBmcm9tICcuL2tleWRvd24nXG5pbXBvcnQgZGVsZXRlTW9kdWxlIGZyb20gJy4vZGVsZXRlJ1xuaW1wb3J0IGp1c3RpZnlSaWdodCBmcm9tICcuL2p1c3RpZnlSaWdodCdcbmltcG9ydCBqdXN0aWZ5TGVmdCBmcm9tICcuL2p1c3RpZnlMZWZ0J1xuaW1wb3J0IGp1c3RpZnlDZW50ZXIgZnJvbSAnLi9qdXN0aWZ5Q2VudGVyJ1xuaW1wb3J0IHtpc09ian0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IGNvbW1hbmRzID0ge1xuICAvKlxuICAgKiBhZGQgYSBzdHlsZSBhdHRyaWJ1dGUgaW4gcmFuZ2UoaGF2ZSBidWcpXG4gICAqIEBwYXJhbSB7b2JqfSBhcmcgaW5jbHVkZVxuICAgKiAgICAgIGtleTogc3R5bGUgbmFtZVxuICAgKiAgICAgIHZhbHVlOiBzdHlsZSB2YWx1ZVxuICAgKiovXG4gIGFkZFN0eWxlIChyaCwgYXJnKSB7XG4gICAgZnVuY3Rpb24gZG9BZGQobm9kZSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKHN0eWxlTmFtZSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGVbc3R5bGVOYW1lXSA9IGFyZ1tzdHlsZU5hbWVdXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghaXNPYmooYXJnKSkgcmV0dXJuXG4gICAgY29uc3QgdGV4dE5vZGVzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgaWYgKCF0ZXh0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgZG9BZGQobm9kZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmIHRleHROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBub2RlID0gdGV4dE5vZGVzWzBdLnBhcmVudE5vZGVcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7dGFnOiAncCd9KVxuICAgICAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Tm9kZXNbMF0ubm9kZVZhbHVlXG4gICAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0Tm9kZXNbMF0pXG4gICAgICAgICAgZG9BZGQobmV3Um93KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRvQWRkKG5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMSAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgICAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLmVuZENvbnRhaW5lcikge1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSB0ZXh0Tm9kZXNbMF1cbiAgICAgIGlmIChyaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMFxuICAgICAgICAmJiByaC5yYW5nZS5lbmRPZmZzZXQgPT09IHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhcbiAgICAgICAgcmgucmFuZ2Uuc3RhcnRPZmZzZXQsIHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIGRvQWRkKHNwYW4pXG4gICAgICBjb25zdCBmcm9udFBhcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KSlcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyb250UGFydCwgdGV4dE5vZGUpXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHNwYW4sIDApXG4gICAgICByaC5yYW5nZS5zZXRFbmQoc3BhbiwgMSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgICBpZiAocmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKFxuICAgICAgICAgIDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKHJoLnJhbmdlLmVuZE9mZnNldCA9PT0gdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhyaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICByaC5yYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgZG9BZGQoc3BhbilcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICB9KVxuICAgIHJldHVyblxuICB9LFxuICAnZm9ybWF0QmxvY2snIChyaCwgYXJnKSB7XG4gICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gaGFja1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZylcbiAgICByaC5yYW5nZS5zdXJyb3VuZENvbnRlbnRzKGVsZW1lbnQpXG4gICAgcmV0dXJuXG4gIH0sXG4gICdsaW5lSGVpZ2h0JyAocmgsIGFyZykge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50QmxvY2sgPSByaC5nZXRQYXJlbnRCbG9ja05vZGUodGV4dE5vZGUpXG4gICAgICBpZiAocGFyZW50QmxvY2spIHtcbiAgICAgICAgcGFyZW50QmxvY2suc3R5bGUubGluZUhlaWdodCA9IGFyZ1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbnNlcnRIVE1MJyAocmgsIGFyZykge1xuICAgIGlmIChkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29tbWFuZHNbJ2ZvcmNlSW5zZXJ0SFRNTCddKHJoLCBhcmcpXG4gIH0sXG4gIC8qXG4gICAqIGluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyByb3cncyBjaGlsZFxuICAgKiBmb3JjZUluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyBhbmNob3JOb2RlIG9mIHJhbmdlIFxuICAgKiovXG4gICdmb3JjZUluc2VydEhUTUwnIChyaCwgYXJnKSB7XG4gICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICB2LmlubmVySFRNTCA9IGFyZ1xuICAgIGlmICh2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB2LmNoaWxkTm9kZXNbaV1cbiAgICAgICAgcmgucmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgICByaC5yYW5nZS5pbnNlcnROb2RlKGN1ck5vZGUpXG4gICAgICAgIHMuY29sbGFwc2UoY3VyTm9kZSwgMSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbmRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAvLyBjYW5jZWwgdG9kbyBpbmRlbnRcbiAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZG9JbmRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gd2VpZ2h0aW5nKHRleHQpIHtcbiAgICAgIGxldCBub2RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCAnbGknKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICBpZiAobm9kZSAmJiAhbm9kZUxpc3QuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvSW5kZW50KHR5cGUsIG5vZGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMSSc6XG4gICAgICAgICAgbGV0IGN1ckxldmVsID0gcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ1VMJykgfHwgcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ09MJylcbiAgICAgICAgICBpZiAoY3VyTGV2ZWwgPj0gY29uc3RhbnQuTUFYX0lOREVOVF9MRVZFTCkgYnJlYWtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5kZW50JywgZmFsc2UsIGFyZylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFOlxuICAgICAgICAgIGxldCBjdXJQZXJjZW50ID0gbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gfHwgJzAnXG4gICAgICAgICAgY3VyUGVyY2VudCA9IE51bWJlcihjdXJQZXJjZW50LnJlcGxhY2UoJyUnLCAnJykpXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuT1VUREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgaWYgKGN1clBlcmNlbnQgLyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCA+PSBjb25zdGFudC5NQVhfSU5ERU5UX0xFVkVMKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCArICclJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ291dGRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBvdXRkZW50UmVzdWx0XG4gICAgbm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG91dGRlbnRSZXN1bHQgPSBkb091dGRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuICAgIHJldHVybiBvdXRkZW50UmVzdWx0XG5cbiAgICBmdW5jdGlvbiB3ZWlnaHRpbmcodGV4dCkge1xuICAgICAgbGV0IG5vZGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsICdsaScpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgY29uc3RhbnQuUk9XX1RBRylcbiAgICAgIGlmIChub2RlICYmICFub2RlTGlzdC5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9PdXRkZW50KHR5cGUsIG5vZGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMSSc6XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ291dGRlbnQnLCBmYWxzZSwgYXJnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgY29uc3RhbnQuUk9XX1RBR19VUFBFUkNBU0U6XG4gICAgICAgICAgbGV0IGN1clBlcmNlbnQgPSBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSB8fCAnMCdcbiAgICAgICAgICBjdXJQZXJjZW50ID0gTnVtYmVyKGN1clBlcmNlbnQucmVwbGFjZSgnJScsICcnKSlcbiAgICAgICAgICBpZiAoY3VyUGVyY2VudCA9PT0gMCkgcmV0dXJuICdOT19ORUVEX09VVERFTlQnXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuT1VUREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgbGV0IHRhcmdldEluZGVudCA9IGN1clBlcmNlbnQgLSBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVFxuICAgICAgICAgIGlmICh0YXJnZXRJbmRlbnQgPCAwKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gdGFyZ2V0SW5kZW50ICsgJyUnXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2luc2VydFVub3JkZXJlZExpc3QnIChyaCwgYXJnKSB7XG4gICAgLy8gZG8gbm90IGluc2VydCB1bCBpbnRvIGEgcm93XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbClcbiAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3coc3RhcnROb2RlKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcblxuICAgIC8vIHN0YXJ0Tm9kZSBpcyBlZGl0IHpvbmVcbiAgICBpZiAoIXJvdykgcmV0dXJuXG5cbiAgICByb3cgPSByaC5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHJvdywgY29uc3RhbnQuUk9XX1RBRylcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGxldCB1bCBiZSBhIHJvd1xuICAgICAgbGV0IG1heWJlSXNVbCA9IHJvdy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgaWYgKG1heWJlSXNVbCAmJiBtYXliZUlzVWwubm9kZU5hbWUgPT09ICdVTCcgJiYgcm93Lm5vZGVOYW1lICE9PSAnVUwnKSB7XG4gICAgICAgIHJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtYXliZUlzVWwsIHJvdylcbiAgICAgICAgcm93ID0gbWF5YmVJc1VsXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBiclxuICAgICAgaWYgKHJvdy5uZXh0U2libGluZyAmJiByb3cubmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgcm93Lm5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93Lm5leHRTaWJsaW5nKVxuICAgICAgfVxuXG4gICAgICAvLyBzcGVjaWFsIHRyZWF0bWVudCBmb3IgdWw+bGksIHRvIGxldCBtb2R1bGUgaW5zcGVjdCBydW5cbiAgICAgIC8vIGlmIHVsIGFuZCBvbCBpcyBiaW5kIGludG8gYSBtb2R1bGUncyB0YWIsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZVxuICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgIXJoLmVkaXRvci5tb2R1bGVzTWFwWyd1bCddLm1vZHVsZUluc3BlY3RSZXN1bHQpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgJyYjODIwMzsnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgICBpZiAoc3RhcnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgIHJvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCByb3cub3V0ZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2luc2VydE9yZGVyZWRMaXN0JyAocmgsIGFyZykge1xuICAgIC8vIGRvIG5vdCBpbnNlcnQgdWwgaW50byBhIHJvd1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3coc3RhcnROb2RlKVxuXG4gICAgLy8gc3RhcnROb2RlIGlzIGVkaXQgem9uZVxuICAgIGlmICghcm93KSByZXR1cm5cblxuICAgIHJvdyA9IHJoLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUocm93LCBjb25zdGFudC5ST1dfVEFHKVxuXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gbGV0IHVsIGJlIGEgcm93XG4gICAgICBsZXQgbWF5YmVJc1VsID0gcm93LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBpZiAobWF5YmVJc1VsICYmIG1heWJlSXNVbC5ub2RlTmFtZSA9PT0gJ09MJyAmJiByb3cubm9kZU5hbWUgIT09ICdPTCcpIHtcbiAgICAgICAgcm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1heWJlSXNVbCwgcm93KVxuICAgICAgICByb3cgPSBtYXliZUlzVWxcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIGJyXG4gICAgICBpZiAocm93Lm5leHRTaWJsaW5nICYmIHJvdy5uZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICByb3cubmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cubmV4dFNpYmxpbmcpXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgdHJlYXRtZW50IGZvciB1bD5saSwgdG8gbGV0IG1vZHVsZSBpbnNwZWN0IHJ1blxuICAgICAgLy8gaWYgdWwgYW5kIG9sIGlzIGJpbmQgaW50byBhIG1vZHVsZSdzIHRhYiwgdGhpcyBzaG91bGQgYmUgY2hhbmdlXG4gICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAhcmguZWRpdG9yLm1vZHVsZXNNYXBbJ29sJ10ubW9kdWxlSW5zcGVjdFJlc3VsdCkge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCAnJiM4MjAzOycpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICAgIGlmIChzdGFydE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHJvdy5vdXRlckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jb21tYW5kcy5pbnNlcnRJbWFnZSA9IGluc2VydEltYWdlXG5jb21tYW5kcy5mb250U2l6ZSA9IGZvbnRTaXplXG5jb21tYW5kcy5kZWxldGUgPSBkZWxldGVNb2R1bGVcbmNvbW1hbmRzLnBhc3RlID0gcGFzdGVcbmNvbW1hbmRzLmVudGVyID0gZW50ZXJcbmNvbW1hbmRzLmtleWRvd24gPSBrZXlkb3duXG5jb21tYW5kcy51bmRlcmxpbmUgPSB1bmRlcmxpbmVcbmNvbW1hbmRzLnN0cmlrZVRocm91Z2ggPSBzdHJpa2VUaHJvdWdoXG5jb21tYW5kcy5ib2xkID0gYm9sZFxuY29tbWFuZHMuaXRhbGljID0gaXRhbGljXG5jb21tYW5kcy5qdXN0aWZ5TGVmdCA9IGp1c3RpZnlMZWZ0XG5jb21tYW5kcy5qdXN0aWZ5Q2VudGVyID0ganVzdGlmeUNlbnRlclxuY29tbWFuZHMuanVzdGlmeVJpZ2h0ID0ganVzdGlmeVJpZ2h0XG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCBxdW90ZSwgdG9kbylcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYX0lOREVOVF9MRVZFTDogMTAsXG4gIElOREVOVF9XSURUSF9QRVJDRU5UOiA4LFxuICBJTkRFTlRfU1RZTEVfTkFNRTogJ21hcmdpbkxlZnQnLFxuICBPVVRERU5UX1NUWUxFX05BTUU6ICdtYXJnaW5SaWdodCcsXG4gIFJPV19UQUc6ICdwJyxcbiAgUk9XX1RBR19VUFBFUkNBU0U6ICdQJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9udC10YWIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogNTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5mb250LXRhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogM3B4IDNweCAzcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLmZvbnQtdGFiLmZvcmJpZGRlbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uZm9udC10YWIgLmljb24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbGVmdDogLTFweDtcXG4gIHRvcDogMjVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biBsaSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlciEuL3NyYy9tb2R1bGVzL2ZvbnQvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9yZS1jb2xvci10YWIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5mb3JlLWNvbG9yLXRhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogM3B4IDNweCAzcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLmZvcmUtY29sb3ItdGFiLmZvcmJpZGRlbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uZm9yZS1jb2xvci10YWIgLmljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtM3B4O1xcbn1cXG4uZm9yZS1jb2xvci10YWIgLmNob29zZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTAuNnB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4uZm9yZS1jb2xvci10YWIgLmRyb3Bkb3duIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxODBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbGVmdDogLTFweDtcXG4gIHRvcDogMjVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZm9yZS1jb2xvci10YWIgLmRyb3Bkb3duIGxpIHtcXG4gIG1hcmdpbjogMnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlciEuL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3Ivc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHNoYWRvdyBjbG9uZVxuICogQHBhcmFtIHNvdXJjZSAgICBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gZXh0ICAgICAgIGV4dGVuZGVkIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgbWl4aW4gPSAoc291cmNlID0ge30sIGV4dCA9IHt9KSA9PiB7XG4gICAgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIC8vIGZvciBkYXRhIGZ1bmN0aW9uXG4gICAgICAgIGlmIChrID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTcmMgPSBzb3VyY2Vba11cbiAgICAgICAgICAgIGNvbnN0IGRhdGFEZXNjID0gZXh0W2tdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFEZXNjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhU3JjICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtrXSA9IGRhdGFEZXNjXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW2tdID0gKCkgPT4gbWl4aW4oZGF0YVNyYygpLCBkYXRhRGVzYygpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZVtrXSA9IGV4dFtrXVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc291cmNlXG59XG5cbmV4cG9ydCBjb25zdCBpc09iaiA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnNsaWNlKC03LCAtMSkgPT09ICdPYmplY3QnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbmRleC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmFiYnIsXFxuYWRkcmVzcyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnNhbXAsXFxuc21hbGwsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudmFyLFxcbmIsXFxuaSxcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMTtcXG59XFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5hIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuaW5zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZGVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5hYmJyW3RpdGxlXSxcXG5kZm5bdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDtcXG4gIGN1cnNvcjogaGVscDtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5ociB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5teS12dWUtZWRpdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5teS12dWUtZWRpdG9yIGltZyB7XFxuICBtYXgtd2lkdGg6IDk4JTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLnRhYiB7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC50YWIgLmljb24ge1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTJweCBBcmlhbCwgSGVsdmV0aWNhLCBUYWhvbWEsIFZlcmRhbmEsIFNhbnMtU2VyaWY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG46aG92ZXIge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuLmhpZ2hMaWdodCB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4uZm9yYmlkZGVuIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgYmxvY2txdW90ZSB7XFxuICBtaW4td2lkdGg6IDM4cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0ge1xcbiAgbWFyZ2luOiAxNHB4IDAgMTRweCAzNXB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAtMjFweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogIzczNzM3MztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogMHB4IDRweCAwIC0yNHB4O1xcbiAgY29sb3I6ICNiN2I3Yjc7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCB1bCB1bCB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBsaSB7XFxuICBtYXJnaW4tbGVmdDogNS41JTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDMuNXB4O1xcbiAgbGVmdDogMi41cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2NkYzljNTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIhLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgciBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW5bcl19fSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBpPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtuKDYpLG4oNyksZS5leHBvcnRzPW4oOCl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24odCl7IWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIHIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gaShlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPW51bGwsdGhpcy5fdmFsdWU9bnVsbCx0aGlzLl9kZWZlcnJlZHM9W10sbChlLHIoYSx0aGlzKSxyKHMsdGhpcykpfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9dGhpcztyZXR1cm4gbnVsbD09PXRoaXMuX3N0YXRlP3ZvaWQgdGhpcy5fZGVmZXJyZWRzLnB1c2goZSk6dm9pZCBmKGZ1bmN0aW9uKCl7dmFyIG49dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbD09PW4pcmV0dXJuIHZvaWQodC5fc3RhdGU/ZS5yZXNvbHZlOmUucmVqZWN0KSh0Ll92YWx1ZSk7dmFyIHI7dHJ5e3I9bih0Ll92YWx1ZSl9Y2F0Y2goaSl7cmV0dXJuIHZvaWQgZS5yZWplY3QoaSl9ZS5yZXNvbHZlKHIpfSl9ZnVuY3Rpb24gYShlKXt0cnl7aWYoZT09PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciB0PWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB2b2lkIGwocih0LGUpLHIoYSx0aGlzKSxyKHMsdGhpcykpfXRoaXMuX3N0YXRlPSEwLHRoaXMuX3ZhbHVlPWUsdS5jYWxsKHRoaXMpfWNhdGNoKG4pe3MuY2FsbCh0aGlzLG4pfX1mdW5jdGlvbiBzKGUpe3RoaXMuX3N0YXRlPSExLHRoaXMuX3ZhbHVlPWUsdS5jYWxsKHRoaXMpfWZ1bmN0aW9uIHUoKXtmb3IodmFyIGU9MCx0PXRoaXMuX2RlZmVycmVkcy5sZW5ndGg7dD5lO2UrKylvLmNhbGwodGhpcyx0aGlzLl9kZWZlcnJlZHNbZV0pO3RoaXMuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGMoZSx0LG4scil7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5yZXNvbHZlPW4sdGhpcy5yZWplY3Q9cn1mdW5jdGlvbiBsKGUsdCxuKXt2YXIgcj0hMTt0cnl7ZShmdW5jdGlvbihlKXtyfHwocj0hMCx0KGUpKX0sZnVuY3Rpb24oZSl7cnx8KHI9ITAsbihlKSl9KX1jYXRjaChpKXtpZihyKXJldHVybjtyPSEwLG4oaSl9fXZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnR8fGZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZSwxKX0sZD1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9O2kucHJvdG90eXBlW1wiY2F0Y2hcIl09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxpLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IGkoZnVuY3Rpb24ocixpKXtvLmNhbGwobixuZXcgYyhlLHQscixpKSl9KX0saS5hbGw9ZnVuY3Rpb24oKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgxPT09YXJndW1lbnRzLmxlbmd0aCYmZChhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHMpO3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIHIobyxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIHM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpcmV0dXJuIHZvaWQgcy5jYWxsKGEsZnVuY3Rpb24oZSl7cihvLGUpfSxuKX1lW29dPWEsMD09PS0taSYmdChlKX1jYXRjaCh1KXtuKHUpfX1pZigwPT09ZS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgaT1lLmxlbmd0aCxvPTA7bzxlLmxlbmd0aDtvKyspcihvLGVbb10pfSl9LGkucmVzb2x2ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3I9PT1pP2U6bmV3IGkoZnVuY3Rpb24odCl7dChlKX0pfSxpLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtuKGUpfSl9LGkucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxpPWUubGVuZ3RoO2k+cjtyKyspZVtyXS50aGVuKHQsbil9KX0saS5fc2V0SW1tZWRpYXRlRm49ZnVuY3Rpb24oZSl7Zj1lfSxpLnByb3RvdHlwZS5hbHdheXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG59KX0sZnVuY3Rpb24obil7cmV0dXJuIHQucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBufSl9KX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9aTpuLlByb21pc2V8fChuLlByb21pc2U9aSl9KHRoaXMpfSkuY2FsbCh0LG4oMikuc2V0SW1tZWRpYXRlKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIGkoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH12YXIgbz1uKDMpLm5leHRUaWNrLGE9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LHM9QXJyYXkucHJvdG90eXBlLnNsaWNlLHU9e30sYz0wO3Quc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShhLmNhbGwoc2V0VGltZW91dCx3aW5kb3csYXJndW1lbnRzKSxjbGVhclRpbWVvdXQpfSx0LnNldEludGVydmFsPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKGEuY2FsbChzZXRJbnRlcnZhbCx3aW5kb3csYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sdC5jbGVhclRpbWVvdXQ9dC5jbGVhckludGVydmFsPWZ1bmN0aW9uKGUpe2UuY2xvc2UoKX0saS5wcm90b3R5cGUudW5yZWY9aS5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSxpLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csdGhpcy5faWQpfSx0LmVucm9sbD1mdW5jdGlvbihlLHQpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD10fSx0LnVuZW5yb2xsPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD0tMX0sdC5fdW5yZWZBY3RpdmU9dC5hY3RpdmU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpO3ZhciB0PWUuX2lkbGVUaW1lb3V0O3Q+PTAmJihlLl9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLl9vblRpbWVvdXQmJmUuX29uVGltZW91dCgpfSx0KSl9LHQuc2V0SW1tZWRpYXRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpmdW5jdGlvbihlKXt2YXIgbj1jKysscj1hcmd1bWVudHMubGVuZ3RoPDI/ITE6cy5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdVtuXT0hMCxvKGZ1bmN0aW9uKCl7dVtuXSYmKHI/ZS5hcHBseShudWxsLHIpOmUuY2FsbChudWxsKSx0LmNsZWFySW1tZWRpYXRlKG4pKX0pLG59LHQuY2xlYXJJbW1lZGlhdGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yOmZ1bmN0aW9uKGUpe2RlbGV0ZSB1W2VdfX0pLmNhbGwodCxuKDIpLnNldEltbWVkaWF0ZSxuKDIpLmNsZWFySW1tZWRpYXRlKX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7Yz0hMSxhLmxlbmd0aD91PWEuY29uY2F0KHUpOmw9LTEsdS5sZW5ndGgmJnIoKX1mdW5jdGlvbiByKCl7aWYoIWMpe3ZhciBlPXNldFRpbWVvdXQobik7Yz0hMDtmb3IodmFyIHQ9dS5sZW5ndGg7dDspe2ZvcihhPXUsdT1bXTsrK2w8dDspYSYmYVtsXS5ydW4oKTtsPS0xLHQ9dS5sZW5ndGh9YT1udWxsLGM9ITEsY2xlYXJUaW1lb3V0KGUpfX1mdW5jdGlvbiBpKGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gbygpe312YXIgYSxzPWUuZXhwb3J0cz17fSx1PVtdLGM9ITEsbD0tMTtzLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07dS5wdXNoKG5ldyBpKGUsdCkpLDEhPT11Lmxlbmd0aHx8Y3x8c2V0VGltZW91dChyLDApfSxpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxzLnRpdGxlPVwiYnJvd3NlclwiLHMuYnJvd3Nlcj0hMCxzLmVudj17fSxzLmFyZ3Y9W10scy52ZXJzaW9uPVwiXCIscy52ZXJzaW9ucz17fSxzLm9uPW8scy5hZGRMaXN0ZW5lcj1vLHMub25jZT1vLHMub2ZmPW8scy5yZW1vdmVMaXN0ZW5lcj1vLHMucmVtb3ZlQWxsTGlzdGVuZXJzPW8scy5lbWl0PW8scy5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxzLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxzLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0scy51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7dmFyIGU9fm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikmJn5uYXZpZ2F0b3IudmVuZG9yLmluZGV4T2YoXCJHb29nbGVcIikmJiF+bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpO3JldHVybiBlJiZuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKS8pLnBvcCgpPD01MzR8fC9NUVFCcm93c2VyL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KX12YXIgcj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEJsb2IsITB9Y2F0Y2goZSl7cmV0dXJuITF9fSgpP3dpbmRvdy5CbG9iOmZ1bmN0aW9uKGUsdCl7dmFyIG49bmV3KHdpbmRvdy5CbG9iQnVpbGRlcnx8d2luZG93LldlYktpdEJsb2JCdWlsZGVyfHx3aW5kb3cuTVNCbG9iQnVpbGRlcnx8d2luZG93Lk1vekJsb2JCdWlsZGVyKTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe24uYXBwZW5kKGUpfSksbi5nZXRCbG9iKHQ/dC50eXBlOnZvaWQgMCl9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpcyxuPVtdLGk9QXJyYXkoMjEpLmpvaW4oXCItXCIpKygrbmV3IERhdGUqKDFlMTYqTWF0aC5yYW5kb20oKSkpLnRvU3RyaW5nKDM2KSxvPVhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO3RoaXMuZ2V0UGFydHM9ZnVuY3Rpb24oKXtyZXR1cm4gbi50b1N0cmluZygpfSx0aGlzLmFwcGVuZD1mdW5jdGlvbihlLHQscil7bi5wdXNoKFwiLS1cIitpKydcXHJcXG5Db250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2UrJ1wiJyksdCBpbnN0YW5jZW9mIEJsb2I/KG4ucHVzaCgnOyBmaWxlbmFtZT1cIicrKHJ8fFwiYmxvYlwiKSsnXCJcXHJcXG5Db250ZW50LVR5cGU6ICcrdC50eXBlK1wiXFxyXFxuXFxyXFxuXCIpLG4ucHVzaCh0KSk6bi5wdXNoKFwiXFxyXFxuXFxyXFxuXCIrdCksbi5wdXNoKFwiXFxyXFxuXCIpfSx0KyssWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oYSl7dmFyIHMsdSxjPXRoaXM7YT09PWU/KG4ucHVzaChcIi0tXCIraStcIi0tXFxyXFxuXCIpLHU9bmV3IHIobikscz1uZXcgRmlsZVJlYWRlcixzLm9ubG9hZD1mdW5jdGlvbigpe28uY2FsbChjLHMucmVzdWx0KX0scy5vbmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IGV9LHMucmVhZEFzQXJyYXlCdWZmZXIodSksdGhpcy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsXCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT1cIitpKSx0LS0sMD09dCYmKFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPW8pKTpvLmNhbGwodGhpcyxhKX19dmFyIHQ9MDtyZXR1cm4gZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShGb3JtRGF0YS5wcm90b3R5cGUpLGV9KCk7ZS5leHBvcnRzPXtCbG9iOnIsRm9ybURhdGE6bigpP2k6Rm9ybURhdGF9fSxmdW5jdGlvbihlLHQsbil7dmFyIHIsaTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKGUpe3JldHVybiEhZS5leGlmZGF0YX1mdW5jdGlvbiBvKGUsdCl7dD10fHxlLm1hdGNoKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvaW0pWzFdfHxcIlwiLGU9ZS5yZXBsYWNlKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvZ2ltLFwiXCIpO2Zvcih2YXIgbj1hdG9iKGUpLHI9bi5sZW5ndGgsaT1uZXcgQXJyYXlCdWZmZXIociksbz1uZXcgVWludDhBcnJheShpKSxhPTA7cj5hO2ErKylvW2FdPW4uY2hhckNvZGVBdChhKTtyZXR1cm4gaX1mdW5jdGlvbiBhKGUsdCl7dmFyIG49bmV3IFhNTEh0dHBSZXF1ZXN0O24ub3BlbihcIkdFVFwiLGUsITApLG4ucmVzcG9uc2VUeXBlPVwiYmxvYlwiLG4ub25sb2FkPWZ1bmN0aW9uKGUpeygyMDA9PXRoaXMuc3RhdHVzfHwwPT09dGhpcy5zdGF0dXMpJiZ0KHRoaXMucmVzcG9uc2UpfSxuLnNlbmQoKX1mdW5jdGlvbiBzKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj11KG4pLGk9YyhuKTtlLmV4aWZkYXRhPXJ8fHt9LGUuaXB0Y2RhdGE9aXx8e30sdCYmdC5jYWxsKGUpfWlmKGUuc3JjKWlmKC9eZGF0YVxcOi9pLnRlc3QoZS5zcmMpKXt2YXIgcj1vKGUuc3JjKTtuKHIpfWVsc2UgaWYoL15ibG9iXFw6L2kudGVzdChlLnNyYykpe3ZhciBpPW5ldyBGaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKGUpe24oZS50YXJnZXQucmVzdWx0KX0sYShlLnNyYyxmdW5jdGlvbihlKXtpLnJlYWRBc0FycmF5QnVmZmVyKGUpfSl9ZWxzZXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Q7cy5vbmxvYWQ9ZnVuY3Rpb24oKXsyMDA9PXRoaXMuc3RhdHVzfHwwPT09dGhpcy5zdGF0dXM/bihzLnJlc3BvbnNlKTp0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBsb2FkIGltYWdlXCIpKSxzPW51bGx9LHMub3BlbihcIkdFVFwiLGUuc3JjLCEwKSxzLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCIscy5zZW5kKG51bGwpfWVsc2UgaWYod2luZG93LkZpbGVSZWFkZXImJihlIGluc3RhbmNlb2Ygd2luZG93LkJsb2J8fGUgaW5zdGFuY2VvZiB3aW5kb3cuRmlsZSkpe3ZhciBpPW5ldyBGaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKGUpe3AmJmNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiK2UudGFyZ2V0LnJlc3VsdC5ieXRlTGVuZ3RoKSxuKGUudGFyZ2V0LnJlc3VsdCl9LGkucmVhZEFzQXJyYXlCdWZmZXIoZSl9fWZ1bmN0aW9uIHUoZSl7dmFyIHQ9bmV3IERhdGFWaWV3KGUpO2lmKHAmJmNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiK2UuYnl0ZUxlbmd0aCksMjU1IT10LmdldFVpbnQ4KDApfHwyMTYhPXQuZ2V0VWludDgoMSkpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKSwhMTtmb3IodmFyIG4scj0yLGk9ZS5ieXRlTGVuZ3RoO2k+cjspe2lmKDI1NSE9dC5nZXRVaW50OChyKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBtYXJrZXIgYXQgb2Zmc2V0IFwiK3IrXCIsIGZvdW5kOiBcIit0LmdldFVpbnQ4KHIpKSwhMTtpZihuPXQuZ2V0VWludDgocisxKSxwJiZjb25zb2xlLmxvZyhuKSwyMjU9PW4pcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiRm91bmQgMHhGRkUxIG1hcmtlclwiKSxnKHQscis0LHQuZ2V0VWludDE2KHIrMiktMik7cis9Mit0LmdldFVpbnQxNihyKzIpfX1mdW5jdGlvbiBjKGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKTtpZihwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLmJ5dGVMZW5ndGgpLDI1NSE9dC5nZXRVaW50OCgwKXx8MjE2IT10LmdldFVpbnQ4KDEpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIiksITE7Zm9yKHZhciBuPTIscj1lLmJ5dGVMZW5ndGgsaT1mdW5jdGlvbihlLHQpe3JldHVybiA1Nj09PWUuZ2V0VWludDgodCkmJjY2PT09ZS5nZXRVaW50OCh0KzEpJiY3Mz09PWUuZ2V0VWludDgodCsyKSYmNzc9PT1lLmdldFVpbnQ4KHQrMykmJjQ9PT1lLmdldFVpbnQ4KHQrNCkmJjQ9PT1lLmdldFVpbnQ4KHQrNSl9O3I+bjspe2lmKGkodCxuKSl7dmFyIG89dC5nZXRVaW50OChuKzcpO28lMiE9PTAmJihvKz0xKSwwPT09byYmKG89NCk7dmFyIGE9bis4K28scz10LmdldFVpbnQxNihuKzYrbyk7cmV0dXJuIGwoZSxhLHMpfW4rK319ZnVuY3Rpb24gbChlLHQsbil7Zm9yKHZhciByLGksbyxhLHMsdT1uZXcgRGF0YVZpZXcoZSksYz17fSxsPXQ7dCtuPmw7KTI4PT09dS5nZXRVaW50OChsKSYmMj09PXUuZ2V0VWludDgobCsxKSYmKGE9dS5nZXRVaW50OChsKzIpLGEgaW4gUyYmKG89dS5nZXRJbnQxNihsKzMpLHM9bys1LGk9U1thXSxyPWgodSxsKzUsbyksYy5oYXNPd25Qcm9wZXJ0eShpKT9jW2ldaW5zdGFuY2VvZiBBcnJheT9jW2ldLnB1c2gocik6Y1tpXT1bY1tpXSxyXTpjW2ldPXIpKSxsKys7cmV0dXJuIGN9ZnVuY3Rpb24gZihlLHQsbixyLGkpe3ZhciBvLGEscyx1PWUuZ2V0VWludDE2KG4sIWkpLGM9e307Zm9yKHM9MDt1PnM7cysrKW89bisxMipzKzIsYT1yW2UuZ2V0VWludDE2KG8sIWkpXSwhYSYmcCYmY29uc29sZS5sb2coXCJVbmtub3duIHRhZzogXCIrZS5nZXRVaW50MTYobywhaSkpLGNbYV09ZChlLG8sdCxuLGkpO3JldHVybiBjfWZ1bmN0aW9uIGQoZSx0LG4scixpKXt2YXIgbyxhLHMsdSxjLGwsZj1lLmdldFVpbnQxNih0KzIsIWkpLGQ9ZS5nZXRVaW50MzIodCs0LCFpKSxnPWUuZ2V0VWludDMyKHQrOCwhaSkrbjtzd2l0Y2goZil7Y2FzZSAxOmNhc2UgNzppZigxPT1kKXJldHVybiBlLmdldFVpbnQ4KHQrOCwhaSk7Zm9yKG89ZD40P2c6dCs4LGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldFVpbnQ4KG8rdSk7cmV0dXJuIGE7Y2FzZSAyOnJldHVybiBvPWQ+ND9nOnQrOCxoKGUsbyxkLTEpO2Nhc2UgMzppZigxPT1kKXJldHVybiBlLmdldFVpbnQxNih0KzgsIWkpO2ZvcihvPWQ+Mj9nOnQrOCxhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50MTYobysyKnUsIWkpO3JldHVybiBhO2Nhc2UgNDppZigxPT1kKXJldHVybiBlLmdldFVpbnQzMih0KzgsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50MzIoZys0KnUsIWkpO3JldHVybiBhO2Nhc2UgNTppZigxPT1kKXJldHVybiBjPWUuZ2V0VWludDMyKGcsIWkpLGw9ZS5nZXRVaW50MzIoZys0LCFpKSxzPW5ldyBOdW1iZXIoYy9sKSxzLm51bWVyYXRvcj1jLHMuZGVub21pbmF0b3I9bCxzO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWM9ZS5nZXRVaW50MzIoZys4KnUsIWkpLGw9ZS5nZXRVaW50MzIoZys0KzgqdSwhaSksYVt1XT1uZXcgTnVtYmVyKGMvbCksYVt1XS5udW1lcmF0b3I9YyxhW3VdLmRlbm9taW5hdG9yPWw7cmV0dXJuIGE7Y2FzZSA5OmlmKDE9PWQpcmV0dXJuIGUuZ2V0SW50MzIodCs4LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0SW50MzIoZys0KnUsIWkpO3JldHVybiBhO2Nhc2UgMTA6aWYoMT09ZClyZXR1cm4gZS5nZXRJbnQzMihnLCFpKS9lLmdldEludDMyKGcrNCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldEludDMyKGcrOCp1LCFpKS9lLmdldEludDMyKGcrNCs4KnUsIWkpO3JldHVybiBhfX1mdW5jdGlvbiBoKGUsdCxuKXt2YXIgcixpPVwiXCI7Zm9yKHI9dDt0K24+cjtyKyspaSs9U3RyaW5nLmZyb21DaGFyQ29kZShlLmdldFVpbnQ4KHIpKTtyZXR1cm4gaX1mdW5jdGlvbiBnKGUsdCl7aWYoXCJFeGlmXCIhPWgoZSx0LDQpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBFWElGIGRhdGEhIFwiK2goZSx0LDQpKSwhMTt2YXIgbixyLGksbyxhLHM9dCs2O2lmKDE4NzYxPT1lLmdldFVpbnQxNihzKSluPSExO2Vsc2V7aWYoMTk3ODkhPWUuZ2V0VWludDE2KHMpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDQ5NDkgb3IgMHg0RDREKVwiKSwhMTtuPSEwfWlmKDQyIT1lLmdldFVpbnQxNihzKzIsIW4pKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDAwMkEpXCIpLCExO3ZhciB1PWUuZ2V0VWludDMyKHMrNCwhbik7aWYoOD51KXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChGaXJzdCBvZmZzZXQgbGVzcyB0aGFuIDgpXCIsZS5nZXRVaW50MzIocys0LCFuKSksITE7aWYocj1mKGUscyxzK3UsdixuKSxyLkV4aWZJRkRQb2ludGVyKXtvPWYoZSxzLHMrci5FeGlmSUZEUG9pbnRlcix3LG4pO2ZvcihpIGluIG8pe3N3aXRjaChpKXtjYXNlXCJMaWdodFNvdXJjZVwiOmNhc2VcIkZsYXNoXCI6Y2FzZVwiTWV0ZXJpbmdNb2RlXCI6Y2FzZVwiRXhwb3N1cmVQcm9ncmFtXCI6Y2FzZVwiU2Vuc2luZ01ldGhvZFwiOmNhc2VcIlNjZW5lQ2FwdHVyZVR5cGVcIjpjYXNlXCJTY2VuZVR5cGVcIjpjYXNlXCJDdXN0b21SZW5kZXJlZFwiOmNhc2VcIldoaXRlQmFsYW5jZVwiOmNhc2VcIkdhaW5Db250cm9sXCI6Y2FzZVwiQ29udHJhc3RcIjpjYXNlXCJTYXR1cmF0aW9uXCI6Y2FzZVwiU2hhcnBuZXNzXCI6Y2FzZVwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIjpjYXNlXCJGaWxlU291cmNlXCI6b1tpXT1iW2ldW29baV1dO2JyZWFrO2Nhc2VcIkV4aWZWZXJzaW9uXCI6Y2FzZVwiRmxhc2hwaXhWZXJzaW9uXCI6b1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKG9baV1bMF0sb1tpXVsxXSxvW2ldWzJdLG9baV1bM10pO2JyZWFrO2Nhc2VcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCI6b1tpXT1iLkNvbXBvbmVudHNbb1tpXVswXV0rYi5Db21wb25lbnRzW29baV1bMV1dK2IuQ29tcG9uZW50c1tvW2ldWzJdXStiLkNvbXBvbmVudHNbb1tpXVszXV19cltpXT1vW2ldfX1pZihyLkdQU0luZm9JRkRQb2ludGVyKXthPWYoZSxzLHMrci5HUFNJbmZvSUZEUG9pbnRlcix5LG4pO2ZvcihpIGluIGEpe3N3aXRjaChpKXtjYXNlXCJHUFNWZXJzaW9uSURcIjphW2ldPWFbaV1bMF0rXCIuXCIrYVtpXVsxXStcIi5cIithW2ldWzJdK1wiLlwiK2FbaV1bM119cltpXT1hW2ldfX1yZXR1cm4gcn12YXIgcD0hMSxtPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgbT9lOnRoaXMgaW5zdGFuY2VvZiBtP3ZvaWQodGhpcy5FWElGd3JhcHBlZD1lKTpuZXcgbShlKX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJmUuZXhwb3J0cyYmKHQ9ZS5leHBvcnRzPW0pLHQuRVhJRj1tO3ZhciB3PW0uVGFncz17MzY4NjQ6XCJFeGlmVmVyc2lvblwiLDQwOTYwOlwiRmxhc2hwaXhWZXJzaW9uXCIsNDA5NjE6XCJDb2xvclNwYWNlXCIsNDA5NjI6XCJQaXhlbFhEaW1lbnNpb25cIiw0MDk2MzpcIlBpeGVsWURpbWVuc2lvblwiLDM3MTIxOlwiQ29tcG9uZW50c0NvbmZpZ3VyYXRpb25cIiwzNzEyMjpcIkNvbXByZXNzZWRCaXRzUGVyUGl4ZWxcIiwzNzUwMDpcIk1ha2VyTm90ZVwiLDM3NTEwOlwiVXNlckNvbW1lbnRcIiw0MDk2NDpcIlJlbGF0ZWRTb3VuZEZpbGVcIiwzNjg2NzpcIkRhdGVUaW1lT3JpZ2luYWxcIiwzNjg2ODpcIkRhdGVUaW1lRGlnaXRpemVkXCIsMzc1MjA6XCJTdWJzZWNUaW1lXCIsMzc1MjE6XCJTdWJzZWNUaW1lT3JpZ2luYWxcIiwzNzUyMjpcIlN1YnNlY1RpbWVEaWdpdGl6ZWRcIiwzMzQzNDpcIkV4cG9zdXJlVGltZVwiLDMzNDM3OlwiRk51bWJlclwiLDM0ODUwOlwiRXhwb3N1cmVQcm9ncmFtXCIsMzQ4NTI6XCJTcGVjdHJhbFNlbnNpdGl2aXR5XCIsMzQ4NTU6XCJJU09TcGVlZFJhdGluZ3NcIiwzNDg1NjpcIk9FQ0ZcIiwzNzM3NzpcIlNodXR0ZXJTcGVlZFZhbHVlXCIsMzczNzg6XCJBcGVydHVyZVZhbHVlXCIsMzczNzk6XCJCcmlnaHRuZXNzVmFsdWVcIiwzNzM4MDpcIkV4cG9zdXJlQmlhc1wiLDM3MzgxOlwiTWF4QXBlcnR1cmVWYWx1ZVwiLDM3MzgyOlwiU3ViamVjdERpc3RhbmNlXCIsMzczODM6XCJNZXRlcmluZ01vZGVcIiwzNzM4NDpcIkxpZ2h0U291cmNlXCIsMzczODU6XCJGbGFzaFwiLDM3Mzk2OlwiU3ViamVjdEFyZWFcIiwzNzM4NjpcIkZvY2FsTGVuZ3RoXCIsNDE0ODM6XCJGbGFzaEVuZXJneVwiLDQxNDg0OlwiU3BhdGlhbEZyZXF1ZW5jeVJlc3BvbnNlXCIsNDE0ODY6XCJGb2NhbFBsYW5lWFJlc29sdXRpb25cIiw0MTQ4NzpcIkZvY2FsUGxhbmVZUmVzb2x1dGlvblwiLDQxNDg4OlwiRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0XCIsNDE0OTI6XCJTdWJqZWN0TG9jYXRpb25cIiw0MTQ5MzpcIkV4cG9zdXJlSW5kZXhcIiw0MTQ5NTpcIlNlbnNpbmdNZXRob2RcIiw0MTcyODpcIkZpbGVTb3VyY2VcIiw0MTcyOTpcIlNjZW5lVHlwZVwiLDQxNzMwOlwiQ0ZBUGF0dGVyblwiLDQxOTg1OlwiQ3VzdG9tUmVuZGVyZWRcIiw0MTk4NjpcIkV4cG9zdXJlTW9kZVwiLDQxOTg3OlwiV2hpdGVCYWxhbmNlXCIsNDE5ODg6XCJEaWdpdGFsWm9vbVJhdGlvblwiLDQxOTg5OlwiRm9jYWxMZW5ndGhJbjM1bW1GaWxtXCIsNDE5OTA6XCJTY2VuZUNhcHR1cmVUeXBlXCIsNDE5OTE6XCJHYWluQ29udHJvbFwiLDQxOTkyOlwiQ29udHJhc3RcIiw0MTk5MzpcIlNhdHVyYXRpb25cIiw0MTk5NDpcIlNoYXJwbmVzc1wiLDQxOTk1OlwiRGV2aWNlU2V0dGluZ0Rlc2NyaXB0aW9uXCIsNDE5OTY6XCJTdWJqZWN0RGlzdGFuY2VSYW5nZVwiLDQwOTY1OlwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIiw0MjAxNjpcIkltYWdlVW5pcXVlSURcIn0sdj1tLlRpZmZUYWdzPXsyNTY6XCJJbWFnZVdpZHRoXCIsMjU3OlwiSW1hZ2VIZWlnaHRcIiwzNDY2NTpcIkV4aWZJRkRQb2ludGVyXCIsMzQ4NTM6XCJHUFNJbmZvSUZEUG9pbnRlclwiLDQwOTY1OlwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIiwyNTg6XCJCaXRzUGVyU2FtcGxlXCIsMjU5OlwiQ29tcHJlc3Npb25cIiwyNjI6XCJQaG90b21ldHJpY0ludGVycHJldGF0aW9uXCIsMjc0OlwiT3JpZW50YXRpb25cIiwyNzc6XCJTYW1wbGVzUGVyUGl4ZWxcIiwyODQ6XCJQbGFuYXJDb25maWd1cmF0aW9uXCIsNTMwOlwiWUNiQ3JTdWJTYW1wbGluZ1wiLDUzMTpcIllDYkNyUG9zaXRpb25pbmdcIiwyODI6XCJYUmVzb2x1dGlvblwiLDI4MzpcIllSZXNvbHV0aW9uXCIsMjk2OlwiUmVzb2x1dGlvblVuaXRcIiwyNzM6XCJTdHJpcE9mZnNldHNcIiwyNzg6XCJSb3dzUGVyU3RyaXBcIiwyNzk6XCJTdHJpcEJ5dGVDb3VudHNcIiw1MTM6XCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRcIiw1MTQ6XCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGhcIiwzMDE6XCJUcmFuc2ZlckZ1bmN0aW9uXCIsMzE4OlwiV2hpdGVQb2ludFwiLDMxOTpcIlByaW1hcnlDaHJvbWF0aWNpdGllc1wiLDUyOTpcIllDYkNyQ29lZmZpY2llbnRzXCIsNTMyOlwiUmVmZXJlbmNlQmxhY2tXaGl0ZVwiLDMwNjpcIkRhdGVUaW1lXCIsMjcwOlwiSW1hZ2VEZXNjcmlwdGlvblwiLDI3MTpcIk1ha2VcIiwyNzI6XCJNb2RlbFwiLDMwNTpcIlNvZnR3YXJlXCIsMzE1OlwiQXJ0aXN0XCIsMzM0MzI6XCJDb3B5cmlnaHRcIn0seT1tLkdQU1RhZ3M9ezA6XCJHUFNWZXJzaW9uSURcIiwxOlwiR1BTTGF0aXR1ZGVSZWZcIiwyOlwiR1BTTGF0aXR1ZGVcIiwzOlwiR1BTTG9uZ2l0dWRlUmVmXCIsNDpcIkdQU0xvbmdpdHVkZVwiLDU6XCJHUFNBbHRpdHVkZVJlZlwiLDY6XCJHUFNBbHRpdHVkZVwiLDc6XCJHUFNUaW1lU3RhbXBcIiw4OlwiR1BTU2F0ZWxsaXRlc1wiLDk6XCJHUFNTdGF0dXNcIiwxMDpcIkdQU01lYXN1cmVNb2RlXCIsMTE6XCJHUFNET1BcIiwxMjpcIkdQU1NwZWVkUmVmXCIsMTM6XCJHUFNTcGVlZFwiLDE0OlwiR1BTVHJhY2tSZWZcIiwxNTpcIkdQU1RyYWNrXCIsMTY6XCJHUFNJbWdEaXJlY3Rpb25SZWZcIiwxNzpcIkdQU0ltZ0RpcmVjdGlvblwiLDE4OlwiR1BTTWFwRGF0dW1cIiwxOTpcIkdQU0Rlc3RMYXRpdHVkZVJlZlwiLDIwOlwiR1BTRGVzdExhdGl0dWRlXCIsMjE6XCJHUFNEZXN0TG9uZ2l0dWRlUmVmXCIsMjI6XCJHUFNEZXN0TG9uZ2l0dWRlXCIsMjM6XCJHUFNEZXN0QmVhcmluZ1JlZlwiLDI0OlwiR1BTRGVzdEJlYXJpbmdcIiwyNTpcIkdQU0Rlc3REaXN0YW5jZVJlZlwiLDI2OlwiR1BTRGVzdERpc3RhbmNlXCIsMjc6XCJHUFNQcm9jZXNzaW5nTWV0aG9kXCIsMjg6XCJHUFNBcmVhSW5mb3JtYXRpb25cIiwyOTpcIkdQU0RhdGVTdGFtcFwiLDMwOlwiR1BTRGlmZmVyZW50aWFsXCJ9LGI9bS5TdHJpbmdWYWx1ZXM9e0V4cG9zdXJlUHJvZ3JhbTp7MDpcIk5vdCBkZWZpbmVkXCIsMTpcIk1hbnVhbFwiLDI6XCJOb3JtYWwgcHJvZ3JhbVwiLDM6XCJBcGVydHVyZSBwcmlvcml0eVwiLDQ6XCJTaHV0dGVyIHByaW9yaXR5XCIsNTpcIkNyZWF0aXZlIHByb2dyYW1cIiw2OlwiQWN0aW9uIHByb2dyYW1cIiw3OlwiUG9ydHJhaXQgbW9kZVwiLDg6XCJMYW5kc2NhcGUgbW9kZVwifSxNZXRlcmluZ01vZGU6ezA6XCJVbmtub3duXCIsMTpcIkF2ZXJhZ2VcIiwyOlwiQ2VudGVyV2VpZ2h0ZWRBdmVyYWdlXCIsMzpcIlNwb3RcIiw0OlwiTXVsdGlTcG90XCIsNTpcIlBhdHRlcm5cIiw2OlwiUGFydGlhbFwiLDI1NTpcIk90aGVyXCJ9LExpZ2h0U291cmNlOnswOlwiVW5rbm93blwiLDE6XCJEYXlsaWdodFwiLDI6XCJGbHVvcmVzY2VudFwiLDM6XCJUdW5nc3RlbiAoaW5jYW5kZXNjZW50IGxpZ2h0KVwiLDQ6XCJGbGFzaFwiLDk6XCJGaW5lIHdlYXRoZXJcIiwxMDpcIkNsb3VkeSB3ZWF0aGVyXCIsMTE6XCJTaGFkZVwiLDEyOlwiRGF5bGlnaHQgZmx1b3Jlc2NlbnQgKEQgNTcwMCAtIDcxMDBLKVwiLDEzOlwiRGF5IHdoaXRlIGZsdW9yZXNjZW50IChOIDQ2MDAgLSA1NDAwSylcIiwxNDpcIkNvb2wgd2hpdGUgZmx1b3Jlc2NlbnQgKFcgMzkwMCAtIDQ1MDBLKVwiLDE1OlwiV2hpdGUgZmx1b3Jlc2NlbnQgKFdXIDMyMDAgLSAzNzAwSylcIiwxNzpcIlN0YW5kYXJkIGxpZ2h0IEFcIiwxODpcIlN0YW5kYXJkIGxpZ2h0IEJcIiwxOTpcIlN0YW5kYXJkIGxpZ2h0IENcIiwyMDpcIkQ1NVwiLDIxOlwiRDY1XCIsMjI6XCJENzVcIiwyMzpcIkQ1MFwiLDI0OlwiSVNPIHN0dWRpbyB0dW5nc3RlblwiLDI1NTpcIk90aGVyXCJ9LEZsYXNoOnswOlwiRmxhc2ggZGlkIG5vdCBmaXJlXCIsMTpcIkZsYXNoIGZpcmVkXCIsNTpcIlN0cm9iZSByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsNzpcIlN0cm9iZSByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw5OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLDEzOlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDE1OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsMTY6XCJGbGFzaCBkaWQgbm90IGZpcmUsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZVwiLDI0OlwiRmxhc2ggZGlkIG5vdCBmaXJlLCBhdXRvIG1vZGVcIiwyNTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGVcIiwyOTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiwzMTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDMyOlwiTm8gZmxhc2ggZnVuY3Rpb25cIiw2NTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsNjk6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDcxOlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDczOlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDc3OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDc5OlwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsODk6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsOTM6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsOTU6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIn0sU2Vuc2luZ01ldGhvZDp7MTpcIk5vdCBkZWZpbmVkXCIsMjpcIk9uZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsMzpcIlR3by1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsNDpcIlRocmVlLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIiw1OlwiQ29sb3Igc2VxdWVudGlhbCBhcmVhIHNlbnNvclwiLDc6XCJUcmlsaW5lYXIgc2Vuc29yXCIsODpcIkNvbG9yIHNlcXVlbnRpYWwgbGluZWFyIHNlbnNvclwifSxTY2VuZUNhcHR1cmVUeXBlOnswOlwiU3RhbmRhcmRcIiwxOlwiTGFuZHNjYXBlXCIsMjpcIlBvcnRyYWl0XCIsMzpcIk5pZ2h0IHNjZW5lXCJ9LFNjZW5lVHlwZTp7MTpcIkRpcmVjdGx5IHBob3RvZ3JhcGhlZFwifSxDdXN0b21SZW5kZXJlZDp7MDpcIk5vcm1hbCBwcm9jZXNzXCIsMTpcIkN1c3RvbSBwcm9jZXNzXCJ9LFdoaXRlQmFsYW5jZTp7MDpcIkF1dG8gd2hpdGUgYmFsYW5jZVwiLDE6XCJNYW51YWwgd2hpdGUgYmFsYW5jZVwifSxHYWluQ29udHJvbDp7MDpcIk5vbmVcIiwxOlwiTG93IGdhaW4gdXBcIiwyOlwiSGlnaCBnYWluIHVwXCIsMzpcIkxvdyBnYWluIGRvd25cIiw0OlwiSGlnaCBnYWluIGRvd25cIn0sQ29udHJhc3Q6ezA6XCJOb3JtYWxcIiwxOlwiU29mdFwiLDI6XCJIYXJkXCJ9LFNhdHVyYXRpb246ezA6XCJOb3JtYWxcIiwxOlwiTG93IHNhdHVyYXRpb25cIiwyOlwiSGlnaCBzYXR1cmF0aW9uXCJ9LFNoYXJwbmVzczp7MDpcIk5vcm1hbFwiLDE6XCJTb2Z0XCIsMjpcIkhhcmRcIn0sU3ViamVjdERpc3RhbmNlUmFuZ2U6ezA6XCJVbmtub3duXCIsMTpcIk1hY3JvXCIsMjpcIkNsb3NlIHZpZXdcIiwzOlwiRGlzdGFudCB2aWV3XCJ9LEZpbGVTb3VyY2U6ezM6XCJEU0NcIn0sQ29tcG9uZW50czp7MDpcIlwiLDE6XCJZXCIsMjpcIkNiXCIsMzpcIkNyXCIsNDpcIlJcIiw1OlwiR1wiLDY6XCJCXCJ9fSxTPXsxMjA6XCJjYXB0aW9uXCIsMTEwOlwiY3JlZGl0XCIsMjU6XCJrZXl3b3Jkc1wiLDU1OlwiZGF0ZUNyZWF0ZWRcIiw4MDpcImJ5bGluZVwiLDg1OlwiYnlsaW5lVGl0bGVcIiwxMjI6XCJjYXB0aW9uV3JpdGVyXCIsMTA1OlwiaGVhZGxpbmVcIiwxMTY6XCJjb3B5cmlnaHRcIiwxNTpcImNhdGVnb3J5XCJ9O20uZ2V0RGF0YT1mdW5jdGlvbihlLHQpe3JldHVybihlIGluc3RhbmNlb2YgSW1hZ2V8fGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSYmIWUuY29tcGxldGU/ITE6KG4oZSk/dCYmdC5jYWxsKGUpOnMoZSx0KSwhMCl9LG0uZ2V0VGFnPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4oZSk/ZS5leGlmZGF0YVt0XTp2b2lkIDB9LG0uZ2V0QWxsVGFncz1mdW5jdGlvbihlKXtpZighbihlKSlyZXR1cm57fTt2YXIgdCxyPWUuZXhpZmRhdGEsaT17fTtmb3IodCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihpW3RdPXJbdF0pO3JldHVybiBpfSxtLnByZXR0eT1mdW5jdGlvbihlKXtpZighbihlKSlyZXR1cm5cIlwiO3ZhciB0LHI9ZS5leGlmZGF0YSxpPVwiXCI7Zm9yKHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoaSs9XCJvYmplY3RcIj09dHlwZW9mIHJbdF0/clt0XWluc3RhbmNlb2YgTnVtYmVyP3QrXCIgOiBcIityW3RdK1wiIFtcIityW3RdLm51bWVyYXRvcitcIi9cIityW3RdLmRlbm9taW5hdG9yK1wiXVxcclxcblwiOnQrXCIgOiBbXCIrclt0XS5sZW5ndGgrXCIgdmFsdWVzXVxcclxcblwiOnQrXCIgOiBcIityW3RdK1wiXFxyXFxuXCIpO3JldHVybiBpfSxtLnJlYWRGcm9tQmluYXJ5RmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gdShlKX0scj1bXSxpPWZ1bmN0aW9uKCl7cmV0dXJuIG19LmFwcGx5KHQsciksISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0pLmNhbGwodGhpcyl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIG4oZSl7dmFyIHQ9ZS5uYXR1cmFsV2lkdGgsbj1lLm5hdHVyYWxIZWlnaHQ7aWYodCpuPjEwNDg1NzYpe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD1yLmhlaWdodD0xO3ZhciBpPXIuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBpLmRyYXdJbWFnZShlLC10KzEsMCksMD09PWkuZ2V0SW1hZ2VEYXRhKDAsMCwxLDEpLmRhdGFbM119cmV0dXJuITF9ZnVuY3Rpb24gbyhlLHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyLndpZHRoPTEsci5oZWlnaHQ9bjt2YXIgaT1yLmdldENvbnRleHQoXCIyZFwiKTtpLmRyYXdJbWFnZShlLDAsMCk7Zm9yKHZhciBvPWkuZ2V0SW1hZ2VEYXRhKDAsMCwxLG4pLmRhdGEsYT0wLHM9bix1PW47dT5hOyl7dmFyIGM9b1s0Kih1LTEpKzNdOzA9PT1jP3M9dTphPXUsdT1zK2E+PjF9dmFyIGw9dS9uO3JldHVybiAwPT09bD8xOmx9ZnVuY3Rpb24gYShlLHQsbil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4gcyhlLHIsdCxuKSxyLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIix0LnF1YWxpdHl8fC44KX1mdW5jdGlvbiBzKGUsdCxyLGkpe3ZhciBhPWUubmF0dXJhbFdpZHRoLHM9ZS5uYXR1cmFsSGVpZ2h0LGM9ci53aWR0aCxsPXIuaGVpZ2h0LGY9dC5nZXRDb250ZXh0KFwiMmRcIik7Zi5zYXZlKCksdSh0LGYsYyxsLHIub3JpZW50YXRpb24pO3ZhciBkPW4oZSk7ZCYmKGEvPTIscy89Mik7dmFyIGg9MTAyNCxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7Zy53aWR0aD1nLmhlaWdodD1oO2Zvcih2YXIgcD1nLmdldENvbnRleHQoXCIyZFwiKSxtPWk/byhlLGEscyk6MSx3PU1hdGguY2VpbChoKmMvYSksdj1NYXRoLmNlaWwoaCpsL3MvbSkseT0wLGI9MDtzPnk7KXtmb3IodmFyIFM9MCxJPTA7YT5TOylwLmNsZWFyUmVjdCgwLDAsaCxoKSxwLmRyYXdJbWFnZShlLC1TLC15KSxmLmRyYXdJbWFnZShnLDAsMCxoLGgsSSxiLHcsdiksUys9aCxJKz13O3krPWgsYis9dn1mLnJlc3RvcmUoKSxnPXA9bnVsbH1mdW5jdGlvbiB1KGUsdCxuLHIsaSl7c3dpdGNoKGkpe2Nhc2UgNTpjYXNlIDY6Y2FzZSA3OmNhc2UgODplLndpZHRoPXIsZS5oZWlnaHQ9bjticmVhaztkZWZhdWx0OmUud2lkdGg9bixlLmhlaWdodD1yfXN3aXRjaChpKXtjYXNlIDI6dC50cmFuc2xhdGUobiwwKSx0LnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgMzp0LnRyYW5zbGF0ZShuLHIpLHQucm90YXRlKE1hdGguUEkpO2JyZWFrO2Nhc2UgNDp0LnRyYW5zbGF0ZSgwLHIpLHQuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA1OnQucm90YXRlKC41Kk1hdGguUEkpLHQuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA2OnQucm90YXRlKC41Kk1hdGguUEkpLHQudHJhbnNsYXRlKDAsLXIpO2JyZWFrO2Nhc2UgNzp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZShuLC1yKSx0LnNjYWxlKC0xLDEpO2JyZWFrO2Nhc2UgODp0LnJvdGF0ZSgtLjUqTWF0aC5QSSksdC50cmFuc2xhdGUoLW4sMCl9fWZ1bmN0aW9uIGMoZSl7aWYod2luZG93LkJsb2ImJmUgaW5zdGFuY2VvZiBCbG9iKXt2YXIgdD1uZXcgSW1hZ2Usbj13aW5kb3cuVVJMJiZ3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cuVVJMOndpbmRvdy53ZWJraXRVUkwmJndpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMP3dpbmRvdy53ZWJraXRVUkw6bnVsbDtpZighbil0aHJvdyBFcnJvcihcIk5vIGNyZWF0ZU9iamVjdFVSTCBmdW5jdGlvbiBmb3VuZCB0byBjcmVhdGUgYmxvYiB1cmxcIik7dC5zcmM9bi5jcmVhdGVPYmplY3RVUkwoZSksdGhpcy5ibG9iPWUsZT10fWlmKCFlLm5hdHVyYWxXaWR0aCYmIWUubmF0dXJhbEhlaWdodCl7dmFyIHI9dGhpcztlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPXIuaW1hZ2VMb2FkTGlzdGVuZXJzO2lmKGUpe3IuaW1hZ2VMb2FkTGlzdGVuZXJzPW51bGw7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDtuPnQ7dCsrKWVbdF0oKX19LHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzPVtdfXRoaXMuc3JjSW1hZ2U9ZX1jLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oZSx0LG4pe2lmKHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzKXt2YXIgcj10aGlzO3JldHVybiB2b2lkIHRoaXMuaW1hZ2VMb2FkTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24oKXtyLnJlbmRlcihlLHQsbil9KX10PXR8fHt9O3ZhciBpPXRoaXMuc3JjSW1hZ2Usbz1pLnNyYyx1PW8ubGVuZ3RoLGM9aS5uYXR1cmFsV2lkdGgsbD1pLm5hdHVyYWxIZWlnaHQsZj10LndpZHRoLGQ9dC5oZWlnaHQsaD10Lm1heFdpZHRoLGc9dC5tYXhIZWlnaHQscD10aGlzLmJsb2ImJlwiaW1hZ2UvanBlZ1wiPT09dGhpcy5ibG9iLnR5cGV8fDA9PT1vLmluZGV4T2YoXCJkYXRhOmltYWdlL2pwZWdcIil8fG8uaW5kZXhPZihcIi5qcGdcIik9PT11LTR8fG8uaW5kZXhPZihcIi5qcGVnXCIpPT09dS01O2YmJiFkP2Q9bCpmL2M8PDA6ZCYmIWY/Zj1jKmQvbDw8MDooZj1jLGQ9bCksaCYmZj5oJiYoZj1oLGQ9bCpmL2M8PDApLGcmJmQ+ZyYmKGQ9ZyxmPWMqZC9sPDwwKTt2YXIgbT17d2lkdGg6ZixoZWlnaHQ6ZH07Zm9yKHZhciB3IGluIHQpbVt3XT10W3ddO3ZhciB2PWUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW1nXCI9PT12P2Uuc3JjPWEodGhpcy5zcmNJbWFnZSxtLHApOlwiY2FudmFzXCI9PT12JiZzKHRoaXMuc3JjSW1hZ2UsZSxtLHApLFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub25yZW5kZXImJnRoaXMub25yZW5kZXIoZSksbiYmbigpfSxyPVtdLGk9ZnVuY3Rpb24oKXtyZXR1cm4gY30uYXBwbHkodCxyKSwhKHZvaWQgMCE9PWkmJihlLmV4cG9ydHM9aSkpfSgpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7ZnVuY3Rpb24gdChlKXtmb3IodmFyIHQ9WzE2LDExLDEwLDE2LDI0LDQwLDUxLDYxLDEyLDEyLDE0LDE5LDI2LDU4LDYwLDU1LDE0LDEzLDE2LDI0LDQwLDU3LDY5LDU2LDE0LDE3LDIyLDI5LDUxLDg3LDgwLDYyLDE4LDIyLDM3LDU2LDY4LDEwOSwxMDMsNzcsMjQsMzUsNTUsNjQsODEsMTA0LDExMyw5Miw0OSw2NCw3OCw4NywxMDMsMTIxLDEyMCwxMDEsNzIsOTIsOTUsOTgsMTEyLDEwMCwxMDMsOTldLG49MDs2ND5uO24rKyl7dmFyIHI9RigodFtuXSplKzUwKS8xMDApOzE+cj9yPTE6cj4yNTUmJihyPTI1NSksRFtOW25dXT1yfWZvcih2YXIgaT1bMTcsMTgsMjQsNDcsOTksOTksOTksOTksMTgsMjEsMjYsNjYsOTksOTksOTksOTksMjQsMjYsNTYsOTksOTksOTksOTksOTksNDcsNjYsOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTksOTldLG89MDs2ND5vO28rKyl7dmFyIGE9RigoaVtvXSplKzUwKS8xMDApOzE+YT9hPTE6YT4yNTUmJihhPTI1NSkseFtOW29dXT1hfWZvcih2YXIgcz1bMSwxLjM4NzAzOTg0NSwxLjMwNjU2Mjk2NSwxLjE3NTg3NTYwMiwxLC43ODU2OTQ5NTgsLjU0MTE5NjEsLjI3NTg5OTM3OV0sdT0wLGM9MDs4PmM7YysrKWZvcih2YXIgbD0wOzg+bDtsKyspVVt1XT0xLyhEW05bdV1dKnNbY10qc1tsXSo4KSxDW3VdPTEvKHhbTlt1XV0qc1tjXSpzW2xdKjgpLHUrK31mdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBuPTAscj0wLGk9bmV3IEFycmF5LG89MTsxNj49bztvKyspe2Zvcih2YXIgYT0xO2E8PWVbb107YSsrKWlbdFtyXV09W10saVt0W3JdXVswXT1uLGlbdFtyXV1bMV09byxyKyssbisrO24qPTJ9cmV0dXJuIGl9ZnVuY3Rpb24gcigpe3k9bihXLEgpLGI9bihWLFgpLFM9bih6LHEpLEk9bihRLFkpfWZ1bmN0aW9uIGkoKXtmb3IodmFyIGU9MSx0PTIsbj0xOzE1Pj1uO24rKyl7Zm9yKHZhciByPWU7dD5yO3IrKylBWzMyNzY3K3JdPW4sVFszMjc2NytyXT1bXSxUWzMyNzY3K3JdWzFdPW4sVFszMjc2NytyXVswXT1yO2Zvcih2YXIgaT0tKHQtMSk7LWU+PWk7aSsrKUFbMzI3NjcraV09bixUWzMyNzY3K2ldPVtdLFRbMzI3NjcraV1bMV09bixUWzMyNzY3K2ldWzBdPXQtMStpO2U8PD0xLHQ8PD0xfX1mdW5jdGlvbiBvKCl7Zm9yKHZhciBlPTA7MjU2PmU7ZSsrKWtbZV09MTk1OTUqZSxrW2UrMjU2Pj4wXT0zODQ3MCplLGtbZSs1MTI+PjBdPTc0NzEqZSszMjc2OCxrW2UrNzY4Pj4wXT0tMTEwNTkqZSxrW2UrMTAyND4+MF09LTIxNzA5KmUsa1tlKzEyODA+PjBdPTMyNzY4KmUrODQyMTM3NSxrW2UrMTUzNj4+MF09LTI3NDM5KmUsa1tlKzE3OTI+PjBdPS01MzI5KmV9ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9ZVswXSxuPWVbMV0tMTtuPj0wOyl0JjE8PG4mJihHfD0xPDxPKSxuLS0sTy0tLDA+TyYmKDI1NT09Rz8ocygyNTUpLHMoMCkpOnMoRyksTz03LEc9MCl9ZnVuY3Rpb24gcyhlKXtNLnB1c2goaltlXSl9ZnVuY3Rpb24gdShlKXtzKGU+PjgmMjU1KSxzKDI1NSZlKX1mdW5jdGlvbiBjKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsYyxsLGY9MDtjb25zdCBkPTgsaD02NDtmb3IobD0wO2Q+bDsrK2wpe249ZVtmXSxyPWVbZisxXSxpPWVbZisyXSxvPWVbZiszXSxhPWVbZis0XSxzPWVbZis1XSx1PWVbZis2XSxjPWVbZis3XTt2YXIgZz1uK2MscD1uLWMsbT1yK3Usdz1yLXUsdj1pK3MseT1pLXMsYj1vK2EsUz1vLWEsST1nK2IsUD1nLWIsRj1tK3YsRD1tLXY7ZVtmXT1JK0YsZVtmKzRdPUktRjt2YXIgeD0uNzA3MTA2NzgxKihEK1ApO2VbZisyXT1QK3gsZVtmKzZdPVAteCxJPVMreSxGPXkrdyxEPXcrcDt2YXIgVT0uMzgyNjgzNDMzKihJLUQpLEM9LjU0MTE5NjEqSStVLFQ9MS4zMDY1NjI5NjUqRCtVLEE9LjcwNzEwNjc4MSpGLFI9cCtBLE09cC1BO2VbZis1XT1NK0MsZVtmKzNdPU0tQyxlW2YrMV09UitULGVbZis3XT1SLVQsZis9OH1mb3IoZj0wLGw9MDtkPmw7KytsKXtuPWVbZl0scj1lW2YrOF0saT1lW2YrMTZdLG89ZVtmKzI0XSxhPWVbZiszMl0scz1lW2YrNDBdLHU9ZVtmKzQ4XSxjPWVbZis1Nl07dmFyIEc9bitjLE89bi1jLF89cit1LEI9ci11LEU9aStzLGo9aS1zLGs9bythLE49by1hLFc9RytrLEg9Ry1rLHo9XytFLHE9Xy1FO2VbZl09Vyt6LGVbZiszMl09Vy16O3ZhciBWPS43MDcxMDY3ODEqKHErSCk7ZVtmKzE2XT1IK1YsZVtmKzQ4XT1ILVYsVz1OK2osej1qK0IscT1CK087dmFyIFg9LjM4MjY4MzQzMyooVy1xKSxRPS41NDExOTYxKlcrWCxZPTEuMzA2NTYyOTY1KnErWCxLPS43MDcxMDY3ODEqeixKPU8rSyxaPU8tSztlW2YrNDBdPVorUSxlW2YrMjRdPVotUSxlW2YrOF09SitZLGVbZis1Nl09Si1ZLGYrK312YXIgJDtmb3IobD0wO2g+bDsrK2wpJD1lW2xdKnRbbF0sTFtsXT0kPjA/JCsuNXwwOiQtLjV8MDtyZXR1cm4gTH1mdW5jdGlvbiBsKCl7dSg2NTUwNCksdSgxNikscyg3NCkscyg3MCkscyg3Mykscyg3MCkscygwKSxzKDEpLHMoMSkscygwKSx1KDEpLHUoMSkscygwKSxzKDApfWZ1bmN0aW9uIGYoZSx0KXt1KDY1NDcyKSx1KDE3KSxzKDgpLHUodCksdShlKSxzKDMpLHMoMSkscygxNykscygwKSxzKDIpLHMoMTcpLHMoMSkscygzKSxzKDE3KSxzKDEpfWZ1bmN0aW9uIGQoKXt1KDY1NDk5KSx1KDEzMikscygwKTtmb3IodmFyIGU9MDs2ND5lO2UrKylzKERbZV0pO3MoMSk7Zm9yKHZhciB0PTA7NjQ+dDt0Kyspcyh4W3RdKX1mdW5jdGlvbiBoKCl7dSg2NTQ3NiksdSg0MTgpLHMoMCk7Zm9yKHZhciBlPTA7MTY+ZTtlKyspcyhXW2UrMV0pO2Zvcih2YXIgdD0wOzExPj10O3QrKylzKEhbdF0pO3MoMTYpO2Zvcih2YXIgbj0wOzE2Pm47bisrKXMoeltuKzFdKTtmb3IodmFyIHI9MDsxNjE+PXI7cisrKXMocVtyXSk7cygxKTtmb3IodmFyIGk9MDsxNj5pO2krKylzKFZbaSsxXSk7Zm9yKHZhciBvPTA7MTE+PW87bysrKXMoWFtvXSk7cygxNyk7Zm9yKHZhciBhPTA7MTY+YTthKyspcyhRW2ErMV0pO2Zvcih2YXIgYz0wOzE2MT49YztjKyspcyhZW2NdKX1mdW5jdGlvbiBnKCl7dSg2NTQ5OCksdSgxMikscygzKSxzKDEpLHMoMCkscygyKSxzKDE3KSxzKDMpLHMoMTcpLHMoMCkscyg2MykscygwKX1mdW5jdGlvbiBwKGUsdCxuLHIsaSl7dmFyIG8scz1pWzBdLHU9aVsyNDBdO2NvbnN0IGw9MTYsZj02MyxkPTY0O2Zvcih2YXIgaD1jKGUsdCksZz0wO2Q+ZzsrK2cpUltOW2ddXT1oW2ddO3ZhciBwPVJbMF0tbjtuPVJbMF0sMD09cD9hKHJbMF0pOihvPTMyNzY3K3AsYShyW0Fbb11dKSxhKFRbb10pKTtmb3IodmFyIG09NjM7bT4wJiYwPT1SW21dO20tLSk7aWYoMD09bSlyZXR1cm4gYShzKSxuO2Zvcih2YXIgdyx2PTE7bT49djspe2Zvcih2YXIgeT12OzA9PVJbdl0mJm0+PXY7Kyt2KTt2YXIgYj12LXk7aWYoYj49bCl7dz1iPj40O2Zvcih2YXIgUz0xO3c+PVM7KytTKWEodSk7Yj0xNSZifW89MzI3NjcrUlt2XSxhKGlbKGI8PDQpK0Fbb11dKSxhKFRbb10pLHYrK31yZXR1cm4gbSE9ZiYmYShzKSxufWZ1bmN0aW9uIG0oKXtmb3IodmFyIGU9U3RyaW5nLmZyb21DaGFyQ29kZSx0PTA7MjU2PnQ7dCsrKWpbdF09ZSh0KX1mdW5jdGlvbiB3KGUpe2lmKDA+PWUmJihlPTEpLGU+MTAwJiYoZT0xMDApLFAhPWUpe3ZhciBuPTA7bj01MD5lP01hdGguZmxvb3IoNWUzL2UpOk1hdGguZmxvb3IoMjAwLTIqZSksdChuKSxQPWV9fWZ1bmN0aW9uIHYoKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKTtlfHwoZT01MCksbSgpLHIoKSxpKCksbygpLHcoZSk7KG5ldyBEYXRlKS5nZXRUaW1lKCktdH12YXIgeSxiLFMsSSxQLEY9KE1hdGgucm91bmQsTWF0aC5mbG9vciksRD1uZXcgQXJyYXkoNjQpLHg9bmV3IEFycmF5KDY0KSxVPW5ldyBBcnJheSg2NCksQz1uZXcgQXJyYXkoNjQpLFQ9bmV3IEFycmF5KDY1NTM1KSxBPW5ldyBBcnJheSg2NTUzNSksTD1uZXcgQXJyYXkoNjQpLFI9bmV3IEFycmF5KDY0KSxNPVtdLEc9MCxPPTcsXz1uZXcgQXJyYXkoNjQpLEI9bmV3IEFycmF5KDY0KSxFPW5ldyBBcnJheSg2NCksaj1uZXcgQXJyYXkoMjU2KSxrPW5ldyBBcnJheSgyMDQ4KSxOPVswLDEsNSw2LDE0LDE1LDI3LDI4LDIsNCw3LDEzLDE2LDI2LDI5LDQyLDMsOCwxMiwxNywyNSwzMCw0MSw0Myw5LDExLDE4LDI0LDMxLDQwLDQ0LDUzLDEwLDE5LDIzLDMyLDM5LDQ1LDUyLDU0LDIwLDIyLDMzLDM4LDQ2LDUxLDU1LDYwLDIxLDM0LDM3LDQ3LDUwLDU2LDU5LDYxLDM1LDM2LDQ4LDQ5LDU3LDU4LDYyLDYzXSxXPVswLDAsMSw1LDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDBdLEg9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLHo9WzAsMCwyLDEsMywzLDIsNCwzLDUsNSw0LDQsMCwwLDEsMTI1XSxxPVsxLDIsMywwLDQsMTcsNSwxOCwzMyw0OSw2NSw2LDE5LDgxLDk3LDcsMzQsMTEzLDIwLDUwLDEyOSwxNDUsMTYxLDgsMzUsNjYsMTc3LDE5MywyMSw4MiwyMDksMjQwLDM2LDUxLDk4LDExNCwxMzAsOSwxMCwyMiwyMywyNCwyNSwyNiwzNywzOCwzOSw0MCw0MSw0Miw1Miw1Myw1NCw1NSw1Niw1Nyw1OCw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxLDE1MiwxNTMsMTU0LDE2MiwxNjMsMTY0LDE2NSwxNjYsMTY3LDE2OCwxNjksMTcwLDE3OCwxNzksMTgwLDE4MSwxODIsMTgzLDE4NCwxODUsMTg2LDE5NCwxOTUsMTk2LDE5NywxOTgsMTk5LDIwMCwyMDEsMjAyLDIxMCwyMTEsMjEyLDIxMywyMTQsMjE1LDIxNiwyMTcsMjE4LDIyNSwyMjYsMjI3LDIyOCwyMjksMjMwLDIzMSwyMzIsMjMzLDIzNCwyNDEsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTBdLFY9WzAsMCwzLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sWD1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sUT1bMCwwLDIsMSwyLDQsNCwzLDQsNyw1LDQsNCwwLDEsMiwxMTldLFk9WzAsMSwyLDMsMTcsNCw1LDMzLDQ5LDYsMTgsNjUsODEsNyw5NywxMTMsMTksMzQsNTAsMTI5LDgsMjAsNjYsMTQ1LDE2MSwxNzcsMTkzLDksMzUsNTEsODIsMjQwLDIxLDk4LDExNCwyMDksMTAsMjIsMzYsNTIsMjI1LDM3LDI0MSwyMywyNCwyNSwyNiwzOCwzOSw0MCw0MSw0Miw1Myw1NCw1NSw1Niw1Nyw1OCw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw4Myw4NCw4NSw4Niw4Nyw4OCw4OSw5MCw5OSwxMDAsMTAxLDEwMiwxMDMsMTA0LDEwNSwxMDYsMTE1LDExNiwxMTcsMTE4LDExOSwxMjAsMTIxLDEyMiwxMzAsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTY5LDE3MCwxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMTAsMjExLDIxMiwyMTMsMjE0LDIxNSwyMTYsMjE3LDIxOCwyMjYsMjI3LDIyOCwyMjksMjMwLDIzMSwyMzIsMjMzLDIzNCwyNDIsMjQzLDI0NCwyNDUsMjQ2LDI0NywyNDgsMjQ5LDI1MF07dGhpcy5lbmNvZGU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3QmJncodCksTT1uZXcgQXJyYXksRz0wLE89Nyx1KDY1NDk2KSxsKCksZCgpLGYoZS53aWR0aCxlLmhlaWdodCksaCgpLGcoKTt2YXIgaT0wLG89MCxzPTA7Rz0wLE89Nyx0aGlzLmVuY29kZS5kaXNwbGF5TmFtZT1cIl9lbmNvZGVfXCI7Zm9yKHZhciBjLG0sdixQLEYsRCx4LFQsQSxMPWUuZGF0YSxSPWUud2lkdGgsaj1lLmhlaWdodCxOPTQqUixXPTA7aj5XOyl7Zm9yKGM9MDtOPmM7KXtmb3IoRj1OKlcrYyxEPUYseD0tMSxUPTAsQT0wOzY0PkE7QSsrKVQ9QT4+Myx4PTQqKDcmQSksRD1GK1QqTit4LFcrVD49aiYmKEQtPU4qKFcrMStULWopKSxjK3g+PU4mJihELT1jK3gtTis0KSxtPUxbRCsrXSx2PUxbRCsrXSxQPUxbRCsrXSxfW0FdPShrW21dK2tbdisyNTY+PjBdK2tbUCs1MTI+PjBdPj4xNiktMTI4LEJbQV09KGtbbSs3Njg+PjBdK2tbdisxMDI0Pj4wXStrW1ArMTI4MD4+MF0+PjE2KS0xMjgsRVtBXT0oa1ttKzEyODA+PjBdK2tbdisxNTM2Pj4wXStrW1ArMTc5Mj4+MF0+PjE2KS0xMjg7aT1wKF8sVSxpLHksUyksbz1wKEIsQyxvLGIsSSkscz1wKEUsQyxzLGIsSSksYys9MzJ9Vys9OH1pZihPPj0wKXt2YXIgSD1bXTtIWzFdPU8rMSxIWzBdPSgxPDxPKzEpLTEsYShIKX1pZih1KDY1NDk3KSxuKXtmb3IodmFyIHo9TS5sZW5ndGgscT1uZXcgVWludDhBcnJheSh6KSxWPTA7ej5WO1YrKylxW1ZdPU1bVl0uY2hhckNvZGVBdCgpO009W107KG5ldyBEYXRlKS5nZXRUaW1lKCktcjtyZXR1cm4gcX12YXIgWD1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIrYnRvYShNLmpvaW4oXCJcIikpO009W107KG5ldyBEYXRlKS5nZXRUaW1lKCktcjtyZXR1cm4gWH0sdigpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXRoaXM7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwi5rKh5pyJ5pS25Yiw5Zu+54mH77yM5Y+v6IO955qE6Kej5Yaz5pa55qGI77yaaHR0cHM6Ly9naXRodWIuY29tL3RoaW5rMjAxMS9sb2NhbFJlc2l6ZUlNRy9pc3N1ZXMvN1wiKTt0PXR8fHt9LG4uZGVmYXVsdHM9e3dpZHRoOm51bGwsaGVpZ2h0Om51bGwsZmllbGROYW1lOlwiZmlsZVwiLHF1YWxpdHk6Ljd9LG4uZmlsZT1lO2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuLmRlZmF1bHRzW3JdPXRbcl0pO3JldHVybiB0aGlzLmluaXQoKX1mdW5jdGlvbiBpKGUpe3ZhciB0PW51bGw7cmV0dXJuIHQ9ZT9bXS5maWx0ZXIuY2FsbChkb2N1bWVudC5zY3JpcHRzLGZ1bmN0aW9uKHQpe3JldHVybi0xIT09dC5zcmMuaW5kZXhPZihlKX0pWzBdOmRvY3VtZW50LnNjcmlwdHNbZG9jdW1lbnQuc2NyaXB0cy5sZW5ndGgtMV0sdD90LnNyYy5zdWJzdHIoMCx0LnNyYy5sYXN0SW5kZXhPZihcIi9cIikpOm51bGx9ZnVuY3Rpb24gbyhlKXt2YXIgdDt0PWUuc3BsaXQoXCIsXCIpWzBdLmluZGV4T2YoXCJiYXNlNjRcIik+PTA/YXRvYihlLnNwbGl0KFwiLFwiKVsxXSk6dW5lc2NhcGUoZS5zcGxpdChcIixcIilbMV0pO2Zvcih2YXIgbj1lLnNwbGl0KFwiLFwiKVswXS5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCI7XCIpWzBdLHI9bmV3IFVpbnQ4QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylyW2ldPXQuY2hhckNvZGVBdChpKTtyZXR1cm4gbmV3IHMuQmxvYihbci5idWZmZXJdLHt0eXBlOm59KX1uLnA9aShcImxyelwiKStcIi9cIix3aW5kb3cuVVJMPXdpbmRvdy5VUkx8fHdpbmRvdy53ZWJraXRVUkw7dmFyIGE9bigxKSxzPW4oNCksdT1uKDUpLGM9ZnVuY3Rpb24oZSl7dmFyIHQ9L09TIChcXGQpXy4qIGxpa2UgTWFjIE9TIFgvZy5leGVjKGUpLG49L0FuZHJvaWQgKFxcZC4qPyk7L2cuZXhlYyhlKXx8L0FuZHJvaWRcXC8oXFxkLio/KSAvZy5leGVjKGUpO3JldHVybntvbGRJT1M6dD8rdC5wb3AoKTw4OiExLG9sZEFuZHJvaWQ6bj8rbi5wb3AoKS5zdWJzdHIoMCwzKTw0LjU6ITEsaU9TOi9cXChpW147XSs7KCBVOyk/IENQVS4rTWFjIE9TIFgvLnRlc3QoZSksYW5kcm9pZDovQW5kcm9pZC9nLnRlc3QoZSksbVFRQnJvd3NlcjovTVFRQnJvd3Nlci9nLnRlc3QoZSl9fShuYXZpZ2F0b3IudXNlckFnZW50KTtyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZmlsZSxuPVwic3RyaW5nXCI9PXR5cGVvZiB0LHI9L15kYXRhOi8udGVzdCh0KSxpPW5ldyBJbWFnZSx1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksYz1uP3Q6VVJMLmNyZWF0ZU9iamVjdFVSTCh0KTtpZihlLmltZz1pLGUuYmxvYj1jLGUuY2FudmFzPXUsbj9lLmZpbGVOYW1lPXI/XCJiYXNlNjQuanBnXCI6dC5zcGxpdChcIi9cIikucG9wKCk6ZS5maWxlTmFtZT10Lm5hbWUsIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dCl0aHJvdyBuZXcgRXJyb3IoXCLmtY/op4jlmajkuI3mlK/mjIFjYW52YXNcIik7cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKG4sYSl7aS5vbmVycm9yPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IEVycm9yKFwi5Yqg6L295Zu+54mH5paH5Lu25aSx6LSlXCIpO3Rocm93IGEoZSksZX0saS5vbmxvYWQ9ZnVuY3Rpb24oKXtlLl9nZXRCYXNlNjQoKS50aGVuKGZ1bmN0aW9uKGUpe2lmKGUubGVuZ3RoPDEwKXt2YXIgdD1uZXcgRXJyb3IoXCLnlJ/miJBiYXNlNjTlpLHotKVcIik7dGhyb3cgYSh0KSx0fXJldHVybiBlfSkudGhlbihmdW5jdGlvbihyKXt2YXIgaT1udWxsO1wib2JqZWN0XCI9PXR5cGVvZiBlLmZpbGUmJnIubGVuZ3RoPmUuZmlsZS5zaXplPyhpPW5ldyBGb3JtRGF0YSx0PWUuZmlsZSk6KGk9bmV3IHMuRm9ybURhdGEsdD1vKHIpKSxpLmFwcGVuZChlLmRlZmF1bHRzLmZpZWxkTmFtZSx0LGUuZmlsZU5hbWUucmVwbGFjZSgvXFwuLisvZyxcIi5qcGdcIikpLG4oe2Zvcm1EYXRhOmksZmlsZUxlbjordC5zaXplLGJhc2U2NDpyLGJhc2U2NExlbjpyLmxlbmd0aCxvcmlnaW46ZS5maWxlLGZpbGU6dH0pO2Zvcih2YXIgYSBpbiBlKWUuaGFzT3duUHJvcGVydHkoYSkmJihlW2FdPW51bGwpO1VSTC5yZXZva2VPYmplY3RVUkwoZS5ibG9iKX0pfSwhciYmKGkuY3Jvc3NPcmlnaW49XCIqXCIpLGkuc3JjPWN9KX0sci5wcm90b3R5cGUuX2dldEJhc2U2ND1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxuPWUuZmlsZSxyPWUuY2FudmFzO3JldHVybiBuZXcgYShmdW5jdGlvbihpKXt0cnl7dS5nZXREYXRhKFwib2JqZWN0XCI9PXR5cGVvZiBuP246dCxmdW5jdGlvbigpe2Uub3JpZW50YXRpb249dS5nZXRUYWcodGhpcyxcIk9yaWVudGF0aW9uXCIpLGUucmVzaXplPWUuX2dldFJlc2l6ZSgpLGUuY3R4PXIuZ2V0Q29udGV4dChcIjJkXCIpLHIud2lkdGg9ZS5yZXNpemUud2lkdGgsci5oZWlnaHQ9ZS5yZXNpemUuaGVpZ2h0LGUuY3R4LmZpbGxTdHlsZT1cIiNmZmZcIixlLmN0eC5maWxsUmVjdCgwLDAsci53aWR0aCxyLmhlaWdodCksYy5vbGRJT1M/ZS5fY3JlYXRlQmFzZTY0Rm9yT2xkSU9TKCkudGhlbihpKTplLl9jcmVhdGVCYXNlNjQoKS50aGVuKGkpfSl9Y2F0Y2gobyl7dGhyb3cgbmV3IEVycm9yKG8pfX0pfSxyLnByb3RvdHlwZS5fY3JlYXRlQmFzZTY0Rm9yT2xkSU9TPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLHI9ZS5jYW52YXMsaT1lLmRlZmF1bHRzLG89ZS5vcmllbnRhdGlvbjtyZXR1cm4gbmV3IGEoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKCl7dmFyIGE9W24oNildOyhmdW5jdGlvbihuKXt2YXIgYT1uZXcgbih0KTtcIjU2NzhcIi5pbmRleE9mKG8pPi0xP2EucmVuZGVyKHIse3dpZHRoOnIuaGVpZ2h0LGhlaWdodDpyLndpZHRoLG9yaWVudGF0aW9uOm99KTphLnJlbmRlcihyLHt3aWR0aDpyLndpZHRoLGhlaWdodDpyLmhlaWdodCxvcmllbnRhdGlvbjpvfSksZShyLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixpLnF1YWxpdHkpKX0pLmFwcGx5KG51bGwsYSl9KCl9KX0sci5wcm90b3R5cGUuX2NyZWF0ZUJhc2U2ND1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnJlc2l6ZSxyPWUuaW1nLGk9ZS5jYW52YXMsbz1lLmN0eCxzPWUuZGVmYXVsdHMsdT1lLm9yaWVudGF0aW9uO3N3aXRjaCh1KXtjYXNlIDM6by5yb3RhdGUoMTgwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LndpZHRoLC10LmhlaWdodCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDY6by5yb3RhdGUoOTAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsMCwtdC53aWR0aCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDg6by5yb3RhdGUoMjcwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LmhlaWdodCwwLHQuaGVpZ2h0LHQud2lkdGgpO2JyZWFrO2Nhc2UgMjpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5kcmF3SW1hZ2UociwwLDAsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA0Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSgxODAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQud2lkdGgsLXQuaGVpZ2h0LHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNTpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoOTAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsMCwtdC53aWR0aCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDc6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDI3MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC5oZWlnaHQsMCx0LmhlaWdodCx0LndpZHRoKTticmVhaztkZWZhdWx0Om8uZHJhd0ltYWdlKHIsMCwwLHQud2lkdGgsdC5oZWlnaHQpfXJldHVybiBuZXcgYShmdW5jdGlvbihlKXtjLm9sZEFuZHJvaWR8fGMubVFRQnJvd3Nlcnx8IW5hdmlnYXRvci51c2VyQWdlbnQ/IWZ1bmN0aW9uKCl7dmFyIHQ9W24oNyldOyhmdW5jdGlvbih0KXt2YXIgbj1uZXcgdCxyPW8uZ2V0SW1hZ2VEYXRhKDAsMCxpLndpZHRoLGkuaGVpZ2h0KTtlKG4uZW5jb2RlKHIsMTAwKnMucXVhbGl0eSkpfSkuYXBwbHkobnVsbCx0KX0oKTplKGkudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLHMucXVhbGl0eSkpfSl9LHIucHJvdG90eXBlLl9nZXRSZXNpemU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcsbj1lLmRlZmF1bHRzLHI9bi53aWR0aCxpPW4uaGVpZ2h0LG89ZS5vcmllbnRhdGlvbixhPXt3aWR0aDp0LndpZHRoLGhlaWdodDp0LmhlaWdodH07aWYoXCI1Njc4XCIuaW5kZXhPZihvKT4tMSYmKGEud2lkdGg9dC5oZWlnaHQsYS5oZWlnaHQ9dC53aWR0aCksYS53aWR0aDxyfHxhLmhlaWdodDxpKXJldHVybiBhO3ZhciBzPWEud2lkdGgvYS5oZWlnaHQ7Zm9yKHImJmk/cz49ci9pP2Eud2lkdGg+ciYmKGEud2lkdGg9cixhLmhlaWdodD1NYXRoLmNlaWwoci9zKSk6YS5oZWlnaHQ+aSYmKGEuaGVpZ2h0PWksYS53aWR0aD1NYXRoLmNlaWwoaSpzKSk6cj9yPGEud2lkdGgmJihhLndpZHRoPXIsYS5oZWlnaHQ9TWF0aC5jZWlsKHIvcykpOmkmJmk8YS5oZWlnaHQmJihhLndpZHRoPU1hdGguY2VpbChpKnMpLGEuaGVpZ2h0PWkpO2Eud2lkdGg+PTMyNjR8fGEuaGVpZ2h0Pj0yNDQ4OylhLndpZHRoKj0uOCxhLmhlaWdodCo9Ljg7cmV0dXJuIGF9LHdpbmRvdy5scno9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHIoZSx0KX0sd2luZG93Lmxyei52ZXJzaW9uPVwiNC45LjQwXCIsXG5lLmV4cG9ydHM9d2luZG93Lmxyen1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHJ6LmFsbC5idW5kbGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbHJ6L2Rpc3QvbHJ6LmFsbC5idW5kbGUuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgaE1ldGhvZHMgZnJvbSAnLi9oYW5kbGUtbWV0aG9kcydcbmltcG9ydCBhTWV0aG9kcyBmcm9tICcuL2Fzc2lzdC1tZXRob2RzJ1xuT2JqZWN0LmFzc2lnbihJbnN0YW5jZS5wcm90b3R5cGUsIGhNZXRob2RzLCBhTWV0aG9kcylcbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9pbmRleC5qcyIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5jb25zdCBtZXRob2RzID0ge1xuICAvKlxuICAgKiBmdW5jIGNyZWF0ZSBhIG5ldyByb3cgZWxlbWVudFxuICAgKiBAcGFyYW0ge29ian0gZGF0YVxuICAgKiAgICAgICAgICB0YWcge3N0cn1cbiAgICogICAgICAgICAgY29udGVudGVkaXRhYmxlIHtib29sZWFufSBkZWZhdWx0OiB0cnVlXG4gICAqICAgICAgICAgIGlkIHtib29sZWFufSB3aGV0aGVyIG5lZWQgYSBpZCBkZWZhdWx0OiBmYWxzZVxuICAgKiAgICAgICAgICBiciB7Ym9vbGVhbn0gd2hldGhlciBuZWVkIGEgYnIgZWxlbWVudCBhZnRlciBjdXJyZW50IHJvdyBlbGVtZW50IGRlZmF1bHQ6IGZhbHNlXG4gICAqIEByZXR1cm4gIHtub2RlfVxuICAgKiovXG4gIG5ld1JvdyAoZGF0YSA9IHt9KSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZyB8fCBjb25zdGFudC5ST1dfVEFHKVxuICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICByb3cuZGF0YXNldC5lZGl0b3JSb3cgPSBtZXRob2RzLmNyZWF0ZVJhbmRvbUlkKCdyb3cnKVxuICAgIH1cbiAgICBpZiAoZGF0YS5icikge1xuICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoYnIpXG4gICAgfVxuICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGRhdGEuY29udGVudGVkaXRhYmxlICE9PSBmYWxzZSlcbiAgICByZXR1cm4gcm93XG4gIH0sXG4gIC8vIGdldCBzZWxlY3Rpb25cbiAgZ2V0U2VsZWN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgaW5zZXJ0IGEgZWxlbWVudCBhZnRlciB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0gbmV3RWxlbWVudCB7bm9kZX1cbiAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQge25vZGV9XG4gICAqKi9cbiAgaW5zZXJ0QWZ0ZXIgKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudC5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBmdW5jIGNyZWF0ZSBhIHJhbmRvbSBpZFxuICAgKiBAcGFyYW0gcHJlZmZpeCB7c3RyfSBpZCdzIHByZWZmaXhcbiAgICogQHJldHVybiBpZFxuICAgKiovXG4gIGNyZWF0ZVJhbmRvbUlkIChwcmVmZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZmaXggfHwgJ2lkJ30tJHtNYXRoLnJhbmRvbSgpICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpfWBcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGVkaXQgem9uZSBlbGVtZW50XG4gICAqKi9cbiAgZWRpdFpvbmUgKCkge1xuICAgIGlmIChtZXRob2RzLmVkaXRab25lX2NhY2hlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZVxuICAgIH1cbiAgICBtZXRob2RzLmVkaXRab25lX2NhY2hlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yPVwiY29udGVudFwiXScpXG4gICAgcmV0dXJuIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGVcbiAgfSxcbiAgLypcbiAgICogc2V0IHJhbmdlIGF0IHRhcmdldCBub2RlXG4gICAqKi9cbiAgc2V0UmFuZ2VBdCAobm9kZSwgY2hlY2tBbGwpIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICBpZiAoY2hlY2tBbGwpIHtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIDApXG4gICAgICBsZXQgZW5kID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA/IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggOiAobm9kZS5sZW5ndGggPyBub2RlLmxlbmd0aCA6IDApXG4gICAgICByYW5nZS5zZXRFbmQobm9kZSwgZW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZS5zZXRTdGFydChub2RlLCAwKVxuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIDApXG4gICAgfVxuICAgIGxldCBzZWxlY3Rpb24gPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuICB9LFxuICBnZXRSYW5nZSAoKSB7XG4gICAgbGV0IHMgPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMucmFuZ2VDb3VudCkge1xuICAgICAgcmV0dXJuIHMuZ2V0UmFuZ2VBdCgwKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9hc3Npc3QtbWV0aG9kcy5qcyIsImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuLypcbiAqIEluc3BlY3QgYW5kIGhpZ2hsaWdodCBtb2R1bGVcbiAqKi9cbmNsYXNzIEluc3BlY3RvciB7XG4gIGNvbnN0cnVjdG9yIChtb2R1bGVOYW1lKSB7XG4gICAgdGhpcy5tb2R1bGVOYW1lID0gbW9kdWxlTmFtZVxuICB9XG5cbiAgYWRkICh0eXBlLCBwYXJhbSkge1xuICAgIGxldCBtb2R1bGVOYW1lID0gdGhpcy5tb2R1bGVOYW1lXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVOYW1lIG11c3QgYmUgc3RyaW5nJylcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciB0YWcgY2FuIG9ubHkgcmVjZWl2ZSBhIHN0cmluZyBwYXJhbSB3aGljaCBzdGFuZCBmb3IgdGFnIG5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci50YWdNYXBbcGFyYW0udG9VcHBlckNhc2UoKV0gPSBtb2R1bGVOYW1lXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGlmICghaXNPYmoocGFyYW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIHN0eWxlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5zdHlsZXNbbW9kdWxlTmFtZV0gPSBwYXJhbVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0cmlidXRlJzpcbiAgICAgICAgaWYgKCFpc09iaihwYXJhbSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3IgYXR0cmlidXRlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdID0gcGFyYW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBpbnNwZWN0b3IgdHlwZScpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpbnNwZWN0X3RhZyAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBsZXQgaW5zcGVjdFJlc3VsdCA9IEluc3BlY3Rvci50YWdNYXBbbm9kZS5ub2RlTmFtZV1cbiAgICAgIGlmIChpbnNwZWN0UmVzdWx0ICYmICFyZXN1bHQuaW5jbHVkZXMoaW5zcGVjdFJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5zcGVjdFJlc3VsdClcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9zdHlsZSAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBpZiAoIW5vZGUuc3R5bGUpIGJyZWFrXG4gICAgICBPYmplY3Qua2V5cyhJbnNwZWN0b3Iuc3R5bGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlU3R5bGUgPSBJbnNwZWN0b3Iuc3R5bGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZVN0eWxlKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCBjdXJWYWx1ZSA9IG1vZHVsZVN0eWxlW2l0ZW1dXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJWYWx1ZSA9PT0gJ3N0cmluZycgJiYgbm9kZS5zdHlsZVtpdGVtXSA9PT0gY3VyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IGN1clZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbHVlKSkge1xuICAgICAgICAgICAgY3VyVmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZS5zdHlsZVtpdGVtXSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9hdHRyaWJ1dGUgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgaWYgKCFub2RlLmdldEF0dHJpYnV0ZSkgYnJlYWtcbiAgICAgIE9iamVjdC5rZXlzKEluc3BlY3Rvci5hdHRyaWJ1dGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlQXR0ciA9IEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZUF0dHIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gbW9kdWxlQXR0cltpdGVtXVxuICAgICAgICAgIGxldCBub2RlVmFsID0gbm9kZS5nZXRBdHRyaWJ1dGUoaXRlbSlcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGVWYWwgPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBub2RlVmFsID09PSB2YWx1ZSB8fCBub2RlVmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5JbnNwZWN0b3IudGFnTWFwID0ge31cbkluc3BlY3Rvci5zdHlsZXMgPSB7fVxuSW5zcGVjdG9yLmF0dHJpYnV0ZXMgPSB7fVxuSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zID0ge31cblxuSW5zcGVjdG9yLnJ1biA9ICh0eXBlLCBub2RlTGlzdCkgPT4ge1xuICBsZXQgZm4gPSBJbnNwZWN0b3IucHJvdG90eXBlWydpbnNwZWN0XycgKyB0eXBlXVxuICBsZXQgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBBcnJheS5pc0FycmF5KG5vZGVMaXN0KSkge1xuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICByZXN1bHQucHVzaChmbihub2RlKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUgPSBmdW5jdGlvbiAobGlzdCkge1xuICAvLyBtZXJnZSBzYW1lIG1vZHVsZSBpbnNwZWN0IHJlc3VsdFxuICBsZXQgc2FtZVN0eWxlTWFwID0ge31cbiAgbGlzdC5mb3JFYWNoKG0gPT4ge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhbWVTdHlsZU1hcFttXSA9IHNhbWVTdHlsZU1hcFttXSA/IHNhbWVTdHlsZU1hcFttXSArIDEgOiAxXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG0pKSB7XG4gICAgICBtID0gQXJyYXkuZnJvbShuZXcgU2V0KG0pKVxuICAgICAgbS5mb3JFYWNoKGFtID0+IHtcbiAgICAgICAgc2FtZVN0eWxlTWFwW2FtXSA9IHNhbWVTdHlsZU1hcFthbV0gPyBzYW1lU3R5bGVNYXBbYW1dICsgMSA6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICBsZXQgbWVyZ2VkU3R5bGUgPSBbXVxuICBPYmplY3Qua2V5cyhzYW1lU3R5bGVNYXApLmZvckVhY2gobSA9PiB7XG4gICAgaWYgKHNhbWVTdHlsZU1hcFttXSA9PT0gbGlzdC5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFN0eWxlLnB1c2gobSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtZXJnZWRTdHlsZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS1pbnNwZWN0L2luZGV4LmpzIiwiaW1wb3J0IHBvbHlmaWxsIGZyb20gJy4vdXRpbC9wb2x5ZmlsbC1pZSdcbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgYnVpbGRJblNob3J0Y3V0IGZyb20gJy4vc2hvcnRjdXQnXG5pbXBvcnQgY29uc3RhbnRDb25maWcgZnJvbSAnLi9jb25zdGFudC1jb25maWcnXG5pbXBvcnQgZWRpdG9yIGZyb20gJy4vZWRpdG9yL2VkaXRvcidcbmltcG9ydCBidWlsZEluQ29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcbmltcG9ydCBpbml0RXhjbHVkZVJ1bGUgZnJvbSAnLi9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMnXG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vbW9kdWxlLWluc3BlY3QnXG5pbXBvcnQgaTE4blpoQ24gZnJvbSAnLi9pMThuL3poLWNuJ1xuaW1wb3J0IGkxOG5FblVzIGZyb20gJy4vaTE4bi9lbi11cydcbmltcG9ydCB7XG4gIG1peGluLFxuICBpc09ialxufSBmcm9tICcuL3V0aWwnXG5cbnBvbHlmaWxsKClcblxuY2xhc3MgRWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbW9kdWxlcyA9IFsuLi5idWlsZEluTW9kdWxlc11cbiAgICBsZXQgcmVzZXJ2ZWROYW1lcyA9IHt9XG4gICAgbW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgaWYgKG0ubmFtZSkge1xuICAgICAgICByZXNlcnZlZE5hbWVzW20ubmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBjb21wb25lbnRzID0ge31cbiAgICBjb25zdCBtb2R1bGVzTWFwID0ge31cblxuICAgIC8vIGV4dGVuZGVkIG1vZHVsZXNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmV4dGVuZE1vZHVsZXMpKSB7XG4gICAgICBvcHRpb25zLmV4dGVuZE1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICBpZiAobW9kdWxlLm5hbWUgJiYgIXJlc2VydmVkTmFtZXNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgICAgbW9kdWxlcy5wdXNoKG1vZHVsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4dGVuZGVkIG1vZHVsZSBtdXN0IGhhdmUgYSBuYW1lIGFuZCBzaG91bGQgbm90IGJlIHRoZSBzYW1lIGFzIGJ1aWxkSW4gbW9kdWxlJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtb2R1bGVzIGluIHVzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMubW9kdWxlcykpIHtcbiAgICAgIGxldCBtID0gW11cbiAgICAgIG9wdGlvbnMubW9kdWxlcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVzXFwncyBpdGVtIG11c3QgYmUgc3RyaW5nJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICBpZiAobW9kdWxlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIG0ucHVzaChtb2R1bGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG1vZHVsZXMgPSBtXG4gICAgfVxuXG4gICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAvLyBjb25maWdcbiAgICAgIGxldCBjdXJDb25maWcgPSBvcHRpb25zW21vZHVsZS5uYW1lXVxuICAgICAgbGV0IG1vZHVsZUNvbmZpZyA9IG1vZHVsZVxuICAgICAgaWYgKGlzT2JqKGN1ckNvbmZpZykgJiYgaXNPYmoobW9kdWxlQ29uZmlnKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKG1vZHVsZUNvbmZpZywgY3VyQ29uZmlnKVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IG51bGxcbiAgICAgIG1vZHVsZS5mb3JiaWRkZW4gPSBudWxsXG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxldCBpbnNwZWN0b3IgPSBuZXcgSW5zcGVjdG9yKG1vZHVsZS5uYW1lKVxuICAgICAgICBtb2R1bGUuaW5zcGVjdChpbnNwZWN0b3IuYWRkLmJpbmQoaW5zcGVjdG9yKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS50eXBlID0gJ2ZuJ1xuICAgICAgfVxuICAgICAgbW9kdWxlLmV4Y2x1ZGUgPSBpbml0RXhjbHVkZVJ1bGUobW9kdWxlLCBtb2R1bGVzKVxuXG4gICAgICBpZiAobW9kdWxlLnRhYikge1xuICAgICAgICBtb2R1bGUudGFiLm1vZHVsZSA9IG1vZHVsZVxuXG4gICAgICAgIC8vIGFkZCBhY3RpdmVJdGVtIHByb3BcbiAgICAgICAgbW9kdWxlLnRhYi5wcm9wcyA9IG1vZHVsZS50YWIucHJvcHMgPyBPYmplY3QuYXNzaWduKG1vZHVsZS50YWIucHJvcHMsIHthY3RpdmVJdGVtOiBbU3RyaW5nLCBCb29sZWFuXSwgZm9yYmlkZGVuOiBCb29sZWFufSkgOiB7YWN0aXZlSXRlbTogW1N0cmluZywgQm9vbGVhbl0sIGZvcmJpZGRlbjogQm9vbGVhbn1cbiAgICAgICAgbW9kdWxlLnRhYk5hbWUgPSBgdGFiLSR7bW9kdWxlLm5hbWV9YFxuICAgICAgICBjb21wb25lbnRzW21vZHVsZS50YWJOYW1lXSA9IG1vZHVsZS50YWJcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmljb25zICYmIG9wdGlvbnMuaWNvbnNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgIG1vZHVsZS5pY29uID0gb3B0aW9ucy5pY29uc1ttb2R1bGUubmFtZV1cbiAgICAgIH1cbiAgICAgIG1vZHVsZS5oYXNUYWIgPSAhIW1vZHVsZS50YWJcblxuICAgICAgLy8gcHJldmVudCB2dWUgc3luY1xuICAgICAgZGVsZXRlIG1vZHVsZS50YWJcblxuICAgICAgbW9kdWxlc01hcFttb2R1bGUubmFtZV0gPSBtb2R1bGVcbiAgICB9KVxuXG4gICAgLy8gaTE4blxuICAgIGNvbnN0IGkxOG4gPSB7J3poLWNuJzogaTE4blpoQ24sICdlbi11cyc6IGkxOG5FblVzfVxuICAgIGNvbnN0IGN1c3RvbUkxOG4gPSBvcHRpb25zLmkxOG4gfHwge31cbiAgICBPYmplY3Qua2V5cyhjdXN0b21JMThuKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGkxOG5ba2V5XSA9IGkxOG5ba2V5XSA/IE9iamVjdC5hc3NpZ24oaTE4bltrZXldLCBjdXN0b21JMThuW2tleV0pIDogY3VzdG9tSTE4bltrZXldXG4gICAgfSlcbiAgICBjb25zdCBsYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgfHwgJ2VuLXVzJ1xuICAgIGNvbnN0IGxvY2FsZSA9IGkxOG5bbGFuZ3VhZ2VdXG5cbiAgICAvLyBzaG9ydGN1dFxuICAgIG9wdGlvbnMuc2hvcnRjdXQgPSBPYmplY3QuYXNzaWduKGJ1aWxkSW5TaG9ydGN1dCwgb3B0aW9ucy5zaG9ydGN1dCB8fCB7fSlcbiAgICBjb25zdCBzaG9ydGN1dCA9IHt9XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5zaG9ydGN1dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSBvcHRpb25zLnNob3J0Y3V0W2tleV1cbiAgICAgIGxldCBrZXlDb2RlID0gaXRlbS5rZXlDb2RlXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXSA9IHNob3J0Y3V0W2tleUNvZGVdIHx8IFtdXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXS5wdXNoKGl0ZW0pXG4gICAgICBpdGVtLm5hbWUgPSBrZXlcbiAgICB9KVxuXG4gICAgLy8gbWVyZ2UgY29tbWFuZHNcbiAgICBpZiAoaXNPYmoob3B0aW9ucy5jb21tYW5kcykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYnVpbGRJbkNvbW1hbmRzLCBvcHRpb25zLmNvbW1hbmRzKVxuICAgIH1cblxuICAgIC8vIHNwZWxsY2hlY2tcbiAgICBjb25zdCBzcGVsbGNoZWNrID0gb3B0aW9ucy5zcGVsbGNoZWNrIHx8IGZhbHNlXG5cbiAgICBjb25zdCBjb21wbyA9IG1peGluKGVkaXRvciwge1xuICAgICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7bW9kdWxlcywgbG9jYWxlLCBzaG9ydGN1dCwgbW9kdWxlc01hcCwgc3BlbGxjaGVjaywgY29uc3RhbnRDb25maWd9XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50c1xuICAgIH0pXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb21wbylcbiAgfVxuXG4gIC8qKlxuICAgKiBnbG9iYWwgaW5zdGFsbFxuICAgKiBAcGFyYW0gVnVlXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgaW5zdGFsbChWdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIFZ1ZS5jb21wb25lbnQob3B0aW9ucy5uYW1lIHx8ICdteS12dWUtZWRpdG9yJywgbmV3IEVkaXRvcihvcHRpb25zKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcblxuLy8gdG8gY2hhbmdlIEJhYmVsNiBleHBvcnQncyByZXN1bHRcbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgICAgICAgICB2YWx1ZShzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IE9iamVjdCh0aGlzKVxuXG4gICAgICAgICAgICAgICAgLy8gMi4gTGV0IGxlbiBiZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvLmxlbmd0aCA+Pj4gMFxuXG4gICAgICAgICAgICAgICAgLy8gMy4gSWYgbGVuIGlzIDAsIHJldHVybiBmYWxzZS5cbiAgICAgICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXG4gICAgICAgICAgICAgICAgLy8gICAgKElmIGZyb21JbmRleCBpcyB1bmRlZmluZWQsIHRoaXMgc3RlcCBwcm9kdWNlcyB0aGUgdmFsdWUgMC4pXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IGZyb21JbmRleCB8IDBcblxuICAgICAgICAgICAgICAgIC8vIDUuIElmIG4g4omlIDAsIHRoZW5cbiAgICAgICAgICAgICAgICAvLyAgYS4gTGV0IGsgYmUgbi5cbiAgICAgICAgICAgICAgICAvLyA2LiBFbHNlIG4gPCAwLFxuICAgICAgICAgICAgICAgIC8vICBhLiBMZXQgayBiZSBsZW4gKyBuLlxuICAgICAgICAgICAgICAgIC8vICBiLiBJZiBrIDwgMCwgbGV0IGsgYmUgMC5cbiAgICAgICAgICAgICAgICBsZXQgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMClcblxuICAgICAgICAgICAgICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBlbGVtZW50SyBiZSB0aGUgcmVzdWx0IG9mID8gR2V0KE8sICEgVG9TdHJpbmcoaykpLlxuICAgICAgICAgICAgICAgICAgICAvLyBiLiBJZiBTYW1lVmFsdWVaZXJvKHNlYXJjaEVsZW1lbnQsIGVsZW1lbnRLKSBpcyB0cnVlLCByZXR1cm4gdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gYy4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiA9PT0gcHJvdmlkZXMgdGhlIGNvcnJlY3QgXCJTYW1lVmFsdWVaZXJvXCIgY29tcGFyaXNvbiBuZWVkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaysrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gOC4gUmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIHRleHQuY29udGFpbnMoKVxuICAgIGlmICghVGV4dC5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAgICAgVGV4dC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcyA9PT0gbm9kZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wb2x5ZmlsbC1pZS5qcyIsImltcG9ydCBhbGlnbiBmcm9tICcuL2FsaWduL2luZGV4J1xuaW1wb3J0IGZvbnQgZnJvbSAnLi9mb250L2luZGV4J1xuaW1wb3J0IGZ1bGxTY3JlZW4gZnJvbSAnLi9mdWxsLXNjcmVlbi9pbmRleCdcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlL2luZGV4J1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IGl0YWxpYyBmcm9tICcuL2l0YWxpYydcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQgcXVvdGUgZnJvbSAnLi9xdW90ZSdcbmltcG9ydCBpbmRlbnQgZnJvbSAnLi9pbmRlbnQnXG5pbXBvcnQgb3V0ZGVudCBmcm9tICcuL291dGRlbnQnXG5pbXBvcnQgdWwgZnJvbSAnLi91bCdcbmltcG9ydCBvbCBmcm9tICcuL29sJ1xuaW1wb3J0IGxpbmV0aHJvdWdoIGZyb20gJy4vbGluZXRocm91Z2gnXG5pbXBvcnQgaXRvZG8gZnJvbSAnLi9pY291cnQtdG9kbydcbmltcG9ydCBmb3JlQ29sb3IgZnJvbSAnLi9mb3JlLWNvbG9yJ1xuXG5cbi8qKlxuICogYnVpbGQtaW4gbW9kdWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZm9udCxcbiAgYWxpZ24sXG4gIGltYWdlLFxuICBmdWxsU2NyZWVuLFxuICBib2xkLFxuICBpdGFsaWMsXG4gIHVuZGVybGluZSxcbiAgdG9kbyxcbiAgcXVvdGUsXG4gIGluZGVudCxcbiAgb3V0ZGVudCxcbiAgdWwsXG4gIG9sLFxuICBsaW5ldGhyb3VnaCxcbiAgaXRvZG8sXG4gIGZvcmVDb2xvclxuXVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhbGlnbicsXG4gIGljb246ICdpdWktaWNvbiBpdWktaWNvbi1hbGlnbicsXG4gIHRhYixcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdzdHlsZScsIHtcbiAgICAgICd0ZXh0QWxpZ24nOiBbJ2NlbnRlcicsICdyaWdodCddXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlSXRlbSAobikge1xuICAgICAgbiA9IG4gfHwgJ2xlZnQnXG4gICAgICBsZXQgbWFwID0ge1xuICAgICAgICAnbGVmdCc6IDIsXG4gICAgICAgICdjZW50ZXInOiAwLFxuICAgICAgICAncmlnaHQnOiAxXG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBtYXBbbl1cbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy5jaG9vc2VkID0ge1xuICAgICAgICBpY29uOiAnYWxpZ24tJyArIG4sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuYWxpZ25NYXBba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsaWduTWFwOiB7XG4gICAgICAgICflsYXkuK0nOiAnanVzdGlmeUNlbnRlcicsXG4gICAgICAgICflsYXlj7MnOiAnanVzdGlmeVJpZ2h0JyxcbiAgICAgICAgJ+WxheW3pic6ICdqdXN0aWZ5TGVmdCdcbiAgICAgIH0sXG4gICAgICBjaG9vc2VkOiB7fVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldEFsaWduIChpbmRleCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLmFsaWduTWFwKVxuICAgICAgbGV0IGtleSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQodGhpcy5hbGlnbk1hcFtrZXldKVxuICAgICAgdGhpcy4kcGFyZW50LnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgdGhpcy4kcGFyZW50Lm1vZHVsZUluc3BlY3QoKVxuICAgIH0sXG4gICAgY2hhbmdlQWxpZ24gKCkge1xuICAgICAgaWYgKHRoaXMuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIGxldCBwcmVfaW5kZXggPSAhaXNOYU4odGhpcy5jaG9vc2VkLmluZGV4KSA/IHRoaXMuY2hvb3NlZC5pbmRleCA6IC0xXG4gICAgICBsZXQgbGVuID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcCkubGVuZ3RoXG4gICAgICBsZXQgdGFyZ2V0X2luZGV4XG4gICAgICBpZiAocHJlX2luZGV4ICsgMSA9PT0gbGVuKSB7XG4gICAgICAgIHRhcmdldF9pbmRleCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldF9pbmRleCA9ICsrcHJlX2luZGV4XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFsaWduKHRhcmdldF9pbmRleClcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSBjbGFzcz0nYnRuJyBAY2xpY2s9XFxcImNoYW5nZUFsaWduKClcXFwiIDp0aXRsZT1cXFwiJ+Wvuem9kOaWueW8jzonICsgKGNob29zZWQua2V5IHx8ICflsYXlt6YnKVxcXCI+XFxuICA8c3BhbiBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IHN1YlxcXCIgY2xhc3M9XFxcImZhXFxcIiA6Y2xhc3M9XFxcIidmYS0nICsgKGNob29zZWQuaWNvbiB8fCAnYWxpZ24tbGVmdCcpXFxcIj48L3NwYW4+XFxuPC9saT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZm9udCcsXG4gIHRhYixcbiAgY29uZmlnLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3N0eWxlJywge1xuICAgICAgZm9udFNpemU6IFsneHgtbGFyZ2UnLCAneC1sYXJnZScsICdsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnXVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmltcG9ydCAnLi9zdHlsZS5zdHlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLmZvbnRBdHRyTWFwW25dXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaG9vc2VkID0gdGhpcy5mb250QXR0ck1hcFt0aGlzLmZvbnRBdHRyTWFwWydkZWZhdWx0J11dXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEF0dHJNYXA6IHt9LFxuICAgICAgY3VyTW9kdWxlOiBudWxsLFxuICAgICAgY2hvb3NlZDoge30sXG4gICAgICBzaG93TGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93TGlzdEZuICgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLnRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvcmJpZGRlbicpKSByZXR1cm5cbiAgICAgIHRoaXMuc2hvd0xpc3QgPSB0cnVlXG4gICAgfSxcbiAgICBjaGFuZ2VBdHRyICh2YWwpIHtcbiAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgLy8gdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdsaW5lSGVpZ2h0JywgdmFsLmxpbmVIZWlnaHQpXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgdmFsLmZvbnRTaXplKVxuICAgICAgdGhpcy5zaG93TGlzdCA9IGZhbHNlXG4gICAgfSxcbiAgICBzZXRGb250TmFtZSAobmFtZSkge1xuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb250TmFtZScsIG5hbWUpXG4gICAgfSxcbiAgICBzZXRIZWFkaW5nIChoZWFkaW5nKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgaGVhZGluZylcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ZvbnQnXVxuICAgIHRoaXMuZm9udEF0dHJNYXAgPSB0aGlzLmN1ck1vZHVsZS5jb25maWdcbiAgICB0aGlzLmNob29zZWQgPSB0aGlzLmZvbnRBdHRyTWFwW3RoaXMuZm9udEF0dHJNYXBbJ2RlZmF1bHQnXV1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcInRhYlxcXCIgY2xhc3M9XFxcImZvbnQtdGFiIHRhYi13aXRoLWRyb3Bkb3duXFxcIiBAbW91c2VlbnRlcj1cXFwic2hvd0xpc3RGblxcXCIgQG1vdXNlbGVhdmU9XFxcInNob3dMaXN0ID0gZmFsc2VcXFwiPlxcbiAgICB7e2Nob29zZWQubmFtZX19XFxuICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWNhcmV0LWRvd25cXFwiPjwvaT5cXG4gICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgdi1pZj1cXFwic2hvd0xpc3RcXFwiPlxcbiAgICAgICAgPGxpIHYtaWY9XFxcInZhbC5uYW1lXFxcIiB2LWZvcj1cXFwiKHZhbCwga2V5KSBpbiBmb250QXR0ck1hcFxcXCIgQGNsaWNrPVxcXCJjaGFuZ2VBdHRyKHZhbClcXFwiPnt7IHZhbC5uYW1lIH19PC9saT5cXG4gICAgPC91bD5cXG48L2xpPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAvLyB0aHJvdWdoIGZvbnQgdGFnXG4gICd4eC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNixcbiAgICBuYW1lOiAn5qCH6aKYJ1xuICB9LFxuICAneC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNSxcbiAgICBuYW1lOiAn5Ymv5qCH6aKYJ1xuICB9LFxuICAnbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDQsXG4gICAgbmFtZTogJ+Wwj+agh+mimCdcbiAgfSxcbiAgJ21lZGl1bSc6IHtcbiAgICBmb250U2l6ZTogMyxcbiAgICBuYW1lOiAn5q2j5paHJ1xuICB9LFxuICBkZWZhdWx0OiAnbWVkaXVtJ1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L2NvbmZpZy5qcyIsIi8qKlxuICogdG9nZ2xlIGZ1bGwgc2NyZWVuIG1vZGVcbiAqIENyZWF0ZWQgYnkgcGVhayBvbiAxNi84LzE4LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2Z1bGwtc2NyZWVuJyxcbiAgICBpY29uOiAnZmEgZmEtYXJyb3dzLWFsdCcsXG4gICAgaTE4bjogJ2Z1bGwgc2NyZWVuJyxcbiAgICBoYW5kbGVyKHJoKSB7XG4gICAgICAgIHJoLmVkaXRvci50b2dnbGVGdWxsU2NyZWVuKClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mdWxsLXNjcmVlbi9pbmRleC5qcyIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ltYWdlJyxcbiAgaTE4bjogJ2ltYWdlJyxcbiAgY2FuVXBsb2FkU2FtZUltYWdlOiB0cnVlLFxuICBpbWdPY2N1cHlOZXdSb3c6IGZhbHNlLFxuICBtYXhTaXplOiA1MTIwICogMTAyNCxcbiAgY29tcHJlc3M6IHtcbiAgICAvLyBtYXggd2lkdGhcbiAgICB3aWR0aDogMTYwMCxcbiAgICAvLyBtYXggaGVpZ2h0XG4gICAgaGVpZ2h0OiAxNjAwLFxuICAgIC8vIGNwbXByZXNzIHF1YWxpdHkgMCAtIDFcbiAgICBxdWFsaXR5OiAwLjhcbiAgfSxcbiAgdGFiLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdpbWcnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS9pbmRleC5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd0YWItaW1hZ2UnLFxuICAgICAgY3VyTW9kdWxlOiBudWxsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGljaygpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgIH0sXG4gICAgcHJvY2VzcyhlKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy4kcmVmcy5maWxlLmZpbGVzWzBdXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIGlmICh0aGlzLmN1ck1vZHVsZS5jYW5VcGxvYWRTYW1lSW1hZ2UpIHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5jdXJNb2R1bGUgPSB0aGlzLiRwYXJlbnQubW9kdWxlc01hcFsnaW1hZ2UnXVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcIml0ZW1cXFwiIGNsYXNzPVxcXCJidG5cXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIHJlZj1cXFwiZmlsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIiBAY2hhbmdlPVxcXCJwcm9jZXNzXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYSBmYS1waWN0dXJlLW9cXFwiIEBjbGljaz1cXFwicGlja1xcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXFxuXFxuXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYm9sZCcsXG4gIGljb246ICdmYSBmYS1ib2xkJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdib2xkJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnU1RST05HJykuYWRkKCd0YWcnLCAnQicpLmFkZCgnc3R5bGUnLHsnZm9udC13ZWlnaHQnOiAnYm9sZCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaXRhbGljJyxcbiAgaWNvbjogJ2ZhIGZhLWl0YWxpYycsXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpdGFsaWMnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdJJykuYWRkKCdzdHlsZScsIHsnZm9udFN0eWxlJzogJ2l0YWxpYyd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pdGFsaWMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd1bmRlcmxpbmUnLFxuICBpY29uOiAnZmEgZmEtdW5kZXJsaW5lJyxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1UnKS5hZGQoJ3N0eWxlJywgeyd0ZXh0LWRlY29yYXRpb24tbGluZSc6ICd1bmRlcmxpbmUnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdW5kZXJsaW5lL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndG9kbycsXG4gIGljb246ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICBleGNsdWRlOiAnQUxMX0JVVF9NWVNFTEYnLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3RvZG8nLCB7XG4gICAgICBpbnNlcnRBZnRlcjogcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXG4gICAgICBwbGFjZWhvbGRlcjogJ+W+heWKnuS6i+mhuSdcbiAgICB9KVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci10b2RvJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy90b2RvL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncXVvdGUnLFxuICBpY29uOiAnZmEgZmEtcXVvdGUtcmlnaHQnLFxuICBzaG93OiB0cnVlLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRRdW90ZScpXG4gIH0sXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCwgbW9kdWxlKSB7XG4gICAgbGV0IGlzSW5RdW90ZSA9IHJoLmVkaXRvci5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZS5uYW1lKVxuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgncXVvdGUnLCBpc0luUXVvdGUpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXF1b3RlJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1pbmRlbnQnLFxuICB0eXBlOiAnZm4nLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luZGVudCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1vdXRkZW50JyxcbiAgdHlwZTogJ2ZuJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdvdXRkZW50JylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3VsJyxcbiAgaWNvbjogJ2ZhIGZhLWxpc3QtdWwnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdVTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3VsL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2wnLFxuICBpY29uOiAnZmEgZmEtbGlzdC1vbCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdPTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL29sL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbGluZXRocm91Z2gnLFxuICBpY29uOiAnZmEgZmEtc3RyaWtldGhyb3VnaCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1NUUklLRScpLmFkZCgnc3R5bGUnLCB7J3RleHQtZGVjb3JhdGlvbi1saW5lJzogJ2xpbmUtdGhyb3VnaCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2l0b2RvJyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLWNoZWNrZWQtbGluZScsXG4gIGV4Y2x1ZGU6ICdBTExfQlVUX01ZU0VMRicsXG4gIG1vdW50ZWQgKGVkaXRvcikge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5pdGlUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2l0b2RvJywge1xuICAgICAgaW5zZXJ0QWZ0ZXI6IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXI6ICflvoXlip7kuovpobknXG4gICAgfSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItdG9kbyc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaWNvdXJ0LXRvZG8vaW5kZXguanMiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuXG5jb25zdCBmb3JlQ29sb3JDb25maWcgPSB7XG4gIG5hbWU6ICdmb3JlQ29sb3InLFxuICAvLyBjb2xvciBidXN0IGJlIGxvd2VyY2FzZVxuICBjb2xvcnM6IFsnIzAwMDAwMCcsICcjMDAwMDMzJywgJyMwMDAwNjYnLCAnIzAwMDA5OScsICcjMDAzMzAwJywgJyMwMDMzMzMnLCAnIzAwMzM2NicsXG4gICAgJyMwMDMzOTknLCAnIzAwNjYwMCcsICcjMDA2NjMzJywgJyMwMDk5MDAnLCAnIzMzMDAwMCcsICcjMzMwMDMzJywgJyMzMzAwNjYnLFxuICAgICcjMzMzMzAwJywgJyMzMzMzNjYnLCAnIzY2MDAwMCcsICcjNjYwMDMzJywgJyM2NjMzMDAnLCAnIzY2NjYwMCcsICcjNjY2NjMzJyxcbiAgICAnIzY2NjY2NicsICcjNjY2Njk5JywgJyM5OTAwMDAnLCAnIzk5MDAzMycsICcjOTkwMGNjJywgJyM5OTY2MDAnLCAnI2ZmY2MwMCcsXG4gICAgJyNmZmNjY2MnLCAnI2ZmY2M5OScsICcjZmZmZjAwJywgJyNmYTg5MTknLCAnI2VkNmMwMCcsICcjY2NmZmZmJywgJyNjY2ZmOTknLCAnI2ZmZmZmZiddLFxuICBkZWZhdWx0OiAnIzAwMDAwMCcsXG4gIHRhYixcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICBjb2xvcjogZm9yZUNvbG9yQ29uZmlnLmNvbG9yc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZUNvbG9yQ29uZmlnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9pbmRleC5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi5odG1sJ1xuaW1wb3J0ICcuL3N0eWxlLnN0eWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlSXRlbSAobikge1xuICAgICAgbiA9IG4gfHwgdGhpcy5jdXJNb2R1bGUuZGVmYXVsdFxuICAgICAgdGhpcy5jaG9vc2VkID0gblxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yczogW10sXG4gICAgICBjdXJNb2R1bGU6IG51bGwsXG4gICAgICBjaG9vc2VkOiB7fSxcbiAgICAgIHNob3dMaXN0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3dMaXN0Rm4gKCkge1xuICAgICAgaWYgKHRoaXMuJHJlZnMudGFiLmNsYXNzTGlzdC5jb250YWlucygnZm9yYmlkZGVuJykpIHJldHVyblxuICAgICAgdGhpcy5zaG93TGlzdCA9IHRydWVcbiAgICB9LFxuICAgIGNoYW5nZUNvbG9yIChjb2xvcikge1xuICAgICAgdGhpcy5jaG9vc2VkID0gY29sb3JcbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnZm9yZUNvbG9yJywgY29sb3IpXG4gICAgICB0aGlzLnNob3dMaXN0ID0gZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ZvcmVDb2xvciddXG4gICAgdGhpcy5jb2xvcnMgPSB0aGlzLmN1ck1vZHVsZS5jb2xvcnNcbiAgICB0aGlzLmNob29zZWQgPSB0aGlzLmN1ck1vZHVsZS5kZWZhdWx0XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvcmUtY29sb3IvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgcmVmPVxcXCJ0YWJcXFwiIGNsYXNzPVxcXCJmb3JlLWNvbG9yLXRhYiB0YWItd2l0aC1kcm9wZG93blxcXCIgQG1vdXNlZW50ZXI9XFxcInNob3dMaXN0Rm5cXFwiIEBtb3VzZWxlYXZlPVxcXCJzaG93TGlzdCA9IGZhbHNlXFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImljb24gZmEgZmEtZm9udFxcXCI+PC9pPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaG9vc2VkXFxcIiA6c3R5bGU9XFxcInsnYmFja2dyb3VuZCc6IGNob29zZWR9XFxcIj48L2Rpdj5cXG4gICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgdi1pZj1cXFwic2hvd0xpc3RcXFwiPlxcbiAgICAgICAgPGxpIHYtZm9yPVxcXCJjb2xvciBpbiBjb2xvcnNcXFwiIDpzdHlsZT1cXFwieydiYWNrZ3JvdW5kJzogY29sb3J9XFxcIiBAY2xpY2s9XFxcImNoYW5nZUNvbG9yKGNvbG9yKVxcXCI+PC9saT5cXG4gICAgPC91bD5cXG48L2xpPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9yZS1jb2xvci9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG91dGRlbnQ6IHtcbiAgICBrZXlDb2RlOiA5LFxuICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ291dGRlbnQnKVxuICAgIH1cbiAgfSxcbiAgaW5kZW50OiB7XG4gICAga2V5Q29kZTogOSxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbmRlbnQnKVxuICAgIH1cbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAga2V5Q29kZTogOCxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnZGVsZXRlJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH0sXG4gIGVudGVyOiB7XG4gICAga2V5Q29kZTogMTMsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2VudGVyJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaG9ydGN1dC9pbmRleC5qcyIsImltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuaW1wb3J0ICcuL3N0eWxlL21haW4uc3R5bCdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2VkaXRvci5odG1sJ1xuaW1wb3J0IGRyYWdQaWMgZnJvbSAnLi9kcmFnLXBpYydcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi4vbW9kdWxlLWluc3BlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHByb3BzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDAsXG4gICAgICB2YWxpZGF0b3IodmFsKXtcbiAgICAgICAgcmV0dXJuIHZhbCA+PSAxMDBcbiAgICAgIH1cbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG4gICAgYXV0b0hlaWdodDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBkcmFnUGljXG4gIH0sXG4gIGRhdGEoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlczoge30sXG4gICAgICBhY3RpdmVNb2R1bGVzOiBbXSxcbiAgICAgIGFsbEFjdGl2ZU1vZHVsZXM6IFtdLFxuICAgICAgZnVsbFNjcmVlbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29udGVudCh2YWwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MXG4gICAgICBpZiAodmFsICE9PSBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5pbm5lckhUTUwgPSB2YWxcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bGxTY3JlZW4odmFsKXtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXNcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29tcG9uZW50LnBhcmVudEVsID0gY29tcG9uZW50LiRlbC5wYXJlbnROb2RlXG4gICAgICAgIGNvbXBvbmVudC5uZXh0RWwgPSBjb21wb25lbnQuJGVsLm5leHRTaWJsaW5nXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LiRlbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoY29tcG9uZW50Lm5leHRFbCkge1xuICAgICAgICBjb21wb25lbnQucGFyZW50RWwuaW5zZXJ0QmVmb3JlKGNvbXBvbmVudC4kZWwsIGNvbXBvbmVudC5uZXh0RWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29tcG9uZW50LnBhcmVudEVsLmFwcGVuZENoaWxkKGNvbXBvbmVudC4kZWwpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbnRlbnRTdHlsZSgpe1xuICAgICAgY29uc3Qgc3R5bGUgPSB7fVxuICAgICAgaWYgKHRoaXMuZnVsbFNjcmVlbikge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLiRyZWZzLnRvb2xiYXIuY2xpZW50SGVpZ2h0IC0gMX1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBzdHlsZVsnbWluLWhlaWdodCddID0gYCR7dGhpcy5oZWlnaHR9cHhgXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRDdXJBY3RpdmVNb2R1bGVJdGVtICgpIHtcbiAgICAgIHJldHVybiBJbnNwZWN0b3IuYWN0aXZlSXRlbXNcbiAgICB9LFxuICAgIGNsZWFyQWN0aXZlTW9kdWxlSXRlbSAoKSB7XG4gICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXMgPSB7fVxuICAgIH0sXG4gICAgaGFuZGxlRHJhZ1BpYyAoZmlsZSkge1xuICAgICAgaWYgKCh0aGlzLm1vZHVsZXNNYXBbJ2ltYWdlJ10gJiYgdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddLmRyYWcgIT09IGZhbHNlKSB8fCAhdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddKSB7XG4gICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgIHRoaXMuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9ICF0aGlzLmZ1bGxTY3JlZW5cbiAgICB9LFxuICAgIGVuYWJsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IHRydWVcbiAgICB9LFxuICAgIGV4aXRGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBmYWxzZVxuICAgIH0sXG4gICAgZm9jdXMoKXtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyKCl7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuYmx1cigpXG4gICAgfSxcbiAgICBleGVjQ29tbWFuZChjb21tYW5kLCBhcmcsIGV4ZWNPbmx5KXtcbiAgICAgIGlmICghZXhlY09ubHkpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlU2VsZWN0aW9uKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKS5leGVjQ29tbWFuZChjb21tYW5kLCBhcmcpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgIH0sXG4gICAgc2F2ZUN1cnJlbnRSYW5nZSgpe1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcbiAgICAgICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXJcbiAgICAgICAgbGV0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lclxuICAgICAgICAvLyBmb3IgSUUxMSA6IG5vZGUuY29udGFpbnModGV4dE5vZGUpIGFsd2F5cyByZXR1cm4gZmFsc2VcbiAgICAgICAgc3RhcnQgPSBzdGFydC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBzdGFydC5wYXJlbnROb2RlIDogc3RhcnRcbiAgICAgICAgZW5kID0gZW5kLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IGVuZC5wYXJlbnROb2RlIDogZW5kXG4gICAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKHN0YXJ0KSAmJiBjb250ZW50LmNvbnRhaW5zKGVuZCkpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZXN0b3JlU2VsZWN0aW9uKCl7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHRoaXMucmFuZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICAgIGNvbnN0IHJvdyA9IFJILnByb3RvdHlwZS5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICByYW5nZS5zZXRTdGFydChyb3csIDApXG4gICAgICAgIHJhbmdlLnNldEVuZChyb3csIDApXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmVNb2R1bGUobW9kdWxlKXtcbiAgICAgIGlmIChtb2R1bGUuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmhhbmRsZXIobmV3IFJIKHRoaXMucmFuZ2UsIHRoaXMpLCBtb2R1bGUpXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kdWxlSW5zcGVjdCAoKSB7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlTW9kdWxlSXRlbSgpXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIGxldCByaCA9IG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKVxuICAgICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICAgIHRleHRzLnB1c2godGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0cyBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICBsZXQgdGV4dEFmdGV0RFIgPSBbXVxuICAgICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiB0ZXh0LnBhcmVudE5vZGUgIT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnBhcmVudE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0ZXh0QWZ0ZXREUi5pbmNsdWRlcyh0ZXh0KSkge1xuICAgICAgICAgICAgdGV4dEFmdGV0RFIucHVzaCh0ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdGFnUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bigndGFnJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCB0YWdSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHRhZ1Jlc3VsdClcblxuICAgICAgICBsZXQgc3R5bGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdzdHlsZScsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgc3R5bGVSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHN0eWxlUmVzdWx0KVxuXG4gICAgICAgIGxldCBhdHRyaWJ1dGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdhdHRyaWJ1dGUnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVJlc3VsdFJEID0gSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUoYXR0cmlidXRlUmVzdWx0KVxuXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IHRhZ1Jlc3VsdC5jb25jYXQoc3R5bGVSZXN1bHQsIGF0dHJpYnV0ZVJlc3VsdClcbiAgICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRhZ1Jlc3VsdFJELmNvbmNhdChzdHlsZVJlc3VsdFJELCBhdHRyaWJ1dGVSZXN1bHRSRCkpKVxuXG4gICAgICAgIC8vIHJlc2V0XG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgbW9kdWxlLmZvcmJpZGRlbiA9IGZhbHNlXG4gICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGhhbmRsZSBmb3JiaWRkZW4gbG9naWNcbiAgICAgICAgaWYgKHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgZXhjbHVkZUxpc3QgPSBbXVxuICAgICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobSkpIHtcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXJNb2R1bGUgPSB0aGlzLm1vZHVsZXNNYXBbbW9kdWxlTmFtZV1cbiAgICAgICAgICAgICAgICBleGNsdWRlTGlzdCA9IGV4Y2x1ZGVMaXN0LmNvbmNhdChjdXJNb2R1bGUuZXhjbHVkZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGV4Y2x1ZGVMaXN0ID0gQXJyYXkuZnJvbShuZXcgU2V0KGV4Y2x1ZGVMaXN0KSlcbiAgICAgICAgICBleGNsdWRlTGlzdC5mb3JFYWNoKGV4YyA9PiB7XG4gICAgICAgICAgICBsZXQgZXhjTW9kdWxlID0gdGhpcy5tb2R1bGVzTWFwW2V4Y11cbiAgICAgICAgICAgIGlmIChleGNNb2R1bGUgJiYgZXhjTW9kdWxlLnR5cGUgIT09ICdmbicpIHtcbiAgICAgICAgICAgICAgZXhjTW9kdWxlLmZvcmJpZGRlbiA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGhpZ2hsaWdodCBsb2dpY1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9IG1vZHVsZS5uYW1lXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gdHJ1ZVxuICAgICAgICAgICAgICBsZXQgY3VyTW9kdWxlQWN0aXZlSXRlbSA9IHRoaXMuZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSgpW21vZHVsZU5hbWVdXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyTW9kdWxlQWN0aXZlSXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGN1ck1vZHVsZUFjdGl2ZUl0ZW0gfHwgJ0FMTCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKXtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICBjb25zdCB0b29sYmFyID0gdGhpcy4kcmVmcy50b29sYmFyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnRcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lciBhdCBkb2N1bWVudCB0byBoYW5kbGUgc2VsZWN0aW9uXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4ge1xuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgfSwgZmFsc2UpXG4gICAgLy8gdG9vbGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNhdmVDdXJyZW50UmFuZ2UsIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGUgPT4ge1xuICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICB9LCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZSA9PiB7XG4gICAgICB0aGlzLmV4ZWNDb21tYW5kKCdwYXN0ZScsIGUsIHRydWUpXG4gICAgICBsZXQgY29tbW9uID0gdGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgaWYgKGNvbW1vbikge1xuICAgICAgICBpZiAoY29tbW9uLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGNvbW1vbiA9IGNvbW1vbi5wYXJlbnROb2RlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1vbi5zY3JvbGxJbnRvVmlldykge1xuICAgICAgICAgIGNvbW1vbi5zY3JvbGxJbnRvVmlldyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy50b3VjaEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hIYW5kbGVyLCBmYWxzZSlcblxuICAgIC8vIGJlZm9yZSBleGVjIGNvbW1hbmRcbiAgICAvLyBsZXQgdGV4dCBiZSBhIHJvd1xuICAgIFJILnByb3RvdHlwZS5iZWZvcmUoKGNvbW1hbmQsICByaCwgYXJnKSA9PiB7XG4gICAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgICAvLyBoYW5kbGUgZWRpdG9yIHdpdGggbm8gY29udGVudFxuICAgICAgaWYgKHJoLmlzRW1wdHlOb2RlKG5vZGUpICYmIG5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgbGV0IGZpcnN0Q2hpbGQgPSBub2RlLmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgIGlmIChmaXJzdENoaWxkICYmIGZpcnN0Q2hpbGQubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAxKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgaWYgKCFyaC5pc0VtcHR5Tm9kZSh0ZXh0KSkge1xuICAgICAgICAgIHJoLnRleHRUb1Jvdyh0ZXh0KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKHRleHRzLmxlbmd0aCkge1xuICAgICAgICByaC5lZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGhhbmRsZSBzaG9ydGN1dFxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgdGhpcy5leGVjQ29tbWFuZCgna2V5ZG93bicsIGUsIHRydWUpXG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2hvcnRjdXRbZS5rZXlDb2RlXVxuICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5sZW5ndGgpIHtcbiAgICAgICAgaXRlbS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IHMua2V5Q29kZSAmJiBlLmFsdEtleSA9PT0gISFzLmFsdEtleSAmJiBlLmN0cmxLZXkgPT09ICEhcy5jdHJsS2V5ICYmIGUubWV0YUtleSA9PT0gISFzLm1ldGFLZXkgJiYgZS5zaGlmdEtleSA9PT0gISFzLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICAgICAgICBzLmhhbmRsZXIodGhpcywgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgZmFsc2UpXG5cbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlLm1vdW50ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtb2R1bGUubW91bnRlZCh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHVwZGF0ZWQoKXtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS51cGRhdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS51cGRhdGVkKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hIYW5kbGVyKVxuICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmRlc3Ryb3llZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUuZGVzdHJveWVkKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci9lZGl0b3IuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi4vY29tbWFuZHMnXG5cbi8vIGZvciBJRSAxMVxuaWYgKCFUZXh0LnByb3RvdHlwZS5jb250YWlucykge1xuICBUZXh0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKG90aGVyTm9kZSkge1xuICAgIHJldHVybiB0aGlzID09PSBvdGhlck5vZGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUhhbmRsZXIge1xuICAvKipcbiAgICogYnVpbGQgcmFuZ2UgaGFuZGxlclxuICAgKiBAcGFyYW0ge1JhbmdlfSByYW5nZVxuICAgKiBAcGFyYW0ge2VkaXRvcn0gY3VycmVudCBlZGl0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJhbmdlLCBlZGl0b3IpIHtcbiAgICBpZiAoIXJhbmdlIHx8ICEocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbnRcXCd0IHJlc29sdmUgcmFuZ2UnKVxuICAgIH1cbiAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIGV4ZWN1dGUgZWRpdCBjb21tYW5kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tYW5kXG4gICAqIEBwYXJhbSBhcmdcbiAgICovXG4gIGV4ZWNDb21tYW5kKGNvbW1hbmQsIGFyZykge1xuICAgIFJhbmdlSGFuZGxlci5iZWZvcmVMaXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4uY2FsbCh0aGlzLCBjb21tYW5kLCB0aGlzLCBhcmcpXG4gICAgfSlcbiAgICBjb25zdCBleGlzdENvbW1hbmQgPSBjb21tYW5kc1tjb21tYW5kXVxuICAgIGNvbnN0IGN1c3RvbUNvbW1hbmQgPSB0aGlzLmVkaXRvci5jb21tYW5kcyA/IHRoaXMuZWRpdG9yLmNvbW1hbmRzW2NvbW1hbmRdIDogbnVsbFxuICAgIGlmIChleGlzdENvbW1hbmQpIHtcbiAgICAgIGV4aXN0Q29tbWFuZCh0aGlzLCBhcmcpXG4gICAgfVxuICAgIGVsc2UgaWYgKGN1c3RvbUNvbW1hbmQpIHtcbiAgICAgICBjdXN0b21Db21tYW5kKHRoaXMsIGFyZylcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoY29tbWFuZCwgZmFsc2UsIGFyZylcbiAgICB9XG4gICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdC5mb3JFYWNoKGZuID0+IHtcbiAgICAgIGZuLmNhbGwodGhpcywgY29tbWFuZCwgdGhpcywgYXJnKVxuICAgIH0pXG4gIH1cblxuICAvKlxuICAgKiBydW4gZm4gYmVmb3JlIGV4ZWMgY29tbWFuZCAgXG4gICAqKi9cbiAgYmVmb3JlIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJhbmdlSGFuZGxlci5iZWZvcmVMaXN0LnB1c2goZm4pXG4gICAgfVxuICB9XG5cbiAgY2xlYXJCZWZvcmVMaXN0ICgpIHtcbiAgICBSYW5nZUhhbmRsZXIuYmVmb3JlTGlzdCA9IFtdXG4gIH1cblxuICAvKlxuICAgKiBydW4gZm4gYWZ0ZXIgZXhlYyBjb21tYW5kICBcbiAgICoqL1xuICBhZnRlciAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0LnB1c2goZm4pXG4gICAgfVxuICB9XG5cbiAgY2xlYXJBZnRlckxpc3QgKCkge1xuICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QgPSBbXVxuICB9XG59XG5cblJhbmdlSGFuZGxlci5iZWZvcmVMaXN0ID0gW11cblJhbmdlSGFuZGxlci5hZnRlckxpc3QgPSBbXVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaW5zdGFuY2UuanMiLCJpbXBvcnQgbHJ6IGZyb20gJ2xyeidcblxuY29uc3QgaW5zZXJ0SW1hZ2UgPSBmdW5jdGlvbiAocmgsIGFyZykge1xuICAvLyBmb3JiaWRkZW4gbG9naWNcbiAgbGV0IGZvcmJpZGRlbiA9IGZhbHNlXG4gIGxldCBhY3RpdmVzID0gcmguZWRpdG9yLmFjdGl2ZU1vZHVsZXNcbiAgYWN0aXZlcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGxldCBtb2R1bGUgPSByaC5lZGl0b3IubW9kdWxlc01hcFtuYW1lXVxuICAgIGlmIChtb2R1bGUgJiYgbW9kdWxlLmV4Y2x1ZGUgJiYgbW9kdWxlLmV4Y2x1ZGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICAgIGZvcmJpZGRlbiA9IHRydWVcbiAgICB9XG4gIH0pXG4gIGlmIChmb3JiaWRkZW4pIHJldHVyblxuXG4gIGxldCByZXR1cm5EYXRhID0ge1xuICAgIG9yaWdpbjogYXJnXG4gIH1cbiAgbGV0IGVkaXRvciA9IHJoLmVkaXRvclxuICBsZXQgY29uZmlnID0gZWRpdG9yLm1vZHVsZXNNYXBbJ2ltYWdlJ11cbiAgaWYgKCFjb25maWcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ltYWdlIGNvbmZpZyBsb2FkIGZhaWwnKVxuICB9XG4gIGlmIChhcmcgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgaGFuZGxlRmlsZShhcmcpXG4gIH1cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmFsc2UsIGFyZylcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGUoZmlsZSkge1xuICAgIGlmIChjb25maWcuY29tcHJlc3MpIHtcbiAgICAgIGNvbmZpZy5jb21wcmVzcy5maWVsZE5hbWUgPSBjb25maWcuZmllbGROYW1lIHx8ICdpbWFnZSdcbiAgICAgIGxyeihmaWxlLCBjb25maWcuY29tcHJlc3MpLnRoZW4ocnN0ID0+IHtcbiAgICAgICAgaWYgKHJzdC5maWxlLnNpemUgPiBjb25maWcubWF4U2l6ZSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXhjZWVkIHNpemUgbGltaXQsIGFmdGVyIGNvbXByZXNzJyxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDNcbiAgICAgICAgICB9LCByc3QpXG4gICAgICAgICAgZWRpdG9yLiRlbWl0KCdpbWFnZVVwbG9hZCcsIHJldHVybkRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCByc3QpXG4gICAgICAgICAgbGV0IGltZ0lkID0gcmguY3JlYXRlUmFuZG9tSWQoJ2ltZycpXG4gICAgICAgICAgaW5zZXJ0QmFzZTY0KHJldHVybkRhdGEuYmFzZTY0LCBpbWdJZClcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICAgICAgc3RhdHVzOiBlcnIsXG4gICAgICAgICAgc3RhdHVzQ29kZTogMlxuICAgICAgICB9KVxuICAgICAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgcmV0dXJuRGF0YSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWxlLnNpemUgPiBjb25maWcubWF4U2l6ZSkge1xuICAgICAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICAgICAgc3RhdHVzOiAnZXhjZWVkIHNpemUgbGltaXQsIHdpdGhvdXQgY29tcHJlc3MnLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDNcbiAgICAgICAgfSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoY29uZmlnLmZpZWxkTmFtZSwgZmlsZSwgZmlsZS5uYW1lKVxuICAgICAgICByZXR1cm5EYXRhLmZvcm1EYXRhID0gZm9ybURhdGFcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICBsZXQgaW1nSWQgPSByaC5jcmVhdGVSYW5kb21JZCgnaW1nJylcbiAgICAgICAgICBpbnNlcnRCYXNlNjQoZS50YXJnZXQucmVzdWx0LCBpbWdJZClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydEJhc2U2NCAoYmFzZTY0LCBpZCkge1xuICAgIGxldCBkb20gPSBgPGltZyBzcmM9XCIke2Jhc2U2NH1cIiBkYXRhLWVkaXRvci1pbWc9XCIke2lkfVwiPmBcbiAgICBpZiAoY29uZmlnLmltZ09jY3VweU5ld1Jvdykge1xuICAgICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgICAgbGV0IGN1clJvdyA9IHJoLmZvcmNlR2V0Um93KG5vZGUpXG4gICAgICBpZiAoY3VyUm93KSB7XG4gICAgICAgIGxldCBzaWJsaW5nID0gY3VyUm93Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHtjb250ZW50ZWRpdGFibGU6IGZhbHNlfSlcbiAgICAgICAgbmV3Um93LmlubmVySFRNTCA9IGRvbVxuICAgICAgICByaC5pbnNlcnRBZnRlcihuZXdSb3csIGN1clJvdylcbiAgICAgICAgaWYgKCFzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgIHJoLmluc2VydEFmdGVyKHNpYmxpbmcsIG5ld1JvdylcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKHNpYmxpbmcsIDEpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShzaWJsaW5nLCAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGRvbSwgdHJ1ZSlcbiAgICB9XG4gICAgZWRpdG9yLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgIHN0YXR1czogJ2V2ZXJ5dGhpbmcgZmluZScsXG4gICAgICBzdGF0dXNDb2RlOiAyLFxuICAgICAgYmFzZTY0LFxuICAgICAgcmVwbGFjZVNyY0FmdGVyVXBsb2FkRmluaXNoOiByZXBsYWNlSW1nKGlkKSxcbiAgICAgIGRlbGV0ZUltZ1doZW5VcGxvYWRGYWlsOiBkZWxldGVJbWcoaWQpXG4gICAgfSkpXG4gIH1cblxuICAvLyByZXBsYWNlIGltYWdlJ3MgYmFzZTY0IHNyYyB0byB1cmwgYWZ0ZXIgdXBsb2FkIGZpbmlzaFxuICBmdW5jdGlvbiByZXBsYWNlSW1nIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtZWRpdG9yLWltZz0nJHtpZH0nXWApXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItaW1nJylcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCBlZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlIGltYWdlIGFmdGVyIHVwbG9hZCBmYWlsXG4gIGZ1bmN0aW9uIGRlbGV0ZUltZyAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWVkaXRvci1pbWc9JyR7aWR9J11gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gICAgICAgIGVkaXRvci4kZW1pdCgnY2hhbmdlJywgZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgcyA9cmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgc3BhbiBlbGVtZW50IHRvIGtlZXAgbGluZS1oZWlnaHQgcnVuIGNvcnJlY3RcbiAgICAgIGlmIChyaC5pc0VtcHR5Tm9kZShub2RlKSAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTUEFOJykge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCAnJiM4MjAzOycpXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHMuZm9jdXNOb2RlLCBzLmFuY2hvck9mZnNldCAtIDEpXG4gICAgICByYW5nZS5zZXRFbmQocy5mb2N1c05vZGUsIHMuZm9jdXNPZmZzZXQpXG4gICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIGFyZylcbiAgICAgIHMuY29sbGFwc2Uocy5mb2N1c05vZGUsIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBhcmcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRleHQgPSBudWxsXG5cbiAgaWYod2luZG93LmNsaXBib2FyZERhdGEgJiYgY2xpcGJvYXJkRGF0YS5zZXREYXRhKSB7XG4gICAgLy8gSUVcbiAgICB0ZXh0ID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpXG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykgXG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgdGV4dFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMClcblxuICAgICAgLy8g5Yib5bu65Li05pe25YWD57Sg77yM5L2/5b6XVGV4dFJhbmdl5Y+v5Lul56e75Yqo5Yiw5q2j56Gu55qE5L2N572uXG4gICAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIHRlbXBFbC5pbm5lckhUTUwgPSBcIiYjRkVGRjtcIlxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZSh0ZW1wRWwpXG4gICAgICB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpXG4gICAgICB0ZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGVtcEVsKVxuICAgICAgdGVtcEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcEVsKVxuICAgIH1cbiAgICB0ZXh0UmFuZ2UudGV4dCA9IHRleHRcbiAgICB0ZXh0UmFuZ2UuY29sbGFwc2UoZmFsc2UpXG4gICAgdGV4dFJhbmdlLnNlbGVjdCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQ2hyb21l5LmL57G75rWP6KeI5ZmoXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuXG4gICAgLy8gcmV3cml0ZSBsaSBlbnRlciBsb2dpY1xuICAgIGlmIChyaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdsaScpICYmIHJoLmlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCB1bE9yT2wgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1bCcpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ29sJylcbiAgICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydFVub3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICAgIH1cbiAgICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdPTCcpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydE9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFmdGVyRW50ZXIocmgsIGUpXG59XG5cbmZ1bmN0aW9uIGFmdGVyRW50ZXIocmgsIGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5iYXNlTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICAvLyBjbGVhciBuZXcgcm93J3MgaW5kZW50XG4gICAgaWYgKHJvdykge1xuICAgICAgcm93LnN0eWxlLm1hcmdpbkxlZnQgPSAnJ1xuICAgICAgcm93LnN0eWxlLm1hcmdpblJpZ2h0ID0gJydcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZW50ZXIuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcmxpbmUnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgbGV0IG5vZGVDdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCB1bmRlcmxpbmUgdGFnXG4gICAgbGV0IHVuZGVybGluZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3UnLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbkxpbmUnOiAndW5kZXJsaW5lJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnSScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIXVuZGVybGluZSkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdVJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgdW5kZXJsaW5lKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3VuZGVybGluZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZVRocm91Z2gnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgbGV0IG5vZGVDdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBzdHJpa2VUaHJvdWdoIHRhZ1xuICAgIGxldCBzdHJpa2VUaHJvdWdoID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnU1RSSUtFJywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAndGV4dERlY29yYXRpb25MaW5lJzogJ2xpbmUtdGhyb3VnaCdcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnVScsICdJJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghc3RyaWtlVGhyb3VnaCkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdTVFJJS0UnKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBzdHJpa2VUaHJvdWdoKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpdGFsaWMnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IGl0YWxpYyB0YWdcbiAgICBsZXQgaXRhbGljID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnaScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ2ZvbnRTdHlsZSc6ICdpdGFsaWMnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdVJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIC8vIGlzIGluIGEgaXRhbGljXG4gICAgaWYgKCFpdGFsaWMpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnSScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIGl0YWxpYylcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IGJvbGQgdGFnXG4gICAgbGV0IGJvbGQgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdzdHJvbmcnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdiJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAnZm9udFdlaWdodCc6ICdib2xkJ1xuICAgICAgfSlcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnSScsICdVJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghYm9sZCkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdCJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgYm9sZClcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9ib2xkLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IHEgPSB7XG4gIC8vIG9ubHkgc2V0IGNvbnRlbnRlZGl0YWJsZTpmYWxzZSBpbiBwYXJlbnQgbm9kZSBjYW4gY2hpbGQgbm9kZSB0cmlnZ2VyIGtleWRvd24gbGlzdGVuZXJcbiAgJ3F1b3RlJyAocmgsIGlzSW5RdW90ZSkge1xuICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICBpZiAoaXNJblF1b3RlKSB7XG4gICAgICBub2RlID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBub2RlLnBhcmVudE5vZGUgOiBub2RlXG4gICAgICBsZXQgcXVvdGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdbZGF0YS1lZGl0b3ItcXVvdGVdJylcbiAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICBsZXQgdGV4dHMgPSByaC5nZXREZXNjZW5kYW50VGV4dE5vZGVzKHF1b3RlKVxuICAgICAgICBsZXQgcXVvdGVSb3dzID0gW11cbiAgICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKHF1b3RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9jaycpLmNoaWxkcmVuKVxuICAgICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIC8vIGZpbmQgcm93IGluIGN1cnJlbnQgcXVvdGUgcm93XG4gICAgICAgICAgLy8gbGV0IHJvdyA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgY29uc3RhbnQuUk9XX1RBRywgZmFsc2UsIHF1b3RlKVxuICAgICAgICAgIGxldCByb3dcbiAgICAgICAgICByb3dzLmZvckVhY2goY3VyUm93ID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJSb3cuY29udGFpbnModGV4dCkpIHtcbiAgICAgICAgICAgICAgcm93ID0gY3VyUm93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIXF1b3RlUm93cy5pbmNsdWRlcyhyb3cpKSB7XG4gICAgICAgICAgICBxdW90ZVJvd3MucHVzaChyb3cpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBxdW90ZVJvd3MuZm9yRWFjaCgocXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChxciwgcXVvdGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJoLmluc2VydEFmdGVyKHFyLCBxdW90ZVJvd3NbaW5kZXggLSAxXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgaWYgKHF1b3RlUm93cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChxdW90ZVJvd3NbMF0sIDApXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKHF1b3RlUm93c1txdW90ZVJvd3MubGVuZ3RoIC0gMV0sIDEpXG4gICAgICAgICAgcy5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICAgIHMuYWRkUmFuZ2UocmFuZ2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaXQncyBhIGVtcHR5IHF1b3RlXG4gICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgcy5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIGlzIGF0IGEgZW1wdHkgcm93IHdpdGhvdXQgcm93IGVsZW1lbnQsIHRoZW4gY3JlYXRlIGEgcm93XG4gICAgLy8gb3IgdGV4dHMgaGFzIG5vIGNvbW1vbiBwYXJlbnQgcm93XG4gICAgaWYgKCFjdXJSb3cgJiYgIXRleHRzLmxlbmd0aCkge1xuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgdi5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCBuZXdSb3cub3V0ZXJIVE1MKVxuICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgdGV4dHMucHVzaChzLmZvY3VzTm9kZSlcbiAgICB9XG4gICAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICAgIHRleHRzLnB1c2goY3VyUm93KVxuICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSByaC5uZXdSb3coKVxuICAgIGxldCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGxldCBxdW90ZUJsb2NrID0gcmgubmV3Um93KHt0YWc6ICdkaXYnfSlcbiAgICBxdW90ZUJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2snLCByaC5jcmVhdGVSYW5kb21JZCgncXVvdGVibG9jaycpKVxuICAgIHF1b3RlLmFwcGVuZENoaWxkKHF1b3RlQmxvY2spXG4gICAgbGV0IGlkID0gcmguY3JlYXRlUmFuZG9tSWQoJ3F1b3RlJylcbiAgICBxdW90ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJywgaWQpXG4gICAgcXVvdGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuICAgIGxldCBxdW90ZVJvd3MgPSBbXVxuICAgIHRleHRzLmZvckVhY2goKHRleHQsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG5cbiAgICAgIC8vIGNyZWF0ZSBhIHJvdyBmb3IgdGV4dCB3aXRob3V0IHJvd1xuICAgICAgaWYgKCFjdXJSb3cgJiYgdGV4dC5ub2RlVmFsdWUpIHtcbiAgICAgICAgY3VyUm93ID0gcmgubmV3Um93KClcbiAgICAgICAgY3VyUm93LmFwcGVuZENoaWxkKHRleHQpXG4gICAgICB9XG4gICAgICBpZiAoY3VyUm93ICYmICFxdW90ZVJvd3MuaW5jbHVkZXMoY3VyUm93KSkge1xuICAgICAgICBxdW90ZVJvd3MucHVzaChjdXJSb3cpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgYW5jaG9yUm93XG4gICAgcXVvdGVSb3dzLmZvckVhY2goKHFyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBxdW90ZVJvd3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBxdW90ZUJsb2NrLmFwcGVuZENoaWxkKHFyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHF1b3RlQmxvY2suYXBwZW5kQ2hpbGQocXIuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgYW5jaG9yUm93ID0gcXJcbiAgICB9KVxuXG4gICAgaWYgKGFuY2hvclJvdy5wYXJlbnROb2RlKSB7XG4gICAgICBhbmNob3JSb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocXVvdGUsIGFuY2hvclJvdylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY3VycmVudCByb3cgaXMgY3JlYXRlZCBhbmQgaGFzIG5vIHBhcmVudFxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgdi5hcHBlbmRDaGlsZChxdW90ZSlcbiAgICAgIHJoLnJhbmdlLmRlbGV0ZUNvbnRlbnRzKClcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHYuaW5uZXJIVE1MKVxuICAgIH1cbiAgICBjb25zdCBjdXJRdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVkaXRvci1xdW90ZT0nJHtpZH0nXWApXG4gICAgaWYgKCFjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkKSByZXR1cm5cbiAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkLCBjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA/IDEgOiAwKVxuICB9LFxuICAnaW5pdFF1b3RlJyAocmgsIGFyZykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIGxldCBxdW90ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IoZS50YXJnZXQsICdbZGF0YS1lZGl0b3ItcXVvdGVdJylcbiAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICAgIGxldCBub2RlID0gcy5hbmNob3JOb2RlXG4gICAgICAgIGxldCBjdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIGlmIChjdG4ucmVwbGFjZSgnXFxuJywgJycpID09PSAnJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICByaC5pbnNlcnRBZnRlcihuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcblxuICAgICAgICAgIC8vIGN1cnNvciBtYXkgYXQgcm93IG9yIGF0IHF1b3RlIGJsb2NrICwgc28gdGhlcmUgYXJlIHR3byBqdWRnZW1lbnQgY29uZGl0aW9uc1xuICAgICAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmIChzLmZvY3VzT2Zmc2V0ID09PSAwIHx8IChub2RlLmNvbnRhaW5zKHMuYmFzZU5vZGUpICYmIChyaC5pc0VtcHR5Tm9kZShzLmJhc2VOb2RlKSkgJiYgcy5mb2N1c09mZnNldCA9PT0gMSkpKSB7XG4gICAgICAgICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20ocXVvdGUucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrXScpLmNoaWxkcmVuKVxuXG4gICAgICAgICAgICAvLyBlbXB0eSBxdW90ZVxuICAgICAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAvLyByb3cgYW5kIG5vZGUgaGFzIGZhdGhlci1jaGlsZCByZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgaWYgKChyb3cgPT09IG5vZGUgfHwgcm93LmNvbnRhaW5zKG5vZGUpIHx8IG5vZGUuY29udGFpbnMocm93KSkgJiYgaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgaGF2ZSBvbmUgZW1wdHkgcm93IGluIHF1b3RlLHRoZW4gZGVsZXRlIHRoZSBxdW90ZVxuICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMSAmJiByaC5pc0VtcHR5Tm9kZShyb3cpKSB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAvLyBmaXJzdCByb3cgaGF2ZSBjb250ZW50IGFuZCBwcmV2aW91cyBlbGVtZW50IGV4aXN0LCB0aGVuIG1vdmUgY3Vyc29yIHRvIHByZXZpb3VzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBwcmVSb3cgPSByaC5nZXRQcmV2aW91c1JvdyhxdW90ZSlcbiAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgcXVvdGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVsZSA9IEFycmF5LmZyb20ocHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9ja10nKS5jaGlsZHJlbikucG9wKClcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobGFzdEVsZSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShsYXN0RWxlLCAwKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHRvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHByZVJvdy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgcm93XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UocHJlUm93LCAxKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UocHJlUm93LCAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9xdW90ZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuY29uc3QgdCA9IHtcbiAgJ3RvZG8nIChyaCwgZGF0YSkge1xuICAgIGxldCByb3cgPSByaC5uZXdSb3coe1xuICAgICAgYnI6IHRydWVcbiAgICB9KVxuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3cocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgXG4gICAgLy8gYSBlbXB0eSByb3cgd2l0aG91dCByb3cgZWxlbWVudCwgY3JlYXRlIGEgcm93IGVsZW1lbnRcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgdi5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCBuZXdSb3cub3V0ZXJIVE1MKVxuICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgY3VyUm93ID0gcy5mb2N1c05vZGVcbiAgICB9XG5cbiAgICAvLyBpbnNlcnQgdG9kbyBhZnRlciB0aGlzIHJvd1xuICAgIGxldCBhZnRlcldoaWNoID0gcmguZ2V0Um93KGRhdGEuaW5zZXJ0QWZ0ZXIpXG5cbiAgICAvLyBpcyBhZnRlcldoaWNoIGlzIGEgZW1wdHkgcm93LCBqdXN0IGluc2VydCB0b2RvIGF0IGN1cnJlbnQgcm93XG4gICAgaWYgKGFmdGVyV2hpY2ggJiYgcmguaXNFbXB0eVJvdyhhZnRlcldoaWNoKSkge1xuICAgICAgYWZ0ZXJXaGljaCA9IG51bGxcbiAgICB9XG4gICAgaWYgKGFmdGVyV2hpY2gpIHtcbiAgICAgIGxldCB0YXJnZXRJbmRleFxuICAgICAgbGV0IHN0YXJ0SW5kZXhcbiAgICAgIGxldCBsaXN0ID0gYWZ0ZXJXaGljaC5wYXJlbnROb2RlLmNoaWxkTm9kZXNcbiAgICAgIGxpc3QuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gYWZ0ZXJXaGljaCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgICAgICAgIGlmIChzdGFydEluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID0gbGlzdC5sZW5ndGhcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZCAmJiB0YXJnZXRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA9IGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleCA9PT0gdW5kZWZpbmVkID8gc3RhcnRJbmRleCArIDEgOiB0YXJnZXRJbmRleFxuICAgICAgYWZ0ZXJXaGljaC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3csIGxpc3RbdGFyZ2V0SW5kZXhdKVxuICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAwKVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIGluc2VydCB0b2RvIGF0IGN1cnJlbnQgcm93IGlmIGl0IGlzIGVtcHR5XG4gICAgICBpZiAocmguaXNFbXB0eVJvdyhjdXJSb3cpKSB7XG4gICAgICAgIHJoLmNvbGxhcHNlQXRSb3coY3VyUm93KVxuICAgICAgICByb3cgPSBjdXJSb3dcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdywgMClcbiAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAwKVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdG9kb0lkID0gcmguY3JlYXRlUmFuZG9tSWQoJ3RvZG8nKVxuICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIGA8JHtjb25zdGFudC5ST1dfVEFHfSBkYXRhLWVkaXRvci10b2RvPSR7dG9kb0lkfSBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke2RhdGEucGxhY2Vob2xkZXJ9XCI+PC8ke2NvbnN0YW50LlJPV19UQUd9Pjxicj5gKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVkaXRvci10b2RvPScke3RvZG9JZH0nXSBpbnB1dFt0eXBlPXRleHRdYCkuZm9jdXMoKVxuICAgIHJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdylcbiAgICB0Wydpbml0VG9kbyddKHJoLCBkYXRhKVxuICB9LFxuICAvLyBpbml0IHRvZG8gbG9naWNcbiAgJ2luaXRUb2RvJyAocmgsIGRhdGEpIHtcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lZGl0b3ItdG9kb10nKVxuICAgIGNoZWNrYm94cy5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gYy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1jaGVja2JveF0nKVxuICAgICAgY29uc3QgY3RuID0gYy5xdWVyeVNlbGVjdG9yKCdbdHlwZT10ZXh0XScpXG4gICAgICBpZiAoYy5pbml0KSByZXR1cm5cbiAgICAgIGN0bkNoZWNrZWRMb2dpYygpXG5cbiAgICAgIGZ1bmN0aW9uIGN0bkNoZWNrZWRMb2dpYygpIHtcbiAgICAgICAgY3RuLnZhbHVlID0gY3RuLnZhbHVlIHx8IGN0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJylcbiAgICAgICAgY3RuLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnLCBjdG4udmFsdWUpXG4gICAgICAgIGlmIChidG4uY2hlY2tlZCkge1xuICAgICAgICAgIGN0bi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0bi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xuICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgYnRuLm9uY2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGN0bkNoZWNrZWRMb2dpYygpXG4gICAgICAgIGlmIChyaC5lZGl0b3IgJiYgcmguZWRpdG9yLiRyZWZzICYmIHJoLmVkaXRvci4kcmVmcy5jb250ZW50KSB7XG4gICAgICAgICAgcmguZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCByaC5lZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN0bi5vbmlucHV0ID0gZSA9PiB7XG4gICAgICAgIGN0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJywgZS50YXJnZXQudmFsdWUpXG4gICAgICB9XG4gICAgICBjdG4ub25rZXlkb3duID0gY3RuLm9ua2V5ZG93biB8fCAoZSA9PiB7XG4gICAgICAgICAgaWYgKCFbMTMsIDhdLmluY2x1ZGVzKGUua2V5Q29kZSkpIHJldHVyblxuICAgICAgICAgIGxldCByb3cgPSBjLm5leHRTaWJsaW5nXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGlmIChjdG4udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlVG9kbygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Wyd0b2RvJ10ocmgsIHtcbiAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXI6IGMsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBkYXRhLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoY3RuLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBkZWxldGVUb2RvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgYy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIGMpXG4gICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgYy5pbml0ID0gdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXG4gICAgLy8gdG8ga2VlcCB0ZXh0IHdyYXAgYnkgYSByb3dcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICBjb21tYW5kcy5mb3JtYXRCbG9jayhyaCwgY29uc3RhbnQuUk9XX1RBRylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICAvLyByZXN0b3JlIGZpcnN0IHJvd1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGxldCBub2RlID0gcy5iYXNlTm9kZVxuICBsZXQgdmFsdWUgPSBub2RlLm5vZGVWYWx1ZSB8fCBub2RlLmlubmVyVGV4dFxuICAvLyBjb25zb2xlLmxvZygnZGVsZXRlJywgbm9kZSwgZSlcbiAgbGV0IGN1clJhbmdlID0gcmguZ2V0UmFuZ2UoKSB8fCByaC5yYW5nZVxuXG4gIC8vIGNhbmNlbCBsaXN0IHdoZW4gbGkgaXMgZW1wdHlcbiAgaWYgKChyaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdsaScpKSAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB1bE9yT2wgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1bCcpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ29sJylcbiAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnVUwnKSB7XG4gICAgICBjb21tYW5kc1snaW5zZXJ0VW5vcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgIH1cbiAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnT0wnKSB7XG4gICAgICBjb21tYW5kc1snaW5zZXJ0T3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gIC8vIG5vZGUgaXMgZWRpdCB6b25lXG4gIGlmICghcm93KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGFmdGVyRGVsZXRlKHJoKVxuICB9XG4gIFxuICAvLyBlbXB0eSByb3dcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiAoKG5vZGUgPT09IHJvdyAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCkgfHwgKHJvdy5pbm5lckhUTUwucmVwbGFjZSgvPGJyPi9nLCAnJykgPT09ICcnICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAxKSkpIHtcbiAgICBsZXQgZmlyc3RSb3cgPSByaC5lZGl0Wm9uZSgpLmZpcnN0RWxlbWVudENoaWxkXG5cbiAgICAvLyBmaXJzdCByb3cgY2FuY2VsIG91dGRlbnRcbiAgICBpZiAoZmlyc3RSb3cgPT09IHJvdykge1xuICAgICAgY29tbWFuZHMub3V0ZGVudChyaCwgbnVsbClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgLy8gcm93IGhhcyBjb250ZW50LCBjdXJzb3IgaXMgYXQgYXQgc3RhcnQgb2YgdGhlIG5vZGUsIGRvIG91dGRlbnRcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiB2YWx1ZSAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCAmJiAobm9kZSA9PT0gcm93LmZpc3RFbGVtZW50Q2hpbGQgfHwgbm9kZSA9PT0gcm93LmZpcnN0Q2hpbGQpKSB7XG4gICAgbGV0IG91dGRlbnRSZXN1bHQgPSBjb21tYW5kcy5vdXRkZW50KHJoLCBudWxsKVxuICAgIGlmIChvdXRkZW50UmVzdWx0ID09PSAnTk9fTkVFRF9PVVRERU5UJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gZW1wdHkgcm93XG4gIGlmIChyb3cuaW5uZXJIVE1MLnJlcGxhY2UoLzxicj4vZywgJycpID09PSAnJykge1xuICAgIC8vIGdldCBwcmV2aW91cyByb3cgd2l0aCBjb250ZW50XG4gICAgbGV0IHByZVJvdyA9IHJoLmdldFByZXZpb3VzUm93KHJvdylcblxuICAgIC8vIGN1cnNvciBmb2N1cyBvbiBwcmV2aW91cyByb3cncyBpbnB1dCBpZiBwcmV2aW91cyByb3cgaXMgdG9kb1xuICAgIGlmIChwcmVSb3cgJiYgcHJlUm93LmRhdGFzZXQgJiYgcHJlUm93LmRhdGFzZXQuZWRpdG9yVG9kbykge1xuICAgICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KVxuICAgICAgbGV0IGlucHV0ID0gcHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHJldHVybiBhZnRlckRlbGV0ZShyaClcbn1cblxuLy8gaGFuZGxlICYjODIwMzsgYWZ0ZXIgZGVsZXRlXG5mdW5jdGlvbiBhZnRlckRlbGV0ZShyaCkge1xuICBsZXQgZGVsZXRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgZm9jdXNOb2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgY3RuID0gdHlwZW9mIGZvY3VzTm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gZm9jdXNOb2RlLmlubmVyVGV4dCA6IGZvY3VzTm9kZS5ub2RlVmFsdWVcbiAgICBpZiAodHlwZW9mIGN0biA9PT0gJ3N0cmluZycgJiYgL1xcdTIwMEIvLnRlc3QoY3RuKSAmJiBjdG4ucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnKSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGRlbGV0ZUludGVydmFsKVxuICAgIH1cbiAgfSlcblxuICAvLyBpZiBlZGl0IHpvbmUgaXMgZW1wdHksIGNyZWF0ZSBhIHJvd1xuICBpZiAocmguaXNFbXB0eU5vZGUocmguZWRpdFpvbmUoKSkgJiYgIXJoLmdldFJvd3MoKS5sZW5ndGgpIHtcbiAgICBsZXQgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgcmguZWRpdFpvbmUoKS5hcHBlbmRDaGlsZChyb3cpXG4gICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAxKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZGVsZXRlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlSaWdodC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJyYjODIwMzsnKVxuICAgICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1JvdygpXG4gICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dC5ub2RlVmFsdWVcbiAgICAgIGxldCBuZXh0U2libGluZyA9IHRleHQubmV4dFNpYmxpbmdcbiAgICAgIHRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0KVxuICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlMZWZ0LmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlDZW50ZXInLCBmYWxzZSlcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9qdXN0aWZ5Q2VudGVyLmpzIiwiaW1wb3J0IGFtIGZyb20gJy4vYXNzaXN0LW1ldGhvZHMnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCBtID0ge1xuICAvKipcbiAgICogZnVuYyBhZGQgZXZlcnkgZWxlbWVudHMgb2YgZXh0QXJyIHRvIHNvdXJjZUFyci5cbiAgICogQHBhcmFtIHNvdXJjZUFyclxuICAgKiBAcGFyYW0gZXh0QXJyXG4gICAqL1xuICBtZXJnZUFycmF5IChzb3VyY2VBcnIsIGV4dEFycikge1xuICAgIC8vIG5vdGU6IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycjEsYXJyMikgaXMgdW5yZWxpYWJsZVxuICAgIGV4dEFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgc291cmNlQXJyLnB1c2goZWwpXG4gICAgfSlcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYSBlbGVtZW50XG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKi9cbiAgZ2V0RGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IpIHtcbiAgICBpZiAoYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICByZXR1cm4gW2FuY2VzdG9yXVxuICAgIH1cbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGlmICghYW5jZXN0b3IuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhbmNlc3Rvci5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBmaW5kIGFsbCB0aGUgZGVzY2VuZGFudCB0ZXh0IG5vZGVzIG9mIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBiZWZvcmUgdGhlIHNwZWNpZnkgZW5kIGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIGVuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0gYW5jZXN0b3JcbiAgICogQHBhcmFtIGVuZEVsXG4gICAqL1xuICBnZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3RvciwgZW5kRWwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGxldCBlbmRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKGVuZEVsKSkge1xuICAgICAgICBlbmRJbmRleCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IGVuZEVsKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBlbmRFbCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYW4gYW5jZXN0b3IgZWxlbWVudCB0aGF0IGFmdGVyIHRoZSBzcGVjaWZ5IHN0YXJ0IGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIHN0YXJ0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKiBAcGFyYW0gc3RhcnRFbFxuICAgKi9cbiAgZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yLCBzdGFydEVsKSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKHN0YXJ0RWwpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBhbmNlc3Rvci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IHN0YXJ0RWwpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfSBlbHNlIGlmIChpID09PSBzdGFydEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgICAgbS5nZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBzdGFydEVsKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBnZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGJsb2NrIG5vZGUgb2YgYSB0ZXh0IG5vZGUuXG4gICAqIEBwYXJhbSBub2RlXG4gICAqIEByZXR1cm4ge05vZGV9XG4gICAqL1xuICBnZXRQYXJlbnRCbG9ja05vZGUgKG5vZGUpIHtcbiAgICBjb25zdCBibG9ja05vZGVOYW1lcyA9IFsnRElWJywgJ1AnLCAnU0VDVElPTicsICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsXG4gICAgICAnT0wnLCAnVUwnLCAnTEknLCAnVFInLCAnVEQnLCAnVEgnLCAnVEJPRFknLCAnVEhFQUQnLCAnVEFCTEUnLCAnQVJUSUNMRScsICdIRUFERVInLCAnRk9PVEVSJywgJ0JMT0NLUVVPVEUnXVxuICAgIGxldCBjb250YWluZXIgPSBub2RlXG4gICAgd2hpbGUgKGNvbnRhaW5lcikge1xuICAgICAgaWYgKGJsb2NrTm9kZU5hbWVzLmluY2x1ZGVzKGNvbnRhaW5lci5ub2RlTmFtZSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfSxcbiAgaXNJbmxpbmVFbGVtZW50IChub2RlKSB7XG4gICAgY29uc3QgaW5saW5lTm9kZU5hbWVzID0gWydBJywgJ0FCQlInLCAnQUNST05ZTScsICdCJywgJ0NJVEUnLCAnQ09ERScsICdFTScsICdJJyxcbiAgICAgICdGT05UJywgJ0lNRycsICdTJywgJ1NNQUxMJywgJ1NQQU4nLCAnU1RSSUtFJywgJ1NUUk9ORycsICdVJywgJ1NVQicsICdTVVAnXVxuICAgIHJldHVybiBpbmxpbmVOb2RlTmFtZXMuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSlcbiAgfSxcbiAgaXNJbmxpbmVPclRleHQgKG5vZGUpIHtcbiAgICBsZXQgaXNJbmxpbmUgPSBtLmlzSW5saW5lRWxlbWVudChub2RlKVxuICAgIGxldCBpc1RleHQgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERVxuICAgIHJldHVybiBpc0lubGluZSB8fCBpc1RleHRcbiAgfSxcbiAgLypcbiAgICogZmluZCBhbGwgc3BlY2lmeSBub2RlcyBpbiBhbiBhbmNlc3RvciB0aHJvdWdoIHNlYXJjaCBvcGluaW9ucyh1bmlxdWUgYXR0cmlidXRlcylcbiAgICogQHBhcmFtIG5vZGVcbiAgICogQHBhcmFtIHtvYmp9XG4gICAqICAgICBtdXN0IGhhdmUga2V5ICd0YWdOYW1lJ1xuICAgKiBAcmV0dXJuIHthcnJ9XG4gICAqKi9cbiAgZ2V0QWxsU3BlY2lmeU5vZGUgKGFuY2VzdG9yLCBzZWFyY2hPcGluaW9uKSB7XG4gICAgY29uc3QgdGFyZ2V0VGFnTmFtZSA9IHNlYXJjaE9waW5pb24udGFnTmFtZVxuICAgIGRlbGV0ZSBzZWFyY2hPcGluaW9uLnRhZ05hbWVcbiAgICBjb25zdCB0YWdzID0gYW5jZXN0b3IucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRUYWdOYW1lKVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBjb25zdCBvcGluaW9uS2V5cyA9IE9iamVjdC5rZXlzKHNlYXJjaE9waW5pb24pXG4gICAgICBsZXQgcGFzcyA9IHRydWVcbiAgICAgIG9waW5pb25LZXlzLmZvckVhY2gob3BpbmlvbiA9PiB7XG4gICAgICAgIHZhciBhID0gdGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKVxuICAgICAgICBpZiAodGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKSAhPT0gc2VhcmNoT3BpbmlvbltvcGluaW9uXSkge1xuICAgICAgICAgIHBhc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKHBhc3MpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGFnKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiBmdW5jIGZpbmQgdGhlIG51bWJlciBvZiBuZXN0aW5nIGFuY2VzdG9yIHdoaWNoIGhhcyBzYW1lIG5vZGUgbmFtZVxuICAgKiBAcGFyYW0ge25vZGV9IGN1cnJlbnQgbm9kZVxuICAgKiBAcGFyYW0ge3N0cn0gYW5jZXN0b3IncyB0YWcgbmFtZVxuICAgKiBAcmV0dXJuIHtudW19IG51bWJlclxuICAgKiovXG4gIGhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnIChub2RlLCBhbmNlc3Rvck5vZGVOYW1lKSB7XG4gICAgbGV0IG51bSA9IDBcbiAgICBhbmNlc3Rvck5vZGVOYW1lID0gYW5jZXN0b3JOb2RlTmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgIT09IGFtLmVkaXRab25lKCkpKSB7XG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gYW5jZXN0b3JOb2RlTmFtZSkge1xuICAgICAgICBudW0rK1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gbnVtXG4gIH0sXG5cbiAgLypcbiAgICogZmluZCBhbiBhbmNlc3RvciBlbGVtZW50IHRocm91Z2ggc2VsZWN0b3JcbiAgICogQHBhcmFtIHtub2RlfSBzdGFydCBhdCBub2RlXG4gICAqIEBwYXJhbSB7c3RyfSBhbmNlc3RvciBlbGVtZW50J3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtib29sZWFufSBlaXRoZXIgcmV0dXJuIGZpcnN0IGVsaWdpYmxlIGVsZW1lbnQgb3IgbGFzdCBlbGlnaWJsZSBlbGVtZW50XG4gICAqICBkZWZhdWx0OiB0cnVlXG4gICAqIEBwYXJhbSB7bm9kZX0gc2VhcmNoaW5nIHN0b3AgYXQgdGhlIGJvcmRlciBlbGVtZW50XG4gICAqICBkZWZhdWx0OiBlZGl0b3IncyBjb250ZW50IHpvbmVcbiAgICogQHJldHVybiB0YXJnZXQgYW5jZXN0b3IgZWxlbWVudFxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3IgKG5vZGUsIHNlbGVjdG9yLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBhbmNlc3RvcnMgPSBBcnJheS5mcm9tKG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhbmNlc3RvcnMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBub2RlXG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgdGFyZ2V0IHN0eWxlXG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlIChub2RlLCBzdHlsZU5hbWUsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgaWYgKG5vZGUuc3R5bGUgJiYgbm9kZS5zdHlsZVtzdHlsZU5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCA9IG5vZGUuc3R5bGVbc3R5bGVOYW1lXVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgYW4gYW5jZXN0b3IgZWxlbWVudCB0aHJvdWdoIHN0eWxlIG5hbWUgYW5kIHN0eWxlIHZhbHVlXG4gICAqIEBwYXJhbSBzdHlsZSB7b2JqfSBzdHlsZU5hbWU6IHN0eWxlVmFsdWVcbiAgICogQHJldHVyblxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIChub2RlLCBzdHlsZSwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICBsZXQgaXNUYXJnZXQgPSB0cnVlXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xuICAgICAgICBpZiAoc3R5bGVbc3R5bGVOYW1lXSAhPT0gcGFyZW50LnN0eWxlW3N0eWxlTmFtZV0pIHtcbiAgICAgICAgICBpc1RhcmdldCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoaXNUYXJnZXQpIHtcbiAgICAgICAgcmVzdWx0ID0gcGFyZW50XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIGdldE5vZGVOdW0gKGFuY2VzdG9yLCBub2RlTmFtZSkge1xuICAgIHJldHVybiBhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKG5vZGVOYW1lKS5sZW5ndGhcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSB0ZXh0IG5vZGVzIGluIHJhbmdlXG4gICAqL1xuICBnZXRBbGxUZXh0Tm9kZXNJblJhbmdlKCkge1xuICAgIGNvbnN0IHN0YXJ0Q29udGFpbmVyID0gdGhpcy5yYW5nZS5zdGFydENvbnRhaW5lclxuICAgIGNvbnN0IGVuZENvbnRhaW5lciA9IHRoaXMucmFuZ2UuZW5kQ29udGFpbmVyXG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG5cbiAgICBpZiAoc3RhcnRDb250YWluZXIgPT09IGVuZENvbnRhaW5lcikge1xuICAgICAgaWYgKHN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICByZXR1cm4gW3N0YXJ0Q29udGFpbmVyXVxuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJhbmdlLnN0YXJ0T2Zmc2V0OyBpIDwgdGhpcy5yYW5nZS5lbmRPZmZzZXQ7IGkrKykge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMoY2hpbGROb2Rlc1tpXSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXG4gICAgbGV0IGVuZEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUuY29udGFpbnMoc3RhcnRDb250YWluZXIpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jb250YWlucyhlbmRDb250YWluZXIpKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgc3RhcnRDb250YWluZXIpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGVuZEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgZW5kQ29udGFpbmVyKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLypcbiAgICogZ2V0IHRoZSByb3cgd2hpY2ggY29udGFpbnMgdGFyZ2V0IGVsZW1lbnRcbiAgICogQHBhcmFtIHtub2RlfSB0YXJnZXQgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtub2RlfSByb3dcbiAgICoqL1xuICBnZXRSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICBsZXQgcmVzdWx0XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmNvbnRhaW5zKG5vZGUpIHx8IHJvdyA9PT0gbm9kZSkge1xuICAgICAgICByZXN1bHQgPSByb3dcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgdGV4dFRvUm93IChub2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gYW0uZWRpdFpvbmUoKSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9LFxuICAvKlxuICAgKiBnZXQgcm93LCBpZiB0aGVyZSdzIG5vdCwgY3JlYXRlIG9uZVxuICAgKiovXG4gIGZvcmNlR2V0Um93IChub2RlKSB7XG4gICAgbm9kZSA9IG0udGV4dFRvUm93KG5vZGUpXG4gICAgcmV0dXJuIG0uZ2V0Um93KG5vZGUpXG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBhbGwgcm93c1xuICAgKiovXG4gIGdldFJvd3MgKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFtLmVkaXRab25lKCkuY2hpbGRyZW4pXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgY3VycmVudCBub2RlIGlzIGEgcm93XG4gICAqKi9cbiAgaXNSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICByZXR1cm4gcm93cy5pbmNsdWRlcyhub2RlKVxuICB9LFxuICAvKlxuICAgKiBjcmVhdGUgYSB3cmFwcGVyIGZvciBpbmxpbmUgZWxlbWVudCBpbiBzYW1lIHJvd1xuICAgKiovXG4gIGNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUgKG5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyID0gdHJ1ZSkge1xuICAgIGlmICghbS5pc0lubGluZU9yVGV4dChub2RlKSkgcmV0dXJuIG5vZGVcbiAgICBsZXQgZWxlbWVudHMgPSBbbm9kZV1cbiAgICBzZWFyY2hMZWZ0KClcbiAgICBzZWFyY2hSaWdodCgpXG4gICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlck5vZGVOYW1lKVxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gZWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBsYXN0T25lID0gZWxlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGxhc3RPbmUpXG4gICAgICBlbGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBlbGUpXG4gICAgfSlcblxuICAgIGlmIChzZXBlcmF0ZUJ5QnIpIHtcbiAgICAgIGhhbmRsZXJCcihuZXdSb3cucHJldmlvdXNTaWJsaW5nLCB0cnVlKVxuICAgICAgaGFuZGxlckJyKG5ld1Jvdy5uZXh0U2libGluZywgZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiBuZXdSb3dcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXJCcihub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChub2RlICYmIG5vZGUubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbGV0IG5leHREaXIgPSBkaXJlY3Rpb24gPyAncHJldmlvdXNTaWJsaW5nJyA6ICduZXh0U2libGluZydcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBub2RlW25leHREaXJdXG4gICAgICAgIGlmICghdGFyZ2V0Tm9kZSkgcmV0dXJuXG4gICAgICAgIGlmICh0YXJnZXROb2RlLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJCcih0YXJnZXROb2RlLCBkaXJlY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgbS5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHRhcmdldE5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZWFyY2hMZWZ0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZyAmJiBtLmlzSW5saW5lT3JUZXh0KGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgZWxlbWVudHMudW5zaGlmdChlbGVtZW50c1swXS5wcmV2aW91c1NpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaFJpZ2h0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICYmIG0uaXNJbmxpbmVPclRleHQoZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBnZXQgbm9kZSdzIHByZXZpb3VzIHJvdyB3aGljaCBoYXMgY29udGVudFxuICAgKiovXG4gIGdldFByZXZpb3VzUm93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHByZVJvd1xuICAgIGxldCByb3dzID0gbS5nZXRSb3dzKClcbiAgICBsZXQgcm93SW5kZXggPSBudWxsXG4gICAgcm93cy5mb3JFYWNoKChjdXJSb3csIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY3VyUm93ID09PSByb3cpIHtcbiAgICAgICAgcm93SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgICAgaWYgKHJvd0luZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJSb3cuaW5uZXJIVE1MICE9PSAnJykge1xuICAgICAgICAgIHByZVJvdyA9IGN1clJvd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcHJlUm93XG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IHJvdyBpcyBlbXB0eVxuICAgKiovXG4gIGlzRW1wdHlSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5pc1Jvdyhub2RlKSA/IG5vZGUgOiBtLmdldFJvdyhub2RlKVxuICAgIGlmIChyb3cuZ2V0QXR0cmlidXRlKSB7XG4gICAgICBpZiAodHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93LmlubmVyVGV4dC5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IG5vZGUgaXMgZW1wdHlcbiAgICoqL1xuICBpc0VtcHR5Tm9kZSAobm9kZSkge1xuICAgIGxldCBjdG4gPSB0eXBlb2Ygbm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gbm9kZS5pbm5lclRleHQgOiBub2RlLm5vZGVWYWx1ZVxuICAgIGlmICh0eXBlb2YgY3RuICE9PSAnc3RyaW5nJykgcmV0dXJuXG4gICAgcmV0dXJuIGN0bi5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHRyeSB0byBjb2xsYXBzZSBhdCB0YXJnZXQgcm93XG4gICAqKi9cbiAgY29sbGFwc2VBdFJvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmlzUm93KG5vZGUpID8gbm9kZSA6IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHMgPSBhbS5nZXRTZWxlY3Rpb24oKVxuICAgIHRyeSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMClcbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIHNlYXJjaGluZyBuZXN0ZWQgYW5jZXN0b3JzIHRpbGwgYm9yZGVyIHRvIGZpbmQgdGhlIHNwZWNpZmllZCB0YWdOYW1lXG4gICAqIEBwYXJhbSB7bm9kZX0gZnJvbSB3aGljaCBub2RlXG4gICAqIEBwYXJhbSB7YXJyfSBpbmNsdWRlcyB0YWcgbmFtZXMgb2YgdGFyZ2V0IHRhZ1xuICAgKiBAcGFyYW0ge25vZGV9IHNlYXJjaCBib3JkZXJcbiAgICogQHJldHVybiB7YXJyfVxuICAgKiovXG4gIGZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIgKG5vZGUsIHRhZ05hbWVsaXN0LCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gYm9yZGVyKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWVcbiAgICAgIGlmIChub2RlTmFtZSAmJiB0YWdOYW1lbGlzdC5pbmNsdWRlcyhub2RlTmFtZSkpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobm9kZU5hbWUpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gobm9kZU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiByZXR1cm4gYSBuZXN0ZWQgRE9NIGRhdGEgdGhyb3VnaCBhIHRhZyBuYW1lIGxpc3RcbiAgICoqL1xuICBjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QgKGxpc3QpIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgZG9tOiBudWxsLFxuICAgICAgZGVlcGVzdElkOiBudWxsLFxuICAgICAgZGVlcGVzdDogbnVsbFxuICAgIH1cbiAgICBsaXN0LmZvckVhY2goKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBlbGVcbiAgICAgIGxldCBwYXJlbnQgPSByZXN1bHRbaW5kZXggLSAxXVxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmVzdWx0LmRlZXBlc3QgPSBlbGVcbiAgICAgICAgcmVzdWx0LmRlZXBlc3RJZCA9IGFtLmNyZWF0ZVJhbmRvbUlkKCdkZWVwZXN0JylcbiAgICAgICAgcmVzdWx0LmRvbSA9IHJlc3VsdFsnMCddXG4gICAgICAgIGVsZS5pZCA9IHJlc3VsdC5kZWVwZXN0SWRcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2hhbmRsZS1tZXRob2RzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibXktdnVlLWVkaXRvclxcXCIgOmNsYXNzPVxcXCJ7J2Z1bGwtc2NyZWVuJzpmdWxsU2NyZWVufVxcXCIgOnN0eWxlPVxcXCJ7J3otaW5kZXgnOnpJbmRleH1cXFwiPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJ0b29sYmFyXFxcIiA6c3R5bGU9XFxcInsnei1pbmRleCc6ekluZGV4KzF9XFxcIiByZWY9XFxcInRvb2xiYXJcXFwiIGRhdGEtZWRpdG9yPVxcXCJ0b29sYmFyXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwidGFic1xcXCI+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCJtb2R1bGUgaW4gbW9kdWxlc1xcXCI+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiIW1vZHVsZS5oYXNUYWJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGkgOnRpdGxlPVxcXCJsb2NhbGVbbW9kdWxlLmkxOG5dXFxcIiBjbGFzcz1cXFwidGFiIGJ0blxcXCIgOmNsYXNzPVxcXCJ7aGlnaExpZ2h0OiBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCwgZm9yYmlkZGVuOiBtb2R1bGUuZm9yYmlkZGVufVxcXCIgQGNsaWNrPVxcXCJhY3RpdmVNb2R1bGUobW9kdWxlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiIDpjbGFzcz1cXFwibW9kdWxlLmljb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICA8a2VlcC1hbGl2ZT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRhYlxcXCIgOmlzPVxcXCJtb2R1bGUudGFiTmFtZVxcXCIgOmFjdGl2ZUl0ZW09XFxcIm1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0XFxcIiA6Zm9yYmlkZGVuPVxcXCJtb2R1bGUuZm9yYmlkZGVuXFxcIiA6Y2xhc3M9XFxcIntoaWdoTGlnaHQ6IG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0LCBmb3JiaWRkZW46IG1vZHVsZS5mb3JiaWRkZW59XFxcIiBAY2xpY2s9XFxcImFjdGl2ZU1vZHVsZShtb2R1bGUpXFxcIj48L2xpPlxcbiAgICAgICAgICAgICAgICA8L2tlZXAtYWxpdmU+XFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L25hdj5cXG5cXG4gICAgPHAgY2xhc3M9J2NvbnRlbnQnIDppcz1cXFwiY29uc3RhbnRDb25maWcuUk9XX1RBR1xcXCIgOnNwZWxsY2hlY2s9XFxcInNwZWxsY2hlY2tcXFwiIHJlZj1cXFwiY29udGVudFxcXCIgaWQ9XFxcImVkaXRvci1jb250ZW50XFxcIiA6c3R5bGU9XFxcImNvbnRlbnRTdHlsZVxcXCIgZGF0YS1lZGl0b3I9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgICAgY29udGVudGVkaXRhYmxlPVxcXCJwbGFpbnRleHQtb25seVxcXCIgdi1kcmFnLXBpYz1cXFwiaGFuZGxlRHJhZ1BpY1xcXCI+XFxuICAgIDwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBkaXJlY3RpdmUgZHJhZyBhbmQgZHJvcCBwaWNcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBsZXQgZWRpdG9yID0gdm5vZGUuY29udGV4dFxuICAgIGxldCBvbkRyYWdPdmVyID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlKGUudGFyZ2V0LCAxKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxlY3Rpb24uY29sbGFwc2UoZS50YXJnZXQsIDApXG4gICAgICB9XG4gICAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICBlZGl0b3IubW9kdWxlSW5zcGVjdCgpXG4gICAgfVxuICAgIGxldCBvbkRyYWdMZWF2ZSA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgbGV0IG9uRHJvcCA9IGUgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICBsZXQgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgZmlsZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgbGV0IGN1ckZpbGUgPSBmaWxlc1tpXVxuICAgICAgICAgIGlmIChjdXJGaWxlLnNpemUgJiYgY3VyRmlsZS50eXBlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnZhbHVlKGN1ckZpbGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgb25EcmFnRW50ZXIsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3ZlciwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuXG4gICAgZWwuX19kcmFnT3ZlckhhbmRsZXIgPSBvbkRyYWdPdmVyXG4gICAgZWwuX19kcmFnTGVhdmVIYW5kbGVyID0gb25EcmFnTGVhdmVcbiAgICBlbC5fX2Ryb3BIYW5kbGVyID0gb25Ecm9wXG4gIH0sXG4gIHVuYmluZCAoZWwsIGJpbmRpbmcpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGVsLl9fZHJhZ092ZXJIYW5kbGVyKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGVsLl9fZHJhZ0xlYXZlSGFuZGxlcilcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZWwuX19kcm9wSGFuZGxlcilcbiAgICBkZWxldGUgZWwuX19kcmFnT3ZlckhhbmRsZXJcbiAgICBkZWxldGUgZWwuX19kcmFnTGVhdmVIYW5kbGVyXG4gICAgZGVsZXRlIGVsLl9fZHJvcEhhbmRsZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIi8qXG4gKiBsb2FkIHJ1bGUga2V5d29yZHMgb2Ygc3R5bGUgaW5zcGVjdFxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3VyTW9kdWxlLCBtb2R1bGVzKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICBsZXQgY3VyRXhjbHVkZSA9IGN1ck1vZHVsZS5leGNsdWRlXG4gIGlmIChBcnJheS5pc0FycmF5KGN1ckV4Y2x1ZGUpKSByZXR1cm4gY3VyRXhjbHVkZVxuICBpZiAodHlwZW9mIGN1ckV4Y2x1ZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IG1vZHVsZU5hbWVMaXN0ID0gW11cbiAgICBtb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICBpZiAobS5uYW1lKSB7XG4gICAgICAgIG1vZHVsZU5hbWVMaXN0LnB1c2gobS5uYW1lKVxuICAgICAgfVxuICAgIH0pXG4gICAgbW9kdWxlTmFtZUxpc3QgPSBBcnJheS5mcm9tKG5ldyBTZXQobW9kdWxlTmFtZUxpc3QpKVxuICAgIHN3aXRjaCAoY3VyRXhjbHVkZSkge1xuICAgICAgLy8gZXhjbHVkZSBhbGwgbW9kdWxlc1xuICAgICAgY2FzZSAnQUxMJzpcbiAgICAgICAgcmVzdWx0ID0gbW9kdWxlTmFtZUxpc3RcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIGV4Y2x1ZGUgYWxsIG1vZHVsZXMgYnV0IGN1cnJlbnQgbW9kdWxlXG4gICAgICBjYXNlICdBTExfQlVUX01ZU0VMRic6XG4gICAgICAgIHJlc3VsdCA9IG1vZHVsZU5hbWVMaXN0XG4gICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0LmluZGV4T2YoY3VyTW9kdWxlLm5hbWUpLCAxKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsaWduOiAn5a+56b2Q5pa55byPJyxcbiAgICBpbWFnZTogJ+WbvueJhycsXG4gICAgbGlzdDogJ+WIl+ihqCcsXG4gICAgbGluazogJ+mTvuaOpScsXG4gICAgdW5saW5rOiAn5Y676Zmk6ZO+5o6lJyxcbiAgICB0YWJsZTogJ+ihqOagvCcsXG4gICAgZm9udDogJ+aWh+WtlycsXG4gICAgJ2Z1bGwgc2NyZWVuJzogJ+WFqOWxjycsXG4gICAgdGV4dDogJ+aOkueJiCcsXG4gICAgZXJhc2VyOiAn5qC85byP5riF6ZmkJyxcbiAgICBpbmZvOiAn5YWz5LqOJyxcbiAgICBjb2xvcjogJ+minOiJsicsXG4gICAgJ3BsZWFzZSBlbnRlciBhIHVybCc6ICfor7fovpPlhaXlnLDlnYAnLFxuICAgICdjcmVhdGUgbGluayc6ICfliJvlu7rpk77mjqUnLFxuICAgIGJvbGQ6ICfliqDnspcnLFxuICAgIGl0YWxpYzogJ+WAvuaWnCcsXG4gICAgdW5kZXJsaW5lOiAn5LiL5YiS57q/JyxcbiAgICAnc3RyaWtlIHRocm91Z2gnOiAn5Yig6Zmk57q/JyxcbiAgICBzdWJzY3JpcHQ6ICfkuIrmoIcnLFxuICAgIHN1cGVyc2NyaXB0OiAn5LiL5qCHJyxcbiAgICBoZWFkaW5nOiAn5qCH6aKYJyxcbiAgICAnZm9udCBuYW1lJzogJ+Wtl+S9kycsXG4gICAgJ2ZvbnQgc2l6ZSc6ICfmloflrZflpKflsI8nLFxuICAgICdsZWZ0IGp1c3RpZnknOiAn5bem5a+56b2QJyxcbiAgICAnY2VudGVyIGp1c3RpZnknOiAn5bGF5LitJyxcbiAgICAncmlnaHQganVzdGlmeSc6ICflj7Plr7npvZAnLFxuICAgICdvcmRlcmVkIGxpc3QnOiAn5pyJ5bqP5YiX6KGoJyxcbiAgICAndW5vcmRlcmVkIGxpc3QnOiAn5peg5bqP5YiX6KGoJyxcbiAgICAnZm9yZSBjb2xvcic6ICfliY3mma/oibInLFxuICAgICdiYWNrZ3JvdW5kIGNvbG9yJzogJ+iDjOaZr+iJsicsXG4gICAgJ3JvdyBjb3VudCc6ICfooYzmlbAnLFxuICAgICdjb2x1bW4gY291bnQnOiAn5YiX5pWwJyxcbiAgICBzYXZlOiAn56Gu5a6aJyxcbiAgICB1cGxvYWQ6ICfkuIrkvKAnLFxuICAgIHByb2dyZXNzOiAn6L+b5bqmJyxcbiAgICB1bmtub3duOiAn5pyq55+lJyxcbiAgICAncGxlYXNlIHdhaXQnOiAn6K+356iN562JJyxcbiAgICBlcnJvcjogJ+mUmeivrycsXG4gICAgYWJvcnQ6ICfkuK3mlq0nLFxuICAgIHJlc2V0OiAn6YeN572uJyxcbiAgICBocjogJ+WIhumalOe6vycsXG4gICAgdW5kbzogJ+aSpOa2iCcsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ+ihjOmrmCcsXG4gICAgJ2V4Y2VlZCBzaXplIGxpbWl0JzogJ+i2heWHuuWkp+Wwj+mZkOWItidcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaTE4bi96aC1jbi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGlnbjogJ2FsaWduJyxcbiAgICBpbWFnZTogJ2ltYWdlJyxcbiAgICBsaXN0OiAnbGlzdCcsXG4gICAgbGluazogJ2xpbmsnLFxuICAgIHVubGluazogJ3VubGluaycsXG4gICAgdGFibGU6ICd0YWJsZScsXG4gICAgZm9udDogJ2ZvbnQnLFxuICAgICdmdWxsIHNjcmVlbic6ICdmdWxsIHNjcmVlbicsXG4gICAgdGV4dDogJ3RleHQnLFxuICAgIGVyYXNlcjogJ3JlbW92ZSBmb3JtYXQnLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICAncGxlYXNlIGVudGVyIGEgdXJsJzogJ3BsZWFzZSBlbnRlciBhIHVybCcsXG4gICAgJ2NyZWF0ZSBsaW5rJzogJ2NyZWF0ZSBsaW5rJyxcbiAgICBib2xkOiAnYm9sZCcsXG4gICAgaXRhbGljOiAnaXRhbGljJyxcbiAgICB1bmRlcmxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICdzdHJpa2UgdGhyb3VnaCc6ICdzdHJpa2UgdGhyb3VnaCcsXG4gICAgc3Vic2NyaXB0OiAnc3Vic2NyaXB0JyxcbiAgICBzdXBlcnNjcmlwdDogJ3N1cGVyc2NyaXB0JyxcbiAgICBoZWFkaW5nOiAnaGVhZGluZycsXG4gICAgJ2ZvbnQgbmFtZSc6ICdmb250IG5hbWUnLFxuICAgICdmb250IHNpemUnOiAnZm9udCBzaXplJyxcbiAgICAnbGVmdCBqdXN0aWZ5JzogJ2xlZnQganVzdGlmeScsXG4gICAgJ2NlbnRlciBqdXN0aWZ5JzogJ2NlbnRlciBqdXN0aWZ5JyxcbiAgICAncmlnaHQganVzdGlmeSc6ICdyaWdodCBqdXN0aWZ5JyxcbiAgICAnb3JkZXJlZCBsaXN0JzogJ29yZGVyZWQgbGlzdCcsXG4gICAgJ3Vub3JkZXJlZCBsaXN0JzogJ3Vub3JkZXJlZCBsaXN0JyxcbiAgICAnZm9yZSBjb2xvcic6ICdmb3JlIGNvbG9yJyxcbiAgICAnYmFja2dyb3VuZCBjb2xvcic6ICdiYWNrZ3JvdW5kIGNvbG9yJyxcbiAgICAncm93IGNvdW50JzogJ3JvdyBjb3VudCcsXG4gICAgJ2NvbHVtbiBjb3VudCc6ICdjb2x1bW4gY291bnQnLFxuICAgIHNhdmU6ICdzYXZlJyxcbiAgICB1cGxvYWQ6ICd1cGxvYWQnLFxuICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbiAgICAncGxlYXNlIHdhaXQnOiAncGxlYXNlIHdhaXQnLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIGFib3J0OiAnYWJvcnQnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIGhyOiAnaG9yaXpvbnRhbCBydWxlJyxcbiAgICB1bmRvOiAndW5kbycsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ2xpbmUgaGVpZ2h0JyxcbiAgICAnZXhjZWVkIHNpemUgbGltaXQnOiAnZXhjZWVkIHNpemUgbGltaXQnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2kxOG4vZW4tdXMuanMiXSwic291cmNlUm9vdCI6IiJ9