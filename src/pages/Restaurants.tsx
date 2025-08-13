import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Star, Clock, MapPin, Filter, Truck } from 'lucide-react';

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const cuisines = [
    { id: 'all', name: 'Все кухни' },
    { id: 'italian', name: 'Итальянская' },
    { id: 'japanese', name: 'Японская' },
    { id: 'american', name: 'Американская' },
    { id: 'chinese', name: 'Китайская' },
    { id: 'indian', name: 'Индийская' },
    { id: 'mexican', name: 'Мексиканская' },
    { id: 'thai', name: 'Тайская' }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Итальянский дворик",
      cuisine: "italian",
      rating: 4.8,
      deliveryTime: "30-40 мин",
      deliveryFee: 200,
      minOrder: 800,
      image: "🏪",
      description: "Аутентичная итальянская кухня с традиционными рецептами",
      specialties: ["Пицца", "Паста", "Ризотто"],
      address: "ул. Тверская, 15",
      isOpen: true,
      discount: 15,
      featured: true
    },
    {
      id: 2,
      name: "Суши Мастер",
      cuisine: "japanese",
      rating: 4.9,
      deliveryTime: "25-35 мин",
      deliveryFee: 150,
      minOrder: 1000,
      image: "🏪",
      description: "Свежие суши и роллы от японских поваров",
      specialties: ["Суши", "Роллы", "Сашими"],
      address: "пр. Мира, 45",
      isOpen: true,
      discount: 0,
      featured: true
    },
    {
      id: 3,
      name: "Burger House",
      cuisine: "american",
      rating: 4.7,
      deliveryTime: "20-30 мин",
      deliveryFee: 100,
      minOrder: 600,
      image: "🏪",
      description: "Сочные бургеры и картофель фри по американским рецептам",
      specialties: ["Бургеры", "Картофель фри", "Милкшейки"],
      address: "ул. Арбат, 28",
      isOpen: true,
      discount: 20,
      featured: false
    },
    {
      id: 4,
      name: "Дракон",
      cuisine: "chinese",
      rating: 4.6,
      deliveryTime: "35-45 мин",
      deliveryFee: 180,
      minOrder: 900,
      image: "🏪",
      description: "Традиционная китайская кухня с доставкой",
      specialties: ["Лапша", "Утка по-пекински", "Димсамы"],
      address: "ул. Китай-город, 12",
      isOpen: false,
      discount: 0,
      featured: false
    },
    {
      id: 5,
      name: "Тадж Махал",
      cuisine: "indian",
      rating: 4.5,
      deliveryTime: "40-50 мин",
      deliveryFee: 220,
      minOrder: 1200,
      image: "🏪",
      description: "Острые и ароматные блюда индийской кухни",
      specialties: ["Карри", "Наан", "Бирьяни"],
      address: "ул. Индийская, 7",
      isOpen: true,
      discount: 10,
      featured: false
    },
    {
      id: 6,
      name: "Мексиканский дом",
      cuisine: "mexican",
      rating: 4.4,
      deliveryTime: "30-40 мин",
      deliveryFee: 160,
      minOrder: 700,
      image: "🏪",
      description: "Острая мексиканская еда с настоящими специями",
      specialties: ["Тако", "Буррито", "Начос"],
      address: "ул. Мексиканская, 33",
      isOpen: true,
      discount: 0,
      featured: false
    },
    {
      id: 7,
      name: "Тайский сад",
      cuisine: "thai",
      rating: 4.7,
      deliveryTime: "35-45 мин",
      deliveryFee: 190,
      minOrder: 850,
      image: "🏪",
      description: "Экзотические блюда тайской кухни",
      specialties: ["Том ям", "Пад тай", "Карри"],
      address: "ул. Тайская, 21",
      isOpen: true,
      discount: 5,
      featured: true
    },
    {
      id: 8,
      name: "Пиццерия Неаполь",
      cuisine: "italian",
      rating: 4.6,
      deliveryTime: "25-35 мин",
      deliveryFee: 120,
      minOrder: 500,
      image: "🏪",
      description: "Настоящая неаполитанская пицца на тонком тесте",
      specialties: ["Пицца", "Кальцоне", "Антипасти"],
      address: "ул. Неаполитанская, 8",
      isOpen: true,
      discount: 25,
      featured: false
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  const featuredRestaurants = restaurants.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Рестораны</h1>
          <p className="text-gray-600 text-lg">Выберите ресторан и закажите любимые блюда</p>
        </div>

        {/* Поиск и фильтры */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск ресторанов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>

          {/* Кухни */}
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine.id}
                variant={selectedCuisine === cuisine.id ? "default" : "outline"}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className={selectedCuisine === cuisine.id ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {cuisine.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Рекомендуемые рестораны */}
        {selectedCuisine === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Рекомендуемые рестораны</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl">{restaurant.image}</div>
                      <div className="flex flex-col gap-2">
                        <Badge className="bg-blue-100 text-blue-800">Рекомендуем</Badge>
                        {restaurant.discount > 0 && (
                          <Badge className="bg-red-100 text-red-800">-{restaurant.discount}%</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
                      <p className="text-gray-600 text-sm">{restaurant.description}</p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {restaurant.deliveryTime}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {restaurant.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Truck className="w-4 h-4 mr-1" />
                        Доставка {restaurant.deliveryFee}₽ • Мин. заказ {restaurant.minOrder}₽
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Специализация:</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={!restaurant.isOpen}
                    >
                      {restaurant.isOpen ? 'Перейти в меню' : 'Закрыто'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Все рестораны */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCuisine === 'all' ? 'Все рестораны' : `${cuisines.find(c => c.id === selectedCuisine)?.name} кухня`}
            <span className="text-gray-500 font-normal ml-2">({filteredRestaurants.length})</span>
          </h2>
          
          {filteredRestaurants.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Рестораны не найдены</p>
              <p className="text-gray-400">Попробуйте изменить поисковый запрос или выбрать другую кухню</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl">{restaurant.image}</div>
                      <div className="flex flex-col gap-2">
                        {restaurant.featured && (
                          <Badge className="bg-blue-100 text-blue-800">Рекомендуем</Badge>
                        )}
                        {restaurant.discount > 0 && (
                          <Badge className="bg-red-100 text-red-800">-{restaurant.discount}%</Badge>
                        )}
                        {!restaurant.isOpen && (
                          <Badge variant="secondary">Закрыто</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
                      <p className="text-gray-600 text-sm">{restaurant.description}</p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {restaurant.deliveryTime}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {restaurant.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Truck className="w-4 h-4 mr-1" />
                        Доставка {restaurant.deliveryFee}₽ • Мин. заказ {restaurant.minOrder}₽
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Специализация:</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={!restaurant.isOpen}
                    >
                      {restaurant.isOpen ? 'Перейти в меню' : 'Закрыто'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurants;