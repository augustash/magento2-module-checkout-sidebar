/**
 * Checkout Sidebar Module
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2021 August Ash (https://www.augustash.com)
 */

define([], function () {
    'use strict';

    return function(Component) {
        return Component.extend({
            defaults: {
                template: 'Augustash_CheckoutSidebar/summary/cart-items'
            },

            /**
             * Returns bool value for items block state (expanded or not)
             *
             * @returns {*|Boolean}
             */
            isItemsBlockExpanded: function () {
                return true;
            }
        });
    };
});
