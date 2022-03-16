const linksSocialMedia = {
  github: 'anakarolinimarinho',
  instagram: 'anakarolinimarinho',
  facebook: 'anakarolinimarinho'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `htpps://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}
getGitHubProfileInfos()
