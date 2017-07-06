{
    'name' : 'Dropext',
    'version': '1.1',
	'author': 'Alex Skiba',
    'summary': 'Integrates additional UserMenu item',
    'category': 'Tools',
    'description':
        """
Dropext
=================

Adds additional menu in dropdown user menu.
        """,
    'data': [
        'data/dropext.xml',
    ],
    'depends' : ['web'],
    'qweb': ['static/src/xml/base.xml'],
    'application': True,
}