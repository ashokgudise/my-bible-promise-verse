import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Languages } from 'src/app/models/languages.enum';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private url = "http://localhost:3000";

  teluguPromiseVerses: any[] = [
    { id: 0, reference: 'కీర్తనలు 84:11', text: 'దేవుడైన యెహోవా సూర్యుడును కేడెమునైయున్నాడు. ( కీర్తనలు 84:11 )'},
{ id: 1, reference: 'సామెతలు 3:6', text: 'నీ ప్రవర్తన అంతటియందు ఆయన అధికారమునకు ఒప్పుకొనుము అప్పుడు ఆయన నీ త్రోవలను సరాళము చేయును. ( సామెతలు 3:6 )'},
{ id: 2, reference: 'కీర్తనలు 37:5', text: 'నీ మార్గమును యెహోవాకు అప్పగింపుము నీవు ఆయనను నమ్ముకొనుము ఆయన నీ కార్యము నెరవేర్చును. ( కీర్తనలు 37:5 )'},
{ id: 3, reference: 'కీర్తనలు 128:2', text: 'నిశ్చయముగా నీవు నీచేతుల కష్టార్జితము ననుభవించెదవు నీవు ధన్యుడవు నీకు మేలు కలుగును. ( కీర్తనలు 128:2 )'},
{ id: 4, reference: 'ద్వితీయోపదేశకాండము 28:12', text: 'యెహోవా నీ దేశముమీద వర్షము దాని కాలమందు కురిపించుటకును నీవుచేయు కార్యమంతటిని ఆశీర్వదించుటకును, ఆకాశమను తన మంచి ధననిధిని తెరచును నీవు అనేకజనములకు అప్పిచ్చెదవు కాని అప్పుచేయవు. ( ద్వితీయోపదేశకాండము 28:12 )'},
{ id: 5, reference: 'కీర్తనలు 115:14', text: 'యెహోవా మిమ్మును మీ పిల్లలను వృద్ధిపొందించును. ( కీర్తనలు 115:14 )'},
{ id: 6, reference: 'కీర్తనలు 91:10', text: 'నీకు అపాయమేమియు రాదు ఏ తెగులును నీ గుడారమును సమీపించదు. ( కీర్తనలు 91:10 )'},
{ id: 7, reference: 'కీర్తనలు 91:15', text: 'అతడు నాకు మొఱ్ఱపెట్టగా నేనతనికి ఉత్తరమిచ్చెదను శ్రమలో నేనతనికి తోడై యుండెదను అతని విడిపించి అతని గొప్ప చేసెదను. ( కీర్తనలు 91:15 )'},
{ id: 8, reference: 'ఫిలిప్పీయులకు 2:13', text: 'ఎందుకనగా మీరు ఇచ్ఛయించుటకును కార్యసిద్ధి కలుగజేసికొనుటకును, తన దయాసంకల్పము నెరవేరుటకై మీలో కార్యసిద్ధి కలుగజేయువాడు దేవుడే. ( ఫిలిప్పీయులకు 2:13 )'},
{ id: 9, reference: 'కీర్తనలు 32:8', text: 'నీకు ఉపదేశము చేసెదను నీవు నడవవలసిన మార్గ మును నీకు బోధించెదను నీమీద దృష్టియుంచి నీకు ఆలోచన చెప్పెదను. ( కీర్తనలు 32:8 )'},
{ id: 10, reference: 'యెషయా 58:11', text: 'యెహోవా నిన్ను నిత్యము నడిపించును. ( యెషయా 58:11 )'},
{ id: 11, reference: 'యిర్మీయా 30:22', text: 'మీరు నాకు ప్రజలైయుందురు నేను మీకు దేవుడనై యుందును. ( యిర్మీయా 30:22 )'},
{ id: 12, reference: 'నిర్గమకాండము 33:14', text: 'నా సన్నిధి నీకు తోడుగా వచ్చును, నేను నీకు విశ్రాంతి కలుగజేసెదననగా. ( నిర్గమకాండము 33:14 )'},
{ id: 13, reference: 'ద్వితీయోపదేశకాండము 31:8', text: 'ఆయన నీకు తోడై యుండును, ఆయన నిన్ను విడువడు నిన్ను ఎడబాయడు. ( ద్వితీయోపదేశకాండము 31:8 )'},
{ id: 14, reference: 'ద్వితీయోపదేశకాండము 7:13', text: 'ఆయన నిన్ను ప్రేమించి ఆశీర్వదించి అభివృద్ధిచేసి. ( ద్వితీయోపదేశకాండము 7:13 )'},
{ id: 15, reference: 'జెఫన్యా 3:17', text: 'నీ దేవుడైన యెహోవా నీమధ్య ఉన్నాడు. ( జెఫన్యా 3:17 )'},
{ id: 16, reference: 'యిర్మీయా 32:41', text: 'వారికి మేలుచేయుటకు వారియందు ఆనందించుచున్నాను, నా పూర్ణహృదయముతోను నా పూర్ణాత్మతోను ఈ దేశములో నిశ్చయముగా వారిని నాటెదను. ( యిర్మీయా 32:41 )'},
{ id: 17, reference: 'కీర్తనలు 103:4', text: 'కరుణాకటాక్షములను నీకు కిరీటముగా ఉంచుచున్నాడు. ( కీర్తనలు 103:4 )'},
{ id: 18, reference: 'నెహెమ్యా 8:10', text: 'యెహోవాయందు ఆనందించుటవలన మీరు బల మొందుదురు. ( నెహెమ్యా 8:10 )'},
{ id: 19, reference: 'యిర్మీయా 33:3', text: 'నాకు మొఱ్ఱపెట్టుము నేను నీకు ఉత్తరమిచ్చెదను, నీవు గ్రహింపలేని గొప్ప సంగతులను గూఢమైన సంగతులను నీకు తెలియజేతును. ( యిర్మీయా 33:3 )'},
{ id: 20, reference: 'కీర్తనలు 91:14', text: 'అతడు నన్ను ప్రేమించుచున్నాడు గనుక నేనతని తప్పించెదను అతడు నా నామము నెరిగినవాడు గనుక నేనతని ఘనపరచెదను. ( కీర్తనలు 91:14 )'},
{ id: 21, reference: 'యెషయా 46:11', text: 'నేను చెప్పియున్నాను దాని నెరవేర్చెదను ఉద్దేశించియున్నాను సఫలపరచెదను. ( యెషయా 46:11 )'},
{ id: 22, reference: 'కీర్తనలు 91:16', text: 'దీర్ఘాయువు చేత అతనిని తృప్తిపరచెదను నా రక్షణ అతనికి చూపించెదను. ( కీర్తనలు 91:16 )'},
{ id: 23, reference: 'యెషయా 27:3', text: 'యెహోవా అను నేను దానిని కాపుచేయుచున్నాను ప్రతినిమిషమున నేను దానికి నీరు కట్టుచున్నాను ఎవడును దానిమీదికి రాకుండునట్లు దివారాత్రము దాని కాపాడుచున్నాను. ( యెషయా 27:3 )'},
{ id: 24, reference: 'ఆదికాండము 12:2', text: 'నిన్ను గొప్ప జనముగా చేసి నిన్ను ఆశీర్వదించి నీ నామ మును గొప్ప చేయుదును, నీవు ఆశీర్వాదముగా నుందువు. ( ఆదికాండము 12:2 )'},
{ id: 25, reference: 'ఆదికాండము 12:3', text: 'నిన్ను ఆశీర్వదించువారిని ఆశీర్వదించెదను; నిన్ను దూషించువాని శపించెదను; భూమియొక్క సమస్తవంశ ములు నీయందు ఆశీర్వదించబడునని. ( ఆదికాండము 12:3 )'},
{ id: 26, reference: 'ఆదికాండము 15:1', text: 'భయపడకుము; నేను నీకు కేడెము, నీ బహుమానము అత్యధికమగునని చెప్పెను. ( ఆదికాండము 15:1 )'},
{ id: 27, reference: 'కీర్తనలు 84:11', text: 'దేవుడైన యెహోవా సూర్యుడును కేడెమునై యున్నాడు యెహోవా కృపయు ఘనతయు అనుగ్రహించును యథార్థముగా ప్రవర్తించువారికి ఆయన యే మేలును చేయక మానడు. ( కీర్తనలు 84:11 )'},
{ id: 28, reference: '1సమూయేలు 2:30', text: 'నన్ను ఘనపరచువారిని నేను ఘనపరచుదును నన్ను తృణీకరించువారు తృణీకారమొందుదురు. ( 1సమూయేలు 2:30 )'},
{ id: 29, reference: 'కీర్తనలు 1:3', text: 'అతడు నీటికాలువల యోరను నాటబడినదైఆకు వాడక తన కాలమందు ఫలమిచ్చు చెట్టువలెనుండును అతడు చేయునదంతయు సఫలమగును. ( కీర్తనలు 1:3 )'},
{ id: 30, reference: 'కీర్తనలు 128:2', text: 'నిశ్చయముగా నీవు నీ చేతుల కష్టార్జితము ననుభవించె దవు నీవు ధన్యుడవు నీకు మేలు కలుగును. ( కీర్తనలు 128:2 )'},
{ id: 31, reference: 'ద్వితీయోపదేశకాండము 28:12', text: 'యెహోవా నీ దేశముమీద వర్షము దాని కాలమందు కురిపించుటకును నీవు చేయు కార్యమంతటిని ఆశీర్వదించుటకును, ఆకాశ మను తన మంచి ధననిధిని తెరచును నీవు అనేకజనము లకు అప్పిచ్చెదవు కాని అప్పుచేయవు. ( ద్వితీయోపదేశకాండము 28:12 )'},
{ id: 32, reference: 'ద్వితీయోపదేశకాండము 26:11', text: 'నీకును నీ యింటివారికిని నీ దేవుడైన యెహోవా దయచేసిన మేలంతటి విషయము నీవును లేవీ యులును నీ దేశములో ఉన్న పరదేశులును సంతోషింప వలెను. ( ద్వితీయోపదేశకాండము 26:11 )'},
{ id: 33, reference: 'కీర్తనలు 91:15', text: 'అతడు నాకు మొఱ్ఱపెట్టగా నేనతనికి ఉత్తరమిచ్చె దను శ్రమలో నేనతనికి తోడై యుండెదను అతని విడిపించి అతని గొప్ప చేసెదను. ( కీర్తనలు 91:15 )'},
{ id: 34, reference: 'ఫిలిప్పీయులకు 2:13', text: 'ఎందుకనగా మీరు ఇచ్ఛయించుట కును కార్యసిద్ధి కలుగజేసికొనుటకును, తన దయాసంకల్పము నెరవేరుటకై మీలో కార్యసిద్ధి కలుగజేయువాడు దేవుడే. ( ఫిలిప్పీయులకు 2:13 )'},
{ id: 35, reference: 'యెషయా 61:8', text: 'సత్యమునుబట్టి వారి క్రియాఫలమును వారికిచ్చుచు వారితో నిత్యనిబంధన చేయుదును. ( యెషయా 61:8 )'},
{ id: 36, reference: 'కీర్తనలు 92:12', text: 'నీతిమంతులు ఖర్జూరవృక్షమువలె మొవ్వువేయు దురు లెబానోనుమీది దేవదారు వృక్షమువలె వారు ఎదుగు దురు. ( కీర్తనలు 92:12 )'},
{ id: 37, reference: 'యిర్మీయా 30:22', text: 'మీరు నాకు ప్రజలై యుందురు నేను మీకు దేవుడనై యుందును. ( యిర్మీయా 30:22 )'},
{ id: 38, reference: 'ద్వితీయోపదేశకాండము 31:8', text: 'ఆయన నీకు తోడై యుండును, ఆయన నిన్ను విడువడు నిన్ను ఎడబాయడు భయ పడకుము విస్మయమొందకు. ( ద్వితీయోపదేశకాండము 31:8 )'},
{ id: 39, reference: 'ద్వితీయోపదేశకాండము 7:13', text: 'ఆయన నిన్ను ప్రేమించి ఆశీర్వదించి అభి వృద్ధిచేసి, నీకిచ్చెదనని నీ పితరులతో ప్రమాణముచేసిన దేశములో నీ గర్భఫలమును, నీ భూఫలమైన నీ సస్యమును, నీ ద్రాక్షారసమును, నీ నూనెను, నీ పశువుల మందలను, నీ గొఱ్ఱల మందలను, మేకల మందలను దీవించును. ( ద్వితీయోపదేశకాండము 7:13 )'},
{ id: 40, reference: 'జెఫన్యా 3:17', text: 'నీ దేవుడైన యెహోవా నీమధ్య ఉన్నాడు; ఆయన శక్తిమంతుడు, ఆయన మిమ్మును రక్షించును, ఆయన బహు ఆనందముతో నీయందు సంతోషించును, నీయందు తనకున్న ప్రేమను బట్టి శాంతము వహించి నీయందలి సంతోషముచేత ఆయన హర్షించును. ( జెఫన్యా 3:17 )'},
{ id: 41, reference: 'కీర్తనలు 103:4', text: 'సమాధిలోనుండి నీ ప్రాణమును విమోచించు చున్నాడు కరుణాకటాక్షములను నీకు కిరీటముగా ఉంచు చున్నాడు. ( కీర్తనలు 103:4 )'},
{ id: 42, reference: 'జెకర్యా 2:8', text: 'యెహోవా సెలవిచ్చునదేమనగామిమ్మును ముట్టినవాడు తన కనుగుడ్డును ముట్టినవాడని యెంచి. ( జెకర్యా 2:8 )'},
{ id: 43, reference: 'కీర్తనలు 91:14', text: 'అతడు నన్ను ప్రేమించుచున్నాడు గనుక నేనతని తప్పించెదను అతడు నా నామము నెరిగినవాడు గనుక నేనతని ఘనపరచెద. ( కీర్తనలు 91:14 )'},
{ id: 44, reference: 'ఆదికాండము 12:3', text: 'నిన్ను ఆశీర్వదించువారిని ఆశీర్వదించెదను; భూమియొక్క సమస్తవంశ ములు నీయందు ఆశీర్వదించబడునని అబ్రాముతో అనగా. ( ఆదికాండము 12:3 )'},
{ id: 45, reference: 'ఆదికాండము 15:1', text: 'నేను నీకు కేడెము, నీ బహుమానము అత్యధికమగునని చెప్పెను. ( ఆదికాండము 15:1 )'},
{ id: 46, reference: 'యెషయా 26:3', text: 'ఎవనిమనస్సు నీమీద ఆనుకొనునో వానిని నీవు పూర్ణశాంతిగలవానిగా కాపాడుదువు. ( యెషయా 26:3 )'},
{ id: 47, reference: 'ఫిలిప్పీయులకు 4:19', text: 'కాగా దేవుడు తన ఐశ్వర్యము చొప్పున క్రీస్తుయేసునందు మహిమలో మీ ప్రతి అవసరమును తీర్చును. ( ఫిలిప్పీయులకు 4:19 )'},
{ id: 48, reference: 'యెషయా 41:10', text: 'నీవు నా దాసుడవనియు నేను నిన్ను ఉపేక్షింపక యేర్పరచుకొంటిననియు నేను నీతో చెప్పియున్నాను నీకు తోడైయున్నాను భయపడకుము నేను నీ దేవుడనై యున్నాను దిగులుపడకుము నేను నిన్ను బలపరతును నీకు సహాయము చేయువాడను నేనే నీతియను నా దక్షిణహస్తముతో నిన్ను ఆదుకొం దును. ( యెషయా 41:10 )'},
{ id: 49, reference: 'యిర్మీయా 31:14', text: 'నా జనులు నా ఉపకార ములను తెలిసికొని తృప్తినొందుదురు. ( యిర్మీయా 31:14 )'},
{ id: 50, reference: 'యోవేలు 2:25,26', text: 'మీరు కడుపార తిని తృప్తిపొంది మీకొరకు వింత కార్య ములను జరిగించిన మీ దేవుడైన యెహోవా నామమును స్తుతించునట్లునా జనులు ఇక నెన్నటికిని సిగ్గునొందరు. ( యోవేలు 2:25,26 )'},
{ id: 51, reference: 'కీర్తనలు 107:9', text: 'ఏలయనగా ఆశగల ప్రాణమును ఆయన తృప్తిపరచి యున్నాడు ఆకలి గొనినవారి ప్రాణమును మేలుతో నింపి యున్నాడు. ( కీర్తనలు 107:9 )'},
{ id: 52, reference: 'యెషయా 12:2, 3', text: 'ఆయన నాకు రక్షణాధారమాయెను కావున మీరు ఆనందపడి రక్షణాధారములైన బావు లలోనుండి నీళ్లు చేదుకొందురు. ( యెషయా 12:2, 3 )'},
{ id: 53, reference: 'II కొరింథీయులకు 9:8', text: 'మరియు అన్నిటియందు ఎల్లప్పుడును మీలో మీరు సర్వసమృద్ధిగలవారై ఉత్తమమైన ప్రతికార్యము చేయుటకు దేవుడు మీయెడల సమస్త విధములైన కృపను విస్తరింపచేయగలడు. ( II కొరింథీయులకు 9:8 )'},
{ id: 54, reference: 'మత్తయి 5:6', text: 'నీతికొరకు ఆకలిదప్పులు గలవారు ధన్యులు; వారుతృప్తిపరచబడుదురు. ( మత్తయి 5:6 )'},
{ id: 55, reference: 'సామెతలు 3:5, 6', text: 'నీ స్వబుద్ధిని ఆధారము చేసికొనక నీ పూర్ణహృదయముతో యెహోవాయందు నమ్మక ముంచుము నీ ప్రవర్తన అంతటియందు ఆయన అధికారమునకు ఒప్పుకొనుము అప్పుడు ఆయన నీ త్రోవలను సరాళము చేయును. ( సామెతలు 3:5, 6 )'},
{ id: 56, reference: 'యెషయా 30:21', text: 'మీరు కుడి తట్టయినను ఎడమ తట్టయినను తిరిగినను ఇదే త్రోవ దీనిలో నడువుడి అని నీ వెనుకనుండి యొక శబ్దము నీ చెవులకు వినబడును. ( యెషయా 30:21 )'},
{ id: 57, reference: 'ఫిలిప్పీయులకు 4:6', text: 'దేనినిగూర్చియు చింతపడకుడి గాని ప్రతి విషయములోను ప్రార్థన విజ్ఞాపనములచేత కృతజ్ఞతాపూర్వకముగా మీ విన్నపములు దేవునికి తెలియజేయుడి. ( ఫిలిప్పీయులకు 4:6 )'},
{ id: 58, reference: 'యెషయా 46:10, 11', text: 'నా ఆలోచన నిలుచుననియు నా చిత్తమంతయు నెర వేర్చుకొనెదననియు నేను చెప్పియున్నాను దాని నెరవేర్చెదను ఉద్దేశించియున్నాను సఫలపరచెదను. ( యెషయా 46:10, 11 )'},
{ id: 59, reference: '1 థెస్సలొనీకయులకు 5:24', text: 'మిమ్మును పిలుచువాడు నమ్మకమైనవాడు. ( 1 థెస్సలొనీకయులకు 5:24 )'},
{ id: 60, reference: 'ఫిలిప్పీయులకు 4:13', text: 'నన్ను బలపరచువానియందే నేను సమస్తమును చేయగలను. ( ఫిలిప్పీయులకు 4:13 )'},
{ id: 61, reference: 'హెబ్రీయులకు 13:6', text: 'కాబట్టి ప్రభువు నాకు సహాయుడు, నేను భయపడను, నరమాత్రుడు నాకేమి చేయగలడు? అనిమంచి ధైర్యముతో చెప్పగలవారమై యున్నాము. ( హెబ్రీయులకు 13:6 )'},
{ id: 62, reference: 'హెబ్రీయులకు 10:35,36', text: 'కాబట్టి మీ ధైర్యమును విడిచిపెట్టకుడి; దానికి ప్రతిఫలముగా గొప్ప బహుమానము కలుగును మీరు దేవుని చిత్తమును నెరవేర్చినవారై, వాగ్దానముపొందు నిమిత్తము మీకు ఓరిమి అవసరమై యున్నది. ( హెబ్రీయులకు 10:35,36 )'},
{ id: 63, reference: 'ఫిలిప్పీయులకు 1:4', text: 'మీలో ఈ సత్‌క్రియ నారంభించినవాడు యేసుక్రీస్తు దినము వరకు దానిని కొనసాగించునని రూఢిగా నమ్ముచున్నాను. ( ఫిలిప్పీయులకు 1:4 )'},
{ id: 64, reference: 'హబక్కూకు 3:19', text: 'ప్రభువగు యెహోవాయే నాకు బలము ఆయన నా కాళ్లను లేడికాళ్లవలె చేయును ఉన్నతస్థలములమీద ఆయన నన్ను నడవచేయును. ( హబక్కూకు 3:19 )'},
{ id: 65, reference: 'రోమీయులకు 8:37', text: 'అయినను మనలను ప్రేమించినవాని ద్వారా మనము వీటన్నిటిలో అత్యధిక విజయము పొందుచున్నాము. ( రోమీయులకు 8:37 )'},
{ id: 66, reference: '1 యోహాను 5:14', text: 'మనమేమి అడిగినను ఆయన మన మనవి ఆలంకించునని మన మెరిగినయెడల మనమాయనను వేడుకొనినవి మనకు కలిగిన వని యెరుగుదుము. ( 1 యోహాను 5:14 )'},
{ id: 67, reference: 'ద్వితీయోపదేశకాండము 28: 4', text: 'నీ గర్భఫలము నీ భూఫలము నీ పశువుల మందలు నీ దుక్కి టెద్దులు నీ గొఱ్ఱ మేకల మందలు దీవింపబడును;. ( ద్వితీయోపదేశకాండము 28: 4 )'},
{ id: 68, reference: 'ద్వితీయోపదేశకాండము 28: 5-6', text: 'నీ గంపయు పిండి పిసుకు నీ తొట్టియు దీవింపబడును నీవు లోపలికి వచ్చునప్పుడు దీవింప బడుదువు; వెలుపలికి వెళ్లునప్పుడు దీవింపబడుదువు. ( ద్వితీయోపదేశకాండము 28: 5-6 )'},
{ id: 69, reference: 'ద్వితీయోపదేశకాండము 28:8', text: 'నీ కొట్లలోను నీవు చేయు ప్రయత్నము లన్నిటి లోను నీకు దీవెన కలుగునట్లు యెహోవా ఆజ్ఞాపించును. ( ద్వితీయోపదేశకాండము 28:8 )'},
{ id: 70, reference: 'ద్వితీయోపదేశకాండము 28: 11', text: 'యెహోవా నీ గర్భఫల విషయములోను నీ పశు వుల విషయములోను నీ నేలపంట విషయములోను నీకు సమృద్ధిగా మేలు కలుగజేయును. ( ద్వితీయోపదేశకాండము 28: 11 )'},
{ id: 71, reference: 'ద్వితీయోపదేశకాండము 28: 12', text: 'యెహోవా నీ దేశముమీద వర్షము దాని కాలమందు కురిపించుటకును నీవు చేయు కార్యమంతటిని ఆశీర్వదించుటకును, ఆకాశ మను తన మంచి ధననిధిని తెరచును నీవు అనేకజనము లకు అప్పిచ్చెదవు కాని అప్పుచేయవు. ( ద్వితీయోపదేశకాండము 28: 12 )'},
{ id: 72, reference: 'ద్వితీయోపదేశకాండము 28:14', text: 'నీ దేవుడైన యెహోవా ఆజ్ఞ లను విని వాటిని అనుసరించి గైకొనినయెడల, యెహోవా నిన్ను తలగా నియమించునుగాని తోకగా నియమింపడు నీవు పైవాడ వుగా ఉందువుగాని క్రింది వాడవుగా ఉండవు. ( ద్వితీయోపదేశకాండము 28:14 )'},
{ id: 73, reference: 'యిర్మీయా 32:40', text: 'నేను వారికి మేలు చేయుట మానకుండునట్లు నిత్యమైన నిబంధనను వారితో చేయు చున్నాను; వారు నన్ను విడువకుండునట్లు వారి హృదయ ములలో నా యెడల భయభక్తులు పుట్టించెదను. ( యిర్మీయా 32:40 )'},
{ id: 74, reference: 'కీర్తనలు 138:8', text: 'యెహోవా నా పక్షమున కార్యము సఫలముచేయును. ( కీర్తనలు 138:8 )'},
{ id: 75, reference: 'II దినవృత్తాంతములు16:9', text: 'తనయెడల యథార్థహృదయముగలవారిని బలపరచుటకై యెహోవా కనుదృష్టి లోకమందంతట సంచారము చేయుచున్నది. ( II దినవృత్తాంతములు16:9 )'},
{ id: 76, reference: 'ద్వితీయోపదేశకాండము 1:30', text: 'మనుష్యుడు తన కుమారుని ఎత్తికొనునట్లు మీ దేవుడైన యెహోవా మిమ్మును ఎత్తికొని వచ్చి. ( ద్వితీయోపదేశకాండము 1:30 )'},
{ id: 77, reference: 'II థెస్సలొనీకయులకు 3:3', text: 'అయితే ప్రభువు నమ్మదగినవాడు; ఆయన మిమ్మును స్థిరపరచి దుష్టత్వమునుండి కాపాడును. ( II థెస్సలొనీకయులకు 3:3 )'},
{ id: 78, reference: 'ద్వితీయోపదేశకాండము 33:27', text: 'శాశ్వతుడైన దేవుడు నీకు నివాసస్థలము నిత్యముగనుండు బాహువులు నీ క్రిందనుండును. ( ద్వితీయోపదేశకాండము 33:27 )'},
{ id: 79, reference: 'మార్కు 11:24', text: 'అందుచేత ప్రార్థన చేయునప్పుడు మీరు అడుగుచున్న వాటినెల్లను పొందియున్నామని నమ్ముడి; అప్పుడు అవి మీకు కలుగునని మీతో చెప్పుచున్నాను. ( మార్కు 11:24 )'},
{ id: 80, reference: 'ఎఫెసీయులకు 1:3', text: 'మన ప్రభువైన యేసుక్రీస్తుయొక్క తండ్రియగు దేవుడు స్తుతింపబడును గాక ఆయన క్రీస్తునందు పరలోకవిషయములలో ఆత్మసంబంధమైన ప్రతి ఆశీ ర్వాదమును మనకనుగ్రహించెను. ( ఎఫెసీయులకు 1:3 )'},
{ id: 81, reference: 'యోహాను 15:7', text: 'నాయందు మీరును మీయందు నా మాటలును నిలిచియుండినయెడల మీకేది యిష్టమో అడుగుడి, అది మీకు అనుగ్రహింప బడును. ( యోహాను 15:7 )'},
{ id: 82, reference: 'యోహాను 14:13', text: 'మీరు నా నామమున దేని నడుగుదురో తండ్రి కుమారుని యందు మహిమపరచబడుటకై దానిని చేతును. ( యోహాను 14:13 )'},
{ id: 83, reference: 'యోహాను 16:23, 24', text: 'మీరు తండ్రిని నా పేరట ఏమి అడిగినను ఆయన మీకు అనుగ్రహించునని మీతో నిశ్చయముగా చెప్పుచున్నాను ఇదివరకు మీరేమియు నా పేరట అడుగలేదు; మీ సంతోషము పరిపూర్ణమగునట్లు అడుగుడి, మీకు దొరకును. ( యోహాను 16:23, 24 )'},
{ id: 84, reference: 'మత్తయి 21:22', text: 'మరియు మీరు ప్రార్థనచేయునప్పుడు వేటిని అడుగుదురో అవి (దొరకినవని) నమి్మనయెడల మీరు వాటినన్నిటిని పొందుదురని వారితో చెప్పెను. ( మత్తయి 21:22 )'},
{ id: 85, reference: 'కీర్తనలు 37:4', text: 'యెహోవానుబట్టి సంతోషించుము ఆయన నీ హృదయవాంఛలను తీర్చును. ( కీర్తనలు 37:4 )'},
{ id: 86, reference: 'యోవేలు 2:26', text: 'మీరు కడుపార తిని తృప్తిపొంది మీకొరకు వింత కార్య ములను జరిగించిన మీ దేవుడైన యెహోవా నామమును స్తుతించునట్లునా జనులు ఇక నెన్నటికిని సిగ్గునొందరు. ( యోవేలు 2:26 )'},
{ id: 87, reference: 'ఫిలిప్పీయులకు 4: 13', text: 'నన్ను బలపరచువానియందే నేను సమస్తమును చేయగలను. ( ఫిలిప్పీయులకు 4: 13 )'},
{ id: 88, reference: 'యోహాను 16:24', text: 'ఇదివరకు మీరేమియు నా పేరట అడుగలేదు; మీ సంతోషము పరిపూర్ణమగునట్లు అడుగుడి, మీకు దొరకును. ( యోహాను 16:24 )'},
{ id: 89, reference: '1 యోహాను 3:22', text: 'ఆయన ఆజ్ఞ యేదనగాఆయన కుమారుడైన యేసుక్రీస్తు నామమును నమ్ముకొని, ఆయన మనకు ఆజ్ఞనిచ్చిన ప్రకారముగా ఒకనినొకడు ప్రేమింప వలెననునదియే. ( 1 యోహాను 3:22 )'},
{ id: 90, reference: 'ఎఫెసీయులకు 3:20, 21', text: 'మనలో కార్యసాధకమైన తన శక్తి చొప్పున మనము అడుగువాటన్నిటికంటెను, ఊహించువాటన్నిటికంటెను అత్యధికముగా చేయ శక్తిగల దేవునికి. ( ఎఫెసీయులకు 3:20, 21 )'},
{ id: 91, reference: 'కీర్తనలు 68:19', text: 'అనుదినము ఆయన మా భారము భరించుచున్నాడు దేవుడే మాకు రక్షణకర్తయై యున్నాడు. ( కీర్తనలు 68:19 )'},
{ id: 92, reference: 'యెషయా 30:15', text: 'మీరు ఊరకుండి నమ్ముకొనుటవలన మీకు బలము కలుగును. ( యెషయా 30:15 )'},
{ id: 93, reference: 'సామెతలు 3:4', text: 'దేవుని దృష్టియందును మానవుల దృష్టి యందును నీవు దయనొంది మంచివాడవని అనిపించుకొందువు. ( సామెతలు 3:4 )'},
{ id: 94, reference: 'కీర్తనలు 115:12, 13', text: 'యెహోవా మమ్మును మరచిపోలేదు ఆయన మమ్ము నాశీర్వదించును ఆయన ఇశ్రాయేలీయుల నాశీర్వదించును అహరోను వంశస్థులనాశీర్వదించును పిన్నలనేమి పెద్దలనేమి తనయందు భయభక్తులు గల వారిని యెహోవా ఆశీర్వదించును. ( కీర్తనలు 115:12, 13 )'},
{ id: 95, reference: 'III యోహాను 2', text: 'నీ ఆత్మ వర్ధిల్లుచున్న ప్రకారము నీవు అన్ని విషయములలోను వర్ధిల్లుచు సౌఖ్యముగా ఉండవలెనని. ( III యోహాను 2 )'},
{ id: 96, reference: 'ద్వితీయోపదేశకాండము 29:9', text: 'మీరు చేయునదంతయు చక్కగా జరుగునట్లు ఈ నిబంధన వాక్యములను అనుసరించి నడుచు కొనవలెను. ( ద్వితీయోపదేశకాండము 29:9 )'},
{ id: 97, reference: 'యెహొషువ 1:9', text: 'నేను నీ కాజ్ఞయిచ్చియున్నాను గదా, నిబ్బరముగలిగి ధైర్యముగా నుండుము, దిగులుపడకుము జడియకుము నీవు నడుచు మార్గమంతటిలో నీ దేవుడైన యెహోవా నీకు తోడైయుండును. ( యెహొషువ 1:9 )'},
{ id: 98, reference: 'మత్తయి 6:33', text: 'కాబట్టి మీరు ఆయన రాజ్యమును నీతిని మొదట వెదకుడి; అప్పు డవన్నియు మీకనుగ్రహింపబడును. ( మత్తయి 6:33 )'},
{ id: 99, reference: 'సామెతలు 3:26', text: 'యెహోవా నీకు ఆధారమగును నీ కాలు చిక్కుబడకుండునట్లు ఆయన నిన్ను కాపా డును. ( సామెతలు 3:26 )'},
{ id: 100, reference: 'కీర్తనలు 68:19', text: 'ప్రభువు స్తుతినొందును గాక అనుదినము ఆయన మా భారము భరించుచున్నాడు దేవుడే మాకు రక్షణకర్తయై యున్నాడు. ( కీర్తనలు 68:19 )'},
{ id: 101, reference: 'కీర్తనలు 103:5', text: 'పక్షిరాజు ¸యౌవనమువలె నీ ¸యౌవనమువలె క్రొత్తదగు చుండునట్లు మేలుతో నీ హృదయమును తృప్తిపరచుచున్నాడు. ( కీర్తనలు 103:5 )'},
{ id: 102, reference: 'యెహొషువ 1:8', text: 'ఈ ధర్మశాస్త్రగ్రంథమును నీవు బోధింపక తప్పిపో కూడదు దానిలో వ్రాయబడిన వాటన్నిటి ప్రకారము చేయుటకు నీవు జాగ్రత్తపడునట్లు దివారాత్రము దాని ధ్యానించినయెడల నీ మార్గమును వర్ధిల్లజేసికొని చక్కగా ప్రవర్తించెదవు. ( యెహొషువ 1:8 )'},
{ id: 103, reference: 'యెషయా 65:24', text: 'వారు వేడుకొనక మునుపు నేను ఉత్తరమిచ్చెదను వారు మనవి చేయుచుండగా నేను ఆలంకిచెదను. ( యెషయా 65:24 )'},
{ id: 104, reference: 'కీర్తనలు 37:34', text: 'యెహోవాకొరకు కనిపెట్టుకొని యుండుము ఆయన మార్గము ననుసరించుము భూమిని స్వతంత్రించుకొనునట్లు ఆయన నిన్ను హెచ్చించును. ( కీర్తనలు 37:34 )'},
{ id: 105, reference: 'కీర్తనలు 29:11', text: 'యెహోవా తన ప్రజలకు బలము ననుగ్రహించును యెహోవా తన ప్రజలకు సమాధానము కలుగజేసి వారి నాశీర్వదించును. ( కీర్తనలు 29:11 )'},
{ id: 106, reference: 'కీర్తనలు 37:23', text: 'ఒకని నడత యెహోవా చేతనే స్థిరపరచబడును వాని ప్రవర్తన చూచి ఆయన ఆనందించును. ( కీర్తనలు 37:23 )'},
{ id: 107, reference: 'ద్వితీయోపదేశకాండము 30:9', text: 'మరియు నీ దేవుడైన యెహోవా నీ చేతి పనులన్నిటి విషయ ములోను, నీ గర్భ ఫలవిషయములోను, నీ పశువుల విషయములోను, నీ భూమి పంట విషయములోను నీకు మేలగునట్లు నిన్ను వర్ధిల్లజేయును. ( ద్వితీయోపదేశకాండము 30:9 )'},
{ id: 108, reference: 'యోహాను 14:27', text: 'నా శాంతినే మీ కనుగ్రహించుచున్నాను. ( యోహాను 14:27 )'},
{ id: 109, reference: 'నిర్గమకాండము 14:13', text: 'యెహోవా మీకు నేడు కలుగజేయు రక్షణను మీరు ఊరక నిలుచుండి చూడుడి. ( నిర్గమకాండము 14:13 )'},
{ id: 110, reference: 'యెషయా 60:20', text: 'యెహోవాయే నీకు నిత్యమైన వెలుగుగా ఉండును. ( యెషయా 60:20 )'},
{ id: 111, reference: 'మత్తయి 7:7', text: 'అడుగుడి మీకియ్యబడును వెదకుడి మీకు దొరకును,ఒ తట్టుడి మీకు తీయబడును. ( మత్తయి 7:7 )'},
{ id: 112, reference: 'యిర్మీయా 30:17', text: 'అయితే నేను నీకు ఆరోగ్యము కలుగజేసెదను నీ గాయములను మాన్పెదను; ఇదే యెహోవా వాక్కు. ( యిర్మీయా 30:17 )'},
{ id: 113, reference: 'యెషయా 62:3', text: 'నీవు యెహోవాచేతిలో భూషణకిరీటముగాను నీ దేవునిచేతిలో రాజకీయ మకుటముగాను ఉందువు. ( యెషయా 62:3 )'},
{ id: 114, reference: 'ఆదికాండము 28:15', text: 'ఇదిగో నేను నీకు తోడై యుండి, నీవు వెళ్లు ప్రతి స్థలమందు నిన్ను కాపాడుచు ఈ దేశమునకు నిన్ను మరల రప్పించెదను; నేను నీతో చెప్పినది నెరవేర్చువరకు నిన్ను విడువనని చెప్పగా. ( ఆదికాండము 28:15 )'},
{ id: 115, reference: 'జెఫన్యా 3:20', text: 'నేను మీకు ఖ్యాతిని మంచి పేరును తెప్పింతును; ఇదే యెహోవా వాక్కు. ( జెఫన్యా 3:20 )'},
{ id: 116, reference: '2 దినవృత్తాంతములు 1:12', text: 'కాబట్టి జ్ఞానమును తెలివియు నీ కియ్య బడును. ( 2 దినవృత్తాంతములు 1:12 )'},
{ id: 117, reference: 'ఆదికాండము 22:17', text: 'నేను నిన్ను ఆశీర్వదించి …విస్తరింప చేసెదను. ( ఆదికాండము 22:17 )'},
{ id: 118, reference: 'కీర్తన 121:8', text: 'ఇది మొదలుకొని నిరంతరము నీ రాకపోకలయందు యెహోవా నిన్ను కాపాడును. ( కీర్తన 121:8 )'},
{ id: 119, reference: 'అపొస్తలుల కార్యములు 18:10', text: 'నేను నీకు తోడైయున్నాను. ( అపొస్తలుల కార్యములు 18:10 )'},
{ id: 120, reference: 'కీర్తన 91:10', text: 'నీకు అపాయమేమియు రాదు ఏ తెగులును నీ గుడారమును సమీపించదు. ( కీర్తన 91:10 )'},
{ id: 121, reference: 'యిర్మీయా 39:18', text: 'నీవు నన్ను నమ్ము కొంటివి గనుక నిశ్చయముగా నేను నిన్ను తప్పించెదను. ( యిర్మీయా 39:18 )'},
{ id: 122, reference: 'యెషయా 55:3', text: 'దావీదునకు చూపిన శాశ్వతకృపను మీకు చూపుదును. ( యెషయా 55:3 )'},
{ id: 123, reference: 'కీర్తన 27:14', text: 'ధైర్యము తెచ్చుకొని నీ హృదయమును నిబ్బరముగా నుంచుకొనుము యెహోవాకొరకు కనిపెట్టుకొని యుండుము. ( కీర్తన 27:14 )'},
{ id: 124, reference: 'కీర్తన 32:8', text: 'నీకు ఉపదేశము చేసెదను నీవు నడవవలసిన మార్గ మును నీకు బోధించెదను నీమీద దృష్టియుంచి నీకు ఆలోచన చెప్పెదను. ( కీర్తన 32:8 )'},
{ id: 125, reference: 'కీర్తన 50:15', text: 'ఆపత్కాలమున నీవు నన్నుగూర్చి మొఱ్ఱపెట్టుము నేను నిన్ను విడిపించెదను నీవు నన్ను మహిమ పర చెదవు. ( కీర్తన 50:15 )'},
{ id: 126, reference: 'హగ్గయి 2:4', text: 'ధైర్యము తెచ్చుకొని పని జరిగించుడి; నేను మీకు తోడుగా ఉన్నాను; ఇదే సైన్యములకు అధి పతియగు యెహోవా వాక్కు. ( హగ్గయి 2:4 )'},
{ id: 127, reference: 'కీర్తన 55:22', text: 'నీ భారము యెహోవామీద మోపుము ఆయనే నిన్ను ఆదుకొనును నీతిమంతులను ఆయన ఎన్నడును కదలనీయడు. ( కీర్తన 55:22 )'},
{ id: 128, reference: 'యిర్మీయా 46:28', text: 'నేను నీకు తోడై యున్నాను భయపడకుము. ( యిర్మీయా 46:28 )'},
{ id: 129, reference: 'మత్తయి 11:29', text: 'నేను సాత్వికుడను దీనమనస్సు గలవాడను గనుక మీమీద నా కాడి ఎత్తికొని నాయొద్ద నేర్చుకొనుడి; అప్పుడు మీ ప్రాణములకు విశ్రాంతి దొరకును. ( మత్తయి 11:29 )'},
{ id: 130, reference: '2 కొరింథీయులకు 12:9', text: 'నా కృప నీకు చాలును. ( 2 కొరింథీయులకు 12:9 )'},
{ id: 131, reference: 'యిర్మియా 29:11', text: 'నేను మిమ్మునుగూర్చి ఉద్దేశించిన సంగతులను నేనెరుగుదును, రాబోవు కాల మందు మీకు నిరీక్షణకలుగునట్లుగా అవి సమాధానకరమైన ఉద్దేశములేగాని హానికరమైనవి కావు; ఇదే యెహోవా వాక్కు. ( యిర్మియా 29:11 )'},
{ id: 132, reference: 'యెషయా 41:13', text: 'నీ దేవుడనైన యెహోవానగు నేను, భయపడకుము నేను నీకు సహాయము చేసెదనని చెప్పుచు నీ కుడిచేతిని పట్టుకొనుచున్నాను. ( యెషయా 41:13 )'},
{ id: 133, reference: 'యెషయా 43:2', text: 'నీవు జలములలో బడి దాటునప్పుడు నేను నీకు తోడై యుందును నదులలో బడి వెళ్లునప్పుడు అవి నీమీద పొర్లిపారవు. ( యెషయా 43:2 )'},
{ id: 134, reference: 'యెషయా 54:10', text: 'పర్వతములు తొలగిపోయినను మెట్టలు తత్తరిల్లినను నా కృప నిన్ను విడిచిపోదు. ( యెషయా 54:10 )'},
{ id: 135, reference: 'యెషయా 54:17', text: 'నీకు విరోధముగా రూపింపబడిన యే ఆయుధమును వర్ధిల్లదు. ( యెషయా 54:17 )'},
{ id: 136, reference: 'యాకోబు 4:7', text: 'కాబట్టి దేవునికి లోబడియుండుడి, అపవాదిని ఎదిరించుడి, అప్పుడు వాడు మీయొద్దనుండి పారిపోవును. ( యాకోబు 4:7 )'},
{ id: 137, reference: 'కీర్తన 121:5', text: 'యెహోవాయే నిన్ను కాపాడువాడు నీ కుడిప్రక్కను యెహోవా నీకు నీడగా ఉండును. ( కీర్తన 121:5 )'},
{ id: 138, reference: 'యెషయా 54:8', text: 'నిత్యమైన కృపతో నీకు వాత్సల్యము చూపుదును. ( యెషయా 54:8 )'},
{ id: 139, reference: 'యిర్మీయా 1:9', text: 'ఇదిగో నేను నీ నోట నా మాటలు ఉంచియున్నాను. ( యిర్మీయా 1:9 )'},
{ id: 140, reference: 'యిర్మీయా 15:20', text: 'నిన్ను రక్షించుటకును నిన్ను విడిపించుటకును నేను నీకు తోడైయుందును. ( యిర్మీయా 15:20 )'},
{ id: 141, reference: 'మత్తయి 6:18', text: 'అప్పుడు రహస్యమందు చూచుచున్న నీ తండ్రి నీకు ప్రతిఫలమిచ్చును. ( మత్తయి 6:18 )'},
{ id: 142, reference: 'హెబ్రీయులకు 13:5', text: 'నిన్ను ఏమాత్రమును విడువను, నిన్ను ఎన్నడును ఎడబాయను. ( హెబ్రీయులకు 13:5 )'},
{ id: 143, reference: 'ప్రకటన 2:10', text: 'నేను నీకు జీవకిరీట మిచ్చెదను. ( ప్రకటన 2:10 )'},
{ id: 144, reference: 'లేవీయకాండము 26:12', text: 'నేను మీ మధ్య నడిచెదను మీకు దేవుడనైయుందును; మీరు నాకు ప్రజలై యుందురు. ( లేవీయకాండము 26:12 )'},
{ id: 145, reference: 'ద్వితీయోపదేశకాండమ 1:21', text: 'భయపడకుము, అధైర్యపడకుమని నీతో చెప్పి తిని. ( ద్వితీయోపదేశకాండమ 1:21 )'},
{ id: 146, reference: 'కీర్తన 121:7', text: 'ఏ అపాయమును రాకుండ యెహోవా నిన్ను కాపా డును ఆయన నీ ప్రాణమును కాపాడును. ( కీర్తన 121:7 )'},
{ id: 147, reference: 'కీర్తన 128:2', text: 'నిశ్చయముగా నీవు నీ చేతుల కష్టార్జితము ననుభవించె దవు నీవు ధన్యుడవు నీకు మేలు కలుగును. ( కీర్తన 128:2 )'},
{ id: 148, reference: 'యెషయా 48:17', text: 'నీకు ఉపదేశము చేయుదును నీవు నడవవలసిన త్రోవను నిన్ను నడిపించుదును. ( యెషయా 48:17 )'},
{ id: 149, reference: 'యెషయా 51:16', text: 'నీ నోట నా మాటలు ఉంచి నా చేతినీడలో నిన్ను కప్పియున్నాను. ( యెషయా 51:16 )'},
{ id: 150, reference: 'యిర్మీయా 1:19', text: 'నిన్ను విడిపించుటకు నేను నీకు తోడై యున్నందున వారు నీపైని విజయము పొంద జాలరు; ఇదే యెహోవా వాక్కు. ( యిర్మీయా 1:19 )'},
{ id: 151, reference: 'మత్తయి 5:12', text: 'సంతోషించి ఆనందించుడి, పరలోకమందు మీ ఫలము అధికమగును. ( మత్తయి 5:12 )'},
{ id: 152, reference: '2 థెస్సలొనీకయులకు 3:3', text: 'ఆయన మిమ్మును స్థిరపరచి దుష్టత్వమునుండి కాపాడును. ( 2 థెస్సలొనీకయులకు 3:3 )'},
{ id: 153, reference: 'యెషయా 49:15', text: 'వారైన మరచుదురు గాని నేను నిన్ను మరువను. ( యెషయా 49:15 )'},
{ id: 154, reference: 'యోహాను 14:18', text: 'మిమ్మును అనాథ లనుగా విడువను, మీ యొద్దకు వత్తును. ( యోహాను 14:18 )'},
{ id: 155, reference: 'సంఖ్యాకాండము 6:26', text: 'యెహోవా నీమీద తన సన్నిధి కాంతి ఉదయింపజేసి నీకు సమాధానము కలుగజేయును. ( సంఖ్యాకాండము 6:26 )'},
{ id: 156, reference: 'ద్వితీయోపదేశకాండమ 31:6', text: 'నీతో కూడ వచ్చువాడు నీ దేవుడైన యెహోవాయే; ఆయన నిన్ను విడువడు నిన్నెడ బాయడు. ( ద్వితీయోపదేశకాండమ 31:6 )'},
{ id: 157, reference: '2 సమూయేలు 7:11', text: 'నేను నీకు సంతానము కలుగజేయుదును. ( 2 సమూయేలు 7:11 )'},
{ id: 158, reference: 'నిర్గమకాండము 33:19', text: 'నా మంచితనమంతయు నీ యెదుట కను పరచెదను. ( నిర్గమకాండము 33:19 )'},

      ];

  promiseVerses: any[] = [
    { id: 0, reference: 'Psalm 84:11', text: 'The LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly (Psalm 84:11)'},
{ id: 1, reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way (Psalm 37:23)'},
{ id: 2, reference: 'Proverbs 3:6', text: 'In all thy ways acknowledge him, and he shall direct thy paths (Proverbs 3:6)'},
{ id: 3, reference: '1Samuel 2:30', text: 'For them that honour me I will honour (1Samuel 2:30)'},
{ id: 4, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper (Psalm 1:3)'},
{ id: 5, reference: 'Psalm 37:5', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass (Psalm 37:5)'},
{ id: 6, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee (Psalm 128:2)'},
{ id: 7, reference: 'Deuteronomy 28:12', text: 'The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow (Deuteronomy 28:12)'},
{ id: 8, reference: 'Psalm 115:14', text: 'The LORD shall increase you more and more, you and your children (Psalm 115:14)'},
{ id: 9, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house (Deuteronomy 26:11)'},
{ id: 10, reference: 'Psalm 91:10', text: 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling (Psalm 91:10)'},
{ id: 11, reference: 'Psalm 91:15', text: 'He shall call upon me, and I will answer him (Psalm 91:15)'},
{ id: 12, reference: 'Philippians 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure (Philippians 2:13)'},
{ id: 13, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye (Psalm 32:8)'},
{ id: 14, reference: 'Isaiah 61:8', text: 'I will direct their work in truth (Isaiah 61:8)'},
{ id: 15, reference: 'Isaiah 58:11', text: 'And the LORD shall guide thee continually (Isaiah 58:11)'},
{ id: 16, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper (Psalm 1:3)'},
{ id: 17, reference: 'Psalm 92:12', text: 'The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon (Psalm 92:12)'},
{ id: 18, reference: 'Jeremiah 30:22', text: 'Ye shall be my people, and I will be your God (Jeremiah 30:22)'},
{ id: 19, reference: 'Exodus 33:14', text: 'My presence shall go with thee, and I will give thee rest (Exodus 33:14)'},
{ id: 20, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee (Deuteronomy 7:13)'},
{ id: 21, reference: 'Zephaniah 3:17', text: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing (Zephaniah 3:17)'},
{ id: 22, reference: 'Jeremiah 32:41', text: 'I will rejoice over them to do them good, and I will plant them in this land assuredly with my whole heart and with my whole soul (Jeremiah 32:41)'},
{ id: 23, reference: 'Psalm 103:4', text: 'Who crowneth thee with lovingkindness and tender mercies (Psalm 103:4)'},
{ id: 24, reference: 'Zechariah 2:8', text: 'He that toucheth you toucheth the apple of his eye (Zechariah 2:8)'},
{ id: 25, reference: 'Proverbs 1:23', text: 'Behold, I will pour out my Spirit unto you, I will make known my words unto you (Proverbs 1:23)'},
{ id: 26, reference: 'Nehemiah 8:10', text: 'The joy of the LORD is your strength (Nehemiah 8:10)'},
{ id: 27, reference: 'Jeremiah 33:3', text: 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not (Jeremiah 33:3)'},
{ id: 28, reference: 'Psalm 91:14', text: 'I will set him on high, because he hath known my name (Psalm 91:14)'},
{ id: 29, reference: 'Isaiah 46:11', text: 'I have spoken it, I will also bring it to pass; I have purposed it, I will also do it (Isaiah 46:11)'},
{ id: 30, reference: 'Psalm 91:16', text: 'With long life will I satisfy him, and shew him my salvation (Psalm 91:16)'},
{ id: 31, reference: 'Isaiah 27:3', text: 'I the LORD do keep it; I will water it every moment: lest any hurt it, I will keep it night and day (Isaiah 27:3)'},
{ id: 32, reference: 'Genesis 12:2', text: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. (Genesis 12:2)'},
{ id: 33, reference: 'Genesis 12:3', text: 'I will bless those who bless you … and all the peoples of the earth will be blessed through you. (Genesis 12:3)'},
{ id: 34, reference: 'Genesis 15:1', text: 'I am a shield to you; Your reward shall be very great. (Genesis 15:1)'},
{ id: 35, reference: 'Psalm 84:11', text: 'The LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly (Psalm 84:11)'},
{ id: 36, reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way (Psalm 37:23)'},
{ id: 37, reference: 'Proverbs 3:6', text: 'In all thy ways acknowledge him, and he shall direct thy paths (Proverbs 3:6)'},
{ id: 38, reference: '1Samuel 2:30', text: 'For them that honour me I will honour (1Samuel 2:30)'},
{ id: 39, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper (Psalm 1:3)'},
{ id: 40, reference: 'Psalm 37:5', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass (Psalm 37:5)'},
{ id: 41, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee (Psalm 128:2)'},
{ id: 42, reference: 'Deuteronomy 28:12', text: 'The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow (Deuteronomy 28:12)'},
{ id: 43, reference: 'Psalm 115:14', text: 'The LORD shall increase you more and more, you and your children (Psalm 115:14)'},
{ id: 44, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house (Deuteronomy 26:11)'},
{ id: 45, reference: 'Psalm 91:10', text: 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling (Psalm 91:10)'},
{ id: 46, reference: 'Psalm 91:15', text: 'He shall call upon me, and I will answer him (Psalm 91:15)'},
{ id: 47, reference: 'Philippians 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure (Philippians 2:13)'},
{ id: 48, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye (Psalm 32:8)'},
{ id: 49, reference: 'Isaiah 61:8', text: 'I will direct their work in truth (Isaiah 61:8)'},
{ id: 50, reference: 'Isaiah 58:11', text: 'And the LORD shall guide thee continually (Isaiah 58:11)'},
{ id: 51, reference: 'Psalm 1:3', text: 'He shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper (Psalm 1:3)'},
{ id: 52, reference: 'Psalm 92:12', text: 'The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon (Psalm 92:12)'},
{ id: 53, reference: 'Jeremiah 30:22', text: 'Ye shall be my people, and I will be your God (Jeremiah 30:22)'},
{ id: 54, reference: 'Exodus 33:14', text: 'My presence shall go with thee, and I will give thee rest (Exodus 33:14)'},
{ id: 55, reference: 'Deuteronomy 31:8', text: 'The LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee (Deuteronomy 31:8)'},
{ id: 56, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee (Deuteronomy 7:13)'},
{ id: 57, reference: 'Zephaniah 3:17', text: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing (Zephaniah 3:17)'},
{ id: 58, reference: 'Jeremiah 32:41', text: 'I will rejoice over them to do them good, and I will plant them in this land assuredly with my whole heart and with my whole soul (Jeremiah 32:41)'},
{ id: 59, reference: 'Psalm 103:4', text: 'Who crowneth thee with lovingkindness and tender mercies (Psalm 103:4)'},
{ id: 60, reference: 'Zechariah 2:8', text: 'He that toucheth you toucheth the apple of his eye (Zechariah 2:8)'},
{ id: 61, reference: 'Proverbs 1:23', text: 'Behold, I will pour out my Spirit unto you, I will make known my words unto you (Proverbs 1:23)'},
{ id: 62, reference: 'Nehemiah 8:10', text: 'The joy of the LORD is your strength (Nehemiah 8:10)'},
{ id: 63, reference: 'Jeremiah 33:3', text: 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not (Jeremiah 33:3)'},
{ id: 64, reference: 'Psalm 91:14', text: 'I will set him on high, because he hath known my name (Psalm 91:14)'},
{ id: 65, reference: 'Isaiah 46:11', text: 'I have spoken it, I will also bring it to pass; I have purposed it, I will also do it (Isaiah 46:11)'},
{ id: 66, reference: 'Psalm 91:16', text: 'With long life will I satisfy him, and shew him my salvation (Psalm 91:16)'},
{ id: 67, reference: 'Isaiah 27:3', text: 'I the LORD do keep it; I will water it every moment: lest any hurt it, I will keep it night and day (Isaiah 27:3)'},
{ id: 68, reference: 'Genesis 12:2', text: '“I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. (Genesis 12:2)'},
{ id: 69, reference: 'Genesis 12:3', text: 'I will bless those who bless you … and all the peoples of the earth will be blessed through you. (Genesis 12:3)'},
{ id: 70, reference: 'Genesis 15:1', text: 'I am a shield to you; Your reward shall be very great. (Genesis 15:1)'},
{ id: 71, reference: 'Isaiah 26:3', text: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee. ( Isaiah 26:3 )'},
{ id: 72, reference: 'Philippians 4:19', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. ( Philippians 4:19 )'},
{ id: 73, reference: 'Isaiah 41:10', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness. ( Isaiah 41:10 )'},
{ id: 74, reference: 'Jeremiah 31:14', text: 'And my people shall be satisfied with my goodness, saith the Lord. ( Jeremiah 31:14 )'},
{ id: 75, reference: 'Joel 2:26', text: 'And ye shall eat in plenty, and be satisfied, and praise the name of the Lord your God, that hath dealt wondrously with you: and my people shall never be ashamed. ( Joel 2:26 )'},
{ id: 76, reference: 'Psalm 107:9', text: 'For he satisfieth the longing soul, and filleth the hungry soul with goodness. ( Psalm 107:9 )'},
{ id: 77, reference: 'Isaiah 12:2, 3', text: 'Behold, God is my salvation; Therefore with joy, shall ye draw water out of the wells of salvation. ( Isaiah 12:2, 3 )'},
{ id: 78, reference: 'II Corinthians 9:8', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. ( II Corinthians 9:8 )'},
{ id: 79, reference: 'Matthew 5:6', text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled. ( Matthew 5:6 )'},
{ id: 80, reference: 'Proverbs 3:5, 6', text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.  In all thy ways acknowledge him, and he shall direct thy paths. ( Proverbs 3:5, 6 )'},
{ id: 81, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. ( Psalm 32:8 )'},
{ id: 82, reference: 'Isaiah 30:21', text: 'And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left. ( Isaiah 30:21 )'},
{ id: 83, reference: 'Philippians 4:6, 7', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. ( Philippians 4:6, 7 )'},
{ id: 84, reference: 'Isaiah 46:10, 11', text: 'My counsel shall stand, and I will do all my pleasure: I have spoken it, I will also bring it to pass; I have purposed it, I will also do it. ( Isaiah 46:10, 11 )'},
{ id: 85, reference: '1 Thessalonians 5:24', text: 'Faithful is he that calleth you, who also will do it. ( 1 Thessalonians 5:24 )'},
{ id: 86, reference: 'Philippians 4:13', text: 'I can do all things through Christ which strengtheneth me. ( Philippians 4:13 )'},
{ id: 87, reference: 'Hebrews 13:6', text: 'So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me. ( Hebrews 13:6 )'},
{ id: 88, reference: 'Hebrews 10:35,36', text: 'Cast not away therefore your confidence, which hath great recompence of reward. For ye have need of patience, that, after ye have done the will of God, ye might receive the promise. ( Hebrews 10:35,36 )'},
{ id: 89, reference: 'Philippians 1:6', text: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. ( Philippians 1:6 )'},
{ id: 90, reference: 'Habakkuk 3:19', text: 'The Lord God is my strength, and he will make my feet like hinds\' feet, and he will make me to walk upon mine high places. ( Habakkuk 3:19 )'},
{ id: 91, reference: 'Romans 8:37', text: 'Nay, in all these things we are more than conquerors through him that loved us. ( Romans 8:37 )'},
{ id: 92, reference: '1 John 5:14', text: 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us. ( 1 John 5:14 )'},
{ id: 93, reference: 'Deutoronomy 28: 4', text: 'Blessed shall be the fruit of thy body, and the fruit of thy ground, and the fruit of thy cattle, the increase of thy kine, and the flocks of thy sheep. ( Deutoronomy 28: 4 )'},
{ id: 94, reference: 'Deutoronomy 28: 5-6', text: 'Blessed shall be thy basket and thy store.  Blessed shalt thou be when thou comest in, and blessed shalt thou be when thou goest out. ( Deutoronomy 28: 5-6 )'},
{ id: 95, reference: 'Deuteronomy 28:8', text: 'The Lord shall command the blessing upon thee in thy storehouses, and in all that thou settest thine hand unto; and he shall bless thee in the land which the Lord thy God giveth thee. ( Deuteronomy 28:8 )'},
{ id: 96, reference: 'Deutoronomy 28: 11', text: 'And the Lord shall make thee plenteous in goods, in the fruit of thy body, and in the fruit of thy cattle, and in the fruit of thy ground, in the land which the Lord sware unto thy fathers to give thee. ( Deutoronomy 28: 11 )'},
{ id: 97, reference: 'Deutoronomy 28: 12', text: 'The Lord shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow. ( Deutoronomy 28: 12 )'},
{ id: 98, reference: 'Deuteronomy 28:13', text: 'And the Lord shall make thee the head, and not the tail; and thou shalt be above only, and thou shalt not be beneath. ( Deuteronomy 28:13 )'},
{ id: 99, reference: 'Jeremiah 32:40', text: 'And I will make an everlasting covenant with them, that I will not turn away from them, to do them good; but I will put my fear in their hearts, that they shall not depart from me. ( Jeremiah 32:40 )'},
{ id: 100, reference: 'Psalm 138:8', text: 'The Lord will perfect that which concerneth me: thy mercy, 0 Lord, endureth for ever: forsake not the works of thine own hands. ( Psalm 138:8 )'},
{ id: 101, reference: 'II Chronicles 16:9', text: 'For the eyes of the Lord run to and fro throughout the whole earth; to shew himself strong in the behalf of them whose heart is perfect toward him. ( II Chronicles 16:9 )'},
{ id: 102, reference: 'Deuteronomy 1:30', text: 'The Lord your God which goeth before you, he shall fight for you, according to all that he did for you in Egypt before your eyes. ( Deuteronomy 1:30 )'},
{ id: 103, reference: 'II Thessalonians 3:3', text: 'But the Lord is faithful, who shall stablish you, and keep you from evil. ( II Thessalonians 3:3 )'},
{ id: 104, reference: 'Deuteronomy 33:27', text: 'The eternal God is thy refuge, underneath are the everlasting arms: and he shall thrust out the enemy from before thee; and shall say, Destroy them. ( Deuteronomy 33:27 )'},
{ id: 105, reference: 'Philippians 1:6', text: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. ( Philippians 1:6 )'},
{ id: 106, reference: 'II Corinthians 9:8', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. ( II Corinthians 9:8 )'},
{ id: 107, reference: 'Philippians 4:19', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. ( Philippians 4:19 )'},
{ id: 108, reference: 'Mark 11:24', text: 'Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive, them, and ye shall have them. ( Mark 11:24 )'},
{ id: 109, reference: 'Ephesians 1:3', text: 'Blessed by the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ. ( Ephesians 1:3 )'},
{ id: 110, reference: 'John 15:7', text: 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. ( John 15:7 )'},
{ id: 111, reference: 'John 14:13', text: 'And whatsoever ye shall ask in my name, that will I do, that the Father, may be glorified, in the Son. ( John 14:13 )'},
{ id: 112, reference: 'John 16:23, 24', text: 'And in that day ye shall ask me nothing. Verily, verily, I say unto you, Whatsoever ye shall ask the Father in my name, he will give it you. ( John 16:23, 24 )'},
{ id: 113, reference: 'Matthew 21:22', text: 'And all things, whatsoever ye shall ask in prayer, believing, ye shall receive. ( Matthew 21:22 )'},
{ id: 114, reference: 'Matthew 5:6', text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled. ( Matthew 5:6 )'},
{ id: 115, reference: 'Psalm 37:4', text: 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart. ( Psalm 37:4 )'},
{ id: 116, reference: 'Psalm 107:9', text: 'For he satisfieth the longing soul, and filleth the hungry soul with goodness. ( Psalm 107:9 )'},
{ id: 117, reference: 'Psalm 103:5', text: 'Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle\'s. ( Psalm 103:5 )'},
{ id: 118, reference: 'Joel 2:26', text: 'And ye shall eat in plenty, and be satisfied, and praise the name of the Lord your God, that hath dealt wondrously with you: and my people shall never be ashamed. ( Joel 2:26 )'},
{ id: 119, reference: 'Philippians 4:19', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. ( Philippians 4:19 )'},
{ id: 120, reference: 'Philippians 4: 13', text: 'I can do all things through Christ which strengtheneth me. ( Philippians 4: 13 )'},
{ id: 121, reference: 'Romans 8:37', text: 'Nay, in all these things we are more than conquerors through him that loved us. ( Romans 8:37 )'},
{ id: 122, reference: 'John 15:7', text: 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. ( John 15:7 )'},
{ id: 123, reference: 'John 16:24', text: 'Ask and ye shall receive, that your joy may be full. ( John 16:24 )'},
{ id: 124, reference: 'Matthew 21:22', text: 'And all things, whatsoever ye shall ask in prayer, believing, ye shall receive. ( Matthew 21:22 )'},
{ id: 125, reference: 'Mark 11:24', text: 'Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them. ( Mark 11:24 )'},
{ id: 126, reference: 'Ephesians 1:3', text: 'Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ. ( Ephesians 1:3 )'},
{ id: 127, reference: '1 John 3:22', text: 'And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight. ( 1 John 3:22 )'},
{ id: 128, reference: 'Ephesians 3:20, 21', text: 'Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen. ( Ephesians 3:20, 21 )'},
{ id: 129, reference: 'II Corinthians 9:8', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. ( II Corinthians 9:8 )'},
{ id: 130, reference: 'Psalm 68:19', text: 'Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation.  ( Psalm 68:19 )'},
{ id: 131, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. ( Psalm 32:8 )'},
{ id: 132, reference: 'Isaiah 30:21', text: 'And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left. ( Isaiah 30:21 )'},
{ id: 133, reference: 'Isaiah 30:15', text: 'In quietness and in confidence shall be your strength. ( Isaiah 30:15 )'},
{ id: 134, reference: 'Nehemiah 8:10', text: 'The joy of the Lord is your strength. ( Nehemiah 8:10 )'},
{ id: 135, reference: 'Philippians 4:13', text: 'I can do all things through Christ which strengtheneth me. ( Philippians 4:13 )'},
{ id: 136, reference: 'Proverbs 3:4', text: 'So shalt thou find favour and good understanding in the sight of God and man. ( Proverbs 3:4 )'},
{ id: 137, reference: 'Psalm 84: 11', text: 'For the Lord God is a sun and shield: the Lord will give grace and glory: no good thing will he withhold from them that walk uprightly. ( Psalm 84: 11 )'},
{ id: 138, reference: 'Psalm 115:12, 13', text: 'The Lord hath been mindful of us: he will bless us; he will bless the house of Israel; he will bless the house of Aaron. He will bless them that fear the Lord, both small and great. ( Psalm 115:12, 13 )'},
{ id: 139, reference: '1 Thessalonians 5:24', text: 'Faithful is he that calleth you, who also will do it. ( 1 Thessalonians 5:24 )'},
{ id: 140, reference: 'III John 2', text: 'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth. ( III John 2 )'},
{ id: 141, reference: 'Deuteronomy 28:12', text: 'The Lord shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow. ( Deuteronomy 28:12 )'},
{ id: 142, reference: 'Deuteronomy 29:9', text: 'Keep therefore the words of this covenant, and do them, that ye may prosper in all that ye do. ( Deuteronomy 29:9 )'},
{ id: 143, reference: 'Exodus 33:14', text: '“My Presence will go with you, and I will give you rest”. ( Exodus 33:14 )'},
{ id: 144, reference: 'Joshua 1:9', text: 'The Lord your God will be with you wherever you go. ( Joshua 1:9 )'},
{ id: 145, reference: 'Psalm 37:4', text: 'Delight yourself in the Lord and he will give you the desires of your heart. ( Psalm 37:4 )'},
{ id: 146, reference: 'Philippians 4:19', text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus. ( Philippians 4:19 )'},
{ id: 147, reference: 'Matthew 6:33', text: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. ( Matthew 6:33 )'},
{ id: 148, reference: 'Jeremiah 31:14', text: 'And my people shall be satisfied with my goodness, saith the Lord. ( Jeremiah 31:14 )'},
{ id: 149, reference: 'II Corinthians 9:8', text: 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. ( II Corinthians 9:8 )'},
{ id: 150, reference: 'Proverbs 3:5, 6', text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths. ( Proverbs 3:5, 6 )'},
{ id: 151, reference: 'Psalm 32:8', text: 'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye. ( Psalm 32:8 )'},
{ id: 152, reference: '1 Thessalonians 5:24', text: 'Faithful is he that calleth you, who also will do it. ( 1 Thessalonians 5:24 )'},
{ id: 153, reference: 'Philippians 1:6', text: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ. ( Philippians 1:6 )'},
{ id: 154, reference: 'Proverbs 3:26', text: 'For the Lord shall be thy confidence, and shall keep thy foot from being taken. ( Proverbs 3:26 )'},
{ id: 155, reference: 'II Corinthians 9:8', text: 'God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work. ( II Corinthians 9:8 )'},
{ id: 156, reference: 'Psalm 138:8', text: 'The Lord will perfect that which concerneth me: thy mercy, 0 Lord, endureth for ever. ( Psalm 138:8 )'},
{ id: 157, reference: 'Psalm 68:19', text: 'Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation. ( Selah. ( Psalm 68:19 )'},
{ id: 158, reference: 'II Thessalonians 3:3', text: 'But the Lord is faithful, who shall stablish you, and keep you from evil. ( II Thessalonians 3:3 )'},
{ id: 159, reference: 'Deuteronomy 1:30', text: 'The Lord your God which goeth before you, he shall fight for you. ( Deuteronomy 1:30 )'},
{ id: 160, reference: 'Zephaniah 3:17', text: 'The Lord thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing. ( Zephaniah 3:17 )'},
{ id: 161, reference: 'Deuteronomy 33:27', text: 'The eternal God is thy refuge, underneath are the everlasting arms: and he shall thrust out the enemy from before thee. ( Deuteronomy 33:27 )'},
{ id: 162, reference: 'John 14:13', text: 'And whatsoever ye shall ask in my name, that will I do, that the Father, may be glorified, in the Son. ( John 14:13 )'},
{ id: 163, reference: 'Psalm 103:5', text: 'Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle\'s. ( Psalm 103:5 )'},
{ id: 164, reference: 'Genesis 28:1', text: 'And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of. ( Genesis 28:1 )'},
{ id: 165, reference: '1 Thessalonians 5:24', text: 'Faithful is he that calleth you, who also will do it. ( 1 Thessalonians 5:24 )'},
{ id: 166, reference: 'Joshua 1:8', text: 'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night.  for then thou shalt make thy way prosperous, and then thou shalt have good success. ( Joshua 1:8 )'},
{ id: 167, reference: 'Isaiah 65:24', text: 'And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear. ( Isaiah 65:24 )'},
{ id: 168, reference: 'Psalm 37:34', text: 'Wait on the LORD, and keep his way, and he shall exalt thee to inherit the land. ( Psalm 37:34 )'},
{ id: 169, reference: 'Psalm 91:16', text: 'With long life will I satisfy him, and shew him my salvation. ( Psalm 91:16 )'},
{ id: 170, reference: 'Psalm 29:11', text: 'The LORD will give strength unto his people; the LORD will bless his people with peace. ( Psalm 29:11 )'},
{ id: 171, reference: 'Psalm 37:23', text: 'The steps of a good man are ordered by the LORD: and he delighteth in his way. ( Psalm 37:23 )'},
{ id: 172, reference: 'Psalm 128:2', text: 'Thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee. ( Psalm 128:2 )'},
{ id: 173, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee: he will also bless the fruit of thy womb. ( Deuteronomy 7:13 )'},
{ id: 174, reference: 'Deuteronomy 30:9', text: 'And the LORD thy God will make thee plenteous in every work of thine hand. ( Deuteronomy 30:9 )'},
{ id: 175, reference: 'Deuteronomy 26:11', text: 'And thou shalt rejoice in every good thing which the LORD thy God hath given unto thee, and unto thine house. ( Deuteronomy 26:11 )'},
{ id: 176, reference: 'Deuteronomy 7:13', text: 'He will love thee, and bless thee, and multiply thee. ( Deuteronomy 7:13 )'},
{ id: 177, reference: '1 Chronicles 28:20', text: 'Be strong and courageous, and do the work. (1 Chronicles 28:20 )'},
{ id: 178, reference: 'Deuteronomy 7:13', text: 'He will love you and bless you and multiply you (Deuteronomy 7:13 )'},
{ id: 179, reference: 'John 14:27', text: 'Peace I leave with you; My peace I give to you. (John 14:27 )'},
{ id: 180, reference: 'Exodus 14:13', text: 'Do not fear! Stand by and see the salvation of the LORD (Exodus 14:13 )'},
{ id: 181, reference: 'Isaiah 60:20', text: 'The Lord will be your everlasting light (Isaiah 60:20 )'},
{ id: 182, reference: 'Matthew 7:7', text: 'Ask and it will be given to you (Matthew 7:7 )'},
{ id: 183, reference: 'Jeremiah 30:17', text: 'But I will restore you to health (Jeremiah 30:17 )'},
{ id: 184, reference: 'Isaiah 62:3', text: 'You will be a crown of splendour in the Lords hand (Isaiah 62:3 )'},
{ id: 185, reference: 'Genesis 24:7', text: 'He will send his angel before you (Genesis 24:7 )'},
{ id: 186, reference: 'Genesis 28:15', text: 'I will not leave you untill I have done what I have promised you. (Genesis 28:15 )'},
{ id: 187, reference: 'Deuteronomy 20:4', text: 'the LORD your God is the one who goes with you, to fight for you (Deuteronomy 20:4 )'},
{ id: 188, reference: 'Joshua 3:5', text: 'The Lord will do amazing things among you (Joshua 3:5 )'},
{ id: 189, reference: 'Genesis 21:22', text: 'God is with you in all that you do. (Genesis 21:22 )'},
{ id: 190, reference: 'Zepheniah 3:20', text: 'I will give you honor and praise (Zepheniah 3:20 )'},
{ id: 191, reference: 'Deuteronomy 30:10', text: 'The Lord will again delight in you and make you prosperous. (Deuteronomy 30:10 )'},
{ id: 192, reference: '2 Chronicles 1:12', text: 'Wisdom and knowledge will be given to you (2 Chronicles 1:12 )'},
{ id: 193, reference: 'Genesis 22:17', text: 'I will surely bless you. (Genesis 22:17 )'},
{ id: 194, reference: 'Psalms 121:8', text: 'The Lord will watch over your coming and going. (Psalms 121:8 )'},
{ id: 195, reference: 'Acts 18:10', text: 'For I am with you, and no one is going to attack and harm you. (Acts 18:10 )'},
{ id: 196, reference: 'Psalms 91:10', text: 'No disaster will come near your tent. (Psalms 91:10 )'},
{ id: 197, reference: 'Jeremiah 39:18', text: 'I will save you because you trust in me. (Jeremiah 39:18 )'},
{ id: 198, reference: 'Matthew 9:29', text: 'According to your faith will it be done to you. (Matthew 9:29 )'},
{ id: 199, reference: 'Isaiah 55:3', text: 'I will make an everlasting covenant with you, my faithful love promised to David. (Isaiah 55:3 )'},
{ id: 200, reference: 'Deuteronomy 16:15', text: 'The Lord your God will bless you in all your harvest and in all the work of your hands. (Deuteronomy 16:15 )'},
{ id: 201, reference: '1 Samuel 26:25', text: 'May you be blessed…you will do great things and surely triumph. (1 Samuel 26:25 )'},
{ id: 202, reference: 'Psalms 27:14', text: 'Wait for the Lord; be strong and take heart. (Psalms 27:14 )'},
{ id: 203, reference: 'Psalms 32:8', text: 'I will counsel you with My eye upon you. (Psalms 32:8 )'},
{ id: 204, reference: 'Psalms 50:15', text: 'Call upon Me in the day of trouble; I shall rescue you, and you will honor Me (Psalms 50:15 )'},
{ id: 205, reference: 'Haggai 2:4', text: 'Be strong and work. For I am with you (Haggai 2:4 )'},
{ id: 206, reference: 'Psalms 55:22', text: 'Cast your burden upon the LORD and He will sustain you; (Psalms 55:22 )'},
{ id: 207, reference: 'Jeremiah 46:28', text: 'Do not fear, declares the LORD, For I am with you. (Jeremiah 46:28 )'},
{ id: 208, reference: 'Matthew 11:28,29', text: 'Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. ( Matthew 11:28,29 )'},
{ id: 209, reference: '2 Corinthians 12:9', text: 'My grace is sufficient for you, for my power is made perfect in weakness. ( 2 Corinthians 12:9 )'},
{ id: 210, reference: 'Jeremiah 29:11', text: 'For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future. ( Jeremiah 29:11 )'},
{ id: 211, reference: 'Isaiah 41:13', text: 'For I am the LORD your God who takes hold of your right hand and says to you, Do not fear; I will help you. ( Isaiah 41:13 )'},
{ id: 212, reference: 'Isaiah 43:2', text: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze. ( Isaiah 43:2 )'},
{ id: 213, reference: 'Isaiah 54:10', text: 'Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed. ( Isaiah 54:10 )'},
{ id: 214, reference: 'Isaiah 54:17', text: 'no weapon forged against you will prevail, and you will refute every tongue that accuses you. ( Isaiah 54:17 )'},
{ id: 215, reference: 'James 4:7', text: 'Submit yourselves, then, to God. Resist the devil, and he will flee from you. ( James 4:7 )'},
{ id: 216, reference: 'Acts 1:8', text: 'Ye shall be witness unto me … unto the uttermost part of the earth. ( Acts 1:8 )'},
{ id: 217, reference: 'Psalms 121:5', text: 'The Lord is thy keeper: the Lord is thy shade upon thy right hand. ( Psalms 121:5 )'},
{ id: 218, reference: 'Isaiah 54:8', text: 'With everlasting kindness will I have mercy on thee, saith the Lord thy  Redeemer. ( Isaiah 54:8 )'},
{ id: 219, reference: 'Jeremiah 1:9', text: 'Behold I have put my words in thy mouth. ( Jeremiah 1:9 )'},
{ id: 220, reference: 'Jeremiah 15:20', text: 'I am with thee to save and to deliver thee. ( Jeremiah 15:20 )'},
{ id: 221, reference: 'Matthew 6:18', text: 'Thy father which seeth in secret, shall reward thee openly. ( Matthew 6:18 )'},
{ id: 222, reference: 'Matthew 11:29', text: 'Take my yoke upon you ... ye shall find rest unto your souls. ( Matthew 11:29 )'},
{ id: 223, reference: 'Hebrews 13:5', text: 'I will never leave thee nor forsake thee. ( Hebrews 13:5 )'},
{ id: 224, reference: 'Revelation 2:10', text: 'I will give thee a crown of life. ( Revelation 2:10 )'},
{ id: 225, reference: 'Leveticus 26:12', text: 'I will walk among you and  will be your God. ( Leveticus 26:12 )'},
{ id: 226, reference: 'Deuteronomy 1:21', text: 'The Lord God of thy fathers hath said unto thee ...fear not neither be discouraged. ( Deuteronomy 1:21 )'},
{ id: 227, reference: 'Psalms 81:1', text: 'Open thy mouth wide, and I will fill it. ( Psalms 81:1 )'},
{ id: 228, reference: 'Exodus 15:26', text: 'I am the Lord that healeth thee. ( Exodus 15:26 )'},
{ id: 229, reference: 'Psalms 121:7', text: 'The Lord shall preserve thee from all evil: He shall preserve thy soul. ( Psalms 121:7 )'},
{ id: 230, reference: 'Psalms 128:2', text: 'Happy shalt thou be, and it shall be well with thee. ( Psalms 128:2 )'},
{ id: 231, reference: 'Isaiah 48:17', text: 'I am the Lord thy God which teacheth thee to profit, which leadeth thee by the way that thou shouldest go.  ( Isaiah 48:17 )'},
{ id: 232, reference: 'Isaiah 51:16', text: 'I have put my words in thy mouth, and I have covered thee in the shadow of mine hand. ( Isaiah 51:16 )'},
{ id: 233, reference: 'Jeremiah 1:19', text: 'They shall not prevail against thee; for I am with thee…to deliver thee. ( Jeremiah 1:19 )'},
{ id: 234, reference: 'Matthew 5:12', text: 'Rejoice, and be exceeding glad: for great is your reward in heaven. ( Matthew 5:12 )'},
{ id: 235, reference: '2 Thessalonians 3:3', text: 'The Lord is faithful, who shall stablish you, and keep you from evil. ( 2 Thessalonians 3:3 )'},
{ id: 236, reference: 'Isaiah 41:13', text: 'I the Lord thy God will hold thy right hand, saying unto thee, Fear not; I will help thee. ( Isaiah 41:13 )'},
{ id: 237, reference: 'Isaiah 49:15', text: 'They may forget, yet will I not forget thee. ( Isaiah 49:15 )'},
{ id: 238, reference: 'Jeremiah 31:4', text: 'I will build thee, and thou shalt be built. ( Jeremiah 31:4 )'},
{ id: 239, reference: 'John 14:18', text: 'I will not leave you comfortless: I will come to you. ( John 14:18 )'},
{ id: 240, reference: 'Numbers 6:26', text: 'The Lord lift up his countenance upon thee, and give thee peace. ( Numbers 6:26 )'},
{ id: 241, reference: 'Deuteronomy 31:6', text: 'He it is that doth go with thee; He will not fail thee, nor forsake thee. ( Deuteronomy 31:6 )'},
{ id: 242, reference: '2 Samuel 7:11', text: 'The Lord telleth thee that He will make thee an house. ( 2 Samuel 7:11 )'},
{ id: 243, reference: 'Exodus 33:19', text: 'I will make all my goodness pass before thee. ( Exodus 33:19 )'},
    ];

    constructor(private http: HttpClient){ }

      data =
       {id: 0,
       name: {},
       age: 0,
       surname: '',
       email: ''}
    ;

    getUsers(){
        let getUrl = `${this.url}/users/`;
        return this.http.get(getUrl);
    }

    createUser(user: User){
        let saveUrl =  `${this.url}/users/`;
        return this.http.post(saveUrl, user);
    }

    updateUser(id: number, user: User) {
       return this.http.post(`${this.url}/users/`, user);
    }

    deleteUser(id: number){
        return this.http.delete(`${this.url}/users/${id}`);
    }


    revealPromiseVerse(members: number, language:string){

      this.generateRandomVerses(members,language);

      if(language === 'english'){
        var randonNumber =  Math.floor((Math.random()*(this.promiseVerses.length)) + 0);
        var verse  = this.promiseVerses.find(lineItem => lineItem.id == randonNumber);
        return verse;
      }else{
        var randonNumber =  Math.floor((Math.random()*(this.teluguPromiseVerses.length)) + 0);
        var verse  = this.teluguPromiseVerses.find(lineItem => lineItem.id == randonNumber);
        return verse;
      }
    }

    generateRandomImages(members: number){
      let randomNumbers = [];
      let randomImages = [];
      randomNumbers = this.getRandomNumbers(8, members);
      for (let num of randomNumbers) {
        randomImages.push('../assets/'+(num+1)+'.jpg');
      }
      return randomImages;
    }

    getRandomNumbers(max : number, members:number){
      let arr = [];
          do {
            let num = Math.floor(Math.random() * max + 0);
            arr.push(num);
            arr = arr.filter((item, index) => {
              return arr.indexOf(item) === index
            });
          } while (arr.length < members);
      return arr;
    }

    generateRandomVerses(members: number, language:string){
      var max = 0;
      let arr = [];
      let versArray = [];

      if(language === 'english'){
        max = this.promiseVerses.length;
        arr = this.getRandomNumbers(max, members);
      }else{
        max = this.teluguPromiseVerses.length;
        arr = this.getRandomNumbers(max, members);
      }
        for (let num of arr) {
          //console.log(num);
          if(language === 'english'){
            var verse  = this.promiseVerses.find(lineItem => lineItem.id == num);
            versArray.push(verse);
            //console.log('433 Before Return: \t'+JSON.stringify(verse));
          }else{
            var verse  = this.teluguPromiseVerses.find(lineItem => lineItem.id == num);
            versArray.push(verse);
            //console.log('436 Before Return: \t'+JSON.stringify(verse));
          }
        }
    //console.log('Before Return: \t'+JSON.stringify(versArray));
    return versArray;
}

}
