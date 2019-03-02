module.exports = {
  pluginOptions: {
    electronBuilder: {
    	builderOptions: {
			  linux: {
			  	category: "Education",
			    target: [
			    	"AppImage",
			    	"deb",
			    	"rpm",
			    	"snap",
			    	"tar.gz"
			    ]
			  },
			  win: {
			  	target: [
			  		"nsis",
			  		"portable"
			  	]
			  },
			  mac: {
			  	category: "public.app-category.education",
			  	target: [
			  		"dmg",
			  		"zip"
			  	]
			  }
    	}
    }
  }
}