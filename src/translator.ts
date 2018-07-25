import "source-map-support/register";

const originalTranslationReplacements = [
  ["childerswijk", "childâhswijk"],
  ["eider", "èijâh"], // 'projectleider'
  ["(?<![o])ei", "è"], // moet voor 'scheveningen' en 'eithoeke', geen 'groeit'
  ["koets", "patsâhbak"],
  ["kopje koffie", "bakkie pleuâh"],
  ["Kopje koffie", "Bakkie pleuâh"],
  ["koffie\\b", "pleuâh"],
  ["Koffie\\b", "Pleuâh"],
  ["Kurhaus", "Koeâhhâhs"], // moet voor 'au' en 'ou'
  ["\\bMaurice\\b", "Mâhpie"], // moet voor 'au' en 'ou'
  ["Hagenezen", "Hageneize"], // moet na 'ei'
  ["(L|l)unchroom", "$1unsroem"],
  ["\\bThis\\b", "Dis"],
  ["\\b(H|h)ighlights\\b", "$1aailaaits"],
  ["\\b(L|l)ast-minute\\b", "$1asminnut"],
  ["\\bAirport", "Èâhpogt"],
  ["\\bairport", "èâhpogt"],
  ["(A|a)dvertentie", "$1dvâhtensie"],
  ["\\b(B|b)eauty", "$1joetie"],
  ["\\bthe\\b", "de"],
  ["\\b(B|b)east\\b", "$1ies"],
  ["(B|b)each", "$1ietsj"],
  ["Bites", "Bèts"],
  ["Cuisine", "Kwiesien"],
  ["cuisine", "kwiesien"],
  ["Europese", "Euraipeise"],
  ["(?<![z])event(s|)", "ievent$1"], // geen 'zeventig'
  ["Event(s|)", "Ievent$1"],
  ["(F|f)acebook", "$1eisboek"],
  ["(F|f)avorite", "$1avverietûh"],
  ["(F|f)avoriete", "$1avverietûh"],
  ["(F|f)lagship", "fleksjip"],
  ["Jazz", "Djez"],
  ["jazz", "djez"],
  ["(T|t)entoon", "$1etoon"],
  ["(C|c)abaret", "$1abberet"],
  ["(M|m)usical", "$1usikol"],
  ["kids", "kindâh"], // 'kindertips'
  ["(M|m)ovies", "$1oevies"],
  ["(O|o)rigin", "$1rresjin"], // 'originele
  ["(P|p)alace", "$1ellus"],
  ["(P|p)rivacy", "$1raaivesie"],
  ["policy", "pollesie"],
  ["\\b(R|r)oots\\b", "$1oets"],
  ["SEA LIFE", "SIELÈF"],
  ["(S|s)how", "$1jow"],
  ["(S|s)hoppen", "$1joppûh"],
  ["(S|s)kiën", "$1kieje"],
  ["(S|s)tores", "$1toâhs"],
  ["(T|t)ouchscreen", "$1atskrien"],
  ["(T|t)ouch", "$1ats"],
  ["that", "det"],
  ["(T|t)ripadvisor", "$1ripetfaaisoâh"],
  ["(V|v)andaag", "$1edaag"],
  ["\\b(V|v)erder\\b", "$1eâhdahs"],
  ["(V|v)intage", "$1intuts"],
  ["you", "joe"],
  ["(W|w)eekend", "$1iekend"],
  ["(W|w)ork", "$1urrek"],
  ["(B|b)ibliotheek", "$1iebeleteik"],
  ["(F|f)ood", "$1oet"],
  ["doe je het", "doejenut"],
  ["\\bsee\\b", "sie"], // van 'must see'
  ["\\b(M|n)ust\\b", "$1us"], // van 'must see'
  ["(M|m)oeten", "$1otte"], // moet voor '-en'
  ["(w|W)eleens", "$1elles"], // 'weleens', moet voor 'hagenees'
  ["(g|G)ouv", "$1oev"], // 'gouveneur'
  ["heeft", "hep"], // 'heeft', moet voor 'heef'
  ["(on|i)der(?!e)", "$1dâh"], // 'onder', 'Zuiderpark', geen 'bijzondere'
  ["(?<![ao])ndere", "ndâhre"], // 'bijzondere', geen 'andere'
  ["ui", "ùi"], // moet voor 'ooi' zitte n
  ["Ui", "Ùi"],
  ["oort", "ogt"], // 'soort', moet voor '-ort'
  ["(?<![eo])ert\\b", "egt"], // 'gert'
  ["\\b(V|v)ert", "$1et"], // 'vertegenwoordiger', moet voor '-ert'
  ["(?<![eo])erte", "egte"], // 'concerten'
  ["(?<![eo])(a|o)r(|s)t(?!j)", "$1g$2t"], // barst, martin etc., geen 'eerste', 'biertje', 'sport', 'voorstellingen'
  [" er aan", " d'ran"], // 'er aan'
  ["(A|a)an het\\b", "$1nnut"], // 'aan het', moet voor 'gaan'
  ["\\b(A|a)an", "$1n"], // 'aan', 'aanrennen'
  ["\\b(G|g)aan\\b", "$1an"], // 'gaan'
  ["(H|h)oud\\b", "$1ou"], // 'houd', moet voor 'oud'
  ["(au|ou)w(?!e)", "$1"], // 'vrouw', ''flauw', maar zonder 'blauwe'
  ["oude", "ouwe"], // 'goude'
  ["\\b(T|t)our\\b", "$1oeâh"],
  ["diner\\b", "dinei"],
  ["(B|b|R|r)ou(l|t)", "$1oe$2"], // 'boulevard','routes'
  ["(?<![e])(au|ou)(?!v)", "âh"], // 'oud', geen 'souvenirs', 'cadeau', 'bureau', 'routes'
  ["Ou", "Âh"], // 'Oud'
  ["aci", "assi"], // 'racist'
  ["als een", "assun"], // 'als een'
  ["a(t|l) ik", "a$1$1ik"], // val ik, at ik
  ["alk\\b", "alluk"], // 'valk'
  ["(?<![a])ars", "ags"], // 'harses', geen 'Haagenaars'
  ["oor", "oâh"],
  ["(A|a)ar(?![io])", "$1ah"], // 'waar, 'aardappel, 'verjaardag', geen 'waarom', 'waarin'
  ["aar(?![i])", "ar"], // wel 'waarom', geen 'waarin'
  ["patie", "petie"], // 'sympatiek'
  ["aagd\\b", "aag"], // 'ondervraagd'
  ["(am|at|ig|ig|it|kk|nn)en(?![ ,.?!])", "$1e"], // 'en' in een woord, bijv. 'samenstelling', 'eigenlijk', 'buitenstaander', 'statenkwartier', 'dennenweg', 'klokkenluider'

  // woordcombinaties
  ["\\b(K|k)an er\\b", "$1andâh"],
  ["\\b(K|k)en ik\\b", "$1ennik"],
  ["\\b(K|k)en u\\b", "$1ennu"],
  ["\\b(K|k)en jij\\b", "$1ejjèh"],
  ["\\b(A|a)ls u", "$1ssu"],
  ["\\b(M|m)ag het\\b", "$1aggut"],
  ["\\bik dacht het\\b", "dachut"],
  ["\\b(V|v)an jâh\\b", "$1ajjâh"],
  ["\\b(K|k)ijk dan\\b", "$1èktan"],
  ["\\b(G|g)aat het\\b", "$1aat-ie"],
  ["\\b(M|m)et je\\b", "$1ejje"],
  ["\\b(V|v)ind je\\b", "$1ijje"],
  ["\\bmij het\\b", "mènnut"],

  ["\\b(A|a)ls er\\b", "$1stâh"],
  ["\\b(K|k)(u|a)n j(e|ij) er\\b", "$1ejjedâh"], // 'ken je er'
  ["\\b(K|k)un je\\b", "$1ajje"],
  ["\\bje ([^ ]+) je", "je $1 je ège"],
  ["ADO Den Haag", "FC De Haag"],
  ["ADO", "Adau"],
  ["(?<![i])atie(?![fkv])", "asie"], // 'informatie', geen 'initiatief', 'kwalitatieve', 'automatiek'
  ["avil", "ave"], // 'strandpaviljoen'
  ["sje\\b", "ssie"], // 'huisje', moet voor 'asje'
  ["\\balleen\\b", "enkelt"],
  ["\\bAlleen\\b", "Enkelt"],
  ["(A|a)ls je", "$1sje"], // moet voor 'als'
  ["(?<![v])als\\b", "as"],
  ["(b|k|w)ar\\b", "$1âh"],
  ["\\bAls\\b", "As"],
  [" bent\\b", " ben"], // 'ben', geen 'instrument'
  ["bote", "baute"], // 'boterham'
  ["(B|b)roc", "$1rauc"], // 'brochure'
  ["bt\\b", "b"], // 'hebt'
  ["cc", "ks"], // 'accenten'
  ["chique", "sjieke"],
  ["chure", "sjure"], // 'brochure'
  ["ct", "kt"], // 'geactualiseerde', 'directie'
  ["C(a|o)", "K$1"], // 'Concerten', 'Cadeau'
  ["cor\\b", "koâh"], // 'decor'
  ["(?<![.])c(a|o)", "k$1"], // 'concerten', 'cadeau', 'collectie', geen '.com'
  ["cu", "ku"], // 'culturele'
  ["Cu", "Ku"], // 'culturele'
  ["(ch|c|k)t\\b", "$1"], // woorden eindigend op 'cht', 'ct', 'kt', of met een 's' erachter ('geslachts')
  ["(ch|c|k)t(?![aeiouâ])", "$1"], // woorden eindigend op 'cht', 'ct', 'kt', of met een 's' erachter ('geslachts')
  ["(d|D)at er", "$1attâh"], // 'dat er'
  ["(d|D)at is ", "$1a's "], // 'dat is'
  ["denst", "dest"],
  ["derb", "dâhb"],
  ["derd\\b", "dâhd"], // 'veranderd'
  // ["(?i)(d)eze(?![l])", "$1eize"],
  ["(D|d)eze\\b", "$1eize"], // warn: alternative for the one above
  ["dt\\b", "d"], // 'dt' op het einde van een woord
  ["\\b(B|b)ied\\b", "$1iedt"], // uitzondering, moet na '-dt'

  ["(D|d)y", "$1i"], // dynamiek
  ["eaa", "eiaa"], // 'ideaal'
  ["eau\\b", "o"], // 'cadeau', 'bureau'
  ["ègen", "ège"], // 'eigentijds', moet voor 'ee'
  ["Eig", "Èg"], // 'Eigenlijk', moet voor 'ee'
  ["eig", "èg"], // 'eigenlijk', moet voor 'ee'
  ["uee\\b", "uwee"], // 'prostituee', moet voor '-ee'
  ["ueel\\b", "eweil"], // 'audiovisueel'
  ["uele\\b", "eweile"], // 'actuele'
  ["(g|n|l|L|m|M)ee(n|s)", "$1ei$2"], // 'geen', 'hagenees', 'lees', 'burgemeester'
  ["ee\\b", "ei"], // met '-ee' op het eind zoals 'daarmee', 'veel'
  ["eel", "eil"], // met '-ee' op het eind zoals 'daarmee', 'veel'
  [" is een ", " issun "], // moet voor ' een '
  ["(I|i)n een ", "$1nnun "], // 'in een', voor ' een '
  ["één", "ein"], // 'één'
  [" een ", " un "],
  ["Een ", "Un "],
  [" eens", " 'ns"], // 'eens'
  ["(?<![eo])erd\\b", "egd"], // 'werd', geen 'verkeerd', 'gefeliciteerd', 'beroerd
  ["eerd", "eâhd"], // 'verkeerd'
  ["(?<![k])ee(d|f|g|k|l|m|n|p|s|t)", "ei$1"], // 'bierfeest', 'kreeg', 'greep', geen 'keeper'
  ["(?<![èijhm])ds(?![eè])", "s"], // moet na 'ee','godsdienstige', 'gebedsdienst', geen 'ahdste', 'beroemdste', 'eigentijds', 'weidsheid', 'reeds', 'strandseizoen'
  ["(?<![e])ens\\b", "es"], // 'ergens', geen 'weleens'
  ["(D|d)ance", "$1ens"], // moet na '-ens'
  ["(?<![ hi])eden\\b", "eije"], // geen 'bieden'. 'bezienswaardigheden'
  ["(?<![ bgi])eden", "eide"], // 'hedendaagse', geen 'bedenken'
  ["\\b(E|e)ve", "$1ive"], // 'evenementen'
  ["me(d|t)e", "mei$1e"], // 'medeklinkers'
  ["eugd", "eug"], // 'jeugd', 'jeugdprijs'
  ["(?<![o])epot\\b", "eipau"], // 'depot'
  ["(e|E)rg\\b", "$1rrag"], // 'erg', moet voor 'ergens'
  ["(?<![fnN])(a|o)rm", "$1rrem"], // 'platform', 'vormgeving', 'warm', geen 'normale', 'informatie'
  ["(f|N|n)orm", "$1oâhm"], // 'normale', 'informatie'
  ["(i|I)nter", "$1ntâh"], // moet voor '-ern'
  ["elden", "elde"], // 'zeeheldenkwartier'
  ["(?<![epvV])er(m|n)", "erre$1"], // kermis', geen 'vermeer', 'vermoeide', 'externe', 'supermarkt'
  ["(?<![etv])(e|E)rg(?!ez)", "$1rreg"], // 'kermis', 'ergens', geen 'achtergelaten', 'neergelegd', 'overgebleven', 'ubergezellige'
  ["ber(?![eoiuâè])", "bâh"], // 'ubergezellige', moet na '-erg'
  ["(G|g)eve(r|n)", "$1eive$2"], // 'Gevers', moet voor '-ers', geen 'gevestigd'
  ["(?<![eo ])ers(?![. ,c])", "egs"], // 'diverse', 'versie', geen klinkers, geen 'eerste', geen 'verscheen'
  ["Vers\\b", "Vegs"], // 'vers', moet voor -ers}
  ["(?<![ei])vers\\b", "vegs"], // 'vers', moet voor -ers, geen 'Gevers'
  ["renstr", "restr"], // 'herenstraat' (voor koppelwoorden)
  ["(?<![eIio])eder", "eider"], // 'Nederland', geen 'iedereen', 'bloederige', 'Iedere'
  ["(?<![eio])ers\\b", "âhs"], // 'klinkers'
  ["(?<![v])ers(c|t)", "âhs$1"], // 'eerste', 'bezoekerscentrum', geen 'verschaffen'
  ["erwt", "erret"], // 'erwtensoep'
  ["(?<![eo])eci", "eici"], // 'speciaal'
  ["ese", "eise"], // 'reserveer'
  ["eiser", "eisâh"], // 'reserveer'
  ["eur\\b", "euâh"], // worden eindigend op 'eur', zoals 'deur', 'gouveneurlaan', geen 'kleuren'
  ["eur(?![eio])", "euâh"], // worden eindigend op 'eur', zoals 'deur', 'gouveneurlaan', geen 'kleuren', 'goedkeuring', 'euro
  ["eur(i|o)", "euâhr$1"], // 'goedkeuring', 'euro'
  ["eurl", "euâhl"], // worden eindigend op 'eur', zoals 'deur', 'gouveneurlaan'
  ["eer", "eâh"], // 'zweer', 'neer'
  ["elk\\b", "ellek"], // 'elk'
  ["(E|e)xt", "$1kst"], // 'extra'
  ["(H|h)ele", "$1eile"], // 'gehele', 'hele'
  ["\\b(g|G|v|V)ele\\b", "$1eile"], // 'vele', 'gele', 'hele'
  ["nele", "neile"], // 'originele'
  ["\\b(D|d)elen", "$1eile"], // 'delen', geen 'wandelen'
  ["sdelen", "sdeile"], // 'geslachtsdelen', geen 'wandelen'
  ["(?<![diokrs])ele(n|m)", "eile$1"], // 'helemaal', geen 'enkele', 'winkelen', 'wandelen', 'borrelen', 'beginselen'
  ["(B|b)eke(?![n])", "$1eike"], // 'beker', geen 'bekende'
  ["(?<![ioBbg])eke", "eike"], // geen 'aangekeken' op 'gek', wel 'kek'
  ["(?<![r])rege", "reige"], // 'gekregen', geen 'berrege'
  ["(?<![bBIior])e(g|v|p)e(l|n|m| )", "ei$1e$2"], // aangegeven, geen 'geleden', 'uitspreken', 'geknepen', 'goeveneur', 'verdiepen', 'postzegels', 'begeleiding', 'berregen'
  ["dige", "dege"], // 'vertegenwoordiger', moet na 'ege'
  ["alve\\b", "alleve"], // 'halve', moet na 'aangegeven'
  ["\\b(K|k)en\\b", "$1an"], // moet voor -en
  ["(a|o)ien\\b", "$1ie"], // 'uitwaaien', geen 'zien'
  ["(?<![ ieo])en([.?!])", "ûh$1"], // einde van de zin, haal ' en ', 'doen', 'zien' en 'heen'  eruit
  ["(?<![ bieoh])en\\b", "e"], // haal '-en' eruit, geen 'verscheen', 'tien', 'indien', 'ben', 'doen', 'hen'
  ["bben\\b", "bbe"], // 'hebben'
  ["oien\\b", "oie"], // 'weggooien'
  ["enso", "eso"], // 'erwtensoep'
  ["(?<![eio])enm(?![e])", "em"], // 'kinderboekenmuseum', geen 'kenmerken'
  ["(?<![eio])en(b|h|j|l|p|r|v|w|z)", "e$1"], // 'binnenhof', geen 'paviljoenhoeder'
  ["([Hh])eb je ", "$1ebbie "], // voor '-eb'
  ["(H|h)eb (un|een)\\b", "$1ep'n"], // voor '-eb'
  ["(?<![eu])eb\\b", "ep"],
  ["(E|e)x(c|k)", "$1ksk"], // 'excursies'
  ["(?<![ s])teri", "tâhri"], // 'karakteristieke'
  ["(?<![ sS])ter(?![aeirn])", "tâh"], // 'achtergesteld', geen 'beluisteren', 'literatuur', 'sterren', 'externe', 'sterker', 'karakteristieke'
  ["feli", "feili"], // 'gefeliciteerd'
  ["(I|i)ndeli", "$1ndeili"], // 'indeling', geen 'eindelijk', 'wandelingen'
  ["(f|p)t\\b", "$1"], // 'blijft', 'betrapt'
  ["\\b(N|n)iet\\b", "$1ie"], // 'niet', geen 'geniet'
  ["fd\\b", "f"], // 'hoofd'
  ["(F|f)eb", "$1eib"], // 'februari'
  ["ngt\\b", "nk"], // 'hangt'
  ["eving", "eiving"], // 'omgeving'
  ["gje\\b", "ggie"], // 'dagje'
  ["go(r)", "gau$1"], // 'algoritme'
  ["gelegd\\b", "geleige"], // 'neergelegd'
  ["([HhVvr])ee(l|n|t)", "$1ei$2"], // 'verscheen', 'veel', 'overeenkomsten', 'heet'
  ["(H|h)er(?![e])", "$1eâh"], // 'herzien', geen 'herenstraat'
  ["(I|i)n het", "$1nnut"], // 'in het'
  ["\\b(E|e)te", "$1ite"], // 'eten'
  ["(?<![ior])ete(?![i])", "eite"], // 'hete', 'gegeten', geen 'bibliotheek','erretensoep', 'koffietentjes', 'genieten, 'roetes (routes)'
  ["(d|h|l|m|r|t)ea(?![m])", "$1eija"], // 'theater', geen 'team'
  ["\\bhet\\b", "ut"],
  ["Het\\b", "Ut"],
  ["(?<![eouù])i\\b", "ie"], // 'januari'
  ["ieri", "ieâhra"], // 'plezierig'
  ["ier(?!(a|e|i|ony))", "ieâh"], // 'bierfeest', 'hieronder', geen 'hieronymus', 'plezierig', 'dieren'
  ["iero(?!e|o|nd)", "ierau"], // 'hieronymus', geen 'hieronder'
  ["ière", "ijerre"], // 'barriere'
  ["ibu", "ibe"], // 'tribunaal'
  ["icke", "ikke"], // 'tickets'
  ["ijgt\\b", "ijg"], // 'krijgt', moet voor 'ij\\b'
  ["(B|b)ijz", "$1iez"], // 'bijzondere', moet voor 'bij'
  ["ij\\b", "è"], // 'zij', 'bij'
  ["(?<![e])ije(n|)", "èje"], // 'bijenkorf', 'blije', geen 'geleie'
  ["(B|b)ij", "$1è"], // 'bijbehorende'
  ["\\blijk\\b", "lèk"], // 'lijk' , geen 'eindelijk' ('-lijk')
  ["(D|d|K|k|R|r|W|w|Z|z)ijk", "$1èk"], // 'wijk', geen '-lijk'
  ["ij([dgslmnftpvz])", "è$1"], // 'knijp', 'vijver', 'stijl', 'vervoersbewijzen', geen '-lijk'
  ["(?<![euù])ig\\b", "ag"], // geen 'kreig', 'vliegtuig'
  ["lige\\b", "lage"], // 'gezellige'
  ["(?<![euù])igd\\b", "ag"], // gevestigd
  ["ilm", "illem"], // 'film'
  ["ilieu", "ejui"], // 'milieu'
  ["inc", "ink"], // 'incontinentie'
  ["io(?![oen])", "iau"], // 'audio', geen 'viool', 'station'
  ["\\bin m'n\\b", "imme"],
  ["(n|r)atio", "$1asjau"], // 'internationale'
  ["io\\b", "iau"], // 'audio', geen 'viool', 'station', 'internationale'
  ["io(?![oen])", "iau"], // 'audio', geen 'viool', 'station', 'internationale'
  ["ir(c|k)", "irrek"], // 'circus'
  ["(?<![gr])ties\\b", "sies"], // 'tradities', moet voor -isch, geen 'smarties'
  ["isch(|e)", "ies$1"],
  ["is er", "istâh"],
  ["ap je\\b", "appie"], // 'stap je'
  ["(p) je\\b", "$1ie"], // 'loop je', geen 'stap je'
  ["(g|k) je\\b", "$1$1ie"], // 'zoek je'
  ["jene", "jenei"], // 'jenever'
  ["jezelf", "je ège"], // "jezelf"
  ["(?<![oe])kje\\b", "kkie"], // 'bakje', moet voor algemeen regel op 'je', TODO, 'bekje'
  ["olg", "olleg"], // 'volgens'
  ["o(k|p)je\\b", "o$1$1ie"], // 'kopje', 'gokje'
  ["(?<![ deèijst])je\\b", "ie"], // woorden eindigend op -je', zonder 'asje', 'rijtje', 'avondje', geen 'mejje' 'blèjje', 'skiën'
  ["(K|k)an\\b", "$1en"], // 'kan', geen 'kans', 'kaneel'
  ["(K|k)unne", "$1enne"], // 'kunnen', TODO, wisselen van u / e
  ["(K|k)unt", "$1en"],
  ["(K|k)led", "$1leid"], // 'kleding'
  ["orf", "orref"],
  ["oro(?![eo])", "orau"], // 'Corona'
  ["Oo([igkm])", "Au$1"], // 'ook'
  ["oo([difgklmnpst])", "au$1"], // 'hoog', 'dood'
  ["rij", "rè"],
  ["tieg", "sieg"], // 'vakantiegevoel'
  ["(?<![e])tie\\b", "sie"], // 'directie', geen 'beauty'
  ["enties\\b", "ensies"], // 'inconsequenties', geen 'romantisch'
  ["erpe", "errepe"], // 'modeontwerper'
  ["(b|B|k|K|m|L|l|M|p|P|t|T|w|W)erk", "$1errek"], // 'kerk', 'werkdagen', geen 'verkeer'
  ["(f|k)jes\\b", "$1$1ies"], // 'plekjes'
  ["(M|m)'n", "$1e"], // 'm'n'
  ["(M|m)ong", "$1eg"], // 'mongool'
  ["(M|m)ein(?![ut])", "$1eint"], // moet na 'ee', geen 'menu', 'gemeentemuseum'
  ["mt\\b", "mp"], // 'komt'
  ["(?<![oO])md(?![e])", "mp"], // 'beroemdste', geen 'omdat', 'beroemde
  ["lair(?![e])", "lèh"], // geen 'spectaculaire'
  ["ulaire", "elère"], // 'spectaculaire'
  ["lein", "lèn"],
  ["\\bliggûh\\b", "leggûh"],
  ["\\b(L|l)igge\\b", "$1egge"],
  ["\\b(L|l)igt\\b", "$1eg"],
  ["(?<![p])(L|l)ez", "$1eiz"], // 'lezer', geen 'plezierig'
  ["lf", "lluf"], // 'zelfde'
  ["ll([ ,.])", "l$1"], // 'till'
  ["(a|e|i|o|u)rk\\b", "$1rrek"], // 'park', 'stork'
  ["(P|p)arke", "$1agke"], // 'parkeervergunning', moet voor '-ark'
  ["ark(?![a])", "arrek"], // 'markt', 'marktstraat', geen 'markante'
  ["ark", "agk"], // 'markante', moet na -ark
  ["\\b(M|m)oet\\b", "$1ot"], // 'moet', geen 'moeten'
  ["nair", "nèâh"], // 'culinair'
  ["neme\\b", "neime"], // 'nemen', geen 'evenementen''
  ["nce", "nse"], // 'nuance'
  ["\\b(N|n)u\\b", "$1âh"],
  ["ny", "ni"], // 'hieronymus'
  ["\\bmad", "med"], // 'madurodam'
  ["oer\\b", "oeâh"], // 'broer'
  ["oer(?![aieou])", "oeâh"], // 'beroerd', 'hoer', geen 'toerist', 'stoere
  ["oeder", "oedâhr"], // 'bloederigste'
  ["(ordt|ord)(?![e])", "ogt"], // wordt, word, geen 'worden'
  ["orde", "ogde"], // 'worden'
  ["(N|n)(|o)od", "$1aud"], // 'noodzakelijk'
  ["nirs\\b", "nieâhs"], // 'souvenirs'
  ["l(f|k|m|p)(?![a])", "lle$1"], // 'volkslied', 'behulp', geen 'elkaar'
  ["olk", "ollek"], // 'volkslied'
  ["(F|f)olleklore", "$1olklore"],
  ["o(c|k)a", "auka"], // 'locaties'
  ["(?<![o])oms", "omps"], // 'aankomsthal'
  ["one(e|i)", "aunei"], // 'toneel'
  ["oni", "auni"], // 'telefonische'
  ["hore", "hoâhre"], // 'bijbehorende'
  ["org\\b", "orrag"], // 'zorg'
  ["orge", "orrage"], // 'zorgen'
  ["orp", "orrep"], // 'ontworpen'
  ["\\borg", "oâhg"], // 'orgineel'
  ["Over(?![ei])", "Auvâh"], // 'overgebleven', 'overnachten', geen 'overeenkomsten', 'overige'
  ["over(?![ei])", "auvâh"], // 'overgebleven', geen 'overeenkomsten', 'overige'
  ["o(v|z)e", "au$1e"],
  ["(?<![g])o(b|d|g|k|l|m|p|s|t|v)(i|e)", "au$1$2"], // 'komen', 'grote', 'over', 'olie', 'notie', geen 'gokje'
  ["O(b|d|g|k|l|m|p|s|t|v)(i|e)", "Au$1$2"], // zelfde, maar dan met hoofdletter
  ["\\bout", "âht"], // 'outdoor'
  ["\\bOut", "Âht"], // 'Outdoor'
  ["\\b(V|v)er\\b", "$1eâh"], // 'ver'
  ["(D|d)ert", "$1eâht"], // 'dertig'
  ["der(?![eianrouèt])", "dâh"], // 'moderne'/'moderrene', geen 'dertig'
  ["\\b(P|p|T|t)er\\b", "$1eâh"], // 'per', 'ter'
  ["(?<![ io])er\\b", "âh"], // 'kanker', geen 'hoer', 'er', 'per', 'hier' , moet voor 'over' na o(v)(e)
  ["(P|p)er(?!i)", "$1âh"], // 'supermarkt', geen 'periode', moet na 'per'
  ["(P| p)o(^st)", "$1au$2"], // 'poltici'
  ["p ik\\b", "ppik"], // 'hep ik'
  ["ppen", "ppe"], // 'poppentheater'
  ["popu", "paupe"], // 'populairste'
  ["(p|P)ro(?![oefkns])", "$1rau"], // 'probleem', geen 'prof', 'prostituee', 'instaprondleiding'
  ["(p|P)rofe", "$1raufe"], // 'professor', 'professioneel'
  ["ersch", "esch"], // 'verschijn'
  ["(A|a)rme", "$1rreme"], // 'arme'
  ["re(s|tr)(e|o)", "rei$1$2"], // 'resoluut', 'retro', 'reserveren'
  ["redespa", "reidespe"], // voor Vredespaleis
  ["(R|r)elax", "$1ieleks"],
  ["(R|r)estâhrant", "$1esterant"],
  ["rants\\b", "rans"], // 'restaurants'
  ["rigste", "ragste"], // 'bloederigste'
  ["rod", "raud"], // 'madurodam'
  ["(r|R)ou", "$1oe"], // 'routes'
  ["(a|o)rt", "$1gt"],  // 'korte'
  ["([Rr])o(?=ma)", "$1au"], // voor romantisch, maar haal bijv. rommel eruit
  ["inds", "ins"], // 'sinds'
  ["seque", "sekwe"], // 'inconsequenties'
  ["sjes\\b", "ssies"], // 'huisjes'
  ["(S|s)hop", "$1jop"], // 'shop'
  ["stje\\b", "ssie"], // 'beestje'
  ["st(b|d|g|h|j|k|l|m|n|p|v|w|z)", "s$1"], // 'lastpakken', geen 'str'
  ["(S|s)ouv", "$1oev"], // 'souvenirs'
  ["(s|S)tran", "$1tgan"], // 'strand', moet 'na st-'
  ["\\b(s|S)tr", "$1tg"], // 'strand', moet 'na st-'
  ["(?<![gr])st\\b", "s"], // 'haast', 'troost', 'gebedsdienst', geen 'barst'
  ["tep\\b", "teppie"], // 'step'
  ["té\\b", "tei"], // 'satè'
  ["tion", "sion"], // 'station'
  ["tje\\b", "tsje"], // 'biertje'
  ["(p|t)o\\b", "$1au"], // 'expo', moet na 'au'/'ou'
  ["toma", "tauma"], // moet na 'au'/'ou', 'automatiek', geen 'tom'
  ["(T|t)ram", "$1rem"], // 'tram'
  ["ua", "uwa"], // 'nuance', 'menstruatie'
  ["(J|j)anu", "$1anne"], // 'januari', moet na 'ua'
  ["ùite\\b", "ùitûh"], // 'buiten'
  ["(u|ù)igt\\b", "$1ig"], // 'zuigt'
  ["(U|u)ren", "$1re"], // 'uren'
  ["ùidâh\\b", "ùiâh"], // 'klokkenluider'
  ["unch", "uns"], // 'lunch'
  ["urg", "urrag"], // 'Voorburg'
  ["(?<![u])urs", "ugs"], // 'excursies', geen 'cultuurschatten'
  ["uur", "uâh"], // 'literatuurfestival', moet voor '-urf'
  ["ur(f|k)", "urre$1"], // 'Turk','snurkende','surf'
  ["(T|t)eam", "$1iem"],
  ["tu(?![âfkust])", "te"], // 'culturele', geen 'tua', 'vintage', 'instituut', 'tussenletter', 'stuks'
  ["\\bvan je\\b", "vajje"],
  ["\\bvan (het|ut)\\b", "vannut"],
  ["([Vv])er(?![aeious])", "$1e"], // wel 'verkoop', geen 'verse', 'veranderd', 'overeenkomsten', 'overige'
  ["\\bvaka", "veka"], // 'vakantie'
  ["vaka", "veka"], // 'vakantie'
  ["vard\\b", "vâh"], // 'boulevard'
  ["\\b(V|v)ege", "$1eige"], // 'vegetarisch'
  ["voetbal", "foebal"],
  ["we er ", "we d'r "], // 'we er'
  ["\\ber\\b", "d'r"],
  ["\\bEr\\b", "D'r"],
  ["wil hem\\b", "wil 'm"],
  ["(W|w|H|h)ee(t|l)", "$1ei$2"], // 'heel', 'heet'
  ["yo", "yau"], // 'yoga'
  ["\\b(Z|z)ee", "$1ei"], // 'zeeheldenkwartier'
  ["\\b(Z|z)ult\\b", "$1al"],
  ["z'n", "ze"], // 'z'n'
  ["\\bzich\\b", "ze ège"], // 'zich'
  ["z(au|o)'n", "zaun"],
  ["\\bzegt\\b", "zeg"],
  ["(z|Z)o(?![enr])", "$1au"], // 'zogenaamd', geen 'zoeken', 'zondag', 'zorgen'
  ["'t", "ut"],
  ["derr", "dèrr"], // 'moderne, moet na 'ern'/'ode'
  ["Nie-westegse", "Niet westagse"],
  ["us sie", "us-sie"], // 'must see'
  ["\\bThe Hague\\b", "De Heek"], // moet na 'ee -> ei'
  ["Crowne", "Kraun"],
  ["social media", "sausjel miedieja"], // moet na 'au'

  // quick fixups
  ["stgong>", "strong>"], // fixups for <strong tag>
  ["kute;", "cute;"], // fixups for &eacute; tag
  ["&ksedil;", "&ccedil;"], // fixups for &ccedil; tag
  ["lie>", "li>"], // fixups for <li> tag
];

// the word boundary '\b' in javascript doesn't work the same as in the original project, so replace it iwth something that will work
const boundaryCharacters = "\\s.,:;\\-_?!";
const boundaryStart = `(?<=^|[${boundaryCharacters}])`;
const boundaryEnd = `(?=$|[${boundaryCharacters}])`;
const translationReplacements = originalTranslationReplacements.map((r) => {
  const regex = r[0]
    .replace(/^\\b/g, boundaryStart)
    .replace(/\\b$/g, boundaryEnd);
  return [regex, r[1]];
});

function translate(dutch: string) {
  if (!dutch) {
    return dutch;
  }

  return translationReplacements.reduce((result, replacement) => {
    try {
      return result.replace(new RegExp(replacement[0], "gm"), replacement[1]);
    } catch (e) {
      return result;
    }
  }, dutch);
}

function getHits(dutch: string) {
  if (!dutch) {
    return [];
  }

  const result: Array<[string, string, string]> = [];
  return translationReplacements.reduce((r, replacement) => {
    try {
      const original = dutch;
      const haags = original.replace(new RegExp(replacement[0], "gm"), replacement[1]);
      const didHit = original.toLowerCase() !== haags.toLowerCase();

      if (didHit) {
        r.push([replacement[0], replacement[1], haags]);
      }
      return r;
    } catch (e) {
      return r;
    }
  }, result);
}

function showHits(dutch: string) {
  getHits(dutch).map((r) => {
    // tslint:disable-next-line
    console.log('\x1b[32m', `[${r[0]}]`, '\x1b[0m-\x1b[33m', `[${r[1]}]`, '\x1b[0m:', r[2]);
  });
}

module.exports = {
  showHits,
  translate,
};
