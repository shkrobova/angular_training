/**
 * Created by sha on 05.05.2015.
 */
angular.module('registrationFilter', []).filter('checkmark', function(){
    return function(input){
        return input ? '\u2713' : '\u2718';
    }
});
