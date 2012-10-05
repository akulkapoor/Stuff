var data1;
var data2;

onReady = function() {
	var windowWidth = $(window).width();
	$("#picture").css("width",windowWidth/2.3);
	$('#menu').tabify();
	$('.content img').live("click",function(){
		$('#picture').html('')
		var big = $(this).attr("data-big");
		var band = $(this).attr("band");
		var object = $(this);
		var small = $(this).attr("src");
		$('#picture').append(band +"<br>");
		$('#picture').append("<img id=bigPic" + ">");
		$("#bigPic").css("opacity",0);
		$('#bigPic').attr("src", big);
		$("#picture").attr('class', 'show');
		setInfo(object,band);
		var startLeft = $(this).offset().left;
		var startTop = $(this).offset().top;
		var startWidth = $(this).width();
		var startHeight = $(this).height();
		$("#bigPic").load(function() {
		var endLeft = $("#bigPic").offset().left;
		var endTop = $("#bigPic").offset().top;
		var finalwidth = $('#bigPic').width();
		var finalheight = $('#bigPic').height();
		var a = document.createElement("div");
		//$(a).attr("id","transitionPic");
		a = "<img src = '" + small + "' id=transitionPic" + ">";
		$('body').append(a);
		$("#transitionPic").css("position","absolute");
		$("#transitionPic").css("left",startLeft)
		$("#transitionPic").css("top",startTop)
		$("#transitionPic").css("width",startWidth)
		$("#transitionPic").css("height",startHeight)
		$("#transitionPic").animate({
			left: endLeft,
			top: endTop,
			width: finalwidth,
			height: finalheight},500,function() {
		$('#transitionPic').remove();
		$("#bigPic").css("opacity",1);
		});
		});
	});



	$('.link').live("click",function(){
		$('#picture').html('')
		var big = $(this.innerHTML).attr("data-big");
		var band = $(this.innerHTML).attr("band");
		var object = $(this.innerHTML);
		var small = $(this.innerHTML).attr("src");
		var parent = this.parentNode;
		var small = $(parent).find("img").attr("src");
		var startLeft = $(parent).find("img").offset().left;
		var startTop = $(parent).find("img").offset().top;
		var startWidth = $(parent).find("img").width();
		var startHeight = $(parent).find("img").height();
		$('#picture').append(band +"<br>");
		$('#picture').append("<img id=bigPic" + ">");
		$("#bigPic").css("opacity",0);
		$('#bigPic').attr("src", big);
		$("#picture").attr('class', 'show');
		setInfo(object,band);
		$("#bigPic").load(function() {
		var endLeft = $("#bigPic").offset().left;
		var endTop = $("#bigPic").offset().top;
		var finalwidth = $('#bigPic').width();
		var finalheight = $('#bigPic').height();
		var a = document.createElement("div");
		//$(a).attr("id","transitionPic");
		a = "<img src = '" + small + "' id=transitionPic" + ">";
		$('body').append(a);
		$("#transitionPic").css("position","absolute");
		$("#transitionPic").css("left",startLeft)
		$("#transitionPic").css("top",startTop)
		$("#transitionPic").css("width",startWidth)
		$("#transitionPic").css("height",startHeight)
		$("#transitionPic").animate({
			left: endLeft,
			top: endTop,
			width: finalwidth,
			height: finalheight},500,function() {
		$('#transitionPic').remove();
		$("#bigPic").css("opacity",1);
		});
		});
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
				var head = document.createElement("div");
				var body = document.createElement("div");
				head.innerHTML = "Bio";
				head.setAttribute("id", "head");
				body.setAttribute("id", "body");
				body.innerHTML = data.artist.bio.content;
				$(info).append(head);
				$(info).append("<br>");
				$(info).append(body);
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
			if ($("#locationSearch").val() !== "") {
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
						img.innerHTML = "<img src='" + item.image[3]["#text"] + "' data-big=" + item.image[3]["#text"] + " band='" + item.artists.artist + "' city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name + "'>"

						var link = document.createElement("div");
						link.className = "link";
						/*if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
							//link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.artists.artist + "</a>";
						}*/
						link.innerHTML = "<div id='" + item.artists.artist  + "' data-big=" + item.image[3]["#text"] + " band='" + item.artists.artist + "' city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name+ "'>" + item.artists.artist + "</div>";
						artist.appendChild(link);
						artist.appendChild(img);
						artist.innerHTML += "<br>"
						$("#results3").append(artist);
						$("#shows").append($("#results3"))
					
				
			});
		});
	}
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
if ($("#locationSearch").val() !== "") {
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
}


$(document).ready(onReady);