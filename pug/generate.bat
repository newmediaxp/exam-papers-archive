@echo off

call pug ./pug/home.pug -o ./ -P 
call pug ./pug/about.pug -o ./ -P 
call pug ./pug/wbsu-ug.pug -o ./ -P 

exit