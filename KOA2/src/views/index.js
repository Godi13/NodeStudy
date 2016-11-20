module.exports = function(data) {
  var scripts = "";
  for (var i = data.compilation.chunks.length - 1; i > -1; i--) {
    scripts += "<script src='scripts/" + data.compilation.chunks[i].files[0].split('/')[2] + "'></script>";
  }

  var csslinks = "<link rel='stylesheet' href='stylesheets/" + data.compilation.chunks[0].files[1].split('/')[2] + "'>";

  var html = "{% extends 'layout.html' %}" +
  "{% block title %}{{title}}{% endblock %}" +

  "{% block head %}" + csslinks + "{% endblock %}" +

  "{% block content %}" +
  "<x-foo style='position: absolute; top: 40%'></x-foo>" +
  // "<x-foo style='position: absolute; top: 40%; right: 0; transform: rotateZ(180deg)'></x-foo>" +
  "{% endblock %}";

  html += "{% block scripts %}" + scripts + " {% endblock %}";
  return html;
}
