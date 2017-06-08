'use strict'

var MAP_ELEMENT         = document.querySelector('#map')
var MAP_CONTAINER       = document.querySelector('#map > g')
var SHRINE_LIST_ELEMENT = document.querySelector('#shrine-list')
var CONTAINER_ELEMENT   = document.querySelector('.container')
var ZOOM_100_ELEMENT    = document.querySelector('#zoom-100');
var ZOOM_200_ELEMENT    = document.querySelector('#zoom-200');
var ZOOM_300_ELEMENT    = document.querySelector('#zoom-300');
var MAP_WIDTH           = 3;
var MAP_HEIGHT          = 3;
var TILE_WIDTH          = 750;
var TILE_HEIGHT         = 625;

var completedShrineIds = loadCompleted();
saveCompleted();


function saveCompleted() {
	localStorage.setItem('version', 1);
	localStorage.setItem('shrines', JSON.stringify(completedShrineIds));
}

function loadCompleted() {
	try {
		var loaded = localStorage.getItem('shrines');
		if (loaded && loaded !== 'null')
			return JSON.parse(loaded);
	} catch (err) {
		console.error('Failed to load persisted shrine data: ', err);
		console.error(localStorage.getItem('shrines'));
	}
	return {};
}

function isShrineVisible(shrine) {
	return completedShrineIds[shrine.id] || false;
}

function onCheckedShrine(event) {
	var shrine = this;
	var listTitleElement = document.querySelector('.shrine-list-title');
	var shrineTitleElement = document.querySelector('.region.id-' + shrine.region.id + ' > .region-title');
	var shrineIconElement = document.querySelector('.shrine-icon.id-' + shrine.id);

	completedShrineIds[shrine.id] = !completedShrineIds[shrine.id];
	listTitleElement.innerText = renderShrineListTitle();
	shrineTitleElement.innerText = renderRegionTitle(shrine.region);
	shrineIconElement.setAttributeNS(null, 'visibility', isShrineVisible(shrine) ? 'visible' : 'hidden');
	saveCompleted();
}

function onCheckedRegion(event) {
	if(this)
		MAP_CONTAINER.setAttributeNS(null, 'clip-path', 'url(#clip-' + this.id + ')');
	else
		MAP_CONTAINER.setAttributeNS(null, 'clip-path', '');
}

function renderShrine(shrine) {
	var e = document.createElementNS('http://www.w3.org/2000/svg', 'image');
	e.setAttributeNS(null, 'class', 'shrine-icon id-' + shrine.id);
	e.setAttributeNS(null, 'width', 25);
	e.setAttributeNS(null, 'height', 25);
	e.setAttributeNS(null, 'x', shrine.x - 12.5);
	e.setAttributeNS(null, 'y', shrine.y - 12.5);
	e.setAttributeNS(null, 'href', 'images/shrine.png');
	e.setAttributeNS(null, 'visibility', isShrineVisible(shrine) ? 'visible' : 'hidden');

	var tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'title');
	tooltip.textContent = shrine.name;
	e.appendChild(tooltip);

	return e;
}

function renderRegionTitle(region) {
	var shrines = SHRINES_BY_REGION_ID[region.id];
	var total = shrines.length;
	var completed = _.reduce(shrines, function(result, shrine) {
		return result + Number(isShrineVisible(shrine));
	}, 0);
	return region.name + ' ( ' + completed + ' / ' + total + ' )';
}

function renderShrineListTitle() {
	var completed = _.filter(_.values(completedShrineIds)).length;
	var total = SHRINES.length;
	return 'SHRINE LIST ( ' + completed + ' / ' + total + ' )';
}

function renderShrineList() {
	var regionIds = Object.keys(SHRINES_BY_REGION_ID);
	var e = document.createElement('div');

	var titleElement = document.createElement('div');
	titleElement.innerText = renderShrineListTitle();
	titleElement.className = 'shrine-list-title';
	e.appendChild(titleElement);

	var descElement = document.createElement('div');
	descElement.innerText = "Gray shrines mean location data is missing.";
	e.appendChild(descElement);

	var regionsElement = document.createElement('ul');
	regionsElement.className = 'regions';

	// create show all header
	var titleRadio = document.createElement('input');
	titleRadio.type = 'radio';
	titleRadio.name = 'region'
	titleRadio.checked = true;
	titleRadio.setAttribute('id', 'region-all');
	titleRadio.onchange = onCheckedRegion.bind(null);
	regionsElement.appendChild(titleRadio);
	var titleLabel = document.createElement('label');
	titleLabel.setAttribute('for', 'region-all');
	titleLabel.className = 'region-title';
	titleLabel.innerText = 'Show all regions';
	regionsElement.appendChild(titleLabel);

	for(var i=0; i < regionIds.length; i++) {
		var regionId = regionIds[i];
		var region = REGIONS_BY_ID[regionId];
		var regionElement = document.createElement('li');
		regionElement.className = 'region id-' + region.id;

		// create region radio selector
		var titleRadio = document.createElement('input');
		titleRadio.type = 'radio';
		titleRadio.name = 'region'
		titleRadio.checked = false;
		titleRadio.setAttribute('id', 'region-' + region.id);
		titleRadio.onchange = onCheckedRegion.bind(region);
		regionElement.appendChild(titleRadio);

		// create region title
		var titleLabel = document.createElement('label');
		titleLabel.setAttribute('for', 'region-' + region.id);
		titleLabel.className = 'region-title';
		titleLabel.innerText = renderRegionTitle(region, SHRINES_BY_REGION_ID);
		regionElement.appendChild(titleLabel);

		var shrinesElement = document.createElement('ul');
		shrinesElement.className = 'shrines';

		for(var j=0; j < SHRINES_BY_REGION_ID[regionId].length; j++) {
			var shrine = SHRINES_BY_REGION_ID[regionId][j];
			var shrineElement = document.createElement('li');
			
			var inputElement = document.createElement('input');
			inputElement.setAttribute('type', 'checkbox');
			inputElement.setAttribute('id', 'shrine-' + shrine.id);
			inputElement.checked = isShrineVisible(shrine);
			inputElement.onchange = onCheckedShrine.bind(shrine);

			var labelElement = document.createElement('label');
			labelElement.setAttribute('for', 'shrine-' + shrine.id);
			labelElement.className = 'shrine-title';
			labelElement.innerText = shrine.name;

			if(shrine.x === 0 && shrine.y === 0)
				labelElement.className += ' missing';

			shrineElement.appendChild(inputElement);
			shrineElement.appendChild(labelElement);
			shrinesElement.appendChild(shrineElement);
		}

		regionElement.appendChild(shrinesElement);
		regionsElement.appendChild(regionElement)
	}

	e.appendChild(regionsElement);
	return e;
}


// render completed shrines
for(var i=0; i<SHRINES.length; i++)
	MAP_CONTAINER.appendChild(renderShrine(SHRINES[i]));

// render shrine list
var rendered = renderShrineList(completedShrineIds);
SHRINE_LIST_ELEMENT.appendChild(rendered);

ZOOM_100_ELEMENT.addEventListener('change', function(event) {CONTAINER_ELEMENT.style.width = "100%"})
ZOOM_200_ELEMENT.addEventListener('change', function(event) {CONTAINER_ELEMENT.style.width = "200%"})
ZOOM_300_ELEMENT.addEventListener('change', function(event) {CONTAINER_ELEMENT.style.width = "300%"})

MAP_CONTAINER.addEventListener('mousedown', function(event) {
  	var pt = MAP_ELEMENT.createSVGPoint();
  	pt.x = event.clientX;
  	pt.y = event.clientY;
  	var result = pt.matrixTransform(MAP_CONTAINER.getScreenCTM().inverse());
  	console.info(Math.floor(result.x) + ', ' + Math.floor(result.y));
}, false);
