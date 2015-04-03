# cordova-plugin-context
A cordova plugin to get context information, e.g. cordova version, installed plugins, etc.

**All the API calls return immediately!**

## How to install
```
// cordova
cordova plugin add https://github.com/xu-li/cordova-plugin-context
```

## How to use

### Get App ID
```
alert(cordova.plugins.Context.getAppID());
```
### Get App Version
```
alert(cordova.plugins.Context.getAppVersion());
```
### Get App Build #
```
alert(cordova.plugins.Context.getAppBuildNumber());
```
### Get Plugins
```
alert(cordova.plugins.Context.getPlugins());
```
### Get debug information
```
alert(cordova.plugins.Context.debug());
```

## FAQ

### getAppVersion() returns empty, what happend?

Please make sure you run ```cordova build``` first. 

## LICENSE

[MIT License](http://opensource.org/licenses/MIT)
