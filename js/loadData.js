async function repos() {
  let repos = await fetch('https://api.github.com/users/rmela/repos')
  repos = await repos.json()
  return repos.map( gist => ( { url: gist.html_url, name: gidescription: gist.description } ) )
}

async function gists() {
  let gists = await fetch('https://api.github.com/users/rmela/gists')
  gists = await gists.json()
  return gists.map( gist => ( { url: gist.html_url, description: gist.description } ) )
}

