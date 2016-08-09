
install-python:
	pip install --upgrade pip
	pip install --upgrade setuptools
	pip install -e .
	pip install "file://`pwd`#egg=energy-dashboard[dev]"

bump-patch:
	bumpversion patch

bump-minor:
	bumpversion minor
