import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Gift, 
  Star, 
  Crown, 
  Zap,
  TrendingUp,
  Calendar,
  Users,
  Award,
  Heart,
  Percent
} from 'lucide-react';

const Loyalty = () => {
  const userStats = {
    currentLevel: 'Gold',
    points: 2450,
    nextLevelPoints: 3000,
    totalSpent: 45600,
    ordersCount: 87,
    joinDate: '2023-03-15'
  };

  const levels = [
    {
      name: 'Bronze',
      minPoints: 0,
      color: 'bg-amber-100 text-amber-800',
      icon: <Award className="w-6 h-6 text-amber-600" />,
      benefits: [
        '1 бонус за каждые 10₽',
        'Специальные предложения',
        'Поддержка 24/7'
      ]
    },
    {
      name: 'Silver',
      minPoints: 1000,
      color: 'bg-gray-100 text-gray-800',
      icon: <Star className="w-6 h-6 text-gray-600" />,
      benefits: [
        '1.2 бонуса за каждые 10₽',
        'Приоритетная поддержка',
        'Ранний доступ к акциям',
        'Бесплатная доставка 1 раз в месяц'
      ]
    },
    {
      name: 'Gold',
      minPoints: 2500,
      color: 'bg-yellow-100 text-yellow-800',
      icon: <Crown className="w-6 h-6 text-yellow-600" />,
      benefits: [
        '1.5 бонуса за каждые 10₽',
        'Персональный менеджер',
        'Эксклюзивные предложения',
        'Бесплатная доставка 3 раза в месяц',
        'Скидка 5% в день рождения'
      ],
      current: true
    },
    {
      name: 'Platinum',
      minPoints: 5000,
      color: 'bg-purple-100 text-purple-800',
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      benefits: [
        '2 бонуса за каждые 10₽',
        'VIP поддержка',
        'Закрытые мероприятия',
        'Безлимитная бесплатная доставка',
        'Скидка 10% в день рождения',
        'Приоритет в очереди'
      ]
    }
  ];

  const bonusHistory = [
    {
      date: '2024-01-15',
      type: 'earned',
      amount: 145,
      description: 'Заказ #1234 - Итальянский дворик',
      order: '#1234'
    },
    {
      date: '2024-01-14',
      type: 'spent',
      amount: -200,
      description: 'Оплата бонусами заказа #1233',
      order: '#1233'
    },
    {
      date: '2024-01-12',
      type: 'earned',
      amount: 89,
      description: 'Заказ #1232 - Суши Мастер',
      order: '#1232'
    },
    {
      date: '2024-01-10',
      type: 'bonus',
      amount: 500,
      description: 'Бонус за отзыв о ресторане',
      order: null
    },
    {
      date: '2024-01-08',
      type: 'earned',
      amount: 67,
      description: 'Заказ #1231 - Burger House',
      order: '#1231'
    }
  ];

  const specialOffers = [
    {
      title: 'Двойные бонусы в выходные',
      description: 'Получайте в 2 раза больше бонусов за заказы в субботу и воскресенье',
      validUntil: '2024-02-29',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      active: true
    },
    {
      title: 'Бонус за друга',
      description: 'Пригласите друга и получите 500 бонусов, когда он сделает первый заказ',
      validUntil: '2024-12-31',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      active: true
    },
    {
      title: 'Юбилейный бонус',
      description: 'Специальный бонус 1000 баллов в честь годовщины регистрации',
      validUntil: '2024-03-15',
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      active: false
    }
  ];

  const achievements = [
    {
      title: 'Первый заказ',
      description: 'Сделали свой первый заказ',
      icon: '🎉',
      earned: true,
      date: '2023-03-15'
    },
    {
      title: 'Постоянный клиент',
      description: '10 заказов за месяц',
      icon: '⭐',
      earned: true,
      date: '2023-04-20'
    },
    {
      title: 'Гурман',
      description: 'Заказали из 20 разных ресторанов',
      icon: '🍽️',
      earned: true,
      date: '2023-06-10'
    },
    {
      title: 'Ночной совенок',
      description: '5 заказов после полуночи',
      icon: '🦉',
      earned: false,
      progress: 3
    },
    {
      title: 'Большая компания',
      description: 'Заказ на сумму более 5000₽',
      icon: '🎊',
      earned: false,
      progress: 0
    },
    {
      title: 'Год с нами',
      description: 'Пользуетесь сервисом больше года',
      icon: '🏆',
      earned: true,
      date: '2024-03-15'
    }
  ];

  const progressToNextLevel = ((userStats.points - levels.find(l => l.current)?.minPoints || 0) / 
    (userStats.nextLevelPoints - (levels.find(l => l.current)?.minPoints || 0))) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Зарабатывайте бонусы с каждым заказом и получайте эксклюзивные привилегии
          </p>
        </div>

        {/* Текущий статус */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Crown className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{userStats.currentLevel} статус</h2>
                      <p className="text-xl opacity-90">Добро пожаловать в элитный клуб!</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>До Platinum статуса</span>
                        <span>{userStats.nextLevelPoints - userStats.points} бонусов</span>
                      </div>
                      <Progress value={progressToNextLevel} className="h-3" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{userStats.points}</div>
                        <div className="text-sm opacity-90">Бонусов</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{userStats.ordersCount}</div>
                        <div className="text-sm opacity-90">Заказов</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{userStats.totalSpent.toLocaleString()}₽</div>
                        <div className="text-sm opacity-90">Потрачено</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="text-lg">Ваши достижения</p>
                  <Button className="mt-4 bg-white text-orange-500 hover:bg-gray-100">
                    Посмотреть все
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Уровни программы */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Уровни программы лояльности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                level.current ? 'border-2 border-orange-500' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="flex justify-center mb-3">
                      {level.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                    <Badge className={level.color}>
                      {level.current ? 'Ваш уровень' : `От ${level.minPoints} бонусов`}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* История бонусов */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>История бонусов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bonusHistory.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === 'earned' ? 'bg-green-100' :
                            transaction.type === 'spent' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {transaction.type === 'earned' ? (
                              <TrendingUp className="w-5 h-5 text-green-500" />
                            ) : transaction.type === 'spent' ? (
                              <Gift className="w-5 h-5 text-red-500" />
                            ) : (
                              <Star className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(transaction.date).toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                        </div>
                        <div className={`text-lg font-bold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{userStats.points}</h3>
                  <p className="text-gray-600">Доступно бонусов</p>
                  <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
                    Потратить бонусы
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Как тратить бонусы</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      1 бонус = 1 рубль
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Минимум 100 бонусов
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      До 50% от суммы заказа
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">День рождения</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    В ваш день рождения получайте двойные бонусы и специальную скидку!
                  </p>
                  <Button variant="outline" size="sm">
                    Указать дату рождения
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Специальные предложения */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                !offer.active ? 'opacity-60' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex justify-center">
                      {offer.icon}
                    </div>
                    <Badge className={offer.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {offer.active ? 'Активно' : 'Завершено'}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Действует до: {new Date(offer.validUntil).toLocaleDateString('ru-RU')}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!offer.active}
                    variant={offer.active ? 'default' : 'outline'}
                  >
                    {offer.active ? 'Участвовать' : 'Завершено'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Достижения */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Ваши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                !achievement.earned ? 'opacity-60' : ''
              }`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                  
                  {achievement.earned ? (
                    <div>
                      <Badge className="bg-green-100 text-green-800 mb-2">Получено</Badge>
                      <p className="text-xs text-gray-500">
                        {new Date(achievement.date).toLocaleDateString('ru-RU')}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {achievement.progress || 0}/5
                      </Badge>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{ width: `${((achievement.progress || 0) / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Как заработать больше бонусов */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Как заработать больше бонусов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Оставляйте отзывы</h3>
                  <p className="text-gray-600 text-sm">+50 бонусов за каждый отзыв</p>
                </div>
                
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Приглашайте друзей</h3>
                  <p className="text-gray-600 text-sm">+500 бонусов за каждого друга</p>
                </div>
                
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Заказывайте регулярно</h3>
                  <p className="text-gray-600 text-sm">Бонусы за постоянство</p>
                </div>
                
                <div className="text-center">
                  <Percent className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Участвуйте в акциях</h3>
                  <p className="text-gray-600 text-sm">Двойные и тройные бонусы</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Призыв к действию */}
        <section>
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Начните зарабатывать бонусы прямо сейчас!</h2>
              <p className="text-xl mb-6">
                Сделайте заказ и получите бонусы, которые можно потратить на следующие покупки
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-500 hover:bg-gray-100">
                  Сделать заказ
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-500">
                  Пригласить друга
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Loyalty;