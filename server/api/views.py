from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class IndexView(APIView):
  def get(self, request):
    return Response("Success", status=status.HTTP_200_OK)