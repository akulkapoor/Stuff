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
					</div> \
				</div> \
			</div><!-- .jp-audio --> \
		</div><!-- .wrapper -->';

var text = new Object();
text.txt = "";
text.x = 350;
text.y = 40;
text.xVel = 0;
text.yVel = 0;
var name;
onReady = function() {
	setInterval(run, 50);
	var info = document.createElement("div");
	info.setAttribute("id","info");
	$('#picture').append(player);
	var windowWidth = $(window).width();
	$("#picture").css("width",windowWidth/2.3);
	$('#menu').tabify();
	
	$('.content img').live("click",function(){

		$('#picture').html('')
		
		var big = $(this).attr("data-big");
		var band = $(this).attr("band");
		name = $(this).attr("band");
		var object = $(this);
		var small = $(this).attr("src");
		var link = $(this).attr("link");
		setInfo(object,band);
		var startLeft = $(this).offset().left;
		var startTop = $(this).offset().top;
		var startWidth = $(this).width();
		var startHeight = $(this).height();
		$('#picture').append(band +"<br>");
		$('#picture').append("<img id=bigPic" + ">" + "<br>");
		if (link.slice(0,7) !== "http://") {
			$('#picture').append("<div id = page><a href='http://" + link + "'>" + "Last FM Page" + "</a>" + "</div>");
		}
		else {
			$('#picture').append("<div id = page><a href='" + link + "'>" + "Last FM Page" + "</a>" + "</div>");
		}
		$('#picture').append(player);
		$("#bigPic").css("opacity",0);
		$('#bigPic').attr("src", big);
		$("#picture").attr('class', 'show');
		getSong(band);
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
		$("#bigPic").css("opacity",1);
		$('#transitionPic').remove();
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
		var link = $(this.innerHTML).attr("link");
		var startLeft = $(parent).find("img").offset().left;
		var startTop = $(parent).find("img").offset().top;
		var startWidth = $(parent).find("img").width();
		var startHeight = $(parent).find("img").height();
		$('#picture').append(band +"<br>");
		$('#picture').append("<img id=bigPic" + ">" + "<br>");
		if (link.slice(0,7) !== "http://") {
			$('#picture').append("<div id = page><a href='http://" + link + "'>" + "Last FM Page" + "</a>" + "</div>");
		}
		else {
			$('#picture').append("<div id = page><a href='" + link + "'>" + "Last FM Page" + "</a>" + "</div>");
		}
		$('#picture').append(player);
		$("#bigPic").css("opacity",0);
		$('#bigPic').attr("src", big);
		$("#picture").attr('class', 'show');
		setInfo(object,band);
		getSong(band);
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
		$("#bigPic").css("opacity",1);
				$('#transitionPic').remove();
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
				if (object.attr("city")  !== undefined) {
					info.innerHTML = "<br>" + object.attr("city") + "<br>" + object.attr("country") + "<br>" + object.attr("theatre") + "<br>" + object.attr("date");
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
			particles = [];
			for(var i = 0; i < 25; i++)
			{
				var p = new coloredParticle();
				p.setSize();
		        p.setColors();
				p.setVelocity();
		
			//This will add 50 particles to the array with random positions
			particles.push(p);

			}	
			setInterval(run, 50);
			text.txt = $("#artistSearch").val();
			$('#picture').html('')
			simArts();
			simLocArts();
			allShows();
			$("#picture").attr('class', 'hidden');

	}

getSong = function(name){
	if (name.indexOf(",") > 0) {
		name = name.slice(0,name.indexOf(","));
	}
	$.ajax({
		url: 'http://hkr.me:8001/?url=' + encodeURIComponent('http://developer.echonest.com/api/v4/song/search?api_key=N6E4NIOVYMTHNDM8J&format=json&results=5&artist=' + name + '&bucket=id:7digital-US&bucket=audio_summary&bucket=tracks') + "&jsonp=?",
		dataType: "json",
		success: callBack

	});

}



callBack = function(data) {
	if (data.response.status.message !== "Success") {
				getSong(name);
			}
	else {
	var trackList = []

	$.each(data.response.songs, function(i, item) {
		var trackName = item.title

		if (item.tracks.length > 0){
			var preview = item.tracks[0].preview_url
			trackList.push({title:trackName,mp3:preview})
		}
	});
	


			new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_1",
				cssSelectorAncestor: "#jp_container_1"
			}, trackList, {
				swfPath: "js",
 				solution: 'html, flash',
				 supplied: 'mp3',
				 preload: 'metadata',
				 volume: 0.8,
				 muted: false,
				 backgroundColor: '#000000',
				 cssSelectorAncestor: '#jp_container_1',
				 cssSelector: {
				  videoPlay: '.jp-video-play',
				  play: '.jp-play',
				  pause: '.jp-pause',
				  stop: '.jp-stop',
				  seekBar: '.jp-seek-bar',
				  playBar: '.jp-play-bar',
				  mute: '.jp-mute',
				  unmute: '.jp-unmute',
				  volumeBar: '.jp-volume-bar',
				  volumeBarValue: '.jp-volume-bar-value',
				  volumeMax: '.jp-volume-max',
				  currentTime: '.jp-current-time',
				  duration: '.jp-duration',
				  fullScreen: '.jp-full-screen',
				  restoreScreen: '.jp-restore-screen',
				  repeat: '.jp-repeat',
				  repeatOff: '.jp-repeat-off',
				  gui: '.jp-gui',
				  noSolution: '.jp-no-solution'
				 },
				 errorAlerts: false,
				 warningAlerts: false
			});
	}
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
				console.log(data1);
				$("#shows").html("");


				$.each(data1.events.event, function(i, item) {
				//alert($.inArray(item,data2.topartists.artist));	
					
						var artist = document.createElement("div");
						artist.className = "artist";
						artist.id = item.artists.artist;

						var img = document.createElement("div");
						img.className = "img";
						img.innerHTML = "<img src='" + item.image[3]["#text"] + "' data-big=" + item.image[3]["#text"] + " band='" + item.artists.artist + "' city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name + "' link='" + item.url + "' date='" + item.startDate + "'>"

						var link = document.createElement("div");
						link.className = "link";
						if (item.url.slice(0,7) !== "http://") {
							link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
							//link.innerHTML = "<a href='" + "http://" + item.url + "'>" + item.artists.artist + "</a>";
						}
						else {
							link.innerHTML = "<a href='" + item.url + "'>" + item.artists.artist + "</a>";
						}
						link.innerHTML = "<div id='" + item.artists.artist  + "' data-big=" + item.image[3]["#text"] + " band='" + item.artists.artist + "' city='" + item.venue.location.city + "'" + " country='" + item.venue.location.country + "'" + " theatre='" + item.venue.name+ "' link='" + item.url + "' date='" + item.startDate + "'>" + item.artists.artist + "</div>";
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
						img.innerHTML = "<img src=" + item.image[3]["#text"] + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "' link='" +item.url +"'>"

						var link = document.createElement("div");
						link.className = "link";
						link.innerHTML = "<div id='" + item.name  + "' data-big=" + item.image[4]["#text"] + " band='" + item.name + "' link='" +item.url + "'>" + item.name + "</div>";
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
						img.innerHTML = "<img src=" + item.image[3]["#text"] + " data-big=" + item.image[4]["#text"] + " band='" + item.name + "' link='" +item.url +"'>"

						var link = document.createElement("div");
						link.className = "link";
						link.innerHTML = link.innerHTML = "<div id='" + item.name  + "' data-big=" + item.image[4]["#text"] + " band='" + item.name + "' link='" +item.url + "'>" + item.name + "</div>";
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

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function redrawAll() {
var blur = 10;
var width = ctx.measureText(text).width + blur * 2;
ctx.textBaseline = "top"
ctx.shadowColor = "#606060"
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.font = "25px Lucida Grande";
ctx.shadowBlur = blur;
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText(text.txt, text.x, text.y);
}

function run () {
	ctx.clearRect(0, 0, 2000, 1000);
	if (text.x +70>canvas.width) {
	text.xVel = text.xVel*(-1);
	text.x = canvas.width-70;
	}
	if (text.x<100) {
	text.xVel = text.xVel*(-1);
	text.x = 100;
	}
	text.x += text.xVel;

	if (text.y +30>canvas.height) {
	text.yVel = text.yVel*(-1);
	text.y = canvas.height-30;
	}
	if (text.y<20) {
	text.yVel = text.yVel*(-1);
	text.y = 20;
	}
	text.y += text.yVel;
	draw();
	redrawAll();
}



var W = 570; var H = 80;


var particles = [];
for(var i = 0; i < 50; i++)
{
	
	particles.push(new coloredParticle());
}


function Particle(){

	this.x = 350;
	this.y = 40;
	this.vx = 0;
	this.vy=0;
}
	
	Particle.prototype.setVelocity = function(){
	this.vx = Math.random()*20-5;
	this.vy = Math.random()*20-5;
}

	Particle.prototype.move = function(){
	this.x += this.vx;
	this.y += this.vy;
}
	
	Particle.prototype.setSize = function(){
	this.radius = Math.random()*5+5;
}

function coloredParticle(){
	Particle.call(this);
}
	coloredParticle.prototype = new Particle();

	coloredParticle.prototype.setColors = function(){
	var r = Math.random()*255>>0;
	var g = Math.random()*255>>0;
	var b = Math.random()*255>>0;
	this.color = "rgba("+r+", "+g+", "+b+", 0.5)";
}


var x = 100; var y = 50;


function draw()
{
	ctx.clearRect(0, 0, 2000, 1000);
	ctx.globalCompositeOperation = "source-over";
	ctx.globalCompositeOperation = "lighter";
	
	for(var t = 0; t < particles.length; t++)
	{
		var p = particles[t];


		ctx.beginPath();
		
		
		var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
		gradient.addColorStop(0, "white");
		gradient.addColorStop(0.4, "white");
		gradient.addColorStop(0.4, p.color);
		gradient.addColorStop(0.2, "white");
		
		ctx.fillStyle = gradient;
		ctx.arc(p.x, p.y, p.radius, Math.PI*2, false);
		ctx.fill();
		

		p.move();
		
	}
}

