import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './github.routes';
import GitHubController from './github.controller';

import githubUser from './directives/github_user';

export default angular.module('app.github', [uirouter])
    .config(routing)
    .controller('GitHubController', GitHubController)
    .directive('githubUser', githubUser)
    .name;