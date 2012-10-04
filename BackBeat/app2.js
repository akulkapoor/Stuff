var data1;
var data2;

onReady = function() {
	$('#menu').tabify();
	$('img').live("click",function(){
		$('#picture').html('')
		var big = $(this).attr("data-big");
		var band = $(this).attr("band");
		var object = $(this);
		$('#picture').append(band +"<br>");
		$('#picture').append("<img src = " + big + ">");
		$("#picture").attr('class', 'show');
		setInfo(object,band);
	});
	$('.link').live("click",function(){
		$('#picture').html('')
		var big = $(this.innerHTML).attr("data-big");
		var band = $(this.innerHTML).attr("band");
		var object = $(this.innerHTML);
		$('#picture').append(band +"<br>");
		$('#picture').append("<img src = " + big + ">");
		$("#picture").attr('class', 'show');
		setInfo(object,band);
	});
}

setInfo = function(object,band) {
	$.getJSON('http://ws.audioscrobbler.com/2.0/',
			{
				method: "artist.getInfo",
				api_key: "8319d81dde2f49bad5c65a0ce2361a31",
				format: "json",
				artist: band,
				limit: 250
			},
			function(data) {
				var info = document.createElement("div");
				info.className = "info";
				if (data.artist  === undefined) {
					info.innerHTML = object.attr("city") + "<br>" + object.attr("country") + "<br>" + object.attr("theatre");
				}
				
				else {
				info.innerHTML = data.artist.bio.content;
				}
				$("#picture").append(info);
			});	
}

		doSearch = function() {
			$('#picture').html('')
			simArts();
			simLocArts();
			allShows();
			$("#picture").attr('class', 'hidden');


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
				console.log(data);


				$.each(data1.events.event, function(i, item) {
				//alert($.inArray(item,data2.topartists.artist));	
					
						var artist = document.createElement("div");
						artist.className = "artist";
						artist.id = item.artists.artist;

						var img = document.createElement("div");
						img.className = "img";
						img.innerHTML = "<img src=" + item.image[3]["#text"] + " data-big=" + item.image[3]["#text"] + " band=" + item.artists.artist + " city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name + "'>"

						var link = document.createElement("div");
						link.className = "link";
						/*if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
							//link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.artists.artist + "</a>";
						}*/
						link.innerHTML = "<div id='" + item.artists.artist  + "' data-big=" + item.image[3]["#text"] + " band='" + item.artists.artist + "'' city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name+ "'>" + item.artists.artist + "</div>";
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results3").append(artist);
						$("#shows").append($("#results3"))
					
				
			});
		});
}

simArts=function(){

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
						img.innerHTML = "<img src=" + item.image[3]["#text"] + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>"

						var link = document.createElement("div");
						link.className = "link";
						//if (item.url.slice(0,7) !== "http://") {
							//link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.name + "</a>";
							link.innerHTML = "<div id='" + item.name  + "' data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>" + item.name + "</div>";
							
						//}
						//else {
							//link.innerHTML = "<a href='" + item.url + "'>" + item.name + "</a>";
						//	link.innerHTML = "<div id=" + item.name  + " data-big=" + item.image[4]["#text"] + " band='" + item.name +">" + item.name + "</div>";
						//}
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results2").append(artist);
						$("#similarArtists").append($("#results2"))
					
				
			});
		});
}

simLocArts=function(){

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
						img.innerHTML = "<img src=" + item.image[3]["#text"] + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>"

						var link = document.createElement("div");
						link.className = "link";
						/*if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + item.url + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>" + item.name + "</a>";
							//link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.name + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>" + item.name + "</a>";
						}*/
						link.innerHTML = "<div id='" + item.name  + "' data-big=" + item.image[4]["#text"] + " band='" + item.name + "'>" + item.name + "</div>";
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results1").append(artist);
						$("#similarLocalArtists").append($("#results1"))
					}
				});
			});
		});
}


$(document).ready(onReady);