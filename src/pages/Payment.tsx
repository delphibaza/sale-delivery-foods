import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Shield,
  CheckCircle,
  AlertCircle,
  Building,
  Receipt,
  Lock,
  Percent
} from 'lucide-react';

const Payment = () => {
  const paymentMethods = [
    {
      icon: <Banknote className="w-8 h-8 text-green-500" />,
      title: "Наличными курьеру",
      description: "Оплата при получении заказа",
      features: ["Без комиссии", "Сдача с любой суммы", "Самый популярный способ"],
      available: true,
      commission: 0
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Картой курьеру",
      description: "Оплата банковской картой при доставке",
      features: ["Visa, MasterCard, МИР", "Бесконтактная оплата", "Чек на email"],
      available: true,
      commission: 0
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: "Онлайн на сайте",
      description: "Безопасная оплата через интернет",
      features: ["Все банковские карты", "Apple Pay, Google Pay", "Мгновенное подтверждение"],
      available: true,
      commission: 0
    },
    {
      icon: <Building className="w-8 h-8 text-orange-500" />,
      title: "Безналичный расчет",
      description: "Для юридических лиц",
      features: ["Оплата по счету", "Отсрочка платежа", "Закрывающие документы"],
      available: true,
      commission: 0
    }
  ];

  const onlinePaymentSystems = [
    { name: "Visa", icon: "💳", color: "bg-blue-100 text-blue-800" },
    { name: "MasterCard", icon: "💳", color: "bg-red-100 text-red-800" },
    { name: "МИР", icon: "💳", color: "bg-green-100 text-green-800" },
    { name: "Apple Pay", icon: "📱", color: "bg-gray-100 text-gray-800" },
    { name: "Google Pay", icon: "📱", color: "bg-yellow-100 text-yellow-800" },
    { name: "Samsung Pay", icon: "📱", color: "bg-blue-100 text-blue-800" },
    { name: "Яндекс.Деньги", icon: "💰", color: "bg-yellow-100 text-yellow-800" },
    { name: "QIWI", icon: "💰", color: "bg-orange-100 text-orange-800" }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "SSL шифрование",
      description: "Все данные передаются по защищенному соединению"
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-500" />,
      title: "PCI DSS сертификация",
      description: "Соответствие международным стандартам безопасности"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: "3D Secure",
      description: "Дополнительная аутентификация для онлайн-платежей"
    },
    {
      icon: <Receipt className="w-6 h-6 text-orange-500" />,
      title: "Чеки и документы",
      description: "Все документы об оплате сохраняются в личном кабинете"
    }
  ];

  const corporateFeatures = [
    "Работа с НДС и без НДС",
    "Отсрочка платежа до 14 дней",
    "Персональный менеджер",
    "Скидки при больших объемах",
    "Электронный документооборот",
    "Детализированные отчеты"
  ];

  const paymentSteps = [
    {
      step: 1,
      title: "Выбор способа оплаты",
      description: "При оформлении заказа выберите удобный способ оплаты"
    },
    {
      step: 2,
      title: "Подтверждение данных",
      description: "Проверьте сумму заказа и реквизиты для оплаты"
    },
    {
      step: 3,
      title: "Оплата",
      description: "Произведите оплату выбранным способом"
    },
    {
      step: 4,
      title: "Подтверждение",
      description: "Получите подтверждение об успешной оплате"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Способы оплаты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ оплаты. Все платежи защищены и безопасны
          </p>
        </div>

        {/* Способы оплаты */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Доступные способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {method.icon}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{method.title}</h3>
                        {method.available && (
                          <Badge className="bg-green-100 text-green-800">Доступно</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Комиссия: {method.commission === 0 ? "Без комиссии" : `${method.commission}%`}
                    </span>
                    <Button variant="outline" size="sm">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Онлайн платежные системы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Принимаем к оплате</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {onlinePaymentSystems.map((system, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{system.icon}</div>
                  <Badge className={`text-xs ${system.color}`}>
                    {system.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Как происходит оплата */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как происходит оплата</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentSteps.map((step) => (
              <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-500 font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Безопасность */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Безопасность платежей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">100% гарантия безопасности</h3>
                <p className="text-gray-600">
                  Мы не храним данные ваших банковских карт. Все платежи обрабатываются 
                  через сертифицированные платежные системы.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Корпоративным клиентам */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Корпоративным клиентам</h2>
                  <p className="text-xl mb-6">
                    Специальные условия оплаты для юридических лиц
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {corporateFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 bg-white text-blue-500 hover:bg-gray-100">
                    Стать корпоративным клиентом
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-lg">Удобные условия для бизнеса</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Возврат средств */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Возврат средств</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Отмена заказа</h3>
                <p className="text-gray-600 mb-4">
                  Если заказ еще не передан в ресторан, деньги возвращаются мгновенно
                </p>
                <Badge className="bg-green-100 text-green-800">Мгновенно</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CreditCard className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Возврат на карту</h3>
                <p className="text-gray-600 mb-4">
                  Возврат на банковскую карту происходит в течение 3-5 рабочих дней
                </p>
                <Badge className="bg-blue-100 text-blue-800">3-5 дней</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Receipt className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Бонусный счет</h3>
                <p className="text-gray-600 mb-4">
                  Возврат на бонусный счет для использования в следующих заказах
                </p>
                <Badge className="bg-purple-100 text-purple-800">Мгновенно</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Скидки и акции */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <Percent className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Скидки при онлайн-оплате</h2>
              <p className="text-xl mb-6">
                Получите дополнительную скидку 5% при оплате онлайн
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">5%</div>
                  <div className="text-sm">Скидка при онлайн-оплате</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">10%</div>
                  <div className="text-sm">Кэшбэк бонусами</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">0₽</div>
                  <div className="text-sm">Комиссия за платеж</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Безопасно ли платить онлайн?</h3>
                <p className="text-gray-600 mb-3">
                  Да, все онлайн-платежи защищены SSL-шифрованием и проходят через 
                  сертифицированные платежные системы.
                </p>
                <Button variant="outline" size="sm">Подробнее о безопасности</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Можно ли оплатить частями?</h3>
                <p className="text-gray-600 mb-3">
                  Да, доступна оплата в рассрочку через партнерские сервисы 
                  для заказов от 3000₽.
                </p>
                <Button variant="outline" size="sm">Узнать условия</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Что делать, если платеж не прошел?</h3>
                <p className="text-gray-600 mb-3">
                  Обратитесь в службу поддержки. Мы поможем разобраться с проблемой 
                  и найти решение.
                </p>
                <Button variant="outline" size="sm">Связаться с поддержкой</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Выдаете ли чеки?</h3>
                <p className="text-gray-600 mb-3">
                  Да, все чеки отправляются на email и сохраняются в личном кабинете. 
                  Бумажный чек выдает курьер.
                </p>
                <Button variant="outline" size="sm">Настроить получение чеков</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;