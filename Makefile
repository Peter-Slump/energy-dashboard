
install-python:
	mkdir -p ~/.virtualenvs
	virtualenv --python=python3 ~/.virtualenvs/energy-dashboard
	source ~/.virtualenvs/energy-dashboard/bin/activate
	pip install --upgrade pip
	pip install --upgrade setuptools
	pip install -e .
	pip install "file://`pwd`#egg=energy-dashboard[dev]"
	energy_dashboard install

bump-patch:
	bumpversion patch

bump-minor:
	bumpversion minor
