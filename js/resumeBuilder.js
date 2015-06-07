var formattedName = 
	HTMLheaderName.replace("%data%", "My Name");
var formattedRole = 
	HTMLheaderRole.replace("%data%", "My Role");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);