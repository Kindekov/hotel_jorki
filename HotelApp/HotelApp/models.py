from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = [
        ('waiter', 'Waiter'),
        ('bartender', 'Bartender'),
        ('receptionist', 'Receptionist'),
        ('housekeeping', 'Housekeeping'),
        ('restaurant_manager', 'Restaurant Manager'),
        ('ceo', 'CEO'),
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.username} - {self.role}"


class Hotel(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    num_rooms = models.IntegerField()
    available_rooms = models.IntegerField()

    def __str__(self):
        return self.name