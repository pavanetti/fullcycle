from django.db import models


class Live(models.Model):
    name = models.CharField(max_length=200)
