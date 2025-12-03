// Hygiene & Nutrition MCQ – Combined Quiz App
// Topics:
// 1. Nutrition and Health (95 questions)
// 2. The hygienic value of Vitamins and Minerals (89 questions)
// 3. Food Hygiene and foodborne diseases (31 questions)

// Topic definitions
const allTopics = [
  { id: 1, name: "Nutrition & Health", questionCount: 95 },
  { id: 2, name: "Vitamins & Minerals", questionCount: 89 },
  { id: 3, name: "Food Hygiene", questionCount: 31 }
];

// QUIZ DATA BANK - All 215 Questions
const quizDataBank = {
  1: [
    {q: "The protein content of cow's milk is", o: ["1.2gm%", "2.4gm%", "3.5 gm%", "4.2 gm%"], c: [2], t: "s"},
    {q: "The caloric yield per egg is", o: ["50 Kcal", "60 Kcal", "70 Kcal", "80 Kcal"], c: [2], t: "s"},
    {q: "The cooking oil with highest amount of Essential fatty acid is", o: ["Groundnut oil", "Sunflower oil", "Coconut oil", "Castor oil"], c: [1], t: "s"},
    {q: "Toxin causing Epidemic dropsy is", o: ["Arginine", "Sanguinarine", "BOAA", "Pyruvin"], c: [1], t: "s"},
    {q: "The ratio of Casein to albumin in Human milk is", o: ["1.1", "2.1", "1:2", "7:1"], c: [3], t: "s"},
    {q: "The litre of cow's milk provides____mg of calcium", o: ["400", "800", "1200", "1600"], c: [2], t: "s"},
    {q: "Additional protein requirement during lactation per day is", o: ["5g", "10g", "14g", "25g"], c: [3], t: "s"},
    {q: "All are essential fatty acids except", o: ["Oleic acid", "Linoleic acid", "linolenic acid", "Arachidonic acid"], c: [0], t: "s"},
    {q: "The suggested fat intake is______per cent of total energy", o: ["10", "20", "30", "40"], c: [1], t: "s"},
    {q: "Proximate principles refers to all except", o: ["Proteins", "Carbohydrates", "Fats", "Minerals"], c: [3], t: "s"},
    {q: "The protein content in 100 g of pulse is", o: ["7-12%", "13-20%", "22-24%", "40%"], c: [2], t: "s"},
    {q: "The protein content of 100 g of Soyabean", o: ["7 - 12%", "13 - 20%", "22 - 24%", "40%"], c: [3], t: "s"},
    {q: "The protein content of 100 g of cereals is", o: ["7 - 12%", "13 - 20%", "22 - 24%", "40%"], c: [0], t: "s"},
    {q: "The amino acid which interferes with conversion of tryptophan to niacin is", o: ["Leucine", "Isoleucine", "Lysine", "Cystine"], c: [0], t: "s"},
    {q: "The percentage of ingested protein absorbed after digestion is given by", o: ["Digestibility co-efficient", "Biological value", "Protein efficiency ratio", "Net protein utilization"], c: [0], t: "s"},
    {q: "Percentage of nitrogen retained, out of nitrogen absorbed is", o: ["Digestibility coefficient", "Biological value", "Protein efficiency ratio", "Net protein utilization"], c: [1], t: "s"},
    {q: "Product of digestibility coefficient and biological value is", o: ["Protein efficiency ratio", "Net protein utilization", "Protein absorption ration", "Protein utilization rate"], c: [1], t: "s"},
    {q: "All are essential aminoacids except", o: ["Leucine", "Isoleucine", "Phenylalanine", "Glycine"], c: [3], t: "s"},
    {q: "All the following proteins are biologically complete except", o: ["Egg", "Milk", "Soyabean", "Fish"], c: [2], t: "s"},
    {q: "The term 'reference protein' is used for", o: ["Egg", "Milk", "Fish", "Meat"], c: [0], t: "s"},
    {q: "Cereal proteins are deficient in", o: ["Methionine", "Lysine", "Phenylalanine", "Leucine"], c: [1], t: "s"},
    {q: "Pulse proteins are deficient in", o: ["Methionine", "Lysine", "Threorine", "Leucine"], c: [0], t: "s"},
    {q: "Limiting amino acids are", o: ["Methionine", "Lysine", "Threorine", "All of the above"], c: [3], t: "s"},
    {q: "The NPU of protein in Indian diet varies between", o: ["10-20", "30-50", "50-80", "80-100"], c: [2], t: "s"},
    {q: "Recommended protein intake per day for Indian adult is", o: ["1 g/kg", "1.5 g/kg", "1.8 g/kg", "2.3 g/kg"], c: [0], t: "s"},
    {q: "Recommended protein intake per day for infant 0-3 months is", o: ["1 g/kg", "1.5 g/kg", "1.8 g/kg", "2.3 g/kg"], c: [3], t: "s"},
    {q: "Additional requirement of protein during pregnancy is", o: ["5 g", "10 g", "14 g", "25 g"], c: [2], t: "s"},
    {q: "Adult requirement of Sodium per day is", o: ["5mg", "5-10mg", "10-15mg", "20mg"], c: [2], t: "s"},
    {q: "The number of essential trace elements is", o: ["5", "14", "21", "30"], c: [1], t: "s"},
    {q: "All the following are considered as trace elements except", o: ["Iron", "Copper", "Magnesium", "Manganese"], c: [2], t: "s"},
    {q: "Suggested iron intake per day during pregnancy is", o: ["24mg", "32mg", "40mg", "48mg"], c: [2], t: "s"},
    {q: "The weight of an Indian reference man is", o: ["45 kg", "50 kg", "55 kg", "60 kg"], c: [2], t: "s"},
    {q: "The weight of an Indian reference woman is", o: ["45 kg", "50 kg", "55 kg", "60 kg"], c: [0], t: "s"},
    {q: "The caloric equivalent of 1 consumption unit is", o: ["2000 Kcal", "2400 Kcal", "2800 Kcal", "3000 Kcal"], c: [1], t: "s"},
    {q: "The additional daily caloric requirement during pregnancy is", o: ["300 Kcal", "400 Kcal", "500 Kcal", "550 Kcal"], c: [0], t: "s"},
    {q: "The additional calorie requirement during 3rd month of lactation is", o: ["300 Kcal", "400 Kcal", "500 Kcal", "550 Kcal"], c: [3], t: "s"},
    {q: "The additional calorie requirement during 6-12 months of lactation is", o: ["300 Kcal", "400 Kcal", "500 Kcal", "550 Kcal"], c: [1], t: "s"},
    {q: "The calorie requirement of infant under 3 months of lactation is", o: ["120/kg", "115/kg", "110/kg", "105/kg"], c: [0], t: "s"},
    {q: "Calorie yield per 100 g of fresh cow's milk is", o: ["60", "65", "75", "80"], c: [1], t: "s"},
    {q: "The fat content in human milk (100 g) is", o: ["7g", "3.8g", "4g", "3.1g"], c: [3], t: "s"},
    {q: "The chief protein in milk is", o: ["Casein", "Lactalbumin", "Lactoglobulin", "Albumin"], c: [0], t: "s"},
    {q: "All the feature of Kwashiorkar except", o: ["Skin changes", "Mental alertness", "Edema", "Flag sign"], c: [1], t: "s"},
    {q: "Milk has high content of all minerals except", o: ["Calcium", "Phosphorus", "Iron", "Sodium"], c: [2], t: "s"},
    {q: "Fat content is highest in which animal protein?", o: ["Goat meat", "Fish", "Egg", "Liver"], c: [2], t: "s"},
    {q: "Trypsin inhibitor is present in", o: ["Hen egg", "Duck egg", "Milk", "Fish"], c: [1], t: "s"},
    {q: "Exclusive breast feeding is recommended upto", o: ["1 - 3 months", "4 - 6 months", "6 - 9 months", "1 year"], c: [1], t: "s"},
    {q: "All are principles in formulating mid day meal except", o: ["Low cost", "Substitute to home diet", "Easily prepared", "Frequent change of menu"], c: [1], t: "s"},
    {q: "The mid day meal should supply at least___of total energy requirement", o: ["One fourth", "One third", "Half", "Two third"], c: [1], t: "s"},
    {q: "The midday meal should provide at least__protein requirement per day", o: ["One third", "Half", "Two third", "One fourth"], c: [1], t: "s"},
    {q: "Milk should be covered so as to prevent decomposition of", o: ["Calcium", "Vitamin B1", "Riboflavin", "Folic acid"], c: [2], t: "s"},
    {q: "The energy supplied by 1 gm of protein is", o: ["1Kcal", "2 Kcal", "3 Kcal", "4 Kcal"], c: [3], t: "s"},
    {q: "All the following proteins are biologically complete except", o: ["Egg", "Cheese", "Pulses", "Fish"], c: [2], t: "s"},
    {q: "Of the following, which is an essential amino acid?", o: ["Glycine", "Lysine", "Arginine", "Serine"], c: [1], t: "s"},
    {q: "All are true regarding protein metabolism except", o: ["Have to be replaced every year", "Re-utilization of amino acid contributes very little", "Amount of body protein is maintained constant", "For maximum utilization, calorie intake should be adequate"], c: [1], t: "s"},
    {q: "Generally vegetable oil have low percentage of saturated fatty acid except", o: ["Palm oil", "Cotton seed oil", "Groundnut oil", "Soya bean oil"], c: [0], t: "s"},
    {q: "In which of the following vegetable oil, polyunsaturated fatty acid is lowest", o: ["Coconut oil", "Palm oil", "Soya bean oil", "Sunflower oil"], c: [0], t: "s"},
    {q: "The oil of animal origin with high polyunsaturated fatty acid is", o: ["Meat", "Milk fat", "Fish", "All of the above"], c: [2], t: "s"},
    {q: "The dietary source of Arachidonic acid include all except", o: ["Milk", "Meat", "Egg", "Soyabean"], c: [3], t: "s"},
    {q: "Soyabean oil and leafy green provide source for which EFA?", o: ["Linoleic", "Linolenic", "Arachidonic", "Eichosapentaenoic acid"], c: [1], t: "s"},
    {q: "All are true regarding essential fatty acid except", o: ["Can be derived only from food", "Linoleic acid is the most important EFA", "Not all polyunsaturated fatty acids are EFA", "Vegetable oil are a poor source of linoleic acid"], c: [3], t: "s"},
    {q: "Food content the following elements", o: ["Protein", "Fats", "Carbohydrate", "Minerals"], c: [0, 1, 2, 3], t: "m"},
    {q: "Point out the test (gustatory) elements", o: ["Carbohydrate", "Organic acids", "Ether", "Dye"], c: [1, 2, 3], t: "m"},
    {q: "Point out the alien (foreigner) elements in food", o: ["Trace concentration of fertilizers", "Radioactive elements", "Heavy metals salts", "Nitrozamine"], c: [1, 2, 3], t: "m"},
    {q: "The main goals of hygiene of nutrition are", o: ["Studying the quality and quantity of food", "Cultivation the measures to increase the value of the food", "Cultivation the methods to control the quality of foods", "Providing the measures against incidence of food poisoning"], c: [0, 1, 2, 3], t: "m"},
    {q: "Nutrition must be", o: ["Healthy", "Rational", "Prophylactic", "Individual"], c: [0, 1, 2, 3], t: "m"},
    {q: "Point out the parameters by which may characterise the rational food", o: ["Physiological standard norm", "Daily requirement", "Daily regime"], c: [0, 1, 2], t: "m"},
    {q: "Which of the following metals its concentration controlled by international food trade", o: ["Antimony", "Iodine", "Floride", "Chromium"], c: [3], t: "s"},
    {q: "The following are source of energy", o: ["Proteins", "Fats", "Minerals", "Vitamins"], c: [1], t: "s"},
    {q: "The total number of essential amino acids for adults is", o: ["9", "15", "12"], c: [0], t: "s"},
    {q: "The essential amino acids are", o: ["Tryptophane", "Lysine", "Tyrosine"], c: [0, 1], t: "m"},
    {q: "All of the following are source of proteins", o: ["Egg", "Milk", "Fish", "Soybean"], c: [0, 1, 2, 3], t: "m"},
    {q: "Cereal proteins are deficient in", o: ["Lysine", "Leucine", "Tryptophan"], c: [0, 2], t: "m"},
    {q: "The saturated fatty acids are", o: ["Palmitic acid", "Oleic acid", "Stearic acid"], c: [0, 2], t: "m"},
    {q: "Which of the following is rich in Linoleic acid", o: ["Sunflower oil", "Soyabean", "Coconut"], c: [0, 1], t: "m"},
    {q: "Daily requirement of protein for adults is", o: ["0.7 gm/kg", "1.2 gm/kg", "2.3 gm/kg"], c: [1], t: "s"},
    {q: "The biological role of proteins", o: ["To take part in hormones synthesis", "To take part in enzyme synthesis", "To take part in antibody synthesis"], c: [0, 1, 2], t: "m"},
    {q: "Which of the following is rich with proteins", o: ["Grains", "Meat", "Fish", "Vegetables"], c: [1, 2], t: "m"},
    {q: "The % of animal protein in daily requirement is", o: ["For adults not less than 50%", "For children's not less than 70%", "For children's not less than 60%"], c: [1], t: "s"},
    {q: "The biological function of fats", o: ["As a source of energy", "As a source of vitamin B", "As a source of fat soluble vitamins"], c: [0, 2], t: "m"},
    {q: "Which of the following is rich in saturated fatty acids", o: ["Butter", "Fish liver oil", "Sunflower oil"], c: [0], t: "s"},
    {q: "The recommended daily intake of vegetables oil is", o: ["10%-15%", "25%-30%", "40%"], c: [1], t: "s"},
    {q: "Shortage of the fats in the body cause", o: ["Weakness of the immune mechanism", "Disturbance of the nervous signals flow", "Weakness of internal organs protect on self (kidney)"], c: [1, 2], t: "m"},
    {q: "The biological functions of carbohydrate", o: ["Source of energy", "Formation of bones and tissues", "Source of vitamin C"], c: [0, 1], t: "m"},
    {q: "Biological role of glycogen is", o: ["Regulate the blood sugar level", "As a reserve of carbohydrate"], c: [0, 1], t: "m"},
    {q: "Biological role of cellulose are", o: ["Stimulate the intestinal peristaltic", "Depress the intestinal micro-flora", "Adsorb the sterins"], c: [0, 2], t: "m"},
    {q: "Point out the sources of cholesterol", o: ["Vegetable oil", "Brain", "Fish paste", "Chickens eggs"], c: [3], t: "s"},
    {q: "WHO define the following as a diseases of civilisation", o: ["Vitamin C shortage (hypovitamin)", "Vitamin B1 shortage", "Excess of carbohydrate in food"], c: [0, 2], t: "m"},
    {q: "In milk. Main protein is", o: ["Casein", "Lactglobulin", "Lactalbumin"], c: [0], t: "s"},
    {q: "Carbohydrate present in milk is", o: ["Galactose", "Fructose", "Lactose"], c: [2], t: "s"},
    {q: "Milk is content", o: ["vit. D", "vit. C", "Protein", "Vit. A"], c: [0, 2, 3], t: "m"},
    {q: "The % of protein in cow's milk is", o: ["1.4 gm", "More than 4%", "About 3.4%"], c: [2], t: "s"},
    {q: "100 gm. Of milk gives", o: ["90 Kcal", "67 Kcal", "30 Kcal"], c: [1], t: "s"},
    {q: "The methods for pasteurisation of milk are", o: ["Long term method", "Ultra high temperature method", "Instant term time method"], c: [0, 1, 2], t: "m"},
    {q: "The recommended temperature to preserve of milk", o: ["+12−+15°", "+4−+6°", "0-2°"], c: [1], t: "s"},
    {q: "Which of the following is rich with proteins", o: ["Grains", "Meat", "Fish", "Vegetables"], c: [1, 2], t: "m"}
  ],
  2: [
    {q: "Pellagra is widely prevalent in", o: ["W. Bengal", "AP", "UP", "Bihar"], c: [1], t: "s"},
    {q: "Jaggery is rich in", o: ["Folic acid", "Iron", "Vitamin C", "Phosphorus"], c: [1], t: "s"},
    {q: "Highest source of Vitamin C is", o: ["Orange", "Amla", "Lemon", "Grapes"], c: [1], t: "s"},
    {q: "Highest source of Vitamin A is seen in", o: ["Cod liver oil", "Green leafy vegetable", "Papaya", "Carrot"], c: [0], t: "s"},
    {q: "Daily requirement of Vitamin A is", o: ["200 IU", "400 IU", "2000 IU", "4000 IU"], c: [3], t: "s"},
    {q: "Daily requirement of Vitamin C is", o: ["40mg", "100 mg", "200 mg", "500 mg"], c: [1], t: "s"},
    {q: "The most potent form of Vitamin A is", o: ["Carotene", "Vitamin A1", "Vitamin A2", "Beta Carotene"], c: [1], t: "s"},
    {q: "The features of Hypervitaminosis A are", o: ["Alopecia", "Anorexia", "Pseudotumor cerebri", "All of the above"], c: [3], t: "s"},
    {q: "Daily requirement of iodine is", o: ["50 mg/day", "100 mg/day", "150 mg/day", "200 mg/day"], c: [2], t: "s"},
    {q: "The concentration of iodine in iodized salt in India is", o: ["1 in 200", "1 in 2000", "1 in 4000", "1 in 40,000"], c: [3], t: "s"},
    {q: "Total body iodine is approximately", o: ["20 mg", "30 mg", "40 mg", "50 mg"], c: [3], t: "s"},
    {q: "The percentage of iodine in thyroid gland is", o: ["50%", "60%", "80%", "90%"], c: [3], t: "s"},
    {q: "Egg has all the following Vitamins except", o: ["A", "B6", "C", "E"], c: [2], t: "s"},
    {q: "Recommended daily allowance of Thiamine is", o: ["0.5 mg / 1000 Kcal", "1 mg / 1000 Kcal", "6.6 mg / 1000 Kcal", "12 mg / 1000 Kcal"], c: [0], t: "s"},
    {q: "Recommended daily allowance of Niacin is", o: ["0.5 mg /1000 Kcal", "1 mg / 1000 Kcal", "6.6 mg / 1000 Kcal", "12 mg / 1000 Kcal"], c: [2], t: "s"},
    {q: "Recommended of daily allowance of Riboflavin is", o: ["0.5 mg /1000 Kcal", "0.6 mg / 1000 Kcal", "1 mg/ 1000 Kcal", "6.6 mg / 1000 Kcal"], c: [1], t: "s"},
    {q: "Richest source of niacin is", o: ["Sheep liver", "Meat", "Fish", "Milk"], c: [0], t: "s"},
    {q: "Total dependence on___could cause pellagra", o: ["Rice", "Wheat", "Maize", "Ragi"], c: [2], t: "s"},
    {q: "Endemic Goitre is more prevalent in", o: ["Bihar", "Bengal", "Manipur", "Orissa"], c: [0], t: "s"},
    {q: "Total body calcium is", o: ["250-600 g", "500-850 g", "850-1400 g", "1400-2000 g"], c: [2], t: "s"},
    {q: "Total body content of phosphate is", o: ["250-400 g", "400-700 g", "600-1000 g", "850-1500 g"], c: [1], t: "s"},
    {q: "All are rich sources of Vitamin E except", o: ["Vegetable oil", "Wheat germ oil", "Coconut oil", "Egg yolk"], c: [2], t: "s"},
    {q: "Daily requirement of Vitamin D is", o: ["100 IU", "200 IU", "300 IU", "400 IU"], c: [0], t: "s"},
    {q: "Daily requirement of vitamin D during pregnancy and lactation is", o: ["100 IU", "200 IU", "300 IU", "400 IU"], c: [3], t: "s"},
    {q: "All are common vitamin deficiencies, in man except", o: ["Folic acid", "B6", "Pantothenic acid", "B12"], c: [2], t: "s"},
    {q: "All are good sources of vitamin B12 except", o: ["Meat", "Egg", "Vegetables", "Milk"], c: [2], t: "s"},
    {q: "All are rich sources of calcium except", o: ["Sitapal", "Ragi", "White rice", "Dates"], c: [2], t: "s"},
    {q: "Recommended intake of Calcium during pregnancy is", o: ["400-500 mg", "500-600 mg", "700-800 mg", "1000 mg"], c: [3], t: "s"},
    {q: "Milk has rich content of all vitamins except", o: ["Riboflavin", "C", "A", "D"], c: [1], t: "s"},
    {q: "Vitamin which is required in additional amounts during lactation", o: ["Folic acid", "C", "A", "D"], c: [1], t: "s"},
    {q: "Blood pyruvate level is used to detect deficiency of", o: ["Iron", "Protein", "Vitamin B", "Iodine"], c: [2], t: "s"},
    {q: "The first dose of Vit. A under the Vitamin A control programme is currently given at", o: ["6 months", "9 months along with measles vaccine", "1 year", "18 months"], c: [1], t: "s"},
    {q: "Iron content in folifar tablet is", o: ["30 mg", "60 mg", "100 mg", "120 mg"], c: [1], t: "s"},
    {q: "Excess of fluorine intake causes all except", o: ["Genu Valgum", "Dental fluorosis", "Skeletal fluorosis", "Dental caries"], c: [3], t: "s"},
    {q: "Fluoridation of water prevents", o: ["Bacterial growth", "Dental fluorosis", "Dental caries", "All of the above"], c: [2], t: "s"},
    {q: "The safe limit of fluoride content in water is", o: ["0.1 - 0.5 mg/lit", "0.5 - 0.8 mg/lit", "0.8 -1.2 mg/lit", "1-2mg/lit"], c: [1], t: "s"},
    {q: "Vanaspati is fortified with____IU of vitamin A", o: ["1000", "1500", "2000", "2500"], c: [3], t: "s"},
    {q: "The amount of vitamin D fortified in vanaspati is", o: ["125 IU", "150 IU", "175 IU", "200 IU"], c: [2], t: "s"},
    {q: "The carbohydrate reserve of a human adult is about", o: ["500 g", "1 Kg", "1.5 Kg", "2 Kg"], c: [0], t: "s"},
    {q: "Which of the following has highest retinol content?", o: ["Halibut liver oil", "Cod liver oil", "Ox liver", "Margarine"], c: [0], t: "s"},
    {q: "The vegetable with highest retinol content per 100 gram is", o: ["Carrot", "Spinach", "Green leaves", "Papaya"], c: [0], t: "s"},
    {q: "The first clinical sign of Vitamin A deficiency is", o: ["Night blindness", "Conjunctival Xerosis", "Bitot's spots", "Corneal Xerosis"], c: [1], t: "s"},
    {q: "All the following are true regarding Vitamin E except", o: ["Richest source - vegetable oils", "Alpha tocopherol - most potent", "Dietary deficiency -- very", "Requirement -10 mg/day"], c: [2], t: "s"},
    {q: "All the following cause loss of thiamine except", o: ["Prolonged storage of fruits", "Parboiling of rice", "Toasting of bread", "Cooking of cereals with baking soda"], c: [1], t: "s"},
    {q: "The most common symptom of infantile beri beri", o: ["Peripheral neuritis", "Heart involvement", "Convulsions", "Absence of knee jerk"], c: [0], t: "s"},
    {q: "Daily requirement of thiamine is", o: ["0.5 mg/1000 Kcal", "0.6 mg/1000 Kcal", "6.6 mg/1000 Kcal", "10 mg/1000 Kcal"], c: [0], t: "s"},
    {q: "In India, riboflavin deficiency is widespread", o: ["In wheat eating areas", "Where rice is staple food", "Where maize is consumed", "In areas where Jowar is used"], c: [1], t: "s"},
    {q: "Recommended daily requirement of Vitamin B12 during pregnancy and lactation is", o: ["0.2 mcg : 1 mcg", "1 mcg : 1.5 mcg", "1.5 mcg : 1.5 mcg", "1.5 mcg : 3 mcg"], c: [2], t: "s"},
    {q: "Of the following which is a poor source of Vitamin C?", o: ["Green leaves", "Fresh meat", "Fish", "Cereals"], c: [3], t: "s"},
    {q: "Daily requirement of Vitamin C for an adult is", o: ["20 mg", "40 mg", "60 mg", "100 mg"], c: [3], t: "s"},
    {q: "All the following are called major minerals except", o: ["Sodium", "Potassium", "Magnesium", "Iron"], c: [3], t: "s"},
    {q: "Which of the following is not true regarding mineral elements", o: ["Phytic acid interferes with iron absorption", "Dietary fibre in large amounts may decrease absorption", "Deficiency is common in vegetarians", "Excessive amounts causes injurious effects"], c: [2], t: "s"},
    {q: "Which of the following is not true of availability of calcium?", o: ["Ragi is a rich source", "Rice is very deficient", "Oxalic acid in green leaves aids absorption", "Phytic acid in cereals decreases bio availability"], c: [2], t: "s"},
    {q: "Green leaves are rich sources of all the following except", o: ["Vitamin C", "Vitamin B12", "Calcium", "Iron"], c: [3], t: "s"},
    {q: "Meat is poor in", o: ["Iron", "Zinc", "Calcium", "Phosphorous"], c: [2], t: "s"},
    {q: "Source of calcium are", o: ["Milk", "Cereals", "Green leafy vegetables"], c: [0, 1, 2], t: "m"},
    {q: "Role of Iron in the body", o: ["Brain function", "Regulation of body temperature", "Synthesis of nucleic acids"], c: [2], t: "s"},
    {q: "The protein content of 100 gm of cereals", o: ["3-5%", "7-12%", "more than 20%"], c: [1], t: "s"},
    {q: "Rice is a source of", o: ["Vit. D", "Vit. E", "Zinc", "Vit. B"], c: [2, 3], t: "m"},
    {q: "The sources of calcium are", o: ["Banana", "Lime", "Fish", "Orange"], c: [2], t: "s"},
    {q: "Meat is a source of", o: ["Zinc", "Calcium", "Phosphorus"], c: [0, 2], t: "m"},
    {q: "Daily requirement of calcium for adults is", o: ["100 mg", "1000 mg", "200 mg"], c: [1], t: "s"},
    {q: "Which of the following is rich in carbohydrate", o: ["Meat", "Grains", "Milk", "Sugar and sweets"], c: [1, 3], t: "m"},
    {q: "Biological role of iron", o: ["Support breathing and blood cells formation", "Component of different enzymes"], c: [0, 1], t: "m"},
    {q: "Point out the food with high concentration of nitrate", o: ["Greens", "Root fruits", "Berry", "Melon field fruits"], c: [0, 1], t: "m"},
    {q: "Point out the foods which may contain high concentration of benzapyrene", o: ["Milk", "Meat", "Mollusc and oyster", "Kidney", "Liver", "Mushrooms"], c: [2, 5], t: "m"},
    {q: "The main functions of the vitamins are", o: ["Building", "A source of energy", "Specific"], c: [0, 2], t: "m"},
    {q: "The causes of hypovitamines divided into", o: ["Externals", "Internals", "Climatological"], c: [0, 1, 2], t: "m"},
    {q: "Which of the following is an energy vitamin", o: ["Vitamin C", "Vitamin D", "Vitamin B1"], c: [0], t: "s"},
    {q: "All are fat soluble vitamins except", o: ["A", "B", "D", "E"], c: [1], t: "s"},
    {q: "Preformed vitamin A is", o: ["Retinol", "Alpha-carotene", "Beta-carotene"], c: [0], t: "s"},
    {q: "Function of vitamin A are", o: ["Anti-infective", "Anti-allergic", "Support skeletal growth"], c: [0, 1, 2], t: "m"},
    {q: "Sources of vitamin A", o: ["Dark green leafy vegetables", "Mango", "Bread", "Egg"], c: [0, 1, 3], t: "m"},
    {q: "Clinical sign of vitamin A deficiency", o: ["Conjunctival xerosis", "Night blindness", "Keratomalacia"], c: [0, 1, 2], t: "m"},
    {q: "Daily dosage of vitamin A for adults", o: ["100 iu", "400 iu", "1000 iu"], c: [2], t: "s"},
    {q: "Functions of vitamin D", o: ["Absorption of calcium and phosphorus", "Reabsorption of phosphate in kidney", "Bone resorption"], c: [0, 2], t: "m"},
    {q: "Sources of vitamin E", o: ["Vegetable oil", "Egg yolk", "Milk", "Butter"], c: [0, 1, 3], t: "m"},
    {q: "Biological functions of tocopherol are", o: ["Stimulate the organs muscles activity", "Improve the muscles ability to work", "Has vitamin activity"], c: [0, 1, 2], t: "m"},
    {q: "Daily dosage of vitamin E", o: ["5 mg", "10 mg", "50 mg"], c: [1], t: "s"},
    {q: "Clinical picture of pellagra", o: ["Diarrhoea", "Dermatitis", "Dementia"], c: [0, 1, 2], t: "m"},
    {q: "Strict vegetarian diet cause a deficiency of", o: ["B1", "B12", "D"], c: [1, 2], t: "m"},
    {q: "Most heat labile vitamin is", o: ["B12", "C", "A"], c: [1], t: "s"},
    {q: "Biological complex of vitamin C content", o: ["Ascorbic acid", "Tannic elements", "Vegetables pigments", "Organic vegetables acid"], c: [0, 1, 2, 3], t: "m"},
    {q: "Sources of vitamin C", o: ["Orange", "Wild rose", "Lime", "Cabbage"], c: [0, 1, 2, 3], t: "m"},
    {q: "The daily dosage of vitamin C for adults is", o: ["40 mg", "100 mg", "200 mg"], c: [1], t: "s"},
    {q: "Which of the following is rich in vitamin B2", o: ["Liver", "Tomato", "Eggs"], c: [0, 2], t: "m"},
    {q: "Which of the following is rich with vitamin D", o: ["Vegetables", "Grains", "Fish liver", "Eggs"], c: [2, 3], t: "m"},
    {q: "The main sources of vitamin B1 are", o: ["Vegetable", "Milk", "Cereal"], c: [0, 2], t: "m"},
    {q: "The main source of vitamin B6", o: ["Animal source", "Plant source"], c: [0, 1], t: "m"}
  ],
  3: [
    {q: "Pasteurization of milk is an example of disinfection", o: ["Precurrent", "Concurrent", "Terminal", "Absolute"], c: [0], t: "s"},
    {q: "The incubation period of Salmonella food poisoning is", o: ["Few minutes", "6 hrs − 8 hrs", "12 -- 24 hrs", "48 hrs"], c: [2], t: "s"},
    {q: "Following are true of Staphylococcal food poisoning except", o: ["Onset within 6 hrs", "High grade fever", "Death uncommon"], c: [1], t: "s"},
    {q: "Following food poisonings are due to preformed exotoxin except", o: ["Staphylococcal", "Botulism", "Clostridial", "Bacillus cereus"], c: [2], t: "s"},
    {q: "Following are true of Botulism except", o: ["Bloody diarrhea", "Absence of fever", "Dysphagia", "No loss of consciousness"], c: [0, 3], t: "m"},
    {q: "The drug used in treatment of Botulism is", o: ["High dose crystalline penicillin", "ORS", "Guanidine", "All of the above"], c: [2], t: "s"},
    {q: "Following are true of food poisoning except", o: ["Incubation period - 6 hrs", "Deaths uncommon", "Bloody diarrhea", "Common with meat foods"], c: [0], t: "s"},
    {q: "Nitric acid test detects the presence of", o: ["Aflatoxin", "Argemone oil", "Fusarium toxin", "BOAA"], c: [1], t: "s"},
    {q: "All are tests to detect inadequate pasteurisation except", o: ["Phosphate test", "Standard plate count", "Methylene blue reduction test", "Coliform count"], c: [2], t: "s"},
    {q: "The prevention of food adulteration Act was enacted in", o: ["1950", "1954", "1976", "1977"], c: [1], t: "s"},
    {q: "All the following are caused by ingestion of contaminated meat except", o: ["Cysticercosis", "Actinomycosis", "Helminthiasis", "Trichenella infection"], c: [2], t: "s"},
    {q: "The freshness milk is measured by", o: ["Reductase test", "Acidity", "Specific gravity"], c: [0, 2], t: "m"},
    {q: "The % of nonbacterial food poisoning incidences in relation to all incidences of food poisoning is", o: ["1%", "2%", "5%"], c: [0], t: "s"},
    {q: "Which of the following diseases can be caused by ingestion of contaminated meat", o: ["Anthrax", "Trichinella spiralis", "Helminthiasis"], c: [0, 1], t: "m"},
    {q: "Which of the following infection can be transmitted by fish", o: ["Cholera", "Clostridium botulinum", "Typhoid fever"], c: [0, 2], t: "m"},
    {q: "Food borne infections are", o: ["E. Coli diarrhea", "Typhoid fever", "Leptospirosis"], c: [0, 1, 2], t: "m"},
    {q: "Fish borne diseases", o: ["Fish toxin", "Malaria", "Tapeworm", "Tuberculosis"], c: [0, 2], t: "m"},
    {q: "Aflatoxin is produced by", o: ["Aspergillus flavus", "Aspergillus niger", "Aspergillus fumigatus"], c: [0], t: "s"},
    {q: "The clostridium botulinum can be transmitted by", o: ["Milk and milk products", "Canned meat", "Home bottled vegetables and mushroom", "Cold smoked fish"], c: [1, 2, 3], t: "m"},
    {q: "Which of following symptoms point to early (first) symptoms of botulism", o: ["Ptosis, Strabismus (cross-eye) and widening of eyes pupil", "Difficulty of swallowing", "Speech disruption", "General weakness", "Headache and dizziness"], c: [4], t: "s"},
    {q: "Types of foods which may cause staphylococcal food poisoning are", o: ["Egg", "Dairy products", "Cake and pastry with cream"], c: [1, 2], t: "m"},
    {q: "Which of the following diseases are mycotoxicosis", o: ["Ergotism", "Botulism", "Aflatoxicosis", "Salmonellosis", "Ochratoxicosis"], c: [0, 2, 4], t: "m"},
    {q: "Clinical picture of Ergotism is", o: ["Acute", "Sub acute", "Chronic"], c: [0, 1, 2], t: "m"},
    {q: "Point out the foods as sources of aflatoxine", o: ["Meat", "Fish", "Milk, cheese, and crude", "Grapes, peach and apples"], c: [0, 1, 2], t: "m"},
    {q: "Preventive measures against mycotoxicosis", o: ["Preserving food with proper temperature", "Health education", "Vaccination", "Regular food inspection"], c: [1, 3], t: "m"},
    {q: "Acute toxic food poisoning caused by", o: ["Ingestion food polluted by toxins of specific microbes", "Ingestion food which contain high number of living microbes"], c: [0], t: "s"},
    {q: "Most incidence of botulism in Russia related to following types", o: ["C,D,E", "A,B,E", "E,F,G"], c: [1], t: "s"},
    {q: "Staphylococcal food poisoning characterized by", o: ["Short incubation period (2-4 hours)", "Symptoms of gastroenteritis", "High temperature", "Difficult incidence with vomiting and intoxication"], c: [0, 1, 3], t: "m"},
    {q: "All of the following are source of proteins", o: ["Egg", "Milk", "Fish", "Soybean"], c: [0, 1, 2, 3], t: "m"},
    {q: "Point out the food as a source of fusarium toxin", o: ["Meat", "Fish", "Milk", "grain products"], c: [3], t: "s"},
    {q: "Diseases as contraindication for working in food premises", o: ["Gastritis", "Tonsillitis", "Boil in the wrist"], c: [0, 2], t: "m"}
  ]
};

// --- STATE ---
let currentTopicId = 1;
const answers = {};

// --- RENDERING ---
function renderApp() {
  const root = document.getElementById("root");
  const questions = quizDataBank[currentTopicId];

  root.innerHTML = `
    <div class="topic-bar">
      ${allTopics.map(t => `
        <button class="topic-pill ${t.id === currentTopicId ? "active" : ""}"
                onclick="changeTopic(${t.id})">
          ${t.name} (${t.questionCount})
        </button>
      `).join("")}
    </div>
    <div class="content">
      ${questions.map((q, qi) => renderQuestion(q, qi)).join("")}
    </div>
    <div class="footer-bar">
      <button class="btn btn-primary" onclick="submitCurrent()">Submit answers</button>
      <button class="btn btn-ghost" onclick="resetCurrent()">Reset</button>
      <div class="stats" id="stats-panel" style="display:none;">
        <div class="stat-box">
          <div class="stat-label">Correct</div>
          <div class="stat-value" id="stat-correct">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Incorrect</div>
          <div class="stat-value" id="stat-incorrect">0</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Score</div>
          <div class="stat-value" id="stat-score">0%</div>
        </div>
      </div>
    </div>
  `;
}

function renderQuestion(q, qi) {
  const type = q.t === "s" ? "radio" : "checkbox";
  const name = `q_\${currentTopicId}_\${qi}`;
  return `
    <div class="question-card" data-q-idx="\${qi}">
      <div class="q-num">Question \${qi + 1}</div>
      <div class="q-text">\${q.q}</div>
      <div class="options">
        \${q.o.map((opt, oi) => `
          <label class="opt">
            <input type="\${type}"
                   name="\${name}"
                   value="\${oi}"
                   onchange="recordAnswer(\${currentTopicId}, \${qi}, \${oi}, '\${type}')">
            <span>\${opt}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

// --- HANDLERS ---
function changeTopic(id) {
  currentTopicId = id;
  if (!answers[id]) answers[id] = {};
  renderApp();
}

function recordAnswer(topicId, qIndex, optIndex, type) {
  if (!answers[topicId]) answers[topicId] = {};
  if (!answers[topicId][qIndex]) answers[topicId][qIndex] = [];

  if (type === "radio") {
    answers[topicId][qIndex] = [optIndex];
  } else {
    const arr = answers[topicId][qIndex];
    const i = arr.indexOf(optIndex);
    if (i >= 0) arr.splice(i, 1);
    else arr.push(optIndex);
  }
}

function submitCurrent() {
  const topicId = currentTopicId;
  const questions = quizDataBank[topicId];
  let correct = 0;
  let incorrect = 0;

  questions.forEach((q, qi) => {
    const sel = (answers[topicId] && answers[topicId][qi]) ? [...answers[topicId][qi]].sort((a,b)=>a-b) : [];
    const key = [...q.c].sort((a,b)=>a-b);
    const ok = JSON.stringify(sel) === JSON.stringify(key);
    if (ok) correct++; else incorrect++;

    const card = document.querySelector(`.question-card[data-q-idx="\${qi}"]`);
    if (!card) return;
    const inputs = card.querySelectorAll("input");
    inputs.forEach((inp, idx) => {
      const label = inp.parentElement;
      label.classList.remove("correct", "incorrect");
      if (key.includes(idx)) label.classList.add("correct");
      else if (sel.includes(idx)) label.classList.add("incorrect");
    });
  });

  const panel = document.getElementById("stats-panel");
  const cEl = document.getElementById("stat-correct");
  const iEl = document.getElementById("stat-incorrect");
  const sEl = document.getElementById("stat-score");
  if (panel && cEl && iEl && sEl) {
    const pct = Math.round((correct / questions.length) * 100);
    cEl.textContent = correct;
    iEl.textContent = incorrect;
    sEl.textContent = pct + "%";
    panel.style.display = "flex";
  }
}

function resetCurrent() {
  if (answers[currentTopicId]) answers[currentTopicId] = {};
  renderApp();
}

// initial render
renderApp();
