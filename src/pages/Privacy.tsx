import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, UserCheck, FileText, AlertTriangle } from 'lucide-react';

const Privacy = () => {
  const dataTypes = [
    {
      icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      title: "Персональные данные",
      items: ["ФИО", "Номер телефона", "Email адрес", "Дата рождения"]
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: "Данные заказов",
      items: ["История заказов", "Предпочтения в еде", "Адреса доставки", "Способы оплаты"]
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      title: "Технические данные",
      items: ["IP-адрес", "Данные браузера", "Cookies", "Геолокация"]
    }
  ];

  const purposes = [
    "Обработка и выполнение заказов",
    "Связь с клиентами по вопросам заказов",
    "Улучшение качества сервиса",
    "Персонализация предложений",
    "Маркетинговые коммуникации",
    "Аналитика и статистика",
    "Соблюдение законодательства"
  ];

  const rights = [
    {
      title: "Право на информацию",
      description: "Получение информации о том, какие данные мы собираем и как их используем"
    },
    {
      title: "Право на доступ",
      description: "Запрос копии ваших персональных данных, которые мы обрабатываем"
    },
    {
      title: "Право на исправление",
      description: "Исправление неточных или неполных персональных данных"
    },
    {
      title: "Право на удаление",
      description: "Удаление ваших персональных данных при определенных условиях"
    },
    {
      title: "Право на ограничение",
      description: "Ограничение обработки ваших персональных данных"
    },
    {
      title: "Право на отзыв согласия",
      description: "Отзыв согласия на обработку персональных данных в любое время"
    }
  ];

  const securityMeasures = [
    "SSL-шифрование для передачи данных",
    "Шифрование данных в базах данных",
    "Регулярное резервное копирование",
    "Контроль доступа к данным",
    "Мониторинг безопасности 24/7",
    "Регулярные аудиты безопасности",
    "Обучение сотрудников по защите данных"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Политика конфиденциальности</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Последнее обновление: 15 января 2024 года
          </p>
        </div>

        {/* Введение */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-12 h-12 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Введение</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      ООО "ВкусДоставка" (далее — "Компания", "мы") обязуется защищать 
                      конфиденциальность персональных данных пользователей наших сервисов. 
                      Настоящая Политика конфиденциальности описывает, как мы собираем, 
                      используем, храним и защищаем вашу персональную информацию.
                    </p>
                    <p>
                      Используя наш веб-сайт, мобильное приложение или услуги доставки, 
                      вы соглашаетесь с условиями данной Политики конфиденциальности.
                    </p>
                    <p>
                      Мы соблюдаем требования Федерального закона "О персональных данных" 
                      № 152-ФЗ и других применимых нормативных актов Российской Федерации.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Какие данные мы собираем */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Какие данные мы собираем</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {type.icon}
                    <h3 className="text-lg font-semibold">{type.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Цели обработки */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-orange-500" />
                Цели обработки персональных данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {purposes.map((purpose, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{purpose}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Правовые основания */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Правовые основания обработки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Согласие субъекта персональных данных:</strong> При регистрации 
                  на сайте, оформлении заказа или подписке на рассылку вы даете согласие 
                  на обработку ваших персональных данных.
                </p>
                <p>
                  <strong>Исполнение договора:</strong> Обработка данных необходима для 
                  выполнения договора оказания услуг доставки еды.
                </p>
                <p>
                  <strong>Законные интересы:</strong> Обработка данных для улучшения 
                  качества сервиса, предотвращения мошенничества и обеспечения безопасности.
                </p>
                <p>
                  <strong>Соблюдение правовых обязательств:</strong> Обработка данных 
                  для соблюдения требований налогового и иного законодательства.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ваши права */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Ваши права</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{right.title}</h3>
                  <p className="text-gray-600">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Безопасность данных */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-green-500" />
                Меры безопасности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Мы применяем современные технические и организационные меры для защиты 
                ваших персональных данных от несанкционированного доступа, изменения, 
                раскрытия или уничтожения:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{measure}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Передача данных третьим лицам */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Передача данных третьим лицам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Мы можем передавать ваши персональные данные третьим лицам только 
                  в следующих случаях:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ресторанам-партнерам для выполнения заказов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Курьерским службам для доставки заказов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Платежным системам для обработки платежей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>IT-провайдерам для технической поддержки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Государственным органам по их законным требованиям</span>
                  </li>
                </ul>
                <p>
                  Все третьи лица обязуются соблюдать конфиденциальность и безопасность 
                  переданных им персональных данных.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Использование файлов Cookie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Наш веб-сайт использует файлы cookie для улучшения пользовательского 
                  опыта и функциональности сайта. Cookie — это небольшие текстовые файлы, 
                  которые сохраняются на вашем устройстве.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Необходимые</h4>
                    <p className="text-sm">Обеспечивают базовую функциональность сайта</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Аналитические</h4>
                    <p className="text-sm">Помогают понять, как посетители используют сайт</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Маркетинговые</h4>
                    <p className="text-sm">Используются для персонализации рекламы</p>
                  </div>
                </div>
                <p>
                  Вы можете управлять настройками cookie в своем браузере или отключить 
                  их полностью, однако это может повлиять на функциональность сайта.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Сроки хранения */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Сроки хранения данных</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Мы храним ваши персональные данные только в течение времени, необходимого 
                  для достижения целей их обработки:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Данные аккаунта</h4>
                    <p className="text-sm">До удаления аккаунта или отзыва согласия</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">История заказов</h4>
                    <p className="text-sm">3 года с момента последнего заказа</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Финансовые данные</h4>
                    <p className="text-sm">5 лет в соответствии с налоговым законодательством</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Логи и аналитика</h4>
                    <p className="text-sm">1 год с момента сбора</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Изменения в политике */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Изменения в Политике конфиденциальности</h3>
                  <p className="text-gray-600 mb-4">
                    Мы можем периодически обновлять данную Политику конфиденциальности. 
                    О существенных изменениях мы уведомим вас по электронной почте или 
                    через уведомления на сайте.
                  </p>
                  <p className="text-gray-600">
                    Рекомендуем регулярно просматривать данную страницу для получения 
                    актуальной информации о наших практиках защиты данных.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Контакты */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Если у вас есть вопросы о данной Политике конфиденциальности или 
                  вы хотите воспользоваться своими правами в отношении персональных данных, 
                  обращайтесь к нам:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Почтовый адрес:</h4>
                    <p>ООО "ВкусДоставка"</p>
                    <p>125009, г. Москва, ул. Тверская, д. 15</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Контакты:</h4>
                    <p>Email: privacy@vkusdelivery.ru</p>
                    <p>Телефон: +7 (495) 123-45-67</p>
                  </div>
                </div>
                <p className="text-sm">
                  Мы обязуемся рассмотреть ваше обращение в течение 30 дней с момента получения.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;