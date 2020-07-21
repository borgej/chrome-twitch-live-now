var CLIENT_ID = "vxvqei2z004g5l7ygp0c7qlmfwwulm";
var SECRET = "9o7i9d4oybqy30n8zix1jqzl1oew0b";

var user;
var userId;
var followedChannels = [];
var onlineChannels = [];
var updateInterval = 5;

document.getElementById("update").addEventListener("click", getUser);

// TODO: GET user data from input
function getUser() {
  var url = "https://api.twitch.tv/helix/users?login=";
  var userName = $("#channel").val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: url + userName,
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': 'Bearer ' + SECRETTEST
    },
    success: function(data) {
      console.log("getUser.success");
      console.log(data);
      userId = data['data'][0].id;
      updateFollowedChannels(userId);
    }
  });
}

// TODO: GET all followed channels of the username
function getFollowedChannels(userId) {
  var url = "https://api.twitch.tv/helix/users/follows?from_id=";

  console.log("getFollowedChannels");

  $.ajax({
    type: "GET",
    dataType: "json",
    url: url + userId,
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': 'Bearer ' + SECRETTEST
    },
    success: function(data) {
      console.log("getFollowedChannels.success");
      console.log(data);
      updateFollowedChannels(data);
    }
  });
}

// TODO: Update channels table in the popup.html
function updateOnlineChannels(data) {
  console.log("updateOnlineChannels");

}
