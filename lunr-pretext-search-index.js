var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chp0sec1",
  "level": "1",
  "url": "chp0sec1.html",
  "type": "Lesson",
  "number": "0.1",
  "title": "Note to Students",
  "body": " Note to Students  Greetings students! I hope you are as excited as I am that you will be using my Concepts of Linear Algebra (COLA) text to learn linear algebra. This text has grown organically from teaching introductory undergraduate linear algebra for many, many years. It fills what I see as a gap in good introductory linear algebra materials that centers the core concepts of linear algebra (e.g. mixture) and has concrete manipulative activities.  By using my materials, you will:    Build a deep understanding of the concepts of linear algebra ,  Develop proficiency with technology for creating visualizations, exploring concepts, and performing computations,  Move between verbal, visual, and symbolical representations of every concept, and  Reason about and model the world around you with linear algebra.    My COLA text will not have many boxed formulas, but rather will highlight concepts and develop intuition. There are dozens of activities and dynamic GeoGebra links that, if you go through them carefully, will allow you to hold every concept within your own hands and explore how they interact. Be prepared to work, play, communicate, make connections, and grow.  These materials are designed to build core understanding of the concepts of linear algebra. This is not a proof-based or programming linear algebra course - those will come later. I highly encourage you to go on and take a second (and third and fourth) course in linear algebra where you build on the foundations established in this course.  On a personal note, I truly love linear algebra. It is a rich topic that connects to so many other areas of pure and applied mathematics. It saddens me that so many students take a course in linear algebra without coming away with much more than row reduction, a task better left to the computers anyway. As I say to my students every term, You can be so much more than just a symbol pusher. I hope you will walk away from this course seeing how concepts of linear algebra are everywhere and how its ideas and tools are truly powerful. Furthermore, I hope you will build and strengthen understandings and skills that will aid you long after you have left this classroom.   Jeffrey S. Meyer   "
},
{
  "id": "chp0sec2",
  "level": "1",
  "url": "chp0sec2.html",
  "type": "Lesson",
  "number": "0.2",
  "title": "Note to Teachers",
  "body": " Note to Teachers   Why this book?  Greetings instructor. This book evolved out of my course notes for linear algebra. While there exists many excellent linear algebra textbooks, I could not find one that centered meaning-making and interwove the strands of mathematical proficiency. Over the span of many years, I built this book to support the kind of linear algebra classroom I wanted. The choice of topics and the choice of sequencing is intentional. Every chapter is filled with lessons designed with the intention of students learning impactful and productive meanings. I encourage you to use the materials in the order provided. When I teach using these materials, each lesson is comprised of three parts: a short lecture introducing new concepts, in-class activities where students investigate these new concepts, and then finally a guided classroom discussion where students share their thinking and emphasize major goals and takeaways. The lessons in this book are organized in a way to run your class in this manner.   What is in a lesson? Each lesson contains an exposition that develops the concepts, provides meanings, mathematical mental actions, in-class activities for your students, formal definitions, and dozens of GeoGebra links which can be used for either demonstrations or activities. Each lesson has a corresponding assignment on the MathME Online Problem System . Each chapter ends with concrete learning targets for your students. Every chapter ends with homework which students should carefully write up and turn in. These written problems give students opportunities to synthesize concepts from the lessons and practice important actions such as modeling, interpreting, and justifying.    I hope you find this book valuable in supporting you as you teach your students impactful and productive meanings.   Jeffrey S. Meyer   "
},
{
  "id": "chp0sec3",
  "level": "1",
  "url": "chp0sec3.html",
  "type": "Lesson",
  "number": "0.3",
  "title": "MathME Homework System",
  "body": " MathME Homework System  Accompanying this text is a collection of problems as part of the MathMe Online Problem System that can be found at . These problems have been written to support and enhance the COLA curriculum. Going forward, I will refer to these as COLA Problems. These problems follow the sequencing of the COLA curriculum and use the same symbolism. There you will find a variety of problem types (centered around distinct mental actions):    Creation and movement between representations (verbal, visual, and symbolic),  Modeling,  Interpretation,  Computation,  Reasoning about properties,  Formal justifications.     MathME System Design Framework    It is well known that linear algebra involves a lot of computations, and GeoGebra is an easy way to perform many of these computations.  It is less well known that linear algebra is rich with geometry, and to help visualize this geometry, we will make heavy use of GeoGebra. It is free and online. By setting up an account, you can save and access your worksheets anywhere. You can access GeoGebra here: .  In your browser, your default screen will have a toolbar on top, the algebra window on the left, and the graphics window on the right. In the algebra window is the input bar .   Standard GeoGebra Classic Screen Interface    If you want to try something, but do not know how, try looking it up in the documentation: .  "
},
{
  "id": "fig-mathme-design",
  "level": "2",
  "url": "chp0sec3.html#fig-mathme-design",
  "type": "Figure",
  "number": "0.3.1",
  "title": "MathME System Design Framework",
  "body": " MathME System Design Framework   "
},
{
  "id": "fig-geogebra-screen",
  "level": "2",
  "url": "chp0sec3.html#fig-geogebra-screen",
  "type": "Figure",
  "number": "0.3.2",
  "title": "Standard GeoGebra Classic Screen Interface",
  "body": " Standard GeoGebra Classic Screen Interface   "
},
{
  "id": "chp0sec4",
  "level": "1",
  "url": "chp0sec4.html",
  "type": "Lesson",
  "number": "0.4",
  "title": "Acknowledgments",
  "body": " Acknowledgments   Feedback. I would like to thank the many students who have taken my linear algebra course over the years. Your questions and your thinking have helped me to refine my teaching and to improve this book. I would also like to thank my colleagues who have read drafts of this book and provided feedback. Your suggestions have been invaluable in helping me to improve the clarity and accuracy of this book.   GeoGebra Interactives. I created all GeoGebra interactives in this book with GeoGebra®.   Images. I have used Google Gemeni Gem to generate many of the images in this book. (Please let me know if you have any comments or concerns about the Gemeni generated images.)  "
},
{
  "id": "chp1sec1",
  "level": "1",
  "url": "chp1sec1.html",
  "type": "Lesson",
  "number": "1.1",
  "title": "Vectors as Lists of Quantities",
  "body": " Vectors as Lists of Quantities  Welcome students! Before we can begin learning linear algebra, we need to establish the ontology of this book. In this book, I take the perspective that objects and situations exist external to us everywhere. These objects and situations possess many types of attributes . An attribute, together with an agreed upon unit of measurement, is a quantity .   Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.      OAQ Analysis  Take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. The first attributes that students often identify are things like length, volume, and mass of objects. See if you can identify quantities that are not these. You might be surprised by how many different types of quantities surround you at this very moment.   If I want to measure the mass of my sandwich, then I put it on a scale, select units (e.g. grams, pounds, etc), and then read off the number. If I want to measure the distance I traveled in my car, then I look at my odometer, select units (miles or kilometers), and then read off the number. If I want to measure the temperature at my home, then I look at my thermometer, select my units (Fahrenheit or Celsius), and then read off the number.  When we measure a quantity, we obtain a real number . For example, positive integers (e.g. 1, 2, 3, …), ratios of integers (e.g. ), square roots of positive integers (e.g. ), and transcendental numbers like and are all real numbers.  You do not need to know the value of a real number to reason about it. In Example , the volume of the water in my glass, measured in ounces is a number. We can reason about that volume of water without ever knowing its value. Sometimes I will name a real number with an italicized lower case letter. For example, I might name the volume of water in my glass, measured in ounces, with the letter , for volume. I denote the collection of all real numbers as and use the symbols to mean  is a real number.   Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.  For example, the Nutrition Facts on the side of my box of Sugar-Os cereal.    Discovering the macronutrients list of quantities on the side of a box of Sugar-O's.      Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.      Quantities outside  Sitting outside, I am curous what the weather will be like this afternoon. I take out my phone and look at the weather app. I see temperature, humidity, and wind speed. I also see the forecast for the rest of the day. I realize that the forecast is a list of quantities!   Weather forecast.  Weather forecast.    Today's Forcast    Hours after noon  Temperature in Fahrenheit (°F)    1  71°F    2  73°F    3  75°F    4  76°F    5  73°F    6  68°F    7  64°F    8  61°F     I scroll down a little further and see the following visual representation.   A graphical representation of the weather forecast.  A graphical representation of the weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?   Observe that in each quantitative situation above, we encountered many quantities, naturally grouped together, all at once. Lists of quantities are often united by a single object or situation. When analyzing the world around us, these lists of quantities naturally emerge, so it use useful to have language to discuss them.   Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .       Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.  Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size    A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.  Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,      Quantities outside - Revisited  An object is the air on campus. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 1 hour intervals after noonthroughout the day. The corresponding list of temperatures, below, has list-length 8.  Degrees Fahrenheit at 1pm,  Degrees Fahrenheit at 2pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 4pm  Degrees Fahrenheit at 5pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 7pm,  Degrees Fahrenheit at 8pm.    A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,  Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,      Identifying Lists of Quantities  Consider each of the following situations. Write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.  The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.     Throughout our day, we are constantly coming across vectors: nutrition facts in cereal, prices of our groceries, populations in cities, temperatures outside, internet search rankings, and even the color data for the pixels on our electronic displays. In fact, a single image on a 4K LCD display is encoded within a list of many numbers!   Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .    Day-to-Day vs. Disciplinary Vectors  So far we have focused on what I call day-to-day vectors - vectors we all see in our day-to-day lives. Of course, there are also countless disciplinary specific vectors - that is vectors that are unique to academic disciplines. Vectors naturally arise in all quantitative disciplines, including: physics, chemistry, biology, computer science, economics, and business. Throughout this course, I will introduce you to some disciplinary vectors. However, there is simply no way for me to list every possible disciplinary vector here. Rather, a major goal of this lesson is to get your mind prepared to see and reason about disciplinary vectors when you encounter them in your disciplinary contexts.   Some useful vectors are count vectors , which are vectors whose entries are counts of objects.   Leslie Vectors in Ecology  When studying a population of a species, it is often useful to distinguish between different age groups within the population. In a given year, we might measure the number of individuals in each age group and the corresponding vector would have list-length equal to the number of age groups. We will call such a vector a Leslie vector . For example, if we were to distinguish between newborns, juveniles, and adults, then the corresponding vector Leslie vector would be list-length 3. If we were to distinguish between newborns, juveniles, adults, and seniors, then the corresponding vector Leslie vector would be list-length 4. In general, if we were to distinguish between age groups, then the corresponding vector Leslie vector would be list-length .    SIR Vectors in Epidemiology  When studying a the spread of an infectious disease within a population, it is often useful to distinguish between three different types of individuals based on their infection status: susceptible, infected, and recovered. At a given moment, we might measure the number of individuals in each category. I will call such a vector an SIR vector . An SIR vector has list-length 3. The SIR model is one of many useful Compartmental models in epidemiology used to model the spread of infectious diseases. In general, if we were to distinguish between compartments, then the corresponding vector would be list-length .   A proportion vector (sometimes also called probability vector or a stochastic vector ) is a vector whose entries are proportions of a whole. Entries of a proportion vector are nonnegative and sum to 1.   Portfolio Vectors in Finance  In finance, a portfolio is a collection of financial assets such as stocks, bonds, or other investments. Upon fixing a set of assets, we can consider what proportion of our total investment is allocated to each asset. We will call such a vector a portfolio vector . If our portfolio consists of assets, the corresponding vector would be list-length . Portfolio vectors play an important role in Modern Portfolio Theory , and in particular in portfolio optimization, which deals with finding the best allocation of assets to maximize returns or minimize risk.    Movement Vectors in Population Dynamics  Consider a population of individuals distributed across different regions between which individuals are able to move. A movement vector for one region is a vector whose entries represent the proportion of individuals moving from that region to each of the other regions. If we have regions, the corresponding movement vector would be list-length .   A ranking vector is a vector whose entries are comparisons of quantities. In quantitative situations, the values of the entries themselves may not be particularly meaningful, but the comparisons between the entries are meaningful.   PageRank Vectors in Computer Science  In computer science, we often wish to express the relative importance or preference of different items, for example in information retrieval, recommendation systems, and other applications where it is necessary to order or prioritize elements based on certain criteria. In the context of search engines, ranking vectors are used to rank web pages based on their relevance to a given query. The larger the number in an entry, the more relevant the corresponding web page is. If we have web pages, the corresponding ranking vector would be list-length . One such vector is PageRank vector , which is used by Google Search to rank web pages in their search engine results.    Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) Come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.   "
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
  "type": "Quantitative Situation",
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
  "body": " OAQ Analysis  Take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. The first attributes that students often identify are things like length, volume, and mass of objects. See if you can identify quantities that are not these. You might be surprised by how many different types of quantities surround you at this very moment.  "
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
  "id": "ex-vignettes1",
  "level": "2",
  "url": "chp1sec1.html#ex-vignettes1",
  "type": "Quantitative Situation",
  "number": "1.1.3",
  "title": "Quantities in my kitchen.",
  "body": " Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.  For example, the Nutrition Facts on the side of my box of Sugar-Os cereal.    Discovering the macronutrients list of quantities on the side of a box of Sugar-O's.    "
},
{
  "id": "ex-vignettes2",
  "level": "2",
  "url": "chp1sec1.html#ex-vignettes2",
  "type": "Quantitative Situation",
  "number": "1.1.4",
  "title": "Quantities as I travel.",
  "body": " Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.    "
},
{
  "id": "ex-vignettes3",
  "level": "2",
  "url": "chp1sec1.html#ex-vignettes3",
  "type": "Quantitative Situation",
  "number": "1.1.6",
  "title": "Quantities outside.",
  "body": " Quantities outside  Sitting outside, I am curous what the weather will be like this afternoon. I take out my phone and look at the weather app. I see temperature, humidity, and wind speed. I also see the forecast for the rest of the day. I realize that the forecast is a list of quantities!   Weather forecast.  Weather forecast.    Today's Forcast    Hours after noon  Temperature in Fahrenheit (°F)    1  71°F    2  73°F    3  75°F    4  76°F    5  73°F    6  68°F    7  64°F    8  61°F     I scroll down a little further and see the following visual representation.   A graphical representation of the weather forecast.  A graphical representation of the weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?  "
},
{
  "id": "def-list-length",
  "level": "2",
  "url": "chp1sec1.html#def-list-length",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Vectors and List-Length.",
  "body": " Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .   "
},
{
  "id": "chp1sec1-14",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-14",
  "type": "Example",
  "number": "1.1.9",
  "title": "Quantities in my kitchen - Revisited.",
  "body": " Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.  Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size    A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.  Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,    "
},
{
  "id": "chp1sec1-15",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-15",
  "type": "Example",
  "number": "1.1.10",
  "title": "Quantities outside - Revisited.",
  "body": " Quantities outside - Revisited  An object is the air on campus. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 1 hour intervals after noonthroughout the day. The corresponding list of temperatures, below, has list-length 8.  Degrees Fahrenheit at 1pm,  Degrees Fahrenheit at 2pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 4pm  Degrees Fahrenheit at 5pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 7pm,  Degrees Fahrenheit at 8pm.    A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,  Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,    "
},
{
  "id": "chp1sec1-16",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-16",
  "type": "Activity",
  "number": "1.1.11",
  "title": "Identifying Lists of Quantities.",
  "body": " Identifying Lists of Quantities  Consider each of the following situations. Write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.  The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.    "
},
{
  "id": "chp1sec1-18",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-18",
  "type": "Remark",
  "number": "1.1.12",
  "title": "Meaningful vectors can have large list-length!",
  "body": " Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .  "
},
{
  "id": "chp1sec1-19",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-19",
  "type": "Remark",
  "number": "1.1.13",
  "title": "Day-to-Day vs. Disciplinary Vectors.",
  "body": " Day-to-Day vs. Disciplinary Vectors  So far we have focused on what I call day-to-day vectors - vectors we all see in our day-to-day lives. Of course, there are also countless disciplinary specific vectors - that is vectors that are unique to academic disciplines. Vectors naturally arise in all quantitative disciplines, including: physics, chemistry, biology, computer science, economics, and business. Throughout this course, I will introduce you to some disciplinary vectors. However, there is simply no way for me to list every possible disciplinary vector here. Rather, a major goal of this lesson is to get your mind prepared to see and reason about disciplinary vectors when you encounter them in your disciplinary contexts.  "
},
{
  "id": "qs-ecology-vectors",
  "level": "2",
  "url": "chp1sec1.html#qs-ecology-vectors",
  "type": "Quantitative Situation",
  "number": "1.1.14",
  "title": "Leslie Vectors in Ecology.",
  "body": " Leslie Vectors in Ecology  When studying a population of a species, it is often useful to distinguish between different age groups within the population. In a given year, we might measure the number of individuals in each age group and the corresponding vector would have list-length equal to the number of age groups. We will call such a vector a Leslie vector . For example, if we were to distinguish between newborns, juveniles, and adults, then the corresponding vector Leslie vector would be list-length 3. If we were to distinguish between newborns, juveniles, adults, and seniors, then the corresponding vector Leslie vector would be list-length 4. In general, if we were to distinguish between age groups, then the corresponding vector Leslie vector would be list-length .  "
},
{
  "id": "qs-epidemiology-vectors",
  "level": "2",
  "url": "chp1sec1.html#qs-epidemiology-vectors",
  "type": "Quantitative Situation",
  "number": "1.1.15",
  "title": "SIR Vectors in Epidemiology.",
  "body": " SIR Vectors in Epidemiology  When studying a the spread of an infectious disease within a population, it is often useful to distinguish between three different types of individuals based on their infection status: susceptible, infected, and recovered. At a given moment, we might measure the number of individuals in each category. I will call such a vector an SIR vector . An SIR vector has list-length 3. The SIR model is one of many useful Compartmental models in epidemiology used to model the spread of infectious diseases. In general, if we were to distinguish between compartments, then the corresponding vector would be list-length .  "
},
{
  "id": "qs-finance-vectors",
  "level": "2",
  "url": "chp1sec1.html#qs-finance-vectors",
  "type": "Quantitative Situation",
  "number": "1.1.16",
  "title": "Portfolio Vectors in Finance.",
  "body": " Portfolio Vectors in Finance  In finance, a portfolio is a collection of financial assets such as stocks, bonds, or other investments. Upon fixing a set of assets, we can consider what proportion of our total investment is allocated to each asset. We will call such a vector a portfolio vector . If our portfolio consists of assets, the corresponding vector would be list-length . Portfolio vectors play an important role in Modern Portfolio Theory , and in particular in portfolio optimization, which deals with finding the best allocation of assets to maximize returns or minimize risk.  "
},
{
  "id": "qs-movement-vectors",
  "level": "2",
  "url": "chp1sec1.html#qs-movement-vectors",
  "type": "Quantitative Situation",
  "number": "1.1.17",
  "title": "Movement Vectors in Population Dynamics.",
  "body": " Movement Vectors in Population Dynamics  Consider a population of individuals distributed across different regions between which individuals are able to move. A movement vector for one region is a vector whose entries represent the proportion of individuals moving from that region to each of the other regions. If we have regions, the corresponding movement vector would be list-length .  "
},
{
  "id": "qs-ranking-vectors",
  "level": "2",
  "url": "chp1sec1.html#qs-ranking-vectors",
  "type": "Quantitative Situation",
  "number": "1.1.18",
  "title": "PageRank Vectors in Computer Science.",
  "body": " PageRank Vectors in Computer Science  In computer science, we often wish to express the relative importance or preference of different items, for example in information retrieval, recommendation systems, and other applications where it is necessary to order or prioritize elements based on certain criteria. In the context of search engines, ranking vectors are used to rank web pages based on their relevance to a given query. The larger the number in an entry, the more relevant the corresponding web page is. If we have web pages, the corresponding ranking vector would be list-length . One such vector is PageRank vector , which is used by Google Search to rank web pages in their search engine results.  "
},
{
  "id": "chp1sec1-28",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-28",
  "type": "Activity",
  "number": "1.1.19",
  "title": "Constructing Feature Vectors (Machine Learning).",
  "body": " Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) Come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.  "
},
{
  "id": "chp1sec2",
  "level": "1",
  "url": "chp1sec2.html",
  "type": "Lesson",
  "number": "1.2",
  "title": "Symbolizing Vectors",
  "body": " Symbolizing Vectors  Let's begin this lesson by returning to cereal. How can I efficiently communicate lists of quantities such as the nutrition facts for one serving size of cereal? It is desirable to do so without writing having to write out long lists like those in ? A core mathematical act is to create and use symbols to organize our thoughts and communicate our reasoning.   Mental Action - Symbolizing   Symbolizing is the act of associating a concept in our minds with a symbol on the page. Note that we first need a concept in our minds! For example, the concept of five can be symbolized 5, or V (Roman numerals), or 101 (binary). Depending on the context, we choose the symbolization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.     A cartoon depicting a learner realizing that the concept of five can be symbolized in many ways: the alphanumeric symbol \"5\", the Roman numeral \"V\", five dashes, or binary \"101\".    Let's explore some productive ways to symbolize vectors by focusing first on the vector of nutrition facts for a single serving size of Sugar-Os.  To begin, we may concretely symbolize the nutrient facts with a vertical column of all the numbers associated with the quantities. In column form, I typically do not write down the units, but I remember they are still there. Each number in the column is an entry This way of symbolizing this vector is useful because I can efficiently see all the quantities and I can use this for numerical computations.  However, columns can be cumbersome, and in certain situations, I may not need to know the nutrient values to reason about them or to talk about them. For example, I can talk to you about Sugar-Os without telling you explicitly the nutrient facts. Just as we have a name for cereal, it is useful to also have a name for a vector. I will always name vectors with a single, lowercase bold letter. In this case, I will choose to help me remember this vector comes from S ugar-Os.    Symbolizing vectors in two ways: column and name .     Symbolizing Vectors   Writing names. I will always name vectors with a single, lowercase bold letter. When typing, please do the same. When writing by hand, bold font is impractical, so please always use the notation of a right-pointing arrow over the symbol: .  Relating the symbols for name and entries. I will usually use the same letter for the vector name as for the vector entries, except entries will not be bold and will have subscripts to denote their position in the list. For example, if I want to write the entries of a list-length 3 vector named , I will usually write . In Figure \\ref{figure:symbolizing}, I denote entries of by , where , and for instance, since the third entry has value 31, I would write .  Why a column and not a row? For reasons that will become clearer later when we discuss matrix multiplication as transformation in Lesson \\ref{lesson:matrix_transformation}, it is best to write entries in a vertical column instead of in a horizontal row.  Different Books, Different Notations. You may encounter contexts where people write their vector entries in different ways, for example horizontally, and maybe with parentheses or angle-brackets instead of brackets, e.g. , , or . For your work with this text, please use vertical column notation when writing a vector with its entries.  Consistency is important. Consistency of notation brings clarity to your writing. Please follow the above notational guidelines and always be consistent with how you write your vector names and columns.    When we move between a vector's name and a vector's column of entries, I will say we are unpacking or repacking the vector. Think of the name as a backpack , and the entries as its contents .   Discussion      Suppose . When is it advantageous to work with its name ? When is it advantageous to work with the column of its entries ?    Suppose you have a vector with name , but you do not know its entries. In what ways can you still work with ? In this context, what are the limitations on working with ?        Adjacency Vectors in Combinatorics  A (combinatorial) graph is a combinatorial structure consisting of vertices and edges between vertices. Graphs are used to model the relationships between countless phenomena, from physical systems to social networks to the internet itself. Given a vertex in the graph, we may wish to understand its connections to other vertices. We say that two vertices are adjacent if there is an edge connecting them. Given a vertex in the graph, its adjacency vector is the vector whose entry is 1 if vertex is adjacent to vertex , and 0 otherwise.  For example, in the graph below, vertex is adjacent to vertices and , but not to vertex . Hence, the adjacency vector for vertex is .    A graph with four vertices.      Mental Action - Interpreting Symbolism   Interpreting symbolism is the act of taking a symbolic expression and understanding it in the context of a specific situation. This is a process that happens in our minds, but we often will need to then clearly communicate our interpretation to others.   Interpreting symbols is highly dependent upon the context in which we are working. Consider for example, the symbols . In the context of number of people, this can be interpreted as: the number of people when you combine a group of 5 people with a group of 3 people. In the context of minutes elapsed since lunch, this is interpreted as 5 minutes elapsed and then 3 more minutes elapsed.    Interpretation of Vectors in Context   Consider the vector . In each of the following contexts, explain in complete sentences a meaning of this vector. If there is ambiguity in the context, explain and provide potential clarification.   Macronutrients (in grams) for a cereal. (For a reminder about macronutrients, see .)    Directions (in feet) to reach a book on your bookshelf.    Prices (in $) of grocery items. In which of these contexts could the vector make sense?        Set Notation  Let's return to the context of food. Each food has its own macronutrient list. As you think about all the different foods you encounter each day, imagine the thousands upon thousands of macronutrient lists that there must exist. It is useful for us to introduce symbols to denote the collection of all possible lists of a given list-length. We will do so using the language and notation of sets.  The language and notation of sets is foundational in mathematics. In the rest of this course, we will frequently use set notation to compactly represent our thoughts.A set is a collection of objects, which we call elements of that set.  Just like vectors, we can symbolize sets with either their name or with the collection of its objects, which we group together with \"curly brackets\" and . For example, in the RGB color model, the three primary colors are: red, green, and blue. I could denote this set of primary colors with the collection: \\{red, green, blue\\} or I could name it, say with the letter (for color), in which case I would write   A standard way to write a set of all elements satisfying some condition is . This is called set-builder notation . The vertical bar here is understood to represent the words \"such that\" and I read this aloud as \"the set of all elements such that .\" This set notation is a particularly important way to symbolize sets that have infinitely many elements.   Vector Space   If is a positive integer, then the set of all list-length vectors is the vector space  (read \"R m\"). In symbols, using set notation, I write as Read aloud, I say \"R m is the set of all vectors v such that v is a vector of list-length m.\" The come from eal numbers, and reminds us that the entries of the lists are real numbers.    I will frequently use two other set symbols: and .  The symbol \" \" means is an element of . The symbol describes a relationship between a set and individual elements of that set. So the expression means that is an element of the set of , and hence is a list-length 17 vector. A slash through the symbol negates the symbol. So would mean that is not a list-length 34 vector.  The symbol \" \" means is a subset of . The symbol describes a relationship between a set and subsets of that set. So the expression means that is an subset of the set , and hence is collection of list-length 17 vectors. A slash through the symbol negates the symbol. So would mean that is not a collection of list-length 34 vectors.  Throughout the course, I will use both and frequently and move between them. For example, I may write either or to say that through are list-length 12 vectors.   Interpretation of Set Notation   Interpret each of the following expressions involving vector names ands set notations. Explain their meaning.                                To conclude this lesson, keep in mind that symbols are meaningless without the associated concepts in our minds. It was a pedagogical decision to first focus on constructing the concept of vectors in and then afterwards, introduce symbolism to help us reason about, and communicate our thinking about, vectors. To be able to successfully communicate with others, you will need to both symbolize vectors (which other can then interpret) and interpret the symbolism of others.    A cartoon depicting a the communication of an idea through the sequence of symbolizing and then interpreting.    "
},
{
  "id": "mentalaction-symbolizing",
  "level": "2",
  "url": "chp1sec2.html#mentalaction-symbolizing",
  "type": "Note",
  "number": "1.2.1",
  "title": "Mental Action - Symbolizing.",
  "body": " Mental Action - Symbolizing   Symbolizing is the act of associating a concept in our minds with a symbol on the page. Note that we first need a concept in our minds! For example, the concept of five can be symbolized 5, or V (Roman numerals), or 101 (binary). Depending on the context, we choose the symbolization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.  "
},
{
  "id": "remark-symbolizing_vectors",
  "level": "2",
  "url": "chp1sec2.html#remark-symbolizing_vectors",
  "type": "Remark",
  "number": "1.2.2",
  "title": "Symbolizing Vectors.",
  "body": " Symbolizing Vectors   Writing names. I will always name vectors with a single, lowercase bold letter. When typing, please do the same. When writing by hand, bold font is impractical, so please always use the notation of a right-pointing arrow over the symbol: .  Relating the symbols for name and entries. I will usually use the same letter for the vector name as for the vector entries, except entries will not be bold and will have subscripts to denote their position in the list. For example, if I want to write the entries of a list-length 3 vector named , I will usually write . In Figure \\ref{figure:symbolizing}, I denote entries of by , where , and for instance, since the third entry has value 31, I would write .  Why a column and not a row? For reasons that will become clearer later when we discuss matrix multiplication as transformation in Lesson \\ref{lesson:matrix_transformation}, it is best to write entries in a vertical column instead of in a horizontal row.  Different Books, Different Notations. You may encounter contexts where people write their vector entries in different ways, for example horizontally, and maybe with parentheses or angle-brackets instead of brackets, e.g. , , or . For your work with this text, please use vertical column notation when writing a vector with its entries.  Consistency is important. Consistency of notation brings clarity to your writing. Please follow the above notational guidelines and always be consistent with how you write your vector names and columns.   "
},
{
  "id": "activity-vectors-name_and_column",
  "level": "2",
  "url": "chp1sec2.html#activity-vectors-name_and_column",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Discussion.",
  "body": " Discussion      Suppose . When is it advantageous to work with its name ? When is it advantageous to work with the column of its entries ?    Suppose you have a vector with name , but you do not know its entries. In what ways can you still work with ? In this context, what are the limitations on working with ?      "
},
{
  "id": "qs-adjacency-vectors",
  "level": "2",
  "url": "chp1sec2.html#qs-adjacency-vectors",
  "type": "Quantitative Situation",
  "number": "1.2.4",
  "title": "Adjacency Vectors in Combinatorics.",
  "body": " Adjacency Vectors in Combinatorics  A (combinatorial) graph is a combinatorial structure consisting of vertices and edges between vertices. Graphs are used to model the relationships between countless phenomena, from physical systems to social networks to the internet itself. Given a vertex in the graph, we may wish to understand its connections to other vertices. We say that two vertices are adjacent if there is an edge connecting them. Given a vertex in the graph, its adjacency vector is the vector whose entry is 1 if vertex is adjacent to vertex , and 0 otherwise.  For example, in the graph below, vertex is adjacent to vertices and , but not to vertex . Hence, the adjacency vector for vertex is .    A graph with four vertices.    "
},
{
  "id": "mentalaction-interpreting_symbols",
  "level": "2",
  "url": "chp1sec2.html#mentalaction-interpreting_symbols",
  "type": "Note",
  "number": "1.2.5",
  "title": "Mental Action - Interpreting Symbolism.",
  "body": " Mental Action - Interpreting Symbolism   Interpreting symbolism is the act of taking a symbolic expression and understanding it in the context of a specific situation. This is a process that happens in our minds, but we often will need to then clearly communicate our interpretation to others.  "
},
{
  "id": "activity-interpretting_vectors",
  "level": "2",
  "url": "chp1sec2.html#activity-interpretting_vectors",
  "type": "Activity",
  "number": "1.2.6",
  "title": "Interpretation of Vectors in Context.",
  "body": " Interpretation of Vectors in Context   Consider the vector . In each of the following contexts, explain in complete sentences a meaning of this vector. If there is ambiguity in the context, explain and provide potential clarification.   Macronutrients (in grams) for a cereal. (For a reminder about macronutrients, see .)    Directions (in feet) to reach a book on your bookshelf.    Prices (in $) of grocery items. In which of these contexts could the vector make sense?      "
},
{
  "id": "chp1sec2subsec2-5",
  "level": "2",
  "url": "chp1sec2.html#chp1sec2subsec2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set-builder notation "
},
{
  "id": "def-vector_space",
  "level": "2",
  "url": "chp1sec2.html#def-vector_space",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Vector Space <span class=\"process-math\">\\(\\R^m\\)<\/span>.",
  "body": " Vector Space   If is a positive integer, then the set of all list-length vectors is the vector space  (read \"R m\"). In symbols, using set notation, I write as Read aloud, I say \"R m is the set of all vectors v such that v is a vector of list-length m.\" The come from eal numbers, and reminds us that the entries of the lists are real numbers.   "
},
{
  "id": "activity-interpretting_set_notation",
  "level": "2",
  "url": "chp1sec2.html#activity-interpretting_set_notation",
  "type": "Activity",
  "number": "1.2.8",
  "title": "Interpretation of Set Notation.",
  "body": " Interpretation of Set Notation   Interpret each of the following expressions involving vector names ands set notations. Explain their meaning.                              "
},
{
  "id": "chp1sec3",
  "level": "1",
  "url": "chp1sec3.html",
  "type": "Lesson",
  "number": "1.3",
  "title": "Visualizing Vectors",
  "body": " Visualizing Vectors  What images do you think of when you picture a serving size of cereal? What images do you think of when you picture a vector?   Mental Action - Visualizing   Visualizing is the act of associating a concept in our minds with images. For example, the concept of five can be visualized with an image of 5 objects or with the image of 5 on the number line. Depending on the context, we choose the visualization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.     A cartoon depicting a learner realizing that the concept of five can be visualized in many ways: the symbol \"5\", five fingers, a group of five objects such as apples or sides of a polygon, or five units on a number line.    Vectors are lists of quantities. They do not inherently come with any particular geometry or visualization. However, there are a few powerful visualizations that I will explicitly identify now to help you in your reasoning and communication.   Vectors as Points and Arrows  In geometric visualizations, we view the entries of a vector as spatial coordinates.  This representation is most easily seen for the Cartesian plane (a.k.a. Cartesian 2-space ). Here, a list of two numbers describes points on the plane, where the first number gives your horizontal position, and the second number gives your vertical position. Given a vector , sometimes it is productive to think of it as a point in the Cartesian plane, and sometimes it is productive to think of it as the arrow originating at the origin  (its tail ) and going to the point (its tip ).    Visualizing a list-length 2 vector in Cartesian 2-space in two ways: point and arrow .    Similarly, we may visualize list-length 3 vectors in Cartesian 3-space . Here, a list of three numbers describes points in 3-space, where the first number gives your horizontal position, the second number gives your depth, and the third number gives your vertical position. Once again, given a vector , you may visualize it as a point in the Cartesian 3-space, and you may visualize it as an arrow originating at the origin  (its tail ) and going to the point (its tip ).    Visualizing a list-length 3 vector in Cartesian 3-space in two ways: point and arrow .    The zero vector  is the list of all zeros (of list-length ). When visualized as a geometric point, it is the origin . If a vector is not the zero vector, it is a nonzero vector. Note, nonzero vectors can have some zero entries, they just cannot have all zero entries.   Right-Hand Rule  In 3-space, we can use the right-hand rule to determine the orientation of the axes. If you point your right pointer finger in the direction of the positive -axis, and your right middle finger in the direction of the positive -axis, then your right thumb will point in the direction of the positive -axis.    A cartoon depicting a learner realizing how the right-hand rule works in 3-space.       Vectors as Bar Graphs  In bar graph visualizations, we often view the entries of a vector as temporal measurements.  This visualization allows us to visualize lists of any length. If is a vector with list-length , then we can visualize as a single bar graph (or signal) in the Cartesian plane, where for the entry, , plot the vertical segment from to . The bar graph is the entirety of all the vertical segments.    Visualizing a list-length 5 vector in Cartesian 2-space as a bar graph .    For vectors where the entries represent quantities taken at different times, or quantities all measured with the same units, the bar graph representation is very useful.  In we already saw bar graph representations come up naturally in temperature forecasts. We could also use bar graph representations for the macronutrients vector or for population by block. We shall see later many more important uses for this representation, such as in digital signal processing.   Signal Vectors in Audio Engineering  When we record a sound, we are measuring the air pressure at a microphone over time. The air pressure is measured in units of Pascals (Pa), and the measurements are taken at regular intervals of time. If we take measurements, then we can represent the sound as a vector , where the entry of is the air pressure measured at time . We can this a signal vector . We can visualize this vector as a bar graph, where for each , we plot the vertical segment from to .  For example, sampling displacement modeled by the cosine function at 5 equally spaced points in the interval gives the vector . The bar graph representation of this vector is shown below.      Comparing vector visualizations: arrow and bar graph     Discussion   Consider each of the following situations. Which visual representation is most meaningful in that context? Draw and label each visualization.    - The population of the major city Mathopolis and its adjacent suburb Vector Valley, measured in hundreds of thousands of people.     - The distances east and north that the grocery store is from my home, measured in hundreds of feet.     - The cost, in dollars, of a pack of chicken breasts and milk at the grocery store.        Interpretation   Consider the vector .   In complete sentences, explain the meaning of this vector in the context of macronutrients (in grams) for a cereal.    In complete sentences, explain the meaning of this vector in the context of directions (in feet) to reach a book on your bookshelf.    Carefully sketch and label this vector as both a point and an arrow in Cartesian 3-space.    Carefully sketch and label this vector as a bar graph in Cartesian 2-space.       To conclude this lesson, keep in mind that there are many productive visualizations (points, arrows, and bar graphs) and it is up to use to both decide to use the most appropriate one in your context.  "
},
{
  "id": "mentalaction-visualizing",
  "level": "2",
  "url": "chp1sec3.html#mentalaction-visualizing",
  "type": "Note",
  "number": "1.3.1",
  "title": "Mental Action - Visualizing.",
  "body": " Mental Action - Visualizing   Visualizing is the act of associating a concept in our minds with images. For example, the concept of five can be visualized with an image of 5 objects or with the image of 5 on the number line. Depending on the context, we choose the visualization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.  "
},
{
  "id": "chp1sec3subsec1-8",
  "level": "2",
  "url": "chp1sec3.html#chp1sec3subsec1-8",
  "type": "Remark",
  "number": "1.3.2",
  "title": "Right-Hand Rule.",
  "body": " Right-Hand Rule  In 3-space, we can use the right-hand rule to determine the orientation of the axes. If you point your right pointer finger in the direction of the positive -axis, and your right middle finger in the direction of the positive -axis, then your right thumb will point in the direction of the positive -axis.    A cartoon depicting a learner realizing how the right-hand rule works in 3-space.    "
},
{
  "id": "qs-signal-vectors",
  "level": "2",
  "url": "chp1sec3.html#qs-signal-vectors",
  "type": "Quantitative Situation",
  "number": "1.3.3",
  "title": "Signal Vectors in Audio Engineering.",
  "body": " Signal Vectors in Audio Engineering  When we record a sound, we are measuring the air pressure at a microphone over time. The air pressure is measured in units of Pascals (Pa), and the measurements are taken at regular intervals of time. If we take measurements, then we can represent the sound as a vector , where the entry of is the air pressure measured at time . We can this a signal vector . We can visualize this vector as a bar graph, where for each , we plot the vertical segment from to .  For example, sampling displacement modeled by the cosine function at 5 equally spaced points in the interval gives the vector . The bar graph representation of this vector is shown below.   "
},
{
  "id": "figure-geogebra-arrow_vs_bar",
  "level": "2",
  "url": "chp1sec3.html#figure-geogebra-arrow_vs_bar",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " Comparing vector visualizations: arrow and bar graph   "
},
{
  "id": "activity-vectors-visualize",
  "level": "2",
  "url": "chp1sec3.html#activity-vectors-visualize",
  "type": "Activity",
  "number": "1.3.5",
  "title": "Discussion.",
  "body": " Discussion   Consider each of the following situations. Which visual representation is most meaningful in that context? Draw and label each visualization.    - The population of the major city Mathopolis and its adjacent suburb Vector Valley, measured in hundreds of thousands of people.     - The distances east and north that the grocery store is from my home, measured in hundreds of feet.     - The cost, in dollars, of a pack of chicken breasts and milk at the grocery store.      "
},
{
  "id": "activity-vectors-interpret_visualization",
  "level": "2",
  "url": "chp1sec3.html#activity-vectors-interpret_visualization",
  "type": "Activity",
  "number": "1.3.6",
  "title": "Interpretation.",
  "body": " Interpretation   Consider the vector .   In complete sentences, explain the meaning of this vector in the context of macronutrients (in grams) for a cereal.    In complete sentences, explain the meaning of this vector in the context of directions (in feet) to reach a book on your bookshelf.    Carefully sketch and label this vector as both a point and an arrow in Cartesian 3-space.    Carefully sketch and label this vector as a bar graph in Cartesian 2-space.      "
},
{
  "id": "chp2sec1",
  "level": "1",
  "url": "chp2sec1.html",
  "type": "Lesson",
  "number": "2.1",
  "title": "Linear Combinations as Mixture",
  "body": " Linear Combinations as Mixture  In this lesson, we investigate, conceptualize, and formalize the notion of mixing vectors.   Pouring Cereal  I love cereal. It can be a great way to start the day. I have two cereal boxes on my shelf: Sugar-Os, which is very tasty (but not so nutritious), and Vitaflakes, which is very nutritious (but not so tasty). When I look at the side of their boxes, I see their nutrition facts.    A cartoon depicting mixing cereal from both a box of Sugar-O's and Vitaflakes.    When I make my daily breakfast, I mix my cereals. Today, I mixed half a serving of Sugar-Os with a third of a serving of Vitaflakes. What are the nutrition facts for my mixture?    Travel Instructions  My neighborhood's streets are parallel and intersect at right angles, but they are not aligned with the north-south and east-west cardinal directions. My neighborhood map is depicted below, where the distance between each adjacent gridline is 100ft. The blue streets go from the southwest to the northeast, and each blue block measures 300ft east and 400ft north. The red streets travel from the northeast to the southeast, and each red block measures 400ft east and 300ft south.    A map of the blocks near my home.    My GPS tells me that my grocery store is 500ft east of me and 1500ft north of me, but of course, I can not get there traveling 500ft due east and 1500ft due north, as that would require I cut straight through other people's homes. Instead, I see I can travel 3 blue blocks northeast and 1 red block northwest, I get to the grocery store. Could I have gotten there another way?  I need to go to my bank. My bank is not too far away, and in fact my GPS tells me it is only 2300ft east and 1400ft north of me. I wonder, how can I describe my path there in terms of blue blocks and red blocks?    Averaging Temperature  I want to plan out my clothing for the week so pull up the weather app on my phone. I see the forecasts for each of the next two days, with temperatures measured in degrees Fahrenheit, is:   Today's Forcast    Hours after midnight  Temperature Today in Fahrenheit (°F)  Temperature Tomorrow in Fahrenheit (°F)    0  42°F  44°F    3  39°F  41°F    6  38°F  40°F    9  48°F  52°F    12  56°F  64°F    15  59°F  67°F    18  53°F  61°F    21  46°F  50°F     Interesting! Tomorrow will be a warmer day. The app then gives the average forecast over the next two days.  The weather app plots the forecast for today, tomorrow, and the 2-day average below.    Two days of temperature forecasts and their average.     One of the most fundamental ideas associated to (lists of) quantities is mixing (lists of) quantities. In ), I pour some of one cereal and then some of another cereal. In ( ), I travel in one direction, and then in another direction. In ( ), I average each of my daily forecasts.   We observe two types of mixtures of quantities: those arising from a physical mixture of empirical objects (e.g. pouring cereals) and those arising from a conceptual mixture of quantities (e.g. averages of air temperatures). Mixture is a core idea that will be central to everything going forward   Where else do you see mixing?   Think back to all the different lists of quantities you found in the world around you. In which of those contexts was it meaningful to mix those vectors? Write down the contexts, lists of quantities, and what it means to mix them.    The idea of mixing vectors is made mathematically precise through two natural operations: scaling and addition. To reason about them verbally, I will usually discuss them with the metaphor of servings of boxes of cereal, where a vector represents the nutrients of one serving size of a given cereal. However, sometimes I will draw upon other metaphors, such as travel. To visualize them, I will most frequently use the geometric representation. I am about to give our first formal mathematical definition.   What is a mathematical definition?  Mathematical definitions are our attempt to formalize some mathematical object or mathematical action. It introduces precise language and symbols that help us reason about and communicate mathematics. It is a pedagogical decision that I will always introduce a concept informally first, drawing on your experiences. Afterwards I will introduce formalism, with the hope that you will have a sense of their informal meaning and the need for the formalism. In what follows, you should seek to know both the precise formal statement of definitions as well as their informal meaning and the context for their applicability.    Vector Scaling   If and , then is the vector  scaled by .     Meanings of Vector Scaling  If and , then the scaled vector has each of the following meanings:  Verbally. I fill my bowl with many serving sizes of my cereal.  Visually. Hold the arrow on both ends. Keep the tail (origin) fixed as you stretch the arrow by a scaling factor of . See Figure below.  Symbolically. The scaled vector has name and when we unpack it, its entries are obtained by scaling each entry of by .      Visualizing vector scaling via arrows      Visualize vector scaling as:  stretching arrows at GeoGebra ID: D5ZYkYQq  amplifying signals at GeoGebra ID: cczk5gzj  adjusting the volume of a sound at GeoGebra ID: awejqq5u      Absolute Length vs Relative Length  When one thinks of a vector as an arrow, it is common to think of it as having both a direction and absolute length . At this time, we will not be using the notion of absolute length, rather this will be developed and made precise in later chapters. Scaling, on the other hand, encodes relative length - for example, if , then is two times as long as . In the lessons to come, we will frequently measure vectors in units of other vectors via scaling.    Vector Addition   If , then is their vector sum . The operation of forming their vector sum is vector addition .     Meanings of Vector Addition  If , then the vector sum has each of the following meanings:  Verbally. I fill my bowl with one serving size of each of my cereals.  Visually. Translate the -arrow to start at the tip of -arrow. Similarly, translate the -arrow to start at the tip of the -arrow. This will form a tip-to-tail parallelogram and the arrow for will be the diagonal of this parallelogram. We call this visualization tip-to-tail addition.  Symbolically. The vectors sum has name and when we unpack it, its entries are obtained by adding the entries in the corresponding positions, which we call entry-by-entry addition.      Visualizing vector addition via arrows      Visualize vector addition via tip-to-tail parallelograms at GeoGebra ID: ADsHPgV4 and superposition of signals at GeoGebra ID: ttny3hjk .   Naturally, you will want to do both, scale and add vectors. Scaling, then adding, defines a fundamental mixing operation among vector quantities: linear combination.   Linear Combination   If is a collection of vectors and a collection of real numbers, then the vector is a linear combination of the vectors in .     The Mixture Parallelogram  If and , then the linear combination may be visualized with its mixture parallelogram with sides determined by and .  For instance, the mixture of 2 servings of and 1.5 servings of is encoded in the mixture parallelogram below.    Visualizing linear combination via the mixture parallelogram.      Explorations with The Mixture Parallelogram Tool   In this activity, you will engage with some of the core mixture questions of this course. Build intuition now and revisit later. You will use the Mixture Parallelogram Tool to visualize, explore, and understand mixtures of vectors in .  A pre-made version of the Mixture Parallelogram Tool can be found at GeoGebra ID: qAC4TXwy .  Finding serving sizes to create a given mixture. By playing with the sliders, find the serving sizes and so that .  Analyzing the set of all possible mixtures. Move the vectors and , and sliders and , to analyze the truth of each of the following claims. In complete sentences, and using your mixture parallelogram, justify why the claim seems true or seems false.   Every vector in the plane is a linear combination of and .  Every vector in the plane is a linear combination of and .   Holding one slider constant. Slide to and keep it there for the moment. Look at the tip of your mixture vector. Right click on the point and select \"trace\" and then start sliding around (while not changing ). What shape is created by the collection of tip points? Reset and try this again by fixing and sliding .       Symbolizing Linear Combinations   In each of the following situations, identify and name the relevant vectors (including the appropriate list-length) and then write an algebraic expression representing the appropriate mixture.   If every month, you record your monthly expenses by type (groceries, gas, utilities, tuition, etc.) in dollars, then symbolize your total expenses for the past year.  If again you record your monthly expenses, and given that annual inflation is currently roughly , symbolize what you expect to be your monthly expenses in one year.  If I have two cereals such that 1.5 servings of the first cereal has the exact same nutrition facts as 0.75 servings of the second cereal, then symbolize an equation relating the two serving sizes.      Practice Interpreting Symbolism   Interpret the meaning of the symbolic expression in each of the following situations.   You have a recipe for cookies that uses five ingredients. If are the nutrition facts for a single serving size of each of these five ingredient and the recipe calls for servings of each ingredient, respectively, then interpret the meaning of the linear combination  If is the vector of hourly temperatures in , , measured at your home on day of last week, then interpret     Given a set of distinct vectors , we may consider a linear combination . This linear combination is a mathematical object. We can ask how \"big\" this object is in units of each . This is a mathematical attribute of the linear combination. Finally, we can agree to measure the linear combinations in units of , which is the value . Collecting these quantities, we now associate to each such linear combination a new vector: its servings vector .   Servings Vector   If are distinct vectors with a fixed order and are scalars, then the linear combination has servings vector  .     The list-length of a servings vector is the number of vectors the collection . Also, note that the order of elements in matters! A different ordering of elements in would result in a different servings vector.   Practice Forming Servings Vectors    Form the servings vector for each of the following linear combinations:               Did we need to know the list-length of the vectors above to form the servings vectors?  Suppose we are forming a linear combination of that has servings vector . What is the linear combination?      Problems    Let denote a graph with vertices . A list-length vector can be understood as a function on the vertices of . Explain. The  indicator vector of is the vector whose entry is 1 and all other entries are 0. Explain how any function on the vertices of can be expressed as a linear combination of the indicator vectors of .      There is a city called Mathopolis and an adjacent suburb called Vector Valley. For city X, its Mathopolis-Vector Valley probability vector is the list-length 2 vector:  Probability a person in X will be in Mathopolis next year  Probability a person in X will be in Vector Valley next year.  Each year about 3% of Mathopolis's population moves to Vector Valley, and about 5% of Vector Valley's population moves to Mathopolis. (This is an unusual place - there are no births, no deaths, and there is no travel to or from other places.)   What is the Mathopolis-Vector Valley probability vector for Mathopolis?    What is the Mathopolis-Vector Valley probability vector for Vector Valley?    If the current populations of Mathopolis and Vector Valley are million and million, respectively, express the population vector of Mathopolis and Vector Valley next year as a linear combination of probability vectors and in terms of and .    If the current populations of Mathopolis and Vector Valley are 7 million and 1 million, respectively, what will be the population vector of Mathopolis and Vector Valley next year?        "
},
{
  "id": "vig-pouring-cereal",
  "level": "2",
  "url": "chp2sec1.html#vig-pouring-cereal",
  "type": "Quantitative Situation",
  "number": "2.1.1",
  "title": "Pouring Cereal.",
  "body": " Pouring Cereal  I love cereal. It can be a great way to start the day. I have two cereal boxes on my shelf: Sugar-Os, which is very tasty (but not so nutritious), and Vitaflakes, which is very nutritious (but not so tasty). When I look at the side of their boxes, I see their nutrition facts.    A cartoon depicting mixing cereal from both a box of Sugar-O's and Vitaflakes.    When I make my daily breakfast, I mix my cereals. Today, I mixed half a serving of Sugar-Os with a third of a serving of Vitaflakes. What are the nutrition facts for my mixture?  "
},
{
  "id": "vig-travel-instructions",
  "level": "2",
  "url": "chp2sec1.html#vig-travel-instructions",
  "type": "Quantitative Situation",
  "number": "2.1.2",
  "title": "Travel Instructions.",
  "body": " Travel Instructions  My neighborhood's streets are parallel and intersect at right angles, but they are not aligned with the north-south and east-west cardinal directions. My neighborhood map is depicted below, where the distance between each adjacent gridline is 100ft. The blue streets go from the southwest to the northeast, and each blue block measures 300ft east and 400ft north. The red streets travel from the northeast to the southeast, and each red block measures 400ft east and 300ft south.    A map of the blocks near my home.    My GPS tells me that my grocery store is 500ft east of me and 1500ft north of me, but of course, I can not get there traveling 500ft due east and 1500ft due north, as that would require I cut straight through other people's homes. Instead, I see I can travel 3 blue blocks northeast and 1 red block northwest, I get to the grocery store. Could I have gotten there another way?  I need to go to my bank. My bank is not too far away, and in fact my GPS tells me it is only 2300ft east and 1400ft north of me. I wonder, how can I describe my path there in terms of blue blocks and red blocks?  "
},
{
  "id": "vig-averaging-temperature",
  "level": "2",
  "url": "chp2sec1.html#vig-averaging-temperature",
  "type": "Quantitative Situation",
  "number": "2.1.3",
  "title": "Averaging Temperature.",
  "body": " Averaging Temperature  I want to plan out my clothing for the week so pull up the weather app on my phone. I see the forecasts for each of the next two days, with temperatures measured in degrees Fahrenheit, is:   Today's Forcast    Hours after midnight  Temperature Today in Fahrenheit (°F)  Temperature Tomorrow in Fahrenheit (°F)    0  42°F  44°F    3  39°F  41°F    6  38°F  40°F    9  48°F  52°F    12  56°F  64°F    15  59°F  67°F    18  53°F  61°F    21  46°F  50°F     Interesting! Tomorrow will be a warmer day. The app then gives the average forecast over the next two days.  The weather app plots the forecast for today, tomorrow, and the 2-day average below.    Two days of temperature forecasts and their average.    "
},
{
  "id": "activity-seeing-mixing-around",
  "level": "2",
  "url": "chp2sec1.html#activity-seeing-mixing-around",
  "type": "Activity",
  "number": "2.1.5",
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
  "type": "Technology",
  "number": "2.1.10",
  "title": "",
  "body": " Visualize vector scaling as:  stretching arrows at GeoGebra ID: D5ZYkYQq  amplifying signals at GeoGebra ID: cczk5gzj  adjusting the volume of a sound at GeoGebra ID: awejqq5u    "
},
{
  "id": "psa-absolute-relative-length",
  "level": "2",
  "url": "chp2sec1.html#psa-absolute-relative-length",
  "type": "Insight",
  "number": "2.1.11",
  "title": "Absolute Length vs Relative Length.",
  "body": " Absolute Length vs Relative Length  When one thinks of a vector as an arrow, it is common to think of it as having both a direction and absolute length . At this time, we will not be using the notion of absolute length, rather this will be developed and made precise in later chapters. Scaling, on the other hand, encodes relative length - for example, if , then is two times as long as . In the lessons to come, we will frequently measure vectors in units of other vectors via scaling.  "
},
{
  "id": "Def-vector_addition",
  "level": "2",
  "url": "chp2sec1.html#Def-vector_addition",
  "type": "Definition",
  "number": "2.1.12",
  "title": "Vector Addition.",
  "body": " Vector Addition   If , then is their vector sum . The operation of forming their vector sum is vector addition .   "
},
{
  "id": "meanings-vector_addition",
  "level": "2",
  "url": "chp2sec1.html#meanings-vector_addition",
  "type": "Note",
  "number": "2.1.13",
  "title": "Meanings of Vector Addition.",
  "body": " Meanings of Vector Addition  If , then the vector sum has each of the following meanings:  Verbally. I fill my bowl with one serving size of each of my cereals.  Visually. Translate the -arrow to start at the tip of -arrow. Similarly, translate the -arrow to start at the tip of the -arrow. This will form a tip-to-tail parallelogram and the arrow for will be the diagonal of this parallelogram. We call this visualization tip-to-tail addition.  Symbolically. The vectors sum has name and when we unpack it, its entries are obtained by adding the entries in the corresponding positions, which we call entry-by-entry addition.      Visualizing vector addition via arrows    "
},
{
  "id": "exploration-geogebra-addition",
  "level": "2",
  "url": "chp2sec1.html#exploration-geogebra-addition",
  "type": "Technology",
  "number": "2.1.15",
  "title": "",
  "body": " Visualize vector addition via tip-to-tail parallelograms at GeoGebra ID: ADsHPgV4 and superposition of signals at GeoGebra ID: ttny3hjk .  "
},
{
  "id": "def-linear_combination",
  "level": "2",
  "url": "chp2sec1.html#def-linear_combination",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Linear Combination.",
  "body": " Linear Combination   If is a collection of vectors and a collection of real numbers, then the vector is a linear combination of the vectors in .   "
},
{
  "id": "ex-mixture_parallelogram",
  "level": "2",
  "url": "chp2sec1.html#ex-mixture_parallelogram",
  "type": "Insight",
  "number": "2.1.17",
  "title": "The Mixture Parallelogram.",
  "body": " The Mixture Parallelogram  If and , then the linear combination may be visualized with its mixture parallelogram with sides determined by and .  For instance, the mixture of 2 servings of and 1.5 servings of is encoded in the mixture parallelogram below.    Visualizing linear combination via the mixture parallelogram.    "
},
{
  "id": "geogebra_activity-lincomb",
  "level": "2",
  "url": "chp2sec1.html#geogebra_activity-lincomb",
  "type": "Activity",
  "number": "2.1.19",
  "title": "Explorations with The Mixture Parallelogram Tool.",
  "body": " Explorations with The Mixture Parallelogram Tool   In this activity, you will engage with some of the core mixture questions of this course. Build intuition now and revisit later. You will use the Mixture Parallelogram Tool to visualize, explore, and understand mixtures of vectors in .  A pre-made version of the Mixture Parallelogram Tool can be found at GeoGebra ID: qAC4TXwy .  Finding serving sizes to create a given mixture. By playing with the sliders, find the serving sizes and so that .  Analyzing the set of all possible mixtures. Move the vectors and , and sliders and , to analyze the truth of each of the following claims. In complete sentences, and using your mixture parallelogram, justify why the claim seems true or seems false.   Every vector in the plane is a linear combination of and .  Every vector in the plane is a linear combination of and .   Holding one slider constant. Slide to and keep it there for the moment. Look at the tip of your mixture vector. Right click on the point and select \"trace\" and then start sliding around (while not changing ). What shape is created by the collection of tip points? Reset and try this again by fixing and sliding .     "
},
{
  "id": "activity-symbolizing",
  "level": "2",
  "url": "chp2sec1.html#activity-symbolizing",
  "type": "Activity",
  "number": "2.1.20",
  "title": "Symbolizing Linear Combinations.",
  "body": " Symbolizing Linear Combinations   In each of the following situations, identify and name the relevant vectors (including the appropriate list-length) and then write an algebraic expression representing the appropriate mixture.   If every month, you record your monthly expenses by type (groceries, gas, utilities, tuition, etc.) in dollars, then symbolize your total expenses for the past year.  If again you record your monthly expenses, and given that annual inflation is currently roughly , symbolize what you expect to be your monthly expenses in one year.  If I have two cereals such that 1.5 servings of the first cereal has the exact same nutrition facts as 0.75 servings of the second cereal, then symbolize an equation relating the two serving sizes.    "
},
{
  "id": "activity-interpretting_symbolism",
  "level": "2",
  "url": "chp2sec1.html#activity-interpretting_symbolism",
  "type": "Activity",
  "number": "2.1.21",
  "title": "Practice Interpreting Symbolism.",
  "body": " Practice Interpreting Symbolism   Interpret the meaning of the symbolic expression in each of the following situations.   You have a recipe for cookies that uses five ingredients. If are the nutrition facts for a single serving size of each of these five ingredient and the recipe calls for servings of each ingredient, respectively, then interpret the meaning of the linear combination  If is the vector of hourly temperatures in , , measured at your home on day of last week, then interpret    "
},
{
  "id": "def-serving_size_vector",
  "level": "2",
  "url": "chp2sec1.html#def-serving_size_vector",
  "type": "Definition",
  "number": "2.1.22",
  "title": "Servings Vector.",
  "body": " Servings Vector   If are distinct vectors with a fixed order and are scalars, then the linear combination has servings vector  .   "
},
{
  "id": "chp2sec1-28",
  "level": "2",
  "url": "chp2sec1.html#chp2sec1-28",
  "type": "Activity",
  "number": "2.1.23",
  "title": "Practice Forming Servings Vectors.",
  "body": " Practice Forming Servings Vectors    Form the servings vector for each of the following linear combinations:               Did we need to know the list-length of the vectors above to form the servings vectors?  Suppose we are forming a linear combination of that has servings vector . What is the linear combination?    "
},
{
  "id": "problems-chp2sec1-2",
  "level": "2",
  "url": "chp2sec1.html#problems-chp2sec1-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Let denote a graph with vertices . A list-length vector can be understood as a function on the vertices of . Explain. The  indicator vector of is the vector whose entry is 1 and all other entries are 0. Explain how any function on the vertices of can be expressed as a linear combination of the indicator vectors of .   "
},
{
  "id": "problems-chp2sec1-3",
  "level": "2",
  "url": "chp2sec1.html#problems-chp2sec1-3",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  There is a city called Mathopolis and an adjacent suburb called Vector Valley. For city X, its Mathopolis-Vector Valley probability vector is the list-length 2 vector:  Probability a person in X will be in Mathopolis next year  Probability a person in X will be in Vector Valley next year.  Each year about 3% of Mathopolis's population moves to Vector Valley, and about 5% of Vector Valley's population moves to Mathopolis. (This is an unusual place - there are no births, no deaths, and there is no travel to or from other places.)   What is the Mathopolis-Vector Valley probability vector for Mathopolis?    What is the Mathopolis-Vector Valley probability vector for Vector Valley?    If the current populations of Mathopolis and Vector Valley are million and million, respectively, express the population vector of Mathopolis and Vector Valley next year as a linear combination of probability vectors and in terms of and .    If the current populations of Mathopolis and Vector Valley are 7 million and 1 million, respectively, what will be the population vector of Mathopolis and Vector Valley next year?      "
},
{
  "id": "chp2sec2",
  "level": "1",
  "url": "chp2sec2.html",
  "type": "Lesson",
  "number": "2.2",
  "title": "Algebraic Properties of Linear Combination",
  "body": " Algebraic Properties of Linear Combination   Baking Cookies   I am a big fan of chocolate chip cookies.    A cartoon depicting maxing ingredients to make cookies.    Below is the ingredient list for a chocolate chip cookie recipe that produces 60 cookies.   cups of all-purpose flour\\,  1 teaspoon of baking soda,  1 teaspoon of salt,  1 cup of butter   cup of granulated sugar,   cup of packed brown sugar,  1 teaspoon of vanilla extract,  2 large eggs,  2 cups of semi-sweet chocolate morsels.    One serving size of each ingredient is one unit of the given unit of measurement (i.e. one serving size of flour is one cup, one serving size of baking soda is one teaspoon, etc.). Let the symbols , , be the names of the nutrition fact vectors for one serving size of each of these nine ingredients. In groups, discuss each of the following and then share with the class.  Symbolize. Using the names , , and the symbolism of linear combination, symbolize the nutrition facts for the totality of a single recipe of cookies.  Reason. However I want to make a double recipe (120 cookies) so that all of my linear algebra students can eat several during class. In what ways can I make a double recipe? Try to come up with at least two distinct strategies for making a double recipe.  Symbolize. I want to understand the nutrition facts vector for the totality of the cookies in my double recipe. Using the symbolism of linear combination, write down an algebraic equation for the two distinct ways you found for making double recipes.  Repeated Reasoning. Repeat this reasoning for the following situation. Later at home, I want a single cookie. Come up with at least two distinct strategies for making a single cookie. Using the symbolism of linear combination, write down an algebraic equation for the nutrition facts for a single cookie.  Generalize. In what ways can you generalize your algebraic equation to more situations? Describe both the situation and generalized algebraic equation.      After some class discussion, we should settle on two distinct strategies for making a double recipe: I could make single recipe twice , or I could double each of my ingredients. I would have the same final collection of cookies, hence the same nutrition facts, either way. We symbolize this equivalence in the following way:   Furthermore, this reasoning should generalize to any scaling factor and any number of vectors. We have discovered and informally justified our first algebraic property of linear combinations.   Distributivity of scaling across linear combination   If and , then     What is an algebraic property?  When I say an algebraic property, I will mean a general equivalence of two objects, expressed as an equality of symbolical expressions. For example, we just saw that we can double a recipe in two ways, which resulted in an equality of two algebraic expressions. We generalized this algebraic property and state it in . Whenever we encounter a useful algebraic property, we will summarize it in a proposition for us to easily use in the future. Remember, algebraic properties encode meaningful relationships first and foremost, and are not just rules to push symbols around the page.   Whenever we make a mathematical claim, it is incumbent upon us to justify that claim. The act of justification is a core mathematical action and comes in two varieties: informal and formal.   Informal Justification  Informal justification is the act of explaining why a mathematical statement makes sense by appealing to meanings, such as those imbued by metaphors.   The discussion of having two ways to double our recipe leveraged our mixture metaphor to provide an informal justification for .   Formal Justification (a.k.a. Proving)  Formal justification (a.k.a proving) is the act of certifying the truth of a mathematical statement by weaving together a chain of definitions and previously proven conditional statements (e.g. a proposition). This should include exposition that explains how you are both invoking and using in context each definition and conditional statement.   We have not yet proved a formal justification for . To provide a formal justification, we will need to first establish some starting assumptions and more basic principles. Formal justification is an exercise in deductive logic. As you progress through this book, you will have increasingly more exposure to, and opportunities to provide, formal justifications of mathematical statements.  Now that we have seen our first algebraic property, it is time to look a little more carefully at important algebraic properties we will use throughout this course. Formal justifications of algebraic properties of linear combinations rest upon the algebraic properties of real numbers. Going forward, we will assume the standard algebraic properties of real numbers: associativity, identity, inverses, commutativity, and distributivity, which I collect in .   Algebraic Properties of Real Numbers   Real numbers satisfy the following algebraic properties.   Addition and multiplication are associative: If , then and .  Additive and multiplicative identities: The element satisfies the property: if , then . The element satisfies the property: if , then .  There exist additive and multiplicative inverses: If , then there exists an element such that . If , then there exists an element such that .  Addition and multiplication are commutative: If , then and .  Addition and multiplication are tied together with distributivity: If , then .     You will find referencing these properties to be essential to formal justifications of mathematical statements in this book.  Here I collect some of the most import algebraic properties that we will use throughout this course.   Fundamental Algebraic Properties of Linear Combination   If and , then   (Associativity of addition)  ;  (Zero vector)  , where is the vector of all zero entries;  (Inverse vector)  , where is the vector whose entries are the negative of the entries of ;  (Commutativity of addition)  ;  (Scaling by 1)  ;  (Associativity of scaling)  ;  (Distributivity of scalar sum)  ;  (Distributivity of scaling across vector sum)  .      Each of these properties can be deduced from the algebraic properties of real numbers ( ), the definition of vector scaling ( ), and the definition of vector addition ( ). I now give a formal justification of (LC1) , associativity of addition, with symbolic equalities below.       A reflection upon our first formal justification.  Please look back at and reflect upon the formal justification I just gave for additive associativity of vectors in the proof of . Observe how I start and end with the linear combination in terms of the names of the vectors. Observe how in the middle, I unpack the vectors and use their entries and assumed properties of real numbers to find appropriate algebraically equivalent expressions. Observe how I clearly state each definition or proposition I use. Observe how it is a clear story from start to finish.    Constructing Meanings of Algebraic Properties   For each algebraic property in , pick an appropriate metaphor and provide a meaningful informal justification. Each group could be assigned a different algebraic property, and after some time preparing, groups can present to the class.     Practicing Formal Justification   In a similar way as I did for associativity of vector addition, provide formal justifications for the remaining algebraic properties of linear combination in .    Mathematics builds upon itself. After we have established a solid foundation of assumptions and definitions, we build upon it, layer upon layer, to provide the formal justifications for ever more sophisticated mathematical statements.   Practicing Formal Justification   Use , , , and to provide a formal justification for .     Distributivity of scalar sums across linear combination   If and , then     Practicing (In)formal Justification   Pick an appropriate metaphor and provide a meaningful informal justification for . Use , , , and to provide a formal justification for .     Problems    For each positive integer , there is a special vector that has what we call the zero property , which is, whenever you add it to another vector, you get that other vector back. In symbols, we say has the zero property if for all , . Deduce what must be and explain how it has the zero property. What food item might have as its nutrition facts vector? What direction vector might have as its coordinates?      Noise-cancelling headphones have the property that, for each external sound it detects, it produces another sound such that, when the two sounds are played together, the result is no sound at all. A standard sample rate is 44,100 times per second (44.1kHz). If is the \"signal vector\" of the external sound and is the signal vector of the sound produced by the headphones, what algebraic relationship must and satisfy? Describe and explain.     "
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
  "body": " What is an algebraic property?  When I say an algebraic property, I will mean a general equivalence of two objects, expressed as an equality of symbolical expressions. For example, we just saw that we can double a recipe in two ways, which resulted in an equality of two algebraic expressions. We generalized this algebraic property and state it in . Whenever we encounter a useful algebraic property, we will summarize it in a proposition for us to easily use in the future. Remember, algebraic properties encode meaningful relationships first and foremost, and are not just rules to push symbols around the page.  "
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
  "id": "prop-fundamental_vector_props",
  "level": "2",
  "url": "chp2sec2.html#prop-fundamental_vector_props",
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
  "body": " A reflection upon our first formal justification.  Please look back at and reflect upon the formal justification I just gave for additive associativity of vectors in the proof of . Observe how I start and end with the linear combination in terms of the names of the vectors. Observe how in the middle, I unpack the vectors and use their entries and assumed properties of real numbers to find appropriate algebraically equivalent expressions. Observe how I clearly state each definition or proposition I use. Observe how it is a clear story from start to finish.  "
},
{
  "id": "chp2sec2-20",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-20",
  "type": "Activity",
  "number": "2.2.9",
  "title": "Constructing Meanings of Algebraic Properties.",
  "body": " Constructing Meanings of Algebraic Properties   For each algebraic property in , pick an appropriate metaphor and provide a meaningful informal justification. Each group could be assigned a different algebraic property, and after some time preparing, groups can present to the class.   "
},
{
  "id": "chp2sec2-21",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-21",
  "type": "Activity",
  "number": "2.2.10",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   In a similar way as I did for associativity of vector addition, provide formal justifications for the remaining algebraic properties of linear combination in .   "
},
{
  "id": "chp2sec2-23",
  "level": "2",
  "url": "chp2sec2.html#chp2sec2-23",
  "type": "Activity",
  "number": "2.2.11",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   Use , , , and to provide a formal justification for .   "
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
  "body": " Practicing (In)formal Justification   Pick an appropriate metaphor and provide a meaningful informal justification for . Use , , , and to provide a formal justification for .   "
},
{
  "id": "problems-chp2sec2-2",
  "level": "2",
  "url": "chp2sec2.html#problems-chp2sec2-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  For each positive integer , there is a special vector that has what we call the zero property , which is, whenever you add it to another vector, you get that other vector back. In symbols, we say has the zero property if for all , . Deduce what must be and explain how it has the zero property. What food item might have as its nutrition facts vector? What direction vector might have as its coordinates?   "
},
{
  "id": "problems-chp2sec2-3",
  "level": "2",
  "url": "chp2sec2.html#problems-chp2sec2-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Noise-cancelling headphones have the property that, for each external sound it detects, it produces another sound such that, when the two sounds are played together, the result is no sound at all. A standard sample rate is 44,100 times per second (44.1kHz). If is the \"signal vector\" of the external sound and is the signal vector of the sound produced by the headphones, what algebraic relationship must and satisfy? Describe and explain.   "
},
{
  "id": "chp2sec3",
  "level": "1",
  "url": "chp2sec3.html",
  "type": "Lesson",
  "number": "2.3",
  "title": "Lines as Traveling Down a Path",
  "body": " Lines as Traveling Down a Path  In this lesson, we use our understanding of vectors and linear combination to inform how we think about lines in the plane, and then generalize to how we think about lines (and planes) in .    Lines in the plane.     Lines in  While I expect anyone taking this course to have seen lines before, it may be useful to remind you what they are and how we describe them. Lines are subsets of the plane satisfying certain geometric properties, and these subsets can be describe by certain equations.   Lines in   A line  in the plane is the set of all points that satisfy an algebraic equation of the form . This is a normal equation of a line. Using set builder notation, I may write    Let's take a moment to discuss the equations that describe the points on a line. Every line satisfies a normal equation. If the line is not vertical (i.e. ), then its points satisfy two other algebraically equivalent equations:  Slope-Intercept Equation  , where the line has slope and -intercept .  Point-Slope Equation  , where the line goes through point and has slope .  We can think of these equations as constraints that points in the plane must satisfy to lie on the given line.  Keep in mind, a line is a set of points, not one of the many equations that describe those points. Now recall that points in the plane may be understood as vectors. Can we use vectors to formulate new and productive ways to describe the points that comprise a line?    Finding vectors that describe a line   Consider the line with slope-intercept equation .  If is the coordinate of a point on , then  Name and .   Then I can think of this line via a metaphor of traveling along a path as follows:  is your starting position .  is the direction and distance you travel in 1 unit of time (i.e. velocity ).  is your elapsed time. When is positive, you can think of as what your position on the path will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past. Since here is conceptualized as time, we often replace the symbol with the symbol .  In symbols, the line can be expressed as the set of points .    The graph of the line with equation .       We can generalize our reasoning in to any line in the plane.   Parametric Vector Form of Lines in   If is a line in , then there exists vectors such that .    To begin, suppose is not vertical and has slope-intercept equation . If are the coordinates of a point on , then we may substitute for : Name and . Then . Since this is true for all , it follows that . The case when is vertical is left as an exercise.    Observe the role substitution played in both and . Using constraining equations and substituting in this way will be a reoccurring strategy throughout this course.   Parametric to Slope-Intercept Conversion   Consider the path with initial position  and travels with velocity .   Thinking of the scalar in front of as time , I mark off units of on the path, and I label the points at times , 0, 1, 2, and 3. As we range over all time, the collection of all points on the path can be expressed as In general, at time my position on the path has coordinate . Since , then . Substituting this into the equation for ,    The graph of the line with equation .       Once again, we can generalize our reasoning in to any line in the plane.    If , then the set is a line.    To show that the set is a line, I need to verify the coordinates satisfy an equation of a line ( ). Unpacking entries, . If is the coordinate of a point on , then and . If , then the first equations can be rewritten as , which can then be substituted into the second equation to get: This is the slope-intercept form of a line ( ). The case of is left as an exercise.    Revisit how in GeoGebra , Part 3, as you fix and slide , the tips of the vectors , sweeps out a line through and in the direction of .   Visualize parametrized lines in by playing with position vectors and velocity vectors at GeoGebra ID: j2pnwgwz . Observe that a different vector in the direction of will sweep out the same line, but will be at points at different \"times.\" Move the vectors and and observe how the -intercept form of the line varies.     A cartoon depicting walking down a linear path. The initial position vector and velocity vector are clearly visible.    To summarize, you should reconceptualize lines as the collection of all points in the plane reached by traveling along a path in the following way:  Begin at a given starting point, symbolized as .  Start traveling in a constant direction and constant speed, symbolized as .  Your position on this path at time can be represented with the linear combination .   Representing Lines   For each of the following lines in ,  Clearly visually sketch and label it,  Find the symbolic form not given (i.e. slope-intercept or parametric vector form)  Verbally write down, in complete sentences the meaning of the parametric equation in the language of position and steps per unit of time.         Lines in  It is with this conceptualization of lines in the plane that we may generalize to reason about lines in . We formalize this in the following definition.   Lines in and their Parametric Vector Form   If and is nonzero, then the set is a line in , symbolized in parametric vector form . Here is a parameter . If is a closed interval, then is a line segment in .     Lines as Paths of Travel   gives your starting position .  gives the direction and distance traveled in 1 unit of time (i.e. velocity ).  gives you elapsed time. When is positive, you can think of as what your position will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past.     Line in     A line in .    The line in is given by parametric vector form .   Visualize parametrized lines in at GeoGebra ID: nrp6wa5k . Move the vectors and and observe how the line visualization and line symbolization changes. Slide the parameter and observe how you \"move\" along the line.      Planes in  We now move on to generalize our reasoning to a new geometric object: a plane in . While many have a sense of what a plane is when they see it, it is another matter to make sense of it mathematically. I will provide a geometric formulation. If points, , , and in do not all lie on the same line (in the language of geometry language, are non-collinear ), then they form a triangle. Emanating from vertex are sides and . The set of all points that I can reach by traveling with velocity vectors coming from the triangle's sides is a plane. In a qualitative sense, the plane a triangle determines is the unique flat slice of that contains that triangle .   Plane in     A plane in .     Plane through 3 non-collinear points   Start at position ,  Travel with constant direction and speed for units of time,  Travel with constant direction and speed for units of time.     Non-Collinear Vectors   If are nonzero vectors and lines and are not equal, then and are non-collinear vectors.     Planes in and their Parametric Vector Form   If such that and are non-collinear, then the set of points is a plane , symbolized in parametric vector form . Here and are parameters .     Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, this plane is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . For example, to reach the point , we start at , travel units of time with constant velocity , and then units of time with constant velocity . This path is depicted in orange.     Visualize a plane in at GeoGebra ID: qg2afdpt . Move the vectors , , and to move the plane. Adjust the parameters and to reach different points on the plane.    Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . Observe that fills up all of - I can reach any point in by traveling for the appropriate amounts of time with constant velocities and . For example, to reach the point , we start at the origin , travel units of time with constant velocity , and then units of time with constant velocity .    Visualize the planes (in parametric form) in at GeoGebra ID: tk8s9eut .   In multivariable calculus, you will expand on the ideas introduced here to describe parametrized surfaces and their tangent planes .    A tangent plane to a sphere in .     Visualize tangent planes to surfaces in at GeoGebra ID: mmkmzuqr .    "
},
{
  "id": "def-lines_r2",
  "level": "2",
  "url": "chp2sec3.html#def-lines_r2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Lines in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Lines in   A line  in the plane is the set of all points that satisfy an algebraic equation of the form . This is a normal equation of a line. Using set builder notation, I may write   "
},
{
  "id": "ex-line_yint_to_parametric",
  "level": "2",
  "url": "chp2sec3.html#ex-line_yint_to_parametric",
  "type": "Example",
  "number": "2.3.2",
  "title": "Finding vectors that describe a line.",
  "body": " Finding vectors that describe a line   Consider the line with slope-intercept equation .  If is the coordinate of a point on , then  Name and .   Then I can think of this line via a metaphor of traveling along a path as follows:  is your starting position .  is the direction and distance you travel in 1 unit of time (i.e. velocity ).  is your elapsed time. When is positive, you can think of as what your position on the path will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past. Since here is conceptualized as time, we often replace the symbol with the symbol .  In symbols, the line can be expressed as the set of points .    The graph of the line with equation .      "
},
{
  "id": "prop-lines_r2_pvf",
  "level": "2",
  "url": "chp2sec3.html#prop-lines_r2_pvf",
  "type": "Proposition",
  "number": "2.3.3",
  "title": "Parametric Vector Form of Lines in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Parametric Vector Form of Lines in   If is a line in , then there exists vectors such that .    To begin, suppose is not vertical and has slope-intercept equation . If are the coordinates of a point on , then we may substitute for : Name and . Then . Since this is true for all , it follows that . The case when is vertical is left as an exercise.   "
},
{
  "id": "ex-line_parametric_to_yint",
  "level": "2",
  "url": "chp2sec3.html#ex-line_parametric_to_yint",
  "type": "Example",
  "number": "2.3.4",
  "title": "Parametric to Slope-Intercept Conversion.",
  "body": " Parametric to Slope-Intercept Conversion   Consider the path with initial position  and travels with velocity .   Thinking of the scalar in front of as time , I mark off units of on the path, and I label the points at times , 0, 1, 2, and 3. As we range over all time, the collection of all points on the path can be expressed as In general, at time my position on the path has coordinate . Since , then . Substituting this into the equation for ,    The graph of the line with equation .      "
},
{
  "id": "chp2sec3subsec1-12",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec1-12",
  "type": "Proposition",
  "number": "2.3.5",
  "title": "",
  "body": "  If , then the set is a line.    To show that the set is a line, I need to verify the coordinates satisfy an equation of a line ( ). Unpacking entries, . If is the coordinate of a point on , then and . If , then the first equations can be rewritten as , which can then be substituted into the second equation to get: This is the slope-intercept form of a line ( ). The case of is left as an exercise.   "
},
{
  "id": "exploration-geogebra-lines1",
  "level": "2",
  "url": "chp2sec3.html#exploration-geogebra-lines1",
  "type": "Technology",
  "number": "2.3.6",
  "title": "",
  "body": " Visualize parametrized lines in by playing with position vectors and velocity vectors at GeoGebra ID: j2pnwgwz . Observe that a different vector in the direction of will sweep out the same line, but will be at points at different \"times.\" Move the vectors and and observe how the -intercept form of the line varies.  "
},
{
  "id": "chp2sec3subsec1-17",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec1-17",
  "type": "Activity",
  "number": "2.3.7",
  "title": "Representing Lines.",
  "body": " Representing Lines   For each of the following lines in ,  Clearly visually sketch and label it,  Find the symbolic form not given (i.e. slope-intercept or parametric vector form)  Verbally write down, in complete sentences the meaning of the parametric equation in the language of position and steps per unit of time.      "
},
{
  "id": "def-line",
  "level": "2",
  "url": "chp2sec3.html#def-line",
  "type": "Definition",
  "number": "2.3.8",
  "title": "Lines in <span class=\"process-math\">\\(\\R^m\\)<\/span> and their Parametric Vector Form.",
  "body": " Lines in and their Parametric Vector Form   If and is nonzero, then the set is a line in , symbolized in parametric vector form . Here is a parameter . If is a closed interval, then is a line segment in .   "
},
{
  "id": "chp2sec3subsec2-4",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec2-4",
  "type": "Remark",
  "number": "2.3.9",
  "title": "Lines as Paths of Travel.",
  "body": " Lines as Paths of Travel   gives your starting position .  gives the direction and distance traveled in 1 unit of time (i.e. velocity ).  gives you elapsed time. When is positive, you can think of as what your position will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past.   "
},
{
  "id": "fig-line_in_r3",
  "level": "2",
  "url": "chp2sec3.html#fig-line_in_r3",
  "type": "Figure",
  "number": "2.3.10",
  "title": "",
  "body": " Line in  "
},
{
  "id": "exploration-geogebra-lines2",
  "level": "2",
  "url": "chp2sec3.html#exploration-geogebra-lines2",
  "type": "Technology",
  "number": "2.3.11",
  "title": "",
  "body": " Visualize parametrized lines in at GeoGebra ID: nrp6wa5k . Move the vectors and and observe how the line visualization and line symbolization changes. Slide the parameter and observe how you \"move\" along the line.   "
},
{
  "id": "fig-plane_in_r3",
  "level": "2",
  "url": "chp2sec3.html#fig-plane_in_r3",
  "type": "Figure",
  "number": "2.3.12",
  "title": "",
  "body": " Plane in  "
},
{
  "id": "chp2sec3subsec3-5",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec3-5",
  "type": "Remark",
  "number": "2.3.13",
  "title": "Plane through 3 non-collinear points.",
  "body": " Plane through 3 non-collinear points   Start at position ,  Travel with constant direction and speed for units of time,  Travel with constant direction and speed for units of time.   "
},
{
  "id": "def-noncollinear",
  "level": "2",
  "url": "chp2sec3.html#def-noncollinear",
  "type": "Definition",
  "number": "2.3.14",
  "title": "Non-Collinear Vectors.",
  "body": " Non-Collinear Vectors   If are nonzero vectors and lines and are not equal, then and are non-collinear vectors.   "
},
{
  "id": "def-plane",
  "level": "2",
  "url": "chp2sec3.html#def-plane",
  "type": "Definition",
  "number": "2.3.15",
  "title": "Planes in <span class=\"process-math\">\\(\\R^m\\)<\/span> and their Parametric Vector Form.",
  "body": " Planes in and their Parametric Vector Form   If such that and are non-collinear, then the set of points is a plane , symbolized in parametric vector form . Here and are parameters .   "
},
{
  "id": "ex-plane",
  "level": "2",
  "url": "chp2sec3.html#ex-plane",
  "type": "Example",
  "number": "2.3.16",
  "title": "Plane in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, this plane is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . For example, to reach the point , we start at , travel units of time with constant velocity , and then units of time with constant velocity . This path is depicted in orange.   "
},
{
  "id": "exploration-geogebra-planes",
  "level": "2",
  "url": "chp2sec3.html#exploration-geogebra-planes",
  "type": "Technology",
  "number": "2.3.17",
  "title": "",
  "body": " Visualize a plane in at GeoGebra ID: qg2afdpt . Move the vectors , , and to move the plane. Adjust the parameters and to reach different points on the plane.  "
},
{
  "id": "chp2sec3subsec3-10",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec3-10",
  "type": "Example",
  "number": "2.3.18",
  "title": "Plane in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . Observe that fills up all of - I can reach any point in by traveling for the appropriate amounts of time with constant velocities and . For example, to reach the point , we start at the origin , travel units of time with constant velocity , and then units of time with constant velocity .   "
},
{
  "id": "chp2sec3subsec3-12",
  "level": "2",
  "url": "chp2sec3.html#chp2sec3subsec3-12",
  "type": "Remark",
  "number": "2.3.19",
  "title": "",
  "body": " In multivariable calculus, you will expand on the ideas introduced here to describe parametrized surfaces and their tangent planes .    A tangent plane to a sphere in .     Visualize tangent planes to surfaces in at GeoGebra ID: mmkmzuqr .  "
},
{
  "id": "chp2sec4",
  "level": "1",
  "url": "chp2sec4.html",
  "type": "Lesson",
  "number": "2.4",
  "title": "The Set of All Linear Combination",
  "body": " The Set of All Linear Combination   Span  In this lesson, we are interested in conceptualizing and symbolizing the set of all linear combinations we can make with a predetermined, fixed collection of vectors. This set of linear combinations is useful to consider in all the contexts in which we encounter vectors and linear combination. If I have 12 boxes of cereal on my shelf, what are all the nutrition fact vectors I can make by mixing them? If my sound processor can make 400 digital pure tones, what are all the sounds I can produce by mixing them? More generally, if I have a fixed collection of vectors, what are all the linear combinations I can make with them?    What can we make with one nonzero vector in the plane?   What can we make (using linear combinations) with ? Geometrically, we get the line with parametric vector form: . Observe our starting position is the zero vector (i.e. the origin).    A line in .       What can we make with two vectors in the plane?    What can we make (using linear combinations) with and ? Algebraically, what vectors do we make as we vary ? We can make anything in the plane!    A plane in .       The collection of all possible linear combinations which can be made with is made precise by the notion of span .   Span (the noun)   If , then their span is the set of all linear combinations of . Symbolically,     The word span may seem unintuitive for you, so if you wish, via the metaphor of mixture, you can think of span as the mixture set of . Note that even if is small, is big! In fact, as long as contains a nonzero vector, is an infinite set.  Spans have very nice geometric interpretations. The span of one nonzero vector is the line , starting at the origin, with velocity : (see ). The span of two nonzero, non-collinear vectors and is the plane going through their tips and the origin. In symbols, we write this plane in parametric vector form: .   Describing Span   For each of the following sets of vectors, describe geometrically the associated span. Be sure to use geometric words.                      What can we make with two vectors in Cartesian 3-Space?   If , , and , then is every possible mixture made with and , or using set notation, Using the mixture parallelograms to visualize the mixtures, we see that will be the plane going through the three points: , , and ,     Visualize the span of two vectors in at GeoGebra ID: axm8hsyg .  The algebraic notation of span is very compact and enables us to efficiently communicate our thoughts about linear combinations. It is therefore important that you practice symbolizing your thoughts with this compact notation and then practice interpreting in plain language such symbolic expressions.   Symbolizing with Span   Symbolize each complete sentence using span.   Vector is a linear combination of vectors and .  There is no way to write vector as a linear combination of vectors , , and .  Everything I can make with vectors and , I can also make with vectors , , and .      Interpreting the Symbolism of Span   For each, use complete sentences, using the language of mixture, to interpret the meaning of each algebraic expression.   .  .  .  .       Solution Sets  Given a collection of vectors and another vector , we want to know if we can make  by mixing vectors in . In symbols, we can make with if there exists scalars such that . Put more compactly, is makeable with if . There is no guarantee that is makeable, in which case no such scalars exist.  Via the metaphor of cooking, given a certain collection of ingredients and a desired meal, makeability asks: can we make the meal with our ingredients?   When we view vectors geometrically, given a plane in and a point in , makeability asks: does the point lie on the plane?   If a vector is makeable with , then we usually also want to know how, i.e. what scalars allow us to make that vector.   Exploring Makeability   In each of the following parts, explore how you can make from the given . Can you find a way to make from ? If so, are there multiple ways or is it unique? Explain.   Consider and .  Consider and .     Observe that a way to make with is precisely a servings vector ( ).   Solution Vectors   If , , and are such that , then the associated servings vector is a solution vector for making with .    If has vectors, then a solution vector for making with has list-length .   Exploring Makeability Geometrically   In this activity, you will use GeoGebra ID: twf46ake to visualize and investigate makeability in . Let , , and .    Explore. Use the visual representations provided to decide if and can be made with . Clearly explain the visual feature(s) you are using to make your determinations.  Symbolize. For each makeable vector, write down the corresponding symbolic equation. (Perform the associated computation to verify you have indeed found a solution vector.)     Solution set in .       Sometimes a single solution vector is sufficient. However, sometimes we want to collect all of them into a single set.   Solution Set   If and then the set of all solution vectors for making with can be identified with a subset of called the solution set for making with . In symbols,     If is not makeable with , then the solution set is empty , which we denote .   Symbolizing with Solution Sets   Symbolize each expression using solution sets and set notation.   .  .  There is no way to make with vectors , , and .      Interpreting the Symbolism of Solution Sets   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .     Solution sets are central objects in linear algebra and we will continue to deepen our understanding and develop tools for computing them in the lessons that come.   Span Summary  If , then following are equivalent:   You can make from ,  ,  is nonempty.      Algebraic Properties of Span  Spans have very nice algebraic properties.   Algebraic Properties of Span   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .      We must provide formal justification for each of the three properties.  I will begin with the first property. To show that , I must show that the zero vector is a linear combination of the vectors in . This is easy to arrange, just take zero serving sizes of each vector! In symbols:  Next, I will justify the second property. By assumption, there exists and such that and . So   From which we deduce .  All that is left justifying the third property. This is left to you in .    Practicing Formal Justification   Carefully write down a formal justification for the third property of . Be sure to carefully explain your reasoning and include references to all appropriate definitions and proven propositions. When done, share with the class.     Algebraic Properties of Span as Mixture of Mixtures  Using the metaphor of mixture, says that, if you fix a collection of ingredients, a mixture of mixtures is still just a mixture of the original ingredients.    "
},
{
  "id": "chp2sec4subsec1-3",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4subsec1-3",
  "type": "Example",
  "number": "2.4.1",
  "title": "What can we make with one nonzero vector in the plane?",
  "body": " What can we make with one nonzero vector in the plane?   What can we make (using linear combinations) with ? Geometrically, we get the line with parametric vector form: . Observe our starting position is the zero vector (i.e. the origin).    A line in .     "
},
{
  "id": "chp2sec4subsec1-4",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4subsec1-4",
  "type": "Example",
  "number": "2.4.2",
  "title": "What can we make with two vectors in the plane?",
  "body": " What can we make with two vectors in the plane?    What can we make (using linear combinations) with and ? Algebraically, what vectors do we make as we vary ? We can make anything in the plane!    A plane in .      "
},
{
  "id": "def-span",
  "level": "2",
  "url": "chp2sec4.html#def-span",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Span (the noun).",
  "body": " Span (the noun)   If , then their span is the set of all linear combinations of . Symbolically,    "
},
{
  "id": "activity-describing_span",
  "level": "2",
  "url": "chp2sec4.html#activity-describing_span",
  "type": "Activity",
  "number": "2.4.4",
  "title": "Describing Span.",
  "body": " Describing Span   For each of the following sets of vectors, describe geometrically the associated span. Be sure to use geometric words.                    "
},
{
  "id": "chp2sec4subsec1-10",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4subsec1-10",
  "type": "Example",
  "number": "2.4.5",
  "title": "What can we make with two vectors in Cartesian 3-Space?",
  "body": " What can we make with two vectors in Cartesian 3-Space?   If , , and , then is every possible mixture made with and , or using set notation, Using the mixture parallelograms to visualize the mixtures, we see that will be the plane going through the three points: , , and ,    "
},
{
  "id": "activity-symbolizing_with_span",
  "level": "2",
  "url": "chp2sec4.html#activity-symbolizing_with_span",
  "type": "Activity",
  "number": "2.4.6",
  "title": "Symbolizing with Span.",
  "body": " Symbolizing with Span   Symbolize each complete sentence using span.   Vector is a linear combination of vectors and .  There is no way to write vector as a linear combination of vectors , , and .  Everything I can make with vectors and , I can also make with vectors , , and .    "
},
{
  "id": "activity-interpreting_the_symbolism_of_span",
  "level": "2",
  "url": "chp2sec4.html#activity-interpreting_the_symbolism_of_span",
  "type": "Activity",
  "number": "2.4.7",
  "title": "Interpreting the Symbolism of Span.",
  "body": " Interpreting the Symbolism of Span   For each, use complete sentences, using the language of mixture, to interpret the meaning of each algebraic expression.   .  .  .  .    "
},
{
  "id": "activity-makeability1",
  "level": "2",
  "url": "chp2sec4.html#activity-makeability1",
  "type": "Activity",
  "number": "2.4.8",
  "title": "Exploring Makeability.",
  "body": " Exploring Makeability   In each of the following parts, explore how you can make from the given . Can you find a way to make from ? If so, are there multiple ways or is it unique? Explain.   Consider and .  Consider and .    "
},
{
  "id": "def-solution_vectors",
  "level": "2",
  "url": "chp2sec4.html#def-solution_vectors",
  "type": "Definition",
  "number": "2.4.9",
  "title": "Solution Vectors.",
  "body": " Solution Vectors   If , , and are such that , then the associated servings vector is a solution vector for making with .   "
},
{
  "id": "activity-exploring_makeability_geometrically",
  "level": "2",
  "url": "chp2sec4.html#activity-exploring_makeability_geometrically",
  "type": "Activity",
  "number": "2.4.10",
  "title": "Exploring Makeability Geometrically.",
  "body": " Exploring Makeability Geometrically   In this activity, you will use GeoGebra ID: twf46ake to visualize and investigate makeability in . Let , , and .    Explore. Use the visual representations provided to decide if and can be made with . Clearly explain the visual feature(s) you are using to make your determinations.  Symbolize. For each makeable vector, write down the corresponding symbolic equation. (Perform the associated computation to verify you have indeed found a solution vector.)     Solution set in .      "
},
{
  "id": "def-solution_set",
  "level": "2",
  "url": "chp2sec4.html#def-solution_set",
  "type": "Definition",
  "number": "2.4.11",
  "title": "Solution Set.",
  "body": " Solution Set   If and then the set of all solution vectors for making with can be identified with a subset of called the solution set for making with . In symbols,    "
},
{
  "id": "activity-symbolizing_with_solution_sets",
  "level": "2",
  "url": "chp2sec4.html#activity-symbolizing_with_solution_sets",
  "type": "Activity",
  "number": "2.4.12",
  "title": "Symbolizing with Solution Sets.",
  "body": " Symbolizing with Solution Sets   Symbolize each expression using solution sets and set notation.   .  .  There is no way to make with vectors , , and .    "
},
{
  "id": "activity-interpreting_the_symbolism_of_solution_sets",
  "level": "2",
  "url": "chp2sec4.html#activity-interpreting_the_symbolism_of_solution_sets",
  "type": "Activity",
  "number": "2.4.13",
  "title": "Interpreting the Symbolism of Solution Sets.",
  "body": " Interpreting the Symbolism of Solution Sets   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .    "
},
{
  "id": "summary-span_summary",
  "level": "2",
  "url": "chp2sec4.html#summary-span_summary",
  "type": "Insight",
  "number": "2.4.14",
  "title": "Span Summary.",
  "body": " Span Summary  If , then following are equivalent:   You can make from ,  ,  is nonempty.   "
},
{
  "id": "prop-span_has_subspace_properties",
  "level": "2",
  "url": "chp2sec4.html#prop-span_has_subspace_properties",
  "type": "Proposition",
  "number": "2.4.15",
  "title": "Algebraic Properties of Span.",
  "body": " Algebraic Properties of Span   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .    "
},
{
  "id": "chp2sec4subsec3-4",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4subsec3-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We must provide formal justification for each of the three properties.  I will begin with the first property. To show that , I must show that the zero vector is a linear combination of the vectors in . This is easy to arrange, just take zero serving sizes of each vector! In symbols:  Next, I will justify the second property. By assumption, there exists and such that and . So   From which we deduce .  All that is left justifying the third property. This is left to you in .  "
},
{
  "id": "activity-justify_span_is_subspace",
  "level": "2",
  "url": "chp2sec4.html#activity-justify_span_is_subspace",
  "type": "Activity",
  "number": "2.4.16",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   Carefully write down a formal justification for the third property of . Be sure to carefully explain your reasoning and include references to all appropriate definitions and proven propositions. When done, share with the class.   "
},
{
  "id": "chp2sec4subsec3-6",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4subsec3-6",
  "type": "Insight",
  "number": "2.4.17",
  "title": "Algebraic Properties of Span as Mixture of Mixtures.",
  "body": " Algebraic Properties of Span as Mixture of Mixtures  Using the metaphor of mixture, says that, if you fix a collection of ingredients, a mixture of mixtures is still just a mixture of the original ingredients.  "
},
{
  "id": "chp2sec5",
  "level": "1",
  "url": "chp2sec5.html",
  "type": "Lesson",
  "number": "2.5",
  "title": "Dependency",
  "body": " Dependency  A collection has redundancy if one of the vectors can be made from the others. Suppose I have on my cereal shelf two boxes of Sugar-Os and one box of Fiber Flakes. Even though I have three boxes, all I need to mix my breakfast is two of them - the second box of Sugar-Os does not enable me to make new mixtures - it is redundant.   Linear (In)Dependence   If is a (nonempty) finite subset of vectors such that one of its vectors can be written as a linear combination of its other vectors, then the subset is linearly dependent . In symbols, is dependent if there exists an and, for each , a number , such that   This is a dependency equation for . If no such equation exist, then is linearly independent .    Throughout this text, I may sometime refer to collections of vectors as being dependent or independent , by which I will always mean linearly dependent and linearly independent, respectively.  Observe that the compact notation of span allows use to rewrite succinctly: A collection is dependent if there exists a vector such that   Justify for yourself that if the zero vector lies in , then implies that is dependent. For this reason, when we consider questions of dependence, we often begin by assuming our subset of vectors are all nonzero, which I may symbolize as .  If you are only considering two nonzero vectors , then they are linearly dependent if and only if they are nonzero scalar multiples of each other, i.e. for some nonzero .   If you have three or more vectors, dependency is more nuanced. For example, both collections are dependent.    Sets of vectors in .     In the first collection, the third vector is a scalar multiple of the first vector, hence . In the second collection, no vector is a scalar multiple of the others, however, the third vector is a sum of the first two .   Identifying and removing redundancy   For each of the following sets of vectors, determine if it is dependent. If it is dependent, what can you throw away while preserving span?                     We may now reason about independent vectors, but we will not have the computational tools to check if a collection of vectors is independent until . However, if a collection of vectors satisfies an easy verifiable condition I call separated, then we are guaranteed that they are independent.   Determining Independence   Come up with an explanation as why each set below is independent: Can you summarize your argument with a single observation?    The property that the above collections share is formalized in the following definition.   Separated   If is a collection of vectors with the property that for each vector , there exists an index such that the -entry of is nonzero, and the entry of each of the other vectors in is 0, then is separated .     Separated implies independent   If is separated, then is independent.     OPS   Even though being separated may seem very restrictive, certain vectors we will obtain in by interpreting the reduced row echelon form of a matrix will be separated, and hence we will be assured independence.  An algebraically useful reformulation of dependency is to conceptualize it in terms of making the zero vector. We can always make the zero mixture by using zero servings of each vector. Dependency can be understood as being able to make the zero mixture by using some nonzero servings.   Dependency as making the zero vector in nontrivial ways.   If , then is dependent if and only if there exists numbers , at least one of which is not zero , such that .     This is an if-and-only-if proposition. This means that I am claiming that the two statements are equivalent. To justify this proposition, I need to carefully show how each statement implies the other.  To begin, suppose the collection is dependent. Then, by , there exists an and, for each , a number , such that   By moving to the other side of the equation, and setting , then I have produced an equation   where by construction, at least one of the scalars is nonzero. This completes this implication.  Now suppose that there exists scalars , at least one of which is not zero, such that . Let denote the first nonzero scalar. Since is nonzero, so is . Then I may move to the other side of the equation, and by dividing by , have produced an and, for each , a number , such that   This completes this implication.    Independence as Distinct Directions  Geometrically, dependent means that one of the vectors lies in the span of the other vectors. Conversely, if the collection is independent, every vector points in truly distinct directions.  The concept of independence allows us to generalize non-collinearity ( ) and planes ( ).   -Planes in and their Parametric Vector Form   If and the -vectors are independent, then the set of points is a -plane , symbolized in parametric vector form . Here are parameters .     -Plane as Traveling Instructions  If and the -vectors are independent, then the -plane is the set of all points in space that can be reached by the following travel directions:   Start at position ,  Travel with constant velocity for units of time,  Travel with constant direction and speed for units of time   Travel with constant velocity for units of time.    -planes play an important and reoccurring role in linear algebra.  If , -planes are lines. If , -planes are planes. While it is difficult to geometrically visualize -planes for , it is still productive to keep the pictures of lines (e.g. ) and planes (e.g. ) in our minds as a metaphor for -planes.  We may use span to condense of the notation for -planes: if , then we may write . In this way, we may then think about -planes as spans which have been translated by .    Null Vectors  As you can see from the proof of , we can easily move between the scalars that allow us to write a dependency equation and the scalars that allow us to make zero. They contain the same information, but for algebraic reasons, we will often focus on the scalars that allow us to make zero. These scalars contain important information about our subset, and, as it is useful to name objects that we wish to reason about, we form and name the associated servings vector.    Null Vectors   If and are such that , then the associated servings vector is a null The word null means being associated to zero vector for .    If has vectors, then a null vector has list-length , or in symbols, if is a null vector for , then . Observe that a null vector is simply a solution vector for making zero ( ).   Visualizing Null Vectors   Here I investigate null vectors for   I know from Euclidean geometry that if I uniformly scale the plane, then I create similar triangles. I wonder if this can help me find new null vectors?     Exploring Null Vectors   In this activity, you will use GeoGebra ID: nd6qasfy to visualize and investigate null vectors for subsets of three vectors in . Begin with .   Explore. Following the strategy in , move the points , , and to form a closed triangle. (Hint: I have chosen so that you can find at least one set of nonzero, integers null vectors.)  Symbolize. Write down the corresponding symbolic equation using a null vector you found and the columns of the vectors in . (Perform the associated computation to verify you have indeed found a null vector.)  Interpret. What do your findings say about the collection in terms of redundancy? Explain.  Explore. So far, you should have found one null vector with of nonzero integer entries. Can you find more? How? (Hint: Consider the question at the end of .)  Repeated Reasoning. Repeat for the new set .  Generalize. What happens when has 4 vectors? Using tip-to-tail visualization, what shape are we looking for to find a null vector? How about many vectors? Explain.     To summarize up to this point, a null vector is a servings vector for making zero. The zero servings vector is always a null vector. The existence of a nonzero null vector is logically equivalent to our vectors being dependent.  Now that we have internalized the notion of a single null vector, we may start to reason about the collection of all null vectors.   Null Space of   If , then the set of all null vectors of is a subset of called the null space of . In symbols, using set notation,    Observe that the null space is precisely the solution set for making zero, or in symbols, .  Much like span, the compact symbolism of null space is very efficient, but it is easy to get lost in the symbolism. We must practice symbolizing our thoughts on terms of null space, and conversely, practice interpreting the symbolism of null space in context.  For example, we can compactly summarize our observations in with:   Symbolizing with Null Space   Symbolize each expression using null space and set notation.   .  is a nonzero vector.  There is no nontrivial way to make the zero vector with vectors , , and .      Interpreting the Symbolism of Null Space   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .     Make sure that you understand how each of the following statement are equivalent.   Dependency Summary  If , then following are equivalent:   is dependent,  There exists such that ,  You can make from in a nontrivial way,  has a nonzero null vector.  is nonzero.    I encourage you to continue reasoning about (in)dependence in the language of redundancy and in the language of distinct directions. Be prepared to algebraically work with redundancy as making zero in nontrivial ways.  Much like the span of , , the null space of has useful algebraic properties (cf ).   Algebraic Properties of Null Spaces   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .      The logical steps here are similar to those in the proof of . We must provide formal justification for each of the three properties.  1. The non-empty property is verified with a direct computation: the zero servings vector will always give a zero mixture   2. Suppose that . Unpacking names and using the definition of vector addition ( ) . Observe,   Hence is also a null vector.  3. I leave this last formal justification to you in your homework.   We will continue to work with null spaces throughout this course, and will develop the computational tools to find, describe, and analyze null spaces in .   "
},
{
  "id": "def-dependence",
  "level": "2",
  "url": "chp2sec5.html#def-dependence",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Linear (In)Dependence.",
  "body": " Linear (In)Dependence   If is a (nonempty) finite subset of vectors such that one of its vectors can be written as a linear combination of its other vectors, then the subset is linearly dependent . In symbols, is dependent if there exists an and, for each , a number , such that   This is a dependency equation for . If no such equation exist, then is linearly independent .   "
},
{
  "id": "activity-identifying_and_removinredundancy",
  "level": "2",
  "url": "chp2sec5.html#activity-identifying_and_removinredundancy",
  "type": "Activity",
  "number": "2.5.2",
  "title": "Identifying and removing redundancy.",
  "body": " Identifying and removing redundancy   For each of the following sets of vectors, determine if it is dependent. If it is dependent, what can you throw away while preserving span?                    "
},
{
  "id": "activity-sep_to_ind",
  "level": "2",
  "url": "chp2sec5.html#activity-sep_to_ind",
  "type": "Activity",
  "number": "2.5.3",
  "title": "Determining Independence.",
  "body": " Determining Independence   Come up with an explanation as why each set below is independent: Can you summarize your argument with a single observation?   "
},
{
  "id": "def-separated",
  "level": "2",
  "url": "chp2sec5.html#def-separated",
  "type": "Definition",
  "number": "2.5.4",
  "title": "Separated.",
  "body": " Separated   If is a collection of vectors with the property that for each vector , there exists an index such that the -entry of is nonzero, and the entry of each of the other vectors in is 0, then is separated .   "
},
{
  "id": "prop-sep_implies_indep",
  "level": "2",
  "url": "chp2sec5.html#prop-sep_implies_indep",
  "type": "Proposition",
  "number": "2.5.5",
  "title": "Separated implies independent.",
  "body": " Separated implies independent   If is separated, then is independent.   "
},
{
  "id": "chp2sec5-16",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-16",
  "type": "Proof",
  "number": "2.5.1",
  "title": "",
  "body": " OPS  "
},
{
  "id": "prop-dependence",
  "level": "2",
  "url": "chp2sec5.html#prop-dependence",
  "type": "Proposition",
  "number": "2.5.6",
  "title": "Dependency as making the zero vector in nontrivial ways..",
  "body": " Dependency as making the zero vector in nontrivial ways.   If , then is dependent if and only if there exists numbers , at least one of which is not zero , such that .   "
},
{
  "id": "chp2sec5-20",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-20",
  "type": "Proof",
  "number": "2.5.2",
  "title": "",
  "body": " This is an if-and-only-if proposition. This means that I am claiming that the two statements are equivalent. To justify this proposition, I need to carefully show how each statement implies the other.  To begin, suppose the collection is dependent. Then, by , there exists an and, for each , a number , such that   By moving to the other side of the equation, and setting , then I have produced an equation   where by construction, at least one of the scalars is nonzero. This completes this implication.  Now suppose that there exists scalars , at least one of which is not zero, such that . Let denote the first nonzero scalar. Since is nonzero, so is . Then I may move to the other side of the equation, and by dividing by , have produced an and, for each , a number , such that   This completes this implication.  "
},
{
  "id": "def-kplane",
  "level": "2",
  "url": "chp2sec5.html#def-kplane",
  "type": "Definition",
  "number": "2.5.7",
  "title": "<span class=\"process-math\">\\(k\\)<\/span>-Planes in <span class=\"process-math\">\\(\\R^m\\)<\/span> and their Parametric Vector Form.",
  "body": " -Planes in and their Parametric Vector Form   If and the -vectors are independent, then the set of points is a -plane , symbolized in parametric vector form . Here are parameters .   "
},
{
  "id": "chp2sec5subsec1-5",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5subsec1-5",
  "type": "Insight",
  "number": "2.5.8",
  "title": "<span class=\"process-math\">\\(k\\)<\/span>-Plane as Traveling Instructions.",
  "body": " -Plane as Traveling Instructions  If and the -vectors are independent, then the -plane is the set of all points in space that can be reached by the following travel directions:   Start at position ,  Travel with constant velocity for units of time,  Travel with constant direction and speed for units of time   Travel with constant velocity for units of time.   "
},
{
  "id": "def-null_scalars",
  "level": "2",
  "url": "chp2sec5.html#def-null_scalars",
  "type": "Definition",
  "number": "2.5.9",
  "title": "Null Vectors.",
  "body": " Null Vectors   If and are such that , then the associated servings vector is a null The word null means being associated to zero vector for .   "
},
{
  "id": "ex-visualizing_nullscalars",
  "level": "2",
  "url": "chp2sec5.html#ex-visualizing_nullscalars",
  "type": "Example",
  "number": "2.5.10",
  "title": "Visualizing Null Vectors.",
  "body": " Visualizing Null Vectors   Here I investigate null vectors for   I know from Euclidean geometry that if I uniformly scale the plane, then I create similar triangles. I wonder if this can help me find new null vectors?   "
},
{
  "id": "activity-exploring_null_vectors",
  "level": "2",
  "url": "chp2sec5.html#activity-exploring_null_vectors",
  "type": "Activity",
  "number": "2.5.11",
  "title": "Exploring Null Vectors.",
  "body": " Exploring Null Vectors   In this activity, you will use GeoGebra ID: nd6qasfy to visualize and investigate null vectors for subsets of three vectors in . Begin with .   Explore. Following the strategy in , move the points , , and to form a closed triangle. (Hint: I have chosen so that you can find at least one set of nonzero, integers null vectors.)  Symbolize. Write down the corresponding symbolic equation using a null vector you found and the columns of the vectors in . (Perform the associated computation to verify you have indeed found a null vector.)  Interpret. What do your findings say about the collection in terms of redundancy? Explain.  Explore. So far, you should have found one null vector with of nonzero integer entries. Can you find more? How? (Hint: Consider the question at the end of .)  Repeated Reasoning. Repeat for the new set .  Generalize. What happens when has 4 vectors? Using tip-to-tail visualization, what shape are we looking for to find a null vector? How about many vectors? Explain.    "
},
{
  "id": "def-nullspaceS",
  "level": "2",
  "url": "chp2sec5.html#def-nullspaceS",
  "type": "Definition",
  "number": "2.5.12",
  "title": "Null Space of <span class=\"process-math\">\\(S\\)<\/span>.",
  "body": " Null Space of   If , then the set of all null vectors of is a subset of called the null space of . In symbols, using set notation,   "
},
{
  "id": "activity-symbolizing_with_null_space",
  "level": "2",
  "url": "chp2sec5.html#activity-symbolizing_with_null_space",
  "type": "Activity",
  "number": "2.5.13",
  "title": "Symbolizing with Null Space.",
  "body": " Symbolizing with Null Space   Symbolize each expression using null space and set notation.   .  is a nonzero vector.  There is no nontrivial way to make the zero vector with vectors , , and .    "
},
{
  "id": "activity-interpreting_null_space",
  "level": "2",
  "url": "chp2sec5.html#activity-interpreting_null_space",
  "type": "Activity",
  "number": "2.5.14",
  "title": "Interpreting the Symbolism of Null Space.",
  "body": " Interpreting the Symbolism of Null Space   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .    "
},
{
  "id": "summary-dependency",
  "level": "2",
  "url": "chp2sec5.html#summary-dependency",
  "type": "Insight",
  "number": "2.5.15",
  "title": "Dependency Summary.",
  "body": " Dependency Summary  If , then following are equivalent:   is dependent,  There exists such that ,  You can make from in a nontrivial way,  has a nonzero null vector.  is nonzero.   "
},
{
  "id": "prop-nullscalars_has_subspace_properties",
  "level": "2",
  "url": "chp2sec5.html#prop-nullscalars_has_subspace_properties",
  "type": "Proposition",
  "number": "2.5.16",
  "title": "Algebraic Properties of Null Spaces.",
  "body": " Algebraic Properties of Null Spaces   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .    "
},
{
  "id": "chp2sec5subsec2-21",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5subsec2-21",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The logical steps here are similar to those in the proof of . We must provide formal justification for each of the three properties.  1. The non-empty property is verified with a direct computation: the zero servings vector will always give a zero mixture   2. Suppose that . Unpacking names and using the definition of vector addition ( ) . Observe,   Hence is also a null vector.  3. I leave this last formal justification to you in your homework.  "
},
{
  "id": "chp2sec6",
  "level": "1",
  "url": "chp2sec6.html",
  "type": "Lesson",
  "number": "2.6",
  "title": "Subsets That Contain Their Mixtures",
  "body": " Subsets That Contain Their Mixtures   Subsets That Contain Their Mixtures  The algebraic properties of span in and null space in are rather important. Mixture is the fundamental operation of linear algebra, and spans and null spaces have the property that a mixture of elements within the set always stays within the set. It is useful for us to identify and name this special property for when we encounter it again.   Subspace   If is a subset that satisfies the following three properties:    Contains Zero. If denotes the zero vector, then ,    Closed Under Addition. If , then ,    Closed Under Scaling. If and , then ,    then is a subspace .    Subspaces are subsets which contain their mixtures . Such subsets are at the heart of linear algebra.  Observe that the whole space, , and the zero subset, satisfy these properties, and hence are subspaces. A consequence of is that spans are always subspaces.   Spans are Subspaces   If and , then is a subspace in .     Null Spaces are Subspaces   If is a set of vectors and , then is a subspace in .    When we view vectors geometrically, it is often useful to re-interpret the three properties of in the following geometric way.   Subspace — Geometric Formulation  If is a subspace, then:    Origin Containment. The origin is contained in .    Parallelogram Containment. If , then the whole mixture parallelogram associated to is contained in .    Line Containment. If , then the whole line is contained in .      Subspaces in the plane    Which subsets cannot be subspaces? Using , analyze the following subsets in the plane:  line (red),  line (blue),  line (violet),  circle (green),  first quadrant (orange), and  first quadrant and third quadrant (orange).  For each, determine if they satisfy origin containment, parallelogram containment, and line containment. Determine if they are subspaces. If one is a subspace, is it a span (i.e. can you find vectors such that the subspace is their span)?  To help your analysis, explore with the Subspace Tester at GeoGebra ID: mzcfrvqh .    Spans vs Subspaces. Recall that spans in are either the origin, lines through the origin, or the whole plane. Can you find a subspace in that is not a span? If yes, clearly describe this set and explain how it satisfies . If not, explain why no such set can exist.    By , we have shown that all spans are subspaces. What about the other way around? Is every subspace a span?    Spans (the relationship)   If is a subspace and , then  spans  if .     Span (the noun) vs Spans (the relationship)  Span (the noun) and spans (the relationship) are different, but related concepts. These concepts were named this way by the mathematical community decades ago and is out of my control. For this book, if you wish, you can reference span the noun as the mixture set.    Visually Identifying Spans and Subspaces in   Analyze the image below, which can also be viewed at GeoGebra ID: xnnawvpr , and then answer the following questions.    Subsets in .      Describe all the subspaces depicted here.    For each subspace you found, which collections of shown vectors span them? Be complete, if multiple collections of vectors span a given subspace, list each collection.      To conclude this lesson, keep in mind that subspaces are subsets that contain their own linear combinations. This includes spans, null spaces, and lines and planes through the origin. In linear algebra, we frequently work with these sets in the lessons to come.   "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "chp2sec6.html#def-subspace",
  "type": "Definition",
  "number": "2.6.1",
  "title": "Subspace.",
  "body": " Subspace   If is a subset that satisfies the following three properties:    Contains Zero. If denotes the zero vector, then ,    Closed Under Addition. If , then ,    Closed Under Scaling. If and , then ,    then is a subspace .   "
},
{
  "id": "prop-span_is_subspace",
  "level": "2",
  "url": "chp2sec6.html#prop-span_is_subspace",
  "type": "Proposition",
  "number": "2.6.2",
  "title": "Spans are Subspaces.",
  "body": " Spans are Subspaces   If and , then is a subspace in .   "
},
{
  "id": "prop-nullset_is_subspace",
  "level": "2",
  "url": "chp2sec6.html#prop-nullset_is_subspace",
  "type": "Proposition",
  "number": "2.6.3",
  "title": "Null Spaces are Subspaces.",
  "body": " Null Spaces are Subspaces   If is a set of vectors and , then is a subspace in .   "
},
{
  "id": "def-subspace_geometric",
  "level": "2",
  "url": "chp2sec6.html#def-subspace_geometric",
  "type": "Insight",
  "number": "2.6.4",
  "title": "Subspace — Geometric Formulation.",
  "body": " Subspace — Geometric Formulation  If is a subspace, then:    Origin Containment. The origin is contained in .    Parallelogram Containment. If , then the whole mixture parallelogram associated to is contained in .    Line Containment. If , then the whole line is contained in .    "
},
{
  "id": "geogebra-subspaces_in_plane",
  "level": "2",
  "url": "chp2sec6.html#geogebra-subspaces_in_plane",
  "type": "Technology",
  "number": "2.6.5",
  "title": "Subspaces in the plane.",
  "body": " Subspaces in the plane    Which subsets cannot be subspaces? Using , analyze the following subsets in the plane:  line (red),  line (blue),  line (violet),  circle (green),  first quadrant (orange), and  first quadrant and third quadrant (orange).  For each, determine if they satisfy origin containment, parallelogram containment, and line containment. Determine if they are subspaces. If one is a subspace, is it a span (i.e. can you find vectors such that the subspace is their span)?  To help your analysis, explore with the Subspace Tester at GeoGebra ID: mzcfrvqh .    Spans vs Subspaces. Recall that spans in are either the origin, lines through the origin, or the whole plane. Can you find a subspace in that is not a span? If yes, clearly describe this set and explain how it satisfies . If not, explain why no such set can exist.   "
},
{
  "id": "def-span_relationship",
  "level": "2",
  "url": "chp2sec6.html#def-span_relationship",
  "type": "Definition",
  "number": "2.6.6",
  "title": "Spans (the relationship).",
  "body": " Spans (the relationship)   If is a subspace and , then  spans  if .   "
},
{
  "id": "lesson-linear_combination_subspace-13",
  "level": "2",
  "url": "chp2sec6.html#lesson-linear_combination_subspace-13",
  "type": "Remark",
  "number": "2.6.7",
  "title": "Span (the noun) vs Spans (the relationship).",
  "body": " Span (the noun) vs Spans (the relationship)  Span (the noun) and spans (the relationship) are different, but related concepts. These concepts were named this way by the mathematical community decades ago and is out of my control. For this book, if you wish, you can reference span the noun as the mixture set.  "
},
{
  "id": "lesson-linear_combination_subspace-14",
  "level": "2",
  "url": "chp2sec6.html#lesson-linear_combination_subspace-14",
  "type": "Technology",
  "number": "2.6.8",
  "title": "Visually Identifying Spans and Subspaces in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Visually Identifying Spans and Subspaces in   Analyze the image below, which can also be viewed at GeoGebra ID: xnnawvpr , and then answer the following questions.    Subsets in .      Describe all the subspaces depicted here.    For each subspace you found, which collections of shown vectors span them? Be complete, if multiple collections of vectors span a given subspace, list each collection.     "
},
{
  "id": "chp3sec1",
  "level": "1",
  "url": "chp3sec1.html",
  "type": "Lesson",
  "number": "3.1",
  "title": "Matrix Multiplication as Linear Combination",
  "body": " Matrix Multiplication as Linear Combination  We now return to the core idea of linear combination as mixture. We write linear combinations so often that it is useful to introduce a new, efficient, and compact notation to symbolize this process. If and are scalars, then the linear combination:   where the vector is the servings vector (see ) for the mixture and the new object obtained by smashing together the vectors is a matrix . Think of this matrix as your cereal boxes all lined up next to one another on a shelf.   Matrix   If , then the associated matrix is . The vectors of are the columns of and we say is the column of . When is clear from context, we may just write . The symbol is the name of the matrix.    The plural of matrix is matrices .    If , then the associated matrix is . The vector is the first column of and the vector is the second column of .     Vertical bars  The vertical bars between column vectors help us visually organize a matrix, but do not serve a computational purpose. I will use them going forward only when they improve the clarity of exposition.    Representing a matrix: name, column form, and entry form  We currently have three distinct ways to represent a matrix. The most succinct way to denote a matrix is with its name , say   If we want to unpack it into its column vectors , we can represent it as   Furthermore, each of the columns is itself a list of numbers, which we can unpack to obtain a grid of numbers   The symbol denotes the entry in the row and column. The matrix is all of these: its name , its column form , and its entry form .   I will always use capital letters for matrix names, e.g. , , , , etc. I try to always denote entries of a matrix with the associated lower case letters, e.g. , , etc.  How do we decide which representation to use? We will move between these constantly, choosing the representation that best meets our needs at the moment. While the entry form is often best for arithmetic computations, the name and column forms are usually better for us to organize our thoughts and communicate our reasoning.   Matrix Multiplication (Matrix with Vector)   If , and , then matrix multiplication of and is the linear combination of the columns of with corresponding scalars . In symbols,     At the level of entries, looks like:    Matrix Multiplication Meaning #1: as Mixture: The matrix equation  means  is the mixture of the columns of according to the serving sizes specified in .      could have been written in this language as .     Interpreting Symbolism of Matrix Multiplication as Linear Combination   For each of the following expressions, (1) Clearly sketch and label its associated mixture parallelogram and (2) Use linear combinations to symbolically compute the corresponding mixture vector.      Symbolizing Linear Combination as Matrix Multiplication   For each of the following linear combinations, compactly symbolize it using matrix multiplication     There exists such that  There does not exist such that       If and , then use matrix multiplication to compactly symbolize each of the following.   The sum of the vectors of .  The average of the vectors of .  Vector , where .     For the moment, there is no new concept here, just compact notation. Accordingly, matrix multiplication acquires all the meanings and algebraic properties we have previously established for linear combination.   Compactifying Algebraic Properties of Linear Combination   Recall , our double cookie recipe proposition, states: If and , then   Compactify this algebraic property using matrix multiplication.    For the moment, there is no new concept here, just compact notation. Accordingly, matrix multiplication acquires all the meanings and algebraic properties we have previously established for linear combination.   Compactifying Algebraic Properties of Linear Combination   Recall , our \"double cookie recipe\" proposition, states:  If and , then   Compactify this algebraic property using matrix multiplication.    Matrix multiplication satisfies two fundamental algebraic properties that we will constantly use.   Linearity Properties of Matrix Multiplication.   If is an matrix, , and , then   (Distributes across vector sum)  and    (Commutes with scaling)         These can be verified algebraically from the definition of matrix multiplication ( ), basic algebraic properties of real numbers ( ), and basic algebraic properties of linear combination ( ).  Here I will give the careful justification of distributivity, with the symbolic movements on the left, and the justification for those symbolic movements on the right. If , then     Matrix Multiplication of Matrices with Matrices  Matrix multiplication of a matrix with another matrix is simply a convenient way of organizing multiple mixtures all at once.   Matrix Multiplication (Matrix with Matrix)   If is an matrix and is an matrix (i.e. ), then the matrix multiplication of matrices  and is   The resulting matrix is their product .     Columns of a Product. The columns of a product of two matrices are linear combinations of the columns of the first matrix, as read from left to right.        Using Definition   Let and .    Use to compute and .    What interesting observations can you make?    Generalize your observations. If is and is where , then what do you observe about and . Explain your thinking interpreting these products using linear combinations.       Associativity of Matrix Multiplication.   If is an matrix, is an matrix, and , then      If , then     "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "chp3sec1.html#def-matrix",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Matrix.",
  "body": " Matrix   If , then the associated matrix is . The vectors of are the columns of and we say is the column of . When is clear from context, we may just write . The symbol is the name of the matrix.   "
},
{
  "id": "ex-forming_matrix",
  "level": "2",
  "url": "chp3sec1.html#ex-forming_matrix",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  If , then the associated matrix is . The vector is the first column of and the vector is the second column of .   "
},
{
  "id": "chp3sec1-8",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-8",
  "type": "Remark",
  "number": "3.1.3",
  "title": "Vertical bars.",
  "body": " Vertical bars  The vertical bars between column vectors help us visually organize a matrix, but do not serve a computational purpose. I will use them going forward only when they improve the clarity of exposition.  "
},
{
  "id": "rem-matrix_notation",
  "level": "2",
  "url": "chp3sec1.html#rem-matrix_notation",
  "type": "Remark",
  "number": "3.1.4",
  "title": "Representing a matrix: name, column form, and entry form.",
  "body": " Representing a matrix: name, column form, and entry form  We currently have three distinct ways to represent a matrix. The most succinct way to denote a matrix is with its name , say   If we want to unpack it into its column vectors , we can represent it as   Furthermore, each of the columns is itself a list of numbers, which we can unpack to obtain a grid of numbers   The symbol denotes the entry in the row and column. The matrix is all of these: its name , its column form , and its entry form .  "
},
{
  "id": "def_matrixmult",
  "level": "2",
  "url": "chp3sec1.html#def_matrixmult",
  "type": "Definition",
  "number": "3.1.5",
  "title": "Matrix Multiplication (Matrix with Vector).",
  "body": " Matrix Multiplication (Matrix with Vector)   If , and , then matrix multiplication of and is the linear combination of the columns of with corresponding scalars . In symbols,    "
},
{
  "id": "matrixmult_meaning1",
  "level": "2",
  "url": "chp3sec1.html#matrixmult_meaning1",
  "type": "Insight",
  "number": "3.1.6",
  "title": "",
  "body": " Matrix Multiplication Meaning #1: as Mixture: The matrix equation  means  is the mixture of the columns of according to the serving sizes specified in .  "
},
{
  "id": "chp3sec1-16",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-16",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "   could have been written in this language as .   "
},
{
  "id": "chp3sec1-17",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-17",
  "type": "Activity",
  "number": "3.1.8",
  "title": "Interpreting Symbolism of Matrix Multiplication as Linear Combination.",
  "body": " Interpreting Symbolism of Matrix Multiplication as Linear Combination   For each of the following expressions, (1) Clearly sketch and label its associated mixture parallelogram and (2) Use linear combinations to symbolically compute the corresponding mixture vector.    "
},
{
  "id": "chp3sec1-18",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-18",
  "type": "Activity",
  "number": "3.1.9",
  "title": "Symbolizing Linear Combination as Matrix Multiplication.",
  "body": " Symbolizing Linear Combination as Matrix Multiplication   For each of the following linear combinations, compactly symbolize it using matrix multiplication     There exists such that  There does not exist such that    "
},
{
  "id": "activity-symbolizing_with_matrices",
  "level": "2",
  "url": "chp3sec1.html#activity-symbolizing_with_matrices",
  "type": "Activity",
  "number": "3.1.10",
  "title": "",
  "body": "  If and , then use matrix multiplication to compactly symbolize each of the following.   The sum of the vectors of .  The average of the vectors of .  Vector , where .    "
},
{
  "id": "chp3sec1-21",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-21",
  "type": "Activity",
  "number": "3.1.11",
  "title": "Compactifying Algebraic Properties of Linear Combination.",
  "body": " Compactifying Algebraic Properties of Linear Combination   Recall , our double cookie recipe proposition, states: If and , then   Compactify this algebraic property using matrix multiplication.   "
},
{
  "id": "chp3sec1-23",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-23",
  "type": "Activity",
  "number": "3.1.12",
  "title": "Compactifying Algebraic Properties of Linear Combination.",
  "body": " Compactifying Algebraic Properties of Linear Combination   Recall , our \"double cookie recipe\" proposition, states:  If and , then   Compactify this algebraic property using matrix multiplication.   "
},
{
  "id": "prop_fundamental_matrix_mult_props",
  "level": "2",
  "url": "chp3sec1.html#prop_fundamental_matrix_mult_props",
  "type": "Proposition",
  "number": "3.1.13",
  "title": "Linearity Properties of Matrix Multiplication..",
  "body": " Linearity Properties of Matrix Multiplication.   If is an matrix, , and , then   (Distributes across vector sum)  and    (Commutes with scaling)       "
},
{
  "id": "chp3sec1-26",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1-26",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " These can be verified algebraically from the definition of matrix multiplication ( ), basic algebraic properties of real numbers ( ), and basic algebraic properties of linear combination ( ).  Here I will give the careful justification of distributivity, with the symbolic movements on the left, and the justification for those symbolic movements on the right. If , then   "
},
{
  "id": "Def-matrix_mult_matrices",
  "level": "2",
  "url": "chp3sec1.html#Def-matrix_mult_matrices",
  "type": "Definition",
  "number": "3.1.14",
  "title": "Matrix Multiplication (Matrix with Matrix).",
  "body": " Matrix Multiplication (Matrix with Matrix)   If is an matrix and is an matrix (i.e. ), then the matrix multiplication of matrices  and is   The resulting matrix is their product .   "
},
{
  "id": "ex-matrix_mult1",
  "level": "2",
  "url": "chp3sec1.html#ex-matrix_mult1",
  "type": "Example",
  "number": "3.1.15",
  "title": "",
  "body": "    "
},
{
  "id": "activity-pfshortcut_by_hand",
  "level": "2",
  "url": "chp3sec1.html#activity-pfshortcut_by_hand",
  "type": "Activity",
  "number": "3.1.16",
  "title": "Using Definition Definition 3.1.14.",
  "body": " Using Definition   Let and .    Use to compute and .    What interesting observations can you make?    Generalize your observations. If is and is where , then what do you observe about and . Explain your thinking interpreting these products using linear combinations.     "
},
{
  "id": "prop_fundamental_matrix_mult_props2",
  "level": "2",
  "url": "chp3sec1.html#prop_fundamental_matrix_mult_props2",
  "type": "Proposition",
  "number": "3.1.17",
  "title": "Associativity of Matrix Multiplication..",
  "body": " Associativity of Matrix Multiplication.   If is an matrix, is an matrix, and , then    "
},
{
  "id": "chp3sec1subsec2-8",
  "level": "2",
  "url": "chp3sec1.html#chp3sec1subsec2-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " If , then   "
},
{
  "id": "chp3sec2",
  "level": "1",
  "url": "chp3sec2.html",
  "type": "Lesson",
  "number": "3.2",
  "title": "Matrix Multiplication Sets",
  "body": " Matrix Multiplication Sets  Recall in Chapter , I introduced three fundamental sets associated to linear combination: span, null space, and solution set. Since matrix multiplication is a symbolic compactification of linear combination, it should not come as a surprise that these three mixture sets become matrix multiplication sets.   Span becomes Column Space  The question of span concerns what all we can make with a fixed collection of ingredients. This notion is formalized with the concept of span (the noun) ( ). In symbols, if , then If we use the definition of matrix multiplication ( ) to compactify this expression and set , then We call this symbolic compactification the column space.   Column Space   If is an matrix, then the column space of is the span of its columns. In symbols,      A rose by any other name... Do not be scared of column space, it is just different language for span (the noun) - something you already know! You may then ask: Why introduce two names for the same thing? It is simply a matter of convenience: if we start with matrix whose columns are not already symbolized, then it is convenient to directly reference and reason about its column space without having to first symbolize its columns.  Column spaces are another instance of subspace (cf. ). Remember, subspaces play a central role in linear algebra and it is always useful to be aware of which subsets we are working with happen to be subspaces.   Column Space is a Subspace. If is an matrix, then is a subspace in .   The justification of this proposition is a logical consequence of chaining together and .     Dependency becomes Null Space  The question of redundancy concerns whether a collection of vectors contains one vector that can be made from a linear combination of the other vectors in the collection. This notion is formalized with the concept of dependence (Definition ). Algebraically, this condition was reformulated as asking if the zero vector can be made as a linear combination in a nontrivial way (cf. ). Symbolically, if , then we want to know if there exists numbers , at least one of which is not zero, such that . If we use the definition of matrix multiplication ( ) to compactify this expression and set , then we want to know if there exists a nonzero vector such that . We call this symbolic compactification the null space.   Null Space   If is an matrix, then the null space of is the null space of its columns. In symbols,      Null Space is a Subspace. If is an matrix, then is a subspace in .   The justification of this proposition is primarily a logical consequence of chaining together , Definition , and . Alternatively, consider . Fill in the details on your own.    Null space records redundancy. Do not be scared of null space, it is simply the null space of the columns of the matrix - something you already know! The null space is the set of all ways we can make the zero vector with the columns of our matrix.   Dependency as nontrivial null space.   If is an matrix, then if and only if the columns of are independent.     For this formal justification, try to re-interpret Proposition using the compact notation of matrices and null space.    Finding Column Space and Null Space   Suppose and I want to know its column space and null space .  To start, I begin by recalling the meanings of these terms. Column space is the span of the columns of and null space is all the ways I can make zero with the columns of . So I then identify and write down the columns of : . I can see (e.g. by plotting) that and are non-collinear. Therefore, their span is the plane in going through the points , , and . Furthermore, since is non-collinear, it is independent, and hence the only way to make zero is the trivial way. Therefore the null space is the trivial (i.e. zero) subspace. In algebraic symbolism:      Finding Column Space and Null Space   Suppose and I want to know its column space and null space .  To start, I begin by recalling the meanings of these terms. Column space is the span of the columns of and null space is all the ways I can make zero with the columns of . So I then identify and write down the columns of : . I can see (e.g. by plotting) that and are non-collinear. Therefore, their span is the whole plane in , and hence the span of must also be all of . I can also see (e.g. by visual inspection), that , hence , and thus I have null scalars . In algebraic symbolism:      Column Space and Null Space   For each of the following matrices, analyze their column space and null space. Describe them geometrically (i.e. trivial, line, plane, or more generally, a -plane for appropriate ), use appropriate algebraic symbolism, and find their parametric vector forms.       Makeability becomes Solution Set  The question of makeability concerns whether a given vector can be made with the vectors in our collection, and if so, how. Symbolically, if , then we want to know if there exists numbers , such that . If we use the definition of matrix multiplication ( ) to compactify this expression and set , then we want to know if there exists a vector such that . We call this symbolic compactification the solution set of the matrix equation.   Solution Set   If is an matrix and , then the solution set to the matrix equation is the collection of all vectors such that . In symbols,     Solution sets to matrix equations are central to linear algebra, and we will revisit and look more deeply into them throughout the course.  Observe that , which is a subspace. On the other hand, if , then is never a subspace.   "
},
{
  "id": "def-columnspace",
  "level": "2",
  "url": "chp3sec2.html#def-columnspace",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Column Space.",
  "body": " Column Space   If is an matrix, then the column space of is the span of its columns. In symbols,    "
},
{
  "id": "chp3sec2-3-7",
  "level": "2",
  "url": "chp3sec2.html#chp3sec2-3-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The justification of this proposition is a logical consequence of chaining together and .  "
},
{
  "id": "def-nullspace",
  "level": "2",
  "url": "chp3sec2.html#def-nullspace",
  "type": "Definition",
  "number": "3.2.2",
  "title": "Null Space.",
  "body": " Null Space   If is an matrix, then the null space of is the null space of its columns. In symbols,    "
},
{
  "id": "chp3sec2-4-5",
  "level": "2",
  "url": "chp3sec2.html#chp3sec2-4-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The justification of this proposition is primarily a logical consequence of chaining together , Definition , and . Alternatively, consider . Fill in the details on your own.  "
},
{
  "id": "prop-dependency_null_2",
  "level": "2",
  "url": "chp3sec2.html#prop-dependency_null_2",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "Dependency as nontrivial null space..",
  "body": " Dependency as nontrivial null space.   If is an matrix, then if and only if the columns of are independent.   "
},
{
  "id": "chp3sec2-4-8",
  "level": "2",
  "url": "chp3sec2.html#chp3sec2-4-8",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " For this formal justification, try to re-interpret Proposition using the compact notation of matrices and null space.  "
},
{
  "id": "chp3sec2-4-9",
  "level": "2",
  "url": "chp3sec2.html#chp3sec2-4-9",
  "type": "Example",
  "number": "3.2.4",
  "title": "Finding Column Space and Null Space.",
  "body": " Finding Column Space and Null Space   Suppose and I want to know its column space and null space .  To start, I begin by recalling the meanings of these terms. Column space is the span of the columns of and null space is all the ways I can make zero with the columns of . So I then identify and write down the columns of : . I can see (e.g. by plotting) that and are non-collinear. Therefore, their span is the plane in going through the points , , and . Furthermore, since is non-collinear, it is independent, and hence the only way to make zero is the trivial way. Therefore the null space is the trivial (i.e. zero) subspace. In algebraic symbolism:    "
},
{
  "id": "chp3sec2-4-10",
  "level": "2",
  "url": "chp3sec2.html#chp3sec2-4-10",
  "type": "Example",
  "number": "3.2.5",
  "title": "Finding Column Space and Null Space.",
  "body": " Finding Column Space and Null Space   Suppose and I want to know its column space and null space .  To start, I begin by recalling the meanings of these terms. Column space is the span of the columns of and null space is all the ways I can make zero with the columns of . So I then identify and write down the columns of : . I can see (e.g. by plotting) that and are non-collinear. Therefore, their span is the whole plane in , and hence the span of must also be all of . I can also see (e.g. by visual inspection), that , hence , and thus I have null scalars . In algebraic symbolism:    "
},
{
  "id": "activity-computing_col_null",
  "level": "2",
  "url": "chp3sec2.html#activity-computing_col_null",
  "type": "Activity",
  "number": "3.2.6",
  "title": "Column Space and Null Space.",
  "body": " Column Space and Null Space   For each of the following matrices, analyze their column space and null space. Describe them geometrically (i.e. trivial, line, plane, or more generally, a -plane for appropriate ), use appropriate algebraic symbolism, and find their parametric vector forms.    "
},
{
  "id": "def-solutionset",
  "level": "2",
  "url": "chp3sec2.html#def-solutionset",
  "type": "Definition",
  "number": "3.2.7",
  "title": "Solution Set.",
  "body": " Solution Set   If is an matrix and , then the solution set to the matrix equation is the collection of all vectors such that . In symbols,    "
},
{
  "id": "chp3sec3",
  "level": "1",
  "url": "chp3sec3.html",
  "type": "Lesson",
  "number": "3.3",
  "title": "Matrix Multiplication as Transformation",
  "body": " Matrix Multiplication as Transformation   Transforming Points and Objects   Matrix Transformation   If is an matrix, then the rule where you input the serving size vector and output the mixture vector is a matrix transformation from to .  If we give the transformation the name  , then we write such that , or equivalently, .  If , then we say sends to . When is clear from context, we may write instead of .     Matrix Multiplication Meaning #2: as Transformation  The matrix equation  means the transformation associated to multiplying by  sends the input serving size vector to the output mixture vector .   Matrix transformations have very nice geometric properties and model all sorts of phenomena. For example, these transformations and their generalizations are the basis for tools in computer graphics, cryptography, and machine learning.   Transforming a Point   Consider the matrix transformation associated to multiplication by .  For any input vector , . So, for example, . The transformation  sends vector to vector .   Let's visualize this transformation thinking of vectors as points . Observe how on the same plot, we draw both input and output. This allows us to see how moves the points in the plane.    Visualizing the input (serving) vector and the output (mixture) vector on the same plane.        Notation: vs  Please take note of the following subtle but important point: is the name of a rule of assignment, while is the name of a matrix . Think by analogy in calculus when you looked at the function . The function is a rule that doubles the input, while is just a number . While this rule and this number are related, they are distinct mathematical objects, just as and are distinct mathematical objects.   Points make up objects. When you look at where a matrix transformation sends all the points of an object, you now have a transformed object !   Transformed Sets   If is a matrix transformation and is a set of points, then the transformed set is the set of points in obtained by recording where sends each point of .  In symbols and we say  sends  to . We may also say is the image of under .    We are interested in understanding where matrix transformations send all sorts of geometric objects, including: lines, line segments, squares, and parallelograms.   Transforming a Line   Consider the matrix transformation associated to multiplication by , and the line . For each , and hence each point on ,     So  sends  to the new line  .  Again, let's visualize this transformation thinking of vectors as points . Lines are composed of points. Each value of parameter determines a point on the line. Below, we show with the dashed purple curves where several points on are sent to. By following where sends points, we see that every point on the line is sent to a point on the line .    By following the individual points that comprise the line, we may visualize the line and the associated transformed line on the same plane.      Visualize how playing with the entries of a matrix affects how the associated matrix transformation moves lines in the plane at GeoGebra ID: abuf7abt .   Matrix transformations send lines to lines   If is an matrix, is the associated transformation , , denotes either a closed interval or all of , and is a line (segment), then either:     , in which case (i.e., the whole line is sent to one point), otherwise,    the transformed line (segment) is also a line (segment) and has parametric vector form .      If , then and: If , then . Otherwise if and , then we have shown that for each , identifies the point on at time with the point on at time , and hence .     Matrix transformations send to   If is an matrix and is the transformation , then .    This justification formalizes the intuition that mixing zero serving sizes of vectors results in the zero mixture. If , then .     Matrix transformations send subspaces to subspaces   If is an matrix, is the transformation and is a subspace, then the transformed subspace is a subspace.    This justification is an activity in reasoning about properties . Subspaces are defined by having three properties (Definition ). We use the assumption that has these properties to deduce also has these properties. In this context, you want to show:    Contains Zero.  .    Closed Under Addition. If , then .    Closed Under Scaling. If and , then .    The details of this justification are left as an activity. As a hint, , , , and may be useful.      Transformations of the Plane  For the moment, we will restrict our focus to matrix transformations associated to matrices. Such transformations are transformations of the plane. What do matrix transformations do to the plane? The plane is big (in fact infinite!), so it is useful to restrict our focus to well-chosen small subsets of the plane. Perhaps the most reasonable place to start is a square.   Geometric Words and Geometric Gestures  Imagine a square is made out of elastic and you are holding it in your hands. What some clear geometric words and gestures you could use to instruct someone transform that elastic square?     Stretch by a certain factor in a given direction.     Reflect across a given line.     Rotate by a certain number of degrees in a given direction.     Project onto a line (or origin).     Shear a line (or vector) to another line while holding another line fixed.      A cartoon depicting transforming the unit square.     We usually visualize transformations of the plane by drawing both the input and output on the same plane . This gives us a sense of the movement of the transformation.   (Standard) Unit Square    The (standard) unit square is the parallelogram in the Euclidean plane with vertices: , , , and .    Visualizing the unit square and transformed unit square on the same plane.       As a consequence of and , to see what does to the unit square , it suffices to follow the three vertices , , and . Note that it is always important to clearly follow and label each vertex, as otherwise the pictures could mislead you.   Transforming a Square   In this example, we walk through how to use matrix multiplication and the unit square to reason about how transforms the plane.  By the above remarks, it suffices to follow what does to , , and . This amounts to the following three computations:    We plot these points, and since line segments are sent to line segments, we connect them up. We see we have drawn a rectangle.    Visualizing the unit square and transformed unit square on the same plane.     Now we think to ourselves, if the unit square is made of elastic, and I am holding it within my hands, how can I describe what I would have to do to it to obtain the transformed square? We see that we stretch the square by a factor of 2 in the -direction and we stretch the square by a factor of 3 in the -direction.  We have now created visual and verbal representations of the transformation given by the symbolic expression .        For each of the following matrices, use the type of analysis modeled in Example to:   Clearly sketch and label how the matrix transforms the unit square (be sure to follow and label each vertex).  In complete sentences, use geometric words to describe how the matrix transforms the plane. Be as clear and precise as possible.        Look at each matrix and associated transformed square. Can you make a conjecture relating the entries of your matrix to the vertices of the transformed square? How might you justify your conjecture?    Look at the parallelogram, , depicted in the image below.   Find a matrix so that . Verify you are correct.  Is your matrix the only one that sends the unit square to this parallelogram? Explain.       What matrix sends the unit square to this parallelogram?        A type of transformation we have not yet discussed is translation . Do you think translation is a matrix transformation?     The Transformation Visualizer Tool   In this activity, you will use the Transformation Visualizer Tool to investigate and visualize how the entries of a matrix affect the way the matrix transforms the unit square, and the plane more generally.      Finding matrix entries to create a given transformation. In this part, you will discover how the entries of the matrix affect the associated transformation. To begin, play with the sliders, one at a time, and then mixing them and see what transformations you get. Now go through systematically: How can you get stretches (vertically or horizontally), shears (horizontally or vertically), reflections across either axis, projections onto either axis, or rotations (counterclockwise or clockwise)? Clearly record your observations.     Creating visual and verbal representations from symbolic representations.   For each of the following matrices (I) use your Transformation Visualizer Tool to clearly depict how to the unit square is transformed and (II) within a text box, use geometric words and complete sentences to verbally describe how the matrix transforms the plane. (Note: you may need to use multiple geometric words, in the proper order.)      Relating the transformed unit square to mixture parallelograms.   If , then how does the quadrilateral relate to the vectors and ? Play with your sliders until you are confident in your answer. In complete and clear sentences, record this relationship.      In each image below, the unit square is red and the transformed unit square is blue.    Visualizing the transformation of the unit cube by a 3x3 matrix.    Visualize how playing with the entries of a matrix affects how the matrix transforms the unit square at GeoGebra ID: prKSK7EV .  Note that the matrix is very special. It gives the do nothing transformation. In other words, multiplication by always gives back the point you put in. For this reason is called the identity matrix.   Identity Matrix   The matrix with 1's along the diagonal and all other entries is the  identity matrix . We typically name the identity matrix .      If is the identity matrix and , then .    While stretches, reflections, projections, and shears relative to the - and -axes are relatively straight forward and easy to identify (once you get the hang of it) rotations are a little more subtle. I will now go over what a rotation matrix looks like.  Draw the unit square and then rotate it by radians counterclockwise (see ). What matrix sends to this rotated square?    The unit square (red) and the unit square rotated radians counterclockwise (blue).    Visualizing the rotations and of the unit square and the associated trigonometry.     To figure this out, I think about matrix multiplication as mixture (Matrix Multiplication Meaning #1 ) and the unit square to reason about the columns of a rotation matrix. Suppose that is our rotation matrix. Using just a little trigonometry (see above), we see that is sent to and is sent to . This gives us two computations:    It follows that the matrix that rotates the plane by radians counterclockwise is .  Visualize how sliding the parameter of a rotation matrix affects how it transform the unit square at GeoGebra ID: sPSqFaqP .  Below I summarize the \"simple\" classes of matrices according to their associated transformations:     Form  Name  Geometric Description     Scalar  When , this is a uniform stretch .     Diagonal  If and , then this is a pure stretch , by a factor of in the -direction and a factor of in the -direction. If or , this is a projection . If or , then this is a reflection (plus stretch).     Upper Triangular (with 1's on diagonal)  This is a pure shear by -units in the -direction (i.e. the -axis is sheared in the -direction to the line ).     Lower Triangular (with 1's on diagonal)  This is a pure shear by -units in the -direction (i.e. the -axis is sheared in the -direction to the line ).     Rotation  This is a rotation by radians counterclockwise.     This is not a complete list of important special matrices - you will encounter many more in this course. For example, in you explore two more important classes.    Transformations of for  If is an matrix, where , then is a transformation of . All of the transformations we encountered in the plane generalize to this context. Furthermore, there are no fundamentally new transformations.  For example, the diagonal matrix transforms the unit cube by stretching the -direction by a factor of 2, stretching the -direction by a factor of 3, and stretching the -direction by a factor of 5.    Visualizing the transformation of the unit cube by a 3x3 matrix.    Visualize how playing with the entries of a matrix affects how the matrix transform the unit cube at GeoGebra ID: xxyav5vz .   "
},
{
  "id": "def-matrix_transformation",
  "level": "2",
  "url": "chp3sec3.html#def-matrix_transformation",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Matrix Transformation.",
  "body": " Matrix Transformation   If is an matrix, then the rule where you input the serving size vector and output the mixture vector is a matrix transformation from to .  If we give the transformation the name  , then we write such that , or equivalently, .  If , then we say sends to . When is clear from context, we may write instead of .   "
},
{
  "id": "matrixmult_meaning2",
  "level": "2",
  "url": "chp3sec3.html#matrixmult_meaning2",
  "type": "Insight",
  "number": "3.3.2",
  "title": "Matrix Multiplication Meaning #2: <span class=\"process-math\">\\(A\\vect{x}=\\vect{b}\\)<\/span> as Transformation.",
  "body": " Matrix Multiplication Meaning #2: as Transformation  The matrix equation  means the transformation associated to multiplying by  sends the input serving size vector to the output mixture vector .  "
},
{
  "id": "ex-transforming_point",
  "level": "2",
  "url": "chp3sec3.html#ex-transforming_point",
  "type": "Example",
  "number": "3.3.3",
  "title": "Transforming a Point.",
  "body": " Transforming a Point   Consider the matrix transformation associated to multiplication by .  For any input vector , . So, for example, . The transformation  sends vector to vector .   Let's visualize this transformation thinking of vectors as points . Observe how on the same plot, we draw both input and output. This allows us to see how moves the points in the plane.    Visualizing the input (serving) vector and the output (mixture) vector on the same plane.      "
},
{
  "id": "notation-t-vs-a",
  "level": "2",
  "url": "chp3sec3.html#notation-t-vs-a",
  "type": "Remark",
  "number": "3.3.4",
  "title": "Notation: <span class=\"process-math\">\\(T\\)<\/span> vs <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": " Notation: vs  Please take note of the following subtle but important point: is the name of a rule of assignment, while is the name of a matrix . Think by analogy in calculus when you looked at the function . The function is a rule that doubles the input, while is just a number . While this rule and this number are related, they are distinct mathematical objects, just as and are distinct mathematical objects.  "
},
{
  "id": "def-transformed_set",
  "level": "2",
  "url": "chp3sec3.html#def-transformed_set",
  "type": "Definition",
  "number": "3.3.5",
  "title": "Transformed Sets.",
  "body": " Transformed Sets   If is a matrix transformation and is a set of points, then the transformed set is the set of points in obtained by recording where sends each point of .  In symbols and we say  sends  to . We may also say is the image of under .   "
},
{
  "id": "ex-transforming_line",
  "level": "2",
  "url": "chp3sec3.html#ex-transforming_line",
  "type": "Example",
  "number": "3.3.6",
  "title": "Transforming a Line.",
  "body": " Transforming a Line   Consider the matrix transformation associated to multiplication by , and the line . For each , and hence each point on ,     So  sends  to the new line  .  Again, let's visualize this transformation thinking of vectors as points . Lines are composed of points. Each value of parameter determines a point on the line. Below, we show with the dashed purple curves where several points on are sent to. By following where sends points, we see that every point on the line is sent to a point on the line .    By following the individual points that comprise the line, we may visualize the line and the associated transformed line on the same plane.     "
},
{
  "id": "prop-matrices_transform_lines",
  "level": "2",
  "url": "chp3sec3.html#prop-matrices_transform_lines",
  "type": "Proposition",
  "number": "3.3.7",
  "title": "Matrix transformations send lines to lines.",
  "body": " Matrix transformations send lines to lines   If is an matrix, is the associated transformation , , denotes either a closed interval or all of , and is a line (segment), then either:     , in which case (i.e., the whole line is sent to one point), otherwise,    the transformed line (segment) is also a line (segment) and has parametric vector form .      If , then and: If , then . Otherwise if and , then we have shown that for each , identifies the point on at time with the point on at time , and hence .   "
},
{
  "id": "prop-matrices_transform_zero",
  "level": "2",
  "url": "chp3sec3.html#prop-matrices_transform_zero",
  "type": "Proposition",
  "number": "3.3.8",
  "title": "Matrix transformations send <span class=\"process-math\">\\(\\vect{0}\\)<\/span> to <span class=\"process-math\">\\(\\vect{0}\\)<\/span>.",
  "body": " Matrix transformations send to   If is an matrix and is the transformation , then .    This justification formalizes the intuition that mixing zero serving sizes of vectors results in the zero mixture. If , then .   "
},
{
  "id": "prop-matrices_transform_subspaces",
  "level": "2",
  "url": "chp3sec3.html#prop-matrices_transform_subspaces",
  "type": "Proposition",
  "number": "3.3.9",
  "title": "Matrix transformations send subspaces to subspaces.",
  "body": " Matrix transformations send subspaces to subspaces   If is an matrix, is the transformation and is a subspace, then the transformed subspace is a subspace.    This justification is an activity in reasoning about properties . Subspaces are defined by having three properties (Definition ). We use the assumption that has these properties to deduce also has these properties. In this context, you want to show:    Contains Zero.  .    Closed Under Addition. If , then .    Closed Under Scaling. If and , then .    The details of this justification are left as an activity. As a hint, , , , and may be useful.   "
},
{
  "id": "language-geometric_transformations",
  "level": "2",
  "url": "chp3sec3.html#language-geometric_transformations",
  "type": "Remark",
  "number": "3.3.10",
  "title": "Geometric Words and Geometric Gestures.",
  "body": " Geometric Words and Geometric Gestures  Imagine a square is made out of elastic and you are holding it in your hands. What some clear geometric words and gestures you could use to instruct someone transform that elastic square?     Stretch by a certain factor in a given direction.     Reflect across a given line.     Rotate by a certain number of degrees in a given direction.     Project onto a line (or origin).     Shear a line (or vector) to another line while holding another line fixed.      A cartoon depicting transforming the unit square.    "
},
{
  "id": "def-unit_square",
  "level": "2",
  "url": "chp3sec3.html#def-unit_square",
  "type": "Definition",
  "number": "3.3.11",
  "title": "(Standard) Unit Square.",
  "body": " (Standard) Unit Square    The (standard) unit square is the parallelogram in the Euclidean plane with vertices: , , , and .    Visualizing the unit square and transformed unit square on the same plane.      "
},
{
  "id": "ex-transforming_square1",
  "level": "2",
  "url": "chp3sec3.html#ex-transforming_square1",
  "type": "Example",
  "number": "3.3.12",
  "title": "Transforming a Square.",
  "body": " Transforming a Square   In this example, we walk through how to use matrix multiplication and the unit square to reason about how transforms the plane.  By the above remarks, it suffices to follow what does to , , and . This amounts to the following three computations:    We plot these points, and since line segments are sent to line segments, we connect them up. We see we have drawn a rectangle.    Visualizing the unit square and transformed unit square on the same plane.     Now we think to ourselves, if the unit square is made of elastic, and I am holding it within my hands, how can I describe what I would have to do to it to obtain the transformed square? We see that we stretch the square by a factor of 2 in the -direction and we stretch the square by a factor of 3 in the -direction.  We have now created visual and verbal representations of the transformation given by the symbolic expression .   "
},
{
  "id": "activity-matrix-sketches",
  "level": "2",
  "url": "chp3sec3.html#activity-matrix-sketches",
  "type": "Activity",
  "number": "3.3.13",
  "title": "",
  "body": "    For each of the following matrices, use the type of analysis modeled in Example to:   Clearly sketch and label how the matrix transforms the unit square (be sure to follow and label each vertex).  In complete sentences, use geometric words to describe how the matrix transforms the plane. Be as clear and precise as possible.        Look at each matrix and associated transformed square. Can you make a conjecture relating the entries of your matrix to the vertices of the transformed square? How might you justify your conjecture?    Look at the parallelogram, , depicted in the image below.   Find a matrix so that . Verify you are correct.  Is your matrix the only one that sends the unit square to this parallelogram? Explain.       What matrix sends the unit square to this parallelogram?     "
},
{
  "id": "activity-translation-check",
  "level": "2",
  "url": "chp3sec3.html#activity-translation-check",
  "type": "Activity",
  "number": "3.3.14",
  "title": "",
  "body": "  A type of transformation we have not yet discussed is translation . Do you think translation is a matrix transformation?   "
},
{
  "id": "geogebra_TransformationVisualizer",
  "level": "2",
  "url": "chp3sec3.html#geogebra_TransformationVisualizer",
  "type": "Technology",
  "number": "3.3.15",
  "title": "The Transformation Visualizer Tool.",
  "body": " The Transformation Visualizer Tool   In this activity, you will use the Transformation Visualizer Tool to investigate and visualize how the entries of a matrix affect the way the matrix transforms the unit square, and the plane more generally.      Finding matrix entries to create a given transformation. In this part, you will discover how the entries of the matrix affect the associated transformation. To begin, play with the sliders, one at a time, and then mixing them and see what transformations you get. Now go through systematically: How can you get stretches (vertically or horizontally), shears (horizontally or vertically), reflections across either axis, projections onto either axis, or rotations (counterclockwise or clockwise)? Clearly record your observations.     Creating visual and verbal representations from symbolic representations.   For each of the following matrices (I) use your Transformation Visualizer Tool to clearly depict how to the unit square is transformed and (II) within a text box, use geometric words and complete sentences to verbally describe how the matrix transforms the plane. (Note: you may need to use multiple geometric words, in the proper order.)      Relating the transformed unit square to mixture parallelograms.   If , then how does the quadrilateral relate to the vectors and ? Play with your sliders until you are confident in your answer. In complete and clear sentences, record this relationship.     "
},
{
  "id": "def-identity_matrix",
  "level": "2",
  "url": "chp3sec3.html#def-identity_matrix",
  "type": "Definition",
  "number": "3.3.16",
  "title": "Identity Matrix.",
  "body": " Identity Matrix   The matrix with 1's along the diagonal and all other entries is the  identity matrix . We typically name the identity matrix .   "
},
{
  "id": "subsection-transformations_of_the_plane-16",
  "level": "2",
  "url": "chp3sec3.html#subsection-transformations_of_the_plane-16",
  "type": "Proposition",
  "number": "3.3.17",
  "title": "",
  "body": "  If is the identity matrix and , then .   "
},
{
  "id": "fig-rotating_square",
  "level": "2",
  "url": "chp3sec3.html#fig-rotating_square",
  "type": "Figure",
  "number": "3.3.18",
  "title": "",
  "body": " The unit square (red) and the unit square rotated radians counterclockwise (blue).    Visualizing the rotations and of the unit square and the associated trigonometry.    "
},
{
  "id": "subsection-transformations_of_the_plane-26",
  "level": "2",
  "url": "chp3sec3.html#subsection-transformations_of_the_plane-26",
  "type": "Table",
  "number": "3.3.19",
  "title": "",
  "body": "   Form  Name  Geometric Description     Scalar  When , this is a uniform stretch .     Diagonal  If and , then this is a pure stretch , by a factor of in the -direction and a factor of in the -direction. If or , this is a projection . If or , then this is a reflection (plus stretch).     Upper Triangular (with 1's on diagonal)  This is a pure shear by -units in the -direction (i.e. the -axis is sheared in the -direction to the line ).     Lower Triangular (with 1's on diagonal)  This is a pure shear by -units in the -direction (i.e. the -axis is sheared in the -direction to the line ).     Rotation  This is a rotation by radians counterclockwise.    "
},
{
  "id": "chp3sec4",
  "level": "1",
  "url": "chp3sec4.html",
  "type": "Lesson",
  "number": "3.4",
  "title": "Composition",
  "body": " Composition  If we have two transformations where the target of the first is the domain of the second, then we can chain them together and the output of the first becomes the input of the second .    A cartoon visualizing composition.     Composition   If and are matrix transformations, then the composition of transformation followed by transformation is the new transformation We denote this new rule and if , then .    Observe that, for composition to make sense, the list-length of the output of the first transformation must be equal to the list-length of inputs for the second matrix transformation.   In the notation above, is performed first , and is performed second . In other words, since we are using function notation, we read the transformation from right to left !   Composition is a very general concept which extends far beyond linear algebra. You will see it in calculus, analysis, geometry, and algebra, just to name a few places. However, if both and are matrix transformations, i.e., there exist matrices and such that and , then the composition is also a matrix transformation!   The composition of matrix transformations is a matrix transformation   If and , then .    Since matrix multiplication is associative (Proposition )       The product  means  first stretch by a factor of 2 in the -direction and factor of 3 in the -direction, and next shear the -axis in the -direction to the line .    Observe that if you performed the composition in the opposite order, you would get a different transformation!    Visualize composition as the product of matrices at GeoGebra ID: nq5kewqt .   Symbolic to Verbal   Given the following product, give a step by step list of how it transforms the plane. Be sure to use complete sentences and geometric words.      Verbal to Symbolic   Given the following list of transformations, give the associated matrix product:   Rotate clockwise,  Reflect across the -axis,  Stretch by a factor of 5 in the -direction (and nothing in the -direction).      Identifying Compositions   In this activity, you will expand upon GeoGebra Activity , looking more carefully at certain special classes of matrices which correspond to compositions of simple transformations.     Setting it up again. Quickly rebuild your Transformation Visualizer Tool . This is good practice as this should only take a moment. This should include the unit square, a matrix , and the transformed unit square.     Analyzing a new class of transformations. In this part, you will analyze the transformations given by the class of matrices of the form . Define two sliders  and , and within the Algebra Window , insert them in the appropriate places to create the matrix . Start analyzing the transformed unit square. Try a few specific values such at and . What do you see? Now as you vary and , what types of transformations are you seeing? Can you identify these transformations as a composition of two simple geometric transformations (e.g., stretch, shear, reflect, rotate, and\/or project)? Once you have some confidence in your description, carefully record it using geometric words in complete sentences.     Analyzing a new class of transformations. Repeat Part 2 for matrix and slider  . Start with values , then , and then go from there.       Decomposition as a problem solving strategy  A major goal of future lessons (see, for example, ) is to decompose a complicated matrix into a product of simpler matrices, thereby allowing us to identify its associated transformation as a composition of simple transformations.   "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "chp3sec4.html#def-composition",
  "type": "Definition",
  "number": "3.4.1",
  "title": "Composition.",
  "body": " Composition   If and are matrix transformations, then the composition of transformation followed by transformation is the new transformation We denote this new rule and if , then .   "
},
{
  "id": "chp3sec4-6",
  "level": "2",
  "url": "chp3sec4.html#chp3sec4-6",
  "type": "Warning",
  "number": "3.4.2",
  "title": "",
  "body": " In the notation above, is performed first , and is performed second . In other words, since we are using function notation, we read the transformation from right to left !  "
},
{
  "id": "prop-composition-matrix",
  "level": "2",
  "url": "chp3sec4.html#prop-composition-matrix",
  "type": "Proposition",
  "number": "3.4.3",
  "title": "The composition of matrix transformations is a matrix transformation.",
  "body": " The composition of matrix transformations is a matrix transformation   If and , then .    Since matrix multiplication is associative (Proposition )    "
},
{
  "id": "ex-composition-shear",
  "level": "2",
  "url": "chp3sec4.html#ex-composition-shear",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": "  The product  means  first stretch by a factor of 2 in the -direction and factor of 3 in the -direction, and next shear the -axis in the -direction to the line .    Observe that if you performed the composition in the opposite order, you would get a different transformation!   "
},
{
  "id": "activity-ch2-composition",
  "level": "2",
  "url": "chp3sec4.html#activity-ch2-composition",
  "type": "Activity",
  "number": "3.4.6",
  "title": "Symbolic to Verbal.",
  "body": " Symbolic to Verbal   Given the following product, give a step by step list of how it transforms the plane. Be sure to use complete sentences and geometric words.    "
},
{
  "id": "activity-composition-verbal-to-symbolic",
  "level": "2",
  "url": "chp3sec4.html#activity-composition-verbal-to-symbolic",
  "type": "Activity",
  "number": "3.4.7",
  "title": "Verbal to Symbolic.",
  "body": " Verbal to Symbolic   Given the following list of transformations, give the associated matrix product:   Rotate clockwise,  Reflect across the -axis,  Stretch by a factor of 5 in the -direction (and nothing in the -direction).    "
},
{
  "id": "geogebra-identifying_compositions",
  "level": "2",
  "url": "chp3sec4.html#geogebra-identifying_compositions",
  "type": "Activity",
  "number": "3.4.8",
  "title": "Identifying Compositions.",
  "body": " Identifying Compositions   In this activity, you will expand upon GeoGebra Activity , looking more carefully at certain special classes of matrices which correspond to compositions of simple transformations.     Setting it up again. Quickly rebuild your Transformation Visualizer Tool . This is good practice as this should only take a moment. This should include the unit square, a matrix , and the transformed unit square.     Analyzing a new class of transformations. In this part, you will analyze the transformations given by the class of matrices of the form . Define two sliders  and , and within the Algebra Window , insert them in the appropriate places to create the matrix . Start analyzing the transformed unit square. Try a few specific values such at and . What do you see? Now as you vary and , what types of transformations are you seeing? Can you identify these transformations as a composition of two simple geometric transformations (e.g., stretch, shear, reflect, rotate, and\/or project)? Once you have some confidence in your description, carefully record it using geometric words in complete sentences.     Analyzing a new class of transformations. Repeat Part 2 for matrix and slider  . Start with values , then , and then go from there.     "
},
{
  "id": "insight-decomposition-strategy",
  "level": "2",
  "url": "chp3sec4.html#insight-decomposition-strategy",
  "type": "Insight",
  "number": "3.4.9",
  "title": "Decomposition as a problem solving strategy.",
  "body": " Decomposition as a problem solving strategy  A major goal of future lessons (see, for example, ) is to decompose a complicated matrix into a product of simpler matrices, thereby allowing us to identify its associated transformation as a composition of simple transformations.  "
},
{
  "id": "chp3sec5",
  "level": "1",
  "url": "chp3sec5.html",
  "type": "Lesson",
  "number": "3.5",
  "title": "Matrix Multiplication as Mixture",
  "body": " Matrix Multiplication as Mixture  By this point, you should understand that the columns of the matrix product are mixtures of the columns of the matrix (Definition ), and you should have plenty of practice using this to compute many such products. You are now ready for a computational shortcut.  Let be an matrix and be an matrix. We know is an matrix. Fix between and and between and . We now analyze the entry of in row and column . Look at column of . By Definition , it is . Next, let's look at only row . The entry in row is . Collecting these observations gives us the following shortcut for computing the entries of the matrix product.   Pointer-Finger Shortcut For Matrix Multiplication   If is an matrix, is an matrix, and , then for each and , the entry may be computed as follows:    Put your left pointer finger on the left-most entry of the -th row of ,    Put your right pointer finger on the top entry of the -th column of :     Left hand goes right (across columns), right hand goes down (across rows).             Let's look at the same product as we did in Example. Compare this computation with the computation in Example and observe that this is essentially the same computation, with a few steps removed and streamlined.     This shortcut is not the definition of matrix multiplication, nor does it convey any sort of impactful, productive meaning of matrix multiplication. It is simply a convenient computational shortcut .   Going forward I expect you to be able to correctly implement this shortcut by hand for matrices and smaller.  There is nothing particularly different about performing this shortcut for larger matrices. Whether you have used this shortcut to compute the product of or matrices, you have demonstrated to me the same understandings. Were I to ask you to compute large matrix products by hand, I would only perpetuate the misconception people have that linear algebra is tedious and computational. I will not ask you to compute by hand the product of matrices larger than .  The algorithmic nature of the Pointer-Finger Shortcut is well-suited for programming into a computer, which in turn, can compute matrix multiplication quickly and accurately. I will now go over how to input matrices and perform matrix multiplication on GeoGebra. On GeoGebra, you input matrices in the Algebra window. You input a matrix as a list of rows . You begin and end each list with curly brackets { and } . For example, to input the matrix , I input A={{1,2},{3,4}} . Once you have input matrices and of the appropriate sizes, to compute their product, you input A*B .  Going forward, I expect that you should be able to input and compute the matrix product of potentially very large matrices.    Double check your computations in Activity with GeoGebra.     Meanings First, Computational Shortcuts Second  Suppose I run a business and am looking to hire someone who can use linear algebra to solve problems for me. If you show up to an interview with me and you say all you can do is compute matrix products (and perform row reduction), I will never hire you, because, as you can see, my computer can do it (for free) faster and with fewer errors than you ever could. However, my computer cannot reason, it cannot interpret, it cannot explain, and it cannot justify. If you can do those things, then I will want to hire you.   "
},
{
  "id": "shortcut-pointerfinger",
  "level": "2",
  "url": "chp3sec5.html#shortcut-pointerfinger",
  "type": "Algorithm",
  "number": "3.5.1",
  "title": "Pointer-Finger Shortcut For Matrix Multiplication.",
  "body": " Pointer-Finger Shortcut For Matrix Multiplication   If is an matrix, is an matrix, and , then for each and , the entry may be computed as follows:    Put your left pointer finger on the left-most entry of the -th row of ,    Put your right pointer finger on the top entry of the -th column of :     Left hand goes right (across columns), right hand goes down (across rows).          "
},
{
  "id": "ex-matrix-mult2",
  "level": "2",
  "url": "chp3sec5.html#ex-matrix-mult2",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  Let's look at the same product as we did in Example. Compare this computation with the computation in Example and observe that this is essentially the same computation, with a few steps removed and streamlined.   "
},
{
  "id": "insight-shortcut-meaning",
  "level": "2",
  "url": "chp3sec5.html#insight-shortcut-meaning",
  "type": "Insight",
  "number": "3.5.3",
  "title": "",
  "body": " This shortcut is not the definition of matrix multiplication, nor does it convey any sort of impactful, productive meaning of matrix multiplication. It is simply a convenient computational shortcut .  "
},
{
  "id": "activity-check-computations",
  "level": "2",
  "url": "chp3sec5.html#activity-check-computations",
  "type": "Activity",
  "number": "3.5.1",
  "title": "",
  "body": "  Double check your computations in Activity with GeoGebra.   "
},
{
  "id": "insight-meanings-first",
  "level": "2",
  "url": "chp3sec5.html#insight-meanings-first",
  "type": "Insight",
  "number": "3.5.4",
  "title": "Meanings First, Computational Shortcuts Second.",
  "body": " Meanings First, Computational Shortcuts Second  Suppose I run a business and am looking to hire someone who can use linear algebra to solve problems for me. If you show up to an interview with me and you say all you can do is compute matrix products (and perform row reduction), I will never hire you, because, as you can see, my computer can do it (for free) faster and with fewer errors than you ever could. However, my computer cannot reason, it cannot interpret, it cannot explain, and it cannot justify. If you can do those things, then I will want to hire you.  "
},
{
  "id": "chp4sec1",
  "level": "1",
  "url": "chp4sec1.html",
  "type": "Lesson",
  "number": "4.1",
  "title": "Solution Sets as Intersection",
  "body": " Solution Sets as Intersection  In a variety of contexts, we have encountered matrix equations of the form , where up to this point, typically the matrix and servings vector are known and we find the new mixture vector . We now focus our attention on the reverse situation where we know the matrix and mixture vector and wish to find a servings vector that satisfies the matrix equation . We call such a vector a solution vector to the matrix equation and the set of all such vectors is its solution set , denoted . In this lesson we revisit and reconceptualize solution sets.  Before analyzing the general situation, we specialize and look at small matrices. For the moment, consider the matrix equation where is a matrix, is a known vector, and we want to find a solution .  In the context of our two meanings of matrix multiplication, this means a solution vector is:    A servings vector to make as a linear combination of vectors and .    A point that the transformation sends to .    It is time to introduce a third conceptualization that is productive in analyzing the solution set to a matrix equation. The expression can be expanded as . For these two vectors to be equal, each of the corresponding entries must be equal. This means and must satisfy both   and  . Each equation imposes an algebraic constraint on the entries of a servings vector for it to be a solution set vector for the matrix equation.  Observe these algebraic constraints are the normal equations of lines! To satisfy one such equation is to say that the servings vector lies on the line, and hence, to satisfy both, is to say that the servings vector lies in their intersection. Hence a vector that satisfies is:    A point in the intersection of the system of lines:      Three Meanings of Solution Set   A vector that satisfies can be conceptualized as:    (Mixture) A servings vector to make as a combination of and .    (Transformation) A point that the transformation sends to .    (Intersection) A point in the intersection of the lines:        Interpretations Relative to the Three Meanings   Continuing , I now analyze the solution set to the equation . Observe that the two lines intersect at and . I now interpret this relative to each of our 3 meanings.   Meaning 1: Mixture. The servings necessary to write as a linear combination of vectors and are and , respectively.    Solution set as finding unknown scalars.     Meaning 2: Transformation. The transformation of the plane is a rotation of the plane by counterclockwise, together with a uniform stretch by a factor of } in all directions. The point that gets sent to under this transformation is .    Solution set as finding the unknown input.     Meaning 3: Intersection. The lines and intersect at the point .    Solution set as intersecting lines in .      Now consider the matrix equation where is a matrix, is a known vector, and we want to find a solution . The expression can be expanded as . For these two vectors to be equal, each of the corresponding entries must be equal. This means , , and must satisfy both   and  . Each equation imposes an algebraic constraint on the entries of a servings vector for it to be a solution set vector for the matrix equation.  Observe these algebraic constraints are the normal equations of planes ! For a vector to satisfy one such equation is to say that it lies on the plane , and hence, to satisfy both, is to say that the vector lies in both planes at the same time. Hence a vector that satisfies is a point in the intersection of the system of planes :    Three Meanings of Solution Set   A vector that satisfies can be conceptualized as:    (Mixture) A servings vector to make as a combination of , , and .    (Transformation) A point that the transformation sends to .    (Intersection) A point in the intersection of the planes:        Interpretations Relative to the Three Meanings   Meaning 3 allows us to find the solution set. Using GeoGebra, we can plot the planes and we can see that its intersection is a line. We can read off an initial position and velocity, and conclude it is the line with parametric vector form: Interpreting this solution relative to the three meanings:     (Mixture) For any , we mix:    (Transformation) Under the transformation , the whole line is sent to .    (Intersection) The line is the intersection of the planes:     GeoGebra rendering of two planes intersecting along a line in 3D space.      We now generalize to a matrix equation where is . The matrix equation can be written using its entries as which can be expanded to Two vectors are equal if and only if their entries are equal and hence a solution vector must satisfy each of the following equations:   Observe that each equation places a linear constraint on solution vectors. The set of points that satisfy such a linear constraint are called hyperplanes.   Hyperplane   The set of points in that satisfy a linear constraint is a hyperplane in . In symbols, Such a linear constraint equation is a normal equation for that hyperplane.    A hyperplane in is a line and a hyperplane in is a plane.    A hyperplane is an -plane.    To prove this proposition, I will use the strategy first used in the proof of where we first substitute in the constraining equation and then use linear combinations to split the vector apart.   Let be a hyperplane with normal equation . At least one of the 's is nonzero. I will prove the proposition when , and leave for you the case where . The normal equation is algebraically equivalent to Pick a point and look at its column: Observe that the last vectors are separated, and hence independent ( ).   In the definition of hyperplane, we require at least one of the 's to be nonzero. If all the 's are zero, we still get a constraining equation, but the set of all points that satisfy them are not hyperplanes. Let's quickly go over the two cases.  First, observe that the zero equation  places no meaningful constraint on vectors as every vector satisfies it, and hence On the other hand, what I call a zero-one equation (here, one can be replaced by any nonzero number and the same conclusions hold) places too alert of a constraint on vectors as no vector satisfies it, and hence   When we have many hyperplanes, as we do when analyzing a solution set, we call this a system of hyperplanes.   Systems of Hyperplanes   A system of hyperplanes in is a collection of -many hyperplanes, . If we have normal forms for the equations of each hyperplane, we can represent this collection with a system of linear equations in variables  : where .    Hyperplanes live in the set of servings vectors. A solution vector to must satisfy each of the constraints from , so it lies on each hyperplane.   Intersection   If are hyperplanes, then a point lies in their intersection if it lies on each hyperplane . In symbols, we then write .      Describe the intersection of the system of three lines depicted below.    A 2D coordinate system plotting three intersecting lines: a red line y = x - 1, a blue line y = 5 - x, and a green horizontal line y = 4.       Solution Set Meaning #3: as Intersection  If is , then the matrix equation  means that we are considering a system of -many hyperplanes in and a solution to the matrix equation is a point in the intersection of the system. In symbols, if has associated hyperplanes , then:    In , we will develop an efficient algorithm for finding these intersections.    Consider the matrix equation: Via Solution Set Meaning #3, the solution set is the collection of all points in that lie in the intersection of the 3 hyperplanes in :       If   is a matrix which is known ,    is known , and    is unknown ,   then the solution set, , for the matrix equation means:    (Mixture) The servings vectors in to make with the columns of .    (Transformation) The points in that the transformation sends to .    (Intersection) The intersection in of the system of 18 hyperplane rows of .      "
},
{
  "id": "chp4sec1-2",
  "level": "2",
  "url": "chp4sec1.html#chp4sec1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution vector solution set "
},
{
  "id": "ex-3meaning",
  "level": "2",
  "url": "chp4sec1.html#ex-3meaning",
  "type": "Example",
  "number": "4.1.1",
  "title": "Three Meanings of Solution Set.",
  "body": " Three Meanings of Solution Set   A vector that satisfies can be conceptualized as:    (Mixture) A servings vector to make as a combination of and .    (Transformation) A point that the transformation sends to .    (Intersection) A point in the intersection of the lines:      "
},
{
  "id": "ex-interpretsolutionset1",
  "level": "2",
  "url": "chp4sec1.html#ex-interpretsolutionset1",
  "type": "Example",
  "number": "4.1.2",
  "title": "Interpretations Relative to the Three Meanings.",
  "body": " Interpretations Relative to the Three Meanings   Continuing , I now analyze the solution set to the equation . Observe that the two lines intersect at and . I now interpret this relative to each of our 3 meanings.   Meaning 1: Mixture. The servings necessary to write as a linear combination of vectors and are and , respectively.    Solution set as finding unknown scalars.     Meaning 2: Transformation. The transformation of the plane is a rotation of the plane by counterclockwise, together with a uniform stretch by a factor of } in all directions. The point that gets sent to under this transformation is .    Solution set as finding the unknown input.     Meaning 3: Intersection. The lines and intersect at the point .    Solution set as intersecting lines in .     "
},
{
  "id": "ex-3meaning2",
  "level": "2",
  "url": "chp4sec1.html#ex-3meaning2",
  "type": "Example",
  "number": "4.1.3",
  "title": "Three Meanings of Solution Set.",
  "body": " Three Meanings of Solution Set   A vector that satisfies can be conceptualized as:    (Mixture) A servings vector to make as a combination of , , and .    (Transformation) A point that the transformation sends to .    (Intersection) A point in the intersection of the planes:      "
},
{
  "id": "ex-interpretsolutionset2",
  "level": "2",
  "url": "chp4sec1.html#ex-interpretsolutionset2",
  "type": "Example",
  "number": "4.1.4",
  "title": "Interpretations Relative to the Three Meanings.",
  "body": " Interpretations Relative to the Three Meanings   Meaning 3 allows us to find the solution set. Using GeoGebra, we can plot the planes and we can see that its intersection is a line. We can read off an initial position and velocity, and conclude it is the line with parametric vector form: Interpreting this solution relative to the three meanings:     (Mixture) For any , we mix:    (Transformation) Under the transformation , the whole line is sent to .    (Intersection) The line is the intersection of the planes:     GeoGebra rendering of two planes intersecting along a line in 3D space.     "
},
{
  "id": "def-hyperplane",
  "level": "2",
  "url": "chp4sec1.html#def-hyperplane",
  "type": "Definition",
  "number": "4.1.5",
  "title": "Hyperplane.",
  "body": " Hyperplane   The set of points in that satisfy a linear constraint is a hyperplane in . In symbols, Such a linear constraint equation is a normal equation for that hyperplane.   "
},
{
  "id": "prop-hyperplane-is-kplane",
  "level": "2",
  "url": "chp4sec1.html#prop-hyperplane-is-kplane",
  "type": "Proposition",
  "number": "4.1.6",
  "title": "",
  "body": "  A hyperplane is an -plane.   "
},
{
  "id": "chp4sec1-21",
  "level": "2",
  "url": "chp4sec1.html#chp4sec1-21",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " Let be a hyperplane with normal equation . At least one of the 's is nonzero. I will prove the proposition when , and leave for you the case where . The normal equation is algebraically equivalent to Pick a point and look at its column: Observe that the last vectors are separated, and hence independent ( ).  "
},
{
  "id": "def-hyperplane-system",
  "level": "2",
  "url": "chp4sec1.html#def-hyperplane-system",
  "type": "Definition",
  "number": "4.1.7",
  "title": "Systems of Hyperplanes.",
  "body": " Systems of Hyperplanes   A system of hyperplanes in is a collection of -many hyperplanes, . If we have normal forms for the equations of each hyperplane, we can represent this collection with a system of linear equations in variables  : where .   "
},
{
  "id": "def-intersection",
  "level": "2",
  "url": "chp4sec1.html#def-intersection",
  "type": "Definition",
  "number": "4.1.8",
  "title": "Intersection.",
  "body": " Intersection   If are hyperplanes, then a point lies in their intersection if it lies on each hyperplane . In symbols, we then write .   "
},
{
  "id": "act-describe-intersection",
  "level": "2",
  "url": "chp4sec1.html#act-describe-intersection",
  "type": "Activity",
  "number": "4.1.9",
  "title": "",
  "body": "  Describe the intersection of the system of three lines depicted below.    A 2D coordinate system plotting three intersecting lines: a red line y = x - 1, a blue line y = 5 - x, and a green horizontal line y = 4.     "
},
{
  "id": "meaning-mm3_int",
  "level": "2",
  "url": "chp4sec1.html#meaning-mm3_int",
  "type": "Insight",
  "number": "4.1.10",
  "title": "Solution Set Meaning #3: <span class=\"process-math\">\\(A\\vect{x}=\\vect{b}\\)<\/span> as Intersection.",
  "body": " Solution Set Meaning #3: as Intersection  If is , then the matrix equation  means that we are considering a system of -many hyperplanes in and a solution to the matrix equation is a point in the intersection of the system. In symbols, if has associated hyperplanes , then:   "
},
{
  "id": "ex-r4-hyperplanes",
  "level": "2",
  "url": "chp4sec1.html#ex-r4-hyperplanes",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Consider the matrix equation: Via Solution Set Meaning #3, the solution set is the collection of all points in that lie in the intersection of the 3 hyperplanes in :    "
},
{
  "id": "ex-general-meanings-summary",
  "level": "2",
  "url": "chp4sec1.html#ex-general-meanings-summary",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  If   is a matrix which is known ,    is known , and    is unknown ,   then the solution set, , for the matrix equation means:    (Mixture) The servings vectors in to make with the columns of .    (Transformation) The points in that the transformation sends to .    (Intersection) The intersection in of the system of 18 hyperplane rows of .     "
},
{
  "id": "chp4sec2",
  "level": "1",
  "url": "chp4sec2.html",
  "type": "Lesson",
  "number": "4.2",
  "title": "Expectations for Intersections",
  "body": " Expectations for Intersections  Before we start symbolically solving for solution sets, we should develop our intuition so we have an expectation as to the form of the most likely solution set. This way of thinking is an important part of thinking like a mathematician and helps us be more than just symbol pushers.  In this lesson, we will think of solution sets as intersections (see ). More precisely, if is an matrix and , then this matrix equation corresponds to a system of -many hyperplanes in and is its intersection. We will be guided by two motivating questions:    What are all the different types of configurations of -many hyperplanes in and what do their intersections look like?    Are some of the types of configurations more likely to occur than others?    To start, think about two lines in the plane. There are three possible types of configurations:    Disjoint  Parallel, but not equal. In this case their intersection is empty.    Crossing  Intersecting, but not equal. In this case their intersection is a point.    Equal  Equal. In this case their intersection is that line (and hence infinite).     Types of configurations of two lines in the plane: disjoint, crossing, and equal.    Configurations of two intersecting lines in .     Now let's think about three lines in the plane. Three lines can be formed by adding a line to our two-line configurations. If my third line is equal to either of the first two, then I do not get a new configuration - the picture will look the same. There are four possible new types of configurations:   New types of configurations of three lines in the plane.    Configurations of three intersecting lines in .     Only the last configuration, where all lines go through a single point, has a nonempty intersection. Take a moment to reason through why all the others have an empty intersection.   Intersections of Random Lines in 2-Space  If you randomly toss two lines into 2-space, what do you expect their intersection to be? Are all configurations equally likely or perhaps would you expect one to happen more frequently than the others? In this activity, you will explore intersections of random lines in the plane using the Line Tossing Tool at GeoGebra ID: r72dwnmr .    Sampling  Show and then re-toss line 2 10 times . Count how many times line 1 and line 2 are disjoint, crossing, and equal. Record your findings.    Conjecture and Informal Justification  Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture.    Interpret  What would your conjecture mean about how likely it would be you could make a random vector in with two random vectors in . (If necessary, revisit how to move from Meaning : Intersection to Meaning : Mixture in .)    Repeated Reasoning  Repeat the above reasoning for a third line. Show and then re-toss line 3 10 times . Record the types of configurations are you observing. (Be sure to move the window and zoom in as necessary to investigate.) Make a conjecture as to which configurations occur most often and try to justify. (Hint for justification: focus on comparing line 3 with the intersection of the previous lines.)    Interpret  Interpret what your conjecture would mean about how likely it would be you could make a random vector in with two random vectors in .    Generalize  Generalize your conjecture to the expected intersection of -many lines in the plane. Interpret this conjecture in terms of the makeability of a random vector with two random vectors in .     I will now provide some explanation for what you found.  Start by tossing in your first line. It has some slope . Now let's toss in our second line. This second line could be any line, so its slope could be any real number. What is the odds that this number is precisely ? This almost certainly will not happen. So, while there are exceptions, you should expect a random system of two lines in the plane to intersect at a single point.  What happens what you toss a third line into the plane? What do you expect their intersection to be? While there are many more possible configurations, remember, most likely the first two lines intersect at a single point, and almost certainly, the third line does not go through that point. So, while there are exceptions, you should expect a system of three lines in the plane to not share an intersection point, i.e. the associated solution set is empty.  More generally we have the following:   Expectation: Lines in 2-Space  If lines are randomly tossed into the plane, then we expect their intersection to be:    A line if ,    A point if ,    Empty if .      Expectations of Planes in 3-Space  If you randomly toss two planes into 3-space, what do you expect their intersection to be? Are all configurations equally likely or perhaps would you expect one to happen more frequently than the others? In this activity, you will explore intersections of random planes in 3-space using the Plane Tossing Tool at GeoGebra ID: gvhnggvy .    Enumerate Configurations of 2 Planes  To begin, consider 2 planes in 3-space. There are three possible types of configurations. Both sketch and describe in sentences each type of configuration. In each case, what does their intersection look like?    Likelihood of Configurations of 2 Planes  Using the Plane Tossing Tool , show and then re-toss plane 2 10 times . Count how many times plane 1 and plane 2 are in each of the above three types of configurations. Record your findings. Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture.    Interpret  What would your conjecture mean about how likely it would be you could make a random vector in with three random vectors in . (If necessary, revisit how to move from Meaning : Intersection to Meaning : Mixture in Lesson .)    Repeated Reasoning - Configurations of 3 Planes  Try to list all of the possible types of configurations of 3 planes. (Hint: build upon your list of configurations of 2 planes.) Using the Plane Tossing Tool , show and then re-toss plane 3 10 times . Count the number of times you observe the different types of configurations. Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture. (Hint for justification: focus on comparing plane 3 with the intersection of the previous planes.)    Repeated Reasoning - Configurations of 4 Planes  Using the Plane Tossing Tool , show and then re-toss plane 4 10 times . Count the number of times you observe the different types of configurations. (Hint: If you find that your screen is getting too messy, then select Show intersection of 3 planes and deselect Show Plane 1 , Show Plane 2 , and Show Plane 3 . That way, you can focus on comparing the intersection of the first three with plane 4.) Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture. (Hint for justification: focus on comparing plane 4 with the intersection of the previous planes.)    Generalize  Generalize your conjecture to the expected intersection of -many planes in 3-space. Interpret this conjecture in terms of the makeability of a random vector with three random vectors in .     After having gone through , you should have established the following expectations for the intersection of -many planes in 3-space.   Expectation: Planes in 3-Space  If planes are randomly tossed into 3-space, then we expect their intersection to be:    A plane if ,    A line if ,    A point if ,    Empty if .      Two planes in 3-space intersecting in a line.    Configuration of two intersecting lines in .     Now let's try to generalize to -space, for . We know a single hyperplane is an -plane (see ). From our observations in 2-space and 3-space, the following appears to be true: if we intersect a -plane with a random hyperplane, then we are most likely to get a -plane. This is in fact something we will be able to algebraically justify in future lessons.  Putting this together, we can generalize our thinking to the following expectations.   Expectation: Hyperplanes in -Space  If hyperplanes are randomly tossed into -space, then we expect their intersection to be:    an -plane if , (see ). In particular, when we expect a point.    empty if .      Visualizing Intersections of Hyperplanes  In this activity, you will reason about and visualize the intersections of hyperplanes in and . You will use these intersections to then reason about solution sets of matrix equations. The GeoGebra objects you should gain proficiency with are: Line , Plane , Intersect , and Intersect Two Surfaces . The four systems of hyperplanes you will be working with are below. Go through the parts for each one separately.         Verbalize.  Before doing any computations or inputting anything into GeoGebra, verbally describe the situation in the context of hyperplanes. (Be sure to mention if we are in or and mention how many hyperplanes we are considering.)      Expectations.  Before making any computations, do you expect the solution set to be empty, a single point, a line, or a plane? Explain.      Visualize.  Input the system symbolically into the GeoGebra Algebra Window and look at the collection visually (either in the Graphics Window or 3D Graphics Window depending if the system has 2 or 3 variables). Use the intersection tools to find their intersections.      Analyze.  In complete sentences, describe the solution set you found using geometric words. Reflect on if this matches your expectations.      Interpret.  In complete sentences, and using GeoGebra visualizations, interpret your solution set relative to Matrix Multiplication Meaning 1 and to Matrix Multiplication Meaning 2 (see ).      "
},
{
  "id": "figure-two_lines_in_plane",
  "level": "2",
  "url": "chp4sec2.html#figure-two_lines_in_plane",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Types of configurations of two lines in the plane: disjoint, crossing, and equal.    Configurations of two intersecting lines in .    "
},
{
  "id": "figure-three_lines_in_plane",
  "level": "2",
  "url": "chp4sec2.html#figure-three_lines_in_plane",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " New types of configurations of three lines in the plane.    Configurations of three intersecting lines in .    "
},
{
  "id": "activity-intersections_random_lines",
  "level": "2",
  "url": "chp4sec2.html#activity-intersections_random_lines",
  "type": "Activity",
  "number": "4.2.3",
  "title": "Intersections of Random Lines in 2-Space.",
  "body": " Intersections of Random Lines in 2-Space  If you randomly toss two lines into 2-space, what do you expect their intersection to be? Are all configurations equally likely or perhaps would you expect one to happen more frequently than the others? In this activity, you will explore intersections of random lines in the plane using the Line Tossing Tool at GeoGebra ID: r72dwnmr .    Sampling  Show and then re-toss line 2 10 times . Count how many times line 1 and line 2 are disjoint, crossing, and equal. Record your findings.    Conjecture and Informal Justification  Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture.    Interpret  What would your conjecture mean about how likely it would be you could make a random vector in with two random vectors in . (If necessary, revisit how to move from Meaning : Intersection to Meaning : Mixture in .)    Repeated Reasoning  Repeat the above reasoning for a third line. Show and then re-toss line 3 10 times . Record the types of configurations are you observing. (Be sure to move the window and zoom in as necessary to investigate.) Make a conjecture as to which configurations occur most often and try to justify. (Hint for justification: focus on comparing line 3 with the intersection of the previous lines.)    Interpret  Interpret what your conjecture would mean about how likely it would be you could make a random vector in with two random vectors in .    Generalize  Generalize your conjecture to the expected intersection of -many lines in the plane. Interpret this conjecture in terms of the makeability of a random vector with two random vectors in .    "
},
{
  "id": "expectation-lines_in_r2",
  "level": "2",
  "url": "chp4sec2.html#expectation-lines_in_r2",
  "type": "Insight",
  "number": "4.2.4",
  "title": "Expectation: Lines in 2-Space.",
  "body": " Expectation: Lines in 2-Space  If lines are randomly tossed into the plane, then we expect their intersection to be:    A line if ,    A point if ,    Empty if .    "
},
{
  "id": "activity-expectations_planes_R3",
  "level": "2",
  "url": "chp4sec2.html#activity-expectations_planes_R3",
  "type": "Activity",
  "number": "4.2.5",
  "title": "Expectations of Planes in 3-Space.",
  "body": " Expectations of Planes in 3-Space  If you randomly toss two planes into 3-space, what do you expect their intersection to be? Are all configurations equally likely or perhaps would you expect one to happen more frequently than the others? In this activity, you will explore intersections of random planes in 3-space using the Plane Tossing Tool at GeoGebra ID: gvhnggvy .    Enumerate Configurations of 2 Planes  To begin, consider 2 planes in 3-space. There are three possible types of configurations. Both sketch and describe in sentences each type of configuration. In each case, what does their intersection look like?    Likelihood of Configurations of 2 Planes  Using the Plane Tossing Tool , show and then re-toss plane 2 10 times . Count how many times plane 1 and plane 2 are in each of the above three types of configurations. Record your findings. Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture.    Interpret  What would your conjecture mean about how likely it would be you could make a random vector in with three random vectors in . (If necessary, revisit how to move from Meaning : Intersection to Meaning : Mixture in Lesson .)    Repeated Reasoning - Configurations of 3 Planes  Try to list all of the possible types of configurations of 3 planes. (Hint: build upon your list of configurations of 2 planes.) Using the Plane Tossing Tool , show and then re-toss plane 3 10 times . Count the number of times you observe the different types of configurations. Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture. (Hint for justification: focus on comparing plane 3 with the intersection of the previous planes.)    Repeated Reasoning - Configurations of 4 Planes  Using the Plane Tossing Tool , show and then re-toss plane 4 10 times . Count the number of times you observe the different types of configurations. (Hint: If you find that your screen is getting too messy, then select Show intersection of 3 planes and deselect Show Plane 1 , Show Plane 2 , and Show Plane 3 . That way, you can focus on comparing the intersection of the first three with plane 4.) Do your findings suggest one of the types of configurations occur more often than the others? Make and clearly write down a conjecture. Try to provide an informal justification for your conjecture. (Hint for justification: focus on comparing plane 4 with the intersection of the previous planes.)    Generalize  Generalize your conjecture to the expected intersection of -many planes in 3-space. Interpret this conjecture in terms of the makeability of a random vector with three random vectors in .    "
},
{
  "id": "expectation-planes_in_r3",
  "level": "2",
  "url": "chp4sec2.html#expectation-planes_in_r3",
  "type": "Insight",
  "number": "4.2.6",
  "title": "Expectation: Planes in 3-Space.",
  "body": " Expectation: Planes in 3-Space  If planes are randomly tossed into 3-space, then we expect their intersection to be:    A plane if ,    A line if ,    A point if ,    Empty if .    "
},
{
  "id": "figure-random_intersecting_planes",
  "level": "2",
  "url": "chp4sec2.html#figure-random_intersecting_planes",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": " Two planes in 3-space intersecting in a line.    Configuration of two intersecting lines in .    "
},
{
  "id": "expectation-hyperplanes_in_rn",
  "level": "2",
  "url": "chp4sec2.html#expectation-hyperplanes_in_rn",
  "type": "Insight",
  "number": "4.2.8",
  "title": "Expectation: Hyperplanes in <span class=\"process-math\">\\(n\\)<\/span>-Space.",
  "body": " Expectation: Hyperplanes in -Space  If hyperplanes are randomly tossed into -space, then we expect their intersection to be:    an -plane if , (see ). In particular, when we expect a point.    empty if .    "
},
{
  "id": "geoactivity_visualizingintersections",
  "level": "2",
  "url": "chp4sec2.html#geoactivity_visualizingintersections",
  "type": "Activity",
  "number": "4.2.9",
  "title": "Visualizing Intersections of Hyperplanes.",
  "body": " Visualizing Intersections of Hyperplanes  In this activity, you will reason about and visualize the intersections of hyperplanes in and . You will use these intersections to then reason about solution sets of matrix equations. The GeoGebra objects you should gain proficiency with are: Line , Plane , Intersect , and Intersect Two Surfaces . The four systems of hyperplanes you will be working with are below. Go through the parts for each one separately.         Verbalize.  Before doing any computations or inputting anything into GeoGebra, verbally describe the situation in the context of hyperplanes. (Be sure to mention if we are in or and mention how many hyperplanes we are considering.)      Expectations.  Before making any computations, do you expect the solution set to be empty, a single point, a line, or a plane? Explain.      Visualize.  Input the system symbolically into the GeoGebra Algebra Window and look at the collection visually (either in the Graphics Window or 3D Graphics Window depending if the system has 2 or 3 variables). Use the intersection tools to find their intersections.      Analyze.  In complete sentences, describe the solution set you found using geometric words. Reflect on if this matches your expectations.      Interpret.  In complete sentences, and using GeoGebra visualizations, interpret your solution set relative to Matrix Multiplication Meaning 1 and to Matrix Multiplication Meaning 2 (see ).     "
},
{
  "id": "chp4sec3a",
  "level": "1",
  "url": "chp4sec3a.html",
  "type": "Lesson",
  "number": "4.3",
  "title": "Computing RREF",
  "body": " Computing RREF  Recall that we want to understand solution sets of matrix equations. Via , we can conceptualize solution sets as intersections. In this lesson, we introduce three fundamental actions we can perform on the equations of the hyperplanes of a system in which do not change their intersection. Our goal is to successively use these three actions to create a new, simpler system with the same intersection from which we may readily read off the parametric vector form of a solution set.  You may very well already be familiar with the idea of manipulating the equations of a system of lines so that we can one-by-one eliminate variables . For example, we may use elimination to find the intersection of the lines and .      Visualizing elimination as successive changes to a system of lines.        Observe that elimination in this context geometrically means successively replace our current collection of lines with a new collection that is simpler but has the same intersection.   Consider a system of two hyperplanes in , with normal equations:       Observation 1  If we re-order (a.k.a. permute ) the system , then the set of hyperplanes remains unchanged, and hence, so does its intersection. In symbols, both systems and are the same set of hyperplanes and hence have the exact same intersection.    Observation 2  If is nonzero, let be the name of the hyperplane with normal equation . Since we can multiply by and , a point satisfies if and only if it satisfies . Scaling the equation does not change the hyperplane! In symbols, .  Furthermore, the original and scaled equations are both normal equations for the same hyperplane. If we scale a normal equation for a hyperplane in , then the set of hyperplanes remains unchanged, and hence, so does its intersection. In symbols, both systems and are the same set of hyperplanes and hence have the exact same intersection.    Neither permuting nor scaling actually eliminates variables, rather they enable us to clean up the equations of our hyperplanes in preparation for the third and final action, which does eliminate variables: addition.    Observation 3  Suppose . Then satisfies both normal equations and . By scaling and adding these two expressions together,   we deduce must also satisfy the equation . If is the name of the hyperplane with normal equation , then .  Conversely, if , there is a symmetric justification for why . So, while and are likely different hyperplanes, the intersections of the two systems and are the same .     Observe how sliding the multiplier rotates line around the axis formed at the intersection of lines and at GeoGebra ID: xc82hg6w . Can you slide the multiplier until the new line is vertical? If so, then you have eliminated the -variable!   Since each hyperplane is represented as a row in our system via normal equations, these actions take the form of manipulating the rows of our system. As such, we call each a row operation on our system. The above actions are summarized and symbolized in .   Row Operations   The three fundamental row operations are:    Permute rows and . We denote this by .    Scale row by nonzero scalar . We denote this by .    Add a scalar multiple of row to row . We denote this by .    We read these as Row is replaced by... or Row becomes... .     Augmented Matrix as Compact Notation of Matrix Equation  The notation of a system of hyperplanes can be cumbersome, and we want to streamline things since our goal is to be able to analyze systems with hundreds of variables and hundreds of equations. Observe that at each step of elimination, the 's, 's, and 's were all superfluous, all that mattered was the coefficients in the correct places. So, let's throw out these symbols and just record the coefficients in the correct places, placing a vertical line, the equals bar , where the equal signs should go. This gives us the augmented matrix associated to the system.  For example, becomes and more generally becomes .   The equals bar in an augmented matrix is there for our convenience, to remind us where the equals symbols should go when we reinterpret this augmented matrix as a system of equations. It can be, and often is, omitted. In such situations, it is your responsibility to remember where it goes.   Row Equivalent   If there is a sequence of row operations turning one matrix into another matrix, then the matrices are row equivalent . Symbolically, if and are row equivalent matrices, then we write .    Row equivalent augmented matrices always have equal solution sets! In symbols, if , then . Since row operations do not affect a column of zeros (think this through to convince yourself), it follows that and are row equivalent if and only if and are row equivalent. In particular, if and are row equivalent, then .  We now have efficient notation for writing systems and row operations.     Observe how and encode the same information.  The question now becomes, what is our desired outcome of this simplification process? How do we know when we are done? The answer is reduced row echelon form .   Reduced Row Echelon Form (rref)   A matrix is in reduced row echelon form (rref) if    All zero rows are at the bottom,    Each nonzero row starts with a 1 (called a leading 1 in the pivot position ), and    A leading 1 is to the right of all leading 1's in above rows.    All entries in a column above a leading 1 are 0's.      Condition (R3) is sometimes called the staircase condition because it requires that the zeros form a staircase moving downward from the top left. Observe this staircase in each of the following examples of matrices in reduced row echelon form:     In (R2), a pivot position of a matrix is the entry in which a leading 1 will appear in rref. So, for example, the matrix has pivot positions 1-1 and 2-2. Pivot positions play an important role in elimination and it is useful to have language to reference these positions.  Any matrix can be put into reduced row echelon form through a sequence of elementary row operations. If is a matrix, then we denote its reduced row echelon form .  Elimination can now be characterized as using row operations to put our augmented matrix into rref, from which we can then interpret the solution set.   Gaussian Elimination   If is a matrix, then the following sequence of row operations will produce .    Start at the top left. Make that a 1.  Use the pivot position to clear below.  Move right to next pivot position & repeat.  Get echelon form.  Start at the bottom right.  Use the pivot position to clear above.  Move left to next pivot position & repeat.  Finish with rref.      Take a moment to think about the different ways to compute the reduced row echelon form of the matrix Observe that one way introduces fractions while another does not. Both ways will give you the same reduced row echelon form matrix, however you will likely find that the way that avoids fractions is simpler computationally (and less likely to produce computational errors). When computing rref by hand, I encourage you to think through your options and select the sequence of row operations that is computationally simplest.   Computing and Interpreting rref   For each augmented matrix below, do each part.     Verbalize. Explain what it means geometrically in terms of intersecting hyperplanes.    Expectations. Describe what you expect the solution set to be.    Compute. Use the Gaussian Elimination strategy to put the matrix into rref by hand.         Many students come out of their linear algebra courses just knowing how to use row operations to put a matrix in reduced row echelon form. While this is important, as we shall shortly see, computers do this quite easily. It is far more valuable for you to be able to set up an augmented matrix and then interpreting the meaning of its associated reduced row echelon form.   rref in GeoGebra   In this activity, you will symbolically find and interpret solution sets. The GeoGebra objects you should gain proficiency with are: matrix and ReducedRowEchelon . You will do so by revisiting the systems from GeoGebra , in which you visually found the solution sets. Do each part for each system.     Compute. Using list notation, input the system as an augmented matrix. (Note that the equals bar cannot be input, so just remember where it goes.) Using ReducedRowEchelon , find the reduced row echelon form of the matrix.    -Planes. Interpret the rref matrix to write the solution set to the system in parametric vector form.    Compare. Reflect on if your solutions set agrees with the one you found via intersection tools in GeoGebra .       Going forward, I expect you to be able to flexibly and correctly implement the Gaussian Elimination by hand for matrices and smaller. There is nothing particularly different about performing Gaussian Elimination for larger matrices. Whether you have used Gaussian Elimination to compute the rref of or matrices, you have demonstrated the same understandings. You should be able to use technology such as GeoGebra to be able compute the rref for both small and large matrices.  "
},
{
  "id": "fig-elimination-lines",
  "level": "2",
  "url": "chp4sec3a.html#fig-elimination-lines",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " Visualizing elimination as successive changes to a system of lines.       "
},
{
  "id": "note-geogebra-link",
  "level": "2",
  "url": "chp4sec3a.html#note-geogebra-link",
  "type": "Note",
  "number": "4.3.2",
  "title": "",
  "body": " Observe how sliding the multiplier rotates line around the axis formed at the intersection of lines and at GeoGebra ID: xc82hg6w . Can you slide the multiplier until the new line is vertical? If so, then you have eliminated the -variable!  "
},
{
  "id": "Def-elementary_row_ops",
  "level": "2",
  "url": "chp4sec3a.html#Def-elementary_row_ops",
  "type": "Definition",
  "number": "4.3.3",
  "title": "Row Operations.",
  "body": " Row Operations   The three fundamental row operations are:    Permute rows and . We denote this by .    Scale row by nonzero scalar . We denote this by .    Add a scalar multiple of row to row . We denote this by .    We read these as Row is replaced by... or Row becomes... .   "
},
{
  "id": "chp4sec3a-15",
  "level": "2",
  "url": "chp4sec3a.html#chp4sec3a-15",
  "type": "Remark",
  "number": "4.3.4",
  "title": "Augmented Matrix as Compact Notation of Matrix Equation.",
  "body": " Augmented Matrix as Compact Notation of Matrix Equation  The notation of a system of hyperplanes can be cumbersome, and we want to streamline things since our goal is to be able to analyze systems with hundreds of variables and hundreds of equations. Observe that at each step of elimination, the 's, 's, and 's were all superfluous, all that mattered was the coefficients in the correct places. So, let's throw out these symbols and just record the coefficients in the correct places, placing a vertical line, the equals bar , where the equal signs should go. This gives us the augmented matrix associated to the system.  For example, becomes and more generally becomes .  "
},
{
  "id": "def-row-equivalent",
  "level": "2",
  "url": "chp4sec3a.html#def-row-equivalent",
  "type": "Definition",
  "number": "4.3.5",
  "title": "Row Equivalent.",
  "body": " Row Equivalent   If there is a sequence of row operations turning one matrix into another matrix, then the matrices are row equivalent . Symbolically, if and are row equivalent matrices, then we write .   "
},
{
  "id": "def-rref",
  "level": "2",
  "url": "chp4sec3a.html#def-rref",
  "type": "Definition",
  "number": "4.3.6",
  "title": "Reduced Row Echelon Form (rref).",
  "body": " Reduced Row Echelon Form (rref)   A matrix is in reduced row echelon form (rref) if    All zero rows are at the bottom,    Each nonzero row starts with a 1 (called a leading 1 in the pivot position ), and    A leading 1 is to the right of all leading 1's in above rows.    All entries in a column above a leading 1 are 0's.     "
},
{
  "id": "algorithm-elimination",
  "level": "2",
  "url": "chp4sec3a.html#algorithm-elimination",
  "type": "Algorithm",
  "number": "4.3.7",
  "title": "Gaussian Elimination.",
  "body": " Gaussian Elimination   If is a matrix, then the following sequence of row operations will produce .    Start at the top left. Make that a 1.  Use the pivot position to clear below.  Move right to next pivot position & repeat.  Get echelon form.  Start at the bottom right.  Use the pivot position to clear above.  Move left to next pivot position & repeat.  Finish with rref.     "
},
{
  "id": "activity-computing_interpreting_rref",
  "level": "2",
  "url": "chp4sec3a.html#activity-computing_interpreting_rref",
  "type": "Activity",
  "number": "4.3.8",
  "title": "Computing and Interpreting rref.",
  "body": " Computing and Interpreting rref   For each augmented matrix below, do each part.     Verbalize. Explain what it means geometrically in terms of intersecting hyperplanes.    Expectations. Describe what you expect the solution set to be.    Compute. Use the Gaussian Elimination strategy to put the matrix into rref by hand.        "
},
{
  "id": "activity-geogebra_rref",
  "level": "2",
  "url": "chp4sec3a.html#activity-geogebra_rref",
  "type": "Technology",
  "number": "4.3.9",
  "title": "rref in GeoGebra.",
  "body": " rref in GeoGebra   In this activity, you will symbolically find and interpret solution sets. The GeoGebra objects you should gain proficiency with are: matrix and ReducedRowEchelon . You will do so by revisiting the systems from GeoGebra , in which you visually found the solution sets. Do each part for each system.     Compute. Using list notation, input the system as an augmented matrix. (Note that the equals bar cannot be input, so just remember where it goes.) Using ReducedRowEchelon , find the reduced row echelon form of the matrix.    -Planes. Interpret the rref matrix to write the solution set to the system in parametric vector form.    Compare. Reflect on if your solutions set agrees with the one you found via intersection tools in GeoGebra .      "
},
{
  "id": "chp4sec3b",
  "level": "1",
  "url": "chp4sec3b.html",
  "type": "Lesson",
  "number": "4.4",
  "title": "Interpreting RREF",
  "body": " Interpreting RREF  Before we go any further computationally putting a matrix in rref, let us spend time making sure you understand how to use an rref'ed augmented matrix to write down the solution set as a -plane in parametric vector form. In so doing, you will see why rref is so useful.  Recall that row equivalent systems have the same solution sets and each row of the system gives a constraint on the solution vectors. The rows of give the simplest collection of constraining equations, in that you have eliminated as many variables as possible. These constraining equations can be easily rewritten and substituted onto the entries of a solution vector. The variables that will be constrained by the equations of are determined variables, while variables that are not constrained are free variables.   Determined and Free Variables   If is a matrix equation, , and , then is a:    determined variable if the column of has a leading 1, and    free variable if the column of does not have a leading 1.      We now go over several examples of how to use the constraining equations of to determine the parametric vector form of .   Interpreting rref with No Free Variables   Revisiting our previous computation, we have the latter being in rref. Each row is a constraint on solution vectors. These constraining equations are I pick a solution vector and substitute in the constraining equations:      Interpreting rref with Free Variables   The following type of reduced row echelon matrix often confuses students, so let's look at it carefully: There are three columns left of the equals bar, hence we are working in and a hyperplane in this context is a plane. Since there are two rows, this is a system of two planes. The solution set is the intersection of these two planes, which we see to be a line. As such, we should write our solution set using parametric vector form of a line in .  Each row is a constraint on solution vectors. These constraining equations are Observe that is a free variable and and are determined by . I pick a solution vector and substitute in the constraining equations:      Interpreting rref with a Zero Row   Suppose The third constraint of means that a solution vector must satisfy All vectors satisfy this, so this is not a meaningful constraint. So, even though , their solution sets are equal, !    In contrast to a zero row, I call a row of all zeros before the equals bar and a one after the equals bar a zero-one row.   Interpreting rref with a Zero-One Row   Suppose The third constraint of means that a solution vector must satisfy No such vector exists! This constraint implies that the solution set is empty, !     Solution Sets as -Planes in Parametric Vector Form   If we have , how do we find the solution set?     A zero-one row, a row which is zero to the left of the equals bar but is 1 to the right, means the solution set is empty. We may say the matrix equation has no solution or is inconsistent .    Zero rows say nothing and can be ignored.    Each row that is not a zero-one row or zero row will contribute a constraint. Re-write each such equation to solve for the determined variables in terms of the free variables .    To find the parametric vector form of the solution set, write , substitute in each constraining equation, and then split apart this vector into a linear combination revealing the parametric vector form of the solution set.    Each free variable will contribute a velocity vector, and the collection of these velocity vectors is separated and hence independent.    The solution set will be a -plane where is the number of free variables.        Practice Interpreting rref   In this activity, you will practice using the information of a row reduced augmented matrix to describe its solution set. For each rref matrix below, clearly identify the free variables and then write the solution set, , in parametric vector form.     As we conclude this lesson, keep in mind we introduced the concept of reduced row echelon form and focused on two associated mental actions: computing and interpreting (the parametric vector form of solution sets). The two go hand-in-hand and you should practice and be proficient with both.  "
},
{
  "id": "def-free_and_determined_variables",
  "level": "2",
  "url": "chp4sec3b.html#def-free_and_determined_variables",
  "type": "Definition",
  "number": "4.4.1",
  "title": "Determined and Free Variables.",
  "body": " Determined and Free Variables   If is a matrix equation, , and , then is a:    determined variable if the column of has a leading 1, and    free variable if the column of does not have a leading 1.     "
},
{
  "id": "ex-interpreting-rref-no-free",
  "level": "2",
  "url": "chp4sec3b.html#ex-interpreting-rref-no-free",
  "type": "Example",
  "number": "4.4.2",
  "title": "Interpreting rref with No Free Variables.",
  "body": " Interpreting rref with No Free Variables   Revisiting our previous computation, we have the latter being in rref. Each row is a constraint on solution vectors. These constraining equations are I pick a solution vector and substitute in the constraining equations:    "
},
{
  "id": "ex_interpretting_free_variables",
  "level": "2",
  "url": "chp4sec3b.html#ex_interpretting_free_variables",
  "type": "Example",
  "number": "4.4.3",
  "title": "Interpreting rref with Free Variables.",
  "body": " Interpreting rref with Free Variables   The following type of reduced row echelon matrix often confuses students, so let's look at it carefully: There are three columns left of the equals bar, hence we are working in and a hyperplane in this context is a plane. Since there are two rows, this is a system of two planes. The solution set is the intersection of these two planes, which we see to be a line. As such, we should write our solution set using parametric vector form of a line in .  Each row is a constraint on solution vectors. These constraining equations are Observe that is a free variable and and are determined by . I pick a solution vector and substitute in the constraining equations:    "
},
{
  "id": "ex-interpretting_zero_row",
  "level": "2",
  "url": "chp4sec3b.html#ex-interpretting_zero_row",
  "type": "Example",
  "number": "4.4.4",
  "title": "Interpreting rref with a Zero Row.",
  "body": " Interpreting rref with a Zero Row   Suppose The third constraint of means that a solution vector must satisfy All vectors satisfy this, so this is not a meaningful constraint. So, even though , their solution sets are equal, !   "
},
{
  "id": "ex-interpretting_zero_one_row",
  "level": "2",
  "url": "chp4sec3b.html#ex-interpretting_zero_one_row",
  "type": "Example",
  "number": "4.4.5",
  "title": "Interpreting rref with a Zero-One Row.",
  "body": " Interpreting rref with a Zero-One Row   Suppose The third constraint of means that a solution vector must satisfy No such vector exists! This constraint implies that the solution set is empty, !   "
},
{
  "id": "interpretation-solution_sets",
  "level": "2",
  "url": "chp4sec3b.html#interpretation-solution_sets",
  "type": "Insight",
  "number": "4.4.6",
  "title": "Solution Sets as <span class=\"process-math\">\\(k\\)<\/span>-Planes in Parametric Vector Form.",
  "body": " Solution Sets as -Planes in Parametric Vector Form   If we have , how do we find the solution set?     A zero-one row, a row which is zero to the left of the equals bar but is 1 to the right, means the solution set is empty. We may say the matrix equation has no solution or is inconsistent .    Zero rows say nothing and can be ignored.    Each row that is not a zero-one row or zero row will contribute a constraint. Re-write each such equation to solve for the determined variables in terms of the free variables .    To find the parametric vector form of the solution set, write , substitute in each constraining equation, and then split apart this vector into a linear combination revealing the parametric vector form of the solution set.    Each free variable will contribute a velocity vector, and the collection of these velocity vectors is separated and hence independent.    The solution set will be a -plane where is the number of free variables.      "
},
{
  "id": "activity-practice_interpreting_rref",
  "level": "2",
  "url": "chp4sec3b.html#activity-practice_interpreting_rref",
  "type": "Activity",
  "number": "4.4.1",
  "title": "Practice Interpreting rref.",
  "body": " Practice Interpreting rref   In this activity, you will practice using the information of a row reduced augmented matrix to describe its solution set. For each rref matrix below, clearly identify the free variables and then write the solution set, , in parametric vector form.    "
},
{
  "id": "chp4sec4",
  "level": "1",
  "url": "chp4sec4.html",
  "type": "Lesson",
  "number": "4.5",
  "title": "Elimination as Matrix Multiplication",
  "body": " Elimination as Matrix Multiplication  We have seen mixture encoded as matrix multiplication. We have seen transformation encoded as matrix multiplication. Many important processes can be encoded as matrix multiplication . You will see this time after time in this text. In this lesson, you will discover how elementary row operations can be encoded as matrix multiplication (on the left).   Elementary Matrix   An elementary matrix is a square matrix such that, for any matrix , is obtained from via a single row operation. In other words, if you fix a row operation , then for all , .     Discovering Elementary Matrices  In this activity, you will explore row operations via transformations, and use this to try to classify elementary matrices.     Part 1: From row operation to transformation. For each of the below transformations of the plane (given to you symbolically ), (1) visually sketch by hand, and clearly label, what it does to the unit square and (2) describe how it transforms the plane verbally , using complete sentences and geometric words.      Part 2: From transformation to matrix. For each of the above transformations, find the matrix the encodes it. Call those matrices , , and , respectively.     Part 3: From matrix to row operation. Recall that if , then . Find the elementary matrix associated to each of the row operations:      Part 4: Generalize. Now using your understanding of transformations and matrix multiplication of matrices, write down a complete classification of elementary matrices associated to row operations of matrices.      Classification of Elementary Matrices   If is a elementary matrix, then it is of one of the following types:   Permutes rows: ,    Scales a row: or , , and    Adds a multiple of a row to another: or .   Elementary matrices also fall into one of the above types with appropriate modifications.    Observe that each elementary matrix has a very simple geometric interpretation. Type 1 matrices reflect across the line , Type 2 matrices stretch a single direction by a factor of (and if reflect in that direction as well), and Type 3 matrices are a pure shear in a given direction.  We may now generalize this reasoning to larger matrices. I now introduce a useful auxiliary object to help us reason about elementary matrices - the column of rows vector  , whose entries we may think of as generic rows of an matrix. We will act upon this row vector by both elementary matrices and elementary row operations, thereby helping us connect the row operations with elementary matrices.   Interpreting Elementary Matrices as Row Operations   If I tell you that the shear matrix is an elementary matrix, how can you determine the elementary matrix to which it is associated?  Compute (either via linear combination or pointer finger shortcut) the matrix product So, multiplication by tells us to replace row 1 with row 1 plus 4 times row 3 , or in symbols, .     3x3 Elementary Matrix Identification  Each of the below matrices are elementary matrices. For each (1) using complete sentences, describe how the matrix transforms , and (2) what row operation of matrices does it encode (be precise!)?    To determine the matrix associated to a row operation, there are several strategies. One such strategy is to write down the new column of rows, expand it as a linear combination of the original rows, and use matrix multiplication as linear combination to deduce the matrix.   Encoding a Row Operation as an Elementary Matrix   What elementary matrix encodes the row operation replace row 3 with row 3 plus 2 times row 1 , or in symbols, ?  We want an unknown matrix satisfying Via definition of matrix multiplication as linear combination,     Now that we can encode a single row operation as multiplication by a single elementary matrix, it follows that a sequence of row operations can be encoded by a product of elementary matrices. In particular, Gaussian elimination can be expressed via a product of elementary matrices!  Let us now revisit our example: In terms of elementary matrices, this can be re-written as: Observe now how the system equation, the augmented matrix row reduction, and encode the same information.   Elimination as Matrix Multiplication  Consider the matrix equation      Row operations. Re-write this matrix equation as an augmented matrix and solve it via Gaussian elimination.     Elementary matrices. Re-interpret your sequence of row operations as a single product of elementary matrices, as in .     It will be useful in many situations to record sequences of row operations as multiplication by matrices.  To conclude this lesson, I want to reiterate that matrix multiplication is a concept we already understand and will continue to develop more insights and tools throughout this course. Therefore, it is productive to be able to identify processes we encounter as coming from matrix multiplication, as we may then use the tools of matrix multiplication to analyze these processes. In this lesson, we encoded the process of row operation as matrix multiplication on the left by elementary matrices. We will revisit in future lessons both (1) elementary matrices and (2) the mental act of encoding new processes as matrix multiplication.  "
},
{
  "id": "def-elementary_matrix",
  "level": "2",
  "url": "chp4sec4.html#def-elementary_matrix",
  "type": "Definition",
  "number": "4.5.1",
  "title": "Elementary Matrix.",
  "body": " Elementary Matrix   An elementary matrix is a square matrix such that, for any matrix , is obtained from via a single row operation. In other words, if you fix a row operation , then for all , .   "
},
{
  "id": "activity-discover_elementary_matrices",
  "level": "2",
  "url": "chp4sec4.html#activity-discover_elementary_matrices",
  "type": "Activity",
  "number": "4.5.2",
  "title": "Discovering Elementary Matrices.",
  "body": " Discovering Elementary Matrices  In this activity, you will explore row operations via transformations, and use this to try to classify elementary matrices.     Part 1: From row operation to transformation. For each of the below transformations of the plane (given to you symbolically ), (1) visually sketch by hand, and clearly label, what it does to the unit square and (2) describe how it transforms the plane verbally , using complete sentences and geometric words.      Part 2: From transformation to matrix. For each of the above transformations, find the matrix the encodes it. Call those matrices , , and , respectively.     Part 3: From matrix to row operation. Recall that if , then . Find the elementary matrix associated to each of the row operations:      Part 4: Generalize. Now using your understanding of transformations and matrix multiplication of matrices, write down a complete classification of elementary matrices associated to row operations of matrices.    "
},
{
  "id": "prop-classification_of_elementary_matrices",
  "level": "2",
  "url": "chp4sec4.html#prop-classification_of_elementary_matrices",
  "type": "Proposition",
  "number": "4.5.3",
  "title": "Classification of Elementary Matrices.",
  "body": " Classification of Elementary Matrices   If is a elementary matrix, then it is of one of the following types:   Permutes rows: ,    Scales a row: or , , and    Adds a multiple of a row to another: or .   Elementary matrices also fall into one of the above types with appropriate modifications.   "
},
{
  "id": "ex-elementary_matrix_E_to_op",
  "level": "2",
  "url": "chp4sec4.html#ex-elementary_matrix_E_to_op",
  "type": "Example",
  "number": "4.5.4",
  "title": "Interpreting Elementary Matrices as Row Operations.",
  "body": " Interpreting Elementary Matrices as Row Operations   If I tell you that the shear matrix is an elementary matrix, how can you determine the elementary matrix to which it is associated?  Compute (either via linear combination or pointer finger shortcut) the matrix product So, multiplication by tells us to replace row 1 with row 1 plus 4 times row 3 , or in symbols, .   "
},
{
  "id": "activity-3x3_elementary_matrix_identification",
  "level": "2",
  "url": "chp4sec4.html#activity-3x3_elementary_matrix_identification",
  "type": "Activity",
  "number": "4.5.5",
  "title": "3x3 Elementary Matrix Identification.",
  "body": " 3x3 Elementary Matrix Identification  Each of the below matrices are elementary matrices. For each (1) using complete sentences, describe how the matrix transforms , and (2) what row operation of matrices does it encode (be precise!)?   "
},
{
  "id": "ex-elementary_matrix_to_op_E",
  "level": "2",
  "url": "chp4sec4.html#ex-elementary_matrix_to_op_E",
  "type": "Example",
  "number": "4.5.6",
  "title": "Encoding a Row Operation as an Elementary Matrix.",
  "body": " Encoding a Row Operation as an Elementary Matrix   What elementary matrix encodes the row operation replace row 3 with row 3 plus 2 times row 1 , or in symbols, ?  We want an unknown matrix satisfying Via definition of matrix multiplication as linear combination,    "
},
{
  "id": "activity-elimination_as_matrix_mult",
  "level": "2",
  "url": "chp4sec4.html#activity-elimination_as_matrix_mult",
  "type": "Activity",
  "number": "4.5.7",
  "title": "Elimination as Matrix Multiplication.",
  "body": " Elimination as Matrix Multiplication  Consider the matrix equation      Row operations. Re-write this matrix equation as an augmented matrix and solve it via Gaussian elimination.     Elementary matrices. Re-interpret your sequence of row operations as a single product of elementary matrices, as in .    "
},
{
  "id": "chp5sec1",
  "level": "1",
  "url": "chp5sec1.html",
  "type": "Lesson",
  "number": "5.1",
  "title": "Dependency Analysis",
  "body": " Dependency Analysis  Recall that is linearly dependent if one of its vectors is a linear combination of the others ( ). In symbols, is dependent if there exists an and, for each , a number , such that This is a dependency equation , or more succinctly, a dependency for . In this lesson, we revisit the concepts of dependency and use the tools of to analyze the dependency equations of .  A dependency equation is algebraically equivalent to making zero in a nontrivial way ( ). In the compact notation of matrix multiplication, this is then expressed as a solution vector to the matrix equation (i.e., a null vector). Computing , we can now find the parametric vector form of , each of whose vectors can be understood as encoding a dependency equation.   Extracting Dependency Equations from Null Space   Suppose and  What can we say about the dependencies of ? Using the analysis of , Observe that each of the velocity vectors of the parametric vector form of is a servings vector to make zero, and hence is algebraically equivalent to a dependency equation: All other dependencies are combinations of these, so we conclude is independent. Furthermore, since , we conclude .    Observe how in , the dependency equations can be seen in columns 2 and 5. This is not a coincidence and we will now explore a distinct but equivalent interpretation of .  For any matrix and list-length vectors and , if you put in rref, then you will have put in rref. In symbols, if , then . A useful mnemonic for this is you can slide the equals bar.    Sliding the Equals Bar   Returning to , we have each of the following:  Consistent with , we conclude:     is independent,     and are dependency equations, and     .      A quick remark about sliding the equals bar. In , we separately rewrote , , and so on. In practice, we do not rewrite these. Rather we just look at and mentally focus attention on the relevant columns.  We now generalize these examples to an arbitrary . From we are going to build a subset of vectors which is independent and satisfies , and furthermore find explicit dependency equations for each .  Start with containing and analyze to determine what other columns to include. Suppose we have computed (or are given) . We may now slide the equals bar and look at each , , and so on. At each step, we interpret the rref. Say we are looking at for some . We will encounter one of two possible cases:   Case 1. If has a pivot position in its column (i.e., its column is a pivot column ), then in we will see a zero-one row, and hence there is no way to make that vector from the previous independent vectors. We include in .   Case 2. If the column of is not a pivot column, then the column of is the servings vector to make from the previous independent vectors in . This gives us a dependency equation for .   Dependency Analysis   If are nonzero vectors and , how can we read dependencies from ?    Look at the columns of from left to right.    If is the set of pivot columns of , then is independent and .    A column in with a free variable is a servings vector for how to build that column from the previous pivot columns.      Keep in mind that sliding the equals bar and are essentially just a shortcut to interpreting the standard velocity vectors in the parametric vector form of as dependency equations.   Dependency Analysis Activity  You start with an ordered list of five vectors, . You want to determine the dependencies, throw out redundancies, and get an independent collection with the same span, so you compute . For each rref matrix below, using for guidance, explain which vectors you keep and the servings to make each vector you throw out.    The order of the vectors in matters! If you were to reorder and then perform the above dependency analysis, you would potentially get a different and different (but algebraically equivalent) dependency equations.   Order Matters for Dependency Analysis   Consider vectors , , and . If , then and using , we have the independent collection with dependency equation On the other hand, if , then and using , we have the independent collection with dependency equation Order matters for dependency analysis!    We now see that is independent if and only if has no free variables, or in other words, every column of has a leading 1. We may then deduce the following proposition for quickly checking if is independent.   Computational Quick Check For Independence   If , then is linearly independent if and only if has a leading 1 in every column.    We now aggregate four established equivalent statements encoding independence.   Characterizations of Independence  If and , then the following are equivalent:     is linearly independent.    The matrix equation  only has the trivial solution.     .     has a leading 1 in every column.      Comparison of Number of Vectors to List-Length  Let be a collection of vectors. Use to justify the statement:   If (i.e., there are more columns than rows in ), then  must be dependent.   Since a statement and its contrapositive are logically equivalent, you have also shown:   If is independent, then .   Note that if , may or may not be independent, you need to check!    Workflow to Determine Independence  You now have several strategies to determine if a collection of vectors is independent. I recommend the following workflow.    Separated  If you see that the vectors are separated ( ), then you know the vectors are independent without needing to perform any computations.    Columns > Rows  If you see that the number of vectors is greater than the list-length of vectors, then you know the vectors are dependent without needing to perform any computations.    Compute and Interpret  Otherwise, you can perform Computational Quick Check to deduce if the vectors are independent.       Consider the collection where    Without doing any computations, since we see three vectors in , we know this collection is dependent . Now, to find the dependency equations, we compute: and using ,     Three dependent vectors in .       Play with 3 vectors in at GeoGebra ID: n669dqec .   Consider where     Before performing computations, do you expect to be linearly independent?    Set up an augmented matrix associated to the dependency matrix equation.    Row reduce and interpret. Is independent? If not, what are the dependencies?     To conclude this lesson, understanding the dependencies within a collection of vectors is a fundamental linear algebraic goal. Translating dependencies into matrix equations, we leveraged the computational tools of Gaussian elimination and rref to perform explicit Dependency Analysis ( ). We hope you are now seeing that, while rref is a straightforward computation, it is how you interpret it in context that really matters.  "
},
{
  "id": "ex-rref_reading_dependencies",
  "level": "2",
  "url": "chp5sec1.html#ex-rref_reading_dependencies",
  "type": "Example",
  "number": "5.1.1",
  "title": "Extracting Dependency Equations from Null Space.",
  "body": " Extracting Dependency Equations from Null Space   Suppose and  What can we say about the dependencies of ? Using the analysis of , Observe that each of the velocity vectors of the parametric vector form of is a servings vector to make zero, and hence is algebraically equivalent to a dependency equation: All other dependencies are combinations of these, so we conclude is independent. Furthermore, since , we conclude .   "
},
{
  "id": "ex-dependency_slide_equals_bar",
  "level": "2",
  "url": "chp5sec1.html#ex-dependency_slide_equals_bar",
  "type": "Example",
  "number": "5.1.2",
  "title": "Sliding the Equals Bar.",
  "body": " Sliding the Equals Bar   Returning to , we have each of the following:  Consistent with , we conclude:     is independent,     and are dependency equations, and     .     "
},
{
  "id": "insight-dependence",
  "level": "2",
  "url": "chp5sec1.html#insight-dependence",
  "type": "Insight",
  "number": "5.1.3",
  "title": "Dependency Analysis.",
  "body": " Dependency Analysis   If are nonzero vectors and , how can we read dependencies from ?    Look at the columns of from left to right.    If is the set of pivot columns of , then is independent and .    A column in with a free variable is a servings vector for how to build that column from the previous pivot columns.     "
},
{
  "id": "activity-redundancy_reduction_algorithm",
  "level": "2",
  "url": "chp5sec1.html#activity-redundancy_reduction_algorithm",
  "type": "Activity",
  "number": "5.1.4",
  "title": "Dependency Analysis Activity.",
  "body": " Dependency Analysis Activity  You start with an ordered list of five vectors, . You want to determine the dependencies, throw out redundancies, and get an independent collection with the same span, so you compute . For each rref matrix below, using for guidance, explain which vectors you keep and the servings to make each vector you throw out.   "
},
{
  "id": "ex-order-matters",
  "level": "2",
  "url": "chp5sec1.html#ex-order-matters",
  "type": "Example",
  "number": "5.1.5",
  "title": "Order Matters for Dependency Analysis.",
  "body": " Order Matters for Dependency Analysis   Consider vectors , , and . If , then and using , we have the independent collection with dependency equation On the other hand, if , then and using , we have the independent collection with dependency equation Order matters for dependency analysis!   "
},
{
  "id": "cqc-independence",
  "level": "2",
  "url": "chp5sec1.html#cqc-independence",
  "type": "Proposition",
  "number": "5.1.6",
  "title": "Computational Quick Check For Independence.",
  "body": " Computational Quick Check For Independence   If , then is linearly independent if and only if has a leading 1 in every column.   "
},
{
  "id": "summary-characterizations-independence",
  "level": "2",
  "url": "chp5sec1.html#summary-characterizations-independence",
  "type": "Insight",
  "number": "5.1.7",
  "title": "Characterizations of Independence.",
  "body": " Characterizations of Independence  If and , then the following are equivalent:     is linearly independent.    The matrix equation  only has the trivial solution.     .     has a leading 1 in every column.    "
},
{
  "id": "activity-discover_ll_indep_rule",
  "level": "2",
  "url": "chp5sec1.html#activity-discover_ll_indep_rule",
  "type": "Activity",
  "number": "5.1.8",
  "title": "Comparison of Number of Vectors to List-Length.",
  "body": " Comparison of Number of Vectors to List-Length  Let be a collection of vectors. Use to justify the statement:   If (i.e., there are more columns than rows in ), then  must be dependent.   Since a statement and its contrapositive are logically equivalent, you have also shown:   If is independent, then .   Note that if , may or may not be independent, you need to check!  "
},
{
  "id": "summary-strategies-independence",
  "level": "2",
  "url": "chp5sec1.html#summary-strategies-independence",
  "type": "Insight",
  "number": "5.1.9",
  "title": "Workflow to Determine Independence.",
  "body": " Workflow to Determine Independence  You now have several strategies to determine if a collection of vectors is independent. I recommend the following workflow.    Separated  If you see that the vectors are separated ( ), then you know the vectors are independent without needing to perform any computations.    Columns > Rows  If you see that the number of vectors is greater than the list-length of vectors, then you know the vectors are dependent without needing to perform any computations.    Compute and Interpret  Otherwise, you can perform Computational Quick Check to deduce if the vectors are independent.    "
},
{
  "id": "ex-visual-dependency",
  "level": "2",
  "url": "chp5sec1.html#ex-visual-dependency",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Consider the collection where    Without doing any computations, since we see three vectors in , we know this collection is dependent . Now, to find the dependency equations, we compute: and using ,     Three dependent vectors in .      "
},
{
  "id": "activity-3d-dependency",
  "level": "2",
  "url": "chp5sec1.html#activity-3d-dependency",
  "type": "Activity",
  "number": "5.1.11",
  "title": "",
  "body": " Consider where     Before performing computations, do you expect to be linearly independent?    Set up an augmented matrix associated to the dependency matrix equation.    Row reduce and interpret. Is independent? If not, what are the dependencies?    "
},
{
  "id": "chp5sec2",
  "level": "1",
  "url": "chp5sec2.html",
  "type": "Lesson",
  "number": "5.2",
  "title": "Containment in a Span",
  "body": " Containment in a Span  Recall that the span of a set of vectors is the set of all linear combinations that can be made from vectors in ( ). It is a core linear algebraic goal to understand containment in a span — to understand whether a given vector, a collection of vectors, or another span, lies within . In so doing, we will be able to determine when itself. In this lesson, we use the tools of to concretely answer these questions of containment.   Is a given vector contained in a given plane?   Consider the collection where:    and . Geometrically, the span of is the plane containing the three noncollinear points:  , and . The plane can be written in parametric form:     Observe that is in .     Consider the vector and observe that: Since is a solution to , we conclude that lies in .    Play with span in at GeoGebra ID: zzupb6tg .  Play with span in at GeoGebra ID: tr9g6hym .  If is a collection of vectors and , then  is contained in the span of if is a linear combination of the vectors in , and hence if there exists a solution to the matrix equation . Leveraging , we have the following characterizations of being in the span.   Characterizations of Being Contained in  If , , and , then the following are equivalent:    is a linear combination of the vectors in ,    ,    There exists a solution to the matrix equation ,    ,    does not have a zero-one row.     We now understand how to quickly computationally check if a given vector lies in a span. We can do this for several vectors at once. Consider and suppose we want to know if . This means we want to check that, for each , the matrix equation has a solution. Computationally, this is equivalent to checking that, for each , does not have a zero-one row. Since the computation of is the same every time, we can group these all together and compute:   This motivates a new extended notation of an augmented matrix of two matrices . The equals bar here lies in between the two matrices. A zero-one row in this context means a row of zeros to the left of the equals bar and a one at some point to the right of the equals bar.  Using Dependency Analysis ( ), we analyze each column after the equals bar of . If we do not see a zero-one row, then each column of to the right of the equals bar gives the servings vectors for making the corresponding vector of from the pivot columns of . Conversely, if we see a zero-one row, then we know that vector of corresponding to the column of that one is a vector outside of the span of , and hence .  Recall that span is a subspace, it is a set that contains its linear combinations ( ). This fact can be restated as saying that, if and , then . Putting this all together, we have the following useful computational tool for span containment.   Computational Quick Check for Containment in   If and , then (i.e., ) if and only if has no zero-one rows.     Is a given plane contained in another given plane?   Consider the planes and where: I can plot the planes, using say GeoGebra, and verify that these are in fact equal planes. However, I can now do this entirely algebraically using Span Containment ( ). Checking: I deduce that . Similarly checking: I deduce that , and hence .    Take a moment to consider how powerful this kind of tool is. While it is powerful to leverage visualizations of lines and planes in our minds, it is not practical or even possible to explicitly plot all the spans we encounter. Nevertheless, we can still algebraically analyze and compare them.   How can we determine when two sets are equal? A common strategy is to show double containment, that is to say, to show , we show and . If the vectors of started out already in , then our containment analysis allows us to determine when , i.e., when spans ( ).   Characterizations of Spans (the Relationship)  If and , then the following are equivalent:    spans ,    ,    For every vector , there exists a solution to ,    ,    does not have a zero-one row.     Only in special circumstances does . There is one standard collection of vectors that we can quickly see does span .   The Standard Spanning Vectors   If , then: Let be the list-length vector with 1 in spot and zeros elsewhere. Then . So if , then . Furthermore observe that in this case, , the identity matrix. Hence, we have also shown .    Using Comparing Spans ( ) together with , we get that spans if and only if has no zero-one rows. This is a direct computational strategy for establishing spanning .  I claim now this can be detected by simply looking at the last row of , more precisely whether or not it has a leading 1, or is a zero row. If has a leading 1 in the last row, it has a leading 1 in every row, and hence implies always has a solution. On the other hand, if has a zero row, then consider the vector , the vector in that is all zeros except a 1 in the last row. Reversing the row operations used to get , the augmented matrix for some . By construction, implies has no solution. (To justify this last part, I used the fact that row operations are reversible , a fact that we will look at in much greater detail in .)   Computational Quick Check For Spanning   If , then spans if and only if has a leading 1 in every row.     Characterizations of Spanning  If and , then the following are equivalent:    spans all of .    For any , the matrix equation always has a solution.       has a leading 1 in every row.      Comparison of Number of Vectors to List-Length  Let be a collection of vectors. Use to justify the statement:   If (i.e., there are more rows than columns in ), then  cannot span  .   Since a statement and its contrapositive are logically equivalent, you have also shown:   If spans , then .   Note that if , may or may not span , you need to check!    Strategies to Determine Spanning  You now have several strategies to determine if a collection of vectors spans :    Deficient  If you see that all the vectors have zeros in the same entry, then you know the vectors do not span without needing to perform any computations.    Rows > Columns  If you see that the number of vectors is greater than the list-length of vectors, then you know the vectors are dependent without needing to perform any computations.    Compute and Interpret  Otherwise, you can perform Computational Quick Check to deduce if the vectors span .     You will have many opportunities to practice this analysis on the OPS.   Consider where:     Before performing any computations, do you expect these to span all of ?    Use Computational Quick Check to verify.     To conclude this lesson, understanding the concept of spanning is a fundamental linear algebraic goal. Translating spanning into matrix equations, we leveraged the computational tools of Gaussian elimination and to explicitly analyze Span Containment ( ). Once again, I hope you are now seeing that, while is a straightforward computation, it is how you interpret it in context that really matters.  "
},
{
  "id": "ex-vector-contained-plane",
  "level": "2",
  "url": "chp5sec2.html#ex-vector-contained-plane",
  "type": "Example",
  "number": "5.2.1",
  "title": "Is a given vector contained in a given plane?",
  "body": " Is a given vector contained in a given plane?   Consider the collection where:    and . Geometrically, the span of is the plane containing the three noncollinear points:  , and . The plane can be written in parametric form:     Observe that is in .     Consider the vector and observe that: Since is a solution to , we conclude that lies in .   "
},
{
  "id": "summary-contained-in-span",
  "level": "2",
  "url": "chp5sec2.html#summary-contained-in-span",
  "type": "Insight",
  "number": "5.2.2",
  "title": "Characterizations of Being Contained in <span class=\"process-math\">\\(\\spn(S)\\)<\/span>.",
  "body": " Characterizations of Being Contained in  If , , and , then the following are equivalent:    is a linear combination of the vectors in ,    ,    There exists a solution to the matrix equation ,    ,    does not have a zero-one row.    "
},
{
  "id": "cqc-spanning_col",
  "level": "2",
  "url": "chp5sec2.html#cqc-spanning_col",
  "type": "Proposition",
  "number": "5.2.3",
  "title": "Computational Quick Check for Containment in <span class=\"process-math\">\\(\\spn(S)\\)<\/span>.",
  "body": " Computational Quick Check for Containment in   If and , then (i.e., ) if and only if has no zero-one rows.   "
},
{
  "id": "ex-plane-contained-plane",
  "level": "2",
  "url": "chp5sec2.html#ex-plane-contained-plane",
  "type": "Example",
  "number": "5.2.4",
  "title": "Is a given plane contained in another given plane?",
  "body": " Is a given plane contained in another given plane?   Consider the planes and where: I can plot the planes, using say GeoGebra, and verify that these are in fact equal planes. However, I can now do this entirely algebraically using Span Containment ( ). Checking: I deduce that . Similarly checking: I deduce that , and hence .   "
},
{
  "id": "summary-characterizations-spanning-relationship",
  "level": "2",
  "url": "chp5sec2.html#summary-characterizations-spanning-relationship",
  "type": "Insight",
  "number": "5.2.5",
  "title": "Characterizations of Spans (the Relationship).",
  "body": " Characterizations of Spans (the Relationship)  If and , then the following are equivalent:    spans ,    ,    For every vector , there exists a solution to ,    ,    does not have a zero-one row.    "
},
{
  "id": "ex-standard-spanning-vectors",
  "level": "2",
  "url": "chp5sec2.html#ex-standard-spanning-vectors",
  "type": "Example",
  "number": "5.2.6",
  "title": "The “Standard” Spanning Vectors.",
  "body": " The Standard Spanning Vectors   If , then: Let be the list-length vector with 1 in spot and zeros elsewhere. Then . So if , then . Furthermore observe that in this case, , the identity matrix. Hence, we have also shown .   "
},
{
  "id": "cqc-spanning",
  "level": "2",
  "url": "chp5sec2.html#cqc-spanning",
  "type": "Proposition",
  "number": "5.2.7",
  "title": "Computational Quick Check For Spanning <span class=\"process-math\">\\(\\mathbb{R}^m\\)<\/span>.",
  "body": " Computational Quick Check For Spanning   If , then spans if and only if has a leading 1 in every row.   "
},
{
  "id": "summary-characterizations-spanning-rm",
  "level": "2",
  "url": "chp5sec2.html#summary-characterizations-spanning-rm",
  "type": "Insight",
  "number": "5.2.8",
  "title": "Characterizations of Spanning <span class=\"process-math\">\\(\\mathbb{R}^m\\)<\/span>.",
  "body": " Characterizations of Spanning  If and , then the following are equivalent:    spans all of .    For any , the matrix equation always has a solution.       has a leading 1 in every row.    "
},
{
  "id": "activity-comparison-vectors-to-list-length",
  "level": "2",
  "url": "chp5sec2.html#activity-comparison-vectors-to-list-length",
  "type": "Activity",
  "number": "5.2.9",
  "title": "Comparison of Number of Vectors to List-Length.",
  "body": " Comparison of Number of Vectors to List-Length  Let be a collection of vectors. Use to justify the statement:   If (i.e., there are more rows than columns in ), then  cannot span  .   Since a statement and its contrapositive are logically equivalent, you have also shown:   If spans , then .   Note that if , may or may not span , you need to check!  "
},
{
  "id": "summary-strategies-spanning",
  "level": "2",
  "url": "chp5sec2.html#summary-strategies-spanning",
  "type": "Insight",
  "number": "5.2.10",
  "title": "Strategies to Determine Spanning.",
  "body": " Strategies to Determine Spanning  You now have several strategies to determine if a collection of vectors spans :    Deficient  If you see that all the vectors have zeros in the same entry, then you know the vectors do not span without needing to perform any computations.    Rows > Columns  If you see that the number of vectors is greater than the list-length of vectors, then you know the vectors are dependent without needing to perform any computations.    Compute and Interpret  Otherwise, you can perform Computational Quick Check to deduce if the vectors span .    "
},
{
  "id": "activity-spanning-check-3d",
  "level": "2",
  "url": "chp5sec2.html#activity-spanning-check-3d",
  "type": "Activity",
  "number": "5.2.11",
  "title": "",
  "body": " Consider where:     Before performing any computations, do you expect these to span all of ?    Use Computational Quick Check to verify.    "
},
{
  "id": "chp5sec3",
  "level": "1",
  "url": "chp5sec3.html",
  "type": "Lesson",
  "number": "5.3",
  "title": "Concepts of Basis",
  "body": " Concepts of Basis  In the previous two lessons, we explored deeply dependencies and spans. In some sense, these two concepts are complementary, and in this lesson, we bring them together.  To begin, our first deep theorem relates independent vectors and span within subspaces.   Independent Sets Are No Bigger Than Spanning Sets   If is a subspace, such that , and is an independent collection, then .    In this proof, I outline an iterative process for one-by-one replacing the elements of with elements of while preserving the span, and in so doing, deduce that .  To begin, let . By assumption, lies in the span of , hence is dependent. It follows from Dependency Analysis that there exists a nonpivot column in , and we may toss out the first one we see and maintain the same span. While I do not know which vector we tossed, I know it was not the first, . Write for this new collection. Since I included one vector and tossed out a vector, I know has vectors (and ).  Now iterate this process times: For each , let . Since , the collection is dependent. By removing the first nonpivot column of , we have a collection of vectors with the same span as . While I do not know which vector we tossed, I know it was not any of the first , , as those are all independent, and hence would all be pivot columns in .  We conclude that is a set of vectors whose span is and . Hence .      If is a subspace and and are both independent collections of vectors that span , then and have the same number of vectors.    This important result means that if I find a collection of many independent vectors that spans , then all other independent collections that span also have size .   Dimension   If is a subspace, and is an independent collection that spans , then the dimension of , denoted , is the size of .    You have seen that an independent collection is not too big. You have seen that a spanning collection is not too small. As I shall now explain, a basis is a Goldilocks collection — it is just right .   Basis   If is a subspace and is a collection of linearly independent vectors that spans , then is a basis for . An ordered basis is a basis where we fix once and for all the order in which we list them.    The plural of basis is bases .   Standard Basis of   The columns of the identity matrix, , is a basis for , which we call the standard basis . To see this, observe that if , then It also follows that has dimension .    We now come to the Fundamental Theorem of Bases, which guarantees that, if we have a basis, we can make every vector in with no redundancy.   Fundamental Theorem of Bases   If is a subspace, is an ordered basis for , and is a vector, then there exists a unique collection of coefficients such that     Since spans , . Suppose now and for some . Subtracting one from the other gives: The independence of ( ) implies each coefficient , or in other words, . We deduce that the coefficients are unique.    If is a matrix, then we know two important associated subspaces: its column space ( ) and its null space ( ). You should be able to find their bases.   Basis for Column Space and Null Space   Suppose and . This tells us and are independent, and . Hence a basis for is .  If , then: So a basis for is .     You start with an ordered list of five vectors, . You compute . For each rref matrix below, find a basis for (in terms of the vectors of ) and find a basis for .    In general, dimension is an excellent way to measure the size of a subspace.   Rank and Nullity   If is a matrix, then:    the dimension of its column space, , is the column rank of , written , and    the dimension of its null space, , is the nullity of , written .      It follows from Interpretation that is equal to the number of columns of with leading ones. Meanwhile, it follows from Interpretation that is equal to the number of columns of without leading ones. We deduce the following result.   Rank-Nullity   If is an matrix, then .    I conclude this lesson with a useful computational quick check for determining if a collection of vectors is a basis of . It follows from Computational Quick Checks and that, if , then is a basis for if and only if:    has a leading 1 in every column, AND    has a leading 1 in every row.    If has a leading 1 in every row and every column, must have the same number of rows as columns, and hence . So a basis in must have many vectors. Putting these observations together, we get the following quick check.   Computational Quick Check For Basis of   If , then is a basis if and only if , the identity matrix.    "
},
{
  "id": "thm-indep_sets_spanning_sets",
  "level": "2",
  "url": "chp5sec3.html#thm-indep_sets_spanning_sets",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "Independent Sets Are No Bigger Than Spanning Sets.",
  "body": " Independent Sets Are No Bigger Than Spanning Sets   If is a subspace, such that , and is an independent collection, then .    In this proof, I outline an iterative process for one-by-one replacing the elements of with elements of while preserving the span, and in so doing, deduce that .  To begin, let . By assumption, lies in the span of , hence is dependent. It follows from Dependency Analysis that there exists a nonpivot column in , and we may toss out the first one we see and maintain the same span. While I do not know which vector we tossed, I know it was not the first, . Write for this new collection. Since I included one vector and tossed out a vector, I know has vectors (and ).  Now iterate this process times: For each , let . Since , the collection is dependent. By removing the first nonpivot column of , we have a collection of vectors with the same span as . While I do not know which vector we tossed, I know it was not any of the first , , as those are all independent, and hence would all be pivot columns in .  We conclude that is a set of vectors whose span is and . Hence .   "
},
{
  "id": "cor-basis_same_length",
  "level": "2",
  "url": "chp5sec3.html#cor-basis_same_length",
  "type": "Corollary",
  "number": "5.3.2",
  "title": "",
  "body": "  If is a subspace and and are both independent collections of vectors that span , then and have the same number of vectors.   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "chp5sec3.html#def-dimension",
  "type": "Definition",
  "number": "5.3.3",
  "title": "Dimension.",
  "body": " Dimension   If is a subspace, and is an independent collection that spans , then the dimension of , denoted , is the size of .   "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "chp5sec3.html#def-basis",
  "type": "Definition",
  "number": "5.3.4",
  "title": "Basis.",
  "body": " Basis   If is a subspace and is a collection of linearly independent vectors that spans , then is a basis for . An ordered basis is a basis where we fix once and for all the order in which we list them.   "
},
{
  "id": "ex-standard_basis",
  "level": "2",
  "url": "chp5sec3.html#ex-standard_basis",
  "type": "Example",
  "number": "5.3.5",
  "title": "Standard Basis of <span class=\"process-math\">\\(\\vect{R}^n\\)<\/span>.",
  "body": " Standard Basis of   The columns of the identity matrix, , is a basis for , which we call the standard basis . To see this, observe that if , then It also follows that has dimension .   "
},
{
  "id": "thm-ftb",
  "level": "2",
  "url": "chp5sec3.html#thm-ftb",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Fundamental Theorem of Bases.",
  "body": " Fundamental Theorem of Bases   If is a subspace, is an ordered basis for , and is a vector, then there exists a unique collection of coefficients such that     Since spans , . Suppose now and for some . Subtracting one from the other gives: The independence of ( ) implies each coefficient , or in other words, . We deduce that the coefficients are unique.   "
},
{
  "id": "ex-basis_for_col_and_null",
  "level": "2",
  "url": "chp5sec3.html#ex-basis_for_col_and_null",
  "type": "Example",
  "number": "5.3.7",
  "title": "Basis for Column Space and Null Space.",
  "body": " Basis for Column Space and Null Space   Suppose and . This tells us and are independent, and . Hence a basis for is .  If , then: So a basis for is .   "
},
{
  "id": "activity-find-bases",
  "level": "2",
  "url": "chp5sec3.html#activity-find-bases",
  "type": "Activity",
  "number": "5.3.8",
  "title": "",
  "body": " You start with an ordered list of five vectors, . You compute . For each rref matrix below, find a basis for (in terms of the vectors of ) and find a basis for .   "
},
{
  "id": "def-rank-nullity-terms",
  "level": "2",
  "url": "chp5sec3.html#def-rank-nullity-terms",
  "type": "Definition",
  "number": "5.3.9",
  "title": "Rank and Nullity.",
  "body": " Rank and Nullity   If is a matrix, then:    the dimension of its column space, , is the column rank of , written , and    the dimension of its null space, , is the nullity of , written .     "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "chp5sec3.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "5.3.10",
  "title": "Rank-Nullity.",
  "body": " Rank-Nullity   If is an matrix, then .   "
},
{
  "id": "cqc-basis",
  "level": "2",
  "url": "chp5sec3.html#cqc-basis",
  "type": "Algorithm",
  "number": "5.3.11",
  "title": "Computational Quick Check For Basis of <span class=\"process-math\">\\(\\vect{R}^m\\)<\/span>.",
  "body": " Computational Quick Check For Basis of   If , then is a basis if and only if , the identity matrix.   "
},
{
  "id": "chp5sec4",
  "level": "1",
  "url": "chp5sec4.html",
  "type": "Lesson",
  "number": "5.4",
  "title": "Basis as Coordinate System",
  "body": " Basis as Coordinate System  A coordinate system is an agreed upon rule to describe where points are relative to us. We care about ordered bases because they give us a new coordinate system to describe things. As we will see later, problems that seem difficult when looking at them relative to the standard coordinates become simple when viewed relative to a different, well-chosen coordinate system.   Coordinatization  This book takes the perspective that objects exist external to, and independent of, us humans. Objects do not come to us with grid lines. Coordinatization is the mental act of imposing coordinates on objects to allow us to describe them, to analyze them, and to solve problems concerning them. Coordinatization is fundamentally human. We can and must choose coordinates. At first, this may seem like an extra burden, however it is in fact a powerful tool. When we confront a problem, we can and should reflect upon the situation and choose the coordinate system that enables us to most easily achieve our goals. This is what we do in calculus when we decide if we wish to approach the problem with Cartesian coordinates, polar coordinates, or something else altogether. This is the same thing we do in linear algebra.    The mental act of imposing coordinates on the Earth.   Diagram showing the transition from an unlined globe to a coordinate system of longitude and latitude.    In linear algebra, it is bases that give us coordinates on subspaces.   Coordinate Vector   If is a subspace, is a basis for , , and the collection of scalars are the unique solution scalars for making with , then the are the coordinates of in the -coordinate system , and is the -coordinate vector for .    The Fundamental Theorem of Bases ( ) implies that any vector has a unique  -label.   Standard Coordinates on   The standard basis gives the standard coordinates on . If , then so . The columns that we have been writing have been in standard coordinates this whole time!    When conceptualizing column vectors as coordinates, or labels, the column and are different labels we assign to a fixed vector. Moving between these labels is what I will call change of coordinates or change of labels . If we write , then (using our understanding of Matrix Multiplication as Linear Combination ), we see  Multiplication by changes the -label to the standard label!!! We have previously conceptualized matrix multiplication as encoding (geometric) transformations and encoding row operations. Changing labels on a fixed vector is a fundamentally new and distinct conceptualization of matrix multiplication.   Coordinate Change Matrix   If is a subspace and is a basis, then is the coordinate change matrix .     While we usually use to represent the matrix whose columns are , when working in the context of bases, it is common to represent this matrix with .   Suppose is a basis. We will draw lines that help us visually measure vectors in units of and . For any integer , the  constant- line is the line with parametric vector form . Similarly, we have constant- lines , reversing the role of and . The constant- lines and constant- lines fill up the plane and form the -coordinate grid . The -unit square is then the parallelogram determined by and .   Using the image below, with basis as indicated in the image:    Identify and label the constant 0th, 1st, and 2nd constant- lines.    Identify and label the constant 0th, 1st, and 2nd constant- lines.    What are the standard and -coordinates of ?    Using what you know about the -grid lines, approximate the -coordinates of the vectors with standard coordinates , , and .          Let us return to the example of ( ). Let . Since , Computational Quick Check implies is a basis.  To draw the constant- lines, I draw the sequence of lines: etc. for each integer . In a similar way, I draw the sequence of constant- lines.   The -coordinate grid and -unit square are plotted to the right. I have also plotted the vector . Observe, it lies on both the standard and -coordinate grids, and we can read off its coordinates. Make sure you can see that in -coordinates, . Our previous computations have shown, which symbolically corresponds to our visual observation above that .       Consider the collection .    Use Computational Quick Check to verify is a basis.    Sketch by hand the -coordinate grid and the -unit square.    Consider the vectors and such that and .    Plot them on your grid, and approximate and .    Use matrix equations involving to set up and find and exactly.       Next, consider the example of . Let . Again, since , is a basis. Its associated -coordinate grid and -unit square are plotted below.  In the grid below, I have also plotted the vector . Observe, it lies on both the standard and -coordinate grids, and we can read off its coordinates. Make sure you can see that in -coordinates, . This corresponds to the computation         The -Coordinate Grid Tool  In this activity, you will learn how to use GeoGebra to visualize the -coordinate grid and use it to compute -coordinates. The GeoGebra functions you should gain proficiency with are: Line , Sequence , Coordinate , and Element . In so doing, you will create the B-Coordinate Grid Tool , which you will frequently revisit for the remainder of the course.      Part 1: Creating your basis. Drop two moveable points and in the plane. Label the origin . Use the Vector tool to draw the vector from to and then to . Name them and , respectively. Move and so that and are independent. You have now created your basis .     Part 2: Constructing grid lines part 1: One By One. The Line(P,Q) function creates a line going through the points and . With that in mind, using the Line tool, create the first 3 constant- lines using the Line tool. (Think about what points will need to be input into Line and how do they relate to and .) Do the same for the first 3 constant- lines. You should now have a portion of your -grid!     Part 3: Constructing grid lines part 2: Sequence. When dealing with computers, whenever we encounter a thing we are doing over and over again, we want to loop that process so that the computer does all of the work in one line of code. GeoGebra does this with the Sequence function. More precisely you have to input 4 things: Sequence(Object(n), n, lower, upper) , an object (such as a line) in terms of some value which you want to vary, and then the lower and upper bound on those ranges. Use the Sequence function, together with what you learned in the previous part, to have a single line of GeoGebra code construct the first 21 constant- lines (10 in each direction). Do a similar thing for the first 21 constant- lines.     Part 4: Visualizing and Computing -Coordinates Drop a new moveable point and draw the vector from to . The function x(A) picks out the -coordinate of , and similarly the function y(A) picks out the -coordinate of . Using these functions, input an augmented matrix whose solution set is the -coordinates of . Use the ReducedRowEchelon command to reduce the matrix. You should see the -coordinates here, but we need to pick them out. The Element function Element(M,i,j) picks out the entry in the row and column of the matrix (e.g. Element(M,1,1) is the element of in row 1 and column 1). Use Element to build the vector .     Part 5: Exploration  Move around your basis and your vector . Visually estimate the -coordinates of and then check to see if your coordinate calculator agrees. When you are done playing, use your -coordinate tool to visually and symbolically analyze the following.  Let . If , find . If , find .        The -Coordinate Grid Tool   In this activity, you will learn how to use GeoGebra to visualize the -coordinate grid and use it to compute -coordinates. The GeoGebra functions you should gain proficiency with are: Line , Sequence , Coordinate , and Element . In so doing, you will create the -Coordinate Grid Tool , which you will frequently revisit for the remainder of the course.    Creating your basis   Drop two moveable points and in the plane. Label the origin . Use the Vector tool to draw the vector from to and then to . Name them and , respectively. Move and so that and are independent. You have now created your basis .     Constructing grid lines part 1: One By One   The Line(P,Q) function creates a line going through the points and . With that in mind, using the Line tool, create the first 3 constant- lines using the Line tool. (Think about what points will need to be input into Line and how do they relate to and .) Do the same for the first 3 constant- . You should now have a portion of your -grid!     Constructing grid lines part 2: Sequence   When dealing with computers, whenever we encounter a thing we are doing over and over again, we want to \"loop\" that process so that the computer does all of the work in one line of code. GeoGebra does this with the Sequence function. More precisely you have to input 4 things: Sequence (Object( ), , lower, upper), and object (such as a line) in terms of some value which you want to vary, and then the lower and upper bound on those ranges. Use the Sequence function, together with what you learned in the previous part, to have a single line of GeoGebra code construct the to build the first 21 constant- lines (10 in each direction). Do a similar thing for the first 21 constant- lines.     Visualizing and Computing -Coordinates   Drop a new moveable point and draw the vector from to . The function x(A) picks out the -coordinate of , and similarly the function y(A) picks out the -coordinate of . Using these functions, input an augmented matrix whose solution set is the -coordinates of . Use the ReducedRowEchelon command to reduce the matrix. You should see the -coordinates here, but we need to pick them out. The Element function Element(M,i,j) picks out the entry in the row and column of the matrix (e.g. Element(M,1,1) is the element of in row 1 and column 1). Use Element to build the vector .     Exploration   Move around your basis and your vector . Visually estimate the -coordinates of and then check to see if your coordinate calculator agrees. When you are done playing, use your -coordinate tool to visually and symbolically analyze the following.  Let . If , find . If , find .      Visualize and play with the -coordinate grid and change of coordinates at GeoGebra ID: sf7GdaBw .   More generally, if is a collection of -many nonzero, linearly independent vectors, then is a basis for its span. This gives a coordinate system on this span.    Consider the collection where   and . Let be the plane spanned by in . Every point on this plane can be uniquely described by the amount of and the amount of . This gives a coordinate grid on .  For example, consider the vector lying in the plane .  Since we have .     Conversely, given , this means  .     Play with bases of planes in at GeoGebra ID: bfqhrstb .    Problems    Suppose and .    Interpreting , deduce whether or not is independent. Explain.    If is dependent, (i) find a subset which is independent, and (ii) write each vector in as a linear combination of the vectors in .        Consider the matrix .    Before performing any computations, what do you expect the nullity of to be? Why?    Symbolically find .    Find a collection of linearly independent vectors that spans . Justify.        Analyze and then answer the following questions.        What is the basis depicted?    Find the -coordinates of the vector , i.e. .        Here you will use the GeoGebra -coordinate grid tool you made in class.    Slide your points and so that graphics window depicts the coordinate grid associated to the ordered basis .    Use your picture to visually find the standard coordinates of the vector with -coordinates . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix expression that represents these coordinates, symbolically evaluate, and verify they match what you saw visually in the previous part.    Use your picture to visually find the -coordinates of the vector . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix equation whose solution represents the -coordinates of .    Solve this system symbolically , either by hand or via GeoGebra, and verify that your solution matches your -coordinates you found visually in the previous part.    Use your picture to visually  approximate the -coordinates of the vector . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix equation whose solution represents the exact  -coordinates of .    Solve this system symbolically , either by hand or GeoGebra, and verify that your solution matches your -coordinates you found visually in the previous part.        This is a 3D version of .  Let , and .    Use the 3D Graphics view in GeoGebra to depict , , and . Include the image. (Hint: Use Plane Through 3 Points tool.)    Explain visually why is linearly independent.    Symbolically show that is linearly independent.    Use your image to show visually that lies in . Conclude is a basis for .    Symbolically show that lies in .    Use the Sequence and Line tools to draw the -coordinate grid on .    Visually find the -coordinates of .    Symbolically find .    Let such that . Visually find .    Symbolically find (in standard coordinates).       "
},
{
  "id": "chp5sec4-2",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate system "
},
{
  "id": "mental_act-coordinatization",
  "level": "2",
  "url": "chp5sec4.html#mental_act-coordinatization",
  "type": "Insight",
  "number": "5.4.1",
  "title": "Coordinatization.",
  "body": " Coordinatization  This book takes the perspective that objects exist external to, and independent of, us humans. Objects do not come to us with grid lines. Coordinatization is the mental act of imposing coordinates on objects to allow us to describe them, to analyze them, and to solve problems concerning them. Coordinatization is fundamentally human. We can and must choose coordinates. At first, this may seem like an extra burden, however it is in fact a powerful tool. When we confront a problem, we can and should reflect upon the situation and choose the coordinate system that enables us to most easily achieve our goals. This is what we do in calculus when we decide if we wish to approach the problem with Cartesian coordinates, polar coordinates, or something else altogether. This is the same thing we do in linear algebra.  "
},
{
  "id": "fig-coordinatize-earth",
  "level": "2",
  "url": "chp5sec4.html#fig-coordinatize-earth",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": " The mental act of imposing coordinates on the Earth.   Diagram showing the transition from an unlined globe to a coordinate system of longitude and latitude.   "
},
{
  "id": "def-coordinate_vector",
  "level": "2",
  "url": "chp5sec4.html#def-coordinate_vector",
  "type": "Definition",
  "number": "5.4.3",
  "title": "Coordinate Vector.",
  "body": " Coordinate Vector   If is a subspace, is a basis for , , and the collection of scalars are the unique solution scalars for making with , then the are the coordinates of in the -coordinate system , and is the -coordinate vector for .   "
},
{
  "id": "ex-standard_coordinates",
  "level": "2",
  "url": "chp5sec4.html#ex-standard_coordinates",
  "type": "Example",
  "number": "5.4.4",
  "title": "Standard Coordinates on <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>.",
  "body": " Standard Coordinates on   The standard basis gives the standard coordinates on . If , then so . The columns that we have been writing have been in standard coordinates this whole time!   "
},
{
  "id": "chp5sec4-9",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change of coordinates change of labels "
},
{
  "id": "def-change_of_label_matrix",
  "level": "2",
  "url": "chp5sec4.html#def-change_of_label_matrix",
  "type": "Definition",
  "number": "5.4.5",
  "title": "Coordinate Change Matrix.",
  "body": " Coordinate Change Matrix   If is a subspace and is a basis, then is the coordinate change matrix .   "
},
{
  "id": "chp5sec4-11",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-11",
  "type": "Remark",
  "number": "5.4.6",
  "title": "",
  "body": " While we usually use to represent the matrix whose columns are , when working in the context of bases, it is common to represent this matrix with .  "
},
{
  "id": "activity-bcoord-grid-reading",
  "level": "2",
  "url": "chp5sec4.html#activity-bcoord-grid-reading",
  "type": "Activity",
  "number": "5.4.7",
  "title": "",
  "body": " Using the image below, with basis as indicated in the image:    Identify and label the constant 0th, 1st, and 2nd constant- lines.    Identify and label the constant 0th, 1st, and 2nd constant- lines.    What are the standard and -coordinates of ?    Using what you know about the -grid lines, approximate the -coordinates of the vectors with standard coordinates , , and .       "
},
{
  "id": "ex-coordinates-visualization",
  "level": "2",
  "url": "chp5sec4.html#ex-coordinates-visualization",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": "  Let us return to the example of ( ). Let . Since , Computational Quick Check implies is a basis.  To draw the constant- lines, I draw the sequence of lines: etc. for each integer . In a similar way, I draw the sequence of constant- lines.   The -coordinate grid and -unit square are plotted to the right. I have also plotted the vector . Observe, it lies on both the standard and -coordinate grids, and we can read off its coordinates. Make sure you can see that in -coordinates, . Our previous computations have shown, which symbolically corresponds to our visual observation above that .     "
},
{
  "id": "activity-coordinates-computation",
  "level": "2",
  "url": "chp5sec4.html#activity-coordinates-computation",
  "type": "Activity",
  "number": "5.4.10",
  "title": "",
  "body": " Consider the collection .    Use Computational Quick Check to verify is a basis.    Sketch by hand the -coordinate grid and the -unit square.    Consider the vectors and such that and .    Plot them on your grid, and approximate and .    Use matrix equations involving to set up and find and exactly.    "
},
{
  "id": "ex-coordinates-skew-grid",
  "level": "2",
  "url": "chp5sec4.html#ex-coordinates-skew-grid",
  "type": "Example",
  "number": "5.4.11",
  "title": "",
  "body": "  Next, consider the example of . Let . Again, since , is a basis. Its associated -coordinate grid and -unit square are plotted below.  In the grid below, I have also plotted the vector . Observe, it lies on both the standard and -coordinate grids, and we can read off its coordinates. Make sure you can see that in -coordinates, . This corresponds to the computation       "
},
{
  "id": "geogebra_activity-bcoord_grid",
  "level": "2",
  "url": "chp5sec4.html#geogebra_activity-bcoord_grid",
  "type": "Activity",
  "number": "5.4.13",
  "title": "The <span class=\"process-math\">\\(\\mathcal{B}\\)<\/span>-Coordinate Grid Tool.",
  "body": " The -Coordinate Grid Tool  In this activity, you will learn how to use GeoGebra to visualize the -coordinate grid and use it to compute -coordinates. The GeoGebra functions you should gain proficiency with are: Line , Sequence , Coordinate , and Element . In so doing, you will create the B-Coordinate Grid Tool , which you will frequently revisit for the remainder of the course.      Part 1: Creating your basis. Drop two moveable points and in the plane. Label the origin . Use the Vector tool to draw the vector from to and then to . Name them and , respectively. Move and so that and are independent. You have now created your basis .     Part 2: Constructing grid lines part 1: One By One. The Line(P,Q) function creates a line going through the points and . With that in mind, using the Line tool, create the first 3 constant- lines using the Line tool. (Think about what points will need to be input into Line and how do they relate to and .) Do the same for the first 3 constant- lines. You should now have a portion of your -grid!     Part 3: Constructing grid lines part 2: Sequence. When dealing with computers, whenever we encounter a thing we are doing over and over again, we want to loop that process so that the computer does all of the work in one line of code. GeoGebra does this with the Sequence function. More precisely you have to input 4 things: Sequence(Object(n), n, lower, upper) , an object (such as a line) in terms of some value which you want to vary, and then the lower and upper bound on those ranges. Use the Sequence function, together with what you learned in the previous part, to have a single line of GeoGebra code construct the first 21 constant- lines (10 in each direction). Do a similar thing for the first 21 constant- lines.     Part 4: Visualizing and Computing -Coordinates Drop a new moveable point and draw the vector from to . The function x(A) picks out the -coordinate of , and similarly the function y(A) picks out the -coordinate of . Using these functions, input an augmented matrix whose solution set is the -coordinates of . Use the ReducedRowEchelon command to reduce the matrix. You should see the -coordinates here, but we need to pick them out. The Element function Element(M,i,j) picks out the entry in the row and column of the matrix (e.g. Element(M,1,1) is the element of in row 1 and column 1). Use Element to build the vector .     Part 5: Exploration  Move around your basis and your vector . Visually estimate the -coordinates of and then check to see if your coordinate calculator agrees. When you are done playing, use your -coordinate tool to visually and symbolically analyze the following.  Let . If , find . If , find .      "
},
{
  "id": "geogebra_activity-bcoord_grid2",
  "level": "2",
  "url": "chp5sec4.html#geogebra_activity-bcoord_grid2",
  "type": "Activity",
  "number": "5.4.1",
  "title": "The <span class=\"process-math\">\\(\\mathcal{B}\\)<\/span>-Coordinate Grid Tool.",
  "body": " The -Coordinate Grid Tool   In this activity, you will learn how to use GeoGebra to visualize the -coordinate grid and use it to compute -coordinates. The GeoGebra functions you should gain proficiency with are: Line , Sequence , Coordinate , and Element . In so doing, you will create the -Coordinate Grid Tool , which you will frequently revisit for the remainder of the course.    Creating your basis   Drop two moveable points and in the plane. Label the origin . Use the Vector tool to draw the vector from to and then to . Name them and , respectively. Move and so that and are independent. You have now created your basis .     Constructing grid lines part 1: One By One   The Line(P,Q) function creates a line going through the points and . With that in mind, using the Line tool, create the first 3 constant- lines using the Line tool. (Think about what points will need to be input into Line and how do they relate to and .) Do the same for the first 3 constant- . You should now have a portion of your -grid!     Constructing grid lines part 2: Sequence   When dealing with computers, whenever we encounter a thing we are doing over and over again, we want to \"loop\" that process so that the computer does all of the work in one line of code. GeoGebra does this with the Sequence function. More precisely you have to input 4 things: Sequence (Object( ), , lower, upper), and object (such as a line) in terms of some value which you want to vary, and then the lower and upper bound on those ranges. Use the Sequence function, together with what you learned in the previous part, to have a single line of GeoGebra code construct the to build the first 21 constant- lines (10 in each direction). Do a similar thing for the first 21 constant- lines.     Visualizing and Computing -Coordinates   Drop a new moveable point and draw the vector from to . The function x(A) picks out the -coordinate of , and similarly the function y(A) picks out the -coordinate of . Using these functions, input an augmented matrix whose solution set is the -coordinates of . Use the ReducedRowEchelon command to reduce the matrix. You should see the -coordinates here, but we need to pick them out. The Element function Element(M,i,j) picks out the entry in the row and column of the matrix (e.g. Element(M,1,1) is the element of in row 1 and column 1). Use Element to build the vector .     Exploration   Move around your basis and your vector . Visually estimate the -coordinates of and then check to see if your coordinate calculator agrees. When you are done playing, use your -coordinate tool to visually and symbolically analyze the following.  Let . If , find . If , find .    "
},
{
  "id": "chp5sec4-19",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-19",
  "type": "Remark",
  "number": "5.4.14",
  "title": "",
  "body": " Visualize and play with the -coordinate grid and change of coordinates at GeoGebra ID: sf7GdaBw .  "
},
{
  "id": "chp5sec4-21",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-21",
  "type": "Example",
  "number": "5.4.15",
  "title": "",
  "body": "  Consider the collection where   and . Let be the plane spanned by in . Every point on this plane can be uniquely described by the amount of and the amount of . This gives a coordinate grid on .  For example, consider the vector lying in the plane .  Since we have .     Conversely, given , this means  .   "
},
{
  "id": "chp5sec4-22",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-22",
  "type": "Remark",
  "number": "5.4.17",
  "title": "",
  "body": " Play with bases of planes in at GeoGebra ID: bfqhrstb .  "
},
{
  "id": "chp5sec4-23-2",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-23-2",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  Suppose and .    Interpreting , deduce whether or not is independent. Explain.    If is dependent, (i) find a subset which is independent, and (ii) write each vector in as a linear combination of the vectors in .     "
},
{
  "id": "chp5sec4-23-3",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-23-3",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Consider the matrix .    Before performing any computations, what do you expect the nullity of to be? Why?    Symbolically find .    Find a collection of linearly independent vectors that spans . Justify.     "
},
{
  "id": "chp5sec4-23-4",
  "level": "2",
  "url": "chp5sec4.html#chp5sec4-23-4",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Analyze and then answer the following questions.        What is the basis depicted?    Find the -coordinates of the vector , i.e. .     "
},
{
  "id": "hw06_04",
  "level": "2",
  "url": "chp5sec4.html#hw06_04",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "  Here you will use the GeoGebra -coordinate grid tool you made in class.    Slide your points and so that graphics window depicts the coordinate grid associated to the ordered basis .    Use your picture to visually find the standard coordinates of the vector with -coordinates . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix expression that represents these coordinates, symbolically evaluate, and verify they match what you saw visually in the previous part.    Use your picture to visually find the -coordinates of the vector . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix equation whose solution represents the -coordinates of .    Solve this system symbolically , either by hand or via GeoGebra, and verify that your solution matches your -coordinates you found visually in the previous part.    Use your picture to visually  approximate the -coordinates of the vector . Include a clearly labelled GeoGebra picture depicting this.    Set up a matrix equation whose solution represents the exact  -coordinates of .    Solve this system symbolically , either by hand or GeoGebra, and verify that your solution matches your -coordinates you found visually in the previous part.     "
},
{
  "id": "hw06_05",
  "level": "2",
  "url": "chp5sec4.html#hw06_05",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  This is a 3D version of .  Let , and .    Use the 3D Graphics view in GeoGebra to depict , , and . Include the image. (Hint: Use Plane Through 3 Points tool.)    Explain visually why is linearly independent.    Symbolically show that is linearly independent.    Use your image to show visually that lies in . Conclude is a basis for .    Symbolically show that lies in .    Use the Sequence and Line tools to draw the -coordinate grid on .    Visually find the -coordinates of .    Symbolically find .    Let such that . Visually find .    Symbolically find (in standard coordinates).     "
},
{
  "id": "chp6sec1",
  "level": "1",
  "url": "chp6sec1.html",
  "type": "Lesson",
  "number": "6.1",
  "title": "Reversing a Process",
  "body": " Reversing a Process   Reversible   A process is reversible if there is some process that undoes process .  In other words, the composition of first process and then process results in the do-nothing process (i.e., for all inputs , ).    Three fundamental processes associated with matrix multiplication we have encountered have been:    Transformations of the plane .    Row operations (i.e., multiplication by elementary matrices) .    Change of coordinates .    Are these reversible processes? If so, which processes reverse them?   Reversing Transformations of the Plane  For each matrix, describe how it transforms the plane. Reason about that transformation and whether or not such a transformation is reversible.   For the transformations that are reversible, can you reason through what that reverse process should be and then find the matrix associated with that process?   After having done the activity, you should have found that these matrices correspond to stretching, shearing, rotating, projecting, and reflecting, respectively, and that all but projection are reversible. The matrices that correspond to the reverse processes are then:   Observe that since composition corresponds to matrix multiplication, the requirement that the composition is the do-nothing transformation means that .   Inverse Matrix   If is an matrix and if there exists an matrix such that , then is invertible and is an inverse of .     The Columns of an Inverse are a Basis   If and are and , then the columns of are a basis for .    Write and , where is the standard basis. By Definition , the matrix multiplication of matrices is . Therefore:   In other words, the columns of are precisely the mixing instructions to make each of the standard basis vectors out of the columns of , hence . It follows that and therefore the columns of span all of . By Computational Quick Check , every row of has a leading 1 (i.e., no zero rows). Since there are the same number of rows as columns, every column of  also has a leading one. By Computational Quick Check , the columns of are linearly independent. The conclusion follows from the definition of a basis.    If you multiplied your above matrices in the opposite order, you might have noticed that if reverses , then also reverses . Amazingly, this is always true.   Inverses are Two-Sided   If , then .    By the associativity of matrix multiplication, , hence by distributivity, . Write . Then looking at each column of , we have . Since the columns of are a basis, , so each , and hence , and thus .     Inverses are Unique   If and , then .    We can verify directly:      Notation: Inverse Matrix  If is invertible, we denote its inverse with the symbol . Note that this does not mean , which does not even make sense, or even the reciprocal of the entries.   To reverse a composition of processes, you must reverse them in the opposite order you did them in. Consider putting on your socks, and then your shoes. To reverse this process, you must first take off your shoes, and then your socks.   Socks and Shoes   If and are invertible, then .    To certify that a matrix is the inverse, we can just check that their product is the identity. Using associativity and the definitions of identity and inverse, observe that .     Summary of Being Invertible  If and , then the following are equivalent:    is invertible.    is a basis for .    .     "
},
{
  "id": "def-reversible",
  "level": "2",
  "url": "chp6sec1.html#def-reversible",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Reversible.",
  "body": " Reversible   A process is reversible if there is some process that undoes process .  In other words, the composition of first process and then process results in the do-nothing process (i.e., for all inputs , ).   "
},
{
  "id": "activity-reverse-transformations-of-plane",
  "level": "2",
  "url": "chp6sec1.html#activity-reverse-transformations-of-plane",
  "type": "Activity",
  "number": "6.1.2",
  "title": "Reversing Transformations of the Plane.",
  "body": " Reversing Transformations of the Plane  For each matrix, describe how it transforms the plane. Reason about that transformation and whether or not such a transformation is reversible.   For the transformations that are reversible, can you reason through what that reverse process should be and then find the matrix associated with that process?  "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "chp6sec1.html#def-inverse",
  "type": "Definition",
  "number": "6.1.3",
  "title": "Inverse Matrix.",
  "body": " Inverse Matrix   If is an matrix and if there exists an matrix such that , then is invertible and is an inverse of .   "
},
{
  "id": "prop-inverse-columns-are-basis",
  "level": "2",
  "url": "chp6sec1.html#prop-inverse-columns-are-basis",
  "type": "Proposition",
  "number": "6.1.4",
  "title": "The Columns of an Inverse are a Basis.",
  "body": " The Columns of an Inverse are a Basis   If and are and , then the columns of are a basis for .    Write and , where is the standard basis. By Definition , the matrix multiplication of matrices is . Therefore:   In other words, the columns of are precisely the mixing instructions to make each of the standard basis vectors out of the columns of , hence . It follows that and therefore the columns of span all of . By Computational Quick Check , every row of has a leading 1 (i.e., no zero rows). Since there are the same number of rows as columns, every column of  also has a leading one. By Computational Quick Check , the columns of are linearly independent. The conclusion follows from the definition of a basis.   "
},
{
  "id": "prop-inverses-are-twosided",
  "level": "2",
  "url": "chp6sec1.html#prop-inverses-are-twosided",
  "type": "Proposition",
  "number": "6.1.5",
  "title": "Inverses are Two-Sided.",
  "body": " Inverses are Two-Sided   If , then .    By the associativity of matrix multiplication, , hence by distributivity, . Write . Then looking at each column of , we have . Since the columns of are a basis, , so each , and hence , and thus .   "
},
{
  "id": "prop-inverses-are-unique",
  "level": "2",
  "url": "chp6sec1.html#prop-inverses-are-unique",
  "type": "Proposition",
  "number": "6.1.6",
  "title": "Inverses are Unique.",
  "body": " Inverses are Unique   If and , then .    We can verify directly:    "
},
{
  "id": "notation-inverse-matrix",
  "level": "2",
  "url": "chp6sec1.html#notation-inverse-matrix",
  "type": "Remark",
  "number": "6.1.7",
  "title": "Notation: Inverse Matrix.",
  "body": " Notation: Inverse Matrix  If is invertible, we denote its inverse with the symbol . Note that this does not mean , which does not even make sense, or even the reciprocal of the entries.  "
},
{
  "id": "prop-socks_n_shoes",
  "level": "2",
  "url": "chp6sec1.html#prop-socks_n_shoes",
  "type": "Proposition",
  "number": "6.1.8",
  "title": "Socks and Shoes.",
  "body": " Socks and Shoes   If and are invertible, then .    To certify that a matrix is the inverse, we can just check that their product is the identity. Using associativity and the definitions of identity and inverse, observe that .   "
},
{
  "id": "summary-being-invertible",
  "level": "2",
  "url": "chp6sec1.html#summary-being-invertible",
  "type": "Insight",
  "number": "6.1.9",
  "title": "Summary of Being Invertible.",
  "body": " Summary of Being Invertible  If and , then the following are equivalent:    is invertible.    is a basis for .    .    "
},
{
  "id": "chp6sec2",
  "level": "1",
  "url": "chp6sec2.html",
  "type": "Lesson",
  "number": "6.2",
  "title": "Strategies for Computing an Inverse",
  "body": " Strategies for Computing an Inverse  Suppose is invertible. How do we find the inverse? We want to find the matrix where . Write and . Then, fixing one column at a time, we want to find the solutions to the matrix equations . So we want to row reduce each of the following:   Note that since each augmented matrix starts with the same matrix , the row reduction process for each will use the exact same row operations, so we may as well group them together into a super augmented matrix and do them all at once.   The Inverse Algorithm   If is invertible, then     You should be able to use the Inverse Algorithm to correctly compute the inverses for matrices, and maybe even ; however, for larger matrices, you should know how to use technology to perform this algorithm for you.  You can use GeoGebra to perform this computation in two ways. First, you can simply input the super-augmented matrix , use ReducedRowEchelonForm , and interpret. Alternatively, you may simply input the matrix , and then use the Invert command.   GeoGebra Activity  For the matrix , compute in each of the following ways:    By hand, using the inverse algorithm    Using GeoGebra, using the ReducedRowEchelonForm command to perform the inverse algorithm,    Using GeoGebra, using the Invert command.    Make certain you obtain the same matrix each time.   In general, there is no easy-to-remember rule for what inverses should look like; however, for matrices, there is an easy rule.   Inverse Formula   If is invertible, then .    This is a direct computation using the Inverse Algorithm ( ). I will show the computation assuming and will leave the case to you.     Observe that the number appears here, and we get an inverse precisely when this number is not zero. We will be looking at this important number and its meaning in the lessons to come.   Inverses of Simple Geometric Transformations  Let us revisit the classes of matrices that correspond to the simple geometric transformations we know, and verify that the inverses we obtain via the Inverse Algorithm agree with those that represent the reverse geometric transformation (cf. ).    — i.e., compress back down    — i.e., shear back the original amount.    — i.e., rotate in the opposite direction    — i.e., reflect again      Consider again the basis and recall that is the matrix that sends us from -coordinates into standard coordinates.  Applying either the Inverse Algorithm, or our Inverse Formula, we get , which is the matrix that sends us from standard coordinates into -coordinates.   Let us return to the matrix equation where and are known and is unknown.  In , I showed that for any matrix , we can find the solution set by computing and interpreting .  If we are in the special case where is and is invertible , and we know its inverse, then we can find by multiplying both sides of the matrix equation by :   This new method is a two-step process: (1) find the inverse and then (2) matrix multiply. Observe that if one uses the inverse algorithm, this involves first using elimination to find and then multiplying . Our previous method of just using elimination to find has fewer steps (and does not require to be invertible or square).  The point is this method is not always the most advantageous. However, it is useful when you expect to be solving multiple matrix equations with the same coefficient matrix (e.g., ). Then, you just compute once and save it . In such cases, it is simpler to just keep multiplying . A common example of such a situation is when you fix an ordered basis and use and to keep changing coordinates.   Consider the ordered basis and the vector . Suppose we want to find the -coordinates of , or in other words, the solution set to the matrix equation , where .  As usual, we could compute and interpret:   Alternatively, we can first find by computing and interpreting:   and then multiplying:    "
},
{
  "id": "algorithm-inverse",
  "level": "2",
  "url": "chp6sec2.html#algorithm-inverse",
  "type": "Proposition",
  "number": "6.2.1",
  "title": "The Inverse Algorithm.",
  "body": " The Inverse Algorithm   If is invertible, then    "
},
{
  "id": "tech-geogebra-inverse-computation",
  "level": "2",
  "url": "chp6sec2.html#tech-geogebra-inverse-computation",
  "type": "Technology",
  "number": "6.2.2",
  "title": "GeoGebra Activity.",
  "body": " GeoGebra Activity  For the matrix , compute in each of the following ways:    By hand, using the inverse algorithm    Using GeoGebra, using the ReducedRowEchelonForm command to perform the inverse algorithm,    Using GeoGebra, using the Invert command.    Make certain you obtain the same matrix each time.  "
},
{
  "id": "prop-2x2-inverse-formula",
  "level": "2",
  "url": "chp6sec2.html#prop-2x2-inverse-formula",
  "type": "Proposition",
  "number": "6.2.3",
  "title": "<span class=\"process-math\">\\(2\\times 2\\)<\/span> Inverse Formula.",
  "body": " Inverse Formula   If is invertible, then .    This is a direct computation using the Inverse Algorithm ( ). I will show the computation assuming and will leave the case to you.    "
},
{
  "id": "ex-geometric-inverses",
  "level": "2",
  "url": "chp6sec2.html#ex-geometric-inverses",
  "type": "Example",
  "number": "6.2.4",
  "title": "Inverses of Simple Geometric Transformations.",
  "body": " Inverses of Simple Geometric Transformations  Let us revisit the classes of matrices that correspond to the simple geometric transformations we know, and verify that the inverses we obtain via the Inverse Algorithm agree with those that represent the reverse geometric transformation (cf. ).    — i.e., compress back down    — i.e., shear back the original amount.    — i.e., rotate in the opposite direction    — i.e., reflect again    "
},
{
  "id": "ex-change-of-basis-inverse",
  "level": "2",
  "url": "chp6sec2.html#ex-change-of-basis-inverse",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": " Consider again the basis and recall that is the matrix that sends us from -coordinates into standard coordinates.  Applying either the Inverse Algorithm, or our Inverse Formula, we get , which is the matrix that sends us from standard coordinates into -coordinates.  "
},
{
  "id": "ex-coordinate-computation",
  "level": "2",
  "url": "chp6sec2.html#ex-coordinate-computation",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": " Consider the ordered basis and the vector . Suppose we want to find the -coordinates of , or in other words, the solution set to the matrix equation , where .  As usual, we could compute and interpret:   Alternatively, we can first find by computing and interpreting:   and then multiplying:   "
},
{
  "id": "chp8sec1",
  "level": "1",
  "url": "chp8sec1.html",
  "type": "Lesson",
  "number": "7.1",
  "title": "Similar Matrix Decompositions (SMDs)",
  "body": " Similar Matrix Decompositions (SMDs)  In earlier lessons, we have encountered simple matrices, such the standard geometric transformations and elementary matrices, which are easy to understand and work with. However, in general, a matrix looks and acts in complicated ways. A big idea the permeates through mathematics is take a complicated thing and split it into simple pieces that are easy to understand . This is a powerful problem-solving strategy.   Matrix Decomposition   Let be an matrix. A matrix decomposition of is an expression where each is simple in a certain context. When viewed as a matrix transformation, this translates to identifying as a composition of simple transformations.    There are different types of useful matrix decompositions. Associated to each decomposition there are two major problems:    Given a decomposition, what kinds of problems can be solved with it?  How does one find a decomposition, if it exists at all?    In this chapter, we will analyze the following:    Similar matrix decomposition (SMD),  Elementary matrix decomposition, and  -decomposition.    Later in this text, we will cover other important decompositions:    -decomposition,  Polar decomposition, and  Singular Value Decomposition (SVD).     Similar Matrix Decomposition   Given a square matrix , a similar matrix decomposition (SMD) of is an expression . We say the two matrices and are similar .    While it is not necessary, it is typically our goal that here be very simple , such as a stretch, shear, or rotation matrix.  Given a similar matrix decomposition, write and let . We should think of as the change of basis matrix from -coordinates to standard coordinates, and as such, as the change of basis from standard coordinates to -coordinates.   Interpreting Similar Matrix Decomposition  In complete sentences, and using geometric words, explain the meaning of each of the following expressions.                         So such a similar matrix decomposition , multiplication by can understood as the composition of the following three processes:     Step 1 -  Change the coordinate of your point from standard to -coordinates.    Step 2 -  Perform the transformation in -coordinates.    Step 3 -  Change the coordinate of your point back from -coordinates to standard coordinates.      Play with SMDs and transformations of the plane relative to the -coordinate grid at GeoGebra ID: qahp88bh . Only go to this link after you have done the above activity.   Visualizing SMDs as label change, geometric transformation, and label change back.     Such decompositions are incredibly important in both pure and applied linear algebra. It enables one to take a very complicated looking matrix, and by changing coordinates, understand it as a simple matrix.  You should be able to understand, interpret, and go between symbolic, verbal, and visual representations of such a decomposition, as shown in the following example.    Consider the matrix . This matrix does not fall into one of our categories of simple matrices. Looking at what it does to the standard unit square in the plane does not clarify matters much. Below is depicted how it transforms the standard unit square.     Now suppose that we know . What this says is we should not be looking at the standard coordinate system, but rather the coordinate system associated to our familiar ordered basis . With respect to this basis, is a stretch by a factor of 2 in the -direction and a stretch by a factor of 3 in the -direction.        Visualizing   The goal of this activity is to visualize elementary matrix transformations performed in -coordinates and computing the corresponding similar matrix decomposition.    Drop two points and in the plane so that they are movable. Move them to and , respectively. Label the origin .  Use the Vector tool to draw the vector from the origin to and then the origin to . Name them and respectively, and let .  Use the Sequence and Line commands to draw coordinate lines in the direction and then in the -direction.  Use the Polygon tool to fill in the -unit square. (Make sure the -unit square moves correctly when you move and .)  Define matrices and . Use the coordinate tools , , etc., to make sure dynamically changes as you move and .  Using ApplyMatrix , visually represent, analyze, and explain how each of the matrices , and transform the -unit square?  Explore! Change your matrix and see how the transformation changes. (Challenge: Replace entries of with sliders.) Move your points and around.  Consider the coordinate system given by the ordered basis and the transformation that, relative to the -coordinate system, is a rotation of in the direction of . Use GeoGebra to visually represent this matrix, find the associated similar matrix decomposition, and the single matrix that is its product.   For each of the following, use complete sentences and geometric words to describe how the matrix transforms the plane. Then use GeoGebra to clearly visually represent this transformation.         Play with SMDs and transformations of the plane relative to the -coordinate grid at GeoGebra ID: qahp88bh . Only go to this link after you have done the above activity.   Visualizing SMDs as label change, geometric transformation, and label change back.      Problems    Consider the following two ordered bases: and . Let denote the transformation from -coordinates into -coordinates.    Carefully draw and label the coordinate grids given by both ordered bases. (Make it plenty big because you will be drawing lots of things on it.) You may do this by hand or use GeoGebra.  Shade in , the -unit square.  Let . Sketch or use GeoGebra to show how transforms .  Using complete sentences and geometric words, explain how transforms the plane.  Let . Sketch or use GeoGebra to show how transforms .  Using complete sentences and geometric words, explain how transforms the plane.        The matrix transforms the plane by sending the red region below to the blue region.     Using complete sentences and geometric words, verbally explain how transforms the plane.  Find the symbolic expression for and give its associated similar matrix decomposition.          Below is a verbal description of how two matrices transform the plane. For each, (i) give a symbolic expression for the described similar matrix decomposition, and (ii) clearly sketch or use GeoGebra to visually show how the described matrix transforms the plane, relative to the relevant coordinate system.    stretches by a factor of 4 in the direction and stretches by a factor of 2 in the .  shears the vector by 2 units in the direction of the vector and does not move the vector .        Suppose we know that .    Recall . In complete sentences and geometric word, verbally explain how transforms the plane. (Hint: Consider using the SMD together with the associative property of matrix multiplication.)  Generalize your reason to explain how transforms the plane.       "
},
{
  "id": "def-matrix-decomposition",
  "level": "2",
  "url": "chp8sec1.html#def-matrix-decomposition",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Matrix Decomposition.",
  "body": " Matrix Decomposition   Let be an matrix. A matrix decomposition of is an expression where each is simple in a certain context. When viewed as a matrix transformation, this translates to identifying as a composition of simple transformations.   "
},
{
  "id": "def-smd",
  "level": "2",
  "url": "chp8sec1.html#def-smd",
  "type": "Definition",
  "number": "7.1.2",
  "title": "Similar Matrix Decomposition.",
  "body": " Similar Matrix Decomposition   Given a square matrix , a similar matrix decomposition (SMD) of is an expression . We say the two matrices and are similar .   "
},
{
  "id": "activity-smd_symbolic_to_geometric",
  "level": "2",
  "url": "chp8sec1.html#activity-smd_symbolic_to_geometric",
  "type": "Activity",
  "number": "7.1.3",
  "title": "Interpreting Similar Matrix Decomposition.",
  "body": " Interpreting Similar Matrix Decomposition  In complete sentences, and using geometric words, explain the meaning of each of the following expressions.                        "
},
{
  "id": "note-geogebra-link-smd1",
  "level": "2",
  "url": "chp8sec1.html#note-geogebra-link-smd1",
  "type": "Technology",
  "number": "7.1.4",
  "title": "",
  "body": " Play with SMDs and transformations of the plane relative to the -coordinate grid at GeoGebra ID: qahp88bh . Only go to this link after you have done the above activity.   Visualizing SMDs as label change, geometric transformation, and label change back.    "
},
{
  "id": "example_simmatrixdecomp1",
  "level": "2",
  "url": "chp8sec1.html#example_simmatrixdecomp1",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  Consider the matrix . This matrix does not fall into one of our categories of simple matrices. Looking at what it does to the standard unit square in the plane does not clarify matters much. Below is depicted how it transforms the standard unit square.     Now suppose that we know . What this says is we should not be looking at the standard coordinate system, but rather the coordinate system associated to our familiar ordered basis . With respect to this basis, is a stretch by a factor of 2 in the -direction and a stretch by a factor of 3 in the -direction.      "
},
{
  "id": "exploration-geogebra-smd",
  "level": "2",
  "url": "chp8sec1.html#exploration-geogebra-smd",
  "type": "Technology",
  "number": "7.1.9",
  "title": "Visualizing <span class=\"process-math\">\\(A=PBP^{-1}\\)<\/span>.",
  "body": " Visualizing   The goal of this activity is to visualize elementary matrix transformations performed in -coordinates and computing the corresponding similar matrix decomposition.    Drop two points and in the plane so that they are movable. Move them to and , respectively. Label the origin .  Use the Vector tool to draw the vector from the origin to and then the origin to . Name them and respectively, and let .  Use the Sequence and Line commands to draw coordinate lines in the direction and then in the -direction.  Use the Polygon tool to fill in the -unit square. (Make sure the -unit square moves correctly when you move and .)  Define matrices and . Use the coordinate tools , , etc., to make sure dynamically changes as you move and .  Using ApplyMatrix , visually represent, analyze, and explain how each of the matrices , and transform the -unit square?  Explore! Change your matrix and see how the transformation changes. (Challenge: Replace entries of with sliders.) Move your points and around.  Consider the coordinate system given by the ordered basis and the transformation that, relative to the -coordinate system, is a rotation of in the direction of . Use GeoGebra to visually represent this matrix, find the associated similar matrix decomposition, and the single matrix that is its product.   For each of the following, use complete sentences and geometric words to describe how the matrix transforms the plane. Then use GeoGebra to clearly visually represent this transformation.       "
},
{
  "id": "note-geogebra-link-smd2",
  "level": "2",
  "url": "chp8sec1.html#note-geogebra-link-smd2",
  "type": "Technology",
  "number": "7.1.10",
  "title": "",
  "body": " Play with SMDs and transformations of the plane relative to the -coordinate grid at GeoGebra ID: qahp88bh . Only go to this link after you have done the above activity.   Visualizing SMDs as label change, geometric transformation, and label change back.    "
},
{
  "id": "prob-basis-grids",
  "level": "2",
  "url": "chp8sec1.html#prob-basis-grids",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "  Consider the following two ordered bases: and . Let denote the transformation from -coordinates into -coordinates.    Carefully draw and label the coordinate grids given by both ordered bases. (Make it plenty big because you will be drawing lots of things on it.) You may do this by hand or use GeoGebra.  Shade in , the -unit square.  Let . Sketch or use GeoGebra to show how transforms .  Using complete sentences and geometric words, explain how transforms the plane.  Let . Sketch or use GeoGebra to show how transforms .  Using complete sentences and geometric words, explain how transforms the plane.     "
},
{
  "id": "prob-red-blue-transform",
  "level": "2",
  "url": "chp8sec1.html#prob-red-blue-transform",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "  The matrix transforms the plane by sending the red region below to the blue region.     Using complete sentences and geometric words, verbally explain how transforms the plane.  Find the symbolic expression for and give its associated similar matrix decomposition.       "
},
{
  "id": "prob-verbal-descriptions",
  "level": "2",
  "url": "chp8sec1.html#prob-verbal-descriptions",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "  Below is a verbal description of how two matrices transform the plane. For each, (i) give a symbolic expression for the described similar matrix decomposition, and (ii) clearly sketch or use GeoGebra to visually show how the described matrix transforms the plane, relative to the relevant coordinate system.    stretches by a factor of 4 in the direction and stretches by a factor of 2 in the .  shears the vector by 2 units in the direction of the vector and does not move the vector .     "
},
{
  "id": "prob-matrix-powers",
  "level": "2",
  "url": "chp8sec1.html#prob-matrix-powers",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": "  Suppose we know that .    Recall . In complete sentences and geometric word, verbally explain how transforms the plane. (Hint: Consider using the SMD together with the associative property of matrix multiplication.)  Generalize your reason to explain how transforms the plane.     "
},
{
  "id": "chp8sec2",
  "level": "1",
  "url": "chp8sec2.html",
  "type": "Lesson",
  "number": "7.2",
  "title": "Elementary Matrix Decompositions (EMDs)",
  "body": " Elementary Matrix Decompositions (EMDs)   Elementary Matrix Decomposition   If is a square matrix, then an elementary matrix decomposition of is an expression where each is an elementary matrix.    Since elementary matrices are associated to stretches, shears, and reflections, an elementary matrix decomposition allows us to understand as a composition of these simple transformations. The complexity comes in the fact that there will usually be many elementary matrices in such a decomposition.  Given such a decomposition, I expect that you are able to correctly verbally interpret such a decomposition using geometric words, clearly and correctly identifying the order of the transformations. See, for example, .  Now the question becomes, how do we construct such a decomposition. Here is a simple yet powerful observation:    If there is a sequence of elementary row operations transforming matrix into matrix , (i.e. ),  then there is a sequence of elementary matrices such that .  Using the Socks and Shoes property ( ) to move these elementary matrices to the other side, we get .    By choosing different 's and different sequences of row operations, we obtain different matrix decompositions of !  To begin, for any matrix , let and choose any sequence of row operations. We then get a decomposition . In particular, if , , and writing , then we get the following.   Construction: Elementary Matrix Decompositions  If is an invertible matrix, then to construct an elementary matrix decomposition:    Row reduce to , recording each row operation,  Write down the associated product ,  Socks and Shoes ( ) these matrices over to get (you can then drop the ).     Observe that since the inverse of an elementary matrix is an elementary matrix, this is an elementary matrix decomposition. Also, since there are many sequences of row operations to reduce to , there are accordingly many different possible elementary matrix decompositions.  I expect you should be able to correctly perform this process by hand for and matrices.    Consider the invertible matrix . Row reduction gives Recording the row operations with elementary matrices gives Lastly, Socks and Shoesing it over, and dropping the superfluous , gives When is viewed as a transformation of the plane, this means that can be viewed as a composition of the following transformations:    First, shear the vector two units in the positive -direction.  Next, reflect through the -axis.  Next, shear the vector two units in the positive -direction.  Last, reflect through the line .       Compute an elementary matrix decomposition for each of the following:     See a visual interpretation of an elementary matrix decomposition for at GeoGebra ID: yfqdvzbk .    Problems    Consider the matrix .   Find an elementary matrix decomposition of . Do this by hand and show how you get each elementary matrix.  Use your elementary matrix decomposition to describe in complete sentences, using geometric words, how transforms the plane.  Use your decomposition to clearly sketch and label each step of how transforms the plane. Do so by following the standard unit square. You may do this either carefully by hand or on GeoGebra.  Exploration. Is the elementary matrix decomposition you found unique? In other words, could you have found a different collection of elementary matrices whose product is ? Explain.      "
},
{
  "id": "def-emd",
  "level": "2",
  "url": "chp8sec2.html#def-emd",
  "type": "Definition",
  "number": "7.2.1",
  "title": "Elementary Matrix Decomposition.",
  "body": " Elementary Matrix Decomposition   If is a square matrix, then an elementary matrix decomposition of is an expression where each is an elementary matrix.   "
},
{
  "id": "construction-emd",
  "level": "2",
  "url": "chp8sec2.html#construction-emd",
  "type": "Insight",
  "number": "7.2.2",
  "title": "Construction: Elementary Matrix Decompositions.",
  "body": " Construction: Elementary Matrix Decompositions  If is an invertible matrix, then to construct an elementary matrix decomposition:    Row reduce to , recording each row operation,  Write down the associated product ,  Socks and Shoes ( ) these matrices over to get (you can then drop the ).    "
},
{
  "id": "ex-emd",
  "level": "2",
  "url": "chp8sec2.html#ex-emd",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Consider the invertible matrix . Row reduction gives Recording the row operations with elementary matrices gives Lastly, Socks and Shoesing it over, and dropping the superfluous , gives When is viewed as a transformation of the plane, this means that can be viewed as a composition of the following transformations:    First, shear the vector two units in the positive -direction.  Next, reflect through the -axis.  Next, shear the vector two units in the positive -direction.  Last, reflect through the line .     "
},
{
  "id": "activity-emd-practice",
  "level": "2",
  "url": "chp8sec2.html#activity-emd-practice",
  "type": "Activity",
  "number": "7.2.4",
  "title": "",
  "body": " Compute an elementary matrix decomposition for each of the following:   "
},
{
  "id": "note-geogebra-emd",
  "level": "2",
  "url": "chp8sec2.html#note-geogebra-emd",
  "type": "Note",
  "number": "7.2.5",
  "title": "",
  "body": " See a visual interpretation of an elementary matrix decomposition for at GeoGebra ID: yfqdvzbk .  "
},
{
  "id": "homework-chp8sec2-2",
  "level": "2",
  "url": "chp8sec2.html#homework-chp8sec2-2",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": "  Consider the matrix .   Find an elementary matrix decomposition of . Do this by hand and show how you get each elementary matrix.  Use your elementary matrix decomposition to describe in complete sentences, using geometric words, how transforms the plane.  Use your decomposition to clearly sketch and label each step of how transforms the plane. Do so by following the standard unit square. You may do this either carefully by hand or on GeoGebra.  Exploration. Is the elementary matrix decomposition you found unique? In other words, could you have found a different collection of elementary matrices whose product is ? Explain.    "
},
{
  "id": "chp8sec3",
  "level": "1",
  "url": "chp8sec3.html",
  "type": "Lesson",
  "number": "7.3",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span>-Decompositions",
  "body": " -Decompositions  Continuing with the core concept of the previous section, what happens when you can row reduce to an upper triangular matrix using only type 3 elementary row operations, only clearing downward. As I will show in a moment, this gives rise to a new type of decomposition.   -Decomposition   If is a square matrix, then an -decomposition of is an expression where is a lower triangular matrix and is an upper triangular matrix.    Note that in the definition, neither the diagonals of nor need to be just 1's.  I will first explain a method to find an -decomposition, tweaking the ideas behind finding an elementary matrix decomposition, and using the following simple proposition.   Product of Lower Triangular Matrices is Lower Triangular   If and are lower (resp. upper) matrices, then their product is lower (resp. upper) triangular.    In class activity. Hint: use Matrix Multiplication Meaning #1 and reason about about mixing vectors with many zeros.     Construction: -Decompositions  If can row reduced to an upper triangular matrix using only type 3 row operations clearing below, then to construct an -decomposition:    Row reduce to an upper triangular matrix using only type 3 row operations clearing below.  Record these row operations as elementary matrices. Observe that type 3 elementary matrices that clear below are lower triangular. We then get .  Then, Socks and Shoes these matrices over to get .  Multiply together the 's, and by Proposition , this product, is lower triangular. We then have .      Compute an -decomposition for each of the following:    This idea is simple, but writing down and then multiplying each 's for large matrices can be a pain. For the that arise in this way, their product is nice as I shall now discuss.  Consider case interpreted as a sequence of row operations performed to : What we will be doing in filling up the columns of below the diagonal, moving right to left. More precisely, it says, look at the second from the last column. Use the leading 1 to fill the column below it, filling from bottom to top. Then move one column to the left and repeat. When viewed this way, it is not hard to see that the product is then .  In fact, this generalizes to matrices. This is formalized in the so called, Doolittle Algorithm.   Doolittle Algorithm for -Decompositions   If can be row reduced to an upper triangular matrix using only type 3 row operations clearing below and is negative the multiplier to use the pivot in the row to clear the entry in the row, then     Note that just as not all matrices may be reduced to an upper triangular matrix using only type 3 row operations only ever clearing below, it is also that case that not all matrices admit an -decomposition.  Unfortunately at this time, GeoGebra does not compute -decompositions, however, more powerful Computer Algebra Systems (CAS) can, such as the Python-based Sage. As such, I expect you should be able to compute -decompositions for and by hand. If you are so inclined, try out using Sage.  I expect that you understand the concepts behind where an -decomposition comes from, and why it works, so that you can alter the construction as necessary to create similar, related decompositions such as:    -decomposition where is a permutation matrix, is lower triangular, and is upper triangular.  -decomposition where is unipotent lower triangular, is diagonal, and is unipotent upper triangular.    Suppose we have a matrix equation where is square matrix with -decomposition . In these special situations, then to find we can use the -decomposition.  Since , we may split the matrix equation into two simpler equations: and we solve the first by forward substitution and the second by backward substitution .  Given the matrix equation , forward substitution is the recursive process of solving for by substituting in the values into row of the matrix equation.    Suppose we have the matrix equation . The forward substitution process proceeds as follows, one row at a time:    The first row tells us that  Next substitute into row 2, getting:  Lastly, substitute and into row 3, getting      Backwards substitution is the analogous recursive process for matrix equations in which you solve for by substituting in the values into row of the matrix equation.  When dealing with large matrices, this process can be relatively fast for solving matrix equations as compared to other methods for solving matrix equations.   Use an -decomposition to solve the matrix equation     Problems    Let and .   Find an -decomposition for .  Use Method #3 to solve the matrix equation .       Consider the matrix .   Why does fail to have an -Decomposition? Explain in complete sentences.  Write as a product where is lower triangular, is upper triangular, and is a permutation matrix (i.e. a product of type-1 elementary matrices).  In class we discussed a step-by-step produce for using -decompositions to solves systems. Create, and clearly explain, a step-by-step procedure for using -Decompositions to solve systems.  Use the procedure you created to solve the matrix equation .       Rigorously prove the following sequence of propositions.   Proposition. Let is an lower triangular matrix and that , is an column vector for which the first entries are 0. (For example, would be a vector where the first two entries are 0.) is a vector for which the first entries are also 0.   Proposition. The product of two lower triangular matrices is also lower triangular.     "
},
{
  "id": "def-lud",
  "level": "2",
  "url": "chp8sec3.html#def-lud",
  "type": "Definition",
  "number": "7.3.1",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span>-Decomposition.",
  "body": " -Decomposition   If is a square matrix, then an -decomposition of is an expression where is a lower triangular matrix and is an upper triangular matrix.   "
},
{
  "id": "prop-prodofLs",
  "level": "2",
  "url": "chp8sec3.html#prop-prodofLs",
  "type": "Proposition",
  "number": "7.3.2",
  "title": "Product of Lower Triangular Matrices is Lower Triangular.",
  "body": " Product of Lower Triangular Matrices is Lower Triangular   If and are lower (resp. upper) matrices, then their product is lower (resp. upper) triangular.    In class activity. Hint: use Matrix Multiplication Meaning #1 and reason about about mixing vectors with many zeros.   "
},
{
  "id": "constructing-lud",
  "level": "2",
  "url": "chp8sec3.html#constructing-lud",
  "type": "Remark",
  "number": "7.3.3",
  "title": "Construction: <span class=\"process-math\">\\(LU\\)<\/span>-Decompositions.",
  "body": " Construction: -Decompositions  If can row reduced to an upper triangular matrix using only type 3 row operations clearing below, then to construct an -decomposition:    Row reduce to an upper triangular matrix using only type 3 row operations clearing below.  Record these row operations as elementary matrices. Observe that type 3 elementary matrices that clear below are lower triangular. We then get .  Then, Socks and Shoes these matrices over to get .  Multiply together the 's, and by Proposition , this product, is lower triangular. We then have .    "
},
{
  "id": "activity-lu-practice",
  "level": "2",
  "url": "chp8sec3.html#activity-lu-practice",
  "type": "Activity",
  "number": "7.3.4",
  "title": "",
  "body": " Compute an -decomposition for each of the following:   "
},
{
  "id": "algorithm-doolittle",
  "level": "2",
  "url": "chp8sec3.html#algorithm-doolittle",
  "type": "Algorithm",
  "number": "7.3.5",
  "title": "Doolittle Algorithm for <span class=\"process-math\">\\(LU\\)<\/span>-Decompositions.",
  "body": " Doolittle Algorithm for -Decompositions   If can be row reduced to an upper triangular matrix using only type 3 row operations clearing below and is negative the multiplier to use the pivot in the row to clear the entry in the row, then    "
},
{
  "id": "ex-forward-sub",
  "level": "2",
  "url": "chp8sec3.html#ex-forward-sub",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": "  Suppose we have the matrix equation . The forward substitution process proceeds as follows, one row at a time:    The first row tells us that  Next substitute into row 2, getting:  Lastly, substitute and into row 3, getting     "
},
{
  "id": "activity-lu-solve",
  "level": "2",
  "url": "chp8sec3.html#activity-lu-solve",
  "type": "Activity",
  "number": "7.3.7",
  "title": "",
  "body": " Use an -decomposition to solve the matrix equation   "
},
{
  "id": "homework-chp8sec3-2",
  "level": "2",
  "url": "chp8sec3.html#homework-chp8sec3-2",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": "  Let and .   Find an -decomposition for .  Use Method #3 to solve the matrix equation .    "
},
{
  "id": "homework-chp8sec3-3",
  "level": "2",
  "url": "chp8sec3.html#homework-chp8sec3-3",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": "  Consider the matrix .   Why does fail to have an -Decomposition? Explain in complete sentences.  Write as a product where is lower triangular, is upper triangular, and is a permutation matrix (i.e. a product of type-1 elementary matrices).  In class we discussed a step-by-step produce for using -decompositions to solves systems. Create, and clearly explain, a step-by-step procedure for using -Decompositions to solve systems.  Use the procedure you created to solve the matrix equation .    "
},
{
  "id": "homework-chp8sec3-4",
  "level": "2",
  "url": "chp8sec3.html#homework-chp8sec3-4",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": "  Rigorously prove the following sequence of propositions.   Proposition. Let is an lower triangular matrix and that , is an column vector for which the first entries are 0. (For example, would be a vector where the first two entries are 0.) is a vector for which the first entries are also 0.   Proposition. The product of two lower triangular matrices is also lower triangular.   "
},
{
  "id": "chp9sec1",
  "level": "1",
  "url": "chp9sec1.html",
  "type": "Lesson",
  "number": "8.1",
  "title": "Determinant as Signed Volume Scaling Factor",
  "body": " Determinant as Signed Volume Scaling Factor   Area   What is area? More precisely, given a closed polygonal region , what do we mean by the area of ? In short, it is the size of the region, as measure in units of the unit square .   Area in the Plane   If is closed polygonal region in the plane, its area , denoted , is the number of disjoint copies of the unit square needed to fill .     Finding areas of polygonal regions   Find the areas of the regions , , and in the figure below. Be sure to clearly explain your strategy. Can you then find a different strategy?    Three polygonal regions in the plane.      While completing , it is likely that you discovered and used each of the following properties of area. Take a moment to go back and see all the places you might have used the following properties in the activity.   Properties of Area   Area has the following three properties:  (Normalization.) The area of the unit square is 1 (i.e. ),  (Translation.) Translation does not affect area (i.e. ), and   (Additivity.) The area of two disjoint regions is the sum of their area (i.e. if , then ).      These three properties will allow us to productively reason about area going forward.  Given a square matrix , it transforms the plane via matrix multiplication , . We have already seen how we can measure stretch factors in a given direction. A second natural question is the following: How does change area?     A closed polygonal region and a transformed region .   Some questions to start your investigations:   How does the area of a transformed region , and a transformed translated region , compare?  How do each of the elementary geometric matrix transformations affect area?  How do compositions affect area?  How might matrix decompositions help you better understand how a matrix transforms area?  How might we generalize this to higher dimensions?   What else might you wonder about area as it relates to linear algebra?   Visualizing and Exploring Area Scaling Factor   In this activity, you will use your Area Comparison Tool to analyze the areas of polygonal regions in the plane and discover how certain matrix transformations affect area. A pre-made version of the Area Comparison Tool can be found at GeoGebra ID: rxtncdwy ). I walk you thought constructing your own Area Comparison Tool in Creation .  Start with .    Translations and Area.  Using the mouse, click on the center of and drag it. This translates  . As you translate , how does its area change? How does the transformed area change? Perhaps your observations are unique to this specific matrix? Use your sliders to start to adjust the entries of your matrix and try again. Summarize your observations. Justify your conclusions by using the definition of area and its properties.    Ratio of Areas.  Find the ratio of the transformed area to the original area (i.e. ). Move around the points of your polygon. How does this change the ratio of areas? Use your sliders to start to adjust the entries of your matrix. How does this change the ratio of areas? Summarize your observations.    Simple Transformations.  How do you think each of the simple transformations: stretches, reflections, rotations, projections, and shears will affect the ratio of areas? For example,   After writing down your expectations, reset and use the Area Comparison Tool to check. After some time exploring these ratios, summarize your findings. Did any surprise you?        Consider the matrix transforming the red pentagon to the right. The red pentagon has area . The transformed pentagon in blue has area 18.  The ratio of areas is .    A transformed polygonal region in the plane.       Visualizing asf.    Having completed the activity, here are two fundamental observations you should either have made or should now go back and verify.   Observation 1: Changing your polygon does not affect the ratio of areas. Rather, the ratio of areas only depends upon the matrix.  As such, we are justified in making the following definition.   Area Scaling Factor (asf)   If is a matrix and is any closed polygonal region, then the area scaling factor of is the constant value .     Observation 2: Simple transformations affect area in the following ways.   Pure stretches scale area by their stretch factor, . (i.e. )  Projections smash area to 0. (i.e. )  Pure reflections do not affect area. (i.e. )  Pure rotations do not affect area. (i.e. )  Pure shears do not affect area. (i.e. )    Shears and Cavalieri's Principle The most surprising is that of the shear. This is a manifestation of Cavalieri's principle , which implies that if we have a stack of rectangles, they cover the same area, regardless of whether they are perfectly stacked upright or if they are offset.   Visualizing Cavalieri's principle.    Play with Cavalieri's Principle at GeoGebra ID: vrnff7nj .   Exploring and composition   Consider each of the following matrix products.   Use the Area Comparison Tool to find the of each of the matrices in each product. How does the of each of the constituent matrices relate to the of their product?  Summarize your observations.    A third fundamental observation about asf is:   Observation 3: The area scaling factor of a composition is the product of the area scaling factors. Symbolically, this means the satisfies the product formula  .  Combining our new observations of the of simple transformations together with the product formula, we may now use elementary matrix decompositions to compute !   Using an EMD to compute   Let . I will walk through how we can use an EMD for together with the observations of this lesson, to compute .  1. Row reduction.   2. Record row operations with elementary matrices.   3. Socks and Shoes over.   4. Use of simple transformations and the product formula.       What is the of     We now connect to the area of parallelograms. Consider the parallelogram in the plane determined by the basis . This parallelogram is the -unit square (Figure ). The matrix , when viewed as a transformation, sends the standard unit square to the -unit square .    The -unit square is the transformed standard unit square.   Then   We have just justified the following proposition.   Proposition ( -unit squares and )   If is a basis, and is the -unit square, then .    This proposition has many uses in geometry.   Area of a Parallelogram   Let denote the parallelogram determined by vectors and . Then, using the computation in Example ,      Observe how areas of parallelograms emerge from . Note that all triangles are half of a parallelogram. As such, gives us a way to compute areas of triangles! Just like the side lengths () and angle measures of triangle (), area of a triangle emerges from linear algebraic concepts.  We can now generalize our reasoning to for .   Unit Cube in   The unit cube  is the parallelepiped determined by the vectors .      The unit cube in .   The volume of a region in is the size of a region as measured in units of the -dimensional unit cube .   Volume in   If is closed polygonal region in , its volume , denoted , is the number of disjoint copies of the unit cube needed to fill .    It is convention to talk about volume in dimensions , and just be aware that volume when is our usual notion of area. All properties in Proposition generalize to volume. For any matrix , we can think about its associated volume scaling factor  .   Volume Scaling Factor (vsf)   If is an matrix and is any closed polygonal region, then the volume scaling factor of is the constant value .    Visualize volume scaling factor in at GeoGebra ID: xkapvwer .  From here on out, when considering all we will use the term volume scaling factor and will only use the term area scaling factor when we are only looking at the plane.  Again, upon generalizing our reasoning to , we see connects to the volume of parallelepipeds.   Proposition ( -unit Cubes and )   If is an ordered basis and the change of basis matrix from -coordinates to standard coordinates, then the volume of the -unit cube is .      Consider the parallelepiped in determined by basis where   You may play with at GeoGebra ID: vrmtn26v .  Then .  We see has an EMD:      Using the product formula: . We deduce the parallelepiped has volume 6! Without , how else could you have computed that?!      Orientation  A path is a loop if it closes up. A loop is simple if it does not intersect itself.   Orientation in the Plane   If is simple loop in the plane, then its orientation is the direction it travels. The two options are counterclockwise and clockwise .      Simple loops with counterclockwise (left) and clockwise (right) orientations.   When looking at a matrix transformation of the plane, another natural question is: what happens to the orientation of loops? Do counterclockwise loops go to counterclockwise loops, or are they flipped to clockwise loops?  If orientation is preserved, we say has positive sign and if orientation flipped, we say has negative sign . We denote this by or , respectively.   Visualizing and Exploring Orientation   Use your Orientation Comparison Tool to analyze the orientation of polygonal regions in the plane and discover how certain matrix transformations affect orientation. A pre-made version of the Orientation Comparison Tool can be found at GeoGebra ID: e69sjkrw .    Translations and Orientation   Click and drag . As you translate , how does its orientation change? How does the transformed orientation change? Perhaps your observations are unique to this specific matrix? Use sliders to change the entries of your matrix and try again. Summarize your observations.     Simple Transformations   How do you think each of the simple transformations: stretches, reflections, rotations, projections, and shears will affect orientation? For example,   After writing down your expectations, use the Orientation Comparison Tool to check. Summarize your findings.     Compositions   Consider each of the following matrix products.   How does the of each of the constituent matrices relate to the of their product? Summarize your observations.     Just like for the , you should make three fundamental observations:   Observation 1: Changing your simple loop does not affect the sign.   Observation 2: Simple transformations affect orientation in the following way.    Pure stretches do not affect orientation. (i.e., )    Projections smash curve to 0. (i.e., is N\/A)    Pure reflections reverse orientation. (i.e., )    Pure shears do not affect orientation. (i.e., )    Pure rotations do not affect orientation. (i.e., )     Observation 3: The sign of a composition is the product of the signs. Symbolically, this means the satisfies the product formula  .  Once more, we may use these observations with EMDs to compute the sign of any matrix.   Using an EMD to compute   If , then in we computed   so       What is the sign of     Generalizing sign to for is slightly nuanced. We cannot just think about orientations of simple loops in . (Why do you think that is?) However, in , we found we could find the sign by counting reflections. It is this perspective that easily generalizes to .   Sign   If is an invertible matrix and is the number of times a reflection appears in an elementary matrix decomposition of , then its sign is .    Different elementary matrix decompositions might have different numbers of reflections. It is a proposition to be proved elsewhere that the parity of this number only depends on , not the elementary matrix decomposition, and hence , as defined in is well-defined.    Determinant  The volume scaling factor and sign, while measuring different things, are deeply related and we can put them together into a single number.   Determinant   The signed volume scaling factor of is the product of its sign and volume scaling factor. This number is also called the determinant of ,      Different Notations For Determinant  Recall in Notation that I represent matrices in three different ways: name, columns, and entries. Depending on the relevant representation of the matrix, I represent its determinant differently.      Name: When working with a matrix name, I usually use det.      Column: When working with the columns of , namely, , I will sometimes write the determinant of in terms of its columns as . In this way, the determinant can then be viewed as a rule on columns, which turns out to be a productive perspective when working in multilinear algebra.     Entries: When I work with matrix entries , I often use vertical bars.     For example, if , then the three representations of the determinant are:    The determinant is an important number in linear algebra. In other textbooks, you will see it defined differently, often via formulas or algebraic properties. Here, I made the pedagogical decision to start with and center intuitive geometric properties to help give the number meaning and aid you in your reasoning about the determinant.  In , we will develop numerous strategies for computing the determinant, some of which you may already know. I want to remind you that is important to center the meaning of the determinant as signed volume scaling factor. In particular, is . The determinant arises in many formulas throughout math, and hence throughout STEM, and I want you to remember its geometric origins: when you see a determinant, there is a signed volume scaling factor nearby.   "
},
{
  "id": "def-area",
  "level": "2",
  "url": "chp9sec1.html#def-area",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Area in the Plane.",
  "body": " Area in the Plane   If is closed polygonal region in the plane, its area , denoted , is the number of disjoint copies of the unit square needed to fill .   "
},
{
  "id": "activity-area",
  "level": "2",
  "url": "chp9sec1.html#activity-area",
  "type": "Activity",
  "number": "8.1.2",
  "title": "Finding areas of polygonal regions.",
  "body": " Finding areas of polygonal regions   Find the areas of the regions , , and in the figure below. Be sure to clearly explain your strategy. Can you then find a different strategy?    Three polygonal regions in the plane.     "
},
{
  "id": "prop-area_properties",
  "level": "2",
  "url": "chp9sec1.html#prop-area_properties",
  "type": "Proposition",
  "number": "8.1.3",
  "title": "Properties of Area.",
  "body": " Properties of Area   Area has the following three properties:  (Normalization.) The area of the unit square is 1 (i.e. ),  (Translation.) Translation does not affect area (i.e. ), and   (Additivity.) The area of two disjoint regions is the sum of their area (i.e. if , then ).     "
},
{
  "id": "fig-area",
  "level": "2",
  "url": "chp9sec1.html#fig-area",
  "type": "Figure",
  "number": "8.1.4",
  "title": "",
  "body": "  A closed polygonal region and a transformed region .  "
},
{
  "id": "geogebra_activity-asf",
  "level": "2",
  "url": "chp9sec1.html#geogebra_activity-asf",
  "type": "Activity",
  "number": "8.1.5",
  "title": "Visualizing and Exploring Area Scaling Factor.",
  "body": " Visualizing and Exploring Area Scaling Factor   In this activity, you will use your Area Comparison Tool to analyze the areas of polygonal regions in the plane and discover how certain matrix transformations affect area. A pre-made version of the Area Comparison Tool can be found at GeoGebra ID: rxtncdwy ). I walk you thought constructing your own Area Comparison Tool in Creation .  Start with .    Translations and Area.  Using the mouse, click on the center of and drag it. This translates  . As you translate , how does its area change? How does the transformed area change? Perhaps your observations are unique to this specific matrix? Use your sliders to start to adjust the entries of your matrix and try again. Summarize your observations. Justify your conclusions by using the definition of area and its properties.    Ratio of Areas.  Find the ratio of the transformed area to the original area (i.e. ). Move around the points of your polygon. How does this change the ratio of areas? Use your sliders to start to adjust the entries of your matrix. How does this change the ratio of areas? Summarize your observations.    Simple Transformations.  How do you think each of the simple transformations: stretches, reflections, rotations, projections, and shears will affect the ratio of areas? For example,   After writing down your expectations, reset and use the Area Comparison Tool to check. After some time exploring these ratios, summarize your findings. Did any surprise you?     "
},
{
  "id": "chp9sec1subsec1-14",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-14",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  Consider the matrix transforming the red pentagon to the right. The red pentagon has area . The transformed pentagon in blue has area 18.  The ratio of areas is .    A transformed polygonal region in the plane.     "
},
{
  "id": "figure-geogebra_asf",
  "level": "2",
  "url": "chp9sec1.html#figure-geogebra_asf",
  "type": "Figure",
  "number": "8.1.7",
  "title": "",
  "body": " Visualizing asf.   "
},
{
  "id": "def-asf",
  "level": "2",
  "url": "chp9sec1.html#def-asf",
  "type": "Definition",
  "number": "8.1.8",
  "title": "Area Scaling Factor (asf).",
  "body": " Area Scaling Factor (asf)   If is a matrix and is any closed polygonal region, then the area scaling factor of is the constant value .   "
},
{
  "id": "figure-geogebra_cavalieris_principle",
  "level": "2",
  "url": "chp9sec1.html#figure-geogebra_cavalieris_principle",
  "type": "Figure",
  "number": "8.1.9",
  "title": "",
  "body": " Visualizing Cavalieri's principle.   "
},
{
  "id": "chp9sec1subsec1-25",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-25",
  "type": "Activity",
  "number": "8.1.10",
  "title": "Exploring <span class=\"process-math\">\\(\\asf\\)<\/span> and composition.",
  "body": " Exploring and composition   Consider each of the following matrix products.   Use the Area Comparison Tool to find the of each of the matrices in each product. How does the of each of the constituent matrices relate to the of their product?  Summarize your observations.   "
},
{
  "id": "ex-emd_to_det",
  "level": "2",
  "url": "chp9sec1.html#ex-emd_to_det",
  "type": "Example",
  "number": "8.1.11",
  "title": "Using an EMD to compute <span class=\"process-math\">\\(\\asf\\)<\/span>.",
  "body": " Using an EMD to compute   Let . I will walk through how we can use an EMD for together with the observations of this lesson, to compute .  1. Row reduction.   2. Record row operations with elementary matrices.   3. Socks and Shoes over.   4. Use of simple transformations and the product formula.    "
},
{
  "id": "chp9sec1subsec1-30",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-30",
  "type": "Activity",
  "number": "8.1.12",
  "title": "",
  "body": "  What is the of    "
},
{
  "id": "fig-bunit_square",
  "level": "2",
  "url": "chp9sec1.html#fig-bunit_square",
  "type": "Figure",
  "number": "8.1.13",
  "title": "",
  "body": "  The -unit square is the transformed standard unit square.  "
},
{
  "id": "chp9sec1subsec1-36",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-36",
  "type": "Proposition",
  "number": "8.1.14",
  "title": "Proposition (<span class=\"process-math\">\\(\\mathcal{B}\\)<\/span>-unit squares and <span class=\"process-math\">\\(\\asf\\)<\/span>).",
  "body": " Proposition ( -unit squares and )   If is a basis, and is the -unit square, then .   "
},
{
  "id": "ex-area_of_parallelogram",
  "level": "2",
  "url": "chp9sec1.html#ex-area_of_parallelogram",
  "type": "Example",
  "number": "8.1.15",
  "title": "Area of a Parallelogram.",
  "body": " Area of a Parallelogram   Let denote the parallelogram determined by vectors and . Then, using the computation in Example ,     "
},
{
  "id": "def-unit_cube",
  "level": "2",
  "url": "chp9sec1.html#def-unit_cube",
  "type": "Definition",
  "number": "8.1.16",
  "title": "Unit Cube in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Unit Cube in   The unit cube  is the parallelepiped determined by the vectors .   "
},
{
  "id": "fig-unitcube",
  "level": "2",
  "url": "chp9sec1.html#fig-unitcube",
  "type": "Figure",
  "number": "8.1.17",
  "title": "",
  "body": "  The unit cube in .  "
},
{
  "id": "def-volume",
  "level": "2",
  "url": "chp9sec1.html#def-volume",
  "type": "Definition",
  "number": "8.1.18",
  "title": "Volume in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Volume in   If is closed polygonal region in , its volume , denoted , is the number of disjoint copies of the unit cube needed to fill .   "
},
{
  "id": "def-vsf",
  "level": "2",
  "url": "chp9sec1.html#def-vsf",
  "type": "Definition",
  "number": "8.1.19",
  "title": "Volume Scaling Factor (vsf).",
  "body": " Volume Scaling Factor (vsf)   If is an matrix and is any closed polygonal region, then the volume scaling factor of is the constant value .   "
},
{
  "id": "chp9sec1subsec1-50",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-50",
  "type": "Proposition",
  "number": "8.1.20",
  "title": "Proposition (<span class=\"process-math\">\\(\\mathcal{B}\\)<\/span>-unit Cubes and <span class=\"process-math\">\\(\\vsf\\)<\/span>).",
  "body": " Proposition ( -unit Cubes and )   If is an ordered basis and the change of basis matrix from -coordinates to standard coordinates, then the volume of the -unit cube is .   "
},
{
  "id": "chp9sec1subsec1-51",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec1-51",
  "type": "Example",
  "number": "8.1.21",
  "title": "",
  "body": "  Consider the parallelepiped in determined by basis where   You may play with at GeoGebra ID: vrmtn26v .  Then .  We see has an EMD:      Using the product formula: . We deduce the parallelepiped has volume 6! Without , how else could you have computed that?!   "
},
{
  "id": "chp9sec1subsec2-3",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec2-3",
  "type": "Definition",
  "number": "8.1.23",
  "title": "Orientation in the Plane.",
  "body": " Orientation in the Plane   If is simple loop in the plane, then its orientation is the direction it travels. The two options are counterclockwise and clockwise .   "
},
{
  "id": "fig-oriented-loop",
  "level": "2",
  "url": "chp9sec1.html#fig-oriented-loop",
  "type": "Figure",
  "number": "8.1.24",
  "title": "",
  "body": "  Simple loops with counterclockwise (left) and clockwise (right) orientations.  "
},
{
  "id": "chp9sec1subsec2-6",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive sign negative sign "
},
{
  "id": "geogebra_activity-sgn",
  "level": "2",
  "url": "chp9sec1.html#geogebra_activity-sgn",
  "type": "Activity",
  "number": "8.1.25",
  "title": "Visualizing and Exploring Orientation.",
  "body": " Visualizing and Exploring Orientation   Use your Orientation Comparison Tool to analyze the orientation of polygonal regions in the plane and discover how certain matrix transformations affect orientation. A pre-made version of the Orientation Comparison Tool can be found at GeoGebra ID: e69sjkrw .    Translations and Orientation   Click and drag . As you translate , how does its orientation change? How does the transformed orientation change? Perhaps your observations are unique to this specific matrix? Use sliders to change the entries of your matrix and try again. Summarize your observations.     Simple Transformations   How do you think each of the simple transformations: stretches, reflections, rotations, projections, and shears will affect orientation? For example,   After writing down your expectations, use the Orientation Comparison Tool to check. Summarize your findings.     Compositions   Consider each of the following matrix products.   How does the of each of the constituent matrices relate to the of their product? Summarize your observations.    "
},
{
  "id": "chp9sec1subsec2-12",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product formula "
},
{
  "id": "ex-emd_to_sgn",
  "level": "2",
  "url": "chp9sec1.html#ex-emd_to_sgn",
  "type": "Example",
  "number": "8.1.26",
  "title": "Using an EMD to compute <span class=\"process-math\">\\(\\sgn\\)<\/span>.",
  "body": " Using an EMD to compute   If , then in we computed   so    "
},
{
  "id": "chp9sec1subsec2-15",
  "level": "2",
  "url": "chp9sec1.html#chp9sec1subsec2-15",
  "type": "Activity",
  "number": "8.1.27",
  "title": "",
  "body": "  What is the sign of    "
},
{
  "id": "def-sign",
  "level": "2",
  "url": "chp9sec1.html#def-sign",
  "type": "Definition",
  "number": "8.1.28",
  "title": "Sign.",
  "body": " Sign   If is an invertible matrix and is the number of times a reflection appears in an elementary matrix decomposition of , then its sign is .   "
},
{
  "id": "def-det",
  "level": "2",
  "url": "chp9sec1.html#def-det",
  "type": "Definition",
  "number": "8.1.29",
  "title": "Determinant.",
  "body": " Determinant   The signed volume scaling factor of is the product of its sign and volume scaling factor. This number is also called the determinant of ,    "
},
{
  "id": "notation-det",
  "level": "2",
  "url": "chp9sec1.html#notation-det",
  "type": "Remark",
  "number": "8.1.30",
  "title": "Different Notations For Determinant.",
  "body": " Different Notations For Determinant  Recall in Notation that I represent matrices in three different ways: name, columns, and entries. Depending on the relevant representation of the matrix, I represent its determinant differently.      Name: When working with a matrix name, I usually use det.      Column: When working with the columns of , namely, , I will sometimes write the determinant of in terms of its columns as . In this way, the determinant can then be viewed as a rule on columns, which turns out to be a productive perspective when working in multilinear algebra.     Entries: When I work with matrix entries , I often use vertical bars.     For example, if , then the three representations of the determinant are:   "
},
{
  "id": "chp9sec2",
  "level": "1",
  "url": "chp9sec2.html",
  "type": "Lesson",
  "number": "8.2",
  "title": "Algebraic Properties of the Determinant",
  "body": " Algebraic Properties of the Determinant  We conceptualize the determinant as originating as a geometric object, measuring geometric properties of transformations. However, from this conceptualization emerges numerous valuable algebraic properties. In this lesson we will develop some of these algebraic properties.  From observations in the previous sections on and , we get the following two propositions.   Elementary Matrix Rules   If is an elementary matrix, then      Observe that the determinant of an elementary matrix is never zero.   Since both and satisfy the product formula, so does !   Product Formula   If and are matrices, then     Taking and as our core determinant properties, we may both rigorously deduce all other algebraic properties of the determinant and compute determinants.    Compute the determinant of the following matrix:   Use your result to describe how it transforms regions in .    More generally, we have the following strategy for computing determinants using elementary matrix decompositions.   Reading from an EMD   If is an matrix with elementary matrix decomposition , with many type 1 elementary matrices, and many type 2 elementary matrices with scaling factors , then     If , then , and hence , is a projection, so has volume scaling factor 0. If , then is a product of elementary matrices. The computation follows from putting together and .     is useful for computing the determinant of any matrix. In the next section, I will discuss other strategies for computation.   Determinant of Triangular Matrices   If is a lower (or upper) triangular matrix with diagonal entries , then .    The details of this proof I leave as a homework assignment. I will give a few hints.  First, show that if none of the 's are , then there exists a sequence of type 3 row operations reducing to the diagonal matrix with diagonal entries .  Second, if one of the 's is , then . Among other results, you may find , , as well as the big ideas of , useful.    Conceptually, the only class of matrix transformation not invertible are projections, which happen to smash volumes to zero. It turns out that the determinant is a useful criteria to distinguish projections from the invertible transformations.   The Determinant and Invertibility   If is an matrix, then the following two statements are equivalent:     To show equivalence, I need to show each implies the other.  To begin, write where are elementary matrices. Since elementary matrices have nonzero determinant ( ), the product formula ( ) and the fact that the product of nonzero real numbers is nonzero implies that is a nonzero number. Hence the product formula implies .  If is invertible, then (Algorithm ) and we deduce .  If is not invertible, then is a projection, hence . Since a statement is logically equivalent to its contrapositive, we deduce that if , then is invertible.     is an important computational check that is added to The List .  We now discuss two useful algebraic properties of the determinant. They both have clear geometric interpretations and can be rigorously proven from above known propositions. Make sure you understand both!    Give a geometric explanation as to why and have reciprocal determinants.    If a matrix transformation is invertible, then whatever does to volumes and sign, its inverse should undo it.   Determinant of the Inverse   If is invertible, then .    Since is invertible, it has an inverse which satisfies the equation (Definition ). Using the Product Formula ( ),   Then solve for .     Determinant of the Transpose   If is square, then .    I will prove this assuming has an -decomposition (which will generically be the case). I will leave the case in which it does not to you. Write . Using the Sock and Shoes property of transpose (Proposition ), . Observe that the transpose of a lower (resp. upper) triangular matrix is an upper (resp. lower) triangular matrix. Furthermore, the diagonals of a triangular matrix and its transpose are the same. Using , and . Using the Product Formula and putting this all together:       Revisit Example and give a geometric explanation as to why and have the same determinant.    Fixing a matrix , it does not matter which region of you are looking at, be it the unit square, a -unit square, or something else, the volume scaling factor, sign, and hence determinant are all the same.   Determinants of Similar Matrices   If is a basis and , then .    Using the Product Formula and Proposition :     "
},
{
  "id": "prop-elementarydet",
  "level": "2",
  "url": "chp9sec2.html#prop-elementarydet",
  "type": "Proposition",
  "number": "8.2.1",
  "title": "Elementary Matrix Rules.",
  "body": " Elementary Matrix Rules   If is an elementary matrix, then    "
},
{
  "id": "chp9sec2-5",
  "level": "2",
  "url": "chp9sec2.html#chp9sec2-5",
  "type": "Remark",
  "number": "8.2.2",
  "title": "",
  "body": " Observe that the determinant of an elementary matrix is never zero.  "
},
{
  "id": "thm-detproductformula",
  "level": "2",
  "url": "chp9sec2.html#thm-detproductformula",
  "type": "Proposition",
  "number": "8.2.3",
  "title": "Product Formula.",
  "body": " Product Formula   If and are matrices, then    "
},
{
  "id": "chp9sec2-9",
  "level": "2",
  "url": "chp9sec2.html#chp9sec2-9",
  "type": "Activity",
  "number": "8.2.4",
  "title": "",
  "body": "  Compute the determinant of the following matrix:   Use your result to describe how it transforms regions in .   "
},
{
  "id": "prop-det_compute_with_emd",
  "level": "2",
  "url": "chp9sec2.html#prop-det_compute_with_emd",
  "type": "Proposition",
  "number": "8.2.5",
  "title": "Reading <span class=\"process-math\">\\(\\det\\)<\/span> from an EMD.",
  "body": " Reading from an EMD   If is an matrix with elementary matrix decomposition , with many type 1 elementary matrices, and many type 2 elementary matrices with scaling factors , then     If , then , and hence , is a projection, so has volume scaling factor 0. If , then is a product of elementary matrices. The computation follows from putting together and .   "
},
{
  "id": "prop-triangulardet",
  "level": "2",
  "url": "chp9sec2.html#prop-triangulardet",
  "type": "Proposition",
  "number": "8.2.6",
  "title": "Determinant of Triangular Matrices.",
  "body": " Determinant of Triangular Matrices   If is a lower (or upper) triangular matrix with diagonal entries , then .    The details of this proof I leave as a homework assignment. I will give a few hints.  First, show that if none of the 's are , then there exists a sequence of type 3 row operations reducing to the diagonal matrix with diagonal entries .  Second, if one of the 's is , then . Among other results, you may find , , as well as the big ideas of , useful.   "
},
{
  "id": "prop-det_list",
  "level": "2",
  "url": "chp9sec2.html#prop-det_list",
  "type": "Proposition",
  "number": "8.2.7",
  "title": "The Determinant and Invertibility.",
  "body": " The Determinant and Invertibility   If is an matrix, then the following two statements are equivalent:     To show equivalence, I need to show each implies the other.  To begin, write where are elementary matrices. Since elementary matrices have nonzero determinant ( ), the product formula ( ) and the fact that the product of nonzero real numbers is nonzero implies that is a nonzero number. Hence the product formula implies .  If is invertible, then (Algorithm ) and we deduce .  If is not invertible, then is a projection, hence . Since a statement is logically equivalent to its contrapositive, we deduce that if , then is invertible.   "
},
{
  "id": "chp9sec2-18",
  "level": "2",
  "url": "chp9sec2.html#chp9sec2-18",
  "type": "Activity",
  "number": "8.2.8",
  "title": "",
  "body": "  Give a geometric explanation as to why and have reciprocal determinants.   "
},
{
  "id": "prop-det_inverse",
  "level": "2",
  "url": "chp9sec2.html#prop-det_inverse",
  "type": "Proposition",
  "number": "8.2.9",
  "title": "Determinant of the Inverse.",
  "body": " Determinant of the Inverse   If is invertible, then .    Since is invertible, it has an inverse which satisfies the equation (Definition ). Using the Product Formula ( ),   Then solve for .   "
},
{
  "id": "prop-det_transpose",
  "level": "2",
  "url": "chp9sec2.html#prop-det_transpose",
  "type": "Proposition",
  "number": "8.2.10",
  "title": "Determinant of the Transpose.",
  "body": " Determinant of the Transpose   If is square, then .    I will prove this assuming has an -decomposition (which will generically be the case). I will leave the case in which it does not to you. Write . Using the Sock and Shoes property of transpose (Proposition ), . Observe that the transpose of a lower (resp. upper) triangular matrix is an upper (resp. lower) triangular matrix. Furthermore, the diagonals of a triangular matrix and its transpose are the same. Using , and . Using the Product Formula and putting this all together:    "
},
{
  "id": "chp9sec2-22",
  "level": "2",
  "url": "chp9sec2.html#chp9sec2-22",
  "type": "Activity",
  "number": "8.2.11",
  "title": "",
  "body": "  Revisit Example and give a geometric explanation as to why and have the same determinant.   "
},
{
  "id": "prop-det_smd",
  "level": "2",
  "url": "chp9sec2.html#prop-det_smd",
  "type": "Proposition",
  "number": "8.2.12",
  "title": "Determinants of Similar Matrices.",
  "body": " Determinants of Similar Matrices   If is a basis and , then .    Using the Product Formula and Proposition :    "
},
{
  "id": "chp9sec3",
  "level": "1",
  "url": "chp9sec3.html",
  "type": "Lesson",
  "number": "8.3",
  "title": "Strategies for Computing the Determinant",
  "body": " Strategies for Computing the Determinant  There are many ways to compute the determinant, all of which are equivalent. In this lesson, I go over a few different strategies for computing the determinant. Depending on the situation, some are more advantageous than others.  The primary method that I recommend for computing the determinant is to use -decompositions. By we can easily compute the determinants of and . By the determinant product formula, , we get . Furthermore, when has 1's along the diagonal (as is the case when we use the Doolittle Algorithm), then where are the diagonal entries of . If does not have an -decomposition, it still has a -decomposition, where the just introduces additional reflections, and hence the general formula is:   -Equation for the Determinant   If is an matrix with -decomposition coming from the Doolittle Algorithm, then      Using the -Equation   If , then using Type 3 row operations to clear down,   so gives     This -decomposition strategy can be used to derive the determinant formulas for and matrices. These formulas are well known and you are likely to see them in situations outside of this course. I will derive both now.   Determinant Formula    .     The proof follows from two cases: and . I will show the former and leave the latter for you to investigate. If , then   Then, using the Doolittle Algorithm, the associated -decomposition is then   Using Equation ,    A useful mnemonic to remember these two terms is to visualize this as adding the downward ( ) diagonal and subtracting the upward ( ) diagonal.     Determinant Formula    .     The proof follows from a few cases. I will assume and and leave the other cases for you to investigate. If , then   Observe that the bottom right term can be algebraically simplified:   Then, using the Doolittle Algorithm, the associated -decomposition is then   Using Equation ,    A useful mnemonic to remember these six terms is the Rule of Sarrus , which visualizes this as adding the following three downward ( ) diagonals and subtracting the following three upward ( ) diagonals.    There are no similar determinant formulas for matrices with . However, there is another well-known strategy for computing determinants, which is a recursive process known as cofactor expansion . Even though I do not recommend cofactor expansion in general, I include it here as you are likely to see it outside of this course and I want to make sure you are prepared accordingly.   Cofactor   If is an matrix and , then let denote the matrix obtained by removing the row and column of . The number the  cofactor of .      If , then and its cofactor is .     Cofactor Expansion   If is an matrix, then   We call this the cofactor expansion of along the row of .     Sketch of Proof of Proposition  This proof is technical and I will leave some details to the reader. Furthermore, I will only show the cofactor expansion for the first row, as other rows can be obtained by a row permutation. Write and let denote the list-length vector of entries through of . We know that Type 3 column operations, clearing right, do not affect the determinant. Then using column notation,   Using the additive and alternating properties of the determinant (see Problem and Problem ), it can be shown that this last expression reduces to the cofactor expansion .    Using Cofactor Expansion   If , then the cofactor expansion of along the first row of is:     Cofactor expansion is nice in that it recursive, and hence may be easily coded. It is conceptually nice in that it reduces a big computation into many smaller ones. One can easily use this procedure to compute determinants by hand for small , and the checkerboard pattern of is useful for correctly working out the signs. This is the method often taught in multivariable calculus, in particular for computing cross products.  In fact, cofactor expansion is often given as the definition of the determinant. That being said, this method has multiple deficiencies:    the connection between this method and the geometric intuition for the determinant is not easy to see.    For large , our Doolittle Algorithm (and variants) are far more efficient than cofactor expansion. The Doolittle Algorithm takes roughly many algebraic operations, whereas cofactor expansion take roughly many algebraic operations.    You should be able to compute by hand determinants for all , , and some particularly simple larger matrices. You should know hot to use technology to compute determinants too, both the double check your computations and to compute the determinants for larger matrices. GeoGebra will compute the determinant of a matrix using the Determinant command.    Compute the determinant for each of the following matrices. Try using both the -equation and cofactor expansion. Compare and contrast the two methods. Then double check your computations with GeoGebra.      Problems    Let .   Find an elementary matrix decomposition of .  Use this decomposition to find the area scaling factor of .  Use this decomposition to find the sign of .  Deduce .       Consider the matrix .   Find an -decomposition of . Do this by hand.  Using your decomposition, compute .       Let be an matrix and be a similar matrix decomposition.   In complete sentences, using geometric words, what is the geometric MEANING of the fact that , in the context of coordinates?   Rigorously algebraically prove . Clearly state each definition and algebraic property of sign and volume scaling factor you use. Be careful to present your arguments in complete sentences and with a clear logical progression.        Suppose you have the following three matrices , , and with the given decompositions (elementary, , and similar, respectively). For each,   Use the decomposition to compute the determinant of the given matrix by hand with minimal computations.  Explain: what you are looking at to minimize your computations (and what can you ignore)?  Reflect upon how matrix decompositions can be used to make the problem of computing determinant simple.                        If is a square matrix, show that . (Hint: You might find it useful to use the Sock and Shoes property of transpose (Proposition ) and an appropriately chosen matrix decomposition.)      If is a square matrix with orthonormal columns, show that .      If and , give a geometric proof of the following scaling property of the determinant: .      If is a basis and , give an algebraic proof of the following scaling property of the determinant:       If , give a geometric proof of the following skew-symmetric property of the determinant: .      If , give an algebraic proof of the following skew-symmetric property of the determinant:       If , give an algebraic proof of the following alternating property of the determinant:       If , give a geometric proof of the following additive property of the determinant: .      If is a basis and , give an algebraic proof of the following additive property of the determinant:      "
},
{
  "id": "prop-det_plu",
  "level": "2",
  "url": "chp9sec3.html#prop-det_plu",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "<span class=\"process-math\">\\(PLU\\)<\/span>-Equation for the Determinant.",
  "body": " -Equation for the Determinant   If is an matrix with -decomposition coming from the Doolittle Algorithm, then    "
},
{
  "id": "chp9sec3-5",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-5",
  "type": "Example",
  "number": "8.3.2",
  "title": "Using the <span class=\"process-math\">\\(PLU\\)<\/span>-Equation.",
  "body": " Using the -Equation   If , then using Type 3 row operations to clear down,   so gives    "
},
{
  "id": "prop-2x2det_formula",
  "level": "2",
  "url": "chp9sec3.html#prop-2x2det_formula",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "<span class=\"process-math\">\\(2\\times 2\\)<\/span> Determinant Formula.",
  "body": " Determinant Formula    .   "
},
{
  "id": "chp9sec3-8",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-8",
  "type": "Proof",
  "number": "8.3.1",
  "title": "",
  "body": " The proof follows from two cases: and . I will show the former and leave the latter for you to investigate. If , then   Then, using the Doolittle Algorithm, the associated -decomposition is then   Using Equation ,   "
},
{
  "id": "prop-3x3det_formula",
  "level": "2",
  "url": "chp9sec3.html#prop-3x3det_formula",
  "type": "Theorem",
  "number": "8.3.4",
  "title": "<span class=\"process-math\">\\(3\\times 3\\)<\/span> Determinant Formula.",
  "body": " Determinant Formula    .   "
},
{
  "id": "chp9sec3-12",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-12",
  "type": "Proof",
  "number": "8.3.2",
  "title": "",
  "body": " The proof follows from a few cases. I will assume and and leave the other cases for you to investigate. If , then   Observe that the bottom right term can be algebraically simplified:   Then, using the Doolittle Algorithm, the associated -decomposition is then   Using Equation ,   "
},
{
  "id": "def-cofactor",
  "level": "2",
  "url": "chp9sec3.html#def-cofactor",
  "type": "Definition",
  "number": "8.3.5",
  "title": "Cofactor.",
  "body": " Cofactor   If is an matrix and , then let denote the matrix obtained by removing the row and column of . The number the  cofactor of .   "
},
{
  "id": "chp9sec3-17",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-17",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": "  If , then and its cofactor is .   "
},
{
  "id": "prop-cofactor_expansion",
  "level": "2",
  "url": "chp9sec3.html#prop-cofactor_expansion",
  "type": "Theorem",
  "number": "8.3.7",
  "title": "Cofactor Expansion.",
  "body": " Cofactor Expansion   If is an matrix, then   We call this the cofactor expansion of along the row of .   "
},
{
  "id": "chp9sec3-19",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-19",
  "type": "Proof",
  "number": "8.3.3",
  "title": "Sketch of Proof of Proposition Theorem 8.3.7.",
  "body": " Sketch of Proof of Proposition  This proof is technical and I will leave some details to the reader. Furthermore, I will only show the cofactor expansion for the first row, as other rows can be obtained by a row permutation. Write and let denote the list-length vector of entries through of . We know that Type 3 column operations, clearing right, do not affect the determinant. Then using column notation,   Using the additive and alternating properties of the determinant (see Problem and Problem ), it can be shown that this last expression reduces to the cofactor expansion .  "
},
{
  "id": "chp9sec3-20",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-20",
  "type": "Example",
  "number": "8.3.8",
  "title": "Using Cofactor Expansion.",
  "body": " Using Cofactor Expansion   If , then the cofactor expansion of along the first row of is:    "
},
{
  "id": "chp9sec3-25",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-25",
  "type": "Activity",
  "number": "8.3.9",
  "title": "",
  "body": "  Compute the determinant for each of the following matrices. Try using both the -equation and cofactor expansion. Compare and contrast the two methods. Then double check your computations with GeoGebra.    "
},
{
  "id": "chp9sec3-26-2",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-2",
  "type": "Exercise",
  "number": "8.3.1",
  "title": "",
  "body": "  Let .   Find an elementary matrix decomposition of .  Use this decomposition to find the area scaling factor of .  Use this decomposition to find the sign of .  Deduce .    "
},
{
  "id": "chp9sec3-26-3",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-3",
  "type": "Exercise",
  "number": "8.3.2",
  "title": "",
  "body": "  Consider the matrix .   Find an -decomposition of . Do this by hand.  Using your decomposition, compute .    "
},
{
  "id": "chp9sec3-26-4",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-4",
  "type": "Exercise",
  "number": "8.3.3",
  "title": "",
  "body": "  Let be an matrix and be a similar matrix decomposition.   In complete sentences, using geometric words, what is the geometric MEANING of the fact that , in the context of coordinates?   Rigorously algebraically prove . Clearly state each definition and algebraic property of sign and volume scaling factor you use. Be careful to present your arguments in complete sentences and with a clear logical progression.     "
},
{
  "id": "chp9sec3-26-5",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-5",
  "type": "Exercise",
  "number": "8.3.4",
  "title": "",
  "body": "  Suppose you have the following three matrices , , and with the given decompositions (elementary, , and similar, respectively). For each,   Use the decomposition to compute the determinant of the given matrix by hand with minimal computations.  Explain: what you are looking at to minimize your computations (and what can you ignore)?  Reflect upon how matrix decompositions can be used to make the problem of computing determinant simple.                     "
},
{
  "id": "chp9sec3-26-6",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-6",
  "type": "Exercise",
  "number": "8.3.5",
  "title": "",
  "body": "  If is a square matrix, show that . (Hint: You might find it useful to use the Sock and Shoes property of transpose (Proposition ) and an appropriately chosen matrix decomposition.)   "
},
{
  "id": "chp9sec3-26-7",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-7",
  "type": "Exercise",
  "number": "8.3.6",
  "title": "",
  "body": "  If is a square matrix with orthonormal columns, show that .   "
},
{
  "id": "chp9sec3-26-8",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-8",
  "type": "Exercise",
  "number": "8.3.7",
  "title": "",
  "body": "  If and , give a geometric proof of the following scaling property of the determinant: .   "
},
{
  "id": "chp9sec3-26-9",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-9",
  "type": "Exercise",
  "number": "8.3.8",
  "title": "",
  "body": "  If is a basis and , give an algebraic proof of the following scaling property of the determinant:    "
},
{
  "id": "chp9sec3-26-10",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-10",
  "type": "Exercise",
  "number": "8.3.9",
  "title": "",
  "body": "  If , give a geometric proof of the following skew-symmetric property of the determinant: .   "
},
{
  "id": "chp9sec3-26-11",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-11",
  "type": "Exercise",
  "number": "8.3.10",
  "title": "",
  "body": "  If , give an algebraic proof of the following skew-symmetric property of the determinant:    "
},
{
  "id": "problem-det_alternating",
  "level": "2",
  "url": "chp9sec3.html#problem-det_alternating",
  "type": "Exercise",
  "number": "8.3.11",
  "title": "",
  "body": "  If , give an algebraic proof of the following alternating property of the determinant:    "
},
{
  "id": "chp9sec3-26-13",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-13",
  "type": "Exercise",
  "number": "8.3.12",
  "title": "",
  "body": "  If , give a geometric proof of the following additive property of the determinant: .   "
},
{
  "id": "chp9sec3-26-14",
  "level": "2",
  "url": "chp9sec3.html#chp9sec3-26-14",
  "type": "Exercise",
  "number": "8.3.13",
  "title": "",
  "body": "  If is a basis and , give an algebraic proof of the following additive property of the determinant:    "
},
{
  "id": "chp10sec1",
  "level": "1",
  "url": "chp10sec1.html",
  "type": "Lesson",
  "number": "9.1",
  "title": "Concepts of Invariant Lines",
  "body": " Concepts of Invariant Lines  Processes are everywhere. We want to develop a deep understanding of processes. Chaining together processes gave rise to the notion of composition . Reversing a process gave rise to the notion of inverses . Our next fundamental idea associated to a process is invariance .  The the core idea of invariance is that something does not change after having performed a process. Rotations in the plane do not change length. Length is an invariant of rotation. Shears in the plane do not change area. Area is an invariant of shears.  Recall that if is a line and is a matrix transformation, then is also a line ( ). We will now compare the lines and . Might there be some lines for which and are the same?   Invariant Lines   If is a matrix transformation with associated matrix , then a line through the origin (a.k.a. a 1-dimensional subspace) is -invariant (or -invariant ) if it is sent into itself under the transformation. Symbolically, . When is clear from context, we will usually drop reference to or and just say the line is invariant .    Write the line in parametric vector form ( ) for some nonzero vector . If is -invariant, then must send to some other point on the line, i.e. for some . It follows from the scaling property if matrix multiplication ( ),that then scales each point on the line by this same .   Associated Scaling Factor   If is a matrix transformation and is a -invariant line, then the value for which is the associated scaling factor .    Understanding -invariant lines and their associated scaling factors gives us an incredible about of information about .  Some questions to start our investigations:   How do we find invariant lines?  How many invariant lines does each elementary geometric matrix transformation have?  How does knowing invariant lines help us better understand the transformation?  How might matrix decompositions help us better understand invariant lines?  How might we generalize this?   What else might you wonder about invariant lines as it relates to linear algebra?  Let's set out to find these lines and scaling factors in the plane. We shall do this concretely, using GeoGebra to explore.    Finding and Analyzing Invariant Lines   In this activity, you will use The Invariant Line Finder Tool to find and analyze invariant lines and their associated scaling factors. You will discover how different matrices have different numbers of invariant lines. In certain situations, you will find similar matrix decompositions.   Start with .    Finding invariant lines and scaling factors.  Explore. Move your point and find all invariant lines. (Pro Tip: Try moving to grid points, where GeoGebra can lock in values.) For each invariant line, find the associated scaling factor. First, can you visually see the scaling factor? After approximating visually, you can compute the stretch factor exactly by analyzing the ratio of the length of to the length of . Does the scaling factor include a reflection? If you can find two distinct invariant lines, find a similar matrix decomposition for .    Varying the matrix - Part 1.  Consider our geometric transformations of the plane: uniform stretches, stretches, reflections, shears, rotations, and projections. How many distinct lines are invariant? What is the most (resp. least) number of lines that can be invariant?  For example, analyze each of the following:     Varying the matrix - Part 2.  Repeat your above analysis for each of the following matrices (i.e. find invariant lines, find scaling factors, and find similar matrix decomposition):   Explain how knowing the different number of invariant lines a matrix has tells you something about the nature of the associated transformation (e.g. stretch vs. shear vs rotation etc).      Upon reflecting on GeoGebra , you should make the following observations:   Observation 1: Different transformations have different numbers of invariant lines:   All lines are invariant under a uniform stretch.  Two lines are invariant under stretches and reflections.  One line is invariant under a shear.  No lines are invariant under rotations.    Observation 2: The invariant line(s) for the standard geometric transformation given by:   are the -axis and -axis,  is the -axis, and  is the -axis.    Observation 3: If you have enough invariant lines, you can build a similar matrix decomposition for your matrix!   Using SMD to find invariant Lines   If you have a nice similar matrix decomposition, you can quickly read off its invariant lines. For each of the following matrices, determine its invariant lines and associated scaling factors.      In fact, this is more generally true. Try to use to justify the following proposition.   Invariant Lines and SMDs   If is a basis, , is a diagonal matrix with diagonal entries , and , then for each , , the line is an -invariant line with scaling factor .     It suffices to show that .     Invariant Subspaces   If is a matrix transformation with associated matrix , then a subspace is -invariant (or -invariant ) if .    We may generalize to any -invariant subspace.   Invariant Subspaces and SMDs   If is an invariant subspace of and , then is an invariant subspace of .      Suppose that is an ordered basis. The matrix   We can see two invariant subspaces. The line is -invariant with scaling factor 2. The plane is invariant and acts upon it by a rotation of  towards .    "
},
{
  "id": "def-invariant_lines",
  "level": "2",
  "url": "chp10sec1.html#def-invariant_lines",
  "type": "Definition",
  "number": "9.1.1",
  "title": "Invariant Lines.",
  "body": " Invariant Lines   If is a matrix transformation with associated matrix , then a line through the origin (a.k.a. a 1-dimensional subspace) is -invariant (or -invariant ) if it is sent into itself under the transformation. Symbolically, . When is clear from context, we will usually drop reference to or and just say the line is invariant .   "
},
{
  "id": "def-associated_scaling_factor",
  "level": "2",
  "url": "chp10sec1.html#def-associated_scaling_factor",
  "type": "Definition",
  "number": "9.1.2",
  "title": "Associated Scaling Factor.",
  "body": " Associated Scaling Factor   If is a matrix transformation and is a -invariant line, then the value for which is the associated scaling factor .   "
},
{
  "id": "geogebra-invariant_lines",
  "level": "2",
  "url": "chp10sec1.html#geogebra-invariant_lines",
  "type": "Activity",
  "number": "9.1.3",
  "title": "Finding and Analyzing Invariant Lines.",
  "body": " Finding and Analyzing Invariant Lines   In this activity, you will use The Invariant Line Finder Tool to find and analyze invariant lines and their associated scaling factors. You will discover how different matrices have different numbers of invariant lines. In certain situations, you will find similar matrix decompositions.   Start with .    Finding invariant lines and scaling factors.  Explore. Move your point and find all invariant lines. (Pro Tip: Try moving to grid points, where GeoGebra can lock in values.) For each invariant line, find the associated scaling factor. First, can you visually see the scaling factor? After approximating visually, you can compute the stretch factor exactly by analyzing the ratio of the length of to the length of . Does the scaling factor include a reflection? If you can find two distinct invariant lines, find a similar matrix decomposition for .    Varying the matrix - Part 1.  Consider our geometric transformations of the plane: uniform stretches, stretches, reflections, shears, rotations, and projections. How many distinct lines are invariant? What is the most (resp. least) number of lines that can be invariant?  For example, analyze each of the following:     Varying the matrix - Part 2.  Repeat your above analysis for each of the following matrices (i.e. find invariant lines, find scaling factors, and find similar matrix decomposition):   Explain how knowing the different number of invariant lines a matrix has tells you something about the nature of the associated transformation (e.g. stretch vs. shear vs rotation etc).     "
},
{
  "id": "chp10sec1-20",
  "level": "2",
  "url": "chp10sec1.html#chp10sec1-20",
  "type": "Activity",
  "number": "9.1.4",
  "title": "Using SMD to find invariant Lines.",
  "body": " Using SMD to find invariant Lines   If you have a nice similar matrix decomposition, you can quickly read off its invariant lines. For each of the following matrices, determine its invariant lines and associated scaling factors.     "
},
{
  "id": "prop-invariant_lines_smd",
  "level": "2",
  "url": "chp10sec1.html#prop-invariant_lines_smd",
  "type": "Proposition",
  "number": "9.1.5",
  "title": "Invariant Lines and SMDs.",
  "body": " Invariant Lines and SMDs   If is a basis, , is a diagonal matrix with diagonal entries , and , then for each , , the line is an -invariant line with scaling factor .   "
},
{
  "id": "chp10sec1-23",
  "level": "2",
  "url": "chp10sec1.html#chp10sec1-23",
  "type": "Proof",
  "number": "9.1.1",
  "title": "",
  "body": " It suffices to show that .   "
},
{
  "id": "def-invariant_subspace",
  "level": "2",
  "url": "chp10sec1.html#def-invariant_subspace",
  "type": "Definition",
  "number": "9.1.6",
  "title": "Invariant Subspaces.",
  "body": " Invariant Subspaces   If is a matrix transformation with associated matrix , then a subspace is -invariant (or -invariant ) if .   "
},
{
  "id": "prop-invariant_subspaces_smd",
  "level": "2",
  "url": "chp10sec1.html#prop-invariant_subspaces_smd",
  "type": "Proposition",
  "number": "9.1.7",
  "title": "Invariant Subspaces and SMDs.",
  "body": " Invariant Subspaces and SMDs   If is an invariant subspace of and , then is an invariant subspace of .   "
},
{
  "id": "chp10sec1-27",
  "level": "2",
  "url": "chp10sec1.html#chp10sec1-27",
  "type": "Example",
  "number": "9.1.8",
  "title": "",
  "body": "  Suppose that is an ordered basis. The matrix   We can see two invariant subspaces. The line is -invariant with scaling factor 2. The plane is invariant and acts upon it by a rotation of  towards .   "
},
{
  "id": "chp10sec2",
  "level": "1",
  "url": "chp10sec2.html",
  "type": "Lesson",
  "number": "9.2",
  "title": "Algebraically Finding Invariant Lines",
  "body": " Algebraically Finding Invariant Lines  Now that we have a clear visual picture for finding invariant lines and their scaling factors, let's try to do the same thing algebraically. If , then a nonzero vector on a -invariant line satisfies:   Performing algebraic operations to gives the equivalent matrix equation   Therefore, finding -invariant lines can be reframed as finding non-zero null spaces. It turns out, for almost all , is the zero subspace. We need to go on a hunt for scaling factors for which  not the zero subspace. For to be nonzero, the transformation associated to the matrix must be a projection !  We know that projections smash volumes and have a volume scaling factor of zero. Hence, for to be a projection, it must be the case that . When is a small matrix (e.g. where ), then can be (relatively) easily computed, and we can see it is a polynomial in whose zeros we can find. Once we find those 's, we can compute the nonzero nullspaces.  Let's see those ideas in action.    Let . Using the Invariant Line tool, we can quickly find its invariant lines and their associated scaling factors. Let's now try this algebraically.   Step 1. Find the polynomial    Step 2. The possible scaling factors are the roots of , namely .   Step 3. For each scaling factor, we find the associated invariant line.   The invariant line with scaling factor 2 is    The invariant line with scaling factor 3 is .  Observe is a nice choice for a nonzero vector on and is a nice choice for a nonzero vector on . The basis is a good basis for understanding , namely, stretched the -direction by a factor of and stretches the -direction by a factor of 3. This gives us a nice similar matrix decomposition where is similar to a diagonal matrix: (cf. ).    So we have the Algebraic Strategy for finding invariant lines and their scaling factors:   Compute . This is a degree polynomial in .  Find all roots of . These are the possible scaling factors.  For each scaling factor , find the invariant subspace .   Now let's introduce the official terminology for these concepts.   The Eigentheory Dictionary   Let be an matrix.   is the characteristic polynomial of .  A root of the characteristic polynomial is an eigenvalue of .  For each eigenvalue , is its associated eigenspace .  Nonzero vectors in are eigenvectors associated to .  A collection of linearly independent eigenvectors is an eigenbasis .  The similar matrix decomposition associated to is a diagonalization of .     Note that there is no guarantee that a given matrix should have enough linearly independent eigenvectors to form an eigenbasis. Go back to and make sure you can use proper eigensutff terminology to describe everything.   Different Eigenvalues Implies Independence   If is an matrix with distinct eigenvalues and associated eigenvectors , then the vectors are linearly independent.     This is a homework assignment. To determine independence, you will need to analyze the mixture and determine that the only possible collection of scalars are all zeros ( ). Consider an inductive argument, by which I mean, prove (a) when and then prove (b) if this is true for , then it is true for . You might find it useful that in all such cases, there will be at let one nonzero eigenvalue.     Let . Use algebraic techniques to find a diagonalization. In complete sentences and using geometric words, describe how transforms the plane. Then verify visually with your invariant line tool.      Let . Use algebraic techniques to try to find a diagonalization. Why does this fail? Verify visually with your invariant line tool. What type of transformation is this? How can we find a basis to see this?    "
},
{
  "id": "example_eigenstuff1",
  "level": "2",
  "url": "chp10sec2.html#example_eigenstuff1",
  "type": "Example",
  "number": "9.2.1",
  "title": "",
  "body": "  Let . Using the Invariant Line tool, we can quickly find its invariant lines and their associated scaling factors. Let's now try this algebraically.   Step 1. Find the polynomial    Step 2. The possible scaling factors are the roots of , namely .   Step 3. For each scaling factor, we find the associated invariant line.   The invariant line with scaling factor 2 is    The invariant line with scaling factor 3 is .  Observe is a nice choice for a nonzero vector on and is a nice choice for a nonzero vector on . The basis is a good basis for understanding , namely, stretched the -direction by a factor of and stretches the -direction by a factor of 3. This gives us a nice similar matrix decomposition where is similar to a diagonal matrix: (cf. ).   "
},
{
  "id": "def-eigen_dictionary",
  "level": "2",
  "url": "chp10sec2.html#def-eigen_dictionary",
  "type": "Definition",
  "number": "9.2.2",
  "title": "The Eigentheory Dictionary.",
  "body": " The Eigentheory Dictionary   Let be an matrix.   is the characteristic polynomial of .  A root of the characteristic polynomial is an eigenvalue of .  For each eigenvalue , is its associated eigenspace .  Nonzero vectors in are eigenvectors associated to .  A collection of linearly independent eigenvectors is an eigenbasis .  The similar matrix decomposition associated to is a diagonalization of .    "
},
{
  "id": "chp10sec2-15",
  "level": "2",
  "url": "chp10sec2.html#chp10sec2-15",
  "type": "Proposition",
  "number": "9.2.3",
  "title": "Different Eigenvalues Implies Independence.",
  "body": " Different Eigenvalues Implies Independence   If is an matrix with distinct eigenvalues and associated eigenvectors , then the vectors are linearly independent.   "
},
{
  "id": "chp10sec2-16",
  "level": "2",
  "url": "chp10sec2.html#chp10sec2-16",
  "type": "Proof",
  "number": "9.2.1",
  "title": "",
  "body": " This is a homework assignment. To determine independence, you will need to analyze the mixture and determine that the only possible collection of scalars are all zeros ( ). Consider an inductive argument, by which I mean, prove (a) when and then prove (b) if this is true for , then it is true for . You might find it useful that in all such cases, there will be at let one nonzero eigenvalue.  "
},
{
  "id": "chp10sec2-17",
  "level": "2",
  "url": "chp10sec2.html#chp10sec2-17",
  "type": "Activity",
  "number": "9.2.4",
  "title": "",
  "body": "  Let . Use algebraic techniques to find a diagonalization. In complete sentences and using geometric words, describe how transforms the plane. Then verify visually with your invariant line tool.   "
},
{
  "id": "chp10sec2-18",
  "level": "2",
  "url": "chp10sec2.html#chp10sec2-18",
  "type": "Activity",
  "number": "9.2.5",
  "title": "",
  "body": "  Let . Use algebraic techniques to try to find a diagonalization. Why does this fail? Verify visually with your invariant line tool. What type of transformation is this? How can we find a basis to see this?   "
},
{
  "id": "chp10sec3",
  "level": "1",
  "url": "chp10sec3.html",
  "type": "Lesson",
  "number": "9.3",
  "title": "Iteratively Finding Invariant Lines",
  "body": " Iteratively Finding Invariant Lines  If we repeat the process, what, if any, configurations does the system tend toward? This idea is fundamental to understanding such real world processes as equilibria in mixing populations, Google PageRank, and image compression. The way to find stable configurations associated to matrix multiplication is given by eigentheory .  Given a process, you should expect that generically, configurations are not invariant, but rather are moved around. Lines will be sent to different lines.   Iterates   Given a matrix transformation , , a line through the origin, , and a positive integer , the  iterate under is the line .      A line and its iterates.   Some questions to start your investigations:    What does it mean for lines to ``converge'' to another line?  Does there always exist lines to which other lines converge under iteration?  Do certain matrices behave better under iteration?  If a line of convergence exists, can you find it exactly? Approximately?  How can this help you compute eigenvectors and eigenvalues?    An important class of matrices in the study of iterations is positive proximal matrices.   Proximal Matrices   If is with eigenvalues , for which is a positive real number and for all , then is a positive proximal matrix and is its dominant eigenvalue. The associated eigenspace is the dominant eigenspace and its nonzero vectors are dominant eigenvectors .    Observe that, when is positive proximal, with each iterate of , it pulls vectors more and more in the direction of the dominant eigenspace.   Approximating Lines of Convergence   The goal of this activity is to see how iterates of a positive proximal matrix applied to a generic line numerically approximate the invariant line of it dominant eigenvalue.    Creating your matrix, line, and iterates.  Input a matrix with slider entries, and for the moment, slide the entries so your matrix is . Create a slider ranging between -40 and 40 with interval 1. Set to 1. Create the point and another moveable point . Create the line between and . I will denote this line . ApplyMatrix to . It will probably be called . I will denote this line .    Exploring lines of convergence.  Move the slider from 1 to 40 and analyze the movement of the line . What line does it appear that the iterates converges too? Move around the point . How does moving affect the line to which appears to converge to? What is the meaning of moving the slider from to ? What line does seem to converge to?    Approximating the dominant eigenvalue.  ApplyMatrix to . This point is probably called . Observe that while lies on , it quickly gets very large and leaves the screen. We need to scale it to a reasonable size in a consistent way. Let's agree to always divide by the maximum entry . Now ApplyMatrix to . This point is probably called . Observe that by construction, lies on . As you vary , does ever lie on ? Can you use and to find exactly? Approximately? Explain.    Comparing and Contrasting.  Compare and contrast this activity with GeoGebra . How do invariant lines compare with lines of convergence? Do they work in all the same situations, or is one more general than the other? Which of these types of processes do you think computers are more easily capable of performing?    Varying the matrix.  Repeat your above analysis for each of the following matrices:       Play with iterates of lines to approximate invariant lines at GeoGebra ID: sek7epvq . Only go to this link after you have done the above activity.   Attracting and Repelling Lines   If is an invertible positive proximal matrix, then its line of convergence is its attracting line , and the line of convergence of is its repelling line .      Consider the matrix . It has an attracting line of and repelling line . Below is depicted a starting vector as well as the scaled (by maximal entry) vectors for its first 10 iterates.       You should observe that matrix in is diagonalizable with diagonalization   and that the attracting line and repelling lines are precisely the invariant lines for the matrix. Even though both invariant lines have positive real eigenvalues, with each iterate, points are pulled more in the direction of the greatest eigenvalue, hence becoming the attracting line.  For the exact same reasons, this is true more generally.   Convergence of Iterated Lines   If is an positive proximal matrix and is the eigenspace associated to the dominant eigenvalue, then generically, the iterates of all other lines converge to .    While we are not currently prepared to prove this, we will have the tools to do so after introducing inner products in the next section. The proof rest upon understanding length, angle, the situation for a diagonal matrix, and similar matrix decompositions.  In the meanwhile, if is a positive proximal matrix, then we have the following Iterative Strategy for numerically approximating the dominant eigenvalue and its associated invariant line. This Iterative Strategy is made for computers, and is perfectly suited for Computer Algebra Systems (e.g. CAS on GeoGebra) or programming (e.g. Sage).   Pick a certain number of decimal places of accuracy you want, say places.  Input a test vector .  ApplyMatrix to where are positive integers that you can increase (e.g. via a slider or a loop)  Scale in some reasonable way so that its entries do not get out of control. One reasonable way to scale is to divide by the maximum entry of (Another reasonable way it to divide each vector by its length so that each vector is length 1. Wait until we go over length in the next section before implementing this way.)  Allow your CAS to numerically approximate these vectors to over places of accuracy. Keep increasing until you reach the point that the first many decimals are no longer changing with successive increases in . Denote this . This is your numerical approximation of a dominant eigenvector.  To be extra safe, repeat this process with a couple more test vectors, just in case in the incredibly unlikely chance your original test vector was actually within the eigenspace of another eigenvalue. If all the vectors you get are the same, then you can say with confidence you are correct to decimal places of accuracy.  Pick the first nonzero entry of (usually the first entry). The ratio of that entry in to the entry in is the approximation of your dominant eigenvalue.   Play the Iterative Method at GeoGebra ID: gejqjgte . Only go to this link after you have done the above activity.  There are many theorems that guarantee that certain matrices are positive proximal, and hence this iterative strategy is applicable. See, for example, applications to Graphs and Ranking in . For a variety of reasons, the Iterative Method (and its variants), not the Algebraic Method, are predominantly used in industry. Google makes heavy use of these methods.  "
},
{
  "id": "def-iterates",
  "level": "2",
  "url": "chp10sec3.html#def-iterates",
  "type": "Definition",
  "number": "9.3.1",
  "title": "Iterates.",
  "body": " Iterates   Given a matrix transformation , , a line through the origin, , and a positive integer , the  iterate under is the line .   "
},
{
  "id": "chp10sec3-5",
  "level": "2",
  "url": "chp10sec3.html#chp10sec3-5",
  "type": "Figure",
  "number": "9.3.2",
  "title": "",
  "body": "  A line and its iterates.  "
},
{
  "id": "chp10sec3-9",
  "level": "2",
  "url": "chp10sec3.html#chp10sec3-9",
  "type": "Definition",
  "number": "9.3.3",
  "title": "Proximal Matrices.",
  "body": " Proximal Matrices   If is with eigenvalues , for which is a positive real number and for all , then is a positive proximal matrix and is its dominant eigenvalue. The associated eigenspace is the dominant eigenspace and its nonzero vectors are dominant eigenvectors .   "
},
{
  "id": "geogebra-iterates_lines",
  "level": "2",
  "url": "chp10sec3.html#geogebra-iterates_lines",
  "type": "Activity",
  "number": "9.3.4",
  "title": "Approximating Lines of Convergence.",
  "body": " Approximating Lines of Convergence   The goal of this activity is to see how iterates of a positive proximal matrix applied to a generic line numerically approximate the invariant line of it dominant eigenvalue.    Creating your matrix, line, and iterates.  Input a matrix with slider entries, and for the moment, slide the entries so your matrix is . Create a slider ranging between -40 and 40 with interval 1. Set to 1. Create the point and another moveable point . Create the line between and . I will denote this line . ApplyMatrix to . It will probably be called . I will denote this line .    Exploring lines of convergence.  Move the slider from 1 to 40 and analyze the movement of the line . What line does it appear that the iterates converges too? Move around the point . How does moving affect the line to which appears to converge to? What is the meaning of moving the slider from to ? What line does seem to converge to?    Approximating the dominant eigenvalue.  ApplyMatrix to . This point is probably called . Observe that while lies on , it quickly gets very large and leaves the screen. We need to scale it to a reasonable size in a consistent way. Let's agree to always divide by the maximum entry . Now ApplyMatrix to . This point is probably called . Observe that by construction, lies on . As you vary , does ever lie on ? Can you use and to find exactly? Approximately? Explain.    Comparing and Contrasting.  Compare and contrast this activity with GeoGebra . How do invariant lines compare with lines of convergence? Do they work in all the same situations, or is one more general than the other? Which of these types of processes do you think computers are more easily capable of performing?    Varying the matrix.  Repeat your above analysis for each of the following matrices:      "
},
{
  "id": "def-attracting_lines",
  "level": "2",
  "url": "chp10sec3.html#def-attracting_lines",
  "type": "Definition",
  "number": "9.3.5",
  "title": "Attracting and Repelling Lines.",
  "body": " Attracting and Repelling Lines   If is an invertible positive proximal matrix, then its line of convergence is its attracting line , and the line of convergence of is its repelling line .   "
},
{
  "id": "ex-attractingline",
  "level": "2",
  "url": "chp10sec3.html#ex-attractingline",
  "type": "Example",
  "number": "9.3.6",
  "title": "",
  "body": "  Consider the matrix . It has an attracting line of and repelling line . Below is depicted a starting vector as well as the scaled (by maximal entry) vectors for its first 10 iterates.      "
},
{
  "id": "thm-attractingareinvariant",
  "level": "2",
  "url": "chp10sec3.html#thm-attractingareinvariant",
  "type": "Theorem",
  "number": "9.3.8",
  "title": "Convergence of Iterated Lines.",
  "body": " Convergence of Iterated Lines   If is an positive proximal matrix and is the eigenspace associated to the dominant eigenvalue, then generically, the iterates of all other lines converge to .   "
},
{
  "id": "chp10sec4",
  "level": "1",
  "url": "chp10sec4.html",
  "type": "Lesson",
  "number": "9.4",
  "title": "Classification in the Plane",
  "body": " Classification in the Plane  In this lesson, our goal is to completely understand the situation for matrices. As we shall see, our analysis boils down to whether we can find 2, 1, or 0 linearly independent eigenvectors. To understand eigenvectors, we first understand eigenvalues, and to understand eigenvalues, we first study the characteristic polynomial.  I now introduce\/remind you of a few important terms.   Eigentheory Dictionary   If , then:   The determinant of is .  The trace of is , i.e. the sum of the diagonal entries.  The discriminant of is .  The characteristic polynomial of is .     It is a straight forward activity to verify the following computational shortcuts.   Characteristic Polynomial Formula   If is , then      Proof Hint. Homework. You might find and useful.     If is a matrix and      Applying the quadratic formula to the Characteristic Polynomial Formula gives that the roots of are    We now are prepared to consider the three possible cases.  Case 1: Eigenbasis and Diagonalization.  Suppose has two linearly independent (real) eigenvectors , corresponding to eigenvalues . This is the best of all possible situations and is the simplest to deal with. This occurs when either or when and is a scalar matrix (in which case uniformly stretches the plane by a factor of ). In this case, we say is an eigenbasis for and admits a diagonalization  where and .   Eigenbasis Summary   Discriminant:  or and is a scalar matrix,  Eigenvalues: 2 distinct real eigenvalues , or is scalar.  Basis : Two linearly independent eigenvectors and ,  Similar Matrix Decomp: Diagonalization .  Verbalization:  transforms the plane by stretching (and possibly reflecting if negative) by a factor of in the direction of and stretching (and possibly reflecting if negative) by a factor of in the direction of .    Case 2: Generalized Eigenbasis and Triagonalization.  Next, suppose has only one linearly independent eigenvector with repeated real eigenvalue . This occurs when  and  is not a scalar matrix. In this case, we do not have enough vectors to form an eigenbasis, but we can find a nice vector to toss in to create a basis. Morally shears along its eigenspace, so our idea is to find the vector we hold onto when we shear. This vector , which we call a generalized eigenvector , should satisfy   Observe that this amounts to solving the linear system . We call be the generalized ordered eigenbasis . In this case, admits a triagonalization  where and . Verbally, relative to its generalized eigenbasis, is a uniform stretch by a factor of , follows by shearing the vector one unit in the -direction.  You can play with triagonalizations at GeoGebra ID: \\href{https:\/\/www.geogebra.org\/m\/j8jvewtk}{ j8jvewtk }.   Generalized Eigenbasis Summary   Discriminant:  and is not a scalar matrix,  Eigenvalues: 1 repeated real eigenvalue ,  Basis : Eigenvector and a generalized eigenvector ,  Similar Matrix Decomp: Triagonalization .  Verbalization:  transforms the plane by uniformly stretching the plane by a factor of and then shearing the vector one unit in the -direction.    Case 3: Rotation Basis and Rotationalization.  Suppose has only no linearly independent real eigenvectors. This occurs when . Then has two complex See Appendix for an overview of complex numbers . eigenvalues: and its complex conjugate . Associated to each are complex conjugate eigenvectors and , where and are real. Since and are linearly independent (over ), it follows that and are linearly independent (over ), and I call the collection a rotation basis for . (Note that this name is nonstandard.)  How does transform the rotation basis? Observe that and .   Similarly .  Hence admits a rotationalization  where and is the stretch\/rotation matrix .  You can play with finding and building rotationalizations, respectively, at GeoGebra IDs: \\href{https:\/\/www.geogebra.org\/m\/ua9cd34u}{ ua9cd34u } and \\href{https:\/\/www.geogebra.org\/m\/tbmrXJmd}{ tbmrXJmd }.   Rotation Basis Summary   Discriminant:  ,  Eigenvalues: 2 complex conjugate complex eigenvalues ,  Basis : Rotation vectors where the complex eigenvectors are ,  Similar Matrix Decomp: Rotationalization .  Verbalization:  is a uniform stretch by a factor of , followed by a rotation in -coordinates by degree sending away from .      Consider the matrix A direct computation shows   hence has 1 repeated real eigenvalue, and since is not scalar, we will look to find a triagonalization for . It has characteristic polynomial   so its eigenvalue is . Plugging into the standard matrix equation and row reducing, we have   From which we get that , and hence we get the eigenvector   We now find a generalized eigenvector that we hold on to to shear after having performed our uniform stretch, i.e. a vector such that . In other words, we solve the following matrix equation   From which we get that , and hence, when , we get the generalized eigenvector   The vectors and are linearly independent and is our generalized eigenbasis.  Symbolically we have the triagonalization   Verbally, is a uniform stretch by a factor of followed by a shear in the -coordinates, taking the vector 1 unit in the direction.  Visually, we have the following picture.         Consider the matrix A direct computation shows   hence has 2 complex eigenvalues and we will look to find a rotationalization for . It has characteristic polynomial   and the quadratic formula gives its eigenvalues to be . We focus on the eigenvalue . Plugging into the matrix equation and row reducing, we have   From which we get that , and hence we get the complex eigenvector   Here is the real part and is the imaginary part of the eigenvector. They are linearly independent and is our rotation basis.  Direct computation using the strategy above gives and .  Symbolically we have the rotationalization   Verbally, is a uniform stretch by a factor of followed by a rotation in -coordinates by an angle of radians moving away from .  Visually, we have the following picture. Note that the -unit circle is dashed red, and the transformed -unit circle is dashed blue. Note how the vertices and of the transformed -unit square lie on this ellipse.       Below is a table the summarizes the three possible eigenstuff cases for a matrix . I cannot fit pictures into the table, but I also expect you to be able to sketch the corresponding coordinate grids and transformed -unit squares. For each case, I expect that given one representation (verbal, symbolic, or visual) you should be able to go to the other two.     # Lin. Indep. Eigenvectors  Eigenvalues  Basis  Verbal  Symbolic    2 real:  2 real  Eigenbasis  For each , stretch (and possibly reflecting if negative) by a factor of in the direction of .  Diagonalization    1 real:  1 real  Generalized Eigenbasis  Uniform stretch by a factor of , then shear the vector one unit in the -direction.  Triagonalization    0 real, but 2 complex:  2 complex  Rotation Basis  Uniform stretch by a factor of , then rotation in -coordinates by angle sending away from .  Rotationalization     "
},
{
  "id": "def-2x2eigenstuff",
  "level": "2",
  "url": "chp10sec4.html#def-2x2eigenstuff",
  "type": "Definition",
  "number": "9.4.1",
  "title": "<span class=\"process-math\">\\(2\\times 2\\)<\/span> Eigentheory Dictionary.",
  "body": " Eigentheory Dictionary   If , then:   The determinant of is .  The trace of is , i.e. the sum of the diagonal entries.  The discriminant of is .  The characteristic polynomial of is .    "
},
{
  "id": "prop-2x2charpoly_formula",
  "level": "2",
  "url": "chp10sec4.html#prop-2x2charpoly_formula",
  "type": "Proposition",
  "number": "9.4.2",
  "title": "<span class=\"process-math\">\\(2\\times 2\\)<\/span> Characteristic Polynomial Formula.",
  "body": " Characteristic Polynomial Formula   If is , then    "
},
{
  "id": "chp10sec4-7",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-7",
  "type": "Proof",
  "number": "9.4.1",
  "title": "",
  "body": " Proof Hint. Homework. You might find and useful.  "
},
{
  "id": "chp10sec4-8",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-8",
  "type": "Proposition",
  "number": "9.4.3",
  "title": "",
  "body": "  If is a matrix and    "
},
{
  "id": "chp10sec4-9",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-9",
  "type": "Proof",
  "number": "9.4.2",
  "title": "",
  "body": " Applying the quadratic formula to the Characteristic Polynomial Formula gives that the roots of are   "
},
{
  "id": "chp10sec4-13",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-13",
  "type": "Insight",
  "number": "9.4.4",
  "title": "Eigenbasis Summary.",
  "body": " Eigenbasis Summary   Discriminant:  or and is a scalar matrix,  Eigenvalues: 2 distinct real eigenvalues , or is scalar.  Basis : Two linearly independent eigenvectors and ,  Similar Matrix Decomp: Diagonalization .  Verbalization:  transforms the plane by stretching (and possibly reflecting if negative) by a factor of in the direction of and stretching (and possibly reflecting if negative) by a factor of in the direction of .   "
},
{
  "id": "chp10sec4-19",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-19",
  "type": "Insight",
  "number": "9.4.5",
  "title": "Generalized Eigenbasis Summary.",
  "body": " Generalized Eigenbasis Summary   Discriminant:  and is not a scalar matrix,  Eigenvalues: 1 repeated real eigenvalue ,  Basis : Eigenvector and a generalized eigenvector ,  Similar Matrix Decomp: Triagonalization .  Verbalization:  transforms the plane by uniformly stretching the plane by a factor of and then shearing the vector one unit in the -direction.   "
},
{
  "id": "chp10sec4-27",
  "level": "2",
  "url": "chp10sec4.html#chp10sec4-27",
  "type": "Insight",
  "number": "9.4.6",
  "title": "Rotation Basis Summary.",
  "body": " Rotation Basis Summary   Discriminant:  ,  Eigenvalues: 2 complex conjugate complex eigenvalues ,  Basis : Rotation vectors where the complex eigenvectors are ,  Similar Matrix Decomp: Rotationalization .  Verbalization:  is a uniform stretch by a factor of , followed by a rotation in -coordinates by degree sending away from .   "
},
{
  "id": "ex-triagonalization",
  "level": "2",
  "url": "chp10sec4.html#ex-triagonalization",
  "type": "Example",
  "number": "9.4.7",
  "title": "",
  "body": "  Consider the matrix A direct computation shows   hence has 1 repeated real eigenvalue, and since is not scalar, we will look to find a triagonalization for . It has characteristic polynomial   so its eigenvalue is . Plugging into the standard matrix equation and row reducing, we have   From which we get that , and hence we get the eigenvector   We now find a generalized eigenvector that we hold on to to shear after having performed our uniform stretch, i.e. a vector such that . In other words, we solve the following matrix equation   From which we get that , and hence, when , we get the generalized eigenvector   The vectors and are linearly independent and is our generalized eigenbasis.  Symbolically we have the triagonalization   Verbally, is a uniform stretch by a factor of followed by a shear in the -coordinates, taking the vector 1 unit in the direction.  Visually, we have the following picture.      "
},
{
  "id": "ex-rotationalization",
  "level": "2",
  "url": "chp10sec4.html#ex-rotationalization",
  "type": "Example",
  "number": "9.4.9",
  "title": "",
  "body": "  Consider the matrix A direct computation shows   hence has 2 complex eigenvalues and we will look to find a rotationalization for . It has characteristic polynomial   and the quadratic formula gives its eigenvalues to be . We focus on the eigenvalue . Plugging into the matrix equation and row reducing, we have   From which we get that , and hence we get the complex eigenvector   Here is the real part and is the imaginary part of the eigenvector. They are linearly independent and is our rotation basis.  Direct computation using the strategy above gives and .  Symbolically we have the rotationalization   Verbally, is a uniform stretch by a factor of followed by a rotation in -coordinates by an angle of radians moving away from .  Visually, we have the following picture. Note that the -unit circle is dashed red, and the transformed -unit circle is dashed blue. Note how the vertices and of the transformed -unit square lie on this ellipse.      "
},
{
  "id": "table-2x2classification",
  "level": "2",
  "url": "chp10sec4.html#table-2x2classification",
  "type": "Table",
  "number": "9.4.11",
  "title": "",
  "body": "   # Lin. Indep. Eigenvectors  Eigenvalues  Basis  Verbal  Symbolic    2 real:  2 real  Eigenbasis  For each , stretch (and possibly reflecting if negative) by a factor of in the direction of .  Diagonalization    1 real:  1 real  Generalized Eigenbasis  Uniform stretch by a factor of , then shear the vector one unit in the -direction.  Triagonalization    0 real, but 2 complex:  2 complex  Rotation Basis  Uniform stretch by a factor of , then rotation in -coordinates by angle sending away from .  Rotationalization    "
},
{
  "id": "chp10sec5",
  "level": "1",
  "url": "chp10sec5.html",
  "type": "Lesson",
  "number": "9.5",
  "title": "Modern Application: Graphs and Ranking",
  "body": " Modern Application: Graphs and Ranking   Combinatorial Graph   A combinatorial graph  is a collection of vertices and edges connecting them. We often just call them graphs, but don't get confused with a graph of a function, they are different things. If two vertices are connected by an edge, we say they are adjacent .    Graphs are incredibly valuable for modeling networks such as utilities, roads, social networks, and websites.   An example of a combinatorial graph.    This graph has five vertices, but they are not all the same. Looking at this graph, you probably would agree that vertex is most central, meanwhile by symmetry, the others are then equally second most central. What about told you it was most central? In this case, it has the most adjacent vertices, but for more complicated graphs, you can imagine this cannot be the only thing you look at.  So the question becomes, how do you determine which vertices are most central? More importantly, how would you tell a computer how to determine which vertices are most central? What we want is a centrality function.   Centrality Function   A centrality function  on the vertices is a rule that assigns a number to each vertex such that the larger the number, the more central it is, i.e. if is more central than . Letting , then a centrality function can be represented as a centrality vector  .    There are many ways to create such a centrality function, but here is a systematic idea: The value of the function on a vertex should be proportional to the sum of the values of the adjacent vertices. This is very appealing, since intuitively, vertices with more adjacencies should then have higher the values. To make this work, the constant of proportionality, say should be fixed for the whole graph and furthermore, and the values of the function at each vertex cannot be negative. (Think through why negative values would break this idea.)  Symbolically, for each ,   This simply becomes   where is a centrality vector and is the adjacency matrix for whose entry is 1 if there is an edge between and and 0 otherwise.   Adjacency Matrix   If is a graph, its adjacency matrix  is the matrix whose entries are determine by     So a reasonable centrality vector is should be associated a positive eigenvalue and associated nonnegative eigenvector. That is great, but how do we know one exists? Well, here is a black box (i.e. take as given) theorem:   Perron--Frobenius   If is a connected graph and is its adjacency matrix, has a unique largest real eigenvalue (called its Perron--Frobenius eigenvalue ), and it has an all nonnegative eigenvector (called a Perron--Frobenius eigenvector ).  Furthermore, if has a loop with an odd number of edges (e.g. a triangle), then has magnitude larger than all other eigenvalues.    The Perron--Frobenius Theorem has many generalizations and I give a simple version of it here that conveys the utility of this kind of result when searching for centrality vectors for graphs.  What this says is, to find a centrality vector for , we do the following:   Turn the graph into a linear algebra object, its adjacency matrix .  Approximate a Perron--Frobenius eigenvector.     Consider the graph in Figure . Its adjacency matrix is    Method 1: Characteristic Polynomial + GeoGebra CAS. Using GeoGebra CAS, characteristic polynomial is whose roots without multiplicity are . Its Perron--Frobenius eigenvalue is then . Plugging this into and row reducing, we find a Perron--Frobenius eigenvector of   We then interpret this to mean vertex 5 is ranked most central, and the others are ranked equally next most central.   Method 2: Iterative + GeoGebra CAS. Since has triangles, without performing any computations we know its Perron--Frobenius eigenvalue will have magnitude larger than any other eigenvalues, and hence we may apply the iterative method to approximating an Perron--Frobenius eigenvector. Let's pick our test vector to be the standard basis vector . Using GeoGebra, with slider value for , and then scaling by last entry to keep the numbers under control, we can see that after , the numbers stabilize, and we get the Perron--Frobenius eigenvector correct to 15 decimal places of accuracy, i.e.   We then may draw the same conclusions as above. Note, as is standard with the iterative method, we do not need to compute the characteristic polynomial or its roots.     Chapter Homework Problems    Rigorously prove the following proposition.   Proposition 9.5. If is an invariant subspace of and , then is an invariant subspace of .      Rigorously prove the following proposition.   Proposition 9.7. If is a basis, , is a diagonal matrix with diagonal entries , and , then for each , , the line is an -invariant line with scaling factor .      Suppose that    Using the correct notation for the parametric vector equations for lines, find all -invariant lines.  For each -invariant line, determine the scaling factor.       Suppose that is a matrix which transforms the plane according to the following picture.    Using the correct notation for the parametric equations for lines, find all -invariant lines.  For each -invariant line, determine the scaling factor.       Suppose that is a matrix with invariant lines and and associated scaling factors and . Determine the invariant lines and associated scaling factors for the matrix . Be sure to justify why the lines you identify are invariant.      Consider the matrix .   Use your Invariant Line GeoGebra Tool to explore the find reasonable guesses for the invariant lines and and their associated scaling factors. Include GeoGebra images for both lines.  Now symbolically find the invariant lines and scaling factors with the Algebraic Strategy. Verify you got the same thing as you did visually in the previous part.  Use this to write down a similar matrix decomposition for .  Multiply the SMD out to verify that you do in fact recover and the lines and scaling factors you found were correct.       Revisit Mathopolis.   Let be the stochastic matrix you found. Use the Algebraic Strategy to find its eigenstuff.  Compare the eigenstuff you found to your conclusions in the prior problem. Explain how what you had found at that time was related to finding eigenstuff.       Consider the matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Compute .  Compute the eigenvalues of .  Set up, but do not evaluate, two augmented matrices whose solution sets correspond to eigenspaces.  Find the parametric equations for the -invariant lines.  Find two independent eigenvectors of and if possible, identify an ordered eigenbasis .  Using complete sentences and geometric words, verbally describe how transforms the plane.  Symbolically express your diagonalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .       Consider the following matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Find .  Compute the eigenvalues of .  Set up, but do not evaluate an augmented matrix whose solution set corresponds to the eigenspace.  Find the parametric equations for the -invariant line and pick an eigenvector .  Set up, but do not evaluate, an augmented matrix whose solution set correspond to the generalized eigenspace.  Find the parametric equations for the -shear line and pick a generalized eigenvector . Let denote the ordered generalized eigenbasis you found.  Using complete sentences and geometric words, verbally explain how transforms the plane.  Symbolically express your triangularization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .       Consider the complex number .   Use GeoGebra or sketch by hand and . Be sure this is clearly labelled.  Find the polar representation of this complex number.  Compute using both the Cartesian and polar representations. Which one was easier?     (b) where .  (c) Using the Cartesian form requires foiling: . Using the polar form is more direct: where is a above.      We can define a transformation of the complex plane where, given a complex number , we then output . Recall that the complex plane is just the plane with multiplication with the identification . It turns out that there exists a real matrix such that .   Find .  Are you surprised by this matrix? Why or why not?  What if we now consider and a new transformation where, given a complex number , we then output . Can you find the associated matrix ? You are encouraged to use GeoGebra in your initial exploration.     (a) Multiplication by is just rotation by counterclockwise, hence the associated matrix is .  (c) More generally, complex multiplication by is the same as matrix multiplication by , a uniform stretch by and a rotation by counterclockwise.      Consider the following matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Find .  Use the quadratic formula to find and simplify the eigenvalues and .  Set up, but do not evaluate, an augmented matrix whose solution sets correspond to a complex eigenspace.  Find the parametric equations for the -invariant line and pick an eigenvector . (Note: You will have complex numbers, that is okay.)  Give a complex diagonalization of .  Use to find an ordered rotation basis .  Using complete sentences and geometric words, verbally explain how transforms the plane.  Symbolically express your rotationalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .     (a) , hence can be diagonalized over and had a rotationalization in the plane.  (b) .  (c)   (e) The complex eigenspace associated to is The complex eigenspace associated to is .  (f) .  (g) A rotation basis is . (Note: There are many acceptable choice here since any vector spanning works)  (h) Relative to the -coordinates, is a uniform stretch by a factor of 2 and rotates the plane by clockwise.  (i) .  (j)        (It all comes together.) Consider the matrix .   Without even computing the discriminant , you should look at and immediately understand its eigenstuff. What type of eigenvalues? How will the invariant lines lie in the plane relative to each other? Why?  Compute and compute the eigenvalues of .  Find the parametric equations for the -invariant lines. Clearly show all steps.  Verify that the invariant lines are orthogonal.  Find an ordered orthonormal eigenbasis for .  Using complete sentences and geometric words, verbally describe how transforms the plane.  Symbolically express your orthogonal diagonalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .     (a) Since this is a symmetric matrix, the Spectral Theorem tells us that this matrix is orthogonally diagonalizable , that is, it has 2 distinct real eigenvalues and the associated eigenspaces are orthogonal.  (b) Using the characteristic polynomial formula, .  (c) Going through the now usual methods, we get our two invariant lines:   (d) We see   (e) We normalize to get our orthonormal eigenbasis   (f) It follows that    scales the plane by a factor of in the direction of and  scales the plane by a factor of in the direction of .   Alternatively, you can understand as the composition:   First rotate the plane by clockwise.  Second stretch by a factor of 7 in the -direction and reflect over the -axis.  Third, rotate the plane back counterclockwise.   (g) We get the orthogonal diagonalization:   (h) The visual representation should look like:     latex.matrix_delimiters('[', ']') a = 3 b = 4 d = 3 A = matrix(QQbar,2,2,[a,b,b,d]) tr = a+d dt = (a*d)-b^2 Disc = tr^2-4*dt l1 = (tr+sqrt(Disc))\/2 l2 = (tr-sqrt(Disc))\/2 temp = A[0][0]-l1 if temp == 0: v1 = matrix(QQbar, 2,1,[1,0]) else: v1 = matrix(QQbar, 2,1,[-A[0][1]\/temp,1]) u1 = 1\/sqrt((v1.transpose()*v1)[0][0])*v1 u1exact = matrix(2,1,[u1[0][0].radical_expression(),u1[1][0].radical_expression()]) temp = A[0][0]-l2 if temp == 0: v2 = matrix(QQbar, 2,1,[1,0]) else: v2 = matrix(QQbar, 2,1,[-A[0][1]\/temp,1]) u2 = 1\/sqrt((v2.transpose()*v2)[0][0])*v2 u2exact = matrix(2,1,[u2[0][0].radical_expression(),u2[1][0].radical_expression()]) Q = block_matrix([[u1exact,u2exact]]) D = matrix(2,2,[l1,0,0,l2])   "
},
{
  "id": "def-combinatorial-graph",
  "level": "2",
  "url": "chp10sec5.html#def-combinatorial-graph",
  "type": "Definition",
  "number": "9.5.1",
  "title": "Combinatorial Graph.",
  "body": " Combinatorial Graph   A combinatorial graph  is a collection of vertices and edges connecting them. We often just call them graphs, but don't get confused with a graph of a function, they are different things. If two vertices are connected by an edge, we say they are adjacent .   "
},
{
  "id": "fig-graph-example",
  "level": "2",
  "url": "chp10sec5.html#fig-graph-example",
  "type": "Figure",
  "number": "9.5.2",
  "title": "",
  "body": " An example of a combinatorial graph.   "
},
{
  "id": "def-centrality-function",
  "level": "2",
  "url": "chp10sec5.html#def-centrality-function",
  "type": "Definition",
  "number": "9.5.3",
  "title": "Centrality Function.",
  "body": " Centrality Function   A centrality function  on the vertices is a rule that assigns a number to each vertex such that the larger the number, the more central it is, i.e. if is more central than . Letting , then a centrality function can be represented as a centrality vector  .   "
},
{
  "id": "chp10sec5-13",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjacency matrix "
},
{
  "id": "def-adjacency-matrix",
  "level": "2",
  "url": "chp10sec5.html#def-adjacency-matrix",
  "type": "Definition",
  "number": "9.5.4",
  "title": "Adjacency Matrix.",
  "body": " Adjacency Matrix   If is a graph, its adjacency matrix  is the matrix whose entries are determine by    "
},
{
  "id": "thm-perron-frobenius",
  "level": "2",
  "url": "chp10sec5.html#thm-perron-frobenius",
  "type": "Theorem",
  "number": "9.5.5",
  "title": "Perron--Frobenius.",
  "body": " Perron--Frobenius   If is a connected graph and is its adjacency matrix, has a unique largest real eigenvalue (called its Perron--Frobenius eigenvalue ), and it has an all nonnegative eigenvector (called a Perron--Frobenius eigenvector ).  Furthermore, if has a loop with an odd number of edges (e.g. a triangle), then has magnitude larger than all other eigenvalues.   "
},
{
  "id": "chp10sec5-20",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-20",
  "type": "Example",
  "number": "9.5.6",
  "title": "",
  "body": "  Consider the graph in Figure . Its adjacency matrix is    Method 1: Characteristic Polynomial + GeoGebra CAS. Using GeoGebra CAS, characteristic polynomial is whose roots without multiplicity are . Its Perron--Frobenius eigenvalue is then . Plugging this into and row reducing, we find a Perron--Frobenius eigenvector of   We then interpret this to mean vertex 5 is ranked most central, and the others are ranked equally next most central.   Method 2: Iterative + GeoGebra CAS. Since has triangles, without performing any computations we know its Perron--Frobenius eigenvalue will have magnitude larger than any other eigenvalues, and hence we may apply the iterative method to approximating an Perron--Frobenius eigenvector. Let's pick our test vector to be the standard basis vector . Using GeoGebra, with slider value for , and then scaling by last entry to keep the numbers under control, we can see that after , the numbers stabilize, and we get the Perron--Frobenius eigenvector correct to 15 decimal places of accuracy, i.e.   We then may draw the same conclusions as above. Note, as is standard with the iterative method, we do not need to compute the characteristic polynomial or its roots.   "
},
{
  "id": "chp10sec5-21-2",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-2",
  "type": "Exercise",
  "number": "9.5.1",
  "title": "",
  "body": "  Rigorously prove the following proposition.   Proposition 9.5. If is an invariant subspace of and , then is an invariant subspace of .   "
},
{
  "id": "chp10sec5-21-3",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-3",
  "type": "Exercise",
  "number": "9.5.2",
  "title": "",
  "body": "  Rigorously prove the following proposition.   Proposition 9.7. If is a basis, , is a diagonal matrix with diagonal entries , and , then for each , , the line is an -invariant line with scaling factor .   "
},
{
  "id": "chp10sec5-21-4",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-4",
  "type": "Exercise",
  "number": "9.5.3",
  "title": "",
  "body": "  Suppose that    Using the correct notation for the parametric vector equations for lines, find all -invariant lines.  For each -invariant line, determine the scaling factor.    "
},
{
  "id": "chp10sec5-21-5",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-5",
  "type": "Exercise",
  "number": "9.5.4",
  "title": "",
  "body": "  Suppose that is a matrix which transforms the plane according to the following picture.    Using the correct notation for the parametric equations for lines, find all -invariant lines.  For each -invariant line, determine the scaling factor.    "
},
{
  "id": "chp10sec5-21-6",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-6",
  "type": "Exercise",
  "number": "9.5.5",
  "title": "",
  "body": "  Suppose that is a matrix with invariant lines and and associated scaling factors and . Determine the invariant lines and associated scaling factors for the matrix . Be sure to justify why the lines you identify are invariant.   "
},
{
  "id": "chp10sec5-21-7",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-7",
  "type": "Exercise",
  "number": "9.5.6",
  "title": "",
  "body": "  Consider the matrix .   Use your Invariant Line GeoGebra Tool to explore the find reasonable guesses for the invariant lines and and their associated scaling factors. Include GeoGebra images for both lines.  Now symbolically find the invariant lines and scaling factors with the Algebraic Strategy. Verify you got the same thing as you did visually in the previous part.  Use this to write down a similar matrix decomposition for .  Multiply the SMD out to verify that you do in fact recover and the lines and scaling factors you found were correct.    "
},
{
  "id": "chp10sec5-21-8",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-8",
  "type": "Exercise",
  "number": "9.5.7",
  "title": "",
  "body": "  Revisit Mathopolis.   Let be the stochastic matrix you found. Use the Algebraic Strategy to find its eigenstuff.  Compare the eigenstuff you found to your conclusions in the prior problem. Explain how what you had found at that time was related to finding eigenstuff.    "
},
{
  "id": "chp10sec5-21-9",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-9",
  "type": "Exercise",
  "number": "9.5.8",
  "title": "",
  "body": "  Consider the matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Compute .  Compute the eigenvalues of .  Set up, but do not evaluate, two augmented matrices whose solution sets correspond to eigenspaces.  Find the parametric equations for the -invariant lines.  Find two independent eigenvectors of and if possible, identify an ordered eigenbasis .  Using complete sentences and geometric words, verbally describe how transforms the plane.  Symbolically express your diagonalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .    "
},
{
  "id": "chp10sec5-21-10",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-10",
  "type": "Exercise",
  "number": "9.5.9",
  "title": "",
  "body": "  Consider the following matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Find .  Compute the eigenvalues of .  Set up, but do not evaluate an augmented matrix whose solution set corresponds to the eigenspace.  Find the parametric equations for the -invariant line and pick an eigenvector .  Set up, but do not evaluate, an augmented matrix whose solution set correspond to the generalized eigenspace.  Find the parametric equations for the -shear line and pick a generalized eigenvector . Let denote the ordered generalized eigenbasis you found.  Using complete sentences and geometric words, verbally explain how transforms the plane.  Symbolically express your triangularization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .    "
},
{
  "id": "chp10sec5-21-11",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-11",
  "type": "Exercise",
  "number": "9.5.10",
  "title": "",
  "body": "  Consider the complex number .   Use GeoGebra or sketch by hand and . Be sure this is clearly labelled.  Find the polar representation of this complex number.  Compute using both the Cartesian and polar representations. Which one was easier?     (b) where .  (c) Using the Cartesian form requires foiling: . Using the polar form is more direct: where is a above.   "
},
{
  "id": "chp10sec5-21-12",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-12",
  "type": "Exercise",
  "number": "9.5.11",
  "title": "",
  "body": "  We can define a transformation of the complex plane where, given a complex number , we then output . Recall that the complex plane is just the plane with multiplication with the identification . It turns out that there exists a real matrix such that .   Find .  Are you surprised by this matrix? Why or why not?  What if we now consider and a new transformation where, given a complex number , we then output . Can you find the associated matrix ? You are encouraged to use GeoGebra in your initial exploration.     (a) Multiplication by is just rotation by counterclockwise, hence the associated matrix is .  (c) More generally, complex multiplication by is the same as matrix multiplication by , a uniform stretch by and a rotation by counterclockwise.   "
},
{
  "id": "chp10sec5-21-13",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-13",
  "type": "Exercise",
  "number": "9.5.12",
  "title": "",
  "body": "  Consider the following matrix .   Compute and then use this to determine the number of invariant lines has in the plane.  Find .  Use the quadratic formula to find and simplify the eigenvalues and .  Set up, but do not evaluate, an augmented matrix whose solution sets correspond to a complex eigenspace.  Find the parametric equations for the -invariant line and pick an eigenvector . (Note: You will have complex numbers, that is okay.)  Give a complex diagonalization of .  Use to find an ordered rotation basis .  Using complete sentences and geometric words, verbally explain how transforms the plane.  Symbolically express your rotationalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .     (a) , hence can be diagonalized over and had a rotationalization in the plane.  (b) .  (c)   (e) The complex eigenspace associated to is The complex eigenspace associated to is .  (f) .  (g) A rotation basis is . (Note: There are many acceptable choice here since any vector spanning works)  (h) Relative to the -coordinates, is a uniform stretch by a factor of 2 and rotates the plane by clockwise.  (i) .  (j)    "
},
{
  "id": "chp10sec5-21-14",
  "level": "2",
  "url": "chp10sec5.html#chp10sec5-21-14",
  "type": "Exercise",
  "number": "9.5.13",
  "title": "",
  "body": "   (It all comes together.) Consider the matrix .   Without even computing the discriminant , you should look at and immediately understand its eigenstuff. What type of eigenvalues? How will the invariant lines lie in the plane relative to each other? Why?  Compute and compute the eigenvalues of .  Find the parametric equations for the -invariant lines. Clearly show all steps.  Verify that the invariant lines are orthogonal.  Find an ordered orthonormal eigenbasis for .  Using complete sentences and geometric words, verbally describe how transforms the plane.  Symbolically express your orthogonal diagonalization of .  Using GeoGebra, visually represent the -coordinate grid, the -unit square, , and depict how transforms .     (a) Since this is a symmetric matrix, the Spectral Theorem tells us that this matrix is orthogonally diagonalizable , that is, it has 2 distinct real eigenvalues and the associated eigenspaces are orthogonal.  (b) Using the characteristic polynomial formula, .  (c) Going through the now usual methods, we get our two invariant lines:   (d) We see   (e) We normalize to get our orthonormal eigenbasis   (f) It follows that    scales the plane by a factor of in the direction of and  scales the plane by a factor of in the direction of .   Alternatively, you can understand as the composition:   First rotate the plane by clockwise.  Second stretch by a factor of 7 in the -direction and reflect over the -axis.  Third, rotate the plane back counterclockwise.   (g) We get the orthogonal diagonalization:   (h) The visual representation should look like:    "
},
{
  "id": "chp7sec1",
  "level": "1",
  "url": "chp7sec1.html",
  "type": "Lesson",
  "number": "10.1",
  "title": "Vector Size",
  "body": " Vector Size  The motivating question of this lesson is: What is the \"size\" of a vector? By size, here I mean an absolute size , single number that captures the \"bigness\" of the vector. This is in contrast to previous chapters, where we looked at relative size of two vectors (i.e. is two times larger than ). There are many reasonable ways to measure size, and we will begin by investigating them in a variety of contexts.   Size in Quantitative Situations   Revisit . What would you say is the size of that vector of travel directions? What if you were a bird?  Revisit . What would you say is the size of that vector of temperatures?     Size in   Here we investigate the size of each vector in    Discuss relevant ways to measure the size of each vector. Can you come up with multiple ways? Given a reasonable way to determine size, which vectors are the largest? Smallest?     Size in   Investigate the size of each vector in Make an argument why each vector could be considered to have the largest size. (Note: each of them has a reasonable argument - think it through!)    As you may have seen in the previous activities, there are many reasonable ways to measure size. I will outline a few here, but note that you may think of other ways not listed below.  Recall the forecast from . It would be reasonable to say that the \"size\" of this forecast vector is the highest temperature expected, in which case, its \"size\" would be F.  More generally, one reasonable way to measure the size of a vector is by the magnitude of its largest entry, which we will call its absolute maximum.   Absolute Maximum ( -Norm)   If , then its absolute maximum , or - norm , is the largest magnitude of its entries. In algebraic symbols, where for all .    When looking at a vector as a signal or data, it is often useful to think about its absolute maximum.  Recall the travel instructions from . Since you are restricted to move along streets, it would be reasonable to say the size of this vector is number of blocks you have to travel, in which case the \"size\" of this vector is 4. More generally, a second reasonable way to measure the size of a vector is by the sum of the magnitude of its entries, which we will call its absolute sum.   Absolute Sum ( -Norm)   If , then its absolute sum , or - norm , is the sum of the magnitude of its entries. In algebraic symbols, .    The absolute sum has many interesting applications. It is related to the notion of Taxi Cab Geometry , where you consider the number of blocks traveled by a taxi cab to reach its destination. The absolute sum is also related to the average of the vector entries, which has many statistical applications.  A third reasonable way to measure the size of a vector is by its Euclidean length. To work with Euclidean length in , we will need to develop the Generalized Pythagorean Theorem.  We begin with the Pythagorean Theorem in the Euclidean plane, the classical result which states that, given a right triangle , the area of the square off of the hypotenuse is the sum of the areas of the squares off the legs ( and ):    yielding the famous equality,   and hence   Identifying a vector with the hypotenuse of the triangle, we get    By performing the Pythagorean Theorem twice, we get the Pythagorean Theorem in Euclidean 3-Space. We can iterate this process over and over again to find length in .    Length ( -Norm)   If , then its length , or - norm , is its Euclidean length (via the Generalized Pythagorean Theorem). In algebraic symbols,      You may be asking, why call absolute magnitude, absolute sum, and length (read ``ell p'') where is \"infinity,\" \"one,\" or \"two?\" In fact, these are instances of a broad family of ways of measuring size, or \"norms,\" , where . These norms play an important role in areas of math that build on linear algebra. In this course, we will only need the three I mentioned above. Furthermore, the -norm (i.e. length) will be most important for us going forward, so unless mentioned otherwise, I will always use (i.e. no subscript) to denote the -norm .     If , then   ,  , and  .       Revisit . Order the vectors according to each of the three norms.     Identify Sets of Norm 1   In the plane, clearly draw and label each of the following sets of points:   The set of points that have absolute maximum of 1. In symbols .  The set of points that have absolute sum of 1. In symbols .  The set of points that have length of 1. In symbols .   Conjecture the shapes of the sets of norm 1 in .     Scaling a vector scales its norm   If , , and , then .    We often care about the \"direction\" and not the norm of a vector. In such cases, we can use to scale out by the norm and get a \"norm 1\" vector. In certain contexts, working with a norm 1 vector is much nicer than working with messy or large norms. The process of scaling a nonzero vector to length 1 is normalization (i.e. ).   Unit Vector   A vector of length 1 is a unit vector .    I will use the \"hat\" notation to denote the unit vector in the -direction, i.e. .  "
},
{
  "id": "chp7sec1-3",
  "level": "2",
  "url": "chp7sec1.html#chp7sec1-3",
  "type": "Quantitative Situation",
  "number": "10.1.1",
  "title": "Size in Quantitative Situations.",
  "body": " Size in Quantitative Situations   Revisit . What would you say is the size of that vector of travel directions? What if you were a bird?  Revisit . What would you say is the size of that vector of temperatures?   "
},
{
  "id": "activity-vector_size2",
  "level": "2",
  "url": "chp7sec1.html#activity-vector_size2",
  "type": "Activity",
  "number": "10.1.2",
  "title": "Size in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Size in   Here we investigate the size of each vector in    Discuss relevant ways to measure the size of each vector. Can you come up with multiple ways? Given a reasonable way to determine size, which vectors are the largest? Smallest?   "
},
{
  "id": "activity-vector_size3",
  "level": "2",
  "url": "chp7sec1.html#activity-vector_size3",
  "type": "Activity",
  "number": "10.1.3",
  "title": "Size in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Size in   Investigate the size of each vector in Make an argument why each vector could be considered to have the largest size. (Note: each of them has a reasonable argument - think it through!)   "
},
{
  "id": "def-absolute_max",
  "level": "2",
  "url": "chp7sec1.html#def-absolute_max",
  "type": "Definition",
  "number": "10.1.4",
  "title": "Absolute Maximum (<span class=\"process-math\">\\(\\ell^\\infty\\)<\/span>-Norm).",
  "body": " Absolute Maximum ( -Norm)   If , then its absolute maximum , or - norm , is the largest magnitude of its entries. In algebraic symbols, where for all .   "
},
{
  "id": "def-absolute_sum",
  "level": "2",
  "url": "chp7sec1.html#def-absolute_sum",
  "type": "Definition",
  "number": "10.1.5",
  "title": "Absolute Sum (<span class=\"process-math\">\\(\\ell^1\\)<\/span>-Norm).",
  "body": " Absolute Sum ( -Norm)   If , then its absolute sum , or - norm , is the sum of the magnitude of its entries. In algebraic symbols, .   "
},
{
  "id": "def-length",
  "level": "2",
  "url": "chp7sec1.html#def-length",
  "type": "Definition",
  "number": "10.1.6",
  "title": "Length (<span class=\"process-math\">\\(\\ell^2\\)<\/span>-Norm).",
  "body": " Length ( -Norm)   If , then its length , or - norm , is its Euclidean length (via the Generalized Pythagorean Theorem). In algebraic symbols,    "
},
{
  "id": "chp7sec1-28",
  "level": "2",
  "url": "chp7sec1.html#chp7sec1-28",
  "type": "Remark",
  "number": "10.1.7",
  "title": "",
  "body": " You may be asking, why call absolute magnitude, absolute sum, and length (read ``ell p'') where is \"infinity,\" \"one,\" or \"two?\" In fact, these are instances of a broad family of ways of measuring size, or \"norms,\" , where . These norms play an important role in areas of math that build on linear algebra. In this course, we will only need the three I mentioned above. Furthermore, the -norm (i.e. length) will be most important for us going forward, so unless mentioned otherwise, I will always use (i.e. no subscript) to denote the -norm .  "
},
{
  "id": "ex-three_norms",
  "level": "2",
  "url": "chp7sec1.html#ex-three_norms",
  "type": "Example",
  "number": "10.1.8",
  "title": "",
  "body": "  If , then   ,  , and  .    "
},
{
  "id": "chp7sec1-30",
  "level": "2",
  "url": "chp7sec1.html#chp7sec1-30",
  "type": "Activity",
  "number": "10.1.9",
  "title": "",
  "body": "  Revisit . Order the vectors according to each of the three norms.   "
},
{
  "id": "chp7sec1-31",
  "level": "2",
  "url": "chp7sec1.html#chp7sec1-31",
  "type": "Activity",
  "number": "10.1.10",
  "title": "Identify Sets of Norm 1.",
  "body": " Identify Sets of Norm 1   In the plane, clearly draw and label each of the following sets of points:   The set of points that have absolute maximum of 1. In symbols .  The set of points that have absolute sum of 1. In symbols .  The set of points that have length of 1. In symbols .   Conjecture the shapes of the sets of norm 1 in .   "
},
{
  "id": "prop-scale_norms",
  "level": "2",
  "url": "chp7sec1.html#prop-scale_norms",
  "type": "Proposition",
  "number": "10.1.11",
  "title": "Scaling a vector scales its norm.",
  "body": " Scaling a vector scales its norm   If , , and , then .   "
},
{
  "id": "chp7sec1-34",
  "level": "2",
  "url": "chp7sec1.html#chp7sec1-34",
  "type": "Definition",
  "number": "10.1.12",
  "title": "Unit Vector.",
  "body": " Unit Vector   A vector of length 1 is a unit vector .   "
},
{
  "id": "chp7sec2",
  "level": "1",
  "url": "chp7sec2.html",
  "type": "Lesson",
  "number": "10.2",
  "title": "Inner Product and Angle",
  "body": " Inner Product and Angle  Consider vectors , , and the parallelogram they form. Observe that , , and diagonal form a triangle. Let denote the angle between and . See .  The motivating question of this lesson is: How do the lengths of the sides and relate to the length of the diagonal ?    A mixture parallelogram and its diagonal.     Exploring the Length of a Diagonal   In this activity, you will use the GeoGebra link nzvwt6ju to explore the length of its diagonal. Begin with and .     Explore. Move the vector . It is constrained to the circle of radius 3 (i.e. all for which ). Take note of the shapes of all the different parallelograms you are forming.     The range of values of . As you move , how does vary? What is the largest it can be? Describe the parallelogram(s) that attain this maximum? What is the smallest it can be? Describe the parallelogram(s) that attain this minimum? Is it ever the case that or , and if so, when?     The range of values of . As you move , how does vary? Is it ever the case that , and if so, when? In what way does the Pythagorean Theorem have to do with this? In what way does seem to relate to , the angle between and ?      We see that, as and are left constant, varies with . Let's algebraically expand .   This term measures many interesting geometric features of this parallelogram and deserves its own name.   (Standard) Inner Product (a.k.a. Dot Product)   The (standard) inner product (or dot product ) of is:     With the symbolism of the inner product, the length squared of the diagonal simplifies to    The Many Notations for Inner Product  There are many common notations for the inner product. I use the \"angle bracket\" notation . Another common notation is the \"dot\" notation . Further still, some may use the parentheses notation . In this course, plan to use only the angle bracket notation, but be prepared to see these other notations in other books and courses.   Observe that we may express length using the inner product:   So the inner product measures length!    Algebraic Properties of the Inner Product   The inner product satisfies each of the following.    Positive definite. If , then , and equals 0 precisely when .    Symmetric. If , then .    Bilinear. The inner product is linear in the second input.   Additive. If , then .  Scaling. If , , then .       Observe that by symmetry, an inner product is bilinear in both inputs.   Using Algebraic Properties to Compute Inner Products   Suppose we know , , and .  How can we use this knowledge to compute ?   Heuristic: Use algebraic properties to decompose unknown inner products into combinations of known inner products.       Using Algebraic Properties to Compute Inner Products   Suppose we know , , and . Use your knowledge of the algebraic properties of inner products to compute each of the following:            We have already seen in that the inner product relates to the angle between and . We now make the relationship more precise. To do so, we will use a classical result from analytic geometry, the Law of Cosines .    Law of Cosines    If is a triangle with side lengths , , and angle , then        The Law of Cosines can be proved using the Pythagorean Theorem. See GeoGebra ID: ck4w8asn .     In Figure , we see the Law of Cosines, in vector symbolism, gives:   Meanwhile, we have already shown in that:   Comparing these expressions yields:   The Angle Equation for the Inner Product   If , then,     So we may use the inner product to compute angle !   Keep in mind that outputs angles measures in radians. If you want to find angles in degree, you need to change units by scaling by .   Using Algebraic Properties to Compute Triangle Data   Consider the triangle where , , and . Use your knowledge of inner products to find the triangle data %(3 side lengths and 3 angle measurements) for , specifically:   Length of segment  Length of segment  Length of segment  Measure in degrees of  Measure in degrees of  Measure in degrees of    Hint: What vectors will you use?        The Angle Equation for the inner product has many important consequences, including the following two results.   Cauchy--Schwartz Inequality   If , then .     Sketch of proof  Note that and apply this to the Angle Equation .    Triangle inequality   If , then .     Sketch of proof  Earlier using the algebraic properties of inner products in , I showed   Using ,   Taking square roots, the result follows.   The Cauchy-Schwartz Inequality is a useful inequality to bound inner products. The Triangle Inequality is a fundamental geometric result stating that the length of a side of a triangle is less than the sums of the lengths of the other two sides.  "
},
{
  "id": "fig-parallelogram-diagonals2",
  "level": "2",
  "url": "chp7sec2.html#fig-parallelogram-diagonals2",
  "type": "Figure",
  "number": "10.2.1",
  "title": "",
  "body": " A mixture parallelogram and its diagonal.   "
},
{
  "id": "activity-exploring-diagonal",
  "level": "2",
  "url": "chp7sec2.html#activity-exploring-diagonal",
  "type": "Activity",
  "number": "10.2.2",
  "title": "Exploring the Length of a Diagonal.",
  "body": " Exploring the Length of a Diagonal   In this activity, you will use the GeoGebra link nzvwt6ju to explore the length of its diagonal. Begin with and .     Explore. Move the vector . It is constrained to the circle of radius 3 (i.e. all for which ). Take note of the shapes of all the different parallelograms you are forming.     The range of values of . As you move , how does vary? What is the largest it can be? Describe the parallelogram(s) that attain this maximum? What is the smallest it can be? Describe the parallelogram(s) that attain this minimum? Is it ever the case that or , and if so, when?     The range of values of . As you move , how does vary? Is it ever the case that , and if so, when? In what way does the Pythagorean Theorem have to do with this? In what way does seem to relate to , the angle between and ?     "
},
{
  "id": "def-inner-product",
  "level": "2",
  "url": "chp7sec2.html#def-inner-product",
  "type": "Definition",
  "number": "10.2.3",
  "title": "(Standard) Inner Product (a.k.a. Dot Product).",
  "body": " (Standard) Inner Product (a.k.a. Dot Product)   The (standard) inner product (or dot product ) of is:    "
},
{
  "id": "prop_fundamental_standard_inner_product_props",
  "level": "2",
  "url": "chp7sec2.html#prop_fundamental_standard_inner_product_props",
  "type": "Proposition",
  "number": "10.2.4",
  "title": "Algebraic Properties of the Inner Product.",
  "body": " Algebraic Properties of the Inner Product   The inner product satisfies each of the following.    Positive definite. If , then , and equals 0 precisely when .    Symmetric. If , then .    Bilinear. The inner product is linear in the second input.   Additive. If , then .  Scaling. If , , then .      "
},
{
  "id": "ex-using-ip-alg-props",
  "level": "2",
  "url": "chp7sec2.html#ex-using-ip-alg-props",
  "type": "Example",
  "number": "10.2.5",
  "title": "Using Algebraic Properties to Compute Inner Products.",
  "body": " Using Algebraic Properties to Compute Inner Products   Suppose we know , , and .  How can we use this knowledge to compute ?   Heuristic: Use algebraic properties to decompose unknown inner products into combinations of known inner products.     "
},
{
  "id": "activity-using-ip-alg-props",
  "level": "2",
  "url": "chp7sec2.html#activity-using-ip-alg-props",
  "type": "Activity",
  "number": "10.2.6",
  "title": "Using Algebraic Properties to Compute Inner Products.",
  "body": " Using Algebraic Properties to Compute Inner Products   Suppose we know , , and . Use your knowledge of the algebraic properties of inner products to compute each of the following:           "
},
{
  "id": "prop-law-of-cosines",
  "level": "2",
  "url": "chp7sec2.html#prop-law-of-cosines",
  "type": "Proposition",
  "number": "10.2.7",
  "title": "Law of Cosines.",
  "body": " Law of Cosines    If is a triangle with side lengths , , and angle , then      "
},
{
  "id": "chp7sec2-23",
  "level": "2",
  "url": "chp7sec2.html#chp7sec2-23",
  "type": "Note",
  "number": "10.2.8",
  "title": "",
  "body": " The Law of Cosines can be proved using the Pythagorean Theorem. See GeoGebra ID: ck4w8asn .  "
},
{
  "id": "fig-law-of-cosines-triangle",
  "level": "2",
  "url": "chp7sec2.html#fig-law-of-cosines-triangle",
  "type": "Figure",
  "number": "10.2.9",
  "title": "",
  "body": " "
},
{
  "id": "prop-ip_angle_eq",
  "level": "2",
  "url": "chp7sec2.html#prop-ip_angle_eq",
  "type": "Proposition",
  "number": "10.2.10",
  "title": "The Angle Equation for the Inner Product.",
  "body": " The Angle Equation for the Inner Product   If , then,    "
},
{
  "id": "activity-using_ip_alg_props",
  "level": "2",
  "url": "chp7sec2.html#activity-using_ip_alg_props",
  "type": "Activity",
  "number": "10.2.11",
  "title": "Using Algebraic Properties to Compute Triangle Data.",
  "body": " Using Algebraic Properties to Compute Triangle Data   Consider the triangle where , , and . Use your knowledge of inner products to find the triangle data %(3 side lengths and 3 angle measurements) for , specifically:   Length of segment  Length of segment  Length of segment  Measure in degrees of  Measure in degrees of  Measure in degrees of    Hint: What vectors will you use?       "
},
{
  "id": "thm_cauchyschwartz",
  "level": "2",
  "url": "chp7sec2.html#thm_cauchyschwartz",
  "type": "Theorem",
  "number": "10.2.12",
  "title": "Cauchy--Schwartz Inequality.",
  "body": " Cauchy--Schwartz Inequality   If , then .   "
},
{
  "id": "chp7sec2-37",
  "level": "2",
  "url": "chp7sec2.html#chp7sec2-37",
  "type": "Proof",
  "number": "10.2.1",
  "title": "Sketch of proof.",
  "body": " Sketch of proof  Note that and apply this to the Angle Equation .  "
},
{
  "id": "chp7sec2-38",
  "level": "2",
  "url": "chp7sec2.html#chp7sec2-38",
  "type": "Theorem",
  "number": "10.2.13",
  "title": "Triangle inequality.",
  "body": " Triangle inequality   If , then .   "
},
{
  "id": "chp7sec2-39",
  "level": "2",
  "url": "chp7sec2.html#chp7sec2-39",
  "type": "Proof",
  "number": "10.2.2",
  "title": "Sketch of proof.",
  "body": " Sketch of proof  Earlier using the algebraic properties of inner products in , I showed   Using ,   Taking square roots, the result follows.  "
},
{
  "id": "chp7sec3",
  "level": "1",
  "url": "chp7sec3.html",
  "type": "Lesson",
  "number": "10.3",
  "title": "Inner Product as Matrix Multiplication",
  "body": " Inner Product as Matrix Multiplication  Observe that the inner product   where the last expression is just matrix multiplication of a \"horizontal\" with the normal vertical . The \"horizontal\" version of is its transpose.   Transpose of a Vector   If is a vector, written in column form, then its transpose  is the same list of numbers, written in row form. In symbols, this can be expressed as     With the notation, .  More generally,   Transpose of a Matrix   if is an matrix, then the transpose of , denoted , is the matrix whose rows are .      If and , then the matrix      Gram Matrix   If and , then its Gram matrix is .    The given a collection of vectors , its Gram matrix contains an in incredible amount of geometric data in one convenient and efficient package. Observe that the diagonal entries encode length data and the off-diagonal entries contain angle data .    Suppose I want to determine the the geometry of the vectors . This means I want both length and angle data. I can quickly determine this by computing the Gram matrix and interpreting its entries appropriately.   So interpreting:      See how the Gram matrix can be used, in conjunction with the length and angle equations, to completely determine the geometry of the vectors and at GeoGebra ID: quqdwezr .  You can show directly that the transpose satisfies the following useful algebraic properties.   Transpose Socks 'n Shoes   If is and is , then .     Adjoint Property   If is an matrix, and , then      Hint of proof  Try using your understanding of inner product as matrix multiplication, together with transpose socks 'n shoes.   In summary, the transpose is an algebraic operation that helps us phrase inner products as matrix multiplication, and helps us organize performing many inner products at once.  "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "chp7sec3.html#def-transpose",
  "type": "Definition",
  "number": "10.3.1",
  "title": "Transpose of a Vector.",
  "body": " Transpose of a Vector   If is a vector, written in column form, then its transpose  is the same list of numbers, written in row form. In symbols, this can be expressed as    "
},
{
  "id": "def-tranpose_matrix",
  "level": "2",
  "url": "chp7sec3.html#def-tranpose_matrix",
  "type": "Definition",
  "number": "10.3.2",
  "title": "Transpose of a Matrix.",
  "body": " Transpose of a Matrix   if is an matrix, then the transpose of , denoted , is the matrix whose rows are .   "
},
{
  "id": "chp7sec3-9",
  "level": "2",
  "url": "chp7sec3.html#chp7sec3-9",
  "type": "Proposition",
  "number": "10.3.3",
  "title": "",
  "body": "  If and , then the matrix    "
},
{
  "id": "def-gram_matrix",
  "level": "2",
  "url": "chp7sec3.html#def-gram_matrix",
  "type": "Definition",
  "number": "10.3.4",
  "title": "Gram Matrix.",
  "body": " Gram Matrix   If and , then its Gram matrix is .   "
},
{
  "id": "chp7sec3-12",
  "level": "2",
  "url": "chp7sec3.html#chp7sec3-12",
  "type": "Example",
  "number": "10.3.5",
  "title": "",
  "body": "  Suppose I want to determine the the geometry of the vectors . This means I want both length and angle data. I can quickly determine this by computing the Gram matrix and interpreting its entries appropriately.   So interpreting:     "
},
{
  "id": "prop-socknshoes_transpose",
  "level": "2",
  "url": "chp7sec3.html#prop-socknshoes_transpose",
  "type": "Proposition",
  "number": "10.3.6",
  "title": "Transpose Socks ’n Shoes.",
  "body": " Transpose Socks 'n Shoes   If is and is , then .   "
},
{
  "id": "chp7sec3-16",
  "level": "2",
  "url": "chp7sec3.html#chp7sec3-16",
  "type": "Proposition",
  "number": "10.3.7",
  "title": "Adjoint Property.",
  "body": " Adjoint Property   If is an matrix, and , then    "
},
{
  "id": "chp7sec3-17",
  "level": "2",
  "url": "chp7sec3.html#chp7sec3-17",
  "type": "Proof",
  "number": "10.3.1",
  "title": "Hint of proof.",
  "body": " Hint of proof  Try using your understanding of inner product as matrix multiplication, together with transpose socks 'n shoes.  "
},
{
  "id": "chp7sec4",
  "level": "1",
  "url": "chp7sec4.html",
  "type": "Lesson",
  "number": "10.4",
  "title": "Orthogonality",
  "body": " Orthogonality  The motivating geometric question of this lesson is: What does it mean for vectors to be orthogonal?    Orthogonal   Two vectors are orthogonal if the angle between them is a right angle.    Using our understanding of cosine and the Angle Equation , it follows that   Vectors are Orthogonal if their Inner Product is Zero   If are nonzero, then and are orthogonal if and only if .     Pairwise Orthogonal Set   If is a finite collection of nonzero vectors, then is pairwise orthogonal if for all , , then .     Computational Quick Check for Orthogonality   If and , then   is pairwise orthogonal if and only if is diagonal.     Pairwise Orthogonal Vectors are Independent   If is a finite set of pairwise orthogonal (nonzero) vectors, then is linearly independent.    Observe how this morally makes sense: orthogonal vectors should be pointing in different directions , and this is exactly what independence measures.   Sketch of proof  Let and . Suppose is such that . Then . Since is orthogonal, Algorithm implies is diagonal (with nonzero diagonal entries). Therefore must be and hence is independent.    Orthonormal Set   We call  normal if each vector in is normal (i.e. if , then ). If is both pairwise orthogonal and normal, we call it orthonormal .      Let and . Then is orthonormal if and only if .     Orthogonal Matrix   An matrix is orthogonal if .    It follows that if is orthonormal, it is an orthonormal basis for its span .   Why do we care? Bases are necessary to perform computations. Basis give us coordinates! Orthonormal basis give us nice crisp square coordinate grids. Certain computations become much easier with ``good'' orthogonal coordinates.  So the question becomes, given a basis for a subspace , how do you find an orthonormal basis for ?  One strategy for this is the Gram--Schmidt Orthogonalization Algorithm, which we will introduce in a few sections.  "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "chp7sec4.html#def-orthogonal",
  "type": "Definition",
  "number": "10.4.1",
  "title": "Orthogonal.",
  "body": " Orthogonal   Two vectors are orthogonal if the angle between them is a right angle.   "
},
{
  "id": "prop-inner_prod_zero_orth",
  "level": "2",
  "url": "chp7sec4.html#prop-inner_prod_zero_orth",
  "type": "Proposition",
  "number": "10.4.2",
  "title": "Vectors are Orthogonal if their Inner Product is Zero.",
  "body": " Vectors are Orthogonal if their Inner Product is Zero   If are nonzero, then and are orthogonal if and only if .   "
},
{
  "id": "def-pairwise_orthogonal",
  "level": "2",
  "url": "chp7sec4.html#def-pairwise_orthogonal",
  "type": "Definition",
  "number": "10.4.3",
  "title": "Pairwise Orthogonal Set.",
  "body": " Pairwise Orthogonal Set   If is a finite collection of nonzero vectors, then is pairwise orthogonal if for all , , then .   "
},
{
  "id": "cqc-orthogonality",
  "level": "2",
  "url": "chp7sec4.html#cqc-orthogonality",
  "type": "Proposition",
  "number": "10.4.4",
  "title": "Computational Quick Check for Orthogonality.",
  "body": " Computational Quick Check for Orthogonality   If and , then   is pairwise orthogonal if and only if is diagonal.   "
},
{
  "id": "prop-orth_implies_indep",
  "level": "2",
  "url": "chp7sec4.html#prop-orth_implies_indep",
  "type": "Proposition",
  "number": "10.4.5",
  "title": "Pairwise Orthogonal Vectors are Independent.",
  "body": " Pairwise Orthogonal Vectors are Independent   If is a finite set of pairwise orthogonal (nonzero) vectors, then is linearly independent.   "
},
{
  "id": "chp7sec4-10",
  "level": "2",
  "url": "chp7sec4.html#chp7sec4-10",
  "type": "Proof",
  "number": "10.4.1",
  "title": "Sketch of proof.",
  "body": " Sketch of proof  Let and . Suppose is such that . Then . Since is orthogonal, Algorithm implies is diagonal (with nonzero diagonal entries). Therefore must be and hence is independent.  "
},
{
  "id": "chp7sec4-11",
  "level": "2",
  "url": "chp7sec4.html#chp7sec4-11",
  "type": "Definition",
  "number": "10.4.6",
  "title": "Orthonormal Set.",
  "body": " Orthonormal Set   We call  normal if each vector in is normal (i.e. if , then ). If is both pairwise orthogonal and normal, we call it orthonormal .   "
},
{
  "id": "chp7sec4-12",
  "level": "2",
  "url": "chp7sec4.html#chp7sec4-12",
  "type": "Proposition",
  "number": "10.4.7",
  "title": "",
  "body": "  Let and . Then is orthonormal if and only if .   "
},
{
  "id": "chp7sec4-13",
  "level": "2",
  "url": "chp7sec4.html#chp7sec4-13",
  "type": "Definition",
  "number": "10.4.8",
  "title": "Orthogonal Matrix.",
  "body": " Orthogonal Matrix   An matrix is orthogonal if .   "
},
{
  "id": "chp7sec5",
  "level": "1",
  "url": "chp7sec5.html",
  "type": "Lesson",
  "number": "10.5",
  "title": "Orthogonal Complement",
  "body": " Orthogonal Complement   Special Case I: Complement to a Line  To begin, consider the following motivating geometric question: Given a line , can you find the hyperplane orthogonal to it?    Orthogonal Complement of a Vector   If , then the orthogonal complement of (or equivalently the line spanned by ) is the collection of all vectors orthogonal to and is symbolized by      Orthogonal Complement of Line is a Subspace   If and , then and (i.e. is a subspace).   ]  [Hint of proof] You want to show each of these two properties (closed under scaling and closed under addition). You may want to use and reference (among possibly other things) and .   To say lies in is to say . Using our understanding of inner product as matrix multiplication by the transpose, this means . It follows that .    Here I will find the orthogonal complement, , to the vector .  Using our understanding of as the null space of , it follows that is a basis for . Hence is the plane spanned by .     Play with orthogonal complements to lines in at GeoGebra ID: https:\/\/www.geogebra.org\/m\/ged9fa8k ged9fa8k .    Special Case II: Complement to a Plane  Let's now consider a second situation: Given a plane in , can you find its orthogonal line ?   Observe if is orthogonal to , then it is orthogonal to both  and . Hence  and  . We can organize this into a single matrix equation: .  The orthogonal line is then where .       Given , find the line orthogonal to the plane . If , then any vector on the orthogonal line must satisfy , and hence lie in its null space.  Via row reduction,     It follows that the orthogonal line is      Verify for yourself that the following are row equivalent:   The orthogonal line is   This basis vector is so useful, and used so often, it gets its own name:   Cross Product   If and , then the cross product of and is     The meaning of the cross product is: it gives a vector which spans the plane orthogonal to both and . Due to the specific geometry of this situation, the cross product only makes sense in .    General Case: Complement to a Subspace  Let us now consider the most general situation. Given a subspace, what is the collection of vectors orthogonal to it, and how do you find it?    Orthogonal Complement of a Subspace   If is a subspace, then the orthogonal complement to is the set     Let be a collection on nonzero independent vectors which spans (i.e. ), and let .  Since is a basis for , a vector is in if and only if for each . Using the our understanding of the inner product as matrix multiplication by the transpose, and collecting each of the expressions, we get   Orthogonal Complements as Null Spaces   If is a subspace with basis , then      "
},
{
  "id": "def-orth_com",
  "level": "2",
  "url": "chp7sec5.html#def-orth_com",
  "type": "Definition",
  "number": "10.5.1",
  "title": "Orthogonal Complement of a Vector.",
  "body": " Orthogonal Complement of a Vector   If , then the orthogonal complement of (or equivalently the line spanned by ) is the collection of all vectors orthogonal to and is symbolized by    "
},
{
  "id": "prop-orth_complement_subspace",
  "level": "2",
  "url": "chp7sec5.html#prop-orth_complement_subspace",
  "type": "Proposition",
  "number": "10.5.2",
  "title": "Orthogonal Complement of Line is a Subspace.",
  "body": " Orthogonal Complement of Line is a Subspace   If and , then and (i.e. is a subspace).   "
},
{
  "id": "chp7sec5subsec1-5",
  "level": "2",
  "url": "chp7sec5.html#chp7sec5subsec1-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " [Hint of proof] You want to show each of these two properties (closed under scaling and closed under addition). You may want to use and reference (among possibly other things) and .  "
},
{
  "id": "chp7sec5subsec1-7",
  "level": "2",
  "url": "chp7sec5.html#chp7sec5subsec1-7",
  "type": "Example",
  "number": "10.5.3",
  "title": "",
  "body": "  Here I will find the orthogonal complement, , to the vector .  Using our understanding of as the null space of , it follows that is a basis for . Hence is the plane spanned by .    "
},
{
  "id": "chp7sec5subsec2-5",
  "level": "2",
  "url": "chp7sec5.html#chp7sec5subsec2-5",
  "type": "Example",
  "number": "10.5.4",
  "title": "",
  "body": "     Given , find the line orthogonal to the plane . If , then any vector on the orthogonal line must satisfy , and hence lie in its null space.  Via row reduction,     It follows that the orthogonal line is     "
},
{
  "id": "def_cross_product",
  "level": "2",
  "url": "chp7sec5.html#def_cross_product",
  "type": "Definition",
  "number": "10.5.5",
  "title": "Cross Product.",
  "body": " Cross Product   If and , then the cross product of and is    "
},
{
  "id": "def-orthogonal_complement",
  "level": "2",
  "url": "chp7sec5.html#def-orthogonal_complement",
  "type": "Definition",
  "number": "10.5.6",
  "title": "Orthogonal Complement of a Subspace.",
  "body": " Orthogonal Complement of a Subspace   If is a subspace, then the orthogonal complement to is the set    "
},
{
  "id": "eq_orth_complements",
  "level": "2",
  "url": "chp7sec5.html#eq_orth_complements",
  "type": "Theorem",
  "number": "10.5.7",
  "title": "Orthogonal Complements as Null Spaces.",
  "body": " Orthogonal Complements as Null Spaces   If is a subspace with basis , then    "
},
{
  "id": "chp7sec6",
  "level": "1",
  "url": "chp7sec6.html",
  "type": "Lesson",
  "number": "10.6",
  "title": "Orthogonal Projection",
  "body": " Orthogonal Projection  In classical Euclidean geometry, given a line and a point off of the line, we can drop the perpendicular from the point to the line. I now rephrase this in the language of linear algebra.   Given vectors , we can orthogonally project  onto the line .  We may use some trigonometry and the Angle Equation to find the length of this projection.   This projection vector can now be computed.    Projection Component   The projection component of onto is the vector:     Observe that .   Orthogonal Component   The orthogonal component of relative to is the vector:     Observe that .  Viewing as the hypotenuse of a right triangle, its legs become the projection component and orthogonal component. Every vector has such a decomposition.   Play with projections at GeoGebra ID: vgtq44gs .  These ideas are at are at the core of the results in the next couple sections and are also incredible valuable in understanding vector calculus.  Suppose now that is independent. We may generalize the ideas of orthogonal projection from lines to considering orthogonal projections onto .  Given any , we can drop the perpendicular to a point on . This gives us a decomposition of ,   where   is its projection component   and   is its orthogonal component .   How do we actually find ?  Since ,    Independent Implies Invertible Gram Matrix   If is independent, then is invertible.     A square matrix is invertible if and only if its null space is trivial. Pick . I will show that it must be zero.  By definition of null space, . By associativity of matrix multiplication, , and by , . Meanwhile, the definition of matrix multiplication implies . That means , and hence . So and the positive definiteness of the inner product implies .  By assumption, is independent, and therefore, by , and thus it must be the case that .   Since the Gram matrix is invertible, we may multiply by its inverse to solve for the -coordinates of the projection component of ,   and finally, we change back to standard coordinates,    Orthogonal Projection Matrix   If is a matrix with independent columns, then is the orthogonal projection matrix onto .    Multiplying by this matrix has the effect of dropping the perpendicular!!!   Let be an matrix with independent columns, , , and ,  If the columns of do not span , the matrix equation   but we can find \"the closest possible solution,\" namely the orthogonal projection onto the column space, i.e. the matrix equation   Since is the point on that is closest to , the solution to this matrix equation is the best possible approximate solution to the original matrix equation. Since distance is given by a sum of squares, this solution minimizes the sum of squares. As such we call this solution the linear least squares (LLS) solution .   Linear Least Squares (LLS) Solution   If is an matrix with independent columns, , and , then the linear least squares solution to the matrix equation is     Unfortunately in the wild, the LLS solution is often denoted with a hat, , however this could be confused with normalized vectors. To avoid confusion, I will denote it denoted .  LLS solutions have many important applications. For example, in statistics, when we have data sets and want to find a predictive curve (e.g. line) of ``best fit.''    We measure a quantity we believe varies linearly over time. We measure: at , at , and at .  We want to find the best possible . There is noise, so it will not be a perfect fit.  If the data was perfectly linear, it would satisfy:   This amounts to solving the following matrix equation:   The data is not perfectly linear, and correspondingly, there is no solution to this matrix equation, but there is a LLS solution!!!  Check for yourself that is an excellent fit for this data.    Having gone through this example, let's walk through the general case. out in the wild, there are two covarying quantities, an independent quantity and a dependent quantity. You suspect that the underlying relationship between and can be modeled as a linear combination of linearly independent functions (e.g. monomials, trigonometric functions, exponentials, etc.) . To make this concrete, I will explicitly walk through linear relationships. So you suspect for some unknown and . You go out and make measurements at regular intervals of , let's say at times . Let denote the column vector of data (a.k.a. observables).  If the data was perfectly linear, it would satisfy:   This amounts to solving the following matrix equation:   The data is not perfectly linear, and correspondingly, there is no solution to this matrix equation, but there is a LLS solution. The LLS solution for gives line of best fit for the data you observe!!!   Problems    Consider the triangle depicted below. Observe that is the segment formed by dropping the perpendicular from to segment , and is the point of intersection. Let denote the angle formed at vertex . Using the Pythagorean Theorem, carefully show that   This important result is called the Law of Cosines .         Consider the triangle in the plane with vertices , , .   Use GeoGebra to draw and label this triangle.  Use the GeoGebra length and angle tools to measure the 3 sides and the 3 angles.  Let and let . Use these vectors to find a single inner product matrix who entries encode all of the geometric data for this triangle.  Use the entries of this inner product matrix algebraically find the side lengths , , and . Give both exact and numerically approximated solutions. Make sure they agree with the GeoGebra measurements.  Verify that the side lengths satisfy the Triangle Inequality : any side length is less than the sum of the other two side lengths.  Use the entries of this inner product matrix algebraically find the angle measures and . Give both exact and numerically approximated solutions. Make sure they agree with the GeoGebra measurements.  Why is not immediately found from the inner product matrix? What information about triangles can you use to then find it, given your knowledge of the other two angles?     (a,b,d,f) The GeoGebra image should look like:     (c) Let . Then the inner product matrix contains the geometric data of this triangle.  (d) Lengths can be found by computing square roots of the diagonal entries, .  (e) This can be done with direct checks, for example .  (f) Use the Angle Formula for the off diagonal entries.   (g) Look at the picture, is not realized as an angle between any of these vectors, but rather, its supplement is realized between and .      Rigorously prove the .      Rigorously prove the .      Let .   Use matrix transpose and your knowledge of matrix equations to find the orthogonal plane to . Express this in parametric vector form. Set up and explain all steps, though you may use GeoGebra for row reduction.  Use GeoGebra to plot the vector , the line , and the plane . Using the angle measurement tool, verify that the two basis vectors you found for form right angle with .     (a) Using our knowledge of inner products as matrix multiplication by the transpose: , so is determined and and are free, hence:   Hence   (b) The GeoGebra image should look like:         Let and consider the plane .   Use matrix transpose and your knowledge of matrix equations to find the orthogonal line to . Express in parametric vector form. Set up and explain all steps, though you may use GeoGebra for row reduction.  Use the cross product formula to find the orthogonal line. Verify that this is the same line as in the previous part.  Use GeoGebra to plot the plane and the line . Using the angle measurement tool, verify that the vector you found forms a right angle with both vectors in .     (a) Let . Using our knowledge of inner products as matrix multiplication by the transpose, the orthogonal line is: . Since   we see and are determined and is free, hence:   Hence   (b) The GeoGebra image should look like:        "
},
{
  "id": "def-projection_component",
  "level": "2",
  "url": "chp7sec6.html#def-projection_component",
  "type": "Definition",
  "number": "10.6.1",
  "title": "Projection Component.",
  "body": " Projection Component   The projection component of onto is the vector:    "
},
{
  "id": "def-orthogonal_component",
  "level": "2",
  "url": "chp7sec6.html#def-orthogonal_component",
  "type": "Definition",
  "number": "10.6.2",
  "title": "Orthogonal Component.",
  "body": " Orthogonal Component   The orthogonal component of relative to is the vector:    "
},
{
  "id": "prop-independent_implies_invertible_gram",
  "level": "2",
  "url": "chp7sec6.html#prop-independent_implies_invertible_gram",
  "type": "Proposition",
  "number": "10.6.3",
  "title": "Independent <span class=\"process-math\">\\(S\\)<\/span> Implies Invertible Gram Matrix.",
  "body": " Independent Implies Invertible Gram Matrix   If is independent, then is invertible.   "
},
{
  "id": "chp7sec6-29",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-29",
  "type": "Proof",
  "number": "10.6.1",
  "title": "",
  "body": " A square matrix is invertible if and only if its null space is trivial. Pick . I will show that it must be zero.  By definition of null space, . By associativity of matrix multiplication, , and by , . Meanwhile, the definition of matrix multiplication implies . That means , and hence . So and the positive definiteness of the inner product implies .  By assumption, is independent, and therefore, by , and thus it must be the case that .  "
},
{
  "id": "def-orthogonal_projection_matrix",
  "level": "2",
  "url": "chp7sec6.html#def-orthogonal_projection_matrix",
  "type": "Definition",
  "number": "10.6.4",
  "title": "Orthogonal Projection Matrix.",
  "body": " Orthogonal Projection Matrix   If is a matrix with independent columns, then is the orthogonal projection matrix onto .   "
},
{
  "id": "def-lls_solution",
  "level": "2",
  "url": "chp7sec6.html#def-lls_solution",
  "type": "Definition",
  "number": "10.6.5",
  "title": "Linear Least Squares (LLS) Solution.",
  "body": " Linear Least Squares (LLS) Solution   If is an matrix with independent columns, , and , then the linear least squares solution to the matrix equation is    "
},
{
  "id": "chp7sec6-45",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-45",
  "type": "Example",
  "number": "10.6.6",
  "title": "",
  "body": "  We measure a quantity we believe varies linearly over time. We measure: at , at , and at .  We want to find the best possible . There is noise, so it will not be a perfect fit.  If the data was perfectly linear, it would satisfy:   This amounts to solving the following matrix equation:   The data is not perfectly linear, and correspondingly, there is no solution to this matrix equation, but there is a LLS solution!!!  Check for yourself that is an excellent fit for this data.   "
},
{
  "id": "chp7sec6-52-2",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-2",
  "type": "Exercise",
  "number": "10.6.1",
  "title": "",
  "body": "  Consider the triangle depicted below. Observe that is the segment formed by dropping the perpendicular from to segment , and is the point of intersection. Let denote the angle formed at vertex . Using the Pythagorean Theorem, carefully show that   This important result is called the Law of Cosines .      "
},
{
  "id": "chp7sec6-52-3",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-3",
  "type": "Exercise",
  "number": "10.6.2",
  "title": "",
  "body": "  Consider the triangle in the plane with vertices , , .   Use GeoGebra to draw and label this triangle.  Use the GeoGebra length and angle tools to measure the 3 sides and the 3 angles.  Let and let . Use these vectors to find a single inner product matrix who entries encode all of the geometric data for this triangle.  Use the entries of this inner product matrix algebraically find the side lengths , , and . Give both exact and numerically approximated solutions. Make sure they agree with the GeoGebra measurements.  Verify that the side lengths satisfy the Triangle Inequality : any side length is less than the sum of the other two side lengths.  Use the entries of this inner product matrix algebraically find the angle measures and . Give both exact and numerically approximated solutions. Make sure they agree with the GeoGebra measurements.  Why is not immediately found from the inner product matrix? What information about triangles can you use to then find it, given your knowledge of the other two angles?     (a,b,d,f) The GeoGebra image should look like:     (c) Let . Then the inner product matrix contains the geometric data of this triangle.  (d) Lengths can be found by computing square roots of the diagonal entries, .  (e) This can be done with direct checks, for example .  (f) Use the Angle Formula for the off diagonal entries.   (g) Look at the picture, is not realized as an angle between any of these vectors, but rather, its supplement is realized between and .   "
},
{
  "id": "chp7sec6-52-4",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-4",
  "type": "Exercise",
  "number": "10.6.3",
  "title": "",
  "body": "  Rigorously prove the .   "
},
{
  "id": "chp7sec6-52-5",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-5",
  "type": "Exercise",
  "number": "10.6.4",
  "title": "",
  "body": "  Rigorously prove the .   "
},
{
  "id": "chp7sec6-52-6",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-6",
  "type": "Exercise",
  "number": "10.6.5",
  "title": "",
  "body": "  Let .   Use matrix transpose and your knowledge of matrix equations to find the orthogonal plane to . Express this in parametric vector form. Set up and explain all steps, though you may use GeoGebra for row reduction.  Use GeoGebra to plot the vector , the line , and the plane . Using the angle measurement tool, verify that the two basis vectors you found for form right angle with .     (a) Using our knowledge of inner products as matrix multiplication by the transpose: , so is determined and and are free, hence:   Hence   (b) The GeoGebra image should look like:      "
},
{
  "id": "chp7sec6-52-7",
  "level": "2",
  "url": "chp7sec6.html#chp7sec6-52-7",
  "type": "Exercise",
  "number": "10.6.6",
  "title": "",
  "body": "  Let and consider the plane .   Use matrix transpose and your knowledge of matrix equations to find the orthogonal line to . Express in parametric vector form. Set up and explain all steps, though you may use GeoGebra for row reduction.  Use the cross product formula to find the orthogonal line. Verify that this is the same line as in the previous part.  Use GeoGebra to plot the plane and the line . Using the angle measurement tool, verify that the vector you found forms a right angle with both vectors in .     (a) Let . Using our knowledge of inner products as matrix multiplication by the transpose, the orthogonal line is: . Since   we see and are determined and is free, hence:   Hence   (b) The GeoGebra image should look like:      "
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
