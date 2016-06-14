var elem = document.getElementById("main");
params = { width: 2500, height: 2500 };
two = new Two(params);
two.appendTo(elem);

// Make a planet orbiting sun, and moon orbiting planet
function getPostitions(angle, orbit) {
	return {
		x: Math.cos(angle * Math.PI / 180) * orbit,
		y: Math.sin(angle * Math.PI / 180) * orbit,
	};
}

var orbitalMultiplier = 0.3,
    radiusMultiplier  = .3,
    timeScale 				= 1,
    sunScale 					= 0.005,
		origin 	 	   			= 1250;

var mercuryAngle  = 0,
		mercuryOrbit  = 42 * orbitalMultiplier,
		mercuryRadius = 3 * radiusMultiplier,
		mercuryYear		= 4.1494 * timeScale;

var venusAngle  	= 0,
		venusOrbit 	  = 76 * orbitalMultiplier,
		venusRadius	 	= 9 * radiusMultiplier,
		venusYear			= 1.6255 * timeScale;

var earthAngle    = 0,
		earthOrbit 	  = 107 * orbitalMultiplier,
		earthRadius   = 9 * radiusMultiplier,
		earthYear			= 1 * timeScale;

var moonAngle 	  = 0,
		moonOrbit 	  = earthRadius * 2,
		moonRadius 	  = earthRadius / 4 * radiusMultiplier,
		moonYear			= 13.5185 * timeScale;

var marsAngle     = 0,
		marsOrbit 	  = 164 * orbitalMultiplier,
		marsRadius		= 5 * radiusMultiplier,
		marsYear			= 0.5317 * timeScale;

var jupiterAngle  = 0,
		jupiterOrbit  = 559 * orbitalMultiplier,
		jupiterRadius = 102 * radiusMultiplier,
		jupiterYear		= 0.0843 * timeScale;

var saturnAngle   = 0,
		saturnOrbit   = 1025 * orbitalMultiplier,
		saturnRadius  = 84 * radiusMultiplier,
		saturnYear		= 0.0339 * timeScale;

var uranusAngle   = 0,
		uranusOrbit   = 2062 * orbitalMultiplier,
		uranusRadius  = 34 * radiusMultiplier,
		uranusYear		= 0.0119 * timeScale;

var neptuneAngle  = 0,
		neptuneOrbit  = 3233 * orbitalMultiplier,
		neptuneRadius = 33 * radiusMultiplier,
		neptuneYear		= 0.0061 * timeScale;

var plutoAngle    = 0;
		plutoOrbit	  = 4248 * orbitalMultiplier,
		plutoRadius   = 2 * radiusMultiplier,
		plutoYear			= 0.004 * timeScale;

var sunRadius     = 1000 * sunScale;

var orbits 		   = two.makeGroup();
		

var space = two.makeRectangle(5000, 5000, 10000, 10000);
space.fill = "black";
var sun = two.makeCircle(origin, origin, sunRadius);
sun.fill = "yellow";
sun.stroke = "orange";

//////////////////////////////

var orbitForMercury = two.makeCircle(origin, origin, mercuryOrbit);
orbitForMercury.noFill();
orbitForMercury.linewidth = 4;
orbitForMercury.stroke = "#ccc";
orbits.add(orbitForMercury);

var pos = getPostitions(mercuryAngle++, mercuryOrbit),
		mercury = two.makeCircle(pos.x + origin, pos.y + origin, mercuryRadius);

mercury.stroke = "gray";
mercury.linewidth = 4;
mercury.fill = "darkgray";

//////////////////////////////////

var orbitForVenus = two.makeCircle(origin, origin, venusOrbit);
orbitForVenus.noFill();
orbitForVenus.linewidth = 4;
orbitForVenus.stroke = "#ccc";
orbits.add(orbitForVenus);

var venusPos = getPostitions(venusAngle++, venusOrbit),
		venus = two.makeCircle(venusPos.x, venusPos.y, venusRadius);

venus.stroke = "#FFFFE0";
venus.linewidth = 4;
venus.fill = "#e5e5c9";

/////////////////////////////////////////

var orbitForEarth = two.makeCircle(origin, origin, earthOrbit);
orbitForEarth.noFill();
orbitForEarth.linewidth = 4;
orbitForEarth.stroke = "#ccc";
orbits.add(orbitForEarth);

var pos = getPostitions(earthAngle++, earthOrbit),
		earth = two.makeCircle(pos.x, pos.y, earthRadius);

earth.stroke = "#6a9bc3";
earth.linewidth = 4;
earth.fill = "#4682B4";

var orbitForMoon = two.makeCircle(earth.translation.x, earth.translation.y, moonOrbit);
orbitForMoon.noFill();
orbitForMoon.linewidth = 4;
orbitForMoon.stroke = "#ccc";
orbits.add(orbitForMoon);

var pos = getPostitions(moonAngle, moonOrbit),
		moon = two.makeCircle(earth.translation.x + pos.x, earth.translation.y + pos.y, moonRadius);

moonAngle += 5;
moon.fill = "lightgray";

////////////////////////////////////////

var orbitForMars = two.makeCircle(origin, origin, marsOrbit);
orbitForMars.noFill();
orbitForMars.linewidth = 4;
orbitForMars.stroke = "#ccc";
orbits.add(orbitForMars);

var pos = getPostitions(marsAngle++, marsOrbit),
		mars = two.makeCircle(pos.x, pos.y, marsRadius);

mars.stroke = "#d14a4a";
mars.linewidth = 4;
mars.fill = "#cc3636";

/////////////////////////////////////////

var orbitForJupiter = two.makeCircle(origin, origin, jupiterOrbit);
orbitForJupiter.noFill();
orbitForJupiter.linewidth = 4;
orbitForJupiter.stroke = "#ccc";
orbits.add(orbitForJupiter);

var pos = getPostitions(jupiterAngle++, jupiterOrbit),
		jupiter = two.makeCircle(pos.x, pos.y, jupiterRadius);

jupiter.stroke = "#ffdb99";
jupiter.linewidth = 4;
jupiter.fill = "#ffc966";

/////////////////////////////////////////

var orbitForSaturn = two.makeCircle(origin, origin, saturnOrbit);
orbitForSaturn.noFill();
orbitForSaturn.linewidth = 4;
orbitForSaturn.stroke = "#ccc";
orbits.add(orbitForSaturn);

var pos = getPostitions(saturnAngle++, saturnOrbit),
		saturn = two.makeCircle(pos.x, pos.y, saturnRadius);

saturn.stroke = "#ffd700";
saturn.linewidth = 4;
saturn.fill = "#e6c200";

/////////////////////////////////////////

var orbitForUranus = two.makeCircle(origin, origin, uranusOrbit);
orbitForUranus.noFill();
orbitForUranus.linewidth = 4;
orbitForUranus.stroke = "#ccc";
orbits.add(orbitForUranus);

var pos = getPostitions(uranusAngle++, uranusOrbit),
		uranus = two.makeCircle(pos.x, pos.y, uranusRadius);

uranus.stroke = "#cbe5ff";
uranus.linewidth = 4;
uranus.fill = "#cbe5ff";

/////////////////////////////////////////

var orbitForNeptune = two.makeCircle(origin, origin, neptuneOrbit);
orbitForNeptune.noFill();
orbitForNeptune.linewidth = 4;
orbitForNeptune.stroke = "#ccc";
orbits.add(orbitForNeptune);

var pos = getPostitions(neptuneAngle++, neptuneOrbit),
		neptune = two.makeCircle(pos.x, pos.y, neptuneRadius);

neptune.stroke = "#B6CEE5";
neptune.linewidth = 4;
neptune.fill = "#B6CEE5";

/////////////////////////////////////////

var orbitForPluto = two.makeCircle(origin, origin, plutoOrbit);
orbitForPluto.noFill();
orbitForPluto.linewidth = 4;
orbitForPluto.stroke = "#ccc";
orbits.add(orbitForPluto);

var pos = getPostitions(plutoAngle++, plutoOrbit),
		pluto = two.makeCircle(pos.x, pos.y, plutoRadius);

pluto.stroke = "#C97F7F";
pluto.linewidth = 4;
pluto.fill = "#C97F7F";

/////////////////////////////////////////

two.bind("update", function (frameCount) {
	var pos = getPostitions(earthAngle++, earthOrbit);
	earth.translation.x = pos.x + origin;
	earth.translation.y = pos.y + origin;
	earthAngle += earthYear;

	var moonPos = getPostitions(moonAngle, moonOrbit);
	moon.translation.x = earth.translation.x + moonPos.x;
	moon.translation.y = earth.translation.y + moonPos.y;
	moonAngle += moonYear;
	orbitForMoon.translation.x = earth.translation.x;
	orbitForMoon.translation.y = earth.translation.y;

	var mercuryPos = getPostitions(mercuryAngle++, mercuryOrbit);
	mercury.translation.x = mercuryPos.x + origin;
	mercury.translation.y = mercuryPos.y + origin;
	mercuryAngle += mercuryYear;

	var venusPos = getPostitions(venusAngle++, venusOrbit);
	venus.translation.x = venusPos.x + origin;
	venus.translation.y = venusPos.y + origin;
	venusAngle += venusYear;

	var marsPos = getPostitions(marsAngle++, marsOrbit);
	mars.translation.x = marsPos.x + origin;
	mars.translation.y = marsPos.y + origin;
	marsAngle += marsYear;

	var jupiterPos = getPostitions(jupiterAngle++, jupiterOrbit);
	jupiter.translation.x = jupiterPos.x + origin;
	jupiter.translation.y = jupiterPos.y + origin;
	jupiterAngle += jupiterYear;

	var saturnPos = getPostitions(saturnAngle++, saturnOrbit);
	saturn.translation.x = saturnPos.x + origin;
	saturn.translation.y = saturnPos.y + origin;
	saturnAngle += saturnYear;

	var uranusPos = getPostitions(uranusAngle++, uranusOrbit);
	uranus.translation.x = uranusPos.x + origin;
	uranus.translation.y = uranusPos.y + origin;
	uranusAngle += uranusYear;

	var neptunePos = getPostitions(neptuneAngle++, neptuneOrbit);
	neptune.translation.x = neptunePos.x + origin;
	neptune.translation.y = neptunePos.y + origin;
	neptuneAngle += neptuneYear;

	var plutoPos = getPostitions(plutoAngle++, plutoOrbit);
	pluto.translation.x = plutoPos.x + origin;
	pluto.translation.y = plutoPos.y + origin;
	plutoAngle += plutoYear;
});

orbits.visible = true;
two.play();