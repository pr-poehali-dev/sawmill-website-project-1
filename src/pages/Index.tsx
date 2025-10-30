import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: 'Обрезная доска',
      sizes: ['25x100', '25x150', '40x150', '50x150'],
      icon: 'Layers'
    },
    {
      title: 'Брус',
      sizes: ['100x100', '150x150', '200x200', '150x200'],
      icon: 'Box'
    },
    {
      title: 'Необрезная доска',
      sizes: ['25мм', '40мм', '50мм'],
      icon: 'Package'
    }
  ];

  const equipment = [
    {
      name: 'Ленточная пилорама',
      description: 'Высокоточная распиловка брёвен диаметром до 80 см'
    },
    {
      name: 'Дисковая пилорама',
      description: 'Быстрая обработка больших объёмов'
    },
    {
      name: 'Сушильная камера',
      description: 'Сушка пиломатериалов до нужной влажности'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TreePine" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ПилоПром</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
              <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Качественная<br />
                <span className="text-primary">распиловка леса</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Производство досок и бруса любых размеров. Работаем с 2010 года.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/190bf36e-a3f1-4407-a737-71e369743995/files/bf0faa0f-ec8a-4177-ab0f-f50d59f954c0.jpg"
                alt="Пилорама"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">Доступные размеры:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.sizes.map((size, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/190bf36e-a3f1-4407-a737-71e369743995/files/2444e9c6-103e-4d37-9625-dd5ef30f9e5b.jpg"
                alt="Оборудование"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Современное оборудование</h2>
              <p className="text-lg text-muted-foreground">
                Мы используем передовые технологии для точной и качественной обработки древесины
              </p>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Доставка</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="Truck" size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
                  <p className="text-muted-foreground">По городу и области в течение 1-2 дней</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="MapPin" size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Любой адрес</h3>
                  <p className="text-muted-foreground">Доставим материал точно по указанному адресу</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name="PackageCheck" size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Разгрузка</h3>
                  <p className="text-muted-foreground">Помощь в разгрузке силами наших рабочих</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О нас</h2>
              <p className="text-lg text-muted-foreground">
                Наша пилорама работает с 2010 года. За это время мы обработали тысячи кубометров древесины 
                и заслужили доверие строительных компаний и частных клиентов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">лет опыта</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">производство</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">качество</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/190bf36e-a3f1-4407-a737-71e369743995/files/879b4791-518a-4fb8-a22d-ca7d1a224c84.jpg"
                alt="Наша продукция"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Связаться с нами</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш заказ..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <span className="text-lg">info@piloprom.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <span className="text-lg">г. Москва, ул. Промышленная, 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 ПилоПром. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
