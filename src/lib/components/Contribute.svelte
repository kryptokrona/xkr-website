<script>
    import {onMount} from "svelte";

    let username
    let commitMsg
    let additions
    let deletions
    let avatar
    let url

    onMount(() => {
        //Fetches the last commit on given url
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/commits/master")
            .then((response) => response.json())
            .then((data) => {
                username = data.author.login
                commitMsg = data.commit.message
                additions = data.stats.additions
                deletions = data.stats.deletions
                avatar = data.author.avatar_url
                url = data.html_url
            });
    })

</script>

<div>

    <p>This project is open source and maintained by the Community. You can for example make changes to this site,
        suggest awesome new features, or help us squash bugs. Not a developer? No worries, there's tons of things to
        do!</p>

</div>

<style lang="scss">

</style>