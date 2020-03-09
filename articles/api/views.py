from articles.models import Article
from .serializers import ArticleSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView


class ArticleListView(ListAPIView):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
