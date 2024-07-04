from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static


urlpatterns = [
    path('', views.index, name='index'),
    path('contacto', views.contacto, name='contacto'),
    path('crud', views.crud, name='crud'),
    path('login', views.login, name='login'),
    path('tienda', views.tienda, name='tienda'),
    path('registro', views.registro, name='registro'),
    path('crud/crear', views.crear, name='crear'),

  


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
