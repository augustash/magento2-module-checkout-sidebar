/**
 * Checkout Sidebar Module
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2021 August Ash (https://www.augustash.com)
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/cart-items': {
                'Augustash_CheckoutSidebar/js/view/summary/cart-items-mixin': true
            }
        }
    }
}
