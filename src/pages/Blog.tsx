import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  Calendar, 
  User, 
  Eye,
  Heart,
  MessageCircle,
  Share,
  TrendingUp,
  Clock,
  Tag
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'recipes', name: 'Рецепты' },
    { id: 'health', name: 'Здоровое питание' },
    { id: 'trends', name: 'Тренды' },
    { id: 'restaurants', name: 'Рестораны' },
    { id: 'tips', name: 'Советы' },
    { id: 'news', name: 'Новости' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 секретов идеальной пиццы от шеф-повара",
      excerpt: "Узнайте профессиональные секреты приготовления настоящей итальянской пиццы от нашего шеф-повара.",
      content: "Полная статья о том, как готовить пиццу...",
      category: "recipes",
      author: "Марко Росси",
      date: "2024-01-15",
      readTime: "5 мин",
      views: 1250,
      likes: 89,
      comments: 23,
      image: "🍕",
      featured: true,
      tags: ["пицца", "рецепты", "итальянская кухня"]
    },
    {
      id: 2,
      title: "Здоровое питание: мифы и реальность",
      excerpt: "Разбираем популярные мифы о здоровом питании и рассказываем, что действительно важно для здоровья.",
      content: "Подробная статья о здоровом питании...",
      category: "health",
      author: "Анна Петрова",
      date: "2024-01-12",
      readTime: "8 мин",
      views: 2100,
      likes: 156,
      comments: 45,
      image: "🥗",
      featured: true,
      tags: ["здоровье", "питание", "диета"]
    },
    {
      id: 3,
      title: "Тренды 2024: что будем есть в новом году",
      excerpt: "Обзор главных кулинарных трендов 2024 года: от растительного мяса до ферментированных продуктов.",
      content: "Статья о трендах в еде...",
      category: "trends",
      author: "Дмитрий Кулинаров",
      date: "2024-01-10",
      readTime: "6 мин",
      views: 890,
      likes: 67,
      comments: 12,
      image: "🌱",
      featured: false,
      tags: ["тренды", "2024", "инновации"]
    },
    {
      id: 4,
      title: "Как выбрать суши: гид для начинающих",
      excerpt: "Полное руководство по выбору суши и роллов. Какие виды рыбы лучше, как читать меню японского ресторана.",
      content: "Подробный гид по суши...",
      category: "tips",
      author: "Хироши Танака",
      date: "2024-01-08",
      readTime: "7 мин",
      views: 1560,
      likes: 112,
      comments: 34,
      image: "🍣",
      featured: false,
      tags: ["суши", "японская кухня", "советы"]
    },
    {
      id: 5,
      title: "Интервью с шеф-поваром ресторана 'Тайский сад'",
      excerpt: "Беседуем с шеф-поваром о секретах тайской кухни, любимых специях и философии приготовления.",
      content: "Интервью с шеф-поваром...",
      category: "restaurants",
      author: "Редакция",
      date: "2024-01-05",
      readTime: "10 мин",
      views: 780,
      likes: 45,
      comments: 8,
      image: "👨‍🍳",
      featured: false,
      tags: ["интервью", "тайская кухня", "шеф-повар"]
    },
    {
      id: 6,
      title: "Новое меню в ресторане 'Итальянский дворик'",
      excerpt: "Ресторан обновил меню, добавив 15 новых блюд традиционной итальянской кухни.",
      content: "Новости о новом меню...",
      category: "news",
      author: "Пресс-служба",
      date: "2024-01-03",
      readTime: "3 мин",
      views: 650,
      likes: 28,
      comments: 5,
      image: "📰",
      featured: false,
      tags: ["новости", "меню", "итальянская кухня"]
    },
    {
      id: 7,
      title: "5 способов сэкономить на доставке еды",
      excerpt: "Практические советы, как заказывать еду выгодно: промокоды, акции, программы лояльности.",
      content: "Советы по экономии...",
      category: "tips",
      author: "Елена Экономова",
      date: "2024-01-01",
      readTime: "4 мин",
      views: 1890,
      likes: 134,
      comments: 67,
      image: "💰",
      featured: true,
      tags: ["экономия", "советы", "промокоды"]
    },
    {
      id: 8,
      title: "Рецепт домашнего бургера от Burger House",
      excerpt: "Пошаговый рецепт приготовления сочного бургера в домашних условиях от поваров Burger House.",
      content: "Рецепт домашнего бургера...",
      category: "recipes",
      author: "Джон Смит",
      date: "2023-12-28",
      readTime: "6 мин",
      views: 2340,
      likes: 189,
      comments: 56,
      image: "🍔",
      featured: false,
      tags: ["бургер", "рецепт", "домашняя кухня"]
    }
  ];

  const popularTags = [
    { name: "рецепты", count: 45 },
    { name: "здоровое питание", count: 32 },
    { name: "советы", count: 28 },
    { name: "итальянская кухня", count: 24 },
    { name: "японская кухня", count: 19 },
    { name: "тренды", count: 16 },
    { name: "экономия", count: 14 },
    { name: "новости", count: 12 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Блог ВкусДоставка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Рецепты, советы, новости и все о мире еды от наших экспертов
          </p>
        </div>

        {/* Поиск */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Поиск статей, рецептов, советов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Рекомендуемые статьи */}
        {selectedCategory === 'all' && !searchTerm && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">🔥 Рекомендуемые статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-4xl">{post.image}</div>
                      <Badge className="bg-red-100 text-red-800">Рекомендуем</Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Категории */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-orange-500 hover:bg-orange-600' : ''}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Основной контент */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Список статей */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'all' ? 'Все статьи' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-500">
                  Найдено: {filteredPosts.length}
                </span>
              </div>

              {filteredPosts.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
                    <p className="text-gray-600 mb-4">
                      Попробуйте изменить поисковый запрос или выбрать другую категорию
                    </p>
                    <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="text-6xl mb-2">{post.image}</div>
                            {post.featured && (
                              <Badge className="bg-red-100 text-red-800 text-xs">
                                Рекомендуем
                              </Badge>
                            )}
                          </div>
                          
                          <div className="md:col-span-3">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-semibold">{post.title}</h3>
                              <Badge variant="outline" className="ml-4">
                                {categories.find(c => c.id === post.category)?.name}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('ru-RU')}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {post.views}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {post.likes}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle className="w-4 h-4" />
                                  {post.comments}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Share className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  Читать полностью
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-4">
                              {post.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              {/* Популярные теги */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Популярные теги
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => setSearchTerm(tag.name)}
                      >
                        #{tag.name} ({tag.count})
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Популярные статьи */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Популярные статьи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((post, index) => (
                        <div key={post.id} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-medium text-sm leading-tight mb-1">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Подписка на рассылку */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-3">Подписка на новости</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Получайте новые статьи и рецепты на email
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Ваш email" type="email" />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Подписаться
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Не спамим, только полезный контент
                  </p>
                </CardContent>
              </Card>

              {/* Авторы */}
              <Card>
                <CardHeader>
                  <CardTitle>Наши авторы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Марко Росси", role: "Шеф-повар", articles: 12 },
                      { name: "Анна Петрова", role: "Нутрициолог", articles: 8 },
                      { name: "Дмитрий Кулинаров", role: "Фуд-критик", articles: 15 }
                    ].map((author, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{author.name}</p>
                          <p className="text-xs text-gray-600">{author.role} • {author.articles} статей</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Хотите поделиться рецептом?</h2>
              <p className="text-xl mb-6">
                Присылайте свои рецепты и истории о еде. Лучшие публикации получат призы!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  Отправить рецепт
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Стать автором
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;