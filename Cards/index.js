const { default: axios } = require("axios");
const { log, count } = require("console")
const { JSDOM } = require('jsdom');
const raw = `

	<section id="box" class="box-page">
				
		<section class="box-list">
		<h3>MAIN BOXES</h3>
		<p></p>
		<ul>
	        <li>
			<a href="borrelswordslash/" target="_blank">
			<img src="borrelswordslash/v7rlfn26w7qt/banner.jpg" alt="Borrelsword Slash" class="banner">
			<img src="../../images/common/new_icon.png" alt="NEW" class="new">			</a>
		</li>
                <li>
			<a href="strikerexpansion/" target="_blank">
			<img src="strikerexpansion/w2x822b4puv7/banner.jpg" alt="Striker Expansion" class="banner">
						</a>
		</li>
                <li>
			<a href="phoenixblaze/" target="_blank">
			<img src="phoenixblaze/5tjlonz8p87q/banner.jpg" alt="Phoenix Blaze" class="banner">
						</a>
		</li>
                <li>
			<a href="deepemotion/" target="_blank">
			<img src="deepemotion/5oxdlas777c4/banner.jpg" alt="Deep Emotion" class="banner">
						</a>
		</li>
                <li>
			<a href="zillionthunder/" target="_blank">
			<img src="zillionthunder/1m1ygtp63ldd/banner.jpg" alt="Zillion Thunder" class="banner">
						</a>
		</li>
                <li>
			<a href="solflarelightning/" target="_blank">
			<img src="solflarelightning/3j1rmxicq26z/banner.jpg" alt="Solflare Lightning" class="banner">
						</a>
		</li>
        		<li class="more">
			<span>More</span>
		</li>		
        <li style="display: none;">
			<a href="raidersrequiem/" target="_blank">
			<img src="raidersrequiem/3l30mm12kvpz/banner.jpg" alt="Raider's Requiem" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="futurecircuit/" target="_blank">
			<img src="futurecircuit/dtrk73hyoxse/banner.jpg" alt="Future Circuit" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="bravervictory/" target="_blank">
			<img src="bravervictory/f1vb2453tr8x/banner.jpg" alt="Braver Victory" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="linkrevolution/" target="_blank">
			<img src="linkrevolution/trkm9gb9zld3/banner.jpg" alt="Link Revolution" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="shiningsunrise/" target="_blank">
			<img src="shiningsunrise/h1kc7y2s6wxu/banner.jpg" alt="Shining Sunrise" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="crossdimension/" target="_blank">
			<img src="crossdimension/xly1xpa7hs98/banner.jpg" alt="Cross Dimension" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="maximumgustav/" target="_blank">
			<img src="maximumgustav/iz8w0bdpfhro/banner.jpg" alt="Maximum Gustav" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="fantasticarc/" target="_blank">
			<img src="fantasticarc/6cto2u2126jy/banner.jpg" alt="Fantastic Arc" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="chaoticsoldiers/" target="_blank">
			<img src="chaoticsoldiers/6we74g687qwe/banner.jpg" alt="Chaotic Soldiers" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="pendulumgenesis/" target="_blank">
			<img src="pendulumgenesis/images//banner.jpg" alt="Pendulum Genesis" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="darknessgimmick/" target="_blank">
			<img src="darknessgimmick/images//banner.jpg" alt="Darkness Gimmick" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="eternalstream/" target="_blank">
			<img src="eternalstream/images//banner.jpg" alt="Eternal Stream" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="antinomictheory/" target="_blank">
			<img src="antinomictheory/images//banner.jpg" alt="Antinomic Theory" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="infiniteray/" target="_blank">
			<img src="infiniteray/images//banner.jpg" alt="Infinite Ray" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sharkfang/" target="_blank">
			<img src="sharkfang/images//banner.jpg" alt="Shark Fang" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="shininghope/" target="_blank">
			<img src="shininghope/images//banner.jpg" alt="Shining Hope" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="infernitydestruction/" target="_blank">
			<img src="infernitydestruction/images//banner.jpg" alt="Infernity Destruction" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="witchssorcery/" target="_blank">
			<img src="witchssorcery/images//banner.jpg" alt="Witch’s Sorcery" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="truthuniverse/" target="_blank">
			<img src="truthuniverse/images//banner.jpg" alt="Truth Universe" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="judgementforce/" target="_blank">
			<img src="judgementforce/images//banner.jpg" alt="Judgement Force" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="futurehorizon/" target="_blank">
			<img src="futurehorizon/images//banner.jpg" alt="Future Horizon" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="aerial_assault/" target="_blank">
			<img src="aerial_assault/images//banner.jpg" alt="Aerial Assault" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="dark_dimension/" target="_blank">
			<img src="dark_dimension/images//banner.jpg" alt="Dark Dimension" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="valhalla_calling/" target="_blank">
			<img src="valhalla_calling/images//banner.jpg" alt="Valhalla Calling" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="cybernetic_rebellion/" target="_blank">
			<img src="cybernetic_rebellion/images//banner.jpg" alt="CYBERNETIC REBELLION" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="blazing_rose/" target="_blank">
			<img src="blazing_rose/images//banner.jpg" alt="BLAZING ROSE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="warriors_unite/" target="_blank">
			<img src="warriors_unite/images//banner.jpg" alt="WARRIORS UNITE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="absolute_inferno/" target="_blank">
			<img src="absolute_inferno/images//banner.jpg" alt="ABSOLUTE INFERNO" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="revolution_beginning/" target="_blank">
			<img src="revolution_beginning/images//banner.jpg" alt="REVOLUTION BEGINNING" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="blackstorm_rising/" target="_blank">
			<img src="blackstorm_rising/images//banner.jpg" alt="BLACKSTORM RISING" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="stardust_acceleration/" target="_blank">
			<img src="stardust_acceleration/images//banner.jpg" alt="STARDUST ACCESELERATION" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="gaia_genesis/" target="_blank">
			<img src="gaia_genesis/images//banner.jpg" alt="GAIA GENESIS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="burning_nova/" target="_blank">
			<img src="burning_nova/images//banner.jpg" alt="BURNING NOVA" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="crusader_battlegrounds/" target="_blank">
			<img src="crusader_battlegrounds/images//banner.jpg" alt="CRUSADERS' BATTLEGROUNDS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="valiant_souls/" target="_blank">
			<img src="valiant_souls/images//banner.jpg" alt="VALIANT SOULS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="abyss_encounters/" target="_blank">
			<img src="abyss_encounters/images//banner.jpg" alt="ABYSS ENCOUNTERS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="primal_burst/" target="_blank">
			<img src="primal_burst/images//banner.jpg" alt="PRIMAL BURST" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="galactic_origin/" target="_blank">
			<img src="galactic_origin/images//banner.jpg" alt="GALACTIC ORIGIN" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="generation_next/" target="_blank">
			<img src="generation_next/images//banner.jpg" alt="GENERATION NEXT" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="electric_overload/" target="_blank">
			<img src="electric_overload/images//banner.jpg" alt="ELECTRIC OVERLOAD" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="crimson_kingdom/" target="_blank">
			<img src="crimson_kingdom/images//banner.jpg" alt="CRIMSON KINGDOM" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="chaotic_compliance/" target="_blank">
			<img src="chaotic_compliance/images//banner.jpg" alt="CHAOSTIC COMPLIANCE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="valkyries_rage/" target="_blank">
			<img src="valkyries_rage/images//banner.jpg" alt="VALKYRIE'S RAGE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="neo-impact/" target="_blank">
			<img src="neo-impact/images//banner.jpg" alt="NEO-IMPACT" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="the_ultimate_rising/" target="_blank">
			<img src="the_ultimate_rising/images//banner.jpg" alt="THE ULTIMATE RISING" class="banner">
						</a>
		</li>
        		</ul>
		</section>
		
		<section class="box-list">
		<h3>MINI BOXES</h3>
		<p></p>
		<ul>
	        <li>
			<a href="rayofaura/" target="_blank">
			<img src="rayofaura/0lpa3la2347u/banner.jpg" alt="レイ・オブ・オーラ" class="banner">
			<img src="../../images/common/new_icon.png" alt="NEW" class="new">			</a>
		</li>
                <li>
			<a href="destroyerofthephantasm/" target="_blank">
			<img src="destroyerofthephantasm/9gh7b5bowwfp/banner.jpg" alt="デストロイヤー・オブ・ファンタズム" class="banner">
						</a>
		</li>
                <li>
			<a href="screamofresistance/" target="_blank">
			<img src="screamofresistance/bmvk91u7nk4u/banner.jpg" alt="スクリーム・オブ・レジスタンス" class="banner">
						</a>
		</li>
                <li>
			<a href="tachyonofgalaxy/" target="_blank">
			<img src="tachyonofgalaxy/o0lward7xck5/banner.jpg" alt="タキオン・オブ・ギャラクシー" class="banner">
						</a>
		</li>
                <li>
			<a href="explosionofmeteor/" target="_blank">
			<img src="explosionofmeteor/fwzfx6wh7827/banner.jpg" alt="エクスプロージョン・オブ・メテオ" class="banner">
						</a>
		</li>
                <li>
			<a href="worldofbarian/" target="_blank">
			<img src="worldofbarian/vangs77hb1hi/banner.jpg" alt="ワールド・オブ・バリアン" class="banner">
						</a>
		</li>
        		<li class="more">
			<span>More</span>
		</li>		
        <li style="display: none;">
			<a href="wingsofclearness/" target="_blank">
			<img src="wingsofclearness/x06jsm76niv6/banner.jpg" alt="ウィング・オブ・クリアネス" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="pulseofthequasars/" target="_blank">
			<img src="pulseofthequasars/bw3n6cm5hcv5/banner.jpg" alt="パルス・オブ・クェーサー" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="lordofborrel/" target="_blank">
			<img src="lordofborrel/8bgpv46ljq5v/banner.jpg" alt="Lord of Borrel" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="armsofgiant/" target="_blank">
			<img src="armsofgiant/tnpqmwm1a7qe/banner.jpg" alt="Arms of Giant" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="stageoftrickstar/" target="_blank">
			<img src="stageoftrickstar/7hg860fauknf/banner.jpg" alt="Stage of Trickstar" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="starsofsynchro/" target="_blank">
			<img src="starsofsynchro/sodzhz77m5g8/banner.jpg" alt="Stars of synchro" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="heartofxyz/" target="_blank">
			<img src="heartofxyz/1c0yj4cno6pl/banner.jpg" alt="Heart of Xyz" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="energyofgigarays/" target="_blank">
			<img src="energyofgigarays/d42cdtxuv7b6/banner.jpg" alt="Energy of Gigarays" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="phantomofrebellion/" target="_blank">
			<img src="phantomofrebellion/r8u35r9hujg7/banner.jpg" alt="Phantom of Rebellion" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="forceofinfinity/" target="_blank">
			<img src="forceofinfinity/xoo10nfyx9jl/banner.jpg" alt="Force of Infinity" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="ideaofarmageddon/" target="_blank">
			<img src="ideaofarmageddon/images//banner.jpg" alt="イデア・オブ・アーマゲドン" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="artsofatlantis/" target="_blank">
			<img src="artsofatlantis/images//banner.jpg" alt="アーツ・オブ・アトランティス" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="thekingofvermilion/" target="_blank">
			<img src="thekingofvermilion/images//banner.jpg" alt="ザ・キング・オブ・ヴァーミリオン" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="signofharpies/" target="_blank">
			<img src="signofharpies/images//banner.jpg" alt="サイン・オブ・ハーピィズ" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="photonofgalaxy/" target="_blank">
			<img src="photonofgalaxy/images//banner.jpg" alt="Photon of Galaxy" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="rageofvolcano/" target="_blank">
			<img src="rageofvolcano/images//banner.jpg" alt="Rage of Volcano" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="voltageofthemetal/" target="_blank">
			<img src="voltageofthemetal/images//banner.jpg" alt="Voltage of the Metal" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="arenaofsanctuary/" target="_blank">
			<img src="arenaofsanctuary/images//banner.jpg" alt="Arena of Sanctuary" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="chronicleofglory/" target="_blank">
			<img src="chronicleofglory/images//banner.jpg" alt="Chronicle of Glory" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="flamesoftheheart/" target="_blank">
			<img src="flamesoftheheart/images//banner.jpg" alt="Flames of the Heart" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="fortressofgears/" target="_blank">
			<img src="fortressofgears/images//banner.jpg" alt="Fortress of Gears" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="mastersofshadow/" target="_blank">
			<img src="mastersofshadow/images//banner.jpg" alt="Masters of Shadow" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="soul_of_resurrection/" target="_blank">
			<img src="soul_of_resurrection/images//banner.jpg" alt="Soul of Resurrection" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="spirit_of_the_beast/" target="_blank">
			<img src="spirit_of_the_beast/images//banner.jpg" alt="Spirit of the Beast" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="curse_of_dread/" target="_blank">
			<img src="curse_of_dread/images//banner.jpg" alt="Curse of Dread" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="guardians_of_rock/" target="_blank">
			<img src="guardians_of_rock/images//banner.jpg" alt="GUARDIANS OF ROCK" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="lords_of_shining/" target="_blank">
			<img src="lords_of_shining/images//banner.jpg" alt="LORDS OF SHINING" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="dimension_of_the_wizards/" target="_blank">
			<img src="dimension_of_the_wizards/images//banner.jpg" alt="DIMENSION OF THE WIZARDS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="tornado_of_phantoms/" target="_blank">
			<img src="tornado_of_phantoms/images//banner.jpg" alt="TORNADO OF PHANTOMS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="secrets_of_the_ancients/" target="_blank">
			<img src="secrets_of_the_ancients/images//banner.jpg" alt="SECRETS OF THE ANCIENTS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="power_of_bravery/" target="_blank">
			<img src="power_of_bravery/images//banner.jpg" alt="POWER OF BRAVERY" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="empire_of_scarlet/" target="_blank">
			<img src="empire_of_scarlet/images//banner.jpg" alt="EMPIRE OF SCARLET" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="clash_of_wings/" target="_blank">
			<img src="clash_of_wings/images//banner.jpg" alt="CLASH OF WINGS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="visions_of_ice/" target="_blank">
			<img src="visions_of_ice/images//banner.jpg" alt="VISIONS OF ICE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="rampage_of_the_forest/" target="_blank">
			<img src="rampage_of_the_forest/images//banner.jpg" alt="RAMPAGE OF THE FOREST" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="resonance_of_contrast/" target="_blank">
			<img src="resonance_of_contrast/images//banner.jpg" alt="RESONANCE OF CONTRAST" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="blades_of_spirits/" target="_blank">
			<img src="blades_of_spirits/images//banner.jpg" alt="BLADES OF SPIRITS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="servants_of_kings/" target="_blank">
			<img src="servants_of_kings/images//banner.jpg" alt="SERVANTS OF KINGS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="echoes_of_silence/" target="_blank">
			<img src="echoes_of_silence/images//banner.jpg" alt="ECHOES OF SILENCE" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="dawn_of_destiny/" target="_blank">
			<img src="dawn_of_destiny/images//banner.jpg" alt="DAWN OF DESTINY" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="land_of_the_titans/" target="_blank">
			<img src="land_of_the_titans/images//banner.jpg" alt="LAND OF THE TITANS" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="wonders_of_the_sky/" target="_blank">
			<img src="wonders_of_the_sky/images//banner.jpg" alt="WONDERS OF THE SKY" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="flame_of_the_tyrant/" target="_blank">
			<img src="flame_of_the_tyrant/images//banner.jpg" alt="FLAME OF THE TYRANT" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="age_of_discovery/" target="_blank">
			<img src="age_of_discovery/images//banner.jpg" alt="AGE OF DISCOVERY" class="banner">
						</a>
		</li>
        		</ul>
		</section>
		
		<section class="box-list">
		<h3>STRUCTURE DECK</h3>
		<p></p>
		<ul>
	        <li>
			<a href="sdex-cynetraging/" target="_blank">
			<img src="sdex-cynetraging/mlfhq79d7myn/banner.jpg" alt="STRUCTURE DECK EX - Cynet Raging -" class="banner">
			<img src="../../images/common/new_icon.png" alt="NEW" class="new">			</a>
		</li>
                <li>
			<a href="sdex-zombienecromancy/" target="_blank">
			<img src="sdex-zombienecromancy/7wsvgpkz1jdq/banner.jpg" alt="STRUCTURE DECK EX - Zombie Necromancy -" class="banner">
						</a>
		</li>
                <li>
			<a href="sdex-magicianschronicle/" target="_blank">
			<img src="sdex-magicianschronicle/a75jo6hdl9re/banner.jpg" alt="STRUCTURE DECK EX - Magician's Chronicle -" class="banner">
						</a>
		</li>
                <li>
			<a href="sdex-spiritcharmers/" target="_blank">
			<img src="sdex-spiritcharmers/y9scxx1p6gib/banner.jpg" alt="STRUCTURE DECK EX - Spirit Charmers -" class="banner">
						</a>
		</li>
                <li>
			<a href="sdex-blazinggearfried/" target="_blank">
			<img src="sdex-blazinggearfried/5zqsw2dipm0i/banner.jpg" alt="STRUCTURE DECK EX - Blazing Gearfried -" class="banner">
						</a>
		</li>
                <li>
			<a href="sdex-oddeyeschallenger/" target="_blank">
			<img src="sdex-oddeyeschallenger/bcvdsn2w4ba0/banner.jpg" alt="STRUCTURE DECK EX - Odd-Eyes Challenger -" class="banner">
						</a>
		</li>
        		<li class="more">
			<span>More</span>
		</li>		
        <li style="display: none;">
			<a href="sdex-secretofmagicians/" target="_blank">
			<img src="sdex-secretofmagicians/z06e0uel9lqp/banner.jpg" alt="STRUCTURE DECK EX - Secret of Magicians -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-imperialjoker/" target="_blank">
			<img src="sdex-imperialjoker/i8o7gxhn8i0i/banner.jpg" alt="STRUCTURE DECK EX - Imperial Joker -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-thousandillusion/" target="_blank">
			<img src="sdex-thousandillusion/w3pgvkokbttm/banner.jpg" alt="STRUCTURE DECK EX - Thousand Illusion -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-cybersecode/" target="_blank">
			<img src="sdex-cybersecode/8tuxezgsdvug/banner.jpg" alt="STRUCTURE DECK EX - Cyberse Code -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-ruddyroseburning/" target="_blank">
			<img src="sdex-ruddyroseburning/xaaumow0actd/banner.jpg" alt="STRUCTURE DECK EX - Ruddy Rose Burning -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-bravehope/" target="_blank">
			<img src="sdex-bravehope/y7ju5s9l1exb/banner.jpg" alt="STRUCTURE DECK EX - Brave Hope -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-tellarknightadvent/" target="_blank">
			<img src="sdex-tellarknightadvent/dajkefb8bl1h/banner.jpg" alt="STRUCTURE DECK EX - Tellarknight Advent -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-swordofpaladin/" target="_blank">
			<img src="sdex-swordofpaladin/xajyynrsln8w/banner.jpg" alt="STRUCTURE DECK EX - Sword of Paladin -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-cyberstyleextreme/" target="_blank">
			<img src="sdex-cyberstyleextreme/rgcwpl15suon/banner.jpg" alt="STRUCTURE DECK EX - Cyber Style Extreme -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-dddapocalypse/" target="_blank">
			<img src="sdex-dddapocalypse/images//banner.jpg" alt="STRUCTURE DECK EX - D/D/D Apocalypse -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-magiciansarc/" target="_blank">
			<img src="sd-magiciansarc/images//banner.jpg" alt="STRUCTURE DECK - Magicians Arc -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-evildomination/" target="_blank">
			<img src="sdex-evildomination/images//banner.jpg" alt="STRUCTURE DECK EX - Evil Domination -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-riseofgaia/" target="_blank">
			<img src="sdex-riseofgaia/images//banner.jpg" alt="STRUCTURE DECK EX - Rise of Gaia -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-stardustnexus/" target="_blank">
			<img src="sdex-stardustnexus/images//banner.jpg" alt="STRUCTURE DECK EX - Stardust Nexus -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-blueeyesevolution/" target="_blank">
			<img src="sdex-blueeyesevolution/images//banner.jpg" alt="STRUCTURE DECK EX - Blue-Eyes Evolution -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-talesofthenobleknights/" target="_blank">
			<img src="sdex-talesofthenobleknights/images//banner.jpg" alt="STRUCTURE DECK EX - Tales of the Noble Knights -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-gagagaxyz/" target="_blank">
			<img src="sd-gagagaxyz/images//banner.jpg" alt="STRUCTURE DECK - GAgaga Xyz -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-returnofthefirekings/" target="_blank">
			<img src="sdex-returnofthefirekings/images//banner.jpg" alt="STRUCTURE DECK EX - RETURN OF THE FIRE KINGS -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-herogeneration/" target="_blank">
			<img src="sd-herogeneration/images//banner.jpg" alt="STRUCTURE DECK - HERO GANERATION -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-gladiatorsstorm/" target="_blank">
			<img src="sdex-gladiatorsstorm/images//banner.jpg" alt="STRUCTURE DECK EX - Gladiator's Storm -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-dragunityoverdrive/" target="_blank">
			<img src="sdex-dragunityoverdrive/images//banner.jpg" alt="STRUCTURE DECK EX - Dragunity Overdrive -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-kings_resonance/" target="_blank">
			<img src="sdex-kings_resonance/images//banner.jpg" alt="STRUCTURE DECK EX - King's Resonance -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-masters_of_chaos/" target="_blank">
			<img src="sdex-masters_of_chaos/images//banner.jpg" alt="STRUCTURE DECK EX - Masters of Chaos -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-full_metal_desperado/" target="_blank">
			<img src="sdex-full_metal_desperado/images//banner.jpg" alt="STRUCTURE DECK EX - FULL METAL DESPERADO -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-return_of_the_red-eyes/" target="_blank">
			<img src="sd-return_of_the_red-eyes/images//banner.jpg" alt="STRUCTURE DECK - RETURN OF THE RED-EYES -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-neos_fusion/" target="_blank">
			<img src="sdex-neos_fusion/images//banner.jpg" alt="STRUCTURE DECK EX - NEOS FUSION -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-ancient_gear_awakening/" target="_blank">
			<img src="sdex-ancient_gear_awakening/images//banner.jpg" alt="STRUCTURE DECK EX - ANCIENT GEAR AWAKENING -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd_swordbound_silence/" target="_blank">
			<img src="sd_swordbound_silence/images//banner.jpg" alt="STRUCTURE DECK - SWORDBOUND SILENCE -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex-the_white_dragon_of_legend/" target="_blank">
			<img src="sdex-the_white_dragon_of_legend/images//banner.jpg" alt="STRUCTURE DECK EX - THE WHITE DRAGON OF LEGEND -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-synchro_connection/" target="_blank">
			<img src="sd-synchro_connection/images//banner.jpg" alt="STRUCTURE DECK - SYNCHRO CONNECTION -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sdex_spellbound_silence/" target="_blank">
			<img src="sdex_spellbound_silence/images//banner.jpg" alt="STRUCTURE DECK EX - SPELLBOUND SILENCE -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-dragonic_knights/" target="_blank">
			<img src="sd-dragonic_knights/images//banner.jpg" alt="STRUCTURE DECK - DRAGONIC KNIGHTS -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-destiny_rules/" target="_blank">
			<img src="sd-destiny_rules/images//banner.jpg" alt="STRUCTURE DECK - DESTINY RULES -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-hero_rising/" target="_blank">
			<img src="sd-hero_rising/images//banner.jpg" alt="STRUCTURE DECK - HERO RISING -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-legendary_warriors/" target="_blank">
			<img src="sd-legendary_warriors/images//banner.jpg" alt="STRUCTURE DECK - LEGENDARY WARRIORS -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-doragonic_force/" target="_blank">
			<img src="sd-doragonic_force/images//banner.jpg" alt="STRUCTURE DECK - DRAGONIC FORCE -" class="banner">
						</a>
		</li>
                <li style="display: none;">
			<a href="sd-sorcerers_alliance/" target="_blank">
			<img src="sd-sorcerers_alliance/images//banner.jpg" alt="STRUCTURE DECK - SORCERER'S ALLIANCE -" class="banner">
						</a>
		</li>
        		</ul>
		</section>

	</section>	



`

let raw_dup = raw;

const sections = [];

const stringTOhtml = (str) => {
    return new JSDOM(str)
}




const getProdoData = (html) => {
    const protoData = {};

    Object.keys(Object.getPrototypeOf(html)).map(k => {
        const protoD = html.getAttribute(k);
        if (protoD) {
            protoData[k] = protoD;
        }

    });

    return protoData
}



const search = (t, s, e) => {;




    if (s && e) {
        let elng = e.length;
        s = t.indexOf(s);
        e = t.indexOf(e);
        t = t.slice(s, e + elng);
        // t = t.slice(s, e + e.length);



        // return t.slice(, t.indexOf(e) + e.length)
    } else if (s && !e) {
        s = t.indexOf(s);
        t = t.slice(s);
        // return t.slice(t.indexOf(s))
    } else if (!s && e) {
        let elng = e.length;
        e = t.indexOf(e);
        t = t.slice(0, e + elng);
        // return t.slice(0, t.indexOf(e) + e.length)
    }

    return [t, s, e]
}



const extract_from_table = (table, toS) => {
    switch (toS) {
        case "td":
            return table.querySelectorAll("td")

        default:
            break;
    }

}

let br = 0;

do {
    br++
    const searched = search(raw_dup, "<section", "</section>");


    if (searched[1] == -1 || searched[2] == -1) {
        break
    }
    sections.push(searched[0])
    raw_dup = raw_dup.slice(raw_dup.indexOf("</section>") + "</section>".length);

    // sections.push(search(raw_dup, "<section", "</section>"))
    // raw_dup = search(raw_dup, "</section>", undefined);
} while (br < 10000);

const manifiest = {};

for (let i = 0; i < sections.length; i++) {

    // console.log("-------------------------------------------------");
    // console.log(sections[i]);
    // console.log("-------------------------------------------------");

    let dom = new JSDOM(sections[i]);
    dom = dom.window.document;
    const ul = dom.querySelector("ul");
    const li = dom.querySelectorAll("li");
    const setData = [];
    for (let i = 0; i < li.length; i++) {



        const a = li[i].querySelector("a");
        const img = li[i].querySelector("img");
        let proto_A
        let proto_IMG
        const protoData = {}
        if (a) {
            proto_A = getProdoData(a);
            protoData.href = proto_A.href
        }

        if (img) {
            proto_IMG = getProdoData(img);
            protoData.src = proto_IMG.src
            protoData.alt = proto_IMG.alt
        }





        if (protoData.href && protoData.src && protoData.alt) {
            setData.push(protoData)
        }


    }


    switch (i) {
        case 0:
            manifiest["main_box"] = setData;
            break;

        case 1:
            manifiest["mini_box"] = setData;
            break;


        case 2:
            manifiest["structure_deck"] = setData;
            break;
    }




}


// const getCards = async(pack) => {
//     const BASE = "https://www.konami.com/yugioh/duel_links/en/box/";
//     const resp = (await axios.get(BASE + pack.href)).data;


// }
// https://www.konami.com/yugioh/duel_links/images/card.php?V3hTSU0wQStBUXFnRGhYckpQNVVQQT09

// https://www.konami.com/yugioh/duel_links/yugioh/duel_links/images/card.php?V3hTSU0wQStBUXFnRGhYckpQNVVQQT09






// axios.get("https://www.konami.com/yugioh/duel_links/images/V3hTSU0wQStBUXFnRGhYckpQNVVQQT09").then(r => console.log(r.status))


// https://www.konami.com/yugioh/duel_links/en/box/borrelswordslash/card_view/card.php?V3hTSU0wQStBUXFnRGhYckpQNVVQQT09


// https://www.konami.com/yugioh/card_view/duel_links/images/V3hTSU0wQStBUXFnRGhYckpQNVVQQT09


// axios.get("https://www.google.com/search?sca_esv=9267af3241730e66&sxsrf=ADLYWIJgVjTKQleCcWRXX-rpInxmuz7HyQ:1722620256953&q=dragon&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd3zC4y7ZXTSrvvSBSNjw8fVX3G3tS3bGsqQeBBxb6Hy8eIuagYXWKVWI6_Sw2dhxH6_A2u8dTR_ejg-lVOsSwqt71JELMJ1CwJzu70wamqRqMHkEh8fWNz6pQtKEoOgIgNjlmetAPrKSjDygeBLXxzdavrfiE8eSfmTZlzi3i5aCfgbo0Q&sa=X&ved=2ahUKEwjJm_7D7NaHAxXKqpUCHSE_D2EQtKgLegQIGRAB&biw=1522&bih=707&dpr=1")
//     .then(r => {
//         log(r.data)
//     })

const gHtml = (html) => {
        return html.outerHTML
    }
    (async() => {
        const card = 'Sunvine_Gardna';
        const query = "yugioh_duel_links_" + card;
        const url = `https://www.bing.com/images/search?q=${query}&qs=n&form=QBIR&sp=-1&lq=0&pq=${query}&sc=10-6&cvid=4DFAC9330B0E41E8B743AE0F0A1EE6BB&ghsh=0&ghacc=0&first=1`;

        const res = (await (axios.get(url))).data


        try {
            fs.mkdirSync("./Cards")
        } catch (error) {

        }

        try {
            fs.mkdirSync("./Cards/" + card + "/")
        } catch (error) {

        }


        // mimg
        const text = search(res, '<div id="vm_c">', 'id="fbdialog_title"');
        const dom = stringTOhtml(text).window.document;
        let content = dom.querySelectorAll("ul");
        const final = [];
        for (let i = 1; i < content.length; i++) {
            try {
                const links = content[i].querySelectorAll("li");
                for (let j = 0; j < 3; j++) {
                    if (links[j] != undefined) {
                        final.push(links[j])
                    }
                }
            } catch (error) {

            }

        }




        const fs = require('fs');
        const path = require('path');

        async function downloadImage(url, outputPath) {
            try {
                const response = await axios.get(url, { responseType: 'arraybuffer' });

                // Escribe la imagen en el archivo
                fs.writeFileSync(outputPath, response.data);
                console.log('Imagen descargada y guardada en', outputPath);
            } catch (error) {
                console.error('Error al descargar o guardar la imagen:', error);
            }
        }



        for (let i = 0; i < final.length; i++) {
            try {
                const img = final[i].getElementsByClassName("mimg");

                if (img.length != 0) {

                    let url = img[0].src;
                    let toDelete = [search(url, 'w=', "&c")[1], search(url, 'w=', "&c")[2] + 1];
                    toDelete = url.substring(toDelete[0], toDelete[1]);
                    url = url.replace(toDelete, "");



                    const output = `./Cards/${card}/` + card + "_" + i + ".png";
                    await downloadImage(url, output);

                }

                // `?w=`&c=

            } catch (error) {

            }

        }



        // content = content.querySelectorAll("td")[1]

        // content = content.getElementsByClassName("itm")

        // let img = content[0].querySelector("img").getAttribute("src2").replace("&w=42&h=42", "");

        // console.log(img);





    })()