{
    'name': 'Dropext',
    'version': '1.1',
    'author': 'Alex Skiba',
    'category': 'Tools',
	'summary': 'Integrates additional UserMenu item',
	'description':
        """
Dropext
=================

Adds additional menu in dropdown user menu.

        """,
	'depends': ['web'],	
    'qweb' : [ 'static/src/xml/base.xml' ],
    'installable': True,
    'application': True,
}