import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Star, Plus, Filter } from 'lucide-react';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'pizza', name: 'Пицца' },
    { id: 'sushi', name: 'Суши' },
    { id: 'burgers', name: 'Бургеры' },
    { id: 'pasta', name: 'Паста' },
    { id: 'salads', name: 'Салаты' },
    { id: 'desserts', name: 'Десерты' },
    { id: 'drinks', name: 'Напитки' }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Маргарита",
      category: "pizza",
      price: 890,
      image: "🍕",
      rating: 4.8,
      description: "Классическая пицца с томатами, моцареллой и базиликом",
      ingredients: ["Тесто", "Томатный соус", "Моцарелла", "Базилик"],
      popular: true
    },
    {
      id: 2,
      name: "Пепперони",
      category: "pizza",
      price: 1190,
      image: "🍕",
      rating: 4.9,
      description: "Острая пицца с пепперони и сыром моцарелла",
      ingredients: ["Тесто", "Томатный соус", "Моцарелла", "Пепперони"],
      popular: true
    },
    {
      id: 3,
      name: "Филадельфия",
      category: "sushi",
      price: 650,
      image: "🍣",
      rating: 4.9,
      description: "Роллы с лососем, сливочным сыром и огурцом",
      ingredients: ["Рис", "Нори", "Лосось", "Сливочный сыр", "Огурец"],
      popular: true
    },
    {
      id: 4,
      name: "Калифорния",
      category: "sushi",
      price: 590,
      image: "🍣",
      rating: 4.7,
      description: "Роллы с крабом, авокадо и огурцом",
      ingredients: ["Рис", "Нори", "Краб", "Авокадо", "Огурец"],
      popular: false
    },
    {
      id: 5,
      name: "Чизбургер",
      category: "burgers",
      price: 450,
      image: "🍔",
      rating: 4.7,
      description: "Сочный бургер с говяжьей котлетой и сыром",
      ingredients: ["Булочка", "Говядина", "Сыр", "Салат", "Томат"],
      popular: true
    },
    {
      id: 6,
      name: "Биг Бургер",
      category: "burgers",
      price: 690,
      image: "🍔",
      rating: 4.8,
      description: "Двойной бургер с двумя котлетами и беконом",
      ingredients: ["Булочка", "Говядина x2", "Бекон", "Сыр", "Салат"],
      popular: false
    },
    {
      id: 7,
      name: "Карбонара",
      category: "pasta",
      price: 520,
      image: "🍝",
      rating: 4.6,
      description: "Паста с беконом, яйцом и сыром пармезан",
      ingredients: ["Спагетти", "Бекон", "Яйцо", "Пармезан", "Сливки"],
      popular: false
    },
    {
      id: 8,
      name: "Цезарь",
      category: "salads",
      price: 390,
      image: "🥗",
      rating: 4.5,
      description: "Классический салат с курицей и соусом цезарь",
      ingredients: ["Салат", "Курица", "Сухарики", "Пармезан", "Соус цезарь"],
      popular: false
    },
    {
      id: 9,
      name: "Тирамису",
      category: "desserts",
      price: 290,
      image: "🍰",
      rating: 4.8,
      description: "Классический итальянский десерт с кофе",
      ingredients: ["Маскарпоне", "Савоярди", "Кофе", "Какао"],
      popular: false
    },
    {
      id: 10,
      name: "Кока-Кола",
      category: "drinks",
      price: 120,
      image: "🥤",
      rating: 4.3,
      description: "Освежающий газированный напиток 0.5л",
      ingredients: ["Газированная вода", "Сахар", "Кофеин"],
      popular: false
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Меню</h1>
          <p className="text-gray-600 text-lg">Выберите любимые блюда из нашего разнообразного меню</p>
        </div>

        {/* Поиск и фильтры */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск блюд..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Популярные блюда */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Популярные блюда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.popular).map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl">{item.image}</div>
                      <Badge className="bg-red-100 text-red-800">Популярное</Badge>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-xl font-bold text-orange-500">{item.price}₽</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Состав:</p>
                      <p className="text-sm text-gray-600">{item.ingredients.join(', ')}</p>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Все блюда */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === 'all' ? 'Все блюда' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({filteredItems.length})</span>
          </h2>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Блюда не найдены</p>
              <p className="text-gray-400">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl">{item.image}</div>
                      {item.popular && (
                        <Badge className="bg-red-100 text-red-800">Популярное</Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-xl font-bold text-orange-500">{item.price}₽</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Состав:</p>
                      <p className="text-sm text-gray-600">{item.ingredients.join(', ')}</p>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить в корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;