(function () {

  var
    //AUDIO_FILE        = '../songs/min-linager-gossaye',
    //AUDIO_FILE        = '../songs/muziqa_hiwete',
    AUDIO_FILE        = '../songs/09_tsebaye_senay',
    //AUDIO_FILE        = '../songs/gara_sir_new_betish_teshome_mitiku',
    PARTICLE_COUNT    = 250,
    MAX_PARTICLE_SIZE = 12,
    MIN_PARTICLE_SIZE = 2,
    GROWTH_RATE       = 5,
    DECAY_RATE        = 0.5,

    BEAM_RATE         = 0.5,
    BEAM_COUNT        = 20,

    GROWTH_VECTOR = new THREE.Vector3( GROWTH_RATE, GROWTH_RATE, GROWTH_RATE ),
    DECAY_VECTOR  = new THREE.Vector3( DECAY_RATE, DECAY_RATE, DECAY_RATE ),
    beamGroup     = new THREE.Object3D(),
    particles     = group.children,
    colors        = [ 0xaaee22, 0x04dbe5, 0xff0077, 0xffb412, 0xf6c83d ],
    t, dancer, kick;

  /*
   * Dancer.js magic
   */

  Dancer.setOptions({
    flashSWF : '../../lib/soundmanager2.swf',
    flashJS  : '../../lib/soundmanager2.js'
  });

  dancer = new Dancer();
  kick = dancer.createKick({
    onKick: function () {
      var i;
      if ( particles[ 0 ].scale.x > MAX_PARTICLE_SIZE ) {
        decay();
      } else {
        for ( i = PARTICLE_COUNT; i--; ) {
          particles[ i ].scale.addSelf( GROWTH_VECTOR );
        }
      }
      if ( !beamGroup.children[ 0 ].visible ) {
        for ( i = BEAM_COUNT; i--; ) {
          beamGroup.children[ i ].visible = true;
        }
      }
    },
    offKick: decay
  });

  dancer.onceAt( 0, function () {
    kick.on();
  }).onceAt( 8.2, function () {
    scene.add( beamGroup );
  }).after( 8.2, function () {
    beamGroup.rotation.x += BEAM_RATE;
    beamGroup.rotation.y += BEAM_RATE;
  }).onceAt( 50, function () {
    changeParticleMat( 'white' );
  }).onceAt( 66.5, function () {
    changeParticleMat( 'pink' );
  }).onceAt( 75, function () {
    changeParticleMat();
  }).fft( document.getElementById( 'fft' ) )
    .load({ src: AUDIO_FILE, codecs: [ 'ogg', 'mp3' ]})

  Dancer.isSupported() || loaded();
  !dancer.isLoaded() ? dancer.bind( 'loaded', loaded ) : loaded();

  /*
   * Three.js Setup
   */

  function on () {
    for ( var i = PARTICLE_COUNT; i--; ) {
      particle = new THREE.Particle( newParticleMat() );
      particle.position.x = Math.random() * 2000 - 1000;
      particle.position.y = Math.random() * 2000 - 1000;
      particle.position.z = Math.random() * 2000 - 1000;
      particle.scale.x = particle.scale.y = Math.random() * 10 + 5;
      group.add( particle );
    }
    scene.add( group );

    // Beam idea from http://www.airtightinteractive.com/demos/js/nebula/
    var
      beamGeometry = new THREE.PlaneGeometry( 5000, 50, 1, 1 ),
      beamMaterial, beam;

    for ( i = BEAM_COUNT; i--; ) {
      beamMaterial = new THREE.MeshBasicMaterial({
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        color: colors[ ~~( Math.random() * 5 )]
      });
      beam = new THREE.Mesh( beamGeometry, beamMaterial );
      beam.doubleSided = true;
      beam.rotation.x = Math.random() * Math.PI;
      beam.rotation.y = Math.random() * Math.PI;
      beam.rotation.z = Math.random() * Math.PI;
      beamGroup.add( beam );
    }
  }

  function decay () {
    if ( beamGroup.children[ 0 ].visible ) {
      for ( i = BEAM_COUNT; i--; ) {
        beamGroup.children[ i ].visible = false;
      }
    }

    for ( var i = PARTICLE_COUNT; i--; ) {
      if ( particles[i].scale.x - DECAY_RATE > MIN_PARTICLE_SIZE ) {
        particles[ i ].scale.subSelf( DECAY_VECTOR );
      }
    }
  }

  function changeParticleMat ( color ) {
    var mat = newParticleMat( color );
    for ( var i = PARTICLE_COUNT; i--; ) {
      if ( !color ) {
        mat = newParticleMat();
      }
      particles[ i ].material = mat;
    }
  }

  function newParticleMat( color ) {
    var
      sprites = [ 'pink', 'orange', 'yellow', 'blue', 'green' ],
      sprite = color || sprites[ ~~( Math.random() * 5 )];

    return new THREE.ParticleBasicMaterial({
      blending: THREE.AdditiveBlending,
      size: MIN_PARTICLE_SIZE,
      map: THREE.ImageUtils.loadTexture('images/particle_' + sprite + '.png'),
      vertexColor: 0xFFFFFF
    });
  }

zefen = {one:
[
    ["Bejochei", 15.49, 16.3],
    ["iyedasesku,", 16.3, 18.91],
    ["endalaCHawutish", 18.91, 22.08],
    ["Seuw", 22.08, 22.61],
    ["bemaydersibet,", 22.61, 25.21],
    ["gara", 25.21, 25.91],
    ["sir", 25.91, 26.19],
    ["neuw", 26.19, 26.72],
    ["beitish", 26.72, 27.78],
    ["Gara", 27.78, 28.8],
    ["sir", 28.8, 29.2],
    ["neuw", 29.2, 29.61],
    ["beitish", 29.61, 31.68],
    ["Bejochei", 31.68, 33.19],
    ["iyedasesku,", 33.19, 34.69],
    ["endalaCHawutish", 34.69, 37.7],
    ["Seuw", 37.7, 38.11],
    ["kemaydersibet,", 38.11, 40.8],
    ["gara", 40.8, 41.62],
    ["sir", 41.62, 41.98],
    ["neuw", 41.98, 42.39],
    ["beitish", 42.39, 43.82],
    ["Gara", 43.82, 44.59],
    ["sir", 44.59, 45.08],
    ["neuw", 45.08, 45.49],
    ["beitish", 45.49, 54.42],
    ["Aynei", 54.42, 55.32],
    ["beruQ", 55.32, 55.82],
    ["aytosh,", 55.82, 56.92],
    ["yireCHal", 56.92, 58.03],
    ["emba", 58.03, 60.04],
    ["Bemin", 60.04, 60.53],
    ["aQmei", 60.53, 61.02],
    ["chiye,", 61.02, 62.94],
    ["limTa", 62.94, 63.84],
    ["terara", 63.84, 64.54],
    ["Aynei", 64.54, 66.62],
    ["beruQ", 66.62, 68.01],
    ["aytosh,", 68.01, 69.24],
    ["yireCHal", 69.24, 70.14],
    ["emba", 70.14, 72.14],
    ["Bemin", 72.14, 72.63],
    ["aQmei", 72.63, 73.61],
    ["chiye,", 73.61, 75.33],
    ["limTa", 75.33, 76.02],
    ["terara", 76.02, 123.92],
    ["Tara", 123.92, 127.35],
    ["sir", 127.35, 127.92],
    ["yaleshiw,", 127.92, 129.92],
    ["yeQey", 129.92, 131.03],
    ["b’sil", 131.03, 131.23],
    ["frei", 131.23, 132.75],
    ["Alchalkum", 132.75, 133.74],
    ["CHakawun,", 133.74, 136.03],
    ["ememTat", 136.03, 137.14],
    ["defirei", 137.14, 138.82],
    ["Gara", 138.82, 139.43],
    ["sir", 139.43, 139.92],
    ["siTegis,", 139.92, 142.05],
    ["QiTel", 142.05, 142.74],
    ["kale", 142.74, 143.11],
    ["jember", 143.11, 145.12],
    ["Zeliye", 145.12, 145.93],
    ["endalmeTa,", 145.93, 148.02],
    ["meslogn", 148.02, 148.63],
    ["yemiseber?", 148.63, 157.43],
    ["Bejochei", 157.43, 158.74],
    ["iyedasesku,", 158.74, 160.62],
    ["endalaCHawutish", 160.62, 163.12],
    ["Seuw", 163.12, 163.65],
    ["kemaydersibet,", 163.65, 166.22],
    ["gara", 166.22, 166.92],
    ["sir", 166.92, 167.32],
    ["neuw", 167.32, 167.73],
    ["beitish", 167.73, 169.04],
    ["Gara", 169.04, 169.81],
    ["sir", 169.81, 170.14],
    ["neuw", 170.14, 170.51],
    ["beitishBejochei", 170.51, 172.52],
    ["iyedasesku,", 172.52, 175.14],
    ["endalaCHawutish", 175.14, 178.25],
    ["Seuw", 178.25, 178.61],
    ["kemaydersibet,", 178.61, 181.32],
    ["gara", 181.32, 181.93],
    ["sir", 181.93, 182.34],
    ["neuw", 182.34, 182.75],
    ["beitish", 182.75, 184.14],
    ["Gara", 184.14, 184.84],
    ["sir", 184.84, 185.33],
    ["neuw", 185.33, 185.74],
    ["beitish", 185.74, 185.74, {}]

],


two:

[["\n\nተው-ልጄ-ኪነት-ከሃቁ-ታረቅ ",2357.551,15046.938],["\nተው-ልጄ-ኪነት-ከሃቁ-ታረቅ ",15046.938,27646.213],["\nባንቺ-ሆዬ-ቃና ",27646.213,30748.117000000002],["\nናና-ናና-ና ",30748.117000000002,32553.356],["\nየወራ-ሰመሌ-በትዝታ-ቃና ",32553.356,37245.056],["\nናና-ናና-ና ",37245.056,39329.977],["\nበጤና-ባሳቦ-ባንቺ-ሆዬ-ቃና ",39329.977,44428.072],["\nናና-ናና-ና ",44428.072,46344.943],["\nደፊ-መስጓላይ-ጓላይ ",46344.943,48757.278],["\nናና-ናና-ና-ጓላይ ",48757.278,52348.752],["\nደፊ-መስጓላይ-ጓላይ ",52348.752,57945.034],["\nናና-ናና-ና-ጓላይ ",57945.034,59132.358],["\nናና-ናና-ና ",59132.358,63053.174],["\nናና-ናና-ና-ደርብ ",63053.174,63823.106],["\nናና-ናና-ና ",63823.106,66029.16],["\nሶሌ-ሶኤ-ያምጊ-ራቃሪ-ፈያ ",66029.16,69418.81999999999],["\nናና-ናና-ና ",69418.81999999999,73049.501],["\nዎላይታ-ቃሃ-ናና-ናና-ና ",73049.501,78849.977],["\nናና-ናና-ና-ናና-ናና-ና ",78849.977,88734.33099999999],["\nናና-ናና-ና ",88734.33099999999,103440.634],["\nሙዚቃ-ህይዎቴ-ግዕዝ-እና-እዝል ",103440.634,109244.92],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",109244.92,112634.603],["\nያሬዳዊ-ስለት-የሰማይ-ጸጋ ",112634.603,116139.75],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",116139.75,119938.707],["\nአቆራኘባት-ነፍሴን-ካንቺጋ ",119938.707,123037.687],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",123037.687,126749.61399999999],["\nባገሬ-ቂኝት-የብሄር-ቋንቋ ",126749.61399999999,129820.09],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",129820.09,133250.544],["\nእደሰታለው-እኔ-አላዝንም-በቃ ",133250.544,136726.439],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",136726.439,140418.321],["\nበአፋር-ሲዳማ-በጋምቤላ-ጥም ",140418.321,143518.095],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",143518.095,147323.741],["\nሊቂት-ዳንኪራ-እኔ-አላዝንም-ከቶም ",147323.741,150422.766],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",150422.766,153933.854],["\nመህያ-በያበ-መህያ-በያበ ",153933.854,157249.16],["\nሃያ-ብያ-መህያ-በያበ ",157249.16,161951.043],["\nመህያ-በያበ-መህያ-በያበ ",161951.043,167547.188],["\nሃያ-ብዬ-እኔ-ስል-አብዪ ",167547.188,171131.791],["\nናና-ናና-ና ",171131.791,174443.786],["\nናና-ናና-ና-ናና-ናና-ና ",174443.786,201432.721],["\nሙዚቃ-ህይዎቴ-ግዕዝ-እና-እዝል ",201432.721,205245.238],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",205245.238,208720.18099999998],["\nተው-ቢል-አልሰማው-በልጅነቴ ",208720.18099999998,212227.41400000002],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",212227.41400000002,215735.17],["\nገርፎ-ሲቀታኝ-ሲምክርኝ-አባዬ ",215735.17,219336.167],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",219336.167,222727.301],["\nሲንቴ-አየሁብሽ-ሙዚቃ-ህይዎቴ ",222727.301,226156.802],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",226156.802,229134.78399999999],["\nቆመህ-ካላይህ-አትመታም-እና ",229134.78399999999,232649.002],["\nላባብልህ-ዛሬ-በኪራሬ-ቃና ",232649.002,236246.07700000002],["\nናና-ናና-ና-ናና-ናና-ና ",236246.07700000002,245642.312],["\nናና-ናና-ና ",245642.312,248330.22600000002],["\n\nበሟች-ማዘን-የለም-ባለው-መጽናናት-ነው ",248330.22600000002,253439.56900000002],["\nብለህ-እናዳስትማርከኝ-ባንተው-ምክር-ዪጄው ",253439.56900000002,256944.96500000003],["\nባንተው-አስጨቀንከኝ ",256944.96500000003,260459.138],["\nእሱ-እንዳለው-እያለው-እሪቱ ",260459.138,263324.64800000004],["\nሞትም-ይሙት-የት-አባቱ ",263324.64800000004,267535.6],["\nበሞትህ-ላይ-ፎክሬበት-በዳንኪራ ",267535.6,271423.19700000004],["\nትነሳለህ-ከኔ-ጋራ ",271423.19700000004,274449.433],["\nትነሳለህ-ከኔ-ጋራ ",274449.433,277346.78],["\nመህያ-በያበ-መህያ-በያበ ",277346.78,280743.287],["\nሃያ-ብዬ-አልሞትክም-አብዪ ",280743.287,287532.018],["\nመህያ-በያበ-መህያ-በያበ ",287532.018,291050.521],["\nሃያ-ብዬ-እኔ-አለሁ-አብዪ ",291050.521,294644.12600000005],["\nናና-ናና-ና ",294644.12600000005,297827.256],["\nናና-ናና-ና-ናና-ናና-ና ",297827.256,324940.793],["\nሙዚቃ-ህይዎቴ-ግዕዝ-እና-እዝል ",324940.793,328743.832],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",328743.832,332542.04],["\nበዚህ-ኑር-ብሎ-ከላይ-ካዘዘ ",332542.04,338540.58900000004],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",338540.58900000004,339441.859],["\nልጁ-ምን-ይድርግ-ክራሩን-ያዘ ",339441.859,342427.006],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",342427.006,346250],["\nአትዘንበት-አደራ-አድርጊ ",346250,349353.378],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",349353.378,352945.51],["\nማርኮት-ቅኝቱ-ምን-ያድርግ-ከንዲ ",352945.51,356132.879],["\nአራራይ-አራራይ-የተሰተች-ከላይ ",356132.879,359524.39900000003],["\nመህያ-በያበ-መህያ-በያበ ",359524.39900000003,363032.925],["\nሃያ-ብያ-መህያ-በያበ ",363032.925,367925.64599999995],["\nመህያ-በያበ-መህያ-በያበ ",367925.64599999995,373235.147],["\nሃያ-ብዬ-ገነቱን-ላባዬ ",373235.147,374539.229]],


three:
[["አጉል ኮራ በኔ እያለሽ",35605.646,39934.648],["ስለምንሽ ካልገባሽ",39934.648,43932.675],["ተግደዳሪ ጾም አዳሪ",43932.675,47613.605],["ሆነሽ ብቻ እንዳትቀሪ",47613.605,51825.373999999996],["ልብሽማ ይፈልጋል",51825.373999999996,55614.716],["ታዲያ ኩራት ምን ያደርጋል",55614.716,59535.147000000004],["ተለምነሽ ከገባሺ",59535.147000000004,63338.479999999996],["ለመላመድ ምን ያዘሽ",63338.479999999996,67312.086],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",67312.086,71228.843],["አልጣሽ አልችለውም አኔ ብቻዬን",71228.843,75114.036],["ለኔማ እሺ ወይም እምቢ መልስ ነው",75114.036,78799.43299999999],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",78799.43299999999,98232.063],["አልልም ወዲያ ወዲ እኔ ባይኖቼም አላማትርም",98232.063,104005.011],["አላውቅም ሌላ ፈልጌ ባንቺው ላይ ደሞ ማፍቀርን",104005.011,109006.575],["አለሺኝ ብዬ ስመካ ኩራቴ ከሆነ ከንቱ",109006.575,115836.575],["ምን ልበል ምን ልናገር ስደብቂኝ እውነቱ",115836.575,122008.39],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",122008.39,125931.564],["አልጣሽ አልችለውም አኔ ብቻዬን",125931.564,129931.04299999999],["ለኔማ እሺ ወይም እምቢ መልስ ነው",129931.04299999999,133734.126],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",133734.126,137614.648],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",137614.648,141537.687],["አልጣሽ አልችለውም አኔ ብቻዬን",141537.687,145216.643],["ለኔማ እሺ ወይም እምቢ መልስ ነው",145216.643,148935.64599999998],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",148935.64599999998,170313.56],["አጉል ኮራ በኔ እያለሽ",170313.56,174732.403],["ስለምንሽ ካልገባሽ",174732.403,178735.6],["ተግደዳሪ ጾም አዳሪ",178735.6,182332.925],["ሆነሽ ብቻ እንዳትቀሪ",182332.925,186422.562],["ልብሽማ ይፈልጋል",186422.562,190312.38],["ታዲያ ኩራት ምን ያደርጋል",190312.38,194199.637],["ተለምነሽ ከገባሺ",194199.637,198004.761],["ለመላመድ ምን ያዘሽ",198004.761,202017.188],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",202017.188,205902.335],["አልጣሽ አልችለውም አኔ ብቻዬን",205902.335,209820.362],["ለኔማ እሺ ወይም እምቢ መልስ ነው",209820.362,213699.841],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",213699.841,232834.761],["አልልም ወዲያ ወዲ እኔ ባይኖቼም አላማትርም",232834.761,238930.226],["አላውቅም ሌላ ፈልጌ ባንቺው ላይ ደሞ ማፍቀርን",238930.226,244330.725],["አለሺኝ ብዬ ስመካ ኩራቴ ከሆነ ከንቱ",244330.725,249807.052],["ምን ልበል ምን ልናገር ስደብቂኝ እውነቱ",249807.052,256429.863],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",256429.863,260436.41700000002],["አልጣሽ አልችለውም አኔ ብቻዬን",260436.41700000002,264515.60000000003],["ለኔማ እሺ ወይም እምቢ መልስ ነው",264515.60000000003,268318.231],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",268318.231,272239.637],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",272239.637,276119.637],["አልጣሽ አልችለውም አኔ ብቻዬን",276119.637,280005.71400000004],["ለኔማ እሺ ወይም እምቢ መልስ ነው",280005.71400000004,283931.473],["ንገሪኝ ዐረ ባክሽ ፍቅሬ ልሞት ነው",283931.473,287808.73000000004],["ምን አለ ቀርበሽ ብትረጂው ጉዳዬን",287808.73000000004,291810.47599999997],["አልጣሽ አልችለውም አኔ ብቻዬን",291810.47599999997,295616.50700000004],["ለኔማ እሺ ወይም እምቢ መልስ ነው",295616.50700000004,299632.607]]
}
  function checkTime() {
    var time = dancer.getTime();
    // find a word with the current time
    for (var i=0, il=zefen.two.length; i<il; i++) {
        var point = zefen.two[i];
        //time = time - 1000;
        if (time >= point[1]/1000 && time <= point[2]/1000) {
            var word = point[0];
            highlightWord(i, word, point[2] - point[1]);
        }
    }

  }

  function highlightWord(index, word, displaytime) {
    if($('#tlt'+index).length) {return;};
var data = {"minDisplayTime": displaytime, "loop":true,"in":{"effect":"flipInX","shuffle":false,"reverse":false,"sync":false},"out":{"effect":"fadeOutUp","shuffle":false,"reverse":false,"sync":true,
    'callback':function(){
        $('#tlt'+index).remove();
    }
    }};
        word = word.replace(/-/g, ' ');
        $('.viewport').append("<div class='tlt' id='tlt"+index+"'><ul class='texts'><li>"+word+"</li></ul></div>");
        $('#tlt'+index).textillate(data);

  }


  function loaded () {
    var
      loading = document.getElementById( 'loading' ),
      anchor  = document.createElement('A'),
      supported = Dancer.isSupported(),
      p;

    anchor.appendChild( document.createTextNode( supported ? 'Play!' : '' ) );
    anchor.setAttribute( 'href', '#' );
    //loading.innerHTML = '';
    loading.appendChild( anchor );

    if ( !supported ) {
      p = document.createElement('P');
      p.appendChild( document.createTextNode( 'Your browser does not currently support either Web Audio API or Audio Data API. The audio may play, but the visualizers will not move to the music; check out the latest Chrome or Firefox browsers!' ) );
      loading.appendChild( p );
    }

    anchor.addEventListener( 'click', function () {
      dancer.play();
      $("#loading a").text("");
      $("#loading div.load").text("");
      //document.getElementById('loading').style.display = 'none';
    timer = setInterval(checkTime, 10);
    }, false );

  }

  on();

  // For debugging
  window.dancer = dancer;

})();
