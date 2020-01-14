import 'leaflet.timeline'

document.addEventListener('DOMContentLoaded', function() {

console.log('Hello from /javascript/packs/mapTwo.js')
var mapVar = L.map("map_two", {
  center: [34.040951, -118.258579],
  zoom: 13
});
L.tileLayer('https://crores.s3.amazonaws.com/tiles/bkm/{z}/{x}/{y}.png').addTo(mapVar);
$.getJSON("map/line_data.geojson", function(data_data) {
  var timelineData = L.timeline(data_data, {
    style: function(data_data) {
      return {
        stroke: true,
        fillOpacity: 0.5
      }
    }, // end style: function(data_data)
    waitToUpdateMap: true,
    onEachFeature: function(data_data, layer) {
        layer.bindTooltip(data_data.properties.popup, {
          direction: 'top'
        });
      } // onEachFeature:
  }); // end let timelineData = L.timeline
  var timelineControl = L.timelineSliderControl({
    enableKeyboardControls: true,
    steps: 100,
    start: 1885,
    end: 1928,
  });
  timelineControl.addTo(mapVar);
  timelineData.addTo(mapVar);
  timelineControl.addTimelines(timelineData);
}); //  end $.getJSON

})
