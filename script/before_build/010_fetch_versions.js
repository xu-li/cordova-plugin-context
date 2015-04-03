module.exports = function(context) {
    var path         = context.requireCordovaModule('path'),
        fs           = context.requireCordovaModule('fs'),
        ConfigParser = context.requireCordovaModule('cordova-lib/src/configparser/ConfigParser'),
        config       = new ConfigParser(path.join(context.opts.projectRoot, "config.xml"));

    var appInfo = {};
    ['android', 'ios', 'wp8', 'www'].forEach(function (platform) {
        var info = {
            id: config.packageName(),
            version: config.version(),
            build: null
        };

        switch (platform) {
            case 'android':
                if (config.android_packageName()) {
                    info['id'] = config.android_packageName();
                }

                if (config.android_versionCode()) {
                    info['build'] = config.android_versionCode();
                }
            break;

            case 'ios':
                if (config.ios_CFBundleIdentifier()) {
                    info['id'] = config.ios_CFBundleIdentifier();
                }

                if (config.ios_CFBundleVersion()) {
                    info['build'] = config.ios_CFBundleVersion();
                }
            break;
        }

        appInfo[platform] = info;
    });

    // write back to Context.js
    var contextJsPath = path.join(context.opts.plugin.dir, "www", "Context.js");
    fs.readFile(contextJsPath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        var result = data.replace(/_appInfo: .*/g, '_appInfo: ' + JSON.stringify(appInfo) + ',');

        fs.writeFile(contextJsPath, result, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        });
    });
}
