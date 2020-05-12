

window.onscroll = function() {myFunction()};

function myFunction() {
  var margin = 1500;

  if (document.body.scrollTop > margin * 9 || document.documentElement.scrollTop > margin * 9) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/Wetsuweten.gif')";
  } else if (document.body.scrollTop > margin * 8 || document.documentElement.scrollTop > margin * 8) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/OriginalPipeline.png')";
  } else if (document.body.scrollTop > margin * 7 || document.documentElement.scrollTop > margin * 7) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/GlobalMap_Combined.gif')";
  } else if (document.body.scrollTop > margin * 6 || document.documentElement.scrollTop > margin * 6) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/Kitimaat.jpg')";
  } else if (document.body.scrollTop > margin * 5 || document.documentElement.scrollTop > margin * 5) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/Kitimaat.jpg')";
  } else if (document.body.scrollTop > margin * 4 || document.documentElement.scrollTop > margin * 4) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/LNG_workcamps.jpg')";
  } else if (document.body.scrollTop > margin * 3 || document.documentElement.scrollTop > margin * 3) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/RCMP_Blockade.jpg')";
  } else if (document.body.scrollTop > margin * 2 || document.documentElement.scrollTop > margin * 2) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/WorkerCampsMap.png')";
  } else if (document.body.scrollTop > margin || document.documentElement.scrollTop > margin) {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/ConstructionStatus.png')";
  } else {
    document.getElementById("container").style.backgroundImage = "url('conflict_urbanism_sp2020/images/CoastalGaslink/Cover.jpg')";
  }
}
