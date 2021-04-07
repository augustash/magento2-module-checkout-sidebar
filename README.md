# Magento 2 Module - Checkout Sidebar

![https://www.augustash.com](http://augustash.s3.amazonaws.com/logos/ash-inline-color-500.png)

**This is a private module and is not currently aimed at public consumption.**

## Overview

The `Augustash_CheckoutSidebar` module brings a few UI and experience improvements to the sidebar during the Magento 2 checkout process.

## Installation

### Via Composer

Install the extension using Composer using our development package repository:

```bash
composer config repositories.augustash composer https://augustash.repo.repman.io
composer require augustash/module-checkout-sidebar:~1.0.0
bin/magento module:enable --clear-static-content Augustash_CheckoutSidebar
bin/magento setup:upgrade
bin/magento cache:flush
```

## Uninstall

After all dependent modules have also been disabled or uninstalled, you can finally remove this module:

```bash
bin/magento module:disable --clear-static-content Augustash_CheckoutSidebar
rm -rf app/code/Augustash/CheckoutSidebar/
composer remove augustash/module-checkout-sidebar
bin/magento setup:upgrade
bin/magento cache:flush
```

## Structure

[Typical file structure for a Magento 2 module](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/module-file-structure.html).
