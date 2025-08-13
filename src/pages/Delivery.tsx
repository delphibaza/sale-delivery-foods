import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Truck, 
  Clock, 
  MapPin, 
  CreditCard,
  Shield,
  Phone,
  CheckCircle,
  AlertCircle,
  Navigation
} from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { name: "Центр", time: "20-30 мин", fee: 150, color: "bg-green-100 text-green-800" },
    { name: "Арбат", time: "25-35 мин", fee: 180, color: "bg-green-100 text-green-800" },
    { name: "Сокольники", time: "30-40 мин", fee: 200, color: "bg-yellow-100 text-yellow-800" },
    { name: "Измайлово", time: "35-45 мин", fee: 220, color: "bg-yellow-100 text-yellow-800" },
    { name: "Бутово", time: "40-50 мин", fee: 250, color: "bg-orange-100 text-orange-800" },
    { name: "Митино", time: "45-55 мин", fee: 280, color: "bg-orange-100 text-orange-800" },
    { name: "Марьино", time: "35-45 мин", fee: 230, color: "bg-yellow-100 text-yellow-800" },
    { name: "Люблино", time: "40-50 мин", fee: 240, color: "bg-orange-100 text-orange-800" },
    { name: "Тушино", time: "45-55 мин", fee: 270, color: "bg-orange-100 text-orange-800" },
    { name: "Отрадное", time: "40-50 мин", fee: 250, color: "bg-orange-100 text-orange-800" },
    { name: "Медведково", time: "35-45 мин", fee: 220, color: "bg-yellow-100 text-yellow-800" },
    { name: "Бибирево", time: "45-55 мин", fee: 260, color: "bg-orange-100 text-orange-800" }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: "Оформление заказа",
      description: "Выберите блюда, укажите адрес и способ оплаты",
      time: "2-3 минуты",
      icon: <CreditCard className="w-8 h-8 text-orange-500" />
    },
    {
      step: 2,
      title: "Подтверждение",
      description: "Ресторан принимает заказ и начинает готовить",
      time: "1-2 минуты",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      step: 3,
      title: "Приготовление",
      description: "Повара готовят ваши блюда из свежих продуктов",
      time: "15-25 минут",
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      step: 4,
      title: "Доставка",
      description: "Курьер забирает заказ и везет к вам",
      time: "15-30 минут",
      icon: <Truck className="w-8 h-8 text-purple-500" />
    }
  ];

  const deliveryRules = [
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Время доставки",
      description: "Доставляем с 8:00 до 23:00 ежедневно. Ночная доставка с 23:00 до 8:00 с доплатой 100₽"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Зона доставки",
      description: "Доставляем в пределах МКАД и ближайшего Подмосковья. Минимальная сумма заказа 500₽"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-500" />,
      title: "Способы оплаты",
      description: "Наличными курьеру, картой курьеру или онлайн на сайте. Безналичный расчет для юрлиц"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Гарантии качества",
      description: "Если заказ не соответствует ожиданиям, мы вернем деньги или заменим блюдо бесплатно"
    }
  ];

  const freeDeliveryConditions = [
    { condition: "Заказ от 1500₽", description: "Бесплатная доставка в любую точку города" },
    { condition: "VIP статус", description: "Бесплатная доставка при любой сумме заказа" },
    { condition: "Первый заказ", description: "Бесплатная доставка для новых клиентов" },
    { condition: "Акционные дни", description: "Специальные предложения по четвергам" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Доставка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и надежная доставка любимых блюд прямо к вашему порогу
          </p>
        </div>

        {/* Основная информация */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-6 h-6 text-orange-500" />
                  Как работает доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {deliverySteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 font-bold">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {step.icon}
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <Badge variant="outline">{step.time}</Badge>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Среднее время</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-2">35 мин</div>
                  <p className="text-gray-600">От заказа до доставки</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-gray-600">Возврат денег, если что-то пошло не так</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Зоны доставки */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{zone.name}</h3>
                    <Badge className={zone.color}>
                      {zone.fee}₽
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {zone.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Не нашли свой район?</p>
            <Button variant="outline">
              <Navigation className="w-4 h-4 mr-2" />
              Проверить адрес доставки
            </Button>
          </div>
        </section>

        {/* Условия бесплатной доставки */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Бесплатная доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeDeliveryConditions.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.condition}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Правила доставки */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Правила доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryRules.map((rule, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {rule.icon}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
                      <p className="text-gray-600">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Отслеживание заказа */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Отслеживание заказа</h2>
                  <p className="text-xl mb-6">
                    Следите за статусом заказа в режиме реального времени
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>SMS-уведомления о статусе</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Геолокация курьера на карте</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>Прямая связь с курьером</span>
                    </div>
                  </div>
                  <Button className="mt-6 bg-white text-blue-500 hover:bg-gray-100">
                    Отследить заказ
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">📱</div>
                  <p className="text-lg">Удобное отслеживание в приложении</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Часто задаваемые вопросы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Что делать, если курьер опаздывает?</h3>
                <p className="text-gray-600 mb-3">
                  Если доставка задерживается более чем на 15 минут, мы автоматически 
                  компенсируем стоимость доставки.
                </p>
                <Button variant="outline" size="sm">Связаться с поддержкой</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Можно ли изменить адрес доставки?</h3>
                <p className="text-gray-600 mb-3">
                  Адрес можно изменить до момента передачи заказа курьеру. 
                  Обратитесь в службу поддержки.
                </p>
                <Button variant="outline" size="sm">Изменить заказ</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Доставляете ли в офисы?</h3>
                <p className="text-gray-600 mb-3">
                  Да, мы доставляем в офисы. Укажите этаж и номер офиса 
                  в комментариях к заказу.
                </p>
                <Button variant="outline" size="sm">Корпоративные заказы</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Что если заказ не подошел?</h3>
                <p className="text-gray-600 mb-3">
                  Мы вернем деньги или заменим блюдо, если оно не соответствует 
                  описанию или качеству.
                </p>
                <Button variant="outline" size="sm">Сообщить о проблеме</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Контакты службы доставки */}
        <section>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Служба доставки</h2>
              <p className="text-gray-600 mb-6">
                По всем вопросам доставки обращайтесь к нашим специалистам
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Phone className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold">Горячая линия</p>
                  <p className="text-orange-500">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <AlertCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold">Чат поддержки</p>
                  <p className="text-blue-500">Онлайн 24/7</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Диспетчерская</p>
                  <p className="text-green-500">Контроль доставки</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;