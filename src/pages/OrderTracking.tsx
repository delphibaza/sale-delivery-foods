import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle,
  Truck,
  Phone,
  MessageCircle,
  Navigation,
  User,
  Package
} from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  // Демо данные для отслеживания
  const demoOrder = {
    id: '#1234',
    status: 'delivering',
    restaurant: 'Итальянский дворик',
    items: ['Маргарита', 'Цезарь', 'Кока-Кола'],
    total: 1450,
    address: 'ул. Тверская, д. 15, кв. 42',
    estimatedTime: '15-20 минут',
    courier: {
      name: 'Алексей',
      phone: '+7 (999) 123-45-67',
      rating: 4.9,
      location: { lat: 55.7558, lng: 37.6176 }
    },
    timeline: [
      {
        status: 'confirmed',
        title: 'Заказ подтвержден',
        time: '14:25',
        completed: true,
        description: 'Ресторан принял ваш заказ'
      },
      {
        status: 'preparing',
        title: 'Готовится',
        time: '14:30',
        completed: true,
        description: 'Повара готовят ваши блюда'
      },
      {
        status: 'ready',
        title: 'Готов к выдаче',
        time: '14:45',
        completed: true,
        description: 'Заказ готов, курьер забирает'
      },
      {
        status: 'delivering',
        title: 'В пути',
        time: '14:50',
        completed: true,
        description: 'Курьер везет ваш заказ'
      },
      {
        status: 'delivered',
        title: 'Доставлен',
        time: '15:10',
        completed: false,
        description: 'Заказ будет доставлен'
      }
    ]
  };

  const handleTrackOrder = () => {
    if (orderNumber.trim()) {
      // В реальном приложении здесь был бы API запрос
      setTrackingData(demoOrder);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-yellow-100 text-yellow-800';
      case 'ready': return 'bg-purple-100 text-purple-800';
      case 'delivering': return 'bg-orange-100 text-orange-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтвержден';
      case 'preparing': return 'Готовится';
      case 'ready': return 'Готов';
      case 'delivering': return 'В пути';
      case 'delivered': return 'Доставлен';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Отслеживание заказа</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за статусом вашего заказа в режиме реального времени
          </p>
        </div>

        {/* Поиск заказа */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Package className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Введите номер заказа</h2>
                <p className="text-gray-600">Номер заказа указан в SMS-уведомлении</p>
              </div>
              
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Например: #1234"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button 
                  onClick={handleTrackOrder}
                  className="bg-orange-500 hover:bg-orange-600 h-12 px-8"
                >
                  Отследить
                </Button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Или войдите в <a href="/profile" className="text-orange-500 hover:underline">личный кабинет</a> 
                  для просмотра всех заказов
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Результат отслеживания */}
        {trackingData && (
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Основная информация */}
              <div className="lg:col-span-2 space-y-6">
                {/* Статус заказа */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Заказ {trackingData.id}
                          <Badge className={getStatusColor(trackingData.status)}>
                            {getStatusText(trackingData.status)}
                          </Badge>
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{trackingData.restaurant}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-500">{trackingData.total}₽</div>
                        <div className="text-sm text-gray-600">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {trackingData.estimatedTime}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Состав заказа:</h4>
                        <ul className="text-gray-600">
                          {trackingData.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>Адрес доставки: {trackingData.address}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Временная шкала */}
                <Card>
                  <CardHeader>
                    <CardTitle>Статус заказа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {trackingData.timeline.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            {step.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className={`font-semibold ${
                                step.completed ? 'text-gray-900' : 'text-gray-500'
                              }`}>
                                {step.title}
                              </h4>
                              <span className={`text-sm ${
                                step.completed ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                                {step.time}
                              </span>
                            </div>
                            <p className={`text-sm ${
                              step.completed ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Карта (заглушка) */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Navigation className="w-5 h-5" />
                      Местоположение курьера
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Интерактивная карта</p>
                        <p className="text-sm">Курьер движется к вам</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Боковая панель */}
              <div className="space-y-6">
                {/* Информация о курьере */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Ваш курьер
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="font-semibold text-lg">{trackingData.courier.name}</h3>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${
                              i < Math.floor(trackingData.courier.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-1">
                          {trackingData.courier.rating}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Позвонить курьеру
                      </Button>
                      <Button className="w-full" variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Написать сообщение
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Действия */}
                <Card>
                  <CardHeader>
                    <CardTitle>Нужна помощь?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full">
                      Изменить адрес
                    </Button>
                    <Button variant="outline" className="w-full">
                      Отменить заказ
                    </Button>
                    <Button variant="outline" className="w-full">
                      Связаться с поддержкой
                    </Button>
                  </CardContent>
                </Card>

                {/* Информация о доставке */}
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Время заказа:</span>
                        <span>14:25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ожидаемое время:</span>
                        <span>15:10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Способ оплаты:</span>
                        <span>Картой онлайн</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Итого:</span>
                        <span>{trackingData.total}₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Полезная информация */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Полезная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Время доставки</h3>
                <p className="text-gray-600 text-sm">
                  Среднее время доставки 30-45 минут. В пиковые часы может увеличиваться.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Связь с курьером</h3>
                <p className="text-gray-600 text-sm">
                  Вы можете связаться с курьером напрямую для уточнения деталей доставки.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Точный адрес</h3>
                <p className="text-gray-600 text-sm">
                  Убедитесь, что указали правильный адрес и будете доступны по телефону.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Поддержка */}
        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Проблемы с заказом?</h2>
              <p className="text-xl mb-6">
                Наша служба поддержки готова помочь 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Онлайн чат
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

export default OrderTracking;