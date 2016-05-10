import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './github.routes';
import GitHubController from './github.controller';
import GitHubService from './github.service';

import githubUser from './directives/github_user';
import githubRepos from './directives/github_repos';
import userInput from './directives/user_input';

export default angular.module('app.github', [uirouter])
    .config(routing)
    .service('GitHubService', GitHubService)
    .controller('GitHubController', GitHubController)
    .directive('githubUser', githubUser)
    .directive('githubRepos', githubRepos)
    .directive('userInput', userInput)
    .name;