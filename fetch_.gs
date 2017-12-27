function fetch(url, options, accessToken) {
  if(!options["headers"]) {
    options["headers"] = {}
  }
  options["headers"]["Authorization"] = "Bearer " + accessToiken;
  return UrlFetchApp.fetch(url, options);
}
