import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Heart,
  Truck,
  ChefHat,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-orange-500" />, value: "50,000+", label: "Довольных клиентов" },
    { icon: <ChefHat className="w-8 h-8 text-orange-500" />, value: "200+", label: "Ресторанов-партнеров" },
    { icon: <Truck className="w-8 h-8 text-orange-500" />, value: "1,000+", label: "Заказов в день" },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: "5", label: "Лет на рынке" }
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Забота о клиентах",
      description: "Мы всегда ставим интересы наших клиентов на первое место"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Качество и безопасность",
      description: "Строгий контроль качества продуктов и соблюдение санитарных норм"
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Скорость доставки",
      description: "Быстрая доставка свежих блюд в любую точку города"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Команда профессионалов",
      description: "Опытные повара и курьеры для лучшего сервиса"
    }
  ];

  const team = [
    {
      name: "Алексей Иванов",
      position: "Основатель и CEO",
      image: "👨‍💼",
      description: "15 лет опыта в ресторанном бизнесе"
    },
    {
      name: "Мария Петрова",
      position: "Директор по развитию",
      image: "👩‍💼",
      description: "Эксперт в области логистики и доставки"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Шеф-повар",
      image: "👨‍🍳",
      description: "Мастер кулинарного искусства с международным опытом"
    },
    {
      name: "Елена Козлова",
      position: "Менеджер по качеству",
      image: "👩‍🔬",
      description: "Контроль качества и безопасности продуктов"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ВкусДоставка — это больше чем просто сервис доставки еды. 
            Мы создаем мост между лучшими ресторанами города и вашим домом.
          </p>
        </div>

        {/* История компании */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  В 2019 году мы начали с простой идеи — сделать качественную еду 
                  доступной для каждого, не выходя из дома. Начав с 5 ресторанов-партнеров 
                  и одного района доставки, мы постепенно расширялись.
                </p>
                <p>
                  Сегодня ВкусДоставка объединяет более 200 ресторанов и кафе, 
                  обслуживает весь город и выполняет более 1000 заказов ежедневно. 
                  Но главное — мы не забываем о том, что начинали: качество, скорость и забота о клиентах.
                </p>
                <p>
                  Наша миссия — сделать так, чтобы каждый мог насладиться любимыми блюдами 
                  в комфорте своего дома, получив при этом сервис высочайшего уровня.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏢</div>
              <p className="text-gray-600">Наш офис в центре Москвы</p>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.position}</Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Партнерство */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Станьте нашим партнером</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к нашей сети ресторанов-партнеров и увеличьте свои продажи 
              с помощью нашей платформы доставки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Стать партнером
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </section>

        {/* Контактная информация */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Адрес офиса</h3>
                <p className="text-gray-600">Москва, ул. Тверская, д. 15</p>
                <p className="text-gray-600">БЦ "Центральный", офис 501</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
                <p className="text-gray-600">Доставка: 24/7</p>
                <p className="text-gray-600">Офис: Пн-Пт 9:00-18:00</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">support@vkusdelivery.ru</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;