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
  "id": "chp0sec1",
  "level": "1",
  "url": "chp0sec1.html",
  "type": "Lesson",
  "number": "0.1",
  "title": "Note to Students",
  "body": " Note to Students  a  "
},
{
  "id": "chp0sec2",
  "level": "1",
  "url": "chp0sec2.html",
  "type": "Lesson",
  "number": "0.2",
  "title": "Note to Teachers",
  "body": " Note to Teachers  a  "
},
{
  "id": "chp1sec1",
  "level": "1",
  "url": "chp1sec1.html",
  "type": "Lesson",
  "number": "1.1",
  "title": "Vectors as Lists of Quantities",
  "body": " Vectors as Lists of Quantities  Welcome students! Before we can begin learning linear algebra, we need to establish the ontology of this book. In this book, I take the perspective that objects and situations exist external to us everywhere. These objects and situations possess many types of attributes . An attribute, together with an agreed upon unit of measurement, is a quantity .   Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.      OAQ Analysis  Take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. The first attributes that students often identify are things like length, volume, and mass of objects. See if you can identify quantities that are not these. You might be surprised by how many different types of quantities surround you at this very moment.   If I want to measure the mass of my sandwich, then I put it on a scale, select units (e.g. grams, pounds, etc), and then read off the number. If I want to measure the distance I traveled in my car, then I look at my odometer, select units (miles or kilometers), and then read off the number. If I want to measure the temperature at my home, then I look at my thermometer, select my units (Fahrenheit or Celsius), and then read off the number.  When we measure a quantity, we obtain a real number . For example, positive integers (e.g. 1, 2, 3, …), ratios of integers (e.g. ), square roots of positive integers (e.g. ), and transcendental numbers like and are all real numbers.  You do not need to know the value of a real number to reason about it. In Example , the volume of the water in my glass, measured in ounces is a number. We can reason about that volume of water without ever knowing its value. Sometimes I will name a real number with an italicized lower case letter. For example, I might name the volume of water in my glass, measured in ounces, with the letter , for volume. I denote the collection of all real numbers as and use the symbols to mean  is a real number.   Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal.    Discovering the macronutrients list of quantities on the side of a box of Sugar-O's.      Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.      Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.   Today's Forcast    Hours after midnight  Temperature in Fahrenheit (°F)    0  42°F    3  39°F    6  38°F    9  48°F    12  56°F    15  59°F    18  53°F    21  46°F     I scroll down a little further and see the following visual representation.   Weather forecast.   A graphical representation of a weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?   Observe that in each quantitative situation above, we encountered many quantities, naturally grouped together, all at once. Lists of quantities are often united by a single object or situation. When analyzing the world around us, these lists of quantities naturally emerge, so it use useful to have language to discuss them.   Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .       Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.  Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size    A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.  Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,      Quantities outside - Revisited  An object is the air outside my home. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 3 hour intervals throughout the day. The corresponding list of temperatures, below, has list-length 8.  Degrees Fahrenheit at 12am,  Degrees Fahrenheit at 3am,  Degrees Fahrenheit at 6am,  Degrees Fahrenheit at 9am  Degrees Fahrenheit at 12pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 9pm.    A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.  Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,      Identifying Lists of Quantities  Consider each of the following situations. With your group, write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.  The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.     Throughout our day, we are constantly coming across vectors: nutrition facts in cereal, prices of our groceries, populations in cities, temperatures outside, internet search rankings, and even the color data for the pixels on our electronic displays. In fact, a single image on a 4K LCD display is encoded within a list of many numbers!   Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .    Day-to-Day vs. Disciplinary Vectors  So far we have focused on what I call day-to-day vectors - vectors we all see in our day-to-day lives. Of course, there are also countless disciplinary specific vectors - that is vectors that are unique to academic disciplines. Vectors naturally arise in all quantitative disciplines, including: physics, chemistry, biology, computer science, economics, and business. Throughout this course, I will introduce you to some disciplinary vectors. However, there is simply no way for me to list every possible disciplinary vector here. Rather, a major goal of this lesson is to get your mind prepared to see and reason about disciplinary vectors when you encounter them in your disciplinary contexts.    Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) In groups, come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.   "
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
  "type": "Example",
  "number": "1.1.3",
  "title": "Quantities in my kitchen.",
  "body": " Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal.    Discovering the macronutrients list of quantities on the side of a box of Sugar-O's.    "
},
{
  "id": "ex-vignettes2",
  "level": "2",
  "url": "chp1sec1.html#ex-vignettes2",
  "type": "Example",
  "number": "1.1.4",
  "title": "Quantities as I travel.",
  "body": " Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.    "
},
{
  "id": "ex-vignettes3",
  "level": "2",
  "url": "chp1sec1.html#ex-vignettes3",
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
  "id": "chp1sec2",
  "level": "1",
  "url": "chp1sec2.html",
  "type": "Lesson",
  "number": "1.2",
  "title": "Symbolizing Vectors",
  "body": " Symbolizing Vectors  Let's begin this lesson by returning to cereal. In Figure \\ref{figure:cereals_symbolize} are the nutrition facts for Sugar-Os.  How can I efficiently communicate lists of quantities such as the nutrition facts for one serving size of cereal? It is desirable to do so without writing having to write out long lists like those in ? A core mathematical act is to create and use symbols to organize our thoughts and communicate our reasoning.   Mental Action - Symbolizing   Symbolizing is the act of associating a concept in our minds with a symbol on the page. Note that we first need a concept in our minds! For example, the concept of five can be symbolized 5, or V (Roman numerals), or 101 (binary). Depending on the context, we choose the symbolization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.     A cartoon depicting a learner realizing that the concept of five can be symbolized in many ways: the alphanumeric symbol \"5\", the Roman numeral \"V\", five dashes, or binary \"101\".    Let's explore some productive ways to symbolize vectors by focusing first on the vector of nutrition facts for a single serving size of Sugar-Os.  To begin, we may concretely symbolize the nutrient facts with a vertical column of all the numbers associated with the quantities. In column form, I typically do not write down the units, but I remember they are still there. Each number in the column is an entry This way of symbolizing this vector is useful because I can efficiently see all the quantities and I can use this for numerical computations.  However, columns can be cumbersome, and in certain situations, I may not need to know the nutrient values to reason about them or to talk about them. For example, I can talk to you about Sugar-Os without telling you explicitly the nutrient facts. Just as we have a name for cereal, it is useful to also have a name for a vector. I will always name vectors with a single, lowercase bold letter. In this case, I will choose to help me remember this vector comes from S ugar-Os. The symbolizing just described is summarized in Figure \\ref{figure:symbolizing}.    Symbolizing vectors in two ways: column and name .       Writing names. I will always name vectors with a single, lowercase bold letter. When typing, please do the same. When writing by hand, bold font is impractical, so please always use the notation of a right-pointing arrow over the symbol: .  Relating the symbols for name and entries. I will usually use the same letter for the vector name as for the vector entries, except entries will not be bold and will have subscripts to denote their position in the list. For example, if I want to write the entries of a list-length 3 vector named , I will usually write . In Figure \\ref{figure:symbolizing}, I denote entries of by , where , and for instance, since the third entry has value 31, I would write .  Why a column and not a row? For reasons that will become clearer later when we discuss matrix multiplication as transformation in Lesson \\ref{lesson:matrix_transformation}, it is best to write entries in a vertical column instead of in a horizontal row.  Different Books, Different Notations. You may encounter contexts where people write their vector entries in different ways, for example horizontally, and maybe with parentheses or angle-brackets instead of brackets, e.g. , , or . For your work with this text, please use vertical column notation when writing a vector with its entries.  Consistency is important. Consistency of notation brings clarity to your writing. Please follow the above notational guidelines and always be consistent with how you write your vector names and columns.    When we move between a vector's name and a vector's column of entries, I will say we are unpacking or repacking the vector. Think of the name as a backpack , and the entries as its contents .   Discussion      Suppose . When is it advantageous to work with its name ? When is it advantageous to work with the column of its entries ?    Suppose you have a vector with name , but you do not know its entries. In what ways can you still work with ? In this context, what are the limitations on working with ?       Let's return to the context of food. Each food has its own macronutrient list. As you think about all the different foods you encounter each day, imagine the thousands upon thousands of macronutrient lists that there must exist. It is useful for us to introduce symbols to denote the collection of all possible lists of a given list-length. We will do so using the language and notation of sets.  The language and notation of sets is foundational in mathematics. In the rest of this course, we will frequently use set notation to compactly represent our thoughts.A set is a collection of objects, which we call elements of that set.  Just like vectors, we can symbolize sets with either their name or with the collection of its objects, which we group together with \"curly brackets\" and . For example, in the RGB color model, the three primary colors are: red, green, and blue. I could denote this set of primary colors with the collection: \\{red, green, blue\\} or I could name it, say with the letter (for color), in which case I would write   A standard way to write a set of all elements satisfying some condition is . This is called set-builder notation . The vertical bar here is understood to represent the words \"such that\" and I read this aloud as \"the set of all elements such that .\" This set notation is a particularly important way to symbolize sets that have infinitely many elements.   Vector Space   If is a positive integer, then the set of all list-length vectors is the vector space  (read \"R m\"). In symbols, using set notation, I write as Read aloud, I say \"R m is the set of all vectors v such that v is a vector of list-length m.\" The come from eal numbers, and reminds us that the entries of the lists are real numbers.    I will frequently use two other set symbols: and .  The symbol \" \" means is an element of . The symbol describes a relationship between a set and individual elements of that set. So the expression means that is an element of the set of , and hence is a list-length 17 vector. A slash through the symbol negates the symbol. So would mean that is not a list-length 34 vector.  The symbol \" \" means is a subset of . The symbol describes a relationship between a set and subsets of that set. So the expression means that is an subset of the set , and hence is collection of list-length 17 vectors. A slash through the symbol negates the symbol. So would mean that is not a collection of list-length 34 vectors.  Throughout the course, I will use both and frequently and move between them. For example, I may write either or to say that through are list-length 12 vectors.   Mental Action - Interpreting Symbolism   Interpreting symbolism is the act of taking a symbolic expression and understanding it in the context of a specific situation. This is a process that happens in our minds, but we often will need to then clearly communicate our interpretation to others.   Interpreting symbols is highly dependent upon the context in which we are working. Consider for example, the symbols . In the context of number of people, this can be interpreted as: the number of people when you combine a group of 5 people with a group of 3 people. In the context of minutes elapsed since lunch, this is interpreted as 5 minutes elapsed and then 3 more minutes elapsed.    Interpretation of Vectors in Context   Consider the vector . In each of the following contexts, explain in complete sentences a meaning of this vector. If there is ambiguity in the context, explain and provide potential clarification.   Macronutrients (in grams) for a cereal. (For a reminder about macronutrients, see Example .)    Directions (in feet) to reach a book on your bookshelf.    Prices (in $) of grocery items. In which of these contexts could the vector make sense?        Interpretation of Set Notation   Interpret each of the following expressions involving vector names ands set notations. Explain their meaning.                               To conclude this lesson, keep in mind that symbols are meaningless without the associated concepts in our minds. It was a pedagogical decision to first focus on constructing the concept of vectors in and then afterwards, introduce symbolism to help us reason about, and communicate our thinking about, vectors. To be able to successfully communicate with others, you will need to both symbolize vectors (which other can then interpret) and interpret the symbolism of others.    A cartoon depicting a the communication of an idea through the sequence of symbolizing and then interpreting.    "
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
  "id": "activity-vectors-name_and_column",
  "level": "2",
  "url": "chp1sec2.html#activity-vectors-name_and_column",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Discussion.",
  "body": " Discussion      Suppose . When is it advantageous to work with its name ? When is it advantageous to work with the column of its entries ?    Suppose you have a vector with name , but you do not know its entries. In what ways can you still work with ? In this context, what are the limitations on working with ?      "
},
{
  "id": "chp1sec2-16",
  "level": "2",
  "url": "chp1sec2.html#chp1sec2-16",
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
  "number": "1.2.3",
  "title": "Vector Space <span class=\"process-math\">\\(\\R^m\\)<\/span>.",
  "body": " Vector Space   If is a positive integer, then the set of all list-length vectors is the vector space  (read \"R m\"). In symbols, using set notation, I write as Read aloud, I say \"R m is the set of all vectors v such that v is a vector of list-length m.\" The come from eal numbers, and reminds us that the entries of the lists are real numbers.   "
},
{
  "id": "mentalaction-interpreting_symbols",
  "level": "2",
  "url": "chp1sec2.html#mentalaction-interpreting_symbols",
  "type": "Note",
  "number": "1.2.4",
  "title": "Mental Action - Interpreting Symbolism.",
  "body": " Mental Action - Interpreting Symbolism   Interpreting symbolism is the act of taking a symbolic expression and understanding it in the context of a specific situation. This is a process that happens in our minds, but we often will need to then clearly communicate our interpretation to others.  "
},
{
  "id": "activity-interpretting_vectors",
  "level": "2",
  "url": "chp1sec2.html#activity-interpretting_vectors",
  "type": "Activity",
  "number": "1.2.5",
  "title": "Interpretation of Vectors in Context.",
  "body": " Interpretation of Vectors in Context   Consider the vector . In each of the following contexts, explain in complete sentences a meaning of this vector. If there is ambiguity in the context, explain and provide potential clarification.   Macronutrients (in grams) for a cereal. (For a reminder about macronutrients, see Example .)    Directions (in feet) to reach a book on your bookshelf.    Prices (in $) of grocery items. In which of these contexts could the vector make sense?      "
},
{
  "id": "activity-interpretting_set_notation",
  "level": "2",
  "url": "chp1sec2.html#activity-interpretting_set_notation",
  "type": "Activity",
  "number": "1.2.6",
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
  "body": " Visualizing Vectors  What images do you think of when you picture a serving size of cereal? What images do you think of when you picture a vector?   Mental Action - Visualizing   Visualizing is the act of associating a concept in our minds with images. For example, the concept of five can be visualized with an image of 5 objects or with the image of 5 on the number line. Depending on the context, we choose the visualization that is most appropriate, that enables us to communicate, to reason, or to solve a specific problem.     A cartoon depicting a learner realizing that the concept of five can be visualized in many ways: the symbol \"5\", five fingers, a group of five objects such as apples or sides of a polygon, or five units on a number line.    Vectors are lists of quantities. They do not inherently come with any particular geometry or visualization. However, there are a few powerful visualizations that I will explicitly identify now to help you in your reasoning and communication.  In geometric visualizations, we view the entries of a vector as spatial coordinates.  This representation is most easily seen for the Cartesian plane (a.k.a. Cartesian 2-space ). Here, a list of two numbers describes points on the plane, where the first number gives your horizontal position, and the second number gives your vertical position. Given a vector , sometimes it is productive to think of it as a point in the Cartesian plane, and sometimes it is productive to think of it as the arrow originating at the origin  (its tail ) and going to the point (its tip ).    Visualizing a list-length 2 vector in Cartesian 2-space in two ways: point and arrow .    Similarly, we may visualize list-length 3 vectors in Cartesian 3-space . Here, a list of three numbers describes points in 3-space, where the first number gives your horizontal position, the second number gives your depth, and the third number gives your vertical position. Once again, given a vector , you may visualize it as a point in the Cartesian 3-space, and you may visualize it as an arrow originating at the origin  (its tail ) and going to the point (its tip ).    Visualizing a list-length 3 vector in Cartesian 3-space in two ways: point and arrow .    The zero vector  is the list of all zeros (of list-length ). When visualized as a geometric point, it is the origin . If a vector is not the zero vector, it is a nonzero vector. Note, nonzero vectors can have some zero entries, they just cannot have all zero entries.  In bar graph visualizations, we often view the entries of a vector as temporal measurements.  This visualization allows us to visualize lists of any length. If is a vector with list-length , then we can visualize as a single bar graph (or signal) in the Cartesian plane, where for the entry, , plot the vertical segment from to . The bar graph is the entirety of all the vertical segments.    Visualizing a list-length 5 vector in Cartesian 2-space as a bar graph .     For vectors where the entries represent quantities taken at different times, or quantities all measured with the same units, the bar graph representation is very useful.  In we already saw bar graph representations come up naturally in temperature forecasts. We could also use bar graph representations for the macronutrients vector or for population by block. We shall see later many more important uses for this representation, such as in digital signal processing.   Comparing vector visualizations: arrow and bar graph     Discussion   Consider each of the following situations. Which visual representation is most meaningful in that context? Draw and label each visualization.    - The population of the major city Mathopolis and its adjacent suburb Vector Valley, measured in hundreds of thousands of people.     - The distances east and north that the grocery store is from my home, measured in hundreds of feet.     - The cost, in dollars, of a pack of chicken breasts and milk at the grocery store.        Interpretation   Consider the vector .   In complete sentences, explain the meaning of this vector in the context of macronutrients (in grams) for a cereal.    In complete sentences, explain the meaning of this vector in the context of directions (in feet) to reach a book on your bookshelf.    Carefully sketch and label this vector as both a point and an arrow in Cartesian 3-space (see, for example, Figure \\ref{figure:visualizing2}).    Carefully sketch and label this vector as a bar graph in Cartesian 2-space (see, for example, Figure \\ref{figure:visualizing3}).       To conclude this lesson, keep in mind that there are many productive visualizations (points, arrows, and bar graphs) and it is up to use to both decide to use the most appropriate one in your context.  "
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
  "id": "figure-geogebra-arrow_vs_bar",
  "level": "2",
  "url": "chp1sec3.html#figure-geogebra-arrow_vs_bar",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Comparing vector visualizations: arrow and bar graph   "
},
{
  "id": "activity-vectors-visualize",
  "level": "2",
  "url": "chp1sec3.html#activity-vectors-visualize",
  "type": "Activity",
  "number": "1.3.3",
  "title": "Discussion.",
  "body": " Discussion   Consider each of the following situations. Which visual representation is most meaningful in that context? Draw and label each visualization.    - The population of the major city Mathopolis and its adjacent suburb Vector Valley, measured in hundreds of thousands of people.     - The distances east and north that the grocery store is from my home, measured in hundreds of feet.     - The cost, in dollars, of a pack of chicken breasts and milk at the grocery store.      "
},
{
  "id": "activity-vectors-interpret_visualization",
  "level": "2",
  "url": "chp1sec3.html#activity-vectors-interpret_visualization",
  "type": "Activity",
  "number": "1.3.4",
  "title": "Interpretation.",
  "body": " Interpretation   Consider the vector .   In complete sentences, explain the meaning of this vector in the context of macronutrients (in grams) for a cereal.    In complete sentences, explain the meaning of this vector in the context of directions (in feet) to reach a book on your bookshelf.    Carefully sketch and label this vector as both a point and an arrow in Cartesian 3-space (see, for example, Figure \\ref{figure:visualizing2}).    Carefully sketch and label this vector as a bar graph in Cartesian 2-space (see, for example, Figure \\ref{figure:visualizing3}).      "
},
{
  "id": "chp2sec1",
  "level": "1",
  "url": "chp2sec1.html",
  "type": "Lesson",
  "number": "2.1",
  "title": "Linear Combinations as Mixture",
  "body": " Linear Combinations as Mixture  In this lesson, we investigate, conceptualize, and formalize the notion of mixing vectors.   Vignette: Pouring Cereal  I love cereal. It can be a great way to start the day. I have two cereal boxes on my shelf: Sugar-Os, which is very tasty (but not so nutritious), and Vitaflakes, which is very nutritious (but not so tasty). When I look at the side of their boxes, I see their nutrition facts.    A cartoon depicting mixing cereal from both a box of Sugar-O's and Vitaflakes.    When I make my daily breakfast, I mix my cereals. Today, I mixed half a serving of Sugar-Os with a third of a serving of Vitaflakes. What are the nutrition facts for my mixture?  I wonder, how much nutrients is in my bowl?    Vignette: Travel Instructions  My neighborhood's streets are parallel and intersect at right angles, but they are not aligned with the north-south and east-west cardinal directions. My neighborhood map is depicted below, where the distance between each adjacent gridline is 100ft. The blue streets go from the southwest to the northeast, and each blue block measures 300ft east and 400ft north. The red streets travel from the northeast to the southeast, and each red block measures 400ft east and 300ft south.   My GPS tells me that my grocery store is 500ft east of me and 1500ft north of me, but of course, I can not get there traveling 500ft due east and 1500ft due north, as that would require I cut straight through other people's homes. Instead, I see I can travel 3 blue blocks northeast and 1 red block northwest, I get to the grocery store. Could I have gotten there another way?  I need to go to my bank. My bank is not too far away, and in fact my GPS tells me it is only 2300ft east and 1400ft north of me. I wonder, how can I describe my path there in terms of blue blocks and red blocks?    Vignette: Averaging Temperature  I want to plan out my clothing for the week so pull up the weather app on my phone. I see the forecasts for each of the next two days, with temperatures measured in degrees Fahrenheit, is:   Today's Forcast    Hours after midnight  Temperature Today in Fahrenheit (°F)  Temperature Tomorrow in Fahrenheit (°F)    0  42°F  44°F    3  39°F  41°F    6  38°F  40°F    9  48°F  52°F    12  56°F  64°F    15  59°F  67°F    18  53°F  61°F    21  46°F  50°F     Interesting! Tomorrow will be a warmer day. The app then gives the average forecast over the next two days:  The weather app plots the forecast for today, tomorrow, and the 2-day average below.    One of the most fundamental ideas associated to (lists of) quantities is mixing (lists of) quantities. In ), I pour some of one cereal and then some of another cereal. In Vignette 2 ( ), I travel in one direction, and then in another direction. In Vignette 3 ( ), I average each of my daily forecasts.   We observe two types of mixtures of quantities: those arising from a physical mixture of empirical objects (e.g. pouring cereals) and those arising from a conceptual mixture of quantities (e.g. averages of air temperatures). Mixture is a core idea that will be central to everything going forward   Where else do you see mixing?   Think back to all the different lists of quantities you found in the world around you. In which of those contexts was it meaningful to mix those vectors? Write down the contexts, lists of quantities, and what it means to mix them.    The idea of mixing vectors is made mathematically precise through two natural operations: scaling and addition. To reason about them verbally, I will usually discuss them with the metaphor of servings of boxes of cereal, where a vector represents the nutrients of one serving size of a given cereal. However, sometimes I will draw upon other metaphors, such as travel. To visualize them, I will most frequently use the geometric representation. I am about to give our first formal mathematical definition.   What is a mathematical definition?  Mathematical definitions are our attempt to formalize some mathematical object or mathematical action. It introduces precise language and symbols that help us reason about and communicate mathematics. It is a pedagogical decision that I will always introduce a concept informally first, drawing on your experiences. Afterwards I will introduce formalism, with the hope that you will have a sense of their informal meaning and the need for the formalism. In what follows, you should seek to know both the precise formal statement of definitions as well as their informal meaning and the context for their applicability.    Vector Scaling   If and , then is the vector  scaled by .     Meanings of Vector Scaling  If and , then the scaled vector has each of the following meanings:  Verbally. I fill my bowl with many serving sizes of my cereal.  Visually. Hold the arrow on both ends. Keep the tail (origin) fixed as you stretch the arrow by a scaling factor of . See Figure below.  Symbolically. The scaled vector has name and when we unpack it, its entries are obtained by scaling each entry of by .      Visualizing vector scaling via arrows      Visualize vector scaling as:  stretching arrows at GeoGebra ID: D5ZYkYQq  amplifying signals at GeoGebra ID: cczk5gzj  adjusting the volume of a sound at GeoGebra ID: awejqq5u      Absolute Length vs Relative Length  When one thinks of a vector as an arrow, it is common to think of it as having both a direction and absolute length . At this time, we will not be using the notion of absolute length, rather this will be developed and made precise in later chapters. Scaling, on the other hand, encodes relative length - for example, if , then is two times as long as . In the lessons to come, we will frequently measure vectors in units of other vectors via scaling.    Vector Addition   If , then is their vector sum . The operation of forming their vector sum is vector addition .     Meanings of Vector Addition  If , then the vector sum has each of the following meanings:  Verbally. I fill my bowl with one serving size of each of my cereals.  Visually. Translate the -arrow to start at the tip of -arrow. Similarly, translate the -arrow to start at the tip of the -arrow. This will form a tip-to-tail parallelogram and the arrow for will be the diagonal of this parallelogram. We call this visualization tip-to-tail addition.  Symbolically. The vectors sum has name and when we unpack it, its entries are obtained by adding the entries in the corresponding positions, which we call entry-by-entry addition.      Visualizing vector addition via arrows      Visualize vector addition via tip-to-tail parallelograms at GeoGebra ID: ADsHPgV4 and superposition of signals at GeoGebra ID: ttny3hjk .   Naturally, you will want to do both, scale and add vectors. Scaling, then adding, defines a fundamental mixing operation among vector quantities: linear combination.   Linear Combination   If is a collection of vectors and a collection of real numbers, then the vector is a linear combination of the vectors in .     The Mixture Parallelogram  If and , then the linear combination may be visualized with its mixture parallelogram with sides determined by and .  For instance, the mixture of 2 servings of and 1.5 servings of is encoded in the mixture parallelogram below.    Visualizing linear combination via the mixture parallelogram.      Explorations with The Mixture Parallelogram Tool   In this activity, you will engage with some of the core mixture questions of this course. Build intuition now and revisit later. You will use the Mixture Parallelogram Tool to visualize, explore, and understand mixtures of vectors in .  A pre-made version of the Mixture Parallelogram Tool can be found at GeoGebra ID: qAC4TXwy .  Finding serving sizes to create a given mixture. By playing with the sliders, find the serving sizes and so that .  Analyzing the set of all possible mixtures. Move the vectors and , and sliders and , to analyze the truth of each of the following claims. In complete sentences, and using your mixture parallelogram, justify why the claim seems true or seems false.   Every vector in the plane is a linear combination of and .  Every vector in the plane is a linear combination of and .   Holding one slider constant. Slide to and keep it there for the moment. Look at the tip of your mixture vector. Right click on the point and select \"trace\" and then start sliding around (while not changing ). What shape is created by the collection of tip points? Reset and try this again by fixing and sliding .       Symbolizing Linear Combinations   In each of the following situations, identify and name the relevant vectors (including the appropriate list-length) and then write an algebraic expression representing the appropriate mixture.   If every month, you record your monthly expenses by type (groceries, gas, utilities, tuition, etc.) in dollars, then symbolize your total expenses for the past year.  If again you record your monthly expenses, and given that annual inflation is currently roughly , symbolize what you expect to be your monthly expenses in one year.  If I have two cereals such that 1.5 servings of the first cereal has the exact same nutrition facts as 0.75 servings of the second cereal, then symbolize an equation relating the two serving sizes.      Practice Interpreting Symbolism   Interpret the meaning of the symbolic expression in each of the following situations.   You have a recipe for cookies that uses five ingredients. If are the nutrition facts for a single serving size of each of these five ingredient and the recipe calls for servings of each ingredient, respectively, then interpret the meaning of the linear combination  If is the vector of hourly temperatures in , , measured at your home on day of last week, then interpret     Given a set of distinct vectors , we may consider a linear combination . This linear combination is a mathematical object. We can ask how \"big\" this object is in units of each . This is a mathematical attribute of the linear combination. Finally, we can agree to measure the linear combinations in units of , which is the value . Collecting these quantities, we now associate to each such linear combination a new vector: its servings vector .   Servings Vector   If are distinct vectors with a fixed order and are scalars, then the linear combination has servings vector  .     The list-length of a servings vector is the number of vectors the collection . Also, note that the order of elements in matters! A different ordering of elements in would result in a different servings vector.   Practice Forming Servings Vectors    Form the servings vector for each of the following linear combinations:               Did we need to know the list-length of the vectors above to form the servings vectors?  Suppose we are forming a linear combination of that has servings vector . What is the linear combination?     "
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
  "id": "chp2sec2",
  "level": "1",
  "url": "chp2sec2.html",
  "type": "Lesson",
  "number": "2.2",
  "title": "Algebraic Properties of Linear Combination",
  "body": " Algebraic Properties of Linear Combination   Baking Cookies   I am a big fan of chocolate chip cookies.    A cartoon depicting maxing ingredients to make cookies.    Below is the ingredient list for a chocolate chip cookie recipe that produces 60 cookies.   cups of all-purpose flour\\,  1 teaspoon of baking soda,  1 teaspoon of salt,  1 cup of butter   cup of granulated sugar,   cup of packed brown sugar,  1 teaspoon of vanilla extract,  2 large eggs,  2 cups of semi-sweet chocolate morsels.    One serving size of each ingredient is one unit of the given unit of measurement (i.e. one serving size of flour is one cup, one serving size of baking soda is one teaspoon, etc.). Let the symbols , , be the names of the nutrition fact vectors for one serving size of each of these nine ingredients. In groups, discuss each of the following and then share with the class.  Symbolize. Using the names , , and the symbolism of linear combination, symbolize the nutrition facts for the totality of a single recipe of cookies.  Reason. However I want to make a double recipe (120 cookies) so that all of my linear algebra students can eat several during class. In what ways can I make a double recipe? Try to come up with at least two distinct strategies for making a double recipe.  Symbolize. I want to understand the nutrition facts vector for the totality of the cookies in my double recipe. Using the symbolism of linear combination, write down an algebraic equation for the two distinct ways you found for making double recipes.  Repeated Reasoning. Repeat this reasoning for the following situation. Later at home, I want a single cookie. Come up with at least two distinct strategies for making a single cookie. Using the symbolism of linear combination, write down an algebraic equation for the nutrition facts for a single cookie.  Generalize. In what ways can you generalize your algebraic equation to more situations? Describe both the situation and generalized algebraic equation.      After some class discussion, we should settle on two distinct strategies for making a double recipe: I could make single recipe twice , or I could double each of my ingredients. I would have the same final collection of cookies, hence the same nutrition facts, either way. We symbolize this equivalence in the following way:   Furthermore, this reasoning should generalize to any scaling factor and any number of vectors. We have discovered and informally justified our first algebraic property of linear combinations.   Distributivity of scaling across linear combination   If and , then     What is an algebraic property?  When I say an algebraic property, I will mean a general equivalence of two objects, expressed as an equality of symbolical expressions. For example, we just saw that we can double a recipe in two ways, which resulted in an equality of two algebraic expressions. We generalized this algebraic property and state it in Proposition . Whenever we encounter a useful algebraic property, we will summarize it in a proposition for us to easily use in the future. Remember, algebraic properties encode meaningful relationships first and foremost, and are not just rules to push symbols around the page.   Whenever we make a mathematical claim, it is incumbent upon us to justify that claim. The act of justification is a core mathematical action and comes in two varieties: informal and formal.   Informal Justification  Informal justification is the act of explaining why a mathematical statement makes sense by appealing to meanings, such as those imbued by metaphors.   The discussion of having two ways to double our recipe leveraged our mixture metaphor to provide an informal justification for .   Formal Justification (a.k.a. Proving)  Formal justification (a.k.a proving) is the act of certifying the truth of a mathematical statement by weaving together a chain of definitions and previously proven conditional statements (e.g. a proposition). This should include exposition that explains how you are both invoking and using in context each definition and conditional statement.   We have not yet proved a formal justification for Proposition . To provide a formal justification, we will need to first establish some starting assumptions and more basic principles. Formal justification is an exercise in deductive logic. As you progress through this book, you will have increasingly more exposure to, and opportunities to provide, formal justifications of mathematical statements.  Now that we have seen our first algebraic property, it is time to look a little more carefully at important algebraic properties we will use throughout this course. Formal justifications of algebraic properties of linear combinations rest upon the algebraic properties of real numbers. Going forward, we will assume the standard algebraic properties of real numbers: associativity, identity, inverses, commutativity, and distributivity, which I collect in Definition .   Algebraic Properties of Real Numbers   Real numbers satisfy the following algebraic properties.   Addition and multiplication are associative: If , then and .  Additive and multiplicative identities: The element satisfies the property: if , then . The element satisfies the property: if , then .  There exist additive and multiplicative inverses: If , then there exists an element such that . If , then there exists an element such that .  Addition and multiplication are commutative: If , then and .  Addition and multiplication are tied together with distributivity: If , then .     You will find referencing these properties to be essential to formal justifications of mathematical statements in this book.  Here I collect some of the most import algebraic properties that we will use throughout this course.   Fundamental Algebraic Properties of Linear Combination   If and , then   (Associativity of addition)  ;  (Zero vector)  , where is the vector of all zero entries;  (Inverse vector)  , where is the vector whose entries are the negative of the entries of ;  (Commutativity of addition)  ;  (Scaling by 1)  ;  (Associativity of scaling)  ;  (Distributivity of scalar sum)  ;  (Distributivity of scaling across vector sum)  .      Each of these properties can be deduced from the algebraic properties of real numbers ( ), the definition of vector scaling ( ), and the definition of vector addition ( ). I now give a formal justification of (LC1) , associativity of addition, with symbolic equalities below.       A reflection upon our first formal justification.  Please look back at and reflect upon the formal justification I just gave for additive associativity of vectors in the proof of Proposition . Observe how I start and end with the linear combination in terms of the names of the vectors. Observe how in the middle, I unpack the vectors and use their entries and assumed properties of real numbers to find appropriate algebraically equivalent expressions. Observe how I clearly state each definition or proposition I use. Observe how it is a clear story from start to finish.    Constructing Meanings of Algebraic Properties   For each algebraic property in Proposition , pick an appropriate metaphor and provide a meaningful informal justification. Each group could be assigned a different algebraic property, and after some time preparing, groups can present to the class.     Practicing Formal Justification   In a similar way as I did for associativity of vector addition, provide formal justifications for the remaining algebraic properties of linear combination in Proposition .    Mathematics builds upon itself. After we have established a solid foundation of assumptions and definitions, we build upon it, layer upon layer, to provide the formal justifications for ever more sophisticated mathematical statements.   Practicing Formal Justification   Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .     Distributivity of scalar sums across linear combination   If and , then     Practicing (In)formal Justification   Pick an appropriate metaphor and provide a meaningful informal justification for Proposition . Use Definition , Definition , Definition , and Proposition to provide a formal justification for Proposition .    "
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
  "body": " Lines as Traveling Down a Path  In this lesson, we use our understanding of vectors and linear combination to inform how we think about lines in the plane, and then generalize to how we think about lines (and planes) in .    Lines in the plane.     Lines in  While I expect anyone taking this course to have seen lines before, it may be useful to remind you what they are and how we describe them. Lines are subsets of the plane satisfying certain geometric properties, and these subsets can be describe by certain equations.   Lines in   A line  in the plane is the set of all points that satisfy an algebraic equation of the form . This is a normal equation of a line. Using set builder notation, I may write    Let's take a moment to discuss the equations that describe the points on a line. Every line satisfies a normal equation. If the line is not vertical (i.e. ), then its points satisfy two other algebraically equivalent equations:  Slope-Intercept Equation  , where the line has slope and -intercept .  Point-Slope Equation  , where the line goes through point and has slope .  We can think of these equations as constraints that points in the plane must satisfy to lie on the given line.  Keep in mind, a line is a set of points, not one of the many equations that describe those points. Now recall that points in the plane may be understood as vectors. Can we use vectors to formulate new and productive ways to describe the points that comprise a line?    Finding vectors that describe a line   Consider the line with slope-intercept equation .  If is the coordinate of a point on , then  Name and .   Then I can think of this line via a metaphor of traveling along a path as follows:  is your starting position .  is the direction and distance you travel in 1 unit of time (i.e. velocity ).  is your elapsed time. When is positive, you can think of as what your position on the path will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past. Since here is conceptualized as time, we often replace the symbol with the symbol .  In symbols, the line can be expressed as the set of points .    The graph of the line with equation .       We can generalize our reasoning in to any line in the plane.   Parametric Vector Form of Lines in   If is a line in , then there exists vectors such that .    To begin, suppose is not vertical and has slope-intercept equation . If are the coordinates of a point on , then we may substitute for : Name and . Then . Since this is true for all , it follows that . The case when is vertical is left as an exercise.    Observe the role substitution played in both and . Using constraining equations and substituting in this way will be a reoccurring strategy throughout this course.   Parametric to Slope-Intercept Conversion   Consider the path with initial position  and travels with velocity .   Thinking of the scalar in front of as time , I mark off units of on the path, and I label the points at times , 0, 1, 2, and 3. As we range over all time, the collection of all points on the path can be expressed as In general, at time my position on the path has coordinate . Since , then . Substituting this into the equation for ,    The graph of the line with equation .       Once again, we can generalize our reasoning in to any line in the plane.    If , then the set is a line.    To show that the set is a line, I need to verify the coordinates satisfy an equation of a line ( ). Unpacking entries, . If is the coordinate of a point on , then and . If , then the first equations can be rewritten as , which can then be substituted into the second equation to get: This is the slope-intercept form of a line ( ). The case of is left as an exercise.    Revisit how in GeoGebra , Part 5, as you fix and slide , the tips of the vectors , sweeps out a line through and in the direction of .   Visualize parametrized lines in by playing with position vectors and velocity vectors at GeoGebra ID: j2pnwgwz . Observe that a different vector in the direction of will sweep out the same line, but will be at points at different \"times.\" Move the vectors and and observe how the -intercept form of the line varies.     A cartoon depicting walking down a linear path. The initial position vector and velocity vector are clearly visible.    To summarize, you should reconceptualize lines as the collection of all points in the plane reached by traveling along a path in the following way:  Begin at a given starting point, symbolized as .  Start traveling in a constant direction and constant speed, symbolized as .  Your position on this path at time can be represented with the linear combination .   Representing Lines   For each of the following lines in ,  Clearly visually sketch and label it,  Find the symbolic form not given (i.e. slope-intercept or parametric vector form)  Verbally write down, in complete sentences the meaning of the parametric equation in the language of position and steps per unit of time.         Lines in  It is with this conceptualization of lines in the plane that we may generalize to reason about lines in . We formalize this in the following definition.   Lines in and their Parametric Vector Form   If and is nonzero, then the set is a line in , symbolized in parametric vector form . Here is a parameter . If is a closed interval, then is a line segment in .     Lines as Paths of Travel   gives your starting position .  gives the direction and distance travelled in 1 unit of time (i.e. velocity ).  gives you elapsed time. When is positive, you can think of as what your position will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past.     Line in     A line in .    The line in is given by parametric vector form .   Visualize parametrized lines in at GeoGebra ID: nrp6wa5k . Move the vectors and and observe how the line visualization and line symbolization changes. Slide the parameter and observe how you \"move\" along the line.     Planes in  We now move on to generalize our reasoning to a new geometric object: a plane in . While many have a sense of what a plane is when they see it, it is another matter to make sense of it mathematically. I will provide a geometric formulation. If points, , , and in do not all lie on the same line (in the language of geometry language, are non-collinear ), then they form a triangle. Emanating from vertex are sides and . The set of all points that I can reach by traveling with velocity vectors coming from the triangle's sides is a plane. In a qualitative sense, the plane a triangle determines is the unique flat slice of that contains that triangle .   Plane in     A plane in .     Plane through 3 non-collinear points   Start at position ,  Travel with constant direction and speed for units of time,  Travel with constant direction and speed for units of time.     Non-Collinear Vectors   If are nonzero vectors and lines and are not equal, then and are non-collinear vectors.     Planes in and their Parametric Vector Form   If such that and are non-collinear, then the set of points is a plane , symbolized in parametric vector form . Here and are parameters .     Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, this plane is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . For example, to reach the point , we start at , travel units of time with constant velocity , and then units of time with constant velocity . This path is depicted in orange.     Visualize a plane in at GeoGebra ID: qg2afdpt . Move the vectors , , and to move the plane. Adjust the parameters and to reach different points on the plane.    Plane in   Below is an image of the plane in with parametric vector form:     A plane in .    Using the metaphor of travel, is the collection of all points we can reach if we start at position , travel units of time with constant velocity , and then units of time with constant velocity . Observe that fills up all of - I can reach any point in by traveling for the appropriate amounts of time with constant velocities and . For example, to reach the point , we start at the origin , travel units of time with constant velocity , and then units of time with constant velocity .    Visualize the planes (in parametric form) in at GeoGebra ID: tk8s9eut .   In multivariable calculus, you will expand on the ideas introduced here to describe parametrized surfaces and their tangent planes .    A tangent plane to a sphere in .     Visualize tangent planes to surfaces in at GeoGebra ID: mmkmzuqr .    "
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
  "body": " Lines as Paths of Travel   gives your starting position .  gives the direction and distance travelled in 1 unit of time (i.e. velocity ).  gives you elapsed time. When is positive, you can think of as what your position will be units of time in the future, and when is negative, you can think of as what your position had been units of time in the past.   "
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
  "body": " Visualize parametrized lines in at GeoGebra ID: nrp6wa5k . Move the vectors and and observe how the line visualization and line symbolization changes. Slide the parameter and observe how you \"move\" along the line.  "
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
  "body": " The Set of All Linear Combination  In this lesson, we are interested in conceptualizing and symbolizing the set of all linear combinations we can make with a predetermined, fixed collection of vectors. This set of linear combinations is useful to consider in all the contexts in which we encounter vectors and linear combination. If I have 12 boxes of cereal on my shelf, what are all the nutrition fact vectors I can make by mixing them? If my sound processor can make 400 digital pure tones, what are all the sounds I can produce by mixing them? More generally, if I have a fixed collection of vectors, what are all the linear combinations I can make with them?    What can we make with one vector in the plane?    What can we make (using linear combinations) with ? Geometrically, we get the line with parametric vector form: . Observe our starting position is the zero vector (i.e. the origin).    A line in .        What can we make with two vectors in the plane?    What can we make (using linear combinations) with and ? Algebraically, what vectors do we make as we vary ? We can make anything in the plane!    A plane in .       The collection of all possible linear combinations which can be made with is made precise by the notion of span .   Span (the noun)   If , then their span is the set of all linear combinations of . Symbolically,     The word span may seem unintuitive for you, so if you wish, via the metaphor of mixture, you can think of span as the mixture set of . Note that even if is small, is big! In fact, as long as contains a nonzero vector, is an infinite set.  Spans have very nice geometric interpretations. The span of one nonzero vector is the line , starting at the origin, with velocity : (see ). The span of two nonzero, non-collinear vectors and is the plane going through their tips and the origin. In symbols, we write this plane in parametric vector form: .   Describing Span   For each of the following sets of vectors, describe geometrically the associated span. Be sure to use geometric words.                      What can we make with two vectors in Cartesian 3-Space?    If , , and , then is every possible mixture made with and , or using set notation, Using the mixture parallelograms to visualize the mixtures, we see that will be the plane going through the three points: , , and ,    A plane in .       Visualize the span of two vectors in at GeoGebra ID: axm8hsyg .  The algebraic notation of span is very compact and enables us to efficiently communicate our thoughts about linear combinations. It is therefore important that you practice symbolizing your thoughts with this compact notation and then practice interpreting in plain language such symbolic expressions.   Symbolizing with Span   Symbolize each complete sentence using span.   Vector is a linear combination of vectors and .  There is no way to write vector as a linear combination of vectors , , and .  Everything I can make with vectors and , I can also make with vectors , , and .      Interpreting the Symbolism of Span   For each, use complete sentences, using the language of mixture, to interpret the meaning of each algebraic expression.   .  .  .  .      Algebraic Properties of Span   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .      We must provide formal justification for each of the three properties.  I will begin with the first property. To show that , I must show that the zero vector is a linear combination of the vectors in . This is easy to arrange, just take zero serving sizes of each vector! In symbols:  Next, I will justify the second property. By assumption, there exists and such that and . So   From which we deduce .  All that is left justifying the third property. This is left to you in Activity .    Practicing Formal Justification   Carefully write down a formal justification for the third property of Proposition . Be sure to carefully explain your reasoning and include references to all appropriate definitions and proven propositions. When done, share with the class.     Algebraic Properties of Span as Mixture of Mixtures  Using the metaphor of mixture, Proposition says that, if you fix a collection of ingredients, a mixture of mixtures is still just a mixture of the original ingredients.   We now come to makeability . Given a collection of vectors and another vector , we want to know if can be made by mixing vectors in . In symbols, we can make with if there exists scalars such that . Put more compactly, is makeable with if . There is no guarantee that is makeable, in which case no such scalars exist.  Via the metaphor of cooking, given a certain collection of ingredients and a desired meal, makeability asks: can we make the meal with our ingredients?  When we view vectors geometrically, given a plane in and a point in , makeability asks: does the point lie on the plane?  If a vector is makeable with , then we usually also want to know how, i.e. what scalars allow us to make that vector.   Exploring Makability   In each of the following parts, explore how you can make from the given . Can you find a way to make from ? If so, are there multiple ways or is it unique? Explain.   Consider and .  Consider and .     Observe that a way to make with S is precisely a servings vector (Definition ).   Solution Vectors   If , , and are such that , then the associated servings vector is a solution vector for making with .    If has vectors, then a solution vector for making with has list-length .   Exploring Makeability Geometrically   In this activity, you will use GeoGebra ID: twf46ake to visualize and investigate makeability in . Let , , and .    Explore. Use the visual representations provided to decide if and can be made with . Clearly explain the visual feature(s) you are using to make your determinations.  Symbolize. For each makeable vector, write down the corresponding symbolic equation. (Perform the associated computation to verify you have indeed found a solution vector.)     Solution set in .       Sometimes a single solution vector is sufficient. However, sometimes we want to collect all of them into a single set.   Solution Set   If and then the set of all solution vectors for making with can be identified with a subset of called the solution set for making with . In symbols,     If is not makeable with , then the solution set is empty , which we denote .   Symbolizing with Solution Sets   Symbolize each expression using solution sets and set notation.   .  .  There is no way to make with vectors , , and .      Interpreting the Symbolism of Solution Sets   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .     Solution sets are central objects in linear algebra and we will continue to deepen our understanding and develop tools for computing them in the lessons that come.   Span Summary  If , then following are equivalent:   You can make from ,  ,  is nonempty.    "
},
{
  "id": "chp2sec4-3",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4-3",
  "type": "Example",
  "number": "2.4.1",
  "title": "What can we make with one vector in the plane?",
  "body": " What can we make with one vector in the plane?    What can we make (using linear combinations) with ? Geometrically, we get the line with parametric vector form: . Observe our starting position is the zero vector (i.e. the origin).    A line in .      "
},
{
  "id": "chp2sec4-4",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4-4",
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
  "id": "chp2sec4-10",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4-10",
  "type": "Example",
  "number": "2.4.5",
  "title": "What can we make with two vectors in Cartesian 3-Space?",
  "body": " What can we make with two vectors in Cartesian 3-Space?    If , , and , then is every possible mixture made with and , or using set notation, Using the mixture parallelograms to visualize the mixtures, we see that will be the plane going through the three points: , , and ,    A plane in .      "
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
  "id": "prop-span_has_subspace_properties",
  "level": "2",
  "url": "chp2sec4.html#prop-span_has_subspace_properties",
  "type": "Proposition",
  "number": "2.4.8",
  "title": "Algebraic Properties of Span.",
  "body": " Algebraic Properties of Span   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .    "
},
{
  "id": "chp2sec4-16",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4-16",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " We must provide formal justification for each of the three properties.  I will begin with the first property. To show that , I must show that the zero vector is a linear combination of the vectors in . This is easy to arrange, just take zero serving sizes of each vector! In symbols:  Next, I will justify the second property. By assumption, there exists and such that and . So   From which we deduce .  All that is left justifying the third property. This is left to you in Activity .  "
},
{
  "id": "activity-justify_span_is_subspace",
  "level": "2",
  "url": "chp2sec4.html#activity-justify_span_is_subspace",
  "type": "Activity",
  "number": "2.4.9",
  "title": "Practicing Formal Justification.",
  "body": " Practicing Formal Justification   Carefully write down a formal justification for the third property of Proposition . Be sure to carefully explain your reasoning and include references to all appropriate definitions and proven propositions. When done, share with the class.   "
},
{
  "id": "chp2sec4-18",
  "level": "2",
  "url": "chp2sec4.html#chp2sec4-18",
  "type": "Insight",
  "number": "2.4.10",
  "title": "Algebraic Properties of Span as Mixture of Mixtures.",
  "body": " Algebraic Properties of Span as Mixture of Mixtures  Using the metaphor of mixture, Proposition says that, if you fix a collection of ingredients, a mixture of mixtures is still just a mixture of the original ingredients.  "
},
{
  "id": "activity-makeability1",
  "level": "2",
  "url": "chp2sec4.html#activity-makeability1",
  "type": "Activity",
  "number": "2.4.11",
  "title": "Exploring Makability.",
  "body": " Exploring Makability   In each of the following parts, explore how you can make from the given . Can you find a way to make from ? If so, are there multiple ways or is it unique? Explain.   Consider and .  Consider and .    "
},
{
  "id": "def-solution_vectors",
  "level": "2",
  "url": "chp2sec4.html#def-solution_vectors",
  "type": "Definition",
  "number": "2.4.12",
  "title": "Solution Vectors.",
  "body": " Solution Vectors   If , , and are such that , then the associated servings vector is a solution vector for making with .   "
},
{
  "id": "activity-exploring_makeability_geometrically",
  "level": "2",
  "url": "chp2sec4.html#activity-exploring_makeability_geometrically",
  "type": "Activity",
  "number": "2.4.13",
  "title": "Exploring Makeability Geometrically.",
  "body": " Exploring Makeability Geometrically   In this activity, you will use GeoGebra ID: twf46ake to visualize and investigate makeability in . Let , , and .    Explore. Use the visual representations provided to decide if and can be made with . Clearly explain the visual feature(s) you are using to make your determinations.  Symbolize. For each makeable vector, write down the corresponding symbolic equation. (Perform the associated computation to verify you have indeed found a solution vector.)     Solution set in .      "
},
{
  "id": "def-solution_set",
  "level": "2",
  "url": "chp2sec4.html#def-solution_set",
  "type": "Definition",
  "number": "2.4.14",
  "title": "Solution Set.",
  "body": " Solution Set   If and then the set of all solution vectors for making with can be identified with a subset of called the solution set for making with . In symbols,    "
},
{
  "id": "activity-symbolizing_with_solution_sets",
  "level": "2",
  "url": "chp2sec4.html#activity-symbolizing_with_solution_sets",
  "type": "Activity",
  "number": "2.4.15",
  "title": "Symbolizing with Solution Sets.",
  "body": " Symbolizing with Solution Sets   Symbolize each expression using solution sets and set notation.   .  .  There is no way to make with vectors , , and .    "
},
{
  "id": "activity-interpreting_the_symbolism_of_solution_sets",
  "level": "2",
  "url": "chp2sec4.html#activity-interpreting_the_symbolism_of_solution_sets",
  "type": "Activity",
  "number": "2.4.16",
  "title": "Interpreting the Symbolism of Solution Sets.",
  "body": " Interpreting the Symbolism of Solution Sets   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .    "
},
{
  "id": "summary-span_summary",
  "level": "2",
  "url": "chp2sec4.html#summary-span_summary",
  "type": "Insight",
  "number": "2.4.17",
  "title": "Span Summary.",
  "body": " Span Summary  If , then following are equivalent:   You can make from ,  ,  is nonempty.   "
},
{
  "id": "chp2sec5",
  "level": "1",
  "url": "chp2sec5.html",
  "type": "Lesson",
  "number": "2.5",
  "title": "Dependency",
  "body": " Dependency  A collection has redundancy if one of the vectors can be made from the others. Suppose I have on my cereal shelf two boxes of Sugar-Os and one box of Fiber Flakes. Even though I have three boxes, all I need to mix my breakfast is two of them - the second box of Sugar-Os does not enable me to make new mixtures - it is redundant.   Linear Dependence and Linear Independence   If is a (nonempty) finite subset of vectors such that one of its vectors can be written as a linear combination of its other vectors, then the subset is linearly dependent . In symbols, is dependent if there exists an and, for each , a number , such that   This is a dependency equation for . If no such equation exist, then is linearly independent .    Throughout this text, I may sometime refer to collections of vectors as being dependent or independent , by which I will always mean linearly dependent and linearly independent, respectively.  Observe that the compact notation of span allows use to rewrite Definition succinctly: A collection is dependent if there exists a vector such that   Justify for yourself that if the zero vector lies in , then Definition implies that is dependent. For this reason, when we consider questions of dependence, we often begin by assuming our subset of vectors are all nonzero, which I may symbolize as .  If you are only considering two nonzero vectors , then they are linearly dependent if and only if they are nonzero scalar multiples of each other, i.e. for some nonzero .   If you have three or more vectors, dependency is more nuanced. For example, both collections are dependent. In the first collection, the third vector is a scalar multiple of the first vector, hence .   In the second collection, no vector is a scalar multiple of the others, however, the third vector is a sum of the first two .   Identifying and removing redundancy   For each of the following sets of vectors, determine if it is dependent. If it is dependent, what can you throw away while preserving span?     Independence as Distinct Directions  Geometrically, dependent means that one of the vectors lies in the span of the other vectors. Conversely, if the collection is independent, every vector points in truly distinct directions.   The concept of independence allows us to generalize non-collinearity (Definition ) and planes (Definition ).   -Planes in and their Parametric Vector Form   If and the -vectors are independent, then the set of points is a -plane , symbolized in parametric vector form . Here are parameters .     -Plane as Traveling Instructions  If and the -vectors are independent, then the -plane is the set of all points in space that can be reached by the following travel directions:   Start at position ,  Travel with constant velocity for units of time,  Travel with constant direction and speed for units of time   Travel with constant velocity for units of time.    -planes play an important and reoccurring role in linear algebra.  If , -planes are lines. If , -planes are planes. While it is difficult to geometrically visualize -planes for , it is still productive to keep the pictures of lines (e.g. Example ) and planes (e.g. Example ) in our minds as a metaphor for -planes.  We may use span to condense of the notation for -planes: if , then we may write . In this way, we may then think about -planes as spans which have been translated by .  We may now reason about independent vectors, but we will not have the computational tools to check if a collection of vectors is independent until Chapter XYZ. However, if a collection of vectors satisfies an easy verifiable condition I call separated, then we are guaranteed that they are independent.   Determining Independence   Come up with an explanation as why each set below is independent: Can you summarize your argument with a single observation?    The property that the above collections share is formalized in the following definition.   Separated   If is a collection of vectors with the property that for each vector , there exists an index such that the -entry of is nonzero, and the entry of each of the other vectors in is 0, then is separated .     Separated implies independent   If is separated, then is independent.     OPS   Even though being separated may seem very restrictive, certain vectors we will obtain in Chapter XYZ by interpreting the reduced row echelon form of a matrix will be separated, and hence we will be assured independence.  An algebraically useful reformulation of dependency is to conceptualize it in terms of making the zero vector. We can always make the zero mixture by using zero servings of each vector. Dependency can be understood as being able to make the zero mixture by using some nonzero servings.   Dependency as making the zero vector in nontrivial ways.   If , then is dependent if and only if there exists numbers , at least one of which is not zero , such that .     This is an if-and-only-if proposition. This means that I am claiming that the two statements are equivalent and to justify this proposition, I need to justify how each statement implies the other.  To begin, Suppose the collection is dependent. Then, by Definition , there exists an and, for each , a number , such that   By moving to the other side of the equation, and setting , then I have produced an equation   where by construction, at least one of the scalars is nonzero. This completes this implication.  Now suppose that there exists numbers , at least one of which is not zero, such that . By assumption, at least one of the scalars is nonzero. Let denote the first nonzero scalar. Since is nonzero, so is . Then I may move to the other side of the equation, and by dividing by , have produced an and, for each , a number , such that   This completes this implication.   As you can see from the proof of Proposition , we can easily move between the scalars that allow us to write a dependency equation and the scalars that allow us to make zero. They contain the same information, but for algebraic reasons, we will often focus on the scalars that allow us to make zero. These scalars contain important information about our subset, and, as it is useful to name objects that we wish to reason about, we form and name the associated servings vector.    Null Vectors   If and are such that , then the associated servings vector is a null The word null means being associated to zero vector for .    If has vectors, then a null vector has list-length , or in symbols, if is a null vector for , then . Observe that a null vector is simply a solution vector for making zero (Definition ).   Visualizing Null Vectors   Here I investigate null vectors for   I know from Euclidean geometry that if I uniformly scale the plane, then I create similar triangles. I wonder if this can help me find new null vectors?     Exploring Null Vectors   In this activity, you will use GeoGebra ID: nd6qasfy to visualize and investigate null vectors for subsets of three vectors in . Begin with .   Explore. Following the strategy in Example , move the points , , and to form a closed triangle. (Hint: I have chosen so that you can find at least one set of nonzero, integers null vectors.)  Symbolize. Write down the corresponding symbolic equation using a null vector you found and the columns of the vectors in . (Perform the associated computation to verify you have indeed found a null vector.)  Interpret. What do your findings say about the collection in terms of redundancy? Explain.  Explore. So far, you should have found one null vector with of nonzero integer entries. Can you find more? How? (Hint: Consider the question at the end of Example .)  Repeated Reasoning. Repeat for the new set .  Generalize. What happens when has 4 vectors? Using tip-to-tail visualization, what shape are we looking for to find a null vector? How about many vectors? Explain.     To summarize up to this point, a null vector is a servings vector for making zero. The zero servings vector is always a null vector. The existence of a nonzero null vector is logically equivalent to our vectors being dependent.  Now that we have internalized the notion of a single null vector, we may start to reason about the collection of all null vectors.   Null Space of   If , then the set of all null vectors of is a subset of called the null space of . In symbols, using set notation,    Observe that the null space is precisely the solution set for making zero, or in symbols, .  Much like span, the compact symbolism of null space is very efficient, but it is easy to get lost in the symbolism. We must practice symbolizing our thoughts on terms of null space, and conversely, practice interpreting the symbolism of null space in context.  For example, we can compactly summarize our observations in Example with:   Symbolizing with Null Space   Symbolize each expression using null space and set notation.   .  is a nonzero vector.  There is no nontrivial way to make the zero vector with vectors , , and .      Interpreting the Symbolism of Null Space   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .     Make sure that you understand how each of the following statement are equivalent.   Dependency Summary  If , then following are equivalent:   is dependent,  There exists such that ,  You can make from in a nontrivial way,  has a nonzero null vector.  is nonzero.    I encourage you to continue reasoning about (in)dependence in the language of redundancy and in the language of distinct directions. Be prepared to algebraically work with redundancy as making zero in nontrivial ways.  Much like the span of , , the null space of has useful algebraic properties (cf Proposition ).   Algebraic Properties of Null Spaces   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .      The logical steps here are similar to those in the proof of Proposition . We must provide formal justification for each of the three properties.  1. The non-empty property is verified with a direct computation: the zero servings vector will always give a zero mixture   2. Suppose that . Unpacking names and using the definition of vector addition ( ) . Observe,   Hence is also a null vector.  3. I leave this last formal justification to you in your homework in Problem XYZ.   We will continue to work with null spaces throughout this course, and will develop the computational tools to find, describe, and analyze null spaces in Chapter XYZ.  "
},
{
  "id": "def-dependence",
  "level": "2",
  "url": "chp2sec5.html#def-dependence",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Linear Dependence and Linear Independence.",
  "body": " Linear Dependence and Linear Independence   If is a (nonempty) finite subset of vectors such that one of its vectors can be written as a linear combination of its other vectors, then the subset is linearly dependent . In symbols, is dependent if there exists an and, for each , a number , such that   This is a dependency equation for . If no such equation exist, then is linearly independent .   "
},
{
  "id": "activity-identifying_and_removing_redundancy",
  "level": "2",
  "url": "chp2sec5.html#activity-identifying_and_removing_redundancy",
  "type": "Activity",
  "number": "2.5.2",
  "title": "Identifying and removing redundancy.",
  "body": " Identifying and removing redundancy   For each of the following sets of vectors, determine if it is dependent. If it is dependent, what can you throw away while preserving span?   "
},
{
  "id": "chp2sec5-11",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-11",
  "type": "Insight",
  "number": "2.5.3",
  "title": "Independence as Distinct Directions.",
  "body": " Independence as Distinct Directions  Geometrically, dependent means that one of the vectors lies in the span of the other vectors. Conversely, if the collection is independent, every vector points in truly distinct directions.  "
},
{
  "id": "def-kplane",
  "level": "2",
  "url": "chp2sec5.html#def-kplane",
  "type": "Definition",
  "number": "2.5.4",
  "title": "<span class=\"process-math\">\\(k\\)<\/span>-Planes in <span class=\"process-math\">\\(\\R^m\\)<\/span> and their Parametric Vector Form.",
  "body": " -Planes in and their Parametric Vector Form   If and the -vectors are independent, then the set of points is a -plane , symbolized in parametric vector form . Here are parameters .   "
},
{
  "id": "chp2sec5-14",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-14",
  "type": "Insight",
  "number": "2.5.5",
  "title": "<span class=\"process-math\">\\(k\\)<\/span>-Plane as Traveling Instructions.",
  "body": " -Plane as Traveling Instructions  If and the -vectors are independent, then the -plane is the set of all points in space that can be reached by the following travel directions:   Start at position ,  Travel with constant velocity for units of time,  Travel with constant direction and speed for units of time   Travel with constant velocity for units of time.   "
},
{
  "id": "activity-sep_to_ind",
  "level": "2",
  "url": "chp2sec5.html#activity-sep_to_ind",
  "type": "Activity",
  "number": "2.5.6",
  "title": "Determining Independence.",
  "body": " Determining Independence   Come up with an explanation as why each set below is independent: Can you summarize your argument with a single observation?   "
},
{
  "id": "def-separated",
  "level": "2",
  "url": "chp2sec5.html#def-separated",
  "type": "Definition",
  "number": "2.5.7",
  "title": "Separated.",
  "body": " Separated   If is a collection of vectors with the property that for each vector , there exists an index such that the -entry of is nonzero, and the entry of each of the other vectors in is 0, then is separated .   "
},
{
  "id": "prop-sep_implies_indep",
  "level": "2",
  "url": "chp2sec5.html#prop-sep_implies_indep",
  "type": "Proposition",
  "number": "2.5.8",
  "title": "Separated implies independent.",
  "body": " Separated implies independent   If is separated, then is independent.   "
},
{
  "id": "chp2sec5-23",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-23",
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
  "number": "2.5.9",
  "title": "Dependency as making the zero vector in nontrivial ways..",
  "body": " Dependency as making the zero vector in nontrivial ways.   If , then is dependent if and only if there exists numbers , at least one of which is not zero , such that .   "
},
{
  "id": "chp2sec5-27",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-27",
  "type": "Proof",
  "number": "2.5.2",
  "title": "",
  "body": " This is an if-and-only-if proposition. This means that I am claiming that the two statements are equivalent and to justify this proposition, I need to justify how each statement implies the other.  To begin, Suppose the collection is dependent. Then, by Definition , there exists an and, for each , a number , such that   By moving to the other side of the equation, and setting , then I have produced an equation   where by construction, at least one of the scalars is nonzero. This completes this implication.  Now suppose that there exists numbers , at least one of which is not zero, such that . By assumption, at least one of the scalars is nonzero. Let denote the first nonzero scalar. Since is nonzero, so is . Then I may move to the other side of the equation, and by dividing by , have produced an and, for each , a number , such that   This completes this implication.  "
},
{
  "id": "def-null_scalars",
  "level": "2",
  "url": "chp2sec5.html#def-null_scalars",
  "type": "Definition",
  "number": "2.5.10",
  "title": "Null Vectors.",
  "body": " Null Vectors   If and are such that , then the associated servings vector is a null The word null means being associated to zero vector for .   "
},
{
  "id": "ex-visualizing_nullscalars",
  "level": "2",
  "url": "chp2sec5.html#ex-visualizing_nullscalars",
  "type": "Example",
  "number": "2.5.11",
  "title": "Visualizing Null Vectors.",
  "body": " Visualizing Null Vectors   Here I investigate null vectors for   I know from Euclidean geometry that if I uniformly scale the plane, then I create similar triangles. I wonder if this can help me find new null vectors?   "
},
{
  "id": "activity-exploring_null_vectors",
  "level": "2",
  "url": "chp2sec5.html#activity-exploring_null_vectors",
  "type": "Activity",
  "number": "2.5.12",
  "title": "Exploring Null Vectors.",
  "body": " Exploring Null Vectors   In this activity, you will use GeoGebra ID: nd6qasfy to visualize and investigate null vectors for subsets of three vectors in . Begin with .   Explore. Following the strategy in Example , move the points , , and to form a closed triangle. (Hint: I have chosen so that you can find at least one set of nonzero, integers null vectors.)  Symbolize. Write down the corresponding symbolic equation using a null vector you found and the columns of the vectors in . (Perform the associated computation to verify you have indeed found a null vector.)  Interpret. What do your findings say about the collection in terms of redundancy? Explain.  Explore. So far, you should have found one null vector with of nonzero integer entries. Can you find more? How? (Hint: Consider the question at the end of Example .)  Repeated Reasoning. Repeat for the new set .  Generalize. What happens when has 4 vectors? Using tip-to-tail visualization, what shape are we looking for to find a null vector? How about many vectors? Explain.    "
},
{
  "id": "def-nullspaceS",
  "level": "2",
  "url": "chp2sec5.html#def-nullspaceS",
  "type": "Definition",
  "number": "2.5.13",
  "title": "Null Space of <span class=\"process-math\">\\(S\\)<\/span>.",
  "body": " Null Space of   If , then the set of all null vectors of is a subset of called the null space of . In symbols, using set notation,   "
},
{
  "id": "activity-symbolizing_with_null_space",
  "level": "2",
  "url": "chp2sec5.html#activity-symbolizing_with_null_space",
  "type": "Activity",
  "number": "2.5.14",
  "title": "Symbolizing with Null Space.",
  "body": " Symbolizing with Null Space   Symbolize each expression using null space and set notation.   .  is a nonzero vector.  There is no nontrivial way to make the zero vector with vectors , , and .    "
},
{
  "id": "activity-interpreting_null_space",
  "level": "2",
  "url": "chp2sec5.html#activity-interpreting_null_space",
  "type": "Activity",
  "number": "2.5.15",
  "title": "Interpreting the Symbolism of Null Space.",
  "body": " Interpreting the Symbolism of Null Space   Use complete sentences and the language of mixture to interpret the meaning of each algebraic expression.   .  .  .    "
},
{
  "id": "summary-dependency",
  "level": "2",
  "url": "chp2sec5.html#summary-dependency",
  "type": "Insight",
  "number": "2.5.16",
  "title": "Dependency Summary.",
  "body": " Dependency Summary  If , then following are equivalent:   is dependent,  There exists such that ,  You can make from in a nontrivial way,  has a nonzero null vector.  is nonzero.   "
},
{
  "id": "prop-nullscalars_has_subspace_properties",
  "level": "2",
  "url": "chp2sec5.html#prop-nullscalars_has_subspace_properties",
  "type": "Proposition",
  "number": "2.5.17",
  "title": "Algebraic Properties of Null Spaces.",
  "body": " Algebraic Properties of Null Spaces   If , and   (Non-empty.) if denotes the zero vector, then ;  (Closed under addition.) if , then ;  (Closed under scaling.) if and , then .    "
},
{
  "id": "chp2sec5-47",
  "level": "2",
  "url": "chp2sec5.html#chp2sec5-47",
  "type": "Proof",
  "number": "2.5.3",
  "title": "",
  "body": " The logical steps here are similar to those in the proof of Proposition . We must provide formal justification for each of the three properties.  1. The non-empty property is verified with a direct computation: the zero servings vector will always give a zero mixture   2. Suppose that . Unpacking names and using the definition of vector addition ( ) . Observe,   Hence is also a null vector.  3. I leave this last formal justification to you in your homework in Problem XYZ.  "
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
