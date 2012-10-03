

onReady = function() {
	$('#menu').tabify();
	document.getElementById('results').addEventListener('click',toggleArtist,false)
		}

		doSearch = function() {

			simArts();
			simLocArts();
			allShows();


	}

allShows=function(){

var data1;

			$.getJSON('http://ws.audioscrobbler.com/2.0/',
			{
				method: "geo.getEvents",
				api_key: "8319d81dde2f49bad5c65a0ce2361a31",
				format: "json",
				location: $("#locationSearch").val(),
				limit: 50
			},

			function(data) {
				data1 = data;
				$("#results3").html("");


				$.each(data1.events.event, function(i, item) {
				//alert($.inArray(item,data2.topartists.artist));	
					
						var artist = document.createElement("div");
						artist.className = "artist";
						artist.id = item.artists.artist;

						var img = document.createElement("div");
						img.className = "img";
						img.innerHTML = "<img src=" + item.image[3]["#text"] + ">"

						var link = document.createElement("div");
						link.className = "link";
						if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.artists.artist + "</a>";
						}
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results3").append(artist);
						$("#shows").append($("#results3"))
					
				
			});
		});
}

simLocArts=function(){

var data1;

			$.getJSON('http://ws.audioscrobbler.com/2.0/',
			{
				method: "artist.getSimilar",
				api_key: "8319d81dde2f49bad5c65a0ce2361a31",
				format: "json",
				artist: $("#artistSearch").val(),
				limit: 250
			},

			function(data) {
				data1 = data;
				$("#results2").html("");


				$.each(data1.similarartists.artist, function(i, item) {
				//alert($.inArray(item,data2.topartists.artist));	
					
						var artist = document.createElement("div");
						artist.className = "artist";
						artist.id = item.name;

						var img = document.createElement("div");
						img.className = "img";
						img.innerHTML = "<img src=" + item.image[3]["#text"] + ">"

						var link = document.createElement("div");
						link.className = "link";
						if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.name + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.name + "</a>";
						}
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results2").append(artist);
						$("#similarArtists").append($("#results2"))
					
				
			});
		});
}

simArts=function(){

var data1;
var data2;
			$.getJSON('http://ws.audioscrobbler.com/2.0/',
			{
				method: "artist.getSimilar",
				api_key: "8319d81dde2f49bad5c65a0ce2361a31",
				format: "json",
				artist: $("#artistSearch").val(),
				limit: 250
			},

			function(data) {
				data1 = data;
				$.getJSON('http://ws.audioscrobbler.com/2.0/',
				{
					method: "tag.getTopArtists",
					api_key: "8319d81dde2f49bad5c65a0ce2361a31",
					format: "json",
					tag: $("#locationSearch").val(),
					limit: 9000
				},

				function(data) {
				data2 = data;
				$("#results1").html("");
				var names = [];
				$.each(data2.topartists.artist, function(i, item) {
					names.push(item.name);
				});	




				$.each(data1.similarartists.artist, function(i, item) {
				//alert($.inArray(item,data2.topartists.artist));	
					if ($.inArray(item.name,names) !== -1) {
						var artist = document.createElement("div");
						artist.className = "artist";
						artist.id = item.name;

						var img = document.createElement("div");
						img.className = "img";
						img.innerHTML = "<img src=" + item.image[3]["#text"] + ">"

						/*var link = document.createElement("div");
						link.className = "link";
						if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.name + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.name + "</a>";
						}
						artist.appendChild(link); */
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results1").append(artist);
						$("#similarLocalArtists").append($("#results1"))
					}
				});
			});
		});
}

	toggleArtist = function(e) {
		var parent = e.target.parentNode;
    	if (parent.className === "artist") {
    		parent.className = "artistRevealed";
    	}
    }


$(document).ready(onReady);