// Transpiling Python to JavaScript can be tricky but not impossible.
// Created with help of https://www.javainuse.com/py2js

////////////////////////////////////
//                                //
//         Conversion tricks      //
//                                //
//////////////////////////////////// 

// Of cource, Tuples - are not a thing in JavaScript.
// Let's use power of JavaScript and declare tuples differently:
/* Python:
    awareness_stream_dict = {
        (58,18,48,16):"Taste",
        (38,28,67,20):"Intuition",
    }
*/
/* JavaScript:
const awarenessStreamDict = [
    [[58, 18, 48, 16], "Taste"],
    [[38, 28, 67, 20], "Intuition"]
]
*/
// This means we can replace following Pythin tuple methods 
// with their JavaScript counterpart as follows:

/* garys:

//python
//javascript


// TUPLES:

my_tuple = (1, 2) 
const myTuple  = (() => [1, 2])()

x, y = my_tuple
const [x, y] = myTuple

print(x)
console.log(x)

my_list = list(my_tuple)
myList = [...myTuple]  
// - or -
myList = Array.from(myTuple)

3 is in my_tuple
myTuple.includes(3)
*/

/* ChatGPT:

repeated_tuple = my_tuple * 3
repeatedTuple = [...myTuple, ...myTuple, ...myTuple]  //TODO

// Tradeofs
//my_tuple = (1, 2, 3)
//const myTuple = [1, 2, 3]
//
//repeated_tuple = my_tuple * 3
//const repeatedTuple = myTuple.repeat(3)
//
//new_tuple = my_tuple + (4, 5, 6)
//const newTuple = myTuple.concat([4, 5, 6])

if 2 in my_tuple: print("2 is in the tuple")
if (myTuple.includes(2)) console.log("2 is in the tuple")

len(my_tuple)
myTuple.length

sliced_tuple = my_tuple[1:]
slicedTuple = myTuple.slice(1)

2 in my_tuple
myTuple.includes(2)  //TODO: i think we can do better

my_tuple.index(x)
myTuple.indexOf(x)

my_tuple.count(x) // returns the number of times the value x appears in the tuple
myTuple.filter(x => x === value).length



*/




///////////////////////////////////////
//                                   //
//              CONSTANTS            //
//                                   //
//           translated from         //   
//           hd_constants.py         //
//                                   //
///////////////////////////////////////



/*
Since the time when the I Ching was created, which is estimated to be around 3,000 years ago, 
the stars have shifted by approximately 42 degrees (50.3 arcseconds per year). 
This means that the positions of the constellations in the zodiac have shifted as well, 
and the zodiac used by the I Ching would not be aligned with the current positions of the stars in the sky.

MISHA, should we use 42 instead of 58 below? 
*/

/*
synchronize IGING and zodiac circle ->58°
    Human design systems start at gate 41, Aries, (source :Ra Uru BlackBook)
*/
const IGING_offset = 58;

const SWE_PLANET_DICT = {
  "Sun": 0,
  "Earth": 0, // Sun position -180 longitude
  "Moon": 1,
  "North_Node": 11, // Discussion whether mean or True node?! here North Node -> true Node
  "South_Node": 11, // North_Node position -180 longitude
  "Mercury": 2,
  "Venus": 3,
  "Mars": 4,
  "Jupiter": 5,
  "Saturn": 6,
  "Uranus": 7,
  "Neptune": 8,
  "Pluto": 9,
  //"Chiron": 15,
  //'Pholus': 16,
  //'Ceres': 17,
  //'Pallas': 18,
  //'Juno': 19,
  //'Vesta': 20,
};

const IGING_CIRCLE_LIST = [41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23, 8, 
                           20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64, 47, 6, 
                           46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60];

// Here ChatGPT stopped working for translation - so https://www.javainuse.com/py2js is used since.

;
// legend ->HD=Head,AA=Anja, TT=Throat, GC=G_Center, SL = Sacral, SN = Spleen, SP = SolarPlexus, RT = Root;
GATES_CHAKRA_DICT = {(64,47):('HD','AA'),
                     (61,24):('HD','AA'),
                     (63, 4):('HD','AA'),
                     (17,62):('AA','TT'),
                     (43,23):('AA','TT'),
                     (11,56):('AA','TT'),
                     (16,48):('TT','SN'),
                     (20,57):('TT','SN'),
                     (20,34):('TT','SL'),
                     (20,10):('TT','GC'),
                     (31, 7):('TT','GC'),
                     ( 8, 1):('TT','GC'),
                     (33,13):('TT','GC'),
                     (45,21):('TT','HT'),
                     (35,36):('TT','SP'),
                     (12,22):('TT','SP'),
                     (32,54):('SN','RT'),
                     (28,38):('SN','RT'),
                     (57,34):('SN','SL'),
                     (50,27):('SN','SL'),
                     (18,58):('SN','RT'),
                     (10,34):('GC','SL'),
                     (15, 5):('GC','SL'),
                     ( 2,14):('GC','SL'),
                     (46,29):('GC','SL'),
                     (10,57):('GC','SN'),
                     (25,51):('GC','HT'),
                     (59, 6):('SL','SP'),
                     (42,53):('SL','RT'),
                     ( 3,60):('SL','RT'),
                     ( 9,52):('SL','RT'),
                     (26,44):('HT','SN'),
                     (40,37):('HT','SP'),
                     (49,19):('SP','RT'),
                     (55,39):('SP','RT'),
                     (30,41):('SP','RT'),
                    };

CHAKRA_LIST = ['HD','AA','TT','GC','HT','SP','SN','SL','RT'];

CHANNEL_MEANING_DICT = {
                        (64,47):['Abstraction','D. of mental activity and clarity'],
                        (61,24):['Awereness', 'D. of a thinker'],
                        (63, 4):['Logic','D. of mental muse? mixed with doubt'],
                        (17,62):['Acceptance','D. of an organizational being'],
                        (43,23):['Structuring','D. of individuality'],
                        (11,56):['Curiosity','D. of a searcher'],
                        (16,48):['The Wave Length','D. of a talent'],
                        (20,57):['The Brain Wave','D. of penetrating awareness'],
                        (20,34):['Charisma','D. where thoughts must become deeds'],
                        (32,54):['Transformation','D. of being driven'],
                        (28,38):['Struggle','D. of stubbornness '],
                        (18,58):['Judgment','D. of insatiability'],
                        (20,10):['Awakening','D. of commitment to higher principles'],
                        (31, 7):['The Alpha',"For 'good' or 'bad', a d. of leadership"],
                        ( 8, 1):['Inspiration','The creative role model'],
                        (33,13):['The Prodigal','The d. of witness'],
                        (10,34):['Exploration',"A d. of following one's convictions"],
                        (15, 5):['Rythm','A d. of being in the flow'],
                        ( 2,14):['The Beat','A d. of being the keeper of keys'],
                        (46,29):['Discovery','A d. of succeding where others fail'],
                        (10,57):['Perfected Form','A d. of survival'],
                        (57,34):['Power','A d. of an archetype'],
                        (50,27):['Preservation','A. d. of custodianship'],
                        (45,21):['Money','A d. of a materialist'],
                        (59, 6):['Mating','A d. focused on reproduction'],
                        (42,53):['Maturation','A d. of balanced developement,cyclic'],
                        ( 3,60):['Mutation','Energy which fluctuates and initiates, pulse'],
                        ( 9,52):['Concentration','A d. of determination, focused'],
                        (26,44):['Surrender','A d. of a transmitter'],
                        (25,51):['Initiation','A d. of needing to be first'],
                        (40,37):['Community','A d. of being part, seeking a whole'],
                        (35,36):['Transitoriness',"A d. of a 'Jack of all Trades'"],
                        (12,22):['Openness','A d, of a social being'],
                        (49,19):['Synthesis','A d. of being sensitive'],
                        (55,39):['Emoting','A d. of moodiness'],
                        (30,41):['Recognition','A d. of focused energy'],
                        };

IC_CROSS_TYP = {
                (1,3):'RAC',
                (1,4):'RAC',
                (2,4):'RAC',
                (2,5):'RAC',
                (3,5):'RAC',
                (3,6):'RAC',
                (4,6):'RAC',
                (4,1):'JXP',
                (5,1):'LAC',
                (5,2):'LAC',
                (6,2):'LAC',
                (6,3):'LAC',
                };

penta_dict = {
                31:[],
                8:[],
                33:[],
                7:[],
                1:[],
                13:[],
                15:[],
                2:[],
                46:[],
                5:[],
                14:[],
                29:[]
             };

circuit_typ_dict={
                    (24,61):'Knowledge',
					(23,43):'Knowledge',
					( 1, 8):'Knowledge',
					( 2,14):'Knowledge',
					( 3,60):'Knowledge',
					(39,55):'Knowledge',
					(12,22):'Knowledge',
					(28,38):'Knowledge',
					(20,57):'Knowledge',
					(10,34):'Centre',
					(25,51):'Centre',
					( 4,63):'Realize',
					(17,62):'Realize',
					( 7,31):'Realize',
					( 5,15):'Realize',
					( 9,52):'Realize',
					(18,58):'Realize',
					(16,48):'Realize',
					(47,64):'Sense',
					(11,56):'Sense',
					(13,33):'Sense',
					(29,46):'Sense',
					(42,53):'Sense',
					(30,41):'Sense',
					(35,36):'Sense',
					(32,54):'Ego',
					(26,44):'Ego',
					(19,49):'Ego',
					(37,40):'Ego',
					(21,45):'Ego',
					( 6,59):'Protect',
					(27,50):'Protect',
					(10,20):'Integration',
					(20,34):'Integration',
					(34,57):'Integration',
					(10,57):'Integration',
				 };
circuit_group_typ_dict = {
                        'Knowledge':'Individual',
						'Centre':'Individual',
						'Realize':'Collective',
						'Sense':'Collective',
						'Ego':'Tribal',
						'Protect':'Tribal',
						'Integration':'Integration',
                        };

awareness_stream_dict = {
						(58,18,48,16):'Taste',
						(38,28,67,20):'Intuition',
						(54,32,44,26):'Instinct',
						(41,30,36,35):'Feel',
						(39,55,22,12):'Emotion',
						(19,49,37,40):'Sensitivity',
						(64,47,11,56):'Realize/Meaning',
						(61,24,43,23):'Knowledge',
						(63, 4,17,62):'Understand'
						};

awareness_stream_group_dict = {
								'Taste':'Spleen',
								'Intuition':'Spleen',
								'Instinct':'Spleen',
								'Feel':'SolarPlexus',
								'Emotion':'SolarPlexus',
								'Sensitivity':'SolarPlexus',
								'Realize/Meaning':'Anja',
								'Knowledge':'Anja',
								'Understand':'Anja'
								};
