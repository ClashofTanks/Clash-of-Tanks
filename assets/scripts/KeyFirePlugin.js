// KeyFirePlugin.js
// Code created by KeyFire Studios
// Just some random Link: https://www.richdadfreeseminar.com/Portland/138.0000/Index.dtm?mid=11014404&utm_sourceYT&utm_medium=video-fa&utm_campaign=Portland&utm_content=cashflow&gclid=EAIaIQobChMIyZrnxdzn5AIV5AB_Ch2cxAUWEAEYASAAEgI8HfD_BwE&otsid=20055

// What needs to be done
// 

// Global Variables
var CurrentDirectory = window.location.href;
var Domain = '73.240.32.243';
var Path = '';
var ConfigVersion = 'v1.2';
var RefreshRate = 100; // Do not edit (Manages Site Timer)
var UpdateSpeed = 1;

function Start() {
    setInterval(userDuration, 100);
    //setInterval(siteZoom, RefreshRate);
    writeConsole('info', 'Configuration Successfully Completed! Configuration Version: ' + ConfigVersion  + '');
    //setInterval(clock, RefreshRate);
    //setNavPath();
    //validateSite();
}

function siteZoom() {
  var WindowHeight = window.innerHeight;
  var WindowWidth = window.innerWidth;
  var CompareHeight = 1080;
  var CompareWidth = 1920;
  var FinalZoom = 1.0;
  /*
  if (WindowHeight > WindowWidth) {
    FinalZoom = WindowWidth / CompareWidth;
  }
  else {
    FinalZoon = WindowHeight / CompareHeight;
  }*/
  FinalZoom = WindowWidth / CompareWidth;
  document.getElementsByTagName("BODY")[0].style.zoom = FinalZoom;
}

function setNavPath() {
    var CurrentPathname = window.location.pathname;
    var CurrentPathwayArray = CurrentPathname.split('/');
    var ArrayLength = CurrentPathwayArray.length;
    var print = false;
    for (var i = 0; i < ArrayLength; i++) {
        var curr_path = CurrentPathwayArray[i];
        if (curr_path === '' && print === false) {
            print = true;
        }
        else if (curr_path === '') {
            path = path + '/';
        }
        else {
            curr_path = curr_path.charAt(0).toUpperCase() + curr_path.substr(1);
            path = path + curr_path;
        }
    }
    formatNavPath();
    document.getElementById('NavPath').innerHTML = document.getElementById('NavPath').innerHTML.replace('[USR_LOCATION]', path);
}

function fixPath() {
    path = path.replace('<a href=""></a>', '');
    path = path.replace('<a href="/home">Home</a> / <a href="/home">Home</a>', '<a href="/home">Home</a>')

}

function validateSite() {
    if (window.location.host === Domain) {
        writeConsole('info', 'Site Successfully Verified');
    }
    else {
        writeConsole('warn', 'Site Validator Falure')
        writeConsole('error', 'Site Validator Failed to validate this site / page. Stoping all client-side config processes');
        SiteAction('destroy');
        clearInterval(SetTime);
    }
}

// User Duration
var timer_msec = 1;
var timer_sec = 0;
var timer_min = 0;
var timer_hour = 0;
function userDuration() {
    timer_msec = timer_msec + 1;
    if (timer_msec === 10) {
        timer_msec = 0;
        timer_sec = timer_sec + 1;
    }
    if (timer_sec === 60) {
        timer_sec = 0;
        timer_min = timer_min + 1;
    }
    if (timer_min === 60) {
        timer_min = 0;
        timer_hour = timer_hour + 1;
    }
}

function getDuration() {
    var timer_hour_ph;
    var timer_min_ph;
    var timer_sec_ph;
    var timer_tsec_ph;
    if (timer_hour < 10) {
        timer_hour_ph = '0';
    }
    else {
        timer_hour_ph = '';
    }
    if (timer_min < 10) {
        timer_min_ph = '0';
    }
    else {
        timer_min_ph = '';
    }
    if (timer_sec < 10) {
        timer_sec_ph = '0';
    }
    else {
        timer_sec_ph = '';
    }
    var result = timer_hour_ph + timer_hour + ':' + timer_min_ph + timer_min + ':' + timer_sec_ph + timer_sec + '.' + timer_tsec;
    return result;
}

// Write Console

function writeConsole(type, body) {
    var time = new Date();
    var duration = '[' + getDuration() + ']';
    time = time.toLocaleTimeString();
    var result;
    // Format
    if (type === 'info' || type === 'norm' || type === 'normal') {
        result = time + ' [INFO] ' + body + '  ' + duration;
        console.log(result);
    }
    else if (type === 'warn' || type === 'warning') {
        result = time + ' [WARN] ' + body + '  ' + duration;
        console.warn(result);
    }
    else if (type === 'error') {
        result = time + ' [ERROR] ' + body + '  ' + duration;
        console.error(result);
    }
    else { // type === null or unknown; return the result
        result = time + ' [UNDEFINED] ' + body + '  ' + duration;
        return result;
    }
}

function notification(notif_en, notif_ru, notif_lv, background_color, visibility) {
    if (background_color === 'red') {
        document.getElementById('nav_notif').style.backgroundColor = 'rgba(225, 0, 0, 0.8)';
    }
    else if (background_color === 'orange') {
        document.getElementById('nav_notif').style.backgroundColor = 'rgba(250, 137, 25, 0.8)';
    }
    else if (background_color === 'blue') {
        document.getElementById('nav_notif').style.backgroundColor = 'rgba(1, 94, 210, 0.8)';
    }
    else {
        document.getElementById('nav_notif').style.backgroundColor = background_color;
    }
    document.getElementById('nav_notif_en').innerHTML = notif_en;
    document.getElementById('nav_notif_ru').innerHTML = notif_ru;
    document.getElementById('nav_notif_lv').innerHTML = notif_lv;
    if (visibility) {
        document.getElementById('nav_notif').style.display = 'block';
        setInterval(changeNotif, 5000);
    }
    else {
        document.getElementById('nav_notif').style.display = 'none';
        clearInterval(changeNotif);
    }
}

function GetPosition(type, Element) {
    var xPosition = 0;
    var yPosition = 0;

    while (Element) {
        xPosition += (Element.offsetLeft - Element.scrollLeft + Element.clientLeft);
        yPosition += (Element.offsetTop - Element.scrollTop + Element.clientTop);
        Element = Element.offsetParent;
    }

    if ((type === 'y') || (type === 'Y')) {
        return yPosition;
    }

    else if ((type === 'x') || (type === 'X')) {
        return xPosition;
    }
}

//This is the universal one that looks at both x and y axis to edit x and y axis
function Background3D(ElementID, DistanceX, OffsetX, DistanceY, OffsetY) {
    // Things for X-Axis
    var ViewPortTop = window.scrollY;
    var ViewPortMiddle = window.scrollY + (window.innerHeight / 2);
    var ViewPortBottom = window.scrollY + window.innerHeight;
    var DistanceOfViewPortTopToMiddle = ViewPortMiddle - ViewPortTop;
    var DistanceOfViewPortMiddleToBottom = ViewPortBottom - ViewPortMiddle;
    var PercentDistanceOfViewPortTopRoMiddle = DistanceOfViewPortTopToMiddle / 100;
    var PercentDistanceOfViewPortMiddleToBottom = DistanceOfViewPortMiddleToBottom / 100;
    // Values for X-Axis
    var ViewPortLeft = window.scrollX;
    var ViewPortCenter = window.scrollX + (window.innerWidth / 2);
    var ViewPortRight = window.scrollX + window.innerWidth;
    var DistanceOfViewPortLeftToCenter = ViewPortCenter - ViewPortLeft;
    var DistanceOfViewPortCenterToRight = ViewPortRight - ViewPortCenter;
    var PercentDistanceOfViewPortLeftToCenter = DistanceOfViewPortLeftToCenter / 100;
    var PercentDistanceOfViewPortCenterToRight = DistanceOfViewPortCenterToRight / 100;
    // First Text
    var TargetObject = document.getElementById(ElementID); // The element
    var StartingPointY = DistanceY; // Shadow Y Value (max value when out of view);
    var StartingPointX = DistanceX; // Shadow X Value (max value when out of view);
    //if (true) { // I thought that I would need this but probably not
        // Calculate for Y
        // Create range from zero
        var TopBorder = ViewPortTop - ViewPortTop; // Top is the top
        var MiddleBorder = ViewPortMiddle - ViewPortTop; // Middle is the bottom
        var ObjectPositionY = GetPosition('Y', TargetObject) - ViewPortTop; // Element position on the range
        var ObjectPositionPercentageInversed = ObjectPositionY / MiddleBorder; // This is the process that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionPercentage = (ObjectPositionPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyValueResult = (ObjectPositionPercentage * StartingPointY); //
        TargetObject.style.backgroundPositionY = ((ObjectPropertyValueResult * -1) + OffsetY).toString() + 'px'; // Set it
    //}
    //if (true) { // I thought that I would need this but probably not
        // Calculate for X
        // Create range from zero
        var LeftBorder = ViewPortLeft - ViewPortLeft; // Left is the Left
        var CenterBorder = ViewPortCenter - ViewPortLeft; // Center is the Bottom
        var ObjectPositionX = GetPosition('X', TargetObject) - ViewPortLeft; // Element position on the range
        var ObjectPositionXPercentageInversed = ObjectPositionX / CenterBorder; // This is the process that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionXPercentage = (ObjectPositionXPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyXValueResult = (ObjectPositionXPercentage * StartingPointX); //
        TargetObject.style.backgroundPositionX = ((ObjectPropertyXValueResult * -1) + OffsetX).toString() + 'px'; // Set it
    //}
}

//var Background3DYOnlyHandler = setInterval(function () { Background3DYOnly('CoverElement', 0, 0, 100, 0); }, update_speed);
function Background3DYOnly(ElementID, DistanceX, OffsetX, DistanceY, OffsetY) {
    // Things for X-Axis
    var ViewPortTop = window.scrollY;
    var ViewPortMiddle = window.scrollY + (window.innerHeight / 2);
    var ViewPortBottom = window.scrollY + window.innerHeight;
    var DistanceOfViewPortTopToMiddle = ViewPortMiddle - ViewPortTop;
    var DistanceOfViewPortMiddleToBottom = ViewPortBottom - ViewPortMiddle;
    var PercentDistanceOfViewPortTopRoMiddle = DistanceOfViewPortTopToMiddle / 100;
    var PercentDistanceOfViewPortMiddleToBottom = DistanceOfViewPortMiddleToBottom / 100;
    // Values for X-Axis
    var ViewPortLeft = window.scrollX;
    var ViewPortCenter = window.scrollX + (window.innerWidth / 2);
    var ViewPortRight = window.scrollX + window.innerWidth;
    var DistanceOfViewPortLeftToCenter = ViewPortCenter - ViewPortLeft;
    var DistanceOfViewPortCenterToRight = ViewPortRight - ViewPortCenter;
    var PercentDistanceOfViewPortLeftToCenter = DistanceOfViewPortLeftToCenter / 100;
    var PercentDistanceOfViewPortCenterToRight = DistanceOfViewPortCenterToRight / 100;
    // First Text
    var TargetObject = document.getElementById(ElementID); // The element
    var StartingPointY = DistanceY; // Shadow Y Value (max value when out of view);
    var StartingPointX = -1 * DistanceX; // Shadow X Value (max value when out of view);
    //if (true) { // I thought that I would need this but probably not
        // Calculate for Y
        // Create range from zero
        var TopBorder = ViewPortTop - ViewPortTop; // Top is the top
        var MiddleBorder = ViewPortMiddle - ViewPortTop; // Middle is the bottom
        var ObjectPositionY = GetPosition('Y', TargetObject) - ViewPortTop; // Element position on the range
        var ObjectPositionPercentageInversed = ObjectPositionY / MiddleBorder; // This is the process that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionPercentage = (ObjectPositionPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyValueResult = (ObjectPositionPercentage * -StartingPointX); //
        TargetObject.style.backgroundPositionY = ((ObjectPropertyValueResult * -1) + OffsetY).toString() + 'px'; // Set it
    //}
    //if (true) { // I thought that I would need this but probably not
        // Calculate for X
        // Create range from zero
        var TopBorder = ViewPortTop - ViewPortTop; // Top is the top
        var MiddleBorder = ViewPortMiddle - ViewPortTop; // Middle is the bottom
        var ObjectPositionY = GetPosition('Y', TargetObject) - ViewPortTop; // Element position on the range
        var ObjectPositionPercentageInversed = ObjectPositionY / MiddleBorder; // This is the process that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionPercentage = (ObjectPositionPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyValueResult = (ObjectPositionPercentage * StartingPointX); //
        TargetObject.style.backgroundPositionX = ((ObjectPropertyValueResult * -1) + OffsetX).toString() + 'px'; // Set it
      	//
      	/*
        var LeftBorder = ViewPortLeft - ViewPortLeft; // Left is the Left
        var CenterBorder = ViewPortCenter - ViewPortLeft; // Center is the Bottom
        var ObjectPositionX = GetPosition('X', TargetObject) - ViewPortLeft; // Element position on the range
        var ObjectPositionXPercentageInversed = ObjectPositionX / CenterBorder; // This is the process that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionXPercentage = (ObjectPositionXPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyXValueResult = (ObjectPositionXPercentage * StartingPointX); //
        TargetObject.style.backgroundPositionX = ((ObjectPropertyXValueResult * -1) + OffsetX).toString() + 'px'; // Set it
      	*/
    //}
}

// This one
function Object3DTransform(ElementID, DistanceX, OffsetX, DistanceY, OffsetY) {
    // Things for X-Axis
    var ViewPortTop = window.scrollY;
    var ViewPortMiddle = window.scrollY + (window.innerHeight / 2);
    var ViewPortBottom = window.scrollY + window.innerHeight;
    var DistanceOfViewPortTopToMiddle = ViewPortMiddle - ViewPortTop;
    var DistanceOfViewPortMiddleToBottom = ViewPortBottom - ViewPortMiddle;
    var PercentDistanceOfViewPortTopRoMiddle = DistanceOfViewPortTopToMiddle / 100;
    var PercentDistanceOfViewPortMiddleToBottom = DistanceOfViewPortMiddleToBottom / 100;
    // Values for X-Axis
    var ViewPortLeft = window.scrollX;
    var ViewPortCenter = window.scrollX + (window.innerWidth / 2);
    var ViewPortRight = window.scrollX + window.innerWidth;
    var DistanceOfViewPortLeftToCenter = ViewPortCenter - ViewPortLeft;
    var DistanceOfViewPortCenterToRight = ViewPortRight - ViewPortCenter;
    var PercentDistanceOfViewPortLeftToCenter = DistanceOfViewPortLeftToCenter / 100;
    var PercentDistanceOfViewPortCenterToRight = DistanceOfViewPortCenterToRight / 100;
    // First Text
    var TargetObject = document.getElementById(ElementID); // The element
    var StartingPointY = DistanceY; // Shadow Y Value (max value when out of view);
    var StartingPointX = DistanceX; // Shadow X Value (max value when out of view);
    //if (true) { // I thought that I would need this but probrably not
        // Calculate for Y
        // Create range from zero
        var TopBorder = ViewPortTop - ViewPortTop; // Top is the top
        var MiddleBorder = ViewPortMiddle - ViewPortTop; // Middle is the bottom
        var ObjectPositionY = GetPosition('Y', TargetObject) - ViewPortTop; // Element postion on the range
        var ObjectPositionPercentageInversed = ObjectPositionY / MiddleBorder; // This is the procees that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionPercentage = (ObjectPositionPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyValueResult = (ObjectPositionPercentage * StartingPointY); //
        TargetObject.style.backgroundPositionY = ((ObjectPropertyValueResult * -1) + OffsetY).toString() + 'px'; // Set it
    //}
    //if (true) { // I thought that I would need this but probably not
        // Calculate for X
        // Create range from zero
        var LeftBorder = ViewPortLeft - ViewPortLeft; // Left is the Left
        var CenterBorder = ViewPortCenter - ViewPortLeft; // Center is the Bottom
        var ObjectPositionX = GetPosition('X', TargetObject) - ViewPortLeft; // Element postion on the range
        var ObjectPositionXPercentageInversed = ObjectPositionX / CenterBorder; // This is the procees that calculates but is reversed (wrong way), next line will put it right
        var ObjectPositionXPercentage = (ObjectPositionXPercentageInversed * (-1)); // Will know the exact value of a element
        var ObjectPropertyXValueResult = (ObjectPositionXPercentage * StartingPointX); //
        //TargetObject.style.transform = "translateY(" + OffsetY.toString() + "px)"; // Set it
    //}
}
