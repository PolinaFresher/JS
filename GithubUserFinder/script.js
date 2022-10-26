const userName = document.querySelector("#userName");
const displayUser = document.querySelector("#detectedUser");
const client_id = "f87f791e3012f3924b6b";
const client_secret = "15656eee74dc31b6fcd74d4961c31fb842e5e01e";

function showInfo(data) {
    
  for(object in data ) {
      if(data[object] == null) {
        data[object] = "—"
      }
  }
    displayUser.style.display = "flex";
  
    let img = document.querySelector(".userAvatar");
    let userInfo = document.querySelector("#userInfo");
  
    userInfo.innerHTML = 
    `<li><span>Name: </span> ${data.name}</li>
    <li><span>Bio: </span> ${data.bio}</li>
    <li><span>Location: </span> ${data.location}</li>
    <li><span>Company: </span> ${data.company}</li>
    <li> <a href=${data.html_url}> GitHub Link Profile</a></li>`;
    img.innerHTML = `<img src="${data.avatar_url}">`;
  }
  
  class GitHub {
    async getUser(user) {
        const profileResponse = await fetch(
          `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
        );
        const profileData = await profileResponse.json();
        return {
          profile: profileData,
        };
      }
    }

    let user = new GitHub();

  userName.addEventListener("keyup", (event) => {
    currentUser = user.getUser(event.target.value);
    if (currentUser) {
      currentUser.then((data) => {
        if (data.profile.message == "Not Found") {
         userInfo.innerHTML = "User Not Found";
        } else {
          showInfo(data.profile);
        }
      });
    } else {
      clearProfile();
    }
  });
  
  function clearProfile() {
    displayUser.style.display = "none";
  }