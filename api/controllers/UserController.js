/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * UserController.like()
     */
    like: function (req, res) {
        var datas = [{response: 'test'}];
        User.find().then(function(users){
            datas = users;
            sails.log(users);
            res.view('main', {response : datas});

        }).catch(function(err){
            sails.log(err)
        });
    },

    socket: function(req, res){
        sails.sockets.blast('message', {
            msg: 'hello from socket'
        }, req.socket);
        console.log('send msg')
    },
    register: function (req, res) {
        res.view('register');
    }
};
