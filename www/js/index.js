//This is the main JavaScript source for Super History Fun Time
$("button.camera-control").click(function () {
	// Navigtor is PhoneGap access to hardware.
	if (navigator.camera) {
		var options = {
		quality: 60,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: 0,
		encodingType: 0
		};
		navigator.camera.getPicture(getPhoto, null, options);
	}
})



function getPhoto (data) {
	$("#camera-photo").attr("src", "data:image/jpeg;base64," + data);
}