export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user+'?client_id=1de9fb12dc2880ba8349&client_secret=16d678027a6e4b4c1334b3579b57a18a120f6dbd')
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos?client_id=1de9fb12dc2880ba8349&client_secret=16d678027a6e4b4c1334b3579b57a18a120f6dbd')
  }
}