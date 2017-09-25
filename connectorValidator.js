(function(self) {

	'use strict';

	if(self.ConnectorValidator) {
		return null;
	}else {
		self.ConnectorValidator = function(timeout) {
			return new Promise((resolve, reject) => {
				let selfTimeout = timeout || 3000;
				var xhr = new XMLHttpRequest();
				xhr.open("POST", 'http://jsonplaceholder.typicode.com/posts', true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.timeout = selfTimeout;
				xhr.onreadystatechange = function() {
					if(xhr.status == 201) {
						resolve(true);
					}else {
						reject(false);
					}
				}
				xhr.send("title=foo&body=bar&userId=1"); 
			});
		}
	}

})(window);