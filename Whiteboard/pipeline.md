**1. Make data pipeline**
we gotta figure out how to get all pieces of data that help us predict food scarce areas
what's the data, and how do we get it
- natural vegetation -> global cropland map, configure with open street map api to do geolocation by district. Districts defined as: as parsimonious as possible. 
- 4 main factors for food insecurity re: googling. us centric results
1. income 
2. employment
3. race - not generalizable to other countries, varies by census. 
4. disability - probably not findable
let's figure out how to get this data by location, can again configure by district via open steet map api
- is it possible to plot grocery stores or communal farmland by district also? google maps requests?
- level of conflict -- can do manually, probably, lmao
- development index -- definitely exists at the country level, can probably just use this and disseminate it by district
- can probably use pretty much any national data collection. gini coefficient, income inequality, etc
- regime type? democracy, autocracy, etc. White hot encode it.
