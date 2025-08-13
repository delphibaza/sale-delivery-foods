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
  TrendingUp, 
  Users, 
  Award,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Target,
  Zap
} from 'lucide-react';

const Franchise = () => {
  const franchiseStats = [
    { label: "Городов присутствия", value: "15+", icon: <MapPin className="w-6 h-6 text-orange-500" /> },
    { label: "Франчайзи", value: "50+", icon: <Building className="w-6 h-6 text-blue-500" /> },
    { label: "Средняя прибыль", value: "500k₽", icon: <DollarSign className="w-6 h-6 text-green-500" /> },
    { label: "Окупаемость", value: "12 мес", icon: <TrendingUp className="w-6 h-6 text-purple-500" /> }
  ];

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Проверенная бизнес-модель",
      description: "5 лет успешной работы на рынке доставки еды"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Полная поддержка",
      description: "Обучение, маркетинг, операционная поддержка"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Быстрый рост",
      description: "Растущий рынок с высоким потенциалом"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Эксклюзивная территория",
      description: "Защищенная территория без конкуренции"
    }
  ];

  const investmentPackages = [
    {
      name: "Стартовый",
      investment: "1,500,000₽",
      territory: "До 100,000 жителей",
      features: [
        "Базовая IT-платформа",
        "Обучение 2 недели",
        "Маркетинговые материалы",
        "Поддержка 6 месяцев"
      ],
      popular: false
    },
    {
      name: "Стандартный",
      investment: "2,500,000₽",
      territory: "До 300,000 жителей",
      features: [
        "Полная IT-платформа",
        "Обучение 1 месяц",
        "Рекламная кампания запуска",
        "Поддержка 12 месяцев",
        "Мобильное приложение"
      ],
      popular: true
    },
    {
      name: "Премиум",
      investment: "4,000,000₽",
      territory: "Крупные города",
      features: [
        "Расширенная IT-платформа",
        "Персональное обучение",
        "Полный маркетинговый пакет",
        "Постоянная поддержка",
        "Собственная кухня",
        "Приоритетная поддержка"
      ],
      popular: false
    }
  ];

  const supportServices = [
    {
      title: "IT-поддержка",
      description: "Готовая платформа, мобильные приложения, система управления",
      icon: "💻"
    },
    {
      title: "Маркетинг",
      description: "Брендбук, рекламные материалы, digital-маркетинг",
      icon: "📈"
    },
    {
      title: "Обучение",
      description: "Полное обучение персонала и управлению бизнесом",
      icon: "🎓"
    },
    {
      title: "Операционная поддержка",
      description: "Помощь в запуске, оптимизации процессов, решении проблем",
      icon: "🛠️"
    },
    {
      title: "Логистика",
      description: "Система управления доставкой, оптимизация маршрутов",
      icon: "🚚"
    },
    {
      title: "Финансы",
      description: "Финансовая отчетность, планирование, анализ эффективности",
      icon: "💰"
    }
  ];

  const requirements = [
    "Инвестиции от 1,5 млн рублей",
    "Опыт в бизнесе или управлении",
    "Готовность к активному участию",
    "Соответствие стандартам бренда",
    "Наличие подходящего помещения",
    "Команда от 10 человек"
  ];

  const steps = [
    {
      step: 1,
      title: "Заявка",
      description: "Заполните форму или свяжитесь с нами"
    },
    {
      step: 2,
      title: "Встреча",
      description: "Презентация проекта и обсуждение деталей"
    },
    {
      step: 3,
      title: "Анализ",
      description: "Изучение рынка и выбор территории"
    },
    {
      step: 4,
      title: "Договор",
      description: "Подписание франчайзингового соглашения"
    },
    {
      step: 5,
      title: "Запуск",
      description: "Обучение, подготовка и открытие"
    }
  ];

  const successStories = [
    {
      name: "Алексей Петров",
      city: "Казань",
      period: "2 года работы",
      result: "Окупился за 10 месяцев",
      quote: "Отличная поддержка франчайзера. Все процессы отлажены, остается только работать."
    },
    {
      name: "Мария Сидорова",
      city: "Екатеринбург",
      period: "1.5 года работы",
      result: "Прибыль 600k в месяц",
      quote: "Благодаря готовой IT-платформе смогли быстро выйти на рынок и занять лидирующие позиции."
    },
    {
      name: "Дмитрий Козлов",
      city: "Нижний Новгород",
      period: "3 года работы",
      result: "Открыл 2-ю точку",
      quote: "Начинал с одного города, теперь развиваю сеть. Планирую еще 2 города в следующем году."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Франшиза ВкусДоставка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Станьте частью успешной сети доставки еды. Готовый бизнес с проверенной моделью
          </p>
        </div>

        {/* Главный баннер */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Откройте свой бизнес доставки</h2>
                  <p className="text-xl mb-6">
                    Получите готовое решение для запуска прибыльного бизнеса 
                    в сфере доставки еды с полной поддержкой франчайзера
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold">12 мес</div>
                      <div className="text-sm">Окупаемость</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">25%</div>
                      <div className="text-sm">Рентабельность</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm">Партнеров</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-sm">Городов</div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-white text-orange-500 hover:bg-gray-100">
                    Получить презентацию
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-lg">Ваш успешный бизнес</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Статистика */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {franchiseStats.map((stat, index) => (
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

        {/* Преимущества */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нашу франшизу</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {advantage.icon}
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Пакеты инвестиций */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Инвестиционные пакеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPackages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${pkg.popular ? 'border-2 border-orange-500' : ''}`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    {pkg.popular && (
                      <Badge className="bg-orange-500 text-white mb-4">
                        <Star className="w-4 h-4 mr-1" />
                        Популярный
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-orange-500 mb-2">{pkg.investment}</div>
                    <p className="text-gray-600">{pkg.territory}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Поддержка */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Что входит в поддержку</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Требования */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Требования к партнеру</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Этапы сотрудничества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.step} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-500 font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Истории успеха */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Истории успеха наших партнеров</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-lg">{story.name}</h3>
                    <p className="text-gray-600">{story.city}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-center">
                    <Badge variant="outline">{story.period}</Badge>
                    <div className="text-green-600 font-semibold">{story.result}</div>
                  </div>
                  
                  <blockquote className="text-gray-600 text-sm italic text-center">
                    "{story.quote}"
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
              <CardTitle className="text-center">Стать франчайзи</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div>
                  <Label htmlFor="city">Город для открытия</Label>
                  <Input id="city" />
                </div>
                
                <div>
                  <Label htmlFor="investment">Размер инвестиций</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>До 2 млн рублей</option>
                    <option>2-4 млн рублей</option>
                    <option>Более 4 млн рублей</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="experience">Опыт в бизнесе</Label>
                  <Textarea id="experience" rows={3} placeholder="Расскажите о своем опыте..." />
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
              <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нашим отделом развития франшизы
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Phone className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-semibold">Телефон</p>
                  <p className="text-orange-500">+7 (495) 123-45-71</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-500">franchise@vkusdelivery.ru</p>
                </div>
                <div>
                  <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Telegram</p>
                  <p className="text-green-500">@vkus_franchise</p>
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

export default Franchise;