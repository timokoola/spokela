// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$('#spotify_slider').foundation('slider', 'set_value', 1.2);
$('#radio_slider').foundation('slider', 'set_value', 2000);

var spotify_play_price = 0.0;
var spotify_plays = 1253640;
var spotify_total = 4400;
var radio_total = 58713;
var radio_plays = 5530 + 659;
var suomi = 5460000;
var radio_total_audience = 0.0;

updateAll();

$('[data-slider]').on('change.fndtn.slider', function(){
  updateAll();
});

function getSpotifyValue() {
  var sp_value = $('#spotify_slider').attr('data-slider');
  var sp_float = parseFloat(sp_value);
  return sp_float;
}

// just because Javascript hates all humanity
function updateValuesShown() {
  var sp_float = getSpotifyValue();
  $("#spotify_value").text(sp_float.toFixed(1));
  var sp_total_audience = sp_float * spotify_plays;
  $("#spotify_total_audience").text(sp_total_audience.toFixed(0));
  spotify_play_price = (spotify_total / sp_total_audience).toFixed(7);
  $("#spotify_price").text(spotify_play_price + "\u20AC");
}

function updateRadio() {
  var radio_value = $('#radio_slider').attr('data-slider');
  var radio_float = parseFloat(radio_value);
  $("#radio_value").text(radio_float.toFixed(1));
  radio_total_audience = radio_float * radio_plays;
  $("#radio_total_audience").text(radio_total_audience.toFixed(0));
  $("#radio_aud").text(radio_float.toFixed(0));
  $("#radio_avg").text((radio_total_audience/suomi).toFixed(1));
  var price_per_play = (radio_total / radio_total_audience).toFixed(7);

  var equil = ((radio_total / spotify_play_price) / radio_plays);

  $("#equil").text(equil.toFixed(2));

  $("#radio_price").text(price_per_play + "\u20AC");
}

function updateWhatIf() {
	var sp_float = getSpotifyValue();
	$("#spotify_supercrowd").text(radio_total_audience);
	$("#spotify_whatif").text(((radio_total_audience * spotify_play_price) / sp_float ).toFixed(2));
}


function updateAll() {
  updateValuesShown();
  updateRadio();
  updateWhatIf();
}