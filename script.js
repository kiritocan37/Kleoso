function showPage(n){
  var next=document.getElementById('page-'+n);
  if(!next)return;
  var current=document.querySelector('.page.active');
  if(current===next){
    window.scrollTo({top:0,behavior:'smooth'});
    if(window.refreshReveals)window.refreshReveals();
    return;
  }
  if(current){
    current.classList.add('page-exit');
    setTimeout(function(){
      current.classList.remove('active','page-exit');
      next.classList.add('active','page-enter');
      window.scrollTo({top:0,behavior:'smooth'});
      syncActiveNav(n);
      if(window.refreshReveals)window.refreshReveals();
      requestAnimationFrame(function(){next.classList.remove('page-enter')});
    },220);
  }else{
    next.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
    syncActiveNav(n);
    if(window.refreshReveals)window.refreshReveals();
  }
}
function syncActiveNav(page){
  document.querySelectorAll('.nav-center a[data-page]').forEach(function(a){a.classList.remove('active-link');});
  var target=document.querySelector('.nav-center a[data-page="'+page+'"]');
  if(target)target.classList.add('active-link');
}
function toggleFaq(el){el.classList.toggle('open')}
function toggleMenu(){
  var menu=document.getElementById('mobileMenu');
  var burger=document.getElementById('burgerBtn');
  if(!menu)return;
  var open=!menu.classList.contains('open');
  menu.classList.toggle('open',open);
  menu.hidden=!open;
  if(burger){
    burger.setAttribute('aria-expanded',open?'true':'false');
    burger.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
  }
}
function closeMenu(){
  var menu=document.getElementById('mobileMenu');
  var burger=document.getElementById('burgerBtn');
  if(!menu)return;
  menu.classList.remove('open');
  menu.hidden=true;
  if(burger){
    burger.setAttribute('aria-expanded','false');
    burger.setAttribute('aria-label','Open navigation menu');
  }
}
function handleSubmit(e){
  e.preventDefault();
  var form=e.target;
  var data=new FormData(form);
  fetch('https://formspree.io/f/mpqogjpo',{method:'POST',headers:{'Accept':'application/json'},body:data})
  .then(function(r){
    if(r.ok){showPage('success');form.reset();}
    else{alert('Something went wrong. Please try again.');}
  })
  .catch(function(){alert('Something went wrong. Please try again.');});
}

var i18n={
  en:{
    nav_services:'Services',nav_how:'How it works',nav_portfolio:'Portfolio',nav_reviews:'Reviews',nav_soon:'Soon',nav_contact:'Contact',
    hero_tag:'Marketing Agency &mdash; Based in Poland, moving to Georgia soon',
    hero_subtag:'Based in Poland &mdash; working remote with clients worldwide, moving to Georgia soon',
    hero_title:'We build<br><em>brands</em><br>that matter',
    hero_desc:'Kleoso is a studio led by Danylo, based in Poland and moving to Georgia soon. We focus on web and design, helping businesses launch a clear and modern digital presence.',
    hero_cta:'Start a project',scroll_hint:'Scroll to explore',
    s1_num:'Services',s1_title:'What we do',
    srv1_name:'Web Design',srv1_desc:'Fast, modern websites that convert visitors into clients. From landing pages to full multi-page sites.',
    srv2_name:'Branding',srv2_desc:'Logo, identity, tone of voice. We shape how your brand looks, feels, and sounds.',
    srv3_name:'Strategy',srv3_desc:'Market research, competitor analysis, positioning and a clear growth roadmap.',
    srv4_name:'Paid Ads',srv4_desc:'Google, Meta, TikTok ads. Data-driven campaigns that bring real customers.',
    pr1_label:'Principle 01',pr1_text:'Direct communication, no middle layers',
    pr2_label:'Principle 02',pr2_text:'Fixed scope, no surprises',
    pr3_label:'Principle 03',pr3_text:'Weekly progress updates',
    s2_num:'Why Kleoso',s2_title:'Why us',
    why1_label:'Local insight',why1_text:'We study your niche, audience and local context before launching anything.',
    why2_label:'Multilingual',why2_text:'English, Russian, Georgian, Ukrainian and Polish &mdash; every client in their language.',
    why3_label:'Practical focus',why3_text:'Clear priorities, testing and steady improvements over empty promises.',
    why4_label:'Flexible support',why4_text:'From strategy to execution, we support the scope your project actually needs.',
    cta_title:'Let&#39;s build<br>your <span>Kleoso</span>',cta_btn:'Get in touch',
    founder_num:'Founder',founder_title:'Who is behind Kleoso',
    founder_name:'Danylo Sokur',founder_role:'Founder &mdash; Small team, based in Poland',
    founder_desc:'I am building Kleoso as a practical and honest studio. We focus on web and design, move fast, and keep communication simple and transparent.',
    founder_p1:'Direct communication without middle layers',founder_p2:'Clear scope and transparent process',
    founder_p3:'Fast iterations with weekly updates',founder_p4:'Focus on quality over empty promises',
    free_num:'Launch offer',free_title:'First service is free',
    free_spots:'Only 1 spot left in June',
    free_desc:'For first partners, one selected service is free within a starter scope so you can test our process before scaling.',
    free_h1:'Who',free_t1:'New partners who are ready to collaborate and give quick feedback.',
    free_h2:'What',free_t2:'One service: landing draft, design concept, mini-branding set, or audit.',
    free_h3:'How',free_t3:'After the free stage, we send a clear paid roadmap with fixed deliverables.',
    free_btn:'Claim your free first service',
    pricing_num:'Investment',pricing_title:'Friendly pricing',
    pricing_lead:'Since we\'re just starting, our rates are kept low. We\'re building our portfolio together with first partners, so pricing is friendly &mdash; share your project and we\'ll propose a fair scope.',
    pricing_l1:'Web Design',pricing_v1:'Friendly starter rate',
    pricing_l2:'Branding',pricing_v2:'Friendly starter rate',
    pricing_l3:'Strategy',pricing_v3:'Friendly starter rate',
    pricing_l4:'Paid Ads',pricing_v4:'Friendly starter rate',
    pricing_btn:'Request a quote',
    port_num:'Portfolio',port_title:'Selected concepts',
    port_note:'Sample works and concepts from our early practice.',
    port3_tag:'Menu Design',port3_title:'Nevi Restaurant',port3_desc:'Clean, appetising menu concept for a modern Tbilisi restaurant.',
    port4_tag:'Logo Design',port4_title:'Velour Beauty',port4_desc:'Elegant wordmark for a beauty brand focused on refined aesthetics.',
    port5_tag:'Business Card',port5_title:'Stoa Boutique Hotel',port5_desc:'Premium dark business card concept with a luxury visual tone.',
    port6_tag:'Certificate Design',port6_title:'Raze Barbershop',port6_desc:'Gift certificate concept designed for offline and social use.',
    how_num:'Process',how_title:'How we work',
    step1_name:'Discovery Call',step1_desc:'Free 30-min call. We learn your business, goals and budget.',step1_detail:'We ask about your current marketing, customers and pain points.',
    step2_name:'Research &amp; Strategy',step2_desc:'Market analysis and a custom strategy with clear goals.',step2_detail:'Full strategy document built specifically for your business.',
    step3_name:'Proposal &amp; Agreement',step3_desc:'Clear proposal with deliverables, timeline and pricing.',step3_detail:'Transparent contracts. You own everything we produce.',
    step4_name:'Execution',step4_desc:'We build, launch and manage &mdash; ads, websites, branding.',step4_detail:'Regular updates and direct access throughout the project.',
    step5_name:'Report &amp; Optimise',step5_desc:'Monthly reports and continuous optimisation.',step5_detail:'Data drives every next decision we make together.',
    faq_title:'FAQ',
    faq1_q:'How much does it cost?',faq1_a:'For first partners, one service of your choice is free within a starter scope. After that, we prepare a transparent custom offer with clear deliverables and no hidden fees. Since we\'re just starting, rates are friendly.',
    faq2_q:'How long to see results?',faq2_a:'Paid ads &mdash; first week. Website &mdash; 2-4 weeks. Branding &mdash; 2-3 weeks. Strategy &mdash; 1-2 weeks.',
    faq3_q:'Do you work with small businesses?',faq3_a:'Yes. We work mostly with small teams and local businesses, especially at early stage.',
    faq4_q:'Can you work remotely?',faq4_a:'Yes, 100%. We work with clients across Georgia and internationally.',
    faq5_q:'What languages do you work in?',faq5_a:'English, Russian, Georgian, Ukrainian and Polish &mdash; any of the five, including mixed teams.',
    con_num:'Contact',con_title:'Get in touch',con_heading:'Let&#39;s talk about your project',
    rev_num:'Reviews',rev_title:'Early partners',rev_cta_title:'Looking for first partners',rev_cta_desc:'Reviews will appear here very soon. Right now we are onboarding our first partners and shipping their projects.',rev_cta_btn:'Get your free first service',
    soon_num:'Soon',soon_title:'What is coming next',soon_cta_title:'New case studies and client reviews are coming soon',soon_cta_desc:'We are actively shipping projects and preparing fresh portfolio updates. Stay tuned for new launches from Poland and our move to Georgia.',soon_cta_btn:'Get notified first',
    con_lbl_email:'Email',con_lbl_loc:'Location',con_location:'Poland (moving to Georgia soon)',con_lbl_lang:'Languages',con_lbl_social:'Social media',
    form_name:'Your name',form_email:'Email',form_service:'Service',form_service_ph:'Select a service...',form_msg:'Message',form_send:'Send message &#8599;',
    success_title:'Message sent!',success_desc:'We will get back to you within 24 hours.',success_btn:'Back to home',
    skip_link:'Skip to main content',sticky_cta:'Contact us',
    footer_tagline:'Marketing agency for brands that want clarity, craft, and measurable growth. Based in Poland, moving to Georgia soon.',
    footer_nav_title:'Explore',footer_contact_title:'Get in touch',footer_location:'Poland &mdash; moving to Georgia soon',footer_langs:'EN / RU / GE / UA / PL',
    footer_legal_title:'Privacy &amp; data',
    footer_legal_text:'We only collect data you submit via our contact form. Your information is used to respond to inquiries and is never sold. Processed in accordance with GDPR.',
    footer_privacy_link:'Read full Privacy Policy &#8599;',footer_privacy:'Privacy Policy',footer_email_link:'Email us',
    footer_bottom_copy:'<strong>&copy; 2026 Kleoso Agency.</strong> All rights reserved. Remote-first studio based in Poland.',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Based in Poland, moving to Georgia soon'
  },
  ru:{
    nav_services:'Услуги',nav_how:'Как мы работаем',nav_portfolio:'Портфолио',nav_reviews:'Отзывы',nav_soon:'Скоро',nav_contact:'Контакт',
    hero_tag:'Маркетинговое агентство &mdash; база в Польше, скоро переезд в Грузию',
    hero_subtag:'База в Польше &mdash; работаем удалённо с клиентами по всему миру, скоро переезд в Грузию',
    hero_title:'Создаём<br><em>бренды</em><br>которые важны',
    hero_desc:'Kleoso &mdash; студия под управлением Данило, база в Польше и скоро переезд в Грузию. Мы фокусируемся на веб-дизайне и брендинге, помогая бизнесу запустить чёткое и современное цифровое присутствие.',
    hero_cta:'Начать проект',scroll_hint:'Прокрутите для знакомства',
    s1_num:'Услуги',s1_title:'Что мы делаем',
    srv1_name:'Веб-дизайн',srv1_desc:'Быстрые, современные сайты, которые превращают посетителей в клиентов. От лендингов до многостраничных сайтов.',
    srv2_name:'Брендинг',srv2_desc:'Логотип, айдентика, голос бренда. Мы формируем то, как бренд выглядит, ощущается и звучит.',
    srv3_name:'Стратегия',srv3_desc:'Исследование рынка, анализ конкурентов, позиционирование и чёткий план роста.',
    srv4_name:'Реклама',srv4_desc:'Google, Meta, TikTok Ads. Кампании на основе данных, которые приводят реальных клиентов.',
    pr1_label:'Принцип 01',pr1_text:'Прямая коммуникация, без посредников',
    pr2_label:'Принцип 02',pr2_text:'Чёткие рамки, без сюрпризов',
    pr3_label:'Принцип 03',pr3_text:'Еженедельные отчёты о прогрессе',
    s2_num:'Почему Kleoso',s2_title:'Почему мы',
    why1_label:'Локальное понимание',why1_text:'Мы изучаем вашу нишу, аудиторию и локальный контекст до запуска чего-либо.',
    why2_label:'Многоязычность',why2_text:'Английский, русский, грузинский, украинский и польский &mdash; с каждым клиентом на его языке.',
    why3_label:'Практичный подход',why3_text:'Чёткие приоритеты, тестирование и устойчивые улучшения вместо пустых обещаний.',
    why4_label:'Гибкая поддержка',why4_text:'От стратегии до исполнения &mdash; помогаем в тех рамках, которые нужны проекту.',
    cta_title:'Построим<br>ваш <span>Kleoso</span>',cta_btn:'Связаться',
    founder_num:'Основатель',founder_title:'Кто стоит за Kleoso',
    founder_name:'Данило Сокур',founder_role:'Основатель &mdash; малая команда, база в Польше',
    founder_desc:'Я строю Kleoso как практичную и честную студию. Мы фокусируемся на вебе и дизайне, работаем быстро и держим коммуникацию простой и прозрачной.',
    founder_p1:'Прямая коммуникация без посредников',founder_p2:'Чёткие рамки и прозрачный процесс',
    founder_p3:'Быстрые итерации с еженедельными отчётами',founder_p4:'Качество важнее пустых обещаний',
    free_num:'Стартовое предложение',free_title:'Первая услуга бесплатно',
    free_spots:'Осталось только 1 место в июне',
    free_desc:'Для первых партнёров одна выбранная услуга бесплатна в рамках стартового объёма &mdash; так вы можете протестировать наш процесс до масштабирования.',
    free_h1:'Кто',free_t1:'Новые партнёры, готовые к сотрудничеству и быстрой обратной связи.',
    free_h2:'Что',free_t2:'Одна услуга: черновик лендинга, концепт дизайна, мини-брендинг или аудит.',
    free_h3:'Как',free_t3:'После бесплатного этапа мы отправляем чёткий платный план с фиксированным объёмом.',
    free_btn:'Получить бесплатную услугу',
    pricing_num:'Инвестиция',pricing_title:'Дружественные цены',
    pricing_lead:'Так как мы только стартуем, наши тарифы намеренно низкие. Мы строим портфолио вместе с первыми партнёрами, поэтому цены дружественные &mdash; расскажите о проекте, и мы предложим честный объём.',
    pricing_l1:'Веб-дизайн',pricing_v1:'Стартовый тариф',
    pricing_l2:'Брендинг',pricing_v2:'Стартовый тариф',
    pricing_l3:'Стратегия',pricing_v3:'Стартовый тариф',
    pricing_l4:'Реклама',pricing_v4:'Стартовый тариф',
    pricing_btn:'Запросить расчёт',
    port_num:'Портфолио',port_title:'Избранные концепты',
    port_note:'Примеры работ и концепты из нашей ранней практики.',
    port3_tag:'Дизайн меню',port3_title:'Nevi Restaurant',port3_desc:'Чистый, аппетитный концепт меню для современного ресторана в Тбилиси.',
    port4_tag:'Логотип',port4_title:'Velour Beauty',port4_desc:'Элегантный word-mark для бьюти-бренда с утончённой эстетикой.',
    port5_tag:'Визитка',port5_title:'Stoa Boutique Hotel',port5_desc:'Премиальный тёмный концепт визитки с люксовым визуальным тоном.',
    port6_tag:'Сертификат',port6_title:'Raze Barbershop',port6_desc:'Концепт подарочного сертификата для офлайн и соцсетей.',
    how_num:'Процесс',how_title:'Как мы работаем',
    step1_name:'Первый звонок',step1_desc:'Бесплатные 30 минут. Узнаём ваш бизнес, цели, бюджет.',step1_detail:'Спрашиваем про текущий маркетинг, клиентов и боли.',
    step2_name:'Ресёрч и стратегия',step2_desc:'Анализ рынка и индивидуальная стратегия с чёткими целями.',step2_detail:'Полный документ стратегии под ваш бизнес.',
    step3_name:'Предложение и договор',step3_desc:'Чёткое предложение: объём, сроки, цена.',step3_detail:'Прозрачные договоры. Все результаты работы &mdash; ваши.',
    step4_name:'Исполнение',step4_desc:'Делаем, запускаем, управляем &mdash; реклама, сайты, брендинг.',step4_detail:'Регулярные апдейты и прямой доступ к менеджеру.',
    step5_name:'Отчёт и оптимизация',step5_desc:'Ежемесячные отчёты и постоянная оптимизация.',step5_detail:'Данные двигают каждое следующее решение.',
    faq_title:'FAQ',
    faq1_q:'Сколько это стоит?',faq1_a:'Для первых партнёров одна услуга на ваш выбор бесплатна в рамках стартового объёма. Далее мы готовим прозрачное индивидуальное предложение без скрытых платежей. Так как мы только стартуем &mdash; тарифы дружественные.',
    faq2_q:'Когда будут результаты?',faq2_a:'Реклама &mdash; первая неделя. Сайт &mdash; 2-4 недели. Брендинг &mdash; 2-3 недели. Стратегия &mdash; 1-2 недели.',
    faq3_q:'Работаете ли вы с малым бизнесом?',faq3_a:'Да. В основном работаем с малыми командами и локальным бизнесом, особенно на ранней стадии.',
    faq4_q:'Работаете удалённо?',faq4_a:'Да, на 100%. Работаем с клиентами в Грузии и по всему миру.',
    faq5_q:'На каких языках работаете?',faq5_a:'Английский, русский, грузинский, украинский и польский &mdash; любой из пяти, включая смешанные команды.',
    con_num:'Контакт',con_title:'Свяжитесь с нами',con_heading:'Расскажите о вашем проекте',
    rev_num:'Отзывы',rev_title:'Первые партнёры',rev_cta_title:'Ищем первых партнёров',rev_cta_desc:'Отзывы появятся здесь очень скоро. Сейчас мы подключаем первых партнёров и выпускаем их проекты.',rev_cta_btn:'Получить бесплатную услугу',
    soon_num:'Скоро',soon_title:'Что будет дальше',soon_cta_title:'Новые кейсы и отзывы клиентов скоро появятся',soon_cta_desc:'Мы активно запускаем проекты и готовим свежие обновления портфолио. Следите за новыми релизами из Польши и нашим переездом в Грузию.',soon_cta_btn:'Узнать первым',
    con_lbl_email:'Email',con_lbl_loc:'Локация',con_location:'Польша (скоро переезд в Грузию)',con_lbl_lang:'Языки',con_lbl_social:'Соцсети',
    form_name:'Ваше имя',form_email:'Email',form_service:'Услуга',form_service_ph:'Выберите услугу...',form_msg:'Сообщение',form_send:'Отправить &#8599;',
    success_title:'Сообщение отправлено!',success_desc:'Мы ответим в течение 24 часов.',success_btn:'На главную',
    skip_link:'Перейти к основному содержанию',sticky_cta:'Связаться',
    footer_tagline:'Маркетинговое агентство для брендов, которым нужны ясность, качество и измеримый рост. База в Польше, скоро переезд в Грузию.',
    footer_nav_title:'Разделы',footer_contact_title:'Связаться',footer_location:'Польша &mdash; скоро переезд в Грузию',footer_langs:'EN / RU / GE / UA / PL',
    footer_legal_title:'Конфиденциальность',
    footer_legal_text:'Мы собираем только данные, которые вы отправляете через форму. Информация используется для ответа на запросы и никогда не продаётся. Обработка в соответствии с GDPR.',
    footer_privacy_link:'Полная политика конфиденциальности &#8599;',footer_privacy:'Политика конфиденциальности',footer_email_link:'Написать нам',
    footer_bottom_copy:'<strong>&copy; 2026 Kleoso Agency.</strong> Все права защищены. Удалённая студия, база в Польше.',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; База в Польше, скоро переезд в Грузию'
  },
  ge:{
    nav_services:'სერვისები',nav_how:'როგორ ვმუშაობთ',nav_portfolio:'პორტფოლიო',nav_reviews:'შეფასებები',nav_soon:'მალე',nav_contact:'კონტაქტი',
    hero_tag:'მარკეტინგული სააგენტო &mdash; ბაზა პოლონეთში, მალე გადმოსვლა საქართველოში',
    hero_subtag:'ბაზა პოლონეთში &mdash; დისტანციური მუშაობა მსოფლიოს კლიენტებთან, მალე გადმოსვლა საქართველოში',
    hero_title:'ვქმნით<br><em>ბრენდებს</em><br>რომლებიც მნიშვნელოვანია',
    hero_desc:'Kleoso არის სტუდია დანილოს ხელმძღვანელობით, ბაზა პოლონეთში და მალე გადმოსვლა საქართველოში. ჩვენ ვფოკუსირდებით ვებ-დიზაინსა და ბრენდინგზე, ვეხმარებით ბიზნესებს გაუშვან მკაფიო და თანამედროვე ციფრული არსებობა.',
    hero_cta:'პროექტის დაწყება',scroll_hint:'დაასქროლე',
    s1_num:'სერვისები',s1_title:'რას ვაკეთებთ',
    srv1_name:'ვებ-დიზაინი',srv1_desc:'სწრაფი, თანამედროვე საიტები, რომლებიც სტუმრებს კლიენტებად აქცევენ. ლენდინგიდან მრავალგვერდიან საიტებამდე.',
    srv2_name:'ბრენდინგი',srv2_desc:'ლოგო, იდენტიკა, ხმის ტონი. ჩვენ ვაყალიბებთ იმას, როგორ გამოიყურება, იგრძნობა და ჟღერს თქვენი ბრენდი.',
    srv3_name:'სტრატეგია',srv3_desc:'ბაზრის კვლევა, კონკურენტების ანალიზი, პოზიციონირება და ზრდის მკაფიო გეგმა.',
    srv4_name:'რეკლამა',srv4_desc:'Google, Meta, TikTok Ads. მონაცემებზე დაფუძნებული კამპანიები, რომლებიც რეალურ კლიენტებს მოიყვანენ.',
    pr1_label:'პრინციპი 01',pr1_text:'პირდაპირი კომუნიკაცია, შუამავლების გარეშე',
    pr2_label:'პრინციპი 02',pr2_text:'მკაფიო ფარგლები, სიურპრიზების გარეშე',
    pr3_label:'პრინციპი 03',pr3_text:'ყოველკვირეული პროგრესის განახლებები',
    s2_num:'რატომ Kleoso',s2_title:'რატომ ჩვენ',
    why1_label:'ლოკალური გაგება',why1_text:'ვსწავლობთ თქვენს ნიშას, აუდიტორიას და ლოკალურ კონტექსტს ნებისმიერი გაშვების წინ.',
    why2_label:'მრავალენოვნება',why2_text:'ინგლისური, რუსული, ქართული, უკრაინული და პოლონური &mdash; თითოეული კლიენტი მის ენაზე.',
    why3_label:'პრაქტიკული ფოკუსი',why3_text:'მკაფიო პრიორიტეტები, ტესტირება და სტაბილური გაუმჯობესებები ცარიელი დაპირებების ნაცვლად.',
    why4_label:'მოქნილი მხარდაჭერა',why4_text:'სტრატეგიიდან შესრულებამდე &mdash; ვუჭერთ მხარს ზუსტად იმ ფარგლებში, რაც პროექტს სჭირდება.',
    cta_title:'ავაშენოთ<br>თქვენი <span>Kleoso</span>',cta_btn:'დაკავშირება',
    founder_num:'დამფუძნებელი',founder_title:'ვინ დგას Kleoso-ს უკან',
    founder_name:'დანილო სოკური',founder_role:'დამფუძნებელი &mdash; პატარა გუნდი, ბაზა პოლონეთში',
    founder_desc:'მე ვაშენებ Kleoso-ს როგორც პრაქტიკულ და გულწრფელ სტუდიას. ჩვენ ვფოკუსირდებით ვებსა და დიზაინზე, ვმოქმედებთ სწრაფად და ვინარჩუნებთ მარტივ და გამჭვირვალე კომუნიკაციას.',
    founder_p1:'პირდაპირი კომუნიკაცია შუამავლების გარეშე',founder_p2:'მკაფიო ფარგლები და გამჭვირვალე პროცესი',
    founder_p3:'სწრაფი ციკლები ყოველკვირეული განახლებებით',founder_p4:'ხარისხი ცარიელი დაპირებების ნაცვლად',
    free_num:'სასტარტო შეთავაზება',free_title:'პირველი სერვისი უფასოა',
    free_spots:'ივნისში მხოლოდ 1 ადგილი დარჩა',
    free_desc:'პირველი პარტნიორებისთვის ერთი სერვისი უფასოა სასტარტო ფარგლებში &mdash; ასე შეგიძლიათ შეამოწმოთ ჩვენი პროცესი მასშტაბირებამდე.',
    free_h1:'ვინ',free_t1:'ახალი პარტნიორები, რომლებიც მზად არიან თანამშრომლობისთვის და სწრაფი უკუკავშირისთვის.',
    free_h2:'რა',free_t2:'ერთი სერვისი: ლენდინგის დრაფტი, დიზაინის კონცეპტი, მინი-ბრენდინგი ან აუდიტი.',
    free_h3:'როგორ',free_t3:'უფასო ეტაპის შემდეგ ვგზავნით მკაფიო ფასიან გეგმას ფიქსირებული შედეგებით.',
    free_btn:'მიიღეთ უფასო სერვისი',
    pricing_num:'ინვესტიცია',pricing_title:'მეგობრული ფასები',
    pricing_lead:'რადგან ახლახანს ვიწყებთ, ჩვენი ფასები დაბალია. ვაშენებთ პორტფოლიოს პირველ პარტნიორებთან ერთად, ამიტომ ფასი მეგობრულია &mdash; გაგვიზიარეთ პროექტი და შემოგთავაზებთ სამართლიან ფარგლებს.',
    pricing_l1:'ვებ-დიზაინი',pricing_v1:'სასტარტო ფასი',
    pricing_l2:'ბრენდინგი',pricing_v2:'სასტარტო ფასი',
    pricing_l3:'სტრატეგია',pricing_v3:'სასტარტო ფასი',
    pricing_l4:'რეკლამა',pricing_v4:'სასტარტო ფასი',
    pricing_btn:'ფასის მოთხოვნა',
    port_num:'პორტფოლიო',port_title:'შერჩეული კონცეპტები',
    port_note:'ნიმუშები და კონცეპტები ჩვენი ადრეული პრაქტიკიდან.',
    port3_tag:'მენიუს დიზაინი',port3_title:'Nevi Restaurant',port3_desc:'სუფთა და მომხიბვლელი მენიუს კონცეპტი თანამედროვე თბილისური რესტორნისთვის.',
    port4_tag:'ლოგო',port4_title:'Velour Beauty',port4_desc:'ელეგანტური word-mark სილამაზის ბრენდისთვის დახვეწილი ესთეტიკით.',
    port5_tag:'სავიზიტო ბარათი',port5_title:'Stoa Boutique Hotel',port5_desc:'პრემიუმ მუქი სავიზიტო ბარათის კონცეპტი ლუქსი ვიზუალური ტონით.',
    port6_tag:'სერტიფიკატი',port6_title:'Raze Barbershop',port6_desc:'საჩუქრის სერტიფიკატის კონცეპტი ოფლაინ და სოციალური გამოყენებისთვის.',
    how_num:'პროცესი',how_title:'როგორ ვმუშაობთ',
    step1_name:'გაცნობითი ზარი',step1_desc:'უფასო 30-წუთიანი ზარი. ვიგებთ თქვენს ბიზნესს, მიზნებს, ბიუჯეტს.',step1_detail:'ვეკითხებით მარკეტინგს, კლიენტებსა და ტკივილის წერტილებს.',
    step2_name:'კვლევა და სტრატეგია',step2_desc:'ბაზრის ანალიზი და მორგებული სტრატეგია მკაფიო მიზნებით.',step2_detail:'სრული სტრატეგიის დოკუმენტი სპეციალურად თქვენი ბიზნესისთვის.',
    step3_name:'შეთავაზება და შეთანხმება',step3_desc:'მკაფიო შეთავაზება: შედეგები, ვადები, ფასი.',step3_detail:'გამჭვირვალე ხელშეკრულებები. ყველაფერი რასაც ვქმნით &mdash; თქვენია.',
    step4_name:'შესრულება',step4_desc:'ვაშენებთ, ვრთავთ, ვმართავთ &mdash; რეკლამა, საიტები, ბრენდინგი.',step4_detail:'რეგულარული განახლებები და პირდაპირი წვდომა მთელი პროექტის განმავლობაში.',
    step5_name:'ანგარიში და ოპტიმიზაცია',step5_desc:'ყოველთვიური ანგარიშები და უწყვეტი ოპტიმიზაცია.',step5_detail:'მონაცემები მართავს ყოველ შემდეგ გადაწყვეტილებას.',
    faq_title:'FAQ',
    faq1_q:'რა ღირს?',faq1_a:'პირველი პარტნიორებისთვის ერთი სერვისი უფასოა სასტარტო ფარგლებში. შემდეგ ვამზადებთ გამჭვირვალე ინდივიდუალურ შეთავაზებას დამალული საფასურის გარეშე. რადგან ახლახანს ვიწყებთ &mdash; ფასები მეგობრულია.',
    faq2_q:'როდის იქნება შედეგები?',faq2_a:'რეკლამა &mdash; პირველი კვირა. საიტი &mdash; 2-4 კვირა. ბრენდინგი &mdash; 2-3 კვირა. სტრატეგია &mdash; 1-2 კვირა.',
    faq3_q:'მუშაობთ პატარა ბიზნესებთან?',faq3_a:'დიახ. ძირითადად ვმუშაობთ პატარა გუნდებთან და ლოკალურ ბიზნესებთან, განსაკუთრებით ადრეულ ეტაპზე.',
    faq4_q:'შეგიძლიათ დისტანციურად იმუშაოთ?',faq4_a:'დიახ, 100%. ვმუშაობთ კლიენტებთან საქართველოში და საერთაშორისოდ.',
    faq5_q:'რა ენებზე მუშაობთ?',faq5_a:'ინგლისური, რუსული, ქართული, უკრაინული და პოლონური &mdash; ხუთივედან ნებისმიერი, შერეული გუნდების ჩათვლით.',
    con_num:'კონტაქტი',con_title:'დაკავშირება',con_heading:'მოგვიყევით თქვენი პროექტის შესახებ',
    rev_num:'შეფასებები',rev_title:'პირველი პარტნიორები',rev_cta_title:'ვეძებთ პირველ პარტნიორებს',rev_cta_desc:'შეფასებები აქ ძალიან მალე გამოჩნდება. ახლა პირველ პარტნიორებთან ვიწყებთ მუშაობას და პროექტებს ვუშვებთ.',rev_cta_btn:'მიიღეთ უფასო პირველი სერვისი',
    soon_num:'მალე',soon_title:'რა მოდის შემდეგ',soon_cta_title:'ახალი ქეისები და კლიენტების შეფასებები მალე დაემატება',soon_cta_desc:'აქტიურად ვუშვებთ პროექტებს და ვამზადებთ პორტფოლიოს ახალ განახლებებს. თვალი ადევნეთ ახალ გაშვებებს პოლონეთიდან და ჩვენს გადმოსვლას საქართველოში.',soon_cta_btn:'მიიღე პირველი ინფორმაცია',
    con_lbl_email:'Email',con_lbl_loc:'მდებარეობა',con_location:'პოლონეთი (მალე გადმოსვლა საქართველოში)',con_lbl_lang:'ენები',con_lbl_social:'სოციალური ქსელები',
    form_name:'თქვენი სახელი',form_email:'Email',form_service:'სერვისი',form_service_ph:'აირჩიეთ სერვისი...',form_msg:'შეტყობინება',form_send:'გაგზავნა &#8599;',
    success_title:'შეტყობინება გაიგზავნა!',success_desc:'დაგიკავშირდებით 24 საათში.',success_btn:'მთავარზე დაბრუნება',
    skip_link:'ძირითად შიგთავსზე გადასვლა',sticky_cta:'დაკავშირება',
    footer_tagline:'მარკეტინგული სააგენტო ბრენდებისთვის, რომლებსაც სჭირდებათ გამჭვირვალობა, ხარისხი და ზომვადი ზრდა. ბაზა პოლონეთში, მალე გადმოსვლა საქართველოში.',
    footer_nav_title:'ნავიგაცია',footer_contact_title:'კონტაქტი',footer_location:'პოლონეთი &mdash; მალე გადმოსვლა საქართველოში',footer_langs:'EN / RU / GE / UA / PL',
    footer_legal_title:'კონფიდენციალურობა',
    footer_legal_text:'ჩვენ ვაგროვებთ მხოლოდ იმ მონაცემებს, რაც კონტაქტის ფორმით გვიზიარებთ. ინფორმაცია გამოიყენება პასუხისთვის და არასოდეს იყიდება. დამუშავება GDPR-ის შესაბამისად.',
    footer_privacy_link:'სრული კონფიდენციალურობის პოლიტიკა &#8599;',footer_privacy:'კონფიდენციალურობა',footer_email_link:'მოგვწერეთ',
    footer_bottom_copy:'<strong>&copy; 2026 Kleoso Agency.</strong> ყველა უფლება დაცულია. Remote-first სტუდია, ბაზა პოლონეთში.',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; ბაზა პოლონეთში, მალე გადმოსვლა საქართველოში'
  },
  ua:{
    nav_services:'Послуги',nav_how:'Як ми працюємо',nav_portfolio:'Портфоліо',nav_reviews:'Відгуки',nav_soon:'Скоро',nav_contact:'Контакт',
    hero_tag:'Маркетингова агенція &mdash; базуємось у Польщі, скоро переїжджаємо до Грузії',
    hero_subtag:'База в Польщі &mdash; працюємо віддалено з клієнтами по всьому світу, скоро переїзд до Грузії',
    hero_title:'Створюємо<br><em>бренди</em><br>що мають значення',
    hero_desc:'Kleoso &mdash; студія під керівництвом Данила, база в Польщі та скоро переїзд до Грузії. Ми фокусуємось на веб-дизайні та брендингу, допомагаючи бізнесу запустити чітку й сучасну цифрову присутність.',
    hero_cta:'Розпочати проєкт',scroll_hint:'Прогорніть щоб дізнатись',
    s1_num:'Послуги',s1_title:'Що ми робимо',
    srv1_name:'Веб-дизайн',srv1_desc:'Швидкі, сучасні сайти, що перетворюють відвідувачів на клієнтів. Від лендингів до багатосторінкових сайтів.',
    srv2_name:'Брендинг',srv2_desc:'Логотип, айдентика, голос бренду. Формуємо те, як бренд виглядає, відчувається й звучить.',
    srv3_name:'Стратегія',srv3_desc:'Дослідження ринку, аналіз конкурентів, позиціонування і чіткий план зростання.',
    srv4_name:'Реклама',srv4_desc:'Google, Meta, TikTok Ads. Кампанії на основі даних, що приводять реальних клієнтів.',
    pr1_label:'Принцип 01',pr1_text:'Пряма комунікація, без посередників',
    pr2_label:'Принцип 02',pr2_text:'Чіткі рамки, без сюрпризів',
    pr3_label:'Принцип 03',pr3_text:'Щотижневі звіти про прогрес',
    s2_num:'Чому Kleoso',s2_title:'Чому ми',
    why1_label:'Локальне розуміння',why1_text:'Вивчаємо вашу нішу, аудиторію та локальний контекст до запуску будь-чого.',
    why2_label:'Багатомовність',why2_text:'Англійська, російська, грузинська, українська та польська &mdash; з кожним клієнтом його мовою.',
    why3_label:'Практичний підхід',why3_text:'Чіткі пріоритети, тестування та стабільні покращення замість порожніх обіцянок.',
    why4_label:'Гнучка підтримка',why4_text:'Від стратегії до виконання &mdash; підтримуємо саме в тих рамках, що потрібні проєкту.',
    cta_title:'Побудуємо<br>ваш <span>Kleoso</span>',cta_btn:'Зв\'язатись',
    founder_num:'Засновник',founder_title:'Хто стоїть за Kleoso',
    founder_name:'Данило Сокур',founder_role:'Засновник &mdash; мала команда, база в Польщі',
    founder_desc:'Я будую Kleoso як практичну й чесну студію. Фокусуємось на вебі та дизайні, працюємо швидко й тримаємо комунікацію простою та прозорою.',
    founder_p1:'Пряма комунікація без посередників',founder_p2:'Чіткі рамки та прозорий процес',
    founder_p3:'Швидкі ітерації зі щотижневими звітами',founder_p4:'Якість важливіша за порожні обіцянки',
    free_num:'Стартова пропозиція',free_title:'Перша послуга безкоштовно',
    free_spots:'Лише 1 місце залишилось у червні',
    free_desc:'Для перших партнерів одна обрана послуга безкоштовна в межах стартового обсягу &mdash; так ви можете протестувати наш процес до масштабування.',
    free_h1:'Хто',free_t1:'Нові партнери, готові до співпраці й швидкого зворотного звʼязку.',
    free_h2:'Що',free_t2:'Одна послуга: чернетка лендингу, концепт дизайну, міні-брендинг або аудит.',
    free_h3:'Як',free_t3:'Після безкоштовного етапу надсилаємо чіткий платний план з фіксованим обсягом.',
    free_btn:'Отримати безкоштовну послугу',
    pricing_num:'Інвестиція',pricing_title:'Дружні ціни',
    pricing_lead:'Оскільки ми тільки починаємо, наші тарифи навмисно низькі. Будуємо портфоліо разом з першими партнерами, тому ціни дружні &mdash; розкажіть про проєкт, і запропонуємо чесний обсяг.',
    pricing_l1:'Веб-дизайн',pricing_v1:'Стартовий тариф',
    pricing_l2:'Брендинг',pricing_v2:'Стартовий тариф',
    pricing_l3:'Стратегія',pricing_v3:'Стартовий тариф',
    pricing_l4:'Реклама',pricing_v4:'Стартовий тариф',
    pricing_btn:'Запросити розрахунок',
    port_num:'Портфоліо',port_title:'Вибрані концепти',
    port_note:'Приклади робіт та концепти з нашої ранньої практики.',
    port3_tag:'Дизайн меню',port3_title:'Nevi Restaurant',port3_desc:'Чистий, апетитний концепт меню для сучасного ресторану в Тбілісі.',
    port4_tag:'Логотип',port4_title:'Velour Beauty',port4_desc:'Елегантний word-mark для бʼюті-бренду з витонченою естетикою.',
    port5_tag:'Візитівка',port5_title:'Stoa Boutique Hotel',port5_desc:'Преміальний темний концепт візитівки з люксовим візуальним тоном.',
    port6_tag:'Сертифікат',port6_title:'Raze Barbershop',port6_desc:'Концепт подарункового сертифікату для офлайн та соцмереж.',
    how_num:'Процес',how_title:'Як ми працюємо',
    step1_name:'Знайомчий дзвінок',step1_desc:'Безкоштовні 30 хвилин. Дізнаємось ваш бізнес, цілі, бюджет.',step1_detail:'Питаємо про поточний маркетинг, клієнтів і болі.',
    step2_name:'Дослідження і стратегія',step2_desc:'Аналіз ринку та індивідуальна стратегія з чіткими цілями.',step2_detail:'Повний документ стратегії спеціально під ваш бізнес.',
    step3_name:'Пропозиція і угода',step3_desc:'Чітка пропозиція: обсяг, терміни, ціна.',step3_detail:'Прозорі договори. Все що ми робимо &mdash; ваше.',
    step4_name:'Виконання',step4_desc:'Будуємо, запускаємо, керуємо &mdash; реклама, сайти, брендинг.',step4_detail:'Регулярні апдейти та прямий доступ протягом проєкту.',
    step5_name:'Звіт і оптимізація',step5_desc:'Щомісячні звіти та постійна оптимізація.',step5_detail:'Дані рухають кожне наступне рішення.',
    faq_title:'FAQ',
    faq1_q:'Скільки це коштує?',faq1_a:'Для перших партнерів одна послуга на ваш вибір безкоштовна в межах стартового обсягу. Далі готуємо прозору індивідуальну пропозицію без прихованих платежів. Оскільки ми тільки починаємо &mdash; тарифи дружні.',
    faq2_q:'Коли будуть результати?',faq2_a:'Реклама &mdash; перший тиждень. Сайт &mdash; 2-4 тижні. Брендинг &mdash; 2-3 тижні. Стратегія &mdash; 1-2 тижні.',
    faq3_q:'Чи працюєте з малим бізнесом?',faq3_a:'Так. Переважно працюємо з малими командами та локальним бізнесом, особливо на ранньому етапі.',
    faq4_q:'Чи можете працювати віддалено?',faq4_a:'Так, на 100%. Працюємо з клієнтами в Грузії та по всьому світу.',
    faq5_q:'Якими мовами працюєте?',faq5_a:'Англійська, російська, грузинська, українська та польська &mdash; будь-яка з пʼяти, включно зі змішаними командами.',
    con_num:'Контакт',con_title:'Звʼязатись',con_heading:'Розкажіть про ваш проєкт',
    rev_num:'Відгуки',rev_title:'Перші партнери',rev_cta_title:'Шукаємо перших партнерів',rev_cta_desc:'Відгуки зʼявляться тут зовсім скоро. Зараз ми підключаємо перших партнерів і запускаємо їхні проєкти.',rev_cta_btn:'Отримати безкоштовну першу послугу',
    soon_num:'Скоро',soon_title:'Що далі',soon_cta_title:'Нові кейси та відгуки клієнтів уже скоро',soon_cta_desc:'Ми активно запускаємо проєкти та готуємо нові оновлення портфоліо. Слідкуйте за новими релізами з Польщі та нашим переїздом до Грузії.',soon_cta_btn:'Дізнатись першим',
    con_lbl_email:'Email',con_lbl_loc:'Локація',con_location:'Польща (скоро переїзд до Грузії)',con_lbl_lang:'Мови',con_lbl_social:'Соцмережі',
    form_name:'Ваше імʼя',form_email:'Email',form_service:'Послуга',form_service_ph:'Оберіть послугу...',form_msg:'Повідомлення',form_send:'Надіслати &#8599;',
    success_title:'Повідомлення надіслано!',success_desc:'Відповімо протягом 24 годин.',success_btn:'На головну',
    skip_link:'Перейти до основного вмісту',sticky_cta:'Звʼязатись',
    footer_tagline:'Маркетингова агенція для брендів, яким потрібні ясність, якість і вимірюване зростання. База в Польщі, скоро переїзд до Грузії.',
    footer_nav_title:'Розділи',footer_contact_title:'Контакт',footer_location:'Польща &mdash; скоро переїзд до Грузії',footer_langs:'EN / RU / GE / UA / PL',
    footer_legal_title:'Конфіденційність',
    footer_legal_text:'Ми збираємо лише дані, які ви надсилаєте через форму. Інформація використовується для відповіді на запити і ніколи не продається. Обробка відповідно до GDPR.',
    footer_privacy_link:'Повна політика конфіденційності &#8599;',footer_privacy:'Політика конфіденційності',footer_email_link:'Написати нам',
    footer_bottom_copy:'<strong>&copy; 2026 Kleoso Agency.</strong> Усі права захищені. Remote-first студія, база в Польщі.',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; База в Польщі, скоро переїзд до Грузії'
  },
  pl:{
    nav_services:'Uslugi',nav_how:'Jak pracujemy',nav_portfolio:'Portfolio',nav_reviews:'Opinie',nav_soon:'Wkrotce',nav_contact:'Kontakt',
    hero_tag:'Agencja marketingowa &mdash; z siedziba w Polsce, wkrotce przenosimy sie do Gruzji',
    hero_subtag:'Siedziba w Polsce &mdash; pracujemy zdalnie z klientami na calym swiecie, wkrotce przeprowadzka do Gruzji',
    hero_title:'Budujemy<br><em>marki</em><br>ktore maja znaczenie',
    hero_desc:'Kleoso to studio prowadzone przez Danylo, z siedziba w Polsce. Skupiamy sie na webie i designie, pomagajac firmom budowac nowoczesna i przejrzysta obecnosc cyfrowa.',
    hero_cta:'Rozpocznij projekt',scroll_hint:'Przewin, aby odkryc',
    s1_num:'Uslugi',s1_title:'Co robimy',
    srv1_name:'Web Design',srv1_desc:'Szybkie, nowoczesne strony, ktore zamieniaja odwiedzajacych w klientow. Od landing page po rozbudowane serwisy.',
    srv2_name:'Branding',srv2_desc:'Logo, identyfikacja i ton komunikacji. Nadajemy marce spojny wyglad i charakter.',
    srv3_name:'Strategia',srv3_desc:'Analiza rynku, konkurencji, pozycjonowanie i jasna mapa wzrostu.',
    srv4_name:'Reklamy platne',srv4_desc:'Google, Meta, TikTok Ads. Kampanie oparte na danych, ktore dowoza realnych klientow.',
    pr1_label:'Zasada 01',pr1_text:'Bezposrednia komunikacja, bez posrednikow',
    pr2_label:'Zasada 02',pr2_text:'Jasny zakres, bez niespodzianek',
    pr3_label:'Zasada 03',pr3_text:'Cotygodniowe aktualizacje postepu',
    s2_num:'Dlaczego Kleoso',s2_title:'Dlaczego my',
    why1_label:'Lokalny kontekst',why1_text:'Przed startem poznajemy Twoja nisze, odbiorcow i realia rynku.',
    why2_label:'Wielojezycznosc',why2_text:'Angielski, rosyjski, gruzinski, ukrainski i polski &mdash; pracujemy w jezyku klienta.',
    why3_label:'Praktyczne podejscie',why3_text:'Jasne priorytety, testy i stale ulepszenia zamiast pustych obietnic.',
    why4_label:'Elastyczne wsparcie',why4_text:'Od strategii po realizacje &mdash; wspieramy w takim zakresie, jakiego potrzebuje projekt.',
    cta_title:'Zbudujmy<br>Twoje <span>Kleoso</span>',cta_btn:'Skontaktuj sie',
    founder_num:'Zalozyciel',founder_title:'Kto stoi za Kleoso',
    founder_name:'Danylo Sokur',founder_role:'Zalozyciel &mdash; maly zespol',
    founder_desc:'Buduje Kleoso jako praktyczne i uczciwe studio. Stawiamy na web i design, dzialamy szybko i komunikujemy sie jasno.',
    founder_p1:'Bezposrednia komunikacja bez posrednikow',founder_p2:'Jasny zakres i przejrzysty proces',
    founder_p3:'Szybkie iteracje i cotygodniowe aktualizacje',founder_p4:'Jakosc ponad puste obietnice',
    free_num:'Oferta startowa',free_title:'Pierwsza usluga za darmo',
    free_spots:'Zostal tylko 1 wolny slot w czerwcu',
    free_desc:'Dla pierwszych partnerow jedna wybrana usluga jest darmowa w zakresie startowym, aby przetestowac nasz proces przed skalowaniem.',
    free_h1:'Dla kogo',free_t1:'Nowi partnerzy gotowi do wspolpracy i szybkiego feedbacku.',
    free_h2:'Co',free_t2:'Jedna usluga: szkic landing page, koncept designu, mini-branding albo audyt.',
    free_h3:'Jak',free_t3:'Po darmowym etapie wysylamy jasna, platna mape dzialan z konkretnymi rezultatami.',
    free_btn:'Odbierz darmowa pierwsza usluge',
    pricing_num:'Inwestycja',pricing_title:'Przyjazne ceny',
    pricing_lead:'Dopiero startujemy, dlatego utrzymujemy niskie stawki. Budujemy portfolio razem z pierwszymi partnerami, wiec wycena jest przyjazna &mdash; opisz projekt, a zaproponujemy uczciwy zakres.',
    pricing_l1:'Web Design',pricing_v1:'Przyjazna stawka startowa',
    pricing_l2:'Branding',pricing_v2:'Przyjazna stawka startowa',
    pricing_l3:'Strategia',pricing_v3:'Przyjazna stawka startowa',
    pricing_l4:'Reklamy platne',pricing_v4:'Przyjazna stawka startowa',
    pricing_btn:'Popros o wycene',
    port_num:'Portfolio',port_title:'Wybrane koncepty',
    port_note:'Przykladowe prace i koncepty z naszego wczesnego etapu.',
    port3_tag:'Projekt menu',port3_title:'Nevi Restaurant',port3_desc:'Czysty i apetyczny koncept menu dla nowoczesnej restauracji.',
    port4_tag:'Projekt logo',port4_title:'Velour Beauty',port4_desc:'Elegancki wordmark dla marki beauty o dopracowanej estetyce.',
    port5_tag:'Wizytowka',port5_title:'Stoa Boutique Hotel',port5_desc:'Premium koncept ciemnej wizytowki w luksusowym tonie.',
    port6_tag:'Projekt certyfikatu',port6_title:'Raze Barbershop',port6_desc:'Koncept vouchera prezentowego do uzycia offline i w social media.',
    rev_num:'Opinie',rev_title:'Pierwsi partnerzy',rev_cta_title:'Szukamy pierwszych partnerow',rev_cta_desc:'Opinie pojawia sie tutaj juz wkrotce. Teraz onboardujemy pierwszych partnerow i dowozimy ich projekty.',rev_cta_btn:'Zdobadz darmowa pierwsza usluge',
    soon_num:'Wkrotce',soon_title:'Co nadchodzi',soon_cta_title:'Nowe case studies i opinie klientow juz wkrotce',soon_cta_desc:'Aktywnie realizujemy projekty i przygotowujemy nowe aktualizacje portfolio. Sledz nowe wdrozenia z Polski i nasza przeprowadzke do Gruzji.',soon_cta_btn:'Daj znac jako pierwszy',
    how_num:'Proces',how_title:'Jak pracujemy',
    step1_name:'Rozmowa wstepna',step1_desc:'Darmowa 30-minutowa rozmowa. Poznajemy biznes, cele i budzet.',step1_detail:'Pytamy o obecny marketing, klientow i wyzwania.',
    step2_name:'Analiza i strategia',step2_desc:'Analiza rynku i strategia dopasowana do Twoich celow.',step2_detail:'Pelny dokument strategiczny przygotowany dla Twojej firmy.',
    step3_name:'Oferta i umowa',step3_desc:'Jasna oferta z zakresem, harmonogramem i cena.',step3_detail:'Przejrzyste umowy. Wszystko co tworzymy nalezy do Ciebie.',
    step4_name:'Realizacja',step4_desc:'Tworzymy, uruchamiamy i prowadzimy &mdash; reklamy, strony, branding.',step4_detail:'Regularne aktualizacje i bezposredni kontakt przez caly projekt.',
    step5_name:'Raport i optymalizacja',step5_desc:'Miesieczne raporty i ciagla optymalizacja.',step5_detail:'Dane prowadza kazda kolejna decyzje.',
    faq_title:'FAQ',
    faq1_q:'Ile to kosztuje?',faq1_a:'Dla pierwszych partnerow jedna wybrana usluga jest darmowa w zakresie startowym. Potem przygotowujemy przejrzysta indywidualna oferte bez ukrytych kosztow. Na starcie stawki sa przyjazne.',
    faq2_q:'Kiedy zobaczymy efekty?',faq2_a:'Reklamy &mdash; pierwszy tydzien. Strona &mdash; 2-4 tygodnie. Branding &mdash; 2-3 tygodnie. Strategia &mdash; 1-2 tygodnie.',
    faq3_q:'Czy pracujecie z malymi firmami?',faq3_a:'Tak. Najczesciej wspieramy male zespoly i lokalne firmy, szczegolnie na wczesnym etapie.',
    faq4_q:'Czy mozecie pracowac zdalnie?',faq4_a:'Tak, w 100%. Pracujemy z klientami miedzynarodowo.',
    faq5_q:'W jakich jezykach pracujecie?',faq5_a:'Angielski, rosyjski, gruzinski, ukrainski i polski &mdash; takze dla zespolow mieszanych.',
    con_num:'Kontakt',con_title:'Skontaktuj sie',con_heading:'Porozmawiajmy o Twoim projekcie',
    con_lbl_email:'Email',con_lbl_loc:'Lokalizacja',con_location:'Polska (wkrotce przeprowadzka do Gruzji)',con_lbl_lang:'Jezyki',con_lbl_social:'Social media',
    form_name:'Twoje imie',form_email:'Email',form_service:'Usluga',form_service_ph:'Wybierz usluge...',form_msg:'Wiadomosc',form_send:'Wyslij wiadomosc &#8599;',
    success_title:'Wiadomosc wyslana!',success_desc:'Odezwiemy sie w ciagu 24 godzin.',success_btn:'Powrot na glowna',
    skip_link:'Przejdz do glownej tresci',sticky_cta:'Kontakt',
    footer_tagline:'Agencja marketingowa dla marek, ktore oczekuja przejrzystosci, jakosci i mierzalnego wzrostu. Siedziba w Polsce, wkrotce przeprowadzka do Gruzji.',
    footer_nav_title:'Nawigacja',footer_contact_title:'Kontakt',footer_location:'Polska &mdash; wkrotce przeprowadzka do Gruzji',footer_langs:'EN / RU / GE / UA / PL',
    footer_legal_title:'Prywatnosc i dane',
    footer_legal_text:'Zbieramy tylko dane przeslane przez formularz kontaktowy. Informacje sluza do odpowiedzi na zapytania i nigdy nie sa sprzedawane. Przetwarzanie zgodnie z RODO.',
    footer_privacy_link:'Pelna polityka prywatnosci &#8599;',footer_privacy:'Polityka prywatnosci',footer_email_link:'Napisz do nas',
    footer_bottom_copy:'<strong>&copy; 2026 Kleoso Agency.</strong> Wszelkie prawa zastrzezone. Studio remote-first z siedziba w Polsce.',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Siedziba w Polsce, wkrotce przeprowadzka do Gruzji'
  }
};

/* ── i18n helpers: document lang, external links, a11y bootstrap ── */

/** Maps internal lang keys to ISO 639-1 codes for <html lang>. */
var LANG_HTML_MAP={en:'en',ru:'ru',ge:'ka',ua:'uk',pl:'pl'};

/** Sync <html lang> for screen readers, SEO, and hyphenation. */
function updateDocumentLang(langKey){
  var iso=LANG_HTML_MAP[langKey]||'en';
  document.documentElement.setAttribute('lang',iso);
  document.documentElement.setAttribute('data-lang',langKey);
}

/**
 * Ensures external links open safely in a new tab.
 * Appends rel="noopener noreferrer" to any off-origin http(s) anchor.
 */
function hardenExternalLinks(root){
  var scope=root||document;
  var origin=location.origin;
  scope.querySelectorAll('a[href^="http"]').forEach(function(a){
    try{
      if(new URL(a.href).origin===origin)return;
    }catch(e){return;}
    var rel=(a.getAttribute('rel')||'').split(/\s+/).filter(Boolean);
    ['noopener','noreferrer'].forEach(function(token){
      if(rel.indexOf(token)===-1)rel.push(token);
    });
    a.setAttribute('rel',rel.join(' '));
    if(!a.getAttribute('target'))a.setAttribute('target','_blank');
  });
}

/** One-time accessibility + security bootstrap on DOM ready. */
function initSiteFoundation(){
  hardenExternalLinks();
  var menu=document.getElementById('mobileMenu');
  if(menu&&!menu.classList.contains('open'))menu.hidden=true;
}

function setLang(l){
  if(!i18n[l])l='en';
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.remove('active')});
  document.querySelectorAll('.lang-btn[onclick*="setLang(\''+l+'\')"]').forEach(function(b){b.classList.add('active')});
  document.body.className='lang-'+l+' has-sticky-cta';
  updateDocumentLang(l);
  var t=i18n[l];
  document.querySelectorAll('[data-i]').forEach(function(el){
    var k=el.getAttribute('data-i');
    if(t[k]!==undefined)el.innerHTML=t[k];
  });
  applyFormTranslations(l);
}

function applyFormTranslations(l){
  var formI18n={
    en:{namePh:'John Smith',emailPh:'hello@company.com',msgPh:'Tell us about your project...'},
    ru:{namePh:'Ваше имя',emailPh:'hello@company.com',msgPh:'Расскажите о вашем проекте...'},
    ge:{namePh:'თქვენი სახელი',emailPh:'hello@company.com',msgPh:'მოგვიყევით თქვენი პროექტის შესახებ...'},
    ua:{namePh:'Ваше імʼя',emailPh:'hello@company.com',msgPh:'Розкажіть про ваш проєкт...'},
    pl:{namePh:'Twoje imie',emailPh:'hello@company.com',msgPh:'Opisz swoj projekt...'}
  };
  var f=formI18n[l]||formI18n.en;
  var nameInput=document.querySelector('input[name="name"]');
  var emailInput=document.querySelector('input[name="email"]');
  var msgInput=document.querySelector('textarea[name="message"]');
  if(nameInput)nameInput.placeholder=f.namePh;
  if(emailInput)emailInput.placeholder=f.emailPh;
  if(msgInput)msgInput.placeholder=f.msgPh;
}

setLang('en');
syncActiveNav('home');
document.addEventListener('DOMContentLoaded',initSiteFoundation);
