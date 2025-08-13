import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  User, 
  MapPin, 
  CreditCard, 
  Clock, 
  Star, 
  Gift,
  Settings,
  LogOut,
  Edit
} from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Анна Петрова',
    email: 'anna.petrova@email.com',
    phone: '+7 (495) 123-45-67',
    birthday: '1990-05-15'
  });

  const [addresses] = useState([
    {
      id: 1,
      title: 'Дом',
      address: 'Москва, ул. Тверская, д. 15, кв. 42',
      isDefault: true
    },
    {
      id: 2,
      title: 'Работа',
      address: 'Москва, пр. Мира, д. 120, офис 301',
      isDefault: false
    }
  ]);

  const [orders] = useState([
    {
      id: 1001,
      date: '2024-01-15',
      status: 'delivered',
      total: 1450,
      items: ['Маргарита', 'Филадельфия', 'Кока-Кола'],
      restaurant: 'Итальянский дворик'
    },
    {
      id: 1002,
      date: '2024-01-12',
      status: 'delivered',
      total: 890,
      items: ['Чизбургер', 'Картофель фри'],
      restaurant: 'Burger House'
    },
    {
      id: 1003,
      date: '2024-01-10',
      status: 'cancelled',
      total: 650,
      items: ['Калифорния', 'Филадельфия'],
      restaurant: 'Суши Мастер'
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800">Доставлен</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Отменен</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">В обработке</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <User className="w-4 h-4 text-gray-500" />
                    <span>Личные данные</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>История заказов</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>Адреса</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span>Способы оплаты</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <Gift className="w-4 h-4 text-gray-500" />
                    <span>Бонусы</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <Settings className="w-4 h-4 text-gray-500" />
                    <span>Настройки</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full mt-6 text-red-500 hover:text-red-700">
                  <LogOut className="w-4 h-4 mr-2" />
                  Выйти
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="orders">Заказы</TabsTrigger>
                <TabsTrigger value="addresses">Адреса</TabsTrigger>
                <TabsTrigger value="payments">Оплата</TabsTrigger>
                <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
              </TabsList>

              {/* Личные данные */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Личные данные
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Редактировать
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" value={user.name} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={user.email} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" value={user.phone} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="birthday">Дата рождения</Label>
                        <Input id="birthday" type="date" value={user.birthday} readOnly />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-4">Статистика</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">24</div>
                            <div className="text-sm text-gray-600">Заказов</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">15,450₽</div>
                            <div className="text-sm text-gray-600">Потрачено</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">4.8</div>
                            <div className="text-sm text-gray-600">Средняя оценка</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* История заказов */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>История заказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold">Заказ #{order.id}</h3>
                              <p className="text-sm text-gray-600">{order.restaurant}</p>
                              <p className="text-sm text-gray-500">{order.date}</p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(order.status)}
                              <p className="text-lg font-bold mt-1">{order.total}₽</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="text-sm text-gray-600">
                              {order.items.join(', ')}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Повторить заказ
                            </Button>
                            {order.status === 'delivered' && (
                              <Button variant="outline" size="sm">
                                <Star className="w-4 h-4 mr-1" />
                                Оценить
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Адреса */}
              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Адреса доставки
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Добавить адрес
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">{address.title}</h3>
                                {address.isDefault && (
                                  <Badge variant="outline">По умолчанию</Badge>
                                )}
                              </div>
                              <p className="text-gray-600">{address.address}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Редактировать
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                Удалить
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Способы оплаты */}
              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Способы оплаты
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Добавить карту
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-8 h-8 text-blue-500" />
                            <div>
                              <p className="font-semibold">**** **** **** 1234</p>
                              <p className="text-sm text-gray-600">Visa • Истекает 12/26</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Редактировать
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              Удалить
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                              💵
                            </div>
                            <div>
                              <p className="font-semibold">Наличные</p>
                              <p className="text-sm text-gray-600">Оплата курьеру</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Бонусы */}
              <TabsContent value="bonuses">
                <Card>
                  <CardHeader>
                    <CardTitle>Программа лояльности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                        <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">1,250 бонусов</h3>
                        <p className="text-gray-600">Доступно для использования</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">Как получить бонусы</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 1 бонус за каждые 10₽</li>
                              <li>• Двойные бонусы в день рождения</li>
                              <li>• Бонусы за отзывы</li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">Как потратить</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 1 бонус = 1₽</li>
                              <li>• Минимум 100 бонусов</li>
                              <li>• До 50% от суммы заказа</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">История бонусов</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 border rounded">
                            <div>
                              <p className="font-medium">Заказ #1001</p>
                              <p className="text-sm text-gray-600">15 января 2024</p>
                            </div>
                            <span className="text-green-600 font-semibold">+145 бонусов</span>
                          </div>
                          <div className="flex justify-between items-center p-3 border rounded">
                            <div>
                              <p className="font-medium">Использование бонусов</p>
                              <p className="text-sm text-gray-600">12 января 2024</p>
                            </div>
                            <span className="text-red-600 font-semibold">-200 бонусов</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;