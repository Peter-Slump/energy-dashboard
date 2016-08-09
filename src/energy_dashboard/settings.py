from energy_dashboard.config.defaults import *
import logging

logger = logging.getLogger(__name__)
logger.warning("WARNING: You are using a quick setup configuration.\n"
               "PLEASE DO NOT USE THIS CONFIGURATION IN PRODUCTION!")

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ' ** REPLACE WITH SECRET VALUE ** '

