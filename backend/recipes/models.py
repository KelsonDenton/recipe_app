from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.TextField()
    ingredients = models.TextField()
    is_favorite = models.BooleanField()

class Ingredient(models.Model):
    name = models.TextField
    quantity = models.DecimalField(decimal_places=2, max_digits=8)
    units = models.TextField