/**
 * @typedef Script
 * @property {string} name Name of script
 * @property {string} code Four character ISO 15924 code
 * @property {string} numeric Three character ISO 15924 code
 * @property {string} [pva] Property value alias
 * @property {string} date Date of addition (e.g., `2016-12-05`)
 */

/** @type {Array<Script>} */
export const iso15924 = [
  {
    code: 'Adlm',
    name: 'Adlam',
    numeric: '166',
    pva: 'Adlam',
    date: '2016-12-05'
  },
  {
    code: 'Afak',
    name: 'Afaka',
    numeric: '439',
    date: '2010-12-21'
  },
  {
    code: 'Aghb',
    name: 'Caucasian Albanian',
    numeric: '239',
    pva: 'Caucasian_Albanian',
    date: '2014-11-15'
  },
  {
    code: 'Ahom',
    name: 'Ahom, Tai Ahom',
    numeric: '338',
    pva: 'Ahom',
    date: '2015-07-07'
  },
  {
    code: 'Arab',
    name: 'Arabic',
    numeric: '160',
    pva: 'Arabic',
    date: '2004-05-01'
  },
  {
    code: 'Aran',
    name: 'Arabic (Nastaliq variant)',
    numeric: '161',
    date: '2014-11-15'
  },
  {
    code: 'Armi',
    name: 'Imperial Aramaic',
    numeric: '124',
    pva: 'Imperial_Aramaic',
    date: '2009-06-01'
  },
  {
    code: 'Armn',
    name: 'Armenian',
    numeric: '230',
    pva: 'Armenian',
    date: '2004-05-01'
  },
  {
    code: 'Avst',
    name: 'Avestan',
    numeric: '134',
    pva: 'Avestan',
    date: '2009-06-01'
  },
  {
    code: 'Bali',
    name: 'Balinese',
    numeric: '360',
    pva: 'Balinese',
    date: '2006-10-10'
  },
  {
    code: 'Bamu',
    name: 'Bamum',
    numeric: '435',
    pva: 'Bamum',
    date: '2009-06-01'
  },
  {
    code: 'Bass',
    name: 'Bassa Vah',
    numeric: '259',
    pva: 'Bassa_Vah',
    date: '2014-11-15'
  },
  {
    code: 'Batk',
    name: 'Batak',
    numeric: '365',
    pva: 'Batak',
    date: '2010-07-23'
  },
  {
    code: 'Beng',
    name: 'Bengali (Bangla)',
    numeric: '325',
    pva: 'Bengali',
    date: '2016-12-05'
  },
  {
    code: 'Bhks',
    name: 'Bhaiksuki',
    numeric: '334',
    pva: 'Bhaiksuki',
    date: '2016-12-05'
  },
  {
    code: 'Blis',
    name: 'Blissymbols',
    numeric: '550',
    date: '2004-05-01'
  },
  {
    code: 'Bopo',
    name: 'Bopomofo',
    numeric: '285',
    pva: 'Bopomofo',
    date: '2004-05-01'
  },
  {
    code: 'Brah',
    name: 'Brahmi',
    numeric: '300',
    pva: 'Brahmi',
    date: '2010-07-23'
  },
  {
    code: 'Brai',
    name: 'Braille',
    numeric: '570',
    pva: 'Braille',
    date: '2004-05-01'
  },
  {
    code: 'Bugi',
    name: 'Buginese',
    numeric: '367',
    pva: 'Buginese',
    date: '2006-06-21'
  },
  {
    code: 'Buhd',
    name: 'Buhid',
    numeric: '372',
    pva: 'Buhid',
    date: '2004-05-01'
  },
  {
    code: 'Cakm',
    name: 'Chakma',
    numeric: '349',
    pva: 'Chakma',
    date: '2012-02-06'
  },
  {
    code: 'Cans',
    name: 'Unified Canadian Aboriginal Syllabics',
    numeric: '440',
    pva: 'Canadian_Aboriginal',
    date: '2004-05-29'
  },
  {
    code: 'Cari',
    name: 'Carian',
    numeric: '201',
    pva: 'Carian',
    date: '2007-07-02'
  },
  {
    code: 'Cham',
    name: 'Cham',
    numeric: '358',
    pva: 'Cham',
    date: '2009-11-11'
  },
  {
    code: 'Cher',
    name: 'Cherokee',
    numeric: '445',
    pva: 'Cherokee',
    date: '2004-05-01'
  },
  {
    code: 'Chrs',
    name: 'Chorasmian',
    numeric: '109',
    pva: 'Chorasmian',
    date: '2019-08-19'
  },
  {
    code: 'Cirt',
    name: 'Cirth',
    numeric: '291',
    date: '2004-05-01'
  },
  {
    code: 'Copt',
    name: 'Coptic',
    numeric: '204',
    pva: 'Coptic',
    date: '2006-06-21'
  },
  {
    code: 'Cpmn',
    name: 'Cypro-Minoan',
    numeric: '402',
    date: '2017-07-26'
  },
  {
    code: 'Cprt',
    name: 'Cypriot syllabary',
    numeric: '403',
    pva: 'Cypriot',
    date: '2017-07-26'
  },
  {
    code: 'Cyrl',
    name: 'Cyrillic',
    numeric: '220',
    pva: 'Cyrillic',
    date: '2004-05-01'
  },
  {
    code: 'Cyrs',
    name: 'Cyrillic (Old Church Slavonic variant)',
    numeric: '221',
    date: '2004-05-01'
  },
  {
    code: 'Deva',
    name: 'Devanagari (Nagari)',
    numeric: '315',
    pva: 'Devanagari',
    date: '2004-05-01'
  },
  {
    code: 'Diak',
    name: 'Dives Akuru',
    numeric: '342',
    pva: 'Dives_Akuru',
    date: '2019-08-19'
  },
  {
    code: 'Dogr',
    name: 'Dogra',
    numeric: '328',
    pva: 'Dogra',
    date: '2016-12-05'
  },
  {
    code: 'Dsrt',
    name: 'Deseret (Mormon)',
    numeric: '250',
    pva: 'Deseret',
    date: '2004-05-01'
  },
  {
    code: 'Dupl',
    name: 'Duployan shorthand, Duployan stenography',
    numeric: '755',
    pva: 'Duployan',
    date: '2014-11-15'
  },
  {
    code: 'Egyd',
    name: 'Egyptian demotic',
    numeric: '070',
    date: '2004-05-01'
  },
  {
    code: 'Egyh',
    name: 'Egyptian hieratic',
    numeric: '060',
    date: '2004-05-01'
  },
  {
    code: 'Egyp',
    name: 'Egyptian hieroglyphs',
    numeric: '050',
    pva: 'Egyptian_Hieroglyphs',
    date: '2009-06-01'
  },
  {
    code: 'Elba',
    name: 'Elbasan',
    numeric: '226',
    pva: 'Elbasan',
    date: '2014-11-15'
  },
  {
    code: 'Elym',
    name: 'Elymaic',
    numeric: '128',
    pva: 'Elymaic',
    date: '2018-08-26'
  },
  {
    code: 'Ethi',
    name: 'Ethiopic (Geʻez)',
    numeric: '430',
    pva: 'Ethiopic',
    date: '2004-10-25'
  },
  {
    code: 'Geok',
    name: 'Khutsuri (Asomtavruli and Nuskhuri)',
    numeric: '241',
    pva: 'Georgian',
    date: '2012-10-16'
  },
  {
    code: 'Geor',
    name: 'Georgian (Mkhedruli and Mtavruli)',
    numeric: '240',
    pva: 'Georgian',
    date: '2016-12-05'
  },
  {
    code: 'Glag',
    name: 'Glagolitic',
    numeric: '225',
    pva: 'Glagolitic',
    date: '2006-06-21'
  },
  {
    code: 'Gong',
    name: 'Gunjala Gondi',
    numeric: '312',
    pva: 'Gunjala_Gondi',
    date: '2016-12-05'
  },
  {
    code: 'Gonm',
    name: 'Masaram Gondi',
    numeric: '313',
    pva: 'Masaram_Gondi',
    date: '2017-07-26'
  },
  {
    code: 'Goth',
    name: 'Gothic',
    numeric: '206',
    pva: 'Gothic',
    date: '2004-05-01'
  },
  {
    code: 'Gran',
    name: 'Grantha',
    numeric: '343',
    pva: 'Grantha',
    date: '2014-11-15'
  },
  {
    code: 'Grek',
    name: 'Greek',
    numeric: '200',
    pva: 'Greek',
    date: '2004-05-01'
  },
  {
    code: 'Gujr',
    name: 'Gujarati',
    numeric: '320',
    pva: 'Gujarati',
    date: '2004-05-01'
  },
  {
    code: 'Guru',
    name: 'Gurmukhi',
    numeric: '310',
    pva: 'Gurmukhi',
    date: '2004-05-01'
  },
  {
    code: 'Hanb',
    name: 'Han with Bopomofo (alias for Han + Bopomofo)',
    numeric: '503',
    date: '2016-01-19'
  },
  {
    code: 'Hang',
    name: 'Hangul (Hangŭl, Hangeul)',
    numeric: '286',
    pva: 'Hangul',
    date: '2004-05-29'
  },
  {
    code: 'Hani',
    name: 'Han (Hanzi, Kanji, Hanja)',
    numeric: '500',
    pva: 'Han',
    date: '2009-02-23'
  },
  {
    code: 'Hano',
    name: 'Hanunoo (Hanunóo)',
    numeric: '371',
    pva: 'Hanunoo',
    date: '2004-05-29'
  },
  {
    code: 'Hans',
    name: 'Han (Simplified variant)',
    numeric: '501',
    date: '2004-05-29'
  },
  {
    code: 'Hant',
    name: 'Han (Traditional variant)',
    numeric: '502',
    date: '2004-05-29'
  },
  {
    code: 'Hatr',
    name: 'Hatran',
    numeric: '127',
    pva: 'Hatran',
    date: '2015-07-07'
  },
  {
    code: 'Hebr',
    name: 'Hebrew',
    numeric: '125',
    pva: 'Hebrew',
    date: '2004-05-01'
  },
  {
    code: 'Hira',
    name: 'Hiragana',
    numeric: '410',
    pva: 'Hiragana',
    date: '2004-05-01'
  },
  {
    code: 'Hluw',
    name: 'Anatolian Hieroglyphs (Luwian Hieroglyphs, Hittite Hieroglyphs)',
    numeric: '080',
    pva: 'Anatolian_Hieroglyphs',
    date: '2015-07-07'
  },
  {
    code: 'Hmng',
    name: 'Pahawh Hmong',
    numeric: '450',
    pva: 'Pahawh_Hmong',
    date: '2014-11-15'
  },
  {
    code: 'Hmnp',
    name: 'Nyiakeng Puachue Hmong',
    numeric: '451',
    pva: 'Nyiakeng_Puachue_Hmong',
    date: '2017-07-26'
  },
  {
    code: 'Hrkt',
    name: 'Japanese syllabaries (alias for Hiragana + Katakana)',
    numeric: '412',
    pva: 'Katakana_Or_Hiragana',
    date: '2011-06-21'
  },
  {
    code: 'Hung',
    name: 'Old Hungarian (Hungarian Runic)',
    numeric: '176',
    pva: 'Old_Hungarian',
    date: '2015-07-07'
  },
  {
    code: 'Inds',
    name: 'Indus (Harappan)',
    numeric: '610',
    date: '2004-05-01'
  },
  {
    code: 'Ital',
    name: 'Old Italic (Etruscan, Oscan, etc.)',
    numeric: '210',
    pva: 'Old_Italic',
    date: '2004-05-29'
  },
  {
    code: 'Jamo',
    name: 'Jamo (alias for Jamo subset of Hangul)',
    numeric: '284',
    date: '2016-01-19'
  },
  {
    code: 'Java',
    name: 'Javanese',
    numeric: '361',
    pva: 'Javanese',
    date: '2009-06-01'
  },
  {
    code: 'Jpan',
    name: 'Japanese (alias for Han + Hiragana + Katakana)',
    numeric: '413',
    date: '2006-06-21'
  },
  {
    code: 'Jurc',
    name: 'Jurchen',
    numeric: '510',
    date: '2010-12-21'
  },
  {
    code: 'Kali',
    name: 'Kayah Li',
    numeric: '357',
    pva: 'Kayah_Li',
    date: '2007-07-02'
  },
  {
    code: 'Kana',
    name: 'Katakana',
    numeric: '411',
    pva: 'Katakana',
    date: '2004-05-01'
  },
  {
    code: 'Khar',
    name: 'Kharoshthi',
    numeric: '305',
    pva: 'Kharoshthi',
    date: '2006-06-21'
  },
  {
    code: 'Khmr',
    name: 'Khmer',
    numeric: '355',
    pva: 'Khmer',
    date: '2004-05-29'
  },
  {
    code: 'Khoj',
    name: 'Khojki',
    numeric: '322',
    pva: 'Khojki',
    date: '2014-11-15'
  },
  {
    code: 'Kitl',
    name: 'Khitan large script',
    numeric: '505',
    date: '2015-07-15'
  },
  {
    code: 'Kits',
    name: 'Khitan small script',
    numeric: '288',
    pva: 'Khitan_Small_Script',
    date: '2015-07-15'
  },
  {
    code: 'Knda',
    name: 'Kannada',
    numeric: '345',
    pva: 'Kannada',
    date: '2004-05-29'
  },
  {
    code: 'Kore',
    name: 'Korean (alias for Hangul + Han)',
    numeric: '287',
    date: '2007-06-13'
  },
  {
    code: 'Kpel',
    name: 'Kpelle',
    numeric: '436',
    date: '2010-03-26'
  },
  {
    code: 'Kthi',
    name: 'Kaithi',
    numeric: '317',
    pva: 'Kaithi',
    date: '2009-06-01'
  },
  {
    code: 'Lana',
    name: 'Tai Tham (Lanna)',
    numeric: '351',
    pva: 'Tai_Tham',
    date: '2009-06-01'
  },
  {
    code: 'Laoo',
    name: 'Lao',
    numeric: '356',
    pva: 'Lao',
    date: '2004-05-01'
  },
  {
    code: 'Latf',
    name: 'Latin (Fraktur variant)',
    numeric: '217',
    date: '2004-05-01'
  },
  {
    code: 'Latg',
    name: 'Latin (Gaelic variant)',
    numeric: '216',
    date: '2004-05-01'
  },
  {
    code: 'Latn',
    name: 'Latin',
    numeric: '215',
    pva: 'Latin',
    date: '2004-05-01'
  },
  {
    code: 'Leke',
    name: 'Leke',
    numeric: '364',
    date: '2015-07-07'
  },
  {
    code: 'Lepc',
    name: 'Lepcha (Róng)',
    numeric: '335',
    pva: 'Lepcha',
    date: '2007-07-02'
  },
  {
    code: 'Limb',
    name: 'Limbu',
    numeric: '336',
    pva: 'Limbu',
    date: '2004-05-29'
  },
  {
    code: 'Lina',
    name: 'Linear A',
    numeric: '400',
    pva: 'Linear_A',
    date: '2014-11-15'
  },
  {
    code: 'Linb',
    name: 'Linear B',
    numeric: '401',
    pva: 'Linear_B',
    date: '2004-05-29'
  },
  {
    code: 'Lisu',
    name: 'Lisu (Fraser)',
    numeric: '399',
    pva: 'Lisu',
    date: '2009-06-01'
  },
  {
    code: 'Loma',
    name: 'Loma',
    numeric: '437',
    date: '2010-03-26'
  },
  {
    code: 'Lyci',
    name: 'Lycian',
    numeric: '202',
    pva: 'Lycian',
    date: '2007-07-02'
  },
  {
    code: 'Lydi',
    name: 'Lydian',
    numeric: '116',
    pva: 'Lydian',
    date: '2007-07-02'
  },
  {
    code: 'Mahj',
    name: 'Mahajani',
    numeric: '314',
    pva: 'Mahajani',
    date: '2014-11-15'
  },
  {
    code: 'Maka',
    name: 'Makasar',
    numeric: '366',
    pva: 'Makasar',
    date: '2016-12-05'
  },
  {
    code: 'Mand',
    name: 'Mandaic, Mandaean',
    numeric: '140',
    pva: 'Mandaic',
    date: '2010-07-23'
  },
  {
    code: 'Mani',
    name: 'Manichaean',
    numeric: '139',
    pva: 'Manichaean',
    date: '2014-11-15'
  },
  {
    code: 'Marc',
    name: 'Marchen',
    numeric: '332',
    pva: 'Marchen',
    date: '2016-12-05'
  },
  {
    code: 'Maya',
    name: 'Mayan hieroglyphs',
    numeric: '090',
    date: '2004-05-01'
  },
  {
    code: 'Medf',
    name: 'Medefaidrin (Oberi Okaime, Oberi Ɔkaimɛ)',
    numeric: '265',
    pva: 'Medefaidrin',
    date: '2016-12-05'
  },
  {
    code: 'Mend',
    name: 'Mende Kikakui',
    numeric: '438',
    pva: 'Mende_Kikakui',
    date: '2014-11-15'
  },
  {
    code: 'Merc',
    name: 'Meroitic Cursive',
    numeric: '101',
    pva: 'Meroitic_Cursive',
    date: '2012-02-06'
  },
  {
    code: 'Mero',
    name: 'Meroitic Hieroglyphs',
    numeric: '100',
    pva: 'Meroitic_Hieroglyphs',
    date: '2012-02-06'
  },
  {
    code: 'Mlym',
    name: 'Malayalam',
    numeric: '347',
    pva: 'Malayalam',
    date: '2004-05-01'
  },
  {
    code: 'Modi',
    name: 'Modi, Moḍī',
    numeric: '324',
    pva: 'Modi',
    date: '2014-11-15'
  },
  {
    code: 'Mong',
    name: 'Mongolian',
    numeric: '145',
    pva: 'Mongolian',
    date: '2004-05-01'
  },
  {
    code: 'Moon',
    name: 'Moon (Moon code, Moon script, Moon type)',
    numeric: '218',
    date: '2006-12-11'
  },
  {
    code: 'Mroo',
    name: 'Mro, Mru',
    numeric: '264',
    pva: 'Mro',
    date: '2016-12-05'
  },
  {
    code: 'Mtei',
    name: 'Meitei Mayek (Meithei, Meetei)',
    numeric: '337',
    pva: 'Meetei_Mayek',
    date: '2009-06-01'
  },
  {
    code: 'Mult',
    name: 'Multani',
    numeric: '323',
    pva: 'Multani',
    date: '2015-07-07'
  },
  {
    code: 'Mymr',
    name: 'Myanmar (Burmese)',
    numeric: '350',
    pva: 'Myanmar',
    date: '2004-05-01'
  },
  {
    code: 'Nand',
    name: 'Nandinagari',
    numeric: '311',
    pva: 'Nandinagari',
    date: '2018-08-26'
  },
  {
    code: 'Narb',
    name: 'Old North Arabian (Ancient North Arabian)',
    numeric: '106',
    pva: 'Old_North_Arabian',
    date: '2014-11-15'
  },
  {
    code: 'Nbat',
    name: 'Nabataean',
    numeric: '159',
    pva: 'Nabataean',
    date: '2014-11-15'
  },
  {
    code: 'Newa',
    name: 'Newa, Newar, Newari, Nepāla lipi',
    numeric: '333',
    pva: 'Newa',
    date: '2016-12-05'
  },
  {
    code: 'Nkdb',
    name: 'Naxi Dongba (na²¹ɕi³³ to³³ba²¹, Nakhi Tomba)',
    numeric: '085',
    date: '2017-07-26'
  },
  {
    code: 'Nkgb',
    name: "Naxi Geba (na²¹ɕi³³ gʌ²¹ba²¹, 'Na-'Khi ²Ggŏ-¹baw, Nakhi Geba)",
    numeric: '420',
    date: '2017-07-26'
  },
  {
    code: 'Nkoo',
    name: 'N’Ko',
    numeric: '165',
    pva: 'Nko',
    date: '2006-10-10'
  },
  {
    code: 'Nshu',
    name: 'Nüshu',
    numeric: '499',
    pva: 'Nushu',
    date: '2017-07-26'
  },
  {
    code: 'Ogam',
    name: 'Ogham',
    numeric: '212',
    pva: 'Ogham',
    date: '2004-05-01'
  },
  {
    code: 'Olck',
    name: 'Ol Chiki (Ol Cemet’, Ol, Santali)',
    numeric: '261',
    pva: 'Ol_Chiki',
    date: '2007-07-02'
  },
  {
    code: 'Orkh',
    name: 'Old Turkic, Orkhon Runic',
    numeric: '175',
    pva: 'Old_Turkic',
    date: '2009-06-01'
  },
  {
    code: 'Orya',
    name: 'Oriya (Odia)',
    numeric: '327',
    pva: 'Oriya',
    date: '2016-12-05'
  },
  {
    code: 'Osge',
    name: 'Osage',
    numeric: '219',
    pva: 'Osage',
    date: '2016-12-05'
  },
  {
    code: 'Osma',
    name: 'Osmanya',
    numeric: '260',
    pva: 'Osmanya',
    date: '2004-05-01'
  },
  {
    code: 'Ougr',
    name: 'Old Uyghur',
    numeric: '143',
    date: '2021-01-25'
  },
  {
    code: 'Palm',
    name: 'Palmyrene',
    numeric: '126',
    pva: 'Palmyrene',
    date: '2014-11-15'
  },
  {
    code: 'Pauc',
    name: 'Pau Cin Hau',
    numeric: '263',
    pva: 'Pau_Cin_Hau',
    date: '2014-11-15'
  },
  {
    code: 'Pcun',
    name: 'Proto-Cuneiform',
    numeric: '015',
    date: '2021-01-25'
  },
  {
    code: 'Pelm',
    name: 'Proto-Elamite',
    numeric: '016',
    date: '2021-01-25'
  },
  {
    code: 'Perm',
    name: 'Old Permic',
    numeric: '227',
    pva: 'Old_Permic',
    date: '2014-11-15'
  },
  {
    code: 'Phag',
    name: 'Phags-pa',
    numeric: '331',
    pva: 'Phags_Pa',
    date: '2006-10-10'
  },
  {
    code: 'Phli',
    name: 'Inscriptional Pahlavi',
    numeric: '131',
    pva: 'Inscriptional_Pahlavi',
    date: '2009-06-01'
  },
  {
    code: 'Phlp',
    name: 'Psalter Pahlavi',
    numeric: '132',
    pva: 'Psalter_Pahlavi',
    date: '2014-11-15'
  },
  {
    code: 'Phlv',
    name: 'Book Pahlavi',
    numeric: '133',
    date: '2007-07-15'
  },
  {
    code: 'Phnx',
    name: 'Phoenician',
    numeric: '115',
    pva: 'Phoenician',
    date: '2006-10-10'
  },
  {
    code: 'Plrd',
    name: 'Miao (Pollard)',
    numeric: '282',
    pva: 'Miao',
    date: '2012-02-06'
  },
  {
    code: 'Piqd',
    name: 'Klingon (KLI pIqaD)',
    numeric: '293',
    date: '2015-12-16'
  },
  {
    code: 'Prti',
    name: 'Inscriptional Parthian',
    numeric: '130',
    pva: 'Inscriptional_Parthian',
    date: '2009-06-01'
  },
  {
    code: 'Psin',
    name: 'Proto-Sinaitic',
    numeric: '103',
    date: '2021-01-25'
  },
  {
    code: 'Qaaa',
    name: 'Reserved for private use (start)',
    numeric: '900',
    date: '2004-05-29'
  },
  {
    code: 'Qabx',
    name: 'Reserved for private use (end)',
    numeric: '949',
    date: '2004-05-29'
  },
  {
    code: 'Ranj',
    name: 'Ranjana',
    numeric: '303',
    date: '2021-01-25'
  },
  {
    code: 'Rjng',
    name: 'Rejang (Redjang, Kaganga)',
    numeric: '363',
    pva: 'Rejang',
    date: '2009-02-23'
  },
  {
    code: 'Rohg',
    name: 'Hanifi Rohingya',
    numeric: '167',
    pva: 'Hanifi_Rohingya',
    date: '2017-11-21'
  },
  {
    code: 'Roro',
    name: 'Rongorongo',
    numeric: '620',
    date: '2004-05-01'
  },
  {
    code: 'Runr',
    name: 'Runic',
    numeric: '211',
    pva: 'Runic',
    date: '2004-05-01'
  },
  {
    code: 'Samr',
    name: 'Samaritan',
    numeric: '123',
    pva: 'Samaritan',
    date: '2009-06-01'
  },
  {
    code: 'Sara',
    name: 'Sarati',
    numeric: '292',
    date: '2004-05-29'
  },
  {
    code: 'Sarb',
    name: 'Old South Arabian',
    numeric: '105',
    pva: 'Old_South_Arabian',
    date: '2009-06-01'
  },
  {
    code: 'Saur',
    name: 'Saurashtra',
    numeric: '344',
    pva: 'Saurashtra',
    date: '2007-07-02'
  },
  {
    code: 'Sgnw',
    name: 'SignWriting',
    numeric: '095',
    pva: 'SignWriting',
    date: '2015-07-07'
  },
  {
    code: 'Shaw',
    name: 'Shavian (Shaw)',
    numeric: '281',
    pva: 'Shavian',
    date: '2004-05-01'
  },
  {
    code: 'Shrd',
    name: 'Sharada, Śāradā',
    numeric: '319',
    pva: 'Sharada',
    date: '2012-02-06'
  },
  {
    code: 'Shui',
    name: 'Shuishu',
    numeric: '530',
    date: '2017-07-26'
  },
  {
    code: 'Sidd',
    name: 'Siddham, Siddhaṃ, Siddhamātṛkā',
    numeric: '302',
    pva: 'Siddham',
    date: '2014-11-15'
  },
  {
    code: 'Sind',
    name: 'Khudawadi, Sindhi',
    numeric: '318',
    pva: 'Khudawadi',
    date: '2014-11-15'
  },
  {
    code: 'Sinh',
    name: 'Sinhala',
    numeric: '348',
    pva: 'Sinhala',
    date: '2004-05-01'
  },
  {
    code: 'Sogd',
    name: 'Sogdian',
    numeric: '141',
    pva: 'Sogdian',
    date: '2017-11-21'
  },
  {
    code: 'Sogo',
    name: 'Old Sogdian',
    numeric: '142',
    pva: 'Old_Sogdian',
    date: '2017-11-21'
  },
  {
    code: 'Sora',
    name: 'Sora Sompeng',
    numeric: '398',
    pva: 'Sora_Sompeng',
    date: '2012-02-06'
  },
  {
    code: 'Soyo',
    name: 'Soyombo',
    numeric: '329',
    pva: 'Soyombo',
    date: '2017-07-26'
  },
  {
    code: 'Sund',
    name: 'Sundanese',
    numeric: '362',
    pva: 'Sundanese',
    date: '2007-07-02'
  },
  {
    code: 'Sylo',
    name: 'Syloti Nagri',
    numeric: '316',
    pva: 'Syloti_Nagri',
    date: '2006-06-21'
  },
  {
    code: 'Syrc',
    name: 'Syriac',
    numeric: '135',
    pva: 'Syriac',
    date: '2004-05-01'
  },
  {
    code: 'Syre',
    name: 'Syriac (Estrangelo variant)',
    numeric: '138',
    date: '2004-05-01'
  },
  {
    code: 'Syrj',
    name: 'Syriac (Western variant)',
    numeric: '137',
    date: '2004-05-01'
  },
  {
    code: 'Syrn',
    name: 'Syriac (Eastern variant)',
    numeric: '136',
    date: '2004-05-01'
  },
  {
    code: 'Tagb',
    name: 'Tagbanwa',
    numeric: '373',
    pva: 'Tagbanwa',
    date: '2004-05-01'
  },
  {
    code: 'Takr',
    name: 'Takri, Ṭākrī, Ṭāṅkrī',
    numeric: '321',
    pva: 'Takri',
    date: '2012-02-06'
  },
  {
    code: 'Tale',
    name: 'Tai Le',
    numeric: '353',
    pva: 'Tai_Le',
    date: '2004-10-25'
  },
  {
    code: 'Talu',
    name: 'New Tai Lue',
    numeric: '354',
    pva: 'New_Tai_Lue',
    date: '2006-06-21'
  },
  {
    code: 'Taml',
    name: 'Tamil',
    numeric: '346',
    pva: 'Tamil',
    date: '2004-05-01'
  },
  {
    code: 'Tang',
    name: 'Tangut',
    numeric: '520',
    pva: 'Tangut',
    date: '2016-12-05'
  },
  {
    code: 'Tavt',
    name: 'Tai Viet',
    numeric: '359',
    pva: 'Tai_Viet',
    date: '2009-06-01'
  },
  {
    code: 'Telu',
    name: 'Telugu',
    numeric: '340',
    pva: 'Telugu',
    date: '2004-05-01'
  },
  {
    code: 'Teng',
    name: 'Tengwar',
    numeric: '290',
    date: '2004-05-01'
  },
  {
    code: 'Tfng',
    name: 'Tifinagh (Berber)',
    numeric: '120',
    pva: 'Tifinagh',
    date: '2006-06-21'
  },
  {
    code: 'Tglg',
    name: 'Tagalog (Baybayin, Alibata)',
    numeric: '370',
    pva: 'Tagalog',
    date: '2009-02-23'
  },
  {
    code: 'Thaa',
    name: 'Thaana',
    numeric: '170',
    pva: 'Thaana',
    date: '2004-05-01'
  },
  {
    code: 'Thai',
    name: 'Thai',
    numeric: '352',
    pva: 'Thai',
    date: '2004-05-01'
  },
  {
    code: 'Tibt',
    name: 'Tibetan',
    numeric: '330',
    pva: 'Tibetan',
    date: '2004-05-01'
  },
  {
    code: 'Tirh',
    name: 'Tirhuta',
    numeric: '326',
    pva: 'Tirhuta',
    date: '2014-11-15'
  },
  {
    code: 'Tnsa',
    name: 'Tangsa',
    numeric: '275',
    date: '2021-02-17'
  },
  {
    code: 'Toto',
    name: 'Toto',
    numeric: '294',
    date: '2020-04-16'
  },
  {
    code: 'Ugar',
    name: 'Ugaritic',
    numeric: '040',
    pva: 'Ugaritic',
    date: '2004-05-01'
  },
  {
    code: 'Vaii',
    name: 'Vai',
    numeric: '470',
    pva: 'Vai',
    date: '2007-07-02'
  },
  {
    code: 'Visp',
    name: 'Visible Speech',
    numeric: '280',
    date: '2004-05-01'
  },
  {
    code: 'Vith',
    name: 'Vithkuqi',
    numeric: '228',
    date: '2021-02-17'
  },
  {
    code: 'Wara',
    name: 'Warang Citi (Varang Kshiti)',
    numeric: '262',
    pva: 'Warang_Citi',
    date: '2014-11-15'
  },
  {
    code: 'Wcho',
    name: 'Wancho',
    numeric: '283',
    pva: 'Wancho',
    date: '2017-07-26'
  },
  {
    code: 'Wole',
    name: 'Woleai',
    numeric: '480',
    date: '2010-12-21'
  },
  {
    code: 'Xpeo',
    name: 'Old Persian',
    numeric: '030',
    pva: 'Old_Persian',
    date: '2006-06-21'
  },
  {
    code: 'Xsux',
    name: 'Cuneiform, Sumero-Akkadian',
    numeric: '020',
    pva: 'Cuneiform',
    date: '2006-10-10'
  },
  {
    code: 'Yezi',
    name: 'Yezidi',
    numeric: '192',
    pva: 'Yezidi',
    date: '2019-08-19'
  },
  {
    code: 'Yiii',
    name: 'Yi',
    numeric: '460',
    pva: 'Yi',
    date: '2004-05-01'
  },
  {
    code: 'Zanb',
    name: 'Zanabazar Square (Zanabazarin Dörböljin Useg, Xewtee Dörböljin Bicig, Horizontal Square Script)',
    numeric: '339',
    pva: 'Zanabazar_Square',
    date: '2017-07-26'
  },
  {
    code: 'Zinh',
    name: 'Code for inherited script',
    numeric: '994',
    pva: 'Inherited',
    date: '2009-02-23'
  },
  {
    code: 'Zmth',
    name: 'Mathematical notation',
    numeric: '995',
    date: '2007-11-26'
  },
  {
    code: 'Zsye',
    name: 'Symbols (Emoji variant)',
    numeric: '993',
    date: '2015-12-16'
  },
  {
    code: 'Zsym',
    name: 'Symbols',
    numeric: '996',
    date: '2007-11-26'
  },
  {
    code: 'Zxxx',
    name: 'Code for unwritten documents',
    numeric: '997',
    date: '2011-06-21'
  },
  {
    code: 'Zyyy',
    name: 'Code for undetermined script',
    numeric: '998',
    pva: 'Common',
    date: '2004-05-29'
  },
  {
    code: 'Zzzz',
    name: 'Code for uncoded script',
    numeric: '999',
    pva: 'Unknown',
    date: '2006-10-10'
  }
]
