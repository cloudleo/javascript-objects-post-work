var playlist = {'ok':1};

var updatePlaylist = (obj,name,title) => {
  obj[name] = title;
  return obj;
}

var removeFromPlaylist = (obj,name) => {
  delete obj[name];
  return obj;
}