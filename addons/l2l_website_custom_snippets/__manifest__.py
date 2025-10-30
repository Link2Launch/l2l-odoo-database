# -*- coding: utf-8 -*-

{
    'name': 'l2l_website_custom_snippets',
    'category': 'Website',
    'depends': ['website'],
    'sequence': 200,
    'website': '',
    'summary': 'L2L Custom Snippets',
    'description': """This module provides custom snippets for the L2L website.""",
    'author': 'John D',
    'version': '1.0.0',
    'data': [
        'views/snippets/options.xml',
        'views/snippets/s_l2l_custom_carousel.xml',
        'views/snippets/s_l2l_image_gallery.xml',
    ],
    "assets": {
        "web.assets_frontend": [
            "l2l_website_custom_snippets/static/src/snippets/s_l2l_custom_carousel/000.js",
            "l2l_website_custom_snippets/static/src/snippets/s_l2l_custom_carousel/000.css",
        ],
    },
    'installable': True,
    'application': False,
    'assets': {},
    'license': 'LGPL-3',
}
