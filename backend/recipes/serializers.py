from rest_framework import serializers
from .models import Recipe
from .models import Ingredient

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'ingredients', 'is_favorite')

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name', 'quantity', 'unit')