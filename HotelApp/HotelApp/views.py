from django.http import JsonResponse

def test_api(request):
    return JsonResponse({"message": "Hello from Django!"})

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Hotel
from .serializers import HotelSerializer

@api_view(['GET'])
def get_hotels(request):
    hotels = Hotel.objects.all()  # Fetch all hotels
    serializer = HotelSerializer(hotels, many=True)  # Convert to JSON
    return Response(serializer.data)