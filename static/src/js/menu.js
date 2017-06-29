odoo.define('dropext.support_menu', function (require) {
"use strict";
var UserMenu = require('web.UserMenu');
UserMenu.include({
    on_menu_support_menu: function () {
        window.open('https://suvit.ru', '_blank');
    }
});
});
