from django.contrib.auth.models import User
from dynamic_fixtures.fixtures.basefixture import BaseFixture

class Fixture(BaseFixture):

    def load(self):
        try:
            User.objects.get(username='test@example.com')
        except User.DoesNotExist:
            User.objects.create_user(
                username='test@example.com',
                email='test@example.com',
                password='test'
            )