const persona = new URLSearchParams(window.location.search);

switch (persona.get('persona')) {
  /* #region  Fool */
  case 'loki':
    $('#name').html('Loki');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 64');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('48');
    $('#ma').html('50');
    $('#en').html('31');
    $('#ag').html('47');
    $('#lu').html('23');

    $('#skill').append('<li>Bufudyne</li><li>Rakukaja</li><li>Sharp Student</li><li>Ice Amp</li><li>High Counter</li><li>Mabufudyne</li><li>Null Fire</li><li>Niflheim</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv66</li><li>Lv67</li><li>Lv68</li><li>Lv69</li><li>Lv70</li>');
    break;

  case 'shiki-ouji':
    $('#name').html('Shiki-Ouji');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 56');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('50');
    $('#ma').html('29');
    $('#en').html('31');
    $('#ag').html('41');
    $('#lu').html('24');

    $('#skill').append('<li>Navas Nebula</li><li>Matarunda</li><li>Revolution</li><li>Apt Pupil</li><li>Growth 2</li><li>Null Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv58</li><li>Lv59</li><li>Lv62</li>');
    break;

  case 'decarabia':
    $('#name').html('Decarabia');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 46');

    $('#phys').html('Wk');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Str');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('27');
    $('#ma').html('36');
    $('#en').html('25');
    $('#ag').html('26');
    $('#lu').html('31');

    $('#skill').append('<li>Agidyne</li><li>Matarunda</li><li>Tetrakarn</li><li>Evade Physical</li><li>Megidola</li><li>Fire Amp</li><li>Resist Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv48</li><li>Lv50</li><li>Lv51</li><li>Lv52</li>');
    break;

  case 'black-frost':
    $('#name').html('Black Frost');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 38');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('23');
    $('#ma').html('31');
    $('#en').html('22');
    $('#ag').html('23');
    $('#lu').html('22');

    $('#skill').append('<li>Maragion</li><li>Bufula</li><li>Ice Boost</li><li>Mind Charge</li><li>Masukunda</li><li>Fire Amp</li><li>Agidyne</li><li>Mudoon</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv40</li><li>Lv41</li><li>Lv42</li><li>Lv43</li><li>Lv44</li>');
    break;

  case 'ose':
    $('#name').html('Ose');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 31');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('Wk');
    $('#dark').html('-');

    $('#st').html('28');
    $('#ma').html('12');
    $('#en').html('20');
    $('#ag').html('25');
    $('#lu').html('15');

    $('#skill').append('<li>Power Slash</li><li>Atom Smasher</li><li>Power Charge</li><li>Poison Mist</li><li>Poison Boost</li><li>Auto-Sukukaja</li><li>Survive Light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv33</li><li>Lv34</li><li>Lv35</li><li>Lv36</li>');
    break;

  case 'legion':
    $('#name').html('Legion');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 21');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Str');

    $('#st').html('14');
    $('#ma').html('14');
    $('#en').html('18');
    $('#ag').html('13');
    $('#lu').html('11');

    $('#skill').append('<li>Tentarafoo</li><li>Mudo</li><li>Evil Smile</li><li>Rampage</li><li>Confuse Boost</li><li>Foul Breath</li><li>Survive Light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv23</li><li>Lv24</li><li>Lv25</li><li>Lv26</li>');
    break;

  case 'obariyon':
    $('#name').html('Obariyon');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 13');

    $('#phys').html('Str');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('11');
    $('#ma').html('6');
    $('#en').html('11');
    $('#ag').html('9');
    $('#lu').html('9');

    $('#skill').append('<li>Sonic Punch</li><li>Tarukaja</li><li>Dekaja</li><li>Muzzle Shot</li><li>Silence Boost</li><li>Resist Physical</li><li>Single Shot</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv14</li><li>Lv15</li><li>Lv17</li><li>Lv18</li>');
    break;

  case 'yomotsu-shikome':
    $('#name').html('Yomotsu-Shikome');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 7');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('2');
    $('#ma').html('7');
    $('#en').html('7');
    $('#ag').html('8');
    $('#lu').html('4');

    $('#skill').append('<li>Poisma</li><li>Skewer</li><li>Evil Touch</li><li>Sukunda</li><li>Mudo</li><li>Ghastly Wail</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv9</li><li>Lv10</li><li>Lv11</li>');
    break;

  case 'izanagi':
    $('#name').html('Izanagi');
    $('#arcana').html('Fool');
    $('#level').html('Base Lv 1');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('3');
    $('#ma').html('2');
    $('#en').html('2');
    $('#ag').html('3');
    $('#lu').html('2');

    $('#skill').append('<li>Zio</li><li>Cleave</li><li>Rakukaja</li><li>Rakunda</li><li>Tarukaja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv3</li><li>Lv5</li>');
    break;
  /* #endregion */

  /* #region  Magician */
  case 'mada':
    $('#name').html('Mada');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 78');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('45');
    $('#ma').html('63');
    $('#en').html('52');
    $('#ag').html('38');
    $('#lu').html('43');

    $('#skill').append('<li>Agidyne</li><li>Fire Boost</li><li>Foolish Whisper</li><li>Maragidyne</li><li>Evade Ice</li><li>Ailment Boost</li><li>Fire Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv81</li><li>Lv82</li><li>Lv83</li><li>Lv84</li>');
    break;

  case 'surt':
    $('#name').html('Surt');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 69');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('41');
    $('#ma').html('54');
    $('#en').html('39');
    $('#ag').html('40');
    $('#lu').html('40');

    $('#skill').append('<li>Agidyne</li><li>Deathbound</li><li>High Counter</li><li>Maragidyne</li><li>Ragnarok</li><li>Fire Amp</li><li>Null Ice</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv71</li><li>Lv74</li><li>Lv75</li><li>Lv76</li>');
    break;

  case 'jinn':
    $('#name').html('Jinn');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 62');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('37');
    $('#ma').html('51');
    $('#en').html('38');
    $('#ag').html('39');
    $('#lu').html('28');

    $('#skill').append('<li>Agidyne</li><li>Foolish Whisper</li><li>Resist Physical</li><li>Fire Boost</li><li>Null Physical</li><li>Valiant Dance</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv65</li><li>Lv66</li><li>Lv67</li><li>Lv68</li>');
    break;

  case 'rangda':
    $('#name').html('Rangda');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 47');

    $('#phys').html('Rpl');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('24');
    $('#ma').html('37');
    $('#en').html('30');
    $('#ag').html('25');
    $('#lu').html('32');

    $('#skill').append('<li>Maragion</li><li>Tentarafoo</li><li>Agidyne</li><li>Dodge Ice</li><li>Mustard Bomb</li><li>Repel Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv49</li><li>Lv50</li><li>Lv51</li><li>Lv55</li>');
    break;

  case 'dis':
    $('#name').html('Dis');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 39');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('25');
    $('#ma').html('31');
    $('#en').html('24');
    $('#ag').html('26');
    $('#lu').html('21');

    $('#skill').append('<li>Maragion</li><li>Diarama</li><li>Dekunda</li><li>Dodge Ice</li><li>Masukunda</li><li>Agidyne</li><li>Mind Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv41</li><li>Lv42</li><li>Lv43</li><li>Lv44</li>');
    break;

  case 'pyro-jack':
    $('#name').html('Pyro Jack');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 32');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('16');
    $('#ma').html('26');
    $('#en').html('19');
    $('#ag').html('22');
    $('#lu').html('20');

    $('#skill').append('<li>Agilao</li><li>Tarunda</li><li>Marakukaja</li><li>Maragion</li><li>Auto-Rakukaja</li><li>Resist Ice</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv34</li><li>Lv36</li><li>Lv37</li><li>Lv38</li>');
    break;

  case 'hua-po':
    $('#name').html('Hua Po');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 25');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('14');
    $('#ma').html('21');
    $('#en').html('15');
    $('#ag').html('17');
    $('#lu').html('15');

    $('#skill').append('<li>Agilao</li><li>Rakukaja</li><li>Re Patra</li><li>Fire Break</li><li>Makajam</li><li>Dodge Ice</li><li>Fire Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv26</li><li>Lv27</li><li>Lv29</li><li>Lv30</li>');
    break;

  case 'jack-frost':
    $('#name').html('Jack Frost');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 16');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('10');
    $('#ma').html('14');
    $('#en').html('12');
    $('#ag').html('11');
    $('#lu').html('8');

    $('#skill').append('<li>Mabufu</li><li>Ice Break</li><li>Me Patra</li><li>Ice Boost</li><li>Bufula</li><li>Dodge Fire</li><li>Mind Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv18</li><li>Lv19</li><li>Lv20</li><li>Lv25</li>');
    break;

  case 'orobas':
    $('#name').html('Orobas');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 8');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('4');
    $('#ma').html('10');
    $('#en').html('6');
    $('#ag').html('7');
    $('#lu').html('4');

    $('#skill').append('<li>Agi</li><li>Hysterical Slap</li><li>Dekaja</li><li>Dodge Ice</li><li>Resist Dizzy</li><li>Sharp Student</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv10</li><li>Lv11</li><li>Lv12</li>');
    break;

  case 'pixie':
    $('#name').html('Pixie');
    $('#arcana').html('Magician');
    $('#level').html('Base Lv 2');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('2');
    $('#ma').html('3');
    $('#en').html('2');
    $('#ag').html('4');
    $('#lu').html('2');

    $('#skill').append('<li>Dia</li><li>Patra</li><li>Zio</li><li>Me Patra</li><li>Trafuri</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv3</li><li>Lv4</li><li>Lv8</li>');
    break;
  /* #endregion */

  /* #region  Priestess */
  case 'scathach':
    $('#name').html('Scathach');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 79');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('Dr');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('54');
    $('#ma').html('59');
    $('#en').html('37');
    $('#ag').html('49');
    $('#lu').html('45');

    $('#skill').append('<li>Mabufudyne</li><li>Garudyne</li><li>Amrita</li><li>Magarudyne</li><li>Ice Amp</li><li>Wind Amp</li><li>Mind Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv81</li><li>Lv82</li><li>Lv83</li><li>Lv84</li><li>Lv85</li>');
    break;

  case 'tzitzimitl':
    $('#name').html('Tzitzimitl');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 70');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('46');
    $('#ma').html('56');
    $('#en').html('41');
    $('#ag').html('39');
    $('#lu').html('35');

    $('#skill').append('<li>Ziodyne</li><li>Virus Wave</li><li>Mustard Bomb</li><li>Silence Boost</li><li>Dekaja</li><li>Regenerate 3</li><li>Maziodyne</li><li>Repel Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv71</li><li>Lv72</li><li>Lv73</li><li>Lv76</li><li>Lv77</li>');
    break;

  case 'hariti':
    $('#name').html('Hariti');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 59');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('31');
    $('#ma').html('47');
    $('#en').html('33');
    $('#ag').html('34');
    $('#lu').html('39');

    $('#skill').append('<li>Diarahan</li><li>Bufudyne</li><li>Marakukaja</li><li>Mediarahan</li><li>Arrow Rain</li><li>Samarecarm</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv61</li><li>Lv62</li><li>Lv64</li>');
    break;

  case 'kikuri-hime':
    $('#name').html('Kikuri-Hime');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 48');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('26');
    $('#ma').html('36');
    $('#en').html('28');
    $('#ag').html('31');
    $('#lu').html('30');

    $('#skill').append('<li>Mediarama</li><li>Posumudi</li><li>Agilao</li><li>Samarecarm</li><li>Diarahan</li><li>Resist Dark</li><li>Divine Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv50</li><li>Lv52</li><li>Lv53</li><li>Lv54</li>');
    break;

  case 'parvati':
    $('#name').html('Parvati');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 37');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('20');
    $('#ma').html('29');
    $('#en').html('17');
    $('#ag').html('25');
    $('#lu').html('27');

    $('#skill').append('<li>Diarama</li><li>Nervundi</li><li>Mediarama</li><li>Marakukaja</li><li>Dodge Elec</li><li>Divine Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv39</li><li>Lv40</li><li>Lv41</li><li>Lv43</li>');
    break;

  case 'ganga':
    $('#name').html('Ganga');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 29');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('16');
    $('#ma').html('22');
    $('#en').html('16');
    $('#ag').html('19');
    $('#lu').html('21');

    $('#skill').append('<li>Bufula</li><li>Diarama</li><li>Dekaja</li><li>Mind Slice</li><li>Confuse Boost</li><li>Mediarama</li><li>Evade Fire</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv31</li><li>Lv32</li><li>Lv33</li><li>Lv35</li>');
    break;

  case 'high-pixie':
    $('#name').html('High Pixie');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 22');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('10');
    $('#ma').html('21');
    $('#en').html('10');
    $('#ag').html('19');
    $('#lu').html('13');

    $('#skill').append('<li>Mazio</li><li>Sukukaja</li><li>Me Patra</li><li>Zionga</li><li>Invigorate 1</li><li>Dodge Fire</li><li>Trafuri</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv24</li><li>Lv25</li><li>Lv26</li><li>Lv27</li>');
    break;

  case 'sarasvati':
    $('#name').html('Sarasvati');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 17');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('9');
    $('#ma').html('16');
    $('#en').html('10');
    $('#ag').html('13');
    $('#lu').html('10');

    $('#skill').append('<li>Media</li><li>Mabufu</li><li>Patra</li><li>Invigorate 2</li><li>Resist Rage</li><li>Dekaja</li><li>Null Wind</li>');

    $('#unlock').append('<li>innate</li><li>Innate</li><li>Innate</li><li>Lv19</li><li>Lv20</li><li>Lv21</li><li>Lv23</li>');
    break;

  case 'saki-mitama':
    $('#name').html('Saki Mitama');
    $('#arcana').html('Priestess');
    $('#level').html('Base Lv 11');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('5');
    $('#ma').html('12');
    $('#en').html('5');
    $('#ag').html('8');
    $('#lu').html('10');

    $('#skill').append('<li>Dia</li><li>Bufu</li><li>Sukunda</li><li>Alertness</li><li>Media</li><li>Null Rage</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv13</li><li>Lv14</li><li>Lv16</li>');
    break;
  /* #endregion */

  /* #region  Empress */
  case 'isis':
    $('#name').html('Isis');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 79');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Rpl');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('52');
    $('#ma').html('48');
    $('#en').html('42');
    $('#ag').html('48');
    $('#lu').html('54');

    $('#skill').append('<li>Mediarahan</li><li>Bufudyne</li><li>Tetrakarn</li><li>Cool Breeze</li><li>Absorb Ice</li><li>Mabufudyne</li><li>Salvation</li><li>Null Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv80</li><li>Lv82</li><li>Lv83</li><li>Lv85</li><li>Lv86</li>');
    break;

  case 'alilat':
    $('#name').html('Alilat');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 70');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('39');
    $('#ma').html('48');
    $('#en').html('49');
    $('#ag').html('39');
    $('#lu').html('42');

    $('#skill').append('<li>Makarakarn</li><li>Mabufudyne</li><li>Regenerate 3</li><li>Evade Physical</li><li>Growth 2</li><li>Auto-Maraku</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv72</li><li>Lv73</li><li>Lv74</li><li>Lv75</li>');
    break;

  case 'mother-harlot':
    $('#name').html('Mother Harlot');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 60');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Rpl');
    $('#wind').html('Wk');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('38');
    $('#ma').html('47');
    $('#en').html('37');
    $('#ag').html('29');
    $('#lu').html('36');

    $('#skill').append('<li>Maziodyne</li><li>Mamudoon</li><li>Mudo Boost</li><li>Foolish Whisper</li><li>Resist Fire</li><li>Ailment Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv62</li><li>Lv63</li><li>Lv64</li><li>Lv65</li>');
    break;

  case 'skadi':
    $('#name').html('Skadi');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 52');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('27');
    $('#ma').html('37');
    $('#en').html('32');
    $('#ag').html('36');
    $('#lu').html('31');

    $('#skill').append('<li>Mabufula</li><li>Aeon Rain</li><li>Bufudyne</li><li>Ice Amp</li><li>Repel Ice</li><li>Repel Fire</li><li>Spell Master</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv54</li><li>Lv56</li><li>Lv57</li><li>Lv59</li><li>Lv60</li>');
    break;

  case 'gabriel':
    $('#name').html('Gabriel');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 44');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Dr');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('28');
    $('#ma').html('34');
    $('#en').html('22');
    $('#ag').html('30');
    $('#lu').html('25');

    $('#skill').append('<li>Mabufula</li><li>Mediarama</li><li>Energy Shower</li><li>Survive Dark</li><li>Heat Wave</li><li>Divine Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv45</li><li>Lv47</li><li>Lv48</li><li>Lv50</li>');
    break;

  case 'gorgon':
    $('#name').html('Gorgon');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 34');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('-');

    $('#st').html('20');
    $('#ma').html('21');
    $('#en').html('25');
    $('#ag').html('24');
    $('#lu').html('19');

    $('#skill').append('<li>Bufula</li><li>Me Patra</li><li>Crazy Chain</li><li>Null Confuse</li><li>Mabufula</li><li>Ice Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv35</li><li>Lv36</li><li>Lv38</li><li>Lv39</li>');
    break;

  case 'titania':
    $('#name').html('Titania');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 26');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('12');
    $('#ma').html('23');
    $('#en').html('15');
    $('#ag').html('19');
    $('#lu').html('16');

    $('#skill').append('<li>Diarama</li><li>Magaru</li><li>Red Wall</li><li>Garula</li><li>Regenerate 2</li><li>Mind Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv27</li><li>Lv29</li><li>Lv31</li><li>Lv32</li>');
    break;

  case 'yaksini':
    $('#name').html('Yaksini');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 18');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('13');
    $('#ma').html('16');
    $('#en').html('10');
    $('#ag').html('12');
    $('#lu').html('10');

    $('#skill').append('<li>Mabufu</li><li>Arm Chopper</li><li>Rakunda</li><li>Swift Strike</li><li>Ice Boost</li><li>Bufula</li><li>Auto-Tarukaja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv20</li><li>Lv21</li><li>Lv22</li><li>Lv23</li>');
    break;

  case 'senri':
    $('#name').html('Senri');
    $('#arcana').html('Empress');
    $('#level').html('Base Lv 9');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('7');
    $('#ma').html('7');
    $('#en').html('4');
    $('#ag').html('14');
    $('#lu').html('7');

    $('#skill').append('<li>Dia</li><li>Makajam</li><li>Agi</li><li>Dekunda</li><li>Media</li><li>Trafuri</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv10</li><li>Lv11</li><li>Lv14</li>');
    break;
  /* #endregion */

  /* #region  Emperor */
  case 'odin':
    $('#name').html('Odin');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 74');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Dr');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('48');
    $('#ma').html('60');
    $('#en').html('42');
    $('#ag').html('39');
    $('#lu').html('43');

    $('#skill').append('<li>Ziodyne</li><li>Magarudyne</li><li>Wind Amp</li><li>Regenerate 3</li><li>Maziodyne</li><li>Mind Charge</li><li>Panta Rhei</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv76</li><li>Lv77</li><li>Lv78</li><li>Lv80</li><li>Lv81</li>');
    break;

  case 'barong':
    $('#name').html('Barong');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 65');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('48');
    $('#ma').html('44');
    $('#en').html('40');
    $('#ag').html('36');
    $('#lu').html('34');

    $('#skill').append('<li>Ziodyne</li><li>Poison Mist</li><li>Me Patra</li><li>Marakukaja</li><li>Invigorate 2</li><li>High Counter</li><li>Maziodyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv67</li><li>Lv69</li><li>Lv71</li><li>Lv72</li>');
    break;

  case 'pabilsag':
    $('#name').html('Pabilsag');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 51');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('38');
    $('#ma').html('29');
    $('#en').html('30');
    $('#ag').html('33');
    $('#lu').html('30');

    $('#skill').append('<li>Blight</li><li>Foolish Whisper</li><li>Stagnant Air</li><li>Silence Boost</li><li>Mudoon</li><li>Arrow Rain</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv53</li><li>Lv54</li><li>Lv55</li><li>Lv56</li>');
    break;

  case 'thoth':
    $('#name').html('Thoth');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 45');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('Rpl');
    $('#dark').html('Wk');

    $('#st').html('28');
    $('#ma').html('43');
    $('#en').html('23');
    $('#ag').html('21');
    $('#lu').html('27');

    $('#skill').append('<li>Mazionga</li><li>Mahama</li><li>Megido</li><li>Mediarama</li><li>Growth 2</li><li>Null Mute</li><li>Ziodyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv47</li><li>Lv48</li><li>Lv49</li><li>Lv51</li>');
    break;

  case 'oukuninushi':
    $('#name').html('Oukuninushi');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 41');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('29');
    $('#ma').html('34');
    $('#en').html('25');
    $('#ag').html('20');
    $('#lu').html('22');

    $('#skill').append('<li>Zionga</li><li>Blade of Fury</li><li>Counterstrike</li><li>Mazionga</li><li>Apt Pupil</li><li>Elec Boost</li><li>Null Wind</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv43</li><li>Lv44</li><li>Lv45</li><li>Lv46</li><li>Lv47</li>');
    break;

  case 'setanta':
    $('#name').html('Setanta');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 34');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('23');
    $('#ma').html('21');
    $('#en').html('25');
    $('#ag').html('24');
    $('#lu').html('16');

    $('#skill').append('<li>Fatal End</li><li>Zionga</li><li>Sharp Student</li><li>Counterstrike</li><li>Power Charge</li><li>Auto-Maraku</li><li>Null Fire</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv36</li><li>Lv38</li><li>Lv39</li><li>Lv40</li>');
    break;

  case 'king-frost':
    $('#name').html('King Frost');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv  22');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('11');
    $('#ma').html('20');
    $('#en').html('17');
    $('#ag').html('13');
    $('#lu').html('12');

    $('#skill').append('<li>Bufula</li><li>Mabufu</li><li>Ice Break</li><li>Rakukaja</li><li>Dodge Fire</li><li>Ice Boost</li><li>Null Fire</li><li>Anima Freeze</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv23</li><li>Lv24</li><li>Lv26</li><li>Lv27</li><li>Lv28</li>');
    break;

  case 'oberon':
    $('#name').html('Oberon');
    $('#arcana').html('Emperor');
    $('#level').html('Base Lv 12');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('10');
    $('#ma').html('12');
    $('#en').html('8');
    $('#ag').html('8');
    $('#lu').html('5');

    $('#skill').append('<li>Zio</li><li>Arm Chopper</li><li>Makajam</li><li>Media</li><li>Elec Boost</li><li>Mazio</li><li>Dodge Wind</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv13</li><li>Lv14</li><li>Lv15</li><li>Lv16</li><li>Lv17</li>');
    break;
  /* #endregion */

  /* #region  Hierophant */
  case 'kohryu':
    $('#name').html('Kohryu');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 76');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('50');
    $('#ma').html('53');
    $('#en').html('54');
    $('#ag').html('40');
    $('#lu').html('38');

    $('#skill').append('<li>Ziodyne</li><li>Mediarahan</li><li>Samarecarm</li><li>Maziodyne</li><li>Mind Charge</li><li>Elec Amp</li><li>Spell Master</li><li>Salvation</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv78</li><li>Lv79</li><li>Lv80</li><li>Lv82</li><li>Lv83</li>');
    break;

  case 'hachiman':
    $('#name').html('Hachiman');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 70');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('33');
    $('#ma').html('60');
    $('#en').html('39');
    $('#ag').html('38');
    $('#lu').html('47');

    $('#skill').append('<li>Maziodyne</li><li>Makarakarn</li><li>Matarukaja</li><li>Elec Break</li><li>Dekunda</li><li>Revolution</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv72</li><li>Lv74</li><li>Lv75</li>');
    break;

  case 'daisoujou':
    $('#name').html('Daisoujou');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 60');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('34');
    $('#ma').html('45');
    $('#en').html('40');
    $('#ag').html('30');
    $('#lu').html('41');

    $('#skill').append('<li>Hamaon</li><li>Diarahan</li><li>Makarakarn</li><li>Agidyne</li><li>Endure Dark</li><li>Mahamaon</li><li>Hama Boost</li><li>Samsara</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv62</li><li>Lv63</li><li>Lv64</li><li>Lv65</li><li>Lv67</li>');
    break;

  case 'cerberus':
    $('#name').html('Ceberus');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 52');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('37');
    $('#ma').html('30');
    $('#en').html('32');
    $('#ag').html('35');
    $('#lu').html('29');

    $('#skill').append('<li>Agidyne</li><li>Gigantic Fist</li><li>Vicious Strike</li><li>Maragidyne</li><li>Regenerate 2</li><li>Fire Amp</li><li>Auto-Sukukaja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv53</li><li>Lv54</li><li>Lv55</li><li>Lv57</li><li>Lv58</li>');
    break;

  case 'hokuto-seikun':
    $('#name').html('Hokuto Seikun');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 45');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('29');
    $('#ma').html('34');
    $('#en').html('31');
    $('#ag').html('26');
    $('#lu').html('22');

    $('#skill').append('<li>Zionga</li><li>Elec Boost</li><li>Navas Nebula</li><li>Blade of Fury</li><li>Resist Exhaust</li><li>Counterstrike</li><li>Ziodyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv47</li><li>Lv48</li><li>Lv50</li><li>Lv51</li>');
    break;

  case 'flauros':
    $('#name').html('Flauros');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 36');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('30');
    $('#ma').html('20');
    $('#en').html('24');
    $('#ag').html('20');
    $('#lu').html('21');

    $('#skill').append('<li>Fatal End</li><li>Tarukaja</li><li>Agilao</li><li>Herculean Strike</li><li>Apt Pupil</li><li>Dodge Ice</li><li>Crazy Chain</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv38</li><li>Lv39</li><li>Lv40</li><li>Lv41</li>');
    break;

  case 'unicorn':
    $('#name').html('Unicorn');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 29');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('17');
    $('#ma').html('22');
    $('#en').html('19');
    $('#ag').html('22');
    $('#lu').html('14');

    $('#skill').append('<li>Zionga</li><li>Mahama</li><li>Nervundi</li><li>Dekunda</li><li>Trafuri</li><li>Recarm</li><li>Mazionga</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv31</li><li>Lv32</li><li>Lv33</li><li>Lv34</li>');
    break;

  case 'shiisaa':
    $('#name').html('Shiisaa');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 21');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Str');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('18');
    $('#ma').html('18');
    $('#en').html('9');
    $('#ag').html('14');
    $('#lu').html('11');

    $('#skill').append('<li>Mazio</li><li>Balzac</li><li>Rakukaja</li><li>Zionga</li><li>Silence Boost</li><li>Resist Fire</li><li>Null Rage</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv22</li><li>Lv23</li><li>Lv24</li><li>Lv25</li><li>Lv26</li>');
    break;

  case 'anzu':
    $('#name').html('Anzu');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 15');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('9');
    $('#ma').html('11');
    $('#en').html('10');
    $('#ag').html('13');
    $('#lu').html('9');

    $('#skill').append('<li>Garu</li><li>Balzac</li><li>Alertness</li><li>Magaru</li><li>Red Wall</li><li>Mahama</li><li>Auto-Sukukaja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv17</li><li>Lv18</li><li>Lv19</li><li>Lv20</li>');
    break;

  case 'omoikane':
    $('#name').html('Omoikane');
    $('#arcana').html('Hierophant');
    $('#level').html('Base Lv 7');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('5');
    $('#ma').html('8');
    $('#en').html('5');
    $('#ag').html('4');
    $('#lu').html('6');

    $('#skill').append('<li>Zio</li><li>Sukunda</li><li>Tarunda</li><li>Poison Mist</li><li>Resist Wind</li><li>Dodge Ice</li><li>Resist Poison</li><li>Resist Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv8</li><li>Lv9</li><li>Lv10</li><li>Lv11</li><li>Lv12</li>');
    break;
  /* #endregion */

  /* #region  Lovers */
  case 'ishtar':
    $('#name').html('Ishtar');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 71');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('46');
    $('#ma').html('44');
    $('#en').html('33');
    $('#ag').html('48');
    $('#lu').html('49');

    $('#skill').append('<li>Mediarahan</li><li>Samarecarm</li><li>Mutudi</li><li>Maziodyne</li><li>Amrita</li><li>Spell Master</li><li>Absorb Wind</li><li>Salvation</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv73</li><li>Lv75</li><li>Lv76</li><li>Lv77</li><li>Lv78</li>');
    break;

  case 'cybele':
    $('#name').html('Cybele');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 64');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('41');
    $('#ma').html('47');
    $('#en').html('37');
    $('#ag').html('39');
    $('#lu').html('35');

    $('#skill').append('<li>Mediarama</li><li>Vicious Strike</li><li>Recarm</li><li>Myriad Arrows</li><li>Samarecarm</li><li>Mediarahan</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv67</li><li>Lv68</li><li>Lv70</li>');
    break;

  case 'raphael':
    $('#name').html('Raphael');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 53');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Rpl');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('32');
    $('#ma').html('38');
    $('#en').html('24');
    $('#ag').html('33');
    $('#lu').html('39');

    $('#skill').append('<li>Diarahan</li><li>Megidola</li><li>Masukukaja</li><li>Amrita</li><li>Null Dizzy</li><li>Mediarahan</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv55</li><li>Lv56</li><li>Lv57</li><li>Lv59</li>');
    break;

  case 'leanan-sidhe':
    $('#name').html('Leanan Sidhe');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 42');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('19');
    $('#ma').html('33');
    $('#en').html('26');
    $('#ag').html('29');
    $('#lu').html('36');

    $('#skill').append('<li>Mediarama</li><li>Me Patra</li><li>Tentarafoo</li><li>Confuse Boost</li><li>Energy Shower</li><li>Samarecarm</li><li>Divine Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv43</li><li>Lv44</li><li>Lv45</li><li>Lv46</li><li>Lv47</li>');
    break;

  case 'undine':
    $('#name').html('Undine');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 33');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('21');
    $('#ma').html('27');
    $('#en').html('13');
    $('#ag').html('26');
    $('#lu').html('19');

    $('#skill').append('<li>Diarama</li><li>Bufula</li><li>Posumudi</li><li>Mabufula</li><li>Mediarama</li><li>Ice Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv34</li><li>Lv36</li><li>Lv37</li>');
    break;

  case 'queen-mab':
    $('#name').html('Queen Mab');
    $('#arcana').html('Lovers');
    $('#level').html('Base Lv 25');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('17');
    $('#ma').html('19');
    $('#en').html('15');
    $('#ag').html('17');
    $('#lu').html('14');

    $('#skill').append('<li>Zionga</li><li>Tentarafoo</li><li>Dekunda</li><li>Recarm</li><li>Dodge Wind</li><li>Mazionga</li><li>Resist Confuse</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv26</li><li>Lv27</li><li>Lv29</li><li>Lv30</li>');
    break;
  /* #endregion */

  /* #region  Chariot */
  case 'futsunushi':
    $('#name').html('Futsunushi');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 80');

    $('#phys').html('Nul');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('59');
    $('#ma').html('38');
    $('#en').html('61');
    $('#ag').html('44');
    $('#lu').html('45');

    $('#skill').append('<li>Primal Force</li><li>Power Charge</li><li>Matarukaja</li><li>Apt Pupil</li><li>Null Dizzy</li><li>Ali Dance</li><li>Arms Master</li><li>Firm Stance</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv82</li><li>Lv83</li><li>Lv84</li><li>Lv85</li><li>Lv86</li>');
    break;

  case 'atavaka':
    $('#name').html('Atavaka');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 72');

    $('#phys').html('Nul');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('50');
    $('#ma').html('41');
    $('#en').html('43');
    $('#ag').html('41');
    $('#lu').html('48');

    $('#skill').append('<li>Mahamaon</li><li>Diarahan</li><li>Amrita</li><li>Brave Blade</li><li>Megidolaon</li><li>Mind Charge</li><li>Arms Master</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv74</li><li>Lv75</li><li>Lv76</li><li>Lv79</li>');
    break;

  case 'thor':
    $('#name').html('Thor');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv ');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Dr');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('43');
    $('#ma').html('39');
    $('#en').html('53');
    $('#ag').html('32');
    $('#lu').html('35');

    $('#skill').append('<li>Ziodyne</li><li>Deathbound</li><li>High Counter</li><li>Arms Master</li><li>Maziodyne</li><li>Null Physical</li><li>Thunder Reign</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv67</li><li>Lv68</li><li>Lv69</li><li>Lv70</li>');
    break;

  case 'kin-ki':
    $('#name').html('Kin-ki');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 54');

    $('#phys').html('Nul');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('41');
    $('#ma').html('25');
    $('#en').html('53');
    $('#ag').html('23');
    $('#lu').html('27');

    $('#skill').append('<li>Vile Assault</li><li>High Counter</li><li>Gigantic Fist</li><li>Seal Bomb</li><li>Revolution</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv56</li><li>Lv57</li><li>Lv59</li><li>Lv60</li>');
    break;

  case 'triglav':
    $('#name').html('Triglav');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 43');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('33');
    $('#ma').html('23');
    $('#en').html('27');
    $('#ag').html('32');
    $('#lu').html('21');

    $('#skill').append('<li>Heat Wave</li><li>Counterstrike</li><li>Marakukaja</li><li>Mustard Bomb</li><li>Null Dizzy</li><li>Blue Wall</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv45</li><li>Lv46</li><li>Lv47</li><li>Lv48</li><li>Lv49</li>');
    break;

  case 'ares':
    $('#name').html('Ares');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 25');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('18');
    $('#ma').html('15');
    $('#en').html('20');
    $('#ag').html('15');
    $('#lu').html('14');

    $('#skill').append('<li>Gale Slash</li><li>Counter</li><li>Dodge Wind</li><li>Rampage</li><li>Dekaja</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv27</li><li>Lv28</li><li>Lv29</li><li>Lv30</li>');
    break;

  case 'ara-mitama':
    $('#name').html('Ara Mitama');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 18');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('11');
    $('#ma').html('11');
    $('#en').html('11');
    $('#ag').html('11');
    $('#lu').html('11');

    $('#skill').append('<li>Assault Dive</li><li>Rakunda</li><li>Tarukaja</li><li>Sharp Student</li><li>Blue Wall</li><li>Dodge Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv20</li><li>Lv21</li><li>Lv22</li><li>Lv23</li>');
    break;

  case 'eligor':
    $('#name').html('Eligor');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 12');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Str');

    $('#st').html('11');
    $('#ma').html('6');
    $('#en').html('13');
    $('#ag').html('8');
    $('#lu').html('5');

    $('#skill').append('<li>poison Skewer</li><li>Agi</li><li>Maragi</li><li>Arm Chopper</li><li>Fire Boost</li><li>Soul Break</li><li>Resist Exhaust</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv13</li><li>Lv14</li><li>Lv15</li><li>Lv16</li><li>Lv17</li>');
    break;

  case 'nata-taishi':
    $('#name').html('Nata Taishi');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 6');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('6');
    $('#ma').html('2');
    $('#en').html('6');
    $('#ag').html('7');
    $('#lu').html('4');

    $('#skill').append('<li>Bash</li><li>Rakunda</li><li>Dekunda</li><li>Sonic Punch</li><li>Dodge Ice</li><li>Resist Dizzy</li><li>Soul Break</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv7</li><li>Lv8</li><li>Lv9</li><li>Lv10</li>');
    break;

  case 'slime':
    $('#name').html('Slime');
    $('#arcana').html('Chariot');
    $('#level').html('Base Lv 2');

    $('#phys').html('Str');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('3');
    $('#ma').html('2');
    $('#en').html('3');
    $('#ag').html('2');
    $('#lu').html('3');

    $('#skill').append('<li>Bash</li><li>Evil Touch</li><li>Tarunda</li><li>Red Wall</li><li>Fear Boost</li><li>Resist Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv3</li><li>Lv4</li><li>Lv5</li><li>Lv7</li>');
    break;
  /* #endregion */

  /* #region  Justice */
  case 'sraosha':
    $('#name').html('Sraosha');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 74');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Dr');
    $('#wind').html('-');
    $('#light').html('Rpl');
    $('#dark').html('Wk');

    $('#st').html('57');
    $('#ma').html('36');
    $('#en').html('44');
    $('#ag').html('62');
    $('#lu').html('33');

    $('#skill').append('<li>Mahamaon</li><li>Brave Blade</li><li>Power Charge</li><li>Ziodyne</li><li>Hama Boost</li><li>Megidolaon</li><li>Angelic Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv76</li><li>Lv78</li><li>Lv80</li><li>Lv81</li>');
    break;

  case 'melchizedek':
    $('#name').html('Melchizedek');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 66');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('51');
    $('#ma').html('46');
    $('#en').html('46');
    $('#ag').html('34');
    $('#lu').html('28');

    $('#skill').append('<li>Mediarahan</li><li>Hamaon</li><li>Akasha Arts</li><li>Matarukaja</li><li>Mahamaon</li><li>God\'s Hand</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv68</li><li>Lv69</li><li>Lv72</li>');
    break;

  case 'uriel':
    $('#name').html('Uriel');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 58');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('35');
    $('#ma').html('42');
    $('#en').html('37');
    $('#ag').html('36');
    $('#lu').html('31');

    $('#skill').append('<li>Maragion</li><li>Hamaon</li><li>High Counter</li><li>Agidyne</li><li>Endure Dark</li><li>Fire Amp</li><li>Null Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv60</li><li>Lv61</li><li>Lv62</li><li>Lv63</li><li>Lv64</li>');
    break;

  case 'throne':
    $('#name').html('Throne');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 49');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('37');
    $('#ma').html('30');
    $('#en').html('24');
    $('#ag').html('37');
    $('#lu').html('26');

    $('#skill').append('<li>Hamaon</li><li>Agidyne</li><li>Hama Boost</li><li>Mind Charge</li><li>Regenerate 2</li><li>Resist Dark</li><li>Endure Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv51</li><li>Lv53</li><li>Lv54</li><li>Lv55</li>');
    break;

  case 'dominion':
    $('#name').html('Dominion');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 38');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('Rpl');
    $('#dark').html('Wk');

    $('#st').html('22');
    $('#ma').html('32');
    $('#en').html('25');
    $('#ag').html('24');
    $('#lu').html('18');

    $('#skill').append('<li>Hamaon</li><li>Zionga</li><li>Hama Boost</li><li>Resist Exhaust</li><li>Mazionga</li><li>Survive Dark</li><li>Null Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv40</li><li>Lv41</li><li>Lv42</li><li>Lv43</li><li>Lv44</li>');
    break;

  case 'virtue':
    $('#name').html('Virtue');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 33');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('22');
    $('#ma').html('29');
    $('#en').html('21');
    $('#ag').html('19');
    $('#lu').html('15');

    $('#skill').append('<li>Mahama</li><li>Garula</li><li>Posumudi</li><li>Fatal End</li><li>Blue Wall</li><li>Hama Boost</li><li>Resist Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv35</li><li>Lv37</li><li>Lv38</li><li>Lv39</li>');
    break;

  case 'power':
    $('#name').html('Power');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 27');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('21');
    $('#ma').html('20');
    $('#en').html('11');
    $('#ag').html('17');
    $('#lu').html('19');

    $('#skill').append('<li>Hama</li><li>Tentarafoo</li><li>Mahama</li><li>Zionga</li><li>Power Slash</li><li>Hama Boost</li><li>Survive Dark</li><li>Null Confuse</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv29</li><li>Lv30</li><li>Lv31</li><li>Lv32</li><li>Lv33</li>');
    break;

  case 'principality':
    $('#name').html('Principality');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 19');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('11');
    $('#ma').html('15');
    $('#en').html('10');
    $('#ag').html('18');
    $('#lu').html('10');

    $('#skill').append('<li>Hama</li><li>Twin Shot</li><li>Mahama</li><li>Media</li><li>Resist Confuse</li><li>Survive Dark</li><li>Tetraja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv21</li><li>Lv22</li><li>Lv23</li><li>Lv24</li><li>Lv25</li>');
    break;

  case 'archangel':
    $('#name').html('Archangel');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 11');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('8');
    $('#ma').html('9');
    $('#en').html('7');
    $('#ag').html('7');
    $('#lu').html('9');

    $('#skill').append('<li>Hama</li><li>Double Fangs</li><li>Patra</li><li>Media</li><li>Muzzle Shot</li><li>Sharp Student</li><li>Survive Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv12</li><li>Lv13</li><li>Lv14</li><li>Lv15</li>');
    break;

  case 'angel':
    $('#name').html('Angel');
    $('#arcana').html('Justice');
    $('#level').html('Base Lv 4');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Str');
    $('#dark').html('Wk');

    $('#st').html('4');
    $('#ma').html('5');
    $('#en').html('2');
    $('#ag').html('8');
    $('#lu').html('5');

    $('#skill').append('<li>Garu</li><li>Patra</li><li>Hama</li><li>Sukukaja</li><li>Regenerate 1</li><li>Hama Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv5</li><li>Lv6</li><li>Lv8</li><li>Lv9</li>');
    break;
  /* #endregion */

  /* #region  Hermit */
  case 'ongyo-ki':
    $('#name').html('Ongyo-ki');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 82');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Dr');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('59');
    $('#ma').html('64');
    $('#en').html('59');
    $('#ag').html('47');
    $('#lu').html('24');

    $('#skill').append('<li>Foolish Whisper</li><li>Ziodyne</li><li>Masukukaja</li><li>Ailment Boost</li><li>Elec Amp</li><li>Revolution</li><li>Firm Stance</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv84</li><li>Lv85</li><li>Lv86</li><li>Lv87</li>');
    break;

  case 'arahabaki':
    $('#name').html('Arahabaki');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 73');

    $('#phys').html('Rpl');
    $('#fire').html('Wk');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Nul');

    $('#st').html('50');
    $('#ma').html('55');
    $('#en').html('62');
    $('#ag').html('37');
    $('#lu').html('25');

    $('#skill').append('<li>Vicious Strike</li><li>Auto-Maraku</li><li>Null Fear</li><li>Alertness</li><li>Tetrakarn</li><li>Repel Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv74</li><li>Lv76</li><li>Lv80</li>');
    break;

  case 'nebiros':
    $('#name').html('Nebiros');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 63');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('38');
    $('#ma').html('47');
    $('#en').html('39');
    $('#ag').html('40');
    $('#lu').html('32');

    $('#skill').append('<li>Mamudoon</li><li>Agidyne</li><li>Dekaja</li><li>Mind Charge</li><li>Mudo Boost</li><li>Null Light</li><li>Spell Master</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv65</li><li>Lv67</li><li>Lv69</li><li>Lv70</li>');
    break;

  case 'niddhoggr':
    $('#name').html('Niddhoggr');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 55');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('23');
    $('#ma').html('41');
    $('#en').html('35');
    $('#ag').html('31');
    $('#lu').html('42');

    $('#skill').append('<li>Mamudoon</li><li>Evil Smile</li><li>Ghastly Wail</li><li>Bufudyne</li><li>Stagnant Air</li><li>Resist Physical</li><li>Ice Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv57</li><li>Lv58</li><li>Lv59</li><li>Lv60</li><li>Lv61</li>');
    break;

  case 'kurama-tengu':
    $('#name').html('Kurama Tengu');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 48');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Dr');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('30');
    $('#ma').html('34');
    $('#en').html('28');
    $('#ag').html('38');
    $('#lu').html('21');

    $('#skill').append('<li>Garula</li><li>Marakunda</li><li>Vicious Strike</li><li>Growth 2</li><li>Wind Boost</li><li>Red Wall</li><li>Resist Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv50</li><li>Lv51</li><li>Lv52</li><li>Lv53</li>');
    break;

  case 'hitokotonusi':
    $('#name').html('Hitokotonusi');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 41');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('28');
    $('#ma').html('33');
    $('#en').html('30');
    $('#ag').html('20');
    $('#lu').html('19');

    $('#skill').append('<li>Foolish Whisper</li><li>Auto-Sukukaja</li><li>Poison Arrow</li><li>Zionga</li><li>Resist Fire</li><li>Elec Boost</li><li>Auto-Masuku</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv43</li><li>Lv45</li><li>Lv46</li><li>Lv47</li>');
    break;

  case 'mothman':
    $('#name').html('Mothman');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 33');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Wk');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('20');
    $('#ma').html('23');
    $('#en').html('17');
    $('#ag').html('28');
    $('#lu').html('18');

    $('#skill').append('<li>Zionga</li><li>Valiant Dance</li><li>Foul Breath</li><li>Elec Break</li><li>Mazionga</li><li>Rage Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv35</li><li>Lv36</li><li>Lv37</li><li>Lv38</li>');
    break;

  case 'lamia':
    $('#name').html('Lamia');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 26');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('16');
    $('#ma').html('23');
    $('#en').html('12');
    $('#ag').html('20');
    $('#lu').html('14');

    $('#skill').append('<li>Poison Mist</li><li>Agilao</li><li>Nervundi</li><li>Poison Boost</li><li>Null Poison</li><li>Soul Break</li><li>Maragion</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv28</li><li>Lv29</li><li>Lv30</li><li>Lv32</li>');
    break;

  case 'ippon-datara':
    $('#name').html('Ippon-Datatra');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 17');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('15');
    $('#ma').html('6');
    $('#en').html('14');
    $('#ag').html('13');
    $('#lu').html('10');

    $('#skill').append('<li>Mudo</li><li>Maragi</li><li>Mamudo</li><li>Agilao</li><li>Rampage</li><li>Mudo Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv19</li><li>Lv20</li><li>Lv21</li><li>Lv22</li>');
    break;

  case 'forneus':
    $('#name').html('Forneus');
    $('#arcana').html('Hermit');
    $('#level').html('Base Lv 6');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('4');
    $('#ma').html('5');
    $('#en').html('7');
    $('#ag').html('9');
    $('#lu').html('5');

    $('#skill').append('<li>Bufu</li><li>Skewer</li><li>Tarukaja</li><li>Rakunda</li><li>Poisma</li><li>Dodge Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv7</li><li>Lv8</li><li>Lv10</li>');
    break;
  /* #endregion */

  /* #region  Fortune */
  case 'norn':
    $('#name').html('Norn');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 72');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Wk');
    $('#wind').html('Dr');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('42');
    $('#ma').html('53');
    $('#en').html('31');
    $('#ag').html('48');
    $('#lu').html('46');

    $('#skill').append('<li>Garudyne</li><li>Magarudyne</li><li>Diarahan</li><li>Auto-Masuku</li><li>Invigorate 3</li><li>Wind Amp</li><li>Insta-Heal</li><li>Debilitate</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv74</li><li>Lv75</li><li>Lv76</li><li>Lv77</li><li>Lv79</li>');
    break;

  case 'atropos':
    $('#name').html('Atropos');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 65');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('36');
    $('#ma').html('48');
    $('#en').html('36');
    $('#ag').html('37');
    $('#lu').html('45');

    $('#skill').append('<li>Garudyne</li><li>Wind Boost</li><li>Mind Charge</li><li>Magarudyne</li><li>Evade Fire</li><li>Wind Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv67</li><li>Lv68</li><li>Lv69</li><li>Lv70</li>');
    break;

  case 'ananta':
    $('#name').html('Ananta');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 58');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('Dr');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('43');
    $('#ma').html('42');
    $('#en').html('45');
    $('#ag').html('28');
    $('#lu').html('23');

    $('#skill').append('<li>Mabufula</li><li>White Wall</li><li>Marakukaja</li><li>Bufudyne</li><li>Green Wall</li><li>Invigorate 3</li><li>Null Exhaust</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv59</li><li>Lv61</li><li>Lv62</li><li>Lv63</li><li>Lv64</li>');
    break;

  case 'lachesis':
    $('#name').html('Lachesis');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 51');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('31');
    $('#ma').html('39');
    $('#en').html('25');
    $('#ag').html('34');
    $('#lu').html('31');

    $('#skill').append('<li>Garudyne</li><li>Masukukaja</li><li>Recarm</li><li>Makara Break</li><li>Absorb Wind</li><li>Red Wall</li><li>Resist Exhaust</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>L53</li><li>Lv54</li><li>Lv55</li><li>Lv56</li><li>Lv57</li>');
    break;

  case 'clotho':
    $('#name').html('Clotho');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 44');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Rpl');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('22');
    $('#ma').html('31');
    $('#en').html('28');
    $('#ag').html('26');
    $('#lu').html('32');

    $('#skill').append('<li>Magarula</li><li>Mutudi</li><li>Navas Nebula</li><li>Makarakarn</li><li>Wind Boost</li><li>Garudyne</li><li>Null Enervate</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv45</li><li>Lv47</li><li>Lv48</li><li>Lv49</li><li>Lv50</li>');
    break;

  case 'fortuna':
    $('#name').html('Fortuna');
    $('#arcana').html('Fortune');
    $('#level').html('Base Lv 35');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('19');
    $('#ma').html('23');
    $('#en').html('22');
    $('#ag').html('26');
    $('#lu').html('22');

    $('#skill').append('<li>Garula</li><li>Rakukaja</li><li>Dodge Elec</li><li>Magarula</li><li>Auto-Sukukaja</li><li>Wind Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv37</li><li>Lv38</li><li>Lv39</li><li>Lv40</li>');
    break;
  /* #endregion */

  /* #region  Strength */
  case 'zaou-gongen':
    $('#name').html('Zaou-Gongen');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 90');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('61');
    $('#ma').html('48');
    $('#en').html('71');
    $('#ag').html('47');
    $('#lu').html('50');

    $('#skill').append('<li>Maragidyne</li><li>Power Charge</li><li>God\'s Hand</li><li>Anima Freeze</li><li>Evade Physical</li><li>Enduring Soul</li><li>Fire Amp</li><li>Vorpal Blade</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv92</li><li>Lv93</li><li>Lv94</li><li>Lv95</li><li>Lv96</li>');
    break;

  case 'siegfried':
    $('#name').html('Siegfried');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 63');

    $('#phys').html('Nul');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('48');
    $('#ma').html('36');
    $('#en').html('41');
    $('#ag').html('38');
    $('#lu').html('33');

    $('#skill').append('<li>Akasha Art</li><li>Power Charge</li><li>Masukukaja</li><li>High Counter</li><li>Regenerate 3</li><li>Rainy Death</li><li>God\'s Hand</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv65</li><li>Lv66</li><li>Lv68</li><li>Lv70</li>');
    break;

  case 'kali':
    $('#name').html('Kali');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 50');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('37');
    $('#ma').html('25');
    $('#en').html('36');
    $('#ag').html('35');
    $('#lu').html('27');

    $('#skill').append('<li>Bufudyne</li><li>Mudoon</li><li>Deathbound</li><li>Revolution</li><li>High Counter</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv52</li><li>Lv53</li><li>Lv54</li><li>Lv55</li>');
    break;

  case 'hanuman':
    $('#name').html('Hanuman');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 42');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('31');
    $('#ma').html('25');
    $('#en').html('31');
    $('#ag').html('21');
    $('#lu').html('25');

    $('#skill').append('<li>Mighty Swing</li><li>Rakunda</li><li>Recarm</li><li>Blade of Fury</li><li>Dodge Wind</li><li>Endure</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv44</li><li>Lv46</li><li>Lv47</li><li>Lv48</li>');
    break;

  case 'oni':
    $('#name').html('Oni');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 30');

    $('#phys').html('Str');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('25');
    $('#ma').html('12');
    $('#en').html('26');
    $('#ag').html('18');
    $('#lu').html('16');

    $('#skill').append('<li>Fatal End</li><li>Counter</li><li>Cruel Attack</li><li>Atom Smasher</li><li>Resist Physical</li><li>Endure</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv32</li><li>Lv33</li><li>Lv34</li><li>Lv35</li>');
    break;

  case 'kusi-mitama':
    $('#name').html('Kusi Mitama');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 28');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('18');
    $('#ma').html('21');
    $('#en').html('12');
    $('#ag').html('19');
    $('#lu').html('21');

    $('#skill').append('<li>Garula</li><li>Zionga</li><li>Soul Break</li><li>Survive Light</li><li>Survive Dark</li><li>Traesto</li><li>Exhaust Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv31</li><li>Lv32</li><li>Lv33</li><li>Lv34</li>');
    break;

  case 'rakshasa':
    $('#name').html('Rakshasa');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 23');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('19');
    $('#ma').html('12');
    $('#en').html('18');
    $('#ag').html('14');
    $('#lu').html('13');

    $('#skill').append('<li>Kill Rush</li><li>Brain Shake</li><li>Counter</li><li>Gale Slash</li><li>Auto-Tarukaja</li><li>Dodge Physical</li><li>Power Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv25</li><li>Lv26</li><li>Lv27</li><li>Lv28</li>');
    break;

  case 'titan':
    $('#name').html('Titan');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 14');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('11');
    $('#ma').html('12');
    $('#en').html('10');
    $('#ag').html('10');
    $('#lu').html('6');

    $('#skill').append('<li>Mazio</li><li>Skull Cracker</li><li>Dekunda</li><li>Dodge Ice</li><li>Kill Rush</li><li>Resist Fear</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv16</li><li>Lv18</li><li>Lv19</li>');
    break;

  case 'valkyrie':
    $('#name').html('Valkyrie');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 8');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('7');
    $('#ma').html('6');
    $('#en').html('6');
    $('#ag').html('7');
    $('#lu').html('5');

    $('#skill').append('<li>Bufu</li><li>Cleave</li><li>Rakunda</li><li>Media</li><li>Arm Chopper</li><li>Mabufu</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv10</li><li>Lv11</li><li>Lv12</li>');
    break;

  case 'sandman':
    $('#name').html('Sandman');
    $('#arcana').html('Strength');
    $('#level').html('Base Lv 5');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('4');
    $('#ma').html('5');
    $('#en').html('6');
    $('#ag').html('4');
    $('#lu').html('3');

    $('#skill').append('<li>Garu</li><li>Pulinpa</li><li>Skull Cracker</li><li>Confuse Boost</li><li>Dekaja</li><li>Traesto</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv6</li><li>Lv7</li><li>Lv8</li><li>Lv11</li>');
    break;
  /* #endregion */

  /* #region  Hanged Man */
  case 'attis':
    $('#name').html('Attis');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 82');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Rpl');
    $('#light').html('-');
    $('#dark').html('Wk');

    $('#st').html('51');
    $('#ma').html('56');
    $('#en').html('56');
    $('#ag').html('50');
    $('#lu').html('40');

    $('#skill').append('<li>Agidyne</li><li>Amrita</li><li>Marakukaja</li><li>Enduring Soul</li><li>Samarecarm</li><li>Maragidyne</li><li>Mamudoon</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv84</li><li>Lv86</li><li>Lv87</li><li>Lv88</li>');
    break;

  case 'vasuki':
    $('#name').html('Vasuki');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 71');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('48');
    $('#ma').html('47');
    $('#en').html('50');
    $('#ag').html('40');
    $('#lu').html('35');

    $('#skill').append('<li>Hamaon</li><li>Virus Wave</li><li>Null Poison</li><li>High Counter</li><li>Evade Wind</li><li>Mahamaon</li><li>Ziodyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv73</li><li>Lv74</li><li>Lv75</li><li>Lv76</li><li>Lv77</li>');
    break;

  case 'hell-biker':
    $('#name').html('Hell Biker');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 66');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('-');

    $('#st').html('49');
    $('#ma').html('40');
    $('#en').html('40');
    $('#ag').html('48');
    $('#lu').html('28');

    $('#skill').append('<li>Agidyne</li><li>Aeon Rain</li><li>Endure</li><li>Mudoon</li><li>Maragidyne</li><li>Absorb Fire</li><li>Fire Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv68</li><li>Lv69</li><li>Lv70</li><li>Lv71</li><li>Lv73</li>');
    break;

  case 'taowu':
    $('#name').html('Taowu');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 56');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('40');
    $('#ma').html('37');
    $('#en').html('31');
    $('#ag').html('38');
    $('#lu').html('29');

    $('#skill').append('<li>Aeon Rain</li><li>Dekaja</li><li>Matarukaja</li><li>Null Enervate</li><li>Power Charge</li><li>Evade Physical</li><li>Absorb Fire</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv58</li><li>Lv60</li><li>Lv61</li><li>Lv62</li>');
    break;

  case 'yatsufusa':
    $('#name').html('Yatsufusa');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 49');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Rpl');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('32');
    $('#ma').html('33');
    $('#en').html('27');
    $('#ag').html('36');
    $('#lu').html('26');

    $('#skill').append('<li>Agidyne</li><li>Masukukaja</li><li>Fire Boost</li><li>Heat Wave</li><li>Power Charge</li><li>Dodge Physical</li><li>Maragidyne</li><li>Mind Charge</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv51</li><li>Lv52</li><li>Lv53</li><li>Lv54</li><li>Lv55</li>');
    break;

  case 'orthrus':
    $('#name').html('Orthrus');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 39');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('34');
    $('#ma').html('21');
    $('#en').html('28');
    $('#ag').html('23');
    $('#lu').html('18');

    $('#skill').append('<li>Agilao</li><li>Black Spot</li><li>Marakukaja</li><li>Fire Boost</li><li>Maragion</li><li>Null Ice</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv41</li><li>Lv42</li><li>Lv44</li><li>Lv45</li>');
    break;

  case 'makami':
    $('#name').html('Makami');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 27');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('16');
    $('#ma').html('21');
    $('#en').html('13');
    $('#ag').html('22');
    $('#lu').html('16');

    $('#skill').append('<li>Agilao</li><li>Sukunda</li><li>Auto-Sukukaja</li><li>Diarama</li><li>Resist Mute</li><li>Dodge Physical</li><li>Resist Ice</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv29</li><li>Lv30</li><li>Lv31</li><li>Lv32</li><li>Lv33</li>');
    break;

  case 'ikusa':
    $('#name').html('Ikusa');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 22');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('17');
    $('#ma').html('16');
    $('#en').html('18');
    $('#ag').html('12');
    $('#lu').html('10');

    $('#skill').append('<li>Cell Breaker</li><li>Mabufu</li><li>Enervate Boost</li><li>Foul Breath</li><li>Poison Mist</li><li>Poison Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv24</li><li>Lv25</li><li>Lv26</li><li>Lv27</li>');
    break;

  case 'berith':
    $('#name').html('Berith');
    $('#arcana').html('Hanged Man');
    $('#level').html('Base Lv 15');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('12');
    $('#ma').html('10');
    $('#en').html('9');
    $('#ag').html('12');
    $('#lu').html('9');

    $('#skill').append('<li>Single Shot</li><li>Mudo</li><li>Maragi</li><li>Mudo Boost</li><li>Green Wall</li><li>Brain Shake</li><li>Resist Confuse</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv16</li><li>Lv17</li><li>Lv18</li><li>Lv19</li><li>Lv20</li>');
    break;
  /* #endregion */

  /* #region  Death */
  case 'mahakala':
    $('#name').html('Mahakala');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 78');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('58');
    $('#ma').html('38');
    $('#en').html('57');
    $('#ag').html('49');
    $('#lu').html('39');

    $('#skill').append('<li>Agidyne</li><li>Myriad Arrows</li><li>Power Charge</li><li>Mind Charge</li><li>Maragidyne</li><li>Mamudoon</li><li>Fire Amp</li><li>Mudo Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv80</li><li>Lv82</li><li>Lv83</li><li>Lv84</li><li>Lv85</li>');
    break;

  case 'alice':
    $('#name').html('Alice');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 72');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('39');
    $('#ma').html('56');
    $('#en').html('33');
    $('#ag').html('45');
    $('#lu').html('44');

    $('#skill').append('<li>Mamudoon</li><li>Mudo Boost</li><li>Dekunda</li><li>Endure Light</li><li>Megidola</li><li>Mind Charge</li><li>Die for Me!</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv75</li><li>Lv76</li><li>Lv77</li><li>Lv79</li>');
    break;

  case 'white-rider':
    $('#name').html('White Rider');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 58');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Rpl');

    $('#st').html('49');
    $('#ma').html('31');
    $('#en').html('37');
    $('#ag').html('40');
    $('#lu').html('24');

    $('#skill').append('<li>Muddon</li><li>Hamaon</li><li>Agidyne</li><li>Evade Ice</li><li>Mahamaon</li><li>Mamudoon</li><li>Hama Boost</li><li>Mudo Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv60</li><li>Lv62</li><li>Lv63</li><li>Lv65</li><li>Lv66</li><li>Lv67</li>');
    break;

  case 'mot':
    $('#name').html('Mot');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 46');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('32');
    $('#ma').html('38');
    $('#en').html('30');
    $('#ag').html('24');
    $('#lu').html('21');

    $('#skill').append('<li>Mudoon</li><li>Evil Smile</li><li>Tentarafoo</li><li>Survive Light</li><li>Ghastly Wail</li><li>Mudo Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv48</li><li>Lv49</li><li>Lv50</li>');
    break;

  case 'samael':
    $('#name').html('Samael');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 36');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('24');
    $('#ma').html('29');
    $('#en').html('25');
    $('#ag').html('19');
    $('#lu').html('18');

    $('#skill').append('<li>Mudoon</li><li>Matarunda</li><li>Poison Mist</li><li>Dekunda</li><li>Megido</li><li>Mudo Boost</li><li>Survive Light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv38</li><li>Lv39</li><li>Lv40</li><li>Lv41</li>');
    break;

  case 'matador':
    $('#name').html('Matador');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 24');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('17');
    $('#ma').html('10');
    $('#en').html('16');
    $('#ag').html('25');
    $('#lu').html('11');

    $('#skill').append('<li>Mamudo</li><li>Swift Strike</li><li>Dekunda</li><li>Mudo Boost</li><li>Rampage</li><li>Auto-Sukukaja</li><li>Survive Light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv26</li><li>Lv27</li><li>Lv29</li><li>Lv30</li>');
    break;

  case 'mokoi':
    $('#name').html('Mokoi');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 14');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('13');
    $('#ma').html('7');
    $('#en').html('9');
    $('#ag').html('11');
    $('#lu').html('9');

    $('#skill').append('<li>Sonic Punch</li><li>Hysterical Slap</li><li>Dekaja</li><li>Valiant Dance</li><li>Rage Boost</li><li>Soul Break</li><li>Exhaust Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv15</li><li>Lv16</li><li>Lv18</li><li>Lv19</li>');
    break;

  case 'ghoul':
    $('#name').html('Ghoul');
    $('#arcana').html('Death');
    $('#level').html('Base Lv 9');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('-');

    $('#st').html('8');
    $('#ma').html('7');
    $('#en').html('9');
    $('#ag').html('5');
    $('#lu').html('5');

    $('#skill').append('<li>Bash</li><li>Poisma</li><li>Sukukaja</li><li>Enervation</li><li>Poison Skewer</li><li>Rakunda</li><li>Poison Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv10</li><li>Lv11</li><li>Lv12</li><li>Lv13</li><li>Lv14</li>');
    break;
  /* #endregion */

  /* #region  Temperance */
  case 'vishnu':
    $('#name').html('Vishnu');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 73');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('46');
    $('#ma').html('52');
    $('#en').html('34');
    $('#ag').html('54');
    $('#lu').html('43');

    $('#skill').append('<li>Megidolaon</li><li>Akasha Arts</li><li>Mabufudyne</li><li>Regenerate 3</li><li>God\'s Hand</li><li>Power Charge</li><li>Angelic Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv75</li><li>Lv76</li><li>Lv78</li><li>Lv79</li>');
    break;

  case 'yurlungur':
    $('#name').html('Yurlungur');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 69');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('41');
    $('#ma').html('50');
    $('#en').html('45');
    $('#ag').html('43');
    $('#lu').html('35');

    $('#skill').append('<li>Virus Wave</li><li>Bufudyne</li><li>Growth 3</li><li>Mediarahan</li><li>Samarecarm</li><li>Repel light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv71</li><li>Lv72</li><li>Lv74</li><li>Lv75</li>');
    break;

  case 'byakko':
    $('#name').html('Byakko');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 62');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('47');
    $('#ma').html('32');
    $('#en').html('35');
    $('#ag').html('49');
    $('#lu').html('30');

    $('#skill').append('<li>Bufudyne</li><li>Deathbound</li><li>High Counter</li><li>Auto-Sukukaja</li><li>Amrita</li><li>Ice Amp</li><li>Mabufudyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv64</li><li>Lv66</li><li>Lv67</li><li>Lv68</li>');
    break;

  case 'suzaku':
    $('#name').html('Suzaku');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 54');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('30');
    $('#ma').html('36');
    $('#en').html('31');
    $('#ag').html('42');
    $('#lu').html('30');

    $('#skill').append('<li>Maragion</li><li>Energy Shower</li><li>Masukukaja</li><li>Agidyne</li><li>Resist Ice</li><li>Fire Amp</li><li>Auto-Masuku</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv55</li><li>Lv56</li><li>Lv58</li><li>Lv59</li><li>Lv60</li>');
    break;

  case 'seiryuu':
    $('#name').html('Seiryuu');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 47');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('30');
    $('#ma').html('31');
    $('#en').html('33');
    $('#ag').html('28');
    $('#lu').html('26');

    $('#skill').append('<li>Mazionga</li><li>Matarunda</li><li>Ziodyne</li><li>Poison Mist</li><li>Elec Break</li><li>Elec Boost</li><li>Resist Exhaust</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv49</li><li>Lv50</li><li>Lv51</li><li>Lv52</li><li>Lv53</li>');
    break;

  case 'genbu':
    $('#name').html('Genbu');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 40');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('28');
    $('#ma').html('27');
    $('#en').html('39');
    $('#ag').html('12');
    $('#lu').html('21');

    $('#skill').append('<li>Mabufula</li><li>Marakukaja</li><li>Regenerate 2</li><li>Makara Break</li><li>Blue Wall</li><li>Resist Physical</li><li>Evade Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv42</li><li>Lv43</li><li>Lv44</li><li>Lv45</li><li>Lv46</li>');
    break;

  case 'mithra':
    $('#name').html('Mithra');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 31');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('22');
    $('#ma').html('26');
    $('#en').html('21');
    $('#ag').html('16');
    $('#lu').html('15');

    $('#skill').append('<li>Mahama</li><li>Seal Bomb</li><li>Tetra Break</li><li>Hamaon</li><li>Dodge Elec</li><li>Hama Boost</li><li>Null Mute</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv33</li><li>Lv34</li><li>Lv35</li><li>Lv36</li><li>Lv37</li>');
    break;

  case 'nigi-mitama':
    $('#name').html('Nigi Mitama');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 23');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('15');
    $('#ma').html('16');
    $('#en').html('14');
    $('#ag').html('15');
    $('#lu').html('16');

    $('#skill').append('<li>Diarama</li><li>Me Patra</li><li>Re Patra</li><li>Recarm</li><li>Invigorate 2</li><li>Garula</li><li>Resist Enervate</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv25</li><li>Lv26</li><li>Lv28</li><li>Lv29</li>');
    break;

  case 'xie-zhai':
    $('#name').html('Xie Zhai');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 16');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('14');
    $('#ma').html('12');
    $('#en').html('9');
    $('#ag').html('13');
    $('#lu').html('7');

    $('#skill').append('<li>Zio</li><li>Mazio</li><li>Rakunda</li><li>Makajam</li><li>Silence Boost</li><li>Rampage</li><li>Elec Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv17</li><li>Lv18</li><li>Lv19</li><li>Lv21</li>');
    break;

  case 'sylph':
    $('#name').html('Sylph');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 11');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('');
    $('#elec').html('Wk');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('8');
    $('#ma').html('10');
    $('#en').html('5');
    $('#ag').html('10');
    $('#lu').html('7');

    $('#skill').append('<li>Garu</li><li>Sukukaja</li><li>Me Patra</li><li>Regenerate 1</li><li>Media</li><li>Magaru</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv12</li><li>Lv13</li><li>Lv14</li>');
    break;

  case 'apsaras':
    $('#name').html('Apsaras');
    $('#arcana').html('Temperance');
    $('#level').html('Base Lv 4');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('3');
    $('#ma').html('5');
    $('#en').html('3');
    $('#ag').html('5');
    $('#lu').html('3');

    $('#skill').append('<li>Patra</li><li>Dia</li><li>Rakunda</li><li>Me Patra</li><li>Bufu</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv5</li><li>Lv6</li><li>Lv7</li>');
    break;
  /* #endregion */

  /* #region  Devil */
  case 'beelzebub':
    $('#name').html('Beelzebub');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 81');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Nul');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('51');
    $('#ma').html('57');
    $('#en').html('48');
    $('#ag').html('50');
    $('#lu').html('44');

    $('#skill').append('<li>Agidyne</li><li>Mabufudyne</li><li>Mind Charge</li><li>Primal Force</li><li>Mamudoon</li><li>Endure Light</li><li>Mudo Boost</li><li>Megidolaon</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv83</li><li>Lv84</li><li>Lv85</li><li>Lv86</li><li>Lv87</li>');
    break;

  case 'belial':
    $('#name').html('Belial');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 68');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('51');
    $('#ma').html('31');
    $('#en').html('48');
    $('#ag').html('40');
    $('#lu').html('41');

    $('#skill').append('<li>Mudoon</li><li>Myriad Arrows</li><li>Agidyne</li><li>Endure Light</li><li>Fire Amp</li><li>Maragidyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv69</li><li>Lv71</li><li>Lv72</li><li>Lv73</li>');
    break;

  case 'belphegor':
    $('#name').html('Belphegor');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 61');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Dr');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('40');
    $('#ma').html('48');
    $('#en').html('42');
    $('#ag').html('39');
    $('#lu').html('21');

    $('#skill').append('<li>Maziodyne</li><li>Evil Smile</li><li>Marakunda</li><li>Fear Boost</li><li>Old One</li><li>Enervate Boost</li><li>Elec Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv63</li><li>Lv64</li><li>Lv65</li><li>Lv66</li><li>Lv67</li>');
    break;

  case 'lilith':
    $('#name').html('Lilith');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 53');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('30');
    $('#ma').html('43');
    $('#en').html('30');
    $('#ag').html('36');
    $('#lu').html('27');

    $('#skill').append('<li>Ziodyne</li><li>Makarakarn</li><li>Old One</li><li>Maziodyne</li><li>Elec Break</li><li>Ailment Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv54</li><li>Lv55</li><li>Lv56</li><li>Lv57</li>');
    break;

  case 'succubus':
    $('#name').html('Succubus');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 44');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('22');
    $('#ma').html('33');
    $('#en').html('28');
    $('#ag').html('32');
    $('#lu').html('27');

    $('#skill').append('<li>Agilao</li><li>Mudoon</li><li>Maragion</li><li>Mudo Boost</li><li>Spirit Drain</li><li>Resist Light</li><li>Invigorate 3</li>');

    $('#unlock').append('<li>innate</li><li>Innate</li><li>Lv46</li><li>Lv47</li><li>Lv48</li><li>Lv49</li><li>Lv50</li>');
    break;

  case 'pazuzu':
    $('#name').html('Pazuzu');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 37');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Rpl');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('-');

    $('#st').html('27');
    $('#ma').html('15');
    $('#en').html('28');
    $('#ag').html('29');
    $('#lu').html('19');

    $('#skill').append('<li>Mudoon</li><li>Rakukaja</li><li>Bufula</li><li>Stagnant Air</li><li>Ailment Boost</li><li>Navas Nebula</li><li>Cool Breeze</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv39</li><li>Lv40</li><li>Lv41</li><li>Lv42</li>');
    break;

  case 'incubus':
    $('#name').html('Incubus');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 28');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('17');
    $('#ma').html('22');
    $('#en').html('16');
    $('#ag').html('19');
    $('#lu').html('17');

    $('#skill').append('<li>Agilao</li><li>Evil Smile</li><li>Mind Slice</li><li>Stagnant Air</li><li>Spirit Drain</li><li>Ghastly Wail</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv30</li><li>Lv32</li><li>Lv33</li>');
    break;

  case 'vetala':
    $('#name').html('Vetala');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 19');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('Str');

    $('#st').html('17');
    $('#ma').html('10');
    $('#en').html('14');
    $('#ag').html('12');
    $('#lu').html('11');

    $('#skill').append('<li>Foolish Whisper</li><li>Evil Touch</li><li>Life Drain</li><li>Foul Breath</li><li>Brain Shake</li><li>Ghastly Wail</li><li>Fear Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv20</li><li>Lv21</li><li>Lv22</li><li>Lv23</li><li>Lv24</li>');
    break;

  case 'lilim':
    $('#name').html('Lilim');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 10');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Str');

    $('#st').html('4');
    $('#ma').html('11');
    $('#en').html('5');
    $('#ag').html('9');
    $('#lu').html('8');

    $('#skill').append('<li>Zio</li><li>Mudo</li><li>Enervation</li><li>Enervate Boost</li><li>Sukukaja</li><li>Mamudo</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv12</li><li>Lv13</li><li>Lv15</li>');
    break;

  case 'ukobach':
    $('#name').html('Ukobach');
    $('#arcana').html('Devil');
    $('#level').html('Base Lv 3');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('3');
    $('#ma').html('4');
    $('#en').html('3');
    $('#ag').html('4');
    $('#lu').html('2');

    $('#skill').append('<li>Agi</li><li>Sukunda</li><li>Pulinpa</li><li>Confuse Boost</li><li>Resist Fire</li><li>Fire Break</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv4</li><li>Lv5</li><li>Lv6</li><li>Lv7</li>');
    break;
  /* #endregion */

  /* #region  Tower */
  case 'shiva':
    $('#name').html('Shiva');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 80');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Dr');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('59');
    $('#ma').html('48');
    $('#en').html('44');
    $('#ag').html('54');
    $('#lu').html('42');

    $('#skill').append('<li>Ziodyne</li><li>Magarudyne</li><li>Enduring Soul</li><li>Maziodyne</li><li>Spell Master</li><li>Megidolaon</li><li>Pralaya</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv82</li><li>Lv83</li><li>Lv84</li><li>Lv87</li>');
    break;

  case 'yoshitsune':
    $('#name').html('Yoshitsune');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 75');

    $('#phys').html('Nul');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('Rpl');
    $('#dark').html('-');

    $('#st').html('52');
    $('#ma').html('39');
    $('#en').html('49');
    $('#ag').html('61');
    $('#lu').html('34');

    $('#skill').append('<li>Brave Blade</li><li>Power Charge</li><li>Ziodyne</li><li>Heat Riser</li><li>Repel Elec</li><li>Elec Amp</li><li>Hassou Tobi</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv77</li><li>Lv78</li><li>Lv79</li><li>Lv83</li>');
    break;

  case 'masakado':
    $('#name').html('Masakado');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 69');

    $('#phys').html('Nul');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('51');
    $('#ma').html('32');
    $('#en').html('45');
    $('#ag').html('46');
    $('#lu').html('40');

    $('#skill').append('<li>Mahamaon</li><li>Tempest Slash</li><li>Myriad Arrows</li><li>Hama Boost</li><li>Arms Master</li><li>Enduring Soul</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv71</li><li>Lv73</li><li>Lv74</li><li>Lv76</li>');
    break;

  case 'mara':
    $('#name').html('Mara');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 62');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('44');
    $('#ma').html('35');
    $('#en').html('48');
    $('#ag').html('36');
    $('#lu').html('30');

    $('#skill').append('<li>Agidyne</li><li>Blight</li><li>Power Charge</li><li>Makarakarn</li><li>Absorb Physical</li><li>Fire Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv63</li><li>Lv64</li><li>Lv66</li><li>Lv67</li>');
    break;

  case 'abaddon':
    $('#name').html('Abaddon');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 55');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Rpl');

    $('#st').html('43');
    $('#ma').html('27');
    $('#en').html('50');
    $('#ag').html('23');
    $('#lu').html('29');

    $('#skill').append('<li>Old One</li><li>Mudoon</li><li>Arrow Rain</li><li>Agidyne</li><li>Endure Light</li><li>Tetra Break</li><li>Null Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv56</li><li>Lv57</li><li>Lv60</li><li>Lv62</li>');
    break;

  case 'cu-chulainn':
    $('#name').html('Cu Chulainn');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 46');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Rpl');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('40');
    $('#ma').html('32');
    $('#en').html('28');
    $('#ag').html('25');
    $('#lu').html('20');

    $('#skill').append('<li>Magarula</li><li>Deathbound</li><li>Matarukaja</li><li>Mind Charge</li><li>White Wall</li><li>Endure Dark</li><li>Garudyne</li><li>Wind Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv47</li><li>Lv48</li><li>Lv49</li><li>Lv50</li><li>Lv51</li><li>Lv53</li>');
    break;

  case 'taotie':
    $('#name').html('Taotie');
    $('#arcana').html('Tower');
    $('#level').html('Base Lv 35');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('20');
    $('#ma').html('27');
    $('#en').html('30');
    $('#ag').html('22');
    $('#lu').html('13');

    $('#skill').append('<li>Megido</li><li>Mind Slice</li><li>Dekunda</li><li>Confuse Boost</li><li>Mind Charge</li><li>Null Enervate</li><li>Torrent Shot</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv37</li><li>Lv38</li><li>Lv40</li><li>Lv41</li>');
    break;
  /* #endregion */

  /* #region  Star */
  case 'helel':
    $('#name').html('Hele');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 87');

    $('#phys').html('Str');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('Nul');
    $('#dark').html('Nul');

    $('#st').html('56');
    $('#ma').html('57');
    $('#en').html('56');
    $('#ag').html('49');
    $('#lu').html('50');

    $('#skill').append('<li>Megidolaon</li><li>Maragidyne</li><li>God\'s hand</li><li>Salvation</li><li>Insta-Heal</li><li>Repel Wind</li><li>Arms Master</li><li>Morning Star</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv88</li><li>Lv90</li><li>Lv91</li><li>Lv92</li><li>Lv94</li>');
    break;

  case 'saturnus':
    $('#name').html('Saturnus');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 75');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('50');
    $('#ma').html('57');
    $('#en').html('36');
    $('#ag').html('43');
    $('#lu').html('49');

    $('#skill').append('<li>Agidyne</li><li>Maragidyne</li><li>Fire Amp</li><li>Evade Ice</li><li>Growth 3</li><li>Spell Master</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv77</li><li>Lv79</li><li>Lv81</li>');
    break;

  case 'kartikeya':
    $('#name').html('Kartikeya');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 67');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('47');
    $('#ma').html('39');
    $('#en').html('40');
    $('#ag').html('44');
    $('#lu').html('38');

    $('#skill').append('<li>Maziodyne</li><li>Auto-Mataru</li><li>High Counter</li><li>Myriad Arrows</li><li>Growth 2</li><li>Primal Force</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv68</li><li>Lv69</li><li>Lv70</li><li>Lv75</li>');
    break;

  case 'garuda':
    $('#name').html('Garuda');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 57');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Rpl');
    $('#light').html('Rpl');
    $('#dark').html('-');

    $('#st').html('39');
    $('#ma').html('33');
    $('#en').html('28');
    $('#ag').html('47');
    $('#lu').html('31');

    $('#skill').append('<li>Diarama</li><li>Garudyne</li><li>Arrow Rain</li><li>Amrita</li><li>High Counter</li><li>Repel Wind</li><li>Auto-Sukukaja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv60</li><li>Lv61</li><li>Lv62</li><li>Lv63</li>');
    break;

  case 'ganesha':
    $('#name').html('Ganesha');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 50');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('38');
    $('#ma').html('29');
    $('#en').html('31');
    $('#ag').html('27');
    $('#lu').html('32');

    $('#skill').append('<li>Garudyne</li><li>Mustard Bomb</li><li>Makarakarn</li><li>Power Charge</li><li>High Counter</li><li>Endure</li><li>Magarudyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv52</li><li>Lv54</li><li>Lv55</li><li>Lv56</li>');
    break;

  case 'fuu-ki':
    $('#name').html('Fuu-ki');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 43');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('25');
    $('#ma').html('32');
    $('#en').html('34');
    $('#ag').html('27');
    $('#lu').html('18');

    $('#skill').append('<li>Garula</li><li>Torrent Shot</li><li>Counterstrike</li><li>Evade Fire</li><li>Apt pupil</li><li>Wind Boost</li><li>Null Exhaust</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv45</li><li>Lv46</li><li>Lv47</li><li>Lv49</li>');
    break;

  case 'neko-shogun':
    $('#name').html('Neko Shogun');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 32');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Rpl');
    $('#wind').html('Wk');
    $('#light').html('Nul');
    $('#dark').html('Nul');

    $('#st').html('26');
    $('#ma').html('20');
    $('#en').html('19');
    $('#ag').html('23');
    $('#lu').html('15');

    $('#skill').append('<li>Zionga</li><li>Elec Boost</li><li>Black Spot</li><li>Mediarama</li><li>Matarukaja</li><li>Evade Wind</li><li>Divine Grace</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv34</li><li>Lv35</li><li>Lv36</li><li>Lv37</li>');
    break;

  case 'kaiwan':
    $('#name').html('Kaiwan');
    $('#arcana').html('Star');
    $('#level').html('Base Lv 24');

    $('#phys').html('Wk');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('16');
    $('#ma').html('23');
    $('#en').html('14');
    $('#ag').html('15');
    $('#lu').html('11');

    $('#skill').append('<li>Tetrakarn</li><li>Cell Breaker</li><li>Mamudo</li><li>Stagnant Air</li><li>Resist Light</li><li>Life Drain</li><li>Spirit Drain</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv26</li><li>Lv27</li><li>Lv28</li><li>Lv29</li>');
    break;
  /* #endregion */

  /* #region  Moon */
  case 'sandalphon':
    $('#name').html('Sandalphon');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 84');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Nul');
    $('#light').html('Rpl');
    $('#dark').html('Wk');

    $('#st').html('56');
    $('#ma').html('61');
    $('#en').html('46');
    $('#ag').html('47');
    $('#lu').html('49');

    $('#skill').append('<li>Mahamaon</li><li>Samarecarm</li><li>Amrita</li><li>Angelic Grace</li><li>Agneyastra</li><li>Endure Dark</li><li>Repel Dark</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv87</li><li>Lv88</li><li>Lv89</li><li>Lv90</li>');
    break;

  case 'baal-zebul':
    $('#name').html('Baal Zebul');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 77');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('48');
    $('#ma').html('60');
    $('#en').html('49');
    $('#ag').html('40');
    $('#lu').html('41');

    $('#skill').append('<li>Mabufudyne</li><li>Mamudoon</li><li>Old One</li><li>Tentarafoo</li><li>Maziodyne</li><li>Mudo Boost</li><li>Stagnant Air</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv78</li><li>Lv79</li><li>Lv80</li><li>Lv82</li>');
    break;

  case 'seth':
    $('#name').html('Seth');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 68');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Rpl');
    $('#elec').html('Wk');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('46');
    $('#ma').html('51');
    $('#en').html('40');
    $('#ag').html('39');
    $('#lu').html('35');

    $('#skill').append('<li>Magarudyne</li><li>Garudyne</li><li>Wind Break</li><li>Null Light</li><li>Wind Amp</li><li>Evade Elec</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv71</li><li>Lv72</li><li>Lv73</li><li>Lv74</li>');
    break;

  case 'sui-ki':
    $('#name').html('Sui ki');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 57');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Dr');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('42');
    $('#ma').html('49');
    $('#en').html('43');
    $('#ag').html('33');
    $('#lu').html('17');

    $('#skill').append('<li>Bufudyne</li><li>Power Charge</li><li>Vicious Strike</li><li>Regenerate 2</li><li>Tetra Break</li><li>Eduring Soul</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv59</li><li>Lv60</li><li>Lv62</li>');
    break;

  case 'girimehkala':
    $('#name').html('Girimehkala');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 48');

    $('#phys').html('Rpl');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Wk');

    $('#st').html('36');
    $('#ma').html('35');
    $('#en').html('23');
    $('#ag').html('30');
    $('#lu').html('27');

    $('#skill').append('<li>Power Charge</li><li>Mighty Swing</li><li>Poison Mist</li><li>Mamudoon</li><li>Blight</li><li>Tetraja</li><li>Endure Light</li><li>Repel Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv50</li><li>Lv51</li><li>Lv52</li><li>Lv53</li><li>Lv56</li>');
    break;

  case 'alraune':
    $('#name').html('Alraune');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 41');

    $('#phys').html('-');
    $('#fire').html('Str');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('17');
    $('#ma').html('35');
    $('#en').html('21');
    $('#ag').html('29');
    $('#lu').html('28');

    $('#skill').append('<li>Mediarama</li><li>Energy Shower</li><li>Old One</li><li>Makarakarn</li><li>Green Wall</li><li>Null Enervate</li><li>Enervate Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv43</li><li>Lv44</li><li>Lv45</li><li>Lv46</li>');
    break;

  case 'yamatano-orochi':
    $('#name').html('Yamatano-Orochi');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 34');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('29');
    $('#ma').html('21');
    $('#en').html('26');
    $('#ag').html('18');
    $('#lu').html('15');

    $('#skill').append('<li>Mabufula</li><li>Garula</li><li>Red Wall</li><li>Green Wall</li><li>Resist Enervate</li><li>Ice Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv36</li><li>Lv38</li><li>Lv39</li>');
    break;

  case 'nozuchi':
    $('#name').html('Nozuchi');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 27');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('26');
    $('#ma').html('13');
    $('#en').html('19');
    $('#ag').html('15');
    $('#lu').html('15');

    $('#skill').append('<li>Poison Mist</li><li>Enervation</li><li>Ailment Boost</li><li>Zionga</li><li>Rakukaja</li><li>Null Poison</li><li>Null Enervate</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv29</li><li>Lv30</li><li>Lv31</li><li>Lv32</li>');
    break;

  case 'andra':
    $('#name').html('Andra');
    $('#arcana').html('Moon');
    $('#level').html('Base Lv 20');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('14');
    $('#ma').html('16');
    $('#en').html('13');
    $('#ag').html('12');
    $('#lu').html('12');

    $('#skill').append('<li>Media</li><li>Mazio</li><li>Sukukaja</li><li>Blue Wall</li><li>Regenerate 2</li><li>Zionga</li><li>Dodge Wind</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv22</li><li>Lv23</li><li>Lv24</li><li>Lv25</li>');
    break;
  /* #endregion */

  /* #region  Sun */
  case 'asura':
    $('#name').html('Asura');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 86');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Str');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('59');
    $('#ma').html('57');
    $('#en').html('51');
    $('#ag').html('50');
    $('#lu').html('48');

    $('#skill').append('<li>Maragidyne</li><li>Primal Force</li><li>Marakukaja</li><li>Mahamaon</li><li>High Counter</li><li>Spell Master</li><li>Unshaken Will</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv88</li><li>Lv89</li><li>Lv90</li><li>Lv92</li>');
    break;

  case 'suparna':
    $('#name').html('Suparna');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 77');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('48');
    $('#ma').html('52');
    $('#en').html('45');
    $('#ag').html('55');
    $('#lu').html('38');

    $('#skill').append('<li>Garudyne</li><li>Makajam</li><li>Evade Ice</li><li>Wind Amp</li><li>Magarudyne</li><li>Evade Fire</li><li>Elec Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv79</li><li>Lv80</li><li>Lv71</li><li>Lv72</li><li>Lv73</li>');
    break;

  case 'horus':
    $('#name').html('Horus');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 68');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('Rpl');
    $('#dark').html('-');

    $('#st').html('45');
    $('#ma').html('48');
    $('#en').html('35');
    $('#ag').html('45');
    $('#lu').html('38');

    $('#skill').append('<li>Diarahan</li><li>Mahamaon</li><li>Magarudyne</li><li>Wind Amp</li><li>Matarukaja</li><li>Absorb Wind</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv70</li><li>Lv71</li><li>Lv73</li>');
    break;

  case 'jatayu':
    $('#name').html('Jatayu');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 61');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Dr');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('38');
    $('#ma').html('44');
    $('#en').html('35');
    $('#ag').html('48');
    $('#lu').html('25');

    $('#skill').append('<li>Garudyne</li><li>Null Confuse</li><li>Amrita</li><li>Growth 3</li><li>Repel Elec</li><li>Magarudyne</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv62</li><li>Lv64</li><li>Lv65</li><li>Lv66</li>');
    break;

  case 'tam-lin':
    $('#name').html('Tam Lin');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 53');

    $('#phys').html('Str');
    $('#fire').html('Str');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('45');
    $('#ma').html('31');
    $('#en').html('34');
    $('#ag').html('39');
    $('#lu').html('25');

    $('#skill').append('<li>Ziodyne</li><li>Deathbound</li><li>High Counter</li><li>Auto-Maraku</li><li>Power CHarge</li><li>Elec Amp</li><li>Evade Physical</li><li>Enduring Soul</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv54</li><li>Lv55</li><li>Lv56</li><li>Lv58</li><li>Lv59</li>');
    break;

  case 'narasimha':
    $('#name').html('Narasimha');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 47');

    $('#phys').html('Str');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('29');
    $('#ma').html('27');
    $('#en').html('30');
    $('#ag').html('35');
    $('#lu').html('27');

    $('#skill').append('<li>Hamaon</li><li>Tempest Slash</li><li>Counterstrike</li><li>Evade WInd</li><li>Mahamaon</li><li>Auto-Mataru</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv48</li><li>Lv49</li><li>Lv51</li><li>Lv53</li>');
    break;

  case 'yatagarasu':
    $('#name').html('Yatagarasu');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 40');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('28');
    $('#ma').html('27');
    $('#en').html('22');
    $('#ag').html('31');
    $('#lu').html('19');

    $('#skill').append('<li>Masukukaja</li><li>Nervundi</li><li>Agilao</li><li>Null Fear</li><li>Growth 2</li><li>Diarahan</li><li>Cool Breeze</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv43</li><li>Lv44</li><li>Lv45</li><li>Lv46</li>');
    break;

  case 'gdon':
    $('#name').html('Gdon');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 31');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('27');
    $('#ma').html('10');
    $('#en').html('23');
    $('#ag').html('22');
    $('#lu').html('18');

    $('#skill').append('<li>Agilao</li><li>Maragi</li><li>Fire Break</li><li>Growth 2</li><li>Maragion</li><li>Fire Boost</li><li>Evade Ice</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv33</li><li>Lv34</li><li>Lv35</li><li>Lv36</li>');
    break;

  case 'phoenix':
    $('#name').html('Phoenix');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 20');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Wk');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('9');
    $('#ma').html('15');
    $('#en').html('9');
    $('#ag').html('20');
    $('#lu').html('14');

    $('#skill').append('<li>Garula</li><li>Maragi</li><li>Twin Shot</li><li>Growth 1</li><li>Dodge Ice</li><li>Fire Boost</li><li>Maragion</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv22</li><li>Lv23</li><li>Lv25</li><li>Lv26</li><li>Lv27</li>');
    break;

  case 'cu-sith':
    $('#name').html('Cu Sith');
    $('#arcana').html('Sun');
    $('#level').html('Base Lv 10');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('10');
    $('#ma').html('5');
    $('#en').html('6');
    $('#ag').html('9');
    $('#lu').html('7');

    $('#skill').append('<li>Garu</li><li>Pulinpa</li><li>Rakukaja</li><li>Growth 1</li><li>Magaru</li><li>White Wall</li><li>Traesto</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv11</li><li>Lv13</li><li>Lv14</li><li>Lv15</li>');
    break;
  /* #endregion */

  /* #region  Judgement */
  case 'lucifer':
    $('#name').html('Lucifer');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 93');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('62');
    $('#ma').html('69');
    $('#en').html('61');
    $('#ag').html('52');
    $('#lu').html('51');

    $('#skill').append('<li>Bufudyne</li><li>Brave Blade</li><li>Mind Charge</li><li>Ice Amp</li><li>Spell Master</li><li>Repel Light</li><li>Absorb Elec</li><li>Victory Cry</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv94</li><li>Lv95</li><li>Lv96</li><li>Lv98</li><li>Lv99</li>');
    break;

  case 'ardha':
    $('#name').html('Ardha');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 90');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('Nul');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('62');
    $('#ma').html('52');
    $('#en').html('64');
    $('#ag').html('41');
    $('#lu').html('58');

    $('#skill').append('<li>Primal Force</li><li>God\'s Hand</li><li>Megidolaon</li><li>Null Dizzy</li><li>Auto-Rakuja</li><li>Mediarahan</li><li>Angelic Grace</li><li>Null Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv91</li><li>Lv92</li><li>Lv93</li><li>Lv94</li><li>Lv95</li><li>Lv96</li>');
    break;

  case 'metatron':
    $('#name').html('Metatron');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 83');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('54');
    $('#ma').html('55');
    $('#en').html('53');
    $('#ag').html('46');
    $('#lu').html('48');

    $('#skill').append('<li>Mahamaon</li><li>Heaven\'s Blade</li><li>Megidolaon</li><li>Repel Ice</li><li>Repel Elec</li><li>Repel Fire</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv86</li><li>Lv87</li><li>Lv88</li><li>Lv89</li>');
    break;

  case 'satan':
    $('#name').html('Satan');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 76');

    $('#phys').html('-');
    $('#fire').html('Rpl');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Rpl');

    $('#st').html('45');
    $('#ma').html('60');
    $('#en').html('47');
    $('#ag').html('40');
    $('#lu').html('43');

    $('#skill').append('<li>Megidolaon</li><li>Maragidyne</li><li>Regenerate 3</li><li>Invigorate 3</li><li>Endure Light</li><li>Black Viper</li><li>Null Wind</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv77</li><li>Lv78</li><li>Lv80</li><li>Lv81</li><li>Lv82</li>');
    break;

  case 'michael':
    $('#name').html('Michael');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 72');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('45');
    $('#ma').html('42');
    $('#en').html('43');
    $('#ag').html('48');
    $('#lu').html('45');

    $('#skill').append('<li>Vorpal Blade</li><li>Megidola</li><li>Hamaon</li><li>Megidolaon</li><li>Mahamaon</li><li>Repel Dark</li><li>Heaven\'s Blade</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv74</li><li>Lv75</li><li>Lv76</li><li>Lv79</li>');
    break;

  case 'trumpeter':
    $('#name').html('Trumpeter');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 67');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('Dr');
    $('#elec').html('Rpl');
    $('#wind').html('-');
    $('#light').html('Rpl');
    $('#dark').html('Nul');

    $('#st').html('40');
    $('#ma').html('47');
    $('#en').html('39');
    $('#ag').html('45');
    $('#lu').html('37');

    $('#skill').append('<li>Megidola</li><li>Ziodyne</li><li>Elec Amp</li><li>Marakukaja</li><li>Cool Breeze</li><li>Megidolaon</li><li>Debilitate</li><li>Heat Riser</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv68</li><li>Lv69</li><li>Lv70</li><li>Lv73</li><li>Lv74</li>');
    break;

  case 'anubis':
    $('#name').html('Anubis');
    $('#arcana').html('Judgement');
    $('#level').html('Base Lv 59');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('38');
    $('#ma').html('41');
    $('#en').html('37');
    $('#ag').html('37');
    $('#lu').html('31');

    $('#skill').append('<li>Hamaon</li><li>Makarakarn</li><li>Mudoon</li><li>Poison Arrow</li><li>Mustard Bomb</li><li>Megidola</li><li>Mahamaon</li><li>Hama Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv60</li><li>Lv61</li><li>Lv62</li><li>Lv64</li><li>Lv65</li>');
    break;
  /* #endregion */

  /* #region  Jester */
  case 'magatsu-izanagi':
    $('#name').html('Magatsu Izanagi');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 77');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Nul');

    $('#st').html('60');
    $('#ma').html('58');
    $('#en').html('55');
    $('#ag').html('50');
    $('#lu').html('20');

    $('#skill').append('<li>Atom Smasher</li><li>Maziodyne</li><li>Ghastly Wail</li><li>Magarudyne</li><li>Megidolaon</li><li>Power Charge</li><li>Heat Riser</li><li>Vorpal Blade</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv78</li><li>lv80</li><li>Lv82</li><li>Lv84</li><li>Lv86</li>');
    break;

  case 'seiten-taisei':
    $('#name').html('Seiten Taisei');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 68');

    $('#phys').html('Str');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('47');
    $('#ma').html('34');
    $('#en').html('40');
    $('#ag').html('48');
    $('#lu').html('42');

    $('#skill').append('<li>Brave Blade</li><li>Rebellion</li><li>Evade Elec</li><li>High Counter</li><li>Arms Master</li><li>Regenerate 3</li><li>Vorpal Blade</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv69</li><li>Lv71</li><li>Lv74</li><li>Lv76</li>');
    break;

  case 'chernobog':
    $('#name').html('Chernobog');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 62');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('Nul');

    $('#st').html('46');
    $('#ma').html('47');
    $('#en').html('32');
    $('#ag').html('35');
    $('#lu').html('33');

    $('#skill').append('<li>Mamudoon</li><li>Rainy Death</li><li>Tetra Break</li><li>Myriad Arrows</li><li>Resist Wind</li><li>Megidola</li><li>Invigorate 3</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv64</li><li>Lv66</li><li>Lv68</li><li>Lv69</li>');
    break;

  case 'kumbhanda':
    $('#name').html('Kumbhanda');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 55');

    $('#phys').html('-');
    $('#fire').html('Dr');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Wk');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('37');
    $('#ma').html('36');
    $('#en').html('35');
    $('#ag').html('44');
    $('#lu').html('20');

    $('#skill').append('<li>Agidyne</li><li>Auto-Masuku</li><li>Alertness</li><li>Fire Amp</li><li>Resist Elec</li><li>Deathbound</li><li>Regenerate 2</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv56</li><li>Lv58</li><li>Lv59</li><li>Lv60</li><li>Lv61</li>');
    break;

  case 'baphomet':
    $('#name').html('Baphomet');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 47');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('25');
    $('#ma').html('35');
    $('#en').html('35');
    $('#ag').html('26');
    $('#lu').html('27');

    $('#skill').append('<li>Evil Smile</li><li>Maragion</li><li>Ghastly Wail</li><li>Ailment Boost</li><li>Dodge Physical</li><li>Mamudoon</li><li>Mudo Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv49</li><li>Lv50</li><li>Lv52</li><li>Lv53</li>');
    break;

  case 'loa':
    $('#name').html('Loa');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 40');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Str');

    $('#st').html('25');
    $('#ma').html('30');
    $('#en').html('28');
    $('#ag').html('23');
    $('#lu').html('21');

    $('#skill').append('<li>Mudoon</li><li>Life Drain</li><li>Matarunda</li><li>Survive Light</li><li>Ziodyne</li><li>Mudo Boost</li><li>Tetraja</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv42</li><li>Lv43</li><li>Lv45</li><li>Lv47</li>');
    break;

  case 'pale-rider':
    $('#name').html('Pale Rider');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 34');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Nul');

    $('#st').html('25');
    $('#ma').html('24');
    $('#en').html('21');
    $('#ag').html('24');
    $('#lu').html('15');

    $('#skill').append('<li>Mamudo</li><li>Mind Slice</li><li>Garula</li><li>Counterstrike</li><li>Mudoon</li><li>Survive Light</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv35</li><li>Lv37</li><li>Lv39</li>');
    break;

  case 'take-minakata':
    $('#name').html('Take-Minakata');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 27');

    $('#phys').html('Str');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('Wk');
    $('#dark').html('Wk');

    $('#st').html('20');
    $('#ma').html('20');
    $('#en').html('22');
    $('#ag').html('14');
    $('#lu').html('12');

    $('#skill').append('<li>Mazio</li><li>Zionga</li><li>Survive Light</li><li>Auto-Rakukaja</li><li>Dekaja</li><li>Dodge Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv29</li><li>Lv30</li><li>Lv31</li><li>Lv33</li>');
    break;

  case 'gurr':
    $('#name').html('Gurr');
    $('#arcana').html('Jester');
    $('#level').html('Base Lv 20');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Wk');
    $('#dark').html('Str');

    $('#st').html('16');
    $('#ma').html('11');
    $('#en').html('14');
    $('#ag').html('15');
    $('#lu').html('11');

    $('#skill').append('<li>Muzzle Shot</li><li>Auto-Tarukaja</li><li>Growth 1</li><li>Swift Strike</li><li>Poison Mist</li><li>Poison Boost</li><li>Resist Physical</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv21</li><li>Lv22</li><li>Lv23</li><li>Lv25</li><li>Lv27</li>');
    break;
  /* #endregion */

  /* #region  Aeon */
  case 'kaguya':
    $('#name').html('Kaguya');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 74');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Nul');
    $('#dark').html('Nul');

    $('#st').html('37');
    $('#ma').html('65');
    $('#en').html('36');
    $('#ag').html('44');
    $('#lu').html('47');

    $('#skill').append('<li>Hamaon</li><li>Mediarahan</li><li>Fast Heal</li><li>Tetraja</li><li>Mahamaon</li><li>Hama Boost</li><li>Spell Master</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv75</li><li>Lv77</li><li>Lv78</li><li>Lv80</li>');
    break;

  case 'laksmi':
    $('#name').html('Laksmi');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 65');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('Nul');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('36');
    $('#ma').html('50');
    $('#en').html('37');
    $('#ag').html('38');
    $('#lu').html('41');

    $('#skill').append('<li>Bufudyne</li><li>Mabufudyne</li><li>Ice Break</li><li>Null Dark</li><li>Resist Fire</li><li>Amrita</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv66</li><li>Lv68</li><li>Lv70</li><li>Lv71</li>');
    break;

  case 'kingu':
    $('#name').html('Kingu');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 58');

    $('#phys').html('-');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Str');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('Str');

    $('#st').html('38');
    $('#ma').html('44');
    $('#en').html('38');
    $('#ag').html('30');
    $('#lu').html('31');

    $('#skill').append('<li>Meidarama</li><li>Evade Fire</li><li>Auto-Masuku</li><li>Null Confuse</li><li>Null Poison</li><li>Vicious Strike</li><li>Endure</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv59</li><li>Lv60</li><li>Lv62</li><li>Lv63</li>');
    break;

  case 'quetzalcoatl':
    $('#name').html('Quetzalcoatl');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 51');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('Str');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('30');
    $('#ma').html('31');
    $('#en').html('31');
    $('#ag').html('35');
    $('#lu').html('33');

    $('#skill').append('<li>Magarula</li><li>Masukukaja</li><li>Growth 2</li><li>Garudyne</li><li>Heat Wave</li><li>Mahamaon</li><li>Wind Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv52</li><li>Lv53</li><li>Lv55</li><li>Lv57</li>');
    break;

  case 'kushinada':
    $('#name').html('Kushinada');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 44');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('Nul');
    $('#dark').html('Wk');

    $('#st').html('25');
    $('#ma').html('32');
    $('#en').html('27');
    $('#ag').html('24');
    $('#lu').html('31');

    $('#skill').append('<li>Matarukaja</li><li>Mediarama</li><li>Red Wall</li><li>Maragion</li><li>Null Fire</li><li>Makarakarn</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv46</li><li>Lv48</li><li>Lv50</li>');
    break;

  case 'raja-naga':
    $('#name').html('Raja Naga');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 37');

    $('#phys').html('Str');
    $('#fire').html('Wk');
    $('#ice').html('-');
    $('#elec').html('Nul');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('25');
    $('#ma').html('26');
    $('#en').html('24');
    $('#ag').html('22');
    $('#lu').html('21');

    $('#skill').append('<li>Fatal End</li><li>Tentarafoo</li><li>Matarukaja</li><li>Torrent SHot</li><li>Null Confuse</li><li>Mazionga</li><li>Confuse Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Lv38</li><li>Lv39</li><li>Lv40</li><li>Lv42</li><li>Lv43</li>');
    break;

  case 'sati':
    $('#name').html('Sati');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 31');

    $('#phys').html('-');
    $('#fire').html('Nul');
    $('#ice').html('Wk');
    $('#elec').html('-');
    $('#wind').html('-');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('19');
    $('#ma').html('27');
    $('#en').html('20');
    $('#ag').html('17');
    $('#lu').html('17');

    $('#skill').append('<li>Maragi</li><li>Agilao</li><li>Energy Shower</li><li>Diarama</li><li>Trafuri</li><li>Maragion</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv33</li><li>Lv34</li><li>Lv36</li>');
    break;

  case 'narcissus':
    $('#name').html('Narcissus');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 24');

    $('#phys').html('Wk');
    $('#fire').html('-');
    $('#ice').html('Str');
    $('#elec').html('Str');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('13');
    $('#ma').html('18');
    $('#en').html('11');
    $('#ag').html('16');
    $('#lu').html('21');

    $('#skill').append('<li>Foolish Whisper</li><li>Tentarafoo</li><li>Magaru</li><li>Old One</li><li>Resist Fire</li><li>Anima Freeze</li><li>Ailment Boost</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv25</li><li>Lv26</li><li>Lv27</li><li>Lv30</li>');
    break;

  case 'ame-no-uzume':
    $('#name').html('Ame-no-Uzume');
    $('#arcana').html('Aeon');
    $('#level').html('Base Lv 18');

    $('#phys').html('-');
    $('#fire').html('-');
    $('#ice').html('-');
    $('#elec').html('Wk');
    $('#wind').html('Nul');
    $('#light').html('Nul');
    $('#dark').html('-');

    $('#st').html('9');
    $('#ma').html('15');
    $('#en').html('12');
    $('#ag').html('10');
    $('#lu').html('15');

    $('#skill').append('<li>Media</li><li>Magaru</li><li>Hama</li><li>Invigorate 1</li><li>Re Patra</li><li>Auto-Rakukaja</li><li>Trafuri</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Lv20</li><li>Lv21</li><li>Lv23</li><li>Lv24</li>');
    break;
  /* #endregion */

  /* #region  World */
  case 'izanagi-no-okami':
    $('#name').html('Izanagi-no-Okami');
    $('#arcana').html('World');
    $('#level').html('Base Lv 91');

    $('#phys').html('Str');
    $('#fire').html('Str');
    $('#ice').html('Str');
    $('#elec').html('Str');
    $('#wind').html('Str');
    $('#light').html('-');
    $('#dark').html('-');

    $('#st').html('80');
    $('#ma').html('80');
    $('#en').html('80');
    $('#ag').html('80');
    $('#lu').html('80');

    $('#skill').append('<li>Megidolaon</li><li>Victory Cry</li><li>Angelic Grace</li><li>Mind Charge</li><li>Agidyne</li><li>Bufudyne</li><li>Ziodyne</li><li>Garudyne</li><li>Fire Amp</li><li>Ice Amp</li><li>Elec Amp</li><li>Wind Amp</li>');

    $('#unlock').append('<li>Innate</li><li>Innate</li><li>Innate</li><li>Innate</li><li>Lv92</li><li>Lv93</li><li>Lv94</li><li>Lv95</li><li>Lv96</li><li>Lv97</li><li>Lv98</li><li>Lv99</li>');
    break;
  /* #endregion */

  default:
    $('#name').html('Name');
    $('#arcana').html('Arcana');
    $('#level').html('Level');

    $('#phys').html('n/a');
    $('#fire').html('n/a');
    $('#ice').html('n/a');
    $('#elec').html('n/a');
    $('#wind').html('n/a');
    $('#light').html('n/a');
    $('#dark').html('n/a');

    $('#st').html('99');
    $('#ma').html('75');
    $('#en').html('50');
    $('#ag').html('25');
    $('#lu').html('0');

    $('#skill').append('<li>Skill</li>');

    $('#unlock').append('<li>n/a</li>');
    break;
}

$('#bar1').css('width', (Number($('#st').html()) / 99 * 297) + 'px');
$('#bar2').css('width', (Number($('#ma').html()) / 99 * 297) + 'px');
$('#bar3').css('width', (Number($('#en').html()) / 99 * 297) + 'px');
$('#bar4').css('width', (Number($('#ag').html()) / 99 * 297) + 'px');
$('#bar5').css('width', (Number($('#lu').html()) / 99 * 297) + 'px');