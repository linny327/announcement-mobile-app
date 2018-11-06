var churchObject = {
    "Anglican Church In Zimbabwe": {
        "Archdiocese Of Central Zimbabwe": ["Salinas", "Gonzales"],
        "Diocese Of Harare": ["Arch-deaconary of Chitungwiza" , "Arch-deaconary of Harare Central"],
		"Diocese Of Manicaland": ["Berkeley"],
		"Diocese Of Masvingo": ["Berkeley"],
		"Diocese Of Matebeleland": ["Berkeley"]
    },
	"Roman Catholic Church In Zimbabwe": {
        "Archdiocese Of Harare": ["Salinas", "Gonzales"],
        "Archdiocese Of Bulawayo": ["Arch-deaconary of Chitungwiza" , "Arch-deaconary of Harare Central"],
		"Diocese Of Chinhoyi": ["Berkeley"],
		"Diocese Of Masvingo": ["Berkeley"],
		"Diocese Of Gweru": ["Berkeley"]
    },
    "Zaoga FIF Church In Zimbabwe": {
        "Seke 1 District": ["Chitungwiza East Circuit", "Harava Circuit" ,"Epworth"],
		"Seke 2 District": ["Eastern Zone", "Western Zone" , "Southern Zone" ,"Central Zone"],
		"St Mary's District": ["", "Jacksonville"],
		"Cherutombo District": ["", "Jacksonville"]
    },
	"The Methodist Church In Zimbabwe": {
        "Harare East": ["Chitungwiza East Circuit", "Harava Circuit" ,"Epworth"],
		"Harare West": ["Glenview", "Warren Park" , "Dzivarasekwa" ,"Kuwadzana"],
		"Masvingo": ["", "Jacksonville"],
		"Marondera": ["", "Jacksonville"]
    },
	"Zimbabwe Council Of Churches In Zimbabwe": {
        "": ["", "" ,""]
	
}}
window.onload = function () {
    var churchSel = document.getElementById("churchSel"),
        dioceseSel = document.getElementById("dioceseSel"),
        dinarySel = document.getElementById("dinarySel");
    for (var church in churchObject) {
        churchSel.options[churchSel.options.length] = new Option(church, church);
    }
    churchSel.onchange = function () {
        dioceseSel.length = 1; // remove all options bar first
        dinarySel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          dioceseSel.options[0].text = "Please select church first"
          dinarySel.options[0].text = "Please select diocese first"
          return; // done   
        }  
        dioceseSel.options[0].text = "Please select diocese"
        for (var diocese in churchObject[this.value]) {
            dioceseSel.options[dioceseSel.options.length] = new Option(diocese, diocese);
        }
        if (dioceseSel.options.length==2) {
          dioceseSel.selectedIndex=1;
          dioceseSel.onchange();
        }  
        
    }
    churchSel.onchange(); // reset in case page is reloaded
    dioceseSel.onchange = function () {
        dinarySel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          dinarySel.options[0].text = "Please select diocese first"
          return; // done   
        }  
        dinarySel.options[0].text = "Please select dinary"
        
        var dinaries = churchObject[churchSel.value][this.value];
        for (var i = 0; i < dinaries.length; i++) {
            dinarySel.options[dinarySel.options.length] = new Option(dinaries[i], dinaries[i]);
        }
        if (dinarySel.options.length==2) {
          dinarySel.selectedIndex=1;
          dinarySel.onchange();
        }  
        
    }
}