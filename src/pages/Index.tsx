import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Ватный матрас классический",
    category: "mattress",
    price: "от 3 500 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/6a87ae6c-2b00-4ebb-81c5-f2fdcf8140ed.jpg",
    description: "Натуральный ватный наполнитель, экологичный материал"
  },
  {
    id: 2,
    name: "Поролоновый матрас премиум",
    category: "mattress",
    price: "от 4 200 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/6a87ae6c-2b00-4ebb-81c5-f2fdcf8140ed.jpg",
    description: "Высокая плотность, долговечность, ортопедический эффект"
  },
  {
    id: 3,
    name: "Подушка классическая",
    category: "pillow",
    price: "от 650 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/ecbf4936-28b0-448a-af90-37902ddc5642.jpg",
    description: "Мягкая, удобная, гипоаллергенная"
  },
  {
    id: 4,
    name: "Комплект постельного белья",
    category: "bedding",
    price: "от 2 100 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/9ba98623-0270-4d7c-a031-36c4bf4686cf.jpg",
    description: "100% хлопок, яркие цвета, приятная ткань"
  },
  {
    id: 5,
    name: "Одеяло теплое",
    category: "blanket",
    price: "от 1 800 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/9ba98623-0270-4d7c-a031-36c4bf4686cf.jpg",
    description: "Зимнее, мягкое, сохраняет тепло"
  },
  {
    id: 6,
    name: "Подушка ортопедическая",
    category: "pillow",
    price: "от 1 200 ₽",
    image: "https://cdn.poehali.dev/projects/699a06bb-b622-49a1-8099-bed823a7d3c2/files/ecbf4936-28b0-448a-af90-37902ddc5642.jpg",
    description: "Поддержка шеи, здоровый сон"
  }
];

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    text: "Отличные матрасы! Заказывала ватный на дачу, очень довольна качеством. Доставили быстро, привезли прямо на участок.",
    date: "15 октября 2024"
  },
  {
    id: 2,
    name: "Дмитрий Иванов",
    rating: 5,
    text: "Купил поролоновый матрас для гостей. Удобный, плотный, не проседает. Максим помог с выбором размера. Рекомендую!",
    date: "3 ноября 2024"
  },
  {
    id: 3,
    name: "Елена Сидорова",
    rating: 5,
    text: "Заказываю здесь постельное белье уже второй раз. Качество отличное, цены приятные. Доставка по Ростову всегда вовремя.",
    date: "20 ноября 2024"
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Icon name="Bed" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">МатрасМастер</h1>
                <p className="text-xs text-muted-foreground">Работаем с 2017 года</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Каталог
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Доставка
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                О нас
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Контакты
              </button>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section id="home" className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                Работаем с 2017 года
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Качественные матрасы и постельные принадлежности
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ватные и поролоновые матрасы, подушки, одеяла, постельное белье с доставкой по Ростову-на-Дону
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Быстрая доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Доставим по Ростову-на-Дону в удобное для вас время</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Проверенное качество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Более 7 лет опыта, натуральные материалы</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Забота о клиентах</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Индивидуальный подход, помощь в выборе</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Каталог товаров</h2>
              <p className="text-xl text-muted-foreground">Выберите то, что нужно для комфортного сна</p>
            </div>

            <Tabs defaultValue="all" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>Все товары</TabsTrigger>
                <TabsTrigger value="mattress" onClick={() => setSelectedCategory("mattress")}>Матрасы</TabsTrigger>
                <TabsTrigger value="pillow" onClick={() => setSelectedCategory("pillow")}>Подушки</TabsTrigger>
                <TabsTrigger value="blanket" onClick={() => setSelectedCategory("blanket")}>Одеяла</TabsTrigger>
                <TabsTrigger value="bedding" onClick={() => setSelectedCategory("bedding")}>Белье</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button className="gap-2">
                            <Icon name="Phone" size={16} />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Доставка</h2>
                <p className="text-xl text-muted-foreground">Привезем ваш заказ быстро и аккуратно</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="MapPin" size={28} className="text-accent" />
                      <CardTitle>География доставки</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Доставляем по всему Ростову-на-Дону и ближайшим районам
                    </p>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1" />
                      <span>Центральный район</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1" />
                      <span>Северный район</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-1" />
                      <span>Западный район</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Clock" size={28} className="text-primary" />
                      <CardTitle>Условия доставки</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Бесплатная доставка</p>
                        <p className="text-sm text-muted-foreground">При заказе от 5 000 ₽</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Срок доставки</p>
                        <p className="text-sm text-muted-foreground">1-2 дня после заказа</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Удобное время</p>
                        <p className="text-sm text-muted-foreground">Договоримся о времени доставки</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">О нас</h2>
                <p className="text-xl text-muted-foreground">История нашей компании</p>
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6 text-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      Компания <span className="font-semibold text-foreground">МатрасМастер</span> работает на рынке с 2017 года. 
                      Мы специализируемся на производстве и продаже ватных и поролоновых матрасов, а также полного ассортимента 
                      постельных принадлежностей.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Наш склад находится по адресу <span className="font-semibold text-foreground">Текучева 159</span> в Ростове-на-Дону. 
                      Здесь вы можете посмотреть товар вживую, выбрать размер и забрать покупку самостоятельно или заказать доставку.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы гордимся качеством наших изделий и заботимся о каждом клиенте. Используем только натуральные материалы 
                      и проверенные технологии производства.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">7+</div>
                        <p className="text-muted-foreground">лет на рынке</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                        <p className="text-muted-foreground">довольных клиентов</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100%</div>
                        <p className="text-muted-foreground">натуральные материалы</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
                <p className="text-xl text-muted-foreground">Что говорят наши покупатели</p>
              </div>

              <div className="grid gap-6">
                {reviews.map((review, index) => (
                  <Card 
                    key={review.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{review.name}</CardTitle>
                          <CardDescription>{review.date}</CardDescription>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Контакты</h2>
                <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} className="text-accent" />
                      Адрес склада
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg">
                      <span className="font-semibold">Ростов-на-Дону</span><br />
                      ул. Текучева, 159
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Navigation" size={16} />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Phone" size={24} className="text-primary" />
                      Связь
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Телефон / WhatsApp</p>
                      <p className="text-lg font-semibold">+7 (XXX) XXX-XX-XX</p>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 gap-2">
                        <Icon name="Phone" size={16} />
                        Позвонить
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2">
                        <Icon name="MessageCircle" size={16} />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Остались вопросы?</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Свяжитесь с нами, и мы поможем выбрать идеальный матрас для вашего дома!
                  </p>
                  <Button size="lg" variant="secondary" className="gap-2">
                    <Icon name="Phone" size={20} />
                    Связаться с Максимом
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Bed" size={32} />
              <h3 className="text-2xl font-bold">МатрасМастер</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Качественные матрасы и постельные принадлежности с 2017 года
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary-foreground/80 transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary-foreground/80 transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary-foreground/80 transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary-foreground/80 transition-colors">
                Контакты
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
              © 2024 МатрасМастер. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
