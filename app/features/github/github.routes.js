export default function routes($stateProvider){
    $stateProvider
        .state('github', {
            url: '/github',
            template: require("./github.html"),
            controller: 'GitHubController',
            controllerAs: 'github'
        })
}