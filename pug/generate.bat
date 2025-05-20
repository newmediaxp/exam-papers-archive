@echo build started ...
call pug ./pug/index.pug -o ./ -P 
call pug ./pug/about.pug -o ./ -P 
call pug ./pug/wbsu-ug.pug -o ./ -P 
call pug ./pug/404.pug -o ./ -P 
@echo ... build finished
exit