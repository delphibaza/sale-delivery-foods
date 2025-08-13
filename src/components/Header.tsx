import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Phone, 
  MapPin,
  Clock
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Меню', href: '/menu' },
    { name: 'Рестораны', href: '/restaurants' },
    { name: 'Акции', href: '/promotions' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Верхняя полоса с контактами */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Работаем 24/7</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>Доставка по всей Москве</span>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <span className="text-xl font-bold">🍕</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">ВкусДоставка</h1>
              <p className="text-sm text-gray-600">Быстро и вкусно</p>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                  location.pathname === item.href ? 'text-orange-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Кнопки действий */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Корзина
                <Badge className="absolute -top-2 -right-2 bg-orange-500">3</Badge>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Профиль
              </Button>
            </Link>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-orange-500 font-medium py-2 px-4 rounded transition-colors ${
                    location.pathname === item.href ? 'text-orange-500 bg-orange-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;