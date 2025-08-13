import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Building,
  Users
} from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Телефон",
      items: [
        { label: "Служба поддержки", value: "+7 (495) 123-45-67" },
        { label: "Для ресторанов", value: "+7 (495) 123-45-68" },
        { label: "Корпоративные клиенты", value: "+7 (495) 123-45-69" }
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email",
      items: [
        { label: "Общие вопросы", value: "info@vkusdelivery.ru" },
        { label: "Поддержка", value: "support@vkusdelivery.ru" },
        { label: "Партнерство", value: "partners@vkusdelivery.ru" }
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Адрес",
      items: [
        { label: "Главный офис", value: "Москва, ул. Тверская, д. 15" },
        { label: "Индекс", value: "125009" },
        { label: "Метро", value: "Тверская, Пушкинская" }
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Режим работы",
      items: [
        { label: "Доставка", value: "Круглосуточно" },
        { label: "Поддержка", value: "24/7" },
        { label: "Офис", value: "Пн-Пт: 9:00-18:00" }
      ]
    }
  ];

  const departments = [
    {
      name: "Служба поддержки клиентов",
      description: "Помощь с заказами, вопросы по доставке",
      phone: "+7 (495) 123-45-67",
      email: "support@vkusdelivery.ru",
      hours: "24/7"
    },
    {
      name: "Отдел партнерства",
      description: "Сотрудничество с ресторанами",
      phone: "+7 (495) 123-45-68",
      email: "partners@vkusdelivery.ru",
      hours: "Пн-Пт: 10:00-19:00"
    },
    {
      name: "Корпоративные продажи",
      description: "Обслуживание офисов и мероприятий",
      phone: "+7 (495) 123-45-69",
      email: "corporate@vkusdelivery.ru",
      hours: "Пн-Пт: 9:00-18:00"
    },
    {
      name: "Пресс-служба",
      description: "Вопросы СМИ и PR",
      phone: "+7 (495) 123-45-70",
      email: "press@vkusdelivery.ru",
      hours: "Пн-Пт: 10:00-17:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </div>

        {/* Основные контакты */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {contact.icon}
                    <h3 className="text-lg font-semibold">{contact.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {contact.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма обратной связи и карта */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Тема обращения</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Карта и адрес */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Наш офис</h3>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Интерактивная карта</p>
                      <p className="text-sm">Москва, ул. Тверская, д. 15</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-orange-500" />
                      БЦ "Центральный", 5 этаж, офис 501
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      5 минут от метро Тверская
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      Пн-Пт: 9:00-18:00
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Экстренная связь</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Проблемы с заказом</p>
                      <p className="text-red-600">+7 (495) 123-45-67</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Техническая поддержка</p>
                      <p className="text-blue-600">support@vkusdelivery.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Отделы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши отделы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {dept.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {dept.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          {dept.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ быстрые ответы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Частые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Как отследить заказ?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Используйте номер заказа в разделе "Отслеживание" или в личном кабинете.
                </p>
                <Button variant="outline" size="sm">Отследить заказ</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Проблемы с оплатой?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Обратитесь в службу поддержки по телефону или через чат.
                </p>
                <Button variant="outline" size="sm">Связаться</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Стать партнером?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Заполните заявку на сотрудничество или позвоните нам.
                </p>
                <Button variant="outline" size="sm">Подать заявку</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Социальные сети */}
        <section>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Следите за нами в социальных сетях</h2>
            <p className="mb-6">Новости, акции и специальные предложения</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="bg-white text-orange-500 hover:bg-gray-100">
                📘 Facebook
              </Button>
              <Button variant="outline" className="bg-white text-orange-500 hover:bg-gray-100">
                📷 Instagram
              </Button>
              <Button variant="outline" className="bg-white text-orange-500 hover:bg-gray-100">
                🐦 Twitter
              </Button>
              <Button variant="outline" className="bg-white text-orange-500 hover:bg-gray-100">
                📺 YouTube
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;