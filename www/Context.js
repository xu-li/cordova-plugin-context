var Context = {
    // will be replaced by 010_fetch_versions.js
    _appInfo: null,

    /**
     * Get platform
     */
    getPlatform: function () {
        return cordova.platformId;
    },

    /**
     * Get cordova version
     */
    getCordovaVersion: function () {
        return cordova.version;
    },

    /**
     * Get plugins
     */
    getPlugins: function () {
        return cordova.require('cordova/plugin_list').metadata;
    },

    /**
     * Get app id
     */
    getAppID: function () {
        return this._getAppInfo('id');
    },

    /**
     * Get app version
     */
    getAppVersion: function () {
        return this._getAppInfo('version');
    },

    /**
     * Get app build #
     */
    getAppBuildNumber: function () {
        return this._getAppInfo('build');
    },

    /**
     * Log formatted debug information in console
     */
    debug: function (output) {
        var message = JSON.stringify({
            cordova: {
                version: this.getCordovaVersion(),
                platform: this.getPlatform(),
                plugins: this.getPlugins()
            },
            app: {
                id: this.getAppID(),
                version: this.getAppVersion(),
                build: this.getAppBuildNumber()
            }
        }, null, "\t");

        if (typeof output == "undefined" || output) {
            console.log(message);
        }

        return message;
    },

    /**
     * Get the app information
     *
     * @private
     */
    _getAppInfo: function (key) {
        if (!this._appInfo) {
            return "";
        }

        if (this.getPlatform() in this._appInfo) {
            return this._appInfo[this.getPlatform()][key];
        }

        return "";
    }
};


// export
module.exports = Context;
