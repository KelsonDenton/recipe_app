from django.contrib import admin
from .models import Recipe
from .models import Ingredient

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'ingredients', 'is_favorite')

class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'quantity', 'units')

# Register your models here.
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Ingredient, IngredientAdmin)