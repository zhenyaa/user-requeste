from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import UserRequeste


class UserRequesteSerializer(serializers.ModelSerializer):
    # def validate(self, attrs):
    #     print(attrs)
    #     return attrs

    class Meta:
        model = UserRequeste
        fields = ['email', 'p_number', 'comment', 'status_requeste']
        extra_kwargs = {"email": {"required": False},
                        "p_number": {"required": False},
                        "comment": {"required": False},
                        "status_requeste": {"required": False},}
        # read_only_fields = ['created_at', 'updated_at', 'status_requeste']

    # def create(self, validated_data):
    #     date1 = DateLaer.objects.get_or_create(user=self.context['request'].user, label_fixation=date.today())
    #     date1[0].save()
    #     try:
    #         return Report1.objects.create(**validated_data, date_fixation_mor=date1[0], user=self.context['request'].user)
    #     except Exception as e:
    #         error = {'message': ",".join(e.args) if len(e.args) > 0 else 'Unknown Error'}
    #         raise serializers.ValidationError(error)
