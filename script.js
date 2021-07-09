function hideChem() {
	var docs = document.getElementById("docsDIV");
	var rwd = document.getElementById("rwdDIV");
	var chem = document.getElementById("chemDIV");
	var phys = document.getElementById("physDIV");
	var y = document.getElementById("select");

	if (chem.style.display === "block") {
		chem.style.display = "none";
	} else {
		chem.style.display = "block";
		y.style.display = "none";
		phys.style.display = "none";
		rwd.style.display = "none";
		docs.style.display = "none";
	}
}

function hidePhys() {
	var docs = document.getElementById("docsDIV");
	var rwd = document.getElementById("rwdDIV");
	var chem = document.getElementById("chemDIV");
	var phys = document.getElementById("physDIV");
	var y = document.getElementById("select");

	if (phys.style.display === "block") {
		phys.style.display = "none";
	} else {
		phys.style.display = "block";
		y.style.display = "none";
		chem.style.display = "none";
		rwd.style.display = "none";
		docs.style.display = "none";
	}
}

function hideRWD() {
	var docs = document.getElementById("docsDIV");
	var rwd = document.getElementById("rwdDIV");
	var chem = document.getElementById("chemDIV");
	var phys = document.getElementById("physDIV");
	var y = document.getElementById("select");

	if (rwd.style.display === "block") {
		rwd.style.display = "none";
	} else {
		rwd.style.display = "block";
		y.style.display = "none";
		phys.style.display = "none";
		chem.style.display = "none";
		docs.style.display = "none";
	}
}

function hideDocs() {
	var docs = document.getElementById("docsDIV");
	var rwd = document.getElementById("rwdDIV");
	var chem = document.getElementById("chemDIV");
	var phys = document.getElementById("physDIV");
	var y = document.getElementById("select");

	if (docs.style.display === "block") {
		docs.style.display = "none";
	} else {
		docs.style.display = "block";
		y.style.display = "none";
		phys.style.display = "none";
		rwd.style.display = "none";
		chem.style.display = "none";
	}
}







