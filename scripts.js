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
		text.style.height = "200px";
	}
}
