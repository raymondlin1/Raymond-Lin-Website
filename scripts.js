function read_more(inbutton, description) {
	var button = document.getElementById(inbutton);
	var text = document.getElementById(description);

	if(button.innerHTML == "Read More")
	{
		button.innerHTML = "Read Less";
		text.style.display = "auto";
		text.style.height = "auto";
	}
	else
	{
		button.innerHTML = "Read More";
		text.style.display = "block";
		text.style.height = "230px";
	}
}


function enlarge_image(in_modal, in_image, in_modal_image) {
	var modal = document.getElementById(in_modal);
	var image = document.getElementById(in_image);
	var modal_image = document.getElementById(in_modal_image);

	image.onclick = function() {
		modal.style.display = "block";
		modal_image.src = this.src;
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
	}
}