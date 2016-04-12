export default class GitHubController{
    
    constructor($http){
        this.$http = $http;
        this.makeRequest();
    }
    
    makeRequest() {
        this.$http.get('https://api.github.com/users/kusi0')
         .then(this.assignToScope.bind(this));
   }
   
    assignToScope(response){
        this.email = response.data.email;
        this.User = response.data;
        
        this.$http.get(response.data.repos_url)
         .then(this.assignReposToScope.bind(this))
        
        console.log(this.User)
    }
    
    assignReposToScope(response){
        this.Repos = response.data
        console.log(this.Repos)
    }
    
}