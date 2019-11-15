function getMostFollowers(...usernames)
{
    let baseUrl = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function(data)
    {
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the followers with ${max.followers}`;
    });
}

