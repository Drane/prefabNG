'use strict';

angular.module('prefabNGApp')
    .factory('log', function () {
        // Service config
        var ctx = {
            logFnNameArray: ['log', 'info', 'warn', 'error', 'debug'],
            log: console,
            out: {}
        };
        // Service logic
        angular.forEach(ctx.logFnNameArray, function (fnName) {
            var logFn = 'log';
            if (ctx.log[fnName]) {
                logFn = fnName;
            }
            ctx.out[fnName] = ctx.log[logFn].bind(ctx.log, '[' + fnName + ']');
        });

        // Public API here
        return ctx.out;
    })
    .run(['log', function (log) {
        log.log('log');
        log.info('info');
        log.warn('warn');
        log.error('error');
        log.debug('debug');
//        log.fake('fake');
    }])
;
