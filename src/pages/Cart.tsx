import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, MapPin } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Маргарита",
      price: 890,
      quantity: 2,
      image: "🍕",
      restaurant: "Итальянский дворик"
    },
    {
      id: 2,
      name: "Филадельфия",
      price: 650,
      quantity: 1,
      image: "🍣",
      restaurant: "Суши Мастер"
    },
    {
      id: 3,
      name: "Чизбургер",
      price: 450,
      quantity: 1,
      image: "🍔",
      restaurant: "Burger House"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 1500 ? 0 : 200;
  const discount = promoCode === 'FIRST20' ? subtotal * 0.2 : 0;
  const total = subtotal + deliveryFee - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">Добавьте блюда из меню, чтобы оформить заказ</p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Перейти к меню
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Товары в корзине */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Ваш заказ ({cartItems.length} товара)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="text-4xl">{item.image}</div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.restaurant}</p>
                        <p className="text-lg font-bold text-orange-500">{item.price}₽</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Адрес доставки */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Адрес доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Введите адрес доставки"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
                <p className="text-sm text-gray-600 mt-2">
                  Доставка осуществляется в пределах МКАД
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Итого */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Сумма заказа:</span>
                  <span>{subtotal}₽</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee}₽`}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Скидка:</span>
                    <span>-{discount}₽</span>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате:</span>
                  <span>{total}₽</span>
                </div>

                {/* Промокод */}
                <div className="space-y-2">
                  <Input
                    placeholder="Промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline" className="w-full">
                    Применить промокод
                  </Button>
                  {promoCode === 'FIRST20' && (
                    <p className="text-sm text-green-600">Промокод применен! Скидка 20%</p>
                  )}
                </div>

                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={!deliveryAddress}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Оформить заказ
                </Button>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Время доставки: 30-45 минут</p>
                  <p>• Бесплатная доставка от 1500₽</p>
                  <p>• Оплата наличными или картой</p>
                </div>
              </CardContent>
            </Card>

            {/* Способы оплаты */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" id="cash" defaultChecked />
                    <label htmlFor="cash" className="flex-1">Наличными курьеру</label>
                    <span>💵</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" id="card" />
                    <label htmlFor="card" className="flex-1">Картой курьеру</label>
                    <span>💳</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" id="online" />
                    <label htmlFor="online" className="flex-1">Онлайн оплата</label>
                    <span>📱</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;