import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Award,
  Coffee,
  Car,
  GraduationCap,
  Shield
} from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Курьер на автомобиле",
      department: "Доставка",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 80,000₽",
      experience: "Опыт не требуется",
      description: "Ищем ответственных курьеров для доставки заказов на личном автомобиле",
      requirements: [
        "Личный автомобиль",
        "Водительские права категории B",
        "Опыт вождения от 1 года",
        "Знание города",
        "Ответственность и пунктуальность"
      ],
      benefits: [
        "Гибкий график",
        "Еженедельные выплаты",
        "Компенсация ГСМ",
        "Страховка"
      ],
      urgent: true
    },
    {
      id: 2,
      title: "Менеджер по работе с ресторанами",
      department: "Развитие бизнеса",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 120,000₽",
      experience: "От 2 лет",
      description: "Развитие партнерской сети ресторанов и поддержка существующих партнеров",
      requirements: [
        "Опыт продаж от 2 лет",
        "Знание рынка общепита",
        "Навыки переговоров",
        "Высшее образование",
        "Коммуникабельность"
      ],
      benefits: [
        "Официальное трудоустройство",
        "Бонусная система",
        "Обучение и развитие",
        "ДМС"
      ],
      urgent: false
    },
    {
      id: 3,
      title: "Frontend разработчик",
      department: "IT",
      location: "Москва / Удаленно",
      type: "Полная занятость",
      salary: "от 200,000₽",
      experience: "От 3 лет",
      description: "Разработка и поддержка веб-приложений для клиентов и партнеров",
      requirements: [
        "React, TypeScript",
        "Опыт с REST API",
        "Знание современных инструментов",
        "Понимание UX/UI принципов",
        "Английский язык"
      ],
      benefits: [
        "Удаленная работа",
        "Гибкий график",
        "Современное оборудование",
        "Обучение за счет компании"
      ],
      urgent: false
    },
    {
      id: 4,
      title: "Специалист службы поддержки",
      department: "Клиентский сервис",
      location: "Москва",
      type: "Полная занятость / Частичная",
      salary: "от 60,000₽",
      experience: "Опыт не требуется",
      description: "Консультирование клиентов по телефону и в чате, решение вопросов",
      requirements: [
        "Грамотная речь",
        "Стрессоустойчивость",
        "Желание помогать людям",
        "Базовые компьютерные навыки",
        "Обучаемость"
      ],
      benefits: [
        "Обучение с нуля",
        "Дружный коллектив",
        "Карьерный рост",
        "Социальный пакет"
      ],
      urgent: true
    },
    {
      id: 5,
      title: "Маркетолог",
      department: "Маркетинг",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 100,000₽",
      experience: "От 2 лет",
      description: "Планирование и реализация маркетинговых кампаний, анализ эффективности",
      requirements: [
        "Опыт в digital-маркетинге",
        "Знание аналитических систем",
        "Креативность",
        "Аналитическое мышление",
        "Высшее образование"
      ],
      benefits: [
        "Творческие задачи",
        "Профессиональное развитие",
        "Современные инструменты",
        "Результативная команда"
      ],
      urgent: false
    },
    {
      id: 6,
      title: "Повар-универсал",
      department: "Кулинария",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 90,000₽",
      experience: "От 1 года",
      description: "Приготовление блюд в нашей собственной кухне, контроль качества",
      requirements: [
        "Опыт работы поваром",
        "Знание технологий приготовления",
        "Соблюдение санитарных норм",
        "Ответственность",
        "Физическая выносливость"
      ],
      benefits: [
        "Стабильная зарплата",
        "Питание за счет компании",
        "Обучение новым техникам",
        "Премии за качество"
      ],
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Конкурентная зарплата",
      description: "Достойная оплата труда и регулярные повышения"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Карьерный рост",
      description: "Возможности для профессионального развития"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Социальный пакет",
      description: "ДМС, отпуск, больничные и другие льготы"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      title: "Обучение",
      description: "Тренинги, курсы и развитие навыков"
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: "Комфортный офис",
      description: "Современное рабочее место и дружная атмосфера"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Work-life balance",
      description: "Гибкий график и забота о сотрудниках"
    }
  ];

  const departments = [
    { name: "Доставка", positions: 15, icon: <Car className="w-6 h-6" /> },
    { name: "IT", positions: 8, icon: <Briefcase className="w-6 h-6" /> },
    { name: "Клиентский сервис", positions: 12, icon: <Users className="w-6 h-6" /> },
    { name: "Маркетинг", positions: 5, icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Кулинария", positions: 10, icon: <Coffee className="w-6 h-6" /> },
    { name: "Управление", positions: 6, icon: <Award className="w-6 h-6" /> }
  ];

  const companyValues = [
    {
      title: "Качество превыше всего",
      description: "Мы стремимся к совершенству во всем, что делаем"
    },
    {
      title: "Команда - наша сила",
      description: "Вместе мы достигаем больших результатов"
    },
    {
      title: "Инновации и развитие",
      description: "Мы всегда ищем новые способы улучшить сервис"
    },
    {
      title: "Забота о клиентах",
      description: "Клиент - в центре всех наших решений"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Карьера в ВкусДоставка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашей команде и станьте частью успешной истории
          </p>
        </div>

        {/* О компании как работодателе */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Почему ВкусДоставка?</h2>
                  <p className="text-xl mb-6">
                    Мы создаем не просто рабочие места, а возможности для роста и развития. 
                    Наша команда - это семья профессионалов, объединенных общей целью.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">200+</div>
                      <div className="text-sm">Сотрудников</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-sm">Лет на рынке</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm">Довольных сотрудников</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-sm">Городов присутствия</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <p className="text-lg">Растем и развиваемся вместе</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Наши преимущества */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Отделы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши отделы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{dept.name}</h3>
                      <p className="text-gray-600">{dept.positions} открытых позиций</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Посмотреть вакансии
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Открытые вакансии */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{position.title}</h3>
                            {position.urgent && (
                              <Badge className="bg-red-100 text-red-800">Срочно</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {position.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {position.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {position.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {position.salary}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{position.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Требования:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Мы предлагаем:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 lg:w-48">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Откликнуться
                      </Button>
                      <Button variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Процесс найма */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как проходит отбор</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Отклик", description: "Отправьте резюме на интересную вакансию" },
              { step: 2, title: "Звонок HR", description: "Краткое знакомство и уточнение деталей" },
              { step: 3, title: "Собеседование", description: "Встреча с руководителем отдела" },
              { step: 4, title: "Оффер", description: "Обсуждение условий и выход на работу" }
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-500 font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Контакты HR */}
        <section>
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Не нашли подходящую вакансию?</h2>
              <p className="text-gray-600 mb-6">
                Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Отправить резюме
                </Button>
                <Button variant="outline">
                  Связаться с HR
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>HR-отдел: hr@vkusdelivery.ru</p>
                <p>Телефон: +7 (495) 123-45-70</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;