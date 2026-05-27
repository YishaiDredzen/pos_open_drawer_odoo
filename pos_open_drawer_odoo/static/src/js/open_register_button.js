/** @odoo-module **/

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { patch } from "@web/core/utils/patch";

/**
 * Patches the ProductScreen to add an "Open Register" button.
 *
 * The button is ONLY visible when the current order has zero order lines
 * (nothing scanned). It simply fires the cash drawer open pulse — no order
 * is created, validated, or modified in any way.
 */
patch(ProductScreen.prototype, {

    /**
     * True when the order is empty (no products scanned yet).
     * Used by the template to show/hide the button.
     */
    get isOrderEmpty() {
        const order = this.pos.get_order();
        return !order || order.get_orderlines().length === 0;
    },

    /**
     * Send the cash-drawer open pulse without touching any order.
     */
    async openCashDrawer() {
        const pos = this.pos;

        try {
            if (pos.proxy && typeof pos.proxy.openCashbox === "function") {
                await pos.proxy.openCashbox();
            } else if (
                pos.hardwareProxy &&
                typeof pos.hardwareProxy.openCashbox === "function"
            ) {
                await pos.hardwareProxy.openCashbox();
            } else if (pos.printer && typeof pos.printer.openCashbox === "function") {
                await pos.printer.openCashbox();
            } else {
                console.warn("[pos_open_register] No hardware proxy available to open cash drawer.");
            }
        } catch (err) {
            console.warn("[pos_open_register] Could not open cash drawer:", err);
        }
    },
});
