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


function enlarge_image(in_modal, in_image, in_modal_image, num) {
	var modal = document.getElementById(in_modal);
	var image = document.getElementById(in_image);
	var modal_image = document.getElementById(in_modal_image);

	modal.style.display = "block";
	modal_image.src = image.src;

	var span = document.getElementsByClassName("close")[num];

	span.onclick = function() {
		modal.style.display = "none";
	}
}

var descriptions = document.getElementsByClassName("description");
for(var i in descriptions)
{
	console.log(descriptions[i]);
	var read_more_but = document.getElementById("readmore_but_" + descriptions[i].id.replace("_desc", ""));
	var desc = document.getElementById(descriptions[i].id);
	if(desc.scrollHeight > desc.clientHeight)
	{
		read_more_but.style.display = "block";
	}
	else
	{
		read_more_but.style.display = "none";
	}
}
