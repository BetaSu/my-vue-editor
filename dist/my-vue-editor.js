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
/******/ 	var hotCurrentHash = "5d88c9633fb624785c69"; // eslint-disable-line no-unused-vars
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZDg4Yzk2MzNmYjYyNDc4NWM2OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2Fzc2lzdC1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWw/NDQzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2l0YWxpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bmRlcmxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pY291cnQtdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlLWhhbmRsZXIvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5TGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeUNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9oYW5kbGUtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bD81YmM2Iiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL3poLWNuLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2VuLXVzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRzIiwiYWRkU3R5bGUiLCJyaCIsImFyZyIsImRvQWRkIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGUiLCJzdHlsZU5hbWUiLCJ0ZXh0Tm9kZXMiLCJnZXRBbGxUZXh0Tm9kZXNJblJhbmdlIiwibGVuZ3RoIiwicmFuZ2UiLCJjb2xsYXBzZWQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInBhcmVudE5vZGUiLCJlZGl0Wm9uZSIsIm5ld1JvdyIsInRhZyIsImlubmVyVGV4dCIsIm5vZGVWYWx1ZSIsInJlcGxhY2VDaGlsZCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kQ29udGFpbmVyIiwidGV4dE5vZGUiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsImlzSW5saW5lRWxlbWVudCIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN1YnN0cmluZyIsImZyb250UGFydCIsImNyZWF0ZVRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJleGVjQ29tbWFuZCIsImVsZW1lbnQiLCJzdXJyb3VuZENvbnRlbnRzIiwicGFyZW50QmxvY2siLCJnZXRQYXJlbnRCbG9ja05vZGUiLCJsaW5lSGVpZ2h0IiwidiIsInMiLCJnZXRTZWxlY3Rpb24iLCJpbm5lckhUTUwiLCJoYXNDaGlsZE5vZGVzIiwiaSIsImN1ck5vZGUiLCJkZWxldGVDb250ZW50cyIsImluc2VydE5vZGUiLCJjb2xsYXBzZSIsIm5vZGVMaXN0Iiwid2VpZ2h0aW5nIiwidGV4dHMiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwiZG9JbmRlbnQiLCJub2RlTmFtZSIsImZpbmRTcGVjaWFsQW5jZXN0b3IiLCJST1dfVEFHIiwiaW5jbHVkZXMiLCJwdXNoIiwidHlwZSIsImN1ckxldmVsIiwiaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWciLCJNQVhfSU5ERU5UX0xFVkVMIiwiUk9XX1RBR19VUFBFUkNBU0UiLCJjdXJQZXJjZW50IiwiSU5ERU5UX1NUWUxFX05BTUUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiT1VUREVOVF9TVFlMRV9OQU1FIiwiSU5ERU5UX1dJRFRIX1BFUkNFTlQiLCJkb091dGRlbnQiLCJ0YXJnZXRJbmRlbnQiLCJzdGFydE5vZGUiLCJhbmNob3JOb2RlIiwicm93IiwiZ2V0Um93IiwiY3JlYXRlV3JhcHBlckZvcklubGluZSIsIm1heWJlSXNVbCIsImZpcnN0RWxlbWVudENoaWxkIiwibmV4dFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsImlzQ29sbGFwc2VkIiwiZWRpdG9yIiwibW9kdWxlc01hcCIsIm1vZHVsZUluc3BlY3RSZXN1bHQiLCJiciIsIm91dGVySFRNTCIsImluc2VydEltYWdlIiwiZm9udFNpemUiLCJkZWxldGUiLCJwYXN0ZSIsImVudGVyIiwia2V5ZG93biIsInVuZGVybGluZSIsInN0cmlrZVRocm91Z2giLCJib2xkIiwiaXRhbGljIiwianVzdGlmeUxlZnQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeVJpZ2h0IiwiYXNzaWduIiwibWl4aW4iLCJzb3VyY2UiLCJleHQiLCJrIiwiZGF0YVNyYyIsImRhdGFEZXNjIiwiaXNPYmoiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRhIiwic2xpY2UiLCJtZXRob2RzIiwiaWQiLCJkYXRhc2V0IiwiZWRpdG9yUm93IiwiY3JlYXRlUmFuZG9tSWQiLCJjb250ZW50ZWRpdGFibGUiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJpbnNlcnRBZnRlciIsIm5ld0VsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50IiwibGFzdENoaWxkIiwicHJlZmZpeCIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsImVkaXRab25lX2NhY2hlIiwicXVlcnlTZWxlY3RvciIsInNldFJhbmdlQXQiLCJjaGVja0FsbCIsImNyZWF0ZVJhbmdlIiwiZW5kIiwic2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJnZXRSYW5nZSIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwiSW5zcGVjdG9yIiwibW9kdWxlTmFtZSIsInBhcmFtIiwiRXJyb3IiLCJ0YWdNYXAiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlcyIsImF0dHJpYnV0ZXMiLCJyZXN1bHQiLCJpbnNwZWN0UmVzdWx0IiwibW9kdWxlU3R5bGUiLCJjdXJWYWx1ZSIsIml0ZW0iLCJhY3RpdmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsIm1vZHVsZUF0dHIiLCJ2YWx1ZSIsIm5vZGVWYWwiLCJydW4iLCJmbiIsInJlbW92ZUR1cGxhdGUiLCJsaXN0Iiwic2FtZVN0eWxlTWFwIiwibSIsImZyb20iLCJTZXQiLCJhbSIsIm1lcmdlZFN0eWxlIiwiRWRpdG9yIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJyZXNlcnZlZE5hbWVzIiwibmFtZSIsImNvbXBvbmVudHMiLCJleHRlbmRNb2R1bGVzIiwibW9kdWxlIiwiY3VyQ29uZmlnIiwibW9kdWxlQ29uZmlnIiwiZm9yYmlkZGVuIiwiaW5zcGVjdCIsImluc3BlY3RvciIsImFkZCIsImJpbmQiLCJleGNsdWRlIiwidGFiIiwicHJvcHMiLCJhY3RpdmVJdGVtIiwiU3RyaW5nIiwiQm9vbGVhbiIsInRhYk5hbWUiLCJpY29ucyIsImljb24iLCJoYXNUYWIiLCJpMThuIiwiY3VzdG9tSTE4biIsImtleSIsImxhbmd1YWdlIiwibG9jYWxlIiwic2hvcnRjdXQiLCJrZXlDb2RlIiwic3BlbGxjaGVjayIsImNvbXBvIiwiY29uc3RhbnRDb25maWciLCJWdWUiLCJjb21wb25lbnQiLCJleHBvcnRzIiwiZGVmaW5lUHJvcGVydHkiLCJzZWFyY2hFbGVtZW50IiwiZnJvbUluZGV4IiwiVHlwZUVycm9yIiwibyIsImxlbiIsIm4iLCJtYXgiLCJhYnMiLCJUZXh0IiwiY29udGFpbnMiLCJ0ZW1wbGF0ZSIsIndhdGNoIiwibWFwIiwiaW5kZXgiLCJhbGlnbk1hcCIsImNob29zZWQiLCJzZXRBbGlnbiIsIiRwYXJlbnQiLCJzYXZlQ3VycmVudFJhbmdlIiwibW9kdWxlSW5zcGVjdCIsImNoYW5nZUFsaWduIiwicHJlX2luZGV4IiwiaXNOYU4iLCJ0YXJnZXRfaW5kZXgiLCJjb25maWciLCJmb250QXR0ck1hcCIsImN1ck1vZHVsZSIsInNob3dMaXN0Iiwic2hvd0xpc3RGbiIsIiRyZWZzIiwiY2xhc3NMaXN0IiwiY2hhbmdlQXR0ciIsInNldEZvbnROYW1lIiwic2V0SGVhZGluZyIsImhlYWRpbmciLCJtb3VudGVkIiwiZGVmYXVsdCIsImhhbmRsZXIiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiY2FuVXBsb2FkU2FtZUltYWdlIiwiaW1nT2NjdXB5TmV3Um93IiwibWF4U2l6ZSIsImNvbXByZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwicGljayIsImZpbGUiLCJjbGljayIsInByb2Nlc3MiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNob3ciLCJpc0luUXVvdGUiLCJhY3RpdmVNb2R1bGVzIiwib3V0ZGVudCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJpbmRlbnQiLCJjb250ZW50IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJ6SW5kZXgiLCJhdXRvSGVpZ2h0IiwiZGlyZWN0aXZlcyIsImRyYWdQaWMiLCJhbGxBY3RpdmVNb2R1bGVzIiwiZnVsbFNjcmVlbiIsInBhcmVudEVsIiwiJGVsIiwibmV4dEVsIiwiYm9keSIsImNvbXB1dGVkIiwiY29udGVudFN0eWxlIiwiaW5uZXJIZWlnaHQiLCJ0b29sYmFyIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSIsImNsZWFyQWN0aXZlTW9kdWxlSXRlbSIsImhhbmRsZURyYWdQaWMiLCJkcmFnIiwiZW5hYmxlRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwiZm9jdXMiLCJibHVyIiwiY29tbWFuZCIsImV4ZWNPbmx5IiwicmVzdG9yZVNlbGVjdGlvbiIsIiRlbWl0Iiwic3RhcnQiLCJURVhUX05PREUiLCJhY3RpdmVNb2R1bGUiLCIkbmV4dFRpY2siLCJ0ZXh0QWZ0ZXREUiIsInRhZ1Jlc3VsdCIsInRhZ1Jlc3VsdFJEIiwic3R5bGVSZXN1bHQiLCJzdHlsZVJlc3VsdFJEIiwiYXR0cmlidXRlUmVzdWx0IiwiYXR0cmlidXRlUmVzdWx0UkQiLCJjb25jYXQiLCJleGNsdWRlTGlzdCIsImV4Y01vZHVsZSIsImV4YyIsImN1ck1vZHVsZUFjdGl2ZUl0ZW0iLCJjcmVhdGVkIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21tb24iLCJzY3JvbGxJbnRvVmlldyIsInRvdWNoSGFuZGxlciIsImJlZm9yZSIsImlzRW1wdHlOb2RlIiwidGV4dFRvUm93IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJ1cGRhdGVkIiwiYmVmb3JlRGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXN0cm95ZWQiLCJvdGhlck5vZGUiLCJSYW5nZUhhbmRsZXIiLCJSYW5nZSIsImJlZm9yZUxpc3QiLCJleGlzdENvbW1hbmQiLCJjdXN0b21Db21tYW5kIiwiYWZ0ZXJMaXN0IiwiYWN0aXZlcyIsInJldHVybkRhdGEiLCJvcmlnaW4iLCJGaWxlIiwiaGFuZGxlRmlsZSIsImZpZWxkTmFtZSIsInRoZW4iLCJyc3QiLCJzaXplIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImltZ0lkIiwiaW5zZXJ0QmFzZTY0IiwiYmFzZTY0IiwiY2F0Y2giLCJlcnIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlYWRBc0RhdGFVUkwiLCJjdXJSb3ciLCJmb3JjZUdldFJvdyIsInJlcGxhY2VTcmNBZnRlclVwbG9hZEZpbmlzaCIsInJlcGxhY2VJbWciLCJkZWxldGVJbWdXaGVuVXBsb2FkRmFpbCIsImRlbGV0ZUltZyIsInNyYyIsInJlbW92ZUF0dHJpYnV0ZSIsImJhc2VOb2RlIiwiaW5zZXJ0SFRNTCIsImZvY3VzTm9kZSIsImFuY2hvck9mZnNldCIsImZvY3VzT2Zmc2V0IiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJnZXREYXRhIiwib3JpZ2luYWxFdmVudCIsImNyZWF0ZVRleHRSYW5nZSIsInRleHRSYW5nZSIsInNlbCIsInRlbXBFbCIsIm1vdmVUb0VsZW1lbnRUZXh0Iiwic2VsZWN0IiwidWxPck9sIiwibm9kZUN0biIsImZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIiwiZXhpc3RTdHlsZSIsImZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIiLCJmaW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUiLCJuZXdET00iLCJjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QiLCJkb20iLCJkZWVwZXN0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiZGVlcGVzdElkIiwibmV3VGV4dCIsInEiLCJxdW90ZSIsImdldERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJxdW90ZVJvd3MiLCJyb3dzIiwiY2hpbGRyZW4iLCJxciIsImNvbnRhaW5lciIsInF1b3RlQmxvY2siLCJhbmNob3JSb3ciLCJjbG9uZU5vZGUiLCJjdXJRdW90ZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJjdG4iLCJwcmVSb3ciLCJnZXRQcmV2aW91c1JvdyIsImxhc3RFbGUiLCJwb3AiLCJpbnB1dCIsInQiLCJhZnRlcldoaWNoIiwiaXNFbXB0eVJvdyIsInRhcmdldEluZGV4Iiwic3RhcnRJbmRleCIsImNoaWxkIiwidW5kZWZpbmVkIiwiY29sbGFwc2VBdFJvdyIsInRvZG9JZCIsImNoZWNrYm94cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjIiwiYnRuIiwiY3RuQ2hlY2tlZExvZ2ljIiwiY2hlY2tlZCIsInRleHREZWNvcmF0aW9uIiwib25jaGFuZ2UiLCJvbmlucHV0Iiwib25rZXlkb3duIiwiZGVsZXRlVG9kbyIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdEJsb2NrIiwiY3VyUmFuZ2UiLCJhZnRlckRlbGV0ZSIsImZpcnN0Um93IiwiZmlzdEVsZW1lbnRDaGlsZCIsImZpcnN0Q2hpbGQiLCJlZGl0b3JUb2RvIiwiZGVsZXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRlc3QiLCJjbGVhckludGVydmFsIiwiZ2V0Um93cyIsIm1lcmdlQXJyYXkiLCJzb3VyY2VBcnIiLCJleHRBcnIiLCJlbCIsImFuY2VzdG9yIiwiZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2RlcyIsImVuZEVsIiwiZW5kSW5kZXgiLCJnZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2RlcyIsInN0YXJ0RWwiLCJibG9ja05vZGVOYW1lcyIsImlubGluZU5vZGVOYW1lcyIsImlzSW5saW5lT3JUZXh0IiwiaXNJbmxpbmUiLCJpc1RleHQiLCJnZXRBbGxTcGVjaWZ5Tm9kZSIsInNlYXJjaE9waW5pb24iLCJ0YXJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInRhZ3MiLCJvcGluaW9uS2V5cyIsInBhc3MiLCJhIiwib3BpbmlvbiIsImFuY2VzdG9yTm9kZU5hbWUiLCJudW0iLCJzZWxlY3RvciIsImZpcnN0T25lIiwiYm9yZGVyIiwiY29udGVudFpvbmUiLCJhbmNlc3RvcnMiLCJpc1RhcmdldCIsImdldE5vZGVOdW0iLCJyb290RWwiLCJpc1JvdyIsIndyYXBwZXJOb2RlTmFtZSIsInNlcGVyYXRlQnlCciIsImVsZW1lbnRzIiwic2VhcmNoTGVmdCIsInNlYXJjaFJpZ2h0IiwiZWxlIiwibGFzdE9uZSIsImhhbmRsZXJCciIsInByZXZpb3VzU2libGluZyIsImRpcmVjdGlvbiIsIm5leHREaXIiLCJ0YXJnZXROb2RlIiwidW5zaGlmdCIsInJvd0luZGV4IiwidGFnTmFtZWxpc3QiLCJkZWVwZXN0IiwiYmluZGluZyIsInZub2RlIiwiY29udGV4dCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsImRhdGFUcmFuc2ZlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJGaWxlIiwiX19kcmFnT3ZlckhhbmRsZXIiLCJfX2RyYWdMZWF2ZUhhbmRsZXIiLCJfX2Ryb3BIYW5kbGVyIiwidW5iaW5kIiwiY3VyRXhjbHVkZSIsIm1vZHVsZU5hbWVMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsImFsaWduIiwiaW1hZ2UiLCJsaW5rIiwidW5saW5rIiwidGFibGUiLCJmb250IiwiZXJhc2VyIiwiaW5mbyIsImNvbG9yIiwic3Vic2NyaXB0Iiwic3VwZXJzY3JpcHQiLCJzYXZlIiwidXBsb2FkIiwicHJvZ3Jlc3MiLCJ1bmtub3duIiwiZXJyb3IiLCJhYm9ydCIsInJlc2V0IiwiaHIiLCJ1bmRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBLFdBQUc7O0FBRUgsb0RBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOzs7O0FBSUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQTtBQUNBLG9DQUE0QjtBQUM1QixxQ0FBNkI7QUFDN0IseUNBQWlDOztBQUVqQywrQ0FBdUM7QUFDdkM7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QyxXQUFPLE9BWkk7QUFhWCwwQkFBc0Isb0JBYlg7QUFjWCxtQkFBZSxhQWRKO0FBZVhuYixVQUFNLE1BZks7QUFnQlhDLFlBQVEsUUFoQkc7QUFpQlhILGVBQVcsV0FqQkE7QUFrQlgsc0JBQWtCLGdCQWxCUDtBQW1CWHNiLGVBQVcsV0FuQkE7QUFvQlhDLGlCQUFhLGFBcEJGO0FBcUJYOVIsYUFBUyxTQXJCRTtBQXNCWCxpQkFBYSxXQXRCRjtBQXVCWCxpQkFBYSxXQXZCRjtBQXdCWCxvQkFBZ0IsY0F4Qkw7QUF5Qlgsc0JBQWtCLGdCQXpCUDtBQTBCWCxxQkFBaUIsZUExQk47QUEyQlgsb0JBQWdCLGNBM0JMO0FBNEJYLHNCQUFrQixnQkE1QlA7QUE2Qlgsa0JBQWMsWUE3Qkg7QUE4Qlgsd0JBQW9CLGtCQTlCVDtBQStCWCxpQkFBYSxXQS9CRjtBQWdDWCxvQkFBZ0IsY0FoQ0w7QUFpQ1grUixVQUFNLE1BakNLO0FBa0NYQyxZQUFRLFFBbENHO0FBbUNYQyxjQUFVLFVBbkNDO0FBb0NYQyxhQUFTLFNBcENFO0FBcUNYLG1CQUFlLGFBckNKO0FBc0NYQyxXQUFPLE9BdENJO0FBdUNYQyxXQUFPLE9BdkNJO0FBd0NYQyxXQUFPLE9BeENJO0FBeUNYQyxRQUFJLGlCQXpDTztBQTBDWEMsVUFBTSxNQTFDSztBQTJDWCxtQkFBZSxhQTNDSjtBQTRDWCx5QkFBcUI7QUE1Q1YsQyIsImZpbGUiOiJteS12dWUtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJteVZ1ZUVkaXRvclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJteVZ1ZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJteVZ1ZUVkaXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVteVZ1ZUVkaXRvclwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVteVZ1ZUVkaXRvclwiXSA9IFxyXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0XHRpZihwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHR9IDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiBcdFx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xyXG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XHJcbiBcdFx0O1xyXG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiBcdFx0XHRpZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xyXG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcclxuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiBcdFx0XHRcdGlmKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcclxuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XHJcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxyXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcclxuIFx0XHRcdFx0XHRcdHJldHVybjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0XHJcbiBcdFxyXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XHJcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNWQ4OGM5NjMzZmI2MjQ3ODVjNjlcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcclxuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XHJcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRpZighbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xyXG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcclxuIFx0XHRcdGlmKG1lLmhvdC5hY3RpdmUpIHtcclxuIFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xyXG4gXHRcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA8IDApXHJcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA8IDApXHJcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcclxuIFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcclxuIFx0XHR9O1xyXG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fTtcclxuIFx0XHRmb3IodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XHJcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicmVhZHlcIilcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcclxuIFx0XHRcdFx0dGhyb3cgZXJyO1xyXG4gXHRcdFx0fSk7XHJcbiBcdFxyXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xyXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XHJcbiBcdFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcclxuIFx0XHRcdFx0XHRpZighaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9O1xyXG4gXHRcdHJldHVybiBmbjtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaG90ID0ge1xyXG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxyXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcclxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXHJcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcclxuIFx0XHJcbiBcdFx0XHQvLyBNb2R1bGUgQVBJXHJcbiBcdFx0XHRhY3RpdmU6IHRydWUsXHJcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxyXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxyXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxyXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGlmKCFsKSByZXR1cm4gaG90U3RhdHVzO1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxyXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXHJcbiBcdFx0fTtcclxuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XHJcbiBcdFx0cmV0dXJuIGhvdDtcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XHJcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcclxuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdERlZmVycmVkO1xyXG4gXHRcclxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXHJcbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XHJcbiBcdFx0dmFyIGlzTnVtYmVyID0gKCtpZCkgKyBcIlwiID09PSBpZDtcclxuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcclxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XHJcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XHJcbiBcdFx0XHRpZighdXBkYXRlKSB7XHJcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0XHRcdHJldHVybiBudWxsO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcclxuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcclxuIFx0XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XHJcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcclxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcclxuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcclxuIFx0XHRcdHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xyXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xyXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRpZighaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxyXG4gXHRcdFx0cmV0dXJuO1xyXG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XHJcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0aWYoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xyXG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XHJcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcclxuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcclxuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XHJcbiBcdFx0aWYoIWRlZmVycmVkKSByZXR1cm47XHJcbiBcdFx0aWYoaG90QXBwbHlPblVwZGF0ZSkge1xyXG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cclxuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxyXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxyXG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xyXG4gXHRcdFx0fSkudGhlbihcclxuIFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiBcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gXHRcdFx0XHR9LFxyXG4gXHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpIHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcclxuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIGNiO1xyXG4gXHRcdHZhciBpO1xyXG4gXHRcdHZhciBqO1xyXG4gXHRcdHZhciBtb2R1bGU7XHJcbiBcdFx0dmFyIG1vZHVsZUlkO1xyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcclxuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xyXG4gXHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxyXG4gXHRcdFx0XHRcdGlkOiBpZFxyXG4gXHRcdFx0XHR9O1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xyXG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZighbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9tYWluKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIHtcclxuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxyXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcclxuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XHJcbiBcdFx0XHRcdFx0aWYoIXBhcmVudCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxyXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXHJcbiBcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcclxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXHJcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcclxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcclxuIFx0XHRcdFx0aWYoYS5pbmRleE9mKGl0ZW0pIDwgMClcclxuIFx0XHRcdFx0XHRhLnB1c2goaXRlbSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxyXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcclxuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcclxuIFx0XHJcbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcclxuIFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIik7XHJcbiBcdFx0fTtcclxuIFx0XHJcbiBcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xyXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xyXG4gXHRcdFx0XHRpZihob3RVcGRhdGVbaWRdKSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxyXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXHJcbiBcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xyXG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xyXG4gXHRcdFx0XHRpZihyZXN1bHQuY2hhaW4pIHtcclxuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0c3dpdGNoKHJlc3VsdC50eXBlKSB7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgY2hhaW5JbmZvKTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIgaW4gXCIgKyByZXN1bHQucGFyZW50SWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25VbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25EaXNwb3NlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcclxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoYWJvcnRFcnJvcikge1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihkb0FwcGx5KSB7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdFx0XHRcdFx0Zm9yKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSwgcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvRGlzcG9zZSkge1xyXG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXHJcbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xyXG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxyXG4gXHRcdFx0XHR9KTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XHJcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xyXG4gXHRcdFx0aWYoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XHJcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0dmFyIGlkeDtcclxuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcclxuIFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRpZighbW9kdWxlKSBjb250aW51ZTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xyXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcclxuIFx0XHRcdFx0Y2IoZGF0YSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xyXG4gXHRcclxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXHJcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxyXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cclxuIFx0XHRcdGZvcihqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XHJcbiBcdFx0XHRcdGlmKCFjaGlsZCkgY29udGludWU7XHJcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XHJcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cclxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcclxuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcclxuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xyXG4gXHRcdFx0XHRcdFx0aWYoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcclxuIFx0XHJcbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xyXG4gXHRcclxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcclxuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKG1vZHVsZSkge1xyXG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcclxuIFx0XHRcdFx0XHRcdGlmKGNiKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKGNhbGxiYWNrcy5pbmRleE9mKGNiKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRmb3IoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gXHRcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xyXG4gXHRcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XHJcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcclxuIFx0XHRmb3IoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcclxuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGVycjIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25FcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmdpbmFsRXJyb3I6IGVyciwgLy8gVE9ETyByZW1vdmUgaW4gd2VicGFjayA0XHJcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdH0pO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnIyO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxyXG4gXHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxyXG4gXHRcdGlmKGVycm9yKSB7XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xyXG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgxMSkoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVkODhjOTYzM2ZiNjI0Nzg1YzY5IiwiaW1wb3J0IGluc2VydEltYWdlIGZyb20gJy4vaW5zZXJ0SW1hZ2UnXG5pbXBvcnQgZm9udFNpemUgZnJvbSAnLi9mb250U2l6ZSdcbmltcG9ydCBwYXN0ZSBmcm9tICcuL3Bhc3RlJ1xuaW1wb3J0IGVudGVyIGZyb20gJy4vZW50ZXInXG5pbXBvcnQgdW5kZXJsaW5lIGZyb20gJy4vdW5kZXJsaW5lJ1xuaW1wb3J0IHN0cmlrZVRocm91Z2ggZnJvbSAnLi9zdHJpa2VUaHJvdWdoJ1xuaW1wb3J0IGl0YWxpYyBmcm9tICcuL2l0YWxpYydcbmltcG9ydCBib2xkIGZyb20gJy4vYm9sZCdcbmltcG9ydCBxdW90ZSBmcm9tICcuL3F1b3RlJ1xuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IGtleWRvd24gZnJvbSAnLi9rZXlkb3duJ1xuaW1wb3J0IGRlbGV0ZU1vZHVsZSBmcm9tICcuL2RlbGV0ZSdcbmltcG9ydCBqdXN0aWZ5UmlnaHQgZnJvbSAnLi9qdXN0aWZ5UmlnaHQnXG5pbXBvcnQganVzdGlmeUxlZnQgZnJvbSAnLi9qdXN0aWZ5TGVmdCdcbmltcG9ydCBqdXN0aWZ5Q2VudGVyIGZyb20gJy4vanVzdGlmeUNlbnRlcidcbmltcG9ydCB7aXNPYmp9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCBjb21tYW5kcyA9IHtcbiAgLypcbiAgICogYWRkIGEgc3R5bGUgYXR0cmlidXRlIGluIHJhbmdlKGhhdmUgYnVnKVxuICAgKiBAcGFyYW0ge29ian0gYXJnIGluY2x1ZGVcbiAgICogICAgICBrZXk6IHN0eWxlIG5hbWVcbiAgICogICAgICB2YWx1ZTogc3R5bGUgdmFsdWVcbiAgICoqL1xuICBhZGRTdHlsZSAocmgsIGFyZykge1xuICAgIGZ1bmN0aW9uIGRvQWRkKG5vZGUpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xuICAgICAgICBub2RlLnN0eWxlW3N0eWxlTmFtZV0gPSBhcmdbc3R5bGVOYW1lXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqKGFyZykpIHJldHVyblxuICAgIGNvbnN0IHRleHROb2RlcyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIGlmICghdGV4dE5vZGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIGRvQWRkKG5vZGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiB0ZXh0Tm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgbm9kZSA9IHRleHROb2Rlc1swXS5wYXJlbnROb2RlXG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe3RhZzogJ3AnfSlcbiAgICAgICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dE5vZGVzWzBdLm5vZGVWYWx1ZVxuICAgICAgICAgIG5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgdGV4dE5vZGVzWzBdKVxuICAgICAgICAgIGRvQWRkKG5ld1JvdylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkb0FkZChub2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRleHROb2Rlcy5sZW5ndGggPT09IDEgJiYgdGV4dE5vZGVzWzBdID09PSByaC5yYW5nZS5zdGFydENvbnRhaW5lclxuICAgICAgJiYgdGV4dE5vZGVzWzBdID09PSByaC5yYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHRleHROb2RlID0gdGV4dE5vZGVzWzBdXG4gICAgICBpZiAocmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgcmgucmFuZ2UuZW5kT2Zmc2V0ID09PSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoXG4gICAgICAgIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0LCByaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICBkb0FkZChzcGFuKVxuICAgICAgY29uc3QgZnJvbnRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZygwLCByaC5yYW5nZS5zdGFydE9mZnNldCkpXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcm9udFBhcnQsIHRleHROb2RlKVxuICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhyaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICByaC5yYW5nZS5zZXRTdGFydChzcGFuLCAwKVxuICAgICAgcmgucmFuZ2Uuc2V0RW5kKHNwYW4sIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaCgodGV4dE5vZGUpID0+IHtcbiAgICAgIGlmICh0ZXh0Tm9kZSA9PT0gcmgucmFuZ2Uuc3RhcnRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhcbiAgICAgICAgICAwLCByaC5yYW5nZS5zdGFydE9mZnNldClcbiAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Tm9kZSA9PT0gcmgucmFuZ2UuZW5kQ29udGFpbmVyKSB7XG4gICAgICAgIGlmIChyaC5yYW5nZS5lbmRPZmZzZXQgPT09IHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcocmgucmFuZ2UuZW5kT2Zmc2V0KVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAmJiByaC5pc0lubGluZUVsZW1lbnQodGV4dE5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGRvQWRkKHNwYW4pXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfSxcbiAgJ2Zvcm1hdEJsb2NrJyAocmgsIGFyZykge1xuICAgIGlmIChkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBmYWxzZSwgYXJnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIGhhY2tcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcpXG4gICAgcmgucmFuZ2Uuc3Vycm91bmRDb250ZW50cyhlbGVtZW50KVxuICAgIHJldHVyblxuICB9LFxuICAnbGluZUhlaWdodCcgKHJoLCBhcmcpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaCgodGV4dE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudEJsb2NrID0gcmguZ2V0UGFyZW50QmxvY2tOb2RlKHRleHROb2RlKVxuICAgICAgaWYgKHBhcmVudEJsb2NrKSB7XG4gICAgICAgIHBhcmVudEJsb2NrLnN0eWxlLmxpbmVIZWlnaHQgPSBhcmdcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9LFxuICAnaW5zZXJ0SFRNTCcgKHJoLCBhcmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgYXJnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbW1hbmRzWydmb3JjZUluc2VydEhUTUwnXShyaCwgYXJnKVxuICB9LFxuICAvKlxuICAgKiBpbnNlcnRIVE1MIHdvdWxkIGluc2VydCBET00gYXMgcm93J3MgY2hpbGRcbiAgICogZm9yY2VJbnNlcnRIVE1MIHdvdWxkIGluc2VydCBET00gYXMgYW5jaG9yTm9kZSBvZiByYW5nZSBcbiAgICoqL1xuICAnZm9yY2VJbnNlcnRIVE1MJyAocmgsIGFyZykge1xuICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgdi5pbm5lckhUTUwgPSBhcmdcbiAgICBpZiAodi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJOb2RlID0gdi5jaGlsZE5vZGVzW2ldXG4gICAgICAgIHJoLnJhbmdlLmRlbGV0ZUNvbnRlbnRzKClcbiAgICAgICAgcmgucmFuZ2UuaW5zZXJ0Tm9kZShjdXJOb2RlKVxuICAgICAgICBzLmNvbGxhcHNlKGN1ck5vZGUsIDEpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICAnaW5kZW50JyAocmgsIGFyZykge1xuICAgIGxldCBub2RlTGlzdCA9IFtdXG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgd2VpZ2h0aW5nKHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIHdlaWdodGluZyh0ZXh0KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgLy8gY2FuY2VsIHRvZG8gaW5kZW50XG4gICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRvSW5kZW50KG5vZGUubm9kZU5hbWUsIG5vZGUpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHdlaWdodGluZyh0ZXh0KSB7XG4gICAgICBsZXQgbm9kZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgJ2xpJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgaWYgKG5vZGUgJiYgIW5vZGVMaXN0LmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0luZGVudCh0eXBlLCBub2RlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnTEknOlxuICAgICAgICAgIGxldCBjdXJMZXZlbCA9IHJoLmhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnKG5vZGUsICdVTCcpIHx8IHJoLmhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnKG5vZGUsICdPTCcpXG4gICAgICAgICAgaWYgKGN1ckxldmVsID49IGNvbnN0YW50Lk1BWF9JTkRFTlRfTEVWRUwpIGJyZWFrXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luZGVudCcsIGZhbHNlLCBhcmcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBjb25zdGFudC5ST1dfVEFHX1VQUEVSQ0FTRTpcbiAgICAgICAgICBsZXQgY3VyUGVyY2VudCA9IG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdIHx8ICcwJ1xuICAgICAgICAgIGN1clBlcmNlbnQgPSBOdW1iZXIoY3VyUGVyY2VudC5yZXBsYWNlKCclJywgJycpKVxuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50Lk9VVERFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIGlmIChjdXJQZXJjZW50IC8gY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlQgPj0gY29uc3RhbnQuTUFYX0lOREVOVF9MRVZFTCkge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSBjdXJQZXJjZW50ICsgJyUnXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSBjdXJQZXJjZW50ICsgY29uc3RhbnQuSU5ERU5UX1dJRFRIX1BFUkNFTlQgKyAnJSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdvdXRkZW50JyAocmgsIGFyZykge1xuICAgIGxldCBub2RlTGlzdCA9IFtdXG4gICAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgd2VpZ2h0aW5nKHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgIHdlaWdodGluZyh0ZXh0KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgZG9PdXRkZW50KG5vZGUubm9kZU5hbWUsIG5vZGUpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHdlaWdodGluZyh0ZXh0KSB7XG4gICAgICBsZXQgbm9kZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgJ2xpJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgaWYgKG5vZGUgJiYgIW5vZGVMaXN0LmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb091dGRlbnQodHlwZSwgbm9kZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0xJJzpcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnb3V0ZGVudCcsIGZhbHNlLCBhcmcpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBjb25zdGFudC5ST1dfVEFHX1VQUEVSQ0FTRTpcbiAgICAgICAgICBsZXQgY3VyUGVyY2VudCA9IG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdIHx8ICcwJ1xuICAgICAgICAgIGN1clBlcmNlbnQgPSBOdW1iZXIoY3VyUGVyY2VudC5yZXBsYWNlKCclJywgJycpKVxuICAgICAgICAgIGlmIChjdXJQZXJjZW50ID09PSAwKSByZXR1cm5cbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5PVVRERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICBsZXQgdGFyZ2V0SW5kZW50ID0gY3VyUGVyY2VudCAtIGNvbnN0YW50LklOREVOVF9XSURUSF9QRVJDRU5UXG4gICAgICAgICAgaWYgKHRhcmdldEluZGVudCA8IDApIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gJydcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSB0YXJnZXRJbmRlbnQgKyAnJSdcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnaW5zZXJ0VW5vcmRlcmVkTGlzdCcgKHJoLCBhcmcpIHtcbiAgICAvLyBkbyBub3QgaW5zZXJ0IHVsIGludG8gYSByb3dcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKVxuICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhzdGFydE5vZGUpXG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuXG4gICAgLy8gc3RhcnROb2RlIGlzIGVkaXQgem9uZVxuICAgIGlmICghcm93KSByZXR1cm5cblxuICAgIHJvdyA9IHJoLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUocm93LCBjb25zdGFudC5ST1dfVEFHKVxuXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gbGV0IHVsIGJlIGEgcm93XG4gICAgICBsZXQgbWF5YmVJc1VsID0gcm93LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBpZiAobWF5YmVJc1VsICYmIG1heWJlSXNVbC5ub2RlTmFtZSA9PT0gJ1VMJyAmJiByb3cubm9kZU5hbWUgIT09ICdVTCcpIHtcbiAgICAgICAgcm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1heWJlSXNVbCwgcm93KVxuICAgICAgICByb3cgPSBtYXliZUlzVWxcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIGJyXG4gICAgICBpZiAocm93Lm5leHRTaWJsaW5nICYmIHJvdy5uZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICByb3cubmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cubmV4dFNpYmxpbmcpXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgdHJlYXRtZW50IGZvciB1bD5saSwgdG8gbGV0IG1vZHVsZSBpbnNwZWN0IHJ1blxuICAgICAgLy8gaWYgdWwgYW5kIG9sIGlzIGJpbmQgaW50byBhIG1vZHVsZSdzIHRhYiwgdGhpcyBzaG91bGQgYmUgY2hhbmdlXG4gICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAhcmguZWRpdG9yLm1vZHVsZXNNYXBbJ3VsJ10ubW9kdWxlSW5zcGVjdFJlc3VsdCkge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCAnJiM4MjAzOycpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICAgIGlmIChzdGFydE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHJvdy5vdXRlckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnaW5zZXJ0T3JkZXJlZExpc3QnIChyaCwgYXJnKSB7XG4gICAgLy8gZG8gbm90IGluc2VydCB1bCBpbnRvIGEgcm93XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpXG4gICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgbGV0IHJvdyA9IHJoLmdldFJvdyhzdGFydE5vZGUpXG5cbiAgICAvLyBzdGFydE5vZGUgaXMgZWRpdCB6b25lXG4gICAgaWYgKCFyb3cpIHJldHVyblxuXG4gICAgcm93ID0gcmguY3JlYXRlV3JhcHBlckZvcklubGluZShyb3csIGNvbnN0YW50LlJPV19UQUcpXG5cbiAgICBpZiAocm93KSB7XG4gICAgICAvLyBsZXQgdWwgYmUgYSByb3dcbiAgICAgIGxldCBtYXliZUlzVWwgPSByb3cuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGlmIChtYXliZUlzVWwgJiYgbWF5YmVJc1VsLm5vZGVOYW1lID09PSAnT0wnICYmIHJvdy5ub2RlTmFtZSAhPT0gJ09MJykge1xuICAgICAgICByb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWF5YmVJc1VsLCByb3cpXG4gICAgICAgIHJvdyA9IG1heWJlSXNVbFxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgYnJcbiAgICAgIGlmIChyb3cubmV4dFNpYmxpbmcgJiYgcm93Lm5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIHJvdy5uZXh0U2libGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdy5uZXh0U2libGluZylcbiAgICAgIH1cblxuICAgICAgLy8gc3BlY2lhbCB0cmVhdG1lbnQgZm9yIHVsPmxpLCB0byBsZXQgbW9kdWxlIGluc3BlY3QgcnVuXG4gICAgICAvLyBpZiB1bCBhbmQgb2wgaXMgYmluZCBpbnRvIGEgbW9kdWxlJ3MgdGFiLCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VcbiAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmICFyaC5lZGl0b3IubW9kdWxlc01hcFsnb2wnXS5tb2R1bGVJbnNwZWN0UmVzdWx0KSB7XG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsICcmIzgyMDM7JylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgICAgaWYgKHN0YXJ0Tm9kZSA9PT0gcmguZWRpdFpvbmUoKSkge1xuICAgICAgICByb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgcm93Lm91dGVySFRNTClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmNvbW1hbmRzLmluc2VydEltYWdlID0gaW5zZXJ0SW1hZ2VcbmNvbW1hbmRzLmZvbnRTaXplID0gZm9udFNpemVcbmNvbW1hbmRzLmRlbGV0ZSA9IGRlbGV0ZU1vZHVsZVxuY29tbWFuZHMucGFzdGUgPSBwYXN0ZVxuY29tbWFuZHMuZW50ZXIgPSBlbnRlclxuY29tbWFuZHMua2V5ZG93biA9IGtleWRvd25cbmNvbW1hbmRzLnVuZGVybGluZSA9IHVuZGVybGluZVxuY29tbWFuZHMuc3RyaWtlVGhyb3VnaCA9IHN0cmlrZVRocm91Z2hcbmNvbW1hbmRzLmJvbGQgPSBib2xkXG5jb21tYW5kcy5pdGFsaWMgPSBpdGFsaWNcbmNvbW1hbmRzLmp1c3RpZnlMZWZ0ID0ganVzdGlmeUxlZnRcbmNvbW1hbmRzLmp1c3RpZnlDZW50ZXIgPSBqdXN0aWZ5Q2VudGVyXG5jb21tYW5kcy5qdXN0aWZ5UmlnaHQgPSBqdXN0aWZ5UmlnaHRcbk9iamVjdC5hc3NpZ24oY29tbWFuZHMsIHF1b3RlLCB0b2RvKVxuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVhfSU5ERU5UX0xFVkVMOiAxMCxcbiAgSU5ERU5UX1dJRFRIX1BFUkNFTlQ6IDgsXG4gIElOREVOVF9TVFlMRV9OQU1FOiAnbWFyZ2luTGVmdCcsXG4gIE9VVERFTlRfU1RZTEVfTkFNRTogJ21hcmdpblJpZ2h0JyxcbiAgUk9XX1RBRzogJ3AnLFxuICBST1dfVEFHX1VQUEVSQ0FTRTogJ1AnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnQtY29uZmlnLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb250LXRhYiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDRweCA0cHggNnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmZvbnQtdGFiOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4uZm9udC10YWIuZm9yYmlkZGVuIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5mb250LXRhYiAuaWNvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24ge1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsZWZ0OiAtMXB4O1xcbiAgdG9wOiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIGxpIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiA2MnB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyIS4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogc2hhZG93IGNsb25lXG4gKiBAcGFyYW0gc291cmNlICAgIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSBleHQgICAgICAgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBtaXhpbiA9IChzb3VyY2UgPSB7fSwgZXh0ID0ge30pID0+IHtcbiAgICBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgLy8gZm9yIGRhdGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKGsgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgY29uc3QgZGF0YVNyYyA9IHNvdXJjZVtrXVxuICAgICAgICAgICAgY29uc3QgZGF0YURlc2MgPSBleHRba11cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YURlc2MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFTcmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW2tdID0gZGF0YURlc2NcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2Vba10gPSAoKSA9PiBtaXhpbihkYXRhU3JjKCksIGRhdGFEZXNjKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291cmNlW2tdID0gZXh0W2tdXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzb3VyY2Vcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqID0gZGF0YSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkuc2xpY2UoLTcsIC0xKSA9PT0gJ09iamVjdCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYWJicixcXG5hZGRyZXNzLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG52YXIsXFxuYixcXG5pLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxO1xcbn1cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbmEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5pbnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5kZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbmFiYnJbdGl0bGVdLFxcbmRmblt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDAwO1xcbiAgY3Vyc29yOiBoZWxwO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm15LXZ1ZS1lZGl0b3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgaW1nIHtcXG4gIG1heC13aWR0aDogOTglO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnM6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAudGFiIHtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLnRhYiAuaWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDRweCA2cHg7XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxMnB4IEFyaWFsLCBIZWx2ZXRpY2EsIFRhaG9tYSwgVmVyZGFuYSwgU2Fucy1TZXJpZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bjpob3ZlciB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4uaGlnaExpZ2h0IHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0bi5mb3JiaWRkZW4ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBmb250IHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBibG9ja3F1b3RlIHtcXG4gIG1pbi13aWR0aDogMzhweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSB7XFxuICBtYXJnaW46IDE0cHggMCAxNHB4IDM1cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IC0yMXB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIGRpdiB7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiAwcHggNHB4IDAgLTI0cHg7XFxuICBjb2xvcjogI2I3YjdiNztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IHVsIHVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiA1LjUlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMy41cHg7XFxuICBsZWZ0OiAyLjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjY2RjOWM1O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItdG9kb10gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlciEuL3NyYy9lZGl0b3Ivc3R5bGUvbWFpbi5zdHlsXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBuPXQoKTtmb3IodmFyIHIgaW4gbikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1uW3JdfX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgaT1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7big2KSxuKDcpLGUuZXhwb3J0cz1uKDgpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGkoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT1udWxsLHRoaXMuX3ZhbHVlPW51bGwsdGhpcy5fZGVmZXJyZWRzPVtdLGwoZSxyKGEsdGhpcykscihzLHRoaXMpKX1mdW5jdGlvbiBvKGUpe3ZhciB0PXRoaXM7cmV0dXJuIG51bGw9PT10aGlzLl9zdGF0ZT92b2lkIHRoaXMuX2RlZmVycmVkcy5wdXNoKGUpOnZvaWQgZihmdW5jdGlvbigpe3ZhciBuPXQuX3N0YXRlP2Uub25GdWxmaWxsZWQ6ZS5vblJlamVjdGVkO2lmKG51bGw9PT1uKXJldHVybiB2b2lkKHQuX3N0YXRlP2UucmVzb2x2ZTplLnJlamVjdCkodC5fdmFsdWUpO3ZhciByO3RyeXtyPW4odC5fdmFsdWUpfWNhdGNoKGkpe3JldHVybiB2b2lkIGUucmVqZWN0KGkpfWUucmVzb2x2ZShyKX0pfWZ1bmN0aW9uIGEoZSl7dHJ5e2lmKGU9PT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXt2YXIgdD1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gdm9pZCBsKHIodCxlKSxyKGEsdGhpcykscihzLHRoaXMpKX10aGlzLl9zdGF0ZT0hMCx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1jYXRjaChuKXtzLmNhbGwodGhpcyxuKX19ZnVuY3Rpb24gcyhlKXt0aGlzLl9zdGF0ZT0hMSx0aGlzLl92YWx1ZT1lLHUuY2FsbCh0aGlzKX1mdW5jdGlvbiB1KCl7Zm9yKHZhciBlPTAsdD10aGlzLl9kZWZlcnJlZHMubGVuZ3RoO3Q+ZTtlKyspby5jYWxsKHRoaXMsdGhpcy5fZGVmZXJyZWRzW2VdKTt0aGlzLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBjKGUsdCxuLHIpe3RoaXMub25GdWxmaWxsZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOm51bGwsdGhpcy5vblJlamVjdGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMucmVzb2x2ZT1uLHRoaXMucmVqZWN0PXJ9ZnVuY3Rpb24gbChlLHQsbil7dmFyIHI9ITE7dHJ5e2UoZnVuY3Rpb24oZSl7cnx8KHI9ITAsdChlKSl9LGZ1bmN0aW9uKGUpe3J8fChyPSEwLG4oZSkpfSl9Y2F0Y2goaSl7aWYocilyZXR1cm47cj0hMCxuKGkpfX12YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0fHxmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGUsMSl9LGQ9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfTtpLnByb3RvdHlwZVtcImNhdGNoXCJdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHIsaSl7by5jYWxsKG4sbmV3IGMoZSx0LHIsaSkpfSl9LGkuYWxsPWZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoMT09PWFyZ3VtZW50cy5sZW5ndGgmJmQoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzKTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiByKG8sYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKGUpe3IobyxlKX0sbil9ZVtvXT1hLDA9PT0tLWkmJnQoZSl9Y2F0Y2godSl7bih1KX19aWYoMD09PWUubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIGk9ZS5sZW5ndGgsbz0wO288ZS5sZW5ndGg7bysrKXIobyxlW29dKX0pfSxpLnJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLmNvbnN0cnVjdG9yPT09aT9lOm5ldyBpKGZ1bmN0aW9uKHQpe3QoZSl9KX0saS5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7bihlKX0pfSxpLnJhY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTAsaT1lLmxlbmd0aDtpPnI7cisrKWVbcl0udGhlbih0LG4pfSl9LGkuX3NldEltbWVkaWF0ZUZuPWZ1bmN0aW9uKGUpe2Y9ZX0saS5wcm90b3R5cGUuYWx3YXlzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBufSl9LGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgbn0pfSl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6bi5Qcm9taXNlfHwobi5Qcm9taXNlPWkpfSh0aGlzKX0pLmNhbGwodCxuKDIpLnNldEltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiBpKGUsdCl7dGhpcy5faWQ9ZSx0aGlzLl9jbGVhckZuPXR9dmFyIG89bigzKS5uZXh0VGljayxhPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSxzPUFycmF5LnByb3RvdHlwZS5zbGljZSx1PXt9LGM9MDt0LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkoYS5jYWxsKHNldFRpbWVvdXQsd2luZG93LGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShhLmNhbGwoc2V0SW50ZXJ2YWwsd2luZG93LGFyZ3VtZW50cyksY2xlYXJJbnRlcnZhbCl9LHQuY2xlYXJUaW1lb3V0PXQuY2xlYXJJbnRlcnZhbD1mdW5jdGlvbihlKXtlLmNsb3NlKCl9LGkucHJvdG90eXBlLnVucmVmPWkucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe30saS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0sdCkpfSx0LnNldEltbWVkaWF0ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ZnVuY3Rpb24oZSl7dmFyIG49YysrLHI9YXJndW1lbnRzLmxlbmd0aDwyPyExOnMuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHVbbl09ITAsbyhmdW5jdGlvbigpe3Vbbl0mJihyP2UuYXBwbHkobnVsbCxyKTplLmNhbGwobnVsbCksdC5jbGVhckltbWVkaWF0ZShuKSl9KSxufSx0LmNsZWFySW1tZWRpYXRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cjpmdW5jdGlvbihlKXtkZWxldGUgdVtlXX19KS5jYWxsKHQsbigyKS5zZXRJbW1lZGlhdGUsbigyKS5jbGVhckltbWVkaWF0ZSl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe2M9ITEsYS5sZW5ndGg/dT1hLmNvbmNhdCh1KTpsPS0xLHUubGVuZ3RoJiZyKCl9ZnVuY3Rpb24gcigpe2lmKCFjKXt2YXIgZT1zZXRUaW1lb3V0KG4pO2M9ITA7Zm9yKHZhciB0PXUubGVuZ3RoO3Q7KXtmb3IoYT11LHU9W107KytsPHQ7KWEmJmFbbF0ucnVuKCk7bD0tMSx0PXUubGVuZ3RofWE9bnVsbCxjPSExLGNsZWFyVGltZW91dChlKX19ZnVuY3Rpb24gaShlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIG8oKXt9dmFyIGEscz1lLmV4cG9ydHM9e30sdT1bXSxjPSExLGw9LTE7cy5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO3UucHVzaChuZXcgaShlLHQpKSwxIT09dS5sZW5ndGh8fGN8fHNldFRpbWVvdXQociwwKX0saS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0scy50aXRsZT1cImJyb3dzZXJcIixzLmJyb3dzZXI9ITAscy5lbnY9e30scy5hcmd2PVtdLHMudmVyc2lvbj1cIlwiLHMudmVyc2lvbnM9e30scy5vbj1vLHMuYWRkTGlzdGVuZXI9byxzLm9uY2U9byxzLm9mZj1vLHMucmVtb3ZlTGlzdGVuZXI9byxzLnJlbW92ZUFsbExpc3RlbmVycz1vLHMuZW1pdD1vLHMuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0scy5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0scy5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHMudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3ZhciBlPX5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpJiZ+bmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKFwiR29vZ2xlXCIpJiYhfm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKTtyZXR1cm4gZSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKykvKS5wb3AoKTw9NTM0fHwvTVFRQnJvd3Nlci9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9dmFyIHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBCbG9iLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKT93aW5kb3cuQmxvYjpmdW5jdGlvbihlLHQpe3ZhciBuPW5ldyh3aW5kb3cuQmxvYkJ1aWxkZXJ8fHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlcnx8d2luZG93Lk1TQmxvYkJ1aWxkZXJ8fHdpbmRvdy5Nb3pCbG9iQnVpbGRlcik7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXtuLmFwcGVuZChlKX0pLG4uZ2V0QmxvYih0P3QudHlwZTp2b2lkIDApfSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciBlPXRoaXMsbj1bXSxpPUFycmF5KDIxKS5qb2luKFwiLVwiKSsoK25ldyBEYXRlKigxZTE2Kk1hdGgucmFuZG9tKCkpKS50b1N0cmluZygzNiksbz1YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDt0aGlzLmdldFBhcnRzPWZ1bmN0aW9uKCl7cmV0dXJuIG4udG9TdHJpbmcoKX0sdGhpcy5hcHBlbmQ9ZnVuY3Rpb24oZSx0LHIpe24ucHVzaChcIi0tXCIraSsnXFxyXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytlKydcIicpLHQgaW5zdGFuY2VvZiBCbG9iPyhuLnB1c2goJzsgZmlsZW5hbWU9XCInKyhyfHxcImJsb2JcIikrJ1wiXFxyXFxuQ29udGVudC1UeXBlOiAnK3QudHlwZStcIlxcclxcblxcclxcblwiKSxuLnB1c2godCkpOm4ucHVzaChcIlxcclxcblxcclxcblwiK3QpLG4ucHVzaChcIlxcclxcblwiKX0sdCsrLFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGEpe3ZhciBzLHUsYz10aGlzO2E9PT1lPyhuLnB1c2goXCItLVwiK2krXCItLVxcclxcblwiKSx1PW5ldyByKG4pLHM9bmV3IEZpbGVSZWFkZXIscy5vbmxvYWQ9ZnVuY3Rpb24oKXtvLmNhbGwoYyxzLnJlc3VsdCl9LHMub25lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBlfSxzLnJlYWRBc0FycmF5QnVmZmVyKHUpLHRoaXMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIraSksdC0tLDA9PXQmJihYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1vKSk6by5jYWxsKHRoaXMsYSl9fXZhciB0PTA7cmV0dXJuIGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRm9ybURhdGEucHJvdG90eXBlKSxlfSgpO2UuZXhwb3J0cz17QmxvYjpyLEZvcm1EYXRhOm4oKT9pOkZvcm1EYXRhfX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4hIWUuZXhpZmRhdGF9ZnVuY3Rpb24gbyhlLHQpe3Q9dHx8ZS5tYXRjaCgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2ltKVsxXXx8XCJcIixlPWUucmVwbGFjZSgvXmRhdGFcXDooW15cXDtdKylcXDtiYXNlNjQsL2dpbSxcIlwiKTtmb3IodmFyIG49YXRvYihlKSxyPW4ubGVuZ3RoLGk9bmV3IEFycmF5QnVmZmVyKHIpLG89bmV3IFVpbnQ4QXJyYXkoaSksYT0wO3I+YTthKyspb1thXT1uLmNoYXJDb2RlQXQoYSk7cmV0dXJuIGl9ZnVuY3Rpb24gYShlLHQpe3ZhciBuPW5ldyBYTUxIdHRwUmVxdWVzdDtuLm9wZW4oXCJHRVRcIixlLCEwKSxuLnJlc3BvbnNlVHlwZT1cImJsb2JcIixuLm9ubG9hZD1mdW5jdGlvbihlKXsoMjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzKSYmdCh0aGlzLnJlc3BvbnNlKX0sbi5zZW5kKCl9ZnVuY3Rpb24gcyhlLHQpe2Z1bmN0aW9uIG4obil7dmFyIHI9dShuKSxpPWMobik7ZS5leGlmZGF0YT1yfHx7fSxlLmlwdGNkYXRhPWl8fHt9LHQmJnQuY2FsbChlKX1pZihlLnNyYylpZigvXmRhdGFcXDovaS50ZXN0KGUuc3JjKSl7dmFyIHI9byhlLnNyYyk7bihyKX1lbHNlIGlmKC9eYmxvYlxcOi9pLnRlc3QoZS5zcmMpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtuKGUudGFyZ2V0LnJlc3VsdCl9LGEoZS5zcmMsZnVuY3Rpb24oZSl7aS5yZWFkQXNBcnJheUJ1ZmZlcihlKX0pfWVsc2V7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0O3Mub25sb2FkPWZ1bmN0aW9uKCl7MjAwPT10aGlzLnN0YXR1c3x8MD09PXRoaXMuc3RhdHVzP24ocy5yZXNwb25zZSk6dChuZXcgRXJyb3IoXCJDb3VsZCBub3QgbG9hZCBpbWFnZVwiKSkscz1udWxsfSxzLm9wZW4oXCJHRVRcIixlLnNyYywhMCkscy5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiLHMuc2VuZChudWxsKX1lbHNlIGlmKHdpbmRvdy5GaWxlUmVhZGVyJiYoZSBpbnN0YW5jZW9mIHdpbmRvdy5CbG9ifHxlIGluc3RhbmNlb2Ygd2luZG93LkZpbGUpKXt2YXIgaT1uZXcgRmlsZVJlYWRlcjtpLm9ubG9hZD1mdW5jdGlvbihlKXtwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLnRhcmdldC5yZXN1bHQuYnl0ZUxlbmd0aCksbihlLnRhcmdldC5yZXN1bHQpfSxpLnJlYWRBc0FycmF5QnVmZmVyKGUpfX1mdW5jdGlvbiB1KGUpe3ZhciB0PW5ldyBEYXRhVmlldyhlKTtpZihwJiZjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIitlLmJ5dGVMZW5ndGgpLDI1NSE9dC5nZXRVaW50OCgwKXx8MjE2IT10LmdldFVpbnQ4KDEpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIiksITE7Zm9yKHZhciBuLHI9MixpPWUuYnl0ZUxlbmd0aDtpPnI7KXtpZigyNTUhPXQuZ2V0VWludDgocikpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgbWFya2VyIGF0IG9mZnNldCBcIityK1wiLCBmb3VuZDogXCIrdC5nZXRVaW50OChyKSksITE7aWYobj10LmdldFVpbnQ4KHIrMSkscCYmY29uc29sZS5sb2cobiksMjI1PT1uKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIkZvdW5kIDB4RkZFMSBtYXJrZXJcIiksZyh0LHIrNCx0LmdldFVpbnQxNihyKzIpLTIpO3IrPTIrdC5nZXRVaW50MTYocisyKX19ZnVuY3Rpb24gYyhlKXt2YXIgdD1uZXcgRGF0YVZpZXcoZSk7aWYocCYmY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIrZS5ieXRlTGVuZ3RoKSwyNTUhPXQuZ2V0VWludDgoMCl8fDIxNiE9dC5nZXRVaW50OCgxKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpLCExO2Zvcih2YXIgbj0yLHI9ZS5ieXRlTGVuZ3RoLGk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gNTY9PT1lLmdldFVpbnQ4KHQpJiY2Nj09PWUuZ2V0VWludDgodCsxKSYmNzM9PT1lLmdldFVpbnQ4KHQrMikmJjc3PT09ZS5nZXRVaW50OCh0KzMpJiY0PT09ZS5nZXRVaW50OCh0KzQpJiY0PT09ZS5nZXRVaW50OCh0KzUpfTtyPm47KXtpZihpKHQsbikpe3ZhciBvPXQuZ2V0VWludDgobis3KTtvJTIhPT0wJiYobys9MSksMD09PW8mJihvPTQpO3ZhciBhPW4rOCtvLHM9dC5nZXRVaW50MTYobis2K28pO3JldHVybiBsKGUsYSxzKX1uKyt9fWZ1bmN0aW9uIGwoZSx0LG4pe2Zvcih2YXIgcixpLG8sYSxzLHU9bmV3IERhdGFWaWV3KGUpLGM9e30sbD10O3Qrbj5sOykyOD09PXUuZ2V0VWludDgobCkmJjI9PT11LmdldFVpbnQ4KGwrMSkmJihhPXUuZ2V0VWludDgobCsyKSxhIGluIFMmJihvPXUuZ2V0SW50MTYobCszKSxzPW8rNSxpPVNbYV0scj1oKHUsbCs1LG8pLGMuaGFzT3duUHJvcGVydHkoaSk/Y1tpXWluc3RhbmNlb2YgQXJyYXk/Y1tpXS5wdXNoKHIpOmNbaV09W2NbaV0scl06Y1tpXT1yKSksbCsrO3JldHVybiBjfWZ1bmN0aW9uIGYoZSx0LG4scixpKXt2YXIgbyxhLHMsdT1lLmdldFVpbnQxNihuLCFpKSxjPXt9O2ZvcihzPTA7dT5zO3MrKylvPW4rMTIqcysyLGE9cltlLmdldFVpbnQxNihvLCFpKV0sIWEmJnAmJmNvbnNvbGUubG9nKFwiVW5rbm93biB0YWc6IFwiK2UuZ2V0VWludDE2KG8sIWkpKSxjW2FdPWQoZSxvLHQsbixpKTtyZXR1cm4gY31mdW5jdGlvbiBkKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsYyxsLGY9ZS5nZXRVaW50MTYodCsyLCFpKSxkPWUuZ2V0VWludDMyKHQrNCwhaSksZz1lLmdldFVpbnQzMih0KzgsIWkpK247c3dpdGNoKGYpe2Nhc2UgMTpjYXNlIDc6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50OCh0KzgsIWkpO2ZvcihvPWQ+ND9nOnQrOCxhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRVaW50OChvK3UpO3JldHVybiBhO2Nhc2UgMjpyZXR1cm4gbz1kPjQ/Zzp0KzgsaChlLG8sZC0xKTtjYXNlIDM6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MTYodCs4LCFpKTtmb3Iobz1kPjI/Zzp0KzgsYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDE2KG8rMip1LCFpKTtyZXR1cm4gYTtjYXNlIDQ6aWYoMT09ZClyZXR1cm4gZS5nZXRVaW50MzIodCs4LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDU6aWYoMT09ZClyZXR1cm4gYz1lLmdldFVpbnQzMihnLCFpKSxsPWUuZ2V0VWludDMyKGcrNCwhaSkscz1uZXcgTnVtYmVyKGMvbCkscy5udW1lcmF0b3I9YyxzLmRlbm9taW5hdG9yPWwscztmb3IoYT1bXSx1PTA7ZD51O3UrKyljPWUuZ2V0VWludDMyKGcrOCp1LCFpKSxsPWUuZ2V0VWludDMyKGcrNCs4KnUsIWkpLGFbdV09bmV3IE51bWJlcihjL2wpLGFbdV0ubnVtZXJhdG9yPWMsYVt1XS5kZW5vbWluYXRvcj1sO3JldHVybiBhO2Nhc2UgOTppZigxPT1kKXJldHVybiBlLmdldEludDMyKHQrOCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldEludDMyKGcrNCp1LCFpKTtyZXR1cm4gYTtjYXNlIDEwOmlmKDE9PWQpcmV0dXJuIGUuZ2V0SW50MzIoZywhaSkvZS5nZXRJbnQzMihnKzQsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRJbnQzMihnKzgqdSwhaSkvZS5nZXRJbnQzMihnKzQrOCp1LCFpKTtyZXR1cm4gYX19ZnVuY3Rpb24gaChlLHQsbil7dmFyIHIsaT1cIlwiO2ZvcihyPXQ7dCtuPnI7cisrKWkrPVN0cmluZy5mcm9tQ2hhckNvZGUoZS5nZXRVaW50OChyKSk7cmV0dXJuIGl9ZnVuY3Rpb24gZyhlLHQpe2lmKFwiRXhpZlwiIT1oKGUsdCw0KSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgRVhJRiBkYXRhISBcIitoKGUsdCw0KSksITE7dmFyIG4scixpLG8sYSxzPXQrNjtpZigxODc2MT09ZS5nZXRVaW50MTYocykpbj0hMTtlbHNle2lmKDE5Nzg5IT1lLmdldFVpbnQxNihzKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHg0OTQ5IG9yIDB4NEQ0RClcIiksITE7bj0hMH1pZig0MiE9ZS5nZXRVaW50MTYocysyLCFuKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAobm8gMHgwMDJBKVwiKSwhMTt2YXIgdT1lLmdldFVpbnQzMihzKzQsIW4pO2lmKDg+dSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAoRmlyc3Qgb2Zmc2V0IGxlc3MgdGhhbiA4KVwiLGUuZ2V0VWludDMyKHMrNCwhbikpLCExO2lmKHI9ZihlLHMscyt1LHYsbiksci5FeGlmSUZEUG9pbnRlcil7bz1mKGUscyxzK3IuRXhpZklGRFBvaW50ZXIsdyxuKTtmb3IoaSBpbiBvKXtzd2l0Y2goaSl7Y2FzZVwiTGlnaHRTb3VyY2VcIjpjYXNlXCJGbGFzaFwiOmNhc2VcIk1ldGVyaW5nTW9kZVwiOmNhc2VcIkV4cG9zdXJlUHJvZ3JhbVwiOmNhc2VcIlNlbnNpbmdNZXRob2RcIjpjYXNlXCJTY2VuZUNhcHR1cmVUeXBlXCI6Y2FzZVwiU2NlbmVUeXBlXCI6Y2FzZVwiQ3VzdG9tUmVuZGVyZWRcIjpjYXNlXCJXaGl0ZUJhbGFuY2VcIjpjYXNlXCJHYWluQ29udHJvbFwiOmNhc2VcIkNvbnRyYXN0XCI6Y2FzZVwiU2F0dXJhdGlvblwiOmNhc2VcIlNoYXJwbmVzc1wiOmNhc2VcIlN1YmplY3REaXN0YW5jZVJhbmdlXCI6Y2FzZVwiRmlsZVNvdXJjZVwiOm9baV09YltpXVtvW2ldXTticmVhaztjYXNlXCJFeGlmVmVyc2lvblwiOmNhc2VcIkZsYXNocGl4VmVyc2lvblwiOm9baV09U3RyaW5nLmZyb21DaGFyQ29kZShvW2ldWzBdLG9baV1bMV0sb1tpXVsyXSxvW2ldWzNdKTticmVhaztjYXNlXCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiOm9baV09Yi5Db21wb25lbnRzW29baV1bMF1dK2IuQ29tcG9uZW50c1tvW2ldWzFdXStiLkNvbXBvbmVudHNbb1tpXVsyXV0rYi5Db21wb25lbnRzW29baV1bM11dfXJbaV09b1tpXX19aWYoci5HUFNJbmZvSUZEUG9pbnRlcil7YT1mKGUscyxzK3IuR1BTSW5mb0lGRFBvaW50ZXIseSxuKTtmb3IoaSBpbiBhKXtzd2l0Y2goaSl7Y2FzZVwiR1BTVmVyc2lvbklEXCI6YVtpXT1hW2ldWzBdK1wiLlwiK2FbaV1bMV0rXCIuXCIrYVtpXVsyXStcIi5cIithW2ldWzNdfXJbaV09YVtpXX19cmV0dXJuIHJ9dmFyIHA9ITEsbT1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG0/ZTp0aGlzIGluc3RhbmNlb2YgbT92b2lkKHRoaXMuRVhJRndyYXBwZWQ9ZSk6bmV3IG0oZSl9O1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHMmJih0PWUuZXhwb3J0cz1tKSx0LkVYSUY9bTt2YXIgdz1tLlRhZ3M9ezM2ODY0OlwiRXhpZlZlcnNpb25cIiw0MDk2MDpcIkZsYXNocGl4VmVyc2lvblwiLDQwOTYxOlwiQ29sb3JTcGFjZVwiLDQwOTYyOlwiUGl4ZWxYRGltZW5zaW9uXCIsNDA5NjM6XCJQaXhlbFlEaW1lbnNpb25cIiwzNzEyMTpcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCIsMzcxMjI6XCJDb21wcmVzc2VkQml0c1BlclBpeGVsXCIsMzc1MDA6XCJNYWtlck5vdGVcIiwzNzUxMDpcIlVzZXJDb21tZW50XCIsNDA5NjQ6XCJSZWxhdGVkU291bmRGaWxlXCIsMzY4Njc6XCJEYXRlVGltZU9yaWdpbmFsXCIsMzY4Njg6XCJEYXRlVGltZURpZ2l0aXplZFwiLDM3NTIwOlwiU3Vic2VjVGltZVwiLDM3NTIxOlwiU3Vic2VjVGltZU9yaWdpbmFsXCIsMzc1MjI6XCJTdWJzZWNUaW1lRGlnaXRpemVkXCIsMzM0MzQ6XCJFeHBvc3VyZVRpbWVcIiwzMzQzNzpcIkZOdW1iZXJcIiwzNDg1MDpcIkV4cG9zdXJlUHJvZ3JhbVwiLDM0ODUyOlwiU3BlY3RyYWxTZW5zaXRpdml0eVwiLDM0ODU1OlwiSVNPU3BlZWRSYXRpbmdzXCIsMzQ4NTY6XCJPRUNGXCIsMzczNzc6XCJTaHV0dGVyU3BlZWRWYWx1ZVwiLDM3Mzc4OlwiQXBlcnR1cmVWYWx1ZVwiLDM3Mzc5OlwiQnJpZ2h0bmVzc1ZhbHVlXCIsMzczODA6XCJFeHBvc3VyZUJpYXNcIiwzNzM4MTpcIk1heEFwZXJ0dXJlVmFsdWVcIiwzNzM4MjpcIlN1YmplY3REaXN0YW5jZVwiLDM3MzgzOlwiTWV0ZXJpbmdNb2RlXCIsMzczODQ6XCJMaWdodFNvdXJjZVwiLDM3Mzg1OlwiRmxhc2hcIiwzNzM5NjpcIlN1YmplY3RBcmVhXCIsMzczODY6XCJGb2NhbExlbmd0aFwiLDQxNDgzOlwiRmxhc2hFbmVyZ3lcIiw0MTQ4NDpcIlNwYXRpYWxGcmVxdWVuY3lSZXNwb25zZVwiLDQxNDg2OlwiRm9jYWxQbGFuZVhSZXNvbHV0aW9uXCIsNDE0ODc6XCJGb2NhbFBsYW5lWVJlc29sdXRpb25cIiw0MTQ4ODpcIkZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFwiLDQxNDkyOlwiU3ViamVjdExvY2F0aW9uXCIsNDE0OTM6XCJFeHBvc3VyZUluZGV4XCIsNDE0OTU6XCJTZW5zaW5nTWV0aG9kXCIsNDE3Mjg6XCJGaWxlU291cmNlXCIsNDE3Mjk6XCJTY2VuZVR5cGVcIiw0MTczMDpcIkNGQVBhdHRlcm5cIiw0MTk4NTpcIkN1c3RvbVJlbmRlcmVkXCIsNDE5ODY6XCJFeHBvc3VyZU1vZGVcIiw0MTk4NzpcIldoaXRlQmFsYW5jZVwiLDQxOTg4OlwiRGlnaXRhbFpvb21SYXRpb25cIiw0MTk4OTpcIkZvY2FsTGVuZ3RoSW4zNW1tRmlsbVwiLDQxOTkwOlwiU2NlbmVDYXB0dXJlVHlwZVwiLDQxOTkxOlwiR2FpbkNvbnRyb2xcIiw0MTk5MjpcIkNvbnRyYXN0XCIsNDE5OTM6XCJTYXR1cmF0aW9uXCIsNDE5OTQ6XCJTaGFycG5lc3NcIiw0MTk5NTpcIkRldmljZVNldHRpbmdEZXNjcmlwdGlvblwiLDQxOTk2OlwiU3ViamVjdERpc3RhbmNlUmFuZ2VcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsNDIwMTY6XCJJbWFnZVVuaXF1ZUlEXCJ9LHY9bS5UaWZmVGFncz17MjU2OlwiSW1hZ2VXaWR0aFwiLDI1NzpcIkltYWdlSGVpZ2h0XCIsMzQ2NjU6XCJFeGlmSUZEUG9pbnRlclwiLDM0ODUzOlwiR1BTSW5mb0lGRFBvaW50ZXJcIiw0MDk2NTpcIkludGVyb3BlcmFiaWxpdHlJRkRQb2ludGVyXCIsMjU4OlwiQml0c1BlclNhbXBsZVwiLDI1OTpcIkNvbXByZXNzaW9uXCIsMjYyOlwiUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvblwiLDI3NDpcIk9yaWVudGF0aW9uXCIsMjc3OlwiU2FtcGxlc1BlclBpeGVsXCIsMjg0OlwiUGxhbmFyQ29uZmlndXJhdGlvblwiLDUzMDpcIllDYkNyU3ViU2FtcGxpbmdcIiw1MzE6XCJZQ2JDclBvc2l0aW9uaW5nXCIsMjgyOlwiWFJlc29sdXRpb25cIiwyODM6XCJZUmVzb2x1dGlvblwiLDI5NjpcIlJlc29sdXRpb25Vbml0XCIsMjczOlwiU3RyaXBPZmZzZXRzXCIsMjc4OlwiUm93c1BlclN0cmlwXCIsMjc5OlwiU3RyaXBCeXRlQ291bnRzXCIsNTEzOlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0XCIsNTE0OlwiSlBFR0ludGVyY2hhbmdlRm9ybWF0TGVuZ3RoXCIsMzAxOlwiVHJhbnNmZXJGdW5jdGlvblwiLDMxODpcIldoaXRlUG9pbnRcIiwzMTk6XCJQcmltYXJ5Q2hyb21hdGljaXRpZXNcIiw1Mjk6XCJZQ2JDckNvZWZmaWNpZW50c1wiLDUzMjpcIlJlZmVyZW5jZUJsYWNrV2hpdGVcIiwzMDY6XCJEYXRlVGltZVwiLDI3MDpcIkltYWdlRGVzY3JpcHRpb25cIiwyNzE6XCJNYWtlXCIsMjcyOlwiTW9kZWxcIiwzMDU6XCJTb2Z0d2FyZVwiLDMxNTpcIkFydGlzdFwiLDMzNDMyOlwiQ29weXJpZ2h0XCJ9LHk9bS5HUFNUYWdzPXswOlwiR1BTVmVyc2lvbklEXCIsMTpcIkdQU0xhdGl0dWRlUmVmXCIsMjpcIkdQU0xhdGl0dWRlXCIsMzpcIkdQU0xvbmdpdHVkZVJlZlwiLDQ6XCJHUFNMb25naXR1ZGVcIiw1OlwiR1BTQWx0aXR1ZGVSZWZcIiw2OlwiR1BTQWx0aXR1ZGVcIiw3OlwiR1BTVGltZVN0YW1wXCIsODpcIkdQU1NhdGVsbGl0ZXNcIiw5OlwiR1BTU3RhdHVzXCIsMTA6XCJHUFNNZWFzdXJlTW9kZVwiLDExOlwiR1BTRE9QXCIsMTI6XCJHUFNTcGVlZFJlZlwiLDEzOlwiR1BTU3BlZWRcIiwxNDpcIkdQU1RyYWNrUmVmXCIsMTU6XCJHUFNUcmFja1wiLDE2OlwiR1BTSW1nRGlyZWN0aW9uUmVmXCIsMTc6XCJHUFNJbWdEaXJlY3Rpb25cIiwxODpcIkdQU01hcERhdHVtXCIsMTk6XCJHUFNEZXN0TGF0aXR1ZGVSZWZcIiwyMDpcIkdQU0Rlc3RMYXRpdHVkZVwiLDIxOlwiR1BTRGVzdExvbmdpdHVkZVJlZlwiLDIyOlwiR1BTRGVzdExvbmdpdHVkZVwiLDIzOlwiR1BTRGVzdEJlYXJpbmdSZWZcIiwyNDpcIkdQU0Rlc3RCZWFyaW5nXCIsMjU6XCJHUFNEZXN0RGlzdGFuY2VSZWZcIiwyNjpcIkdQU0Rlc3REaXN0YW5jZVwiLDI3OlwiR1BTUHJvY2Vzc2luZ01ldGhvZFwiLDI4OlwiR1BTQXJlYUluZm9ybWF0aW9uXCIsMjk6XCJHUFNEYXRlU3RhbXBcIiwzMDpcIkdQU0RpZmZlcmVudGlhbFwifSxiPW0uU3RyaW5nVmFsdWVzPXtFeHBvc3VyZVByb2dyYW06ezA6XCJOb3QgZGVmaW5lZFwiLDE6XCJNYW51YWxcIiwyOlwiTm9ybWFsIHByb2dyYW1cIiwzOlwiQXBlcnR1cmUgcHJpb3JpdHlcIiw0OlwiU2h1dHRlciBwcmlvcml0eVwiLDU6XCJDcmVhdGl2ZSBwcm9ncmFtXCIsNjpcIkFjdGlvbiBwcm9ncmFtXCIsNzpcIlBvcnRyYWl0IG1vZGVcIiw4OlwiTGFuZHNjYXBlIG1vZGVcIn0sTWV0ZXJpbmdNb2RlOnswOlwiVW5rbm93blwiLDE6XCJBdmVyYWdlXCIsMjpcIkNlbnRlcldlaWdodGVkQXZlcmFnZVwiLDM6XCJTcG90XCIsNDpcIk11bHRpU3BvdFwiLDU6XCJQYXR0ZXJuXCIsNjpcIlBhcnRpYWxcIiwyNTU6XCJPdGhlclwifSxMaWdodFNvdXJjZTp7MDpcIlVua25vd25cIiwxOlwiRGF5bGlnaHRcIiwyOlwiRmx1b3Jlc2NlbnRcIiwzOlwiVHVuZ3N0ZW4gKGluY2FuZGVzY2VudCBsaWdodClcIiw0OlwiRmxhc2hcIiw5OlwiRmluZSB3ZWF0aGVyXCIsMTA6XCJDbG91ZHkgd2VhdGhlclwiLDExOlwiU2hhZGVcIiwxMjpcIkRheWxpZ2h0IGZsdW9yZXNjZW50IChEIDU3MDAgLSA3MTAwSylcIiwxMzpcIkRheSB3aGl0ZSBmbHVvcmVzY2VudCAoTiA0NjAwIC0gNTQwMEspXCIsMTQ6XCJDb29sIHdoaXRlIGZsdW9yZXNjZW50IChXIDM5MDAgLSA0NTAwSylcIiwxNTpcIldoaXRlIGZsdW9yZXNjZW50IChXVyAzMjAwIC0gMzcwMEspXCIsMTc6XCJTdGFuZGFyZCBsaWdodCBBXCIsMTg6XCJTdGFuZGFyZCBsaWdodCBCXCIsMTk6XCJTdGFuZGFyZCBsaWdodCBDXCIsMjA6XCJENTVcIiwyMTpcIkQ2NVwiLDIyOlwiRDc1XCIsMjM6XCJENTBcIiwyNDpcIklTTyBzdHVkaW8gdHVuZ3N0ZW5cIiwyNTU6XCJPdGhlclwifSxGbGFzaDp7MDpcIkZsYXNoIGRpZCBub3QgZmlyZVwiLDE6XCJGbGFzaCBmaXJlZFwiLDU6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDc6XCJTdHJvYmUgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsOTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwxMzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiwxNTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDE2OlwiRmxhc2ggZGlkIG5vdCBmaXJlLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIiwyNDpcIkZsYXNoIGRpZCBub3QgZmlyZSwgYXV0byBtb2RlXCIsMjU6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlXCIsMjk6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsMzE6XCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiwzMjpcIk5vIGZsYXNoIGZ1bmN0aW9uXCIsNjU6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDY5OlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3MTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw3MzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw3NzpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3OTpcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDg5OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDkzOlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLDk1OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCJ9LFNlbnNpbmdNZXRob2Q6ezE6XCJOb3QgZGVmaW5lZFwiLDI6XCJPbmUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDM6XCJUd28tY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDQ6XCJUaHJlZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsNTpcIkNvbG9yIHNlcXVlbnRpYWwgYXJlYSBzZW5zb3JcIiw3OlwiVHJpbGluZWFyIHNlbnNvclwiLDg6XCJDb2xvciBzZXF1ZW50aWFsIGxpbmVhciBzZW5zb3JcIn0sU2NlbmVDYXB0dXJlVHlwZTp7MDpcIlN0YW5kYXJkXCIsMTpcIkxhbmRzY2FwZVwiLDI6XCJQb3J0cmFpdFwiLDM6XCJOaWdodCBzY2VuZVwifSxTY2VuZVR5cGU6ezE6XCJEaXJlY3RseSBwaG90b2dyYXBoZWRcIn0sQ3VzdG9tUmVuZGVyZWQ6ezA6XCJOb3JtYWwgcHJvY2Vzc1wiLDE6XCJDdXN0b20gcHJvY2Vzc1wifSxXaGl0ZUJhbGFuY2U6ezA6XCJBdXRvIHdoaXRlIGJhbGFuY2VcIiwxOlwiTWFudWFsIHdoaXRlIGJhbGFuY2VcIn0sR2FpbkNvbnRyb2w6ezA6XCJOb25lXCIsMTpcIkxvdyBnYWluIHVwXCIsMjpcIkhpZ2ggZ2FpbiB1cFwiLDM6XCJMb3cgZ2FpbiBkb3duXCIsNDpcIkhpZ2ggZ2FpbiBkb3duXCJ9LENvbnRyYXN0OnswOlwiTm9ybWFsXCIsMTpcIlNvZnRcIiwyOlwiSGFyZFwifSxTYXR1cmF0aW9uOnswOlwiTm9ybWFsXCIsMTpcIkxvdyBzYXR1cmF0aW9uXCIsMjpcIkhpZ2ggc2F0dXJhdGlvblwifSxTaGFycG5lc3M6ezA6XCJOb3JtYWxcIiwxOlwiU29mdFwiLDI6XCJIYXJkXCJ9LFN1YmplY3REaXN0YW5jZVJhbmdlOnswOlwiVW5rbm93blwiLDE6XCJNYWNyb1wiLDI6XCJDbG9zZSB2aWV3XCIsMzpcIkRpc3RhbnQgdmlld1wifSxGaWxlU291cmNlOnszOlwiRFNDXCJ9LENvbXBvbmVudHM6ezA6XCJcIiwxOlwiWVwiLDI6XCJDYlwiLDM6XCJDclwiLDQ6XCJSXCIsNTpcIkdcIiw2OlwiQlwifX0sUz17MTIwOlwiY2FwdGlvblwiLDExMDpcImNyZWRpdFwiLDI1Olwia2V5d29yZHNcIiw1NTpcImRhdGVDcmVhdGVkXCIsODA6XCJieWxpbmVcIiw4NTpcImJ5bGluZVRpdGxlXCIsMTIyOlwiY2FwdGlvbldyaXRlclwiLDEwNTpcImhlYWRsaW5lXCIsMTE2OlwiY29weXJpZ2h0XCIsMTU6XCJjYXRlZ29yeVwifTttLmdldERhdGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZSBpbnN0YW5jZW9mIEltYWdlfHxlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkmJiFlLmNvbXBsZXRlPyExOihuKGUpP3QmJnQuY2FsbChlKTpzKGUsdCksITApfSxtLmdldFRhZz1mdW5jdGlvbihlLHQpe3JldHVybiBuKGUpP2UuZXhpZmRhdGFbdF06dm9pZCAwfSxtLmdldEFsbFRhZ3M9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJue307dmFyIHQscj1lLmV4aWZkYXRhLGk9e307Zm9yKHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoaVt0XT1yW3RdKTtyZXR1cm4gaX0sbS5wcmV0dHk9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpcmV0dXJuXCJcIjt2YXIgdCxyPWUuZXhpZmRhdGEsaT1cIlwiO2Zvcih0IGluIHIpci5oYXNPd25Qcm9wZXJ0eSh0KSYmKGkrPVwib2JqZWN0XCI9PXR5cGVvZiByW3RdP3JbdF1pbnN0YW5jZW9mIE51bWJlcj90K1wiIDogXCIrclt0XStcIiBbXCIrclt0XS5udW1lcmF0b3IrXCIvXCIrclt0XS5kZW5vbWluYXRvcitcIl1cXHJcXG5cIjp0K1wiIDogW1wiK3JbdF0ubGVuZ3RoK1wiIHZhbHVlc11cXHJcXG5cIjp0K1wiIDogXCIrclt0XStcIlxcclxcblwiKTtyZXR1cm4gaX0sbS5yZWFkRnJvbUJpbmFyeUZpbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZSl9LHI9W10saT1mdW5jdGlvbigpe3JldHVybiBtfS5hcHBseSh0LHIpLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KS5jYWxsKHRoaXMpfSxmdW5jdGlvbihlLHQsbil7dmFyIHIsaTshZnVuY3Rpb24oKXtmdW5jdGlvbiBuKGUpe3ZhciB0PWUubmF0dXJhbFdpZHRoLG49ZS5uYXR1cmFsSGVpZ2h0O2lmKHQqbj4xMDQ4NTc2KXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Iud2lkdGg9ci5oZWlnaHQ9MTt2YXIgaT1yLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gaS5kcmF3SW1hZ2UoZSwtdCsxLDApLDA9PT1pLmdldEltYWdlRGF0YSgwLDAsMSwxKS5kYXRhWzNdfXJldHVybiExfWZ1bmN0aW9uIG8oZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD0xLHIuaGVpZ2h0PW47dmFyIGk9ci5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UoZSwwLDApO2Zvcih2YXIgbz1pLmdldEltYWdlRGF0YSgwLDAsMSxuKS5kYXRhLGE9MCxzPW4sdT1uO3U+YTspe3ZhciBjPW9bNCoodS0xKSszXTswPT09Yz9zPXU6YT11LHU9cythPj4xfXZhciBsPXUvbjtyZXR1cm4gMD09PWw/MTpsfWZ1bmN0aW9uIGEoZSx0LG4pe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuIHMoZSxyLHQsbiksci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsdC5xdWFsaXR5fHwuOCl9ZnVuY3Rpb24gcyhlLHQscixpKXt2YXIgYT1lLm5hdHVyYWxXaWR0aCxzPWUubmF0dXJhbEhlaWdodCxjPXIud2lkdGgsbD1yLmhlaWdodCxmPXQuZ2V0Q29udGV4dChcIjJkXCIpO2Yuc2F2ZSgpLHUodCxmLGMsbCxyLm9yaWVudGF0aW9uKTt2YXIgZD1uKGUpO2QmJihhLz0yLHMvPTIpO3ZhciBoPTEwMjQsZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2cud2lkdGg9Zy5oZWlnaHQ9aDtmb3IodmFyIHA9Zy5nZXRDb250ZXh0KFwiMmRcIiksbT1pP28oZSxhLHMpOjEsdz1NYXRoLmNlaWwoaCpjL2EpLHY9TWF0aC5jZWlsKGgqbC9zL20pLHk9MCxiPTA7cz55Oyl7Zm9yKHZhciBTPTAsST0wO2E+UzspcC5jbGVhclJlY3QoMCwwLGgsaCkscC5kcmF3SW1hZ2UoZSwtUywteSksZi5kcmF3SW1hZ2UoZywwLDAsaCxoLEksYix3LHYpLFMrPWgsSSs9dzt5Kz1oLGIrPXZ9Zi5yZXN0b3JlKCksZz1wPW51bGx9ZnVuY3Rpb24gdShlLHQsbixyLGkpe3N3aXRjaChpKXtjYXNlIDU6Y2FzZSA2OmNhc2UgNzpjYXNlIDg6ZS53aWR0aD1yLGUuaGVpZ2h0PW47YnJlYWs7ZGVmYXVsdDplLndpZHRoPW4sZS5oZWlnaHQ9cn1zd2l0Y2goaSl7Y2FzZSAyOnQudHJhbnNsYXRlKG4sMCksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDM6dC50cmFuc2xhdGUobixyKSx0LnJvdGF0ZShNYXRoLlBJKTticmVhaztjYXNlIDQ6dC50cmFuc2xhdGUoMCxyKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNTp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnNjYWxlKDEsLTEpO2JyZWFrO2Nhc2UgNjp0LnJvdGF0ZSguNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZSgwLC1yKTticmVhaztjYXNlIDc6dC5yb3RhdGUoLjUqTWF0aC5QSSksdC50cmFuc2xhdGUobiwtciksdC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDg6dC5yb3RhdGUoLS41Kk1hdGguUEkpLHQudHJhbnNsYXRlKC1uLDApfX1mdW5jdGlvbiBjKGUpe2lmKHdpbmRvdy5CbG9iJiZlIGluc3RhbmNlb2YgQmxvYil7dmFyIHQ9bmV3IEltYWdlLG49d2luZG93LlVSTCYmd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkw/d2luZG93LlVSTDp3aW5kb3cud2Via2l0VVJMJiZ3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cud2Via2l0VVJMOm51bGw7aWYoIW4pdGhyb3cgRXJyb3IoXCJObyBjcmVhdGVPYmplY3RVUkwgZnVuY3Rpb24gZm91bmQgdG8gY3JlYXRlIGJsb2IgdXJsXCIpO3Quc3JjPW4uY3JlYXRlT2JqZWN0VVJMKGUpLHRoaXMuYmxvYj1lLGU9dH1pZighZS5uYXR1cmFsV2lkdGgmJiFlLm5hdHVyYWxIZWlnaHQpe3ZhciByPXRoaXM7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT1yLmltYWdlTG9hZExpc3RlbmVycztpZihlKXtyLmltYWdlTG9hZExpc3RlbmVycz1udWxsO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7bj50O3QrKyllW3RdKCl9fSx0aGlzLmltYWdlTG9hZExpc3RlbmVycz1bXX10aGlzLnNyY0ltYWdlPWV9Yy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGUsdCxuKXtpZih0aGlzLmltYWdlTG9hZExpc3RlbmVycyl7dmFyIHI9dGhpcztyZXR1cm4gdm9pZCB0aGlzLmltYWdlTG9hZExpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7ci5yZW5kZXIoZSx0LG4pfSl9dD10fHx7fTt2YXIgaT10aGlzLnNyY0ltYWdlLG89aS5zcmMsdT1vLmxlbmd0aCxjPWkubmF0dXJhbFdpZHRoLGw9aS5uYXR1cmFsSGVpZ2h0LGY9dC53aWR0aCxkPXQuaGVpZ2h0LGg9dC5tYXhXaWR0aCxnPXQubWF4SGVpZ2h0LHA9dGhpcy5ibG9iJiZcImltYWdlL2pwZWdcIj09PXRoaXMuYmxvYi50eXBlfHwwPT09by5pbmRleE9mKFwiZGF0YTppbWFnZS9qcGVnXCIpfHxvLmluZGV4T2YoXCIuanBnXCIpPT09dS00fHxvLmluZGV4T2YoXCIuanBlZ1wiKT09PXUtNTtmJiYhZD9kPWwqZi9jPDwwOmQmJiFmP2Y9YypkL2w8PDA6KGY9YyxkPWwpLGgmJmY+aCYmKGY9aCxkPWwqZi9jPDwwKSxnJiZkPmcmJihkPWcsZj1jKmQvbDw8MCk7dmFyIG09e3dpZHRoOmYsaGVpZ2h0OmR9O2Zvcih2YXIgdyBpbiB0KW1bd109dFt3XTt2YXIgdj1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcImltZ1wiPT09dj9lLnNyYz1hKHRoaXMuc3JjSW1hZ2UsbSxwKTpcImNhbnZhc1wiPT09diYmcyh0aGlzLnNyY0ltYWdlLGUsbSxwKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9ucmVuZGVyJiZ0aGlzLm9ucmVuZGVyKGUpLG4mJm4oKX0scj1bXSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGN9LmFwcGx5KHQsciksISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0oKX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUpe2Z1bmN0aW9uIHQoZSl7Zm9yKHZhciB0PVsxNiwxMSwxMCwxNiwyNCw0MCw1MSw2MSwxMiwxMiwxNCwxOSwyNiw1OCw2MCw1NSwxNCwxMywxNiwyNCw0MCw1Nyw2OSw1NiwxNCwxNywyMiwyOSw1MSw4Nyw4MCw2MiwxOCwyMiwzNyw1Niw2OCwxMDksMTAzLDc3LDI0LDM1LDU1LDY0LDgxLDEwNCwxMTMsOTIsNDksNjQsNzgsODcsMTAzLDEyMSwxMjAsMTAxLDcyLDkyLDk1LDk4LDExMiwxMDAsMTAzLDk5XSxuPTA7NjQ+bjtuKyspe3ZhciByPUYoKHRbbl0qZSs1MCkvMTAwKTsxPnI/cj0xOnI+MjU1JiYocj0yNTUpLERbTltuXV09cn1mb3IodmFyIGk9WzE3LDE4LDI0LDQ3LDk5LDk5LDk5LDk5LDE4LDIxLDI2LDY2LDk5LDk5LDk5LDk5LDI0LDI2LDU2LDk5LDk5LDk5LDk5LDk5LDQ3LDY2LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5LDk5XSxvPTA7NjQ+bztvKyspe3ZhciBhPUYoKGlbb10qZSs1MCkvMTAwKTsxPmE/YT0xOmE+MjU1JiYoYT0yNTUpLHhbTltvXV09YX1mb3IodmFyIHM9WzEsMS4zODcwMzk4NDUsMS4zMDY1NjI5NjUsMS4xNzU4NzU2MDIsMSwuNzg1Njk0OTU4LC41NDExOTYxLC4yNzU4OTkzNzldLHU9MCxjPTA7OD5jO2MrKylmb3IodmFyIGw9MDs4Pmw7bCsrKVVbdV09MS8oRFtOW3VdXSpzW2NdKnNbbF0qOCksQ1t1XT0xLyh4W05bdV1dKnNbY10qc1tsXSo4KSx1Kyt9ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj0wLHI9MCxpPW5ldyBBcnJheSxvPTE7MTY+PW87bysrKXtmb3IodmFyIGE9MTthPD1lW29dO2ErKylpW3Rbcl1dPVtdLGlbdFtyXV1bMF09bixpW3Rbcl1dWzFdPW8scisrLG4rKztuKj0yfXJldHVybiBpfWZ1bmN0aW9uIHIoKXt5PW4oVyxIKSxiPW4oVixYKSxTPW4oeixxKSxJPW4oUSxZKX1mdW5jdGlvbiBpKCl7Zm9yKHZhciBlPTEsdD0yLG49MTsxNT49bjtuKyspe2Zvcih2YXIgcj1lO3Q+cjtyKyspQVszMjc2NytyXT1uLFRbMzI3Njcrcl09W10sVFszMjc2NytyXVsxXT1uLFRbMzI3Njcrcl1bMF09cjtmb3IodmFyIGk9LSh0LTEpOy1lPj1pO2krKylBWzMyNzY3K2ldPW4sVFszMjc2NytpXT1bXSxUWzMyNzY3K2ldWzFdPW4sVFszMjc2NytpXVswXT10LTEraTtlPDw9MSx0PDw9MX19ZnVuY3Rpb24gbygpe2Zvcih2YXIgZT0wOzI1Nj5lO2UrKylrW2VdPTE5NTk1KmUsa1tlKzI1Nj4+MF09Mzg0NzAqZSxrW2UrNTEyPj4wXT03NDcxKmUrMzI3Njgsa1tlKzc2OD4+MF09LTExMDU5KmUsa1tlKzEwMjQ+PjBdPS0yMTcwOSplLGtbZSsxMjgwPj4wXT0zMjc2OCplKzg0MjEzNzUsa1tlKzE1MzY+PjBdPS0yNzQzOSplLGtbZSsxNzkyPj4wXT0tNTMyOSplfWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PWVbMF0sbj1lWzFdLTE7bj49MDspdCYxPDxuJiYoR3w9MTw8Tyksbi0tLE8tLSwwPk8mJigyNTU9PUc/KHMoMjU1KSxzKDApKTpzKEcpLE89NyxHPTApfWZ1bmN0aW9uIHMoZSl7TS5wdXNoKGpbZV0pfWZ1bmN0aW9uIHUoZSl7cyhlPj44JjI1NSkscygyNTUmZSl9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGMsbCxmPTA7Y29uc3QgZD04LGg9NjQ7Zm9yKGw9MDtkPmw7KytsKXtuPWVbZl0scj1lW2YrMV0saT1lW2YrMl0sbz1lW2YrM10sYT1lW2YrNF0scz1lW2YrNV0sdT1lW2YrNl0sYz1lW2YrN107dmFyIGc9bitjLHA9bi1jLG09cit1LHc9ci11LHY9aStzLHk9aS1zLGI9bythLFM9by1hLEk9ZytiLFA9Zy1iLEY9bSt2LEQ9bS12O2VbZl09SStGLGVbZis0XT1JLUY7dmFyIHg9LjcwNzEwNjc4MSooRCtQKTtlW2YrMl09UCt4LGVbZis2XT1QLXgsST1TK3ksRj15K3csRD13K3A7dmFyIFU9LjM4MjY4MzQzMyooSS1EKSxDPS41NDExOTYxKkkrVSxUPTEuMzA2NTYyOTY1KkQrVSxBPS43MDcxMDY3ODEqRixSPXArQSxNPXAtQTtlW2YrNV09TStDLGVbZiszXT1NLUMsZVtmKzFdPVIrVCxlW2YrN109Ui1ULGYrPTh9Zm9yKGY9MCxsPTA7ZD5sOysrbCl7bj1lW2ZdLHI9ZVtmKzhdLGk9ZVtmKzE2XSxvPWVbZisyNF0sYT1lW2YrMzJdLHM9ZVtmKzQwXSx1PWVbZis0OF0sYz1lW2YrNTZdO3ZhciBHPW4rYyxPPW4tYyxfPXIrdSxCPXItdSxFPWkrcyxqPWktcyxrPW8rYSxOPW8tYSxXPUcrayxIPUctayx6PV8rRSxxPV8tRTtlW2ZdPVcreixlW2YrMzJdPVctejt2YXIgVj0uNzA3MTA2NzgxKihxK0gpO2VbZisxNl09SCtWLGVbZis0OF09SC1WLFc9TitqLHo9aitCLHE9QitPO3ZhciBYPS4zODI2ODM0MzMqKFctcSksUT0uNTQxMTk2MSpXK1gsWT0xLjMwNjU2Mjk2NSpxK1gsSz0uNzA3MTA2NzgxKnosSj1PK0ssWj1PLUs7ZVtmKzQwXT1aK1EsZVtmKzI0XT1aLVEsZVtmKzhdPUorWSxlW2YrNTZdPUotWSxmKyt9dmFyICQ7Zm9yKGw9MDtoPmw7KytsKSQ9ZVtsXSp0W2xdLExbbF09JD4wPyQrLjV8MDokLS41fDA7cmV0dXJuIEx9ZnVuY3Rpb24gbCgpe3UoNjU1MDQpLHUoMTYpLHMoNzQpLHMoNzApLHMoNzMpLHMoNzApLHMoMCkscygxKSxzKDEpLHMoMCksdSgxKSx1KDEpLHMoMCkscygwKX1mdW5jdGlvbiBmKGUsdCl7dSg2NTQ3MiksdSgxNykscyg4KSx1KHQpLHUoZSkscygzKSxzKDEpLHMoMTcpLHMoMCkscygyKSxzKDE3KSxzKDEpLHMoMykscygxNykscygxKX1mdW5jdGlvbiBkKCl7dSg2NTQ5OSksdSgxMzIpLHMoMCk7Zm9yKHZhciBlPTA7NjQ+ZTtlKyspcyhEW2VdKTtzKDEpO2Zvcih2YXIgdD0wOzY0PnQ7dCsrKXMoeFt0XSl9ZnVuY3Rpb24gaCgpe3UoNjU0NzYpLHUoNDE4KSxzKDApO2Zvcih2YXIgZT0wOzE2PmU7ZSsrKXMoV1tlKzFdKTtmb3IodmFyIHQ9MDsxMT49dDt0KyspcyhIW3RdKTtzKDE2KTtmb3IodmFyIG49MDsxNj5uO24rKylzKHpbbisxXSk7Zm9yKHZhciByPTA7MTYxPj1yO3IrKylzKHFbcl0pO3MoMSk7Zm9yKHZhciBpPTA7MTY+aTtpKyspcyhWW2krMV0pO2Zvcih2YXIgbz0wOzExPj1vO28rKylzKFhbb10pO3MoMTcpO2Zvcih2YXIgYT0wOzE2PmE7YSsrKXMoUVthKzFdKTtmb3IodmFyIGM9MDsxNjE+PWM7YysrKXMoWVtjXSl9ZnVuY3Rpb24gZygpe3UoNjU0OTgpLHUoMTIpLHMoMykscygxKSxzKDApLHMoMikscygxNykscygzKSxzKDE3KSxzKDApLHMoNjMpLHMoMCl9ZnVuY3Rpb24gcChlLHQsbixyLGkpe3ZhciBvLHM9aVswXSx1PWlbMjQwXTtjb25zdCBsPTE2LGY9NjMsZD02NDtmb3IodmFyIGg9YyhlLHQpLGc9MDtkPmc7KytnKVJbTltnXV09aFtnXTt2YXIgcD1SWzBdLW47bj1SWzBdLDA9PXA/YShyWzBdKToobz0zMjc2NytwLGEocltBW29dXSksYShUW29dKSk7Zm9yKHZhciBtPTYzO20+MCYmMD09UlttXTttLS0pO2lmKDA9PW0pcmV0dXJuIGEocyksbjtmb3IodmFyIHcsdj0xO20+PXY7KXtmb3IodmFyIHk9djswPT1SW3ZdJiZtPj12Oysrdik7dmFyIGI9di15O2lmKGI+PWwpe3c9Yj4+NDtmb3IodmFyIFM9MTt3Pj1TOysrUylhKHUpO2I9MTUmYn1vPTMyNzY3K1Jbdl0sYShpWyhiPDw0KStBW29dXSksYShUW29dKSx2Kyt9cmV0dXJuIG0hPWYmJmEocyksbn1mdW5jdGlvbiBtKCl7Zm9yKHZhciBlPVN0cmluZy5mcm9tQ2hhckNvZGUsdD0wOzI1Nj50O3QrKylqW3RdPWUodCl9ZnVuY3Rpb24gdyhlKXtpZigwPj1lJiYoZT0xKSxlPjEwMCYmKGU9MTAwKSxQIT1lKXt2YXIgbj0wO249NTA+ZT9NYXRoLmZsb29yKDVlMy9lKTpNYXRoLmZsb29yKDIwMC0yKmUpLHQobiksUD1lfX1mdW5jdGlvbiB2KCl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7ZXx8KGU9NTApLG0oKSxyKCksaSgpLG8oKSx3KGUpOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXR9dmFyIHksYixTLEksUCxGPShNYXRoLnJvdW5kLE1hdGguZmxvb3IpLEQ9bmV3IEFycmF5KDY0KSx4PW5ldyBBcnJheSg2NCksVT1uZXcgQXJyYXkoNjQpLEM9bmV3IEFycmF5KDY0KSxUPW5ldyBBcnJheSg2NTUzNSksQT1uZXcgQXJyYXkoNjU1MzUpLEw9bmV3IEFycmF5KDY0KSxSPW5ldyBBcnJheSg2NCksTT1bXSxHPTAsTz03LF89bmV3IEFycmF5KDY0KSxCPW5ldyBBcnJheSg2NCksRT1uZXcgQXJyYXkoNjQpLGo9bmV3IEFycmF5KDI1Niksaz1uZXcgQXJyYXkoMjA0OCksTj1bMCwxLDUsNiwxNCwxNSwyNywyOCwyLDQsNywxMywxNiwyNiwyOSw0MiwzLDgsMTIsMTcsMjUsMzAsNDEsNDMsOSwxMSwxOCwyNCwzMSw0MCw0NCw1MywxMCwxOSwyMywzMiwzOSw0NSw1Miw1NCwyMCwyMiwzMywzOCw0Niw1MSw1NSw2MCwyMSwzNCwzNyw0Nyw1MCw1Niw1OSw2MSwzNSwzNiw0OCw0OSw1Nyw1OCw2Miw2M10sVz1bMCwwLDEsNSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwXSxIPVswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXSx6PVswLDAsMiwxLDMsMywyLDQsMyw1LDUsNCw0LDAsMCwxLDEyNV0scT1bMSwyLDMsMCw0LDE3LDUsMTgsMzMsNDksNjUsNiwxOSw4MSw5Nyw3LDM0LDExMywyMCw1MCwxMjksMTQ1LDE2MSw4LDM1LDY2LDE3NywxOTMsMjEsODIsMjA5LDI0MCwzNiw1MSw5OCwxMTQsMTMwLDksMTAsMjIsMjMsMjQsMjUsMjYsMzcsMzgsMzksNDAsNDEsNDIsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMxLDEzMiwxMzMsMTM0LDEzNSwxMzYsMTM3LDEzOCwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTY5LDE3MCwxNzgsMTc5LDE4MCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMTAsMjExLDIxMiwyMTMsMjE0LDIxNSwyMTYsMjE3LDIxOCwyMjUsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQxLDI0MiwyNDMsMjQ0LDI0NSwyNDYsMjQ3LDI0OCwyNDksMjUwXSxWPVswLDAsMywxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFg9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLFE9WzAsMCwyLDEsMiw0LDQsMyw0LDcsNSw0LDQsMCwxLDIsMTE5XSxZPVswLDEsMiwzLDE3LDQsNSwzMyw0OSw2LDE4LDY1LDgxLDcsOTcsMTEzLDE5LDM0LDUwLDEyOSw4LDIwLDY2LDE0NSwxNjEsMTc3LDE5Myw5LDM1LDUxLDgyLDI0MCwyMSw5OCwxMTQsMjA5LDEwLDIyLDM2LDUyLDIyNSwzNywyNDEsMjMsMjQsMjUsMjYsMzgsMzksNDAsNDEsNDIsNTMsNTQsNTUsNTYsNTcsNTgsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsODMsODQsODUsODYsODcsODgsODksOTAsOTksMTAwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTYyLDE2MywxNjQsMTY1LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTc4LDE3OSwxODAsMTgxLDE4MiwxODMsMTg0LDE4NSwxODYsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjEwLDIxMSwyMTIsMjEzLDIxNCwyMTUsMjE2LDIxNywyMTgsMjI2LDIyNywyMjgsMjI5LDIzMCwyMzEsMjMyLDIzMywyMzQsMjQyLDI0MywyNDQsMjQ1LDI0NiwyNDcsMjQ4LDI0OSwyNTBdO3RoaXMuZW5jb2RlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj0obmV3IERhdGUpLmdldFRpbWUoKTt0JiZ3KHQpLE09bmV3IEFycmF5LEc9MCxPPTcsdSg2NTQ5NiksbCgpLGQoKSxmKGUud2lkdGgsZS5oZWlnaHQpLGgoKSxnKCk7dmFyIGk9MCxvPTAscz0wO0c9MCxPPTcsdGhpcy5lbmNvZGUuZGlzcGxheU5hbWU9XCJfZW5jb2RlX1wiO2Zvcih2YXIgYyxtLHYsUCxGLEQseCxULEEsTD1lLmRhdGEsUj1lLndpZHRoLGo9ZS5oZWlnaHQsTj00KlIsVz0wO2o+Vzspe2ZvcihjPTA7Tj5jOyl7Zm9yKEY9TipXK2MsRD1GLHg9LTEsVD0wLEE9MDs2ND5BO0ErKylUPUE+PjMseD00Kig3JkEpLEQ9RitUKk4reCxXK1Q+PWomJihELT1OKihXKzErVC1qKSksYyt4Pj1OJiYoRC09Yyt4LU4rNCksbT1MW0QrK10sdj1MW0QrK10sUD1MW0QrK10sX1tBXT0oa1ttXStrW3YrMjU2Pj4wXStrW1ArNTEyPj4wXT4+MTYpLTEyOCxCW0FdPShrW20rNzY4Pj4wXStrW3YrMTAyND4+MF0ra1tQKzEyODA+PjBdPj4xNiktMTI4LEVbQV09KGtbbSsxMjgwPj4wXStrW3YrMTUzNj4+MF0ra1tQKzE3OTI+PjBdPj4xNiktMTI4O2k9cChfLFUsaSx5LFMpLG89cChCLEMsbyxiLEkpLHM9cChFLEMscyxiLEkpLGMrPTMyfVcrPTh9aWYoTz49MCl7dmFyIEg9W107SFsxXT1PKzEsSFswXT0oMTw8TysxKS0xLGEoSCl9aWYodSg2NTQ5Nyksbil7Zm9yKHZhciB6PU0ubGVuZ3RoLHE9bmV3IFVpbnQ4QXJyYXkoeiksVj0wO3o+VjtWKyspcVtWXT1NW1ZdLmNoYXJDb2RlQXQoKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIHF9dmFyIFg9XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiK2J0b2EoTS5qb2luKFwiXCIpKTtNPVtdOyhuZXcgRGF0ZSkuZ2V0VGltZSgpLXI7cmV0dXJuIFh9LHYoKX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXt2YXIgbj10aGlzO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIuayoeacieaUtuWIsOWbvueJh++8jOWPr+iDveeahOino+WGs+aWueahiO+8mmh0dHBzOi8vZ2l0aHViLmNvbS90aGluazIwMTEvbG9jYWxSZXNpemVJTUcvaXNzdWVzLzdcIik7dD10fHx7fSxuLmRlZmF1bHRzPXt3aWR0aDpudWxsLGhlaWdodDpudWxsLGZpZWxkTmFtZTpcImZpbGVcIixxdWFsaXR5Oi43fSxuLmZpbGU9ZTtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobi5kZWZhdWx0c1tyXT10W3JdKTtyZXR1cm4gdGhpcy5pbml0KCl9ZnVuY3Rpb24gaShlKXt2YXIgdD1udWxsO3JldHVybiB0PWU/W10uZmlsdGVyLmNhbGwoZG9jdW1lbnQuc2NyaXB0cyxmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXQuc3JjLmluZGV4T2YoZSl9KVswXTpkb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdLHQ/dC5zcmMuc3Vic3RyKDAsdC5zcmMubGFzdEluZGV4T2YoXCIvXCIpKTpudWxsfWZ1bmN0aW9uIG8oZSl7dmFyIHQ7dD1lLnNwbGl0KFwiLFwiKVswXS5pbmRleE9mKFwiYmFzZTY0XCIpPj0wP2F0b2IoZS5zcGxpdChcIixcIilbMV0pOnVuZXNjYXBlKGUuc3BsaXQoXCIsXCIpWzFdKTtmb3IodmFyIG49ZS5zcGxpdChcIixcIilbMF0uc3BsaXQoXCI6XCIpWzFdLnNwbGl0KFwiO1wiKVswXSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspcltpXT10LmNoYXJDb2RlQXQoaSk7cmV0dXJuIG5ldyBzLkJsb2IoW3IuYnVmZmVyXSx7dHlwZTpufSl9bi5wPWkoXCJscnpcIikrXCIvXCIsd2luZG93LlVSTD13aW5kb3cuVVJMfHx3aW5kb3cud2Via2l0VVJMO3ZhciBhPW4oMSkscz1uKDQpLHU9big1KSxjPWZ1bmN0aW9uKGUpe3ZhciB0PS9PUyAoXFxkKV8uKiBsaWtlIE1hYyBPUyBYL2cuZXhlYyhlKSxuPS9BbmRyb2lkIChcXGQuKj8pOy9nLmV4ZWMoZSl8fC9BbmRyb2lkXFwvKFxcZC4qPykgL2cuZXhlYyhlKTtyZXR1cm57b2xkSU9TOnQ/K3QucG9wKCk8ODohMSxvbGRBbmRyb2lkOm4/K24ucG9wKCkuc3Vic3RyKDAsMyk8NC41OiExLGlPUzovXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLy50ZXN0KGUpLGFuZHJvaWQ6L0FuZHJvaWQvZy50ZXN0KGUpLG1RUUJyb3dzZXI6L01RUUJyb3dzZXIvZy50ZXN0KGUpfX0obmF2aWdhdG9yLnVzZXJBZ2VudCk7ci5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmZpbGUsbj1cInN0cmluZ1wiPT10eXBlb2YgdCxyPS9eZGF0YTovLnRlc3QodCksaT1uZXcgSW1hZ2UsdT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGM9bj90OlVSTC5jcmVhdGVPYmplY3RVUkwodCk7aWYoZS5pbWc9aSxlLmJsb2I9YyxlLmNhbnZhcz11LG4/ZS5maWxlTmFtZT1yP1wiYmFzZTY0LmpwZ1wiOnQuc3BsaXQoXCIvXCIpLnBvcCgpOmUuZmlsZU5hbWU9dC5uYW1lLCFkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQpdGhyb3cgbmV3IEVycm9yKFwi5rWP6KeI5Zmo5LiN5pSv5oyBY2FudmFzXCIpO3JldHVybiBuZXcgYShmdW5jdGlvbihuLGEpe2kub25lcnJvcj1mdW5jdGlvbigpe3ZhciBlPW5ldyBFcnJvcihcIuWKoOi9veWbvueJh+aWh+S7tuWksei0pVwiKTt0aHJvdyBhKGUpLGV9LGkub25sb2FkPWZ1bmN0aW9uKCl7ZS5fZ2V0QmFzZTY0KCkudGhlbihmdW5jdGlvbihlKXtpZihlLmxlbmd0aDwxMCl7dmFyIHQ9bmV3IEVycm9yKFwi55Sf5oiQYmFzZTY05aSx6LSlXCIpO3Rocm93IGEodCksdH1yZXR1cm4gZX0pLnRoZW4oZnVuY3Rpb24ocil7dmFyIGk9bnVsbDtcIm9iamVjdFwiPT10eXBlb2YgZS5maWxlJiZyLmxlbmd0aD5lLmZpbGUuc2l6ZT8oaT1uZXcgRm9ybURhdGEsdD1lLmZpbGUpOihpPW5ldyBzLkZvcm1EYXRhLHQ9byhyKSksaS5hcHBlbmQoZS5kZWZhdWx0cy5maWVsZE5hbWUsdCxlLmZpbGVOYW1lLnJlcGxhY2UoL1xcLi4rL2csXCIuanBnXCIpKSxuKHtmb3JtRGF0YTppLGZpbGVMZW46K3Quc2l6ZSxiYXNlNjQ6cixiYXNlNjRMZW46ci5sZW5ndGgsb3JpZ2luOmUuZmlsZSxmaWxlOnR9KTtmb3IodmFyIGEgaW4gZSllLmhhc093blByb3BlcnR5KGEpJiYoZVthXT1udWxsKTtVUkwucmV2b2tlT2JqZWN0VVJMKGUuYmxvYil9KX0sIXImJihpLmNyb3NzT3JpZ2luPVwiKlwiKSxpLnNyYz1jfSl9LHIucHJvdG90eXBlLl9nZXRCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcsbj1lLmZpbGUscj1lLmNhbnZhcztyZXR1cm4gbmV3IGEoZnVuY3Rpb24oaSl7dHJ5e3UuZ2V0RGF0YShcIm9iamVjdFwiPT10eXBlb2Ygbj9uOnQsZnVuY3Rpb24oKXtlLm9yaWVudGF0aW9uPXUuZ2V0VGFnKHRoaXMsXCJPcmllbnRhdGlvblwiKSxlLnJlc2l6ZT1lLl9nZXRSZXNpemUoKSxlLmN0eD1yLmdldENvbnRleHQoXCIyZFwiKSxyLndpZHRoPWUucmVzaXplLndpZHRoLHIuaGVpZ2h0PWUucmVzaXplLmhlaWdodCxlLmN0eC5maWxsU3R5bGU9XCIjZmZmXCIsZS5jdHguZmlsbFJlY3QoMCwwLHIud2lkdGgsci5oZWlnaHQpLGMub2xkSU9TP2UuX2NyZWF0ZUJhc2U2NEZvck9sZElPUygpLnRoZW4oaSk6ZS5fY3JlYXRlQmFzZTY0KCkudGhlbihpKX0pfWNhdGNoKG8pe3Rocm93IG5ldyBFcnJvcihvKX19KX0sci5wcm90b3R5cGUuX2NyZWF0ZUJhc2U2NEZvck9sZElPUz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxyPWUuY2FudmFzLGk9ZS5kZWZhdWx0cyxvPWUub3JpZW50YXRpb247cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKGUpeyFmdW5jdGlvbigpe3ZhciBhPVtuKDYpXTsoZnVuY3Rpb24obil7dmFyIGE9bmV3IG4odCk7XCI1Njc4XCIuaW5kZXhPZihvKT4tMT9hLnJlbmRlcihyLHt3aWR0aDpyLmhlaWdodCxoZWlnaHQ6ci53aWR0aCxvcmllbnRhdGlvbjpvfSk6YS5yZW5kZXIocix7d2lkdGg6ci53aWR0aCxoZWlnaHQ6ci5oZWlnaHQsb3JpZW50YXRpb246b30pLGUoci50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsaS5xdWFsaXR5KSl9KS5hcHBseShudWxsLGEpfSgpfSl9LHIucHJvdG90eXBlLl9jcmVhdGVCYXNlNjQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5yZXNpemUscj1lLmltZyxpPWUuY2FudmFzLG89ZS5jdHgscz1lLmRlZmF1bHRzLHU9ZS5vcmllbnRhdGlvbjtzd2l0Y2godSl7Y2FzZSAzOm8ucm90YXRlKDE4MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC53aWR0aCwtdC5oZWlnaHQsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA2Om8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA4Om8ucm90YXRlKDI3MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC5oZWlnaHQsMCx0LmhlaWdodCx0LndpZHRoKTticmVhaztjYXNlIDI6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8uZHJhd0ltYWdlKHIsMCwwLHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNDpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoMTgwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LndpZHRoLC10LmhlaWdodCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDU6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDkwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLDAsLXQud2lkdGgsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSA3Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSgyNzAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQuaGVpZ2h0LDAsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7ZGVmYXVsdDpvLmRyYXdJbWFnZShyLDAsMCx0LndpZHRoLHQuaGVpZ2h0KX1yZXR1cm4gbmV3IGEoZnVuY3Rpb24oZSl7Yy5vbGRBbmRyb2lkfHxjLm1RUUJyb3dzZXJ8fCFuYXZpZ2F0b3IudXNlckFnZW50PyFmdW5jdGlvbigpe3ZhciB0PVtuKDcpXTsoZnVuY3Rpb24odCl7dmFyIG49bmV3IHQscj1vLmdldEltYWdlRGF0YSgwLDAsaS53aWR0aCxpLmhlaWdodCk7ZShuLmVuY29kZShyLDEwMCpzLnF1YWxpdHkpKX0pLmFwcGx5KG51bGwsdCl9KCk6ZShpLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixzLnF1YWxpdHkpKX0pfSxyLnByb3RvdHlwZS5fZ2V0UmVzaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLG49ZS5kZWZhdWx0cyxyPW4ud2lkdGgsaT1uLmhlaWdodCxvPWUub3JpZW50YXRpb24sYT17d2lkdGg6dC53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9O2lmKFwiNTY3OFwiLmluZGV4T2Yobyk+LTEmJihhLndpZHRoPXQuaGVpZ2h0LGEuaGVpZ2h0PXQud2lkdGgpLGEud2lkdGg8cnx8YS5oZWlnaHQ8aSlyZXR1cm4gYTt2YXIgcz1hLndpZHRoL2EuaGVpZ2h0O2ZvcihyJiZpP3M+PXIvaT9hLndpZHRoPnImJihhLndpZHRoPXIsYS5oZWlnaHQ9TWF0aC5jZWlsKHIvcykpOmEuaGVpZ2h0PmkmJihhLmhlaWdodD1pLGEud2lkdGg9TWF0aC5jZWlsKGkqcykpOnI/cjxhLndpZHRoJiYoYS53aWR0aD1yLGEuaGVpZ2h0PU1hdGguY2VpbChyL3MpKTppJiZpPGEuaGVpZ2h0JiYoYS53aWR0aD1NYXRoLmNlaWwoaSpzKSxhLmhlaWdodD1pKTthLndpZHRoPj0zMjY0fHxhLmhlaWdodD49MjQ0ODspYS53aWR0aCo9LjgsYS5oZWlnaHQqPS44O3JldHVybiBhfSx3aW5kb3cubHJ6PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyByKGUsdCl9LHdpbmRvdy5scnoudmVyc2lvbj1cIjQuOS40MFwiLFxuZS5leHBvcnRzPXdpbmRvdy5scnp9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxyei5hbGwuYnVuZGxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IGhNZXRob2RzIGZyb20gJy4vaGFuZGxlLW1ldGhvZHMnXG5pbXBvcnQgYU1ldGhvZHMgZnJvbSAnLi9hc3Npc3QtbWV0aG9kcydcbk9iamVjdC5hc3NpZ24oSW5zdGFuY2UucHJvdG90eXBlLCBoTWV0aG9kcywgYU1ldGhvZHMpXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvaW5kZXguanMiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuY29uc3QgbWV0aG9kcyA9IHtcbiAgLypcbiAgICogZnVuYyBjcmVhdGUgYSBuZXcgcm93IGVsZW1lbnRcbiAgICogQHBhcmFtIHtvYmp9IGRhdGFcbiAgICogICAgICAgICAgdGFnIHtzdHJ9XG4gICAqICAgICAgICAgIGNvbnRlbnRlZGl0YWJsZSB7Ym9vbGVhbn0gZGVmYXVsdDogdHJ1ZVxuICAgKiAgICAgICAgICBpZCB7Ym9vbGVhbn0gd2hldGhlciBuZWVkIGEgaWQgZGVmYXVsdDogZmFsc2VcbiAgICogICAgICAgICAgYnIge2Jvb2xlYW59IHdoZXRoZXIgbmVlZCBhIGJyIGVsZW1lbnQgYWZ0ZXIgY3VycmVudCByb3cgZWxlbWVudCBkZWZhdWx0OiBmYWxzZVxuICAgKiBAcmV0dXJuICB7bm9kZX1cbiAgICoqL1xuICBuZXdSb3cgKGRhdGEgPSB7fSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGF0YS50YWcgfHwgY29uc3RhbnQuUk9XX1RBRylcbiAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgcm93LmRhdGFzZXQuZWRpdG9yUm93ID0gbWV0aG9kcy5jcmVhdGVSYW5kb21JZCgncm93JylcbiAgICB9XG4gICAgaWYgKGRhdGEuYnIpIHtcbiAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgICAgcm93LmFwcGVuZENoaWxkKGJyKVxuICAgIH1cbiAgICBpZiAoZGF0YS5jb250ZW50ZWRpdGFibGUgIT09IGZhbHNlKSB7XG4gICAgICByb3cuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKVxuICAgIH1cbiAgICByZXR1cm4gcm93XG4gIH0sXG4gIC8vIGdldCBzZWxlY3Rpb25cbiAgZ2V0U2VsZWN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gIH0sXG4gIC8qXG4gICAqIGZ1bmMgaW5zZXJ0IGEgZWxlbWVudCBhZnRlciB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0gbmV3RWxlbWVudCB7bm9kZX1cbiAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQge25vZGV9XG4gICAqKi9cbiAgaW5zZXJ0QWZ0ZXIgKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICB2YXIgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudC5sYXN0Q2hpbGQgPT09IHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQubmV4dFNpYmxpbmcpXG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBmdW5jIGNyZWF0ZSBhIHJhbmRvbSBpZFxuICAgKiBAcGFyYW0gcHJlZmZpeCB7c3RyfSBpZCdzIHByZWZmaXhcbiAgICogQHJldHVybiBpZFxuICAgKiovXG4gIGNyZWF0ZVJhbmRvbUlkIChwcmVmZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZmaXggfHwgJ2lkJ30tJHtNYXRoLnJhbmRvbSgpICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpfWBcbiAgfSxcbiAgLypcbiAgICogcmV0dXJuIGVkaXQgem9uZSBlbGVtZW50XG4gICAqKi9cbiAgZWRpdFpvbmUgKCkge1xuICAgIGlmIChtZXRob2RzLmVkaXRab25lX2NhY2hlKSB7XG4gICAgICByZXR1cm4gbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZVxuICAgIH1cbiAgICBtZXRob2RzLmVkaXRab25lX2NhY2hlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yPVwiY29udGVudFwiXScpXG4gICAgcmV0dXJuIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGVcbiAgfSxcbiAgLypcbiAgICogc2V0IHJhbmdlIGF0IHRhcmdldCBub2RlXG4gICAqKi9cbiAgc2V0UmFuZ2VBdCAobm9kZSwgY2hlY2tBbGwpIHtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICBpZiAoY2hlY2tBbGwpIHtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIDApXG4gICAgICBsZXQgZW5kID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA/IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggOiAobm9kZS5sZW5ndGggPyBub2RlLmxlbmd0aCA6IDApXG4gICAgICByYW5nZS5zZXRFbmQobm9kZSwgZW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZS5zZXRTdGFydChub2RlLCAwKVxuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIDApXG4gICAgfVxuICAgIGxldCBzZWxlY3Rpb24gPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuICB9LFxuICBnZXRSYW5nZSAoKSB7XG4gICAgbGV0IHMgPSBtZXRob2RzLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMucmFuZ2VDb3VudCkge1xuICAgICAgcmV0dXJuIHMuZ2V0UmFuZ2VBdCgwKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9hc3Npc3QtbWV0aG9kcy5qcyIsImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuLypcbiAqIEluc3BlY3QgYW5kIGhpZ2hsaWdodCBtb2R1bGVcbiAqKi9cbmNsYXNzIEluc3BlY3RvciB7XG4gIGNvbnN0cnVjdG9yIChtb2R1bGVOYW1lKSB7XG4gICAgdGhpcy5tb2R1bGVOYW1lID0gbW9kdWxlTmFtZVxuICB9XG5cbiAgYWRkICh0eXBlLCBwYXJhbSkge1xuICAgIGxldCBtb2R1bGVOYW1lID0gdGhpcy5tb2R1bGVOYW1lXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVOYW1lIG11c3QgYmUgc3RyaW5nJylcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciB0YWcgY2FuIG9ubHkgcmVjZWl2ZSBhIHN0cmluZyBwYXJhbSB3aGljaCBzdGFuZCBmb3IgdGFnIG5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci50YWdNYXBbcGFyYW0udG9VcHBlckNhc2UoKV0gPSBtb2R1bGVOYW1lXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGlmICghaXNPYmoocGFyYW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIHN0eWxlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5zdHlsZXNbbW9kdWxlTmFtZV0gPSBwYXJhbVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0cmlidXRlJzpcbiAgICAgICAgaWYgKCFpc09iaihwYXJhbSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3IgYXR0cmlidXRlIGNhbiBvbmx5IHJlY2VpdmUgYSBvYmplY3QgcGFyYW0nKVxuICAgICAgICB9XG4gICAgICAgIEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdID0gcGFyYW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBpbnNwZWN0b3IgdHlwZScpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBpbnNwZWN0X3RhZyAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBsZXQgaW5zcGVjdFJlc3VsdCA9IEluc3BlY3Rvci50YWdNYXBbbm9kZS5ub2RlTmFtZV1cbiAgICAgIGlmIChpbnNwZWN0UmVzdWx0ICYmICFyZXN1bHQuaW5jbHVkZXMoaW5zcGVjdFJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5zcGVjdFJlc3VsdClcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9zdHlsZSAobm9kZSkge1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IFJILnByb3RvdHlwZS5lZGl0Wm9uZSgpKSB7XG4gICAgICBpZiAoIW5vZGUuc3R5bGUpIGJyZWFrXG4gICAgICBPYmplY3Qua2V5cyhJbnNwZWN0b3Iuc3R5bGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlU3R5bGUgPSBJbnNwZWN0b3Iuc3R5bGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZVN0eWxlKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCBjdXJWYWx1ZSA9IG1vZHVsZVN0eWxlW2l0ZW1dXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJWYWx1ZSA9PT0gJ3N0cmluZycgJiYgbm9kZS5zdHlsZVtpdGVtXSA9PT0gY3VyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IGN1clZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbHVlKSkge1xuICAgICAgICAgICAgY3VyVmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgICBpZiAobm9kZS5zdHlsZVtpdGVtXSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZU5hbWUpXG4gICAgICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW5zcGVjdF9hdHRyaWJ1dGUgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgaWYgKCFub2RlLmdldEF0dHJpYnV0ZSkgYnJlYWtcbiAgICAgIE9iamVjdC5rZXlzKEluc3BlY3Rvci5hdHRyaWJ1dGVzKS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICBsZXQgbW9kdWxlQXR0ciA9IEluc3BlY3Rvci5hdHRyaWJ1dGVzW21vZHVsZU5hbWVdXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZUF0dHIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gbW9kdWxlQXR0cltpdGVtXVxuICAgICAgICAgIGxldCBub2RlVmFsID0gbm9kZS5nZXRBdHRyaWJ1dGUoaXRlbSlcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGVWYWwgPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBub2RlVmFsID09PSB2YWx1ZSB8fCBub2RlVmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5JbnNwZWN0b3IudGFnTWFwID0ge31cbkluc3BlY3Rvci5zdHlsZXMgPSB7fVxuSW5zcGVjdG9yLmF0dHJpYnV0ZXMgPSB7fVxuSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zID0ge31cblxuSW5zcGVjdG9yLnJ1biA9ICh0eXBlLCBub2RlTGlzdCkgPT4ge1xuICBsZXQgZm4gPSBJbnNwZWN0b3IucHJvdG90eXBlWydpbnNwZWN0XycgKyB0eXBlXVxuICBsZXQgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBBcnJheS5pc0FycmF5KG5vZGVMaXN0KSkge1xuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICByZXN1bHQucHVzaChmbihub2RlKSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUgPSBmdW5jdGlvbiAobGlzdCkge1xuICAvLyBtZXJnZSBzYW1lIG1vZHVsZSBpbnNwZWN0IHJlc3VsdFxuICBsZXQgc2FtZVN0eWxlTWFwID0ge31cbiAgbGlzdC5mb3JFYWNoKG0gPT4ge1xuICAgIGlmICh0eXBlb2YgbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhbWVTdHlsZU1hcFttXSA9IHNhbWVTdHlsZU1hcFttXSA/IHNhbWVTdHlsZU1hcFttXSArIDEgOiAxXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG0pKSB7XG4gICAgICBtID0gQXJyYXkuZnJvbShuZXcgU2V0KG0pKVxuICAgICAgbS5mb3JFYWNoKGFtID0+IHtcbiAgICAgICAgc2FtZVN0eWxlTWFwW2FtXSA9IHNhbWVTdHlsZU1hcFthbV0gPyBzYW1lU3R5bGVNYXBbYW1dICsgMSA6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICBsZXQgbWVyZ2VkU3R5bGUgPSBbXVxuICBPYmplY3Qua2V5cyhzYW1lU3R5bGVNYXApLmZvckVhY2gobSA9PiB7XG4gICAgaWYgKHNhbWVTdHlsZU1hcFttXSA9PT0gbGlzdC5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFN0eWxlLnB1c2gobSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtZXJnZWRTdHlsZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS1pbnNwZWN0L2luZGV4LmpzIiwiaW1wb3J0IHBvbHlmaWxsIGZyb20gJy4vdXRpbC9wb2x5ZmlsbC1pZSdcbmltcG9ydCBidWlsZEluTW9kdWxlcyBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgYnVpbGRJblNob3J0Y3V0IGZyb20gJy4vc2hvcnRjdXQnXG5pbXBvcnQgY29uc3RhbnRDb25maWcgZnJvbSAnLi9jb25zdGFudC1jb25maWcnXG5pbXBvcnQgZWRpdG9yIGZyb20gJy4vZWRpdG9yL2VkaXRvcidcbmltcG9ydCBidWlsZEluQ29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcbmltcG9ydCBpbml0RXhjbHVkZVJ1bGUgZnJvbSAnLi9tb2R1bGUtaW5zcGVjdC9sb2FkLW1vZHVsZS1pbnNwZWN0LWV4Y2x1ZGUtcnVsZXMnXG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vbW9kdWxlLWluc3BlY3QnXG5pbXBvcnQgaTE4blpoQ24gZnJvbSAnLi9pMThuL3poLWNuJ1xuaW1wb3J0IGkxOG5FblVzIGZyb20gJy4vaTE4bi9lbi11cydcbmltcG9ydCB7XG4gIG1peGluLFxuICBpc09ialxufSBmcm9tICcuL3V0aWwnXG5cbnBvbHlmaWxsKClcblxuY2xhc3MgRWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbW9kdWxlcyA9IFsuLi5idWlsZEluTW9kdWxlc11cbiAgICBsZXQgcmVzZXJ2ZWROYW1lcyA9IHt9XG4gICAgbW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgaWYgKG0ubmFtZSkge1xuICAgICAgICByZXNlcnZlZE5hbWVzW20ubmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBjb21wb25lbnRzID0ge31cbiAgICBjb25zdCBtb2R1bGVzTWFwID0ge31cblxuICAgIC8vIGV4dGVuZGVkIG1vZHVsZXNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLmV4dGVuZE1vZHVsZXMpKSB7XG4gICAgICBvcHRpb25zLmV4dGVuZE1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICBpZiAobW9kdWxlLm5hbWUgJiYgIXJlc2VydmVkTmFtZXNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgICAgbW9kdWxlcy5wdXNoKG1vZHVsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4dGVuZGVkIG1vZHVsZSBtdXN0IGhhdmUgYSBuYW1lIGFuZCBzaG91bGQgbm90IGJlIHRoZSBzYW1lIGFzIGJ1aWxkSW4gbW9kdWxlJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtb2R1bGVzIGluIHVzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMubW9kdWxlcykpIHtcbiAgICAgIGxldCBtID0gW11cbiAgICAgIG9wdGlvbnMubW9kdWxlcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGVzXFwncyBpdGVtIG11c3QgYmUgc3RyaW5nJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICBpZiAobW9kdWxlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIG0ucHVzaChtb2R1bGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIG1vZHVsZXMgPSBtXG4gICAgfVxuXG4gICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAvLyBjb25maWdcbiAgICAgIGxldCBjdXJDb25maWcgPSBvcHRpb25zW21vZHVsZS5uYW1lXVxuICAgICAgbGV0IG1vZHVsZUNvbmZpZyA9IG1vZHVsZVxuICAgICAgaWYgKGlzT2JqKGN1ckNvbmZpZykgJiYgaXNPYmoobW9kdWxlQ29uZmlnKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKG1vZHVsZUNvbmZpZywgY3VyQ29uZmlnKVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IG51bGxcbiAgICAgIG1vZHVsZS5mb3JiaWRkZW4gPSBudWxsXG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxldCBpbnNwZWN0b3IgPSBuZXcgSW5zcGVjdG9yKG1vZHVsZS5uYW1lKVxuICAgICAgICBtb2R1bGUuaW5zcGVjdChpbnNwZWN0b3IuYWRkLmJpbmQoaW5zcGVjdG9yKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS50eXBlID0gJ2ZuJ1xuICAgICAgfVxuICAgICAgbW9kdWxlLmV4Y2x1ZGUgPSBpbml0RXhjbHVkZVJ1bGUobW9kdWxlLCBtb2R1bGVzKVxuXG4gICAgICBpZiAobW9kdWxlLnRhYikge1xuICAgICAgICBtb2R1bGUudGFiLm1vZHVsZSA9IG1vZHVsZVxuXG4gICAgICAgIC8vIGFkZCBhY3RpdmVJdGVtIHByb3BcbiAgICAgICAgbW9kdWxlLnRhYi5wcm9wcyA9IG1vZHVsZS50YWIucHJvcHMgPyBPYmplY3QuYXNzaWduKG1vZHVsZS50YWIucHJvcHMsIHthY3RpdmVJdGVtOiBbU3RyaW5nLCBCb29sZWFuXSwgZm9yYmlkZGVuOiBCb29sZWFufSkgOiB7YWN0aXZlSXRlbTogW1N0cmluZywgQm9vbGVhbl0sIGZvcmJpZGRlbjogQm9vbGVhbn1cbiAgICAgICAgbW9kdWxlLnRhYk5hbWUgPSBgdGFiLSR7bW9kdWxlLm5hbWV9YFxuICAgICAgICBjb21wb25lbnRzW21vZHVsZS50YWJOYW1lXSA9IG1vZHVsZS50YWJcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmljb25zICYmIG9wdGlvbnMuaWNvbnNbbW9kdWxlLm5hbWVdKSB7XG4gICAgICAgIG1vZHVsZS5pY29uID0gb3B0aW9ucy5pY29uc1ttb2R1bGUubmFtZV1cbiAgICAgIH1cbiAgICAgIG1vZHVsZS5oYXNUYWIgPSAhIW1vZHVsZS50YWJcblxuICAgICAgLy8gcHJldmVudCB2dWUgc3luY1xuICAgICAgZGVsZXRlIG1vZHVsZS50YWJcblxuICAgICAgbW9kdWxlc01hcFttb2R1bGUubmFtZV0gPSBtb2R1bGVcbiAgICB9KVxuXG4gICAgLy8gaTE4blxuICAgIGNvbnN0IGkxOG4gPSB7J3poLWNuJzogaTE4blpoQ24sICdlbi11cyc6IGkxOG5FblVzfVxuICAgIGNvbnN0IGN1c3RvbUkxOG4gPSBvcHRpb25zLmkxOG4gfHwge31cbiAgICBPYmplY3Qua2V5cyhjdXN0b21JMThuKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGkxOG5ba2V5XSA9IGkxOG5ba2V5XSA/IE9iamVjdC5hc3NpZ24oaTE4bltrZXldLCBjdXN0b21JMThuW2tleV0pIDogY3VzdG9tSTE4bltrZXldXG4gICAgfSlcbiAgICBjb25zdCBsYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgfHwgJ2VuLXVzJ1xuICAgIGNvbnN0IGxvY2FsZSA9IGkxOG5bbGFuZ3VhZ2VdXG5cbiAgICAvLyBzaG9ydGN1dFxuICAgIG9wdGlvbnMuc2hvcnRjdXQgPSBPYmplY3QuYXNzaWduKGJ1aWxkSW5TaG9ydGN1dCwgb3B0aW9ucy5zaG9ydGN1dCB8fCB7fSlcbiAgICBjb25zdCBzaG9ydGN1dCA9IHt9XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5zaG9ydGN1dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSBvcHRpb25zLnNob3J0Y3V0W2tleV1cbiAgICAgIGxldCBrZXlDb2RlID0gaXRlbS5rZXlDb2RlXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXSA9IHNob3J0Y3V0W2tleUNvZGVdIHx8IFtdXG4gICAgICBzaG9ydGN1dFtrZXlDb2RlXS5wdXNoKGl0ZW0pXG4gICAgICBpdGVtLm5hbWUgPSBrZXlcbiAgICB9KVxuXG4gICAgLy8gbWVyZ2UgY29tbWFuZHNcbiAgICBpZiAoaXNPYmoob3B0aW9ucy5jb21tYW5kcykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYnVpbGRJbkNvbW1hbmRzLCBvcHRpb25zLmNvbW1hbmRzKVxuICAgIH1cblxuICAgIC8vIHNwZWxsY2hlY2tcbiAgICBjb25zdCBzcGVsbGNoZWNrID0gb3B0aW9ucy5zcGVsbGNoZWNrIHx8IGZhbHNlXG5cbiAgICBjb25zdCBjb21wbyA9IG1peGluKGVkaXRvciwge1xuICAgICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7bW9kdWxlcywgbG9jYWxlLCBzaG9ydGN1dCwgbW9kdWxlc01hcCwgc3BlbGxjaGVjaywgY29uc3RhbnRDb25maWd9XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50c1xuICAgIH0pXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb21wbylcbiAgfVxuXG4gIC8qKlxuICAgKiBnbG9iYWwgaW5zdGFsbFxuICAgKiBAcGFyYW0gVnVlXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzdGF0aWMgaW5zdGFsbChWdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIFZ1ZS5jb21wb25lbnQob3B0aW9ucy5uYW1lIHx8ICdteS12dWUtZWRpdG9yJywgbmV3IEVkaXRvcihvcHRpb25zKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcblxuLy8gdG8gY2hhbmdlIEJhYmVsNiBleHBvcnQncyByZXN1bHRcbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgICAgICAgICB2YWx1ZShzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IE9iamVjdCh0aGlzKVxuXG4gICAgICAgICAgICAgICAgLy8gMi4gTGV0IGxlbiBiZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBvLmxlbmd0aCA+Pj4gMFxuXG4gICAgICAgICAgICAgICAgLy8gMy4gSWYgbGVuIGlzIDAsIHJldHVybiBmYWxzZS5cbiAgICAgICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDQuIExldCBuIGJlID8gVG9JbnRlZ2VyKGZyb21JbmRleCkuXG4gICAgICAgICAgICAgICAgLy8gICAgKElmIGZyb21JbmRleCBpcyB1bmRlZmluZWQsIHRoaXMgc3RlcCBwcm9kdWNlcyB0aGUgdmFsdWUgMC4pXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IGZyb21JbmRleCB8IDBcblxuICAgICAgICAgICAgICAgIC8vIDUuIElmIG4g4omlIDAsIHRoZW5cbiAgICAgICAgICAgICAgICAvLyAgYS4gTGV0IGsgYmUgbi5cbiAgICAgICAgICAgICAgICAvLyA2LiBFbHNlIG4gPCAwLFxuICAgICAgICAgICAgICAgIC8vICBhLiBMZXQgayBiZSBsZW4gKyBuLlxuICAgICAgICAgICAgICAgIC8vICBiLiBJZiBrIDwgMCwgbGV0IGsgYmUgMC5cbiAgICAgICAgICAgICAgICBsZXQgayA9IE1hdGgubWF4KG4gPj0gMCA/IG4gOiBsZW4gLSBNYXRoLmFicyhuKSwgMClcblxuICAgICAgICAgICAgICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBlbGVtZW50SyBiZSB0aGUgcmVzdWx0IG9mID8gR2V0KE8sICEgVG9TdHJpbmcoaykpLlxuICAgICAgICAgICAgICAgICAgICAvLyBiLiBJZiBTYW1lVmFsdWVaZXJvKHNlYXJjaEVsZW1lbnQsIGVsZW1lbnRLKSBpcyB0cnVlLCByZXR1cm4gdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gYy4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiA9PT0gcHJvdmlkZXMgdGhlIGNvcnJlY3QgXCJTYW1lVmFsdWVaZXJvXCIgY29tcGFyaXNvbiBuZWVkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaysrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gOC4gUmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIHRleHQuY29udGFpbnMoKVxuICAgIGlmICghVGV4dC5wcm90b3R5cGUuY29udGFpbnMpIHtcbiAgICAgICAgVGV4dC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcyA9PT0gbm9kZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wb2x5ZmlsbC1pZS5qcyIsImltcG9ydCBhbGlnbiBmcm9tICcuL2FsaWduL2luZGV4J1xuaW1wb3J0IGZvbnQgZnJvbSAnLi9mb250L2luZGV4J1xuaW1wb3J0IGZ1bGxTY3JlZW4gZnJvbSAnLi9mdWxsLXNjcmVlbi9pbmRleCdcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlL2luZGV4J1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IGl0YWxpYyBmcm9tICcuL2l0YWxpYydcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQgcXVvdGUgZnJvbSAnLi9xdW90ZSdcbmltcG9ydCBpbmRlbnQgZnJvbSAnLi9pbmRlbnQnXG5pbXBvcnQgb3V0ZGVudCBmcm9tICcuL291dGRlbnQnXG5pbXBvcnQgdWwgZnJvbSAnLi91bCdcbmltcG9ydCBvbCBmcm9tICcuL29sJ1xuaW1wb3J0IGxpbmV0aHJvdWdoIGZyb20gJy4vbGluZXRocm91Z2gnXG5pbXBvcnQgaXRvZG8gZnJvbSAnLi9pY291cnQtdG9kbydcblxuXG4vKipcbiAqIGJ1aWxkLWluIG1vZHVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gIGZvbnQsXG4gIGFsaWduLFxuICBpbWFnZSxcbiAgZnVsbFNjcmVlbixcbiAgYm9sZCxcbiAgaXRhbGljLFxuICB1bmRlcmxpbmUsXG4gIHRvZG8sXG4gIHF1b3RlLFxuICBpbmRlbnQsXG4gIG91dGRlbnQsXG4gIHVsLFxuICBvbCxcbiAgbGluZXRocm91Z2gsXG4gIGl0b2RvXG5dXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FsaWduJyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLWFsaWduJyxcbiAgdGFiLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3N0eWxlJywge1xuICAgICAgJ3RleHRBbGlnbic6IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeSddXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlSXRlbSAobikge1xuICAgICAgbiA9IG4gfHwgJ2xlZnQnXG4gICAgICBsZXQgbWFwID0ge1xuICAgICAgICAnbGVmdCc6IDIsXG4gICAgICAgICdjZW50ZXInOiAwLFxuICAgICAgICAncmlnaHQnOiAxXG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBtYXBbbl1cbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy5jaG9vc2VkID0ge1xuICAgICAgICBpY29uOiAnYWxpZ24tJyArIG4sXG4gICAgICAgIGluZGV4LFxuICAgICAgICBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuYWxpZ25NYXBba2V5XVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGlnbihpbmRleClcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlnbk1hcDoge1xuICAgICAgICAn5bGF5LitJzogJ2p1c3RpZnlDZW50ZXInLFxuICAgICAgICAn5bGF5Y+zJzogJ2p1c3RpZnlSaWdodCcsXG4gICAgICAgICflsYXlt6YnOiAnanVzdGlmeUxlZnQnXG4gICAgICB9LFxuICAgICAgY2hvb3NlZDoge31cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRBbGlnbiAoaW5kZXgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5hbGlnbk1hcClcbiAgICAgIGxldCBrZXkgPSBvcHRpb25zW2luZGV4XVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKHRoaXMuYWxpZ25NYXBba2V5XSlcbiAgICAgIHRoaXMuJHBhcmVudC5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIHRoaXMuJHBhcmVudC5tb2R1bGVJbnNwZWN0KClcbiAgICB9LFxuICAgIGNoYW5nZUFsaWduICgpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICBsZXQgcHJlX2luZGV4ID0gIWlzTmFOKHRoaXMuY2hvb3NlZC5pbmRleCkgPyB0aGlzLmNob29zZWQuaW5kZXggOiAtMVxuICAgICAgbGV0IGxlbiA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApLmxlbmd0aFxuICAgICAgbGV0IHRhcmdldF9pbmRleFxuICAgICAgaWYgKHByZV9pbmRleCArIDEgPT09IGxlbikge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRfaW5kZXggPSArK3ByZV9pbmRleFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBbGlnbih0YXJnZXRfaW5kZXgpXG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgY2xhc3M9J2J0bicgQGNsaWNrPVxcXCJjaGFuZ2VBbGlnbigpXFxcIiA6dGl0bGU9XFxcIiflr7npvZDmlrnlvI86JyArIChjaG9vc2VkLmtleSB8fCAn5bGF5bemJylcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYVxcXCIgOmNsYXNzPVxcXCInZmEtJyArIChjaG9vc2VkLmljb24gfHwgJ2FsaWduLWxlZnQnKVxcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9hbGlnbi90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRhYiBmcm9tICcuL3RhYidcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZvbnQnLFxuICBpY29uOiAnaXVpLWljb24gaXVpLWljb24tc3Bhbm5lcicsXG4gIHRhYixcbiAgY29uZmlnLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3N0eWxlJywge1xuICAgICAgZm9udFNpemU6IFsneHgtbGFyZ2UnLCAneC1sYXJnZScsICdsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnXVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWIuaHRtbCdcbmltcG9ydCAnLi9zdHlsZS5zdHlsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLmZvbnRBdHRyTWFwW25dXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaG9vc2VkID0gdGhpcy5mb250QXR0ck1hcFt0aGlzLmZvbnRBdHRyTWFwWydkZWZhdWx0J11dXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEF0dHJNYXA6IHt9LFxuICAgICAgY3VyTW9kdWxlOiBudWxsLFxuICAgICAgY2hvb3NlZDoge30sXG4gICAgICBzaG93TGlzdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93TGlzdEZuICgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLnRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvcmJpZGRlbicpKSByZXR1cm5cbiAgICAgIHRoaXMuc2hvd0xpc3QgPSB0cnVlXG4gICAgfSxcbiAgICBjaGFuZ2VBdHRyICh2YWwpIHtcbiAgICAgIHRoaXMuY2hvb3NlZCA9IHZhbFxuICAgICAgLy8gdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdsaW5lSGVpZ2h0JywgdmFsLmxpbmVIZWlnaHQpXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgdmFsLmZvbnRTaXplKVxuICAgICAgdGhpcy5zaG93TGlzdCA9IGZhbHNlXG4gICAgfSxcbiAgICBzZXRGb250TmFtZSAobmFtZSkge1xuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb250TmFtZScsIG5hbWUpXG4gICAgfSxcbiAgICBzZXRIZWFkaW5nIChoZWFkaW5nKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgaGVhZGluZylcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ZvbnQnXVxuICAgIHRoaXMuZm9udEF0dHJNYXAgPSB0aGlzLmN1ck1vZHVsZS5jb25maWdcbiAgICB0aGlzLmNob29zZWQgPSB0aGlzLmZvbnRBdHRyTWFwW3RoaXMuZm9udEF0dHJNYXBbJ2RlZmF1bHQnXV1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcInRhYlxcXCIgY2xhc3M9XFxcImZvbnQtdGFiIHRhYi13aXRoLWRyb3Bkb3duXFxcIiBAbW91c2VlbnRlcj1cXFwic2hvd0xpc3RGblxcXCIgQG1vdXNlbGVhdmU9XFxcInNob3dMaXN0ID0gZmFsc2VcXFwiPlxcbiAgICB7e2Nob29zZWQubmFtZX19XFxuICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWNhcmV0LWRvd25cXFwiPjwvaT5cXG4gICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93blxcXCIgdi1pZj1cXFwic2hvd0xpc3RcXFwiPlxcbiAgICAgICAgPGxpIHYtaWY9XFxcInZhbC5uYW1lXFxcIiB2LWZvcj1cXFwiKHZhbCwga2V5KSBpbiBmb250QXR0ck1hcFxcXCIgQGNsaWNrPVxcXCJjaGFuZ2VBdHRyKHZhbClcXFwiPnt7IHZhbC5uYW1lIH19PC9saT5cXG4gICAgPC91bD5cXG48L2xpPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZm9udC9zdHlsZS5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAvLyB0aHJvdWdoIGZvbnQgdGFnXG4gICd4eC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNixcbiAgICBuYW1lOiAn5qCH6aKYJ1xuICB9LFxuICAneC1sYXJnZSc6IHtcbiAgICBmb250U2l6ZTogNSxcbiAgICBuYW1lOiAn5Ymv5qCH6aKYJ1xuICB9LFxuICAnbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDQsXG4gICAgbmFtZTogJ+Wwj+agh+mimCdcbiAgfSxcbiAgJ21lZGl1bSc6IHtcbiAgICBmb250U2l6ZTogMyxcbiAgICBuYW1lOiAn5q2j5paHJ1xuICB9LFxuICBkZWZhdWx0OiAnbWVkaXVtJ1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L2NvbmZpZy5qcyIsIi8qKlxuICogdG9nZ2xlIGZ1bGwgc2NyZWVuIG1vZGVcbiAqIENyZWF0ZWQgYnkgcGVhayBvbiAxNi84LzE4LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2Z1bGwtc2NyZWVuJyxcbiAgICBpY29uOiAnZmEgZmEtYXJyb3dzLWFsdCcsXG4gICAgaTE4bjogJ2Z1bGwgc2NyZWVuJyxcbiAgICBoYW5kbGVyKHJoKSB7XG4gICAgICAgIHJoLmVkaXRvci50b2dnbGVGdWxsU2NyZWVuKClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mdWxsLXNjcmVlbi9pbmRleC5qcyIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ltYWdlJyxcbiAgaTE4bjogJ2ltYWdlJyxcbiAgY2FuVXBsb2FkU2FtZUltYWdlOiB0cnVlLFxuICBpbWdPY2N1cHlOZXdSb3c6IGZhbHNlLFxuICBtYXhTaXplOiA1MTIwICogMTAyNCxcbiAgY29tcHJlc3M6IHtcbiAgICAvLyBtYXggd2lkdGhcbiAgICB3aWR0aDogMTYwMCxcbiAgICAvLyBtYXggaGVpZ2h0XG4gICAgaGVpZ2h0OiAxNjAwLFxuICAgIC8vIGNwbXByZXNzIHF1YWxpdHkgMCAtIDFcbiAgICBxdWFsaXR5OiAwLjhcbiAgfSxcbiAgdGFiLFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdpbWcnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS9pbmRleC5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICd0YWItaW1hZ2UnLFxuICAgICAgY3VyTW9kdWxlOiBudWxsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGljaygpIHtcbiAgICAgIGlmICh0aGlzLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKVxuICAgIH0sXG4gICAgcHJvY2VzcyhlKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy4kcmVmcy5maWxlLmZpbGVzWzBdXG4gICAgICB0aGlzLiRwYXJlbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIGlmICh0aGlzLmN1ck1vZHVsZS5jYW5VcGxvYWRTYW1lSW1hZ2UpIHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5jdXJNb2R1bGUgPSB0aGlzLiRwYXJlbnQubW9kdWxlc01hcFsnaW1hZ2UnXVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuanMiLCJleHBvcnQgZGVmYXVsdCBcIjxsaSByZWY9XFxcIml0ZW1cXFwiIGNsYXNzPVxcXCJidG5cXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIHJlZj1cXFwiZmlsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIiBAY2hhbmdlPVxcXCJwcm9jZXNzXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiPlxcbiAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOiBzdWJcXFwiIGNsYXNzPVxcXCJmYSBmYS1waWN0dXJlLW9cXFwiIEBjbGljaz1cXFwicGlja1xcXCI+PC9zcGFuPlxcbjwvbGk+XFxuXFxuXFxuXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYm9sZCcsXG4gIGljb246ICdmYSBmYS1ib2xkJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdib2xkJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnU1RST05HJykuYWRkKCd0YWcnLCAnQicpLmFkZCgnc3R5bGUnLHsnZm9udC13ZWlnaHQnOiAnYm9sZCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaXRhbGljJyxcbiAgaWNvbjogJ2ZhIGZhLWl0YWxpYycsXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpdGFsaWMnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdJJykuYWRkKCdzdHlsZScsIHsnZm9udFN0eWxlJzogJ2l0YWxpYyd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pdGFsaWMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd1bmRlcmxpbmUnLFxuICBpY29uOiAnZmEgZmEtdW5kZXJsaW5lJyxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1UnKS5hZGQoJ3N0eWxlJywgeyd0ZXh0LWRlY29yYXRpb24tbGluZSc6ICd1bmRlcmxpbmUnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdW5kZXJsaW5lL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndG9kbycsXG4gIGljb246ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICBleGNsdWRlOiAnQUxMX0JVVF9NWVNFTEYnLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3RvZG8nLCB7XG4gICAgICBpbnNlcnRBZnRlcjogcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXG4gICAgICBwbGFjZWhvbGRlcjogJ+W+heWKnuS6i+mhuSdcbiAgICB9KVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci10b2RvJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy90b2RvL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncXVvdGUnLFxuICBpY29uOiAnZmEgZmEtcXVvdGUtcmlnaHQnLFxuICBzaG93OiB0cnVlLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRRdW90ZScpXG4gIH0sXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCwgbW9kdWxlKSB7XG4gICAgbGV0IGlzSW5RdW90ZSA9IHJoLmVkaXRvci5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZS5uYW1lKVxuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgncXVvdGUnLCBpc0luUXVvdGUpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXF1b3RlJzogJydcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1pbmRlbnQnLFxuICB0eXBlOiAnZm4nLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luZGVudCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGVudCcsXG4gIGljb246ICdmYSBmYS1vdXRkZW50JyxcbiAgdHlwZTogJ2ZuJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdvdXRkZW50JylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3VsJyxcbiAgaWNvbjogJ2ZhIGZhLWxpc3QtdWwnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdVTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3VsL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2wnLFxuICBpY29uOiAnZmEgZmEtbGlzdC1vbCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdPTCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL29sL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbGluZXRocm91Z2gnLFxuICBpY29uOiAnZmEgZmEtc3RyaWtldGhyb3VnaCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1NUUklLRScpLmFkZCgnc3R5bGUnLCB7J3RleHQtZGVjb3JhdGlvbi1saW5lJzogJ2xpbmUtdGhyb3VnaCd9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2l0b2RvJyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLWNoZWNrZWQtbGluZScsXG4gIGV4Y2x1ZGU6ICdBTExfQlVUX01ZU0VMRicsXG4gIG1vdW50ZWQgKGVkaXRvcikge1xuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5pdGlUb2RvJylcbiAgfSxcbiAgaGFuZGxlciAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2l0b2RvJywge1xuICAgICAgaW5zZXJ0QWZ0ZXI6IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXI6ICflvoXlip7kuovpobknXG4gICAgfSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItdG9kbyc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaWNvdXJ0LXRvZG8vaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG91dGRlbnQ6IHtcbiAgICBrZXlDb2RlOiA5LFxuICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ291dGRlbnQnKVxuICAgIH1cbiAgfSxcbiAgaW5kZW50OiB7XG4gICAga2V5Q29kZTogOSxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbmRlbnQnKVxuICAgIH1cbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAga2V5Q29kZTogOCxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnZGVsZXRlJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH0sXG4gIGVudGVyOiB7XG4gICAga2V5Q29kZTogMTMsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2VudGVyJywgZSwgdHJ1ZSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaG9ydGN1dC9pbmRleC5qcyIsImltcG9ydCBSSCBmcm9tICcuLi9yYW5nZS1oYW5kbGVyJ1xuaW1wb3J0ICcuL3N0eWxlL21haW4uc3R5bCdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2VkaXRvci5odG1sJ1xuaW1wb3J0IGRyYWdQaWMgZnJvbSAnLi9kcmFnLXBpYydcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi4vbW9kdWxlLWluc3BlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGUsXG4gIHByb3BzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDAsXG4gICAgICB2YWxpZGF0b3IodmFsKXtcbiAgICAgICAgcmV0dXJuIHZhbCA+PSAxMDBcbiAgICAgIH1cbiAgICB9LFxuICAgIHpJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG4gICAgYXV0b0hlaWdodDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBkcmFnUGljXG4gIH0sXG4gIGRhdGEoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlczoge30sXG4gICAgICBhY3RpdmVNb2R1bGVzOiBbXSxcbiAgICAgIGFsbEFjdGl2ZU1vZHVsZXM6IFtdLFxuICAgICAgZnVsbFNjcmVlbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29udGVudCh2YWwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MXG4gICAgICBpZiAodmFsICE9PSBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5pbm5lckhUTUwgPSB2YWxcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bGxTY3JlZW4odmFsKXtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXNcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29tcG9uZW50LnBhcmVudEVsID0gY29tcG9uZW50LiRlbC5wYXJlbnROb2RlXG4gICAgICAgIGNvbXBvbmVudC5uZXh0RWwgPSBjb21wb25lbnQuJGVsLm5leHRTaWJsaW5nXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50LiRlbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoY29tcG9uZW50Lm5leHRFbCkge1xuICAgICAgICBjb21wb25lbnQucGFyZW50RWwuaW5zZXJ0QmVmb3JlKGNvbXBvbmVudC4kZWwsIGNvbXBvbmVudC5uZXh0RWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29tcG9uZW50LnBhcmVudEVsLmFwcGVuZENoaWxkKGNvbXBvbmVudC4kZWwpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbnRlbnRTdHlsZSgpe1xuICAgICAgY29uc3Qgc3R5bGUgPSB7fVxuICAgICAgaWYgKHRoaXMuZnVsbFNjcmVlbikge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLiRyZWZzLnRvb2xiYXIuY2xpZW50SGVpZ2h0IC0gMX1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICB9XG4gICAgICBzdHlsZVsnbWluLWhlaWdodCddID0gYCR7dGhpcy5oZWlnaHR9cHhgXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRDdXJBY3RpdmVNb2R1bGVJdGVtICgpIHtcbiAgICAgIHJldHVybiBJbnNwZWN0b3IuYWN0aXZlSXRlbXNcbiAgICB9LFxuICAgIGNsZWFyQWN0aXZlTW9kdWxlSXRlbSAoKSB7XG4gICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXMgPSB7fVxuICAgIH0sXG4gICAgaGFuZGxlRHJhZ1BpYyAoZmlsZSkge1xuICAgICAgaWYgKCh0aGlzLm1vZHVsZXNNYXBbJ2ltYWdlJ10gJiYgdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddLmRyYWcgIT09IGZhbHNlKSB8fCAhdGhpcy5tb2R1bGVzTWFwWydpbWFnZSddKSB7XG4gICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgIHRoaXMuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmlsZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9ICF0aGlzLmZ1bGxTY3JlZW5cbiAgICB9LFxuICAgIGVuYWJsZUZ1bGxTY3JlZW4oKXtcbiAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IHRydWVcbiAgICB9LFxuICAgIGV4aXRGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBmYWxzZVxuICAgIH0sXG4gICAgZm9jdXMoKXtcbiAgICAgIHRoaXMuJHJlZnMuY29udGVudC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyKCl7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuYmx1cigpXG4gICAgfSxcbiAgICBleGVjQ29tbWFuZChjb21tYW5kLCBhcmcsIGV4ZWNPbmx5KXtcbiAgICAgIGlmICghZXhlY09ubHkpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlU2VsZWN0aW9uKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKS5leGVjQ29tbWFuZChjb21tYW5kLCBhcmcpXG4gICAgICB9XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgIH0sXG4gICAgc2F2ZUN1cnJlbnRSYW5nZSgpe1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcbiAgICAgICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXJcbiAgICAgICAgbGV0IGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lclxuICAgICAgICAvLyBmb3IgSUUxMSA6IG5vZGUuY29udGFpbnModGV4dE5vZGUpIGFsd2F5cyByZXR1cm4gZmFsc2VcbiAgICAgICAgc3RhcnQgPSBzdGFydC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBzdGFydC5wYXJlbnROb2RlIDogc3RhcnRcbiAgICAgICAgZW5kID0gZW5kLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IGVuZC5wYXJlbnROb2RlIDogZW5kXG4gICAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKHN0YXJ0KSAmJiBjb250ZW50LmNvbnRhaW5zKGVuZCkpIHtcbiAgICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZXN0b3JlU2VsZWN0aW9uKCl7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHRoaXMucmFuZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgICAgIGNvbnN0IHJvdyA9IFJILnByb3RvdHlwZS5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICByYW5nZS5zZXRTdGFydChyb3csIDApXG4gICAgICAgIHJhbmdlLnNldEVuZChyb3csIDApXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmVNb2R1bGUobW9kdWxlKXtcbiAgICAgIGlmIChtb2R1bGUuZm9yYmlkZGVuKSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLmhhbmRsZXIobmV3IFJIKHRoaXMucmFuZ2UsIHRoaXMpLCBtb2R1bGUpXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICAgIHRoaXMubW9kdWxlSW5zcGVjdCgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kdWxlSW5zcGVjdCAoKSB7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlTW9kdWxlSXRlbSgpXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IFtdXG4gICAgICAgIGxldCByaCA9IG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKVxuICAgICAgICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICAgIHRleHRzLnB1c2godGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0cyBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICBsZXQgdGV4dEFmdGV0RFIgPSBbXVxuICAgICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiB0ZXh0LnBhcmVudE5vZGUgIT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnBhcmVudE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0ZXh0QWZ0ZXREUi5pbmNsdWRlcyh0ZXh0KSkge1xuICAgICAgICAgICAgdGV4dEFmdGV0RFIucHVzaCh0ZXh0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdGFnUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bigndGFnJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCB0YWdSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHRhZ1Jlc3VsdClcblxuICAgICAgICBsZXQgc3R5bGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdzdHlsZScsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgc3R5bGVSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKHN0eWxlUmVzdWx0KVxuXG4gICAgICAgIGxldCBhdHRyaWJ1dGVSZXN1bHQgPSBJbnNwZWN0b3IucnVuKCdhdHRyaWJ1dGUnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVJlc3VsdFJEID0gSW5zcGVjdG9yLnJlbW92ZUR1cGxhdGUoYXR0cmlidXRlUmVzdWx0KVxuXG4gICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcyA9IHRhZ1Jlc3VsdC5jb25jYXQoc3R5bGVSZXN1bHQsIGF0dHJpYnV0ZVJlc3VsdClcbiAgICAgICAgdGhpcy5hY3RpdmVNb2R1bGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRhZ1Jlc3VsdFJELmNvbmNhdChzdHlsZVJlc3VsdFJELCBhdHRyaWJ1dGVSZXN1bHRSRCkpKVxuXG4gICAgICAgIC8vIHJlc2V0XG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgbW9kdWxlLmZvcmJpZGRlbiA9IGZhbHNlXG4gICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGhhbmRsZSBmb3JiaWRkZW4gbG9naWNcbiAgICAgICAgaWYgKHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgZXhjbHVkZUxpc3QgPSBbXVxuICAgICAgICAgIHRoaXMuYWxsQWN0aXZlTW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobSkpIHtcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKG1vZHVsZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjdXJNb2R1bGUgPSB0aGlzLm1vZHVsZXNNYXBbbW9kdWxlTmFtZV1cbiAgICAgICAgICAgICAgICBleGNsdWRlTGlzdCA9IGV4Y2x1ZGVMaXN0LmNvbmNhdChjdXJNb2R1bGUuZXhjbHVkZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGV4Y2x1ZGVMaXN0ID0gQXJyYXkuZnJvbShuZXcgU2V0KGV4Y2x1ZGVMaXN0KSlcbiAgICAgICAgICBleGNsdWRlTGlzdC5mb3JFYWNoKGV4YyA9PiB7XG4gICAgICAgICAgICBsZXQgZXhjTW9kdWxlID0gdGhpcy5tb2R1bGVzTWFwW2V4Y11cbiAgICAgICAgICAgIGlmIChleGNNb2R1bGUgJiYgZXhjTW9kdWxlLnR5cGUgIT09ICdmbicpIHtcbiAgICAgICAgICAgICAgZXhjTW9kdWxlLmZvcmJpZGRlbiA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGhpZ2hsaWdodCBsb2dpY1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgbW9kdWxlTmFtZSA9IG1vZHVsZS5uYW1lXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2R1bGVzLmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gdHJ1ZVxuICAgICAgICAgICAgICBsZXQgY3VyTW9kdWxlQWN0aXZlSXRlbSA9IHRoaXMuZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSgpW21vZHVsZU5hbWVdXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyTW9kdWxlQWN0aXZlSXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IGN1ck1vZHVsZUFjdGl2ZUl0ZW0gfHwgJ0FMTCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKXtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5pbml0KHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICBjb25zdCB0b29sYmFyID0gdGhpcy4kcmVmcy50b29sYmFyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnRcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIC8vIHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zYXZlQ3VycmVudFJhbmdlLCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjb250ZW50LmlubmVySFRNTClcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGUgPT4ge1xuICAgICAgdGhpcy5leGVjQ29tbWFuZCgncGFzdGUnLCBlLCB0cnVlKVxuICAgICAgbGV0IGNvbW1vbiA9IHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGlmIChjb21tb24pIHtcbiAgICAgICAgaWYgKGNvbW1vbi5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb21tb24gPSBjb21tb24ucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICAgICAgICBjb21tb24uc2Nyb2xsSW50b1ZpZXcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudG91Y2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlciwgZmFsc2UpXG5cbiAgICAvLyBiZWZvcmUgZXhlYyBjb21tYW5kXG4gICAgLy8gbGV0IHRleHQgYmUgYSByb3dcbiAgICBSSC5wcm90b3R5cGUuYmVmb3JlKChjb21tYW5kLCAgcmgsIGFyZykgPT4ge1xuICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBpZiAoIXJoLmlzRW1wdHlOb2RlKHRleHQpKSB7XG4gICAgICAgICAgcmgudGV4dFRvUm93KHRleHQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAodGV4dHMubGVuZ3RoKSB7XG4gICAgICAgIHJoLmVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaGFuZGxlIHNob3J0Y3V0XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICB0aGlzLmV4ZWNDb21tYW5kKCdrZXlkb3duJywgZSwgdHJ1ZSlcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zaG9ydGN1dFtlLmtleUNvZGVdXG4gICAgICBpZiAoaXRlbSAmJiBpdGVtLmxlbmd0aCkge1xuICAgICAgICBpdGVtLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gcy5rZXlDb2RlICYmIGUuYWx0S2V5ID09PSAhIXMuYWx0S2V5ICYmIGUuY3RybEtleSA9PT0gISFzLmN0cmxLZXkgJiYgZS5tZXRhS2V5ID09PSAhIXMubWV0YUtleSAmJiBlLnNoaWZ0S2V5ID09PSAhIXMuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgICAgICAgIHMuaGFuZGxlcih0aGlzLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCBmYWxzZSlcblxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUubW91bnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1vZHVsZS5tb3VudGVkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZCgpe1xuICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLnVwZGF0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLnVwZGF0ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaEhhbmRsZXIpXG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuZGVzdHJveWVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5kZXN0cm95ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yL2VkaXRvci5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuLi9jb21tYW5kcydcblxuLy8gZm9yIElFIDExXG5pZiAoIVRleHQucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gIFRleHQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMob3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IG90aGVyTm9kZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSGFuZGxlciB7XG4gIC8qKlxuICAgKiBidWlsZCByYW5nZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7UmFuZ2V9IHJhbmdlXG4gICAqIEBwYXJhbSB7ZWRpdG9yfSBjdXJyZW50IGVkaXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IocmFuZ2UsIGVkaXRvcikge1xuICAgIGlmICghcmFuZ2UgfHwgIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FudFxcJ3QgcmVzb2x2ZSByYW5nZScpXG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogZXhlY3V0ZSBlZGl0IGNvbW1hbmRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAgICogQHBhcmFtIGFyZ1xuICAgKi9cbiAgZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbi5jYWxsKHRoaXMsIGNvbW1hbmQsIHRoaXMsIGFyZylcbiAgICB9KVxuICAgIGNvbnN0IGV4aXN0Q29tbWFuZCA9IGNvbW1hbmRzW2NvbW1hbmRdXG4gICAgY29uc3QgY3VzdG9tQ29tbWFuZCA9IHRoaXMuZWRpdG9yLmNvbW1hbmRzID8gdGhpcy5lZGl0b3IuY29tbWFuZHNbY29tbWFuZF0gOiBudWxsXG4gICAgaWYgKGV4aXN0Q29tbWFuZCkge1xuICAgICAgZXhpc3RDb21tYW5kKHRoaXMsIGFyZylcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VzdG9tQ29tbWFuZCkge1xuICAgICAgIGN1c3RvbUNvbW1hbmQodGhpcywgYXJnKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLCBmYWxzZSwgYXJnKVxuICAgIH1cbiAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4uY2FsbCh0aGlzLCBjb21tYW5kLCB0aGlzLCBhcmcpXG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBiZWZvcmUgZXhlYyBjb21tYW5kICBcbiAgICoqL1xuICBiZWZvcmUgKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckJlZm9yZUxpc3QgKCkge1xuICAgIFJhbmdlSGFuZGxlci5iZWZvcmVMaXN0ID0gW11cbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBhZnRlciBleGVjIGNvbW1hbmQgIFxuICAgKiovXG4gIGFmdGVyIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckFmdGVyTGlzdCAoKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG4gIH1cbn1cblxuUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QgPSBbXVxuUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9pbnN0YW5jZS5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuXG5jb25zdCBpbnNlcnRJbWFnZSA9IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIC8vIGZvcmJpZGRlbiBsb2dpY1xuICBsZXQgZm9yYmlkZGVuID0gZmFsc2VcbiAgbGV0IGFjdGl2ZXMgPSByaC5lZGl0b3IuYWN0aXZlTW9kdWxlc1xuICBhY3RpdmVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgbGV0IG1vZHVsZSA9IHJoLmVkaXRvci5tb2R1bGVzTWFwW25hbWVdXG4gICAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhjbHVkZSAmJiBtb2R1bGUuZXhjbHVkZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgICAgZm9yYmlkZGVuID0gdHJ1ZVxuICAgIH1cbiAgfSlcbiAgaWYgKGZvcmJpZGRlbikgcmV0dXJuXG5cbiAgbGV0IHJldHVybkRhdGEgPSB7XG4gICAgb3JpZ2luOiBhcmdcbiAgfVxuICBsZXQgZWRpdG9yID0gcmguZWRpdG9yXG4gIGxldCBjb25maWcgPSBlZGl0b3IubW9kdWxlc01hcFsnaW1hZ2UnXVxuICBpZiAoIWNvbmZpZykge1xuICAgIHRocm93IG5ldyBFcnJvcignaW1hZ2UgY29uZmlnIGxvYWQgZmFpbCcpXG4gIH1cbiAgaWYgKGFyZyBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICBoYW5kbGVGaWxlKGFyZylcbiAgfVxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCBmYWxzZSwgYXJnKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShmaWxlKSB7XG4gICAgaWYgKGNvbmZpZy5jb21wcmVzcykge1xuICAgICAgY29uZmlnLmNvbXByZXNzLmZpZWxkTmFtZSA9IGNvbmZpZy5maWVsZE5hbWUgfHwgJ2ltYWdlJ1xuICAgICAgbHJ6KGZpbGUsIGNvbmZpZy5jb21wcmVzcykudGhlbihyc3QgPT4ge1xuICAgICAgICBpZiAocnN0LmZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgYWZ0ZXIgY29tcHJlc3MnLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICAgIH0sIHJzdClcbiAgICAgICAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgcmV0dXJuRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHJzdClcbiAgICAgICAgICBsZXQgaW1nSWQgPSByaC5jcmVhdGVSYW5kb21JZCgnaW1nJylcbiAgICAgICAgICBpbnNlcnRCYXNlNjQocmV0dXJuRGF0YS5iYXNlNjQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6IGVycixcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyXG4gICAgICAgIH0pXG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCByZXR1cm5EYXRhKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgd2l0aG91dCBjb21wcmVzcycsXG4gICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChjb25maWcuZmllbGROYW1lLCBmaWxlLCBmaWxlLm5hbWUpXG4gICAgICAgIHJldHVybkRhdGEuZm9ybURhdGEgPSBmb3JtRGF0YVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgIGxldCBpbWdJZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdpbWcnKVxuICAgICAgICAgIGluc2VydEJhc2U2NChlLnRhcmdldC5yZXN1bHQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0QmFzZTY0IChiYXNlNjQsIGlkKSB7XG4gICAgaWYgKGNvbmZpZy5pbWdPY2N1cHlOZXdSb3cpIHtcbiAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGxldCBjdXJSb3cgPSByaC5mb3JjZUdldFJvdyhub2RlKVxuICAgICAgaWYgKGN1clJvdykge1xuICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIHJoLmluc2VydEFmdGVyKG5ld1JvdywgY3VyUm93KVxuICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICB9XG4gICAgfVxuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGA8aW1nIHNyYz1cIiR7YmFzZTY0fVwiIGRhdGEtZWRpdG9yLWltZz1cIiR7aWR9XCI+YCwgdHJ1ZSlcbiAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgJyYjODIwMzsnLCB0cnVlKVxuICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgIHN0YXR1czogJ2V2ZXJ5dGhpbmcgZmluZScsXG4gICAgICBzdGF0dXNDb2RlOiAyLFxuICAgICAgYmFzZTY0LFxuICAgICAgcmVwbGFjZVNyY0FmdGVyVXBsb2FkRmluaXNoOiByZXBsYWNlSW1nKGlkKSxcbiAgICAgIGRlbGV0ZUltZ1doZW5VcGxvYWRGYWlsOiBkZWxldGVJbWcoaWQpXG4gICAgfSkpXG4gIH1cblxuICAvLyByZXBsYWNlIGltYWdlJ3MgYmFzZTY0IHNyYyB0byB1cmwgYWZ0ZXIgdXBsb2FkIGZpbmlzaFxuICBmdW5jdGlvbiByZXBsYWNlSW1nIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtZWRpdG9yLWltZz0nJHtpZH0nXWApXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItaW1nJylcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCBlZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlIGltYWdlIGFmdGVyIHVwbG9hZCBmYWlsXG4gIGZ1bmN0aW9uIGRlbGV0ZUltZyAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWVkaXRvci1pbWc9JyR7aWR9J11gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gICAgICAgIGVkaXRvci4kZW1pdCgnY2hhbmdlJywgZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgcyA9cmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgc3BhbiBlbGVtZW50IHRvIGtlZXAgbGluZS1oZWlnaHQgcnVuIGNvcnJlY3RcbiAgICAgIGlmIChyaC5pc0VtcHR5Tm9kZShub2RlKSAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTUEFOJykge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCAnJiM4MjAzOycpXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHMuZm9jdXNOb2RlLCBzLmFuY2hvck9mZnNldCAtIDEpXG4gICAgICByYW5nZS5zZXRFbmQocy5mb2N1c05vZGUsIHMuZm9jdXNPZmZzZXQpXG4gICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIGFyZylcbiAgICAgIHMuY29sbGFwc2Uocy5mb2N1c05vZGUsIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBhcmcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRleHQgPSBudWxsXG5cbiAgaWYod2luZG93LmNsaXBib2FyZERhdGEgJiYgY2xpcGJvYXJkRGF0YS5zZXREYXRhKSB7XG4gICAgLy8gSUVcbiAgICB0ZXh0ID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpXG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykgXG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgdGV4dFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMClcblxuICAgICAgLy8g5Yib5bu65Li05pe25YWD57Sg77yM5L2/5b6XVGV4dFJhbmdl5Y+v5Lul56e75Yqo5Yiw5q2j56Gu55qE5L2N572uXG4gICAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIHRlbXBFbC5pbm5lckhUTUwgPSBcIiYjRkVGRjtcIlxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZSh0ZW1wRWwpXG4gICAgICB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpXG4gICAgICB0ZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGVtcEVsKVxuICAgICAgdGVtcEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcEVsKVxuICAgIH1cbiAgICB0ZXh0UmFuZ2UudGV4dCA9IHRleHRcbiAgICB0ZXh0UmFuZ2UuY29sbGFwc2UoZmFsc2UpXG4gICAgdGV4dFJhbmdlLnNlbGVjdCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQ2hyb21l5LmL57G75rWP6KeI5ZmoXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG5cbiAgICAvLyByZXdyaXRlIGxpIGVudGVyIGxvZ2ljXG4gICAgaWYgKHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2xpJykgJiYgcmguaXNFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IHVsT3JPbCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3VsJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnb2wnKVxuICAgICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0VW5vcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgICAgfVxuICAgICAgaWYgKHVsT3JPbC5ub2RlTmFtZSA9PT0gJ09MJykge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0T3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9lbnRlci5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICBsZXQgbm9kZUN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IHVuZGVybGluZSB0YWdcbiAgICBsZXQgdW5kZXJsaW5lID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAndScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uTGluZSc6ICd1bmRlcmxpbmUnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdJJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghdW5kZXJsaW5lKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ1UnKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCB1bmRlcmxpbmUpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvdW5kZXJsaW5lLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICBsZXQgbm9kZUN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IHN0cmlrZVRocm91Z2ggdGFnXG4gICAgbGV0IHN0cmlrZVRocm91Z2ggPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdTVFJJS0UnLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbkxpbmUnOiAnbGluZS10aHJvdWdoJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydVJywgJ0knLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCFzdHJpa2VUaHJvdWdoKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ1NUUklLRScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIHN0cmlrZVRocm91Z2gpXG4gICAgICBzLmNvbGxhcHNlKG5ld1RleHQsIDEpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvc3RyaWtlVGhyb3VnaC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgaXRhbGljIHRhZ1xuICAgIGxldCBpdGFsaWMgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdpJywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAnZm9udFN0eWxlJzogJ2l0YWxpYydcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnU1RSSUtFJywgJ1UnLCAnQicsICdTVFJPTkcnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgLy8gaXMgaW4gYSBpdGFsaWNcbiAgICBpZiAoIWl0YWxpYykge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdJJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgaXRhbGljKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvaXRhbGljLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgaWYgKCFzLmlzQ29sbGFwc2VkKSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnYm9sZCcsIGZhbHNlLCBhcmcpXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGUgPSBzLmZvY3VzTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIHRoZSBvdXRlcm1vc3QgYm9sZCB0YWdcbiAgICBsZXQgYm9sZCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3N0cm9uZycpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2InKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICdmb250V2VpZ2h0JzogJ2JvbGQnXG4gICAgICB9KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdJJywgJ1UnXSwgcm93KVxuICAgIGxldCBmb250U2l6ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JTdHlsZShub2RlLCAnZm9udFNpemUnLCB0cnVlLCByb3cpXG4gICAgaWYgKCFib2xkKSB7XG4gICAgICBleGlzdFN0eWxlLnB1c2goJ0InKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBib2xkKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2JvbGQuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuY29uc3QgcSA9IHtcbiAgLy8gb25seSBzZXQgY29udGVudGVkaXRhYmxlOmZhbHNlIGluIHBhcmVudCBub2RlIGNhbiBjaGlsZCBub2RlIHRyaWdnZXIga2V5ZG93biBsaXN0ZW5lclxuICAncXVvdGUnIChyaCwgaXNJblF1b3RlKSB7XG4gICAgbGV0IG5vZGUgPSByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgIGlmIChpc0luUXVvdGUpIHtcbiAgICAgIG5vZGUgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSA/IG5vZGUucGFyZW50Tm9kZSA6IG5vZGVcbiAgICAgIGxldCBxdW90ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ1tkYXRhLWVkaXRvci1xdW90ZV0nKVxuICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgIGxldCB0ZXh0cyA9IHJoLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMocXVvdGUpXG4gICAgICAgIGxldCBxdW90ZVJvd3MgPSBbXVxuICAgICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20ocXVvdGUucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrJykuY2hpbGRyZW4pXG4gICAgICAgIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgICAgICAgLy8gZmluZCByb3cgaW4gY3VycmVudCBxdW90ZSByb3dcbiAgICAgICAgICAvLyBsZXQgcm93ID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCBjb25zdGFudC5ST1dfVEFHLCBmYWxzZSwgcXVvdGUpXG4gICAgICAgICAgbGV0IHJvd1xuICAgICAgICAgIHJvd3MuZm9yRWFjaChjdXJSb3cgPT4ge1xuICAgICAgICAgICAgaWYgKGN1clJvdy5jb250YWlucyh0ZXh0KSkge1xuICAgICAgICAgICAgICByb3cgPSBjdXJSb3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghcXVvdGVSb3dzLmluY2x1ZGVzKHJvdykpIHtcbiAgICAgICAgICAgIHF1b3RlUm93cy5wdXNoKHJvdylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHF1b3RlUm93cy5mb3JFYWNoKChxciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHFyLCBxdW90ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmguaW5zZXJ0QWZ0ZXIocXIsIHF1b3RlUm93c1tpbmRleCAtIDFdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgICBpZiAocXVvdGVSb3dzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHF1b3RlUm93c1swXSwgMClcbiAgICAgICAgICByYW5nZS5zZXRFbmQocXVvdGVSb3dzW3F1b3RlUm93cy5sZW5ndGggLSAxXSwgMSlcbiAgICAgICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgcy5hZGRSYW5nZShyYW5nZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdCdzIGEgZW1wdHkgcXVvdGVcbiAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICBzLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gICAgLy8gaXMgYXQgYSBlbXB0eSByb3cgd2l0aG91dCByb3cgZWxlbWVudCwgdGhlbiBjcmVhdGUgYSByb3dcbiAgICAvLyBvciB0ZXh0cyBoYXMgbm8gY29tbW9uIHBhcmVudCByb3dcbiAgICBpZiAoIWN1clJvdyAmJiAhdGV4dHMubGVuZ3RoKSB7XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICB2LmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIG5ld1Jvdy5vdXRlckhUTUwpXG4gICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICB0ZXh0cy5wdXNoKHMuZm9jdXNOb2RlKVxuICAgIH1cbiAgICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgICAgdGV4dHMucHVzaChjdXJSb3cpXG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IHJoLm5ld1JvdygpXG4gICAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgbGV0IHF1b3RlQmxvY2sgPSByaC5uZXdSb3coe3RhZzogJ2Rpdid9KVxuICAgIHF1b3RlQmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci1xdW90ZS1ibG9jaycsIHJoLmNyZWF0ZVJhbmRvbUlkKCdxdW90ZWJsb2NrJykpXG4gICAgcXVvdGUuYXBwZW5kQ2hpbGQocXVvdGVCbG9jaylcbiAgICBsZXQgaWQgPSByaC5jcmVhdGVSYW5kb21JZCgncXVvdGUnKVxuICAgIHF1b3RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnLCBpZClcbiAgICBxdW90ZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgbGV0IHF1b3RlUm93cyA9IFtdXG4gICAgdGV4dHMuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcblxuICAgICAgLy8gY3JlYXRlIGEgcm93IGZvciB0ZXh0IHdpdGhvdXQgcm93XG4gICAgICBpZiAoIWN1clJvdyAmJiB0ZXh0Lm5vZGVWYWx1ZSkge1xuICAgICAgICBjdXJSb3cgPSByaC5uZXdSb3coKVxuICAgICAgICBjdXJSb3cuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgIH1cbiAgICAgIGlmIChjdXJSb3cgJiYgIXF1b3RlUm93cy5pbmNsdWRlcyhjdXJSb3cpKSB7XG4gICAgICAgIHF1b3RlUm93cy5wdXNoKGN1clJvdylcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBhbmNob3JSb3dcbiAgICBxdW90ZVJvd3MuZm9yRWFjaCgocXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IHF1b3RlUm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHF1b3RlQmxvY2suYXBwZW5kQ2hpbGQocXIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcXVvdGVCbG9jay5hcHBlbmRDaGlsZChxci5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICBhbmNob3JSb3cgPSBxclxuICAgIH0pXG5cbiAgICBpZiAoYW5jaG9yUm93LnBhcmVudE5vZGUpIHtcbiAgICAgIGFuY2hvclJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChxdW90ZSwgYW5jaG9yUm93KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjdXJyZW50IHJvdyBpcyBjcmVhdGVkIGFuZCBoYXMgbm8gcGFyZW50XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICB2LmFwcGVuZENoaWxkKHF1b3RlKVxuICAgICAgcmgucmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgdi5pbm5lckhUTUwpXG4gICAgfVxuICAgIGNvbnN0IGN1clF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZWRpdG9yLXF1b3RlPScke2lkfSddYClcbiAgICBpZiAoIWN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQpIHJldHVyblxuICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQsIGN1clF1b3RlLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID8gMSA6IDApXG4gIH0sXG4gICdpbml0UXVvdGUnIChyaCwgYXJnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgbGV0IHF1b3RlID0gcmguZmluZFNwZWNpYWxBbmNlc3RvcihlLnRhcmdldCwgJ1tkYXRhLWVkaXRvci1xdW90ZV0nKVxuICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgbGV0IG5vZGUgPSBzLmFuY2hvck5vZGVcbiAgICAgICAgbGV0IGN0biA9IG5vZGUuaW5uZXJUZXh0IHx8IG5vZGUubm9kZVZhbHVlXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgaWYgKGN0bi5yZXBsYWNlKCdcXG4nLCAnJykgPT09ICcnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgIHJoLmluc2VydEFmdGVyKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuXG4gICAgICAgICAgLy8gY3Vyc29yIG1heSBhdCByb3cgb3IgYXQgcXVvdGUgYmxvY2sgLCBzbyB0aGVyZSBhcmUgdHdvIGp1ZGdlbWVudCBjb25kaXRpb25zXG4gICAgICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgKHMuZm9jdXNPZmZzZXQgPT09IDAgfHwgKG5vZGUuY29udGFpbnMocy5iYXNlTm9kZSkgJiYgKHJoLmlzRW1wdHlOb2RlKHMuYmFzZU5vZGUpKSAmJiBzLmZvY3VzT2Zmc2V0ID09PSAxKSkpIHtcbiAgICAgICAgICAgIGxldCByb3dzID0gQXJyYXkuZnJvbShxdW90ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2tdJykuY2hpbGRyZW4pXG5cbiAgICAgICAgICAgIC8vIGVtcHR5IHF1b3RlXG4gICAgICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgIC8vIHJvdyBhbmQgbm9kZSBoYXMgZmF0aGVyLWNoaWxkIHJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICBpZiAoKHJvdyA9PT0gbm9kZSB8fCByb3cuY29udGFpbnMobm9kZSkgfHwgbm9kZS5jb250YWlucyhyb3cpKSAmJiBpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgLy8gb25seSBoYXZlIG9uZSBlbXB0eSByb3cgaW4gcXVvdGUsdGhlbiBkZWxldGUgdGhlIHF1b3RlXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAxICYmIHJoLmlzRW1wdHlOb2RlKHJvdykpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgcXVvdGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBxdW90ZSlcbiAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IHJvdyBoYXZlIGNvbnRlbnQgYW5kIHByZXZpb3VzIGVsZW1lbnQgZXhpc3QsIHRoZW4gbW92ZSBjdXJzb3IgdG8gcHJldmlvdXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgbGV0IHByZVJvdyA9IHJoLmdldFByZXZpb3VzUm93KHF1b3RlKVxuICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSBxdW90ZVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlUm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RWxlID0gQXJyYXkuZnJvbShwcmVSb3cucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrXScpLmNoaWxkcmVuKS5wb3AoKVxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShsYXN0RWxlLCAxKVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKGxhc3RFbGUsIDApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgdG9kb1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlUm93LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gcHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwidGV4dFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91cyByb3cgaXMgYSByb3dcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShwcmVSb3csIDEpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShwcmVSb3csIDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3F1b3RlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCB0ID0ge1xuICAndG9kbycgKHJoLCBkYXRhKSB7XG4gICAgbGV0IHJvdyA9IHJoLm5ld1Jvdyh7XG4gICAgICBicjogdHJ1ZVxuICAgIH0pXG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyhyaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICBcbiAgICAvLyBhIGVtcHR5IHJvdyB3aXRob3V0IHJvdyBlbGVtZW50LCBjcmVhdGUgYSByb3cgZWxlbWVudFxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICB2LmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIG5ld1Jvdy5vdXRlckhUTUwpXG4gICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICBjdXJSb3cgPSBzLmZvY3VzTm9kZVxuICAgIH1cblxuICAgIC8vIGluc2VydCB0b2RvIGFmdGVyIHRoaXMgcm93XG4gICAgbGV0IGFmdGVyV2hpY2ggPSByaC5nZXRSb3coZGF0YS5pbnNlcnRBZnRlcilcblxuICAgIC8vIGlzIGFmdGVyV2hpY2ggaXMgYSBlbXB0eSByb3csIGp1c3QgaW5zZXJ0IHRvZG8gYXQgY3VycmVudCByb3dcbiAgICBpZiAoYWZ0ZXJXaGljaCAmJiByaC5pc0VtcHR5Um93KGFmdGVyV2hpY2gpKSB7XG4gICAgICBhZnRlcldoaWNoID0gbnVsbFxuICAgIH1cbiAgICBpZiAoYWZ0ZXJXaGljaCkge1xuICAgICAgbGV0IHRhcmdldEluZGV4XG4gICAgICBsZXQgc3RhcnRJbmRleFxuICAgICAgbGV0IGxpc3QgPSBhZnRlcldoaWNoLnBhcmVudE5vZGUuY2hpbGROb2Rlc1xuICAgICAgbGlzdC5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkID09PSBhZnRlcldoaWNoKSB7XG4gICAgICAgICAgc3RhcnRJbmRleCA9IGluZGV4XG4gICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBsaXN0Lmxlbmd0aFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRhcmdldEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci10b2RvJykpIHtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0YXJnZXRJbmRleCA9IHRhcmdldEluZGV4ID09PSB1bmRlZmluZWQgPyBzdGFydEluZGV4ICsgMSA6IHRhcmdldEluZGV4XG4gICAgICBhZnRlcldoaWNoLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJvdywgbGlzdFt0YXJnZXRJbmRleF0pXG4gICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDApXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gaW5zZXJ0IHRvZG8gYXQgY3VycmVudCByb3cgaWYgaXQgaXMgZW1wdHlcbiAgICAgIGlmIChyaC5pc0VtcHR5Um93KGN1clJvdykpIHtcbiAgICAgICAgcmguY29sbGFwc2VBdFJvdyhjdXJSb3cpXG4gICAgICAgIHJvdyA9IGN1clJvd1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQocm93LCAwKVxuICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShyb3csIDApXG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0b2RvSWQgPSByaC5jcmVhdGVSYW5kb21JZCgndG9kbycpXG4gICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgYDwke2NvbnN0YW50LlJPV19UQUd9IGRhdGEtZWRpdG9yLXRvZG89JHt0b2RvSWR9IGNvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiR7ZGF0YS5wbGFjZWhvbGRlcn1cIj48LyR7Y29uc3RhbnQuUk9XX1RBR30+PGJyPmApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZWRpdG9yLXRvZG89JyR7dG9kb0lkfSddIGlucHV0W3R5cGU9dGV4dF1gKS5mb2N1cygpXG4gICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KVxuICAgIHRbJ2luaXRUb2RvJ10ocmgsIGRhdGEpXG4gIH0sXG4gIC8vIGluaXQgdG9kbyBsb2dpY1xuICAnaW5pdFRvZG8nIChyaCwgZGF0YSkge1xuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVkaXRvci10b2RvXScpXG4gICAgY2hlY2tib3hzLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBjLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPWNoZWNrYm94XScpXG4gICAgICBjb25zdCBjdG4gPSBjLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPXRleHRdJylcbiAgICAgIGlmIChjLmluaXQpIHJldHVyblxuICAgICAgY3RuQ2hlY2tlZExvZ2ljKClcblxuICAgICAgZnVuY3Rpb24gY3RuQ2hlY2tlZExvZ2ljKCkge1xuICAgICAgICBjdG4udmFsdWUgPSBjdG4udmFsdWUgfHwgY3RuLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnKVxuICAgICAgICBjdG4uc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRvci12YWx1ZScsIGN0bi52YWx1ZSlcbiAgICAgICAgaWYgKGJ0bi5jaGVja2VkKSB7XG4gICAgICAgICAgY3RuLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3RuLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG4gICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBidG4ub25jaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY3RuQ2hlY2tlZExvZ2ljKClcbiAgICAgICAgaWYgKHJoLmVkaXRvciAmJiByaC5lZGl0b3IuJHJlZnMgJiYgcmguZWRpdG9yLiRyZWZzLmNvbnRlbnQpIHtcbiAgICAgICAgICByaC5lZGl0b3IuJGVtaXQoJ2NoYW5nZScsIHJoLmVkaXRvci4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3RuLm9uaW5wdXQgPSBlID0+IHtcbiAgICAgICAgY3RuLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGN0bi5vbmtleWRvd24gPSBjdG4ub25rZXlkb3duIHx8IChlID0+IHtcbiAgICAgICAgICBpZiAoIVsxMywgOF0uaW5jbHVkZXMoZS5rZXlDb2RlKSkgcmV0dXJuXG4gICAgICAgICAgbGV0IHJvdyA9IGMubmV4dFNpYmxpbmdcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaWYgKGN0bi52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGVUb2RvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRbJ3RvZG8nXShyaCwge1xuICAgICAgICAgICAgICBpbnNlcnRBZnRlcjogYyxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGRhdGEucGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChjdG4udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIGRlbGV0ZVRvZG8oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICBjLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgYylcbiAgICAgICAgICAgIHJoLmdldFNlbGVjdGlvbigpLmNvbGxhcHNlKG5ld1JvdywgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBjLmluaXQgPSB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvdG9kby5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cbiAgICAvLyB0byBrZWVwIHRleHQgd3JhcCBieSBhIHJvd1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgIGNvbW1hbmRzLmZvcm1hdEJsb2NrKHJoLCBjb25zdGFudC5ST1dfVEFHKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMva2V5ZG93bi5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIC8vIHJlc3RvcmUgZmlyc3Qgcm93XG4gIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgbGV0IG5vZGUgPSBzLmJhc2VOb2RlXG4gIGxldCB2YWx1ZSA9IG5vZGUubm9kZVZhbHVlIHx8IG5vZGUuaW5uZXJUZXh0XG4gIC8vIGNvbnNvbGUubG9nKCdkZWxldGUnLCBub2RlLCBlKVxuICBsZXQgY3VyUmFuZ2UgPSByaC5nZXRSYW5nZSgpIHx8IHJoLnJhbmdlXG5cbiAgLy8gY2FuY2VsIGxpc3Qgd2hlbiBsaSBpcyBlbXB0eVxuICBpZiAoKHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ2xpJykpICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHVsT3JPbCA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3VsJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnb2wnKVxuICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRVbm9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgfVxuICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdPTCcpIHtcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRPcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgLy8gbm9kZSBpcyBlZGl0IHpvbmVcbiAgaWYgKCFyb3cpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gYWZ0ZXJEZWxldGUocmgpXG4gIH1cbiAgXG4gIC8vIGVtcHR5IHJvd1xuICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmICgobm9kZSA9PT0gcm93ICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwKSB8fCAocm93LmlubmVySFRNTC5yZXBsYWNlKC88YnI+L2csICcnKSA9PT0gJycgJiYgcmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDEpKSkge1xuICAgIGxldCBmaXJzdFJvdyA9IHJoLmVkaXRab25lKCkuZmlyc3RFbGVtZW50Q2hpbGRcblxuICAgIC8vIGZpcnN0IHJvdyBjYW5jZWwgb3V0ZGVudFxuICAgIGlmIChmaXJzdFJvdyA9PT0gcm93KSB7XG4gICAgICBjb21tYW5kcy5vdXRkZW50KHJoLCBudWxsKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICAvLyByb3cgaGFzIGNvbnRlbnQsIGN1cnNvciBpcyBhdCBhdCBzdGFydCBvZiB0aGUgbm9kZSwgZG8gb3V0ZGVudFxuICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmIHZhbHVlICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAwICYmIChub2RlID09PSByb3cuZmlzdEVsZW1lbnRDaGlsZCB8fCBub2RlID09PSByb3cuZmlyc3RDaGlsZCkpIHtcbiAgICBjb21tYW5kcy5vdXRkZW50KHJoLCBudWxsKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gZW1wdHkgcm93XG4gIGlmIChyb3cuaW5uZXJIVE1MLnJlcGxhY2UoLzxicj4vZywgJycpID09PSAnJykge1xuICAgIC8vIGdldCBwcmV2aW91cyByb3cgd2l0aCBjb250ZW50XG4gICAgbGV0IHByZVJvdyA9IHJoLmdldFByZXZpb3VzUm93KHJvdylcblxuICAgIC8vIGN1cnNvciBmb2N1cyBvbiBwcmV2aW91cyByb3cncyBpbnB1dCBpZiBwcmV2aW91cyByb3cgaXMgdG9kb1xuICAgIGlmIChwcmVSb3cgJiYgcHJlUm93LmRhdGFzZXQgJiYgcHJlUm93LmRhdGFzZXQuZWRpdG9yVG9kbykge1xuICAgICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KVxuICAgICAgbGV0IGlucHV0ID0gcHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHJldHVybiBhZnRlckRlbGV0ZShyaClcbn1cblxuLy8gaGFuZGxlICYjODIwMzsgYWZ0ZXIgZGVsZXRlXG5mdW5jdGlvbiBhZnRlckRlbGV0ZShyaCkge1xuICBsZXQgZGVsZXRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgZm9jdXNOb2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgY3RuID0gdHlwZW9mIGZvY3VzTm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gZm9jdXNOb2RlLmlubmVyVGV4dCA6IGZvY3VzTm9kZS5ub2RlVmFsdWVcbiAgICBpZiAodHlwZW9mIGN0biA9PT0gJ3N0cmluZycgJiYgL1xcdTIwMEIvLnRlc3QoY3RuKSAmJiBjdG4ucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnKSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGRlbGV0ZUludGVydmFsKVxuICAgIH1cbiAgfSlcblxuICAvLyBpZiBlZGl0IHpvbmUgaXMgZW1wdHksIGNyZWF0ZSBhIHJvd1xuICBpZiAocmguaXNFbXB0eU5vZGUocmguZWRpdFpvbmUoKSkgJiYgIXJoLmdldFJvd3MoKS5sZW5ndGgpIHtcbiAgICBsZXQgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgcmguZWRpdFpvbmUoKS5hcHBlbmRDaGlsZChyb3cpXG4gICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAxKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZGVsZXRlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlSaWdodC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJyYjODIwMzsnKVxuICAgICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1JvdygpXG4gICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dC5ub2RlVmFsdWVcbiAgICAgIGxldCBuZXh0U2libGluZyA9IHRleHQubmV4dFNpYmxpbmdcbiAgICAgIHRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0KVxuICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlMZWZ0LmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlDZW50ZXInLCBmYWxzZSlcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9qdXN0aWZ5Q2VudGVyLmpzIiwiaW1wb3J0IGFtIGZyb20gJy4vYXNzaXN0LW1ldGhvZHMnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCBtID0ge1xuICAvKipcbiAgICogZnVuYyBhZGQgZXZlcnkgZWxlbWVudHMgb2YgZXh0QXJyIHRvIHNvdXJjZUFyci5cbiAgICogQHBhcmFtIHNvdXJjZUFyclxuICAgKiBAcGFyYW0gZXh0QXJyXG4gICAqL1xuICBtZXJnZUFycmF5IChzb3VyY2VBcnIsIGV4dEFycikge1xuICAgIC8vIG5vdGU6IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycjEsYXJyMikgaXMgdW5yZWxpYWJsZVxuICAgIGV4dEFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgc291cmNlQXJyLnB1c2goZWwpXG4gICAgfSlcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYSBlbGVtZW50XG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKi9cbiAgZ2V0RGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IpIHtcbiAgICBpZiAoYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICByZXR1cm4gW2FuY2VzdG9yXVxuICAgIH1cbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGlmICghYW5jZXN0b3IuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhbmNlc3Rvci5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBmaW5kIGFsbCB0aGUgZGVzY2VuZGFudCB0ZXh0IG5vZGVzIG9mIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBiZWZvcmUgdGhlIHNwZWNpZnkgZW5kIGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIGVuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0gYW5jZXN0b3JcbiAgICogQHBhcmFtIGVuZEVsXG4gICAqL1xuICBnZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3RvciwgZW5kRWwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGxldCBlbmRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKGVuZEVsKSkge1xuICAgICAgICBlbmRJbmRleCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IGVuZEVsKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBlbmRFbCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYW4gYW5jZXN0b3IgZWxlbWVudCB0aGF0IGFmdGVyIHRoZSBzcGVjaWZ5IHN0YXJ0IGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIHN0YXJ0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKiBAcGFyYW0gc3RhcnRFbFxuICAgKi9cbiAgZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yLCBzdGFydEVsKSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKHN0YXJ0RWwpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBhbmNlc3Rvci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IHN0YXJ0RWwpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfSBlbHNlIGlmIChpID09PSBzdGFydEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgICAgbS5nZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBzdGFydEVsKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBnZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGJsb2NrIG5vZGUgb2YgYSB0ZXh0IG5vZGUuXG4gICAqIEBwYXJhbSBub2RlXG4gICAqIEByZXR1cm4ge05vZGV9XG4gICAqL1xuICBnZXRQYXJlbnRCbG9ja05vZGUgKG5vZGUpIHtcbiAgICBjb25zdCBibG9ja05vZGVOYW1lcyA9IFsnRElWJywgJ1AnLCAnU0VDVElPTicsICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsXG4gICAgICAnT0wnLCAnVUwnLCAnTEknLCAnVFInLCAnVEQnLCAnVEgnLCAnVEJPRFknLCAnVEhFQUQnLCAnVEFCTEUnLCAnQVJUSUNMRScsICdIRUFERVInLCAnRk9PVEVSJywgJ0JMT0NLUVVPVEUnXVxuICAgIGxldCBjb250YWluZXIgPSBub2RlXG4gICAgd2hpbGUgKGNvbnRhaW5lcikge1xuICAgICAgaWYgKGJsb2NrTm9kZU5hbWVzLmluY2x1ZGVzKGNvbnRhaW5lci5ub2RlTmFtZSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfSxcbiAgaXNJbmxpbmVFbGVtZW50IChub2RlKSB7XG4gICAgY29uc3QgaW5saW5lTm9kZU5hbWVzID0gWydBJywgJ0FCQlInLCAnQUNST05ZTScsICdCJywgJ0NJVEUnLCAnQ09ERScsICdFTScsICdJJyxcbiAgICAgICdGT05UJywgJ0lNRycsICdTJywgJ1NNQUxMJywgJ1NQQU4nLCAnU1RSSUtFJywgJ1NUUk9ORycsICdVJywgJ1NVQicsICdTVVAnXVxuICAgIHJldHVybiBpbmxpbmVOb2RlTmFtZXMuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSlcbiAgfSxcbiAgaXNJbmxpbmVPclRleHQgKG5vZGUpIHtcbiAgICBsZXQgaXNJbmxpbmUgPSBtLmlzSW5saW5lRWxlbWVudChub2RlKVxuICAgIGxldCBpc1RleHQgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERVxuICAgIHJldHVybiBpc0lubGluZSB8fCBpc1RleHRcbiAgfSxcbiAgLypcbiAgICogZmluZCBhbGwgc3BlY2lmeSBub2RlcyBpbiBhbiBhbmNlc3RvciB0aHJvdWdoIHNlYXJjaCBvcGluaW9ucyh1bmlxdWUgYXR0cmlidXRlcylcbiAgICogQHBhcmFtIG5vZGVcbiAgICogQHBhcmFtIHtvYmp9XG4gICAqICAgICBtdXN0IGhhdmUga2V5ICd0YWdOYW1lJ1xuICAgKiBAcmV0dXJuIHthcnJ9XG4gICAqKi9cbiAgZ2V0QWxsU3BlY2lmeU5vZGUgKGFuY2VzdG9yLCBzZWFyY2hPcGluaW9uKSB7XG4gICAgY29uc3QgdGFyZ2V0VGFnTmFtZSA9IHNlYXJjaE9waW5pb24udGFnTmFtZVxuICAgIGRlbGV0ZSBzZWFyY2hPcGluaW9uLnRhZ05hbWVcbiAgICBjb25zdCB0YWdzID0gYW5jZXN0b3IucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRUYWdOYW1lKVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBjb25zdCBvcGluaW9uS2V5cyA9IE9iamVjdC5rZXlzKHNlYXJjaE9waW5pb24pXG4gICAgICBsZXQgcGFzcyA9IHRydWVcbiAgICAgIG9waW5pb25LZXlzLmZvckVhY2gob3BpbmlvbiA9PiB7XG4gICAgICAgIHZhciBhID0gdGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKVxuICAgICAgICBpZiAodGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKSAhPT0gc2VhcmNoT3BpbmlvbltvcGluaW9uXSkge1xuICAgICAgICAgIHBhc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKHBhc3MpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGFnKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiBmdW5jIGZpbmQgdGhlIG51bWJlciBvZiBuZXN0aW5nIGFuY2VzdG9yIHdoaWNoIGhhcyBzYW1lIG5vZGUgbmFtZVxuICAgKiBAcGFyYW0ge25vZGV9IGN1cnJlbnQgbm9kZVxuICAgKiBAcGFyYW0ge3N0cn0gYW5jZXN0b3IncyB0YWcgbmFtZVxuICAgKiBAcmV0dXJuIHtudW19IG51bWJlclxuICAgKiovXG4gIGhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnIChub2RlLCBhbmNlc3Rvck5vZGVOYW1lKSB7XG4gICAgbGV0IG51bSA9IDBcbiAgICBhbmNlc3Rvck5vZGVOYW1lID0gYW5jZXN0b3JOb2RlTmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgIT09IGFtLmVkaXRab25lKCkpKSB7XG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gYW5jZXN0b3JOb2RlTmFtZSkge1xuICAgICAgICBudW0rK1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gbnVtXG4gIH0sXG5cbiAgLypcbiAgICogZmluZCBhbiBhbmNlc3RvciBlbGVtZW50IHRocm91Z2ggc2VsZWN0b3JcbiAgICogQHBhcmFtIHtub2RlfSBzdGFydCBhdCBub2RlXG4gICAqIEBwYXJhbSB7c3RyfSBhbmNlc3RvciBlbGVtZW50J3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtib29sZWFufSBlaXRoZXIgcmV0dXJuIGZpcnN0IGVsaWdpYmxlIGVsZW1lbnQgb3IgbGFzdCBlbGlnaWJsZSBlbGVtZW50XG4gICAqICBkZWZhdWx0OiB0cnVlXG4gICAqIEBwYXJhbSB7bm9kZX0gc2VhcmNoaW5nIHN0b3AgYXQgdGhlIGJvcmRlciBlbGVtZW50XG4gICAqICBkZWZhdWx0OiBlZGl0b3IncyBjb250ZW50IHpvbmVcbiAgICogQHJldHVybiB0YXJnZXQgYW5jZXN0b3IgZWxlbWVudFxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3IgKG5vZGUsIHNlbGVjdG9yLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBhbmNlc3RvcnMgPSBBcnJheS5mcm9tKG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhbmNlc3RvcnMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBub2RlXG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgdGFyZ2V0IHN0eWxlXG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlIChub2RlLCBzdHlsZU5hbWUsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgaWYgKG5vZGUuc3R5bGUgJiYgbm9kZS5zdHlsZVtzdHlsZU5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCA9IG5vZGUuc3R5bGVbc3R5bGVOYW1lXVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgYW4gYW5jZXN0b3IgZWxlbWVudCB0aHJvdWdoIHN0eWxlIG5hbWUgYW5kIHN0eWxlIHZhbHVlXG4gICAqIEBwYXJhbSBzdHlsZSB7b2JqfSBzdHlsZU5hbWU6IHN0eWxlVmFsdWVcbiAgICogQHJldHVyblxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIChub2RlLCBzdHlsZSwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICBsZXQgaXNUYXJnZXQgPSB0cnVlXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xuICAgICAgICBpZiAoc3R5bGVbc3R5bGVOYW1lXSAhPT0gcGFyZW50LnN0eWxlW3N0eWxlTmFtZV0pIHtcbiAgICAgICAgICBpc1RhcmdldCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoaXNUYXJnZXQpIHtcbiAgICAgICAgcmVzdWx0ID0gcGFyZW50XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIGdldE5vZGVOdW0gKGFuY2VzdG9yLCBub2RlTmFtZSkge1xuICAgIHJldHVybiBhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKG5vZGVOYW1lKS5sZW5ndGhcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSB0ZXh0IG5vZGVzIGluIHJhbmdlXG4gICAqL1xuICBnZXRBbGxUZXh0Tm9kZXNJblJhbmdlKCkge1xuICAgIGNvbnN0IHN0YXJ0Q29udGFpbmVyID0gdGhpcy5yYW5nZS5zdGFydENvbnRhaW5lclxuICAgIGNvbnN0IGVuZENvbnRhaW5lciA9IHRoaXMucmFuZ2UuZW5kQ29udGFpbmVyXG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG5cbiAgICBpZiAoc3RhcnRDb250YWluZXIgPT09IGVuZENvbnRhaW5lcikge1xuICAgICAgaWYgKHN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICByZXR1cm4gW3N0YXJ0Q29udGFpbmVyXVxuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJhbmdlLnN0YXJ0T2Zmc2V0OyBpIDwgdGhpcy5yYW5nZS5lbmRPZmZzZXQ7IGkrKykge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMoY2hpbGROb2Rlc1tpXSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXG4gICAgbGV0IGVuZEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUuY29udGFpbnMoc3RhcnRDb250YWluZXIpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jb250YWlucyhlbmRDb250YWluZXIpKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgc3RhcnRDb250YWluZXIpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGVuZEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgZW5kQ29udGFpbmVyKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLypcbiAgICogZ2V0IHRoZSByb3cgd2hpY2ggY29udGFpbnMgdGFyZ2V0IGVsZW1lbnRcbiAgICogQHBhcmFtIHtub2RlfSB0YXJnZXQgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtub2RlfSByb3dcbiAgICoqL1xuICBnZXRSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICBsZXQgcmVzdWx0XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmNvbnRhaW5zKG5vZGUpIHx8IHJvdyA9PT0gbm9kZSkge1xuICAgICAgICByZXN1bHQgPSByb3dcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgdGV4dFRvUm93IChub2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gYW0uZWRpdFpvbmUoKSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9LFxuICAvKlxuICAgKiBnZXQgcm93LCBpZiB0aGVyZSdzIG5vdCwgY3JlYXRlIG9uZVxuICAgKiovXG4gIGZvcmNlR2V0Um93IChub2RlKSB7XG4gICAgbm9kZSA9IG0udGV4dFRvUm93KG5vZGUpXG4gICAgcmV0dXJuIG0uZ2V0Um93KG5vZGUpXG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBhbGwgcm93c1xuICAgKiovXG4gIGdldFJvd3MgKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFtLmVkaXRab25lKCkuY2hpbGRyZW4pXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgY3VycmVudCBub2RlIGlzIGEgcm93XG4gICAqKi9cbiAgaXNSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICByZXR1cm4gcm93cy5pbmNsdWRlcyhub2RlKVxuICB9LFxuICAvKlxuICAgKiBjcmVhdGUgYSB3cmFwcGVyIGZvciBpbmxpbmUgZWxlbWVudCBpbiBzYW1lIHJvd1xuICAgKiovXG4gIGNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUgKG5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyID0gdHJ1ZSkge1xuICAgIGlmICghbS5pc0lubGluZU9yVGV4dChub2RlKSkgcmV0dXJuIG5vZGVcbiAgICBsZXQgZWxlbWVudHMgPSBbbm9kZV1cbiAgICBzZWFyY2hMZWZ0KClcbiAgICBzZWFyY2hSaWdodCgpXG4gICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlck5vZGVOYW1lKVxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gZWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBsYXN0T25lID0gZWxlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGxhc3RPbmUpXG4gICAgICBlbGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBlbGUpXG4gICAgfSlcblxuICAgIGlmIChzZXBlcmF0ZUJ5QnIpIHtcbiAgICAgIGhhbmRsZXJCcihuZXdSb3cucHJldmlvdXNTaWJsaW5nLCB0cnVlKVxuICAgICAgaGFuZGxlckJyKG5ld1Jvdy5uZXh0U2libGluZywgZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiBuZXdSb3dcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXJCcihub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChub2RlICYmIG5vZGUubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbGV0IG5leHREaXIgPSBkaXJlY3Rpb24gPyAncHJldmlvdXNTaWJsaW5nJyA6ICduZXh0U2libGluZydcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBub2RlW25leHREaXJdXG4gICAgICAgIGlmICghdGFyZ2V0Tm9kZSkgcmV0dXJuXG4gICAgICAgIGlmICh0YXJnZXROb2RlLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJCcih0YXJnZXROb2RlLCBkaXJlY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgbS5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHRhcmdldE5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZWFyY2hMZWZ0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZyAmJiBtLmlzSW5saW5lT3JUZXh0KGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgZWxlbWVudHMudW5zaGlmdChlbGVtZW50c1swXS5wcmV2aW91c1NpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaFJpZ2h0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICYmIG0uaXNJbmxpbmVPclRleHQoZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBnZXQgbm9kZSdzIHByZXZpb3VzIHJvdyB3aGljaCBoYXMgY29udGVudFxuICAgKiovXG4gIGdldFByZXZpb3VzUm93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHByZVJvd1xuICAgIGxldCByb3dzID0gbS5nZXRSb3dzKClcbiAgICBsZXQgcm93SW5kZXggPSBudWxsXG4gICAgcm93cy5mb3JFYWNoKChjdXJSb3csIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY3VyUm93ID09PSByb3cpIHtcbiAgICAgICAgcm93SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgICAgaWYgKHJvd0luZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJSb3cuaW5uZXJIVE1MICE9PSAnJykge1xuICAgICAgICAgIHByZVJvdyA9IGN1clJvd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcHJlUm93XG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IHJvdyBpcyBlbXB0eVxuICAgKiovXG4gIGlzRW1wdHlSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5pc1Jvdyhub2RlKSA/IG5vZGUgOiBtLmdldFJvdyhub2RlKVxuICAgIGlmIChyb3cuZ2V0QXR0cmlidXRlKSB7XG4gICAgICBpZiAodHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93LmlubmVyVGV4dC5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IG5vZGUgaXMgZW1wdHlcbiAgICoqL1xuICBpc0VtcHR5Tm9kZSAobm9kZSkge1xuICAgIGxldCBjdG4gPSB0eXBlb2Ygbm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gbm9kZS5pbm5lclRleHQgOiBub2RlLm5vZGVWYWx1ZVxuICAgIGlmICh0eXBlb2YgY3RuICE9PSAnc3RyaW5nJykgcmV0dXJuXG4gICAgcmV0dXJuIGN0bi5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHRyeSB0byBjb2xsYXBzZSBhdCB0YXJnZXQgcm93XG4gICAqKi9cbiAgY29sbGFwc2VBdFJvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmlzUm93KG5vZGUpID8gbm9kZSA6IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHMgPSBhbS5nZXRTZWxlY3Rpb24oKVxuICAgIHRyeSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMClcbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIHNlYXJjaGluZyBuZXN0ZWQgYW5jZXN0b3JzIHRpbGwgYm9yZGVyIHRvIGZpbmQgdGhlIHNwZWNpZmllZCB0YWdOYW1lXG4gICAqIEBwYXJhbSB7bm9kZX0gZnJvbSB3aGljaCBub2RlXG4gICAqIEBwYXJhbSB7YXJyfSBpbmNsdWRlcyB0YWcgbmFtZXMgb2YgdGFyZ2V0IHRhZ1xuICAgKiBAcGFyYW0ge25vZGV9IHNlYXJjaCBib3JkZXJcbiAgICogQHJldHVybiB7YXJyfVxuICAgKiovXG4gIGZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIgKG5vZGUsIHRhZ05hbWVsaXN0LCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gYm9yZGVyKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWVcbiAgICAgIGlmIChub2RlTmFtZSAmJiB0YWdOYW1lbGlzdC5pbmNsdWRlcyhub2RlTmFtZSkpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobm9kZU5hbWUpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gobm9kZU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiByZXR1cm4gYSBuZXN0ZWQgRE9NIGRhdGEgdGhyb3VnaCBhIHRhZyBuYW1lIGxpc3RcbiAgICoqL1xuICBjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QgKGxpc3QpIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgZG9tOiBudWxsLFxuICAgICAgZGVlcGVzdElkOiBudWxsLFxuICAgICAgZGVlcGVzdDogbnVsbFxuICAgIH1cbiAgICBsaXN0LmZvckVhY2goKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBlbGVcbiAgICAgIGxldCBwYXJlbnQgPSByZXN1bHRbaW5kZXggLSAxXVxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmVzdWx0LmRlZXBlc3QgPSBlbGVcbiAgICAgICAgcmVzdWx0LmRlZXBlc3RJZCA9IGFtLmNyZWF0ZVJhbmRvbUlkKCdkZWVwZXN0JylcbiAgICAgICAgcmVzdWx0LmRvbSA9IHJlc3VsdFsnMCddXG4gICAgICAgIGVsZS5pZCA9IHJlc3VsdC5kZWVwZXN0SWRcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2hhbmRsZS1tZXRob2RzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibXktdnVlLWVkaXRvclxcXCIgOmNsYXNzPVxcXCJ7J2Z1bGwtc2NyZWVuJzpmdWxsU2NyZWVufVxcXCIgOnN0eWxlPVxcXCJ7J3otaW5kZXgnOnpJbmRleH1cXFwiPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJ0b29sYmFyXFxcIiA6c3R5bGU9XFxcInsnei1pbmRleCc6ekluZGV4KzF9XFxcIiByZWY9XFxcInRvb2xiYXJcXFwiIGRhdGEtZWRpdG9yPVxcXCJ0b29sYmFyXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwidGFic1xcXCI+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCJtb2R1bGUgaW4gbW9kdWxlc1xcXCI+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiIW1vZHVsZS5oYXNUYWJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGkgOnRpdGxlPVxcXCJsb2NhbGVbbW9kdWxlLmkxOG5dXFxcIiBjbGFzcz1cXFwidGFiIGJ0blxcXCIgOmNsYXNzPVxcXCJ7aGlnaExpZ2h0OiBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCwgZm9yYmlkZGVuOiBtb2R1bGUuZm9yYmlkZGVufVxcXCIgQGNsaWNrPVxcXCJhY3RpdmVNb2R1bGUobW9kdWxlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiIDpjbGFzcz1cXFwibW9kdWxlLmljb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICA8a2VlcC1hbGl2ZT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRhYlxcXCIgOmlzPVxcXCJtb2R1bGUudGFiTmFtZVxcXCIgOmFjdGl2ZUl0ZW09XFxcIm1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0XFxcIiA6Zm9yYmlkZGVuPVxcXCJtb2R1bGUuZm9yYmlkZGVuXFxcIiA6Y2xhc3M9XFxcIntoaWdoTGlnaHQ6IG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0LCBmb3JiaWRkZW46IG1vZHVsZS5mb3JiaWRkZW59XFxcIiBAY2xpY2s9XFxcImFjdGl2ZU1vZHVsZShtb2R1bGUpXFxcIj48L2xpPlxcbiAgICAgICAgICAgICAgICA8L2tlZXAtYWxpdmU+XFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L25hdj5cXG5cXG4gICAgPHAgY2xhc3M9J2NvbnRlbnQnIDppcz1cXFwiY29uc3RhbnRDb25maWcuUk9XX1RBR1xcXCIgOnNwZWxsY2hlY2s9XFxcInNwZWxsY2hlY2tcXFwiIHJlZj1cXFwiY29udGVudFxcXCIgaWQ9XFxcImVkaXRvci1jb250ZW50XFxcIiA6c3R5bGU9XFxcImNvbnRlbnRTdHlsZVxcXCIgZGF0YS1lZGl0b3I9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgICAgY29udGVudGVkaXRhYmxlPVxcXCJwbGFpbnRleHQtb25seVxcXCIgdi1kcmFnLXBpYz1cXFwiaGFuZGxlRHJhZ1BpY1xcXCI+XFxuICAgIDwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBkaXJlY3RpdmUgZHJhZyBhbmQgZHJvcCBwaWNcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBsZXQgZWRpdG9yID0gdm5vZGUuY29udGV4dFxuICAgIGxldCBvbkRyYWdPdmVyID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlKGUudGFyZ2V0LCAxKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxlY3Rpb24uY29sbGFwc2UoZS50YXJnZXQsIDApXG4gICAgICB9XG4gICAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICBlZGl0b3IubW9kdWxlSW5zcGVjdCgpXG4gICAgfVxuICAgIGxldCBvbkRyYWdMZWF2ZSA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgbGV0IG9uRHJvcCA9IGUgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICBsZXQgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgZmlsZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgbGV0IGN1ckZpbGUgPSBmaWxlc1tpXVxuICAgICAgICAgIGlmIChjdXJGaWxlLnNpemUgJiYgY3VyRmlsZS50eXBlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnZhbHVlKGN1ckZpbGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgb25EcmFnRW50ZXIsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3ZlciwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuXG4gICAgZWwuX19kcmFnT3ZlckhhbmRsZXIgPSBvbkRyYWdPdmVyXG4gICAgZWwuX19kcmFnTGVhdmVIYW5kbGVyID0gb25EcmFnTGVhdmVcbiAgICBlbC5fX2Ryb3BIYW5kbGVyID0gb25Ecm9wXG4gIH0sXG4gIHVuYmluZCAoZWwsIGJpbmRpbmcpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGVsLl9fZHJhZ092ZXJIYW5kbGVyKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGVsLl9fZHJhZ0xlYXZlSGFuZGxlcilcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZWwuX19kcm9wSGFuZGxlcilcbiAgICBkZWxldGUgZWwuX19kcmFnT3ZlckhhbmRsZXJcbiAgICBkZWxldGUgZWwuX19kcmFnTGVhdmVIYW5kbGVyXG4gICAgZGVsZXRlIGVsLl9fZHJvcEhhbmRsZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIi8qXG4gKiBsb2FkIHJ1bGUga2V5d29yZHMgb2Ygc3R5bGUgaW5zcGVjdFxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3VyTW9kdWxlLCBtb2R1bGVzKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICBsZXQgY3VyRXhjbHVkZSA9IGN1ck1vZHVsZS5leGNsdWRlXG4gIGlmIChBcnJheS5pc0FycmF5KGN1ckV4Y2x1ZGUpKSByZXR1cm4gY3VyRXhjbHVkZVxuICBpZiAodHlwZW9mIGN1ckV4Y2x1ZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IG1vZHVsZU5hbWVMaXN0ID0gW11cbiAgICBtb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICBpZiAobS5uYW1lKSB7XG4gICAgICAgIG1vZHVsZU5hbWVMaXN0LnB1c2gobS5uYW1lKVxuICAgICAgfVxuICAgIH0pXG4gICAgbW9kdWxlTmFtZUxpc3QgPSBBcnJheS5mcm9tKG5ldyBTZXQobW9kdWxlTmFtZUxpc3QpKVxuICAgIHN3aXRjaCAoY3VyRXhjbHVkZSkge1xuICAgICAgLy8gZXhjbHVkZSBhbGwgbW9kdWxlc1xuICAgICAgY2FzZSAnQUxMJzpcbiAgICAgICAgcmVzdWx0ID0gbW9kdWxlTmFtZUxpc3RcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIGV4Y2x1ZGUgYWxsIG1vZHVsZXMgYnV0IGN1cnJlbnQgbW9kdWxlXG4gICAgICBjYXNlICdBTExfQlVUX01ZU0VMRic6XG4gICAgICAgIHJlc3VsdCA9IG1vZHVsZU5hbWVMaXN0XG4gICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0LmluZGV4T2YoY3VyTW9kdWxlLm5hbWUpLCAxKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsaWduOiAn5a+56b2Q5pa55byPJyxcbiAgICBpbWFnZTogJ+WbvueJhycsXG4gICAgbGlzdDogJ+WIl+ihqCcsXG4gICAgbGluazogJ+mTvuaOpScsXG4gICAgdW5saW5rOiAn5Y676Zmk6ZO+5o6lJyxcbiAgICB0YWJsZTogJ+ihqOagvCcsXG4gICAgZm9udDogJ+aWh+WtlycsXG4gICAgJ2Z1bGwgc2NyZWVuJzogJ+WFqOWxjycsXG4gICAgdGV4dDogJ+aOkueJiCcsXG4gICAgZXJhc2VyOiAn5qC85byP5riF6ZmkJyxcbiAgICBpbmZvOiAn5YWz5LqOJyxcbiAgICBjb2xvcjogJ+minOiJsicsXG4gICAgJ3BsZWFzZSBlbnRlciBhIHVybCc6ICfor7fovpPlhaXlnLDlnYAnLFxuICAgICdjcmVhdGUgbGluayc6ICfliJvlu7rpk77mjqUnLFxuICAgIGJvbGQ6ICfliqDnspcnLFxuICAgIGl0YWxpYzogJ+WAvuaWnCcsXG4gICAgdW5kZXJsaW5lOiAn5LiL5YiS57q/JyxcbiAgICAnc3RyaWtlIHRocm91Z2gnOiAn5Yig6Zmk57q/JyxcbiAgICBzdWJzY3JpcHQ6ICfkuIrmoIcnLFxuICAgIHN1cGVyc2NyaXB0OiAn5LiL5qCHJyxcbiAgICBoZWFkaW5nOiAn5qCH6aKYJyxcbiAgICAnZm9udCBuYW1lJzogJ+Wtl+S9kycsXG4gICAgJ2ZvbnQgc2l6ZSc6ICfmloflrZflpKflsI8nLFxuICAgICdsZWZ0IGp1c3RpZnknOiAn5bem5a+56b2QJyxcbiAgICAnY2VudGVyIGp1c3RpZnknOiAn5bGF5LitJyxcbiAgICAncmlnaHQganVzdGlmeSc6ICflj7Plr7npvZAnLFxuICAgICdvcmRlcmVkIGxpc3QnOiAn5pyJ5bqP5YiX6KGoJyxcbiAgICAndW5vcmRlcmVkIGxpc3QnOiAn5peg5bqP5YiX6KGoJyxcbiAgICAnZm9yZSBjb2xvcic6ICfliY3mma/oibInLFxuICAgICdiYWNrZ3JvdW5kIGNvbG9yJzogJ+iDjOaZr+iJsicsXG4gICAgJ3JvdyBjb3VudCc6ICfooYzmlbAnLFxuICAgICdjb2x1bW4gY291bnQnOiAn5YiX5pWwJyxcbiAgICBzYXZlOiAn56Gu5a6aJyxcbiAgICB1cGxvYWQ6ICfkuIrkvKAnLFxuICAgIHByb2dyZXNzOiAn6L+b5bqmJyxcbiAgICB1bmtub3duOiAn5pyq55+lJyxcbiAgICAncGxlYXNlIHdhaXQnOiAn6K+356iN562JJyxcbiAgICBlcnJvcjogJ+mUmeivrycsXG4gICAgYWJvcnQ6ICfkuK3mlq0nLFxuICAgIHJlc2V0OiAn6YeN572uJyxcbiAgICBocjogJ+WIhumalOe6vycsXG4gICAgdW5kbzogJ+aSpOa2iCcsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ+ihjOmrmCcsXG4gICAgJ2V4Y2VlZCBzaXplIGxpbWl0JzogJ+i2heWHuuWkp+Wwj+mZkOWItidcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaTE4bi96aC1jbi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGlnbjogJ2FsaWduJyxcbiAgICBpbWFnZTogJ2ltYWdlJyxcbiAgICBsaXN0OiAnbGlzdCcsXG4gICAgbGluazogJ2xpbmsnLFxuICAgIHVubGluazogJ3VubGluaycsXG4gICAgdGFibGU6ICd0YWJsZScsXG4gICAgZm9udDogJ2ZvbnQnLFxuICAgICdmdWxsIHNjcmVlbic6ICdmdWxsIHNjcmVlbicsXG4gICAgdGV4dDogJ3RleHQnLFxuICAgIGVyYXNlcjogJ3JlbW92ZSBmb3JtYXQnLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICAncGxlYXNlIGVudGVyIGEgdXJsJzogJ3BsZWFzZSBlbnRlciBhIHVybCcsXG4gICAgJ2NyZWF0ZSBsaW5rJzogJ2NyZWF0ZSBsaW5rJyxcbiAgICBib2xkOiAnYm9sZCcsXG4gICAgaXRhbGljOiAnaXRhbGljJyxcbiAgICB1bmRlcmxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICdzdHJpa2UgdGhyb3VnaCc6ICdzdHJpa2UgdGhyb3VnaCcsXG4gICAgc3Vic2NyaXB0OiAnc3Vic2NyaXB0JyxcbiAgICBzdXBlcnNjcmlwdDogJ3N1cGVyc2NyaXB0JyxcbiAgICBoZWFkaW5nOiAnaGVhZGluZycsXG4gICAgJ2ZvbnQgbmFtZSc6ICdmb250IG5hbWUnLFxuICAgICdmb250IHNpemUnOiAnZm9udCBzaXplJyxcbiAgICAnbGVmdCBqdXN0aWZ5JzogJ2xlZnQganVzdGlmeScsXG4gICAgJ2NlbnRlciBqdXN0aWZ5JzogJ2NlbnRlciBqdXN0aWZ5JyxcbiAgICAncmlnaHQganVzdGlmeSc6ICdyaWdodCBqdXN0aWZ5JyxcbiAgICAnb3JkZXJlZCBsaXN0JzogJ29yZGVyZWQgbGlzdCcsXG4gICAgJ3Vub3JkZXJlZCBsaXN0JzogJ3Vub3JkZXJlZCBsaXN0JyxcbiAgICAnZm9yZSBjb2xvcic6ICdmb3JlIGNvbG9yJyxcbiAgICAnYmFja2dyb3VuZCBjb2xvcic6ICdiYWNrZ3JvdW5kIGNvbG9yJyxcbiAgICAncm93IGNvdW50JzogJ3JvdyBjb3VudCcsXG4gICAgJ2NvbHVtbiBjb3VudCc6ICdjb2x1bW4gY291bnQnLFxuICAgIHNhdmU6ICdzYXZlJyxcbiAgICB1cGxvYWQ6ICd1cGxvYWQnLFxuICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbiAgICAncGxlYXNlIHdhaXQnOiAncGxlYXNlIHdhaXQnLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIGFib3J0OiAnYWJvcnQnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIGhyOiAnaG9yaXpvbnRhbCBydWxlJyxcbiAgICB1bmRvOiAndW5kbycsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ2xpbmUgaGVpZ2h0JyxcbiAgICAnZXhjZWVkIHNpemUgbGltaXQnOiAnZXhjZWVkIHNpemUgbGltaXQnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2kxOG4vZW4tdXMuanMiXSwic291cmNlUm9vdCI6IiJ9