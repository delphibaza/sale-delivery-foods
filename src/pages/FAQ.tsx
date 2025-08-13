import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  CreditCard,
  Truck,
  Phone,
  MapPin,
  Star
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'orders', name: 'Заказы', icon: <Clock className="w-4 h-4" /> },
    { id: 'delivery', name: 'Доставка', icon: <Truck className="w-4 h-4" /> },
    { id: 'payment', name: 'Оплата', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'account', name: 'Аккаунт', icon: <Star className="w-4 h-4" /> },
    { id: 'support', name: 'Поддержка', icon: <Phone className="w-4 h-4" /> }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'orders',
      question: 'Как оформить заказ?',
      answer: 'Для оформления заказа выберите блюда из меню, добавьте их в корзину, укажите адрес доставки и способ оплаты, затем подтвердите заказ. Вы получите SMS с номером заказа и временем доставки.',
      popular: true
    },
    {
      id: 2,
      category: 'orders',
      question: 'Можно ли изменить заказ после оформления?',
      answer: 'Изменить заказ можно только до момента передачи его в ресторан (обычно в течение 5-10 минут). Для изменения свяжитесь со службой поддержки по телефону +7 (495) 123-45-67.',
      popular: false
    },
    {
      id: 3,
      category: 'orders',
      question: 'Какая минимальная сумма заказа?',
      answer: 'Минимальная сумма заказа составляет 500₽. В некоторых районах минимальная сумма может быть выше из-за удаленности.',
      popular: true
    },
    {
      id: 4,
      category: 'delivery',
      question: 'Сколько времени занимает доставка?',
      answer: 'Среднее время доставки составляет 30-45 минут. Точное время зависит от загруженности ресторана, погодных условий и удаленности адреса. Время доставки указывается при оформлении заказа.',
      popular: true
    },
    {
      id: 5,
      category: 'delivery',
      question: 'В какие районы вы доставляете?',
      answer: 'Мы доставляем в пределах МКАД и ближайшего Подмосковья. Полный список районов доставки доступен на странице "Доставка". Стоимость доставки зависит от удаленности района.',
      popular: true
    },
    {
      id: 6,
      category: 'delivery',
      question: 'Что делать, если курьер опаздывает?',
      answer: 'Если доставка задерживается более чем на 15 минут от заявленного времени, мы автоматически компенсируем стоимость доставки. Вы также можете связаться с курьером напрямую или обратиться в службу поддержки.',
      popular: false
    },
    {
      id: 7,
      category: 'delivery',
      question: 'Доставляете ли вы в офисы?',
      answer: 'Да, мы доставляем в офисы. При оформлении заказа укажите в комментариях этаж, номер офиса и контактное лицо. Для крупных корпоративных заказов предусмотрены специальные условия.',
      popular: false
    },
    {
      id: 8,
      category: 'payment',
      question: 'Какие способы оплаты доступны?',
      answer: 'Вы можете оплатить заказ наличными курьеру, банковской картой курьеру, онлайн на сайте или безналичным расчетом (для юридических лиц). Все способы оплаты безопасны и защищены.',
      popular: true
    },
    {
      id: 9,
      category: 'payment',
      question: 'Безопасно ли платить онлайн?',
      answer: 'Да, онлайн-платежи полностью безопасны. Мы используем SSL-шифрование и сертифицированные платежные системы. Данные вашей карты не сохраняются на наших серверах.',
      popular: false
    },
    {
      id: 10,
      category: 'payment',
      question: 'Можно ли получить чек?',
      answer: 'Да, чек предоставляется в электронном виде на указанный email. При оплате наличными или картой курьеру вы также получите бумажный чек. Все чеки сохраняются в личном кабинете.',
      popular: false
    },
    {
      id: 11,
      category: 'account',
      question: 'Как создать аккаунт?',
      answer: 'Для создания аккаунта нажмите "Регистрация" в правом верхнем углу сайта, введите номер телефона и подтвердите его кодом из SMS. Аккаунт позволяет сохранять адреса, отслеживать заказы и получать бонусы.',
      popular: false
    },
    {
      id: 12,
      category: 'account',
      question: 'Как работает программа лояльности?',
      answer: 'За каждые 10₽ заказа вы получаете 1 бонус. Бонусы можно тратить как деньги (1 бонус = 1₽). В день рождения начисляются двойные бонусы. Минимальная сумма для списания — 100 бонусов.',
      popular: true
    },
    {
      id: 13,
      category: 'account',
      question: 'Забыл пароль от аккаунта',
      answer: 'Нажмите "Забыли пароль?" на странице входа, введите номер телефона или email. Вы получите код для восстановления доступа. Если проблема не решается, обратитесь в службу поддержки.',
      popular: false
    },
    {
      id: 14,
      category: 'support',
      question: 'Как связаться со службой поддержки?',
      answer: 'Служба поддержки работает 24/7. Телефон: +7 (495) 123-45-67, email: support@vkusdelivery.ru, онлайн-чат на сайте. Среднее время ответа — 2 минуты в чате, до 1 часа по email.',
      popular: true
    },
    {
      id: 15,
      category: 'support',
      question: 'Что делать, если заказ не соответствует ожиданиям?',
      answer: 'Если заказ не соответствует описанию, пришел холодным или некачественным, сообщите об этом в течение 2 часов. Мы заменим блюдо, вернем деньги или предложим компенсацию.',
      popular: false
    },
    {
      id: 16,
      category: 'orders',
      question: 'Можно ли заказать на определенное время?',
      answer: 'Да, при оформлении заказа вы можете выбрать "Доставить к определенному времени". Заказ можно оформить максимум на 3 дня вперед. Предзаказы принимаются с 8:00 до 22:00.',
      popular: false
    },
    {
      id: 17,
      category: 'delivery',
      question: 'Работаете ли вы ночью?',
      answer: 'Да, мы работаем круглосуточно. Ночная доставка (с 23:00 до 8:00) осуществляется с доплатой 100₽. Выбор ресторанов ночью ограничен.',
      popular: false
    },
    {
      id: 18,
      category: 'payment',
      question: 'Как получить возврат денег?',
      answer: 'Возврат осуществляется тем же способом, которым была произведена оплата. Наличные возвращаются курьером, безналичные платежи — на карту в течение 3-5 рабочих дней.',
      popular: false
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQ = faqItems.filter(item => item.popular);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const quickActions = [
    {
      title: "Отследить заказ",
      description: "Узнайте статус вашего заказа",
      action: "Отследить",
      icon: <MapPin className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Связаться с поддержкой",
      description: "Получите помощь от наших специалистов",
      action: "Связаться",
      icon: <Phone className="w-6 h-6 text-green-500" />
    },
    {
      title: "Повторить заказ",
      description: "Закажите то же самое, что и в прошлый раз",
      action: "Повторить",
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на самые популярные вопросы о нашем сервисе
          </p>
        </div>

        {/* Поиск */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Поиск по вопросам и ответам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Быстрые действия */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Быстрые действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <Button variant="outline">{action.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Популярные вопросы */}
        {selectedCategory === 'all' && !searchTerm && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Популярные вопросы</h2>
            <div className="space-y-4">
              {popularFAQ.slice(0, 5).map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <Badge className="bg-orange-100 text-orange-800">Популярный</Badge>
                        <span className="font-semibold">{item.question}</span>
                      </div>
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
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
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id ? 'bg-orange-500 hover:bg-orange-600' : ''
                }`}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Список вопросов */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'Все вопросы' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-500">
              Найдено: {filteredFAQ.length}
            </span>
          </div>

          {filteredFAQ.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Вопросы не найдены</h3>
                <p className="text-gray-600 mb-4">
                  Попробуйте изменить поисковый запрос или выбрать другую категорию
                </p>
                <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredFAQ.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        {item.popular && (
                          <Badge className="bg-orange-100 text-orange-800">Популярный</Badge>
                        )}
                        <span className="font-semibold">{item.question}</span>
                      </div>
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Не нашли ответ */}
        <section>
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-xl mb-6">
                Наша служба поддержки работает круглосуточно и готова помочь
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-500 hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить: +7 (495) 123-45-67
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500">
                  Написать в чат
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-90">
                Среднее время ответа: 2 минуты в чате, до 1 часа по email
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;