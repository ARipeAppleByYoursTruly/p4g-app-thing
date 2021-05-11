var fusion_mode = 'double';
var persona1 = { name: '', arcana: '', level: 0 };
var persona2 = { name: '', arcana: '', level: 0 };
var persona3 = { name: '', arcana: '', level: 0 };
var f_result = { forurl: '', forhtml: '' };

function assign_by_persona(pos, name) {
  name = name.toLowerCase();

  switch (name) {
    //Fool
    case 'izanagi':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 1;
      break;

    case 'yomotsu-shikome':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 7;
      break;

    case 'obariyon':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 13;
      break;

    case 'legion':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 21;
      break;

    case 'ose':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 31;
      break;

    case 'black frost':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 38;
      break;

    case 'decarabia':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 46;
      break;

    case 'shiki-ouji':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 56;
      break;

    case 'loki':
      pos.name = name;
      pos.arcana = 'fool';
      pos.level = 64;
      break;

    //Magician
    case 'pixie':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 2;
      break;

    case 'orobas':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 8;
      break;

    case 'jack frost':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 16;
      break;

    case 'hua po':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 25;
      break;

    case 'pyro jack':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 32;
      break;

    case 'dis':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 39;
      break;

    case 'rangda':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 47;
      break;

    case 'jinn':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 62;
      break;

    case 'surt':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 69;
      break;

    case 'mada':
      pos.name = name;
      pos.arcana = 'magician';
      pos.level = 78;
      break;

    //Priestess
    case 'saki mitama':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 11;
      break;

    case 'sarasvati':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 17;
      break;

    case 'high pixie':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 22;
      break;

    case 'ganga':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 29;
      break;

    case 'parvati':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 37;
      break;

    case 'kikuri-hime':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 48;
      break;

    case 'hariti':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 59;
      break;

    case 'tzitzimitl':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 70;
      break;

    case 'scathach':
      pos.name = name;
      pos.arcana = 'priestess';
      pos.level = 79;
      break;

    //Empress
    case 'senri':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 9;
      break;

    case 'yaksini':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 18;
      break;

    case 'titania':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 26;
      break;

    case 'gorgon':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 34;
      break;

    case 'gabriel':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 44;
      break;

    case 'skadi':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 52;
      break;

    case 'mother harlot':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 60;
      break;

    case 'alilat':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 70;
      break;

    case 'isis':
      pos.name = name;
      pos.arcana = 'empress';
      pos.level = 79;
      break;

    //Emperor
    case 'oberon':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 12;
      break;

    case 'king frost':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 22;
      break;

    case 'setanta':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 34;
      break;

    case 'oukuninushi':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 41;
      break;

    case 'thoth':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 45;
      break;

    case 'pabilsag':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 51;
      break;

    case 'barong':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 65;
      break;

    case 'odin':
      pos.name = name;
      pos.arcana = 'emperor';
      pos.level = 74;
      break;

    //Hierophant
    case 'omoikane':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 7;
      break;

    case 'anzu':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 15;
      break;

    case 'shiisaa':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 21;
      break;

    case 'unicorn':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 29;
      break;

    case 'flauros':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 36;
      break;

    case 'hokuto seikun':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 45;
      break;

    case 'cerberus':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 52;
      break;

    case 'daisoujou':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 60;
      break;

    case 'hachiman':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 70;
      break;

    case 'kohryu':
      pos.name = name;
      pos.arcana = 'hierophant';
      pos.level = 76;
      break;

    //Lovers
    case 'queen mab':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 25;
      break;

    case 'undine':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 33;
      break;

    case 'leanan sidhe':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 42;
      break;

    case 'raphael':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 53;
      break;

    case 'cybele':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 64;
      break;

    case 'ishtar':
      pos.name = name;
      pos.arcana = 'lovers';
      pos.level = 71;
      break;

    //Chariot
    case 'slime':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 2;
      break;

    case 'nata taishi':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 6;
      break;

    case 'eligor':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 12;
      break;

    case 'ara mitama':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 18;
      break;

    case 'ares':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 25;
      break;

    case 'triglav':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 43;
      break;

    case 'kin-ki':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 54;
      break;

    case 'thor':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 65;
      break;

    case 'atavaka':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 72;
      break;

    case 'futsunushi':
      pos.name = name;
      pos.arcana = 'chariot';
      pos.level = 80;
      break;

    //Justice
    case 'angel':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 4;
      break;

    case 'archangel':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 11;
      break;

    case 'principality':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 19;
      break;

    case 'power':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 27;
      break;

    case 'virtue':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 33;
      break;

    case 'dominion':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 38;
      break;

    case 'throne':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 49;
      break;

    case 'uriel':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 58;
      break;

    case 'melchizedek':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 66;
      break;

    case 'sraosha':
      pos.name = name;
      pos.arcana = 'justice';
      pos.level = 74;
      break;

    //Hermit
    case 'forneus':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 6;
      break;

    case 'ippon-datara':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 17;
      break;

    case 'lamia':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 26;
      break;

    case 'mothman':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 33;
      break;

    case 'hitokotonusi':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 41;
      break;

    case 'kurama tengu':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 48;
      break;

    case 'niddhoggr':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 55;
      break;

    case 'nebiros':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 63;
      break;

    case 'arahabaki':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 73;
      break;

    case 'ongyo-ki':
      pos.name = name;
      pos.arcana = 'hermit';
      pos.level = 82;
      break;

    //Fortune
    case 'fortuna':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 35;
      break;

    case 'clotho':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 44;
      break;

    case 'lachesis':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 51;
      break;

    case 'ananta':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 58;
      break;

    case 'atropos':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 65;
      break;

    case 'norn':
      pos.name = name;
      pos.arcana = 'fortune';
      pos.level = 72;
      break;

    //Strength
    case 'sandman':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 5;
      break;

    case 'valkyrie':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 8;
      break;

    case 'titan':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 14;
      break;

    case 'rakshasa':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 23;
      break;

    case 'kusi mitama':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 28;
      break;

    case 'oni':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 30;
      break;

    case 'hanuman':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 42;
      break;

    case 'kali':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 50;
      break;

    case 'siegfried':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 63;
      break;

    case 'zaou-gongen':
      pos.name = name;
      pos.arcana = 'strength';
      pos.level = 90;
      break;

    //Hanged Man
    case 'berith':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 15;
      break;

    case 'ikusa':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 22;
      break;

    case 'makami':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 27;
      break;

    case 'orthrus':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 39;
      break;

    case 'yatsufusa':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 49;
      break;

    case 'taowu':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 56;
      break;

    case 'hell biker':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 66;
      break;

    case 'vasuki':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 71;
      break;

    case 'attis':
      pos.name = name;
      pos.arcana = 'hanged man';
      pos.level = 82;
      break;

    //Death
    case 'ghoul':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 9;
      break;

    case 'mokoi':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 14;
      break;

    case 'matador':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 24;
      break;

    case 'samael':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 36;
      break;

    case 'mot':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 46;
      break;

    case 'white rider':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 58;
      break;

    case 'alice':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 72;
      break;

    case 'mahakala':
      pos.name = name;
      pos.arcana = 'death';
      pos.level = 78;
      break;

    //Temperance
    case 'apsaras':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 4;
      break;

    case 'sylph':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 11;
      break;

    case 'xiezhai':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 16;
      break;

    case 'nigi mitama':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 23;
      break;

    case 'mithra':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 31;
      break;

    case 'genbu':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 40;
      break;

    case 'seiryuu':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 47;
      break;

    case 'suzaku':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 54;
      break;

    case 'byakko':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 62;
      break;

    case 'yurlungur':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 69;
      break;

    case 'vishnu':
      pos.name = name;
      pos.arcana = 'temperance';
      pos.level = 73;
      break;

    //Devil
    case 'ukobach':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 3;
      break;

    case 'lilim':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 10;
      break;

    case 'vetala':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 19;
      break;

    case 'incubus':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 28;
      break;

    case 'pazuzu':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 37;
      break;

    case 'succubus':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 44;
      break;

    case 'lilith':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 53;
      break;

    case 'belphegor':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 61;
      break;

    case 'belial':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 68;
      break;

    case 'beelzubub':
      pos.name = name;
      pos.arcana = 'devil';
      pos.level = 81;
      break;

    //Tower
    case 'taotie':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 35;
      break;

    case 'cu chulainn':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 46;
      break;

    case 'abaddon':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 55;
      break;

    case 'mara':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 62;
      break;

    case 'masakado':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 69;
      break;

    case 'yoshitsune':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 75;
      break;

    case 'shiva':
      pos.name = name;
      pos.arcana = 'tower';
      pos.level = 80;
      break;

    //Star
    case 'kaiwan':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 24;
      break;

    case 'neko shogun':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 32;
      break;

    case 'fuu-ki':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 43;
      break;

    case 'ganesha':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 50;
      break;

    case 'garuda':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 57;
      break;

    case 'kartikeya':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 67;
      break;

    case 'saturnus':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 75;
      break;

    case 'helel':
      pos.name = name;
      pos.arcana = 'star';
      pos.level = 87;
      break;

    //Moon
    case 'andra':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 20;
      break;

    case 'nozuchi':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 27;
      break;

    case 'yamatano-orochi':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 34;
      break;

    case 'alraune':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 41;
      break;

    case 'girimehkala':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 48;
      break;

    case 'sui-ki':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 57;
      break;

    case 'seth':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 68;
      break;

    case 'baal zebul':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 77;
      break;

    case 'sandalphon':
      pos.name = name;
      pos.arcana = 'moon';
      pos.level = 84;
      break;

    //Sun
    case 'cu sith':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 10;
      break;

    case 'phoenix':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 20;
      break;

    case 'gdon':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 31;
      break;

    case 'yatagarasu':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 40;
      break;

    case 'narasimha':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 47;
      break;

    case 'tam lin':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 53;
      break;

    case 'jatayu':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 61;
      break;

    case 'horus':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 68;
      break;

    case 'suparna':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 77;
      break;

    case 'asura':
      pos.name = name;
      pos.arcana = 'sun';
      pos.level = 86;
      break;

    //Judgement
    case 'anubis':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 59;
      break;

    case 'trumpeter':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 67;
      break;

    case 'michael':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 72;
      break;

    case 'satan':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 76;
      break;

    case 'metatron':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 83;
      break;

    case 'ardha':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 90;
      break;

    case 'lucifer':
      pos.name = name;
      pos.arcana = 'judgement';
      pos.level = 93;
      break;

    //Jester
    case 'gurr':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 20;
      break;

    case 'take-minakata':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 27;
      break;

    case 'pale rider':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 34;
      break;

    case 'loa':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 40;
      break;

    case 'baphomet':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 47;
      break;

    case 'kumbhanda':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 55;
      break;

    case 'chernobog':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 62;
      break;

    case 'seiten taisei':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 68;
      break;

    case 'magatsu izanagi':
      pos.name = name;
      pos.arcana = 'jester';
      pos.level = 77;
      break;

    //Aeon
    case 'ame-no-uzume':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 18;
      break;

    case 'narcissus':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 24;
      break;

    case 'sati':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 31;
      break;

    case 'raja naga':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 37;
      break;

    case 'kushinada':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 44;
      break;

    case 'quetzalcoatl':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 51;
      break;

    case 'kingu':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 58;
      break;

    case 'laksmi':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 65;
      break;

    case 'kaguya':
      pos.name = name;
      pos.arcana = 'aeon';
      pos.level = 74;
      break;

    default:
      pos.name = '';
      pos.arcana = '';
      pos.level = 0;
      $('#output').html('');
      break;
  }
}

//The buttons to redirect to persona.html
function info_toggle() {
  if ($('#info_1').val() != '') {
    $('#sub_but_1').show();
  } else {
    $('#sub_but_1').hide();
  }

  if ($('#info_2').val() != '') {
    $('#sub_but_2').show();
  } else {
    $('#sub_but_2').hide();
  }

  if ($('#info_3').val() != '') {
    $('#sub_but_3').show();
  } else {
    $('#sub_but_3').hide();
  }

  if ($('#info_r').val() != '') {
    $('#sub_but_r').show();
  } else {
    $('#sub_but_r').hide();
  }
}

function fmode_check() {
  if (fusion_mode == 'double') {
    if ((persona1.name != '' && persona2.name != '') && (persona1.name != persona2.name)) {
      let nm_check = persona1.name + ' ' + persona2.name;
      let ar_check = persona1.arcana + ' ' + persona2.arcana;
      let lv_check = (persona1.level + persona2.level) / 2 + 1;

      doublef_check(nm_check, ar_check, lv_check);
    } else {
      f_result.forurl = '';
      f_result.forhtml = '';
    }
  } else if (fusion_mode == 'triple') {
    if((persona1.name != '' && persona2.name != '' && persona3.name != '') && (persona1.name != persona2.name && persona2.name != persona3.name && persona3.name != persona1.name)){
      let nm_check = persona1.name + ' ' + persona2.name + ' ' + persona3.name;
      let lv_check = (persona1.level + persona2.level + persona3.level)/3 + 5;
      
      switch(true){
        case $('#tie_1').prop('checked') == false && $('#tie_2').prop('checked') == false:
          let lesser_ar = persona1.arcana + ' ' + persona2.arcana;
          lesser_ar = doublef_check(lesser_ar);
          $('h1').html(lesser_ar);
          break;
      }
    } else {
      f_result.forurl = '';
      f_result.forhtml = '';
    }
  }
}

function doublef_check(nm, ar, lv) {
  switch (true) {
    /* #region  1 result to Fool */
    case ar == 'fool fool':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Fool', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'fool';
      }
      break;

    /* #region  18 results to Magician */
    case ar == 'magician magician':
    case ar.includes('justice') && ar.includes('fool'):
    case ar.includes('justice') && ar.includes('empress'):
    case ar.includes('hermit') && ar.includes('empress'):
    case ar.includes('hermit') && ar.includes('lovers'):
    case ar.includes('fortune') && ar.includes('fool'):
    case ar.includes('strength') && ar.includes('fool'):
    case ar.includes('strength') && ar.includes('chariot'):
    case ar.includes('death') && ar.includes('priestess'):
    case ar.includes('temperance') && ar.includes('hierophant'):
    case ar.includes('temperance') && ar.includes('chariot'):
    case ar.includes('temperance') && ar.includes('hermit'):
    case ar.includes('devil') && ar.includes('justice'):
    case ar.includes('tower') && ar.includes('priestess'):
    case ar.includes('moon') && ar.includes('emperor'):
    case ar.includes('jester') && ar.includes('hierophant'):
    case ar.includes('aeon') && ar.includes('hermit'):
    case ar.includes('aeon') && ar.includes('devil'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Magician', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'magician';
      }
      break;

    /* #region  17 results to Priestess */
    case ar == 'priestess priestess':
    case ar.includes('justice') && ar.includes('lovers'):
    case ar.includes('hermit') && ar.includes('emperor'):
    case ar.includes('fortune') && ar.includes('hierophant'):
    case ar.includes('hanged man') && ar.includes('justice'):
    case ar.includes('death') && ar.includes('hanged man'):
    case ar.includes('devil') && ar.includes('empress'):
    case ar.includes('moon') && ar.includes('hanged man'):
    case ar.includes('moon') && ar.includes('death'):
    case ar.includes('moon') && ar.includes('tower'):
    case ar.includes('sun') && ar.includes('empress'):
    case ar.includes('sun') && ar.includes('fortune'):
    case ar.includes('judgement') && ar.includes('empress'):
    case ar.includes('jester') && ar.includes('fool'):
    case ar.includes('jester') && ar.includes('hanged man'):
    case ar.includes('aeon') && ar.includes('fortune'):
    case ar.includes('aeon') && ar.includes('sun'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Priestess', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'priestess';
      }
      break;

    /* #region  17 results to Empress */
    case ar == 'empress empress':
    case ar.includes('emperor') && ar.includes('priestess'):
    case ar.includes('hierophant') && ar.includes('emperor'):
    case ar.includes('lovers') && ar.includes('fool'):
    case ar.includes('hermit') && ar.includes('magician'):
    case ar.includes('fortune') && ar.includes('hermit'):
    case ar.includes('hanged man') && ar.includes('emperor'):
    case ar.includes('star') && ar.includes('fool'):
    case ar.includes('star') && ar.includes('hanged man'):
    case ar.includes('moon') && ar.includes('hierophant'):
    case ar.includes('moon') && ar.includes('hermit'):
    case ar.includes('moon') && ar.includes('devil'):
    case ar.includes('sun') && ar.includes('death'):
    case ar.includes('judgement') && ar.includes('hanged man'):
    case ar.includes('jester') && ar.includes('strength'):
    case ar.includes('jester') && ar.includes('star'):
    case ar.includes('aeon') && ar.includes('temperance'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Empress', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'empress';
      }
      break;

    /* #region  15 results to Emperor */
    case ar == 'emperor emperor':
    case ar.includes('lovers') && ar.includes('priestess'):
    case ar.includes('strength') && ar.includes('lovers'):
    case ar.includes('death') && ar.includes('magician'):
    case ar.includes('devil') && ar.includes('hierophant'):
    case ar.includes('devil') && ar.includes('fortune'):
    case ar.includes('tower') && ar.includes('devil'):
    case ar.includes('star') && ar.includes('priestess'):
    case ar.includes('star') && ar.includes('strength'):
    case ar.includes('star') && ar.includes('devil'):
    case ar.includes('moon') && ar.includes('fool'):
    case ar.includes('moon') && ar.includes('star'):
    case ar.includes('jester') && ar.includes('justice'):
    case ar.includes('aeon') && ar.includes('magician'):
    case ar.includes('aeon') && ar.includes('tower'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Emperor', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'emperor';
      }
      break;

    /* #region  15 results to Hierophant */
    case ar == 'hierophant hierophant':
    case ar.includes('chariot') && ar.includes('priestess'):
    case ar.includes('chariot') && ar.includes('lovers'):
    case ar.includes('strength') && ar.includes('empress'):
    case ar.includes('strength') && ar.includes('hermit'):
    case ar.includes('hanged man') && ar.includes('strength'):
    case ar.includes('temperance') && ar.includes('fool'):
    case ar.includes('temperance') && ar.includes('priestess'):
    case ar.includes('temperance') && ar.includes('lovers'):
    case ar.includes('devil') && ar.includes('lovers'):
    case ar.includes('star') && ar.includes('chariot'):
    case ar.includes('star') && ar.includes('temperance'):
    case ar.includes('sun') && ar.includes('devil'):
    case ar.includes('jester') && ar.includes('magician'):
    case ar.includes('aeon') && ar.includes('moon'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Hierophant', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'hierophant';
      }
      break;

    /* #region  13 results to Lovers */
    case ar == 'lovers lovers':
    case ar.includes('fortune') && ar.includes('magician'):
    case ar.includes('fortune') && ar.includes('emperor'):
    case ar.includes('fortune') && ar.includes('justice'):
    case ar.includes('tower') && ar.includes('justice'):
    case ar.includes('tower') && ar.includes('death'):
    case ar.includes('star') && ar.includes('death'):
    case ar.includes('moon') && ar.includes('fortune'):
    case ar.includes('judgement') && ar.includes('magician'):
    case ar.includes('judgement') && ar.includes('emperor'):
    case ar.includes('judgement') && ar.includes('justice'):
    case ar.includes('jester') && ar.includes('sun'):
    case ar.includes('aeon') && ar.includes('justice'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Lovers', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'lovers';
      }
      break;

    /* #region  15 results to Chariot */
    case ar.includes('hierophant') && ar.includes('fool'):
    case ar == 'chariot chariot':
    case ar.includes('death') && ar.includes('empress'):
    case ar.includes('temperance') && ar.includes('death'):
    case ar.includes('tower') && ar.includes('fortune'):
    case ar.includes('star') && ar.includes('empress'):
    case ar.includes('sun') && ar.includes('magician'):
    case ar.includes('sun') && ar.includes('emperor'):
    case ar.includes('sun') && ar.includes('tower'):
    case ar.includes('judgement') && ar.includes('hierophant'):
    case ar.includes('jester') && ar.includes('chariot'):
    case ar.includes('jester') && ar.includes('devil'):
    case ar.includes('jester') && ar.includes('judgement'):
    case ar.includes('aeon') && ar.includes('strength'):
    case ar.includes('aeon') && ar.includes('star'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Chariot', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'chariot';
      }
      break;

    /* #region  16 results to Justice */
    case ar.includes('empress') && ar.includes('magician'):
    case ar.includes('lovers') && ar.includes('empress'):
    case ar.includes('lovers') && ar.includes('emperor'):
    case ar.includes('chariot') && ar.includes('empress'):
    case ar == 'justice justice':
    case ar.includes('hermit') && ar.includes('hierophant'):
    case ar.includes('hermit') && ar.includes('chariot'):
    case ar.includes('strength') && ar.includes('magician'):
    case ar.includes('strength') && ar.includes('priestess'):
    case ar.includes('devil') && ar.includes('priestess'):
    case ar.includes('devil') && ar.includes('hermit'):
    case ar.includes('devil') && ar.includes('hanged man'):
    case ar.includes('star') && ar.includes('hermit'):
    case ar.includes('moon') && ar.includes('strength'):
    case ar.includes('jester') && ar.includes('emperor'):
    case ar.includes('aeon') && ar.includes('lovers'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Justice', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'justice';
      }
      break;

    /* #region  16 results to Hermit */
    case ar.includes('empress') && ar.includes('priestess'):
    case ar.includes('justice') && ar.includes('priestess'):
    case ar == 'hermit hermit':
    case ar.includes('strength') && ar.includes('emperor'):
    case ar.includes('death') && ar.includes('fool'):
    case ar.includes('death') && ar.includes('chariot'):
    case ar.includes('death') && ar.includes('fortune'):
    case ar.includes('temperance') && ar.includes('justice'):
    case ar.includes('devil') && ar.includes('strength'):
    case ar.includes('devil') && ar.includes('temperance'):
    case ar.includes('tower') && ar.includes('temperance'):
    case ar.includes('tower') && ar.includes('hanged man'):
    case ar.includes('star') && ar.includes('lovers'):
    case ar.includes('sun') && ar.includes('temperance'):
    case ar.includes('jester') && ar.includes('tower'):
    case ar.includes('jester') && ar.includes('moon'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Hermit', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'hermit';
      }
      break;

    /* #region  1 result to Fortune */
    case ar == 'fortune fortune':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Fortune', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'fortune';
      }
      break;
      
    /* #region  15 results to Strength */
    case ar.includes('emperor') && ar.includes('magician'):
    case ar.includes('justice') && ar.includes('magician'):
    case ar.includes('hermit') && ar.includes('fool'):
    case ar.includes('hermit') && ar.includes('justice'):
    case ar == 'strength strength':
    case ar.includes('hanged man') && ar.includes('fool'):
    case ar.includes('death') && ar.includes('justice'):
    case ar.includes('temperance') && ar.includes('magician'):
    case ar.includes('moon') && ar.includes('justice'):
    case ar.includes('sun') && ar.includes('hierophant'):
    case ar.includes('sun') && ar.includes('chariot'):
    case ar.includes('sun') && ar.includes('moon'):
    case ar.includes('judgement') && ar.includes('lovers'):
    case ar.includes('jester') && ar.includes('empress'):
    case ar.includes('aeon') && ar.includes('chariot'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Strength', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'strength';
      }
      break;
      
    /* #region  15 results to Hanged Man */
    case ar.includes('fortune') && ar.includes('priestess'):
    case ar == 'hanged man hanged man':
    case ar.includes('death') && ar.includes('strength'):
    case ar.includes('tower') && ar.includes('magician'):
    case ar.includes('tower') && ar.includes('hierophant'):
    case ar.includes('tower') && ar.includes('chariot'):
    case ar.includes('tower') && ar.includes('strength'):
    case ar.includes('star') && ar.includes('tower'):
    case ar.includes('moon') && ar.includes('lovers'):
    case ar.includes('moon') && ar.includes('temperance'):
    case ar.includes('judgement') && ar.includes('fool'):
    case ar.includes('judgement') && ar.includes('fortune'):
    case ar.includes('aeon') && ar.includes('emperor'):
    case ar.includes('aeon') && ar.includes('death'):
    case ar.includes('aeon') && ar.includes('judgement'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Hanged Man', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'hanged man';
      }
      break;
      
    /* #region  16 results to Death */
    case ar.includes('priestess') && ar.includes('fool'):
    case ar.includes('emperor') && ar.includes('fool'):
    case ar.includes('hierophant') && ar.includes('empress'):
    case ar.includes('lovers') && ar.includes('magician'):
    case ar.includes('lovers') && ar.includes('hierophant'):
    case ar.includes('hermit') && ar.includes('priestess'):
    case ar.includes('hanged man') && ar.includes('hierophant'):
    case ar.includes('hanged man') && ar.includes('chariot'):
    case ar.includes('hanged man') && ar.includes('fortune'):
    case ar == 'death death':
    case ar.includes('temperance') && ar.includes('hanged man'):
    case ar.includes('tower') && ar.includes('hermit'):
    case ar.includes('star') && ar.includes('emperor'):
    case ar.includes('jester') && ar.includes('temperance'):
    case ar.includes('aeon') && ar.includes('fool'):
    case ar.includes('aeon') && ar.includes('hanged man'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Death', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'death';
      }
      break;
      
    /* #region  16 results to Temperance */
    case ar.includes('magician') && ar.includes('fool'):
    case ar.includes('chariot') && ar.includes('magician'):
    case ar.includes('chariot') && ar.includes('emperor'):
    case ar.includes('justice') && ar.includes('hierophant'):
    case ar.includes('justice') && ar.includes('chariot'):
    case ar.includes('strength') && ar.includes('justice'):
    case ar.includes('hanged man') && ar.includes('empress'):
    case ar == 'temperance temperance':
    case ar.includes('devil') && ar.includes('fool'):
    case ar.includes('moon') && ar.includes('empress'):
    case ar.includes('sun') && ar.includes('justice'):
    case ar.includes('sun') && ar.includes('hermit'):
    case ar.includes('sun') && ar.includes('strength'):
    case ar.includes('judgement') && ar.includes('chariot'):
    case ar.includes('jester') && ar.includes('death'):
    case ar.includes('aeon') && ar.includes('empress'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Temperance', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'temperance';
      }
      break;
      
    /* #region  14 results to Devil */
    case ar.includes('hierophant') && ar.includes('magician'):
    case ar.includes('justice') && ar.includes('emperor'):
    case ar.includes('fortune') && ar.includes('chariot'):
    case ar.includes('death') && ar.includes('hierophant'):
    case ar.includes('temperance') && ar.includes('empress'):
    case ar.includes('temperance') && ar.includes('fortune'):
    case ar == 'devil devil':
    case ar.includes('sun') && ar.includes('fool'):
    case ar.includes('sun') && ar.includes('priestess'):
    case ar.includes('sun') && ar.includes('lovers'):
    case ar.includes('sun') && ar.includes('hanged man'):
    case ar.includes('jester') && ar.includes('priestess'):
    case ar.includes('jester') && ar.includes('fortune'):
    case ar.includes('aeon') && ar.includes('jester'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Devil', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'devil';
      }
      break;
      
    /* #region  1 result to Tower */
    case ar == 'tower tower':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Tower', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'tower';
      }
      break;
      
    /* #region  14 results to Star */
    case ar.includes('fortune') && ar.includes('empress'):
    case ar.includes('fortune') && ar.includes('lovers'):
    case ar.includes('strength') && ar.includes('fortune'):
    case ar.includes('death') && ar.includes('lovers'):
    case ar.includes('devil') && ar.includes('death'):
    case ar.includes('tower') && ar.includes('fool'):
    case ar.includes('tower') && ar.includes('emperor'):
    case ar.includes('tower') && ar.includes('lovers'):
    case ar.includes('tower') && ar.includes('temperance'):
    case ar.includes('star') && ar.includes('fortune'):
    case ar == 'star star':
    case ar.includes('moon') && ar.includes('magician'):
    case ar.includes('moon') && ar.includes('priestess'):
    case ar.includes('judgement') && ar.includes('hermit'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Star', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'star';
      }
      break;
      
    /* #region  15 results to Moon */
    case ar.includes('priestess') && ar.includes('magician'):
    case ar.includes('empress') && ar.includes('fool'):
    case ar.includes('emperor') && ar.includes('empress'):
    case ar.includes('hanged man') && ar.includes('priestess'):
    case ar.includes('hanged man') && ar.includes('lovers'):
    case ar.includes('hanged man') && ar.includes('hermit'):
    case ar.includes('death') && ar.includes('emperor'):
    case ar.includes('devil') && ar.includes('emperor'):
    case ar.includes('devil') && ar.includes('chariot'):
    case ar.includes('star') && ar.includes('hierophant'):
    case ar.includes('star') && ar.includes('justice'):
    case ar == 'moon moon':
    case ar.includes('sun') && ar.includes('star'):
    case ar.includes('jester') && ar.includes('hermit'):
    case ar.includes('aeon') && ar.includes('hierophant'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Moon', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'moon';
      }
      break;
      
    /* #region  14 results to Sun */
    case ar.includes('hierophant') && ar.includes('priestess'):
    case ar.includes('chariot') && ar.includes('fool'):
    case ar.includes('chariot') && ar.includes('hierophant'):
    case ar.includes('strength') && ar.includes('hierophant'):
    case ar.includes('hanged man') && ar.includes('magician'):
    case ar.includes('death') && ar.includes('hermit'):
    case ar.includes('temperance') && ar.includes('emperor'):
    case ar.includes('temperance') && ar.includes('strength'):
    case ar.includes('devil') && ar.includes('magician'):
    case ar.includes('moon') && ar.includes('chariot'):
    case ar == 'sun sun':
    case ar.includes('judgement') && ar.includes('priestess'):
    case ar.includes('jester') && ar.includes('lovers'):
    case ar.includes('aeon') && ar.includes('priestess'):
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Sun', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'sun';
      }
      break;
      
    /* #region  1 result to Judgement */
    case ar == 'judgement judgement':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Judgement', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'judgement';
      }
      break;
      
    /* #region  1 result to Jester */
    case ar == 'jester jester':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Jester', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'jester';
      }
      break;
      
    /* #region  1 result to Aeon */
    case ar == 'aeon':
      /* #endregion */
      if (fusion_mode == 'double') {
        final_check('Aeon', nm, lv);
      } else if (fusion_mode == 'triple') {
        return 'aeon';
      }
      break;
      
    default:
      break;
  }
}

function final_check(arcana, nm, lv) {
  //special fusions
  switch(true){
    case nm.includes('nebiros') && nm.includes('belial'):
      if(fusion_mode == 'double'){
        f_result.forurl = 'alice';
        f_result.forhtml = 'Alice Lv72 *Special Fusion';
        return;
      }

    case nm.includes('parvati') && nm.includes('shiva'):
      if(fusion_mode == 'double'){
        f_result.forurl = 'ardha';
        f_result.forhtml = 'Ardha Lv90 *Special Fusion';
        return;
      }

    case nm.includes('rangda') && nm.includes('barong'):
      if(fusion_mode == 'double'){
        f_result.forurl = 'shiva';
        f_result.forhtml = 'Shiva Lv80 *Special Fusion';
        return;
      }

    case nm.includes('eligor') && nm.includes('nata taishi'):
      if(fusion_mode == 'double'){
        f_result.forurl = 'slime';
        f_result.forhtml = 'Slime Lv2 *Special Fusion';
        return;
      }

    case nm.includes('lilim') && nm.includes('vetala'):
      if(fusion_mode == 'double'){
        f_result.forurl = 'ukobach';
        f_result.forhtml = 'Ukobach Lv3 *Special Fusion';
        return;
      }

    case nm.includes('atropos') && nm.includes('lachesis') && nm.includes('clotho'):
      if(fusion_mode == 'triple'){
        f_result.forurl = 'norn';
        f_result.forhtml = 'Norn Lv72 *Special Fusion';
        return;
      }

    default:
      break;
  }

  //normal fusions
  switch (arcana) {
    case 'Fool':
      switch (true) {
        case lv >= 64:
          if (nm.includes('loki') == false) {
            f_result.forurl = 'loki';
            f_result.forhtml = 'Loki Lv64';
            break;
          }

        case lv >= 56:
          if (nm.includes('shiki-ouji') == false) {
            f_result.forurl = 'shiki-ouji';
            f_result.forhtml = 'Shiki-Ouji Lv56';
            break;
          }

        case lv >= 46:
          if (nm.includes('decarabia') == false) {
            f_result.forurl = 'decarabia';
            f_result.forhtml = 'Decarabia Lv46';
            break;
          }

        //Black Frost requires special fusion

        case lv >= 31:
          if (nm.includes('ose') == false) {
            f_result.forurl = 'ose';
            f_result.forhtml = 'Ose Lv31';
            break;
          }

        case lv >= 21:
          if (nm.includes('legion') == false) {
            f_result.forurl = 'legion';
            f_result.forhtml = 'Legion Lv21';
            break;
          }

        case lv >= 13:
          if (nm.includes('obariyon') == false) {
            f_result.forurl = 'obariyon';
            f_result.forhtml = 'Obariyon Lv13';
            break;
          }

        case lv >= 7:
          if (nm.includes('yomotsu-shikome') == false) {
            f_result.forurl = 'yomotsu-shikome';
            f_result.forhtml = 'Yomotsu-Shikome Lv7';
            break;
          }

        case lv >= 1:
          if (nm.includes('izanagi') == false) {
            f_result.forurl = 'izanagi';
            f_result.forhtml = 'Izanagi Lv1';
            break;
          }

        default:
          break;
      }
      break;

    case 'Magician':
      switch (true) {
        case lv >= 78:
          if (nm.includes('mada') == false) {
            f_result.forurl = 'mada';
            f_result.forhtml = 'Mada Lv 78';
            break;
          }

        case lv >= 69:
          if (nm.includes('surt') == false) {
            f_result.forurl = 'surt';
            f_result.forhtml = 'Surt Lv69';
            break;
          }

        case lv >= 62:
          if (nm.includes('jinn') == false) {
            f_result.forurl = 'jinn';
            f_result.forhtml = 'Jinn Lv62';
            break;
          }

        case lv >= 47:
          if (nm.includes('rangda') == false) {
            f_result.forurl = 'rangda';
            f_result.forhtml = 'Rangda Lv47';
            break;
          }

        case lv >= 39:
          if (nm.includes('dis') == false) {
            f_result.forurl = 'dis';
            f_result.forhtml = 'Dis Lv39';
            break;
          }

        case lv >= 32:
          if (nm.includes('pyro jack') == false) {
            f_result.forurl = 'pyro jack';
            f_result.forhtml = 'Pyro Jack Lv32';
            break;
          }

        default:
          break;
      }
      break;

    case 'Priestess':
      switch (true) {
        case lv >= 79:
          if (nm.includes('scathach') == false) {
            f_result.forurl = 'scathach';
            f_result.forhtml = 'Scathach Lv79';
            break;
          }

        case lv >= 70:
          if (nm_check.includes('tzitzimitl') == false) {
            f_result.forurl = 'tzitzimitl';
            f_result.forhtml = 'Tzitzimitl Lv70';
            break;
          }

        case lv >= 59:
          if (nm.includes('hariti') == false) {
            f_result.forurl = 'hariti';
            f_result.forhtml = 'Hariti Lv59';
            break;
          }

        case lv >= 48:
          if (nm.includes('kukuri-hime') == false) {
            f_result.forurl = 'kikuri-hime';
            f_result.forhtml = 'Kikuri-Hime Lv48';
            break;
          }

        case lv >= 37:
          if (nm.includes('parvati') == false) {
            f_result.forurl = 'parvati';
            f_result.forhtml = 'Parvati Lv37';
            break;
          }

        case lv >= 29:
          if (nm.includes('ganga') == false) {
            f_result.forurl = 'ganga';
            f_result.forhtml = 'Ganga Lv29';
            break;
          }

        case lv >= 22:
          if (nm.includes('high pixie') == false) {
            f_result.forurl = 'high pixie';
            f_result.forhtml = 'High Pixie Lv22';
            break;
          }

        case lv >= 17:
          if (nm.includes('sarasvati') == false) {
            f_result.forurl = 'sarasvati';
            f_result.forhtml = 'Sarasvati Lv17';
            break;
          }

        case lv >= 11:
          if (nm.includes('saki mitama') == false) {
            f_result.forurl = 'saki mitama';
            f_result.forhtml = 'Saki Mitama Lv11';
            break;
          }

        default:
          break;
      }
      break;

    case 'Empress':
      switch(true){
        case lv >= 79:
          if (nm.includes('isis') == false) {
            f_result.forurl = 'isis';
            f_result.forhtml = 'Isis Lv79';
            break;
          }
        
        case lv >= 70:
          if (nm.includes('alilat') == false) {
            f_result.forurl = 'alilat';
            f_result.forhtml = 'Alilat Lv70';
            break;
          }

        case lv >= 60:
          if (nm.includes('mother harlot') == false) {
            f_result.forurl = 'mother harlot';
            f_result.forhtml = 'Mother Harlot Lv60';
            break;
          }

        case lv >= 52:
          if (nm.includes('skadi') == false) {
            f_result.forurl = 'skadi';
            f_result.forhtml = 'Skadi Lv52';
            break;
          }

        case lv >= 44:
          if (nm.includes('gabriel') == false) {
            f_result.forurl = 'gabriel';
            f_result.forhtml = 'Gabriel Lv44';
            break;
          }

        case lv >= 34:
          if (nm.includes('gorgon') == false) {
            f_result.forurl = 'gorgon';
            f_result.forhtml = 'Gorgon Lv34';
            break;
          }

        case lv >= 26:
          if (nm.includes('titania') == false) {
            f_result.forurl = 'titania';
            f_result.forhtml = 'Titania Lv26';
            break;
          }

        case lv >= 18:
          if (nm.includes('yaksini') == false) {
            f_result.forurl = 'yaksini';
            f_result.forhtml = 'Yaksini Lv18';
            break;
          }

        case lv >= 9:
          if (nm.includes('senri') == false) {
            f_result.forurl = 'senri';
            f_result.forhtml = 'Senri Lv9';
            break;
          }
          
        default:
          break;
      }
      break;
    
    case 'Emperor':
      switch (true) {
        case lv >= 74:
          if (nm.includes('odin') == false) {
            f_result.forurl = 'odin';
            f_result.forhtml = 'Odin Lv74';
            break;
          }

        case lv >= 65:
          if (nm.includes('barong') == false) {
            f_result.forurl = 'barong';
            f_result.forhtml = 'Barong Lv65';
            break;
          }
          
        case lv >= 51:
          if (nm.includes('papilsag') == false) {
            f_result.forurl = 'papilsag';
            f_result.forhtml = 'Papilsag Lv51';
            break;
          }
          
        case lv >= 45:
          if (nm.includes('thoth') == false) {
            f_result.forurl = 'thoth';
            f_result.forhtml = 'Thoth Lv45';
            break;
          }
          
        case lv >= 41:
          if (nm.includes('oukuninushi') == false) {
            f_result.forurl = 'oukuninushi';
            f_result.forhtml = 'Oukuninushi Lv41';
            break;
          }
          
        case lv >= 34:
          if (nm.includes('setanta') == false) {
            f_result.forurl = 'setanta';
            f_result.forhtml = 'Setanta Lv34';
            break;
          }
          
        case lv >= 22:
          if (nm.includes('king frost') == false) {
            f_result.forurl = 'king frost';
            f_result.forhtml = 'King Frost Lv22';
            break;
          }
          
        case lv >= 12:
          if (nm.includes('oberon') == false) {
            f_result.forurl = 'oberon';
            f_result.forhtml = 'Oberon Lv12';
            break;
          }
          

        default:
          break;
      }
      break;
    
    case 'Hierophant':
      switch (true) {
        //Kohryu requires special fusion

        case lv >= 70:
          if (nm.includes('hachiman') == false) {
            f_result.forurl = 'hachiman';
            f_result.forhtml = 'Hachiman Lv70';
            break;
          }
          
        case lv >= 60:
          if (nm.includes('daisoujou') == false) {
            f_result.forurl = 'daisoujou';
            f_result.forhtml = 'Daisoujou Lv60';
            break;
          }
          
        case lv >= 52:
          if (nm.includes('cerberus') == false) {
            f_result.forurl = 'cerberus';
            f_result.forhtml = 'Cerberus Lv52';
            break;
          }
          
        case lv >= 45:
          if (nm.includes('hokuto seikun') == false) {
            f_result.forurl = 'hokuto seikun';
            f_result.forhtml = 'Hokuto Seikun Lv45';
            break;
          }
          
        case lv >= 36:
          if (nm.includes('flauros') == false) {
            f_result.forurl = 'flauros';
            f_result.forhtml = 'Flauros Lv36';
            break;
          }
          
        case lv >= 29:
          if (nm.includes('unicorn') == false) {
            f_result.forurl = 'unicorn';
            f_result.forhtml = 'Unicorn Lv29';
            break;
          }
          
        case lv >= 21:
          if (nm.includes('shiisaa') == false) {
            f_result.forurl = 'shiisaa';
            f_result.forhtml = 'Shiisaa Lv21';
            break;
          }
          
        case lv >= 15:
          if (nm.includes('anzu') == false) {
            f_result.forurl = 'anzu';
            f_result.forhtml = 'Anzu Lv15';
            break;
          }
          
        case lv >= 7:
          if (nm.includes('omoikane') == false) {
            f_result.forurl = 'omoikane';
            f_result.forhtml = 'Omoikane Lv7';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Lovers':
      switch (true) {
        case lv >= 71:
          if (nm.includes('ishtar') == false) {
            f_result.forurl = 'ishtar';
            f_result.forhtml = 'Ishtar Lv71';
            break;
          }

        case lv >= 64:
          if (nm.includes('cybele') == false) {
            f_result.forurl = 'cybele';
            f_result.forhtml = 'Cybele Lv64';
            break;
          }

        case lv >= 53:
          if (nm.includes('raphael') == false) {
            f_result.forurl = 'raphael';
            f_result.forhtml = 'Raphael Lv53';
            break;
          }

        case lv >= 42:
          if (nm.includes('leanan sidhe') == false) {
            f_result.forurl = 'leanan sidhe';
            f_result.forhtml = 'Leanan Sidhe Lv42';
            break;
          }

        case lv >= 33:
          if (nm.includes('undine') == false) {
            f_result.forurl = 'undine';
            f_result.forhtml = 'Undine Lv33';
            break;
          }

        case lv >= 25:
          if (nm.includes('queen mab') == false) {
            f_result.forurl = 'queen mab';
            f_result.forhtml = 'Queen Mab Lv25';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Chariot':
      switch (true) {
        //Futsunushi requires special fusion

        case lv >= 72:
          if (nm.includes('atavaka') == false) {
            f_result.forurl = 'atavaka';
            f_result.forhtml = 'Atavaka Lv72';
            break;
          }

        case lv >= 65:
          if (nm.includes('thor') == false) {
            f_result.forurl = 'thor';
            f_result.forhtml = 'Thor Lv65';
            break;
          }

        case lv >= 54:
          if (nm.includes('kin-ki') == false) {
            f_result.forurl = 'kin-ki';
            f_result.forhtml = 'Kin-ki Lv54';
            break;
          }

        case lv >= 43:
          if (nm.includes('triglav') == false) {
            f_result.forurl = 'triglav';
            f_result.forhtml = 'Triglav Lv43';
            break;
          }

        case lv >= 25:
          if (nm.includes('ares') == false) {
            f_result.forurl = 'ares';
            f_result.forhtml = 'Ares Lv25';
            break;
          }

        case lv >= 18:
          if (nm.includes('ara mitama') == false) {
            f_result.forurl = 'ara mitama';
            f_result.forhtml = 'Ara Mitama Lv18';
            break;
          }

        case lv >= 12:
          if (nm.includes('eligor') == false) {
            f_result.forurl = 'eligor';
            f_result.forhtml = 'Eligor Lv12';
            break;
          }

        case lv >= 6:
          if (nm.includes('nata taishi') == false) {
            f_result.forurl = 'nata taishi';
            f_result.forhtml = 'Nata Taishi Lv6';
            break;
          }

        //Slime requires special fusion

        default:
          break;
      }
      break;
    
    case 'Justice':
      switch (true) {
        case lv >= 74:
          if (nm.includes('sraosha') == false) {
            f_result.forurl = 'sraosha';
            f_result.forhtml = 'Sraosha Lv74';
            break;
          }

        case lv >= 66:
          if (nm.includes('melchizedek') == false) {
            f_result.forurl = 'melchizedek';
            f_result.forhtml = 'Melchizedek Lv66';
            break;
          }

        case lv >= 58:
          if (nm.includes('uriel') == false) {
            f_result.forurl = 'uriel';
            f_result.forhtml = 'Uriel Lv58';
            break;
          }

        case lv >= 49:
          if (nm.includes('throne') == false) {
            f_result.forurl = 'throne';
            f_result.forhtml = 'Throne Lv49';
            break;
          }

        case lv >= 38:
          if (nm.includes('dominion') == false) {
            f_result.forurl = 'dominion';
            f_result.forhtml = 'Dominion Lv38';
            break;
          }

        case lv >= 33:
          if (nm.includes('virtue') == false) {
            f_result.forurl = 'virtue';
            f_result.forhtml = 'Virtue Lv33';
            break;
          }

        case lv >= 27:
          if (nm.includes('power') == false) {
            f_result.forurl = 'power';
            f_result.forhtml = 'Power Lv27';
            break;
          }

        case lv >= 19:
          if (nm.includes('principality') == false) {
            f_result.forurl = 'principality';
            f_result.forhtml = 'Principality Lv19';
            break;
          }

        case lv >= 11:
          if (nm.includes('archangel') == false) {
            f_result.forurl = 'archangel';
            f_result.forhtml = 'Archangel Lv11';
            break;
          }

        case lv >= 4:
          if (nm.includes('angel') == false) {
            f_result.forurl = 'angel';
            f_result.forhtml = 'Angel Lv4';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Hermit':
      switch (true) {
        //Ongyo-ki requires special fusion

        case lv >= 73:
          if (nm.includes('arahabaki') == false) {
            f_result.forurl = 'arahabaki';
            f_result.forhtml = 'Arahabaki Lv73';
            break;
          }

        case lv >= 63:
          if (nm.includes('nebiros') == false) {
            f_result.forurl = 'nebiros';
            f_result.forhtml = 'Nebiros Lv63';
            break;
          }

        case lv >= 55:
          if (nm.includes('niddhoggr') == false) {
            f_result.forurl = 'niddhoggr';
            f_result.forhtml = 'Niddhoggr Lv55';
            break;
          }

        case lv >= 48:
          if (nm.includes('kurama tengu') == false) {
            f_result.forurl = 'kurama tengu';
            f_result.forhtml = 'Kurama Tengu Lv48';
            break;
          }

        case lv >= 41:
          if (nm.includes('hitokotonusi') == false) {
            f_result.forurl = 'hikotokonusi';
            f_result.forhtml = 'Hitokotonusi Lv41';
            break;
          }

        case lv >= 33:
          if (nm.includes('mothman') == false) {
            f_result.forurl = 'mothman';
            f_result.forhtml = 'Mothman Lv33';
            break;
          }

        case lv >= 26:
          if (nm.includes('lamia') == false) {
            f_result.forurl = 'lamia';
            f_result.forhtml = 'Lamia Lv26';
            break;
          }

        case lv >= 17:
          if (nm.includes('ippon-datara') == false) {
            f_result.forurl = 'ippon-datara';
            f_result.forhtml = 'Ippon-Datara Lv17';
            break;
          }

        case lv >= 6:
          if (nm.includes('forneus') == false) {
            f_result.forurl = 'forneus';
            f_result.forhtml = 'Forneus Lv 6';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Fortune':
      switch (true) {
        //Norn requires sepcial fusion

        case lv >= 65:
          if (nm.includes('atropos') == false) {
            f_result.forurl = 'atropos';
            f_result.forhtml = 'Atropos Lv65';
            break;
          }

        case lv >= 58:
          if (nm.includes('ananta') == false) {
            f_result.forurl = 'ananta';
            f_result.forhtml = 'Ananto Lv58';
            break;
          }

        case lv >= 51:
          if (nm.includes('lachesis') == false) {
            f_result.forurl = 'lachesis';
            f_result.forhtml = 'Lachesis Lv51';
            break;
          }

        case lv >= 44:
          if (nm.includes('clotho') == false) {
            f_result.forurl = 'clotho';
            f_result.forhtml = 'Clotho Lv44';
            break;
          }

        case lv >= 35:
          if (nm.includes('fortuna') == false) {
            f_result.forurl = 'fortuna';
            f_result.forhtml = 'fortuna Lv35';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Strength':
      switch (true) {
        case lv >= 90:
          if (nm.includes('zaou-gongen') == false) {
            f_result.forurl = 'zaou-gongen';
            f_result.forhtml = 'Zaou-Gongen Lv90';
            break;
          }

        case lv >= 63:
          if (nm.includes('siegfried') == false) {
            f_result.forurl = 'siegfried';
            f_result.forhtml = 'Siegfried Lv63';
            break;
          }
        case lv >= 50:
          if (nm.includes('kali') == false) {
            f_result.forurl = 'kali';
            f_result.forhtml = 'Kali Lv50';
            break;
          }

        case lv >= 42:
          if (nm.includes('hanuman') == false) {
            f_result.forurl = 'hanuman';
            f_result.forhtml = 'Hanuman Lv42';
            break;
          }

        case lv >= 30:
          if (nm.includes('oni') == false) {
            f_result.forurl = 'oni';
            f_result.forhtml = 'Oni Lv30';
            break;
          }

        case lv >= 28:
          if (nm.includes('kusi mitama') == false) {
            f_result.forurl = 'kusi mitama';
            f_result.forhtml = 'Kusi Mitama Lv28';
            break;
          }

        case lv >= 23:
          if (nm.includes('rakshasa') == false) {
            f_result.forurl = 'rakshasa';
            f_result.forhtml = 'Rakshasa Lv23';
            break;
          }

        case lv >= 14:
          if (nm.includes('titan') == false) {
            f_result.forurl = 'titan';
            f_result.forhtml = 'Titan Lv14';
            break;
          }

        case lv >= 8:
          if (nm.includes('valkyrie') == false) {
            f_result.forurl = 'valkyrie';
            f_result.forhtml = 'Valkyrie Lv8';
            break;
          }

        case lv >= 5:
          if (nm.includes('sandman') == false) {
            f_result.forurl = 'sandman';
            f_result.forhtml = 'Sandman Lv5';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Hanged Man':
      switch (true) {
        case lv >= 82:
          if (nm.includes('attis') == false) {
            f_result.forurl = 'attis';
            f_result.forhtml = 'Attis Lv82';
            break;
          }

        case lv >= 71:
          if (nm.includes('vasuki') == false) {
            f_result.forurl = 'vasuki';
            f_result.forhtml = 'Vasuki Lv71';
            break;
          }

        case lv >= 66:
          if (nm.includes('hell biker') == false) {
            f_result.forurl = 'hell biker';
            f_result.forhtml = 'Hell Biker Lv66';
            break;
          }

        case lv >= 56:
          if (nm.includes('taowu') == false) {
            f_result.forurl = 'taowu';
            f_result.forhtml = 'Taowu Lv56';
            break;
          }

        //Yatsufusa requires special fusion

        case lv >= 39:
          if (nm.includes('orthrus') == false) {
            f_result.forurl = 'orthrus';
            f_result.forhtml = 'Orthrus Lv39';
            break;
          }

        case lv >= 27:
          if (nm.includes('makami') == false) {
            f_result.forurl = 'makami';
            f_result.forhtml = 'Makami Lv27';
            break;
          }

        case lv >= 22:
          if (nm.includes('ikusa') == false) {
            f_result.forurl = 'ikusa';
            f_result.forhtml = 'Ikusa Lv22';
            break;
          }

        case lv >= 15:
          if (nm.includes('berith') == false) {
            f_result.forurl = 'berith';
            f_result.forhtml = 'Berith Lv15';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Death':
      switch (true) {
        //Mahakala requires special fusion

        //Alice requires special fusion

        case lv >= 58:
          if (nm.includes('white rider') == false) {
            f_result.forurl = 'white rider';
            f_result.forhtml = 'White Rider Lv58';
            break;
          }

        case lv >= 46:
          if (nm.includes('mot') == false) {
            f_result.forurl = 'mot';
            f_result.forhtml = 'Mot Lv58';
            break;
          }

        case lv >= 36:
          if (nm.includes('samael') == false) {
            f_result.forurl = 'samael';
            f_result.forhtml = 'Samael Lv36';
            break;
          }

        case lv >= 24:
          if (nm.includes('matador') == false) {
            f_result.forurl = 'matador';
            f_result.forhtml = 'Matador Lv24';
            break;
          }

        case lv >= 14:
          if (nm.includes('mokoi') == false) {
            f_result.forurl = 'mokoi';
            f_result.forhtml = 'Mokoi Lv14';
            break;
          }

        case lv >= 9:
          if (nm.includes('ghoul') == false) {
            f_result.forurl = 'ghoul';
            f_result.forhtml = 'Ghoul Lv9';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Temperance':
      switch (true) {
        case lv >= 73:
          if (nm.includes('vishnu') == false) {
            f_result.forurl = 'vishnu';
            f_result.forhtml = 'Vishnu Lv73';
            break;
          }

        case lv >= 69:
          if (nm.includes('yurlungur') == false) {
            f_result.forurl = 'yurlungur';
            f_result.forhtml = 'Yurlungur Lv69';
            break;
          }

        case lv >= 62:
          if (nm.includes('byakko') == false) {
            f_result.forurl = 'byakko';
            f_result.forhtml = 'Byakko Lv62';
            break;
          }

        case lv >= 54:
          if (nm.includes('suzaku') == false) {
            f_result.forurl = 'suzaku';
            f_result.forhtml = 'Suzaku Lv54';
            break;
          }

        case lv >= 47:
          if (nm.includes('seiryuu') == false) {
            f_result.forurl = 'seiryuu';
            f_result.forhtml = 'Seiryuu Lv47';
            break;
          }

        case lv >= 40:
          if (nm.includes('genbu') == false) {
            f_result.forurl = 'genbu';
            f_result.forhtml = 'Genbu Lv40';
            break;
          }

        case lv >= 31:
          if (nm.includes('mithra') == false) {
            f_result.forurl = 'mithra';
            f_result.forhtml = 'Mithra Lv31';
            break;
          }

        case lv >= 23:
          if (nm.includes('nigi mitama') == false) {
            f_result.forurl = 'nigi mitama';
            f_result.forhtml = 'Nigi Mitama Lv23';
            break;
          }

        case lv >= 16:
          if (nm.includes('xiezhai') == false) {
            f_result.forurl = 'xiezhai';
            f_result.forhtml = 'Xiezhai Lv16';
            break;
          }

        case lv >= 11:
          if (nm.includes('sylph') == false) {
            f_result.forurl = 'sylph';
            f_result.forhtml = 'Sylph Lv';
            break;
          }
        
        case lv >= 4:
          if (nm.includes('apsaras') == false) {
            f_result.forurl = 'apsaras';
            f_result.forhtml = 'Apsaras Lv4';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Devil':
      switch (true) {
        //Beelzebub requires special fusion

        case lv >= 68:
          if (nm.includes('belial') == false) {
            f_result.forurl = 'belial';
            f_result.forhtml = 'Belial Lv68';
            break;
          }

        case lv >= 61:
          if (nm.includes('belphegor') == false) {
            f_result.forurl = 'belphegor';
            f_result.forhtml = 'Belphegor Lv61';
            break;
          }

        case lv >= 53:
          if (nm.includes('lilith') == false) {
            f_result.forurl = 'lilith';
            f_result.forhtml = 'Lilith Lv53';
            break;
          }

        case lv >= 44:
          if (nm.includes('succubus') == false) {
            f_result.forurl = 'succubus';
            f_result.forhtml = 'Succubus Lv44';
            break;
          }

        case lv >= 37:
          if (nm.includes('pazuzu') == false) {
            f_result.forurl = 'pazuzu';
            f_result.forhtml = 'Pazuzu Lv37';
            break;
          }

        case lv >= 28:
          if (nm.includes('incubus') == false) {
            f_result.forurl = 'incubus';
            f_result.forhtml = 'Incubus Lv28';
            break;
          }

        case lv >= 19:
          if (nm.includes('vetala') == false) {
            f_result.forurl = 'vetala';
            f_result.forhtml = 'Vetala Lv19';
            break;
          }

        case lv >= 10:
          if (nm.includes('lilim') == false) {
            f_result.forurl = 'lilim';
            f_result.forhtml = 'Lilim Lv10';
            break;
          }

        //Ukobach requires special fusion

        default:
          break;
      }
      break;
    
    case 'Tower':
      switch (true) {
        //Shiva requires special fusion

        //Yoshitsune requires special fusion

        case lv >= 69:
          if (nm.includes('masakado') == false) {
            f_result.forurl = 'masakado';
            f_result.forhtml = 'Masakado Lv69';
            break;
          }

        case lv >= 62:
          if (nm.includes('mara') == false) {
            f_result.forurl = 'mara';
            f_result.forhtml = 'Mara Lv62';
            break;
          }

        case lv >= 55:
          if (nm.includes('abaddon') == false) {
            f_result.forurl = 'abaddon';
            f_result.forhtml = 'Abaddon Lv55';
            break;
          }

        case lv >= 46:
          if (nm.includes('cu chulainn') == false) {
            f_result.forurl = 'cu chulainn';
            f_result.forhtml = 'Cu Chulainn Lv46';
            break;
          }

        case lv >= 35:
          if (nm.includes('taotie') == false) {
            f_result.forurl = 'taotie';
            f_result.forhtml = 'Taotie Lv35';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Star':
      switch (true) {
        case lv >= 87:
          if (nm.includes('helel') == false) {
            f_result.forurl = 'helel';
            f_result.forhtml = 'Helel Lv87';
            break;
          }

        case lv >= 75:
          if (nm.includes('saturnus') == false) {
            f_result.forurl = 'saturnus';
            f_result.forhtml = 'Saturnus Lv75';
            break;
          }

        case lv >= 67:
          if (nm.includes('kartikeya') == false) {
            f_result.forurl = 'kartikeya';
            f_result.forhtml = 'Kartikeya Lv67';
            break;
          }

        case lv >= 57:
          if (nm.includes('garuda') == false) {
            f_result.forurl = 'garuda';
            f_result.forhtml = 'Garuda Lv57';
            break;
          }

        case lv >= 50:
          if (nm.includes('ganesha') == false) {
            f_result.forurl = 'ganesha';
            f_result.forhtml = 'Ganesha Lv50';
            break;
          }

        case lv >= 43:
          if (nm.includes('fuu-ki') == false) {
            f_result.forurl = 'fuu-ki';
            f_result.forhtml = 'Fuu-ki Lv43';
            break;
          }

        //Neko Shogun requires special fusion

        case lv >= 24:
          if (nm.includes('kaiwan') == false) {
            f_result.forurl = 'kaiwan';
            f_result.forhtml = 'Kaiwan Lv24';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Moon':
      switch (true) {
        case lv >= 84:
          if (nm.includes('sandalphon') == false) {
            f_result.forurl = 'sandalphon';
            f_result.forhtml = 'Sandalphon Lv84';
            break;
          }

        case lv >= 77:
          if (nm.includes('baal zebul') == false) {
            f_result.forurl = 'baal zebul';
            f_result.forhtml = 'Baal Zebul Lv77';
            break;
          }

        case lv >= 68:
          if (nm.includes('seth') == false) {
            f_result.forurl = 'seth';
            f_result.forhtml = 'Seth Lv68';
            break;
          }

        case lv >= 57:
          if (nm.includes('sui-ki') == false) {
            f_result.forurl = 'sui-ki';
            f_result.forhtml = 'Sui-ki Lv57';
            break;
          }

        case lv >= 48:
          if (nm.includes('girimehkala') == false) {
            f_result.forurl = 'girimehkala';
            f_result.forhtml = 'Girimehkala Lv48';
            break;
          }

        case lv >= 41:
          if (nm.includes('alraune') == false) {
            f_result.forurl = 'alraune';
            f_result.forhtml = 'Alraune Lv41';
            break;
          }

        case lv >= 34:
          if (nm.includes('yamatano-orochi') == false) {
            f_result.forurl = 'yamatano-orochi';
            f_result.forhtml = 'Yamatano-Orochi Lv34';
            break;
          }

        case lv >= 27:
          if (nm.includes('nozuchi') == false) {
            f_result.forurl = 'nozuchi';
            f_result.forhtml = 'Nozuchi Lv27';
            break;
          }

        case lv >= 20:
          if (nm.includes('andra') == false) {
            f_result.forurl = 'andra';
            f_result.forhtml = 'Andra Lv20';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Sun':
      switch (true) {
        case lv >= 86:
          if (nm.includes('asura') == false) {
            f_result.forurl = 'asura';
            f_result.forhtml = 'Asura Lv86';
            break;
          }

        case lv >= 77:
          if (nm.includes('suparna') == false) {
            f_result.forurl = 'suparna';
            f_result.forhtml = 'Suparna Lv77';
            break;
          }

        case lv >= 68:
          if (nm.includes('horus') == false) {
            f_result.forurl = 'horus';
            f_result.forhtml = 'Horus Lv68';
            break;
          }

        case lv >= 61:
          if (nm.includes('jatayu') == false) {
            f_result.forurl = 'jatayu';
            f_result.forhtml = 'Jatayu Lv61';
            break;
          }

        //Tam Lin requires special fusion

        case lv >= 47:
          if (nm.includes('narasimha') == false) {
            f_result.forurl = 'narasimha';
            f_result.forhtml = 'Narasimha Lv47';
            break;
          }

        case lv >= 40:
          if (nm.includes('yatagarasu') == false) {
            f_result.forurl = 'yatagarasu';
            f_result.forhtml = 'Yatagarasu Lv40';
            break;
          }

        case lv >= 31:
          if (nm.includes('gdon') == false) {
            f_result.forurl = 'gdon';
            f_result.forhtml = 'Gdon Lv31';
            break;
          }

        case lv >= 20:
          if (nm.includes('phoenix') == false) {
            f_result.forurl = 'phoenix';
            f_result.forhtml = 'Phoenix Lv20';
            break;
          }

        case lv >= 10:
          if (nm.includes('cu sith') == false) {
            f_result.forurl = 'cu sith';
            f_result.forhtml = 'Cu Sith Lv10';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Judgement':
      switch (true) {
        //Lucifer requires special fusion

        //Ardha requires special fusion

        case lv >= 83:
          if (nm.includes('matatron') == false) {
            f_result.forurl = 'matatron';
            f_result.forhtml = 'Metatron Lv83';
            break;
          }

        case lv >= 76:
          if (nm.includes('satan') == false) {
            f_result.forurl = 'satan';
            f_result.forhtml = 'Satan Lv76';
            break;
          }

        case lv >= 72:
          if (nm.includes('michael') == false) {
            f_result.forurl = 'michael';
            f_result.forhtml = 'Michael Lv72';
            break;
          }

        //Trumpeter requires special fusion

        case lv >= 59:
          if (nm.includes('anubis') == false) {
            f_result.forurl = 'anubis';
            f_result.forhtml = 'Anubis Lv59';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Jester':
      switch (true) {
        case lv >= 77:
          if (nm.includes('magatsu izanagi') == false) {
            f_result.forurl = 'magatsu izanagi';
            f_result.forhtml = 'Magatsu Izanagi Lv77';
            break;
          }

        case lv >= 68:
          if (nm.includes('seiten taisei') == false) {
            f_result.forurl = 'seiten taisei';
            f_result.forhtml = 'Seiten Taisei Lv68';
            break;
          }

        case lv >= 62:
          if (nm.includes('chernobog') == false) {
            f_result.forurl = 'chernobog';
            f_result.forhtml = 'Chernobog Lv62';
            break;
          }

        case lv >= 55:
          if (nm.includes('kumbhanda') == false) {
            f_result.forurl = 'kumbhanda';
            f_result.forhtml = 'Kumbhanda Lv55';
            break;
          }

        case lv >= 57:
          if (nm.includes('baphomet') == false) {
            f_result.forurl = 'baphomet';
            f_result.forhtml = 'Baphomet Lv57';
            break;
          }

        case lv >= 40:
          if (nm.includes('loa') == false) {
            f_result.forurl = 'loa';
            f_result.forhtml = 'Loa Lv40';
            break;
          }

        case lv >= 34:
          if (nm.includes('pale rider') == false) {
            f_result.forurl = 'pale rider';
            f_result.forhtml = 'Pale Rider Lv34';
            break;
          }

        case lv >= 27:
          if (nm.includes('take-minakata') == false) {
            f_result.forurl = 'take-minakata';
            f_result.forhtml = 'Take-Minakata Lv';
            break;
          }

        case lv >= 20:
          if (nm.includes('gurr') == false) {
            f_result.forurl = 'gurr';
            f_result.forhtml = 'Gurr Lv20';
            break;
          }

        default:
          break;
      }
      break;
    
    case 'Aeon':
      switch (true) {
        case lv >= 74:
          if (nm.includes('kaguya') == false) {
            f_result.forurl = 'kaguya';
            f_result.forhtml = 'Kaguya Lv74';
            break;
          }

        case lv >= 65:
          if (nm.includes('laksmi') == false) {
            f_result.forurl = 'laksmi';
            f_result.forhtml = 'Laksmi Lv65';
            break;
          }

        case lv >= 58:
          if (nm.includes('kingu') == false) {
            f_result.forurl = 'kingu';
            f_result.forhtml = 'Kingu Lv58';
            break;
          }

        case lv >= 51:
          if (nm.includes('quetzalcoatl') == false) {
            f_result.forurl = 'quetzalcoatl';
            f_result.forhtml = 'Quetzalcoatl Lv51';
            break;
          }

        case lv >= 44:
          if (nm.includes('kushinada') == false) {
            f_result.forurl = 'kushinada';
            f_result.forhtml = 'Kushinada Lv44';
            break;
          }

        case lv >= 37:
          if (nm.includes('raja naga') == false) {
            f_result.forurl = 'raja naga';
            f_result.forhtml = 'Raja Naga Lv37';
            break;
          }

        case lv >= 31:
          if (nm.includes('sati') == false) {
            f_result.forurl = 'sati';
            f_result.forhtml = 'Sati Lv31';
            break;
          }

        case lv >= 24:
          if (nm.includes('narcissus') == false) {
            f_result.forurl = 'narcissus';
            f_result.forhtml = 'Narcissus Lv24';
            break;
          }

        case lv >= 18:
          if (nm.includes('ame-no-uzume') == false) {
            f_result.forurl = 'ame-no-uzume';
            f_result.forhtml = 'Ame-no-Uzume Lv18';
            break;
          }

        default:
          break;
      }
      break;
    

    default:
      break;
  }
}

function do_fusion() {
  assign_by_persona(persona1, $('#persona1').val());
  assign_by_persona(persona2, $('#persona2').val());
  assign_by_persona(persona3, $('#persona3').val());

  fmode_check();

  $('#info_1').val(persona1.name);
  $('#info_2').val(persona2.name);
  $('#info_3').val(persona3.name);
  $('#info_r').val(f_result.forurl);
  $('#output').html(f_result.forhtml);

  info_toggle();
}

$(function () {
  $('form').trigger('reset');

  $('#tf_y_n').click(function () {
    $('#third_persona, .tie_box').toggle();

    switch (fusion_mode) {
      case 'double':
        $('#plus_equals').html('+');
        $(this).html('Switch to Double Fusion');
        fusion_mode = 'triple';
        do_fusion();
        break;

      case 'triple':
        $('#plus_equals').html('=');
        $(this).html('Switch to Triple Fusion');
        fusion_mode = 'double';
        do_fusion();
        break;

      default:
        break;
    }
  });

  $('#fusion_ui').on({
    input: function () {
      do_fusion();
    }
  });
});