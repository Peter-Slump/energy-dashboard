import os

from setuptools import setup, find_packages

VERSION = '0.0.1'

with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='Energy Dashboard',
    version=VERSION,
    long_description=README,
    package_dir={'': 'src'},
    packages=find_packages('src'),
    setup_requires=[
        'pytest-runner'
    ],
    install_requires=[
        'Django==1.9.*',
        'djangorestframework==3.3.*',
        'gunicorn==19.4.*',
        'factory_boy',
        'git+git://github.com/Peter-Slump/django-dynamic-fixtures.git'
    ],
    tests_require=[
        'pytest-django',
        'mock==2.0.*',
    ],
    url='',
    license='MIT',
    author='Nigel Dokter',
    author_email='nigeldokter@gmail.com',
    description='An dashboard to keep track of your energy usage/delivery'
)
