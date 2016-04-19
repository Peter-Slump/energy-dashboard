import abc
from abc import ABCMeta


class BaseReader(object):
    __metaclass__ = ABCMeta

    def __init__(self, device):
        self.device = device

    @abc.abstractmethod
    def read(self):
        """
        Loggers gather data and return unsaved model subclasses of Reading's
        for the values they support (e.g. ElectricityUsedReading).
        """
        pass
