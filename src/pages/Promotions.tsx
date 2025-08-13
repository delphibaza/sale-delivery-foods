import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Gift, 
  Percent, 
  Clock, 
  Users,
  Star,
  Calendar,
  Tag,
  Zap
} from 'lucide-react';

const Promotions = () => {
  const [promoCode, setPromoCode] = useState('');

  const activePromotions = [
    {
      id: 1,
      title: "Скидка 30% на первый заказ",
      description: "Для новых пользователей при заказе от 1000₽",
      code: "FIRST30",
      discount: 30,
      validUntil: "2024-02-29",
      minOrder: 1000,
      type: "new_user",
      image: "🎉",
      featured: true
    },
    {
      id: 2,
      title: "Бесплатная доставка",
      description: "При заказе от 1500₽ доставка бесплатно",
      code: "FREEDEL",
      discount: 0,
      validUntil: "2024-03-31",
      minOrder: 1500,
      type: "delivery",
      image: "🚚",
      featured: true
    },
    {
      id: 3,
      title: "Пицца + напиток = скидка 20%",
      description: "При заказе любой пиццы и напитка",
      code: "PIZZA20",
      discount: 20,
      validUntil: "2024-02-15",
      minOrder: 0,
      type: "combo",
      image: "🍕",
      featured: false
    },
    {
      id: 4,
      title: "Суши-сет со скидкой 25%",
      description: "На все суши-сеты по воскресеньям",
      code: "SUSHI25",
      discount: 25,
      validUntil: "2024-12-31",
      minOrder: 800,
      type: "weekend",
      image: "🍣",
      featured: false
    },
    {
      id: 5,
      title: "Счастливые часы",
      description: "Скидка 15% с 14:00 до 16:00",
      code: "HAPPY15",
      discount: 15,
      validUntil: "2024-12-31",
      minOrder: 500,
      type: "time",
      image: "⏰",
      featured: false
    },
    {
      id: 6,
      title: "Друзья приносят скидки",
      description: "Пригласи друга и получи 200₽ на счет",
      code: "FRIEND200",
      discount: 0,
      validUntil: "2024-12-31",
      minOrder: 0,
      type: "referral",
      image: "👥",
      featured: true
    }
  ];

  const expiredPromotions = [
    {
      id: 7,
      title: "Новогодняя акция",
      description: "Скидка 40% на все заказы",
      code: "NY2024",
      discount: 40,
      validUntil: "2024-01-10",
      image: "🎄"
    },
    {
      id: 8,
      title: "День святого Валентина",
      description: "Романтический ужин со скидкой 35%",
      code: "LOVE35",
      discount: 35,
      validUntil: "2024-02-14",
      image: "💝"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new_user': return <Users className="w-4 h-4" />;
      case 'delivery': return <Gift className="w-4 h-4" />;
      case 'combo': return <Star className="w-4 h-4" />;
      case 'weekend': return <Calendar className="w-4 h-4" />;
      case 'time': return <Clock className="w-4 h-4" />;
      case 'referral': return <Users className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'new_user': return 'Для новичков';
      case 'delivery': return 'Доставка';
      case 'combo': return 'Комбо';
      case 'weekend': return 'Выходные';
      case 'time': return 'Время';
      case 'referral': return 'Друзья';
      default: return 'Акция';
    }
  };

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Здесь можно добавить уведомление об успешном копировании
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Акции и скидки</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Экономьте на любимых блюдах с нашими специальными предложениями
          </p>
        </div>

        {/* Промокод */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Есть промокод?</h2>
              <p className="mb-6">Введите промокод и получите скидку на заказ</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Введите промокод"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-white text-black"
                />
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  Применить
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Рекомендуемые акции */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">🔥 Горячие предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePromotions.filter(promo => promo.featured).map((promo) => (
              <Card key={promo.id} className="hover:shadow-lg transition-shadow border-2 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{promo.image}</div>
                    <div className="flex flex-col gap-2">
                      <Badge className="bg-red-100 text-red-800">
                        <Zap className="w-3 h-3 mr-1" />
                        ХИТ
                      </Badge>
                      {promo.discount > 0 && (
                        <Badge className="bg-green-100 text-green-800">
                          -{promo.discount}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {getTypeIcon(promo.type)}
                        {getTypeName(promo.type)}
                      </Badge>
                    </div>
                    
                    {promo.minOrder > 0 && (
                      <p className="text-sm text-gray-500">
                        Минимальный заказ: {promo.minOrder}₽
                      </p>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Действует до {new Date(promo.validUntil).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-orange-500 hover:bg-orange-600"
                      onClick={() => copyPromoCode(promo.code)}
                    >
                      {promo.code}
                    </Button>
                    <Button variant="outline" size="sm">
                      Копировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Все активные акции */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Все активные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePromotions.map((promo) => (
              <Card key={promo.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{promo.image}</div>
                    <div className="flex flex-col gap-2">
                      {promo.featured && (
                        <Badge className="bg-red-100 text-red-800">
                          <Zap className="w-3 h-3 mr-1" />
                          ХИТ
                        </Badge>
                      )}
                      {promo.discount > 0 && (
                        <Badge className="bg-green-100 text-green-800">
                          -{promo.discount}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {getTypeIcon(promo.type)}
                        {getTypeName(promo.type)}
                      </Badge>
                    </div>
                    
                    {promo.minOrder > 0 && (
                      <p className="text-sm text-gray-500">
                        Минимальный заказ: {promo.minOrder}₽
                      </p>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Действует до {new Date(promo.validUntil).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-orange-500 hover:bg-orange-600"
                      onClick={() => copyPromoCode(promo.code)}
                    >
                      {promo.code}
                    </Button>
                    <Button variant="outline" size="sm">
                      Копировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Программа лояльности */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Программа лояльности</h2>
                  <p className="text-xl mb-6">
                    Зарабатывайте бонусы с каждым заказом и тратьте их на новые покупки
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5" />
                      <span>1 бонус за каждые 10₽</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5" />
                      <span>Двойные бонусы в день рождения</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Percent className="w-5 h-5" />
                      <span>Эксклюзивные скидки для VIP</span>
                    </div>
                  </div>
                  <Button className="mt-6 bg-white text-purple-500 hover:bg-gray-100">
                    Узнать больше
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🎁</div>
                  <p className="text-lg">Присоединяйтесь к программе лояльности</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Завершенные акции */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Завершенные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expiredPromotions.map((promo) => (
              <Card key={promo.id} className="opacity-60">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl grayscale">{promo.image}</div>
                    <Badge variant="secondary">Завершена</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Действовала до {new Date(promo.validUntil).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                  
                  <Button disabled className="w-full">
                    {promo.code}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Подписка на новости */}
        <section>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Не пропустите новые акции!</h2>
              <p className="text-gray-600 mb-6">
                Подпишитесь на рассылку и первыми узнавайте о новых скидках и предложениях
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Ваш email" type="email" />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Подписаться
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Отправляем только важные новости, не спамим
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Promotions;