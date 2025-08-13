import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">🍕</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ВкусДоставка</h3>
                <p className="text-sm text-gray-400">Быстро и вкусно</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Мы доставляем самую вкусную еду прямо к вашему порогу. 
              Быстро, качественно и с любовью.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-white">Меню</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-white">Рестораны</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white">Акции</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-400 hover:text-white">Оплата</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Отзывы</Link></li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Карьера</Link></li>
              <li><Link to="/franchise" className="text-gray-400 hover:text-white">Франшиза</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Условия использования</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">info@vkusdelivery.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">Москва, ул. Примерная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ВкусДоставка. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;