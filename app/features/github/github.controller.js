export default class GitHubController{
    
    constructor($http){
        this.$http = $http;
        this.makeRequest();
    }
    
    makeRequest() {
        this.$http.get('https://api.github.com/users/bslipek')
         .then(this.assignToScope.bind(this));
   }
   
    assignToScope(response){
        this.email = response.data.email;
        this.User = response.data;
        console.log(this.User)
    }
    
}