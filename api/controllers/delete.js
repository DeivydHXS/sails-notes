module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

    redirect: {
      responseType: 'redirect',
      description: ''
    },

  },


  fn: async function (inputs) {
    await Post.destroy({ id: inputs.id });
    throw {redirect:'/'};
    // return {};

  }


};
