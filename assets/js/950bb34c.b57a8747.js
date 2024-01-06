"use strict";(self.webpackChunkdrawshield_api=self.webpackChunkdrawshield_api||[]).push([[469],{1837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.2","servers":[{"url":"https://drawshield.net"}],"info":{"title":"Unofficial Drawshield API docs","version":"1.0","description":"# About\\n**Unofficial Drawshield API docs**\\nBuilt by [Flammableassassin](https://github.com/flamableassassin)\\n\\nIf you wish to contribute feel free to here https://github.com/flamableassassin/drawshield-api\\n\\nCheckout other projects I have made around Drawshield:\\n- Discord bot: https://github.com/flamableassassin/drawshieldbot - [Invite](https://discord.com/api/oauth2/authorize?client_id=1152390089628991578&permissions=0&scope=applications.commands%20bot)\\n- Cloudflare worker caching for self hosted Drawshield - https://github.com/flamableassassin/Drawshield-Code\\n"},"tags":[{"name":"drawshield-code","x-displayName":"DrawShield Code","description":"The open source part of the website on `/include` [Github](https://github.com/drawshield/Drawshield-Code)","externalDocs":{"url":"https://github.com/drawshield/Drawshield-Code/wiki"}},{"name":"api","x-displayName":"Official API","description":"The api part of the website on `/api`","externalDocs":{"url":"https://drawshield.net/resources/reference-api.html"}},{"name":"other","x-displayName":"Other","description":"Other parts of the website which could be useful"}],"x-tagGroups":[{"name":"General","tags":["drawshield-code","api","other"]}],"paths":{"/include/drawshield.php":{"get":{"tags":["drawshield-code"],"summary":"Shield Generator","description":"The endpoint for producing shields","externalDocs":{"description":"Official docs for this endpoint","url":"https://github.com/drawshield/Drawshield-Code/wiki/The-DrawShield-API"},"parameters":[{"name":"blazon","in":"query","description":"The blazon to be used","required":true,"schema":{"$ref":"#/components/schemas/blazon"}},{"name":"shape","in":"query","description":"The shape of the output","required":false,"schema":{"$ref":"#/components/schemas/shape"}},{"name":"palette","in":"query","description":"The colour palette used","required":false,"schema":{"$ref":"#/components/schemas/palette"}},{"name":"effect","in":"query","description":"The effect to apply","required":false,"schema":{"$ref":"#/components/schemas/effect"}},{"name":"size","description":"The width of the image","in":"query","required":false,"schema":{"$ref":"#/components/schemas/size"}},{"name":"outputformat","description":"The output format you wish to have","in":"query","required":false,"schema":{"$ref":"#/components/schemas/outputformat"}},{"name":"ar","description":"The aspect ratio for the flag shape","in":"query","required":false,"schema":{"$ref":"#/components/schemas/aspectratio"}},{"name":"printable","description":"This option used to turn off the text shown to the bottom left of the shield when saving as a file. This happens automatically now so the option is no longer required","deprecated":true,"in":"query","required":false,"schema":{"$ref":"#/components/schemas/printable"}},{"name":"stage","description":"(For debugging use only)","required":false,"in":"query","schema":{"$ref":"#/components/schemas/stage"}},{"name":"webcols","description":"Allow any of the named web colours to be used","required":false,"in":"query","schema":{"$ref":"#/components/schemas/yesParam"}},{"name":"whcols","description":"Allow any of the named web colours to be used","required":false,"in":"query","schema":{"$ref":"#/components/schemas/yesParam"}},{"name":"tartancols","description":"Allow any of the named web colours to be used","required":false,"in":"query","schema":{"$ref":"#/components/schemas/yesParam"}},{"name":"asfile","description":"Unknown affect on request If this option is present then instead of returning the image the program will force the download of the image as a file, called \\"shield.svg\\", \\"shield.png\\" or \\"shield.jpg\\" depending on the setting of the \\"saveformat\\" option.\\n","in":"query","required":false,"schema":{"type":"string","description":"Unknown affect on request"}},{"name":"saveformat","description":"This option selects the file format for the \\"asfile\\" option, it takes the same values as \\"outputformat\\" above.","in":"query","required":false,"schema":{"$ref":"#/components/schemas/outputformat"}}],"responses":{"200":{"$ref":"#/components/responses/image"}}}},"/include/randomblazon.php":{"get":{"summary":"Generate a random blazon","tags":["drawshield-code"],"description":"Generate a random blazon depending on the parameters provided\\n\\nNote not all parameters for charges are documented. Please see the [official docs](https://github.com/drawshield/Drawshield-Code/wiki/The-RandomBlazon-API#charge-choices:~:text=%3F-,(TBD),%3F,-chg%2Dloc%2Dchance)\\n","externalDocs":{"url":"https://github.com/drawshield/Drawshield-Code/wiki/The-RandomBlazon-API","description":"Official docs for this endpoint"},"parameters":[{"name":"tinc-all","description":"(Colour and Pattern) Turn all tinctures on or off (processed first)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"tinc-common","description":"(Colour and Pattern) Use the most common heraldic colours (Gules, azure...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"tinc-second","description":"(Colour and Pattern) Use the secondary heraldic colours (Tenne, murrey...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"tinc-modern","description":"(Colour and Pattern) Use modern colours (Copper, iron, buff...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"tinc-treatments","description":"(Colour and Pattern) Use any two of the preceding colours in one of a number of repeating patterns (Fretty, maily...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"tinc-furs","description":"(Colour and Pattern) Use any of the known furs (Ermine, potent...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-all","description":"(Division) Turn all divisions on or off (processed first)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-chance","description":"(Division) %-age likelihood of a divided field (as opposed to a plain field)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/0To100"}},{"name":"div-2part","description":"(Division) Use the major two part divisions (per fess, per pale...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-3part","description":"(Division) Use the major three part divisions (tierced in fess...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-bars","description":"(Division) Use divisions made up of bars (barry, bendy...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-small","description":"(Division) Use the smaller, less common divisions (Chape, chausse...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-pattern","description":"(Division) Use divisions of over-lapping bars (Barry bendy...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-counter","description":"(Division) Use two overlapping divisions, counterchanged","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"div-edges","description":"(Division) Vary the edge types (wavy, rayonny...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-all","description":"(Ordinary) Turn all ordinaries on or off (processed first)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-chance","description":"(Ordinary) %-age likelyhood of an ordinary appearing","in":"query","required":false,"schema":{"$ref":"#/components/schemas/0To100"}},{"name":"ord-common","description":"(Ordinary) Use common ordinaries (Fess, pale, bend...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-multi","description":"(Ordinary) Use ordinaries made of multiple bars (bars, pales...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-minor","description":"(Ordinary) Use less common ordinaries (Canton, gyron...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-rare","description":"(Ordinary) Use rarely seen ordinaries (Crancelin, gorge...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"ord-mods","description":"(Ordinary) Vary edges, add cottices etc. (nowy, voided...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-all","description":"(Charges) Turn all charges on or off (processed first)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-chance","description":"(Charges) %-age likelyhood of a charge appearing","in":"query","required":false,"schema":{"$ref":"#/components/schemas/0To100"}},{"name":"chg-lion","description":"(Charges) Use various poses of lions and their features (lion rampant...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-geom","description":"(Charges) Use geometric charges (mullet, triangle...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-cross","description":"(Charges) Use some of the many styles of heraldic crosses as charges (tau, bottony...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-bird","description":"(Charges) Use charges of various birds, possibly in different poses (chough, dove...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-crown","description":"(Charges) Crown\'s, coronets and jewels (Naval, Ducal, orb...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-animal","description":"(Charges) Use charges of animals that do not fall into other categories, possibly in different poses (fox, sheep...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-weapon","description":"(Charges) Use charges of weapons and related items (sword, pheon...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-myth","description":"(Charges) Use charges of mythical creatures, possibly in different poses (dragon, basilisk...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-symbols","description":"(Charges) Use charges that represent various symbols (planet mars, alchemical...)","in":"query","required":false,"schema":{"$ref":"#/components/schemas/onOffParam"}},{"name":"chg-loc-chance","description":"(Charges) %-age likelyhood that the charge is in a location other than centered on the field","in":"query","required":false,"schema":{"$ref":"#/components/schemas/0To100"}}],"responses":{"200":{"description":"The blazon","content":{"text/plain":{"example":"Gules  \\na fess quadrate argent.\\n\\n// created by Drawshield.net/random\\n","schema":{"type":"string"}}}}}}},"/api/define/{term}":{"get":{"tags":["api"],"externalDocs":{"url":"https://drawshield.net/resources/reference-api.html#:~:text=Getting%20a%20Dictionary%20Definition%20of%20a%20Term","description":"Drawshield official docs"},"summary":"Define term","description":"Get the definition of a term","parameters":[{"name":"term","in":"path","required":true,"schema":{"type":"string"}},{"name":"source","in":"query","description":"The source dictionary to search. For more information please see the [official Docs](https://drawshield.net/resources/reference-api.html#options:~:text=source%3A%20This%20allows,added%20in%20future.)","required":false,"schema":{"default":"*","type":"string","enum":["parker","elvin","*"]}},{"name":"match","description":"How to search the dictionary. For more information please see the [official Docs](https://drawshield.net/resources/reference-api.html#options:~:text=match%3A%20This%20allows,term.%20(See%20below).)","in":"query","schema":{"type":"string","default":"fuzzy","enum":["exact","fuzzy"]}}],"responses":{"200":{"description":"The response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","title":"Term definition","properties":{"content":{"type":"string","description":"The definition","example":"Azure, bright blue, i.e. the colour of an eastern sky, probably derives the name from the Arabic lazura(conf. lapis lazuli, Gr. , Span. azul, Italian azurro, Fr. azur), the name being introduced from the East at the time of the Crusades. It is sometimes called Inde from the sapphire, which is found in the East: (see example under cadency.) Heralds who blazon by planets called it Jupiter, perhaps from his supposed rule over the skies; and when the names of jewels are employed it is called Sapphire. Engravers represent it by an indefinite number of horizontal line."},"URL":{"type":"string","format":"URI","description":"The link to the term page","example":"https://drawshield.net/reference/parker/a/azure.html"}}},{"type":"object","title":"Term not found","properties":{"error":{"type":"string","enum":["Term not found"]}}}]}}}}}}},"/api/gallery/{query}":{"get":{"tags":["api"],"summary":"Searches the gallery for a query","description":"Searches the gallery for a query of either the item id or blazon.\\n\\n **Notes**:\\n  - This was found via reverse engineering and there aren\'t any official docs\\n  - The response type is application/json but it is format is string\\n","parameters":[{"name":"query","in":"path","required":true,"schema":{"oneOf":[{"type":"string","title":"Blazon query","description":"The blazon query you wish to search for","example":"Azure"},{"type":"integer","title":"Gallery item id","description":"The item id to search for should be 6 digits long. e.g if you wanted to find id `120` it would be `000120`","example":12074}]}}],"responses":{"200":{"description":"The result","content":{"application/json":{"schema":{"oneOf":[{"type":"string","title":"Blazon search result (Found)","description":"Blazon search result with up to 31 results with separating them","example":"009704 pale  to the sinister to the sinister  a lion rampant narrower narrower  //azures, lion rampant between four roses or  with tags: lion reguardant, roses  ar\\n008649 celestial azure celestial azure  celestial azure celestial azure celestial azure celestial azure  celestial azure celestial azure celestial azure celestial\\n007889 barry of seven azure, argent, azure, or, azure, argent,  and azure  achievement mantling azure and argent  crest on a helmet iron two ostrich feathers  add\\n005491 azure,  a barrulet tierced per fess azure argent azure,  an endorse tierced per pale azure argent azure,  in fess point a hurt fimbriated azure smaller,  i\\n010152 med azure langued azure;  2). or a lion rampant gules armed azure langued azure;;  2nd per pale.  1). or a lion rampant gules armed azure langued azure;  2\\n000503 tierced in pale azure,  azure and  azure a bend indented or a eagle argent  (previously entry no. 9497)  micro nation\\n007107 ure  a plate   fimbriated azure  a hurt fimbriated  azure  a crosslet azure fimbriated azure  a crosslet argent fimbriated azure  (previously entry no. 289\\n004688 med azure  iv gules 3 lion passant guardant in pale  or armed  azure langued azure  v azure a harp or vi argent a maple leaf gules  mantling argent and gul\\n004873 e smaller, iv gules 3 lion passant guardant  in pale  or armed azure langued azure, v azure a harp  or vi argent a maple leaf gules  (previously entry no. \\n005160 n  pale or armed azure langued azure 2nd or a double tressure flory counter flory gules  a lion gules armed azure langued azure  3rd azure a harp or smalle\\n009635 d and  langued azure in pale  16th or six fleur de lis fancy azure stroked azure  arranged 3 2 1  17th or semy of hearts azure a lion azure armed and  lang\\n005200 blazon  tierced in fess embattled sable argent and azure in  chief 3 star or in nombril 2 forget me not  argent  a bear couchant  sable  (previously entry \\n000855 arp or, stringed argent.  fourth or a lion rampant gules armed and langued azure  within a double tressure flory counter flory gules.  (previously entry no\\n004105 blazon  quartered  i and iv  argent a crosslet formy gules  ii and iii  azure a bend or  (previously entry no. 5895)\\n000259 sinister  4th or a lion rampant sable armed and langued gules impaled with azure semy de crosses crosslet fitchy or two salmon or palewise reversed higher;\\n005386 quarterly white, barry  or and sable, azure  in first quarter a cornucopia  yellow ochre  in second quarter a wolf rampant  white  in third quarter a wolf \\n001405 blazon  quarterly azure and gules  one anchor sable  one lion or goutty gules armed langued crowned argent  on a chief rayonny argent three sea horse gules\\n006158 d and to the  dexter and to the dexter, a base wavy barry  wavy argent and azure, a natural eagle or  and and and to the  dexter and to the dexter, a light\\n002261 blazon  gules one flank or semy  of stars azure  one bow argent  (previously entry no. 7739)\\n000439 gules  2 lions passant gardant or in pale armed langued azure  (previously entry no. 9561)\\n010380 argent, on a chevron azure a griffin s head erased  or shewn between two mascles of the  field, two crosses bottony fitchy in chief and a mullet  sable she\\n010931 azure a bend chequy argent and gules\\n006012 of mortimer  (previously entry no. 3988)  with tags: england  barry or and azure, on a chief of the first two pallets between two gyrons of the second over\\n009296 per fess engrailed argent and azure, one annulet of  rope orange  with tags: annulet, rope, sea\\n009068 quartered i and iv azure three fleur de lis or ii and  iii white three lions gules  with tags: regional  it s inspired by the coat of arms of picardy and i\\n004467 blazon  gyronny of 12 or and azure       four seagulls volant in pale ermine  created by drawshield.net/random  (previously entry no. 5533)\\n010952 quarterly, i and iv azure a dove reguardant or, ii  paly of seven argent and sable, iii sanguine a lion  courant argent a patriarchal cross argent in middl\\n006869 celestial azure  on a bend  steel 2 archer reversed argent  in sinister chief a compass star pierced  argent  (previously entry no. 3131)  with tags: arche\\n000773 quarterly  1st and 4th azure a chevron or  between 3 owls argent  2nd and 3rd argent a lion rampant sable  langued gules a chief or  (previously entry no. \\n006778 azure  one bordure or embattled counter embattled  three lions or armed gu langued gu crowned gu  mantling az and or  one knight helmet argent  torse az an\\n004243 blazon  fretty azure argent a chief gules charged with three  leopard heads or langued vert  (previously entry no. 5757)  with tags: cann\\n"},{"type":"string","title":"Blazon search result (Not found)","description":"Blazon search result with nothing found","enum":["Sorry, nothing found for {query}\\n"]},{"type":"string","title":"Gallery id (Found)","format":"URI","description":"Gallery search and result found","example":"http://drawshield.net/gallery/0097/img/gallery-009704.png\\n"},{"type":"string","title":"Gallery id (Not found)","description":"Gallery search with nothing found","enum":["No gallery entry found for {query}"]}]}}}}}}},"/api/challenge/{source}":{"get":{"tags":["api"],"summary":"Fetch a random challenge image","description":"Returns a random challenge image for the user to try recreate.\\n\\nSource parameter info:\\n- coadb - coadb.com catalog of European surnames(32,000 entries, monochrome)\\n- wikimedia - Wikimedia commons(243, genuine DrawShield, colour)\\n- public - The Book of Public Arms(1, 200 entries, monochrome)\\n- all - All of them combined\\n\\n\\n**Notes:**\\n\\n- This was found via reverse engineering and there aren\'t any official Docs\\n- The response type is application/json but it is format is string\\n","parameters":[{"name":"source","in":"path","required":true,"schema":{"type":"string","default":"all","enum":["coadb","wikimedia","public","all"]}}],"responses":{"200":{"description":"The link to the image","content":{"application/json":{"example":"http://wappenwiki.org/images/2/20/Croatia_1527.svg","schema":{"type":"string","format":"URI"}}}}}}},"/gallery/getvotes.php":{"get":{"tags":["other"],"summary":"Vote count for gallery item","description":"Returns the number of votes (likes) an item in the gallery has. **Note this was found via reverse engineering and there aren\'t any official docs**","parameters":[{"name":"refnum","in":"query","required":true,"schema":{"type":"integer","format":"item id"}}],"responses":{"200":{"description":"The number of votes (likes)","content":{"text/plain":{"example":12,"schema":{"type":"integer","description":"The number of votes (likes)"}}}}}}}},"components":{"schemas":{"blazon":{"type":"string","example":"Crusilly orange and gules three chevronels interlaced purpure three lions courant in bend sinister or."},"shape":{"default":"heater","type":"string","enum":["heater","heater","french","oval","lozenge","square","italian","swiss","english","german","horsehead","polish","spanish","circle","sca","hungarian","scutum","african","persian","swatch","pauldron","stamp","flag"]},"palette":{"type":"string","default":"drawshield","enum":["wikipedia","drawshield","wappenwiki","cc3","flat","english","emoji","bajuvarian","hatching","outline"]},"effect":{"type":"string","default":"none","enum":["none","shiny","plain","stonework","plaster","vellum","ripples","fabric","inked"]},"size":{"default":500,"type":"integer"},"outputformat":{"default":"svg","type":"string","enum":["svg","jpg","png","json"]},"aspectratio":{"type":"integer","default":0.5},"printable":{"default":false,"type":"boolean"},"stage":{"default":"render","type":"string","enum":["parser","references","links","render"]},"yesParam":{"type":"string","enum":["yes"]},"images":{"type":"string","format":"binary"},"onOffParam":{"type":"string","enum":["on","off"]},"0To100":{"type":"integer","minimum":0,"maximum":100}},"responses":{"image":{"description":"The output image. The content type depends on `outputformat` and `saveformat` parameters","content":{"image/jpg":{"schema":{"$ref":"#/components/schemas/images"}},"image/png":{"schema":{"$ref":"#/components/schemas/images"}},"text/xml":{"schema":{"type":"string","format":"xml"}},"application/json":{"schema":{"type":"object","properties":{"image":{"type":"string","format":"Base64 PNG","description":"The Base64 encoded image"},"options":{"type":"object","description":"The endpoint reflecting the options of the request or options its applied itself","properties":{"blazon":{"type":"string"},"palette":{"type":"string"},"printable":{"type":"boolean"},"filename":{"type":"string"},"size":{"type":"integer"},"saveFormat":{"type":"string"},"outputFormat":{"type":"string"},"asFile":{"type":"boolean"},"effect":{"type":"string"},"stage":{"type":"string"},"shapeSet":{"type":"boolean"},"shape":{"type":"string"},"printSize":{"type":"integer"},"units":{"type":"string"},"aspectRatio":{"type":"number"},"logBlazon":{"type":"boolean"},"notify":{"type":"boolean"},"useWebColours":{"type":"boolean"},"useWarhammerColours":{"type":"boolean"},"useTartanColours":{"type":"boolean"}}},"messages":{"type":"array","items":{"type":"object","properties":{"ID":{"type":"string","nullable":true,"description":"If the message can be related to a specific part of the phrase tree this property gives value of the ID attribute of the relevant node"},"context":{"type":"string","nullable":true,"description":"If this is an error message related to the blazon this is that part of the input blazon text in which the error occurred"},"category":{"type":"string","description":"Hopefully self-explanatory","enum":["blazon","warning","internal","licence"]},"content":{"description":"The message text","type":"string"}}}}}}}}}}}}}')}}]);