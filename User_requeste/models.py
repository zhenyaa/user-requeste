from django.db import models
# from django.contrib.auth.models import User

class UserRequeste(models.Model):
    email = models.EmailField()
    p_number = models.CharField(max_length=13)
    comment = models.CharField(max_length=255)
    status_requeste = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s %s %s %s' % (self.email, self.p_number, self.comment, self.status_requeste)

