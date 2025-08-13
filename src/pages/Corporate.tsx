import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building, 
  Users, 
  Calendar, 
  CreditCard,
  FileText,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Truck,
  Coffee
} from 'lucide-react';

const Corporate = () => {
  const services = [
    {
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
      title: "Корпоративное питание",
      description: "Ежедневные обеды для сотрудников с индивидуальным меню",
      features: [
        "Персональное меню",
        "Фиксированные цены",
        "Ежедневная доставка",
        "Диетические опции"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Кейтеринг мероприятий",
      description: "Организация питания для деловых мероприятий любого масштаба",
      features: [
        "Банкетное меню",
        "Сервировка столов",
        "Профессиональные официанты",
        "Посуда и оборудование"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Корпоративные заказы",
      description: "Заказы для больших команд с удобной системой управления",
      features: [
        "Групповые заказы",
        "Централизованная оплата",
        "Отчетность по заказам",
        "Персональные скидки"
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-purple-500" />,
      title: "Офисные решения",
      description: "Комплексные решения для организации питания в офисе",
      features: [
        "Кофе-поинты",
        "Здоровые перекусы",
        "Фруктовые корзины",
        "Питьевая вода"
      ]
    }
  ];

  const advantages = [
    {
      title: "Экономия времени",
      description: "Сотрудники не тратят время на поиск еды",
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Контроль бюджета",
      description: "Прозрачная отчетность и фиксированные цены",
      icon: <CreditCard className="w-6 h-6 text-green-500" />
    },
    {
      title: "Повышение лояльности",
      description: "Забота о питании сотрудников повышает их лояльность",
      icon: <Star className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Простое управление",
      description: "Удобная система заказов и отчетности",
      icon: <FileText className="w-6 h-6 text-purple-500" />
    }
  ];

  const packages = [
    {
      name: "Стартовый",
      price: "от 15,000₽/мес",
      employees: "До 50 сотрудников",
      features: [
        "Ежедневные обеды",
        "Базовое меню",
        "Онлайн заказы",
        "Месячная отчетность",
        "Email поддержка"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "от 35,000₽/мес",
      employees: "До 200 сотрудников",
      features: [
        "Расширенное меню",
        "Диетические опции",
        "Персональный менеджер",
        "Еженедельная отчетность",
        "Телефонная поддержка",
        "Скидка 10%"
      ],
      popular: true
    },
    {
      name: "Корпоративный",
      price: "от 75,000₽/мес",
      employees: "Более 200 сотрудников",
      features: [
        "Индивидуальное меню",
        "Кейтеринг мероприятий",
        "Выделенный менеджер",
        "Ежедневная отчетность",
        "Приоритетная поддержка",
        "Скидка 15%",
        "Бесплатная доставка"
      ],
      popular: false
    }
  ];

  const clients = [
    {
      name: "ТехноКорп",
      industry: "IT",
      employees: 150,
      feedback: "Отличный сервис! Сотрудники довольны разнообразием меню.",
      logo: "💻"
    },
    {
      name: "БанкИнвест",
      industry: "Финансы",
      employees: 300,
      feedback: "Профессиональный подход к корпоративному питанию.",
      logo: "🏦"
    },
    {
      name: "СтройГрупп",
      industry: "Строительство",
      employees: 80,
      feedback: "Удобная система заказов и качественная еда.",
      logo: "🏗️"
    },
    {
      name: "МедЦентр",
      industry: "Медицина",
      employees: 120,
      feedback: "Здоровое питание для наших сотрудников - это важно.",
      logo: "🏥"
    }
  ];

  const cateringTypes = [
    {
      type: "Деловые завтраки",
      description: "Легкие завтраки для утренних встреч",
      minGuests: 10,
      priceFrom: 500
    },
    {
      type: "Бизнес-ланчи",
      description: "Полноценные обеды для деловых встреч",
      minGuests: 15,
      priceFrom: 800
    },
    {
      type: "Корпоративные банкеты",
      description: "Праздничные мероприятия и торжества",
      minGuests: 30,
      priceFrom: 1200
    },
    {
      type: "Фуршеты",
      description: "Легкие закуски для неформальных мероприятий",
      minGuests: 20,
      priceFrom: 600
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Корпоративным клиентам</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные решения для организации питания в вашей компании
          </p>
        </div>

        {/* Главный баннер */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Питание для вашего бизнеса</h2>
                  <p className="text-xl mb-6">
                    Обеспечьте своих сотрудников качественным питанием. 
                    Повысьте продуктивность и лояльность команды.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm">Компаний-клиентов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50k+</div>
                      <div className="text-sm">Довольных сотрудников</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15%</div>
                      <div className="text-sm">Экономия бюджета</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm">Поддержка</div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-white text-blue-500 hover:bg-gray-100">
                    Получить коммерческое предложение
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-lg">Ваш надежный партнер</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Наши услуги */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {service.icon}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="mt-4 w-full" variant="outline">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества для вашего бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {advantage.icon}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Тарифные планы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                pkg.popular ? 'border-2 border-orange-500' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    {pkg.popular && (
                      <Badge className="bg-orange-500 text-white mb-4">
                        <Star className="w-4 h-4 mr-1" />
                        Популярный
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-orange-500 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.employees}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${
                    pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : ''
                  }`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Кейтеринг */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Кейтеринг мероприятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">{type.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">От:</span>
                      <span className="font-semibold">{type.minGuests} человек</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Цена:</span>
                      <span className="font-semibold text-orange-500">от {type.priceFrom}₽</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши клиенты */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{client.logo}</div>
                  <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                  <Badge variant="outline" className="mb-3">{client.industry}</Badge>
                  <p className="text-sm text-gray-600 mb-3">
                    {client.employees} сотрудников
                  </p>
                  <blockquote className="text-sm text-gray-600 italic">
                    "{client.feedback}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма заявки */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Название компании *</Label>
                    <Input id="company" required />
                  </div>
                  <div>
                    <Label htmlFor="industry">Сфера деятельности</Label>
                    <Input id="industry" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact">Контактное лицо *</Label>
                    <Input id="contact" required />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность</Label>
                    <Input id="position" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="employees">Количество сотрудников</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>До 50 человек</option>
                    <option>50-100 человек</option>
                    <option>100-200 человек</option>
                    <option>Более 200 человек</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="services">Интересующие услуги</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Корпоративное питание</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Кейтеринг</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Офисные решения</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">Мероприятия</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea id="message" rows={4} placeholder="Расскажите о ваших потребностях..." />
                </div>
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Контакты */}
        <section>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-600 mb-6">
                Наши специалисты помогут подобрать оптимальное решение для вашей компании
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Phone className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold">Корпоративный отдел</p>
                  <p className="text-orange-500">+7 (495) 123-45-69</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-500">corporate@vkusdelivery.ru</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Персональный менеджер</p>
                  <p className="text-green-500">Для каждого клиента</p>
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

export default Corporate;