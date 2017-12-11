var $injector;

var jitInjector = {
    get $injector() {
        return {
            get get() {
                return $injector.get;
            }
        }
    },
    set $injector(_$injector) {
        $injector = _$injector;
    }
};

module.exports = {
    jitInjector: jitInjector
};
