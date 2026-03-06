export type Language = 'en' | 'ru';

export const translations = {
    en: {
        seo: {
            title: 'Moonlight Media Dubai | Elite Video Production Company',
            description: "Moonlight Media — Dubai's award-winning video production house. 200+ projects, 50M+ views. From concept to final cut in 72 hours. Transparent pricing from AED 5,000. Trusted by EXPO CITY, EMAAR & NAKHEEL."
        },
        nav: {
            services: 'SERVICES',
            work: 'WORK',
            pricing: 'PRICING',
            contact: 'CONTACT',
            bookNow: 'BOOK NOW'
        },
        hero: {
            subtitle: "Dubai's Award-Winning Production House",
            titleLine1: 'YOUR VISION.',
            titleLine2: 'DELIVERED IN 72 HOURS.',
            cta: 'START YOUR PROJECT',
            watchShowreel: 'Watch Showreel',
            modal: {
                titlePart1: 'START YOUR ',
                titlePart2: 'PROJECT',
                projectType: 'Project Type',
                types: ['Commercial / Ads', 'Social Media', 'Real Estate', 'Event Coverage', 'Music / Art Production', 'Podcast / Show', 'Live Stream'],
                name: 'Your Name',
                namePlaceholder: 'John Doe',
                email: 'Email Address',
                emailPlaceholder: 'john@company.com',
                budget: 'Budget',
                budgetDefault: 'Select a range',
                budgetRanges: [
                    'AED 5,000 - 15,000',
                    'AED 15,000 - 30,000',
                    'AED 30,000+'
                ],
                submit: 'Send Request'
            }
        },
        stats: {
            hrs: { label: 'Hour Average Turnaround', value: '72' },
            projects: { label: 'Projects Delivered', value: '200+' },
            views: { label: 'Organic Views Generated', value: '50M+' },
            returnRate: { label: 'Client Return Rate', value: '97%' }
        },
        logos: {
            trustedBy: "Trusted by Dubai's Biggest Brands"
        },
        services: {
            subtitle: 'End-to-End Production',
            title: 'WHAT WE DO',
            desc: 'From brief to final cut in 72 hours. Every service includes 4K delivery, color grading, and unlimited revisions.',
            items: [
                {
                    badge: 'Social Dominance',
                    title: 'Reels Production',
                    desc: 'Monthly content plans averaging 2.3M views per campaign. Vertical-first for Instagram, TikTok & YouTube Shorts.'
                },
                {
                    badge: 'Elite Team',
                    title: 'Full Event Coverage',
                    desc: '3-6 camera setups for forums, galas, and corporate events. Same-day highlight reels available.'
                },
                {
                    title: 'Brand Content',
                    desc: 'Product shoots optimized for conversions. Our clients report 3× higher engagement vs. stock content.'
                },
                {
                    title: 'Real Estate Media',
                    desc: 'Drone + walkthrough tours for luxury properties. One client closed a sale in 48 hours from our tour.'
                },
                {
                    title: 'Show Production',
                    desc: 'YouTube-ready episodes and podcast filming. Multi-cam setups with pro audio in our Dubai studio.'
                },
                {
                    title: 'Multicam Live Stream',
                    desc: 'Real-time multi-camera streaming for corporate events and product launches. Zero latency, global reach.'
                },
                {
                    title: 'Music Clips & Art',
                    desc: 'Cinematic music videos and art films. From storyboard to color grade — one team, zero handoffs.'
                }
            ]
        },
        process: {
            subtitle: 'Surgical Execution',
            title: 'HOW IT WORKS',
            items: [
                { title: 'Brief', desc: 'Share your vision, timeline, and budget. We respond within 2 hours with a tailored plan.' },
                { title: 'Shoot', desc: 'Our crew arrives fully equipped. Multi-cam, drone, lighting — everything handled.' },
                { title: 'Edit', desc: 'Professional editing, color grading, sound design. First draft in 48-72 hours.' },
                { title: 'Deliver', desc: '4K master file + social media cuts + raw footage. Unlimited revisions until you\'re happy.' }
            ]
        },
        portfolio: {
            subtitle: 'Visual Dominance',
            title: 'PORTFOLIO',
            items: [
                { badge: 'LUXURY REAL ESTATE', title: 'PALM JUMEIRAH VILLA TOUR' },
                { badge: 'FORUMS', title: 'GLOBAL TECH SUMMIT' },
                { badge: 'COMMERCIAL', title: 'SUPERCARS EMIRATES' },
                { badge: 'MUSIC & ART', title: 'DUBAI NIGHTS VISUALS' }
            ]
        },
        pricing: {
            title: 'PRICE BREAKDOWN',
            guaranteeTitle: 'No Bureaucracy. Just Results.',
            guaranteeDesc: "100% Satisfaction Guarantee — Unlimited revisions until you're happy. No hidden fees, ever.",
            startingFrom: 'Starting from',
            perMonth: '/MO',
            currency: 'AED',
            tiers: [
                {
                    title: 'ESSENTIAL',
                    desc: 'Perfect for single high-impact promotional videos and social content.',
                    price: '5,000',
                    features: ['Half-day shoot (4 hrs)', '1x Master Edit (60s)', 'Premium Color Grading'],
                    cta: 'GET STARTED'
                },
                {
                    badge: 'MOST REQUESTED',
                    title: 'PREMIUM',
                    desc: 'Comprehensive production for corporate campaigns and commercial launches.',
                    price: '12,000',
                    features: ['Full-day shoot (8 hrs)', '1x Main + 3x Social Cuts', '4K Drone Cinema Capture', 'Pro Sound Design'],
                    cta: 'CHOOSE PREMIUM'
                },
                {
                    title: 'RETAINER',
                    desc: 'Monthly ongoing content creation. We become your dedicated media house.',
                    price: '25,000',
                    features: ['Multiple Shoot Days/Month', 'Daily Content Deliverables', 'VIP Priority Editing'],
                    cta: 'PARTNER WITH US'
                }
            ]
        },
        testimonials: {
            subtitle: 'Testimonials',
            title: 'CLIENT STORIES',
            rating: '5.0 GOOGLE RATING',
            items: [
                { quote: "Moonlight transformed our brand identity. The quality of the property tour they produced resulted in a direct sale within 48 hours. Absolute elite service in Dubai.", name: "Alexey Romanov", role: "Founder, Prime Estates" },
                { quote: "The fastest turnaround I've ever seen. We needed a recap for our forum in 5 hours, and they delivered a masterpiece. They don't just film; they understand business.", name: "Elena Petrova", role: "CEO, Visionary Hub" },
                { quote: "Working with Moonlight is a game-changer for my social presence. 10M+ views on our first campaign together. Their 'no bureaucracy' approach is exactly what I need.", name: "Maxim Sokolov", role: "Lifestyle Entrepreneur" }
            ]
        },
        faq: {
            subtitle: 'Direct Answers',
            title: 'COMMON QUESTIONS',
            items: [
                { q: 'How fast is your turnaround?', a: 'First draft within 48-72 hours for most projects. Same-day highlight reels available for events. Rush delivery can be arranged for an additional fee.' },
                { q: "What's included in each package?", a: 'Every package includes 4K delivery, professional color grading, licensed music, and social media cuts. No hidden costs — the price you see is the price you pay.' },
                { q: 'Do you offer revisions?', a: "Yes — unlimited revisions on all packages until you're 100% satisfied. We don't consider a project done until you do." },
                { q: 'Can I see work similar to my industry?', a: "Absolutely. We've produced for real estate, tech, hospitality, automotive, fashion, and more. Tell us your industry and we'll share relevant case studies." },
                { q: 'How do I book a shoot?', a: 'Fill out the form below or message us on WhatsApp. We respond within 2 hours during business hours and can schedule shoots within 24-48 hours.' },
                { q: 'Do you work outside Dubai?', a: 'Yes. We cover all UAE emirates and have produced in Saudi Arabia, Qatar, Bahrain, and Europe. Travel fees are quoted upfront with no surprises.' }
            ]
        },
        contact: {
            titleLine1: "LET'S BUILD",
            titleLine2: "SOMETHING GREAT.",
            desc: "Join 200+ brands who chose Moonlight. From quick social content to full-scale commercial campaigns — we're ready when you are.",
            directLine: 'Direct Line',
            globalHq: 'Global HQ',
            hqAddress: 'DUBAI MEDIA CITY, BLDG 10',
            responseTime: 'Response Time',
            timeLimit: 'UNDER 2 HOURS',
            projectsCompleted: '200+ Projects Completed',
            form: {
                nameLabel: 'Your Name',
                namePlaceholder: 'Enter name',
                phoneLabel: 'WhatsApp / Phone',
                phonePlaceholder: '+971...',
                typeLabel: 'Project Type',
                types: ['Commercial / Ads', 'Social Media', 'Real Estate', 'Event Coverage', 'Music / Art Production', 'Podcast / Show', 'Live Stream'],
                briefLabel: 'Tell Us About Your Project',
                briefPlaceholder: 'What do you need produced? Any deadline or budget in mind?',
                submit: 'GET YOUR FREE QUOTE',
                note: "No commitment — we'll respond within 2 hours"
            }
        },
        footer: {
            desc: "Dubai's award-winning production house. From concept to final cut — we don't miss deadlines. Your vision, delivered in 72 hours.",
            emailPlaceholder: 'Enter your email...',
            columns: [
                { title: 'Services', links: ['Reels Production', 'Event Coverage', 'Corporate Films', 'Brand Content'] },
                { title: 'Company', links: ['Our Work', 'Pricing', 'Process', 'Contact'] },
                { title: 'Connect', links: ['Instagram', 'Vimeo', 'LinkedIn', 'WhatsApp'] }
            ],
            rights: '© {year} MOONLIGHT MEDIA DUBAI. ALL RIGHTS RESERVED.',
            status: 'Available for Projects'
        }
    },
    ru: {
        seo: {
            title: 'Moonlight Media Dubai | Элитный Видеопродакшн',
            description: "Moonlight Media — титулованный видеопродакшн в Дубае. 200+ проектов, 50M+ просмотров. От концепции до финала за 72 часа. Прозрачные цены от 5,000 AED. Нам доверяют EXPO CITY, EMAAR и NAKHEEL."
        },
        nav: {
            services: 'УСЛУГИ',
            work: 'РАБОТЫ',
            pricing: 'ЦЕНЫ',
            contact: 'КОНТАКТЫ',
            bookNow: 'ЗАКАЗАТЬ'
        },
        hero: {
            subtitle: "Ведущий продакшн Дубая",
            titleLine1: 'ВАШЕ ВИДЕНИЕ.',
            titleLine2: 'ГОТОВО ЗА 72 ЧАСА.',
            cta: 'НАЧАТЬ ПРОЕКТ',
            watchShowreel: 'Смотреть Шоурил',
            modal: {
                titlePart1: 'НАЧАТЬ ',
                titlePart2: 'ПРОЕКТ',
                projectType: 'Тип проекта',
                types: ['Реклама / Ролик', 'Соцсети', 'Недвижимость', 'Репортажка', 'Музыка / Арт', 'Подкаст / Шоу', 'Прямая Трансляция'],
                name: 'Ваше имя',
                namePlaceholder: 'Иван Иванов',
                email: 'Электронная почта',
                emailPlaceholder: 'ivan@company.com',
                budget: 'Бюджет',
                budgetDefault: 'Выберите диапазон',
                budgetRanges: [
                    'AED 5,000 - 15,000',
                    'AED 15,000 - 30,000',
                    'AED 30,000+'
                ],
                submit: 'Отправить Заявку'
            }
        },
        stats: {
            hrs: { label: 'Часов в Среднем на Проект', value: '72' },
            projects: { label: 'Успешных Проектов', value: '200+' },
            views: { label: 'Органических Просмотров', value: '50M+' },
            returnRate: { label: 'Возврат Клиентов', value: '97%' }
        },
        logos: {
            trustedBy: "Нам доверяют крупнейшие бренды Дубая"
        },
        services: {
            subtitle: 'Продакшн Полного Цикла',
            title: 'ЧТО МЫ ДЕЛАЕМ',
            desc: 'От брифа до финала за 72 часа. Каждая услуга включает 4K исходники, цветокоррекцию и безлимитные правки.',
            items: [
                {
                    badge: 'Доминирование в Соцсетях',
                    title: 'Reels Продакшн',
                    desc: 'Контент-планы на месяц, в среднем 2.3М просмотров за кампанию. Вертикальный формат для Instagram, TikTok и YouTube Shorts.'
                },
                {
                    badge: 'Элитная Команда',
                    title: 'Полное Покрытие Мероприятий',
                    desc: 'Многокамерные съемки (3-6 камер) для форумов, гала-ужинов и корпоративов. Монтаж хайлайт-ролика в тот же день.'
                },
                {
                    title: 'Бренд Контент',
                    desc: 'Продуктовые съемки, нацеленные на конверсию. Клиенты сообщают о повышении вовлеченности в 3 раза по сравнению со стоками.'
                },
                {
                    title: 'Съемка Недвижимости',
                    desc: 'Дроны + туры для элитной недвижимости. Один из клиентов закрыл сделку через 48 часов после публикации нашего ролика.'
                },
                {
                    title: 'Управление Шоу',
                    desc: 'Съемки YouTube-шоу и подкастов под ключ. Многокамерный сетап со студийным звуком в Дубае.'
                },
                {
                    title: 'Многокамерные Трансляции',
                    desc: 'Прямые трансляции в режиме реального времени для конференций и презентаций. Отсутствие задержек, глобальный охват.'
                },
                {
                    title: 'Музыка и Арт',
                    desc: 'Кинематографичные клипы и арт-видео. От раскадровки до цветокоррекции — одна команда без посредников.'
                }
            ]
        },
        process: {
            subtitle: 'Хирургическая Точность',
            title: 'КАК ЭТО РАБОТАЕТ',
            items: [
                { title: 'Бриф', desc: 'Поделитесь видением, сроками и бюджетом. Мы ответим за 2 часа с готовым планом.' },
                { title: 'Съемка', desc: 'Наша команда приезжает полностью укомплектованной: камеры, дрон, свет — всё на нас.' },
                { title: 'Монтаж', desc: 'Профессиональный монтаж, цвет, саунд-дизайн. Первые драфты готовы за 48-72 часа.' },
                { title: 'Готово', desc: '4K мастер-файл + версии для соцсетей + исходники. Безлимитные правки, пока не будете довольны.' }
            ]
        },
        portfolio: {
            subtitle: 'Визуальное Доминирование',
            title: 'ПОРТФОЛИО',
            items: [
                { badge: 'ЭЛИТНАЯ НЕДВИЖИМОСТЬ', title: 'ТУР ПО ВИЛЛЕ НА ПАЛЬМЕ' },
                { badge: 'ФОРУМЫ', title: 'ГЛОБАЛЬНЫЙ ТЕХ-САММИТ' },
                { badge: 'РЕКЛАМА', title: 'СУПЕРКАРЫ ЭМИРАТОВ' },
                { badge: 'МУЗЫКА И АРТ', title: 'ВИЗУАЛ НОЧНОГО ДУБАЯ' }
            ]
        },
        pricing: {
            title: 'СТОИМОСТЬ',
            guaranteeTitle: 'Без Бюрократии. Только Результат.',
            guaranteeDesc: "100% Гарантия качества — Безлимитные правки до полного утверждения. Без скрытых платежей.",
            startingFrom: 'От',
            perMonth: '/МЕС',
            currency: 'AED',
            tiers: [
                {
                    title: 'БАЗОВЫЙ',
                    desc: 'Идеально для разовых мощных промо-роликов и контента в соцсетях.',
                    price: '5,000',
                    features: ['Полсмены съемки (4 ч.)', '1 Главный ролик (60 сек.)', 'Премиум цветокоррекция'],
                    cta: 'НАЧАТЬ'
                },
                {
                    badge: 'САМЫЙ ПОПУЛЯРНЫЙ',
                    title: 'ПРЕМИУМ',
                    desc: 'Комплексный продакшн для корпоративных кампаний и коммерческих запусков.',
                    price: '12,000',
                    features: ['Полная смена (8 ч.)', '1 Главный + 3 Соц. ролики', 'Кинематографичный дрон (4K)', 'Проф. саунд-дизайн'],
                    cta: 'ВЫБРАТЬ ПРЕМИУМ'
                },
                {
                    title: 'РЕТЕЙНЕР',
                    desc: 'Ежемесячное создание контента. Мы становимся вашим личным продакшн-отделом.',
                    price: '25,000',
                    features: ['Несколько съемочных дней в месяц', 'Ежедневная выдача контента', 'Приоритетный VIP монтаж'],
                    cta: 'СТАТЬ ПАРТНЕРАМИ'
                }
            ]
        },
        testimonials: {
            subtitle: 'Отзывы',
            title: 'ИСТОРИИ КЛИЕНТОВ',
            rating: '5.0 ОЦЕНКА GOOGLE',
            items: [
                { quote: "Moonlight преобразили образ нашего бренда. Качество тура по недвижимости привело к прямой продаже за 48 часов. Абсолютно элитный сервис в Дубае.", name: "Алексей Романов", role: "Основатель, Prime Estates" },
                { quote: "Самая быстрая отдача, которую я когда-либо видела. Нам нужен был отчетный ролик с форума через 5 часов, и они сделали шедевр. Они не просто снимают; они понимают бизнес.", name: "Елена Петрова", role: "CEO, Visionary Hub" },
                { quote: "Работа с Moonlight кардинально изменила наше присутствие в сетях. 10M+ просмотров на первой кампании. Их подход «без бюрократии» — то, что нужно.", name: "Максим Соколов", role: "Лайфстайл Предприниматель" }
            ]
        },
        faq: {
            subtitle: 'Прямые Ответы',
            title: 'ЧАСТЫЕ ВОПРОСЫ',
            items: [
                { q: 'Как быстро вы всё делаете?', a: 'Первый драфт готов за 48-72 часа для большинства проектов. Для мероприятий возможны хайлайты день-в-день. Срочные заказы обсуждаются отдельно.' },
                { q: "Что входит в пакеты?", a: 'В каждый пакет уже включена отдача в 4K, проф. цветокоррекция, лицензионная музыка и вырезки для соцсетей. То, что вы видите, то и платите.' },
                { q: 'А правки платные?', a: "Нет — количество правок не ограничено, пока вы не будете полностью довольны. Мы не считаем проект закрытым, пока клиент не скажет «Вау»." },
                { q: 'А вы работали с нашей нишей?', a: "Да. Мы снимали недвижимость, технологии, отели, авто, моду и многое другое. Скажите вашу индустрию, и мы пришлем кейсы." },
                { q: 'Как заказать съёмку?', a: 'Заполните форму ниже или напишите нам в WhatsApp. Мы отвечаем за 2 часа в рабочее время и можем выйти на съемки уже через 24-48 часов.' },
                { q: 'Вы работаете за пределами Дубая?', a: 'Да. Мы снимаем по всем ОАЭ, а также в Саудовской Аравии, Катаре, Бахрейне и Европе. Командировочные расходы обсуждаются заранее.' }
            ]
        },
        contact: {
            titleLine1: "ДАВАЙТЕ СОЗДАДИМ",
            titleLine2: "ЧТО-ТО\nВЕЛИКОЕ.",
            desc: "Присоединяйтесь к 200+ брендам, выбравшим Moonlight. От быстрых видео для соцсетей до полномасштабной коммерции — мы готовы.",
            directLine: 'Прямая Линия',
            globalHq: 'Глобальный Офис',
            hqAddress: 'DUBAI MEDIA CITY, ЗДАНИЕ 10',
            responseTime: 'Время Ответа',
            timeLimit: 'МЕНЕЕ 2 ЧАСОВ',
            projectsCompleted: '200+ Проектов Завершено',
            form: {
                nameLabel: 'Ваше имя',
                namePlaceholder: 'Иван Иванов',
                phoneLabel: 'WhatsApp / Телефон',
                phonePlaceholder: '+971...',
                typeLabel: 'Тип проекта',
                types: ['Реклама / Ролик', 'Соцсети', 'Недвижимость', 'Репортажка', 'Музыка / Арт', 'Подкаст / Шоу', 'Прямая Трансляция'],
                briefLabel: 'Расскажите о проекте',
                briefPlaceholder: 'Что необходимо снять? Есть ли дедлайн или примерный бюджет?',
                submit: 'ПОЛУЧИТЬ РАСЧЕТ',
                note: "Без обязательств — мы ответим в течение 2 часов"
            }
        },
        footer: {
            desc: "Ведущий продакшн Дубая. От идеи до финала — мы не срываем сроки. Ваше видение, готово за 72 часа.",
            emailPlaceholder: 'Ваш email...',
            columns: [
                { title: 'Услуги', links: ['Reels Продакшн', 'Съемка Мероприятий', 'Корпоративные Видео', 'Бренд Контент'] },
                { title: 'Компания', links: ['Наши Работы', 'Цены', 'Процесс', 'Контакты'] },
                { title: 'Связь', links: ['Instagram', 'Vimeo', 'LinkedIn', 'WhatsApp'] }
            ],
            rights: '© {year} MOONLIGHT MEDIA DUBAI. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
            status: 'Открыты к проектам'
        }
    }
};
