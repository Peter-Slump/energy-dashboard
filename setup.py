import os

from setuptools import setup, find_packages

VERSION = '0.1.0'

with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='energy-dashboard',
    version=VERSION,
    long_description=README,
    package_dir={'': 'src'},
    packages=find_packages('src'),
    include_package_data=True,
    extras_require={
        'dev': [
            'factory_boy',
            'bumpversion==0.5.3',
        ],
        'postgres': [
            'psycopg2',
        ]
    },
    setup_requires=[
        'pytest-runner'
    ],
    install_requires=[
        'Django==1.9.*',
        'djangorestframework==3.3.*',
        'gunicorn==19.5.*',
        'django-dynamic-fixtures',
        'pytz==2016.*',
        'django-rest-auth==0.7.0',
        'celery[redis]==3.1.23',
        'django-supervisor==0.3.4',
        'gunicorn==19.4.5',
        'dsmr-parser==0.2',
    ],
    tests_require=[
        'pytest-django',
        'factory_boy',
        'mock==2.0.*',
    ],
    entry_points="""
        [console_scripts]
        energy-dashboard=ed.bin.energy_dashboard:execute_from_command_line
    """,
    url='',
    license='MIT',
    author='Peter Slump',
    author_email='peter@yarf.nl',
    description='A dashboard to keep track of your energy usage/delivery'
)
