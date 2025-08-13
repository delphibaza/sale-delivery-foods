import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertCircle, CheckCircle, XCircle, CreditCard, Truck } from 'lucide-react';

const Terms = () => {
  const serviceRules = [
    "Минимальная сумма заказа составляет 500₽",
    "Доставка осуществляется в пределах зон обслуживания",
    "Время доставки указывается приблизительно",
    "Заказы принимаются круглосуточно",
    "Оплата производится наличными, картой или онлайн",
    "Клиент обязан предоставить точный адрес доставки"
  ];

  const orderCancellation = [
    {
      condition: "До передачи в ресторан",
      refund: "100%",
      time: "Обычно в течение 5-10 минут",
      color: "text-green-600"
    },
    {
      condition: "После начала приготовления",
      refund: "50%",
      time: "В течение 3-5 рабочих дней",
      color: "text-yellow-600"
    },
    {
      condition: "После передачи курьеру",
      refund: "0%",
      time: "Возврат не предусмотрен",
      color: "text-red-600"
    }
  ];

  const responsibilities = [
    {
      party: "Компания обязуется",
      items: [
        "Обеспечить качество доставляемых блюд",
        "Соблюдать заявленные сроки доставки",
        "Предоставлять актуальную информацию о блюдах",
        "Обеспечить сохранность заказа при доставке",
        "Предоставлять чеки об оплате"
      ]
    },
    {
      party: "Клиент обязуется",
      items: [
        "Предоставлять достоверную информацию",
        "Быть доступным по указанному телефону",
        "Находиться по адресу доставки в указанное время",
        "Оплатить заказ в соответствии с выбранным способом",
        "Проверить заказ при получении"
      ]
    }
  ];

  const qualityGuarantees = [
    {
      issue: "Неправильный заказ",
      solution: "Бесплатная замена или полный возврат",
      icon: <XCircle className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Холодная еда",
      solution: "Замена блюда или компенсация",
      icon: <AlertCircle className="w-6 h-6 text-orange-500" />
    },
    {
      issue: "Опоздание более 30 минут",
      solution: "Скидка на следующий заказ или возврат доставки",
      icon: <Truck className="w-6 h-6 text-blue-500" />
    },
    {
      issue: "Некачественные продукты",
      solution: "Полный возврат стоимости заказа",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Пользовательское соглашение</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Условия использования сервиса доставки еды ВкусДоставка
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Версия от 15 января 2024 года
          </p>
        </div>

        {/* Общие положения */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-500" />
                Общие положения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Настоящее Пользовательское соглашение (далее — "Соглашение") регулирует 
                  отношения между ООО "ВкусДоставка" (далее — "Компания") и пользователями 
                  сервиса доставки еды (далее — "Клиент", "Пользователь").
                </p>
                <p>
                  Используя веб-сайт, мобильное приложение или услуги Компании, вы соглашаетесь 
                  с условиями данного Соглашения. Если вы не согласны с какими-либо условиями, 
                  пожалуйста, не используйте наши услуги.
                </p>
                <p>
                  Компания оставляет за собой право изменять условия Соглашения в одностороннем 
                  порядке. Актуальная версия всегда доступна на данной странице.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Описание услуг */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Описание услуг</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания предоставляет услуги по доставке готовых блюд от ресторанов-партнеров 
                  через интернет-платформу. Наши услуги включают:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Основные услуги:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Прием и обработка заказов
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Доставка готовых блюд
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Обработка платежей
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Клиентская поддержка
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Дополнительные услуги:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Отслеживание заказов
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Программа лояльности
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Персональные рекомендации
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Корпоративное обслуживание
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Правила пользования */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Правила пользования сервисом</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceRules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Оформление и отмена заказов */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Оформление заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>Для оформления заказа необходимо:</p>
                  <ol className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      Выбрать блюда из меню ресторанов
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      Указать точный адрес доставки
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      Выбрать способ оплаты
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      Подтвердить заказ
                    </li>
                  </ol>
                  <p className="text-sm">
                    После подтверждения заказа вы получите SMS с номером заказа 
                    и ориентировочным временем доставки.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отмена заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderCancellation.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{item.condition}</h4>
                        <span className={`font-bold ${item.color}`}>
                          {item.refund} возврат
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Для отмены заказа свяжитесь со службой поддержки по телефону 
                  +7 (495) 123-45-67 или через чат на сайте.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Оплата */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-green-500" />
                Условия оплаты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Способы оплаты:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Наличными курьеру
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Банковской картой курьеру
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Онлайн на сайте
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Безналичный расчет (для юр. лиц)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Важные условия:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Цены указаны в рублях с учетом НДС</li>
                    <li>• Стоимость доставки рассчитывается отдельно</li>
                    <li>• При оплате онлайн деньги списываются сразу</li>
                    <li>• Чек предоставляется в электронном виде</li>
                    <li>• Возврат средств осуществляется тем же способом</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Права и обязанности */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Права и обязанности сторон</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {responsibilities.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.party}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Гарантии качества */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Гарантии качества</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualityGuarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    {guarantee.icon}
                    <div>
                      <h4 className="font-semibold mb-2">{guarantee.issue}</h4>
                      <p className="text-gray-600 text-sm">{guarantee.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Важно:</strong> О любых проблемах с заказом сообщайте в течение 
                  2 часов после получения. Это поможет нам быстрее решить вопрос и улучшить качество сервиса.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ограничение ответственности */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Ограничение ответственности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания не несет ответственности за:
                </p>
                <ul className="space-y-2">
                  <li>• Задержки доставки, вызванные форс-мажорными обстоятельствами</li>
                  <li>• Качество блюд, приготовленных ресторанами-партнерами</li>
                  <li>• Невозможность связаться с клиентом по указанным контактам</li>
                  <li>• Ущерб, причиненный неправильным указанием адреса доставки</li>
                  <li>• Технические сбои, не зависящие от Компании</li>
                </ul>
                <p>
                  Максимальная ответственность Компании ограничивается стоимостью конкретного заказа.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Персональные данные */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Обработка персональных данных</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Используя наши услуги, вы соглашаетесь на обработку ваших персональных данных 
                  в соответствии с Политикой конфиденциальности.
                </p>
                <p>
                  Мы собираем и обрабатываем только те данные, которые необходимы для 
                  предоставления качественных услуг доставки.
                </p>
                <p>
                  Подробная информация о том, как мы обрабатываем ваши данные, доступна 
                  в разделе "Политика конфиденциальности".
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Разрешение споров */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Разрешение споров</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Все споры и разногласия решаются путем переговоров. Мы стремимся 
                  найти взаимовыгодное решение для всех сторон.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Досудебное урегулирование:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Обращение в службу поддержки</li>
                      <li>• Рассмотрение жалобы в течение 10 дней</li>
                      <li>• Письменный ответ с решением</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Судебное разбирательство:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Подсудность по месту нахождения Компании</li>
                      <li>• Применимое право — РФ</li>
                      <li>• Возмещение судебных расходов</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Заключительные положения */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Заключительные положения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>
                  Настоящее Соглашение вступает в силу с момента начала использования 
                  сервиса и действует до прекращения использования услуг.
                </p>
                <p>
                  Если какое-либо положение Соглашения будет признано недействительным, 
                  остальные положения сохраняют свою силу.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Контакты для связи:</h4>
                    <p>ООО "ВкусДоставка"</p>
                    <p>125009, г. Москва, ул. Тверская, д. 15</p>
                    <p>Email: legal@vkusdelivery.ru</p>
                    <p>Телефон: +7 (495) 123-45-67</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Реквизиты:</h4>
                    <p>ИНН: 7701234567</p>
                    <p>КПП: 770101001</p>
                    <p>ОГРН: 1127746123456</p>
                    <p>Банк: ПАО "Сбербанк"</p>
                  </div>
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

export default Terms;