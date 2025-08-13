import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Clock,
  Shield,
  Truck,
  Star,
  ChefHat,
  MapPin,
  Phone,
  CreditCard,
  Users,
  Award
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Быстрая доставка",
      description: "Доставляем за 30-45 минут по всей Москве"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Качество гарантировано",
      description: "Только свежие продукты и проверенные рестораны"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Удобная оплата",
      description: "Наличными, картой или онлайн"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Поддержка 24/7",
      description: "Всегда готовы помочь и ответить на вопросы"
    }
  ];

  const categories = [
    { name: "Пицца", image: "🍕", count: "25+ блюд" },
    { name: "Суши", image: "🍣", count: "40+ блюд" },
    { name: "Бургеры", image: "🍔", count: "15+ блюд" },
    { name: "Паста", image: "🍝", count: "20+ блюд" },
    { name: "Салаты", image: "🥗", count: "18+ блюд" },
    { name: "Десерты", image: "🍰", count: "12+ блюд" }
  ];

  const popularDishes = [
    {
      name: "Маргарита",
      price: "890₽",
      image: "🍕",
      rating: 4.8,
      description: "Классическая пицца с томатами и моцареллой"
    },
    {
      name: "Филадельфия",
      price: "650₽",
      image: "🍣",
      rating: 4.9,
      description: "Роллы с лососем и сливочным сыром"
    },
    {
      name: "Чизбургер",
      price: "450₽",
      image: "🍔",
      rating: 4.7,
      description: "Сочный бургер с говядиной и сыром"
    }
  ];

  const restaurants = [
    {
      name: "Итальянский дворик",
      cuisine: "Итальянская",
      rating: 4.8,
      deliveryTime: "30-40 мин",
      image: "🏪"
    },
    {
      name: "Суши Мастер",
      cuisine: "Японская",
      rating: 4.9,
      deliveryTime: "25-35 мин",
      image: "🏪"
    },
    {
      name: "Burger House",
      cuisine: "Американская",
      rating: 4.7,
      deliveryTime: "20-30 мин",
      image: "🏪"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Вкусная еда с доставкой на дом
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Заказывайте любимые блюда из лучших ресторанов города. 
            Быстро, вкусно и с гарантией качества!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Посмотреть меню
              </Button>
            </Link>
            <Link to="/restaurants">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Выбрать ресторан
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Раздел 1: Наши преимущества */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 2: Популярные категории */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/menu?category=${category.name.toLowerCase()}`}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.image}</div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 3: Популярные блюда */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные блюда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{dish.image}</div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {dish.price}
                    </Badge>
                  </div>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{dish.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                Посмотреть все блюда
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Раздел 4: Лучшие рестораны */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Лучшие рестораны</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{restaurant.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-3">{restaurant.cuisine} кухня</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-600">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Перейти в ресторан
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/restaurants">
              <Button variant="outline" size="lg">
                Все рестораны
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Раздел 5: Как это работает */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Выберите блюдо</h3>
              <p className="text-gray-600">Просмотрите меню и выберите понравившиеся блюда</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Оформите заказ</h3>
              <p className="text-gray-600">Добавьте товары в корзину и оформите заказ</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ожидайте доставку</h3>
              <p className="text-gray-600">Мы приготовим и доставим заказ в течение 30-45 минут</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Наслаждайтесь</h3>
              <p className="text-gray-600">Получите свежую и вкусную еду прямо к двери</p>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 6: Акции и скидки */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-2">Скидка 20% на первый заказ</h3>
                <p className="mb-4">Для новых пользователей при заказе от 1000₽</p>
                <Button className="bg-white text-purple-500 hover:bg-gray-100">
                  Получить скидку
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Бесплатная доставка</h3>
                <p className="mb-4">При заказе от 1500₽ доставка бесплатно</p>
                <Button className="bg-white text-purple-500 hover:bg-gray-100">
                  Заказать сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Раздел 7: Отзывы клиентов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Отличный сервис! Еда всегда свежая и доставляют очень быстро. Рекомендую!"
              },
              {
                name: "Михаил Иванов",
                rating: 5,
                text: "Заказываю уже полгода. Качество на высоте, цены адекватные. Очень доволен!"
              },
              {
                name: "Елена Сидорова",
                rating: 4,
                text: "Большой выбор ресторанов и блюд. Удобное приложение. Иногда задерживают доставку."
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 8: Зоны доставки */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Центр", "Арбат", "Сокольники", "Измайлово", 
              "Бутово", "Митино", "Марьино", "Люблино",
              "Тушино", "Отрадное", "Медведково", "Бибирево"
            ].map((district, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="font-medium">{district}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Не нашли свой район? Свяжитесь с нами!</p>
            <Link to="/delivery">
              <Button variant="outline">
                Подробнее о доставке
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Раздел 9: Мобильное приложение */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Скачайте наше приложение</h2>
              <p className="text-xl mb-8 text-gray-300">
                Заказывайте еще удобнее с мобильным приложением. 
                Эксклюзивные акции, быстрое оформление заказов и отслеживание доставки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-100">
                  📱 App Store
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100">
                  🤖 Google Play
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl">📱</div>
              <p className="text-gray-400 mt-4">Доступно на iOS и Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 10: Контакты и поддержка */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Работаем 24/7</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600 mb-2">Москва, ул. Примерная, 123</p>
                <p className="text-sm text-gray-500">Офис и склад</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
                <p className="text-gray-600 mb-2">support@vkusdelivery.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;