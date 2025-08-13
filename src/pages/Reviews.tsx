import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, 
  ThumbsUp, 
  MessageCircle, 
  Filter,
  Search,
  TrendingUp,
  Award,
  Users,
  Calendar
} from 'lucide-react';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    text: '',
    restaurant: '',
    order: ''
  });

  const reviews = [
    {
      id: 1,
      author: "Анна П.",
      rating: 5,
      date: "2024-01-15",
      title: "Отличная доставка!",
      text: "Заказывала пиццу Маргарита. Доставили быстро, еда горячая и очень вкусная. Курьер был вежливый. Обязательно закажу еще!",
      restaurant: "Итальянский дворик",
      order: "#1001",
      likes: 12,
      helpful: true,
      verified: true,
      photos: ["🍕"]
    },
    {
      id: 2,
      author: "Михаил И.",
      rating: 4,
      date: "2024-01-14",
      title: "Хорошо, но есть замечания",
      text: "Суши свежие, качество хорошее. Но доставка задержалась на 15 минут. В целом доволен, но хотелось бы точности во времени.",
      restaurant: "Суши Мастер",
      order: "#1002",
      likes: 8,
      helpful: false,
      verified: true,
      photos: ["🍣", "🥢"]
    },
    {
      id: 3,
      author: "Елена С.",
      rating: 5,
      date: "2024-01-13",
      title: "Превосходно!",
      text: "Заказывала на корпоратив. Все было идеально: вовремя, горячее, вкусное. Коллеги остались довольны. Спасибо за профессионализм!",
      restaurant: "Burger House",
      order: "#1003",
      likes: 15,
      helpful: true,
      verified: true,
      photos: ["🍔", "🍟"]
    },
    {
      id: 4,
      author: "Дмитрий К.",
      rating: 3,
      date: "2024-01-12",
      title: "Средне",
      text: "Еда нормальная, но ничего особенного. Цены завышены для такого качества. Доставка была быстрой.",
      restaurant: "Дракон",
      order: "#1004",
      likes: 3,
      helpful: false,
      verified: true,
      photos: []
    },
    {
      id: 5,
      author: "Ольга В.",
      rating: 5,
      date: "2024-01-11",
      title: "Лучший сервис доставки!",
      text: "Пользуюсь уже полгода. Всегда качественно, быстро, вежливо. Особенно нравится возможность отследить заказ. Рекомендую всем!",
      restaurant: "Тайский сад",
      order: "#1005",
      likes: 20,
      helpful: true,
      verified: true,
      photos: ["🍜", "🌶️"]
    },
    {
      id: 6,
      author: "Александр Р.",
      rating: 2,
      date: "2024-01-10",
      title: "Разочарован",
      text: "Заказ пришел холодным, пицца была пересушенной. Курьер извинился, но это не исправило ситуацию. Надеюсь, это исключение.",
      restaurant: "Пиццерия Неаполь",
      order: "#1006",
      likes: 1,
      helpful: false,
      verified: true,
      photos: []
    }
  ];

  const stats = [
    { label: "Общий рейтинг", value: "4.6", icon: <Star className="w-6 h-6 text-yellow-500" /> },
    { label: "Всего отзывов", value: "2,847", icon: <MessageCircle className="w-6 h-6 text-blue-500" /> },
    { label: "Довольных клиентов", value: "94%", icon: <ThumbsUp className="w-6 h-6 text-green-500" /> },
    { label: "Средняя оценка за месяц", value: "4.7", icon: <TrendingUp className="w-6 h-6 text-purple-500" /> }
  ];

  const ratingDistribution = [
    { stars: 5, count: 1420, percentage: 85 },
    { stars: 4, count: 284, percentage: 15 },
    { stars: 3, count: 142, percentage: 8 },
    { stars: 2, count: 71, percentage: 4 },
    { stars: 1, count: 28, percentage: 2 }
  ];

  const topRestaurants = [
    { name: "Суши Мастер", rating: 4.9, reviews: 456 },
    { name: "Итальянский дворик", rating: 4.8, reviews: 523 },
    { name: "Burger House", rating: 4.7, reviews: 389 },
    { name: "Тайский сад", rating: 4.6, reviews: 267 }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review:', newReview);
    // Здесь будет логика отправки отзыва
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Читайте отзывы наших клиентов и делитесь своим опытом
          </p>
        </div>

        {/* Статистика */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Распределение оценок и топ рестораны */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Распределение оценок */}
            <Card>
              <CardHeader>
                <CardTitle>Распределение оценок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ratingDistribution.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm font-medium">{item.stars}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Топ рестораны */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Лучшие рестораны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topRestaurants.map((restaurant, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{restaurant.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {renderStars(Math.floor(restaurant.rating))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {restaurant.rating} ({restaurant.reviews} отзывов)
                          </span>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">
                        #{index + 1}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Фильтры и поиск */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск по отзывам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedRating === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedRating('all')}
                className={selectedRating === 'all' ? 'bg-orange-500 hover:bg-orange-600' : ''}
              >
                Все
              </Button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant={selectedRating === rating.toString() ? 'default' : 'outline'}
                  onClick={() => setSelectedRating(rating.toString())}
                  className={selectedRating === rating.toString() ? 'bg-orange-500 hover:bg-orange-600' : ''}
                >
                  {rating} ⭐
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Список отзывов */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                Отзывы клиентов ({filteredReviews.length})
              </h2>
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{review.author}</span>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  Проверен
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              {new Date(review.date).toLocaleDateString('ru-RU')}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
                      <p className="text-gray-600 mb-4">{review.text}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span>Ресторан: {review.restaurant}</span>
                        <span>Заказ: {review.order}</span>
                      </div>

                      {review.photos.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.photos.map((photo, index) => (
                            <div key={index} className="text-2xl">{photo}</div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Полезно ({review.likes})
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Ответить
                          </Button>
                        </div>
                        {review.helpful && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Полезный отзыв
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Форма добавления отзыва */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <Label>Оценка</Label>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating: star})}
                            className="p-1"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= newReview.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="title">Заголовок отзыва</Label>
                      <Input
                        id="title"
                        value={newReview.title}
                        onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                        placeholder="Кратко опишите впечатление"
                      />
                    </div>

                    <div>
                      <Label htmlFor="restaurant">Ресторан</Label>
                      <Input
                        id="restaurant"
                        value={newReview.restaurant}
                        onChange={(e) => setNewReview({...newReview, restaurant: e.target.value})}
                        placeholder="Название ресторана"
                      />
                    </div>

                    <div>
                      <Label htmlFor="order">Номер заказа (необязательно)</Label>
                      <Input
                        id="order"
                        value={newReview.order}
                        onChange={(e) => setNewReview({...newReview, order: e.target.value})}
                        placeholder="#1234"
                      />
                    </div>

                    <div>
                      <Label htmlFor="text">Отзыв</Label>
                      <Textarea
                        id="text"
                        rows={4}
                        value={newReview.text}
                        onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                        placeholder="Расскажите подробнее о своем опыте..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Опубликовать отзыв
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Поделитесь своим опытом</h2>
              <p className="text-xl mb-6">
                Ваш отзыв поможет другим клиентам сделать правильный выбор
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  Написать отзыв
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Посмотреть мои отзывы
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

export default Reviews;