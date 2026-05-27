/** @odoo-module */

import { Component } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { patch } from "@web/core/utils/patch";

export class OpenDrawerButton extends Component {
    static template = "pos_open_drawer.OpenDrawerButton";

    setup() {
        this.pos = usePos();
    }

    async openDrawer() {
        const printer = this.pos.hardwareProxy.printer;
        if (printer) {
            await printer.openCashbox();
        } else {
            console.warn("No printer/cash drawer connected via IoT Box.");
        }
    }
}

patch(ProductScreen, {
    components: {
        ...ProductScreen.components,
        OpenDrawerButton,
    },
});
