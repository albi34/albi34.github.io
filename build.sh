#!/bin/bash

cd colors-test && yarn build && cd ..

rsync -a -v --remove-source-files  ./colors-test/build/* ./