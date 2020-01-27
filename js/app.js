let app = function() {
  const DATA = {
    gists:[],
    message: "Hello"
  }

  function transformGists(gists) {
    return gists.map( gist => ( { url: gist.html_url, description: gist.description } ) )
  }

  async function loadGists() {
    let gists = await fetch('https://api.github.com/users/rmela/gists')
    DATA.gists = await gists.json()
    DATA.gists = DATA.gists.map( gist => ( { url: gist.html_url, description: gist.description } ) )
 console.log('msg4', DATA.gists)
  }

  return new Vue( {
    
    el: '#app',
    data: DATA,
    mounted: function() { setTimeout( loadGists, 0 ) }

  })
}()
    

