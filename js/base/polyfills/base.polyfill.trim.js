var Base = Base || {};

Base.Polyfill = Base.Polyfill || {};

Base.Polyfill.trim = function() {
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
};

jQuery(function() {
    Base.Polyfill.trim();
});
