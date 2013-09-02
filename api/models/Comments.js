/**
 * Comments
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
  	
  	body: {
	    type: 'string',
	    maxLength: 140,
	    minLength: 1,
      	required: true
  	},

	 name: {
	    type: 'string',
	    maxLength: 20,
	    minLength: 2,
      	required: true
  	}

  	
    
  }

};
