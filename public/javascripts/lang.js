let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let lang = document.getElementById("lang");

// Start Language NavBar 
let brand = document.getElementById("brand");
let ash = document.getElementById("ash");
let navOne = document.getElementById("nav-one");
let navTwo = document.getElementById("nav-two");
let navbarDropdown = document.getElementById("navbarDropdown");
let navThree = document.getElementById("nav-three");
let navFour = document.getElementById("nav-four");
let navSix = document.getElementById("nav-six");
let navSeven = document.getElementById("nav-seven");
let navEight = document.getElementById("nav-eight");
let signIn = document.getElementById("sign-in");
let signUp = document.getElementById("sign-up");
let logOut = document.getElementById("logout");
// End Language NavBar 

// Start Home Page 
let homeOne = document.getElementById("home-one");
let homeTwo = document.getElementById("home-two");

//Start Counter 
let Recent  = document.getElementById("recent");
let Case    = document.getElementById("case");
let death = document.getElementById("death");
let recovered = document.getElementById("recovered");
let affected = document.getElementById("affected");
let totalDead = document.getElementById("total-dead");

// let homeTwo = document.getElementById("home-two");
let about = document.getElementById("about");
let aboutCovid = document.getElementById("about-covid");
let corno = document.getElementById("corno");
let aboutText = document.getElementById("about-text");
let aboutOne = document.getElementById("about-one");
let aboutTwo = document.getElementById("about-two");
let aboutThree = document.getElementById("about-three");
let aboutFour = document.getElementById("about-four");
let aboutFive = document.getElementById("about-five");
let aboutSix = document.getElementById("about-six");


// Service
let ourService = document.getElementById("our-services");
let dia = document.getElementById("dia");
let updata = document.getElementById("updata");
let updataOne = document.getElementById("updata-one");
let updataTwo = document.getElementById("updata-two");
let diaText = document.getElementById("dia-text");
let read = document.getElementById("read");
let readOne = document.getElementById("read-one");
let readTwo = document.getElementById("read-two");
let map = document.getElementById("map");
let mapText = document.getElementById("map-text");
let vacc = document.getElementById("vacc-ser");
let vaccText = document.getElementById("vacc-text");

//Start Symptoms
let sysmptoms = document.getElementById("covide-sym");
let qes = document.getElementById("qes");
let sys = document.getElementById("sys");
let fat = document.getElementById("fat");
let fever = document.getElementById("fever");
let head = document.getElementById("head");
let cough = document.getElementById("cough");
let nose = document.getElementById("nose");
let breath = document.getElementById("breath");
let check = document.getElementById("check");

//Start Smptoms Text
let fev = document.getElementById("fev");
let highFever = document.getElementById("fevering");
let cou = document.getElementById("coughing");
let highCought = document.getElementById("high-cou");
let bre = document.getElementById("brea");
let shortness = document.getElementById("high-brea");
let sneez = document.getElementById("sneezing");
let highSneez = document.getElementById("high-sneez");
let headache = document.getElementById("headache");
let highHead = document.getElementById("high-head");
let sore = document.getElementById("sore");
let highSore = document.getElementById("high-sore");
let stay = document.getElementById("stay");
let warring = document.getElementById("warring");

//Take Steps To Protect Others
let step = document.getElementById("step");
let stayOne = document.getElementById("stay-one");
let adviceOne = document.getElementById("advice-one");
let stayTwo = document.getElementById("stay-two");
let adviceTwo = document.getElementById("advice-two");
let stayThree = document.getElementById("stay-three");
let adviceThree = document.getElementById("advice-three");
let stayFour = document.getElementById("stay-four");
let adviceFour = document.getElementById("advice-four");
let stayFive = document.getElementById("stay-five");
let adviceFive = document.getElementById("advice-five");
let staySix = document.getElementById("stay-six");
let adviceSix = document.getElementById("advice-six");
let staySeveen = document.getElementById("stay-seveen");
let adviceSeveen = document.getElementById("advice-seveen");
let important = document.getElementById("import");
let titleImport = document.getElementById("title-import");
let stayAtHome = document.getElementById("stay-at-home");
let stayTextOne = document.getElementById("stay-text-one");
let masking = document.getElementById("masking");
let stayTextTwo = document.getElementById("stay-text-two");
let washHand = document.getElementById("wash-hand");
let stayTextThree = document.getElementById("stay-text-three");
let well = document.getElementById("well");
let stayTextFour = document.getElementById("stay-text-four");
let seek = document.getElementById("seek");
let stayTextFive = document.getElementById("stay-text-five");
let avoid = document.getElementById("avoid");
let stayTextSix = document.getElementById("stay-text-six");

//Hand Wash Process
let handWash = document.getElementById("hand-wash");
let setRules = document.getElementById("set-rules");
let TitleWash = document.getElementById("title-wash");
let washOne = document.getElementById("wash-one");
let washTwo = document.getElementById("wash-two");
let wasThree = document.getElementById("wash-three");
let washFour = document.getElementById("wash-four");
let washFive = document.getElementById("wash-five");
let washSix = document.getElementById("wash-six");

//LATEST UPDATE NEWS
let recentUpdate = document.getElementById("updata");
let latest = document.getElementById("latest");
let updateTitle = document.getElementById("udate-title");
let updateOne = document.getElementById("update-one");
let updateTwo = document.getElementById("update-two");
let updateThree = document.getElementById("update-three");

//SUBSCRIBE OUR NEWSLETTER TO GET CORONAVIRUS UPDATES
let News = document.getElementById("news");
let Sub  = document.getElementById("sub");

//CONTACT US
let contactUs = document.getElementById("contact");
let cont = document.getElementById("cont");
let Call = document.getElementById("call");

// Start Footer 
let Abouting = document.getElementById("About");
let servicess = document.getElementById("servicess");
let Symp = document.getElementById("Symp");
let Konw = document.getElementById("Konw");
let taking = document.getElementById("taking");
let prec = document.getElementById("prec");
let opinion = document.getElementById("opinion");
let washed = document.getElementById("washed");
let Lat = document.getElementById("Lat");
let subs = document.getElementById("subs");

let help  = document.getElementById("help");

let follow = document.getElementById("follow");
arabic.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("Lang" , "arabic");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang" , "english");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
}
function setLanguage(getLanguage) {
    if (getLanguage == "arabic") {

    //    Start Nav Bar 
    document.getElementsByTagName('html')[0].dir = "rtl";
    brand.textContent = "الرعية الصحيه بالشرقيه";
    ash.textContent = "الرعية الصحيه بالشرقيه";
    lang.innerHTML = "اختار اللغه";
    navOne.innerHTML = "الصفحة الرئيسيه";
    navTwo.innerHTML = "حول كوفيد 19" 
    navbarDropdown.innerHTML = "خدمتنا" ;
    navThree.innerHTML = "التخشيص";
    navFour.innerHTML = "اماكن المستشفيات";
    navSix.innerHTML = "اماكن اللقاح";
    navSeven.innerHTML = "الاعراض";
    navEight.innerHTML = "الاحتياطات الاحترازيه"; 
    arabic.innerHTML = "العربية"; 
    english.innerHTML = "English"; 
    if ( logOut !== null ) {
    logOut.innerHTML = "خروج";
    } 
    else{
    signIn.innerHTML = "تسجيل الدخول";
    signUp.innerHTML = "انشاء حساب";
    }
    homeOne.textContent = ".أنقذ نفسك أنقذ العالم";
    homeTwo.textContent =`يعاني معظم الاشخاص المصابين بفيرس كوفيدا 19 من أمراض تنفسية خفيفة إلى متوسطة ويتطلبون علاجًا خاصًا. كبار السن وأولئك الذين يعانون من مشاكل طبية أساسية`; 
    Recent.textContent = "الاحصاىيات اليوميه";
    Case.textContent = "الحالات المؤكدة";
    death.textContent = "الوفيات المؤكدة";
    recovered.textContent = "اجمالي المتعافين"
    affected.textContent = "اجمالي المصابين"
    totalDead.textContent = "اجمالي الوفيات";
    // End Counter
    about.textContent = "حول كوفيدا 19";
    aboutCovid.textContent = "حول فيروس كورونا (كوفيد -19)";
    corno.textContent = "مرض فيروس كورونا (كوفيد -19): مرض معد يسببه فيروس كورونا تم اكتشافه حديثًا. سيعاني معظم الأشخاص المصابين بفيروس من أمراض الجهاز التنفسي الخفيفة إلى المتوسطة ويتعافون دون الحاجة إلى علاج خاص";
    aboutText.textContent = "هناك العديد من الإجراءات التي يمكنك اتخاذها لحماية نفسك من  فيروس كورونا";
    aboutOne.textContent = "اغسل يدك بشكل صحيح لمدة 20 ثانية";
    aboutTwo.textContent = " لا تلمس وجهك";
    aboutThree.textContent = "البس القناع";
    aboutFour.textContent = " تجنب التجمعات الاجتماعية";
    aboutFive.textContent = "فرك يدك بمطهر كحولي";
    aboutSix.textContent = " تجنب المصافحة للمساعدة في حماية نفسك والآخرين";

    //    End NavBar
    // -----------------------------------
    // Start Our Service 
    ourService.textContent = "خدماتنا";
    dia.textContent = "تشخيص الأعراض";
    updata.textContent = "مايو 2021";
    updataOne.textContent = "مايو 2021";
    updataTwo.textContent = "مايو 2021";

    diaText.textContent = "هي عملية تحديد المرض أو الحالة التي تفسر أعراض وعلامات الشخص" ;
    read.textContent = "اقرأ أكثر";
    map.textContent = "تحديد المستشفى";
    mapText.textContent = "خريطة محافظة الشرقية توضح مواقع المستشفيات ومواقع التطعيم";
    vacc.textContent = "أخذ اللقاح";
    read.textContent = "اقرأ أكثر";
    readOne.textContent = "اقرأ أكثر";
    readTwo.textContent = "اقرأ أكثر";
    vaccText.textContent = "اللقاح هو مستحضر بيولوجي يوفر مناعة مكتسبة نشطة لمرض معدي معين";

        //Start Symptoms

    sysmptoms.textContent = "أعراض كوفيد -19";
    qes.textContent = "ما هي الاعراض؟";
    sys.textContent = "تتراوح أعراض كوفيد -19 من خفيفة إلى شديدة. يستغرق ظهور الأعراض من 2 إلى 14 يومًا بعد التعرض. قد تشمل الأعراض";
    fat.textContent = "إعياء";
    fever.textContent = "حمة";
    head.textContent = "صداع الراس";
    cough.textContent = "سعال";
    nose.textContent = "سيلان الأنف";
    breath.textContent = "صعوبة في التنفس";
    check.textContent = "تشخيص الأعراض";

    // //Start Symptoms Text
    fev.textContent = "الحمي";
    highFever.textContent = "ارتفاع درجة الحرارة - وهذا يعني أنك تشعر بالحرارة عند لمس صدرك أو ظهرك (لا تحتاج إلى قياس درجة حرارتك). من الأفضل طلب الرعاية الطبية مبكرًا";
    
    cou.textContent = "سعال";
    highCought.textContent = "السعال المستمر - يعني السعال الشديد لأكثر من ساعة ، أو 3 نوبات سعال أو أكثر خلال 24 ساعة (إذا كنت تعاني عادة من السعال ، فقد يكون أسوأ).";
    
    bre.textContent = "ضيق في التنفس";
    shortness.textContent = "هي حالة غير مريحة تجعل من الصعب إدخال الهواء بالكامل إلى رئتيك. يمكن أن تؤذي مشاكل القلب والرئتين تنفسك";
    
    sneez.textContent = "العطس";
    highSneez.textContent = "أحد أعراض مرض كوفيد -19 هو ضيق التنفس. يعد ضيق التنفس أقل شيوعًا من الحمى والسعال ، ولكنه يحدث عند حوالي 30٪ من الأشخاص.";
    
    headache.textContent = "صداع الراس";
    highHead.textContent = "لا يعد الصداع عرضًا شائعًا للفيروس ، لكن حوالي 14٪ من المصابين به قد تعرضوا له. يمكن أن يكون شديدًا بطبيعته ، فهناك أكثر من 200 نوع من الصداع";
    
    sore.textContent = "إلتهاب الحلق";
    highSore.textContent = "يعد التهاب الحلق أحد الأعراض الخفيفة المبكرة لفيروس كورونا. إذا أصبت فجأة بالتهاب في الحلق ، فمن الأفضل عزل نفسك لمدة 14 يومًا كإجراء احترازي";
    
    stay.textContent = "ابق في المنزل واتصل بطبيبك :";
    
    warring.textContent = "إذا كنت تعتقد أنك تعرضت لفيروس كوفيد 19 وتعرضت للحمى وأي أعراض ، مثل السعال أو صعوبة التنفس ، فاتصل بمقدم الرعاية الصحية الخاص بك في أقرب وقت ممكن للحصول على المشورة الطبية";


    //Take Steps To Protect Others
    step.textContent = "اتخذ خطوات لحماية الآخرين";

    stayOne.textContent = "ابق في المنزل إذا كنت مريضًا : ";
    adviceOne.textContent = "باستثناء الحصول على رعاية طبية.";

    stayTwo.textContent = "غطي فمك وأنفك : ";
    adviceTwo.textContent = "منديل عند السعال أو العطس (رمي المناديل المستعملة في سلة المهملات) أو استخدم الجزء الداخلي من مرفقك";

    stayThree.textContent = "ارتدِ قناعًا للوجه إذا كنت مريضًا : ";
    adviceThree.textContent = "يجب عليك ارتداء قناع الوجه عندما تكون بالقرب من أشخاص آخرين (على سبيل المثال ، مشاركة غرفة أو سيارة) وقبل الدخول إلى مقدم الرعاية الصحية.";

    stayFour.textContent = "نظف وعقم الأسطح التي يتم لمسها بشكل متكرر يوميًا : ";
    adviceFour.textContent = "يشمل ذلك الهواتف والطاولات ومفاتيح الإضاءة ومقابض الأبواب وأسطح العمل والمقابض والمكاتب والمراحيض والحنفيات والمغاسل";

    stayFive.textContent = "نظف الأسطح المتسخة : ";
    adviceFive.textContent = "استخدم المنظفات أو الصابون والماء قبل التطهير";

    staySix.textContent = "ابق على اطلاع على الوضع المحلي لفيروس كوفيد 19 : ";
    adviceSix.textContent = "احصل على معلومات محدثة حول نشاط كوفيد 19 المحلي من مسؤولي الصحة العامة";

    staySeveen.textContent = "سلة مهملات مبطنة مخصصة : ";
    adviceSeveen.textContent = "ممكن ، قم بتخصيص سلة مهملات مبطنة للمريض. استخدم القفازات عند إزالة أكياس القمامة والتعامل مع القمامة والتخلص منها";
    // -----------------------------------  //

    //IMPORTANT PERCAUTIONS
    important.textContent = "احتياطات مهمة";
    titleImport.textContent = "استخدام معدات الحماية الشخصية (مثل القفازات والأقنعة والنظارات). نظافة الجهاز التنفسي / آداب السعال";

    stayAtHome.textContent = "البقاء في المنزل";
    stayTextOne.textContent = "لعب البقاء في المنزل دورًا مهيمنًا في الحد من مرض كوفيد 19";
    
    masking.textContent = "يلبس القناع";
    stayTextTwo.textContent = "يجب استخدام الأقنعة كجزء من استراتيجية شاملة للتدابير";
    
    washHand.textContent = "اغسل يديك";
    stayTextThree.textContent = "عندما تغسل يديك ، تنزل الجراثيم فلا يمكن أن تجعلك مريضًا";
    
    well.textContent = "حسن الطبخ";
    stayTextFour.textContent = "يمكن أن تحمل بعض المواد الغذائية البكتيريا الضارة عليها";
    
    seek.textContent = "ابحث عن طبيب";
    stayTextFive.textContent = "تعتبر زيارة الطبيب بانتظام استثمارًا حيويًا لصحتك";
    
    avoid.textContent = "تجنب الأماكن المزدحمة";
    stayTextSix.textContent = " ... احم نفسك والآخرين بتجنب الأماكن المزدحمة";

    
    //Hand Wash Process
    handWash.textContent = "عملية الغسيل اليدوي";

    setRules.textContent = "مجموعة قواعد كيفية غسل يديك";

    TitleWash.textContent = "مرض فيروس كورونا (كوفيد 19) هو مرض معد يسببه فيروس كورونا تم اكتشافه حديثًا. سيختبر معظم المصابين بفيروس كوفيد 19";

    washOne.textContent = "ضع الصابون في متناول اليد";

    washTwo.textContent = "يدا بيد";

    wasThree.textContent = "بين الأصابع";

    washFour.textContent = "العودة إلى اليدين";

    washFive.textContent = "نظف بالماء";

    washSix.textContent = "استخدم المنشفة لتجف";

        //LATEST UPDATE NEWS
        recentUpdate.textContent = "مؤخرًا من المدونة";

        latest.textContent = "أحدث الأخبار";
        
        updateTitle.textContent = "اعثر على آخر الأخبار والمعلومات العاجلة حول أخبار فيروس كورونا";
    
        updateOne.textContent = "فيروس كورونا والتباعد الاجتماعي والجسدي والحجر الذاتي";
    
        updateTwo.textContent = "عدم اليقين العالمي المتعلق بفيروس كورونا عند مستوى قياسي";
    
        updateThree.textContent = "فيروس كورونا: ممارسة العافية أثناء البقاء في المنزل";

        //SUBSCRIBE OUR NEWSLETTER TO GET CORONAVIRUS UPDATES
        News.textContent = "رسالة الأخبار";
        Sub.textContent = "اشترك في نشرتنا الإخبارية للحصول على تحديثات فيروس كورونا";
        

        
    //CONTACT US
    contactUs.textContent = "اتصل بنا";
    cont.textContent = "تواصل معنا";
    Call.textContent = "اتصل بنا أو أرسل رسالة";

    
    //Links
    Abouting.textContent = "حول كوفيد 19";
    servicess.textContent = "خدماتنا";
    Symp.textContent = "أعراض كوفيد 19";
    Konw.textContent = "تعرف على الأعراض";
    taking.textContent = "اتخاذ التدابير";
    prec.textContent = "احتياطات مهمة";
    opinion.textContent = "رأيك";
    washed.textContent = "عملية غسيل اليدي";
    Lat.textContent = "اخر تحديث";
    subs.textContent = "الإشتراك";

    help.textContent = "روابط المساعدة";
    follow.textContent = "تابعنا :";
    }
    else if (getLanguage == "english") {
    // Start Nav bar English 
    document.getElementsByTagName('html')[0].dir = "ltr";
    brand.textContent = "El Sharqia Health Care";
    ash.textContent = "El Sharqia Health Care";
    lang.innerHTML = "Select Language";
    navOne.innerHTML = "Home";
    navTwo.innerHTML = "About covid 19";
    navbarDropdown.innerHTML = "Services";
    navThree.innerHTML = "Diagnose Service";
    navFour.innerHTML = "Map Location";
    navSix.innerHTML = "Vaccine";
    navSeven.innerHTML = "Symptoms";
    navEight.innerHTML = "Prevention";
    arabic.innerHTML = "العربية";
    english.innerHTML = "English";
    
    if ( logOut !== null ) {
        logOut.innerHTML = "Logout";
        } 
        else{
        signIn.innerHTML = "Sign In";
        signUp.innerHTML = "Sign Up";
        }
    // logOut.innerHTML = "Logout";
    homeOne.textContent = "Save YourSelf Save The World.";
    homeTwo.innerHTML = "Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and requiring special treatment. Older people, and those with underlying medical problems";
    // End Nav Bar Arabic   
    // -------------------------------
    // Start Home Page 
    Recent.textContent = "RECENT STATISTICS";
    Case.textContent = "Confirmed Cases";
    death.textContent = "Confirmed Deaths";
    recovered.textContent = "Total Recovered";
    affected.textContent = "Affected Territories";
    totalDead.textContent = "Total Dead";

    //End Counter 

    about.textContent = "ABOUT COVID-19";
    aboutCovid.textContent = "ABOUT CORONAVIRUS ( COVID-19 )";
    corno.textContent = "Coronavirus disease (COVID-19) : is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moder ate respiratory illness and recover without requiring special treatment.";
    aboutText.textContent = "There are several measures you can take to protect yourself from #COVID19.";
    aboutOne.textContent = "Wash your hand properly for 20 seconds";
    aboutTwo.textContent = "Do not touch your face";
    aboutThree.textContent = "Wear mask";
    aboutFour.textContent = "Avoid Social gatherings";
    aboutFive.textContent = "Rubbing your hand with an alcohol-based sanitizer";
    aboutSix.textContent = "Avoid shaking hands to help protect yourself and others from";

    //Start Servcie
    ourService.textContent = "Our Services";
    dia.textContent = "Diagnose Service";
    updata.textContent = "May 2021";
    updataOne.textContent = "May 2021";
    updataTwo.textContent = "May 2021";
    diaText.textContent = "is the process of determining which disease or condition explains a person's symptoms and signs";
    read.textContent = "Read More";
    map.textContent = "Map Location";
    mapText.textContent ="A map of Al Sharqiya Governorate showing the locations of hospitals and vaccination sites";
    vacc.textContent = "Vaccine Service";
    read.textContent = "Read More";
    readOne.textContent = "Read More";
    readTwo.textContent = "Read More";
    vaccText.textContent = "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease.";
    
    //Start Symptoms
    sysmptoms.textContent = "Covid-19 Symptoms";
    qes.textContent = "What Are The Symptoms?";
    sys.textContent = "COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop. Symptoms may include:";
    fat.textContent = "Fatigue";
    fever.textContent = "Fever";
    head.textContent = "Headache";
    cough.textContent = "Cough";
    nose.textContent =  "Runny Nose";
    breath.textContent = "Difficult breath";
    check.textContent =  "Diagnose symptoms";


    //Start Symptoms Text

    fev.textContent = "Fever";
    highFever.textContent = "High temperature – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is best to seek medical care early.";
    cou.textContent = "Cough";
    highCought.textContent = "Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse).";
    bre.textContent = "Shortness Of Breath";
    shortness.textContent = "is an uncomfortable condition that makes it difficult to fully get air into your lungs. Problems with your heart and lungs can harm your breathing.";
    sneez.textContent = "Sneezing";
    highSneez.textContent = "One of the symptoms of COVID-19 is shortness of breath. Shortness of breath is less common than fever and cough, but happens in about 30% of people.";
    headache.textContent = "Headache";
    highHead.textContent = "A headache isn't a common symptom of the virus, but about 14% of people infected with corona have experienced it. It can be pretty intense in nature.";
    sore.textContent = "Sore Throat";
    highSore.textContent = "Sore Throat is one of the early, mild symptoms of coronavirus. If you suddenly develop a sore throat, it's best to self-isolate for 14 days as precaution.";
    stay.textContent = "Stay at home and call your doctor :";
    warring.textContent = "If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.";


    //Take Steps To Protect Others
    step.textContent = "Take Steps To Protect Others";

    stayOne.textContent = "Stay home if you’re sick :";
    adviceOne.textContent = "except to get medical care.";

    stayTwo.textContent = "Cover your mouth and nose :";
    adviceTwo.textContent = " a tissue when you cough or sneeze (throw used tissues in the trash) or use the inside of your elbow.";

    stayThree.textContent = "Wear a facemask if you are sick :";
    adviceThree.textContent = "You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s.";

    stayFour.textContent = "Clean AND disinfect frequently touched surfaces daily :";
    adviceFour.textContent = "This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks.";

    stayFive.textContent = "Clean the dirty surfaces : ";
    adviceFive.textContent = "Use detergent or soap and water prior to disinfection.";

    staySix.textContent = "Stay informed about the local COVID-19 situation : ";
    adviceSix.textContent = "Get up-to-date information about local COVID-19 activity from public health officials.";

    staySeveen.textContent = "Dedicated, lined trash can : ";
    adviceSeveen.textContent = " possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash.";

    //IMPORTANT PERCAUTIONS
    important.textContent = "IMPORTANT PERCAUTIONS";
    titleImport.textContent = "Use of personal protective equipment (e.g., gloves, masks, eyewear). Respiratory hygiene /cough etiquette.";

    stayAtHome.textContent = "Stay At Home";
    stayTextOne.textContent = "staying at home did play a dominant role in reducing COVID-19.";
    
    masking.textContent = "Wear Mask";
    stayTextTwo.textContent = "Masks should be used as part of a comprehensive strategy of measures.";
    
    washHand.textContent = "Wash Your Hands";
    stayTextThree.textContent = "when you wash your hands, germs go down then they cannot make you sick.";
    
    well.textContent = "Well Done Cooking";
    stayTextFour.textContent = "Certain food items can carry harmful bacteria on them.";
    
    seek.textContent = "Seek For A Doctor";
    stayTextFive.textContent = "Seeing a doctor regularly is a vital investment for your health.";
    
    avoid.textContent = "Avoid Crowed Places";
    stayTextSix.textContent = "Protect yourself and others by avoiding crowded places...";


    //Hand Wash Process
    handWash.textContent = "Hand Wash Process";

    setRules.textContent = "SET OF RULES HOW TO WASH YOUR HANDS";

    TitleWash.textContent = "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience.";

    washOne.textContent = "Apply Soap On Hand";

    washTwo.textContent = "Palm To Palm";

    wasThree.textContent = "Between Fingers";

    washFour.textContent = "Back To Hands";

    washFive.textContent = "Clean With Water";

    washSix.textContent = "Use Towel To Dry";


    //LATEST UPDATE NEWS
    recentUpdate.textContent = "RECENT FROM BLOG";

    latest.textContent = "LATEST UPDATE NEWS";
    
    updateTitle.textContent = "Find The Latest Breaking News And Information About Coronavirus News";

    updateOne.textContent = "Coronavirus, Social And Physical Distancing And Self-Quarantine";

    updateTwo.textContent = "Global Uncertainty Related to Coronavirus at Record High";

    updateThree.textContent = "Coronavirus: Practicing Wellness While You Stay at Home";


    //SUBSCRIBE OUR NEWSLETTER TO GET CORONAVIRUS UPDATES
    News.textContent = "NEWS LETTER";
    Sub.textContent = "SUBSCRIBE OUR NEWSLETTER TO GET CORONAVIRUS UPDATES";

    //CONTACT US
    contactUs.textContent = "CONTACT US";
    cont.textContent = "Contact Us";

    Call.textContent = "Call us or send a message";

    //Links
    Abouting.textContent = "About Covid-19";
    servicess.textContent = "Our Services";
    Symp.textContent = "Covid-19 Symptoms";
    Konw.textContent = "Know The Symptoms";
    taking.textContent = "Taking Measures";
    prec.textContent = "Important Precautions";
    opinion.textContent = "Your Opinion";
    washed.textContent = "Hand Wash";
    Lat.textContent = "Latest Update";
    subs.textContent = "Subscribe";
    help.textContent = "Help links";
    follow.textContent = "Follow Us :"

    }
    }
