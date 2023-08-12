from django.db import models
from django.contrib.auth.models import User
# from django.contrib.gis.db.models import PointField
#
#
# # Create your models here.
# class FloodReport(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     location = PointField(null=True, blank=True)
#     picture = models.ImageField()
#     video = models.FileField()
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return f"{self.user.username} added a report at {self.created_at}"
#
#
# class ReportImage(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
#     picture = models.ImageField()
#
#
# class ReportVideo(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='videos')
#     video = models.FileField()
