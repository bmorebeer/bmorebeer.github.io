---
---
{% for brewery in site.data.breweries %}
id{{ brewery.id }}.onclick = function() {
  var id{{ brewery.id }}Marker = L.marker([{{ brewery.lat }},{{ brewery.long }}]).addTo(map);
}
{% endfor %}
