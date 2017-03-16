My basic Gulp boilerplate.

Unable to find a gulp tutorial/repo that had included SASS
I made this for myself so I could start projects faster.
You may find it rough around the edges and there is room for improvement.

It based off various tutorials I found online for adding theses tools to gulp.

Includes:
• Bootstrap 3
• SASS (scss)
• Auto-prefixer
• Uglify
• Browser-sync


INSTALL:

- Clone repo to project directory
- Run 'npm install' from command line

COMMANDS:

GULP
Calling 'gulp' will covert and prefix your sass to css. Afterwards gulp will watch for file changes in your app folder while activly reloading your content locally at localhost:3000. 

Browser-sync allows you to view your app externally on any device. In order to do that, use the external IP generated in the command line after running 'gulp'.

GULP BUILD
	
Calling 'gulp build' will do the above tasks but copy all the content to a 'build' folder including only the essential files for running your app. The local server now points to your 'build' for testing.

'gulp build' will rebuild your 'build' folder every time you run it so make changes in the 'app' folder or backup any changes you make in the 'build' folder before running 'gulp build'.
