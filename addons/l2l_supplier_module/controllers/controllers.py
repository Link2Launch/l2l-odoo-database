# -*- coding: utf-8 -*-
# from odoo import http


# class L2lSupplierModule(http.Controller):
#     @http.route('/l2l_supplier_module/l2l_supplier_module', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/l2l_supplier_module/l2l_supplier_module/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('l2l_supplier_module.listing', {
#             'root': '/l2l_supplier_module/l2l_supplier_module',
#             'objects': http.request.env['l2l_supplier_module.l2l_supplier_module'].search([]),
#         })

#     @http.route('/l2l_supplier_module/l2l_supplier_module/objects/<model("l2l_supplier_module.l2l_supplier_module"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('l2l_supplier_module.object', {
#             'object': obj
#         })

