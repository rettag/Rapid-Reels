"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_1 = require("@remotion/bundler");
var renderer_1 = require("@remotion/renderer");
var path_1 = require("path");
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var compositionId, entry, bundleLocation, inputProps, comps, composition, outputLocation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                compositionId = "PumpItUpTemplate";
                entry = "./src/index";
                console.log("Creating a Webpack bundle of the video");
                return [4 /*yield*/, (0, bundler_1.bundle)(path_1.default.resolve(entry), function () { return undefined; }, {
                        // If you have a Webpack override, make sure to add it here
                        webpackOverride: function (config) { return config; },
                    })];
            case 1:
                bundleLocation = _a.sent();
                inputProps = {
                    foo: "bar",
                };
                return [4 /*yield*/, (0, renderer_1.getCompositions)(bundleLocation, {
                        // You can pass custom input props that you can retrieve using getInputProps()
                        // in the composition list. Use this if you want to dynamically set the duration or
                        // dimensions of the video.
                        inputProps: inputProps,
                    })];
            case 2:
                comps = _a.sent();
                composition = comps.find(function (c) { return c.id === compositionId; });
                // Ensure the composition exists
                if (!composition) {
                    throw new Error("No composition with the ID ".concat(compositionId, " found.\n  Review \"").concat(entry, "\" for the correct ID."));
                }
                outputLocation = "out/".concat(compositionId, ".mp4");
                console.log("Attempting to render:", outputLocation);
                return [4 /*yield*/, (0, renderer_1.renderMedia)({
                        composition: composition,
                        serveUrl: bundleLocation,
                        codec: "h264",
                        outputLocation: outputLocation,
                        inputProps: inputProps,
                    })];
            case 3:
                _a.sent();
                console.log("Render done!");
                return [2 /*return*/];
        }
    });
}); };
start();
