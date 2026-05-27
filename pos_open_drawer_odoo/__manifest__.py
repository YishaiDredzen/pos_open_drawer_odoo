# -*- coding: utf-8 -*-
{
    'name': 'POS Open Register (Skip Print Receipt)',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Adds an "Open Register" button to skip printing a receipt and open the cash drawer directly.',
    'description': """
        This module adds an "Open Register" button in the Point of Sale payment screen.
        When clicked, it opens the cash drawer without requiring the cashier to print a receipt.
        Useful for cash-only businesses or when a receipt is not needed.
    """,
    'author': 'Yishai',
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_open_register/static/src/css/open_register.css',
            'pos_open_register/static/src/xml/open_register_button.xml',
            'pos_open_register/static/src/js/open_register_button.js',
        ],
    },
    'images': [
        'static/description/btn-display.png',
    ],
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
