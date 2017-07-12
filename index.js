/**
 * Gets value from object by path. If any part of path is undefined it returns undefined or defaultValue if provided
 * @param {Object} context
 * @param {Array|string} path
 * @param {*} defaultValue
 * @return {*}
 */
module.exports = function getIn(context, path, defaultValue) {
    if(!context) {
        return context;
    }

    if(typeof path === 'string') {
        path = [path];
    }

    if(!path || path.length === 0) {
        throw new Error('Path is not defined');
    }


    var result = context;
    for(var i = 0, length = path.length; i < length; i += 1) {
        result = result[path[i]];

        if(typeof result === 'undefined') {
            return defaultValue;
        }
    }

    return result;
};