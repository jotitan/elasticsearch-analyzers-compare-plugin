var languageTabs = {
   "host":"HOST",
   "prefix":"PREFIX",
   "tokenizer":"Tokenizer",
   "filtres":"Filters",
   "button":{
   	   "open":"Open",
   	   "close":"Close",
   	   "connect":"Connect"
   },
   "result":{
	   "value":"Value",
	   "score":"Score",
	   "index":"Index"
   },
   "search":{
	   "type":"Search type",
	   "global":"Global",
	   "field":"Field",
	   "number":"Size"	   
   },
   "index":{
	   "generate":"Generate index",
	   "delete":"Delete all indexes",
	   "add":"Add index",
	   "manage":"Manage indexes",
	   "created":"Indexes created",
	   "cancel":"Cancel"
   },
   "data":{
	   "value":"Value",
	   "add":"Add entry",
	   "add-action":"Add",
	   "search":"Search",
	   "search-action":"Search",
	   "delete":"Delete all datas",
	   "title":"Datas"
   }  
   
};

filters.word_delimiter.label = "<span>Word delimiter</span> (split words according to differents rules)";
filters.asciifolding.label = "<span>Asciifolding</span> (remove accents)";
filters.elision.label="<span>Elision</span> (remove elision : d'...)";
filters.stop.label="<span>Stopwords</span> (Words not indexing cause too used in language (in, the, a, an...))";
filters.snowball.label="<span>Snowball</span> (Find french stem)";
filters.double_metaphone.label="<span>Double metaphone</span> (phonetic analyse, detects words sounds equals)";
filters.ngram5.label="<span>nGram 5-10</span> (cut words in parts 5 to 10c)";
filters.ngram4.label="<span>nGram 4-10</span> (cut words in parts 4 to 10c)";
filters.stemmer_light.label="<span>Stemmer light french</span> (french stem)";
filters.stemmer_french.label="<span>Stemmer french</span> (other french stem)";
filters.stemmer_minimal_french.label="<span>Stemmer minimal french</span> (other french stem)";


