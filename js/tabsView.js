var app = app || {}; 

app.TabsView = function() {
	var tabs; 

	this.setUpTabs = function() {
		console.log('setUpTabs!'); 

		// set widths of tabs according to nuumber
		var uls = document.getElementsByTagName('ul'); 

		for (var i = 0; i < uls.length; i++) {
			if (uls[i].className.indexOf('tabs') != -1) {
				uls[i].addEventListener('click', showContent, false); 
				tabs = uls[i].children; 
			}

			break; 
		};  

		for (var i = 0; i < tabs.length; i++) {
			tabs[i].style.width = 100 / tabs.length + '%'; 
		};
	}

	function showContent(e) {
		console.log('showContent!'); 

		// show/hide content and update active tab
		var activated = e.target; 
		var id = activated.href.split('#')[1]; 
		var activeContent = document.getElementById(id); 
		var allContent = activeContent.parentNode.children

		for (var i = 0; i < allContent.length; i++) {
			tabs[i].className = ''; 
			allContent[i].className = ''; 
		}

		activeContent.className = 'active'; 
		activated.parentNode.className = 'active'; 
	}
}