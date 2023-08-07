#!/bin/bash

# gcc main.c && ./a.out
source ./emsdk/emsdk_env.sh
#OpenGL
clear
emcc ./src/main.c -s MIN_WEBGL_VERSION=2 -s USE_SDL=2 -s USE_SDL_IMAGE=2 -s ASYNCIFY -o server/public/the-daily-manifest.html --embed-file src/assets
gcc -o the-daily-manifest src/main.c `sdl2-config --cflags --libs` -lSDL2_image
