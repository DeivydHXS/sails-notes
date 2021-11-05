module.exports = {


  friendlyName: 'New',


  description: 'New something.',


  inputs: {

    title: {
      type: 'string',
      required: true
    },

    text: {
      type: 'string',
      required: true
    },

    author: {
      type: 'string',
      required: true
    },

  },


  exits: {

    redirect: {
      responseType: 'redirect',
      description: ''
    },

  },


  fn: async function (inputs) {

    await Post.create({ title: inputs.title, text: inputs.text, author: inputs.author });
    throw {redirect:'/'};

  }


};
