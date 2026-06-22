var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "chp1sec1",
  "level": "1",
  "url": "chp1sec1.html",
  "type": "Lesson",
  "number": "1.1",
  "title": "Vectors as Lists of Quantities",
  "body": " Vectors as Lists of Quantities  Welcome students! Before we can begin learning linear algebra, we need to establish the ontology of this book. In this book, I take the perspective that objects and situations exist external to us everywhere. These objects and situations possess many types of attributes . An attribute, together with an agreed upon unit of measurement, is a quantity .   Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.      OAQ Analysis  With a group, take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. After a few minutes, share some of your findings with the class.   If I want to measure the mass of my sandwich, then I put it on a scale, select units (e.g. grams, pounds, etc), and then read off the number. If I want to measure the distance I traveled in my car, then I look at my odometer, select units (miles or kilometers), and then read off the number. If I want to measure the temperature at my home, then I look at my thermometer, select my units (Fahrenheit or Celsius), and then read off the number.  When we measure a quantity, we obtain a real number . For example, positive integers (e.g. 1, 2, 3, …), ratios of integers (e.g. ), square roots of positive integers (e.g. ), and transcendental numbers like and are all real numbers.  You do not need to know the value of a real number to reason about it. In Example , the volume of the water in my glass, measured in ounces is a number. We can reason about that volume of water without ever knowing its value. Sometimes I will name a real number with an italicized lower case letter. For example, I might name the volume of water in my glass, measured in ounces, with the letter , for volume. I denote the collection of all real numbers as and use the symbols to mean  is a real number.   Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.    Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.      Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.   Today's Forcast    Hours after midnight  Temperature in Fahrenheit (°F)    0  42°F    3  39°F    6  38°F    9  48°F    12  56°F    15  59°F    18  53°F    21  46°F     I scroll down a little further and see the following visual representation.   Weather forecast.   A graphical representation of a weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?   Observe that in each quantitative situation above, we encountered many quantities, naturally grouped together, all at once. Lists of quantities are often united by a single object or situation. When analyzing the world around us, these lists of quantities naturally emerge, so it use useful to have language to discuss them.   Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .       Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.  Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size    A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.  Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,      Quantities outside - Revisited  An object is the air outside my home. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 3 hour intervals throughout the day. The corresponding list of temperatures, below, has list-length 8.  Degrees Fahrenheit at 12am,  Degrees Fahrenheit at 3am,  Degrees Fahrenheit at 6am,  Degrees Fahrenheit at 9am  Degrees Fahrenheit at 12pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 9pm.    A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.  Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,      Identifying Lists of Quantities  Consider each of the following situations. With your group, write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.  The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.     Throughout our day, we are constantly coming across vectors: nutrition facts in cereal, prices of our groceries, populations in cities, temperatures outside, internet search rankings, and even the color data for the pixels on our electronic displays. In fact, a single image on a 4K LCD display is encoded within a list of many numbers!   Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .    Day-to-Day vs. Disciplinary Vectors  So far we have focused on what I call day-to-day vectors - vectors we all see in our day-to-day lives. Of course, there are also countless disciplinary specific vectors - that is vectors that are unique to academic disciplines. Vectors naturally arise in all quantitative disciplines, including: physics, chemistry, biology, computer science, economics, and business. Throughout this course, I will introduce you to some disciplinary vectors. However, there is simply no way for me to list every possible disciplinary vector here. Rather, a major goal of this lesson is to get your mind prepared to see and reason about disciplinary vectors when you encounter them in your disciplinary contexts.    Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) In groups, come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.   "
},
{
  "id": "chp1sec1-2",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "objects situations attributes quantity "
},
{
  "id": "chp1sec1-3",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water.",
  "body": " Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.    "
},
{
  "id": "chp1sec1-4",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-4",
  "type": "Activity",
  "number": "1.1.2",
  "title": "OAQ Analysis.",
  "body": " OAQ Analysis  With a group, take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. After a few minutes, share some of your findings with the class.  "
},
{
  "id": "chp1sec1-6",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real number "
},
{
  "id": "chp1sec1-7",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "name "
},
{
  "id": "chp1sec1-8",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "Quantities in my kitchen.",
  "body": " Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.  "
},
{
  "id": "chp1sec1-9",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-9",
  "type": "Example",
  "number": "1.1.4",
  "title": "Quantities as I travel.",
  "body": " Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.    "
},
{
  "id": "chp1sec1-10",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-10",
  "type": "Example",
  "number": "1.1.6",
  "title": "Quantities outside.",
  "body": " Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.   Today's Forcast    Hours after midnight  Temperature in Fahrenheit (°F)    0  42°F    3  39°F    6  38°F    9  48°F    12  56°F    15  59°F    18  53°F    21  46°F     I scroll down a little further and see the following visual representation.   Weather forecast.   A graphical representation of a weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?  "
},
{
  "id": "def-list-length",
  "level": "2",
  "url": "chp1sec1.html#def-list-length",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Vectors and List-Length.",
  "body": " Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .   "
},
{
  "id": "chp1sec1-14",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-14",
  "type": "Example",
  "number": "1.1.10",
  "title": "Quantities in my kitchen - Revisited.",
  "body": " Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.  Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size    A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.  Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,    "
},
{
  "id": "chp1sec1-15",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-15",
  "type": "Example",
  "number": "1.1.11",
  "title": "Quantities outside - Revisited.",
  "body": " Quantities outside - Revisited  An object is the air outside my home. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 3 hour intervals throughout the day. The corresponding list of temperatures, below, has list-length 8.  Degrees Fahrenheit at 12am,  Degrees Fahrenheit at 3am,  Degrees Fahrenheit at 6am,  Degrees Fahrenheit at 9am  Degrees Fahrenheit at 12pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 9pm.    A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.  Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,    "
},
{
  "id": "chp1sec1-16",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-16",
  "type": "Activity",
  "number": "1.1.12",
  "title": "Identifying Lists of Quantities.",
  "body": " Identifying Lists of Quantities  Consider each of the following situations. With your group, write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.  The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.    "
},
{
  "id": "chp1sec1-18",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-18",
  "type": "Remark",
  "number": "1.1.13",
  "title": "Meaningful vectors can have large list-length!",
  "body": " Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .  "
},
{
  "id": "chp1sec1-19",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-19",
  "type": "Remark",
  "number": "1.1.14",
  "title": "Day-to-Day vs. Disciplinary Vectors.",
  "body": " Day-to-Day vs. Disciplinary Vectors  So far we have focused on what I call day-to-day vectors - vectors we all see in our day-to-day lives. Of course, there are also countless disciplinary specific vectors - that is vectors that are unique to academic disciplines. Vectors naturally arise in all quantitative disciplines, including: physics, chemistry, biology, computer science, economics, and business. Throughout this course, I will introduce you to some disciplinary vectors. However, there is simply no way for me to list every possible disciplinary vector here. Rather, a major goal of this lesson is to get your mind prepared to see and reason about disciplinary vectors when you encounter them in your disciplinary contexts.  "
},
{
  "id": "chp1sec1-20",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-20",
  "type": "Activity",
  "number": "1.1.15",
  "title": "Constructing Feature Vectors (Machine Learning).",
  "body": " Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) In groups, come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.  "
},
{
  "id": "chp2sec1",
  "level": "1",
  "url": "chp2sec1.html",
  "type": "Lesson",
  "number": "2.1",
  "title": "Linear Combinations as Mixture",
  "body": " Linear Combinations as Mixture  In this lesson, we investigate, conceptualize, and formalize the notion of mixing vectors.   Vignette: Pouring Cereal  I love cereal. It can be a great way to start the day. I have two cereal boxes on my shelf: Sugar-Os, which is very tasty (but not so nutritious), and Vitaflakes, which is very nutritious (but not so tasty). When I look at the side of their boxes, I see their nutrition facts.    A cartoon depicting mixing cereal from both a box of Sugar-O's and Vitaflakes.    When I make my daily breakfast, I mix my cereals. Today, I mixed half a serving of Sugar-Os with a third of a serving of Vitaflakes. What are the nutrition facts for my mixture?  I wonder, how much nutrients is in my bowl?    Vignette: Travel Instructions  My neighborhood's streets are parallel and intersect at right angles, but they are not aligned with the north-south and east-west cardinal directions. My neighborhood map is depicted below, where the distance between each adjacent gridline is 100ft. The blue streets go from the southwest to the northeast, and each blue block measures 300ft east and 400ft north. The red streets travel from the northeast to the southeast, and each red block measures 400ft east and 300ft south.   My GPS tells me that my grocery store is 500ft east of me and 1500ft north of me, but of course, I can not get there traveling 500ft due east and 1500ft due north, as that would require I cut straight through other people's homes. Instead, I see I can travel 3 blue blocks northeast and 1 red block northwest, I get to the grocery store. Could I have gotten there another way?  I need to go to my bank. My bank is not too far away, and in fact my GPS tells me it is only 2300ft east and 1400ft north of me. I wonder, how can I describe my path there in terms of blue blocks and red blocks?    Vignette: Averaging Temperature  I want to plan out my clothing for the week so pull up the weather app on my phone. I see the forecasts for each of the next two days, with temperatures measured in degrees Fahrenheit, is:   Today's Forcast    Hours after midnight  Temperature Today in Fahrenheit (°F)  Temperature Tomorrow in Fahrenheit (°F)    0  42°F  44°F    3  39°F  41°F    6  38°F  40°F    9  48°F  52°F    12  56°F  64°F    15  59°F  67°F    18  53°F  61°F    21  46°F  50°F     Interesting! Tomorrow will be a warmer day. The app then gives the average forecast over the next two days:  The weather app plots the forecast for today, tomorrow, and the 2-day average below.    A core mathematical act is to create and use symbols to organize our thoughts and communicate our reasoning. One of the most fundamental ideas associated to (lists of) quantities is mixing (lists of) quantities.   Where we saw mixing in our vignettes?  In Vignette 1, I pour some of one cereal and then some of another cereal.  In Vignette 2, I travel in one direction, and then in another direction.  In Vignette 3, I average each of my daily forecasts.   We observe two types of mixtures of quantities: those arising from a physical mixture of empirical objects (e.g. pouring cereals) and those arising from a conceptual mixture of quantities (e.g. averages of air temperatures). Mixture is a core idea that will be central to everything going forward.   Where else do you see mixing?   Think back to all the different lists of quantities you found in the world around you. In which of those contexts was it meaningful to mix those vectors? Write down the contexts, lists of quantities, and what it means to mix them.    The idea of mixing vectors is made mathematically precise through two natural operations: scaling and addition. To reason about them verbally, I will usually discuss them with the metaphor of servings of boxes of cereal, where a vector represents the nutrients of one serving size of a given cereal. However, sometimes I will draw upon other metaphors, such as travel. To visualize them, I will most frequently use the geometric representation. I am about to give our first formal mathematical definition.   What is a mathematical definition?  Mathematical definitions are our attempt to formalize some mathematical object or mathematical action. It introduces precise language and symbols that help us reason about and communicate mathematics. It is a pedagogical decision that I will always introduce a concept informally first, drawing on your experiences. Afterwards I will introduce formalism, with the hope that you will have a sense of their informal meaning and the need for the formalism. In what follows, you should seek to know both the precise formal statement of definitions as well as their informal meaning and the context for their applicability.    Vector Scaling   If and , then is the vector  scaled by .     Meanings of Vector Scaling  If and , then the scaled vector has each of the following meanings:  Verbally. I fill my bowl with many serving sizes of my cereal.  Visually. Hold the arrow on both ends. Keep the tail (origin) fixed as you stretch the arrow by a scaling factor of . See Figure below.  Symbolically. The scaled vector has name and when we unpack it, its entries are obtained by scaling each entry of by .      Visualizing vector scaling via arrows      Visualize vector scaling as:  stretching arrows at GeoGebra ID: D5ZYkYQq  amplifying signals at GeoGebra ID: cczk5gzj  adjusting the volume of a sound at GeoGebra ID: awejqq5u      Absolute Length vs Relative Length  When one thinks of a vector as an arrow, it is common to think of it as having both a direction and absolute length . At this time, we will not be using the notion of absolute length, rather this will be developed and made precise in later chapters. Scaling, on the other hand, encodes relative length - for example, if , then is two times as long as . In the lessons to come, we will frequently measure vectors in units of other vectors via scaling.    Vector Addition   If , then is their vector sum . The operation of forming their vector sum is vector addition .     Meanings of Vector Addition  If , then the vector sum has each of the following meanings:  Verbally. I fill my bowl with one serving size of each of my cereals.  Visually. Translate the -arrow to start at the tip of -arrow. Similarly, translate the -arrow to start at the tip of the -arrow. This will form a tip-to-tail parallelogram and the arrow for will be the diagonal of this parallelogram. We call this visualization tip-to-tail addition.  Symbolically. The vectors sum has name and when we unpack it, its entries are obtained by adding the entries in the corresponding positions, which we call entry-by-entry addition.      Visualizing vector addition via arrows      Visualize vector addition via tip-to-tail parallelograms at GeoGebra ID: ADsHPgV4 and superposition of signals at GeoGebra ID: ttny3hjk .   Naturally, you will want to do both, scale and add vectors. Scaling, then adding, defines a fundamental mixing operation among vector quantities: linear combination.   Linear Combination   If is a collection of vectors and a collection of real numbers, then the vector is a linear combination of the vectors in .     The Mixture Parallelogram  If and , then the linear combination may be visualized with its mixture parallelogram with sides determined by and .  For instance, the mixture of 2 servings of and 1.5 servings of is encoded in the mixture parallelogram below.    Visualizing linear combination via the mixture parallelogram.      Explorations with The Mixture Parallelogram Tool   In this activity, you will engage with some of the core mixture questions of this course. Build intuition now and revisit later. You will use the Mixture Parallelogram Tool to visualize, explore, and understand mixtures of vectors in .  A pre-made version of the Mixture Parallelogram Tool can be found at GeoGebra ID: qAC4TXwy .  Finding serving sizes to create a given mixture. By playing with the sliders, find the serving sizes and so that .  Analyzing the set of all possible mixtures. Move the vectors and , and sliders and , to analyze the truth of each of the following claims. In complete sentences, and using your mixture parallelogram, justify why the claim seems true or seems false.   Every vector in the plane is a linear combination of and .  Every vector in the plane is a linear combination of and .   Holding one slider constant. Slide to and keep it there for the moment. Look at the tip of your mixture vector. Right click on the point and select \"trace\" and then start sliding around (while not changing ). What shape is created by the collection of tip points? Reset and try this again by fixing and sliding .       Symbolizing Linear Combinations   In each of the following situations, identify and name the relevant vectors (including the appropriate list-length) and then write an algebraic expression representing the appropriate mixture.   If every month, you record your monthly expenses by type (groceries, gas, utilities, tuition, etc.) in dollars, then symbolize your total expenses for the past year.  If again you record your monthly expenses, and given that annual inflation is currently roughly , symbolize what you expect to be your monthly expenses in one year.  If I have two cereals such that 1.5 servings of the first cereal has the exact same nutrition facts as 0.75 servings of the second cereal, then symbolize an equation relating the two serving sizes.      Practice Interpreting Symbolism   Interpret the meaning of the symbolic expression in each of the following situations.   You have a recipe for cookies that uses five ingredients. If are the nutrition facts for a single serving size of each of these five ingredient and the recipe calls for servings of each ingredient, respectively, then interpret the meaning of the linear combination  If is the vector of hourly temperatures in , , measured at your home on day of last week, then interpret     Given a set of distinct vectors , we may consider a linear combination . This linear combination is a mathematical object. We can ask how \"big\" this object is in units of each . This is a mathematical attribute of the linear combination. Finally, we can agree to measure the linear combinations in units of , which is the value . Collecting these quantities, we now associate to each such linear combination a new vector: its servings vector .   Servings Vector   If are distinct vectors with a fixed order and are scalars, then the linear combination has servings vector  .     The list-length of a servings vector is the number of vectors the collection . Also, note that the order of elements in matters! A different ordering of elements in would result in a different servings vector.   Practice Forming Servings Vectors    Form the servings vector for each of the following linear combinations:               Did we need to know the list-length of the vectors above to form the servings vectors?  Suppose we are forming a linear combination of that has servings vector . What is the linear combination?     "
},
{
  "id": "vig-pouring-cereal",
  "level": "2",
  "url": "chp2sec1.html#vig-pouring-cereal",
  "type": "Example",
  "number": "2.1.1",
  "title": "Vignette: Pouring Cereal.",
  "body": " Vignette: Pouring Cereal  I love cereal. It can be a great way to start the day. I have two cereal boxes on my shelf: Sugar-Os, which is very tasty (but not so nutritious), and Vitaflakes, which is very nutritious (but not so tasty). When I look at the side of their boxes, I see their nutrition facts.    A cartoon depicting mixing cereal from both a box of Sugar-O's and Vitaflakes.    When I make my daily breakfast, I mix my cereals. Today, I mixed half a serving of Sugar-Os with a third of a serving of Vitaflakes. What are the nutrition facts for my mixture?  I wonder, how much nutrients is in my bowl?  "
},
{
  "id": "vig-travel-instructions",
  "level": "2",
  "url": "chp2sec1.html#vig-travel-instructions",
  "type": "Example",
  "number": "2.1.2",
  "title": "Vignette: Travel Instructions.",
  "body": " Vignette: Travel Instructions  My neighborhood's streets are parallel and intersect at right angles, but they are not aligned with the north-south and east-west cardinal directions. My neighborhood map is depicted below, where the distance between each adjacent gridline is 100ft. The blue streets go from the southwest to the northeast, and each blue block measures 300ft east and 400ft north. The red streets travel from the northeast to the southeast, and each red block measures 400ft east and 300ft south.   My GPS tells me that my grocery store is 500ft east of me and 1500ft north of me, but of course, I can not get there traveling 500ft due east and 1500ft due north, as that would require I cut straight through other people's homes. Instead, I see I can travel 3 blue blocks northeast and 1 red block northwest, I get to the grocery store. Could I have gotten there another way?  I need to go to my bank. My bank is not too far away, and in fact my GPS tells me it is only 2300ft east and 1400ft north of me. I wonder, how can I describe my path there in terms of blue blocks and red blocks?  "
},
{
  "id": "vig-averaging-temperature",
  "level": "2",
  "url": "chp2sec1.html#vig-averaging-temperature",
  "type": "Example",
  "number": "2.1.3",
  "title": "Vignette: Averaging Temperature.",
  "body": " Vignette: Averaging Temperature  I want to plan out my clothing for the week so pull up the weather app on my phone. I see the forecasts for each of the next two days, with temperatures measured in degrees Fahrenheit, is:   Today's Forcast    Hours after midnight  Temperature Today in Fahrenheit (°F)  Temperature Tomorrow in Fahrenheit (°F)    0  42°F  44°F    3  39°F  41°F    6  38°F  40°F    9  48°F  52°F    12  56°F  64°F    15  59°F  67°F    18  53°F  61°F    21  46°F  50°F     Interesting! Tomorrow will be a warmer day. The app then gives the average forecast over the next two days:  The weather app plots the forecast for today, tomorrow, and the 2-day average below.   "
},
{
  "id": "ex-mixing-vignettes",
  "level": "2",
  "url": "chp2sec1.html#ex-mixing-vignettes",
  "type": "Example",
  "number": "2.1.5",
  "title": "Where we saw mixing in our vignettes?",
  "body": " Where we saw mixing in our vignettes?  In Vignette 1, I pour some of one cereal and then some of another cereal.  In Vignette 2, I travel in one direction, and then in another direction.  In Vignette 3, I average each of my daily forecasts.  "
},
{
  "id": "activity-seeing-mixing-around",
  "level": "2",
  "url": "chp2sec1.html#activity-seeing-mixing-around",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Where else do you see mixing?",
  "body": " Where else do you see mixing?   Think back to all the different lists of quantities you found in the world around you. In which of those contexts was it meaningful to mix those vectors? Write down the contexts, lists of quantities, and what it means to mix them.   "
},
{
  "id": "psa-math-def",
  "level": "2",
  "url": "chp2sec1.html#psa-math-def",
  "type": "Insight",
  "number": "2.1.6",
  "title": "What is a mathematical definition?",
  "body": " What is a mathematical definition?  Mathematical definitions are our attempt to formalize some mathematical object or mathematical action. It introduces precise language and symbols that help us reason about and communicate mathematics. It is a pedagogical decision that I will always introduce a concept informally first, drawing on your experiences. Afterwards I will introduce formalism, with the hope that you will have a sense of their informal meaning and the need for the formalism. In what follows, you should seek to know both the precise formal statement of definitions as well as their informal meaning and the context for their applicability.  "
},
{
  "id": "Def-vector_scaling",
  "level": "2",
  "url": "chp2sec1.html#Def-vector_scaling",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Vector Scaling.",
  "body": " Vector Scaling   If and , then is the vector  scaled by .   "
},
{
  "id": "meanings-vector_scaling",
  "level": "2",
  "url": "chp2sec1.html#meanings-vector_scaling",
  "type": "Note",
  "number": "2.1.8",
  "title": "Meanings of Vector Scaling.",
  "body": " Meanings of Vector Scaling  If and , then the scaled vector has each of the following meanings:  Verbally. I fill my bowl with many serving sizes of my cereal.  Visually. Hold the arrow on both ends. Keep the tail (origin) fixed as you stretch the arrow by a scaling factor of . See Figure below.  Symbolically. The scaled vector has name and when we unpack it, its entries are obtained by scaling each entry of by .      Visualizing vector scaling via arrows    "
},
{
  "id": "exploration-geogebra-scaling",
  "level": "2",
  "url": "chp2sec1.html#exploration-geogebra-scaling",
  "type": "Exploration",
  "number": "2.1.2",
  "title": "",
  "body": " Visualize vector scaling as:  stretching arrows at GeoGebra ID: D5ZYkYQq  amplifying signals at GeoGebra ID: cczk5gzj  adjusting the volume of a sound at GeoGebra ID: awejqq5u    "
},
{
  "id": "psa-absolute-relative-length",
  "level": "2",
  "url": "chp2sec1.html#psa-absolute-relative-length",
  "type": "Insight",
  "number": "2.1.10",
  "title": "Absolute Length vs Relative Length.",
  "body": " Absolute Length vs Relative Length  When one thinks of a vector as an arrow, it is common to think of it as having both a direction and absolute length . At this time, we will not be using the notion of absolute length, rather this will be developed and made precise in later chapters. Scaling, on the other hand, encodes relative length - for example, if , then is two times as long as . In the lessons to come, we will frequently measure vectors in units of other vectors via scaling.  "
},
{
  "id": "Def-vector_addition",
  "level": "2",
  "url": "chp2sec1.html#Def-vector_addition",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Vector Addition.",
  "body": " Vector Addition   If , then is their vector sum . The operation of forming their vector sum is vector addition .   "
},
{
  "id": "meanings-vector_addition",
  "level": "2",
  "url": "chp2sec1.html#meanings-vector_addition",
  "type": "Note",
  "number": "2.1.12",
  "title": "Meanings of Vector Addition.",
  "body": " Meanings of Vector Addition  If , then the vector sum has each of the following meanings:  Verbally. I fill my bowl with one serving size of each of my cereals.  Visually. Translate the -arrow to start at the tip of -arrow. Similarly, translate the -arrow to start at the tip of the -arrow. This will form a tip-to-tail parallelogram and the arrow for will be the diagonal of this parallelogram. We call this visualization tip-to-tail addition.  Symbolically. The vectors sum has name and when we unpack it, its entries are obtained by adding the entries in the corresponding positions, which we call entry-by-entry addition.      Visualizing vector addition via arrows    "
},
{
  "id": "exploration-geogebra-addition",
  "level": "2",
  "url": "chp2sec1.html#exploration-geogebra-addition",
  "type": "Exploration",
  "number": "2.1.3",
  "title": "",
  "body": " Visualize vector addition via tip-to-tail parallelograms at GeoGebra ID: ADsHPgV4 and superposition of signals at GeoGebra ID: ttny3hjk .  "
},
{
  "id": "def-linear_combination",
  "level": "2",
  "url": "chp2sec1.html#def-linear_combination",
  "type": "Definition",
  "number": "2.1.14",
  "title": "Linear Combination.",
  "body": " Linear Combination   If is a collection of vectors and a collection of real numbers, then the vector is a linear combination of the vectors in .   "
},
{
  "id": "ex-mixture_parallelogram",
  "level": "2",
  "url": "chp2sec1.html#ex-mixture_parallelogram",
  "type": "Insight",
  "number": "2.1.15",
  "title": "The Mixture Parallelogram.",
  "body": " The Mixture Parallelogram  If and , then the linear combination may be visualized with its mixture parallelogram with sides determined by and .  For instance, the mixture of 2 servings of and 1.5 servings of is encoded in the mixture parallelogram below.    Visualizing linear combination via the mixture parallelogram.    "
},
{
  "id": "geogebra_activity-lincomb",
  "level": "2",
  "url": "chp2sec1.html#geogebra_activity-lincomb",
  "type": "Activity",
  "number": "2.1.4",
  "title": "Explorations with The Mixture Parallelogram Tool.",
  "body": " Explorations with The Mixture Parallelogram Tool   In this activity, you will engage with some of the core mixture questions of this course. Build intuition now and revisit later. You will use the Mixture Parallelogram Tool to visualize, explore, and understand mixtures of vectors in .  A pre-made version of the Mixture Parallelogram Tool can be found at GeoGebra ID: qAC4TXwy .  Finding serving sizes to create a given mixture. By playing with the sliders, find the serving sizes and so that .  Analyzing the set of all possible mixtures. Move the vectors and , and sliders and , to analyze the truth of each of the following claims. In complete sentences, and using your mixture parallelogram, justify why the claim seems true or seems false.   Every vector in the plane is a linear combination of and .  Every vector in the plane is a linear combination of and .   Holding one slider constant. Slide to and keep it there for the moment. Look at the tip of your mixture vector. Right click on the point and select \"trace\" and then start sliding around (while not changing ). What shape is created by the collection of tip points? Reset and try this again by fixing and sliding .     "
},
{
  "id": "activity-symbolizing",
  "level": "2",
  "url": "chp2sec1.html#activity-symbolizing",
  "type": "Activity",
  "number": "2.1.17",
  "title": "Symbolizing Linear Combinations.",
  "body": " Symbolizing Linear Combinations   In each of the following situations, identify and name the relevant vectors (including the appropriate list-length) and then write an algebraic expression representing the appropriate mixture.   If every month, you record your monthly expenses by type (groceries, gas, utilities, tuition, etc.) in dollars, then symbolize your total expenses for the past year.  If again you record your monthly expenses, and given that annual inflation is currently roughly , symbolize what you expect to be your monthly expenses in one year.  If I have two cereals such that 1.5 servings of the first cereal has the exact same nutrition facts as 0.75 servings of the second cereal, then symbolize an equation relating the two serving sizes.    "
},
{
  "id": "activity-interpretting_symbolism",
  "level": "2",
  "url": "chp2sec1.html#activity-interpretting_symbolism",
  "type": "Activity",
  "number": "2.1.18",
  "title": "Practice Interpreting Symbolism.",
  "body": " Practice Interpreting Symbolism   Interpret the meaning of the symbolic expression in each of the following situations.   You have a recipe for cookies that uses five ingredients. If are the nutrition facts for a single serving size of each of these five ingredient and the recipe calls for servings of each ingredient, respectively, then interpret the meaning of the linear combination  If is the vector of hourly temperatures in , , measured at your home on day of last week, then interpret    "
},
{
  "id": "def-serving_size_vector",
  "level": "2",
  "url": "chp2sec1.html#def-serving_size_vector",
  "type": "Definition",
  "number": "2.1.19",
  "title": "Servings Vector.",
  "body": " Servings Vector   If are distinct vectors with a fixed order and are scalars, then the linear combination has servings vector  .   "
},
{
  "id": "chp2sec1-29",
  "level": "2",
  "url": "chp2sec1.html#chp2sec1-29",
  "type": "Activity",
  "number": "2.1.20",
  "title": "Practice Forming Servings Vectors.",
  "body": " Practice Forming Servings Vectors    Form the servings vector for each of the following linear combinations:               Did we need to know the list-length of the vectors above to form the servings vectors?  Suppose we are forming a linear combination of that has servings vector . What is the linear combination?    "
},
{
  "id": "chp2sec2",
  "level": "1",
  "url": "chp2sec2.html",
  "type": "Lesson",
  "number": "2.2",
  "title": "Algebraic Properties of Linear Combination",
  "body": " Algebraic Properties of Linear Combination   Baking Cookies   I am a big fan of chocolate chip cookies.    A cartoon depicting maxing ingredients to make cookies.    Below is the ingredient list for a chocolate chip cookie recipe that produces 60 cookies.   cups of all-purpose flour\\,  1 teaspoon of baking soda,  1 teaspoon of salt,  1 cup of butter   cup of granulated sugar,   cup of packed brown sugar,  1 teaspoon of vanilla extract,  2 large eggs,  2 cups of semi-sweet chocolate morsels.    One serving size of each ingredient is one unit of the given unit of measurement (i.e. one serving size of flour is one cup, one serving size of baking soda is one teaspoon, etc.). Let the symbols , , be the names of the nutrition fact vectors for one serving size of each of these nine ingredients. In groups, discuss each of the following and then share with the class.  Symbolize. Using the names , , and the symbolism of linear combination, symbolize the nutrition facts for the totality of a single recipe of cookies.  Reason. However I want to make a double recipe (120 cookies) so that all of my linear algebra students can eat several during class. In what ways can I make a double recipe? Try to come up with at least two distinct strategies for making a double recipe.  Symbolize. I want to understand the nutrition facts vector for the totality of the cookies in my double recipe. Using the symbolism of linear combination, write down an algebraic equation for the two distinct ways you found for making double recipes.  Repeated Reasoning. Repeat this reasoning for the following situation. Later at home, I want a single cookie. Come up with at least two distinct strategies for making a single cookie. Using the symbolism of linear combination, write down an algebraic equation for the nutrition facts for a single cookie.  Generalize. In what ways can you generalize your algebraic equation to more situations? Describe both the situation and generalized algebraic equation.      After some class discussion, we should settle on two distinct strategies for making a double recipe: I could make single recipe twice , or I could double each of my ingredients. I would have the same final collection of cookies, hence the same nutrition facts, either way. We symbolize this equivalence in the following way:   Furthermore, this reasoning should generalize to any scaling factor and any number of vectors. We have discovered and informally justified our first algebraic property of linear combinations.   Distributivity of scaling across linear combination   If and , then     What is an algebraic property?  When I say an algebraic property, I will mean a general equivalence of two objects, expressed as an equality of symbolical expressions. For example, we just saw that we can double a recipe in two ways, which resulted in an equality of two algebraic expressions. We generalized this algebraic property and state it in Proposition . Whenever we encounter a useful algebraic property, we will summarize it in a proposition for us to easily use in the future. Remember, algebraic properties encode meaningful relationships first and foremost, and are not just rules to push symbols around the page.   Whenever we make a mathematical claim, it is incumbent upon us to justify that claim. The act of justification is a core mathematical action and comes in two varieties: informal and formal.   Informal Justification  Informal justification is the act of explaining why a mathematical statement makes sense by appealing to meanings, such as those imbued by metaphors.   The discussion of having two ways to double our recipe leveraged our mixture metaphor to provide an informal justification for Proposition .   Formal Justification (a.k.a. Proving)  Formal justification (a.k.a proving) is the act of certifying the truth of a mathematical statement by weaving together a chain of definitions and previously proven conditional statements (e.g. a proposition). This should include exposition that explains how you are both invoking and using in context each definition and conditional statement.   We have not yet proved a formal justification for Proposition . To provide a formal justification, we will need to first establish some starting assumptions and more basic principles. Formal justification is an exercise in deductive logic. As you progress through this book, you will have increasingly more exposure to, and opportunities to provide, formal justifications of mathematical statements.  Now that we have seen our first algebraic property, it is time to look a little more carefully at important algebraic properties we will use throughout this course. Formal justifications of algebraic properties of linear combinations rest upon the algebraic properties of real numbers. Going forward, we will assume the standard algebraic properties of real numbers: associativity, identity, inverses, commutativity, and distributivity, which I collect in Definition .   Algebraic Properties of Real Numbers   Real numbers satisfy the following algebraic properties.   Addition and multiplication are associative: If , then and .  Additive and multiplicative identities: The element satisfies the property: if , then . The element satisfies the property: if , then .  There exist additive and multiplicative inverses: If , then there exists an element such that . If , then there exists an element such that .  Addition and multiplication are commutative: If , then and .  Addition and multiplication are tied together with distributivity: If , then .     You will find referencing these properties to be essential to formal justifications of mathematical statements in this book.  Here I collect some of the most import algebraic properties that we will use throughout this course.   Fundamental Algebraic Properties of Linear Combination   If and , then   (Associativity of addition)  ;  (Zero vector)  , where is the vector of all zero entries;  (Inverse vector)  , where is the vector whose entries are the negative of the entries of ;  (Commutativity of addition)  ;  (Scaling by 1)  ;  (Associativity of scaling)  ;  (Distributivity of scalar sum)  ;  (Distributivity of scaling across vector sum)  .      Each of these properties can be deduced from the algebraic properties of real numbers ( ), the definition of vector scaling ( ), and the definition of vector addition ( ). I now give a formal justification of (LC1) , associativity of addition, with symbolic equalities below.       A reflection upon our first formal justification.  Please look back at and reflect upon the formal justification I just gave for additive associativity of vectors in the proof of Proposition . Observe how I start and end with the linear combination in terms of the names of the vectors. Observe how in the middle, I unpack the vectors and use their entries and assumed properties of real numbers to find appropriate algebraically equivalent expressions. Observe how I clearly state each definition or proposition I use. Observe how it is a clear story from start to finish.    Constructing Meanings of Algebraic Properties   For each algebraic property in Proposition , pick an appropriate metaphor and provide a meaningful informal justification. Each group could be assigned a different algebraic property, and after some time preparing, groups can present to the class.     Practicing Formal Justification   In a similar way as I did for associativity of vector addition, provide formal justifications for the remaining algebraic properties of linear combination in Proposition .    Mathematics builds upon itself. After we have established a solid foundation of assumptions and definitions, we build upon it, layer upon layer, to provide the formal justifications for ever more sophisticated mathematical statements.   Practicing Formal Justification   Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .     Distributivity of scalar sums across linear combination   If and , then     Practicing (In)formal Justification   Pick an appropriate metaphor and provide a meaningful informal justification for Proposition . Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .    "
},
{
  "id": "chp2sec2-2",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-2",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Baking Cookies.",
  "body": " Baking Cookies   I am a big fan of chocolate chip cookies.    A cartoon depicting maxing ingredients to make cookies.    Below is the ingredient list for a chocolate chip cookie recipe that produces 60 cookies.   cups of all-purpose flour\\,  1 teaspoon of baking soda,  1 teaspoon of salt,  1 cup of butter   cup of granulated sugar,   cup of packed brown sugar,  1 teaspoon of vanilla extract,  2 large eggs,  2 cups of semi-sweet chocolate morsels.    One serving size of each ingredient is one unit of the given unit of measurement (i.e. one serving size of flour is one cup, one serving size of baking soda is one teaspoon, etc.). Let the symbols , , be the names of the nutrition fact vectors for one serving size of each of these nine ingredients. In groups, discuss each of the following and then share with the class.  Symbolize. Using the names , , and the symbolism of linear combination, symbolize the nutrition facts for the totality of a single recipe of cookies.  Reason. However I want to make a double recipe (120 cookies) so that all of my linear algebra students can eat several during class. In what ways can I make a double recipe? Try to come up with at least two distinct strategies for making a double recipe.  Symbolize. I want to understand the nutrition facts vector for the totality of the cookies in my double recipe. Using the symbolism of linear combination, write down an algebraic equation for the two distinct ways you found for making double recipes.  Repeated Reasoning. Repeat this reasoning for the following situation. Later at home, I want a single cookie. Come up with at least two distinct strategies for making a single cookie. Using the symbolism of linear combination, write down an algebraic equation for the nutrition facts for a single cookie.  Generalize. In what ways can you generalize your algebraic equation to more situations? Describe both the situation and generalized algebraic equation.     "
},
{
  "id": "prop-dist_across_comb",
  "level": "2",
  "url": "chp2sec2.html#prop-dist_across_comb",
  "type": "Proposition",
  "number": "2.2.2",
  "title": "Distributivity of scaling across linear combination.",
  "body": " Distributivity of scaling across linear combination   If and , then   "
},
{
  "id": "chp2sec2-7",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-7",
  "type": "Remark",
  "number": "2.2.3",
  "title": "What is an algebraic property?",
  "body": " What is an algebraic property?  When I say an algebraic property, I will mean a general equivalence of two objects, expressed as an equality of symbolical expressions. For example, we just saw that we can double a recipe in two ways, which resulted in an equality of two algebraic expressions. We generalized this algebraic property and state it in Proposition . Whenever we encounter a useful algebraic property, we will summarize it in a proposition for us to easily use in the future. Remember, algebraic properties encode meaningful relationships first and foremost, and are not just rules to push symbols around the page.  "
},
{
  "id": "chp2sec2-9",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-9",
  "type": "Remark",
  "number": "2.2.4",
  "title": "Informal Justification.",
  "body": " Informal Justification  Informal justification is the act of explaining why a mathematical statement makes sense by appealing to meanings, such as those imbued by metaphors.  "
},
{
  "id": "chp2sec2-11",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-11",
  "type": "Remark",
  "number": "2.2.5",
  "title": "Formal Justification (a.k.a. Proving).",
  "body": " Formal Justification (a.k.a. Proving)  Formal justification (a.k.a proving) is the act of certifying the truth of a mathematical statement by weaving together a chain of definitions and previously proven conditional statements (e.g. a proposition). This should include exposition that explains how you are both invoking and using in context each definition and conditional statement.  "
},
{
  "id": "rem-assume_algebraic_props_of_reals",
  "level": "2",
  "url": "chp2sec2.html#rem-assume_algebraic_props_of_reals",
  "type": "Definition",
  "number": "2.2.6",
  "title": "Algebraic Properties of Real Numbers.",
  "body": " Algebraic Properties of Real Numbers   Real numbers satisfy the following algebraic properties.   Addition and multiplication are associative: If , then and .  Additive and multiplicative identities: The element satisfies the property: if , then . The element satisfies the property: if , then .  There exist additive and multiplicative inverses: If , then there exists an element such that . If , then there exists an element such that .  Addition and multiplication are commutative: If , then and .  Addition and multiplication are tied together with distributivity: If , then .    "
},
{
  "id": "prop_fundamental_vector_props",
  "level": "2",
  "url": "chp2sec2.html#prop_fundamental_vector_props",
  "type": "Proposition",
  "number": "2.2.7",
  "title": "Fundamental Algebraic Properties of Linear Combination.",
  "body": " Fundamental Algebraic Properties of Linear Combination   If and , then   (Associativity of addition)  ;  (Zero vector)  , where is the vector of all zero entries;  (Inverse vector)  , where is the vector whose entries are the negative of the entries of ;  (Commutativity of addition)  ;  (Scaling by 1)  ;  (Associativity of scaling)  ;  (Distributivity of scalar sum)  ;  (Distributivity of scaling across vector sum)  .    "
},
{
  "id": "chp2sec2-18",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-18",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Each of these properties can be deduced from the algebraic properties of real numbers ( ), the definition of vector scaling ( ), and the definition of vector addition ( ). I now give a formal justification of (LC1) , associativity of addition, with symbolic equalities below.     "
},
{
  "id": "chp2sec2-19",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-19",
  "type": "Remark",
  "number": "2.2.8",
  "title": "A reflection upon our first formal justification..",
  "body": " A reflection upon our first formal justification.  Please look back at and reflect upon the formal justification I just gave for additive associativity of vectors in the proof of Proposition . Observe how I start and end with the linear combination in terms of the names of the vectors. Observe how in the middle, I unpack the vectors and use their entries and assumed properties of real numbers to find appropriate algebraically equivalent expressions. Observe how I clearly state each definition or proposition I use. Observe how it is a clear story from start to finish.  "
},
{
  "id": "chp2sec2-20",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-20",
  "type": "Activity",
  "number": "2.2.9",
  "title": "Constructing Meanings of Algebraic Properties.",
  "body": " Constructing Meanings of Algebraic Properties   For each algebraic property in Proposition , pick an appropriate metaphor and provide a meaningful informal justification. Each group could be assigned a different algebraic property, and after some time preparing, groups can present to the class.   "
},
{
  "id": "chp2sec2-21",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-21",
  "type": "Activity",
  "number": "2.2.10",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   In a similar way as I did for associativity of vector addition, provide formal justifications for the remaining algebraic properties of linear combination in Proposition .   "
},
{
  "id": "chp2sec2-23",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-23",
  "type": "Activity",
  "number": "2.2.11",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .   "
},
{
  "id": "prop-scalar_sum_across_comb",
  "level": "2",
  "url": "chp2sec2.html#prop-scalar_sum_across_comb",
  "type": "Proposition",
  "number": "2.2.12",
  "title": "Distributivity of scalar sums across linear combination.",
  "body": " Distributivity of scalar sums across linear combination   If and , then   "
},
{
  "id": "chp2sec2-25",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-25",
  "type": "Activity",
  "number": "2.2.13",
  "title": "Practicing (In)formal Justification.",
  "body": " Practicing (In)formal Justification   Pick an appropriate metaphor and provide a meaningful informal justification for Proposition . Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .   "
},
{
  "id": "chp2sec3",
  "level": "1",
  "url": "chp2sec3.html",
  "type": "Lesson",
  "number": "2.3",
  "title": "Lines as Traveling Down a Path",
  "body": " Lines as Traveling Down a Path  Visualize the planes (in parametric form) in at GeoGebra ID: tk8s9eut .   In multivariable calculus, you will expand on the ideas introduced here to describe parametrized surfaces and their tangent planes .   Visualize tangent planes to surfaces in at GeoGebra ID: mmkmzuqr .   "
},
{
  "id": "chp2sec3-3",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3-3",
  "type": "Remark",
  "number": "2.3.1",
  "title": "",
  "body": " In multivariable calculus, you will expand on the ideas introduced here to describe parametrized surfaces and their tangent planes .   Visualize tangent planes to surfaces in at GeoGebra ID: mmkmzuqr .  "
},
{
  "id": "chp2sec4",
  "level": "1",
  "url": "chp2sec4.html",
  "type": "Lesson",
  "number": "2.4",
  "title": "The Set of All Linear Combination",
  "body": " The Set of All Linear Combination  a  "
},
{
  "id": "chp2sec5",
  "level": "1",
  "url": "chp2sec5.html",
  "type": "Lesson",
  "number": "2.5",
  "title": "Dependency",
  "body": " Dependency  a  "
},
{
  "id": "chp2sec6",
  "level": "1",
  "url": "chp2sec6.html",
  "type": "Lesson",
  "number": "2.6",
  "title": "Subsets That Contain Their Mixtures",
  "body": " Subsets That Contain Their Mixtures  a  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
