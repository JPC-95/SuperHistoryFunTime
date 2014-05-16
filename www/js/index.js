//This is the main JavaScript source for Super History Fun Time

var photos = [];

hideAllViews();

function makePhotoEntry () {
	var imageData = $('#camera-photo').attr('src').replace("data:image/jpeg;base64,", "");
	var longitude = $('#longitude').html();
	var latitude = $('#latitude').html();
	var description = $('description').val();
	
	var photoEntry = {
		"image" : imageData,
		"longitude" : longitude,
		"latitude" : latitude,
		"description" : description
	};
	photo.push(photoEntry);
}

function daveAllPhotos () {
	localStorage.clear();
	localStorage["photos"] = JSON.stringify(photos);
}

$('button.save').click(function () {
	 makePhotoEntry();
	 saveAllPhotos();
});

function hideAllViews () {
	$('#showall').hide();
	$('#camera').hide();
	$('#edit').hide();
}


$('li.viewlink').click(function () {
	hideAllViews();
	if($(this).html () == "Home") {
		$('#showall').show();
	} else if ($(this).html () == "Capture") {
		$('#camera').show();
	} else {
		$('#edit').show();
		}
});



$("button.camera-control").click(function () {
	// Navigtor is PhoneGap access to hardware.
	if (navigator.camera) {
		var options = {
		quality: 60,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: 1,
		encodingType: 0
		};
		navigator.camera.getPicture(getPhoto, null, options);
		navigator.geolocation.getCurrentPosition(getPosition, null, {enableHighAccuracy: true});
	}
})



function getPhoto (data) {
	$("#camera-photo").attr("src", "data:image/jpeg;base64," + data);
}

function getPosition (position) {
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;
	
	$("#longitude").html("Long: " + longitude);
	$("#latitude").html("Lat: " + latitude);
}