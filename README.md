I started off by reading through the code and fixing a couple of obvious easter eggs. I left comments in the code where I made changes to help me see what I've alreay worked on. 
I used VSCode to run an anuglar server(ng serve) and work on the FE and I used Visual Studio to work on the backend code. 
I navigate to http://localhost:4200/ to see the app. 
I spent a lot of time trying to figure out how to get the backend to work with the frontend. 
Another challenge I had was with github, At one stadge I couldn't push my changes to the repo. I had to delete the repo and clone it again. 
I later figured out that I also need a gitignore file so I don't upload juck files to git. 


Eventually I got to an exception on the DBUsersChecks that looked like the issue was with either the DB connection or data wasn't being written correctly. 
I used a breakpoint and could see that the user id field looked like it was correct but I could not get the app to login.
I also checked the table on SQLWorkbench and saw it was empty - so I'm assuming I had issues writing to the DB.
I spent hours trying to debug the issue but I'm embarrassed to admint that I couldn't figure out what was wrong.

I am disappointed that I couldn't get the app to work but it reminded me of how much I still have to learn. 