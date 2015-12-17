var generators = require('yeoman-generator');
var path = require('path');
var _ = require('underscore.string');
var askName = require('inquirer-npm-name');
module.exports = generators.Base.extend({
	constructor: function(){
		generators.Base.apply(this,arguments);
		this.argument('appname', { type: String, required: false });
  		this.appname = this.appname || path.basename(process.cwd());
	},
	end :  function(){
			console.log('bye');
	},
	initializing: function(){
		 this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
		 this.props = {
	     	name: this.pkg.name
	     };
	},
	prompting : {
		askForModuleName : function(){
	      if (this.pkg.name || this.options.name) {
	        this.props.name = this.pkg.name || _.kebabCase(this.options.name);
	        return;
	      }

	      var done = this.async();

	      askName({
	        name: 'name',
	        message: 'Module Name',
	        default: path.basename(process.cwd()),
	        filter: _.kebabCase,
	        validate: function (str) {
	          return str.length > 0;
	        }
	      }, this, function (name) {
	        this.props.name = name;
	        done();
	      }.bind(this));
	    }
	},

	writing: function(){
		var join = path.join;
		var p = join(__dirname,'../templates/');
		this.log(p);
		this.props.name = _.camelize(_.slugify(_.humanize(this.props.name)));
		this.sourceRoot(p);
	   	this.directory('common/dev','dev');
	   	this.directory('common/lib','lib');
	   	this.directory('common/src','src');
	   	this.directory('common/test','test');
		this.fs.copyTpl(
			this.templatePath('../templates/common/package.json'),
			this.destinationPath('package.json'),
			{ appname:this.props.name }
		);
	   	this.copy('common/.babelrc','.babelrc');
	   	this.copy('common/.eslintrc','.eslintrc');
	   	this.copy('common/webpack.config.js','webpack.config.js');
	},
	installing: function () {
	    this.npmInstall();
	  }
	
});