import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'Белый куб',
      category: 'Жилая архитектура',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/c679081d-002d-41a1-8ee3-4e4ae34ddb2c/files/9013e6ae-4c45-4715-a55f-17acce859e2b.jpg'
    },
    {
      id: 2,
      title: 'Дом у озера',
      category: 'Частное строительство',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/c679081d-002d-41a1-8ee3-4e4ae34ddb2c/files/b483d2ac-5215-4331-8c05-e642c57807c4.jpg'
    },
    {
      id: 3,
      title: 'Бизнес-центр',
      category: 'Коммерческая недвижимость',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/c679081d-002d-41a1-8ee3-4e4ae34ddb2c/files/b434f0d2-a2a1-4a28-8acf-7550cc559fd2.jpg'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-wider">АРХИТЕКТУРНОЕ БЮРО</h1>
          
          <nav className="hidden md:flex gap-12">
            {[
              { id: 'projects', label: 'Проекты' },
              { id: 'philosophy', label: 'Философия' },
              { id: 'method', label: 'Метод' },
              { id: 'about', label: 'О бюро' },
              { id: 'contacts', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section id="projects" className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              Создаём пространства,<br />которые вдохновляют
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Современная архитектура на стыке функциональности и эстетики
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-12">Философия</h2>
            <p className="text-xl font-light leading-relaxed mb-8">
              Мы верим, что архитектура — это диалог между человеком и пространством. 
              Каждый проект начинается с глубокого понимания контекста: ландшафта, 
              культуры, потребностей людей.
            </p>
            <p className="text-xl font-light leading-relaxed text-muted-foreground">
              Наша цель — создавать здания, которые не просто существуют в среде, 
              но обогащают её, становясь органичной частью окружающего мира.
            </p>
          </div>
        </div>
      </section>

      <section id="method" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-20 text-center">Метод работы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Lightbulb" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Исследование</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Глубокий анализ участка, климата, окружения и потребностей заказчика
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Pencil" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Проектирование</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Разработка концепции с использованием передовых технологий и материалов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Settings" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Реализация</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Сопровождение строительства от первого чертежа до финального штриха
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-12">О бюро</h2>
            <div className="space-y-8 text-xl font-light leading-relaxed">
              <p>
                Архитектурное бюро было основано в 2015 году группой архитекторов, 
                объединённых общим видением современной архитектуры.
              </p>
              <p className="text-muted-foreground">
                За годы работы мы реализовали более 50 проектов — от частных домов 
                до крупных общественных зданий. Наши работы отмечены национальными 
                и международными премиями в области архитектуры и дизайна.
              </p>
              <p className="text-muted-foreground">
                Команда бюро состоит из 15 профессионалов: архитекторов, дизайнеров, 
                инженеров и визуализаторов, работающих над каждым проектом как единое целое.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-12">Контакты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6">Адрес</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Москва, Кутузовский проспект, 32<br />
                  Бизнес-центр «Новь», 12 этаж
                </p>
                
                <h3 className="text-2xl font-light mb-6">Телефон</h3>
                <p className="text-muted-foreground font-light mb-8">
                  +7 (495) 123-45-67
                </p>
                
                <h3 className="text-2xl font-light mb-6">Email</h3>
                <p className="text-muted-foreground font-light">
                  info@arch-bureau.ru
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-6">Напишите нам</h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-primary outline-none transition-colors bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-primary outline-none transition-colors bg-transparent"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-primary outline-none transition-colors resize-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Архитектурное бюро. Все права защищены.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
