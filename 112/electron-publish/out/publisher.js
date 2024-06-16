"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCiTag = exports.HttpPublisher = exports.Publisher = exports.ProgressCallback = void 0;
const builder_util_1 = require("builder-util");
const builder_util_runtime_1 = require("builder-util-runtime");
const log_1 = require("builder-util/out/log");
const chalk = require("chalk");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
var progress_1 = require("./progress");
Object.defineProperty(exports, "ProgressCallback", { enumerable: true, get: function () { return progress_1.ProgressCallback; } });
const progressBarOptions = {
    incomplete: " ",
    width: 20,
};
class Publisher {
    constructor(context) {
        this.context = context;
    }
    createProgressBar(fileName, size) {
        builder_util_1.log.info({ file: fileName, provider: this.providerName }, "uploading");
        if (this.context.progress == null || size < 512 * 1024) {
            return null;
        }
        return this.context.progress.createBar(`${" ".repeat(log_1.PADDING + 2)}[:bar] :percent :etas | ${chalk.green(fileName)} to ${this.providerName}`, {
            total: size,
            ...progressBarOptions,
        });
    }
    createReadStreamAndProgressBar(file, fileStat, progressBar, reject) {
        const fileInputStream = (0, fs_extra_1.createReadStream)(file);
        fileInputStream.on("error", reject);
        if (progressBar == null) {
            return fileInputStream;
        }
        else {
            const progressStream = new builder_util_runtime_1.ProgressCallbackTransform(fileStat.size, this.context.cancellationToken, it => progressBar.tick(it.delta));
            progressStream.on("error", reject);
            return fileInputStream.pipe(progressStream);
        }
    }
}
exports.Publisher = Publisher;
class HttpPublisher extends Publisher {
    constructor(context, useSafeArtifactName = false) {
        super(context);
        this.context = context;
        this.useSafeArtifactName = useSafeArtifactName;
    }
    async upload(task) {
        const fileName = (this.useSafeArtifactName ? task.safeArtifactName : null) || (0, path_1.basename)(task.file);
        if (task.fileContent != null) {
            await this.doUpload(fileName, task.arch || builder_util_1.Arch.x64, task.fileContent.length, (request, reject) => {
                if (task.timeout) {
                    request.setTimeout(task.timeout, () => {
                        request.destroy();
                        reject(new Error("Request timed out"));
                    });
                }
                return request.end(task.fileContent);
            }, task.file);
            return;
        }
        const fileStat = await (0, fs_extra_1.stat)(task.file);
        const progressBar = this.createProgressBar(fileName, fileStat.size);
        return this.doUpload(fileName, task.arch || builder_util_1.Arch.x64, fileStat.size, (request, reject) => {
            if (progressBar != null) {
                // reset (because can be called several times (several attempts)
                progressBar.update(0);
            }
            if (task.timeout) {
                request.setTimeout(task.timeout, () => {
                    request.destroy();
                    reject(new Error("Request timed out"));
                });
            }
            return this.createReadStreamAndProgressBar(task.file, fileStat, progressBar, reject).pipe(request);
        }, task.file);
    }
}
exports.HttpPublisher = HttpPublisher;
function getCiTag() {
    const tag = process.env.TRAVIS_TAG ||
        process.env.APPVEYOR_REPO_TAG_NAME ||
        process.env.CIRCLE_TAG ||
        process.env.BITRISE_GIT_TAG ||
        process.env.CI_BUILD_TAG || // deprecated, GitLab uses `CI_COMMIT_TAG` instead
        process.env.CI_COMMIT_TAG ||
        process.env.BITBUCKET_TAG ||
        (process.env.GITHUB_REF_TYPE === "tag" ? process.env.GITHUB_REF_NAME : null);
    return tag != null && tag.length > 0 ? tag : null;
}
exports.getCiTag = getCiTag;
//# sourceMappingURL=publisher.js.map