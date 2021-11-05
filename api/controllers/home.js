module.exports = {


  friendlyName: 'Home',


  description: 'Home something.',


  inputs: {
    
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/homepage'
    }

  },


  fn: async function (inputs) {
    var posts = await Post.find();
    return {posts};

  }


};
