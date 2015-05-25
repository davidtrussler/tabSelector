var app = app || {}; 

app.TabsView = function() {
	this.setUpTabs = function() {
		console.log('setUpTabs!'); 

		// set widths of tabs according to nuumber
		var uls = document.getElementsByTagName('ul'); 
		var tabs; 

		for (var i = 0; i < uls.length; i++) {
			if (uls[i].className.indexOf('tabs') != -1) {
				tabs = uls[i].children; 
			}

			break; 
		};  

		for (var i = 0; i < tabs.length; i++) {
			var tab = tabs[i];

			tab.style.width = 100 / tabs.length + '%'; 
		}; 
	}
}