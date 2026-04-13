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
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open')}
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
    nav_services:'Services',nav_how:'How it works',nav_portfolio:'Portfolio',nav_contact:'Contact',
    hero_tag:'Marketing Agency &mdash; Remote, based in Tbilisi',
    hero_subtag:'Based in Tbilisi &mdash; working remote with clients worldwide',
    hero_title:'We build<br><em>brands</em><br>that matter',
    hero_desc:'Kleoso is a studio led by Danylo, based in Tbilisi. We focus on web and design, helping businesses launch a clear and modern digital presence.',
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
    why2_label:'Multilingual',why2_text:'English, Russian, Georgian and Ukrainian &mdash; every client in their language.',
    why3_label:'Practical focus',why3_text:'Clear priorities, testing and steady improvements over empty promises.',
    why4_label:'Flexible support',why4_text:'From strategy to execution, we support the scope your project actually needs.',
    cta_title:'Let&#39;s build<br>your <span>Kleoso</span>',cta_btn:'Get in touch',
    founder_num:'Founder',founder_title:'Who is behind Kleoso',
    founder_name:'Danylo Sokur',founder_role:'Founder &mdash; Small team, Tbilisi',
    founder_desc:'I am building Kleoso as a practical and honest studio. We focus on web and design, move fast, and keep communication simple and transparent.',
    founder_p1:'Direct communication without middle layers',founder_p2:'Clear scope and transparent process',
    founder_p3:'Fast iterations with weekly updates',founder_p4:'Focus on quality over empty promises',
    free_num:'Launch offer',free_title:'First service is free',
    free_spots:'Only 3 spots in April',
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
    faq5_q:'What languages do you work in?',faq5_a:'English, Russian, Georgian and Ukrainian &mdash; any of the four, including mixed teams.',
    con_num:'Contact',con_title:'Get in touch',con_heading:'Let&#39;s talk about your project',
    con_lbl_email:'Email',con_lbl_loc:'Location',con_location:'Tbilisi, Georgia (Remote)',con_lbl_lang:'Languages',con_lbl_social:'Social media',
    form_name:'Your name',form_email:'Email',form_service:'Service',form_service_ph:'Select a service...',form_msg:'Message',form_send:'Send message &#8599;',
    success_title:'Message sent!',success_desc:'We will get back to you within 24 hours.',success_btn:'Back to home',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Remote, based in Tbilisi'
  },
  ru:{
    nav_services:'Услуги',nav_how:'Как мы работаем',nav_portfolio:'Портфолио',nav_contact:'Контакт',
    hero_tag:'Маркетинговое агентство &mdash; Remote, Тбилиси',
    hero_subtag:'База в Тбилиси &mdash; работаем удалённо с клиентами по всему миру',
    hero_title:'Создаём<br><em>бренды</em><br>которые важны',
    hero_desc:'Kleoso &mdash; студия под управлением Данило, база в Тбилиси. Мы фокусируемся на веб-дизайне и брендинге, помогая бизнесу запустить чёткое и современное цифровое присутствие.',
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
    why2_label:'Многоязычность',why2_text:'Английский, русский, грузинский, украинский &mdash; с каждым клиентом на его языке.',
    why3_label:'Практичный подход',why3_text:'Чёткие приоритеты, тестирование и устойчивые улучшения вместо пустых обещаний.',
    why4_label:'Гибкая поддержка',why4_text:'От стратегии до исполнения &mdash; помогаем в тех рамках, которые нужны проекту.',
    cta_title:'Построим<br>ваш <span>Kleoso</span>',cta_btn:'Связаться',
    founder_num:'Основатель',founder_title:'Кто стоит за Kleoso',
    founder_name:'Данило Сокур',founder_role:'Основатель &mdash; малая команда, Тбилиси',
    founder_desc:'Я строю Kleoso как практичную и честную студию. Мы фокусируемся на вебе и дизайне, работаем быстро и держим коммуникацию простой и прозрачной.',
    founder_p1:'Прямая коммуникация без посредников',founder_p2:'Чёткие рамки и прозрачный процесс',
    founder_p3:'Быстрые итерации с еженедельными отчётами',founder_p4:'Качество важнее пустых обещаний',
    free_num:'Стартовое предложение',free_title:'Первая услуга бесплатно',
    free_spots:'Только 3 места в апреле',
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
    faq5_q:'На каких языках работаете?',faq5_a:'Английский, русский, грузинский, украинский &mdash; любой из четырёх, включая смешанные команды.',
    con_num:'Контакт',con_title:'Свяжитесь с нами',con_heading:'Расскажите о вашем проекте',
    con_lbl_email:'Email',con_lbl_loc:'Локация',con_location:'Тбилиси, Грузия (Remote)',con_lbl_lang:'Языки',con_lbl_social:'Соцсети',
    form_name:'Ваше имя',form_email:'Email',form_service:'Услуга',form_service_ph:'Выберите услугу...',form_msg:'Сообщение',form_send:'Отправить &#8599;',
    success_title:'Сообщение отправлено!',success_desc:'Мы ответим в течение 24 часов.',success_btn:'На главную',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Remote, Тбилиси'
  },
  ge:{
    nav_services:'სერვისები',nav_how:'როგორ ვმუშაობთ',nav_portfolio:'პორტფოლიო',nav_contact:'კონტაქტი',
    hero_tag:'მარკეტინგული სააგენტო &mdash; Remote, თბილისი',
    hero_subtag:'ბაზა თბილისში &mdash; დისტანციური მუშაობა მსოფლიოს კლიენტებთან',
    hero_title:'ვქმნით<br><em>ბრენდებს</em><br>რომლებიც მნიშვნელოვანია',
    hero_desc:'Kleoso არის სტუდია დანილოს ხელმძღვანელობით, თბილისში. ჩვენ ვფოკუსირდებით ვებ-დიზაინსა და ბრენდინგზე, ვეხმარებით ბიზნესებს გაუშვან მკაფიო და თანამედროვე ციფრული არსებობა.',
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
    why2_label:'მრავალენოვნება',why2_text:'ინგლისური, რუსული, ქართული, უკრაინული &mdash; თითოეული კლიენტი მის ენაზე.',
    why3_label:'პრაქტიკული ფოკუსი',why3_text:'მკაფიო პრიორიტეტები, ტესტირება და სტაბილური გაუმჯობესებები ცარიელი დაპირებების ნაცვლად.',
    why4_label:'მოქნილი მხარდაჭერა',why4_text:'სტრატეგიიდან შესრულებამდე &mdash; ვუჭერთ მხარს ზუსტად იმ ფარგლებში, რაც პროექტს სჭირდება.',
    cta_title:'ავაშენოთ<br>თქვენი <span>Kleoso</span>',cta_btn:'დაკავშირება',
    founder_num:'დამფუძნებელი',founder_title:'ვინ დგას Kleoso-ს უკან',
    founder_name:'დანილო სოკური',founder_role:'დამფუძნებელი &mdash; პატარა გუნდი, თბილისი',
    founder_desc:'მე ვაშენებ Kleoso-ს როგორც პრაქტიკულ და გულწრფელ სტუდიას. ჩვენ ვფოკუსირდებით ვებსა და დიზაინზე, ვმოქმედებთ სწრაფად და ვინარჩუნებთ მარტივ და გამჭვირვალე კომუნიკაციას.',
    founder_p1:'პირდაპირი კომუნიკაცია შუამავლების გარეშე',founder_p2:'მკაფიო ფარგლები და გამჭვირვალე პროცესი',
    founder_p3:'სწრაფი ციკლები ყოველკვირეული განახლებებით',founder_p4:'ხარისხი ცარიელი დაპირებების ნაცვლად',
    free_num:'სასტარტო შეთავაზება',free_title:'პირველი სერვისი უფასოა',
    free_spots:'მხოლოდ 3 ადგილი აპრილში',
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
    faq5_q:'რა ენებზე მუშაობთ?',faq5_a:'ინგლისური, რუსული, ქართული, უკრაინული &mdash; ოთხივედან ნებისმიერი, შერეული გუნდების ჩათვლით.',
    con_num:'კონტაქტი',con_title:'დაკავშირება',con_heading:'მოგვიყევით თქვენი პროექტის შესახებ',
    con_lbl_email:'Email',con_lbl_loc:'მდებარეობა',con_location:'თბილისი, საქართველო (Remote)',con_lbl_lang:'ენები',con_lbl_social:'სოციალური ქსელები',
    form_name:'თქვენი სახელი',form_email:'Email',form_service:'სერვისი',form_service_ph:'აირჩიეთ სერვისი...',form_msg:'შეტყობინება',form_send:'გაგზავნა &#8599;',
    success_title:'შეტყობინება გაიგზავნა!',success_desc:'დაგიკავშირდებით 24 საათში.',success_btn:'მთავარზე დაბრუნება',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Remote, თბილისი'
  },
  ua:{
    nav_services:'Послуги',nav_how:'Як ми працюємо',nav_portfolio:'Портфоліо',nav_contact:'Контакт',
    hero_tag:'Маркетингова агенція &mdash; Remote, Тбілісі',
    hero_subtag:'База в Тбілісі &mdash; працюємо віддалено з клієнтами по всьому світу',
    hero_title:'Створюємо<br><em>бренди</em><br>що мають значення',
    hero_desc:'Kleoso &mdash; студія під керівництвом Данила, база в Тбілісі. Ми фокусуємось на веб-дизайні та брендингу, допомагаючи бізнесу запустити чітку й сучасну цифрову присутність.',
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
    why2_label:'Багатомовність',why2_text:'Англійська, російська, грузинська, українська &mdash; з кожним клієнтом його мовою.',
    why3_label:'Практичний підхід',why3_text:'Чіткі пріоритети, тестування та стабільні покращення замість порожніх обіцянок.',
    why4_label:'Гнучка підтримка',why4_text:'Від стратегії до виконання &mdash; підтримуємо саме в тих рамках, що потрібні проєкту.',
    cta_title:'Побудуємо<br>ваш <span>Kleoso</span>',cta_btn:'Зв\'язатись',
    founder_num:'Засновник',founder_title:'Хто стоїть за Kleoso',
    founder_name:'Данило Сокур',founder_role:'Засновник &mdash; мала команда, Тбілісі',
    founder_desc:'Я будую Kleoso як практичну й чесну студію. Фокусуємось на вебі та дизайні, працюємо швидко й тримаємо комунікацію простою та прозорою.',
    founder_p1:'Пряма комунікація без посередників',founder_p2:'Чіткі рамки та прозорий процес',
    founder_p3:'Швидкі ітерації зі щотижневими звітами',founder_p4:'Якість важливіша за порожні обіцянки',
    free_num:'Стартова пропозиція',free_title:'Перша послуга безкоштовно',
    free_spots:'Лише 3 місця у квітні',
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
    faq5_q:'Якими мовами працюєте?',faq5_a:'Англійська, російська, грузинська, українська &mdash; будь-яка з чотирьох, включно зі змішаними командами.',
    con_num:'Контакт',con_title:'Звʼязатись',con_heading:'Розкажіть про ваш проєкт',
    con_lbl_email:'Email',con_lbl_loc:'Локація',con_location:'Тбілісі, Грузія (Remote)',con_lbl_lang:'Мови',con_lbl_social:'Соцмережі',
    form_name:'Ваше імʼя',form_email:'Email',form_service:'Послуга',form_service_ph:'Оберіть послугу...',form_msg:'Повідомлення',form_send:'Надіслати &#8599;',
    success_title:'Повідомлення надіслано!',success_desc:'Відповімо протягом 24 годин.',success_btn:'На головну',
    footer_copy:'&copy; 2026 Kleoso Agency &mdash; Remote, Тбілісі'
  }
};

function setLang(l){
  if(!i18n[l])l='en';
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.remove('active')});
  document.querySelectorAll('.lang-btn[onclick*="setLang(\''+l+'\')"]').forEach(function(b){b.classList.add('active')});
  document.body.className='lang-'+l;
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
    ua:{namePh:'Ваше імʼя',emailPh:'hello@company.com',msgPh:'Розкажіть про ваш проєкт...'}
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
