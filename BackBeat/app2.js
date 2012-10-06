var data1;
var data2;
var player ='<div id="skin-loader"></div> \
		<div id="skin-wrapper" data-skin-name="premium-pixels"> \
			<div id="jquery_jplayer_1" class="jp-jplayer"></div> \
			<div id="jp_container_1" class="jp-audio"> \
				<div class="jp-type-playlist"> \
					<div class="jp-gui jp-interface"> \
						<ul class="jp-controls"> \
							<li><a href="javascript:;" class="jp-previous" tabindex="1">previous</a></li> \
							<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li> \
							<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li> \
							<li><a href="javascript:;" class="jp-next" tabindex="1">next</a></li> \
							<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li> \
							<li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li> \
							<li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li> \
							<li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li> \
						</ul> \
						<div class="jp-progress"> \
							<div class="jp-seek-bar"> \
								<div class="jp-play-bar"></div> \
							</div> \
						</div> \
						<div class="jp-volume-bar"> \
							<div class="jp-volume-bar-value"></div> \
						</div> \
						<div class="jp-time-holder"> \
							<div class="jp-current-time"></div> \
							<div class="jp-duration"></div> \
						</div> \
						<ul class="jp-toggles"> \
							<li><a href="javascript:;" class="jp-shuffle" tabindex="1" title="shuffle">shuffle</a></li> \
							<li><a href="javascript:;" class="jp-shuffle-off" tabindex="1" title="shuffle off">shuffle off</a></li> \
							<li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li> \
							<li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li> \
						</ul> \
					</div> \
					<div class="jp-playlist"> \
						<ul> \
							<li></li> \
						</ul> \
					</div> \
					<div class="jp-no-solution"> \
						<span>Update Required</span> \
						To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>. \
					</div> \
				</div> \
			</div><!-- .jp-audio --> \
		</div><!-- .wrapper -->';





onReady = function() {
	var info = document.createElement("div");
	info.setAttribute("id","info");
	$('#picture').append(player);
	//$('#picture').prepend(info);
	//$('#picture').prepend("<img id=bigPic" + ">");
	//$('#picture').prepend("<div id = bandName>" +"<br>" + "</div>");
	var windowWidth = $(window).width();
	$("#picture").css("width",windowWidth/2.3);
	$('#menu').tabify();
	$('.content img').live("click",function(){
		$('#picture').html('')
		var big = $(this).attr("data-big");
		var band = $(this).attr("band");
		var object = $(this);
		var small = $(this).attr("src");
		setInfo(object,band);
		var startLeft = $(this).offset().left;
		var startTop = $(this).offset().top;
		var startWidth = $(this).width();
		var startHeight = $(this).height();
		$('#picture').append(band +"<br>");
		$('#picture').append("<img id=bigPic" + ">");
		$('#picture').append(player);
		$("#bigPic").css("opacity",0);
		$('#bigPic').attr("src", big);
		$("#picture").attr('class', 'show');
		$("#bigPic").load(function() {
		var endLeft = $("#bigPic").offset().left;
		var endTop = $("#bigPic").offset().top;
		var finalwidth = $('#bigPic').width();
		var finalheight = $('#bigPic').height();

		//$(a).attr("id","transitionPic");
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
		getSong(band);
		new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_1",
				cssSelectorAncestor: "#jp_container_1"
			}, [
				{
					title:"Cro Magnon Man",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
				},
				{
					title:"Your Face",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
				},
				{
					title:"Cyber Sonnet",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
				},
				{
					title:"Tempered Song",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
				},
				{
					title:"Hidden",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
				},
				{
					title:"Lentement",
					free:true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
				},
				{
					title:"Lismore",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
				},
				{
					title:"The Separation",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
				},
				{
					title:"Beside Me",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
				},
				{
					title:"Bubble",
					free:true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
				},
				{
					title:"Stirring of a Fool",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
				},
				{
					title:"Partir",
					free: true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
				},
				{
					title:"Thin Ice",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
				}
			], {
				swfPath: "js",
				supplied: "oga, mp3",
				wmode: "window"
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
		$('#picture').append(player);
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
		getSong(band);
		new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_1",
				cssSelectorAncestor: "#jp_container_1"
			}, [
				{
					title:"Cro Magnon Man",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
				},
				{
					title:"Your Face",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
				},
				{
					title:"Cyber Sonnet",
					mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
					oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
				},
				{
					title:"Tempered Song",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
				},
				{
					title:"Hidden",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
				},
				{
					title:"Lentement",
					free:true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
				},
				{
					title:"Lismore",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
				},
				{
					title:"The Separation",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
				},
				{
					title:"Beside Me",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
				},
				{
					title:"Bubble",
					free:true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
				},
				{
					title:"Stirring of a Fool",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
				},
				{
					title:"Partir",
					free: true,
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
				},
				{
					title:"Thin Ice",
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
					oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
				}
			], {
				swfPath: "js",
				supplied: "oga, mp3",
				wmode: "window"
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
				//$(info).append(head);
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
/*
getSong = function(artist){

	$.getJSON('http://developer.echonest.com/api/v4/song/search',
	{
		api_key: "M530NF1UNZ2UPG0FM",
		format: "json",
		artist: artist,
		id: "7digital-US",
		bucket: "tracks"

	$.ajax({
		url: 'http://hkr.me:8001/?url=' + encodeURIComponent('http://tinysong.com/a/'+ name + "?format=json&key=0b2bb200a3ba82fade58b1a7f8830c91") + "&jsonp=?",
		dataType: "json",
		success: callBack

	});
		
}
*/


getSong = function(name){


	$.ajax({
		url: 'http://hkr.me:8001/?url=' + encodeURIComponent('http://developer.echonest.com/api/v4/song/search?api_key=N6E4NIOVYMTHNDM8J&format=json&results=5&artist=' + name + '&bucket=id:7digital-US&bucket=audio_summary&bucket=tracks') + "&jsonp=?",
		dataType: "json",
		success: callBack

	});

}



callBack = function(data) {
	console.log(data);
	
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
				$("#shows").html("");


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
						//$("#results3").append(artist);
						$("#shows").append(artist)
					
				
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
				$("#similarArtists").html("");


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
						//$("#results2").append(artist);
						$("#similarArtists").append(artist)
					
				
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
				$("#similarLocalArtists").html("");
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
						//$("#results1").append(artist);
						$("#similarLocalArtists").append($(artist))
					}
				});
			});
		});
	}
}


$(document).ready(onReady);