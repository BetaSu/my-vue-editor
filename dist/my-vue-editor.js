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
/******/ 	var hotCurrentHash = "a9779caf7638871b6eab"; // eslint-disable-line no-unused-vars
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhOTc3OWNhZjc2Mzg4NzFiNmVhYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xyei9kaXN0L2xyei5hbGwuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5nZS1oYW5kbGVyL2Fzc2lzdC1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5odG1sIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZm9udC90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9mb250L3N0eWxlLnN0eWw/NDQzZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZvbnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbWFnZS90YWIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib2xkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2l0YWxpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bmRlcmxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9xdW90ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvb3V0ZGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5ldGhyb3VnaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pY291cnQtdG9kby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlLWhhbmRsZXIvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy91bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1hbmRzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tYW5kcy9qdXN0aWZ5TGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvanVzdGlmeUNlbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UtaGFuZGxlci9oYW5kbGUtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bD81YmM2Iiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL3poLWNuLmpzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2VuLXVzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRzIiwiYWRkU3R5bGUiLCJyaCIsImFyZyIsImRvQWRkIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3R5bGUiLCJzdHlsZU5hbWUiLCJ0ZXh0Tm9kZXMiLCJnZXRBbGxUZXh0Tm9kZXNJblJhbmdlIiwibGVuZ3RoIiwicmFuZ2UiLCJjb2xsYXBzZWQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInBhcmVudE5vZGUiLCJlZGl0Wm9uZSIsIm5ld1JvdyIsInRhZyIsImlubmVyVGV4dCIsIm5vZGVWYWx1ZSIsInJlcGxhY2VDaGlsZCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kQ29udGFpbmVyIiwidGV4dE5vZGUiLCJzdGFydE9mZnNldCIsImVuZE9mZnNldCIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsImlzSW5saW5lRWxlbWVudCIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN1YnN0cmluZyIsImZyb250UGFydCIsImNyZWF0ZVRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJleGVjQ29tbWFuZCIsImVsZW1lbnQiLCJzdXJyb3VuZENvbnRlbnRzIiwicGFyZW50QmxvY2siLCJnZXRQYXJlbnRCbG9ja05vZGUiLCJsaW5lSGVpZ2h0IiwidiIsInMiLCJnZXRTZWxlY3Rpb24iLCJpbm5lckhUTUwiLCJoYXNDaGlsZE5vZGVzIiwiaSIsImN1ck5vZGUiLCJkZWxldGVDb250ZW50cyIsImluc2VydE5vZGUiLCJjb2xsYXBzZSIsIm5vZGVMaXN0Iiwid2VpZ2h0aW5nIiwidGV4dHMiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwiZG9JbmRlbnQiLCJub2RlTmFtZSIsImZpbmRTcGVjaWFsQW5jZXN0b3IiLCJST1dfVEFHIiwiaW5jbHVkZXMiLCJwdXNoIiwidHlwZSIsImN1ckxldmVsIiwiaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWciLCJNQVhfSU5ERU5UX0xFVkVMIiwiUk9XX1RBR19VUFBFUkNBU0UiLCJjdXJQZXJjZW50IiwiSU5ERU5UX1NUWUxFX05BTUUiLCJOdW1iZXIiLCJyZXBsYWNlIiwiT1VUREVOVF9TVFlMRV9OQU1FIiwiSU5ERU5UX1dJRFRIX1BFUkNFTlQiLCJvdXRkZW50UmVzdWx0IiwiZG9PdXRkZW50IiwidGFyZ2V0SW5kZW50Iiwic3RhcnROb2RlIiwiYW5jaG9yTm9kZSIsInJvdyIsImdldFJvdyIsImNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUiLCJtYXliZUlzVWwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQ2hpbGQiLCJpc0NvbGxhcHNlZCIsImVkaXRvciIsIm1vZHVsZXNNYXAiLCJtb2R1bGVJbnNwZWN0UmVzdWx0IiwiYnIiLCJvdXRlckhUTUwiLCJpbnNlcnRJbWFnZSIsImZvbnRTaXplIiwiZGVsZXRlIiwicGFzdGUiLCJlbnRlciIsImtleWRvd24iLCJ1bmRlcmxpbmUiLCJzdHJpa2VUaHJvdWdoIiwiYm9sZCIsIml0YWxpYyIsImp1c3RpZnlMZWZ0IiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlSaWdodCIsImFzc2lnbiIsIm1peGluIiwic291cmNlIiwiZXh0IiwiayIsImRhdGFTcmMiLCJkYXRhRGVzYyIsImlzT2JqIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZGF0YSIsInNsaWNlIiwibWV0aG9kcyIsImlkIiwiZGF0YXNldCIsImVkaXRvclJvdyIsImNyZWF0ZVJhbmRvbUlkIiwiY29udGVudGVkaXRhYmxlIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiaW5zZXJ0QWZ0ZXIiLCJuZXdFbGVtZW50IiwidGFyZ2V0RWxlbWVudCIsInBhcmVudCIsImxhc3RDaGlsZCIsInByZWZmaXgiLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJlZGl0Wm9uZV9jYWNoZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRSYW5nZUF0IiwiY2hlY2tBbGwiLCJjcmVhdGVSYW5nZSIsImVuZCIsInNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZ2V0UmFuZ2UiLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsIkluc3BlY3RvciIsIm1vZHVsZU5hbWUiLCJwYXJhbSIsIkVycm9yIiwidGFnTWFwIiwidG9VcHBlckNhc2UiLCJzdHlsZXMiLCJhdHRyaWJ1dGVzIiwicmVzdWx0IiwiaW5zcGVjdFJlc3VsdCIsIm1vZHVsZVN0eWxlIiwiY3VyVmFsdWUiLCJpdGVtIiwiYWN0aXZlSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWwiLCJtb2R1bGVBdHRyIiwidmFsdWUiLCJub2RlVmFsIiwicnVuIiwiZm4iLCJyZW1vdmVEdXBsYXRlIiwibGlzdCIsInNhbWVTdHlsZU1hcCIsIm0iLCJmcm9tIiwiU2V0IiwiYW0iLCJtZXJnZWRTdHlsZSIsIkVkaXRvciIsIm9wdGlvbnMiLCJtb2R1bGVzIiwicmVzZXJ2ZWROYW1lcyIsIm5hbWUiLCJjb21wb25lbnRzIiwiZXh0ZW5kTW9kdWxlcyIsIm1vZHVsZSIsImN1ckNvbmZpZyIsIm1vZHVsZUNvbmZpZyIsImZvcmJpZGRlbiIsImluc3BlY3QiLCJpbnNwZWN0b3IiLCJhZGQiLCJiaW5kIiwiZXhjbHVkZSIsInRhYiIsInByb3BzIiwiYWN0aXZlSXRlbSIsIlN0cmluZyIsIkJvb2xlYW4iLCJ0YWJOYW1lIiwiaWNvbnMiLCJpY29uIiwiaGFzVGFiIiwiaTE4biIsImN1c3RvbUkxOG4iLCJrZXkiLCJsYW5ndWFnZSIsImxvY2FsZSIsInNob3J0Y3V0Iiwia2V5Q29kZSIsInNwZWxsY2hlY2siLCJjb21wbyIsImNvbnN0YW50Q29uZmlnIiwiVnVlIiwiY29tcG9uZW50IiwiZXhwb3J0cyIsImRlZmluZVByb3BlcnR5Iiwic2VhcmNoRWxlbWVudCIsImZyb21JbmRleCIsIlR5cGVFcnJvciIsIm8iLCJsZW4iLCJuIiwibWF4IiwiYWJzIiwiVGV4dCIsImNvbnRhaW5zIiwidGVtcGxhdGUiLCJ3YXRjaCIsIm1hcCIsImluZGV4IiwiYWxpZ25NYXAiLCJjaG9vc2VkIiwic2V0QWxpZ24iLCIkcGFyZW50Iiwic2F2ZUN1cnJlbnRSYW5nZSIsIm1vZHVsZUluc3BlY3QiLCJjaGFuZ2VBbGlnbiIsInByZV9pbmRleCIsImlzTmFOIiwidGFyZ2V0X2luZGV4IiwiY29uZmlnIiwiZm9udEF0dHJNYXAiLCJjdXJNb2R1bGUiLCJzaG93TGlzdCIsInNob3dMaXN0Rm4iLCIkcmVmcyIsImNsYXNzTGlzdCIsImNoYW5nZUF0dHIiLCJzZXRGb250TmFtZSIsInNldEhlYWRpbmciLCJoZWFkaW5nIiwibW91bnRlZCIsImRlZmF1bHQiLCJoYW5kbGVyIiwidG9nZ2xlRnVsbFNjcmVlbiIsImNhblVwbG9hZFNhbWVJbWFnZSIsImltZ09jY3VweU5ld1JvdyIsIm1heFNpemUiLCJjb21wcmVzcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsInBpY2siLCJmaWxlIiwiY2xpY2siLCJwcm9jZXNzIiwiZSIsImZpbGVzIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzaG93IiwiaXNJblF1b3RlIiwiYWN0aXZlTW9kdWxlcyIsIm91dGRlbnQiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiaW5kZW50IiwiY29udGVudCIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwiekluZGV4IiwiYXV0b0hlaWdodCIsImRpcmVjdGl2ZXMiLCJkcmFnUGljIiwiYWxsQWN0aXZlTW9kdWxlcyIsImZ1bGxTY3JlZW4iLCJwYXJlbnRFbCIsIiRlbCIsIm5leHRFbCIsImJvZHkiLCJjb21wdXRlZCIsImNvbnRlbnRTdHlsZSIsImlubmVySGVpZ2h0IiwidG9vbGJhciIsImNsaWVudEhlaWdodCIsImdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0iLCJjbGVhckFjdGl2ZU1vZHVsZUl0ZW0iLCJoYW5kbGVEcmFnUGljIiwiZHJhZyIsImVuYWJsZUZ1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImZvY3VzIiwiYmx1ciIsImNvbW1hbmQiLCJleGVjT25seSIsInJlc3RvcmVTZWxlY3Rpb24iLCIkZW1pdCIsInN0YXJ0IiwiVEVYVF9OT0RFIiwiYWN0aXZlTW9kdWxlIiwiJG5leHRUaWNrIiwidGV4dEFmdGV0RFIiLCJ0YWdSZXN1bHQiLCJ0YWdSZXN1bHRSRCIsInN0eWxlUmVzdWx0Iiwic3R5bGVSZXN1bHRSRCIsImF0dHJpYnV0ZVJlc3VsdCIsImF0dHJpYnV0ZVJlc3VsdFJEIiwiY29uY2F0IiwiZXhjbHVkZUxpc3QiLCJleGNNb2R1bGUiLCJleGMiLCJjdXJNb2R1bGVBY3RpdmVJdGVtIiwiY3JlYXRlZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbW9uIiwic2Nyb2xsSW50b1ZpZXciLCJ0b3VjaEhhbmRsZXIiLCJiZWZvcmUiLCJpc0VtcHR5Tm9kZSIsInRleHRUb1JvdyIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwidXBkYXRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveWVkIiwib3RoZXJOb2RlIiwiUmFuZ2VIYW5kbGVyIiwiUmFuZ2UiLCJiZWZvcmVMaXN0IiwiZXhpc3RDb21tYW5kIiwiY3VzdG9tQ29tbWFuZCIsImFmdGVyTGlzdCIsImFjdGl2ZXMiLCJyZXR1cm5EYXRhIiwib3JpZ2luIiwiRmlsZSIsImhhbmRsZUZpbGUiLCJmaWVsZE5hbWUiLCJ0aGVuIiwicnN0Iiwic2l6ZSIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJpbWdJZCIsImluc2VydEJhc2U2NCIsImJhc2U2NCIsImNhdGNoIiwiZXJyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZWFkQXNEYXRhVVJMIiwiY3VyUm93IiwiZm9yY2VHZXRSb3ciLCJyZXBsYWNlU3JjQWZ0ZXJVcGxvYWRGaW5pc2giLCJyZXBsYWNlSW1nIiwiZGVsZXRlSW1nV2hlblVwbG9hZEZhaWwiLCJkZWxldGVJbWciLCJzcmMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJiYXNlTm9kZSIsImluc2VydEhUTUwiLCJmb2N1c05vZGUiLCJhbmNob3JPZmZzZXQiLCJmb2N1c09mZnNldCIsImNsaXBib2FyZERhdGEiLCJzZXREYXRhIiwiZ2V0RGF0YSIsIm9yaWdpbmFsRXZlbnQiLCJjcmVhdGVUZXh0UmFuZ2UiLCJ0ZXh0UmFuZ2UiLCJzZWwiLCJ0ZW1wRWwiLCJtb3ZlVG9FbGVtZW50VGV4dCIsInNlbGVjdCIsInVsT3JPbCIsImFmdGVyRW50ZXIiLCJzZXRUaW1lb3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwibm9kZUN0biIsImZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIiwiZXhpc3RTdHlsZSIsImZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIiLCJmaW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUiLCJuZXdET00iLCJjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QiLCJkb20iLCJkZWVwZXN0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiZGVlcGVzdElkIiwibmV3VGV4dCIsInEiLCJxdW90ZSIsImdldERlc2NlbmRhbnRUZXh0Tm9kZXMiLCJxdW90ZVJvd3MiLCJyb3dzIiwiY2hpbGRyZW4iLCJxciIsImNvbnRhaW5lciIsInF1b3RlQmxvY2siLCJhbmNob3JSb3ciLCJjbG9uZU5vZGUiLCJjdXJRdW90ZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJjdG4iLCJwcmVSb3ciLCJnZXRQcmV2aW91c1JvdyIsImxhc3RFbGUiLCJwb3AiLCJpbnB1dCIsInQiLCJhZnRlcldoaWNoIiwiaXNFbXB0eVJvdyIsInRhcmdldEluZGV4Iiwic3RhcnRJbmRleCIsImNoaWxkIiwidW5kZWZpbmVkIiwiY29sbGFwc2VBdFJvdyIsInRvZG9JZCIsImNoZWNrYm94cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjIiwiYnRuIiwiY3RuQ2hlY2tlZExvZ2ljIiwiY2hlY2tlZCIsInRleHREZWNvcmF0aW9uIiwib25jaGFuZ2UiLCJvbmlucHV0Iiwib25rZXlkb3duIiwiZGVsZXRlVG9kbyIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdEJsb2NrIiwiY3VyUmFuZ2UiLCJhZnRlckRlbGV0ZSIsImZpcnN0Um93IiwiZmlzdEVsZW1lbnRDaGlsZCIsImZpcnN0Q2hpbGQiLCJlZGl0b3JUb2RvIiwiZGVsZXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRlc3QiLCJjbGVhckludGVydmFsIiwiZ2V0Um93cyIsIm1lcmdlQXJyYXkiLCJzb3VyY2VBcnIiLCJleHRBcnIiLCJlbCIsImFuY2VzdG9yIiwiZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2RlcyIsImVuZEVsIiwiZW5kSW5kZXgiLCJnZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2RlcyIsInN0YXJ0RWwiLCJibG9ja05vZGVOYW1lcyIsImlubGluZU5vZGVOYW1lcyIsImlzSW5saW5lT3JUZXh0IiwiaXNJbmxpbmUiLCJpc1RleHQiLCJnZXRBbGxTcGVjaWZ5Tm9kZSIsInNlYXJjaE9waW5pb24iLCJ0YXJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInRhZ3MiLCJvcGluaW9uS2V5cyIsInBhc3MiLCJhIiwib3BpbmlvbiIsImFuY2VzdG9yTm9kZU5hbWUiLCJudW0iLCJzZWxlY3RvciIsImZpcnN0T25lIiwiYm9yZGVyIiwiY29udGVudFpvbmUiLCJhbmNlc3RvcnMiLCJpc1RhcmdldCIsImdldE5vZGVOdW0iLCJyb290RWwiLCJpc1JvdyIsIndyYXBwZXJOb2RlTmFtZSIsInNlcGVyYXRlQnlCciIsImVsZW1lbnRzIiwic2VhcmNoTGVmdCIsInNlYXJjaFJpZ2h0IiwiZWxlIiwibGFzdE9uZSIsImhhbmRsZXJCciIsInByZXZpb3VzU2libGluZyIsImRpcmVjdGlvbiIsIm5leHREaXIiLCJ0YXJnZXROb2RlIiwidW5zaGlmdCIsInJvd0luZGV4IiwidGFnTmFtZWxpc3QiLCJkZWVwZXN0IiwiYmluZGluZyIsInZub2RlIiwiY29udGV4dCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsImRhdGFUcmFuc2ZlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJGaWxlIiwiX19kcmFnT3ZlckhhbmRsZXIiLCJfX2RyYWdMZWF2ZUhhbmRsZXIiLCJfX2Ryb3BIYW5kbGVyIiwidW5iaW5kIiwiY3VyRXhjbHVkZSIsIm1vZHVsZU5hbWVMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsImFsaWduIiwiaW1hZ2UiLCJsaW5rIiwidW5saW5rIiwidGFibGUiLCJmb250IiwiZXJhc2VyIiwiaW5mbyIsImNvbG9yIiwic3Vic2NyaXB0Iiwic3VwZXJzY3JpcHQiLCJzYXZlIiwidXBsb2FkIiwicHJvZ3Jlc3MiLCJ1bmtub3duIiwiZXJyb3IiLCJhYm9ydCIsInJlc2V0IiwiaHIiLCJ1bmRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBLFdBQUc7O0FBRUgsb0RBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOzs7O0FBSUE7QUFDQSxzREFBOEM7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVDQUF1QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdC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LG9CQUFnQixjQWhDTDtBQWlDWG1TLFVBQU0sTUFqQ0s7QUFrQ1hDLFlBQVEsUUFsQ0c7QUFtQ1hDLGNBQVUsVUFuQ0M7QUFvQ1hDLGFBQVMsU0FwQ0U7QUFxQ1gsbUJBQWUsYUFyQ0o7QUFzQ1hDLFdBQU8sT0F0Q0k7QUF1Q1hDLFdBQU8sT0F2Q0k7QUF3Q1hDLFdBQU8sT0F4Q0k7QUF5Q1hDLFFBQUksaUJBekNPO0FBMENYQyxVQUFNLE1BMUNLO0FBMkNYLG1CQUFlLGFBM0NKO0FBNENYLHlCQUFxQjtBQTVDVixDIiwiZmlsZSI6Im15LXZ1ZS1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm15VnVlRWRpdG9yXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15VnVlRWRpdG9yXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZW15VnVlRWRpdG9yXCJdID0gXHJcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHRcdGlmKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdH0gO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHQ7XHJcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xyXG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuIFx0XHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XHJcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xyXG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRpZihyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcclxuIFx0XHRcdFx0aWYocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xyXG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcclxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZihyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcclxuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZSkge1xyXG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH07XHJcbiBcdFx0fSk7XHJcbiBcdH1cclxuXG4gXHRcclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJhOTc3OWNhZjc2Mzg4NzFiNmVhYlwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xyXG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcclxuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdGlmKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XHJcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xyXG4gXHRcdFx0aWYobWUuaG90LmFjdGl2ZSkge1xyXG4gXHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XHJcbiBcdFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpIDwgMClcclxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpIDwgMClcclxuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVxdWVzdCArIFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArIG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xyXG4gXHRcdH07XHJcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcclxuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKVxyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xyXG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xyXG4gXHRcdFx0XHR0aHJvdyBlcnI7XHJcbiBcdFx0XHR9KTtcclxuIFx0XHJcbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XHJcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xyXG4gXHRcdFx0XHRcdGlmKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGZuO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBob3QgPSB7XHJcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXHJcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXHJcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcclxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXHJcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXHJcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXHJcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aWYoIWwpIHJldHVybiBob3RTdGF0dXM7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXHJcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cclxuIFx0XHR9O1xyXG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcclxuIFx0XHRyZXR1cm4gaG90O1xyXG4gXHR9XHJcbiBcdFxyXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcclxuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xyXG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90RGVmZXJyZWQ7XHJcbiBcdFxyXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cclxuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcclxuIFx0XHR2YXIgaXNOdW1iZXIgPSAoK2lkKSArIFwiXCIgPT09IGlkO1xyXG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xyXG4gXHRcdGlmKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xyXG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcclxuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcclxuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxyXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xyXG4gXHRcdFx0dmFyIGNodW5rSWQgPSAwO1xyXG4gXHRcdFx0eyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXHJcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXHJcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdFx0aWYoaG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xyXG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcclxuIFx0XHRpZighZGVmZXJyZWQpIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xyXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXHJcbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XHJcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XHJcbiBcdFx0XHR9KS50aGVuKFxyXG4gXHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcclxuIFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiBcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwicmVhZHlcIikgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xyXG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgY2I7XHJcbiBcdFx0dmFyIGk7XHJcbiBcdFx0dmFyIGo7XHJcbiBcdFx0dmFyIG1vZHVsZTtcclxuIFx0XHR2YXIgbW9kdWxlSWQ7XHJcbiBcdFxyXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFxyXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XHJcbiBcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXHJcbiBcdFx0XHRcdFx0aWQ6IGlkXHJcbiBcdFx0XHRcdH07XHJcbiBcdFx0XHR9KTtcclxuIFx0XHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XHJcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcclxuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZS5ob3QuX21haW4pIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXHJcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZighcGFyZW50KSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcclxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXHJcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcclxuIFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcclxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxyXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcclxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcclxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xyXG4gXHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiKTtcclxuIFx0XHR9O1xyXG4gXHRcclxuIFx0XHRmb3IodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQ7XHJcbiBcdFx0XHRcdGlmKGhvdFVwZGF0ZVtpZF0pIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XHJcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXHJcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcclxuIFx0XHRcdFx0XHR9O1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XHJcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcclxuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XHJcbiBcdFx0XHRcdGlmKHJlc3VsdC5jaGFpbikge1xyXG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRzd2l0Y2gocmVzdWx0LnR5cGUpIHtcclxuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGlmKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBjaGFpbkluZm8pO1xyXG4gXHRcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XHJcbiBcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xyXG4gXHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXHJcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIiBpbiBcIiArIHJlc3VsdC5wYXJlbnRJZCArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vblVuYWNjZXB0ZWQpXHJcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mbyk7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcclxuIFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMub25BY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XHJcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcclxuIFx0XHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkRpc3Bvc2VkKVxyXG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcclxuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XHJcbiBcdFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0XHRkZWZhdWx0OlxyXG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihhYm9ydEVycm9yKSB7XHJcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKGRvQXBwbHkpIHtcclxuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHRcdFx0XHRmb3IobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcclxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYoZG9EaXNwb3NlKSB7XHJcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcclxuIFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XHJcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXHJcbiBcdFx0XHRcdH0pO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcclxuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XHJcbiBcdFx0XHRpZihob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcclxuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH0pO1xyXG4gXHRcclxuIFx0XHR2YXIgaWR4O1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdGlmKCFtb2R1bGUpIGNvbnRpbnVlO1xyXG4gXHRcclxuIFx0XHRcdHZhciBkYXRhID0ge307XHJcbiBcdFxyXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXHJcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xyXG4gXHRcdFx0XHRjYihkYXRhKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcclxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXHJcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHJcbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxyXG4gXHRcdFx0Zm9yKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIHtcclxuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxyXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xyXG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcclxuIFx0XHRmb3IobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUpIHtcclxuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0XHRmb3IoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xyXG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xyXG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0XHRpZihpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcihtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xyXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XHJcbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0aWYobW9kdWxlKSB7XHJcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xyXG4gXHRcdFx0XHRcdFx0aWYoY2IpIHtcclxuIFx0XHRcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGZvcihpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XHJcbiBcdFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcclxuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcihpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xyXG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XHJcbiBcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xyXG4gXHRcdFx0XHRcdH0gY2F0Y2goZXJyMikge1xyXG4gXHRcdFx0XHRcdFx0aWYob3B0aW9ucy5vbkVycm9yZWQpIHtcclxuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXHJcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxyXG4gXHRcdFx0XHRcdFx0XHRcdG9yZ2luYWxFcnJvcjogZXJyLCAvLyBUT0RPIHJlbW92ZSBpbiB3ZWJwYWNrIDRcclxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcclxuIFx0XHRcdFx0XHRcdFx0fSk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjI7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0XHRpZihvcHRpb25zLm9uRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xyXG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcclxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXHJcbiBcdFx0XHRcdFx0XHR9KTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0aWYoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXHJcbiBcdFx0aWYoZXJyb3IpIHtcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XHJcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH0pO1xyXG4gXHR9XHJcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDExKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTk3NzljYWY3NjM4ODcxYjZlYWIiLCJpbXBvcnQgaW5zZXJ0SW1hZ2UgZnJvbSAnLi9pbnNlcnRJbWFnZSdcbmltcG9ydCBmb250U2l6ZSBmcm9tICcuL2ZvbnRTaXplJ1xuaW1wb3J0IHBhc3RlIGZyb20gJy4vcGFzdGUnXG5pbXBvcnQgZW50ZXIgZnJvbSAnLi9lbnRlcidcbmltcG9ydCB1bmRlcmxpbmUgZnJvbSAnLi91bmRlcmxpbmUnXG5pbXBvcnQgc3RyaWtlVGhyb3VnaCBmcm9tICcuL3N0cmlrZVRocm91Z2gnXG5pbXBvcnQgaXRhbGljIGZyb20gJy4vaXRhbGljJ1xuaW1wb3J0IGJvbGQgZnJvbSAnLi9ib2xkJ1xuaW1wb3J0IHF1b3RlIGZyb20gJy4vcXVvdGUnXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQga2V5ZG93biBmcm9tICcuL2tleWRvd24nXG5pbXBvcnQgZGVsZXRlTW9kdWxlIGZyb20gJy4vZGVsZXRlJ1xuaW1wb3J0IGp1c3RpZnlSaWdodCBmcm9tICcuL2p1c3RpZnlSaWdodCdcbmltcG9ydCBqdXN0aWZ5TGVmdCBmcm9tICcuL2p1c3RpZnlMZWZ0J1xuaW1wb3J0IGp1c3RpZnlDZW50ZXIgZnJvbSAnLi9qdXN0aWZ5Q2VudGVyJ1xuaW1wb3J0IHtpc09ian0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmNvbnN0IGNvbW1hbmRzID0ge1xuICAvKlxuICAgKiBhZGQgYSBzdHlsZSBhdHRyaWJ1dGUgaW4gcmFuZ2UoaGF2ZSBidWcpXG4gICAqIEBwYXJhbSB7b2JqfSBhcmcgaW5jbHVkZVxuICAgKiAgICAgIGtleTogc3R5bGUgbmFtZVxuICAgKiAgICAgIHZhbHVlOiBzdHlsZSB2YWx1ZVxuICAgKiovXG4gIGFkZFN0eWxlIChyaCwgYXJnKSB7XG4gICAgZnVuY3Rpb24gZG9BZGQobm9kZSkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKHN0eWxlTmFtZSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGVbc3R5bGVOYW1lXSA9IGFyZ1tzdHlsZU5hbWVdXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghaXNPYmooYXJnKSkgcmV0dXJuXG4gICAgY29uc3QgdGV4dE5vZGVzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgaWYgKCF0ZXh0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgZG9BZGQobm9kZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkICYmIHRleHROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBub2RlID0gdGV4dE5vZGVzWzBdLnBhcmVudE5vZGVcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7dGFnOiAncCd9KVxuICAgICAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Tm9kZXNbMF0ubm9kZVZhbHVlXG4gICAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0Tm9kZXNbMF0pXG4gICAgICAgICAgZG9BZGQobmV3Um93KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGRvQWRkKG5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dE5vZGVzLmxlbmd0aCA9PT0gMSAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgICAmJiB0ZXh0Tm9kZXNbMF0gPT09IHJoLnJhbmdlLmVuZENvbnRhaW5lcikge1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSB0ZXh0Tm9kZXNbMF1cbiAgICAgIGlmIChyaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMFxuICAgICAgICAmJiByaC5yYW5nZS5lbmRPZmZzZXQgPT09IHRleHROb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgIGRvQWRkKHRleHROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhcbiAgICAgICAgcmgucmFuZ2Uuc3RhcnRPZmZzZXQsIHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIGRvQWRkKHNwYW4pXG4gICAgICBjb25zdCBmcm9udFBhcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KSlcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyb250UGFydCwgdGV4dE5vZGUpXG4gICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKHJoLnJhbmdlLmVuZE9mZnNldClcbiAgICAgIHJoLnJhbmdlLnNldFN0YXJ0KHNwYW4sIDApXG4gICAgICByaC5yYW5nZS5zZXRFbmQoc3BhbiwgMSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgICBpZiAocmgucmFuZ2Uuc3RhcnRPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgcmguaXNJbmxpbmVFbGVtZW50KHRleHROb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICAgICAgdGV4dE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgdGV4dE5vZGUpXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKFxuICAgICAgICAgIDAsIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0KVxuICAgICAgICBkb0FkZChzcGFuKVxuICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCB0ZXh0Tm9kZSlcbiAgICAgICAgcmgucmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHRleHROb2RlID09PSByaC5yYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKHJoLnJhbmdlLmVuZE9mZnNldCA9PT0gdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRleHROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgZG9BZGQodGV4dE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgZG9BZGQoc3BhbilcbiAgICAgICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhyaC5yYW5nZS5lbmRPZmZzZXQpXG4gICAgICAgIGRvQWRkKHNwYW4pXG4gICAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKVxuICAgICAgICByaC5yYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgdGV4dE5vZGUudGV4dENvbnRlbnQubGVuZ3RoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIHJoLmlzSW5saW5lRWxlbWVudCh0ZXh0Tm9kZS5wYXJlbnROb2RlKSkge1xuICAgICAgICBkb0FkZCh0ZXh0Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgZG9BZGQoc3BhbilcbiAgICAgIHRleHROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIHRleHROb2RlKVxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcbiAgICB9KVxuICAgIHJldHVyblxuICB9LFxuICAnZm9ybWF0QmxvY2snIChyaCwgYXJnKSB7XG4gICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gaGFja1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZylcbiAgICByaC5yYW5nZS5zdXJyb3VuZENvbnRlbnRzKGVsZW1lbnQpXG4gICAgcmV0dXJuXG4gIH0sXG4gICdsaW5lSGVpZ2h0JyAocmgsIGFyZykge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIHRleHROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50QmxvY2sgPSByaC5nZXRQYXJlbnRCbG9ja05vZGUodGV4dE5vZGUpXG4gICAgICBpZiAocGFyZW50QmxvY2spIHtcbiAgICAgICAgcGFyZW50QmxvY2suc3R5bGUubGluZUhlaWdodCA9IGFyZ1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbnNlcnRIVE1MJyAocmgsIGFyZykge1xuICAgIGlmIChkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCBhcmcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29tbWFuZHNbJ2ZvcmNlSW5zZXJ0SFRNTCddKHJoLCBhcmcpXG4gIH0sXG4gIC8qXG4gICAqIGluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyByb3cncyBjaGlsZFxuICAgKiBmb3JjZUluc2VydEhUTUwgd291bGQgaW5zZXJ0IERPTSBhcyBhbmNob3JOb2RlIG9mIHJhbmdlIFxuICAgKiovXG4gICdmb3JjZUluc2VydEhUTUwnIChyaCwgYXJnKSB7XG4gICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICB2LmlubmVySFRNTCA9IGFyZ1xuICAgIGlmICh2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB2LmNoaWxkTm9kZXNbaV1cbiAgICAgICAgcmgucmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgICByaC5yYW5nZS5pbnNlcnROb2RlKGN1ck5vZGUpXG4gICAgICAgIHMuY29sbGFwc2UoY3VyTm9kZSwgMSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuXG4gIH0sXG4gICdpbmRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIG5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAvLyBjYW5jZWwgdG9kbyBpbmRlbnRcbiAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZG9JbmRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gd2VpZ2h0aW5nKHRleHQpIHtcbiAgICAgIGxldCBub2RlID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcih0ZXh0LCAnbGknKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsIGNvbnN0YW50LlJPV19UQUcpXG4gICAgICBpZiAobm9kZSAmJiAhbm9kZUxpc3QuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaChub2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvSW5kZW50KHR5cGUsIG5vZGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMSSc6XG4gICAgICAgICAgbGV0IGN1ckxldmVsID0gcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ1VMJykgfHwgcmguaG93TWFueU5lc3RBbmNlc3RvclNhbWVUYWcobm9kZSwgJ09MJylcbiAgICAgICAgICBpZiAoY3VyTGV2ZWwgPj0gY29uc3RhbnQuTUFYX0lOREVOVF9MRVZFTCkgYnJlYWtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5kZW50JywgZmFsc2UsIGFyZylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFOlxuICAgICAgICAgIGxldCBjdXJQZXJjZW50ID0gbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gfHwgJzAnXG4gICAgICAgICAgY3VyUGVyY2VudCA9IE51bWJlcihjdXJQZXJjZW50LnJlcGxhY2UoJyUnLCAnJykpXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuT1VUREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgaWYgKGN1clBlcmNlbnQgLyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCA+PSBjb25zdGFudC5NQVhfSU5ERU5UX0xFVkVMKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyAnJSdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9IGN1clBlcmNlbnQgKyBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVCArICclJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ291dGRlbnQnIChyaCwgYXJnKSB7XG4gICAgbGV0IG5vZGVMaXN0ID0gW11cbiAgICBpZiAocmgucmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICB3ZWlnaHRpbmcocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgd2VpZ2h0aW5nKHRleHQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBvdXRkZW50UmVzdWx0XG4gICAgbm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG91dGRlbnRSZXN1bHQgPSBkb091dGRlbnQobm9kZS5ub2RlTmFtZSwgbm9kZSlcbiAgICB9KVxuICAgIHJldHVybiBvdXRkZW50UmVzdWx0XG5cbiAgICBmdW5jdGlvbiB3ZWlnaHRpbmcodGV4dCkge1xuICAgICAgbGV0IG5vZGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKHRleHQsICdsaScpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgY29uc3RhbnQuUk9XX1RBRylcbiAgICAgIGlmIChub2RlICYmICFub2RlTGlzdC5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9PdXRkZW50KHR5cGUsIG5vZGUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMSSc6XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ291dGRlbnQnLCBmYWxzZSwgYXJnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgY29uc3RhbnQuUk9XX1RBR19VUFBFUkNBU0U6XG4gICAgICAgICAgbGV0IGN1clBlcmNlbnQgPSBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSB8fCAnMCdcbiAgICAgICAgICBjdXJQZXJjZW50ID0gTnVtYmVyKGN1clBlcmNlbnQucmVwbGFjZSgnJScsICcnKSlcbiAgICAgICAgICBpZiAoY3VyUGVyY2VudCA9PT0gMCkgcmV0dXJuICdOT19ORUVEX09VVERFTlQnXG4gICAgICAgICAgbm9kZS5zdHlsZVtjb25zdGFudC5JTkRFTlRfU1RZTEVfTkFNRV0gPSAnJ1xuICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuT1VUREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgbGV0IHRhcmdldEluZGVudCA9IGN1clBlcmNlbnQgLSBjb25zdGFudC5JTkRFTlRfV0lEVEhfUEVSQ0VOVFxuICAgICAgICAgIGlmICh0YXJnZXRJbmRlbnQgPCAwKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW2NvbnN0YW50LklOREVOVF9TVFlMRV9OQU1FXSA9ICcnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbY29uc3RhbnQuSU5ERU5UX1NUWUxFX05BTUVdID0gdGFyZ2V0SW5kZW50ICsgJyUnXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2luc2VydFVub3JkZXJlZExpc3QnIChyaCwgYXJnKSB7XG4gICAgLy8gZG8gbm90IGluc2VydCB1bCBpbnRvIGEgcm93XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbClcbiAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3coc3RhcnROb2RlKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcblxuICAgIC8vIHN0YXJ0Tm9kZSBpcyBlZGl0IHpvbmVcbiAgICBpZiAoIXJvdykgcmV0dXJuXG5cbiAgICByb3cgPSByaC5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHJvdywgY29uc3RhbnQuUk9XX1RBRylcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGxldCB1bCBiZSBhIHJvd1xuICAgICAgbGV0IG1heWJlSXNVbCA9IHJvdy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgaWYgKG1heWJlSXNVbCAmJiBtYXliZUlzVWwubm9kZU5hbWUgPT09ICdVTCcgJiYgcm93Lm5vZGVOYW1lICE9PSAnVUwnKSB7XG4gICAgICAgIHJvdy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtYXliZUlzVWwsIHJvdylcbiAgICAgICAgcm93ID0gbWF5YmVJc1VsXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBiclxuICAgICAgaWYgKHJvdy5uZXh0U2libGluZyAmJiByb3cubmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgcm93Lm5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93Lm5leHRTaWJsaW5nKVxuICAgICAgfVxuXG4gICAgICAvLyBzcGVjaWFsIHRyZWF0bWVudCBmb3IgdWw+bGksIHRvIGxldCBtb2R1bGUgaW5zcGVjdCBydW5cbiAgICAgIC8vIGlmIHVsIGFuZCBvbCBpcyBiaW5kIGludG8gYSBtb2R1bGUncyB0YWIsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZVxuICAgICAgaWYgKHMuaXNDb2xsYXBzZWQgJiYgIXJoLmVkaXRvci5tb2R1bGVzTWFwWyd1bCddLm1vZHVsZUluc3BlY3RSZXN1bHQpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydEhUTUwnXShyaCwgJyYjODIwMzsnKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFydE5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5hbmNob3JOb2RlXG4gICAgICBpZiAoc3RhcnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgIHJvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCByb3cub3V0ZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2luc2VydE9yZGVyZWRMaXN0JyAocmgsIGFyZykge1xuICAgIC8vIGRvIG5vdCBpbnNlcnQgdWwgaW50byBhIHJvd1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKVxuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgc3RhcnROb2RlID0gcmguZ2V0U2VsZWN0aW9uKCkuYW5jaG9yTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3coc3RhcnROb2RlKVxuXG4gICAgLy8gc3RhcnROb2RlIGlzIGVkaXQgem9uZVxuICAgIGlmICghcm93KSByZXR1cm5cblxuICAgIHJvdyA9IHJoLmNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUocm93LCBjb25zdGFudC5ST1dfVEFHKVxuXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gbGV0IHVsIGJlIGEgcm93XG4gICAgICBsZXQgbWF5YmVJc1VsID0gcm93LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBpZiAobWF5YmVJc1VsICYmIG1heWJlSXNVbC5ub2RlTmFtZSA9PT0gJ09MJyAmJiByb3cubm9kZU5hbWUgIT09ICdPTCcpIHtcbiAgICAgICAgcm93LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1heWJlSXNVbCwgcm93KVxuICAgICAgICByb3cgPSBtYXliZUlzVWxcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIGJyXG4gICAgICBpZiAocm93Lm5leHRTaWJsaW5nICYmIHJvdy5uZXh0U2libGluZy5ub2RlTmFtZSA9PT0gJ0JSJykge1xuICAgICAgICByb3cubmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cubmV4dFNpYmxpbmcpXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpYWwgdHJlYXRtZW50IGZvciB1bD5saSwgdG8gbGV0IG1vZHVsZSBpbnNwZWN0IHJ1blxuICAgICAgLy8gaWYgdWwgYW5kIG9sIGlzIGJpbmQgaW50byBhIG1vZHVsZSdzIHRhYiwgdGhpcyBzaG91bGQgYmUgY2hhbmdlXG4gICAgICBpZiAocy5pc0NvbGxhcHNlZCAmJiAhcmguZWRpdG9yLm1vZHVsZXNNYXBbJ29sJ10ubW9kdWxlSW5zcGVjdFJlc3VsdCkge1xuICAgICAgICBjb21tYW5kc1snaW5zZXJ0SFRNTCddKHJoLCAnJiM4MjAzOycpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXJ0Tm9kZSA9IHJoLmdldFNlbGVjdGlvbigpLmFuY2hvck5vZGVcbiAgICAgIGlmIChzdGFydE5vZGUgPT09IHJoLmVkaXRab25lKCkpIHtcbiAgICAgICAgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHJvdy5vdXRlckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jb21tYW5kcy5pbnNlcnRJbWFnZSA9IGluc2VydEltYWdlXG5jb21tYW5kcy5mb250U2l6ZSA9IGZvbnRTaXplXG5jb21tYW5kcy5kZWxldGUgPSBkZWxldGVNb2R1bGVcbmNvbW1hbmRzLnBhc3RlID0gcGFzdGVcbmNvbW1hbmRzLmVudGVyID0gZW50ZXJcbmNvbW1hbmRzLmtleWRvd24gPSBrZXlkb3duXG5jb21tYW5kcy51bmRlcmxpbmUgPSB1bmRlcmxpbmVcbmNvbW1hbmRzLnN0cmlrZVRocm91Z2ggPSBzdHJpa2VUaHJvdWdoXG5jb21tYW5kcy5ib2xkID0gYm9sZFxuY29tbWFuZHMuaXRhbGljID0gaXRhbGljXG5jb21tYW5kcy5qdXN0aWZ5TGVmdCA9IGp1c3RpZnlMZWZ0XG5jb21tYW5kcy5qdXN0aWZ5Q2VudGVyID0ganVzdGlmeUNlbnRlclxuY29tbWFuZHMuanVzdGlmeVJpZ2h0ID0ganVzdGlmeVJpZ2h0XG5PYmplY3QuYXNzaWduKGNvbW1hbmRzLCBxdW90ZSwgdG9kbylcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYX0lOREVOVF9MRVZFTDogMTAsXG4gIElOREVOVF9XSURUSF9QRVJDRU5UOiA4LFxuICBJTkRFTlRfU1RZTEVfTkFNRTogJ21hcmdpbkxlZnQnLFxuICBPVVRERU5UX1NUWUxFX05BTUU6ICdtYXJnaW5SaWdodCcsXG4gIFJPV19UQUc6ICdwJyxcbiAgUk9XX1RBR19VUFBFUkNBU0U6ICdQJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50LWNvbmZpZy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9udC10YWIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogNTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDZweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5mb250LXRhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogM3B4IDNweCAzcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggI2JjYmNiYyBzb2xpZDtcXG59XFxuLmZvbnQtdGFiLmZvcmJpZGRlbiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uZm9udC10YWIgLmljb24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4uZm9udC10YWIgLmRyb3Bkb3duIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbGVmdDogLTFweDtcXG4gIHRvcDogMjVweDtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZvbnQtdGFiIC5kcm9wZG93biBsaSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogNjJweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb250LXRhYiAuZHJvcGRvd24gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlciEuL3NyYy9tb2R1bGVzL2ZvbnQvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHNoYWRvdyBjbG9uZVxuICogQHBhcmFtIHNvdXJjZSAgICBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gZXh0ICAgICAgIGV4dGVuZGVkIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgbWl4aW4gPSAoc291cmNlID0ge30sIGV4dCA9IHt9KSA9PiB7XG4gICAgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIC8vIGZvciBkYXRhIGZ1bmN0aW9uXG4gICAgICAgIGlmIChrID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTcmMgPSBzb3VyY2Vba11cbiAgICAgICAgICAgIGNvbnN0IGRhdGFEZXNjID0gZXh0W2tdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFEZXNjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhU3JjICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVtrXSA9IGRhdGFEZXNjXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW2tdID0gKCkgPT4gbWl4aW4oZGF0YVNyYygpLCBkYXRhRGVzYygpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZVtrXSA9IGV4dFtrXVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc291cmNlXG59XG5cbmV4cG9ydCBjb25zdCBpc09iaiA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnNsaWNlKC03LCAtMSkgPT09ICdPYmplY3QnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbmRleC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmFiYnIsXFxuYWRkcmVzcyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnNhbXAsXFxuc21hbGwsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudmFyLFxcbmIsXFxuaSxcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMTtcXG59XFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5hIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuaW5zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZGVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5hYmJyW3RpdGxlXSxcXG5kZm5bdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDtcXG4gIGN1cnNvcjogaGVscDtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5ociB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5teS12dWUtZWRpdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5teS12dWUtZWRpdG9yIGltZyB7XFxuICBtYXgtd2lkdGg6IDk4JTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWQxZDE7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLnRhYiB7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC50YWIgLmljb24ge1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLnRvb2xiYXIgLnRhYnMgLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTJweCBBcmlhbCwgSGVsdmV0aWNhLCBUYWhvbWEsIFZlcmRhbmEsIFNhbnMtU2VyaWY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG46aG92ZXIge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXI6IDFweCAjYmNiY2JjIHNvbGlkO1xcbn1cXG4ubXktdnVlLWVkaXRvciAudG9vbGJhciAudGFicyAuYnRuLmhpZ2hMaWdodCB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcXG4gIGJvcmRlcjogMXB4ICNiY2JjYmMgc29saWQ7XFxufVxcbi5teS12dWUtZWRpdG9yIC50b29sYmFyIC50YWJzIC5idG4uZm9yYmlkZGVuIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgZm9udCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgYmxvY2txdW90ZSB7XFxuICBtaW4td2lkdGg6IDM4cHg7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci1xdW90ZV0ge1xcbiAgbWFyZ2luOiAxNHB4IDAgMTRweCAzNXB4O1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBbZGF0YS1lZGl0b3ItcXVvdGVdIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAtMjFweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXSBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogIzczNzM3MztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXF1b3RlXTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogMHB4IDRweCAwIC0yNHB4O1xcbiAgY29sb3I6ICNiN2I3Yjc7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCB1bCB1bCB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubXktdnVlLWVkaXRvciAuY29udGVudCBsaSB7XFxuICBtYXJnaW4tbGVmdDogNS41JTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5teS12dWUtZWRpdG9yIC5jb250ZW50IFtkYXRhLWVkaXRvci10b2RvXSBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDMuNXB4O1xcbiAgbGVmdDogMi41cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2NkYzljNTtcXG59XFxuLm15LXZ1ZS1lZGl0b3IgLmNvbnRlbnQgW2RhdGEtZWRpdG9yLXRvZG9dIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIhLi9zcmMvZWRpdG9yL3N0eWxlL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgbj10KCk7Zm9yKHZhciByIGluIG4pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09bltyXX19KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIGk9bltyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe24oNiksbig3KSxlLmV4cG9ydHM9big4KX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXshZnVuY3Rpb24obil7ZnVuY3Rpb24gcihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiBpKGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9bnVsbCx0aGlzLl92YWx1ZT1udWxsLHRoaXMuX2RlZmVycmVkcz1bXSxsKGUscihhLHRoaXMpLHIocyx0aGlzKSl9ZnVuY3Rpb24gbyhlKXt2YXIgdD10aGlzO3JldHVybiBudWxsPT09dGhpcy5fc3RhdGU/dm9pZCB0aGlzLl9kZWZlcnJlZHMucHVzaChlKTp2b2lkIGYoZnVuY3Rpb24oKXt2YXIgbj10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsPT09bilyZXR1cm4gdm9pZCh0Ll9zdGF0ZT9lLnJlc29sdmU6ZS5yZWplY3QpKHQuX3ZhbHVlKTt2YXIgcjt0cnl7cj1uKHQuX3ZhbHVlKX1jYXRjaChpKXtyZXR1cm4gdm9pZCBlLnJlamVjdChpKX1lLnJlc29sdmUocil9KX1mdW5jdGlvbiBhKGUpe3RyeXtpZihlPT09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYoZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSl7dmFyIHQ9ZS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpcmV0dXJuIHZvaWQgbChyKHQsZSkscihhLHRoaXMpLHIocyx0aGlzKSl9dGhpcy5fc3RhdGU9ITAsdGhpcy5fdmFsdWU9ZSx1LmNhbGwodGhpcyl9Y2F0Y2gobil7cy5jYWxsKHRoaXMsbil9fWZ1bmN0aW9uIHMoZSl7dGhpcy5fc3RhdGU9ITEsdGhpcy5fdmFsdWU9ZSx1LmNhbGwodGhpcyl9ZnVuY3Rpb24gdSgpe2Zvcih2YXIgZT0wLHQ9dGhpcy5fZGVmZXJyZWRzLmxlbmd0aDt0PmU7ZSsrKW8uY2FsbCh0aGlzLHRoaXMuX2RlZmVycmVkc1tlXSk7dGhpcy5fZGVmZXJyZWRzPW51bGx9ZnVuY3Rpb24gYyhlLHQsbixyKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLnJlc29sdmU9bix0aGlzLnJlamVjdD1yfWZ1bmN0aW9uIGwoZSx0LG4pe3ZhciByPSExO3RyeXtlKGZ1bmN0aW9uKGUpe3J8fChyPSEwLHQoZSkpfSxmdW5jdGlvbihlKXtyfHwocj0hMCxuKGUpKX0pfWNhdGNoKGkpe2lmKHIpcmV0dXJuO3I9ITAsbihpKX19dmFyIGY9XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdHx8ZnVuY3Rpb24oZSl7c2V0VGltZW91dChlLDEpfSxkPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX07aS5wcm90b3R5cGVbXCJjYXRjaFwiXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LGkucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybiBuZXcgaShmdW5jdGlvbihyLGkpe28uY2FsbChuLG5ldyBjKGUsdCxyLGkpKX0pfSxpLmFsbD1mdW5jdGlvbigpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKDE9PT1hcmd1bWVudHMubGVuZ3RoJiZkKGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cyk7cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gcihvLGEpe3RyeXtpZihhJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgcz1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgcylyZXR1cm4gdm9pZCBzLmNhbGwoYSxmdW5jdGlvbihlKXtyKG8sZSl9LG4pfWVbb109YSwwPT09LS1pJiZ0KGUpfWNhdGNoKHUpe24odSl9fWlmKDA9PT1lLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciBpPWUubGVuZ3RoLG89MDtvPGUubGVuZ3RoO28rKylyKG8sZVtvXSl9KX0saS5yZXNvbHZlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZS5jb25zdHJ1Y3Rvcj09PWk/ZTpuZXcgaShmdW5jdGlvbih0KXt0KGUpfSl9LGkucmVqZWN0PWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe24oZSl9KX0saS5yYWNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgaShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0wLGk9ZS5sZW5ndGg7aT5yO3IrKyllW3JdLnRoZW4odCxuKX0pfSxpLl9zZXRJbW1lZGlhdGVGbj1mdW5jdGlvbihlKXtmPWV9LGkucHJvdG90eXBlLmFsd2F5cz1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIHQucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbn0pfSxmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3Rocm93IG59KX0pfSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmZS5leHBvcnRzP2UuZXhwb3J0cz1pOm4uUHJvbWlzZXx8KG4uUHJvbWlzZT1pKX0odGhpcyl9KS5jYWxsKHQsbigyKS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUscil7ZnVuY3Rpb24gaShlLHQpe3RoaXMuX2lkPWUsdGhpcy5fY2xlYXJGbj10fXZhciBvPW4oMykubmV4dFRpY2ssYT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkscz1BcnJheS5wcm90b3R5cGUuc2xpY2UsdT17fSxjPTA7dC5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKGEuY2FsbChzZXRUaW1lb3V0LHdpbmRvdyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LHQuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkoYS5jYWxsKHNldEludGVydmFsLHdpbmRvdyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSx0LmNsZWFyVGltZW91dD10LmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24oZSl7ZS5jbG9zZSgpfSxpLnByb3RvdHlwZS51bnJlZj1pLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LGkucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdyx0aGlzLl9pZCl9LHQuZW5yb2xsPWZ1bmN0aW9uKGUsdCl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PXR9LHQudW5lbnJvbGw9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpLGUuX2lkbGVUaW1lb3V0PS0xfSx0Ll91bnJlZkFjdGl2ZT10LmFjdGl2ZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCk7dmFyIHQ9ZS5faWRsZVRpbWVvdXQ7dD49MCYmKGUuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9LHQpKX0sdC5zZXRJbW1lZGlhdGU9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOmZ1bmN0aW9uKGUpe3ZhciBuPWMrKyxyPWFyZ3VtZW50cy5sZW5ndGg8Mj8hMTpzLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiB1W25dPSEwLG8oZnVuY3Rpb24oKXt1W25dJiYocj9lLmFwcGx5KG51bGwscik6ZS5jYWxsKG51bGwpLHQuY2xlYXJJbW1lZGlhdGUobikpfSksbn0sdC5jbGVhckltbWVkaWF0ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3I6ZnVuY3Rpb24oZSl7ZGVsZXRlIHVbZV19fSkuY2FsbCh0LG4oMikuc2V0SW1tZWRpYXRlLG4oMikuY2xlYXJJbW1lZGlhdGUpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXtjPSExLGEubGVuZ3RoP3U9YS5jb25jYXQodSk6bD0tMSx1Lmxlbmd0aCYmcigpfWZ1bmN0aW9uIHIoKXtpZighYyl7dmFyIGU9c2V0VGltZW91dChuKTtjPSEwO2Zvcih2YXIgdD11Lmxlbmd0aDt0Oyl7Zm9yKGE9dSx1PVtdOysrbDx0OylhJiZhW2xdLnJ1bigpO2w9LTEsdD11Lmxlbmd0aH1hPW51bGwsYz0hMSxjbGVhclRpbWVvdXQoZSl9fWZ1bmN0aW9uIGkoZSx0KXt0aGlzLmZ1bj1lLHRoaXMuYXJyYXk9dH1mdW5jdGlvbiBvKCl7fXZhciBhLHM9ZS5leHBvcnRzPXt9LHU9W10sYz0hMSxsPS0xO3MubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTt1LnB1c2gobmV3IGkoZSx0KSksMSE9PXUubGVuZ3RofHxjfHxzZXRUaW1lb3V0KHIsMCl9LGkucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHMudGl0bGU9XCJicm93c2VyXCIscy5icm93c2VyPSEwLHMuZW52PXt9LHMuYXJndj1bXSxzLnZlcnNpb249XCJcIixzLnZlcnNpb25zPXt9LHMub249byxzLmFkZExpc3RlbmVyPW8scy5vbmNlPW8scy5vZmY9byxzLnJlbW92ZUxpc3RlbmVyPW8scy5yZW1vdmVBbGxMaXN0ZW5lcnM9byxzLmVtaXQ9byxzLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHMuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHMuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxzLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXt2YXIgZT1+bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSYmfm5hdmlnYXRvci52ZW5kb3IuaW5kZXhPZihcIkdvb2dsZVwiKSYmIX5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIik7cmV0dXJuIGUmJm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCspLykucG9wKCk8PTUzNHx8L01RUUJyb3dzZXIvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfXZhciByPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQmxvYiwhMH1jYXRjaChlKXtyZXR1cm4hMX19KCk/d2luZG93LkJsb2I6ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcod2luZG93LkJsb2JCdWlsZGVyfHx3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXJ8fHdpbmRvdy5NU0Jsb2JCdWlsZGVyfHx3aW5kb3cuTW96QmxvYkJ1aWxkZXIpO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7bi5hcHBlbmQoZSl9KSxuLmdldEJsb2IodD90LnR5cGU6dm9pZCAwKX0saT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzLG49W10saT1BcnJheSgyMSkuam9pbihcIi1cIikrKCtuZXcgRGF0ZSooMWUxNipNYXRoLnJhbmRvbSgpKSkudG9TdHJpbmcoMzYpLG89WE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ7dGhpcy5nZXRQYXJ0cz1mdW5jdGlvbigpe3JldHVybiBuLnRvU3RyaW5nKCl9LHRoaXMuYXBwZW5kPWZ1bmN0aW9uKGUsdCxyKXtuLnB1c2goXCItLVwiK2krJ1xcclxcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZSsnXCInKSx0IGluc3RhbmNlb2YgQmxvYj8obi5wdXNoKCc7IGZpbGVuYW1lPVwiJysocnx8XCJibG9iXCIpKydcIlxcclxcbkNvbnRlbnQtVHlwZTogJyt0LnR5cGUrXCJcXHJcXG5cXHJcXG5cIiksbi5wdXNoKHQpKTpuLnB1c2goXCJcXHJcXG5cXHJcXG5cIit0KSxuLnB1c2goXCJcXHJcXG5cIil9LHQrKyxYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihhKXt2YXIgcyx1LGM9dGhpczthPT09ZT8obi5wdXNoKFwiLS1cIitpK1wiLS1cXHJcXG5cIiksdT1uZXcgcihuKSxzPW5ldyBGaWxlUmVhZGVyLHMub25sb2FkPWZ1bmN0aW9uKCl7by5jYWxsKGMscy5yZXN1bHQpfSxzLm9uZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgZX0scy5yZWFkQXNBcnJheUJ1ZmZlcih1KSx0aGlzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PVwiK2kpLHQtLSwwPT10JiYoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9bykpOm8uY2FsbCh0aGlzLGEpfX12YXIgdD0wO3JldHVybiBlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEZvcm1EYXRhLnByb3RvdHlwZSksZX0oKTtlLmV4cG9ydHM9e0Jsb2I6cixGb3JtRGF0YTpuKCk/aTpGb3JtRGF0YX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuISFlLmV4aWZkYXRhfWZ1bmN0aW9uIG8oZSx0KXt0PXR8fGUubWF0Y2goL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9pbSlbMV18fFwiXCIsZT1lLnJlcGxhY2UoL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9naW0sXCJcIik7Zm9yKHZhciBuPWF0b2IoZSkscj1uLmxlbmd0aCxpPW5ldyBBcnJheUJ1ZmZlcihyKSxvPW5ldyBVaW50OEFycmF5KGkpLGE9MDtyPmE7YSsrKW9bYV09bi5jaGFyQ29kZUF0KGEpO3JldHVybiBpfWZ1bmN0aW9uIGEoZSx0KXt2YXIgbj1uZXcgWE1MSHR0cFJlcXVlc3Q7bi5vcGVuKFwiR0VUXCIsZSwhMCksbi5yZXNwb25zZVR5cGU9XCJibG9iXCIsbi5vbmxvYWQ9ZnVuY3Rpb24oZSl7KDIwMD09dGhpcy5zdGF0dXN8fDA9PT10aGlzLnN0YXR1cykmJnQodGhpcy5yZXNwb25zZSl9LG4uc2VuZCgpfWZ1bmN0aW9uIHMoZSx0KXtmdW5jdGlvbiBuKG4pe3ZhciByPXUobiksaT1jKG4pO2UuZXhpZmRhdGE9cnx8e30sZS5pcHRjZGF0YT1pfHx7fSx0JiZ0LmNhbGwoZSl9aWYoZS5zcmMpaWYoL15kYXRhXFw6L2kudGVzdChlLnNyYykpe3ZhciByPW8oZS5zcmMpO24ocil9ZWxzZSBpZigvXmJsb2JcXDovaS50ZXN0KGUuc3JjKSl7dmFyIGk9bmV3IEZpbGVSZWFkZXI7aS5vbmxvYWQ9ZnVuY3Rpb24oZSl7bihlLnRhcmdldC5yZXN1bHQpfSxhKGUuc3JjLGZ1bmN0aW9uKGUpe2kucmVhZEFzQXJyYXlCdWZmZXIoZSl9KX1lbHNle3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdDtzLm9ubG9hZD1mdW5jdGlvbigpezIwMD09dGhpcy5zdGF0dXN8fDA9PT10aGlzLnN0YXR1cz9uKHMucmVzcG9uc2UpOnQobmV3IEVycm9yKFwiQ291bGQgbm90IGxvYWQgaW1hZ2VcIikpLHM9bnVsbH0scy5vcGVuKFwiR0VUXCIsZS5zcmMsITApLHMucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIixzLnNlbmQobnVsbCl9ZWxzZSBpZih3aW5kb3cuRmlsZVJlYWRlciYmKGUgaW5zdGFuY2VvZiB3aW5kb3cuQmxvYnx8ZSBpbnN0YW5jZW9mIHdpbmRvdy5GaWxlKSl7dmFyIGk9bmV3IEZpbGVSZWFkZXI7aS5vbmxvYWQ9ZnVuY3Rpb24oZSl7cCYmY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIrZS50YXJnZXQucmVzdWx0LmJ5dGVMZW5ndGgpLG4oZS50YXJnZXQucmVzdWx0KX0saS5yZWFkQXNBcnJheUJ1ZmZlcihlKX19ZnVuY3Rpb24gdShlKXt2YXIgdD1uZXcgRGF0YVZpZXcoZSk7aWYocCYmY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIrZS5ieXRlTGVuZ3RoKSwyNTUhPXQuZ2V0VWludDgoMCl8fDIxNiE9dC5nZXRVaW50OCgxKSlyZXR1cm4gcCYmY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpLCExO2Zvcih2YXIgbixyPTIsaT1lLmJ5dGVMZW5ndGg7aT5yOyl7aWYoMjU1IT10LmdldFVpbnQ4KHIpKXJldHVybiBwJiZjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIG1hcmtlciBhdCBvZmZzZXQgXCIrcitcIiwgZm91bmQ6IFwiK3QuZ2V0VWludDgocikpLCExO2lmKG49dC5nZXRVaW50OChyKzEpLHAmJmNvbnNvbGUubG9nKG4pLDIyNT09bilyZXR1cm4gcCYmY29uc29sZS5sb2coXCJGb3VuZCAweEZGRTEgbWFya2VyXCIpLGcodCxyKzQsdC5nZXRVaW50MTYocisyKS0yKTtyKz0yK3QuZ2V0VWludDE2KHIrMil9fWZ1bmN0aW9uIGMoZSl7dmFyIHQ9bmV3IERhdGFWaWV3KGUpO2lmKHAmJmNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiK2UuYnl0ZUxlbmd0aCksMjU1IT10LmdldFVpbnQ4KDApfHwyMTYhPXQuZ2V0VWludDgoMSkpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKSwhMTtmb3IodmFyIG49MixyPWUuYnl0ZUxlbmd0aCxpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDU2PT09ZS5nZXRVaW50OCh0KSYmNjY9PT1lLmdldFVpbnQ4KHQrMSkmJjczPT09ZS5nZXRVaW50OCh0KzIpJiY3Nz09PWUuZ2V0VWludDgodCszKSYmND09PWUuZ2V0VWludDgodCs0KSYmND09PWUuZ2V0VWludDgodCs1KX07cj5uOyl7aWYoaSh0LG4pKXt2YXIgbz10LmdldFVpbnQ4KG4rNyk7byUyIT09MCYmKG8rPTEpLDA9PT1vJiYobz00KTt2YXIgYT1uKzgrbyxzPXQuZ2V0VWludDE2KG4rNitvKTtyZXR1cm4gbChlLGEscyl9bisrfX1mdW5jdGlvbiBsKGUsdCxuKXtmb3IodmFyIHIsaSxvLGEscyx1PW5ldyBEYXRhVmlldyhlKSxjPXt9LGw9dDt0K24+bDspMjg9PT11LmdldFVpbnQ4KGwpJiYyPT09dS5nZXRVaW50OChsKzEpJiYoYT11LmdldFVpbnQ4KGwrMiksYSBpbiBTJiYobz11LmdldEludDE2KGwrMykscz1vKzUsaT1TW2FdLHI9aCh1LGwrNSxvKSxjLmhhc093blByb3BlcnR5KGkpP2NbaV1pbnN0YW5jZW9mIEFycmF5P2NbaV0ucHVzaChyKTpjW2ldPVtjW2ldLHJdOmNbaV09cikpLGwrKztyZXR1cm4gY31mdW5jdGlvbiBmKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9ZS5nZXRVaW50MTYobiwhaSksYz17fTtmb3Iocz0wO3U+cztzKyspbz1uKzEyKnMrMixhPXJbZS5nZXRVaW50MTYobywhaSldLCFhJiZwJiZjb25zb2xlLmxvZyhcIlVua25vd24gdGFnOiBcIitlLmdldFVpbnQxNihvLCFpKSksY1thXT1kKGUsbyx0LG4saSk7cmV0dXJuIGN9ZnVuY3Rpb24gZChlLHQsbixyLGkpe3ZhciBvLGEscyx1LGMsbCxmPWUuZ2V0VWludDE2KHQrMiwhaSksZD1lLmdldFVpbnQzMih0KzQsIWkpLGc9ZS5nZXRVaW50MzIodCs4LCFpKStuO3N3aXRjaChmKXtjYXNlIDE6Y2FzZSA3OmlmKDE9PWQpcmV0dXJuIGUuZ2V0VWludDgodCs4LCFpKTtmb3Iobz1kPjQ/Zzp0KzgsYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0VWludDgobyt1KTtyZXR1cm4gYTtjYXNlIDI6cmV0dXJuIG89ZD40P2c6dCs4LGgoZSxvLGQtMSk7Y2FzZSAzOmlmKDE9PWQpcmV0dXJuIGUuZ2V0VWludDE2KHQrOCwhaSk7Zm9yKG89ZD4yP2c6dCs4LGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldFVpbnQxNihvKzIqdSwhaSk7cmV0dXJuIGE7Y2FzZSA0OmlmKDE9PWQpcmV0dXJuIGUuZ2V0VWludDMyKHQrOCwhaSk7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYVt1XT1lLmdldFVpbnQzMihnKzQqdSwhaSk7cmV0dXJuIGE7Y2FzZSA1OmlmKDE9PWQpcmV0dXJuIGM9ZS5nZXRVaW50MzIoZywhaSksbD1lLmdldFVpbnQzMihnKzQsIWkpLHM9bmV3IE51bWJlcihjL2wpLHMubnVtZXJhdG9yPWMscy5kZW5vbWluYXRvcj1sLHM7Zm9yKGE9W10sdT0wO2Q+dTt1KyspYz1lLmdldFVpbnQzMihnKzgqdSwhaSksbD1lLmdldFVpbnQzMihnKzQrOCp1LCFpKSxhW3VdPW5ldyBOdW1iZXIoYy9sKSxhW3VdLm51bWVyYXRvcj1jLGFbdV0uZGVub21pbmF0b3I9bDtyZXR1cm4gYTtjYXNlIDk6aWYoMT09ZClyZXR1cm4gZS5nZXRJbnQzMih0KzgsIWkpO2ZvcihhPVtdLHU9MDtkPnU7dSsrKWFbdV09ZS5nZXRJbnQzMihnKzQqdSwhaSk7cmV0dXJuIGE7Y2FzZSAxMDppZigxPT1kKXJldHVybiBlLmdldEludDMyKGcsIWkpL2UuZ2V0SW50MzIoZys0LCFpKTtmb3IoYT1bXSx1PTA7ZD51O3UrKylhW3VdPWUuZ2V0SW50MzIoZys4KnUsIWkpL2UuZ2V0SW50MzIoZys0KzgqdSwhaSk7cmV0dXJuIGF9fWZ1bmN0aW9uIGgoZSx0LG4pe3ZhciByLGk9XCJcIjtmb3Iocj10O3Qrbj5yO3IrKylpKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGUuZ2V0VWludDgocikpO3JldHVybiBpfWZ1bmN0aW9uIGcoZSx0KXtpZihcIkV4aWZcIiE9aChlLHQsNCkpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IHZhbGlkIEVYSUYgZGF0YSEgXCIraChlLHQsNCkpLCExO3ZhciBuLHIsaSxvLGEscz10KzY7aWYoMTg3NjE9PWUuZ2V0VWludDE2KHMpKW49ITE7ZWxzZXtpZigxOTc4OSE9ZS5nZXRVaW50MTYocykpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKG5vIDB4NDk0OSBvciAweDRENEQpXCIpLCExO249ITB9aWYoNDIhPWUuZ2V0VWludDE2KHMrMiwhbikpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKG5vIDB4MDAyQSlcIiksITE7dmFyIHU9ZS5nZXRVaW50MzIocys0LCFuKTtpZig4PnUpcmV0dXJuIHAmJmNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKEZpcnN0IG9mZnNldCBsZXNzIHRoYW4gOClcIixlLmdldFVpbnQzMihzKzQsIW4pKSwhMTtpZihyPWYoZSxzLHMrdSx2LG4pLHIuRXhpZklGRFBvaW50ZXIpe289ZihlLHMscytyLkV4aWZJRkRQb2ludGVyLHcsbik7Zm9yKGkgaW4gbyl7c3dpdGNoKGkpe2Nhc2VcIkxpZ2h0U291cmNlXCI6Y2FzZVwiRmxhc2hcIjpjYXNlXCJNZXRlcmluZ01vZGVcIjpjYXNlXCJFeHBvc3VyZVByb2dyYW1cIjpjYXNlXCJTZW5zaW5nTWV0aG9kXCI6Y2FzZVwiU2NlbmVDYXB0dXJlVHlwZVwiOmNhc2VcIlNjZW5lVHlwZVwiOmNhc2VcIkN1c3RvbVJlbmRlcmVkXCI6Y2FzZVwiV2hpdGVCYWxhbmNlXCI6Y2FzZVwiR2FpbkNvbnRyb2xcIjpjYXNlXCJDb250cmFzdFwiOmNhc2VcIlNhdHVyYXRpb25cIjpjYXNlXCJTaGFycG5lc3NcIjpjYXNlXCJTdWJqZWN0RGlzdGFuY2VSYW5nZVwiOmNhc2VcIkZpbGVTb3VyY2VcIjpvW2ldPWJbaV1bb1tpXV07YnJlYWs7Y2FzZVwiRXhpZlZlcnNpb25cIjpjYXNlXCJGbGFzaHBpeFZlcnNpb25cIjpvW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUob1tpXVswXSxvW2ldWzFdLG9baV1bMl0sb1tpXVszXSk7YnJlYWs7Y2FzZVwiQ29tcG9uZW50c0NvbmZpZ3VyYXRpb25cIjpvW2ldPWIuQ29tcG9uZW50c1tvW2ldWzBdXStiLkNvbXBvbmVudHNbb1tpXVsxXV0rYi5Db21wb25lbnRzW29baV1bMl1dK2IuQ29tcG9uZW50c1tvW2ldWzNdXX1yW2ldPW9baV19fWlmKHIuR1BTSW5mb0lGRFBvaW50ZXIpe2E9ZihlLHMscytyLkdQU0luZm9JRkRQb2ludGVyLHksbik7Zm9yKGkgaW4gYSl7c3dpdGNoKGkpe2Nhc2VcIkdQU1ZlcnNpb25JRFwiOmFbaV09YVtpXVswXStcIi5cIithW2ldWzFdK1wiLlwiK2FbaV1bMl0rXCIuXCIrYVtpXVszXX1yW2ldPWFbaV19fXJldHVybiByfXZhciBwPSExLG09ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBtP2U6dGhpcyBpbnN0YW5jZW9mIG0/dm9pZCh0aGlzLkVYSUZ3cmFwcGVkPWUpOm5ldyBtKGUpfTtcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmZS5leHBvcnRzJiYodD1lLmV4cG9ydHM9bSksdC5FWElGPW07dmFyIHc9bS5UYWdzPXszNjg2NDpcIkV4aWZWZXJzaW9uXCIsNDA5NjA6XCJGbGFzaHBpeFZlcnNpb25cIiw0MDk2MTpcIkNvbG9yU3BhY2VcIiw0MDk2MjpcIlBpeGVsWERpbWVuc2lvblwiLDQwOTYzOlwiUGl4ZWxZRGltZW5zaW9uXCIsMzcxMjE6XCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiLDM3MTIyOlwiQ29tcHJlc3NlZEJpdHNQZXJQaXhlbFwiLDM3NTAwOlwiTWFrZXJOb3RlXCIsMzc1MTA6XCJVc2VyQ29tbWVudFwiLDQwOTY0OlwiUmVsYXRlZFNvdW5kRmlsZVwiLDM2ODY3OlwiRGF0ZVRpbWVPcmlnaW5hbFwiLDM2ODY4OlwiRGF0ZVRpbWVEaWdpdGl6ZWRcIiwzNzUyMDpcIlN1YnNlY1RpbWVcIiwzNzUyMTpcIlN1YnNlY1RpbWVPcmlnaW5hbFwiLDM3NTIyOlwiU3Vic2VjVGltZURpZ2l0aXplZFwiLDMzNDM0OlwiRXhwb3N1cmVUaW1lXCIsMzM0Mzc6XCJGTnVtYmVyXCIsMzQ4NTA6XCJFeHBvc3VyZVByb2dyYW1cIiwzNDg1MjpcIlNwZWN0cmFsU2Vuc2l0aXZpdHlcIiwzNDg1NTpcIklTT1NwZWVkUmF0aW5nc1wiLDM0ODU2OlwiT0VDRlwiLDM3Mzc3OlwiU2h1dHRlclNwZWVkVmFsdWVcIiwzNzM3ODpcIkFwZXJ0dXJlVmFsdWVcIiwzNzM3OTpcIkJyaWdodG5lc3NWYWx1ZVwiLDM3MzgwOlwiRXhwb3N1cmVCaWFzXCIsMzczODE6XCJNYXhBcGVydHVyZVZhbHVlXCIsMzczODI6XCJTdWJqZWN0RGlzdGFuY2VcIiwzNzM4MzpcIk1ldGVyaW5nTW9kZVwiLDM3Mzg0OlwiTGlnaHRTb3VyY2VcIiwzNzM4NTpcIkZsYXNoXCIsMzczOTY6XCJTdWJqZWN0QXJlYVwiLDM3Mzg2OlwiRm9jYWxMZW5ndGhcIiw0MTQ4MzpcIkZsYXNoRW5lcmd5XCIsNDE0ODQ6XCJTcGF0aWFsRnJlcXVlbmN5UmVzcG9uc2VcIiw0MTQ4NjpcIkZvY2FsUGxhbmVYUmVzb2x1dGlvblwiLDQxNDg3OlwiRm9jYWxQbGFuZVlSZXNvbHV0aW9uXCIsNDE0ODg6XCJGb2NhbFBsYW5lUmVzb2x1dGlvblVuaXRcIiw0MTQ5MjpcIlN1YmplY3RMb2NhdGlvblwiLDQxNDkzOlwiRXhwb3N1cmVJbmRleFwiLDQxNDk1OlwiU2Vuc2luZ01ldGhvZFwiLDQxNzI4OlwiRmlsZVNvdXJjZVwiLDQxNzI5OlwiU2NlbmVUeXBlXCIsNDE3MzA6XCJDRkFQYXR0ZXJuXCIsNDE5ODU6XCJDdXN0b21SZW5kZXJlZFwiLDQxOTg2OlwiRXhwb3N1cmVNb2RlXCIsNDE5ODc6XCJXaGl0ZUJhbGFuY2VcIiw0MTk4ODpcIkRpZ2l0YWxab29tUmF0aW9uXCIsNDE5ODk6XCJGb2NhbExlbmd0aEluMzVtbUZpbG1cIiw0MTk5MDpcIlNjZW5lQ2FwdHVyZVR5cGVcIiw0MTk5MTpcIkdhaW5Db250cm9sXCIsNDE5OTI6XCJDb250cmFzdFwiLDQxOTkzOlwiU2F0dXJhdGlvblwiLDQxOTk0OlwiU2hhcnBuZXNzXCIsNDE5OTU6XCJEZXZpY2VTZXR0aW5nRGVzY3JpcHRpb25cIiw0MTk5NjpcIlN1YmplY3REaXN0YW5jZVJhbmdlXCIsNDA5NjU6XCJJbnRlcm9wZXJhYmlsaXR5SUZEUG9pbnRlclwiLDQyMDE2OlwiSW1hZ2VVbmlxdWVJRFwifSx2PW0uVGlmZlRhZ3M9ezI1NjpcIkltYWdlV2lkdGhcIiwyNTc6XCJJbWFnZUhlaWdodFwiLDM0NjY1OlwiRXhpZklGRFBvaW50ZXJcIiwzNDg1MzpcIkdQU0luZm9JRkRQb2ludGVyXCIsNDA5NjU6XCJJbnRlcm9wZXJhYmlsaXR5SUZEUG9pbnRlclwiLDI1ODpcIkJpdHNQZXJTYW1wbGVcIiwyNTk6XCJDb21wcmVzc2lvblwiLDI2MjpcIlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25cIiwyNzQ6XCJPcmllbnRhdGlvblwiLDI3NzpcIlNhbXBsZXNQZXJQaXhlbFwiLDI4NDpcIlBsYW5hckNvbmZpZ3VyYXRpb25cIiw1MzA6XCJZQ2JDclN1YlNhbXBsaW5nXCIsNTMxOlwiWUNiQ3JQb3NpdGlvbmluZ1wiLDI4MjpcIlhSZXNvbHV0aW9uXCIsMjgzOlwiWVJlc29sdXRpb25cIiwyOTY6XCJSZXNvbHV0aW9uVW5pdFwiLDI3MzpcIlN0cmlwT2Zmc2V0c1wiLDI3ODpcIlJvd3NQZXJTdHJpcFwiLDI3OTpcIlN0cmlwQnl0ZUNvdW50c1wiLDUxMzpcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdFwiLDUxNDpcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdExlbmd0aFwiLDMwMTpcIlRyYW5zZmVyRnVuY3Rpb25cIiwzMTg6XCJXaGl0ZVBvaW50XCIsMzE5OlwiUHJpbWFyeUNocm9tYXRpY2l0aWVzXCIsNTI5OlwiWUNiQ3JDb2VmZmljaWVudHNcIiw1MzI6XCJSZWZlcmVuY2VCbGFja1doaXRlXCIsMzA2OlwiRGF0ZVRpbWVcIiwyNzA6XCJJbWFnZURlc2NyaXB0aW9uXCIsMjcxOlwiTWFrZVwiLDI3MjpcIk1vZGVsXCIsMzA1OlwiU29mdHdhcmVcIiwzMTU6XCJBcnRpc3RcIiwzMzQzMjpcIkNvcHlyaWdodFwifSx5PW0uR1BTVGFncz17MDpcIkdQU1ZlcnNpb25JRFwiLDE6XCJHUFNMYXRpdHVkZVJlZlwiLDI6XCJHUFNMYXRpdHVkZVwiLDM6XCJHUFNMb25naXR1ZGVSZWZcIiw0OlwiR1BTTG9uZ2l0dWRlXCIsNTpcIkdQU0FsdGl0dWRlUmVmXCIsNjpcIkdQU0FsdGl0dWRlXCIsNzpcIkdQU1RpbWVTdGFtcFwiLDg6XCJHUFNTYXRlbGxpdGVzXCIsOTpcIkdQU1N0YXR1c1wiLDEwOlwiR1BTTWVhc3VyZU1vZGVcIiwxMTpcIkdQU0RPUFwiLDEyOlwiR1BTU3BlZWRSZWZcIiwxMzpcIkdQU1NwZWVkXCIsMTQ6XCJHUFNUcmFja1JlZlwiLDE1OlwiR1BTVHJhY2tcIiwxNjpcIkdQU0ltZ0RpcmVjdGlvblJlZlwiLDE3OlwiR1BTSW1nRGlyZWN0aW9uXCIsMTg6XCJHUFNNYXBEYXR1bVwiLDE5OlwiR1BTRGVzdExhdGl0dWRlUmVmXCIsMjA6XCJHUFNEZXN0TGF0aXR1ZGVcIiwyMTpcIkdQU0Rlc3RMb25naXR1ZGVSZWZcIiwyMjpcIkdQU0Rlc3RMb25naXR1ZGVcIiwyMzpcIkdQU0Rlc3RCZWFyaW5nUmVmXCIsMjQ6XCJHUFNEZXN0QmVhcmluZ1wiLDI1OlwiR1BTRGVzdERpc3RhbmNlUmVmXCIsMjY6XCJHUFNEZXN0RGlzdGFuY2VcIiwyNzpcIkdQU1Byb2Nlc3NpbmdNZXRob2RcIiwyODpcIkdQU0FyZWFJbmZvcm1hdGlvblwiLDI5OlwiR1BTRGF0ZVN0YW1wXCIsMzA6XCJHUFNEaWZmZXJlbnRpYWxcIn0sYj1tLlN0cmluZ1ZhbHVlcz17RXhwb3N1cmVQcm9ncmFtOnswOlwiTm90IGRlZmluZWRcIiwxOlwiTWFudWFsXCIsMjpcIk5vcm1hbCBwcm9ncmFtXCIsMzpcIkFwZXJ0dXJlIHByaW9yaXR5XCIsNDpcIlNodXR0ZXIgcHJpb3JpdHlcIiw1OlwiQ3JlYXRpdmUgcHJvZ3JhbVwiLDY6XCJBY3Rpb24gcHJvZ3JhbVwiLDc6XCJQb3J0cmFpdCBtb2RlXCIsODpcIkxhbmRzY2FwZSBtb2RlXCJ9LE1ldGVyaW5nTW9kZTp7MDpcIlVua25vd25cIiwxOlwiQXZlcmFnZVwiLDI6XCJDZW50ZXJXZWlnaHRlZEF2ZXJhZ2VcIiwzOlwiU3BvdFwiLDQ6XCJNdWx0aVNwb3RcIiw1OlwiUGF0dGVyblwiLDY6XCJQYXJ0aWFsXCIsMjU1OlwiT3RoZXJcIn0sTGlnaHRTb3VyY2U6ezA6XCJVbmtub3duXCIsMTpcIkRheWxpZ2h0XCIsMjpcIkZsdW9yZXNjZW50XCIsMzpcIlR1bmdzdGVuIChpbmNhbmRlc2NlbnQgbGlnaHQpXCIsNDpcIkZsYXNoXCIsOTpcIkZpbmUgd2VhdGhlclwiLDEwOlwiQ2xvdWR5IHdlYXRoZXJcIiwxMTpcIlNoYWRlXCIsMTI6XCJEYXlsaWdodCBmbHVvcmVzY2VudCAoRCA1NzAwIC0gNzEwMEspXCIsMTM6XCJEYXkgd2hpdGUgZmx1b3Jlc2NlbnQgKE4gNDYwMCAtIDU0MDBLKVwiLDE0OlwiQ29vbCB3aGl0ZSBmbHVvcmVzY2VudCAoVyAzOTAwIC0gNDUwMEspXCIsMTU6XCJXaGl0ZSBmbHVvcmVzY2VudCAoV1cgMzIwMCAtIDM3MDBLKVwiLDE3OlwiU3RhbmRhcmQgbGlnaHQgQVwiLDE4OlwiU3RhbmRhcmQgbGlnaHQgQlwiLDE5OlwiU3RhbmRhcmQgbGlnaHQgQ1wiLDIwOlwiRDU1XCIsMjE6XCJENjVcIiwyMjpcIkQ3NVwiLDIzOlwiRDUwXCIsMjQ6XCJJU08gc3R1ZGlvIHR1bmdzdGVuXCIsMjU1OlwiT3RoZXJcIn0sRmxhc2g6ezA6XCJGbGFzaCBkaWQgbm90IGZpcmVcIiwxOlwiRmxhc2ggZmlyZWRcIiw1OlwiU3Ryb2JlIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWRcIiw3OlwiU3Ryb2JlIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLDk6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlXCIsMTM6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsMTU6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiwxNjpcIkZsYXNoIGRpZCBub3QgZmlyZSwgY29tcHVsc29yeSBmbGFzaCBtb2RlXCIsMjQ6XCJGbGFzaCBkaWQgbm90IGZpcmUsIGF1dG8gbW9kZVwiLDI1OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZVwiLDI5OlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLDMxOlwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsMzI6XCJObyBmbGFzaCBmdW5jdGlvblwiLDY1OlwiRmxhc2ggZmlyZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw2OTpcIkZsYXNoIGZpcmVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsNzE6XCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsNzM6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsNzc6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsNzk6XCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIiw4OTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw5MzpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBub3QgZGV0ZWN0ZWQsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIiw5NTpcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwifSxTZW5zaW5nTWV0aG9kOnsxOlwiTm90IGRlZmluZWRcIiwyOlwiT25lLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIiwzOlwiVHdvLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIiw0OlwiVGhyZWUtY2hpcCBjb2xvciBhcmVhIHNlbnNvclwiLDU6XCJDb2xvciBzZXF1ZW50aWFsIGFyZWEgc2Vuc29yXCIsNzpcIlRyaWxpbmVhciBzZW5zb3JcIiw4OlwiQ29sb3Igc2VxdWVudGlhbCBsaW5lYXIgc2Vuc29yXCJ9LFNjZW5lQ2FwdHVyZVR5cGU6ezA6XCJTdGFuZGFyZFwiLDE6XCJMYW5kc2NhcGVcIiwyOlwiUG9ydHJhaXRcIiwzOlwiTmlnaHQgc2NlbmVcIn0sU2NlbmVUeXBlOnsxOlwiRGlyZWN0bHkgcGhvdG9ncmFwaGVkXCJ9LEN1c3RvbVJlbmRlcmVkOnswOlwiTm9ybWFsIHByb2Nlc3NcIiwxOlwiQ3VzdG9tIHByb2Nlc3NcIn0sV2hpdGVCYWxhbmNlOnswOlwiQXV0byB3aGl0ZSBiYWxhbmNlXCIsMTpcIk1hbnVhbCB3aGl0ZSBiYWxhbmNlXCJ9LEdhaW5Db250cm9sOnswOlwiTm9uZVwiLDE6XCJMb3cgZ2FpbiB1cFwiLDI6XCJIaWdoIGdhaW4gdXBcIiwzOlwiTG93IGdhaW4gZG93blwiLDQ6XCJIaWdoIGdhaW4gZG93blwifSxDb250cmFzdDp7MDpcIk5vcm1hbFwiLDE6XCJTb2Z0XCIsMjpcIkhhcmRcIn0sU2F0dXJhdGlvbjp7MDpcIk5vcm1hbFwiLDE6XCJMb3cgc2F0dXJhdGlvblwiLDI6XCJIaWdoIHNhdHVyYXRpb25cIn0sU2hhcnBuZXNzOnswOlwiTm9ybWFsXCIsMTpcIlNvZnRcIiwyOlwiSGFyZFwifSxTdWJqZWN0RGlzdGFuY2VSYW5nZTp7MDpcIlVua25vd25cIiwxOlwiTWFjcm9cIiwyOlwiQ2xvc2Ugdmlld1wiLDM6XCJEaXN0YW50IHZpZXdcIn0sRmlsZVNvdXJjZTp7MzpcIkRTQ1wifSxDb21wb25lbnRzOnswOlwiXCIsMTpcIllcIiwyOlwiQ2JcIiwzOlwiQ3JcIiw0OlwiUlwiLDU6XCJHXCIsNjpcIkJcIn19LFM9ezEyMDpcImNhcHRpb25cIiwxMTA6XCJjcmVkaXRcIiwyNTpcImtleXdvcmRzXCIsNTU6XCJkYXRlQ3JlYXRlZFwiLDgwOlwiYnlsaW5lXCIsODU6XCJieWxpbmVUaXRsZVwiLDEyMjpcImNhcHRpb25Xcml0ZXJcIiwxMDU6XCJoZWFkbGluZVwiLDExNjpcImNvcHlyaWdodFwiLDE1OlwiY2F0ZWdvcnlcIn07bS5nZXREYXRhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUgaW5zdGFuY2VvZiBJbWFnZXx8ZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpJiYhZS5jb21wbGV0ZT8hMToobihlKT90JiZ0LmNhbGwoZSk6cyhlLHQpLCEwKX0sbS5nZXRUYWc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbihlKT9lLmV4aWZkYXRhW3RdOnZvaWQgMH0sbS5nZXRBbGxUYWdzPWZ1bmN0aW9uKGUpe2lmKCFuKGUpKXJldHVybnt9O3ZhciB0LHI9ZS5leGlmZGF0YSxpPXt9O2Zvcih0IGluIHIpci5oYXNPd25Qcm9wZXJ0eSh0KSYmKGlbdF09clt0XSk7cmV0dXJuIGl9LG0ucHJldHR5PWZ1bmN0aW9uKGUpe2lmKCFuKGUpKXJldHVyblwiXCI7dmFyIHQscj1lLmV4aWZkYXRhLGk9XCJcIjtmb3IodCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihpKz1cIm9iamVjdFwiPT10eXBlb2Ygclt0XT9yW3RdaW5zdGFuY2VvZiBOdW1iZXI/dCtcIiA6IFwiK3JbdF0rXCIgW1wiK3JbdF0ubnVtZXJhdG9yK1wiL1wiK3JbdF0uZGVub21pbmF0b3IrXCJdXFxyXFxuXCI6dCtcIiA6IFtcIityW3RdLmxlbmd0aCtcIiB2YWx1ZXNdXFxyXFxuXCI6dCtcIiA6IFwiK3JbdF0rXCJcXHJcXG5cIik7cmV0dXJuIGl9LG0ucmVhZEZyb21CaW5hcnlGaWxlPWZ1bmN0aW9uKGUpe3JldHVybiB1KGUpfSxyPVtdLGk9ZnVuY3Rpb24oKXtyZXR1cm4gbX0uYXBwbHkodCxyKSwhKHZvaWQgMCE9PWkmJihlLmV4cG9ydHM9aSkpfSkuY2FsbCh0aGlzKX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihlKXt2YXIgdD1lLm5hdHVyYWxXaWR0aCxuPWUubmF0dXJhbEhlaWdodDtpZih0Km4+MTA0ODU3Nil7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyLndpZHRoPXIuaGVpZ2h0PTE7dmFyIGk9ci5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGkuZHJhd0ltYWdlKGUsLXQrMSwwKSwwPT09aS5nZXRJbWFnZURhdGEoMCwwLDEsMSkuZGF0YVszXX1yZXR1cm4hMX1mdW5jdGlvbiBvKGUsdCxuKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Iud2lkdGg9MSxyLmhlaWdodD1uO3ZhciBpPXIuZ2V0Q29udGV4dChcIjJkXCIpO2kuZHJhd0ltYWdlKGUsMCwwKTtmb3IodmFyIG89aS5nZXRJbWFnZURhdGEoMCwwLDEsbikuZGF0YSxhPTAscz1uLHU9bjt1PmE7KXt2YXIgYz1vWzQqKHUtMSkrM107MD09PWM/cz11OmE9dSx1PXMrYT4+MX12YXIgbD11L247cmV0dXJuIDA9PT1sPzE6bH1mdW5jdGlvbiBhKGUsdCxuKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiBzKGUscix0LG4pLHIudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLHQucXVhbGl0eXx8LjgpfWZ1bmN0aW9uIHMoZSx0LHIsaSl7dmFyIGE9ZS5uYXR1cmFsV2lkdGgscz1lLm5hdHVyYWxIZWlnaHQsYz1yLndpZHRoLGw9ci5oZWlnaHQsZj10LmdldENvbnRleHQoXCIyZFwiKTtmLnNhdmUoKSx1KHQsZixjLGwsci5vcmllbnRhdGlvbik7dmFyIGQ9bihlKTtkJiYoYS89MixzLz0yKTt2YXIgaD0xMDI0LGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtnLndpZHRoPWcuaGVpZ2h0PWg7Zm9yKHZhciBwPWcuZ2V0Q29udGV4dChcIjJkXCIpLG09aT9vKGUsYSxzKToxLHc9TWF0aC5jZWlsKGgqYy9hKSx2PU1hdGguY2VpbChoKmwvcy9tKSx5PTAsYj0wO3M+eTspe2Zvcih2YXIgUz0wLEk9MDthPlM7KXAuY2xlYXJSZWN0KDAsMCxoLGgpLHAuZHJhd0ltYWdlKGUsLVMsLXkpLGYuZHJhd0ltYWdlKGcsMCwwLGgsaCxJLGIsdyx2KSxTKz1oLEkrPXc7eSs9aCxiKz12fWYucmVzdG9yZSgpLGc9cD1udWxsfWZ1bmN0aW9uIHUoZSx0LG4scixpKXtzd2l0Y2goaSl7Y2FzZSA1OmNhc2UgNjpjYXNlIDc6Y2FzZSA4OmUud2lkdGg9cixlLmhlaWdodD1uO2JyZWFrO2RlZmF1bHQ6ZS53aWR0aD1uLGUuaGVpZ2h0PXJ9c3dpdGNoKGkpe2Nhc2UgMjp0LnRyYW5zbGF0ZShuLDApLHQuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSAzOnQudHJhbnNsYXRlKG4sciksdC5yb3RhdGUoTWF0aC5QSSk7YnJlYWs7Y2FzZSA0OnQudHJhbnNsYXRlKDAsciksdC5zY2FsZSgxLC0xKTticmVhaztjYXNlIDU6dC5yb3RhdGUoLjUqTWF0aC5QSSksdC5zY2FsZSgxLC0xKTticmVhaztjYXNlIDY6dC5yb3RhdGUoLjUqTWF0aC5QSSksdC50cmFuc2xhdGUoMCwtcik7YnJlYWs7Y2FzZSA3OnQucm90YXRlKC41Kk1hdGguUEkpLHQudHJhbnNsYXRlKG4sLXIpLHQuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSA4OnQucm90YXRlKC0uNSpNYXRoLlBJKSx0LnRyYW5zbGF0ZSgtbiwwKX19ZnVuY3Rpb24gYyhlKXtpZih3aW5kb3cuQmxvYiYmZSBpbnN0YW5jZW9mIEJsb2Ipe3ZhciB0PW5ldyBJbWFnZSxuPXdpbmRvdy5VUkwmJndpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMP3dpbmRvdy5VUkw6d2luZG93LndlYmtpdFVSTCYmd2luZG93LndlYmtpdFVSTC5jcmVhdGVPYmplY3RVUkw/d2luZG93LndlYmtpdFVSTDpudWxsO2lmKCFuKXRocm93IEVycm9yKFwiTm8gY3JlYXRlT2JqZWN0VVJMIGZ1bmN0aW9uIGZvdW5kIHRvIGNyZWF0ZSBibG9iIHVybFwiKTt0LnNyYz1uLmNyZWF0ZU9iamVjdFVSTChlKSx0aGlzLmJsb2I9ZSxlPXR9aWYoIWUubmF0dXJhbFdpZHRoJiYhZS5uYXR1cmFsSGVpZ2h0KXt2YXIgcj10aGlzO2Uub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9ci5pbWFnZUxvYWRMaXN0ZW5lcnM7aWYoZSl7ci5pbWFnZUxvYWRMaXN0ZW5lcnM9bnVsbDtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO24+dDt0KyspZVt0XSgpfX0sdGhpcy5pbWFnZUxvYWRMaXN0ZW5lcnM9W119dGhpcy5zcmNJbWFnZT1lfWMucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlLHQsbil7aWYodGhpcy5pbWFnZUxvYWRMaXN0ZW5lcnMpe3ZhciByPXRoaXM7cmV0dXJuIHZvaWQgdGhpcy5pbWFnZUxvYWRMaXN0ZW5lcnMucHVzaChmdW5jdGlvbigpe3IucmVuZGVyKGUsdCxuKX0pfXQ9dHx8e307dmFyIGk9dGhpcy5zcmNJbWFnZSxvPWkuc3JjLHU9by5sZW5ndGgsYz1pLm5hdHVyYWxXaWR0aCxsPWkubmF0dXJhbEhlaWdodCxmPXQud2lkdGgsZD10LmhlaWdodCxoPXQubWF4V2lkdGgsZz10Lm1heEhlaWdodCxwPXRoaXMuYmxvYiYmXCJpbWFnZS9qcGVnXCI9PT10aGlzLmJsb2IudHlwZXx8MD09PW8uaW5kZXhPZihcImRhdGE6aW1hZ2UvanBlZ1wiKXx8by5pbmRleE9mKFwiLmpwZ1wiKT09PXUtNHx8by5pbmRleE9mKFwiLmpwZWdcIik9PT11LTU7ZiYmIWQ/ZD1sKmYvYzw8MDpkJiYhZj9mPWMqZC9sPDwwOihmPWMsZD1sKSxoJiZmPmgmJihmPWgsZD1sKmYvYzw8MCksZyYmZD5nJiYoZD1nLGY9YypkL2w8PDApO3ZhciBtPXt3aWR0aDpmLGhlaWdodDpkfTtmb3IodmFyIHcgaW4gdCltW3ddPXRbd107dmFyIHY9ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbWdcIj09PXY/ZS5zcmM9YSh0aGlzLnNyY0ltYWdlLG0scCk6XCJjYW52YXNcIj09PXYmJnModGhpcy5zcmNJbWFnZSxlLG0scCksXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vbnJlbmRlciYmdGhpcy5vbnJlbmRlcihlKSxuJiZuKCl9LHI9W10saT1mdW5jdGlvbigpe3JldHVybiBjfS5hcHBseSh0LHIpLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtmdW5jdGlvbiB0KGUpe2Zvcih2YXIgdD1bMTYsMTEsMTAsMTYsMjQsNDAsNTEsNjEsMTIsMTIsMTQsMTksMjYsNTgsNjAsNTUsMTQsMTMsMTYsMjQsNDAsNTcsNjksNTYsMTQsMTcsMjIsMjksNTEsODcsODAsNjIsMTgsMjIsMzcsNTYsNjgsMTA5LDEwMyw3NywyNCwzNSw1NSw2NCw4MSwxMDQsMTEzLDkyLDQ5LDY0LDc4LDg3LDEwMywxMjEsMTIwLDEwMSw3Miw5Miw5NSw5OCwxMTIsMTAwLDEwMyw5OV0sbj0wOzY0Pm47bisrKXt2YXIgcj1GKCh0W25dKmUrNTApLzEwMCk7MT5yP3I9MTpyPjI1NSYmKHI9MjU1KSxEW05bbl1dPXJ9Zm9yKHZhciBpPVsxNywxOCwyNCw0Nyw5OSw5OSw5OSw5OSwxOCwyMSwyNiw2Niw5OSw5OSw5OSw5OSwyNCwyNiw1Niw5OSw5OSw5OSw5OSw5OSw0Nyw2Niw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OSw5OV0sbz0wOzY0Pm87bysrKXt2YXIgYT1GKChpW29dKmUrNTApLzEwMCk7MT5hP2E9MTphPjI1NSYmKGE9MjU1KSx4W05bb11dPWF9Zm9yKHZhciBzPVsxLDEuMzg3MDM5ODQ1LDEuMzA2NTYyOTY1LDEuMTc1ODc1NjAyLDEsLjc4NTY5NDk1OCwuNTQxMTk2MSwuMjc1ODk5Mzc5XSx1PTAsYz0wOzg+YztjKyspZm9yKHZhciBsPTA7OD5sO2wrKylVW3VdPTEvKERbTlt1XV0qc1tjXSpzW2xdKjgpLENbdV09MS8oeFtOW3VdXSpzW2NdKnNbbF0qOCksdSsrfWZ1bmN0aW9uIG4oZSx0KXtmb3IodmFyIG49MCxyPTAsaT1uZXcgQXJyYXksbz0xOzE2Pj1vO28rKyl7Zm9yKHZhciBhPTE7YTw9ZVtvXTthKyspaVt0W3JdXT1bXSxpW3Rbcl1dWzBdPW4saVt0W3JdXVsxXT1vLHIrKyxuKys7bio9Mn1yZXR1cm4gaX1mdW5jdGlvbiByKCl7eT1uKFcsSCksYj1uKFYsWCksUz1uKHoscSksST1uKFEsWSl9ZnVuY3Rpb24gaSgpe2Zvcih2YXIgZT0xLHQ9MixuPTE7MTU+PW47bisrKXtmb3IodmFyIHI9ZTt0PnI7cisrKUFbMzI3Njcrcl09bixUWzMyNzY3K3JdPVtdLFRbMzI3Njcrcl1bMV09bixUWzMyNzY3K3JdWzBdPXI7Zm9yKHZhciBpPS0odC0xKTstZT49aTtpKyspQVszMjc2NytpXT1uLFRbMzI3NjcraV09W10sVFszMjc2NytpXVsxXT1uLFRbMzI3NjcraV1bMF09dC0xK2k7ZTw8PTEsdDw8PTF9fWZ1bmN0aW9uIG8oKXtmb3IodmFyIGU9MDsyNTY+ZTtlKyspa1tlXT0xOTU5NSplLGtbZSsyNTY+PjBdPTM4NDcwKmUsa1tlKzUxMj4+MF09NzQ3MSplKzMyNzY4LGtbZSs3Njg+PjBdPS0xMTA1OSplLGtbZSsxMDI0Pj4wXT0tMjE3MDkqZSxrW2UrMTI4MD4+MF09MzI3NjgqZSs4NDIxMzc1LGtbZSsxNTM2Pj4wXT0tMjc0MzkqZSxrW2UrMTc5Mj4+MF09LTUzMjkqZX1mdW5jdGlvbiBhKGUpe2Zvcih2YXIgdD1lWzBdLG49ZVsxXS0xO24+PTA7KXQmMTw8biYmKEd8PTE8PE8pLG4tLSxPLS0sMD5PJiYoMjU1PT1HPyhzKDI1NSkscygwKSk6cyhHKSxPPTcsRz0wKX1mdW5jdGlvbiBzKGUpe00ucHVzaChqW2VdKX1mdW5jdGlvbiB1KGUpe3MoZT4+OCYyNTUpLHMoMjU1JmUpfWZ1bmN0aW9uIGMoZSx0KXt2YXIgbixyLGksbyxhLHMsdSxjLGwsZj0wO2NvbnN0IGQ9OCxoPTY0O2ZvcihsPTA7ZD5sOysrbCl7bj1lW2ZdLHI9ZVtmKzFdLGk9ZVtmKzJdLG89ZVtmKzNdLGE9ZVtmKzRdLHM9ZVtmKzVdLHU9ZVtmKzZdLGM9ZVtmKzddO3ZhciBnPW4rYyxwPW4tYyxtPXIrdSx3PXItdSx2PWkrcyx5PWktcyxiPW8rYSxTPW8tYSxJPWcrYixQPWctYixGPW0rdixEPW0tdjtlW2ZdPUkrRixlW2YrNF09SS1GO3ZhciB4PS43MDcxMDY3ODEqKEQrUCk7ZVtmKzJdPVAreCxlW2YrNl09UC14LEk9Uyt5LEY9eSt3LEQ9dytwO3ZhciBVPS4zODI2ODM0MzMqKEktRCksQz0uNTQxMTk2MSpJK1UsVD0xLjMwNjU2Mjk2NSpEK1UsQT0uNzA3MTA2NzgxKkYsUj1wK0EsTT1wLUE7ZVtmKzVdPU0rQyxlW2YrM109TS1DLGVbZisxXT1SK1QsZVtmKzddPVItVCxmKz04fWZvcihmPTAsbD0wO2Q+bDsrK2wpe249ZVtmXSxyPWVbZis4XSxpPWVbZisxNl0sbz1lW2YrMjRdLGE9ZVtmKzMyXSxzPWVbZis0MF0sdT1lW2YrNDhdLGM9ZVtmKzU2XTt2YXIgRz1uK2MsTz1uLWMsXz1yK3UsQj1yLXUsRT1pK3Msaj1pLXMsaz1vK2EsTj1vLWEsVz1HK2ssSD1HLWssej1fK0UscT1fLUU7ZVtmXT1XK3osZVtmKzMyXT1XLXo7dmFyIFY9LjcwNzEwNjc4MSoocStIKTtlW2YrMTZdPUgrVixlW2YrNDhdPUgtVixXPU4raix6PWorQixxPUIrTzt2YXIgWD0uMzgyNjgzNDMzKihXLXEpLFE9LjU0MTE5NjEqVytYLFk9MS4zMDY1NjI5NjUqcStYLEs9LjcwNzEwNjc4MSp6LEo9TytLLFo9Ty1LO2VbZis0MF09WitRLGVbZisyNF09Wi1RLGVbZis4XT1KK1ksZVtmKzU2XT1KLVksZisrfXZhciAkO2ZvcihsPTA7aD5sOysrbCkkPWVbbF0qdFtsXSxMW2xdPSQ+MD8kKy41fDA6JC0uNXwwO3JldHVybiBMfWZ1bmN0aW9uIGwoKXt1KDY1NTA0KSx1KDE2KSxzKDc0KSxzKDcwKSxzKDczKSxzKDcwKSxzKDApLHMoMSkscygxKSxzKDApLHUoMSksdSgxKSxzKDApLHMoMCl9ZnVuY3Rpb24gZihlLHQpe3UoNjU0NzIpLHUoMTcpLHMoOCksdSh0KSx1KGUpLHMoMykscygxKSxzKDE3KSxzKDApLHMoMikscygxNykscygxKSxzKDMpLHMoMTcpLHMoMSl9ZnVuY3Rpb24gZCgpe3UoNjU0OTkpLHUoMTMyKSxzKDApO2Zvcih2YXIgZT0wOzY0PmU7ZSsrKXMoRFtlXSk7cygxKTtmb3IodmFyIHQ9MDs2ND50O3QrKylzKHhbdF0pfWZ1bmN0aW9uIGgoKXt1KDY1NDc2KSx1KDQxOCkscygwKTtmb3IodmFyIGU9MDsxNj5lO2UrKylzKFdbZSsxXSk7Zm9yKHZhciB0PTA7MTE+PXQ7dCsrKXMoSFt0XSk7cygxNik7Zm9yKHZhciBuPTA7MTY+bjtuKyspcyh6W24rMV0pO2Zvcih2YXIgcj0wOzE2MT49cjtyKyspcyhxW3JdKTtzKDEpO2Zvcih2YXIgaT0wOzE2Pmk7aSsrKXMoVltpKzFdKTtmb3IodmFyIG89MDsxMT49bztvKyspcyhYW29dKTtzKDE3KTtmb3IodmFyIGE9MDsxNj5hO2ErKylzKFFbYSsxXSk7Zm9yKHZhciBjPTA7MTYxPj1jO2MrKylzKFlbY10pfWZ1bmN0aW9uIGcoKXt1KDY1NDk4KSx1KDEyKSxzKDMpLHMoMSkscygwKSxzKDIpLHMoMTcpLHMoMykscygxNykscygwKSxzKDYzKSxzKDApfWZ1bmN0aW9uIHAoZSx0LG4scixpKXt2YXIgbyxzPWlbMF0sdT1pWzI0MF07Y29uc3QgbD0xNixmPTYzLGQ9NjQ7Zm9yKHZhciBoPWMoZSx0KSxnPTA7ZD5nOysrZylSW05bZ11dPWhbZ107dmFyIHA9UlswXS1uO249UlswXSwwPT1wP2EoclswXSk6KG89MzI3NjcrcCxhKHJbQVtvXV0pLGEoVFtvXSkpO2Zvcih2YXIgbT02MzttPjAmJjA9PVJbbV07bS0tKTtpZigwPT1tKXJldHVybiBhKHMpLG47Zm9yKHZhciB3LHY9MTttPj12Oyl7Zm9yKHZhciB5PXY7MD09Ult2XSYmbT49djsrK3YpO3ZhciBiPXYteTtpZihiPj1sKXt3PWI+PjQ7Zm9yKHZhciBTPTE7dz49UzsrK1MpYSh1KTtiPTE1JmJ9bz0zMjc2NytSW3ZdLGEoaVsoYjw8NCkrQVtvXV0pLGEoVFtvXSksdisrfXJldHVybiBtIT1mJiZhKHMpLG59ZnVuY3Rpb24gbSgpe2Zvcih2YXIgZT1TdHJpbmcuZnJvbUNoYXJDb2RlLHQ9MDsyNTY+dDt0Kyspalt0XT1lKHQpfWZ1bmN0aW9uIHcoZSl7aWYoMD49ZSYmKGU9MSksZT4xMDAmJihlPTEwMCksUCE9ZSl7dmFyIG49MDtuPTUwPmU/TWF0aC5mbG9vcig1ZTMvZSk6TWF0aC5mbG9vcigyMDAtMiplKSx0KG4pLFA9ZX19ZnVuY3Rpb24gdigpe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpO2V8fChlPTUwKSxtKCkscigpLGkoKSxvKCksdyhlKTsobmV3IERhdGUpLmdldFRpbWUoKS10fXZhciB5LGIsUyxJLFAsRj0oTWF0aC5yb3VuZCxNYXRoLmZsb29yKSxEPW5ldyBBcnJheSg2NCkseD1uZXcgQXJyYXkoNjQpLFU9bmV3IEFycmF5KDY0KSxDPW5ldyBBcnJheSg2NCksVD1uZXcgQXJyYXkoNjU1MzUpLEE9bmV3IEFycmF5KDY1NTM1KSxMPW5ldyBBcnJheSg2NCksUj1uZXcgQXJyYXkoNjQpLE09W10sRz0wLE89NyxfPW5ldyBBcnJheSg2NCksQj1uZXcgQXJyYXkoNjQpLEU9bmV3IEFycmF5KDY0KSxqPW5ldyBBcnJheSgyNTYpLGs9bmV3IEFycmF5KDIwNDgpLE49WzAsMSw1LDYsMTQsMTUsMjcsMjgsMiw0LDcsMTMsMTYsMjYsMjksNDIsMyw4LDEyLDE3LDI1LDMwLDQxLDQzLDksMTEsMTgsMjQsMzEsNDAsNDQsNTMsMTAsMTksMjMsMzIsMzksNDUsNTIsNTQsMjAsMjIsMzMsMzgsNDYsNTEsNTUsNjAsMjEsMzQsMzcsNDcsNTAsNTYsNTksNjEsMzUsMzYsNDgsNDksNTcsNTgsNjIsNjNdLFc9WzAsMCwxLDUsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMF0sSD1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sej1bMCwwLDIsMSwzLDMsMiw0LDMsNSw1LDQsNCwwLDAsMSwxMjVdLHE9WzEsMiwzLDAsNCwxNyw1LDE4LDMzLDQ5LDY1LDYsMTksODEsOTcsNywzNCwxMTMsMjAsNTAsMTI5LDE0NSwxNjEsOCwzNSw2NiwxNzcsMTkzLDIxLDgyLDIwOSwyNDAsMzYsNTEsOTgsMTE0LDEzMCw5LDEwLDIyLDIzLDI0LDI1LDI2LDM3LDM4LDM5LDQwLDQxLDQyLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDY3LDY4LDY5LDcwLDcxLDcyLDczLDc0LDgzLDg0LDg1LDg2LDg3LDg4LDg5LDkwLDk5LDEwMCwxMDEsMTAyLDEwMywxMDQsMTA1LDEwNiwxMTUsMTE2LDExNywxMTgsMTE5LDEyMCwxMjEsMTIyLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQ2LDE0NywxNDgsMTQ5LDE1MCwxNTEsMTUyLDE1MywxNTQsMTYyLDE2MywxNjQsMTY1LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTc4LDE3OSwxODAsMTgxLDE4MiwxODMsMTg0LDE4NSwxODYsMTk0LDE5NSwxOTYsMTk3LDE5OCwxOTksMjAwLDIwMSwyMDIsMjEwLDIxMSwyMTIsMjEzLDIxNCwyMTUsMjE2LDIxNywyMTgsMjI1LDIyNiwyMjcsMjI4LDIyOSwyMzAsMjMxLDIzMiwyMzMsMjM0LDI0MSwyNDIsMjQzLDI0NCwyNDUsMjQ2LDI0NywyNDgsMjQ5LDI1MF0sVj1bMCwwLDMsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwXSxYPVswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXSxRPVswLDAsMiwxLDIsNCw0LDMsNCw3LDUsNCw0LDAsMSwyLDExOV0sWT1bMCwxLDIsMywxNyw0LDUsMzMsNDksNiwxOCw2NSw4MSw3LDk3LDExMywxOSwzNCw1MCwxMjksOCwyMCw2NiwxNDUsMTYxLDE3NywxOTMsOSwzNSw1MSw4MiwyNDAsMjEsOTgsMTE0LDIwOSwxMCwyMiwzNiw1MiwyMjUsMzcsMjQxLDIzLDI0LDI1LDI2LDM4LDM5LDQwLDQxLDQyLDUzLDU0LDU1LDU2LDU3LDU4LDY3LDY4LDY5LDcwLDcxLDcyLDczLDc0LDgzLDg0LDg1LDg2LDg3LDg4LDg5LDkwLDk5LDEwMCwxMDEsMTAyLDEwMywxMDQsMTA1LDEwNiwxMTUsMTE2LDExNywxMTgsMTE5LDEyMCwxMjEsMTIyLDEzMCwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxLDE1MiwxNTMsMTU0LDE2MiwxNjMsMTY0LDE2NSwxNjYsMTY3LDE2OCwxNjksMTcwLDE3OCwxNzksMTgwLDE4MSwxODIsMTgzLDE4NCwxODUsMTg2LDE5NCwxOTUsMTk2LDE5NywxOTgsMTk5LDIwMCwyMDEsMjAyLDIxMCwyMTEsMjEyLDIxMywyMTQsMjE1LDIxNiwyMTcsMjE4LDIyNiwyMjcsMjI4LDIyOSwyMzAsMjMxLDIzMiwyMzMsMjM0LDI0MiwyNDMsMjQ0LDI0NSwyNDYsMjQ3LDI0OCwyNDksMjUwXTt0aGlzLmVuY29kZT1mdW5jdGlvbihlLHQsbil7dmFyIHI9KG5ldyBEYXRlKS5nZXRUaW1lKCk7dCYmdyh0KSxNPW5ldyBBcnJheSxHPTAsTz03LHUoNjU0OTYpLGwoKSxkKCksZihlLndpZHRoLGUuaGVpZ2h0KSxoKCksZygpO3ZhciBpPTAsbz0wLHM9MDtHPTAsTz03LHRoaXMuZW5jb2RlLmRpc3BsYXlOYW1lPVwiX2VuY29kZV9cIjtmb3IodmFyIGMsbSx2LFAsRixELHgsVCxBLEw9ZS5kYXRhLFI9ZS53aWR0aCxqPWUuaGVpZ2h0LE49NCpSLFc9MDtqPlc7KXtmb3IoYz0wO04+Yzspe2ZvcihGPU4qVytjLEQ9Rix4PS0xLFQ9MCxBPTA7NjQ+QTtBKyspVD1BPj4zLHg9NCooNyZBKSxEPUYrVCpOK3gsVytUPj1qJiYoRC09TiooVysxK1QtaikpLGMreD49TiYmKEQtPWMreC1OKzQpLG09TFtEKytdLHY9TFtEKytdLFA9TFtEKytdLF9bQV09KGtbbV0ra1t2KzI1Nj4+MF0ra1tQKzUxMj4+MF0+PjE2KS0xMjgsQltBXT0oa1ttKzc2OD4+MF0ra1t2KzEwMjQ+PjBdK2tbUCsxMjgwPj4wXT4+MTYpLTEyOCxFW0FdPShrW20rMTI4MD4+MF0ra1t2KzE1MzY+PjBdK2tbUCsxNzkyPj4wXT4+MTYpLTEyODtpPXAoXyxVLGkseSxTKSxvPXAoQixDLG8sYixJKSxzPXAoRSxDLHMsYixJKSxjKz0zMn1XKz04fWlmKE8+PTApe3ZhciBIPVtdO0hbMV09TysxLEhbMF09KDE8PE8rMSktMSxhKEgpfWlmKHUoNjU0OTcpLG4pe2Zvcih2YXIgej1NLmxlbmd0aCxxPW5ldyBVaW50OEFycmF5KHopLFY9MDt6PlY7VisrKXFbVl09TVtWXS5jaGFyQ29kZUF0KCk7TT1bXTsobmV3IERhdGUpLmdldFRpbWUoKS1yO3JldHVybiBxfXZhciBYPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIitidG9hKE0uam9pbihcIlwiKSk7TT1bXTsobmV3IERhdGUpLmdldFRpbWUoKS1yO3JldHVybiBYfSx2KCl9ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUsdCl7dmFyIG49dGhpcztpZighZSl0aHJvdyBuZXcgRXJyb3IoXCLmsqHmnInmlLbliLDlm77niYfvvIzlj6/og73nmoTop6PlhrPmlrnmoYjvvJpodHRwczovL2dpdGh1Yi5jb20vdGhpbmsyMDExL2xvY2FsUmVzaXplSU1HL2lzc3Vlcy83XCIpO3Q9dHx8e30sbi5kZWZhdWx0cz17d2lkdGg6bnVsbCxoZWlnaHQ6bnVsbCxmaWVsZE5hbWU6XCJmaWxlXCIscXVhbGl0eTouN30sbi5maWxlPWU7Zm9yKHZhciByIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKG4uZGVmYXVsdHNbcl09dFtyXSk7cmV0dXJuIHRoaXMuaW5pdCgpfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9bnVsbDtyZXR1cm4gdD1lP1tdLmZpbHRlci5jYWxsKGRvY3VtZW50LnNjcmlwdHMsZnVuY3Rpb24odCl7cmV0dXJuLTEhPT10LnNyYy5pbmRleE9mKGUpfSlbMF06ZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aC0xXSx0P3Quc3JjLnN1YnN0cigwLHQuc3JjLmxhc3RJbmRleE9mKFwiL1wiKSk6bnVsbH1mdW5jdGlvbiBvKGUpe3ZhciB0O3Q9ZS5zcGxpdChcIixcIilbMF0uaW5kZXhPZihcImJhc2U2NFwiKT49MD9hdG9iKGUuc3BsaXQoXCIsXCIpWzFdKTp1bmVzY2FwZShlLnNwbGl0KFwiLFwiKVsxXSk7Zm9yKHZhciBuPWUuc3BsaXQoXCIsXCIpWzBdLnNwbGl0KFwiOlwiKVsxXS5zcGxpdChcIjtcIilbMF0scj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCksaT0wO2k8dC5sZW5ndGg7aSsrKXJbaV09dC5jaGFyQ29kZUF0KGkpO3JldHVybiBuZXcgcy5CbG9iKFtyLmJ1ZmZlcl0se3R5cGU6bn0pfW4ucD1pKFwibHJ6XCIpK1wiL1wiLHdpbmRvdy5VUkw9d2luZG93LlVSTHx8d2luZG93LndlYmtpdFVSTDt2YXIgYT1uKDEpLHM9big0KSx1PW4oNSksYz1mdW5jdGlvbihlKXt2YXIgdD0vT1MgKFxcZClfLiogbGlrZSBNYWMgT1MgWC9nLmV4ZWMoZSksbj0vQW5kcm9pZCAoXFxkLio/KTsvZy5leGVjKGUpfHwvQW5kcm9pZFxcLyhcXGQuKj8pIC9nLmV4ZWMoZSk7cmV0dXJue29sZElPUzp0Pyt0LnBvcCgpPDg6ITEsb2xkQW5kcm9pZDpuPytuLnBvcCgpLnN1YnN0cigwLDMpPDQuNTohMSxpT1M6L1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8udGVzdChlKSxhbmRyb2lkOi9BbmRyb2lkL2cudGVzdChlKSxtUVFCcm93c2VyOi9NUVFCcm93c2VyL2cudGVzdChlKX19KG5hdmlnYXRvci51c2VyQWdlbnQpO3IucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5maWxlLG49XCJzdHJpbmdcIj09dHlwZW9mIHQscj0vXmRhdGE6Ly50ZXN0KHQpLGk9bmV3IEltYWdlLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxjPW4/dDpVUkwuY3JlYXRlT2JqZWN0VVJMKHQpO2lmKGUuaW1nPWksZS5ibG9iPWMsZS5jYW52YXM9dSxuP2UuZmlsZU5hbWU9cj9cImJhc2U2NC5qcGdcIjp0LnNwbGl0KFwiL1wiKS5wb3AoKTplLmZpbGVOYW1lPXQubmFtZSwhZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KXRocm93IG5ldyBFcnJvcihcIua1j+iniOWZqOS4jeaUr+aMgWNhbnZhc1wiKTtyZXR1cm4gbmV3IGEoZnVuY3Rpb24obixhKXtpLm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgRXJyb3IoXCLliqDovb3lm77niYfmlofku7blpLHotKVcIik7dGhyb3cgYShlKSxlfSxpLm9ubG9hZD1mdW5jdGlvbigpe2UuX2dldEJhc2U2NCgpLnRoZW4oZnVuY3Rpb24oZSl7aWYoZS5sZW5ndGg8MTApe3ZhciB0PW5ldyBFcnJvcihcIueUn+aIkGJhc2U2NOWksei0pVwiKTt0aHJvdyBhKHQpLHR9cmV0dXJuIGV9KS50aGVuKGZ1bmN0aW9uKHIpe3ZhciBpPW51bGw7XCJvYmplY3RcIj09dHlwZW9mIGUuZmlsZSYmci5sZW5ndGg+ZS5maWxlLnNpemU/KGk9bmV3IEZvcm1EYXRhLHQ9ZS5maWxlKTooaT1uZXcgcy5Gb3JtRGF0YSx0PW8ocikpLGkuYXBwZW5kKGUuZGVmYXVsdHMuZmllbGROYW1lLHQsZS5maWxlTmFtZS5yZXBsYWNlKC9cXC4uKy9nLFwiLmpwZ1wiKSksbih7Zm9ybURhdGE6aSxmaWxlTGVuOit0LnNpemUsYmFzZTY0OnIsYmFzZTY0TGVuOnIubGVuZ3RoLG9yaWdpbjplLmZpbGUsZmlsZTp0fSk7Zm9yKHZhciBhIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShhKSYmKGVbYV09bnVsbCk7VVJMLnJldm9rZU9iamVjdFVSTChlLmJsb2IpfSl9LCFyJiYoaS5jcm9zc09yaWdpbj1cIipcIiksaS5zcmM9Y30pfSxyLnByb3RvdHlwZS5fZ2V0QmFzZTY0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuaW1nLG49ZS5maWxlLHI9ZS5jYW52YXM7cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKGkpe3RyeXt1LmdldERhdGEoXCJvYmplY3RcIj09dHlwZW9mIG4/bjp0LGZ1bmN0aW9uKCl7ZS5vcmllbnRhdGlvbj11LmdldFRhZyh0aGlzLFwiT3JpZW50YXRpb25cIiksZS5yZXNpemU9ZS5fZ2V0UmVzaXplKCksZS5jdHg9ci5nZXRDb250ZXh0KFwiMmRcIiksci53aWR0aD1lLnJlc2l6ZS53aWR0aCxyLmhlaWdodD1lLnJlc2l6ZS5oZWlnaHQsZS5jdHguZmlsbFN0eWxlPVwiI2ZmZlwiLGUuY3R4LmZpbGxSZWN0KDAsMCxyLndpZHRoLHIuaGVpZ2h0KSxjLm9sZElPUz9lLl9jcmVhdGVCYXNlNjRGb3JPbGRJT1MoKS50aGVuKGkpOmUuX2NyZWF0ZUJhc2U2NCgpLnRoZW4oaSl9KX1jYXRjaChvKXt0aHJvdyBuZXcgRXJyb3Iobyl9fSl9LHIucHJvdG90eXBlLl9jcmVhdGVCYXNlNjRGb3JPbGRJT1M9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5pbWcscj1lLmNhbnZhcyxpPWUuZGVmYXVsdHMsbz1lLm9yaWVudGF0aW9uO3JldHVybiBuZXcgYShmdW5jdGlvbihlKXshZnVuY3Rpb24oKXt2YXIgYT1bbig2KV07KGZ1bmN0aW9uKG4pe3ZhciBhPW5ldyBuKHQpO1wiNTY3OFwiLmluZGV4T2Yobyk+LTE/YS5yZW5kZXIocix7d2lkdGg6ci5oZWlnaHQsaGVpZ2h0OnIud2lkdGgsb3JpZW50YXRpb246b30pOmEucmVuZGVyKHIse3dpZHRoOnIud2lkdGgsaGVpZ2h0OnIuaGVpZ2h0LG9yaWVudGF0aW9uOm99KSxlKHIudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLGkucXVhbGl0eSkpfSkuYXBwbHkobnVsbCxhKX0oKX0pfSxyLnByb3RvdHlwZS5fY3JlYXRlQmFzZTY0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUucmVzaXplLHI9ZS5pbWcsaT1lLmNhbnZhcyxvPWUuY3R4LHM9ZS5kZWZhdWx0cyx1PWUub3JpZW50YXRpb247c3dpdGNoKHUpe2Nhc2UgMzpvLnJvdGF0ZSgxODAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQud2lkdGgsLXQuaGVpZ2h0LHQud2lkdGgsdC5oZWlnaHQpO2JyZWFrO2Nhc2UgNjpvLnJvdGF0ZSg5MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwwLC10LndpZHRoLHQuaGVpZ2h0LHQud2lkdGgpO2JyZWFrO2Nhc2UgODpvLnJvdGF0ZSgyNzAqTWF0aC5QSS8xODApLG8uZHJhd0ltYWdlKHIsLXQuaGVpZ2h0LDAsdC5oZWlnaHQsdC53aWR0aCk7YnJlYWs7Y2FzZSAyOm8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLmRyYXdJbWFnZShyLDAsMCx0LndpZHRoLHQuaGVpZ2h0KTticmVhaztjYXNlIDQ6by50cmFuc2xhdGUodC53aWR0aCwwKSxvLnNjYWxlKC0xLDEpLG8ucm90YXRlKDE4MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwtdC53aWR0aCwtdC5oZWlnaHQsdC53aWR0aCx0LmhlaWdodCk7YnJlYWs7Y2FzZSA1Om8udHJhbnNsYXRlKHQud2lkdGgsMCksby5zY2FsZSgtMSwxKSxvLnJvdGF0ZSg5MCpNYXRoLlBJLzE4MCksby5kcmF3SW1hZ2UociwwLC10LndpZHRoLHQuaGVpZ2h0LHQud2lkdGgpO2JyZWFrO2Nhc2UgNzpvLnRyYW5zbGF0ZSh0LndpZHRoLDApLG8uc2NhbGUoLTEsMSksby5yb3RhdGUoMjcwKk1hdGguUEkvMTgwKSxvLmRyYXdJbWFnZShyLC10LmhlaWdodCwwLHQuaGVpZ2h0LHQud2lkdGgpO2JyZWFrO2RlZmF1bHQ6by5kcmF3SW1hZ2UociwwLDAsdC53aWR0aCx0LmhlaWdodCl9cmV0dXJuIG5ldyBhKGZ1bmN0aW9uKGUpe2Mub2xkQW5kcm9pZHx8Yy5tUVFCcm93c2VyfHwhbmF2aWdhdG9yLnVzZXJBZ2VudD8hZnVuY3Rpb24oKXt2YXIgdD1bbig3KV07KGZ1bmN0aW9uKHQpe3ZhciBuPW5ldyB0LHI9by5nZXRJbWFnZURhdGEoMCwwLGkud2lkdGgsaS5oZWlnaHQpO2Uobi5lbmNvZGUociwxMDAqcy5xdWFsaXR5KSl9KS5hcHBseShudWxsLHQpfSgpOmUoaS50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIscy5xdWFsaXR5KSl9KX0sci5wcm90b3R5cGUuX2dldFJlc2l6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLmltZyxuPWUuZGVmYXVsdHMscj1uLndpZHRoLGk9bi5oZWlnaHQsbz1lLm9yaWVudGF0aW9uLGE9e3dpZHRoOnQud2lkdGgsaGVpZ2h0OnQuaGVpZ2h0fTtpZihcIjU2NzhcIi5pbmRleE9mKG8pPi0xJiYoYS53aWR0aD10LmhlaWdodCxhLmhlaWdodD10LndpZHRoKSxhLndpZHRoPHJ8fGEuaGVpZ2h0PGkpcmV0dXJuIGE7dmFyIHM9YS53aWR0aC9hLmhlaWdodDtmb3IociYmaT9zPj1yL2k/YS53aWR0aD5yJiYoYS53aWR0aD1yLGEuaGVpZ2h0PU1hdGguY2VpbChyL3MpKTphLmhlaWdodD5pJiYoYS5oZWlnaHQ9aSxhLndpZHRoPU1hdGguY2VpbChpKnMpKTpyP3I8YS53aWR0aCYmKGEud2lkdGg9cixhLmhlaWdodD1NYXRoLmNlaWwoci9zKSk6aSYmaTxhLmhlaWdodCYmKGEud2lkdGg9TWF0aC5jZWlsKGkqcyksYS5oZWlnaHQ9aSk7YS53aWR0aD49MzI2NHx8YS5oZWlnaHQ+PTI0NDg7KWEud2lkdGgqPS44LGEuaGVpZ2h0Kj0uODtyZXR1cm4gYX0sd2luZG93Lmxyej1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgcihlLHQpfSx3aW5kb3cubHJ6LnZlcnNpb249XCI0LjkuNDBcIixcbmUuZXhwb3J0cz13aW5kb3cubHJ6fV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1scnouYWxsLmJ1bmRsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9scnovZGlzdC9scnouYWxsLmJ1bmRsZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBoTWV0aG9kcyBmcm9tICcuL2hhbmRsZS1tZXRob2RzJ1xuaW1wb3J0IGFNZXRob2RzIGZyb20gJy4vYXNzaXN0LW1ldGhvZHMnXG5PYmplY3QuYXNzaWduKEluc3RhbmNlLnByb3RvdHlwZSwgaE1ldGhvZHMsIGFNZXRob2RzKVxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2luZGV4LmpzIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcbmNvbnN0IG1ldGhvZHMgPSB7XG4gIC8qXG4gICAqIGZ1bmMgY3JlYXRlIGEgbmV3IHJvdyBlbGVtZW50XG4gICAqIEBwYXJhbSB7b2JqfSBkYXRhXG4gICAqICAgICAgICAgIHRhZyB7c3RyfVxuICAgKiAgICAgICAgICBjb250ZW50ZWRpdGFibGUge2Jvb2xlYW59IGRlZmF1bHQ6IHRydWVcbiAgICogICAgICAgICAgaWQge2Jvb2xlYW59IHdoZXRoZXIgbmVlZCBhIGlkIGRlZmF1bHQ6IGZhbHNlXG4gICAqICAgICAgICAgIGJyIHtib29sZWFufSB3aGV0aGVyIG5lZWQgYSBiciBlbGVtZW50IGFmdGVyIGN1cnJlbnQgcm93IGVsZW1lbnQgZGVmYXVsdDogZmFsc2VcbiAgICogQHJldHVybiAge25vZGV9XG4gICAqKi9cbiAgbmV3Um93IChkYXRhID0ge30pIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRhdGEudGFnIHx8IGNvbnN0YW50LlJPV19UQUcpXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHJvdy5kYXRhc2V0LmVkaXRvclJvdyA9IG1ldGhvZHMuY3JlYXRlUmFuZG9tSWQoJ3JvdycpXG4gICAgfVxuICAgIGlmIChkYXRhLmJyKSB7XG4gICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChicilcbiAgICB9XG4gICAgaWYgKGRhdGEuY29udGVudGVkaXRhYmxlICE9PSBmYWxzZSkge1xuICAgICAgcm93LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHJvd1xuICB9LFxuICAvLyBnZXQgc2VsZWN0aW9uXG4gIGdldFNlbGVjdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICB9LFxuICAvKlxuICAgKiBmdW5jIGluc2VydCBhIGVsZW1lbnQgYWZ0ZXIgdGFyZ2V0IGVsZW1lbnRcbiAgICogQHBhcmFtIG5ld0VsZW1lbnQge25vZGV9XG4gICAqIEBwYXJhbSB0YXJnZXRFbGVtZW50IHtub2RlfVxuICAgKiovXG4gIGluc2VydEFmdGVyIChuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudCA9IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQubGFzdENoaWxkID09PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50Lm5leHRTaWJsaW5nKVxuICAgIH1cbiAgfSxcbiAgLypcbiAgICogZnVuYyBjcmVhdGUgYSByYW5kb20gaWRcbiAgICogQHBhcmFtIHByZWZmaXgge3N0cn0gaWQncyBwcmVmZml4XG4gICAqIEByZXR1cm4gaWRcbiAgICoqL1xuICBjcmVhdGVSYW5kb21JZCAocHJlZmZpeCkge1xuICAgIHJldHVybiBgJHtwcmVmZml4IHx8ICdpZCd9LSR7TWF0aC5yYW5kb20oKSAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKX1gXG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBlZGl0IHpvbmUgZWxlbWVudFxuICAgKiovXG4gIGVkaXRab25lICgpIHtcbiAgICBpZiAobWV0aG9kcy5lZGl0Wm9uZV9jYWNoZSkge1xuICAgICAgcmV0dXJuIG1ldGhvZHMuZWRpdFpvbmVfY2FjaGVcbiAgICB9XG4gICAgbWV0aG9kcy5lZGl0Wm9uZV9jYWNoZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvcj1cImNvbnRlbnRcIl0nKVxuICAgIHJldHVybiBtZXRob2RzLmVkaXRab25lX2NhY2hlXG4gIH0sXG4gIC8qXG4gICAqIHNldCByYW5nZSBhdCB0YXJnZXQgbm9kZVxuICAgKiovXG4gIHNldFJhbmdlQXQgKG5vZGUsIGNoZWNrQWxsKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgaWYgKGNoZWNrQWxsKSB7XG4gICAgICByYW5nZS5zZXRTdGFydChub2RlLCAwKVxuICAgICAgbGV0IGVuZCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPyBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIDogKG5vZGUubGVuZ3RoID8gbm9kZS5sZW5ndGggOiAwKVxuICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZClcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgMClcbiAgICAgIHJhbmdlLnNldEVuZChub2RlLCAwKVxuICAgIH1cbiAgICBsZXQgc2VsZWN0aW9uID0gbWV0aG9kcy5nZXRTZWxlY3Rpb24oKVxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgfSxcbiAgZ2V0UmFuZ2UgKCkge1xuICAgIGxldCBzID0gbWV0aG9kcy5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzLnJhbmdlQ291bnQpIHtcbiAgICAgIHJldHVybiBzLmdldFJhbmdlQXQoMClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmdlLWhhbmRsZXIvYXNzaXN0LW1ldGhvZHMuanMiLCJpbXBvcnQgeyBpc09iaiB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgUkggZnJvbSAnLi4vcmFuZ2UtaGFuZGxlcidcbi8qXG4gKiBJbnNwZWN0IGFuZCBoaWdobGlnaHQgbW9kdWxlXG4gKiovXG5jbGFzcyBJbnNwZWN0b3Ige1xuICBjb25zdHJ1Y3RvciAobW9kdWxlTmFtZSkge1xuICAgIHRoaXMubW9kdWxlTmFtZSA9IG1vZHVsZU5hbWVcbiAgfVxuXG4gIGFkZCAodHlwZSwgcGFyYW0pIHtcbiAgICBsZXQgbW9kdWxlTmFtZSA9IHRoaXMubW9kdWxlTmFtZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbW9kdWxlTmFtZSBtdXN0IGJlIHN0cmluZycpXG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc3BlY3RvciBmb3IgdGFnIGNhbiBvbmx5IHJlY2VpdmUgYSBzdHJpbmcgcGFyYW0gd2hpY2ggc3RhbmQgZm9yIHRhZyBuYW1lJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3IudGFnTWFwW3BhcmFtLnRvVXBwZXJDYXNlKCldID0gbW9kdWxlTmFtZVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBpZiAoIWlzT2JqKHBhcmFtKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zcGVjdG9yIGZvciBzdHlsZSBjYW4gb25seSByZWNlaXZlIGEgb2JqZWN0IHBhcmFtJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3Iuc3R5bGVzW21vZHVsZU5hbWVdID0gcGFyYW1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XG4gICAgICAgIGlmICghaXNPYmoocGFyYW0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNwZWN0b3IgZm9yIGF0dHJpYnV0ZSBjYW4gb25seSByZWNlaXZlIGEgb2JqZWN0IHBhcmFtJylcbiAgICAgICAgfVxuICAgICAgICBJbnNwZWN0b3IuYXR0cmlidXRlc1ttb2R1bGVOYW1lXSA9IHBhcmFtXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaW5zcGVjdG9yIHR5cGUnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaW5zcGVjdF90YWcgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgbGV0IGluc3BlY3RSZXN1bHQgPSBJbnNwZWN0b3IudGFnTWFwW25vZGUubm9kZU5hbWVdXG4gICAgICBpZiAoaW5zcGVjdFJlc3VsdCAmJiAhcmVzdWx0LmluY2x1ZGVzKGluc3BlY3RSZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGluc3BlY3RSZXN1bHQpXG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGluc3BlY3Rfc3R5bGUgKG5vZGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBSSC5wcm90b3R5cGUuZWRpdFpvbmUoKSkge1xuICAgICAgaWYgKCFub2RlLnN0eWxlKSBicmVha1xuICAgICAgT2JqZWN0LmtleXMoSW5zcGVjdG9yLnN0eWxlcykuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgbGV0IG1vZHVsZVN0eWxlID0gSW5zcGVjdG9yLnN0eWxlc1ttb2R1bGVOYW1lXVxuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVTdHlsZSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgY3VyVmFsdWUgPSBtb2R1bGVTdHlsZVtpdGVtXVxuICAgICAgICAgIGlmICh0eXBlb2YgY3VyVmFsdWUgPT09ICdzdHJpbmcnICYmIG5vZGUuc3R5bGVbaXRlbV0gPT09IGN1clZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICBJbnNwZWN0b3IuYWN0aXZlSXRlbXNbbW9kdWxlTmFtZV0gPSBjdXJWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJWYWx1ZSkpIHtcbiAgICAgICAgICAgIGN1clZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGVbaXRlbV0gPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtb2R1bGVOYW1lKVxuICAgICAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGluc3BlY3RfYXR0cmlidXRlIChub2RlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gUkgucHJvdG90eXBlLmVkaXRab25lKCkpIHtcbiAgICAgIGlmICghbm9kZS5nZXRBdHRyaWJ1dGUpIGJyZWFrXG4gICAgICBPYmplY3Qua2V5cyhJbnNwZWN0b3IuYXR0cmlidXRlcykuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgbGV0IG1vZHVsZUF0dHIgPSBJbnNwZWN0b3IuYXR0cmlidXRlc1ttb2R1bGVOYW1lXVxuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVBdHRyKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCB2YWx1ZSA9IG1vZHVsZUF0dHJbaXRlbV1cbiAgICAgICAgICBsZXQgbm9kZVZhbCA9IG5vZGUuZ2V0QXR0cmlidXRlKGl0ZW0pXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICAgIGlmIChub2RlVmFsID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgIEluc3BlY3Rvci5hY3RpdmVJdGVtc1ttb2R1bGVOYW1lXSA9IHZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgbm9kZVZhbCA9PT0gdmFsdWUgfHwgbm9kZVZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobW9kdWxlTmFtZSlcbiAgICAgICAgICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zW21vZHVsZU5hbWVdID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuSW5zcGVjdG9yLnRhZ01hcCA9IHt9XG5JbnNwZWN0b3Iuc3R5bGVzID0ge31cbkluc3BlY3Rvci5hdHRyaWJ1dGVzID0ge31cbkluc3BlY3Rvci5hY3RpdmVJdGVtcyA9IHt9XG5cbkluc3BlY3Rvci5ydW4gPSAodHlwZSwgbm9kZUxpc3QpID0+IHtcbiAgbGV0IGZuID0gSW5zcGVjdG9yLnByb3RvdHlwZVsnaW5zcGVjdF8nICsgdHlwZV1cbiAgbGV0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgQXJyYXkuaXNBcnJheShub2RlTGlzdCkpIHtcbiAgICBub2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goZm4obm9kZSkpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbkluc3BlY3Rvci5yZW1vdmVEdXBsYXRlID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgLy8gbWVyZ2Ugc2FtZSBtb2R1bGUgaW5zcGVjdCByZXN1bHRcbiAgbGV0IHNhbWVTdHlsZU1hcCA9IHt9XG4gIGxpc3QuZm9yRWFjaChtID0+IHtcbiAgICBpZiAodHlwZW9mIG0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBzYW1lU3R5bGVNYXBbbV0gPSBzYW1lU3R5bGVNYXBbbV0gPyBzYW1lU3R5bGVNYXBbbV0gKyAxIDogMVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtKSkge1xuICAgICAgbSA9IEFycmF5LmZyb20obmV3IFNldChtKSlcbiAgICAgIG0uZm9yRWFjaChhbSA9PiB7XG4gICAgICAgIHNhbWVTdHlsZU1hcFthbV0gPSBzYW1lU3R5bGVNYXBbYW1dID8gc2FtZVN0eWxlTWFwW2FtXSArIDEgOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbiAgbGV0IG1lcmdlZFN0eWxlID0gW11cbiAgT2JqZWN0LmtleXMoc2FtZVN0eWxlTWFwKS5mb3JFYWNoKG0gPT4ge1xuICAgIGlmIChzYW1lU3R5bGVNYXBbbV0gPT09IGxpc3QubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTdHlsZS5wdXNoKG0pXG4gICAgfVxuICB9KVxuICByZXR1cm4gbWVyZ2VkU3R5bGVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3JcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGUtaW5zcGVjdC9pbmRleC5qcyIsImltcG9ydCBwb2x5ZmlsbCBmcm9tICcuL3V0aWwvcG9seWZpbGwtaWUnXG5pbXBvcnQgYnVpbGRJbk1vZHVsZXMgZnJvbSAnLi9tb2R1bGVzL2luZGV4J1xuaW1wb3J0IGJ1aWxkSW5TaG9ydGN1dCBmcm9tICcuL3Nob3J0Y3V0J1xuaW1wb3J0IGNvbnN0YW50Q29uZmlnIGZyb20gJy4vY29uc3RhbnQtY29uZmlnJ1xuaW1wb3J0IGVkaXRvciBmcm9tICcuL2VkaXRvci9lZGl0b3InXG5pbXBvcnQgYnVpbGRJbkNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5pbXBvcnQgaW5pdEV4Y2x1ZGVSdWxlIGZyb20gJy4vbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzJ1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL21vZHVsZS1pbnNwZWN0J1xuaW1wb3J0IGkxOG5aaENuIGZyb20gJy4vaTE4bi96aC1jbidcbmltcG9ydCBpMThuRW5VcyBmcm9tICcuL2kxOG4vZW4tdXMnXG5pbXBvcnQge1xuICBtaXhpbixcbiAgaXNPYmpcbn0gZnJvbSAnLi91dGlsJ1xuXG5wb2x5ZmlsbCgpXG5cbmNsYXNzIEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IG1vZHVsZXMgPSBbLi4uYnVpbGRJbk1vZHVsZXNdXG4gICAgbGV0IHJlc2VydmVkTmFtZXMgPSB7fVxuICAgIG1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgIGlmIChtLm5hbWUpIHtcbiAgICAgICAgcmVzZXJ2ZWROYW1lc1ttLm5hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgY29tcG9uZW50cyA9IHt9XG4gICAgY29uc3QgbW9kdWxlc01hcCA9IHt9XG5cbiAgICAvLyBleHRlbmRlZCBtb2R1bGVzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5leHRlbmRNb2R1bGVzKSkge1xuICAgICAgb3B0aW9ucy5leHRlbmRNb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZS5uYW1lICYmICFyZXNlcnZlZE5hbWVzW21vZHVsZS5uYW1lXSkge1xuICAgICAgICAgIG1vZHVsZXMucHVzaChtb2R1bGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHRlbmRlZCBtb2R1bGUgbXVzdCBoYXZlIGEgbmFtZSBhbmQgc2hvdWxkIG5vdCBiZSB0aGUgc2FtZSBhcyBidWlsZEluIG1vZHVsZScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbW9kdWxlcyBpbiB1c2VcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLm1vZHVsZXMpKSB7XG4gICAgICBsZXQgbSA9IFtdXG4gICAgICBvcHRpb25zLm1vZHVsZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kdWxlc1xcJ3MgaXRlbSBtdXN0IGJlIHN0cmluZycpXG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgaWYgKG1vZHVsZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICBtLnB1c2gobW9kdWxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBtb2R1bGVzID0gbVxuICAgIH1cblxuICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgLy8gY29uZmlnXG4gICAgICBsZXQgY3VyQ29uZmlnID0gb3B0aW9uc1ttb2R1bGUubmFtZV1cbiAgICAgIGxldCBtb2R1bGVDb25maWcgPSBtb2R1bGVcbiAgICAgIGlmIChpc09iaihjdXJDb25maWcpICYmIGlzT2JqKG1vZHVsZUNvbmZpZykpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtb2R1bGVDb25maWcsIGN1ckNvbmZpZylcbiAgICAgIH1cblxuICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBudWxsXG4gICAgICBtb2R1bGUuZm9yYmlkZGVuID0gbnVsbFxuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsZXQgaW5zcGVjdG9yID0gbmV3IEluc3BlY3Rvcihtb2R1bGUubmFtZSlcbiAgICAgICAgbW9kdWxlLmluc3BlY3QoaW5zcGVjdG9yLmFkZC5iaW5kKGluc3BlY3RvcikpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUudHlwZSA9ICdmbidcbiAgICAgIH1cbiAgICAgIG1vZHVsZS5leGNsdWRlID0gaW5pdEV4Y2x1ZGVSdWxlKG1vZHVsZSwgbW9kdWxlcylcblxuICAgICAgaWYgKG1vZHVsZS50YWIpIHtcbiAgICAgICAgbW9kdWxlLnRhYi5tb2R1bGUgPSBtb2R1bGVcblxuICAgICAgICAvLyBhZGQgYWN0aXZlSXRlbSBwcm9wXG4gICAgICAgIG1vZHVsZS50YWIucHJvcHMgPSBtb2R1bGUudGFiLnByb3BzID8gT2JqZWN0LmFzc2lnbihtb2R1bGUudGFiLnByb3BzLCB7YWN0aXZlSXRlbTogW1N0cmluZywgQm9vbGVhbl0sIGZvcmJpZGRlbjogQm9vbGVhbn0pIDoge2FjdGl2ZUl0ZW06IFtTdHJpbmcsIEJvb2xlYW5dLCBmb3JiaWRkZW46IEJvb2xlYW59XG4gICAgICAgIG1vZHVsZS50YWJOYW1lID0gYHRhYi0ke21vZHVsZS5uYW1lfWBcbiAgICAgICAgY29tcG9uZW50c1ttb2R1bGUudGFiTmFtZV0gPSBtb2R1bGUudGFiXG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pY29ucyAmJiBvcHRpb25zLmljb25zW21vZHVsZS5uYW1lXSkge1xuICAgICAgICBtb2R1bGUuaWNvbiA9IG9wdGlvbnMuaWNvbnNbbW9kdWxlLm5hbWVdXG4gICAgICB9XG4gICAgICBtb2R1bGUuaGFzVGFiID0gISFtb2R1bGUudGFiXG5cbiAgICAgIC8vIHByZXZlbnQgdnVlIHN5bmNcbiAgICAgIGRlbGV0ZSBtb2R1bGUudGFiXG5cbiAgICAgIG1vZHVsZXNNYXBbbW9kdWxlLm5hbWVdID0gbW9kdWxlXG4gICAgfSlcblxuICAgIC8vIGkxOG5cbiAgICBjb25zdCBpMThuID0geyd6aC1jbic6IGkxOG5aaENuLCAnZW4tdXMnOiBpMThuRW5Vc31cbiAgICBjb25zdCBjdXN0b21JMThuID0gb3B0aW9ucy5pMThuIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoY3VzdG9tSTE4bikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpMThuW2tleV0gPSBpMThuW2tleV0gPyBPYmplY3QuYXNzaWduKGkxOG5ba2V5XSwgY3VzdG9tSTE4bltrZXldKSA6IGN1c3RvbUkxOG5ba2V5XVxuICAgIH0pXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlIHx8ICdlbi11cydcbiAgICBjb25zdCBsb2NhbGUgPSBpMThuW2xhbmd1YWdlXVxuXG4gICAgLy8gc2hvcnRjdXRcbiAgICBvcHRpb25zLnNob3J0Y3V0ID0gT2JqZWN0LmFzc2lnbihidWlsZEluU2hvcnRjdXQsIG9wdGlvbnMuc2hvcnRjdXQgfHwge30pXG4gICAgY29uc3Qgc2hvcnRjdXQgPSB7fVxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuc2hvcnRjdXQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBpdGVtID0gb3B0aW9ucy5zaG9ydGN1dFtrZXldXG4gICAgICBsZXQga2V5Q29kZSA9IGl0ZW0ua2V5Q29kZVxuICAgICAgc2hvcnRjdXRba2V5Q29kZV0gPSBzaG9ydGN1dFtrZXlDb2RlXSB8fCBbXVxuICAgICAgc2hvcnRjdXRba2V5Q29kZV0ucHVzaChpdGVtKVxuICAgICAgaXRlbS5uYW1lID0ga2V5XG4gICAgfSlcblxuICAgIC8vIG1lcmdlIGNvbW1hbmRzXG4gICAgaWYgKGlzT2JqKG9wdGlvbnMuY29tbWFuZHMpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGJ1aWxkSW5Db21tYW5kcywgb3B0aW9ucy5jb21tYW5kcylcbiAgICB9XG5cbiAgICAvLyBzcGVsbGNoZWNrXG4gICAgY29uc3Qgc3BlbGxjaGVjayA9IG9wdGlvbnMuc3BlbGxjaGVjayB8fCBmYWxzZVxuXG4gICAgY29uc3QgY29tcG8gPSBtaXhpbihlZGl0b3IsIHtcbiAgICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge21vZHVsZXMsIGxvY2FsZSwgc2hvcnRjdXQsIG1vZHVsZXNNYXAsIHNwZWxsY2hlY2ssIGNvbnN0YW50Q29uZmlnfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHNcbiAgICB9KVxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29tcG8pXG4gIH1cblxuICAvKipcbiAgICogZ2xvYmFsIGluc3RhbGxcbiAgICogQHBhcmFtIFZ1ZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGluc3RhbGwoVnVlLCBvcHRpb25zID0ge30pIHtcbiAgICBWdWUuY29tcG9uZW50KG9wdGlvbnMubmFtZSB8fCAnbXktdnVlLWVkaXRvcicsIG5ldyBFZGl0b3Iob3B0aW9ucykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cbi8vIHRvIGNoYW5nZSBCYWJlbDYgZXhwb3J0J3MgcmVzdWx0XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRvclxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gICAgaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJ2luY2x1ZGVzJywge1xuICAgICAgICAgICAgdmFsdWUoc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gTGV0IE8gYmUgPyBUb09iamVjdCh0aGlzIHZhbHVlKS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBPYmplY3QodGhpcylcblxuICAgICAgICAgICAgICAgIC8vIDIuIExldCBsZW4gYmUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gby5sZW5ndGggPj4+IDBcblxuICAgICAgICAgICAgICAgIC8vIDMuIElmIGxlbiBpcyAwLCByZXR1cm4gZmFsc2UuXG4gICAgICAgICAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyA0LiBMZXQgbiBiZSA/IFRvSW50ZWdlcihmcm9tSW5kZXgpLlxuICAgICAgICAgICAgICAgIC8vICAgIChJZiBmcm9tSW5kZXggaXMgdW5kZWZpbmVkLCB0aGlzIHN0ZXAgcHJvZHVjZXMgdGhlIHZhbHVlIDAuKVxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBmcm9tSW5kZXggfCAwXG5cbiAgICAgICAgICAgICAgICAvLyA1LiBJZiBuIOKJpSAwLCB0aGVuXG4gICAgICAgICAgICAgICAgLy8gIGEuIExldCBrIGJlIG4uXG4gICAgICAgICAgICAgICAgLy8gNi4gRWxzZSBuIDwgMCxcbiAgICAgICAgICAgICAgICAvLyAgYS4gTGV0IGsgYmUgbGVuICsgbi5cbiAgICAgICAgICAgICAgICAvLyAgYi4gSWYgayA8IDAsIGxldCBrIGJlIDAuXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBNYXRoLm1heChuID49IDAgPyBuIDogbGVuIC0gTWF0aC5hYnMobiksIDApXG5cbiAgICAgICAgICAgICAgICAvLyA3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cbiAgICAgICAgICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZWxlbWVudEsgYmUgdGhlIHJlc3VsdCBvZiA/IEdldChPLCAhIFRvU3RyaW5nKGspKS5cbiAgICAgICAgICAgICAgICAgICAgLy8gYi4gSWYgU2FtZVZhbHVlWmVybyhzZWFyY2hFbGVtZW50LCBlbGVtZW50SykgaXMgdHJ1ZSwgcmV0dXJuIHRydWUuXG4gICAgICAgICAgICAgICAgICAgIC8vIGMuIEluY3JlYXNlIGsgYnkgMS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogPT09IHByb3ZpZGVzIHRoZSBjb3JyZWN0IFwiU2FtZVZhbHVlWmVyb1wiIGNvbXBhcmlzb24gbmVlZGVkIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvW2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIDguIFJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyB0ZXh0LmNvbnRhaW5zKClcbiAgICBpZiAoIVRleHQucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gICAgICAgIFRleHQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMgPT09IG5vZGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcG9seWZpbGwtaWUuanMiLCJpbXBvcnQgYWxpZ24gZnJvbSAnLi9hbGlnbi9pbmRleCdcbmltcG9ydCBmb250IGZyb20gJy4vZm9udC9pbmRleCdcbmltcG9ydCBmdWxsU2NyZWVuIGZyb20gJy4vZnVsbC1zY3JlZW4vaW5kZXgnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZS9pbmRleCdcbmltcG9ydCBib2xkIGZyb20gJy4vYm9sZCdcbmltcG9ydCBpdGFsaWMgZnJvbSAnLi9pdGFsaWMnXG5pbXBvcnQgdW5kZXJsaW5lIGZyb20gJy4vdW5kZXJsaW5lJ1xuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IHF1b3RlIGZyb20gJy4vcXVvdGUnXG5pbXBvcnQgaW5kZW50IGZyb20gJy4vaW5kZW50J1xuaW1wb3J0IG91dGRlbnQgZnJvbSAnLi9vdXRkZW50J1xuaW1wb3J0IHVsIGZyb20gJy4vdWwnXG5pbXBvcnQgb2wgZnJvbSAnLi9vbCdcbmltcG9ydCBsaW5ldGhyb3VnaCBmcm9tICcuL2xpbmV0aHJvdWdoJ1xuaW1wb3J0IGl0b2RvIGZyb20gJy4vaWNvdXJ0LXRvZG8nXG5cblxuLyoqXG4gKiBidWlsZC1pbiBtb2R1bHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICBmb250LFxuICBhbGlnbixcbiAgaW1hZ2UsXG4gIGZ1bGxTY3JlZW4sXG4gIGJvbGQsXG4gIGl0YWxpYyxcbiAgdW5kZXJsaW5lLFxuICB0b2RvLFxuICBxdW90ZSxcbiAgaW5kZW50LFxuICBvdXRkZW50LFxuICB1bCxcbiAgb2wsXG4gIGxpbmV0aHJvdWdoLFxuICBpdG9kb1xuXVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhbGlnbicsXG4gIGljb246ICdpdWktaWNvbiBpdWktaWNvbi1hbGlnbicsXG4gIHRhYixcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdzdHlsZScsIHtcbiAgICAgICd0ZXh0QWxpZ24nOiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknXVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2FsaWduL2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUl0ZW0gKG4pIHtcbiAgICAgIG4gPSBuIHx8ICdsZWZ0J1xuICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgJ2xlZnQnOiAyLFxuICAgICAgICAnY2VudGVyJzogMCxcbiAgICAgICAgJ3JpZ2h0JzogMVxuICAgICAgfVxuICAgICAgbGV0IGluZGV4ID0gbWFwW25dXG4gICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApXG4gICAgICBsZXQga2V5ID0gb3B0aW9uc1tpbmRleF1cbiAgICAgIHRoaXMuY2hvb3NlZCA9IHtcbiAgICAgICAgaWNvbjogJ2FsaWduLScgKyBuLFxuICAgICAgICBpbmRleCxcbiAgICAgICAga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmFsaWduTWFwW2tleV1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWxpZ24oaW5kZXgpXG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxpZ25NYXA6IHtcbiAgICAgICAgJ+WxheS4rSc6ICdqdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgJ+WxheWPsyc6ICdqdXN0aWZ5UmlnaHQnLFxuICAgICAgICAn5bGF5bemJzogJ2p1c3RpZnlMZWZ0J1xuICAgICAgfSxcbiAgICAgIGNob29zZWQ6IHt9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2V0QWxpZ24gKGluZGV4KSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuYWxpZ25NYXApXG4gICAgICBsZXQga2V5ID0gb3B0aW9uc1tpbmRleF1cbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCh0aGlzLmFsaWduTWFwW2tleV0pXG4gICAgICB0aGlzLiRwYXJlbnQuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLiRwYXJlbnQubW9kdWxlSW5zcGVjdCgpXG4gICAgfSxcbiAgICBjaGFuZ2VBbGlnbiAoKSB7XG4gICAgICBpZiAodGhpcy5mb3JiaWRkZW4pIHJldHVyblxuICAgICAgbGV0IHByZV9pbmRleCA9ICFpc05hTih0aGlzLmNob29zZWQuaW5kZXgpID8gdGhpcy5jaG9vc2VkLmluZGV4IDogLTFcbiAgICAgIGxldCBsZW4gPSBPYmplY3Qua2V5cyh0aGlzLmFsaWduTWFwKS5sZW5ndGhcbiAgICAgIGxldCB0YXJnZXRfaW5kZXhcbiAgICAgIGlmIChwcmVfaW5kZXggKyAxID09PSBsZW4pIHtcbiAgICAgICAgdGFyZ2V0X2luZGV4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0X2luZGV4ID0gKytwcmVfaW5kZXhcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWxpZ24odGFyZ2V0X2luZGV4KVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2FsaWduL3RhYi5qcyIsImV4cG9ydCBkZWZhdWx0IFwiPGxpIGNsYXNzPSdidG4nIEBjbGljaz1cXFwiY2hhbmdlQWxpZ24oKVxcXCIgOnRpdGxlPVxcXCIn5a+56b2Q5pa55byPOicgKyAoY2hvb3NlZC5rZXkgfHwgJ+WxheW3picpXFxcIj5cXG4gIDxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogc3ViXFxcIiBjbGFzcz1cXFwiZmFcXFwiIDpjbGFzcz1cXFwiJ2ZhLScgKyAoY2hvb3NlZC5pY29uIHx8ICdhbGlnbi1sZWZ0JylcXFwiPjwvc3Bhbj5cXG48L2xpPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYWxpZ24vdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB0YWIgZnJvbSAnLi90YWInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmb250JyxcbiAgaWNvbjogJ2l1aS1pY29uIGl1aS1pY29uLXNwYW5uZXInLFxuICB0YWIsXG4gIGNvbmZpZyxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdzdHlsZScsIHtcbiAgICAgIGZvbnRTaXplOiBbJ3h4LWxhcmdlJywgJ3gtbGFyZ2UnLCAnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJ11cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9mb250L2luZGV4LmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFiLmh0bWwnXG5pbXBvcnQgJy4vc3R5bGUuc3R5bCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZW1wbGF0ZSxcbiAgd2F0Y2g6IHtcbiAgICBhY3RpdmVJdGVtIChuKSB7XG4gICAgICBsZXQgdmFsID0gdGhpcy5mb250QXR0ck1hcFtuXVxuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLmNob29zZWQgPSB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hvb3NlZCA9IHRoaXMuZm9udEF0dHJNYXBbdGhpcy5mb250QXR0ck1hcFsnZGVmYXVsdCddXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnRBdHRyTWFwOiB7fSxcbiAgICAgIGN1ck1vZHVsZTogbnVsbCxcbiAgICAgIGNob29zZWQ6IHt9LFxuICAgICAgc2hvd0xpc3Q6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd0xpc3RGbiAoKSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy50YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JiaWRkZW4nKSkgcmV0dXJuXG4gICAgICB0aGlzLnNob3dMaXN0ID0gdHJ1ZVxuICAgIH0sXG4gICAgY2hhbmdlQXR0ciAodmFsKSB7XG4gICAgICB0aGlzLmNob29zZWQgPSB2YWxcbiAgICAgIC8vIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnbGluZUhlaWdodCcsIHZhbC5saW5lSGVpZ2h0KVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIHZhbC5mb250U2l6ZSlcbiAgICAgIHRoaXMuc2hvd0xpc3QgPSBmYWxzZVxuICAgIH0sXG4gICAgc2V0Rm9udE5hbWUgKG5hbWUpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBuYW1lKVxuICAgIH0sXG4gICAgc2V0SGVhZGluZyAoaGVhZGluZykge1xuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdmb3JtYXRCbG9jaycsIGhlYWRpbmcpXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmN1ck1vZHVsZSA9IHRoaXMuJHBhcmVudC5tb2R1bGVzTWFwWydmb250J11cbiAgICB0aGlzLmZvbnRBdHRyTWFwID0gdGhpcy5jdXJNb2R1bGUuY29uZmlnXG4gICAgdGhpcy5jaG9vc2VkID0gdGhpcy5mb250QXR0ck1hcFt0aGlzLmZvbnRBdHRyTWFwWydkZWZhdWx0J11dXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgcmVmPVxcXCJ0YWJcXFwiIGNsYXNzPVxcXCJmb250LXRhYiB0YWItd2l0aC1kcm9wZG93blxcXCIgQG1vdXNlZW50ZXI9XFxcInNob3dMaXN0Rm5cXFwiIEBtb3VzZWxlYXZlPVxcXCJzaG93TGlzdCA9IGZhbHNlXFxcIj5cXG4gICAge3tjaG9vc2VkLm5hbWV9fVxcbiAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1jYXJldC1kb3duXFxcIj48L2k+XFxuICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIHYtaWY9XFxcInNob3dMaXN0XFxcIj5cXG4gICAgICAgIDxsaSB2LWlmPVxcXCJ2YWwubmFtZVxcXCIgdi1mb3I9XFxcIih2YWwsIGtleSkgaW4gZm9udEF0dHJNYXBcXFwiIEBjbGljaz1cXFwiY2hhbmdlQXR0cih2YWwpXFxcIj57eyB2YWwubmFtZSB9fTwvbGk+XFxuICAgIDwvdWw+XFxuPC9saT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZvbnQvc3R5bGUuc3R5bFxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gdGhyb3VnaCBmb250IHRhZ1xuICAneHgtbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDYsXG4gICAgbmFtZTogJ+agh+mimCdcbiAgfSxcbiAgJ3gtbGFyZ2UnOiB7XG4gICAgZm9udFNpemU6IDUsXG4gICAgbmFtZTogJ+WJr+agh+mimCdcbiAgfSxcbiAgJ2xhcmdlJzoge1xuICAgIGZvbnRTaXplOiA0LFxuICAgIG5hbWU6ICflsI/moIfpopgnXG4gIH0sXG4gICdtZWRpdW0nOiB7XG4gICAgZm9udFNpemU6IDMsXG4gICAgbmFtZTogJ+ato+aWhydcbiAgfSxcbiAgZGVmYXVsdDogJ21lZGl1bSdcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZm9udC9jb25maWcuanMiLCIvKipcbiAqIHRvZ2dsZSBmdWxsIHNjcmVlbiBtb2RlXG4gKiBDcmVhdGVkIGJ5IHBlYWsgb24gMTYvOC8xOC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdmdWxsLXNjcmVlbicsXG4gICAgaWNvbjogJ2ZhIGZhLWFycm93cy1hbHQnLFxuICAgIGkxOG46ICdmdWxsIHNjcmVlbicsXG4gICAgaGFuZGxlcihyaCkge1xuICAgICAgICByaC5lZGl0b3IudG9nZ2xlRnVsbFNjcmVlbigpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZnVsbC1zY3JlZW4vaW5kZXguanMiLCJpbXBvcnQgdGFiIGZyb20gJy4vdGFiJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbWFnZScsXG4gIGkxOG46ICdpbWFnZScsXG4gIGNhblVwbG9hZFNhbWVJbWFnZTogdHJ1ZSxcbiAgaW1nT2NjdXB5TmV3Um93OiBmYWxzZSxcbiAgbWF4U2l6ZTogNTEyMCAqIDEwMjQsXG4gIGNvbXByZXNzOiB7XG4gICAgLy8gbWF4IHdpZHRoXG4gICAgd2lkdGg6IDE2MDAsXG4gICAgLy8gbWF4IGhlaWdodFxuICAgIGhlaWdodDogMTYwMCxcbiAgICAvLyBjcG1wcmVzcyBxdWFsaXR5IDAgLSAxXG4gICAgcXVhbGl0eTogMC44XG4gIH0sXG4gIHRhYixcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnaW1nJylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvaW5kZXguanMiLCJpbXBvcnQgbHJ6IGZyb20gJ2xyeidcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi5odG1sJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAndGFiLWltYWdlJyxcbiAgICAgIGN1ck1vZHVsZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHBpY2soKSB7XG4gICAgICBpZiAodGhpcy5mb3JiaWRkZW4pIHJldHVyblxuICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKClcbiAgICB9LFxuICAgIHByb2Nlc3MoZSkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuJHJlZnMuZmlsZS5maWxlc1swXVxuICAgICAgdGhpcy4kcGFyZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZpbGUpXG4gICAgICBpZiAodGhpcy5jdXJNb2R1bGUuY2FuVXBsb2FkU2FtZUltYWdlKSB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuY3VyTW9kdWxlID0gdGhpcy4kcGFyZW50Lm1vZHVsZXNNYXBbJ2ltYWdlJ11cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmpzIiwiZXhwb3J0IGRlZmF1bHQgXCI8bGkgcmVmPVxcXCJpdGVtXFxcIiBjbGFzcz1cXFwiYnRuXFxcIj5cXG4gIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiByZWY9XFxcImZpbGVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCIgQGNoYW5nZT1cXFwicHJvY2Vzc1xcXCIgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIj5cXG4gIDxzcGFuIHN0eWxlPVxcXCJ2ZXJ0aWNhbC1hbGlnbjogc3ViXFxcIiBjbGFzcz1cXFwiZmEgZmEtcGljdHVyZS1vXFxcIiBAY2xpY2s9XFxcInBpY2tcXFwiPjwvc3Bhbj5cXG48L2xpPlxcblxcblxcblxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UvdGFiLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2JvbGQnLFxuICBpY29uOiAnZmEgZmEtYm9sZCcsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnYm9sZCcpXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgndGFnJywgJ1NUUk9ORycpLmFkZCgndGFnJywgJ0InKS5hZGQoJ3N0eWxlJyx7J2ZvbnQtd2VpZ2h0JzogJ2JvbGQnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYm9sZC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2l0YWxpYycsXG4gIGljb246ICdmYSBmYS1pdGFsaWMnLFxuICBoYW5kbGVyIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnaXRhbGljJylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnSScpLmFkZCgnc3R5bGUnLCB7J2ZvbnRTdHlsZSc6ICdpdGFsaWMnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaXRhbGljL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndW5kZXJsaW5lJyxcbiAgaWNvbjogJ2ZhIGZhLXVuZGVybGluZScsXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCd1bmRlcmxpbmUnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdVJykuYWRkKCdzdHlsZScsIHsndGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAndW5kZXJsaW5lJ30pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL3VuZGVybGluZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3RvZG8nLFxuICBpY29uOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgZXhjbHVkZTogJ0FMTF9CVVRfTVlTRUxGJyxcbiAgbW91bnRlZCAoZWRpdG9yKSB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbml0VG9kbycpXG4gIH0sXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCd0b2RvJywge1xuICAgICAgaW5zZXJ0QWZ0ZXI6IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXI6ICflvoXlip7kuovpobknXG4gICAgfSlcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCdhdHRyaWJ1dGUnLCB7XG4gICAgICAnZGF0YS1lZGl0b3ItdG9kbyc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvdG9kby9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3F1b3RlJyxcbiAgaWNvbjogJ2ZhIGZhLXF1b3RlLXJpZ2h0JyxcbiAgc2hvdzogdHJ1ZSxcbiAgbW91bnRlZCAoZWRpdG9yKSB7XG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbml0UXVvdGUnKVxuICB9LFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgsIG1vZHVsZSkge1xuICAgIGxldCBpc0luUXVvdGUgPSByaC5lZGl0b3IuYWN0aXZlTW9kdWxlcy5pbmNsdWRlcyhtb2R1bGUubmFtZSlcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3F1b3RlJywgaXNJblF1b3RlKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ2F0dHJpYnV0ZScsIHtcbiAgICAgICdkYXRhLWVkaXRvci1xdW90ZSc6ICcnXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvcXVvdGUvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbmRlbnQnLFxuICBpY29uOiAnZmEgZmEtaW5kZW50JyxcbiAgdHlwZTogJ2ZuJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpbmRlbnQnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmRlbnQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpbmRlbnQnLFxuICBpY29uOiAnZmEgZmEtb3V0ZGVudCcsXG4gIHR5cGU6ICdmbicsXG4gIGhhbmRsZXI6IGZ1bmN0aW9uIChyaCkge1xuICAgIHJoLmVkaXRvci5leGVjQ29tbWFuZCgnb3V0ZGVudCcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL291dGRlbnQvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd1bCcsXG4gIGljb246ICdmYSBmYS1saXN0LXVsJyxcbiAgaGFuZGxlcjogZnVuY3Rpb24gKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnVUwnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy91bC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29sJyxcbiAgaWNvbjogJ2ZhIGZhLWxpc3Qtb2wnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JylcbiAgfSxcbiAgaW5zcGVjdCAoYWRkKSB7XG4gICAgYWRkKCd0YWcnLCAnT0wnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9vbC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2xpbmV0aHJvdWdoJyxcbiAgaWNvbjogJ2ZhIGZhLXN0cmlrZXRocm91Z2gnLFxuICBoYW5kbGVyOiBmdW5jdGlvbiAocmgpIHtcbiAgICByaC5lZGl0b3IuZXhlY0NvbW1hbmQoJ3N0cmlrZVRocm91Z2gnKVxuICB9LFxuICBpbnNwZWN0IChhZGQpIHtcbiAgICBhZGQoJ3RhZycsICdTVFJJS0UnKS5hZGQoJ3N0eWxlJywgeyd0ZXh0LWRlY29yYXRpb24tbGluZSc6ICdsaW5lLXRocm91Z2gnfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvbGluZXRocm91Z2gvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdpdG9kbycsXG4gIGljb246ICdpdWktaWNvbiBpdWktaWNvbi1jaGVja2VkLWxpbmUnLFxuICBleGNsdWRlOiAnQUxMX0JVVF9NWVNFTEYnLFxuICBtb3VudGVkIChlZGl0b3IpIHtcbiAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2luaXRpVG9kbycpXG4gIH0sXG4gIGhhbmRsZXIgKHJoKSB7XG4gICAgcmguZWRpdG9yLmV4ZWNDb21tYW5kKCdpdG9kbycsIHtcbiAgICAgIGluc2VydEFmdGVyOiByaC5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcbiAgICAgIHBsYWNlaG9sZGVyOiAn5b6F5Yqe5LqL6aG5J1xuICAgIH0pXG4gIH0sXG4gIGluc3BlY3QgKGFkZCkge1xuICAgIGFkZCgnYXR0cmlidXRlJywge1xuICAgICAgJ2RhdGEtZWRpdG9yLXRvZG8nOiAnJ1xuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2ljb3VydC10b2RvL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvdXRkZW50OiB7XG4gICAga2V5Q29kZTogOSxcbiAgICBzaGlmdEtleTogdHJ1ZSxcbiAgICBoYW5kbGVyIChlZGl0b3IsIGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdvdXRkZW50JylcbiAgICB9XG4gIH0sXG4gIGluZGVudDoge1xuICAgIGtleUNvZGU6IDksXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5kZW50JylcbiAgICB9XG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGtleUNvZGU6IDgsXG4gICAgaGFuZGxlciAoZWRpdG9yLCBlKSB7XG4gICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ2RlbGV0ZScsIGUsIHRydWUpXG4gICAgfVxuICB9LFxuICBlbnRlcjoge1xuICAgIGtleUNvZGU6IDEzLFxuICAgIGhhbmRsZXIgKGVkaXRvciwgZSkge1xuICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdlbnRlcicsIGUsIHRydWUpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hvcnRjdXQvaW5kZXguanMiLCJpbXBvcnQgUkggZnJvbSAnLi4vcmFuZ2UtaGFuZGxlcidcbmltcG9ydCAnLi9zdHlsZS9tYWluLnN0eWwnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9lZGl0b3IuaHRtbCdcbmltcG9ydCBkcmFnUGljIGZyb20gJy4vZHJhZy1waWMnXG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4uL21vZHVsZS1pbnNwZWN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlLFxuICBwcm9wczoge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwLFxuICAgICAgdmFsaWRhdG9yKHZhbCl7XG4gICAgICAgIHJldHVybiB2YWwgPj0gMTAwXG4gICAgICB9XG4gICAgfSxcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwMDBcbiAgICB9LFxuICAgIGF1dG9IZWlnaHQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBkaXJlY3RpdmVzOiB7XG4gICAgZHJhZ1BpY1xuICB9LFxuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZXM6IHt9LFxuICAgICAgYWN0aXZlTW9kdWxlczogW10sXG4gICAgICBhbGxBY3RpdmVNb2R1bGVzOiBbXSxcbiAgICAgIGZ1bGxTY3JlZW46IGZhbHNlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbnRlbnQodmFsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50LmlubmVySFRNTFxuICAgICAgaWYgKHZhbCAhPT0gY29udGVudCkge1xuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MID0gdmFsXG4gICAgICB9XG4gICAgfSxcbiAgICBmdWxsU2NyZWVuKHZhbCl7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzXG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbXBvbmVudC5wYXJlbnRFbCA9IGNvbXBvbmVudC4kZWwucGFyZW50Tm9kZVxuICAgICAgICBjb21wb25lbnQubmV4dEVsID0gY29tcG9uZW50LiRlbC5uZXh0U2libGluZ1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudC4kZWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGNvbXBvbmVudC5uZXh0RWwpIHtcbiAgICAgICAgY29tcG9uZW50LnBhcmVudEVsLmluc2VydEJlZm9yZShjb21wb25lbnQuJGVsLCBjb21wb25lbnQubmV4dEVsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5wYXJlbnRFbC5hcHBlbmRDaGlsZChjb21wb25lbnQuJGVsKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjb250ZW50U3R5bGUoKXtcbiAgICAgIGNvbnN0IHN0eWxlID0ge31cbiAgICAgIGlmICh0aGlzLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy4kcmVmcy50b29sYmFyLmNsaWVudEhlaWdodCAtIDF9cHhgXG4gICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHR9cHhgXG4gICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgfVxuICAgICAgc3R5bGVbJ21pbi1oZWlnaHQnXSA9IGAke3RoaXMuaGVpZ2h0fXB4YFxuICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0Q3VyQWN0aXZlTW9kdWxlSXRlbSAoKSB7XG4gICAgICByZXR1cm4gSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zXG4gICAgfSxcbiAgICBjbGVhckFjdGl2ZU1vZHVsZUl0ZW0gKCkge1xuICAgICAgSW5zcGVjdG9yLmFjdGl2ZUl0ZW1zID0ge31cbiAgICB9LFxuICAgIGhhbmRsZURyYWdQaWMgKGZpbGUpIHtcbiAgICAgIGlmICgodGhpcy5tb2R1bGVzTWFwWydpbWFnZSddICYmIHRoaXMubW9kdWxlc01hcFsnaW1hZ2UnXS5kcmFnICE9PSBmYWxzZSkgfHwgIXRoaXMubW9kdWxlc01hcFsnaW1hZ2UnXSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLmV4ZWNDb21tYW5kKCdpbnNlcnRJbWFnZScsIGZpbGUpXG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSAhdGhpcy5mdWxsU2NyZWVuXG4gICAgfSxcbiAgICBlbmFibGVGdWxsU2NyZWVuKCl7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4gPSB0cnVlXG4gICAgfSxcbiAgICBleGl0RnVsbFNjcmVlbigpe1xuICAgICAgdGhpcy5mdWxsU2NyZWVuID0gZmFsc2VcbiAgICB9LFxuICAgIGZvY3VzKCl7XG4gICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuZm9jdXMoKVxuICAgIH0sXG4gICAgYmx1cigpe1xuICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmJsdXIoKVxuICAgIH0sXG4gICAgZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnLCBleGVjT25seSl7XG4gICAgICBpZiAoIWV4ZWNPbmx5KSB7XG4gICAgICAgIHRoaXMucmVzdG9yZVNlbGVjdGlvbigpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBuZXcgUkgodGhpcy5yYW5nZSwgdGhpcykuZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnKVxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy4kcmVmcy5jb250ZW50LmlubmVySFRNTClcbiAgICB9LFxuICAgIHNhdmVDdXJyZW50UmFuZ2UoKXtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgaWYgKCFzZWxlY3Rpb24ucmFuZ2VDb3VudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uLnJhbmdlQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXG4gICAgICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyXG4gICAgICAgIGxldCBlbmQgPSByYW5nZS5lbmRDb250YWluZXJcbiAgICAgICAgLy8gZm9yIElFMTEgOiBub2RlLmNvbnRhaW5zKHRleHROb2RlKSBhbHdheXMgcmV0dXJuIGZhbHNlXG4gICAgICAgIHN0YXJ0ID0gc3RhcnQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gc3RhcnQucGFyZW50Tm9kZSA6IHN0YXJ0XG4gICAgICAgIGVuZCA9IGVuZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBlbmQucGFyZW50Tm9kZSA6IGVuZFxuICAgICAgICBpZiAoY29udGVudC5jb250YWlucyhzdGFydCkgJiYgY29udGVudC5jb250YWlucyhlbmQpKSB7XG4gICAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzdG9yZVNlbGVjdGlvbigpe1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZSh0aGlzLnJhbmdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuJHJlZnMuY29udGVudFxuICAgICAgICBjb25zdCByb3cgPSBSSC5wcm90b3R5cGUubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocm93LCAwKVxuICAgICAgICByYW5nZS5zZXRFbmQocm93LCAwKVxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlTW9kdWxlKG1vZHVsZSl7XG4gICAgICBpZiAobW9kdWxlLmZvcmJpZGRlbikgcmV0dXJuXG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5oYW5kbGVyKG5ldyBSSCh0aGlzLnJhbmdlLCB0aGlzKSwgbW9kdWxlKVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZHVsZUluc3BlY3QgKCkge1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZU1vZHVsZUl0ZW0oKVxuICAgICAgICB0aGlzLmFjdGl2ZU1vZHVsZXMgPSBbXVxuICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMgPSBbXVxuICAgICAgICBsZXQgcmggPSBuZXcgUkgodGhpcy5yYW5nZSwgdGhpcylcbiAgICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDAgJiYgdGhpcy5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICB0ZXh0cy5wdXNoKHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV4dHMgZHVwbGljYXRlIHJlbW92YWxcbiAgICAgICAgbGV0IHRleHRBZnRldERSID0gW11cbiAgICAgICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgICBpZiAodGV4dC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgdGV4dC5wYXJlbnROb2RlICE9PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5wYXJlbnROb2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGV4dEFmdGV0RFIuaW5jbHVkZXModGV4dCkpIHtcbiAgICAgICAgICAgIHRleHRBZnRldERSLnB1c2godGV4dClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHRhZ1Jlc3VsdCA9IEluc3BlY3Rvci5ydW4oJ3RhZycsIHRleHRBZnRldERSKVxuICAgICAgICBsZXQgdGFnUmVzdWx0UkQgPSBJbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZSh0YWdSZXN1bHQpXG5cbiAgICAgICAgbGV0IHN0eWxlUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bignc3R5bGUnLCB0ZXh0QWZ0ZXREUilcbiAgICAgICAgbGV0IHN0eWxlUmVzdWx0UkQgPSBJbnNwZWN0b3IucmVtb3ZlRHVwbGF0ZShzdHlsZVJlc3VsdClcblxuICAgICAgICBsZXQgYXR0cmlidXRlUmVzdWx0ID0gSW5zcGVjdG9yLnJ1bignYXR0cmlidXRlJywgdGV4dEFmdGV0RFIpXG4gICAgICAgIGxldCBhdHRyaWJ1dGVSZXN1bHRSRCA9IEluc3BlY3Rvci5yZW1vdmVEdXBsYXRlKGF0dHJpYnV0ZVJlc3VsdClcblxuICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMgPSB0YWdSZXN1bHQuY29uY2F0KHN0eWxlUmVzdWx0LCBhdHRyaWJ1dGVSZXN1bHQpXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kdWxlcyA9IEFycmF5LmZyb20obmV3IFNldCh0YWdSZXN1bHRSRC5jb25jYXQoc3R5bGVSZXN1bHRSRCwgYXR0cmlidXRlUmVzdWx0UkQpKSlcblxuICAgICAgICAvLyByZXNldFxuICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgIG1vZHVsZS5mb3JiaWRkZW4gPSBmYWxzZVxuICAgICAgICAgIG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBoYW5kbGUgZm9yYmlkZGVuIGxvZ2ljXG4gICAgICAgIGlmICh0aGlzLmFsbEFjdGl2ZU1vZHVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IGV4Y2x1ZGVMaXN0ID0gW11cbiAgICAgICAgICB0aGlzLmFsbEFjdGl2ZU1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG0pKSB7XG4gICAgICAgICAgICAgIG0uZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyTW9kdWxlID0gdGhpcy5tb2R1bGVzTWFwW21vZHVsZU5hbWVdXG4gICAgICAgICAgICAgICAgZXhjbHVkZUxpc3QgPSBleGNsdWRlTGlzdC5jb25jYXQoY3VyTW9kdWxlLmV4Y2x1ZGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBleGNsdWRlTGlzdCA9IEFycmF5LmZyb20obmV3IFNldChleGNsdWRlTGlzdCkpXG4gICAgICAgICAgZXhjbHVkZUxpc3QuZm9yRWFjaChleGMgPT4ge1xuICAgICAgICAgICAgbGV0IGV4Y01vZHVsZSA9IHRoaXMubW9kdWxlc01hcFtleGNdXG4gICAgICAgICAgICBpZiAoZXhjTW9kdWxlICYmIGV4Y01vZHVsZS50eXBlICE9PSAnZm4nKSB7XG4gICAgICAgICAgICAgIGV4Y01vZHVsZS5mb3JiaWRkZW4gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBoaWdobGlnaHQgbG9naWNcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSBtb2R1bGUubmFtZVxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kdWxlcy5pbmNsdWRlcyhtb2R1bGVOYW1lKSkge1xuICAgICAgICAgICAgICBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCA9IHRydWVcbiAgICAgICAgICAgICAgbGV0IGN1ck1vZHVsZUFjdGl2ZUl0ZW0gPSB0aGlzLmdldEN1ckFjdGl2ZU1vZHVsZUl0ZW0oKVttb2R1bGVOYW1lXVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1ck1vZHVsZUFjdGl2ZUl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLm1vZHVsZUluc3BlY3RSZXN1bHQgPSBjdXJNb2R1bGVBY3RpdmVJdGVtIHx8ICdBTEwnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCl7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUuaW5pdCh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy4kcmVmcy5jb250ZW50XG4gICAgY29uc3QgdG9vbGJhciA9IHRoaXMuJHJlZnMudG9vbGJhclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50XG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXIgYXQgZG9jdW1lbnQgdG8gaGFuZGxlIHNlbGVjdGlvblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIC8vIHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zYXZlQ3VycmVudFJhbmdlLCBmYWxzZSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjb250ZW50LmlubmVySFRNTClcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgIH0sIGZhbHNlKVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgfSwgZmFsc2UpXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGUgPT4ge1xuICAgICAgdGhpcy5leGVjQ29tbWFuZCgncGFzdGUnLCBlLCB0cnVlKVxuICAgICAgbGV0IGNvbW1vbiA9IHRoaXMucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGlmIChjb21tb24pIHtcbiAgICAgICAgaWYgKGNvbW1vbi5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBjb21tb24gPSBjb21tb24ucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uc2Nyb2xsSW50b1ZpZXcpIHtcbiAgICAgICAgICBjb21tb24uc2Nyb2xsSW50b1ZpZXcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudG91Y2hIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNhdmVDdXJyZW50UmFuZ2UoKVxuICAgICAgICB0aGlzLm1vZHVsZUluc3BlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoSGFuZGxlciwgZmFsc2UpXG5cbiAgICAvLyBiZWZvcmUgZXhlYyBjb21tYW5kXG4gICAgLy8gbGV0IHRleHQgYmUgYSByb3dcbiAgICBSSC5wcm90b3R5cGUuYmVmb3JlKChjb21tYW5kLCAgcmgsIGFyZykgPT4ge1xuICAgICAgbGV0IHRleHRzID0gcmguZ2V0QWxsVGV4dE5vZGVzSW5SYW5nZSgpXG4gICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICBpZiAoIXJoLmlzRW1wdHlOb2RlKHRleHQpKSB7XG4gICAgICAgICAgcmgudGV4dFRvUm93KHRleHQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAodGV4dHMubGVuZ3RoKSB7XG4gICAgICAgIHJoLmVkaXRvci5zYXZlQ3VycmVudFJhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaGFuZGxlIHNob3J0Y3V0XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICB0aGlzLmV4ZWNDb21tYW5kKCdrZXlkb3duJywgZSwgdHJ1ZSlcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zaG9ydGN1dFtlLmtleUNvZGVdXG4gICAgICBpZiAoaXRlbSAmJiBpdGVtLmxlbmd0aCkge1xuICAgICAgICBpdGVtLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gcy5rZXlDb2RlICYmIGUuYWx0S2V5ID09PSAhIXMuYWx0S2V5ICYmIGUuY3RybEtleSA9PT0gISFzLmN0cmxLZXkgJiYgZS5tZXRhS2V5ID09PSAhIXMubWV0YUtleSAmJiBlLnNoaWZ0S2V5ID09PSAhIXMuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICAgICAgICAgIHMuaGFuZGxlcih0aGlzLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCBmYWxzZSlcblxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGUubW91bnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1vZHVsZS5tb3VudGVkKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlZCgpe1xuICAgIHRoaXMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLnVwZGF0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLnVwZGF0ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaEhhbmRsZXIpXG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuZGVzdHJveWVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZHVsZS5kZXN0cm95ZWQodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yL2VkaXRvci5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuLi9jb21tYW5kcydcblxuLy8gZm9yIElFIDExXG5pZiAoIVRleHQucHJvdG90eXBlLmNvbnRhaW5zKSB7XG4gIFRleHQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMob3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IG90aGVyTm9kZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSGFuZGxlciB7XG4gIC8qKlxuICAgKiBidWlsZCByYW5nZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7UmFuZ2V9IHJhbmdlXG4gICAqIEBwYXJhbSB7ZWRpdG9yfSBjdXJyZW50IGVkaXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IocmFuZ2UsIGVkaXRvcikge1xuICAgIGlmICghcmFuZ2UgfHwgIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FudFxcJ3QgcmVzb2x2ZSByYW5nZScpXG4gICAgfVxuICAgIHRoaXMucmFuZ2UgPSByYW5nZVxuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogZXhlY3V0ZSBlZGl0IGNvbW1hbmRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmRcbiAgICogQHBhcmFtIGFyZ1xuICAgKi9cbiAgZXhlY0NvbW1hbmQoY29tbWFuZCwgYXJnKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbi5jYWxsKHRoaXMsIGNvbW1hbmQsIHRoaXMsIGFyZylcbiAgICB9KVxuICAgIGNvbnN0IGV4aXN0Q29tbWFuZCA9IGNvbW1hbmRzW2NvbW1hbmRdXG4gICAgY29uc3QgY3VzdG9tQ29tbWFuZCA9IHRoaXMuZWRpdG9yLmNvbW1hbmRzID8gdGhpcy5lZGl0b3IuY29tbWFuZHNbY29tbWFuZF0gOiBudWxsXG4gICAgaWYgKGV4aXN0Q29tbWFuZCkge1xuICAgICAgZXhpc3RDb21tYW5kKHRoaXMsIGFyZylcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VzdG9tQ29tbWFuZCkge1xuICAgICAgIGN1c3RvbUNvbW1hbmQodGhpcywgYXJnKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kLCBmYWxzZSwgYXJnKVxuICAgIH1cbiAgICBSYW5nZUhhbmRsZXIuYWZ0ZXJMaXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4uY2FsbCh0aGlzLCBjb21tYW5kLCB0aGlzLCBhcmcpXG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBiZWZvcmUgZXhlYyBjb21tYW5kICBcbiAgICoqL1xuICBiZWZvcmUgKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckJlZm9yZUxpc3QgKCkge1xuICAgIFJhbmdlSGFuZGxlci5iZWZvcmVMaXN0ID0gW11cbiAgfVxuXG4gIC8qXG4gICAqIHJ1biBmbiBhZnRlciBleGVjIGNvbW1hbmQgIFxuICAgKiovXG4gIGFmdGVyIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJhbmdlSGFuZGxlci5hZnRlckxpc3QucHVzaChmbilcbiAgICB9XG4gIH1cblxuICBjbGVhckFmdGVyTGlzdCAoKSB7XG4gICAgUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG4gIH1cbn1cblxuUmFuZ2VIYW5kbGVyLmJlZm9yZUxpc3QgPSBbXVxuUmFuZ2VIYW5kbGVyLmFmdGVyTGlzdCA9IFtdXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFuZ2UtaGFuZGxlci9pbnN0YW5jZS5qcyIsImltcG9ydCBscnogZnJvbSAnbHJ6J1xuXG5jb25zdCBpbnNlcnRJbWFnZSA9IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIC8vIGZvcmJpZGRlbiBsb2dpY1xuICBsZXQgZm9yYmlkZGVuID0gZmFsc2VcbiAgbGV0IGFjdGl2ZXMgPSByaC5lZGl0b3IuYWN0aXZlTW9kdWxlc1xuICBhY3RpdmVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgbGV0IG1vZHVsZSA9IHJoLmVkaXRvci5tb2R1bGVzTWFwW25hbWVdXG4gICAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhjbHVkZSAmJiBtb2R1bGUuZXhjbHVkZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgICAgZm9yYmlkZGVuID0gdHJ1ZVxuICAgIH1cbiAgfSlcbiAgaWYgKGZvcmJpZGRlbikgcmV0dXJuXG5cbiAgbGV0IHJldHVybkRhdGEgPSB7XG4gICAgb3JpZ2luOiBhcmdcbiAgfVxuICBsZXQgZWRpdG9yID0gcmguZWRpdG9yXG4gIGxldCBjb25maWcgPSBlZGl0b3IubW9kdWxlc01hcFsnaW1hZ2UnXVxuICBpZiAoIWNvbmZpZykge1xuICAgIHRocm93IG5ldyBFcnJvcignaW1hZ2UgY29uZmlnIGxvYWQgZmFpbCcpXG4gIH1cbiAgaWYgKGFyZyBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICBoYW5kbGVGaWxlKGFyZylcbiAgfVxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SW1hZ2UnLCBmYWxzZSwgYXJnKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlsZShmaWxlKSB7XG4gICAgaWYgKGNvbmZpZy5jb21wcmVzcykge1xuICAgICAgY29uZmlnLmNvbXByZXNzLmZpZWxkTmFtZSA9IGNvbmZpZy5maWVsZE5hbWUgfHwgJ2ltYWdlJ1xuICAgICAgbHJ6KGZpbGUsIGNvbmZpZy5jb21wcmVzcykudGhlbihyc3QgPT4ge1xuICAgICAgICBpZiAocnN0LmZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXR1cm5EYXRhLCB7XG4gICAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgYWZ0ZXIgY29tcHJlc3MnLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICAgIH0sIHJzdClcbiAgICAgICAgICBlZGl0b3IuJGVtaXQoJ2ltYWdlVXBsb2FkJywgcmV0dXJuRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHJzdClcbiAgICAgICAgICBsZXQgaW1nSWQgPSByaC5jcmVhdGVSYW5kb21JZCgnaW1nJylcbiAgICAgICAgICBpbnNlcnRCYXNlNjQocmV0dXJuRGF0YS5iYXNlNjQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6IGVycixcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyXG4gICAgICAgIH0pXG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCByZXR1cm5EYXRhKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IGNvbmZpZy5tYXhTaXplKSB7XG4gICAgICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICBzdGF0dXM6ICdleGNlZWQgc2l6ZSBsaW1pdCwgd2l0aG91dCBjb21wcmVzcycsXG4gICAgICAgICAgc3RhdHVzQ29kZTogM1xuICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChjb25maWcuZmllbGROYW1lLCBmaWxlLCBmaWxlLm5hbWUpXG4gICAgICAgIHJldHVybkRhdGEuZm9ybURhdGEgPSBmb3JtRGF0YVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgIGxldCBpbWdJZCA9IHJoLmNyZWF0ZVJhbmRvbUlkKCdpbWcnKVxuICAgICAgICAgIGluc2VydEJhc2U2NChlLnRhcmdldC5yZXN1bHQsIGltZ0lkKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0QmFzZTY0IChiYXNlNjQsIGlkKSB7XG4gICAgaWYgKGNvbmZpZy5pbWdPY2N1cHlOZXdSb3cpIHtcbiAgICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgIGxldCBjdXJSb3cgPSByaC5mb3JjZUdldFJvdyhub2RlKVxuICAgICAgaWYgKGN1clJvdykge1xuICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgIHJoLmluc2VydEFmdGVyKG5ld1JvdywgY3VyUm93KVxuICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICB9XG4gICAgfVxuICAgIGVkaXRvci5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGA8aW1nIHNyYz1cIiR7YmFzZTY0fVwiIGRhdGEtZWRpdG9yLWltZz1cIiR7aWR9XCI+YCwgdHJ1ZSlcbiAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgJyYjODIwMzsnLCB0cnVlKVxuICAgIGVkaXRvci4kZW1pdCgnaW1hZ2VVcGxvYWQnLCBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgIHN0YXR1czogJ2V2ZXJ5dGhpbmcgZmluZScsXG4gICAgICBzdGF0dXNDb2RlOiAyLFxuICAgICAgYmFzZTY0LFxuICAgICAgcmVwbGFjZVNyY0FmdGVyVXBsb2FkRmluaXNoOiByZXBsYWNlSW1nKGlkKSxcbiAgICAgIGRlbGV0ZUltZ1doZW5VcGxvYWRGYWlsOiBkZWxldGVJbWcoaWQpXG4gICAgfSkpXG4gIH1cblxuICAvLyByZXBsYWNlIGltYWdlJ3MgYmFzZTY0IHNyYyB0byB1cmwgYWZ0ZXIgdXBsb2FkIGZpbmlzaFxuICBmdW5jdGlvbiByZXBsYWNlSW1nIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtZWRpdG9yLWltZz0nJHtpZH0nXWApXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItaW1nJylcbiAgICAgICAgZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCBlZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlIGltYWdlIGFmdGVyIHVwbG9hZCBmYWlsXG4gIGZ1bmN0aW9uIGRlbGV0ZUltZyAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWVkaXRvci1pbWc9JyR7aWR9J11gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gICAgICAgIGVkaXRvci4kZW1pdCgnY2hhbmdlJywgZWRpdG9yLiRyZWZzLmNvbnRlbnQuaW5uZXJIVE1MKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2luc2VydEltYWdlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGlmIChyaC5yYW5nZS5jb2xsYXBzZWQpIHtcbiAgICBsZXQgcyA9cmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgbm9kZSA9IHMuYmFzZU5vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgaWYgKHJvdykge1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgc3BhbiBlbGVtZW50IHRvIGtlZXAgbGluZS1oZWlnaHQgcnVuIGNvcnJlY3RcbiAgICAgIGlmIChyaC5pc0VtcHR5Tm9kZShub2RlKSAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdTUEFOJykge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCAnJiM4MjAzOycpXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHMuZm9jdXNOb2RlLCBzLmFuY2hvck9mZnNldCAtIDEpXG4gICAgICByYW5nZS5zZXRFbmQocy5mb2N1c05vZGUsIHMuZm9jdXNPZmZzZXQpXG4gICAgICBzLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBzLmFkZFJhbmdlKHJhbmdlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIGFyZylcbiAgICAgIHMuY29sbGFwc2Uocy5mb2N1c05vZGUsIDEpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBhcmcpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9mb250U2l6ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRleHQgPSBudWxsXG5cbiAgaWYod2luZG93LmNsaXBib2FyZERhdGEgJiYgY2xpcGJvYXJkRGF0YS5zZXREYXRhKSB7XG4gICAgLy8gSUVcbiAgICB0ZXh0ID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpXG4gIH0gZWxzZSB7XG4gICAgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykgXG4gIH1cbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgdGV4dFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMClcblxuICAgICAgLy8g5Yib5bu65Li05pe25YWD57Sg77yM5L2/5b6XVGV4dFJhbmdl5Y+v5Lul56e75Yqo5Yiw5q2j56Gu55qE5L2N572uXG4gICAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIHRlbXBFbC5pbm5lckhUTUwgPSBcIiYjRkVGRjtcIlxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKVxuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZSh0ZW1wRWwpXG4gICAgICB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpXG4gICAgICB0ZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGVtcEVsKVxuICAgICAgdGVtcEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcEVsKVxuICAgIH1cbiAgICB0ZXh0UmFuZ2UudGV4dCA9IHRleHRcbiAgICB0ZXh0UmFuZ2UuY29sbGFwc2UoZmFsc2UpXG4gICAgdGV4dFJhbmdlLnNlbGVjdCgpXG4gIH0gZWxzZSB7XG4gICAgLy8gQ2hyb21l5LmL57G75rWP6KeI5ZmoXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvcGFzdGUuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBlKSB7XG4gIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCkge1xuXG4gICAgLy8gcmV3cml0ZSBsaSBlbnRlciBsb2dpY1xuICAgIGlmIChyaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdsaScpICYmIHJoLmlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCB1bE9yT2wgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1bCcpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ29sJylcbiAgICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydFVub3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICAgIH1cbiAgICAgIGlmICh1bE9yT2wubm9kZU5hbWUgPT09ICdPTCcpIHtcbiAgICAgICAgY29tbWFuZHNbJ2luc2VydE9yZGVyZWRMaXN0J10ocmgsIGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFmdGVyRW50ZXIocmgsIGUpXG59XG5cbmZ1bmN0aW9uIGFmdGVyRW50ZXIocmgsIGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vZGUgPSByaC5nZXRTZWxlY3Rpb24oKS5iYXNlTm9kZVxuICAgIGxldCByb3cgPSByaC5nZXRSb3cobm9kZSlcbiAgICAvLyBjbGVhciBuZXcgcm93J3MgaW5kZW50XG4gICAgaWYgKHJvdykge1xuICAgICAgcm93LnN0eWxlLm1hcmdpbkxlZnQgPSAnJ1xuICAgICAgcm93LnN0eWxlLm1hcmdpblJpZ2h0ID0gJydcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZW50ZXIuanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcmxpbmUnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgbGV0IG5vZGVDdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCB1bmRlcmxpbmUgdGFnXG4gICAgbGV0IHVuZGVybGluZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ3UnLCBmYWxzZSwgcm93KSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yQnlTdHlsZShub2RlLCB7XG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbkxpbmUnOiAndW5kZXJsaW5lJ1xuICAgICAgfSwgZmFsc2UsIHJvdylcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnSScsICdCJywgJ1NUUk9ORyddLCByb3cpXG4gICAgbGV0IGZvbnRTaXplID0gcmguZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlKG5vZGUsICdmb250U2l6ZScsIHRydWUsIHJvdylcbiAgICBpZiAoIXVuZGVybGluZSkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdVJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgdW5kZXJsaW5lKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3VuZGVybGluZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZVRocm91Z2gnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG4gICAgbGV0IG5vZGVDdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuXG4gICAgLy8gdGhlIG91dGVybW9zdCBzdHJpa2VUaHJvdWdoIHRhZ1xuICAgIGxldCBzdHJpa2VUaHJvdWdoID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnU1RSSUtFJywgZmFsc2UsIHJvdykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAndGV4dERlY29yYXRpb25MaW5lJzogJ2xpbmUtdGhyb3VnaCdcbiAgICAgIH0sIGZhbHNlLCByb3cpXG4gICAgbGV0IGV4aXN0U3R5bGUgPSByaC5maW5kRXhpc3RUYWdUaWxsQm9yZGVyKG5vZGUsIFsnVScsICdJJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghc3RyaWtlVGhyb3VnaCkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdTVFJJS0UnKVxuICAgIH1cbiAgICBpZiAoZXhpc3RTdHlsZS5sZW5ndGgpIHtcbiAgICAgIGxldCBuZXdET00gPSByaC5jcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QoZXhpc3RTdHlsZSlcbiAgICAgIGxldCB2ID0gcmgubmV3Um93KClcbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgICAgdi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2LmFwcGVuZENoaWxkKG5ld0RPTS5kb20pXG4gICAgICB9XG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCB2LmlubmVySFRNTClcbiAgICAgIGxldCBkZWVwZXN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0RPTS5kZWVwZXN0SWQpXG4gICAgICBzLmNvbGxhcHNlKGRlZXBlc3ROb2RlLCAxKVxuICAgICAgZGVlcGVzdE5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuZXdUZXh0LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVcbiAgICAgIG5ld1RleHQuaW5uZXJIVE1MID0gJyYjODIwMzsnXG4gICAgICByaC5pbnNlcnRBZnRlcihuZXdUZXh0LCBzdHJpa2VUaHJvdWdoKVxuICAgICAgcy5jb2xsYXBzZShuZXdUZXh0LCAxKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3N0cmlrZVRocm91Z2guanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJoLCBhcmcpIHtcbiAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICBpZiAoIXMuaXNDb2xsYXBzZWQpIHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpdGFsaWMnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IGl0YWxpYyB0YWdcbiAgICBsZXQgaXRhbGljID0gcmguZmluZFNwZWNpYWxBbmNlc3Rvcihub2RlLCAnaScsIGZhbHNlLCByb3cpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlKG5vZGUsIHtcbiAgICAgICAgJ2ZvbnRTdHlsZSc6ICdpdGFsaWMnXG4gICAgICB9LCBmYWxzZSwgcm93KVxuICAgIGxldCBleGlzdFN0eWxlID0gcmguZmluZEV4aXN0VGFnVGlsbEJvcmRlcihub2RlLCBbJ1NUUklLRScsICdVJywgJ0InLCAnU1RST05HJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIC8vIGlzIGluIGEgaXRhbGljXG4gICAgaWYgKCFpdGFsaWMpIHtcbiAgICAgIGV4aXN0U3R5bGUucHVzaCgnSScpXG4gICAgfVxuICAgIGlmIChleGlzdFN0eWxlLmxlbmd0aCkge1xuICAgICAgbGV0IG5ld0RPTSA9IHJoLmNyZWF0ZU5lc3RET01UaHJvdWdoTGlzdChleGlzdFN0eWxlKVxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgaWYgKGZvbnRTaXplKSB7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgICB2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHYuYXBwZW5kQ2hpbGQobmV3RE9NLmRvbSlcbiAgICAgIH1cbiAgICAgIGNvbW1hbmRzLmluc2VydEhUTUwocmgsIHYuaW5uZXJIVE1MKVxuICAgICAgbGV0IGRlZXBlc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3RE9NLmRlZXBlc3RJZClcbiAgICAgIHMuY29sbGFwc2UoZGVlcGVzdE5vZGUsIDEpXG4gICAgICBkZWVwZXN0Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5ld1RleHQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZVxuICAgICAgbmV3VGV4dC5pbm5lckhUTUwgPSAnJiM4MjAzOydcbiAgICAgIHJoLmluc2VydEFmdGVyKG5ld1RleHQsIGl0YWxpYylcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2l0YWxpYy5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGlmICghcy5pc0NvbGxhcHNlZCkge1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgYXJnKVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxldCBub2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgcm93ID0gcmguZ2V0Um93KG5vZGUpXG5cbiAgICAvLyB0aGUgb3V0ZXJtb3N0IGJvbGQgdGFnXG4gICAgbGV0IGJvbGQgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdzdHJvbmcnKSB8fCByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdiJykgfHwgcmguZmluZFNwZWNpYWxBbmNlc3RvckJ5U3R5bGUobm9kZSwge1xuICAgICAgICAnZm9udFdlaWdodCc6ICdib2xkJ1xuICAgICAgfSlcbiAgICBsZXQgZXhpc3RTdHlsZSA9IHJoLmZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIobm9kZSwgWydTVFJJS0UnLCAnSScsICdVJ10sIHJvdylcbiAgICBsZXQgZm9udFNpemUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yU3R5bGUobm9kZSwgJ2ZvbnRTaXplJywgdHJ1ZSwgcm93KVxuICAgIGlmICghYm9sZCkge1xuICAgICAgZXhpc3RTdHlsZS5wdXNoKCdCJylcbiAgICB9XG4gICAgaWYgKGV4aXN0U3R5bGUubGVuZ3RoKSB7XG4gICAgICBsZXQgbmV3RE9NID0gcmguY3JlYXRlTmVzdERPTVRocm91Z2hMaXN0KGV4aXN0U3R5bGUpXG4gICAgICBsZXQgdiA9IHJoLm5ld1JvdygpXG4gICAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICAgIHYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi5hcHBlbmRDaGlsZChuZXdET00uZG9tKVxuICAgICAgfVxuICAgICAgY29tbWFuZHMuaW5zZXJ0SFRNTChyaCwgdi5pbm5lckhUTUwpXG4gICAgICBsZXQgZGVlcGVzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdET00uZGVlcGVzdElkKVxuICAgICAgcy5jb2xsYXBzZShkZWVwZXN0Tm9kZSwgMSlcbiAgICAgIGRlZXBlc3ROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmV3VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplXG4gICAgICBuZXdUZXh0LmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgcmguaW5zZXJ0QWZ0ZXIobmV3VGV4dCwgYm9sZClcbiAgICAgIHMuY29sbGFwc2UobmV3VGV4dCwgMSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9ib2xkLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IHEgPSB7XG4gIC8vIG9ubHkgc2V0IGNvbnRlbnRlZGl0YWJsZTpmYWxzZSBpbiBwYXJlbnQgbm9kZSBjYW4gY2hpbGQgbm9kZSB0cmlnZ2VyIGtleWRvd24gbGlzdGVuZXJcbiAgJ3F1b3RlJyAocmgsIGlzSW5RdW90ZSkge1xuICAgIGxldCBub2RlID0gcmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICBpZiAoaXNJblF1b3RlKSB7XG4gICAgICBub2RlID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBub2RlLnBhcmVudE5vZGUgOiBub2RlXG4gICAgICBsZXQgcXVvdGUgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdbZGF0YS1lZGl0b3ItcXVvdGVdJylcbiAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICBsZXQgdGV4dHMgPSByaC5nZXREZXNjZW5kYW50VGV4dE5vZGVzKHF1b3RlKVxuICAgICAgICBsZXQgcXVvdGVSb3dzID0gW11cbiAgICAgICAgbGV0IHJvd3MgPSBBcnJheS5mcm9tKHF1b3RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9jaycpLmNoaWxkcmVuKVxuICAgICAgICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgICAgIC8vIGZpbmQgcm93IGluIGN1cnJlbnQgcXVvdGUgcm93XG4gICAgICAgICAgLy8gbGV0IHJvdyA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IodGV4dCwgY29uc3RhbnQuUk9XX1RBRywgZmFsc2UsIHF1b3RlKVxuICAgICAgICAgIGxldCByb3dcbiAgICAgICAgICByb3dzLmZvckVhY2goY3VyUm93ID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJSb3cuY29udGFpbnModGV4dCkpIHtcbiAgICAgICAgICAgICAgcm93ID0gY3VyUm93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIXF1b3RlUm93cy5pbmNsdWRlcyhyb3cpKSB7XG4gICAgICAgICAgICBxdW90ZVJvd3MucHVzaChyb3cpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBxdW90ZVJvd3MuZm9yRWFjaCgocXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChxciwgcXVvdGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJoLmluc2VydEFmdGVyKHFyLCBxdW90ZVJvd3NbaW5kZXggLSAxXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgaWYgKHF1b3RlUm93cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgICAgICByYW5nZS5zZXRTdGFydChxdW90ZVJvd3NbMF0sIDApXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKHF1b3RlUm93c1txdW90ZVJvd3MubGVuZ3RoIC0gMV0sIDEpXG4gICAgICAgICAgcy5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICAgIHMuYWRkUmFuZ2UocmFuZ2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaXQncyBhIGVtcHR5IHF1b3RlXG4gICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgcy5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3cobm9kZSlcblxuICAgIC8vIGlzIGF0IGEgZW1wdHkgcm93IHdpdGhvdXQgcm93IGVsZW1lbnQsIHRoZW4gY3JlYXRlIGEgcm93XG4gICAgLy8gb3IgdGV4dHMgaGFzIG5vIGNvbW1vbiBwYXJlbnQgcm93XG4gICAgaWYgKCFjdXJSb3cgJiYgIXRleHRzLmxlbmd0aCkge1xuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgdi5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCBuZXdSb3cub3V0ZXJIVE1MKVxuICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgdGV4dHMucHVzaChzLmZvY3VzTm9kZSlcbiAgICB9XG4gICAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICAgIHRleHRzLnB1c2goY3VyUm93KVxuICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSByaC5uZXdSb3coKVxuICAgIGxldCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGxldCBxdW90ZUJsb2NrID0gcmgubmV3Um93KHt0YWc6ICdkaXYnfSlcbiAgICBxdW90ZUJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItcXVvdGUtYmxvY2snLCByaC5jcmVhdGVSYW5kb21JZCgncXVvdGVibG9jaycpKVxuICAgIHF1b3RlLmFwcGVuZENoaWxkKHF1b3RlQmxvY2spXG4gICAgbGV0IGlkID0gcmguY3JlYXRlUmFuZG9tSWQoJ3F1b3RlJylcbiAgICBxdW90ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJywgaWQpXG4gICAgcXVvdGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuICAgIGxldCBxdW90ZVJvd3MgPSBbXVxuICAgIHRleHRzLmZvckVhY2goKHRleHQsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY3VyUm93ID0gcmguZ2V0Um93KHRleHQpXG5cbiAgICAgIC8vIGNyZWF0ZSBhIHJvdyBmb3IgdGV4dCB3aXRob3V0IHJvd1xuICAgICAgaWYgKCFjdXJSb3cgJiYgdGV4dC5ub2RlVmFsdWUpIHtcbiAgICAgICAgY3VyUm93ID0gcmgubmV3Um93KClcbiAgICAgICAgY3VyUm93LmFwcGVuZENoaWxkKHRleHQpXG4gICAgICB9XG4gICAgICBpZiAoY3VyUm93ICYmICFxdW90ZVJvd3MuaW5jbHVkZXMoY3VyUm93KSkge1xuICAgICAgICBxdW90ZVJvd3MucHVzaChjdXJSb3cpXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgYW5jaG9yUm93XG4gICAgcXVvdGVSb3dzLmZvckVhY2goKHFyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBxdW90ZVJvd3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBxdW90ZUJsb2NrLmFwcGVuZENoaWxkKHFyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHF1b3RlQmxvY2suYXBwZW5kQ2hpbGQocXIuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgYW5jaG9yUm93ID0gcXJcbiAgICB9KVxuXG4gICAgaWYgKGFuY2hvclJvdy5wYXJlbnROb2RlKSB7XG4gICAgICBhbmNob3JSb3cucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocXVvdGUsIGFuY2hvclJvdylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY3VycmVudCByb3cgaXMgY3JlYXRlZCBhbmQgaGFzIG5vIHBhcmVudFxuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgdi5hcHBlbmRDaGlsZChxdW90ZSlcbiAgICAgIHJoLnJhbmdlLmRlbGV0ZUNvbnRlbnRzKClcbiAgICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIHYuaW5uZXJIVE1MKVxuICAgIH1cbiAgICBjb25zdCBjdXJRdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVkaXRvci1xdW90ZT0nJHtpZH0nXWApXG4gICAgaWYgKCFjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkKSByZXR1cm5cbiAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkLCBjdXJRdW90ZS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dCA/IDEgOiAwKVxuICB9LFxuICAnaW5pdFF1b3RlJyAocmgsIGFyZykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIGxldCBxdW90ZSA9IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3IoZS50YXJnZXQsICdbZGF0YS1lZGl0b3ItcXVvdGVdJylcbiAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgICAgIGxldCBub2RlID0gcy5hbmNob3JOb2RlXG4gICAgICAgIGxldCBjdG4gPSBub2RlLmlubmVyVGV4dCB8fCBub2RlLm5vZGVWYWx1ZVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIGlmIChjdG4ucmVwbGFjZSgnXFxuJywgJycpID09PSAnJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgICAgICAgICByaC5pbnNlcnRBZnRlcihuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobmV3Um93LCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcblxuICAgICAgICAgIC8vIGN1cnNvciBtYXkgYXQgcm93IG9yIGF0IHF1b3RlIGJsb2NrICwgc28gdGhlcmUgYXJlIHR3byBqdWRnZW1lbnQgY29uZGl0aW9uc1xuICAgICAgICAgIGlmIChzLmlzQ29sbGFwc2VkICYmIChzLmZvY3VzT2Zmc2V0ID09PSAwIHx8IChub2RlLmNvbnRhaW5zKHMuYmFzZU5vZGUpICYmIChyaC5pc0VtcHR5Tm9kZShzLmJhc2VOb2RlKSkgJiYgcy5mb2N1c09mZnNldCA9PT0gMSkpKSB7XG4gICAgICAgICAgICBsZXQgcm93cyA9IEFycmF5LmZyb20ocXVvdGUucXVlcnlTZWxlY3RvcignW2RhdGEtZWRpdG9yLXF1b3RlLWJsb2NrXScpLmNoaWxkcmVuKVxuXG4gICAgICAgICAgICAvLyBlbXB0eSBxdW90ZVxuICAgICAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgICBxdW90ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHF1b3RlKVxuICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAvLyByb3cgYW5kIG5vZGUgaGFzIGZhdGhlci1jaGlsZCByZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgaWYgKChyb3cgPT09IG5vZGUgfHwgcm93LmNvbnRhaW5zKG5vZGUpIHx8IG5vZGUuY29udGFpbnMocm93KSkgJiYgaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgaGF2ZSBvbmUgZW1wdHkgcm93IGluIHF1b3RlLHRoZW4gZGVsZXRlIHRoZSBxdW90ZVxuICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMSAmJiByaC5pc0VtcHR5Tm9kZShyb3cpKSB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3cgPSByaC5uZXdSb3coe2JyOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgIHF1b3RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1JvdywgcXVvdGUpXG4gICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAvLyBmaXJzdCByb3cgaGF2ZSBjb250ZW50IGFuZCBwcmV2aW91cyBlbGVtZW50IGV4aXN0LCB0aGVuIG1vdmUgY3Vyc29yIHRvIHByZXZpb3VzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBwcmVSb3cgPSByaC5nZXRQcmV2aW91c1JvdyhxdW90ZSlcbiAgICAgICAgICAgICAgICAgIGlmIChwcmVSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgcXVvdGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVsZSA9IEFycmF5LmZyb20ocHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVkaXRvci1xdW90ZS1ibG9ja10nKS5jaGlsZHJlbikucG9wKClcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UobGFzdEVsZSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShsYXN0RWxlLCAwKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzIHJvdyBpcyBhIHRvZG9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHByZVJvdy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInRleHRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXMgcm93IGlzIGEgcm93XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UocHJlUm93LCAxKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2UocHJlUm93LCAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9xdW90ZS5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuaW1wb3J0IGNvbnN0YW50IGZyb20gJy4uL2NvbnN0YW50LWNvbmZpZydcblxuY29uc3QgdCA9IHtcbiAgJ3RvZG8nIChyaCwgZGF0YSkge1xuICAgIGxldCByb3cgPSByaC5uZXdSb3coe1xuICAgICAgYnI6IHRydWVcbiAgICB9KVxuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3cocmgucmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgXG4gICAgLy8gYSBlbXB0eSByb3cgd2l0aG91dCByb3cgZWxlbWVudCwgY3JlYXRlIGEgcm93IGVsZW1lbnRcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IHYgPSByaC5uZXdSb3coKVxuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgdi5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgICBjb21tYW5kcy5pbnNlcnRIVE1MKHJoLCBuZXdSb3cub3V0ZXJIVE1MKVxuICAgICAgbGV0IHMgPSByaC5nZXRTZWxlY3Rpb24oKVxuICAgICAgY3VyUm93ID0gcy5mb2N1c05vZGVcbiAgICB9XG5cbiAgICAvLyBpbnNlcnQgdG9kbyBhZnRlciB0aGlzIHJvd1xuICAgIGxldCBhZnRlcldoaWNoID0gcmguZ2V0Um93KGRhdGEuaW5zZXJ0QWZ0ZXIpXG5cbiAgICAvLyBpcyBhZnRlcldoaWNoIGlzIGEgZW1wdHkgcm93LCBqdXN0IGluc2VydCB0b2RvIGF0IGN1cnJlbnQgcm93XG4gICAgaWYgKGFmdGVyV2hpY2ggJiYgcmguaXNFbXB0eVJvdyhhZnRlcldoaWNoKSkge1xuICAgICAgYWZ0ZXJXaGljaCA9IG51bGxcbiAgICB9XG4gICAgaWYgKGFmdGVyV2hpY2gpIHtcbiAgICAgIGxldCB0YXJnZXRJbmRleFxuICAgICAgbGV0IHN0YXJ0SW5kZXhcbiAgICAgIGxldCBsaXN0ID0gYWZ0ZXJXaGljaC5wYXJlbnROb2RlLmNoaWxkTm9kZXNcbiAgICAgIGxpc3QuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gYWZ0ZXJXaGljaCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBpbmRleFxuICAgICAgICAgIGlmIChzdGFydEluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID0gbGlzdC5sZW5ndGhcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggIT09IHVuZGVmaW5lZCAmJiB0YXJnZXRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdG9kbycpKSB7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA9IGluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleCA9PT0gdW5kZWZpbmVkID8gc3RhcnRJbmRleCArIDEgOiB0YXJnZXRJbmRleFxuICAgICAgYWZ0ZXJXaGljaC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyb3csIGxpc3RbdGFyZ2V0SW5kZXhdKVxuICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAwKVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIGluc2VydCB0b2RvIGF0IGN1cnJlbnQgcm93IGlmIGl0IGlzIGVtcHR5XG4gICAgICBpZiAocmguaXNFbXB0eVJvdyhjdXJSb3cpKSB7XG4gICAgICAgIHJoLmNvbGxhcHNlQXRSb3coY3VyUm93KVxuICAgICAgICByb3cgPSBjdXJSb3dcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdywgMClcbiAgICAgICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAwKVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdG9kb0lkID0gcmguY3JlYXRlUmFuZG9tSWQoJ3RvZG8nKVxuICAgIGNvbW1hbmRzWydpbnNlcnRIVE1MJ10ocmgsIGA8JHtjb25zdGFudC5ST1dfVEFHfSBkYXRhLWVkaXRvci10b2RvPSR7dG9kb0lkfSBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke2RhdGEucGxhY2Vob2xkZXJ9XCI+PC8ke2NvbnN0YW50LlJPV19UQUd9Pjxicj5gKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVkaXRvci10b2RvPScke3RvZG9JZH0nXSBpbnB1dFt0eXBlPXRleHRdYCkuZm9jdXMoKVxuICAgIHJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdylcbiAgICB0Wydpbml0VG9kbyddKHJoLCBkYXRhKVxuICB9LFxuICAvLyBpbml0IHRvZG8gbG9naWNcbiAgJ2luaXRUb2RvJyAocmgsIGRhdGEpIHtcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lZGl0b3ItdG9kb10nKVxuICAgIGNoZWNrYm94cy5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gYy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1jaGVja2JveF0nKVxuICAgICAgY29uc3QgY3RuID0gYy5xdWVyeVNlbGVjdG9yKCdbdHlwZT10ZXh0XScpXG4gICAgICBpZiAoYy5pbml0KSByZXR1cm5cbiAgICAgIGN0bkNoZWNrZWRMb2dpYygpXG5cbiAgICAgIGZ1bmN0aW9uIGN0bkNoZWNrZWRMb2dpYygpIHtcbiAgICAgICAgY3RuLnZhbHVlID0gY3RuLnZhbHVlIHx8IGN0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJylcbiAgICAgICAgY3RuLnNldEF0dHJpYnV0ZSgnZGF0YS1lZGl0b3ItdmFsdWUnLCBjdG4udmFsdWUpXG4gICAgICAgIGlmIChidG4uY2hlY2tlZCkge1xuICAgICAgICAgIGN0bi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0bi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xuICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgYnRuLm9uY2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGN0bkNoZWNrZWRMb2dpYygpXG4gICAgICAgIGlmIChyaC5lZGl0b3IgJiYgcmguZWRpdG9yLiRyZWZzICYmIHJoLmVkaXRvci4kcmVmcy5jb250ZW50KSB7XG4gICAgICAgICAgcmguZWRpdG9yLiRlbWl0KCdjaGFuZ2UnLCByaC5lZGl0b3IuJHJlZnMuY29udGVudC5pbm5lckhUTUwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN0bi5vbmlucHV0ID0gZSA9PiB7XG4gICAgICAgIGN0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXZhbHVlJywgZS50YXJnZXQudmFsdWUpXG4gICAgICB9XG4gICAgICBjdG4ub25rZXlkb3duID0gY3RuLm9ua2V5ZG93biB8fCAoZSA9PiB7XG4gICAgICAgICAgaWYgKCFbMTMsIDhdLmluY2x1ZGVzKGUua2V5Q29kZSkpIHJldHVyblxuICAgICAgICAgIGxldCByb3cgPSBjLm5leHRTaWJsaW5nXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGlmIChjdG4udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlVG9kbygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Wyd0b2RvJ10ocmgsIHtcbiAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXI6IGMsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBkYXRhLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoY3RuLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBkZWxldGVUb2RvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1Jvdyh7YnI6IHRydWV9KVxuICAgICAgICAgICAgYy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIGMpXG4gICAgICAgICAgICByaC5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZShuZXdSb3csIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgYy5pbml0ID0gdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL3RvZG8uanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICBsZXQgbm9kZSA9IHJoLnJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXG4gICAgLy8gdG8ga2VlcCB0ZXh0IHdyYXAgYnkgYSByb3dcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlID09PSByaC5lZGl0Wm9uZSgpKSB7XG4gICAgICBjb21tYW5kcy5mb3JtYXRCbG9jayhyaCwgY29uc3RhbnQuUk9XX1RBRylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2tleWRvd24uanMiLCJpbXBvcnQgY29tbWFuZHMgZnJvbSAnLi9pbmRleCdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi9jb25zdGFudC1jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgZSkge1xuICAvLyByZXN0b3JlIGZpcnN0IHJvd1xuICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gIGxldCBub2RlID0gcy5iYXNlTm9kZVxuICBsZXQgdmFsdWUgPSBub2RlLm5vZGVWYWx1ZSB8fCBub2RlLmlubmVyVGV4dFxuICAvLyBjb25zb2xlLmxvZygnZGVsZXRlJywgbm9kZSwgZSlcbiAgbGV0IGN1clJhbmdlID0gcmguZ2V0UmFuZ2UoKSB8fCByaC5yYW5nZVxuXG4gIC8vIGNhbmNlbCBsaXN0IHdoZW4gbGkgaXMgZW1wdHlcbiAgaWYgKChyaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICdsaScpKSAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB1bE9yT2wgPSByaC5maW5kU3BlY2lhbEFuY2VzdG9yKG5vZGUsICd1bCcpIHx8IHJoLmZpbmRTcGVjaWFsQW5jZXN0b3Iobm9kZSwgJ29sJylcbiAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnVUwnKSB7XG4gICAgICBjb21tYW5kc1snaW5zZXJ0VW5vcmRlcmVkTGlzdCddKHJoLCBlKVxuICAgIH1cbiAgICBpZiAodWxPck9sLm5vZGVOYW1lID09PSAnT0wnKSB7XG4gICAgICBjb21tYW5kc1snaW5zZXJ0T3JkZXJlZExpc3QnXShyaCwgZSlcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IHJvdyA9IHJoLmdldFJvdyhub2RlKVxuXG4gIC8vIG5vZGUgaXMgZWRpdCB6b25lXG4gIGlmICghcm93KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGFmdGVyRGVsZXRlKHJoKVxuICB9XG4gIFxuICAvLyBlbXB0eSByb3dcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiAoKG5vZGUgPT09IHJvdyAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCkgfHwgKHJvdy5pbm5lckhUTUwucmVwbGFjZSgvPGJyPi9nLCAnJykgPT09ICcnICYmIHJoLnJhbmdlLnN0YXJ0T2Zmc2V0ID09PSAxKSkpIHtcbiAgICBsZXQgZmlyc3RSb3cgPSByaC5lZGl0Wm9uZSgpLmZpcnN0RWxlbWVudENoaWxkXG5cbiAgICAvLyBmaXJzdCByb3cgY2FuY2VsIG91dGRlbnRcbiAgICBpZiAoZmlyc3RSb3cgPT09IHJvdykge1xuICAgICAgY29tbWFuZHMub3V0ZGVudChyaCwgbnVsbClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgLy8gcm93IGhhcyBjb250ZW50LCBjdXJzb3IgaXMgYXQgYXQgc3RhcnQgb2YgdGhlIG5vZGUsIGRvIG91dGRlbnRcbiAgaWYgKHJoLnJhbmdlLmNvbGxhcHNlZCAmJiB2YWx1ZSAmJiByaC5yYW5nZS5zdGFydE9mZnNldCA9PT0gMCAmJiAobm9kZSA9PT0gcm93LmZpc3RFbGVtZW50Q2hpbGQgfHwgbm9kZSA9PT0gcm93LmZpcnN0Q2hpbGQpKSB7XG4gICAgbGV0IG91dGRlbnRSZXN1bHQgPSBjb21tYW5kcy5vdXRkZW50KHJoLCBudWxsKVxuICAgIGlmIChvdXRkZW50UmVzdWx0ID09PSAnTk9fTkVFRF9PVVRERU5UJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gZW1wdHkgcm93XG4gIGlmIChyb3cuaW5uZXJIVE1MLnJlcGxhY2UoLzxicj4vZywgJycpID09PSAnJykge1xuICAgIC8vIGdldCBwcmV2aW91cyByb3cgd2l0aCBjb250ZW50XG4gICAgbGV0IHByZVJvdyA9IHJoLmdldFByZXZpb3VzUm93KHJvdylcblxuICAgIC8vIGN1cnNvciBmb2N1cyBvbiBwcmV2aW91cyByb3cncyBpbnB1dCBpZiBwcmV2aW91cyByb3cgaXMgdG9kb1xuICAgIGlmIChwcmVSb3cgJiYgcHJlUm93LmRhdGFzZXQgJiYgcHJlUm93LmRhdGFzZXQuZWRpdG9yVG9kbykge1xuICAgICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KVxuICAgICAgbGV0IGlucHV0ID0gcHJlUm93LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJylcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHJldHVybiBhZnRlckRlbGV0ZShyaClcbn1cblxuLy8gaGFuZGxlICYjODIwMzsgYWZ0ZXIgZGVsZXRlXG5mdW5jdGlvbiBhZnRlckRlbGV0ZShyaCkge1xuICBsZXQgZGVsZXRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBsZXQgZm9jdXNOb2RlID0gcy5mb2N1c05vZGVcbiAgICBsZXQgY3RuID0gdHlwZW9mIGZvY3VzTm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gZm9jdXNOb2RlLmlubmVyVGV4dCA6IGZvY3VzTm9kZS5ub2RlVmFsdWVcbiAgICBpZiAodHlwZW9mIGN0biA9PT0gJ3N0cmluZycgJiYgL1xcdTIwMEIvLnRlc3QoY3RuKSAmJiBjdG4ucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnKSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVsZXRlJywgZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGRlbGV0ZUludGVydmFsKVxuICAgIH1cbiAgfSlcblxuICAvLyBpZiBlZGl0IHpvbmUgaXMgZW1wdHksIGNyZWF0ZSBhIHJvd1xuICBpZiAocmguaXNFbXB0eU5vZGUocmguZWRpdFpvbmUoKSkgJiYgIXJoLmdldFJvd3MoKS5sZW5ndGgpIHtcbiAgICBsZXQgcm93ID0gcmgubmV3Um93KHticjogdHJ1ZX0pXG4gICAgcmguZWRpdFpvbmUoKS5hcHBlbmRDaGlsZChyb3cpXG4gICAgcmguZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2Uocm93LCAxKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbWFuZHMvZGVsZXRlLmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlSaWdodC5qcyIsImltcG9ydCBjb21tYW5kcyBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmgsIGFyZykge1xuICBsZXQgdGV4dHMgPSByaC5nZXRBbGxUZXh0Tm9kZXNJblJhbmdlKClcbiAgaWYgKCF0ZXh0cy5sZW5ndGgpIHtcbiAgICBsZXQgcyA9IHJoLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIHRleHRzLnB1c2gocy5iYXNlTm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgJyYjODIwMzsnKVxuICAgICAgaWYgKHMuYmFzZU5vZGUgJiYgcy5iYXNlTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuICAgIGxldCBjdXJSb3cgPSByaC5nZXRSb3codGV4dClcbiAgICBpZiAoIWN1clJvdykge1xuICAgICAgbGV0IG5ld1JvdyA9IHJoLm5ld1JvdygpXG4gICAgICBuZXdSb3cuaW5uZXJUZXh0ID0gdGV4dC5ub2RlVmFsdWVcbiAgICAgIGxldCBuZXh0U2libGluZyA9IHRleHQubmV4dFNpYmxpbmdcbiAgICAgIHRleHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCB0ZXh0KVxuICAgICAgaWYgKG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcsIGZhbHNlKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1hbmRzL2p1c3RpZnlMZWZ0LmpzIiwiaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyaCwgYXJnKSB7XG4gIGxldCB0ZXh0cyA9IHJoLmdldEFsbFRleHROb2Rlc0luUmFuZ2UoKVxuICBpZiAoIXRleHRzLmxlbmd0aCkge1xuICAgIGxldCBzID0gcmguZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdGV4dHMucHVzaChzLmJhc2VOb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCAnJiM4MjAzOycpXG4gICAgICBpZiAocy5iYXNlTm9kZSAmJiBzLmJhc2VOb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0cy5wdXNoKHMuYmFzZU5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRleHRzLmZvckVhY2godGV4dCA9PiB7XG4gICAgbGV0IGN1clJvdyA9IHJoLmdldFJvdyh0ZXh0KVxuICAgIGlmICghY3VyUm93KSB7XG4gICAgICBsZXQgbmV3Um93ID0gcmgubmV3Um93KClcbiAgICAgIG5ld1Jvdy5pbm5lclRleHQgPSB0ZXh0Lm5vZGVWYWx1ZVxuICAgICAgbGV0IG5leHRTaWJsaW5nID0gdGV4dC5uZXh0U2libGluZ1xuICAgICAgdGV4dC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb3csIHRleHQpXG4gICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXh0U2libGluZylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlDZW50ZXInLCBmYWxzZSlcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9qdXN0aWZ5Q2VudGVyLmpzIiwiaW1wb3J0IGFtIGZyb20gJy4vYXNzaXN0LW1ldGhvZHMnXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi4vY29uc3RhbnQtY29uZmlnJ1xuXG5jb25zdCBtID0ge1xuICAvKipcbiAgICogZnVuYyBhZGQgZXZlcnkgZWxlbWVudHMgb2YgZXh0QXJyIHRvIHNvdXJjZUFyci5cbiAgICogQHBhcmFtIHNvdXJjZUFyclxuICAgKiBAcGFyYW0gZXh0QXJyXG4gICAqL1xuICBtZXJnZUFycmF5IChzb3VyY2VBcnIsIGV4dEFycikge1xuICAgIC8vIG5vdGU6IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycjEsYXJyMikgaXMgdW5yZWxpYWJsZVxuICAgIGV4dEFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgc291cmNlQXJyLnB1c2goZWwpXG4gICAgfSlcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYSBlbGVtZW50XG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKi9cbiAgZ2V0RGVzY2VuZGFudFRleHROb2RlcyAoYW5jZXN0b3IpIHtcbiAgICBpZiAoYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICByZXR1cm4gW2FuY2VzdG9yXVxuICAgIH1cbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGlmICghYW5jZXN0b3IuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhbmNlc3Rvci5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBmaW5kIGFsbCB0aGUgZGVzY2VuZGFudCB0ZXh0IG5vZGVzIG9mIGFuIGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBiZWZvcmUgdGhlIHNwZWNpZnkgZW5kIGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIGVuZCBlbGVtZW50LlxuICAgKiBAcGFyYW0gYW5jZXN0b3JcbiAgICogQHBhcmFtIGVuZEVsXG4gICAqL1xuICBnZXRCZWZvcmVFbmREZXNjZW5kYW50VGV4dE5vZGVzIChhbmNlc3RvciwgZW5kRWwpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXVxuICAgIGxldCBlbmRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKGVuZEVsKSkge1xuICAgICAgICBlbmRJbmRleCA9IGlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IGVuZEVsKSB7XG4gICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QmVmb3JlRW5kRGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBlbmRFbCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzXG4gIH0sXG4gIC8qKlxuICAgKiBmdW5jIGZpbmQgYWxsIHRoZSBkZXNjZW5kYW50IHRleHQgbm9kZXMgb2YgYW4gYW5jZXN0b3IgZWxlbWVudCB0aGF0IGFmdGVyIHRoZSBzcGVjaWZ5IHN0YXJ0IGVsZW1lbnQsXG4gICAqIHRoZSBhbmNlc3RvciBlbGVtZW50IG11c3QgY29udGFpbnMgdGhlIHN0YXJ0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBhbmNlc3RvclxuICAgKiBAcGFyYW0gc3RhcnRFbFxuICAgKi9cbiAgZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMgKGFuY2VzdG9yLCBzdGFydEVsKSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gW11cbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2VzdG9yLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZE5vZGVzW2ldLmNvbnRhaW5zKHN0YXJ0RWwpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBhbmNlc3Rvci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gYW5jZXN0b3IuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUgPT09IHN0YXJ0RWwpIHtcbiAgICAgICAgbS5tZXJnZUFycmF5KHRleHROb2RlcywgbS5nZXREZXNjZW5kYW50VGV4dE5vZGVzKG5vZGUpKVxuICAgICAgfSBlbHNlIGlmIChpID09PSBzdGFydEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgICAgbS5nZXRBZnRlclN0YXJ0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlLCBzdGFydEVsKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLFxuICAgICAgICAgIG0uZ2V0RGVzY2VuZGFudFRleHROb2Rlcyhub2RlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHROb2Rlc1xuICB9LFxuICAvKipcbiAgICogZnVuYyBnZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGJsb2NrIG5vZGUgb2YgYSB0ZXh0IG5vZGUuXG4gICAqIEBwYXJhbSBub2RlXG4gICAqIEByZXR1cm4ge05vZGV9XG4gICAqL1xuICBnZXRQYXJlbnRCbG9ja05vZGUgKG5vZGUpIHtcbiAgICBjb25zdCBibG9ja05vZGVOYW1lcyA9IFsnRElWJywgJ1AnLCAnU0VDVElPTicsICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicsXG4gICAgICAnT0wnLCAnVUwnLCAnTEknLCAnVFInLCAnVEQnLCAnVEgnLCAnVEJPRFknLCAnVEhFQUQnLCAnVEFCTEUnLCAnQVJUSUNMRScsICdIRUFERVInLCAnRk9PVEVSJywgJ0JMT0NLUVVPVEUnXVxuICAgIGxldCBjb250YWluZXIgPSBub2RlXG4gICAgd2hpbGUgKGNvbnRhaW5lcikge1xuICAgICAgaWYgKGJsb2NrTm9kZU5hbWVzLmluY2x1ZGVzKGNvbnRhaW5lci5ub2RlTmFtZSkpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfSxcbiAgaXNJbmxpbmVFbGVtZW50IChub2RlKSB7XG4gICAgY29uc3QgaW5saW5lTm9kZU5hbWVzID0gWydBJywgJ0FCQlInLCAnQUNST05ZTScsICdCJywgJ0NJVEUnLCAnQ09ERScsICdFTScsICdJJyxcbiAgICAgICdGT05UJywgJ0lNRycsICdTJywgJ1NNQUxMJywgJ1NQQU4nLCAnU1RSSUtFJywgJ1NUUk9ORycsICdVJywgJ1NVQicsICdTVVAnXVxuICAgIHJldHVybiBpbmxpbmVOb2RlTmFtZXMuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSlcbiAgfSxcbiAgaXNJbmxpbmVPclRleHQgKG5vZGUpIHtcbiAgICBsZXQgaXNJbmxpbmUgPSBtLmlzSW5saW5lRWxlbWVudChub2RlKVxuICAgIGxldCBpc1RleHQgPSBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERVxuICAgIHJldHVybiBpc0lubGluZSB8fCBpc1RleHRcbiAgfSxcbiAgLypcbiAgICogZmluZCBhbGwgc3BlY2lmeSBub2RlcyBpbiBhbiBhbmNlc3RvciB0aHJvdWdoIHNlYXJjaCBvcGluaW9ucyh1bmlxdWUgYXR0cmlidXRlcylcbiAgICogQHBhcmFtIG5vZGVcbiAgICogQHBhcmFtIHtvYmp9XG4gICAqICAgICBtdXN0IGhhdmUga2V5ICd0YWdOYW1lJ1xuICAgKiBAcmV0dXJuIHthcnJ9XG4gICAqKi9cbiAgZ2V0QWxsU3BlY2lmeU5vZGUgKGFuY2VzdG9yLCBzZWFyY2hPcGluaW9uKSB7XG4gICAgY29uc3QgdGFyZ2V0VGFnTmFtZSA9IHNlYXJjaE9waW5pb24udGFnTmFtZVxuICAgIGRlbGV0ZSBzZWFyY2hPcGluaW9uLnRhZ05hbWVcbiAgICBjb25zdCB0YWdzID0gYW5jZXN0b3IucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRUYWdOYW1lKVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBjb25zdCBvcGluaW9uS2V5cyA9IE9iamVjdC5rZXlzKHNlYXJjaE9waW5pb24pXG4gICAgICBsZXQgcGFzcyA9IHRydWVcbiAgICAgIG9waW5pb25LZXlzLmZvckVhY2gob3BpbmlvbiA9PiB7XG4gICAgICAgIHZhciBhID0gdGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKVxuICAgICAgICBpZiAodGFnLmdldEF0dHJpYnV0ZShvcGluaW9uKSAhPT0gc2VhcmNoT3BpbmlvbltvcGluaW9uXSkge1xuICAgICAgICAgIHBhc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKHBhc3MpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGFnKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiBmdW5jIGZpbmQgdGhlIG51bWJlciBvZiBuZXN0aW5nIGFuY2VzdG9yIHdoaWNoIGhhcyBzYW1lIG5vZGUgbmFtZVxuICAgKiBAcGFyYW0ge25vZGV9IGN1cnJlbnQgbm9kZVxuICAgKiBAcGFyYW0ge3N0cn0gYW5jZXN0b3IncyB0YWcgbmFtZVxuICAgKiBAcmV0dXJuIHtudW19IG51bWJlclxuICAgKiovXG4gIGhvd01hbnlOZXN0QW5jZXN0b3JTYW1lVGFnIChub2RlLCBhbmNlc3Rvck5vZGVOYW1lKSB7XG4gICAgbGV0IG51bSA9IDBcbiAgICBhbmNlc3Rvck5vZGVOYW1lID0gYW5jZXN0b3JOb2RlTmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgIT09IGFtLmVkaXRab25lKCkpKSB7XG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gYW5jZXN0b3JOb2RlTmFtZSkge1xuICAgICAgICBudW0rK1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gbnVtXG4gIH0sXG5cbiAgLypcbiAgICogZmluZCBhbiBhbmNlc3RvciBlbGVtZW50IHRocm91Z2ggc2VsZWN0b3JcbiAgICogQHBhcmFtIHtub2RlfSBzdGFydCBhdCBub2RlXG4gICAqIEBwYXJhbSB7c3RyfSBhbmNlc3RvciBlbGVtZW50J3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtib29sZWFufSBlaXRoZXIgcmV0dXJuIGZpcnN0IGVsaWdpYmxlIGVsZW1lbnQgb3IgbGFzdCBlbGlnaWJsZSBlbGVtZW50XG4gICAqICBkZWZhdWx0OiB0cnVlXG4gICAqIEBwYXJhbSB7bm9kZX0gc2VhcmNoaW5nIHN0b3AgYXQgdGhlIGJvcmRlciBlbGVtZW50XG4gICAqICBkZWZhdWx0OiBlZGl0b3IncyBjb250ZW50IHpvbmVcbiAgICogQHJldHVybiB0YXJnZXQgYW5jZXN0b3IgZWxlbWVudFxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3IgKG5vZGUsIHNlbGVjdG9yLCBmaXJzdE9uZSA9IHRydWUsIGJvcmRlcikge1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgKGZpcnN0T25lID8gIXJlc3VsdCA6IHRydWUpICYmIChub2RlICE9PSBib3JkZXIpKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBhbmNlc3RvcnMgPSBBcnJheS5mcm9tKG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChhbmNlc3RvcnMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBub2RlXG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgdGFyZ2V0IHN0eWxlXG4gICAqKi9cbiAgZmluZFNwZWNpYWxBbmNlc3RvclN0eWxlIChub2RlLCBzdHlsZU5hbWUsIGZpcnN0T25lID0gdHJ1ZSwgYm9yZGVyKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBjb250ZW50Wm9uZSA9IGFtLmVkaXRab25lKClcbiAgICBib3JkZXIgPSBib3JkZXIgfHwgY29udGVudFpvbmVcbiAgICB3aGlsZSAobm9kZSAmJiAoZmlyc3RPbmUgPyAhcmVzdWx0IDogdHJ1ZSkgJiYgKG5vZGUgIT09IGJvcmRlcikpIHtcbiAgICAgIGlmICghYm9yZGVyIHx8ICFib3JkZXIuY29udGFpbnMobm9kZSkpIHJldHVyblxuICAgICAgaWYgKG5vZGUuc3R5bGUgJiYgbm9kZS5zdHlsZVtzdHlsZU5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCA9IG5vZGUuc3R5bGVbc3R5bGVOYW1lXVxuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIC8qXG4gICAqIGZpbmQgYW4gYW5jZXN0b3IgZWxlbWVudCB0aHJvdWdoIHN0eWxlIG5hbWUgYW5kIHN0eWxlIHZhbHVlXG4gICAqIEBwYXJhbSBzdHlsZSB7b2JqfSBzdHlsZU5hbWU6IHN0eWxlVmFsdWVcbiAgICogQHJldHVyblxuICAgKiovXG4gIGZpbmRTcGVjaWFsQW5jZXN0b3JCeVN0eWxlIChub2RlLCBzdHlsZSwgZmlyc3RPbmUgPSB0cnVlLCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGNvbnRlbnRab25lID0gYW0uZWRpdFpvbmUoKVxuICAgIGJvcmRlciA9IGJvcmRlciB8fCBjb250ZW50Wm9uZVxuICAgIHdoaWxlIChub2RlICYmIChmaXJzdE9uZSA/ICFyZXN1bHQgOiB0cnVlKSAmJiAobm9kZSAhPT0gYm9yZGVyKSkge1xuICAgICAgaWYgKCFib3JkZXIgfHwgIWJvcmRlci5jb250YWlucyhub2RlKSkgcmV0dXJuXG4gICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICBsZXQgaXNUYXJnZXQgPSB0cnVlXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xuICAgICAgICBpZiAoc3R5bGVbc3R5bGVOYW1lXSAhPT0gcGFyZW50LnN0eWxlW3N0eWxlTmFtZV0pIHtcbiAgICAgICAgICBpc1RhcmdldCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoaXNUYXJnZXQpIHtcbiAgICAgICAgcmVzdWx0ID0gcGFyZW50XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBwYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIGdldE5vZGVOdW0gKGFuY2VzdG9yLCBub2RlTmFtZSkge1xuICAgIHJldHVybiBhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKG5vZGVOYW1lKS5sZW5ndGhcbiAgfSxcbiAgLyoqXG4gICAqIGZpbmQgYWxsIHRoZSB0ZXh0IG5vZGVzIGluIHJhbmdlXG4gICAqL1xuICBnZXRBbGxUZXh0Tm9kZXNJblJhbmdlKCkge1xuICAgIGNvbnN0IHN0YXJ0Q29udGFpbmVyID0gdGhpcy5yYW5nZS5zdGFydENvbnRhaW5lclxuICAgIGNvbnN0IGVuZENvbnRhaW5lciA9IHRoaXMucmFuZ2UuZW5kQ29udGFpbmVyXG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5yYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lclxuICAgIGNvbnN0IHRleHROb2RlcyA9IFtdXG5cbiAgICBpZiAoc3RhcnRDb250YWluZXIgPT09IGVuZENvbnRhaW5lcikge1xuICAgICAgaWYgKHN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICByZXR1cm4gW3N0YXJ0Q29udGFpbmVyXVxuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJhbmdlLnN0YXJ0T2Zmc2V0OyBpIDwgdGhpcy5yYW5nZS5lbmRPZmZzZXQ7IGkrKykge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMoY2hpbGROb2Rlc1tpXSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dE5vZGVzXG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXG4gICAgbGV0IGVuZEluZGV4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKG5vZGUuY29udGFpbnMoc3RhcnRDb250YWluZXIpKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpXG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jb250YWlucyhlbmRDb250YWluZXIpKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290RWwuY2hpbGROb2Rlc1tpXVxuICAgICAgaWYgKGkgPT09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIG0ubWVyZ2VBcnJheSh0ZXh0Tm9kZXMsIG0uZ2V0QWZ0ZXJTdGFydERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgc3RhcnRDb250YWluZXIpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGVuZEluZGV4KSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldEJlZm9yZUVuZERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSwgZW5kQ29udGFpbmVyKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0Tm9kZXMucHVzaChub2RlKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBtLm1lcmdlQXJyYXkodGV4dE5vZGVzLCBtLmdldERlc2NlbmRhbnRUZXh0Tm9kZXMobm9kZSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgfSxcbiAgLypcbiAgICogZ2V0IHRoZSByb3cgd2hpY2ggY29udGFpbnMgdGFyZ2V0IGVsZW1lbnRcbiAgICogQHBhcmFtIHtub2RlfSB0YXJnZXQgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtub2RlfSByb3dcbiAgICoqL1xuICBnZXRSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICBsZXQgcmVzdWx0XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmNvbnRhaW5zKG5vZGUpIHx8IHJvdyA9PT0gbm9kZSkge1xuICAgICAgICByZXN1bHQgPSByb3dcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgdGV4dFRvUm93IChub2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gYW0uZWRpdFpvbmUoKSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsIGNvbnN0YW50LlJPV19UQUdfVVBQRVJDQVNFKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9LFxuICAvKlxuICAgKiBnZXQgcm93LCBpZiB0aGVyZSdzIG5vdCwgY3JlYXRlIG9uZVxuICAgKiovXG4gIGZvcmNlR2V0Um93IChub2RlKSB7XG4gICAgbm9kZSA9IG0udGV4dFRvUm93KG5vZGUpXG4gICAgcmV0dXJuIG0uZ2V0Um93KG5vZGUpXG4gIH0sXG4gIC8qXG4gICAqIHJldHVybiBhbGwgcm93c1xuICAgKiovXG4gIGdldFJvd3MgKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFtLmVkaXRab25lKCkuY2hpbGRyZW4pXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgY3VycmVudCBub2RlIGlzIGEgcm93XG4gICAqKi9cbiAgaXNSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93cyA9IEFycmF5LmZyb20oYW0uZWRpdFpvbmUoKS5jaGlsZHJlbilcbiAgICByZXR1cm4gcm93cy5pbmNsdWRlcyhub2RlKVxuICB9LFxuICAvKlxuICAgKiBjcmVhdGUgYSB3cmFwcGVyIGZvciBpbmxpbmUgZWxlbWVudCBpbiBzYW1lIHJvd1xuICAgKiovXG4gIGNyZWF0ZVdyYXBwZXJGb3JJbmxpbmUgKG5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyID0gdHJ1ZSkge1xuICAgIGlmICghbS5pc0lubGluZU9yVGV4dChub2RlKSkgcmV0dXJuIG5vZGVcbiAgICBsZXQgZWxlbWVudHMgPSBbbm9kZV1cbiAgICBzZWFyY2hMZWZ0KClcbiAgICBzZWFyY2hSaWdodCgpXG4gICAgbGV0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlck5vZGVOYW1lKVxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAhPT0gZWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBsYXN0T25lID0gZWxlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGxhc3RPbmUpXG4gICAgICBlbGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Um93LCBlbGUpXG4gICAgfSlcblxuICAgIGlmIChzZXBlcmF0ZUJ5QnIpIHtcbiAgICAgIGhhbmRsZXJCcihuZXdSb3cucHJldmlvdXNTaWJsaW5nLCB0cnVlKVxuICAgICAgaGFuZGxlckJyKG5ld1Jvdy5uZXh0U2libGluZywgZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiBuZXdSb3dcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXJCcihub2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChub2RlICYmIG5vZGUubm9kZU5hbWUgPT09ICdCUicpIHtcbiAgICAgICAgbGV0IG5leHREaXIgPSBkaXJlY3Rpb24gPyAncHJldmlvdXNTaWJsaW5nJyA6ICduZXh0U2libGluZydcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBub2RlW25leHREaXJdXG4gICAgICAgIGlmICghdGFyZ2V0Tm9kZSkgcmV0dXJuXG4gICAgICAgIGlmICh0YXJnZXROb2RlLm5vZGVOYW1lID09PSAnQlInKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXJCcih0YXJnZXROb2RlLCBkaXJlY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgbS5jcmVhdGVXcmFwcGVyRm9ySW5saW5lKHRhcmdldE5vZGUsIHdyYXBwZXJOb2RlTmFtZSwgc2VwZXJhdGVCeUJyKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZWFyY2hMZWZ0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZyAmJiBtLmlzSW5saW5lT3JUZXh0KGVsZW1lbnRzWzBdLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgZWxlbWVudHMudW5zaGlmdChlbGVtZW50c1swXS5wcmV2aW91c1NpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaFJpZ2h0KCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICYmIG0uaXNJbmxpbmVPclRleHQoZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKlxuICAgKiBnZXQgbm9kZSdzIHByZXZpb3VzIHJvdyB3aGljaCBoYXMgY29udGVudFxuICAgKiovXG4gIGdldFByZXZpb3VzUm93IChub2RlKSB7XG4gICAgbGV0IHJvdyA9IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHByZVJvd1xuICAgIGxldCByb3dzID0gbS5nZXRSb3dzKClcbiAgICBsZXQgcm93SW5kZXggPSBudWxsXG4gICAgcm93cy5mb3JFYWNoKChjdXJSb3csIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY3VyUm93ID09PSByb3cpIHtcbiAgICAgICAgcm93SW5kZXggPSBpbmRleFxuICAgICAgfVxuICAgICAgaWYgKHJvd0luZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJSb3cuaW5uZXJIVE1MICE9PSAnJykge1xuICAgICAgICAgIHByZVJvdyA9IGN1clJvd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcHJlUm93XG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IHJvdyBpcyBlbXB0eVxuICAgKiovXG4gIGlzRW1wdHlSb3cgKG5vZGUpIHtcbiAgICBsZXQgcm93ID0gbS5pc1Jvdyhub2RlKSA/IG5vZGUgOiBtLmdldFJvdyhub2RlKVxuICAgIGlmIChyb3cuZ2V0QXR0cmlidXRlKSB7XG4gICAgICBpZiAodHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXRvZG8nKSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdG9yLXF1b3RlJykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93LmlubmVyVGV4dC5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHdoZXRoZXIgdGFyZ2V0IG5vZGUgaXMgZW1wdHlcbiAgICoqL1xuICBpc0VtcHR5Tm9kZSAobm9kZSkge1xuICAgIGxldCBjdG4gPSB0eXBlb2Ygbm9kZS5pbm5lclRleHQgPT09ICdzdHJpbmcnID8gbm9kZS5pbm5lclRleHQgOiBub2RlLm5vZGVWYWx1ZVxuICAgIGlmICh0eXBlb2YgY3RuICE9PSAnc3RyaW5nJykgcmV0dXJuXG4gICAgcmV0dXJuIGN0bi5yZXBsYWNlKCdcXG4nLCAnJykucmVwbGFjZSgvXFx1MjAwQi9nLCAnJykgPT09ICcnXG4gIH0sXG4gIC8qXG4gICAqIHRyeSB0byBjb2xsYXBzZSBhdCB0YXJnZXQgcm93XG4gICAqKi9cbiAgY29sbGFwc2VBdFJvdyAobm9kZSkge1xuICAgIGxldCByb3cgPSBtLmlzUm93KG5vZGUpID8gbm9kZSA6IG0uZ2V0Um93KG5vZGUpXG4gICAgbGV0IHMgPSBhbS5nZXRTZWxlY3Rpb24oKVxuICAgIHRyeSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzLmNvbGxhcHNlKHJvdywgMClcbiAgICB9XG4gIH0sXG4gIC8qXG4gICAqIHNlYXJjaGluZyBuZXN0ZWQgYW5jZXN0b3JzIHRpbGwgYm9yZGVyIHRvIGZpbmQgdGhlIHNwZWNpZmllZCB0YWdOYW1lXG4gICAqIEBwYXJhbSB7bm9kZX0gZnJvbSB3aGljaCBub2RlXG4gICAqIEBwYXJhbSB7YXJyfSBpbmNsdWRlcyB0YWcgbmFtZXMgb2YgdGFyZ2V0IHRhZ1xuICAgKiBAcGFyYW0ge25vZGV9IHNlYXJjaCBib3JkZXJcbiAgICogQHJldHVybiB7YXJyfVxuICAgKiovXG4gIGZpbmRFeGlzdFRhZ1RpbGxCb3JkZXIgKG5vZGUsIHRhZ05hbWVsaXN0LCBib3JkZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICBsZXQgY29udGVudFpvbmUgPSBhbS5lZGl0Wm9uZSgpXG4gICAgYm9yZGVyID0gYm9yZGVyIHx8IGNvbnRlbnRab25lXG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gYm9yZGVyKSB7XG4gICAgICBpZiAoIWJvcmRlciB8fCAhYm9yZGVyLmNvbnRhaW5zKG5vZGUpKSByZXR1cm5cbiAgICAgIGxldCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWVcbiAgICAgIGlmIChub2RlTmFtZSAmJiB0YWdOYW1lbGlzdC5pbmNsdWRlcyhub2RlTmFtZSkpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMobm9kZU5hbWUpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gobm9kZU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICAvKlxuICAgKiByZXR1cm4gYSBuZXN0ZWQgRE9NIGRhdGEgdGhyb3VnaCBhIHRhZyBuYW1lIGxpc3RcbiAgICoqL1xuICBjcmVhdGVOZXN0RE9NVGhyb3VnaExpc3QgKGxpc3QpIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgZG9tOiBudWxsLFxuICAgICAgZGVlcGVzdElkOiBudWxsLFxuICAgICAgZGVlcGVzdDogbnVsbFxuICAgIH1cbiAgICBsaXN0LmZvckVhY2goKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBlbGVcbiAgICAgIGxldCBwYXJlbnQgPSByZXN1bHRbaW5kZXggLSAxXVxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlKVxuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmVzdWx0LmRlZXBlc3QgPSBlbGVcbiAgICAgICAgcmVzdWx0LmRlZXBlc3RJZCA9IGFtLmNyZWF0ZVJhbmRvbUlkKCdkZWVwZXN0JylcbiAgICAgICAgcmVzdWx0LmRvbSA9IHJlc3VsdFsnMCddXG4gICAgICAgIGVsZS5pZCA9IHJlc3VsdC5kZWVwZXN0SWRcbiAgICAgICAgZWxlLmlubmVySFRNTCA9ICcmIzgyMDM7J1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5nZS1oYW5kbGVyL2hhbmRsZS1tZXRob2RzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjdAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjFAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMUBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4xQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VkaXRvci9zdHlsZS9tYWluLnN0eWxcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibXktdnVlLWVkaXRvclxcXCIgOmNsYXNzPVxcXCJ7J2Z1bGwtc2NyZWVuJzpmdWxsU2NyZWVufVxcXCIgOnN0eWxlPVxcXCJ7J3otaW5kZXgnOnpJbmRleH1cXFwiPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJ0b29sYmFyXFxcIiA6c3R5bGU9XFxcInsnei1pbmRleCc6ekluZGV4KzF9XFxcIiByZWY9XFxcInRvb2xiYXJcXFwiIGRhdGEtZWRpdG9yPVxcXCJ0b29sYmFyXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwidGFic1xcXCI+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCJtb2R1bGUgaW4gbW9kdWxlc1xcXCI+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiIW1vZHVsZS5oYXNUYWJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGkgOnRpdGxlPVxcXCJsb2NhbGVbbW9kdWxlLmkxOG5dXFxcIiBjbGFzcz1cXFwidGFiIGJ0blxcXCIgOmNsYXNzPVxcXCJ7aGlnaExpZ2h0OiBtb2R1bGUubW9kdWxlSW5zcGVjdFJlc3VsdCwgZm9yYmlkZGVuOiBtb2R1bGUuZm9yYmlkZGVufVxcXCIgQGNsaWNrPVxcXCJhY3RpdmVNb2R1bGUobW9kdWxlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiIDpjbGFzcz1cXFwibW9kdWxlLmljb25cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICA8a2VlcC1hbGl2ZT5cXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRhYlxcXCIgOmlzPVxcXCJtb2R1bGUudGFiTmFtZVxcXCIgOmFjdGl2ZUl0ZW09XFxcIm1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0XFxcIiA6Zm9yYmlkZGVuPVxcXCJtb2R1bGUuZm9yYmlkZGVuXFxcIiA6Y2xhc3M9XFxcIntoaWdoTGlnaHQ6IG1vZHVsZS5tb2R1bGVJbnNwZWN0UmVzdWx0LCBmb3JiaWRkZW46IG1vZHVsZS5mb3JiaWRkZW59XFxcIiBAY2xpY2s9XFxcImFjdGl2ZU1vZHVsZShtb2R1bGUpXFxcIj48L2xpPlxcbiAgICAgICAgICAgICAgICA8L2tlZXAtYWxpdmU+XFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L25hdj5cXG5cXG4gICAgPHAgY2xhc3M9J2NvbnRlbnQnIDppcz1cXFwiY29uc3RhbnRDb25maWcuUk9XX1RBR1xcXCIgOnNwZWxsY2hlY2s9XFxcInNwZWxsY2hlY2tcXFwiIHJlZj1cXFwiY29udGVudFxcXCIgaWQ9XFxcImVkaXRvci1jb250ZW50XFxcIiA6c3R5bGU9XFxcImNvbnRlbnRTdHlsZVxcXCIgZGF0YS1lZGl0b3I9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgICAgY29udGVudGVkaXRhYmxlPVxcXCJwbGFpbnRleHQtb25seVxcXCIgdi1kcmFnLXBpYz1cXFwiaGFuZGxlRHJhZ1BpY1xcXCI+XFxuICAgIDwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9lZGl0b3IvZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBkaXJlY3RpdmUgZHJhZyBhbmQgZHJvcCBwaWNcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBsZXQgZWRpdG9yID0gdm5vZGUuY29udGV4dFxuICAgIGxldCBvbkRyYWdPdmVyID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOiBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0aW9uLmNvbGxhcHNlKGUudGFyZ2V0LCAxKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxlY3Rpb24uY29sbGFwc2UoZS50YXJnZXQsIDApXG4gICAgICB9XG4gICAgICBlZGl0b3Iuc2F2ZUN1cnJlbnRSYW5nZSgpXG4gICAgICBlZGl0b3IubW9kdWxlSW5zcGVjdCgpXG4gICAgfVxuICAgIGxldCBvbkRyYWdMZWF2ZSA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgbGV0IG9uRHJvcCA9IGUgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICBpZiAoZS5kYXRhVHJhbnNmZXIgJiYgZS5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICBsZXQgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgZmlsZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgbGV0IGN1ckZpbGUgPSBmaWxlc1tpXVxuICAgICAgICAgIGlmIChjdXJGaWxlLnNpemUgJiYgY3VyRmlsZS50eXBlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnZhbHVlKGN1ckZpbGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgb25EcmFnRW50ZXIsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3ZlciwgZmFsc2UpXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuXG4gICAgZWwuX19kcmFnT3ZlckhhbmRsZXIgPSBvbkRyYWdPdmVyXG4gICAgZWwuX19kcmFnTGVhdmVIYW5kbGVyID0gb25EcmFnTGVhdmVcbiAgICBlbC5fX2Ryb3BIYW5kbGVyID0gb25Ecm9wXG4gIH0sXG4gIHVuYmluZCAoZWwsIGJpbmRpbmcpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGVsLl9fZHJhZ092ZXJIYW5kbGVyKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGVsLl9fZHJhZ0xlYXZlSGFuZGxlcilcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZWwuX19kcm9wSGFuZGxlcilcbiAgICBkZWxldGUgZWwuX19kcmFnT3ZlckhhbmRsZXJcbiAgICBkZWxldGUgZWwuX19kcmFnTGVhdmVIYW5kbGVyXG4gICAgZGVsZXRlIGVsLl9fZHJvcEhhbmRsZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci9kcmFnLXBpYy5qcyIsIi8qXG4gKiBsb2FkIHJ1bGUga2V5d29yZHMgb2Ygc3R5bGUgaW5zcGVjdFxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3VyTW9kdWxlLCBtb2R1bGVzKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICBsZXQgY3VyRXhjbHVkZSA9IGN1ck1vZHVsZS5leGNsdWRlXG4gIGlmIChBcnJheS5pc0FycmF5KGN1ckV4Y2x1ZGUpKSByZXR1cm4gY3VyRXhjbHVkZVxuICBpZiAodHlwZW9mIGN1ckV4Y2x1ZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IG1vZHVsZU5hbWVMaXN0ID0gW11cbiAgICBtb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICBpZiAobS5uYW1lKSB7XG4gICAgICAgIG1vZHVsZU5hbWVMaXN0LnB1c2gobS5uYW1lKVxuICAgICAgfVxuICAgIH0pXG4gICAgbW9kdWxlTmFtZUxpc3QgPSBBcnJheS5mcm9tKG5ldyBTZXQobW9kdWxlTmFtZUxpc3QpKVxuICAgIHN3aXRjaCAoY3VyRXhjbHVkZSkge1xuICAgICAgLy8gZXhjbHVkZSBhbGwgbW9kdWxlc1xuICAgICAgY2FzZSAnQUxMJzpcbiAgICAgICAgcmVzdWx0ID0gbW9kdWxlTmFtZUxpc3RcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIGV4Y2x1ZGUgYWxsIG1vZHVsZXMgYnV0IGN1cnJlbnQgbW9kdWxlXG4gICAgICBjYXNlICdBTExfQlVUX01ZU0VMRic6XG4gICAgICAgIHJlc3VsdCA9IG1vZHVsZU5hbWVMaXN0XG4gICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0LmluZGV4T2YoY3VyTW9kdWxlLm5hbWUpLCAxKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlLWluc3BlY3QvbG9hZC1tb2R1bGUtaW5zcGVjdC1leGNsdWRlLXJ1bGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsaWduOiAn5a+56b2Q5pa55byPJyxcbiAgICBpbWFnZTogJ+WbvueJhycsXG4gICAgbGlzdDogJ+WIl+ihqCcsXG4gICAgbGluazogJ+mTvuaOpScsXG4gICAgdW5saW5rOiAn5Y676Zmk6ZO+5o6lJyxcbiAgICB0YWJsZTogJ+ihqOagvCcsXG4gICAgZm9udDogJ+aWh+WtlycsXG4gICAgJ2Z1bGwgc2NyZWVuJzogJ+WFqOWxjycsXG4gICAgdGV4dDogJ+aOkueJiCcsXG4gICAgZXJhc2VyOiAn5qC85byP5riF6ZmkJyxcbiAgICBpbmZvOiAn5YWz5LqOJyxcbiAgICBjb2xvcjogJ+minOiJsicsXG4gICAgJ3BsZWFzZSBlbnRlciBhIHVybCc6ICfor7fovpPlhaXlnLDlnYAnLFxuICAgICdjcmVhdGUgbGluayc6ICfliJvlu7rpk77mjqUnLFxuICAgIGJvbGQ6ICfliqDnspcnLFxuICAgIGl0YWxpYzogJ+WAvuaWnCcsXG4gICAgdW5kZXJsaW5lOiAn5LiL5YiS57q/JyxcbiAgICAnc3RyaWtlIHRocm91Z2gnOiAn5Yig6Zmk57q/JyxcbiAgICBzdWJzY3JpcHQ6ICfkuIrmoIcnLFxuICAgIHN1cGVyc2NyaXB0OiAn5LiL5qCHJyxcbiAgICBoZWFkaW5nOiAn5qCH6aKYJyxcbiAgICAnZm9udCBuYW1lJzogJ+Wtl+S9kycsXG4gICAgJ2ZvbnQgc2l6ZSc6ICfmloflrZflpKflsI8nLFxuICAgICdsZWZ0IGp1c3RpZnknOiAn5bem5a+56b2QJyxcbiAgICAnY2VudGVyIGp1c3RpZnknOiAn5bGF5LitJyxcbiAgICAncmlnaHQganVzdGlmeSc6ICflj7Plr7npvZAnLFxuICAgICdvcmRlcmVkIGxpc3QnOiAn5pyJ5bqP5YiX6KGoJyxcbiAgICAndW5vcmRlcmVkIGxpc3QnOiAn5peg5bqP5YiX6KGoJyxcbiAgICAnZm9yZSBjb2xvcic6ICfliY3mma/oibInLFxuICAgICdiYWNrZ3JvdW5kIGNvbG9yJzogJ+iDjOaZr+iJsicsXG4gICAgJ3JvdyBjb3VudCc6ICfooYzmlbAnLFxuICAgICdjb2x1bW4gY291bnQnOiAn5YiX5pWwJyxcbiAgICBzYXZlOiAn56Gu5a6aJyxcbiAgICB1cGxvYWQ6ICfkuIrkvKAnLFxuICAgIHByb2dyZXNzOiAn6L+b5bqmJyxcbiAgICB1bmtub3duOiAn5pyq55+lJyxcbiAgICAncGxlYXNlIHdhaXQnOiAn6K+356iN562JJyxcbiAgICBlcnJvcjogJ+mUmeivrycsXG4gICAgYWJvcnQ6ICfkuK3mlq0nLFxuICAgIHJlc2V0OiAn6YeN572uJyxcbiAgICBocjogJ+WIhumalOe6vycsXG4gICAgdW5kbzogJ+aSpOa2iCcsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ+ihjOmrmCcsXG4gICAgJ2V4Y2VlZCBzaXplIGxpbWl0JzogJ+i2heWHuuWkp+Wwj+mZkOWItidcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaTE4bi96aC1jbi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGlnbjogJ2FsaWduJyxcbiAgICBpbWFnZTogJ2ltYWdlJyxcbiAgICBsaXN0OiAnbGlzdCcsXG4gICAgbGluazogJ2xpbmsnLFxuICAgIHVubGluazogJ3VubGluaycsXG4gICAgdGFibGU6ICd0YWJsZScsXG4gICAgZm9udDogJ2ZvbnQnLFxuICAgICdmdWxsIHNjcmVlbic6ICdmdWxsIHNjcmVlbicsXG4gICAgdGV4dDogJ3RleHQnLFxuICAgIGVyYXNlcjogJ3JlbW92ZSBmb3JtYXQnLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICAncGxlYXNlIGVudGVyIGEgdXJsJzogJ3BsZWFzZSBlbnRlciBhIHVybCcsXG4gICAgJ2NyZWF0ZSBsaW5rJzogJ2NyZWF0ZSBsaW5rJyxcbiAgICBib2xkOiAnYm9sZCcsXG4gICAgaXRhbGljOiAnaXRhbGljJyxcbiAgICB1bmRlcmxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICdzdHJpa2UgdGhyb3VnaCc6ICdzdHJpa2UgdGhyb3VnaCcsXG4gICAgc3Vic2NyaXB0OiAnc3Vic2NyaXB0JyxcbiAgICBzdXBlcnNjcmlwdDogJ3N1cGVyc2NyaXB0JyxcbiAgICBoZWFkaW5nOiAnaGVhZGluZycsXG4gICAgJ2ZvbnQgbmFtZSc6ICdmb250IG5hbWUnLFxuICAgICdmb250IHNpemUnOiAnZm9udCBzaXplJyxcbiAgICAnbGVmdCBqdXN0aWZ5JzogJ2xlZnQganVzdGlmeScsXG4gICAgJ2NlbnRlciBqdXN0aWZ5JzogJ2NlbnRlciBqdXN0aWZ5JyxcbiAgICAncmlnaHQganVzdGlmeSc6ICdyaWdodCBqdXN0aWZ5JyxcbiAgICAnb3JkZXJlZCBsaXN0JzogJ29yZGVyZWQgbGlzdCcsXG4gICAgJ3Vub3JkZXJlZCBsaXN0JzogJ3Vub3JkZXJlZCBsaXN0JyxcbiAgICAnZm9yZSBjb2xvcic6ICdmb3JlIGNvbG9yJyxcbiAgICAnYmFja2dyb3VuZCBjb2xvcic6ICdiYWNrZ3JvdW5kIGNvbG9yJyxcbiAgICAncm93IGNvdW50JzogJ3JvdyBjb3VudCcsXG4gICAgJ2NvbHVtbiBjb3VudCc6ICdjb2x1bW4gY291bnQnLFxuICAgIHNhdmU6ICdzYXZlJyxcbiAgICB1cGxvYWQ6ICd1cGxvYWQnLFxuICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbiAgICAncGxlYXNlIHdhaXQnOiAncGxlYXNlIHdhaXQnLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIGFib3J0OiAnYWJvcnQnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIGhyOiAnaG9yaXpvbnRhbCBydWxlJyxcbiAgICB1bmRvOiAndW5kbycsXG4gICAgJ2xpbmUgaGVpZ2h0JzogJ2xpbmUgaGVpZ2h0JyxcbiAgICAnZXhjZWVkIHNpemUgbGltaXQnOiAnZXhjZWVkIHNpemUgbGltaXQnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2kxOG4vZW4tdXMuanMiXSwic291cmNlUm9vdCI6IiJ9