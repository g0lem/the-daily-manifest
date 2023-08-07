//emscripten mock

#ifndef EMSCRIPTEN_MOCK
#define EMSCRIPTEN_MOCK
void emscripten_sleep(int n) {
    return;
}
#endif