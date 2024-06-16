"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeString = exports.computeBackground = exports.detach = exports.attachAndExecute = exports.getDmgVendorPath = exports.getDmgTemplatePath = exports.DmgTarget = void 0;
const builder_util_1 = require("builder-util");
const promise_1 = require("builder-util/out/promise");
const path = require("path");
var dmg_1 = require("./dmg");
Object.defineProperty(exports, "DmgTarget", { enumerable: true, get: function () { return dmg_1.DmgTarget; } });
const root = path.join(__dirname, "..");
function getDmgTemplatePath() {
    return path.join(root, "templates");
}
exports.getDmgTemplatePath = getDmgTemplatePath;
function getDmgVendorPath() {
    return path.join(root, "vendor");
}
exports.getDmgVendorPath = getDmgVendorPath;
async function attachAndExecute(dmgPath, readWrite, task) {
    //noinspection SpellCheckingInspection
    const args = ["attach", "-noverify", "-noautoopen"];
    if (readWrite) {
        args.push("-readwrite");
    }
    args.push(dmgPath);
    const attachResult = await (0, builder_util_1.exec)("hdiutil", args);
    const deviceResult = attachResult == null ? null : /^(\/dev\/\w+)/.exec(attachResult);
    const device = deviceResult == null || deviceResult.length !== 2 ? null : deviceResult[1];
    if (device == null) {
        throw new Error(`Cannot mount: ${attachResult}`);
    }
    return await (0, promise_1.executeFinally)(task(), () => detach(device));
}
exports.attachAndExecute = attachAndExecute;
async function detach(name) {
    try {
        await (0, builder_util_1.exec)("hdiutil", ["detach", "-quiet", name]);
    }
    catch (e) {
        await (0, builder_util_1.retry)(() => (0, builder_util_1.exec)("hdiutil", ["detach", "-force", "-debug", name]), 5, 1000, 500);
    }
}
exports.detach = detach;
async function computeBackground(packager) {
    const resourceList = await packager.resourceList;
    if (resourceList.includes("background.tiff")) {
        return path.join(packager.buildResourcesDir, "background.tiff");
    }
    else if (resourceList.includes("background.png")) {
        return path.join(packager.buildResourcesDir, "background.png");
    }
    else {
        return path.join(getDmgTemplatePath(), "background.tiff");
    }
}
exports.computeBackground = computeBackground;
/** @internal */
function serializeString(data) {
    return ('  $"' +
        data
            .match(/.{1,32}/g)
            .map(it => it.match(/.{1,4}/g).join(" "))
            .join('"\n  $"') +
        '"');
}
exports.serializeString = serializeString;
//# sourceMappingURL=dmgUtil.js.map