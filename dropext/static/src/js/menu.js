odoo.define('dropext.support_menu', function (require) {
"use strict";
var UserMenu = require('web.UserMenu');
UserMenu.include({
    on_menu_support_menu: function () {
        window.open('https://www.suvit.ru', '_blank');
    }
});
});

/*
openerp.oepetstore = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.HomePage = instance.Widget.extend({
        start: function() {
            console.log("pet store home page loaded");
        },
    });

    instance.web.client_actions.add('petstore.homepage', 'instance.oepetstore.HomePage');
}
*/