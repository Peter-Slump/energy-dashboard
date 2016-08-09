install-python:
	pip install --upgrade setuptools
	pip install -e .
	pip install "file://`pwd`#egg=energy-dashboard[dev,doc]"

bump-patch:
	bumpversion patch

bump-minor:
	bumpversion minor
