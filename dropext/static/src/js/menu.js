openerp.web_custom = function(instance){
     instance.web.UserMenu.include({
          on_menu_support_menu: function () {
               window.open('http://www.www.suvit.ru', '_blank');
          },
     });
};

/*
openerp.define('dropext.support_menu', function (require) {
"use strict";
var UserMenu = require('web.UserMenu');
UserMenu.include({
    on_menu_support_menu: function () {
        window.open('https://www.suvit.ru', '_blank');
    }
});
});
*/