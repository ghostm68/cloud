this.add = function(post) {
		gaestebuch.push(post);
	}
	this.show = function() {
		$('#output').html('');
			for(post in gaestebuch) {
				$('#output').append(
					$('<table />').attr({'class':'post','id': 'post-' + gaestebuch[post].id})
				);
				for(i = 0; i < Object.keys(gaestebuch[post]).length; i++) {
					if(Object.keys(gaestebuch[post])[i] !== 'id') {
						tr = $($('<tr />')).appendTo($('#output').find('table.post#' + 'post-' + gaestebuch[post].id));
																											tr.append(
							$('<th />').text(Object.keys(gaestebuch[post])[i])
						);
						tr.append(
							$('<td />').text(gaestebuch[post][Object.keys(gaestebuch[post])[i]])
						);
					}
				}
			}
	}
	this.clear = function() {
		gaestebuch = [];
		localStorage.removeItem("Gaestebuch");
		localStorage.clear();
	}
}

guestbook = new Gaestebuch();
guestbook.clear();

function Eintrag(name, nachricht) {
	this.name = name;
	this.nachricht = nachricht;
	this.id = gaestebuch.length;
}

$('#gaestebuch').submit(function(e) {
	e.preventDefault();
	console.log($('#nachricht').val());
	post = new Eintrag('me',$('#nachricht').val());
	guestbook.add(post);
	localStorage.setItem('Gaestebuch',JSON.stringify(gaestebuch))
	console.log(gaestebuch);
	$('#nachricht').val('');
	guestbook.show();
});

$('#gaestebuch #reset').click(function(e) {
	e.preventDefault();
	guestbook.clear();
	guestbook.show();
});
guestbook.show();
