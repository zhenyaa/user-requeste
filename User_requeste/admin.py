from django.contrib import admin

from .models import UserRequeste

class AuthorAdmin(admin.ModelAdmin):
    pass
admin.site.register(UserRequeste, AuthorAdmin)

