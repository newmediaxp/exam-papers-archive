#!/bin/bash
echo build started ...
pug ./pug/index.pug -o ./ -P
pug ./pug/about.pug -o ./ -P
pug ./pug/wbsu-ug.pug -o ./ -P
pug ./pug/404.pug -o ./ -P
echo ... build finished
exit