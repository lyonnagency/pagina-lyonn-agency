from django.conf import settings
from django.core.mail import send_mail

from django.http import JsonResponse
from django.middleware import csrf

from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.views import Response


# Create your views here.
def get_csrf_token(request):
    token = csrf.get_token(request)
    return JsonResponse({'token': token})


class ContactSerailizer(serializers.Serializer):
   #name = serializers.CharField()
   email = serializers.EmailField()
   # and so on
# Sends the email
# Defines an API view to use as a simple django view but with DRF
# Doing this allows to skip the 403 csrf token issue
class ContactView(APIView):
  def post(self, request, *args, **kwargs):
    # print(request.data)
    serailizer = ContactSerailizer(data=request.data)
    if serailizer.is_valid():
      email = serailizer.validated_data.get('email')
      send_mail(
        'Alguien se ha suscrito al boletín de Lyonn Agency',
        'Se ha enviado el siguiente correo: {}'.format(email),
        settings.DEFAULT_FROM_EMAIL,  # email  origen,,
        ['fran@lyonn.co','hola@lyonn.co', 'serg@lyonn.co'], # email destinatario
        fail_silently=False,
      )
      
      return Response({"success": "Sent"})
    return Response({'success': "Failed"})

