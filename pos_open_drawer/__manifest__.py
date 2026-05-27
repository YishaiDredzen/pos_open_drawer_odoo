{
    'name': 'POS Open Cash Drawer',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Adds an Open Register button to the POS product screen',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_open_drawer/static/src/js/open_drawer_button.js',
            'pos_open_drawer/static/src/xml/open_drawer_button.xml',
            'pos_open_drawer/static/src/css/open_drawer_button.css',
        ],
    },
    'installable': True,
    'license': 'LGPL-3',
}
